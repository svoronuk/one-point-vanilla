import { validateIsArray, validateIsObject, validateResponse } from './validation';

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

/**
 * default request
 *
 * @param url
 * @param headers
 * @returns {Promise<Response>}
 */
export const fetchRequest = (url = '', headers = defHeaders) => fetch(url, headers);

/**
 * Get all rows
 * @param url
 * @returns {Promise<Response>}
 */
export async function fetchAll(url) {
    let response = await fetchRequest(url);
    validateResponse(response);
    const data = await response.json();
    validateIsArray(data);

    return data;
}

/**
 * Get extended info for row
 *
 * @param url
 * @returns {Promise<any>}
 */
export async function fetchOne(url) {
    let response = await fetchRequest(url)
    validateResponse(response);
    const data = await response.json();
    validateIsObject(data);

    return data;
}
