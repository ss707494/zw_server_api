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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/react-responsive-carousel/lib/styles/carousel.min.css":
/*!****************************************************************************!*\
  !*** ./node_modules/react-responsive-carousel/lib/styles/carousel.min.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var _utils_style_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/style/reset.css */ "./utils/style/reset.css");
/* harmony import */ var _utils_style_reset_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils_style_reset_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ "./node_modules/react-responsive-carousel/lib/styles/carousel.min.css");
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_style_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/style/theme */ "./utils/style/theme.ts");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_components_Message_Message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/components/Message/Message */ "./utils/components/Message/Message.tsx");
var _jsxFileName = "D:\\code\\zw\\zw_client_web\\pages\\_app.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








function MyApp({
  Component,
  pageProps
}) {
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    theme: _utils_style_theme__WEBPACK_IMPORTED_MODULE_4__["theme"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 10
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, "Market Payless")), __jsx(Component, _extends({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  })), __jsx(_utils_components_Message_Message__WEBPACK_IMPORTED_MODULE_6__["Message"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }));
}

/***/ }),

/***/ "./utils/ModelAction/modelUtil.ts":
/*!****************************************!*\
  !*** ./utils/ModelAction/modelUtil.ts ***!
  \****************************************/
/*! exports provided: baseActionOption, modelFactory, mergeModel, mergeTwoModel, mergeThreeModel, mergeListModel, initModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseActionOption", function() { return baseActionOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modelFactory", function() { return modelFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeModel", function() { return mergeModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeTwoModel", function() { return mergeTwoModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeThreeModel", function() { return mergeThreeModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeListModel", function() { return mergeListModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initModel", function() { return initModel; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const baseActionOption = {
  data: null,
  mutate: () => {},
  notice: () => {},
  query: () => {},
  setData: () => {},
  store: {}
};
const modelNameList = [];
const modelFactory = (name, state, actions) => {
  if (modelNameList.includes(name)) {
    throw Error(`model Name duplicate: ${name}`);
  }

  modelNameList.push(name);
  return {
    name,
    state: _objectSpread(_objectSpread({}, state), {}, {
      fetchLoad: {},
      fetchError: {}
    }),
    actions
  };
};
function mergeModel(model, name, state, actions) {
  Object.keys(model.state).forEach(value => {
    // @ts-ignore
    if ((state === null || state === void 0 ? void 0 : state[value]) && !['fetchError', 'fetchLoad'].includes(value)) {
      throw new Error(`mergeModel: state duplicate:: key ${value}`);
    }
  });
  Object.keys(model.actions).forEach(value => {
    // @ts-ignore
    if (actions === null || actions === void 0 ? void 0 : actions[value]) {
      throw new Error(`mergeModel: action duplicate:: key ${value}`);
    }
  });
  const mergeName = `${name}_with_${model.name}`;

  if (modelNameList.includes(mergeName)) {
    throw Error(`model Name duplicate: ${mergeName}`);
  }

  return {
    name: mergeName,
    state: _objectSpread(_objectSpread({}, model.state), state),
    actions: _objectSpread(_objectSpread({}, model.actions), actions)
  };
}
function mergeTwoModel(model, modelT) {
  Object.keys(model.state).forEach(value => {
    var _modelT$state;

    // @ts-ignore
    if (((_modelT$state = modelT.state) === null || _modelT$state === void 0 ? void 0 : _modelT$state[value]) && !['fetchError', 'fetchLoad'].includes(value)) {
      throw new Error(`mergeTwoModel: state duplicate:: key ${value}`);
    }
  });
  Object.keys(model.actions).forEach(value => {
    var _modelT$actions;

    // @ts-ignore
    if (modelT === null || modelT === void 0 ? void 0 : (_modelT$actions = modelT.actions) === null || _modelT$actions === void 0 ? void 0 : _modelT$actions[value]) {
      throw new Error(`mergeTwoModel: action duplicate:: key ${value}`);
    }
  });
  const mergeName = `${model.name}_and_${modelT.name}`;

  if (modelNameList.includes(mergeName)) {
    throw Error(`model Name duplicate: ${mergeName}`);
  }

  return {
    name: mergeName,
    state: _objectSpread(_objectSpread({}, model.state), modelT.state),
    actions: _objectSpread(_objectSpread({}, model.actions), modelT.actions)
  };
}
const mergeThreeModel = (modelA, modelB, modelC) => {
  return mergeTwoModel(mergeTwoModel(modelA, modelB), modelC);
};
const mergeListModel = modelList => {
  return modelList.slice(1).reduce((acc, model) => mergeTwoModel(acc, model), modelList[0]);
};
const initList = [];
const initModel = (model, initState) => {
  if (initList.includes(model.name)) return;
  initList.push(model.name);
  model.state = _objectSpread(_objectSpread({}, model.state), initState);
}; // const model = modelFactory({}, {
//   ss: {
//     eee: (value: string, option) => {
//     }
//   }
// })
//
// useStoreModel(ModuleEnum.Test, model).actions.ss.eee('')
// export function mergeIntoModel(originModel, name, innerModel) {
//
// }
// const _model = mergeTwoModel(modelFactory({
//   t1: ''
// }, {
// }), modelFactory({
//   t3: ''
// }, {
// }))
//
// mergeModel(_model, {
//   t2: ''
// }, {
// })

/***/ }),

/***/ "./utils/ModelAction/useStore.ts":
/*!***************************************!*\
  !*** ./utils/ModelAction/useStore.ts ***!
  \***************************************/
/*! exports provided: originStore, dealNameSpace, useStoreModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "originStore", function() { return originStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dealNameSpace", function() { return dealNameSpace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStoreModel", function() { return useStoreModel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../client */ "./utils/client/index.ts");
/* harmony import */ var _modelUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modelUtil */ "./utils/ModelAction/modelUtil.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const originStore = {};

const isFunction = functionToCheck => {
  return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
};

const dealNameSpace = (key, nameSpace) => {
  if (nameSpace) {
    return `${key}_${nameSpace}`;
  }

  return `${key}`;
};
const useStoreModel = (model, key) => {
  var _model$name;

  const _key = (_model$name = model.name) !== null && _model$name !== void 0 ? _model$name : !key ? '' : Array.isArray(key) ? dealNameSpace(key[0], key[1]) : key;

  const {
    actions,
    state
  } = model;
  const {
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(Object.create(null));

  if (!_key) {
    throw Error('no key');
  }

  if (!originStore[_key]) {
    originStore[_key] = {
      keys: _key,
      state,
      actions: {},
      setData: []
    };
  }

  const notice = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(data => {
    originStore[_key].setData.forEach(value => {
      value === null || value === void 0 ? void 0 : value(data);
    });
  }, [_key]);
  const setData = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(data => {
    const oldState = originStore[_key].state;
    const newData = isFunction(data) ? data(oldState) : data;
    originStore[_key].state = newData;
    notice(newData);
  }, [_key, notice]);
  const setLoad = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((query, flag) => {
    setData(prevState => {
      var _prevState$fetchLoad, _query$loc, _query$loc$source;

      return _objectSpread(_objectSpread({}, prevState), {}, {
        fetchLoad: _objectSpread(_objectSpread({}, (_prevState$fetchLoad = prevState.fetchLoad) !== null && _prevState$fetchLoad !== void 0 ? _prevState$fetchLoad : {}), {}, {
          [query === null || query === void 0 ? void 0 : (_query$loc = query.loc) === null || _query$loc === void 0 ? void 0 : (_query$loc$source = _query$loc.source) === null || _query$loc$source === void 0 ? void 0 : _query$loc$source.body]: flag
        })
      });
    });
  }, [setData]);
  const setError = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((query, err) => {
    setData(prevState => {
      var _prevState$fetchError, _query$loc2, _query$loc2$source;

      return _objectSpread(_objectSpread({}, prevState), {}, {
        fetchError: _objectSpread(_objectSpread({}, (_prevState$fetchError = prevState.fetchError) !== null && _prevState$fetchError !== void 0 ? _prevState$fetchError : {}), {}, {
          [query === null || query === void 0 ? void 0 : (_query$loc2 = query.loc) === null || _query$loc2 === void 0 ? void 0 : (_query$loc2$source = _query$loc2.source) === null || _query$loc2$source === void 0 ? void 0 : _query$loc2$source.body]: err
        })
      });
    });
  }, [setData]);
  const query = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async (query, params, option) => {
    setLoad(query, true);
    const res = await Object(_client__WEBPACK_IMPORTED_MODULE_1__["graphQLQuery"])()(query, params, option).catch(e => {
      setError(query, e);
    }).finally(() => {
      setLoad(query, false);
    });
    return res === null || res === void 0 ? void 0 : res.data;
  }, [setError, setLoad]);
  const mutate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async (mutation, params, option) => {
    setLoad(mutation, true);
    const res = await Object(_client__WEBPACK_IMPORTED_MODULE_1__["graphQLMutate"])()(mutation, params, option).catch(e => {
      setError(mutation, e);
    }).finally(() => {
      setLoad(mutation, false);
    });
    return res === null || res === void 0 ? void 0 : res.data;
  }, [setError, setLoad]);

  if (Object.keys(originStore[_key].actions).length === 0 && originStore[_key].actions.constructor === Object) {
    Object.keys(actions).forEach(value => {
      originStore[_key].actions[value] = v => actions[value](v, _objectSpread(_objectSpread({}, _modelUtil__WEBPACK_IMPORTED_MODULE_2__["baseActionOption"]), {}, {
        data: originStore[_key].state,
        notice,
        setData,
        query,
        mutate,
        store: originStore
      }));
    });
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    Object.keys(actions).forEach(value => {
      originStore[_key].actions[value] = v => actions[value](v, _objectSpread(_objectSpread({}, _modelUtil__WEBPACK_IMPORTED_MODULE_2__["baseActionOption"]), {}, {
        data: originStore[_key].state,
        notice,
        setData,
        query,
        mutate,
        store: originStore
      }));
    });
  }, [_key, actions, mutate, notice, query, setData]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    var _originStore$_key$set;

    originStore[_key].setData = [...((_originStore$_key$set = originStore[_key].setData) !== null && _originStore$_key$set !== void 0 ? _originStore$_key$set : []), setState];
    return () => {
      originStore[_key].setData = originStore[_key].setData.filter(value => value !== setState);
    };
  }, [_key]);
  return {
    state: originStore[_key].state,
    actions: originStore[_key].actions,
    store: originStore,
    getLoad: query => {
      var _query$loc3, _query$loc3$source;

      return originStore[_key].state.fetchLoad[query === null || query === void 0 ? void 0 : (_query$loc3 = query.loc) === null || _query$loc3 === void 0 ? void 0 : (_query$loc3$source = _query$loc3.source) === null || _query$loc3$source === void 0 ? void 0 : _query$loc3$source.body] ? 1 : 0;
    }
  };
};

/***/ }),

/***/ "./utils/client/index.ts":
/*!*******************************!*\
  !*** ./utils/client/index.ts ***!
  \*******************************/
/*! exports provided: getClient, graphQLQuery, graphQLMutate, serverQuery, serverMutate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClient", function() { return getClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphQLQuery", function() { return graphQLQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphQLMutate", function() { return graphQLMutate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serverQuery", function() { return serverQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serverMutate", function() { return serverMutate; });
/* harmony import */ var cross_fetch_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cross-fetch/polyfill */ "cross-fetch/polyfill");
/* harmony import */ var cross_fetch_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cross_fetch_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tools_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tools/token */ "./utils/tools/token.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tools_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tools/global */ "./utils/tools/global.ts");
/* harmony import */ var _graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../graphqlTypes/doc */ "./utils/graphqlTypes/doc/index.ts");
/* harmony import */ var _components_Message_Message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Message/Message */ "./utils/components/Message/Message.tsx");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/config */ "next/config");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_7__);
var _config$publicRuntime, _config$publicRuntime2;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const config = next_config__WEBPACK_IMPORTED_MODULE_7___default()();
const client_api_uri = (_config$publicRuntime = config === null || config === void 0 ? void 0 : (_config$publicRuntime2 = config.publicRuntimeConfig) === null || _config$publicRuntime2 === void 0 ? void 0 : _config$publicRuntime2.client_api_uri) !== null && _config$publicRuntime !== void 0 ? _config$publicRuntime : 'http://localhost:4464/type__graphql/api';

const omitTypename = (key, value) => {
  return key === '__typename' ? undefined : value;
};

const getClient = () => {
  const request = operation => {
    if (operation.variables) {
      operation.variables = JSON.parse(JSON.stringify(operation.variables), omitTypename);
    }

    operation.setContext(({
      headers = {}
    }) => ({
      headers: _objectSpread(_objectSpread({}, headers), {}, {
        // 后台万能权限
        Authorization: Object(_tools_token__WEBPACK_IMPORTED_MODULE_1__["getToken"])()
      })
    }));
  };

  const refreshToken = () => {
    graphQLQuery()(_graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_5__["doc"].refreshToken, {
      data: Object(_tools_token__WEBPACK_IMPORTED_MODULE_1__["getToken"])('refreshtoken')
    }).then(res => {
      var _res$data, _res$data$refreshToke;

      if ((_res$data = res.data) === null || _res$data === void 0 ? void 0 : (_res$data$refreshToke = _res$data.refreshToken) === null || _res$data$refreshToke === void 0 ? void 0 : _res$data$refreshToke.token) {
        var _res$data2, _res$data2$refreshTok, _res$data3, _res$data3$refreshTok;

        Object(_tools_token__WEBPACK_IMPORTED_MODULE_1__["setToken"])((_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : (_res$data2$refreshTok = _res$data2.refreshToken) === null || _res$data2$refreshTok === void 0 ? void 0 : _res$data2$refreshTok.token);
        Object(_tools_token__WEBPACK_IMPORTED_MODULE_1__["setToken"])((_res$data3 = res.data) === null || _res$data3 === void 0 ? void 0 : (_res$data3$refreshTok = _res$data3.refreshToken) === null || _res$data3$refreshTok === void 0 ? void 0 : _res$data3$refreshTok.refreshtoken, 'refreshtoken');
        Object(_components_Message_Message__WEBPACK_IMPORTED_MODULE_6__["showMessage"])({
          message: '登录超时,刷新登录信息'
        });
        next_router__WEBPACK_IMPORTED_MODULE_2___default.a.reload();
      } else {
        Object(_components_Message_Message__WEBPACK_IMPORTED_MODULE_6__["showMessage"])({
          message: '请重新登录'
        });
        next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/login');
      }
    }).catch(err => {
      Object(_tools_global__WEBPACK_IMPORTED_MODULE_4__["ssLog"])(err);
      Object(_components_Message_Message__WEBPACK_IMPORTED_MODULE_6__["showMessage"])({
        message: '请重新登录'
      });
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/login');
    });
  };

  const onError = ({
    response,
    operation,
    graphQLErrors,
    networkError
  }) => {
    // console.log(response)
    // console.log(operation)
    if (graphQLErrors) {
      graphQLErrors.forEach(({
        message,
        locations,
        path,
        extensions
      }) => {
        Object(_tools_global__WEBPACK_IMPORTED_MODULE_4__["ssLog"])(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);

        if ((extensions === null || extensions === void 0 ? void 0 : extensions.code) === 'UNAUTHENTICATED') {
          if (message.includes('first')) {
            refreshToken();
          } else {
            Object(_components_Message_Message__WEBPACK_IMPORTED_MODULE_6__["showMessage"])({
              message: '请重新登录'
            });
            next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/login');
          }
        }

        if (message.includes('Unexpected error')) {
          Object(_components_Message_Message__WEBPACK_IMPORTED_MODULE_6__["showMessage"])({
            message: message.split('"')[1],
            msg_type: 'error'
          });
        } else {
          Object(_components_Message_Message__WEBPACK_IMPORTED_MODULE_6__["showMessage"])({
            message
          });
        }
      });
    }

    if (networkError) {
      var _networkError$result;

      const errMsg = 'bodyText' in networkError ? networkError === null || networkError === void 0 ? void 0 : networkError.bodyText : 'result' in networkError ? networkError === null || networkError === void 0 ? void 0 : (_networkError$result = networkError.result) === null || _networkError$result === void 0 ? void 0 : _networkError$result.error : '';
      Object(_tools_global__WEBPACK_IMPORTED_MODULE_4__["ssLog"])(`[Network error]: ${errMsg}`);

      if ('statusCode' in networkError && (networkError === null || networkError === void 0 ? void 0 : networkError.statusCode) === 401) {
        if (errMsg.includes('first') && Object(_tools_token__WEBPACK_IMPORTED_MODULE_1__["getToken"])('refreshtoken')) {
          refreshToken();
        } else {
          Object(_components_Message_Message__WEBPACK_IMPORTED_MODULE_6__["showMessage"])({
            message: '请重新登录'
          });
          next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/login');
        }
      }
    }
  };

  return new apollo_boost__WEBPACK_IMPORTED_MODULE_3___default.a({
    // link: httpLink,
    uri: client_api_uri,
    request,
    onError
  });
};
const defaultClient = getClient(); // const dealParams = ((params: any) => ({
//   data: params,
// }))

const dealParams = params => params;

const graphQLQuery = (client = defaultClient) => async (query, params, option) => {
  var _option$dealParamsIn;

  const _dealParamsIn = (_option$dealParamsIn = option === null || option === void 0 ? void 0 : option.dealParamsIn) !== null && _option$dealParamsIn !== void 0 ? _option$dealParamsIn : dealParams;

  return client.query(_objectSpread({
    fetchPolicy: 'network-only',
    query,
    variables: _objectSpread({}, _dealParamsIn ? _dealParamsIn(params) : params)
  }, option));
};
const graphQLMutate = (client = defaultClient) => async (mutation, params, option) => {
  var _option$dealParamsIn2;

  const _dealParamsIn = (_option$dealParamsIn2 = option === null || option === void 0 ? void 0 : option.dealParamsIn) !== null && _option$dealParamsIn2 !== void 0 ? _option$dealParamsIn2 : dealParams;

  return client.mutate(_objectSpread({
    mutation,
    variables: _objectSpread({}, _dealParamsIn ? _dealParamsIn(params) : params)
  }, option));
};

const serverClient = () => new apollo_boost__WEBPACK_IMPORTED_MODULE_3___default.a({
  // link: httpLink,
  uri: client_api_uri
});

const serverQuery = async (query, params, option) => {
  var _await$graphQLQuery;

  return (_await$graphQLQuery = await graphQLQuery(serverClient())(query, params, option)) === null || _await$graphQLQuery === void 0 ? void 0 : _await$graphQLQuery.data;
};
const serverMutate = async (mutation, params, option) => {
  var _await$graphQLMutate;

  return (_await$graphQLMutate = await graphQLMutate(serverClient())(mutation, params, option)) === null || _await$graphQLMutate === void 0 ? void 0 : _await$graphQLMutate.data;
};

/***/ }),

/***/ "./utils/components/Message/Message.tsx":
/*!**********************************************!*\
  !*** ./utils/components/Message/Message.tsx ***!
  \**********************************************/
/*! exports provided: Message, showMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showMessage", function() { return showMessage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/colors */ "@material-ui/core/colors");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ModelAction/useStore */ "./utils/ModelAction/useStore.ts");
/* harmony import */ var _tools_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../tools/utils */ "./utils/tools/utils.ts");
/* harmony import */ var _ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ModelAction/modelUtil */ "./utils/ModelAction/modelUtil.ts");
/* harmony import */ var _tools_dealKey__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../tools/dealKey */ "./utils/tools/dealKey.ts");
var _jsxFileName = "D:\\code\\zw\\zw_client_web\\utils\\components\\Message\\Message.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const typeHelp = {
  default: `background: ${_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_3__["grey"][700]};`,
  success: `background: ${_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_3__["green"][600]};`,
  warning: `background: ${_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_3__["amber"][700]};`,
  info: `background: ${_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_3__["blue"][700]};`,
  error: `background: ${_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_3__["red"][700]};`
};

const getType = (type = 'default') => typeHelp[type];

const CusSnackbar = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Snackbar"]).withConfig({
  displayName: "Message__CusSnackbar",
  componentId: "om26s-0"
})(["&&& > div{color:", ";", "}"], _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_3__["common"].white, ({
  msg_type
}) => getType(msg_type));
const messageModel = Object(_ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_6__["modelFactory"])('messageModel', {
  open: false,
  message: '',
  autoHideDuration: 2000,
  msg_type: 'default'
}, {
  open: (value, option) => {
    if (typeof value === 'string') {
      option.setData(Object(_tools_utils__WEBPACK_IMPORTED_MODULE_5__["fpMergePre"])({
        autoHideDuration: 2000,
        msg_type: 'default',
        message: value,
        open: true
      }));
    } else {
      option.setData(Object(_tools_utils__WEBPACK_IMPORTED_MODULE_5__["fpMergePre"])(_objectSpread(_objectSpread({
        autoHideDuration: 2000,
        msg_type: 'default'
      }, value), {}, {
        open: true
      })));
    }
  },
  onClose: (value, option) => option.setData(Object(_tools_utils__WEBPACK_IMPORTED_MODULE_5__["fpMergePre"])({
    open: false
  }))
});
const Message = () => {
  const {
    state: mState,
    actions
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_4__["useStoreModel"])(messageModel);
  return __jsx(CusSnackbar, {
    open: mState.open,
    autoHideDuration: mState.autoHideDuration,
    message: Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_7__["ls"])(mState.message),
    msg_type: mState.msg_type,
    onClose: () => actions.onClose(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 10
    }
  });
};
const showMessage = option => {
  _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_4__["originStore"]['messageModel'].actions.open(option);
  return;
};

/***/ }),

/***/ "./utils/graphqlTypes/doc/fragment.ts":
/*!********************************************!*\
  !*** ./utils/graphqlTypes/doc/fragment.ts ***!
  \********************************************/
/*! exports provided: fragment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fragment", function() { return fragment; });
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_0__);

const fragment = {
  CategoryFields: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
      fragment Category on Category {
          id
          name
          createTime
          updateTime
          isDelete
          isEnable
          remark
          sort
          parentId
          fullParentId
          number
          userId
          imgUrl
      }
  `,
  UserFields: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
      fragment UserFields on User {
          id
          name
          createTime
          updateTime
          isDelete
          password
          type
      }
  `,
  UserInfoFields: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
      fragment UserInfoFields on UserInfo {
          id
          name
          createTime
          updateTime
          isDelete
          userId
          phone
          email
          userLevel
          pickupAddressId
      }
  `,
  OrderInfoFields: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
      fragment OrderInfoFields on OrderInfo {
          id
          name
          createTime
          updateTime
          isDelete
          number
          state
          actuallyPaid
          addressId
          paymentMethodCardId
          subtotal
          couponDiscount
          vipDiscount
          transportationCosts
          saleTax
          orderId
          discountProductTotal
          finishTime
          pickUpTime
          pickUpType
          generateCoin
          deductCoin
          selfAddressId
          currentUserLevel
      }
  `,
  ROrderProductFields: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
      fragment ROrderProductFields on ROrderProduct {
          count
          createTime
          dealPrice
          id
          isDelete
          name
          orderId
          productId
          updateTime
      }
  `,
  ProductFields: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
      fragment ProductFields on Product {
          brand
          categoryId
          createTime
          groupAmount
          groupAmountUnit
          groupPrecision
          groupRemark
          id
          isDelete
          isEnable
          isGroup
          isHot
          isNew
          name
          number
          packingUnit
          priceIn
          priceMarket
          priceOut
          remark
          shelvesTypes
          sort
          stock
          unit
          updateTime
          weight
          unitString
          groupPrecisionString
          groupAmountUnitString
          packingUnitString
      }
  `,
  ImgFields: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    fragment ImgFields on ProductImg {
        createTime
        id
        isDelete
        name
        number
        productId
        updateTime
        url
    } 
  `,
  UserAddressFields: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
      fragment UserAddressFields on UserAddress {
          address
          city
          combineAddress
          contactInformation
          contactUserName
          createTime
          district
          id
          isDefault
          isDelete
          name
          province
          updateTime
          userId
          zip
      }
  `,
  UserPayCardFields: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
      fragment UserPayCardFields on UserPayCard {
          addressDetail
          city
          code
          contact
          createTime
          expirationTime
          id
          isDefault
          isDelete
          name
          number
          updateTime
          userId
          userName
          zipCode
      }
  `,
  ShopCartFields: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
      fragment ShopCartFields on ShopCart {
          createTime
          id
          isDelete
          isNext
          name
          number
          productId
          updateTime
          userId
      }
  `,
  DataConfigFields: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    fragment DataConfigFields on DataConfig {
        createTime
        id
        isDelete
        name
        remark
        type
        updateTime
        value
    }
  `,
  DictFields: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    fragment DictFields on Dict {
        code
        createTime
        dictTypeCode
        id
        isDelete
        isDisable
        name
        remark
        sort
        updateTime
    }
  `,
  GroupQueueFields: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
      fragment GroupQueueFields on GroupQueue {
          createTime
          fillAmount
          id
          isDelete
          name
          productId
          updateTime
          sumFillAmount
      }
  `,
  GroupOrderFields: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
      fragment GroupOrderFields on GroupOrder {
          createTime
          groupQueueId
          id
          isDelete
          name
          orderGroupAmount
          orderId
          updateTime
          userId
      }
  `,
  PromoCodeFields: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
      fragment PromoCodeFields on PromoCode {
          code
          createTime
          discountAmount
          discountCondition
          discountConditionAmount
          discountType
          effectiveDateEnd
          effectiveDateStart
          id
          imgUrl
          isDelete
          isDisable
          name
          productCategory
          promoCodeType
          remark
          reuseTimes
          title
          updateTime
      }
  `
};

/***/ }),

/***/ "./utils/graphqlTypes/doc/index.ts":
/*!*****************************************!*\
  !*** ./utils/graphqlTypes/doc/index.ts ***!
  \*****************************************/
/*! exports provided: getUserListDoc, getDataConfig, homeCarouselImgs, categoryList, doc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserListDoc", function() { return getUserListDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataConfig", function() { return getDataConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homeCarouselImgs", function() { return homeCarouselImgs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categoryList", function() { return categoryList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doc", function() { return doc; });
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fragment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fragment */ "./utils/graphqlTypes/doc/fragment.ts");
/* harmony import */ var _ss_common_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ss_common/enum */ "./utils/ss_common/enum.ts");



const getUserListDoc = apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  query refactored643($data: UserListInput!) {
    userList(userListInput: $data) {
      list {
        orderCoinNextMonth
        orderCoinCurrentMonth
        orderAmountCurrentYear
        ...userInfo
        ...UserFields
        ...orderInfo
      }
      total
    }
  }
  fragment orderInfo on User{
    orderInfo{
      id
      name
      createTime
      updateTime
      isDelete
      number
      state
      actuallyPaid
      addressId
      paymentMethodCardId
      subtotal
      couponDiscount
      vipDiscount
      transportationCosts
      saleTax
      orderId
      discountProductTotal
      finishTime
      pickUpTime
      pickUpType
    }
  }
  fragment UserFields on User {
    id
    name
    createTime
    updateTime
    isDelete
    password
    type
  }
  fragment userInfo on User{
    userInfo{
      id
      name
      createTime
      updateTime
      isDelete
      userId
      phone
      email
      userLevel
    }
  }
`;
const getDataConfig = apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  query ($data: DataConfigItemInput) {
    getDataConfig(dataConfigInput: $data) {
      id
      name
      createTime
      updateTime
      isDelete
      type
      value
      remark
    }
  }
`;
const homeCarouselImgs = apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  query query_query_testLong137($data: DataConfigItemInput) {
    homeCarouselImgs(dataConfigInput: $data) {
      id
      name
      createTime
      updateTime
      isDelete
      type
      value
      remark
    }
  }
`;
const categoryList = apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  query query_query_testLong565($data: CategoryListInput) {
    categoryList(data: $data) {
      total
      list {
        ...Category
      }
    }
  }
  ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].CategoryFields}
`;
const doc = {
  getUserListDoc,
  categoryList,
  getDataConfig,
  homeCarouselImgs,
  registerUser: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation mutation_registerUse998($data: UserItemInput) {
      registerUser(data: $data) {
        token
        refreshtoken
        user {
          id
          name
          createTime
          updateTime
          isDelete
          password
          type
          userInfo {
            name
          }
        }
      }
    }
  `,
  refreshToken: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    query refreshToken($data: String!) {
      refreshToken(refreshtoken: $data) {
        refreshtoken
        token
      }
    }
  `,
  login: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    query login($data: UserItemInput) {
      login(user: $data) {
        token
        refreshtoken
      }
    }
  `,
  oneUser: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    query oneUser {
      oneUser {
        ...UserFields
        userInfo {
          ...UserInfoFields
        }
      }
    }
    ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].UserInfoFields}
    ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].UserFields}
  `,
  orderList: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    query orderList($data: OrderInput){
      orderList (orderInput: $data, fromUser: true) {
        list {
          ...OrderInfoFields
          rOrderProduct {
            ...ROrderProductFields
            product {
              ...ProductFields
              img {
                ...ImgFields
              }
            }
          }
        }
      }
    }
    ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].OrderInfoFields}
    ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].ROrderProductFields}
    ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].ProductFields}
    ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].ImgFields}
  `,
  orderDetail: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    query ($id: String) {
      selfAddress: getDataConfig(dataConfigInput: {
        type: "${_ss_common_enum__WEBPACK_IMPORTED_MODULE_2__["DictTypeEnum"].SelfAddress}"
      }) {
        ...DataConfigFields
      }
      orderDetail(id: $id) {
        ...OrderInfoFields
        rOrderProduct {
          ...ROrderProductFields
          product {
            ...ProductFields
            img {
              ...ImgFields
            }
          }
        }
        user {
          ...UserFields
          userInfo {
            ...UserInfoFields
          }
        }
        userAddress {
          ...UserAddressFields
        }
        userPayCard {
          ...UserPayCardFields
        }
      }
    }
    ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].DataConfigFields}
    ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].OrderInfoFields}
    ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].ROrderProductFields}
    ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].ProductFields}
    ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].ImgFields}
    ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].UserFields}
    ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].UserInfoFields}
    ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].UserPayCardFields}
    ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].UserAddressFields}
  `,
  updatePassword: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation ($data: UpdatePasswordInput) {
      updatePassword (data: $data) {
        user {
          ...UserFields
        }
        authBody {
          token
          refreshtoken
        }
      }
    }
    ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].UserFields}
  `,
  payCardListOneUser: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    query {
      payCardListOneUser {
        ...UserPayCardFields
      }
    }
    ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].UserPayCardFields}
  `,
  userPayCard: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    query ($data: UserPayCardItemInput) {
      userPayCard (userPayCard: $data) {
        ...UserPayCardFields
      }
    }
    ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].UserPayCardFields}
  `,
  saveUserPayCard: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation ($data: UserPayCardItemInput){
      saveUserPayCard (userPayCard: $data) {
        ...UserPayCardFields
      }
    }
    ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].UserPayCardFields}
  `,
  setUserPayCardDefault: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation ($data: UserPayCardItemInput) {
      setUserPayCardDefault (userPayCard: $data) {
        ...UserPayCardFields
      }
    }
    ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].UserPayCardFields}
  `,
  pickupAddress: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    query {
      getDataConfig(dataConfigInput: {
        type: "${_ss_common_enum__WEBPACK_IMPORTED_MODULE_2__["DictTypeEnum"].SelfAddress}"
      }) {
        ...DataConfigFields
      }
      oneUser {
        ...UserFields
        userInfo {
          ...UserInfoFields
        }
      }
    }
    ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].UserInfoFields}
    ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].DataConfigFields}
    ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].UserFields}
  `,
  updateUserInfo: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation ($userInfo: UserInfoItemInput) {
      updateUserInfo (userInfo: $userInfo) {
        ...UserInfoFields
      }
    }
    ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].UserInfoFields}
  `,
  userAddressListOneUser: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    query {
      userAddressListOneUser {
        ...UserAddressFields
      }
    }
    ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].UserAddressFields}
  `,
  userAddress: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    query ($data: UserAddressItemInput) {
      userAddress (userAddress: $data) {
        ...UserAddressFields
      }
    }
    ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].UserAddressFields}
  `,
  saveUserAddress: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation ($data: UserAddressItemInput){
      saveUserAddress (userAddress: $data) {
        ...UserAddressFields
      }
    }
    ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].UserAddressFields}
  `,
  setUserAddressDefault: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation ($data: UserAddressItemInput) {
      setUserAddressDefault (userAddress: $data) {
        ...UserAddressFields
      }
    }
    ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].UserAddressFields}
  `,
  productsInCategory: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    query ($data: CategoryItemInput, $productItemInput: ProductItemInput) {
      productsInCategory(categoryItemInput: $data, productItemInput: $productItemInput) {
        ...ProductFields
        img {
          ...ImgFields
        }
      }
      categoryList(data: {
        category: {
          parentCategory: $data
        }
      }) {
        total
        list {
          ...Category
        }
      }
    }
    ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].ProductFields}
    ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].ImgFields}
    ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].CategoryFields}
  `,
  categoryLevel: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    query ($data: CategoryItemInput) {
      categoryLevel(categoryItemInput: $data)
    }
  `,
  oneCategory: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    query ($data: CategoryItemInput) {
      oneCategory(data: $data) {
        ...Category
        parentCategory {
          ...Category
          parentCategory {
            ...Category
          }
        }
      }
    }
    ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].CategoryFields}
  `,
  productList: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    query ($productInput: ProductItemInput, $orderByInput: OrderByInput) {
      productList(productInput: $productInput, orderByInput: $orderByInput) {
        total
        list {
          ...ProductFields
          img {
            ...ImgFields
          }
        }
      }
    }
    ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].ProductFields}
    ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].ImgFields}
  `,
  updateNumShopCart: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation ($shopCart: ShopCartItemInput, $updateNum: Float) {
      updateNumShopCart (shopCart: $shopCart, updateNum: $updateNum) {
        id
        number
        product {
          ...ProductFields
        }
        user {
          ...UserFields
        }
      }
    }
    ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].ProductFields}
    ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].UserFields}
  `,
  userShopCartList: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    query {
      shopCartList {
        ...ShopCartFields
        product {
          ...ProductFields
          category {
            id
            parentCategory {
              id
              parentCategory {
                id
              }
            }
          }
          img {
            ...ImgFields
          }
        }
      }
    }
    ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].ShopCartFields}
    ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].ProductFields}
    ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].ImgFields}
  `,
  updateShopCart: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation ($shopCart: ShopCartItemInput){
      updateShopCart (shopCart: $shopCart) {
        ...ShopCartFields
      }
    }
    ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].ShopCartFields}
  `,
  orderConfirmInfo: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    query {
      getDataConfig(dataConfigInput: {
        type: "${_ss_common_enum__WEBPACK_IMPORTED_MODULE_2__["DictTypeEnum"].SelfAddress}"
      }) {
        ...DataConfigFields
      }
      oneUser {
        ...UserFields
        userInfo {
          ...UserInfoFields
        }
      }
      payCardListOneUser {
        ...UserPayCardFields
      }
      userAddressListOneUser {
        ...UserAddressFields
      }
      freightConfig: getDataConfig (dataConfigInput: {
        type: "${_ss_common_enum__WEBPACK_IMPORTED_MODULE_2__["DictTypeEnum"].Freight}"
      }) {
        ...DataConfigFields
      }
      userLevelList: getDictList (dictInput: {
        dictTypeCode: "UserLevel"
      }) {
        ...DictFields
      }
    }
    ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].UserAddressFields}
    ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].UserPayCardFields}
    ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].UserInfoFields}
    ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].UserFields}
    ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].DataConfigFields}
    ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].DictFields}
  `,
  saveOrder: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation ($orderInfoItemInput: OrderInfoItemInput) {
      saveOrder (orderInfoItemInput: $orderInfoItemInput) {
        ...OrderInfoFields
      }
    }
    ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].OrderInfoFields}
  `,
  dictList: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    query ($data: DictInput) {
      getDictList (dictInput: $data) {
        ...DictFields
      }
    }
    ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].DictFields}
  `,
  limitTimeData: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    query {
      limitTimeData: getDataConfig (dataConfigInput: {
        type: "${_ss_common_enum__WEBPACK_IMPORTED_MODULE_2__["DictTypeEnum"].PromotionFlashSale}"
      }) {
        ...DataConfigFields
      }
    }
    ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].DataConfigFields}
  `,
  productListByIds: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    query ($ids: [String]) {
      productListByIds (ids: $ids) {
        total
        list {
          ...ProductFields
          img {
            ...ImgFields
          }
        }
      }
    }
    ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].ProductFields}
    ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].ImgFields}
  `,
  groupQueueList: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    query ($groupQueueItemInput: GroupQueueItemInput) {
      groupQueueList (groupQueueItemInput: $groupQueueItemInput) {
        ...GroupQueueFields
        product {
          ...ProductFields
          img {
            ...ImgFields
          }
        }
        groupOrder {
          ...GroupOrderFields
        }
      }
    }
    ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].GroupQueueFields}
    ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].ProductFields}
    ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].ImgFields}
    ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].GroupOrderFields}
  `,
  updateOrder: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation ($orderInfoItemInput: OrderInfoItemInput) {
      updateOrder (orderInfoItemInput: $orderInfoItemInput) {
        ...OrderInfoFields
      }
    }
    ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].OrderInfoFields}
  `,
  saveGroupOrder: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation ($orderInfoItemInput: OrderInfoItemInput, $groupOrderItemInput: GroupOrderItemInput, $groupQueueItemInput: GroupQueueItemInput) {
      saveGroupOrder (orderInfoItemInput: $orderInfoItemInput, groupOrderItemInput: $groupOrderItemInput, groupQueueItemInput: $groupQueueItemInput) {
        ...OrderInfoFields
      }
    }
    ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].OrderInfoFields}
  `,
  promoCodeList: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    query ($promoCodeItemInput: PromoCodeItemInput) {
      promoCodeList (promoCodeItemInput: $promoCodeItemInput) {
        ...PromoCodeFields
      }
    }
    ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].PromoCodeFields}
  `,
  categoryRootParent: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    query ($categoryItemInput: CategoryItemInput) {
      categoryRootParent (categoryItemInput: $categoryItemInput) {
        ...Category
        parentCategory {
          ...Category
          parentCategory {
            ...Category
          }
        }
      }
    }
    ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].CategoryFields}
  `,
  productListOrderByOrder: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
      query ($orderByType: String, $productInput: ProductItemInput) {
        productListOrderByOrder (orderByType: $orderByType, productInput: $productInput) {
          list {
            rOrderProduct {
              ...ROrderProductFields
            }
            ...ProductFields
            img {
              ...ImgFields
            }
          }
          total
        }
      }
      ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].ProductFields}
      ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].ImgFields}
      ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].ROrderProductFields}
  `
};

/***/ }),

/***/ "./utils/ss_common/enum.ts":
/*!*********************************!*\
  !*** ./utils/ss_common/enum.ts ***!
  \*********************************/
/*! exports provided: PromoCodeTypeEnum, DiscountTypeEnum, SS, DiscountConditionEnum, ProductSupplement, ProductSupplementString, OrderState, orderStateToString, DictTypeEnum, RelatedObjTypeEnum, AppFootBar, AppModuleTypeEnum, CategoryRootName, orderStateKeys, ProvinceData, getPickUpTypeName, PickUpTypeEnum, SaleRankTypeEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromoCodeTypeEnum", function() { return PromoCodeTypeEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscountTypeEnum", function() { return DiscountTypeEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SS", function() { return SS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscountConditionEnum", function() { return DiscountConditionEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductSupplement", function() { return ProductSupplement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductSupplementString", function() { return ProductSupplementString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderState", function() { return OrderState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderStateToString", function() { return orderStateToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DictTypeEnum", function() { return DictTypeEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatedObjTypeEnum", function() { return RelatedObjTypeEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppFootBar", function() { return AppFootBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModuleTypeEnum", function() { return AppModuleTypeEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryRootName", function() { return CategoryRootName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderStateKeys", function() { return orderStateKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvinceData", function() { return ProvinceData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPickUpTypeName", function() { return getPickUpTypeName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickUpTypeEnum", function() { return PickUpTypeEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleRankTypeEnum", function() { return SaleRankTypeEnum; });
let PromoCodeTypeEnum;

(function (PromoCodeTypeEnum) {
  PromoCodeTypeEnum["DarenCard"] = "DarenCard";
  PromoCodeTypeEnum["PromoCode"] = "PromoCode";
})(PromoCodeTypeEnum || (PromoCodeTypeEnum = {}));

let DiscountTypeEnum;

(function (DiscountTypeEnum) {
  DiscountTypeEnum["Percentage"] = "Percentage";
  DiscountTypeEnum["Amount"] = "Amount";
})(DiscountTypeEnum || (DiscountTypeEnum = {}));

let SS;

(function (SS) {
  SS[SS["SS"] = 0] = "SS";
  SS[SS["SS2"] = 1] = "SS2";
})(SS || (SS = {}));

let DiscountConditionEnum;

(function (DiscountConditionEnum) {
  DiscountConditionEnum["No"] = "No";
  DiscountConditionEnum["Amount"] = "Amount";
})(DiscountConditionEnum || (DiscountConditionEnum = {}));

let ProductSupplement;

(function (ProductSupplement) {
  ProductSupplement[ProductSupplement["_"] = 0] = "_";
  ProductSupplement[ProductSupplement["Pending"] = 1] = "Pending";
  ProductSupplement[ProductSupplement["Finish"] = 2] = "Finish";
})(ProductSupplement || (ProductSupplement = {}));

const ProductSupplementString = {
  1: '配货中',
  2: '已完成'
};
let OrderState; // 1:代付款 2:已付款 3:已发货 4:已收货 5:已取消 6:已完成 7:已退回

(function (OrderState) {
  OrderState[OrderState["Ordered"] = 1] = "Ordered";
  OrderState[OrderState["Paid"] = 2] = "Paid";
  OrderState[OrderState["Picking"] = 3] = "Picking";
  OrderState[OrderState["PickedUp"] = 4] = "PickedUp";
  OrderState[OrderState["Finish"] = 5] = "Finish";
  OrderState[OrderState["Cancel"] = 6] = "Cancel";
})(OrderState || (OrderState = {}));

const _s = {
  1: '待付款',
  2: '已付款',
  3: '已发货',
  4: '已收货',
  5: '已取消',
  6: '已完成',
  7: '已退回'
};
const orderStateToString = (s = 0) => {
  var _s2;

  return (_s2 = _s === null || _s === void 0 ? void 0 : _s[s !== null && s !== void 0 ? s : 0]) !== null && _s2 !== void 0 ? _s2 : '';
}; // 配置管理

let DictTypeEnum; // 轮播图关联项

(function (DictTypeEnum) {
  DictTypeEnum["GroupPrecision"] = "GroupPrecision";
  DictTypeEnum["UserLevel"] = "UserLevel";
  DictTypeEnum["Freight"] = "Freight";
  DictTypeEnum["HelpDocumentationType"] = "HelpDocumentationType";
  DictTypeEnum["HelpDocumentation"] = "HelpDocumentation";
  DictTypeEnum["PromotionThemeSelect"] = "PromotionThemeSelect";
  DictTypeEnum["PromotionFlashSale"] = "PromotionFlashSale";
  DictTypeEnum["HomeCarousel"] = "HomeCarousel";
  DictTypeEnum["OrderState"] = "OrderState";
  DictTypeEnum["SelfAddress"] = "SelfAddress";
  DictTypeEnum["AppModule"] = "AppModule";
})(DictTypeEnum || (DictTypeEnum = {}));

let RelatedObjTypeEnum;

(function (RelatedObjTypeEnum) {
  RelatedObjTypeEnum["PromoCode"] = "PromoCode";
  RelatedObjTypeEnum["PromotionFlashSale"] = "PromotionFlashSale";
  RelatedObjTypeEnum["PromotionThemeSelect"] = "PromotionThemeSelect";
})(RelatedObjTypeEnum || (RelatedObjTypeEnum = {}));

let AppFootBar;

(function (AppFootBar) {
  AppFootBar["home"] = "home";
  AppFootBar["group"] = "group";
  AppFootBar["card"] = "card";
  AppFootBar["cart"] = "cart";
  AppFootBar["me"] = "me";
})(AppFootBar || (AppFootBar = {}));

let AppModuleTypeEnum;

(function (AppModuleTypeEnum) {
  AppModuleTypeEnum["categorySelection"] = "categorySelection";
  AppModuleTypeEnum["limitTime"] = "limitTime";
  AppModuleTypeEnum["salesRank"] = "salesRank";
  AppModuleTypeEnum["themeSelection"] = "themeSelection";
  AppModuleTypeEnum["mayLike"] = "mayLike";
  AppModuleTypeEnum["lineRanking"] = "lineRanking";
  AppModuleTypeEnum["topRanking"] = "topRanking";
})(AppModuleTypeEnum || (AppModuleTypeEnum = {}));

const CategoryRootName = 'root';
const orderStateKeys = Object.values(OrderState);
const ProvinceData = [['AL', 'Alabama'], ['AK', 'Alaska'], ['AZ', 'Arizona'], ['AR', 'Arkansas'], ['CA', 'California'], ['CO', 'Colorado'], ['CT', 'Connecticut'], ['DE', 'Delaware'], ['DC', 'District Of Columbia'], ['FL', 'Florida'], ['GA', 'Georgia'], ['HI', 'Hawaii'], ['ID', 'Idaho'], ['IL', 'Illinois'], ['IN', 'Indiana'], ['IA', 'Iowa'], ['KS', 'Kansas'], ['KY', 'Kentucky'], ['LA', 'Louisiana'], ['ME', 'Maine'], ['MD', 'Maryland'], ['MA', 'Massachusetts'], ['MI', 'Michigan'], ['MN', 'Minnesota'], ['MS', 'Mississippi'], ['MO', 'Missouri'], ['MT', 'Montana'], ['NE', 'Nebraska'], ['NV', 'Nevada'], ['NH', 'New Hampshire'], ['NJ', 'New Jersey'], ['NM', 'New Mexico'], ['NY', 'New York'], ['NC', 'North Carolina'], ['ND', 'North Dakota'], ['OH', 'Ohio'], ['OK', 'Oklahoma'], ['OR', 'Oregon'], ['PA', 'Pennsylvania'], ['RI', 'Rhode Island'], ['SC', 'South Carolina'], ['SD', 'South Dakota'], ['TN', 'Tennessee'], ['TX', 'Texas'], ['UT', 'Utah'], ['VT', 'Vermont'], ['VA', 'Virginia'], ['WA', 'Washington'], ['WV', 'West Virginia'], ['WI', 'Wisconsin'], ['WY', 'Wyoming']];
const getPickUpTypeName = type => {
  var _Self$Delivery;

  return (_Self$Delivery = {
    Self: '自取',
    Delivery: '配送'
  }[type]) !== null && _Self$Delivery !== void 0 ? _Self$Delivery : '';
};
const PickUpTypeEnum = {
  Self: 'Self',
  Delivery: 'Delivery'
}; // 热销排行

const SaleRankTypeEnum = {
  OneDay: 'OneDay',
  OneWeek: 'OneWeek',
  OneMonth: 'OneMonth'
};

/***/ }),

/***/ "./utils/style/common.ts":
/*!*******************************!*\
  !*** ./utils/style/common.ts ***!
  \*******************************/
/*! exports provided: mpStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mpStyle", function() { return mpStyle; });
const mpStyle = {
  red: '#F84033',
  shadow: {
    1: '0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20)'
  }
};

/***/ }),

/***/ "./utils/style/reset.css":
/*!*******************************!*\
  !*** ./utils/style/reset.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./utils/style/theme.ts":
/*!******************************!*\
  !*** ./utils/style/theme.ts ***!
  \******************************/
/*! exports provided: theme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "theme", function() { return theme; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "./utils/style/common.ts");


const theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])({
  palette: {
    secondary: {
      main: _common__WEBPACK_IMPORTED_MODULE_1__["mpStyle"].red
    }
  }
});

/***/ }),

/***/ "./utils/tools/dealKey.ts":
/*!********************************!*\
  !*** ./utils/tools/dealKey.ts ***!
  \********************************/
/*! exports provided: ls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ls", function() { return ls; });
const ls = key => key !== null && key !== void 0 ? key : '';

/***/ }),

/***/ "./utils/tools/global.ts":
/*!*******************************!*\
  !*** ./utils/tools/global.ts ***!
  \*******************************/
/*! exports provided: isDev, ssLog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDev", function() { return isDev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ssLog", function() { return ssLog; });
const isDev = true;
const ssLog = data => {
  if (isDev) {
    console.log(data);
  }

  return data;
};

/***/ }),

/***/ "./utils/tools/token.ts":
/*!******************************!*\
  !*** ./utils/tools/token.ts ***!
  \******************************/
/*! exports provided: setToken, getToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setToken", function() { return setToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getToken", function() { return getToken; });
/* global localStorage */
const setToken = (token, name = 'token') => localStorage.setItem(name, token);
const getToken = (name = 'token') => localStorage.getItem(name) || '';

/***/ }),

/***/ "./utils/tools/utils.ts":
/*!******************************!*\
  !*** ./utils/tools/utils.ts ***!
  \******************************/
/*! exports provided: getObjectURL, parseFloatForInput, fpSet, delay, fpSetPre, fpMerge, fpMergePre, fpRemove, dealNumberZero, formatDate, dealNonBooleanProps, formatMoney, dealMoney, dealMaybeNumber, default, dealUrlQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getObjectURL", function() { return getObjectURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseFloatForInput", function() { return parseFloatForInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fpSet", function() { return fpSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return delay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fpSetPre", function() { return fpSetPre; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fpMerge", function() { return fpMerge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fpMergePre", function() { return fpMergePre; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fpRemove", function() { return fpRemove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dealNumberZero", function() { return dealNumberZero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dealNonBooleanProps", function() { return dealNonBooleanProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatMoney", function() { return formatMoney; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dealMoney", function() { return dealMoney; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dealMaybeNumber", function() { return dealMaybeNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dealUrlQuery", function() { return dealUrlQuery; });
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns/format */ "date-fns/format");
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(date_fns_format__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/set */ "lodash/set");
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_set__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);



const getObjectURL = file => {
  var _ref, _window$createObjectU, _window, _window$createObjectU2, _window2, _window2$URL, _window2$URL$createOb, _window3, _window3$webkitURL, _window3$webkitURL$cr;

  // @ts-ignore
  return (_ref = (_window$createObjectU = (_window = window) === null || _window === void 0 ? void 0 : (_window$createObjectU2 = _window.createObjectURL) === null || _window$createObjectU2 === void 0 ? void 0 : _window$createObjectU2.call(_window, file)) !== null && _window$createObjectU !== void 0 ? _window$createObjectU : (_window2 = window) === null || _window2 === void 0 ? void 0 : (_window2$URL = _window2.URL) === null || _window2$URL === void 0 ? void 0 : (_window2$URL$createOb = _window2$URL.createObjectURL) === null || _window2$URL$createOb === void 0 ? void 0 : _window2$URL$createOb.call(_window2$URL, file)) !== null && _ref !== void 0 ? _ref : (_window3 = window) === null || _window3 === void 0 ? void 0 : (_window3$webkitURL = _window3.webkitURL) === null || _window3$webkitURL === void 0 ? void 0 : (_window3$webkitURL$cr = _window3$webkitURL.createObjectURL) === null || _window3$webkitURL$cr === void 0 ? void 0 : _window3$webkitURL$cr.call(_window3$webkitURL, file);
};
const parseFloatForInput = value => {
  if (value === '-' || value === '') return value;

  try {
    return parseFloat(value);
  } catch (e) {
    console.error(e);
  }
};
const fpSet = (origin, path, value) => {
  let newData = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(origin);

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(value)) {
    const oldData = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(origin, path);
    lodash_set__WEBPACK_IMPORTED_MODULE_1___default()(newData, path, value(oldData));
  } else {
    lodash_set__WEBPACK_IMPORTED_MODULE_1___default()(newData, path, value);
  }

  return newData;
};
const delay = time => new Promise(resolve => setTimeout(resolve, time));
const fpSetPre = (path, value) => origin => {
  let newData = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(origin);

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(value)) {
    const oldData = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(origin, path);
    lodash_set__WEBPACK_IMPORTED_MODULE_1___default()(newData, path, value(oldData));
  } else {
    lodash_set__WEBPACK_IMPORTED_MODULE_1___default()(newData, path, value);
  }

  return newData;
};

const customizer = (objValue, srcValue) => {
  if (Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isArray"])(srcValue)) {
    return srcValue;
  }
};

const fpMerge = (origin, newValue) => {
  return Object(lodash__WEBPACK_IMPORTED_MODULE_2__["mergeWith"])({}, origin, newValue, customizer);
};
const fpMergePre = newValue => pre => Object(lodash__WEBPACK_IMPORTED_MODULE_2__["mergeWith"])({}, pre, newValue, customizer);
const fpRemove = (arr, index) => {
  if (!arr) return [];
  return [...(arr === null || arr === void 0 ? void 0 : arr.slice(0, index)), ...(arr === null || arr === void 0 ? void 0 : arr.slice(index + 1, arr === null || arr === void 0 ? void 0 : arr.length))];
};
const dealNumberZero = length => num => {
  const _s = `${num !== null && num !== void 0 ? num : ''}`;
  return Array(length - _s.length).fill('0').join('') + _s;
};
const formatDate = (date = '', formatString = 'YYYY-MM-dd HH:mm:ss') => {
  if (!date) {
    return '';
  }

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isString"])(date)) {
    return date_fns_format__WEBPACK_IMPORTED_MODULE_0___default()(new Date(date), formatString, {
      useAdditionalDayOfYearTokens: true,
      useAdditionalWeekYearTokens: true
    });
  }

  return isNaN(date) ? '' : date_fns_format__WEBPACK_IMPORTED_MODULE_0___default()(date, formatString, {
    useAdditionalDayOfYearTokens: true,
    useAdditionalWeekYearTokens: true
  });
};
const dealNonBooleanProps = value => !!value ? 1 : 0;
const formatMoney = (amount, decimalCount = 2, decimal = ".", thousands = ",") => {
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
    const negativeSign = amount < 0 ? "-" : "";
    let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
    let j = i.length > 3 ? i.length % 3 : 0; // @ts-ignore

    return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
  } catch (e) {
    console.log(e);
  }
};
const dealMoney = (amount, pre = '') => `${pre}$ ${formatMoney(amount)}`;
const dealMaybeNumber = num => num !== null && num !== void 0 ? num : 0;
/* harmony default export */ __webpack_exports__["default"] = ({
  getObjectURL
});
const dealUrlQuery = queryObj => {
  return `?${Object.keys(queryObj).map(value => `${value}=${queryObj[value]}`).join('&')}`;
};

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/colors":
/*!*******************************************!*\
  !*** external "@material-ui/core/colors" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors");

/***/ }),

/***/ "apollo-boost":
/*!*******************************!*\
  !*** external "apollo-boost" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "cross-fetch/polyfill":
/*!***************************************!*\
  !*** external "cross-fetch/polyfill" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cross-fetch/polyfill");

/***/ }),

/***/ "date-fns/format":
/*!**********************************!*\
  !*** external "date-fns/format" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns/format");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "lodash/set":
/*!*****************************!*\
  !*** external "lodash/set" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/set");

/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvTW9kZWxBY3Rpb24vbW9kZWxVdGlsLnRzIiwid2VicGFjazovLy8uL3V0aWxzL01vZGVsQWN0aW9uL3VzZVN0b3JlLnRzIiwid2VicGFjazovLy8uL3V0aWxzL2NsaWVudC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi91dGlscy9jb21wb25lbnRzL01lc3NhZ2UvTWVzc2FnZS50c3giLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZ3JhcGhxbFR5cGVzL2RvYy9mcmFnbWVudC50cyIsIndlYnBhY2s6Ly8vLi91dGlscy9ncmFwaHFsVHlwZXMvZG9jL2luZGV4LnRzIiwid2VicGFjazovLy8uL3V0aWxzL3NzX2NvbW1vbi9lbnVtLnRzIiwid2VicGFjazovLy8uL3V0aWxzL3N0eWxlL2NvbW1vbi50cyIsIndlYnBhY2s6Ly8vLi91dGlscy9zdHlsZS90aGVtZS50cyIsIndlYnBhY2s6Ly8vLi91dGlscy90b29scy9kZWFsS2V5LnRzIiwid2VicGFjazovLy8uL3V0aWxzL3Rvb2xzL2dsb2JhbC50cyIsIndlYnBhY2s6Ly8vLi91dGlscy90b29scy90b2tlbi50cyIsIndlYnBhY2s6Ly8vLi91dGlscy90b29scy91dGlscy50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9yc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFwb2xsby1ib29zdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNyb3NzLWZldGNoL3BvbHlmaWxsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZGF0ZS1mbnMvZm9ybWF0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoL3NldFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvY29uZmlnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ0aGVtZSIsImJhc2VBY3Rpb25PcHRpb24iLCJkYXRhIiwibXV0YXRlIiwibm90aWNlIiwicXVlcnkiLCJzZXREYXRhIiwic3RvcmUiLCJtb2RlbE5hbWVMaXN0IiwibW9kZWxGYWN0b3J5IiwibmFtZSIsInN0YXRlIiwiYWN0aW9ucyIsImluY2x1ZGVzIiwiRXJyb3IiLCJwdXNoIiwiZmV0Y2hMb2FkIiwiZmV0Y2hFcnJvciIsIm1lcmdlTW9kZWwiLCJtb2RlbCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwidmFsdWUiLCJtZXJnZU5hbWUiLCJtZXJnZVR3b01vZGVsIiwibW9kZWxUIiwibWVyZ2VUaHJlZU1vZGVsIiwibW9kZWxBIiwibW9kZWxCIiwibW9kZWxDIiwibWVyZ2VMaXN0TW9kZWwiLCJtb2RlbExpc3QiLCJzbGljZSIsInJlZHVjZSIsImFjYyIsImluaXRMaXN0IiwiaW5pdE1vZGVsIiwiaW5pdFN0YXRlIiwib3JpZ2luU3RvcmUiLCJpc0Z1bmN0aW9uIiwiZnVuY3Rpb25Ub0NoZWNrIiwidG9TdHJpbmciLCJjYWxsIiwiZGVhbE5hbWVTcGFjZSIsImtleSIsIm5hbWVTcGFjZSIsInVzZVN0b3JlTW9kZWwiLCJfa2V5IiwiQXJyYXkiLCJpc0FycmF5Iiwic2V0U3RhdGUiLCJ1c2VTdGF0ZSIsImNyZWF0ZSIsInVzZUNhbGxiYWNrIiwib2xkU3RhdGUiLCJuZXdEYXRhIiwic2V0TG9hZCIsImZsYWciLCJwcmV2U3RhdGUiLCJsb2MiLCJzb3VyY2UiLCJib2R5Iiwic2V0RXJyb3IiLCJlcnIiLCJwYXJhbXMiLCJvcHRpb24iLCJyZXMiLCJncmFwaFFMUXVlcnkiLCJjYXRjaCIsImUiLCJmaW5hbGx5IiwibXV0YXRpb24iLCJncmFwaFFMTXV0YXRlIiwibGVuZ3RoIiwiY29uc3RydWN0b3IiLCJ2IiwidXNlRWZmZWN0IiwiZmlsdGVyIiwiZ2V0TG9hZCIsImNvbmZpZyIsImdldENvbmZpZyIsImNsaWVudF9hcGlfdXJpIiwicHVibGljUnVudGltZUNvbmZpZyIsIm9taXRUeXBlbmFtZSIsInVuZGVmaW5lZCIsImdldENsaWVudCIsInJlcXVlc3QiLCJvcGVyYXRpb24iLCJ2YXJpYWJsZXMiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJzZXRDb250ZXh0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJnZXRUb2tlbiIsInJlZnJlc2hUb2tlbiIsImRvYyIsInRoZW4iLCJ0b2tlbiIsInNldFRva2VuIiwicmVmcmVzaHRva2VuIiwic2hvd01lc3NhZ2UiLCJtZXNzYWdlIiwiUm91dGVyIiwicmVsb2FkIiwic3NMb2ciLCJvbkVycm9yIiwicmVzcG9uc2UiLCJncmFwaFFMRXJyb3JzIiwibmV0d29ya0Vycm9yIiwibG9jYXRpb25zIiwicGF0aCIsImV4dGVuc2lvbnMiLCJjb2RlIiwic3BsaXQiLCJtc2dfdHlwZSIsImVyck1zZyIsImJvZHlUZXh0IiwicmVzdWx0IiwiZXJyb3IiLCJzdGF0dXNDb2RlIiwiQXBvbGxvQ2xpZW50IiwidXJpIiwiZGVmYXVsdENsaWVudCIsImRlYWxQYXJhbXMiLCJjbGllbnQiLCJfZGVhbFBhcmFtc0luIiwiZGVhbFBhcmFtc0luIiwiZmV0Y2hQb2xpY3kiLCJzZXJ2ZXJDbGllbnQiLCJzZXJ2ZXJRdWVyeSIsInNlcnZlck11dGF0ZSIsInR5cGVIZWxwIiwiZGVmYXVsdCIsImdyZXkiLCJzdWNjZXNzIiwiZ3JlZW4iLCJ3YXJuaW5nIiwiYW1iZXIiLCJpbmZvIiwiYmx1ZSIsInJlZCIsImdldFR5cGUiLCJ0eXBlIiwiQ3VzU25hY2tiYXIiLCJzdHlsZWQiLCJTbmFja2JhciIsImNvbW1vbiIsIndoaXRlIiwibWVzc2FnZU1vZGVsIiwib3BlbiIsImF1dG9IaWRlRHVyYXRpb24iLCJmcE1lcmdlUHJlIiwib25DbG9zZSIsIk1lc3NhZ2UiLCJtU3RhdGUiLCJscyIsImZyYWdtZW50IiwiQ2F0ZWdvcnlGaWVsZHMiLCJncWwiLCJVc2VyRmllbGRzIiwiVXNlckluZm9GaWVsZHMiLCJPcmRlckluZm9GaWVsZHMiLCJST3JkZXJQcm9kdWN0RmllbGRzIiwiUHJvZHVjdEZpZWxkcyIsIkltZ0ZpZWxkcyIsIlVzZXJBZGRyZXNzRmllbGRzIiwiVXNlclBheUNhcmRGaWVsZHMiLCJTaG9wQ2FydEZpZWxkcyIsIkRhdGFDb25maWdGaWVsZHMiLCJEaWN0RmllbGRzIiwiR3JvdXBRdWV1ZUZpZWxkcyIsIkdyb3VwT3JkZXJGaWVsZHMiLCJQcm9tb0NvZGVGaWVsZHMiLCJnZXRVc2VyTGlzdERvYyIsImdldERhdGFDb25maWciLCJob21lQ2Fyb3VzZWxJbWdzIiwiY2F0ZWdvcnlMaXN0IiwicmVnaXN0ZXJVc2VyIiwibG9naW4iLCJvbmVVc2VyIiwib3JkZXJMaXN0Iiwib3JkZXJEZXRhaWwiLCJEaWN0VHlwZUVudW0iLCJTZWxmQWRkcmVzcyIsInVwZGF0ZVBhc3N3b3JkIiwicGF5Q2FyZExpc3RPbmVVc2VyIiwidXNlclBheUNhcmQiLCJzYXZlVXNlclBheUNhcmQiLCJzZXRVc2VyUGF5Q2FyZERlZmF1bHQiLCJwaWNrdXBBZGRyZXNzIiwidXBkYXRlVXNlckluZm8iLCJ1c2VyQWRkcmVzc0xpc3RPbmVVc2VyIiwidXNlckFkZHJlc3MiLCJzYXZlVXNlckFkZHJlc3MiLCJzZXRVc2VyQWRkcmVzc0RlZmF1bHQiLCJwcm9kdWN0c0luQ2F0ZWdvcnkiLCJjYXRlZ29yeUxldmVsIiwib25lQ2F0ZWdvcnkiLCJwcm9kdWN0TGlzdCIsInVwZGF0ZU51bVNob3BDYXJ0IiwidXNlclNob3BDYXJ0TGlzdCIsInVwZGF0ZVNob3BDYXJ0Iiwib3JkZXJDb25maXJtSW5mbyIsIkZyZWlnaHQiLCJzYXZlT3JkZXIiLCJkaWN0TGlzdCIsImxpbWl0VGltZURhdGEiLCJQcm9tb3Rpb25GbGFzaFNhbGUiLCJwcm9kdWN0TGlzdEJ5SWRzIiwiZ3JvdXBRdWV1ZUxpc3QiLCJ1cGRhdGVPcmRlciIsInNhdmVHcm91cE9yZGVyIiwicHJvbW9Db2RlTGlzdCIsImNhdGVnb3J5Um9vdFBhcmVudCIsInByb2R1Y3RMaXN0T3JkZXJCeU9yZGVyIiwiUHJvbW9Db2RlVHlwZUVudW0iLCJEaXNjb3VudFR5cGVFbnVtIiwiU1MiLCJEaXNjb3VudENvbmRpdGlvbkVudW0iLCJQcm9kdWN0U3VwcGxlbWVudCIsIlByb2R1Y3RTdXBwbGVtZW50U3RyaW5nIiwiT3JkZXJTdGF0ZSIsIl9zIiwib3JkZXJTdGF0ZVRvU3RyaW5nIiwicyIsIlJlbGF0ZWRPYmpUeXBlRW51bSIsIkFwcEZvb3RCYXIiLCJBcHBNb2R1bGVUeXBlRW51bSIsIkNhdGVnb3J5Um9vdE5hbWUiLCJvcmRlclN0YXRlS2V5cyIsInZhbHVlcyIsIlByb3ZpbmNlRGF0YSIsImdldFBpY2tVcFR5cGVOYW1lIiwiU2VsZiIsIkRlbGl2ZXJ5IiwiUGlja1VwVHlwZUVudW0iLCJTYWxlUmFua1R5cGVFbnVtIiwiT25lRGF5IiwiT25lV2VlayIsIk9uZU1vbnRoIiwibXBTdHlsZSIsInNoYWRvdyIsImNyZWF0ZU11aVRoZW1lIiwicGFsZXR0ZSIsInNlY29uZGFyeSIsIm1haW4iLCJpc0RldiIsImNvbnNvbGUiLCJsb2ciLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZ2V0SXRlbSIsImdldE9iamVjdFVSTCIsImZpbGUiLCJ3aW5kb3ciLCJjcmVhdGVPYmplY3RVUkwiLCJVUkwiLCJ3ZWJraXRVUkwiLCJwYXJzZUZsb2F0Rm9ySW5wdXQiLCJwYXJzZUZsb2F0IiwiZnBTZXQiLCJvcmlnaW4iLCJjbG9uZURlZXAiLCJvbGREYXRhIiwiZ2V0Iiwic2V0IiwiZGVsYXkiLCJ0aW1lIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiZnBTZXRQcmUiLCJjdXN0b21pemVyIiwib2JqVmFsdWUiLCJzcmNWYWx1ZSIsImZwTWVyZ2UiLCJuZXdWYWx1ZSIsIm1lcmdlV2l0aCIsInByZSIsImZwUmVtb3ZlIiwiYXJyIiwiaW5kZXgiLCJkZWFsTnVtYmVyWmVybyIsIm51bSIsImZpbGwiLCJqb2luIiwiZm9ybWF0RGF0ZSIsImRhdGUiLCJmb3JtYXRTdHJpbmciLCJpc1N0cmluZyIsImZvcm1hdCIsIkRhdGUiLCJ1c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zIiwidXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zIiwiaXNOYU4iLCJkZWFsTm9uQm9vbGVhblByb3BzIiwiZm9ybWF0TW9uZXkiLCJhbW91bnQiLCJkZWNpbWFsQ291bnQiLCJkZWNpbWFsIiwidGhvdXNhbmRzIiwiTWF0aCIsImFicyIsIm5lZ2F0aXZlU2lnbiIsImkiLCJwYXJzZUludCIsIk51bWJlciIsInRvRml4ZWQiLCJqIiwic3Vic3RyIiwicmVwbGFjZSIsImRlYWxNb25leSIsImRlYWxNYXliZU51bWJlciIsImRlYWxVcmxRdWVyeSIsInF1ZXJ5T2JqIiwibWFwIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFF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b0wsV0FBTyxDQUFDQyxHQUFSLENBQVlyTCxDQUFaO0FBQ0Q7QUFDRixDQWZNO0FBaUJBLE1BQU1vUCxTQUFTLEdBQUcsQ0FBQ2QsTUFBRCxFQUFjbkIsR0FBRyxHQUFHLEVBQXBCLEtBQTRCLEdBQUVBLEdBQUksS0FBSWtCLFdBQVcsQ0FBQ0MsTUFBRCxDQUFTLEVBQTVFO0FBRUEsTUFBTWUsZUFBZSxHQUFJN0IsR0FBRCxJQUFvQ0EsR0FBcEMsYUFBb0NBLEdBQXBDLGNBQW9DQSxHQUFwQyxHQUEyQyxDQUFuRTtBQUVRO0FBQ2IvQjtBQURhLENBQWY7QUFJTyxNQUFNNkQsWUFBWSxHQUFJQyxRQUFELElBQW1CO0FBQzdDLFNBQVEsSUFBR3pTLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZd1MsUUFBWixFQUFzQkMsR0FBdEIsQ0FBMEJ2UyxLQUFLLElBQUssR0FBRUEsS0FBTSxJQUFHc1MsUUFBUSxDQUFDdFMsS0FBRCxDQUFRLEVBQS9ELEVBQWtFeVEsSUFBbEUsQ0FBdUUsR0FBdkUsQ0FBNEUsRUFBdkY7QUFDRCxDQUZNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEhQLDhDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0ICcuLi91dGlscy9zdHlsZS9yZXNldC5jc3MnXHJcbmltcG9ydCBcInJlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwvbGliL3N0eWxlcy9jYXJvdXNlbC5taW4uY3NzXCJcclxuaW1wb3J0IHtBcHBQcm9wc30gZnJvbSAnbmV4dC9hcHAnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtUaGVtZVByb3ZpZGVyfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHt0aGVtZX0gZnJvbSAnLi4vdXRpbHMvc3R5bGUvdGhlbWUnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHtNZXNzYWdlfSBmcm9tICcuLi91dGlscy9jb21wb25lbnRzL01lc3NhZ2UvTWVzc2FnZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHtDb21wb25lbnQsIHBhZ2VQcm9wc306IEFwcFByb3BzKSB7XHJcbiAgcmV0dXJuIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcbiAgICA8SGVhZD5cclxuICAgICAgPHRpdGxlPk1hcmtldCBQYXlsZXNzPC90aXRsZT5cclxuICAgIDwvSGVhZD5cclxuICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgIDxNZXNzYWdlLz5cclxuICA8L1RoZW1lUHJvdmlkZXI+XHJcbn1cclxuXHJcbiIsIlxyXG50eXBlIE1vZGVsRmFjdG9yeTxOID0gJyc+ID0gPFQsIEUgZXh0ZW5kcyBNb2RlbEFjdGlvbk9iakhlbHA8YW55LCBUICYgRmV0Y2hPYmo+PihuYW1lOiBzdHJpbmcsIHN0YXRlOiBULCBhY3Rpb25zOiBFKSA9PiBNb2RlbERhdGE8VCAmIEZldGNoT2JqLCBFPlxyXG5cclxuZXhwb3J0IGNvbnN0IGJhc2VBY3Rpb25PcHRpb246IEJhc2VNb2RlbEFjdGlvbk9wdGlvbiA9IHtcclxuICBkYXRhOiBudWxsLFxyXG4gIG11dGF0ZTogKCkgPT4ge30sXHJcbiAgbm90aWNlOiAoKSA9PiB7fSxcclxuICBxdWVyeTogKCkgPT4ge30sXHJcbiAgc2V0RGF0YTogKCkgPT4ge30sXHJcbiAgc3RvcmU6IHt9XHJcbn1cclxuXHJcbmNvbnN0IG1vZGVsTmFtZUxpc3Q6c3RyaW5nW10gPSBbXVxyXG5leHBvcnQgY29uc3QgbW9kZWxGYWN0b3J5OiBNb2RlbEZhY3RvcnkgPSAobmFtZSwgc3RhdGUsIGFjdGlvbnMpID0+IHtcclxuICBpZiAobW9kZWxOYW1lTGlzdC5pbmNsdWRlcyhuYW1lKSkge1xyXG4gICAgdGhyb3cgRXJyb3IoYG1vZGVsIE5hbWUgZHVwbGljYXRlOiAke25hbWV9YClcclxuICB9XHJcbiAgbW9kZWxOYW1lTGlzdC5wdXNoKG5hbWUpXHJcbiAgcmV0dXJuIHtcclxuICAgIG5hbWUsXHJcbiAgICBzdGF0ZToge1xyXG4gICAgICAuLi5zdGF0ZSxcclxuICAgICAgZmV0Y2hMb2FkOiB7fSxcclxuICAgICAgZmV0Y2hFcnJvcjoge30sXHJcbiAgICB9LFxyXG4gICAgYWN0aW9ucyxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZU1vZGVsPEEgZXh0ZW5kcyBGZXRjaE9iaiwgQiBleHRlbmRzIE1vZGVsQWN0aW9uT2JqSGVscDxhbnksIEE+LCBDLCBEIGV4dGVuZHMgTW9kZWxBY3Rpb25PYmpIZWxwPGFueSwgQSAmIEM+Pihtb2RlbDoge1xyXG4gIHN0YXRlOiBBXHJcbiAgYWN0aW9uczogQlxyXG4gIG5hbWU6IHN0cmluZ1xyXG59LCBuYW1lOiBzdHJpbmcsIHN0YXRlOiBDLCBhY3Rpb25zOiBEKToge1xyXG4gIHN0YXRlOiBBICYgQ1xyXG4gIGFjdGlvbnM6IEIgJiBEICYge1xyXG4gICAgW2tleSBpbiBrZXlvZiBCXTogTW9kZWxBY3Rpb248YW55LCBBPlxyXG4gIH0gJiB7XHJcbiAgICBba2V5IGluIGtleW9mIERdOiBNb2RlbEFjdGlvbjxhbnksIEEgJiBDPlxyXG4gIH1cclxuICBuYW1lOiBzdHJpbmdcclxufSB7XHJcbiAgT2JqZWN0LmtleXMobW9kZWwuc3RhdGUpLmZvckVhY2godmFsdWUgPT4ge1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgaWYgKHN0YXRlPy5bdmFsdWVdICYmICFbJ2ZldGNoRXJyb3InLCAnZmV0Y2hMb2FkJ10uaW5jbHVkZXModmFsdWUpKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgbWVyZ2VNb2RlbDogc3RhdGUgZHVwbGljYXRlOjoga2V5ICR7dmFsdWV9YClcclxuICAgIH1cclxuICB9KVxyXG4gIE9iamVjdC5rZXlzKG1vZGVsLmFjdGlvbnMpLmZvckVhY2godmFsdWUgPT4ge1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgaWYgKGFjdGlvbnM/Llt2YWx1ZV0pIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBtZXJnZU1vZGVsOiBhY3Rpb24gZHVwbGljYXRlOjoga2V5ICR7dmFsdWV9YClcclxuICAgIH1cclxuICB9KVxyXG4gIGNvbnN0IG1lcmdlTmFtZSA9IGAke25hbWV9X3dpdGhfJHttb2RlbC5uYW1lfWBcclxuICBpZiAobW9kZWxOYW1lTGlzdC5pbmNsdWRlcyhtZXJnZU5hbWUpKSB7XHJcbiAgICB0aHJvdyBFcnJvcihgbW9kZWwgTmFtZSBkdXBsaWNhdGU6ICR7bWVyZ2VOYW1lfWApXHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgbmFtZTogbWVyZ2VOYW1lLFxyXG4gICAgc3RhdGU6IHtcclxuICAgICAgLi4ubW9kZWwuc3RhdGUsXHJcbiAgICAgIC4uLnN0YXRlLFxyXG4gICAgfSxcclxuICAgIGFjdGlvbnM6IHtcclxuICAgICAgLi4ubW9kZWwuYWN0aW9ucyxcclxuICAgICAgLi4uYWN0aW9ucyxcclxuICAgIH0sXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VUd29Nb2RlbDxBLCBCIGV4dGVuZHMgTW9kZWxBY3Rpb25PYmpIZWxwPGFueSwgQT4sIEMsIEQgZXh0ZW5kcyBNb2RlbEFjdGlvbk9iakhlbHA8YW55LCBDPj4obW9kZWw6IHtcclxuICBzdGF0ZTogQVxyXG4gIGFjdGlvbnM6IEJcclxuICBuYW1lOiBzdHJpbmdcclxufSwgbW9kZWxUOiB7XHJcbiAgc3RhdGU6IENcclxuICBhY3Rpb25zOiBEXHJcbiAgbmFtZTogc3RyaW5nXHJcbn0pOiB7XHJcbiAgbmFtZTogc3RyaW5nXHJcbiAgc3RhdGU6IEEgJiBDXHJcbiAgYWN0aW9uczogQiAmIEQgJiB7XHJcbiAgICBba2V5IGluIGtleW9mIEJdOiBNb2RlbEFjdGlvblxyXG4gIH0gJiB7XHJcbiAgICBba2V5IGluIGtleW9mIERdOiBNb2RlbEFjdGlvblxyXG4gIH1cclxufSB7XHJcbiAgT2JqZWN0LmtleXMobW9kZWwuc3RhdGUpLmZvckVhY2godmFsdWUgPT4ge1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgaWYgKG1vZGVsVC5zdGF0ZT8uW3ZhbHVlXSAmJiAhWydmZXRjaEVycm9yJywgJ2ZldGNoTG9hZCddLmluY2x1ZGVzKHZhbHVlKSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYG1lcmdlVHdvTW9kZWw6IHN0YXRlIGR1cGxpY2F0ZTo6IGtleSAke3ZhbHVlfWApXHJcbiAgICB9XHJcbiAgfSlcclxuICBPYmplY3Qua2V5cyhtb2RlbC5hY3Rpb25zKS5mb3JFYWNoKHZhbHVlID0+IHtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIGlmIChtb2RlbFQ/LmFjdGlvbnM/Llt2YWx1ZV0pIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBtZXJnZVR3b01vZGVsOiBhY3Rpb24gZHVwbGljYXRlOjoga2V5ICR7dmFsdWV9YClcclxuICAgIH1cclxuICB9KVxyXG4gIGNvbnN0IG1lcmdlTmFtZSA9IGAke21vZGVsLm5hbWV9X2FuZF8ke21vZGVsVC5uYW1lfWBcclxuICBpZiAobW9kZWxOYW1lTGlzdC5pbmNsdWRlcyhtZXJnZU5hbWUpKSB7XHJcbiAgICB0aHJvdyBFcnJvcihgbW9kZWwgTmFtZSBkdXBsaWNhdGU6ICR7bWVyZ2VOYW1lfWApXHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgbmFtZTogbWVyZ2VOYW1lLFxyXG4gICAgc3RhdGU6IHtcclxuICAgICAgLi4ubW9kZWwuc3RhdGUsXHJcbiAgICAgIC4uLm1vZGVsVC5zdGF0ZSxcclxuICAgIH0sXHJcbiAgICBhY3Rpb25zOiB7XHJcbiAgICAgIC4uLm1vZGVsLmFjdGlvbnMsXHJcbiAgICAgIC4uLm1vZGVsVC5hY3Rpb25zLFxyXG4gICAgfSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBtZXJnZVRocmVlTW9kZWwgPSA8QSBleHRlbmRzIEZldGNoT2JqLCBUIGV4dGVuZHMgTW9kZWxBY3Rpb25PYmpIZWxwPGFueSwgQT4sIEIgZXh0ZW5kcyBGZXRjaE9iaiwgTyBleHRlbmRzIE1vZGVsQWN0aW9uT2JqSGVscDxhbnksIEI+LCBDIGV4dGVuZHMgRmV0Y2hPYmosIFAgZXh0ZW5kcyBNb2RlbEFjdGlvbk9iakhlbHA8YW55LCBDPj4obW9kZWxBOiBNb2RlbERhdGE8QSwgVD4sIG1vZGVsQjogTW9kZWxEYXRhPEIsIE8+LCBtb2RlbEM6IE1vZGVsRGF0YTxDLCBQPik6IHtcclxuICBuYW1lOiBzdHJpbmdcclxuICBzdGF0ZTogQSAmIEIgJiBDXHJcbiAgYWN0aW9uczogVCAmIE8gJiBQICYge1xyXG4gICAgW2tleSBpbiBrZXlvZiBUXTogTW9kZWxBY3Rpb25cclxuICB9ICYge1xyXG4gICAgW2tleSBpbiBrZXlvZiBPXTogTW9kZWxBY3Rpb25cclxuICB9ICYge1xyXG4gICAgW2tleSBpbiBrZXlvZiBQXTogTW9kZWxBY3Rpb25cclxuICB9XHJcbn0gPT4ge1xyXG4gIHJldHVybiBtZXJnZVR3b01vZGVsKG1lcmdlVHdvTW9kZWwobW9kZWxBLCBtb2RlbEIpLCBtb2RlbEMpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBtZXJnZUxpc3RNb2RlbCA9IChtb2RlbExpc3Q6IE1vZGVsRGF0YTxhbnksIGFueT5bXSkgPT4ge1xyXG4gIHJldHVybiBtb2RlbExpc3Quc2xpY2UoMSkucmVkdWNlKChhY2MsIG1vZGVsKSA9PiBtZXJnZVR3b01vZGVsKGFjYywgbW9kZWwpLCBtb2RlbExpc3RbMF0pXHJcbn1cclxuXHJcbmNvbnN0IGluaXRMaXN0OiBzdHJpbmdbXSA9IFtdXHJcbmV4cG9ydCBjb25zdCBpbml0TW9kZWwgPSA8VCBleHRlbmRzIEZldGNoT2JqLCBFIGV4dGVuZHMgTW9kZWxBY3Rpb25PYmpIZWxwPGFueSwgVD4+KG1vZGVsOiBNb2RlbERhdGE8VCwgRT4sIGluaXRTdGF0ZTogUGFydGlhbDxUPikgPT4ge1xyXG4gIGlmIChpbml0TGlzdC5pbmNsdWRlcyhtb2RlbC5uYW1lKSkgcmV0dXJuXHJcbiAgaW5pdExpc3QucHVzaChtb2RlbC5uYW1lKVxyXG4gIG1vZGVsLnN0YXRlID0ge1xyXG4gICAgLi4ubW9kZWwuc3RhdGUsXHJcbiAgICAuLi5pbml0U3RhdGUsXHJcbiAgfVxyXG59XHJcblxyXG4vLyBjb25zdCBtb2RlbCA9IG1vZGVsRmFjdG9yeSh7fSwge1xyXG4vLyAgIHNzOiB7XHJcbi8vICAgICBlZWU6ICh2YWx1ZTogc3RyaW5nLCBvcHRpb24pID0+IHtcclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi8vIH0pXHJcbi8vXHJcbi8vIHVzZVN0b3JlTW9kZWwoTW9kdWxlRW51bS5UZXN0LCBtb2RlbCkuYWN0aW9ucy5zcy5lZWUoJycpXHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gbWVyZ2VJbnRvTW9kZWwob3JpZ2luTW9kZWwsIG5hbWUsIGlubmVyTW9kZWwpIHtcclxuLy9cclxuLy8gfVxyXG5cclxuLy8gY29uc3QgX21vZGVsID0gbWVyZ2VUd29Nb2RlbChtb2RlbEZhY3Rvcnkoe1xyXG4vLyAgIHQxOiAnJ1xyXG4vLyB9LCB7XHJcbi8vIH0pLCBtb2RlbEZhY3Rvcnkoe1xyXG4vLyAgIHQzOiAnJ1xyXG4vLyB9LCB7XHJcbi8vIH0pKVxyXG4vL1xyXG4vLyBtZXJnZU1vZGVsKF9tb2RlbCwge1xyXG4vLyAgIHQyOiAnJ1xyXG4vLyB9LCB7XHJcbi8vIH0pXHJcbiIsImltcG9ydCB7dXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7Z3JhcGhRTE11dGF0ZSwgZ3JhcGhRTFF1ZXJ5fSBmcm9tICcuLi9jbGllbnQnXHJcbmltcG9ydCB7YmFzZUFjdGlvbk9wdGlvbn0gZnJvbSAnLi9tb2RlbFV0aWwnXHJcblxyXG5leHBvcnQgY29uc3Qgb3JpZ2luU3RvcmU6IE9yaWdpblN0b3JlID0ge31cclxuXHJcbmNvbnN0IGlzRnVuY3Rpb24gPSAoZnVuY3Rpb25Ub0NoZWNrOiBhbnkpID0+IHtcclxuICByZXR1cm4gZnVuY3Rpb25Ub0NoZWNrICYmIHt9LnRvU3RyaW5nLmNhbGwoZnVuY3Rpb25Ub0NoZWNrKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJ1xyXG59XHJcblxyXG50eXBlIFN0b3JlU3RhdGVSZXN1bHQ8VCwgRSBleHRlbmRzIE1vZGVsQWN0aW9uT2JqSGVscDxhbnksIFQ+PiA9IE1vZGVsUmVzdWx0PFQsIEU+ICYge1xyXG4gIHN0b3JlOiBPcmlnaW5TdG9yZVxyXG4gIGdldExvYWQ6IChxdWVyeTogYW55KSA9PiBudW1iZXJcclxufVxyXG5cclxudHlwZSBVc2VNb2RlbFN0YXRlID0gPFQgZXh0ZW5kcyBGZXRjaE9iaiwgRSBleHRlbmRzIE1vZGVsQWN0aW9uT2JqSGVscDxhbnksIFQ+Pihtb2RlbDogTW9kZWxEYXRhPFQsIEU+LCBrZXk/OiBzdHJpbmcgfCBbc3RyaW5nLCBzdHJpbmddKSA9PiBTdG9yZVN0YXRlUmVzdWx0PFQsIEU+XHJcblxyXG5leHBvcnQgY29uc3QgZGVhbE5hbWVTcGFjZSA9IChrZXk6IHN0cmluZywgbmFtZVNwYWNlOiBzdHJpbmcpID0+IHtcclxuICBpZiAobmFtZVNwYWNlKSB7XHJcbiAgICByZXR1cm4gYCR7a2V5fV8ke25hbWVTcGFjZX1gXHJcbiAgfVxyXG4gIHJldHVybiBgJHtrZXl9YFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlU3RvcmVNb2RlbDogVXNlTW9kZWxTdGF0ZSA9IChtb2RlbCwga2V5Pzogc3RyaW5nIHwgW3N0cmluZywgc3RyaW5nXSkgPT4ge1xyXG4gIGNvbnN0IF9rZXkgPSBtb2RlbC5uYW1lID8/ICgha2V5ID8gJycgOiBBcnJheS5pc0FycmF5KGtleSkgPyBkZWFsTmFtZVNwYWNlKGtleVswXSwga2V5WzFdKSA6IGtleSlcclxuICBjb25zdCB7YWN0aW9ucywgc3RhdGV9ID0gbW9kZWxcclxuICBjb25zdCBbLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShPYmplY3QuY3JlYXRlKG51bGwpKVxyXG4gIGlmICghX2tleSkge1xyXG4gICAgdGhyb3cgRXJyb3IoJ25vIGtleScpXHJcbiAgfVxyXG4gIGlmICghb3JpZ2luU3RvcmVbX2tleV0pIHtcclxuICAgIG9yaWdpblN0b3JlW19rZXldID0ge1xyXG4gICAgICBrZXlzOiBfa2V5LFxyXG4gICAgICBzdGF0ZSxcclxuICAgICAgYWN0aW9uczoge30sXHJcbiAgICAgIHNldERhdGE6IFtdXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IG5vdGljZSA9IHVzZUNhbGxiYWNrKChkYXRhOiBhbnkpID0+IHtcclxuICAgIG9yaWdpblN0b3JlW19rZXldLnNldERhdGEuZm9yRWFjaCh2YWx1ZSA9PiB7XHJcbiAgICAgIHZhbHVlPy4oZGF0YSlcclxuICAgIH0pXHJcbiAgfSwgW19rZXldKVxyXG4gIGNvbnN0IHNldERhdGE6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPHR5cGVvZiBzdGF0ZT4+ID0gdXNlQ2FsbGJhY2soKGRhdGEpID0+IHtcclxuICAgIGNvbnN0IG9sZFN0YXRlID0gb3JpZ2luU3RvcmVbX2tleV0uc3RhdGVcclxuICAgIGNvbnN0IG5ld0RhdGEgPSBpc0Z1bmN0aW9uKGRhdGEpID8gKGRhdGEgYXMgKHY6IHR5cGVvZiBvbGRTdGF0ZSkgPT4gdm9pZCkob2xkU3RhdGUpIDogZGF0YVxyXG4gICAgb3JpZ2luU3RvcmVbX2tleV0uc3RhdGUgPSBuZXdEYXRhXHJcbiAgICBub3RpY2UobmV3RGF0YSlcclxuICB9LCBbX2tleSwgbm90aWNlXSlcclxuXHJcbiAgY29uc3Qgc2V0TG9hZCA9IHVzZUNhbGxiYWNrKChxdWVyeTogYW55LCBmbGFnOiBib29sZWFuKSA9PiB7XHJcbiAgICBzZXREYXRhKHByZXZTdGF0ZSA9PiAoe1xyXG4gICAgICAuLi5wcmV2U3RhdGUsXHJcbiAgICAgIGZldGNoTG9hZDoge1xyXG4gICAgICAgIC4uLnByZXZTdGF0ZS5mZXRjaExvYWQgPz8ge30sXHJcbiAgICAgICAgW3F1ZXJ5Py5sb2M/LnNvdXJjZT8uYm9keV06IGZsYWcsXHJcbiAgICAgIH1cclxuICAgIH0pKVxyXG4gIH0sIFtzZXREYXRhXSlcclxuICBjb25zdCBzZXRFcnJvciA9IHVzZUNhbGxiYWNrKChxdWVyeTogYW55LCBlcnI6IGFueSkgPT4ge1xyXG4gICAgc2V0RGF0YShwcmV2U3RhdGUgPT4gKHtcclxuICAgICAgLi4ucHJldlN0YXRlLFxyXG4gICAgICBmZXRjaEVycm9yOiB7XHJcbiAgICAgICAgLi4ucHJldlN0YXRlLmZldGNoRXJyb3IgPz8ge30sXHJcbiAgICAgICAgW3F1ZXJ5Py5sb2M/LnNvdXJjZT8uYm9keV06IGVycixcclxuICAgICAgfVxyXG4gICAgfSkpXHJcbiAgfSwgW3NldERhdGFdKVxyXG5cclxuICBjb25zdCBxdWVyeTogR3JhcGhxbFF1ZXJ5ID0gdXNlQ2FsbGJhY2soYXN5bmMgKHF1ZXJ5LCBwYXJhbXMsIG9wdGlvbikgPT4ge1xyXG4gICAgc2V0TG9hZChxdWVyeSwgdHJ1ZSlcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGdyYXBoUUxRdWVyeSgpKHF1ZXJ5LCBwYXJhbXMsIG9wdGlvbikuY2F0Y2goZSA9PiB7XHJcbiAgICAgIHNldEVycm9yKHF1ZXJ5LCBlKVxyXG4gICAgfSkuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgIHNldExvYWQocXVlcnksIGZhbHNlKVxyXG4gICAgfSkgYXMgYW55XHJcbiAgICByZXR1cm4gcmVzPy5kYXRhXHJcbiAgfSwgW3NldEVycm9yLCBzZXRMb2FkXSlcclxuICBjb25zdCBtdXRhdGU6IEdyYXBocWxNdXRhdGUgPSB1c2VDYWxsYmFjayhhc3luYyAobXV0YXRpb24sIHBhcmFtcywgb3B0aW9uKSA9PiB7XHJcbiAgICBzZXRMb2FkKG11dGF0aW9uLCB0cnVlKVxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZ3JhcGhRTE11dGF0ZSgpKG11dGF0aW9uLCBwYXJhbXMsIG9wdGlvbikuY2F0Y2goZSA9PiB7XHJcbiAgICAgIHNldEVycm9yKG11dGF0aW9uLCBlKVxyXG4gICAgfSkuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgIHNldExvYWQobXV0YXRpb24sIGZhbHNlKVxyXG4gICAgfSkgYXMgYW55XHJcbiAgICByZXR1cm4gcmVzPy5kYXRhXHJcbiAgfSwgW3NldEVycm9yLCBzZXRMb2FkXSlcclxuXHJcbiAgaWYgKE9iamVjdC5rZXlzKG9yaWdpblN0b3JlW19rZXldLmFjdGlvbnMpLmxlbmd0aCA9PT0gMCAmJiBvcmlnaW5TdG9yZVtfa2V5XS5hY3Rpb25zLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcclxuICAgIE9iamVjdC5rZXlzKGFjdGlvbnMpLmZvckVhY2godmFsdWUgPT4ge1xyXG4gICAgICBvcmlnaW5TdG9yZVtfa2V5XS5hY3Rpb25zW3ZhbHVlXSA9ICh2OiBhbnkpID0+IGFjdGlvbnNbdmFsdWVdKHYsIHtcclxuICAgICAgICAuLi5iYXNlQWN0aW9uT3B0aW9uLFxyXG4gICAgICAgIGRhdGE6IG9yaWdpblN0b3JlW19rZXldLnN0YXRlLFxyXG4gICAgICAgIG5vdGljZSxcclxuICAgICAgICBzZXREYXRhLFxyXG4gICAgICAgIHF1ZXJ5LFxyXG4gICAgICAgIG11dGF0ZSxcclxuICAgICAgICBzdG9yZTogb3JpZ2luU3RvcmUsXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgT2JqZWN0LmtleXMoYWN0aW9ucykuZm9yRWFjaCh2YWx1ZSA9PiB7XHJcbiAgICAgIG9yaWdpblN0b3JlW19rZXldLmFjdGlvbnNbdmFsdWVdID0gKHY6IGFueSkgPT4gYWN0aW9uc1t2YWx1ZV0odiwge1xyXG4gICAgICAgIC4uLmJhc2VBY3Rpb25PcHRpb24sXHJcbiAgICAgICAgZGF0YTogb3JpZ2luU3RvcmVbX2tleV0uc3RhdGUsXHJcbiAgICAgICAgbm90aWNlLFxyXG4gICAgICAgIHNldERhdGEsXHJcbiAgICAgICAgcXVlcnksXHJcbiAgICAgICAgbXV0YXRlLFxyXG4gICAgICAgIHN0b3JlOiBvcmlnaW5TdG9yZSxcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSwgW19rZXksIGFjdGlvbnMsIG11dGF0ZSwgbm90aWNlLCBxdWVyeSwgc2V0RGF0YV0pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIG9yaWdpblN0b3JlW19rZXldLnNldERhdGEgPSBbXHJcbiAgICAgIC4uLm9yaWdpblN0b3JlW19rZXldLnNldERhdGEgPz8gW10sXHJcbiAgICAgIHNldFN0YXRlLFxyXG4gICAgXVxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgb3JpZ2luU3RvcmVbX2tleV0uc2V0RGF0YSA9IG9yaWdpblN0b3JlW19rZXldLnNldERhdGEuZmlsdGVyKHZhbHVlID0+IHZhbHVlICE9PSBzZXRTdGF0ZSlcclxuICAgIH1cclxuICB9LCBbX2tleV0pXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBzdGF0ZTogb3JpZ2luU3RvcmVbX2tleV0uc3RhdGUsXHJcbiAgICBhY3Rpb25zOiAob3JpZ2luU3RvcmVbX2tleV0uYWN0aW9ucykgYXMgRGVhbEZ1bk9iajx0eXBlb2YgYWN0aW9ucz4sXHJcbiAgICBzdG9yZTogb3JpZ2luU3RvcmUsXHJcbiAgICBnZXRMb2FkOiBxdWVyeSA9PiBvcmlnaW5TdG9yZVtfa2V5XS5zdGF0ZS5mZXRjaExvYWRbcXVlcnk/LmxvYz8uc291cmNlPy5ib2R5XSA/IDEgOiAwXHJcbiAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgJ2Nyb3NzLWZldGNoL3BvbHlmaWxsJ1xyXG5pbXBvcnQge2dldFRva2VuLCBzZXRUb2tlbn0gZnJvbSAnLi4vdG9vbHMvdG9rZW4nXHJcbmltcG9ydCB7T3BlcmF0aW9ufSBmcm9tICdhcG9sbG8tbGluaydcclxuaW1wb3J0IHtFcnJvckxpbmt9IGZyb20gJ2Fwb2xsby1saW5rLWVycm9yJ1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgQXBvbGxvQ2xpZW50IGZyb20gJ2Fwb2xsby1ib29zdCdcclxuaW1wb3J0IHtzc0xvZ30gZnJvbSAnLi4vdG9vbHMvZ2xvYmFsJ1xyXG5pbXBvcnQge0RvY3VtZW50Tm9kZX0gZnJvbSAnZ3JhcGhxbCdcclxuaW1wb3J0IHtkb2N9IGZyb20gJy4uL2dyYXBocWxUeXBlcy9kb2MnXHJcbmltcG9ydCB7c2hvd01lc3NhZ2V9IGZyb20gJy4uL2NvbXBvbmVudHMvTWVzc2FnZS9NZXNzYWdlJ1xyXG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gJ25leHQvY29uZmlnJ1xyXG5cclxuY29uc3QgY29uZmlnID0gZ2V0Q29uZmlnKClcclxuY29uc3QgY2xpZW50X2FwaV91cmkgPSBjb25maWc/LnB1YmxpY1J1bnRpbWVDb25maWc/LmNsaWVudF9hcGlfdXJpID8/ICdodHRwOi8vbG9jYWxob3N0OjQ0NjQvdHlwZV9fZ3JhcGhxbC9hcGknXHJcblxyXG5jb25zdCBvbWl0VHlwZW5hbWUgPSAoa2V5OiBhbnksIHZhbHVlOiBhbnkpID0+IHtcclxuICByZXR1cm4ga2V5ID09PSAnX190eXBlbmFtZScgPyB1bmRlZmluZWQgOiB2YWx1ZVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q2xpZW50ID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCByZXF1ZXN0OiAob3BlcmF0aW9uOiBPcGVyYXRpb24pID0+IFByb21pc2U8dm9pZD4gfCB2b2lkID0gKG9wZXJhdGlvbikgPT4ge1xyXG4gICAgaWYgKG9wZXJhdGlvbi52YXJpYWJsZXMpIHtcclxuICAgICAgb3BlcmF0aW9uLnZhcmlhYmxlcyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob3BlcmF0aW9uLnZhcmlhYmxlcyksIG9taXRUeXBlbmFtZSlcclxuICAgIH1cclxuICAgIG9wZXJhdGlvbi5zZXRDb250ZXh0KCh7aGVhZGVycyA9IHt9fSkgPT4gKHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIC4uLmhlYWRlcnMsXHJcbiAgICAgICAgLy8g5ZCO5Y+w5LiH6IO95p2D6ZmQXHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogZ2V0VG9rZW4oKSxcclxuICAgICAgfSxcclxuICAgIH0pKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVmcmVzaFRva2VuID0gKCkgPT4ge1xyXG4gICAgZ3JhcGhRTFF1ZXJ5KCkoZG9jLnJlZnJlc2hUb2tlbiwge1xyXG4gICAgICBkYXRhOiBnZXRUb2tlbigncmVmcmVzaHRva2VuJyksXHJcbiAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgIGlmIChyZXMuZGF0YT8ucmVmcmVzaFRva2VuPy50b2tlbikge1xyXG4gICAgICAgIHNldFRva2VuKHJlcy5kYXRhPy5yZWZyZXNoVG9rZW4/LnRva2VuKVxyXG4gICAgICAgIHNldFRva2VuKHJlcy5kYXRhPy5yZWZyZXNoVG9rZW4/LnJlZnJlc2h0b2tlbiwgJ3JlZnJlc2h0b2tlbicpXHJcbiAgICAgICAgc2hvd01lc3NhZ2Uoe21lc3NhZ2U6ICfnmbvlvZXotoXml7Ys5Yi35paw55m75b2V5L+h5oGvJ30pXHJcbiAgICAgICAgUm91dGVyLnJlbG9hZCgpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2hvd01lc3NhZ2Uoe21lc3NhZ2U6ICfor7fph43mlrDnmbvlvZUnfSlcclxuICAgICAgICBSb3V0ZXIucHVzaCgnL2xvZ2luJylcclxuICAgICAgfVxyXG4gICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgc3NMb2coZXJyKVxyXG4gICAgICBzaG93TWVzc2FnZSh7bWVzc2FnZTogJ+ivt+mHjeaWsOeZu+W9lSd9KVxyXG4gICAgICBSb3V0ZXIucHVzaCgnL2xvZ2luJylcclxuICAgIH0pXHJcbiAgfVxyXG4gIGNvbnN0IG9uRXJyb3I6IEVycm9yTGluay5FcnJvckhhbmRsZXIgPSAoe3Jlc3BvbnNlLCBvcGVyYXRpb24sIGdyYXBoUUxFcnJvcnMsIG5ldHdvcmtFcnJvcn0pID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgLy8gY29uc29sZS5sb2cob3BlcmF0aW9uKVxyXG4gICAgaWYgKGdyYXBoUUxFcnJvcnMpIHtcclxuICAgICAgZ3JhcGhRTEVycm9ycy5mb3JFYWNoKCh7bWVzc2FnZSwgbG9jYXRpb25zLCBwYXRoLCBleHRlbnNpb25zfSkgPT4ge1xyXG4gICAgICAgIHNzTG9nKFxyXG4gICAgICAgICAgICBgW0dyYXBoUUwgZXJyb3JdOiBNZXNzYWdlOiAke21lc3NhZ2V9LCBMb2NhdGlvbjogJHtsb2NhdGlvbnN9LCBQYXRoOiAke3BhdGh9YCxcclxuICAgICAgICApXHJcbiAgICAgICAgaWYgKGV4dGVuc2lvbnM/LmNvZGUgPT09ICdVTkFVVEhFTlRJQ0FURUQnKSB7XHJcbiAgICAgICAgICBpZiAobWVzc2FnZS5pbmNsdWRlcygnZmlyc3QnKSkge1xyXG4gICAgICAgICAgICByZWZyZXNoVG9rZW4oKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2hvd01lc3NhZ2Uoe21lc3NhZ2U6ICfor7fph43mlrDnmbvlvZUnfSlcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goJy9sb2dpbicpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtZXNzYWdlLmluY2x1ZGVzKCdVbmV4cGVjdGVkIGVycm9yJykpIHtcclxuICAgICAgICAgIHNob3dNZXNzYWdlKHtcclxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZS5zcGxpdCgnXCInKVsxXSxcclxuICAgICAgICAgICAgbXNnX3R5cGU6ICdlcnJvcicsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzaG93TWVzc2FnZSh7bWVzc2FnZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChuZXR3b3JrRXJyb3IpIHtcclxuICAgICAgY29uc3QgZXJyTXNnID0gKCdib2R5VGV4dCcgaW4gbmV0d29ya0Vycm9yKSA/IG5ldHdvcmtFcnJvcj8uYm9keVRleHQgOiAoJ3Jlc3VsdCcgaW4gbmV0d29ya0Vycm9yKSA/IG5ldHdvcmtFcnJvcj8ucmVzdWx0Py5lcnJvciA6ICcnXHJcbiAgICAgIHNzTG9nKGBbTmV0d29yayBlcnJvcl06ICR7ZXJyTXNnfWApXHJcbiAgICAgIGlmICgnc3RhdHVzQ29kZScgaW4gbmV0d29ya0Vycm9yICYmIG5ldHdvcmtFcnJvcj8uc3RhdHVzQ29kZSA9PT0gNDAxKSB7XHJcbiAgICAgICAgaWYgKGVyck1zZy5pbmNsdWRlcygnZmlyc3QnKSAmJiBnZXRUb2tlbigncmVmcmVzaHRva2VuJykpIHtcclxuICAgICAgICAgIHJlZnJlc2hUb2tlbigpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNob3dNZXNzYWdlKHttZXNzYWdlOiAn6K+36YeN5paw55m75b2VJ30pXHJcbiAgICAgICAgICBSb3V0ZXIucHVzaCgnL2xvZ2luJylcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBuZXcgQXBvbGxvQ2xpZW50KHtcclxuICAgIC8vIGxpbms6IGh0dHBMaW5rLFxyXG4gICAgdXJpOiBjbGllbnRfYXBpX3VyaSxcclxuICAgIHJlcXVlc3QsXHJcbiAgICBvbkVycm9yLFxyXG4gIH0pXHJcbn1cclxuXHJcbmNvbnN0IGRlZmF1bHRDbGllbnQgPSBnZXRDbGllbnQoKVxyXG5cclxuLy8gY29uc3QgZGVhbFBhcmFtcyA9ICgocGFyYW1zOiBhbnkpID0+ICh7XHJcbi8vICAgZGF0YTogcGFyYW1zLFxyXG4vLyB9KSlcclxuY29uc3QgZGVhbFBhcmFtcyA9ICgocGFyYW1zOiBhbnkpID0+IHBhcmFtcylcclxuXHJcbmV4cG9ydCBjb25zdCBncmFwaFFMUXVlcnkgPSAoY2xpZW50ID0gZGVmYXVsdENsaWVudCkgPT4gYXN5bmMgKHF1ZXJ5OiBEb2N1bWVudE5vZGUsIHBhcmFtczogYW55LCBvcHRpb24/OiBhbnkpID0+IHtcclxuICBjb25zdCBfZGVhbFBhcmFtc0luID0gb3B0aW9uPy5kZWFsUGFyYW1zSW4gPz8gZGVhbFBhcmFtc1xyXG4gIHJldHVybiBjbGllbnQucXVlcnkoe1xyXG4gICAgZmV0Y2hQb2xpY3k6ICduZXR3b3JrLW9ubHknLFxyXG4gICAgcXVlcnksXHJcbiAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgLi4uKF9kZWFsUGFyYW1zSW4gPyBfZGVhbFBhcmFtc0luKHBhcmFtcykgOiBwYXJhbXMpLFxyXG4gICAgfSxcclxuICAgIC4uLm9wdGlvbixcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ3JhcGhRTE11dGF0ZSA9IChjbGllbnQgPSBkZWZhdWx0Q2xpZW50KSA9PiBhc3luYyAobXV0YXRpb246IGFueSwgcGFyYW1zOiBhbnksIG9wdGlvbj86IGFueSkgPT4ge1xyXG4gIGNvbnN0IF9kZWFsUGFyYW1zSW4gPSBvcHRpb24/LmRlYWxQYXJhbXNJbiA/PyBkZWFsUGFyYW1zXHJcbiAgcmV0dXJuIGNsaWVudC5tdXRhdGUoe1xyXG4gICAgbXV0YXRpb24sXHJcbiAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgLi4uKF9kZWFsUGFyYW1zSW4gPyBfZGVhbFBhcmFtc0luKHBhcmFtcykgOiBwYXJhbXMpLFxyXG4gICAgfSxcclxuICAgIC4uLm9wdGlvbixcclxuICB9KVxyXG59XHJcblxyXG5jb25zdCBzZXJ2ZXJDbGllbnQgPSAoKSA9PiBuZXcgQXBvbGxvQ2xpZW50KHtcclxuICAvLyBsaW5rOiBodHRwTGluayxcclxuICB1cmk6IGNsaWVudF9hcGlfdXJpLFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHNlcnZlclF1ZXJ5ID0gYXN5bmMgKHF1ZXJ5OiBhbnksIHBhcmFtczogYW55LCBvcHRpb24/OiBhbnkpID0+IChhd2FpdCBncmFwaFFMUXVlcnkoc2VydmVyQ2xpZW50KCkpKHF1ZXJ5LCBwYXJhbXMsIG9wdGlvbikpPy5kYXRhXHJcblxyXG5leHBvcnQgY29uc3Qgc2VydmVyTXV0YXRlID0gYXN5bmMgKG11dGF0aW9uOiBhbnksIHBhcmFtczogYW55LCBvcHRpb24/OiBhbnkpID0+IChhd2FpdCBncmFwaFFMTXV0YXRlKHNlcnZlckNsaWVudCgpKShtdXRhdGlvbiwgcGFyYW1zLCBvcHRpb24pKT8uZGF0YVxyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQge1NuYWNrYmFyfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHthbWJlciwgYmx1ZSwgY29tbW9uLCBncmVlbiwgZ3JleSwgcmVkfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMnXHJcbmltcG9ydCB7U25hY2tiYXJQcm9wc30gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU25hY2tiYXIvU25hY2tiYXInXHJcbmltcG9ydCB7b3JpZ2luU3RvcmUsIHVzZVN0b3JlTW9kZWx9IGZyb20gJy4uLy4uL01vZGVsQWN0aW9uL3VzZVN0b3JlJ1xyXG5pbXBvcnQge2ZwTWVyZ2VQcmV9IGZyb20gJy4uLy4uL3Rvb2xzL3V0aWxzJ1xyXG5pbXBvcnQge21vZGVsRmFjdG9yeX0gZnJvbSAnLi4vLi4vTW9kZWxBY3Rpb24vbW9kZWxVdGlsJ1xyXG5pbXBvcnQgeyBscyB9IGZyb20gJy4uLy4uL3Rvb2xzL2RlYWxLZXknXHJcblxyXG5jb25zdCB0eXBlSGVscCA9IHtcclxuICBkZWZhdWx0OiBgYmFja2dyb3VuZDogJHtncmV5WzcwMF19O2AsXHJcbiAgc3VjY2VzczogYGJhY2tncm91bmQ6ICR7Z3JlZW5bNjAwXX07YCxcclxuICB3YXJuaW5nOiBgYmFja2dyb3VuZDogJHthbWJlcls3MDBdfTtgLFxyXG4gIGluZm86IGBiYWNrZ3JvdW5kOiAke2JsdWVbNzAwXX07YCxcclxuICBlcnJvcjogYGJhY2tncm91bmQ6ICR7cmVkWzcwMF19O2AsXHJcbn1cclxuY29uc3QgZ2V0VHlwZSA9ICh0eXBlID0gJ2RlZmF1bHQnKSA9PiAodHlwZUhlbHAgYXMgYW55KVt0eXBlXVxyXG5cclxudHlwZSBNZXNzYWdlUHJvcHMgPSBQYXJ0aWFsPFNuYWNrYmFyUHJvcHMgJiB7XHJcbiAgbXNnX3R5cGU6ICdkZWZhdWx0JyB8ICdzdWNjZXNzJyB8ICdpbmZvJyB8ICd3YXJuaW5nJyB8ICdlcnJvcicgfCBzdHJpbmdcclxufT5cclxuXHJcbmNvbnN0IEN1c1NuYWNrYmFyID0gc3R5bGVkKFNuYWNrYmFyKTxNZXNzYWdlUHJvcHM+YFxyXG4gICYmJiA+IGRpdiB7XHJcbiAgICBjb2xvcjogJHtjb21tb24ud2hpdGV9O1xyXG4gICAgJHsoe21zZ190eXBlfSkgPT4gZ2V0VHlwZShtc2dfdHlwZSl9XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBtZXNzYWdlTW9kZWwgPSBtb2RlbEZhY3RvcnkoJ21lc3NhZ2VNb2RlbCcsIHtcclxuICBvcGVuOiBmYWxzZSxcclxuICBtZXNzYWdlOiAnJyxcclxuICBhdXRvSGlkZUR1cmF0aW9uOiAyMDAwLFxyXG4gIG1zZ190eXBlOiAnZGVmYXVsdCcsXHJcbn0gYXMgTWVzc2FnZVByb3BzLCB7XHJcbiAgb3BlbjogKHZhbHVlOiBzdHJpbmcgfCBNZXNzYWdlUHJvcHMsIG9wdGlvbikgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgb3B0aW9uLnNldERhdGEoZnBNZXJnZVByZSh7XHJcbiAgICAgICAgYXV0b0hpZGVEdXJhdGlvbjogMjAwMCxcclxuICAgICAgICBtc2dfdHlwZTogJ2RlZmF1bHQnLFxyXG4gICAgICAgIG1lc3NhZ2U6IHZhbHVlLFxyXG4gICAgICAgIG9wZW46IHRydWUsXHJcbiAgICAgIH0pKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgb3B0aW9uLnNldERhdGEoZnBNZXJnZVByZSh7XHJcbiAgICAgICAgYXV0b0hpZGVEdXJhdGlvbjogMjAwMCxcclxuICAgICAgICBtc2dfdHlwZTogJ2RlZmF1bHQnLFxyXG4gICAgICAgIC4uLnZhbHVlLFxyXG4gICAgICAgIG9wZW46IHRydWUsXHJcbiAgICAgIH0pKVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgb25DbG9zZTogKHZhbHVlLCBvcHRpb24pID0+IG9wdGlvbi5zZXREYXRhKGZwTWVyZ2VQcmUoe1xyXG4gICAgb3BlbjogZmFsc2UsXHJcbiAgfSkpLFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IE1lc3NhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3Qge3N0YXRlOiBtU3RhdGUsIGFjdGlvbnN9ID0gdXNlU3RvcmVNb2RlbChtZXNzYWdlTW9kZWwpXHJcbiAgcmV0dXJuIDxDdXNTbmFja2JhclxyXG4gICAgICBvcGVuPXttU3RhdGUub3Blbn1cclxuICAgICAgYXV0b0hpZGVEdXJhdGlvbj17bVN0YXRlLmF1dG9IaWRlRHVyYXRpb259XHJcbiAgICAgIG1lc3NhZ2U9e2xzKG1TdGF0ZS5tZXNzYWdlIGFzIHN0cmluZyl9XHJcbiAgICAgIG1zZ190eXBlPXttU3RhdGUubXNnX3R5cGV9XHJcbiAgICAgIG9uQ2xvc2U9eygpID0+IGFjdGlvbnMub25DbG9zZSgpfVxyXG4gIC8+XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzaG93TWVzc2FnZSA9IChvcHRpb246IHN0cmluZyB8IE1lc3NhZ2VQcm9wcykgPT4ge1xyXG4gIG9yaWdpblN0b3JlWydtZXNzYWdlTW9kZWwnXS5hY3Rpb25zLm9wZW4ob3B0aW9uKVxyXG4gIHJldHVyblxyXG59XHJcbiIsImltcG9ydCB7Z3FsfSBmcm9tICdhcG9sbG8tYm9vc3QnXHJcblxyXG5leHBvcnQgY29uc3QgZnJhZ21lbnQgPSB7XHJcbiAgQ2F0ZWdvcnlGaWVsZHM6IGdxbGBcclxuICAgICAgZnJhZ21lbnQgQ2F0ZWdvcnkgb24gQ2F0ZWdvcnkge1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIG5hbWVcclxuICAgICAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgICAgIGlzRGVsZXRlXHJcbiAgICAgICAgICBpc0VuYWJsZVxyXG4gICAgICAgICAgcmVtYXJrXHJcbiAgICAgICAgICBzb3J0XHJcbiAgICAgICAgICBwYXJlbnRJZFxyXG4gICAgICAgICAgZnVsbFBhcmVudElkXHJcbiAgICAgICAgICBudW1iZXJcclxuICAgICAgICAgIHVzZXJJZFxyXG4gICAgICAgICAgaW1nVXJsXHJcbiAgICAgIH1cclxuICBgLFxyXG4gIFVzZXJGaWVsZHM6IGdxbGBcclxuICAgICAgZnJhZ21lbnQgVXNlckZpZWxkcyBvbiBVc2VyIHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICBjcmVhdGVUaW1lXHJcbiAgICAgICAgICB1cGRhdGVUaW1lXHJcbiAgICAgICAgICBpc0RlbGV0ZVxyXG4gICAgICAgICAgcGFzc3dvcmRcclxuICAgICAgICAgIHR5cGVcclxuICAgICAgfVxyXG4gIGAsXHJcbiAgVXNlckluZm9GaWVsZHM6IGdxbGBcclxuICAgICAgZnJhZ21lbnQgVXNlckluZm9GaWVsZHMgb24gVXNlckluZm8ge1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIG5hbWVcclxuICAgICAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgICAgIGlzRGVsZXRlXHJcbiAgICAgICAgICB1c2VySWRcclxuICAgICAgICAgIHBob25lXHJcbiAgICAgICAgICBlbWFpbFxyXG4gICAgICAgICAgdXNlckxldmVsXHJcbiAgICAgICAgICBwaWNrdXBBZGRyZXNzSWRcclxuICAgICAgfVxyXG4gIGAsXHJcbiAgT3JkZXJJbmZvRmllbGRzOiBncWxgXHJcbiAgICAgIGZyYWdtZW50IE9yZGVySW5mb0ZpZWxkcyBvbiBPcmRlckluZm8ge1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIG5hbWVcclxuICAgICAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgICAgIGlzRGVsZXRlXHJcbiAgICAgICAgICBudW1iZXJcclxuICAgICAgICAgIHN0YXRlXHJcbiAgICAgICAgICBhY3R1YWxseVBhaWRcclxuICAgICAgICAgIGFkZHJlc3NJZFxyXG4gICAgICAgICAgcGF5bWVudE1ldGhvZENhcmRJZFxyXG4gICAgICAgICAgc3VidG90YWxcclxuICAgICAgICAgIGNvdXBvbkRpc2NvdW50XHJcbiAgICAgICAgICB2aXBEaXNjb3VudFxyXG4gICAgICAgICAgdHJhbnNwb3J0YXRpb25Db3N0c1xyXG4gICAgICAgICAgc2FsZVRheFxyXG4gICAgICAgICAgb3JkZXJJZFxyXG4gICAgICAgICAgZGlzY291bnRQcm9kdWN0VG90YWxcclxuICAgICAgICAgIGZpbmlzaFRpbWVcclxuICAgICAgICAgIHBpY2tVcFRpbWVcclxuICAgICAgICAgIHBpY2tVcFR5cGVcclxuICAgICAgICAgIGdlbmVyYXRlQ29pblxyXG4gICAgICAgICAgZGVkdWN0Q29pblxyXG4gICAgICAgICAgc2VsZkFkZHJlc3NJZFxyXG4gICAgICAgICAgY3VycmVudFVzZXJMZXZlbFxyXG4gICAgICB9XHJcbiAgYCxcclxuICBST3JkZXJQcm9kdWN0RmllbGRzOiBncWxgXHJcbiAgICAgIGZyYWdtZW50IFJPcmRlclByb2R1Y3RGaWVsZHMgb24gUk9yZGVyUHJvZHVjdCB7XHJcbiAgICAgICAgICBjb3VudFxyXG4gICAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgICAgZGVhbFByaWNlXHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgaXNEZWxldGVcclxuICAgICAgICAgIG5hbWVcclxuICAgICAgICAgIG9yZGVySWRcclxuICAgICAgICAgIHByb2R1Y3RJZFxyXG4gICAgICAgICAgdXBkYXRlVGltZVxyXG4gICAgICB9XHJcbiAgYCxcclxuICBQcm9kdWN0RmllbGRzOiBncWxgXHJcbiAgICAgIGZyYWdtZW50IFByb2R1Y3RGaWVsZHMgb24gUHJvZHVjdCB7XHJcbiAgICAgICAgICBicmFuZFxyXG4gICAgICAgICAgY2F0ZWdvcnlJZFxyXG4gICAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgICAgZ3JvdXBBbW91bnRcclxuICAgICAgICAgIGdyb3VwQW1vdW50VW5pdFxyXG4gICAgICAgICAgZ3JvdXBQcmVjaXNpb25cclxuICAgICAgICAgIGdyb3VwUmVtYXJrXHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgaXNEZWxldGVcclxuICAgICAgICAgIGlzRW5hYmxlXHJcbiAgICAgICAgICBpc0dyb3VwXHJcbiAgICAgICAgICBpc0hvdFxyXG4gICAgICAgICAgaXNOZXdcclxuICAgICAgICAgIG5hbWVcclxuICAgICAgICAgIG51bWJlclxyXG4gICAgICAgICAgcGFja2luZ1VuaXRcclxuICAgICAgICAgIHByaWNlSW5cclxuICAgICAgICAgIHByaWNlTWFya2V0XHJcbiAgICAgICAgICBwcmljZU91dFxyXG4gICAgICAgICAgcmVtYXJrXHJcbiAgICAgICAgICBzaGVsdmVzVHlwZXNcclxuICAgICAgICAgIHNvcnRcclxuICAgICAgICAgIHN0b2NrXHJcbiAgICAgICAgICB1bml0XHJcbiAgICAgICAgICB1cGRhdGVUaW1lXHJcbiAgICAgICAgICB3ZWlnaHRcclxuICAgICAgICAgIHVuaXRTdHJpbmdcclxuICAgICAgICAgIGdyb3VwUHJlY2lzaW9uU3RyaW5nXHJcbiAgICAgICAgICBncm91cEFtb3VudFVuaXRTdHJpbmdcclxuICAgICAgICAgIHBhY2tpbmdVbml0U3RyaW5nXHJcbiAgICAgIH1cclxuICBgLFxyXG4gIEltZ0ZpZWxkczogZ3FsYFxyXG4gICAgZnJhZ21lbnQgSW1nRmllbGRzIG9uIFByb2R1Y3RJbWcge1xyXG4gICAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgICBpZFxyXG4gICAgICAgIGlzRGVsZXRlXHJcbiAgICAgICAgbmFtZVxyXG4gICAgICAgIG51bWJlclxyXG4gICAgICAgIHByb2R1Y3RJZFxyXG4gICAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgICB1cmxcclxuICAgIH0gXHJcbiAgYCxcclxuICBVc2VyQWRkcmVzc0ZpZWxkczogZ3FsYFxyXG4gICAgICBmcmFnbWVudCBVc2VyQWRkcmVzc0ZpZWxkcyBvbiBVc2VyQWRkcmVzcyB7XHJcbiAgICAgICAgICBhZGRyZXNzXHJcbiAgICAgICAgICBjaXR5XHJcbiAgICAgICAgICBjb21iaW5lQWRkcmVzc1xyXG4gICAgICAgICAgY29udGFjdEluZm9ybWF0aW9uXHJcbiAgICAgICAgICBjb250YWN0VXNlck5hbWVcclxuICAgICAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgICAgIGRpc3RyaWN0XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgaXNEZWZhdWx0XHJcbiAgICAgICAgICBpc0RlbGV0ZVxyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgcHJvdmluY2VcclxuICAgICAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgICAgIHVzZXJJZFxyXG4gICAgICAgICAgemlwXHJcbiAgICAgIH1cclxuICBgLFxyXG4gIFVzZXJQYXlDYXJkRmllbGRzOiBncWxgXHJcbiAgICAgIGZyYWdtZW50IFVzZXJQYXlDYXJkRmllbGRzIG9uIFVzZXJQYXlDYXJkIHtcclxuICAgICAgICAgIGFkZHJlc3NEZXRhaWxcclxuICAgICAgICAgIGNpdHlcclxuICAgICAgICAgIGNvZGVcclxuICAgICAgICAgIGNvbnRhY3RcclxuICAgICAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgICAgIGV4cGlyYXRpb25UaW1lXHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgaXNEZWZhdWx0XHJcbiAgICAgICAgICBpc0RlbGV0ZVxyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgbnVtYmVyXHJcbiAgICAgICAgICB1cGRhdGVUaW1lXHJcbiAgICAgICAgICB1c2VySWRcclxuICAgICAgICAgIHVzZXJOYW1lXHJcbiAgICAgICAgICB6aXBDb2RlXHJcbiAgICAgIH1cclxuICBgLFxyXG4gIFNob3BDYXJ0RmllbGRzOiBncWxgXHJcbiAgICAgIGZyYWdtZW50IFNob3BDYXJ0RmllbGRzIG9uIFNob3BDYXJ0IHtcclxuICAgICAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBpc0RlbGV0ZVxyXG4gICAgICAgICAgaXNOZXh0XHJcbiAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICBudW1iZXJcclxuICAgICAgICAgIHByb2R1Y3RJZFxyXG4gICAgICAgICAgdXBkYXRlVGltZVxyXG4gICAgICAgICAgdXNlcklkXHJcbiAgICAgIH1cclxuICBgLFxyXG4gIERhdGFDb25maWdGaWVsZHM6IGdxbGBcclxuICAgIGZyYWdtZW50IERhdGFDb25maWdGaWVsZHMgb24gRGF0YUNvbmZpZyB7XHJcbiAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgIGlkXHJcbiAgICAgICAgaXNEZWxldGVcclxuICAgICAgICBuYW1lXHJcbiAgICAgICAgcmVtYXJrXHJcbiAgICAgICAgdHlwZVxyXG4gICAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgICB2YWx1ZVxyXG4gICAgfVxyXG4gIGAsXHJcbiAgRGljdEZpZWxkczogZ3FsYFxyXG4gICAgZnJhZ21lbnQgRGljdEZpZWxkcyBvbiBEaWN0IHtcclxuICAgICAgICBjb2RlXHJcbiAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgIGRpY3RUeXBlQ29kZVxyXG4gICAgICAgIGlkXHJcbiAgICAgICAgaXNEZWxldGVcclxuICAgICAgICBpc0Rpc2FibGVcclxuICAgICAgICBuYW1lXHJcbiAgICAgICAgcmVtYXJrXHJcbiAgICAgICAgc29ydFxyXG4gICAgICAgIHVwZGF0ZVRpbWVcclxuICAgIH1cclxuICBgLFxyXG4gIEdyb3VwUXVldWVGaWVsZHM6IGdxbGBcclxuICAgICAgZnJhZ21lbnQgR3JvdXBRdWV1ZUZpZWxkcyBvbiBHcm91cFF1ZXVlIHtcclxuICAgICAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgICAgIGZpbGxBbW91bnRcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBpc0RlbGV0ZVxyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgcHJvZHVjdElkXHJcbiAgICAgICAgICB1cGRhdGVUaW1lXHJcbiAgICAgICAgICBzdW1GaWxsQW1vdW50XHJcbiAgICAgIH1cclxuICBgLFxyXG4gIEdyb3VwT3JkZXJGaWVsZHM6IGdxbGBcclxuICAgICAgZnJhZ21lbnQgR3JvdXBPcmRlckZpZWxkcyBvbiBHcm91cE9yZGVyIHtcclxuICAgICAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgICAgIGdyb3VwUXVldWVJZFxyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIGlzRGVsZXRlXHJcbiAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICBvcmRlckdyb3VwQW1vdW50XHJcbiAgICAgICAgICBvcmRlcklkXHJcbiAgICAgICAgICB1cGRhdGVUaW1lXHJcbiAgICAgICAgICB1c2VySWRcclxuICAgICAgfVxyXG4gIGAsXHJcbiAgUHJvbW9Db2RlRmllbGRzOiBncWxgXHJcbiAgICAgIGZyYWdtZW50IFByb21vQ29kZUZpZWxkcyBvbiBQcm9tb0NvZGUge1xyXG4gICAgICAgICAgY29kZVxyXG4gICAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgICAgZGlzY291bnRBbW91bnRcclxuICAgICAgICAgIGRpc2NvdW50Q29uZGl0aW9uXHJcbiAgICAgICAgICBkaXNjb3VudENvbmRpdGlvbkFtb3VudFxyXG4gICAgICAgICAgZGlzY291bnRUeXBlXHJcbiAgICAgICAgICBlZmZlY3RpdmVEYXRlRW5kXHJcbiAgICAgICAgICBlZmZlY3RpdmVEYXRlU3RhcnRcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBpbWdVcmxcclxuICAgICAgICAgIGlzRGVsZXRlXHJcbiAgICAgICAgICBpc0Rpc2FibGVcclxuICAgICAgICAgIG5hbWVcclxuICAgICAgICAgIHByb2R1Y3RDYXRlZ29yeVxyXG4gICAgICAgICAgcHJvbW9Db2RlVHlwZVxyXG4gICAgICAgICAgcmVtYXJrXHJcbiAgICAgICAgICByZXVzZVRpbWVzXHJcbiAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgdXBkYXRlVGltZVxyXG4gICAgICB9XHJcbiAgYCxcclxufVxyXG4iLCJpbXBvcnQge2dxbH0gZnJvbSAnYXBvbGxvLWJvb3N0J1xyXG5pbXBvcnQge2ZyYWdtZW50fSBmcm9tICcuL2ZyYWdtZW50J1xyXG5pbXBvcnQge0RpY3RUeXBlRW51bX0gZnJvbSAnLi4vLi4vc3NfY29tbW9uL2VudW0nXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VXNlckxpc3REb2MgPSBncWxgXHJcbiAgcXVlcnkgcmVmYWN0b3JlZDY0MygkZGF0YTogVXNlckxpc3RJbnB1dCEpIHtcclxuICAgIHVzZXJMaXN0KHVzZXJMaXN0SW5wdXQ6ICRkYXRhKSB7XHJcbiAgICAgIGxpc3Qge1xyXG4gICAgICAgIG9yZGVyQ29pbk5leHRNb250aFxyXG4gICAgICAgIG9yZGVyQ29pbkN1cnJlbnRNb250aFxyXG4gICAgICAgIG9yZGVyQW1vdW50Q3VycmVudFllYXJcclxuICAgICAgICAuLi51c2VySW5mb1xyXG4gICAgICAgIC4uLlVzZXJGaWVsZHNcclxuICAgICAgICAuLi5vcmRlckluZm9cclxuICAgICAgfVxyXG4gICAgICB0b3RhbFxyXG4gICAgfVxyXG4gIH1cclxuICBmcmFnbWVudCBvcmRlckluZm8gb24gVXNlcntcclxuICAgIG9yZGVySW5mb3tcclxuICAgICAgaWRcclxuICAgICAgbmFtZVxyXG4gICAgICBjcmVhdGVUaW1lXHJcbiAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgaXNEZWxldGVcclxuICAgICAgbnVtYmVyXHJcbiAgICAgIHN0YXRlXHJcbiAgICAgIGFjdHVhbGx5UGFpZFxyXG4gICAgICBhZGRyZXNzSWRcclxuICAgICAgcGF5bWVudE1ldGhvZENhcmRJZFxyXG4gICAgICBzdWJ0b3RhbFxyXG4gICAgICBjb3Vwb25EaXNjb3VudFxyXG4gICAgICB2aXBEaXNjb3VudFxyXG4gICAgICB0cmFuc3BvcnRhdGlvbkNvc3RzXHJcbiAgICAgIHNhbGVUYXhcclxuICAgICAgb3JkZXJJZFxyXG4gICAgICBkaXNjb3VudFByb2R1Y3RUb3RhbFxyXG4gICAgICBmaW5pc2hUaW1lXHJcbiAgICAgIHBpY2tVcFRpbWVcclxuICAgICAgcGlja1VwVHlwZVxyXG4gICAgfVxyXG4gIH1cclxuICBmcmFnbWVudCBVc2VyRmllbGRzIG9uIFVzZXIge1xyXG4gICAgaWRcclxuICAgIG5hbWVcclxuICAgIGNyZWF0ZVRpbWVcclxuICAgIHVwZGF0ZVRpbWVcclxuICAgIGlzRGVsZXRlXHJcbiAgICBwYXNzd29yZFxyXG4gICAgdHlwZVxyXG4gIH1cclxuICBmcmFnbWVudCB1c2VySW5mbyBvbiBVc2Vye1xyXG4gICAgdXNlckluZm97XHJcbiAgICAgIGlkXHJcbiAgICAgIG5hbWVcclxuICAgICAgY3JlYXRlVGltZVxyXG4gICAgICB1cGRhdGVUaW1lXHJcbiAgICAgIGlzRGVsZXRlXHJcbiAgICAgIHVzZXJJZFxyXG4gICAgICBwaG9uZVxyXG4gICAgICBlbWFpbFxyXG4gICAgICB1c2VyTGV2ZWxcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBnZXREYXRhQ29uZmlnID0gZ3FsYFxyXG4gIHF1ZXJ5ICgkZGF0YTogRGF0YUNvbmZpZ0l0ZW1JbnB1dCkge1xyXG4gICAgZ2V0RGF0YUNvbmZpZyhkYXRhQ29uZmlnSW5wdXQ6ICRkYXRhKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIG5hbWVcclxuICAgICAgY3JlYXRlVGltZVxyXG4gICAgICB1cGRhdGVUaW1lXHJcbiAgICAgIGlzRGVsZXRlXHJcbiAgICAgIHR5cGVcclxuICAgICAgdmFsdWVcclxuICAgICAgcmVtYXJrXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgaG9tZUNhcm91c2VsSW1ncyA9IGdxbGBcclxuICBxdWVyeSBxdWVyeV9xdWVyeV90ZXN0TG9uZzEzNygkZGF0YTogRGF0YUNvbmZpZ0l0ZW1JbnB1dCkge1xyXG4gICAgaG9tZUNhcm91c2VsSW1ncyhkYXRhQ29uZmlnSW5wdXQ6ICRkYXRhKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIG5hbWVcclxuICAgICAgY3JlYXRlVGltZVxyXG4gICAgICB1cGRhdGVUaW1lXHJcbiAgICAgIGlzRGVsZXRlXHJcbiAgICAgIHR5cGVcclxuICAgICAgdmFsdWVcclxuICAgICAgcmVtYXJrXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgY2F0ZWdvcnlMaXN0ID0gZ3FsYFxyXG4gIHF1ZXJ5IHF1ZXJ5X3F1ZXJ5X3Rlc3RMb25nNTY1KCRkYXRhOiBDYXRlZ29yeUxpc3RJbnB1dCkge1xyXG4gICAgY2F0ZWdvcnlMaXN0KGRhdGE6ICRkYXRhKSB7XHJcbiAgICAgIHRvdGFsXHJcbiAgICAgIGxpc3Qge1xyXG4gICAgICAgIC4uLkNhdGVnb3J5XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgJHtmcmFnbWVudC5DYXRlZ29yeUZpZWxkc31cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IGRvYyA9IHtcclxuICBnZXRVc2VyTGlzdERvYyxcclxuICBjYXRlZ29yeUxpc3QsXHJcbiAgZ2V0RGF0YUNvbmZpZyxcclxuICBob21lQ2Fyb3VzZWxJbWdzLFxyXG4gIHJlZ2lzdGVyVXNlcjogZ3FsYFxyXG4gICAgbXV0YXRpb24gbXV0YXRpb25fcmVnaXN0ZXJVc2U5OTgoJGRhdGE6IFVzZXJJdGVtSW5wdXQpIHtcclxuICAgICAgcmVnaXN0ZXJVc2VyKGRhdGE6ICRkYXRhKSB7XHJcbiAgICAgICAgdG9rZW5cclxuICAgICAgICByZWZyZXNodG9rZW5cclxuICAgICAgICB1c2VyIHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICBjcmVhdGVUaW1lXHJcbiAgICAgICAgICB1cGRhdGVUaW1lXHJcbiAgICAgICAgICBpc0RlbGV0ZVxyXG4gICAgICAgICAgcGFzc3dvcmRcclxuICAgICAgICAgIHR5cGVcclxuICAgICAgICAgIHVzZXJJbmZvIHtcclxuICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIGAsXHJcbiAgcmVmcmVzaFRva2VuOiBncWxgXHJcbiAgICBxdWVyeSByZWZyZXNoVG9rZW4oJGRhdGE6IFN0cmluZyEpIHtcclxuICAgICAgcmVmcmVzaFRva2VuKHJlZnJlc2h0b2tlbjogJGRhdGEpIHtcclxuICAgICAgICByZWZyZXNodG9rZW5cclxuICAgICAgICB0b2tlblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgYCxcclxuICBsb2dpbjogZ3FsYFxyXG4gICAgcXVlcnkgbG9naW4oJGRhdGE6IFVzZXJJdGVtSW5wdXQpIHtcclxuICAgICAgbG9naW4odXNlcjogJGRhdGEpIHtcclxuICAgICAgICB0b2tlblxyXG4gICAgICAgIHJlZnJlc2h0b2tlblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgYCxcclxuICBvbmVVc2VyOiBncWxgXHJcbiAgICBxdWVyeSBvbmVVc2VyIHtcclxuICAgICAgb25lVXNlciB7XHJcbiAgICAgICAgLi4uVXNlckZpZWxkc1xyXG4gICAgICAgIHVzZXJJbmZvIHtcclxuICAgICAgICAgIC4uLlVzZXJJbmZvRmllbGRzXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAke2ZyYWdtZW50LlVzZXJJbmZvRmllbGRzfVxyXG4gICAgJHtmcmFnbWVudC5Vc2VyRmllbGRzfVxyXG4gIGAsXHJcbiAgb3JkZXJMaXN0OiBncWxgXHJcbiAgICBxdWVyeSBvcmRlckxpc3QoJGRhdGE6IE9yZGVySW5wdXQpe1xyXG4gICAgICBvcmRlckxpc3QgKG9yZGVySW5wdXQ6ICRkYXRhLCBmcm9tVXNlcjogdHJ1ZSkge1xyXG4gICAgICAgIGxpc3Qge1xyXG4gICAgICAgICAgLi4uT3JkZXJJbmZvRmllbGRzXHJcbiAgICAgICAgICByT3JkZXJQcm9kdWN0IHtcclxuICAgICAgICAgICAgLi4uUk9yZGVyUHJvZHVjdEZpZWxkc1xyXG4gICAgICAgICAgICBwcm9kdWN0IHtcclxuICAgICAgICAgICAgICAuLi5Qcm9kdWN0RmllbGRzXHJcbiAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIC4uLkltZ0ZpZWxkc1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5PcmRlckluZm9GaWVsZHN9XHJcbiAgICAke2ZyYWdtZW50LlJPcmRlclByb2R1Y3RGaWVsZHN9XHJcbiAgICAke2ZyYWdtZW50LlByb2R1Y3RGaWVsZHN9XHJcbiAgICAke2ZyYWdtZW50LkltZ0ZpZWxkc31cclxuICBgLFxyXG4gIG9yZGVyRGV0YWlsOiBncWxgXHJcbiAgICBxdWVyeSAoJGlkOiBTdHJpbmcpIHtcclxuICAgICAgc2VsZkFkZHJlc3M6IGdldERhdGFDb25maWcoZGF0YUNvbmZpZ0lucHV0OiB7XHJcbiAgICAgICAgdHlwZTogXCIke0RpY3RUeXBlRW51bS5TZWxmQWRkcmVzc31cIlxyXG4gICAgICB9KSB7XHJcbiAgICAgICAgLi4uRGF0YUNvbmZpZ0ZpZWxkc1xyXG4gICAgICB9XHJcbiAgICAgIG9yZGVyRGV0YWlsKGlkOiAkaWQpIHtcclxuICAgICAgICAuLi5PcmRlckluZm9GaWVsZHNcclxuICAgICAgICByT3JkZXJQcm9kdWN0IHtcclxuICAgICAgICAgIC4uLlJPcmRlclByb2R1Y3RGaWVsZHNcclxuICAgICAgICAgIHByb2R1Y3Qge1xyXG4gICAgICAgICAgICAuLi5Qcm9kdWN0RmllbGRzXHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgLi4uSW1nRmllbGRzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdXNlciB7XHJcbiAgICAgICAgICAuLi5Vc2VyRmllbGRzXHJcbiAgICAgICAgICB1c2VySW5mbyB7XHJcbiAgICAgICAgICAgIC4uLlVzZXJJbmZvRmllbGRzXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHVzZXJBZGRyZXNzIHtcclxuICAgICAgICAgIC4uLlVzZXJBZGRyZXNzRmllbGRzXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHVzZXJQYXlDYXJkIHtcclxuICAgICAgICAgIC4uLlVzZXJQYXlDYXJkRmllbGRzXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAke2ZyYWdtZW50LkRhdGFDb25maWdGaWVsZHN9XHJcbiAgICAke2ZyYWdtZW50Lk9yZGVySW5mb0ZpZWxkc31cclxuICAgICR7ZnJhZ21lbnQuUk9yZGVyUHJvZHVjdEZpZWxkc31cclxuICAgICR7ZnJhZ21lbnQuUHJvZHVjdEZpZWxkc31cclxuICAgICR7ZnJhZ21lbnQuSW1nRmllbGRzfVxyXG4gICAgJHtmcmFnbWVudC5Vc2VyRmllbGRzfVxyXG4gICAgJHtmcmFnbWVudC5Vc2VySW5mb0ZpZWxkc31cclxuICAgICR7ZnJhZ21lbnQuVXNlclBheUNhcmRGaWVsZHN9XHJcbiAgICAke2ZyYWdtZW50LlVzZXJBZGRyZXNzRmllbGRzfVxyXG4gIGAsXHJcbiAgdXBkYXRlUGFzc3dvcmQ6IGdxbGBcclxuICAgIG11dGF0aW9uICgkZGF0YTogVXBkYXRlUGFzc3dvcmRJbnB1dCkge1xyXG4gICAgICB1cGRhdGVQYXNzd29yZCAoZGF0YTogJGRhdGEpIHtcclxuICAgICAgICB1c2VyIHtcclxuICAgICAgICAgIC4uLlVzZXJGaWVsZHNcclxuICAgICAgICB9XHJcbiAgICAgICAgYXV0aEJvZHkge1xyXG4gICAgICAgICAgdG9rZW5cclxuICAgICAgICAgIHJlZnJlc2h0b2tlblxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5Vc2VyRmllbGRzfVxyXG4gIGAsXHJcbiAgcGF5Q2FyZExpc3RPbmVVc2VyOiBncWxgXHJcbiAgICBxdWVyeSB7XHJcbiAgICAgIHBheUNhcmRMaXN0T25lVXNlciB7XHJcbiAgICAgICAgLi4uVXNlclBheUNhcmRGaWVsZHNcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5Vc2VyUGF5Q2FyZEZpZWxkc31cclxuICBgLFxyXG4gIHVzZXJQYXlDYXJkOiBncWxgXHJcbiAgICBxdWVyeSAoJGRhdGE6IFVzZXJQYXlDYXJkSXRlbUlucHV0KSB7XHJcbiAgICAgIHVzZXJQYXlDYXJkICh1c2VyUGF5Q2FyZDogJGRhdGEpIHtcclxuICAgICAgICAuLi5Vc2VyUGF5Q2FyZEZpZWxkc1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAke2ZyYWdtZW50LlVzZXJQYXlDYXJkRmllbGRzfVxyXG4gIGAsXHJcbiAgc2F2ZVVzZXJQYXlDYXJkOiBncWxgXHJcbiAgICBtdXRhdGlvbiAoJGRhdGE6IFVzZXJQYXlDYXJkSXRlbUlucHV0KXtcclxuICAgICAgc2F2ZVVzZXJQYXlDYXJkICh1c2VyUGF5Q2FyZDogJGRhdGEpIHtcclxuICAgICAgICAuLi5Vc2VyUGF5Q2FyZEZpZWxkc1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAke2ZyYWdtZW50LlVzZXJQYXlDYXJkRmllbGRzfVxyXG4gIGAsXHJcbiAgc2V0VXNlclBheUNhcmREZWZhdWx0OiBncWxgXHJcbiAgICBtdXRhdGlvbiAoJGRhdGE6IFVzZXJQYXlDYXJkSXRlbUlucHV0KSB7XHJcbiAgICAgIHNldFVzZXJQYXlDYXJkRGVmYXVsdCAodXNlclBheUNhcmQ6ICRkYXRhKSB7XHJcbiAgICAgICAgLi4uVXNlclBheUNhcmRGaWVsZHNcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5Vc2VyUGF5Q2FyZEZpZWxkc31cclxuICBgLFxyXG4gIHBpY2t1cEFkZHJlc3M6IGdxbGBcclxuICAgIHF1ZXJ5IHtcclxuICAgICAgZ2V0RGF0YUNvbmZpZyhkYXRhQ29uZmlnSW5wdXQ6IHtcclxuICAgICAgICB0eXBlOiBcIiR7RGljdFR5cGVFbnVtLlNlbGZBZGRyZXNzfVwiXHJcbiAgICAgIH0pIHtcclxuICAgICAgICAuLi5EYXRhQ29uZmlnRmllbGRzXHJcbiAgICAgIH1cclxuICAgICAgb25lVXNlciB7XHJcbiAgICAgICAgLi4uVXNlckZpZWxkc1xyXG4gICAgICAgIHVzZXJJbmZvIHtcclxuICAgICAgICAgIC4uLlVzZXJJbmZvRmllbGRzXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAke2ZyYWdtZW50LlVzZXJJbmZvRmllbGRzfVxyXG4gICAgJHtmcmFnbWVudC5EYXRhQ29uZmlnRmllbGRzfVxyXG4gICAgJHtmcmFnbWVudC5Vc2VyRmllbGRzfVxyXG4gIGAsXHJcbiAgdXBkYXRlVXNlckluZm86IGdxbGBcclxuICAgIG11dGF0aW9uICgkdXNlckluZm86IFVzZXJJbmZvSXRlbUlucHV0KSB7XHJcbiAgICAgIHVwZGF0ZVVzZXJJbmZvICh1c2VySW5mbzogJHVzZXJJbmZvKSB7XHJcbiAgICAgICAgLi4uVXNlckluZm9GaWVsZHNcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5Vc2VySW5mb0ZpZWxkc31cclxuICBgLFxyXG4gIHVzZXJBZGRyZXNzTGlzdE9uZVVzZXI6IGdxbGBcclxuICAgIHF1ZXJ5IHtcclxuICAgICAgdXNlckFkZHJlc3NMaXN0T25lVXNlciB7XHJcbiAgICAgICAgLi4uVXNlckFkZHJlc3NGaWVsZHNcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5Vc2VyQWRkcmVzc0ZpZWxkc31cclxuICBgLFxyXG4gIHVzZXJBZGRyZXNzOiBncWxgXHJcbiAgICBxdWVyeSAoJGRhdGE6IFVzZXJBZGRyZXNzSXRlbUlucHV0KSB7XHJcbiAgICAgIHVzZXJBZGRyZXNzICh1c2VyQWRkcmVzczogJGRhdGEpIHtcclxuICAgICAgICAuLi5Vc2VyQWRkcmVzc0ZpZWxkc1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAke2ZyYWdtZW50LlVzZXJBZGRyZXNzRmllbGRzfVxyXG4gIGAsXHJcbiAgc2F2ZVVzZXJBZGRyZXNzOiBncWxgXHJcbiAgICBtdXRhdGlvbiAoJGRhdGE6IFVzZXJBZGRyZXNzSXRlbUlucHV0KXtcclxuICAgICAgc2F2ZVVzZXJBZGRyZXNzICh1c2VyQWRkcmVzczogJGRhdGEpIHtcclxuICAgICAgICAuLi5Vc2VyQWRkcmVzc0ZpZWxkc1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAke2ZyYWdtZW50LlVzZXJBZGRyZXNzRmllbGRzfVxyXG4gIGAsXHJcbiAgc2V0VXNlckFkZHJlc3NEZWZhdWx0OiBncWxgXHJcbiAgICBtdXRhdGlvbiAoJGRhdGE6IFVzZXJBZGRyZXNzSXRlbUlucHV0KSB7XHJcbiAgICAgIHNldFVzZXJBZGRyZXNzRGVmYXVsdCAodXNlckFkZHJlc3M6ICRkYXRhKSB7XHJcbiAgICAgICAgLi4uVXNlckFkZHJlc3NGaWVsZHNcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5Vc2VyQWRkcmVzc0ZpZWxkc31cclxuICBgLFxyXG4gIHByb2R1Y3RzSW5DYXRlZ29yeTogZ3FsYFxyXG4gICAgcXVlcnkgKCRkYXRhOiBDYXRlZ29yeUl0ZW1JbnB1dCwgJHByb2R1Y3RJdGVtSW5wdXQ6IFByb2R1Y3RJdGVtSW5wdXQpIHtcclxuICAgICAgcHJvZHVjdHNJbkNhdGVnb3J5KGNhdGVnb3J5SXRlbUlucHV0OiAkZGF0YSwgcHJvZHVjdEl0ZW1JbnB1dDogJHByb2R1Y3RJdGVtSW5wdXQpIHtcclxuICAgICAgICAuLi5Qcm9kdWN0RmllbGRzXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIC4uLkltZ0ZpZWxkc1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjYXRlZ29yeUxpc3QoZGF0YToge1xyXG4gICAgICAgIGNhdGVnb3J5OiB7XHJcbiAgICAgICAgICBwYXJlbnRDYXRlZ29yeTogJGRhdGFcclxuICAgICAgICB9XHJcbiAgICAgIH0pIHtcclxuICAgICAgICB0b3RhbFxyXG4gICAgICAgIGxpc3Qge1xyXG4gICAgICAgICAgLi4uQ2F0ZWdvcnlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuUHJvZHVjdEZpZWxkc31cclxuICAgICR7ZnJhZ21lbnQuSW1nRmllbGRzfVxyXG4gICAgJHtmcmFnbWVudC5DYXRlZ29yeUZpZWxkc31cclxuICBgLFxyXG4gIGNhdGVnb3J5TGV2ZWw6IGdxbGBcclxuICAgIHF1ZXJ5ICgkZGF0YTogQ2F0ZWdvcnlJdGVtSW5wdXQpIHtcclxuICAgICAgY2F0ZWdvcnlMZXZlbChjYXRlZ29yeUl0ZW1JbnB1dDogJGRhdGEpXHJcbiAgICB9XHJcbiAgYCxcclxuICBvbmVDYXRlZ29yeTogZ3FsYFxyXG4gICAgcXVlcnkgKCRkYXRhOiBDYXRlZ29yeUl0ZW1JbnB1dCkge1xyXG4gICAgICBvbmVDYXRlZ29yeShkYXRhOiAkZGF0YSkge1xyXG4gICAgICAgIC4uLkNhdGVnb3J5XHJcbiAgICAgICAgcGFyZW50Q2F0ZWdvcnkge1xyXG4gICAgICAgICAgLi4uQ2F0ZWdvcnlcclxuICAgICAgICAgIHBhcmVudENhdGVnb3J5IHtcclxuICAgICAgICAgICAgLi4uQ2F0ZWdvcnlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuQ2F0ZWdvcnlGaWVsZHN9XHJcbiAgYCxcclxuICBwcm9kdWN0TGlzdDogZ3FsYFxyXG4gICAgcXVlcnkgKCRwcm9kdWN0SW5wdXQ6IFByb2R1Y3RJdGVtSW5wdXQsICRvcmRlckJ5SW5wdXQ6IE9yZGVyQnlJbnB1dCkge1xyXG4gICAgICBwcm9kdWN0TGlzdChwcm9kdWN0SW5wdXQ6ICRwcm9kdWN0SW5wdXQsIG9yZGVyQnlJbnB1dDogJG9yZGVyQnlJbnB1dCkge1xyXG4gICAgICAgIHRvdGFsXHJcbiAgICAgICAgbGlzdCB7XHJcbiAgICAgICAgICAuLi5Qcm9kdWN0RmllbGRzXHJcbiAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAuLi5JbWdGaWVsZHNcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuUHJvZHVjdEZpZWxkc31cclxuICAgICR7ZnJhZ21lbnQuSW1nRmllbGRzfVxyXG4gIGAsXHJcbiAgdXBkYXRlTnVtU2hvcENhcnQ6IGdxbGBcclxuICAgIG11dGF0aW9uICgkc2hvcENhcnQ6IFNob3BDYXJ0SXRlbUlucHV0LCAkdXBkYXRlTnVtOiBGbG9hdCkge1xyXG4gICAgICB1cGRhdGVOdW1TaG9wQ2FydCAoc2hvcENhcnQ6ICRzaG9wQ2FydCwgdXBkYXRlTnVtOiAkdXBkYXRlTnVtKSB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBudW1iZXJcclxuICAgICAgICBwcm9kdWN0IHtcclxuICAgICAgICAgIC4uLlByb2R1Y3RGaWVsZHNcclxuICAgICAgICB9XHJcbiAgICAgICAgdXNlciB7XHJcbiAgICAgICAgICAuLi5Vc2VyRmllbGRzXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAke2ZyYWdtZW50LlByb2R1Y3RGaWVsZHN9XHJcbiAgICAke2ZyYWdtZW50LlVzZXJGaWVsZHN9XHJcbiAgYCxcclxuICB1c2VyU2hvcENhcnRMaXN0OiBncWxgXHJcbiAgICBxdWVyeSB7XHJcbiAgICAgIHNob3BDYXJ0TGlzdCB7XHJcbiAgICAgICAgLi4uU2hvcENhcnRGaWVsZHNcclxuICAgICAgICBwcm9kdWN0IHtcclxuICAgICAgICAgIC4uLlByb2R1Y3RGaWVsZHNcclxuICAgICAgICAgIGNhdGVnb3J5IHtcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgcGFyZW50Q2F0ZWdvcnkge1xyXG4gICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgcGFyZW50Q2F0ZWdvcnkge1xyXG4gICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIC4uLkltZ0ZpZWxkc1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5TaG9wQ2FydEZpZWxkc31cclxuICAgICR7ZnJhZ21lbnQuUHJvZHVjdEZpZWxkc31cclxuICAgICR7ZnJhZ21lbnQuSW1nRmllbGRzfVxyXG4gIGAsXHJcbiAgdXBkYXRlU2hvcENhcnQ6IGdxbGBcclxuICAgIG11dGF0aW9uICgkc2hvcENhcnQ6IFNob3BDYXJ0SXRlbUlucHV0KXtcclxuICAgICAgdXBkYXRlU2hvcENhcnQgKHNob3BDYXJ0OiAkc2hvcENhcnQpIHtcclxuICAgICAgICAuLi5TaG9wQ2FydEZpZWxkc1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAke2ZyYWdtZW50LlNob3BDYXJ0RmllbGRzfVxyXG4gIGAsXHJcbiAgb3JkZXJDb25maXJtSW5mbzogZ3FsYFxyXG4gICAgcXVlcnkge1xyXG4gICAgICBnZXREYXRhQ29uZmlnKGRhdGFDb25maWdJbnB1dDoge1xyXG4gICAgICAgIHR5cGU6IFwiJHtEaWN0VHlwZUVudW0uU2VsZkFkZHJlc3N9XCJcclxuICAgICAgfSkge1xyXG4gICAgICAgIC4uLkRhdGFDb25maWdGaWVsZHNcclxuICAgICAgfVxyXG4gICAgICBvbmVVc2VyIHtcclxuICAgICAgICAuLi5Vc2VyRmllbGRzXHJcbiAgICAgICAgdXNlckluZm8ge1xyXG4gICAgICAgICAgLi4uVXNlckluZm9GaWVsZHNcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcGF5Q2FyZExpc3RPbmVVc2VyIHtcclxuICAgICAgICAuLi5Vc2VyUGF5Q2FyZEZpZWxkc1xyXG4gICAgICB9XHJcbiAgICAgIHVzZXJBZGRyZXNzTGlzdE9uZVVzZXIge1xyXG4gICAgICAgIC4uLlVzZXJBZGRyZXNzRmllbGRzXHJcbiAgICAgIH1cclxuICAgICAgZnJlaWdodENvbmZpZzogZ2V0RGF0YUNvbmZpZyAoZGF0YUNvbmZpZ0lucHV0OiB7XHJcbiAgICAgICAgdHlwZTogXCIke0RpY3RUeXBlRW51bS5GcmVpZ2h0fVwiXHJcbiAgICAgIH0pIHtcclxuICAgICAgICAuLi5EYXRhQ29uZmlnRmllbGRzXHJcbiAgICAgIH1cclxuICAgICAgdXNlckxldmVsTGlzdDogZ2V0RGljdExpc3QgKGRpY3RJbnB1dDoge1xyXG4gICAgICAgIGRpY3RUeXBlQ29kZTogXCJVc2VyTGV2ZWxcIlxyXG4gICAgICB9KSB7XHJcbiAgICAgICAgLi4uRGljdEZpZWxkc1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAke2ZyYWdtZW50LlVzZXJBZGRyZXNzRmllbGRzfVxyXG4gICAgJHtmcmFnbWVudC5Vc2VyUGF5Q2FyZEZpZWxkc31cclxuICAgICR7ZnJhZ21lbnQuVXNlckluZm9GaWVsZHN9XHJcbiAgICAke2ZyYWdtZW50LlVzZXJGaWVsZHN9XHJcbiAgICAke2ZyYWdtZW50LkRhdGFDb25maWdGaWVsZHN9XHJcbiAgICAke2ZyYWdtZW50LkRpY3RGaWVsZHN9XHJcbiAgYCxcclxuICBzYXZlT3JkZXI6IGdxbGBcclxuICAgIG11dGF0aW9uICgkb3JkZXJJbmZvSXRlbUlucHV0OiBPcmRlckluZm9JdGVtSW5wdXQpIHtcclxuICAgICAgc2F2ZU9yZGVyIChvcmRlckluZm9JdGVtSW5wdXQ6ICRvcmRlckluZm9JdGVtSW5wdXQpIHtcclxuICAgICAgICAuLi5PcmRlckluZm9GaWVsZHNcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5PcmRlckluZm9GaWVsZHN9XHJcbiAgYCxcclxuICBkaWN0TGlzdDogZ3FsYFxyXG4gICAgcXVlcnkgKCRkYXRhOiBEaWN0SW5wdXQpIHtcclxuICAgICAgZ2V0RGljdExpc3QgKGRpY3RJbnB1dDogJGRhdGEpIHtcclxuICAgICAgICAuLi5EaWN0RmllbGRzXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuRGljdEZpZWxkc31cclxuICBgLFxyXG4gIGxpbWl0VGltZURhdGE6IGdxbGBcclxuICAgIHF1ZXJ5IHtcclxuICAgICAgbGltaXRUaW1lRGF0YTogZ2V0RGF0YUNvbmZpZyAoZGF0YUNvbmZpZ0lucHV0OiB7XHJcbiAgICAgICAgdHlwZTogXCIke0RpY3RUeXBlRW51bS5Qcm9tb3Rpb25GbGFzaFNhbGV9XCJcclxuICAgICAgfSkge1xyXG4gICAgICAgIC4uLkRhdGFDb25maWdGaWVsZHNcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5EYXRhQ29uZmlnRmllbGRzfVxyXG4gIGAsXHJcbiAgcHJvZHVjdExpc3RCeUlkczogZ3FsYFxyXG4gICAgcXVlcnkgKCRpZHM6IFtTdHJpbmddKSB7XHJcbiAgICAgIHByb2R1Y3RMaXN0QnlJZHMgKGlkczogJGlkcykge1xyXG4gICAgICAgIHRvdGFsXHJcbiAgICAgICAgbGlzdCB7XHJcbiAgICAgICAgICAuLi5Qcm9kdWN0RmllbGRzXHJcbiAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAuLi5JbWdGaWVsZHNcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuUHJvZHVjdEZpZWxkc31cclxuICAgICR7ZnJhZ21lbnQuSW1nRmllbGRzfVxyXG4gIGAsXHJcbiAgZ3JvdXBRdWV1ZUxpc3Q6IGdxbGBcclxuICAgIHF1ZXJ5ICgkZ3JvdXBRdWV1ZUl0ZW1JbnB1dDogR3JvdXBRdWV1ZUl0ZW1JbnB1dCkge1xyXG4gICAgICBncm91cFF1ZXVlTGlzdCAoZ3JvdXBRdWV1ZUl0ZW1JbnB1dDogJGdyb3VwUXVldWVJdGVtSW5wdXQpIHtcclxuICAgICAgICAuLi5Hcm91cFF1ZXVlRmllbGRzXHJcbiAgICAgICAgcHJvZHVjdCB7XHJcbiAgICAgICAgICAuLi5Qcm9kdWN0RmllbGRzXHJcbiAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAuLi5JbWdGaWVsZHNcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZ3JvdXBPcmRlciB7XHJcbiAgICAgICAgICAuLi5Hcm91cE9yZGVyRmllbGRzXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAke2ZyYWdtZW50Lkdyb3VwUXVldWVGaWVsZHN9XHJcbiAgICAke2ZyYWdtZW50LlByb2R1Y3RGaWVsZHN9XHJcbiAgICAke2ZyYWdtZW50LkltZ0ZpZWxkc31cclxuICAgICR7ZnJhZ21lbnQuR3JvdXBPcmRlckZpZWxkc31cclxuICBgLFxyXG4gIHVwZGF0ZU9yZGVyOiBncWxgXHJcbiAgICBtdXRhdGlvbiAoJG9yZGVySW5mb0l0ZW1JbnB1dDogT3JkZXJJbmZvSXRlbUlucHV0KSB7XHJcbiAgICAgIHVwZGF0ZU9yZGVyIChvcmRlckluZm9JdGVtSW5wdXQ6ICRvcmRlckluZm9JdGVtSW5wdXQpIHtcclxuICAgICAgICAuLi5PcmRlckluZm9GaWVsZHNcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5PcmRlckluZm9GaWVsZHN9XHJcbiAgYCxcclxuICBzYXZlR3JvdXBPcmRlcjogZ3FsYFxyXG4gICAgbXV0YXRpb24gKCRvcmRlckluZm9JdGVtSW5wdXQ6IE9yZGVySW5mb0l0ZW1JbnB1dCwgJGdyb3VwT3JkZXJJdGVtSW5wdXQ6IEdyb3VwT3JkZXJJdGVtSW5wdXQsICRncm91cFF1ZXVlSXRlbUlucHV0OiBHcm91cFF1ZXVlSXRlbUlucHV0KSB7XHJcbiAgICAgIHNhdmVHcm91cE9yZGVyIChvcmRlckluZm9JdGVtSW5wdXQ6ICRvcmRlckluZm9JdGVtSW5wdXQsIGdyb3VwT3JkZXJJdGVtSW5wdXQ6ICRncm91cE9yZGVySXRlbUlucHV0LCBncm91cFF1ZXVlSXRlbUlucHV0OiAkZ3JvdXBRdWV1ZUl0ZW1JbnB1dCkge1xyXG4gICAgICAgIC4uLk9yZGVySW5mb0ZpZWxkc1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAke2ZyYWdtZW50Lk9yZGVySW5mb0ZpZWxkc31cclxuICBgLFxyXG4gIHByb21vQ29kZUxpc3Q6IGdxbGBcclxuICAgIHF1ZXJ5ICgkcHJvbW9Db2RlSXRlbUlucHV0OiBQcm9tb0NvZGVJdGVtSW5wdXQpIHtcclxuICAgICAgcHJvbW9Db2RlTGlzdCAocHJvbW9Db2RlSXRlbUlucHV0OiAkcHJvbW9Db2RlSXRlbUlucHV0KSB7XHJcbiAgICAgICAgLi4uUHJvbW9Db2RlRmllbGRzXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuUHJvbW9Db2RlRmllbGRzfVxyXG4gIGAsXHJcbiAgY2F0ZWdvcnlSb290UGFyZW50OiBncWxgXHJcbiAgICBxdWVyeSAoJGNhdGVnb3J5SXRlbUlucHV0OiBDYXRlZ29yeUl0ZW1JbnB1dCkge1xyXG4gICAgICBjYXRlZ29yeVJvb3RQYXJlbnQgKGNhdGVnb3J5SXRlbUlucHV0OiAkY2F0ZWdvcnlJdGVtSW5wdXQpIHtcclxuICAgICAgICAuLi5DYXRlZ29yeVxyXG4gICAgICAgIHBhcmVudENhdGVnb3J5IHtcclxuICAgICAgICAgIC4uLkNhdGVnb3J5XHJcbiAgICAgICAgICBwYXJlbnRDYXRlZ29yeSB7XHJcbiAgICAgICAgICAgIC4uLkNhdGVnb3J5XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAke2ZyYWdtZW50LkNhdGVnb3J5RmllbGRzfVxyXG4gIGAsXHJcbiAgcHJvZHVjdExpc3RPcmRlckJ5T3JkZXI6IGdxbGBcclxuICAgICAgcXVlcnkgKCRvcmRlckJ5VHlwZTogU3RyaW5nLCAkcHJvZHVjdElucHV0OiBQcm9kdWN0SXRlbUlucHV0KSB7XHJcbiAgICAgICAgcHJvZHVjdExpc3RPcmRlckJ5T3JkZXIgKG9yZGVyQnlUeXBlOiAkb3JkZXJCeVR5cGUsIHByb2R1Y3RJbnB1dDogJHByb2R1Y3RJbnB1dCkge1xyXG4gICAgICAgICAgbGlzdCB7XHJcbiAgICAgICAgICAgIHJPcmRlclByb2R1Y3Qge1xyXG4gICAgICAgICAgICAgIC4uLlJPcmRlclByb2R1Y3RGaWVsZHNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuLi5Qcm9kdWN0RmllbGRzXHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgLi4uSW1nRmllbGRzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRvdGFsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICR7ZnJhZ21lbnQuUHJvZHVjdEZpZWxkc31cclxuICAgICAgJHtmcmFnbWVudC5JbWdGaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuUk9yZGVyUHJvZHVjdEZpZWxkc31cclxuICBgLFxyXG59XHJcblxyXG4iLCJleHBvcnQgZW51bSBQcm9tb0NvZGVUeXBlRW51bSB7XHJcbiAgRGFyZW5DYXJkID0gJ0RhcmVuQ2FyZCcsXHJcbiAgUHJvbW9Db2RlID0gJ1Byb21vQ29kZScsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIERpc2NvdW50VHlwZUVudW0ge1xyXG4gIFBlcmNlbnRhZ2UgPSAnUGVyY2VudGFnZScsXHJcbiAgQW1vdW50ID0gJ0Ftb3VudCcsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFNTIHtcclxuICBTUyxcclxuICBTUzIsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIERpc2NvdW50Q29uZGl0aW9uRW51bSB7XHJcbiAgTm8gPSAnTm8nLFxyXG4gIEFtb3VudCA9ICdBbW91bnQnLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBQcm9kdWN0U3VwcGxlbWVudCB7XHJcbiAgXyxcclxuICBQZW5kaW5nLFxyXG4gIEZpbmlzaCxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFByb2R1Y3RTdXBwbGVtZW50U3RyaW5nOiBhbnkgPSB7XHJcbiAgMTogJ+mFjei0p+S4rScsXHJcbiAgMjogJ+W3suWujOaIkCcsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIE9yZGVyU3RhdGUge1xyXG4gIE9yZGVyZWQgPSAxLFxyXG4gIFBhaWQgPSAyLFxyXG4gIFBpY2tpbmcgPSAzLFxyXG4gIFBpY2tlZFVwID0gNCxcclxuICBGaW5pc2ggPSA1LFxyXG4gIENhbmNlbCA9IDYsXHJcbn1cclxuXHJcbi8vIDE65Luj5LuY5qy+IDI65bey5LuY5qy+IDM65bey5Y+R6LSnIDQ65bey5pS26LSnIDU65bey5Y+W5raIIDY65bey5a6M5oiQIDc65bey6YCA5ZueXHJcbmNvbnN0IF9zOiB7XHJcbiAgW2tleSBpbiBudW1iZXJdOiBzdHJpbmdcclxufSA9IHtcclxuICAxOiAn5b6F5LuY5qy+JyxcclxuICAyOiAn5bey5LuY5qy+JyxcclxuICAzOiAn5bey5Y+R6LSnJyxcclxuICA0OiAn5bey5pS26LSnJyxcclxuICA1OiAn5bey5Y+W5raIJyxcclxuICA2OiAn5bey5a6M5oiQJyxcclxuICA3OiAn5bey6YCA5ZueJyxcclxufVxyXG5leHBvcnQgY29uc3Qgb3JkZXJTdGF0ZVRvU3RyaW5nID0gKHM6IG51bWJlciB8IG51bGwgPSAwKSA9PiB7XHJcbiAgcmV0dXJuIF9zPy5bKHMgPz8gMCldID8/ICcnXHJcbn1cclxuXHJcbi8vIOmFjee9rueuoeeQhlxyXG5leHBvcnQgZW51bSBEaWN0VHlwZUVudW0ge1xyXG4gIEdyb3VwUHJlY2lzaW9uID0gJ0dyb3VwUHJlY2lzaW9uJyxcclxuICBVc2VyTGV2ZWwgPSAnVXNlckxldmVsJyxcclxuICBGcmVpZ2h0ID0gJ0ZyZWlnaHQnLFxyXG4gIEhlbHBEb2N1bWVudGF0aW9uVHlwZSA9ICdIZWxwRG9jdW1lbnRhdGlvblR5cGUnLFxyXG4gIEhlbHBEb2N1bWVudGF0aW9uID0gJ0hlbHBEb2N1bWVudGF0aW9uJyxcclxuICBQcm9tb3Rpb25UaGVtZVNlbGVjdCA9ICdQcm9tb3Rpb25UaGVtZVNlbGVjdCcsXHJcbiAgUHJvbW90aW9uRmxhc2hTYWxlID0gJ1Byb21vdGlvbkZsYXNoU2FsZScsXHJcbiAgSG9tZUNhcm91c2VsID0gJ0hvbWVDYXJvdXNlbCcsXHJcbiAgT3JkZXJTdGF0ZSA9ICdPcmRlclN0YXRlJyxcclxuICBTZWxmQWRkcmVzcyA9ICdTZWxmQWRkcmVzcycsXHJcbiAgQXBwTW9kdWxlID0gJ0FwcE1vZHVsZScsXHJcbn1cclxuXHJcbi8vIOi9ruaSreWbvuWFs+iBlOmhuVxyXG5leHBvcnQgZW51bSBSZWxhdGVkT2JqVHlwZUVudW0ge1xyXG4gIFByb21vQ29kZSA9ICdQcm9tb0NvZGUnLFxyXG4gIFByb21vdGlvbkZsYXNoU2FsZSA9ICdQcm9tb3Rpb25GbGFzaFNhbGUnLFxyXG4gIFByb21vdGlvblRoZW1lU2VsZWN0ID0gJ1Byb21vdGlvblRoZW1lU2VsZWN0JyxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQXBwRm9vdEJhciB7XHJcbiAgaG9tZSA9ICdob21lJyxcclxuICBncm91cCA9ICdncm91cCcsXHJcbiAgY2FyZCA9ICdjYXJkJyxcclxuICBjYXJ0ID0gJ2NhcnQnLFxyXG4gIG1lID0gJ21lJ1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBBcHBNb2R1bGVUeXBlRW51bSB7XHJcbiAgY2F0ZWdvcnlTZWxlY3Rpb24gPSAnY2F0ZWdvcnlTZWxlY3Rpb24nLFxyXG4gIGxpbWl0VGltZSA9ICdsaW1pdFRpbWUnLFxyXG4gIHNhbGVzUmFuayA9ICdzYWxlc1JhbmsnLFxyXG4gIHRoZW1lU2VsZWN0aW9uID0gJ3RoZW1lU2VsZWN0aW9uJyxcclxuICBtYXlMaWtlID0gJ21heUxpa2UnLFxyXG4gIGxpbmVSYW5raW5nID0gJ2xpbmVSYW5raW5nJyxcclxuICB0b3BSYW5raW5nID0gJ3RvcFJhbmtpbmcnLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ2F0ZWdvcnlSb290TmFtZSA9ICdyb290J1xyXG5cclxuZXhwb3J0IGNvbnN0IG9yZGVyU3RhdGVLZXlzOiBzdHJpbmdbXSA9IE9iamVjdC52YWx1ZXMoT3JkZXJTdGF0ZSkgYXMgc3RyaW5nW11cclxuXHJcbmV4cG9ydCBjb25zdCBQcm92aW5jZURhdGEgPSBbXHJcbiAgWydBTCcsICdBbGFiYW1hJ10sXHJcbiAgWydBSycsICdBbGFza2EnXSxcclxuICBbJ0FaJywgJ0FyaXpvbmEnXSxcclxuICBbJ0FSJywgJ0Fya2Fuc2FzJ10sXHJcbiAgWydDQScsICdDYWxpZm9ybmlhJ10sXHJcbiAgWydDTycsICdDb2xvcmFkbyddLFxyXG4gIFsnQ1QnLCAnQ29ubmVjdGljdXQnXSxcclxuICBbJ0RFJywgJ0RlbGF3YXJlJ10sXHJcbiAgWydEQycsICdEaXN0cmljdCBPZiBDb2x1bWJpYSddLFxyXG4gIFsnRkwnLCAnRmxvcmlkYSddLFxyXG4gIFsnR0EnLCAnR2VvcmdpYSddLFxyXG4gIFsnSEknLCAnSGF3YWlpJ10sXHJcbiAgWydJRCcsICdJZGFobyddLFxyXG4gIFsnSUwnLCAnSWxsaW5vaXMnXSxcclxuICBbJ0lOJywgJ0luZGlhbmEnXSxcclxuICBbJ0lBJywgJ0lvd2EnXSxcclxuICBbJ0tTJywgJ0thbnNhcyddLFxyXG4gIFsnS1knLCAnS2VudHVja3knXSxcclxuICBbJ0xBJywgJ0xvdWlzaWFuYSddLFxyXG4gIFsnTUUnLCAnTWFpbmUnXSxcclxuICBbJ01EJywgJ01hcnlsYW5kJ10sXHJcbiAgWydNQScsICdNYXNzYWNodXNldHRzJ10sXHJcbiAgWydNSScsICdNaWNoaWdhbiddLFxyXG4gIFsnTU4nLCAnTWlubmVzb3RhJ10sXHJcbiAgWydNUycsICdNaXNzaXNzaXBwaSddLFxyXG4gIFsnTU8nLCAnTWlzc291cmknXSxcclxuICBbJ01UJywgJ01vbnRhbmEnXSxcclxuICBbJ05FJywgJ05lYnJhc2thJ10sXHJcbiAgWydOVicsICdOZXZhZGEnXSxcclxuICBbJ05IJywgJ05ldyBIYW1wc2hpcmUnXSxcclxuICBbJ05KJywgJ05ldyBKZXJzZXknXSxcclxuICBbJ05NJywgJ05ldyBNZXhpY28nXSxcclxuICBbJ05ZJywgJ05ldyBZb3JrJ10sXHJcbiAgWydOQycsICdOb3J0aCBDYXJvbGluYSddLFxyXG4gIFsnTkQnLCAnTm9ydGggRGFrb3RhJ10sXHJcbiAgWydPSCcsICdPaGlvJ10sXHJcbiAgWydPSycsICdPa2xhaG9tYSddLFxyXG4gIFsnT1InLCAnT3JlZ29uJ10sXHJcbiAgWydQQScsICdQZW5uc3lsdmFuaWEnXSxcclxuICBbJ1JJJywgJ1Job2RlIElzbGFuZCddLFxyXG4gIFsnU0MnLCAnU291dGggQ2Fyb2xpbmEnXSxcclxuICBbJ1NEJywgJ1NvdXRoIERha290YSddLFxyXG4gIFsnVE4nLCAnVGVubmVzc2VlJ10sXHJcbiAgWydUWCcsICdUZXhhcyddLFxyXG4gIFsnVVQnLCAnVXRhaCddLFxyXG4gIFsnVlQnLCAnVmVybW9udCddLFxyXG4gIFsnVkEnLCAnVmlyZ2luaWEnXSxcclxuICBbJ1dBJywgJ1dhc2hpbmd0b24nXSxcclxuICBbJ1dWJywgJ1dlc3QgVmlyZ2luaWEnXSxcclxuICBbJ1dJJywgJ1dpc2NvbnNpbiddLFxyXG4gIFsnV1knLCAnV3lvbWluZyddLFxyXG5dXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UGlja1VwVHlwZU5hbWUgPSAodHlwZTogc3RyaW5nIHwgJ1NlbGYnIHwgJ0RlbGl2ZXJ5JykgPT4ge1xyXG4gIHJldHVybiAoe1xyXG4gICAgU2VsZjogJ+iHquWPlicsXHJcbiAgICBEZWxpdmVyeTogJ+mFjemAgScsXHJcbiAgfSlbdHlwZSBhcyAnU2VsZicgfCAnRGVsaXZlcnknXSA/PyAnJ1xyXG59XHJcbmV4cG9ydCBjb25zdCBQaWNrVXBUeXBlRW51bSA9IHtcclxuICBTZWxmOiAnU2VsZicsXHJcbiAgRGVsaXZlcnk6ICdEZWxpdmVyeScsXHJcbn1cclxuLy8g54Ot6ZSA5o6S6KGMXHJcbmV4cG9ydCBjb25zdCBTYWxlUmFua1R5cGVFbnVtID0ge1xyXG4gIE9uZURheTogJ09uZURheScsXHJcbiAgT25lV2VlazogJ09uZVdlZWsnLFxyXG4gIE9uZU1vbnRoOiAnT25lTW9udGgnLFxyXG59XHJcblxyXG4iLCJleHBvcnQgY29uc3QgbXBTdHlsZSA9IHtcclxuICByZWQ6ICcjRjg0MDMzJyxcclxuICBzaGFkb3c6IHtcclxuICAgIDE6ICcwIDFweCAxcHggMCByZ2JhKDAsMCwwLDAuMTQpLCAwIDJweCAxcHggLTFweCByZ2JhKDAsMCwwLDAuMTIpLCAwIDFweCAzcHggMCByZ2JhKDAsMCwwLDAuMjApJyxcclxuICB9LFxyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZU11aVRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7bXBTdHlsZX0gZnJvbSAnLi9jb21tb24nXHJcblxyXG5leHBvcnQgY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XHJcbiAgcGFsZXR0ZToge1xyXG4gICAgc2Vjb25kYXJ5OiB7XHJcbiAgICAgIG1haW46IG1wU3R5bGUucmVkLFxyXG4gICAgfSxcclxuICB9XHJcbn0pXHJcbiIsImltcG9ydCB7IE1heWJlIH0gZnJvbSBcIi4uL2dyYXBocWxUeXBlcy90eXBlc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxzID0gKGtleTogTWF5YmU8c3RyaW5nPiB8IHVuZGVmaW5lZCkgPT4ga2V5ID8/ICcnXHJcbiIsIlxyXG5leHBvcnQgY29uc3QgaXNEZXYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50J1xyXG5cclxuZXhwb3J0IGNvbnN0IHNzTG9nID0gKGRhdGE6IGFueSkgPT4ge1xyXG4gIGlmIChpc0Rldikge1xyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuICB9XHJcbiAgcmV0dXJuIGRhdGFcclxufVxyXG4iLCIvKiBnbG9iYWwgbG9jYWxTdG9yYWdlICovXHJcbmV4cG9ydCBjb25zdCBzZXRUb2tlbiA9ICh0b2tlbjogc3RyaW5nLCBuYW1lID0gJ3Rva2VuJykgPT4gbG9jYWxTdG9yYWdlLnNldEl0ZW0obmFtZSwgdG9rZW4pXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VG9rZW4gPSAobmFtZSA9ICd0b2tlbicpID0+IGxvY2FsU3RvcmFnZS5nZXRJdGVtKG5hbWUpIHx8ICcnXHJcbiIsImltcG9ydCBmb3JtYXQgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0J1xyXG5pbXBvcnQgc2V0IGZyb20gJ2xvZGFzaC9zZXQnXHJcbmltcG9ydCB7Y2xvbmVEZWVwLCBQcm9wZXJ0eVBhdGgsIGlzRnVuY3Rpb24sIGdldCwgaXNBcnJheSwgbWVyZ2VXaXRoLCBpc1N0cmluZ30gZnJvbSAnbG9kYXNoJ1xyXG5pbXBvcnQge01heWJlfSBmcm9tICcuLi9ncmFwaHFsVHlwZXMvdHlwZXMnXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0T2JqZWN0VVJMID0gKGZpbGU6IGFueSkgPT4ge1xyXG4gIC8vIEB0cy1pZ25vcmVcclxuICByZXR1cm4gd2luZG93Py5jcmVhdGVPYmplY3RVUkw/LihmaWxlKVxyXG4gICAgICA/PyB3aW5kb3c/LlVSTD8uY3JlYXRlT2JqZWN0VVJMPy4oZmlsZSlcclxuICAgICAgPz8gd2luZG93Py53ZWJraXRVUkw/LmNyZWF0ZU9iamVjdFVSTD8uKGZpbGUpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwYXJzZUZsb2F0Rm9ySW5wdXQgPSAodmFsdWU6IGFueSkgPT4ge1xyXG4gIGlmICh2YWx1ZSA9PT0gJy0nIHx8IHZhbHVlID09PSAnJykgcmV0dXJuIHZhbHVlXHJcbiAgdHJ5IHtcclxuICAgIHJldHVybiBwYXJzZUZsb2F0KHZhbHVlKVxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZSlcclxuICB9XHJcbn1cclxuXHJcbnR5cGUgU2V0RGF0YTxTID0gYW55PiA9IFMgfCAoKHByZURhdGE6IFMpID0+IFMpXHJcblxyXG5leHBvcnQgY29uc3QgZnBTZXQgPSA8RSA9IGFueT4ob3JpZ2luOiBhbnksIHBhdGg6IGFueSwgdmFsdWU6IFNldERhdGE8RT4pID0+IHtcclxuICBsZXQgbmV3RGF0YSA9IGNsb25lRGVlcChvcmlnaW4pXHJcbiAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XHJcbiAgICBjb25zdCBvbGREYXRhID0gZ2V0KG9yaWdpbiwgcGF0aClcclxuICAgIHNldChuZXdEYXRhLCBwYXRoLCB2YWx1ZShvbGREYXRhKSlcclxuICB9IGVsc2Uge1xyXG4gICAgc2V0KG5ld0RhdGEsIHBhdGgsIHZhbHVlKVxyXG4gIH1cclxuICByZXR1cm4gbmV3RGF0YVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGVsYXkgPSAodGltZTogbnVtYmVyKSA9PiAobmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIHRpbWUpKSlcclxuXHJcbmV4cG9ydCBjb25zdCBmcFNldFByZTogPFQgZXh0ZW5kcyBvYmplY3Q+KHBhdGg6IFByb3BlcnR5UGF0aCwgbmV3VmFsdWU6IFNldERhdGEpID0+IChvcmlnaW46IFQpID0+IFQgPSAocGF0aDogYW55LCB2YWx1ZSkgPT4gKG9yaWdpbikgPT4ge1xyXG4gIGxldCBuZXdEYXRhID0gY2xvbmVEZWVwKG9yaWdpbilcclxuICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcclxuICAgIGNvbnN0IG9sZERhdGEgPSBnZXQob3JpZ2luLCBwYXRoKVxyXG4gICAgc2V0KG5ld0RhdGEsIHBhdGgsIHZhbHVlKG9sZERhdGEpKVxyXG4gIH0gZWxzZSB7XHJcbiAgICBzZXQobmV3RGF0YSwgcGF0aCwgdmFsdWUpXHJcbiAgfVxyXG4gIHJldHVybiBuZXdEYXRhXHJcbn1cclxuXHJcbmNvbnN0IGN1c3RvbWl6ZXIgPSAob2JqVmFsdWU6IGFueSwgc3JjVmFsdWU6IGFueSkgPT4ge1xyXG4gIGlmIChpc0FycmF5KHNyY1ZhbHVlKSkge1xyXG4gICAgcmV0dXJuIHNyY1ZhbHVlXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZnBNZXJnZTogPFRPYmplY3QsIFRTb3VyY2UxPihcclxuICAgIG9yaWdpbjogVE9iamVjdCxcclxuICAgIG5ld1ZhbHVlOiBUU291cmNlMSxcclxuKSA9PiBUT2JqZWN0ICYgVFNvdXJjZTEgPSAob3JpZ2luLCBuZXdWYWx1ZSkgPT4ge1xyXG4gIHJldHVybiBtZXJnZVdpdGgoe30sIG9yaWdpbiwgbmV3VmFsdWUsIGN1c3RvbWl6ZXIpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmcE1lcmdlUHJlOiA8UHJlLCBOZXcgZXh0ZW5kcyBQYXJ0aWFsPFByZT4+KG5ld1ZhbHVlOiBOZXcpID0+IChvcmlnaW46IFByZSkgPT4gUHJlICYgTmV3ID0gKG5ld1ZhbHVlKSA9PiAocHJlKSA9PiBtZXJnZVdpdGgoe30sIHByZSwgbmV3VmFsdWUsIGN1c3RvbWl6ZXIpXHJcblxyXG5leHBvcnQgY29uc3QgZnBSZW1vdmUgPSAoYXJyOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcclxuICBpZiAoIWFycikgcmV0dXJuIFtdXHJcbiAgcmV0dXJuIFtcclxuICAgIC4uLmFycj8uc2xpY2UoMCwgaW5kZXgpLFxyXG4gICAgLi4uYXJyPy5zbGljZShpbmRleCArIDEsIGFycj8ubGVuZ3RoKSxcclxuICBdXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkZWFsTnVtYmVyWmVybyA9IChsZW5ndGg6IG51bWJlcikgPT4gKG51bTogbnVtYmVyKSA9PiB7XHJcbiAgY29uc3QgX3MgPSBgJHtudW0gPz8gJyd9YFxyXG4gIHJldHVybiBBcnJheShsZW5ndGggLSBfcy5sZW5ndGgpLmZpbGwoJzAnKS5qb2luKCcnKSArIF9zXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmb3JtYXREYXRlID0gKGRhdGU6IGFueSA9ICcnLCBmb3JtYXRTdHJpbmcgPSAnWVlZWS1NTS1kZCBISDptbTpzcycpID0+IHtcclxuICBpZiAoIWRhdGUpIHtcclxuICAgIHJldHVybiAnJ1xyXG4gIH1cclxuICBpZiAoaXNTdHJpbmcoZGF0ZSkpIHtcclxuICAgIHJldHVybiBmb3JtYXQobmV3IERhdGUoZGF0ZSksIGZvcm1hdFN0cmluZywge1xyXG4gICAgICB1c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zOiB0cnVlLFxyXG4gICAgICB1c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnM6IHRydWUsXHJcbiAgICB9KVxyXG4gIH1cclxuICByZXR1cm4gKGlzTmFOKGRhdGUpKSA/ICcnIDogZm9ybWF0KGRhdGUsIGZvcm1hdFN0cmluZywge1xyXG4gICAgdXNlQWRkaXRpb25hbERheU9mWWVhclRva2VuczogdHJ1ZSxcclxuICAgIHVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2VuczogdHJ1ZSxcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGVhbE5vbkJvb2xlYW5Qcm9wcyA9ICh2YWx1ZTogYW55KSA9PiAhIXZhbHVlID8gMSA6IDBcclxuXHJcbmV4cG9ydCBjb25zdCBmb3JtYXRNb25leSA9IChhbW91bnQ6IGFueSwgZGVjaW1hbENvdW50ID0gMiwgZGVjaW1hbCA9IFwiLlwiLCB0aG91c2FuZHMgPSBcIixcIikgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBkZWNpbWFsQ291bnQgPSBNYXRoLmFicyhkZWNpbWFsQ291bnQpXHJcbiAgICBkZWNpbWFsQ291bnQgPSBpc05hTihkZWNpbWFsQ291bnQpID8gMiA6IGRlY2ltYWxDb3VudFxyXG5cclxuICAgIGNvbnN0IG5lZ2F0aXZlU2lnbiA9IGFtb3VudCA8IDAgPyBcIi1cIiA6IFwiXCJcclxuXHJcbiAgICBsZXQgaSA9IHBhcnNlSW50KGFtb3VudCA9IE1hdGguYWJzKE51bWJlcihhbW91bnQpIHx8IDApLnRvRml4ZWQoZGVjaW1hbENvdW50KSkudG9TdHJpbmcoKVxyXG4gICAgbGV0IGogPSAoaS5sZW5ndGggPiAzKSA/IGkubGVuZ3RoICUgMyA6IDBcclxuXHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICByZXR1cm4gbmVnYXRpdmVTaWduICsgKGogPyBpLnN1YnN0cigwLCBqKSArIHRob3VzYW5kcyA6ICcnKSArIGkuc3Vic3RyKGopLnJlcGxhY2UoLyhcXGR7M30pKD89XFxkKS9nLCBcIiQxXCIgKyB0aG91c2FuZHMpICsgKGRlY2ltYWxDb3VudCA/IGRlY2ltYWwgKyBNYXRoLmFicyhhbW91bnQgLSBpKS50b0ZpeGVkKGRlY2ltYWxDb3VudCkuc2xpY2UoMikgOiBcIlwiKVxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGVhbE1vbmV5ID0gKGFtb3VudDogYW55LCBwcmUgPSAnJykgPT4gYCR7cHJlfSQgJHtmb3JtYXRNb25leShhbW91bnQpfWBcclxuXHJcbmV4cG9ydCBjb25zdCBkZWFsTWF5YmVOdW1iZXIgPSAobnVtOiBNYXliZTxudW1iZXI+IHwgdW5kZWZpbmVkKSA9PiBudW0gPz8gMFxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGdldE9iamVjdFVSTCxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRlYWxVcmxRdWVyeSA9IChxdWVyeU9iajogYW55KSA9PiB7XHJcbiAgcmV0dXJuIGA/JHtPYmplY3Qua2V5cyhxdWVyeU9iaikubWFwKHZhbHVlID0+IGAke3ZhbHVlfT0ke3F1ZXJ5T2JqW3ZhbHVlXX1gKS5qb2luKCcmJyl9YFxyXG59XHJcblxyXG5cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1ib29zdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjcm9zcy1mZXRjaC9wb2x5ZmlsbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkYXRlLWZucy9mb3JtYXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaC9zZXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9jb25maWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=