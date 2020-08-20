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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/me/index.tsx":
/*!****************************!*\
  !*** ./pages/me/index.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_view_me__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/view/me */ "./utils/view/me/index.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_utils_view_me__WEBPACK_IMPORTED_MODULE_0__["default"]);

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

/***/ "./utils/view/me/index.tsx":
/*!*********************************!*\
  !*** ./utils/view/me/index.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Me; });
/* harmony import */ var _material_ui_icons_HelpOutline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/icons/HelpOutline */ "@material-ui/icons/HelpOutline");
/* harmony import */ var _material_ui_icons_HelpOutline__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_HelpOutline__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_icons_PersonPinCircle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/PersonPinCircle */ "@material-ui/icons/PersonPinCircle");
/* harmony import */ var _material_ui_icons_PersonPinCircle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PersonPinCircle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_PinDrop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/PinDrop */ "@material-ui/icons/PinDrop");
/* harmony import */ var _material_ui_icons_PinDrop__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PinDrop__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_CardGiftcard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/CardGiftcard */ "@material-ui/icons/CardGiftcard");
/* harmony import */ var _material_ui_icons_CardGiftcard__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CardGiftcard__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_CardMembership__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/CardMembership */ "@material-ui/icons/CardMembership");
/* harmony import */ var _material_ui_icons_CardMembership__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CardMembership__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_History__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/History */ "@material-ui/icons/History");
/* harmony import */ var _material_ui_icons_History__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_History__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/ArrowForwardIos */ "@material-ui/icons/ArrowForwardIos");
/* harmony import */ var _material_ui_icons_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./model */ "./utils/view/me/model.ts");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/colors */ "@material-ui/core/colors");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../ModelAction/useStore */ "./utils/ModelAction/useStore.ts");
/* harmony import */ var _tools_dealKey__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../tools/dealKey */ "./utils/tools/dealKey.ts");
/* harmony import */ var _components_FootBar_FootBar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/FootBar/FootBar */ "./utils/components/FootBar/FootBar.tsx");
/* harmony import */ var _material_ui_icons_MonetizationOn__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/MonetizationOn */ "@material-ui/icons/MonetizationOn");
/* harmony import */ var _material_ui_icons_MonetizationOn__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MonetizationOn__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_Payment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/Payment */ "@material-ui/icons/Payment");
/* harmony import */ var _material_ui_icons_Payment__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Payment__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_BScroll_BScroller__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/BScroll/BScroller */ "./utils/components/BScroll/BScroller.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _components_NoAuth_NoAuth__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../components/NoAuth/NoAuth */ "./utils/components/NoAuth/NoAuth.tsx");
var _jsxFileName = "D:\\code\\zw\\zw_client_web\\utils\\view\\me\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;




















const BasePadding = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div.withConfig({
  displayName: "me__BasePadding",
  componentId: "bxt1qo-0"
})(["padding:0 20px;"]);
const Box = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div.withConfig({
  displayName: "me__Box",
  componentId: "bxt1qo-1"
})([""]);
const Header = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div.withConfig({
  displayName: "me__Header",
  componentId: "bxt1qo-2"
})(["display:grid;grid-template-rows:20vh 30px 30px;grid-template-columns:1fr 100px;padding-left:20px;background:", ";color:#fff;> header{font-size:28px;grid-area:1/1/2/3;align-self:end;margin-bottom:20px;}> aside{grid-area:2/2/4/3;margin-right:20px;}"], _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_11__["red"][400]);
const Tab = styled_components__WEBPACK_IMPORTED_MODULE_8___default()(BasePadding).withConfig({
  displayName: "me__Tab",
  componentId: "bxt1qo-3"
})(["padding:0 20px;display:flex;justify-content:space-between;"]);
const Card = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div.withConfig({
  displayName: "me__Card",
  componentId: "bxt1qo-4"
})(["display:grid;grid-template-columns:min-content 1fr;align-items:center;padding:20px 0;> svg{grid-area:1/1/3/2;margin-right:5px;}> footer{font-size:12px;}"]);
const Parting = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div.withConfig({
  displayName: "me__Parting",
  componentId: "bxt1qo-5"
})(["width:1px;height:30px;margin-top:20px;background:", ";"], _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_11__["grey"][200]);
const ListItem = styled_components__WEBPACK_IMPORTED_MODULE_8___default()(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["ButtonBase"]).withConfig({
  displayName: "me__ListItem",
  componentId: "bxt1qo-6"
})(["&&&{padding:20px;width:100%;display:flex;}> main{text-align:left;font-size:18px;margin-left:10px;flex-grow:1;display:flex;flex-direction:column;justify-content:center;> footer{font-size:14px;color:", "}}"], _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_11__["grey"][700]);
const Empty = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div.withConfig({
  displayName: "me__Empty",
  componentId: "bxt1qo-7"
})(["padding:20px;> main{margin-top:20vh;display:flex;flex-direction:column;align-items:center;> span{margin-bottom:30px;}}"]);
function Me() {
  var _stateMe$user$userInf, _stateMe$user$userInf2, _stateMe$user$userInf3, _stateMe$user$orderCo, _stateMe$user$orderCo2;

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_18__["useRouter"])();
  const {
    state: stateMe,
    actions: actionsMe
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_12__["useStoreModel"])(_model__WEBPACK_IMPORTED_MODULE_10__["meModel"]);
  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(() => {
    if (!stateMe.user.id) {
      actionsMe.getLoginUser();
    }
  }, []);
  return __jsx(Box, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 10
    }
  }, Object(_components_NoAuth_NoAuth__WEBPACK_IMPORTED_MODULE_19__["dealNoAuth"])(__jsx(_components_BScroll_BScroller__WEBPACK_IMPORTED_MODULE_17__["BScroller"], {
    boxHeight: 'calc(100vh - 45px)',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 17
    }
  }, __jsx(Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }
  }, __jsx("header", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 9
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_13__["ls"])('您好,'), (_stateMe$user$userInf = stateMe.user.userInfo) === null || _stateMe$user$userInf === void 0 ? void 0 : _stateMe$user$userInf.name), __jsx("section", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 9
    }
  }, (_stateMe$user$userInf2 = stateMe.user.userInfo) === null || _stateMe$user$userInf2 === void 0 ? void 0 : _stateMe$user$userInf2.phone), __jsx("section", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }
  }, (_stateMe$user$userInf3 = stateMe.user.userInfo) === null || _stateMe$user$userInf3 === void 0 ? void 0 : _stateMe$user$userInf3.email), __jsx("aside", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Button"], {
    color: 'inherit',
    variant: 'outlined',
    onClick: () => actionsMe.logout(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_13__["ls"])('登出')))), __jsx(Tab, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }
  }, __jsx(Card, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_MonetizationOn__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 11
    }
  }), __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 11
    }
  }, (_stateMe$user$orderCo = stateMe.user.orderCoinCurrentMonth) !== null && _stateMe$user$orderCo !== void 0 ? _stateMe$user$orderCo : 0), __jsx("footer", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_13__["ls"])('当前达人币'))), __jsx(Parting, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 9
    }
  }), __jsx(Card, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_MonetizationOn__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 11
    }
  }), __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 11
    }
  }, (_stateMe$user$orderCo2 = stateMe.user.orderCoinNextMonth) !== null && _stateMe$user$orderCo2 !== void 0 ? _stateMe$user$orderCo2 : 0), __jsx("footer", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_13__["ls"])('当前达人币'))), __jsx(Parting, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 9
    }
  }), __jsx(Card, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_Payment__WEBPACK_IMPORTED_MODULE_16___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 11
    }
  }), __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 11
    }
  }, "1021"), __jsx("footer", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_13__["ls"])('达人卡')))), __jsx(ListItem, {
    onClick: () => {
      router.push('/me/orderHistory');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 7
    }
  }, __jsx(_material_ui_icons_History__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 9
    }
  }), __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 9
    }
  }, __jsx("section", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_13__["ls"])('我的订单历史'))), __jsx("aside", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 11
    }
  }))), __jsx(ListItem, {
    onClick: () => {
      router.push('/me/myInfo');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 7
    }
  }, __jsx(_material_ui_icons_CardMembership__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 9
    }
  }), __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 9
    }
  }, __jsx("section", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_13__["ls"])('我的达人证'))), __jsx("aside", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 11
    }
  }))), __jsx(ListItem, {
    onClick: () => {
      router.push('/me/myCreditCard');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 7
    }
  }, __jsx(_material_ui_icons_CardGiftcard__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 9
    }
  }), __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 9
    }
  }, __jsx("section", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_13__["ls"])('我的信用卡'))), __jsx("aside", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 11
    }
  }))), __jsx(ListItem, {
    onClick: () => {
      router.push('/me/pickupAddress');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 7
    }
  }, __jsx(_material_ui_icons_PinDrop__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 9
    }
  }), __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 9
    }
  }, __jsx("section", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_13__["ls"])('我的取货点'))), __jsx("aside", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 11
    }
  }))), __jsx(ListItem, {
    onClick: () => {
      router.push('/me/myAddress');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 7
    }
  }, __jsx(_material_ui_icons_PersonPinCircle__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 9
    }
  }), __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 9
    }
  }, __jsx("section", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_13__["ls"])('我的地址'))), __jsx("aside", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 11
    }
  }))), __jsx(ListItem, {
    onClick: () => {
      router.push('/me/helpCenter');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 7
    }
  }, __jsx(_material_ui_icons_HelpOutline__WEBPACK_IMPORTED_MODULE_0___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 9
    }
  }), __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 9
    }
  }, __jsx("section", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_13__["ls"])('帮助中心'))), __jsx("aside", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 11
    }
  }))), __jsx("section", {
    style: {
      height: '200px',
      width: '2px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 7
    }
  }))), __jsx(_components_FootBar_FootBar__WEBPACK_IMPORTED_MODULE_14__["FootBar"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 5
    }
  }));
}

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

/***/ 4:
/*!**********************************!*\
  !*** multi ./pages/me/index.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\code\zw\zw_client_web\pages\me\index.tsx */"./pages/me/index.tsx");


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

/***/ "@material-ui/icons/AccountBox":
/*!************************************************!*\
  !*** external "@material-ui/icons/AccountBox" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AccountBox");

/***/ }),

/***/ "@material-ui/icons/ArrowForwardIos":
/*!*****************************************************!*\
  !*** external "@material-ui/icons/ArrowForwardIos" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowForwardIos");

/***/ }),

/***/ "@material-ui/icons/CardGiftcard":
/*!**************************************************!*\
  !*** external "@material-ui/icons/CardGiftcard" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/CardGiftcard");

/***/ }),

/***/ "@material-ui/icons/CardMembership":
/*!****************************************************!*\
  !*** external "@material-ui/icons/CardMembership" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/CardMembership");

/***/ }),

/***/ "@material-ui/icons/HelpOutline":
/*!*************************************************!*\
  !*** external "@material-ui/icons/HelpOutline" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/HelpOutline");

/***/ }),

/***/ "@material-ui/icons/History":
/*!*********************************************!*\
  !*** external "@material-ui/icons/History" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/History");

/***/ }),

/***/ "@material-ui/icons/MonetizationOn":
/*!****************************************************!*\
  !*** external "@material-ui/icons/MonetizationOn" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/MonetizationOn");

/***/ }),

/***/ "@material-ui/icons/Payment":
/*!*********************************************!*\
  !*** external "@material-ui/icons/Payment" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Payment");

/***/ }),

/***/ "@material-ui/icons/People":
/*!********************************************!*\
  !*** external "@material-ui/icons/People" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/People");

/***/ }),

/***/ "@material-ui/icons/PersonPinCircle":
/*!*****************************************************!*\
  !*** external "@material-ui/icons/PersonPinCircle" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/PersonPinCircle");

/***/ }),

/***/ "@material-ui/icons/PinDrop":
/*!*********************************************!*\
  !*** external "@material-ui/icons/PinDrop" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/PinDrop");

/***/ }),

/***/ "@material-ui/icons/Redeem":
/*!********************************************!*\
  !*** external "@material-ui/icons/Redeem" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Redeem");

/***/ }),

/***/ "@material-ui/icons/Storefront":
/*!************************************************!*\
  !*** external "@material-ui/icons/Storefront" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Storefront");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvbWUvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3V0aWxzL01vZGVsQWN0aW9uL21vZGVsVXRpbC50cyIsIndlYnBhY2s6Ly8vLi91dGlscy9Nb2RlbEFjdGlvbi91c2VTdG9yZS50cyIsIndlYnBhY2s6Ly8vLi91dGlscy9jbGllbnQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29tcG9uZW50cy9CU2Nyb2xsL0JTY3JvbGxlci50c3giLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29tcG9uZW50cy9Gb290QmFyL0Zvb3RCYXIudHN4Iiwid2VicGFjazovLy8uL3V0aWxzL2NvbXBvbmVudHMvTWVzc2FnZS9NZXNzYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi91dGlscy9jb21wb25lbnRzL05vQXV0aC9Ob0F1dGgudHN4Iiwid2VicGFjazovLy8uL3V0aWxzL2NvbXBvbmVudHMvUmVnaXN0ZXJIZWFkZXIvUmVnaXN0ZXJIZWFkZXIudHN4Iiwid2VicGFjazovLy8uL3V0aWxzL2dyYXBocWxUeXBlcy9kb2MvZnJhZ21lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZ3JhcGhxbFR5cGVzL2RvYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi91dGlscy9zc19jb21tb24vZW51bS50cyIsIndlYnBhY2s6Ly8vLi91dGlscy9zdHlsZS9jb21tb24udHMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvdG9vbHMvZGVhbEtleS50cyIsIndlYnBhY2s6Ly8vLi91dGlscy90b29scy9nbG9iYWwudHMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvdG9vbHMvdG9rZW4udHMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvdG9vbHMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvdmlldy9tZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvdmlldy9tZS9tb2RlbC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9yc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9yZWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQWNjb3VudEJveFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9BcnJvd0ZvcndhcmRJb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2FyZEdpZnRjYXJkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0NhcmRNZW1iZXJzaGlwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0hlbHBPdXRsaW5lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0hpc3RvcnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTW9uZXRpemF0aW9uT25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUGF5bWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9QZW9wbGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUGVyc29uUGluQ2lyY2xlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1BpbkRyb3BcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUmVkZWVtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1N0b3JlZnJvbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tYm9vc3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiZXR0ZXItc2Nyb2xsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY3Jvc3MtZmV0Y2gvcG9seWZpbGxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkYXRlLWZucy9mb3JtYXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2gvc2V0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9jb25maWdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiXSwibmFtZXMiOlsiTWUiLCJiYXNlQWN0aW9uT3B0aW9uIiwiZGF0YSIsIm11dGF0ZSIsIm5vdGljZSIsInF1ZXJ5Iiwic2V0RGF0YSIsInN0b3JlIiwibW9kZWxOYW1lTGlzdCIsIm1vZGVsRmFjdG9yeSIsIm5hbWUiLCJzdGF0ZSIsImFjdGlvbnMiLCJpbmNsdWRlcyIsIkVycm9yIiwicHVzaCIsImZldGNoTG9hZCIsImZldGNoRXJyb3IiLCJtZXJnZU1vZGVsIiwibW9kZWwiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsInZhbHVlIiwibWVyZ2VOYW1lIiwibWVyZ2VUd29Nb2RlbCIsIm1vZGVsVCIsIm1lcmdlVGhyZWVNb2RlbCIsIm1vZGVsQSIsIm1vZGVsQiIsIm1vZGVsQyIsIm1lcmdlTGlzdE1vZGVsIiwibW9kZWxMaXN0Iiwic2xpY2UiLCJyZWR1Y2UiLCJhY2MiLCJpbml0TGlzdCIsImluaXRNb2RlbCIsImluaXRTdGF0ZSIsIm9yaWdpblN0b3JlIiwiaXNGdW5jdGlvbiIsImZ1bmN0aW9uVG9DaGVjayIsInRvU3RyaW5nIiwiY2FsbCIsImRlYWxOYW1lU3BhY2UiLCJrZXkiLCJuYW1lU3BhY2UiLCJ1c2VTdG9yZU1vZGVsIiwiX2tleSIsIkFycmF5IiwiaXNBcnJheSIsInNldFN0YXRlIiwidXNlU3RhdGUiLCJjcmVhdGUiLCJ1c2VDYWxsYmFjayIsIm9sZFN0YXRlIiwibmV3RGF0YSIsInNldExvYWQiLCJmbGFnIiwicHJldlN0YXRlIiwibG9jIiwic291cmNlIiwiYm9keSIsInNldEVycm9yIiwiZXJyIiwicGFyYW1zIiwib3B0aW9uIiwicmVzIiwiZ3JhcGhRTFF1ZXJ5IiwiY2F0Y2giLCJlIiwiZmluYWxseSIsIm11dGF0aW9uIiwiZ3JhcGhRTE11dGF0ZSIsImxlbmd0aCIsImNvbnN0cnVjdG9yIiwidiIsInVzZUVmZmVjdCIsImZpbHRlciIsImdldExvYWQiLCJjb25maWciLCJnZXRDb25maWciLCJjbGllbnRfYXBpX3VyaSIsInB1YmxpY1J1bnRpbWVDb25maWciLCJvbWl0VHlwZW5hbWUiLCJ1bmRlZmluZWQiLCJnZXRDbGllbnQiLCJyZXF1ZXN0Iiwib3BlcmF0aW9uIiwidmFyaWFibGVzIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5Iiwic2V0Q29udGV4dCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiZ2V0VG9rZW4iLCJyZWZyZXNoVG9rZW4iLCJkb2MiLCJ0aGVuIiwidG9rZW4iLCJzZXRUb2tlbiIsInJlZnJlc2h0b2tlbiIsInNob3dNZXNzYWdlIiwibWVzc2FnZSIsIlJvdXRlciIsInJlbG9hZCIsInNzTG9nIiwib25FcnJvciIsInJlc3BvbnNlIiwiZ3JhcGhRTEVycm9ycyIsIm5ldHdvcmtFcnJvciIsImxvY2F0aW9ucyIsInBhdGgiLCJleHRlbnNpb25zIiwiY29kZSIsInNwbGl0IiwibXNnX3R5cGUiLCJlcnJNc2ciLCJib2R5VGV4dCIsInJlc3VsdCIsImVycm9yIiwic3RhdHVzQ29kZSIsIkFwb2xsb0NsaWVudCIsInVyaSIsImRlZmF1bHRDbGllbnQiLCJkZWFsUGFyYW1zIiwiY2xpZW50IiwiX2RlYWxQYXJhbXNJbiIsImRlYWxQYXJhbXNJbiIsImZldGNoUG9saWN5Iiwic2VydmVyQ2xpZW50Iiwic2VydmVyUXVlcnkiLCJzZXJ2ZXJNdXRhdGUiLCJiU2Nyb2xsTW9kZWwiLCJzY3JvbGwiLCJzZXRTY3JvbGwiLCJmcE1lcmdlUHJlIiwiQlNjcm9sbGVyIiwiaXNYIiwiY2hpbGRyZW4iLCJib3hIZWlnaHQiLCJib3hXaWR0aCIsImJzU3RhdGUiLCJic0FjdGlvbnMiLCJzY3JvbGxSZWYiLCJ1c2VSZWYiLCJCZXR0ZXJTY3JvbGwiLCJjdXJyZW50IiwiY2xpY2siLCJzY3JvbGxZIiwidGFwcyIsInNjcm9sbFgiLCJwcmV2ZW50RGVmYXVsdEV4Y2VwdGlvbiIsInRhZ05hbWUiLCJjbGFzc05hbWUiLCJzdG9wIiwiZGVzdHJveSIsImRpc3BsYXkiLCJGb290QmFyIiwicm91dGVyIiwidXNlUm91dGVyIiwiaXNBY3QiLCJwYXRobmFtZSIsIm1wU3R5bGUiLCJyZWQiLCJBcHBGb290QmFyIiwiaG9tZSIsImdyb3VwIiwiY2FyZCIsIm1lIiwibWFwIiwidHlwZUhlbHAiLCJkZWZhdWx0IiwiZ3JleSIsInN1Y2Nlc3MiLCJncmVlbiIsIndhcm5pbmciLCJhbWJlciIsImluZm8iLCJibHVlIiwiZ2V0VHlwZSIsInR5cGUiLCJDdXNTbmFja2JhciIsInN0eWxlZCIsIlNuYWNrYmFyIiwiY29tbW9uIiwid2hpdGUiLCJtZXNzYWdlTW9kZWwiLCJvcGVuIiwiYXV0b0hpZGVEdXJhdGlvbiIsIm9uQ2xvc2UiLCJNZXNzYWdlIiwibVN0YXRlIiwibHMiLCJFbXB0eSIsImRpdiIsImRlYWxOb0F1dGgiLCJvdGhlcnMiLCJzdGF0ZU1lIiwiYWN0aW9uc01lIiwibWVNb2RlbCIsInVzZXIiLCJpZCIsImdldExvZ2luVXNlciIsInRvTG9naW4iLCJIZWFkZXIiLCJSZWdpc3RlckhlYWRlciIsImZyYWdtZW50IiwiQ2F0ZWdvcnlGaWVsZHMiLCJncWwiLCJVc2VyRmllbGRzIiwiVXNlckluZm9GaWVsZHMiLCJPcmRlckluZm9GaWVsZHMiLCJST3JkZXJQcm9kdWN0RmllbGRzIiwiUHJvZHVjdEZpZWxkcyIsIkltZ0ZpZWxkcyIsIlVzZXJBZGRyZXNzRmllbGRzIiwiVXNlclBheUNhcmRGaWVsZHMiLCJTaG9wQ2FydEZpZWxkcyIsIkRhdGFDb25maWdGaWVsZHMiLCJEaWN0RmllbGRzIiwiR3JvdXBRdWV1ZUZpZWxkcyIsIkdyb3VwT3JkZXJGaWVsZHMiLCJQcm9tb0NvZGVGaWVsZHMiLCJnZXRVc2VyTGlzdERvYyIsImdldERhdGFDb25maWciLCJob21lQ2Fyb3VzZWxJbWdzIiwiY2F0ZWdvcnlMaXN0IiwicmVnaXN0ZXJVc2VyIiwibG9naW4iLCJvbmVVc2VyIiwib3JkZXJMaXN0Iiwib3JkZXJEZXRhaWwiLCJEaWN0VHlwZUVudW0iLCJTZWxmQWRkcmVzcyIsInVwZGF0ZVBhc3N3b3JkIiwicGF5Q2FyZExpc3RPbmVVc2VyIiwidXNlclBheUNhcmQiLCJzYXZlVXNlclBheUNhcmQiLCJzZXRVc2VyUGF5Q2FyZERlZmF1bHQiLCJwaWNrdXBBZGRyZXNzIiwidXBkYXRlVXNlckluZm8iLCJ1c2VyQWRkcmVzc0xpc3RPbmVVc2VyIiwidXNlckFkZHJlc3MiLCJzYXZlVXNlckFkZHJlc3MiLCJzZXRVc2VyQWRkcmVzc0RlZmF1bHQiLCJwcm9kdWN0c0luQ2F0ZWdvcnkiLCJjYXRlZ29yeUxldmVsIiwib25lQ2F0ZWdvcnkiLCJwcm9kdWN0TGlzdCIsInVwZGF0ZU51bVNob3BDYXJ0IiwidXNlclNob3BDYXJ0TGlzdCIsInVwZGF0ZVNob3BDYXJ0Iiwib3JkZXJDb25maXJtSW5mbyIsIkZyZWlnaHQiLCJzYXZlT3JkZXIiLCJkaWN0TGlzdCIsImxpbWl0VGltZURhdGEiLCJQcm9tb3Rpb25GbGFzaFNhbGUiLCJwcm9kdWN0TGlzdEJ5SWRzIiwiZ3JvdXBRdWV1ZUxpc3QiLCJ1cGRhdGVPcmRlciIsInNhdmVHcm91cE9yZGVyIiwicHJvbW9Db2RlTGlzdCIsImNhdGVnb3J5Um9vdFBhcmVudCIsInByb2R1Y3RMaXN0T3JkZXJCeU9yZGVyIiwiUHJvbW9Db2RlVHlwZUVudW0iLCJEaXNjb3VudFR5cGVFbnVtIiwiU1MiLCJEaXNjb3VudENvbmRpdGlvbkVudW0iLCJQcm9kdWN0U3VwcGxlbWVudCIsIlByb2R1Y3RTdXBwbGVtZW50U3RyaW5nIiwiT3JkZXJTdGF0ZSIsIl9zIiwib3JkZXJTdGF0ZVRvU3RyaW5nIiwicyIsIlJlbGF0ZWRPYmpUeXBlRW51bSIsIkFwcE1vZHVsZVR5cGVFbnVtIiwiQ2F0ZWdvcnlSb290TmFtZSIsIm9yZGVyU3RhdGVLZXlzIiwidmFsdWVzIiwiUHJvdmluY2VEYXRhIiwiZ2V0UGlja1VwVHlwZU5hbWUiLCJTZWxmIiwiRGVsaXZlcnkiLCJQaWNrVXBUeXBlRW51bSIsIlNhbGVSYW5rVHlwZUVudW0iLCJPbmVEYXkiLCJPbmVXZWVrIiwiT25lTW9udGgiLCJzaGFkb3ciLCJpc0RldiIsImNvbnNvbGUiLCJsb2ciLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZ2V0SXRlbSIsImdldE9iamVjdFVSTCIsImZpbGUiLCJ3aW5kb3ciLCJjcmVhdGVPYmplY3RVUkwiLCJVUkwiLCJ3ZWJraXRVUkwiLCJwYXJzZUZsb2F0Rm9ySW5wdXQiLCJwYXJzZUZsb2F0IiwiZnBTZXQiLCJvcmlnaW4iLCJjbG9uZURlZXAiLCJvbGREYXRhIiwiZ2V0Iiwic2V0IiwiZGVsYXkiLCJ0aW1lIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiZnBTZXRQcmUiLCJjdXN0b21pemVyIiwib2JqVmFsdWUiLCJzcmNWYWx1ZSIsImZwTWVyZ2UiLCJuZXdWYWx1ZSIsIm1lcmdlV2l0aCIsInByZSIsImZwUmVtb3ZlIiwiYXJyIiwiaW5kZXgiLCJkZWFsTnVtYmVyWmVybyIsIm51bSIsImZpbGwiLCJqb2luIiwiZm9ybWF0RGF0ZSIsImRhdGUiLCJmb3JtYXRTdHJpbmciLCJpc1N0cmluZyIsImZvcm1hdCIsIkRhdGUiLCJ1c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zIiwidXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zIiwiaXNOYU4iLCJkZWFsTm9uQm9vbGVhblByb3BzIiwiZm9ybWF0TW9uZXkiLCJhbW91bnQiLCJkZWNpbWFsQ291bnQiLCJkZWNpbWFsIiwidGhvdXNhbmRzIiwiTWF0aCIsImFicyIsIm5lZ2F0aXZlU2lnbiIsImkiLCJwYXJzZUludCIsIk51bWJlciIsInRvRml4ZWQiLCJqIiwic3Vic3RyIiwicmVwbGFjZSIsImRlYWxNb25leSIsImRlYWxNYXliZU51bWJlciIsImRlYWxVcmxRdWVyeSIsInF1ZXJ5T2JqIiwiQmFzZVBhZGRpbmciLCJCb3giLCJUYWIiLCJDYXJkIiwiUGFydGluZyIsIkxpc3RJdGVtIiwiQnV0dG9uQmFzZSIsInVzZXJJbmZvIiwicGhvbmUiLCJlbWFpbCIsImxvZ291dCIsIm9yZGVyQ29pbkN1cnJlbnRNb250aCIsIm9yZGVyQ29pbk5leHRNb250aCIsImhlaWdodCIsIndpZHRoIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNB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O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsNkMiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXG1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQpO1xuIiwiaW1wb3J0IE1lIGZyb20gJy4uLy4uL3V0aWxzL3ZpZXcvbWUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZVxyXG4iLCJcclxudHlwZSBNb2RlbEZhY3Rvcnk8TiA9ICcnPiA9IDxULCBFIGV4dGVuZHMgTW9kZWxBY3Rpb25PYmpIZWxwPGFueSwgVCAmIEZldGNoT2JqPj4obmFtZTogc3RyaW5nLCBzdGF0ZTogVCwgYWN0aW9uczogRSkgPT4gTW9kZWxEYXRhPFQgJiBGZXRjaE9iaiwgRT5cclxuXHJcbmV4cG9ydCBjb25zdCBiYXNlQWN0aW9uT3B0aW9uOiBCYXNlTW9kZWxBY3Rpb25PcHRpb24gPSB7XHJcbiAgZGF0YTogbnVsbCxcclxuICBtdXRhdGU6ICgpID0+IHt9LFxyXG4gIG5vdGljZTogKCkgPT4ge30sXHJcbiAgcXVlcnk6ICgpID0+IHt9LFxyXG4gIHNldERhdGE6ICgpID0+IHt9LFxyXG4gIHN0b3JlOiB7fVxyXG59XHJcblxyXG5jb25zdCBtb2RlbE5hbWVMaXN0OnN0cmluZ1tdID0gW11cclxuZXhwb3J0IGNvbnN0IG1vZGVsRmFjdG9yeTogTW9kZWxGYWN0b3J5ID0gKG5hbWUsIHN0YXRlLCBhY3Rpb25zKSA9PiB7XHJcbiAgaWYgKG1vZGVsTmFtZUxpc3QuaW5jbHVkZXMobmFtZSkpIHtcclxuICAgIHRocm93IEVycm9yKGBtb2RlbCBOYW1lIGR1cGxpY2F0ZTogJHtuYW1lfWApXHJcbiAgfVxyXG4gIG1vZGVsTmFtZUxpc3QucHVzaChuYW1lKVxyXG4gIHJldHVybiB7XHJcbiAgICBuYW1lLFxyXG4gICAgc3RhdGU6IHtcclxuICAgICAgLi4uc3RhdGUsXHJcbiAgICAgIGZldGNoTG9hZDoge30sXHJcbiAgICAgIGZldGNoRXJyb3I6IHt9LFxyXG4gICAgfSxcclxuICAgIGFjdGlvbnMsXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VNb2RlbDxBIGV4dGVuZHMgRmV0Y2hPYmosIEIgZXh0ZW5kcyBNb2RlbEFjdGlvbk9iakhlbHA8YW55LCBBPiwgQywgRCBleHRlbmRzIE1vZGVsQWN0aW9uT2JqSGVscDxhbnksIEEgJiBDPj4obW9kZWw6IHtcclxuICBzdGF0ZTogQVxyXG4gIGFjdGlvbnM6IEJcclxuICBuYW1lOiBzdHJpbmdcclxufSwgbmFtZTogc3RyaW5nLCBzdGF0ZTogQywgYWN0aW9uczogRCk6IHtcclxuICBzdGF0ZTogQSAmIENcclxuICBhY3Rpb25zOiBCICYgRCAmIHtcclxuICAgIFtrZXkgaW4ga2V5b2YgQl06IE1vZGVsQWN0aW9uPGFueSwgQT5cclxuICB9ICYge1xyXG4gICAgW2tleSBpbiBrZXlvZiBEXTogTW9kZWxBY3Rpb248YW55LCBBICYgQz5cclxuICB9XHJcbiAgbmFtZTogc3RyaW5nXHJcbn0ge1xyXG4gIE9iamVjdC5rZXlzKG1vZGVsLnN0YXRlKS5mb3JFYWNoKHZhbHVlID0+IHtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIGlmIChzdGF0ZT8uW3ZhbHVlXSAmJiAhWydmZXRjaEVycm9yJywgJ2ZldGNoTG9hZCddLmluY2x1ZGVzKHZhbHVlKSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYG1lcmdlTW9kZWw6IHN0YXRlIGR1cGxpY2F0ZTo6IGtleSAke3ZhbHVlfWApXHJcbiAgICB9XHJcbiAgfSlcclxuICBPYmplY3Qua2V5cyhtb2RlbC5hY3Rpb25zKS5mb3JFYWNoKHZhbHVlID0+IHtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIGlmIChhY3Rpb25zPy5bdmFsdWVdKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgbWVyZ2VNb2RlbDogYWN0aW9uIGR1cGxpY2F0ZTo6IGtleSAke3ZhbHVlfWApXHJcbiAgICB9XHJcbiAgfSlcclxuICBjb25zdCBtZXJnZU5hbWUgPSBgJHtuYW1lfV93aXRoXyR7bW9kZWwubmFtZX1gXHJcbiAgaWYgKG1vZGVsTmFtZUxpc3QuaW5jbHVkZXMobWVyZ2VOYW1lKSkge1xyXG4gICAgdGhyb3cgRXJyb3IoYG1vZGVsIE5hbWUgZHVwbGljYXRlOiAke21lcmdlTmFtZX1gKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIG5hbWU6IG1lcmdlTmFtZSxcclxuICAgIHN0YXRlOiB7XHJcbiAgICAgIC4uLm1vZGVsLnN0YXRlLFxyXG4gICAgICAuLi5zdGF0ZSxcclxuICAgIH0sXHJcbiAgICBhY3Rpb25zOiB7XHJcbiAgICAgIC4uLm1vZGVsLmFjdGlvbnMsXHJcbiAgICAgIC4uLmFjdGlvbnMsXHJcbiAgICB9LFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlVHdvTW9kZWw8QSwgQiBleHRlbmRzIE1vZGVsQWN0aW9uT2JqSGVscDxhbnksIEE+LCBDLCBEIGV4dGVuZHMgTW9kZWxBY3Rpb25PYmpIZWxwPGFueSwgQz4+KG1vZGVsOiB7XHJcbiAgc3RhdGU6IEFcclxuICBhY3Rpb25zOiBCXHJcbiAgbmFtZTogc3RyaW5nXHJcbn0sIG1vZGVsVDoge1xyXG4gIHN0YXRlOiBDXHJcbiAgYWN0aW9uczogRFxyXG4gIG5hbWU6IHN0cmluZ1xyXG59KToge1xyXG4gIG5hbWU6IHN0cmluZ1xyXG4gIHN0YXRlOiBBICYgQ1xyXG4gIGFjdGlvbnM6IEIgJiBEICYge1xyXG4gICAgW2tleSBpbiBrZXlvZiBCXTogTW9kZWxBY3Rpb25cclxuICB9ICYge1xyXG4gICAgW2tleSBpbiBrZXlvZiBEXTogTW9kZWxBY3Rpb25cclxuICB9XHJcbn0ge1xyXG4gIE9iamVjdC5rZXlzKG1vZGVsLnN0YXRlKS5mb3JFYWNoKHZhbHVlID0+IHtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIGlmIChtb2RlbFQuc3RhdGU/Llt2YWx1ZV0gJiYgIVsnZmV0Y2hFcnJvcicsICdmZXRjaExvYWQnXS5pbmNsdWRlcyh2YWx1ZSkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBtZXJnZVR3b01vZGVsOiBzdGF0ZSBkdXBsaWNhdGU6OiBrZXkgJHt2YWx1ZX1gKVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgT2JqZWN0LmtleXMobW9kZWwuYWN0aW9ucykuZm9yRWFjaCh2YWx1ZSA9PiB7XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBpZiAobW9kZWxUPy5hY3Rpb25zPy5bdmFsdWVdKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgbWVyZ2VUd29Nb2RlbDogYWN0aW9uIGR1cGxpY2F0ZTo6IGtleSAke3ZhbHVlfWApXHJcbiAgICB9XHJcbiAgfSlcclxuICBjb25zdCBtZXJnZU5hbWUgPSBgJHttb2RlbC5uYW1lfV9hbmRfJHttb2RlbFQubmFtZX1gXHJcbiAgaWYgKG1vZGVsTmFtZUxpc3QuaW5jbHVkZXMobWVyZ2VOYW1lKSkge1xyXG4gICAgdGhyb3cgRXJyb3IoYG1vZGVsIE5hbWUgZHVwbGljYXRlOiAke21lcmdlTmFtZX1gKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIG5hbWU6IG1lcmdlTmFtZSxcclxuICAgIHN0YXRlOiB7XHJcbiAgICAgIC4uLm1vZGVsLnN0YXRlLFxyXG4gICAgICAuLi5tb2RlbFQuc3RhdGUsXHJcbiAgICB9LFxyXG4gICAgYWN0aW9uczoge1xyXG4gICAgICAuLi5tb2RlbC5hY3Rpb25zLFxyXG4gICAgICAuLi5tb2RlbFQuYWN0aW9ucyxcclxuICAgIH0sXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbWVyZ2VUaHJlZU1vZGVsID0gPEEgZXh0ZW5kcyBGZXRjaE9iaiwgVCBleHRlbmRzIE1vZGVsQWN0aW9uT2JqSGVscDxhbnksIEE+LCBCIGV4dGVuZHMgRmV0Y2hPYmosIE8gZXh0ZW5kcyBNb2RlbEFjdGlvbk9iakhlbHA8YW55LCBCPiwgQyBleHRlbmRzIEZldGNoT2JqLCBQIGV4dGVuZHMgTW9kZWxBY3Rpb25PYmpIZWxwPGFueSwgQz4+KG1vZGVsQTogTW9kZWxEYXRhPEEsIFQ+LCBtb2RlbEI6IE1vZGVsRGF0YTxCLCBPPiwgbW9kZWxDOiBNb2RlbERhdGE8QywgUD4pOiB7XHJcbiAgbmFtZTogc3RyaW5nXHJcbiAgc3RhdGU6IEEgJiBCICYgQ1xyXG4gIGFjdGlvbnM6IFQgJiBPICYgUCAmIHtcclxuICAgIFtrZXkgaW4ga2V5b2YgVF06IE1vZGVsQWN0aW9uXHJcbiAgfSAmIHtcclxuICAgIFtrZXkgaW4ga2V5b2YgT106IE1vZGVsQWN0aW9uXHJcbiAgfSAmIHtcclxuICAgIFtrZXkgaW4ga2V5b2YgUF06IE1vZGVsQWN0aW9uXHJcbiAgfVxyXG59ID0+IHtcclxuICByZXR1cm4gbWVyZ2VUd29Nb2RlbChtZXJnZVR3b01vZGVsKG1vZGVsQSwgbW9kZWxCKSwgbW9kZWxDKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbWVyZ2VMaXN0TW9kZWwgPSAobW9kZWxMaXN0OiBNb2RlbERhdGE8YW55LCBhbnk+W10pID0+IHtcclxuICByZXR1cm4gbW9kZWxMaXN0LnNsaWNlKDEpLnJlZHVjZSgoYWNjLCBtb2RlbCkgPT4gbWVyZ2VUd29Nb2RlbChhY2MsIG1vZGVsKSwgbW9kZWxMaXN0WzBdKVxyXG59XHJcblxyXG5jb25zdCBpbml0TGlzdDogc3RyaW5nW10gPSBbXVxyXG5leHBvcnQgY29uc3QgaW5pdE1vZGVsID0gPFQgZXh0ZW5kcyBGZXRjaE9iaiwgRSBleHRlbmRzIE1vZGVsQWN0aW9uT2JqSGVscDxhbnksIFQ+Pihtb2RlbDogTW9kZWxEYXRhPFQsIEU+LCBpbml0U3RhdGU6IFBhcnRpYWw8VD4pID0+IHtcclxuICBpZiAoaW5pdExpc3QuaW5jbHVkZXMobW9kZWwubmFtZSkpIHJldHVyblxyXG4gIGluaXRMaXN0LnB1c2gobW9kZWwubmFtZSlcclxuICBtb2RlbC5zdGF0ZSA9IHtcclxuICAgIC4uLm1vZGVsLnN0YXRlLFxyXG4gICAgLi4uaW5pdFN0YXRlLFxyXG4gIH1cclxufVxyXG5cclxuLy8gY29uc3QgbW9kZWwgPSBtb2RlbEZhY3Rvcnkoe30sIHtcclxuLy8gICBzczoge1xyXG4vLyAgICAgZWVlOiAodmFsdWU6IHN0cmluZywgb3B0aW9uKSA9PiB7XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4vLyB9KVxyXG4vL1xyXG4vLyB1c2VTdG9yZU1vZGVsKE1vZHVsZUVudW0uVGVzdCwgbW9kZWwpLmFjdGlvbnMuc3MuZWVlKCcnKVxyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIG1lcmdlSW50b01vZGVsKG9yaWdpbk1vZGVsLCBuYW1lLCBpbm5lck1vZGVsKSB7XHJcbi8vXHJcbi8vIH1cclxuXHJcbi8vIGNvbnN0IF9tb2RlbCA9IG1lcmdlVHdvTW9kZWwobW9kZWxGYWN0b3J5KHtcclxuLy8gICB0MTogJydcclxuLy8gfSwge1xyXG4vLyB9KSwgbW9kZWxGYWN0b3J5KHtcclxuLy8gICB0MzogJydcclxuLy8gfSwge1xyXG4vLyB9KSlcclxuLy9cclxuLy8gbWVyZ2VNb2RlbChfbW9kZWwsIHtcclxuLy8gICB0MjogJydcclxuLy8gfSwge1xyXG4vLyB9KVxyXG4iLCJpbXBvcnQge3VzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQge2dyYXBoUUxNdXRhdGUsIGdyYXBoUUxRdWVyeX0gZnJvbSAnLi4vY2xpZW50J1xyXG5pbXBvcnQge2Jhc2VBY3Rpb25PcHRpb259IGZyb20gJy4vbW9kZWxVdGlsJ1xyXG5cclxuZXhwb3J0IGNvbnN0IG9yaWdpblN0b3JlOiBPcmlnaW5TdG9yZSA9IHt9XHJcblxyXG5jb25zdCBpc0Z1bmN0aW9uID0gKGZ1bmN0aW9uVG9DaGVjazogYW55KSA9PiB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uVG9DaGVjayAmJiB7fS50b1N0cmluZy5jYWxsKGZ1bmN0aW9uVG9DaGVjaykgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSdcclxufVxyXG5cclxudHlwZSBTdG9yZVN0YXRlUmVzdWx0PFQsIEUgZXh0ZW5kcyBNb2RlbEFjdGlvbk9iakhlbHA8YW55LCBUPj4gPSBNb2RlbFJlc3VsdDxULCBFPiAmIHtcclxuICBzdG9yZTogT3JpZ2luU3RvcmVcclxuICBnZXRMb2FkOiAocXVlcnk6IGFueSkgPT4gbnVtYmVyXHJcbn1cclxuXHJcbnR5cGUgVXNlTW9kZWxTdGF0ZSA9IDxUIGV4dGVuZHMgRmV0Y2hPYmosIEUgZXh0ZW5kcyBNb2RlbEFjdGlvbk9iakhlbHA8YW55LCBUPj4obW9kZWw6IE1vZGVsRGF0YTxULCBFPiwga2V5Pzogc3RyaW5nIHwgW3N0cmluZywgc3RyaW5nXSkgPT4gU3RvcmVTdGF0ZVJlc3VsdDxULCBFPlxyXG5cclxuZXhwb3J0IGNvbnN0IGRlYWxOYW1lU3BhY2UgPSAoa2V5OiBzdHJpbmcsIG5hbWVTcGFjZTogc3RyaW5nKSA9PiB7XHJcbiAgaWYgKG5hbWVTcGFjZSkge1xyXG4gICAgcmV0dXJuIGAke2tleX1fJHtuYW1lU3BhY2V9YFxyXG4gIH1cclxuICByZXR1cm4gYCR7a2V5fWBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVN0b3JlTW9kZWw6IFVzZU1vZGVsU3RhdGUgPSAobW9kZWwsIGtleT86IHN0cmluZyB8IFtzdHJpbmcsIHN0cmluZ10pID0+IHtcclxuICBjb25zdCBfa2V5ID0gbW9kZWwubmFtZSA/PyAoIWtleSA/ICcnIDogQXJyYXkuaXNBcnJheShrZXkpID8gZGVhbE5hbWVTcGFjZShrZXlbMF0sIGtleVsxXSkgOiBrZXkpXHJcbiAgY29uc3Qge2FjdGlvbnMsIHN0YXRlfSA9IG1vZGVsXHJcbiAgY29uc3QgWywgc2V0U3RhdGVdID0gdXNlU3RhdGUoT2JqZWN0LmNyZWF0ZShudWxsKSlcclxuICBpZiAoIV9rZXkpIHtcclxuICAgIHRocm93IEVycm9yKCdubyBrZXknKVxyXG4gIH1cclxuICBpZiAoIW9yaWdpblN0b3JlW19rZXldKSB7XHJcbiAgICBvcmlnaW5TdG9yZVtfa2V5XSA9IHtcclxuICAgICAga2V5czogX2tleSxcclxuICAgICAgc3RhdGUsXHJcbiAgICAgIGFjdGlvbnM6IHt9LFxyXG4gICAgICBzZXREYXRhOiBbXVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBub3RpY2UgPSB1c2VDYWxsYmFjaygoZGF0YTogYW55KSA9PiB7XHJcbiAgICBvcmlnaW5TdG9yZVtfa2V5XS5zZXREYXRhLmZvckVhY2godmFsdWUgPT4ge1xyXG4gICAgICB2YWx1ZT8uKGRhdGEpXHJcbiAgICB9KVxyXG4gIH0sIFtfa2V5XSlcclxuICBjb25zdCBzZXREYXRhOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjx0eXBlb2Ygc3RhdGU+PiA9IHVzZUNhbGxiYWNrKChkYXRhKSA9PiB7XHJcbiAgICBjb25zdCBvbGRTdGF0ZSA9IG9yaWdpblN0b3JlW19rZXldLnN0YXRlXHJcbiAgICBjb25zdCBuZXdEYXRhID0gaXNGdW5jdGlvbihkYXRhKSA/IChkYXRhIGFzICh2OiB0eXBlb2Ygb2xkU3RhdGUpID0+IHZvaWQpKG9sZFN0YXRlKSA6IGRhdGFcclxuICAgIG9yaWdpblN0b3JlW19rZXldLnN0YXRlID0gbmV3RGF0YVxyXG4gICAgbm90aWNlKG5ld0RhdGEpXHJcbiAgfSwgW19rZXksIG5vdGljZV0pXHJcblxyXG4gIGNvbnN0IHNldExvYWQgPSB1c2VDYWxsYmFjaygocXVlcnk6IGFueSwgZmxhZzogYm9vbGVhbikgPT4ge1xyXG4gICAgc2V0RGF0YShwcmV2U3RhdGUgPT4gKHtcclxuICAgICAgLi4ucHJldlN0YXRlLFxyXG4gICAgICBmZXRjaExvYWQ6IHtcclxuICAgICAgICAuLi5wcmV2U3RhdGUuZmV0Y2hMb2FkID8/IHt9LFxyXG4gICAgICAgIFtxdWVyeT8ubG9jPy5zb3VyY2U/LmJvZHldOiBmbGFnLFxyXG4gICAgICB9XHJcbiAgICB9KSlcclxuICB9LCBbc2V0RGF0YV0pXHJcbiAgY29uc3Qgc2V0RXJyb3IgPSB1c2VDYWxsYmFjaygocXVlcnk6IGFueSwgZXJyOiBhbnkpID0+IHtcclxuICAgIHNldERhdGEocHJldlN0YXRlID0+ICh7XHJcbiAgICAgIC4uLnByZXZTdGF0ZSxcclxuICAgICAgZmV0Y2hFcnJvcjoge1xyXG4gICAgICAgIC4uLnByZXZTdGF0ZS5mZXRjaEVycm9yID8/IHt9LFxyXG4gICAgICAgIFtxdWVyeT8ubG9jPy5zb3VyY2U/LmJvZHldOiBlcnIsXHJcbiAgICAgIH1cclxuICAgIH0pKVxyXG4gIH0sIFtzZXREYXRhXSlcclxuXHJcbiAgY29uc3QgcXVlcnk6IEdyYXBocWxRdWVyeSA9IHVzZUNhbGxiYWNrKGFzeW5jIChxdWVyeSwgcGFyYW1zLCBvcHRpb24pID0+IHtcclxuICAgIHNldExvYWQocXVlcnksIHRydWUpXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBncmFwaFFMUXVlcnkoKShxdWVyeSwgcGFyYW1zLCBvcHRpb24pLmNhdGNoKGUgPT4ge1xyXG4gICAgICBzZXRFcnJvcihxdWVyeSwgZSlcclxuICAgIH0pLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkKHF1ZXJ5LCBmYWxzZSlcclxuICAgIH0pIGFzIGFueVxyXG4gICAgcmV0dXJuIHJlcz8uZGF0YVxyXG4gIH0sIFtzZXRFcnJvciwgc2V0TG9hZF0pXHJcbiAgY29uc3QgbXV0YXRlOiBHcmFwaHFsTXV0YXRlID0gdXNlQ2FsbGJhY2soYXN5bmMgKG11dGF0aW9uLCBwYXJhbXMsIG9wdGlvbikgPT4ge1xyXG4gICAgc2V0TG9hZChtdXRhdGlvbiwgdHJ1ZSlcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGdyYXBoUUxNdXRhdGUoKShtdXRhdGlvbiwgcGFyYW1zLCBvcHRpb24pLmNhdGNoKGUgPT4ge1xyXG4gICAgICBzZXRFcnJvcihtdXRhdGlvbiwgZSlcclxuICAgIH0pLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkKG11dGF0aW9uLCBmYWxzZSlcclxuICAgIH0pIGFzIGFueVxyXG4gICAgcmV0dXJuIHJlcz8uZGF0YVxyXG4gIH0sIFtzZXRFcnJvciwgc2V0TG9hZF0pXHJcblxyXG4gIGlmIChPYmplY3Qua2V5cyhvcmlnaW5TdG9yZVtfa2V5XS5hY3Rpb25zKS5sZW5ndGggPT09IDAgJiYgb3JpZ2luU3RvcmVbX2tleV0uYWN0aW9ucy5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XHJcbiAgICBPYmplY3Qua2V5cyhhY3Rpb25zKS5mb3JFYWNoKHZhbHVlID0+IHtcclxuICAgICAgb3JpZ2luU3RvcmVbX2tleV0uYWN0aW9uc1t2YWx1ZV0gPSAodjogYW55KSA9PiBhY3Rpb25zW3ZhbHVlXSh2LCB7XHJcbiAgICAgICAgLi4uYmFzZUFjdGlvbk9wdGlvbixcclxuICAgICAgICBkYXRhOiBvcmlnaW5TdG9yZVtfa2V5XS5zdGF0ZSxcclxuICAgICAgICBub3RpY2UsXHJcbiAgICAgICAgc2V0RGF0YSxcclxuICAgICAgICBxdWVyeSxcclxuICAgICAgICBtdXRhdGUsXHJcbiAgICAgICAgc3RvcmU6IG9yaWdpblN0b3JlLFxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIE9iamVjdC5rZXlzKGFjdGlvbnMpLmZvckVhY2godmFsdWUgPT4ge1xyXG4gICAgICBvcmlnaW5TdG9yZVtfa2V5XS5hY3Rpb25zW3ZhbHVlXSA9ICh2OiBhbnkpID0+IGFjdGlvbnNbdmFsdWVdKHYsIHtcclxuICAgICAgICAuLi5iYXNlQWN0aW9uT3B0aW9uLFxyXG4gICAgICAgIGRhdGE6IG9yaWdpblN0b3JlW19rZXldLnN0YXRlLFxyXG4gICAgICAgIG5vdGljZSxcclxuICAgICAgICBzZXREYXRhLFxyXG4gICAgICAgIHF1ZXJ5LFxyXG4gICAgICAgIG11dGF0ZSxcclxuICAgICAgICBzdG9yZTogb3JpZ2luU3RvcmUsXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH0sIFtfa2V5LCBhY3Rpb25zLCBtdXRhdGUsIG5vdGljZSwgcXVlcnksIHNldERhdGFdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBvcmlnaW5TdG9yZVtfa2V5XS5zZXREYXRhID0gW1xyXG4gICAgICAuLi5vcmlnaW5TdG9yZVtfa2V5XS5zZXREYXRhID8/IFtdLFxyXG4gICAgICBzZXRTdGF0ZSxcclxuICAgIF1cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIG9yaWdpblN0b3JlW19rZXldLnNldERhdGEgPSBvcmlnaW5TdG9yZVtfa2V5XS5zZXREYXRhLmZpbHRlcih2YWx1ZSA9PiB2YWx1ZSAhPT0gc2V0U3RhdGUpXHJcbiAgICB9XHJcbiAgfSwgW19rZXldKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgc3RhdGU6IG9yaWdpblN0b3JlW19rZXldLnN0YXRlLFxyXG4gICAgYWN0aW9uczogKG9yaWdpblN0b3JlW19rZXldLmFjdGlvbnMpIGFzIERlYWxGdW5PYmo8dHlwZW9mIGFjdGlvbnM+LFxyXG4gICAgc3RvcmU6IG9yaWdpblN0b3JlLFxyXG4gICAgZ2V0TG9hZDogcXVlcnkgPT4gb3JpZ2luU3RvcmVbX2tleV0uc3RhdGUuZmV0Y2hMb2FkW3F1ZXJ5Py5sb2M/LnNvdXJjZT8uYm9keV0gPyAxIDogMFxyXG4gIH1cclxufVxyXG5cclxuIiwiaW1wb3J0ICdjcm9zcy1mZXRjaC9wb2x5ZmlsbCdcclxuaW1wb3J0IHtnZXRUb2tlbiwgc2V0VG9rZW59IGZyb20gJy4uL3Rvb2xzL3Rva2VuJ1xyXG5pbXBvcnQge09wZXJhdGlvbn0gZnJvbSAnYXBvbGxvLWxpbmsnXHJcbmltcG9ydCB7RXJyb3JMaW5rfSBmcm9tICdhcG9sbG8tbGluay1lcnJvcidcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IEFwb2xsb0NsaWVudCBmcm9tICdhcG9sbG8tYm9vc3QnXHJcbmltcG9ydCB7c3NMb2d9IGZyb20gJy4uL3Rvb2xzL2dsb2JhbCdcclxuaW1wb3J0IHtEb2N1bWVudE5vZGV9IGZyb20gJ2dyYXBocWwnXHJcbmltcG9ydCB7ZG9jfSBmcm9tICcuLi9ncmFwaHFsVHlwZXMvZG9jJ1xyXG5pbXBvcnQge3Nob3dNZXNzYWdlfSBmcm9tICcuLi9jb21wb25lbnRzL01lc3NhZ2UvTWVzc2FnZSdcclxuaW1wb3J0IGdldENvbmZpZyBmcm9tICduZXh0L2NvbmZpZydcclxuXHJcbmNvbnN0IGNvbmZpZyA9IGdldENvbmZpZygpXHJcbmNvbnN0IGNsaWVudF9hcGlfdXJpID0gY29uZmlnPy5wdWJsaWNSdW50aW1lQ29uZmlnPy5jbGllbnRfYXBpX3VyaSA/PyAnaHR0cDovL2xvY2FsaG9zdDo0NDY0L3R5cGVfX2dyYXBocWwvYXBpJ1xyXG5cclxuY29uc3Qgb21pdFR5cGVuYW1lID0gKGtleTogYW55LCB2YWx1ZTogYW55KSA9PiB7XHJcbiAgcmV0dXJuIGtleSA9PT0gJ19fdHlwZW5hbWUnID8gdW5kZWZpbmVkIDogdmFsdWVcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldENsaWVudCA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgcmVxdWVzdDogKG9wZXJhdGlvbjogT3BlcmF0aW9uKSA9PiBQcm9taXNlPHZvaWQ+IHwgdm9pZCA9IChvcGVyYXRpb24pID0+IHtcclxuICAgIGlmIChvcGVyYXRpb24udmFyaWFibGVzKSB7XHJcbiAgICAgIG9wZXJhdGlvbi52YXJpYWJsZXMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9wZXJhdGlvbi52YXJpYWJsZXMpLCBvbWl0VHlwZW5hbWUpXHJcbiAgICB9XHJcbiAgICBvcGVyYXRpb24uc2V0Q29udGV4dCgoe2hlYWRlcnMgPSB7fX0pID0+ICh7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAuLi5oZWFkZXJzLFxyXG4gICAgICAgIC8vIOWQjuWPsOS4h+iDveadg+mZkFxyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGdldFRva2VuKCksXHJcbiAgICAgIH0sXHJcbiAgICB9KSlcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlZnJlc2hUb2tlbiA9ICgpID0+IHtcclxuICAgIGdyYXBoUUxRdWVyeSgpKGRvYy5yZWZyZXNoVG9rZW4sIHtcclxuICAgICAgZGF0YTogZ2V0VG9rZW4oJ3JlZnJlc2h0b2tlbicpLFxyXG4gICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICBpZiAocmVzLmRhdGE/LnJlZnJlc2hUb2tlbj8udG9rZW4pIHtcclxuICAgICAgICBzZXRUb2tlbihyZXMuZGF0YT8ucmVmcmVzaFRva2VuPy50b2tlbilcclxuICAgICAgICBzZXRUb2tlbihyZXMuZGF0YT8ucmVmcmVzaFRva2VuPy5yZWZyZXNodG9rZW4sICdyZWZyZXNodG9rZW4nKVxyXG4gICAgICAgIHNob3dNZXNzYWdlKHttZXNzYWdlOiAn55m75b2V6LaF5pe2LOWIt+aWsOeZu+W9leS/oeaBryd9KVxyXG4gICAgICAgIFJvdXRlci5yZWxvYWQoKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNob3dNZXNzYWdlKHttZXNzYWdlOiAn6K+36YeN5paw55m75b2VJ30pXHJcbiAgICAgICAgUm91dGVyLnB1c2goJy9sb2dpbicpXHJcbiAgICAgIH1cclxuICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgIHNzTG9nKGVycilcclxuICAgICAgc2hvd01lc3NhZ2Uoe21lc3NhZ2U6ICfor7fph43mlrDnmbvlvZUnfSlcclxuICAgICAgUm91dGVyLnB1c2goJy9sb2dpbicpXHJcbiAgICB9KVxyXG4gIH1cclxuICBjb25zdCBvbkVycm9yOiBFcnJvckxpbmsuRXJyb3JIYW5kbGVyID0gKHtyZXNwb25zZSwgb3BlcmF0aW9uLCBncmFwaFFMRXJyb3JzLCBuZXR3b3JrRXJyb3J9KSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgIC8vIGNvbnNvbGUubG9nKG9wZXJhdGlvbilcclxuICAgIGlmIChncmFwaFFMRXJyb3JzKSB7XHJcbiAgICAgIGdyYXBoUUxFcnJvcnMuZm9yRWFjaCgoe21lc3NhZ2UsIGxvY2F0aW9ucywgcGF0aCwgZXh0ZW5zaW9uc30pID0+IHtcclxuICAgICAgICBzc0xvZyhcclxuICAgICAgICAgICAgYFtHcmFwaFFMIGVycm9yXTogTWVzc2FnZTogJHttZXNzYWdlfSwgTG9jYXRpb246ICR7bG9jYXRpb25zfSwgUGF0aDogJHtwYXRofWAsXHJcbiAgICAgICAgKVxyXG4gICAgICAgIGlmIChleHRlbnNpb25zPy5jb2RlID09PSAnVU5BVVRIRU5USUNBVEVEJykge1xyXG4gICAgICAgICAgaWYgKG1lc3NhZ2UuaW5jbHVkZXMoJ2ZpcnN0JykpIHtcclxuICAgICAgICAgICAgcmVmcmVzaFRva2VuKClcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNob3dNZXNzYWdlKHttZXNzYWdlOiAn6K+36YeN5paw55m75b2VJ30pXHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWVzc2FnZS5pbmNsdWRlcygnVW5leHBlY3RlZCBlcnJvcicpKSB7XHJcbiAgICAgICAgICBzaG93TWVzc2FnZSh7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2Uuc3BsaXQoJ1wiJylbMV0sXHJcbiAgICAgICAgICAgIG1zZ190eXBlOiAnZXJyb3InLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc2hvd01lc3NhZ2Uoe21lc3NhZ2V9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBpZiAobmV0d29ya0Vycm9yKSB7XHJcbiAgICAgIGNvbnN0IGVyck1zZyA9ICgnYm9keVRleHQnIGluIG5ldHdvcmtFcnJvcikgPyBuZXR3b3JrRXJyb3I/LmJvZHlUZXh0IDogKCdyZXN1bHQnIGluIG5ldHdvcmtFcnJvcikgPyBuZXR3b3JrRXJyb3I/LnJlc3VsdD8uZXJyb3IgOiAnJ1xyXG4gICAgICBzc0xvZyhgW05ldHdvcmsgZXJyb3JdOiAke2Vyck1zZ31gKVxyXG4gICAgICBpZiAoJ3N0YXR1c0NvZGUnIGluIG5ldHdvcmtFcnJvciAmJiBuZXR3b3JrRXJyb3I/LnN0YXR1c0NvZGUgPT09IDQwMSkge1xyXG4gICAgICAgIGlmIChlcnJNc2cuaW5jbHVkZXMoJ2ZpcnN0JykgJiYgZ2V0VG9rZW4oJ3JlZnJlc2h0b2tlbicpKSB7XHJcbiAgICAgICAgICByZWZyZXNoVG9rZW4oKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzaG93TWVzc2FnZSh7bWVzc2FnZTogJ+ivt+mHjeaWsOeZu+W9lSd9KVxyXG4gICAgICAgICAgUm91dGVyLnB1c2goJy9sb2dpbicpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbmV3IEFwb2xsb0NsaWVudCh7XHJcbiAgICAvLyBsaW5rOiBodHRwTGluayxcclxuICAgIHVyaTogY2xpZW50X2FwaV91cmksXHJcbiAgICByZXF1ZXN0LFxyXG4gICAgb25FcnJvcixcclxuICB9KVxyXG59XHJcblxyXG5jb25zdCBkZWZhdWx0Q2xpZW50ID0gZ2V0Q2xpZW50KClcclxuXHJcbi8vIGNvbnN0IGRlYWxQYXJhbXMgPSAoKHBhcmFtczogYW55KSA9PiAoe1xyXG4vLyAgIGRhdGE6IHBhcmFtcyxcclxuLy8gfSkpXHJcbmNvbnN0IGRlYWxQYXJhbXMgPSAoKHBhcmFtczogYW55KSA9PiBwYXJhbXMpXHJcblxyXG5leHBvcnQgY29uc3QgZ3JhcGhRTFF1ZXJ5ID0gKGNsaWVudCA9IGRlZmF1bHRDbGllbnQpID0+IGFzeW5jIChxdWVyeTogRG9jdW1lbnROb2RlLCBwYXJhbXM6IGFueSwgb3B0aW9uPzogYW55KSA9PiB7XHJcbiAgY29uc3QgX2RlYWxQYXJhbXNJbiA9IG9wdGlvbj8uZGVhbFBhcmFtc0luID8/IGRlYWxQYXJhbXNcclxuICByZXR1cm4gY2xpZW50LnF1ZXJ5KHtcclxuICAgIGZldGNoUG9saWN5OiAnbmV0d29yay1vbmx5JyxcclxuICAgIHF1ZXJ5LFxyXG4gICAgdmFyaWFibGVzOiB7XHJcbiAgICAgIC4uLihfZGVhbFBhcmFtc0luID8gX2RlYWxQYXJhbXNJbihwYXJhbXMpIDogcGFyYW1zKSxcclxuICAgIH0sXHJcbiAgICAuLi5vcHRpb24sXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdyYXBoUUxNdXRhdGUgPSAoY2xpZW50ID0gZGVmYXVsdENsaWVudCkgPT4gYXN5bmMgKG11dGF0aW9uOiBhbnksIHBhcmFtczogYW55LCBvcHRpb24/OiBhbnkpID0+IHtcclxuICBjb25zdCBfZGVhbFBhcmFtc0luID0gb3B0aW9uPy5kZWFsUGFyYW1zSW4gPz8gZGVhbFBhcmFtc1xyXG4gIHJldHVybiBjbGllbnQubXV0YXRlKHtcclxuICAgIG11dGF0aW9uLFxyXG4gICAgdmFyaWFibGVzOiB7XHJcbiAgICAgIC4uLihfZGVhbFBhcmFtc0luID8gX2RlYWxQYXJhbXNJbihwYXJhbXMpIDogcGFyYW1zKSxcclxuICAgIH0sXHJcbiAgICAuLi5vcHRpb24sXHJcbiAgfSlcclxufVxyXG5cclxuY29uc3Qgc2VydmVyQ2xpZW50ID0gKCkgPT4gbmV3IEFwb2xsb0NsaWVudCh7XHJcbiAgLy8gbGluazogaHR0cExpbmssXHJcbiAgdXJpOiBjbGllbnRfYXBpX3VyaSxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBzZXJ2ZXJRdWVyeSA9IGFzeW5jIChxdWVyeTogYW55LCBwYXJhbXM6IGFueSwgb3B0aW9uPzogYW55KSA9PiAoYXdhaXQgZ3JhcGhRTFF1ZXJ5KHNlcnZlckNsaWVudCgpKShxdWVyeSwgcGFyYW1zLCBvcHRpb24pKT8uZGF0YVxyXG5cclxuZXhwb3J0IGNvbnN0IHNlcnZlck11dGF0ZSA9IGFzeW5jIChtdXRhdGlvbjogYW55LCBwYXJhbXM6IGFueSwgb3B0aW9uPzogYW55KSA9PiAoYXdhaXQgZ3JhcGhRTE11dGF0ZShzZXJ2ZXJDbGllbnQoKSkobXV0YXRpb24sIHBhcmFtcywgb3B0aW9uKSk/LmRhdGFcclxuXHJcbiIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlUmVmfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEJldHRlclNjcm9sbCBmcm9tICdiZXR0ZXItc2Nyb2xsJ1xyXG5pbXBvcnQge3VzZVN0b3JlTW9kZWx9IGZyb20gJy4uLy4uL01vZGVsQWN0aW9uL3VzZVN0b3JlJ1xyXG5pbXBvcnQge2ZwTWVyZ2VQcmV9IGZyb20gJy4uLy4uL3Rvb2xzL3V0aWxzJ1xyXG5pbXBvcnQge21vZGVsRmFjdG9yeX0gZnJvbSAnLi4vLi4vTW9kZWxBY3Rpb24vbW9kZWxVdGlsJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGJTY3JvbGxNb2RlbCA9IG1vZGVsRmFjdG9yeSgnYlNjcm9sbE1vZGVsJywge1xyXG4gIHNjcm9sbDoge30gYXMgYW55LFxyXG59LCB7XHJcbiAgc2V0U2Nyb2xsOiAodmFsdWUsIG9wdGlvbikgPT4ge1xyXG4gICAgb3B0aW9uLnNldERhdGEoZnBNZXJnZVByZSh7XHJcbiAgICAgIHNjcm9sbDogdmFsdWUsXHJcbiAgICB9KSlcclxuICB9LFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IEJTY3JvbGxlciA9ICh7aXNYLCBjaGlsZHJlbiwgYm94SGVpZ2h0LCBib3hXaWR0aH06IHsgY2hpbGRyZW4/OiBhbnksIGJveEhlaWdodD86IGFueSwgYm94V2lkdGg/OiBhbnksIGlzWD86IGJvb2xlYW4gfSkgPT4ge1xyXG4gIGNvbnN0IHtzdGF0ZTogYnNTdGF0ZSwgYWN0aW9uczogYnNBY3Rpb25zfSA9IHVzZVN0b3JlTW9kZWwoYlNjcm9sbE1vZGVsKVxyXG4gIGNvbnN0IHNjcm9sbFJlZiA9IHVzZVJlZihudWxsKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBjb25zdCBzY3JvbGwgPSBuZXcgQmV0dGVyU2Nyb2xsKHNjcm9sbFJlZi5jdXJyZW50LCB7XHJcbiAgICAgIGNsaWNrOiB0cnVlLFxyXG4gICAgICBzY3JvbGxZOiB0cnVlLFxyXG4gICAgICB0YXBzOiB0cnVlLFxyXG4gICAgICAuLi4oaXNYID8ge1xyXG4gICAgICAgIHNjcm9sbFg6IHRydWUsXHJcbiAgICAgICAgc2Nyb2xsWTogZmFsc2UsXHJcbiAgICAgIH0gOiB7fSksXHJcbiAgICAgIHByZXZlbnREZWZhdWx0RXhjZXB0aW9uOiB7XHJcbiAgICAgICAgdGFnTmFtZTogL14oSU5QVVR8VEVYVEFSRUF8QlVUVE9OfFNFTEVDVCkkLyxcclxuICAgICAgICBjbGFzc05hbWU6IC8oXnxcXHMpLiooTXVpVGV4dEZpZWxkLXJvb3R8TXVpU2VsZWN0LXNlbGVjdCkuKihcXHN8JCkvLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgIGJzQWN0aW9ucy5zZXRTY3JvbGwoc2Nyb2xsKVxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgc2Nyb2xsLnN0b3AoKVxyXG4gICAgICBzY3JvbGwuZGVzdHJveSgpXHJcbiAgICB9XHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICAgIHJlZj17c2Nyb2xsUmVmfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXsnYm94J30+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17aXNYID8ge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgICAgICAgICB9IDoge319XHJcbiAgICAgICAgPntjaGlsZHJlbn08L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAuYm94IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAke2JveEhlaWdodCB8fCAnMTAwdmgnfTtcclxuICAgICAgICAgICAgd2lkdGg6ICR7KGlzWCAmJiBib3hXaWR0aCkgPyBgJHtib3hXaWR0aH1gIDogJ2F1dG8nIH07XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU3RvcmVmcm9udEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1N0b3JlZnJvbnQnXHJcbmltcG9ydCBBY2NvdW50Qm94SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQWNjb3VudEJveCdcclxuaW1wb3J0IFJlZGVlbUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1JlZGVlbSdcclxuaW1wb3J0IFBlb3BsZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1Blb3BsZSdcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgcmVkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9yZWQnXHJcbmltcG9ydCB7QXBwRm9vdEJhcn0gZnJvbSAnLi4vLi4vc3NfY29tbW9uL2VudW0nXHJcbmltcG9ydCB7bXBTdHlsZX0gZnJvbSAnLi4vLi4vc3R5bGUvY29tbW9uJ1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvb3RCYXIgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgY29uc3QgaXNBY3QgPSAocGF0aDogYW55KSA9PiByb3V0ZXIucGF0aG5hbWUuaW5jbHVkZXMocGF0aCBhcyBzdHJpbmcpXHJcbiAgcmV0dXJuIChcclxuICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXsnRm9vdEJhcid9PlxyXG4gICAgICAgIHtbXHJcbiAgICAgICAgICBbJ+mAm+W6lycsIDxTdG9yZWZyb250SWNvbi8+LCBgLyR7QXBwRm9vdEJhci5ob21lfWBdLFxyXG4gICAgICAgICAgWyfmi7zlm6InLCA8UGVvcGxlSWNvbi8+LCBgLyR7QXBwRm9vdEJhci5ncm91cH1gXSxcclxuICAgICAgICAgIFsn6L6+5Lq65Yy6JywgPFJlZGVlbUljb24vPiwgYC8ke0FwcEZvb3RCYXIuY2FyZH1gXSxcclxuICAgICAgICAgIC8vIFsn6LSt54mp6L2mJywgPFNob3BwaW5nQ2FydEljb24vPiwgYC8ke0FwcEZvb3RCYXIuY2FydH1gLCBzdGF0ZVNob3BDYXJ0LmRlYWxQcm9kdWN0TnVtYmVyKHN0YXRlU2hvcENhcnQpXSxcclxuICAgICAgICAgIFsn5oiRJywgPEFjY291bnRCb3hJY29uLz4sIGAvJHtBcHBGb290QmFyLm1lfWBdLFxyXG4gICAgICAgIF0ubWFwKHYgPT4gKFxyXG4gICAgICAgICAgICA8c2VjdGlvblxyXG4gICAgICAgICAgICAgICAga2V5PXtgRm9vdEJhcl8ke3ZbMF19YH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aXNBY3QodlsyXSkgPyAnYWN0JyA6ICcnfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaXNBY3QodlsyXSkgPyAnJyA6IHJvdXRlci5wdXNoKHZbMl0gYXMgc3RyaW5nKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHt2WzFdfVxyXG4gICAgICAgICAgICAgIDxzcGFuPnt2WzBdfTwvc3Bhbj5cclxuICAgICAgICAgICAgICB7fn52WzNdID4gMCAmJiA8YXNpZGU+e3ZbM119PC9hc2lkZT59XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICApKX1cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAuRm9vdEJhciB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAzcHggNHB4IDAgcmdiYSgwLDAsMCwwLjE0KSwgMCAzcHggM3B4IC0ycHggcmdiYSgwLDAsMCwwLjEyKSwgMCAxcHggOHB4IDAgcmdiYSgwLDAsMCwwLjIwKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgPiBzZWN0aW9uIHtcclxuICAgICAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgID4gYXNpZGUge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDIwJTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHttcFN0eWxlLnJlZH07XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYWN0IHtcclxuICAgICAgICAgICAgY29sb3I6ICR7cmVkWzYwMF19O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHtTbmFja2Jhcn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCB7YW1iZXIsIGJsdWUsIGNvbW1vbiwgZ3JlZW4sIGdyZXksIHJlZH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzJ1xyXG5pbXBvcnQge1NuYWNrYmFyUHJvcHN9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NuYWNrYmFyL1NuYWNrYmFyJ1xyXG5pbXBvcnQge29yaWdpblN0b3JlLCB1c2VTdG9yZU1vZGVsfSBmcm9tICcuLi8uLi9Nb2RlbEFjdGlvbi91c2VTdG9yZSdcclxuaW1wb3J0IHtmcE1lcmdlUHJlfSBmcm9tICcuLi8uLi90b29scy91dGlscydcclxuaW1wb3J0IHttb2RlbEZhY3Rvcnl9IGZyb20gJy4uLy4uL01vZGVsQWN0aW9uL21vZGVsVXRpbCdcclxuaW1wb3J0IHsgbHMgfSBmcm9tICcuLi8uLi90b29scy9kZWFsS2V5J1xyXG5cclxuY29uc3QgdHlwZUhlbHAgPSB7XHJcbiAgZGVmYXVsdDogYGJhY2tncm91bmQ6ICR7Z3JleVs3MDBdfTtgLFxyXG4gIHN1Y2Nlc3M6IGBiYWNrZ3JvdW5kOiAke2dyZWVuWzYwMF19O2AsXHJcbiAgd2FybmluZzogYGJhY2tncm91bmQ6ICR7YW1iZXJbNzAwXX07YCxcclxuICBpbmZvOiBgYmFja2dyb3VuZDogJHtibHVlWzcwMF19O2AsXHJcbiAgZXJyb3I6IGBiYWNrZ3JvdW5kOiAke3JlZFs3MDBdfTtgLFxyXG59XHJcbmNvbnN0IGdldFR5cGUgPSAodHlwZSA9ICdkZWZhdWx0JykgPT4gKHR5cGVIZWxwIGFzIGFueSlbdHlwZV1cclxuXHJcbnR5cGUgTWVzc2FnZVByb3BzID0gUGFydGlhbDxTbmFja2JhclByb3BzICYge1xyXG4gIG1zZ190eXBlOiAnZGVmYXVsdCcgfCAnc3VjY2VzcycgfCAnaW5mbycgfCAnd2FybmluZycgfCAnZXJyb3InIHwgc3RyaW5nXHJcbn0+XHJcblxyXG5jb25zdCBDdXNTbmFja2JhciA9IHN0eWxlZChTbmFja2Jhcik8TWVzc2FnZVByb3BzPmBcclxuICAmJiYgPiBkaXYge1xyXG4gICAgY29sb3I6ICR7Y29tbW9uLndoaXRlfTtcclxuICAgICR7KHttc2dfdHlwZX0pID0+IGdldFR5cGUobXNnX3R5cGUpfVxyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgbWVzc2FnZU1vZGVsID0gbW9kZWxGYWN0b3J5KCdtZXNzYWdlTW9kZWwnLCB7XHJcbiAgb3BlbjogZmFsc2UsXHJcbiAgbWVzc2FnZTogJycsXHJcbiAgYXV0b0hpZGVEdXJhdGlvbjogMjAwMCxcclxuICBtc2dfdHlwZTogJ2RlZmF1bHQnLFxyXG59IGFzIE1lc3NhZ2VQcm9wcywge1xyXG4gIG9wZW46ICh2YWx1ZTogc3RyaW5nIHwgTWVzc2FnZVByb3BzLCBvcHRpb24pID0+IHtcclxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIG9wdGlvbi5zZXREYXRhKGZwTWVyZ2VQcmUoe1xyXG4gICAgICAgIGF1dG9IaWRlRHVyYXRpb246IDIwMDAsXHJcbiAgICAgICAgbXNnX3R5cGU6ICdkZWZhdWx0JyxcclxuICAgICAgICBtZXNzYWdlOiB2YWx1ZSxcclxuICAgICAgICBvcGVuOiB0cnVlLFxyXG4gICAgICB9KSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG9wdGlvbi5zZXREYXRhKGZwTWVyZ2VQcmUoe1xyXG4gICAgICAgIGF1dG9IaWRlRHVyYXRpb246IDIwMDAsXHJcbiAgICAgICAgbXNnX3R5cGU6ICdkZWZhdWx0JyxcclxuICAgICAgICAuLi52YWx1ZSxcclxuICAgICAgICBvcGVuOiB0cnVlLFxyXG4gICAgICB9KSlcclxuICAgIH1cclxuICB9LFxyXG4gIG9uQ2xvc2U6ICh2YWx1ZSwgb3B0aW9uKSA9PiBvcHRpb24uc2V0RGF0YShmcE1lcmdlUHJlKHtcclxuICAgIG9wZW46IGZhbHNlLFxyXG4gIH0pKSxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBNZXNzYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHtzdGF0ZTogbVN0YXRlLCBhY3Rpb25zfSA9IHVzZVN0b3JlTW9kZWwobWVzc2FnZU1vZGVsKVxyXG4gIHJldHVybiA8Q3VzU25hY2tiYXJcclxuICAgICAgb3Blbj17bVN0YXRlLm9wZW59XHJcbiAgICAgIGF1dG9IaWRlRHVyYXRpb249e21TdGF0ZS5hdXRvSGlkZUR1cmF0aW9ufVxyXG4gICAgICBtZXNzYWdlPXtscyhtU3RhdGUubWVzc2FnZSBhcyBzdHJpbmcpfVxyXG4gICAgICBtc2dfdHlwZT17bVN0YXRlLm1zZ190eXBlfVxyXG4gICAgICBvbkNsb3NlPXsoKSA9PiBhY3Rpb25zLm9uQ2xvc2UoKX1cclxuICAvPlxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2hvd01lc3NhZ2UgPSAob3B0aW9uOiBzdHJpbmcgfCBNZXNzYWdlUHJvcHMpID0+IHtcclxuICBvcmlnaW5TdG9yZVsnbWVzc2FnZU1vZGVsJ10uYWN0aW9ucy5vcGVuKG9wdGlvbilcclxuICByZXR1cm5cclxufVxyXG4iLCJpbXBvcnQge3VzZVN0b3JlTW9kZWx9IGZyb20gJy4uLy4uL01vZGVsQWN0aW9uL3VzZVN0b3JlJ1xyXG5pbXBvcnQge21lTW9kZWx9IGZyb20gJy4uLy4uL3ZpZXcvbWUvbW9kZWwnXHJcbmltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7UmVnaXN0ZXJIZWFkZXJ9IGZyb20gJy4uL1JlZ2lzdGVySGVhZGVyL1JlZ2lzdGVySGVhZGVyJ1xyXG5pbXBvcnQge2xzfSBmcm9tICcuLi8uLi90b29scy9kZWFsS2V5J1xyXG5pbXBvcnQge0J1dHRvbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7Z2V0VG9rZW59IGZyb20gJy4uLy4uL3Rvb2xzL3Rva2VuJ1xyXG5cclxuY29uc3QgRW1wdHkgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgPiBtYWluIHtcclxuICAgIG1hcmdpbi10b3A6IDIwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICA+IHNwYW4ge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IGRlYWxOb0F1dGggPSAob3RoZXJzOiBhbnkpID0+IHtcclxuICBjb25zdCB7c3RhdGU6IHN0YXRlTWUsIGFjdGlvbnM6IGFjdGlvbnNNZX0gPSB1c2VTdG9yZU1vZGVsKG1lTW9kZWwpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghc3RhdGVNZS51c2VyLmlkKSB7XHJcbiAgICAgIGFjdGlvbnNNZS5nZXRMb2dpblVzZXIoKVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG4gIHJldHVybiAoIXN0YXRlTWUudXNlci5pZCB8fCAhZ2V0VG9rZW4oKSlcclxuICAgICAgPyA8RW1wdHk+XHJcbiAgICAgICAgPFJlZ2lzdGVySGVhZGVyLz5cclxuICAgICAgICA8bWFpbj5cclxuICAgICAgICAgIDxzcGFuPntscygn5oKo5pyq55m75b2VLOivt+WFiOeZu+W9lScpfTwvc3Bhbj5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICB2YXJpYW50PXsnY29udGFpbmVkJ31cclxuICAgICAgICAgICAgICBjb2xvcj17J3NlY29uZGFyeSd9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17YWN0aW9uc01lLnRvTG9naW59XHJcbiAgICAgICAgICA+e2xzKCfnmbvlvZUnKX08L0J1dHRvbj5cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgIDwvRW1wdHk+XHJcbiAgICAgIDogb3RoZXJzXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyBscyB9IGZyb20gJy4uLy4uL3Rvb2xzL2RlYWxLZXknXHJcbmltcG9ydCB7bXBTdHlsZX0gZnJvbSAnLi4vLi4vc3R5bGUvY29tbW9uJ1xyXG5cclxuY29uc3QgSGVhZGVyID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MHB4IDFmcjtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwcHggMzBweCA1MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgPiBpbWcge1xyXG4gICAgd2lkdGg6IDMycHg7XHJcbiAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgICBncmlkLWFyZWE6IDEvMS8zLzI7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuICA+IGhlYWRlciB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XHJcbiAgfVxyXG4gID4gZm9vdGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICR7bXBTdHlsZS5yZWR9O1xyXG4gIH1cclxuICA+IG1haW4ge1xyXG4gICAgZ3JpZC1hcmVhOiAzLzEvNC8zO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgUmVnaXN0ZXJIZWFkZXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIDxIZWFkZXI+XHJcbiAgICA8aW1nXHJcbiAgICAgICAgc3JjPXsnL2ltZy9ob21lL2xvZ28ucG5nJ31cclxuICAgICAgICBhbHQ9XCJcIi8+XHJcbiAgICA8aGVhZGVyPntscygnTWFya2V0Jyl9PC9oZWFkZXI+XHJcbiAgICA8Zm9vdGVyPntscygnUGF5bGVzcycpfTwvZm9vdGVyPlxyXG4gICAgPG1haW4+e2xzKCfmrKLov47mnaXliLDpqazkvanojrHotoXluIInKX08L21haW4+XHJcbiAgPC9IZWFkZXI+XHJcbn1cclxuIiwiaW1wb3J0IHtncWx9IGZyb20gJ2Fwb2xsby1ib29zdCdcclxuXHJcbmV4cG9ydCBjb25zdCBmcmFnbWVudCA9IHtcclxuICBDYXRlZ29yeUZpZWxkczogZ3FsYFxyXG4gICAgICBmcmFnbWVudCBDYXRlZ29yeSBvbiBDYXRlZ29yeSB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgICAgdXBkYXRlVGltZVxyXG4gICAgICAgICAgaXNEZWxldGVcclxuICAgICAgICAgIGlzRW5hYmxlXHJcbiAgICAgICAgICByZW1hcmtcclxuICAgICAgICAgIHNvcnRcclxuICAgICAgICAgIHBhcmVudElkXHJcbiAgICAgICAgICBmdWxsUGFyZW50SWRcclxuICAgICAgICAgIG51bWJlclxyXG4gICAgICAgICAgdXNlcklkXHJcbiAgICAgICAgICBpbWdVcmxcclxuICAgICAgfVxyXG4gIGAsXHJcbiAgVXNlckZpZWxkczogZ3FsYFxyXG4gICAgICBmcmFnbWVudCBVc2VyRmllbGRzIG9uIFVzZXIge1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIG5hbWVcclxuICAgICAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgICAgIGlzRGVsZXRlXHJcbiAgICAgICAgICBwYXNzd29yZFxyXG4gICAgICAgICAgdHlwZVxyXG4gICAgICB9XHJcbiAgYCxcclxuICBVc2VySW5mb0ZpZWxkczogZ3FsYFxyXG4gICAgICBmcmFnbWVudCBVc2VySW5mb0ZpZWxkcyBvbiBVc2VySW5mbyB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgICAgdXBkYXRlVGltZVxyXG4gICAgICAgICAgaXNEZWxldGVcclxuICAgICAgICAgIHVzZXJJZFxyXG4gICAgICAgICAgcGhvbmVcclxuICAgICAgICAgIGVtYWlsXHJcbiAgICAgICAgICB1c2VyTGV2ZWxcclxuICAgICAgICAgIHBpY2t1cEFkZHJlc3NJZFxyXG4gICAgICB9XHJcbiAgYCxcclxuICBPcmRlckluZm9GaWVsZHM6IGdxbGBcclxuICAgICAgZnJhZ21lbnQgT3JkZXJJbmZvRmllbGRzIG9uIE9yZGVySW5mbyB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgICAgdXBkYXRlVGltZVxyXG4gICAgICAgICAgaXNEZWxldGVcclxuICAgICAgICAgIG51bWJlclxyXG4gICAgICAgICAgc3RhdGVcclxuICAgICAgICAgIGFjdHVhbGx5UGFpZFxyXG4gICAgICAgICAgYWRkcmVzc0lkXHJcbiAgICAgICAgICBwYXltZW50TWV0aG9kQ2FyZElkXHJcbiAgICAgICAgICBzdWJ0b3RhbFxyXG4gICAgICAgICAgY291cG9uRGlzY291bnRcclxuICAgICAgICAgIHZpcERpc2NvdW50XHJcbiAgICAgICAgICB0cmFuc3BvcnRhdGlvbkNvc3RzXHJcbiAgICAgICAgICBzYWxlVGF4XHJcbiAgICAgICAgICBvcmRlcklkXHJcbiAgICAgICAgICBkaXNjb3VudFByb2R1Y3RUb3RhbFxyXG4gICAgICAgICAgZmluaXNoVGltZVxyXG4gICAgICAgICAgcGlja1VwVGltZVxyXG4gICAgICAgICAgcGlja1VwVHlwZVxyXG4gICAgICAgICAgZ2VuZXJhdGVDb2luXHJcbiAgICAgICAgICBkZWR1Y3RDb2luXHJcbiAgICAgICAgICBzZWxmQWRkcmVzc0lkXHJcbiAgICAgICAgICBjdXJyZW50VXNlckxldmVsXHJcbiAgICAgIH1cclxuICBgLFxyXG4gIFJPcmRlclByb2R1Y3RGaWVsZHM6IGdxbGBcclxuICAgICAgZnJhZ21lbnQgUk9yZGVyUHJvZHVjdEZpZWxkcyBvbiBST3JkZXJQcm9kdWN0IHtcclxuICAgICAgICAgIGNvdW50XHJcbiAgICAgICAgICBjcmVhdGVUaW1lXHJcbiAgICAgICAgICBkZWFsUHJpY2VcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBpc0RlbGV0ZVxyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgb3JkZXJJZFxyXG4gICAgICAgICAgcHJvZHVjdElkXHJcbiAgICAgICAgICB1cGRhdGVUaW1lXHJcbiAgICAgIH1cclxuICBgLFxyXG4gIFByb2R1Y3RGaWVsZHM6IGdxbGBcclxuICAgICAgZnJhZ21lbnQgUHJvZHVjdEZpZWxkcyBvbiBQcm9kdWN0IHtcclxuICAgICAgICAgIGJyYW5kXHJcbiAgICAgICAgICBjYXRlZ29yeUlkXHJcbiAgICAgICAgICBjcmVhdGVUaW1lXHJcbiAgICAgICAgICBncm91cEFtb3VudFxyXG4gICAgICAgICAgZ3JvdXBBbW91bnRVbml0XHJcbiAgICAgICAgICBncm91cFByZWNpc2lvblxyXG4gICAgICAgICAgZ3JvdXBSZW1hcmtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBpc0RlbGV0ZVxyXG4gICAgICAgICAgaXNFbmFibGVcclxuICAgICAgICAgIGlzR3JvdXBcclxuICAgICAgICAgIGlzSG90XHJcbiAgICAgICAgICBpc05ld1xyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgbnVtYmVyXHJcbiAgICAgICAgICBwYWNraW5nVW5pdFxyXG4gICAgICAgICAgcHJpY2VJblxyXG4gICAgICAgICAgcHJpY2VNYXJrZXRcclxuICAgICAgICAgIHByaWNlT3V0XHJcbiAgICAgICAgICByZW1hcmtcclxuICAgICAgICAgIHNoZWx2ZXNUeXBlc1xyXG4gICAgICAgICAgc29ydFxyXG4gICAgICAgICAgc3RvY2tcclxuICAgICAgICAgIHVuaXRcclxuICAgICAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgICAgIHdlaWdodFxyXG4gICAgICAgICAgdW5pdFN0cmluZ1xyXG4gICAgICAgICAgZ3JvdXBQcmVjaXNpb25TdHJpbmdcclxuICAgICAgICAgIGdyb3VwQW1vdW50VW5pdFN0cmluZ1xyXG4gICAgICAgICAgcGFja2luZ1VuaXRTdHJpbmdcclxuICAgICAgfVxyXG4gIGAsXHJcbiAgSW1nRmllbGRzOiBncWxgXHJcbiAgICBmcmFnbWVudCBJbWdGaWVsZHMgb24gUHJvZHVjdEltZyB7XHJcbiAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgIGlkXHJcbiAgICAgICAgaXNEZWxldGVcclxuICAgICAgICBuYW1lXHJcbiAgICAgICAgbnVtYmVyXHJcbiAgICAgICAgcHJvZHVjdElkXHJcbiAgICAgICAgdXBkYXRlVGltZVxyXG4gICAgICAgIHVybFxyXG4gICAgfSBcclxuICBgLFxyXG4gIFVzZXJBZGRyZXNzRmllbGRzOiBncWxgXHJcbiAgICAgIGZyYWdtZW50IFVzZXJBZGRyZXNzRmllbGRzIG9uIFVzZXJBZGRyZXNzIHtcclxuICAgICAgICAgIGFkZHJlc3NcclxuICAgICAgICAgIGNpdHlcclxuICAgICAgICAgIGNvbWJpbmVBZGRyZXNzXHJcbiAgICAgICAgICBjb250YWN0SW5mb3JtYXRpb25cclxuICAgICAgICAgIGNvbnRhY3RVc2VyTmFtZVxyXG4gICAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgICAgZGlzdHJpY3RcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBpc0RlZmF1bHRcclxuICAgICAgICAgIGlzRGVsZXRlXHJcbiAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICBwcm92aW5jZVxyXG4gICAgICAgICAgdXBkYXRlVGltZVxyXG4gICAgICAgICAgdXNlcklkXHJcbiAgICAgICAgICB6aXBcclxuICAgICAgfVxyXG4gIGAsXHJcbiAgVXNlclBheUNhcmRGaWVsZHM6IGdxbGBcclxuICAgICAgZnJhZ21lbnQgVXNlclBheUNhcmRGaWVsZHMgb24gVXNlclBheUNhcmQge1xyXG4gICAgICAgICAgYWRkcmVzc0RldGFpbFxyXG4gICAgICAgICAgY2l0eVxyXG4gICAgICAgICAgY29kZVxyXG4gICAgICAgICAgY29udGFjdFxyXG4gICAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgICAgZXhwaXJhdGlvblRpbWVcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBpc0RlZmF1bHRcclxuICAgICAgICAgIGlzRGVsZXRlXHJcbiAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICBudW1iZXJcclxuICAgICAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgICAgIHVzZXJJZFxyXG4gICAgICAgICAgdXNlck5hbWVcclxuICAgICAgICAgIHppcENvZGVcclxuICAgICAgfVxyXG4gIGAsXHJcbiAgU2hvcENhcnRGaWVsZHM6IGdxbGBcclxuICAgICAgZnJhZ21lbnQgU2hvcENhcnRGaWVsZHMgb24gU2hvcENhcnQge1xyXG4gICAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIGlzRGVsZXRlXHJcbiAgICAgICAgICBpc05leHRcclxuICAgICAgICAgIG5hbWVcclxuICAgICAgICAgIG51bWJlclxyXG4gICAgICAgICAgcHJvZHVjdElkXHJcbiAgICAgICAgICB1cGRhdGVUaW1lXHJcbiAgICAgICAgICB1c2VySWRcclxuICAgICAgfVxyXG4gIGAsXHJcbiAgRGF0YUNvbmZpZ0ZpZWxkczogZ3FsYFxyXG4gICAgZnJhZ21lbnQgRGF0YUNvbmZpZ0ZpZWxkcyBvbiBEYXRhQ29uZmlnIHtcclxuICAgICAgICBjcmVhdGVUaW1lXHJcbiAgICAgICAgaWRcclxuICAgICAgICBpc0RlbGV0ZVxyXG4gICAgICAgIG5hbWVcclxuICAgICAgICByZW1hcmtcclxuICAgICAgICB0eXBlXHJcbiAgICAgICAgdXBkYXRlVGltZVxyXG4gICAgICAgIHZhbHVlXHJcbiAgICB9XHJcbiAgYCxcclxuICBEaWN0RmllbGRzOiBncWxgXHJcbiAgICBmcmFnbWVudCBEaWN0RmllbGRzIG9uIERpY3Qge1xyXG4gICAgICAgIGNvZGVcclxuICAgICAgICBjcmVhdGVUaW1lXHJcbiAgICAgICAgZGljdFR5cGVDb2RlXHJcbiAgICAgICAgaWRcclxuICAgICAgICBpc0RlbGV0ZVxyXG4gICAgICAgIGlzRGlzYWJsZVxyXG4gICAgICAgIG5hbWVcclxuICAgICAgICByZW1hcmtcclxuICAgICAgICBzb3J0XHJcbiAgICAgICAgdXBkYXRlVGltZVxyXG4gICAgfVxyXG4gIGAsXHJcbiAgR3JvdXBRdWV1ZUZpZWxkczogZ3FsYFxyXG4gICAgICBmcmFnbWVudCBHcm91cFF1ZXVlRmllbGRzIG9uIEdyb3VwUXVldWUge1xyXG4gICAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgICAgZmlsbEFtb3VudFxyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIGlzRGVsZXRlXHJcbiAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICBwcm9kdWN0SWRcclxuICAgICAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgICAgIHN1bUZpbGxBbW91bnRcclxuICAgICAgfVxyXG4gIGAsXHJcbiAgR3JvdXBPcmRlckZpZWxkczogZ3FsYFxyXG4gICAgICBmcmFnbWVudCBHcm91cE9yZGVyRmllbGRzIG9uIEdyb3VwT3JkZXIge1xyXG4gICAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgICAgZ3JvdXBRdWV1ZUlkXHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgaXNEZWxldGVcclxuICAgICAgICAgIG5hbWVcclxuICAgICAgICAgIG9yZGVyR3JvdXBBbW91bnRcclxuICAgICAgICAgIG9yZGVySWRcclxuICAgICAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgICAgIHVzZXJJZFxyXG4gICAgICB9XHJcbiAgYCxcclxuICBQcm9tb0NvZGVGaWVsZHM6IGdxbGBcclxuICAgICAgZnJhZ21lbnQgUHJvbW9Db2RlRmllbGRzIG9uIFByb21vQ29kZSB7XHJcbiAgICAgICAgICBjb2RlXHJcbiAgICAgICAgICBjcmVhdGVUaW1lXHJcbiAgICAgICAgICBkaXNjb3VudEFtb3VudFxyXG4gICAgICAgICAgZGlzY291bnRDb25kaXRpb25cclxuICAgICAgICAgIGRpc2NvdW50Q29uZGl0aW9uQW1vdW50XHJcbiAgICAgICAgICBkaXNjb3VudFR5cGVcclxuICAgICAgICAgIGVmZmVjdGl2ZURhdGVFbmRcclxuICAgICAgICAgIGVmZmVjdGl2ZURhdGVTdGFydFxyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIGltZ1VybFxyXG4gICAgICAgICAgaXNEZWxldGVcclxuICAgICAgICAgIGlzRGlzYWJsZVxyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgcHJvZHVjdENhdGVnb3J5XHJcbiAgICAgICAgICBwcm9tb0NvZGVUeXBlXHJcbiAgICAgICAgICByZW1hcmtcclxuICAgICAgICAgIHJldXNlVGltZXNcclxuICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICB1cGRhdGVUaW1lXHJcbiAgICAgIH1cclxuICBgLFxyXG59XHJcbiIsImltcG9ydCB7Z3FsfSBmcm9tICdhcG9sbG8tYm9vc3QnXHJcbmltcG9ydCB7ZnJhZ21lbnR9IGZyb20gJy4vZnJhZ21lbnQnXHJcbmltcG9ydCB7RGljdFR5cGVFbnVtfSBmcm9tICcuLi8uLi9zc19jb21tb24vZW51bSdcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyTGlzdERvYyA9IGdxbGBcclxuICBxdWVyeSByZWZhY3RvcmVkNjQzKCRkYXRhOiBVc2VyTGlzdElucHV0ISkge1xyXG4gICAgdXNlckxpc3QodXNlckxpc3RJbnB1dDogJGRhdGEpIHtcclxuICAgICAgbGlzdCB7XHJcbiAgICAgICAgb3JkZXJDb2luTmV4dE1vbnRoXHJcbiAgICAgICAgb3JkZXJDb2luQ3VycmVudE1vbnRoXHJcbiAgICAgICAgb3JkZXJBbW91bnRDdXJyZW50WWVhclxyXG4gICAgICAgIC4uLnVzZXJJbmZvXHJcbiAgICAgICAgLi4uVXNlckZpZWxkc1xyXG4gICAgICAgIC4uLm9yZGVySW5mb1xyXG4gICAgICB9XHJcbiAgICAgIHRvdGFsXHJcbiAgICB9XHJcbiAgfVxyXG4gIGZyYWdtZW50IG9yZGVySW5mbyBvbiBVc2Vye1xyXG4gICAgb3JkZXJJbmZve1xyXG4gICAgICBpZFxyXG4gICAgICBuYW1lXHJcbiAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgdXBkYXRlVGltZVxyXG4gICAgICBpc0RlbGV0ZVxyXG4gICAgICBudW1iZXJcclxuICAgICAgc3RhdGVcclxuICAgICAgYWN0dWFsbHlQYWlkXHJcbiAgICAgIGFkZHJlc3NJZFxyXG4gICAgICBwYXltZW50TWV0aG9kQ2FyZElkXHJcbiAgICAgIHN1YnRvdGFsXHJcbiAgICAgIGNvdXBvbkRpc2NvdW50XHJcbiAgICAgIHZpcERpc2NvdW50XHJcbiAgICAgIHRyYW5zcG9ydGF0aW9uQ29zdHNcclxuICAgICAgc2FsZVRheFxyXG4gICAgICBvcmRlcklkXHJcbiAgICAgIGRpc2NvdW50UHJvZHVjdFRvdGFsXHJcbiAgICAgIGZpbmlzaFRpbWVcclxuICAgICAgcGlja1VwVGltZVxyXG4gICAgICBwaWNrVXBUeXBlXHJcbiAgICB9XHJcbiAgfVxyXG4gIGZyYWdtZW50IFVzZXJGaWVsZHMgb24gVXNlciB7XHJcbiAgICBpZFxyXG4gICAgbmFtZVxyXG4gICAgY3JlYXRlVGltZVxyXG4gICAgdXBkYXRlVGltZVxyXG4gICAgaXNEZWxldGVcclxuICAgIHBhc3N3b3JkXHJcbiAgICB0eXBlXHJcbiAgfVxyXG4gIGZyYWdtZW50IHVzZXJJbmZvIG9uIFVzZXJ7XHJcbiAgICB1c2VySW5mb3tcclxuICAgICAgaWRcclxuICAgICAgbmFtZVxyXG4gICAgICBjcmVhdGVUaW1lXHJcbiAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgaXNEZWxldGVcclxuICAgICAgdXNlcklkXHJcbiAgICAgIHBob25lXHJcbiAgICAgIGVtYWlsXHJcbiAgICAgIHVzZXJMZXZlbFxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IGdldERhdGFDb25maWcgPSBncWxgXHJcbiAgcXVlcnkgKCRkYXRhOiBEYXRhQ29uZmlnSXRlbUlucHV0KSB7XHJcbiAgICBnZXREYXRhQ29uZmlnKGRhdGFDb25maWdJbnB1dDogJGRhdGEpIHtcclxuICAgICAgaWRcclxuICAgICAgbmFtZVxyXG4gICAgICBjcmVhdGVUaW1lXHJcbiAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgaXNEZWxldGVcclxuICAgICAgdHlwZVxyXG4gICAgICB2YWx1ZVxyXG4gICAgICByZW1hcmtcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBob21lQ2Fyb3VzZWxJbWdzID0gZ3FsYFxyXG4gIHF1ZXJ5IHF1ZXJ5X3F1ZXJ5X3Rlc3RMb25nMTM3KCRkYXRhOiBEYXRhQ29uZmlnSXRlbUlucHV0KSB7XHJcbiAgICBob21lQ2Fyb3VzZWxJbWdzKGRhdGFDb25maWdJbnB1dDogJGRhdGEpIHtcclxuICAgICAgaWRcclxuICAgICAgbmFtZVxyXG4gICAgICBjcmVhdGVUaW1lXHJcbiAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgaXNEZWxldGVcclxuICAgICAgdHlwZVxyXG4gICAgICB2YWx1ZVxyXG4gICAgICByZW1hcmtcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBjYXRlZ29yeUxpc3QgPSBncWxgXHJcbiAgcXVlcnkgcXVlcnlfcXVlcnlfdGVzdExvbmc1NjUoJGRhdGE6IENhdGVnb3J5TGlzdElucHV0KSB7XHJcbiAgICBjYXRlZ29yeUxpc3QoZGF0YTogJGRhdGEpIHtcclxuICAgICAgdG90YWxcclxuICAgICAgbGlzdCB7XHJcbiAgICAgICAgLi4uQ2F0ZWdvcnlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAke2ZyYWdtZW50LkNhdGVnb3J5RmllbGRzfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgZG9jID0ge1xyXG4gIGdldFVzZXJMaXN0RG9jLFxyXG4gIGNhdGVnb3J5TGlzdCxcclxuICBnZXREYXRhQ29uZmlnLFxyXG4gIGhvbWVDYXJvdXNlbEltZ3MsXHJcbiAgcmVnaXN0ZXJVc2VyOiBncWxgXHJcbiAgICBtdXRhdGlvbiBtdXRhdGlvbl9yZWdpc3RlclVzZTk5OCgkZGF0YTogVXNlckl0ZW1JbnB1dCkge1xyXG4gICAgICByZWdpc3RlclVzZXIoZGF0YTogJGRhdGEpIHtcclxuICAgICAgICB0b2tlblxyXG4gICAgICAgIHJlZnJlc2h0b2tlblxyXG4gICAgICAgIHVzZXIge1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIG5hbWVcclxuICAgICAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgICAgIGlzRGVsZXRlXHJcbiAgICAgICAgICBwYXNzd29yZFxyXG4gICAgICAgICAgdHlwZVxyXG4gICAgICAgICAgdXNlckluZm8ge1xyXG4gICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgYCxcclxuICByZWZyZXNoVG9rZW46IGdxbGBcclxuICAgIHF1ZXJ5IHJlZnJlc2hUb2tlbigkZGF0YTogU3RyaW5nISkge1xyXG4gICAgICByZWZyZXNoVG9rZW4ocmVmcmVzaHRva2VuOiAkZGF0YSkge1xyXG4gICAgICAgIHJlZnJlc2h0b2tlblxyXG4gICAgICAgIHRva2VuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICBgLFxyXG4gIGxvZ2luOiBncWxgXHJcbiAgICBxdWVyeSBsb2dpbigkZGF0YTogVXNlckl0ZW1JbnB1dCkge1xyXG4gICAgICBsb2dpbih1c2VyOiAkZGF0YSkge1xyXG4gICAgICAgIHRva2VuXHJcbiAgICAgICAgcmVmcmVzaHRva2VuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICBgLFxyXG4gIG9uZVVzZXI6IGdxbGBcclxuICAgIHF1ZXJ5IG9uZVVzZXIge1xyXG4gICAgICBvbmVVc2VyIHtcclxuICAgICAgICAuLi5Vc2VyRmllbGRzXHJcbiAgICAgICAgdXNlckluZm8ge1xyXG4gICAgICAgICAgLi4uVXNlckluZm9GaWVsZHNcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuVXNlckluZm9GaWVsZHN9XHJcbiAgICAke2ZyYWdtZW50LlVzZXJGaWVsZHN9XHJcbiAgYCxcclxuICBvcmRlckxpc3Q6IGdxbGBcclxuICAgIHF1ZXJ5IG9yZGVyTGlzdCgkZGF0YTogT3JkZXJJbnB1dCl7XHJcbiAgICAgIG9yZGVyTGlzdCAob3JkZXJJbnB1dDogJGRhdGEsIGZyb21Vc2VyOiB0cnVlKSB7XHJcbiAgICAgICAgbGlzdCB7XHJcbiAgICAgICAgICAuLi5PcmRlckluZm9GaWVsZHNcclxuICAgICAgICAgIHJPcmRlclByb2R1Y3Qge1xyXG4gICAgICAgICAgICAuLi5ST3JkZXJQcm9kdWN0RmllbGRzXHJcbiAgICAgICAgICAgIHByb2R1Y3Qge1xyXG4gICAgICAgICAgICAgIC4uLlByb2R1Y3RGaWVsZHNcclxuICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgLi4uSW1nRmllbGRzXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAke2ZyYWdtZW50Lk9yZGVySW5mb0ZpZWxkc31cclxuICAgICR7ZnJhZ21lbnQuUk9yZGVyUHJvZHVjdEZpZWxkc31cclxuICAgICR7ZnJhZ21lbnQuUHJvZHVjdEZpZWxkc31cclxuICAgICR7ZnJhZ21lbnQuSW1nRmllbGRzfVxyXG4gIGAsXHJcbiAgb3JkZXJEZXRhaWw6IGdxbGBcclxuICAgIHF1ZXJ5ICgkaWQ6IFN0cmluZykge1xyXG4gICAgICBzZWxmQWRkcmVzczogZ2V0RGF0YUNvbmZpZyhkYXRhQ29uZmlnSW5wdXQ6IHtcclxuICAgICAgICB0eXBlOiBcIiR7RGljdFR5cGVFbnVtLlNlbGZBZGRyZXNzfVwiXHJcbiAgICAgIH0pIHtcclxuICAgICAgICAuLi5EYXRhQ29uZmlnRmllbGRzXHJcbiAgICAgIH1cclxuICAgICAgb3JkZXJEZXRhaWwoaWQ6ICRpZCkge1xyXG4gICAgICAgIC4uLk9yZGVySW5mb0ZpZWxkc1xyXG4gICAgICAgIHJPcmRlclByb2R1Y3Qge1xyXG4gICAgICAgICAgLi4uUk9yZGVyUHJvZHVjdEZpZWxkc1xyXG4gICAgICAgICAgcHJvZHVjdCB7XHJcbiAgICAgICAgICAgIC4uLlByb2R1Y3RGaWVsZHNcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAuLi5JbWdGaWVsZHNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB1c2VyIHtcclxuICAgICAgICAgIC4uLlVzZXJGaWVsZHNcclxuICAgICAgICAgIHVzZXJJbmZvIHtcclxuICAgICAgICAgICAgLi4uVXNlckluZm9GaWVsZHNcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdXNlckFkZHJlc3Mge1xyXG4gICAgICAgICAgLi4uVXNlckFkZHJlc3NGaWVsZHNcclxuICAgICAgICB9XHJcbiAgICAgICAgdXNlclBheUNhcmQge1xyXG4gICAgICAgICAgLi4uVXNlclBheUNhcmRGaWVsZHNcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuRGF0YUNvbmZpZ0ZpZWxkc31cclxuICAgICR7ZnJhZ21lbnQuT3JkZXJJbmZvRmllbGRzfVxyXG4gICAgJHtmcmFnbWVudC5ST3JkZXJQcm9kdWN0RmllbGRzfVxyXG4gICAgJHtmcmFnbWVudC5Qcm9kdWN0RmllbGRzfVxyXG4gICAgJHtmcmFnbWVudC5JbWdGaWVsZHN9XHJcbiAgICAke2ZyYWdtZW50LlVzZXJGaWVsZHN9XHJcbiAgICAke2ZyYWdtZW50LlVzZXJJbmZvRmllbGRzfVxyXG4gICAgJHtmcmFnbWVudC5Vc2VyUGF5Q2FyZEZpZWxkc31cclxuICAgICR7ZnJhZ21lbnQuVXNlckFkZHJlc3NGaWVsZHN9XHJcbiAgYCxcclxuICB1cGRhdGVQYXNzd29yZDogZ3FsYFxyXG4gICAgbXV0YXRpb24gKCRkYXRhOiBVcGRhdGVQYXNzd29yZElucHV0KSB7XHJcbiAgICAgIHVwZGF0ZVBhc3N3b3JkIChkYXRhOiAkZGF0YSkge1xyXG4gICAgICAgIHVzZXIge1xyXG4gICAgICAgICAgLi4uVXNlckZpZWxkc1xyXG4gICAgICAgIH1cclxuICAgICAgICBhdXRoQm9keSB7XHJcbiAgICAgICAgICB0b2tlblxyXG4gICAgICAgICAgcmVmcmVzaHRva2VuXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAke2ZyYWdtZW50LlVzZXJGaWVsZHN9XHJcbiAgYCxcclxuICBwYXlDYXJkTGlzdE9uZVVzZXI6IGdxbGBcclxuICAgIHF1ZXJ5IHtcclxuICAgICAgcGF5Q2FyZExpc3RPbmVVc2VyIHtcclxuICAgICAgICAuLi5Vc2VyUGF5Q2FyZEZpZWxkc1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAke2ZyYWdtZW50LlVzZXJQYXlDYXJkRmllbGRzfVxyXG4gIGAsXHJcbiAgdXNlclBheUNhcmQ6IGdxbGBcclxuICAgIHF1ZXJ5ICgkZGF0YTogVXNlclBheUNhcmRJdGVtSW5wdXQpIHtcclxuICAgICAgdXNlclBheUNhcmQgKHVzZXJQYXlDYXJkOiAkZGF0YSkge1xyXG4gICAgICAgIC4uLlVzZXJQYXlDYXJkRmllbGRzXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuVXNlclBheUNhcmRGaWVsZHN9XHJcbiAgYCxcclxuICBzYXZlVXNlclBheUNhcmQ6IGdxbGBcclxuICAgIG11dGF0aW9uICgkZGF0YTogVXNlclBheUNhcmRJdGVtSW5wdXQpe1xyXG4gICAgICBzYXZlVXNlclBheUNhcmQgKHVzZXJQYXlDYXJkOiAkZGF0YSkge1xyXG4gICAgICAgIC4uLlVzZXJQYXlDYXJkRmllbGRzXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuVXNlclBheUNhcmRGaWVsZHN9XHJcbiAgYCxcclxuICBzZXRVc2VyUGF5Q2FyZERlZmF1bHQ6IGdxbGBcclxuICAgIG11dGF0aW9uICgkZGF0YTogVXNlclBheUNhcmRJdGVtSW5wdXQpIHtcclxuICAgICAgc2V0VXNlclBheUNhcmREZWZhdWx0ICh1c2VyUGF5Q2FyZDogJGRhdGEpIHtcclxuICAgICAgICAuLi5Vc2VyUGF5Q2FyZEZpZWxkc1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAke2ZyYWdtZW50LlVzZXJQYXlDYXJkRmllbGRzfVxyXG4gIGAsXHJcbiAgcGlja3VwQWRkcmVzczogZ3FsYFxyXG4gICAgcXVlcnkge1xyXG4gICAgICBnZXREYXRhQ29uZmlnKGRhdGFDb25maWdJbnB1dDoge1xyXG4gICAgICAgIHR5cGU6IFwiJHtEaWN0VHlwZUVudW0uU2VsZkFkZHJlc3N9XCJcclxuICAgICAgfSkge1xyXG4gICAgICAgIC4uLkRhdGFDb25maWdGaWVsZHNcclxuICAgICAgfVxyXG4gICAgICBvbmVVc2VyIHtcclxuICAgICAgICAuLi5Vc2VyRmllbGRzXHJcbiAgICAgICAgdXNlckluZm8ge1xyXG4gICAgICAgICAgLi4uVXNlckluZm9GaWVsZHNcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuVXNlckluZm9GaWVsZHN9XHJcbiAgICAke2ZyYWdtZW50LkRhdGFDb25maWdGaWVsZHN9XHJcbiAgICAke2ZyYWdtZW50LlVzZXJGaWVsZHN9XHJcbiAgYCxcclxuICB1cGRhdGVVc2VySW5mbzogZ3FsYFxyXG4gICAgbXV0YXRpb24gKCR1c2VySW5mbzogVXNlckluZm9JdGVtSW5wdXQpIHtcclxuICAgICAgdXBkYXRlVXNlckluZm8gKHVzZXJJbmZvOiAkdXNlckluZm8pIHtcclxuICAgICAgICAuLi5Vc2VySW5mb0ZpZWxkc1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAke2ZyYWdtZW50LlVzZXJJbmZvRmllbGRzfVxyXG4gIGAsXHJcbiAgdXNlckFkZHJlc3NMaXN0T25lVXNlcjogZ3FsYFxyXG4gICAgcXVlcnkge1xyXG4gICAgICB1c2VyQWRkcmVzc0xpc3RPbmVVc2VyIHtcclxuICAgICAgICAuLi5Vc2VyQWRkcmVzc0ZpZWxkc1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAke2ZyYWdtZW50LlVzZXJBZGRyZXNzRmllbGRzfVxyXG4gIGAsXHJcbiAgdXNlckFkZHJlc3M6IGdxbGBcclxuICAgIHF1ZXJ5ICgkZGF0YTogVXNlckFkZHJlc3NJdGVtSW5wdXQpIHtcclxuICAgICAgdXNlckFkZHJlc3MgKHVzZXJBZGRyZXNzOiAkZGF0YSkge1xyXG4gICAgICAgIC4uLlVzZXJBZGRyZXNzRmllbGRzXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuVXNlckFkZHJlc3NGaWVsZHN9XHJcbiAgYCxcclxuICBzYXZlVXNlckFkZHJlc3M6IGdxbGBcclxuICAgIG11dGF0aW9uICgkZGF0YTogVXNlckFkZHJlc3NJdGVtSW5wdXQpe1xyXG4gICAgICBzYXZlVXNlckFkZHJlc3MgKHVzZXJBZGRyZXNzOiAkZGF0YSkge1xyXG4gICAgICAgIC4uLlVzZXJBZGRyZXNzRmllbGRzXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuVXNlckFkZHJlc3NGaWVsZHN9XHJcbiAgYCxcclxuICBzZXRVc2VyQWRkcmVzc0RlZmF1bHQ6IGdxbGBcclxuICAgIG11dGF0aW9uICgkZGF0YTogVXNlckFkZHJlc3NJdGVtSW5wdXQpIHtcclxuICAgICAgc2V0VXNlckFkZHJlc3NEZWZhdWx0ICh1c2VyQWRkcmVzczogJGRhdGEpIHtcclxuICAgICAgICAuLi5Vc2VyQWRkcmVzc0ZpZWxkc1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAke2ZyYWdtZW50LlVzZXJBZGRyZXNzRmllbGRzfVxyXG4gIGAsXHJcbiAgcHJvZHVjdHNJbkNhdGVnb3J5OiBncWxgXHJcbiAgICBxdWVyeSAoJGRhdGE6IENhdGVnb3J5SXRlbUlucHV0LCAkcHJvZHVjdEl0ZW1JbnB1dDogUHJvZHVjdEl0ZW1JbnB1dCkge1xyXG4gICAgICBwcm9kdWN0c0luQ2F0ZWdvcnkoY2F0ZWdvcnlJdGVtSW5wdXQ6ICRkYXRhLCBwcm9kdWN0SXRlbUlucHV0OiAkcHJvZHVjdEl0ZW1JbnB1dCkge1xyXG4gICAgICAgIC4uLlByb2R1Y3RGaWVsZHNcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgLi4uSW1nRmllbGRzXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGNhdGVnb3J5TGlzdChkYXRhOiB7XHJcbiAgICAgICAgY2F0ZWdvcnk6IHtcclxuICAgICAgICAgIHBhcmVudENhdGVnb3J5OiAkZGF0YVxyXG4gICAgICAgIH1cclxuICAgICAgfSkge1xyXG4gICAgICAgIHRvdGFsXHJcbiAgICAgICAgbGlzdCB7XHJcbiAgICAgICAgICAuLi5DYXRlZ29yeVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5Qcm9kdWN0RmllbGRzfVxyXG4gICAgJHtmcmFnbWVudC5JbWdGaWVsZHN9XHJcbiAgICAke2ZyYWdtZW50LkNhdGVnb3J5RmllbGRzfVxyXG4gIGAsXHJcbiAgY2F0ZWdvcnlMZXZlbDogZ3FsYFxyXG4gICAgcXVlcnkgKCRkYXRhOiBDYXRlZ29yeUl0ZW1JbnB1dCkge1xyXG4gICAgICBjYXRlZ29yeUxldmVsKGNhdGVnb3J5SXRlbUlucHV0OiAkZGF0YSlcclxuICAgIH1cclxuICBgLFxyXG4gIG9uZUNhdGVnb3J5OiBncWxgXHJcbiAgICBxdWVyeSAoJGRhdGE6IENhdGVnb3J5SXRlbUlucHV0KSB7XHJcbiAgICAgIG9uZUNhdGVnb3J5KGRhdGE6ICRkYXRhKSB7XHJcbiAgICAgICAgLi4uQ2F0ZWdvcnlcclxuICAgICAgICBwYXJlbnRDYXRlZ29yeSB7XHJcbiAgICAgICAgICAuLi5DYXRlZ29yeVxyXG4gICAgICAgICAgcGFyZW50Q2F0ZWdvcnkge1xyXG4gICAgICAgICAgICAuLi5DYXRlZ29yeVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5DYXRlZ29yeUZpZWxkc31cclxuICBgLFxyXG4gIHByb2R1Y3RMaXN0OiBncWxgXHJcbiAgICBxdWVyeSAoJHByb2R1Y3RJbnB1dDogUHJvZHVjdEl0ZW1JbnB1dCwgJG9yZGVyQnlJbnB1dDogT3JkZXJCeUlucHV0KSB7XHJcbiAgICAgIHByb2R1Y3RMaXN0KHByb2R1Y3RJbnB1dDogJHByb2R1Y3RJbnB1dCwgb3JkZXJCeUlucHV0OiAkb3JkZXJCeUlucHV0KSB7XHJcbiAgICAgICAgdG90YWxcclxuICAgICAgICBsaXN0IHtcclxuICAgICAgICAgIC4uLlByb2R1Y3RGaWVsZHNcclxuICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIC4uLkltZ0ZpZWxkc1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5Qcm9kdWN0RmllbGRzfVxyXG4gICAgJHtmcmFnbWVudC5JbWdGaWVsZHN9XHJcbiAgYCxcclxuICB1cGRhdGVOdW1TaG9wQ2FydDogZ3FsYFxyXG4gICAgbXV0YXRpb24gKCRzaG9wQ2FydDogU2hvcENhcnRJdGVtSW5wdXQsICR1cGRhdGVOdW06IEZsb2F0KSB7XHJcbiAgICAgIHVwZGF0ZU51bVNob3BDYXJ0IChzaG9wQ2FydDogJHNob3BDYXJ0LCB1cGRhdGVOdW06ICR1cGRhdGVOdW0pIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIG51bWJlclxyXG4gICAgICAgIHByb2R1Y3Qge1xyXG4gICAgICAgICAgLi4uUHJvZHVjdEZpZWxkc1xyXG4gICAgICAgIH1cclxuICAgICAgICB1c2VyIHtcclxuICAgICAgICAgIC4uLlVzZXJGaWVsZHNcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuUHJvZHVjdEZpZWxkc31cclxuICAgICR7ZnJhZ21lbnQuVXNlckZpZWxkc31cclxuICBgLFxyXG4gIHVzZXJTaG9wQ2FydExpc3Q6IGdxbGBcclxuICAgIHF1ZXJ5IHtcclxuICAgICAgc2hvcENhcnRMaXN0IHtcclxuICAgICAgICAuLi5TaG9wQ2FydEZpZWxkc1xyXG4gICAgICAgIHByb2R1Y3Qge1xyXG4gICAgICAgICAgLi4uUHJvZHVjdEZpZWxkc1xyXG4gICAgICAgICAgY2F0ZWdvcnkge1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICBwYXJlbnRDYXRlZ29yeSB7XHJcbiAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICBwYXJlbnRDYXRlZ29yeSB7XHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgLi4uSW1nRmllbGRzXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAke2ZyYWdtZW50LlNob3BDYXJ0RmllbGRzfVxyXG4gICAgJHtmcmFnbWVudC5Qcm9kdWN0RmllbGRzfVxyXG4gICAgJHtmcmFnbWVudC5JbWdGaWVsZHN9XHJcbiAgYCxcclxuICB1cGRhdGVTaG9wQ2FydDogZ3FsYFxyXG4gICAgbXV0YXRpb24gKCRzaG9wQ2FydDogU2hvcENhcnRJdGVtSW5wdXQpe1xyXG4gICAgICB1cGRhdGVTaG9wQ2FydCAoc2hvcENhcnQ6ICRzaG9wQ2FydCkge1xyXG4gICAgICAgIC4uLlNob3BDYXJ0RmllbGRzXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuU2hvcENhcnRGaWVsZHN9XHJcbiAgYCxcclxuICBvcmRlckNvbmZpcm1JbmZvOiBncWxgXHJcbiAgICBxdWVyeSB7XHJcbiAgICAgIGdldERhdGFDb25maWcoZGF0YUNvbmZpZ0lucHV0OiB7XHJcbiAgICAgICAgdHlwZTogXCIke0RpY3RUeXBlRW51bS5TZWxmQWRkcmVzc31cIlxyXG4gICAgICB9KSB7XHJcbiAgICAgICAgLi4uRGF0YUNvbmZpZ0ZpZWxkc1xyXG4gICAgICB9XHJcbiAgICAgIG9uZVVzZXIge1xyXG4gICAgICAgIC4uLlVzZXJGaWVsZHNcclxuICAgICAgICB1c2VySW5mbyB7XHJcbiAgICAgICAgICAuLi5Vc2VySW5mb0ZpZWxkc1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBwYXlDYXJkTGlzdE9uZVVzZXIge1xyXG4gICAgICAgIC4uLlVzZXJQYXlDYXJkRmllbGRzXHJcbiAgICAgIH1cclxuICAgICAgdXNlckFkZHJlc3NMaXN0T25lVXNlciB7XHJcbiAgICAgICAgLi4uVXNlckFkZHJlc3NGaWVsZHNcclxuICAgICAgfVxyXG4gICAgICBmcmVpZ2h0Q29uZmlnOiBnZXREYXRhQ29uZmlnIChkYXRhQ29uZmlnSW5wdXQ6IHtcclxuICAgICAgICB0eXBlOiBcIiR7RGljdFR5cGVFbnVtLkZyZWlnaHR9XCJcclxuICAgICAgfSkge1xyXG4gICAgICAgIC4uLkRhdGFDb25maWdGaWVsZHNcclxuICAgICAgfVxyXG4gICAgICB1c2VyTGV2ZWxMaXN0OiBnZXREaWN0TGlzdCAoZGljdElucHV0OiB7XHJcbiAgICAgICAgZGljdFR5cGVDb2RlOiBcIlVzZXJMZXZlbFwiXHJcbiAgICAgIH0pIHtcclxuICAgICAgICAuLi5EaWN0RmllbGRzXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuVXNlckFkZHJlc3NGaWVsZHN9XHJcbiAgICAke2ZyYWdtZW50LlVzZXJQYXlDYXJkRmllbGRzfVxyXG4gICAgJHtmcmFnbWVudC5Vc2VySW5mb0ZpZWxkc31cclxuICAgICR7ZnJhZ21lbnQuVXNlckZpZWxkc31cclxuICAgICR7ZnJhZ21lbnQuRGF0YUNvbmZpZ0ZpZWxkc31cclxuICAgICR7ZnJhZ21lbnQuRGljdEZpZWxkc31cclxuICBgLFxyXG4gIHNhdmVPcmRlcjogZ3FsYFxyXG4gICAgbXV0YXRpb24gKCRvcmRlckluZm9JdGVtSW5wdXQ6IE9yZGVySW5mb0l0ZW1JbnB1dCkge1xyXG4gICAgICBzYXZlT3JkZXIgKG9yZGVySW5mb0l0ZW1JbnB1dDogJG9yZGVySW5mb0l0ZW1JbnB1dCkge1xyXG4gICAgICAgIC4uLk9yZGVySW5mb0ZpZWxkc1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAke2ZyYWdtZW50Lk9yZGVySW5mb0ZpZWxkc31cclxuICBgLFxyXG4gIGRpY3RMaXN0OiBncWxgXHJcbiAgICBxdWVyeSAoJGRhdGE6IERpY3RJbnB1dCkge1xyXG4gICAgICBnZXREaWN0TGlzdCAoZGljdElucHV0OiAkZGF0YSkge1xyXG4gICAgICAgIC4uLkRpY3RGaWVsZHNcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5EaWN0RmllbGRzfVxyXG4gIGAsXHJcbiAgbGltaXRUaW1lRGF0YTogZ3FsYFxyXG4gICAgcXVlcnkge1xyXG4gICAgICBsaW1pdFRpbWVEYXRhOiBnZXREYXRhQ29uZmlnIChkYXRhQ29uZmlnSW5wdXQ6IHtcclxuICAgICAgICB0eXBlOiBcIiR7RGljdFR5cGVFbnVtLlByb21vdGlvbkZsYXNoU2FsZX1cIlxyXG4gICAgICB9KSB7XHJcbiAgICAgICAgLi4uRGF0YUNvbmZpZ0ZpZWxkc1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAke2ZyYWdtZW50LkRhdGFDb25maWdGaWVsZHN9XHJcbiAgYCxcclxuICBwcm9kdWN0TGlzdEJ5SWRzOiBncWxgXHJcbiAgICBxdWVyeSAoJGlkczogW1N0cmluZ10pIHtcclxuICAgICAgcHJvZHVjdExpc3RCeUlkcyAoaWRzOiAkaWRzKSB7XHJcbiAgICAgICAgdG90YWxcclxuICAgICAgICBsaXN0IHtcclxuICAgICAgICAgIC4uLlByb2R1Y3RGaWVsZHNcclxuICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIC4uLkltZ0ZpZWxkc1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5Qcm9kdWN0RmllbGRzfVxyXG4gICAgJHtmcmFnbWVudC5JbWdGaWVsZHN9XHJcbiAgYCxcclxuICBncm91cFF1ZXVlTGlzdDogZ3FsYFxyXG4gICAgcXVlcnkgKCRncm91cFF1ZXVlSXRlbUlucHV0OiBHcm91cFF1ZXVlSXRlbUlucHV0KSB7XHJcbiAgICAgIGdyb3VwUXVldWVMaXN0IChncm91cFF1ZXVlSXRlbUlucHV0OiAkZ3JvdXBRdWV1ZUl0ZW1JbnB1dCkge1xyXG4gICAgICAgIC4uLkdyb3VwUXVldWVGaWVsZHNcclxuICAgICAgICBwcm9kdWN0IHtcclxuICAgICAgICAgIC4uLlByb2R1Y3RGaWVsZHNcclxuICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIC4uLkltZ0ZpZWxkc1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBncm91cE9yZGVyIHtcclxuICAgICAgICAgIC4uLkdyb3VwT3JkZXJGaWVsZHNcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuR3JvdXBRdWV1ZUZpZWxkc31cclxuICAgICR7ZnJhZ21lbnQuUHJvZHVjdEZpZWxkc31cclxuICAgICR7ZnJhZ21lbnQuSW1nRmllbGRzfVxyXG4gICAgJHtmcmFnbWVudC5Hcm91cE9yZGVyRmllbGRzfVxyXG4gIGAsXHJcbiAgdXBkYXRlT3JkZXI6IGdxbGBcclxuICAgIG11dGF0aW9uICgkb3JkZXJJbmZvSXRlbUlucHV0OiBPcmRlckluZm9JdGVtSW5wdXQpIHtcclxuICAgICAgdXBkYXRlT3JkZXIgKG9yZGVySW5mb0l0ZW1JbnB1dDogJG9yZGVySW5mb0l0ZW1JbnB1dCkge1xyXG4gICAgICAgIC4uLk9yZGVySW5mb0ZpZWxkc1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAke2ZyYWdtZW50Lk9yZGVySW5mb0ZpZWxkc31cclxuICBgLFxyXG4gIHNhdmVHcm91cE9yZGVyOiBncWxgXHJcbiAgICBtdXRhdGlvbiAoJG9yZGVySW5mb0l0ZW1JbnB1dDogT3JkZXJJbmZvSXRlbUlucHV0LCAkZ3JvdXBPcmRlckl0ZW1JbnB1dDogR3JvdXBPcmRlckl0ZW1JbnB1dCwgJGdyb3VwUXVldWVJdGVtSW5wdXQ6IEdyb3VwUXVldWVJdGVtSW5wdXQpIHtcclxuICAgICAgc2F2ZUdyb3VwT3JkZXIgKG9yZGVySW5mb0l0ZW1JbnB1dDogJG9yZGVySW5mb0l0ZW1JbnB1dCwgZ3JvdXBPcmRlckl0ZW1JbnB1dDogJGdyb3VwT3JkZXJJdGVtSW5wdXQsIGdyb3VwUXVldWVJdGVtSW5wdXQ6ICRncm91cFF1ZXVlSXRlbUlucHV0KSB7XHJcbiAgICAgICAgLi4uT3JkZXJJbmZvRmllbGRzXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuT3JkZXJJbmZvRmllbGRzfVxyXG4gIGAsXHJcbiAgcHJvbW9Db2RlTGlzdDogZ3FsYFxyXG4gICAgcXVlcnkgKCRwcm9tb0NvZGVJdGVtSW5wdXQ6IFByb21vQ29kZUl0ZW1JbnB1dCkge1xyXG4gICAgICBwcm9tb0NvZGVMaXN0IChwcm9tb0NvZGVJdGVtSW5wdXQ6ICRwcm9tb0NvZGVJdGVtSW5wdXQpIHtcclxuICAgICAgICAuLi5Qcm9tb0NvZGVGaWVsZHNcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5Qcm9tb0NvZGVGaWVsZHN9XHJcbiAgYCxcclxuICBjYXRlZ29yeVJvb3RQYXJlbnQ6IGdxbGBcclxuICAgIHF1ZXJ5ICgkY2F0ZWdvcnlJdGVtSW5wdXQ6IENhdGVnb3J5SXRlbUlucHV0KSB7XHJcbiAgICAgIGNhdGVnb3J5Um9vdFBhcmVudCAoY2F0ZWdvcnlJdGVtSW5wdXQ6ICRjYXRlZ29yeUl0ZW1JbnB1dCkge1xyXG4gICAgICAgIC4uLkNhdGVnb3J5XHJcbiAgICAgICAgcGFyZW50Q2F0ZWdvcnkge1xyXG4gICAgICAgICAgLi4uQ2F0ZWdvcnlcclxuICAgICAgICAgIHBhcmVudENhdGVnb3J5IHtcclxuICAgICAgICAgICAgLi4uQ2F0ZWdvcnlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuQ2F0ZWdvcnlGaWVsZHN9XHJcbiAgYCxcclxuICBwcm9kdWN0TGlzdE9yZGVyQnlPcmRlcjogZ3FsYFxyXG4gICAgICBxdWVyeSAoJG9yZGVyQnlUeXBlOiBTdHJpbmcsICRwcm9kdWN0SW5wdXQ6IFByb2R1Y3RJdGVtSW5wdXQpIHtcclxuICAgICAgICBwcm9kdWN0TGlzdE9yZGVyQnlPcmRlciAob3JkZXJCeVR5cGU6ICRvcmRlckJ5VHlwZSwgcHJvZHVjdElucHV0OiAkcHJvZHVjdElucHV0KSB7XHJcbiAgICAgICAgICBsaXN0IHtcclxuICAgICAgICAgICAgck9yZGVyUHJvZHVjdCB7XHJcbiAgICAgICAgICAgICAgLi4uUk9yZGVyUHJvZHVjdEZpZWxkc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC4uLlByb2R1Y3RGaWVsZHNcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAuLi5JbWdGaWVsZHNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdG90YWxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJHtmcmFnbWVudC5Qcm9kdWN0RmllbGRzfVxyXG4gICAgICAke2ZyYWdtZW50LkltZ0ZpZWxkc31cclxuICAgICAgJHtmcmFnbWVudC5ST3JkZXJQcm9kdWN0RmllbGRzfVxyXG4gIGAsXHJcbn1cclxuXHJcbiIsImV4cG9ydCBlbnVtIFByb21vQ29kZVR5cGVFbnVtIHtcclxuICBEYXJlbkNhcmQgPSAnRGFyZW5DYXJkJyxcclxuICBQcm9tb0NvZGUgPSAnUHJvbW9Db2RlJyxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRGlzY291bnRUeXBlRW51bSB7XHJcbiAgUGVyY2VudGFnZSA9ICdQZXJjZW50YWdlJyxcclxuICBBbW91bnQgPSAnQW1vdW50JyxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gU1Mge1xyXG4gIFNTLFxyXG4gIFNTMixcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRGlzY291bnRDb25kaXRpb25FbnVtIHtcclxuICBObyA9ICdObycsXHJcbiAgQW1vdW50ID0gJ0Ftb3VudCcsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFByb2R1Y3RTdXBwbGVtZW50IHtcclxuICBfLFxyXG4gIFBlbmRpbmcsXHJcbiAgRmluaXNoLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUHJvZHVjdFN1cHBsZW1lbnRTdHJpbmc6IGFueSA9IHtcclxuICAxOiAn6YWN6LSn5LitJyxcclxuICAyOiAn5bey5a6M5oiQJyxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gT3JkZXJTdGF0ZSB7XHJcbiAgT3JkZXJlZCA9IDEsXHJcbiAgUGFpZCA9IDIsXHJcbiAgUGlja2luZyA9IDMsXHJcbiAgUGlja2VkVXAgPSA0LFxyXG4gIEZpbmlzaCA9IDUsXHJcbiAgQ2FuY2VsID0gNixcclxufVxyXG5cclxuLy8gMTrku6Pku5jmrL4gMjrlt7Lku5jmrL4gMzrlt7Llj5HotKcgNDrlt7LmlLbotKcgNTrlt7Llj5bmtoggNjrlt7LlrozmiJAgNzrlt7LpgIDlm55cclxuY29uc3QgX3M6IHtcclxuICBba2V5IGluIG51bWJlcl06IHN0cmluZ1xyXG59ID0ge1xyXG4gIDE6ICflvoXku5jmrL4nLFxyXG4gIDI6ICflt7Lku5jmrL4nLFxyXG4gIDM6ICflt7Llj5HotKcnLFxyXG4gIDQ6ICflt7LmlLbotKcnLFxyXG4gIDU6ICflt7Llj5bmtognLFxyXG4gIDY6ICflt7LlrozmiJAnLFxyXG4gIDc6ICflt7LpgIDlm54nLFxyXG59XHJcbmV4cG9ydCBjb25zdCBvcmRlclN0YXRlVG9TdHJpbmcgPSAoczogbnVtYmVyIHwgbnVsbCA9IDApID0+IHtcclxuICByZXR1cm4gX3M/LlsocyA/PyAwKV0gPz8gJydcclxufVxyXG5cclxuLy8g6YWN572u566h55CGXHJcbmV4cG9ydCBlbnVtIERpY3RUeXBlRW51bSB7XHJcbiAgR3JvdXBQcmVjaXNpb24gPSAnR3JvdXBQcmVjaXNpb24nLFxyXG4gIFVzZXJMZXZlbCA9ICdVc2VyTGV2ZWwnLFxyXG4gIEZyZWlnaHQgPSAnRnJlaWdodCcsXHJcbiAgSGVscERvY3VtZW50YXRpb25UeXBlID0gJ0hlbHBEb2N1bWVudGF0aW9uVHlwZScsXHJcbiAgSGVscERvY3VtZW50YXRpb24gPSAnSGVscERvY3VtZW50YXRpb24nLFxyXG4gIFByb21vdGlvblRoZW1lU2VsZWN0ID0gJ1Byb21vdGlvblRoZW1lU2VsZWN0JyxcclxuICBQcm9tb3Rpb25GbGFzaFNhbGUgPSAnUHJvbW90aW9uRmxhc2hTYWxlJyxcclxuICBIb21lQ2Fyb3VzZWwgPSAnSG9tZUNhcm91c2VsJyxcclxuICBPcmRlclN0YXRlID0gJ09yZGVyU3RhdGUnLFxyXG4gIFNlbGZBZGRyZXNzID0gJ1NlbGZBZGRyZXNzJyxcclxuICBBcHBNb2R1bGUgPSAnQXBwTW9kdWxlJyxcclxufVxyXG5cclxuLy8g6L2u5pKt5Zu+5YWz6IGU6aG5XHJcbmV4cG9ydCBlbnVtIFJlbGF0ZWRPYmpUeXBlRW51bSB7XHJcbiAgUHJvbW9Db2RlID0gJ1Byb21vQ29kZScsXHJcbiAgUHJvbW90aW9uRmxhc2hTYWxlID0gJ1Byb21vdGlvbkZsYXNoU2FsZScsXHJcbiAgUHJvbW90aW9uVGhlbWVTZWxlY3QgPSAnUHJvbW90aW9uVGhlbWVTZWxlY3QnLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBBcHBGb290QmFyIHtcclxuICBob21lID0gJ2hvbWUnLFxyXG4gIGdyb3VwID0gJ2dyb3VwJyxcclxuICBjYXJkID0gJ2NhcmQnLFxyXG4gIGNhcnQgPSAnY2FydCcsXHJcbiAgbWUgPSAnbWUnXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEFwcE1vZHVsZVR5cGVFbnVtIHtcclxuICBjYXRlZ29yeVNlbGVjdGlvbiA9ICdjYXRlZ29yeVNlbGVjdGlvbicsXHJcbiAgbGltaXRUaW1lID0gJ2xpbWl0VGltZScsXHJcbiAgc2FsZXNSYW5rID0gJ3NhbGVzUmFuaycsXHJcbiAgdGhlbWVTZWxlY3Rpb24gPSAndGhlbWVTZWxlY3Rpb24nLFxyXG4gIG1heUxpa2UgPSAnbWF5TGlrZScsXHJcbiAgbGluZVJhbmtpbmcgPSAnbGluZVJhbmtpbmcnLFxyXG4gIHRvcFJhbmtpbmcgPSAndG9wUmFua2luZycsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDYXRlZ29yeVJvb3ROYW1lID0gJ3Jvb3QnXHJcblxyXG5leHBvcnQgY29uc3Qgb3JkZXJTdGF0ZUtleXM6IHN0cmluZ1tdID0gT2JqZWN0LnZhbHVlcyhPcmRlclN0YXRlKSBhcyBzdHJpbmdbXVxyXG5cclxuZXhwb3J0IGNvbnN0IFByb3ZpbmNlRGF0YSA9IFtcclxuICBbJ0FMJywgJ0FsYWJhbWEnXSxcclxuICBbJ0FLJywgJ0FsYXNrYSddLFxyXG4gIFsnQVonLCAnQXJpem9uYSddLFxyXG4gIFsnQVInLCAnQXJrYW5zYXMnXSxcclxuICBbJ0NBJywgJ0NhbGlmb3JuaWEnXSxcclxuICBbJ0NPJywgJ0NvbG9yYWRvJ10sXHJcbiAgWydDVCcsICdDb25uZWN0aWN1dCddLFxyXG4gIFsnREUnLCAnRGVsYXdhcmUnXSxcclxuICBbJ0RDJywgJ0Rpc3RyaWN0IE9mIENvbHVtYmlhJ10sXHJcbiAgWydGTCcsICdGbG9yaWRhJ10sXHJcbiAgWydHQScsICdHZW9yZ2lhJ10sXHJcbiAgWydISScsICdIYXdhaWknXSxcclxuICBbJ0lEJywgJ0lkYWhvJ10sXHJcbiAgWydJTCcsICdJbGxpbm9pcyddLFxyXG4gIFsnSU4nLCAnSW5kaWFuYSddLFxyXG4gIFsnSUEnLCAnSW93YSddLFxyXG4gIFsnS1MnLCAnS2Fuc2FzJ10sXHJcbiAgWydLWScsICdLZW50dWNreSddLFxyXG4gIFsnTEEnLCAnTG91aXNpYW5hJ10sXHJcbiAgWydNRScsICdNYWluZSddLFxyXG4gIFsnTUQnLCAnTWFyeWxhbmQnXSxcclxuICBbJ01BJywgJ01hc3NhY2h1c2V0dHMnXSxcclxuICBbJ01JJywgJ01pY2hpZ2FuJ10sXHJcbiAgWydNTicsICdNaW5uZXNvdGEnXSxcclxuICBbJ01TJywgJ01pc3Npc3NpcHBpJ10sXHJcbiAgWydNTycsICdNaXNzb3VyaSddLFxyXG4gIFsnTVQnLCAnTW9udGFuYSddLFxyXG4gIFsnTkUnLCAnTmVicmFza2EnXSxcclxuICBbJ05WJywgJ05ldmFkYSddLFxyXG4gIFsnTkgnLCAnTmV3IEhhbXBzaGlyZSddLFxyXG4gIFsnTkonLCAnTmV3IEplcnNleSddLFxyXG4gIFsnTk0nLCAnTmV3IE1leGljbyddLFxyXG4gIFsnTlknLCAnTmV3IFlvcmsnXSxcclxuICBbJ05DJywgJ05vcnRoIENhcm9saW5hJ10sXHJcbiAgWydORCcsICdOb3J0aCBEYWtvdGEnXSxcclxuICBbJ09IJywgJ09oaW8nXSxcclxuICBbJ09LJywgJ09rbGFob21hJ10sXHJcbiAgWydPUicsICdPcmVnb24nXSxcclxuICBbJ1BBJywgJ1Blbm5zeWx2YW5pYSddLFxyXG4gIFsnUkknLCAnUmhvZGUgSXNsYW5kJ10sXHJcbiAgWydTQycsICdTb3V0aCBDYXJvbGluYSddLFxyXG4gIFsnU0QnLCAnU291dGggRGFrb3RhJ10sXHJcbiAgWydUTicsICdUZW5uZXNzZWUnXSxcclxuICBbJ1RYJywgJ1RleGFzJ10sXHJcbiAgWydVVCcsICdVdGFoJ10sXHJcbiAgWydWVCcsICdWZXJtb250J10sXHJcbiAgWydWQScsICdWaXJnaW5pYSddLFxyXG4gIFsnV0EnLCAnV2FzaGluZ3RvbiddLFxyXG4gIFsnV1YnLCAnV2VzdCBWaXJnaW5pYSddLFxyXG4gIFsnV0knLCAnV2lzY29uc2luJ10sXHJcbiAgWydXWScsICdXeW9taW5nJ10sXHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQaWNrVXBUeXBlTmFtZSA9ICh0eXBlOiBzdHJpbmcgfCAnU2VsZicgfCAnRGVsaXZlcnknKSA9PiB7XHJcbiAgcmV0dXJuICh7XHJcbiAgICBTZWxmOiAn6Ieq5Y+WJyxcclxuICAgIERlbGl2ZXJ5OiAn6YWN6YCBJyxcclxuICB9KVt0eXBlIGFzICdTZWxmJyB8ICdEZWxpdmVyeSddID8/ICcnXHJcbn1cclxuZXhwb3J0IGNvbnN0IFBpY2tVcFR5cGVFbnVtID0ge1xyXG4gIFNlbGY6ICdTZWxmJyxcclxuICBEZWxpdmVyeTogJ0RlbGl2ZXJ5JyxcclxufVxyXG4vLyDng63plIDmjpLooYxcclxuZXhwb3J0IGNvbnN0IFNhbGVSYW5rVHlwZUVudW0gPSB7XHJcbiAgT25lRGF5OiAnT25lRGF5JyxcclxuICBPbmVXZWVrOiAnT25lV2VlaycsXHJcbiAgT25lTW9udGg6ICdPbmVNb250aCcsXHJcbn1cclxuXHJcbiIsImV4cG9ydCBjb25zdCBtcFN0eWxlID0ge1xyXG4gIHJlZDogJyNGODQwMzMnLFxyXG4gIHNoYWRvdzoge1xyXG4gICAgMTogJzAgMXB4IDFweCAwIHJnYmEoMCwwLDAsMC4xNCksIDAgMnB4IDFweCAtMXB4IHJnYmEoMCwwLDAsMC4xMiksIDAgMXB4IDNweCAwIHJnYmEoMCwwLDAsMC4yMCknLFxyXG4gIH0sXHJcbn1cclxuIiwiaW1wb3J0IHsgTWF5YmUgfSBmcm9tIFwiLi4vZ3JhcGhxbFR5cGVzL3R5cGVzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgbHMgPSAoa2V5OiBNYXliZTxzdHJpbmc+IHwgdW5kZWZpbmVkKSA9PiBrZXkgPz8gJydcclxuIiwiXHJcbmV4cG9ydCBjb25zdCBpc0RldiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnXHJcblxyXG5leHBvcnQgY29uc3Qgc3NMb2cgPSAoZGF0YTogYW55KSA9PiB7XHJcbiAgaWYgKGlzRGV2KSB7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gIH1cclxuICByZXR1cm4gZGF0YVxyXG59XHJcbiIsIi8qIGdsb2JhbCBsb2NhbFN0b3JhZ2UgKi9cclxuZXhwb3J0IGNvbnN0IHNldFRva2VuID0gKHRva2VuOiBzdHJpbmcsIG5hbWUgPSAndG9rZW4nKSA9PiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShuYW1lLCB0b2tlbilcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRUb2tlbiA9IChuYW1lID0gJ3Rva2VuJykgPT4gbG9jYWxTdG9yYWdlLmdldEl0ZW0obmFtZSkgfHwgJydcclxuIiwiaW1wb3J0IGZvcm1hdCBmcm9tICdkYXRlLWZucy9mb3JtYXQnXHJcbmltcG9ydCBzZXQgZnJvbSAnbG9kYXNoL3NldCdcclxuaW1wb3J0IHtjbG9uZURlZXAsIFByb3BlcnR5UGF0aCwgaXNGdW5jdGlvbiwgZ2V0LCBpc0FycmF5LCBtZXJnZVdpdGgsIGlzU3RyaW5nfSBmcm9tICdsb2Rhc2gnXHJcbmltcG9ydCB7TWF5YmV9IGZyb20gJy4uL2dyYXBocWxUeXBlcy90eXBlcydcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRPYmplY3RVUkwgPSAoZmlsZTogYW55KSA9PiB7XHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gIHJldHVybiB3aW5kb3c/LmNyZWF0ZU9iamVjdFVSTD8uKGZpbGUpXHJcbiAgICAgID8/IHdpbmRvdz8uVVJMPy5jcmVhdGVPYmplY3RVUkw/LihmaWxlKVxyXG4gICAgICA/PyB3aW5kb3c/LndlYmtpdFVSTD8uY3JlYXRlT2JqZWN0VVJMPy4oZmlsZSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHBhcnNlRmxvYXRGb3JJbnB1dCA9ICh2YWx1ZTogYW55KSA9PiB7XHJcbiAgaWYgKHZhbHVlID09PSAnLScgfHwgdmFsdWUgPT09ICcnKSByZXR1cm4gdmFsdWVcclxuICB0cnkge1xyXG4gICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5lcnJvcihlKVxyXG4gIH1cclxufVxyXG5cclxudHlwZSBTZXREYXRhPFMgPSBhbnk+ID0gUyB8ICgocHJlRGF0YTogUykgPT4gUylcclxuXHJcbmV4cG9ydCBjb25zdCBmcFNldCA9IDxFID0gYW55PihvcmlnaW46IGFueSwgcGF0aDogYW55LCB2YWx1ZTogU2V0RGF0YTxFPikgPT4ge1xyXG4gIGxldCBuZXdEYXRhID0gY2xvbmVEZWVwKG9yaWdpbilcclxuICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcclxuICAgIGNvbnN0IG9sZERhdGEgPSBnZXQob3JpZ2luLCBwYXRoKVxyXG4gICAgc2V0KG5ld0RhdGEsIHBhdGgsIHZhbHVlKG9sZERhdGEpKVxyXG4gIH0gZWxzZSB7XHJcbiAgICBzZXQobmV3RGF0YSwgcGF0aCwgdmFsdWUpXHJcbiAgfVxyXG4gIHJldHVybiBuZXdEYXRhXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkZWxheSA9ICh0aW1lOiBudW1iZXIpID0+IChuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgdGltZSkpKVxyXG5cclxuZXhwb3J0IGNvbnN0IGZwU2V0UHJlOiA8VCBleHRlbmRzIG9iamVjdD4ocGF0aDogUHJvcGVydHlQYXRoLCBuZXdWYWx1ZTogU2V0RGF0YSkgPT4gKG9yaWdpbjogVCkgPT4gVCA9IChwYXRoOiBhbnksIHZhbHVlKSA9PiAob3JpZ2luKSA9PiB7XHJcbiAgbGV0IG5ld0RhdGEgPSBjbG9uZURlZXAob3JpZ2luKVxyXG4gIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xyXG4gICAgY29uc3Qgb2xkRGF0YSA9IGdldChvcmlnaW4sIHBhdGgpXHJcbiAgICBzZXQobmV3RGF0YSwgcGF0aCwgdmFsdWUob2xkRGF0YSkpXHJcbiAgfSBlbHNlIHtcclxuICAgIHNldChuZXdEYXRhLCBwYXRoLCB2YWx1ZSlcclxuICB9XHJcbiAgcmV0dXJuIG5ld0RhdGFcclxufVxyXG5cclxuY29uc3QgY3VzdG9taXplciA9IChvYmpWYWx1ZTogYW55LCBzcmNWYWx1ZTogYW55KSA9PiB7XHJcbiAgaWYgKGlzQXJyYXkoc3JjVmFsdWUpKSB7XHJcbiAgICByZXR1cm4gc3JjVmFsdWVcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmcE1lcmdlOiA8VE9iamVjdCwgVFNvdXJjZTE+KFxyXG4gICAgb3JpZ2luOiBUT2JqZWN0LFxyXG4gICAgbmV3VmFsdWU6IFRTb3VyY2UxLFxyXG4pID0+IFRPYmplY3QgJiBUU291cmNlMSA9IChvcmlnaW4sIG5ld1ZhbHVlKSA9PiB7XHJcbiAgcmV0dXJuIG1lcmdlV2l0aCh7fSwgb3JpZ2luLCBuZXdWYWx1ZSwgY3VzdG9taXplcilcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGZwTWVyZ2VQcmU6IDxQcmUsIE5ldyBleHRlbmRzIFBhcnRpYWw8UHJlPj4obmV3VmFsdWU6IE5ldykgPT4gKG9yaWdpbjogUHJlKSA9PiBQcmUgJiBOZXcgPSAobmV3VmFsdWUpID0+IChwcmUpID0+IG1lcmdlV2l0aCh7fSwgcHJlLCBuZXdWYWx1ZSwgY3VzdG9taXplcilcclxuXHJcbmV4cG9ydCBjb25zdCBmcFJlbW92ZSA9IChhcnI6IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gIGlmICghYXJyKSByZXR1cm4gW11cclxuICByZXR1cm4gW1xyXG4gICAgLi4uYXJyPy5zbGljZSgwLCBpbmRleCksXHJcbiAgICAuLi5hcnI/LnNsaWNlKGluZGV4ICsgMSwgYXJyPy5sZW5ndGgpLFxyXG4gIF1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRlYWxOdW1iZXJaZXJvID0gKGxlbmd0aDogbnVtYmVyKSA9PiAobnVtOiBudW1iZXIpID0+IHtcclxuICBjb25zdCBfcyA9IGAke251bSA/PyAnJ31gXHJcbiAgcmV0dXJuIEFycmF5KGxlbmd0aCAtIF9zLmxlbmd0aCkuZmlsbCgnMCcpLmpvaW4oJycpICsgX3NcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGZvcm1hdERhdGUgPSAoZGF0ZTogYW55ID0gJycsIGZvcm1hdFN0cmluZyA9ICdZWVlZLU1NLWRkIEhIOm1tOnNzJykgPT4ge1xyXG4gIGlmICghZGF0ZSkge1xyXG4gICAgcmV0dXJuICcnXHJcbiAgfVxyXG4gIGlmIChpc1N0cmluZyhkYXRlKSkge1xyXG4gICAgcmV0dXJuIGZvcm1hdChuZXcgRGF0ZShkYXRlKSwgZm9ybWF0U3RyaW5nLCB7XHJcbiAgICAgIHVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnM6IHRydWUsXHJcbiAgICAgIHVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2VuczogdHJ1ZSxcclxuICAgIH0pXHJcbiAgfVxyXG4gIHJldHVybiAoaXNOYU4oZGF0ZSkpID8gJycgOiBmb3JtYXQoZGF0ZSwgZm9ybWF0U3RyaW5nLCB7XHJcbiAgICB1c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zOiB0cnVlLFxyXG4gICAgdXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zOiB0cnVlLFxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkZWFsTm9uQm9vbGVhblByb3BzID0gKHZhbHVlOiBhbnkpID0+ICEhdmFsdWUgPyAxIDogMFxyXG5cclxuZXhwb3J0IGNvbnN0IGZvcm1hdE1vbmV5ID0gKGFtb3VudDogYW55LCBkZWNpbWFsQ291bnQgPSAyLCBkZWNpbWFsID0gXCIuXCIsIHRob3VzYW5kcyA9IFwiLFwiKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGRlY2ltYWxDb3VudCA9IE1hdGguYWJzKGRlY2ltYWxDb3VudClcclxuICAgIGRlY2ltYWxDb3VudCA9IGlzTmFOKGRlY2ltYWxDb3VudCkgPyAyIDogZGVjaW1hbENvdW50XHJcblxyXG4gICAgY29uc3QgbmVnYXRpdmVTaWduID0gYW1vdW50IDwgMCA/IFwiLVwiIDogXCJcIlxyXG5cclxuICAgIGxldCBpID0gcGFyc2VJbnQoYW1vdW50ID0gTWF0aC5hYnMoTnVtYmVyKGFtb3VudCkgfHwgMCkudG9GaXhlZChkZWNpbWFsQ291bnQpKS50b1N0cmluZygpXHJcbiAgICBsZXQgaiA9IChpLmxlbmd0aCA+IDMpID8gaS5sZW5ndGggJSAzIDogMFxyXG5cclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIHJldHVybiBuZWdhdGl2ZVNpZ24gKyAoaiA/IGkuc3Vic3RyKDAsIGopICsgdGhvdXNhbmRzIDogJycpICsgaS5zdWJzdHIoaikucmVwbGFjZSgvKFxcZHszfSkoPz1cXGQpL2csIFwiJDFcIiArIHRob3VzYW5kcykgKyAoZGVjaW1hbENvdW50ID8gZGVjaW1hbCArIE1hdGguYWJzKGFtb3VudCAtIGkpLnRvRml4ZWQoZGVjaW1hbENvdW50KS5zbGljZSgyKSA6IFwiXCIpXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5sb2coZSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkZWFsTW9uZXkgPSAoYW1vdW50OiBhbnksIHByZSA9ICcnKSA9PiBgJHtwcmV9JCAke2Zvcm1hdE1vbmV5KGFtb3VudCl9YFxyXG5cclxuZXhwb3J0IGNvbnN0IGRlYWxNYXliZU51bWJlciA9IChudW06IE1heWJlPG51bWJlcj4gfCB1bmRlZmluZWQpID0+IG51bSA/PyAwXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgZ2V0T2JqZWN0VVJMLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGVhbFVybFF1ZXJ5ID0gKHF1ZXJ5T2JqOiBhbnkpID0+IHtcclxuICByZXR1cm4gYD8ke09iamVjdC5rZXlzKHF1ZXJ5T2JqKS5tYXAodmFsdWUgPT4gYCR7dmFsdWV9PSR7cXVlcnlPYmpbdmFsdWVdfWApLmpvaW4oJyYnKX1gXHJcbn1cclxuXHJcblxyXG4iLCJpbXBvcnQgSGVscE91dGxpbmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9IZWxwT3V0bGluZSdcclxuaW1wb3J0IFBlcnNvblBpbkNpcmNsZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1BlcnNvblBpbkNpcmNsZSdcclxuaW1wb3J0IFBpbkRyb3BJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9QaW5Ecm9wJ1xyXG5pbXBvcnQgQ2FyZEdpZnRjYXJkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2FyZEdpZnRjYXJkJ1xyXG5pbXBvcnQgQ2FyZE1lbWJlcnNoaXBJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DYXJkTWVtYmVyc2hpcCdcclxuaW1wb3J0IEhpc3RvcnlJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9IaXN0b3J5J1xyXG5pbXBvcnQgQXJyb3dGb3J3YXJkSW9zSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dGb3J3YXJkSW9zJ1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQge0J1dHRvbiwgQnV0dG9uQmFzZSwgQnV0dG9uQmFzZVByb3BzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHttZU1vZGVsfSBmcm9tICcuL21vZGVsJ1xyXG5pbXBvcnQge2dyZXksIHJlZH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzJ1xyXG5pbXBvcnQge3VzZVN0b3JlTW9kZWx9IGZyb20gJy4uLy4uL01vZGVsQWN0aW9uL3VzZVN0b3JlJ1xyXG5pbXBvcnQge2xzfSBmcm9tICcuLi8uLi90b29scy9kZWFsS2V5J1xyXG5pbXBvcnQge0Zvb3RCYXJ9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRm9vdEJhci9Gb290QmFyJ1xyXG5pbXBvcnQgTW9uZXRpemF0aW9uT24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01vbmV0aXphdGlvbk9uJ1xyXG5pbXBvcnQgUGF5bWVudEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1BheW1lbnQnXHJcbmltcG9ydCB7QlNjcm9sbGVyfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0JTY3JvbGwvQlNjcm9sbGVyJ1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7ZGVhbE5vQXV0aH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Ob0F1dGgvTm9BdXRoJ1xyXG5cclxuY29uc3QgQmFzZVBhZGRpbmcgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDAgMjBweDtcclxuYFxyXG5jb25zdCBCb3ggPSBzdHlsZWQuZGl2YFxyXG4gIC8vcGFkZGluZy1ib3R0b206IDEwMHB4O1xyXG5gXHJcbmNvbnN0IEhlYWRlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwdmggMzBweCAzMHB4O1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEwMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxuICBiYWNrZ3JvdW5kOiAke3JlZFs0MDBdfTtcclxuICBjb2xvcjogI2ZmZjtcclxuICA+IGhlYWRlciB7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBncmlkLWFyZWE6IDEvMS8yLzM7XHJcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICA+IGFzaWRlIHtcclxuICAgIGdyaWQtYXJlYTogMi8yLzQvMztcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICB9XHJcbmBcclxuY29uc3QgVGFiID0gc3R5bGVkKEJhc2VQYWRkaW5nKWBcclxuICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbmBcclxuY29uc3QgQ2FyZCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IDFmcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDIwcHggMDtcclxuICA+IHN2ZyB7XHJcbiAgICBncmlkLWFyZWE6IDEvMS8zLzI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICB9XHJcbiAgPiBmb290ZXIge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuYFxyXG5jb25zdCBQYXJ0aW5nID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMXB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGJhY2tncm91bmQ6ICR7Z3JleVsyMDBdfTtcclxuYFxyXG5jb25zdCBMaXN0SXRlbSA9IHN0eWxlZChCdXR0b25CYXNlKTxCdXR0b25CYXNlUHJvcHM+YFxyXG4gICYmJiB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuICA+IG1haW4ge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgID4gZm9vdGVyIHtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBjb2xvcjogJHtncmV5WzcwMF19XHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcbmNvbnN0IEVtcHR5ID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gID4gbWFpbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgPiBzcGFuIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3Qge3N0YXRlOiBzdGF0ZU1lLCBhY3Rpb25zOiBhY3Rpb25zTWV9ID0gdXNlU3RvcmVNb2RlbChtZU1vZGVsKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIXN0YXRlTWUudXNlci5pZCkge1xyXG4gICAgICBhY3Rpb25zTWUuZ2V0TG9naW5Vc2VyKClcclxuICAgIH1cclxuICB9LCBbXSlcclxuICByZXR1cm4gPEJveD5cclxuICAgIHtkZWFsTm9BdXRoKDxCU2Nyb2xsZXJcclxuICAgICAgICBib3hIZWlnaHQ9eydjYWxjKDEwMHZoIC0gNDVweCknfVxyXG4gICAgPlxyXG4gICAgICA8SGVhZGVyPlxyXG4gICAgICAgIDxoZWFkZXI+e2xzKCfmgqjlpb0sJyl9e3N0YXRlTWUudXNlci51c2VySW5mbz8ubmFtZX08L2hlYWRlcj5cclxuICAgICAgICA8c2VjdGlvbj57c3RhdGVNZS51c2VyLnVzZXJJbmZvPy5waG9uZX08L3NlY3Rpb24+XHJcbiAgICAgICAgPHNlY3Rpb24+e3N0YXRlTWUudXNlci51c2VySW5mbz8uZW1haWx9PC9zZWN0aW9uPlxyXG4gICAgICAgIDxhc2lkZT5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBjb2xvcj17J2luaGVyaXQnfVxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9eydvdXRsaW5lZCd9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYWN0aW9uc01lLmxvZ291dCgpfVxyXG4gICAgICAgICAgPntscygn55m75Ye6Jyl9PC9CdXR0b24+XHJcbiAgICAgICAgPC9hc2lkZT5cclxuICAgICAgPC9IZWFkZXI+XHJcbiAgICAgIDxUYWI+XHJcbiAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICA8TW9uZXRpemF0aW9uT24vPlxyXG4gICAgICAgICAgPG1haW4+e3N0YXRlTWUudXNlci5vcmRlckNvaW5DdXJyZW50TW9udGggPz8gMH08L21haW4+XHJcbiAgICAgICAgICA8Zm9vdGVyPntscygn5b2T5YmN6L6+5Lq65biBJyl9PC9mb290ZXI+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDxQYXJ0aW5nLz5cclxuICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgIDxNb25ldGl6YXRpb25Pbi8+XHJcbiAgICAgICAgICA8bWFpbj57c3RhdGVNZS51c2VyLm9yZGVyQ29pbk5leHRNb250aCA/PyAwfTwvbWFpbj5cclxuICAgICAgICAgIDxmb290ZXI+e2xzKCflvZPliY3ovr7kurrluIEnKX08L2Zvb3Rlcj5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPFBhcnRpbmcvPlxyXG4gICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgPFBheW1lbnRJY29uLz5cclxuICAgICAgICAgIDxtYWluPjEwMjE8L21haW4+XHJcbiAgICAgICAgICA8Zm9vdGVyPntscygn6L6+5Lq65Y2hJyl9PC9mb290ZXI+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICA8L1RhYj5cclxuICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvbWUvb3JkZXJIaXN0b3J5JylcclxuICAgICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8SGlzdG9yeUljb24vPlxyXG4gICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgPHNlY3Rpb24+e2xzKCfmiJHnmoTorqLljZXljoblj7InKX08L3NlY3Rpb24+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgICAgIDxhc2lkZT5cclxuICAgICAgICAgIDxBcnJvd0ZvcndhcmRJb3NJY29uLz5cclxuICAgICAgICA8L2FzaWRlPlxyXG4gICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICB7Lyo8TGlzdEl0ZW0qL31cclxuICAgICAgey8qICAgIG9uQ2xpY2s9eygpID0+IHtzaG93TWVzc2FnZSgn572R56uZ5bu66K6+5LitLi4uJyl9fSovfVxyXG4gICAgICB7Lyo+Ki99XHJcbiAgICAgIHsvKiAgPFVwZGF0ZUljb24vPiovfVxyXG4gICAgICB7LyogIDxtYWluPiovfVxyXG4gICAgICB7LyogICAgPHNlY3Rpb24+e2xzKCfkuIvmrKHkubDmuIXljZUnKX08L3NlY3Rpb24+Ki99XHJcbiAgICAgIHsvKiAgICA8Zm9vdGVyPntscygnJyl9PC9mb290ZXI+Ki99XHJcbiAgICAgIHsvKiAgPC9tYWluPiovfVxyXG4gICAgICB7LyogIDxhc2lkZT4qL31cclxuICAgICAgey8qICAgIDxBcnJvd0ZvcndhcmRJb3NJY29uLz4qL31cclxuICAgICAgey8qICA8L2FzaWRlPiovfVxyXG4gICAgICB7Lyo8L0xpc3RJdGVtPiovfVxyXG4gICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goJy9tZS9teUluZm8nKVxyXG4gICAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxDYXJkTWVtYmVyc2hpcEljb24vPlxyXG4gICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgPHNlY3Rpb24+e2xzKCfmiJHnmoTovr7kurror4EnKX08L3NlY3Rpb24+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgICAgIDxhc2lkZT5cclxuICAgICAgICAgIDxBcnJvd0ZvcndhcmRJb3NJY29uLz5cclxuICAgICAgICA8L2FzaWRlPlxyXG4gICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goJy9tZS9teUNyZWRpdENhcmQnKVxyXG4gICAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxDYXJkR2lmdGNhcmRJY29uLz5cclxuICAgICAgICA8bWFpbj5cclxuICAgICAgICAgIDxzZWN0aW9uPntscygn5oiR55qE5L+h55So5Y2hJyl9PC9zZWN0aW9uPlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICAgICA8YXNpZGU+XHJcbiAgICAgICAgICA8QXJyb3dGb3J3YXJkSW9zSWNvbi8+XHJcbiAgICAgICAgPC9hc2lkZT5cclxuICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvbWUvcGlja3VwQWRkcmVzcycpXHJcbiAgICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPFBpbkRyb3BJY29uLz5cclxuICAgICAgICA8bWFpbj5cclxuICAgICAgICAgIDxzZWN0aW9uPntscygn5oiR55qE5Y+W6LSn54K5Jyl9PC9zZWN0aW9uPlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICAgICA8YXNpZGU+XHJcbiAgICAgICAgICA8QXJyb3dGb3J3YXJkSW9zSWNvbi8+XHJcbiAgICAgICAgPC9hc2lkZT5cclxuICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvbWUvbXlBZGRyZXNzJylcclxuICAgICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8UGVyc29uUGluQ2lyY2xlSWNvbi8+XHJcbiAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICA8c2VjdGlvbj57bHMoJ+aIkeeahOWcsOWdgCcpfTwvc2VjdGlvbj5cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgICAgPGFzaWRlPlxyXG4gICAgICAgICAgPEFycm93Rm9yd2FyZElvc0ljb24vPlxyXG4gICAgICAgIDwvYXNpZGU+XHJcbiAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnL21lL2hlbHBDZW50ZXInKVxyXG4gICAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxIZWxwT3V0bGluZUljb24vPlxyXG4gICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgPHNlY3Rpb24+e2xzKCfluK7liqnkuK3lv4MnKX08L3NlY3Rpb24+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgICAgIDxhc2lkZT5cclxuICAgICAgICAgIDxBcnJvd0ZvcndhcmRJb3NJY29uLz5cclxuICAgICAgICA8L2FzaWRlPlxyXG4gICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICA8c2VjdGlvbiBzdHlsZT17e2hlaWdodDogJzIwMHB4Jywgd2lkdGg6ICcycHgnfX0vPlxyXG4gICAgPC9CU2Nyb2xsZXI+KVxyXG4gICAgfVxyXG4gICAgPEZvb3RCYXIvPlxyXG4gIDwvQm94PlxyXG59XHJcbiIsImltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7VXNlcn0gZnJvbSAnLi4vLi4vZ3JhcGhxbFR5cGVzL3R5cGVzJ1xyXG5pbXBvcnQge2ZwTWVyZ2VQcmV9IGZyb20gJy4uLy4uL3Rvb2xzL3V0aWxzJ1xyXG5pbXBvcnQge3NldFRva2VufSBmcm9tICcuLi8uLi90b29scy90b2tlbidcclxuaW1wb3J0IHtkb2N9IGZyb20gJy4uLy4uL2dyYXBocWxUeXBlcy9kb2MnXHJcbmltcG9ydCB7bW9kZWxGYWN0b3J5fSBmcm9tICcuLi8uLi9Nb2RlbEFjdGlvbi9tb2RlbFV0aWwnXHJcblxyXG5jb25zdCB0b0xvZ2luID0gYXN5bmMgKCkgPT4ge1xyXG4gIGF3YWl0IFJvdXRlci5wdXNoKCcvbG9naW4nKVxyXG59XHJcbmV4cG9ydCBjb25zdCBtZU1vZGVsID0gbW9kZWxGYWN0b3J5KCdtZU1vZGVsJywge1xyXG4gIHVzZXI6IHt9IGFzIFVzZXIsXHJcbn0sIHtcclxuICBnZXRMb2dpblVzZXI6IGFzeW5jICh2YWx1ZSwgb3B0aW9uKSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSAoYXdhaXQgb3B0aW9uLnF1ZXJ5KGRvYy5vbmVVc2VyKSk/Lm9uZVVzZXIgYXMgVXNlclxyXG4gICAgb3B0aW9uLnNldERhdGEoZnBNZXJnZVByZSh7XHJcbiAgICAgIHVzZXI6IHJlcyxcclxuICAgIH0pKVxyXG4gIH0sXHJcbiAgbG9nb3V0OiBhc3luYyAodmFsdWUsIG9wdGlvbikgPT4ge1xyXG4gICAgc2V0VG9rZW4oJycpXHJcbiAgICBzZXRUb2tlbignJywgJ3JlZnJlc2h0b2tlbicpXHJcbiAgICBhd2FpdCB0b0xvZ2luKClcclxuICB9LFxyXG4gIHRvTG9naW46IHZhbHVlID0+IHtcclxuICAgIHRvTG9naW4oKVxyXG4gIH1cclxufSlcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9yZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0FjY291bnRCb3hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93Rm9yd2FyZElvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2FyZEdpZnRjYXJkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9DYXJkTWVtYmVyc2hpcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSGVscE91dGxpbmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0hpc3RvcnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL01vbmV0aXphdGlvbk9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9QYXltZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9QZW9wbGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1BlcnNvblBpbkNpcmNsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUGluRHJvcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUmVkZWVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9TdG9yZWZyb250XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1ib29zdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiZXR0ZXItc2Nyb2xsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNyb3NzLWZldGNoL3BvbHlmaWxsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRhdGUtZm5zL2Zvcm1hdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoL3NldFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2NvbmZpZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=