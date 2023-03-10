import _ from "underscore";
import getConnectedContract from "./wallet";
import { getOwnershipInfo } from "./backend/ownership";
import { getUserInfoWithAadhar, getUserInfoWithId } from "./backend/user";


import fetchUtil from "./backend/utils";
const baseUrl = process.env.REACT_APP_BASE_URL;


const errorToMessageMap = {
  E0: "Only admins are allowed to perform this action",
  E1: "Only property owners can perform this action",
  E2: "Only approved buyer can perform this action",
  E3: "This action cannot be performed at this stage of the transaction",
  E5: "You cannot be the buyer of your own property",
  E0A: "You are not allowed to do this action.",
};

// async function initiateSaleFromAdmin(pixels, buyer) {
//     const contract = await getConnectedContract();
//     const result = await contract.initiateSaleFromAdmin(pixels, buyer, {
//         gasLimit: 2100000,
//         gasPrice: 8000000000,
//     });
//     initiateSaleFromAdmin(result.hash);
// }

async function initiateSaleUtil(ownershipId, buyerId) {
    const buyerPromise = getUserInfo(buyerId);
    const contractPromise = getConnectedContract();
    const [buyer, contractRes] = await Promise.all([buyerPromise, contractPromise]);
    if (!contractRes.success) return contractRes;
    const { contract } = contractRes.data;
    const { walletAddress: buyerAddress } = buyer;
    let result;
    try{
        result = await contract.initiateSale(ownershipId, buyerAddress, {
            gasLimit: 2100000,
            gasPrice: 8000000000,
        });
    } catch(err) {
        const { reason } = err;
        console.error(err);
        // const processedReason = reason.replace('execution reverted: ','');
        return { success: false, reason: `Error in initiating sale`} // : ${errorToMessageMap[processedReason]}` };
    }
    fetchUtil.post(`${baseUrl}/ownerships/${ownershipId}/action/SALE_INITIATED`, { body: { buyerId: buyer._id, transactionHash: result.hash } })
    return { success: true };
}

async function acceptSaleUtil(ownershipId) {
    const contractRes = await getConnectedContract();
    if (!contractRes.success) return contractRes;
    const { contract } = contractRes.data;
    let result;
    try {
        result = await contract.acceptSale(ownershipId);
    } catch(err) {
        console.error(err);
        return { success: false, reason: `Error in accepting sale`} // : ${errorToMessageMap[processedReason]}` };
    }
    fetchUtil.post(`${baseUrl}/ownerships/${ownershipId}/action/SALE_ACCEPTED`, { body: { transactionHash: result.hash }});
    return { success: true };

}

async function uploadDocumentsUtil(ownershipId) {
  const docUrl =
    "https://myhq-test.s3.amazonaws.com/myHQ-Invoice-DL2023MYHQC10268-CORPORATE.pdf";
  const contractRes = await getConnectedContract();
  if (!contractRes.success) return contractRes;
  const { contract } = contractRes.data;
  let result;
  try {
    result = await contract.uploadBuyerDocs(docUrl, ownershipId);
  } catch (err) {
    const { reason } = err;
    const processedReason = reason.replace("execution reverted: ", "");
    return {
      success: false,
      reason: `Error in accepting sale. ${errorToMessageMap[processedReason]}`,
    };
  }
  const documents = [{ ipfsAddress: docUrl }];
  fetchUtil.post(`${baseUrl}/ownerships/${ownershipId}/action/SALE_ACCEPTED`, {
    body: { documents, transactionHash: result.hash },
  });
  return { success: true };
}

async function approveDocumentsUtil(ownershipId) {
    const contractRes = await getConnectedContract();
    if (!contractRes.success) return contractRes;
    const { contract } = contractRes.data;
    let result;
    try {
        result = await contract.approveDocuments(ownershipId);
    } catch(err) {
        return { success: false, reason: `Error in approving documents` };
    }
    fetchUtil.post(`${baseUrl}/ownerships/${ownershipId}/action/DOC_APPROVED`, { body: { transactionHash: result.hash }});
    return { success: true };
}

async function rejectDocumentsUtil(ownershipId) {
    const contractRes = await getConnectedContract();
    if (!contractRes.success) return contractRes;
    const { contract } = contractRes.data;
    let result;
    try {
        result = await contract.rejectDocuments(ownershipId);
    } catch(err) {
        return { success: false, reason: `Error in rejecting documents.` };
    }
    fetchUtil.post(`${baseUrl}/ownerships/${ownershipId}/action/DOC_REJECT`, { body: { transactionHash: result.hash }});
    return { success: true };
}

async function initiatePaymentUtil(ownershipId) {
    const contractRes = await getConnectedContract();
    if (!contractRes.success) return contractRes;
    const { contract } = contractRes.data;
    let result;
    try {
        result = await contract.initiatePayment(ownershipId);
    } catch(err) {
        return { success: false, reason: `Error in initiating payments.` };
    }
    fetchUtil.post(`${baseUrl}/ownerships/${ownershipId}/action/TX_INITIATED`, { body: { transactionHash: result.hash }});
    return { success: true };
}

async function acknowledgePaymentUtil(ownershipId) {
  const contractRes = await getConnectedContract();
  if (!contractRes.success) return contractRes;
  const { contract } = contractRes.data;
  let result;
  try {
    result = await contract.acknowledgePayment(ownershipId);
  } catch (err) {
    const { reason } = err;
    const processedReason = reason.replace("execution reverted: ", "");
    return {
      success: false,
      reason: `Error in acknowledging payments. ${errorToMessageMap[processedReason]}`,
    };
  }
  fetchUtil.post(
    `${baseUrl}/ownerships/${ownershipId}/action/TX_ACKNOWLEDGED`,
    { body: { transactionHash: result.hash } }
  );
  return { success: true };
}

async function approveDocumentsAndGetId(hashArray, buyerAddress, contract) {
  const result = await contract.approveDocumentsAndMarkSale(
    hashArray,
    buyerAddress
  );
  return new Promise((resolve, reject) => {
    contract.on("CloseSale", (res) => {
      resolve({ hash: result.hash, ownershipId: res.toNumber() });
    });
  });
}
async function closeSaleUtil(ownershipId) {
    const ownershipPromise = getOwnershipInfo(ownershipId);
    const contractPromise = getConnectedContract();
    const [ contractRes,ownership] = await Promise.all([contractPromise, ownershipPromise]);
    if (!contractRes.success) return contractRes;
    const { contract } = contractRes.data;
    const buyer = await getUserInfo(ownership.buyerId);
    let result;
    try {
        const hashArray = _.map(ownership.property.pixels, pixel => pixel.hash);
        result = await approveDocumentsAndGetId(hashArray, buyer.walletAddress, contract);
    } catch(err) {
        return { success: false, reason: `Error in closing sale.` };
    }
    fetchUtil.post(`${baseUrl}/ownerships/${ownershipId}/action/CLOSED`, { body: { transactionHash: result.hash, newOwnershipId: result.ownershipId } });
}

async function cancelSaleUtil(ownershipId) {
    const contractRes = await getConnectedContract();
    if (!contractRes.success) return contractRes;
    const { contract } = contractRes.data;
    let result;
    try {
        result = await contract.cancelSale(ownershipId);
    } catch(err) {
        return { success: false, reason: `Error in cancelling sales.` };
    }
    fetchUtil.post(`${baseUrl}/ownerships/${ownershipId}/action/CANCEL_SALE`, { body: { transactionHash: result.hash }});
    return { success: true };
}

async function readSale() {
  const contractRes = await getConnectedContract();
  if (!contractRes.success) return contractRes;
  const { contract } = contractRes.data;
  const res = await contract.getOpenSales();
  console.log(JSON.stringify(res));
}

export {
  initiateSaleUtil,
  acceptSaleUtil,
  uploadDocumentsUtil,
  approveDocumentsUtil,
  rejectDocumentsUtil,
  initiatePaymentUtil,
  acknowledgePaymentUtil,
  cancelSaleUtil,
  closeSaleUtil,
};
