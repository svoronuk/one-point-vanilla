import { getWithNamespace } from '../services/helper';

export default function loader() {
    const cls = getWithNamespace('spinner');
    const loaderEl = document.createElement('div');
    loaderEl.classList.add(cls);

    return loaderEl;
}
