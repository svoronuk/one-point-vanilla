import { getRandomInt, getWithNamespace, purify } from '../services/helper';
import { logError } from '../services/error-logger';
import { EXTENDED_INFO_CLASS } from '../constants';

const userInterface = [
    'email', 'firstname', 'lastname',
];

const userExtendedInerface = [
    'login',
    'password',
    'title',
    'lastname',
    'firstname',
    'gender',
    'email',
    'picture',
    'address',
];
export default function renderUser(params) {
    const isValid = validateByInterface(params, userInterface);
    if (!isValid) {
        const id = getRandomInt();
        params = {
            email: `unknown${id}@qa.qa`,
            firstname: 'Unknown',
            lastname: 'User',
        };
    }
    const { email, firstname, lastname } = params;

    return render(email, firstname, lastname);
}

export function renderUserInfo(info) {
    const isValid = validateByInterface(info, userExtendedInerface);
    if (!isValid) {
        const id = getRandomInt();
        info = {
            email: `unknown${id}@qa.qa`,
            firstname: 'Unknown',
            lastname: 'User',
        };
    }

    return renderInfo(info);
}

function validateByInterface(params = [], rules = []) {
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

function render(email, firstname, lastname){
    const el = document.createElement('div');
    el.id = `${email}-${getRandomInt()}`;
    el.dataset.email = email;
    el.classList.add(getWithNamespace('user'));
    el.innerHTML = `<div class='${getWithNamespace('shortly')}'>
                        <div class='${getWithNamespace('lastname')}'>${purify(lastname)}</div>
                        <div class='${getWithNamespace('firstname')}'>${purify(firstname)}</div>
                    </div>`;

    return el;
}

function renderInfo(info){
    const el = document.createElement('div');
    el.classList.add(getWithNamespace(EXTENDED_INFO_CLASS));
    let inner = '';
    Object.entries(info).forEach(([field, value]) => {
        inner += `<div class='${getWithNamespace(field)}'>${field}: ${value}</div>`;
    });
    el.innerHTML = inner;

    return el;
}