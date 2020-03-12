import users from '../server/testtakers.json';
import usersInfo from '../server/testtakersinfo.json';

const defHeaders = {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
        // 'Content-Type': 'application/json; charset=utf-8',
        // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // no-referrer, *client
};

function validateResponse({ status, res }) {
    if (status !== 'ok') {
        throw new Error('Resource is unavailable');
    }

    return res;
}

/**
 * Simulate request to server
 *
 * @param url
 * @param params
 * @param headers
 * @returns {Promise<Response>}
 */
export function fetchRequest(url = '', params = {}, headers = defHeaders) {
    const response = {
        status: 'ok',
    };

    if (url === 'info') {
        if (!params.email || typeof params.email !== 'string') {
            return error('Request has wrong params');
        }
        if (!Array.isArray(usersInfo)) {
            return error('Info has broken format');
        }
        response.res = usersInfo.filter(({ email }) => email === params.email);
    } else {
        if (!Array.isArray(users)) {
            return error('Data has broken format');
        }
        response.res = users;
    }

    return success(response);
}

/**
 * Get all users
 * @param url
 * @returns {Promise<Response>}
 */
export function fetchAll(url) {
    return fetchRequest(url)
        .then(validateResponse)
}

export function fetchInfo(url, params) {
    return fetchRequest(url, params)
        .then(validateResponse)
}


function success(response) {
    return new Promise(resolve => setTimeout(() => {
        resolve(response);
    }, 500));
}

function error(msg = '') {
    return new Promise(reject => setTimeout(() => {
        reject(msg);
    }, 500));
}
