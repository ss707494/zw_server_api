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
        }
    }
    ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].GroupQueueFields}
  `,
  updateOrder: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation ($orderInfoItemInput: OrderInfoItemInput) {
        updateOrder (orderInfoItemInput: $orderInfoItemInput) {
            ...OrderInfoFields
        }
    }
    ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].OrderInfoFields}
  `
};

/***/ }),

/***/ "./utils/ss_common/enum.ts":
/*!*********************************!*\
  !*** ./utils/ss_common/enum.ts ***!
  \*********************************/
/*! exports provided: PromoCodeTypeEnum, DiscountTypeEnum, SS, DiscountConditionEnum, ProductSupplement, ProductSupplementString, OrderState, orderStateToString, DictTypeEnum, RelatedObjTypeEnum, AppFootBar, AppModuleTypeEnum, CategoryRootName, orderStateKeys, ProvinceData, getPickUpTypeName, PickUpTypeEnum */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvTW9kZWxBY3Rpb24vbW9kZWxVdGlsLnRzIiwid2VicGFjazovLy8uL3V0aWxzL01vZGVsQWN0aW9uL3VzZVN0b3JlLnRzIiwid2VicGFjazovLy8uL3V0aWxzL2NsaWVudC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi91dGlscy9jb21wb25lbnRzL01lc3NhZ2UvTWVzc2FnZS50c3giLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZ3JhcGhxbFR5cGVzL2RvYy9mcmFnbWVudC50cyIsIndlYnBhY2s6Ly8vLi91dGlscy9ncmFwaHFsVHlwZXMvZG9jL2luZGV4LnRzIiwid2VicGFjazovLy8uL3V0aWxzL3NzX2NvbW1vbi9lbnVtLnRzIiwid2VicGFjazovLy8uL3V0aWxzL3N0eWxlL2NvbW1vbi50cyIsIndlYnBhY2s6Ly8vLi91dGlscy9zdHlsZS90aGVtZS50cyIsIndlYnBhY2s6Ly8vLi91dGlscy90b29scy9kZWFsS2V5LnRzIiwid2VicGFjazovLy8uL3V0aWxzL3Rvb2xzL2dsb2JhbC50cyIsIndlYnBhY2s6Ly8vLi91dGlscy90b29scy90b2tlbi50cyIsIndlYnBhY2s6Ly8vLi91dGlscy90b29scy91dGlscy50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9yc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFwb2xsby1ib29zdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNyb3NzLWZldGNoL3BvbHlmaWxsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZGF0ZS1mbnMvZm9ybWF0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoL3NldFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvY29uZmlnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ0aGVtZSIsImJhc2VBY3Rpb25PcHRpb24iLCJkYXRhIiwibXV0YXRlIiwibm90aWNlIiwicXVlcnkiLCJzZXREYXRhIiwic3RvcmUiLCJtb2RlbE5hbWVMaXN0IiwibW9kZWxGYWN0b3J5IiwibmFtZSIsInN0YXRlIiwiYWN0aW9ucyIsImluY2x1ZGVzIiwiRXJyb3IiLCJwdXNoIiwiZmV0Y2hMb2FkIiwiZmV0Y2hFcnJvciIsIm1lcmdlTW9kZWwiLCJtb2RlbCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwidmFsdWUiLCJtZXJnZU5hbWUiLCJtZXJnZVR3b01vZGVsIiwibW9kZWxUIiwibWVyZ2VUaHJlZU1vZGVsIiwibW9kZWxBIiwibW9kZWxCIiwibW9kZWxDIiwibWVyZ2VMaXN0TW9kZWwiLCJtb2RlbExpc3QiLCJzbGljZSIsInJlZHVjZSIsImFjYyIsImluaXRMaXN0IiwiaW5pdE1vZGVsIiwiaW5pdFN0YXRlIiwib3JpZ2luU3RvcmUiLCJpc0Z1bmN0aW9uIiwiZnVuY3Rpb25Ub0NoZWNrIiwidG9TdHJpbmciLCJjYWxsIiwiZGVhbE5hbWVTcGFjZSIsImtleSIsIm5hbWVTcGFjZSIsInVzZVN0b3JlTW9kZWwiLCJfa2V5IiwiQXJyYXkiLCJpc0FycmF5Iiwic2V0U3RhdGUiLCJ1c2VTdGF0ZSIsImNyZWF0ZSIsInVzZUNhbGxiYWNrIiwib2xkU3RhdGUiLCJuZXdEYXRhIiwic2V0TG9hZCIsImZsYWciLCJwcmV2U3RhdGUiLCJsb2MiLCJzb3VyY2UiLCJib2R5Iiwic2V0RXJyb3IiLCJlcnIiLCJwYXJhbXMiLCJvcHRpb24iLCJyZXMiLCJncmFwaFFMUXVlcnkiLCJjYXRjaCIsImUiLCJmaW5hbGx5IiwibXV0YXRpb24iLCJncmFwaFFMTXV0YXRlIiwibGVuZ3RoIiwiY29uc3RydWN0b3IiLCJ2IiwidXNlRWZmZWN0IiwiZmlsdGVyIiwiZ2V0TG9hZCIsImNvbmZpZyIsImdldENvbmZpZyIsImNsaWVudF9hcGlfdXJpIiwicHVibGljUnVudGltZUNvbmZpZyIsIm9taXRUeXBlbmFtZSIsInVuZGVmaW5lZCIsImdldENsaWVudCIsInJlcXVlc3QiLCJvcGVyYXRpb24iLCJ2YXJpYWJsZXMiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJzZXRDb250ZXh0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJnZXRUb2tlbiIsInJlZnJlc2hUb2tlbiIsImRvYyIsInRoZW4iLCJ0b2tlbiIsInNldFRva2VuIiwicmVmcmVzaHRva2VuIiwic2hvd01lc3NhZ2UiLCJtZXNzYWdlIiwiUm91dGVyIiwicmVsb2FkIiwic3NMb2ciLCJvbkVycm9yIiwicmVzcG9uc2UiLCJncmFwaFFMRXJyb3JzIiwibmV0d29ya0Vycm9yIiwibG9jYXRpb25zIiwicGF0aCIsImV4dGVuc2lvbnMiLCJjb2RlIiwic3BsaXQiLCJtc2dfdHlwZSIsImVyck1zZyIsImJvZHlUZXh0IiwicmVzdWx0IiwiZXJyb3IiLCJzdGF0dXNDb2RlIiwiQXBvbGxvQ2xpZW50IiwidXJpIiwiZGVmYXVsdENsaWVudCIsImRlYWxQYXJhbXMiLCJjbGllbnQiLCJfZGVhbFBhcmFtc0luIiwiZGVhbFBhcmFtc0luIiwiZmV0Y2hQb2xpY3kiLCJzZXJ2ZXJDbGllbnQiLCJzZXJ2ZXJRdWVyeSIsInNlcnZlck11dGF0ZSIsInR5cGVIZWxwIiwiZGVmYXVsdCIsImdyZXkiLCJzdWNjZXNzIiwiZ3JlZW4iLCJ3YXJuaW5nIiwiYW1iZXIiLCJpbmZvIiwiYmx1ZSIsInJlZCIsImdldFR5cGUiLCJ0eXBlIiwiQ3VzU25hY2tiYXIiLCJzdHlsZWQiLCJTbmFja2JhciIsImNvbW1vbiIsIndoaXRlIiwibWVzc2FnZU1vZGVsIiwib3BlbiIsImF1dG9IaWRlRHVyYXRpb24iLCJmcE1lcmdlUHJlIiwib25DbG9zZSIsIk1lc3NhZ2UiLCJtU3RhdGUiLCJscyIsImZyYWdtZW50IiwiQ2F0ZWdvcnlGaWVsZHMiLCJncWwiLCJVc2VyRmllbGRzIiwiVXNlckluZm9GaWVsZHMiLCJPcmRlckluZm9GaWVsZHMiLCJST3JkZXJQcm9kdWN0RmllbGRzIiwiUHJvZHVjdEZpZWxkcyIsIkltZ0ZpZWxkcyIsIlVzZXJBZGRyZXNzRmllbGRzIiwiVXNlclBheUNhcmRGaWVsZHMiLCJTaG9wQ2FydEZpZWxkcyIsIkRhdGFDb25maWdGaWVsZHMiLCJEaWN0RmllbGRzIiwiR3JvdXBRdWV1ZUZpZWxkcyIsImdldFVzZXJMaXN0RG9jIiwiZ2V0RGF0YUNvbmZpZyIsImhvbWVDYXJvdXNlbEltZ3MiLCJjYXRlZ29yeUxpc3QiLCJyZWdpc3RlclVzZXIiLCJsb2dpbiIsIm9uZVVzZXIiLCJvcmRlckxpc3QiLCJvcmRlckRldGFpbCIsIkRpY3RUeXBlRW51bSIsIlNlbGZBZGRyZXNzIiwidXBkYXRlUGFzc3dvcmQiLCJwYXlDYXJkTGlzdE9uZVVzZXIiLCJ1c2VyUGF5Q2FyZCIsInNhdmVVc2VyUGF5Q2FyZCIsInNldFVzZXJQYXlDYXJkRGVmYXVsdCIsInBpY2t1cEFkZHJlc3MiLCJ1cGRhdGVVc2VySW5mbyIsInVzZXJBZGRyZXNzTGlzdE9uZVVzZXIiLCJ1c2VyQWRkcmVzcyIsInNhdmVVc2VyQWRkcmVzcyIsInNldFVzZXJBZGRyZXNzRGVmYXVsdCIsInByb2R1Y3RzSW5DYXRlZ29yeSIsImNhdGVnb3J5TGV2ZWwiLCJvbmVDYXRlZ29yeSIsInByb2R1Y3RMaXN0IiwidXBkYXRlTnVtU2hvcENhcnQiLCJ1c2VyU2hvcENhcnRMaXN0IiwidXBkYXRlU2hvcENhcnQiLCJvcmRlckNvbmZpcm1JbmZvIiwiRnJlaWdodCIsInNhdmVPcmRlciIsImRpY3RMaXN0IiwibGltaXRUaW1lRGF0YSIsIlByb21vdGlvbkZsYXNoU2FsZSIsInByb2R1Y3RMaXN0QnlJZHMiLCJncm91cFF1ZXVlTGlzdCIsInVwZGF0ZU9yZGVyIiwiUHJvbW9Db2RlVHlwZUVudW0iLCJEaXNjb3VudFR5cGVFbnVtIiwiU1MiLCJEaXNjb3VudENvbmRpdGlvbkVudW0iLCJQcm9kdWN0U3VwcGxlbWVudCIsIlByb2R1Y3RTdXBwbGVtZW50U3RyaW5nIiwiT3JkZXJTdGF0ZSIsIl9zIiwib3JkZXJTdGF0ZVRvU3RyaW5nIiwicyIsIlJlbGF0ZWRPYmpUeXBlRW51bSIsIkFwcEZvb3RCYXIiLCJBcHBNb2R1bGVUeXBlRW51bSIsIkNhdGVnb3J5Um9vdE5hbWUiLCJvcmRlclN0YXRlS2V5cyIsInZhbHVlcyIsIlByb3ZpbmNlRGF0YSIsImdldFBpY2tVcFR5cGVOYW1lIiwiU2VsZiIsIkRlbGl2ZXJ5IiwiUGlja1VwVHlwZUVudW0iLCJtcFN0eWxlIiwic2hhZG93IiwiY3JlYXRlTXVpVGhlbWUiLCJwYWxldHRlIiwic2Vjb25kYXJ5IiwibWFpbiIsImlzRGV2IiwiY29uc29sZSIsImxvZyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJnZXRJdGVtIiwiZ2V0T2JqZWN0VVJMIiwiZmlsZSIsIndpbmRvdyIsImNyZWF0ZU9iamVjdFVSTCIsIlVSTCIsIndlYmtpdFVSTCIsInBhcnNlRmxvYXRGb3JJbnB1dCIsInBhcnNlRmxvYXQiLCJmcFNldCIsIm9yaWdpbiIsImNsb25lRGVlcCIsIm9sZERhdGEiLCJnZXQiLCJzZXQiLCJkZWxheSIsInRpbWUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJmcFNldFByZSIsImN1c3RvbWl6ZXIiLCJvYmpWYWx1ZSIsInNyY1ZhbHVlIiwiZnBNZXJnZSIsIm5ld1ZhbHVlIiwibWVyZ2VXaXRoIiwicHJlIiwiZnBSZW1vdmUiLCJhcnIiLCJpbmRleCIsImRlYWxOdW1iZXJaZXJvIiwibnVtIiwiZmlsbCIsImpvaW4iLCJmb3JtYXREYXRlIiwiZGF0ZSIsImZvcm1hdFN0cmluZyIsImlzU3RyaW5nIiwiZm9ybWF0IiwiRGF0ZSIsInVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnMiLCJ1c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnMiLCJpc05hTiIsImRlYWxOb25Cb29sZWFuUHJvcHMiLCJmb3JtYXRNb25leSIsImFtb3VudCIsImRlY2ltYWxDb3VudCIsImRlY2ltYWwiLCJ0aG91c2FuZHMiLCJNYXRoIiwiYWJzIiwibmVnYXRpdmVTaWduIiwiaSIsInBhcnNlSW50IiwiTnVtYmVyIiwidG9GaXhlZCIsImoiLCJzdWJzdHIiLCJyZXBsYWNlIiwiZGVhbE1vbmV5IiwiZGVhbE1heWJlTnVtYmVyIiwiZGVhbFVybFF1ZXJ5IiwicXVlcnlPYmoiLCJtYXAiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7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RUFBcUJHLE9BQXJCLENBQTZCVCxZQUE3QixFQUEyQ2xRLEtBQTNDLENBQWlELENBQWpELENBQWIsR0FBbUUsRUFBak0sQ0FBUDtBQUNELEdBWEQsQ0FXRSxPQUFPcUMsQ0FBUCxFQUFVO0FBQ1YwSyxXQUFPLENBQUNDLEdBQVIsQ0FBWTNLLENBQVo7QUFDRDtBQUNGLENBZk07QUFpQkEsTUFBTTBPLFNBQVMsR0FBRyxDQUFDZCxNQUFELEVBQWNuQixHQUFHLEdBQUcsRUFBcEIsS0FBNEIsR0FBRUEsR0FBSSxLQUFJa0IsV0FBVyxDQUFDQyxNQUFELENBQVMsRUFBNUU7QUFFQSxNQUFNZSxlQUFlLEdBQUk3QixHQUFELElBQW9DQSxHQUFwQyxhQUFvQ0EsR0FBcEMsY0FBb0NBLEdBQXBDLEdBQTJDLENBQW5FO0FBRVE7QUFDYi9CO0FBRGEsQ0FBZjtBQUlPLE1BQU02RCxZQUFZLEdBQUlDLFFBQUQsSUFBbUI7QUFDN0MsU0FBUSxJQUFHL1IsTUFBTSxDQUFDQyxJQUFQLENBQVk4UixRQUFaLEVBQXNCQyxHQUF0QixDQUEwQjdSLEtBQUssSUFBSyxHQUFFQSxLQUFNLElBQUc0UixRQUFRLENBQUM1UixLQUFELENBQVEsRUFBL0QsRUFBa0UrUCxJQUFsRSxDQUF1RSxHQUF2RSxDQUE0RSxFQUF2RjtBQUNELENBRk0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0SFAsOEM7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsaUQ7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgJy4uL3V0aWxzL3N0eWxlL3Jlc2V0LmNzcydcclxuaW1wb3J0IFwicmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbC9saWIvc3R5bGVzL2Nhcm91c2VsLm1pbi5jc3NcIlxyXG5pbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHt0aGVtZX0gZnJvbSAnLi4vdXRpbHMvc3R5bGUvdGhlbWUnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4uL3V0aWxzL2NvbXBvbmVudHMvTWVzc2FnZS9NZXNzYWdlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xyXG4gIHJldHVybiA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDx0aXRsZT5NYXJrZXQgUGF5bGVzczwvdGl0bGU+XHJcbiAgICA8L0hlYWQ+XHJcbiAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICA8TWVzc2FnZSAvPlxyXG4gIDwvVGhlbWVQcm92aWRlcj5cclxufVxyXG5cclxuIiwiXHJcbnR5cGUgTW9kZWxGYWN0b3J5PE4gPSAnJz4gPSA8VCwgRSBleHRlbmRzIE1vZGVsQWN0aW9uT2JqSGVscDxhbnksIFQgJiBGZXRjaE9iaj4+KG5hbWU6IHN0cmluZywgc3RhdGU6IFQsIGFjdGlvbnM6IEUpID0+IE1vZGVsRGF0YTxUICYgRmV0Y2hPYmosIEU+XHJcblxyXG5leHBvcnQgY29uc3QgYmFzZUFjdGlvbk9wdGlvbjogQmFzZU1vZGVsQWN0aW9uT3B0aW9uID0ge1xyXG4gIGRhdGE6IG51bGwsXHJcbiAgbXV0YXRlOiAoKSA9PiB7fSxcclxuICBub3RpY2U6ICgpID0+IHt9LFxyXG4gIHF1ZXJ5OiAoKSA9PiB7fSxcclxuICBzZXREYXRhOiAoKSA9PiB7fSxcclxuICBzdG9yZToge31cclxufVxyXG5cclxuY29uc3QgbW9kZWxOYW1lTGlzdDpzdHJpbmdbXSA9IFtdXHJcbmV4cG9ydCBjb25zdCBtb2RlbEZhY3Rvcnk6IE1vZGVsRmFjdG9yeSA9IChuYW1lLCBzdGF0ZSwgYWN0aW9ucykgPT4ge1xyXG4gIGlmIChtb2RlbE5hbWVMaXN0LmluY2x1ZGVzKG5hbWUpKSB7XHJcbiAgICB0aHJvdyBFcnJvcihgbW9kZWwgTmFtZSBkdXBsaWNhdGU6ICR7bmFtZX1gKVxyXG4gIH1cclxuICBtb2RlbE5hbWVMaXN0LnB1c2gobmFtZSlcclxuICByZXR1cm4ge1xyXG4gICAgbmFtZSxcclxuICAgIHN0YXRlOiB7XHJcbiAgICAgIC4uLnN0YXRlLFxyXG4gICAgICBmZXRjaExvYWQ6IHt9LFxyXG4gICAgICBmZXRjaEVycm9yOiB7fSxcclxuICAgIH0sXHJcbiAgICBhY3Rpb25zLFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlTW9kZWw8QSBleHRlbmRzIEZldGNoT2JqLCBCIGV4dGVuZHMgTW9kZWxBY3Rpb25PYmpIZWxwPGFueSwgQT4sIEMsIEQgZXh0ZW5kcyBNb2RlbEFjdGlvbk9iakhlbHA8YW55LCBBICYgQz4+KG1vZGVsOiB7XHJcbiAgc3RhdGU6IEFcclxuICBhY3Rpb25zOiBCXHJcbiAgbmFtZTogc3RyaW5nXHJcbn0sIG5hbWU6IHN0cmluZywgc3RhdGU6IEMsIGFjdGlvbnM6IEQpOiB7XHJcbiAgc3RhdGU6IEEgJiBDXHJcbiAgYWN0aW9uczogQiAmIEQgJiB7XHJcbiAgICBba2V5IGluIGtleW9mIEJdOiBNb2RlbEFjdGlvbjxhbnksIEE+XHJcbiAgfSAmIHtcclxuICAgIFtrZXkgaW4ga2V5b2YgRF06IE1vZGVsQWN0aW9uPGFueSwgQSAmIEM+XHJcbiAgfVxyXG4gIG5hbWU6IHN0cmluZ1xyXG59IHtcclxuICBPYmplY3Qua2V5cyhtb2RlbC5zdGF0ZSkuZm9yRWFjaCh2YWx1ZSA9PiB7XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBpZiAoc3RhdGU/Llt2YWx1ZV0gJiYgIVsnZmV0Y2hFcnJvcicsICdmZXRjaExvYWQnXS5pbmNsdWRlcyh2YWx1ZSkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBtZXJnZU1vZGVsOiBzdGF0ZSBkdXBsaWNhdGU6OiBrZXkgJHt2YWx1ZX1gKVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgT2JqZWN0LmtleXMobW9kZWwuYWN0aW9ucykuZm9yRWFjaCh2YWx1ZSA9PiB7XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBpZiAoYWN0aW9ucz8uW3ZhbHVlXSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYG1lcmdlTW9kZWw6IGFjdGlvbiBkdXBsaWNhdGU6OiBrZXkgJHt2YWx1ZX1gKVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgY29uc3QgbWVyZ2VOYW1lID0gYCR7bmFtZX1fd2l0aF8ke21vZGVsLm5hbWV9YFxyXG4gIGlmIChtb2RlbE5hbWVMaXN0LmluY2x1ZGVzKG1lcmdlTmFtZSkpIHtcclxuICAgIHRocm93IEVycm9yKGBtb2RlbCBOYW1lIGR1cGxpY2F0ZTogJHttZXJnZU5hbWV9YClcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBuYW1lOiBtZXJnZU5hbWUsXHJcbiAgICBzdGF0ZToge1xyXG4gICAgICAuLi5tb2RlbC5zdGF0ZSxcclxuICAgICAgLi4uc3RhdGUsXHJcbiAgICB9LFxyXG4gICAgYWN0aW9uczoge1xyXG4gICAgICAuLi5tb2RlbC5hY3Rpb25zLFxyXG4gICAgICAuLi5hY3Rpb25zLFxyXG4gICAgfSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVR3b01vZGVsPEEsIEIgZXh0ZW5kcyBNb2RlbEFjdGlvbk9iakhlbHA8YW55LCBBPiwgQywgRCBleHRlbmRzIE1vZGVsQWN0aW9uT2JqSGVscDxhbnksIEM+Pihtb2RlbDoge1xyXG4gIHN0YXRlOiBBXHJcbiAgYWN0aW9uczogQlxyXG4gIG5hbWU6IHN0cmluZ1xyXG59LCBtb2RlbFQ6IHtcclxuICBzdGF0ZTogQ1xyXG4gIGFjdGlvbnM6IERcclxuICBuYW1lOiBzdHJpbmdcclxufSk6IHtcclxuICBuYW1lOiBzdHJpbmdcclxuICBzdGF0ZTogQSAmIENcclxuICBhY3Rpb25zOiBCICYgRCAmIHtcclxuICAgIFtrZXkgaW4ga2V5b2YgQl06IE1vZGVsQWN0aW9uXHJcbiAgfSAmIHtcclxuICAgIFtrZXkgaW4ga2V5b2YgRF06IE1vZGVsQWN0aW9uXHJcbiAgfVxyXG59IHtcclxuICBPYmplY3Qua2V5cyhtb2RlbC5zdGF0ZSkuZm9yRWFjaCh2YWx1ZSA9PiB7XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBpZiAobW9kZWxULnN0YXRlPy5bdmFsdWVdICYmICFbJ2ZldGNoRXJyb3InLCAnZmV0Y2hMb2FkJ10uaW5jbHVkZXModmFsdWUpKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgbWVyZ2VUd29Nb2RlbDogc3RhdGUgZHVwbGljYXRlOjoga2V5ICR7dmFsdWV9YClcclxuICAgIH1cclxuICB9KVxyXG4gIE9iamVjdC5rZXlzKG1vZGVsLmFjdGlvbnMpLmZvckVhY2godmFsdWUgPT4ge1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgaWYgKG1vZGVsVD8uYWN0aW9ucz8uW3ZhbHVlXSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYG1lcmdlVHdvTW9kZWw6IGFjdGlvbiBkdXBsaWNhdGU6OiBrZXkgJHt2YWx1ZX1gKVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgY29uc3QgbWVyZ2VOYW1lID0gYCR7bW9kZWwubmFtZX1fYW5kXyR7bW9kZWxULm5hbWV9YFxyXG4gIGlmIChtb2RlbE5hbWVMaXN0LmluY2x1ZGVzKG1lcmdlTmFtZSkpIHtcclxuICAgIHRocm93IEVycm9yKGBtb2RlbCBOYW1lIGR1cGxpY2F0ZTogJHttZXJnZU5hbWV9YClcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBuYW1lOiBtZXJnZU5hbWUsXHJcbiAgICBzdGF0ZToge1xyXG4gICAgICAuLi5tb2RlbC5zdGF0ZSxcclxuICAgICAgLi4ubW9kZWxULnN0YXRlLFxyXG4gICAgfSxcclxuICAgIGFjdGlvbnM6IHtcclxuICAgICAgLi4ubW9kZWwuYWN0aW9ucyxcclxuICAgICAgLi4ubW9kZWxULmFjdGlvbnMsXHJcbiAgICB9LFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG1lcmdlVGhyZWVNb2RlbCA9IDxBIGV4dGVuZHMgRmV0Y2hPYmosIFQgZXh0ZW5kcyBNb2RlbEFjdGlvbk9iakhlbHA8YW55LCBBPiwgQiBleHRlbmRzIEZldGNoT2JqLCBPIGV4dGVuZHMgTW9kZWxBY3Rpb25PYmpIZWxwPGFueSwgQj4sIEMgZXh0ZW5kcyBGZXRjaE9iaiwgUCBleHRlbmRzIE1vZGVsQWN0aW9uT2JqSGVscDxhbnksIEM+Pihtb2RlbEE6IE1vZGVsRGF0YTxBLCBUPiwgbW9kZWxCOiBNb2RlbERhdGE8QiwgTz4sIG1vZGVsQzogTW9kZWxEYXRhPEMsIFA+KToge1xyXG4gIG5hbWU6IHN0cmluZ1xyXG4gIHN0YXRlOiBBICYgQiAmIENcclxuICBhY3Rpb25zOiBUICYgTyAmIFAgJiB7XHJcbiAgICBba2V5IGluIGtleW9mIFRdOiBNb2RlbEFjdGlvblxyXG4gIH0gJiB7XHJcbiAgICBba2V5IGluIGtleW9mIE9dOiBNb2RlbEFjdGlvblxyXG4gIH0gJiB7XHJcbiAgICBba2V5IGluIGtleW9mIFBdOiBNb2RlbEFjdGlvblxyXG4gIH1cclxufSA9PiB7XHJcbiAgcmV0dXJuIG1lcmdlVHdvTW9kZWwobWVyZ2VUd29Nb2RlbChtb2RlbEEsIG1vZGVsQiksIG1vZGVsQylcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG1lcmdlTGlzdE1vZGVsID0gKG1vZGVsTGlzdDogTW9kZWxEYXRhPGFueSwgYW55PltdKSA9PiB7XHJcbiAgcmV0dXJuIG1vZGVsTGlzdC5zbGljZSgxKS5yZWR1Y2UoKGFjYywgbW9kZWwpID0+IG1lcmdlVHdvTW9kZWwoYWNjLCBtb2RlbCksIG1vZGVsTGlzdFswXSlcclxufVxyXG5cclxuY29uc3QgaW5pdExpc3Q6IHN0cmluZ1tdID0gW11cclxuZXhwb3J0IGNvbnN0IGluaXRNb2RlbCA9IDxUIGV4dGVuZHMgRmV0Y2hPYmosIEUgZXh0ZW5kcyBNb2RlbEFjdGlvbk9iakhlbHA8YW55LCBUPj4obW9kZWw6IE1vZGVsRGF0YTxULCBFPiwgaW5pdFN0YXRlOiBQYXJ0aWFsPFQ+KSA9PiB7XHJcbiAgaWYgKGluaXRMaXN0LmluY2x1ZGVzKG1vZGVsLm5hbWUpKSByZXR1cm5cclxuICBpbml0TGlzdC5wdXNoKG1vZGVsLm5hbWUpXHJcbiAgbW9kZWwuc3RhdGUgPSB7XHJcbiAgICAuLi5tb2RlbC5zdGF0ZSxcclxuICAgIC4uLmluaXRTdGF0ZSxcclxuICB9XHJcbn1cclxuXHJcbi8vIGNvbnN0IG1vZGVsID0gbW9kZWxGYWN0b3J5KHt9LCB7XHJcbi8vICAgc3M6IHtcclxuLy8gICAgIGVlZTogKHZhbHVlOiBzdHJpbmcsIG9wdGlvbikgPT4ge1xyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gfSlcclxuLy9cclxuLy8gdXNlU3RvcmVNb2RlbChNb2R1bGVFbnVtLlRlc3QsIG1vZGVsKS5hY3Rpb25zLnNzLmVlZSgnJylcclxuXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBtZXJnZUludG9Nb2RlbChvcmlnaW5Nb2RlbCwgbmFtZSwgaW5uZXJNb2RlbCkge1xyXG4vL1xyXG4vLyB9XHJcblxyXG4vLyBjb25zdCBfbW9kZWwgPSBtZXJnZVR3b01vZGVsKG1vZGVsRmFjdG9yeSh7XHJcbi8vICAgdDE6ICcnXHJcbi8vIH0sIHtcclxuLy8gfSksIG1vZGVsRmFjdG9yeSh7XHJcbi8vICAgdDM6ICcnXHJcbi8vIH0sIHtcclxuLy8gfSkpXHJcbi8vXHJcbi8vIG1lcmdlTW9kZWwoX21vZGVsLCB7XHJcbi8vICAgdDI6ICcnXHJcbi8vIH0sIHtcclxuLy8gfSlcclxuIiwiaW1wb3J0IHt1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHtncmFwaFFMTXV0YXRlLCBncmFwaFFMUXVlcnl9IGZyb20gJy4uL2NsaWVudCdcclxuaW1wb3J0IHtiYXNlQWN0aW9uT3B0aW9ufSBmcm9tICcuL21vZGVsVXRpbCdcclxuXHJcbmV4cG9ydCBjb25zdCBvcmlnaW5TdG9yZTogT3JpZ2luU3RvcmUgPSB7fVxyXG5cclxuY29uc3QgaXNGdW5jdGlvbiA9IChmdW5jdGlvblRvQ2hlY2s6IGFueSkgPT4ge1xyXG4gIHJldHVybiBmdW5jdGlvblRvQ2hlY2sgJiYge30udG9TdHJpbmcuY2FsbChmdW5jdGlvblRvQ2hlY2spID09PSAnW29iamVjdCBGdW5jdGlvbl0nXHJcbn1cclxuXHJcbnR5cGUgU3RvcmVTdGF0ZVJlc3VsdDxULCBFIGV4dGVuZHMgTW9kZWxBY3Rpb25PYmpIZWxwPGFueSwgVD4+ID0gTW9kZWxSZXN1bHQ8VCwgRT4gJiB7XHJcbiAgc3RvcmU6IE9yaWdpblN0b3JlXHJcbiAgZ2V0TG9hZDogKHF1ZXJ5OiBhbnkpID0+IG51bWJlclxyXG59XHJcblxyXG50eXBlIFVzZU1vZGVsU3RhdGUgPSA8VCBleHRlbmRzIEZldGNoT2JqLCBFIGV4dGVuZHMgTW9kZWxBY3Rpb25PYmpIZWxwPGFueSwgVD4+KG1vZGVsOiBNb2RlbERhdGE8VCwgRT4sIGtleT86IHN0cmluZyB8IFtzdHJpbmcsIHN0cmluZ10pID0+IFN0b3JlU3RhdGVSZXN1bHQ8VCwgRT5cclxuXHJcbmV4cG9ydCBjb25zdCBkZWFsTmFtZVNwYWNlID0gKGtleTogc3RyaW5nLCBuYW1lU3BhY2U6IHN0cmluZykgPT4ge1xyXG4gIGlmIChuYW1lU3BhY2UpIHtcclxuICAgIHJldHVybiBgJHtrZXl9XyR7bmFtZVNwYWNlfWBcclxuICB9XHJcbiAgcmV0dXJuIGAke2tleX1gXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VTdG9yZU1vZGVsOiBVc2VNb2RlbFN0YXRlID0gKG1vZGVsLCBrZXk/OiBzdHJpbmcgfCBbc3RyaW5nLCBzdHJpbmddKSA9PiB7XHJcbiAgY29uc3QgX2tleSA9IG1vZGVsLm5hbWUgPz8gKCFrZXkgPyAnJyA6IEFycmF5LmlzQXJyYXkoa2V5KSA/IGRlYWxOYW1lU3BhY2Uoa2V5WzBdLCBrZXlbMV0pIDoga2V5KVxyXG4gIGNvbnN0IHthY3Rpb25zLCBzdGF0ZX0gPSBtb2RlbFxyXG4gIGNvbnN0IFssIHNldFN0YXRlXSA9IHVzZVN0YXRlKE9iamVjdC5jcmVhdGUobnVsbCkpXHJcbiAgaWYgKCFfa2V5KSB7XHJcbiAgICB0aHJvdyBFcnJvcignbm8ga2V5JylcclxuICB9XHJcbiAgaWYgKCFvcmlnaW5TdG9yZVtfa2V5XSkge1xyXG4gICAgb3JpZ2luU3RvcmVbX2tleV0gPSB7XHJcbiAgICAgIGtleXM6IF9rZXksXHJcbiAgICAgIHN0YXRlLFxyXG4gICAgICBhY3Rpb25zOiB7fSxcclxuICAgICAgc2V0RGF0YTogW11cclxuICAgIH1cclxuICB9XHJcbiAgY29uc3Qgbm90aWNlID0gdXNlQ2FsbGJhY2soKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgb3JpZ2luU3RvcmVbX2tleV0uc2V0RGF0YS5mb3JFYWNoKHZhbHVlID0+IHtcclxuICAgICAgdmFsdWU/LihkYXRhKVxyXG4gICAgfSlcclxuICB9LCBbX2tleV0pXHJcbiAgY29uc3Qgc2V0RGF0YTogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248dHlwZW9mIHN0YXRlPj4gPSB1c2VDYWxsYmFjaygoZGF0YSkgPT4ge1xyXG4gICAgY29uc3Qgb2xkU3RhdGUgPSBvcmlnaW5TdG9yZVtfa2V5XS5zdGF0ZVxyXG4gICAgY29uc3QgbmV3RGF0YSA9IGlzRnVuY3Rpb24oZGF0YSkgPyAoZGF0YSBhcyAodjogdHlwZW9mIG9sZFN0YXRlKSA9PiB2b2lkKShvbGRTdGF0ZSkgOiBkYXRhXHJcbiAgICBvcmlnaW5TdG9yZVtfa2V5XS5zdGF0ZSA9IG5ld0RhdGFcclxuICAgIG5vdGljZShuZXdEYXRhKVxyXG4gIH0sIFtfa2V5LCBub3RpY2VdKVxyXG5cclxuICBjb25zdCBzZXRMb2FkID0gdXNlQ2FsbGJhY2soKHF1ZXJ5OiBhbnksIGZsYWc6IGJvb2xlYW4pID0+IHtcclxuICAgIHNldERhdGEocHJldlN0YXRlID0+ICh7XHJcbiAgICAgIC4uLnByZXZTdGF0ZSxcclxuICAgICAgZmV0Y2hMb2FkOiB7XHJcbiAgICAgICAgLi4ucHJldlN0YXRlLmZldGNoTG9hZCA/PyB7fSxcclxuICAgICAgICBbcXVlcnk/LmxvYz8uc291cmNlPy5ib2R5XTogZmxhZyxcclxuICAgICAgfVxyXG4gICAgfSkpXHJcbiAgfSwgW3NldERhdGFdKVxyXG4gIGNvbnN0IHNldEVycm9yID0gdXNlQ2FsbGJhY2soKHF1ZXJ5OiBhbnksIGVycjogYW55KSA9PiB7XHJcbiAgICBzZXREYXRhKHByZXZTdGF0ZSA9PiAoe1xyXG4gICAgICAuLi5wcmV2U3RhdGUsXHJcbiAgICAgIGZldGNoRXJyb3I6IHtcclxuICAgICAgICAuLi5wcmV2U3RhdGUuZmV0Y2hFcnJvciA/PyB7fSxcclxuICAgICAgICBbcXVlcnk/LmxvYz8uc291cmNlPy5ib2R5XTogZXJyLFxyXG4gICAgICB9XHJcbiAgICB9KSlcclxuICB9LCBbc2V0RGF0YV0pXHJcblxyXG4gIGNvbnN0IHF1ZXJ5OiBHcmFwaHFsUXVlcnkgPSB1c2VDYWxsYmFjayhhc3luYyAocXVlcnksIHBhcmFtcywgb3B0aW9uKSA9PiB7XHJcbiAgICBzZXRMb2FkKHF1ZXJ5LCB0cnVlKVxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZ3JhcGhRTFF1ZXJ5KCkocXVlcnksIHBhcmFtcywgb3B0aW9uKS5jYXRjaChlID0+IHtcclxuICAgICAgc2V0RXJyb3IocXVlcnksIGUpXHJcbiAgICB9KS5maW5hbGx5KCgpID0+IHtcclxuICAgICAgc2V0TG9hZChxdWVyeSwgZmFsc2UpXHJcbiAgICB9KSBhcyBhbnlcclxuICAgIHJldHVybiByZXM/LmRhdGFcclxuICB9LCBbc2V0RXJyb3IsIHNldExvYWRdKVxyXG4gIGNvbnN0IG11dGF0ZTogR3JhcGhxbE11dGF0ZSA9IHVzZUNhbGxiYWNrKGFzeW5jIChtdXRhdGlvbiwgcGFyYW1zLCBvcHRpb24pID0+IHtcclxuICAgIHNldExvYWQobXV0YXRpb24sIHRydWUpXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBncmFwaFFMTXV0YXRlKCkobXV0YXRpb24sIHBhcmFtcywgb3B0aW9uKS5jYXRjaChlID0+IHtcclxuICAgICAgc2V0RXJyb3IobXV0YXRpb24sIGUpXHJcbiAgICB9KS5maW5hbGx5KCgpID0+IHtcclxuICAgICAgc2V0TG9hZChtdXRhdGlvbiwgZmFsc2UpXHJcbiAgICB9KSBhcyBhbnlcclxuICAgIHJldHVybiByZXM/LmRhdGFcclxuICB9LCBbc2V0RXJyb3IsIHNldExvYWRdKVxyXG5cclxuICBpZiAoT2JqZWN0LmtleXMob3JpZ2luU3RvcmVbX2tleV0uYWN0aW9ucykubGVuZ3RoID09PSAwICYmIG9yaWdpblN0b3JlW19rZXldLmFjdGlvbnMuY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xyXG4gICAgT2JqZWN0LmtleXMoYWN0aW9ucykuZm9yRWFjaCh2YWx1ZSA9PiB7XHJcbiAgICAgIG9yaWdpblN0b3JlW19rZXldLmFjdGlvbnNbdmFsdWVdID0gKHY6IGFueSkgPT4gYWN0aW9uc1t2YWx1ZV0odiwge1xyXG4gICAgICAgIC4uLmJhc2VBY3Rpb25PcHRpb24sXHJcbiAgICAgICAgZGF0YTogb3JpZ2luU3RvcmVbX2tleV0uc3RhdGUsXHJcbiAgICAgICAgbm90aWNlLFxyXG4gICAgICAgIHNldERhdGEsXHJcbiAgICAgICAgcXVlcnksXHJcbiAgICAgICAgbXV0YXRlLFxyXG4gICAgICAgIHN0b3JlOiBvcmlnaW5TdG9yZSxcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBPYmplY3Qua2V5cyhhY3Rpb25zKS5mb3JFYWNoKHZhbHVlID0+IHtcclxuICAgICAgb3JpZ2luU3RvcmVbX2tleV0uYWN0aW9uc1t2YWx1ZV0gPSAodjogYW55KSA9PiBhY3Rpb25zW3ZhbHVlXSh2LCB7XHJcbiAgICAgICAgLi4uYmFzZUFjdGlvbk9wdGlvbixcclxuICAgICAgICBkYXRhOiBvcmlnaW5TdG9yZVtfa2V5XS5zdGF0ZSxcclxuICAgICAgICBub3RpY2UsXHJcbiAgICAgICAgc2V0RGF0YSxcclxuICAgICAgICBxdWVyeSxcclxuICAgICAgICBtdXRhdGUsXHJcbiAgICAgICAgc3RvcmU6IG9yaWdpblN0b3JlLFxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9LCBbX2tleSwgYWN0aW9ucywgbXV0YXRlLCBub3RpY2UsIHF1ZXJ5LCBzZXREYXRhXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgb3JpZ2luU3RvcmVbX2tleV0uc2V0RGF0YSA9IFtcclxuICAgICAgLi4ub3JpZ2luU3RvcmVbX2tleV0uc2V0RGF0YSA/PyBbXSxcclxuICAgICAgc2V0U3RhdGUsXHJcbiAgICBdXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBvcmlnaW5TdG9yZVtfa2V5XS5zZXREYXRhID0gb3JpZ2luU3RvcmVbX2tleV0uc2V0RGF0YS5maWx0ZXIodmFsdWUgPT4gdmFsdWUgIT09IHNldFN0YXRlKVxyXG4gICAgfVxyXG4gIH0sIFtfa2V5XSlcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHN0YXRlOiBvcmlnaW5TdG9yZVtfa2V5XS5zdGF0ZSxcclxuICAgIGFjdGlvbnM6IChvcmlnaW5TdG9yZVtfa2V5XS5hY3Rpb25zKSBhcyBEZWFsRnVuT2JqPHR5cGVvZiBhY3Rpb25zPixcclxuICAgIHN0b3JlOiBvcmlnaW5TdG9yZSxcclxuICAgIGdldExvYWQ6IHF1ZXJ5ID0+IG9yaWdpblN0b3JlW19rZXldLnN0YXRlLmZldGNoTG9hZFtxdWVyeT8ubG9jPy5zb3VyY2U/LmJvZHldID8gMSA6IDBcclxuICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCAnY3Jvc3MtZmV0Y2gvcG9seWZpbGwnXHJcbmltcG9ydCB7Z2V0VG9rZW4sIHNldFRva2VufSBmcm9tICcuLi90b29scy90b2tlbidcclxuaW1wb3J0IHtPcGVyYXRpb259IGZyb20gJ2Fwb2xsby1saW5rJ1xyXG5pbXBvcnQge0Vycm9yTGlua30gZnJvbSAnYXBvbGxvLWxpbmstZXJyb3InXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBBcG9sbG9DbGllbnQgZnJvbSAnYXBvbGxvLWJvb3N0J1xyXG5pbXBvcnQge3NzTG9nfSBmcm9tICcuLi90b29scy9nbG9iYWwnXHJcbmltcG9ydCB7RG9jdW1lbnROb2RlfSBmcm9tICdncmFwaHFsJ1xyXG5pbXBvcnQge2RvY30gZnJvbSAnLi4vZ3JhcGhxbFR5cGVzL2RvYydcclxuaW1wb3J0IHtzaG93TWVzc2FnZX0gZnJvbSAnLi4vY29tcG9uZW50cy9NZXNzYWdlL01lc3NhZ2UnXHJcbmltcG9ydCBnZXRDb25maWcgZnJvbSAnbmV4dC9jb25maWcnXHJcblxyXG5jb25zdCBjb25maWcgPSBnZXRDb25maWcoKVxyXG5jb25zdCBjbGllbnRfYXBpX3VyaSA9IGNvbmZpZz8ucHVibGljUnVudGltZUNvbmZpZz8uY2xpZW50X2FwaV91cmkgPz8gJ2h0dHA6Ly9sb2NhbGhvc3Q6NDQ2NC90eXBlX19ncmFwaHFsL2FwaSdcclxuXHJcbmNvbnN0IG9taXRUeXBlbmFtZSA9IChrZXk6IGFueSwgdmFsdWU6IGFueSkgPT4ge1xyXG4gIHJldHVybiBrZXkgPT09ICdfX3R5cGVuYW1lJyA/IHVuZGVmaW5lZCA6IHZhbHVlXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDbGllbnQgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IHJlcXVlc3Q6IChvcGVyYXRpb246IE9wZXJhdGlvbikgPT4gUHJvbWlzZTx2b2lkPiB8IHZvaWQgPSAob3BlcmF0aW9uKSA9PiB7XHJcbiAgICBpZiAob3BlcmF0aW9uLnZhcmlhYmxlcykge1xyXG4gICAgICBvcGVyYXRpb24udmFyaWFibGVzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvcGVyYXRpb24udmFyaWFibGVzKSwgb21pdFR5cGVuYW1lKVxyXG4gICAgfVxyXG4gICAgb3BlcmF0aW9uLnNldENvbnRleHQoKHtoZWFkZXJzID0ge319KSA9PiAoe1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgLi4uaGVhZGVycyxcclxuICAgICAgICAvLyDlkI7lj7DkuIfog73mnYPpmZBcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBnZXRUb2tlbigpLFxyXG4gICAgICB9LFxyXG4gICAgfSkpXHJcbiAgfVxyXG5cclxuICBjb25zdCByZWZyZXNoVG9rZW4gPSAoKSA9PiB7XHJcbiAgICBncmFwaFFMUXVlcnkoKShkb2MucmVmcmVzaFRva2VuLCB7XHJcbiAgICAgIGRhdGE6IGdldFRva2VuKCdyZWZyZXNodG9rZW4nKSxcclxuICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgaWYgKHJlcy5kYXRhPy5yZWZyZXNoVG9rZW4/LnRva2VuKSB7XHJcbiAgICAgICAgc2V0VG9rZW4ocmVzLmRhdGE/LnJlZnJlc2hUb2tlbj8udG9rZW4pXHJcbiAgICAgICAgc2V0VG9rZW4ocmVzLmRhdGE/LnJlZnJlc2hUb2tlbj8ucmVmcmVzaHRva2VuLCAncmVmcmVzaHRva2VuJylcclxuICAgICAgICBzaG93TWVzc2FnZSh7bWVzc2FnZTogJ+eZu+W9lei2heaXtizliLfmlrDnmbvlvZXkv6Hmga8nfSlcclxuICAgICAgICBSb3V0ZXIucmVsb2FkKClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzaG93TWVzc2FnZSh7bWVzc2FnZTogJ+ivt+mHjeaWsOeZu+W9lSd9KVxyXG4gICAgICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKVxyXG4gICAgICB9XHJcbiAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICBzc0xvZyhlcnIpXHJcbiAgICAgIHNob3dNZXNzYWdlKHttZXNzYWdlOiAn6K+36YeN5paw55m75b2VJ30pXHJcbiAgICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKVxyXG4gICAgfSlcclxuICB9XHJcbiAgY29uc3Qgb25FcnJvcjogRXJyb3JMaW5rLkVycm9ySGFuZGxlciA9ICh7cmVzcG9uc2UsIG9wZXJhdGlvbiwgZ3JhcGhRTEVycm9ycywgbmV0d29ya0Vycm9yfSkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAvLyBjb25zb2xlLmxvZyhvcGVyYXRpb24pXHJcbiAgICBpZiAoZ3JhcGhRTEVycm9ycykge1xyXG4gICAgICBncmFwaFFMRXJyb3JzLmZvckVhY2goKHttZXNzYWdlLCBsb2NhdGlvbnMsIHBhdGgsIGV4dGVuc2lvbnN9KSA9PiB7XHJcbiAgICAgICAgc3NMb2coXHJcbiAgICAgICAgICAgIGBbR3JhcGhRTCBlcnJvcl06IE1lc3NhZ2U6ICR7bWVzc2FnZX0sIExvY2F0aW9uOiAke2xvY2F0aW9uc30sIFBhdGg6ICR7cGF0aH1gLFxyXG4gICAgICAgIClcclxuICAgICAgICBpZiAoZXh0ZW5zaW9ucz8uY29kZSA9PT0gJ1VOQVVUSEVOVElDQVRFRCcpIHtcclxuICAgICAgICAgIGlmIChtZXNzYWdlLmluY2x1ZGVzKCdmaXJzdCcpKSB7XHJcbiAgICAgICAgICAgIHJlZnJlc2hUb2tlbigpXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzaG93TWVzc2FnZSh7bWVzc2FnZTogJ+ivt+mHjeaWsOeZu+W9lSd9KVxyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2xvZ2luJylcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1lc3NhZ2UuaW5jbHVkZXMoJ1VuZXhwZWN0ZWQgZXJyb3InKSkge1xyXG4gICAgICAgICAgc2hvd01lc3NhZ2Uoe1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLnNwbGl0KCdcIicpWzFdLFxyXG4gICAgICAgICAgICBtc2dfdHlwZTogJ2Vycm9yJyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNob3dNZXNzYWdlKHttZXNzYWdlfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG5ldHdvcmtFcnJvcikge1xyXG4gICAgICBjb25zdCBlcnJNc2cgPSAoJ2JvZHlUZXh0JyBpbiBuZXR3b3JrRXJyb3IpID8gbmV0d29ya0Vycm9yPy5ib2R5VGV4dCA6ICgncmVzdWx0JyBpbiBuZXR3b3JrRXJyb3IpID8gbmV0d29ya0Vycm9yPy5yZXN1bHQ/LmVycm9yIDogJydcclxuICAgICAgc3NMb2coYFtOZXR3b3JrIGVycm9yXTogJHtlcnJNc2d9YClcclxuICAgICAgaWYgKCdzdGF0dXNDb2RlJyBpbiBuZXR3b3JrRXJyb3IgJiYgbmV0d29ya0Vycm9yPy5zdGF0dXNDb2RlID09PSA0MDEpIHtcclxuICAgICAgICBpZiAoZXJyTXNnLmluY2x1ZGVzKCdmaXJzdCcpICYmIGdldFRva2VuKCdyZWZyZXNodG9rZW4nKSkge1xyXG4gICAgICAgICAgcmVmcmVzaFRva2VuKClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc2hvd01lc3NhZ2Uoe21lc3NhZ2U6ICfor7fph43mlrDnmbvlvZUnfSlcclxuICAgICAgICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG5ldyBBcG9sbG9DbGllbnQoe1xyXG4gICAgLy8gbGluazogaHR0cExpbmssXHJcbiAgICB1cmk6IGNsaWVudF9hcGlfdXJpLFxyXG4gICAgcmVxdWVzdCxcclxuICAgIG9uRXJyb3IsXHJcbiAgfSlcclxufVxyXG5cclxuY29uc3QgZGVmYXVsdENsaWVudCA9IGdldENsaWVudCgpXHJcblxyXG4vLyBjb25zdCBkZWFsUGFyYW1zID0gKChwYXJhbXM6IGFueSkgPT4gKHtcclxuLy8gICBkYXRhOiBwYXJhbXMsXHJcbi8vIH0pKVxyXG5jb25zdCBkZWFsUGFyYW1zID0gKChwYXJhbXM6IGFueSkgPT4gcGFyYW1zKVxyXG5cclxuZXhwb3J0IGNvbnN0IGdyYXBoUUxRdWVyeSA9IChjbGllbnQgPSBkZWZhdWx0Q2xpZW50KSA9PiBhc3luYyAocXVlcnk6IERvY3VtZW50Tm9kZSwgcGFyYW1zOiBhbnksIG9wdGlvbj86IGFueSkgPT4ge1xyXG4gIGNvbnN0IF9kZWFsUGFyYW1zSW4gPSBvcHRpb24/LmRlYWxQYXJhbXNJbiA/PyBkZWFsUGFyYW1zXHJcbiAgcmV0dXJuIGNsaWVudC5xdWVyeSh7XHJcbiAgICBmZXRjaFBvbGljeTogJ25ldHdvcmstb25seScsXHJcbiAgICBxdWVyeSxcclxuICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAuLi4oX2RlYWxQYXJhbXNJbiA/IF9kZWFsUGFyYW1zSW4ocGFyYW1zKSA6IHBhcmFtcyksXHJcbiAgICB9LFxyXG4gICAgLi4ub3B0aW9uLFxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBncmFwaFFMTXV0YXRlID0gKGNsaWVudCA9IGRlZmF1bHRDbGllbnQpID0+IGFzeW5jIChtdXRhdGlvbjogYW55LCBwYXJhbXM6IGFueSwgb3B0aW9uPzogYW55KSA9PiB7XHJcbiAgY29uc3QgX2RlYWxQYXJhbXNJbiA9IG9wdGlvbj8uZGVhbFBhcmFtc0luID8/IGRlYWxQYXJhbXNcclxuICByZXR1cm4gY2xpZW50Lm11dGF0ZSh7XHJcbiAgICBtdXRhdGlvbixcclxuICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAuLi4oX2RlYWxQYXJhbXNJbiA/IF9kZWFsUGFyYW1zSW4ocGFyYW1zKSA6IHBhcmFtcyksXHJcbiAgICB9LFxyXG4gICAgLi4ub3B0aW9uLFxyXG4gIH0pXHJcbn1cclxuXHJcbmNvbnN0IHNlcnZlckNsaWVudCA9ICgpID0+IG5ldyBBcG9sbG9DbGllbnQoe1xyXG4gIC8vIGxpbms6IGh0dHBMaW5rLFxyXG4gIHVyaTogY2xpZW50X2FwaV91cmksXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3Qgc2VydmVyUXVlcnkgPSBhc3luYyAocXVlcnk6IGFueSwgcGFyYW1zOiBhbnksIG9wdGlvbj86IGFueSkgPT4gKGF3YWl0IGdyYXBoUUxRdWVyeShzZXJ2ZXJDbGllbnQoKSkocXVlcnksIHBhcmFtcywgb3B0aW9uKSk/LmRhdGFcclxuXHJcbmV4cG9ydCBjb25zdCBzZXJ2ZXJNdXRhdGUgPSBhc3luYyAobXV0YXRpb246IGFueSwgcGFyYW1zOiBhbnksIG9wdGlvbj86IGFueSkgPT4gKGF3YWl0IGdyYXBoUUxNdXRhdGUoc2VydmVyQ2xpZW50KCkpKG11dGF0aW9uLCBwYXJhbXMsIG9wdGlvbikpPy5kYXRhXHJcblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7U25hY2tiYXJ9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQge2FtYmVyLCBibHVlLCBjb21tb24sIGdyZWVuLCBncmV5LCByZWR9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycydcclxuaW1wb3J0IHtTbmFja2JhclByb3BzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TbmFja2Jhci9TbmFja2JhcidcclxuaW1wb3J0IHtvcmlnaW5TdG9yZSwgdXNlU3RvcmVNb2RlbH0gZnJvbSAnLi4vLi4vTW9kZWxBY3Rpb24vdXNlU3RvcmUnXHJcbmltcG9ydCB7ZnBNZXJnZVByZX0gZnJvbSAnLi4vLi4vdG9vbHMvdXRpbHMnXHJcbmltcG9ydCB7bW9kZWxGYWN0b3J5fSBmcm9tICcuLi8uLi9Nb2RlbEFjdGlvbi9tb2RlbFV0aWwnXHJcbmltcG9ydCB7IGxzIH0gZnJvbSAnLi4vLi4vdG9vbHMvZGVhbEtleSdcclxuXHJcbmNvbnN0IHR5cGVIZWxwID0ge1xyXG4gIGRlZmF1bHQ6IGBiYWNrZ3JvdW5kOiAke2dyZXlbNzAwXX07YCxcclxuICBzdWNjZXNzOiBgYmFja2dyb3VuZDogJHtncmVlbls2MDBdfTtgLFxyXG4gIHdhcm5pbmc6IGBiYWNrZ3JvdW5kOiAke2FtYmVyWzcwMF19O2AsXHJcbiAgaW5mbzogYGJhY2tncm91bmQ6ICR7Ymx1ZVs3MDBdfTtgLFxyXG4gIGVycm9yOiBgYmFja2dyb3VuZDogJHtyZWRbNzAwXX07YCxcclxufVxyXG5jb25zdCBnZXRUeXBlID0gKHR5cGUgPSAnZGVmYXVsdCcpID0+ICh0eXBlSGVscCBhcyBhbnkpW3R5cGVdXHJcblxyXG50eXBlIE1lc3NhZ2VQcm9wcyA9IFBhcnRpYWw8U25hY2tiYXJQcm9wcyAmIHtcclxuICBtc2dfdHlwZTogJ2RlZmF1bHQnIHwgJ3N1Y2Nlc3MnIHwgJ2luZm8nIHwgJ3dhcm5pbmcnIHwgJ2Vycm9yJyB8IHN0cmluZ1xyXG59PlxyXG5cclxuY29uc3QgQ3VzU25hY2tiYXIgPSBzdHlsZWQoU25hY2tiYXIpPE1lc3NhZ2VQcm9wcz5gXHJcbiAgJiYmID4gZGl2IHtcclxuICAgIGNvbG9yOiAke2NvbW1vbi53aGl0ZX07XHJcbiAgICAkeyh7bXNnX3R5cGV9KSA9PiBnZXRUeXBlKG1zZ190eXBlKX1cclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IG1lc3NhZ2VNb2RlbCA9IG1vZGVsRmFjdG9yeSgnbWVzc2FnZU1vZGVsJywge1xyXG4gIG9wZW46IGZhbHNlLFxyXG4gIG1lc3NhZ2U6ICcnLFxyXG4gIGF1dG9IaWRlRHVyYXRpb246IDIwMDAsXHJcbiAgbXNnX3R5cGU6ICdkZWZhdWx0JyxcclxufSBhcyBNZXNzYWdlUHJvcHMsIHtcclxuICBvcGVuOiAodmFsdWU6IHN0cmluZyB8IE1lc3NhZ2VQcm9wcywgb3B0aW9uKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xyXG4gICAgICBvcHRpb24uc2V0RGF0YShmcE1lcmdlUHJlKHtcclxuICAgICAgICBhdXRvSGlkZUR1cmF0aW9uOiAyMDAwLFxyXG4gICAgICAgIG1zZ190eXBlOiAnZGVmYXVsdCcsXHJcbiAgICAgICAgbWVzc2FnZTogdmFsdWUsXHJcbiAgICAgICAgb3BlbjogdHJ1ZSxcclxuICAgICAgfSkpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBvcHRpb24uc2V0RGF0YShmcE1lcmdlUHJlKHtcclxuICAgICAgICBhdXRvSGlkZUR1cmF0aW9uOiAyMDAwLFxyXG4gICAgICAgIG1zZ190eXBlOiAnZGVmYXVsdCcsXHJcbiAgICAgICAgLi4udmFsdWUsXHJcbiAgICAgICAgb3BlbjogdHJ1ZSxcclxuICAgICAgfSkpXHJcbiAgICB9XHJcbiAgfSxcclxuICBvbkNsb3NlOiAodmFsdWUsIG9wdGlvbikgPT4gb3B0aW9uLnNldERhdGEoZnBNZXJnZVByZSh7XHJcbiAgICBvcGVuOiBmYWxzZSxcclxuICB9KSksXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgTWVzc2FnZSA9ICgpID0+IHtcclxuICBjb25zdCB7c3RhdGU6IG1TdGF0ZSwgYWN0aW9uc30gPSB1c2VTdG9yZU1vZGVsKG1lc3NhZ2VNb2RlbClcclxuICByZXR1cm4gPEN1c1NuYWNrYmFyXHJcbiAgICAgIG9wZW49e21TdGF0ZS5vcGVufVxyXG4gICAgICBhdXRvSGlkZUR1cmF0aW9uPXttU3RhdGUuYXV0b0hpZGVEdXJhdGlvbn1cclxuICAgICAgbWVzc2FnZT17bHMobVN0YXRlLm1lc3NhZ2UgYXMgc3RyaW5nKX1cclxuICAgICAgbXNnX3R5cGU9e21TdGF0ZS5tc2dfdHlwZX1cclxuICAgICAgb25DbG9zZT17KCkgPT4gYWN0aW9ucy5vbkNsb3NlKCl9XHJcbiAgLz5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNob3dNZXNzYWdlID0gKG9wdGlvbjogc3RyaW5nIHwgTWVzc2FnZVByb3BzKSA9PiB7XHJcbiAgb3JpZ2luU3RvcmVbJ21lc3NhZ2VNb2RlbCddLmFjdGlvbnMub3BlbihvcHRpb24pXHJcbiAgcmV0dXJuXHJcbn1cclxuIiwiaW1wb3J0IHtncWx9IGZyb20gJ2Fwb2xsby1ib29zdCdcclxuXHJcbmV4cG9ydCBjb25zdCBmcmFnbWVudCA9IHtcclxuICBDYXRlZ29yeUZpZWxkczogZ3FsYFxyXG4gICAgICBmcmFnbWVudCBDYXRlZ29yeSBvbiBDYXRlZ29yeSB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgICAgdXBkYXRlVGltZVxyXG4gICAgICAgICAgaXNEZWxldGVcclxuICAgICAgICAgIGlzRW5hYmxlXHJcbiAgICAgICAgICByZW1hcmtcclxuICAgICAgICAgIHNvcnRcclxuICAgICAgICAgIHBhcmVudElkXHJcbiAgICAgICAgICBmdWxsUGFyZW50SWRcclxuICAgICAgICAgIG51bWJlclxyXG4gICAgICAgICAgdXNlcklkXHJcbiAgICAgICAgICBpbWdVcmxcclxuICAgICAgfVxyXG4gIGAsXHJcbiAgVXNlckZpZWxkczogZ3FsYFxyXG4gICAgICBmcmFnbWVudCBVc2VyRmllbGRzIG9uIFVzZXIge1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIG5hbWVcclxuICAgICAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgICAgIGlzRGVsZXRlXHJcbiAgICAgICAgICBwYXNzd29yZFxyXG4gICAgICAgICAgdHlwZVxyXG4gICAgICB9XHJcbiAgYCxcclxuICBVc2VySW5mb0ZpZWxkczogZ3FsYFxyXG4gICAgICBmcmFnbWVudCBVc2VySW5mb0ZpZWxkcyBvbiBVc2VySW5mbyB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgICAgdXBkYXRlVGltZVxyXG4gICAgICAgICAgaXNEZWxldGVcclxuICAgICAgICAgIHVzZXJJZFxyXG4gICAgICAgICAgcGhvbmVcclxuICAgICAgICAgIGVtYWlsXHJcbiAgICAgICAgICB1c2VyTGV2ZWxcclxuICAgICAgICAgIHBpY2t1cEFkZHJlc3NJZFxyXG4gICAgICB9XHJcbiAgYCxcclxuICBPcmRlckluZm9GaWVsZHM6IGdxbGBcclxuICAgICAgZnJhZ21lbnQgT3JkZXJJbmZvRmllbGRzIG9uIE9yZGVySW5mbyB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgICAgdXBkYXRlVGltZVxyXG4gICAgICAgICAgaXNEZWxldGVcclxuICAgICAgICAgIG51bWJlclxyXG4gICAgICAgICAgc3RhdGVcclxuICAgICAgICAgIGFjdHVhbGx5UGFpZFxyXG4gICAgICAgICAgYWRkcmVzc0lkXHJcbiAgICAgICAgICBwYXltZW50TWV0aG9kQ2FyZElkXHJcbiAgICAgICAgICBzdWJ0b3RhbFxyXG4gICAgICAgICAgY291cG9uRGlzY291bnRcclxuICAgICAgICAgIHZpcERpc2NvdW50XHJcbiAgICAgICAgICB0cmFuc3BvcnRhdGlvbkNvc3RzXHJcbiAgICAgICAgICBzYWxlVGF4XHJcbiAgICAgICAgICBvcmRlcklkXHJcbiAgICAgICAgICBkaXNjb3VudFByb2R1Y3RUb3RhbFxyXG4gICAgICAgICAgZmluaXNoVGltZVxyXG4gICAgICAgICAgcGlja1VwVGltZVxyXG4gICAgICAgICAgcGlja1VwVHlwZVxyXG4gICAgICAgICAgZ2VuZXJhdGVDb2luXHJcbiAgICAgICAgICBkZWR1Y3RDb2luXHJcbiAgICAgICAgICBzZWxmQWRkcmVzc0lkXHJcbiAgICAgICAgICBjdXJyZW50VXNlckxldmVsXHJcbiAgICAgIH1cclxuICBgLFxyXG4gIFJPcmRlclByb2R1Y3RGaWVsZHM6IGdxbGBcclxuICAgICAgZnJhZ21lbnQgUk9yZGVyUHJvZHVjdEZpZWxkcyBvbiBST3JkZXJQcm9kdWN0IHtcclxuICAgICAgICAgIGNvdW50XHJcbiAgICAgICAgICBjcmVhdGVUaW1lXHJcbiAgICAgICAgICBkZWFsUHJpY2VcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBpc0RlbGV0ZVxyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgb3JkZXJJZFxyXG4gICAgICAgICAgcHJvZHVjdElkXHJcbiAgICAgICAgICB1cGRhdGVUaW1lXHJcbiAgICAgIH1cclxuICBgLFxyXG4gIFByb2R1Y3RGaWVsZHM6IGdxbGBcclxuICAgICAgZnJhZ21lbnQgUHJvZHVjdEZpZWxkcyBvbiBQcm9kdWN0IHtcclxuICAgICAgICAgIGJyYW5kXHJcbiAgICAgICAgICBjYXRlZ29yeUlkXHJcbiAgICAgICAgICBjcmVhdGVUaW1lXHJcbiAgICAgICAgICBncm91cEFtb3VudFxyXG4gICAgICAgICAgZ3JvdXBBbW91bnRVbml0XHJcbiAgICAgICAgICBncm91cFByZWNpc2lvblxyXG4gICAgICAgICAgZ3JvdXBSZW1hcmtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBpc0RlbGV0ZVxyXG4gICAgICAgICAgaXNFbmFibGVcclxuICAgICAgICAgIGlzR3JvdXBcclxuICAgICAgICAgIGlzSG90XHJcbiAgICAgICAgICBpc05ld1xyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgbnVtYmVyXHJcbiAgICAgICAgICBwYWNraW5nVW5pdFxyXG4gICAgICAgICAgcHJpY2VJblxyXG4gICAgICAgICAgcHJpY2VNYXJrZXRcclxuICAgICAgICAgIHByaWNlT3V0XHJcbiAgICAgICAgICByZW1hcmtcclxuICAgICAgICAgIHNoZWx2ZXNUeXBlc1xyXG4gICAgICAgICAgc29ydFxyXG4gICAgICAgICAgc3RvY2tcclxuICAgICAgICAgIHVuaXRcclxuICAgICAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgICAgIHdlaWdodFxyXG4gICAgICAgICAgdW5pdFN0cmluZ1xyXG4gICAgICAgICAgZ3JvdXBQcmVjaXNpb25TdHJpbmdcclxuICAgICAgICAgIGdyb3VwQW1vdW50VW5pdFN0cmluZ1xyXG4gICAgICAgICAgcGFja2luZ1VuaXRTdHJpbmdcclxuICAgICAgfVxyXG4gIGAsXHJcbiAgSW1nRmllbGRzOiBncWxgXHJcbiAgICBmcmFnbWVudCBJbWdGaWVsZHMgb24gUHJvZHVjdEltZyB7XHJcbiAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgIGlkXHJcbiAgICAgICAgaXNEZWxldGVcclxuICAgICAgICBuYW1lXHJcbiAgICAgICAgbnVtYmVyXHJcbiAgICAgICAgcHJvZHVjdElkXHJcbiAgICAgICAgdXBkYXRlVGltZVxyXG4gICAgICAgIHVybFxyXG4gICAgfSBcclxuICBgLFxyXG4gIFVzZXJBZGRyZXNzRmllbGRzOiBncWxgXHJcbiAgICAgIGZyYWdtZW50IFVzZXJBZGRyZXNzRmllbGRzIG9uIFVzZXJBZGRyZXNzIHtcclxuICAgICAgICAgIGFkZHJlc3NcclxuICAgICAgICAgIGNpdHlcclxuICAgICAgICAgIGNvbWJpbmVBZGRyZXNzXHJcbiAgICAgICAgICBjb250YWN0SW5mb3JtYXRpb25cclxuICAgICAgICAgIGNvbnRhY3RVc2VyTmFtZVxyXG4gICAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgICAgZGlzdHJpY3RcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBpc0RlZmF1bHRcclxuICAgICAgICAgIGlzRGVsZXRlXHJcbiAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICBwcm92aW5jZVxyXG4gICAgICAgICAgdXBkYXRlVGltZVxyXG4gICAgICAgICAgdXNlcklkXHJcbiAgICAgICAgICB6aXBcclxuICAgICAgfVxyXG4gIGAsXHJcbiAgVXNlclBheUNhcmRGaWVsZHM6IGdxbGBcclxuICAgICAgZnJhZ21lbnQgVXNlclBheUNhcmRGaWVsZHMgb24gVXNlclBheUNhcmQge1xyXG4gICAgICAgICAgYWRkcmVzc0RldGFpbFxyXG4gICAgICAgICAgY2l0eVxyXG4gICAgICAgICAgY29kZVxyXG4gICAgICAgICAgY29udGFjdFxyXG4gICAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgICAgZXhwaXJhdGlvblRpbWVcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBpc0RlZmF1bHRcclxuICAgICAgICAgIGlzRGVsZXRlXHJcbiAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICBudW1iZXJcclxuICAgICAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgICAgIHVzZXJJZFxyXG4gICAgICAgICAgdXNlck5hbWVcclxuICAgICAgICAgIHppcENvZGVcclxuICAgICAgfVxyXG4gIGAsXHJcbiAgU2hvcENhcnRGaWVsZHM6IGdxbGBcclxuICAgICAgZnJhZ21lbnQgU2hvcENhcnRGaWVsZHMgb24gU2hvcENhcnQge1xyXG4gICAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIGlzRGVsZXRlXHJcbiAgICAgICAgICBpc05leHRcclxuICAgICAgICAgIG5hbWVcclxuICAgICAgICAgIG51bWJlclxyXG4gICAgICAgICAgcHJvZHVjdElkXHJcbiAgICAgICAgICB1cGRhdGVUaW1lXHJcbiAgICAgICAgICB1c2VySWRcclxuICAgICAgfVxyXG4gIGAsXHJcbiAgRGF0YUNvbmZpZ0ZpZWxkczogZ3FsYFxyXG4gICAgZnJhZ21lbnQgRGF0YUNvbmZpZ0ZpZWxkcyBvbiBEYXRhQ29uZmlnIHtcclxuICAgICAgICBjcmVhdGVUaW1lXHJcbiAgICAgICAgaWRcclxuICAgICAgICBpc0RlbGV0ZVxyXG4gICAgICAgIG5hbWVcclxuICAgICAgICByZW1hcmtcclxuICAgICAgICB0eXBlXHJcbiAgICAgICAgdXBkYXRlVGltZVxyXG4gICAgICAgIHZhbHVlXHJcbiAgICB9XHJcbiAgYCxcclxuICBEaWN0RmllbGRzOiBncWxgXHJcbiAgICBmcmFnbWVudCBEaWN0RmllbGRzIG9uIERpY3Qge1xyXG4gICAgICAgIGNvZGVcclxuICAgICAgICBjcmVhdGVUaW1lXHJcbiAgICAgICAgZGljdFR5cGVDb2RlXHJcbiAgICAgICAgaWRcclxuICAgICAgICBpc0RlbGV0ZVxyXG4gICAgICAgIGlzRGlzYWJsZVxyXG4gICAgICAgIG5hbWVcclxuICAgICAgICByZW1hcmtcclxuICAgICAgICBzb3J0XHJcbiAgICAgICAgdXBkYXRlVGltZVxyXG4gICAgfVxyXG4gIGAsXHJcbiAgR3JvdXBRdWV1ZUZpZWxkczogZ3FsYFxyXG4gICAgICBmcmFnbWVudCBHcm91cFF1ZXVlRmllbGRzIG9uIEdyb3VwUXVldWUge1xyXG4gICAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgICAgZmlsbEFtb3VudFxyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIGlzRGVsZXRlXHJcbiAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICBwcm9kdWN0SWRcclxuICAgICAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgfVxyXG4gIGAsXHJcbn1cclxuIiwiaW1wb3J0IHtncWx9IGZyb20gJ2Fwb2xsby1ib29zdCdcclxuaW1wb3J0IHtmcmFnbWVudH0gZnJvbSAnLi9mcmFnbWVudCdcclxuaW1wb3J0IHtEaWN0VHlwZUVudW19IGZyb20gJy4uLy4uL3NzX2NvbW1vbi9lbnVtJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFVzZXJMaXN0RG9jID0gZ3FsYFxyXG4gICAgcXVlcnkgcmVmYWN0b3JlZDY0MygkZGF0YTogVXNlckxpc3RJbnB1dCEpIHtcclxuICAgICAgICB1c2VyTGlzdCh1c2VyTGlzdElucHV0OiAkZGF0YSkge1xyXG4gICAgICAgICAgICBsaXN0IHtcclxuICAgICAgICAgICAgICAgIG9yZGVyQ29pbk5leHRNb250aFxyXG4gICAgICAgICAgICAgICAgb3JkZXJDb2luQ3VycmVudE1vbnRoXHJcbiAgICAgICAgICAgICAgICBvcmRlckFtb3VudEN1cnJlbnRZZWFyXHJcbiAgICAgICAgICAgICAgICAuLi51c2VySW5mb1xyXG4gICAgICAgICAgICAgICAgLi4uVXNlckZpZWxkc1xyXG4gICAgICAgICAgICAgICAgLi4ub3JkZXJJbmZvXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdG90YWxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmcmFnbWVudCBvcmRlckluZm8gb24gVXNlcntcclxuICAgICAgICBvcmRlckluZm97XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgICAgICB1cGRhdGVUaW1lXHJcbiAgICAgICAgICAgIGlzRGVsZXRlXHJcbiAgICAgICAgICAgIG51bWJlclxyXG4gICAgICAgICAgICBzdGF0ZVxyXG4gICAgICAgICAgICBhY3R1YWxseVBhaWRcclxuICAgICAgICAgICAgYWRkcmVzc0lkXHJcbiAgICAgICAgICAgIHBheW1lbnRNZXRob2RDYXJkSWRcclxuICAgICAgICAgICAgc3VidG90YWxcclxuICAgICAgICAgICAgY291cG9uRGlzY291bnRcclxuICAgICAgICAgICAgdmlwRGlzY291bnRcclxuICAgICAgICAgICAgdHJhbnNwb3J0YXRpb25Db3N0c1xyXG4gICAgICAgICAgICBzYWxlVGF4XHJcbiAgICAgICAgICAgIG9yZGVySWRcclxuICAgICAgICAgICAgZGlzY291bnRQcm9kdWN0VG90YWxcclxuICAgICAgICAgICAgZmluaXNoVGltZVxyXG4gICAgICAgICAgICBwaWNrVXBUaW1lXHJcbiAgICAgICAgICAgIHBpY2tVcFR5cGVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmcmFnbWVudCBVc2VyRmllbGRzIG9uIFVzZXIge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgbmFtZVxyXG4gICAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgICB1cGRhdGVUaW1lXHJcbiAgICAgICAgaXNEZWxldGVcclxuICAgICAgICBwYXNzd29yZFxyXG4gICAgICAgIHR5cGVcclxuICAgIH1cclxuICAgIGZyYWdtZW50IHVzZXJJbmZvIG9uIFVzZXJ7XHJcbiAgICAgICAgdXNlckluZm97XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgICAgICB1cGRhdGVUaW1lXHJcbiAgICAgICAgICAgIGlzRGVsZXRlXHJcbiAgICAgICAgICAgIHVzZXJJZFxyXG4gICAgICAgICAgICBwaG9uZVxyXG4gICAgICAgICAgICBlbWFpbFxyXG4gICAgICAgICAgICB1c2VyTGV2ZWxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBnZXREYXRhQ29uZmlnID0gZ3FsYFxyXG4gICAgcXVlcnkgKCRkYXRhOiBEYXRhQ29uZmlnSXRlbUlucHV0KSB7XHJcbiAgICAgICAgZ2V0RGF0YUNvbmZpZyhkYXRhQ29uZmlnSW5wdXQ6ICRkYXRhKSB7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgICAgICB1cGRhdGVUaW1lXHJcbiAgICAgICAgICAgIGlzRGVsZXRlXHJcbiAgICAgICAgICAgIHR5cGVcclxuICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgcmVtYXJrXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgaG9tZUNhcm91c2VsSW1ncyA9IGdxbGBcclxuICAgIHF1ZXJ5IHF1ZXJ5X3F1ZXJ5X3Rlc3RMb25nMTM3KCRkYXRhOiBEYXRhQ29uZmlnSXRlbUlucHV0KSB7XHJcbiAgICAgICAgaG9tZUNhcm91c2VsSW1ncyhkYXRhQ29uZmlnSW5wdXQ6ICRkYXRhKSB7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgICAgICB1cGRhdGVUaW1lXHJcbiAgICAgICAgICAgIGlzRGVsZXRlXHJcbiAgICAgICAgICAgIHR5cGVcclxuICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgcmVtYXJrXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgY2F0ZWdvcnlMaXN0ID0gZ3FsYFxyXG4gICAgcXVlcnkgcXVlcnlfcXVlcnlfdGVzdExvbmc1NjUoJGRhdGE6IENhdGVnb3J5TGlzdElucHV0KSB7XHJcbiAgICAgICAgY2F0ZWdvcnlMaXN0KGRhdGE6ICRkYXRhKSB7XHJcbiAgICAgICAgICAgIHRvdGFsXHJcbiAgICAgICAgICAgIGxpc3Qge1xyXG4gICAgICAgICAgICAgICAgLi4uQ2F0ZWdvcnlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuQ2F0ZWdvcnlGaWVsZHN9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBkb2MgPSB7XHJcbiAgZ2V0VXNlckxpc3REb2MsXHJcbiAgY2F0ZWdvcnlMaXN0LFxyXG4gIGdldERhdGFDb25maWcsXHJcbiAgaG9tZUNhcm91c2VsSW1ncyxcclxuICByZWdpc3RlclVzZXI6IGdxbGBcclxuICAgICAgbXV0YXRpb24gbXV0YXRpb25fcmVnaXN0ZXJVc2U5OTgoJGRhdGE6IFVzZXJJdGVtSW5wdXQpIHtcclxuICAgICAgICAgIHJlZ2lzdGVyVXNlcihkYXRhOiAkZGF0YSkge1xyXG4gICAgICAgICAgICAgIHRva2VuXHJcbiAgICAgICAgICAgICAgcmVmcmVzaHRva2VuXHJcbiAgICAgICAgICAgICAgdXNlciB7XHJcbiAgICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgICAgICAgICAgICB1cGRhdGVUaW1lXHJcbiAgICAgICAgICAgICAgICAgIGlzRGVsZXRlXHJcbiAgICAgICAgICAgICAgICAgIHBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgICAgIHR5cGVcclxuICAgICAgICAgICAgICAgICAgdXNlckluZm8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgYCxcclxuICByZWZyZXNoVG9rZW46IGdxbGBcclxuICAgICAgcXVlcnkgcmVmcmVzaFRva2VuKCRkYXRhOiBTdHJpbmchKSB7XHJcbiAgICAgICAgICByZWZyZXNoVG9rZW4ocmVmcmVzaHRva2VuOiAkZGF0YSkge1xyXG4gICAgICAgICAgICAgIHJlZnJlc2h0b2tlblxyXG4gICAgICAgICAgICAgIHRva2VuXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICBgLFxyXG4gIGxvZ2luOiBncWxgXHJcbiAgICAgIHF1ZXJ5IGxvZ2luKCRkYXRhOiBVc2VySXRlbUlucHV0KSB7XHJcbiAgICAgICAgICBsb2dpbih1c2VyOiAkZGF0YSkge1xyXG4gICAgICAgICAgICAgIHRva2VuXHJcbiAgICAgICAgICAgICAgcmVmcmVzaHRva2VuXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICBgLFxyXG4gIG9uZVVzZXI6IGdxbGBcclxuICAgICAgcXVlcnkgb25lVXNlciB7XHJcbiAgICAgICAgICBvbmVVc2VyIHtcclxuICAgICAgICAgICAgICAuLi5Vc2VyRmllbGRzXHJcbiAgICAgICAgICAgICAgdXNlckluZm8ge1xyXG4gICAgICAgICAgICAgICAgICAuLi5Vc2VySW5mb0ZpZWxkc1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAke2ZyYWdtZW50LlVzZXJJbmZvRmllbGRzfVxyXG4gICAgICAke2ZyYWdtZW50LlVzZXJGaWVsZHN9XHJcbiAgYCxcclxuICBvcmRlckxpc3Q6IGdxbGBcclxuICAgICAgcXVlcnkgb3JkZXJMaXN0KCRkYXRhOiBPcmRlcklucHV0KXtcclxuICAgICAgICAgIG9yZGVyTGlzdCAob3JkZXJJbnB1dDogJGRhdGEsIGZyb21Vc2VyOiB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgbGlzdCB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLk9yZGVySW5mb0ZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICByT3JkZXJQcm9kdWN0IHtcclxuICAgICAgICAgICAgICAgICAgICAgIC4uLlJPcmRlclByb2R1Y3RGaWVsZHNcclxuICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC4uLlByb2R1Y3RGaWVsZHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5JbWdGaWVsZHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJHtmcmFnbWVudC5PcmRlckluZm9GaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuUk9yZGVyUHJvZHVjdEZpZWxkc31cclxuICAgICAgJHtmcmFnbWVudC5Qcm9kdWN0RmllbGRzfVxyXG4gICAgICAke2ZyYWdtZW50LkltZ0ZpZWxkc31cclxuICBgLFxyXG4gIG9yZGVyRGV0YWlsOiBncWxgXHJcbiAgICAgIHF1ZXJ5ICgkaWQ6IFN0cmluZykge1xyXG4gICAgICAgICAgc2VsZkFkZHJlc3M6IGdldERhdGFDb25maWcoZGF0YUNvbmZpZ0lucHV0OiB7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCIke0RpY3RUeXBlRW51bS5TZWxmQWRkcmVzc31cIlxyXG4gICAgICAgICAgfSkge1xyXG4gICAgICAgICAgICAgIC4uLkRhdGFDb25maWdGaWVsZHNcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIG9yZGVyRGV0YWlsKGlkOiAkaWQpIHtcclxuICAgICAgICAgICAgICAuLi5PcmRlckluZm9GaWVsZHNcclxuICAgICAgICAgICAgICByT3JkZXJQcm9kdWN0IHtcclxuICAgICAgICAgICAgICAgICAgLi4uUk9yZGVyUHJvZHVjdEZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICBwcm9kdWN0IHtcclxuICAgICAgICAgICAgICAgICAgICAgIC4uLlByb2R1Y3RGaWVsZHNcclxuICAgICAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uSW1nRmllbGRzXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgdXNlciB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLlVzZXJGaWVsZHNcclxuICAgICAgICAgICAgICAgICAgdXNlckluZm8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgLi4uVXNlckluZm9GaWVsZHNcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB1c2VyQWRkcmVzcyB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLlVzZXJBZGRyZXNzRmllbGRzXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHVzZXJQYXlDYXJkIHtcclxuICAgICAgICAgICAgICAgICAgLi4uVXNlclBheUNhcmRGaWVsZHNcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJHtmcmFnbWVudC5EYXRhQ29uZmlnRmllbGRzfVxyXG4gICAgICAke2ZyYWdtZW50Lk9yZGVySW5mb0ZpZWxkc31cclxuICAgICAgJHtmcmFnbWVudC5ST3JkZXJQcm9kdWN0RmllbGRzfVxyXG4gICAgICAke2ZyYWdtZW50LlByb2R1Y3RGaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuSW1nRmllbGRzfVxyXG4gICAgICAke2ZyYWdtZW50LlVzZXJGaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuVXNlckluZm9GaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuVXNlclBheUNhcmRGaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuVXNlckFkZHJlc3NGaWVsZHN9XHJcbiAgYCxcclxuICB1cGRhdGVQYXNzd29yZDogZ3FsYFxyXG4gICAgICBtdXRhdGlvbiAoJGRhdGE6IFVwZGF0ZVBhc3N3b3JkSW5wdXQpIHtcclxuICAgICAgICAgIHVwZGF0ZVBhc3N3b3JkIChkYXRhOiAkZGF0YSkge1xyXG4gICAgICAgICAgICAgIHVzZXIge1xyXG4gICAgICAgICAgICAgICAgICAuLi5Vc2VyRmllbGRzXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGF1dGhCb2R5IHtcclxuICAgICAgICAgICAgICAgICAgdG9rZW5cclxuICAgICAgICAgICAgICAgICAgcmVmcmVzaHRva2VuXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICR7ZnJhZ21lbnQuVXNlckZpZWxkc31cclxuICBgLFxyXG4gIHBheUNhcmRMaXN0T25lVXNlcjogZ3FsYFxyXG4gICAgICBxdWVyeSB7XHJcbiAgICAgICAgICBwYXlDYXJkTGlzdE9uZVVzZXIge1xyXG4gICAgICAgICAgICAgIC4uLlVzZXJQYXlDYXJkRmllbGRzXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJHtmcmFnbWVudC5Vc2VyUGF5Q2FyZEZpZWxkc31cclxuICBgLFxyXG4gIHVzZXJQYXlDYXJkOiBncWxgXHJcbiAgICAgIHF1ZXJ5ICgkZGF0YTogVXNlclBheUNhcmRJdGVtSW5wdXQpIHtcclxuICAgICAgICAgIHVzZXJQYXlDYXJkICh1c2VyUGF5Q2FyZDogJGRhdGEpIHtcclxuICAgICAgICAgICAgICAuLi5Vc2VyUGF5Q2FyZEZpZWxkc1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICR7ZnJhZ21lbnQuVXNlclBheUNhcmRGaWVsZHN9XHJcbiAgYCxcclxuICBzYXZlVXNlclBheUNhcmQ6IGdxbGBcclxuICAgICAgbXV0YXRpb24gKCRkYXRhOiBVc2VyUGF5Q2FyZEl0ZW1JbnB1dCl7XHJcbiAgICAgICAgICBzYXZlVXNlclBheUNhcmQgKHVzZXJQYXlDYXJkOiAkZGF0YSkge1xyXG4gICAgICAgICAgICAgIC4uLlVzZXJQYXlDYXJkRmllbGRzXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJHtmcmFnbWVudC5Vc2VyUGF5Q2FyZEZpZWxkc31cclxuICBgLFxyXG4gIHNldFVzZXJQYXlDYXJkRGVmYXVsdDogZ3FsYFxyXG4gICAgICBtdXRhdGlvbiAoJGRhdGE6IFVzZXJQYXlDYXJkSXRlbUlucHV0KSB7XHJcbiAgICAgICAgICBzZXRVc2VyUGF5Q2FyZERlZmF1bHQgKHVzZXJQYXlDYXJkOiAkZGF0YSkge1xyXG4gICAgICAgICAgICAgIC4uLlVzZXJQYXlDYXJkRmllbGRzXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJHtmcmFnbWVudC5Vc2VyUGF5Q2FyZEZpZWxkc31cclxuICBgLFxyXG4gIHBpY2t1cEFkZHJlc3M6IGdxbGBcclxuICAgICAgcXVlcnkge1xyXG4gICAgICAgICAgZ2V0RGF0YUNvbmZpZyhkYXRhQ29uZmlnSW5wdXQ6IHtcclxuICAgICAgICAgICAgICB0eXBlOiBcIiR7RGljdFR5cGVFbnVtLlNlbGZBZGRyZXNzfVwiXHJcbiAgICAgICAgICB9KSB7XHJcbiAgICAgICAgICAgICAgLi4uRGF0YUNvbmZpZ0ZpZWxkc1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgb25lVXNlciB7XHJcbiAgICAgICAgICAgICAgLi4uVXNlckZpZWxkc1xyXG4gICAgICAgICAgICAgIHVzZXJJbmZvIHtcclxuICAgICAgICAgICAgICAgICAgLi4uVXNlckluZm9GaWVsZHNcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJHtmcmFnbWVudC5Vc2VySW5mb0ZpZWxkc31cclxuICAgICAgJHtmcmFnbWVudC5EYXRhQ29uZmlnRmllbGRzfVxyXG4gICAgICAke2ZyYWdtZW50LlVzZXJGaWVsZHN9XHJcbiAgYCxcclxuICB1cGRhdGVVc2VySW5mbzogZ3FsYFxyXG4gICAgICBtdXRhdGlvbiAoJHVzZXJJbmZvOiBVc2VySW5mb0l0ZW1JbnB1dCkge1xyXG4gICAgICAgICAgdXBkYXRlVXNlckluZm8gKHVzZXJJbmZvOiAkdXNlckluZm8pIHtcclxuICAgICAgICAgICAgICAuLi5Vc2VySW5mb0ZpZWxkc1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICR7ZnJhZ21lbnQuVXNlckluZm9GaWVsZHN9XHJcbiAgYCxcclxuICB1c2VyQWRkcmVzc0xpc3RPbmVVc2VyOiBncWxgXHJcbiAgICAgIHF1ZXJ5IHtcclxuICAgICAgICAgIHVzZXJBZGRyZXNzTGlzdE9uZVVzZXIge1xyXG4gICAgICAgICAgICAgIC4uLlVzZXJBZGRyZXNzRmllbGRzXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJHtmcmFnbWVudC5Vc2VyQWRkcmVzc0ZpZWxkc31cclxuICBgLFxyXG4gIHVzZXJBZGRyZXNzOiBncWxgXHJcbiAgICAgIHF1ZXJ5ICgkZGF0YTogVXNlckFkZHJlc3NJdGVtSW5wdXQpIHtcclxuICAgICAgICAgIHVzZXJBZGRyZXNzICh1c2VyQWRkcmVzczogJGRhdGEpIHtcclxuICAgICAgICAgICAgICAuLi5Vc2VyQWRkcmVzc0ZpZWxkc1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICR7ZnJhZ21lbnQuVXNlckFkZHJlc3NGaWVsZHN9XHJcbiAgYCxcclxuICBzYXZlVXNlckFkZHJlc3M6IGdxbGBcclxuICAgICAgbXV0YXRpb24gKCRkYXRhOiBVc2VyQWRkcmVzc0l0ZW1JbnB1dCl7XHJcbiAgICAgICAgICBzYXZlVXNlckFkZHJlc3MgKHVzZXJBZGRyZXNzOiAkZGF0YSkge1xyXG4gICAgICAgICAgICAgIC4uLlVzZXJBZGRyZXNzRmllbGRzXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJHtmcmFnbWVudC5Vc2VyQWRkcmVzc0ZpZWxkc31cclxuICBgLFxyXG4gIHNldFVzZXJBZGRyZXNzRGVmYXVsdDogZ3FsYFxyXG4gICAgICBtdXRhdGlvbiAoJGRhdGE6IFVzZXJBZGRyZXNzSXRlbUlucHV0KSB7XHJcbiAgICAgICAgICBzZXRVc2VyQWRkcmVzc0RlZmF1bHQgKHVzZXJBZGRyZXNzOiAkZGF0YSkge1xyXG4gICAgICAgICAgICAgIC4uLlVzZXJBZGRyZXNzRmllbGRzXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJHtmcmFnbWVudC5Vc2VyQWRkcmVzc0ZpZWxkc31cclxuICBgLFxyXG4gIHByb2R1Y3RzSW5DYXRlZ29yeTogZ3FsYFxyXG4gICAgICBxdWVyeSAoJGRhdGE6IENhdGVnb3J5SXRlbUlucHV0LCAkcHJvZHVjdEl0ZW1JbnB1dDogUHJvZHVjdEl0ZW1JbnB1dCkge1xyXG4gICAgICAgICAgcHJvZHVjdHNJbkNhdGVnb3J5KGNhdGVnb3J5SXRlbUlucHV0OiAkZGF0YSwgcHJvZHVjdEl0ZW1JbnB1dDogJHByb2R1Y3RJdGVtSW5wdXQpIHtcclxuICAgICAgICAgICAgICAuLi5Qcm9kdWN0RmllbGRzXHJcbiAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgLi4uSW1nRmllbGRzXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY2F0ZWdvcnlMaXN0KGRhdGE6IHtcclxuICAgICAgICAgICAgICBjYXRlZ29yeToge1xyXG4gICAgICAgICAgICAgICAgICBwYXJlbnRDYXRlZ29yeTogJGRhdGFcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KSB7XHJcbiAgICAgICAgICAgICAgdG90YWxcclxuICAgICAgICAgICAgICBsaXN0IHtcclxuICAgICAgICAgICAgICAgICAgLi4uQ2F0ZWdvcnlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJHtmcmFnbWVudC5Qcm9kdWN0RmllbGRzfVxyXG4gICAgICAke2ZyYWdtZW50LkltZ0ZpZWxkc31cclxuICAgICAgJHtmcmFnbWVudC5DYXRlZ29yeUZpZWxkc31cclxuICBgLFxyXG4gIGNhdGVnb3J5TGV2ZWw6IGdxbGBcclxuICAgICAgcXVlcnkgKCRkYXRhOiBDYXRlZ29yeUl0ZW1JbnB1dCkge1xyXG4gICAgICAgICAgY2F0ZWdvcnlMZXZlbChjYXRlZ29yeUl0ZW1JbnB1dDogJGRhdGEpXHJcbiAgICAgIH1cclxuICBgLFxyXG4gIG9uZUNhdGVnb3J5OiBncWxgXHJcbiAgICAgIHF1ZXJ5ICgkZGF0YTogQ2F0ZWdvcnlJdGVtSW5wdXQpIHtcclxuICAgICAgICAgIG9uZUNhdGVnb3J5KGRhdGE6ICRkYXRhKSB7XHJcbiAgICAgICAgICAgICAgLi4uQ2F0ZWdvcnlcclxuICAgICAgICAgICAgICBwYXJlbnRDYXRlZ29yeSB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLkNhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICAgIHBhcmVudENhdGVnb3J5IHtcclxuICAgICAgICAgICAgICAgICAgICAgIC4uLkNhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJHtmcmFnbWVudC5DYXRlZ29yeUZpZWxkc31cclxuICBgLFxyXG4gIHByb2R1Y3RMaXN0OiBncWxgXHJcbiAgICAgIHF1ZXJ5ICgkcHJvZHVjdElucHV0OiBQcm9kdWN0SXRlbUlucHV0LCAkb3JkZXJCeUlucHV0OiBPcmRlckJ5SW5wdXQpIHtcclxuICAgICAgICAgIHByb2R1Y3RMaXN0KHByb2R1Y3RJbnB1dDogJHByb2R1Y3RJbnB1dCwgb3JkZXJCeUlucHV0OiAkb3JkZXJCeUlucHV0KSB7XHJcbiAgICAgICAgICAgICAgdG90YWxcclxuICAgICAgICAgICAgICBsaXN0IHtcclxuICAgICAgICAgICAgICAgICAgLi4uUHJvZHVjdEZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgLi4uSW1nRmllbGRzXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJHtmcmFnbWVudC5Qcm9kdWN0RmllbGRzfVxyXG4gICAgICAke2ZyYWdtZW50LkltZ0ZpZWxkc31cclxuICBgLFxyXG4gIHVwZGF0ZU51bVNob3BDYXJ0OiBncWxgXHJcbiAgICAgIG11dGF0aW9uICgkc2hvcENhcnQ6IFNob3BDYXJ0SXRlbUlucHV0LCAkdXBkYXRlTnVtOiBGbG9hdCkge1xyXG4gICAgICAgICAgdXBkYXRlTnVtU2hvcENhcnQgKHNob3BDYXJ0OiAkc2hvcENhcnQsIHVwZGF0ZU51bTogJHVwZGF0ZU51bSkge1xyXG4gICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgbnVtYmVyXHJcbiAgICAgICAgICAgICAgcHJvZHVjdCB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLlByb2R1Y3RGaWVsZHNcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgdXNlciB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLlVzZXJGaWVsZHNcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJHtmcmFnbWVudC5Qcm9kdWN0RmllbGRzfVxyXG4gICAgICAke2ZyYWdtZW50LlVzZXJGaWVsZHN9XHJcbiAgYCxcclxuICB1c2VyU2hvcENhcnRMaXN0OiBncWxgXHJcbiAgICAgIHF1ZXJ5IHtcclxuICAgICAgICAgIHNob3BDYXJ0TGlzdCB7XHJcbiAgICAgICAgICAgICAgLi4uU2hvcENhcnRGaWVsZHNcclxuICAgICAgICAgICAgICBwcm9kdWN0IHtcclxuICAgICAgICAgICAgICAgICAgLi4uUHJvZHVjdEZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgLi4uSW1nRmllbGRzXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJHtmcmFnbWVudC5TaG9wQ2FydEZpZWxkc31cclxuICAgICAgJHtmcmFnbWVudC5Qcm9kdWN0RmllbGRzfVxyXG4gICAgICAke2ZyYWdtZW50LkltZ0ZpZWxkc31cclxuICBgLFxyXG4gIHVwZGF0ZVNob3BDYXJ0OiBncWxgXHJcbiAgICAgIG11dGF0aW9uICgkc2hvcENhcnQ6IFNob3BDYXJ0SXRlbUlucHV0KXtcclxuICAgICAgICAgIHVwZGF0ZVNob3BDYXJ0IChzaG9wQ2FydDogJHNob3BDYXJ0KSB7XHJcbiAgICAgICAgICAgICAgLi4uU2hvcENhcnRGaWVsZHNcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAke2ZyYWdtZW50LlNob3BDYXJ0RmllbGRzfVxyXG4gIGAsXHJcbiAgb3JkZXJDb25maXJtSW5mbzogZ3FsYFxyXG4gICAgICBxdWVyeSB7XHJcbiAgICAgICAgICBnZXREYXRhQ29uZmlnKGRhdGFDb25maWdJbnB1dDoge1xyXG4gICAgICAgICAgICAgIHR5cGU6IFwiJHtEaWN0VHlwZUVudW0uU2VsZkFkZHJlc3N9XCJcclxuICAgICAgICAgIH0pIHtcclxuICAgICAgICAgICAgICAuLi5EYXRhQ29uZmlnRmllbGRzXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBvbmVVc2VyIHtcclxuICAgICAgICAgICAgICAuLi5Vc2VyRmllbGRzXHJcbiAgICAgICAgICAgICAgdXNlckluZm8ge1xyXG4gICAgICAgICAgICAgICAgICAuLi5Vc2VySW5mb0ZpZWxkc1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHBheUNhcmRMaXN0T25lVXNlciB7XHJcbiAgICAgICAgICAgICAgLi4uVXNlclBheUNhcmRGaWVsZHNcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHVzZXJBZGRyZXNzTGlzdE9uZVVzZXIge1xyXG4gICAgICAgICAgICAgIC4uLlVzZXJBZGRyZXNzRmllbGRzXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBmcmVpZ2h0Q29uZmlnOiBnZXREYXRhQ29uZmlnIChkYXRhQ29uZmlnSW5wdXQ6IHtcclxuICAgICAgICAgICAgICB0eXBlOiBcIiR7RGljdFR5cGVFbnVtLkZyZWlnaHR9XCJcclxuICAgICAgICAgIH0pIHtcclxuICAgICAgICAgICAgICAuLi5EYXRhQ29uZmlnRmllbGRzXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB1c2VyTGV2ZWxMaXN0OiBnZXREaWN0TGlzdCAoZGljdElucHV0OiB7XHJcbiAgICAgICAgICAgICAgZGljdFR5cGVDb2RlOiBcIlVzZXJMZXZlbFwiXHJcbiAgICAgICAgICB9KSB7XHJcbiAgICAgICAgICAgICAgLi4uRGljdEZpZWxkc1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICR7ZnJhZ21lbnQuVXNlckFkZHJlc3NGaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuVXNlclBheUNhcmRGaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuVXNlckluZm9GaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuVXNlckZpZWxkc31cclxuICAgICAgJHtmcmFnbWVudC5EYXRhQ29uZmlnRmllbGRzfVxyXG4gICAgICAke2ZyYWdtZW50LkRpY3RGaWVsZHN9XHJcbiAgYCxcclxuICBzYXZlT3JkZXI6IGdxbGBcclxuICAgICAgbXV0YXRpb24gKCRvcmRlckluZm9JdGVtSW5wdXQ6IE9yZGVySW5mb0l0ZW1JbnB1dCkge1xyXG4gICAgICAgICAgc2F2ZU9yZGVyIChvcmRlckluZm9JdGVtSW5wdXQ6ICRvcmRlckluZm9JdGVtSW5wdXQpIHtcclxuICAgICAgICAgICAgICAuLi5PcmRlckluZm9GaWVsZHNcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAke2ZyYWdtZW50Lk9yZGVySW5mb0ZpZWxkc31cclxuICBgLFxyXG4gIGRpY3RMaXN0OiBncWxgXHJcbiAgICAgIHF1ZXJ5ICgkZGF0YTogRGljdElucHV0KSB7XHJcbiAgICAgICAgICBnZXREaWN0TGlzdCAoZGljdElucHV0OiAkZGF0YSkge1xyXG4gICAgICAgICAgICAgIC4uLkRpY3RGaWVsZHNcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAke2ZyYWdtZW50LkRpY3RGaWVsZHN9XHJcbiAgYCxcclxuICBsaW1pdFRpbWVEYXRhOiBncWxgXHJcbiAgICBxdWVyeSB7XHJcbiAgICAgICAgbGltaXRUaW1lRGF0YTogZ2V0RGF0YUNvbmZpZyAoZGF0YUNvbmZpZ0lucHV0OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiJHtEaWN0VHlwZUVudW0uUHJvbW90aW9uRmxhc2hTYWxlfVwiXHJcbiAgICAgICAgfSkge1xyXG4gICAgICAgICAgICAuLi5EYXRhQ29uZmlnRmllbGRzXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5EYXRhQ29uZmlnRmllbGRzfVxyXG4gIGAsXHJcbiAgcHJvZHVjdExpc3RCeUlkczogZ3FsYFxyXG4gICAgcXVlcnkgKCRpZHM6IFtTdHJpbmddKSB7XHJcbiAgICAgICAgcHJvZHVjdExpc3RCeUlkcyAoaWRzOiAkaWRzKSB7XHJcbiAgICAgICAgICAgIHRvdGFsXHJcbiAgICAgICAgICAgIGxpc3Qge1xyXG4gICAgICAgICAgICAgICAgLi4uUHJvZHVjdEZpZWxkc1xyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5JbWdGaWVsZHNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuUHJvZHVjdEZpZWxkc31cclxuICAgICR7ZnJhZ21lbnQuSW1nRmllbGRzfVxyXG4gIGAsXHJcbiAgZ3JvdXBRdWV1ZUxpc3Q6IGdxbGBcclxuICAgIHF1ZXJ5ICgkZ3JvdXBRdWV1ZUl0ZW1JbnB1dDogR3JvdXBRdWV1ZUl0ZW1JbnB1dCkge1xyXG4gICAgICAgIGdyb3VwUXVldWVMaXN0IChncm91cFF1ZXVlSXRlbUlucHV0OiAkZ3JvdXBRdWV1ZUl0ZW1JbnB1dCkge1xyXG4gICAgICAgICAgICAuLi5Hcm91cFF1ZXVlRmllbGRzXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5Hcm91cFF1ZXVlRmllbGRzfVxyXG4gIGAsXHJcbiAgdXBkYXRlT3JkZXI6IGdxbGBcclxuICAgIG11dGF0aW9uICgkb3JkZXJJbmZvSXRlbUlucHV0OiBPcmRlckluZm9JdGVtSW5wdXQpIHtcclxuICAgICAgICB1cGRhdGVPcmRlciAob3JkZXJJbmZvSXRlbUlucHV0OiAkb3JkZXJJbmZvSXRlbUlucHV0KSB7XHJcbiAgICAgICAgICAgIC4uLk9yZGVySW5mb0ZpZWxkc1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuT3JkZXJJbmZvRmllbGRzfVxyXG4gIGAsXHJcbn1cclxuXHJcbiIsImV4cG9ydCBlbnVtIFByb21vQ29kZVR5cGVFbnVtIHtcclxuICBEYXJlbkNhcmQgPSAnRGFyZW5DYXJkJyxcclxuICBQcm9tb0NvZGUgPSAnUHJvbW9Db2RlJyxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRGlzY291bnRUeXBlRW51bSB7XHJcbiAgUGVyY2VudGFnZSA9ICdQZXJjZW50YWdlJyxcclxuICBBbW91bnQgPSAnQW1vdW50JyxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gU1Mge1xyXG4gIFNTLFxyXG4gIFNTMixcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRGlzY291bnRDb25kaXRpb25FbnVtIHtcclxuICBObyA9ICdObycsXHJcbiAgQW1vdW50ID0gJ0Ftb3VudCcsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFByb2R1Y3RTdXBwbGVtZW50IHtcclxuICBfLFxyXG4gIFBlbmRpbmcsXHJcbiAgRmluaXNoLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUHJvZHVjdFN1cHBsZW1lbnRTdHJpbmc6IGFueSA9IHtcclxuICAxOiAn6YWN6LSn5LitJyxcclxuICAyOiAn5bey5a6M5oiQJyxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gT3JkZXJTdGF0ZSB7XHJcbiAgT3JkZXJlZCA9IDEsXHJcbiAgUGFpZCA9IDIsXHJcbiAgUGlja2luZyA9IDMsXHJcbiAgUGlja2VkVXAgPSA0LFxyXG4gIEZpbmlzaCA9IDUsXHJcbiAgQ2FuY2VsID0gNixcclxufVxyXG5cclxuLy8gMTrku6Pku5jmrL4gMjrlt7Lku5jmrL4gMzrlt7Llj5HotKcgNDrlt7LmlLbotKcgNTrlt7Llj5bmtoggNjrlt7LlrozmiJAgNzrlt7LpgIDlm55cclxuY29uc3QgX3M6IHtcclxuICBba2V5IGluIG51bWJlcl06IHN0cmluZ1xyXG59ID0ge1xyXG4gIDE6ICflvoXku5jmrL4nLFxyXG4gIDI6ICflt7Lku5jmrL4nLFxyXG4gIDM6ICflt7Llj5HotKcnLFxyXG4gIDQ6ICflt7LmlLbotKcnLFxyXG4gIDU6ICflt7Llj5bmtognLFxyXG4gIDY6ICflt7LlrozmiJAnLFxyXG4gIDc6ICflt7LpgIDlm54nLFxyXG59XHJcbmV4cG9ydCBjb25zdCBvcmRlclN0YXRlVG9TdHJpbmcgPSAoczogbnVtYmVyIHwgbnVsbCA9IDApID0+IHtcclxuICByZXR1cm4gX3M/LlsocyA/PyAwKV0gPz8gJydcclxufVxyXG5cclxuLy8g6YWN572u566h55CGXHJcbmV4cG9ydCBlbnVtIERpY3RUeXBlRW51bSB7XHJcbiAgR3JvdXBQcmVjaXNpb24gPSAnR3JvdXBQcmVjaXNpb24nLFxyXG4gIFVzZXJMZXZlbCA9ICdVc2VyTGV2ZWwnLFxyXG4gIEZyZWlnaHQgPSAnRnJlaWdodCcsXHJcbiAgSGVscERvY3VtZW50YXRpb25UeXBlID0gJ0hlbHBEb2N1bWVudGF0aW9uVHlwZScsXHJcbiAgSGVscERvY3VtZW50YXRpb24gPSAnSGVscERvY3VtZW50YXRpb24nLFxyXG4gIFByb21vdGlvblRoZW1lU2VsZWN0ID0gJ1Byb21vdGlvblRoZW1lU2VsZWN0JyxcclxuICBQcm9tb3Rpb25GbGFzaFNhbGUgPSAnUHJvbW90aW9uRmxhc2hTYWxlJyxcclxuICBIb21lQ2Fyb3VzZWwgPSAnSG9tZUNhcm91c2VsJyxcclxuICBPcmRlclN0YXRlID0gJ09yZGVyU3RhdGUnLFxyXG4gIFNlbGZBZGRyZXNzID0gJ1NlbGZBZGRyZXNzJyxcclxuICBBcHBNb2R1bGUgPSAnQXBwTW9kdWxlJyxcclxufVxyXG5cclxuLy8g6L2u5pKt5Zu+5YWz6IGU6aG5XHJcbmV4cG9ydCBlbnVtIFJlbGF0ZWRPYmpUeXBlRW51bSB7XHJcbiAgUHJvbW9Db2RlID0gJ1Byb21vQ29kZScsXHJcbiAgUHJvbW90aW9uRmxhc2hTYWxlID0gJ1Byb21vdGlvbkZsYXNoU2FsZScsXHJcbiAgUHJvbW90aW9uVGhlbWVTZWxlY3QgPSAnUHJvbW90aW9uVGhlbWVTZWxlY3QnLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBBcHBGb290QmFyIHtcclxuICBob21lID0gJ2hvbWUnLFxyXG4gIGdyb3VwID0gJ2dyb3VwJyxcclxuICBjYXJkID0gJ2NhcmQnLFxyXG4gIGNhcnQgPSAnY2FydCcsXHJcbiAgbWUgPSAnbWUnXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEFwcE1vZHVsZVR5cGVFbnVtIHtcclxuICBjYXRlZ29yeVNlbGVjdGlvbiA9ICdjYXRlZ29yeVNlbGVjdGlvbicsXHJcbiAgbGltaXRUaW1lID0gJ2xpbWl0VGltZScsXHJcbiAgc2FsZXNSYW5rID0gJ3NhbGVzUmFuaycsXHJcbiAgdGhlbWVTZWxlY3Rpb24gPSAndGhlbWVTZWxlY3Rpb24nLFxyXG4gIG1heUxpa2UgPSAnbWF5TGlrZScsXHJcbiAgbGluZVJhbmtpbmcgPSAnbGluZVJhbmtpbmcnLFxyXG4gIHRvcFJhbmtpbmcgPSAndG9wUmFua2luZycsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDYXRlZ29yeVJvb3ROYW1lID0gJ3Jvb3QnXHJcblxyXG5leHBvcnQgY29uc3Qgb3JkZXJTdGF0ZUtleXM6IHN0cmluZ1tdID0gT2JqZWN0LnZhbHVlcyhPcmRlclN0YXRlKSBhcyBzdHJpbmdbXVxyXG5cclxuZXhwb3J0IGNvbnN0IFByb3ZpbmNlRGF0YSA9IFtcclxuICBbJ0FMJywgJ0FsYWJhbWEnXSxcclxuICBbJ0FLJywgJ0FsYXNrYSddLFxyXG4gIFsnQVonLCAnQXJpem9uYSddLFxyXG4gIFsnQVInLCAnQXJrYW5zYXMnXSxcclxuICBbJ0NBJywgJ0NhbGlmb3JuaWEnXSxcclxuICBbJ0NPJywgJ0NvbG9yYWRvJ10sXHJcbiAgWydDVCcsICdDb25uZWN0aWN1dCddLFxyXG4gIFsnREUnLCAnRGVsYXdhcmUnXSxcclxuICBbJ0RDJywgJ0Rpc3RyaWN0IE9mIENvbHVtYmlhJ10sXHJcbiAgWydGTCcsICdGbG9yaWRhJ10sXHJcbiAgWydHQScsICdHZW9yZ2lhJ10sXHJcbiAgWydISScsICdIYXdhaWknXSxcclxuICBbJ0lEJywgJ0lkYWhvJ10sXHJcbiAgWydJTCcsICdJbGxpbm9pcyddLFxyXG4gIFsnSU4nLCAnSW5kaWFuYSddLFxyXG4gIFsnSUEnLCAnSW93YSddLFxyXG4gIFsnS1MnLCAnS2Fuc2FzJ10sXHJcbiAgWydLWScsICdLZW50dWNreSddLFxyXG4gIFsnTEEnLCAnTG91aXNpYW5hJ10sXHJcbiAgWydNRScsICdNYWluZSddLFxyXG4gIFsnTUQnLCAnTWFyeWxhbmQnXSxcclxuICBbJ01BJywgJ01hc3NhY2h1c2V0dHMnXSxcclxuICBbJ01JJywgJ01pY2hpZ2FuJ10sXHJcbiAgWydNTicsICdNaW5uZXNvdGEnXSxcclxuICBbJ01TJywgJ01pc3Npc3NpcHBpJ10sXHJcbiAgWydNTycsICdNaXNzb3VyaSddLFxyXG4gIFsnTVQnLCAnTW9udGFuYSddLFxyXG4gIFsnTkUnLCAnTmVicmFza2EnXSxcclxuICBbJ05WJywgJ05ldmFkYSddLFxyXG4gIFsnTkgnLCAnTmV3IEhhbXBzaGlyZSddLFxyXG4gIFsnTkonLCAnTmV3IEplcnNleSddLFxyXG4gIFsnTk0nLCAnTmV3IE1leGljbyddLFxyXG4gIFsnTlknLCAnTmV3IFlvcmsnXSxcclxuICBbJ05DJywgJ05vcnRoIENhcm9saW5hJ10sXHJcbiAgWydORCcsICdOb3J0aCBEYWtvdGEnXSxcclxuICBbJ09IJywgJ09oaW8nXSxcclxuICBbJ09LJywgJ09rbGFob21hJ10sXHJcbiAgWydPUicsICdPcmVnb24nXSxcclxuICBbJ1BBJywgJ1Blbm5zeWx2YW5pYSddLFxyXG4gIFsnUkknLCAnUmhvZGUgSXNsYW5kJ10sXHJcbiAgWydTQycsICdTb3V0aCBDYXJvbGluYSddLFxyXG4gIFsnU0QnLCAnU291dGggRGFrb3RhJ10sXHJcbiAgWydUTicsICdUZW5uZXNzZWUnXSxcclxuICBbJ1RYJywgJ1RleGFzJ10sXHJcbiAgWydVVCcsICdVdGFoJ10sXHJcbiAgWydWVCcsICdWZXJtb250J10sXHJcbiAgWydWQScsICdWaXJnaW5pYSddLFxyXG4gIFsnV0EnLCAnV2FzaGluZ3RvbiddLFxyXG4gIFsnV1YnLCAnV2VzdCBWaXJnaW5pYSddLFxyXG4gIFsnV0knLCAnV2lzY29uc2luJ10sXHJcbiAgWydXWScsICdXeW9taW5nJ10sXHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQaWNrVXBUeXBlTmFtZSA9ICh0eXBlOiBzdHJpbmcgfCAnU2VsZicgfCAnRGVsaXZlcnknKSA9PiB7XHJcbiAgcmV0dXJuICh7XHJcbiAgICBTZWxmOiAn6Ieq5Y+WJyxcclxuICAgIERlbGl2ZXJ5OiAn6YWN6YCBJyxcclxuICB9KVt0eXBlIGFzICdTZWxmJyB8ICdEZWxpdmVyeSddID8/ICcnXHJcbn1cclxuZXhwb3J0IGNvbnN0IFBpY2tVcFR5cGVFbnVtID0ge1xyXG4gIFNlbGY6ICdTZWxmJyxcclxuICBEZWxpdmVyeTogJ0RlbGl2ZXJ5JyxcclxufVxyXG4iLCJleHBvcnQgY29uc3QgbXBTdHlsZSA9IHtcclxuICByZWQ6ICcjRjg0MDMzJyxcclxuICBzaGFkb3c6IHtcclxuICAgIDE6ICcwIDFweCAxcHggMCByZ2JhKDAsMCwwLDAuMTQpLCAwIDJweCAxcHggLTFweCByZ2JhKDAsMCwwLDAuMTIpLCAwIDFweCAzcHggMCByZ2JhKDAsMCwwLDAuMjApJyxcclxuICB9LFxyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZU11aVRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7bXBTdHlsZX0gZnJvbSAnLi9jb21tb24nXHJcblxyXG5leHBvcnQgY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XHJcbiAgcGFsZXR0ZToge1xyXG4gICAgc2Vjb25kYXJ5OiB7XHJcbiAgICAgIG1haW46IG1wU3R5bGUucmVkLFxyXG4gICAgfSxcclxuICB9XHJcbn0pXHJcbiIsImltcG9ydCB7IE1heWJlIH0gZnJvbSBcIi4uL2dyYXBocWxUeXBlcy90eXBlc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxzID0gKGtleTogTWF5YmU8c3RyaW5nPiB8IHVuZGVmaW5lZCkgPT4ga2V5ID8/ICcnXHJcbiIsIlxyXG5leHBvcnQgY29uc3QgaXNEZXYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50J1xyXG5cclxuZXhwb3J0IGNvbnN0IHNzTG9nID0gKGRhdGE6IGFueSkgPT4ge1xyXG4gIGlmIChpc0Rldikge1xyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuICB9XHJcbiAgcmV0dXJuIGRhdGFcclxufVxyXG4iLCIvKiBnbG9iYWwgbG9jYWxTdG9yYWdlICovXHJcbmV4cG9ydCBjb25zdCBzZXRUb2tlbiA9ICh0b2tlbjogc3RyaW5nLCBuYW1lID0gJ3Rva2VuJykgPT4gbG9jYWxTdG9yYWdlLnNldEl0ZW0obmFtZSwgdG9rZW4pXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VG9rZW4gPSAobmFtZSA9ICd0b2tlbicpID0+IGxvY2FsU3RvcmFnZS5nZXRJdGVtKG5hbWUpIHx8ICcnXHJcbiIsImltcG9ydCBmb3JtYXQgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0J1xyXG5pbXBvcnQgc2V0IGZyb20gJ2xvZGFzaC9zZXQnXHJcbmltcG9ydCB7Y2xvbmVEZWVwLCBQcm9wZXJ0eVBhdGgsIGlzRnVuY3Rpb24sIGdldCwgaXNBcnJheSwgbWVyZ2VXaXRoLCBpc1N0cmluZ30gZnJvbSAnbG9kYXNoJ1xyXG5pbXBvcnQge01heWJlfSBmcm9tICcuLi9ncmFwaHFsVHlwZXMvdHlwZXMnXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0T2JqZWN0VVJMID0gKGZpbGU6IGFueSkgPT4ge1xyXG4gIC8vIEB0cy1pZ25vcmVcclxuICByZXR1cm4gd2luZG93Py5jcmVhdGVPYmplY3RVUkw/LihmaWxlKVxyXG4gICAgICA/PyB3aW5kb3c/LlVSTD8uY3JlYXRlT2JqZWN0VVJMPy4oZmlsZSlcclxuICAgICAgPz8gd2luZG93Py53ZWJraXRVUkw/LmNyZWF0ZU9iamVjdFVSTD8uKGZpbGUpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwYXJzZUZsb2F0Rm9ySW5wdXQgPSAodmFsdWU6IGFueSkgPT4ge1xyXG4gIGlmICh2YWx1ZSA9PT0gJy0nIHx8IHZhbHVlID09PSAnJykgcmV0dXJuIHZhbHVlXHJcbiAgdHJ5IHtcclxuICAgIHJldHVybiBwYXJzZUZsb2F0KHZhbHVlKVxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZSlcclxuICB9XHJcbn1cclxuXHJcbnR5cGUgU2V0RGF0YTxTID0gYW55PiA9IFMgfCAoKHByZURhdGE6IFMpID0+IFMpXHJcblxyXG5leHBvcnQgY29uc3QgZnBTZXQgPSA8RSA9IGFueT4ob3JpZ2luOiBhbnksIHBhdGg6IGFueSwgdmFsdWU6IFNldERhdGE8RT4pID0+IHtcclxuICBsZXQgbmV3RGF0YSA9IGNsb25lRGVlcChvcmlnaW4pXHJcbiAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XHJcbiAgICBjb25zdCBvbGREYXRhID0gZ2V0KG9yaWdpbiwgcGF0aClcclxuICAgIHNldChuZXdEYXRhLCBwYXRoLCB2YWx1ZShvbGREYXRhKSlcclxuICB9IGVsc2Uge1xyXG4gICAgc2V0KG5ld0RhdGEsIHBhdGgsIHZhbHVlKVxyXG4gIH1cclxuICByZXR1cm4gbmV3RGF0YVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGVsYXkgPSAodGltZTogbnVtYmVyKSA9PiAobmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIHRpbWUpKSlcclxuXHJcbmV4cG9ydCBjb25zdCBmcFNldFByZTogPFQgZXh0ZW5kcyBvYmplY3Q+KHBhdGg6IFByb3BlcnR5UGF0aCwgbmV3VmFsdWU6IFNldERhdGEpID0+IChvcmlnaW46IFQpID0+IFQgPSAocGF0aDogYW55LCB2YWx1ZSkgPT4gKG9yaWdpbikgPT4ge1xyXG4gIGxldCBuZXdEYXRhID0gY2xvbmVEZWVwKG9yaWdpbilcclxuICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcclxuICAgIGNvbnN0IG9sZERhdGEgPSBnZXQob3JpZ2luLCBwYXRoKVxyXG4gICAgc2V0KG5ld0RhdGEsIHBhdGgsIHZhbHVlKG9sZERhdGEpKVxyXG4gIH0gZWxzZSB7XHJcbiAgICBzZXQobmV3RGF0YSwgcGF0aCwgdmFsdWUpXHJcbiAgfVxyXG4gIHJldHVybiBuZXdEYXRhXHJcbn1cclxuXHJcbmNvbnN0IGN1c3RvbWl6ZXIgPSAob2JqVmFsdWU6IGFueSwgc3JjVmFsdWU6IGFueSkgPT4ge1xyXG4gIGlmIChpc0FycmF5KHNyY1ZhbHVlKSkge1xyXG4gICAgcmV0dXJuIHNyY1ZhbHVlXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZnBNZXJnZTogPFRPYmplY3QsIFRTb3VyY2UxPihcclxuICAgIG9yaWdpbjogVE9iamVjdCxcclxuICAgIG5ld1ZhbHVlOiBUU291cmNlMSxcclxuKSA9PiBUT2JqZWN0ICYgVFNvdXJjZTEgPSAob3JpZ2luLCBuZXdWYWx1ZSkgPT4ge1xyXG4gIHJldHVybiBtZXJnZVdpdGgoe30sIG9yaWdpbiwgbmV3VmFsdWUsIGN1c3RvbWl6ZXIpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmcE1lcmdlUHJlOiA8UHJlLCBOZXcgZXh0ZW5kcyBQYXJ0aWFsPFByZT4+KG5ld1ZhbHVlOiBOZXcpID0+IChvcmlnaW46IFByZSkgPT4gUHJlICYgTmV3ID0gKG5ld1ZhbHVlKSA9PiAocHJlKSA9PiBtZXJnZVdpdGgoe30sIHByZSwgbmV3VmFsdWUsIGN1c3RvbWl6ZXIpXHJcblxyXG5leHBvcnQgY29uc3QgZnBSZW1vdmUgPSAoYXJyOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcclxuICBpZiAoIWFycikgcmV0dXJuIFtdXHJcbiAgcmV0dXJuIFtcclxuICAgIC4uLmFycj8uc2xpY2UoMCwgaW5kZXgpLFxyXG4gICAgLi4uYXJyPy5zbGljZShpbmRleCArIDEsIGFycj8ubGVuZ3RoKSxcclxuICBdXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkZWFsTnVtYmVyWmVybyA9IChsZW5ndGg6IG51bWJlcikgPT4gKG51bTogbnVtYmVyKSA9PiB7XHJcbiAgY29uc3QgX3MgPSBgJHtudW0gPz8gJyd9YFxyXG4gIHJldHVybiBBcnJheShsZW5ndGggLSBfcy5sZW5ndGgpLmZpbGwoJzAnKS5qb2luKCcnKSArIF9zXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmb3JtYXREYXRlID0gKGRhdGU6IGFueSA9ICcnLCBmb3JtYXRTdHJpbmcgPSAnWVlZWS1NTS1kZCBISDptbTpzcycpID0+IHtcclxuICBpZiAoIWRhdGUpIHtcclxuICAgIHJldHVybiAnJ1xyXG4gIH1cclxuICBpZiAoaXNTdHJpbmcoZGF0ZSkpIHtcclxuICAgIHJldHVybiBmb3JtYXQobmV3IERhdGUoZGF0ZSksIGZvcm1hdFN0cmluZywge1xyXG4gICAgICB1c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zOiB0cnVlLFxyXG4gICAgICB1c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnM6IHRydWUsXHJcbiAgICB9KVxyXG4gIH1cclxuICByZXR1cm4gKGlzTmFOKGRhdGUpKSA/ICcnIDogZm9ybWF0KGRhdGUsIGZvcm1hdFN0cmluZywge1xyXG4gICAgdXNlQWRkaXRpb25hbERheU9mWWVhclRva2VuczogdHJ1ZSxcclxuICAgIHVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2VuczogdHJ1ZSxcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGVhbE5vbkJvb2xlYW5Qcm9wcyA9ICh2YWx1ZTogYW55KSA9PiAhIXZhbHVlID8gMSA6IDBcclxuXHJcbmV4cG9ydCBjb25zdCBmb3JtYXRNb25leSA9IChhbW91bnQ6IGFueSwgZGVjaW1hbENvdW50ID0gMiwgZGVjaW1hbCA9IFwiLlwiLCB0aG91c2FuZHMgPSBcIixcIikgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBkZWNpbWFsQ291bnQgPSBNYXRoLmFicyhkZWNpbWFsQ291bnQpXHJcbiAgICBkZWNpbWFsQ291bnQgPSBpc05hTihkZWNpbWFsQ291bnQpID8gMiA6IGRlY2ltYWxDb3VudFxyXG5cclxuICAgIGNvbnN0IG5lZ2F0aXZlU2lnbiA9IGFtb3VudCA8IDAgPyBcIi1cIiA6IFwiXCJcclxuXHJcbiAgICBsZXQgaSA9IHBhcnNlSW50KGFtb3VudCA9IE1hdGguYWJzKE51bWJlcihhbW91bnQpIHx8IDApLnRvRml4ZWQoZGVjaW1hbENvdW50KSkudG9TdHJpbmcoKVxyXG4gICAgbGV0IGogPSAoaS5sZW5ndGggPiAzKSA/IGkubGVuZ3RoICUgMyA6IDBcclxuXHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICByZXR1cm4gbmVnYXRpdmVTaWduICsgKGogPyBpLnN1YnN0cigwLCBqKSArIHRob3VzYW5kcyA6ICcnKSArIGkuc3Vic3RyKGopLnJlcGxhY2UoLyhcXGR7M30pKD89XFxkKS9nLCBcIiQxXCIgKyB0aG91c2FuZHMpICsgKGRlY2ltYWxDb3VudCA/IGRlY2ltYWwgKyBNYXRoLmFicyhhbW91bnQgLSBpKS50b0ZpeGVkKGRlY2ltYWxDb3VudCkuc2xpY2UoMikgOiBcIlwiKVxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGVhbE1vbmV5ID0gKGFtb3VudDogYW55LCBwcmUgPSAnJykgPT4gYCR7cHJlfSQgJHtmb3JtYXRNb25leShhbW91bnQpfWBcclxuXHJcbmV4cG9ydCBjb25zdCBkZWFsTWF5YmVOdW1iZXIgPSAobnVtOiBNYXliZTxudW1iZXI+IHwgdW5kZWZpbmVkKSA9PiBudW0gPz8gMFxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGdldE9iamVjdFVSTCxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRlYWxVcmxRdWVyeSA9IChxdWVyeU9iajogYW55KSA9PiB7XHJcbiAgcmV0dXJuIGA/JHtPYmplY3Qua2V5cyhxdWVyeU9iaikubWFwKHZhbHVlID0+IGAke3ZhbHVlfT0ke3F1ZXJ5T2JqW3ZhbHVlXX1gKS5qb2luKCcmJyl9YFxyXG59XHJcblxyXG5cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1ib29zdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjcm9zcy1mZXRjaC9wb2x5ZmlsbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkYXRlLWZucy9mb3JtYXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaC9zZXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9jb25maWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=