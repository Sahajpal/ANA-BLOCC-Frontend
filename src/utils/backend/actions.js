import fetchUtil from "./utils";

const registerWallet = async (walletAddress) => {
    fetchUtil('/users/wallet', { body: { address: walletAddress } });
}

export {
    registerWallet,
};
