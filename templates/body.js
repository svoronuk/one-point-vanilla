import { getWithNamespace } from '../services/helper';
import loader from './loader';
import { logError } from '../services/error-logger';
import { showUserInfo, sortRows } from '../hadlers/body';

export default class BodyElement {
    create() {
        // Wrapper
        const cls = getWithNamespace('list-wrapper');
        this.el = document.createElement('div');
        this.el.classList.add(cls);

        // Users list container
        this.list = document.createElement('div');
        this.list.classList.add(getWithNamespace('list'));
        this.list.appendChild(loader());
        this.el.appendChild(this.list);

        // const handler = showUserInfo.bind(this);
        this.list.addEventListener('click', showUserInfo.bind(this));
        // const handler = sortRows.bind(this);
        this.el.addEventListener('click',sortRows.bind(this));

        return this.el;
    }

    showError(e) {
        this.cleanupList();
        logError(e, 5);
        const errElement = document.createElement('div');
        errElement.textContent = 'Data was fetched with error.';
        this.el.appendChild(errElement);
    }

    render(rowsHTML = []) {
        if (!Array.isArray(rowsHTML)) {
            logError('Income data not an array', 6);
            throw new Error('Data can not be rendered');
        }
        this.cleanupList();
        const renderedList = document.createElement('div');
        rowsHTML.forEach(el => renderedList.appendChild(el));
        this.list.appendChild(renderedList);
    }

    cleanupList() {
        this.list.firstChild.remove();
    }
}
