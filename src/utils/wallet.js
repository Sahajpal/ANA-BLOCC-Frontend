import { ethers } from  'ethers';

async function connectWallet() {
    await window.ethereum.enable()
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    return signer;
    // todo @sahaj
    // await signer.getAddress() returns the address
    // do a call to BE with jwt and address in the body here - it can be a duplicate call but we do not care.
}

async function getConnectedContract() {
    const contract_address = '';
    const abi = { abi: '' };
    const signer = await connectWallet();
    const connectedContract = new ethers.Contract(contract_address, abi.abi, signer);
}

export default getConnectedContract;