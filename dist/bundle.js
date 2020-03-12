(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["userList"] = factory();
	else
		root["userList"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./users.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./constants.js":
/*!**********************!*\
  !*** ./constants.js ***!
  \**********************/
/*! exports provided: NAMESPACE, EXTENDED_INFO_CLASS, USERS_LIST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAMESPACE", function() { return NAMESPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXTENDED_INFO_CLASS", function() { return EXTENDED_INFO_CLASS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERS_LIST", function() { return USERS_LIST; });
const NAMESPACE = 'one-point-app';
const EXTENDED_INFO_CLASS = 'extended';
const USERS_LIST = 'users-list';


/***/ }),

/***/ "./server/testtakers.json":
/*!********************************!*\
  !*** ./server/testtakers.json ***!
  \********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"lastname\":\"foster\",\"firstname\":\"abigail\",\"email\":\"abigail.foster60@example.com\"},{\"firstname\":\"allison\",\"email\":\"allison.graham70@example.com\"},{\"lastname\":\"clark\",\"firstname\":\"susan\",\"email\":\"susan.clark11@example.com\"},{\"lastname\":\"howard\",\"firstname\":\"nicholas\",\"email\":\"nicholas.howard84@example.com\"},{\"lastname\":\"ford\",\"firstname\":\"hannah\",\"email\":\"hannah.ford29@example.com\"},{\"lastname\":\"carter\",\"firstname\":\"genesis\",\"email\":\"genesis.carter42@example.com\"},{\"lastname\":\"foster\",\"firstname\":\"kenzi\",\"email\":\"kenzi.foster37@example.com\"},{\"lastname\":\"wright\",\"firstname\":\"katie\",\"email\":\"katie.wright60@example.com\"},{\"lastname\":\"lee\",\"firstname\":\"gavin\",\"email\":\"gavin.lee41@example.com\"},{\"lastname\":\"ross\",\"firstname\":\"jane\",\"email\":\"jane.ross42@example.com\"},{\"lastname\":\"ford\",\"firstname\":\"douglas\",\"email\":\"douglas.ford43@example.com\"},{\"lastname\":\"rivera\",\"firstname\":\"shannon\",\"email\":\"shannon.rivera95@example.com\"},{\"lastname\":\"watson\",\"firstname\":\"kenzi\",\"email\":\"kenzi.watson58@example.com\"},{\"lastname\":\"myers\",\"firstname\":\"isabella\",\"email\":\"isabella.myers69@example.com\"},{\"lastname\":\"edwards\",\"firstname\":\"abigail\",\"email\":\"abigail.edwards34@example.com\"},{\"lastname\":\"cox\",\"firstname\":\"isaac\",\"email\":\"isaac.cox28@example.com\"},{\"lastname\":\"jones\",\"firstname\":\"allison\",\"email\":\"allison.jones81@example.com\"},{\"lastname\":\"sanders\",\"firstname\":\"ryan\",\"email\":\"ryan.sanders19@example.com\"},{\"lastname\":\"martinez\",\"firstname\":\"mark\",\"email\":\"mark.martinez26@example.com\"},{\"lastname\":\"kuhn\",\"firstname\":\"mark\",\"email\":\"mark.kuhn95@example.com\"},{\"lastname\":\"graham\",\"firstname\":\"adrian\",\"email\":\"adrian.graham60@example.com\"},{\"lastname\":\"patterson\",\"firstname\":\"amanda\",\"email\":\"amanda.patterson61@example.com\"},{\"lastname\":\"lee\",\"firstname\":\"elizabeth\",\"email\":\"elizabeth.lee56@example.com\"},{\"lastname\":\"ford\",\"firstname\":\"amanda\",\"email\":\"amanda.ford21@example.com\"},{\"lastname\":\"perry\",\"firstname\":\"kay\",\"email\":\"kay.perry15@example.com\"},{\"lastname\":\"miller\",\"firstname\":\"landon\",\"email\":\"landon.miller95@example.com\"},{\"lastname\":\"cook\",\"firstname\":\"susan\",\"email\":\"susan.cook85@example.com\"},{\"lastname\":\"williams\",\"firstname\":\"dylan\",\"email\":\"dylan.williams12@example.com\"},{\"lastname\":\"mitchelle\",\"firstname\":\"mary\",\"email\":\"mary.mitchelle36@example.com\"},{\"lastname\":\"johnson\",\"firstname\":\"stephen\",\"email\":\"stephen.johnson97@example.com\"},{\"lastname\":\"washington\",\"firstname\":\"ritthy\",\"email\":\"ritthy.washington73@example.com\"},{\"lastname\":\"sullivan\",\"firstname\":\"kim\",\"email\":\"kim.sullivan91@example.com\"},{\"lastname\":\"scott\",\"firstname\":\"daniel\",\"email\":\"daniel.scott61@example.com\"},{\"lastname\":\"kuhn\",\"firstname\":\"isabella\",\"email\":\"isabella.kuhn58@example.com\"},{\"lastname\":\"ford\",\"firstname\":\"lucas\",\"email\":\"lucas.ford93@example.com\"},{\"lastname\":\"long\",\"firstname\":\"peter\",\"email\":\"peter.long69@example.com\"},{\"lastname\":\"young\",\"firstname\":\"aubrey\",\"email\":\"aubrey.young59@example.com\"},{\"lastname\":\"campbell\",\"firstname\":\"kathy\",\"email\":\"kathy.campbell57@example.com\"},{\"lastname\":\"davis\",\"firstname\":\"nevaeh\",\"email\":\"nevaeh.davis16@example.com\"},{\"lastname\":\"perry\",\"firstname\":\"anthony\",\"email\":\"anthony.perry67@example.com\"},{\"lastname\":\"wright\",\"firstname\":\"isaac\",\"email\":\"isaac.wright29@example.com\"},{\"lastname\":\"hall\",\"firstname\":\"liam\",\"email\":\"liam.hall25@example.com\"},{\"lastname\":\"mitchelle\",\"firstname\":\"isabella\",\"email\":\"isabella.mitchelle88@example.com\"},{\"lastname\":\"gonzales\",\"firstname\":\"levi\",\"email\":\"levi.gonzales74@example.com\"},{\"lastname\":\"jackson\",\"firstname\":\"sarah\",\"email\":\"sarah.jackson65@example.com\"},{\"lastname\":\"perry\",\"firstname\":\"evan\",\"email\":\"evan.perry69@example.com\"},{\"lastname\":\"graham\",\"firstname\":\"harold\",\"email\":\"harold.graham54@example.com\"},{\"lastname\":\"rodriquez\",\"firstname\":\"george\",\"email\":\"george.rodriquez83@example.com\"},{\"lastname\":\"scott\",\"firstname\":\"cameron\",\"email\":\"cameron.scott69@example.com\"},{\"lastname\":\"moore\",\"firstname\":\"madison\",\"email\":\"madison.moore80@example.com\"},{\"lastname\":\"sanders\",\"firstname\":\"gabriel\",\"email\":\"gabriel.sanders85@example.com\"},{\"lastname\":\"henderson\",\"firstname\":\"charlotte\",\"email\":\"charlotte.henderson71@example.com\"},{\"lastname\":\"ross\",\"firstname\":\"sebastian\",\"email\":\"sebastian.ross34@example.com\"},{\"lastname\":\"evans\",\"firstname\":\"george\",\"email\":\"george.evans13@example.com\"},{\"lastname\":\"clark\",\"firstname\":\"kim\",\"email\":\"kim.clark24@example.com\"},{\"lastname\":\"nelson\",\"firstname\":\"kristin\",\"email\":\"kristin.nelson69@example.com\"},{\"lastname\":\"turner\",\"firstname\":\"rebecca\",\"email\":\"rebecca.turner94@example.com\"},{\"lastname\":\"kelly\",\"firstname\":\"leah\",\"email\":\"leah.kelly61@example.com\"},{\"lastname\":\"harris\",\"firstname\":\"thomas\",\"email\":\"thomas.harris13@example.com\"},{\"lastname\":\"ford\",\"firstname\":\"walter\",\"email\":\"walter.ford33@example.com\"},{\"lastname\":\"parker\",\"firstname\":\"avery\",\"email\":\"avery.parker73@example.com\"},{\"lastname\":\"cox\",\"firstname\":\"sandra\",\"email\":\"sandra.cox68@example.com\"},{\"lastname\":\"lee\",\"firstname\":\"william\",\"email\":\"william.lee91@example.com\"},{\"lastname\":\"foster\",\"firstname\":\"june\",\"email\":\"june.foster74@example.com\"},{\"lastname\":\"lewis\",\"firstname\":\"hunter\",\"email\":\"hunter.lewis54@example.com\"},{\"lastname\":\"howard\",\"firstname\":\"ronald\",\"email\":\"ronald.howard98@example.com\"},{\"lastname\":\"evans\",\"firstname\":\"peter\",\"email\":\"peter.evans17@example.com\"},{\"lastname\":\"scott\",\"firstname\":\"landon\",\"email\":\"landon.scott35@example.com\"},{\"lastname\":\"ward\",\"firstname\":\"linda\",\"email\":\"linda.ward84@example.com\"},{\"lastname\":\"thompson\",\"firstname\":\"aiden\",\"email\":\"aiden.thompson91@example.com\"},{\"lastname\":\"cook\",\"firstname\":\"scarlett\",\"email\":\"scarlett.cook25@example.com\"},{\"lastname\":\"green\",\"firstname\":\"arthur\",\"email\":\"arthur.green67@example.com\"},{\"lastname\":\"gray\",\"firstname\":\"peyton\",\"email\":\"peyton.gray70@example.com\"},{\"lastname\":\"clark\",\"firstname\":\"kaylee\",\"email\":\"kaylee.clark12@example.com\"},{\"lastname\":\"gray\",\"firstname\":\"ava\",\"email\":\"ava.gray70@example.com\"},{\"lastname\":\"coleman\",\"firstname\":\"landon\",\"email\":\"landon.coleman20@example.com\"},{\"lastname\":\"patterson\",\"firstname\":\"jennifer\",\"email\":\"jennifer.patterson70@example.com\"},{\"lastname\":\"jenkins\",\"firstname\":\"mason\",\"email\":\"mason.jenkins96@example.com\"},{\"lastname\":\"moore\",\"firstname\":\"serenity\",\"email\":\"serenity.moore43@example.com\"},{\"lastname\":\"diaz\",\"firstname\":\"jordan\",\"email\":\"jordan.diaz41@example.com\"},{\"lastname\":\"hamilton\",\"firstname\":\"jayden\",\"email\":\"jayden.hamilton45@example.com\"},{\"lastname\":\"kuhn\",\"firstname\":\"albert\",\"email\":\"albert.kuhn43@example.com\"},{\"lastname\":\"myers\",\"firstname\":\"ashley\",\"email\":\"ashley.myers44@example.com\"},{\"lastname\":\"kuhn\",\"firstname\":\"aiden\",\"email\":\"aiden.kuhn80@example.com\"},{\"lastname\":\"jones\",\"firstname\":\"candice\",\"email\":\"candice.jones60@example.com\"},{\"lastname\":\"griffin\",\"firstname\":\"dylan\",\"email\":\"dylan.griffin22@example.com\"},{\"lastname\":\"allen\",\"firstname\":\"jessica\",\"email\":\"jessica.allen64@example.com\"},{\"lastname\":\"evans\",\"firstname\":\"brooklyn\",\"email\":\"brooklyn.evans37@example.com\"},{\"lastname\":\"johnson\",\"firstname\":\"jack\",\"email\":\"jack.johnson47@example.com\"},{\"lastname\":\"rivera\",\"firstname\":\"levi\",\"email\":\"levi.rivera63@example.com\"},{\"lastname\":\"alexander\",\"firstname\":\"chloe\",\"email\":\"chloe.alexander85@example.com\"},{\"lastname\":\"thomas\",\"firstname\":\"brooklyn\",\"email\":\"brooklyn.thomas12@example.com\"},{\"lastname\":\"parker\",\"firstname\":\"noah\",\"email\":\"noah.parker98@example.com\"},{\"lastname\":\"scott\",\"firstname\":\"grace\",\"email\":\"grace.scott91@example.com\"},{\"lastname\":\"reed\",\"firstname\":\"carl\",\"email\":\"carl.reed98@example.com\"},{\"lastname\":\"gonzales\",\"firstname\":\"thomas\",\"email\":\"thomas.gonzales30@example.com\"},{\"lastname\":\"thompson\",\"firstname\":\"sophie\",\"email\":\"sophie.thompson36@example.com\"},{\"lastname\":\"myers\",\"firstname\":\"jessica\",\"email\":\"jessica.myers84@example.com\"},{\"lastname\":\"thomas\",\"firstname\":\"addison\",\"email\":\"addison.thomas52@example.com\"},{\"lastname\":\"hamilton\",\"firstname\":\"harold\",\"email\":\"harold.hamilton82@example.com\"}]");

/***/ }),

/***/ "./server/testtakersinfo.json":
/*!************************************!*\
  !*** ./server/testtakersinfo.json ***!
  \************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"login\":\"fosterabigail\",\"password\":\"123456\",\"title\":\"mrs\",\"lastname\":\"foster\",\"firstname\":\"abigail\",\"gender\":\"female\",\"email\":\"abigail.foster60@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/women/10.jpg\",\"address\":\"1851 saddle dr anna 69319\"},{\"login\":\"grahamallison\",\"password\":\"123456\",\"title\":\"ms\",\"lastname\":\"graham\",\"firstname\":\"allison\",\"gender\":\"female\",\"email\":\"allison.graham70@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/women/35.jpg\",\"address\":\"6697 rolling green rd colorado springs 56306\"},{\"login\":\"clarksusan\",\"password\":\"123456\",\"title\":\"miss\",\"lastname\":\"clark\",\"firstname\":\"susan\",\"gender\":\"female\",\"email\":\"susan.clark11@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/women/33.jpg\",\"address\":\"3627 groveland terrace ennis 70832\"},{\"login\":\"howardnicholas\",\"password\":\"123456\",\"title\":\"mr\",\"lastname\":\"howard\",\"firstname\":\"nicholas\",\"gender\":\"male\",\"email\":\"nicholas.howard84@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/men/14.jpg\",\"address\":\"7964 e center st van alstyne 19750\"},{\"login\":\"fordhannah\",\"password\":\"123456\",\"title\":\"mrs\",\"lastname\":\"ford\",\"firstname\":\"hannah\",\"gender\":\"female\",\"email\":\"hannah.ford29@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/women/30.jpg\",\"address\":\"3916 pecan acres ln salem 61414\"},{\"login\":\"cartergenesis\",\"password\":\"123456\",\"title\":\"mrs\",\"lastname\":\"carter\",\"firstname\":\"genesis\",\"gender\":\"female\",\"email\":\"genesis.carter42@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/women/35.jpg\",\"address\":\"1493 central st grapevine 16794\"},{\"login\":\"fosterkenzi\",\"password\":\"123456\",\"title\":\"mrs\",\"lastname\":\"foster\",\"firstname\":\"kenzi\",\"gender\":\"female\",\"email\":\"kenzi.foster37@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/women/23.jpg\",\"address\":\"4204 spring st shiloh 50907\"},{\"login\":\"wrightkatie\",\"password\":\"123456\",\"title\":\"miss\",\"lastname\":\"wright\",\"firstname\":\"katie\",\"gender\":\"female\",\"email\":\"katie.wright60@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/women/22.jpg\",\"address\":\"7855 rolling green rd fountain valley 42328\"},{\"login\":\"leegavin\",\"password\":\"123456\",\"title\":\"mr\",\"lastname\":\"lee\",\"firstname\":\"gavin\",\"gender\":\"male\",\"email\":\"gavin.lee41@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/men/3.jpg\",\"address\":\"6401 daisy dr colorado springs 75316\"},{\"login\":\"rossjane\",\"password\":\"123456\",\"title\":\"miss\",\"lastname\":\"ross\",\"firstname\":\"jane\",\"gender\":\"female\",\"email\":\"jane.ross42@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/women/5.jpg\",\"address\":\"1979 pockrus page rd cupertino 64368\"},{\"login\":\"forddouglas\",\"password\":\"123456\",\"title\":\"mr\",\"lastname\":\"ford\",\"firstname\":\"douglas\",\"gender\":\"male\",\"email\":\"douglas.ford43@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/men/2.jpg\",\"address\":\"6303 spring st joliet 11553\"},{\"login\":\"riverashannon\",\"password\":\"123456\",\"title\":\"mrs\",\"lastname\":\"rivera\",\"firstname\":\"shannon\",\"gender\":\"female\",\"email\":\"shannon.rivera95@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/women/29.jpg\",\"address\":\"3909 railroad st rochester 78868\"},{\"login\":\"watsonkenzi\",\"password\":\"123456\",\"title\":\"miss\",\"lastname\":\"watson\",\"firstname\":\"kenzi\",\"gender\":\"female\",\"email\":\"kenzi.watson58@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/women/3.jpg\",\"address\":\"5094 n stelling rd ironville 43693\"},{\"login\":\"myersisabella\",\"password\":\"123456\",\"title\":\"miss\",\"lastname\":\"myers\",\"firstname\":\"isabella\",\"gender\":\"female\",\"email\":\"isabella.myers69@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/women/10.jpg\",\"address\":\"8883 groveland terrace cedar hill 38457\"},{\"login\":\"edwardsabigail\",\"password\":\"123456\",\"title\":\"mrs\",\"lastname\":\"edwards\",\"firstname\":\"abigail\",\"gender\":\"female\",\"email\":\"abigail.edwards34@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/women/4.jpg\",\"address\":\"2840 brown terrace red bluff 47565\"},{\"login\":\"coxisaac\",\"password\":\"123456\",\"title\":\"mr\",\"lastname\":\"cox\",\"firstname\":\"isaac\",\"gender\":\"male\",\"email\":\"isaac.cox28@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/men/35.jpg\",\"address\":\"6092 marsh ln fremont 78549\"},{\"login\":\"jonesallison\",\"password\":\"123456\",\"title\":\"ms\",\"lastname\":\"jones\",\"firstname\":\"allison\",\"gender\":\"female\",\"email\":\"allison.jones81@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/women/23.jpg\",\"address\":\"7824 shady ln dr lousville 24000\"},{\"login\":\"sandersryan\",\"password\":\"123456\",\"title\":\"mr\",\"lastname\":\"sanders\",\"firstname\":\"ryan\",\"gender\":\"male\",\"email\":\"ryan.sanders19@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/men/41.jpg\",\"address\":\"6673 ash dr roanoke 14327\"},{\"login\":\"martinezmark\",\"password\":\"123456\",\"title\":\"mr\",\"lastname\":\"martinez\",\"firstname\":\"mark\",\"gender\":\"male\",\"email\":\"mark.martinez26@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/men/44.jpg\",\"address\":\"7244 samaritan dr stockton 71418\"},{\"login\":\"kuhnmark\",\"password\":\"123456\",\"title\":\"mr\",\"lastname\":\"kuhn\",\"firstname\":\"mark\",\"gender\":\"male\",\"email\":\"mark.kuhn95@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/men/15.jpg\",\"address\":\"5051 ranchview dr eureka 58057\"},{\"login\":\"grahamadrian\",\"password\":\"123456\",\"title\":\"mr\",\"lastname\":\"graham\",\"firstname\":\"adrian\",\"gender\":\"male\",\"email\":\"adrian.graham60@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/men/45.jpg\",\"address\":\"5516 washington ave ennis 63425\"},{\"login\":\"pattersonamanda\",\"password\":\"123456\",\"title\":\"miss\",\"lastname\":\"patterson\",\"firstname\":\"amanda\",\"gender\":\"female\",\"email\":\"amanda.patterson61@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/women/22.jpg\",\"address\":\"1575 e little york rd grand prairie 81870\"},{\"login\":\"leeelizabeth\",\"password\":\"123456\",\"title\":\"ms\",\"lastname\":\"lee\",\"firstname\":\"elizabeth\",\"gender\":\"female\",\"email\":\"elizabeth.lee56@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/women/28.jpg\",\"address\":\"4956 w gray st seymour 32611\"},{\"login\":\"fordamanda\",\"password\":\"123456\",\"title\":\"miss\",\"lastname\":\"ford\",\"firstname\":\"amanda\",\"gender\":\"female\",\"email\":\"amanda.ford21@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/women/35.jpg\",\"address\":\"5337 saddle dr evansville 48204\"},{\"login\":\"perrykay\",\"password\":\"123456\",\"title\":\"mrs\",\"lastname\":\"perry\",\"firstname\":\"kay\",\"gender\":\"female\",\"email\":\"kay.perry15@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/women/20.jpg\",\"address\":\"1956 timber wolf trail north valley 79425\"},{\"login\":\"millerlandon\",\"password\":\"123456\",\"title\":\"mr\",\"lastname\":\"miller\",\"firstname\":\"landon\",\"gender\":\"male\",\"email\":\"landon.miller95@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/men/3.jpg\",\"address\":\"5220 w belt line rd indianapolis 81440\"},{\"login\":\"cooksusan\",\"password\":\"123456\",\"title\":\"miss\",\"lastname\":\"cook\",\"firstname\":\"susan\",\"gender\":\"female\",\"email\":\"susan.cook85@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/women/14.jpg\",\"address\":\"1920 adams st pittsburgh 11793\"},{\"login\":\"williamsdylan\",\"password\":\"123456\",\"title\":\"mr\",\"lastname\":\"williams\",\"firstname\":\"dylan\",\"gender\":\"male\",\"email\":\"dylan.williams12@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/men/43.jpg\",\"address\":\"2136 camden ave lexington 34840\"},{\"login\":\"mitchellemary\",\"password\":\"123456\",\"title\":\"miss\",\"lastname\":\"mitchelle\",\"firstname\":\"mary\",\"gender\":\"female\",\"email\":\"mary.mitchelle36@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/women/20.jpg\",\"address\":\"2939 mockingbird hill wichita falls 28542\"},{\"login\":\"johnsonstephen\",\"password\":\"123456\",\"title\":\"mr\",\"lastname\":\"johnson\",\"firstname\":\"stephen\",\"gender\":\"male\",\"email\":\"stephen.johnson97@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/men/20.jpg\",\"address\":\"5344 harrison ct las vegas 43981\"},{\"login\":\"washingtonritthy\",\"password\":\"123456\",\"title\":\"mr\",\"lastname\":\"washington\",\"firstname\":\"ritthy\",\"gender\":\"male\",\"email\":\"ritthy.washington73@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/men/17.jpg\",\"address\":\"3000 harrison ct altoona 42050\"},{\"login\":\"sullivankim\",\"password\":\"123456\",\"title\":\"miss\",\"lastname\":\"sullivan\",\"firstname\":\"kim\",\"gender\":\"female\",\"email\":\"kim.sullivan91@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/women/32.jpg\",\"address\":\"7931 fincher rd new york 57273\"},{\"login\":\"scottdaniel\",\"password\":\"123456\",\"title\":\"mr\",\"lastname\":\"scott\",\"firstname\":\"daniel\",\"gender\":\"male\",\"email\":\"daniel.scott61@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/men/5.jpg\",\"address\":\"7734 central st fayetteville 15951\"},{\"login\":\"kuhnisabella\",\"password\":\"123456\",\"title\":\"mrs\",\"lastname\":\"kuhn\",\"firstname\":\"isabella\",\"gender\":\"female\",\"email\":\"isabella.kuhn58@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/women/0.jpg\",\"address\":\"8239 homestead rd duncanville 35822\"},{\"login\":\"fordlucas\",\"password\":\"123456\",\"title\":\"mr\",\"lastname\":\"ford\",\"firstname\":\"lucas\",\"gender\":\"male\",\"email\":\"lucas.ford93@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/men/35.jpg\",\"address\":\"6670 spring st belen 74391\"},{\"login\":\"longpeter\",\"password\":\"123456\",\"title\":\"mr\",\"lastname\":\"long\",\"firstname\":\"peter\",\"gender\":\"male\",\"email\":\"peter.long69@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/men/39.jpg\",\"address\":\"2781 nowlin rd red oak 12073\"},{\"login\":\"youngaubrey\",\"password\":\"123456\",\"title\":\"miss\",\"lastname\":\"young\",\"firstname\":\"aubrey\",\"gender\":\"female\",\"email\":\"aubrey.young59@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/women/13.jpg\",\"address\":\"1690 w belt line rd rochmond 30569\"},{\"login\":\"campbellkathy\",\"password\":\"123456\",\"title\":\"ms\",\"lastname\":\"campbell\",\"firstname\":\"kathy\",\"gender\":\"female\",\"email\":\"kathy.campbell57@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/women/24.jpg\",\"address\":\"6040 photinia ave salem 41262\"},{\"login\":\"davisnevaeh\",\"password\":\"123456\",\"title\":\"ms\",\"lastname\":\"davis\",\"firstname\":\"nevaeh\",\"gender\":\"female\",\"email\":\"nevaeh.davis16@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/women/4.jpg\",\"address\":\"6236 n stelling rd salt lake city 36220\"},{\"login\":\"perryanthony\",\"password\":\"123456\",\"title\":\"mr\",\"lastname\":\"perry\",\"firstname\":\"anthony\",\"gender\":\"male\",\"email\":\"anthony.perry67@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/men/46.jpg\",\"address\":\"2292 oak ridge ln altoona 74234\"},{\"login\":\"wrightisaac\",\"password\":\"123456\",\"title\":\"mr\",\"lastname\":\"wright\",\"firstname\":\"isaac\",\"gender\":\"male\",\"email\":\"isaac.wright29@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/men/13.jpg\",\"address\":\"4784 e north st tacoma 37116\"},{\"login\":\"hallliam\",\"password\":\"123456\",\"title\":\"mr\",\"lastname\":\"hall\",\"firstname\":\"liam\",\"gender\":\"male\",\"email\":\"liam.hall25@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/men/36.jpg\",\"address\":\"7885 valwood pkwy tacoma 63625\"},{\"login\":\"mitchelleisabella\",\"password\":\"123456\",\"title\":\"mrs\",\"lastname\":\"mitchelle\",\"firstname\":\"isabella\",\"gender\":\"female\",\"email\":\"isabella.mitchelle88@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/women/33.jpg\",\"address\":\"6694 ash dr frederick 13371\"},{\"login\":\"gonzaleslevi\",\"password\":\"123456\",\"title\":\"mr\",\"lastname\":\"gonzales\",\"firstname\":\"levi\",\"gender\":\"male\",\"email\":\"levi.gonzales74@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/men/45.jpg\",\"address\":\"1261 forest ln lewiston 43293\"},{\"login\":\"jacksonsarah\",\"password\":\"123456\",\"title\":\"miss\",\"lastname\":\"jackson\",\"firstname\":\"sarah\",\"gender\":\"female\",\"email\":\"sarah.jackson65@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/women/7.jpg\",\"address\":\"6827 taylor st stockton 77302\"},{\"login\":\"perryevan\",\"password\":\"123456\",\"title\":\"mr\",\"lastname\":\"perry\",\"firstname\":\"evan\",\"gender\":\"male\",\"email\":\"evan.perry69@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/men/22.jpg\",\"address\":\"4345 eason rd aubrey 64656\"},{\"login\":\"grahamharold\",\"password\":\"123456\",\"title\":\"mr\",\"lastname\":\"graham\",\"firstname\":\"harold\",\"gender\":\"male\",\"email\":\"harold.graham54@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/men/21.jpg\",\"address\":\"2562 prospect rd sacramento 76127\"},{\"login\":\"rodriquezgeorge\",\"password\":\"123456\",\"title\":\"mr\",\"lastname\":\"rodriquez\",\"firstname\":\"george\",\"gender\":\"male\",\"email\":\"george.rodriquez83@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/men/43.jpg\",\"address\":\"8382 plum st bernalillo 47378\"},{\"login\":\"scottcameron\",\"password\":\"123456\",\"title\":\"mr\",\"lastname\":\"scott\",\"firstname\":\"cameron\",\"gender\":\"male\",\"email\":\"cameron.scott69@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/men/32.jpg\",\"address\":\"7236 walnut hill ln eureka 34972\"},{\"login\":\"mooremadison\",\"password\":\"123456\",\"title\":\"ms\",\"lastname\":\"moore\",\"firstname\":\"madison\",\"gender\":\"female\",\"email\":\"madison.moore80@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/women/32.jpg\",\"address\":\"4015 e little york rd shiloh 69658\"},{\"login\":\"sandersgabriel\",\"password\":\"123456\",\"title\":\"mr\",\"lastname\":\"sanders\",\"firstname\":\"gabriel\",\"gender\":\"male\",\"email\":\"gabriel.sanders85@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/men/30.jpg\",\"address\":\"2733 white oak dr york 13882\"},{\"login\":\"hendersoncharlotte\",\"password\":\"123456\",\"title\":\"mrs\",\"lastname\":\"henderson\",\"firstname\":\"charlotte\",\"gender\":\"female\",\"email\":\"charlotte.henderson71@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/women/11.jpg\",\"address\":\"8144 e center st fountain valley 68292\"},{\"login\":\"rosssebastian\",\"password\":\"123456\",\"title\":\"mr\",\"lastname\":\"ross\",\"firstname\":\"sebastian\",\"gender\":\"male\",\"email\":\"sebastian.ross34@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/men/39.jpg\",\"address\":\"3799 karen dr albuquerque 30284\"},{\"login\":\"evansgeorge\",\"password\":\"123456\",\"title\":\"mr\",\"lastname\":\"evans\",\"firstname\":\"george\",\"gender\":\"male\",\"email\":\"george.evans13@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/men/36.jpg\",\"address\":\"8825 wycliff ave addison 16150\"},{\"login\":\"clarkkim\",\"password\":\"123456\",\"title\":\"miss\",\"lastname\":\"clark\",\"firstname\":\"kim\",\"gender\":\"female\",\"email\":\"kim.clark24@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/women/9.jpg\",\"address\":\"4274 shady ln dr akron 45515\"},{\"login\":\"nelsonkristin\",\"password\":\"123456\",\"title\":\"miss\",\"lastname\":\"nelson\",\"firstname\":\"kristin\",\"gender\":\"female\",\"email\":\"kristin.nelson69@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/women/12.jpg\",\"address\":\"2497 parker rd seattle 14311\"},{\"login\":\"turnerrebecca\",\"password\":\"123456\",\"title\":\"miss\",\"lastname\":\"turner\",\"firstname\":\"rebecca\",\"gender\":\"female\",\"email\":\"rebecca.turner94@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/women/13.jpg\",\"address\":\"3742 green rd wilmington 81707\"},{\"login\":\"kellyleah\",\"password\":\"123456\",\"title\":\"mrs\",\"lastname\":\"kelly\",\"firstname\":\"leah\",\"gender\":\"female\",\"email\":\"leah.kelly61@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/women/18.jpg\",\"address\":\"1242 ash dr toledo 24297\"},{\"login\":\"harristhomas\",\"password\":\"123456\",\"title\":\"mr\",\"lastname\":\"harris\",\"firstname\":\"thomas\",\"gender\":\"male\",\"email\":\"thomas.harris13@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/men/6.jpg\",\"address\":\"7701 sunset st fresno 42090\"},{\"login\":\"fordwalter\",\"password\":\"123456\",\"title\":\"mr\",\"lastname\":\"ford\",\"firstname\":\"walter\",\"gender\":\"male\",\"email\":\"walter.ford33@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/men/6.jpg\",\"address\":\"5836 cherry st escondido 83210\"},{\"login\":\"parkeravery\",\"password\":\"123456\",\"title\":\"miss\",\"lastname\":\"parker\",\"firstname\":\"avery\",\"gender\":\"female\",\"email\":\"avery.parker73@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/women/7.jpg\",\"address\":\"4737 depaul dr yakima 71591\"},{\"login\":\"coxsandra\",\"password\":\"123456\",\"title\":\"mrs\",\"lastname\":\"cox\",\"firstname\":\"sandra\",\"gender\":\"female\",\"email\":\"sandra.cox68@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/women/32.jpg\",\"address\":\"4320 wycliff ave lewiston 45629\"},{\"login\":\"leewilliam\",\"password\":\"123456\",\"title\":\"mr\",\"lastname\":\"lee\",\"firstname\":\"william\",\"gender\":\"male\",\"email\":\"william.lee91@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/men/39.jpg\",\"address\":\"6346 woodland st celina 52937\"},{\"login\":\"fosterjune\",\"password\":\"123456\",\"title\":\"mrs\",\"lastname\":\"foster\",\"firstname\":\"june\",\"gender\":\"female\",\"email\":\"june.foster74@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/women/17.jpg\",\"address\":\"5834 bruce st vernon 28658\"},{\"login\":\"lewishunter\",\"password\":\"123456\",\"title\":\"mr\",\"lastname\":\"lewis\",\"firstname\":\"hunter\",\"gender\":\"male\",\"email\":\"hunter.lewis54@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/men/5.jpg\",\"address\":\"7250 royal ln portland 47491\"},{\"login\":\"howardronald\",\"password\":\"123456\",\"title\":\"mr\",\"lastname\":\"howard\",\"firstname\":\"ronald\",\"gender\":\"male\",\"email\":\"ronald.howard98@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/men/24.jpg\",\"address\":\"8126 first street lancaster 48982\"},{\"login\":\"evanspeter\",\"password\":\"123456\",\"title\":\"mr\",\"lastname\":\"evans\",\"firstname\":\"peter\",\"gender\":\"male\",\"email\":\"peter.evans17@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/men/11.jpg\",\"address\":\"1497 e little york rd buffalo 35740\"},{\"login\":\"scottlandon\",\"password\":\"123456\",\"title\":\"mr\",\"lastname\":\"scott\",\"firstname\":\"landon\",\"gender\":\"male\",\"email\":\"landon.scott35@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/men/9.jpg\",\"address\":\"2418 prospect rd carrollton 61528\"},{\"login\":\"wardlinda\",\"password\":\"123456\",\"title\":\"ms\",\"lastname\":\"ward\",\"firstname\":\"linda\",\"gender\":\"female\",\"email\":\"linda.ward84@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/women/30.jpg\",\"address\":\"2911 harrison ct richardson 50760\"},{\"login\":\"thompsonaiden\",\"password\":\"123456\",\"title\":\"mr\",\"lastname\":\"thompson\",\"firstname\":\"aiden\",\"gender\":\"male\",\"email\":\"aiden.thompson91@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/men/31.jpg\",\"address\":\"8170 lovers ln boise 60466\"},{\"login\":\"cookscarlett\",\"password\":\"123456\",\"title\":\"miss\",\"lastname\":\"cook\",\"firstname\":\"scarlett\",\"gender\":\"female\",\"email\":\"scarlett.cook25@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/women/20.jpg\",\"address\":\"4396 karen dr long beach 50213\"},{\"login\":\"greenarthur\",\"password\":\"123456\",\"title\":\"mr\",\"lastname\":\"green\",\"firstname\":\"arthur\",\"gender\":\"male\",\"email\":\"arthur.green67@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/men/22.jpg\",\"address\":\"1969 central st long beach 26083\"},{\"login\":\"graypeyton\",\"password\":\"123456\",\"title\":\"miss\",\"lastname\":\"gray\",\"firstname\":\"peyton\",\"gender\":\"female\",\"email\":\"peyton.gray70@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/women/19.jpg\",\"address\":\"7148 w sherman dr waxahachie 84174\"},{\"login\":\"clarkkaylee\",\"password\":\"123456\",\"title\":\"ms\",\"lastname\":\"clark\",\"firstname\":\"kaylee\",\"gender\":\"female\",\"email\":\"kaylee.clark12@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/women/20.jpg\",\"address\":\"4387 groveland terrace lewiston 43101\"},{\"login\":\"grayava\",\"password\":\"123456\",\"title\":\"ms\",\"lastname\":\"gray\",\"firstname\":\"ava\",\"gender\":\"female\",\"email\":\"ava.gray70@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/women/11.jpg\",\"address\":\"1252 w belt line rd edgewood 71425\"},{\"login\":\"colemanlandon\",\"password\":\"123456\",\"title\":\"mr\",\"lastname\":\"coleman\",\"firstname\":\"landon\",\"gender\":\"male\",\"email\":\"landon.coleman20@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/men/17.jpg\",\"address\":\"7305 elgin st fort collins 74777\"},{\"login\":\"pattersonjennifer\",\"password\":\"123456\",\"title\":\"ms\",\"lastname\":\"patterson\",\"firstname\":\"jennifer\",\"gender\":\"female\",\"email\":\"jennifer.patterson70@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/women/29.jpg\",\"address\":\"5649 w pecan st charlotte 73247\"},{\"login\":\"jenkinsmason\",\"password\":\"123456\",\"title\":\"mr\",\"lastname\":\"jenkins\",\"firstname\":\"mason\",\"gender\":\"male\",\"email\":\"mason.jenkins96@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/men/15.jpg\",\"address\":\"2269 mockingbird hill plano 38104\"},{\"login\":\"mooreserenity\",\"password\":\"123456\",\"title\":\"miss\",\"lastname\":\"moore\",\"firstname\":\"serenity\",\"gender\":\"female\",\"email\":\"serenity.moore43@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/women/6.jpg\",\"address\":\"4872 smokey ln hamsburg 65324\"},{\"login\":\"diazjordan\",\"password\":\"123456\",\"title\":\"mr\",\"lastname\":\"diaz\",\"firstname\":\"jordan\",\"gender\":\"male\",\"email\":\"jordan.diaz41@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/men/35.jpg\",\"address\":\"3113 valley view ln forney 57506\"},{\"login\":\"hamiltonjayden\",\"password\":\"123456\",\"title\":\"mr\",\"lastname\":\"hamilton\",\"firstname\":\"jayden\",\"gender\":\"male\",\"email\":\"jayden.hamilton45@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/men/21.jpg\",\"address\":\"6478 fairview st farmers branch 75389\"},{\"login\":\"kuhnalbert\",\"password\":\"123456\",\"title\":\"mr\",\"lastname\":\"kuhn\",\"firstname\":\"albert\",\"gender\":\"male\",\"email\":\"albert.kuhn43@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/men/10.jpg\",\"address\":\"3513 taylor st altoona 16470\"},{\"login\":\"myersashley\",\"password\":\"123456\",\"title\":\"ms\",\"lastname\":\"myers\",\"firstname\":\"ashley\",\"gender\":\"female\",\"email\":\"ashley.myers44@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/women/23.jpg\",\"address\":\"6590 n stelling rd denver 24383\"},{\"login\":\"kuhnaiden\",\"password\":\"123456\",\"title\":\"mr\",\"lastname\":\"kuhn\",\"firstname\":\"aiden\",\"gender\":\"male\",\"email\":\"aiden.kuhn80@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/men/29.jpg\",\"address\":\"4813 bollinger rd seagoville 60924\"},{\"login\":\"jonescandice\",\"password\":\"123456\",\"title\":\"mrs\",\"lastname\":\"jones\",\"firstname\":\"candice\",\"gender\":\"female\",\"email\":\"candice.jones60@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/women/21.jpg\",\"address\":\"1264 brown terrace cleveland 76693\"},{\"login\":\"griffindylan\",\"password\":\"123456\",\"title\":\"mr\",\"lastname\":\"griffin\",\"firstname\":\"dylan\",\"gender\":\"male\",\"email\":\"dylan.griffin22@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/men/30.jpg\",\"address\":\"8010 blossom hill rd york 42671\"},{\"login\":\"allenjessica\",\"password\":\"123456\",\"title\":\"ms\",\"lastname\":\"allen\",\"firstname\":\"jessica\",\"gender\":\"female\",\"email\":\"jessica.allen64@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/women/6.jpg\",\"address\":\"5574 spring st lancaster 44500\"},{\"login\":\"evansbrooklyn\",\"password\":\"123456\",\"title\":\"mrs\",\"lastname\":\"evans\",\"firstname\":\"brooklyn\",\"gender\":\"female\",\"email\":\"brooklyn.evans37@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/women/17.jpg\",\"address\":\"4132 ash dr roseburg 50071\"},{\"login\":\"johnsonjack\",\"password\":\"123456\",\"title\":\"mr\",\"lastname\":\"johnson\",\"firstname\":\"jack\",\"gender\":\"male\",\"email\":\"jack.johnson47@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/men/8.jpg\",\"address\":\"5337 hamilton ave providence 56747\"},{\"login\":\"riveralevi\",\"password\":\"123456\",\"title\":\"mr\",\"lastname\":\"rivera\",\"firstname\":\"levi\",\"gender\":\"male\",\"email\":\"levi.rivera63@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/men/20.jpg\",\"address\":\"6549 fincher rd nampa 56842\"},{\"login\":\"alexanderchloe\",\"password\":\"123456\",\"title\":\"miss\",\"lastname\":\"alexander\",\"firstname\":\"chloe\",\"gender\":\"female\",\"email\":\"chloe.alexander85@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/women/18.jpg\",\"address\":\"4376 wheeler ridge dr princeton 57200\"},{\"login\":\"thomasbrooklyn\",\"password\":\"123456\",\"title\":\"miss\",\"lastname\":\"thomas\",\"firstname\":\"brooklyn\",\"gender\":\"female\",\"email\":\"brooklyn.thomas12@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/women/30.jpg\",\"address\":\"1672 lakeview st stanley 47533\"},{\"login\":\"parkernoah\",\"password\":\"123456\",\"title\":\"mr\",\"lastname\":\"parker\",\"firstname\":\"noah\",\"gender\":\"male\",\"email\":\"noah.parker98@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/men/31.jpg\",\"address\":\"4128 mockingbird hill altoona 68156\"},{\"login\":\"scottgrace\",\"password\":\"123456\",\"title\":\"mrs\",\"lastname\":\"scott\",\"firstname\":\"grace\",\"gender\":\"female\",\"email\":\"grace.scott91@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/women/20.jpg\",\"address\":\"3534 e sandy lake rd shiloh 71489\"},{\"login\":\"reedcarl\",\"password\":\"123456\",\"title\":\"mr\",\"lastname\":\"reed\",\"firstname\":\"carl\",\"gender\":\"male\",\"email\":\"carl.reed98@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/men/0.jpg\",\"address\":\"1964 lakeshore rd albuquerque 84622\"},{\"login\":\"gonzalesthomas\",\"password\":\"123456\",\"title\":\"mr\",\"lastname\":\"gonzales\",\"firstname\":\"thomas\",\"gender\":\"male\",\"email\":\"thomas.gonzales30@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/men/48.jpg\",\"address\":\"8799 e pecan st albuquerque 24923\"},{\"login\":\"thompsonsophie\",\"password\":\"123456\",\"title\":\"miss\",\"lastname\":\"thompson\",\"firstname\":\"sophie\",\"gender\":\"female\",\"email\":\"sophie.thompson36@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/women/23.jpg\",\"address\":\"8740 w dallas st evansville 10379\"},{\"login\":\"myersjessica\",\"password\":\"123456\",\"title\":\"miss\",\"lastname\":\"myers\",\"firstname\":\"jessica\",\"gender\":\"female\",\"email\":\"jessica.myers84@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/women/21.jpg\",\"address\":\"7363 country club rd columbus 30408\"},{\"login\":\"thomasaddison\",\"password\":\"123456\",\"title\":\"miss\",\"lastname\":\"thomas\",\"firstname\":\"addison\",\"gender\":\"female\",\"email\":\"addison.thomas52@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/women/0.jpg\",\"address\":\"1965 plum st dumas 36860\"},{\"login\":\"hamiltonharold\",\"password\":\"123456\",\"title\":\"mr\",\"lastname\":\"hamilton\",\"firstname\":\"harold\",\"gender\":\"male\",\"email\":\"harold.hamilton82@example.com\",\"picture\":\"http://api.randomuser.me/0.2/portraits/men/12.jpg\",\"address\":\"6791 samaritan dr greensboro 20141\"}]");

/***/ }),

/***/ "./services/api.js":
/*!*************************!*\
  !*** ./services/api.js ***!
  \*************************/
/*! exports provided: fetchRequest, fetchAll, fetchInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchRequest", function() { return fetchRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAll", function() { return fetchAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchInfo", function() { return fetchInfo; });
/* harmony import */ var _server_testtakers_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../server/testtakers.json */ "./server/testtakers.json");
var _server_testtakers_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../server/testtakers.json */ "./server/testtakers.json", 1);
/* harmony import */ var _server_testtakersinfo_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../server/testtakersinfo.json */ "./server/testtakersinfo.json");
var _server_testtakersinfo_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../server/testtakersinfo.json */ "./server/testtakersinfo.json", 1);



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

function validateResponse({ status, res }) {
    if (status !== 'ok') {
        throw new Error('Resource is unavailable');
    }

    return res;
}

/**
 * Simulate request to server
 *
 * @param url
 * @param params
 * @param headers
 * @returns {Promise<Response>}
 */
function fetchRequest(url = '', params = {}, headers = defHeaders) {
    const response = {
        status: 'ok',
    };

    if (url === 'info') {
        if (!params.email || typeof params.email !== 'string') {
            return error('Request has wrong params');
        }
        if (!Array.isArray(_server_testtakersinfo_json__WEBPACK_IMPORTED_MODULE_1__)) {
            return error('Info has broken format');
        }
        response.res = _server_testtakersinfo_json__WEBPACK_IMPORTED_MODULE_1__.filter(({ email }) => email === params.email);
    } else {
        if (!Array.isArray(_server_testtakers_json__WEBPACK_IMPORTED_MODULE_0__)) {
            return error('Data has broken format');
        }
        response.res = _server_testtakers_json__WEBPACK_IMPORTED_MODULE_0__;
    }

    return success(response);
}

/**
 * Get all users
 * @param url
 * @returns {Promise<Response>}
 */
function fetchAll(url) {
    return fetchRequest(url)
        .then(validateResponse)
}

function fetchInfo(url, params) {
    return fetchRequest(url, params)
        .then(validateResponse)
}


function success(response) {
    return new Promise(resolve => setTimeout(() => {
        resolve(response);
    }, 500));
}

function error(msg = '') {
    return new Promise(reject => setTimeout(() => {
        reject(msg);
    }, 500));
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
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./templates/user.js");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api */ "./services/api.js");
/* harmony import */ var _services_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/storage */ "./services/storage.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants */ "./constants.js");








class BodyElement {
    create() {
        // Wrapper
        const cls = Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__["getWithNamespace"])('user-wrapper');
        this.el = document.createElement('div');
        this.el.classList.add(cls);

        // Users list container
        this.list = document.createElement('div');
        this.list.classList.add(Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__["getWithNamespace"])('user-list'));
        this.list.appendChild(Object(_loader__WEBPACK_IMPORTED_MODULE_1__["default"])());

        const handler = showUserInfo.bind(this);
        this.list.addEventListener('click', handler);

        this.el.appendChild(this.list);

        return this.el;
    }

    showError(e) {
        this.cleanupList();
        Object(_services_error_logger__WEBPACK_IMPORTED_MODULE_2__["logError"])(e, 5);
        const errElement = document.createElement('div');
        errElement.textContent = 'Data was fetched with error.';
        this.el.appendChild(errElement);
    }

    renderAllRows(data = []) {
        if (!Array.isArray(data)) {
            Object(_services_error_logger__WEBPACK_IMPORTED_MODULE_2__["logError"])('Income data not an array', 1);
            throw new Error('Data can not be rendered');
        }
        this.cleanupList();
        const renderedList = document.createElement('div');
        data.forEach(el => renderedList.appendChild(Object(_user__WEBPACK_IMPORTED_MODULE_3__["default"])(el)));
        this.list.appendChild(renderedList);
    }

    renderRow(info, parent) {
            const el = Object(_user__WEBPACK_IMPORTED_MODULE_3__["renderUserInfo"])(info);
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
    Object(_services_api__WEBPACK_IMPORTED_MODULE_4__["fetchInfo"])('info', { email })
        .then(([info]) => {
            body.renderRow(info, el);
            el.classList.add('loaded');
            if (info) {
                _services_storage__WEBPACK_IMPORTED_MODULE_5__["default"].add(id, JSON.stringify(info));
            }
            el.classList.toggle('expanded');
        })
        .catch((e) => {
            body.showError(e);
        });
}

function toggleExtendedInfo({ el, body, id }) {
    if (el.classList.contains('expanded')) {
        const children = el.querySelector('.' + Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__["getWithNamespace"])(_constants__WEBPACK_IMPORTED_MODULE_6__["EXTENDED_INFO_CLASS"]));
        if (children) {
            children.remove();
        }
    } else {
        const info = _services_storage__WEBPACK_IMPORTED_MODULE_5__["default"].get(id);
        if (info) {
            body.renderRow(JSON.parse(info), el);
        }
    }
    el.classList.toggle('expanded');
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
            'pasword',
        ];
    }

    create(sortingFunc) {
        const cls = Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__["getWithNamespace"])('user-toolbar');
        this.el = document.createElement('div');
        this.el.classList.add(cls);
        this.el.appendChild(Object(_loader__WEBPACK_IMPORTED_MODULE_1__["default"])());

        this.sortHandler = sortingFunc;
        if (typeof this.sortHandler !== 'function') {
            Object(_services_error_logger__WEBPACK_IMPORTED_MODULE_2__["logDebug"])('Toolbar initialized without sorting function');
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
            Object(_services_error_logger__WEBPACK_IMPORTED_MODULE_2__["logDebug"])('Toolbar rendered empty because of incorrect data');
            return '';
        }
        const inner = fields.reduce((acc, field) => acc += this.restrictedFields.includes(field)
            ? ''
            : `<div data-sort-key="${field}" class="${Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__["getWithNamespace"])(field)} ${Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__["getWithNamespace"])('toolbar')}">${Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__["purify"])(field)}</div>`, '');
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
    const users = _services_storage__WEBPACK_IMPORTED_MODULE_3__["default"].get(_constants__WEBPACK_IMPORTED_MODULE_4__["USERS_LIST"]);
    sortHandler(JSON.parse(users), target.dataset.sortKey);
}


/***/ }),

/***/ "./templates/user.js":
/*!***************************!*\
  !*** ./templates/user.js ***!
  \***************************/
/*! exports provided: default, renderUserInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return renderUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderUserInfo", function() { return renderUserInfo; });
/* harmony import */ var _services_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/helper */ "./services/helper.js");
/* harmony import */ var _services_error_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/error-logger */ "./services/error-logger.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./constants.js");




const userInterface = [
    'email', 'firstname', 'lastname',
];

const userExtendedInerface = [
    'login',
    'password',
    'title',
    'lastname',
    'firstname',
    'gender',
    'email',
    'picture',
    'address',
];
function renderUser(params) {
    const isValid = validateByInterface(params, userInterface);
    if (!isValid) {
        const id = Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])();
        params = {
            email: `unknown${id}@qa.qa`,
            firstname: 'Unknown',
            lastname: 'User',
        };
    }
    const { email, firstname, lastname } = params;

    return render(email, firstname, lastname);
}

function renderUserInfo(info) {
    const isValid = validateByInterface(info, userExtendedInerface);
    if (!isValid) {
        const id = Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])();
        info = {
            email: `unknown${id}@qa.qa`,
            firstname: 'Unknown',
            lastname: 'User',
        };
    }

    return renderInfo(info);
}

function validateByInterface(params = [], rules = []) {
    if (typeof params !== 'object') {
        Object(_services_error_logger__WEBPACK_IMPORTED_MODULE_1__["logError"])('Income params for validation user is not an object', 3);
        throw new Error('Data can not be rendered');
    }
    if (!Array.isArray(rules)) {
        Object(_services_error_logger__WEBPACK_IMPORTED_MODULE_1__["logError"])('Wrong interface for validation user', 4);
        throw new Error('Data can not be rendered');
    }
    // Require that params at least corresponds to interface
    return rules.every(requiredField => typeof params[requiredField] !== 'undefined');
}

function render(email, firstname, lastname){
    const el = document.createElement('div');
    el.id = `${email}-${Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])()}`;
    el.dataset.email = email;
    el.classList.add(Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__["getWithNamespace"])('user'));
    el.innerHTML = `<div class='${Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__["getWithNamespace"])('shortly')}'>
                        <div class='${Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__["getWithNamespace"])('lastname')}'>${Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__["purify"])(lastname)}</div>
                        <div class='${Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__["getWithNamespace"])('firstname')}'>${Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__["purify"])(firstname)}</div>
                    </div>`;

    return el;
}

function renderInfo(info){
    const el = document.createElement('div');
    el.classList.add(Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__["getWithNamespace"])(_constants__WEBPACK_IMPORTED_MODULE_2__["EXTENDED_INFO_CLASS"]));
    let inner = '';
    Object.entries(info).forEach(([field, value]) => {
        inner += `<div class='${Object(_services_helper__WEBPACK_IMPORTED_MODULE_0__["getWithNamespace"])(field)}'>${field}: ${value}</div>`;
    });
    el.innerHTML = inner;

    return el;
}

/***/ }),

/***/ "./users.js":
/*!******************!*\
  !*** ./users.js ***!
  \******************/
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






function render(initSettings = {}) {
    const { parentEl, url } = extendDefaults(initSettings);

    // Body
    const body = new _templates_body__WEBPACK_IMPORTED_MODULE_1__["default"]();
    parentEl.appendChild(body.create());

    // Toolbar
    const toolbar = new _templates_toolbar__WEBPACK_IMPORTED_MODULE_2__["default"]();
    body.el.prepend(toolbar.create(body.sortRows.bind(body)));

    // Load initial data
    Object(_services_api__WEBPACK_IMPORTED_MODULE_0__["fetchAll"])(url)
        .then((users) => {
            const firstUser = users[0];
            toolbar.render(Object.keys(firstUser));
            body.renderAllRows(users);
            _services_storage__WEBPACK_IMPORTED_MODULE_3__["default"].add(_constants__WEBPACK_IMPORTED_MODULE_4__["USERS_LIST"], JSON.stringify(users));
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


/***/ })

/******/ });
});
//# sourceMappingURL=bundle.js.map