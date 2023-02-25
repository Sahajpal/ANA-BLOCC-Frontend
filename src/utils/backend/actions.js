import fetchUtil from "./utils";

const registerWallet = async (walletAddress) => {
    fetchUtil('/users/wallet', { body: { address: walletAddress } });
}

const initiateSale = async (ownershipId, buyerId, transactionHash) => {
    console.error('Yet to be implemented');
}

const initiateSaleFromAdmin = async () => {
    console.error('Yet to be implemented');
}

export {
    registerWallet,
    initiateSale,
    initiateSaleFromAdmin,
};
