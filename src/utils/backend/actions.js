import fetchUtil from "./utils";

const registerWallet = async (walletAddress) => {
    const result = await fetchUtil.post('/users/wallet', { body: { address: walletAddress } });
    return result;
}

export {
    registerWallet,
};
