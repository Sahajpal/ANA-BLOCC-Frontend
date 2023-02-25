import getConnectedContract from './wallet';
import { getOwnershipInfo } from './backend/ownership';
import { getUserInfo } from './backend/user';
import { initiateSale, initiateSaleFromAdmin } from './backend/actions';

async function initiateSaleFromAdmin(pixels, buyer) {
    const contract = await getConnectedContract();
    const result = await contract.initiateSaleFromAdmin(pixels, buyer, {
        gasLimit: 2100000,
        gasPrice: 8000000000,
    });
    initiateSaleFromAdmin(result.hash);
}

async function initiateSale(ownershipId, buyerId) {
    const ownershipPromise = getOwnershipInfo(ownershipId);
    const buyerPromise = getUserInfo(buyerId);
    const contractPromise = getConnectedContract();
    const [ownership, buyer, contract] = await Promise.all([ownershipPromise, buyerPromise, contractPromise]);
    const { ownershipId } = ownership;
    const { walletAddress: buyerAddress } = buyer;
    const result = await contract.initiateSale(ownershipId, buyerAddress, {
        gasLimit: 2100000,
        gasPrice: 8000000000,
    });
    initiateSale(ownershipId, buyerId, result.hash);
}

async function acceptSale(ownershipId) {
    
}

async function uploadDocuments() {
    // todo Kartikey
}

async function approveDocuments() {
    // from admin
}

async function rejectDocuments() {
    // from admin
}

async function initiatePayment() {

}

async function acknowledgePayment() {

}

async function closeSale() {
    // from admin
}

async function cancelSale() {}

async function readSale() {
    const contract = await getConnectedContract();
    const res = await contract.getOpenSales();
    console.log(JSON.stringify(res));
}

export {
    initiateSale,
    initiateSaleFromAdmin,
    acceptSale,
    uploadDocuments,
    initiatePayment,
    acknowledgePayment,
    cancelSale,
    readSale,
};
