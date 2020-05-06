import { getRandomInt, getWithNamespace, purify } from '../services/helper';
import { logError } from '../services/error-logger';
import { EXTENDED_INFO_CLASS } from '../constants';
import { fetchOne } from '../services/api';
import storage from '../services/storage';

export default class Row {
    constructor({rowId}) {
        this.rowId = rowId;
    }
    prepareAll(data = []) {
        if (!Array.isArray(data)) {
            logError('Income data not an array', 7);
            throw new Error('Data can not be rendered');
        }
        return data.map(el => this.prepareRow(el));
    }

    prepareRow(fields) {
        if (typeof fields !== 'object') {
            logError('Row can not be prepared because of wrong format of income data.', 1);
            const el = document.createElement('div');
            el.innerHTML = `<div class='${getWithNamespace('shortly')}'>Wrong user</div>`;
            return el;
        }
        const id = fields[this.rowId];
        delete fields[this.rowId];
        const el = document.createElement('div');
        el.id = `${id}${getRandomInt()}`;
        el.dataset.id = id;
        el.classList.add(getWithNamespace('row'));
        let inner = '';
        Object.entries(fields)
              .forEach(([field, value]) => {
                  inner += `<div class='${getWithNamespace(field)}'>${value}</div>`;
              });
        el.innerHTML = `<div class='${getWithNamespace('shortly')}'>${inner}</div>`;
        return el;
    }

    static prepareRowInfo(info) {
        const el = document.createElement('div');
        el.classList.add(getWithNamespace(EXTENDED_INFO_CLASS));
        let inner = '';
        Object.entries(info)
              .forEach(([field, value]) => {
                  inner += `<div class='${getWithNamespace(field)}'>${field}: ${value}</div>`;
              });
        el.innerHTML = inner;

        return el;
    }
}

