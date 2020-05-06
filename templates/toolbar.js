import { getWithNamespace, purify } from '../services/helper';
import loader from './loader';
import { logDebug } from '../services/error-logger';
import storage from '../services/storage';
import { TOOLBAR_CLASS, USERS_LIST } from '../constants';

export default class Toolbar {
    constructor() {
        this.restrictedFields = [
            'email',
            'password',
        ];
    }

    create() {
        const cls = getWithNamespace('list-toolbar');
        this.el = document.createElement('div');
        this.el.classList.add(cls);
        this.el.appendChild(loader());

        return this.el;
    }

    render(fields) {
        this.cleanup();
        if (!Array.isArray(fields)) {
            // If toolbar can not be rendered we just loose sorting, but body is still available
            logDebug('Toolbar rendered empty because of incorrect data');
            return '';
        }
        this.el.innerHTML = fields.reduce((acc, field) => acc += (this.restrictedFields.includes(field)
            ? ''
            : `<div data-sort-key="${field}" class="${getWithNamespace(field)} ${getWithNamespace(TOOLBAR_CLASS)}">${purify(field)}</div>`), '');

        return this.el;
    }

    cleanup() {
        while (this.el.firstChild) {
            this.el.removeChild(this.el.lastChild);
        }
    }
}

function sortRows({target}, sortHandler){
    const users = storage.get(USERS_LIST);
    sortHandler(JSON.parse(users), target.dataset.sortKey);
}
