import { NAMESPACE } from '../constants';
import { logError } from './error-logger';

export function getWithNamespace(str = '') {
    if (typeof str !== 'string') {
        logError(`Variable [${str}] can not be namespaced according to wrong type`, 2);
        str = Math.random()
                  .toString(36)
                  .substr(2, 5);
    }
    return NAMESPACE + '-' + str;
}

export function purify(value) {
    // @todo realise purify by any way
    return value;
}

export function getRandomInt() {
    return Math.floor(Math.random() * 1000000);
}
