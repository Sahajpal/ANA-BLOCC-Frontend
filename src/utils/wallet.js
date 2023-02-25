import { ethers } from "ethers";
import abi from "./abi/abi.json";

async function connectWallet() {
  await window.ethereum.enable();
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  return signer;
  // todo @sahaj
  // await signer.getAddress() returns the address
  // do a call to BE with jwt and address in the body here - it can be a duplicate call but we do not care.
}

async function getConnectedContract() {
  const contract_address = "0xFC2AE819bECd3BDdA4C8a838dCfA2CE4E64eeAD6";
  const signer = await connectWallet();
  const connectedContract = new ethers.Contract(
    contract_address,
    abi.abi,
    signer
  );
  connectedContract.on("InitiateSale", (ownershipId) => {
    console.log("OwnershipId event emitted : ", ownershipId.toNumber());
  });
  connectedContract.on("CloseSale", (ownershipId) => {
    console.log("OwnershipId closed event emitted: ", ownershipId.toNumber());
  });
  return connectedContract;
}

export default getConnectedContract;
