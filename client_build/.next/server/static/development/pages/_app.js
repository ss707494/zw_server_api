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
      sumOrder
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
  `,
  searchData: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    query ($keyword: String) {
      productList(productInput: { name: $keyword }) {
        total
        list {
          ...ProductFields
          img {
            ...ImgFields
          }
        }
      }
      groupProductList: productList(productInput: { name: $keyword, isGroup: 1 }) {
        total
        list {
          ...ProductFields
          img {
            ...ImgFields
          }
        }
      }
      darenCardPromoCodeList: promoCodeList(promoCodeItemInput: {
        promoCodeType: "${_ss_common_enum__WEBPACK_IMPORTED_MODULE_2__["PromoCodeTypeEnum"].DarenCard}",
        title: $keyword,
      }) {
        ...PromoCodeFields
      }
      promoCodePromoCodeList: promoCodeList(promoCodeItemInput: {
        promoCodeType: "${_ss_common_enum__WEBPACK_IMPORTED_MODULE_2__["PromoCodeTypeEnum"].PromoCode}",
        title: $keyword,
      }) {
        ...PromoCodeFields
      }
      oneUser {
        ...UserFields
        userInfo {
          ...UserInfoFields
        }
      }
    }
    ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].UserFields}
    ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].UserInfoFields}
    ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].ProductFields}
    ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].ImgFields}
    ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].PromoCodeFields}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvTW9kZWxBY3Rpb24vbW9kZWxVdGlsLnRzIiwid2VicGFjazovLy8uL3V0aWxzL01vZGVsQWN0aW9uL3VzZVN0b3JlLnRzIiwid2VicGFjazovLy8uL3V0aWxzL2NsaWVudC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi91dGlscy9jb21wb25lbnRzL01lc3NhZ2UvTWVzc2FnZS50c3giLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZ3JhcGhxbFR5cGVzL2RvYy9mcmFnbWVudC50cyIsIndlYnBhY2s6Ly8vLi91dGlscy9ncmFwaHFsVHlwZXMvZG9jL2luZGV4LnRzIiwid2VicGFjazovLy8uL3V0aWxzL3NzX2NvbW1vbi9lbnVtLnRzIiwid2VicGFjazovLy8uL3V0aWxzL3N0eWxlL2NvbW1vbi50cyIsIndlYnBhY2s6Ly8vLi91dGlscy9zdHlsZS90aGVtZS50cyIsIndlYnBhY2s6Ly8vLi91dGlscy90b29scy9kZWFsS2V5LnRzIiwid2VicGFjazovLy8uL3V0aWxzL3Rvb2xzL2dsb2JhbC50cyIsIndlYnBhY2s6Ly8vLi91dGlscy90b29scy90b2tlbi50cyIsIndlYnBhY2s6Ly8vLi91dGlscy90b29scy91dGlscy50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9yc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFwb2xsby1ib29zdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNyb3NzLWZldGNoL3BvbHlmaWxsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZGF0ZS1mbnMvZm9ybWF0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoL3NldFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvY29uZmlnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ0aGVtZSIsImJhc2VBY3Rpb25PcHRpb24iLCJkYXRhIiwibXV0YXRlIiwibm90aWNlIiwicXVlcnkiLCJzZXREYXRhIiwic3RvcmUiLCJtb2RlbE5hbWVMaXN0IiwibW9kZWxGYWN0b3J5IiwibmFtZSIsInN0YXRlIiwiYWN0aW9ucyIsImluY2x1ZGVzIiwiRXJyb3IiLCJwdXNoIiwiZmV0Y2hMb2FkIiwiZmV0Y2hFcnJvciIsIm1lcmdlTW9kZWwiLCJtb2RlbCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwidmFsdWUiLCJtZXJnZU5hbWUiLCJtZXJnZVR3b01vZGVsIiwibW9kZWxUIiwibWVyZ2VUaHJlZU1vZGVsIiwibW9kZWxBIiwibW9kZWxCIiwibW9kZWxDIiwibWVyZ2VMaXN0TW9kZWwiLCJtb2RlbExpc3QiLCJzbGljZSIsInJlZHVjZSIsImFjYyIsImluaXRMaXN0IiwiaW5pdE1vZGVsIiwiaW5pdFN0YXRlIiwib3JpZ2luU3RvcmUiLCJpc0Z1bmN0aW9uIiwiZnVuY3Rpb25Ub0NoZWNrIiwidG9TdHJpbmciLCJjYWxsIiwiZGVhbE5hbWVTcGFjZSIsImtleSIsIm5hbWVTcGFjZSIsInVzZVN0b3JlTW9kZWwiLCJfa2V5IiwiQXJyYXkiLCJpc0FycmF5Iiwic2V0U3RhdGUiLCJ1c2VTdGF0ZSIsImNyZWF0ZSIsInVzZUNhbGxiYWNrIiwib2xkU3RhdGUiLCJuZXdEYXRhIiwic2V0TG9hZCIsImZsYWciLCJwcmV2U3RhdGUiLCJsb2MiLCJzb3VyY2UiLCJib2R5Iiwic2V0RXJyb3IiLCJlcnIiLCJwYXJhbXMiLCJvcHRpb24iLCJyZXMiLCJncmFwaFFMUXVlcnkiLCJjYXRjaCIsImUiLCJmaW5hbGx5IiwibXV0YXRpb24iLCJncmFwaFFMTXV0YXRlIiwibGVuZ3RoIiwiY29uc3RydWN0b3IiLCJ2IiwidXNlRWZmZWN0IiwiZmlsdGVyIiwiZ2V0TG9hZCIsImNvbmZpZyIsImdldENvbmZpZyIsImNsaWVudF9hcGlfdXJpIiwicHVibGljUnVudGltZUNvbmZpZyIsIm9taXRUeXBlbmFtZSIsInVuZGVmaW5lZCIsImdldENsaWVudCIsInJlcXVlc3QiLCJvcGVyYXRpb24iLCJ2YXJpYWJsZXMiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJzZXRDb250ZXh0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJnZXRUb2tlbiIsInJlZnJlc2hUb2tlbiIsImRvYyIsInRoZW4iLCJ0b2tlbiIsInNldFRva2VuIiwicmVmcmVzaHRva2VuIiwic2hvd01lc3NhZ2UiLCJtZXNzYWdlIiwiUm91dGVyIiwicmVsb2FkIiwic3NMb2ciLCJvbkVycm9yIiwicmVzcG9uc2UiLCJncmFwaFFMRXJyb3JzIiwibmV0d29ya0Vycm9yIiwibG9jYXRpb25zIiwicGF0aCIsImV4dGVuc2lvbnMiLCJjb2RlIiwic3BsaXQiLCJtc2dfdHlwZSIsImVyck1zZyIsImJvZHlUZXh0IiwicmVzdWx0IiwiZXJyb3IiLCJzdGF0dXNDb2RlIiwiQXBvbGxvQ2xpZW50IiwidXJpIiwiZGVmYXVsdENsaWVudCIsImRlYWxQYXJhbXMiLCJjbGllbnQiLCJfZGVhbFBhcmFtc0luIiwiZGVhbFBhcmFtc0luIiwiZmV0Y2hQb2xpY3kiLCJzZXJ2ZXJDbGllbnQiLCJzZXJ2ZXJRdWVyeSIsInNlcnZlck11dGF0ZSIsInR5cGVIZWxwIiwiZGVmYXVsdCIsImdyZXkiLCJzdWNjZXNzIiwiZ3JlZW4iLCJ3YXJuaW5nIiwiYW1iZXIiLCJpbmZvIiwiYmx1ZSIsInJlZCIsImdldFR5cGUiLCJ0eXBlIiwiQ3VzU25hY2tiYXIiLCJzdHlsZWQiLCJTbmFja2JhciIsImNvbW1vbiIsIndoaXRlIiwibWVzc2FnZU1vZGVsIiwib3BlbiIsImF1dG9IaWRlRHVyYXRpb24iLCJmcE1lcmdlUHJlIiwib25DbG9zZSIsIk1lc3NhZ2UiLCJtU3RhdGUiLCJscyIsImZyYWdtZW50IiwiQ2F0ZWdvcnlGaWVsZHMiLCJncWwiLCJVc2VyRmllbGRzIiwiVXNlckluZm9GaWVsZHMiLCJPcmRlckluZm9GaWVsZHMiLCJST3JkZXJQcm9kdWN0RmllbGRzIiwiUHJvZHVjdEZpZWxkcyIsIkltZ0ZpZWxkcyIsIlVzZXJBZGRyZXNzRmllbGRzIiwiVXNlclBheUNhcmRGaWVsZHMiLCJTaG9wQ2FydEZpZWxkcyIsIkRhdGFDb25maWdGaWVsZHMiLCJEaWN0RmllbGRzIiwiR3JvdXBRdWV1ZUZpZWxkcyIsIkdyb3VwT3JkZXJGaWVsZHMiLCJQcm9tb0NvZGVGaWVsZHMiLCJnZXRVc2VyTGlzdERvYyIsImdldERhdGFDb25maWciLCJob21lQ2Fyb3VzZWxJbWdzIiwiY2F0ZWdvcnlMaXN0IiwicmVnaXN0ZXJVc2VyIiwibG9naW4iLCJvbmVVc2VyIiwib3JkZXJMaXN0Iiwib3JkZXJEZXRhaWwiLCJEaWN0VHlwZUVudW0iLCJTZWxmQWRkcmVzcyIsInVwZGF0ZVBhc3N3b3JkIiwicGF5Q2FyZExpc3RPbmVVc2VyIiwidXNlclBheUNhcmQiLCJzYXZlVXNlclBheUNhcmQiLCJzZXRVc2VyUGF5Q2FyZERlZmF1bHQiLCJwaWNrdXBBZGRyZXNzIiwidXBkYXRlVXNlckluZm8iLCJ1c2VyQWRkcmVzc0xpc3RPbmVVc2VyIiwidXNlckFkZHJlc3MiLCJzYXZlVXNlckFkZHJlc3MiLCJzZXRVc2VyQWRkcmVzc0RlZmF1bHQiLCJwcm9kdWN0c0luQ2F0ZWdvcnkiLCJjYXRlZ29yeUxldmVsIiwib25lQ2F0ZWdvcnkiLCJwcm9kdWN0TGlzdCIsInVwZGF0ZU51bVNob3BDYXJ0IiwidXNlclNob3BDYXJ0TGlzdCIsInVwZGF0ZVNob3BDYXJ0Iiwib3JkZXJDb25maXJtSW5mbyIsIkZyZWlnaHQiLCJzYXZlT3JkZXIiLCJkaWN0TGlzdCIsImxpbWl0VGltZURhdGEiLCJQcm9tb3Rpb25GbGFzaFNhbGUiLCJwcm9kdWN0TGlzdEJ5SWRzIiwiZ3JvdXBRdWV1ZUxpc3QiLCJ1cGRhdGVPcmRlciIsInNhdmVHcm91cE9yZGVyIiwicHJvbW9Db2RlTGlzdCIsImNhdGVnb3J5Um9vdFBhcmVudCIsInByb2R1Y3RMaXN0T3JkZXJCeU9yZGVyIiwic2VhcmNoRGF0YSIsIlByb21vQ29kZVR5cGVFbnVtIiwiRGFyZW5DYXJkIiwiUHJvbW9Db2RlIiwiRGlzY291bnRUeXBlRW51bSIsIlNTIiwiRGlzY291bnRDb25kaXRpb25FbnVtIiwiUHJvZHVjdFN1cHBsZW1lbnQiLCJQcm9kdWN0U3VwcGxlbWVudFN0cmluZyIsIk9yZGVyU3RhdGUiLCJfcyIsIm9yZGVyU3RhdGVUb1N0cmluZyIsInMiLCJSZWxhdGVkT2JqVHlwZUVudW0iLCJBcHBGb290QmFyIiwiQXBwTW9kdWxlVHlwZUVudW0iLCJDYXRlZ29yeVJvb3ROYW1lIiwib3JkZXJTdGF0ZUtleXMiLCJ2YWx1ZXMiLCJQcm92aW5jZURhdGEiLCJnZXRQaWNrVXBUeXBlTmFtZSIsIlNlbGYiLCJEZWxpdmVyeSIsIlBpY2tVcFR5cGVFbnVtIiwiU2FsZVJhbmtUeXBlRW51bSIsIk9uZURheSIsIk9uZVdlZWsiLCJPbmVNb250aCIsIm1wU3R5bGUiLCJzaGFkb3ciLCJjcmVhdGVNdWlUaGVtZSIsInBhbGV0dGUiLCJzZWNvbmRhcnkiLCJtYWluIiwiaXNEZXYiLCJjb25zb2xlIiwibG9nIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImdldEl0ZW0iLCJnZXRPYmplY3RVUkwiLCJmaWxlIiwid2luZG93IiwiY3JlYXRlT2JqZWN0VVJMIiwiVVJMIiwid2Via2l0VVJMIiwicGFyc2VGbG9hdEZvcklucHV0IiwicGFyc2VGbG9hdCIsImZwU2V0Iiwib3JpZ2luIiwiY2xvbmVEZWVwIiwib2xkRGF0YSIsImdldCIsInNldCIsImRlbGF5IiwidGltZSIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImZwU2V0UHJlIiwiY3VzdG9taXplciIsIm9ialZhbHVlIiwic3JjVmFsdWUiLCJmcE1lcmdlIiwibmV3VmFsdWUiLCJtZXJnZVdpdGgiLCJwcmUiLCJmcFJlbW92ZSIsImFyciIsImluZGV4IiwiZGVhbE51bWJlclplcm8iLCJudW0iLCJmaWxsIiwiam9pbiIsImZvcm1hdERhdGUiLCJkYXRlIiwiZm9ybWF0U3RyaW5nIiwiaXNTdHJpbmciLCJmb3JtYXQiLCJEYXRlIiwidXNlQWRkaXRpb25hbERheU9mWWVhclRva2VucyIsInVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2VucyIsImlzTmFOIiwiZGVhbE5vbkJvb2xlYW5Qcm9wcyIsImZvcm1hdE1vbmV5IiwiYW1vdW50IiwiZGVjaW1hbENvdW50IiwiZGVjaW1hbCIsInRob3VzYW5kcyIsIk1hdGgiLCJhYnMiLCJuZWdhdGl2ZVNpZ24iLCJpIiwicGFyc2VJbnQiLCJOdW1iZXIiLCJ0b0ZpeGVkIiwiaiIsInN1YnN0ciIsInJlcGxhY2UiLCJkZWFsTW9uZXkiLCJkZWFsTWF5YmVOdW1iZXIiLCJkZWFsVXJsUXVlcnkiLCJxdWVyeU9iaiIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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d0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgJy4uL3V0aWxzL3N0eWxlL3Jlc2V0LmNzcydcclxuaW1wb3J0IFwicmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbC9saWIvc3R5bGVzL2Nhcm91c2VsLm1pbi5jc3NcIlxyXG5pbXBvcnQge0FwcFByb3BzfSBmcm9tICduZXh0L2FwcCdcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge1RoZW1lUHJvdmlkZXJ9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQge3RoZW1lfSBmcm9tICcuLi91dGlscy9zdHlsZS90aGVtZSdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQge01lc3NhZ2V9IGZyb20gJy4uL3V0aWxzL2NvbXBvbmVudHMvTWVzc2FnZS9NZXNzYWdlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoe0NvbXBvbmVudCwgcGFnZVByb3BzfTogQXBwUHJvcHMpIHtcclxuICByZXR1cm4gPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cclxuICAgIDxIZWFkPlxyXG4gICAgICA8dGl0bGU+TWFya2V0IFBheWxlc3M8L3RpdGxlPlxyXG4gICAgPC9IZWFkPlxyXG4gICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPE1lc3NhZ2UvPlxyXG4gIDwvVGhlbWVQcm92aWRlcj5cclxufVxyXG5cclxuIiwiXHJcbnR5cGUgTW9kZWxGYWN0b3J5PE4gPSAnJz4gPSA8VCwgRSBleHRlbmRzIE1vZGVsQWN0aW9uT2JqSGVscDxhbnksIFQgJiBGZXRjaE9iaj4+KG5hbWU6IHN0cmluZywgc3RhdGU6IFQsIGFjdGlvbnM6IEUpID0+IE1vZGVsRGF0YTxUICYgRmV0Y2hPYmosIEU+XHJcblxyXG5leHBvcnQgY29uc3QgYmFzZUFjdGlvbk9wdGlvbjogQmFzZU1vZGVsQWN0aW9uT3B0aW9uID0ge1xyXG4gIGRhdGE6IG51bGwsXHJcbiAgbXV0YXRlOiAoKSA9PiB7fSxcclxuICBub3RpY2U6ICgpID0+IHt9LFxyXG4gIHF1ZXJ5OiAoKSA9PiB7fSxcclxuICBzZXREYXRhOiAoKSA9PiB7fSxcclxuICBzdG9yZToge31cclxufVxyXG5cclxuY29uc3QgbW9kZWxOYW1lTGlzdDpzdHJpbmdbXSA9IFtdXHJcbmV4cG9ydCBjb25zdCBtb2RlbEZhY3Rvcnk6IE1vZGVsRmFjdG9yeSA9IChuYW1lLCBzdGF0ZSwgYWN0aW9ucykgPT4ge1xyXG4gIGlmIChtb2RlbE5hbWVMaXN0LmluY2x1ZGVzKG5hbWUpKSB7XHJcbiAgICB0aHJvdyBFcnJvcihgbW9kZWwgTmFtZSBkdXBsaWNhdGU6ICR7bmFtZX1gKVxyXG4gIH1cclxuICBtb2RlbE5hbWVMaXN0LnB1c2gobmFtZSlcclxuICByZXR1cm4ge1xyXG4gICAgbmFtZSxcclxuICAgIHN0YXRlOiB7XHJcbiAgICAgIC4uLnN0YXRlLFxyXG4gICAgICBmZXRjaExvYWQ6IHt9LFxyXG4gICAgICBmZXRjaEVycm9yOiB7fSxcclxuICAgIH0sXHJcbiAgICBhY3Rpb25zLFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlTW9kZWw8QSBleHRlbmRzIEZldGNoT2JqLCBCIGV4dGVuZHMgTW9kZWxBY3Rpb25PYmpIZWxwPGFueSwgQT4sIEMsIEQgZXh0ZW5kcyBNb2RlbEFjdGlvbk9iakhlbHA8YW55LCBBICYgQz4+KG1vZGVsOiB7XHJcbiAgc3RhdGU6IEFcclxuICBhY3Rpb25zOiBCXHJcbiAgbmFtZTogc3RyaW5nXHJcbn0sIG5hbWU6IHN0cmluZywgc3RhdGU6IEMsIGFjdGlvbnM6IEQpOiB7XHJcbiAgc3RhdGU6IEEgJiBDXHJcbiAgYWN0aW9uczogQiAmIEQgJiB7XHJcbiAgICBba2V5IGluIGtleW9mIEJdOiBNb2RlbEFjdGlvbjxhbnksIEE+XHJcbiAgfSAmIHtcclxuICAgIFtrZXkgaW4ga2V5b2YgRF06IE1vZGVsQWN0aW9uPGFueSwgQSAmIEM+XHJcbiAgfVxyXG4gIG5hbWU6IHN0cmluZ1xyXG59IHtcclxuICBPYmplY3Qua2V5cyhtb2RlbC5zdGF0ZSkuZm9yRWFjaCh2YWx1ZSA9PiB7XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBpZiAoc3RhdGU/Llt2YWx1ZV0gJiYgIVsnZmV0Y2hFcnJvcicsICdmZXRjaExvYWQnXS5pbmNsdWRlcyh2YWx1ZSkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBtZXJnZU1vZGVsOiBzdGF0ZSBkdXBsaWNhdGU6OiBrZXkgJHt2YWx1ZX1gKVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgT2JqZWN0LmtleXMobW9kZWwuYWN0aW9ucykuZm9yRWFjaCh2YWx1ZSA9PiB7XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBpZiAoYWN0aW9ucz8uW3ZhbHVlXSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYG1lcmdlTW9kZWw6IGFjdGlvbiBkdXBsaWNhdGU6OiBrZXkgJHt2YWx1ZX1gKVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgY29uc3QgbWVyZ2VOYW1lID0gYCR7bmFtZX1fd2l0aF8ke21vZGVsLm5hbWV9YFxyXG4gIGlmIChtb2RlbE5hbWVMaXN0LmluY2x1ZGVzKG1lcmdlTmFtZSkpIHtcclxuICAgIHRocm93IEVycm9yKGBtb2RlbCBOYW1lIGR1cGxpY2F0ZTogJHttZXJnZU5hbWV9YClcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBuYW1lOiBtZXJnZU5hbWUsXHJcbiAgICBzdGF0ZToge1xyXG4gICAgICAuLi5tb2RlbC5zdGF0ZSxcclxuICAgICAgLi4uc3RhdGUsXHJcbiAgICB9LFxyXG4gICAgYWN0aW9uczoge1xyXG4gICAgICAuLi5tb2RlbC5hY3Rpb25zLFxyXG4gICAgICAuLi5hY3Rpb25zLFxyXG4gICAgfSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVR3b01vZGVsPEEsIEIgZXh0ZW5kcyBNb2RlbEFjdGlvbk9iakhlbHA8YW55LCBBPiwgQywgRCBleHRlbmRzIE1vZGVsQWN0aW9uT2JqSGVscDxhbnksIEM+Pihtb2RlbDoge1xyXG4gIHN0YXRlOiBBXHJcbiAgYWN0aW9uczogQlxyXG4gIG5hbWU6IHN0cmluZ1xyXG59LCBtb2RlbFQ6IHtcclxuICBzdGF0ZTogQ1xyXG4gIGFjdGlvbnM6IERcclxuICBuYW1lOiBzdHJpbmdcclxufSk6IHtcclxuICBuYW1lOiBzdHJpbmdcclxuICBzdGF0ZTogQSAmIENcclxuICBhY3Rpb25zOiBCICYgRCAmIHtcclxuICAgIFtrZXkgaW4ga2V5b2YgQl06IE1vZGVsQWN0aW9uXHJcbiAgfSAmIHtcclxuICAgIFtrZXkgaW4ga2V5b2YgRF06IE1vZGVsQWN0aW9uXHJcbiAgfVxyXG59IHtcclxuICBPYmplY3Qua2V5cyhtb2RlbC5zdGF0ZSkuZm9yRWFjaCh2YWx1ZSA9PiB7XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBpZiAobW9kZWxULnN0YXRlPy5bdmFsdWVdICYmICFbJ2ZldGNoRXJyb3InLCAnZmV0Y2hMb2FkJ10uaW5jbHVkZXModmFsdWUpKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgbWVyZ2VUd29Nb2RlbDogc3RhdGUgZHVwbGljYXRlOjoga2V5ICR7dmFsdWV9YClcclxuICAgIH1cclxuICB9KVxyXG4gIE9iamVjdC5rZXlzKG1vZGVsLmFjdGlvbnMpLmZvckVhY2godmFsdWUgPT4ge1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgaWYgKG1vZGVsVD8uYWN0aW9ucz8uW3ZhbHVlXSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYG1lcmdlVHdvTW9kZWw6IGFjdGlvbiBkdXBsaWNhdGU6OiBrZXkgJHt2YWx1ZX1gKVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgY29uc3QgbWVyZ2VOYW1lID0gYCR7bW9kZWwubmFtZX1fYW5kXyR7bW9kZWxULm5hbWV9YFxyXG4gIGlmIChtb2RlbE5hbWVMaXN0LmluY2x1ZGVzKG1lcmdlTmFtZSkpIHtcclxuICAgIHRocm93IEVycm9yKGBtb2RlbCBOYW1lIGR1cGxpY2F0ZTogJHttZXJnZU5hbWV9YClcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBuYW1lOiBtZXJnZU5hbWUsXHJcbiAgICBzdGF0ZToge1xyXG4gICAgICAuLi5tb2RlbC5zdGF0ZSxcclxuICAgICAgLi4ubW9kZWxULnN0YXRlLFxyXG4gICAgfSxcclxuICAgIGFjdGlvbnM6IHtcclxuICAgICAgLi4ubW9kZWwuYWN0aW9ucyxcclxuICAgICAgLi4ubW9kZWxULmFjdGlvbnMsXHJcbiAgICB9LFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG1lcmdlVGhyZWVNb2RlbCA9IDxBIGV4dGVuZHMgRmV0Y2hPYmosIFQgZXh0ZW5kcyBNb2RlbEFjdGlvbk9iakhlbHA8YW55LCBBPiwgQiBleHRlbmRzIEZldGNoT2JqLCBPIGV4dGVuZHMgTW9kZWxBY3Rpb25PYmpIZWxwPGFueSwgQj4sIEMgZXh0ZW5kcyBGZXRjaE9iaiwgUCBleHRlbmRzIE1vZGVsQWN0aW9uT2JqSGVscDxhbnksIEM+Pihtb2RlbEE6IE1vZGVsRGF0YTxBLCBUPiwgbW9kZWxCOiBNb2RlbERhdGE8QiwgTz4sIG1vZGVsQzogTW9kZWxEYXRhPEMsIFA+KToge1xyXG4gIG5hbWU6IHN0cmluZ1xyXG4gIHN0YXRlOiBBICYgQiAmIENcclxuICBhY3Rpb25zOiBUICYgTyAmIFAgJiB7XHJcbiAgICBba2V5IGluIGtleW9mIFRdOiBNb2RlbEFjdGlvblxyXG4gIH0gJiB7XHJcbiAgICBba2V5IGluIGtleW9mIE9dOiBNb2RlbEFjdGlvblxyXG4gIH0gJiB7XHJcbiAgICBba2V5IGluIGtleW9mIFBdOiBNb2RlbEFjdGlvblxyXG4gIH1cclxufSA9PiB7XHJcbiAgcmV0dXJuIG1lcmdlVHdvTW9kZWwobWVyZ2VUd29Nb2RlbChtb2RlbEEsIG1vZGVsQiksIG1vZGVsQylcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG1lcmdlTGlzdE1vZGVsID0gKG1vZGVsTGlzdDogTW9kZWxEYXRhPGFueSwgYW55PltdKSA9PiB7XHJcbiAgcmV0dXJuIG1vZGVsTGlzdC5zbGljZSgxKS5yZWR1Y2UoKGFjYywgbW9kZWwpID0+IG1lcmdlVHdvTW9kZWwoYWNjLCBtb2RlbCksIG1vZGVsTGlzdFswXSlcclxufVxyXG5cclxuY29uc3QgaW5pdExpc3Q6IHN0cmluZ1tdID0gW11cclxuZXhwb3J0IGNvbnN0IGluaXRNb2RlbCA9IDxUIGV4dGVuZHMgRmV0Y2hPYmosIEUgZXh0ZW5kcyBNb2RlbEFjdGlvbk9iakhlbHA8YW55LCBUPj4obW9kZWw6IE1vZGVsRGF0YTxULCBFPiwgaW5pdFN0YXRlOiBQYXJ0aWFsPFQ+KSA9PiB7XHJcbiAgaWYgKGluaXRMaXN0LmluY2x1ZGVzKG1vZGVsLm5hbWUpKSByZXR1cm5cclxuICBpbml0TGlzdC5wdXNoKG1vZGVsLm5hbWUpXHJcbiAgbW9kZWwuc3RhdGUgPSB7XHJcbiAgICAuLi5tb2RlbC5zdGF0ZSxcclxuICAgIC4uLmluaXRTdGF0ZSxcclxuICB9XHJcbn1cclxuXHJcbi8vIGNvbnN0IG1vZGVsID0gbW9kZWxGYWN0b3J5KHt9LCB7XHJcbi8vICAgc3M6IHtcclxuLy8gICAgIGVlZTogKHZhbHVlOiBzdHJpbmcsIG9wdGlvbikgPT4ge1xyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gfSlcclxuLy9cclxuLy8gdXNlU3RvcmVNb2RlbChNb2R1bGVFbnVtLlRlc3QsIG1vZGVsKS5hY3Rpb25zLnNzLmVlZSgnJylcclxuXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBtZXJnZUludG9Nb2RlbChvcmlnaW5Nb2RlbCwgbmFtZSwgaW5uZXJNb2RlbCkge1xyXG4vL1xyXG4vLyB9XHJcblxyXG4vLyBjb25zdCBfbW9kZWwgPSBtZXJnZVR3b01vZGVsKG1vZGVsRmFjdG9yeSh7XHJcbi8vICAgdDE6ICcnXHJcbi8vIH0sIHtcclxuLy8gfSksIG1vZGVsRmFjdG9yeSh7XHJcbi8vICAgdDM6ICcnXHJcbi8vIH0sIHtcclxuLy8gfSkpXHJcbi8vXHJcbi8vIG1lcmdlTW9kZWwoX21vZGVsLCB7XHJcbi8vICAgdDI6ICcnXHJcbi8vIH0sIHtcclxuLy8gfSlcclxuIiwiaW1wb3J0IHt1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHtncmFwaFFMTXV0YXRlLCBncmFwaFFMUXVlcnl9IGZyb20gJy4uL2NsaWVudCdcclxuaW1wb3J0IHtiYXNlQWN0aW9uT3B0aW9ufSBmcm9tICcuL21vZGVsVXRpbCdcclxuXHJcbmV4cG9ydCBjb25zdCBvcmlnaW5TdG9yZTogT3JpZ2luU3RvcmUgPSB7fVxyXG5cclxuY29uc3QgaXNGdW5jdGlvbiA9IChmdW5jdGlvblRvQ2hlY2s6IGFueSkgPT4ge1xyXG4gIHJldHVybiBmdW5jdGlvblRvQ2hlY2sgJiYge30udG9TdHJpbmcuY2FsbChmdW5jdGlvblRvQ2hlY2spID09PSAnW29iamVjdCBGdW5jdGlvbl0nXHJcbn1cclxuXHJcbnR5cGUgU3RvcmVTdGF0ZVJlc3VsdDxULCBFIGV4dGVuZHMgTW9kZWxBY3Rpb25PYmpIZWxwPGFueSwgVD4+ID0gTW9kZWxSZXN1bHQ8VCwgRT4gJiB7XHJcbiAgc3RvcmU6IE9yaWdpblN0b3JlXHJcbiAgZ2V0TG9hZDogKHF1ZXJ5OiBhbnkpID0+IG51bWJlclxyXG59XHJcblxyXG50eXBlIFVzZU1vZGVsU3RhdGUgPSA8VCBleHRlbmRzIEZldGNoT2JqLCBFIGV4dGVuZHMgTW9kZWxBY3Rpb25PYmpIZWxwPGFueSwgVD4+KG1vZGVsOiBNb2RlbERhdGE8VCwgRT4sIGtleT86IHN0cmluZyB8IFtzdHJpbmcsIHN0cmluZ10pID0+IFN0b3JlU3RhdGVSZXN1bHQ8VCwgRT5cclxuXHJcbmV4cG9ydCBjb25zdCBkZWFsTmFtZVNwYWNlID0gKGtleTogc3RyaW5nLCBuYW1lU3BhY2U6IHN0cmluZykgPT4ge1xyXG4gIGlmIChuYW1lU3BhY2UpIHtcclxuICAgIHJldHVybiBgJHtrZXl9XyR7bmFtZVNwYWNlfWBcclxuICB9XHJcbiAgcmV0dXJuIGAke2tleX1gXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VTdG9yZU1vZGVsOiBVc2VNb2RlbFN0YXRlID0gKG1vZGVsLCBrZXk/OiBzdHJpbmcgfCBbc3RyaW5nLCBzdHJpbmddKSA9PiB7XHJcbiAgY29uc3QgX2tleSA9IG1vZGVsLm5hbWUgPz8gKCFrZXkgPyAnJyA6IEFycmF5LmlzQXJyYXkoa2V5KSA/IGRlYWxOYW1lU3BhY2Uoa2V5WzBdLCBrZXlbMV0pIDoga2V5KVxyXG4gIGNvbnN0IHthY3Rpb25zLCBzdGF0ZX0gPSBtb2RlbFxyXG4gIGNvbnN0IFssIHNldFN0YXRlXSA9IHVzZVN0YXRlKE9iamVjdC5jcmVhdGUobnVsbCkpXHJcbiAgaWYgKCFfa2V5KSB7XHJcbiAgICB0aHJvdyBFcnJvcignbm8ga2V5JylcclxuICB9XHJcbiAgaWYgKCFvcmlnaW5TdG9yZVtfa2V5XSkge1xyXG4gICAgb3JpZ2luU3RvcmVbX2tleV0gPSB7XHJcbiAgICAgIGtleXM6IF9rZXksXHJcbiAgICAgIHN0YXRlLFxyXG4gICAgICBhY3Rpb25zOiB7fSxcclxuICAgICAgc2V0RGF0YTogW11cclxuICAgIH1cclxuICB9XHJcbiAgY29uc3Qgbm90aWNlID0gdXNlQ2FsbGJhY2soKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgb3JpZ2luU3RvcmVbX2tleV0uc2V0RGF0YS5mb3JFYWNoKHZhbHVlID0+IHtcclxuICAgICAgdmFsdWU/LihkYXRhKVxyXG4gICAgfSlcclxuICB9LCBbX2tleV0pXHJcbiAgY29uc3Qgc2V0RGF0YTogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248dHlwZW9mIHN0YXRlPj4gPSB1c2VDYWxsYmFjaygoZGF0YSkgPT4ge1xyXG4gICAgY29uc3Qgb2xkU3RhdGUgPSBvcmlnaW5TdG9yZVtfa2V5XS5zdGF0ZVxyXG4gICAgY29uc3QgbmV3RGF0YSA9IGlzRnVuY3Rpb24oZGF0YSkgPyAoZGF0YSBhcyAodjogdHlwZW9mIG9sZFN0YXRlKSA9PiB2b2lkKShvbGRTdGF0ZSkgOiBkYXRhXHJcbiAgICBvcmlnaW5TdG9yZVtfa2V5XS5zdGF0ZSA9IG5ld0RhdGFcclxuICAgIG5vdGljZShuZXdEYXRhKVxyXG4gIH0sIFtfa2V5LCBub3RpY2VdKVxyXG5cclxuICBjb25zdCBzZXRMb2FkID0gdXNlQ2FsbGJhY2soKHF1ZXJ5OiBhbnksIGZsYWc6IGJvb2xlYW4pID0+IHtcclxuICAgIHNldERhdGEocHJldlN0YXRlID0+ICh7XHJcbiAgICAgIC4uLnByZXZTdGF0ZSxcclxuICAgICAgZmV0Y2hMb2FkOiB7XHJcbiAgICAgICAgLi4ucHJldlN0YXRlLmZldGNoTG9hZCA/PyB7fSxcclxuICAgICAgICBbcXVlcnk/LmxvYz8uc291cmNlPy5ib2R5XTogZmxhZyxcclxuICAgICAgfVxyXG4gICAgfSkpXHJcbiAgfSwgW3NldERhdGFdKVxyXG4gIGNvbnN0IHNldEVycm9yID0gdXNlQ2FsbGJhY2soKHF1ZXJ5OiBhbnksIGVycjogYW55KSA9PiB7XHJcbiAgICBzZXREYXRhKHByZXZTdGF0ZSA9PiAoe1xyXG4gICAgICAuLi5wcmV2U3RhdGUsXHJcbiAgICAgIGZldGNoRXJyb3I6IHtcclxuICAgICAgICAuLi5wcmV2U3RhdGUuZmV0Y2hFcnJvciA/PyB7fSxcclxuICAgICAgICBbcXVlcnk/LmxvYz8uc291cmNlPy5ib2R5XTogZXJyLFxyXG4gICAgICB9XHJcbiAgICB9KSlcclxuICB9LCBbc2V0RGF0YV0pXHJcblxyXG4gIGNvbnN0IHF1ZXJ5OiBHcmFwaHFsUXVlcnkgPSB1c2VDYWxsYmFjayhhc3luYyAocXVlcnksIHBhcmFtcywgb3B0aW9uKSA9PiB7XHJcbiAgICBzZXRMb2FkKHF1ZXJ5LCB0cnVlKVxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZ3JhcGhRTFF1ZXJ5KCkocXVlcnksIHBhcmFtcywgb3B0aW9uKS5jYXRjaChlID0+IHtcclxuICAgICAgc2V0RXJyb3IocXVlcnksIGUpXHJcbiAgICB9KS5maW5hbGx5KCgpID0+IHtcclxuICAgICAgc2V0TG9hZChxdWVyeSwgZmFsc2UpXHJcbiAgICB9KSBhcyBhbnlcclxuICAgIHJldHVybiByZXM/LmRhdGFcclxuICB9LCBbc2V0RXJyb3IsIHNldExvYWRdKVxyXG4gIGNvbnN0IG11dGF0ZTogR3JhcGhxbE11dGF0ZSA9IHVzZUNhbGxiYWNrKGFzeW5jIChtdXRhdGlvbiwgcGFyYW1zLCBvcHRpb24pID0+IHtcclxuICAgIHNldExvYWQobXV0YXRpb24sIHRydWUpXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBncmFwaFFMTXV0YXRlKCkobXV0YXRpb24sIHBhcmFtcywgb3B0aW9uKS5jYXRjaChlID0+IHtcclxuICAgICAgc2V0RXJyb3IobXV0YXRpb24sIGUpXHJcbiAgICB9KS5maW5hbGx5KCgpID0+IHtcclxuICAgICAgc2V0TG9hZChtdXRhdGlvbiwgZmFsc2UpXHJcbiAgICB9KSBhcyBhbnlcclxuICAgIHJldHVybiByZXM/LmRhdGFcclxuICB9LCBbc2V0RXJyb3IsIHNldExvYWRdKVxyXG5cclxuICBpZiAoT2JqZWN0LmtleXMob3JpZ2luU3RvcmVbX2tleV0uYWN0aW9ucykubGVuZ3RoID09PSAwICYmIG9yaWdpblN0b3JlW19rZXldLmFjdGlvbnMuY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xyXG4gICAgT2JqZWN0LmtleXMoYWN0aW9ucykuZm9yRWFjaCh2YWx1ZSA9PiB7XHJcbiAgICAgIG9yaWdpblN0b3JlW19rZXldLmFjdGlvbnNbdmFsdWVdID0gKHY6IGFueSkgPT4gYWN0aW9uc1t2YWx1ZV0odiwge1xyXG4gICAgICAgIC4uLmJhc2VBY3Rpb25PcHRpb24sXHJcbiAgICAgICAgZGF0YTogb3JpZ2luU3RvcmVbX2tleV0uc3RhdGUsXHJcbiAgICAgICAgbm90aWNlLFxyXG4gICAgICAgIHNldERhdGEsXHJcbiAgICAgICAgcXVlcnksXHJcbiAgICAgICAgbXV0YXRlLFxyXG4gICAgICAgIHN0b3JlOiBvcmlnaW5TdG9yZSxcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBPYmplY3Qua2V5cyhhY3Rpb25zKS5mb3JFYWNoKHZhbHVlID0+IHtcclxuICAgICAgb3JpZ2luU3RvcmVbX2tleV0uYWN0aW9uc1t2YWx1ZV0gPSAodjogYW55KSA9PiBhY3Rpb25zW3ZhbHVlXSh2LCB7XHJcbiAgICAgICAgLi4uYmFzZUFjdGlvbk9wdGlvbixcclxuICAgICAgICBkYXRhOiBvcmlnaW5TdG9yZVtfa2V5XS5zdGF0ZSxcclxuICAgICAgICBub3RpY2UsXHJcbiAgICAgICAgc2V0RGF0YSxcclxuICAgICAgICBxdWVyeSxcclxuICAgICAgICBtdXRhdGUsXHJcbiAgICAgICAgc3RvcmU6IG9yaWdpblN0b3JlLFxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9LCBbX2tleSwgYWN0aW9ucywgbXV0YXRlLCBub3RpY2UsIHF1ZXJ5LCBzZXREYXRhXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgb3JpZ2luU3RvcmVbX2tleV0uc2V0RGF0YSA9IFtcclxuICAgICAgLi4ub3JpZ2luU3RvcmVbX2tleV0uc2V0RGF0YSA/PyBbXSxcclxuICAgICAgc2V0U3RhdGUsXHJcbiAgICBdXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBvcmlnaW5TdG9yZVtfa2V5XS5zZXREYXRhID0gb3JpZ2luU3RvcmVbX2tleV0uc2V0RGF0YS5maWx0ZXIodmFsdWUgPT4gdmFsdWUgIT09IHNldFN0YXRlKVxyXG4gICAgfVxyXG4gIH0sIFtfa2V5XSlcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHN0YXRlOiBvcmlnaW5TdG9yZVtfa2V5XS5zdGF0ZSxcclxuICAgIGFjdGlvbnM6IChvcmlnaW5TdG9yZVtfa2V5XS5hY3Rpb25zKSBhcyBEZWFsRnVuT2JqPHR5cGVvZiBhY3Rpb25zPixcclxuICAgIHN0b3JlOiBvcmlnaW5TdG9yZSxcclxuICAgIGdldExvYWQ6IHF1ZXJ5ID0+IG9yaWdpblN0b3JlW19rZXldLnN0YXRlLmZldGNoTG9hZFtxdWVyeT8ubG9jPy5zb3VyY2U/LmJvZHldID8gMSA6IDBcclxuICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCAnY3Jvc3MtZmV0Y2gvcG9seWZpbGwnXHJcbmltcG9ydCB7Z2V0VG9rZW4sIHNldFRva2VufSBmcm9tICcuLi90b29scy90b2tlbidcclxuaW1wb3J0IHtPcGVyYXRpb259IGZyb20gJ2Fwb2xsby1saW5rJ1xyXG5pbXBvcnQge0Vycm9yTGlua30gZnJvbSAnYXBvbGxvLWxpbmstZXJyb3InXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBBcG9sbG9DbGllbnQgZnJvbSAnYXBvbGxvLWJvb3N0J1xyXG5pbXBvcnQge3NzTG9nfSBmcm9tICcuLi90b29scy9nbG9iYWwnXHJcbmltcG9ydCB7RG9jdW1lbnROb2RlfSBmcm9tICdncmFwaHFsJ1xyXG5pbXBvcnQge2RvY30gZnJvbSAnLi4vZ3JhcGhxbFR5cGVzL2RvYydcclxuaW1wb3J0IHtzaG93TWVzc2FnZX0gZnJvbSAnLi4vY29tcG9uZW50cy9NZXNzYWdlL01lc3NhZ2UnXHJcbmltcG9ydCBnZXRDb25maWcgZnJvbSAnbmV4dC9jb25maWcnXHJcblxyXG5jb25zdCBjb25maWcgPSBnZXRDb25maWcoKVxyXG5jb25zdCBjbGllbnRfYXBpX3VyaSA9IGNvbmZpZz8ucHVibGljUnVudGltZUNvbmZpZz8uY2xpZW50X2FwaV91cmkgPz8gJ2h0dHA6Ly9sb2NhbGhvc3Q6NDQ2NC90eXBlX19ncmFwaHFsL2FwaSdcclxuXHJcbmNvbnN0IG9taXRUeXBlbmFtZSA9IChrZXk6IGFueSwgdmFsdWU6IGFueSkgPT4ge1xyXG4gIHJldHVybiBrZXkgPT09ICdfX3R5cGVuYW1lJyA/IHVuZGVmaW5lZCA6IHZhbHVlXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDbGllbnQgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IHJlcXVlc3Q6IChvcGVyYXRpb246IE9wZXJhdGlvbikgPT4gUHJvbWlzZTx2b2lkPiB8IHZvaWQgPSAob3BlcmF0aW9uKSA9PiB7XHJcbiAgICBpZiAob3BlcmF0aW9uLnZhcmlhYmxlcykge1xyXG4gICAgICBvcGVyYXRpb24udmFyaWFibGVzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvcGVyYXRpb24udmFyaWFibGVzKSwgb21pdFR5cGVuYW1lKVxyXG4gICAgfVxyXG4gICAgb3BlcmF0aW9uLnNldENvbnRleHQoKHtoZWFkZXJzID0ge319KSA9PiAoe1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgLi4uaGVhZGVycyxcclxuICAgICAgICAvLyDlkI7lj7DkuIfog73mnYPpmZBcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBnZXRUb2tlbigpLFxyXG4gICAgICB9LFxyXG4gICAgfSkpXHJcbiAgfVxyXG5cclxuICBjb25zdCByZWZyZXNoVG9rZW4gPSAoKSA9PiB7XHJcbiAgICBncmFwaFFMUXVlcnkoKShkb2MucmVmcmVzaFRva2VuLCB7XHJcbiAgICAgIGRhdGE6IGdldFRva2VuKCdyZWZyZXNodG9rZW4nKSxcclxuICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgaWYgKHJlcy5kYXRhPy5yZWZyZXNoVG9rZW4/LnRva2VuKSB7XHJcbiAgICAgICAgc2V0VG9rZW4ocmVzLmRhdGE/LnJlZnJlc2hUb2tlbj8udG9rZW4pXHJcbiAgICAgICAgc2V0VG9rZW4ocmVzLmRhdGE/LnJlZnJlc2hUb2tlbj8ucmVmcmVzaHRva2VuLCAncmVmcmVzaHRva2VuJylcclxuICAgICAgICBzaG93TWVzc2FnZSh7bWVzc2FnZTogJ+eZu+W9lei2heaXtizliLfmlrDnmbvlvZXkv6Hmga8nfSlcclxuICAgICAgICBSb3V0ZXIucmVsb2FkKClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzaG93TWVzc2FnZSh7bWVzc2FnZTogJ+ivt+mHjeaWsOeZu+W9lSd9KVxyXG4gICAgICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKVxyXG4gICAgICB9XHJcbiAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICBzc0xvZyhlcnIpXHJcbiAgICAgIHNob3dNZXNzYWdlKHttZXNzYWdlOiAn6K+36YeN5paw55m75b2VJ30pXHJcbiAgICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKVxyXG4gICAgfSlcclxuICB9XHJcbiAgY29uc3Qgb25FcnJvcjogRXJyb3JMaW5rLkVycm9ySGFuZGxlciA9ICh7cmVzcG9uc2UsIG9wZXJhdGlvbiwgZ3JhcGhRTEVycm9ycywgbmV0d29ya0Vycm9yfSkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAvLyBjb25zb2xlLmxvZyhvcGVyYXRpb24pXHJcbiAgICBpZiAoZ3JhcGhRTEVycm9ycykge1xyXG4gICAgICBncmFwaFFMRXJyb3JzLmZvckVhY2goKHttZXNzYWdlLCBsb2NhdGlvbnMsIHBhdGgsIGV4dGVuc2lvbnN9KSA9PiB7XHJcbiAgICAgICAgc3NMb2coXHJcbiAgICAgICAgICAgIGBbR3JhcGhRTCBlcnJvcl06IE1lc3NhZ2U6ICR7bWVzc2FnZX0sIExvY2F0aW9uOiAke2xvY2F0aW9uc30sIFBhdGg6ICR7cGF0aH1gLFxyXG4gICAgICAgIClcclxuICAgICAgICBpZiAoZXh0ZW5zaW9ucz8uY29kZSA9PT0gJ1VOQVVUSEVOVElDQVRFRCcpIHtcclxuICAgICAgICAgIGlmIChtZXNzYWdlLmluY2x1ZGVzKCdmaXJzdCcpKSB7XHJcbiAgICAgICAgICAgIHJlZnJlc2hUb2tlbigpXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzaG93TWVzc2FnZSh7bWVzc2FnZTogJ+ivt+mHjeaWsOeZu+W9lSd9KVxyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2xvZ2luJylcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1lc3NhZ2UuaW5jbHVkZXMoJ1VuZXhwZWN0ZWQgZXJyb3InKSkge1xyXG4gICAgICAgICAgc2hvd01lc3NhZ2Uoe1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLnNwbGl0KCdcIicpWzFdLFxyXG4gICAgICAgICAgICBtc2dfdHlwZTogJ2Vycm9yJyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNob3dNZXNzYWdlKHttZXNzYWdlfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG5ldHdvcmtFcnJvcikge1xyXG4gICAgICBjb25zdCBlcnJNc2cgPSAoJ2JvZHlUZXh0JyBpbiBuZXR3b3JrRXJyb3IpID8gbmV0d29ya0Vycm9yPy5ib2R5VGV4dCA6ICgncmVzdWx0JyBpbiBuZXR3b3JrRXJyb3IpID8gbmV0d29ya0Vycm9yPy5yZXN1bHQ/LmVycm9yIDogJydcclxuICAgICAgc3NMb2coYFtOZXR3b3JrIGVycm9yXTogJHtlcnJNc2d9YClcclxuICAgICAgaWYgKCdzdGF0dXNDb2RlJyBpbiBuZXR3b3JrRXJyb3IgJiYgbmV0d29ya0Vycm9yPy5zdGF0dXNDb2RlID09PSA0MDEpIHtcclxuICAgICAgICBpZiAoZXJyTXNnLmluY2x1ZGVzKCdmaXJzdCcpICYmIGdldFRva2VuKCdyZWZyZXNodG9rZW4nKSkge1xyXG4gICAgICAgICAgcmVmcmVzaFRva2VuKClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc2hvd01lc3NhZ2Uoe21lc3NhZ2U6ICfor7fph43mlrDnmbvlvZUnfSlcclxuICAgICAgICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG5ldyBBcG9sbG9DbGllbnQoe1xyXG4gICAgLy8gbGluazogaHR0cExpbmssXHJcbiAgICB1cmk6IGNsaWVudF9hcGlfdXJpLFxyXG4gICAgcmVxdWVzdCxcclxuICAgIG9uRXJyb3IsXHJcbiAgfSlcclxufVxyXG5cclxuY29uc3QgZGVmYXVsdENsaWVudCA9IGdldENsaWVudCgpXHJcblxyXG4vLyBjb25zdCBkZWFsUGFyYW1zID0gKChwYXJhbXM6IGFueSkgPT4gKHtcclxuLy8gICBkYXRhOiBwYXJhbXMsXHJcbi8vIH0pKVxyXG5jb25zdCBkZWFsUGFyYW1zID0gKChwYXJhbXM6IGFueSkgPT4gcGFyYW1zKVxyXG5cclxuZXhwb3J0IGNvbnN0IGdyYXBoUUxRdWVyeSA9IChjbGllbnQgPSBkZWZhdWx0Q2xpZW50KSA9PiBhc3luYyAocXVlcnk6IERvY3VtZW50Tm9kZSwgcGFyYW1zOiBhbnksIG9wdGlvbj86IGFueSkgPT4ge1xyXG4gIGNvbnN0IF9kZWFsUGFyYW1zSW4gPSBvcHRpb24/LmRlYWxQYXJhbXNJbiA/PyBkZWFsUGFyYW1zXHJcbiAgcmV0dXJuIGNsaWVudC5xdWVyeSh7XHJcbiAgICBmZXRjaFBvbGljeTogJ25ldHdvcmstb25seScsXHJcbiAgICBxdWVyeSxcclxuICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAuLi4oX2RlYWxQYXJhbXNJbiA/IF9kZWFsUGFyYW1zSW4ocGFyYW1zKSA6IHBhcmFtcyksXHJcbiAgICB9LFxyXG4gICAgLi4ub3B0aW9uLFxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBncmFwaFFMTXV0YXRlID0gKGNsaWVudCA9IGRlZmF1bHRDbGllbnQpID0+IGFzeW5jIChtdXRhdGlvbjogYW55LCBwYXJhbXM6IGFueSwgb3B0aW9uPzogYW55KSA9PiB7XHJcbiAgY29uc3QgX2RlYWxQYXJhbXNJbiA9IG9wdGlvbj8uZGVhbFBhcmFtc0luID8/IGRlYWxQYXJhbXNcclxuICByZXR1cm4gY2xpZW50Lm11dGF0ZSh7XHJcbiAgICBtdXRhdGlvbixcclxuICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAuLi4oX2RlYWxQYXJhbXNJbiA/IF9kZWFsUGFyYW1zSW4ocGFyYW1zKSA6IHBhcmFtcyksXHJcbiAgICB9LFxyXG4gICAgLi4ub3B0aW9uLFxyXG4gIH0pXHJcbn1cclxuXHJcbmNvbnN0IHNlcnZlckNsaWVudCA9ICgpID0+IG5ldyBBcG9sbG9DbGllbnQoe1xyXG4gIC8vIGxpbms6IGh0dHBMaW5rLFxyXG4gIHVyaTogY2xpZW50X2FwaV91cmksXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3Qgc2VydmVyUXVlcnkgPSBhc3luYyAocXVlcnk6IGFueSwgcGFyYW1zOiBhbnksIG9wdGlvbj86IGFueSkgPT4gKGF3YWl0IGdyYXBoUUxRdWVyeShzZXJ2ZXJDbGllbnQoKSkocXVlcnksIHBhcmFtcywgb3B0aW9uKSk/LmRhdGFcclxuXHJcbmV4cG9ydCBjb25zdCBzZXJ2ZXJNdXRhdGUgPSBhc3luYyAobXV0YXRpb246IGFueSwgcGFyYW1zOiBhbnksIG9wdGlvbj86IGFueSkgPT4gKGF3YWl0IGdyYXBoUUxNdXRhdGUoc2VydmVyQ2xpZW50KCkpKG11dGF0aW9uLCBwYXJhbXMsIG9wdGlvbikpPy5kYXRhXHJcblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7U25hY2tiYXJ9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQge2FtYmVyLCBibHVlLCBjb21tb24sIGdyZWVuLCBncmV5LCByZWR9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycydcclxuaW1wb3J0IHtTbmFja2JhclByb3BzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TbmFja2Jhci9TbmFja2JhcidcclxuaW1wb3J0IHtvcmlnaW5TdG9yZSwgdXNlU3RvcmVNb2RlbH0gZnJvbSAnLi4vLi4vTW9kZWxBY3Rpb24vdXNlU3RvcmUnXHJcbmltcG9ydCB7ZnBNZXJnZVByZX0gZnJvbSAnLi4vLi4vdG9vbHMvdXRpbHMnXHJcbmltcG9ydCB7bW9kZWxGYWN0b3J5fSBmcm9tICcuLi8uLi9Nb2RlbEFjdGlvbi9tb2RlbFV0aWwnXHJcbmltcG9ydCB7IGxzIH0gZnJvbSAnLi4vLi4vdG9vbHMvZGVhbEtleSdcclxuXHJcbmNvbnN0IHR5cGVIZWxwID0ge1xyXG4gIGRlZmF1bHQ6IGBiYWNrZ3JvdW5kOiAke2dyZXlbNzAwXX07YCxcclxuICBzdWNjZXNzOiBgYmFja2dyb3VuZDogJHtncmVlbls2MDBdfTtgLFxyXG4gIHdhcm5pbmc6IGBiYWNrZ3JvdW5kOiAke2FtYmVyWzcwMF19O2AsXHJcbiAgaW5mbzogYGJhY2tncm91bmQ6ICR7Ymx1ZVs3MDBdfTtgLFxyXG4gIGVycm9yOiBgYmFja2dyb3VuZDogJHtyZWRbNzAwXX07YCxcclxufVxyXG5jb25zdCBnZXRUeXBlID0gKHR5cGUgPSAnZGVmYXVsdCcpID0+ICh0eXBlSGVscCBhcyBhbnkpW3R5cGVdXHJcblxyXG50eXBlIE1lc3NhZ2VQcm9wcyA9IFBhcnRpYWw8U25hY2tiYXJQcm9wcyAmIHtcclxuICBtc2dfdHlwZTogJ2RlZmF1bHQnIHwgJ3N1Y2Nlc3MnIHwgJ2luZm8nIHwgJ3dhcm5pbmcnIHwgJ2Vycm9yJyB8IHN0cmluZ1xyXG59PlxyXG5cclxuY29uc3QgQ3VzU25hY2tiYXIgPSBzdHlsZWQoU25hY2tiYXIpPE1lc3NhZ2VQcm9wcz5gXHJcbiAgJiYmID4gZGl2IHtcclxuICAgIGNvbG9yOiAke2NvbW1vbi53aGl0ZX07XHJcbiAgICAkeyh7bXNnX3R5cGV9KSA9PiBnZXRUeXBlKG1zZ190eXBlKX1cclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IG1lc3NhZ2VNb2RlbCA9IG1vZGVsRmFjdG9yeSgnbWVzc2FnZU1vZGVsJywge1xyXG4gIG9wZW46IGZhbHNlLFxyXG4gIG1lc3NhZ2U6ICcnLFxyXG4gIGF1dG9IaWRlRHVyYXRpb246IDIwMDAsXHJcbiAgbXNnX3R5cGU6ICdkZWZhdWx0JyxcclxufSBhcyBNZXNzYWdlUHJvcHMsIHtcclxuICBvcGVuOiAodmFsdWU6IHN0cmluZyB8IE1lc3NhZ2VQcm9wcywgb3B0aW9uKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xyXG4gICAgICBvcHRpb24uc2V0RGF0YShmcE1lcmdlUHJlKHtcclxuICAgICAgICBhdXRvSGlkZUR1cmF0aW9uOiAyMDAwLFxyXG4gICAgICAgIG1zZ190eXBlOiAnZGVmYXVsdCcsXHJcbiAgICAgICAgbWVzc2FnZTogdmFsdWUsXHJcbiAgICAgICAgb3BlbjogdHJ1ZSxcclxuICAgICAgfSkpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBvcHRpb24uc2V0RGF0YShmcE1lcmdlUHJlKHtcclxuICAgICAgICBhdXRvSGlkZUR1cmF0aW9uOiAyMDAwLFxyXG4gICAgICAgIG1zZ190eXBlOiAnZGVmYXVsdCcsXHJcbiAgICAgICAgLi4udmFsdWUsXHJcbiAgICAgICAgb3BlbjogdHJ1ZSxcclxuICAgICAgfSkpXHJcbiAgICB9XHJcbiAgfSxcclxuICBvbkNsb3NlOiAodmFsdWUsIG9wdGlvbikgPT4gb3B0aW9uLnNldERhdGEoZnBNZXJnZVByZSh7XHJcbiAgICBvcGVuOiBmYWxzZSxcclxuICB9KSksXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgTWVzc2FnZSA9ICgpID0+IHtcclxuICBjb25zdCB7c3RhdGU6IG1TdGF0ZSwgYWN0aW9uc30gPSB1c2VTdG9yZU1vZGVsKG1lc3NhZ2VNb2RlbClcclxuICByZXR1cm4gPEN1c1NuYWNrYmFyXHJcbiAgICAgIG9wZW49e21TdGF0ZS5vcGVufVxyXG4gICAgICBhdXRvSGlkZUR1cmF0aW9uPXttU3RhdGUuYXV0b0hpZGVEdXJhdGlvbn1cclxuICAgICAgbWVzc2FnZT17bHMobVN0YXRlLm1lc3NhZ2UgYXMgc3RyaW5nKX1cclxuICAgICAgbXNnX3R5cGU9e21TdGF0ZS5tc2dfdHlwZX1cclxuICAgICAgb25DbG9zZT17KCkgPT4gYWN0aW9ucy5vbkNsb3NlKCl9XHJcbiAgLz5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNob3dNZXNzYWdlID0gKG9wdGlvbjogc3RyaW5nIHwgTWVzc2FnZVByb3BzKSA9PiB7XHJcbiAgb3JpZ2luU3RvcmVbJ21lc3NhZ2VNb2RlbCddLmFjdGlvbnMub3BlbihvcHRpb24pXHJcbiAgcmV0dXJuXHJcbn1cclxuIiwiaW1wb3J0IHtncWx9IGZyb20gJ2Fwb2xsby1ib29zdCdcclxuXHJcbmV4cG9ydCBjb25zdCBmcmFnbWVudCA9IHtcclxuICBDYXRlZ29yeUZpZWxkczogZ3FsYFxyXG4gICAgZnJhZ21lbnQgQ2F0ZWdvcnkgb24gQ2F0ZWdvcnkge1xyXG4gICAgICBpZFxyXG4gICAgICBuYW1lXHJcbiAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgdXBkYXRlVGltZVxyXG4gICAgICBpc0RlbGV0ZVxyXG4gICAgICBpc0VuYWJsZVxyXG4gICAgICByZW1hcmtcclxuICAgICAgc29ydFxyXG4gICAgICBwYXJlbnRJZFxyXG4gICAgICBmdWxsUGFyZW50SWRcclxuICAgICAgbnVtYmVyXHJcbiAgICAgIHVzZXJJZFxyXG4gICAgICBpbWdVcmxcclxuICAgIH1cclxuICBgLFxyXG4gIFVzZXJGaWVsZHM6IGdxbGBcclxuICAgIGZyYWdtZW50IFVzZXJGaWVsZHMgb24gVXNlciB7XHJcbiAgICAgIGlkXHJcbiAgICAgIG5hbWVcclxuICAgICAgY3JlYXRlVGltZVxyXG4gICAgICB1cGRhdGVUaW1lXHJcbiAgICAgIGlzRGVsZXRlXHJcbiAgICAgIHBhc3N3b3JkXHJcbiAgICAgIHR5cGVcclxuICAgIH1cclxuICBgLFxyXG4gIFVzZXJJbmZvRmllbGRzOiBncWxgXHJcbiAgICBmcmFnbWVudCBVc2VySW5mb0ZpZWxkcyBvbiBVc2VySW5mbyB7XHJcbiAgICAgIGlkXHJcbiAgICAgIG5hbWVcclxuICAgICAgY3JlYXRlVGltZVxyXG4gICAgICB1cGRhdGVUaW1lXHJcbiAgICAgIGlzRGVsZXRlXHJcbiAgICAgIHVzZXJJZFxyXG4gICAgICBwaG9uZVxyXG4gICAgICBlbWFpbFxyXG4gICAgICB1c2VyTGV2ZWxcclxuICAgICAgcGlja3VwQWRkcmVzc0lkXHJcbiAgICB9XHJcbiAgYCxcclxuICBPcmRlckluZm9GaWVsZHM6IGdxbGBcclxuICAgIGZyYWdtZW50IE9yZGVySW5mb0ZpZWxkcyBvbiBPcmRlckluZm8ge1xyXG4gICAgICBpZFxyXG4gICAgICBuYW1lXHJcbiAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgdXBkYXRlVGltZVxyXG4gICAgICBpc0RlbGV0ZVxyXG4gICAgICBudW1iZXJcclxuICAgICAgc3RhdGVcclxuICAgICAgYWN0dWFsbHlQYWlkXHJcbiAgICAgIGFkZHJlc3NJZFxyXG4gICAgICBwYXltZW50TWV0aG9kQ2FyZElkXHJcbiAgICAgIHN1YnRvdGFsXHJcbiAgICAgIGNvdXBvbkRpc2NvdW50XHJcbiAgICAgIHZpcERpc2NvdW50XHJcbiAgICAgIHRyYW5zcG9ydGF0aW9uQ29zdHNcclxuICAgICAgc2FsZVRheFxyXG4gICAgICBvcmRlcklkXHJcbiAgICAgIGRpc2NvdW50UHJvZHVjdFRvdGFsXHJcbiAgICAgIGZpbmlzaFRpbWVcclxuICAgICAgcGlja1VwVGltZVxyXG4gICAgICBwaWNrVXBUeXBlXHJcbiAgICAgIGdlbmVyYXRlQ29pblxyXG4gICAgICBkZWR1Y3RDb2luXHJcbiAgICAgIHNlbGZBZGRyZXNzSWRcclxuICAgICAgY3VycmVudFVzZXJMZXZlbFxyXG4gICAgfVxyXG4gIGAsXHJcbiAgUk9yZGVyUHJvZHVjdEZpZWxkczogZ3FsYFxyXG4gICAgZnJhZ21lbnQgUk9yZGVyUHJvZHVjdEZpZWxkcyBvbiBST3JkZXJQcm9kdWN0IHtcclxuICAgICAgY291bnRcclxuICAgICAgY3JlYXRlVGltZVxyXG4gICAgICBkZWFsUHJpY2VcclxuICAgICAgaWRcclxuICAgICAgaXNEZWxldGVcclxuICAgICAgbmFtZVxyXG4gICAgICBvcmRlcklkXHJcbiAgICAgIHByb2R1Y3RJZFxyXG4gICAgICB1cGRhdGVUaW1lXHJcbiAgICB9XHJcbiAgYCxcclxuICBQcm9kdWN0RmllbGRzOiBncWxgXHJcbiAgICBmcmFnbWVudCBQcm9kdWN0RmllbGRzIG9uIFByb2R1Y3Qge1xyXG4gICAgICBzdW1PcmRlclxyXG4gICAgICBicmFuZFxyXG4gICAgICBjYXRlZ29yeUlkXHJcbiAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgZ3JvdXBBbW91bnRcclxuICAgICAgZ3JvdXBBbW91bnRVbml0XHJcbiAgICAgIGdyb3VwUHJlY2lzaW9uXHJcbiAgICAgIGdyb3VwUmVtYXJrXHJcbiAgICAgIGlkXHJcbiAgICAgIGlzRGVsZXRlXHJcbiAgICAgIGlzRW5hYmxlXHJcbiAgICAgIGlzR3JvdXBcclxuICAgICAgaXNIb3RcclxuICAgICAgaXNOZXdcclxuICAgICAgbmFtZVxyXG4gICAgICBudW1iZXJcclxuICAgICAgcGFja2luZ1VuaXRcclxuICAgICAgcHJpY2VJblxyXG4gICAgICBwcmljZU1hcmtldFxyXG4gICAgICBwcmljZU91dFxyXG4gICAgICByZW1hcmtcclxuICAgICAgc2hlbHZlc1R5cGVzXHJcbiAgICAgIHNvcnRcclxuICAgICAgc3RvY2tcclxuICAgICAgdW5pdFxyXG4gICAgICB1cGRhdGVUaW1lXHJcbiAgICAgIHdlaWdodFxyXG4gICAgICB1bml0U3RyaW5nXHJcbiAgICAgIGdyb3VwUHJlY2lzaW9uU3RyaW5nXHJcbiAgICAgIGdyb3VwQW1vdW50VW5pdFN0cmluZ1xyXG4gICAgICBwYWNraW5nVW5pdFN0cmluZ1xyXG4gICAgfVxyXG4gIGAsXHJcbiAgSW1nRmllbGRzOiBncWxgXHJcbiAgICBmcmFnbWVudCBJbWdGaWVsZHMgb24gUHJvZHVjdEltZyB7XHJcbiAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgaWRcclxuICAgICAgaXNEZWxldGVcclxuICAgICAgbmFtZVxyXG4gICAgICBudW1iZXJcclxuICAgICAgcHJvZHVjdElkXHJcbiAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgdXJsXHJcbiAgICB9XHJcbiAgYCxcclxuICBVc2VyQWRkcmVzc0ZpZWxkczogZ3FsYFxyXG4gICAgZnJhZ21lbnQgVXNlckFkZHJlc3NGaWVsZHMgb24gVXNlckFkZHJlc3Mge1xyXG4gICAgICBhZGRyZXNzXHJcbiAgICAgIGNpdHlcclxuICAgICAgY29tYmluZUFkZHJlc3NcclxuICAgICAgY29udGFjdEluZm9ybWF0aW9uXHJcbiAgICAgIGNvbnRhY3RVc2VyTmFtZVxyXG4gICAgICBjcmVhdGVUaW1lXHJcbiAgICAgIGRpc3RyaWN0XHJcbiAgICAgIGlkXHJcbiAgICAgIGlzRGVmYXVsdFxyXG4gICAgICBpc0RlbGV0ZVxyXG4gICAgICBuYW1lXHJcbiAgICAgIHByb3ZpbmNlXHJcbiAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgdXNlcklkXHJcbiAgICAgIHppcFxyXG4gICAgfVxyXG4gIGAsXHJcbiAgVXNlclBheUNhcmRGaWVsZHM6IGdxbGBcclxuICAgIGZyYWdtZW50IFVzZXJQYXlDYXJkRmllbGRzIG9uIFVzZXJQYXlDYXJkIHtcclxuICAgICAgYWRkcmVzc0RldGFpbFxyXG4gICAgICBjaXR5XHJcbiAgICAgIGNvZGVcclxuICAgICAgY29udGFjdFxyXG4gICAgICBjcmVhdGVUaW1lXHJcbiAgICAgIGV4cGlyYXRpb25UaW1lXHJcbiAgICAgIGlkXHJcbiAgICAgIGlzRGVmYXVsdFxyXG4gICAgICBpc0RlbGV0ZVxyXG4gICAgICBuYW1lXHJcbiAgICAgIG51bWJlclxyXG4gICAgICB1cGRhdGVUaW1lXHJcbiAgICAgIHVzZXJJZFxyXG4gICAgICB1c2VyTmFtZVxyXG4gICAgICB6aXBDb2RlXHJcbiAgICB9XHJcbiAgYCxcclxuICBTaG9wQ2FydEZpZWxkczogZ3FsYFxyXG4gICAgZnJhZ21lbnQgU2hvcENhcnRGaWVsZHMgb24gU2hvcENhcnQge1xyXG4gICAgICBjcmVhdGVUaW1lXHJcbiAgICAgIGlkXHJcbiAgICAgIGlzRGVsZXRlXHJcbiAgICAgIGlzTmV4dFxyXG4gICAgICBuYW1lXHJcbiAgICAgIG51bWJlclxyXG4gICAgICBwcm9kdWN0SWRcclxuICAgICAgdXBkYXRlVGltZVxyXG4gICAgICB1c2VySWRcclxuICAgIH1cclxuICBgLFxyXG4gIERhdGFDb25maWdGaWVsZHM6IGdxbGBcclxuICAgIGZyYWdtZW50IERhdGFDb25maWdGaWVsZHMgb24gRGF0YUNvbmZpZyB7XHJcbiAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgaWRcclxuICAgICAgaXNEZWxldGVcclxuICAgICAgbmFtZVxyXG4gICAgICByZW1hcmtcclxuICAgICAgdHlwZVxyXG4gICAgICB1cGRhdGVUaW1lXHJcbiAgICAgIHZhbHVlXHJcbiAgICB9XHJcbiAgYCxcclxuICBEaWN0RmllbGRzOiBncWxgXHJcbiAgICBmcmFnbWVudCBEaWN0RmllbGRzIG9uIERpY3Qge1xyXG4gICAgICBjb2RlXHJcbiAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgZGljdFR5cGVDb2RlXHJcbiAgICAgIGlkXHJcbiAgICAgIGlzRGVsZXRlXHJcbiAgICAgIGlzRGlzYWJsZVxyXG4gICAgICBuYW1lXHJcbiAgICAgIHJlbWFya1xyXG4gICAgICBzb3J0XHJcbiAgICAgIHVwZGF0ZVRpbWVcclxuICAgIH1cclxuICBgLFxyXG4gIEdyb3VwUXVldWVGaWVsZHM6IGdxbGBcclxuICAgIGZyYWdtZW50IEdyb3VwUXVldWVGaWVsZHMgb24gR3JvdXBRdWV1ZSB7XHJcbiAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgZmlsbEFtb3VudFxyXG4gICAgICBpZFxyXG4gICAgICBpc0RlbGV0ZVxyXG4gICAgICBuYW1lXHJcbiAgICAgIHByb2R1Y3RJZFxyXG4gICAgICB1cGRhdGVUaW1lXHJcbiAgICAgIHN1bUZpbGxBbW91bnRcclxuICAgIH1cclxuICBgLFxyXG4gIEdyb3VwT3JkZXJGaWVsZHM6IGdxbGBcclxuICAgIGZyYWdtZW50IEdyb3VwT3JkZXJGaWVsZHMgb24gR3JvdXBPcmRlciB7XHJcbiAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgZ3JvdXBRdWV1ZUlkXHJcbiAgICAgIGlkXHJcbiAgICAgIGlzRGVsZXRlXHJcbiAgICAgIG5hbWVcclxuICAgICAgb3JkZXJHcm91cEFtb3VudFxyXG4gICAgICBvcmRlcklkXHJcbiAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgdXNlcklkXHJcbiAgICB9XHJcbiAgYCxcclxuICBQcm9tb0NvZGVGaWVsZHM6IGdxbGBcclxuICAgIGZyYWdtZW50IFByb21vQ29kZUZpZWxkcyBvbiBQcm9tb0NvZGUge1xyXG4gICAgICBjb2RlXHJcbiAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgZGlzY291bnRBbW91bnRcclxuICAgICAgZGlzY291bnRDb25kaXRpb25cclxuICAgICAgZGlzY291bnRDb25kaXRpb25BbW91bnRcclxuICAgICAgZGlzY291bnRUeXBlXHJcbiAgICAgIGVmZmVjdGl2ZURhdGVFbmRcclxuICAgICAgZWZmZWN0aXZlRGF0ZVN0YXJ0XHJcbiAgICAgIGlkXHJcbiAgICAgIGltZ1VybFxyXG4gICAgICBpc0RlbGV0ZVxyXG4gICAgICBpc0Rpc2FibGVcclxuICAgICAgbmFtZVxyXG4gICAgICBwcm9kdWN0Q2F0ZWdvcnlcclxuICAgICAgcHJvbW9Db2RlVHlwZVxyXG4gICAgICByZW1hcmtcclxuICAgICAgcmV1c2VUaW1lc1xyXG4gICAgICB0aXRsZVxyXG4gICAgICB1cGRhdGVUaW1lXHJcbiAgICB9XHJcbiAgYCxcclxufVxyXG4iLCJpbXBvcnQge2dxbH0gZnJvbSAnYXBvbGxvLWJvb3N0J1xyXG5pbXBvcnQge2ZyYWdtZW50fSBmcm9tICcuL2ZyYWdtZW50J1xyXG5pbXBvcnQge0RpY3RUeXBlRW51bSwgUHJvbW9Db2RlVHlwZUVudW19IGZyb20gJy4uLy4uL3NzX2NvbW1vbi9lbnVtJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFVzZXJMaXN0RG9jID0gZ3FsYFxyXG4gIHF1ZXJ5IHJlZmFjdG9yZWQ2NDMoJGRhdGE6IFVzZXJMaXN0SW5wdXQhKSB7XHJcbiAgICB1c2VyTGlzdCh1c2VyTGlzdElucHV0OiAkZGF0YSkge1xyXG4gICAgICBsaXN0IHtcclxuICAgICAgICBvcmRlckNvaW5OZXh0TW9udGhcclxuICAgICAgICBvcmRlckNvaW5DdXJyZW50TW9udGhcclxuICAgICAgICBvcmRlckFtb3VudEN1cnJlbnRZZWFyXHJcbiAgICAgICAgLi4udXNlckluZm9cclxuICAgICAgICAuLi5Vc2VyRmllbGRzXHJcbiAgICAgICAgLi4ub3JkZXJJbmZvXHJcbiAgICAgIH1cclxuICAgICAgdG90YWxcclxuICAgIH1cclxuICB9XHJcbiAgZnJhZ21lbnQgb3JkZXJJbmZvIG9uIFVzZXJ7XHJcbiAgICBvcmRlckluZm97XHJcbiAgICAgIGlkXHJcbiAgICAgIG5hbWVcclxuICAgICAgY3JlYXRlVGltZVxyXG4gICAgICB1cGRhdGVUaW1lXHJcbiAgICAgIGlzRGVsZXRlXHJcbiAgICAgIG51bWJlclxyXG4gICAgICBzdGF0ZVxyXG4gICAgICBhY3R1YWxseVBhaWRcclxuICAgICAgYWRkcmVzc0lkXHJcbiAgICAgIHBheW1lbnRNZXRob2RDYXJkSWRcclxuICAgICAgc3VidG90YWxcclxuICAgICAgY291cG9uRGlzY291bnRcclxuICAgICAgdmlwRGlzY291bnRcclxuICAgICAgdHJhbnNwb3J0YXRpb25Db3N0c1xyXG4gICAgICBzYWxlVGF4XHJcbiAgICAgIG9yZGVySWRcclxuICAgICAgZGlzY291bnRQcm9kdWN0VG90YWxcclxuICAgICAgZmluaXNoVGltZVxyXG4gICAgICBwaWNrVXBUaW1lXHJcbiAgICAgIHBpY2tVcFR5cGVcclxuICAgIH1cclxuICB9XHJcbiAgZnJhZ21lbnQgVXNlckZpZWxkcyBvbiBVc2VyIHtcclxuICAgIGlkXHJcbiAgICBuYW1lXHJcbiAgICBjcmVhdGVUaW1lXHJcbiAgICB1cGRhdGVUaW1lXHJcbiAgICBpc0RlbGV0ZVxyXG4gICAgcGFzc3dvcmRcclxuICAgIHR5cGVcclxuICB9XHJcbiAgZnJhZ21lbnQgdXNlckluZm8gb24gVXNlcntcclxuICAgIHVzZXJJbmZve1xyXG4gICAgICBpZFxyXG4gICAgICBuYW1lXHJcbiAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgdXBkYXRlVGltZVxyXG4gICAgICBpc0RlbGV0ZVxyXG4gICAgICB1c2VySWRcclxuICAgICAgcGhvbmVcclxuICAgICAgZW1haWxcclxuICAgICAgdXNlckxldmVsXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RGF0YUNvbmZpZyA9IGdxbGBcclxuICBxdWVyeSAoJGRhdGE6IERhdGFDb25maWdJdGVtSW5wdXQpIHtcclxuICAgIGdldERhdGFDb25maWcoZGF0YUNvbmZpZ0lucHV0OiAkZGF0YSkge1xyXG4gICAgICBpZFxyXG4gICAgICBuYW1lXHJcbiAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgdXBkYXRlVGltZVxyXG4gICAgICBpc0RlbGV0ZVxyXG4gICAgICB0eXBlXHJcbiAgICAgIHZhbHVlXHJcbiAgICAgIHJlbWFya1xyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IGhvbWVDYXJvdXNlbEltZ3MgPSBncWxgXHJcbiAgcXVlcnkgcXVlcnlfcXVlcnlfdGVzdExvbmcxMzcoJGRhdGE6IERhdGFDb25maWdJdGVtSW5wdXQpIHtcclxuICAgIGhvbWVDYXJvdXNlbEltZ3MoZGF0YUNvbmZpZ0lucHV0OiAkZGF0YSkge1xyXG4gICAgICBpZFxyXG4gICAgICBuYW1lXHJcbiAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgdXBkYXRlVGltZVxyXG4gICAgICBpc0RlbGV0ZVxyXG4gICAgICB0eXBlXHJcbiAgICAgIHZhbHVlXHJcbiAgICAgIHJlbWFya1xyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IGNhdGVnb3J5TGlzdCA9IGdxbGBcclxuICBxdWVyeSBxdWVyeV9xdWVyeV90ZXN0TG9uZzU2NSgkZGF0YTogQ2F0ZWdvcnlMaXN0SW5wdXQpIHtcclxuICAgIGNhdGVnb3J5TGlzdChkYXRhOiAkZGF0YSkge1xyXG4gICAgICB0b3RhbFxyXG4gICAgICBsaXN0IHtcclxuICAgICAgICAuLi5DYXRlZ29yeVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gICR7ZnJhZ21lbnQuQ2F0ZWdvcnlGaWVsZHN9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBkb2MgPSB7XHJcbiAgZ2V0VXNlckxpc3REb2MsXHJcbiAgY2F0ZWdvcnlMaXN0LFxyXG4gIGdldERhdGFDb25maWcsXHJcbiAgaG9tZUNhcm91c2VsSW1ncyxcclxuICByZWdpc3RlclVzZXI6IGdxbGBcclxuICAgIG11dGF0aW9uIG11dGF0aW9uX3JlZ2lzdGVyVXNlOTk4KCRkYXRhOiBVc2VySXRlbUlucHV0KSB7XHJcbiAgICAgIHJlZ2lzdGVyVXNlcihkYXRhOiAkZGF0YSkge1xyXG4gICAgICAgIHRva2VuXHJcbiAgICAgICAgcmVmcmVzaHRva2VuXHJcbiAgICAgICAgdXNlciB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgICAgdXBkYXRlVGltZVxyXG4gICAgICAgICAgaXNEZWxldGVcclxuICAgICAgICAgIHBhc3N3b3JkXHJcbiAgICAgICAgICB0eXBlXHJcbiAgICAgICAgICB1c2VySW5mbyB7XHJcbiAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBgLFxyXG4gIHJlZnJlc2hUb2tlbjogZ3FsYFxyXG4gICAgcXVlcnkgcmVmcmVzaFRva2VuKCRkYXRhOiBTdHJpbmchKSB7XHJcbiAgICAgIHJlZnJlc2hUb2tlbihyZWZyZXNodG9rZW46ICRkYXRhKSB7XHJcbiAgICAgICAgcmVmcmVzaHRva2VuXHJcbiAgICAgICAgdG9rZW5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIGAsXHJcbiAgbG9naW46IGdxbGBcclxuICAgIHF1ZXJ5IGxvZ2luKCRkYXRhOiBVc2VySXRlbUlucHV0KSB7XHJcbiAgICAgIGxvZ2luKHVzZXI6ICRkYXRhKSB7XHJcbiAgICAgICAgdG9rZW5cclxuICAgICAgICByZWZyZXNodG9rZW5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIGAsXHJcbiAgb25lVXNlcjogZ3FsYFxyXG4gICAgcXVlcnkgb25lVXNlciB7XHJcbiAgICAgIG9uZVVzZXIge1xyXG4gICAgICAgIC4uLlVzZXJGaWVsZHNcclxuICAgICAgICB1c2VySW5mbyB7XHJcbiAgICAgICAgICAuLi5Vc2VySW5mb0ZpZWxkc1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5Vc2VySW5mb0ZpZWxkc31cclxuICAgICR7ZnJhZ21lbnQuVXNlckZpZWxkc31cclxuICBgLFxyXG4gIG9yZGVyTGlzdDogZ3FsYFxyXG4gICAgcXVlcnkgb3JkZXJMaXN0KCRkYXRhOiBPcmRlcklucHV0KXtcclxuICAgICAgb3JkZXJMaXN0IChvcmRlcklucHV0OiAkZGF0YSwgZnJvbVVzZXI6IHRydWUpIHtcclxuICAgICAgICBsaXN0IHtcclxuICAgICAgICAgIC4uLk9yZGVySW5mb0ZpZWxkc1xyXG4gICAgICAgICAgck9yZGVyUHJvZHVjdCB7XHJcbiAgICAgICAgICAgIC4uLlJPcmRlclByb2R1Y3RGaWVsZHNcclxuICAgICAgICAgICAgcHJvZHVjdCB7XHJcbiAgICAgICAgICAgICAgLi4uUHJvZHVjdEZpZWxkc1xyXG4gICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAuLi5JbWdGaWVsZHNcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuT3JkZXJJbmZvRmllbGRzfVxyXG4gICAgJHtmcmFnbWVudC5ST3JkZXJQcm9kdWN0RmllbGRzfVxyXG4gICAgJHtmcmFnbWVudC5Qcm9kdWN0RmllbGRzfVxyXG4gICAgJHtmcmFnbWVudC5JbWdGaWVsZHN9XHJcbiAgYCxcclxuICBvcmRlckRldGFpbDogZ3FsYFxyXG4gICAgcXVlcnkgKCRpZDogU3RyaW5nKSB7XHJcbiAgICAgIHNlbGZBZGRyZXNzOiBnZXREYXRhQ29uZmlnKGRhdGFDb25maWdJbnB1dDoge1xyXG4gICAgICAgIHR5cGU6IFwiJHtEaWN0VHlwZUVudW0uU2VsZkFkZHJlc3N9XCJcclxuICAgICAgfSkge1xyXG4gICAgICAgIC4uLkRhdGFDb25maWdGaWVsZHNcclxuICAgICAgfVxyXG4gICAgICBvcmRlckRldGFpbChpZDogJGlkKSB7XHJcbiAgICAgICAgLi4uT3JkZXJJbmZvRmllbGRzXHJcbiAgICAgICAgck9yZGVyUHJvZHVjdCB7XHJcbiAgICAgICAgICAuLi5ST3JkZXJQcm9kdWN0RmllbGRzXHJcbiAgICAgICAgICBwcm9kdWN0IHtcclxuICAgICAgICAgICAgLi4uUHJvZHVjdEZpZWxkc1xyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgIC4uLkltZ0ZpZWxkc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHVzZXIge1xyXG4gICAgICAgICAgLi4uVXNlckZpZWxkc1xyXG4gICAgICAgICAgdXNlckluZm8ge1xyXG4gICAgICAgICAgICAuLi5Vc2VySW5mb0ZpZWxkc1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB1c2VyQWRkcmVzcyB7XHJcbiAgICAgICAgICAuLi5Vc2VyQWRkcmVzc0ZpZWxkc1xyXG4gICAgICAgIH1cclxuICAgICAgICB1c2VyUGF5Q2FyZCB7XHJcbiAgICAgICAgICAuLi5Vc2VyUGF5Q2FyZEZpZWxkc1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5EYXRhQ29uZmlnRmllbGRzfVxyXG4gICAgJHtmcmFnbWVudC5PcmRlckluZm9GaWVsZHN9XHJcbiAgICAke2ZyYWdtZW50LlJPcmRlclByb2R1Y3RGaWVsZHN9XHJcbiAgICAke2ZyYWdtZW50LlByb2R1Y3RGaWVsZHN9XHJcbiAgICAke2ZyYWdtZW50LkltZ0ZpZWxkc31cclxuICAgICR7ZnJhZ21lbnQuVXNlckZpZWxkc31cclxuICAgICR7ZnJhZ21lbnQuVXNlckluZm9GaWVsZHN9XHJcbiAgICAke2ZyYWdtZW50LlVzZXJQYXlDYXJkRmllbGRzfVxyXG4gICAgJHtmcmFnbWVudC5Vc2VyQWRkcmVzc0ZpZWxkc31cclxuICBgLFxyXG4gIHVwZGF0ZVBhc3N3b3JkOiBncWxgXHJcbiAgICBtdXRhdGlvbiAoJGRhdGE6IFVwZGF0ZVBhc3N3b3JkSW5wdXQpIHtcclxuICAgICAgdXBkYXRlUGFzc3dvcmQgKGRhdGE6ICRkYXRhKSB7XHJcbiAgICAgICAgdXNlciB7XHJcbiAgICAgICAgICAuLi5Vc2VyRmllbGRzXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF1dGhCb2R5IHtcclxuICAgICAgICAgIHRva2VuXHJcbiAgICAgICAgICByZWZyZXNodG9rZW5cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuVXNlckZpZWxkc31cclxuICBgLFxyXG4gIHBheUNhcmRMaXN0T25lVXNlcjogZ3FsYFxyXG4gICAgcXVlcnkge1xyXG4gICAgICBwYXlDYXJkTGlzdE9uZVVzZXIge1xyXG4gICAgICAgIC4uLlVzZXJQYXlDYXJkRmllbGRzXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuVXNlclBheUNhcmRGaWVsZHN9XHJcbiAgYCxcclxuICB1c2VyUGF5Q2FyZDogZ3FsYFxyXG4gICAgcXVlcnkgKCRkYXRhOiBVc2VyUGF5Q2FyZEl0ZW1JbnB1dCkge1xyXG4gICAgICB1c2VyUGF5Q2FyZCAodXNlclBheUNhcmQ6ICRkYXRhKSB7XHJcbiAgICAgICAgLi4uVXNlclBheUNhcmRGaWVsZHNcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5Vc2VyUGF5Q2FyZEZpZWxkc31cclxuICBgLFxyXG4gIHNhdmVVc2VyUGF5Q2FyZDogZ3FsYFxyXG4gICAgbXV0YXRpb24gKCRkYXRhOiBVc2VyUGF5Q2FyZEl0ZW1JbnB1dCl7XHJcbiAgICAgIHNhdmVVc2VyUGF5Q2FyZCAodXNlclBheUNhcmQ6ICRkYXRhKSB7XHJcbiAgICAgICAgLi4uVXNlclBheUNhcmRGaWVsZHNcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5Vc2VyUGF5Q2FyZEZpZWxkc31cclxuICBgLFxyXG4gIHNldFVzZXJQYXlDYXJkRGVmYXVsdDogZ3FsYFxyXG4gICAgbXV0YXRpb24gKCRkYXRhOiBVc2VyUGF5Q2FyZEl0ZW1JbnB1dCkge1xyXG4gICAgICBzZXRVc2VyUGF5Q2FyZERlZmF1bHQgKHVzZXJQYXlDYXJkOiAkZGF0YSkge1xyXG4gICAgICAgIC4uLlVzZXJQYXlDYXJkRmllbGRzXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuVXNlclBheUNhcmRGaWVsZHN9XHJcbiAgYCxcclxuICBwaWNrdXBBZGRyZXNzOiBncWxgXHJcbiAgICBxdWVyeSB7XHJcbiAgICAgIGdldERhdGFDb25maWcoZGF0YUNvbmZpZ0lucHV0OiB7XHJcbiAgICAgICAgdHlwZTogXCIke0RpY3RUeXBlRW51bS5TZWxmQWRkcmVzc31cIlxyXG4gICAgICB9KSB7XHJcbiAgICAgICAgLi4uRGF0YUNvbmZpZ0ZpZWxkc1xyXG4gICAgICB9XHJcbiAgICAgIG9uZVVzZXIge1xyXG4gICAgICAgIC4uLlVzZXJGaWVsZHNcclxuICAgICAgICB1c2VySW5mbyB7XHJcbiAgICAgICAgICAuLi5Vc2VySW5mb0ZpZWxkc1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5Vc2VySW5mb0ZpZWxkc31cclxuICAgICR7ZnJhZ21lbnQuRGF0YUNvbmZpZ0ZpZWxkc31cclxuICAgICR7ZnJhZ21lbnQuVXNlckZpZWxkc31cclxuICBgLFxyXG4gIHVwZGF0ZVVzZXJJbmZvOiBncWxgXHJcbiAgICBtdXRhdGlvbiAoJHVzZXJJbmZvOiBVc2VySW5mb0l0ZW1JbnB1dCkge1xyXG4gICAgICB1cGRhdGVVc2VySW5mbyAodXNlckluZm86ICR1c2VySW5mbykge1xyXG4gICAgICAgIC4uLlVzZXJJbmZvRmllbGRzXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuVXNlckluZm9GaWVsZHN9XHJcbiAgYCxcclxuICB1c2VyQWRkcmVzc0xpc3RPbmVVc2VyOiBncWxgXHJcbiAgICBxdWVyeSB7XHJcbiAgICAgIHVzZXJBZGRyZXNzTGlzdE9uZVVzZXIge1xyXG4gICAgICAgIC4uLlVzZXJBZGRyZXNzRmllbGRzXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuVXNlckFkZHJlc3NGaWVsZHN9XHJcbiAgYCxcclxuICB1c2VyQWRkcmVzczogZ3FsYFxyXG4gICAgcXVlcnkgKCRkYXRhOiBVc2VyQWRkcmVzc0l0ZW1JbnB1dCkge1xyXG4gICAgICB1c2VyQWRkcmVzcyAodXNlckFkZHJlc3M6ICRkYXRhKSB7XHJcbiAgICAgICAgLi4uVXNlckFkZHJlc3NGaWVsZHNcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5Vc2VyQWRkcmVzc0ZpZWxkc31cclxuICBgLFxyXG4gIHNhdmVVc2VyQWRkcmVzczogZ3FsYFxyXG4gICAgbXV0YXRpb24gKCRkYXRhOiBVc2VyQWRkcmVzc0l0ZW1JbnB1dCl7XHJcbiAgICAgIHNhdmVVc2VyQWRkcmVzcyAodXNlckFkZHJlc3M6ICRkYXRhKSB7XHJcbiAgICAgICAgLi4uVXNlckFkZHJlc3NGaWVsZHNcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5Vc2VyQWRkcmVzc0ZpZWxkc31cclxuICBgLFxyXG4gIHNldFVzZXJBZGRyZXNzRGVmYXVsdDogZ3FsYFxyXG4gICAgbXV0YXRpb24gKCRkYXRhOiBVc2VyQWRkcmVzc0l0ZW1JbnB1dCkge1xyXG4gICAgICBzZXRVc2VyQWRkcmVzc0RlZmF1bHQgKHVzZXJBZGRyZXNzOiAkZGF0YSkge1xyXG4gICAgICAgIC4uLlVzZXJBZGRyZXNzRmllbGRzXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuVXNlckFkZHJlc3NGaWVsZHN9XHJcbiAgYCxcclxuICBwcm9kdWN0c0luQ2F0ZWdvcnk6IGdxbGBcclxuICAgIHF1ZXJ5ICgkZGF0YTogQ2F0ZWdvcnlJdGVtSW5wdXQsICRwcm9kdWN0SXRlbUlucHV0OiBQcm9kdWN0SXRlbUlucHV0KSB7XHJcbiAgICAgIHByb2R1Y3RzSW5DYXRlZ29yeShjYXRlZ29yeUl0ZW1JbnB1dDogJGRhdGEsIHByb2R1Y3RJdGVtSW5wdXQ6ICRwcm9kdWN0SXRlbUlucHV0KSB7XHJcbiAgICAgICAgLi4uUHJvZHVjdEZpZWxkc1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAuLi5JbWdGaWVsZHNcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY2F0ZWdvcnlMaXN0KGRhdGE6IHtcclxuICAgICAgICBjYXRlZ29yeToge1xyXG4gICAgICAgICAgcGFyZW50Q2F0ZWdvcnk6ICRkYXRhXHJcbiAgICAgICAgfVxyXG4gICAgICB9KSB7XHJcbiAgICAgICAgdG90YWxcclxuICAgICAgICBsaXN0IHtcclxuICAgICAgICAgIC4uLkNhdGVnb3J5XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAke2ZyYWdtZW50LlByb2R1Y3RGaWVsZHN9XHJcbiAgICAke2ZyYWdtZW50LkltZ0ZpZWxkc31cclxuICAgICR7ZnJhZ21lbnQuQ2F0ZWdvcnlGaWVsZHN9XHJcbiAgYCxcclxuICBjYXRlZ29yeUxldmVsOiBncWxgXHJcbiAgICBxdWVyeSAoJGRhdGE6IENhdGVnb3J5SXRlbUlucHV0KSB7XHJcbiAgICAgIGNhdGVnb3J5TGV2ZWwoY2F0ZWdvcnlJdGVtSW5wdXQ6ICRkYXRhKVxyXG4gICAgfVxyXG4gIGAsXHJcbiAgb25lQ2F0ZWdvcnk6IGdxbGBcclxuICAgIHF1ZXJ5ICgkZGF0YTogQ2F0ZWdvcnlJdGVtSW5wdXQpIHtcclxuICAgICAgb25lQ2F0ZWdvcnkoZGF0YTogJGRhdGEpIHtcclxuICAgICAgICAuLi5DYXRlZ29yeVxyXG4gICAgICAgIHBhcmVudENhdGVnb3J5IHtcclxuICAgICAgICAgIC4uLkNhdGVnb3J5XHJcbiAgICAgICAgICBwYXJlbnRDYXRlZ29yeSB7XHJcbiAgICAgICAgICAgIC4uLkNhdGVnb3J5XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAke2ZyYWdtZW50LkNhdGVnb3J5RmllbGRzfVxyXG4gIGAsXHJcbiAgcHJvZHVjdExpc3Q6IGdxbGBcclxuICAgIHF1ZXJ5ICgkcHJvZHVjdElucHV0OiBQcm9kdWN0SXRlbUlucHV0LCAkb3JkZXJCeUlucHV0OiBPcmRlckJ5SW5wdXQpIHtcclxuICAgICAgcHJvZHVjdExpc3QocHJvZHVjdElucHV0OiAkcHJvZHVjdElucHV0LCBvcmRlckJ5SW5wdXQ6ICRvcmRlckJ5SW5wdXQpIHtcclxuICAgICAgICB0b3RhbFxyXG4gICAgICAgIGxpc3Qge1xyXG4gICAgICAgICAgLi4uUHJvZHVjdEZpZWxkc1xyXG4gICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgLi4uSW1nRmllbGRzXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAke2ZyYWdtZW50LlByb2R1Y3RGaWVsZHN9XHJcbiAgICAke2ZyYWdtZW50LkltZ0ZpZWxkc31cclxuICBgLFxyXG4gIHVwZGF0ZU51bVNob3BDYXJ0OiBncWxgXHJcbiAgICBtdXRhdGlvbiAoJHNob3BDYXJ0OiBTaG9wQ2FydEl0ZW1JbnB1dCwgJHVwZGF0ZU51bTogRmxvYXQpIHtcclxuICAgICAgdXBkYXRlTnVtU2hvcENhcnQgKHNob3BDYXJ0OiAkc2hvcENhcnQsIHVwZGF0ZU51bTogJHVwZGF0ZU51bSkge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgbnVtYmVyXHJcbiAgICAgICAgcHJvZHVjdCB7XHJcbiAgICAgICAgICAuLi5Qcm9kdWN0RmllbGRzXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHVzZXIge1xyXG4gICAgICAgICAgLi4uVXNlckZpZWxkc1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5Qcm9kdWN0RmllbGRzfVxyXG4gICAgJHtmcmFnbWVudC5Vc2VyRmllbGRzfVxyXG4gIGAsXHJcbiAgdXNlclNob3BDYXJ0TGlzdDogZ3FsYFxyXG4gICAgcXVlcnkge1xyXG4gICAgICBzaG9wQ2FydExpc3Qge1xyXG4gICAgICAgIC4uLlNob3BDYXJ0RmllbGRzXHJcbiAgICAgICAgcHJvZHVjdCB7XHJcbiAgICAgICAgICAuLi5Qcm9kdWN0RmllbGRzXHJcbiAgICAgICAgICBjYXRlZ29yeSB7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIHBhcmVudENhdGVnb3J5IHtcclxuICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgIHBhcmVudENhdGVnb3J5IHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAuLi5JbWdGaWVsZHNcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuU2hvcENhcnRGaWVsZHN9XHJcbiAgICAke2ZyYWdtZW50LlByb2R1Y3RGaWVsZHN9XHJcbiAgICAke2ZyYWdtZW50LkltZ0ZpZWxkc31cclxuICBgLFxyXG4gIHVwZGF0ZVNob3BDYXJ0OiBncWxgXHJcbiAgICBtdXRhdGlvbiAoJHNob3BDYXJ0OiBTaG9wQ2FydEl0ZW1JbnB1dCl7XHJcbiAgICAgIHVwZGF0ZVNob3BDYXJ0IChzaG9wQ2FydDogJHNob3BDYXJ0KSB7XHJcbiAgICAgICAgLi4uU2hvcENhcnRGaWVsZHNcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5TaG9wQ2FydEZpZWxkc31cclxuICBgLFxyXG4gIG9yZGVyQ29uZmlybUluZm86IGdxbGBcclxuICAgIHF1ZXJ5IHtcclxuICAgICAgZ2V0RGF0YUNvbmZpZyhkYXRhQ29uZmlnSW5wdXQ6IHtcclxuICAgICAgICB0eXBlOiBcIiR7RGljdFR5cGVFbnVtLlNlbGZBZGRyZXNzfVwiXHJcbiAgICAgIH0pIHtcclxuICAgICAgICAuLi5EYXRhQ29uZmlnRmllbGRzXHJcbiAgICAgIH1cclxuICAgICAgb25lVXNlciB7XHJcbiAgICAgICAgLi4uVXNlckZpZWxkc1xyXG4gICAgICAgIHVzZXJJbmZvIHtcclxuICAgICAgICAgIC4uLlVzZXJJbmZvRmllbGRzXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHBheUNhcmRMaXN0T25lVXNlciB7XHJcbiAgICAgICAgLi4uVXNlclBheUNhcmRGaWVsZHNcclxuICAgICAgfVxyXG4gICAgICB1c2VyQWRkcmVzc0xpc3RPbmVVc2VyIHtcclxuICAgICAgICAuLi5Vc2VyQWRkcmVzc0ZpZWxkc1xyXG4gICAgICB9XHJcbiAgICAgIGZyZWlnaHRDb25maWc6IGdldERhdGFDb25maWcgKGRhdGFDb25maWdJbnB1dDoge1xyXG4gICAgICAgIHR5cGU6IFwiJHtEaWN0VHlwZUVudW0uRnJlaWdodH1cIlxyXG4gICAgICB9KSB7XHJcbiAgICAgICAgLi4uRGF0YUNvbmZpZ0ZpZWxkc1xyXG4gICAgICB9XHJcbiAgICAgIHVzZXJMZXZlbExpc3Q6IGdldERpY3RMaXN0IChkaWN0SW5wdXQ6IHtcclxuICAgICAgICBkaWN0VHlwZUNvZGU6IFwiVXNlckxldmVsXCJcclxuICAgICAgfSkge1xyXG4gICAgICAgIC4uLkRpY3RGaWVsZHNcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5Vc2VyQWRkcmVzc0ZpZWxkc31cclxuICAgICR7ZnJhZ21lbnQuVXNlclBheUNhcmRGaWVsZHN9XHJcbiAgICAke2ZyYWdtZW50LlVzZXJJbmZvRmllbGRzfVxyXG4gICAgJHtmcmFnbWVudC5Vc2VyRmllbGRzfVxyXG4gICAgJHtmcmFnbWVudC5EYXRhQ29uZmlnRmllbGRzfVxyXG4gICAgJHtmcmFnbWVudC5EaWN0RmllbGRzfVxyXG4gIGAsXHJcbiAgc2F2ZU9yZGVyOiBncWxgXHJcbiAgICBtdXRhdGlvbiAoJG9yZGVySW5mb0l0ZW1JbnB1dDogT3JkZXJJbmZvSXRlbUlucHV0KSB7XHJcbiAgICAgIHNhdmVPcmRlciAob3JkZXJJbmZvSXRlbUlucHV0OiAkb3JkZXJJbmZvSXRlbUlucHV0KSB7XHJcbiAgICAgICAgLi4uT3JkZXJJbmZvRmllbGRzXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuT3JkZXJJbmZvRmllbGRzfVxyXG4gIGAsXHJcbiAgZGljdExpc3Q6IGdxbGBcclxuICAgIHF1ZXJ5ICgkZGF0YTogRGljdElucHV0KSB7XHJcbiAgICAgIGdldERpY3RMaXN0IChkaWN0SW5wdXQ6ICRkYXRhKSB7XHJcbiAgICAgICAgLi4uRGljdEZpZWxkc1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAke2ZyYWdtZW50LkRpY3RGaWVsZHN9XHJcbiAgYCxcclxuICBsaW1pdFRpbWVEYXRhOiBncWxgXHJcbiAgICBxdWVyeSB7XHJcbiAgICAgIGxpbWl0VGltZURhdGE6IGdldERhdGFDb25maWcgKGRhdGFDb25maWdJbnB1dDoge1xyXG4gICAgICAgIHR5cGU6IFwiJHtEaWN0VHlwZUVudW0uUHJvbW90aW9uRmxhc2hTYWxlfVwiXHJcbiAgICAgIH0pIHtcclxuICAgICAgICAuLi5EYXRhQ29uZmlnRmllbGRzXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuRGF0YUNvbmZpZ0ZpZWxkc31cclxuICBgLFxyXG4gIHByb2R1Y3RMaXN0QnlJZHM6IGdxbGBcclxuICAgIHF1ZXJ5ICgkaWRzOiBbU3RyaW5nXSkge1xyXG4gICAgICBwcm9kdWN0TGlzdEJ5SWRzIChpZHM6ICRpZHMpIHtcclxuICAgICAgICB0b3RhbFxyXG4gICAgICAgIGxpc3Qge1xyXG4gICAgICAgICAgLi4uUHJvZHVjdEZpZWxkc1xyXG4gICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgLi4uSW1nRmllbGRzXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAke2ZyYWdtZW50LlByb2R1Y3RGaWVsZHN9XHJcbiAgICAke2ZyYWdtZW50LkltZ0ZpZWxkc31cclxuICBgLFxyXG4gIGdyb3VwUXVldWVMaXN0OiBncWxgXHJcbiAgICBxdWVyeSAoJGdyb3VwUXVldWVJdGVtSW5wdXQ6IEdyb3VwUXVldWVJdGVtSW5wdXQpIHtcclxuICAgICAgZ3JvdXBRdWV1ZUxpc3QgKGdyb3VwUXVldWVJdGVtSW5wdXQ6ICRncm91cFF1ZXVlSXRlbUlucHV0KSB7XHJcbiAgICAgICAgLi4uR3JvdXBRdWV1ZUZpZWxkc1xyXG4gICAgICAgIHByb2R1Y3Qge1xyXG4gICAgICAgICAgLi4uUHJvZHVjdEZpZWxkc1xyXG4gICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgLi4uSW1nRmllbGRzXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdyb3VwT3JkZXIge1xyXG4gICAgICAgICAgLi4uR3JvdXBPcmRlckZpZWxkc1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5Hcm91cFF1ZXVlRmllbGRzfVxyXG4gICAgJHtmcmFnbWVudC5Qcm9kdWN0RmllbGRzfVxyXG4gICAgJHtmcmFnbWVudC5JbWdGaWVsZHN9XHJcbiAgICAke2ZyYWdtZW50Lkdyb3VwT3JkZXJGaWVsZHN9XHJcbiAgYCxcclxuICB1cGRhdGVPcmRlcjogZ3FsYFxyXG4gICAgbXV0YXRpb24gKCRvcmRlckluZm9JdGVtSW5wdXQ6IE9yZGVySW5mb0l0ZW1JbnB1dCkge1xyXG4gICAgICB1cGRhdGVPcmRlciAob3JkZXJJbmZvSXRlbUlucHV0OiAkb3JkZXJJbmZvSXRlbUlucHV0KSB7XHJcbiAgICAgICAgLi4uT3JkZXJJbmZvRmllbGRzXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuT3JkZXJJbmZvRmllbGRzfVxyXG4gIGAsXHJcbiAgc2F2ZUdyb3VwT3JkZXI6IGdxbGBcclxuICAgIG11dGF0aW9uICgkb3JkZXJJbmZvSXRlbUlucHV0OiBPcmRlckluZm9JdGVtSW5wdXQsICRncm91cE9yZGVySXRlbUlucHV0OiBHcm91cE9yZGVySXRlbUlucHV0LCAkZ3JvdXBRdWV1ZUl0ZW1JbnB1dDogR3JvdXBRdWV1ZUl0ZW1JbnB1dCkge1xyXG4gICAgICBzYXZlR3JvdXBPcmRlciAob3JkZXJJbmZvSXRlbUlucHV0OiAkb3JkZXJJbmZvSXRlbUlucHV0LCBncm91cE9yZGVySXRlbUlucHV0OiAkZ3JvdXBPcmRlckl0ZW1JbnB1dCwgZ3JvdXBRdWV1ZUl0ZW1JbnB1dDogJGdyb3VwUXVldWVJdGVtSW5wdXQpIHtcclxuICAgICAgICAuLi5PcmRlckluZm9GaWVsZHNcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5PcmRlckluZm9GaWVsZHN9XHJcbiAgYCxcclxuICBwcm9tb0NvZGVMaXN0OiBncWxgXHJcbiAgICBxdWVyeSAoJHByb21vQ29kZUl0ZW1JbnB1dDogUHJvbW9Db2RlSXRlbUlucHV0KSB7XHJcbiAgICAgIHByb21vQ29kZUxpc3QgKHByb21vQ29kZUl0ZW1JbnB1dDogJHByb21vQ29kZUl0ZW1JbnB1dCkge1xyXG4gICAgICAgIC4uLlByb21vQ29kZUZpZWxkc1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAke2ZyYWdtZW50LlByb21vQ29kZUZpZWxkc31cclxuICBgLFxyXG4gIGNhdGVnb3J5Um9vdFBhcmVudDogZ3FsYFxyXG4gICAgcXVlcnkgKCRjYXRlZ29yeUl0ZW1JbnB1dDogQ2F0ZWdvcnlJdGVtSW5wdXQpIHtcclxuICAgICAgY2F0ZWdvcnlSb290UGFyZW50IChjYXRlZ29yeUl0ZW1JbnB1dDogJGNhdGVnb3J5SXRlbUlucHV0KSB7XHJcbiAgICAgICAgLi4uQ2F0ZWdvcnlcclxuICAgICAgICBwYXJlbnRDYXRlZ29yeSB7XHJcbiAgICAgICAgICAuLi5DYXRlZ29yeVxyXG4gICAgICAgICAgcGFyZW50Q2F0ZWdvcnkge1xyXG4gICAgICAgICAgICAuLi5DYXRlZ29yeVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5DYXRlZ29yeUZpZWxkc31cclxuICBgLFxyXG4gIHByb2R1Y3RMaXN0T3JkZXJCeU9yZGVyOiBncWxgXHJcbiAgICBxdWVyeSAoJG9yZGVyQnlUeXBlOiBTdHJpbmcsICRwcm9kdWN0SW5wdXQ6IFByb2R1Y3RJdGVtSW5wdXQpIHtcclxuICAgICAgcHJvZHVjdExpc3RPcmRlckJ5T3JkZXIgKG9yZGVyQnlUeXBlOiAkb3JkZXJCeVR5cGUsIHByb2R1Y3RJbnB1dDogJHByb2R1Y3RJbnB1dCkge1xyXG4gICAgICAgIGxpc3Qge1xyXG4gICAgICAgICAgck9yZGVyUHJvZHVjdCB7XHJcbiAgICAgICAgICAgIC4uLlJPcmRlclByb2R1Y3RGaWVsZHNcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC4uLlByb2R1Y3RGaWVsZHNcclxuICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIC4uLkltZ0ZpZWxkc1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0b3RhbFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAke2ZyYWdtZW50LlByb2R1Y3RGaWVsZHN9XHJcbiAgICAke2ZyYWdtZW50LkltZ0ZpZWxkc31cclxuICAgICR7ZnJhZ21lbnQuUk9yZGVyUHJvZHVjdEZpZWxkc31cclxuICBgLFxyXG4gIHNlYXJjaERhdGE6IGdxbGBcclxuICAgIHF1ZXJ5ICgka2V5d29yZDogU3RyaW5nKSB7XHJcbiAgICAgIHByb2R1Y3RMaXN0KHByb2R1Y3RJbnB1dDogeyBuYW1lOiAka2V5d29yZCB9KSB7XHJcbiAgICAgICAgdG90YWxcclxuICAgICAgICBsaXN0IHtcclxuICAgICAgICAgIC4uLlByb2R1Y3RGaWVsZHNcclxuICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIC4uLkltZ0ZpZWxkc1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBncm91cFByb2R1Y3RMaXN0OiBwcm9kdWN0TGlzdChwcm9kdWN0SW5wdXQ6IHsgbmFtZTogJGtleXdvcmQsIGlzR3JvdXA6IDEgfSkge1xyXG4gICAgICAgIHRvdGFsXHJcbiAgICAgICAgbGlzdCB7XHJcbiAgICAgICAgICAuLi5Qcm9kdWN0RmllbGRzXHJcbiAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAuLi5JbWdGaWVsZHNcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZGFyZW5DYXJkUHJvbW9Db2RlTGlzdDogcHJvbW9Db2RlTGlzdChwcm9tb0NvZGVJdGVtSW5wdXQ6IHtcclxuICAgICAgICBwcm9tb0NvZGVUeXBlOiBcIiR7UHJvbW9Db2RlVHlwZUVudW0uRGFyZW5DYXJkfVwiLFxyXG4gICAgICAgIHRpdGxlOiAka2V5d29yZCxcclxuICAgICAgfSkge1xyXG4gICAgICAgIC4uLlByb21vQ29kZUZpZWxkc1xyXG4gICAgICB9XHJcbiAgICAgIHByb21vQ29kZVByb21vQ29kZUxpc3Q6IHByb21vQ29kZUxpc3QocHJvbW9Db2RlSXRlbUlucHV0OiB7XHJcbiAgICAgICAgcHJvbW9Db2RlVHlwZTogXCIke1Byb21vQ29kZVR5cGVFbnVtLlByb21vQ29kZX1cIixcclxuICAgICAgICB0aXRsZTogJGtleXdvcmQsXHJcbiAgICAgIH0pIHtcclxuICAgICAgICAuLi5Qcm9tb0NvZGVGaWVsZHNcclxuICAgICAgfVxyXG4gICAgICBvbmVVc2VyIHtcclxuICAgICAgICAuLi5Vc2VyRmllbGRzXHJcbiAgICAgICAgdXNlckluZm8ge1xyXG4gICAgICAgICAgLi4uVXNlckluZm9GaWVsZHNcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuVXNlckZpZWxkc31cclxuICAgICR7ZnJhZ21lbnQuVXNlckluZm9GaWVsZHN9XHJcbiAgICAke2ZyYWdtZW50LlByb2R1Y3RGaWVsZHN9XHJcbiAgICAke2ZyYWdtZW50LkltZ0ZpZWxkc31cclxuICAgICR7ZnJhZ21lbnQuUHJvbW9Db2RlRmllbGRzfVxyXG4gIGAsXHJcbn1cclxuXHJcbiIsImV4cG9ydCBlbnVtIFByb21vQ29kZVR5cGVFbnVtIHtcclxuICBEYXJlbkNhcmQgPSAnRGFyZW5DYXJkJyxcclxuICBQcm9tb0NvZGUgPSAnUHJvbW9Db2RlJyxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRGlzY291bnRUeXBlRW51bSB7XHJcbiAgUGVyY2VudGFnZSA9ICdQZXJjZW50YWdlJyxcclxuICBBbW91bnQgPSAnQW1vdW50JyxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gU1Mge1xyXG4gIFNTLFxyXG4gIFNTMixcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRGlzY291bnRDb25kaXRpb25FbnVtIHtcclxuICBObyA9ICdObycsXHJcbiAgQW1vdW50ID0gJ0Ftb3VudCcsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFByb2R1Y3RTdXBwbGVtZW50IHtcclxuICBfLFxyXG4gIFBlbmRpbmcsXHJcbiAgRmluaXNoLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUHJvZHVjdFN1cHBsZW1lbnRTdHJpbmc6IGFueSA9IHtcclxuICAxOiAn6YWN6LSn5LitJyxcclxuICAyOiAn5bey5a6M5oiQJyxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gT3JkZXJTdGF0ZSB7XHJcbiAgT3JkZXJlZCA9IDEsXHJcbiAgUGFpZCA9IDIsXHJcbiAgUGlja2luZyA9IDMsXHJcbiAgUGlja2VkVXAgPSA0LFxyXG4gIEZpbmlzaCA9IDUsXHJcbiAgQ2FuY2VsID0gNixcclxufVxyXG5cclxuLy8gMTrku6Pku5jmrL4gMjrlt7Lku5jmrL4gMzrlt7Llj5HotKcgNDrlt7LmlLbotKcgNTrlt7Llj5bmtoggNjrlt7LlrozmiJAgNzrlt7LpgIDlm55cclxuY29uc3QgX3M6IHtcclxuICBba2V5IGluIG51bWJlcl06IHN0cmluZ1xyXG59ID0ge1xyXG4gIDE6ICflvoXku5jmrL4nLFxyXG4gIDI6ICflt7Lku5jmrL4nLFxyXG4gIDM6ICflt7Llj5HotKcnLFxyXG4gIDQ6ICflt7LmlLbotKcnLFxyXG4gIDU6ICflt7Llj5bmtognLFxyXG4gIDY6ICflt7LlrozmiJAnLFxyXG4gIDc6ICflt7LpgIDlm54nLFxyXG59XHJcbmV4cG9ydCBjb25zdCBvcmRlclN0YXRlVG9TdHJpbmcgPSAoczogbnVtYmVyIHwgbnVsbCA9IDApID0+IHtcclxuICByZXR1cm4gX3M/LlsocyA/PyAwKV0gPz8gJydcclxufVxyXG5cclxuLy8g6YWN572u566h55CGXHJcbmV4cG9ydCBlbnVtIERpY3RUeXBlRW51bSB7XHJcbiAgR3JvdXBQcmVjaXNpb24gPSAnR3JvdXBQcmVjaXNpb24nLFxyXG4gIFVzZXJMZXZlbCA9ICdVc2VyTGV2ZWwnLFxyXG4gIEZyZWlnaHQgPSAnRnJlaWdodCcsXHJcbiAgSGVscERvY3VtZW50YXRpb25UeXBlID0gJ0hlbHBEb2N1bWVudGF0aW9uVHlwZScsXHJcbiAgSGVscERvY3VtZW50YXRpb24gPSAnSGVscERvY3VtZW50YXRpb24nLFxyXG4gIFByb21vdGlvblRoZW1lU2VsZWN0ID0gJ1Byb21vdGlvblRoZW1lU2VsZWN0JyxcclxuICBQcm9tb3Rpb25GbGFzaFNhbGUgPSAnUHJvbW90aW9uRmxhc2hTYWxlJyxcclxuICBIb21lQ2Fyb3VzZWwgPSAnSG9tZUNhcm91c2VsJyxcclxuICBPcmRlclN0YXRlID0gJ09yZGVyU3RhdGUnLFxyXG4gIFNlbGZBZGRyZXNzID0gJ1NlbGZBZGRyZXNzJyxcclxuICBBcHBNb2R1bGUgPSAnQXBwTW9kdWxlJyxcclxufVxyXG5cclxuLy8g6L2u5pKt5Zu+5YWz6IGU6aG5XHJcbmV4cG9ydCBlbnVtIFJlbGF0ZWRPYmpUeXBlRW51bSB7XHJcbiAgUHJvbW9Db2RlID0gJ1Byb21vQ29kZScsXHJcbiAgUHJvbW90aW9uRmxhc2hTYWxlID0gJ1Byb21vdGlvbkZsYXNoU2FsZScsXHJcbiAgUHJvbW90aW9uVGhlbWVTZWxlY3QgPSAnUHJvbW90aW9uVGhlbWVTZWxlY3QnLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBBcHBGb290QmFyIHtcclxuICBob21lID0gJ2hvbWUnLFxyXG4gIGdyb3VwID0gJ2dyb3VwJyxcclxuICBjYXJkID0gJ2NhcmQnLFxyXG4gIGNhcnQgPSAnY2FydCcsXHJcbiAgbWUgPSAnbWUnXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEFwcE1vZHVsZVR5cGVFbnVtIHtcclxuICBjYXRlZ29yeVNlbGVjdGlvbiA9ICdjYXRlZ29yeVNlbGVjdGlvbicsXHJcbiAgbGltaXRUaW1lID0gJ2xpbWl0VGltZScsXHJcbiAgc2FsZXNSYW5rID0gJ3NhbGVzUmFuaycsXHJcbiAgdGhlbWVTZWxlY3Rpb24gPSAndGhlbWVTZWxlY3Rpb24nLFxyXG4gIG1heUxpa2UgPSAnbWF5TGlrZScsXHJcbiAgbGluZVJhbmtpbmcgPSAnbGluZVJhbmtpbmcnLFxyXG4gIHRvcFJhbmtpbmcgPSAndG9wUmFua2luZycsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDYXRlZ29yeVJvb3ROYW1lID0gJ3Jvb3QnXHJcblxyXG5leHBvcnQgY29uc3Qgb3JkZXJTdGF0ZUtleXM6IHN0cmluZ1tdID0gT2JqZWN0LnZhbHVlcyhPcmRlclN0YXRlKSBhcyBzdHJpbmdbXVxyXG5cclxuZXhwb3J0IGNvbnN0IFByb3ZpbmNlRGF0YSA9IFtcclxuICBbJ0FMJywgJ0FsYWJhbWEnXSxcclxuICBbJ0FLJywgJ0FsYXNrYSddLFxyXG4gIFsnQVonLCAnQXJpem9uYSddLFxyXG4gIFsnQVInLCAnQXJrYW5zYXMnXSxcclxuICBbJ0NBJywgJ0NhbGlmb3JuaWEnXSxcclxuICBbJ0NPJywgJ0NvbG9yYWRvJ10sXHJcbiAgWydDVCcsICdDb25uZWN0aWN1dCddLFxyXG4gIFsnREUnLCAnRGVsYXdhcmUnXSxcclxuICBbJ0RDJywgJ0Rpc3RyaWN0IE9mIENvbHVtYmlhJ10sXHJcbiAgWydGTCcsICdGbG9yaWRhJ10sXHJcbiAgWydHQScsICdHZW9yZ2lhJ10sXHJcbiAgWydISScsICdIYXdhaWknXSxcclxuICBbJ0lEJywgJ0lkYWhvJ10sXHJcbiAgWydJTCcsICdJbGxpbm9pcyddLFxyXG4gIFsnSU4nLCAnSW5kaWFuYSddLFxyXG4gIFsnSUEnLCAnSW93YSddLFxyXG4gIFsnS1MnLCAnS2Fuc2FzJ10sXHJcbiAgWydLWScsICdLZW50dWNreSddLFxyXG4gIFsnTEEnLCAnTG91aXNpYW5hJ10sXHJcbiAgWydNRScsICdNYWluZSddLFxyXG4gIFsnTUQnLCAnTWFyeWxhbmQnXSxcclxuICBbJ01BJywgJ01hc3NhY2h1c2V0dHMnXSxcclxuICBbJ01JJywgJ01pY2hpZ2FuJ10sXHJcbiAgWydNTicsICdNaW5uZXNvdGEnXSxcclxuICBbJ01TJywgJ01pc3Npc3NpcHBpJ10sXHJcbiAgWydNTycsICdNaXNzb3VyaSddLFxyXG4gIFsnTVQnLCAnTW9udGFuYSddLFxyXG4gIFsnTkUnLCAnTmVicmFza2EnXSxcclxuICBbJ05WJywgJ05ldmFkYSddLFxyXG4gIFsnTkgnLCAnTmV3IEhhbXBzaGlyZSddLFxyXG4gIFsnTkonLCAnTmV3IEplcnNleSddLFxyXG4gIFsnTk0nLCAnTmV3IE1leGljbyddLFxyXG4gIFsnTlknLCAnTmV3IFlvcmsnXSxcclxuICBbJ05DJywgJ05vcnRoIENhcm9saW5hJ10sXHJcbiAgWydORCcsICdOb3J0aCBEYWtvdGEnXSxcclxuICBbJ09IJywgJ09oaW8nXSxcclxuICBbJ09LJywgJ09rbGFob21hJ10sXHJcbiAgWydPUicsICdPcmVnb24nXSxcclxuICBbJ1BBJywgJ1Blbm5zeWx2YW5pYSddLFxyXG4gIFsnUkknLCAnUmhvZGUgSXNsYW5kJ10sXHJcbiAgWydTQycsICdTb3V0aCBDYXJvbGluYSddLFxyXG4gIFsnU0QnLCAnU291dGggRGFrb3RhJ10sXHJcbiAgWydUTicsICdUZW5uZXNzZWUnXSxcclxuICBbJ1RYJywgJ1RleGFzJ10sXHJcbiAgWydVVCcsICdVdGFoJ10sXHJcbiAgWydWVCcsICdWZXJtb250J10sXHJcbiAgWydWQScsICdWaXJnaW5pYSddLFxyXG4gIFsnV0EnLCAnV2FzaGluZ3RvbiddLFxyXG4gIFsnV1YnLCAnV2VzdCBWaXJnaW5pYSddLFxyXG4gIFsnV0knLCAnV2lzY29uc2luJ10sXHJcbiAgWydXWScsICdXeW9taW5nJ10sXHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQaWNrVXBUeXBlTmFtZSA9ICh0eXBlOiBzdHJpbmcgfCAnU2VsZicgfCAnRGVsaXZlcnknKSA9PiB7XHJcbiAgcmV0dXJuICh7XHJcbiAgICBTZWxmOiAn6Ieq5Y+WJyxcclxuICAgIERlbGl2ZXJ5OiAn6YWN6YCBJyxcclxuICB9KVt0eXBlIGFzICdTZWxmJyB8ICdEZWxpdmVyeSddID8/ICcnXHJcbn1cclxuZXhwb3J0IGNvbnN0IFBpY2tVcFR5cGVFbnVtID0ge1xyXG4gIFNlbGY6ICdTZWxmJyxcclxuICBEZWxpdmVyeTogJ0RlbGl2ZXJ5JyxcclxufVxyXG4vLyDng63plIDmjpLooYxcclxuZXhwb3J0IGNvbnN0IFNhbGVSYW5rVHlwZUVudW0gPSB7XHJcbiAgT25lRGF5OiAnT25lRGF5JyxcclxuICBPbmVXZWVrOiAnT25lV2VlaycsXHJcbiAgT25lTW9udGg6ICdPbmVNb250aCcsXHJcbn1cclxuXHJcbiIsImV4cG9ydCBjb25zdCBtcFN0eWxlID0ge1xyXG4gIHJlZDogJyNGODQwMzMnLFxyXG4gIHNoYWRvdzoge1xyXG4gICAgMTogJzAgMXB4IDFweCAwIHJnYmEoMCwwLDAsMC4xNCksIDAgMnB4IDFweCAtMXB4IHJnYmEoMCwwLDAsMC4xMiksIDAgMXB4IDNweCAwIHJnYmEoMCwwLDAsMC4yMCknLFxyXG4gIH0sXHJcbn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlTXVpVGhlbWUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHttcFN0eWxlfSBmcm9tICcuL2NvbW1vbidcclxuXHJcbmV4cG9ydCBjb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcclxuICBwYWxldHRlOiB7XHJcbiAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgbWFpbjogbXBTdHlsZS5yZWQsXHJcbiAgICB9LFxyXG4gIH1cclxufSlcclxuIiwiaW1wb3J0IHsgTWF5YmUgfSBmcm9tIFwiLi4vZ3JhcGhxbFR5cGVzL3R5cGVzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgbHMgPSAoa2V5OiBNYXliZTxzdHJpbmc+IHwgdW5kZWZpbmVkKSA9PiBrZXkgPz8gJydcclxuIiwiXHJcbmV4cG9ydCBjb25zdCBpc0RldiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnXHJcblxyXG5leHBvcnQgY29uc3Qgc3NMb2cgPSAoZGF0YTogYW55KSA9PiB7XHJcbiAgaWYgKGlzRGV2KSB7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gIH1cclxuICByZXR1cm4gZGF0YVxyXG59XHJcbiIsIi8qIGdsb2JhbCBsb2NhbFN0b3JhZ2UgKi9cclxuZXhwb3J0IGNvbnN0IHNldFRva2VuID0gKHRva2VuOiBzdHJpbmcsIG5hbWUgPSAndG9rZW4nKSA9PiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShuYW1lLCB0b2tlbilcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRUb2tlbiA9IChuYW1lID0gJ3Rva2VuJykgPT4gbG9jYWxTdG9yYWdlLmdldEl0ZW0obmFtZSkgfHwgJydcclxuIiwiaW1wb3J0IGZvcm1hdCBmcm9tICdkYXRlLWZucy9mb3JtYXQnXHJcbmltcG9ydCBzZXQgZnJvbSAnbG9kYXNoL3NldCdcclxuaW1wb3J0IHtjbG9uZURlZXAsIFByb3BlcnR5UGF0aCwgaXNGdW5jdGlvbiwgZ2V0LCBpc0FycmF5LCBtZXJnZVdpdGgsIGlzU3RyaW5nfSBmcm9tICdsb2Rhc2gnXHJcbmltcG9ydCB7TWF5YmV9IGZyb20gJy4uL2dyYXBocWxUeXBlcy90eXBlcydcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRPYmplY3RVUkwgPSAoZmlsZTogYW55KSA9PiB7XHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gIHJldHVybiB3aW5kb3c/LmNyZWF0ZU9iamVjdFVSTD8uKGZpbGUpXHJcbiAgICAgID8/IHdpbmRvdz8uVVJMPy5jcmVhdGVPYmplY3RVUkw/LihmaWxlKVxyXG4gICAgICA/PyB3aW5kb3c/LndlYmtpdFVSTD8uY3JlYXRlT2JqZWN0VVJMPy4oZmlsZSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHBhcnNlRmxvYXRGb3JJbnB1dCA9ICh2YWx1ZTogYW55KSA9PiB7XHJcbiAgaWYgKHZhbHVlID09PSAnLScgfHwgdmFsdWUgPT09ICcnKSByZXR1cm4gdmFsdWVcclxuICB0cnkge1xyXG4gICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5lcnJvcihlKVxyXG4gIH1cclxufVxyXG5cclxudHlwZSBTZXREYXRhPFMgPSBhbnk+ID0gUyB8ICgocHJlRGF0YTogUykgPT4gUylcclxuXHJcbmV4cG9ydCBjb25zdCBmcFNldCA9IDxFID0gYW55PihvcmlnaW46IGFueSwgcGF0aDogYW55LCB2YWx1ZTogU2V0RGF0YTxFPikgPT4ge1xyXG4gIGxldCBuZXdEYXRhID0gY2xvbmVEZWVwKG9yaWdpbilcclxuICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcclxuICAgIGNvbnN0IG9sZERhdGEgPSBnZXQob3JpZ2luLCBwYXRoKVxyXG4gICAgc2V0KG5ld0RhdGEsIHBhdGgsIHZhbHVlKG9sZERhdGEpKVxyXG4gIH0gZWxzZSB7XHJcbiAgICBzZXQobmV3RGF0YSwgcGF0aCwgdmFsdWUpXHJcbiAgfVxyXG4gIHJldHVybiBuZXdEYXRhXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkZWxheSA9ICh0aW1lOiBudW1iZXIpID0+IChuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgdGltZSkpKVxyXG5cclxuZXhwb3J0IGNvbnN0IGZwU2V0UHJlOiA8VCBleHRlbmRzIG9iamVjdD4ocGF0aDogUHJvcGVydHlQYXRoLCBuZXdWYWx1ZTogU2V0RGF0YSkgPT4gKG9yaWdpbjogVCkgPT4gVCA9IChwYXRoOiBhbnksIHZhbHVlKSA9PiAob3JpZ2luKSA9PiB7XHJcbiAgbGV0IG5ld0RhdGEgPSBjbG9uZURlZXAob3JpZ2luKVxyXG4gIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xyXG4gICAgY29uc3Qgb2xkRGF0YSA9IGdldChvcmlnaW4sIHBhdGgpXHJcbiAgICBzZXQobmV3RGF0YSwgcGF0aCwgdmFsdWUob2xkRGF0YSkpXHJcbiAgfSBlbHNlIHtcclxuICAgIHNldChuZXdEYXRhLCBwYXRoLCB2YWx1ZSlcclxuICB9XHJcbiAgcmV0dXJuIG5ld0RhdGFcclxufVxyXG5cclxuY29uc3QgY3VzdG9taXplciA9IChvYmpWYWx1ZTogYW55LCBzcmNWYWx1ZTogYW55KSA9PiB7XHJcbiAgaWYgKGlzQXJyYXkoc3JjVmFsdWUpKSB7XHJcbiAgICByZXR1cm4gc3JjVmFsdWVcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmcE1lcmdlOiA8VE9iamVjdCwgVFNvdXJjZTE+KFxyXG4gICAgb3JpZ2luOiBUT2JqZWN0LFxyXG4gICAgbmV3VmFsdWU6IFRTb3VyY2UxLFxyXG4pID0+IFRPYmplY3QgJiBUU291cmNlMSA9IChvcmlnaW4sIG5ld1ZhbHVlKSA9PiB7XHJcbiAgcmV0dXJuIG1lcmdlV2l0aCh7fSwgb3JpZ2luLCBuZXdWYWx1ZSwgY3VzdG9taXplcilcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGZwTWVyZ2VQcmU6IDxQcmUsIE5ldyBleHRlbmRzIFBhcnRpYWw8UHJlPj4obmV3VmFsdWU6IE5ldykgPT4gKG9yaWdpbjogUHJlKSA9PiBQcmUgJiBOZXcgPSAobmV3VmFsdWUpID0+IChwcmUpID0+IG1lcmdlV2l0aCh7fSwgcHJlLCBuZXdWYWx1ZSwgY3VzdG9taXplcilcclxuXHJcbmV4cG9ydCBjb25zdCBmcFJlbW92ZSA9IChhcnI6IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gIGlmICghYXJyKSByZXR1cm4gW11cclxuICByZXR1cm4gW1xyXG4gICAgLi4uYXJyPy5zbGljZSgwLCBpbmRleCksXHJcbiAgICAuLi5hcnI/LnNsaWNlKGluZGV4ICsgMSwgYXJyPy5sZW5ndGgpLFxyXG4gIF1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRlYWxOdW1iZXJaZXJvID0gKGxlbmd0aDogbnVtYmVyKSA9PiAobnVtOiBudW1iZXIpID0+IHtcclxuICBjb25zdCBfcyA9IGAke251bSA/PyAnJ31gXHJcbiAgcmV0dXJuIEFycmF5KGxlbmd0aCAtIF9zLmxlbmd0aCkuZmlsbCgnMCcpLmpvaW4oJycpICsgX3NcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGZvcm1hdERhdGUgPSAoZGF0ZTogYW55ID0gJycsIGZvcm1hdFN0cmluZyA9ICdZWVlZLU1NLWRkIEhIOm1tOnNzJykgPT4ge1xyXG4gIGlmICghZGF0ZSkge1xyXG4gICAgcmV0dXJuICcnXHJcbiAgfVxyXG4gIGlmIChpc1N0cmluZyhkYXRlKSkge1xyXG4gICAgcmV0dXJuIGZvcm1hdChuZXcgRGF0ZShkYXRlKSwgZm9ybWF0U3RyaW5nLCB7XHJcbiAgICAgIHVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnM6IHRydWUsXHJcbiAgICAgIHVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2VuczogdHJ1ZSxcclxuICAgIH0pXHJcbiAgfVxyXG4gIHJldHVybiAoaXNOYU4oZGF0ZSkpID8gJycgOiBmb3JtYXQoZGF0ZSwgZm9ybWF0U3RyaW5nLCB7XHJcbiAgICB1c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zOiB0cnVlLFxyXG4gICAgdXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zOiB0cnVlLFxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkZWFsTm9uQm9vbGVhblByb3BzID0gKHZhbHVlOiBhbnkpID0+ICEhdmFsdWUgPyAxIDogMFxyXG5cclxuZXhwb3J0IGNvbnN0IGZvcm1hdE1vbmV5ID0gKGFtb3VudDogYW55LCBkZWNpbWFsQ291bnQgPSAyLCBkZWNpbWFsID0gXCIuXCIsIHRob3VzYW5kcyA9IFwiLFwiKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGRlY2ltYWxDb3VudCA9IE1hdGguYWJzKGRlY2ltYWxDb3VudClcclxuICAgIGRlY2ltYWxDb3VudCA9IGlzTmFOKGRlY2ltYWxDb3VudCkgPyAyIDogZGVjaW1hbENvdW50XHJcblxyXG4gICAgY29uc3QgbmVnYXRpdmVTaWduID0gYW1vdW50IDwgMCA/IFwiLVwiIDogXCJcIlxyXG5cclxuICAgIGxldCBpID0gcGFyc2VJbnQoYW1vdW50ID0gTWF0aC5hYnMoTnVtYmVyKGFtb3VudCkgfHwgMCkudG9GaXhlZChkZWNpbWFsQ291bnQpKS50b1N0cmluZygpXHJcbiAgICBsZXQgaiA9IChpLmxlbmd0aCA+IDMpID8gaS5sZW5ndGggJSAzIDogMFxyXG5cclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIHJldHVybiBuZWdhdGl2ZVNpZ24gKyAoaiA/IGkuc3Vic3RyKDAsIGopICsgdGhvdXNhbmRzIDogJycpICsgaS5zdWJzdHIoaikucmVwbGFjZSgvKFxcZHszfSkoPz1cXGQpL2csIFwiJDFcIiArIHRob3VzYW5kcykgKyAoZGVjaW1hbENvdW50ID8gZGVjaW1hbCArIE1hdGguYWJzKGFtb3VudCAtIGkpLnRvRml4ZWQoZGVjaW1hbENvdW50KS5zbGljZSgyKSA6IFwiXCIpXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5sb2coZSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkZWFsTW9uZXkgPSAoYW1vdW50OiBhbnksIHByZSA9ICcnKSA9PiBgJHtwcmV9JCAke2Zvcm1hdE1vbmV5KGFtb3VudCl9YFxyXG5cclxuZXhwb3J0IGNvbnN0IGRlYWxNYXliZU51bWJlciA9IChudW06IE1heWJlPG51bWJlcj4gfCB1bmRlZmluZWQpID0+IG51bSA/PyAwXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgZ2V0T2JqZWN0VVJMLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGVhbFVybFF1ZXJ5ID0gKHF1ZXJ5T2JqOiBhbnkpID0+IHtcclxuICByZXR1cm4gYD8ke09iamVjdC5rZXlzKHF1ZXJ5T2JqKS5tYXAodmFsdWUgPT4gYCR7dmFsdWV9PSR7cXVlcnlPYmpbdmFsdWVdfWApLmpvaW4oJyYnKX1gXHJcbn1cclxuXHJcblxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWJvb3N0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNyb3NzLWZldGNoL3BvbHlmaWxsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRhdGUtZm5zL2Zvcm1hdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoL3NldFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2NvbmZpZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==