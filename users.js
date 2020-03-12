import { fetchAll } from './services/api';
import BodyElement from './templates/body';
import Toolbar from './templates/toolbar';
import storage from './services/storage';
import { USERS_LIST } from './constants';

export function render(initSettings = {}) {
    const { parentEl, url } = extendDefaults(initSettings);

    // Body
    const body = new BodyElement();
    parentEl.appendChild(body.create());

    // Toolbar
    const toolbar = new Toolbar();
    body.el.prepend(toolbar.create(body.sortRows.bind(body)));

    // Load initial data
    fetchAll(url)
        .then((users) => {
            const firstUser = users[0];
            toolbar.render(Object.keys(firstUser));
            body.renderAllRows(users);
            storage.add(USERS_LIST, JSON.stringify(users));
        })
        .catch((e) => {
            body.showError(e);
        });
}

function extendDefaults(settings) {
    return {
        parentEl: document.body,
        url: '',
        ...settings,
    };
}
