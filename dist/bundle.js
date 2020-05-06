(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["list"] = factory();
	else
		root["list"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./list.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./constants.js":
/*!**********************!*\
  !*** ./constants.js ***!
  \**********************/
/*! exports provided: NAMESPACE, EXTENDED_INFO_CLASS, TOOLBAR_CLASS, USERS_LIST, SETTINGS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAMESPACE", function() { return NAMESPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXTENDED_INFO_CLASS", function() { return EXTENDED_INFO_CLASS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOOLBAR_CLASS", function() { return TOOLBAR_CLASS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERS_LIST", function() { return USERS_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SETTINGS", function() { return SETTINGS; });
const NAMESPACE = 'one-point-app';
const EXTENDED_INFO_CLASS = 'extended';
const TOOLBAR_CLASS = 'toolbar';
const USERS_LIST = 'users-list';
const SETTINGS = 'settings';


/***/ }),

/***/ "./hadlers/body.js":
/*!*************************!*\
  !*** ./hadlers/body.js ***!
  \*************************/
/*! exports provided: showUserInfo, sortRows */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showUserInfo", function() { return showUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortRows", function() { return sortRows; });
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/api */ "./services/api.js");
/* harmony import */ var _services_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/storage */ "./services/storage.js");
/* harmony import */ var _services_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/helper */ "./services/helper.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./constants.js");
/* harmony import */ var _services_error_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/error-logger */ "./services/error-logger.js");
/* harmony import */ var _templates_row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../templates/row */ "./templates/row.js");







/**
 *
 * @param target
 * @returns {boolean}
 */
function showUserInfo({ target }) {
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
    const settings = _services_storage__WEBPACK_IMPORTED_MODULE_1__["default"].get(_constants__WEBPACK_IMPORTED_MODULE_3__["SETTINGS"]);
    if (!settings) {
        Object(_services_error_logger__WEBPACK_IMPORTED_MODULE_4__["logError"])('Widget settings were not found in storage.', 8);
        throw new Error('User can not be loaded.');
    }
    const { urlInfo } = JSON.parse(settings);
    try {
        const info = await Object(_services_api__WEBPACK_IMPORTED_MODULE_0__["fetchOne"])(urlInfo + '/' + rowId);
        const rowInfo = _templates_row__WEBPACK_IMPORTED_MODULE_5__["default"].prepareRowInfo(info);
        el.appendChild(rowInfo);
        el.classList.add('loaded');
        el.classList.toggle('expanded');
        if (info) {
            _services_storage__WEBPACK_IMPORTED_MODULE_1__["default"].add(id, JSON.stringify(info));
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
        const children = el.querySelector('.' + Object(_services_helper__WEBPACK_IMPORTED_MODULE_2__["getWithNamespace"])(_constants__WEBPACK_IMPORTED_MODULE_3__["EXTENDED_INFO_CLASS"]));
        if (children) {
            children.remove();
        }
    } else {
        const info = _services_storage__WEBPACK_IMPORTED_MODULE_1__["default"].get(id);
        if (info) {
            const rowInfo = _templates_row__WEBPACK_IMPORTED_MODULE_5__["default"].prepareRowInfo(JSON.parse(info));
            el.appendChild(rowInfo);
        }
    }
    el.classList.toggle('expanded');
}

/**
 * @param target
 */
function sortRows({ target }) {
    const { sortKey } = target.dataset;
    const toolbarClass = Object(_services_helper__WEBPACK_IMPORTED_MODULE_2__["getWithNamespace"])(_constants__WEBPACK_IMPORTED_MODULE_3__["TOOLBAR_CLASS"]);
    if (!target.classList.contains(toolbarClass)) return;

    //Sort users
    const data = _services_storage__WEBPACK_IMPORTED_MODULE_1__["default"].get(_constants__WEBPACK_IMPORTED_MODULE_3__["USERS_LIST"]);
    if (!data) {
        Object(_services_error_logger__WEBPACK_IMPORTED_MODULE_4__["logError"])('Users data was not found in storage.', 9);
        return;
    }
    const users = JSON.parse(data);
    users.sort((curr, next) => (curr[sortKey] > next[sortKey] ? 1 : -1));
    // Render users
    const settings = _services_storage__WEBPACK_IMPORTED_MODULE_1__["default"].get(_constants__WEBPACK_IMPORTED_MODULE_3__["SETTINGS"]);
    if (!settings) {
        Object(_services_error_logger__WEBPACK_IMPORTED_MODULE_4__["logError"])('Widget settings were not found in storage.', 8);
        throw new Error('User can not be loaded.');
    }
    const row = new _templates_row__WEBPACK_IMPORTED_MODULE_5__["default"](JSON.parse(settings));
    const rows = row.prepareAll(users);
    this.render(rows);
}

/***/ }),

/***/ "./list.js":
/*!*****************!*\
  !*** ./list.js ***!
  \*****************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/api */ "./services/api.js");
/* harmony import */ var _templates_body__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates/body */ "./templates/body.js");
/* harmony import */ var _templates_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templates/toolbar */ "./templates/toolbar.js");
/* harmony import */ var _services_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/storage */ "./services/storage.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./constants.js");
/* harmony import */ var _templates_row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./templates/row */ "./templates/row.js");







async function render(initSettings = {}) {
    const defaults = {
        parentEl: document.body,
        urlAll: '',
        urlInfo: '',
        limit: 100,
        offset: 0,
        rowId: 'id',
    };
    const settings = { ...defaults, ...initSettings };
    _services_storage__WEBPACK_IMPORTED_MODULE_3__["default"].add(_constants__WEBPACK_IMPORTED_MODULE_4__["SETTINGS"], JSON.stringify(settings));
    const { parentEl, urlAll } = { ...defaults, ...initSettings };

    // Body
    const body = new _templates_body__WEBPACK_IMPORTED_MODULE_1__["default"]();
    parentEl.appendChild(body.create());

    // Toolbar
    const toolbar = new _templates_toolbar__WEBPACK_IMPORTED_MODULE_2__["default"](settings);
    body.el.prepend(toolbar.create());

    // Load initial data
    try {
        const data = await Object(_services_api__WEBPACK_IMPORTED_MODULE_0__["fetchAll"])(urlAll);
        _services_storage__WEBPACK_IMPORTED_MODULE_3__["default"].add(_constants__WEBPACK_IMPORTED_MODULE_4__["USERS_LIST"], JSON.stringify(data));
        const row = new _templates_row__WEBPACK_IMPORTED_MODULE_5__["default"](settings);
        const rows = row.prepareAll(data);
        body.render(rows);
        toolbar.render(Object.keys(data[0]));
    } catch (e) {
        body.showError(e);
    }
}

/***/ }),

/***/ "./services/api.js":
/*!*************************!*\
  !*** ./services/api.js ***!
  \*************************/
/*! exports provided: fetchRequest, fetchAll, fetchOne */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchRequest", function() { return fetchRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAll", function() { return fetchAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchOne", function() { return fetchOne; });
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validation */ "./services/validation.js");


const defHeaders = {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
        // 'Content-Type': 'application/json; charset=utf-8',
        // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // no-referrer, *client
};

/**
 * default request
 *
 * @param url
 * @param headers
 * @returns {Promise<Response>}
 */
const fetchRequest = (url = '', headers = defHeaders) => fetch(url, headers);

/**
 * Get all rows
 * @param url
 * @returns {Promise<Response>}
 */
async function fetchAll(url) {
    let response = await fetchRequest(url);
    Object(_validation__WEBPACK_IMPORTED_MODULE_0__["validateResponse"])(response);
    const data = await response.json();
    Object(_validation__WEBPACK_IMPORTED_MODULE_0__["validateIsArray"])(data);

    return data;
}

/**
 * Get extended info for row
 *
 * @param url
 * @returns {Promise<any>}
 */
async function fetchOne(url) {
    let response = await fetchRequest(url)
    Object(_validation__WEBPACK_IMPORTED_MODULE_0__["validateResponse"])(response);
    const data = await response.json();
    Object(_validation__WEBPACK_IMPORTED_MODULE_0__["validateIsObject"])(data);

    return data;
}


/***/ }),

/***/ "./services/error-logger.js":
/*!**********************************!*\
  !*** ./services/error-logger.js ***!
  \**********************************/
/*! exports provided: logError, logWarning, logDebug */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logError", function() { return logError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logWarning", function() { return logWarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logDebug", function() { return logDebug; });
/**
 * Here different log methods
 */

const logError = (msg = 'error logging without entry message', errorCode) => console.error(msg, '--errorCode:', errorCode);

const logWarning = (msg = 'warning logging without entry message', warnCode) => console.warn(msg, '--warningCode:', warnCode);

const logDebug = (msg = 'debug logging without entry message') => console.log(msg);

/***/ }),

/***/ "./services/helper.js":
/*!****************************!*\
  !*** ./services/helper.js ***!
  \****************************/
/*! exports provided: getWithNamespace, purify, getRandomInt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWithNamespace", function() { return getWithNamespace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "purify", function() { return purify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInt", function() { return getRandomInt; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./constants.js");
/* harmony import */ var _error_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-logger */ "./services/error-logger.js");



function getWithNamespace(str = '') {
    if (typeof str !== 'string') {
        Object(_error_logger__WEBPACK_IMPORTED_MODULE_1__["logError"])(`Variable [${str}] can not be namespaced according to wrong type`, 2);
        str = Math.random()
                  .toString(36)
                  .substr(2, 5);
    }
    return _constants__WEBPACK_IMPORTED_MODULE_0__["NAMESPACE"] + '-' + str;
}

function purify(value) {
    // @todo realise purify by any way
    return value;
}

function getRandomInt() {
    return Math.floor(Math.random() * 1000000);
}


/***/ }),

/***/ "./services/storage.js":
/*!*****************************!*\
  !*** ./services/storage.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _error_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-logger */ "./services/error-logger.js");


/* harmony default export */ __webpack_exports__["default"] = ({
    add (key, value) {
        if (typeof key !== 'string' || typeof value !== 'string') {
            Object(_error_logger__WEBPACK_IMPORTED_MODULE_0__["logDebug"])(`Try to store [${value}] by using key [${key}]`);
            throw new Error('Key and value should be a string to store data');
        }
        sessionStorage.setItem(key, value);
    },
    get (key) {
        if (typeof key !== 'string') {
            throw new Error('Key should be a string to get data');
        }
        return sessionStorage.getItem(key);
    },
});


/***/ }),

/***/ "./services/validation.js":
/*!********************************!*\
  !*** ./services/validation.js ***!
  \********************************/
/*! exports provided: validateByInterface, validateResponse, validateIsArray, validateIsObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateByInterface", function() { return validateByInterface; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateResponse", function() { return validateResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateIsArray", function() { return validateIsArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateIsObject", function() { return validateIsObject; });
/* harmony import */ var _error_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-logger */ "./services/error-logger.js");


function validateByInterface(params = [], rules = []) {
    if (typeof params !== 'object') {
        Object(_error_logger__WEBPACK_IMPORTED_MODULE_0__["logError"])('Income params for validation user is not an object', 3);
        throw new Error('Data can not be rendered');
    }
    if (!Array.isArray(rules)) {
        Object(_error_logger__WEBPACK_IMPORTED_MODULE_0__["logError"])('Wrong interface for validation user', 4);
        throw new Error('Data can not be rendered');
    }
    // Require that params at least corresponds to interface
    return rules.every(requiredField => typeof params[requiredField] !== 'undefined');
}

function validateResponse(response) {
    if (!response.ok) {
        throw new Error('Resource is unavailable');
    }

    return response;
}

function validateIsArray(element) {
    if (!Array.isArray(element)) {
        throw 'Data has broken format. Please use array.';
    }
    return element;
}
function validateIsObject(element) {
    if (typeof element !== 'object') {
        throw 'Info has broken format. Please use object.';
    }
    return element
}

/***/ }),

/***/ "./templates/body.js":
/*!***************************!*\
  !*** ./templates/body.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BodyElement; });
/* harmony import */ var _services_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/helper */ "./services/helper.js");
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader */ "./templates/loader.js");
/* harmony import */ var _services_error_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/error-logger */ "./services/error-logger.js");
/* harmony import */ var _hadlers_body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hadlers/body */ "./hadlers/body.js");





class BodyElement {
    create() {
        // Wrapper
        const cls = Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__["getWithNamespace"])('list-wrapper');
        this.el = document.createElement('div');
        this.el.classList.add(cls);

        // Users list container
        this.list = document.createElement('div');
        this.list.classList.add(Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__["getWithNamespace"])('list'));
        this.list.appendChild(Object(_loader__WEBPACK_IMPORTED_MODULE_1__["default"])());
        this.el.appendChild(this.list);

        // const handler = showUserInfo.bind(this);
        this.list.addEventListener('click', _hadlers_body__WEBPACK_IMPORTED_MODULE_3__["showUserInfo"].bind(this));
        // const handler = sortRows.bind(this);
        this.el.addEventListener('click',_hadlers_body__WEBPACK_IMPORTED_MODULE_3__["sortRows"].bind(this));

        return this.el;
    }

    showError(e) {
        this.cleanupList();
        Object(_services_error_logger__WEBPACK_IMPORTED_MODULE_2__["logError"])(e, 5);
        const errElement = document.createElement('div');
        errElement.textContent = 'Data was fetched with error.';
        this.el.appendChild(errElement);
    }

    render(rowsHTML = []) {
        if (!Array.isArray(rowsHTML)) {
            Object(_services_error_logger__WEBPACK_IMPORTED_MODULE_2__["logError"])('Income data not an array', 6);
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


/***/ }),

/***/ "./templates/loader.js":
/*!*****************************!*\
  !*** ./templates/loader.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return loader; });
/* harmony import */ var _services_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/helper */ "./services/helper.js");


function loader() {
    const cls = Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__["getWithNamespace"])('spinner');
    const loaderEl = document.createElement('div');
    loaderEl.classList.add(cls);

    return loaderEl;
}


/***/ }),

/***/ "./templates/row.js":
/*!**************************!*\
  !*** ./templates/row.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Row; });
/* harmony import */ var _services_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/helper */ "./services/helper.js");
/* harmony import */ var _services_error_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/error-logger */ "./services/error-logger.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./constants.js");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api */ "./services/api.js");
/* harmony import */ var _services_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/storage */ "./services/storage.js");






class Row {
    constructor({rowId}) {
        this.rowId = rowId;
    }
    prepareAll(data = []) {
        if (!Array.isArray(data)) {
            Object(_services_error_logger__WEBPACK_IMPORTED_MODULE_1__["logError"])('Income data not an array', 7);
            throw new Error('Data can not be rendered');
        }
        return data.map(el => this.prepareRow(el));
    }

    prepareRow(fields) {
        if (typeof fields !== 'object') {
            Object(_services_error_logger__WEBPACK_IMPORTED_MODULE_1__["logError"])('Row can not be prepared because of wrong format of income data.', 1);
            const el = document.createElement('div');
            el.innerHTML = `<div class='${Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__["getWithNamespace"])('shortly')}'>Wrong user</div>`;
            return el;
        }
        const id = fields[this.rowId];
        delete fields[this.rowId];
        const el = document.createElement('div');
        el.id = `${id}${Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])()}`;
        el.dataset.id = id;
        el.classList.add(Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__["getWithNamespace"])('row'));
        let inner = '';
        Object.entries(fields)
              .forEach(([field, value]) => {
                  inner += `<div class='${Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__["getWithNamespace"])(field)}'>${value}</div>`;
              });
        el.innerHTML = `<div class='${Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__["getWithNamespace"])('shortly')}'>${inner}</div>`;
        return el;
    }

    static prepareRowInfo(info) {
        const el = document.createElement('div');
        el.classList.add(Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__["getWithNamespace"])(_constants__WEBPACK_IMPORTED_MODULE_2__["EXTENDED_INFO_CLASS"]));
        let inner = '';
        Object.entries(info)
              .forEach(([field, value]) => {
                  inner += `<div class='${Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__["getWithNamespace"])(field)}'>${field}: ${value}</div>`;
              });
        el.innerHTML = inner;

        return el;
    }
}



/***/ }),

/***/ "./templates/toolbar.js":
/*!******************************!*\
  !*** ./templates/toolbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Toolbar; });
/* harmony import */ var _services_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/helper */ "./services/helper.js");
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader */ "./templates/loader.js");
/* harmony import */ var _services_error_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/error-logger */ "./services/error-logger.js");
/* harmony import */ var _services_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/storage */ "./services/storage.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ "./constants.js");






class Toolbar {
    constructor() {
        this.restrictedFields = [
            'email',
            'password',
        ];
    }

    create() {
        const cls = Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__["getWithNamespace"])('list-toolbar');
        this.el = document.createElement('div');
        this.el.classList.add(cls);
        this.el.appendChild(Object(_loader__WEBPACK_IMPORTED_MODULE_1__["default"])());

        return this.el;
    }

    render(fields) {
        this.cleanup();
        if (!Array.isArray(fields)) {
            // If toolbar can not be rendered we just loose sorting, but body is still available
            Object(_services_error_logger__WEBPACK_IMPORTED_MODULE_2__["logDebug"])('Toolbar rendered empty because of incorrect data');
            return '';
        }
        this.el.innerHTML = fields.reduce((acc, field) => acc += (this.restrictedFields.includes(field)
            ? ''
            : `<div data-sort-key="${field}" class="${Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__["getWithNamespace"])(field)} ${Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__["getWithNamespace"])(_constants__WEBPACK_IMPORTED_MODULE_4__["TOOLBAR_CLASS"])}">${Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__["purify"])(field)}</div>`), '');

        return this.el;
    }

    cleanup() {
        while (this.el.firstChild) {
            this.el.removeChild(this.el.lastChild);
        }
    }
}

function sortRows({target}, sortHandler){
    const users = _services_storage__WEBPACK_IMPORTED_MODULE_3__["default"].get(_constants__WEBPACK_IMPORTED_MODULE_4__["USERS_LIST"]);
    sortHandler(JSON.parse(users), target.dataset.sortKey);
}


/***/ })

/******/ });
});
//# sourceMappingURL=bundle.js.map