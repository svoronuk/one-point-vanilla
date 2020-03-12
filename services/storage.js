import { logDebug } from './error-logger';

export default {
    add (key, value) {
        if (typeof key !== 'string' || typeof value !== 'string') {
            logDebug(`Try to store [${value}] by using key [${key}]`);
            throw new Error('Key and value should be a string to store data');
        }
        sessionStorage.setItem(key, value);
    },
    get (key) {
        if (typeof key !== 'string') {
            throw new Error('Key should be a string to get data');
        }
        return sessionStorage.getItem(key);
    },
};
