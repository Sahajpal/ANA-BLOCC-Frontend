import fetchUtil from "./utils"

const getUserInfo = async (userId) => {
    const user = await fetchUtil.get(`/users/${userId}`);
    return user;
}

export {
    getUserInfo,
}