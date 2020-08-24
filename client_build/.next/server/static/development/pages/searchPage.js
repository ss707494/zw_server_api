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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/searchPage/index.tsx":
/*!************************************!*\
  !*** ./pages/searchPage/index.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_view_home_searchPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/view/home/searchPage */ "./utils/view/home/searchPage.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_utils_view_home_searchPage__WEBPACK_IMPORTED_MODULE_0__["SearchPage"]);

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

/***/ "./utils/commonModel/dialog.ts":
/*!*************************************!*\
  !*** ./utils/commonModel/dialog.ts ***!
  \*************************************/
/*! exports provided: dialogModelFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dialogModelFactory", function() { return dialogModelFactory; });
/* harmony import */ var _ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ModelAction/modelUtil */ "./utils/ModelAction/modelUtil.ts");
/* harmony import */ var _tools_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tools/utils */ "./utils/tools/utils.ts");


const dialogModelFactory = (name, initData) => Object(_ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_0__["modelFactory"])(`${name}_dialogModelFactory`, {
  dialogData: initData,
  open: false,
  isEdit: -1,
  openResolve: () => {}
}, {
  openClick: (value, {
    setData
  }) => {
    return new Promise(resolve => {
      setData(preData => Object(_tools_utils__WEBPACK_IMPORTED_MODULE_1__["fpMerge"])(preData, {
        open: true,
        dialogData: value,
        isEdit: -1,
        openResolve: resolve
      }));
    });
  },
  openEditClick: (value, {
    setData
  }) => setData(pre => Object(_tools_utils__WEBPACK_IMPORTED_MODULE_1__["fpMerge"])(pre, {
    open: true,
    dialogData: value.data,
    isEdit: value.index
  })),
  onClose: (value, {
    data,
    setData
  }) => {
    data.openResolve(false);
    setData(pre => Object(_tools_utils__WEBPACK_IMPORTED_MODULE_1__["fpMerge"])(Object(_tools_utils__WEBPACK_IMPORTED_MODULE_1__["fpSet"])(pre, 'dialogData', {}), {
      dialogData: initData,
      open: false
    }));
  },
  setdialog: (value, {
    setData
  }) => setData(data => Object(_tools_utils__WEBPACK_IMPORTED_MODULE_1__["fpMerge"])(data, {
    dialogData: value
  }))
});

/***/ }),

/***/ "./utils/components/BScroll/BScroller.tsx":
/*!************************************************!*\
  !*** ./utils/components/BScroll/BScroller.tsx ***!
  \************************************************/
/*! exports provided: bScrollModel, BScroller */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bScrollModel", function() { return bScrollModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BScroller", function() { return BScroller; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var better_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! better-scroll */ "better-scroll");
/* harmony import */ var better_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(better_scroll__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ModelAction/useStore */ "./utils/ModelAction/useStore.ts");
/* harmony import */ var _tools_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../tools/utils */ "./utils/tools/utils.ts");
/* harmony import */ var _ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ModelAction/modelUtil */ "./utils/ModelAction/modelUtil.ts");
var _jsxFileName = "D:\\code\\zw\\zw_client_web\\utils\\components\\BScroll\\BScroller.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const bScrollModel = Object(_ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_5__["modelFactory"])('bScrollModel', {
  scroll: {}
}, {
  setScroll: (value, option) => {
    option.setData(Object(_tools_utils__WEBPACK_IMPORTED_MODULE_4__["fpMergePre"])({
      scroll: value
    }));
  }
});
const BScroller = ({
  isX,
  children,
  boxHeight,
  boxWidth
}) => {
  const {
    state: bsState,
    actions: bsActions
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_3__["useStoreModel"])(bScrollModel);
  const scrollRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    // @ts-ignore
    const scroll = new better_scroll__WEBPACK_IMPORTED_MODULE_2___default.a(scrollRef.current, _objectSpread(_objectSpread({
      click: true,
      scrollY: true,
      taps: true
    }, isX ? {
      scrollX: true,
      scrollY: false
    } : {}), {}, {
      preventDefaultException: {
        tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/,
        className: /(^|\s).*(MuiTextField-root|MuiSelect-select).*(\s|$)/
      }
    }));
    bsActions.setScroll(scroll);
    return () => {
      scroll.stop();
      scroll.destroy();
    };
  }, []);
  return __jsx("div", {
    ref: scrollRef,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3040993115", [boxHeight || '100vh', isX && boxWidth ? `${boxWidth}` : 'auto']]]) + " " + 'box',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: isX ? {
      display: 'inline-block'
    } : {},
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3040993115", [boxHeight || '100vh', isX && boxWidth ? `${boxWidth}` : 'auto']]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3040993115",
    dynamic: [boxHeight || '100vh', isX && boxWidth ? `${boxWidth}` : 'auto'],
    __self: undefined
  }, `.box.__jsx-style-dynamic-selector{height:${boxHeight || '100vh'};width:${isX && boxWidth ? `${boxWidth}` : 'auto'};overflow:hidden;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxjb2RlXFx6d1xcendfY2xpZW50X3dlYlxcdXRpbHNcXGNvbXBvbmVudHNcXEJTY3JvbGxcXEJTY3JvbGxlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0RvQixBQUV1QyxvQ0FDRCxtQ0FDbkIsZ0JBQUMiLCJmaWxlIjoiRDpcXGNvZGVcXHp3XFx6d19jbGllbnRfd2ViXFx1dGlsc1xcY29tcG9uZW50c1xcQlNjcm9sbFxcQlNjcm9sbGVyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlUmVmfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEJldHRlclNjcm9sbCBmcm9tICdiZXR0ZXItc2Nyb2xsJ1xyXG5pbXBvcnQge3VzZVN0b3JlTW9kZWx9IGZyb20gJy4uLy4uL01vZGVsQWN0aW9uL3VzZVN0b3JlJ1xyXG5pbXBvcnQge2ZwTWVyZ2VQcmV9IGZyb20gJy4uLy4uL3Rvb2xzL3V0aWxzJ1xyXG5pbXBvcnQge21vZGVsRmFjdG9yeX0gZnJvbSAnLi4vLi4vTW9kZWxBY3Rpb24vbW9kZWxVdGlsJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGJTY3JvbGxNb2RlbCA9IG1vZGVsRmFjdG9yeSgnYlNjcm9sbE1vZGVsJywge1xyXG4gIHNjcm9sbDoge30gYXMgYW55LFxyXG59LCB7XHJcbiAgc2V0U2Nyb2xsOiAodmFsdWUsIG9wdGlvbikgPT4ge1xyXG4gICAgb3B0aW9uLnNldERhdGEoZnBNZXJnZVByZSh7XHJcbiAgICAgIHNjcm9sbDogdmFsdWUsXHJcbiAgICB9KSlcclxuICB9LFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IEJTY3JvbGxlciA9ICh7aXNYLCBjaGlsZHJlbiwgYm94SGVpZ2h0LCBib3hXaWR0aH06IHsgY2hpbGRyZW4/OiBhbnksIGJveEhlaWdodD86IGFueSwgYm94V2lkdGg/OiBhbnksIGlzWD86IGJvb2xlYW4gfSkgPT4ge1xyXG4gIGNvbnN0IHtzdGF0ZTogYnNTdGF0ZSwgYWN0aW9uczogYnNBY3Rpb25zfSA9IHVzZVN0b3JlTW9kZWwoYlNjcm9sbE1vZGVsKVxyXG4gIGNvbnN0IHNjcm9sbFJlZiA9IHVzZVJlZihudWxsKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBjb25zdCBzY3JvbGwgPSBuZXcgQmV0dGVyU2Nyb2xsKHNjcm9sbFJlZi5jdXJyZW50LCB7XHJcbiAgICAgIGNsaWNrOiB0cnVlLFxyXG4gICAgICBzY3JvbGxZOiB0cnVlLFxyXG4gICAgICB0YXBzOiB0cnVlLFxyXG4gICAgICAuLi4oaXNYID8ge1xyXG4gICAgICAgIHNjcm9sbFg6IHRydWUsXHJcbiAgICAgICAgc2Nyb2xsWTogZmFsc2UsXHJcbiAgICAgIH0gOiB7fSksXHJcbiAgICAgIHByZXZlbnREZWZhdWx0RXhjZXB0aW9uOiB7XHJcbiAgICAgICAgdGFnTmFtZTogL14oSU5QVVR8VEVYVEFSRUF8QlVUVE9OfFNFTEVDVCkkLyxcclxuICAgICAgICBjbGFzc05hbWU6IC8oXnxcXHMpLiooTXVpVGV4dEZpZWxkLXJvb3R8TXVpU2VsZWN0LXNlbGVjdCkuKihcXHN8JCkvLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgIGJzQWN0aW9ucy5zZXRTY3JvbGwoc2Nyb2xsKVxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgc2Nyb2xsLnN0b3AoKVxyXG4gICAgICBzY3JvbGwuZGVzdHJveSgpXHJcbiAgICB9XHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICAgIHJlZj17c2Nyb2xsUmVmfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXsnYm94J30+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17aXNYID8ge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgICAgICAgICB9IDoge319XHJcbiAgICAgICAgPntjaGlsZHJlbn08L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAuYm94IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAke2JveEhlaWdodCB8fCAnMTAwdmgnfTtcclxuICAgICAgICAgICAgd2lkdGg6ICR7KGlzWCAmJiBib3hXaWR0aCkgPyBgJHtib3hXaWR0aH1gIDogJ2F1dG8nIH07XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl19 */
/*@ sourceURL=D:\\code\\zw\\zw_client_web\\utils\\components\\BScroll\\BScroller.tsx */`));
};

/***/ }),

/***/ "./utils/components/Box/Box.tsx":
/*!**************************************!*\
  !*** ./utils/components/Box/Box.tsx ***!
  \**************************************/
/*! exports provided: Box, Space */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return Box; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Space", function() { return Space; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\code\\zw\\zw_client_web\\utils\\components\\Box\\Box.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const Box = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Box",
  componentId: "sc-1w0dei9-0"
})(["padding:0 20px;"]);
const Space = ({
  h,
  w,
  c
}) => {
  return __jsx("span", {
    style: _objectSpread({
      background: c || 'auto',
      display: 'inline-block',
      width: w !== null && w !== void 0 ? w : '100%',
      height: h !== null && h !== void 0 ? h : '100%'
    }, !w ? {
      display: 'block'
    } : {}),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 10
    }
  });
};

/***/ }),

/***/ "./utils/components/ButtonLoad/ButtonLoad.tsx":
/*!****************************************************!*\
  !*** ./utils/components/ButtonLoad/ButtonLoad.tsx ***!
  \****************************************************/
/*! exports provided: ButtonLoad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonLoad", function() { return ButtonLoad; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\code\\zw\\zw_client_web\\utils\\components\\ButtonLoad\\ButtonLoad.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const ButtonLoad = props => {
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Button"], _extends({}, props, {
    disabled: !!props.loading || props.disabled,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 10
    }
  }), props.children, !!props.loading && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["CircularProgress"], {
    color: "inherit",
    size: 26,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 25
    }
  }));
};

/***/ }),

/***/ "./utils/components/FootBar/FootBar.tsx":
/*!**********************************************!*\
  !*** ./utils/components/FootBar/FootBar.tsx ***!
  \**********************************************/
/*! exports provided: FootBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FootBar", function() { return FootBar; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_Storefront__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Storefront */ "@material-ui/icons/Storefront");
/* harmony import */ var _material_ui_icons_Storefront__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Storefront__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_AccountBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/AccountBox */ "@material-ui/icons/AccountBox");
/* harmony import */ var _material_ui_icons_AccountBox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountBox__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Redeem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Redeem */ "@material-ui/icons/Redeem");
/* harmony import */ var _material_ui_icons_Redeem__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Redeem__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/People */ "@material-ui/icons/People");
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/colors/red */ "@material-ui/core/colors/red");
/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ss_common_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ss_common/enum */ "./utils/ss_common/enum.ts");
/* harmony import */ var _style_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../style/common */ "./utils/style/common.ts");
var _jsxFileName = "D:\\code\\zw\\zw_client_web\\utils\\components\\FootBar\\FootBar.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









const FootBar = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();

  const isAct = path => router.pathname.includes(path);

  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4279962377", [_style_common__WEBPACK_IMPORTED_MODULE_9__["mpStyle"].red, _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_7___default.a[600]]]]) + " " + 'FootBar',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, [['逛店', __jsx(_material_ui_icons_Storefront__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 18
    }
  }), `/${_ss_common_enum__WEBPACK_IMPORTED_MODULE_8__["AppFootBar"].home}`], ['拼团', __jsx(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 18
    }
  }), `/${_ss_common_enum__WEBPACK_IMPORTED_MODULE_8__["AppFootBar"].group}`], ['达人区', __jsx(_material_ui_icons_Redeem__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 19
    }
  }), `/${_ss_common_enum__WEBPACK_IMPORTED_MODULE_8__["AppFootBar"].card}`], // ['购物车', <ShoppingCartIcon/>, `/${AppFootBar.cart}`, stateShopCart.dealProductNumber(stateShopCart)],
  ['我', __jsx(_material_ui_icons_AccountBox__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }), `/${_ss_common_enum__WEBPACK_IMPORTED_MODULE_8__["AppFootBar"].me}`]].map(v => __jsx("section", {
    key: `FootBar_${v[0]}`,
    onClick: () => isAct(v[2]) ? '' : router.push(v[2]),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4279962377", [_style_common__WEBPACK_IMPORTED_MODULE_9__["mpStyle"].red, _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_7___default.a[600]]]]) + " " + ((isAct(v[2]) ? 'act' : '') || ""),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, v[1], __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4279962377", [_style_common__WEBPACK_IMPORTED_MODULE_9__["mpStyle"].red, _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_7___default.a[600]]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 15
    }
  }, v[0]), ~~v[3] > 0 && __jsx("aside", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4279962377", [_style_common__WEBPACK_IMPORTED_MODULE_9__["mpStyle"].red, _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_7___default.a[600]]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 30
    }
  }, v[3]))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4279962377",
    dynamic: [_style_common__WEBPACK_IMPORTED_MODULE_9__["mpStyle"].red, _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_7___default.a[600]],
    __self: undefined
  }, `.FootBar.__jsx-style-dynamic-selector{position:fixed;bottom:0;height:14.0625vw;width:100vw;box-shadow:0 0.9375vw 1.25vw 0 rgba(0,0,0,0.14),0 0.9375vw 0.9375vw -0.625vw rgba(0,0,0,0.12),0 1px 2.5vw 0 rgba(0,0,0,0.2);background:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.FootBar.__jsx-style-dynamic-selector>section.__jsx-style-dynamic-selector{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;position:relative;}.FootBar.__jsx-style-dynamic-selector>section.__jsx-style-dynamic-selector>aside.__jsx-style-dynamic-selector{position:absolute;top:0;right:20%;border-radius:50%;width:5vw;height:5vw;background:${_style_common__WEBPACK_IMPORTED_MODULE_9__["mpStyle"].red};display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#fff;}.act.__jsx-style-dynamic-selector{color:${_material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_7___default.a[600]};}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxjb2RlXFx6d1xcendfY2xpZW50X3dlYlxcdXRpbHNcXGNvbXBvbmVudHNcXEZvb3RCYXJcXEZvb3RCYXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDb0IsQUFFa0IsQUFTRCxBQU9RLEFBYWEsZUE1QjFCLEdBZ0JDLE1BZk8sQUFnQkgsVUFDUSxDQVVjLE1BMUJ4QixXQWlCRSxDQWhCeUgsU0FpQnhILFNBWEEsRUFZNkIsd0NBQzNCLGdDQVpJLGdDQU5MLFVBbUJPLE1BbEJWLDZDQU1ZLDZCQUxOLGFBa0JRLHlEQVpILHVCQU5KLG1CQW1CTCxXQUFDLHlCQVpJLGtCQUFDIiwiZmlsZSI6IkQ6XFxjb2RlXFx6d1xcendfY2xpZW50X3dlYlxcdXRpbHNcXGNvbXBvbmVudHNcXEZvb3RCYXJcXEZvb3RCYXIudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU3RvcmVmcm9udEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1N0b3JlZnJvbnQnXHJcbmltcG9ydCBBY2NvdW50Qm94SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQWNjb3VudEJveCdcclxuaW1wb3J0IFJlZGVlbUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1JlZGVlbSdcclxuaW1wb3J0IFBlb3BsZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1Blb3BsZSdcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgcmVkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9yZWQnXHJcbmltcG9ydCB7QXBwRm9vdEJhcn0gZnJvbSAnLi4vLi4vc3NfY29tbW9uL2VudW0nXHJcbmltcG9ydCB7bXBTdHlsZX0gZnJvbSAnLi4vLi4vc3R5bGUvY29tbW9uJ1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvb3RCYXIgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgY29uc3QgaXNBY3QgPSAocGF0aDogYW55KSA9PiByb3V0ZXIucGF0aG5hbWUuaW5jbHVkZXMocGF0aCBhcyBzdHJpbmcpXHJcbiAgcmV0dXJuIChcclxuICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXsnRm9vdEJhcid9PlxyXG4gICAgICAgIHtbXHJcbiAgICAgICAgICBbJ+mAm+W6lycsIDxTdG9yZWZyb250SWNvbi8+LCBgLyR7QXBwRm9vdEJhci5ob21lfWBdLFxyXG4gICAgICAgICAgWyfmi7zlm6InLCA8UGVvcGxlSWNvbi8+LCBgLyR7QXBwRm9vdEJhci5ncm91cH1gXSxcclxuICAgICAgICAgIFsn6L6+5Lq65Yy6JywgPFJlZGVlbUljb24vPiwgYC8ke0FwcEZvb3RCYXIuY2FyZH1gXSxcclxuICAgICAgICAgIC8vIFsn6LSt54mp6L2mJywgPFNob3BwaW5nQ2FydEljb24vPiwgYC8ke0FwcEZvb3RCYXIuY2FydH1gLCBzdGF0ZVNob3BDYXJ0LmRlYWxQcm9kdWN0TnVtYmVyKHN0YXRlU2hvcENhcnQpXSxcclxuICAgICAgICAgIFsn5oiRJywgPEFjY291bnRCb3hJY29uLz4sIGAvJHtBcHBGb290QmFyLm1lfWBdLFxyXG4gICAgICAgIF0ubWFwKHYgPT4gKFxyXG4gICAgICAgICAgICA8c2VjdGlvblxyXG4gICAgICAgICAgICAgICAga2V5PXtgRm9vdEJhcl8ke3ZbMF19YH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aXNBY3QodlsyXSkgPyAnYWN0JyA6ICcnfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaXNBY3QodlsyXSkgPyAnJyA6IHJvdXRlci5wdXNoKHZbMl0gYXMgc3RyaW5nKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHt2WzFdfVxyXG4gICAgICAgICAgICAgIDxzcGFuPnt2WzBdfTwvc3Bhbj5cclxuICAgICAgICAgICAgICB7fn52WzNdID4gMCAmJiA8YXNpZGU+e3ZbM119PC9hc2lkZT59XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICApKX1cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAuRm9vdEJhciB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAzcHggNHB4IDAgcmdiYSgwLDAsMCwwLjE0KSwgMCAzcHggM3B4IC0ycHggcmdiYSgwLDAsMCwwLjEyKSwgMCAxcHggOHB4IDAgcmdiYSgwLDAsMCwwLjIwKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgPiBzZWN0aW9uIHtcclxuICAgICAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgID4gYXNpZGUge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDIwJTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHttcFN0eWxlLnJlZH07XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYWN0IHtcclxuICAgICAgICAgICAgY29sb3I6ICR7cmVkWzYwMF19O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdfQ== */
/*@ sourceURL=D:\\code\\zw\\zw_client_web\\utils\\components\\FootBar\\FootBar.tsx */`));
};

/***/ }),

/***/ "./utils/components/HeaderTitle/HeaderTitle.tsx":
/*!******************************************************!*\
  !*** ./utils/components/HeaderTitle/HeaderTitle.tsx ***!
  \******************************************************/
/*! exports provided: HeaderTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderTitle", function() { return HeaderTitle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_ArrowBackIos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/ArrowBackIos */ "@material-ui/icons/ArrowBackIos");
/* harmony import */ var _material_ui_icons_ArrowBackIos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowBackIos__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tools_dealKey__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../tools/dealKey */ "./utils/tools/dealKey.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ShoppingCartIconButton_ShoppingCartIconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ShoppingCartIconButton/ShoppingCartIconButton */ "./utils/components/ShoppingCartIconButton/ShoppingCartIconButton.tsx");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons */ "@material-ui/icons");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "D:\\code\\zw\\zw_client_web\\utils\\components\\HeaderTitle\\HeaderTitle.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const Contain = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"]).withConfig({
  displayName: "HeaderTitle__Contain",
  componentId: "zaejo2-0"
})(["display:grid;grid-template-columns:96px 1fr 96px;justify-items:center;height:60px;align-items:center;"]);
const LeftIconButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["IconButton"]).withConfig({
  displayName: "HeaderTitle__LeftIconButton",
  componentId: "zaejo2-1"
})(["justify-self:start;"]);
const Action = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "HeaderTitle__Action",
  componentId: "zaejo2-2"
})(["justify-self:end;display:flex;"]);
const HeaderTitle = ({
  title = '',
  backCall = () => {},
  showCart = false,
  LeftIcon = _material_ui_icons_ArrowBackIos__WEBPACK_IMPORTED_MODULE_2___default.a,
  hideLeft = false,
  showSearch = false
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  return __jsx(Contain, {
    boxShadow: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 10
    }
  }, __jsx(LeftIconButton, {
    style: hideLeft && {
      visibility: 'hidden'
    } || {},
    onClick: () => {
      if (!(backCall && backCall())) {
        router.back();
      }
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, __jsx(LeftIcon, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  })), __jsx("main", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_4__["ls"])(title)), __jsx(Action, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, showSearch && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["IconButton"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 22
    }
  }, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_7__["Search"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  })), showCart && __jsx(_ShoppingCartIconButton_ShoppingCartIconButton__WEBPACK_IMPORTED_MODULE_6__["ShoppingCartIconButton"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 20
    }
  })));
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

/***/ "./utils/components/NoAuth/NoAuth.tsx":
/*!********************************************!*\
  !*** ./utils/components/NoAuth/NoAuth.tsx ***!
  \********************************************/
/*! exports provided: dealNoAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dealNoAuth", function() { return dealNoAuth; });
/* harmony import */ var _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ModelAction/useStore */ "./utils/ModelAction/useStore.ts");
/* harmony import */ var _view_me_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../view/me/model */ "./utils/view/me/model.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _RegisterHeader_RegisterHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../RegisterHeader/RegisterHeader */ "./utils/components/RegisterHeader/RegisterHeader.tsx");
/* harmony import */ var _tools_dealKey__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../tools/dealKey */ "./utils/tools/dealKey.ts");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _tools_token__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../tools/token */ "./utils/tools/token.ts");
var _jsxFileName = "D:\\code\\zw\\zw_client_web\\utils\\components\\NoAuth\\NoAuth.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








const Empty = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div.withConfig({
  displayName: "NoAuth__Empty",
  componentId: "sltu9p-0"
})(["padding:20px;> main{margin-top:20vh;display:flex;flex-direction:column;align-items:center;> span{margin-bottom:30px;}}"]);
const dealNoAuth = others => {
  const {
    state: stateMe,
    actions: actionsMe
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_0__["useStoreModel"])(_view_me_model__WEBPACK_IMPORTED_MODULE_1__["meModel"]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (!stateMe.user.id) {
      actionsMe.getLoginUser();
    }
  }, []);
  return !stateMe.user.id || !Object(_tools_token__WEBPACK_IMPORTED_MODULE_7__["getToken"])() ? __jsx(Empty, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx(_RegisterHeader_RegisterHeader__WEBPACK_IMPORTED_MODULE_3__["RegisterHeader"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }), __jsx("main", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_4__["ls"])('您未登录,请先登录')), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    fullWidth: true,
    variant: 'contained',
    color: 'secondary',
    onClick: actionsMe.toLogin,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_4__["ls"])('登录')))) : others;
};

/***/ }),

/***/ "./utils/components/ProductItem/ProductItem.tsx":
/*!******************************************************!*\
  !*** ./utils/components/ProductItem/ProductItem.tsx ***!
  \******************************************************/
/*! exports provided: productModel, ProductPrice, ProductItem, ProductItemOneRow, GroupProductItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productModel", function() { return productModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPrice", function() { return ProductPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductItem", function() { return ProductItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductItemOneRow", function() { return ProductItemOneRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupProductItem", function() { return GroupProductItem; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_icons_StarRounded__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/StarRounded */ "@material-ui/icons/StarRounded");
/* harmony import */ var _material_ui_icons_StarRounded__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_StarRounded__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_StarBorderRounded__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/StarBorderRounded */ "@material-ui/icons/StarBorderRounded");
/* harmony import */ var _material_ui_icons_StarBorderRounded__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_StarBorderRounded__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/AddCircleOutline */ "@material-ui/icons/AddCircleOutline");
/* harmony import */ var _material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/ShoppingCart */ "@material-ui/icons/ShoppingCart");
/* harmony import */ var _material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tools_img__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../tools/img */ "./utils/tools/img.ts");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tools_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../tools/utils */ "./utils/tools/utils.ts");
/* harmony import */ var _style_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../style/common */ "./utils/style/common.ts");
/* harmony import */ var _ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ModelAction/modelUtil */ "./utils/ModelAction/modelUtil.ts");
/* harmony import */ var _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ModelAction/useStore */ "./utils/ModelAction/useStore.ts");
/* harmony import */ var _view_me_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../view/me/model */ "./utils/view/me/model.ts");
/* harmony import */ var _graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../graphqlTypes/doc */ "./utils/graphqlTypes/doc/index.ts");
/* harmony import */ var _Message_Message__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Message/Message */ "./utils/components/Message/Message.tsx");
/* harmony import */ var _tools_dealKey__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../tools/dealKey */ "./utils/tools/dealKey.ts");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/colors */ "@material-ui/core/colors");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _view_cart__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../view/cart */ "./utils/view/cart/index.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _UpdateShopCart__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./UpdateShopCart */ "./utils/components/ProductItem/UpdateShopCart.tsx");
/* harmony import */ var _Box_Box__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../Box/Box */ "./utils/components/Box/Box.tsx");
var _jsxFileName = "D:\\code\\zw\\zw_client_web\\utils\\components\\ProductItem\\ProductItem.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






















const productModel = Object(_ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_10__["modelFactory"])('productModel', {}, {
  updateNumShopCart: async (value, option) => {
    return await option.mutate(_graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_13__["doc"].updateNumShopCart, _objectSpread({
      shopCart: value
    }, value.number ? {
      updateNum: value.number
    } : {}));
  },
  updateShopCart: async (value, option) => {
    return await option.mutate(_graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_13__["doc"].updateShopCart, {
      shopCart: value
    });
  }
});
const Box = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Card"]).withConfig({
  displayName: "ProductItem__Box",
  componentId: "sc-1cef71f-0"
})(["padding:10px 10px 0;> header{width:100%;height:40vw;> img{border-radius:8px;width:100%;height:40vw;}}> main{margin-top:10px;}> footer{margin-top:4px;display:flex;align-items:center;> main{flex-grow:1;}> .MuiButtonBase-root{padding:5px;}}"]);
const ProductPrice = ({
  product,
  priceOutTip
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx("aside", {
    style: {
      display: 'inline-block',
      fontSize: '12px',
      textDecoration: 'line-through',
      flexShrink: 0
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 5
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_8__["dealMoney"])(product === null || product === void 0 ? void 0 : product.priceMarket)), __jsx("main", {
    style: {
      display: 'inline-block',
      fontSize: '14px',
      marginLeft: '6px',
      color: _style_common__WEBPACK_IMPORTED_MODULE_9__["mpStyle"].red,
      flexShrink: 0
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 5
    }
  }, priceOutTip !== null && priceOutTip !== void 0 ? priceOutTip : '', Object(_tools_utils__WEBPACK_IMPORTED_MODULE_8__["dealMoney"])(product === null || product === void 0 ? void 0 : product.priceOut)));
};
const ProductItem = ({
  product
}) => {
  var _product$img, _product$img$, _stateMe$user;

  const {
    actions: actionsUpdateShopCartModel
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_11__["useStoreModel"])(_UpdateShopCart__WEBPACK_IMPORTED_MODULE_19__["updateShopCartModel"]);
  const {
    actions: actionsShopCart
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_11__["useStoreModel"])(_view_cart__WEBPACK_IMPORTED_MODULE_17__["shopCartModel"]);
  const {
    state: stateMe,
    actions: actionsMe
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_11__["useStoreModel"])(_view_me_model__WEBPACK_IMPORTED_MODULE_12__["meModel"]);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(() => {
    if (!stateMe.user.id) {
      actionsMe.getLoginUser();
    }
  }, []);
  const {
    actions: actionsPM
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_11__["useStoreModel"])(productModel);
  return __jsx(Box, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 10
    }
  }, __jsx("header", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: Object(_tools_img__WEBPACK_IMPORTED_MODULE_6__["dealImgUrl"])(product === null || product === void 0 ? void 0 : (_product$img = product.img) === null || _product$img === void 0 ? void 0 : (_product$img$ = _product$img[0]) === null || _product$img$ === void 0 ? void 0 : _product$img$.url),
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  })), __jsx("main", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 5
    }
  }, product.name, product.weight, product.unit), __jsx("footer", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 5
    }
  }, __jsx(ProductPrice, {
    product: product,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }), ((_stateMe$user = stateMe.user) === null || _stateMe$user === void 0 ? void 0 : _stateMe$user.id) && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["IconButton"], {
    onClick: async () => {
      const res = await actionsUpdateShopCartModel.openClick();

      if ((res === null || res === void 0 ? void 0 : res.num) > 0) {
        var _await$actionsPM$upda, _await$actionsPM$upda2;

        if ((_await$actionsPM$upda = await actionsPM.updateNumShopCart({
          product,
          number: ~~(res === null || res === void 0 ? void 0 : res.num)
        })) === null || _await$actionsPM$upda === void 0 ? void 0 : (_await$actionsPM$upda2 = _await$actionsPM$upda.updateNumShopCart) === null || _await$actionsPM$upda2 === void 0 ? void 0 : _await$actionsPM$upda2.id) {
          Object(_Message_Message__WEBPACK_IMPORTED_MODULE_14__["showMessage"])('操作成功');
          actionsShopCart.getList();
        }
      }
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 28
    }
  }, __jsx(_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_4___default.a, {
    color: 'secondary',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }
  }))));
};
const RowBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ProductItem__RowBox",
  componentId: "sc-1cef71f-1"
})(["display:flex;padding:8px;box-shadow:", ";border-radius:8px;margin-bottom:8px;"], _style_common__WEBPACK_IMPORTED_MODULE_9__["mpStyle"].shadow['1']);
const Img = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ProductItem__Img",
  componentId: "sc-1cef71f-2"
})(["width:35vw;height:35vw;margin-right:8px;> img{width:35vw;height:35vw;}"]);
const LeftBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ProductItem__LeftBox",
  componentId: "sc-1cef71f-3"
})(["display:flex;flex-direction:column;flex-grow:1;"]);
const Tip = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ProductItem__Tip",
  componentId: "sc-1cef71f-4"
})(["margin-top:16px;border-radius:8px;padding:2px 6px;background:", ";color:white;width:max-content;"], _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_16__["grey"][800]);
const Price = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ProductItem__Price",
  componentId: "sc-1cef71f-5"
})(["margin-top:16px;flex-grow:1;"]);
const Bun = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ProductItem__Bun",
  componentId: "sc-1cef71f-6"
})(["&&&{.MuiButtonBase-root{padding:4px 0;}}"]);
const ProductItemOneRow = ({
  product,
  sumOrderTip = '',
  hideAction = false,
  showSumOrder = false
}) => {
  var _product$img2, _product$img2$, _stateMe$user2;

  const {
    actions: actionsUpdateShopCartModel
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_11__["useStoreModel"])(_UpdateShopCart__WEBPACK_IMPORTED_MODULE_19__["updateShopCartModel"]);
  const {
    state: stateMe,
    actions: actionsMe
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_11__["useStoreModel"])(_view_me_model__WEBPACK_IMPORTED_MODULE_12__["meModel"]);
  const {
    actions: actionsPM
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_11__["useStoreModel"])(productModel);
  const {
    actions: actionsShopCart
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_11__["useStoreModel"])(_view_cart__WEBPACK_IMPORTED_MODULE_17__["shopCartModel"]);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(() => {
    if (!stateMe.user.id) {
      actionsMe.getLoginUser();
    }
  }, []);
  return __jsx(RowBox, {
    key: `ProductItemOneRow_${product.id}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 10
    }
  }, __jsx(Img, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: Object(_tools_img__WEBPACK_IMPORTED_MODULE_6__["dealImgUrl"])(product === null || product === void 0 ? void 0 : (_product$img2 = product.img) === null || _product$img2 === void 0 ? void 0 : (_product$img2$ = _product$img2[0]) === null || _product$img2$ === void 0 ? void 0 : _product$img2$.url),
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 7
    }
  })), __jsx(LeftBox, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 5
    }
  }, __jsx("main", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 7
    }
  }, product.name, product.weight, product.unit), showSumOrder && __jsx(Tip, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 24
    }
  }, sumOrderTip, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('销量'), ": ", product.sumOrder), __jsx(Price, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 7
    }
  }, __jsx(ProductPrice, {
    product: product,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 9
    }
  })), !hideAction && ((_stateMe$user2 = stateMe.user) === null || _stateMe$user2 === void 0 ? void 0 : _stateMe$user2.id) && __jsx(Bun, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 43
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    fullWidth: true,
    color: 'secondary',
    variant: 'contained',
    onClick: async () => {
      const res = await actionsUpdateShopCartModel.openClick();

      if ((res === null || res === void 0 ? void 0 : res.num) > 0) {
        var _await$actionsPM$upda3, _await$actionsPM$upda4;

        if ((_await$actionsPM$upda3 = await actionsPM.updateNumShopCart({
          product,
          number: ~~(res === null || res === void 0 ? void 0 : res.num)
        })) === null || _await$actionsPM$upda3 === void 0 ? void 0 : (_await$actionsPM$upda4 = _await$actionsPM$upda3.updateNumShopCart) === null || _await$actionsPM$upda4 === void 0 ? void 0 : _await$actionsPM$upda4.id) {
          Object(_Message_Message__WEBPACK_IMPORTED_MODULE_14__["showMessage"])('操作成功');
          actionsShopCart.getList();
        }
      }
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 11
    }
  }), Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('加入购物车')))));
};
const GroupBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ProductItem__GroupBox",
  componentId: "sc-1cef71f-7"
})(["display:flex;"]);
const GroupImg = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ProductItem__GroupImg",
  componentId: "sc-1cef71f-8"
})(["width:35vw;height:35vw;margin-right:16px;> img{width:35vw;height:35vw;border-radius:8px;}"]);
const RightBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ProductItem__RightBox",
  componentId: "sc-1cef71f-9"
})(["display:flex;flex-direction:column;"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ProductItem__Title",
  componentId: "sc-1cef71f-10"
})(["font-weight:bold;display:flex;"]);
const MarketPrice = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ProductItem__MarketPrice",
  componentId: "sc-1cef71f-11"
})(["margin-top:8px;color:", ";> span{text-decoration:line-through;}"], _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_16__["grey"][700]);
const OutPrice = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ProductItem__OutPrice",
  componentId: "sc-1cef71f-12"
})(["margin-top:8px;color:", ";"], _style_common__WEBPACK_IMPORTED_MODULE_9__["mpStyle"].red);
const Star = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ProductItem__Star",
  componentId: "sc-1cef71f-13"
})(["flex-grow:1;"]);
const Action = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ProductItem__Action",
  componentId: "sc-1cef71f-14"
})([""]);
const OrderTip = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ProductItem__OrderTip",
  componentId: "sc-1cef71f-15"
})(["margin-top:16px;border-radius:8px;padding:2px 6px;background:", ";color:white;width:max-content;"], _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_16__["grey"][800]);
const GroupProductItem = ({
  product,
  groupQueue,
  sumOrderTip = '',
  showSumOrder = false
}) => {
  var _product$img3, _product$img3$;

  const {
    state: stateMe,
    actions: actionsMe
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_11__["useStoreModel"])(_view_me_model__WEBPACK_IMPORTED_MODULE_12__["meModel"]);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_18__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(() => {
    if (!stateMe.user.id) {
      actionsMe.getLoginUser();
    }
  }, []);
  return __jsx(GroupBox, {
    key: `GroupBox_${product.id}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 10
    }
  }, __jsx(GroupImg, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: Object(_tools_img__WEBPACK_IMPORTED_MODULE_6__["dealImgUrl"])(product === null || product === void 0 ? void 0 : (_product$img3 = product.img) === null || _product$img3 === void 0 ? void 0 : (_product$img3$ = _product$img3[0]) === null || _product$img3$ === void 0 ? void 0 : _product$img3$.url),
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 7
    }
  })), __jsx(RightBox, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 5
    }
  }, __jsx(Title, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 7
    }
  }, product.name, "(", product.groupRemark, "/", product.groupAmount, product.groupAmountUnitString, "/", product.groupPrecisionString, ")"), showSumOrder && __jsx(OrderTip, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 24
    }
  }, sumOrderTip, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('销量'), ": ", product.sumOrder), __jsx(MarketPrice, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('市场价'), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 9
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_8__["dealMoney"])(product.priceMarket))), __jsx(OutPrice, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('基准价格'), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 9
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_8__["dealMoney"])(product.priceOut))), __jsx(Star, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 7
    }
  }, (groupQueue === null || groupQueue === void 0 ? void 0 : groupQueue.id) && __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 28
    }
  }, __jsx(_Box_Box__WEBPACK_IMPORTED_MODULE_20__["Space"], {
    h: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 11
    }
  }), [...Array(product.groupPrecision)].map((v, i) => i).map(value => {
    var _groupQueue$sumFillAm;

    return value + 1 > ((_groupQueue$sumFillAm = groupQueue.sumFillAmount) !== null && _groupQueue$sumFillAm !== void 0 ? _groupQueue$sumFillAm : 0) ? __jsx(_material_ui_icons_StarBorderRounded__WEBPACK_IMPORTED_MODULE_2___default.a, {
      key: `clickStar${value}`,
      fontSize: 'small',
      style: {
        color: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_16__["grey"][700]
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 285,
        columnNumber: 15
      }
    }) : __jsx(_material_ui_icons_StarRounded__WEBPACK_IMPORTED_MODULE_1___default.a, {
      key: `clickStar${value}`,
      style: {
        color: '#FDD334'
      },
      fontSize: 'small',
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 289,
        columnNumber: 20
      }
    });
  }))), __jsx(Action, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    variant: 'contained',
    color: 'secondary',
    fullWidth: true,
    onClick: () => {
      router.push(`/groupProduct/[id]`, `/groupProduct/${product.id}`);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 11
    }
  }), Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('拼一个')))));
};

/***/ }),

/***/ "./utils/components/ProductItem/UpdateShopCart.tsx":
/*!*********************************************************!*\
  !*** ./utils/components/ProductItem/UpdateShopCart.tsx ***!
  \*********************************************************/
/*! exports provided: updateShopCartModel, UpdateShopCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateShopCartModel", function() { return updateShopCartModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateShopCart", function() { return UpdateShopCart; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tools_dealKey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tools/dealKey */ "./utils/tools/dealKey.ts");
/* harmony import */ var _commonModel_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../commonModel/dialog */ "./utils/commonModel/dialog.ts");
/* harmony import */ var _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ModelAction/useStore */ "./utils/ModelAction/useStore.ts");
/* harmony import */ var _ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ModelAction/modelUtil */ "./utils/ModelAction/modelUtil.ts");
/* harmony import */ var _tools_commonAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../tools/commonAction */ "./utils/tools/commonAction.ts");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "D:\\code\\zw\\zw_client_web\\utils\\components\\ProductItem\\UpdateShopCart.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








const updateShopCartModel = Object(_ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_5__["mergeTwoModel"])(Object(_commonModel_dialog__WEBPACK_IMPORTED_MODULE_3__["dialogModelFactory"])('UpdateShopCartModel', {}), Object(_ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_5__["modelFactory"])('update', {
  form: {
    num: 1
  }
}, {
  setForm: _tools_commonAction__WEBPACK_IMPORTED_MODULE_6__["setForm"]
}));
const Footer = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div.withConfig({
  displayName: "UpdateShopCart__Footer",
  componentId: "awx6sb-0"
})(["padding-top:8px;text-align:right;"]);
const UpdateShopCart = () => {
  const {
    actions: actionsUpdateShopCartModel,
    state: stateUpdateShopCartModel
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_4__["useStoreModel"])(updateShopCartModel);
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Dialog"], {
    open: stateUpdateShopCartModel.open,
    onClose: actionsUpdateShopCartModel.onClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 10
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["DialogTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_2__["ls"])('添加数量')), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["DialogContent"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["TextField"], {
    type: 'number',
    value: stateUpdateShopCartModel.form.num,
    onChange: event => actionsUpdateShopCartModel.setForm(['num', event.target.value]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }), __jsx(Footer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    variant: 'contained',
    color: 'secondary',
    onClick: () => {
      stateUpdateShopCartModel.openResolve({
        num: stateUpdateShopCartModel.form.num
      });
      actionsUpdateShopCartModel.onClose();
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_2__["ls"])('确定')))));
};

/***/ }),

/***/ "./utils/components/RegisterHeader/RegisterHeader.tsx":
/*!************************************************************!*\
  !*** ./utils/components/RegisterHeader/RegisterHeader.tsx ***!
  \************************************************************/
/*! exports provided: RegisterHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterHeader", function() { return RegisterHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tools_dealKey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tools/dealKey */ "./utils/tools/dealKey.ts");
/* harmony import */ var _style_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../style/common */ "./utils/style/common.ts");
var _jsxFileName = "D:\\code\\zw\\zw_client_web\\utils\\components\\RegisterHeader\\RegisterHeader.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Header = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "RegisterHeader__Header",
  componentId: "sc-1oxtd4z-0"
})(["margin-top:20px;display:grid;grid-template-columns:40px 1fr;grid-template-rows:30px 30px 50px;margin-bottom:40px;> img{width:32px;height:56px;grid-area:1/1/3/2;padding-right:10px;}> header{font-size:20px;align-self:end;}> footer{font-size:20px;font-weight:bold;color:", ";}> main{grid-area:3/1/4/3;font-size:24px;font-weight:bold;align-self:end;}"], _style_common__WEBPACK_IMPORTED_MODULE_3__["mpStyle"].red);
const RegisterHeader = () => {
  return __jsx(Header, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 10
    }
  }, __jsx("img", {
    src: '/img/home/logo.png',
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }), __jsx("header", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_2__["ls"])('Market')), __jsx("footer", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_2__["ls"])('Payless')), __jsx("main", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_2__["ls"])('欢迎来到马佩莱超市')));
};

/***/ }),

/***/ "./utils/components/ShoppingCartIconButton/ShoppingCartIconButton.tsx":
/*!****************************************************************************!*\
  !*** ./utils/components/ShoppingCartIconButton/ShoppingCartIconButton.tsx ***!
  \****************************************************************************/
/*! exports provided: ShoppingCartIconButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartIconButton", function() { return ShoppingCartIconButton; });
/* harmony import */ var _ss_common_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ss_common/enum */ "./utils/ss_common/enum.ts");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/ShoppingCart */ "@material-ui/icons/ShoppingCart");
/* harmony import */ var _material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ModelAction/useStore */ "./utils/ModelAction/useStore.ts");
/* harmony import */ var _view_cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../view/cart */ "./utils/view/cart/index.tsx");
var _jsxFileName = "D:\\code\\zw\\zw_client_web\\utils\\components\\ShoppingCartIconButton\\ShoppingCartIconButton.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;







const ShoppingCartIconButton = ({
  color,
  htmlColor
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  const {
    state: stateShopCart,
    actions: actionsShopCart
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_5__["useStoreModel"])(_view_cart__WEBPACK_IMPORTED_MODULE_6__["shopCartModel"]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    if (!stateShopCart.user.id) {
      actionsShopCart.getList();
    }
  }, []);
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    onClick: () => {
      router.push(`/${_ss_common_enum__WEBPACK_IMPORTED_MODULE_0__["AppFootBar"].cart}`);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 10
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
    badgeContent: stateShopCart.dealProductNumber(stateShopCart),
    color: "primary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx(_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_2___default.a, {
    color: color,
    htmlColor: htmlColor,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  })));
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

/***/ "./utils/tools/commonAction.ts":
/*!*************************************!*\
  !*** ./utils/tools/commonAction.ts ***!
  \*************************************/
/*! exports provided: setForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setForm", function() { return setForm; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./utils/tools/utils.ts");

const setForm = ([path, value], option) => {
  option.setData(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["fpSetPre"])(`form.${path}`, value));
};

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

/***/ "./utils/tools/img.ts":
/*!****************************!*\
  !*** ./utils/tools/img.ts ***!
  \****************************/
/*! exports provided: dealImgUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dealImgUrl", function() { return dealImgUrl; });
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/config */ "next/config");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_0__);
var _config$publicRuntime, _config$publicRuntime2;


const config = next_config__WEBPACK_IMPORTED_MODULE_0___default()();
const imgDomain = (_config$publicRuntime = config === null || config === void 0 ? void 0 : (_config$publicRuntime2 = config.publicRuntimeConfig) === null || _config$publicRuntime2 === void 0 ? void 0 : _config$publicRuntime2.imgDomain) !== null && _config$publicRuntime !== void 0 ? _config$publicRuntime : 'http://127.0.0.1:4464/';
const dealImgUrl = (src = '') => {
  if (src === null || src === void 0 ? void 0 : src.includes('blob:')) {
    return src;
  }

  return `${imgDomain}${src}`;
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

/***/ "./utils/view/card/[type].tsx":
/*!************************************!*\
  !*** ./utils/view/card/[type].tsx ***!
  \************************************/
/*! exports provided: cardModel, getPromoCodeItem, CardType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardModel", function() { return cardModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPromoCodeItem", function() { return getPromoCodeItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardType", function() { return CardType; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_HeaderTitle_HeaderTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/HeaderTitle/HeaderTitle */ "./utils/components/HeaderTitle/HeaderTitle.tsx");
/* harmony import */ var _tools_dealKey__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tools/dealKey */ "./utils/tools/dealKey.ts");
/* harmony import */ var _components_FootBar_FootBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/FootBar/FootBar */ "./utils/components/FootBar/FootBar.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ModelAction/modelUtil */ "./utils/ModelAction/modelUtil.ts");
/* harmony import */ var _ss_common_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ss_common/enum */ "./utils/ss_common/enum.ts");
/* harmony import */ var _graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../graphqlTypes/doc */ "./utils/graphqlTypes/doc/index.ts");
/* harmony import */ var _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ModelAction/useStore */ "./utils/ModelAction/useStore.ts");
/* harmony import */ var _tools_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../tools/utils */ "./utils/tools/utils.ts");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _tools_img__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../tools/img */ "./utils/tools/img.ts");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/colors */ "@material-ui/core/colors");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_BScroll_BScroller__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/BScroll/BScroller */ "./utils/components/BScroll/BScroller.tsx");
/* harmony import */ var _components_Box_Box__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/Box/Box */ "./utils/components/Box/Box.tsx");
var _jsxFileName = "D:\\code\\zw\\zw_client_web\\utils\\view\\card\\[type].tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
















const cardModel = Object(_ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_6__["modelFactory"])('cardModel', {
  promoCodeList: [],
  user: {}
}, {
  getList: async (value, option) => {
    var _res$promoCodeList, _user$oneUser;

    const res = await option.query(_graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_8__["doc"].promoCodeList, {});
    const user = await option.query(_graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_8__["doc"].oneUser);
    option.setData(Object(_tools_utils__WEBPACK_IMPORTED_MODULE_10__["fpMergePre"])({
      promoCodeList: (_res$promoCodeList = res === null || res === void 0 ? void 0 : res.promoCodeList) !== null && _res$promoCodeList !== void 0 ? _res$promoCodeList : [],
      user: (_user$oneUser = user.oneUser) !== null && _user$oneUser !== void 0 ? _user$oneUser : {}
    }));
  }
});
const MainBox = styled_components__WEBPACK_IMPORTED_MODULE_11___default.a.div.withConfig({
  displayName: "type__MainBox",
  componentId: "sc-1gqv45y-0"
})(["padding:24px 24px 80px;"]);
const CardBox = styled_components__WEBPACK_IMPORTED_MODULE_11___default()(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Card"]).withConfig({
  displayName: "type__CardBox",
  componentId: "sc-1gqv45y-1"
})(["&&&{margin-bottom:16px;display:grid;padding:16px;grid-template-rows:24px 40px 20px max-content 1fr;grid-column-gap:8px;grid-template-columns:120px 1fr;align-items:center;> aside{grid-area:1/1/6/2;> img{width:120px;height:120px;}}}"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_11___default.a.div.withConfig({
  displayName: "type__Title",
  componentId: "sc-1gqv45y-2"
})(["font-weight:bold;"]);
const Remark = styled_components__WEBPACK_IMPORTED_MODULE_11___default.a.div.withConfig({
  displayName: "type__Remark",
  componentId: "sc-1gqv45y-3"
})([""]);
const Number = styled_components__WEBPACK_IMPORTED_MODULE_11___default.a.div.withConfig({
  displayName: "type__Number",
  componentId: "sc-1gqv45y-4"
})(["font-size:14px;color:", ";"], _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_13__["grey"][500]);
const Time = styled_components__WEBPACK_IMPORTED_MODULE_11___default.a.div.withConfig({
  displayName: "type__Time",
  componentId: "sc-1gqv45y-5"
})(["font-size:14px;color:", ";"], _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_13__["grey"][500]);
const Action = styled_components__WEBPACK_IMPORTED_MODULE_11___default.a.div.withConfig({
  displayName: "type__Action",
  componentId: "sc-1gqv45y-6"
})(["padding-top:8px;"]);
const CardBoxPromoCode = styled_components__WEBPACK_IMPORTED_MODULE_11___default()(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Card"]).withConfig({
  displayName: "type__CardBoxPromoCode",
  componentId: "sc-1gqv45y-7"
})(["&&&{padding:24px;margin-bottom:24px;background-image:url(\"", "\");background-color:", ";box-shadow:inset 0 0 0 1000px rgba(0,0,0,.3);background-size:100% 100%;background-position:0 0;color:white;}", "{color:white;}", "{color:white;}"], p => p.background, _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_13__["grey"][200], Number, Time);
const CodeBox = styled_components__WEBPACK_IMPORTED_MODULE_11___default.a.div.withConfig({
  displayName: "type__CodeBox",
  componentId: "sc-1gqv45y-8"
})([""]);
const getPromoCodeItem = (item, user) => {
  return item.promoCodeType === _ss_common_enum__WEBPACK_IMPORTED_MODULE_7__["PromoCodeTypeEnum"].DarenCard ? __jsx(CardBox, {
    key: `CardBox_${item.id}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 63
    }
  }, __jsx("aside", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: Object(_tools_img__WEBPACK_IMPORTED_MODULE_12__["dealImgUrl"])(item.imgUrl),
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }
  })), __jsx(Title, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 5
    }
  }, item.title), __jsx(Remark, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 5
    }
  }, item.remark), __jsx(Number, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 5
    }
  }), __jsx(Time, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 5
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_3__["ls"])('使用时间'), ":", Object(_tools_utils__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(item.effectiveDateStart), "-", Object(_tools_utils__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(item.effectiveDateEnd)), __jsx(Action, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    color: 'secondary',
    variant: 'contained',
    fullWidth: true,
    onClick: () => {
      if (item === null || item === void 0 ? void 0 : item.code) {
        var _item$code;

        localStorage.setItem(`promoCode_${user.id}`, `${(_item$code = item === null || item === void 0 ? void 0 : item.code) !== null && _item$code !== void 0 ? _item$code : ''}`);
      }
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_3__["ls"])('应用到购物车')))) : __jsx(CardBoxPromoCode, {
    key: `CardBoxPromoCode_${item.id}`,
    background: Object(_tools_img__WEBPACK_IMPORTED_MODULE_12__["dealImgUrl"])(item === null || item === void 0 ? void 0 : item.imgUrl),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 16
    }
  }, __jsx(Title, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 5
    }
  }, item.title), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_15__["Space"], {
    h: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 5
    }
  }), __jsx(Remark, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 5
    }
  }, item.remark), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_15__["Space"], {
    h: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 5
    }
  }), __jsx(Time, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 5
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_3__["ls"])('使用时间'), ":", Object(_tools_utils__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(item.effectiveDateStart), "-", Object(_tools_utils__WEBPACK_IMPORTED_MODULE_10__["formatDate"])(item.effectiveDateEnd)), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_15__["Space"], {
    h: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 5
    }
  }), __jsx(CodeBox, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 5
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_3__["ls"])('优惠码'), ":", item.code), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_15__["Space"], {
    h: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 5
    }
  }), __jsx(Action, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    variant: 'outlined',
    fullWidth: true,
    onClick: () => {
      if (item === null || item === void 0 ? void 0 : item.code) {
        var _item$code2;

        localStorage.setItem(`promoCode_${user.id}`, `${(_item$code2 = item === null || item === void 0 ? void 0 : item.code) !== null && _item$code2 !== void 0 ? _item$code2 : ''}`);
      }
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_3__["ls"])('应用到购物车'))));
};
const CardType = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const promoCodeType = router.query.type;
  const {
    state: stateCardModel,
    actions: actionsCardModel
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_9__["useStoreModel"])(cardModel);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    actionsCardModel.getList(`${promoCodeType !== null && promoCodeType !== void 0 ? promoCodeType : ''}`);
  }, [promoCodeType]);
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 10
    }
  }, __jsx(_components_HeaderTitle_HeaderTitle__WEBPACK_IMPORTED_MODULE_2__["HeaderTitle"], {
    title: Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_3__["ls"])('达人专区'),
    showCart: true,
    hideLeft: true,
    showSearch: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 5
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Tabs"], {
    variant: 'fullWidth',
    value: promoCodeType !== null && promoCodeType !== void 0 ? promoCodeType : _ss_common_enum__WEBPACK_IMPORTED_MODULE_7__["PromoCodeTypeEnum"].DarenCard,
    onChange: (event, value) => router.push('/card/[type]', `/card/${value}`),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Tab"], {
    value: _ss_common_enum__WEBPACK_IMPORTED_MODULE_7__["PromoCodeTypeEnum"].DarenCard,
    label: Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_3__["ls"])('我的达人卡'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Tab"], {
    value: _ss_common_enum__WEBPACK_IMPORTED_MODULE_7__["PromoCodeTypeEnum"].PromoCode,
    label: Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_3__["ls"])('当前优惠促销'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 7
    }
  })), __jsx(_components_BScroll_BScroller__WEBPACK_IMPORTED_MODULE_14__["BScroller"], {
    boxHeight: 'calc(100vh - 188px)',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 5
    }
  }, __jsx(MainBox, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 7
    }
  }, stateCardModel.promoCodeList.filter(v => v.promoCodeType === promoCodeType).map(v => getPromoCodeItem(v, stateCardModel.user)))), __jsx(_components_FootBar_FootBar__WEBPACK_IMPORTED_MODULE_4__["FootBar"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 5
    }
  }));
};

/***/ }),

/***/ "./utils/view/cart/CartProduct.tsx":
/*!*****************************************!*\
  !*** ./utils/view/cart/CartProduct.tsx ***!
  \*****************************************/
/*! exports provided: ShopCartProductBox, CartProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopCartProductBox", function() { return ShopCartProductBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartProduct", function() { return CartProduct; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/Add */ "@material-ui/icons/Add");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Remove */ "@material-ui/icons/Remove");
/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tools_img__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../tools/img */ "./utils/tools/img.ts");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/colors */ "@material-ui/core/colors");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_ProductItem_ProductItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/ProductItem/ProductItem */ "./utils/components/ProductItem/ProductItem.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ModelAction/useStore */ "./utils/ModelAction/useStore.ts");
/* harmony import */ var _tools_dealKey__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../tools/dealKey */ "./utils/tools/dealKey.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index */ "./utils/view/cart/index.tsx");
/* harmony import */ var _components_Message_Message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Message/Message */ "./utils/components/Message/Message.tsx");
/* harmony import */ var _components_ProductItem_UpdateShopCart__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/ProductItem/UpdateShopCart */ "./utils/components/ProductItem/UpdateShopCart.tsx");
var _jsxFileName = "D:\\code\\zw\\zw_client_web\\utils\\view\\cart\\CartProduct.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













const ShopCartProductBox = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "CartProduct__ShopCartProductBox",
  componentId: "sc-1cjcsc1-0"
})(["margin-bottom:16px;display:grid;grid-template-columns:minmax(20px,72px) 1fr;grid-template-rows:repeat(2,22px) 30px;grid-column-gap:10px;> img{grid-area:1/1/4/2;width:100%;height:100%;border-radius:8px;}> section{color:", "}> footer{display:flex;align-items:center;> main{flex-grow:1;}> button{flex-shrink:0;font-size:12px;}}"], _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_5__["grey"][600]);
const CartProduct = ({
  shopCart
}) => {
  var _shopCart$product, _shopCart$product$img, _shopCart$product$img2, _shopCart$number;

  const {
    actions: actionsSCM,
    state: stateSCM
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_8__["useStoreModel"])(_index__WEBPACK_IMPORTED_MODULE_10__["shopCartModel"]);
  const {
    actions: actionsPM
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_8__["useStoreModel"])(_components_ProductItem_ProductItem__WEBPACK_IMPORTED_MODULE_6__["productModel"]);
  const {
    actions: actionsUpdateShopCartModel
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_8__["useStoreModel"])(_components_ProductItem_UpdateShopCart__WEBPACK_IMPORTED_MODULE_12__["updateShopCartModel"]);
  const product = shopCart.product;
  return __jsx(ShopCartProductBox, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 10
    }
  }, __jsx("img", {
    src: Object(_tools_img__WEBPACK_IMPORTED_MODULE_4__["dealImgUrl"])((_shopCart$product = shopCart.product) === null || _shopCart$product === void 0 ? void 0 : (_shopCart$product$img = _shopCart$product.img) === null || _shopCart$product$img === void 0 ? void 0 : (_shopCart$product$img2 = _shopCart$product$img[0]) === null || _shopCart$product$img2 === void 0 ? void 0 : _shopCart$product$img2.url),
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }), __jsx("main", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 5
    }
  }, product === null || product === void 0 ? void 0 : product.name, product === null || product === void 0 ? void 0 : product.weight, product === null || product === void 0 ? void 0 : product.unit), __jsx("section", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }, product === null || product === void 0 ? void 0 : product.remark), __jsx("footer", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 5
    }
  }, __jsx(_components_ProductItem_ProductItem__WEBPACK_IMPORTED_MODULE_6__["ProductPrice"], {
    product: product,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }), shopCart.isNext === 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    size: 'small',
    variant: 'outlined',
    onClick: async () => {
      await actionsPM.updateShopCart({
        isNext: 1,
        id: shopCart.id
      });
      actionsSCM.getList();
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_9__["ls"])('下次购买')), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["IconButton"], {
    disabled: ((_shopCart$number = shopCart === null || shopCart === void 0 ? void 0 : shopCart.number) !== null && _shopCart$number !== void 0 ? _shopCart$number : 0) <= 1,
    size: 'small',
    onClick: async () => {
      await actionsPM.updateNumShopCart({
        product,
        number: -1
      });
      actionsSCM.getList();
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 10
    }
  }, __jsx(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 10
    }
  })), shopCart.number, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["IconButton"], {
    size: 'small',
    onClick: async () => {
      await actionsPM.updateNumShopCart({
        product
      });
      actionsSCM.getList();
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }
  }))) || __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    style: {
      marginRight: '8px'
    },
    size: 'small',
    variant: 'outlined',
    color: 'secondary',
    onClick: async () => {
      await actionsPM.updateShopCart({
        isDelete: 1,
        id: shopCart.id
      });
      actionsSCM.getList();
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_9__["ls"])('删除')), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    size: 'small',
    variant: 'outlined' // onClick={async () => {
    //   if (stateSCM.shopCartList.findIndex(v => v.product?.id === shopCart.product?.id) > -1) {
    //     return showMessage('该商品已在购物车中')
    //   }
    //   await actionsPM.updateShopCart({
    //     isNext: 0,
    //     id: shopCart.id,
    //   })
    //   actionsSCM.getList()
    // }}
    ,
    onClick: async () => {
      const res = await actionsUpdateShopCartModel.openClick();

      if ((res === null || res === void 0 ? void 0 : res.num) > 0) {
        var _await$actionsPM$upda, _await$actionsPM$upda2;

        if ((_await$actionsPM$upda = await actionsPM.updateNumShopCart({
          product,
          number: ~~(res === null || res === void 0 ? void 0 : res.num)
        })) === null || _await$actionsPM$upda === void 0 ? void 0 : (_await$actionsPM$upda2 = _await$actionsPM$upda.updateNumShopCart) === null || _await$actionsPM$upda2 === void 0 ? void 0 : _await$actionsPM$upda2.id) {
          Object(_components_Message_Message__WEBPACK_IMPORTED_MODULE_11__["showMessage"])('操作成功');
          actionsSCM.getList();
        }
      }
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_9__["ls"])('加入购物车')))));
};

/***/ }),

/***/ "./utils/view/cart/components/InputPromoCode.tsx":
/*!*******************************************************!*\
  !*** ./utils/view/cart/components/InputPromoCode.tsx ***!
  \*******************************************************/
/*! exports provided: inputPromoCodeModel, InputPromoCodeDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputPromoCodeModel", function() { return inputPromoCodeModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputPromoCodeDialog", function() { return InputPromoCodeDialog; });
/* harmony import */ var _commonModel_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../commonModel/dialog */ "./utils/commonModel/dialog.ts");
/* harmony import */ var _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ModelAction/useStore */ "./utils/ModelAction/useStore.ts");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tools_dealKey__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../tools/dealKey */ "./utils/tools/dealKey.ts");
/* harmony import */ var _ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ModelAction/modelUtil */ "./utils/ModelAction/modelUtil.ts");
/* harmony import */ var _tools_commonAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../tools/commonAction */ "./utils/tools/commonAction.ts");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Message_Message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/Message/Message */ "./utils/components/Message/Message.tsx");
var _jsxFileName = "D:\\code\\zw\\zw_client_web\\utils\\view\\cart\\components\\InputPromoCode.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;









const inputPromoCodeModel = Object(_ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_5__["mergeTwoModel"])(Object(_commonModel_dialog__WEBPACK_IMPORTED_MODULE_0__["dialogModelFactory"])('inputPromoCodeModel', () => {}), Object(_ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_5__["modelFactory"])('input', {
  form: {
    promoCode: ''
  }
}, {
  setForm: _tools_commonAction__WEBPACK_IMPORTED_MODULE_6__["setForm"]
}));
const Footer = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div.withConfig({
  displayName: "InputPromoCode__Footer",
  componentId: "e2tdfi-0"
})(["padding-top:8px;text-align:right;"]);
const InputPromoCodeDialog = () => {
  const {
    actions: actionsInputPromoCodeModel,
    state: stateInputPromoCodeModel
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_1__["useStoreModel"])(inputPromoCodeModel);
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Dialog"], {
    open: stateInputPromoCodeModel.open,
    onClose: actionsInputPromoCodeModel.onClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 10
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["DialogContent"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    label: Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_4__["ls"])('请输入验证码'),
    value: stateInputPromoCodeModel.form.promoCode,
    onChange: event => actionsInputPromoCodeModel.setForm(['promoCode', event.target.value]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }), __jsx(Footer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: 'contained',
    color: 'secondary',
    onClick: async () => {
      const testRes = await stateInputPromoCodeModel.dialogData(stateInputPromoCodeModel.form.promoCode);

      if (testRes) {
        Object(_components_Message_Message__WEBPACK_IMPORTED_MODULE_8__["showMessage"])(testRes);
      } else {
        actionsInputPromoCodeModel.onClose();
        actionsInputPromoCodeModel.setForm(['promoCode', '']);
      }
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_4__["ls"])('确定')))));
};

/***/ }),

/***/ "./utils/view/cart/components/SelectAddress.tsx":
/*!******************************************************!*\
  !*** ./utils/view/cart/components/SelectAddress.tsx ***!
  \******************************************************/
/*! exports provided: selectAddressModel, SelectAddress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAddressModel", function() { return selectAddressModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectAddress", function() { return SelectAddress; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _commonModel_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../commonModel/dialog */ "./utils/commonModel/dialog.ts");
/* harmony import */ var _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ModelAction/useStore */ "./utils/ModelAction/useStore.ts");
/* harmony import */ var _tools_dealKey__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../tools/dealKey */ "./utils/tools/dealKey.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../index */ "./utils/view/cart/index.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ss_common_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ss_common/enum */ "./utils/ss_common/enum.ts");
var _jsxFileName = "D:\\code\\zw\\zw_client_web\\utils\\view\\cart\\components\\SelectAddress.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









const selectAddressModel = Object(_commonModel_dialog__WEBPACK_IMPORTED_MODULE_2__["dialogModelFactory"])('selectAddressModel', {});
const AddressBox = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div.withConfig({
  displayName: "SelectAddress__AddressBox",
  componentId: "sc-1szv1qj-0"
})(["display:grid;grid-template-columns:1fr min-content;grid-template-rows:repeat(2,fr);grid-row-gap:8px;margin-bottom:16px;> header{font-size:16px;font-weight:bold;}> aside{grid-area:1/2/3/3;}"]);
const Footer = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div.withConfig({
  displayName: "SelectAddress__Footer",
  componentId: "sc-1szv1qj-1"
})([""]);
const SelectAddress = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  const {
    state: stateSAM,
    actions: actionsSAM
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_3__["useStoreModel"])(selectAddressModel);
  const {
    state: stateShopCartModel,
    actions: actionsShopCartModel
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_3__["useStoreModel"])(_index__WEBPACK_IMPORTED_MODULE_5__["shopCartModel"]);
  const addressList = stateShopCartModel.dealAddressList(stateShopCartModel);
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Dialog"], {
    open: stateSAM.open,
    onClose: actionsSAM.onClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 10
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["DialogTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_4__["ls"])('选择地址')), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["DialogContent"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, addressList.map(v => __jsx(AddressBox, {
    key: `DialogTitleAddressBox_${v.id}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 29
    }
  }, __jsx("header", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, v.combineAddress), __jsx("footer", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, `${v.name} ${v.contactInformation}`), __jsx("aside", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Radio"], {
    onChange: () => {
      stateSAM.openResolve(v.id);
      actionsSAM.onClose();
    },
    checked: v.id === stateShopCartModel.form.addressId,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  })))), __jsx(Footer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, stateShopCartModel.form.pickUpType === _ss_common_enum__WEBPACK_IMPORTED_MODULE_8__["PickUpTypeEnum"].Delivery && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    fullWidth: true,
    variant: 'contained',
    color: 'secondary',
    onClick: () => {
      router.push('/me/myAddress/edit/[id]', '/me/myAddress/edit/0');
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_4__["ls"])('添加新地址')))));
};

/***/ }),

/***/ "./utils/view/cart/components/SelectCard.tsx":
/*!***************************************************!*\
  !*** ./utils/view/cart/components/SelectCard.tsx ***!
  \***************************************************/
/*! exports provided: selectCardModel, SelectCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCardModel", function() { return selectCardModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectCard", function() { return SelectCard; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _commonModel_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../commonModel/dialog */ "./utils/commonModel/dialog.ts");
/* harmony import */ var _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ModelAction/useStore */ "./utils/ModelAction/useStore.ts");
/* harmony import */ var _tools_dealKey__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../tools/dealKey */ "./utils/tools/dealKey.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../index */ "./utils/view/cart/index.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "D:\\code\\zw\\zw_client_web\\utils\\view\\cart\\components\\SelectCard.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








const selectCardModel = Object(_commonModel_dialog__WEBPACK_IMPORTED_MODULE_2__["dialogModelFactory"])('selectCardModel', {});
const CardBox = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div.withConfig({
  displayName: "SelectCard__CardBox",
  componentId: "qf29bv-0"
})(["display:grid;grid-template-columns:minmax(60vw,1fr) min-content;grid-template-rows:repeat(2,fr);grid-row-gap:8px;margin-bottom:16px;> header{font-size:16px;font-weight:bold;}> aside{grid-area:1/2/3/3;}"]);
const Footer = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div.withConfig({
  displayName: "SelectCard__Footer",
  componentId: "qf29bv-1"
})([""]);
const SelectCard = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  const {
    state: stateSelectCard,
    actions: actionsSelectCard
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_3__["useStoreModel"])(selectCardModel);
  const {
    state: stateShopCartModel,
    actions: actionsShopCartModel
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_3__["useStoreModel"])(_index__WEBPACK_IMPORTED_MODULE_5__["shopCartModel"]);
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Dialog"], {
    open: stateSelectCard.open,
    onClose: actionsSelectCard.onClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 10
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["DialogTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_4__["ls"])('选择信用卡')), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["DialogContent"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, stateShopCartModel.payCardList.map(v => __jsx(CardBox, {
    key: `DialogTitleAddressBox_${v.id}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 48
    }
  }, __jsx("header", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, v.name), __jsx("footer", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, `${v.number}`), __jsx("aside", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Radio"], {
    onChange: () => {
      stateSelectCard.openResolve(v.id);
      actionsSelectCard.onClose();
    },
    checked: v.id === stateShopCartModel.form.paymentMethodCardId,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  })))), __jsx(Footer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    fullWidth: true,
    variant: 'contained',
    color: 'secondary',
    onClick: () => {
      router.push('/me/myCreditCard/edit/[id]', '/me/myCreditCard/edit/0');
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_4__["ls"])('添加新方式')))));
};

/***/ }),

/***/ "./utils/view/cart/index.tsx":
/*!***********************************!*\
  !*** ./utils/view/cart/index.tsx ***!
  \***********************************/
/*! exports provided: pageTypeEnum, shopCartModel, CartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageTypeEnum", function() { return pageTypeEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shopCartModel", function() { return shopCartModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPage", function() { return CartPage; });
/* harmony import */ var _ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ModelAction/modelUtil */ "./utils/ModelAction/modelUtil.ts");
/* harmony import */ var _ss_common_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ss_common/enum */ "./utils/ss_common/enum.ts");
/* harmony import */ var _tools_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tools/utils */ "./utils/tools/utils.ts");
/* harmony import */ var _tools_commonAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tools/commonAction */ "./utils/tools/commonAction.ts");
/* harmony import */ var _graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../graphqlTypes/doc */ "./utils/graphqlTypes/doc/index.ts");
/* harmony import */ var _shopCart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shopCart */ "./utils/view/cart/shopCart.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ModelAction/useStore */ "./utils/ModelAction/useStore.ts");
/* harmony import */ var _orderPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./orderPage */ "./utils/view/cart/orderPage.tsx");
/* harmony import */ var _tools_dealKey__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../tools/dealKey */ "./utils/tools/dealKey.ts");
var _jsxFileName = "D:\\code\\zw\\zw_client_web\\utils\\view\\cart\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const pageTypeEnum = {
  shopCart: 'shopCart',
  order: 'order'
};
const initForm = {
  pickUpType: _ss_common_enum__WEBPACK_IMPORTED_MODULE_1__["PickUpTypeEnum"].Self,
  addressId: '',
  paymentMethodCardId: '',
  deductCoin: 0,
  saleTax: 0,
  transportationCosts: 0,
  couponDiscount: 0
};
const shopCartModel = Object(_ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_0__["modelFactory"])('shopCartModel', {
  user: {},
  promoCode: {},
  promoCodeError: '',
  payCardList: [],
  userAddressList: [],
  selfAddress: [],
  freightConfig: [],
  userLevelList: [],
  pageType: pageTypeEnum.shopCart,
  shopCartList: [],
  shopCartListNext: [],
  form: _objectSpread({}, initForm),
  dealProductNumber: state => state.shopCartList.reduce((pre, cur) => {
    var _cur$number;

    return pre + ((_cur$number = cur === null || cur === void 0 ? void 0 : cur.number) !== null && _cur$number !== void 0 ? _cur$number : 0);
  }, 0),
  dealAddressList: state => state.form.pickUpType === _ss_common_enum__WEBPACK_IMPORTED_MODULE_1__["PickUpTypeEnum"].Delivery && state.userAddressList || state.selfAddress.map(v => _objectSpread(_objectSpread({}, v), {}, {
    combineAddress: `${v.province} ${v.city} ${v.streetAddress}`,
    name: v.fullName,
    contactInformation: v.phone
  })),
  dealAddressData: state => state.dealAddressList(state).find(v => v.id === state.form.addressId) || {},
  initAddressId: state => {
    var _state$userAddressLis, _state$userAddressLis2, _state$selfAddress, _state$selfAddress$;

    return state.form.pickUpType === _ss_common_enum__WEBPACK_IMPORTED_MODULE_1__["PickUpTypeEnum"].Delivery && ((_state$userAddressLis = state.userAddressList) === null || _state$userAddressLis === void 0 ? void 0 : (_state$userAddressLis2 = _state$userAddressLis.find(v => v.isDefault)) === null || _state$userAddressLis2 === void 0 ? void 0 : _state$userAddressLis2.id) || ((_state$selfAddress = state.selfAddress) === null || _state$selfAddress === void 0 ? void 0 : (_state$selfAddress$ = _state$selfAddress[0]) === null || _state$selfAddress$ === void 0 ? void 0 : _state$selfAddress$.id);
  },
  dealProductTotal: state => state.shopCartList.reduce((pre, cur) => {
    var _cur$product;

    return pre + Object(_tools_utils__WEBPACK_IMPORTED_MODULE_2__["dealMaybeNumber"])(cur === null || cur === void 0 ? void 0 : cur.number) * Object(_tools_utils__WEBPACK_IMPORTED_MODULE_2__["dealMaybeNumber"])(cur === null || cur === void 0 ? void 0 : (_cur$product = cur.product) === null || _cur$product === void 0 ? void 0 : _cur$product.priceOut);
  }, 0),
  dealTransportationCosts: (state, productTotal) => {
    var _state$freightConfig;

    return state.form.pickUpType === _ss_common_enum__WEBPACK_IMPORTED_MODULE_1__["PickUpTypeEnum"].Delivery && state.freightConfig.reduce((pre, cur) => {
      if (pre > parseFloat(cur === null || cur === void 0 ? void 0 : cur.freightPay) && productTotal < parseFloat(cur === null || cur === void 0 ? void 0 : cur.orderMax)) {
        return parseFloat(cur === null || cur === void 0 ? void 0 : cur.freightPay);
      } else {
        return pre;
      }
    }, parseFloat((_state$freightConfig = state.freightConfig[state.freightConfig.length - 1]) === null || _state$freightConfig === void 0 ? void 0 : _state$freightConfig.freightPay)) || 0;
  }
}, {
  clearData: (value, option) => {
    option.setData(Object(_tools_utils__WEBPACK_IMPORTED_MODULE_2__["fpMergePre"])({
      form: initForm,
      pageType: pageTypeEnum.shopCart
    }));
  },
  clearForm: (value, option) => option.setData(Object(_tools_utils__WEBPACK_IMPORTED_MODULE_2__["fpMergePre"])({
    form: _objectSpread({}, initForm)
  })),
  setForm: _tools_commonAction__WEBPACK_IMPORTED_MODULE_3__["setForm"],
  getList: async (value, option) => {
    var _userRes$oneUser, _res$shopCartList$fil, _res$shopCartList$fil2;

    const userRes = await option.query(_graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_4__["doc"].oneUser);
    const res = await option.query(_graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_4__["doc"].userShopCartList);
    option.setData(Object(_tools_utils__WEBPACK_IMPORTED_MODULE_2__["fpMergePre"])({
      user: (_userRes$oneUser = userRes === null || userRes === void 0 ? void 0 : userRes.oneUser) !== null && _userRes$oneUser !== void 0 ? _userRes$oneUser : {},
      shopCartList: (_res$shopCartList$fil = res === null || res === void 0 ? void 0 : res.shopCartList.filter(v => !v.isNext)) !== null && _res$shopCartList$fil !== void 0 ? _res$shopCartList$fil : [],
      shopCartListNext: (_res$shopCartList$fil2 = res === null || res === void 0 ? void 0 : res.shopCartList.filter(v => !!v.isNext)) !== null && _res$shopCartList$fil2 !== void 0 ? _res$shopCartList$fil2 : []
    }));
  },
  dealPromoCode: async (value, option) => {
    var _res$promoCodeList;

    const res = await option.query(_graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_4__["doc"].promoCodeList, {
      promoCodeItemInput: {
        code: value
      }
    });

    if ((res === null || res === void 0 ? void 0 : (_res$promoCodeList = res.promoCodeList) === null || _res$promoCodeList === void 0 ? void 0 : _res$promoCodeList.length) === 1) {
      const promoCode = res.promoCodeList[0];
      option.setData(Object(_tools_utils__WEBPACK_IMPORTED_MODULE_2__["fpMergePre"])({
        promoCode
      }));
      return '';
    } else {
      return Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_9__["ls"])('未匹配到优惠码');
    }
  },
  updatePageType: (value, option) => option.setData(Object(_tools_utils__WEBPACK_IMPORTED_MODULE_2__["fpMergePre"])({
    pageType: value
  })),
  updatePayCardList: async (value, option) => {
    const res = await option.query(_graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_4__["doc"].orderConfirmInfo);
    option.setData(Object(_tools_utils__WEBPACK_IMPORTED_MODULE_2__["fpMergePre"])({
      payCardList: res === null || res === void 0 ? void 0 : res.payCardListOneUser
    }));
  },
  getOrderInfo: async (value, option) => {
    var _res$getDataConfig$va, _res$getDataConfig, _res$getDataConfig$va2, _res$freightConfig$va, _res$freightConfig, _res$freightConfig$va2, _res$userLevelList, _res$userAddressListO, _res$userAddressListO2, _res$getDataConfig2, _res$getDataConfig2$v, _res$getDataConfig2$v2, _res$getDataConfig2$v3, _ref, _ref$find;

    const res = await option.query(_graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_4__["doc"].orderConfirmInfo);
    option.setData(Object(_tools_utils__WEBPACK_IMPORTED_MODULE_2__["fpSetPre"])('user', res === null || res === void 0 ? void 0 : res.oneUser));
    option.setData(Object(_tools_utils__WEBPACK_IMPORTED_MODULE_2__["fpMergePre"])({
      payCardList: res === null || res === void 0 ? void 0 : res.payCardListOneUser,
      userAddressList: res === null || res === void 0 ? void 0 : res.userAddressListOneUser,
      selfAddress: (_res$getDataConfig$va = res === null || res === void 0 ? void 0 : (_res$getDataConfig = res.getDataConfig) === null || _res$getDataConfig === void 0 ? void 0 : (_res$getDataConfig$va2 = _res$getDataConfig.value) === null || _res$getDataConfig$va2 === void 0 ? void 0 : _res$getDataConfig$va2.list) !== null && _res$getDataConfig$va !== void 0 ? _res$getDataConfig$va : [],
      freightConfig: (_res$freightConfig$va = res === null || res === void 0 ? void 0 : (_res$freightConfig = res.freightConfig) === null || _res$freightConfig === void 0 ? void 0 : (_res$freightConfig$va2 = _res$freightConfig.value) === null || _res$freightConfig$va2 === void 0 ? void 0 : _res$freightConfig$va2.freightList) !== null && _res$freightConfig$va !== void 0 ? _res$freightConfig$va : [],
      userLevelList: (_res$userLevelList = res === null || res === void 0 ? void 0 : res.userLevelList) !== null && _res$userLevelList !== void 0 ? _res$userLevelList : []
    }));
    option.setData(Object(_tools_utils__WEBPACK_IMPORTED_MODULE_2__["fpMergePre"])({
      form: {
        addressId: option.data.form.pickUpType === _ss_common_enum__WEBPACK_IMPORTED_MODULE_1__["PickUpTypeEnum"].Delivery && (res === null || res === void 0 ? void 0 : (_res$userAddressListO = res.userAddressListOneUser) === null || _res$userAddressListO === void 0 ? void 0 : (_res$userAddressListO2 = _res$userAddressListO.find(v => v.isDefault)) === null || _res$userAddressListO2 === void 0 ? void 0 : _res$userAddressListO2.id) || (res === null || res === void 0 ? void 0 : (_res$getDataConfig2 = res.getDataConfig) === null || _res$getDataConfig2 === void 0 ? void 0 : (_res$getDataConfig2$v = _res$getDataConfig2.value) === null || _res$getDataConfig2$v === void 0 ? void 0 : (_res$getDataConfig2$v2 = _res$getDataConfig2$v.list) === null || _res$getDataConfig2$v2 === void 0 ? void 0 : (_res$getDataConfig2$v3 = _res$getDataConfig2$v2[0]) === null || _res$getDataConfig2$v3 === void 0 ? void 0 : _res$getDataConfig2$v3.id),
        paymentMethodCardId: ((_ref = res === null || res === void 0 ? void 0 : res.payCardListOneUser) === null || _ref === void 0 ? void 0 : (_ref$find = _ref.find(v => v.isDefault)) === null || _ref$find === void 0 ? void 0 : _ref$find.id) || ''
      }
    }));
  },
  submit: async (value, option) => {
    return await option.mutate(_graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_4__["doc"].saveOrder, {
      orderInfoItemInput: _objectSpread({}, value)
    });
  },
  testPromoCode: async (value, option) => {
    return '123';
  }
});
const CartPage = () => {
  const {
    state: stateSCM
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_7__["useStoreModel"])(shopCartModel);
  return stateSCM.pageType === pageTypeEnum.order && __jsx(_orderPage__WEBPACK_IMPORTED_MODULE_8__["OrderPage"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 55
    }
  }) || __jsx(_shopCart__WEBPACK_IMPORTED_MODULE_5__["ShopCartPage"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 72
    }
  });
};

/***/ }),

/***/ "./utils/view/cart/orderPage.tsx":
/*!***************************************!*\
  !*** ./utils/view/cart/orderPage.tsx ***!
  \***************************************/
/*! exports provided: ShopTitle, AddressBox, CardBox, ShopTotal, FooterFit, OrderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopTitle", function() { return ShopTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressBox", function() { return AddressBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardBox", function() { return CardBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopTotal", function() { return ShopTotal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterFit", function() { return FooterFit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPage", function() { return OrderPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/ChevronRight */ "@material-ui/icons/ChevronRight");
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_HeaderTitle_HeaderTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/HeaderTitle/HeaderTitle */ "./utils/components/HeaderTitle/HeaderTitle.tsx");
/* harmony import */ var _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ModelAction/useStore */ "./utils/ModelAction/useStore.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index */ "./utils/view/cart/index.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tools_dealKey__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../tools/dealKey */ "./utils/tools/dealKey.ts");
/* harmony import */ var _ss_common_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ss_common/enum */ "./utils/ss_common/enum.ts");
/* harmony import */ var _graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../graphqlTypes/doc */ "./utils/graphqlTypes/doc/index.ts");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_BScroll_BScroller__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/BScroll/BScroller */ "./utils/components/BScroll/BScroller.tsx");
/* harmony import */ var _components_Box_Box__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Box/Box */ "./utils/components/Box/Box.tsx");
/* harmony import */ var _components_SelectAddress__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/SelectAddress */ "./utils/view/cart/components/SelectAddress.tsx");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/colors */ "@material-ui/core/colors");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_SelectCard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/SelectCard */ "./utils/view/cart/components/SelectCard.tsx");
/* harmony import */ var _tools_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../tools/utils */ "./utils/tools/utils.ts");
/* harmony import */ var _style_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../style/common */ "./utils/style/common.ts");
/* harmony import */ var _components_ButtonLoad_ButtonLoad__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/ButtonLoad/ButtonLoad */ "./utils/components/ButtonLoad/ButtonLoad.tsx");
/* harmony import */ var _components_Message_Message__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/Message/Message */ "./utils/components/Message/Message.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_19__);
var _jsxFileName = "D:\\code\\zw\\zw_client_web\\utils\\view\\cart\\orderPage.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





















const ShopTitle = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "orderPage__ShopTitle",
  componentId: "n2h0w5-0"
})(["font-size:18px;font-weight:bold;display:flex;align-items:flex-end;> footer{font-size:14px;color:", ";}"], _style_common__WEBPACK_IMPORTED_MODULE_16__["mpStyle"].red);
const AddressBox = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "orderPage__AddressBox",
  componentId: "n2h0w5-1"
})(["padding:20px;display:flex;align-items:center;> main{flex-grow:1;> header{font-size:16px;font-weight:bold;margin-bottom:8px;}}"]);
const CardBox = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "orderPage__CardBox",
  componentId: "n2h0w5-2"
})(["padding:16px 20px;display:grid;grid-template-columns:1fr min-content;grid-template-rows:repeat(2,1fr);> header{font-size:16px;font-weight:bold;margin-bottom:8px;}> aside{grid-area:1/2/3/3;}"]);
const ShopTotal = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "orderPage__ShopTotal",
  componentId: "n2h0w5-3"
})(["padding:0 20px;display:flex;justify-content:space-between;margin-bottom:16px;"]);
const FooterFit = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "orderPage__FooterFit",
  componentId: "n2h0w5-4"
})(["position:fixed;box-sizing:border-box;background:white;bottom:0;width:100vw;padding:16px 24px;display:grid;grid-template-rows:repeat(2,1fr);grid-template-columns:1fr max-content;grid-row-gap:8px;box-shadow:", ";> header{> span{font-size:12px;margin-left:8px;}}> aside{grid-area:1/2/3/3;}"], _style_common__WEBPACK_IMPORTED_MODULE_16__["mpStyle"].shadow['1']);
const OrderPage = () => {
  var _stateSCM$payCardList, _stateSCM$form, _stateSCM$form$coupon, _stateSCM$form2, _stateSCM$userLevelLi;

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_19__["useRouter"])();
  const {
    actions: actionsSAM
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_3__["useStoreModel"])(_components_SelectAddress__WEBPACK_IMPORTED_MODULE_12__["selectAddressModel"]);
  const {
    actions: actionsSelectCard
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_3__["useStoreModel"])(_components_SelectCard__WEBPACK_IMPORTED_MODULE_14__["selectCardModel"]);
  const {
    state: stateSCM,
    actions: actionsSCM,
    getLoad
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_3__["useStoreModel"])(_index__WEBPACK_IMPORTED_MODULE_4__["shopCartModel"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    actionsSCM.getOrderInfo();
  }, []);
  const addressData = stateSCM.dealAddressData(stateSCM);
  const cardData = ((_stateSCM$payCardList = stateSCM.payCardList) === null || _stateSCM$payCardList === void 0 ? void 0 : _stateSCM$payCardList.find(v => v.id === stateSCM.form.paymentMethodCardId)) || {};
  const productTotal = stateSCM.dealProductTotal(stateSCM);
  const transportationCosts = stateSCM.dealTransportationCosts(stateSCM, productTotal);
  const actuallyPaid = productTotal + transportationCosts - Object(_tools_utils__WEBPACK_IMPORTED_MODULE_15__["dealMaybeNumber"])(stateSCM.form.deductCoin) + Object(_tools_utils__WEBPACK_IMPORTED_MODULE_15__["dealMaybeNumber"])(stateSCM.form.saleTax) - Object(_tools_utils__WEBPACK_IMPORTED_MODULE_15__["dealMaybeNumber"])((_stateSCM$form = stateSCM.form) === null || _stateSCM$form === void 0 ? void 0 : _stateSCM$form.couponDiscount);
  const generateCoin = actuallyPaid * 0.01;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (stateSCM.pageType === _index__WEBPACK_IMPORTED_MODULE_4__["pageTypeEnum"].order) {
      window.history.pushState(null, '', document.URL);
      window.addEventListener('popstate', state => {
        // 监听到返回事件，注意，只有触发了返回才会执行这个方法
        actionsSCM.updatePageType(_index__WEBPACK_IMPORTED_MODULE_4__["pageTypeEnum"].shopCart);
      }, false);
    }

    return () => {
      window.removeEventListener('popstate', state => {
        actionsSCM.updatePageType(_index__WEBPACK_IMPORTED_MODULE_4__["pageTypeEnum"].shopCart);
      });
    };
  }, [stateSCM.pageType]);
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 10
    }
  }, __jsx(_components_HeaderTitle_HeaderTitle__WEBPACK_IMPORTED_MODULE_2__["HeaderTitle"], {
    title: '订单支付',
    backCall: () => {
      actionsSCM.updatePageType(_index__WEBPACK_IMPORTED_MODULE_4__["pageTypeEnum"].shopCart);
      return true;
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 5
    }
  }), !!getLoad(_graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_8__["doc"].orderConfirmInfo) && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["LinearProgress"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 42
    }
  }) || __jsx("div", {
    style: {
      height: '4px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 64
    }
  }), __jsx(_components_BScroll_BScroller__WEBPACK_IMPORTED_MODULE_10__["BScroller"], {
    boxHeight: 'calc(100vh - 135px)',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 5
    }
  }, __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_11__["Space"], {
    h: 10,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 7
    }
  }), __jsx(ShopTitle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 7
    }
  }, __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_11__["Space"], {
    w: 20,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 9
    }
  }), Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__["ls"])(stateSCM.form.pickUpType === _ss_common_enum__WEBPACK_IMPORTED_MODULE_7__["PickUpTypeEnum"].Self && '自取地址' || '送货地址')), __jsx(AddressBox, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 7
    }
  }, __jsx("main", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 9
    }
  }, __jsx("header", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 11
    }
  }, `${addressData.combineAddress}`), __jsx("footer", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 11
    }
  }, `${addressData.name} ${addressData.contactInformation}`)), __jsx("aside", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["IconButton"], {
    onClick: async () => {
      const res = await actionsSAM.openClick();

      if (res) {
        actionsSCM.setForm(['addressId', res]);
      }
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 13
    }
  })))), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_11__["Space"], {
    c: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_13__["grey"][200],
    h: 16,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 7
    }
  }), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_11__["Space"], {
    h: 16,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 7
    }
  }), __jsx(ShopTitle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 7
    }
  }, __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_11__["Space"], {
    w: 20,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 9
    }
  }), Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__["ls"])('付款方式')), __jsx(CardBox, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 7
    }
  }, __jsx("header", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 9
    }
  }, cardData.name), __jsx("footer", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 9
    }
  }, cardData.number), __jsx("aside", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["IconButton"], {
    onClick: async () => {
      const res = await actionsSelectCard.openClick();

      if (res) {
        actionsSCM.setForm(['paymentMethodCardId', res]);
      }
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 13
    }
  })))), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_11__["Space"], {
    c: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_13__["grey"][200],
    h: 16,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 7
    }
  }), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_11__["Space"], {
    h: 16,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 7
    }
  }), __jsx(ShopTitle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 7
    }
  }, __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_11__["Space"], {
    w: 20,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 9
    }
  }), Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__["ls"])('使用达人币'), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_11__["Space"], {
    w: 16,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 9
    }
  }), __jsx("footer", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 9
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__["ls"])('当月可用余额'), Object(_tools_utils__WEBPACK_IMPORTED_MODULE_15__["dealMoney"])(stateSCM.user.orderCoinCurrentMonth))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 7
    }
  }, __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_11__["Space"], {
    w: 20,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["TextField"], {
    style: {
      marginTop: '8px',
      marginBottom: '24px'
    },
    label: Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__["ls"])(''),
    value: stateSCM.form.deductCoin,
    onChange: e => {
      actionsSCM.setForm(['deductCoin', e.target.value]);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 9
    }
  })), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_11__["Space"], {
    c: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_13__["grey"][200],
    h: 16,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 7
    }
  }), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_11__["Space"], {
    h: 16,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 7
    }
  }), __jsx(ShopTotal, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 7
    }
  }, __jsx("header", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 9
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__["ls"])('购物车总计')), __jsx("footer", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 9
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_15__["dealMoney"])(productTotal - ((_stateSCM$form$coupon = (_stateSCM$form2 = stateSCM.form) === null || _stateSCM$form2 === void 0 ? void 0 : _stateSCM$form2.couponDiscount) !== null && _stateSCM$form$coupon !== void 0 ? _stateSCM$form$coupon : 0)))), transportationCosts > 0 && __jsx(ShopTotal, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 35
    }
  }, __jsx("header", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 9
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__["ls"])('运费')), __jsx("footer", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 9
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_15__["dealMoney"])(transportationCosts))), __jsx(ShopTotal, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 7
    }
  }, __jsx("header", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 9
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__["ls"])('达人币抵扣')), __jsx("footer", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 9
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_15__["dealMoney"])(stateSCM.form.deductCoin, '-'))), __jsx(ShopTotal, {
    style: {
      fontSize: '18px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 7
    }
  }, __jsx("header", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 9
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__["ls"])('订单总额')), __jsx("footer", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 9
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_15__["dealMoney"])(actuallyPaid))), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_11__["Space"], {
    h: 30,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 7
    }
  })), __jsx(FooterFit, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 5
    }
  }, __jsx("header", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__["ls"])('本次订单'), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 9
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__["ls"])((_stateSCM$userLevelLi = stateSCM.userLevelList.find(v => {
    var _stateSCM$user$userIn;

    return v.code === ((_stateSCM$user$userIn = stateSCM.user.userInfo) === null || _stateSCM$user$userIn === void 0 ? void 0 : _stateSCM$user$userIn.userLevel);
  })) === null || _stateSCM$userLevelLi === void 0 ? void 0 : _stateSCM$userLevelLi.name))), __jsx("footer", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__["ls"])('将获得下月使用达人币 '), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 9
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_15__["dealMoney"])(generateCoin))), __jsx("aside", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 7
    }
  }, __jsx(_components_ButtonLoad_ButtonLoad__WEBPACK_IMPORTED_MODULE_17__["ButtonLoad"], {
    loading: getLoad(_graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_8__["doc"].saveOrder),
    onClick: async () => {
      var _stateSCM$user, _stateSCM$user$userIn2, _res$saveOrder;

      if (Object(_tools_utils__WEBPACK_IMPORTED_MODULE_15__["dealMaybeNumber"])((_stateSCM$user = stateSCM.user) === null || _stateSCM$user === void 0 ? void 0 : _stateSCM$user.orderCoinCurrentMonth) < Object(_tools_utils__WEBPACK_IMPORTED_MODULE_15__["dealMaybeNumber"])(stateSCM.form.deductCoin)) {
        Object(_components_Message_Message__WEBPACK_IMPORTED_MODULE_18__["showMessage"])(Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__["ls"])('达人币余额不足'));
        return;
      }

      const submitData = _objectSpread(_objectSpread({}, stateSCM.form), {}, {
        generateCoin,
        actuallyPaid,
        transportationCosts,
        subtotal: productTotal,
        currentUserLevel: (_stateSCM$user$userIn2 = stateSCM.user.userInfo) === null || _stateSCM$user$userIn2 === void 0 ? void 0 : _stateSCM$user$userIn2.userLevel,
        rOrderProduct: stateSCM.shopCartList.map(v => {
          var _v$product;

          return {
            count: v.number,
            productId: (_v$product = v.product) === null || _v$product === void 0 ? void 0 : _v$product.id,
            product: v.product
          };
        })
      });

      const res = await actionsSCM.submit(_objectSpread({}, submitData));

      if (res === null || res === void 0 ? void 0 : (_res$saveOrder = res.saveOrder) === null || _res$saveOrder === void 0 ? void 0 : _res$saveOrder.id) {
        var _res$saveOrder2;

        Object(_components_Message_Message__WEBPACK_IMPORTED_MODULE_18__["showMessage"])('操作成功 将前往付款'); // await router.replace('/cart/result')

        const _query = Object(_tools_utils__WEBPACK_IMPORTED_MODULE_15__["dealUrlQuery"])({
          orderId: res === null || res === void 0 ? void 0 : (_res$saveOrder2 = res.saveOrder) === null || _res$saveOrder2 === void 0 ? void 0 : _res$saveOrder2.id
        });

        await router.replace(`/pay${_query}`, `/pay${_query}`);
        actionsSCM.clearData();
        actionsSCM.getList();
      }
    },
    variant: 'contained',
    color: 'secondary',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 9
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__["ls"])('提交订单')))), __jsx(_components_SelectAddress__WEBPACK_IMPORTED_MODULE_12__["SelectAddress"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 5
    }
  }), __jsx(_components_SelectCard__WEBPACK_IMPORTED_MODULE_14__["SelectCard"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 5
    }
  }));
};

/***/ }),

/***/ "./utils/view/cart/shopCart.tsx":
/*!**************************************!*\
  !*** ./utils/view/cart/shopCart.tsx ***!
  \**************************************/
/*! exports provided: ShopCartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopCartPage", function() { return ShopCartPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../graphqlTypes/doc */ "./utils/graphqlTypes/doc/index.ts");
/* harmony import */ var _tools_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tools/utils */ "./utils/tools/utils.ts");
/* harmony import */ var _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ModelAction/useStore */ "./utils/ModelAction/useStore.ts");
/* harmony import */ var _tools_dealKey__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../tools/dealKey */ "./utils/tools/dealKey.ts");
/* harmony import */ var _components_HeaderTitle_HeaderTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/HeaderTitle/HeaderTitle */ "./utils/components/HeaderTitle/HeaderTitle.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/colors */ "@material-ui/core/colors");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ss_common_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ss_common/enum */ "./utils/ss_common/enum.ts");
/* harmony import */ var _CartProduct__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CartProduct */ "./utils/view/cart/CartProduct.tsx");
/* harmony import */ var _components_BScroll_BScroller__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/BScroll/BScroller */ "./utils/components/BScroll/BScroller.tsx");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./index */ "./utils/view/cart/index.tsx");
/* harmony import */ var _components_NoAuth_NoAuth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/NoAuth/NoAuth */ "./utils/components/NoAuth/NoAuth.tsx");
/* harmony import */ var _components_Box_Box__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/Box/Box */ "./utils/components/Box/Box.tsx");
/* harmony import */ var _components_InputPromoCode__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/InputPromoCode */ "./utils/view/cart/components/InputPromoCode.tsx");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/Close */ "@material-ui/icons/Close");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_ProductItem_UpdateShopCart__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/ProductItem/UpdateShopCart */ "./utils/components/ProductItem/UpdateShopCart.tsx");
var _jsxFileName = "D:\\code\\zw\\zw_client_web\\utils\\view\\cart\\shopCart.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


















const BoxContain = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.section.withConfig({
  displayName: "shopCart__BoxContain",
  componentId: "sc-2w144c-0"
})(["padding:0 20px;"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div.withConfig({
  displayName: "shopCart__Title",
  componentId: "sc-2w144c-1"
})(["font-size:18px;font-weight:bold;margin:16px 0 12px;"]);
const PromoCode = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div.withConfig({
  displayName: "shopCart__PromoCode",
  componentId: "sc-2w144c-2"
})(["display:flex;> aside{margin-left:8px;}"]);
const Money = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div.withConfig({
  displayName: "shopCart__Money",
  componentId: "sc-2w144c-3"
})(["display:flex;justify-content:space-between;"]);
const FixFooter = styled_components__WEBPACK_IMPORTED_MODULE_8___default()(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"]).withConfig({
  displayName: "shopCart__FixFooter",
  componentId: "sc-2w144c-4"
})(["padding:20px;position:fixed;bottom:0;width:100vw;box-sizing:border-box;background:#fff;"]);
const ShopCartPage = () => {
  const {
    state: stateSCM,
    actions: actionsSCM,
    getLoad
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_3__["useStoreModel"])(_index__WEBPACK_IMPORTED_MODULE_12__["shopCartModel"]);
  const {
    actions: actionsInputPromoCodeModel
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_3__["useStoreModel"])(_components_InputPromoCode__WEBPACK_IMPORTED_MODULE_15__["inputPromoCodeModel"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (stateSCM.shopCartList.length === 0) {
      actionsSCM.getList();
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (stateSCM.user.id && localStorage.getItem(`promoCode_${stateSCM.user.id}`)) {
      actionsSCM.dealPromoCode(`${localStorage.getItem(`promoCode_${stateSCM.user.id}`)}`);
    }
  }, [stateSCM.user.id]);
  const productNumber = stateSCM.dealProductNumber(stateSCM);
  const productSubtotal = Object(_tools_utils__WEBPACK_IMPORTED_MODULE_2__["dealMoney"])(stateSCM.dealProductTotal(stateSCM));
  const promoCode = stateSCM.promoCode;
  const discountProduct = stateSCM.shopCartList.filter(v => {
    var _v$product, _v$product$category, _v$product2, _v$product2$category, _v$product2$category$, _v$product3, _v$product3$category, _v$product3$category$, _v$product3$category$2;

    return [(_v$product = v.product) === null || _v$product === void 0 ? void 0 : (_v$product$category = _v$product.category) === null || _v$product$category === void 0 ? void 0 : _v$product$category.id, (_v$product2 = v.product) === null || _v$product2 === void 0 ? void 0 : (_v$product2$category = _v$product2.category) === null || _v$product2$category === void 0 ? void 0 : (_v$product2$category$ = _v$product2$category.parentCategory) === null || _v$product2$category$ === void 0 ? void 0 : _v$product2$category$.id, (_v$product3 = v.product) === null || _v$product3 === void 0 ? void 0 : (_v$product3$category = _v$product3.category) === null || _v$product3$category === void 0 ? void 0 : (_v$product3$category$ = _v$product3$category.parentCategory) === null || _v$product3$category$ === void 0 ? void 0 : (_v$product3$category$2 = _v$product3$category$.parentCategory) === null || _v$product3$category$2 === void 0 ? void 0 : _v$product3$category$2.id].includes(promoCode.productCategory);
  });
  const discountProductAmount = discountProduct.reduce((previousValue, currentValue) => {
    var _currentValue$product;

    return previousValue + Object(_tools_utils__WEBPACK_IMPORTED_MODULE_2__["dealMaybeNumber"])(currentValue.number) * Object(_tools_utils__WEBPACK_IMPORTED_MODULE_2__["dealMaybeNumber"])((_currentValue$product = currentValue.product) === null || _currentValue$product === void 0 ? void 0 : _currentValue$product.priceOut);
  }, 0); // 计算折扣

  let discountAmountForPromoCode = 0;

  if (discountProduct.length) {
    // 折扣条件
    if (promoCode.discountCondition === _ss_common_enum__WEBPACK_IMPORTED_MODULE_9__["DiscountConditionEnum"].No || promoCode.discountCondition === _ss_common_enum__WEBPACK_IMPORTED_MODULE_9__["DiscountConditionEnum"].Amount && discountProductAmount > Object(_tools_utils__WEBPACK_IMPORTED_MODULE_2__["dealMaybeNumber"])(promoCode.discountConditionAmount)) {
      discountAmountForPromoCode = promoCode.discountType === _ss_common_enum__WEBPACK_IMPORTED_MODULE_9__["DiscountTypeEnum"].Amount ? Object(_tools_utils__WEBPACK_IMPORTED_MODULE_2__["dealMaybeNumber"])(promoCode.discountAmount) : Object(_tools_utils__WEBPACK_IMPORTED_MODULE_2__["dealMaybeNumber"])(promoCode.discountAmount) * discountProductAmount / 100;
    }
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (discountAmountForPromoCode) {
      actionsSCM.setForm(['couponDiscount', discountAmountForPromoCode]);
    }
  }, [discountAmountForPromoCode]);
  const allTotal = stateSCM.dealProductTotal(stateSCM) - Object(_tools_utils__WEBPACK_IMPORTED_MODULE_2__["dealMaybeNumber"])(stateSCM.form.couponDiscount);
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 10
    }
  }, __jsx(_components_HeaderTitle_HeaderTitle__WEBPACK_IMPORTED_MODULE_5__["HeaderTitle"], {
    title: '购物车',
    LeftIcon: _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_16___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 5
    }
  }), Object(_components_NoAuth_NoAuth__WEBPACK_IMPORTED_MODULE_13__["dealNoAuth"])(__jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, !!getLoad(_graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_1__["doc"].userShopCartList) && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["LinearProgress"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 44
    }
  }) || __jsx("div", {
    style: {
      height: '4px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 66
    }
  }), __jsx(_components_BScroll_BScroller__WEBPACK_IMPORTED_MODULE_11__["BScroller"], {
    boxHeight: 'calc(100vh - 65px)',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }
  }, __jsx(BoxContain, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      paddingTop: '16px',
      fontSize: '18px',
      textAlign: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }, productNumber, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_4__["ls"])('件商品')), __jsx("div", {
    style: {
      fontSize: '14px',
      textAlign: 'center',
      color: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_7__["grey"][600],
      marginTop: '8px',
      marginBottom: '10px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_4__["ls"])('小计'), ":", productSubtotal), stateSCM.shopCartList.map(value => __jsx(_CartProduct__WEBPACK_IMPORTED_MODULE_10__["CartProduct"], {
    key: `CartProduct_${value.id}`,
    shopCart: value,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 47
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["TextField"], {
    style: {
      marginTop: '10px'
    },
    fullWidth: true,
    label: Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_4__["ls"])('运送方式'),
    select: true,
    value: stateSCM.form.pickUpType,
    onChange: event => {
      actionsSCM.setForm(['pickUpType', event.target.value]);
      actionsSCM.setForm(['addressId', stateSCM.initAddressId(Object(_tools_utils__WEBPACK_IMPORTED_MODULE_2__["fpMerge"])(stateSCM, {
        form: {
          pickUpType: event.target.value
        }
      }))]);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["MenuItem"], {
    value: _ss_common_enum__WEBPACK_IMPORTED_MODULE_9__["PickUpTypeEnum"].Self,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 13
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_4__["ls"])(Object(_ss_common_enum__WEBPACK_IMPORTED_MODULE_9__["getPickUpTypeName"])(_ss_common_enum__WEBPACK_IMPORTED_MODULE_9__["PickUpTypeEnum"].Self))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["MenuItem"], {
    value: _ss_common_enum__WEBPACK_IMPORTED_MODULE_9__["PickUpTypeEnum"].Delivery,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 13
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_4__["ls"])(Object(_ss_common_enum__WEBPACK_IMPORTED_MODULE_9__["getPickUpTypeName"])(_ss_common_enum__WEBPACK_IMPORTED_MODULE_9__["PickUpTypeEnum"].Delivery)))), __jsx(Title, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_4__["ls"])('达人卡和优惠券')), __jsx(PromoCode, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 11
    }
  }, __jsx("main", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 13
    }
  }, stateSCM.promoCode.title), __jsx("aside", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 13
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_4__["ls"])('code'), ": ", stateSCM.promoCode.code)), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_14__["Space"], {
    h: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 11
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    variant: 'outlined',
    onClick: async () => {
      await actionsInputPromoCodeModel.openClick(promoCode => {
        return actionsSCM.dealPromoCode(promoCode);
      });
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_4__["ls"])(stateSCM.promoCode.code ? '重新输入' : '输入验证码')), __jsx(_components_InputPromoCode__WEBPACK_IMPORTED_MODULE_15__["InputPromoCodeDialog"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 11
    }
  }), __jsx(Title, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_4__["ls"])('预估价格')), __jsx(Money, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 11
    }
  }, __jsx("aside", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 13
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_4__["ls"])('小计')), __jsx("main", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 13
    }
  }, productSubtotal)), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_14__["Space"], {
    h: 10,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 11
    }
  }), __jsx(Money, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 11
    }
  }, __jsx("aside", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 13
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_4__["ls"])('折扣')), __jsx("main", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 13
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_2__["dealMoney"])(stateSCM.form.couponDiscount))), __jsx("div", {
    style: {
      width: '100%',
      height: '10px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 11
    }
  }), __jsx(Money, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 11
    }
  }, __jsx("aside", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 13
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_4__["ls"])('总计')), __jsx("main", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 13
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_2__["dealMoney"])(allTotal))), __jsx(Title, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_4__["ls"])('下次购买的商品')), stateSCM.shopCartListNext.map(value => __jsx(_CartProduct__WEBPACK_IMPORTED_MODULE_10__["CartProduct"], {
    key: `CartProduct_${value.id}`,
    shopCart: value,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 51
    }
  })), __jsx("div", {
    style: {
      width: '100%',
      height: '100px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 11
    }
  }))), __jsx(FixFooter, {
    boxShadow: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    variant: 'contained',
    color: 'secondary',
    fullWidth: true,
    disabled: productNumber === 0,
    onClick: () => actionsSCM.updatePageType(_index__WEBPACK_IMPORTED_MODULE_12__["pageTypeEnum"].order),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 9
    }
  }, "\u53BB\u7ED3\u7B97")), __jsx(_components_ProductItem_UpdateShopCart__WEBPACK_IMPORTED_MODULE_17__["UpdateShopCart"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 7
    }
  }))));
};

/***/ }),

/***/ "./utils/view/home/searchPage.tsx":
/*!****************************************!*\
  !*** ./utils/view/home/searchPage.tsx ***!
  \****************************************/
/*! exports provided: SearchPageModel, SearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModel", function() { return SearchPageModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPage", function() { return SearchPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_HeaderTitle_HeaderTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/HeaderTitle/HeaderTitle */ "./utils/components/HeaderTitle/HeaderTitle.tsx");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Close */ "@material-ui/icons/Close");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/lab */ "@material-ui/lab");
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons */ "@material-ui/icons");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ModelAction/modelUtil */ "./utils/ModelAction/modelUtil.ts");
/* harmony import */ var _graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../graphqlTypes/doc */ "./utils/graphqlTypes/doc/index.ts");
/* harmony import */ var _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ModelAction/useStore */ "./utils/ModelAction/useStore.ts");
/* harmony import */ var _tools_commonAction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../tools/commonAction */ "./utils/tools/commonAction.ts");
/* harmony import */ var _tools_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../tools/utils */ "./utils/tools/utils.ts");
/* harmony import */ var _tools_dealKey__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../tools/dealKey */ "./utils/tools/dealKey.ts");
/* harmony import */ var _components_ProductItem_ProductItem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/ProductItem/ProductItem */ "./utils/components/ProductItem/ProductItem.tsx");
/* harmony import */ var _components_Box_Box__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/Box/Box */ "./utils/components/Box/Box.tsx");
/* harmony import */ var _card_type___WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../card/[type] */ "./utils/view/card/[type].tsx");
/* harmony import */ var _components_ProductItem_UpdateShopCart__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/ProductItem/UpdateShopCart */ "./utils/components/ProductItem/UpdateShopCart.tsx");
var _jsxFileName = "D:\\code\\zw\\zw_client_web\\utils\\view\\home\\searchPage.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


















const SearchPageModel = Object(_ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_7__["modelFactory"])('SearchPage', {
  form: {
    keyword: ''
  },
  productList: [],
  groupProductList: [],
  promoCodePromoCodeList: [],
  darenCardPromoCodeList: [],
  user: {}
}, {
  setForm: _tools_commonAction__WEBPACK_IMPORTED_MODULE_10__["setForm"],
  getData: async (value, option) => {
    var _option$data$form$key, _res$productList$list, _res$productList, _res$groupProductList, _res$groupProductList2, _res$promoCodePromoCo, _res$darenCardPromoCo, _res$oneUser;

    const res = await option.query(_graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_8__["doc"].searchData, {
      keyword: (_option$data$form$key = option.data.form.keyword) !== null && _option$data$form$key !== void 0 ? _option$data$form$key : ''
    });
    option.setData(Object(_tools_utils__WEBPACK_IMPORTED_MODULE_11__["fpMergePre"])({
      productList: (_res$productList$list = res === null || res === void 0 ? void 0 : (_res$productList = res.productList) === null || _res$productList === void 0 ? void 0 : _res$productList.list) !== null && _res$productList$list !== void 0 ? _res$productList$list : [],
      groupProductList: (_res$groupProductList = res === null || res === void 0 ? void 0 : (_res$groupProductList2 = res.groupProductList) === null || _res$groupProductList2 === void 0 ? void 0 : _res$groupProductList2.list) !== null && _res$groupProductList !== void 0 ? _res$groupProductList : [],
      promoCodePromoCodeList: (_res$promoCodePromoCo = res === null || res === void 0 ? void 0 : res.promoCodePromoCodeList) !== null && _res$promoCodePromoCo !== void 0 ? _res$promoCodePromoCo : [],
      darenCardPromoCodeList: (_res$darenCardPromoCo = res === null || res === void 0 ? void 0 : res.darenCardPromoCodeList) !== null && _res$darenCardPromoCo !== void 0 ? _res$darenCardPromoCo : [],
      user: (_res$oneUser = res === null || res === void 0 ? void 0 : res.oneUser) !== null && _res$oneUser !== void 0 ? _res$oneUser : {}
    }));
  }
});
const SearchInput = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "searchPage__SearchInput",
  componentId: "sc-1qiodra-0"
})(["padding:0 16px;"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "searchPage__Title",
  componentId: "sc-1qiodra-1"
})(["padding:16px;font-size:18px;"]);
const ListBox = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "searchPage__ListBox",
  componentId: "sc-1qiodra-2"
})(["padding:0 16px;"]);
const SearchPage = () => {
  const {
    actions: actionsSearchPageModel,
    state: stateSearchPageModel
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_9__["useStoreModel"])(SearchPageModel);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {}, []);
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 10
    }
  }, __jsx(_components_HeaderTitle_HeaderTitle__WEBPACK_IMPORTED_MODULE_1__["HeaderTitle"], {
    title: '搜索',
    LeftIcon: _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_2___default.a,
    showCart: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 5
    }
  }), __jsx(SearchInput, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 5
    }
  }, __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_5__["Autocomplete"], {
    size: 'small',
    freeSolo: true,
    disableClearable: true,
    options: [],
    value: stateSearchPageModel.form.keyword,
    onInputChange: (event, value) => actionsSearchPageModel.setForm(['keyword', value]),
    renderInput: params => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], _extends({}, params, {
      autoFocus: true,
      margin: "normal",
      variant: "outlined",
      InputProps: {
        endAdornment: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["InputAdornment"], {
          position: 'end',
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 35
          }
        }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["IconButton"], {
          onClick: () => {
            actionsSearchPageModel.getData();
          },
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 23
          }
        }, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_6__["Search"], {
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 25
          }
        })))
      },
      onKeyUp: event => {
        if ((event === null || event === void 0 ? void 0 : event.keyCode) === 13) {
          actionsSearchPageModel.getData();
        }
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 15
      }
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  })), stateSearchPageModel.productList.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Title, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_12__["ls"])('零售商品')), __jsx(ListBox, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }
  }, stateSearchPageModel.productList.map(value => __jsx(_components_ProductItem_ProductItem__WEBPACK_IMPORTED_MODULE_13__["ProductItemOneRow"], {
    key: `productList${value.id}`,
    product: value,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 56
    }
  }))), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_14__["Space"], {
    h: 16,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Divider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }
  })), stateSearchPageModel.groupProductList.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Title, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_12__["ls"])('拼团商品')), __jsx(ListBox, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }
  }, stateSearchPageModel.groupProductList.map(value => __jsx(_components_ProductItem_ProductItem__WEBPACK_IMPORTED_MODULE_13__["GroupProductItem"], {
    key: `productList${value.id}`,
    product: value,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 61
    }
  }))), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_14__["Space"], {
    h: 16,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Divider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }
  })), stateSearchPageModel.darenCardPromoCodeList.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Title, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_12__["ls"])('达人卡')), __jsx(ListBox, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 7
    }
  }, stateSearchPageModel.darenCardPromoCodeList.map(value => Object(_card_type___WEBPACK_IMPORTED_MODULE_15__["getPromoCodeItem"])(value, stateSearchPageModel.user))), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_14__["Space"], {
    h: 16,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Divider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }
  })), stateSearchPageModel.promoCodePromoCodeList.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Title, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_12__["ls"])('优惠码')), __jsx(ListBox, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 7
    }
  }, stateSearchPageModel.promoCodePromoCodeList.map(value => Object(_card_type___WEBPACK_IMPORTED_MODULE_15__["getPromoCodeItem"])(value, stateSearchPageModel.user))), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_14__["Space"], {
    h: 16,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Divider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 7
    }
  })), __jsx(_components_ProductItem_UpdateShopCart__WEBPACK_IMPORTED_MODULE_16__["UpdateShopCart"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 5
    }
  }));
};

/***/ }),

/***/ "./utils/view/me/model.ts":
/*!********************************!*\
  !*** ./utils/view/me/model.ts ***!
  \********************************/
/*! exports provided: meModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meModel", function() { return meModel; });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tools_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../tools/utils */ "./utils/tools/utils.ts");
/* harmony import */ var _tools_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tools/token */ "./utils/tools/token.ts");
/* harmony import */ var _graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../graphqlTypes/doc */ "./utils/graphqlTypes/doc/index.ts");
/* harmony import */ var _ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ModelAction/modelUtil */ "./utils/ModelAction/modelUtil.ts");






const toLogin = async () => {
  await next_router__WEBPACK_IMPORTED_MODULE_0___default.a.push('/login');
};

const meModel = Object(_ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_4__["modelFactory"])('meModel', {
  user: {}
}, {
  getLoginUser: async (value, option) => {
    var _await$option$query;

    const res = (_await$option$query = await option.query(_graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_3__["doc"].oneUser)) === null || _await$option$query === void 0 ? void 0 : _await$option$query.oneUser;
    option.setData(Object(_tools_utils__WEBPACK_IMPORTED_MODULE_1__["fpMergePre"])({
      user: res
    }));
  },
  logout: async (value, option) => {
    Object(_tools_token__WEBPACK_IMPORTED_MODULE_2__["setToken"])('');
    Object(_tools_token__WEBPACK_IMPORTED_MODULE_2__["setToken"])('', 'refreshtoken');
    await toLogin();
  },
  toLogin: value => {
    toLogin();
  }
});

/***/ }),

/***/ 7:
/*!******************************************!*\
  !*** multi ./pages/searchPage/index.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\code\zw\zw_client_web\pages\searchPage\index.tsx */"./pages/searchPage/index.tsx");


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

/***/ "@material-ui/core/colors/red":
/*!***********************************************!*\
  !*** external "@material-ui/core/colors/red" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/red");

/***/ }),

/***/ "@material-ui/icons":
/*!*************************************!*\
  !*** external "@material-ui/icons" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons");

/***/ }),

/***/ "@material-ui/icons/AccountBox":
/*!************************************************!*\
  !*** external "@material-ui/icons/AccountBox" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AccountBox");

/***/ }),

/***/ "@material-ui/icons/Add":
/*!*****************************************!*\
  !*** external "@material-ui/icons/Add" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Add");

/***/ }),

/***/ "@material-ui/icons/AddCircleOutline":
/*!******************************************************!*\
  !*** external "@material-ui/icons/AddCircleOutline" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AddCircleOutline");

/***/ }),

/***/ "@material-ui/icons/ArrowBackIos":
/*!**************************************************!*\
  !*** external "@material-ui/icons/ArrowBackIos" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowBackIos");

/***/ }),

/***/ "@material-ui/icons/ChevronRight":
/*!**************************************************!*\
  !*** external "@material-ui/icons/ChevronRight" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ChevronRight");

/***/ }),

/***/ "@material-ui/icons/Close":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Close" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Close");

/***/ }),

/***/ "@material-ui/icons/People":
/*!********************************************!*\
  !*** external "@material-ui/icons/People" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/People");

/***/ }),

/***/ "@material-ui/icons/Redeem":
/*!********************************************!*\
  !*** external "@material-ui/icons/Redeem" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Redeem");

/***/ }),

/***/ "@material-ui/icons/Remove":
/*!********************************************!*\
  !*** external "@material-ui/icons/Remove" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Remove");

/***/ }),

/***/ "@material-ui/icons/ShoppingCart":
/*!**************************************************!*\
  !*** external "@material-ui/icons/ShoppingCart" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ShoppingCart");

/***/ }),

/***/ "@material-ui/icons/StarBorderRounded":
/*!*******************************************************!*\
  !*** external "@material-ui/icons/StarBorderRounded" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/StarBorderRounded");

/***/ }),

/***/ "@material-ui/icons/StarRounded":
/*!*************************************************!*\
  !*** external "@material-ui/icons/StarRounded" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/StarRounded");

/***/ }),

/***/ "@material-ui/icons/Storefront":
/*!************************************************!*\
  !*** external "@material-ui/icons/Storefront" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Storefront");

/***/ }),

/***/ "@material-ui/lab":
/*!***********************************!*\
  !*** external "@material-ui/lab" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab");

/***/ }),

/***/ "apollo-boost":
/*!*******************************!*\
  !*** external "apollo-boost" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "better-scroll":
/*!********************************!*\
  !*** external "better-scroll" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("better-scroll");

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

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvc2VhcmNoUGFnZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvTW9kZWxBY3Rpb24vbW9kZWxVdGlsLnRzIiwid2VicGFjazovLy8uL3V0aWxzL01vZGVsQWN0aW9uL3VzZVN0b3JlLnRzIiwid2VicGFjazovLy8uL3V0aWxzL2NsaWVudC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi91dGlscy9jb21tb25Nb2RlbC9kaWFsb2cudHMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29tcG9uZW50cy9CU2Nyb2xsL0JTY3JvbGxlci50c3giLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29tcG9uZW50cy9Cb3gvQm94LnRzeCIsIndlYnBhY2s6Ly8vLi91dGlscy9jb21wb25lbnRzL0J1dHRvbkxvYWQvQnV0dG9uTG9hZC50c3giLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29tcG9uZW50cy9Gb290QmFyL0Zvb3RCYXIudHN4Iiwid2VicGFjazovLy8uL3V0aWxzL2NvbXBvbmVudHMvSGVhZGVyVGl0bGUvSGVhZGVyVGl0bGUudHN4Iiwid2VicGFjazovLy8uL3V0aWxzL2NvbXBvbmVudHMvTWVzc2FnZS9NZXNzYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi91dGlscy9jb21wb25lbnRzL05vQXV0aC9Ob0F1dGgudHN4Iiwid2VicGFjazovLy8uL3V0aWxzL2NvbXBvbmVudHMvUHJvZHVjdEl0ZW0vUHJvZHVjdEl0ZW0udHN4Iiwid2VicGFjazovLy8uL3V0aWxzL2NvbXBvbmVudHMvUHJvZHVjdEl0ZW0vVXBkYXRlU2hvcENhcnQudHN4Iiwid2VicGFjazovLy8uL3V0aWxzL2NvbXBvbmVudHMvUmVnaXN0ZXJIZWFkZXIvUmVnaXN0ZXJIZWFkZXIudHN4Iiwid2VicGFjazovLy8uL3V0aWxzL2NvbXBvbmVudHMvU2hvcHBpbmdDYXJ0SWNvbkJ1dHRvbi9TaG9wcGluZ0NhcnRJY29uQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly8vLi91dGlscy9ncmFwaHFsVHlwZXMvZG9jL2ZyYWdtZW50LnRzIiwid2VicGFjazovLy8uL3V0aWxzL2dyYXBocWxUeXBlcy9kb2MvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvc3NfY29tbW9uL2VudW0udHMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvc3R5bGUvY29tbW9uLnRzIiwid2VicGFjazovLy8uL3V0aWxzL3Rvb2xzL2NvbW1vbkFjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi91dGlscy90b29scy9kZWFsS2V5LnRzIiwid2VicGFjazovLy8uL3V0aWxzL3Rvb2xzL2dsb2JhbC50cyIsIndlYnBhY2s6Ly8vLi91dGlscy90b29scy9pbWcudHMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvdG9vbHMvdG9rZW4udHMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvdG9vbHMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvdmlldy9jYXJkL1t0eXBlXS50c3giLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvdmlldy9jYXJ0L0NhcnRQcm9kdWN0LnRzeCIsIndlYnBhY2s6Ly8vLi91dGlscy92aWV3L2NhcnQvY29tcG9uZW50cy9JbnB1dFByb21vQ29kZS50c3giLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvdmlldy9jYXJ0L2NvbXBvbmVudHMvU2VsZWN0QWRkcmVzcy50c3giLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvdmlldy9jYXJ0L2NvbXBvbmVudHMvU2VsZWN0Q2FyZC50c3giLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvdmlldy9jYXJ0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi91dGlscy92aWV3L2NhcnQvb3JkZXJQYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi91dGlscy92aWV3L2NhcnQvc2hvcENhcnQudHN4Iiwid2VicGFjazovLy8uL3V0aWxzL3ZpZXcvaG9tZS9zZWFyY2hQYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi91dGlscy92aWV3L21lL21vZGVsLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL3JlZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9BY2NvdW50Qm94XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0FkZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9BZGRDaXJjbGVPdXRsaW5lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93QmFja0lvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9DaGV2cm9uUmlnaHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUGVvcGxlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1JlZGVlbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9SZW1vdmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2hvcHBpbmdDYXJ0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1N0YXJCb3JkZXJSb3VuZGVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1N0YXJSb3VuZGVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1N0b3JlZnJvbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvbGFiXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXBvbGxvLWJvb3N0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmV0dGVyLXNjcm9sbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNyb3NzLWZldGNoL3BvbHlmaWxsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZGF0ZS1mbnMvZm9ybWF0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoL3NldFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvY29uZmlnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zdHlsZVwiIl0sIm5hbWVzIjpbIlNlYXJjaFBhZ2UiLCJiYXNlQWN0aW9uT3B0aW9uIiwiZGF0YSIsIm11dGF0ZSIsIm5vdGljZSIsInF1ZXJ5Iiwic2V0RGF0YSIsInN0b3JlIiwibW9kZWxOYW1lTGlzdCIsIm1vZGVsRmFjdG9yeSIsIm5hbWUiLCJzdGF0ZSIsImFjdGlvbnMiLCJpbmNsdWRlcyIsIkVycm9yIiwicHVzaCIsImZldGNoTG9hZCIsImZldGNoRXJyb3IiLCJtZXJnZU1vZGVsIiwibW9kZWwiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsInZhbHVlIiwibWVyZ2VOYW1lIiwibWVyZ2VUd29Nb2RlbCIsIm1vZGVsVCIsIm1lcmdlVGhyZWVNb2RlbCIsIm1vZGVsQSIsIm1vZGVsQiIsIm1vZGVsQyIsIm1lcmdlTGlzdE1vZGVsIiwibW9kZWxMaXN0Iiwic2xpY2UiLCJyZWR1Y2UiLCJhY2MiLCJpbml0TGlzdCIsImluaXRNb2RlbCIsImluaXRTdGF0ZSIsIm9yaWdpblN0b3JlIiwiaXNGdW5jdGlvbiIsImZ1bmN0aW9uVG9DaGVjayIsInRvU3RyaW5nIiwiY2FsbCIsImRlYWxOYW1lU3BhY2UiLCJrZXkiLCJuYW1lU3BhY2UiLCJ1c2VTdG9yZU1vZGVsIiwiX2tleSIsIkFycmF5IiwiaXNBcnJheSIsInNldFN0YXRlIiwidXNlU3RhdGUiLCJjcmVhdGUiLCJ1c2VDYWxsYmFjayIsIm9sZFN0YXRlIiwibmV3RGF0YSIsInNldExvYWQiLCJmbGFnIiwicHJldlN0YXRlIiwibG9jIiwic291cmNlIiwiYm9keSIsInNldEVycm9yIiwiZXJyIiwicGFyYW1zIiwib3B0aW9uIiwicmVzIiwiZ3JhcGhRTFF1ZXJ5IiwiY2F0Y2giLCJlIiwiZmluYWxseSIsIm11dGF0aW9uIiwiZ3JhcGhRTE11dGF0ZSIsImxlbmd0aCIsImNvbnN0cnVjdG9yIiwidiIsInVzZUVmZmVjdCIsImZpbHRlciIsImdldExvYWQiLCJjb25maWciLCJnZXRDb25maWciLCJjbGllbnRfYXBpX3VyaSIsInB1YmxpY1J1bnRpbWVDb25maWciLCJvbWl0VHlwZW5hbWUiLCJ1bmRlZmluZWQiLCJnZXRDbGllbnQiLCJyZXF1ZXN0Iiwib3BlcmF0aW9uIiwidmFyaWFibGVzIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5Iiwic2V0Q29udGV4dCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiZ2V0VG9rZW4iLCJyZWZyZXNoVG9rZW4iLCJkb2MiLCJ0aGVuIiwidG9rZW4iLCJzZXRUb2tlbiIsInJlZnJlc2h0b2tlbiIsInNob3dNZXNzYWdlIiwibWVzc2FnZSIsIlJvdXRlciIsInJlbG9hZCIsInNzTG9nIiwib25FcnJvciIsInJlc3BvbnNlIiwiZ3JhcGhRTEVycm9ycyIsIm5ldHdvcmtFcnJvciIsImxvY2F0aW9ucyIsInBhdGgiLCJleHRlbnNpb25zIiwiY29kZSIsInNwbGl0IiwibXNnX3R5cGUiLCJlcnJNc2ciLCJib2R5VGV4dCIsInJlc3VsdCIsImVycm9yIiwic3RhdHVzQ29kZSIsIkFwb2xsb0NsaWVudCIsInVyaSIsImRlZmF1bHRDbGllbnQiLCJkZWFsUGFyYW1zIiwiY2xpZW50IiwiX2RlYWxQYXJhbXNJbiIsImRlYWxQYXJhbXNJbiIsImZldGNoUG9saWN5Iiwic2VydmVyQ2xpZW50Iiwic2VydmVyUXVlcnkiLCJzZXJ2ZXJNdXRhdGUiLCJkaWFsb2dNb2RlbEZhY3RvcnkiLCJpbml0RGF0YSIsImRpYWxvZ0RhdGEiLCJvcGVuIiwiaXNFZGl0Iiwib3BlblJlc29sdmUiLCJvcGVuQ2xpY2siLCJQcm9taXNlIiwicmVzb2x2ZSIsInByZURhdGEiLCJmcE1lcmdlIiwib3BlbkVkaXRDbGljayIsInByZSIsImluZGV4Iiwib25DbG9zZSIsImZwU2V0Iiwic2V0ZGlhbG9nIiwiYlNjcm9sbE1vZGVsIiwic2Nyb2xsIiwic2V0U2Nyb2xsIiwiZnBNZXJnZVByZSIsIkJTY3JvbGxlciIsImlzWCIsImNoaWxkcmVuIiwiYm94SGVpZ2h0IiwiYm94V2lkdGgiLCJic1N0YXRlIiwiYnNBY3Rpb25zIiwic2Nyb2xsUmVmIiwidXNlUmVmIiwiQmV0dGVyU2Nyb2xsIiwiY3VycmVudCIsImNsaWNrIiwic2Nyb2xsWSIsInRhcHMiLCJzY3JvbGxYIiwicHJldmVudERlZmF1bHRFeGNlcHRpb24iLCJ0YWdOYW1lIiwiY2xhc3NOYW1lIiwic3RvcCIsImRlc3Ryb3kiLCJkaXNwbGF5IiwiQm94Iiwic3R5bGVkIiwiZGl2IiwiU3BhY2UiLCJoIiwidyIsImMiLCJiYWNrZ3JvdW5kIiwid2lkdGgiLCJoZWlnaHQiLCJCdXR0b25Mb2FkIiwicHJvcHMiLCJsb2FkaW5nIiwiZGlzYWJsZWQiLCJGb290QmFyIiwicm91dGVyIiwidXNlUm91dGVyIiwiaXNBY3QiLCJwYXRobmFtZSIsIm1wU3R5bGUiLCJyZWQiLCJBcHBGb290QmFyIiwiaG9tZSIsImdyb3VwIiwiY2FyZCIsIm1lIiwibWFwIiwiQ29udGFpbiIsIkxlZnRJY29uQnV0dG9uIiwiSWNvbkJ1dHRvbiIsIkFjdGlvbiIsIkhlYWRlclRpdGxlIiwidGl0bGUiLCJiYWNrQ2FsbCIsInNob3dDYXJ0IiwiTGVmdEljb24iLCJBcnJvd0JhY2tJb3NJY29uIiwiaGlkZUxlZnQiLCJzaG93U2VhcmNoIiwidmlzaWJpbGl0eSIsImJhY2siLCJscyIsInR5cGVIZWxwIiwiZGVmYXVsdCIsImdyZXkiLCJzdWNjZXNzIiwiZ3JlZW4iLCJ3YXJuaW5nIiwiYW1iZXIiLCJpbmZvIiwiYmx1ZSIsImdldFR5cGUiLCJ0eXBlIiwiQ3VzU25hY2tiYXIiLCJTbmFja2JhciIsImNvbW1vbiIsIndoaXRlIiwibWVzc2FnZU1vZGVsIiwiYXV0b0hpZGVEdXJhdGlvbiIsIk1lc3NhZ2UiLCJtU3RhdGUiLCJFbXB0eSIsImRlYWxOb0F1dGgiLCJvdGhlcnMiLCJzdGF0ZU1lIiwiYWN0aW9uc01lIiwibWVNb2RlbCIsInVzZXIiLCJpZCIsImdldExvZ2luVXNlciIsInRvTG9naW4iLCJwcm9kdWN0TW9kZWwiLCJ1cGRhdGVOdW1TaG9wQ2FydCIsInNob3BDYXJ0IiwibnVtYmVyIiwidXBkYXRlTnVtIiwidXBkYXRlU2hvcENhcnQiLCJDYXJkIiwiUHJvZHVjdFByaWNlIiwicHJvZHVjdCIsInByaWNlT3V0VGlwIiwiZm9udFNpemUiLCJ0ZXh0RGVjb3JhdGlvbiIsImZsZXhTaHJpbmsiLCJkZWFsTW9uZXkiLCJwcmljZU1hcmtldCIsIm1hcmdpbkxlZnQiLCJjb2xvciIsInByaWNlT3V0IiwiUHJvZHVjdEl0ZW0iLCJhY3Rpb25zVXBkYXRlU2hvcENhcnRNb2RlbCIsInVwZGF0ZVNob3BDYXJ0TW9kZWwiLCJhY3Rpb25zU2hvcENhcnQiLCJzaG9wQ2FydE1vZGVsIiwiYWN0aW9uc1BNIiwiZGVhbEltZ1VybCIsImltZyIsInVybCIsIndlaWdodCIsInVuaXQiLCJudW0iLCJnZXRMaXN0IiwiUm93Qm94Iiwic2hhZG93IiwiSW1nIiwiTGVmdEJveCIsIlRpcCIsIlByaWNlIiwiQnVuIiwiUHJvZHVjdEl0ZW1PbmVSb3ciLCJzdW1PcmRlclRpcCIsImhpZGVBY3Rpb24iLCJzaG93U3VtT3JkZXIiLCJzdW1PcmRlciIsIkdyb3VwQm94IiwiR3JvdXBJbWciLCJSaWdodEJveCIsIlRpdGxlIiwiTWFya2V0UHJpY2UiLCJPdXRQcmljZSIsIlN0YXIiLCJPcmRlclRpcCIsIkdyb3VwUHJvZHVjdEl0ZW0iLCJncm91cFF1ZXVlIiwiZ3JvdXBSZW1hcmsiLCJncm91cEFtb3VudCIsImdyb3VwQW1vdW50VW5pdFN0cmluZyIsImdyb3VwUHJlY2lzaW9uU3RyaW5nIiwiZ3JvdXBQcmVjaXNpb24iLCJpIiwic3VtRmlsbEFtb3VudCIsImZvcm0iLCJzZXRGb3JtIiwiRm9vdGVyIiwiVXBkYXRlU2hvcENhcnQiLCJzdGF0ZVVwZGF0ZVNob3BDYXJ0TW9kZWwiLCJldmVudCIsInRhcmdldCIsIkhlYWRlciIsIlJlZ2lzdGVySGVhZGVyIiwiU2hvcHBpbmdDYXJ0SWNvbkJ1dHRvbiIsImh0bWxDb2xvciIsInN0YXRlU2hvcENhcnQiLCJjYXJ0IiwiZGVhbFByb2R1Y3ROdW1iZXIiLCJmcmFnbWVudCIsIkNhdGVnb3J5RmllbGRzIiwiZ3FsIiwiVXNlckZpZWxkcyIsIlVzZXJJbmZvRmllbGRzIiwiT3JkZXJJbmZvRmllbGRzIiwiUk9yZGVyUHJvZHVjdEZpZWxkcyIsIlByb2R1Y3RGaWVsZHMiLCJJbWdGaWVsZHMiLCJVc2VyQWRkcmVzc0ZpZWxkcyIsIlVzZXJQYXlDYXJkRmllbGRzIiwiU2hvcENhcnRGaWVsZHMiLCJEYXRhQ29uZmlnRmllbGRzIiwiRGljdEZpZWxkcyIsIkdyb3VwUXVldWVGaWVsZHMiLCJHcm91cE9yZGVyRmllbGRzIiwiUHJvbW9Db2RlRmllbGRzIiwiZ2V0VXNlckxpc3REb2MiLCJnZXREYXRhQ29uZmlnIiwiaG9tZUNhcm91c2VsSW1ncyIsImNhdGVnb3J5TGlzdCIsInJlZ2lzdGVyVXNlciIsImxvZ2luIiwib25lVXNlciIsIm9yZGVyTGlzdCIsIm9yZGVyRGV0YWlsIiwiRGljdFR5cGVFbnVtIiwiU2VsZkFkZHJlc3MiLCJ1cGRhdGVQYXNzd29yZCIsInBheUNhcmRMaXN0T25lVXNlciIsInVzZXJQYXlDYXJkIiwic2F2ZVVzZXJQYXlDYXJkIiwic2V0VXNlclBheUNhcmREZWZhdWx0IiwicGlja3VwQWRkcmVzcyIsInVwZGF0ZVVzZXJJbmZvIiwidXNlckFkZHJlc3NMaXN0T25lVXNlciIsInVzZXJBZGRyZXNzIiwic2F2ZVVzZXJBZGRyZXNzIiwic2V0VXNlckFkZHJlc3NEZWZhdWx0IiwicHJvZHVjdHNJbkNhdGVnb3J5IiwiY2F0ZWdvcnlMZXZlbCIsIm9uZUNhdGVnb3J5IiwicHJvZHVjdExpc3QiLCJ1c2VyU2hvcENhcnRMaXN0Iiwib3JkZXJDb25maXJtSW5mbyIsIkZyZWlnaHQiLCJzYXZlT3JkZXIiLCJkaWN0TGlzdCIsImxpbWl0VGltZURhdGEiLCJQcm9tb3Rpb25GbGFzaFNhbGUiLCJwcm9kdWN0TGlzdEJ5SWRzIiwiZ3JvdXBRdWV1ZUxpc3QiLCJ1cGRhdGVPcmRlciIsInNhdmVHcm91cE9yZGVyIiwicHJvbW9Db2RlTGlzdCIsImNhdGVnb3J5Um9vdFBhcmVudCIsInByb2R1Y3RMaXN0T3JkZXJCeU9yZGVyIiwic2VhcmNoRGF0YSIsIlByb21vQ29kZVR5cGVFbnVtIiwiRGFyZW5DYXJkIiwiUHJvbW9Db2RlIiwiRGlzY291bnRUeXBlRW51bSIsIlNTIiwiRGlzY291bnRDb25kaXRpb25FbnVtIiwiUHJvZHVjdFN1cHBsZW1lbnQiLCJQcm9kdWN0U3VwcGxlbWVudFN0cmluZyIsIk9yZGVyU3RhdGUiLCJfcyIsIm9yZGVyU3RhdGVUb1N0cmluZyIsInMiLCJSZWxhdGVkT2JqVHlwZUVudW0iLCJBcHBNb2R1bGVUeXBlRW51bSIsIkNhdGVnb3J5Um9vdE5hbWUiLCJvcmRlclN0YXRlS2V5cyIsInZhbHVlcyIsIlByb3ZpbmNlRGF0YSIsImdldFBpY2tVcFR5cGVOYW1lIiwiU2VsZiIsIkRlbGl2ZXJ5IiwiUGlja1VwVHlwZUVudW0iLCJTYWxlUmFua1R5cGVFbnVtIiwiT25lRGF5IiwiT25lV2VlayIsIk9uZU1vbnRoIiwiZnBTZXRQcmUiLCJpc0RldiIsImNvbnNvbGUiLCJsb2ciLCJpbWdEb21haW4iLCJzcmMiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZ2V0SXRlbSIsImdldE9iamVjdFVSTCIsImZpbGUiLCJ3aW5kb3ciLCJjcmVhdGVPYmplY3RVUkwiLCJVUkwiLCJ3ZWJraXRVUkwiLCJwYXJzZUZsb2F0Rm9ySW5wdXQiLCJwYXJzZUZsb2F0Iiwib3JpZ2luIiwiY2xvbmVEZWVwIiwib2xkRGF0YSIsImdldCIsInNldCIsImRlbGF5IiwidGltZSIsInNldFRpbWVvdXQiLCJjdXN0b21pemVyIiwib2JqVmFsdWUiLCJzcmNWYWx1ZSIsIm5ld1ZhbHVlIiwibWVyZ2VXaXRoIiwiZnBSZW1vdmUiLCJhcnIiLCJkZWFsTnVtYmVyWmVybyIsImZpbGwiLCJqb2luIiwiZm9ybWF0RGF0ZSIsImRhdGUiLCJmb3JtYXRTdHJpbmciLCJpc1N0cmluZyIsImZvcm1hdCIsIkRhdGUiLCJ1c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zIiwidXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zIiwiaXNOYU4iLCJkZWFsTm9uQm9vbGVhblByb3BzIiwiZm9ybWF0TW9uZXkiLCJhbW91bnQiLCJkZWNpbWFsQ291bnQiLCJkZWNpbWFsIiwidGhvdXNhbmRzIiwiTWF0aCIsImFicyIsIm5lZ2F0aXZlU2lnbiIsInBhcnNlSW50IiwiTnVtYmVyIiwidG9GaXhlZCIsImoiLCJzdWJzdHIiLCJyZXBsYWNlIiwiZGVhbE1heWJlTnVtYmVyIiwiZGVhbFVybFF1ZXJ5IiwicXVlcnlPYmoiLCJjYXJkTW9kZWwiLCJNYWluQm94IiwiQ2FyZEJveCIsIlJlbWFyayIsIlRpbWUiLCJDYXJkQm94UHJvbW9Db2RlIiwicCIsIkNvZGVCb3giLCJnZXRQcm9tb0NvZGVJdGVtIiwiaXRlbSIsInByb21vQ29kZVR5cGUiLCJpbWdVcmwiLCJyZW1hcmsiLCJlZmZlY3RpdmVEYXRlU3RhcnQiLCJlZmZlY3RpdmVEYXRlRW5kIiwiQ2FyZFR5cGUiLCJzdGF0ZUNhcmRNb2RlbCIsImFjdGlvbnNDYXJkTW9kZWwiLCJTaG9wQ2FydFByb2R1Y3RCb3giLCJDYXJ0UHJvZHVjdCIsImFjdGlvbnNTQ00iLCJzdGF0ZVNDTSIsImlzTmV4dCIsIm1hcmdpblJpZ2h0IiwiaXNEZWxldGUiLCJpbnB1dFByb21vQ29kZU1vZGVsIiwicHJvbW9Db2RlIiwiSW5wdXRQcm9tb0NvZGVEaWFsb2ciLCJhY3Rpb25zSW5wdXRQcm9tb0NvZGVNb2RlbCIsInN0YXRlSW5wdXRQcm9tb0NvZGVNb2RlbCIsInRlc3RSZXMiLCJzZWxlY3RBZGRyZXNzTW9kZWwiLCJBZGRyZXNzQm94IiwiU2VsZWN0QWRkcmVzcyIsInN0YXRlU0FNIiwiYWN0aW9uc1NBTSIsInN0YXRlU2hvcENhcnRNb2RlbCIsImFjdGlvbnNTaG9wQ2FydE1vZGVsIiwiYWRkcmVzc0xpc3QiLCJkZWFsQWRkcmVzc0xpc3QiLCJjb21iaW5lQWRkcmVzcyIsImNvbnRhY3RJbmZvcm1hdGlvbiIsImFkZHJlc3NJZCIsInBpY2tVcFR5cGUiLCJzZWxlY3RDYXJkTW9kZWwiLCJTZWxlY3RDYXJkIiwic3RhdGVTZWxlY3RDYXJkIiwiYWN0aW9uc1NlbGVjdENhcmQiLCJwYXlDYXJkTGlzdCIsInBheW1lbnRNZXRob2RDYXJkSWQiLCJwYWdlVHlwZUVudW0iLCJvcmRlciIsImluaXRGb3JtIiwiZGVkdWN0Q29pbiIsInNhbGVUYXgiLCJ0cmFuc3BvcnRhdGlvbkNvc3RzIiwiY291cG9uRGlzY291bnQiLCJwcm9tb0NvZGVFcnJvciIsInVzZXJBZGRyZXNzTGlzdCIsInNlbGZBZGRyZXNzIiwiZnJlaWdodENvbmZpZyIsInVzZXJMZXZlbExpc3QiLCJwYWdlVHlwZSIsInNob3BDYXJ0TGlzdCIsInNob3BDYXJ0TGlzdE5leHQiLCJjdXIiLCJwcm92aW5jZSIsImNpdHkiLCJzdHJlZXRBZGRyZXNzIiwiZnVsbE5hbWUiLCJwaG9uZSIsImRlYWxBZGRyZXNzRGF0YSIsImZpbmQiLCJpbml0QWRkcmVzc0lkIiwiaXNEZWZhdWx0IiwiZGVhbFByb2R1Y3RUb3RhbCIsImRlYWxUcmFuc3BvcnRhdGlvbkNvc3RzIiwicHJvZHVjdFRvdGFsIiwiZnJlaWdodFBheSIsIm9yZGVyTWF4IiwiY2xlYXJEYXRhIiwiY2xlYXJGb3JtIiwidXNlclJlcyIsImRlYWxQcm9tb0NvZGUiLCJwcm9tb0NvZGVJdGVtSW5wdXQiLCJ1cGRhdGVQYWdlVHlwZSIsInVwZGF0ZVBheUNhcmRMaXN0IiwiZ2V0T3JkZXJJbmZvIiwibGlzdCIsImZyZWlnaHRMaXN0Iiwic3VibWl0Iiwib3JkZXJJbmZvSXRlbUlucHV0IiwidGVzdFByb21vQ29kZSIsIkNhcnRQYWdlIiwiU2hvcFRpdGxlIiwiU2hvcFRvdGFsIiwiRm9vdGVyRml0IiwiT3JkZXJQYWdlIiwiYWRkcmVzc0RhdGEiLCJjYXJkRGF0YSIsImFjdHVhbGx5UGFpZCIsImdlbmVyYXRlQ29pbiIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib3JkZXJDb2luQ3VycmVudE1vbnRoIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwidXNlckluZm8iLCJ1c2VyTGV2ZWwiLCJzdWJtaXREYXRhIiwic3VidG90YWwiLCJjdXJyZW50VXNlckxldmVsIiwick9yZGVyUHJvZHVjdCIsImNvdW50IiwicHJvZHVjdElkIiwiX3F1ZXJ5Iiwib3JkZXJJZCIsIkJveENvbnRhaW4iLCJzZWN0aW9uIiwiTW9uZXkiLCJGaXhGb290ZXIiLCJTaG9wQ2FydFBhZ2UiLCJwcm9kdWN0TnVtYmVyIiwicHJvZHVjdFN1YnRvdGFsIiwiZGlzY291bnRQcm9kdWN0IiwiY2F0ZWdvcnkiLCJwYXJlbnRDYXRlZ29yeSIsInByb2R1Y3RDYXRlZ29yeSIsImRpc2NvdW50UHJvZHVjdEFtb3VudCIsInByZXZpb3VzVmFsdWUiLCJjdXJyZW50VmFsdWUiLCJkaXNjb3VudEFtb3VudEZvclByb21vQ29kZSIsImRpc2NvdW50Q29uZGl0aW9uIiwiTm8iLCJBbW91bnQiLCJkaXNjb3VudENvbmRpdGlvbkFtb3VudCIsImRpc2NvdW50VHlwZSIsImRpc2NvdW50QW1vdW50IiwiYWxsVG90YWwiLCJDbG9zZUljb24iLCJwYWRkaW5nVG9wIiwidGV4dEFsaWduIiwiU2VhcmNoUGFnZU1vZGVsIiwia2V5d29yZCIsImdyb3VwUHJvZHVjdExpc3QiLCJwcm9tb0NvZGVQcm9tb0NvZGVMaXN0IiwiZGFyZW5DYXJkUHJvbW9Db2RlTGlzdCIsImdldERhdGEiLCJTZWFyY2hJbnB1dCIsIkxpc3RCb3giLCJhY3Rpb25zU2VhcmNoUGFnZU1vZGVsIiwic3RhdGVTZWFyY2hQYWdlTW9kZWwiLCJlbmRBZG9ybm1lbnQiLCJrZXlDb2RlIiwibG9nb3V0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBQTtBQUVlQSxxSUFBZixFOzs7Ozs7Ozs7Ozs7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QUEsaUQ7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsNkMiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHNlYXJjaFBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNyk7XG4iLCJpbXBvcnQge1NlYXJjaFBhZ2V9IGZyb20gJy4uLy4uL3V0aWxzL3ZpZXcvaG9tZS9zZWFyY2hQYWdlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoUGFnZVxyXG4iLCJcclxudHlwZSBNb2RlbEZhY3Rvcnk8TiA9ICcnPiA9IDxULCBFIGV4dGVuZHMgTW9kZWxBY3Rpb25PYmpIZWxwPGFueSwgVCAmIEZldGNoT2JqPj4obmFtZTogc3RyaW5nLCBzdGF0ZTogVCwgYWN0aW9uczogRSkgPT4gTW9kZWxEYXRhPFQgJiBGZXRjaE9iaiwgRT5cclxuXHJcbmV4cG9ydCBjb25zdCBiYXNlQWN0aW9uT3B0aW9uOiBCYXNlTW9kZWxBY3Rpb25PcHRpb24gPSB7XHJcbiAgZGF0YTogbnVsbCxcclxuICBtdXRhdGU6ICgpID0+IHt9LFxyXG4gIG5vdGljZTogKCkgPT4ge30sXHJcbiAgcXVlcnk6ICgpID0+IHt9LFxyXG4gIHNldERhdGE6ICgpID0+IHt9LFxyXG4gIHN0b3JlOiB7fVxyXG59XHJcblxyXG5jb25zdCBtb2RlbE5hbWVMaXN0OnN0cmluZ1tdID0gW11cclxuZXhwb3J0IGNvbnN0IG1vZGVsRmFjdG9yeTogTW9kZWxGYWN0b3J5ID0gKG5hbWUsIHN0YXRlLCBhY3Rpb25zKSA9PiB7XHJcbiAgaWYgKG1vZGVsTmFtZUxpc3QuaW5jbHVkZXMobmFtZSkpIHtcclxuICAgIHRocm93IEVycm9yKGBtb2RlbCBOYW1lIGR1cGxpY2F0ZTogJHtuYW1lfWApXHJcbiAgfVxyXG4gIG1vZGVsTmFtZUxpc3QucHVzaChuYW1lKVxyXG4gIHJldHVybiB7XHJcbiAgICBuYW1lLFxyXG4gICAgc3RhdGU6IHtcclxuICAgICAgLi4uc3RhdGUsXHJcbiAgICAgIGZldGNoTG9hZDoge30sXHJcbiAgICAgIGZldGNoRXJyb3I6IHt9LFxyXG4gICAgfSxcclxuICAgIGFjdGlvbnMsXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VNb2RlbDxBIGV4dGVuZHMgRmV0Y2hPYmosIEIgZXh0ZW5kcyBNb2RlbEFjdGlvbk9iakhlbHA8YW55LCBBPiwgQywgRCBleHRlbmRzIE1vZGVsQWN0aW9uT2JqSGVscDxhbnksIEEgJiBDPj4obW9kZWw6IHtcclxuICBzdGF0ZTogQVxyXG4gIGFjdGlvbnM6IEJcclxuICBuYW1lOiBzdHJpbmdcclxufSwgbmFtZTogc3RyaW5nLCBzdGF0ZTogQywgYWN0aW9uczogRCk6IHtcclxuICBzdGF0ZTogQSAmIENcclxuICBhY3Rpb25zOiBCICYgRCAmIHtcclxuICAgIFtrZXkgaW4ga2V5b2YgQl06IE1vZGVsQWN0aW9uPGFueSwgQT5cclxuICB9ICYge1xyXG4gICAgW2tleSBpbiBrZXlvZiBEXTogTW9kZWxBY3Rpb248YW55LCBBICYgQz5cclxuICB9XHJcbiAgbmFtZTogc3RyaW5nXHJcbn0ge1xyXG4gIE9iamVjdC5rZXlzKG1vZGVsLnN0YXRlKS5mb3JFYWNoKHZhbHVlID0+IHtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIGlmIChzdGF0ZT8uW3ZhbHVlXSAmJiAhWydmZXRjaEVycm9yJywgJ2ZldGNoTG9hZCddLmluY2x1ZGVzKHZhbHVlKSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYG1lcmdlTW9kZWw6IHN0YXRlIGR1cGxpY2F0ZTo6IGtleSAke3ZhbHVlfWApXHJcbiAgICB9XHJcbiAgfSlcclxuICBPYmplY3Qua2V5cyhtb2RlbC5hY3Rpb25zKS5mb3JFYWNoKHZhbHVlID0+IHtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIGlmIChhY3Rpb25zPy5bdmFsdWVdKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgbWVyZ2VNb2RlbDogYWN0aW9uIGR1cGxpY2F0ZTo6IGtleSAke3ZhbHVlfWApXHJcbiAgICB9XHJcbiAgfSlcclxuICBjb25zdCBtZXJnZU5hbWUgPSBgJHtuYW1lfV93aXRoXyR7bW9kZWwubmFtZX1gXHJcbiAgaWYgKG1vZGVsTmFtZUxpc3QuaW5jbHVkZXMobWVyZ2VOYW1lKSkge1xyXG4gICAgdGhyb3cgRXJyb3IoYG1vZGVsIE5hbWUgZHVwbGljYXRlOiAke21lcmdlTmFtZX1gKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIG5hbWU6IG1lcmdlTmFtZSxcclxuICAgIHN0YXRlOiB7XHJcbiAgICAgIC4uLm1vZGVsLnN0YXRlLFxyXG4gICAgICAuLi5zdGF0ZSxcclxuICAgIH0sXHJcbiAgICBhY3Rpb25zOiB7XHJcbiAgICAgIC4uLm1vZGVsLmFjdGlvbnMsXHJcbiAgICAgIC4uLmFjdGlvbnMsXHJcbiAgICB9LFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlVHdvTW9kZWw8QSwgQiBleHRlbmRzIE1vZGVsQWN0aW9uT2JqSGVscDxhbnksIEE+LCBDLCBEIGV4dGVuZHMgTW9kZWxBY3Rpb25PYmpIZWxwPGFueSwgQz4+KG1vZGVsOiB7XHJcbiAgc3RhdGU6IEFcclxuICBhY3Rpb25zOiBCXHJcbiAgbmFtZTogc3RyaW5nXHJcbn0sIG1vZGVsVDoge1xyXG4gIHN0YXRlOiBDXHJcbiAgYWN0aW9uczogRFxyXG4gIG5hbWU6IHN0cmluZ1xyXG59KToge1xyXG4gIG5hbWU6IHN0cmluZ1xyXG4gIHN0YXRlOiBBICYgQ1xyXG4gIGFjdGlvbnM6IEIgJiBEICYge1xyXG4gICAgW2tleSBpbiBrZXlvZiBCXTogTW9kZWxBY3Rpb25cclxuICB9ICYge1xyXG4gICAgW2tleSBpbiBrZXlvZiBEXTogTW9kZWxBY3Rpb25cclxuICB9XHJcbn0ge1xyXG4gIE9iamVjdC5rZXlzKG1vZGVsLnN0YXRlKS5mb3JFYWNoKHZhbHVlID0+IHtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIGlmIChtb2RlbFQuc3RhdGU/Llt2YWx1ZV0gJiYgIVsnZmV0Y2hFcnJvcicsICdmZXRjaExvYWQnXS5pbmNsdWRlcyh2YWx1ZSkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBtZXJnZVR3b01vZGVsOiBzdGF0ZSBkdXBsaWNhdGU6OiBrZXkgJHt2YWx1ZX1gKVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgT2JqZWN0LmtleXMobW9kZWwuYWN0aW9ucykuZm9yRWFjaCh2YWx1ZSA9PiB7XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBpZiAobW9kZWxUPy5hY3Rpb25zPy5bdmFsdWVdKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgbWVyZ2VUd29Nb2RlbDogYWN0aW9uIGR1cGxpY2F0ZTo6IGtleSAke3ZhbHVlfWApXHJcbiAgICB9XHJcbiAgfSlcclxuICBjb25zdCBtZXJnZU5hbWUgPSBgJHttb2RlbC5uYW1lfV9hbmRfJHttb2RlbFQubmFtZX1gXHJcbiAgaWYgKG1vZGVsTmFtZUxpc3QuaW5jbHVkZXMobWVyZ2VOYW1lKSkge1xyXG4gICAgdGhyb3cgRXJyb3IoYG1vZGVsIE5hbWUgZHVwbGljYXRlOiAke21lcmdlTmFtZX1gKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIG5hbWU6IG1lcmdlTmFtZSxcclxuICAgIHN0YXRlOiB7XHJcbiAgICAgIC4uLm1vZGVsLnN0YXRlLFxyXG4gICAgICAuLi5tb2RlbFQuc3RhdGUsXHJcbiAgICB9LFxyXG4gICAgYWN0aW9uczoge1xyXG4gICAgICAuLi5tb2RlbC5hY3Rpb25zLFxyXG4gICAgICAuLi5tb2RlbFQuYWN0aW9ucyxcclxuICAgIH0sXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbWVyZ2VUaHJlZU1vZGVsID0gPEEgZXh0ZW5kcyBGZXRjaE9iaiwgVCBleHRlbmRzIE1vZGVsQWN0aW9uT2JqSGVscDxhbnksIEE+LCBCIGV4dGVuZHMgRmV0Y2hPYmosIE8gZXh0ZW5kcyBNb2RlbEFjdGlvbk9iakhlbHA8YW55LCBCPiwgQyBleHRlbmRzIEZldGNoT2JqLCBQIGV4dGVuZHMgTW9kZWxBY3Rpb25PYmpIZWxwPGFueSwgQz4+KG1vZGVsQTogTW9kZWxEYXRhPEEsIFQ+LCBtb2RlbEI6IE1vZGVsRGF0YTxCLCBPPiwgbW9kZWxDOiBNb2RlbERhdGE8QywgUD4pOiB7XHJcbiAgbmFtZTogc3RyaW5nXHJcbiAgc3RhdGU6IEEgJiBCICYgQ1xyXG4gIGFjdGlvbnM6IFQgJiBPICYgUCAmIHtcclxuICAgIFtrZXkgaW4ga2V5b2YgVF06IE1vZGVsQWN0aW9uXHJcbiAgfSAmIHtcclxuICAgIFtrZXkgaW4ga2V5b2YgT106IE1vZGVsQWN0aW9uXHJcbiAgfSAmIHtcclxuICAgIFtrZXkgaW4ga2V5b2YgUF06IE1vZGVsQWN0aW9uXHJcbiAgfVxyXG59ID0+IHtcclxuICByZXR1cm4gbWVyZ2VUd29Nb2RlbChtZXJnZVR3b01vZGVsKG1vZGVsQSwgbW9kZWxCKSwgbW9kZWxDKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbWVyZ2VMaXN0TW9kZWwgPSAobW9kZWxMaXN0OiBNb2RlbERhdGE8YW55LCBhbnk+W10pID0+IHtcclxuICByZXR1cm4gbW9kZWxMaXN0LnNsaWNlKDEpLnJlZHVjZSgoYWNjLCBtb2RlbCkgPT4gbWVyZ2VUd29Nb2RlbChhY2MsIG1vZGVsKSwgbW9kZWxMaXN0WzBdKVxyXG59XHJcblxyXG5jb25zdCBpbml0TGlzdDogc3RyaW5nW10gPSBbXVxyXG5leHBvcnQgY29uc3QgaW5pdE1vZGVsID0gPFQgZXh0ZW5kcyBGZXRjaE9iaiwgRSBleHRlbmRzIE1vZGVsQWN0aW9uT2JqSGVscDxhbnksIFQ+Pihtb2RlbDogTW9kZWxEYXRhPFQsIEU+LCBpbml0U3RhdGU6IFBhcnRpYWw8VD4pID0+IHtcclxuICBpZiAoaW5pdExpc3QuaW5jbHVkZXMobW9kZWwubmFtZSkpIHJldHVyblxyXG4gIGluaXRMaXN0LnB1c2gobW9kZWwubmFtZSlcclxuICBtb2RlbC5zdGF0ZSA9IHtcclxuICAgIC4uLm1vZGVsLnN0YXRlLFxyXG4gICAgLi4uaW5pdFN0YXRlLFxyXG4gIH1cclxufVxyXG5cclxuLy8gY29uc3QgbW9kZWwgPSBtb2RlbEZhY3Rvcnkoe30sIHtcclxuLy8gICBzczoge1xyXG4vLyAgICAgZWVlOiAodmFsdWU6IHN0cmluZywgb3B0aW9uKSA9PiB7XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4vLyB9KVxyXG4vL1xyXG4vLyB1c2VTdG9yZU1vZGVsKE1vZHVsZUVudW0uVGVzdCwgbW9kZWwpLmFjdGlvbnMuc3MuZWVlKCcnKVxyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIG1lcmdlSW50b01vZGVsKG9yaWdpbk1vZGVsLCBuYW1lLCBpbm5lck1vZGVsKSB7XHJcbi8vXHJcbi8vIH1cclxuXHJcbi8vIGNvbnN0IF9tb2RlbCA9IG1lcmdlVHdvTW9kZWwobW9kZWxGYWN0b3J5KHtcclxuLy8gICB0MTogJydcclxuLy8gfSwge1xyXG4vLyB9KSwgbW9kZWxGYWN0b3J5KHtcclxuLy8gICB0MzogJydcclxuLy8gfSwge1xyXG4vLyB9KSlcclxuLy9cclxuLy8gbWVyZ2VNb2RlbChfbW9kZWwsIHtcclxuLy8gICB0MjogJydcclxuLy8gfSwge1xyXG4vLyB9KVxyXG4iLCJpbXBvcnQge3VzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQge2dyYXBoUUxNdXRhdGUsIGdyYXBoUUxRdWVyeX0gZnJvbSAnLi4vY2xpZW50J1xyXG5pbXBvcnQge2Jhc2VBY3Rpb25PcHRpb259IGZyb20gJy4vbW9kZWxVdGlsJ1xyXG5cclxuZXhwb3J0IGNvbnN0IG9yaWdpblN0b3JlOiBPcmlnaW5TdG9yZSA9IHt9XHJcblxyXG5jb25zdCBpc0Z1bmN0aW9uID0gKGZ1bmN0aW9uVG9DaGVjazogYW55KSA9PiB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uVG9DaGVjayAmJiB7fS50b1N0cmluZy5jYWxsKGZ1bmN0aW9uVG9DaGVjaykgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSdcclxufVxyXG5cclxudHlwZSBTdG9yZVN0YXRlUmVzdWx0PFQsIEUgZXh0ZW5kcyBNb2RlbEFjdGlvbk9iakhlbHA8YW55LCBUPj4gPSBNb2RlbFJlc3VsdDxULCBFPiAmIHtcclxuICBzdG9yZTogT3JpZ2luU3RvcmVcclxuICBnZXRMb2FkOiAocXVlcnk6IGFueSkgPT4gbnVtYmVyXHJcbn1cclxuXHJcbnR5cGUgVXNlTW9kZWxTdGF0ZSA9IDxUIGV4dGVuZHMgRmV0Y2hPYmosIEUgZXh0ZW5kcyBNb2RlbEFjdGlvbk9iakhlbHA8YW55LCBUPj4obW9kZWw6IE1vZGVsRGF0YTxULCBFPiwga2V5Pzogc3RyaW5nIHwgW3N0cmluZywgc3RyaW5nXSkgPT4gU3RvcmVTdGF0ZVJlc3VsdDxULCBFPlxyXG5cclxuZXhwb3J0IGNvbnN0IGRlYWxOYW1lU3BhY2UgPSAoa2V5OiBzdHJpbmcsIG5hbWVTcGFjZTogc3RyaW5nKSA9PiB7XHJcbiAgaWYgKG5hbWVTcGFjZSkge1xyXG4gICAgcmV0dXJuIGAke2tleX1fJHtuYW1lU3BhY2V9YFxyXG4gIH1cclxuICByZXR1cm4gYCR7a2V5fWBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVN0b3JlTW9kZWw6IFVzZU1vZGVsU3RhdGUgPSAobW9kZWwsIGtleT86IHN0cmluZyB8IFtzdHJpbmcsIHN0cmluZ10pID0+IHtcclxuICBjb25zdCBfa2V5ID0gbW9kZWwubmFtZSA/PyAoIWtleSA/ICcnIDogQXJyYXkuaXNBcnJheShrZXkpID8gZGVhbE5hbWVTcGFjZShrZXlbMF0sIGtleVsxXSkgOiBrZXkpXHJcbiAgY29uc3Qge2FjdGlvbnMsIHN0YXRlfSA9IG1vZGVsXHJcbiAgY29uc3QgWywgc2V0U3RhdGVdID0gdXNlU3RhdGUoT2JqZWN0LmNyZWF0ZShudWxsKSlcclxuICBpZiAoIV9rZXkpIHtcclxuICAgIHRocm93IEVycm9yKCdubyBrZXknKVxyXG4gIH1cclxuICBpZiAoIW9yaWdpblN0b3JlW19rZXldKSB7XHJcbiAgICBvcmlnaW5TdG9yZVtfa2V5XSA9IHtcclxuICAgICAga2V5czogX2tleSxcclxuICAgICAgc3RhdGUsXHJcbiAgICAgIGFjdGlvbnM6IHt9LFxyXG4gICAgICBzZXREYXRhOiBbXVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBub3RpY2UgPSB1c2VDYWxsYmFjaygoZGF0YTogYW55KSA9PiB7XHJcbiAgICBvcmlnaW5TdG9yZVtfa2V5XS5zZXREYXRhLmZvckVhY2godmFsdWUgPT4ge1xyXG4gICAgICB2YWx1ZT8uKGRhdGEpXHJcbiAgICB9KVxyXG4gIH0sIFtfa2V5XSlcclxuICBjb25zdCBzZXREYXRhOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjx0eXBlb2Ygc3RhdGU+PiA9IHVzZUNhbGxiYWNrKChkYXRhKSA9PiB7XHJcbiAgICBjb25zdCBvbGRTdGF0ZSA9IG9yaWdpblN0b3JlW19rZXldLnN0YXRlXHJcbiAgICBjb25zdCBuZXdEYXRhID0gaXNGdW5jdGlvbihkYXRhKSA/IChkYXRhIGFzICh2OiB0eXBlb2Ygb2xkU3RhdGUpID0+IHZvaWQpKG9sZFN0YXRlKSA6IGRhdGFcclxuICAgIG9yaWdpblN0b3JlW19rZXldLnN0YXRlID0gbmV3RGF0YVxyXG4gICAgbm90aWNlKG5ld0RhdGEpXHJcbiAgfSwgW19rZXksIG5vdGljZV0pXHJcblxyXG4gIGNvbnN0IHNldExvYWQgPSB1c2VDYWxsYmFjaygocXVlcnk6IGFueSwgZmxhZzogYm9vbGVhbikgPT4ge1xyXG4gICAgc2V0RGF0YShwcmV2U3RhdGUgPT4gKHtcclxuICAgICAgLi4ucHJldlN0YXRlLFxyXG4gICAgICBmZXRjaExvYWQ6IHtcclxuICAgICAgICAuLi5wcmV2U3RhdGUuZmV0Y2hMb2FkID8/IHt9LFxyXG4gICAgICAgIFtxdWVyeT8ubG9jPy5zb3VyY2U/LmJvZHldOiBmbGFnLFxyXG4gICAgICB9XHJcbiAgICB9KSlcclxuICB9LCBbc2V0RGF0YV0pXHJcbiAgY29uc3Qgc2V0RXJyb3IgPSB1c2VDYWxsYmFjaygocXVlcnk6IGFueSwgZXJyOiBhbnkpID0+IHtcclxuICAgIHNldERhdGEocHJldlN0YXRlID0+ICh7XHJcbiAgICAgIC4uLnByZXZTdGF0ZSxcclxuICAgICAgZmV0Y2hFcnJvcjoge1xyXG4gICAgICAgIC4uLnByZXZTdGF0ZS5mZXRjaEVycm9yID8/IHt9LFxyXG4gICAgICAgIFtxdWVyeT8ubG9jPy5zb3VyY2U/LmJvZHldOiBlcnIsXHJcbiAgICAgIH1cclxuICAgIH0pKVxyXG4gIH0sIFtzZXREYXRhXSlcclxuXHJcbiAgY29uc3QgcXVlcnk6IEdyYXBocWxRdWVyeSA9IHVzZUNhbGxiYWNrKGFzeW5jIChxdWVyeSwgcGFyYW1zLCBvcHRpb24pID0+IHtcclxuICAgIHNldExvYWQocXVlcnksIHRydWUpXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBncmFwaFFMUXVlcnkoKShxdWVyeSwgcGFyYW1zLCBvcHRpb24pLmNhdGNoKGUgPT4ge1xyXG4gICAgICBzZXRFcnJvcihxdWVyeSwgZSlcclxuICAgIH0pLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkKHF1ZXJ5LCBmYWxzZSlcclxuICAgIH0pIGFzIGFueVxyXG4gICAgcmV0dXJuIHJlcz8uZGF0YVxyXG4gIH0sIFtzZXRFcnJvciwgc2V0TG9hZF0pXHJcbiAgY29uc3QgbXV0YXRlOiBHcmFwaHFsTXV0YXRlID0gdXNlQ2FsbGJhY2soYXN5bmMgKG11dGF0aW9uLCBwYXJhbXMsIG9wdGlvbikgPT4ge1xyXG4gICAgc2V0TG9hZChtdXRhdGlvbiwgdHJ1ZSlcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGdyYXBoUUxNdXRhdGUoKShtdXRhdGlvbiwgcGFyYW1zLCBvcHRpb24pLmNhdGNoKGUgPT4ge1xyXG4gICAgICBzZXRFcnJvcihtdXRhdGlvbiwgZSlcclxuICAgIH0pLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkKG11dGF0aW9uLCBmYWxzZSlcclxuICAgIH0pIGFzIGFueVxyXG4gICAgcmV0dXJuIHJlcz8uZGF0YVxyXG4gIH0sIFtzZXRFcnJvciwgc2V0TG9hZF0pXHJcblxyXG4gIGlmIChPYmplY3Qua2V5cyhvcmlnaW5TdG9yZVtfa2V5XS5hY3Rpb25zKS5sZW5ndGggPT09IDAgJiYgb3JpZ2luU3RvcmVbX2tleV0uYWN0aW9ucy5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XHJcbiAgICBPYmplY3Qua2V5cyhhY3Rpb25zKS5mb3JFYWNoKHZhbHVlID0+IHtcclxuICAgICAgb3JpZ2luU3RvcmVbX2tleV0uYWN0aW9uc1t2YWx1ZV0gPSAodjogYW55KSA9PiBhY3Rpb25zW3ZhbHVlXSh2LCB7XHJcbiAgICAgICAgLi4uYmFzZUFjdGlvbk9wdGlvbixcclxuICAgICAgICBkYXRhOiBvcmlnaW5TdG9yZVtfa2V5XS5zdGF0ZSxcclxuICAgICAgICBub3RpY2UsXHJcbiAgICAgICAgc2V0RGF0YSxcclxuICAgICAgICBxdWVyeSxcclxuICAgICAgICBtdXRhdGUsXHJcbiAgICAgICAgc3RvcmU6IG9yaWdpblN0b3JlLFxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIE9iamVjdC5rZXlzKGFjdGlvbnMpLmZvckVhY2godmFsdWUgPT4ge1xyXG4gICAgICBvcmlnaW5TdG9yZVtfa2V5XS5hY3Rpb25zW3ZhbHVlXSA9ICh2OiBhbnkpID0+IGFjdGlvbnNbdmFsdWVdKHYsIHtcclxuICAgICAgICAuLi5iYXNlQWN0aW9uT3B0aW9uLFxyXG4gICAgICAgIGRhdGE6IG9yaWdpblN0b3JlW19rZXldLnN0YXRlLFxyXG4gICAgICAgIG5vdGljZSxcclxuICAgICAgICBzZXREYXRhLFxyXG4gICAgICAgIHF1ZXJ5LFxyXG4gICAgICAgIG11dGF0ZSxcclxuICAgICAgICBzdG9yZTogb3JpZ2luU3RvcmUsXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH0sIFtfa2V5LCBhY3Rpb25zLCBtdXRhdGUsIG5vdGljZSwgcXVlcnksIHNldERhdGFdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBvcmlnaW5TdG9yZVtfa2V5XS5zZXREYXRhID0gW1xyXG4gICAgICAuLi5vcmlnaW5TdG9yZVtfa2V5XS5zZXREYXRhID8/IFtdLFxyXG4gICAgICBzZXRTdGF0ZSxcclxuICAgIF1cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIG9yaWdpblN0b3JlW19rZXldLnNldERhdGEgPSBvcmlnaW5TdG9yZVtfa2V5XS5zZXREYXRhLmZpbHRlcih2YWx1ZSA9PiB2YWx1ZSAhPT0gc2V0U3RhdGUpXHJcbiAgICB9XHJcbiAgfSwgW19rZXldKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgc3RhdGU6IG9yaWdpblN0b3JlW19rZXldLnN0YXRlLFxyXG4gICAgYWN0aW9uczogKG9yaWdpblN0b3JlW19rZXldLmFjdGlvbnMpIGFzIERlYWxGdW5PYmo8dHlwZW9mIGFjdGlvbnM+LFxyXG4gICAgc3RvcmU6IG9yaWdpblN0b3JlLFxyXG4gICAgZ2V0TG9hZDogcXVlcnkgPT4gb3JpZ2luU3RvcmVbX2tleV0uc3RhdGUuZmV0Y2hMb2FkW3F1ZXJ5Py5sb2M/LnNvdXJjZT8uYm9keV0gPyAxIDogMFxyXG4gIH1cclxufVxyXG5cclxuIiwiaW1wb3J0ICdjcm9zcy1mZXRjaC9wb2x5ZmlsbCdcclxuaW1wb3J0IHtnZXRUb2tlbiwgc2V0VG9rZW59IGZyb20gJy4uL3Rvb2xzL3Rva2VuJ1xyXG5pbXBvcnQge09wZXJhdGlvbn0gZnJvbSAnYXBvbGxvLWxpbmsnXHJcbmltcG9ydCB7RXJyb3JMaW5rfSBmcm9tICdhcG9sbG8tbGluay1lcnJvcidcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IEFwb2xsb0NsaWVudCBmcm9tICdhcG9sbG8tYm9vc3QnXHJcbmltcG9ydCB7c3NMb2d9IGZyb20gJy4uL3Rvb2xzL2dsb2JhbCdcclxuaW1wb3J0IHtEb2N1bWVudE5vZGV9IGZyb20gJ2dyYXBocWwnXHJcbmltcG9ydCB7ZG9jfSBmcm9tICcuLi9ncmFwaHFsVHlwZXMvZG9jJ1xyXG5pbXBvcnQge3Nob3dNZXNzYWdlfSBmcm9tICcuLi9jb21wb25lbnRzL01lc3NhZ2UvTWVzc2FnZSdcclxuaW1wb3J0IGdldENvbmZpZyBmcm9tICduZXh0L2NvbmZpZydcclxuXHJcbmNvbnN0IGNvbmZpZyA9IGdldENvbmZpZygpXHJcbmNvbnN0IGNsaWVudF9hcGlfdXJpID0gY29uZmlnPy5wdWJsaWNSdW50aW1lQ29uZmlnPy5jbGllbnRfYXBpX3VyaSA/PyAnaHR0cDovL2xvY2FsaG9zdDo0NDY0L3R5cGVfX2dyYXBocWwvYXBpJ1xyXG5cclxuY29uc3Qgb21pdFR5cGVuYW1lID0gKGtleTogYW55LCB2YWx1ZTogYW55KSA9PiB7XHJcbiAgcmV0dXJuIGtleSA9PT0gJ19fdHlwZW5hbWUnID8gdW5kZWZpbmVkIDogdmFsdWVcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldENsaWVudCA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgcmVxdWVzdDogKG9wZXJhdGlvbjogT3BlcmF0aW9uKSA9PiBQcm9taXNlPHZvaWQ+IHwgdm9pZCA9IChvcGVyYXRpb24pID0+IHtcclxuICAgIGlmIChvcGVyYXRpb24udmFyaWFibGVzKSB7XHJcbiAgICAgIG9wZXJhdGlvbi52YXJpYWJsZXMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9wZXJhdGlvbi52YXJpYWJsZXMpLCBvbWl0VHlwZW5hbWUpXHJcbiAgICB9XHJcbiAgICBvcGVyYXRpb24uc2V0Q29udGV4dCgoe2hlYWRlcnMgPSB7fX0pID0+ICh7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAuLi5oZWFkZXJzLFxyXG4gICAgICAgIC8vIOWQjuWPsOS4h+iDveadg+mZkFxyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGdldFRva2VuKCksXHJcbiAgICAgIH0sXHJcbiAgICB9KSlcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlZnJlc2hUb2tlbiA9ICgpID0+IHtcclxuICAgIGdyYXBoUUxRdWVyeSgpKGRvYy5yZWZyZXNoVG9rZW4sIHtcclxuICAgICAgZGF0YTogZ2V0VG9rZW4oJ3JlZnJlc2h0b2tlbicpLFxyXG4gICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICBpZiAocmVzLmRhdGE/LnJlZnJlc2hUb2tlbj8udG9rZW4pIHtcclxuICAgICAgICBzZXRUb2tlbihyZXMuZGF0YT8ucmVmcmVzaFRva2VuPy50b2tlbilcclxuICAgICAgICBzZXRUb2tlbihyZXMuZGF0YT8ucmVmcmVzaFRva2VuPy5yZWZyZXNodG9rZW4sICdyZWZyZXNodG9rZW4nKVxyXG4gICAgICAgIHNob3dNZXNzYWdlKHttZXNzYWdlOiAn55m75b2V6LaF5pe2LOWIt+aWsOeZu+W9leS/oeaBryd9KVxyXG4gICAgICAgIFJvdXRlci5yZWxvYWQoKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNob3dNZXNzYWdlKHttZXNzYWdlOiAn6K+36YeN5paw55m75b2VJ30pXHJcbiAgICAgICAgUm91dGVyLnB1c2goJy9sb2dpbicpXHJcbiAgICAgIH1cclxuICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgIHNzTG9nKGVycilcclxuICAgICAgc2hvd01lc3NhZ2Uoe21lc3NhZ2U6ICfor7fph43mlrDnmbvlvZUnfSlcclxuICAgICAgUm91dGVyLnB1c2goJy9sb2dpbicpXHJcbiAgICB9KVxyXG4gIH1cclxuICBjb25zdCBvbkVycm9yOiBFcnJvckxpbmsuRXJyb3JIYW5kbGVyID0gKHtyZXNwb25zZSwgb3BlcmF0aW9uLCBncmFwaFFMRXJyb3JzLCBuZXR3b3JrRXJyb3J9KSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgIC8vIGNvbnNvbGUubG9nKG9wZXJhdGlvbilcclxuICAgIGlmIChncmFwaFFMRXJyb3JzKSB7XHJcbiAgICAgIGdyYXBoUUxFcnJvcnMuZm9yRWFjaCgoe21lc3NhZ2UsIGxvY2F0aW9ucywgcGF0aCwgZXh0ZW5zaW9uc30pID0+IHtcclxuICAgICAgICBzc0xvZyhcclxuICAgICAgICAgICAgYFtHcmFwaFFMIGVycm9yXTogTWVzc2FnZTogJHttZXNzYWdlfSwgTG9jYXRpb246ICR7bG9jYXRpb25zfSwgUGF0aDogJHtwYXRofWAsXHJcbiAgICAgICAgKVxyXG4gICAgICAgIGlmIChleHRlbnNpb25zPy5jb2RlID09PSAnVU5BVVRIRU5USUNBVEVEJykge1xyXG4gICAgICAgICAgaWYgKG1lc3NhZ2UuaW5jbHVkZXMoJ2ZpcnN0JykpIHtcclxuICAgICAgICAgICAgcmVmcmVzaFRva2VuKClcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNob3dNZXNzYWdlKHttZXNzYWdlOiAn6K+36YeN5paw55m75b2VJ30pXHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWVzc2FnZS5pbmNsdWRlcygnVW5leHBlY3RlZCBlcnJvcicpKSB7XHJcbiAgICAgICAgICBzaG93TWVzc2FnZSh7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2Uuc3BsaXQoJ1wiJylbMV0sXHJcbiAgICAgICAgICAgIG1zZ190eXBlOiAnZXJyb3InLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc2hvd01lc3NhZ2Uoe21lc3NhZ2V9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBpZiAobmV0d29ya0Vycm9yKSB7XHJcbiAgICAgIGNvbnN0IGVyck1zZyA9ICgnYm9keVRleHQnIGluIG5ldHdvcmtFcnJvcikgPyBuZXR3b3JrRXJyb3I/LmJvZHlUZXh0IDogKCdyZXN1bHQnIGluIG5ldHdvcmtFcnJvcikgPyBuZXR3b3JrRXJyb3I/LnJlc3VsdD8uZXJyb3IgOiAnJ1xyXG4gICAgICBzc0xvZyhgW05ldHdvcmsgZXJyb3JdOiAke2Vyck1zZ31gKVxyXG4gICAgICBpZiAoJ3N0YXR1c0NvZGUnIGluIG5ldHdvcmtFcnJvciAmJiBuZXR3b3JrRXJyb3I/LnN0YXR1c0NvZGUgPT09IDQwMSkge1xyXG4gICAgICAgIGlmIChlcnJNc2cuaW5jbHVkZXMoJ2ZpcnN0JykgJiYgZ2V0VG9rZW4oJ3JlZnJlc2h0b2tlbicpKSB7XHJcbiAgICAgICAgICByZWZyZXNoVG9rZW4oKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzaG93TWVzc2FnZSh7bWVzc2FnZTogJ+ivt+mHjeaWsOeZu+W9lSd9KVxyXG4gICAgICAgICAgUm91dGVyLnB1c2goJy9sb2dpbicpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbmV3IEFwb2xsb0NsaWVudCh7XHJcbiAgICAvLyBsaW5rOiBodHRwTGluayxcclxuICAgIHVyaTogY2xpZW50X2FwaV91cmksXHJcbiAgICByZXF1ZXN0LFxyXG4gICAgb25FcnJvcixcclxuICB9KVxyXG59XHJcblxyXG5jb25zdCBkZWZhdWx0Q2xpZW50ID0gZ2V0Q2xpZW50KClcclxuXHJcbi8vIGNvbnN0IGRlYWxQYXJhbXMgPSAoKHBhcmFtczogYW55KSA9PiAoe1xyXG4vLyAgIGRhdGE6IHBhcmFtcyxcclxuLy8gfSkpXHJcbmNvbnN0IGRlYWxQYXJhbXMgPSAoKHBhcmFtczogYW55KSA9PiBwYXJhbXMpXHJcblxyXG5leHBvcnQgY29uc3QgZ3JhcGhRTFF1ZXJ5ID0gKGNsaWVudCA9IGRlZmF1bHRDbGllbnQpID0+IGFzeW5jIChxdWVyeTogRG9jdW1lbnROb2RlLCBwYXJhbXM6IGFueSwgb3B0aW9uPzogYW55KSA9PiB7XHJcbiAgY29uc3QgX2RlYWxQYXJhbXNJbiA9IG9wdGlvbj8uZGVhbFBhcmFtc0luID8/IGRlYWxQYXJhbXNcclxuICByZXR1cm4gY2xpZW50LnF1ZXJ5KHtcclxuICAgIGZldGNoUG9saWN5OiAnbmV0d29yay1vbmx5JyxcclxuICAgIHF1ZXJ5LFxyXG4gICAgdmFyaWFibGVzOiB7XHJcbiAgICAgIC4uLihfZGVhbFBhcmFtc0luID8gX2RlYWxQYXJhbXNJbihwYXJhbXMpIDogcGFyYW1zKSxcclxuICAgIH0sXHJcbiAgICAuLi5vcHRpb24sXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdyYXBoUUxNdXRhdGUgPSAoY2xpZW50ID0gZGVmYXVsdENsaWVudCkgPT4gYXN5bmMgKG11dGF0aW9uOiBhbnksIHBhcmFtczogYW55LCBvcHRpb24/OiBhbnkpID0+IHtcclxuICBjb25zdCBfZGVhbFBhcmFtc0luID0gb3B0aW9uPy5kZWFsUGFyYW1zSW4gPz8gZGVhbFBhcmFtc1xyXG4gIHJldHVybiBjbGllbnQubXV0YXRlKHtcclxuICAgIG11dGF0aW9uLFxyXG4gICAgdmFyaWFibGVzOiB7XHJcbiAgICAgIC4uLihfZGVhbFBhcmFtc0luID8gX2RlYWxQYXJhbXNJbihwYXJhbXMpIDogcGFyYW1zKSxcclxuICAgIH0sXHJcbiAgICAuLi5vcHRpb24sXHJcbiAgfSlcclxufVxyXG5cclxuY29uc3Qgc2VydmVyQ2xpZW50ID0gKCkgPT4gbmV3IEFwb2xsb0NsaWVudCh7XHJcbiAgLy8gbGluazogaHR0cExpbmssXHJcbiAgdXJpOiBjbGllbnRfYXBpX3VyaSxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBzZXJ2ZXJRdWVyeSA9IGFzeW5jIChxdWVyeTogYW55LCBwYXJhbXM6IGFueSwgb3B0aW9uPzogYW55KSA9PiAoYXdhaXQgZ3JhcGhRTFF1ZXJ5KHNlcnZlckNsaWVudCgpKShxdWVyeSwgcGFyYW1zLCBvcHRpb24pKT8uZGF0YVxyXG5cclxuZXhwb3J0IGNvbnN0IHNlcnZlck11dGF0ZSA9IGFzeW5jIChtdXRhdGlvbjogYW55LCBwYXJhbXM6IGFueSwgb3B0aW9uPzogYW55KSA9PiAoYXdhaXQgZ3JhcGhRTE11dGF0ZShzZXJ2ZXJDbGllbnQoKSkobXV0YXRpb24sIHBhcmFtcywgb3B0aW9uKSk/LmRhdGFcclxuXHJcbiIsImltcG9ydCB7bW9kZWxGYWN0b3J5fSBmcm9tICcuLi9Nb2RlbEFjdGlvbi9tb2RlbFV0aWwnXHJcbmltcG9ydCB7ZnBNZXJnZSwgZnBTZXR9IGZyb20gJy4uL3Rvb2xzL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEaWFsb2dNb2RlbDxUPiB7XHJcbiAgb3BlbjogYm9vbGVhblxyXG4gIGRpYWxvZ0RhdGE6IFRcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgUmVzb2x2ZXJGdW4gPSAodmFsdWU/OiBhbnkpID0+IGFueVxyXG5cclxuZXhwb3J0IGNvbnN0IGRpYWxvZ01vZGVsRmFjdG9yeSA9IDxUPihuYW1lOiBzdHJpbmcsIGluaXREYXRhOiBUKSA9PiBtb2RlbEZhY3RvcnkoYCR7bmFtZX1fZGlhbG9nTW9kZWxGYWN0b3J5YCwge1xyXG4gIGRpYWxvZ0RhdGE6IGluaXREYXRhLFxyXG4gIG9wZW46IGZhbHNlLFxyXG4gIGlzRWRpdDogLTEsXHJcbiAgb3BlblJlc29sdmU6ICgoKSA9PiB7XHJcbiAgfSkgYXMgUmVzb2x2ZXJGdW4sXHJcbn0sIHtcclxuICBvcGVuQ2xpY2s6ICh2YWx1ZSwge3NldERhdGF9KSA9PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgIHNldERhdGEocHJlRGF0YSA9PiBmcE1lcmdlKHByZURhdGEsIHtcclxuICAgICAgICBvcGVuOiB0cnVlLFxyXG4gICAgICAgIGRpYWxvZ0RhdGE6IHZhbHVlLFxyXG4gICAgICAgIGlzRWRpdDogLTEsXHJcbiAgICAgICAgb3BlblJlc29sdmU6IHJlc29sdmUsXHJcbiAgICAgIH0pKVxyXG4gICAgfSlcclxuICB9LFxyXG4gIG9wZW5FZGl0Q2xpY2s6ICh2YWx1ZTogeyBkYXRhOiBhbnk7IGluZGV4OiBudW1iZXIgfSwge3NldERhdGF9KSA9PiBzZXREYXRhKHByZSA9PiBmcE1lcmdlKHByZSwge1xyXG4gICAgb3BlbjogdHJ1ZSxcclxuICAgIGRpYWxvZ0RhdGE6IHZhbHVlLmRhdGEsXHJcbiAgICBpc0VkaXQ6IHZhbHVlLmluZGV4LFxyXG4gIH0pKSxcclxuICBvbkNsb3NlOiAodmFsdWUsIHtkYXRhLCBzZXREYXRhfSkgPT4ge1xyXG4gICAgZGF0YS5vcGVuUmVzb2x2ZShmYWxzZSlcclxuICAgIHNldERhdGEocHJlID0+IGZwTWVyZ2UoZnBTZXQocHJlLCAnZGlhbG9nRGF0YScsIHt9KSwge1xyXG4gICAgICBkaWFsb2dEYXRhOiBpbml0RGF0YSxcclxuICAgICAgb3BlbjogZmFsc2UsXHJcbiAgICB9KSlcclxuICB9LFxyXG4gIHNldGRpYWxvZzogKHZhbHVlOiBUIHwgYW55LCB7c2V0RGF0YX0pID0+IHNldERhdGEoZGF0YSA9PiBmcE1lcmdlKGRhdGEsIHtcclxuICAgIGRpYWxvZ0RhdGE6IHZhbHVlLFxyXG4gIH0pKSxcclxufSlcclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VSZWZ9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQmV0dGVyU2Nyb2xsIGZyb20gJ2JldHRlci1zY3JvbGwnXHJcbmltcG9ydCB7dXNlU3RvcmVNb2RlbH0gZnJvbSAnLi4vLi4vTW9kZWxBY3Rpb24vdXNlU3RvcmUnXHJcbmltcG9ydCB7ZnBNZXJnZVByZX0gZnJvbSAnLi4vLi4vdG9vbHMvdXRpbHMnXHJcbmltcG9ydCB7bW9kZWxGYWN0b3J5fSBmcm9tICcuLi8uLi9Nb2RlbEFjdGlvbi9tb2RlbFV0aWwnXHJcblxyXG5leHBvcnQgY29uc3QgYlNjcm9sbE1vZGVsID0gbW9kZWxGYWN0b3J5KCdiU2Nyb2xsTW9kZWwnLCB7XHJcbiAgc2Nyb2xsOiB7fSBhcyBhbnksXHJcbn0sIHtcclxuICBzZXRTY3JvbGw6ICh2YWx1ZSwgb3B0aW9uKSA9PiB7XHJcbiAgICBvcHRpb24uc2V0RGF0YShmcE1lcmdlUHJlKHtcclxuICAgICAgc2Nyb2xsOiB2YWx1ZSxcclxuICAgIH0pKVxyXG4gIH0sXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgQlNjcm9sbGVyID0gKHtpc1gsIGNoaWxkcmVuLCBib3hIZWlnaHQsIGJveFdpZHRofTogeyBjaGlsZHJlbj86IGFueSwgYm94SGVpZ2h0PzogYW55LCBib3hXaWR0aD86IGFueSwgaXNYPzogYm9vbGVhbiB9KSA9PiB7XHJcbiAgY29uc3Qge3N0YXRlOiBic1N0YXRlLCBhY3Rpb25zOiBic0FjdGlvbnN9ID0gdXNlU3RvcmVNb2RlbChiU2Nyb2xsTW9kZWwpXHJcbiAgY29uc3Qgc2Nyb2xsUmVmID0gdXNlUmVmKG51bGwpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIGNvbnN0IHNjcm9sbCA9IG5ldyBCZXR0ZXJTY3JvbGwoc2Nyb2xsUmVmLmN1cnJlbnQsIHtcclxuICAgICAgY2xpY2s6IHRydWUsXHJcbiAgICAgIHNjcm9sbFk6IHRydWUsXHJcbiAgICAgIHRhcHM6IHRydWUsXHJcbiAgICAgIC4uLihpc1ggPyB7XHJcbiAgICAgICAgc2Nyb2xsWDogdHJ1ZSxcclxuICAgICAgICBzY3JvbGxZOiBmYWxzZSxcclxuICAgICAgfSA6IHt9KSxcclxuICAgICAgcHJldmVudERlZmF1bHRFeGNlcHRpb246IHtcclxuICAgICAgICB0YWdOYW1lOiAvXihJTlBVVHxURVhUQVJFQXxCVVRUT058U0VMRUNUKSQvLFxyXG4gICAgICAgIGNsYXNzTmFtZTogLyhefFxccykuKihNdWlUZXh0RmllbGQtcm9vdHxNdWlTZWxlY3Qtc2VsZWN0KS4qKFxcc3wkKS8sXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgYnNBY3Rpb25zLnNldFNjcm9sbChzY3JvbGwpXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBzY3JvbGwuc3RvcCgpXHJcbiAgICAgIHNjcm9sbC5kZXN0cm95KClcclxuICAgIH1cclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgICAgPGRpdlxyXG4gICAgICAgICAgcmVmPXtzY3JvbGxSZWZ9XHJcbiAgICAgICAgICBjbGFzc05hbWU9eydib3gnfT5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXtpc1ggPyB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICAgICAgICAgIH0gOiB7fX1cclxuICAgICAgICA+e2NoaWxkcmVufTwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIC5ib3gge1xyXG4gICAgICAgICAgICBoZWlnaHQ6ICR7Ym94SGVpZ2h0IHx8ICcxMDB2aCd9O1xyXG4gICAgICAgICAgICB3aWR0aDogJHsoaXNYICYmIGJveFdpZHRoKSA/IGAke2JveFdpZHRofWAgOiAnYXV0bycgfTtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgY29uc3QgQm94ID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAwIDIwcHg7XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBTcGFjZSA9ICh7aCwgdywgY306IHtoPzogc3RyaW5nIHwgbnVtYmVyLCB3Pzogc3RyaW5nIHwgbnVtYmVyLCBjPzogc3RyaW5nfSkgPT4ge1xyXG4gIHJldHVybiA8c3BhblxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGMgfHwgJ2F1dG8nLFxyXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgICAgIHdpZHRoOiB3ID8/ICcxMDAlJyxcclxuICAgICAgICBoZWlnaHQ6IGggPz8gJzEwMCUnLFxyXG4gICAgICAgICAgLi4uKCF3ID8ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICAgICAgfSA6IHt9KVxyXG4gICAgICB9fVxyXG4gIC8+XHJcbn1cclxuIiwiaW1wb3J0IHtCdXR0b24sIEJ1dHRvblByb3BzLCBDaXJjdWxhclByb2dyZXNzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZGVjbGFyZSBpbnRlcmZhY2UgQnV0dG9uTG9hZFByb3BzIGV4dGVuZHMgQnV0dG9uUHJvcHMge1xyXG4gIGxvYWRpbmc/OiBib29sZWFuIHwgbnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBCdXR0b25Mb2FkID0gKHByb3BzOiBCdXR0b25Mb2FkUHJvcHMpID0+IHtcclxuXHJcbiAgcmV0dXJuIDxCdXR0b25cclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgICBkaXNhYmxlZD17ISFwcm9wcy5sb2FkaW5nIHx8IHByb3BzLmRpc2FibGVkfVxyXG4gID5cclxuICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIHshIXByb3BzLmxvYWRpbmcgJiYgPENpcmN1bGFyUHJvZ3Jlc3NcclxuICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgIHNpemU9ezI2fVxyXG4gICAgLz59XHJcbiAgPC9CdXR0b24+XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU3RvcmVmcm9udEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1N0b3JlZnJvbnQnXHJcbmltcG9ydCBBY2NvdW50Qm94SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQWNjb3VudEJveCdcclxuaW1wb3J0IFJlZGVlbUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1JlZGVlbSdcclxuaW1wb3J0IFBlb3BsZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1Blb3BsZSdcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgcmVkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9yZWQnXHJcbmltcG9ydCB7QXBwRm9vdEJhcn0gZnJvbSAnLi4vLi4vc3NfY29tbW9uL2VudW0nXHJcbmltcG9ydCB7bXBTdHlsZX0gZnJvbSAnLi4vLi4vc3R5bGUvY29tbW9uJ1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvb3RCYXIgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgY29uc3QgaXNBY3QgPSAocGF0aDogYW55KSA9PiByb3V0ZXIucGF0aG5hbWUuaW5jbHVkZXMocGF0aCBhcyBzdHJpbmcpXHJcbiAgcmV0dXJuIChcclxuICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXsnRm9vdEJhcid9PlxyXG4gICAgICAgIHtbXHJcbiAgICAgICAgICBbJ+mAm+W6lycsIDxTdG9yZWZyb250SWNvbi8+LCBgLyR7QXBwRm9vdEJhci5ob21lfWBdLFxyXG4gICAgICAgICAgWyfmi7zlm6InLCA8UGVvcGxlSWNvbi8+LCBgLyR7QXBwRm9vdEJhci5ncm91cH1gXSxcclxuICAgICAgICAgIFsn6L6+5Lq65Yy6JywgPFJlZGVlbUljb24vPiwgYC8ke0FwcEZvb3RCYXIuY2FyZH1gXSxcclxuICAgICAgICAgIC8vIFsn6LSt54mp6L2mJywgPFNob3BwaW5nQ2FydEljb24vPiwgYC8ke0FwcEZvb3RCYXIuY2FydH1gLCBzdGF0ZVNob3BDYXJ0LmRlYWxQcm9kdWN0TnVtYmVyKHN0YXRlU2hvcENhcnQpXSxcclxuICAgICAgICAgIFsn5oiRJywgPEFjY291bnRCb3hJY29uLz4sIGAvJHtBcHBGb290QmFyLm1lfWBdLFxyXG4gICAgICAgIF0ubWFwKHYgPT4gKFxyXG4gICAgICAgICAgICA8c2VjdGlvblxyXG4gICAgICAgICAgICAgICAga2V5PXtgRm9vdEJhcl8ke3ZbMF19YH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aXNBY3QodlsyXSkgPyAnYWN0JyA6ICcnfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaXNBY3QodlsyXSkgPyAnJyA6IHJvdXRlci5wdXNoKHZbMl0gYXMgc3RyaW5nKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHt2WzFdfVxyXG4gICAgICAgICAgICAgIDxzcGFuPnt2WzBdfTwvc3Bhbj5cclxuICAgICAgICAgICAgICB7fn52WzNdID4gMCAmJiA8YXNpZGU+e3ZbM119PC9hc2lkZT59XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICApKX1cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAuRm9vdEJhciB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAzcHggNHB4IDAgcmdiYSgwLDAsMCwwLjE0KSwgMCAzcHggM3B4IC0ycHggcmdiYSgwLDAsMCwwLjEyKSwgMCAxcHggOHB4IDAgcmdiYSgwLDAsMCwwLjIwKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgPiBzZWN0aW9uIHtcclxuICAgICAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgID4gYXNpZGUge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDIwJTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHttcFN0eWxlLnJlZH07XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYWN0IHtcclxuICAgICAgICAgICAgY29sb3I6ICR7cmVkWzYwMF19O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IEFycm93QmFja0lvc0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93QmFja0lvcydcclxuaW1wb3J0IHtCb3gsIEljb25CdXR0b259IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQge2xzfSBmcm9tICcuLi8uLi90b29scy9kZWFsS2V5J1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7TWF5YmV9IGZyb20gJy4uLy4uL2dyYXBocWxUeXBlcy90eXBlcydcclxuaW1wb3J0IHtCb3hQcm9wc30gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQm94L0JveCdcclxuaW1wb3J0IHtSZWFjdENvbXBvbmVudExpa2V9IGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCB7U2hvcHBpbmdDYXJ0SWNvbkJ1dHRvbn0gZnJvbSAnLi4vU2hvcHBpbmdDYXJ0SWNvbkJ1dHRvbi9TaG9wcGluZ0NhcnRJY29uQnV0dG9uJ1xyXG5pbXBvcnQge1NlYXJjaH0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJ1xyXG5cclxuY29uc3QgQ29udGFpbiA9IHN0eWxlZChCb3gpPEJveFByb3BzPmBcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogOTZweCAxZnIgOTZweDtcclxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmBcclxuY29uc3QgTGVmdEljb25CdXR0b24gPSBzdHlsZWQoSWNvbkJ1dHRvbilgXHJcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcclxuYFxyXG5jb25zdCBBY3Rpb24gPSBzdHlsZWQuZGl2YFxyXG4gIGp1c3RpZnktc2VsZjogZW5kO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgXHJcbmBcclxuZXhwb3J0IGNvbnN0IEhlYWRlclRpdGxlID0gKHt0aXRsZSA9ICcnLCBiYWNrQ2FsbCA9ICgpID0+IHt9LCBzaG93Q2FydCA9IGZhbHNlLCBMZWZ0SWNvbiA9IEFycm93QmFja0lvc0ljb24sIGhpZGVMZWZ0ID0gZmFsc2UsIHNob3dTZWFyY2ggPSBmYWxzZX06IHt0aXRsZT86IE1heWJlPHN0cmluZz4sIGJhY2tDYWxsPzogRnVuY3Rpb24sIHNob3dDYXJ0PzogYm9vbGVhbiwgc2hvd1NlYXJjaD86IGJvb2xlYW4sIExlZnRJY29uPzogUmVhY3RDb21wb25lbnRMaWtlLCBoaWRlTGVmdD86IGJvb2xlYW59KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgcmV0dXJuIDxDb250YWluXHJcbiAgICAgIGJveFNoYWRvdz17MX0+XHJcbiAgICA8TGVmdEljb25CdXR0b25cclxuICAgICAgICBzdHlsZT17aGlkZUxlZnQgJiYge1xyXG4gICAgICAgICAgdmlzaWJpbGl0eTogJ2hpZGRlbicsXHJcbiAgICAgICAgfSB8fCB7fX1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICBpZiAoIShiYWNrQ2FsbCAmJiBiYWNrQ2FsbCgpKSkge1xyXG4gICAgICAgICAgICByb3V0ZXIuYmFjaygpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfX1cclxuICAgID5cclxuICAgICAgPExlZnRJY29uLz5cclxuICAgIDwvTGVmdEljb25CdXR0b24+XHJcbiAgICA8bWFpbj5cclxuICAgICAge2xzKHRpdGxlKX1cclxuICAgIDwvbWFpbj5cclxuICAgIDxBY3Rpb24+XHJcbiAgICAgIHtzaG93U2VhcmNoICYmIDxJY29uQnV0dG9uXHJcbiAgICAgID5cclxuICAgICAgICA8U2VhcmNoIC8+XHJcbiAgICAgIDwvSWNvbkJ1dHRvbj59XHJcbiAgICAgIHtzaG93Q2FydCAmJiA8U2hvcHBpbmdDYXJ0SWNvbkJ1dHRvbi8+fVxyXG4gICAgPC9BY3Rpb24+XHJcbiAgPC9Db250YWluPlxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHtTbmFja2Jhcn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCB7YW1iZXIsIGJsdWUsIGNvbW1vbiwgZ3JlZW4sIGdyZXksIHJlZH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzJ1xyXG5pbXBvcnQge1NuYWNrYmFyUHJvcHN9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NuYWNrYmFyL1NuYWNrYmFyJ1xyXG5pbXBvcnQge29yaWdpblN0b3JlLCB1c2VTdG9yZU1vZGVsfSBmcm9tICcuLi8uLi9Nb2RlbEFjdGlvbi91c2VTdG9yZSdcclxuaW1wb3J0IHtmcE1lcmdlUHJlfSBmcm9tICcuLi8uLi90b29scy91dGlscydcclxuaW1wb3J0IHttb2RlbEZhY3Rvcnl9IGZyb20gJy4uLy4uL01vZGVsQWN0aW9uL21vZGVsVXRpbCdcclxuaW1wb3J0IHsgbHMgfSBmcm9tICcuLi8uLi90b29scy9kZWFsS2V5J1xyXG5cclxuY29uc3QgdHlwZUhlbHAgPSB7XHJcbiAgZGVmYXVsdDogYGJhY2tncm91bmQ6ICR7Z3JleVs3MDBdfTtgLFxyXG4gIHN1Y2Nlc3M6IGBiYWNrZ3JvdW5kOiAke2dyZWVuWzYwMF19O2AsXHJcbiAgd2FybmluZzogYGJhY2tncm91bmQ6ICR7YW1iZXJbNzAwXX07YCxcclxuICBpbmZvOiBgYmFja2dyb3VuZDogJHtibHVlWzcwMF19O2AsXHJcbiAgZXJyb3I6IGBiYWNrZ3JvdW5kOiAke3JlZFs3MDBdfTtgLFxyXG59XHJcbmNvbnN0IGdldFR5cGUgPSAodHlwZSA9ICdkZWZhdWx0JykgPT4gKHR5cGVIZWxwIGFzIGFueSlbdHlwZV1cclxuXHJcbnR5cGUgTWVzc2FnZVByb3BzID0gUGFydGlhbDxTbmFja2JhclByb3BzICYge1xyXG4gIG1zZ190eXBlOiAnZGVmYXVsdCcgfCAnc3VjY2VzcycgfCAnaW5mbycgfCAnd2FybmluZycgfCAnZXJyb3InIHwgc3RyaW5nXHJcbn0+XHJcblxyXG5jb25zdCBDdXNTbmFja2JhciA9IHN0eWxlZChTbmFja2Jhcik8TWVzc2FnZVByb3BzPmBcclxuICAmJiYgPiBkaXYge1xyXG4gICAgY29sb3I6ICR7Y29tbW9uLndoaXRlfTtcclxuICAgICR7KHttc2dfdHlwZX0pID0+IGdldFR5cGUobXNnX3R5cGUpfVxyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgbWVzc2FnZU1vZGVsID0gbW9kZWxGYWN0b3J5KCdtZXNzYWdlTW9kZWwnLCB7XHJcbiAgb3BlbjogZmFsc2UsXHJcbiAgbWVzc2FnZTogJycsXHJcbiAgYXV0b0hpZGVEdXJhdGlvbjogMjAwMCxcclxuICBtc2dfdHlwZTogJ2RlZmF1bHQnLFxyXG59IGFzIE1lc3NhZ2VQcm9wcywge1xyXG4gIG9wZW46ICh2YWx1ZTogc3RyaW5nIHwgTWVzc2FnZVByb3BzLCBvcHRpb24pID0+IHtcclxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIG9wdGlvbi5zZXREYXRhKGZwTWVyZ2VQcmUoe1xyXG4gICAgICAgIGF1dG9IaWRlRHVyYXRpb246IDIwMDAsXHJcbiAgICAgICAgbXNnX3R5cGU6ICdkZWZhdWx0JyxcclxuICAgICAgICBtZXNzYWdlOiB2YWx1ZSxcclxuICAgICAgICBvcGVuOiB0cnVlLFxyXG4gICAgICB9KSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG9wdGlvbi5zZXREYXRhKGZwTWVyZ2VQcmUoe1xyXG4gICAgICAgIGF1dG9IaWRlRHVyYXRpb246IDIwMDAsXHJcbiAgICAgICAgbXNnX3R5cGU6ICdkZWZhdWx0JyxcclxuICAgICAgICAuLi52YWx1ZSxcclxuICAgICAgICBvcGVuOiB0cnVlLFxyXG4gICAgICB9KSlcclxuICAgIH1cclxuICB9LFxyXG4gIG9uQ2xvc2U6ICh2YWx1ZSwgb3B0aW9uKSA9PiBvcHRpb24uc2V0RGF0YShmcE1lcmdlUHJlKHtcclxuICAgIG9wZW46IGZhbHNlLFxyXG4gIH0pKSxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBNZXNzYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHtzdGF0ZTogbVN0YXRlLCBhY3Rpb25zfSA9IHVzZVN0b3JlTW9kZWwobWVzc2FnZU1vZGVsKVxyXG4gIHJldHVybiA8Q3VzU25hY2tiYXJcclxuICAgICAgb3Blbj17bVN0YXRlLm9wZW59XHJcbiAgICAgIGF1dG9IaWRlRHVyYXRpb249e21TdGF0ZS5hdXRvSGlkZUR1cmF0aW9ufVxyXG4gICAgICBtZXNzYWdlPXtscyhtU3RhdGUubWVzc2FnZSBhcyBzdHJpbmcpfVxyXG4gICAgICBtc2dfdHlwZT17bVN0YXRlLm1zZ190eXBlfVxyXG4gICAgICBvbkNsb3NlPXsoKSA9PiBhY3Rpb25zLm9uQ2xvc2UoKX1cclxuICAvPlxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2hvd01lc3NhZ2UgPSAob3B0aW9uOiBzdHJpbmcgfCBNZXNzYWdlUHJvcHMpID0+IHtcclxuICBvcmlnaW5TdG9yZVsnbWVzc2FnZU1vZGVsJ10uYWN0aW9ucy5vcGVuKG9wdGlvbilcclxuICByZXR1cm5cclxufVxyXG4iLCJpbXBvcnQge3VzZVN0b3JlTW9kZWx9IGZyb20gJy4uLy4uL01vZGVsQWN0aW9uL3VzZVN0b3JlJ1xyXG5pbXBvcnQge21lTW9kZWx9IGZyb20gJy4uLy4uL3ZpZXcvbWUvbW9kZWwnXHJcbmltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7UmVnaXN0ZXJIZWFkZXJ9IGZyb20gJy4uL1JlZ2lzdGVySGVhZGVyL1JlZ2lzdGVySGVhZGVyJ1xyXG5pbXBvcnQge2xzfSBmcm9tICcuLi8uLi90b29scy9kZWFsS2V5J1xyXG5pbXBvcnQge0J1dHRvbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7Z2V0VG9rZW59IGZyb20gJy4uLy4uL3Rvb2xzL3Rva2VuJ1xyXG5cclxuY29uc3QgRW1wdHkgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgPiBtYWluIHtcclxuICAgIG1hcmdpbi10b3A6IDIwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICA+IHNwYW4ge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IGRlYWxOb0F1dGggPSAob3RoZXJzOiBhbnkpID0+IHtcclxuICBjb25zdCB7c3RhdGU6IHN0YXRlTWUsIGFjdGlvbnM6IGFjdGlvbnNNZX0gPSB1c2VTdG9yZU1vZGVsKG1lTW9kZWwpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghc3RhdGVNZS51c2VyLmlkKSB7XHJcbiAgICAgIGFjdGlvbnNNZS5nZXRMb2dpblVzZXIoKVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG4gIHJldHVybiAoIXN0YXRlTWUudXNlci5pZCB8fCAhZ2V0VG9rZW4oKSlcclxuICAgICAgPyA8RW1wdHk+XHJcbiAgICAgICAgPFJlZ2lzdGVySGVhZGVyLz5cclxuICAgICAgICA8bWFpbj5cclxuICAgICAgICAgIDxzcGFuPntscygn5oKo5pyq55m75b2VLOivt+WFiOeZu+W9lScpfTwvc3Bhbj5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICB2YXJpYW50PXsnY29udGFpbmVkJ31cclxuICAgICAgICAgICAgICBjb2xvcj17J3NlY29uZGFyeSd9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17YWN0aW9uc01lLnRvTG9naW59XHJcbiAgICAgICAgICA+e2xzKCfnmbvlvZUnKX08L0J1dHRvbj5cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgIDwvRW1wdHk+XHJcbiAgICAgIDogb3RoZXJzXHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IFN0YXJSb3VuZGVkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU3RhclJvdW5kZWQnXHJcbmltcG9ydCBTdGFyQm9yZGVyUm91bmRlZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1N0YXJCb3JkZXJSb3VuZGVkJ1xyXG5pbXBvcnQgQWRkQ2lyY2xlT3V0bGluZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0FkZENpcmNsZU91dGxpbmUnXHJcbmltcG9ydCBTaG9wcGluZ0NhcnRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TaG9wcGluZ0NhcnQnXHJcbmltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7R3JvdXBRdWV1ZSwgTWF5YmUsIFByb2R1Y3QsIFNob3BDYXJ0SXRlbUlucHV0fSBmcm9tICcuLi8uLi9ncmFwaHFsVHlwZXMvdHlwZXMnXHJcbmltcG9ydCB7ZGVhbEltZ1VybH0gZnJvbSAnLi4vLi4vdG9vbHMvaW1nJ1xyXG5pbXBvcnQge0J1dHRvbiwgQ2FyZCwgSWNvbkJ1dHRvbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCB7ZGVhbE1vbmV5fSBmcm9tICcuLi8uLi90b29scy91dGlscydcclxuaW1wb3J0IHttcFN0eWxlfSBmcm9tICcuLi8uLi9zdHlsZS9jb21tb24nXHJcbmltcG9ydCB7bW9kZWxGYWN0b3J5fSBmcm9tICcuLi8uLi9Nb2RlbEFjdGlvbi9tb2RlbFV0aWwnXHJcbmltcG9ydCB7dXNlU3RvcmVNb2RlbH0gZnJvbSAnLi4vLi4vTW9kZWxBY3Rpb24vdXNlU3RvcmUnXHJcbmltcG9ydCB7bWVNb2RlbH0gZnJvbSAnLi4vLi4vdmlldy9tZS9tb2RlbCdcclxuaW1wb3J0IHtkb2N9IGZyb20gJy4uLy4uL2dyYXBocWxUeXBlcy9kb2MnXHJcbmltcG9ydCB7c2hvd01lc3NhZ2V9IGZyb20gJy4uL01lc3NhZ2UvTWVzc2FnZSdcclxuaW1wb3J0IHtsc30gZnJvbSAnLi4vLi4vdG9vbHMvZGVhbEtleSdcclxuaW1wb3J0IHtncmV5fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMnXHJcbmltcG9ydCB7c2hvcENhcnRNb2RlbH0gZnJvbSAnLi4vLi4vdmlldy9jYXJ0J1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7dXBkYXRlU2hvcENhcnRNb2RlbH0gZnJvbSAnLi9VcGRhdGVTaG9wQ2FydCdcclxuaW1wb3J0IHtTcGFjZX0gZnJvbSAnLi4vQm94L0JveCdcclxuXHJcbmV4cG9ydCBjb25zdCBwcm9kdWN0TW9kZWwgPSBtb2RlbEZhY3RvcnkoJ3Byb2R1Y3RNb2RlbCcsIHt9LCB7XHJcbiAgdXBkYXRlTnVtU2hvcENhcnQ6IGFzeW5jICh2YWx1ZTogU2hvcENhcnRJdGVtSW5wdXQsIG9wdGlvbikgPT4ge1xyXG4gICAgcmV0dXJuIGF3YWl0IG9wdGlvbi5tdXRhdGUoZG9jLnVwZGF0ZU51bVNob3BDYXJ0LCB7XHJcbiAgICAgIHNob3BDYXJ0OiB2YWx1ZSxcclxuICAgICAgLi4uKHZhbHVlLm51bWJlciA/IHtcclxuICAgICAgICB1cGRhdGVOdW06IHZhbHVlLm51bWJlcixcclxuICAgICAgfSA6IHt9KSxcclxuICAgIH0pXHJcbiAgfSxcclxuICB1cGRhdGVTaG9wQ2FydDogYXN5bmMgKHZhbHVlOiBTaG9wQ2FydEl0ZW1JbnB1dCwgb3B0aW9uKSA9PiB7XHJcbiAgICByZXR1cm4gYXdhaXQgb3B0aW9uLm11dGF0ZShkb2MudXBkYXRlU2hvcENhcnQsIHtcclxuICAgICAgc2hvcENhcnQ6IHZhbHVlLFxyXG4gICAgfSlcclxuICB9LFxyXG59KVxyXG5cclxuY29uc3QgQm94ID0gc3R5bGVkKENhcmQpYFxyXG4gIHBhZGRpbmc6IDEwcHggMTBweCAwO1xyXG4gID4gaGVhZGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MHZ3O1xyXG4gICAgPiBpbWcge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDQwdnc7XHJcbiAgICB9XHJcbiAgfVxyXG4gID4gbWFpbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH1cclxuICA+IGZvb3RlciB7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgID4gbWFpbiB7XHJcbiAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIH1cclxuICAgID4gLk11aUJ1dHRvbkJhc2Utcm9vdCB7XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9kdWN0UHJpY2UgPSAoe3Byb2R1Y3QsIHByaWNlT3V0VGlwfTogeyBwcm9kdWN0PzogTWF5YmU8UHJvZHVjdD4sIHByaWNlT3V0VGlwPzogc3RyaW5nIH0pID0+IHtcclxuICByZXR1cm4gPD5cclxuICAgIDxhc2lkZVxyXG4gICAgICAgIHN0eWxlPXt7ZGlzcGxheTogJ2lubGluZS1ibG9jaycsIGZvbnRTaXplOiAnMTJweCcsIHRleHREZWNvcmF0aW9uOiAnbGluZS10aHJvdWdoJywgZmxleFNocmluazogMH19XHJcbiAgICA+e2RlYWxNb25leShwcm9kdWN0Py5wcmljZU1hcmtldCl9PC9hc2lkZT5cclxuICAgIDxtYWluXHJcbiAgICAgICAgc3R5bGU9e3tkaXNwbGF5OiAnaW5saW5lLWJsb2NrJywgZm9udFNpemU6ICcxNHB4JywgbWFyZ2luTGVmdDogJzZweCcsIGNvbG9yOiBtcFN0eWxlLnJlZCwgZmxleFNocmluazogMH19XHJcbiAgICA+e3ByaWNlT3V0VGlwID8/ICcnfXtkZWFsTW9uZXkocHJvZHVjdD8ucHJpY2VPdXQpfTwvbWFpbj5cclxuICA8Lz5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFByb2R1Y3RJdGVtID0gKHtwcm9kdWN0fTogeyBwcm9kdWN0OiBQcm9kdWN0IH0pID0+IHtcclxuICBjb25zdCB7YWN0aW9uczogYWN0aW9uc1VwZGF0ZVNob3BDYXJ0TW9kZWx9ID0gdXNlU3RvcmVNb2RlbCh1cGRhdGVTaG9wQ2FydE1vZGVsKVxyXG4gIGNvbnN0IHthY3Rpb25zOiBhY3Rpb25zU2hvcENhcnR9ID0gdXNlU3RvcmVNb2RlbChzaG9wQ2FydE1vZGVsKVxyXG4gIGNvbnN0IHtzdGF0ZTogc3RhdGVNZSwgYWN0aW9uczogYWN0aW9uc01lfSA9IHVzZVN0b3JlTW9kZWwobWVNb2RlbClcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFzdGF0ZU1lLnVzZXIuaWQpIHtcclxuICAgICAgYWN0aW9uc01lLmdldExvZ2luVXNlcigpXHJcbiAgICB9XHJcbiAgfSwgW10pXHJcbiAgY29uc3Qge2FjdGlvbnM6IGFjdGlvbnNQTX0gPSB1c2VTdG9yZU1vZGVsKHByb2R1Y3RNb2RlbClcclxuICByZXR1cm4gPEJveD5cclxuICAgIDxoZWFkZXI+XHJcbiAgICAgIDxpbWcgc3JjPXtkZWFsSW1nVXJsKHByb2R1Y3Q/LmltZz8uWzBdPy51cmwpfVxyXG4gICAgICAgICAgIGFsdD1cIlwiLz5cclxuICAgIDwvaGVhZGVyPlxyXG4gICAgPG1haW4+e3Byb2R1Y3QubmFtZX17cHJvZHVjdC53ZWlnaHR9e3Byb2R1Y3QudW5pdH08L21haW4+XHJcbiAgICA8Zm9vdGVyPlxyXG4gICAgICA8UHJvZHVjdFByaWNlIHByb2R1Y3Q9e3Byb2R1Y3R9Lz5cclxuICAgICAge3N0YXRlTWUudXNlcj8uaWQgJiYgPEljb25CdXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYWN0aW9uc1VwZGF0ZVNob3BDYXJ0TW9kZWwub3BlbkNsaWNrKClcclxuICAgICAgICAgICAgaWYgKHJlcz8ubnVtID4gMCkge1xyXG4gICAgICAgICAgICAgIGlmICgoYXdhaXQgYWN0aW9uc1BNLnVwZGF0ZU51bVNob3BDYXJ0KHtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3QsXHJcbiAgICAgICAgICAgICAgICBudW1iZXI6IH5+cmVzPy5udW0sXHJcbiAgICAgICAgICAgICAgfSkpPy51cGRhdGVOdW1TaG9wQ2FydD8uaWQpIHtcclxuICAgICAgICAgICAgICAgIHNob3dNZXNzYWdlKCfmk43kvZzmiJDlip8nKVxyXG4gICAgICAgICAgICAgICAgYWN0aW9uc1Nob3BDYXJ0LmdldExpc3QoKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxTaG9wcGluZ0NhcnRJY29uIGNvbG9yPXsnc2Vjb25kYXJ5J30vPlxyXG4gICAgICA8L0ljb25CdXR0b24+fVxyXG4gICAgPC9mb290ZXI+XHJcbiAgPC9Cb3g+XHJcbn1cclxuXHJcbmNvbnN0IFJvd0JveCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgYm94LXNoYWRvdzogJHttcFN0eWxlLnNoYWRvd1snMSddfTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG5gXHJcbmNvbnN0IEltZyA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDM1dnc7XHJcbiAgaGVpZ2h0OiAzNXZ3O1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gID4gaW1nIHtcclxuICAgIHdpZHRoOiAzNXZ3O1xyXG4gICAgaGVpZ2h0OiAzNXZ3O1xyXG4gIH1cclxuICBcclxuYFxyXG5jb25zdCBMZWZ0Qm94ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleC1ncm93OiAxO1xyXG5gXHJcbmNvbnN0IFRpcCA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLXRvcDogMTZweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgcGFkZGluZzogMnB4IDZweDtcclxuICBiYWNrZ3JvdW5kOiAke2dyZXlbODAwXX07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiBtYXgtY29udGVudDtcclxuYFxyXG5jb25zdCBQcmljZSA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLXRvcDogMTZweDtcclxuICBmbGV4LWdyb3c6IDE7XHJcbmBcclxuY29uc3QgQnVuID0gc3R5bGVkLmRpdmBcclxuICAmJiYge1xyXG4gICAgLk11aUJ1dHRvbkJhc2Utcm9vdCB7XHJcbiAgICAgIHBhZGRpbmc6IDRweCAwO1xyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5leHBvcnQgY29uc3QgUHJvZHVjdEl0ZW1PbmVSb3cgPSAoe3Byb2R1Y3QsIHN1bU9yZGVyVGlwID0gJycsIGhpZGVBY3Rpb24gPSBmYWxzZSwgc2hvd1N1bU9yZGVyID0gZmFsc2V9OiB7IHByb2R1Y3Q6IFByb2R1Y3QsIHN1bU9yZGVyVGlwPzogc3RyaW5nLCBoaWRlQWN0aW9uPzogYm9vbGVhbiwgc2hvd1N1bU9yZGVyPzogYm9vbGVhbiB9KSA9PiB7XHJcbiAgY29uc3Qge2FjdGlvbnM6IGFjdGlvbnNVcGRhdGVTaG9wQ2FydE1vZGVsfSA9IHVzZVN0b3JlTW9kZWwodXBkYXRlU2hvcENhcnRNb2RlbClcclxuICBjb25zdCB7c3RhdGU6IHN0YXRlTWUsIGFjdGlvbnM6IGFjdGlvbnNNZX0gPSB1c2VTdG9yZU1vZGVsKG1lTW9kZWwpXHJcbiAgY29uc3Qge2FjdGlvbnM6IGFjdGlvbnNQTX0gPSB1c2VTdG9yZU1vZGVsKHByb2R1Y3RNb2RlbClcclxuICBjb25zdCB7YWN0aW9uczogYWN0aW9uc1Nob3BDYXJ0fSA9IHVzZVN0b3JlTW9kZWwoc2hvcENhcnRNb2RlbClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghc3RhdGVNZS51c2VyLmlkKSB7XHJcbiAgICAgIGFjdGlvbnNNZS5nZXRMb2dpblVzZXIoKVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gPFJvd0JveCBrZXk9e2BQcm9kdWN0SXRlbU9uZVJvd18ke3Byb2R1Y3QuaWR9YH0+XHJcbiAgICA8SW1nPlxyXG4gICAgICA8aW1nIHNyYz17ZGVhbEltZ1VybChwcm9kdWN0Py5pbWc/LlswXT8udXJsKX1cclxuICAgICAgICAgICBhbHQ9XCJcIi8+XHJcbiAgICA8L0ltZz5cclxuICAgIDxMZWZ0Qm94PlxyXG4gICAgICA8bWFpbj57cHJvZHVjdC5uYW1lfXtwcm9kdWN0LndlaWdodH17cHJvZHVjdC51bml0fTwvbWFpbj5cclxuICAgICAgey8qPFN0b2NrPntscygn5b2T5YmN5Ymp5L2ZJyl9OiB7cHJvZHVjdC5zdG9ja308L1N0b2NrPiovfVxyXG4gICAgICB7c2hvd1N1bU9yZGVyICYmIDxUaXA+e3N1bU9yZGVyVGlwfXtscygn6ZSA6YePJyl9OiB7cHJvZHVjdC5zdW1PcmRlcn08L1RpcD59XHJcbiAgICAgIDxQcmljZT5cclxuICAgICAgICA8UHJvZHVjdFByaWNlIHByb2R1Y3Q9e3Byb2R1Y3R9Lz5cclxuICAgICAgPC9QcmljZT5cclxuICAgICAgeyFoaWRlQWN0aW9uICYmIHN0YXRlTWUudXNlcj8uaWQgJiYgPEJ1bj5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGZ1bGxXaWR0aD17dHJ1ZX1cclxuICAgICAgICAgICAgY29sb3I9eydzZWNvbmRhcnknfVxyXG4gICAgICAgICAgICB2YXJpYW50PXsnY29udGFpbmVkJ31cclxuICAgICAgICAgICAgb25DbGljaz17YXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGFjdGlvbnNVcGRhdGVTaG9wQ2FydE1vZGVsLm9wZW5DbGljaygpXHJcbiAgICAgICAgICAgICAgaWYgKHJlcz8ubnVtID4gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKChhd2FpdCBhY3Rpb25zUE0udXBkYXRlTnVtU2hvcENhcnQoe1xyXG4gICAgICAgICAgICAgICAgICBwcm9kdWN0LFxyXG4gICAgICAgICAgICAgICAgICBudW1iZXI6IH5+cmVzPy5udW0sXHJcbiAgICAgICAgICAgICAgICB9KSk/LnVwZGF0ZU51bVNob3BDYXJ0Py5pZCkge1xyXG4gICAgICAgICAgICAgICAgICBzaG93TWVzc2FnZSgn5pON5L2c5oiQ5YqfJylcclxuICAgICAgICAgICAgICAgICAgYWN0aW9uc1Nob3BDYXJ0LmdldExpc3QoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8U2hvcHBpbmdDYXJ0SWNvbi8+XHJcbiAgICAgICAgICB7bHMoJ+WKoOWFpei0reeJqei9picpfVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L0J1bj59XHJcbiAgICA8L0xlZnRCb3g+XHJcbiAgPC9Sb3dCb3g+XHJcbn1cclxuXHJcbmNvbnN0IEdyb3VwQm94ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5gXHJcbmNvbnN0IEdyb3VwSW1nID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMzV2dztcclxuICBoZWlnaHQ6IDM1dnc7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gID4gaW1nIHtcclxuICAgIHdpZHRoOiAzNXZ3O1xyXG4gICAgaGVpZ2h0OiAzNXZ3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIH1cclxuYFxyXG5jb25zdCBSaWdodEJveCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5gXHJcbmNvbnN0IFRpdGxlID0gc3R5bGVkLmRpdmBcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5gXHJcbmNvbnN0IE1hcmtldFByaWNlID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgY29sb3I6ICR7Z3JleVs3MDBdfTtcclxuICA+IHNwYW4ge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgfVxyXG5gXHJcbmNvbnN0IE91dFByaWNlID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgY29sb3I6ICR7bXBTdHlsZS5yZWR9O1xyXG5gXHJcbmNvbnN0IFN0YXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgZmxleC1ncm93OiAxO1xyXG5gXHJcbmNvbnN0IEFjdGlvbiA9IHN0eWxlZC5kaXZgXHJcbmBcclxuY29uc3QgT3JkZXJUaXAgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHBhZGRpbmc6IDJweCA2cHg7XHJcbiAgYmFja2dyb3VuZDogJHtncmV5WzgwMF19O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBHcm91cFByb2R1Y3RJdGVtID0gKHtwcm9kdWN0LCBncm91cFF1ZXVlLCBzdW1PcmRlclRpcCA9ICcnLCBzaG93U3VtT3JkZXIgPSBmYWxzZX06IHsgcHJvZHVjdDogUHJvZHVjdCwgZ3JvdXBRdWV1ZT86IEdyb3VwUXVldWUsIHN1bU9yZGVyVGlwPzogc3RyaW5nLCBzaG93U3VtT3JkZXI/OiBib29sZWFuIH0pID0+IHtcclxuICBjb25zdCB7c3RhdGU6IHN0YXRlTWUsIGFjdGlvbnM6IGFjdGlvbnNNZX0gPSB1c2VTdG9yZU1vZGVsKG1lTW9kZWwpXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghc3RhdGVNZS51c2VyLmlkKSB7XHJcbiAgICAgIGFjdGlvbnNNZS5nZXRMb2dpblVzZXIoKVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gPEdyb3VwQm94IGtleT17YEdyb3VwQm94XyR7cHJvZHVjdC5pZH1gfT5cclxuICAgIDxHcm91cEltZz5cclxuICAgICAgPGltZyBzcmM9e2RlYWxJbWdVcmwocHJvZHVjdD8uaW1nPy5bMF0/LnVybCl9XHJcbiAgICAgICAgICAgYWx0PVwiXCIvPlxyXG4gICAgPC9Hcm91cEltZz5cclxuICAgIDxSaWdodEJveD5cclxuICAgICAgPFRpdGxlPlxyXG4gICAgICAgIHtwcm9kdWN0Lm5hbWV9KHtwcm9kdWN0Lmdyb3VwUmVtYXJrfS97cHJvZHVjdC5ncm91cEFtb3VudH17cHJvZHVjdC5ncm91cEFtb3VudFVuaXRTdHJpbmd9L3twcm9kdWN0Lmdyb3VwUHJlY2lzaW9uU3RyaW5nfSlcclxuICAgICAgPC9UaXRsZT5cclxuICAgICAge3Nob3dTdW1PcmRlciAmJiA8T3JkZXJUaXA+e3N1bU9yZGVyVGlwfXtscygn6ZSA6YePJyl9OiB7cHJvZHVjdC5zdW1PcmRlcn08L09yZGVyVGlwPn1cclxuICAgICAgPE1hcmtldFByaWNlPlxyXG4gICAgICAgIHtscygn5biC5Zy65Lu3Jyl9XHJcbiAgICAgICAgPHNwYW4+e2RlYWxNb25leShwcm9kdWN0LnByaWNlTWFya2V0KX08L3NwYW4+XHJcbiAgICAgIDwvTWFya2V0UHJpY2U+XHJcbiAgICAgIDxPdXRQcmljZT5cclxuICAgICAgICB7bHMoJ+WfuuWHhuS7t+agvCcpfVxyXG4gICAgICAgIDxzcGFuPntkZWFsTW9uZXkocHJvZHVjdC5wcmljZU91dCl9PC9zcGFuPlxyXG4gICAgICA8L091dFByaWNlPlxyXG4gICAgICA8U3Rhcj5cclxuICAgICAgICB7Z3JvdXBRdWV1ZT8uaWQgJiYgPGRpdj5cclxuICAgICAgICAgIDxTcGFjZSBoPXs4fS8+XHJcbiAgICAgICAgICB7Wy4uLkFycmF5KHByb2R1Y3QuZ3JvdXBQcmVjaXNpb24pXS5tYXAoKHYsIGkpID0+IGkpLm1hcCh2YWx1ZSA9PiB2YWx1ZSArIDEgPiAoZ3JvdXBRdWV1ZS5zdW1GaWxsQW1vdW50ID8/IDApID9cclxuICAgICAgICAgICAgICA8U3RhckJvcmRlclJvdW5kZWRJY29uXHJcbiAgICAgICAgICAgICAgICAgIGtleT17YGNsaWNrU3RhciR7dmFsdWV9YH1cclxuICAgICAgICAgICAgICAgICAgZm9udFNpemU9eydzbWFsbCd9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y29sb3I6IGdyZXlbNzAwXX19XHJcbiAgICAgICAgICAgICAgLz4gOiA8U3RhclJvdW5kZWRJY29uXHJcbiAgICAgICAgICAgICAgICAgIGtleT17YGNsaWNrU3RhciR7dmFsdWV9YH1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tjb2xvcjogJyNGREQzMzQnfX1cclxuICAgICAgICAgICAgICAgICAgZm9udFNpemU9eydzbWFsbCd9XHJcbiAgICAgICAgICAgICAgLz4pfVxyXG4gICAgICAgIDwvZGl2Pn1cclxuICAgICAgPC9TdGFyPlxyXG4gICAgICA8QWN0aW9uPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgdmFyaWFudD17J2NvbnRhaW5lZCd9XHJcbiAgICAgICAgICAgIGNvbG9yPXsnc2Vjb25kYXJ5J31cclxuICAgICAgICAgICAgZnVsbFdpZHRoPXt0cnVlfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgcm91dGVyLnB1c2goYC9ncm91cFByb2R1Y3QvW2lkXWAsIGAvZ3JvdXBQcm9kdWN0LyR7cHJvZHVjdC5pZH1gKVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxBZGRDaXJjbGVPdXRsaW5lSWNvbi8+XHJcbiAgICAgICAgICB7bHMoJ+aLvOS4gOS4qicpfVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L0FjdGlvbj5cclxuICAgIDwvUmlnaHRCb3g+XHJcbiAgPC9Hcm91cEJveD5cclxufVxyXG5cclxuIiwiaW1wb3J0IHtCdXR0b24sIERpYWxvZywgRGlhbG9nQ29udGVudCwgRGlhbG9nVGl0bGUsIFRleHRGaWVsZH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtsc30gZnJvbSAnLi4vLi4vdG9vbHMvZGVhbEtleSdcclxuaW1wb3J0IHtkaWFsb2dNb2RlbEZhY3Rvcnl9IGZyb20gJy4uLy4uL2NvbW1vbk1vZGVsL2RpYWxvZydcclxuaW1wb3J0IHt1c2VTdG9yZU1vZGVsfSBmcm9tICcuLi8uLi9Nb2RlbEFjdGlvbi91c2VTdG9yZSdcclxuaW1wb3J0IHttZXJnZVR3b01vZGVsLCBtb2RlbEZhY3Rvcnl9IGZyb20gJy4uLy4uL01vZGVsQWN0aW9uL21vZGVsVXRpbCdcclxuaW1wb3J0IHtzZXRGb3JtfSBmcm9tICcuLi8uLi90b29scy9jb21tb25BY3Rpb24nXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlU2hvcENhcnRNb2RlbCA9IG1lcmdlVHdvTW9kZWwoZGlhbG9nTW9kZWxGYWN0b3J5KCdVcGRhdGVTaG9wQ2FydE1vZGVsJywge30pLCBtb2RlbEZhY3RvcnkoJ3VwZGF0ZScsIHtcclxuICBmb3JtOiB7XHJcbiAgICBudW06IDEsXHJcbiAgfSxcclxufSwge1xyXG4gIHNldEZvcm06IHNldEZvcm0sXHJcbn0pKVxyXG5cclxuY29uc3QgRm9vdGVyID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgVXBkYXRlU2hvcENhcnQgPSAoKSA9PiB7XHJcbiAgY29uc3Qge2FjdGlvbnM6IGFjdGlvbnNVcGRhdGVTaG9wQ2FydE1vZGVsLCBzdGF0ZTogc3RhdGVVcGRhdGVTaG9wQ2FydE1vZGVsfSA9IHVzZVN0b3JlTW9kZWwodXBkYXRlU2hvcENhcnRNb2RlbClcclxuICByZXR1cm4gPERpYWxvZ1xyXG4gICAgICBvcGVuPXtzdGF0ZVVwZGF0ZVNob3BDYXJ0TW9kZWwub3Blbn1cclxuICAgICAgb25DbG9zZT17YWN0aW9uc1VwZGF0ZVNob3BDYXJ0TW9kZWwub25DbG9zZX1cclxuICA+XHJcbiAgICA8RGlhbG9nVGl0bGU+e2xzKCfmt7vliqDmlbDph48nKX08L0RpYWxvZ1RpdGxlPlxyXG4gICAgPERpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgIHR5cGU9eydudW1iZXInfVxyXG4gICAgICAgICAgdmFsdWU9e3N0YXRlVXBkYXRlU2hvcENhcnRNb2RlbC5mb3JtLm51bX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBhY3Rpb25zVXBkYXRlU2hvcENhcnRNb2RlbC5zZXRGb3JtKFsnbnVtJywgZXZlbnQudGFyZ2V0LnZhbHVlXSl9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxGb290ZXI+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB2YXJpYW50PXsnY29udGFpbmVkJ31cclxuICAgICAgICAgICAgY29sb3I9eydzZWNvbmRhcnknfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc3RhdGVVcGRhdGVTaG9wQ2FydE1vZGVsLm9wZW5SZXNvbHZlKHtcclxuICAgICAgICAgICAgICAgIG51bTogc3RhdGVVcGRhdGVTaG9wQ2FydE1vZGVsLmZvcm0ubnVtLFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgYWN0aW9uc1VwZGF0ZVNob3BDYXJ0TW9kZWwub25DbG9zZSgpXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPntscygn56Gu5a6aJyl9PC9CdXR0b24+XHJcbiAgICAgIDwvRm9vdGVyPlxyXG4gICAgPC9EaWFsb2dDb250ZW50PlxyXG4gIDwvRGlhbG9nPlxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHsgbHMgfSBmcm9tICcuLi8uLi90b29scy9kZWFsS2V5J1xyXG5pbXBvcnQge21wU3R5bGV9IGZyb20gJy4uLy4uL3N0eWxlL2NvbW1vbidcclxuXHJcbmNvbnN0IEhlYWRlciA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDBweCAxZnI7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzMHB4IDMwcHggNTBweDtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gID4gaW1nIHtcclxuICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgZ3JpZC1hcmVhOiAxLzEvMy8yO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICB9XHJcbiAgPiBoZWFkZXIge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgYWxpZ24tc2VsZjogZW5kO1xyXG4gIH1cclxuICA+IGZvb3RlciB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAke21wU3R5bGUucmVkfTtcclxuICB9XHJcbiAgPiBtYWluIHtcclxuICAgIGdyaWQtYXJlYTogMy8xLzQvMztcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYWxpZ24tc2VsZjogZW5kO1xyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFJlZ2lzdGVySGVhZGVyID0gKCkgPT4ge1xyXG4gIHJldHVybiA8SGVhZGVyPlxyXG4gICAgPGltZ1xyXG4gICAgICAgIHNyYz17Jy9pbWcvaG9tZS9sb2dvLnBuZyd9XHJcbiAgICAgICAgYWx0PVwiXCIvPlxyXG4gICAgPGhlYWRlcj57bHMoJ01hcmtldCcpfTwvaGVhZGVyPlxyXG4gICAgPGZvb3Rlcj57bHMoJ1BheWxlc3MnKX08L2Zvb3Rlcj5cclxuICAgIDxtYWluPntscygn5qyi6L+O5p2l5Yiw6ams5L2p6I6x6LaF5biCJyl9PC9tYWluPlxyXG4gIDwvSGVhZGVyPlxyXG59XHJcbiIsImltcG9ydCB7QXBwRm9vdEJhcn0gZnJvbSAnLi4vLi4vc3NfY29tbW9uL2VudW0nXHJcbmltcG9ydCB7QmFkZ2UsIEljb25CdXR0b259IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgU2hvcHBpbmdDYXJ0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2hvcHBpbmdDYXJ0J1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7dXNlU3RvcmVNb2RlbH0gZnJvbSAnLi4vLi4vTW9kZWxBY3Rpb24vdXNlU3RvcmUnXHJcbmltcG9ydCB7c2hvcENhcnRNb2RlbH0gZnJvbSAnLi4vLi4vdmlldy9jYXJ0J1xyXG5cclxudHlwZSBDb2xvciA9ICdpbmhlcml0JyB8ICdwcmltYXJ5JyB8ICdzZWNvbmRhcnknIHwgJ2FjdGlvbicgfCAnZGlzYWJsZWQnIHwgJ2Vycm9yJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFNob3BwaW5nQ2FydEljb25CdXR0b24gPSAoe2NvbG9yLCBodG1sQ29sb3J9OiB7Y29sb3I/OiBDb2xvciwgaHRtbENvbG9yPzogc3RyaW5nfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3Qge3N0YXRlOiBzdGF0ZVNob3BDYXJ0LCBhY3Rpb25zOiBhY3Rpb25zU2hvcENhcnR9ID0gdXNlU3RvcmVNb2RlbChzaG9wQ2FydE1vZGVsKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIXN0YXRlU2hvcENhcnQudXNlci5pZCkge1xyXG4gICAgICBhY3Rpb25zU2hvcENhcnQuZ2V0TGlzdCgpXHJcbiAgICB9XHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiA8SWNvbkJ1dHRvblxyXG4gICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goYC8ke0FwcEZvb3RCYXIuY2FydH1gKVxyXG4gICAgICB9fVxyXG4gID5cclxuICAgIDxCYWRnZVxyXG4gICAgICAgIGJhZGdlQ29udGVudD17c3RhdGVTaG9wQ2FydC5kZWFsUHJvZHVjdE51bWJlcihzdGF0ZVNob3BDYXJ0KX1cclxuICAgICAgICBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgPFNob3BwaW5nQ2FydEljb25cclxuICAgICAgICAgIGNvbG9yPXtjb2xvcn1cclxuICAgICAgICAgIGh0bWxDb2xvcj17aHRtbENvbG9yfVxyXG4gICAgICAvPlxyXG4gICAgPC9CYWRnZT5cclxuICA8L0ljb25CdXR0b24+XHJcbn1cclxuIiwiaW1wb3J0IHtncWx9IGZyb20gJ2Fwb2xsby1ib29zdCdcclxuXHJcbmV4cG9ydCBjb25zdCBmcmFnbWVudCA9IHtcclxuICBDYXRlZ29yeUZpZWxkczogZ3FsYFxyXG4gICAgZnJhZ21lbnQgQ2F0ZWdvcnkgb24gQ2F0ZWdvcnkge1xyXG4gICAgICBpZFxyXG4gICAgICBuYW1lXHJcbiAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgdXBkYXRlVGltZVxyXG4gICAgICBpc0RlbGV0ZVxyXG4gICAgICBpc0VuYWJsZVxyXG4gICAgICByZW1hcmtcclxuICAgICAgc29ydFxyXG4gICAgICBwYXJlbnRJZFxyXG4gICAgICBmdWxsUGFyZW50SWRcclxuICAgICAgbnVtYmVyXHJcbiAgICAgIHVzZXJJZFxyXG4gICAgICBpbWdVcmxcclxuICAgIH1cclxuICBgLFxyXG4gIFVzZXJGaWVsZHM6IGdxbGBcclxuICAgIGZyYWdtZW50IFVzZXJGaWVsZHMgb24gVXNlciB7XHJcbiAgICAgIGlkXHJcbiAgICAgIG5hbWVcclxuICAgICAgY3JlYXRlVGltZVxyXG4gICAgICB1cGRhdGVUaW1lXHJcbiAgICAgIGlzRGVsZXRlXHJcbiAgICAgIHBhc3N3b3JkXHJcbiAgICAgIHR5cGVcclxuICAgIH1cclxuICBgLFxyXG4gIFVzZXJJbmZvRmllbGRzOiBncWxgXHJcbiAgICBmcmFnbWVudCBVc2VySW5mb0ZpZWxkcyBvbiBVc2VySW5mbyB7XHJcbiAgICAgIGlkXHJcbiAgICAgIG5hbWVcclxuICAgICAgY3JlYXRlVGltZVxyXG4gICAgICB1cGRhdGVUaW1lXHJcbiAgICAgIGlzRGVsZXRlXHJcbiAgICAgIHVzZXJJZFxyXG4gICAgICBwaG9uZVxyXG4gICAgICBlbWFpbFxyXG4gICAgICB1c2VyTGV2ZWxcclxuICAgICAgcGlja3VwQWRkcmVzc0lkXHJcbiAgICB9XHJcbiAgYCxcclxuICBPcmRlckluZm9GaWVsZHM6IGdxbGBcclxuICAgIGZyYWdtZW50IE9yZGVySW5mb0ZpZWxkcyBvbiBPcmRlckluZm8ge1xyXG4gICAgICBpZFxyXG4gICAgICBuYW1lXHJcbiAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgdXBkYXRlVGltZVxyXG4gICAgICBpc0RlbGV0ZVxyXG4gICAgICBudW1iZXJcclxuICAgICAgc3RhdGVcclxuICAgICAgYWN0dWFsbHlQYWlkXHJcbiAgICAgIGFkZHJlc3NJZFxyXG4gICAgICBwYXltZW50TWV0aG9kQ2FyZElkXHJcbiAgICAgIHN1YnRvdGFsXHJcbiAgICAgIGNvdXBvbkRpc2NvdW50XHJcbiAgICAgIHZpcERpc2NvdW50XHJcbiAgICAgIHRyYW5zcG9ydGF0aW9uQ29zdHNcclxuICAgICAgc2FsZVRheFxyXG4gICAgICBvcmRlcklkXHJcbiAgICAgIGRpc2NvdW50UHJvZHVjdFRvdGFsXHJcbiAgICAgIGZpbmlzaFRpbWVcclxuICAgICAgcGlja1VwVGltZVxyXG4gICAgICBwaWNrVXBUeXBlXHJcbiAgICAgIGdlbmVyYXRlQ29pblxyXG4gICAgICBkZWR1Y3RDb2luXHJcbiAgICAgIHNlbGZBZGRyZXNzSWRcclxuICAgICAgY3VycmVudFVzZXJMZXZlbFxyXG4gICAgfVxyXG4gIGAsXHJcbiAgUk9yZGVyUHJvZHVjdEZpZWxkczogZ3FsYFxyXG4gICAgZnJhZ21lbnQgUk9yZGVyUHJvZHVjdEZpZWxkcyBvbiBST3JkZXJQcm9kdWN0IHtcclxuICAgICAgY291bnRcclxuICAgICAgY3JlYXRlVGltZVxyXG4gICAgICBkZWFsUHJpY2VcclxuICAgICAgaWRcclxuICAgICAgaXNEZWxldGVcclxuICAgICAgbmFtZVxyXG4gICAgICBvcmRlcklkXHJcbiAgICAgIHByb2R1Y3RJZFxyXG4gICAgICB1cGRhdGVUaW1lXHJcbiAgICB9XHJcbiAgYCxcclxuICBQcm9kdWN0RmllbGRzOiBncWxgXHJcbiAgICBmcmFnbWVudCBQcm9kdWN0RmllbGRzIG9uIFByb2R1Y3Qge1xyXG4gICAgICBzdW1PcmRlclxyXG4gICAgICBicmFuZFxyXG4gICAgICBjYXRlZ29yeUlkXHJcbiAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgZ3JvdXBBbW91bnRcclxuICAgICAgZ3JvdXBBbW91bnRVbml0XHJcbiAgICAgIGdyb3VwUHJlY2lzaW9uXHJcbiAgICAgIGdyb3VwUmVtYXJrXHJcbiAgICAgIGlkXHJcbiAgICAgIGlzRGVsZXRlXHJcbiAgICAgIGlzRW5hYmxlXHJcbiAgICAgIGlzR3JvdXBcclxuICAgICAgaXNIb3RcclxuICAgICAgaXNOZXdcclxuICAgICAgbmFtZVxyXG4gICAgICBudW1iZXJcclxuICAgICAgcGFja2luZ1VuaXRcclxuICAgICAgcHJpY2VJblxyXG4gICAgICBwcmljZU1hcmtldFxyXG4gICAgICBwcmljZU91dFxyXG4gICAgICByZW1hcmtcclxuICAgICAgc2hlbHZlc1R5cGVzXHJcbiAgICAgIHNvcnRcclxuICAgICAgc3RvY2tcclxuICAgICAgdW5pdFxyXG4gICAgICB1cGRhdGVUaW1lXHJcbiAgICAgIHdlaWdodFxyXG4gICAgICB1bml0U3RyaW5nXHJcbiAgICAgIGdyb3VwUHJlY2lzaW9uU3RyaW5nXHJcbiAgICAgIGdyb3VwQW1vdW50VW5pdFN0cmluZ1xyXG4gICAgICBwYWNraW5nVW5pdFN0cmluZ1xyXG4gICAgfVxyXG4gIGAsXHJcbiAgSW1nRmllbGRzOiBncWxgXHJcbiAgICBmcmFnbWVudCBJbWdGaWVsZHMgb24gUHJvZHVjdEltZyB7XHJcbiAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgaWRcclxuICAgICAgaXNEZWxldGVcclxuICAgICAgbmFtZVxyXG4gICAgICBudW1iZXJcclxuICAgICAgcHJvZHVjdElkXHJcbiAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgdXJsXHJcbiAgICB9XHJcbiAgYCxcclxuICBVc2VyQWRkcmVzc0ZpZWxkczogZ3FsYFxyXG4gICAgZnJhZ21lbnQgVXNlckFkZHJlc3NGaWVsZHMgb24gVXNlckFkZHJlc3Mge1xyXG4gICAgICBhZGRyZXNzXHJcbiAgICAgIGNpdHlcclxuICAgICAgY29tYmluZUFkZHJlc3NcclxuICAgICAgY29udGFjdEluZm9ybWF0aW9uXHJcbiAgICAgIGNvbnRhY3RVc2VyTmFtZVxyXG4gICAgICBjcmVhdGVUaW1lXHJcbiAgICAgIGRpc3RyaWN0XHJcbiAgICAgIGlkXHJcbiAgICAgIGlzRGVmYXVsdFxyXG4gICAgICBpc0RlbGV0ZVxyXG4gICAgICBuYW1lXHJcbiAgICAgIHByb3ZpbmNlXHJcbiAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgdXNlcklkXHJcbiAgICAgIHppcFxyXG4gICAgfVxyXG4gIGAsXHJcbiAgVXNlclBheUNhcmRGaWVsZHM6IGdxbGBcclxuICAgIGZyYWdtZW50IFVzZXJQYXlDYXJkRmllbGRzIG9uIFVzZXJQYXlDYXJkIHtcclxuICAgICAgYWRkcmVzc0RldGFpbFxyXG4gICAgICBjaXR5XHJcbiAgICAgIGNvZGVcclxuICAgICAgY29udGFjdFxyXG4gICAgICBjcmVhdGVUaW1lXHJcbiAgICAgIGV4cGlyYXRpb25UaW1lXHJcbiAgICAgIGlkXHJcbiAgICAgIGlzRGVmYXVsdFxyXG4gICAgICBpc0RlbGV0ZVxyXG4gICAgICBuYW1lXHJcbiAgICAgIG51bWJlclxyXG4gICAgICB1cGRhdGVUaW1lXHJcbiAgICAgIHVzZXJJZFxyXG4gICAgICB1c2VyTmFtZVxyXG4gICAgICB6aXBDb2RlXHJcbiAgICB9XHJcbiAgYCxcclxuICBTaG9wQ2FydEZpZWxkczogZ3FsYFxyXG4gICAgZnJhZ21lbnQgU2hvcENhcnRGaWVsZHMgb24gU2hvcENhcnQge1xyXG4gICAgICBjcmVhdGVUaW1lXHJcbiAgICAgIGlkXHJcbiAgICAgIGlzRGVsZXRlXHJcbiAgICAgIGlzTmV4dFxyXG4gICAgICBuYW1lXHJcbiAgICAgIG51bWJlclxyXG4gICAgICBwcm9kdWN0SWRcclxuICAgICAgdXBkYXRlVGltZVxyXG4gICAgICB1c2VySWRcclxuICAgIH1cclxuICBgLFxyXG4gIERhdGFDb25maWdGaWVsZHM6IGdxbGBcclxuICAgIGZyYWdtZW50IERhdGFDb25maWdGaWVsZHMgb24gRGF0YUNvbmZpZyB7XHJcbiAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgaWRcclxuICAgICAgaXNEZWxldGVcclxuICAgICAgbmFtZVxyXG4gICAgICByZW1hcmtcclxuICAgICAgdHlwZVxyXG4gICAgICB1cGRhdGVUaW1lXHJcbiAgICAgIHZhbHVlXHJcbiAgICB9XHJcbiAgYCxcclxuICBEaWN0RmllbGRzOiBncWxgXHJcbiAgICBmcmFnbWVudCBEaWN0RmllbGRzIG9uIERpY3Qge1xyXG4gICAgICBjb2RlXHJcbiAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgZGljdFR5cGVDb2RlXHJcbiAgICAgIGlkXHJcbiAgICAgIGlzRGVsZXRlXHJcbiAgICAgIGlzRGlzYWJsZVxyXG4gICAgICBuYW1lXHJcbiAgICAgIHJlbWFya1xyXG4gICAgICBzb3J0XHJcbiAgICAgIHVwZGF0ZVRpbWVcclxuICAgIH1cclxuICBgLFxyXG4gIEdyb3VwUXVldWVGaWVsZHM6IGdxbGBcclxuICAgIGZyYWdtZW50IEdyb3VwUXVldWVGaWVsZHMgb24gR3JvdXBRdWV1ZSB7XHJcbiAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgZmlsbEFtb3VudFxyXG4gICAgICBpZFxyXG4gICAgICBpc0RlbGV0ZVxyXG4gICAgICBuYW1lXHJcbiAgICAgIHByb2R1Y3RJZFxyXG4gICAgICB1cGRhdGVUaW1lXHJcbiAgICAgIHN1bUZpbGxBbW91bnRcclxuICAgIH1cclxuICBgLFxyXG4gIEdyb3VwT3JkZXJGaWVsZHM6IGdxbGBcclxuICAgIGZyYWdtZW50IEdyb3VwT3JkZXJGaWVsZHMgb24gR3JvdXBPcmRlciB7XHJcbiAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgZ3JvdXBRdWV1ZUlkXHJcbiAgICAgIGlkXHJcbiAgICAgIGlzRGVsZXRlXHJcbiAgICAgIG5hbWVcclxuICAgICAgb3JkZXJHcm91cEFtb3VudFxyXG4gICAgICBvcmRlcklkXHJcbiAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgdXNlcklkXHJcbiAgICB9XHJcbiAgYCxcclxuICBQcm9tb0NvZGVGaWVsZHM6IGdxbGBcclxuICAgIGZyYWdtZW50IFByb21vQ29kZUZpZWxkcyBvbiBQcm9tb0NvZGUge1xyXG4gICAgICBjb2RlXHJcbiAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgZGlzY291bnRBbW91bnRcclxuICAgICAgZGlzY291bnRDb25kaXRpb25cclxuICAgICAgZGlzY291bnRDb25kaXRpb25BbW91bnRcclxuICAgICAgZGlzY291bnRUeXBlXHJcbiAgICAgIGVmZmVjdGl2ZURhdGVFbmRcclxuICAgICAgZWZmZWN0aXZlRGF0ZVN0YXJ0XHJcbiAgICAgIGlkXHJcbiAgICAgIGltZ1VybFxyXG4gICAgICBpc0RlbGV0ZVxyXG4gICAgICBpc0Rpc2FibGVcclxuICAgICAgbmFtZVxyXG4gICAgICBwcm9kdWN0Q2F0ZWdvcnlcclxuICAgICAgcHJvbW9Db2RlVHlwZVxyXG4gICAgICByZW1hcmtcclxuICAgICAgcmV1c2VUaW1lc1xyXG4gICAgICB0aXRsZVxyXG4gICAgICB1cGRhdGVUaW1lXHJcbiAgICB9XHJcbiAgYCxcclxufVxyXG4iLCJpbXBvcnQge2dxbH0gZnJvbSAnYXBvbGxvLWJvb3N0J1xyXG5pbXBvcnQge2ZyYWdtZW50fSBmcm9tICcuL2ZyYWdtZW50J1xyXG5pbXBvcnQge0RpY3RUeXBlRW51bSwgUHJvbW9Db2RlVHlwZUVudW19IGZyb20gJy4uLy4uL3NzX2NvbW1vbi9lbnVtJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFVzZXJMaXN0RG9jID0gZ3FsYFxyXG4gIHF1ZXJ5IHJlZmFjdG9yZWQ2NDMoJGRhdGE6IFVzZXJMaXN0SW5wdXQhKSB7XHJcbiAgICB1c2VyTGlzdCh1c2VyTGlzdElucHV0OiAkZGF0YSkge1xyXG4gICAgICBsaXN0IHtcclxuICAgICAgICBvcmRlckNvaW5OZXh0TW9udGhcclxuICAgICAgICBvcmRlckNvaW5DdXJyZW50TW9udGhcclxuICAgICAgICBvcmRlckFtb3VudEN1cnJlbnRZZWFyXHJcbiAgICAgICAgLi4udXNlckluZm9cclxuICAgICAgICAuLi5Vc2VyRmllbGRzXHJcbiAgICAgICAgLi4ub3JkZXJJbmZvXHJcbiAgICAgIH1cclxuICAgICAgdG90YWxcclxuICAgIH1cclxuICB9XHJcbiAgZnJhZ21lbnQgb3JkZXJJbmZvIG9uIFVzZXJ7XHJcbiAgICBvcmRlckluZm97XHJcbiAgICAgIGlkXHJcbiAgICAgIG5hbWVcclxuICAgICAgY3JlYXRlVGltZVxyXG4gICAgICB1cGRhdGVUaW1lXHJcbiAgICAgIGlzRGVsZXRlXHJcbiAgICAgIG51bWJlclxyXG4gICAgICBzdGF0ZVxyXG4gICAgICBhY3R1YWxseVBhaWRcclxuICAgICAgYWRkcmVzc0lkXHJcbiAgICAgIHBheW1lbnRNZXRob2RDYXJkSWRcclxuICAgICAgc3VidG90YWxcclxuICAgICAgY291cG9uRGlzY291bnRcclxuICAgICAgdmlwRGlzY291bnRcclxuICAgICAgdHJhbnNwb3J0YXRpb25Db3N0c1xyXG4gICAgICBzYWxlVGF4XHJcbiAgICAgIG9yZGVySWRcclxuICAgICAgZGlzY291bnRQcm9kdWN0VG90YWxcclxuICAgICAgZmluaXNoVGltZVxyXG4gICAgICBwaWNrVXBUaW1lXHJcbiAgICAgIHBpY2tVcFR5cGVcclxuICAgIH1cclxuICB9XHJcbiAgZnJhZ21lbnQgVXNlckZpZWxkcyBvbiBVc2VyIHtcclxuICAgIGlkXHJcbiAgICBuYW1lXHJcbiAgICBjcmVhdGVUaW1lXHJcbiAgICB1cGRhdGVUaW1lXHJcbiAgICBpc0RlbGV0ZVxyXG4gICAgcGFzc3dvcmRcclxuICAgIHR5cGVcclxuICB9XHJcbiAgZnJhZ21lbnQgdXNlckluZm8gb24gVXNlcntcclxuICAgIHVzZXJJbmZve1xyXG4gICAgICBpZFxyXG4gICAgICBuYW1lXHJcbiAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgdXBkYXRlVGltZVxyXG4gICAgICBpc0RlbGV0ZVxyXG4gICAgICB1c2VySWRcclxuICAgICAgcGhvbmVcclxuICAgICAgZW1haWxcclxuICAgICAgdXNlckxldmVsXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RGF0YUNvbmZpZyA9IGdxbGBcclxuICBxdWVyeSAoJGRhdGE6IERhdGFDb25maWdJdGVtSW5wdXQpIHtcclxuICAgIGdldERhdGFDb25maWcoZGF0YUNvbmZpZ0lucHV0OiAkZGF0YSkge1xyXG4gICAgICBpZFxyXG4gICAgICBuYW1lXHJcbiAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgdXBkYXRlVGltZVxyXG4gICAgICBpc0RlbGV0ZVxyXG4gICAgICB0eXBlXHJcbiAgICAgIHZhbHVlXHJcbiAgICAgIHJlbWFya1xyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IGhvbWVDYXJvdXNlbEltZ3MgPSBncWxgXHJcbiAgcXVlcnkgcXVlcnlfcXVlcnlfdGVzdExvbmcxMzcoJGRhdGE6IERhdGFDb25maWdJdGVtSW5wdXQpIHtcclxuICAgIGhvbWVDYXJvdXNlbEltZ3MoZGF0YUNvbmZpZ0lucHV0OiAkZGF0YSkge1xyXG4gICAgICBpZFxyXG4gICAgICBuYW1lXHJcbiAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgdXBkYXRlVGltZVxyXG4gICAgICBpc0RlbGV0ZVxyXG4gICAgICB0eXBlXHJcbiAgICAgIHZhbHVlXHJcbiAgICAgIHJlbWFya1xyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IGNhdGVnb3J5TGlzdCA9IGdxbGBcclxuICBxdWVyeSBxdWVyeV9xdWVyeV90ZXN0TG9uZzU2NSgkZGF0YTogQ2F0ZWdvcnlMaXN0SW5wdXQpIHtcclxuICAgIGNhdGVnb3J5TGlzdChkYXRhOiAkZGF0YSkge1xyXG4gICAgICB0b3RhbFxyXG4gICAgICBsaXN0IHtcclxuICAgICAgICAuLi5DYXRlZ29yeVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gICR7ZnJhZ21lbnQuQ2F0ZWdvcnlGaWVsZHN9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBkb2MgPSB7XHJcbiAgZ2V0VXNlckxpc3REb2MsXHJcbiAgY2F0ZWdvcnlMaXN0LFxyXG4gIGdldERhdGFDb25maWcsXHJcbiAgaG9tZUNhcm91c2VsSW1ncyxcclxuICByZWdpc3RlclVzZXI6IGdxbGBcclxuICAgIG11dGF0aW9uIG11dGF0aW9uX3JlZ2lzdGVyVXNlOTk4KCRkYXRhOiBVc2VySXRlbUlucHV0KSB7XHJcbiAgICAgIHJlZ2lzdGVyVXNlcihkYXRhOiAkZGF0YSkge1xyXG4gICAgICAgIHRva2VuXHJcbiAgICAgICAgcmVmcmVzaHRva2VuXHJcbiAgICAgICAgdXNlciB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgICAgdXBkYXRlVGltZVxyXG4gICAgICAgICAgaXNEZWxldGVcclxuICAgICAgICAgIHBhc3N3b3JkXHJcbiAgICAgICAgICB0eXBlXHJcbiAgICAgICAgICB1c2VySW5mbyB7XHJcbiAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBgLFxyXG4gIHJlZnJlc2hUb2tlbjogZ3FsYFxyXG4gICAgcXVlcnkgcmVmcmVzaFRva2VuKCRkYXRhOiBTdHJpbmchKSB7XHJcbiAgICAgIHJlZnJlc2hUb2tlbihyZWZyZXNodG9rZW46ICRkYXRhKSB7XHJcbiAgICAgICAgcmVmcmVzaHRva2VuXHJcbiAgICAgICAgdG9rZW5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIGAsXHJcbiAgbG9naW46IGdxbGBcclxuICAgIHF1ZXJ5IGxvZ2luKCRkYXRhOiBVc2VySXRlbUlucHV0KSB7XHJcbiAgICAgIGxvZ2luKHVzZXI6ICRkYXRhKSB7XHJcbiAgICAgICAgdG9rZW5cclxuICAgICAgICByZWZyZXNodG9rZW5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIGAsXHJcbiAgb25lVXNlcjogZ3FsYFxyXG4gICAgcXVlcnkgb25lVXNlciB7XHJcbiAgICAgIG9uZVVzZXIge1xyXG4gICAgICAgIC4uLlVzZXJGaWVsZHNcclxuICAgICAgICB1c2VySW5mbyB7XHJcbiAgICAgICAgICAuLi5Vc2VySW5mb0ZpZWxkc1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5Vc2VySW5mb0ZpZWxkc31cclxuICAgICR7ZnJhZ21lbnQuVXNlckZpZWxkc31cclxuICBgLFxyXG4gIG9yZGVyTGlzdDogZ3FsYFxyXG4gICAgcXVlcnkgb3JkZXJMaXN0KCRkYXRhOiBPcmRlcklucHV0KXtcclxuICAgICAgb3JkZXJMaXN0IChvcmRlcklucHV0OiAkZGF0YSwgZnJvbVVzZXI6IHRydWUpIHtcclxuICAgICAgICBsaXN0IHtcclxuICAgICAgICAgIC4uLk9yZGVySW5mb0ZpZWxkc1xyXG4gICAgICAgICAgck9yZGVyUHJvZHVjdCB7XHJcbiAgICAgICAgICAgIC4uLlJPcmRlclByb2R1Y3RGaWVsZHNcclxuICAgICAgICAgICAgcHJvZHVjdCB7XHJcbiAgICAgICAgICAgICAgLi4uUHJvZHVjdEZpZWxkc1xyXG4gICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAuLi5JbWdGaWVsZHNcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuT3JkZXJJbmZvRmllbGRzfVxyXG4gICAgJHtmcmFnbWVudC5ST3JkZXJQcm9kdWN0RmllbGRzfVxyXG4gICAgJHtmcmFnbWVudC5Qcm9kdWN0RmllbGRzfVxyXG4gICAgJHtmcmFnbWVudC5JbWdGaWVsZHN9XHJcbiAgYCxcclxuICBvcmRlckRldGFpbDogZ3FsYFxyXG4gICAgcXVlcnkgKCRpZDogU3RyaW5nKSB7XHJcbiAgICAgIHNlbGZBZGRyZXNzOiBnZXREYXRhQ29uZmlnKGRhdGFDb25maWdJbnB1dDoge1xyXG4gICAgICAgIHR5cGU6IFwiJHtEaWN0VHlwZUVudW0uU2VsZkFkZHJlc3N9XCJcclxuICAgICAgfSkge1xyXG4gICAgICAgIC4uLkRhdGFDb25maWdGaWVsZHNcclxuICAgICAgfVxyXG4gICAgICBvcmRlckRldGFpbChpZDogJGlkKSB7XHJcbiAgICAgICAgLi4uT3JkZXJJbmZvRmllbGRzXHJcbiAgICAgICAgck9yZGVyUHJvZHVjdCB7XHJcbiAgICAgICAgICAuLi5ST3JkZXJQcm9kdWN0RmllbGRzXHJcbiAgICAgICAgICBwcm9kdWN0IHtcclxuICAgICAgICAgICAgLi4uUHJvZHVjdEZpZWxkc1xyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgIC4uLkltZ0ZpZWxkc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHVzZXIge1xyXG4gICAgICAgICAgLi4uVXNlckZpZWxkc1xyXG4gICAgICAgICAgdXNlckluZm8ge1xyXG4gICAgICAgICAgICAuLi5Vc2VySW5mb0ZpZWxkc1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB1c2VyQWRkcmVzcyB7XHJcbiAgICAgICAgICAuLi5Vc2VyQWRkcmVzc0ZpZWxkc1xyXG4gICAgICAgIH1cclxuICAgICAgICB1c2VyUGF5Q2FyZCB7XHJcbiAgICAgICAgICAuLi5Vc2VyUGF5Q2FyZEZpZWxkc1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5EYXRhQ29uZmlnRmllbGRzfVxyXG4gICAgJHtmcmFnbWVudC5PcmRlckluZm9GaWVsZHN9XHJcbiAgICAke2ZyYWdtZW50LlJPcmRlclByb2R1Y3RGaWVsZHN9XHJcbiAgICAke2ZyYWdtZW50LlByb2R1Y3RGaWVsZHN9XHJcbiAgICAke2ZyYWdtZW50LkltZ0ZpZWxkc31cclxuICAgICR7ZnJhZ21lbnQuVXNlckZpZWxkc31cclxuICAgICR7ZnJhZ21lbnQuVXNlckluZm9GaWVsZHN9XHJcbiAgICAke2ZyYWdtZW50LlVzZXJQYXlDYXJkRmllbGRzfVxyXG4gICAgJHtmcmFnbWVudC5Vc2VyQWRkcmVzc0ZpZWxkc31cclxuICBgLFxyXG4gIHVwZGF0ZVBhc3N3b3JkOiBncWxgXHJcbiAgICBtdXRhdGlvbiAoJGRhdGE6IFVwZGF0ZVBhc3N3b3JkSW5wdXQpIHtcclxuICAgICAgdXBkYXRlUGFzc3dvcmQgKGRhdGE6ICRkYXRhKSB7XHJcbiAgICAgICAgdXNlciB7XHJcbiAgICAgICAgICAuLi5Vc2VyRmllbGRzXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF1dGhCb2R5IHtcclxuICAgICAgICAgIHRva2VuXHJcbiAgICAgICAgICByZWZyZXNodG9rZW5cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuVXNlckZpZWxkc31cclxuICBgLFxyXG4gIHBheUNhcmRMaXN0T25lVXNlcjogZ3FsYFxyXG4gICAgcXVlcnkge1xyXG4gICAgICBwYXlDYXJkTGlzdE9uZVVzZXIge1xyXG4gICAgICAgIC4uLlVzZXJQYXlDYXJkRmllbGRzXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuVXNlclBheUNhcmRGaWVsZHN9XHJcbiAgYCxcclxuICB1c2VyUGF5Q2FyZDogZ3FsYFxyXG4gICAgcXVlcnkgKCRkYXRhOiBVc2VyUGF5Q2FyZEl0ZW1JbnB1dCkge1xyXG4gICAgICB1c2VyUGF5Q2FyZCAodXNlclBheUNhcmQ6ICRkYXRhKSB7XHJcbiAgICAgICAgLi4uVXNlclBheUNhcmRGaWVsZHNcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5Vc2VyUGF5Q2FyZEZpZWxkc31cclxuICBgLFxyXG4gIHNhdmVVc2VyUGF5Q2FyZDogZ3FsYFxyXG4gICAgbXV0YXRpb24gKCRkYXRhOiBVc2VyUGF5Q2FyZEl0ZW1JbnB1dCl7XHJcbiAgICAgIHNhdmVVc2VyUGF5Q2FyZCAodXNlclBheUNhcmQ6ICRkYXRhKSB7XHJcbiAgICAgICAgLi4uVXNlclBheUNhcmRGaWVsZHNcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5Vc2VyUGF5Q2FyZEZpZWxkc31cclxuICBgLFxyXG4gIHNldFVzZXJQYXlDYXJkRGVmYXVsdDogZ3FsYFxyXG4gICAgbXV0YXRpb24gKCRkYXRhOiBVc2VyUGF5Q2FyZEl0ZW1JbnB1dCkge1xyXG4gICAgICBzZXRVc2VyUGF5Q2FyZERlZmF1bHQgKHVzZXJQYXlDYXJkOiAkZGF0YSkge1xyXG4gICAgICAgIC4uLlVzZXJQYXlDYXJkRmllbGRzXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuVXNlclBheUNhcmRGaWVsZHN9XHJcbiAgYCxcclxuICBwaWNrdXBBZGRyZXNzOiBncWxgXHJcbiAgICBxdWVyeSB7XHJcbiAgICAgIGdldERhdGFDb25maWcoZGF0YUNvbmZpZ0lucHV0OiB7XHJcbiAgICAgICAgdHlwZTogXCIke0RpY3RUeXBlRW51bS5TZWxmQWRkcmVzc31cIlxyXG4gICAgICB9KSB7XHJcbiAgICAgICAgLi4uRGF0YUNvbmZpZ0ZpZWxkc1xyXG4gICAgICB9XHJcbiAgICAgIG9uZVVzZXIge1xyXG4gICAgICAgIC4uLlVzZXJGaWVsZHNcclxuICAgICAgICB1c2VySW5mbyB7XHJcbiAgICAgICAgICAuLi5Vc2VySW5mb0ZpZWxkc1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5Vc2VySW5mb0ZpZWxkc31cclxuICAgICR7ZnJhZ21lbnQuRGF0YUNvbmZpZ0ZpZWxkc31cclxuICAgICR7ZnJhZ21lbnQuVXNlckZpZWxkc31cclxuICBgLFxyXG4gIHVwZGF0ZVVzZXJJbmZvOiBncWxgXHJcbiAgICBtdXRhdGlvbiAoJHVzZXJJbmZvOiBVc2VySW5mb0l0ZW1JbnB1dCkge1xyXG4gICAgICB1cGRhdGVVc2VySW5mbyAodXNlckluZm86ICR1c2VySW5mbykge1xyXG4gICAgICAgIC4uLlVzZXJJbmZvRmllbGRzXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuVXNlckluZm9GaWVsZHN9XHJcbiAgYCxcclxuICB1c2VyQWRkcmVzc0xpc3RPbmVVc2VyOiBncWxgXHJcbiAgICBxdWVyeSB7XHJcbiAgICAgIHVzZXJBZGRyZXNzTGlzdE9uZVVzZXIge1xyXG4gICAgICAgIC4uLlVzZXJBZGRyZXNzRmllbGRzXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuVXNlckFkZHJlc3NGaWVsZHN9XHJcbiAgYCxcclxuICB1c2VyQWRkcmVzczogZ3FsYFxyXG4gICAgcXVlcnkgKCRkYXRhOiBVc2VyQWRkcmVzc0l0ZW1JbnB1dCkge1xyXG4gICAgICB1c2VyQWRkcmVzcyAodXNlckFkZHJlc3M6ICRkYXRhKSB7XHJcbiAgICAgICAgLi4uVXNlckFkZHJlc3NGaWVsZHNcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5Vc2VyQWRkcmVzc0ZpZWxkc31cclxuICBgLFxyXG4gIHNhdmVVc2VyQWRkcmVzczogZ3FsYFxyXG4gICAgbXV0YXRpb24gKCRkYXRhOiBVc2VyQWRkcmVzc0l0ZW1JbnB1dCl7XHJcbiAgICAgIHNhdmVVc2VyQWRkcmVzcyAodXNlckFkZHJlc3M6ICRkYXRhKSB7XHJcbiAgICAgICAgLi4uVXNlckFkZHJlc3NGaWVsZHNcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5Vc2VyQWRkcmVzc0ZpZWxkc31cclxuICBgLFxyXG4gIHNldFVzZXJBZGRyZXNzRGVmYXVsdDogZ3FsYFxyXG4gICAgbXV0YXRpb24gKCRkYXRhOiBVc2VyQWRkcmVzc0l0ZW1JbnB1dCkge1xyXG4gICAgICBzZXRVc2VyQWRkcmVzc0RlZmF1bHQgKHVzZXJBZGRyZXNzOiAkZGF0YSkge1xyXG4gICAgICAgIC4uLlVzZXJBZGRyZXNzRmllbGRzXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuVXNlckFkZHJlc3NGaWVsZHN9XHJcbiAgYCxcclxuICBwcm9kdWN0c0luQ2F0ZWdvcnk6IGdxbGBcclxuICAgIHF1ZXJ5ICgkZGF0YTogQ2F0ZWdvcnlJdGVtSW5wdXQsICRwcm9kdWN0SXRlbUlucHV0OiBQcm9kdWN0SXRlbUlucHV0KSB7XHJcbiAgICAgIHByb2R1Y3RzSW5DYXRlZ29yeShjYXRlZ29yeUl0ZW1JbnB1dDogJGRhdGEsIHByb2R1Y3RJdGVtSW5wdXQ6ICRwcm9kdWN0SXRlbUlucHV0KSB7XHJcbiAgICAgICAgLi4uUHJvZHVjdEZpZWxkc1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAuLi5JbWdGaWVsZHNcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY2F0ZWdvcnlMaXN0KGRhdGE6IHtcclxuICAgICAgICBjYXRlZ29yeToge1xyXG4gICAgICAgICAgcGFyZW50Q2F0ZWdvcnk6ICRkYXRhXHJcbiAgICAgICAgfVxyXG4gICAgICB9KSB7XHJcbiAgICAgICAgdG90YWxcclxuICAgICAgICBsaXN0IHtcclxuICAgICAgICAgIC4uLkNhdGVnb3J5XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAke2ZyYWdtZW50LlByb2R1Y3RGaWVsZHN9XHJcbiAgICAke2ZyYWdtZW50LkltZ0ZpZWxkc31cclxuICAgICR7ZnJhZ21lbnQuQ2F0ZWdvcnlGaWVsZHN9XHJcbiAgYCxcclxuICBjYXRlZ29yeUxldmVsOiBncWxgXHJcbiAgICBxdWVyeSAoJGRhdGE6IENhdGVnb3J5SXRlbUlucHV0KSB7XHJcbiAgICAgIGNhdGVnb3J5TGV2ZWwoY2F0ZWdvcnlJdGVtSW5wdXQ6ICRkYXRhKVxyXG4gICAgfVxyXG4gIGAsXHJcbiAgb25lQ2F0ZWdvcnk6IGdxbGBcclxuICAgIHF1ZXJ5ICgkZGF0YTogQ2F0ZWdvcnlJdGVtSW5wdXQpIHtcclxuICAgICAgb25lQ2F0ZWdvcnkoZGF0YTogJGRhdGEpIHtcclxuICAgICAgICAuLi5DYXRlZ29yeVxyXG4gICAgICAgIHBhcmVudENhdGVnb3J5IHtcclxuICAgICAgICAgIC4uLkNhdGVnb3J5XHJcbiAgICAgICAgICBwYXJlbnRDYXRlZ29yeSB7XHJcbiAgICAgICAgICAgIC4uLkNhdGVnb3J5XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAke2ZyYWdtZW50LkNhdGVnb3J5RmllbGRzfVxyXG4gIGAsXHJcbiAgcHJvZHVjdExpc3Q6IGdxbGBcclxuICAgIHF1ZXJ5ICgkcHJvZHVjdElucHV0OiBQcm9kdWN0SXRlbUlucHV0LCAkb3JkZXJCeUlucHV0OiBPcmRlckJ5SW5wdXQpIHtcclxuICAgICAgcHJvZHVjdExpc3QocHJvZHVjdElucHV0OiAkcHJvZHVjdElucHV0LCBvcmRlckJ5SW5wdXQ6ICRvcmRlckJ5SW5wdXQpIHtcclxuICAgICAgICB0b3RhbFxyXG4gICAgICAgIGxpc3Qge1xyXG4gICAgICAgICAgLi4uUHJvZHVjdEZpZWxkc1xyXG4gICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgLi4uSW1nRmllbGRzXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAke2ZyYWdtZW50LlByb2R1Y3RGaWVsZHN9XHJcbiAgICAke2ZyYWdtZW50LkltZ0ZpZWxkc31cclxuICBgLFxyXG4gIHVwZGF0ZU51bVNob3BDYXJ0OiBncWxgXHJcbiAgICBtdXRhdGlvbiAoJHNob3BDYXJ0OiBTaG9wQ2FydEl0ZW1JbnB1dCwgJHVwZGF0ZU51bTogRmxvYXQpIHtcclxuICAgICAgdXBkYXRlTnVtU2hvcENhcnQgKHNob3BDYXJ0OiAkc2hvcENhcnQsIHVwZGF0ZU51bTogJHVwZGF0ZU51bSkge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgbnVtYmVyXHJcbiAgICAgICAgcHJvZHVjdCB7XHJcbiAgICAgICAgICAuLi5Qcm9kdWN0RmllbGRzXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHVzZXIge1xyXG4gICAgICAgICAgLi4uVXNlckZpZWxkc1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5Qcm9kdWN0RmllbGRzfVxyXG4gICAgJHtmcmFnbWVudC5Vc2VyRmllbGRzfVxyXG4gIGAsXHJcbiAgdXNlclNob3BDYXJ0TGlzdDogZ3FsYFxyXG4gICAgcXVlcnkge1xyXG4gICAgICBzaG9wQ2FydExpc3Qge1xyXG4gICAgICAgIC4uLlNob3BDYXJ0RmllbGRzXHJcbiAgICAgICAgcHJvZHVjdCB7XHJcbiAgICAgICAgICAuLi5Qcm9kdWN0RmllbGRzXHJcbiAgICAgICAgICBjYXRlZ29yeSB7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIHBhcmVudENhdGVnb3J5IHtcclxuICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgIHBhcmVudENhdGVnb3J5IHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAuLi5JbWdGaWVsZHNcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuU2hvcENhcnRGaWVsZHN9XHJcbiAgICAke2ZyYWdtZW50LlByb2R1Y3RGaWVsZHN9XHJcbiAgICAke2ZyYWdtZW50LkltZ0ZpZWxkc31cclxuICBgLFxyXG4gIHVwZGF0ZVNob3BDYXJ0OiBncWxgXHJcbiAgICBtdXRhdGlvbiAoJHNob3BDYXJ0OiBTaG9wQ2FydEl0ZW1JbnB1dCl7XHJcbiAgICAgIHVwZGF0ZVNob3BDYXJ0IChzaG9wQ2FydDogJHNob3BDYXJ0KSB7XHJcbiAgICAgICAgLi4uU2hvcENhcnRGaWVsZHNcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5TaG9wQ2FydEZpZWxkc31cclxuICBgLFxyXG4gIG9yZGVyQ29uZmlybUluZm86IGdxbGBcclxuICAgIHF1ZXJ5IHtcclxuICAgICAgZ2V0RGF0YUNvbmZpZyhkYXRhQ29uZmlnSW5wdXQ6IHtcclxuICAgICAgICB0eXBlOiBcIiR7RGljdFR5cGVFbnVtLlNlbGZBZGRyZXNzfVwiXHJcbiAgICAgIH0pIHtcclxuICAgICAgICAuLi5EYXRhQ29uZmlnRmllbGRzXHJcbiAgICAgIH1cclxuICAgICAgb25lVXNlciB7XHJcbiAgICAgICAgLi4uVXNlckZpZWxkc1xyXG4gICAgICAgIHVzZXJJbmZvIHtcclxuICAgICAgICAgIC4uLlVzZXJJbmZvRmllbGRzXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHBheUNhcmRMaXN0T25lVXNlciB7XHJcbiAgICAgICAgLi4uVXNlclBheUNhcmRGaWVsZHNcclxuICAgICAgfVxyXG4gICAgICB1c2VyQWRkcmVzc0xpc3RPbmVVc2VyIHtcclxuICAgICAgICAuLi5Vc2VyQWRkcmVzc0ZpZWxkc1xyXG4gICAgICB9XHJcbiAgICAgIGZyZWlnaHRDb25maWc6IGdldERhdGFDb25maWcgKGRhdGFDb25maWdJbnB1dDoge1xyXG4gICAgICAgIHR5cGU6IFwiJHtEaWN0VHlwZUVudW0uRnJlaWdodH1cIlxyXG4gICAgICB9KSB7XHJcbiAgICAgICAgLi4uRGF0YUNvbmZpZ0ZpZWxkc1xyXG4gICAgICB9XHJcbiAgICAgIHVzZXJMZXZlbExpc3Q6IGdldERpY3RMaXN0IChkaWN0SW5wdXQ6IHtcclxuICAgICAgICBkaWN0VHlwZUNvZGU6IFwiVXNlckxldmVsXCJcclxuICAgICAgfSkge1xyXG4gICAgICAgIC4uLkRpY3RGaWVsZHNcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5Vc2VyQWRkcmVzc0ZpZWxkc31cclxuICAgICR7ZnJhZ21lbnQuVXNlclBheUNhcmRGaWVsZHN9XHJcbiAgICAke2ZyYWdtZW50LlVzZXJJbmZvRmllbGRzfVxyXG4gICAgJHtmcmFnbWVudC5Vc2VyRmllbGRzfVxyXG4gICAgJHtmcmFnbWVudC5EYXRhQ29uZmlnRmllbGRzfVxyXG4gICAgJHtmcmFnbWVudC5EaWN0RmllbGRzfVxyXG4gIGAsXHJcbiAgc2F2ZU9yZGVyOiBncWxgXHJcbiAgICBtdXRhdGlvbiAoJG9yZGVySW5mb0l0ZW1JbnB1dDogT3JkZXJJbmZvSXRlbUlucHV0KSB7XHJcbiAgICAgIHNhdmVPcmRlciAob3JkZXJJbmZvSXRlbUlucHV0OiAkb3JkZXJJbmZvSXRlbUlucHV0KSB7XHJcbiAgICAgICAgLi4uT3JkZXJJbmZvRmllbGRzXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuT3JkZXJJbmZvRmllbGRzfVxyXG4gIGAsXHJcbiAgZGljdExpc3Q6IGdxbGBcclxuICAgIHF1ZXJ5ICgkZGF0YTogRGljdElucHV0KSB7XHJcbiAgICAgIGdldERpY3RMaXN0IChkaWN0SW5wdXQ6ICRkYXRhKSB7XHJcbiAgICAgICAgLi4uRGljdEZpZWxkc1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAke2ZyYWdtZW50LkRpY3RGaWVsZHN9XHJcbiAgYCxcclxuICBsaW1pdFRpbWVEYXRhOiBncWxgXHJcbiAgICBxdWVyeSB7XHJcbiAgICAgIGxpbWl0VGltZURhdGE6IGdldERhdGFDb25maWcgKGRhdGFDb25maWdJbnB1dDoge1xyXG4gICAgICAgIHR5cGU6IFwiJHtEaWN0VHlwZUVudW0uUHJvbW90aW9uRmxhc2hTYWxlfVwiXHJcbiAgICAgIH0pIHtcclxuICAgICAgICAuLi5EYXRhQ29uZmlnRmllbGRzXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuRGF0YUNvbmZpZ0ZpZWxkc31cclxuICBgLFxyXG4gIHByb2R1Y3RMaXN0QnlJZHM6IGdxbGBcclxuICAgIHF1ZXJ5ICgkaWRzOiBbU3RyaW5nXSkge1xyXG4gICAgICBwcm9kdWN0TGlzdEJ5SWRzIChpZHM6ICRpZHMpIHtcclxuICAgICAgICB0b3RhbFxyXG4gICAgICAgIGxpc3Qge1xyXG4gICAgICAgICAgLi4uUHJvZHVjdEZpZWxkc1xyXG4gICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgLi4uSW1nRmllbGRzXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAke2ZyYWdtZW50LlByb2R1Y3RGaWVsZHN9XHJcbiAgICAke2ZyYWdtZW50LkltZ0ZpZWxkc31cclxuICBgLFxyXG4gIGdyb3VwUXVldWVMaXN0OiBncWxgXHJcbiAgICBxdWVyeSAoJGdyb3VwUXVldWVJdGVtSW5wdXQ6IEdyb3VwUXVldWVJdGVtSW5wdXQpIHtcclxuICAgICAgZ3JvdXBRdWV1ZUxpc3QgKGdyb3VwUXVldWVJdGVtSW5wdXQ6ICRncm91cFF1ZXVlSXRlbUlucHV0KSB7XHJcbiAgICAgICAgLi4uR3JvdXBRdWV1ZUZpZWxkc1xyXG4gICAgICAgIHByb2R1Y3Qge1xyXG4gICAgICAgICAgLi4uUHJvZHVjdEZpZWxkc1xyXG4gICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgLi4uSW1nRmllbGRzXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdyb3VwT3JkZXIge1xyXG4gICAgICAgICAgLi4uR3JvdXBPcmRlckZpZWxkc1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5Hcm91cFF1ZXVlRmllbGRzfVxyXG4gICAgJHtmcmFnbWVudC5Qcm9kdWN0RmllbGRzfVxyXG4gICAgJHtmcmFnbWVudC5JbWdGaWVsZHN9XHJcbiAgICAke2ZyYWdtZW50Lkdyb3VwT3JkZXJGaWVsZHN9XHJcbiAgYCxcclxuICB1cGRhdGVPcmRlcjogZ3FsYFxyXG4gICAgbXV0YXRpb24gKCRvcmRlckluZm9JdGVtSW5wdXQ6IE9yZGVySW5mb0l0ZW1JbnB1dCkge1xyXG4gICAgICB1cGRhdGVPcmRlciAob3JkZXJJbmZvSXRlbUlucHV0OiAkb3JkZXJJbmZvSXRlbUlucHV0KSB7XHJcbiAgICAgICAgLi4uT3JkZXJJbmZvRmllbGRzXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuT3JkZXJJbmZvRmllbGRzfVxyXG4gIGAsXHJcbiAgc2F2ZUdyb3VwT3JkZXI6IGdxbGBcclxuICAgIG11dGF0aW9uICgkb3JkZXJJbmZvSXRlbUlucHV0OiBPcmRlckluZm9JdGVtSW5wdXQsICRncm91cE9yZGVySXRlbUlucHV0OiBHcm91cE9yZGVySXRlbUlucHV0LCAkZ3JvdXBRdWV1ZUl0ZW1JbnB1dDogR3JvdXBRdWV1ZUl0ZW1JbnB1dCkge1xyXG4gICAgICBzYXZlR3JvdXBPcmRlciAob3JkZXJJbmZvSXRlbUlucHV0OiAkb3JkZXJJbmZvSXRlbUlucHV0LCBncm91cE9yZGVySXRlbUlucHV0OiAkZ3JvdXBPcmRlckl0ZW1JbnB1dCwgZ3JvdXBRdWV1ZUl0ZW1JbnB1dDogJGdyb3VwUXVldWVJdGVtSW5wdXQpIHtcclxuICAgICAgICAuLi5PcmRlckluZm9GaWVsZHNcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5PcmRlckluZm9GaWVsZHN9XHJcbiAgYCxcclxuICBwcm9tb0NvZGVMaXN0OiBncWxgXHJcbiAgICBxdWVyeSAoJHByb21vQ29kZUl0ZW1JbnB1dDogUHJvbW9Db2RlSXRlbUlucHV0KSB7XHJcbiAgICAgIHByb21vQ29kZUxpc3QgKHByb21vQ29kZUl0ZW1JbnB1dDogJHByb21vQ29kZUl0ZW1JbnB1dCkge1xyXG4gICAgICAgIC4uLlByb21vQ29kZUZpZWxkc1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAke2ZyYWdtZW50LlByb21vQ29kZUZpZWxkc31cclxuICBgLFxyXG4gIGNhdGVnb3J5Um9vdFBhcmVudDogZ3FsYFxyXG4gICAgcXVlcnkgKCRjYXRlZ29yeUl0ZW1JbnB1dDogQ2F0ZWdvcnlJdGVtSW5wdXQpIHtcclxuICAgICAgY2F0ZWdvcnlSb290UGFyZW50IChjYXRlZ29yeUl0ZW1JbnB1dDogJGNhdGVnb3J5SXRlbUlucHV0KSB7XHJcbiAgICAgICAgLi4uQ2F0ZWdvcnlcclxuICAgICAgICBwYXJlbnRDYXRlZ29yeSB7XHJcbiAgICAgICAgICAuLi5DYXRlZ29yeVxyXG4gICAgICAgICAgcGFyZW50Q2F0ZWdvcnkge1xyXG4gICAgICAgICAgICAuLi5DYXRlZ29yeVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5DYXRlZ29yeUZpZWxkc31cclxuICBgLFxyXG4gIHByb2R1Y3RMaXN0T3JkZXJCeU9yZGVyOiBncWxgXHJcbiAgICBxdWVyeSAoJG9yZGVyQnlUeXBlOiBTdHJpbmcsICRwcm9kdWN0SW5wdXQ6IFByb2R1Y3RJdGVtSW5wdXQpIHtcclxuICAgICAgcHJvZHVjdExpc3RPcmRlckJ5T3JkZXIgKG9yZGVyQnlUeXBlOiAkb3JkZXJCeVR5cGUsIHByb2R1Y3RJbnB1dDogJHByb2R1Y3RJbnB1dCkge1xyXG4gICAgICAgIGxpc3Qge1xyXG4gICAgICAgICAgck9yZGVyUHJvZHVjdCB7XHJcbiAgICAgICAgICAgIC4uLlJPcmRlclByb2R1Y3RGaWVsZHNcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC4uLlByb2R1Y3RGaWVsZHNcclxuICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIC4uLkltZ0ZpZWxkc1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0b3RhbFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAke2ZyYWdtZW50LlByb2R1Y3RGaWVsZHN9XHJcbiAgICAke2ZyYWdtZW50LkltZ0ZpZWxkc31cclxuICAgICR7ZnJhZ21lbnQuUk9yZGVyUHJvZHVjdEZpZWxkc31cclxuICBgLFxyXG4gIHNlYXJjaERhdGE6IGdxbGBcclxuICAgIHF1ZXJ5ICgka2V5d29yZDogU3RyaW5nKSB7XHJcbiAgICAgIHByb2R1Y3RMaXN0KHByb2R1Y3RJbnB1dDogeyBuYW1lOiAka2V5d29yZCB9KSB7XHJcbiAgICAgICAgdG90YWxcclxuICAgICAgICBsaXN0IHtcclxuICAgICAgICAgIC4uLlByb2R1Y3RGaWVsZHNcclxuICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIC4uLkltZ0ZpZWxkc1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBncm91cFByb2R1Y3RMaXN0OiBwcm9kdWN0TGlzdChwcm9kdWN0SW5wdXQ6IHsgbmFtZTogJGtleXdvcmQsIGlzR3JvdXA6IDEgfSkge1xyXG4gICAgICAgIHRvdGFsXHJcbiAgICAgICAgbGlzdCB7XHJcbiAgICAgICAgICAuLi5Qcm9kdWN0RmllbGRzXHJcbiAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAuLi5JbWdGaWVsZHNcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZGFyZW5DYXJkUHJvbW9Db2RlTGlzdDogcHJvbW9Db2RlTGlzdChwcm9tb0NvZGVJdGVtSW5wdXQ6IHtcclxuICAgICAgICBwcm9tb0NvZGVUeXBlOiBcIiR7UHJvbW9Db2RlVHlwZUVudW0uRGFyZW5DYXJkfVwiLFxyXG4gICAgICAgIHRpdGxlOiAka2V5d29yZCxcclxuICAgICAgfSkge1xyXG4gICAgICAgIC4uLlByb21vQ29kZUZpZWxkc1xyXG4gICAgICB9XHJcbiAgICAgIHByb21vQ29kZVByb21vQ29kZUxpc3Q6IHByb21vQ29kZUxpc3QocHJvbW9Db2RlSXRlbUlucHV0OiB7XHJcbiAgICAgICAgcHJvbW9Db2RlVHlwZTogXCIke1Byb21vQ29kZVR5cGVFbnVtLlByb21vQ29kZX1cIixcclxuICAgICAgICB0aXRsZTogJGtleXdvcmQsXHJcbiAgICAgIH0pIHtcclxuICAgICAgICAuLi5Qcm9tb0NvZGVGaWVsZHNcclxuICAgICAgfVxyXG4gICAgICBvbmVVc2VyIHtcclxuICAgICAgICAuLi5Vc2VyRmllbGRzXHJcbiAgICAgICAgdXNlckluZm8ge1xyXG4gICAgICAgICAgLi4uVXNlckluZm9GaWVsZHNcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuVXNlckZpZWxkc31cclxuICAgICR7ZnJhZ21lbnQuVXNlckluZm9GaWVsZHN9XHJcbiAgICAke2ZyYWdtZW50LlByb2R1Y3RGaWVsZHN9XHJcbiAgICAke2ZyYWdtZW50LkltZ0ZpZWxkc31cclxuICAgICR7ZnJhZ21lbnQuUHJvbW9Db2RlRmllbGRzfVxyXG4gIGAsXHJcbn1cclxuXHJcbiIsImV4cG9ydCBlbnVtIFByb21vQ29kZVR5cGVFbnVtIHtcclxuICBEYXJlbkNhcmQgPSAnRGFyZW5DYXJkJyxcclxuICBQcm9tb0NvZGUgPSAnUHJvbW9Db2RlJyxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRGlzY291bnRUeXBlRW51bSB7XHJcbiAgUGVyY2VudGFnZSA9ICdQZXJjZW50YWdlJyxcclxuICBBbW91bnQgPSAnQW1vdW50JyxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gU1Mge1xyXG4gIFNTLFxyXG4gIFNTMixcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRGlzY291bnRDb25kaXRpb25FbnVtIHtcclxuICBObyA9ICdObycsXHJcbiAgQW1vdW50ID0gJ0Ftb3VudCcsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFByb2R1Y3RTdXBwbGVtZW50IHtcclxuICBfLFxyXG4gIFBlbmRpbmcsXHJcbiAgRmluaXNoLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUHJvZHVjdFN1cHBsZW1lbnRTdHJpbmc6IGFueSA9IHtcclxuICAxOiAn6YWN6LSn5LitJyxcclxuICAyOiAn5bey5a6M5oiQJyxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gT3JkZXJTdGF0ZSB7XHJcbiAgT3JkZXJlZCA9IDEsXHJcbiAgUGFpZCA9IDIsXHJcbiAgUGlja2luZyA9IDMsXHJcbiAgUGlja2VkVXAgPSA0LFxyXG4gIEZpbmlzaCA9IDUsXHJcbiAgQ2FuY2VsID0gNixcclxufVxyXG5cclxuLy8gMTrku6Pku5jmrL4gMjrlt7Lku5jmrL4gMzrlt7Llj5HotKcgNDrlt7LmlLbotKcgNTrlt7Llj5bmtoggNjrlt7LlrozmiJAgNzrlt7LpgIDlm55cclxuY29uc3QgX3M6IHtcclxuICBba2V5IGluIG51bWJlcl06IHN0cmluZ1xyXG59ID0ge1xyXG4gIDE6ICflvoXku5jmrL4nLFxyXG4gIDI6ICflt7Lku5jmrL4nLFxyXG4gIDM6ICflt7Llj5HotKcnLFxyXG4gIDQ6ICflt7LmlLbotKcnLFxyXG4gIDU6ICflt7Llj5bmtognLFxyXG4gIDY6ICflt7LlrozmiJAnLFxyXG4gIDc6ICflt7LpgIDlm54nLFxyXG59XHJcbmV4cG9ydCBjb25zdCBvcmRlclN0YXRlVG9TdHJpbmcgPSAoczogbnVtYmVyIHwgbnVsbCA9IDApID0+IHtcclxuICByZXR1cm4gX3M/LlsocyA/PyAwKV0gPz8gJydcclxufVxyXG5cclxuLy8g6YWN572u566h55CGXHJcbmV4cG9ydCBlbnVtIERpY3RUeXBlRW51bSB7XHJcbiAgR3JvdXBQcmVjaXNpb24gPSAnR3JvdXBQcmVjaXNpb24nLFxyXG4gIFVzZXJMZXZlbCA9ICdVc2VyTGV2ZWwnLFxyXG4gIEZyZWlnaHQgPSAnRnJlaWdodCcsXHJcbiAgSGVscERvY3VtZW50YXRpb25UeXBlID0gJ0hlbHBEb2N1bWVudGF0aW9uVHlwZScsXHJcbiAgSGVscERvY3VtZW50YXRpb24gPSAnSGVscERvY3VtZW50YXRpb24nLFxyXG4gIFByb21vdGlvblRoZW1lU2VsZWN0ID0gJ1Byb21vdGlvblRoZW1lU2VsZWN0JyxcclxuICBQcm9tb3Rpb25GbGFzaFNhbGUgPSAnUHJvbW90aW9uRmxhc2hTYWxlJyxcclxuICBIb21lQ2Fyb3VzZWwgPSAnSG9tZUNhcm91c2VsJyxcclxuICBPcmRlclN0YXRlID0gJ09yZGVyU3RhdGUnLFxyXG4gIFNlbGZBZGRyZXNzID0gJ1NlbGZBZGRyZXNzJyxcclxuICBBcHBNb2R1bGUgPSAnQXBwTW9kdWxlJyxcclxufVxyXG5cclxuLy8g6L2u5pKt5Zu+5YWz6IGU6aG5XHJcbmV4cG9ydCBlbnVtIFJlbGF0ZWRPYmpUeXBlRW51bSB7XHJcbiAgUHJvbW9Db2RlID0gJ1Byb21vQ29kZScsXHJcbiAgUHJvbW90aW9uRmxhc2hTYWxlID0gJ1Byb21vdGlvbkZsYXNoU2FsZScsXHJcbiAgUHJvbW90aW9uVGhlbWVTZWxlY3QgPSAnUHJvbW90aW9uVGhlbWVTZWxlY3QnLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBBcHBGb290QmFyIHtcclxuICBob21lID0gJ2hvbWUnLFxyXG4gIGdyb3VwID0gJ2dyb3VwJyxcclxuICBjYXJkID0gJ2NhcmQnLFxyXG4gIGNhcnQgPSAnY2FydCcsXHJcbiAgbWUgPSAnbWUnXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEFwcE1vZHVsZVR5cGVFbnVtIHtcclxuICBjYXRlZ29yeVNlbGVjdGlvbiA9ICdjYXRlZ29yeVNlbGVjdGlvbicsXHJcbiAgbGltaXRUaW1lID0gJ2xpbWl0VGltZScsXHJcbiAgc2FsZXNSYW5rID0gJ3NhbGVzUmFuaycsXHJcbiAgdGhlbWVTZWxlY3Rpb24gPSAndGhlbWVTZWxlY3Rpb24nLFxyXG4gIG1heUxpa2UgPSAnbWF5TGlrZScsXHJcbiAgbGluZVJhbmtpbmcgPSAnbGluZVJhbmtpbmcnLFxyXG4gIHRvcFJhbmtpbmcgPSAndG9wUmFua2luZycsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDYXRlZ29yeVJvb3ROYW1lID0gJ3Jvb3QnXHJcblxyXG5leHBvcnQgY29uc3Qgb3JkZXJTdGF0ZUtleXM6IHN0cmluZ1tdID0gT2JqZWN0LnZhbHVlcyhPcmRlclN0YXRlKSBhcyBzdHJpbmdbXVxyXG5cclxuZXhwb3J0IGNvbnN0IFByb3ZpbmNlRGF0YSA9IFtcclxuICBbJ0FMJywgJ0FsYWJhbWEnXSxcclxuICBbJ0FLJywgJ0FsYXNrYSddLFxyXG4gIFsnQVonLCAnQXJpem9uYSddLFxyXG4gIFsnQVInLCAnQXJrYW5zYXMnXSxcclxuICBbJ0NBJywgJ0NhbGlmb3JuaWEnXSxcclxuICBbJ0NPJywgJ0NvbG9yYWRvJ10sXHJcbiAgWydDVCcsICdDb25uZWN0aWN1dCddLFxyXG4gIFsnREUnLCAnRGVsYXdhcmUnXSxcclxuICBbJ0RDJywgJ0Rpc3RyaWN0IE9mIENvbHVtYmlhJ10sXHJcbiAgWydGTCcsICdGbG9yaWRhJ10sXHJcbiAgWydHQScsICdHZW9yZ2lhJ10sXHJcbiAgWydISScsICdIYXdhaWknXSxcclxuICBbJ0lEJywgJ0lkYWhvJ10sXHJcbiAgWydJTCcsICdJbGxpbm9pcyddLFxyXG4gIFsnSU4nLCAnSW5kaWFuYSddLFxyXG4gIFsnSUEnLCAnSW93YSddLFxyXG4gIFsnS1MnLCAnS2Fuc2FzJ10sXHJcbiAgWydLWScsICdLZW50dWNreSddLFxyXG4gIFsnTEEnLCAnTG91aXNpYW5hJ10sXHJcbiAgWydNRScsICdNYWluZSddLFxyXG4gIFsnTUQnLCAnTWFyeWxhbmQnXSxcclxuICBbJ01BJywgJ01hc3NhY2h1c2V0dHMnXSxcclxuICBbJ01JJywgJ01pY2hpZ2FuJ10sXHJcbiAgWydNTicsICdNaW5uZXNvdGEnXSxcclxuICBbJ01TJywgJ01pc3Npc3NpcHBpJ10sXHJcbiAgWydNTycsICdNaXNzb3VyaSddLFxyXG4gIFsnTVQnLCAnTW9udGFuYSddLFxyXG4gIFsnTkUnLCAnTmVicmFza2EnXSxcclxuICBbJ05WJywgJ05ldmFkYSddLFxyXG4gIFsnTkgnLCAnTmV3IEhhbXBzaGlyZSddLFxyXG4gIFsnTkonLCAnTmV3IEplcnNleSddLFxyXG4gIFsnTk0nLCAnTmV3IE1leGljbyddLFxyXG4gIFsnTlknLCAnTmV3IFlvcmsnXSxcclxuICBbJ05DJywgJ05vcnRoIENhcm9saW5hJ10sXHJcbiAgWydORCcsICdOb3J0aCBEYWtvdGEnXSxcclxuICBbJ09IJywgJ09oaW8nXSxcclxuICBbJ09LJywgJ09rbGFob21hJ10sXHJcbiAgWydPUicsICdPcmVnb24nXSxcclxuICBbJ1BBJywgJ1Blbm5zeWx2YW5pYSddLFxyXG4gIFsnUkknLCAnUmhvZGUgSXNsYW5kJ10sXHJcbiAgWydTQycsICdTb3V0aCBDYXJvbGluYSddLFxyXG4gIFsnU0QnLCAnU291dGggRGFrb3RhJ10sXHJcbiAgWydUTicsICdUZW5uZXNzZWUnXSxcclxuICBbJ1RYJywgJ1RleGFzJ10sXHJcbiAgWydVVCcsICdVdGFoJ10sXHJcbiAgWydWVCcsICdWZXJtb250J10sXHJcbiAgWydWQScsICdWaXJnaW5pYSddLFxyXG4gIFsnV0EnLCAnV2FzaGluZ3RvbiddLFxyXG4gIFsnV1YnLCAnV2VzdCBWaXJnaW5pYSddLFxyXG4gIFsnV0knLCAnV2lzY29uc2luJ10sXHJcbiAgWydXWScsICdXeW9taW5nJ10sXHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQaWNrVXBUeXBlTmFtZSA9ICh0eXBlOiBzdHJpbmcgfCAnU2VsZicgfCAnRGVsaXZlcnknKSA9PiB7XHJcbiAgcmV0dXJuICh7XHJcbiAgICBTZWxmOiAn6Ieq5Y+WJyxcclxuICAgIERlbGl2ZXJ5OiAn6YWN6YCBJyxcclxuICB9KVt0eXBlIGFzICdTZWxmJyB8ICdEZWxpdmVyeSddID8/ICcnXHJcbn1cclxuZXhwb3J0IGNvbnN0IFBpY2tVcFR5cGVFbnVtID0ge1xyXG4gIFNlbGY6ICdTZWxmJyxcclxuICBEZWxpdmVyeTogJ0RlbGl2ZXJ5JyxcclxufVxyXG4vLyDng63plIDmjpLooYxcclxuZXhwb3J0IGNvbnN0IFNhbGVSYW5rVHlwZUVudW0gPSB7XHJcbiAgT25lRGF5OiAnT25lRGF5JyxcclxuICBPbmVXZWVrOiAnT25lV2VlaycsXHJcbiAgT25lTW9udGg6ICdPbmVNb250aCcsXHJcbn1cclxuXHJcbiIsImV4cG9ydCBjb25zdCBtcFN0eWxlID0ge1xyXG4gIHJlZDogJyNGODQwMzMnLFxyXG4gIHNoYWRvdzoge1xyXG4gICAgMTogJzAgMXB4IDFweCAwIHJnYmEoMCwwLDAsMC4xNCksIDAgMnB4IDFweCAtMXB4IHJnYmEoMCwwLDAsMC4xMiksIDAgMXB4IDNweCAwIHJnYmEoMCwwLDAsMC4yMCknLFxyXG4gIH0sXHJcbn1cclxuIiwiaW1wb3J0IHtmcFNldFByZX0gZnJvbSAnLi91dGlscydcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRGb3JtOiBNb2RlbEFjdGlvbiA9IChbcGF0aCwgdmFsdWVdLCBvcHRpb24pID0+IHtcclxuICBvcHRpb24uc2V0RGF0YShmcFNldFByZShgZm9ybS4ke3BhdGh9YCwgdmFsdWUpKVxyXG59XHJcbiIsImltcG9ydCB7IE1heWJlIH0gZnJvbSBcIi4uL2dyYXBocWxUeXBlcy90eXBlc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxzID0gKGtleTogTWF5YmU8c3RyaW5nPiB8IHVuZGVmaW5lZCkgPT4ga2V5ID8/ICcnXHJcbiIsIlxyXG5leHBvcnQgY29uc3QgaXNEZXYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50J1xyXG5cclxuZXhwb3J0IGNvbnN0IHNzTG9nID0gKGRhdGE6IGFueSkgPT4ge1xyXG4gIGlmIChpc0Rldikge1xyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuICB9XHJcbiAgcmV0dXJuIGRhdGFcclxufVxyXG4iLCJpbXBvcnQgZ2V0Q29uZmlnIGZyb20gJ25leHQvY29uZmlnJ1xyXG5cclxuY29uc3QgY29uZmlnID0gZ2V0Q29uZmlnKClcclxuXHJcbmNvbnN0IGltZ0RvbWFpbiA9IGNvbmZpZz8ucHVibGljUnVudGltZUNvbmZpZz8uaW1nRG9tYWluID8/ICdodHRwOi8vMTI3LjAuMC4xOjQ0NjQvJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlYWxJbWdVcmwgPSAoc3JjOiBzdHJpbmcgfCB1bmRlZmluZWQgfCBudWxsID0gJycpID0+IHtcclxuICBpZiAoc3JjPy5pbmNsdWRlcygnYmxvYjonKSkge1xyXG4gICAgcmV0dXJuIHNyY1xyXG4gIH1cclxuICByZXR1cm4gYCR7aW1nRG9tYWlufSR7c3JjfWBcclxufVxyXG4iLCIvKiBnbG9iYWwgbG9jYWxTdG9yYWdlICovXHJcbmV4cG9ydCBjb25zdCBzZXRUb2tlbiA9ICh0b2tlbjogc3RyaW5nLCBuYW1lID0gJ3Rva2VuJykgPT4gbG9jYWxTdG9yYWdlLnNldEl0ZW0obmFtZSwgdG9rZW4pXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VG9rZW4gPSAobmFtZSA9ICd0b2tlbicpID0+IGxvY2FsU3RvcmFnZS5nZXRJdGVtKG5hbWUpIHx8ICcnXHJcbiIsImltcG9ydCBmb3JtYXQgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0J1xyXG5pbXBvcnQgc2V0IGZyb20gJ2xvZGFzaC9zZXQnXHJcbmltcG9ydCB7Y2xvbmVEZWVwLCBQcm9wZXJ0eVBhdGgsIGlzRnVuY3Rpb24sIGdldCwgaXNBcnJheSwgbWVyZ2VXaXRoLCBpc1N0cmluZ30gZnJvbSAnbG9kYXNoJ1xyXG5pbXBvcnQge01heWJlfSBmcm9tICcuLi9ncmFwaHFsVHlwZXMvdHlwZXMnXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0T2JqZWN0VVJMID0gKGZpbGU6IGFueSkgPT4ge1xyXG4gIC8vIEB0cy1pZ25vcmVcclxuICByZXR1cm4gd2luZG93Py5jcmVhdGVPYmplY3RVUkw/LihmaWxlKVxyXG4gICAgICA/PyB3aW5kb3c/LlVSTD8uY3JlYXRlT2JqZWN0VVJMPy4oZmlsZSlcclxuICAgICAgPz8gd2luZG93Py53ZWJraXRVUkw/LmNyZWF0ZU9iamVjdFVSTD8uKGZpbGUpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwYXJzZUZsb2F0Rm9ySW5wdXQgPSAodmFsdWU6IGFueSkgPT4ge1xyXG4gIGlmICh2YWx1ZSA9PT0gJy0nIHx8IHZhbHVlID09PSAnJykgcmV0dXJuIHZhbHVlXHJcbiAgdHJ5IHtcclxuICAgIHJldHVybiBwYXJzZUZsb2F0KHZhbHVlKVxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZSlcclxuICB9XHJcbn1cclxuXHJcbnR5cGUgU2V0RGF0YTxTID0gYW55PiA9IFMgfCAoKHByZURhdGE6IFMpID0+IFMpXHJcblxyXG5leHBvcnQgY29uc3QgZnBTZXQgPSA8RSA9IGFueT4ob3JpZ2luOiBhbnksIHBhdGg6IGFueSwgdmFsdWU6IFNldERhdGE8RT4pID0+IHtcclxuICBsZXQgbmV3RGF0YSA9IGNsb25lRGVlcChvcmlnaW4pXHJcbiAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XHJcbiAgICBjb25zdCBvbGREYXRhID0gZ2V0KG9yaWdpbiwgcGF0aClcclxuICAgIHNldChuZXdEYXRhLCBwYXRoLCB2YWx1ZShvbGREYXRhKSlcclxuICB9IGVsc2Uge1xyXG4gICAgc2V0KG5ld0RhdGEsIHBhdGgsIHZhbHVlKVxyXG4gIH1cclxuICByZXR1cm4gbmV3RGF0YVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGVsYXkgPSAodGltZTogbnVtYmVyKSA9PiAobmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIHRpbWUpKSlcclxuXHJcbmV4cG9ydCBjb25zdCBmcFNldFByZTogPFQgZXh0ZW5kcyBvYmplY3Q+KHBhdGg6IFByb3BlcnR5UGF0aCwgbmV3VmFsdWU6IFNldERhdGEpID0+IChvcmlnaW46IFQpID0+IFQgPSAocGF0aDogYW55LCB2YWx1ZSkgPT4gKG9yaWdpbikgPT4ge1xyXG4gIGxldCBuZXdEYXRhID0gY2xvbmVEZWVwKG9yaWdpbilcclxuICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcclxuICAgIGNvbnN0IG9sZERhdGEgPSBnZXQob3JpZ2luLCBwYXRoKVxyXG4gICAgc2V0KG5ld0RhdGEsIHBhdGgsIHZhbHVlKG9sZERhdGEpKVxyXG4gIH0gZWxzZSB7XHJcbiAgICBzZXQobmV3RGF0YSwgcGF0aCwgdmFsdWUpXHJcbiAgfVxyXG4gIHJldHVybiBuZXdEYXRhXHJcbn1cclxuXHJcbmNvbnN0IGN1c3RvbWl6ZXIgPSAob2JqVmFsdWU6IGFueSwgc3JjVmFsdWU6IGFueSkgPT4ge1xyXG4gIGlmIChpc0FycmF5KHNyY1ZhbHVlKSkge1xyXG4gICAgcmV0dXJuIHNyY1ZhbHVlXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZnBNZXJnZTogPFRPYmplY3QsIFRTb3VyY2UxPihcclxuICAgIG9yaWdpbjogVE9iamVjdCxcclxuICAgIG5ld1ZhbHVlOiBUU291cmNlMSxcclxuKSA9PiBUT2JqZWN0ICYgVFNvdXJjZTEgPSAob3JpZ2luLCBuZXdWYWx1ZSkgPT4ge1xyXG4gIHJldHVybiBtZXJnZVdpdGgoe30sIG9yaWdpbiwgbmV3VmFsdWUsIGN1c3RvbWl6ZXIpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmcE1lcmdlUHJlOiA8UHJlLCBOZXcgZXh0ZW5kcyBQYXJ0aWFsPFByZT4+KG5ld1ZhbHVlOiBOZXcpID0+IChvcmlnaW46IFByZSkgPT4gUHJlICYgTmV3ID0gKG5ld1ZhbHVlKSA9PiAocHJlKSA9PiBtZXJnZVdpdGgoe30sIHByZSwgbmV3VmFsdWUsIGN1c3RvbWl6ZXIpXHJcblxyXG5leHBvcnQgY29uc3QgZnBSZW1vdmUgPSAoYXJyOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcclxuICBpZiAoIWFycikgcmV0dXJuIFtdXHJcbiAgcmV0dXJuIFtcclxuICAgIC4uLmFycj8uc2xpY2UoMCwgaW5kZXgpLFxyXG4gICAgLi4uYXJyPy5zbGljZShpbmRleCArIDEsIGFycj8ubGVuZ3RoKSxcclxuICBdXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkZWFsTnVtYmVyWmVybyA9IChsZW5ndGg6IG51bWJlcikgPT4gKG51bTogbnVtYmVyKSA9PiB7XHJcbiAgY29uc3QgX3MgPSBgJHtudW0gPz8gJyd9YFxyXG4gIHJldHVybiBBcnJheShsZW5ndGggLSBfcy5sZW5ndGgpLmZpbGwoJzAnKS5qb2luKCcnKSArIF9zXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmb3JtYXREYXRlID0gKGRhdGU6IGFueSA9ICcnLCBmb3JtYXRTdHJpbmcgPSAnWVlZWS1NTS1kZCBISDptbTpzcycpID0+IHtcclxuICBpZiAoIWRhdGUpIHtcclxuICAgIHJldHVybiAnJ1xyXG4gIH1cclxuICBpZiAoaXNTdHJpbmcoZGF0ZSkpIHtcclxuICAgIHJldHVybiBmb3JtYXQobmV3IERhdGUoZGF0ZSksIGZvcm1hdFN0cmluZywge1xyXG4gICAgICB1c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zOiB0cnVlLFxyXG4gICAgICB1c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnM6IHRydWUsXHJcbiAgICB9KVxyXG4gIH1cclxuICByZXR1cm4gKGlzTmFOKGRhdGUpKSA/ICcnIDogZm9ybWF0KGRhdGUsIGZvcm1hdFN0cmluZywge1xyXG4gICAgdXNlQWRkaXRpb25hbERheU9mWWVhclRva2VuczogdHJ1ZSxcclxuICAgIHVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2VuczogdHJ1ZSxcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGVhbE5vbkJvb2xlYW5Qcm9wcyA9ICh2YWx1ZTogYW55KSA9PiAhIXZhbHVlID8gMSA6IDBcclxuXHJcbmV4cG9ydCBjb25zdCBmb3JtYXRNb25leSA9IChhbW91bnQ6IGFueSwgZGVjaW1hbENvdW50ID0gMiwgZGVjaW1hbCA9IFwiLlwiLCB0aG91c2FuZHMgPSBcIixcIikgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBkZWNpbWFsQ291bnQgPSBNYXRoLmFicyhkZWNpbWFsQ291bnQpXHJcbiAgICBkZWNpbWFsQ291bnQgPSBpc05hTihkZWNpbWFsQ291bnQpID8gMiA6IGRlY2ltYWxDb3VudFxyXG5cclxuICAgIGNvbnN0IG5lZ2F0aXZlU2lnbiA9IGFtb3VudCA8IDAgPyBcIi1cIiA6IFwiXCJcclxuXHJcbiAgICBsZXQgaSA9IHBhcnNlSW50KGFtb3VudCA9IE1hdGguYWJzKE51bWJlcihhbW91bnQpIHx8IDApLnRvRml4ZWQoZGVjaW1hbENvdW50KSkudG9TdHJpbmcoKVxyXG4gICAgbGV0IGogPSAoaS5sZW5ndGggPiAzKSA/IGkubGVuZ3RoICUgMyA6IDBcclxuXHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICByZXR1cm4gbmVnYXRpdmVTaWduICsgKGogPyBpLnN1YnN0cigwLCBqKSArIHRob3VzYW5kcyA6ICcnKSArIGkuc3Vic3RyKGopLnJlcGxhY2UoLyhcXGR7M30pKD89XFxkKS9nLCBcIiQxXCIgKyB0aG91c2FuZHMpICsgKGRlY2ltYWxDb3VudCA/IGRlY2ltYWwgKyBNYXRoLmFicyhhbW91bnQgLSBpKS50b0ZpeGVkKGRlY2ltYWxDb3VudCkuc2xpY2UoMikgOiBcIlwiKVxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGVhbE1vbmV5ID0gKGFtb3VudDogYW55LCBwcmUgPSAnJykgPT4gYCR7cHJlfSQgJHtmb3JtYXRNb25leShhbW91bnQpfWBcclxuXHJcbmV4cG9ydCBjb25zdCBkZWFsTWF5YmVOdW1iZXIgPSAobnVtOiBNYXliZTxudW1iZXI+IHwgdW5kZWZpbmVkKSA9PiBudW0gPz8gMFxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGdldE9iamVjdFVSTCxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRlYWxVcmxRdWVyeSA9IChxdWVyeU9iajogYW55KSA9PiB7XHJcbiAgcmV0dXJuIGA/JHtPYmplY3Qua2V5cyhxdWVyeU9iaikubWFwKHZhbHVlID0+IGAke3ZhbHVlfT0ke3F1ZXJ5T2JqW3ZhbHVlXX1gKS5qb2luKCcmJyl9YFxyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQge0hlYWRlclRpdGxlfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0hlYWRlclRpdGxlL0hlYWRlclRpdGxlJ1xyXG5pbXBvcnQge2xzfSBmcm9tICcuLi8uLi90b29scy9kZWFsS2V5J1xyXG5pbXBvcnQge0Zvb3RCYXJ9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRm9vdEJhci9Gb290QmFyJ1xyXG5pbXBvcnQge0J1dHRvbiwgQ2FyZCwgVGFiLCBUYWJzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHttb2RlbEZhY3Rvcnl9IGZyb20gJy4uLy4uL01vZGVsQWN0aW9uL21vZGVsVXRpbCdcclxuaW1wb3J0IHtQcm9tb0NvZGVUeXBlRW51bX0gZnJvbSAnLi4vLi4vc3NfY29tbW9uL2VudW0nXHJcbmltcG9ydCB7UHJvbW9Db2RlLCBVc2VyfSBmcm9tICcuLi8uLi9ncmFwaHFsVHlwZXMvdHlwZXMnXHJcbmltcG9ydCB7ZG9jfSBmcm9tICcuLi8uLi9ncmFwaHFsVHlwZXMvZG9jJ1xyXG5pbXBvcnQge3VzZVN0b3JlTW9kZWx9IGZyb20gJy4uLy4uL01vZGVsQWN0aW9uL3VzZVN0b3JlJ1xyXG5pbXBvcnQge2Zvcm1hdERhdGUsIGZwTWVyZ2VQcmV9IGZyb20gJy4uLy4uL3Rvb2xzL3V0aWxzJ1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQge2RlYWxJbWdVcmx9IGZyb20gJy4uLy4uL3Rvb2xzL2ltZydcclxuaW1wb3J0IHtncmV5fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMnXHJcbmltcG9ydCB7QlNjcm9sbGVyfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0JTY3JvbGwvQlNjcm9sbGVyJ1xyXG5pbXBvcnQge1NwYWNlfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0JveC9Cb3gnXHJcblxyXG5leHBvcnQgY29uc3QgY2FyZE1vZGVsID0gbW9kZWxGYWN0b3J5KCdjYXJkTW9kZWwnLCB7XHJcbiAgcHJvbW9Db2RlTGlzdDogW10gYXMgUHJvbW9Db2RlW10sXHJcbiAgdXNlcjoge30gYXMgVXNlcixcclxufSwge1xyXG4gIGdldExpc3Q6IGFzeW5jICh2YWx1ZTogc3RyaW5nLCBvcHRpb24pID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IG9wdGlvbi5xdWVyeShkb2MucHJvbW9Db2RlTGlzdCwge30pXHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgb3B0aW9uLnF1ZXJ5KGRvYy5vbmVVc2VyKVxyXG4gICAgb3B0aW9uLnNldERhdGEoZnBNZXJnZVByZSh7XHJcbiAgICAgIHByb21vQ29kZUxpc3Q6IHJlcz8ucHJvbW9Db2RlTGlzdCA/PyBbXSxcclxuICAgICAgdXNlcjogdXNlci5vbmVVc2VyID8/IHt9LFxyXG4gICAgfSkpXHJcbiAgfSxcclxufSlcclxuXHJcbmNvbnN0IE1haW5Cb3ggPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDI0cHggMjRweCA4MHB4O1xyXG5gXHJcblxyXG5jb25zdCBDYXJkQm94ID0gc3R5bGVkKENhcmQpYFxyXG4gICYmJiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDI0cHggNDBweCAyMHB4IG1heC1jb250ZW50IDFmcjtcclxuICAgIGdyaWQtY29sdW1uLWdhcDogOHB4O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMjBweCAxZnI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgPiBhc2lkZSB7XHJcbiAgICAgIGdyaWQtYXJlYTogMS8xLzYvMjtcclxuICAgICAgPiBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcbmNvbnN0IFRpdGxlID0gc3R5bGVkLmRpdmBcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuYFxyXG5jb25zdCBSZW1hcmsgPSBzdHlsZWQuZGl2YFxyXG5gXHJcbmNvbnN0IE51bWJlciA9IHN0eWxlZC5kaXZgXHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAke2dyZXlbNTAwXX07XHJcbmBcclxuY29uc3QgVGltZSA9IHN0eWxlZC5kaXZgXHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAke2dyZXlbNTAwXX07XHJcbmBcclxuY29uc3QgQWN0aW9uID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nLXRvcDogOHB4O1xyXG5gXHJcbmNvbnN0IENhcmRCb3hQcm9tb0NvZGUgPSBzdHlsZWQoQ2FyZCk8e2JhY2tncm91bmQ6IHN0cmluZ30+YFxyXG4gICYmJiB7XHJcbiAgICBwYWRkaW5nOiAyNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiR7cCA9PiBwLmJhY2tncm91bmR9XCIpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtncmV5WzIwMF19O1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMTAwMHB4IHJnYmEoMCwwLDAsLjMpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gICR7TnVtYmVyfSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gICR7VGltZX0ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuYFxyXG5jb25zdCBDb2RlQm94ID0gc3R5bGVkLmRpdmBcclxuYFxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQcm9tb0NvZGVJdGVtID0gKGl0ZW06IFByb21vQ29kZSwgdXNlcjogVXNlcikgPT4ge1xyXG4gIHJldHVybiBpdGVtLnByb21vQ29kZVR5cGUgPT09IFByb21vQ29kZVR5cGVFbnVtLkRhcmVuQ2FyZCA/IDxDYXJkQm94XHJcbiAgICAgIGtleT17YENhcmRCb3hfJHtpdGVtLmlkfWB9XHJcbiAgPlxyXG4gICAgPGFzaWRlPlxyXG4gICAgICA8aW1nIHNyYz17ZGVhbEltZ1VybChpdGVtLmltZ1VybCl9XHJcbiAgICAgICAgICAgYWx0PVwiXCIvPlxyXG4gICAgPC9hc2lkZT5cclxuICAgIDxUaXRsZT5cclxuICAgICAge2l0ZW0udGl0bGV9XHJcbiAgICA8L1RpdGxlPlxyXG4gICAgPFJlbWFyaz57aXRlbS5yZW1hcmt9PC9SZW1hcms+XHJcbiAgICA8TnVtYmVyLz5cclxuICAgIDxUaW1lPntscygn5L2/55So5pe26Ze0Jyl9Ontmb3JtYXREYXRlKGl0ZW0uZWZmZWN0aXZlRGF0ZVN0YXJ0KX0te2Zvcm1hdERhdGUoaXRlbS5lZmZlY3RpdmVEYXRlRW5kKX08L1RpbWU+XHJcbiAgICA8QWN0aW9uPlxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBjb2xvcj17J3NlY29uZGFyeSd9XHJcbiAgICAgICAgICB2YXJpYW50PXsnY29udGFpbmVkJ31cclxuICAgICAgICAgIGZ1bGxXaWR0aD17dHJ1ZX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0/LmNvZGUpIHtcclxuICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgcHJvbW9Db2RlXyR7dXNlci5pZH1gLCBgJHtpdGVtPy5jb2RlID8/ICcnfWApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH19XHJcbiAgICAgID57bHMoJ+W6lOeUqOWIsOi0reeJqei9picpfTwvQnV0dG9uPlxyXG4gICAgPC9BY3Rpb24+XHJcbiAgPC9DYXJkQm94PiA6IDxDYXJkQm94UHJvbW9Db2RlXHJcbiAgICAgIGtleT17YENhcmRCb3hQcm9tb0NvZGVfJHtpdGVtLmlkfWB9XHJcbiAgICAgIGJhY2tncm91bmQ9e2RlYWxJbWdVcmwoaXRlbT8uaW1nVXJsKX0+XHJcbiAgICA8VGl0bGU+XHJcbiAgICAgIHtpdGVtLnRpdGxlfVxyXG4gICAgPC9UaXRsZT5cclxuICAgIDxTcGFjZSBoPXs4fS8+XHJcbiAgICA8UmVtYXJrPntpdGVtLnJlbWFya308L1JlbWFyaz5cclxuICAgIDxTcGFjZSBoPXs4fS8+XHJcbiAgICA8VGltZT57bHMoJ+S9v+eUqOaXtumXtCcpfTp7Zm9ybWF0RGF0ZShpdGVtLmVmZmVjdGl2ZURhdGVTdGFydCl9LXtmb3JtYXREYXRlKGl0ZW0uZWZmZWN0aXZlRGF0ZUVuZCl9PC9UaW1lPlxyXG4gICAgPFNwYWNlIGg9ezh9Lz5cclxuICAgIDxDb2RlQm94Pntscygn5LyY5oOg56CBJyl9OntpdGVtLmNvZGV9PC9Db2RlQm94PlxyXG4gICAgPFNwYWNlIGg9ezh9Lz5cclxuICAgIDxBY3Rpb24+XHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHZhcmlhbnQ9eydvdXRsaW5lZCd9XHJcbiAgICAgICAgICBmdWxsV2lkdGg9e3RydWV9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtPy5jb2RlKSB7XHJcbiAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYHByb21vQ29kZV8ke3VzZXIuaWR9YCwgYCR7aXRlbT8uY29kZSA/PyAnJ31gKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9fVxyXG4gICAgICA+e2xzKCflupTnlKjliLDotK3nianovaYnKX08L0J1dHRvbj5cclxuICAgIDwvQWN0aW9uPlxyXG4gIDwvQ2FyZEJveFByb21vQ29kZT5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENhcmRUeXBlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgcHJvbW9Db2RlVHlwZSA9IHJvdXRlci5xdWVyeS50eXBlXHJcbiAgY29uc3Qge3N0YXRlOiBzdGF0ZUNhcmRNb2RlbCwgYWN0aW9uczogYWN0aW9uc0NhcmRNb2RlbH0gPSB1c2VTdG9yZU1vZGVsKGNhcmRNb2RlbClcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYWN0aW9uc0NhcmRNb2RlbC5nZXRMaXN0KGAke3Byb21vQ29kZVR5cGUgPz8gJyd9YClcclxuICB9LCBbcHJvbW9Db2RlVHlwZV0pXHJcblxyXG4gIHJldHVybiA8ZGl2PlxyXG4gICAgPEhlYWRlclRpdGxlXHJcbiAgICAgICAgdGl0bGU9e2xzKCfovr7kurrkuJPljLonKX1cclxuICAgICAgICBzaG93Q2FydD17dHJ1ZX1cclxuICAgICAgICBoaWRlTGVmdD17dHJ1ZX1cclxuICAgICAgICBzaG93U2VhcmNoPXt0cnVlfVxyXG4gICAgLz5cclxuICAgIDxUYWJzXHJcbiAgICAgICAgdmFyaWFudD17J2Z1bGxXaWR0aCd9XHJcbiAgICAgICAgdmFsdWU9e3Byb21vQ29kZVR5cGUgPz8gUHJvbW9Db2RlVHlwZUVudW0uRGFyZW5DYXJkfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQsIHZhbHVlKSA9PiByb3V0ZXIucHVzaCgnL2NhcmQvW3R5cGVdJywgYC9jYXJkLyR7dmFsdWV9YCl9XHJcbiAgICA+XHJcbiAgICAgIDxUYWJcclxuICAgICAgICAgIHZhbHVlPXtQcm9tb0NvZGVUeXBlRW51bS5EYXJlbkNhcmR9XHJcbiAgICAgICAgICBsYWJlbD17bHMoJ+aIkeeahOi+vuS6uuWNoScpfVxyXG4gICAgICAvPlxyXG4gICAgICA8VGFiXHJcbiAgICAgICAgICB2YWx1ZT17UHJvbW9Db2RlVHlwZUVudW0uUHJvbW9Db2RlfVxyXG4gICAgICAgICAgbGFiZWw9e2xzKCflvZPliY3kvJjmg6Dkv4PplIAnKX1cclxuICAgICAgLz5cclxuICAgIDwvVGFicz5cclxuICAgIDxCU2Nyb2xsZXJcclxuICAgICAgICBib3hIZWlnaHQ9eydjYWxjKDEwMHZoIC0gMTg4cHgpJ31cclxuICAgID5cclxuICAgICAgPE1haW5Cb3g+XHJcbiAgICAgICAge3N0YXRlQ2FyZE1vZGVsLnByb21vQ29kZUxpc3QuZmlsdGVyKHYgPT4gdi5wcm9tb0NvZGVUeXBlID09PSBwcm9tb0NvZGVUeXBlKS5tYXAodiA9PiBnZXRQcm9tb0NvZGVJdGVtKHYsIHN0YXRlQ2FyZE1vZGVsLnVzZXIpKX1cclxuICAgICAgPC9NYWluQm94PlxyXG4gICAgPC9CU2Nyb2xsZXI+XHJcbiAgICA8Rm9vdEJhci8+XHJcbiAgPC9kaXY+XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQWRkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkJ1xyXG5pbXBvcnQgUmVtb3ZlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUmVtb3ZlJ1xyXG5pbXBvcnQge1Nob3BDYXJ0fSBmcm9tICcuLi8uLi9ncmFwaHFsVHlwZXMvdHlwZXMnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7ZGVhbEltZ1VybH0gZnJvbSAnLi4vLi4vdG9vbHMvaW1nJ1xyXG5pbXBvcnQge2dyZXl9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycydcclxuaW1wb3J0IHtwcm9kdWN0TW9kZWwsIFByb2R1Y3RQcmljZX0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Qcm9kdWN0SXRlbS9Qcm9kdWN0SXRlbSdcclxuaW1wb3J0IHtCdXR0b24sIEljb25CdXR0b259IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQge3VzZVN0b3JlTW9kZWx9IGZyb20gJy4uLy4uL01vZGVsQWN0aW9uL3VzZVN0b3JlJ1xyXG5pbXBvcnQge2xzfSBmcm9tICcuLi8uLi90b29scy9kZWFsS2V5J1xyXG5pbXBvcnQge3Nob3BDYXJ0TW9kZWx9IGZyb20gJy4vaW5kZXgnXHJcbmltcG9ydCB7c2hvd01lc3NhZ2V9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTWVzc2FnZS9NZXNzYWdlJ1xyXG5pbXBvcnQge3VwZGF0ZVNob3BDYXJ0TW9kZWx9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUHJvZHVjdEl0ZW0vVXBkYXRlU2hvcENhcnQnXHJcblxyXG5leHBvcnQgY29uc3QgU2hvcENhcnRQcm9kdWN0Qm94ID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMjBweCwgNzJweCkgMWZyO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDIycHgpIDMwcHg7XHJcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAxMHB4O1xyXG4gID4gaW1nIHtcclxuICAgIGdyaWQtYXJlYTogMS8xLzQvMjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIH1cclxuICA+IHNlY3Rpb24ge1xyXG4gICAgY29sb3I6ICR7Z3JleVs2MDBdfVxyXG4gIH1cclxuICA+IGZvb3RlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgID4gbWFpbiB7XHJcbiAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIH1cclxuICAgID4gYnV0dG9uIHtcclxuICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJ0UHJvZHVjdCA9ICh7c2hvcENhcnR9OiB7IHNob3BDYXJ0OiBTaG9wQ2FydCB9KSA9PiB7XHJcbiAgY29uc3Qge2FjdGlvbnM6IGFjdGlvbnNTQ00sIHN0YXRlOiBzdGF0ZVNDTX0gPSB1c2VTdG9yZU1vZGVsKHNob3BDYXJ0TW9kZWwpXHJcbiAgY29uc3Qge2FjdGlvbnM6IGFjdGlvbnNQTX0gPSB1c2VTdG9yZU1vZGVsKHByb2R1Y3RNb2RlbClcclxuICBjb25zdCB7YWN0aW9uczogYWN0aW9uc1VwZGF0ZVNob3BDYXJ0TW9kZWx9ID0gdXNlU3RvcmVNb2RlbCh1cGRhdGVTaG9wQ2FydE1vZGVsKVxyXG4gIGNvbnN0IHByb2R1Y3QgPSBzaG9wQ2FydC5wcm9kdWN0XHJcblxyXG4gIHJldHVybiA8U2hvcENhcnRQcm9kdWN0Qm94PlxyXG4gICAgPGltZyBzcmM9e2RlYWxJbWdVcmwoc2hvcENhcnQucHJvZHVjdD8uaW1nPy5bMF0/LnVybCl9XHJcbiAgICAgICAgIGFsdD1cIlwiLz5cclxuICAgIDxtYWluPntwcm9kdWN0Py5uYW1lfXtwcm9kdWN0Py53ZWlnaHR9e3Byb2R1Y3Q/LnVuaXR9PC9tYWluPlxyXG4gICAgPHNlY3Rpb24+e3Byb2R1Y3Q/LnJlbWFya308L3NlY3Rpb24+XHJcbiAgICA8Zm9vdGVyPlxyXG4gICAgICA8UHJvZHVjdFByaWNlIHByb2R1Y3Q9e3Byb2R1Y3R9Lz5cclxuICAgICAgeyhzaG9wQ2FydC5pc05leHQgPT09IDAgJiYgPD5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHNpemU9eydzbWFsbCd9XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9eydvdXRsaW5lZCd9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICBhd2FpdCBhY3Rpb25zUE0udXBkYXRlU2hvcENhcnQoe1xyXG4gICAgICAgICAgICAgICAgaXNOZXh0OiAxLFxyXG4gICAgICAgICAgICAgICAgaWQ6IHNob3BDYXJ0LmlkLFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgYWN0aW9uc1NDTS5nZXRMaXN0KClcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICA+e2xzKCfkuIvmrKHotK3kubAnKX08L0J1dHRvbj5cclxuICAgICAgICB7PEljb25CdXR0b25cclxuICAgICAgICAgICAgZGlzYWJsZWQ9eyhzaG9wQ2FydD8ubnVtYmVyID8/IDApIDw9IDF9XHJcbiAgICAgICAgICAgIHNpemU9eydzbWFsbCd9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICBhd2FpdCBhY3Rpb25zUE0udXBkYXRlTnVtU2hvcENhcnQoe1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdCxcclxuICAgICAgICAgICAgICAgIG51bWJlcjogLTEsXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICBhY3Rpb25zU0NNLmdldExpc3QoKVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID48UmVtb3ZlSWNvbi8+PC9JY29uQnV0dG9uPn1cclxuICAgICAgICB7c2hvcENhcnQubnVtYmVyfVxyXG4gICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgIHNpemU9eydzbWFsbCd9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICBhd2FpdCBhY3Rpb25zUE0udXBkYXRlTnVtU2hvcENhcnQoe1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdCxcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIGFjdGlvbnNTQ00uZ2V0TGlzdCgpXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEFkZEljb24vPlxyXG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgPC8+KSB8fCA8PlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5SaWdodDogJzhweCd9fVxyXG4gICAgICAgICAgICBzaXplPXsnc21hbGwnfVxyXG4gICAgICAgICAgICB2YXJpYW50PXsnb3V0bGluZWQnfVxyXG4gICAgICAgICAgICBjb2xvcj17J3NlY29uZGFyeSd9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICBhd2FpdCBhY3Rpb25zUE0udXBkYXRlU2hvcENhcnQoe1xyXG4gICAgICAgICAgICAgICAgaXNEZWxldGU6IDEsXHJcbiAgICAgICAgICAgICAgICBpZDogc2hvcENhcnQuaWQsXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICBhY3Rpb25zU0NNLmdldExpc3QoKVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID57bHMoJ+WIoOmZpCcpfTwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgc2l6ZT17J3NtYWxsJ31cclxuICAgICAgICAgICAgdmFyaWFudD17J291dGxpbmVkJ31cclxuICAgICAgICAgICAgLy8gb25DbGljaz17YXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgIGlmIChzdGF0ZVNDTS5zaG9wQ2FydExpc3QuZmluZEluZGV4KHYgPT4gdi5wcm9kdWN0Py5pZCA9PT0gc2hvcENhcnQucHJvZHVjdD8uaWQpID4gLTEpIHtcclxuICAgICAgICAgICAgLy8gICAgIHJldHVybiBzaG93TWVzc2FnZSgn6K+l5ZWG5ZOB5bey5Zyo6LSt54mp6L2m5LitJylcclxuICAgICAgICAgICAgLy8gICB9XHJcbiAgICAgICAgICAgIC8vICAgYXdhaXQgYWN0aW9uc1BNLnVwZGF0ZVNob3BDYXJ0KHtcclxuICAgICAgICAgICAgLy8gICAgIGlzTmV4dDogMCxcclxuICAgICAgICAgICAgLy8gICAgIGlkOiBzaG9wQ2FydC5pZCxcclxuICAgICAgICAgICAgLy8gICB9KVxyXG4gICAgICAgICAgICAvLyAgIGFjdGlvbnNTQ00uZ2V0TGlzdCgpXHJcbiAgICAgICAgICAgIC8vIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBhY3Rpb25zVXBkYXRlU2hvcENhcnRNb2RlbC5vcGVuQ2xpY2soKVxyXG4gICAgICAgICAgICAgIGlmIChyZXM/Lm51bSA+IDApIHtcclxuICAgICAgICAgICAgICAgIGlmICgoYXdhaXQgYWN0aW9uc1BNLnVwZGF0ZU51bVNob3BDYXJ0KHtcclxuICAgICAgICAgICAgICAgICAgcHJvZHVjdCxcclxuICAgICAgICAgICAgICAgICAgbnVtYmVyOiB+fnJlcz8ubnVtLFxyXG4gICAgICAgICAgICAgICAgfSkpPy51cGRhdGVOdW1TaG9wQ2FydD8uaWQpIHtcclxuICAgICAgICAgICAgICAgICAgc2hvd01lc3NhZ2UoJ+aTjeS9nOaIkOWKnycpXHJcbiAgICAgICAgICAgICAgICAgIGFjdGlvbnNTQ00uZ2V0TGlzdCgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID57bHMoJ+WKoOWFpei0reeJqei9picpfTwvQnV0dG9uPlxyXG4gICAgICA8Lz59XHJcbiAgICA8L2Zvb3Rlcj5cclxuICA8L1Nob3BDYXJ0UHJvZHVjdEJveD5cclxufVxyXG4iLCJpbXBvcnQge2RpYWxvZ01vZGVsRmFjdG9yeX0gZnJvbSAnLi4vLi4vLi4vY29tbW9uTW9kZWwvZGlhbG9nJ1xyXG5pbXBvcnQge3VzZVN0b3JlTW9kZWx9IGZyb20gJy4uLy4uLy4uL01vZGVsQWN0aW9uL3VzZVN0b3JlJ1xyXG5pbXBvcnQge0J1dHRvbiwgRGlhbG9nLCBEaWFsb2dDb250ZW50LCBUZXh0RmllbGR9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7bHN9IGZyb20gJy4uLy4uLy4uL3Rvb2xzL2RlYWxLZXknXHJcbmltcG9ydCB7bWVyZ2VUd29Nb2RlbCwgbW9kZWxGYWN0b3J5fSBmcm9tICcuLi8uLi8uLi9Nb2RlbEFjdGlvbi9tb2RlbFV0aWwnXHJcbmltcG9ydCB7c2V0Rm9ybX0gZnJvbSAnLi4vLi4vLi4vdG9vbHMvY29tbW9uQWN0aW9uJ1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQge3Nob3dNZXNzYWdlfSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL01lc3NhZ2UvTWVzc2FnZSdcclxuXHJcbmV4cG9ydCBjb25zdCBpbnB1dFByb21vQ29kZU1vZGVsID0gbWVyZ2VUd29Nb2RlbChkaWFsb2dNb2RlbEZhY3RvcnkoJ2lucHV0UHJvbW9Db2RlTW9kZWwnLCAoKCkgPT4ge30pIGFzIEZ1bmN0aW9uKSwgbW9kZWxGYWN0b3J5KCdpbnB1dCcsIHtcclxuICBmb3JtOiB7XHJcbiAgICBwcm9tb0NvZGU6ICcnLFxyXG4gIH0sXHJcbn0sIHtcclxuICBzZXRGb3JtOiBzZXRGb3JtLFxyXG59KSlcclxuXHJcbmNvbnN0IEZvb3RlciA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZy10b3A6IDhweDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuYFxyXG5leHBvcnQgY29uc3QgSW5wdXRQcm9tb0NvZGVEaWFsb2cgPSAoKSA9PiB7XHJcbiAgY29uc3Qge2FjdGlvbnM6IGFjdGlvbnNJbnB1dFByb21vQ29kZU1vZGVsLCBzdGF0ZTogc3RhdGVJbnB1dFByb21vQ29kZU1vZGVsfSA9IHVzZVN0b3JlTW9kZWwoaW5wdXRQcm9tb0NvZGVNb2RlbClcclxuICByZXR1cm4gPERpYWxvZ1xyXG4gICAgICBvcGVuPXtzdGF0ZUlucHV0UHJvbW9Db2RlTW9kZWwub3Blbn1cclxuICAgICAgb25DbG9zZT17YWN0aW9uc0lucHV0UHJvbW9Db2RlTW9kZWwub25DbG9zZX1cclxuICA+XHJcbiAgICA8RGlhbG9nQ29udGVudD5cclxuICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgbGFiZWw9e2xzKCfor7fovpPlhaXpqozor4HnoIEnKX1cclxuICAgICAgICAgIHZhbHVlPXtzdGF0ZUlucHV0UHJvbW9Db2RlTW9kZWwuZm9ybS5wcm9tb0NvZGV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gYWN0aW9uc0lucHV0UHJvbW9Db2RlTW9kZWwuc2V0Rm9ybShbJ3Byb21vQ29kZScsIGV2ZW50LnRhcmdldC52YWx1ZV0pfVxyXG4gICAgICAvPlxyXG4gICAgICA8Rm9vdGVyPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgdmFyaWFudD17J2NvbnRhaW5lZCd9XHJcbiAgICAgICAgICAgIGNvbG9yPXsnc2Vjb25kYXJ5J31cclxuICAgICAgICAgICAgb25DbGljaz17YXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHRlc3RSZXMgPSBhd2FpdCBzdGF0ZUlucHV0UHJvbW9Db2RlTW9kZWwuZGlhbG9nRGF0YShzdGF0ZUlucHV0UHJvbW9Db2RlTW9kZWwuZm9ybS5wcm9tb0NvZGUpXHJcbiAgICAgICAgICAgICAgaWYgKHRlc3RSZXMpIHtcclxuICAgICAgICAgICAgICAgIHNob3dNZXNzYWdlKHRlc3RSZXMpXHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbnNJbnB1dFByb21vQ29kZU1vZGVsLm9uQ2xvc2UoKVxyXG4gICAgICAgICAgICAgICAgYWN0aW9uc0lucHV0UHJvbW9Db2RlTW9kZWwuc2V0Rm9ybShbJ3Byb21vQ29kZScsICcnXSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPntscygn56Gu5a6aJyl9PC9CdXR0b24+XHJcbiAgICAgIDwvRm9vdGVyPlxyXG4gICAgPC9EaWFsb2dDb250ZW50PlxyXG4gIDwvRGlhbG9nPlxyXG59XHJcbiIsImltcG9ydCB7RGlhbG9nLCBEaWFsb2dUaXRsZSwgRGlhbG9nQ29udGVudCwgUmFkaW8sIEJ1dHRvbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtkaWFsb2dNb2RlbEZhY3Rvcnl9IGZyb20gJy4uLy4uLy4uL2NvbW1vbk1vZGVsL2RpYWxvZydcclxuaW1wb3J0IHt1c2VTdG9yZU1vZGVsfSBmcm9tICcuLi8uLi8uLi9Nb2RlbEFjdGlvbi91c2VTdG9yZSdcclxuaW1wb3J0IHtsc30gZnJvbSAnLi4vLi4vLi4vdG9vbHMvZGVhbEtleSdcclxuaW1wb3J0IHtzaG9wQ2FydE1vZGVsfSBmcm9tICcuLi9pbmRleCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQge1BpY2tVcFR5cGVFbnVtfSBmcm9tICcuLi8uLi8uLi9zc19jb21tb24vZW51bSdcclxuXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RBZGRyZXNzTW9kZWwgPSBkaWFsb2dNb2RlbEZhY3RvcnkoJ3NlbGVjdEFkZHJlc3NNb2RlbCcsIHt9KVxyXG5cclxuY29uc3QgQWRkcmVzc0JveCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBtaW4tY29udGVudDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCBmcik7XHJcbiAgZ3JpZC1yb3ctZ2FwOiA4cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICA+IGhlYWRlciB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgPiBhc2lkZSB7XHJcbiAgICBncmlkLWFyZWE6IDEvMi8zLzM7XHJcbiAgfVxyXG5gXHJcbmNvbnN0IEZvb3RlciA9IHN0eWxlZC5kaXZgXHJcblxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgU2VsZWN0QWRkcmVzcyA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHtzdGF0ZTogc3RhdGVTQU0sIGFjdGlvbnM6IGFjdGlvbnNTQU19ID0gdXNlU3RvcmVNb2RlbChzZWxlY3RBZGRyZXNzTW9kZWwpXHJcbiAgY29uc3Qge3N0YXRlOiBzdGF0ZVNob3BDYXJ0TW9kZWwsIGFjdGlvbnM6IGFjdGlvbnNTaG9wQ2FydE1vZGVsfSA9IHVzZVN0b3JlTW9kZWwoc2hvcENhcnRNb2RlbClcclxuICBjb25zdCBhZGRyZXNzTGlzdCA9IHN0YXRlU2hvcENhcnRNb2RlbC5kZWFsQWRkcmVzc0xpc3Qoc3RhdGVTaG9wQ2FydE1vZGVsKVxyXG5cclxuXHJcbiAgcmV0dXJuIDxEaWFsb2dcclxuICAgICAgb3Blbj17c3RhdGVTQU0ub3Blbn1cclxuICAgICAgb25DbG9zZT17YWN0aW9uc1NBTS5vbkNsb3NlfVxyXG4gID5cclxuICAgIDxEaWFsb2dUaXRsZT57bHMoJ+mAieaLqeWcsOWdgCcpfTwvRGlhbG9nVGl0bGU+XHJcbiAgICA8RGlhbG9nQ29udGVudD5cclxuICAgICAge2FkZHJlc3NMaXN0Lm1hcCh2ID0+IDxBZGRyZXNzQm94IGtleT17YERpYWxvZ1RpdGxlQWRkcmVzc0JveF8ke3YuaWR9YH0+XHJcbiAgICAgICAgPGhlYWRlcj57di5jb21iaW5lQWRkcmVzc308L2hlYWRlcj5cclxuICAgICAgICA8Zm9vdGVyPntgJHt2Lm5hbWV9ICR7di5jb250YWN0SW5mb3JtYXRpb259YH08L2Zvb3Rlcj5cclxuICAgICAgICA8YXNpZGU+XHJcbiAgICAgICAgICA8UmFkaW9cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc3RhdGVTQU0ub3BlblJlc29sdmUodi5pZClcclxuICAgICAgICAgICAgICAgIGFjdGlvbnNTQU0ub25DbG9zZSgpXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBjaGVja2VkPXt2LmlkID09PSBzdGF0ZVNob3BDYXJ0TW9kZWwuZm9ybS5hZGRyZXNzSWR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvYXNpZGU+XHJcbiAgICAgIDwvQWRkcmVzc0JveD4pfVxyXG4gICAgICA8Rm9vdGVyPlxyXG4gICAgICAgIHtzdGF0ZVNob3BDYXJ0TW9kZWwuZm9ybS5waWNrVXBUeXBlID09PSBQaWNrVXBUeXBlRW51bS5EZWxpdmVyeSAmJlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgZnVsbFdpZHRoPXt0cnVlfVxyXG4gICAgICAgICAgICB2YXJpYW50PXsnY29udGFpbmVkJ31cclxuICAgICAgICAgICAgY29sb3I9eydzZWNvbmRhcnknfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy9tZS9teUFkZHJlc3MvZWRpdC9baWRdJywgJy9tZS9teUFkZHJlc3MvZWRpdC8wJylcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICA+e2xzKCfmt7vliqDmlrDlnLDlnYAnKX08L0J1dHRvbj5cclxuICAgICAgICB9XHJcbiAgICAgIDwvRm9vdGVyPlxyXG4gICAgPC9EaWFsb2dDb250ZW50PlxyXG4gIDwvRGlhbG9nPlxyXG59XHJcbiIsImltcG9ydCB7RGlhbG9nLCBEaWFsb2dUaXRsZSwgRGlhbG9nQ29udGVudCwgUmFkaW8sIEJ1dHRvbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtkaWFsb2dNb2RlbEZhY3Rvcnl9IGZyb20gJy4uLy4uLy4uL2NvbW1vbk1vZGVsL2RpYWxvZydcclxuaW1wb3J0IHt1c2VTdG9yZU1vZGVsfSBmcm9tICcuLi8uLi8uLi9Nb2RlbEFjdGlvbi91c2VTdG9yZSdcclxuaW1wb3J0IHtsc30gZnJvbSAnLi4vLi4vLi4vdG9vbHMvZGVhbEtleSdcclxuaW1wb3J0IHtzaG9wQ2FydE1vZGVsfSBmcm9tICcuLi9pbmRleCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbGVjdENhcmRNb2RlbCA9IGRpYWxvZ01vZGVsRmFjdG9yeSgnc2VsZWN0Q2FyZE1vZGVsJywge30pXHJcblxyXG5jb25zdCBDYXJkQm94ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDYwdncsIDFmcikgbWluLWNvbnRlbnQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgZnIpO1xyXG4gIGdyaWQtcm93LWdhcDogOHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgPiBoZWFkZXIge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gID4gYXNpZGUge1xyXG4gICAgZ3JpZC1hcmVhOiAxLzIvMy8zO1xyXG4gIH1cclxuYFxyXG5jb25zdCBGb290ZXIgPSBzdHlsZWQuZGl2YFxyXG5cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFNlbGVjdENhcmQgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCB7c3RhdGU6IHN0YXRlU2VsZWN0Q2FyZCwgYWN0aW9uczogYWN0aW9uc1NlbGVjdENhcmR9ID0gdXNlU3RvcmVNb2RlbChzZWxlY3RDYXJkTW9kZWwpXHJcbiAgY29uc3Qge3N0YXRlOiBzdGF0ZVNob3BDYXJ0TW9kZWwsIGFjdGlvbnM6IGFjdGlvbnNTaG9wQ2FydE1vZGVsfSA9IHVzZVN0b3JlTW9kZWwoc2hvcENhcnRNb2RlbClcclxuXHJcbiAgcmV0dXJuIDxEaWFsb2dcclxuICAgICAgb3Blbj17c3RhdGVTZWxlY3RDYXJkLm9wZW59XHJcbiAgICAgIG9uQ2xvc2U9e2FjdGlvbnNTZWxlY3RDYXJkLm9uQ2xvc2V9XHJcbiAgPlxyXG4gICAgPERpYWxvZ1RpdGxlPntscygn6YCJ5oup5L+h55So5Y2hJyl9PC9EaWFsb2dUaXRsZT5cclxuICAgIDxEaWFsb2dDb250ZW50PlxyXG4gICAgICB7c3RhdGVTaG9wQ2FydE1vZGVsLnBheUNhcmRMaXN0Lm1hcCh2ID0+IDxDYXJkQm94IGtleT17YERpYWxvZ1RpdGxlQWRkcmVzc0JveF8ke3YuaWR9YH0+XHJcbiAgICAgICAgPGhlYWRlcj57di5uYW1lfTwvaGVhZGVyPlxyXG4gICAgICAgIDxmb290ZXI+e2Ake3YubnVtYmVyfWB9PC9mb290ZXI+XHJcbiAgICAgICAgPGFzaWRlPlxyXG4gICAgICAgICAgPFJhZGlvXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIHN0YXRlU2VsZWN0Q2FyZC5vcGVuUmVzb2x2ZSh2LmlkKVxyXG4gICAgICAgICAgICAgICAgYWN0aW9uc1NlbGVjdENhcmQub25DbG9zZSgpXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBjaGVja2VkPXt2LmlkID09PSBzdGF0ZVNob3BDYXJ0TW9kZWwuZm9ybS5wYXltZW50TWV0aG9kQ2FyZElkfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2FzaWRlPlxyXG4gICAgICA8L0NhcmRCb3g+KX1cclxuICAgICAgPEZvb3Rlcj5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGZ1bGxXaWR0aD17dHJ1ZX1cclxuICAgICAgICAgICAgdmFyaWFudD17J2NvbnRhaW5lZCd9XHJcbiAgICAgICAgICAgIGNvbG9yPXsnc2Vjb25kYXJ5J31cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvbWUvbXlDcmVkaXRDYXJkL2VkaXQvW2lkXScsICcvbWUvbXlDcmVkaXRDYXJkL2VkaXQvMCcpXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPntscygn5re75Yqg5paw5pa55byPJyl9PC9CdXR0b24+XHJcbiAgICAgIDwvRm9vdGVyPlxyXG4gICAgPC9EaWFsb2dDb250ZW50PlxyXG4gIDwvRGlhbG9nPlxyXG59XHJcbiIsImltcG9ydCB7bW9kZWxGYWN0b3J5fSBmcm9tICcuLi8uLi9Nb2RlbEFjdGlvbi9tb2RlbFV0aWwnXHJcbmltcG9ydCB7XHJcbiAgRGljdCxcclxuICBPcmRlckluZm9JdGVtSW5wdXQsXHJcbiAgUHJvbW9Db2RlLFxyXG4gIFByb21vQ29kZUl0ZW1JbnB1dCxcclxuICBTaG9wQ2FydCxcclxuICBVc2VyLFxyXG4gIFVzZXJBZGRyZXNzLFxyXG4gIFVzZXJQYXlDYXJkLFxyXG59IGZyb20gJy4uLy4uL2dyYXBocWxUeXBlcy90eXBlcydcclxuaW1wb3J0IHtQaWNrVXBUeXBlRW51bX0gZnJvbSAnLi4vLi4vc3NfY29tbW9uL2VudW0nXHJcbmltcG9ydCB7ZGVhbE1heWJlTnVtYmVyLCBmcE1lcmdlUHJlLCBmcFNldFByZX0gZnJvbSAnLi4vLi4vdG9vbHMvdXRpbHMnXHJcbmltcG9ydCB7c2V0Rm9ybX0gZnJvbSAnLi4vLi4vdG9vbHMvY29tbW9uQWN0aW9uJ1xyXG5pbXBvcnQge2RvY30gZnJvbSAnLi4vLi4vZ3JhcGhxbFR5cGVzL2RvYydcclxuaW1wb3J0IHtTaG9wQ2FydFBhZ2V9IGZyb20gJy4vc2hvcENhcnQnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHt1c2VTdG9yZU1vZGVsfSBmcm9tICcuLi8uLi9Nb2RlbEFjdGlvbi91c2VTdG9yZSdcclxuaW1wb3J0IHtPcmRlclBhZ2V9IGZyb20gJy4vb3JkZXJQYWdlJ1xyXG5pbXBvcnQge2xzfSBmcm9tICcuLi8uLi90b29scy9kZWFsS2V5J1xyXG5cclxuZXhwb3J0IGNvbnN0IHBhZ2VUeXBlRW51bSA9IHtcclxuICBzaG9wQ2FydDogJ3Nob3BDYXJ0JyxcclxuICBvcmRlcjogJ29yZGVyJyxcclxufVxyXG5cclxuY29uc3QgaW5pdEZvcm06IE9yZGVySW5mb0l0ZW1JbnB1dCA9IHtcclxuICBwaWNrVXBUeXBlOiBQaWNrVXBUeXBlRW51bS5TZWxmLFxyXG4gIGFkZHJlc3NJZDogJycsXHJcbiAgcGF5bWVudE1ldGhvZENhcmRJZDogJycsXHJcbiAgZGVkdWN0Q29pbjogMCxcclxuICBzYWxlVGF4OiAwLFxyXG4gIHRyYW5zcG9ydGF0aW9uQ29zdHM6IDAsXHJcbiAgY291cG9uRGlzY291bnQ6IDAsXHJcbn1cclxuZXhwb3J0IGNvbnN0IHNob3BDYXJ0TW9kZWwgPSBtb2RlbEZhY3RvcnkoJ3Nob3BDYXJ0TW9kZWwnLCB7XHJcbiAgdXNlcjoge30gYXMgVXNlcixcclxuICBwcm9tb0NvZGU6IHt9IGFzIFByb21vQ29kZSxcclxuICBwcm9tb0NvZGVFcnJvcjogJycsXHJcbiAgcGF5Q2FyZExpc3Q6IFtdIGFzIFVzZXJQYXlDYXJkW10sXHJcbiAgdXNlckFkZHJlc3NMaXN0OiBbXSBhcyBVc2VyQWRkcmVzc1tdLFxyXG4gIHNlbGZBZGRyZXNzOiBbXSBhcyBhbnlbXSxcclxuICBmcmVpZ2h0Q29uZmlnOiBbXSBhcyBhbnlbXSxcclxuICB1c2VyTGV2ZWxMaXN0OiBbXSBhcyBEaWN0W10sXHJcbiAgcGFnZVR5cGU6IHBhZ2VUeXBlRW51bS5zaG9wQ2FydCxcclxuICBzaG9wQ2FydExpc3Q6IFtdIGFzIFNob3BDYXJ0W10sXHJcbiAgc2hvcENhcnRMaXN0TmV4dDogW10gYXMgU2hvcENhcnRbXSxcclxuICBmb3JtOiB7XHJcbiAgICAuLi5pbml0Rm9ybSxcclxuICB9IGFzIE9yZGVySW5mb0l0ZW1JbnB1dCxcclxuICBkZWFsUHJvZHVjdE51bWJlcjogKHN0YXRlOiBhbnkpID0+IChzdGF0ZS5zaG9wQ2FydExpc3QgYXMgYW55W10pLnJlZHVjZSgocHJlLCBjdXIpID0+IHByZSArIChjdXI/Lm51bWJlciA/PyAwKSwgMCksXHJcbiAgZGVhbEFkZHJlc3NMaXN0OiAoKHN0YXRlOiBhbnkpID0+IChzdGF0ZS5mb3JtLnBpY2tVcFR5cGUgPT09IFBpY2tVcFR5cGVFbnVtLkRlbGl2ZXJ5ICYmIHN0YXRlLnVzZXJBZGRyZXNzTGlzdCkgfHwgc3RhdGUuc2VsZkFkZHJlc3MubWFwKCh2OiBhbnkpID0+ICh7XHJcbiAgICAuLi52LFxyXG4gICAgY29tYmluZUFkZHJlc3M6IGAke3YucHJvdmluY2V9ICR7di5jaXR5fSAke3Yuc3RyZWV0QWRkcmVzc31gLFxyXG4gICAgbmFtZTogdi5mdWxsTmFtZSxcclxuICAgIGNvbnRhY3RJbmZvcm1hdGlvbjogdi5waG9uZSxcclxuICB9KSkpIGFzIChzdGF0ZTogYW55KSA9PiBVc2VyQWRkcmVzc1tdLFxyXG4gIGRlYWxBZGRyZXNzRGF0YTogKHN0YXRlOiBhbnkpID0+IHN0YXRlLmRlYWxBZGRyZXNzTGlzdChzdGF0ZSkuZmluZCgodjogVXNlckFkZHJlc3MpID0+IHYuaWQgPT09IHN0YXRlLmZvcm0uYWRkcmVzc0lkKSB8fCB7fSxcclxuICBpbml0QWRkcmVzc0lkOiAoc3RhdGU6IGFueSkgPT4gKHN0YXRlLmZvcm0ucGlja1VwVHlwZSA9PT0gUGlja1VwVHlwZUVudW0uRGVsaXZlcnkgJiYgc3RhdGUudXNlckFkZHJlc3NMaXN0Py5maW5kKCh2OiBVc2VyQWRkcmVzcykgPT4gdi5pc0RlZmF1bHQpPy5pZCkgfHwgc3RhdGUuc2VsZkFkZHJlc3M/LlswXT8uaWQsXHJcbiAgZGVhbFByb2R1Y3RUb3RhbDogKHN0YXRlOiBhbnkpID0+IHN0YXRlLnNob3BDYXJ0TGlzdC5yZWR1Y2UoKHByZTogYW55LCBjdXI6IGFueSkgPT4gcHJlICsgKGRlYWxNYXliZU51bWJlcihjdXI/Lm51bWJlcikgKiBkZWFsTWF5YmVOdW1iZXIoY3VyPy5wcm9kdWN0Py5wcmljZU91dCkpLCAwKSxcclxuICBkZWFsVHJhbnNwb3J0YXRpb25Db3N0czogKHN0YXRlOiBhbnksIHByb2R1Y3RUb3RhbDogYW55KSA9PiB7XHJcbiAgICByZXR1cm4gKHN0YXRlLmZvcm0ucGlja1VwVHlwZSA9PT0gUGlja1VwVHlwZUVudW0uRGVsaXZlcnkgJiYgKHN0YXRlLmZyZWlnaHRDb25maWcucmVkdWNlKChwcmU6IGFueSwgY3VyOiBhbnkpID0+IHtcclxuICAgICAgaWYgKHByZSA+IHBhcnNlRmxvYXQoY3VyPy5mcmVpZ2h0UGF5KSAmJiBwcm9kdWN0VG90YWwgPCBwYXJzZUZsb2F0KGN1cj8ub3JkZXJNYXgpKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoY3VyPy5mcmVpZ2h0UGF5KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBwcmVcclxuICAgICAgfVxyXG4gICAgfSwgcGFyc2VGbG9hdChzdGF0ZS5mcmVpZ2h0Q29uZmlnW3N0YXRlLmZyZWlnaHRDb25maWcubGVuZ3RoIC0gMV0/LmZyZWlnaHRQYXkpKSkpIHx8IDBcclxuICB9LFxyXG59LCB7XHJcbiAgY2xlYXJEYXRhOiAodmFsdWUsIG9wdGlvbikgPT4ge1xyXG4gICAgb3B0aW9uLnNldERhdGEoZnBNZXJnZVByZSh7XHJcbiAgICAgIGZvcm06IGluaXRGb3JtLFxyXG4gICAgICBwYWdlVHlwZTogcGFnZVR5cGVFbnVtLnNob3BDYXJ0LFxyXG4gICAgfSkpXHJcbiAgfSxcclxuICBjbGVhckZvcm06ICh2YWx1ZSwgb3B0aW9uKSA9PiBvcHRpb24uc2V0RGF0YShmcE1lcmdlUHJlKHtcclxuICAgIGZvcm06IHtcclxuICAgICAgLi4uaW5pdEZvcm0sXHJcbiAgICB9LFxyXG4gIH0pKSxcclxuICBzZXRGb3JtOiBzZXRGb3JtLFxyXG4gIGdldExpc3Q6IGFzeW5jICh2YWx1ZSwgb3B0aW9uKSA9PiB7XHJcbiAgICBjb25zdCB1c2VyUmVzID0gYXdhaXQgb3B0aW9uLnF1ZXJ5KGRvYy5vbmVVc2VyKVxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgb3B0aW9uLnF1ZXJ5KGRvYy51c2VyU2hvcENhcnRMaXN0KVxyXG4gICAgb3B0aW9uLnNldERhdGEoZnBNZXJnZVByZSh7XHJcbiAgICAgIHVzZXI6IHVzZXJSZXM/Lm9uZVVzZXIgPz8ge30sXHJcbiAgICAgIHNob3BDYXJ0TGlzdDogcmVzPy5zaG9wQ2FydExpc3QuZmlsdGVyKCh2OiBTaG9wQ2FydCkgPT4gIXYuaXNOZXh0KSA/PyBbXSxcclxuICAgICAgc2hvcENhcnRMaXN0TmV4dDogcmVzPy5zaG9wQ2FydExpc3QuZmlsdGVyKCh2OiBTaG9wQ2FydCkgPT4gISF2LmlzTmV4dCkgPz8gW10sXHJcbiAgICB9KSlcclxuICB9LFxyXG4gIGRlYWxQcm9tb0NvZGU6IGFzeW5jICh2YWx1ZTogc3RyaW5nLCBvcHRpb24pID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IG9wdGlvbi5xdWVyeShkb2MucHJvbW9Db2RlTGlzdCwge1xyXG4gICAgICBwcm9tb0NvZGVJdGVtSW5wdXQ6IHtcclxuICAgICAgICBjb2RlOiB2YWx1ZSxcclxuICAgICAgfSBhcyBQcm9tb0NvZGVJdGVtSW5wdXQsXHJcbiAgICB9KVxyXG4gICAgaWYgKHJlcz8ucHJvbW9Db2RlTGlzdD8ubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgIGNvbnN0IHByb21vQ29kZTogUHJvbW9Db2RlID0gcmVzLnByb21vQ29kZUxpc3RbMF1cclxuICAgICAgb3B0aW9uLnNldERhdGEoZnBNZXJnZVByZSh7XHJcbiAgICAgICAgcHJvbW9Db2RlLFxyXG4gICAgICB9KSlcclxuICAgICAgcmV0dXJuICcnXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gbHMoJ+acquWMuemFjeWIsOS8mOaDoOeggScpXHJcbiAgICB9XHJcbiAgfSxcclxuICB1cGRhdGVQYWdlVHlwZTogKHZhbHVlOiBzdHJpbmcsIG9wdGlvbikgPT4gb3B0aW9uLnNldERhdGEoZnBNZXJnZVByZSh7XHJcbiAgICBwYWdlVHlwZTogdmFsdWUsXHJcbiAgfSkpLFxyXG4gIHVwZGF0ZVBheUNhcmRMaXN0OiBhc3luYyAodmFsdWUsIG9wdGlvbikgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgb3B0aW9uLnF1ZXJ5KGRvYy5vcmRlckNvbmZpcm1JbmZvKVxyXG4gICAgb3B0aW9uLnNldERhdGEoZnBNZXJnZVByZSh7XHJcbiAgICAgIHBheUNhcmRMaXN0OiByZXM/LnBheUNhcmRMaXN0T25lVXNlcixcclxuICAgIH0pKVxyXG4gIH0sXHJcbiAgZ2V0T3JkZXJJbmZvOiBhc3luYyAodmFsdWUsIG9wdGlvbikgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgb3B0aW9uLnF1ZXJ5KGRvYy5vcmRlckNvbmZpcm1JbmZvKVxyXG4gICAgb3B0aW9uLnNldERhdGEoZnBTZXRQcmUoJ3VzZXInLCByZXM/Lm9uZVVzZXIpKVxyXG4gICAgb3B0aW9uLnNldERhdGEoZnBNZXJnZVByZSh7XHJcbiAgICAgIHBheUNhcmRMaXN0OiByZXM/LnBheUNhcmRMaXN0T25lVXNlcixcclxuICAgICAgdXNlckFkZHJlc3NMaXN0OiByZXM/LnVzZXJBZGRyZXNzTGlzdE9uZVVzZXIsXHJcbiAgICAgIHNlbGZBZGRyZXNzOiByZXM/LmdldERhdGFDb25maWc/LnZhbHVlPy5saXN0ID8/IFtdLFxyXG4gICAgICBmcmVpZ2h0Q29uZmlnOiByZXM/LmZyZWlnaHRDb25maWc/LnZhbHVlPy5mcmVpZ2h0TGlzdCA/PyBbXSxcclxuICAgICAgdXNlckxldmVsTGlzdDogcmVzPy51c2VyTGV2ZWxMaXN0ID8/IFtdLFxyXG4gICAgfSkpXHJcbiAgICBvcHRpb24uc2V0RGF0YShmcE1lcmdlUHJlKHtcclxuICAgICAgZm9ybToge1xyXG4gICAgICAgIGFkZHJlc3NJZDogKG9wdGlvbi5kYXRhLmZvcm0ucGlja1VwVHlwZSA9PT0gUGlja1VwVHlwZUVudW0uRGVsaXZlcnkgJiYgcmVzPy51c2VyQWRkcmVzc0xpc3RPbmVVc2VyPy5maW5kKCh2OiBVc2VyQWRkcmVzcykgPT4gdi5pc0RlZmF1bHQpPy5pZCkgfHwgcmVzPy5nZXREYXRhQ29uZmlnPy52YWx1ZT8ubGlzdD8uWzBdPy5pZCxcclxuICAgICAgICBwYXltZW50TWV0aG9kQ2FyZElkOiAocmVzPy5wYXlDYXJkTGlzdE9uZVVzZXIgYXMgVXNlclBheUNhcmRbXSk/LmZpbmQodiA9PiB2LmlzRGVmYXVsdCk/LmlkIHx8ICcnLFxyXG4gICAgICB9LFxyXG4gICAgfSkpXHJcbiAgfSxcclxuICBzdWJtaXQ6IGFzeW5jICh2YWx1ZTogT3JkZXJJbmZvSXRlbUlucHV0LCBvcHRpb24pID0+IHtcclxuICAgIHJldHVybiBhd2FpdCBvcHRpb24ubXV0YXRlKGRvYy5zYXZlT3JkZXIsIHtcclxuICAgICAgb3JkZXJJbmZvSXRlbUlucHV0OiB7XHJcbiAgICAgICAgLi4udmFsdWUsXHJcbiAgICAgIH0gYXMgT3JkZXJJbmZvSXRlbUlucHV0LFxyXG4gICAgfSlcclxuICB9LFxyXG4gIHRlc3RQcm9tb0NvZGU6IGFzeW5jICh2YWx1ZTogc3RyaW5nLCBvcHRpb24pID0+IHtcclxuICAgIHJldHVybiAnMTIzJ1xyXG4gIH0sXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgQ2FydFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3Qge3N0YXRlOiBzdGF0ZVNDTX0gPSB1c2VTdG9yZU1vZGVsKHNob3BDYXJ0TW9kZWwpXHJcbiAgcmV0dXJuIChzdGF0ZVNDTS5wYWdlVHlwZSA9PT0gcGFnZVR5cGVFbnVtLm9yZGVyICYmIDxPcmRlclBhZ2UvPikgfHwgPFNob3BDYXJ0UGFnZS8+XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENoZXZyb25SaWdodEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0NoZXZyb25SaWdodCdcclxuaW1wb3J0IHtIZWFkZXJUaXRsZX0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9IZWFkZXJUaXRsZS9IZWFkZXJUaXRsZSdcclxuaW1wb3J0IHt1c2VTdG9yZU1vZGVsfSBmcm9tICcuLi8uLi9Nb2RlbEFjdGlvbi91c2VTdG9yZSdcclxuaW1wb3J0IHtwYWdlVHlwZUVudW0sIHNob3BDYXJ0TW9kZWx9IGZyb20gJy4vaW5kZXgnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7bHN9IGZyb20gJy4uLy4uL3Rvb2xzL2RlYWxLZXknXHJcbmltcG9ydCB7UGlja1VwVHlwZUVudW19IGZyb20gJy4uLy4uL3NzX2NvbW1vbi9lbnVtJ1xyXG5pbXBvcnQge2RvY30gZnJvbSAnLi4vLi4vZ3JhcGhxbFR5cGVzL2RvYydcclxuaW1wb3J0IHtJY29uQnV0dG9uLCBMaW5lYXJQcm9ncmVzcywgVGV4dEZpZWxkfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHtCU2Nyb2xsZXJ9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQlNjcm9sbC9CU2Nyb2xsZXInXHJcbmltcG9ydCB7U3BhY2V9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQm94L0JveCdcclxuaW1wb3J0IHtTZWxlY3RBZGRyZXNzLCBzZWxlY3RBZGRyZXNzTW9kZWx9IGZyb20gJy4vY29tcG9uZW50cy9TZWxlY3RBZGRyZXNzJ1xyXG5pbXBvcnQge2dyZXl9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycydcclxuaW1wb3J0IHtTZWxlY3RDYXJkLCBzZWxlY3RDYXJkTW9kZWx9IGZyb20gJy4vY29tcG9uZW50cy9TZWxlY3RDYXJkJ1xyXG5pbXBvcnQge2RlYWxNYXliZU51bWJlciwgZGVhbE1vbmV5LCBkZWFsVXJsUXVlcnl9IGZyb20gJy4uLy4uL3Rvb2xzL3V0aWxzJ1xyXG5pbXBvcnQge21wU3R5bGV9IGZyb20gJy4uLy4uL3N0eWxlL2NvbW1vbidcclxuaW1wb3J0IHtCdXR0b25Mb2FkfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0J1dHRvbkxvYWQvQnV0dG9uTG9hZCdcclxuaW1wb3J0IHtzaG93TWVzc2FnZX0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9NZXNzYWdlL01lc3NhZ2UnXHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmV4cG9ydCBjb25zdCBTaG9wVGl0bGUgPSBzdHlsZWQuZGl2YFxyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICA+IGZvb3RlciB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogJHttcFN0eWxlLnJlZH07XHJcbiAgfVxyXG5gXHJcbmV4cG9ydCBjb25zdCBBZGRyZXNzQm94ID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICA+IG1haW4ge1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgPiBoZWFkZXIge1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcbmV4cG9ydCBjb25zdCBDYXJkQm94ID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAxNnB4IDIwcHg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBtaW4tY29udGVudDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xyXG4gID4gaGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIH1cclxuICA+IGFzaWRlIHtcclxuICAgIGdyaWQtYXJlYTogMS8yLzMvMztcclxuICB9XHJcbmBcclxuZXhwb3J0IGNvbnN0IFNob3BUb3RhbCA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogMCAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbmBcclxuZXhwb3J0IGNvbnN0IEZvb3RlckZpdCA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBwYWRkaW5nOiAxNnB4IDI0cHg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIG1heC1jb250ZW50O1xyXG4gIGdyaWQtcm93LWdhcDogOHB4O1xyXG4gIGJveC1zaGFkb3c6ICR7bXBTdHlsZS5zaGFkb3dbJzEnXX07XHJcbiAgPiBoZWFkZXIge1xyXG4gICAgPiBzcGFuIHtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICA+IGFzaWRlIHtcclxuICAgIGdyaWQtYXJlYTogMS8yLzMvMztcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBPcmRlclBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCB7YWN0aW9uczogYWN0aW9uc1NBTX0gPSB1c2VTdG9yZU1vZGVsKHNlbGVjdEFkZHJlc3NNb2RlbClcclxuICBjb25zdCB7YWN0aW9uczogYWN0aW9uc1NlbGVjdENhcmR9ID0gdXNlU3RvcmVNb2RlbChzZWxlY3RDYXJkTW9kZWwpXHJcbiAgY29uc3Qge3N0YXRlOiBzdGF0ZVNDTSwgYWN0aW9uczogYWN0aW9uc1NDTSwgZ2V0TG9hZH0gPSB1c2VTdG9yZU1vZGVsKHNob3BDYXJ0TW9kZWwpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhY3Rpb25zU0NNLmdldE9yZGVySW5mbygpXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IGFkZHJlc3NEYXRhID0gc3RhdGVTQ00uZGVhbEFkZHJlc3NEYXRhKHN0YXRlU0NNKVxyXG4gIGNvbnN0IGNhcmREYXRhID0gc3RhdGVTQ00ucGF5Q2FyZExpc3Q/LmZpbmQodiA9PiB2LmlkID09PSBzdGF0ZVNDTS5mb3JtLnBheW1lbnRNZXRob2RDYXJkSWQpIHx8IHt9XHJcbiAgY29uc3QgcHJvZHVjdFRvdGFsID0gc3RhdGVTQ00uZGVhbFByb2R1Y3RUb3RhbChzdGF0ZVNDTSlcclxuICBjb25zdCB0cmFuc3BvcnRhdGlvbkNvc3RzID0gc3RhdGVTQ00uZGVhbFRyYW5zcG9ydGF0aW9uQ29zdHMoc3RhdGVTQ00sIHByb2R1Y3RUb3RhbClcclxuICBjb25zdCBhY3R1YWxseVBhaWQgPSBwcm9kdWN0VG90YWwgKyB0cmFuc3BvcnRhdGlvbkNvc3RzIC0gZGVhbE1heWJlTnVtYmVyKHN0YXRlU0NNLmZvcm0uZGVkdWN0Q29pbikgKyBkZWFsTWF5YmVOdW1iZXIoc3RhdGVTQ00uZm9ybS5zYWxlVGF4KSAtIGRlYWxNYXliZU51bWJlcihzdGF0ZVNDTS5mb3JtPy5jb3Vwb25EaXNjb3VudClcclxuICBjb25zdCBnZW5lcmF0ZUNvaW4gPSBhY3R1YWxseVBhaWQgKiAwLjAxXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoc3RhdGVTQ00ucGFnZVR5cGUgPT09IHBhZ2VUeXBlRW51bS5vcmRlcikge1xyXG4gICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgJycsIGRvY3VtZW50LlVSTCk7XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIChzdGF0ZSkgPT4ge1xyXG4gICAgICAgIC8vIOebkeWQrOWIsOi/lOWbnuS6i+S7tu+8jOazqOaEj++8jOWPquacieinpuWPkeS6hui/lOWbnuaJjeS8muaJp+ihjOi/meS4quaWueazlVxyXG4gICAgICAgIGFjdGlvbnNTQ00udXBkYXRlUGFnZVR5cGUocGFnZVR5cGVFbnVtLnNob3BDYXJ0KVxyXG4gICAgICB9LCBmYWxzZSlcclxuICAgIH1cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIChzdGF0ZSkgPT4ge1xyXG4gICAgICAgIGFjdGlvbnNTQ00udXBkYXRlUGFnZVR5cGUocGFnZVR5cGVFbnVtLnNob3BDYXJ0KVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sIFtzdGF0ZVNDTS5wYWdlVHlwZV0pXHJcblxyXG4gIHJldHVybiA8ZGl2PlxyXG4gICAgPEhlYWRlclRpdGxlXHJcbiAgICAgICAgdGl0bGU9eyforqLljZXmlK/ku5gnfVxyXG4gICAgICAgIGJhY2tDYWxsPXsoKSA9PiB7XHJcbiAgICAgICAgICBhY3Rpb25zU0NNLnVwZGF0ZVBhZ2VUeXBlKHBhZ2VUeXBlRW51bS5zaG9wQ2FydClcclxuICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfX1cclxuICAgIC8+XHJcbiAgICB7KCEhZ2V0TG9hZChkb2Mub3JkZXJDb25maXJtSW5mbykgJiYgPExpbmVhclByb2dyZXNzLz4pIHx8IDxkaXYgc3R5bGU9e3toZWlnaHQ6ICc0cHgnfX0vPn1cclxuICAgIDxCU2Nyb2xsZXJcclxuICAgICAgICBib3hIZWlnaHQ9eydjYWxjKDEwMHZoIC0gMTM1cHgpJ31cclxuICAgID5cclxuICAgICAgPFNwYWNlIGg9ezEwfS8+XHJcbiAgICAgIDxTaG9wVGl0bGU+XHJcbiAgICAgICAgPFNwYWNlIHc9ezIwfS8+XHJcbiAgICAgICAge2xzKChzdGF0ZVNDTS5mb3JtLnBpY2tVcFR5cGUgPT09IFBpY2tVcFR5cGVFbnVtLlNlbGYgJiYgJ+iHquWPluWcsOWdgCcpIHx8ICfpgIHotKflnLDlnYAnKX1cclxuICAgICAgPC9TaG9wVGl0bGU+XHJcbiAgICAgIDxBZGRyZXNzQm94PlxyXG4gICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgICAge2Ake2FkZHJlc3NEYXRhLmNvbWJpbmVBZGRyZXNzfWB9XHJcbiAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgICAgIHtgJHthZGRyZXNzRGF0YS5uYW1lfSAke2FkZHJlc3NEYXRhLmNvbnRhY3RJbmZvcm1hdGlvbn1gfVxyXG4gICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgICAgIDxhc2lkZT5cclxuICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17YXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYWN0aW9uc1NBTS5vcGVuQ2xpY2soKVxyXG4gICAgICAgICAgICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICBhY3Rpb25zU0NNLnNldEZvcm0oWydhZGRyZXNzSWQnLCByZXNdKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxDaGV2cm9uUmlnaHRJY29uLz5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICA8L2FzaWRlPlxyXG4gICAgICA8L0FkZHJlc3NCb3g+XHJcbiAgICAgIDxTcGFjZSBjPXtncmV5WzIwMF19XHJcbiAgICAgICAgICAgICBoPXsxNn0vPlxyXG4gICAgICA8U3BhY2UgaD17MTZ9Lz5cclxuICAgICAgPFNob3BUaXRsZT5cclxuICAgICAgICA8U3BhY2Ugdz17MjB9Lz5cclxuICAgICAgICB7bHMoJ+S7mOasvuaWueW8jycpfVxyXG4gICAgICA8L1Nob3BUaXRsZT5cclxuICAgICAgPENhcmRCb3g+XHJcbiAgICAgICAgPGhlYWRlcj57Y2FyZERhdGEubmFtZX08L2hlYWRlcj5cclxuICAgICAgICA8Zm9vdGVyPntjYXJkRGF0YS5udW1iZXJ9PC9mb290ZXI+XHJcbiAgICAgICAgPGFzaWRlPlxyXG4gICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXthc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBhY3Rpb25zU2VsZWN0Q2FyZC5vcGVuQ2xpY2soKVxyXG4gICAgICAgICAgICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICBhY3Rpb25zU0NNLnNldEZvcm0oWydwYXltZW50TWV0aG9kQ2FyZElkJywgcmVzXSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8Q2hldnJvblJpZ2h0SWNvbi8+XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgPC9hc2lkZT5cclxuICAgICAgPC9DYXJkQm94PlxyXG4gICAgICA8U3BhY2UgYz17Z3JleVsyMDBdfVxyXG4gICAgICAgICAgICAgaD17MTZ9Lz5cclxuICAgICAgPFNwYWNlIGg9ezE2fS8+XHJcbiAgICAgIDxTaG9wVGl0bGU+XHJcbiAgICAgICAgPFNwYWNlIHc9ezIwfS8+XHJcbiAgICAgICAge2xzKCfkvb/nlKjovr7kurrluIEnKX1cclxuICAgICAgICA8U3BhY2Ugdz17MTZ9Lz5cclxuICAgICAgICA8Zm9vdGVyPntscygn5b2T5pyI5Y+v55So5L2Z6aKdJyl9e2RlYWxNb25leShzdGF0ZVNDTS51c2VyLm9yZGVyQ29pbkN1cnJlbnRNb250aCl9PC9mb290ZXI+XHJcbiAgICAgIDwvU2hvcFRpdGxlPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxTcGFjZSB3PXsyMH0vPlxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Ub3A6ICc4cHgnLCBtYXJnaW5Cb3R0b206ICcyNHB4J319XHJcbiAgICAgICAgICAgIGxhYmVsPXtscygnJyl9XHJcbiAgICAgICAgICAgIHZhbHVlPXtzdGF0ZVNDTS5mb3JtLmRlZHVjdENvaW59XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuICAgICAgICAgICAgICBhY3Rpb25zU0NNLnNldEZvcm0oWydkZWR1Y3RDb2luJywgZS50YXJnZXQudmFsdWVdKVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8U3BhY2UgYz17Z3JleVsyMDBdfVxyXG4gICAgICAgICAgICAgaD17MTZ9Lz5cclxuICAgICAgPFNwYWNlIGg9ezE2fS8+XHJcbiAgICAgIDxTaG9wVG90YWw+XHJcbiAgICAgICAgPGhlYWRlcj57bHMoJ+i0reeJqei9puaAu+iuoScpfTwvaGVhZGVyPlxyXG4gICAgICAgIDxmb290ZXI+e2RlYWxNb25leShwcm9kdWN0VG90YWwgLSAoc3RhdGVTQ00uZm9ybT8uY291cG9uRGlzY291bnQgPz8gMCkpfTwvZm9vdGVyPlxyXG4gICAgICA8L1Nob3BUb3RhbD5cclxuICAgICAgey8qe2RlYWxNYXliZU51bWJlcihzdGF0ZVNDTS5mb3JtPy5jb3Vwb25EaXNjb3VudCkgPiAwICYmIDxTaG9wVG90YWw+Ki99XHJcbiAgICAgIHsvKiAgPGhlYWRlcj57bHMoJ+S8mOaDoOaKmOaJoycpfTwvaGVhZGVyPiovfVxyXG4gICAgICB7LyogIDxmb290ZXI+e2RlYWxNb25leShzdGF0ZVNDTS5mb3JtPy5jb3Vwb25EaXNjb3VudCl9PC9mb290ZXI+Ki99XHJcbiAgICAgIHsvKjwvU2hvcFRvdGFsPn0qL31cclxuICAgICAge3RyYW5zcG9ydGF0aW9uQ29zdHMgPiAwICYmIDxTaG9wVG90YWw+XHJcbiAgICAgICAgPGhlYWRlcj57bHMoJ+i/kOi0uScpfTwvaGVhZGVyPlxyXG4gICAgICAgIDxmb290ZXI+e2RlYWxNb25leSh0cmFuc3BvcnRhdGlvbkNvc3RzKX08L2Zvb3Rlcj5cclxuICAgICAgPC9TaG9wVG90YWw+fVxyXG4gICAgICA8U2hvcFRvdGFsPlxyXG4gICAgICAgIDxoZWFkZXI+e2xzKCfovr7kurrluIHmirXmiaMnKX08L2hlYWRlcj5cclxuICAgICAgICA8Zm9vdGVyPntkZWFsTW9uZXkoc3RhdGVTQ00uZm9ybS5kZWR1Y3RDb2luLCAnLScpfTwvZm9vdGVyPlxyXG4gICAgICA8L1Nob3BUb3RhbD5cclxuICAgICAgey8qPFNob3BUb3RhbD4qL31cclxuICAgICAgey8qICA8aGVhZGVyPntscygn5raI6LS556iOJyl9PC9oZWFkZXI+Ki99XHJcbiAgICAgIHsvKiAgPGZvb3Rlcj57ZGVhbE1vbmV5KHN0YXRlU0NNLmZvcm0uc2FsZVRheCl9PC9mb290ZXI+Ki99XHJcbiAgICAgIHsvKjwvU2hvcFRvdGFsPiovfVxyXG4gICAgICA8U2hvcFRvdGFsXHJcbiAgICAgICAgICBzdHlsZT17e2ZvbnRTaXplOiAnMThweCd9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGhlYWRlcj57bHMoJ+iuouWNleaAu+minScpfTwvaGVhZGVyPlxyXG4gICAgICAgIDxmb290ZXI+e2RlYWxNb25leShhY3R1YWxseVBhaWQpfTwvZm9vdGVyPlxyXG4gICAgICA8L1Nob3BUb3RhbD5cclxuICAgICAgPFNwYWNlIGg9ezMwfS8+XHJcbiAgICA8L0JTY3JvbGxlcj5cclxuICAgIDxGb290ZXJGaXQ+XHJcbiAgICAgIDxoZWFkZXI+e2xzKCfmnKzmrKHorqLljZUnKX1cclxuICAgICAgICA8c3Bhbj57bHMoc3RhdGVTQ00udXNlckxldmVsTGlzdC5maW5kKHYgPT4gdi5jb2RlID09PSBzdGF0ZVNDTS51c2VyLnVzZXJJbmZvPy51c2VyTGV2ZWwpPy5uYW1lKX08L3NwYW4+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG4gICAgICA8Zm9vdGVyPntscygn5bCG6I635b6X5LiL5pyI5L2/55So6L6+5Lq65biBICcpfVxyXG4gICAgICAgIDxzcGFuPntkZWFsTW9uZXkoZ2VuZXJhdGVDb2luKX08L3NwYW4+XHJcbiAgICAgIDwvZm9vdGVyPlxyXG4gICAgICA8YXNpZGU+XHJcbiAgICAgICAgPEJ1dHRvbkxvYWRcclxuICAgICAgICAgICAgbG9hZGluZz17Z2V0TG9hZChkb2Muc2F2ZU9yZGVyKX1cclxuICAgICAgICAgICAgb25DbGljaz17YXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChkZWFsTWF5YmVOdW1iZXIoc3RhdGVTQ00udXNlcj8ub3JkZXJDb2luQ3VycmVudE1vbnRoKSA8IGRlYWxNYXliZU51bWJlcihzdGF0ZVNDTS5mb3JtLmRlZHVjdENvaW4pKSB7XHJcbiAgICAgICAgICAgICAgICBzaG93TWVzc2FnZShscygn6L6+5Lq65biB5L2Z6aKd5LiN6LazJykpXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIGNvbnN0IHN1Ym1pdERhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZVNDTS5mb3JtLFxyXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVDb2luLFxyXG4gICAgICAgICAgICAgICAgYWN0dWFsbHlQYWlkLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNwb3J0YXRpb25Db3N0cyxcclxuICAgICAgICAgICAgICAgIHN1YnRvdGFsOiBwcm9kdWN0VG90YWwsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50VXNlckxldmVsOiBzdGF0ZVNDTS51c2VyLnVzZXJJbmZvPy51c2VyTGV2ZWwsXHJcbiAgICAgICAgICAgICAgICByT3JkZXJQcm9kdWN0OiBzdGF0ZVNDTS5zaG9wQ2FydExpc3QubWFwKHYgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgY291bnQ6IHYubnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICBwcm9kdWN0SWQ6IHYucHJvZHVjdD8uaWQsXHJcbiAgICAgICAgICAgICAgICAgIHByb2R1Y3Q6IHYucHJvZHVjdCxcclxuICAgICAgICAgICAgICAgIH0pKSxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYWN0aW9uc1NDTS5zdWJtaXQoe1xyXG4gICAgICAgICAgICAgICAgLi4uc3VibWl0RGF0YSxcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIGlmIChyZXM/LnNhdmVPcmRlcj8uaWQpIHtcclxuICAgICAgICAgICAgICAgIHNob3dNZXNzYWdlKCfmk43kvZzmiJDlip8g5bCG5YmN5b6A5LuY5qy+JylcclxuICAgICAgICAgICAgICAgIC8vIGF3YWl0IHJvdXRlci5yZXBsYWNlKCcvY2FydC9yZXN1bHQnKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgX3F1ZXJ5ID0gZGVhbFVybFF1ZXJ5KHtvcmRlcklkOiByZXM/LnNhdmVPcmRlcj8uaWR9KVxyXG4gICAgICAgICAgICAgICAgYXdhaXQgcm91dGVyLnJlcGxhY2UoYC9wYXkke19xdWVyeX1gLCBgL3BheSR7X3F1ZXJ5fWApXHJcbiAgICAgICAgICAgICAgICBhY3Rpb25zU0NNLmNsZWFyRGF0YSgpXHJcbiAgICAgICAgICAgICAgICBhY3Rpb25zU0NNLmdldExpc3QoKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgdmFyaWFudD17J2NvbnRhaW5lZCd9XHJcbiAgICAgICAgICAgIGNvbG9yPXsnc2Vjb25kYXJ5J31cclxuICAgICAgICA+e2xzKCfmj5DkuqTorqLljZUnKX08L0J1dHRvbkxvYWQ+XHJcbiAgICAgIDwvYXNpZGU+XHJcbiAgICA8L0Zvb3RlckZpdD5cclxuICAgIDxTZWxlY3RBZGRyZXNzLz5cclxuICAgIDxTZWxlY3RDYXJkLz5cclxuICA8L2Rpdj5cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge2RvY30gZnJvbSAnLi4vLi4vZ3JhcGhxbFR5cGVzL2RvYydcclxuaW1wb3J0IHtkZWFsTWF5YmVOdW1iZXIsIGRlYWxNb25leSwgZnBNZXJnZX0gZnJvbSAnLi4vLi4vdG9vbHMvdXRpbHMnXHJcbmltcG9ydCB7dXNlU3RvcmVNb2RlbH0gZnJvbSAnLi4vLi4vTW9kZWxBY3Rpb24vdXNlU3RvcmUnXHJcbmltcG9ydCB7bHN9IGZyb20gJy4uLy4uL3Rvb2xzL2RlYWxLZXknXHJcbmltcG9ydCB7SGVhZGVyVGl0bGV9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSGVhZGVyVGl0bGUvSGVhZGVyVGl0bGUnXHJcbmltcG9ydCB7Qm94LCBCdXR0b24sIExpbmVhclByb2dyZXNzLCBNZW51SXRlbSwgVGV4dEZpZWxkfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHtncmV5fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7RGlzY291bnRDb25kaXRpb25FbnVtLCBEaXNjb3VudFR5cGVFbnVtLCBnZXRQaWNrVXBUeXBlTmFtZSwgUGlja1VwVHlwZUVudW19IGZyb20gJy4uLy4uL3NzX2NvbW1vbi9lbnVtJ1xyXG5pbXBvcnQge0NhcnRQcm9kdWN0fSBmcm9tICcuL0NhcnRQcm9kdWN0J1xyXG5pbXBvcnQge0JTY3JvbGxlcn0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CU2Nyb2xsL0JTY3JvbGxlcidcclxuaW1wb3J0IHtwYWdlVHlwZUVudW0sIHNob3BDYXJ0TW9kZWx9IGZyb20gJy4vaW5kZXgnXHJcbmltcG9ydCB7ZGVhbE5vQXV0aH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Ob0F1dGgvTm9BdXRoJ1xyXG5pbXBvcnQge1NwYWNlfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0JveC9Cb3gnXHJcbmltcG9ydCB7SW5wdXRQcm9tb0NvZGVEaWFsb2csIGlucHV0UHJvbW9Db2RlTW9kZWx9IGZyb20gJy4vY29tcG9uZW50cy9JbnB1dFByb21vQ29kZSdcclxuaW1wb3J0IENsb3NlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2UnXHJcbmltcG9ydCB7VXBkYXRlU2hvcENhcnR9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUHJvZHVjdEl0ZW0vVXBkYXRlU2hvcENhcnQnXHJcblxyXG5jb25zdCBCb3hDb250YWluID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgcGFkZGluZzogMCAyMHB4O1xyXG5gXHJcbmNvbnN0IFRpdGxlID0gc3R5bGVkLmRpdmBcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luOiAxNnB4IDAgMTJweDtcclxuYFxyXG5jb25zdCBQcm9tb0NvZGUgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgPiBhc2lkZSB7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiAke2dyZXlbMTAwXX07XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIH1cclxuYFxyXG5jb25zdCBNb25leSA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbmBcclxuY29uc3QgRml4Rm9vdGVyID0gc3R5bGVkKEJveClgXHJcbiAgcGFkZGluZzogMjBweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBTaG9wQ2FydFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3Qge3N0YXRlOiBzdGF0ZVNDTSwgYWN0aW9uczogYWN0aW9uc1NDTSwgZ2V0TG9hZH0gPSB1c2VTdG9yZU1vZGVsKHNob3BDYXJ0TW9kZWwpXHJcbiAgY29uc3Qge2FjdGlvbnM6IGFjdGlvbnNJbnB1dFByb21vQ29kZU1vZGVsfSA9IHVzZVN0b3JlTW9kZWwoaW5wdXRQcm9tb0NvZGVNb2RlbClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzdGF0ZVNDTS5zaG9wQ2FydExpc3QubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGFjdGlvbnNTQ00uZ2V0TGlzdCgpXHJcbiAgICB9XHJcbiAgfSwgW10pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzdGF0ZVNDTS51c2VyLmlkICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBwcm9tb0NvZGVfJHtzdGF0ZVNDTS51c2VyLmlkfWApKSB7XHJcbiAgICAgIGFjdGlvbnNTQ00uZGVhbFByb21vQ29kZShgJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgcHJvbW9Db2RlXyR7c3RhdGVTQ00udXNlci5pZH1gKX1gKVxyXG4gICAgfVxyXG4gIH0sIFtzdGF0ZVNDTS51c2VyLmlkXSlcclxuICBjb25zdCBwcm9kdWN0TnVtYmVyID0gc3RhdGVTQ00uZGVhbFByb2R1Y3ROdW1iZXIoc3RhdGVTQ00pXHJcbiAgY29uc3QgcHJvZHVjdFN1YnRvdGFsID0gZGVhbE1vbmV5KHN0YXRlU0NNLmRlYWxQcm9kdWN0VG90YWwoc3RhdGVTQ00pKVxyXG5cclxuICBjb25zdCBwcm9tb0NvZGUgPSBzdGF0ZVNDTS5wcm9tb0NvZGVcclxuICBjb25zdCBkaXNjb3VudFByb2R1Y3QgPSBzdGF0ZVNDTS5zaG9wQ2FydExpc3QuZmlsdGVyKHYgPT4gW3YucHJvZHVjdD8uY2F0ZWdvcnk/LmlkLCB2LnByb2R1Y3Q/LmNhdGVnb3J5Py5wYXJlbnRDYXRlZ29yeT8uaWQsIHYucHJvZHVjdD8uY2F0ZWdvcnk/LnBhcmVudENhdGVnb3J5Py5wYXJlbnRDYXRlZ29yeT8uaWRdLmluY2x1ZGVzKHByb21vQ29kZS5wcm9kdWN0Q2F0ZWdvcnkpKVxyXG4gIGNvbnN0IGRpc2NvdW50UHJvZHVjdEFtb3VudCA9IGRpc2NvdW50UHJvZHVjdC5yZWR1Y2UoKHByZXZpb3VzVmFsdWUsIGN1cnJlbnRWYWx1ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHByZXZpb3VzVmFsdWUgKyBkZWFsTWF5YmVOdW1iZXIoY3VycmVudFZhbHVlLm51bWJlcikgKiBkZWFsTWF5YmVOdW1iZXIoY3VycmVudFZhbHVlLnByb2R1Y3Q/LnByaWNlT3V0KVxyXG4gIH0sIDApXHJcbiAgLy8g6K6h566X5oqY5omjXHJcbiAgbGV0IGRpc2NvdW50QW1vdW50Rm9yUHJvbW9Db2RlID0gMFxyXG4gIGlmIChkaXNjb3VudFByb2R1Y3QubGVuZ3RoKSB7XHJcbiAgICAvLyDmipjmiaPmnaHku7ZcclxuICAgIGlmIChwcm9tb0NvZGUuZGlzY291bnRDb25kaXRpb24gPT09IERpc2NvdW50Q29uZGl0aW9uRW51bS5Ob1xyXG4gICAgICAgIHx8IChwcm9tb0NvZGUuZGlzY291bnRDb25kaXRpb24gPT09IERpc2NvdW50Q29uZGl0aW9uRW51bS5BbW91bnQgJiYgZGlzY291bnRQcm9kdWN0QW1vdW50ID4gZGVhbE1heWJlTnVtYmVyKHByb21vQ29kZS5kaXNjb3VudENvbmRpdGlvbkFtb3VudCkpKSB7XHJcbiAgICAgIGRpc2NvdW50QW1vdW50Rm9yUHJvbW9Db2RlID0gcHJvbW9Db2RlLmRpc2NvdW50VHlwZSA9PT0gRGlzY291bnRUeXBlRW51bS5BbW91bnQgPyBkZWFsTWF5YmVOdW1iZXIocHJvbW9Db2RlLmRpc2NvdW50QW1vdW50KSA6IChkZWFsTWF5YmVOdW1iZXIocHJvbW9Db2RlLmRpc2NvdW50QW1vdW50KSAqIGRpc2NvdW50UHJvZHVjdEFtb3VudCAvIDEwMClcclxuICAgIH1cclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChkaXNjb3VudEFtb3VudEZvclByb21vQ29kZSkge1xyXG4gICAgICBhY3Rpb25zU0NNLnNldEZvcm0oWydjb3Vwb25EaXNjb3VudCcsIGRpc2NvdW50QW1vdW50Rm9yUHJvbW9Db2RlXSlcclxuICAgIH1cclxuICB9LCBbZGlzY291bnRBbW91bnRGb3JQcm9tb0NvZGVdKVxyXG4gIGNvbnN0IGFsbFRvdGFsID0gc3RhdGVTQ00uZGVhbFByb2R1Y3RUb3RhbChzdGF0ZVNDTSkgLSBkZWFsTWF5YmVOdW1iZXIoc3RhdGVTQ00uZm9ybS5jb3Vwb25EaXNjb3VudClcclxuXHJcbiAgcmV0dXJuIDxkaXY+XHJcbiAgICA8SGVhZGVyVGl0bGVcclxuICAgICAgICB0aXRsZT17J+i0reeJqei9pid9XHJcbiAgICAgICAgTGVmdEljb249e0Nsb3NlSWNvbn1cclxuICAgIC8+XHJcbiAgICB7ZGVhbE5vQXV0aCg8PlxyXG4gICAgICB7KCEhZ2V0TG9hZChkb2MudXNlclNob3BDYXJ0TGlzdCkgJiYgPExpbmVhclByb2dyZXNzLz4pIHx8IDxkaXYgc3R5bGU9e3toZWlnaHQ6ICc0cHgnfX0vPn1cclxuICAgICAgPEJTY3JvbGxlciBib3hIZWlnaHQ9eydjYWxjKDEwMHZoIC0gNjVweCknfT5cclxuICAgICAgICA8Qm94Q29udGFpbj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdUb3A6ICcxNnB4JywgZm9udFNpemU6ICcxOHB4JywgdGV4dEFsaWduOiAnY2VudGVyJ319XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtwcm9kdWN0TnVtYmVyfXtscygn5Lu25ZWG5ZOBJyl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6ICcxNHB4JyxcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JleVs2MDBdLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAnOHB4JyxcclxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzEwcHgnLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtscygn5bCP6K6hJyl9Ontwcm9kdWN0U3VidG90YWx9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHtzdGF0ZVNDTS5zaG9wQ2FydExpc3QubWFwKHZhbHVlID0+IDxDYXJ0UHJvZHVjdFxyXG4gICAgICAgICAgICAgIGtleT17YENhcnRQcm9kdWN0XyR7dmFsdWUuaWR9YH1cclxuICAgICAgICAgICAgICBzaG9wQ2FydD17dmFsdWV9Lz4pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Ub3A6ICcxMHB4J319XHJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoPXt0cnVlfVxyXG4gICAgICAgICAgICAgIGxhYmVsPXtscygn6L+Q6YCB5pa55byPJyl9XHJcbiAgICAgICAgICAgICAgc2VsZWN0PXt0cnVlfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZVNDTS5mb3JtLnBpY2tVcFR5cGV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbnNTQ00uc2V0Rm9ybShbJ3BpY2tVcFR5cGUnLCBldmVudC50YXJnZXQudmFsdWVdKVxyXG4gICAgICAgICAgICAgICAgYWN0aW9uc1NDTS5zZXRGb3JtKFsnYWRkcmVzc0lkJywgc3RhdGVTQ00uaW5pdEFkZHJlc3NJZChmcE1lcmdlKHN0YXRlU0NNLCB7XHJcbiAgICAgICAgICAgICAgICAgIGZvcm06IHtcclxuICAgICAgICAgICAgICAgICAgICBwaWNrVXBUeXBlOiBldmVudC50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KSldKVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e1BpY2tVcFR5cGVFbnVtLlNlbGZ9XHJcbiAgICAgICAgICAgID57bHMoZ2V0UGlja1VwVHlwZU5hbWUoUGlja1VwVHlwZUVudW0uU2VsZikpfTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e1BpY2tVcFR5cGVFbnVtLkRlbGl2ZXJ5fVxyXG4gICAgICAgICAgICA+e2xzKGdldFBpY2tVcFR5cGVOYW1lKFBpY2tVcFR5cGVFbnVtLkRlbGl2ZXJ5KSl9PC9NZW51SXRlbT5cclxuICAgICAgICAgIDwvVGV4dEZpZWxkPlxyXG4gICAgICAgICAgPFRpdGxlPntscygn6L6+5Lq65Y2h5ZKM5LyY5oOg5Yi4Jyl9PC9UaXRsZT5cclxuICAgICAgICAgIDxQcm9tb0NvZGU+XHJcbiAgICAgICAgICAgIDxtYWluPntzdGF0ZVNDTS5wcm9tb0NvZGUudGl0bGV9PC9tYWluPlxyXG4gICAgICAgICAgICA8YXNpZGU+e2xzKCdjb2RlJyl9OiB7c3RhdGVTQ00ucHJvbW9Db2RlLmNvZGV9PC9hc2lkZT5cclxuICAgICAgICAgIDwvUHJvbW9Db2RlPlxyXG4gICAgICAgICAgPFNwYWNlIGg9ezh9Lz5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICB2YXJpYW50PXsnb3V0bGluZWQnfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IGFjdGlvbnNJbnB1dFByb21vQ29kZU1vZGVsLm9wZW5DbGljaygocHJvbW9Db2RlOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGFjdGlvbnNTQ00uZGVhbFByb21vQ29kZShwcm9tb0NvZGUpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+e2xzKHN0YXRlU0NNLnByb21vQ29kZS5jb2RlID8gJ+mHjeaWsOi+k+WFpScgOiAn6L6T5YWl6aqM6K+B56CBJyl9PC9CdXR0b24+XHJcbiAgICAgICAgICA8SW5wdXRQcm9tb0NvZGVEaWFsb2cvPlxyXG4gICAgICAgICAgPFRpdGxlPntscygn6aKE5Lyw5Lu35qC8Jyl9PC9UaXRsZT5cclxuICAgICAgICAgIDxNb25leT5cclxuICAgICAgICAgICAgPGFzaWRlPntscygn5bCP6K6hJyl9PC9hc2lkZT5cclxuICAgICAgICAgICAgPG1haW4+e3Byb2R1Y3RTdWJ0b3RhbH08L21haW4+XHJcbiAgICAgICAgICA8L01vbmV5PlxyXG4gICAgICAgICAgPFNwYWNlIGg9ezEwfS8+XHJcbiAgICAgICAgICA8TW9uZXk+XHJcbiAgICAgICAgICAgIDxhc2lkZT57bHMoJ+aKmOaJoycpfTwvYXNpZGU+XHJcbiAgICAgICAgICAgIDxtYWluPntkZWFsTW9uZXkoc3RhdGVTQ00uZm9ybS5jb3Vwb25EaXNjb3VudCl9PC9tYWluPlxyXG4gICAgICAgICAgPC9Nb25leT5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMHB4J319Lz5cclxuICAgICAgICAgIDxNb25leT5cclxuICAgICAgICAgICAgPGFzaWRlPntscygn5oC76K6hJyl9PC9hc2lkZT5cclxuICAgICAgICAgICAgPG1haW4+e2RlYWxNb25leShhbGxUb3RhbCl9PC9tYWluPlxyXG4gICAgICAgICAgPC9Nb25leT5cclxuICAgICAgICAgIDxUaXRsZT57bHMoJ+S4i+asoei0reS5sOeahOWVhuWTgScpfTwvVGl0bGU+XHJcbiAgICAgICAgICB7c3RhdGVTQ00uc2hvcENhcnRMaXN0TmV4dC5tYXAodmFsdWUgPT4gPENhcnRQcm9kdWN0XHJcbiAgICAgICAgICAgICAga2V5PXtgQ2FydFByb2R1Y3RfJHt2YWx1ZS5pZH1gfVxyXG4gICAgICAgICAgICAgIHNob3BDYXJ0PXt2YWx1ZX0vPil9XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwcHgnfX0vPlxyXG4gICAgICAgIDwvQm94Q29udGFpbj5cclxuICAgICAgPC9CU2Nyb2xsZXI+XHJcbiAgICAgIDxGaXhGb290ZXIgYm94U2hhZG93PXsxfT5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9eydjb250YWluZWQnfVxyXG4gICAgICAgICAgICBjb2xvcj17J3NlY29uZGFyeSd9XHJcbiAgICAgICAgICAgIGZ1bGxXaWR0aD17dHJ1ZX1cclxuICAgICAgICAgICAgZGlzYWJsZWQ9e3Byb2R1Y3ROdW1iZXIgPT09IDB9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFjdGlvbnNTQ00udXBkYXRlUGFnZVR5cGUocGFnZVR5cGVFbnVtLm9yZGVyKX1cclxuICAgICAgICA+5Y6757uT566XPC9CdXR0b24+XHJcbiAgICAgIDwvRml4Rm9vdGVyPlxyXG4gICAgICA8VXBkYXRlU2hvcENhcnQvPlxyXG4gICAgPC8+KX1cclxuICA8L2Rpdj5cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge0hlYWRlclRpdGxlfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0hlYWRlclRpdGxlL0hlYWRlclRpdGxlJ1xyXG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DbG9zZSdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHtEaXZpZGVyLCBJY29uQnV0dG9uLCBJbnB1dEFkb3JubWVudCwgVGV4dEZpZWxkfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHtBdXRvY29tcGxldGV9IGZyb20gJ0BtYXRlcmlhbC11aS9sYWInXHJcbmltcG9ydCB7U2VhcmNofSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnXHJcbmltcG9ydCB7bW9kZWxGYWN0b3J5fSBmcm9tICcuLi8uLi9Nb2RlbEFjdGlvbi9tb2RlbFV0aWwnXHJcbmltcG9ydCB7UHJvZHVjdCwgUHJvbW9Db2RlLCBVc2VyfSBmcm9tICcuLi8uLi9ncmFwaHFsVHlwZXMvdHlwZXMnXHJcbmltcG9ydCB7ZG9jfSBmcm9tICcuLi8uLi9ncmFwaHFsVHlwZXMvZG9jJ1xyXG5pbXBvcnQge3VzZVN0b3JlTW9kZWx9IGZyb20gJy4uLy4uL01vZGVsQWN0aW9uL3VzZVN0b3JlJ1xyXG5pbXBvcnQge3NldEZvcm19IGZyb20gJy4uLy4uL3Rvb2xzL2NvbW1vbkFjdGlvbidcclxuaW1wb3J0IHtmcE1lcmdlUHJlfSBmcm9tICcuLi8uLi90b29scy91dGlscydcclxuaW1wb3J0IHtsc30gZnJvbSAnLi4vLi4vdG9vbHMvZGVhbEtleSdcclxuaW1wb3J0IHtHcm91cFByb2R1Y3RJdGVtLCBQcm9kdWN0SXRlbU9uZVJvd30gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Qcm9kdWN0SXRlbS9Qcm9kdWN0SXRlbSdcclxuaW1wb3J0IHtTcGFjZX0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Cb3gvQm94J1xyXG5pbXBvcnQge2dldFByb21vQ29kZUl0ZW19IGZyb20gJy4uL2NhcmQvW3R5cGVdJ1xyXG5pbXBvcnQge1VwZGF0ZVNob3BDYXJ0fSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Byb2R1Y3RJdGVtL1VwZGF0ZVNob3BDYXJ0J1xyXG5cclxuZXhwb3J0IGNvbnN0IFNlYXJjaFBhZ2VNb2RlbCA9IG1vZGVsRmFjdG9yeSgnU2VhcmNoUGFnZScsIHtcclxuICBmb3JtOiB7XHJcbiAgICBrZXl3b3JkOiAnJyxcclxuICB9LFxyXG4gIHByb2R1Y3RMaXN0OiBbXSBhcyBQcm9kdWN0W10sXHJcbiAgZ3JvdXBQcm9kdWN0TGlzdDogW10gYXMgUHJvZHVjdFtdLFxyXG4gIHByb21vQ29kZVByb21vQ29kZUxpc3Q6IFtdIGFzIFByb21vQ29kZVtdLFxyXG4gIGRhcmVuQ2FyZFByb21vQ29kZUxpc3Q6IFtdIGFzIFByb21vQ29kZVtdLFxyXG4gIHVzZXI6IHt9IGFzIFVzZXIsXHJcbn0sIHtcclxuICBzZXRGb3JtOiBzZXRGb3JtLFxyXG4gIGdldERhdGE6IGFzeW5jICh2YWx1ZSwgb3B0aW9uKSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBvcHRpb24ucXVlcnkoZG9jLnNlYXJjaERhdGEsIHtcclxuICAgICAga2V5d29yZDogb3B0aW9uLmRhdGEuZm9ybS5rZXl3b3JkID8/ICcnLFxyXG4gICAgfSlcclxuICAgIG9wdGlvbi5zZXREYXRhKGZwTWVyZ2VQcmUoe1xyXG4gICAgICBwcm9kdWN0TGlzdDogcmVzPy5wcm9kdWN0TGlzdD8ubGlzdCA/PyBbXSxcclxuICAgICAgZ3JvdXBQcm9kdWN0TGlzdDogcmVzPy5ncm91cFByb2R1Y3RMaXN0Py5saXN0ID8/IFtdLFxyXG4gICAgICBwcm9tb0NvZGVQcm9tb0NvZGVMaXN0OiByZXM/LnByb21vQ29kZVByb21vQ29kZUxpc3QgPz8gW10sXHJcbiAgICAgIGRhcmVuQ2FyZFByb21vQ29kZUxpc3Q6IHJlcz8uZGFyZW5DYXJkUHJvbW9Db2RlTGlzdCA/PyBbXSxcclxuICAgICAgdXNlcjogcmVzPy5vbmVVc2VyID8/IHt9LFxyXG4gICAgfSkpXHJcbiAgfSxcclxufSlcclxuXHJcbmNvbnN0IFNlYXJjaElucHV0ID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAwIDE2cHg7XHJcbmBcclxuY29uc3QgVGl0bGUgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG5gXHJcbmNvbnN0IExpc3RCb3ggPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDAgMTZweDtcclxuYFxyXG5leHBvcnQgY29uc3QgU2VhcmNoUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCB7YWN0aW9uczogYWN0aW9uc1NlYXJjaFBhZ2VNb2RlbCwgc3RhdGU6IHN0YXRlU2VhcmNoUGFnZU1vZGVsfSA9IHVzZVN0b3JlTW9kZWwoU2VhcmNoUGFnZU1vZGVsKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gPGRpdj5cclxuICAgIDxIZWFkZXJUaXRsZVxyXG4gICAgICAgIHRpdGxlPXsn5pCc57SiJ31cclxuICAgICAgICBMZWZ0SWNvbj17Q2xvc2VJY29ufVxyXG4gICAgICAgIHNob3dDYXJ0PXt0cnVlfVxyXG4gICAgLz5cclxuICAgIDxTZWFyY2hJbnB1dD5cclxuICAgICAgPEF1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgc2l6ZT17J3NtYWxsJ31cclxuICAgICAgICAgIGZyZWVTb2xvXHJcbiAgICAgICAgICBkaXNhYmxlQ2xlYXJhYmxlXHJcbiAgICAgICAgICBvcHRpb25zPXtbXX1cclxuICAgICAgICAgIHZhbHVlPXtzdGF0ZVNlYXJjaFBhZ2VNb2RlbC5mb3JtLmtleXdvcmR9XHJcbiAgICAgICAgICBvbklucHV0Q2hhbmdlPXsoZXZlbnQsIHZhbHVlKSA9PiBhY3Rpb25zU2VhcmNoUGFnZU1vZGVsLnNldEZvcm0oWydrZXl3b3JkJywgdmFsdWVdKX1cclxuICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICB7Li4ucGFyYW1zfVxyXG4gICAgICAgICAgICAgICAgICBhdXRvRm9jdXM9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgIElucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICBlbmRBZG9ybm1lbnQ6IDxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj17J2VuZCd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zU2VhcmNoUGFnZU1vZGVsLmdldERhdGEoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWFyY2gvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSW5wdXRBZG9ybm1lbnQ+LFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBvbktleVVwPXtldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50Py5rZXlDb2RlID09PSAxMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgYWN0aW9uc1NlYXJjaFBhZ2VNb2RlbC5nZXREYXRhKClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgIC8+XHJcbiAgICA8L1NlYXJjaElucHV0PlxyXG4gICAge3N0YXRlU2VhcmNoUGFnZU1vZGVsLnByb2R1Y3RMaXN0Lmxlbmd0aCA+IDAgJiYgPD5cclxuICAgICAgPFRpdGxlPntscygn6Zu25ZSu5ZWG5ZOBJyl9PC9UaXRsZT5cclxuICAgICAgPExpc3RCb3g+XHJcbiAgICAgICAge3N0YXRlU2VhcmNoUGFnZU1vZGVsLnByb2R1Y3RMaXN0Lm1hcCh2YWx1ZSA9PiA8UHJvZHVjdEl0ZW1PbmVSb3dcclxuICAgICAgICAgICAga2V5PXtgcHJvZHVjdExpc3Qke3ZhbHVlLmlkfWB9XHJcbiAgICAgICAgICAgIHByb2R1Y3Q9e3ZhbHVlfVxyXG4gICAgICAgIC8+KX1cclxuICAgICAgPC9MaXN0Qm94PlxyXG4gICAgICA8U3BhY2UgaD17MTZ9Lz5cclxuICAgICAgPERpdmlkZXIgLz5cclxuICAgIDwvPn1cclxuICAgIHtzdGF0ZVNlYXJjaFBhZ2VNb2RlbC5ncm91cFByb2R1Y3RMaXN0Lmxlbmd0aCA+IDAgJiYgPD5cclxuICAgICAgPFRpdGxlPntscygn5ou85Zui5ZWG5ZOBJyl9PC9UaXRsZT5cclxuICAgICAgPExpc3RCb3g+XHJcbiAgICAgICAge3N0YXRlU2VhcmNoUGFnZU1vZGVsLmdyb3VwUHJvZHVjdExpc3QubWFwKHZhbHVlID0+IDxHcm91cFByb2R1Y3RJdGVtXHJcbiAgICAgICAgICAgIGtleT17YHByb2R1Y3RMaXN0JHt2YWx1ZS5pZH1gfVxyXG4gICAgICAgICAgICBwcm9kdWN0PXt2YWx1ZX1cclxuICAgICAgICAvPil9XHJcbiAgICAgIDwvTGlzdEJveD5cclxuICAgICAgPFNwYWNlIGg9ezE2fS8+XHJcbiAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICA8Lz59XHJcbiAgICB7c3RhdGVTZWFyY2hQYWdlTW9kZWwuZGFyZW5DYXJkUHJvbW9Db2RlTGlzdC5sZW5ndGggPiAwICYmIDw+XHJcbiAgICAgIDxUaXRsZT57bHMoJ+i+vuS6uuWNoScpfTwvVGl0bGU+XHJcbiAgICAgIDxMaXN0Qm94PlxyXG4gICAgICAgIHtzdGF0ZVNlYXJjaFBhZ2VNb2RlbC5kYXJlbkNhcmRQcm9tb0NvZGVMaXN0Lm1hcCh2YWx1ZSA9PiBnZXRQcm9tb0NvZGVJdGVtKHZhbHVlLCBzdGF0ZVNlYXJjaFBhZ2VNb2RlbC51c2VyKSl9XHJcbiAgICAgIDwvTGlzdEJveD5cclxuICAgICAgPFNwYWNlIGg9ezE2fS8+XHJcbiAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICA8Lz59XHJcbiAgICB7c3RhdGVTZWFyY2hQYWdlTW9kZWwucHJvbW9Db2RlUHJvbW9Db2RlTGlzdC5sZW5ndGggPiAwICYmIDw+XHJcbiAgICAgIDxUaXRsZT57bHMoJ+S8mOaDoOeggScpfTwvVGl0bGU+XHJcbiAgICAgIDxMaXN0Qm94PlxyXG4gICAgICAgIHtzdGF0ZVNlYXJjaFBhZ2VNb2RlbC5wcm9tb0NvZGVQcm9tb0NvZGVMaXN0Lm1hcCh2YWx1ZSA9PiBnZXRQcm9tb0NvZGVJdGVtKHZhbHVlLCBzdGF0ZVNlYXJjaFBhZ2VNb2RlbC51c2VyKSl9XHJcbiAgICAgIDwvTGlzdEJveD5cclxuICAgICAgPFNwYWNlIGg9ezE2fS8+XHJcbiAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICA8Lz59XHJcbiAgICA8VXBkYXRlU2hvcENhcnQvPlxyXG4gIDwvZGl2PlxyXG59XHJcbiIsImltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7VXNlcn0gZnJvbSAnLi4vLi4vZ3JhcGhxbFR5cGVzL3R5cGVzJ1xyXG5pbXBvcnQge2ZwTWVyZ2VQcmV9IGZyb20gJy4uLy4uL3Rvb2xzL3V0aWxzJ1xyXG5pbXBvcnQge3NldFRva2VufSBmcm9tICcuLi8uLi90b29scy90b2tlbidcclxuaW1wb3J0IHtkb2N9IGZyb20gJy4uLy4uL2dyYXBocWxUeXBlcy9kb2MnXHJcbmltcG9ydCB7bW9kZWxGYWN0b3J5fSBmcm9tICcuLi8uLi9Nb2RlbEFjdGlvbi9tb2RlbFV0aWwnXHJcblxyXG5jb25zdCB0b0xvZ2luID0gYXN5bmMgKCkgPT4ge1xyXG4gIGF3YWl0IFJvdXRlci5wdXNoKCcvbG9naW4nKVxyXG59XHJcbmV4cG9ydCBjb25zdCBtZU1vZGVsID0gbW9kZWxGYWN0b3J5KCdtZU1vZGVsJywge1xyXG4gIHVzZXI6IHt9IGFzIFVzZXIsXHJcbn0sIHtcclxuICBnZXRMb2dpblVzZXI6IGFzeW5jICh2YWx1ZSwgb3B0aW9uKSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSAoYXdhaXQgb3B0aW9uLnF1ZXJ5KGRvYy5vbmVVc2VyKSk/Lm9uZVVzZXIgYXMgVXNlclxyXG4gICAgb3B0aW9uLnNldERhdGEoZnBNZXJnZVByZSh7XHJcbiAgICAgIHVzZXI6IHJlcyxcclxuICAgIH0pKVxyXG4gIH0sXHJcbiAgbG9nb3V0OiBhc3luYyAodmFsdWUsIG9wdGlvbikgPT4ge1xyXG4gICAgc2V0VG9rZW4oJycpXHJcbiAgICBzZXRUb2tlbignJywgJ3JlZnJlc2h0b2tlbicpXHJcbiAgICBhd2FpdCB0b0xvZ2luKClcclxuICB9LFxyXG4gIHRvTG9naW46IHZhbHVlID0+IHtcclxuICAgIHRvTG9naW4oKVxyXG4gIH1cclxufSlcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9yZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9BY2NvdW50Qm94XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9BZGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0FkZENpcmNsZU91dGxpbmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93QmFja0lvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hldnJvblJpZ2h0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9DbG9zZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUGVvcGxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9SZWRlZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1JlbW92ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2hvcHBpbmdDYXJ0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9TdGFyQm9yZGVyUm91bmRlZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU3RhclJvdW5kZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1N0b3JlZnJvbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2xhYlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tYm9vc3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmV0dGVyLXNjcm9sbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjcm9zcy1mZXRjaC9wb2x5ZmlsbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkYXRlLWZucy9mb3JtYXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaC9zZXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9jb25maWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9