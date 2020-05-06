import { fetchOne } from '../services/api';
import storage from '../services/storage';
import { getWithNamespace } from '../services/helper';
import { EXTENDED_INFO_CLASS, SETTINGS, TOOLBAR_CLASS, USERS_LIST } from '../constants';
import { logError } from '../services/error-logger';
import Row from '../templates/row';

/**
 *
 * @param target
 * @returns {boolean}
 */
export function showUserInfo({ target }) {
    const { id, dataset } = target;
    const el = document.getElementById(id);
    const params = { el, body: this, id };

    if (el.classList.contains('loaded')) {
        toggleExtendedInfo(params);
    } else {
        initialRendering(params, dataset.id);
    }
    return true;
}

/**
 *
 * @param el
 * @param body
 * @param id
 * @param rowId
 * @returns {Promise<void>}
 */
async function initialRendering({ el, body, id }, rowId) {
    const settings = storage.get(SETTINGS);
    if (!settings) {
        logError('Widget settings were not found in storage.', 8);
        throw new Error('User can not be loaded.');
    }
    const { urlInfo } = JSON.parse(settings);
    try {
        const info = await fetchOne(urlInfo + '/' + rowId);
        const rowInfo = Row.prepareRowInfo(info);
        el.appendChild(rowInfo);
        el.classList.add('loaded');
        el.classList.toggle('expanded');
        if (info) {
            storage.add(id, JSON.stringify(info));
        }
    } catch(e) {
        body.showError(e);
    }
}

/**
 *
 * @param el
 * @param body
 * @param id
 */
function toggleExtendedInfo({ el, body, id }) {
    if (el.classList.contains('expanded')) {
        const children = el.querySelector('.' + getWithNamespace(EXTENDED_INFO_CLASS));
        if (children) {
            children.remove();
        }
    } else {
        const info = storage.get(id);
        if (info) {
            const rowInfo = Row.prepareRowInfo(JSON.parse(info));
            el.appendChild(rowInfo);
        }
    }
    el.classList.toggle('expanded');
}

/**
 * @param target
 */
export function sortRows({ target }) {
    const { sortKey } = target.dataset;
    const toolbarClass = getWithNamespace(TOOLBAR_CLASS);
    if (!target.classList.contains(toolbarClass)) return;

    //Sort users
    const data = storage.get(USERS_LIST);
    if (!data) {
        logError('Users data was not found in storage.', 9);
        return;
    }
    const users = JSON.parse(data);
    users.sort((curr, next) => (curr[sortKey] > next[sortKey] ? 1 : -1));
    // Render users
    const settings = storage.get(SETTINGS);
    if (!settings) {
        logError('Widget settings were not found in storage.', 8);
        throw new Error('User can not be loaded.');
    }
    const row = new Row(JSON.parse(settings));
    const rows = row.prepareAll(users);
    this.render(rows);
}