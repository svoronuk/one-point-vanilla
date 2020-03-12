import { getWithNamespace } from '../services/helper';
import loader from './loader';
import { logError } from '../services/error-logger';
import renderUser, { renderUserInfo } from './user';
import { fetchInfo } from '../services/api';
import storage from '../services/storage';
import { EXTENDED_INFO_CLASS, USERS_LIST } from '../constants';

export default class BodyElement {
    create() {
        // Wrapper
        const cls = getWithNamespace('user-wrapper');
        this.el = document.createElement('div');
        this.el.classList.add(cls);

        // Users list container
        this.list = document.createElement('div');
        this.list.classList.add(getWithNamespace('user-list'));
        this.list.appendChild(loader());

        const handler = showUserInfo.bind(this);
        this.list.addEventListener('click', handler);

        this.el.appendChild(this.list);

        return this.el;
    }

    showError(e) {
        this.cleanupList();
        logError(e, 5);
        const errElement = document.createElement('div');
        errElement.textContent = 'Data was fetched with error.';
        this.el.appendChild(errElement);
    }

    renderAllRows(data = []) {
        if (!Array.isArray(data)) {
            logError('Income data not an array', 1);
            throw new Error('Data can not be rendered');
        }
        this.cleanupList();
        const renderedList = document.createElement('div');
        data.forEach(el => renderedList.appendChild(renderUser(el)));
        this.list.appendChild(renderedList);
    }

    renderRow(info, parent) {
            const el = renderUserInfo(info);
            parent.appendChild(el);
    }

    cleanupList() {
        this.list.firstChild.remove();
    }

    sortRows(users, sortKey) {
        users.sort((curr, next) => (curr[sortKey] > next[sortKey] ? 1 : -1));
        this.renderAllRows(users);
    }
}

function showUserInfo({ target }) {
    const { id, dataset } = target;
    const el = document.getElementById(id);
    const params = { el, body: this, id };

    if (el.classList.contains('loaded')) {
        toggleExtendedInfo(params);
    } else {
        initialRendering(params, dataset.email);
    }
}

function initialRendering({ el, body, id }, email) {
    fetchInfo('info', { email })
        .then(([info]) => {
            body.renderRow(info, el);
            el.classList.add('loaded');
            if (info) {
                storage.add(id, JSON.stringify(info));
            }
            el.classList.toggle('expanded');
        })
        .catch((e) => {
            body.showError(e);
        });
}

function toggleExtendedInfo({ el, body, id }) {
    if (el.classList.contains('expanded')) {
        const children = el.querySelector('.' + getWithNamespace(EXTENDED_INFO_CLASS));
        if (children) {
            children.remove();
        }
    } else {
        const info = storage.get(id);
        if (info) {
            body.renderRow(JSON.parse(info), el);
        }
    }
    el.classList.toggle('expanded');
}
