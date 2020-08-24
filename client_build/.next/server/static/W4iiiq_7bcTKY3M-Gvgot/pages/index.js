module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+vfP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ls; });
const ls = key => key !== null && key !== void 0 ? key : '';

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("23aj");


/***/ }),

/***/ "23aj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRe", function() { return HomeRe; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_style_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ZtJr");
/* harmony import */ var _utils_tools_dealKey__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("+vfP");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const HomeRe = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {// router.replace('/home/[appModule]', '/home/categorySelection', {})
  });
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1087306725", [_utils_style_common__WEBPACK_IMPORTED_MODULE_3__[/* mpStyle */ "a"].red, _utils_style_common__WEBPACK_IMPORTED_MODULE_3__[/* mpStyle */ "a"].red]]]) + " " + 'box'
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1087306725", [_utils_style_common__WEBPACK_IMPORTED_MODULE_3__[/* mpStyle */ "a"].red, _utils_style_common__WEBPACK_IMPORTED_MODULE_3__[/* mpStyle */ "a"].red]]]) + " " + "title"
  }, __jsx("img", {
    src: "/img/home/logo_white.png",
    alt: "",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1087306725", [_utils_style_common__WEBPACK_IMPORTED_MODULE_3__[/* mpStyle */ "a"].red, _utils_style_common__WEBPACK_IMPORTED_MODULE_3__[/* mpStyle */ "a"].red]]])
  }), __jsx("section", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1087306725", [_utils_style_common__WEBPACK_IMPORTED_MODULE_3__[/* mpStyle */ "a"].red, _utils_style_common__WEBPACK_IMPORTED_MODULE_3__[/* mpStyle */ "a"].red]]])
  }, Object(_utils_tools_dealKey__WEBPACK_IMPORTED_MODULE_4__[/* ls */ "a"])('Market')), __jsx("main", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1087306725", [_utils_style_common__WEBPACK_IMPORTED_MODULE_3__[/* mpStyle */ "a"].red, _utils_style_common__WEBPACK_IMPORTED_MODULE_3__[/* mpStyle */ "a"].red]]])
  }, Object(_utils_tools_dealKey__WEBPACK_IMPORTED_MODULE_4__[/* ls */ "a"])('Payless'))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1087306725", [_utils_style_common__WEBPACK_IMPORTED_MODULE_3__[/* mpStyle */ "a"].red, _utils_style_common__WEBPACK_IMPORTED_MODULE_3__[/* mpStyle */ "a"].red]]]) + " " + "actions"
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    size: 'large',
    style: {
      marginBottom: '20px'
    },
    variant: 'contained',
    onClick: async () => {
      await router.push('/login');
    }
  }, Object(_utils_tools_dealKey__WEBPACK_IMPORTED_MODULE_4__[/* ls */ "a"])('登录')), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    size: 'large',
    variant: 'outlined',
    onClick: async () => {
      await router.push('/register');
    }
  }, Object(_utils_tools_dealKey__WEBPACK_IMPORTED_MODULE_4__[/* ls */ "a"])('注册'))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1087306725",
    dynamic: [_utils_style_common__WEBPACK_IMPORTED_MODULE_3__[/* mpStyle */ "a"].red, _utils_style_common__WEBPACK_IMPORTED_MODULE_3__[/* mpStyle */ "a"].red]
  }, [`.box.__jsx-style-dynamic-selector{height:100vh;background:${_utils_style_common__WEBPACK_IMPORTED_MODULE_3__[/* mpStyle */ "a"].red};box-sizing:border-box;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}`, ".title.__jsx-style-dynamic-selector{display:grid;grid-template-columns:25vw -webkit-min-content;grid-template-columns:25vw min-content;grid-template-rows:12.5vw;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:25vh;color:#fff;font-size:6.25vw;}", ".title.__jsx-style-dynamic-selector>img.__jsx-style-dynamic-selector{width:25vw;grid-area:1/1/3/2;}", ".title.__jsx-style-dynamic-selector>section.__jsx-style-dynamic-selector{-webkit-align-self:end;-ms-flex-item-align:end;align-self:end;}", ".title.__jsx-style-dynamic-selector>main.__jsx-style-dynamic-selector{font-weight:bold;-webkit-align-self:start;-ms-flex-item-align:start;align-self:start;}", ".actions.__jsx-style-dynamic-selector{width:calc(100vw - 12.5vw);margin-top:30vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}", ".actions.__jsx-style-dynamic-selector .MuiButton-outlined{border-color:#fff;color:#fff;}", `.actions.__jsx-style-dynamic-selector .MuiButton-contained{color:${_utils_style_common__WEBPACK_IMPORTED_MODULE_3__[/* mpStyle */ "a"].red};}`]));
};
/* harmony default export */ __webpack_exports__["default"] = (HomeRe);

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "ZtJr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mpStyle; });
const mpStyle = {
  red: '#F84033',
  shadow: {
    1: '0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20)'
  }
};

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });