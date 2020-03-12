import { getWithNamespace, purify } from '../services/helper';
import loader from './loader';
import { logDebug } from '../services/error-logger';
import storage from '../services/storage';
import { USERS_LIST } from '../constants';

export default class Toolbar {
    constructor() {
        this.restrictedFields = [
            'email',
            'pasword',
        ];
    }

    create(sortingFunc) {
        const cls = getWithNamespace('user-toolbar');
        this.el = document.createElement('div');
        this.el.classList.add(cls);
        this.el.appendChild(loader());

        this.sortHandler = sortingFunc;
        if (typeof this.sortHandler !== 'function') {
            logDebug('Toolbar initialized without sorting function');
            this.sortHandler = () => {};
        }

        // const handler = sortRows.bind(this);
        this.el.addEventListener('click', e => sortRows(e, this.sortHandler));

        return this.el;
    }

    render(fields) {
        this.cleanup();
        if (!Array.isArray(fields)) {
            // If toolbar can not be rendered we just loose sorting, but body is still available
            logDebug('Toolbar rendered empty because of incorrect data');
            return '';
        }
        const inner = fields.reduce((acc, field) => acc += this.restrictedFields.includes(field)
            ? ''
            : `<div data-sort-key="${field}" class="${getWithNamespace(field)} ${getWithNamespace('toolbar')}">${purify(field)}</div>`, '');
        this.el.innerHTML = inner;

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
