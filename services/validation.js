import { logError } from './error-logger';

export function validateByInterface(params = [], rules = []) {
    if (typeof params !== 'object') {
        logError('Income params for validation user is not an object', 3);
        throw new Error('Data can not be rendered');
    }
    if (!Array.isArray(rules)) {
        logError('Wrong interface for validation user', 4);
        throw new Error('Data can not be rendered');
    }
    // Require that params at least corresponds to interface
    return rules.every(requiredField => typeof params[requiredField] !== 'undefined');
}

export function validateResponse(response) {
    if (!response.ok) {
        throw new Error('Resource is unavailable');
    }

    return response;
}

export function validateIsArray(element) {
    if (!Array.isArray(element)) {
        throw 'Data has broken format. Please use array.';
    }
    return element;
}
export function validateIsObject(element) {
    if (typeof element !== 'object') {
        throw 'Info has broken format. Please use object.';
    }
    return element
}