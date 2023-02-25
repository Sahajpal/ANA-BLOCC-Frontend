const get = async (url, config) => {
    const result = await fetch(url, {
        method: 'get',
        ...config,
        headers: {
            'Content-Type':'application/json',
            'Authorization': 'Bearer jwtToken' // @todo sahaj
        }
    });
    return result;
}

const post = async (url, config) => {
    const result = await fetch(url, {
        method: 'post',
        ...config,
        headers: {
            'Content-Type':'application/json',
            'Authorization': 'Bearer jwtToken' // @todo sahaj
        }
    });
    return result;
}

const fetchUtil = { get, post };
export default fetchUtil;
