import fetchUtil from "./utils";

const getOwnershipInfo = async (ownershipId) => {
    const ownership = await fetchUtil.get(`/ownership/${ownershipId}`);
    return ownership;
}

export {
    getOwnershipInfo,
}