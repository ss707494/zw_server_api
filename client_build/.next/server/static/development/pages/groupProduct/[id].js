module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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

/***/ "./pages/groupProduct/[id].tsx":
/*!*************************************!*\
  !*** ./pages/groupProduct/[id].tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_view_groupProduct_id___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/view/groupProduct/[id] */ "./utils/view/groupProduct/[id].tsx");

/* harmony default export */ __webpack_exports__["default"] = (_utils_view_groupProduct_id___WEBPACK_IMPORTED_MODULE_0__["GroupProduct"]);

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
var _jsxFileName = "D:\\code\\zw\\zw_client_web\\utils\\components\\HeaderTitle\\HeaderTitle.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Contain = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"]).withConfig({
  displayName: "HeaderTitle__Contain",
  componentId: "zaejo2-0"
})(["display:grid;grid-template-columns:40px 1fr 40px;justify-items:center;height:60px;align-items:center;"]);
const HeaderTitle = ({
  title = '',
  backCall = () => {}
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  return __jsx(Contain, {
    boxShadow: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 10
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["IconButton"], {
    onClick: () => {
      if (!(backCall && backCall())) {
        router.back();
      }
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx(_material_ui_icons_ArrowBackIos__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  })), __jsx("main", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_4__["ls"])(title)));
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

/***/ "./utils/components/Swipe/Swipe.tsx":
/*!******************************************!*\
  !*** ./utils/components/Swipe/Swipe.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-responsive-carousel */ "react-responsive-carousel");
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tools_img__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tools/img */ "./utils/tools/img.ts");
var _jsxFileName = "D:\\code\\zw\\zw_client_web\\utils\\components\\Swipe\\Swipe.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const CusCarousel = ({
  dataList,
  onClickItem,
  height
}) => __jsx(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__["Carousel"], {
  autoPlay: true,
  showThumbs: false,
  showArrows: false,
  showStatus: false,
  infiniteLoop: true,
  onClickItem: onClickItem,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }
}, dataList === null || dataList === void 0 ? void 0 : dataList.map(item => __jsx("div", {
  key: `Carousel_${item.id}`,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 11
  }
}, __jsx("img", {
  style: {
    height: height
  },
  src: Object(_tools_img__WEBPACK_IMPORTED_MODULE_2__["dealImgUrl"])(item.imgUrl),
  alt: "",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 13
  }
}))));

/* harmony default export */ __webpack_exports__["default"] = (CusCarousel);

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

/***/ "./utils/view/groupProduct/[id].tsx":
/*!******************************************!*\
  !*** ./utils/view/groupProduct/[id].tsx ***!
  \******************************************/
/*! exports provided: groupProductModel, GroupProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupProductModel", function() { return groupProductModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupProduct", function() { return GroupProduct; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_icons_StarRounded__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/StarRounded */ "@material-ui/icons/StarRounded");
/* harmony import */ var _material_ui_icons_StarRounded__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_StarRounded__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_StarBorderRounded__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/StarBorderRounded */ "@material-ui/icons/StarBorderRounded");
/* harmony import */ var _material_ui_icons_StarBorderRounded__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_StarBorderRounded__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ModelAction/modelUtil */ "./utils/ModelAction/modelUtil.ts");
/* harmony import */ var _graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../graphqlTypes/doc */ "./utils/graphqlTypes/doc/index.ts");
/* harmony import */ var _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ModelAction/useStore */ "./utils/ModelAction/useStore.ts");
/* harmony import */ var _tools_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../tools/utils */ "./utils/tools/utils.ts");
/* harmony import */ var _components_Swipe_Swipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Swipe/Swipe */ "./utils/components/Swipe/Swipe.tsx");
/* harmony import */ var _components_HeaderTitle_HeaderTitle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/HeaderTitle/HeaderTitle */ "./utils/components/HeaderTitle/HeaderTitle.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _tools_dealKey__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../tools/dealKey */ "./utils/tools/dealKey.ts");
/* harmony import */ var _style_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../style/common */ "./utils/style/common.ts");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/colors */ "@material-ui/core/colors");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_13__);
var _jsxFileName = "D:\\code\\zw\\zw_client_web\\utils\\view\\groupProduct\\[id].tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















const groupProductModel = Object(_ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_4__["modelFactory"])('groupProductModel', {
  product: {},
  groupQueneList: [],
  selectNum: 0
}, {
  getData: async (value, option) => {
    var _res$productListByIds, _res$productListByIds2, _groupQueneList$group;

    const res = await option.query(_graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_5__["doc"].productListByIds, {
      ids: [value]
    });
    const groupQueneList = await option.query(_graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_5__["doc"].groupQueueList, {
      groupQueueItemInput: {
        product: {
          id: value
        }
      }
    });
    option.setData(Object(_tools_utils__WEBPACK_IMPORTED_MODULE_7__["fpMergePre"])({
      product: (_res$productListByIds = res === null || res === void 0 ? void 0 : (_res$productListByIds2 = res.productListByIds) === null || _res$productListByIds2 === void 0 ? void 0 : _res$productListByIds2.list[0]) !== null && _res$productListByIds !== void 0 ? _res$productListByIds : {},
      groupQueneList: (_groupQueneList$group = groupQueneList === null || groupQueneList === void 0 ? void 0 : groupQueneList.groupQueueList) !== null && _groupQueneList$group !== void 0 ? _groupQueneList$group : []
    }));
  },
  updateSelectNum: (value, option) => {
    option.setData(Object(_tools_utils__WEBPACK_IMPORTED_MODULE_7__["fpMergePre"])({
      selectNum: value === option.data.selectNum ? 0 : value
    }));
  }
});
const PriceRed = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.div.withConfig({
  displayName: "id__PriceRed",
  componentId: "sc-1c5vpsf-0"
})(["background:", ";color:white;display:grid;grid-template-columns:1fr 120px;grid-template-rows:repeat(2,30px);align-items:center;> main{grid-area:1/1/3/2;padding-left:20px;> span{margin-left:16px;}}"], _style_common__WEBPACK_IMPORTED_MODULE_12__["mpStyle"].red);
const Name = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.div.withConfig({
  displayName: "id__Name",
  componentId: "sc-1c5vpsf-1"
})(["padding:16px 20px;display:flex;align-items:flex-end;> main{font-size:22px;margin-right:8px;flex-shrink:0;}> section{> span{padding:0 4px;background:", ";border-radius:4px;position:relative;bottom:-4px;margin-left:8px;display:inline-flex;align-items:center;}}"], _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_13__["grey"]['700']);

const YellowStar = () => __jsx(_material_ui_icons_StarRounded__WEBPACK_IMPORTED_MODULE_1___default.a, {
  fontSize: 'small',
  style: {
    color: '#FDD334'
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 83,
    columnNumber: 26
  }
});

const Title = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.header.withConfig({
  displayName: "id__Title",
  componentId: "sc-1c5vpsf-2"
})(["font-size:20px;"]);
const GroupQuene = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.div.withConfig({
  displayName: "id__GroupQuene",
  componentId: "sc-1c5vpsf-3"
})(["padding:16px;"]);
const SmartMatch = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.div.withConfig({
  displayName: "id__SmartMatch",
  componentId: "sc-1c5vpsf-4"
})(["padding:16px;> section{margin-top:8px;display:flex;align-items:center;}> main{}"]);
const Price = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.div.withConfig({
  displayName: "id__Price",
  componentId: "sc-1c5vpsf-5"
})(["margin-top:8px;display:flex;justify-content:space-between;align-items:center;> main{font-weight:bold;}> main,section{> *{text-align:center;}}"]);
const Submit = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.div.withConfig({
  displayName: "id__Submit",
  componentId: "sc-1c5vpsf-6"
})([""]);
const GroupProduct = () => {
  var _ref, _router$query, _product$img, _product$priceOut, _product$priceOut2;

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const id = (_ref = (_router$query = router.query) === null || _router$query === void 0 ? void 0 : _router$query.id) !== null && _ref !== void 0 ? _ref : '';
  const {
    actions: actionsGroupProduct,
    state: stateGroupProduct
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_6__["useStoreModel"])(groupProductModel);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    actionsGroupProduct.getData(id);
  }, [id]);
  const product = stateGroupProduct.product;
  console.log(stateGroupProduct.groupQueneList);
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 10
    }
  }, __jsx(_components_HeaderTitle_HeaderTitle__WEBPACK_IMPORTED_MODULE_9__["HeaderTitle"], {
    title: '产品详情',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 5
    }
  }), __jsx(_components_Swipe_Swipe__WEBPACK_IMPORTED_MODULE_8__["default"], {
    height: '240px',
    dataList: product === null || product === void 0 ? void 0 : (_product$img = product.img) === null || _product$img === void 0 ? void 0 : _product$img.map(v => _objectSpread(_objectSpread({}, v), {}, {
      imgUrl: v === null || v === void 0 ? void 0 : v.url
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 5
    }
  }), __jsx(PriceRed, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 5
    }
  }, __jsx("main", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_11__["ls"])('基准价格'), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 9
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_7__["dealMoney"])(product.priceOut), "/", product.packingUnitString)), __jsx("aside", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_11__["ls"])('已成团'), 23, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_11__["ls"])('单')), __jsx("aside", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_11__["ls"])('拼团中'), 2, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_11__["ls"])('单'))), __jsx(Name, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 5
    }
  }, __jsx("main", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 7
    }
  }, product.name), __jsx("section", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 7
    }
  }, product.groupRemark, "/", product.groupAmount, product.groupAmountUnitString, __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 90
    }
  }), Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_11__["ls"])('分团精度'), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 7
    }
  }, [...Array(product.groupPrecision)].map((v, i) => i).map(value => __jsx(YellowStar, {
    key: value,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 79
    }
  }))))), __jsx(GroupQuene, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 5
    }
  }, __jsx(Title, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_11__["ls"])('拼团中'))), __jsx(SmartMatch, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 5
    }
  }, __jsx("header", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 7
    }
  }, __jsx(Title, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 9
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_11__["ls"])('智能匹配'))), __jsx("section", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_11__["ls"])('请点击'), __jsx(_material_ui_icons_StarBorderRounded__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 9
    }
  }), Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_11__["ls"])('确定您需要的份数')), __jsx("main", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 7
    }
  }, [...Array(product.groupPrecision)].map((v, i) => i).map(value => value + 1 > stateGroupProduct.selectNum ? __jsx(_material_ui_icons_StarBorderRounded__WEBPACK_IMPORTED_MODULE_2___default.a, {
    key: `clickStar${value}`,
    fontSize: 'large',
    onClick: () => actionsGroupProduct.updateSelectNum(value + 1),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 117
    }
  }) : __jsx(_material_ui_icons_StarRounded__WEBPACK_IMPORTED_MODULE_1___default.a, {
    key: `clickStar${value}`,
    style: {
      color: '#FDD334'
    },
    fontSize: 'large',
    onClick: () => actionsGroupProduct.updateSelectNum(value + 1),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 14
    }
  }))), __jsx(Price, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 7
    }
  }, __jsx("main", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 9
    }
  }, __jsx("header", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 11
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_7__["dealMoney"])(((_product$priceOut = product.priceOut) !== null && _product$priceOut !== void 0 ? _product$priceOut : 0) * stateGroupProduct.selectNum)), __jsx("footer", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_11__["ls"])('折后价格'))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 9
    }
  }, "="), __jsx("section", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 9
    }
  }, __jsx("header", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 11
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_7__["dealMoney"])(((_product$priceOut2 = product.priceOut) !== null && _product$priceOut2 !== void 0 ? _product$priceOut2 : 0) * stateGroupProduct.selectNum)), __jsx("footer", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_11__["ls"])('基准价格'))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 9
    }
  }, "x"), __jsx("section", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 9
    }
  }, __jsx("header", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 11
    }
  }, "1"), __jsx("footer", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_11__["ls"])('份数折扣'))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 9
    }
  }, "x"), __jsx("section", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 9
    }
  }, __jsx("header", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 11
    }
  }, "1"), __jsx("footer", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_11__["ls"])('成团折上折'))))), __jsx(Submit, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 5
    }
  }, "\u53BB\u7ED3\u7B97"));
};

/***/ }),

/***/ 7:
/*!*******************************************!*\
  !*** multi ./pages/groupProduct/[id].tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\code\zw\zw_client_web\pages\groupProduct\[id].tsx */"./pages/groupProduct/[id].tsx");


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

/***/ "@material-ui/icons/ArrowBackIos":
/*!**************************************************!*\
  !*** external "@material-ui/icons/ArrowBackIos" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowBackIos");

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

/***/ "react-responsive-carousel":
/*!********************************************!*\
  !*** external "react-responsive-carousel" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-responsive-carousel");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvZ3JvdXBQcm9kdWN0Ly50c3giLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvTW9kZWxBY3Rpb24vbW9kZWxVdGlsLnRzIiwid2VicGFjazovLy8uL3V0aWxzL01vZGVsQWN0aW9uL3VzZVN0b3JlLnRzIiwid2VicGFjazovLy8uL3V0aWxzL2NsaWVudC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi91dGlscy9jb21wb25lbnRzL0hlYWRlclRpdGxlL0hlYWRlclRpdGxlLnRzeCIsIndlYnBhY2s6Ly8vLi91dGlscy9jb21wb25lbnRzL01lc3NhZ2UvTWVzc2FnZS50c3giLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29tcG9uZW50cy9Td2lwZS9Td2lwZS50c3giLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZ3JhcGhxbFR5cGVzL2RvYy9mcmFnbWVudC50cyIsIndlYnBhY2s6Ly8vLi91dGlscy9ncmFwaHFsVHlwZXMvZG9jL2luZGV4LnRzIiwid2VicGFjazovLy8uL3V0aWxzL3NzX2NvbW1vbi9lbnVtLnRzIiwid2VicGFjazovLy8uL3V0aWxzL3N0eWxlL2NvbW1vbi50cyIsIndlYnBhY2s6Ly8vLi91dGlscy90b29scy9kZWFsS2V5LnRzIiwid2VicGFjazovLy8uL3V0aWxzL3Rvb2xzL2dsb2JhbC50cyIsIndlYnBhY2s6Ly8vLi91dGlscy90b29scy9pbWcudHMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvdG9vbHMvdG9rZW4udHMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvdG9vbHMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvdmlldy9ncm91cFByb2R1Y3QvLnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9yc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9BcnJvd0JhY2tJb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU3RhckJvcmRlclJvdW5kZWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU3RhclJvdW5kZWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tYm9vc3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjcm9zcy1mZXRjaC9wb2x5ZmlsbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImRhdGUtZm5zL2Zvcm1hdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaC9zZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2NvbmZpZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJHcm91cFByb2R1Y3QiLCJiYXNlQWN0aW9uT3B0aW9uIiwiZGF0YSIsIm11dGF0ZSIsIm5vdGljZSIsInF1ZXJ5Iiwic2V0RGF0YSIsInN0b3JlIiwibW9kZWxOYW1lTGlzdCIsIm1vZGVsRmFjdG9yeSIsIm5hbWUiLCJzdGF0ZSIsImFjdGlvbnMiLCJpbmNsdWRlcyIsIkVycm9yIiwicHVzaCIsImZldGNoTG9hZCIsImZldGNoRXJyb3IiLCJtZXJnZU1vZGVsIiwibW9kZWwiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsInZhbHVlIiwibWVyZ2VOYW1lIiwibWVyZ2VUd29Nb2RlbCIsIm1vZGVsVCIsIm1lcmdlVGhyZWVNb2RlbCIsIm1vZGVsQSIsIm1vZGVsQiIsIm1vZGVsQyIsIm1lcmdlTGlzdE1vZGVsIiwibW9kZWxMaXN0Iiwic2xpY2UiLCJyZWR1Y2UiLCJhY2MiLCJpbml0TGlzdCIsImluaXRNb2RlbCIsImluaXRTdGF0ZSIsIm9yaWdpblN0b3JlIiwiaXNGdW5jdGlvbiIsImZ1bmN0aW9uVG9DaGVjayIsInRvU3RyaW5nIiwiY2FsbCIsImRlYWxOYW1lU3BhY2UiLCJrZXkiLCJuYW1lU3BhY2UiLCJ1c2VTdG9yZU1vZGVsIiwiX2tleSIsIkFycmF5IiwiaXNBcnJheSIsInNldFN0YXRlIiwidXNlU3RhdGUiLCJjcmVhdGUiLCJ1c2VDYWxsYmFjayIsIm9sZFN0YXRlIiwibmV3RGF0YSIsInNldExvYWQiLCJmbGFnIiwicHJldlN0YXRlIiwibG9jIiwic291cmNlIiwiYm9keSIsInNldEVycm9yIiwiZXJyIiwicGFyYW1zIiwib3B0aW9uIiwicmVzIiwiZ3JhcGhRTFF1ZXJ5IiwiY2F0Y2giLCJlIiwiZmluYWxseSIsIm11dGF0aW9uIiwiZ3JhcGhRTE11dGF0ZSIsImxlbmd0aCIsImNvbnN0cnVjdG9yIiwidiIsInVzZUVmZmVjdCIsImZpbHRlciIsImdldExvYWQiLCJjb25maWciLCJnZXRDb25maWciLCJjbGllbnRfYXBpX3VyaSIsInB1YmxpY1J1bnRpbWVDb25maWciLCJvbWl0VHlwZW5hbWUiLCJ1bmRlZmluZWQiLCJnZXRDbGllbnQiLCJyZXF1ZXN0Iiwib3BlcmF0aW9uIiwidmFyaWFibGVzIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5Iiwic2V0Q29udGV4dCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiZ2V0VG9rZW4iLCJyZWZyZXNoVG9rZW4iLCJkb2MiLCJ0aGVuIiwidG9rZW4iLCJzZXRUb2tlbiIsInJlZnJlc2h0b2tlbiIsInNob3dNZXNzYWdlIiwibWVzc2FnZSIsIlJvdXRlciIsInJlbG9hZCIsInNzTG9nIiwib25FcnJvciIsInJlc3BvbnNlIiwiZ3JhcGhRTEVycm9ycyIsIm5ldHdvcmtFcnJvciIsImxvY2F0aW9ucyIsInBhdGgiLCJleHRlbnNpb25zIiwiY29kZSIsInNwbGl0IiwibXNnX3R5cGUiLCJlcnJNc2ciLCJib2R5VGV4dCIsInJlc3VsdCIsImVycm9yIiwic3RhdHVzQ29kZSIsIkFwb2xsb0NsaWVudCIsInVyaSIsImRlZmF1bHRDbGllbnQiLCJkZWFsUGFyYW1zIiwiY2xpZW50IiwiX2RlYWxQYXJhbXNJbiIsImRlYWxQYXJhbXNJbiIsImZldGNoUG9saWN5Iiwic2VydmVyQ2xpZW50Iiwic2VydmVyUXVlcnkiLCJzZXJ2ZXJNdXRhdGUiLCJDb250YWluIiwic3R5bGVkIiwiQm94IiwiSGVhZGVyVGl0bGUiLCJ0aXRsZSIsImJhY2tDYWxsIiwicm91dGVyIiwidXNlUm91dGVyIiwiYmFjayIsImxzIiwidHlwZUhlbHAiLCJkZWZhdWx0IiwiZ3JleSIsInN1Y2Nlc3MiLCJncmVlbiIsIndhcm5pbmciLCJhbWJlciIsImluZm8iLCJibHVlIiwicmVkIiwiZ2V0VHlwZSIsInR5cGUiLCJDdXNTbmFja2JhciIsIlNuYWNrYmFyIiwiY29tbW9uIiwid2hpdGUiLCJtZXNzYWdlTW9kZWwiLCJvcGVuIiwiYXV0b0hpZGVEdXJhdGlvbiIsImZwTWVyZ2VQcmUiLCJvbkNsb3NlIiwiTWVzc2FnZSIsIm1TdGF0ZSIsIkN1c0Nhcm91c2VsIiwiZGF0YUxpc3QiLCJvbkNsaWNrSXRlbSIsImhlaWdodCIsIm1hcCIsIml0ZW0iLCJpZCIsImRlYWxJbWdVcmwiLCJpbWdVcmwiLCJmcmFnbWVudCIsIkNhdGVnb3J5RmllbGRzIiwiZ3FsIiwiVXNlckZpZWxkcyIsIlVzZXJJbmZvRmllbGRzIiwiT3JkZXJJbmZvRmllbGRzIiwiUk9yZGVyUHJvZHVjdEZpZWxkcyIsIlByb2R1Y3RGaWVsZHMiLCJJbWdGaWVsZHMiLCJVc2VyQWRkcmVzc0ZpZWxkcyIsIlVzZXJQYXlDYXJkRmllbGRzIiwiU2hvcENhcnRGaWVsZHMiLCJEYXRhQ29uZmlnRmllbGRzIiwiRGljdEZpZWxkcyIsIkdyb3VwUXVldWVGaWVsZHMiLCJnZXRVc2VyTGlzdERvYyIsImdldERhdGFDb25maWciLCJob21lQ2Fyb3VzZWxJbWdzIiwiY2F0ZWdvcnlMaXN0IiwicmVnaXN0ZXJVc2VyIiwibG9naW4iLCJvbmVVc2VyIiwib3JkZXJMaXN0Iiwib3JkZXJEZXRhaWwiLCJEaWN0VHlwZUVudW0iLCJTZWxmQWRkcmVzcyIsInVwZGF0ZVBhc3N3b3JkIiwicGF5Q2FyZExpc3RPbmVVc2VyIiwidXNlclBheUNhcmQiLCJzYXZlVXNlclBheUNhcmQiLCJzZXRVc2VyUGF5Q2FyZERlZmF1bHQiLCJwaWNrdXBBZGRyZXNzIiwidXBkYXRlVXNlckluZm8iLCJ1c2VyQWRkcmVzc0xpc3RPbmVVc2VyIiwidXNlckFkZHJlc3MiLCJzYXZlVXNlckFkZHJlc3MiLCJzZXRVc2VyQWRkcmVzc0RlZmF1bHQiLCJwcm9kdWN0c0luQ2F0ZWdvcnkiLCJjYXRlZ29yeUxldmVsIiwib25lQ2F0ZWdvcnkiLCJwcm9kdWN0TGlzdCIsInVwZGF0ZU51bVNob3BDYXJ0IiwidXNlclNob3BDYXJ0TGlzdCIsInVwZGF0ZVNob3BDYXJ0Iiwib3JkZXJDb25maXJtSW5mbyIsIkZyZWlnaHQiLCJzYXZlT3JkZXIiLCJkaWN0TGlzdCIsImxpbWl0VGltZURhdGEiLCJQcm9tb3Rpb25GbGFzaFNhbGUiLCJwcm9kdWN0TGlzdEJ5SWRzIiwiZ3JvdXBRdWV1ZUxpc3QiLCJ1cGRhdGVPcmRlciIsIlByb21vQ29kZVR5cGVFbnVtIiwiRGlzY291bnRUeXBlRW51bSIsIlNTIiwiRGlzY291bnRDb25kaXRpb25FbnVtIiwiUHJvZHVjdFN1cHBsZW1lbnQiLCJQcm9kdWN0U3VwcGxlbWVudFN0cmluZyIsIk9yZGVyU3RhdGUiLCJfcyIsIm9yZGVyU3RhdGVUb1N0cmluZyIsInMiLCJSZWxhdGVkT2JqVHlwZUVudW0iLCJBcHBGb290QmFyIiwiQXBwTW9kdWxlVHlwZUVudW0iLCJDYXRlZ29yeVJvb3ROYW1lIiwib3JkZXJTdGF0ZUtleXMiLCJ2YWx1ZXMiLCJQcm92aW5jZURhdGEiLCJnZXRQaWNrVXBUeXBlTmFtZSIsIlNlbGYiLCJEZWxpdmVyeSIsIlBpY2tVcFR5cGVFbnVtIiwibXBTdHlsZSIsInNoYWRvdyIsImlzRGV2IiwiY29uc29sZSIsImxvZyIsImltZ0RvbWFpbiIsInNyYyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJnZXRJdGVtIiwiZ2V0T2JqZWN0VVJMIiwiZmlsZSIsIndpbmRvdyIsImNyZWF0ZU9iamVjdFVSTCIsIlVSTCIsIndlYmtpdFVSTCIsInBhcnNlRmxvYXRGb3JJbnB1dCIsInBhcnNlRmxvYXQiLCJmcFNldCIsIm9yaWdpbiIsImNsb25lRGVlcCIsIm9sZERhdGEiLCJnZXQiLCJzZXQiLCJkZWxheSIsInRpbWUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJmcFNldFByZSIsImN1c3RvbWl6ZXIiLCJvYmpWYWx1ZSIsInNyY1ZhbHVlIiwiZnBNZXJnZSIsIm5ld1ZhbHVlIiwibWVyZ2VXaXRoIiwicHJlIiwiZnBSZW1vdmUiLCJhcnIiLCJpbmRleCIsImRlYWxOdW1iZXJaZXJvIiwibnVtIiwiZmlsbCIsImpvaW4iLCJmb3JtYXREYXRlIiwiZGF0ZSIsImZvcm1hdFN0cmluZyIsImlzU3RyaW5nIiwiZm9ybWF0IiwiRGF0ZSIsInVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnMiLCJ1c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnMiLCJpc05hTiIsImRlYWxOb25Cb29sZWFuUHJvcHMiLCJmb3JtYXRNb25leSIsImFtb3VudCIsImRlY2ltYWxDb3VudCIsImRlY2ltYWwiLCJ0aG91c2FuZHMiLCJNYXRoIiwiYWJzIiwibmVnYXRpdmVTaWduIiwiaSIsInBhcnNlSW50IiwiTnVtYmVyIiwidG9GaXhlZCIsImoiLCJzdWJzdHIiLCJyZXBsYWNlIiwiZGVhbE1vbmV5IiwiZGVhbE1heWJlTnVtYmVyIiwiZGVhbFVybFF1ZXJ5IiwicXVlcnlPYmoiLCJncm91cFByb2R1Y3RNb2RlbCIsInByb2R1Y3QiLCJncm91cFF1ZW5lTGlzdCIsInNlbGVjdE51bSIsImdldERhdGEiLCJpZHMiLCJncm91cFF1ZXVlSXRlbUlucHV0IiwibGlzdCIsInVwZGF0ZVNlbGVjdE51bSIsIlByaWNlUmVkIiwiZGl2IiwiTmFtZSIsIlllbGxvd1N0YXIiLCJjb2xvciIsIlRpdGxlIiwiaGVhZGVyIiwiR3JvdXBRdWVuZSIsIlNtYXJ0TWF0Y2giLCJQcmljZSIsIlN1Ym1pdCIsImFjdGlvbnNHcm91cFByb2R1Y3QiLCJzdGF0ZUdyb3VwUHJvZHVjdCIsImltZyIsInVybCIsInByaWNlT3V0IiwicGFja2luZ1VuaXRTdHJpbmciLCJncm91cFJlbWFyayIsImdyb3VwQW1vdW50IiwiZ3JvdXBBbW91bnRVbml0U3RyaW5nIiwiZ3JvdXBQcmVjaXNpb24iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBO0FBRWVBLHdJQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQ08s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Q0FyQkYsQ0E1QkssRUF1RUwsTUFBQyxNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBdkVLLENBQVA7QUEyRUQsQ0F0Rk0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6SFAsOEM7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsaUU7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsaUQ7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGdyb3VwUHJvZHVjdFxcW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA3KTtcbiIsImltcG9ydCB7R3JvdXBQcm9kdWN0fSBmcm9tICcuLi8uLi91dGlscy92aWV3L2dyb3VwUHJvZHVjdC9baWRdJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR3JvdXBQcm9kdWN0XHJcbiIsIlxyXG50eXBlIE1vZGVsRmFjdG9yeTxOID0gJyc+ID0gPFQsIEUgZXh0ZW5kcyBNb2RlbEFjdGlvbk9iakhlbHA8YW55LCBUICYgRmV0Y2hPYmo+PihuYW1lOiBzdHJpbmcsIHN0YXRlOiBULCBhY3Rpb25zOiBFKSA9PiBNb2RlbERhdGE8VCAmIEZldGNoT2JqLCBFPlxyXG5cclxuZXhwb3J0IGNvbnN0IGJhc2VBY3Rpb25PcHRpb246IEJhc2VNb2RlbEFjdGlvbk9wdGlvbiA9IHtcclxuICBkYXRhOiBudWxsLFxyXG4gIG11dGF0ZTogKCkgPT4ge30sXHJcbiAgbm90aWNlOiAoKSA9PiB7fSxcclxuICBxdWVyeTogKCkgPT4ge30sXHJcbiAgc2V0RGF0YTogKCkgPT4ge30sXHJcbiAgc3RvcmU6IHt9XHJcbn1cclxuXHJcbmNvbnN0IG1vZGVsTmFtZUxpc3Q6c3RyaW5nW10gPSBbXVxyXG5leHBvcnQgY29uc3QgbW9kZWxGYWN0b3J5OiBNb2RlbEZhY3RvcnkgPSAobmFtZSwgc3RhdGUsIGFjdGlvbnMpID0+IHtcclxuICBpZiAobW9kZWxOYW1lTGlzdC5pbmNsdWRlcyhuYW1lKSkge1xyXG4gICAgdGhyb3cgRXJyb3IoYG1vZGVsIE5hbWUgZHVwbGljYXRlOiAke25hbWV9YClcclxuICB9XHJcbiAgbW9kZWxOYW1lTGlzdC5wdXNoKG5hbWUpXHJcbiAgcmV0dXJuIHtcclxuICAgIG5hbWUsXHJcbiAgICBzdGF0ZToge1xyXG4gICAgICAuLi5zdGF0ZSxcclxuICAgICAgZmV0Y2hMb2FkOiB7fSxcclxuICAgICAgZmV0Y2hFcnJvcjoge30sXHJcbiAgICB9LFxyXG4gICAgYWN0aW9ucyxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZU1vZGVsPEEgZXh0ZW5kcyBGZXRjaE9iaiwgQiBleHRlbmRzIE1vZGVsQWN0aW9uT2JqSGVscDxhbnksIEE+LCBDLCBEIGV4dGVuZHMgTW9kZWxBY3Rpb25PYmpIZWxwPGFueSwgQSAmIEM+Pihtb2RlbDoge1xyXG4gIHN0YXRlOiBBXHJcbiAgYWN0aW9uczogQlxyXG4gIG5hbWU6IHN0cmluZ1xyXG59LCBuYW1lOiBzdHJpbmcsIHN0YXRlOiBDLCBhY3Rpb25zOiBEKToge1xyXG4gIHN0YXRlOiBBICYgQ1xyXG4gIGFjdGlvbnM6IEIgJiBEICYge1xyXG4gICAgW2tleSBpbiBrZXlvZiBCXTogTW9kZWxBY3Rpb248YW55LCBBPlxyXG4gIH0gJiB7XHJcbiAgICBba2V5IGluIGtleW9mIERdOiBNb2RlbEFjdGlvbjxhbnksIEEgJiBDPlxyXG4gIH1cclxuICBuYW1lOiBzdHJpbmdcclxufSB7XHJcbiAgT2JqZWN0LmtleXMobW9kZWwuc3RhdGUpLmZvckVhY2godmFsdWUgPT4ge1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgaWYgKHN0YXRlPy5bdmFsdWVdICYmICFbJ2ZldGNoRXJyb3InLCAnZmV0Y2hMb2FkJ10uaW5jbHVkZXModmFsdWUpKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgbWVyZ2VNb2RlbDogc3RhdGUgZHVwbGljYXRlOjoga2V5ICR7dmFsdWV9YClcclxuICAgIH1cclxuICB9KVxyXG4gIE9iamVjdC5rZXlzKG1vZGVsLmFjdGlvbnMpLmZvckVhY2godmFsdWUgPT4ge1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgaWYgKGFjdGlvbnM/Llt2YWx1ZV0pIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBtZXJnZU1vZGVsOiBhY3Rpb24gZHVwbGljYXRlOjoga2V5ICR7dmFsdWV9YClcclxuICAgIH1cclxuICB9KVxyXG4gIGNvbnN0IG1lcmdlTmFtZSA9IGAke25hbWV9X3dpdGhfJHttb2RlbC5uYW1lfWBcclxuICBpZiAobW9kZWxOYW1lTGlzdC5pbmNsdWRlcyhtZXJnZU5hbWUpKSB7XHJcbiAgICB0aHJvdyBFcnJvcihgbW9kZWwgTmFtZSBkdXBsaWNhdGU6ICR7bWVyZ2VOYW1lfWApXHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgbmFtZTogbWVyZ2VOYW1lLFxyXG4gICAgc3RhdGU6IHtcclxuICAgICAgLi4ubW9kZWwuc3RhdGUsXHJcbiAgICAgIC4uLnN0YXRlLFxyXG4gICAgfSxcclxuICAgIGFjdGlvbnM6IHtcclxuICAgICAgLi4ubW9kZWwuYWN0aW9ucyxcclxuICAgICAgLi4uYWN0aW9ucyxcclxuICAgIH0sXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VUd29Nb2RlbDxBLCBCIGV4dGVuZHMgTW9kZWxBY3Rpb25PYmpIZWxwPGFueSwgQT4sIEMsIEQgZXh0ZW5kcyBNb2RlbEFjdGlvbk9iakhlbHA8YW55LCBDPj4obW9kZWw6IHtcclxuICBzdGF0ZTogQVxyXG4gIGFjdGlvbnM6IEJcclxuICBuYW1lOiBzdHJpbmdcclxufSwgbW9kZWxUOiB7XHJcbiAgc3RhdGU6IENcclxuICBhY3Rpb25zOiBEXHJcbiAgbmFtZTogc3RyaW5nXHJcbn0pOiB7XHJcbiAgbmFtZTogc3RyaW5nXHJcbiAgc3RhdGU6IEEgJiBDXHJcbiAgYWN0aW9uczogQiAmIEQgJiB7XHJcbiAgICBba2V5IGluIGtleW9mIEJdOiBNb2RlbEFjdGlvblxyXG4gIH0gJiB7XHJcbiAgICBba2V5IGluIGtleW9mIERdOiBNb2RlbEFjdGlvblxyXG4gIH1cclxufSB7XHJcbiAgT2JqZWN0LmtleXMobW9kZWwuc3RhdGUpLmZvckVhY2godmFsdWUgPT4ge1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgaWYgKG1vZGVsVC5zdGF0ZT8uW3ZhbHVlXSAmJiAhWydmZXRjaEVycm9yJywgJ2ZldGNoTG9hZCddLmluY2x1ZGVzKHZhbHVlKSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYG1lcmdlVHdvTW9kZWw6IHN0YXRlIGR1cGxpY2F0ZTo6IGtleSAke3ZhbHVlfWApXHJcbiAgICB9XHJcbiAgfSlcclxuICBPYmplY3Qua2V5cyhtb2RlbC5hY3Rpb25zKS5mb3JFYWNoKHZhbHVlID0+IHtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIGlmIChtb2RlbFQ/LmFjdGlvbnM/Llt2YWx1ZV0pIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBtZXJnZVR3b01vZGVsOiBhY3Rpb24gZHVwbGljYXRlOjoga2V5ICR7dmFsdWV9YClcclxuICAgIH1cclxuICB9KVxyXG4gIGNvbnN0IG1lcmdlTmFtZSA9IGAke21vZGVsLm5hbWV9X2FuZF8ke21vZGVsVC5uYW1lfWBcclxuICBpZiAobW9kZWxOYW1lTGlzdC5pbmNsdWRlcyhtZXJnZU5hbWUpKSB7XHJcbiAgICB0aHJvdyBFcnJvcihgbW9kZWwgTmFtZSBkdXBsaWNhdGU6ICR7bWVyZ2VOYW1lfWApXHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgbmFtZTogbWVyZ2VOYW1lLFxyXG4gICAgc3RhdGU6IHtcclxuICAgICAgLi4ubW9kZWwuc3RhdGUsXHJcbiAgICAgIC4uLm1vZGVsVC5zdGF0ZSxcclxuICAgIH0sXHJcbiAgICBhY3Rpb25zOiB7XHJcbiAgICAgIC4uLm1vZGVsLmFjdGlvbnMsXHJcbiAgICAgIC4uLm1vZGVsVC5hY3Rpb25zLFxyXG4gICAgfSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBtZXJnZVRocmVlTW9kZWwgPSA8QSBleHRlbmRzIEZldGNoT2JqLCBUIGV4dGVuZHMgTW9kZWxBY3Rpb25PYmpIZWxwPGFueSwgQT4sIEIgZXh0ZW5kcyBGZXRjaE9iaiwgTyBleHRlbmRzIE1vZGVsQWN0aW9uT2JqSGVscDxhbnksIEI+LCBDIGV4dGVuZHMgRmV0Y2hPYmosIFAgZXh0ZW5kcyBNb2RlbEFjdGlvbk9iakhlbHA8YW55LCBDPj4obW9kZWxBOiBNb2RlbERhdGE8QSwgVD4sIG1vZGVsQjogTW9kZWxEYXRhPEIsIE8+LCBtb2RlbEM6IE1vZGVsRGF0YTxDLCBQPik6IHtcclxuICBuYW1lOiBzdHJpbmdcclxuICBzdGF0ZTogQSAmIEIgJiBDXHJcbiAgYWN0aW9uczogVCAmIE8gJiBQICYge1xyXG4gICAgW2tleSBpbiBrZXlvZiBUXTogTW9kZWxBY3Rpb25cclxuICB9ICYge1xyXG4gICAgW2tleSBpbiBrZXlvZiBPXTogTW9kZWxBY3Rpb25cclxuICB9ICYge1xyXG4gICAgW2tleSBpbiBrZXlvZiBQXTogTW9kZWxBY3Rpb25cclxuICB9XHJcbn0gPT4ge1xyXG4gIHJldHVybiBtZXJnZVR3b01vZGVsKG1lcmdlVHdvTW9kZWwobW9kZWxBLCBtb2RlbEIpLCBtb2RlbEMpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBtZXJnZUxpc3RNb2RlbCA9IChtb2RlbExpc3Q6IE1vZGVsRGF0YTxhbnksIGFueT5bXSkgPT4ge1xyXG4gIHJldHVybiBtb2RlbExpc3Quc2xpY2UoMSkucmVkdWNlKChhY2MsIG1vZGVsKSA9PiBtZXJnZVR3b01vZGVsKGFjYywgbW9kZWwpLCBtb2RlbExpc3RbMF0pXHJcbn1cclxuXHJcbmNvbnN0IGluaXRMaXN0OiBzdHJpbmdbXSA9IFtdXHJcbmV4cG9ydCBjb25zdCBpbml0TW9kZWwgPSA8VCBleHRlbmRzIEZldGNoT2JqLCBFIGV4dGVuZHMgTW9kZWxBY3Rpb25PYmpIZWxwPGFueSwgVD4+KG1vZGVsOiBNb2RlbERhdGE8VCwgRT4sIGluaXRTdGF0ZTogUGFydGlhbDxUPikgPT4ge1xyXG4gIGlmIChpbml0TGlzdC5pbmNsdWRlcyhtb2RlbC5uYW1lKSkgcmV0dXJuXHJcbiAgaW5pdExpc3QucHVzaChtb2RlbC5uYW1lKVxyXG4gIG1vZGVsLnN0YXRlID0ge1xyXG4gICAgLi4ubW9kZWwuc3RhdGUsXHJcbiAgICAuLi5pbml0U3RhdGUsXHJcbiAgfVxyXG59XHJcblxyXG4vLyBjb25zdCBtb2RlbCA9IG1vZGVsRmFjdG9yeSh7fSwge1xyXG4vLyAgIHNzOiB7XHJcbi8vICAgICBlZWU6ICh2YWx1ZTogc3RyaW5nLCBvcHRpb24pID0+IHtcclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi8vIH0pXHJcbi8vXHJcbi8vIHVzZVN0b3JlTW9kZWwoTW9kdWxlRW51bS5UZXN0LCBtb2RlbCkuYWN0aW9ucy5zcy5lZWUoJycpXHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gbWVyZ2VJbnRvTW9kZWwob3JpZ2luTW9kZWwsIG5hbWUsIGlubmVyTW9kZWwpIHtcclxuLy9cclxuLy8gfVxyXG5cclxuLy8gY29uc3QgX21vZGVsID0gbWVyZ2VUd29Nb2RlbChtb2RlbEZhY3Rvcnkoe1xyXG4vLyAgIHQxOiAnJ1xyXG4vLyB9LCB7XHJcbi8vIH0pLCBtb2RlbEZhY3Rvcnkoe1xyXG4vLyAgIHQzOiAnJ1xyXG4vLyB9LCB7XHJcbi8vIH0pKVxyXG4vL1xyXG4vLyBtZXJnZU1vZGVsKF9tb2RlbCwge1xyXG4vLyAgIHQyOiAnJ1xyXG4vLyB9LCB7XHJcbi8vIH0pXHJcbiIsImltcG9ydCB7dXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7Z3JhcGhRTE11dGF0ZSwgZ3JhcGhRTFF1ZXJ5fSBmcm9tICcuLi9jbGllbnQnXHJcbmltcG9ydCB7YmFzZUFjdGlvbk9wdGlvbn0gZnJvbSAnLi9tb2RlbFV0aWwnXHJcblxyXG5leHBvcnQgY29uc3Qgb3JpZ2luU3RvcmU6IE9yaWdpblN0b3JlID0ge31cclxuXHJcbmNvbnN0IGlzRnVuY3Rpb24gPSAoZnVuY3Rpb25Ub0NoZWNrOiBhbnkpID0+IHtcclxuICByZXR1cm4gZnVuY3Rpb25Ub0NoZWNrICYmIHt9LnRvU3RyaW5nLmNhbGwoZnVuY3Rpb25Ub0NoZWNrKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJ1xyXG59XHJcblxyXG50eXBlIFN0b3JlU3RhdGVSZXN1bHQ8VCwgRSBleHRlbmRzIE1vZGVsQWN0aW9uT2JqSGVscDxhbnksIFQ+PiA9IE1vZGVsUmVzdWx0PFQsIEU+ICYge1xyXG4gIHN0b3JlOiBPcmlnaW5TdG9yZVxyXG4gIGdldExvYWQ6IChxdWVyeTogYW55KSA9PiBudW1iZXJcclxufVxyXG5cclxudHlwZSBVc2VNb2RlbFN0YXRlID0gPFQgZXh0ZW5kcyBGZXRjaE9iaiwgRSBleHRlbmRzIE1vZGVsQWN0aW9uT2JqSGVscDxhbnksIFQ+Pihtb2RlbDogTW9kZWxEYXRhPFQsIEU+LCBrZXk/OiBzdHJpbmcgfCBbc3RyaW5nLCBzdHJpbmddKSA9PiBTdG9yZVN0YXRlUmVzdWx0PFQsIEU+XHJcblxyXG5leHBvcnQgY29uc3QgZGVhbE5hbWVTcGFjZSA9IChrZXk6IHN0cmluZywgbmFtZVNwYWNlOiBzdHJpbmcpID0+IHtcclxuICBpZiAobmFtZVNwYWNlKSB7XHJcbiAgICByZXR1cm4gYCR7a2V5fV8ke25hbWVTcGFjZX1gXHJcbiAgfVxyXG4gIHJldHVybiBgJHtrZXl9YFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlU3RvcmVNb2RlbDogVXNlTW9kZWxTdGF0ZSA9IChtb2RlbCwga2V5Pzogc3RyaW5nIHwgW3N0cmluZywgc3RyaW5nXSkgPT4ge1xyXG4gIGNvbnN0IF9rZXkgPSBtb2RlbC5uYW1lID8/ICgha2V5ID8gJycgOiBBcnJheS5pc0FycmF5KGtleSkgPyBkZWFsTmFtZVNwYWNlKGtleVswXSwga2V5WzFdKSA6IGtleSlcclxuICBjb25zdCB7YWN0aW9ucywgc3RhdGV9ID0gbW9kZWxcclxuICBjb25zdCBbLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShPYmplY3QuY3JlYXRlKG51bGwpKVxyXG4gIGlmICghX2tleSkge1xyXG4gICAgdGhyb3cgRXJyb3IoJ25vIGtleScpXHJcbiAgfVxyXG4gIGlmICghb3JpZ2luU3RvcmVbX2tleV0pIHtcclxuICAgIG9yaWdpblN0b3JlW19rZXldID0ge1xyXG4gICAgICBrZXlzOiBfa2V5LFxyXG4gICAgICBzdGF0ZSxcclxuICAgICAgYWN0aW9uczoge30sXHJcbiAgICAgIHNldERhdGE6IFtdXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IG5vdGljZSA9IHVzZUNhbGxiYWNrKChkYXRhOiBhbnkpID0+IHtcclxuICAgIG9yaWdpblN0b3JlW19rZXldLnNldERhdGEuZm9yRWFjaCh2YWx1ZSA9PiB7XHJcbiAgICAgIHZhbHVlPy4oZGF0YSlcclxuICAgIH0pXHJcbiAgfSwgW19rZXldKVxyXG4gIGNvbnN0IHNldERhdGE6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPHR5cGVvZiBzdGF0ZT4+ID0gdXNlQ2FsbGJhY2soKGRhdGEpID0+IHtcclxuICAgIGNvbnN0IG9sZFN0YXRlID0gb3JpZ2luU3RvcmVbX2tleV0uc3RhdGVcclxuICAgIGNvbnN0IG5ld0RhdGEgPSBpc0Z1bmN0aW9uKGRhdGEpID8gKGRhdGEgYXMgKHY6IHR5cGVvZiBvbGRTdGF0ZSkgPT4gdm9pZCkob2xkU3RhdGUpIDogZGF0YVxyXG4gICAgb3JpZ2luU3RvcmVbX2tleV0uc3RhdGUgPSBuZXdEYXRhXHJcbiAgICBub3RpY2UobmV3RGF0YSlcclxuICB9LCBbX2tleSwgbm90aWNlXSlcclxuXHJcbiAgY29uc3Qgc2V0TG9hZCA9IHVzZUNhbGxiYWNrKChxdWVyeTogYW55LCBmbGFnOiBib29sZWFuKSA9PiB7XHJcbiAgICBzZXREYXRhKHByZXZTdGF0ZSA9PiAoe1xyXG4gICAgICAuLi5wcmV2U3RhdGUsXHJcbiAgICAgIGZldGNoTG9hZDoge1xyXG4gICAgICAgIC4uLnByZXZTdGF0ZS5mZXRjaExvYWQgPz8ge30sXHJcbiAgICAgICAgW3F1ZXJ5Py5sb2M/LnNvdXJjZT8uYm9keV06IGZsYWcsXHJcbiAgICAgIH1cclxuICAgIH0pKVxyXG4gIH0sIFtzZXREYXRhXSlcclxuICBjb25zdCBzZXRFcnJvciA9IHVzZUNhbGxiYWNrKChxdWVyeTogYW55LCBlcnI6IGFueSkgPT4ge1xyXG4gICAgc2V0RGF0YShwcmV2U3RhdGUgPT4gKHtcclxuICAgICAgLi4ucHJldlN0YXRlLFxyXG4gICAgICBmZXRjaEVycm9yOiB7XHJcbiAgICAgICAgLi4ucHJldlN0YXRlLmZldGNoRXJyb3IgPz8ge30sXHJcbiAgICAgICAgW3F1ZXJ5Py5sb2M/LnNvdXJjZT8uYm9keV06IGVycixcclxuICAgICAgfVxyXG4gICAgfSkpXHJcbiAgfSwgW3NldERhdGFdKVxyXG5cclxuICBjb25zdCBxdWVyeTogR3JhcGhxbFF1ZXJ5ID0gdXNlQ2FsbGJhY2soYXN5bmMgKHF1ZXJ5LCBwYXJhbXMsIG9wdGlvbikgPT4ge1xyXG4gICAgc2V0TG9hZChxdWVyeSwgdHJ1ZSlcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGdyYXBoUUxRdWVyeSgpKHF1ZXJ5LCBwYXJhbXMsIG9wdGlvbikuY2F0Y2goZSA9PiB7XHJcbiAgICAgIHNldEVycm9yKHF1ZXJ5LCBlKVxyXG4gICAgfSkuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgIHNldExvYWQocXVlcnksIGZhbHNlKVxyXG4gICAgfSkgYXMgYW55XHJcbiAgICByZXR1cm4gcmVzPy5kYXRhXHJcbiAgfSwgW3NldEVycm9yLCBzZXRMb2FkXSlcclxuICBjb25zdCBtdXRhdGU6IEdyYXBocWxNdXRhdGUgPSB1c2VDYWxsYmFjayhhc3luYyAobXV0YXRpb24sIHBhcmFtcywgb3B0aW9uKSA9PiB7XHJcbiAgICBzZXRMb2FkKG11dGF0aW9uLCB0cnVlKVxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZ3JhcGhRTE11dGF0ZSgpKG11dGF0aW9uLCBwYXJhbXMsIG9wdGlvbikuY2F0Y2goZSA9PiB7XHJcbiAgICAgIHNldEVycm9yKG11dGF0aW9uLCBlKVxyXG4gICAgfSkuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgIHNldExvYWQobXV0YXRpb24sIGZhbHNlKVxyXG4gICAgfSkgYXMgYW55XHJcbiAgICByZXR1cm4gcmVzPy5kYXRhXHJcbiAgfSwgW3NldEVycm9yLCBzZXRMb2FkXSlcclxuXHJcbiAgaWYgKE9iamVjdC5rZXlzKG9yaWdpblN0b3JlW19rZXldLmFjdGlvbnMpLmxlbmd0aCA9PT0gMCAmJiBvcmlnaW5TdG9yZVtfa2V5XS5hY3Rpb25zLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcclxuICAgIE9iamVjdC5rZXlzKGFjdGlvbnMpLmZvckVhY2godmFsdWUgPT4ge1xyXG4gICAgICBvcmlnaW5TdG9yZVtfa2V5XS5hY3Rpb25zW3ZhbHVlXSA9ICh2OiBhbnkpID0+IGFjdGlvbnNbdmFsdWVdKHYsIHtcclxuICAgICAgICAuLi5iYXNlQWN0aW9uT3B0aW9uLFxyXG4gICAgICAgIGRhdGE6IG9yaWdpblN0b3JlW19rZXldLnN0YXRlLFxyXG4gICAgICAgIG5vdGljZSxcclxuICAgICAgICBzZXREYXRhLFxyXG4gICAgICAgIHF1ZXJ5LFxyXG4gICAgICAgIG11dGF0ZSxcclxuICAgICAgICBzdG9yZTogb3JpZ2luU3RvcmUsXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgT2JqZWN0LmtleXMoYWN0aW9ucykuZm9yRWFjaCh2YWx1ZSA9PiB7XHJcbiAgICAgIG9yaWdpblN0b3JlW19rZXldLmFjdGlvbnNbdmFsdWVdID0gKHY6IGFueSkgPT4gYWN0aW9uc1t2YWx1ZV0odiwge1xyXG4gICAgICAgIC4uLmJhc2VBY3Rpb25PcHRpb24sXHJcbiAgICAgICAgZGF0YTogb3JpZ2luU3RvcmVbX2tleV0uc3RhdGUsXHJcbiAgICAgICAgbm90aWNlLFxyXG4gICAgICAgIHNldERhdGEsXHJcbiAgICAgICAgcXVlcnksXHJcbiAgICAgICAgbXV0YXRlLFxyXG4gICAgICAgIHN0b3JlOiBvcmlnaW5TdG9yZSxcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSwgW19rZXksIGFjdGlvbnMsIG11dGF0ZSwgbm90aWNlLCBxdWVyeSwgc2V0RGF0YV0pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIG9yaWdpblN0b3JlW19rZXldLnNldERhdGEgPSBbXHJcbiAgICAgIC4uLm9yaWdpblN0b3JlW19rZXldLnNldERhdGEgPz8gW10sXHJcbiAgICAgIHNldFN0YXRlLFxyXG4gICAgXVxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgb3JpZ2luU3RvcmVbX2tleV0uc2V0RGF0YSA9IG9yaWdpblN0b3JlW19rZXldLnNldERhdGEuZmlsdGVyKHZhbHVlID0+IHZhbHVlICE9PSBzZXRTdGF0ZSlcclxuICAgIH1cclxuICB9LCBbX2tleV0pXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBzdGF0ZTogb3JpZ2luU3RvcmVbX2tleV0uc3RhdGUsXHJcbiAgICBhY3Rpb25zOiAob3JpZ2luU3RvcmVbX2tleV0uYWN0aW9ucykgYXMgRGVhbEZ1bk9iajx0eXBlb2YgYWN0aW9ucz4sXHJcbiAgICBzdG9yZTogb3JpZ2luU3RvcmUsXHJcbiAgICBnZXRMb2FkOiBxdWVyeSA9PiBvcmlnaW5TdG9yZVtfa2V5XS5zdGF0ZS5mZXRjaExvYWRbcXVlcnk/LmxvYz8uc291cmNlPy5ib2R5XSA/IDEgOiAwXHJcbiAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgJ2Nyb3NzLWZldGNoL3BvbHlmaWxsJ1xyXG5pbXBvcnQge2dldFRva2VuLCBzZXRUb2tlbn0gZnJvbSAnLi4vdG9vbHMvdG9rZW4nXHJcbmltcG9ydCB7T3BlcmF0aW9ufSBmcm9tICdhcG9sbG8tbGluaydcclxuaW1wb3J0IHtFcnJvckxpbmt9IGZyb20gJ2Fwb2xsby1saW5rLWVycm9yJ1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgQXBvbGxvQ2xpZW50IGZyb20gJ2Fwb2xsby1ib29zdCdcclxuaW1wb3J0IHtzc0xvZ30gZnJvbSAnLi4vdG9vbHMvZ2xvYmFsJ1xyXG5pbXBvcnQge0RvY3VtZW50Tm9kZX0gZnJvbSAnZ3JhcGhxbCdcclxuaW1wb3J0IHtkb2N9IGZyb20gJy4uL2dyYXBocWxUeXBlcy9kb2MnXHJcbmltcG9ydCB7c2hvd01lc3NhZ2V9IGZyb20gJy4uL2NvbXBvbmVudHMvTWVzc2FnZS9NZXNzYWdlJ1xyXG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gJ25leHQvY29uZmlnJ1xyXG5cclxuY29uc3QgY29uZmlnID0gZ2V0Q29uZmlnKClcclxuY29uc3QgY2xpZW50X2FwaV91cmkgPSBjb25maWc/LnB1YmxpY1J1bnRpbWVDb25maWc/LmNsaWVudF9hcGlfdXJpID8/ICdodHRwOi8vbG9jYWxob3N0OjQ0NjQvdHlwZV9fZ3JhcGhxbC9hcGknXHJcblxyXG5jb25zdCBvbWl0VHlwZW5hbWUgPSAoa2V5OiBhbnksIHZhbHVlOiBhbnkpID0+IHtcclxuICByZXR1cm4ga2V5ID09PSAnX190eXBlbmFtZScgPyB1bmRlZmluZWQgOiB2YWx1ZVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q2xpZW50ID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCByZXF1ZXN0OiAob3BlcmF0aW9uOiBPcGVyYXRpb24pID0+IFByb21pc2U8dm9pZD4gfCB2b2lkID0gKG9wZXJhdGlvbikgPT4ge1xyXG4gICAgaWYgKG9wZXJhdGlvbi52YXJpYWJsZXMpIHtcclxuICAgICAgb3BlcmF0aW9uLnZhcmlhYmxlcyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob3BlcmF0aW9uLnZhcmlhYmxlcyksIG9taXRUeXBlbmFtZSlcclxuICAgIH1cclxuICAgIG9wZXJhdGlvbi5zZXRDb250ZXh0KCh7aGVhZGVycyA9IHt9fSkgPT4gKHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIC4uLmhlYWRlcnMsXHJcbiAgICAgICAgLy8g5ZCO5Y+w5LiH6IO95p2D6ZmQXHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogZ2V0VG9rZW4oKSxcclxuICAgICAgfSxcclxuICAgIH0pKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVmcmVzaFRva2VuID0gKCkgPT4ge1xyXG4gICAgZ3JhcGhRTFF1ZXJ5KCkoZG9jLnJlZnJlc2hUb2tlbiwge1xyXG4gICAgICBkYXRhOiBnZXRUb2tlbigncmVmcmVzaHRva2VuJyksXHJcbiAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgIGlmIChyZXMuZGF0YT8ucmVmcmVzaFRva2VuPy50b2tlbikge1xyXG4gICAgICAgIHNldFRva2VuKHJlcy5kYXRhPy5yZWZyZXNoVG9rZW4/LnRva2VuKVxyXG4gICAgICAgIHNldFRva2VuKHJlcy5kYXRhPy5yZWZyZXNoVG9rZW4/LnJlZnJlc2h0b2tlbiwgJ3JlZnJlc2h0b2tlbicpXHJcbiAgICAgICAgc2hvd01lc3NhZ2Uoe21lc3NhZ2U6ICfnmbvlvZXotoXml7Ys5Yi35paw55m75b2V5L+h5oGvJ30pXHJcbiAgICAgICAgUm91dGVyLnJlbG9hZCgpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2hvd01lc3NhZ2Uoe21lc3NhZ2U6ICfor7fph43mlrDnmbvlvZUnfSlcclxuICAgICAgICBSb3V0ZXIucHVzaCgnL2xvZ2luJylcclxuICAgICAgfVxyXG4gICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgc3NMb2coZXJyKVxyXG4gICAgICBzaG93TWVzc2FnZSh7bWVzc2FnZTogJ+ivt+mHjeaWsOeZu+W9lSd9KVxyXG4gICAgICBSb3V0ZXIucHVzaCgnL2xvZ2luJylcclxuICAgIH0pXHJcbiAgfVxyXG4gIGNvbnN0IG9uRXJyb3I6IEVycm9yTGluay5FcnJvckhhbmRsZXIgPSAoe3Jlc3BvbnNlLCBvcGVyYXRpb24sIGdyYXBoUUxFcnJvcnMsIG5ldHdvcmtFcnJvcn0pID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgLy8gY29uc29sZS5sb2cob3BlcmF0aW9uKVxyXG4gICAgaWYgKGdyYXBoUUxFcnJvcnMpIHtcclxuICAgICAgZ3JhcGhRTEVycm9ycy5mb3JFYWNoKCh7bWVzc2FnZSwgbG9jYXRpb25zLCBwYXRoLCBleHRlbnNpb25zfSkgPT4ge1xyXG4gICAgICAgIHNzTG9nKFxyXG4gICAgICAgICAgICBgW0dyYXBoUUwgZXJyb3JdOiBNZXNzYWdlOiAke21lc3NhZ2V9LCBMb2NhdGlvbjogJHtsb2NhdGlvbnN9LCBQYXRoOiAke3BhdGh9YCxcclxuICAgICAgICApXHJcbiAgICAgICAgaWYgKGV4dGVuc2lvbnM/LmNvZGUgPT09ICdVTkFVVEhFTlRJQ0FURUQnKSB7XHJcbiAgICAgICAgICBpZiAobWVzc2FnZS5pbmNsdWRlcygnZmlyc3QnKSkge1xyXG4gICAgICAgICAgICByZWZyZXNoVG9rZW4oKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2hvd01lc3NhZ2Uoe21lc3NhZ2U6ICfor7fph43mlrDnmbvlvZUnfSlcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goJy9sb2dpbicpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtZXNzYWdlLmluY2x1ZGVzKCdVbmV4cGVjdGVkIGVycm9yJykpIHtcclxuICAgICAgICAgIHNob3dNZXNzYWdlKHtcclxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZS5zcGxpdCgnXCInKVsxXSxcclxuICAgICAgICAgICAgbXNnX3R5cGU6ICdlcnJvcicsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzaG93TWVzc2FnZSh7bWVzc2FnZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChuZXR3b3JrRXJyb3IpIHtcclxuICAgICAgY29uc3QgZXJyTXNnID0gKCdib2R5VGV4dCcgaW4gbmV0d29ya0Vycm9yKSA/IG5ldHdvcmtFcnJvcj8uYm9keVRleHQgOiAoJ3Jlc3VsdCcgaW4gbmV0d29ya0Vycm9yKSA/IG5ldHdvcmtFcnJvcj8ucmVzdWx0Py5lcnJvciA6ICcnXHJcbiAgICAgIHNzTG9nKGBbTmV0d29yayBlcnJvcl06ICR7ZXJyTXNnfWApXHJcbiAgICAgIGlmICgnc3RhdHVzQ29kZScgaW4gbmV0d29ya0Vycm9yICYmIG5ldHdvcmtFcnJvcj8uc3RhdHVzQ29kZSA9PT0gNDAxKSB7XHJcbiAgICAgICAgaWYgKGVyck1zZy5pbmNsdWRlcygnZmlyc3QnKSAmJiBnZXRUb2tlbigncmVmcmVzaHRva2VuJykpIHtcclxuICAgICAgICAgIHJlZnJlc2hUb2tlbigpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNob3dNZXNzYWdlKHttZXNzYWdlOiAn6K+36YeN5paw55m75b2VJ30pXHJcbiAgICAgICAgICBSb3V0ZXIucHVzaCgnL2xvZ2luJylcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBuZXcgQXBvbGxvQ2xpZW50KHtcclxuICAgIC8vIGxpbms6IGh0dHBMaW5rLFxyXG4gICAgdXJpOiBjbGllbnRfYXBpX3VyaSxcclxuICAgIHJlcXVlc3QsXHJcbiAgICBvbkVycm9yLFxyXG4gIH0pXHJcbn1cclxuXHJcbmNvbnN0IGRlZmF1bHRDbGllbnQgPSBnZXRDbGllbnQoKVxyXG5cclxuLy8gY29uc3QgZGVhbFBhcmFtcyA9ICgocGFyYW1zOiBhbnkpID0+ICh7XHJcbi8vICAgZGF0YTogcGFyYW1zLFxyXG4vLyB9KSlcclxuY29uc3QgZGVhbFBhcmFtcyA9ICgocGFyYW1zOiBhbnkpID0+IHBhcmFtcylcclxuXHJcbmV4cG9ydCBjb25zdCBncmFwaFFMUXVlcnkgPSAoY2xpZW50ID0gZGVmYXVsdENsaWVudCkgPT4gYXN5bmMgKHF1ZXJ5OiBEb2N1bWVudE5vZGUsIHBhcmFtczogYW55LCBvcHRpb24/OiBhbnkpID0+IHtcclxuICBjb25zdCBfZGVhbFBhcmFtc0luID0gb3B0aW9uPy5kZWFsUGFyYW1zSW4gPz8gZGVhbFBhcmFtc1xyXG4gIHJldHVybiBjbGllbnQucXVlcnkoe1xyXG4gICAgZmV0Y2hQb2xpY3k6ICduZXR3b3JrLW9ubHknLFxyXG4gICAgcXVlcnksXHJcbiAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgLi4uKF9kZWFsUGFyYW1zSW4gPyBfZGVhbFBhcmFtc0luKHBhcmFtcykgOiBwYXJhbXMpLFxyXG4gICAgfSxcclxuICAgIC4uLm9wdGlvbixcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ3JhcGhRTE11dGF0ZSA9IChjbGllbnQgPSBkZWZhdWx0Q2xpZW50KSA9PiBhc3luYyAobXV0YXRpb246IGFueSwgcGFyYW1zOiBhbnksIG9wdGlvbj86IGFueSkgPT4ge1xyXG4gIGNvbnN0IF9kZWFsUGFyYW1zSW4gPSBvcHRpb24/LmRlYWxQYXJhbXNJbiA/PyBkZWFsUGFyYW1zXHJcbiAgcmV0dXJuIGNsaWVudC5tdXRhdGUoe1xyXG4gICAgbXV0YXRpb24sXHJcbiAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgLi4uKF9kZWFsUGFyYW1zSW4gPyBfZGVhbFBhcmFtc0luKHBhcmFtcykgOiBwYXJhbXMpLFxyXG4gICAgfSxcclxuICAgIC4uLm9wdGlvbixcclxuICB9KVxyXG59XHJcblxyXG5jb25zdCBzZXJ2ZXJDbGllbnQgPSAoKSA9PiBuZXcgQXBvbGxvQ2xpZW50KHtcclxuICAvLyBsaW5rOiBodHRwTGluayxcclxuICB1cmk6IGNsaWVudF9hcGlfdXJpLFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHNlcnZlclF1ZXJ5ID0gYXN5bmMgKHF1ZXJ5OiBhbnksIHBhcmFtczogYW55LCBvcHRpb24/OiBhbnkpID0+IChhd2FpdCBncmFwaFFMUXVlcnkoc2VydmVyQ2xpZW50KCkpKHF1ZXJ5LCBwYXJhbXMsIG9wdGlvbikpPy5kYXRhXHJcblxyXG5leHBvcnQgY29uc3Qgc2VydmVyTXV0YXRlID0gYXN5bmMgKG11dGF0aW9uOiBhbnksIHBhcmFtczogYW55LCBvcHRpb24/OiBhbnkpID0+IChhd2FpdCBncmFwaFFMTXV0YXRlKHNlcnZlckNsaWVudCgpKShtdXRhdGlvbiwgcGFyYW1zLCBvcHRpb24pKT8uZGF0YVxyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgQXJyb3dCYWNrSW9zSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dCYWNrSW9zJ1xyXG5pbXBvcnQge0JveCwgSWNvbkJ1dHRvbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCB7bHN9IGZyb20gJy4uLy4uL3Rvb2xzL2RlYWxLZXknXHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHtNYXliZX0gZnJvbSAnLi4vLi4vZ3JhcGhxbFR5cGVzL3R5cGVzJ1xyXG5pbXBvcnQge0JveFByb3BzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Cb3gvQm94J1xyXG5cclxuY29uc3QgQ29udGFpbiA9IHN0eWxlZChCb3gpPEJveFByb3BzPmBcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDBweCAxZnIgNDBweDtcclxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmBcclxuZXhwb3J0IGNvbnN0IEhlYWRlclRpdGxlID0gKHt0aXRsZSA9ICcnLCBiYWNrQ2FsbCA9ICgpID0+IHt9fToge3RpdGxlPzogTWF5YmU8c3RyaW5nPiwgYmFja0NhbGw/OiBGdW5jdGlvbn0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICByZXR1cm4gPENvbnRhaW5cclxuICAgICAgYm94U2hhZG93PXsxfT5cclxuICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgaWYgKCEoYmFja0NhbGwgJiYgYmFja0NhbGwoKSkpIHtcclxuICAgICAgICAgICAgcm91dGVyLmJhY2soKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxBcnJvd0JhY2tJb3NJY29uLz5cclxuICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgIDxtYWluPlxyXG4gICAgICB7bHModGl0bGUpfVxyXG4gICAgPC9tYWluPlxyXG4gIDwvQ29udGFpbj5cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7U25hY2tiYXJ9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQge2FtYmVyLCBibHVlLCBjb21tb24sIGdyZWVuLCBncmV5LCByZWR9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycydcclxuaW1wb3J0IHtTbmFja2JhclByb3BzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TbmFja2Jhci9TbmFja2JhcidcclxuaW1wb3J0IHtvcmlnaW5TdG9yZSwgdXNlU3RvcmVNb2RlbH0gZnJvbSAnLi4vLi4vTW9kZWxBY3Rpb24vdXNlU3RvcmUnXHJcbmltcG9ydCB7ZnBNZXJnZVByZX0gZnJvbSAnLi4vLi4vdG9vbHMvdXRpbHMnXHJcbmltcG9ydCB7bW9kZWxGYWN0b3J5fSBmcm9tICcuLi8uLi9Nb2RlbEFjdGlvbi9tb2RlbFV0aWwnXHJcbmltcG9ydCB7IGxzIH0gZnJvbSAnLi4vLi4vdG9vbHMvZGVhbEtleSdcclxuXHJcbmNvbnN0IHR5cGVIZWxwID0ge1xyXG4gIGRlZmF1bHQ6IGBiYWNrZ3JvdW5kOiAke2dyZXlbNzAwXX07YCxcclxuICBzdWNjZXNzOiBgYmFja2dyb3VuZDogJHtncmVlbls2MDBdfTtgLFxyXG4gIHdhcm5pbmc6IGBiYWNrZ3JvdW5kOiAke2FtYmVyWzcwMF19O2AsXHJcbiAgaW5mbzogYGJhY2tncm91bmQ6ICR7Ymx1ZVs3MDBdfTtgLFxyXG4gIGVycm9yOiBgYmFja2dyb3VuZDogJHtyZWRbNzAwXX07YCxcclxufVxyXG5jb25zdCBnZXRUeXBlID0gKHR5cGUgPSAnZGVmYXVsdCcpID0+ICh0eXBlSGVscCBhcyBhbnkpW3R5cGVdXHJcblxyXG50eXBlIE1lc3NhZ2VQcm9wcyA9IFBhcnRpYWw8U25hY2tiYXJQcm9wcyAmIHtcclxuICBtc2dfdHlwZTogJ2RlZmF1bHQnIHwgJ3N1Y2Nlc3MnIHwgJ2luZm8nIHwgJ3dhcm5pbmcnIHwgJ2Vycm9yJyB8IHN0cmluZ1xyXG59PlxyXG5cclxuY29uc3QgQ3VzU25hY2tiYXIgPSBzdHlsZWQoU25hY2tiYXIpPE1lc3NhZ2VQcm9wcz5gXHJcbiAgJiYmID4gZGl2IHtcclxuICAgIGNvbG9yOiAke2NvbW1vbi53aGl0ZX07XHJcbiAgICAkeyh7bXNnX3R5cGV9KSA9PiBnZXRUeXBlKG1zZ190eXBlKX1cclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IG1lc3NhZ2VNb2RlbCA9IG1vZGVsRmFjdG9yeSgnbWVzc2FnZU1vZGVsJywge1xyXG4gIG9wZW46IGZhbHNlLFxyXG4gIG1lc3NhZ2U6ICcnLFxyXG4gIGF1dG9IaWRlRHVyYXRpb246IDIwMDAsXHJcbiAgbXNnX3R5cGU6ICdkZWZhdWx0JyxcclxufSBhcyBNZXNzYWdlUHJvcHMsIHtcclxuICBvcGVuOiAodmFsdWU6IHN0cmluZyB8IE1lc3NhZ2VQcm9wcywgb3B0aW9uKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xyXG4gICAgICBvcHRpb24uc2V0RGF0YShmcE1lcmdlUHJlKHtcclxuICAgICAgICBhdXRvSGlkZUR1cmF0aW9uOiAyMDAwLFxyXG4gICAgICAgIG1zZ190eXBlOiAnZGVmYXVsdCcsXHJcbiAgICAgICAgbWVzc2FnZTogdmFsdWUsXHJcbiAgICAgICAgb3BlbjogdHJ1ZSxcclxuICAgICAgfSkpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBvcHRpb24uc2V0RGF0YShmcE1lcmdlUHJlKHtcclxuICAgICAgICBhdXRvSGlkZUR1cmF0aW9uOiAyMDAwLFxyXG4gICAgICAgIG1zZ190eXBlOiAnZGVmYXVsdCcsXHJcbiAgICAgICAgLi4udmFsdWUsXHJcbiAgICAgICAgb3BlbjogdHJ1ZSxcclxuICAgICAgfSkpXHJcbiAgICB9XHJcbiAgfSxcclxuICBvbkNsb3NlOiAodmFsdWUsIG9wdGlvbikgPT4gb3B0aW9uLnNldERhdGEoZnBNZXJnZVByZSh7XHJcbiAgICBvcGVuOiBmYWxzZSxcclxuICB9KSksXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgTWVzc2FnZSA9ICgpID0+IHtcclxuICBjb25zdCB7c3RhdGU6IG1TdGF0ZSwgYWN0aW9uc30gPSB1c2VTdG9yZU1vZGVsKG1lc3NhZ2VNb2RlbClcclxuICByZXR1cm4gPEN1c1NuYWNrYmFyXHJcbiAgICAgIG9wZW49e21TdGF0ZS5vcGVufVxyXG4gICAgICBhdXRvSGlkZUR1cmF0aW9uPXttU3RhdGUuYXV0b0hpZGVEdXJhdGlvbn1cclxuICAgICAgbWVzc2FnZT17bHMobVN0YXRlLm1lc3NhZ2UgYXMgc3RyaW5nKX1cclxuICAgICAgbXNnX3R5cGU9e21TdGF0ZS5tc2dfdHlwZX1cclxuICAgICAgb25DbG9zZT17KCkgPT4gYWN0aW9ucy5vbkNsb3NlKCl9XHJcbiAgLz5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNob3dNZXNzYWdlID0gKG9wdGlvbjogc3RyaW5nIHwgTWVzc2FnZVByb3BzKSA9PiB7XHJcbiAgb3JpZ2luU3RvcmVbJ21lc3NhZ2VNb2RlbCddLmFjdGlvbnMub3BlbihvcHRpb24pXHJcbiAgcmV0dXJuXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge0Nhcm91c2VsfSBmcm9tICdyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsJ1xyXG5pbXBvcnQge2RlYWxJbWdVcmx9IGZyb20gJy4uLy4uL3Rvb2xzL2ltZydcclxuXHJcbmNvbnN0IEN1c0Nhcm91c2VsID0gKHtkYXRhTGlzdCwgb25DbGlja0l0ZW0sIGhlaWdodH06IHsgaGVpZ2h0Pzogc3RyaW5nLCBkYXRhTGlzdDogYW55W10sIG9uQ2xpY2tJdGVtPzogKGluZGV4OiBudW1iZXIsIGl0ZW06IFJlYWN0LlJlYWN0Tm9kZSkgPT4gdm9pZCB9KSA9PiAoXHJcbiAgICA8Q2Fyb3VzZWxcclxuICAgICAgICBhdXRvUGxheT17dHJ1ZX1cclxuICAgICAgICBzaG93VGh1bWJzPXtmYWxzZX1cclxuICAgICAgICBzaG93QXJyb3dzPXtmYWxzZX1cclxuICAgICAgICBzaG93U3RhdHVzPXtmYWxzZX1cclxuICAgICAgICBpbmZpbml0ZUxvb3A9e3RydWV9XHJcbiAgICAgICAgb25DbGlja0l0ZW09e29uQ2xpY2tJdGVtfVxyXG4gICAgPlxyXG4gICAgICB7ZGF0YUxpc3Q/Lm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGtleT17YENhcm91c2VsXyR7aXRlbS5pZH1gfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e2hlaWdodDogaGVpZ2h0fX1cclxuICAgICAgICAgICAgICAgIHNyYz17ZGVhbEltZ1VybChpdGVtLmltZ1VybCl9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJcIi8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICA8L0Nhcm91c2VsPlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBDdXNDYXJvdXNlbFxyXG4iLCJpbXBvcnQge2dxbH0gZnJvbSAnYXBvbGxvLWJvb3N0J1xyXG5cclxuZXhwb3J0IGNvbnN0IGZyYWdtZW50ID0ge1xyXG4gIENhdGVnb3J5RmllbGRzOiBncWxgXHJcbiAgICAgIGZyYWdtZW50IENhdGVnb3J5IG9uIENhdGVnb3J5IHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICBjcmVhdGVUaW1lXHJcbiAgICAgICAgICB1cGRhdGVUaW1lXHJcbiAgICAgICAgICBpc0RlbGV0ZVxyXG4gICAgICAgICAgaXNFbmFibGVcclxuICAgICAgICAgIHJlbWFya1xyXG4gICAgICAgICAgc29ydFxyXG4gICAgICAgICAgcGFyZW50SWRcclxuICAgICAgICAgIGZ1bGxQYXJlbnRJZFxyXG4gICAgICAgICAgbnVtYmVyXHJcbiAgICAgICAgICB1c2VySWRcclxuICAgICAgICAgIGltZ1VybFxyXG4gICAgICB9XHJcbiAgYCxcclxuICBVc2VyRmllbGRzOiBncWxgXHJcbiAgICAgIGZyYWdtZW50IFVzZXJGaWVsZHMgb24gVXNlciB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgICAgdXBkYXRlVGltZVxyXG4gICAgICAgICAgaXNEZWxldGVcclxuICAgICAgICAgIHBhc3N3b3JkXHJcbiAgICAgICAgICB0eXBlXHJcbiAgICAgIH1cclxuICBgLFxyXG4gIFVzZXJJbmZvRmllbGRzOiBncWxgXHJcbiAgICAgIGZyYWdtZW50IFVzZXJJbmZvRmllbGRzIG9uIFVzZXJJbmZvIHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICBjcmVhdGVUaW1lXHJcbiAgICAgICAgICB1cGRhdGVUaW1lXHJcbiAgICAgICAgICBpc0RlbGV0ZVxyXG4gICAgICAgICAgdXNlcklkXHJcbiAgICAgICAgICBwaG9uZVxyXG4gICAgICAgICAgZW1haWxcclxuICAgICAgICAgIHVzZXJMZXZlbFxyXG4gICAgICAgICAgcGlja3VwQWRkcmVzc0lkXHJcbiAgICAgIH1cclxuICBgLFxyXG4gIE9yZGVySW5mb0ZpZWxkczogZ3FsYFxyXG4gICAgICBmcmFnbWVudCBPcmRlckluZm9GaWVsZHMgb24gT3JkZXJJbmZvIHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICBjcmVhdGVUaW1lXHJcbiAgICAgICAgICB1cGRhdGVUaW1lXHJcbiAgICAgICAgICBpc0RlbGV0ZVxyXG4gICAgICAgICAgbnVtYmVyXHJcbiAgICAgICAgICBzdGF0ZVxyXG4gICAgICAgICAgYWN0dWFsbHlQYWlkXHJcbiAgICAgICAgICBhZGRyZXNzSWRcclxuICAgICAgICAgIHBheW1lbnRNZXRob2RDYXJkSWRcclxuICAgICAgICAgIHN1YnRvdGFsXHJcbiAgICAgICAgICBjb3Vwb25EaXNjb3VudFxyXG4gICAgICAgICAgdmlwRGlzY291bnRcclxuICAgICAgICAgIHRyYW5zcG9ydGF0aW9uQ29zdHNcclxuICAgICAgICAgIHNhbGVUYXhcclxuICAgICAgICAgIG9yZGVySWRcclxuICAgICAgICAgIGRpc2NvdW50UHJvZHVjdFRvdGFsXHJcbiAgICAgICAgICBmaW5pc2hUaW1lXHJcbiAgICAgICAgICBwaWNrVXBUaW1lXHJcbiAgICAgICAgICBwaWNrVXBUeXBlXHJcbiAgICAgICAgICBnZW5lcmF0ZUNvaW5cclxuICAgICAgICAgIGRlZHVjdENvaW5cclxuICAgICAgICAgIHNlbGZBZGRyZXNzSWRcclxuICAgICAgICAgIGN1cnJlbnRVc2VyTGV2ZWxcclxuICAgICAgfVxyXG4gIGAsXHJcbiAgUk9yZGVyUHJvZHVjdEZpZWxkczogZ3FsYFxyXG4gICAgICBmcmFnbWVudCBST3JkZXJQcm9kdWN0RmllbGRzIG9uIFJPcmRlclByb2R1Y3Qge1xyXG4gICAgICAgICAgY291bnRcclxuICAgICAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgICAgIGRlYWxQcmljZVxyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIGlzRGVsZXRlXHJcbiAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICBvcmRlcklkXHJcbiAgICAgICAgICBwcm9kdWN0SWRcclxuICAgICAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgfVxyXG4gIGAsXHJcbiAgUHJvZHVjdEZpZWxkczogZ3FsYFxyXG4gICAgICBmcmFnbWVudCBQcm9kdWN0RmllbGRzIG9uIFByb2R1Y3Qge1xyXG4gICAgICAgICAgYnJhbmRcclxuICAgICAgICAgIGNhdGVnb3J5SWRcclxuICAgICAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgICAgIGdyb3VwQW1vdW50XHJcbiAgICAgICAgICBncm91cEFtb3VudFVuaXRcclxuICAgICAgICAgIGdyb3VwUHJlY2lzaW9uXHJcbiAgICAgICAgICBncm91cFJlbWFya1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIGlzRGVsZXRlXHJcbiAgICAgICAgICBpc0VuYWJsZVxyXG4gICAgICAgICAgaXNHcm91cFxyXG4gICAgICAgICAgaXNIb3RcclxuICAgICAgICAgIGlzTmV3XHJcbiAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICBudW1iZXJcclxuICAgICAgICAgIHBhY2tpbmdVbml0XHJcbiAgICAgICAgICBwcmljZUluXHJcbiAgICAgICAgICBwcmljZU1hcmtldFxyXG4gICAgICAgICAgcHJpY2VPdXRcclxuICAgICAgICAgIHJlbWFya1xyXG4gICAgICAgICAgc2hlbHZlc1R5cGVzXHJcbiAgICAgICAgICBzb3J0XHJcbiAgICAgICAgICBzdG9ja1xyXG4gICAgICAgICAgdW5pdFxyXG4gICAgICAgICAgdXBkYXRlVGltZVxyXG4gICAgICAgICAgd2VpZ2h0XHJcbiAgICAgICAgICB1bml0U3RyaW5nXHJcbiAgICAgICAgICBncm91cFByZWNpc2lvblN0cmluZ1xyXG4gICAgICAgICAgZ3JvdXBBbW91bnRVbml0U3RyaW5nXHJcbiAgICAgICAgICBwYWNraW5nVW5pdFN0cmluZ1xyXG4gICAgICB9XHJcbiAgYCxcclxuICBJbWdGaWVsZHM6IGdxbGBcclxuICAgIGZyYWdtZW50IEltZ0ZpZWxkcyBvbiBQcm9kdWN0SW1nIHtcclxuICAgICAgICBjcmVhdGVUaW1lXHJcbiAgICAgICAgaWRcclxuICAgICAgICBpc0RlbGV0ZVxyXG4gICAgICAgIG5hbWVcclxuICAgICAgICBudW1iZXJcclxuICAgICAgICBwcm9kdWN0SWRcclxuICAgICAgICB1cGRhdGVUaW1lXHJcbiAgICAgICAgdXJsXHJcbiAgICB9IFxyXG4gIGAsXHJcbiAgVXNlckFkZHJlc3NGaWVsZHM6IGdxbGBcclxuICAgICAgZnJhZ21lbnQgVXNlckFkZHJlc3NGaWVsZHMgb24gVXNlckFkZHJlc3Mge1xyXG4gICAgICAgICAgYWRkcmVzc1xyXG4gICAgICAgICAgY2l0eVxyXG4gICAgICAgICAgY29tYmluZUFkZHJlc3NcclxuICAgICAgICAgIGNvbnRhY3RJbmZvcm1hdGlvblxyXG4gICAgICAgICAgY29udGFjdFVzZXJOYW1lXHJcbiAgICAgICAgICBjcmVhdGVUaW1lXHJcbiAgICAgICAgICBkaXN0cmljdFxyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIGlzRGVmYXVsdFxyXG4gICAgICAgICAgaXNEZWxldGVcclxuICAgICAgICAgIG5hbWVcclxuICAgICAgICAgIHByb3ZpbmNlXHJcbiAgICAgICAgICB1cGRhdGVUaW1lXHJcbiAgICAgICAgICB1c2VySWRcclxuICAgICAgICAgIHppcFxyXG4gICAgICB9XHJcbiAgYCxcclxuICBVc2VyUGF5Q2FyZEZpZWxkczogZ3FsYFxyXG4gICAgICBmcmFnbWVudCBVc2VyUGF5Q2FyZEZpZWxkcyBvbiBVc2VyUGF5Q2FyZCB7XHJcbiAgICAgICAgICBhZGRyZXNzRGV0YWlsXHJcbiAgICAgICAgICBjaXR5XHJcbiAgICAgICAgICBjb2RlXHJcbiAgICAgICAgICBjb250YWN0XHJcbiAgICAgICAgICBjcmVhdGVUaW1lXHJcbiAgICAgICAgICBleHBpcmF0aW9uVGltZVxyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIGlzRGVmYXVsdFxyXG4gICAgICAgICAgaXNEZWxldGVcclxuICAgICAgICAgIG5hbWVcclxuICAgICAgICAgIG51bWJlclxyXG4gICAgICAgICAgdXBkYXRlVGltZVxyXG4gICAgICAgICAgdXNlcklkXHJcbiAgICAgICAgICB1c2VyTmFtZVxyXG4gICAgICAgICAgemlwQ29kZVxyXG4gICAgICB9XHJcbiAgYCxcclxuICBTaG9wQ2FydEZpZWxkczogZ3FsYFxyXG4gICAgICBmcmFnbWVudCBTaG9wQ2FydEZpZWxkcyBvbiBTaG9wQ2FydCB7XHJcbiAgICAgICAgICBjcmVhdGVUaW1lXHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgaXNEZWxldGVcclxuICAgICAgICAgIGlzTmV4dFxyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgbnVtYmVyXHJcbiAgICAgICAgICBwcm9kdWN0SWRcclxuICAgICAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgICAgIHVzZXJJZFxyXG4gICAgICB9XHJcbiAgYCxcclxuICBEYXRhQ29uZmlnRmllbGRzOiBncWxgXHJcbiAgICBmcmFnbWVudCBEYXRhQ29uZmlnRmllbGRzIG9uIERhdGFDb25maWcge1xyXG4gICAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgICBpZFxyXG4gICAgICAgIGlzRGVsZXRlXHJcbiAgICAgICAgbmFtZVxyXG4gICAgICAgIHJlbWFya1xyXG4gICAgICAgIHR5cGVcclxuICAgICAgICB1cGRhdGVUaW1lXHJcbiAgICAgICAgdmFsdWVcclxuICAgIH1cclxuICBgLFxyXG4gIERpY3RGaWVsZHM6IGdxbGBcclxuICAgIGZyYWdtZW50IERpY3RGaWVsZHMgb24gRGljdCB7XHJcbiAgICAgICAgY29kZVxyXG4gICAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgICBkaWN0VHlwZUNvZGVcclxuICAgICAgICBpZFxyXG4gICAgICAgIGlzRGVsZXRlXHJcbiAgICAgICAgaXNEaXNhYmxlXHJcbiAgICAgICAgbmFtZVxyXG4gICAgICAgIHJlbWFya1xyXG4gICAgICAgIHNvcnRcclxuICAgICAgICB1cGRhdGVUaW1lXHJcbiAgICB9XHJcbiAgYCxcclxuICBHcm91cFF1ZXVlRmllbGRzOiBncWxgXHJcbiAgICAgIGZyYWdtZW50IEdyb3VwUXVldWVGaWVsZHMgb24gR3JvdXBRdWV1ZSB7XHJcbiAgICAgICAgICBjcmVhdGVUaW1lXHJcbiAgICAgICAgICBmaWxsQW1vdW50XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgaXNEZWxldGVcclxuICAgICAgICAgIG5hbWVcclxuICAgICAgICAgIHByb2R1Y3RJZFxyXG4gICAgICAgICAgdXBkYXRlVGltZVxyXG4gICAgICB9XHJcbiAgYCxcclxufVxyXG4iLCJpbXBvcnQge2dxbH0gZnJvbSAnYXBvbGxvLWJvb3N0J1xyXG5pbXBvcnQge2ZyYWdtZW50fSBmcm9tICcuL2ZyYWdtZW50J1xyXG5pbXBvcnQge0RpY3RUeXBlRW51bX0gZnJvbSAnLi4vLi4vc3NfY29tbW9uL2VudW0nXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VXNlckxpc3REb2MgPSBncWxgXHJcbiAgICBxdWVyeSByZWZhY3RvcmVkNjQzKCRkYXRhOiBVc2VyTGlzdElucHV0ISkge1xyXG4gICAgICAgIHVzZXJMaXN0KHVzZXJMaXN0SW5wdXQ6ICRkYXRhKSB7XHJcbiAgICAgICAgICAgIGxpc3Qge1xyXG4gICAgICAgICAgICAgICAgb3JkZXJDb2luTmV4dE1vbnRoXHJcbiAgICAgICAgICAgICAgICBvcmRlckNvaW5DdXJyZW50TW9udGhcclxuICAgICAgICAgICAgICAgIG9yZGVyQW1vdW50Q3VycmVudFllYXJcclxuICAgICAgICAgICAgICAgIC4uLnVzZXJJbmZvXHJcbiAgICAgICAgICAgICAgICAuLi5Vc2VyRmllbGRzXHJcbiAgICAgICAgICAgICAgICAuLi5vcmRlckluZm9cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0b3RhbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZyYWdtZW50IG9yZGVySW5mbyBvbiBVc2Vye1xyXG4gICAgICAgIG9yZGVySW5mb3tcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICBjcmVhdGVUaW1lXHJcbiAgICAgICAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgICAgICAgaXNEZWxldGVcclxuICAgICAgICAgICAgbnVtYmVyXHJcbiAgICAgICAgICAgIHN0YXRlXHJcbiAgICAgICAgICAgIGFjdHVhbGx5UGFpZFxyXG4gICAgICAgICAgICBhZGRyZXNzSWRcclxuICAgICAgICAgICAgcGF5bWVudE1ldGhvZENhcmRJZFxyXG4gICAgICAgICAgICBzdWJ0b3RhbFxyXG4gICAgICAgICAgICBjb3Vwb25EaXNjb3VudFxyXG4gICAgICAgICAgICB2aXBEaXNjb3VudFxyXG4gICAgICAgICAgICB0cmFuc3BvcnRhdGlvbkNvc3RzXHJcbiAgICAgICAgICAgIHNhbGVUYXhcclxuICAgICAgICAgICAgb3JkZXJJZFxyXG4gICAgICAgICAgICBkaXNjb3VudFByb2R1Y3RUb3RhbFxyXG4gICAgICAgICAgICBmaW5pc2hUaW1lXHJcbiAgICAgICAgICAgIHBpY2tVcFRpbWVcclxuICAgICAgICAgICAgcGlja1VwVHlwZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZyYWdtZW50IFVzZXJGaWVsZHMgb24gVXNlciB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBuYW1lXHJcbiAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgICBpc0RlbGV0ZVxyXG4gICAgICAgIHBhc3N3b3JkXHJcbiAgICAgICAgdHlwZVxyXG4gICAgfVxyXG4gICAgZnJhZ21lbnQgdXNlckluZm8gb24gVXNlcntcclxuICAgICAgICB1c2VySW5mb3tcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICBjcmVhdGVUaW1lXHJcbiAgICAgICAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgICAgICAgaXNEZWxldGVcclxuICAgICAgICAgICAgdXNlcklkXHJcbiAgICAgICAgICAgIHBob25lXHJcbiAgICAgICAgICAgIGVtYWlsXHJcbiAgICAgICAgICAgIHVzZXJMZXZlbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IGdldERhdGFDb25maWcgPSBncWxgXHJcbiAgICBxdWVyeSAoJGRhdGE6IERhdGFDb25maWdJdGVtSW5wdXQpIHtcclxuICAgICAgICBnZXREYXRhQ29uZmlnKGRhdGFDb25maWdJbnB1dDogJGRhdGEpIHtcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICBjcmVhdGVUaW1lXHJcbiAgICAgICAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgICAgICAgaXNEZWxldGVcclxuICAgICAgICAgICAgdHlwZVxyXG4gICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICByZW1hcmtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBob21lQ2Fyb3VzZWxJbWdzID0gZ3FsYFxyXG4gICAgcXVlcnkgcXVlcnlfcXVlcnlfdGVzdExvbmcxMzcoJGRhdGE6IERhdGFDb25maWdJdGVtSW5wdXQpIHtcclxuICAgICAgICBob21lQ2Fyb3VzZWxJbWdzKGRhdGFDb25maWdJbnB1dDogJGRhdGEpIHtcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICBjcmVhdGVUaW1lXHJcbiAgICAgICAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgICAgICAgaXNEZWxldGVcclxuICAgICAgICAgICAgdHlwZVxyXG4gICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICByZW1hcmtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBjYXRlZ29yeUxpc3QgPSBncWxgXHJcbiAgICBxdWVyeSBxdWVyeV9xdWVyeV90ZXN0TG9uZzU2NSgkZGF0YTogQ2F0ZWdvcnlMaXN0SW5wdXQpIHtcclxuICAgICAgICBjYXRlZ29yeUxpc3QoZGF0YTogJGRhdGEpIHtcclxuICAgICAgICAgICAgdG90YWxcclxuICAgICAgICAgICAgbGlzdCB7XHJcbiAgICAgICAgICAgICAgICAuLi5DYXRlZ29yeVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5DYXRlZ29yeUZpZWxkc31cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IGRvYyA9IHtcclxuICBnZXRVc2VyTGlzdERvYyxcclxuICBjYXRlZ29yeUxpc3QsXHJcbiAgZ2V0RGF0YUNvbmZpZyxcclxuICBob21lQ2Fyb3VzZWxJbWdzLFxyXG4gIHJlZ2lzdGVyVXNlcjogZ3FsYFxyXG4gICAgICBtdXRhdGlvbiBtdXRhdGlvbl9yZWdpc3RlclVzZTk5OCgkZGF0YTogVXNlckl0ZW1JbnB1dCkge1xyXG4gICAgICAgICAgcmVnaXN0ZXJVc2VyKGRhdGE6ICRkYXRhKSB7XHJcbiAgICAgICAgICAgICAgdG9rZW5cclxuICAgICAgICAgICAgICByZWZyZXNodG9rZW5cclxuICAgICAgICAgICAgICB1c2VyIHtcclxuICAgICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICBjcmVhdGVUaW1lXHJcbiAgICAgICAgICAgICAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgICAgICAgICAgICAgaXNEZWxldGVcclxuICAgICAgICAgICAgICAgICAgcGFzc3dvcmRcclxuICAgICAgICAgICAgICAgICAgdHlwZVxyXG4gICAgICAgICAgICAgICAgICB1c2VySW5mbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICBgLFxyXG4gIHJlZnJlc2hUb2tlbjogZ3FsYFxyXG4gICAgICBxdWVyeSByZWZyZXNoVG9rZW4oJGRhdGE6IFN0cmluZyEpIHtcclxuICAgICAgICAgIHJlZnJlc2hUb2tlbihyZWZyZXNodG9rZW46ICRkYXRhKSB7XHJcbiAgICAgICAgICAgICAgcmVmcmVzaHRva2VuXHJcbiAgICAgICAgICAgICAgdG9rZW5cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gIGAsXHJcbiAgbG9naW46IGdxbGBcclxuICAgICAgcXVlcnkgbG9naW4oJGRhdGE6IFVzZXJJdGVtSW5wdXQpIHtcclxuICAgICAgICAgIGxvZ2luKHVzZXI6ICRkYXRhKSB7XHJcbiAgICAgICAgICAgICAgdG9rZW5cclxuICAgICAgICAgICAgICByZWZyZXNodG9rZW5cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gIGAsXHJcbiAgb25lVXNlcjogZ3FsYFxyXG4gICAgICBxdWVyeSBvbmVVc2VyIHtcclxuICAgICAgICAgIG9uZVVzZXIge1xyXG4gICAgICAgICAgICAgIC4uLlVzZXJGaWVsZHNcclxuICAgICAgICAgICAgICB1c2VySW5mbyB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLlVzZXJJbmZvRmllbGRzXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICR7ZnJhZ21lbnQuVXNlckluZm9GaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuVXNlckZpZWxkc31cclxuICBgLFxyXG4gIG9yZGVyTGlzdDogZ3FsYFxyXG4gICAgICBxdWVyeSBvcmRlckxpc3QoJGRhdGE6IE9yZGVySW5wdXQpe1xyXG4gICAgICAgICAgb3JkZXJMaXN0IChvcmRlcklucHV0OiAkZGF0YSwgZnJvbVVzZXI6IHRydWUpIHtcclxuICAgICAgICAgICAgICBsaXN0IHtcclxuICAgICAgICAgICAgICAgICAgLi4uT3JkZXJJbmZvRmllbGRzXHJcbiAgICAgICAgICAgICAgICAgIHJPcmRlclByb2R1Y3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgLi4uUk9yZGVyUHJvZHVjdEZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uUHJvZHVjdEZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLkltZ0ZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAke2ZyYWdtZW50Lk9yZGVySW5mb0ZpZWxkc31cclxuICAgICAgJHtmcmFnbWVudC5ST3JkZXJQcm9kdWN0RmllbGRzfVxyXG4gICAgICAke2ZyYWdtZW50LlByb2R1Y3RGaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuSW1nRmllbGRzfVxyXG4gIGAsXHJcbiAgb3JkZXJEZXRhaWw6IGdxbGBcclxuICAgICAgcXVlcnkgKCRpZDogU3RyaW5nKSB7XHJcbiAgICAgICAgICBzZWxmQWRkcmVzczogZ2V0RGF0YUNvbmZpZyhkYXRhQ29uZmlnSW5wdXQ6IHtcclxuICAgICAgICAgICAgICB0eXBlOiBcIiR7RGljdFR5cGVFbnVtLlNlbGZBZGRyZXNzfVwiXHJcbiAgICAgICAgICB9KSB7XHJcbiAgICAgICAgICAgICAgLi4uRGF0YUNvbmZpZ0ZpZWxkc1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgb3JkZXJEZXRhaWwoaWQ6ICRpZCkge1xyXG4gICAgICAgICAgICAgIC4uLk9yZGVySW5mb0ZpZWxkc1xyXG4gICAgICAgICAgICAgIHJPcmRlclByb2R1Y3Qge1xyXG4gICAgICAgICAgICAgICAgICAuLi5ST3JkZXJQcm9kdWN0RmllbGRzXHJcbiAgICAgICAgICAgICAgICAgIHByb2R1Y3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgLi4uUHJvZHVjdEZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5JbWdGaWVsZHNcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB1c2VyIHtcclxuICAgICAgICAgICAgICAgICAgLi4uVXNlckZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICB1c2VySW5mbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAuLi5Vc2VySW5mb0ZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHVzZXJBZGRyZXNzIHtcclxuICAgICAgICAgICAgICAgICAgLi4uVXNlckFkZHJlc3NGaWVsZHNcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgdXNlclBheUNhcmQge1xyXG4gICAgICAgICAgICAgICAgICAuLi5Vc2VyUGF5Q2FyZEZpZWxkc1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAke2ZyYWdtZW50LkRhdGFDb25maWdGaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuT3JkZXJJbmZvRmllbGRzfVxyXG4gICAgICAke2ZyYWdtZW50LlJPcmRlclByb2R1Y3RGaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuUHJvZHVjdEZpZWxkc31cclxuICAgICAgJHtmcmFnbWVudC5JbWdGaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuVXNlckZpZWxkc31cclxuICAgICAgJHtmcmFnbWVudC5Vc2VySW5mb0ZpZWxkc31cclxuICAgICAgJHtmcmFnbWVudC5Vc2VyUGF5Q2FyZEZpZWxkc31cclxuICAgICAgJHtmcmFnbWVudC5Vc2VyQWRkcmVzc0ZpZWxkc31cclxuICBgLFxyXG4gIHVwZGF0ZVBhc3N3b3JkOiBncWxgXHJcbiAgICAgIG11dGF0aW9uICgkZGF0YTogVXBkYXRlUGFzc3dvcmRJbnB1dCkge1xyXG4gICAgICAgICAgdXBkYXRlUGFzc3dvcmQgKGRhdGE6ICRkYXRhKSB7XHJcbiAgICAgICAgICAgICAgdXNlciB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLlVzZXJGaWVsZHNcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYXV0aEJvZHkge1xyXG4gICAgICAgICAgICAgICAgICB0b2tlblxyXG4gICAgICAgICAgICAgICAgICByZWZyZXNodG9rZW5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJHtmcmFnbWVudC5Vc2VyRmllbGRzfVxyXG4gIGAsXHJcbiAgcGF5Q2FyZExpc3RPbmVVc2VyOiBncWxgXHJcbiAgICAgIHF1ZXJ5IHtcclxuICAgICAgICAgIHBheUNhcmRMaXN0T25lVXNlciB7XHJcbiAgICAgICAgICAgICAgLi4uVXNlclBheUNhcmRGaWVsZHNcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAke2ZyYWdtZW50LlVzZXJQYXlDYXJkRmllbGRzfVxyXG4gIGAsXHJcbiAgdXNlclBheUNhcmQ6IGdxbGBcclxuICAgICAgcXVlcnkgKCRkYXRhOiBVc2VyUGF5Q2FyZEl0ZW1JbnB1dCkge1xyXG4gICAgICAgICAgdXNlclBheUNhcmQgKHVzZXJQYXlDYXJkOiAkZGF0YSkge1xyXG4gICAgICAgICAgICAgIC4uLlVzZXJQYXlDYXJkRmllbGRzXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJHtmcmFnbWVudC5Vc2VyUGF5Q2FyZEZpZWxkc31cclxuICBgLFxyXG4gIHNhdmVVc2VyUGF5Q2FyZDogZ3FsYFxyXG4gICAgICBtdXRhdGlvbiAoJGRhdGE6IFVzZXJQYXlDYXJkSXRlbUlucHV0KXtcclxuICAgICAgICAgIHNhdmVVc2VyUGF5Q2FyZCAodXNlclBheUNhcmQ6ICRkYXRhKSB7XHJcbiAgICAgICAgICAgICAgLi4uVXNlclBheUNhcmRGaWVsZHNcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAke2ZyYWdtZW50LlVzZXJQYXlDYXJkRmllbGRzfVxyXG4gIGAsXHJcbiAgc2V0VXNlclBheUNhcmREZWZhdWx0OiBncWxgXHJcbiAgICAgIG11dGF0aW9uICgkZGF0YTogVXNlclBheUNhcmRJdGVtSW5wdXQpIHtcclxuICAgICAgICAgIHNldFVzZXJQYXlDYXJkRGVmYXVsdCAodXNlclBheUNhcmQ6ICRkYXRhKSB7XHJcbiAgICAgICAgICAgICAgLi4uVXNlclBheUNhcmRGaWVsZHNcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAke2ZyYWdtZW50LlVzZXJQYXlDYXJkRmllbGRzfVxyXG4gIGAsXHJcbiAgcGlja3VwQWRkcmVzczogZ3FsYFxyXG4gICAgICBxdWVyeSB7XHJcbiAgICAgICAgICBnZXREYXRhQ29uZmlnKGRhdGFDb25maWdJbnB1dDoge1xyXG4gICAgICAgICAgICAgIHR5cGU6IFwiJHtEaWN0VHlwZUVudW0uU2VsZkFkZHJlc3N9XCJcclxuICAgICAgICAgIH0pIHtcclxuICAgICAgICAgICAgICAuLi5EYXRhQ29uZmlnRmllbGRzXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBvbmVVc2VyIHtcclxuICAgICAgICAgICAgICAuLi5Vc2VyRmllbGRzXHJcbiAgICAgICAgICAgICAgdXNlckluZm8ge1xyXG4gICAgICAgICAgICAgICAgICAuLi5Vc2VySW5mb0ZpZWxkc1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAke2ZyYWdtZW50LlVzZXJJbmZvRmllbGRzfVxyXG4gICAgICAke2ZyYWdtZW50LkRhdGFDb25maWdGaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuVXNlckZpZWxkc31cclxuICBgLFxyXG4gIHVwZGF0ZVVzZXJJbmZvOiBncWxgXHJcbiAgICAgIG11dGF0aW9uICgkdXNlckluZm86IFVzZXJJbmZvSXRlbUlucHV0KSB7XHJcbiAgICAgICAgICB1cGRhdGVVc2VySW5mbyAodXNlckluZm86ICR1c2VySW5mbykge1xyXG4gICAgICAgICAgICAgIC4uLlVzZXJJbmZvRmllbGRzXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJHtmcmFnbWVudC5Vc2VySW5mb0ZpZWxkc31cclxuICBgLFxyXG4gIHVzZXJBZGRyZXNzTGlzdE9uZVVzZXI6IGdxbGBcclxuICAgICAgcXVlcnkge1xyXG4gICAgICAgICAgdXNlckFkZHJlc3NMaXN0T25lVXNlciB7XHJcbiAgICAgICAgICAgICAgLi4uVXNlckFkZHJlc3NGaWVsZHNcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAke2ZyYWdtZW50LlVzZXJBZGRyZXNzRmllbGRzfVxyXG4gIGAsXHJcbiAgdXNlckFkZHJlc3M6IGdxbGBcclxuICAgICAgcXVlcnkgKCRkYXRhOiBVc2VyQWRkcmVzc0l0ZW1JbnB1dCkge1xyXG4gICAgICAgICAgdXNlckFkZHJlc3MgKHVzZXJBZGRyZXNzOiAkZGF0YSkge1xyXG4gICAgICAgICAgICAgIC4uLlVzZXJBZGRyZXNzRmllbGRzXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJHtmcmFnbWVudC5Vc2VyQWRkcmVzc0ZpZWxkc31cclxuICBgLFxyXG4gIHNhdmVVc2VyQWRkcmVzczogZ3FsYFxyXG4gICAgICBtdXRhdGlvbiAoJGRhdGE6IFVzZXJBZGRyZXNzSXRlbUlucHV0KXtcclxuICAgICAgICAgIHNhdmVVc2VyQWRkcmVzcyAodXNlckFkZHJlc3M6ICRkYXRhKSB7XHJcbiAgICAgICAgICAgICAgLi4uVXNlckFkZHJlc3NGaWVsZHNcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAke2ZyYWdtZW50LlVzZXJBZGRyZXNzRmllbGRzfVxyXG4gIGAsXHJcbiAgc2V0VXNlckFkZHJlc3NEZWZhdWx0OiBncWxgXHJcbiAgICAgIG11dGF0aW9uICgkZGF0YTogVXNlckFkZHJlc3NJdGVtSW5wdXQpIHtcclxuICAgICAgICAgIHNldFVzZXJBZGRyZXNzRGVmYXVsdCAodXNlckFkZHJlc3M6ICRkYXRhKSB7XHJcbiAgICAgICAgICAgICAgLi4uVXNlckFkZHJlc3NGaWVsZHNcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAke2ZyYWdtZW50LlVzZXJBZGRyZXNzRmllbGRzfVxyXG4gIGAsXHJcbiAgcHJvZHVjdHNJbkNhdGVnb3J5OiBncWxgXHJcbiAgICAgIHF1ZXJ5ICgkZGF0YTogQ2F0ZWdvcnlJdGVtSW5wdXQsICRwcm9kdWN0SXRlbUlucHV0OiBQcm9kdWN0SXRlbUlucHV0KSB7XHJcbiAgICAgICAgICBwcm9kdWN0c0luQ2F0ZWdvcnkoY2F0ZWdvcnlJdGVtSW5wdXQ6ICRkYXRhLCBwcm9kdWN0SXRlbUlucHV0OiAkcHJvZHVjdEl0ZW1JbnB1dCkge1xyXG4gICAgICAgICAgICAgIC4uLlByb2R1Y3RGaWVsZHNcclxuICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAuLi5JbWdGaWVsZHNcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjYXRlZ29yeUxpc3QoZGF0YToge1xyXG4gICAgICAgICAgICAgIGNhdGVnb3J5OiB7XHJcbiAgICAgICAgICAgICAgICAgIHBhcmVudENhdGVnb3J5OiAkZGF0YVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pIHtcclxuICAgICAgICAgICAgICB0b3RhbFxyXG4gICAgICAgICAgICAgIGxpc3Qge1xyXG4gICAgICAgICAgICAgICAgICAuLi5DYXRlZ29yeVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAke2ZyYWdtZW50LlByb2R1Y3RGaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuSW1nRmllbGRzfVxyXG4gICAgICAke2ZyYWdtZW50LkNhdGVnb3J5RmllbGRzfVxyXG4gIGAsXHJcbiAgY2F0ZWdvcnlMZXZlbDogZ3FsYFxyXG4gICAgICBxdWVyeSAoJGRhdGE6IENhdGVnb3J5SXRlbUlucHV0KSB7XHJcbiAgICAgICAgICBjYXRlZ29yeUxldmVsKGNhdGVnb3J5SXRlbUlucHV0OiAkZGF0YSlcclxuICAgICAgfVxyXG4gIGAsXHJcbiAgb25lQ2F0ZWdvcnk6IGdxbGBcclxuICAgICAgcXVlcnkgKCRkYXRhOiBDYXRlZ29yeUl0ZW1JbnB1dCkge1xyXG4gICAgICAgICAgb25lQ2F0ZWdvcnkoZGF0YTogJGRhdGEpIHtcclxuICAgICAgICAgICAgICAuLi5DYXRlZ29yeVxyXG4gICAgICAgICAgICAgIHBhcmVudENhdGVnb3J5IHtcclxuICAgICAgICAgICAgICAgICAgLi4uQ2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgICAgcGFyZW50Q2F0ZWdvcnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgLi4uQ2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAke2ZyYWdtZW50LkNhdGVnb3J5RmllbGRzfVxyXG4gIGAsXHJcbiAgcHJvZHVjdExpc3Q6IGdxbGBcclxuICAgICAgcXVlcnkgKCRwcm9kdWN0SW5wdXQ6IFByb2R1Y3RJdGVtSW5wdXQsICRvcmRlckJ5SW5wdXQ6IE9yZGVyQnlJbnB1dCkge1xyXG4gICAgICAgICAgcHJvZHVjdExpc3QocHJvZHVjdElucHV0OiAkcHJvZHVjdElucHV0LCBvcmRlckJ5SW5wdXQ6ICRvcmRlckJ5SW5wdXQpIHtcclxuICAgICAgICAgICAgICB0b3RhbFxyXG4gICAgICAgICAgICAgIGxpc3Qge1xyXG4gICAgICAgICAgICAgICAgICAuLi5Qcm9kdWN0RmllbGRzXHJcbiAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAuLi5JbWdGaWVsZHNcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAke2ZyYWdtZW50LlByb2R1Y3RGaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuSW1nRmllbGRzfVxyXG4gIGAsXHJcbiAgdXBkYXRlTnVtU2hvcENhcnQ6IGdxbGBcclxuICAgICAgbXV0YXRpb24gKCRzaG9wQ2FydDogU2hvcENhcnRJdGVtSW5wdXQsICR1cGRhdGVOdW06IEZsb2F0KSB7XHJcbiAgICAgICAgICB1cGRhdGVOdW1TaG9wQ2FydCAoc2hvcENhcnQ6ICRzaG9wQ2FydCwgdXBkYXRlTnVtOiAkdXBkYXRlTnVtKSB7XHJcbiAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICBudW1iZXJcclxuICAgICAgICAgICAgICBwcm9kdWN0IHtcclxuICAgICAgICAgICAgICAgICAgLi4uUHJvZHVjdEZpZWxkc1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB1c2VyIHtcclxuICAgICAgICAgICAgICAgICAgLi4uVXNlckZpZWxkc1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAke2ZyYWdtZW50LlByb2R1Y3RGaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuVXNlckZpZWxkc31cclxuICBgLFxyXG4gIHVzZXJTaG9wQ2FydExpc3Q6IGdxbGBcclxuICAgICAgcXVlcnkge1xyXG4gICAgICAgICAgc2hvcENhcnRMaXN0IHtcclxuICAgICAgICAgICAgICAuLi5TaG9wQ2FydEZpZWxkc1xyXG4gICAgICAgICAgICAgIHByb2R1Y3Qge1xyXG4gICAgICAgICAgICAgICAgICAuLi5Qcm9kdWN0RmllbGRzXHJcbiAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAuLi5JbWdGaWVsZHNcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAke2ZyYWdtZW50LlNob3BDYXJ0RmllbGRzfVxyXG4gICAgICAke2ZyYWdtZW50LlByb2R1Y3RGaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuSW1nRmllbGRzfVxyXG4gIGAsXHJcbiAgdXBkYXRlU2hvcENhcnQ6IGdxbGBcclxuICAgICAgbXV0YXRpb24gKCRzaG9wQ2FydDogU2hvcENhcnRJdGVtSW5wdXQpe1xyXG4gICAgICAgICAgdXBkYXRlU2hvcENhcnQgKHNob3BDYXJ0OiAkc2hvcENhcnQpIHtcclxuICAgICAgICAgICAgICAuLi5TaG9wQ2FydEZpZWxkc1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICR7ZnJhZ21lbnQuU2hvcENhcnRGaWVsZHN9XHJcbiAgYCxcclxuICBvcmRlckNvbmZpcm1JbmZvOiBncWxgXHJcbiAgICAgIHF1ZXJ5IHtcclxuICAgICAgICAgIGdldERhdGFDb25maWcoZGF0YUNvbmZpZ0lucHV0OiB7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCIke0RpY3RUeXBlRW51bS5TZWxmQWRkcmVzc31cIlxyXG4gICAgICAgICAgfSkge1xyXG4gICAgICAgICAgICAgIC4uLkRhdGFDb25maWdGaWVsZHNcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIG9uZVVzZXIge1xyXG4gICAgICAgICAgICAgIC4uLlVzZXJGaWVsZHNcclxuICAgICAgICAgICAgICB1c2VySW5mbyB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLlVzZXJJbmZvRmllbGRzXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcGF5Q2FyZExpc3RPbmVVc2VyIHtcclxuICAgICAgICAgICAgICAuLi5Vc2VyUGF5Q2FyZEZpZWxkc1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdXNlckFkZHJlc3NMaXN0T25lVXNlciB7XHJcbiAgICAgICAgICAgICAgLi4uVXNlckFkZHJlc3NGaWVsZHNcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGZyZWlnaHRDb25maWc6IGdldERhdGFDb25maWcgKGRhdGFDb25maWdJbnB1dDoge1xyXG4gICAgICAgICAgICAgIHR5cGU6IFwiJHtEaWN0VHlwZUVudW0uRnJlaWdodH1cIlxyXG4gICAgICAgICAgfSkge1xyXG4gICAgICAgICAgICAgIC4uLkRhdGFDb25maWdGaWVsZHNcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHVzZXJMZXZlbExpc3Q6IGdldERpY3RMaXN0IChkaWN0SW5wdXQ6IHtcclxuICAgICAgICAgICAgICBkaWN0VHlwZUNvZGU6IFwiVXNlckxldmVsXCJcclxuICAgICAgICAgIH0pIHtcclxuICAgICAgICAgICAgICAuLi5EaWN0RmllbGRzXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJHtmcmFnbWVudC5Vc2VyQWRkcmVzc0ZpZWxkc31cclxuICAgICAgJHtmcmFnbWVudC5Vc2VyUGF5Q2FyZEZpZWxkc31cclxuICAgICAgJHtmcmFnbWVudC5Vc2VySW5mb0ZpZWxkc31cclxuICAgICAgJHtmcmFnbWVudC5Vc2VyRmllbGRzfVxyXG4gICAgICAke2ZyYWdtZW50LkRhdGFDb25maWdGaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuRGljdEZpZWxkc31cclxuICBgLFxyXG4gIHNhdmVPcmRlcjogZ3FsYFxyXG4gICAgICBtdXRhdGlvbiAoJG9yZGVySW5mb0l0ZW1JbnB1dDogT3JkZXJJbmZvSXRlbUlucHV0KSB7XHJcbiAgICAgICAgICBzYXZlT3JkZXIgKG9yZGVySW5mb0l0ZW1JbnB1dDogJG9yZGVySW5mb0l0ZW1JbnB1dCkge1xyXG4gICAgICAgICAgICAgIC4uLk9yZGVySW5mb0ZpZWxkc1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICR7ZnJhZ21lbnQuT3JkZXJJbmZvRmllbGRzfVxyXG4gIGAsXHJcbiAgZGljdExpc3Q6IGdxbGBcclxuICAgICAgcXVlcnkgKCRkYXRhOiBEaWN0SW5wdXQpIHtcclxuICAgICAgICAgIGdldERpY3RMaXN0IChkaWN0SW5wdXQ6ICRkYXRhKSB7XHJcbiAgICAgICAgICAgICAgLi4uRGljdEZpZWxkc1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICR7ZnJhZ21lbnQuRGljdEZpZWxkc31cclxuICBgLFxyXG4gIGxpbWl0VGltZURhdGE6IGdxbGBcclxuICAgIHF1ZXJ5IHtcclxuICAgICAgICBsaW1pdFRpbWVEYXRhOiBnZXREYXRhQ29uZmlnIChkYXRhQ29uZmlnSW5wdXQ6IHtcclxuICAgICAgICAgICAgdHlwZTogXCIke0RpY3RUeXBlRW51bS5Qcm9tb3Rpb25GbGFzaFNhbGV9XCJcclxuICAgICAgICB9KSB7XHJcbiAgICAgICAgICAgIC4uLkRhdGFDb25maWdGaWVsZHNcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAke2ZyYWdtZW50LkRhdGFDb25maWdGaWVsZHN9XHJcbiAgYCxcclxuICBwcm9kdWN0TGlzdEJ5SWRzOiBncWxgXHJcbiAgICBxdWVyeSAoJGlkczogW1N0cmluZ10pIHtcclxuICAgICAgICBwcm9kdWN0TGlzdEJ5SWRzIChpZHM6ICRpZHMpIHtcclxuICAgICAgICAgICAgdG90YWxcclxuICAgICAgICAgICAgbGlzdCB7XHJcbiAgICAgICAgICAgICAgICAuLi5Qcm9kdWN0RmllbGRzXHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLkltZ0ZpZWxkc1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5Qcm9kdWN0RmllbGRzfVxyXG4gICAgJHtmcmFnbWVudC5JbWdGaWVsZHN9XHJcbiAgYCxcclxuICBncm91cFF1ZXVlTGlzdDogZ3FsYFxyXG4gICAgcXVlcnkgKCRncm91cFF1ZXVlSXRlbUlucHV0OiBHcm91cFF1ZXVlSXRlbUlucHV0KSB7XHJcbiAgICAgICAgZ3JvdXBRdWV1ZUxpc3QgKGdyb3VwUXVldWVJdGVtSW5wdXQ6ICRncm91cFF1ZXVlSXRlbUlucHV0KSB7XHJcbiAgICAgICAgICAgIC4uLkdyb3VwUXVldWVGaWVsZHNcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAke2ZyYWdtZW50Lkdyb3VwUXVldWVGaWVsZHN9XHJcbiAgYCxcclxuICB1cGRhdGVPcmRlcjogZ3FsYFxyXG4gICAgbXV0YXRpb24gKCRvcmRlckluZm9JdGVtSW5wdXQ6IE9yZGVySW5mb0l0ZW1JbnB1dCkge1xyXG4gICAgICAgIHVwZGF0ZU9yZGVyIChvcmRlckluZm9JdGVtSW5wdXQ6ICRvcmRlckluZm9JdGVtSW5wdXQpIHtcclxuICAgICAgICAgICAgLi4uT3JkZXJJbmZvRmllbGRzXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5PcmRlckluZm9GaWVsZHN9XHJcbiAgYCxcclxufVxyXG5cclxuIiwiZXhwb3J0IGVudW0gUHJvbW9Db2RlVHlwZUVudW0ge1xyXG4gIERhcmVuQ2FyZCA9ICdEYXJlbkNhcmQnLFxyXG4gIFByb21vQ29kZSA9ICdQcm9tb0NvZGUnLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBEaXNjb3VudFR5cGVFbnVtIHtcclxuICBQZXJjZW50YWdlID0gJ1BlcmNlbnRhZ2UnLFxyXG4gIEFtb3VudCA9ICdBbW91bnQnLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBTUyB7XHJcbiAgU1MsXHJcbiAgU1MyLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBEaXNjb3VudENvbmRpdGlvbkVudW0ge1xyXG4gIE5vID0gJ05vJyxcclxuICBBbW91bnQgPSAnQW1vdW50JyxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gUHJvZHVjdFN1cHBsZW1lbnQge1xyXG4gIF8sXHJcbiAgUGVuZGluZyxcclxuICBGaW5pc2gsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQcm9kdWN0U3VwcGxlbWVudFN0cmluZzogYW55ID0ge1xyXG4gIDE6ICfphY3otKfkuK0nLFxyXG4gIDI6ICflt7LlrozmiJAnLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBPcmRlclN0YXRlIHtcclxuICBPcmRlcmVkID0gMSxcclxuICBQYWlkID0gMixcclxuICBQaWNraW5nID0gMyxcclxuICBQaWNrZWRVcCA9IDQsXHJcbiAgRmluaXNoID0gNSxcclxuICBDYW5jZWwgPSA2LFxyXG59XHJcblxyXG4vLyAxOuS7o+S7mOasviAyOuW3suS7mOasviAzOuW3suWPkei0pyA0OuW3suaUtui0pyA1OuW3suWPlua2iCA2OuW3suWujOaIkCA3OuW3sumAgOWbnlxyXG5jb25zdCBfczoge1xyXG4gIFtrZXkgaW4gbnVtYmVyXTogc3RyaW5nXHJcbn0gPSB7XHJcbiAgMTogJ+W+heS7mOasvicsXHJcbiAgMjogJ+W3suS7mOasvicsXHJcbiAgMzogJ+W3suWPkei0pycsXHJcbiAgNDogJ+W3suaUtui0pycsXHJcbiAgNTogJ+W3suWPlua2iCcsXHJcbiAgNjogJ+W3suWujOaIkCcsXHJcbiAgNzogJ+W3sumAgOWbnicsXHJcbn1cclxuZXhwb3J0IGNvbnN0IG9yZGVyU3RhdGVUb1N0cmluZyA9IChzOiBudW1iZXIgfCBudWxsID0gMCkgPT4ge1xyXG4gIHJldHVybiBfcz8uWyhzID8/IDApXSA/PyAnJ1xyXG59XHJcblxyXG4vLyDphY3nva7nrqHnkIZcclxuZXhwb3J0IGVudW0gRGljdFR5cGVFbnVtIHtcclxuICBHcm91cFByZWNpc2lvbiA9ICdHcm91cFByZWNpc2lvbicsXHJcbiAgVXNlckxldmVsID0gJ1VzZXJMZXZlbCcsXHJcbiAgRnJlaWdodCA9ICdGcmVpZ2h0JyxcclxuICBIZWxwRG9jdW1lbnRhdGlvblR5cGUgPSAnSGVscERvY3VtZW50YXRpb25UeXBlJyxcclxuICBIZWxwRG9jdW1lbnRhdGlvbiA9ICdIZWxwRG9jdW1lbnRhdGlvbicsXHJcbiAgUHJvbW90aW9uVGhlbWVTZWxlY3QgPSAnUHJvbW90aW9uVGhlbWVTZWxlY3QnLFxyXG4gIFByb21vdGlvbkZsYXNoU2FsZSA9ICdQcm9tb3Rpb25GbGFzaFNhbGUnLFxyXG4gIEhvbWVDYXJvdXNlbCA9ICdIb21lQ2Fyb3VzZWwnLFxyXG4gIE9yZGVyU3RhdGUgPSAnT3JkZXJTdGF0ZScsXHJcbiAgU2VsZkFkZHJlc3MgPSAnU2VsZkFkZHJlc3MnLFxyXG4gIEFwcE1vZHVsZSA9ICdBcHBNb2R1bGUnLFxyXG59XHJcblxyXG4vLyDova7mkq3lm77lhbPogZTpoblcclxuZXhwb3J0IGVudW0gUmVsYXRlZE9ialR5cGVFbnVtIHtcclxuICBQcm9tb0NvZGUgPSAnUHJvbW9Db2RlJyxcclxuICBQcm9tb3Rpb25GbGFzaFNhbGUgPSAnUHJvbW90aW9uRmxhc2hTYWxlJyxcclxuICBQcm9tb3Rpb25UaGVtZVNlbGVjdCA9ICdQcm9tb3Rpb25UaGVtZVNlbGVjdCcsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEFwcEZvb3RCYXIge1xyXG4gIGhvbWUgPSAnaG9tZScsXHJcbiAgZ3JvdXAgPSAnZ3JvdXAnLFxyXG4gIGNhcmQgPSAnY2FyZCcsXHJcbiAgY2FydCA9ICdjYXJ0JyxcclxuICBtZSA9ICdtZSdcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQXBwTW9kdWxlVHlwZUVudW0ge1xyXG4gIGNhdGVnb3J5U2VsZWN0aW9uID0gJ2NhdGVnb3J5U2VsZWN0aW9uJyxcclxuICBsaW1pdFRpbWUgPSAnbGltaXRUaW1lJyxcclxuICBzYWxlc1JhbmsgPSAnc2FsZXNSYW5rJyxcclxuICB0aGVtZVNlbGVjdGlvbiA9ICd0aGVtZVNlbGVjdGlvbicsXHJcbiAgbWF5TGlrZSA9ICdtYXlMaWtlJyxcclxuICBsaW5lUmFua2luZyA9ICdsaW5lUmFua2luZycsXHJcbiAgdG9wUmFua2luZyA9ICd0b3BSYW5raW5nJyxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENhdGVnb3J5Um9vdE5hbWUgPSAncm9vdCdcclxuXHJcbmV4cG9ydCBjb25zdCBvcmRlclN0YXRlS2V5czogc3RyaW5nW10gPSBPYmplY3QudmFsdWVzKE9yZGVyU3RhdGUpIGFzIHN0cmluZ1tdXHJcblxyXG5leHBvcnQgY29uc3QgUHJvdmluY2VEYXRhID0gW1xyXG4gIFsnQUwnLCAnQWxhYmFtYSddLFxyXG4gIFsnQUsnLCAnQWxhc2thJ10sXHJcbiAgWydBWicsICdBcml6b25hJ10sXHJcbiAgWydBUicsICdBcmthbnNhcyddLFxyXG4gIFsnQ0EnLCAnQ2FsaWZvcm5pYSddLFxyXG4gIFsnQ08nLCAnQ29sb3JhZG8nXSxcclxuICBbJ0NUJywgJ0Nvbm5lY3RpY3V0J10sXHJcbiAgWydERScsICdEZWxhd2FyZSddLFxyXG4gIFsnREMnLCAnRGlzdHJpY3QgT2YgQ29sdW1iaWEnXSxcclxuICBbJ0ZMJywgJ0Zsb3JpZGEnXSxcclxuICBbJ0dBJywgJ0dlb3JnaWEnXSxcclxuICBbJ0hJJywgJ0hhd2FpaSddLFxyXG4gIFsnSUQnLCAnSWRhaG8nXSxcclxuICBbJ0lMJywgJ0lsbGlub2lzJ10sXHJcbiAgWydJTicsICdJbmRpYW5hJ10sXHJcbiAgWydJQScsICdJb3dhJ10sXHJcbiAgWydLUycsICdLYW5zYXMnXSxcclxuICBbJ0tZJywgJ0tlbnR1Y2t5J10sXHJcbiAgWydMQScsICdMb3Vpc2lhbmEnXSxcclxuICBbJ01FJywgJ01haW5lJ10sXHJcbiAgWydNRCcsICdNYXJ5bGFuZCddLFxyXG4gIFsnTUEnLCAnTWFzc2FjaHVzZXR0cyddLFxyXG4gIFsnTUknLCAnTWljaGlnYW4nXSxcclxuICBbJ01OJywgJ01pbm5lc290YSddLFxyXG4gIFsnTVMnLCAnTWlzc2lzc2lwcGknXSxcclxuICBbJ01PJywgJ01pc3NvdXJpJ10sXHJcbiAgWydNVCcsICdNb250YW5hJ10sXHJcbiAgWydORScsICdOZWJyYXNrYSddLFxyXG4gIFsnTlYnLCAnTmV2YWRhJ10sXHJcbiAgWydOSCcsICdOZXcgSGFtcHNoaXJlJ10sXHJcbiAgWydOSicsICdOZXcgSmVyc2V5J10sXHJcbiAgWydOTScsICdOZXcgTWV4aWNvJ10sXHJcbiAgWydOWScsICdOZXcgWW9yayddLFxyXG4gIFsnTkMnLCAnTm9ydGggQ2Fyb2xpbmEnXSxcclxuICBbJ05EJywgJ05vcnRoIERha290YSddLFxyXG4gIFsnT0gnLCAnT2hpbyddLFxyXG4gIFsnT0snLCAnT2tsYWhvbWEnXSxcclxuICBbJ09SJywgJ09yZWdvbiddLFxyXG4gIFsnUEEnLCAnUGVubnN5bHZhbmlhJ10sXHJcbiAgWydSSScsICdSaG9kZSBJc2xhbmQnXSxcclxuICBbJ1NDJywgJ1NvdXRoIENhcm9saW5hJ10sXHJcbiAgWydTRCcsICdTb3V0aCBEYWtvdGEnXSxcclxuICBbJ1ROJywgJ1Rlbm5lc3NlZSddLFxyXG4gIFsnVFgnLCAnVGV4YXMnXSxcclxuICBbJ1VUJywgJ1V0YWgnXSxcclxuICBbJ1ZUJywgJ1Zlcm1vbnQnXSxcclxuICBbJ1ZBJywgJ1ZpcmdpbmlhJ10sXHJcbiAgWydXQScsICdXYXNoaW5ndG9uJ10sXHJcbiAgWydXVicsICdXZXN0IFZpcmdpbmlhJ10sXHJcbiAgWydXSScsICdXaXNjb25zaW4nXSxcclxuICBbJ1dZJywgJ1d5b21pbmcnXSxcclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFBpY2tVcFR5cGVOYW1lID0gKHR5cGU6IHN0cmluZyB8ICdTZWxmJyB8ICdEZWxpdmVyeScpID0+IHtcclxuICByZXR1cm4gKHtcclxuICAgIFNlbGY6ICfoh6rlj5YnLFxyXG4gICAgRGVsaXZlcnk6ICfphY3pgIEnLFxyXG4gIH0pW3R5cGUgYXMgJ1NlbGYnIHwgJ0RlbGl2ZXJ5J10gPz8gJydcclxufVxyXG5leHBvcnQgY29uc3QgUGlja1VwVHlwZUVudW0gPSB7XHJcbiAgU2VsZjogJ1NlbGYnLFxyXG4gIERlbGl2ZXJ5OiAnRGVsaXZlcnknLFxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBtcFN0eWxlID0ge1xyXG4gIHJlZDogJyNGODQwMzMnLFxyXG4gIHNoYWRvdzoge1xyXG4gICAgMTogJzAgMXB4IDFweCAwIHJnYmEoMCwwLDAsMC4xNCksIDAgMnB4IDFweCAtMXB4IHJnYmEoMCwwLDAsMC4xMiksIDAgMXB4IDNweCAwIHJnYmEoMCwwLDAsMC4yMCknLFxyXG4gIH0sXHJcbn1cclxuIiwiaW1wb3J0IHsgTWF5YmUgfSBmcm9tIFwiLi4vZ3JhcGhxbFR5cGVzL3R5cGVzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgbHMgPSAoa2V5OiBNYXliZTxzdHJpbmc+IHwgdW5kZWZpbmVkKSA9PiBrZXkgPz8gJydcclxuIiwiXHJcbmV4cG9ydCBjb25zdCBpc0RldiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnXHJcblxyXG5leHBvcnQgY29uc3Qgc3NMb2cgPSAoZGF0YTogYW55KSA9PiB7XHJcbiAgaWYgKGlzRGV2KSB7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gIH1cclxuICByZXR1cm4gZGF0YVxyXG59XHJcbiIsImltcG9ydCBnZXRDb25maWcgZnJvbSAnbmV4dC9jb25maWcnXHJcblxyXG5jb25zdCBjb25maWcgPSBnZXRDb25maWcoKVxyXG5cclxuY29uc3QgaW1nRG9tYWluID0gY29uZmlnPy5wdWJsaWNSdW50aW1lQ29uZmlnPy5pbWdEb21haW4gPz8gJ2h0dHA6Ly8xMjcuMC4wLjE6NDQ2NC8nXHJcblxyXG5leHBvcnQgY29uc3QgZGVhbEltZ1VybCA9IChzcmM6IHN0cmluZyB8IHVuZGVmaW5lZCB8IG51bGwgPSAnJykgPT4ge1xyXG4gIGlmIChzcmM/LmluY2x1ZGVzKCdibG9iOicpKSB7XHJcbiAgICByZXR1cm4gc3JjXHJcbiAgfVxyXG4gIHJldHVybiBgJHtpbWdEb21haW59JHtzcmN9YFxyXG59XHJcbiIsIi8qIGdsb2JhbCBsb2NhbFN0b3JhZ2UgKi9cclxuZXhwb3J0IGNvbnN0IHNldFRva2VuID0gKHRva2VuOiBzdHJpbmcsIG5hbWUgPSAndG9rZW4nKSA9PiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShuYW1lLCB0b2tlbilcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRUb2tlbiA9IChuYW1lID0gJ3Rva2VuJykgPT4gbG9jYWxTdG9yYWdlLmdldEl0ZW0obmFtZSkgfHwgJydcclxuIiwiaW1wb3J0IGZvcm1hdCBmcm9tICdkYXRlLWZucy9mb3JtYXQnXHJcbmltcG9ydCBzZXQgZnJvbSAnbG9kYXNoL3NldCdcclxuaW1wb3J0IHtjbG9uZURlZXAsIFByb3BlcnR5UGF0aCwgaXNGdW5jdGlvbiwgZ2V0LCBpc0FycmF5LCBtZXJnZVdpdGgsIGlzU3RyaW5nfSBmcm9tICdsb2Rhc2gnXHJcbmltcG9ydCB7TWF5YmV9IGZyb20gJy4uL2dyYXBocWxUeXBlcy90eXBlcydcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRPYmplY3RVUkwgPSAoZmlsZTogYW55KSA9PiB7XHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gIHJldHVybiB3aW5kb3c/LmNyZWF0ZU9iamVjdFVSTD8uKGZpbGUpXHJcbiAgICAgID8/IHdpbmRvdz8uVVJMPy5jcmVhdGVPYmplY3RVUkw/LihmaWxlKVxyXG4gICAgICA/PyB3aW5kb3c/LndlYmtpdFVSTD8uY3JlYXRlT2JqZWN0VVJMPy4oZmlsZSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHBhcnNlRmxvYXRGb3JJbnB1dCA9ICh2YWx1ZTogYW55KSA9PiB7XHJcbiAgaWYgKHZhbHVlID09PSAnLScgfHwgdmFsdWUgPT09ICcnKSByZXR1cm4gdmFsdWVcclxuICB0cnkge1xyXG4gICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5lcnJvcihlKVxyXG4gIH1cclxufVxyXG5cclxudHlwZSBTZXREYXRhPFMgPSBhbnk+ID0gUyB8ICgocHJlRGF0YTogUykgPT4gUylcclxuXHJcbmV4cG9ydCBjb25zdCBmcFNldCA9IDxFID0gYW55PihvcmlnaW46IGFueSwgcGF0aDogYW55LCB2YWx1ZTogU2V0RGF0YTxFPikgPT4ge1xyXG4gIGxldCBuZXdEYXRhID0gY2xvbmVEZWVwKG9yaWdpbilcclxuICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcclxuICAgIGNvbnN0IG9sZERhdGEgPSBnZXQob3JpZ2luLCBwYXRoKVxyXG4gICAgc2V0KG5ld0RhdGEsIHBhdGgsIHZhbHVlKG9sZERhdGEpKVxyXG4gIH0gZWxzZSB7XHJcbiAgICBzZXQobmV3RGF0YSwgcGF0aCwgdmFsdWUpXHJcbiAgfVxyXG4gIHJldHVybiBuZXdEYXRhXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkZWxheSA9ICh0aW1lOiBudW1iZXIpID0+IChuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgdGltZSkpKVxyXG5cclxuZXhwb3J0IGNvbnN0IGZwU2V0UHJlOiA8VCBleHRlbmRzIG9iamVjdD4ocGF0aDogUHJvcGVydHlQYXRoLCBuZXdWYWx1ZTogU2V0RGF0YSkgPT4gKG9yaWdpbjogVCkgPT4gVCA9IChwYXRoOiBhbnksIHZhbHVlKSA9PiAob3JpZ2luKSA9PiB7XHJcbiAgbGV0IG5ld0RhdGEgPSBjbG9uZURlZXAob3JpZ2luKVxyXG4gIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xyXG4gICAgY29uc3Qgb2xkRGF0YSA9IGdldChvcmlnaW4sIHBhdGgpXHJcbiAgICBzZXQobmV3RGF0YSwgcGF0aCwgdmFsdWUob2xkRGF0YSkpXHJcbiAgfSBlbHNlIHtcclxuICAgIHNldChuZXdEYXRhLCBwYXRoLCB2YWx1ZSlcclxuICB9XHJcbiAgcmV0dXJuIG5ld0RhdGFcclxufVxyXG5cclxuY29uc3QgY3VzdG9taXplciA9IChvYmpWYWx1ZTogYW55LCBzcmNWYWx1ZTogYW55KSA9PiB7XHJcbiAgaWYgKGlzQXJyYXkoc3JjVmFsdWUpKSB7XHJcbiAgICByZXR1cm4gc3JjVmFsdWVcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmcE1lcmdlOiA8VE9iamVjdCwgVFNvdXJjZTE+KFxyXG4gICAgb3JpZ2luOiBUT2JqZWN0LFxyXG4gICAgbmV3VmFsdWU6IFRTb3VyY2UxLFxyXG4pID0+IFRPYmplY3QgJiBUU291cmNlMSA9IChvcmlnaW4sIG5ld1ZhbHVlKSA9PiB7XHJcbiAgcmV0dXJuIG1lcmdlV2l0aCh7fSwgb3JpZ2luLCBuZXdWYWx1ZSwgY3VzdG9taXplcilcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGZwTWVyZ2VQcmU6IDxQcmUsIE5ldyBleHRlbmRzIFBhcnRpYWw8UHJlPj4obmV3VmFsdWU6IE5ldykgPT4gKG9yaWdpbjogUHJlKSA9PiBQcmUgJiBOZXcgPSAobmV3VmFsdWUpID0+IChwcmUpID0+IG1lcmdlV2l0aCh7fSwgcHJlLCBuZXdWYWx1ZSwgY3VzdG9taXplcilcclxuXHJcbmV4cG9ydCBjb25zdCBmcFJlbW92ZSA9IChhcnI6IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gIGlmICghYXJyKSByZXR1cm4gW11cclxuICByZXR1cm4gW1xyXG4gICAgLi4uYXJyPy5zbGljZSgwLCBpbmRleCksXHJcbiAgICAuLi5hcnI/LnNsaWNlKGluZGV4ICsgMSwgYXJyPy5sZW5ndGgpLFxyXG4gIF1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRlYWxOdW1iZXJaZXJvID0gKGxlbmd0aDogbnVtYmVyKSA9PiAobnVtOiBudW1iZXIpID0+IHtcclxuICBjb25zdCBfcyA9IGAke251bSA/PyAnJ31gXHJcbiAgcmV0dXJuIEFycmF5KGxlbmd0aCAtIF9zLmxlbmd0aCkuZmlsbCgnMCcpLmpvaW4oJycpICsgX3NcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGZvcm1hdERhdGUgPSAoZGF0ZTogYW55ID0gJycsIGZvcm1hdFN0cmluZyA9ICdZWVlZLU1NLWRkIEhIOm1tOnNzJykgPT4ge1xyXG4gIGlmICghZGF0ZSkge1xyXG4gICAgcmV0dXJuICcnXHJcbiAgfVxyXG4gIGlmIChpc1N0cmluZyhkYXRlKSkge1xyXG4gICAgcmV0dXJuIGZvcm1hdChuZXcgRGF0ZShkYXRlKSwgZm9ybWF0U3RyaW5nLCB7XHJcbiAgICAgIHVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnM6IHRydWUsXHJcbiAgICAgIHVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2VuczogdHJ1ZSxcclxuICAgIH0pXHJcbiAgfVxyXG4gIHJldHVybiAoaXNOYU4oZGF0ZSkpID8gJycgOiBmb3JtYXQoZGF0ZSwgZm9ybWF0U3RyaW5nLCB7XHJcbiAgICB1c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zOiB0cnVlLFxyXG4gICAgdXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zOiB0cnVlLFxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkZWFsTm9uQm9vbGVhblByb3BzID0gKHZhbHVlOiBhbnkpID0+ICEhdmFsdWUgPyAxIDogMFxyXG5cclxuZXhwb3J0IGNvbnN0IGZvcm1hdE1vbmV5ID0gKGFtb3VudDogYW55LCBkZWNpbWFsQ291bnQgPSAyLCBkZWNpbWFsID0gXCIuXCIsIHRob3VzYW5kcyA9IFwiLFwiKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGRlY2ltYWxDb3VudCA9IE1hdGguYWJzKGRlY2ltYWxDb3VudClcclxuICAgIGRlY2ltYWxDb3VudCA9IGlzTmFOKGRlY2ltYWxDb3VudCkgPyAyIDogZGVjaW1hbENvdW50XHJcblxyXG4gICAgY29uc3QgbmVnYXRpdmVTaWduID0gYW1vdW50IDwgMCA/IFwiLVwiIDogXCJcIlxyXG5cclxuICAgIGxldCBpID0gcGFyc2VJbnQoYW1vdW50ID0gTWF0aC5hYnMoTnVtYmVyKGFtb3VudCkgfHwgMCkudG9GaXhlZChkZWNpbWFsQ291bnQpKS50b1N0cmluZygpXHJcbiAgICBsZXQgaiA9IChpLmxlbmd0aCA+IDMpID8gaS5sZW5ndGggJSAzIDogMFxyXG5cclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIHJldHVybiBuZWdhdGl2ZVNpZ24gKyAoaiA/IGkuc3Vic3RyKDAsIGopICsgdGhvdXNhbmRzIDogJycpICsgaS5zdWJzdHIoaikucmVwbGFjZSgvKFxcZHszfSkoPz1cXGQpL2csIFwiJDFcIiArIHRob3VzYW5kcykgKyAoZGVjaW1hbENvdW50ID8gZGVjaW1hbCArIE1hdGguYWJzKGFtb3VudCAtIGkpLnRvRml4ZWQoZGVjaW1hbENvdW50KS5zbGljZSgyKSA6IFwiXCIpXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5sb2coZSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkZWFsTW9uZXkgPSAoYW1vdW50OiBhbnksIHByZSA9ICcnKSA9PiBgJHtwcmV9JCAke2Zvcm1hdE1vbmV5KGFtb3VudCl9YFxyXG5cclxuZXhwb3J0IGNvbnN0IGRlYWxNYXliZU51bWJlciA9IChudW06IE1heWJlPG51bWJlcj4gfCB1bmRlZmluZWQpID0+IG51bSA/PyAwXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgZ2V0T2JqZWN0VVJMLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGVhbFVybFF1ZXJ5ID0gKHF1ZXJ5T2JqOiBhbnkpID0+IHtcclxuICByZXR1cm4gYD8ke09iamVjdC5rZXlzKHF1ZXJ5T2JqKS5tYXAodmFsdWUgPT4gYCR7dmFsdWV9PSR7cXVlcnlPYmpbdmFsdWVdfWApLmpvaW4oJyYnKX1gXHJcbn1cclxuXHJcblxyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU3RhclJvdW5kZWRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TdGFyUm91bmRlZCdcclxuaW1wb3J0IFN0YXJCb3JkZXJSb3VuZGVkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU3RhckJvcmRlclJvdW5kZWQnXHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHttb2RlbEZhY3Rvcnl9IGZyb20gJy4uLy4uL01vZGVsQWN0aW9uL21vZGVsVXRpbCdcclxuaW1wb3J0IHtHcm91cFF1ZXVlLCBHcm91cFF1ZXVlSXRlbUlucHV0LCBQcm9kdWN0fSBmcm9tICcuLi8uLi9ncmFwaHFsVHlwZXMvdHlwZXMnXHJcbmltcG9ydCB7ZG9jfSBmcm9tICcuLi8uLi9ncmFwaHFsVHlwZXMvZG9jJ1xyXG5pbXBvcnQge3VzZVN0b3JlTW9kZWx9IGZyb20gJy4uLy4uL01vZGVsQWN0aW9uL3VzZVN0b3JlJ1xyXG5pbXBvcnQge2RlYWxNb25leSwgZnBNZXJnZVByZX0gZnJvbSAnLi4vLi4vdG9vbHMvdXRpbHMnXHJcbmltcG9ydCBDdXNDYXJvdXNlbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1N3aXBlL1N3aXBlJ1xyXG5pbXBvcnQge0hlYWRlclRpdGxlfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0hlYWRlclRpdGxlL0hlYWRlclRpdGxlJ1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQge2xzfSBmcm9tICcuLi8uLi90b29scy9kZWFsS2V5J1xyXG5pbXBvcnQge21wU3R5bGV9IGZyb20gJy4uLy4uL3N0eWxlL2NvbW1vbidcclxuaW1wb3J0IHtncmV5fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMnXHJcblxyXG5leHBvcnQgY29uc3QgZ3JvdXBQcm9kdWN0TW9kZWwgPSBtb2RlbEZhY3RvcnkoJ2dyb3VwUHJvZHVjdE1vZGVsJywge1xyXG4gIHByb2R1Y3Q6IHt9IGFzIFByb2R1Y3QsXHJcbiAgZ3JvdXBRdWVuZUxpc3Q6IFtdIGFzIEdyb3VwUXVldWVbXSxcclxuICBzZWxlY3ROdW06IDAsXHJcbn0sIHtcclxuICBnZXREYXRhOiBhc3luYyAodmFsdWU6IHN0cmluZywgb3B0aW9uKSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBvcHRpb24ucXVlcnkoZG9jLnByb2R1Y3RMaXN0QnlJZHMsIHtcclxuICAgICAgaWRzOiBbdmFsdWVdLFxyXG4gICAgfSlcclxuICAgIGNvbnN0IGdyb3VwUXVlbmVMaXN0ID0gYXdhaXQgb3B0aW9uLnF1ZXJ5KGRvYy5ncm91cFF1ZXVlTGlzdCwge1xyXG4gICAgICBncm91cFF1ZXVlSXRlbUlucHV0OiB7XHJcbiAgICAgICAgcHJvZHVjdDoge1xyXG4gICAgICAgICAgaWQ6IHZhbHVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0gYXMgR3JvdXBRdWV1ZUl0ZW1JbnB1dCxcclxuICAgIH0pXHJcbiAgICBvcHRpb24uc2V0RGF0YShmcE1lcmdlUHJlKHtcclxuICAgICAgcHJvZHVjdDogcmVzPy5wcm9kdWN0TGlzdEJ5SWRzPy5saXN0WzBdID8/IHt9LFxyXG4gICAgICBncm91cFF1ZW5lTGlzdDogZ3JvdXBRdWVuZUxpc3Q/Lmdyb3VwUXVldWVMaXN0ID8/IFtdLFxyXG4gICAgfSkpXHJcbiAgfSxcclxuICB1cGRhdGVTZWxlY3ROdW06ICh2YWx1ZTogbnVtYmVyLCBvcHRpb24pID0+IHtcclxuICAgIG9wdGlvbi5zZXREYXRhKGZwTWVyZ2VQcmUoe1xyXG4gICAgICBzZWxlY3ROdW06IHZhbHVlID09PSBvcHRpb24uZGF0YS5zZWxlY3ROdW0gPyAwIDogdmFsdWVcclxuICAgIH0pKVxyXG4gIH0sXHJcbn0pXHJcblxyXG5jb25zdCBQcmljZVJlZCA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZDogJHttcFN0eWxlLnJlZH07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTIwcHg7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMzBweCk7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICA+IG1haW4ge1xyXG4gICAgZ3JpZC1hcmVhOiAxLzEvMy8yO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgPiBzcGFuIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcbmNvbnN0IE5hbWUgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDE2cHggMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICA+IG1haW4ge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICB9XHJcbiAgPiBzZWN0aW9uIHtcclxuICAgID4gc3BhbiB7XHJcbiAgICAgIHBhZGRpbmc6IDAgNHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAke2dyZXlbJzcwMCddfTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGJvdHRvbTogLTRweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBZZWxsb3dTdGFyID0gKCkgPT4gPFN0YXJSb3VuZGVkSWNvbiBmb250U2l6ZT17J3NtYWxsJ30gc3R5bGU9e3tjb2xvcjogJyNGREQzMzQnfX0vPlxyXG5cclxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaGVhZGVyYFxyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuYFxyXG5jb25zdCBHcm91cFF1ZW5lID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAxNnB4O1xyXG5gXHJcblxyXG5jb25zdCBTbWFydE1hdGNoID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gID4gc2VjdGlvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgPiBtYWluIHtcclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IFByaWNlID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICA+IG1haW4ge1xyXG4gICAgLy9mb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgPiBtYWluLCBzZWN0aW9uIHtcclxuICAgID4gKiB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IFN1Ym1pdCA9IHN0eWxlZC5kaXZgXHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBHcm91cFByb2R1Y3QgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBpZCA9IChyb3V0ZXIucXVlcnk/LmlkIGFzIHN0cmluZykgPz8gJydcclxuICBjb25zdCB7YWN0aW9uczogYWN0aW9uc0dyb3VwUHJvZHVjdCwgc3RhdGU6IHN0YXRlR3JvdXBQcm9kdWN0fSA9IHVzZVN0b3JlTW9kZWwoZ3JvdXBQcm9kdWN0TW9kZWwpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFjdGlvbnNHcm91cFByb2R1Y3QuZ2V0RGF0YShpZClcclxuICB9LCBbaWRdKVxyXG5cclxuICBjb25zdCBwcm9kdWN0ID0gc3RhdGVHcm91cFByb2R1Y3QucHJvZHVjdFxyXG5cclxuICBjb25zb2xlLmxvZyhzdGF0ZUdyb3VwUHJvZHVjdC5ncm91cFF1ZW5lTGlzdClcclxuICByZXR1cm4gPGRpdj5cclxuICAgIDxIZWFkZXJUaXRsZVxyXG4gICAgICAgIHRpdGxlPXsn5Lqn5ZOB6K+m5oOFJ31cclxuICAgIC8+XHJcbiAgICA8Q3VzQ2Fyb3VzZWxcclxuICAgICAgICBoZWlnaHQ9eycyNDBweCd9XHJcbiAgICAgICAgZGF0YUxpc3Q9e3Byb2R1Y3Q/LmltZz8ubWFwKHYgPT4gKHtcclxuICAgICAgICAgIC4uLnYsXHJcbiAgICAgICAgICBpbWdVcmw6IHY/LnVybCxcclxuICAgICAgICB9KSkgYXMgW119XHJcbiAgICAvPlxyXG4gICAgPFByaWNlUmVkPlxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICB7bHMoJ+WfuuWHhuS7t+agvCcpfVxyXG4gICAgICAgIDxzcGFuPntkZWFsTW9uZXkocHJvZHVjdC5wcmljZU91dCl9L3twcm9kdWN0LnBhY2tpbmdVbml0U3RyaW5nfTwvc3Bhbj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgICA8YXNpZGU+e2xzKCflt7LmiJDlm6InKX17MjN9e2xzKCfljZUnKX08L2FzaWRlPlxyXG4gICAgICA8YXNpZGU+e2xzKCfmi7zlm6LkuK0nKX17Mn17bHMoJ+WNlScpfTwvYXNpZGU+XHJcbiAgICA8L1ByaWNlUmVkPlxyXG4gICAgPE5hbWU+XHJcbiAgICAgIDxtYWluPntwcm9kdWN0Lm5hbWV9PC9tYWluPlxyXG4gICAgICA8c2VjdGlvbj57cHJvZHVjdC5ncm91cFJlbWFya30ve3Byb2R1Y3QuZ3JvdXBBbW91bnR9e3Byb2R1Y3QuZ3JvdXBBbW91bnRVbml0U3RyaW5nfTxici8+e2xzKCfliIblm6Lnsr7luqYnKX1cclxuICAgICAgPHNwYW4+e1suLi5BcnJheShwcm9kdWN0Lmdyb3VwUHJlY2lzaW9uKV0ubWFwKCh2LCBpKSA9PiBpKS5tYXAodmFsdWUgPT4gPFllbGxvd1N0YXIga2V5PXt2YWx1ZX0gLz4pfTwvc3Bhbj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9OYW1lPlxyXG4gICAgPEdyb3VwUXVlbmU+XHJcbiAgICAgIDxUaXRsZT57bHMoJ+aLvOWbouS4rScpfTwvVGl0bGU+XHJcbiAgICA8L0dyb3VwUXVlbmU+XHJcbiAgICA8U21hcnRNYXRjaD5cclxuICAgICAgPGhlYWRlcj5cclxuICAgICAgICA8VGl0bGU+e2xzKCfmmbrog73ljLnphY0nKX08L1RpdGxlPlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAge2xzKCfor7fngrnlh7snKX1cclxuICAgICAgICA8U3RhckJvcmRlclJvdW5kZWRJY29uIC8+XHJcbiAgICAgICAge2xzKCfnoa7lrprmgqjpnIDopoHnmoTku73mlbAnKX1cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICB7Wy4uLkFycmF5KHByb2R1Y3QuZ3JvdXBQcmVjaXNpb24pXS5tYXAoKHYsIGkpID0+IGkpLm1hcCh2YWx1ZSA9PiB2YWx1ZSArIDEgPiBzdGF0ZUdyb3VwUHJvZHVjdC5zZWxlY3ROdW0gPyA8U3RhckJvcmRlclJvdW5kZWRJY29uXHJcbiAgICAgICAgICAgIGtleT17YGNsaWNrU3RhciR7dmFsdWV9YH1cclxuICAgICAgICAgICAgZm9udFNpemU9eydsYXJnZSd9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFjdGlvbnNHcm91cFByb2R1Y3QudXBkYXRlU2VsZWN0TnVtKHZhbHVlICsgMSl9XHJcbiAgICAgICAgLz4gOiA8U3RhclJvdW5kZWRJY29uXHJcbiAgICAgICAgICAgIGtleT17YGNsaWNrU3RhciR7dmFsdWV9YH1cclxuICAgICAgICAgICAgc3R5bGU9e3tjb2xvcjogJyNGREQzMzQnfX1cclxuICAgICAgICAgICAgZm9udFNpemU9eydsYXJnZSd9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFjdGlvbnNHcm91cFByb2R1Y3QudXBkYXRlU2VsZWN0TnVtKHZhbHVlICsgMSl9XHJcbiAgICAgICAgLz4pfVxyXG4gICAgICA8L21haW4+XHJcbiAgICAgIDxQcmljZT5cclxuICAgICAgICA8bWFpbj5cclxuICAgICAgICAgIDxoZWFkZXI+e2RlYWxNb25leSgocHJvZHVjdC5wcmljZU91dCA/PyAwKSAqIHN0YXRlR3JvdXBQcm9kdWN0LnNlbGVjdE51bSl9PC9oZWFkZXI+XHJcbiAgICAgICAgICA8Zm9vdGVyPntscygn5oqY5ZCO5Lu35qC8Jyl9PC9mb290ZXI+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgICAgIDxkaXY+PTwvZGl2PlxyXG4gICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgPGhlYWRlcj57ZGVhbE1vbmV5KChwcm9kdWN0LnByaWNlT3V0ID8/IDApICogc3RhdGVHcm91cFByb2R1Y3Quc2VsZWN0TnVtKX08L2hlYWRlcj5cclxuICAgICAgICAgIDxmb290ZXI+e2xzKCfln7rlh4bku7fmoLwnKX08L2Zvb3Rlcj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPGRpdj54PC9kaXY+XHJcbiAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICA8aGVhZGVyPjE8L2hlYWRlcj5cclxuICAgICAgICAgIDxmb290ZXI+e2xzKCfku73mlbDmipjmiaMnKX08L2Zvb3Rlcj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPGRpdj54PC9kaXY+XHJcbiAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICA8aGVhZGVyPjE8L2hlYWRlcj5cclxuICAgICAgICAgIDxmb290ZXI+e2xzKCfmiJDlm6LmipjkuIrmipgnKX08L2Zvb3Rlcj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDwvUHJpY2U+XHJcbiAgICA8L1NtYXJ0TWF0Y2g+XHJcbiAgICA8U3VibWl0PlxyXG4gICAgICDljrvnu5PnrpdcclxuICAgIDwvU3VibWl0PlxyXG4gIDwvZGl2PlxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dCYWNrSW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9TdGFyQm9yZGVyUm91bmRlZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU3RhclJvdW5kZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWJvb3N0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNyb3NzLWZldGNoL3BvbHlmaWxsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRhdGUtZm5zL2Zvcm1hdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoL3NldFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2NvbmZpZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=