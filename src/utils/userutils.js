import getConnectedContract from './wallet';
import { getOwnershipInfo } from './backend/ownership';
import { getUserInfo } from './backend/user';
import fetchUtil from './backend/utils';

const errorToMessageMap = {
    'E0' : 'Only admins are allowed to perform this action',
    'E1' : 'Only property owners can perform this action',
    'E2' : 'Only approved buyer can perform this action',
    'E3' : 'This action cannot be performed at this stage of the transaction',
    'E5' : 'You cannot be the buyer of your own property',
    'E0A' : 'You are not allowed to do this action.'
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
    const ownershipPromise = getOwnershipInfo(ownershipId);
    const buyerPromise = getUserInfo(buyerId);
    const contractPromise = getConnectedContract();
    const [ownership, buyer, contract] = await Promise.all([ownershipPromise, buyerPromise, contractPromise]);
    const { ownershipId } = ownership;
    const { walletAddress: buyerAddress } = buyer;
    let result;
    try{
        result = await contract.initiateSale(ownershipId, buyerAddress, {
            gasLimit: 2100000,
            gasPrice: 8000000000,
        });
    } catch(err) {
        const { reason } = err;
        const processedReason = reason.replace('execution reverted: ','');
        return { success: false, reason: `Error in initiating sale : ${errorToMessageMap[processedReason]}` };
    }
    fetchUtil.post('', { body: ownershipId, buyerId, transactionHash: result.hash })
    return { success: true };
}

async function acceptSaleUtil(ownershipId) {
    const contract = await getConnectedContract();
    let result;
    try {
        result = await contract.acceptSale(ownershipId);
    } catch(err) {
        const { reason } = err;
        const processedReason = reason.replace('execution reverted: ','');
        return { success: false, reason: `Error in accepting sale. ${errorToMessageMap[processedReason]}` };
    }
    fetchUtil.post('', { body: { ownershipId, transactionHash: result.hash }});
    return { success: true };
}

async function uploadDocumentsUtil() {
    // todo Kartikey
}

async function approveDocumentsUtil(ownershipId) {
    const contract = await getConnectedContract();
    let result;
    try {
        result = await contract.approveDocuments(ownershipId);
    } catch(err) {
        const { reason } = err;
        const processedReason = reason.replace('execution reverted: ','');
        return { success: false, reason: `Error in approving documents. ${errorToMessageMap[processedReason]}` };
    }
    fetchUtil.post('', { body: { ownershipId, transactionHash: result.hash }});
    return { success: true };
}

async function rejectDocumentsUtil(ownershipId) {
    const contract = await getConnectedContract();
    let result;
    try {
        result = await contract.rejectDocuments(ownershipId);
    } catch(err) {
        const { reason } = err;
        const processedReason = reason.replace('execution reverted: ','');
        return { success: false, reason: `Error in rejecting documents. ${errorToMessageMap[processedReason]}` };
    }
    fetchUtil.post('', { body: { ownershipId, transactionHash: result.hash }});
    return { success: true };
}

async function initiatePaymentUtil(ownershipId) {
    const contract = await getConnectedContract();
    let result;
    try {
        result = await contract.initiatePayment(ownershipId);
    } catch(err) {
        const { reason } = err;
        const processedReason = reason.replace('execution reverted: ','');
        return { success: false, reason: `Error in initiating payments. ${errorToMessageMap[processedReason]}` };
    }
    fetchUtil.post('', { body: { ownershipId, transactionHash: result.hash }});
    return { success: true };
}

async function acknowledgePaymentUtil(ownershipId) {
    const contract = await getConnectedContract();
    let result;
    try {
        result = await contract.acknowledgePayment(ownershipId);
    } catch(err) {
        const { reason } = err;
        const processedReason = reason.replace('execution reverted: ','');
        return { success: false, reason: `Error in acknowledging payments. ${errorToMessageMap[processedReason]}` };
    }
    fetchUtil.post('', { body: { ownershipId, transactionHash: result.hash }});
    return { success: true };
}

async function approveDocumentsAndGetId(hashArray, buyerAddress, contract) {
    const contract = await getConnectedContract();
    const result = await contract.approveDocumentsAndMarkSale(hashArray, buyerAddress);
    return new Promise((resolve, reject) => {
        contract.on('CloseSale', res => {
            resolve({ hash: result.hash, ownershipId: res.toNumber() });
        });
    });
}
async function closeSaleUtil(ownershipId) {
    const ownershipPromise = getOwnershipInfo(ownershipId);
    const [contract, ownership] = await Promise.all([contractPromise, ownershipPromise]);
    const buyer = await getUserInfo(ownership.buyerId);
    let result;
    try {
        const hashArray = _.map(ownership.property.pixels, pixel => pixel.hash);
        result = await approveDocumentsAndGetId(hashArray, buyer.walletAddress, contract);
    } catch(err) {
        const { reason } = err;
        const processedReason = reason.replace('execution reverted: ','');
        return { success: false, reason: `Error in closing sale. ${errorToMessageMap[processedReason]}` };
    }
    fetchUtil.post('', { body: { transactionHash: result.hash, newOwnershipId: result.ownershipId, oldOwnershipId: ownershipId } });
}

async function cancelSaleUtil(ownershipId) {
    const contract = await getConnectedContract();
    let result;
    try {
        result = await contract.cancelSale(ownershipId);
    } catch(err) {
        const { reason } = err;
        const processedReason = reason.replace('execution reverted: ','');
        return { success: false, reason: `Error in cancelling sales. ${errorToMessageMap[processedReason]}` };
    }
    fetchUtil.post('', { body: { ownershipId, transactionHash: result.hash }});
    return { success: true };
}

async function readSale() {
    const contract = await getConnectedContract();
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
