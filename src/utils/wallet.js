import { ethers } from "ethers";
import abi from "./abi/abi.json";
import { registerWallet } from "./backend/actions";

async function connectWallet() {
  await window.ethereum.enable();
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const address = await signer.getAddress();
  const walletResult = await registerWallet(address);
  if (!walletResult.success) return walletResult;
  return { success: true, data: { signer } };
}

async function getConnectedContract() {
  const contract_address = "0xFC2AE819bECd3BDdA4C8a838dCfA2CE4E64eeAD6";
  const signerRes = await connectWallet();
  if (!signerRes.success) return signerRes;
  const connectedContract = new ethers.Contract(
    contract_address,
    abi.abi,
    signerRes.data.signer,
  );
  return { success: true, data: { connectedContract } };
}

export default getConnectedContract;
