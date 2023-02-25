import getConnectedContract from './wallet';


async function initiateSale(pixels, buyer) {
    console.log('tryna initiate sale');
    const contract = await getConnectedContract();
    const result = await contract.initiateSaleFromAdmin(pixels, buyer, {
        gasLimit: 2100000,
        gasPrice: 8000000000,
    });
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

async function readSale() {
    const contract = await getConnectedContract();
    const res = await contract.getOpenSales();
    console.log(JSON.stringify(res));
}

export {
    initiateSale,
    acceptSale,
    uploadDocuments,
    initiatePayment,
    acknowledgePayment,
    cancelSale,
    readSale,
};
