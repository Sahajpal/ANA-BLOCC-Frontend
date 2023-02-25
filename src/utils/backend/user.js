import fetchUtil from "./utils"

const getUserInfoWithId = async (userId) => {
    const user = await fetchUtil.get(`/users/${userId}`);
    return user;
}

const getUserInfoWithAadhar = async (aadhar) => {
    const user = await fetchUtil.get(`/users/aadhar/${aadhar}`);
    return user;
}

export {
    getUserInfoWithId,
    getUserInfoWithAadhar,
}