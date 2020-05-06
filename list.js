import { fetchAll } from './services/api';
import BodyElement from './templates/body';
import Toolbar from './templates/toolbar';
import storage from './services/storage';
import { SETTINGS, USERS_LIST } from './constants';
import Row from './templates/row';

export async function render(initSettings = {}) {
    const defaults = {
        parentEl: document.body,
        urlAll: '',
        urlInfo: '',
        limit: 100,
        offset: 0,
        rowId: 'id',
    };
    const settings = { ...defaults, ...initSettings };
    storage.add(SETTINGS, JSON.stringify(settings));
    const { parentEl, urlAll } = { ...defaults, ...initSettings };

    // Body
    const body = new BodyElement();
    parentEl.appendChild(body.create());

    // Toolbar
    const toolbar = new Toolbar(settings);
    body.el.prepend(toolbar.create());

    // Load initial data
    try {
        const data = await fetchAll(urlAll);
        storage.add(USERS_LIST, JSON.stringify(data));
        const row = new Row(settings);
        const rows = row.prepareAll(data);
        body.render(rows);
        toolbar.render(Object.keys(data[0]));
    } catch (e) {
        body.showError(e);
    }
}