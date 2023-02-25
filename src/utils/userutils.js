import getConnectedContract from './wallet';


async function initiateSale(pixels) {
    const contract = getConnectedContract();
    const result = await contract.initiateSale(pixels);
    console.log('Result : ', result.hash);
    // todo listen to ownershipId
    // todo send the hash to BE for reference
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


module.exports = {
    initiateSale,
    acceptSale,
    uploadDocuments,
    initiatePayment,
    acknowledgePayment,
    cancelSale,
}