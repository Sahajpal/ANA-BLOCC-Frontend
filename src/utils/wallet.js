import { ethers } from "ethers";
import abi from "./abi/abi.json";
import { registerWallet } from "./backend/actions";

async function connectWallet() {
  await window.ethereum.enable();
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  // const address = await signer.getAddress();
  // const walletResult = await registerWallet(address);
  // if (!walletResult.success) return walletResult;
  return { success: true, data: { signer } };
}

async function getConnectedContract() {
  const contract_address = "0xA7cCd8E659099dfe58E394AAb4442E246D46b061";
  const signerRes = await connectWallet();
  if (!signerRes.success) return signerRes;
  const connectedContract = new ethers.Contract(
    contract_address,
    abi.abi,
    signerRes.data.signer,
  );
  return { success: true, data: { contract: connectedContract } };
}

export default getConnectedContract;
