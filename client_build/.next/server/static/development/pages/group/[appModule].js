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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/group/[appModule].tsx":
/*!*************************************!*\
  !*** ./pages/group/[appModule].tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_view_home_appModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/view/home/appModule */ "./utils/view/home/appModule.tsx");

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_view_home_appModule__WEBPACK_IMPORTED_MODULE_0__["HomeAppModule"])(_utils_view_home_appModule__WEBPACK_IMPORTED_MODULE_0__["HomeType"].group)); // export const getStaticPaths = () => {
//   return {
//     paths: [AppModuleTypeEnum.categorySelection, AppModuleTypeEnum.lineRanking, AppModuleTypeEnum.topRanking].map(v => ({
//       params: {
//         appModule: v,
//       },
//     })),
//     fallback: true,
//   }
// }
// export const getStaticProps = init

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

/***/ "./utils/components/HeaderSearch/HeaderSearch.tsx":
/*!********************************************************!*\
  !*** ./utils/components/HeaderSearch/HeaderSearch.tsx ***!
  \********************************************************/
/*! exports provided: borderedInputBaseStyles, useBorderedInputBaseStyles, BorderedInputBase, HeaderSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderedInputBaseStyles", function() { return borderedInputBaseStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useBorderedInputBaseStyles", function() { return useBorderedInputBaseStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BorderedInputBase", function() { return BorderedInputBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderSearch", function() { return HeaderSearch; });
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/colors */ "@material-ui/core/colors");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles/makeStyles */ "@material-ui/core/styles/makeStyles");
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons */ "@material-ui/icons");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _style_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../style/common */ "./utils/style/common.ts");
/* harmony import */ var _tools_dealKey__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../tools/dealKey */ "./utils/tools/dealKey.ts");
/* harmony import */ var _ShoppingCartIconButton_ShoppingCartIconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ShoppingCartIconButton/ShoppingCartIconButton */ "./utils/components/ShoppingCartIconButton/ShoppingCartIconButton.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _view_home_appModule__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../view/home/appModule */ "./utils/view/home/appModule.tsx");
var _jsxFileName = "D:\\code\\zw\\zw_client_web\\utils\\components\\HeaderSearch\\HeaderSearch.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;











const borderedInputBaseStyles = ({
  palette
}) => ({
  root: {
    width: '100%',
    borderRadius: '14px',
    border: '2px solid',
    borderColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_0__["blueGrey"][200],
    '&:hover:not($disabled)': {
      borderColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_0__["blueGrey"][500]
    },
    '& > svg': {
      color: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_0__["blueGrey"][300]
    }
  },
  adornedStart: {
    paddingLeft: '0.5rem'
  },
  adornedEnd: {
    paddingRight: '0.5rem'
  },
  focused: {
    borderColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_0__["blue"][700],
    '&:hover:not($disabled)': {
      borderColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_0__["blue"][700]
    }
  },
  error: {
    borderColor: palette.error.main,
    '&:hover:not($disabled)': {
      borderColor: palette.error.main
    }
  },
  input: {
    padding: '0.625rem 0.5rem'
  },
  disabled: {
    borderColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_0__["blueGrey"][300],
    backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_0__["blueGrey"][100]
  }
});
const useBorderedInputBaseStyles = _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_1___default()(borderedInputBaseStyles, {
  name: 'BorderedInputBase'
});
const BorderedInputBase = () => {
  const styles = useBorderedInputBaseStyles();
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["InputBase"], {
    classes: styles,
    placeholder: '',
    startAdornment: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__["Search"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 23
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 10
    }
  });
};
const Box = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "HeaderSearch__Box",
  componentId: "gyrwuh-0"
})(["height:45px;box-shadow:", ";display:grid;grid-template-columns:96px 1fr 96px;align-items:center;"], _style_common__WEBPACK_IMPORTED_MODULE_6__["mpStyle"].shadow['1']);
const Logo = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "HeaderSearch__Logo",
  componentId: "gyrwuh-1"
})(["> img{display:none;width:20px;height:35px;}"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "HeaderSearch__Title",
  componentId: "gyrwuh-2"
})(["justify-self:center;"]);
const Action = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "HeaderSearch__Action",
  componentId: "gyrwuh-3"
})(["display:flex;"]);
const HeaderSearch = ({
  homeType
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"])();
  return __jsx(Box, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 10
    }
  }, __jsx(Logo, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: '/img/home/logo.png',
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }
  })), __jsx(Title, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 5
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_7__["ls"])(homeType === _view_home_appModule__WEBPACK_IMPORTED_MODULE_10__["HomeType"].group ? '拼团' : '逛店')), __jsx(Action, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
    onClick: () => {
      router.push('/searchPage');
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }
  }, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__["Search"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  })), __jsx(_ShoppingCartIconButton_ShoppingCartIconButton__WEBPACK_IMPORTED_MODULE_8__["ShoppingCartIconButton"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }
  })));
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

/***/ "./utils/components/Loading/Loading.tsx":
/*!**********************************************!*\
  !*** ./utils/components/Loading/Loading.tsx ***!
  \**********************************************/
/*! exports provided: Loading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loading", function() { return Loading; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\code\\zw\\zw_client_web\\utils\\components\\Loading\\Loading.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Loading = () => {
  return __jsx("div", {
    style: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["CircularProgress"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }));
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

/***/ "./utils/view/home/appModule.tsx":
/*!***************************************!*\
  !*** ./utils/view/home/appModule.tsx ***!
  \***************************************/
/*! exports provided: HomeType, homeCarouselModel, HomeAppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeType", function() { return HomeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homeCarouselModel", function() { return homeCarouselModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeAppModule", function() { return HomeAppModule; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ss_common_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ss_common/enum */ "./utils/ss_common/enum.ts");
/* harmony import */ var _ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ModelAction/modelUtil */ "./utils/ModelAction/modelUtil.ts");
/* harmony import */ var _components_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Tabs/Tabs */ "./utils/view/home/components/Tabs/Tabs.tsx");
/* harmony import */ var _components_Swipe_Swipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Swipe/Swipe */ "./utils/components/Swipe/Swipe.tsx");
/* harmony import */ var _components_HeaderSearch_HeaderSearch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/HeaderSearch/HeaderSearch */ "./utils/components/HeaderSearch/HeaderSearch.tsx");
/* harmony import */ var _components_FootBar_FootBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/FootBar/FootBar */ "./utils/components/FootBar/FootBar.tsx");
/* harmony import */ var _components_BScroll_BScroller__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/BScroll/BScroller */ "./utils/components/BScroll/BScroller.tsx");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/colors */ "@material-ui/core/colors");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ModelAction/useStore */ "./utils/ModelAction/useStore.ts");
/* harmony import */ var _graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../graphqlTypes/doc */ "./utils/graphqlTypes/doc/index.ts");
/* harmony import */ var _tools_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../tools/utils */ "./utils/tools/utils.ts");
var _jsxFileName = "D:\\code\\zw\\zw_client_web\\utils\\view\\home\\appModule.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }














const HomeType = {
  home: 'home',
  group: 'group'
};
const homeCarouselModel = Object(_ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_4__["modelFactory"])('homeCarouselModel', {
  homeCarouselImgs: []
}, {
  getHomeCarousel: async (value, option) => {
    const res2 = await option.query(_graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_12__["getDataConfig"], {
      data: {
        type: _ss_common_enum__WEBPACK_IMPORTED_MODULE_3__["DictTypeEnum"].HomeCarousel
      }
    }, {});

    const _res2$getDataConfig = res2 === null || res2 === void 0 ? void 0 : res2.getDataConfig,
          {
      __typename
    } = _res2$getDataConfig,
          rest = _objectWithoutProperties(_res2$getDataConfig, ["__typename"]);

    const homeCarouselDataComfig = await option.query(_graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_12__["homeCarouselImgs"], {
      data: _objectSpread({}, rest)
    }, {});
    option.setData(Object(_tools_utils__WEBPACK_IMPORTED_MODULE_13__["fpMergePre"])({
      homeCarouselImgs: homeCarouselDataComfig.homeCarouselImgs
    }));
  }
});
const HomeAppModule = type => function ({
  homeCarouselImgs,
  homeCategorySelection_listData,
  appModuleConfig
}) {
  var _stateHomeCarouselMod, _stateHomeCarouselMod2;

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (router.query.appModule && ![_ss_common_enum__WEBPACK_IMPORTED_MODULE_3__["AppModuleTypeEnum"].limitTime, _ss_common_enum__WEBPACK_IMPORTED_MODULE_3__["AppModuleTypeEnum"].mayLike, _ss_common_enum__WEBPACK_IMPORTED_MODULE_3__["AppModuleTypeEnum"].salesRank, _ss_common_enum__WEBPACK_IMPORTED_MODULE_3__["AppModuleTypeEnum"].themeSelection, _ss_common_enum__WEBPACK_IMPORTED_MODULE_3__["AppModuleTypeEnum"].categorySelection, _ss_common_enum__WEBPACK_IMPORTED_MODULE_3__["AppModuleTypeEnum"].lineRanking, _ss_common_enum__WEBPACK_IMPORTED_MODULE_3__["AppModuleTypeEnum"].topRanking].includes(router.query.appModule)) {
      router.replace('/home/[appModule]', '/home/categorySelection', {});
    }
  });
  const {
    actions: actionsHomeCarouselModel,
    state: stateHomeCarouselModel
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_11__["useStoreModel"])(homeCarouselModel);
  const {
    actions: actionsHomeTabs
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_11__["useStoreModel"])(_components_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_5__["homeTabsModel"]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    actionsHomeCarouselModel.getHomeCarousel();
    actionsHomeTabs.getData();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    actionsHomeTabs.setHomeType(type !== null && type !== void 0 ? type : HomeType.home);
  }, [type]);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, __jsx(_components_HeaderSearch_HeaderSearch__WEBPACK_IMPORTED_MODULE_7__["HeaderSearch"], {
    homeType: type !== null && type !== void 0 ? type : HomeType.home,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }), __jsx(_components_BScroll_BScroller__WEBPACK_IMPORTED_MODULE_9__["BScroller"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1873098083", [_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__["grey"][600]]]]) + " " + 'common_box',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1873098083", [_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__["grey"][600]]]]) + " " + 'cusCarousel',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, __jsx(_components_Swipe_Swipe__WEBPACK_IMPORTED_MODULE_6__["default"], {
    height: '160px',
    dataList: (_stateHomeCarouselMod = stateHomeCarouselModel.homeCarouselImgs) === null || _stateHomeCarouselMod === void 0 ? void 0 : (_stateHomeCarouselMod2 = _stateHomeCarouselMod.value) === null || _stateHomeCarouselMod2 === void 0 ? void 0 : _stateHomeCarouselMod2.list,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1873098083", [_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__["grey"][600]]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }, __jsx(_components_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_5__["HomeTabs"], {
    homeType: type !== null && type !== void 0 ? type : HomeType.home,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 15
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1873098083",
    dynamic: [_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__["grey"][600]],
    __self: this
  }, `.common_box.__jsx-style-dynamic-selector{padding-top:3.125vw;padding-bottom:37.5vw;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;-webkit-flex-shrink:1;-ms-flex-negative:1;flex-shrink:1;overflow:auto;}.common_box.__jsx-style-dynamic-selector>*.__jsx-style-dynamic-selector{margin-left:3.125vw;margin-right:3.125vw;}.tip.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;color:${_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__["grey"][600]};padding:2.5vw 0;}.tip.__jsx-style-dynamic-selector>span.__jsx-style-dynamic-selector{margin:0 3.125vw;}.cusCarousel.__jsx-style-dynamic-selector{border-radius:3.125vw;overflow:hidden;}.footer.__jsx-style-dynamic-selector{height:62.5vw;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxjb2RlXFx6d1xcendfY2xpZW50X3dlYlxcdXRpbHNcXHZpZXdcXGhvbWVcXGFwcE1vZHVsZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEZzQixBQUV1QixBQVFFLEFBSVQsQUFJTSxBQUdHLEFBSVIsY0FBQyxHQVBLLEdBZkUsQUFRQyxFQVdQLGdCQUFDLEdBWE8sQ0FQWCxnQ0FXc0IsbUNBQ25CLE9BWE0sU0FXTCxxRUFWTCx1RUFDRSx3REFDQSxjQUFDIiwiZmlsZSI6IkQ6XFxjb2RlXFx6d1xcendfY2xpZW50X3dlYlxcdXRpbHNcXHZpZXdcXGhvbWVcXGFwcE1vZHVsZS50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7QXBwTW9kdWxlVHlwZUVudW0sIERpY3RUeXBlRW51bX0gZnJvbSAnLi4vLi4vc3NfY29tbW9uL2VudW0nXHJcbmltcG9ydCB7Q2F0ZWdvcnksIERhdGFDb25maWcsIERhdGFDb25maWdJdGVtSW5wdXR9IGZyb20gJy4uLy4uL2dyYXBocWxUeXBlcy90eXBlcydcclxuaW1wb3J0IHttb2RlbEZhY3Rvcnl9IGZyb20gJy4uLy4uL01vZGVsQWN0aW9uL21vZGVsVXRpbCdcclxuaW1wb3J0IHtIb21lVGFicywgaG9tZVRhYnNNb2RlbH0gZnJvbSAnLi9jb21wb25lbnRzL1RhYnMvVGFicydcclxuaW1wb3J0IEN1c0Nhcm91c2VsIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU3dpcGUvU3dpcGUnXHJcbmltcG9ydCB7SGVhZGVyU2VhcmNofSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0hlYWRlclNlYXJjaC9IZWFkZXJTZWFyY2gnXHJcbmltcG9ydCB7Rm9vdEJhcn0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Gb290QmFyL0Zvb3RCYXInXHJcbmltcG9ydCB7QlNjcm9sbGVyfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0JTY3JvbGwvQlNjcm9sbGVyJ1xyXG5pbXBvcnQge2dyZXl9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycydcclxuaW1wb3J0IHt1c2VTdG9yZU1vZGVsfSBmcm9tICcuLi8uLi9Nb2RlbEFjdGlvbi91c2VTdG9yZSdcclxuaW1wb3J0IHtnZXREYXRhQ29uZmlnLCBob21lQ2Fyb3VzZWxJbWdzfSBmcm9tICcuLi8uLi9ncmFwaHFsVHlwZXMvZG9jJ1xyXG5pbXBvcnQge2ZwTWVyZ2VQcmV9IGZyb20gJy4uLy4uL3Rvb2xzL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IEhvbWVUeXBlID0ge1xyXG4gIGhvbWU6ICdob21lJyxcclxuICBncm91cDogJ2dyb3VwJyxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGhvbWVDYXJvdXNlbE1vZGVsID0gbW9kZWxGYWN0b3J5KCdob21lQ2Fyb3VzZWxNb2RlbCcsIHtcclxuICBob21lQ2Fyb3VzZWxJbWdzOiBbXSBhcyBEYXRhQ29uZmlnLFxyXG59LCB7XHJcbiAgZ2V0SG9tZUNhcm91c2VsOiBhc3luYyAodmFsdWUsIG9wdGlvbikgPT4ge1xyXG4gICAgY29uc3QgcmVzMiA9IGF3YWl0IG9wdGlvbi5xdWVyeShnZXREYXRhQ29uZmlnLCB7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICB0eXBlOiBEaWN0VHlwZUVudW0uSG9tZUNhcm91c2VsLFxyXG4gICAgICB9IGFzIERhdGFDb25maWdJdGVtSW5wdXRcclxuICAgIH0sIHt9KVxyXG4gICAgY29uc3Qge19fdHlwZW5hbWUsIC4uLnJlc3R9ID0gcmVzMj8uZ2V0RGF0YUNvbmZpZ1xyXG4gICAgY29uc3QgaG9tZUNhcm91c2VsRGF0YUNvbWZpZyA9IGF3YWl0IG9wdGlvbi5xdWVyeShob21lQ2Fyb3VzZWxJbWdzLCB7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICAuLi5yZXN0LFxyXG4gICAgICB9IGFzIERhdGFDb25maWdJdGVtSW5wdXRcclxuICAgIH0sIHt9KVxyXG4gICAgb3B0aW9uLnNldERhdGEoZnBNZXJnZVByZSh7XHJcbiAgICAgIGhvbWVDYXJvdXNlbEltZ3M6IGhvbWVDYXJvdXNlbERhdGFDb21maWcuaG9tZUNhcm91c2VsSW1ncyxcclxuICAgIH0pKVxyXG4gIH0sXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgSG9tZUFwcE1vZHVsZSA9ICh0eXBlPzogc3RyaW5nKSA9PiBmdW5jdGlvbiAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvbWVDYXJvdXNlbEltZ3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9tZUNhdGVnb3J5U2VsZWN0aW9uX2xpc3REYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcE1vZHVsZUNvbmZpZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfToge1xyXG4gIGhvbWVDYXJvdXNlbEltZ3M6IERhdGFDb25maWcsXHJcbiAgYXBwTW9kdWxlQ29uZmlnOiBEYXRhQ29uZmlnLFxyXG4gIGhvbWVDYXRlZ29yeVNlbGVjdGlvbl9saXN0RGF0YTogQ2F0ZWdvcnlbXVxyXG59KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHJvdXRlci5xdWVyeS5hcHBNb2R1bGUgJiYgIShbQXBwTW9kdWxlVHlwZUVudW0ubGltaXRUaW1lLCBBcHBNb2R1bGVUeXBlRW51bS5tYXlMaWtlLCBBcHBNb2R1bGVUeXBlRW51bS5zYWxlc1JhbmssIEFwcE1vZHVsZVR5cGVFbnVtLnRoZW1lU2VsZWN0aW9uLCBBcHBNb2R1bGVUeXBlRW51bS5jYXRlZ29yeVNlbGVjdGlvbiwgQXBwTW9kdWxlVHlwZUVudW0ubGluZVJhbmtpbmcsIEFwcE1vZHVsZVR5cGVFbnVtLnRvcFJhbmtpbmddIGFzIGFueVtdKS5pbmNsdWRlcyhyb3V0ZXIucXVlcnkuYXBwTW9kdWxlKVxyXG4gICAgKSB7XHJcbiAgICAgIHJvdXRlci5yZXBsYWNlKCcvaG9tZS9bYXBwTW9kdWxlXScsICcvaG9tZS9jYXRlZ29yeVNlbGVjdGlvbicsIHt9KVxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IHthY3Rpb25zOiBhY3Rpb25zSG9tZUNhcm91c2VsTW9kZWwsIHN0YXRlOiBzdGF0ZUhvbWVDYXJvdXNlbE1vZGVsfSA9IHVzZVN0b3JlTW9kZWwoaG9tZUNhcm91c2VsTW9kZWwpXHJcbiAgY29uc3Qge2FjdGlvbnM6IGFjdGlvbnNIb21lVGFic30gPSB1c2VTdG9yZU1vZGVsKGhvbWVUYWJzTW9kZWwpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFjdGlvbnNIb21lQ2Fyb3VzZWxNb2RlbC5nZXRIb21lQ2Fyb3VzZWwoKVxyXG4gICAgYWN0aW9uc0hvbWVUYWJzLmdldERhdGEoKVxyXG4gIH0sIFtdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhY3Rpb25zSG9tZVRhYnMuc2V0SG9tZVR5cGUoKHR5cGUpID8/IEhvbWVUeXBlLmhvbWUpXHJcbiAgfSwgW3R5cGVdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxIZWFkZXJTZWFyY2ggaG9tZVR5cGU9e3R5cGUgPz8gSG9tZVR5cGUuaG9tZX0vPlxyXG4gICAgICAgIDxCU2Nyb2xsZXI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2NvbW1vbl9ib3gnfT5cclxuICAgICAgICAgICAgey8qPGhlYWRlcj4qL31cclxuICAgICAgICAgICAgey8qICA8Qm9yZGVyZWRJbnB1dEJhc2UvPiovfVxyXG4gICAgICAgICAgICB7Lyo8L2hlYWRlcj4qL31cclxuICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9eyd0aXAnfT4qL31cclxuICAgICAgICAgICAgey8qICA8YXNpZGU+54Ot5pCcOjwvYXNpZGU+Ki99XHJcbiAgICAgICAgICAgIHsvKiAge1sn6Jav5p2hJywgJ+Wwj+m+meiZviddLm1hcCh2YWx1ZSA9PiA8c3BhbiBrZXk9e2B0aXBfJHt2YWx1ZX1gfT57dmFsdWV9PC9zcGFuPil9Ki99XHJcbiAgICAgICAgICAgIHsvKjwvZGl2PiovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2N1c0Nhcm91c2VsJ30+XHJcbiAgICAgICAgICAgICAgPEN1c0Nhcm91c2VsXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD17JzE2MHB4J31cclxuICAgICAgICAgICAgICAgICAgZGF0YUxpc3Q9e3N0YXRlSG9tZUNhcm91c2VsTW9kZWwuaG9tZUNhcm91c2VsSW1ncz8udmFsdWU/Lmxpc3QgYXMgW119XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPEhvbWVUYWJzIGhvbWVUeXBlPXt0eXBlID8/IEhvbWVUeXBlLmhvbWV9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIC5jb21tb25fYm94IHtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMjBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgICAgICBmbGV4LXNocmluazogMTtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgICAgID4gKiB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudGlwIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgY29sb3I6ICR7Z3JleVs2MDBdfTtcclxuICAgICAgICAgICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICAgICAgICAgID4gc3BhbiB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jdXNDYXJvdXNlbCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZm9vdGVyIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9CU2Nyb2xsZXI+XHJcbiAgICAgICAgPEZvb3RCYXIvPlxyXG4gICAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl19 */
/*@ sourceURL=D:\\code\\zw\\zw_client_web\\utils\\view\\home\\appModule.tsx */`)), __jsx(_components_FootBar_FootBar__WEBPACK_IMPORTED_MODULE_8__["FootBar"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }));
};

/***/ }),

/***/ "./utils/view/home/components/CategorySelection/CategorySelection.tsx":
/*!****************************************************************************!*\
  !*** ./utils/view/home/components/CategorySelection/CategorySelection.tsx ***!
  \****************************************************************************/
/*! exports provided: homeCategorySelectionModel, CategorySelection, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homeCategorySelectionModel", function() { return homeCategorySelectionModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategorySelection", function() { return CategorySelection; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/colors */ "@material-ui/core/colors");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons */ "@material-ui/icons");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../ModelAction/useStore */ "./utils/ModelAction/useStore.ts");
/* harmony import */ var _tools_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../tools/utils */ "./utils/tools/utils.ts");
/* harmony import */ var _components_Loading_Loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/Loading/Loading */ "./utils/components/Loading/Loading.tsx");
/* harmony import */ var _graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../graphqlTypes/doc */ "./utils/graphqlTypes/doc/index.ts");
/* harmony import */ var _tools_img__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../tools/img */ "./utils/tools/img.ts");
/* harmony import */ var _ss_common_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../ss_common/enum */ "./utils/ss_common/enum.ts");
/* harmony import */ var _ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../ModelAction/modelUtil */ "./utils/ModelAction/modelUtil.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Tabs_Tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Tabs/Tabs */ "./utils/view/home/components/Tabs/Tabs.tsx");
var _jsxFileName = "D:\\code\\zw\\zw_client_web\\utils\\view\\home\\components\\CategorySelection\\CategorySelection.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;













const homeCategorySelectionModel = Object(_ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_11__["modelFactory"])('HomeCategorySelection', {
  listData: [],
  total: 0
}, {
  getList: async (value, option) => {
    var _res$categoryList;

    const res = await option.query(_graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_8__["categoryList"], {
      data: {
        category: {
          parentCategory: {
            id: _ss_common_enum__WEBPACK_IMPORTED_MODULE_10__["CategoryRootName"]
          }
        }
      }
    });
    option.setData(Object(_tools_utils__WEBPACK_IMPORTED_MODULE_6__["fpMergePre"])({
      listData: res === null || res === void 0 ? void 0 : (_res$categoryList = res.categoryList) === null || _res$categoryList === void 0 ? void 0 : _res$categoryList.list
    }));
  }
});
const CategorySelection = () => {
  var _homeCategorySelectio;

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_12__["useRouter"])();
  const {
    state: homeCategorySelectionState,
    actions: homeCategorySelectionActions,
    getLoad: hsGetLoad
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_5__["useStoreModel"])(homeCategorySelectionModel);
  const {
    state: homeTabsState
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_5__["useStoreModel"])(_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_13__["homeTabsModel"]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    homeCategorySelectionActions.getList();
  }, []);
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863441005", [_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_2__["grey"][700]]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, !!hsGetLoad(_graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_8__["categoryList"]) && __jsx(_components_Loading_Loading__WEBPACK_IMPORTED_MODULE_7__["Loading"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 39
    }
  }), homeCategorySelectionState === null || homeCategorySelectionState === void 0 ? void 0 : (_homeCategorySelectio = homeCategorySelectionState.listData) === null || _homeCategorySelectio === void 0 ? void 0 : _homeCategorySelectio.map(value => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ButtonBase"], {
    className: 'main',
    onClick: () => {
      router.push(`/category/[id]${Object(_tools_utils__WEBPACK_IMPORTED_MODULE_6__["dealUrlQuery"])({
        homeType: homeTabsState.homeType
      })}`, `/category/${value.id}${Object(_tools_utils__WEBPACK_IMPORTED_MODULE_6__["dealUrlQuery"])({
        homeType: homeTabsState.homeType
      })}`);
    },
    key: `homeCategorySelectionState_${value.id}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: Object(_tools_img__WEBPACK_IMPORTED_MODULE_9__["dealImgUrl"])(value.imgUrl),
    alt: "",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863441005", [_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_2__["grey"][700]]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 15
    }
  }), __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2863441005", [_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_2__["grey"][700]]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 15
    }
  }, value.name, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__["KeyboardArrowRight"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2863441005",
    dynamic: [_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_2__["grey"][700]],
    __self: undefined
  }, `div.__jsx-style-dynamic-selector>.main{width:100%;height:18.75vw;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;border-radius:2.5vw;overflow:hidden;margin-bottom:3.125vw;background:${_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_2__["grey"][700]};}div.__jsx-style-dynamic-selector>.main>img.__jsx-style-dynamic-selector{height:100%;width:70%;}div.__jsx-style-dynamic-selector>.main>span.__jsx-style-dynamic-selector{-webkit-flex:1 1;-ms-flex:1 1;flex:1 1;color:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxjb2RlXFx6d1xcendfY2xpZW50X3dlYlxcdXRpbHNcXHZpZXdcXGhvbWVcXGNvbXBvbmVudHNcXENhdGVnb3J5U2VsZWN0aW9uXFxDYXRlZ29yeVNlbGVjdGlvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUVvQixBQUVjLEFBUUcsQUFHSCxXQVZJLENBUUgsVUFBQyxJQVBBLGFBVUEsV0FDRSxrREFWSyxvQkFDSixJQVVLLFlBVEMsc0JBQ2tCLHdDQUFDLG1CQVNoQixtR0FBQyIsImZpbGUiOiJEOlxcY29kZVxcendcXHp3X2NsaWVudF93ZWJcXHV0aWxzXFx2aWV3XFxob21lXFxjb21wb25lbnRzXFxDYXRlZ29yeVNlbGVjdGlvblxcQ2F0ZWdvcnlTZWxlY3Rpb24udHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtncmV5fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMnXHJcbmltcG9ydCB7S2V5Ym9hcmRBcnJvd1JpZ2h0fSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnXHJcbmltcG9ydCB7QnV0dG9uQmFzZX0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCB7dXNlU3RvcmVNb2RlbH0gZnJvbSAnLi4vLi4vLi4vLi4vTW9kZWxBY3Rpb24vdXNlU3RvcmUnXHJcbmltcG9ydCB7Q2F0ZWdvcnksIENhdGVnb3J5TGlzdElucHV0fSBmcm9tICcuLi8uLi8uLi8uLi9ncmFwaHFsVHlwZXMvdHlwZXMnXHJcbmltcG9ydCB7ZGVhbFVybFF1ZXJ5LCBmcE1lcmdlUHJlfSBmcm9tICcuLi8uLi8uLi8uLi90b29scy91dGlscydcclxuaW1wb3J0IHtMb2FkaW5nfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL0xvYWRpbmcvTG9hZGluZydcclxuaW1wb3J0IHtjYXRlZ29yeUxpc3R9IGZyb20gJy4uLy4uLy4uLy4uL2dyYXBocWxUeXBlcy9kb2MnXHJcbmltcG9ydCB7ZGVhbEltZ1VybH0gZnJvbSAnLi4vLi4vLi4vLi4vdG9vbHMvaW1nJ1xyXG5pbXBvcnQge0NhdGVnb3J5Um9vdE5hbWV9IGZyb20gJy4uLy4uLy4uLy4uL3NzX2NvbW1vbi9lbnVtJ1xyXG5pbXBvcnQge21vZGVsRmFjdG9yeX0gZnJvbSAnLi4vLi4vLi4vLi4vTW9kZWxBY3Rpb24vbW9kZWxVdGlsJ1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7aG9tZVRhYnNNb2RlbH0gZnJvbSAnLi4vVGFicy9UYWJzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGhvbWVDYXRlZ29yeVNlbGVjdGlvbk1vZGVsID0gbW9kZWxGYWN0b3J5KCdIb21lQ2F0ZWdvcnlTZWxlY3Rpb24nLCB7XHJcbiAgbGlzdERhdGE6IFtdIGFzIENhdGVnb3J5W10sXHJcbiAgdG90YWw6IDAsXHJcbn0sIHtcclxuICBnZXRMaXN0OiBhc3luYyAodmFsdWUsIG9wdGlvbikgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgb3B0aW9uLnF1ZXJ5KGNhdGVnb3J5TGlzdCwge1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgY2F0ZWdvcnk6IHtcclxuICAgICAgICAgIHBhcmVudENhdGVnb3J5OiB7XHJcbiAgICAgICAgICAgIGlkOiBDYXRlZ29yeVJvb3ROYW1lLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9IGFzIENhdGVnb3J5TGlzdElucHV0XHJcbiAgICB9KVxyXG4gICAgb3B0aW9uLnNldERhdGEoZnBNZXJnZVByZSh7XHJcbiAgICAgIGxpc3REYXRhOiByZXM/LmNhdGVnb3J5TGlzdD8ubGlzdCxcclxuICAgIH0pKVxyXG4gIH0sXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgQ2F0ZWdvcnlTZWxlY3Rpb24gPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCB7c3RhdGU6IGhvbWVDYXRlZ29yeVNlbGVjdGlvblN0YXRlLCBhY3Rpb25zOiBob21lQ2F0ZWdvcnlTZWxlY3Rpb25BY3Rpb25zLCBnZXRMb2FkOiBoc0dldExvYWR9ID0gdXNlU3RvcmVNb2RlbChob21lQ2F0ZWdvcnlTZWxlY3Rpb25Nb2RlbClcclxuICBjb25zdCB7c3RhdGU6IGhvbWVUYWJzU3RhdGV9ID0gdXNlU3RvcmVNb2RlbChob21lVGFic01vZGVsKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaG9tZUNhdGVnb3J5U2VsZWN0aW9uQWN0aW9ucy5nZXRMaXN0KClcclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICB7ISFoc0dldExvYWQoY2F0ZWdvcnlMaXN0KSAmJiA8TG9hZGluZy8+fVxyXG4gICAgICAgIHtob21lQ2F0ZWdvcnlTZWxlY3Rpb25TdGF0ZT8ubGlzdERhdGE/Lm1hcCh2YWx1ZSA9PiAoXHJcbiAgICAgICAgICAgIDxCdXR0b25CYXNlXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9eydtYWluJ31cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goYC9jYXRlZ29yeS9baWRdJHtkZWFsVXJsUXVlcnkoe2hvbWVUeXBlOiBob21lVGFic1N0YXRlLmhvbWVUeXBlfSl9YCwgYC9jYXRlZ29yeS8ke3ZhbHVlLmlkfSR7ZGVhbFVybFF1ZXJ5KHtob21lVHlwZTogaG9tZVRhYnNTdGF0ZS5ob21lVHlwZX0pfWApXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAga2V5PXtgaG9tZUNhdGVnb3J5U2VsZWN0aW9uU3RhdGVfJHt2YWx1ZS5pZH1gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9e2RlYWxJbWdVcmwodmFsdWUuaW1nVXJsKX1cclxuICAgICAgICAgICAgICAgICAgYWx0PScnXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIHt2YWx1ZS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgPEtleWJvYXJkQXJyb3dSaWdodC8+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L0J1dHRvbkJhc2U+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgZGl2ID4gOmdsb2JhbCgubWFpbikge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7Z3JleVs3MDBdfTtcclxuICAgICAgICAgICAgPiBpbWcge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID4gc3BhbiB7XHJcbiAgICAgICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcnlTZWxlY3Rpb25cclxuIl19 */
/*@ sourceURL=D:\\code\\zw\\zw_client_web\\utils\\view\\home\\components\\CategorySelection\\CategorySelection.tsx */`));
};
/* harmony default export */ __webpack_exports__["default"] = (CategorySelection);

/***/ }),

/***/ "./utils/view/home/components/LineRanking/LineRanking.tsx":
/*!****************************************************************!*\
  !*** ./utils/view/home/components/LineRanking/LineRanking.tsx ***!
  \****************************************************************/
/*! exports provided: LineRankingModel, LineRanking */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineRankingModel", function() { return LineRankingModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineRanking", function() { return LineRanking; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../ModelAction/modelUtil */ "./utils/ModelAction/modelUtil.ts");
/* harmony import */ var _graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../graphqlTypes/doc */ "./utils/graphqlTypes/doc/index.ts");
/* harmony import */ var _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../ModelAction/useStore */ "./utils/ModelAction/useStore.ts");
/* harmony import */ var _tools_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../tools/utils */ "./utils/tools/utils.ts");
/* harmony import */ var _components_ProductItem_ProductItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/ProductItem/ProductItem */ "./utils/components/ProductItem/ProductItem.tsx");
/* harmony import */ var _components_Box_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/Box/Box */ "./utils/components/Box/Box.tsx");
var _jsxFileName = "D:\\code\\zw\\zw_client_web\\utils\\view\\home\\components\\LineRanking\\LineRanking.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const LineRankingModel = Object(_ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_1__["modelFactory"])('LineRanking', {
  list: []
}, {
  getList: async (value, option) => {
    var _res$groupQueueList;

    const res = await option.query(_graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_2__["doc"].groupQueueList, {});
    option.setData(Object(_tools_utils__WEBPACK_IMPORTED_MODULE_4__["fpMergePre"])({
      list: (_res$groupQueueList = res === null || res === void 0 ? void 0 : res.groupQueueList) !== null && _res$groupQueueList !== void 0 ? _res$groupQueueList : []
    }));
  }
});
const LineRanking = () => {
  const {
    actions: actionsLineRankingModel,
    state: stateLineRankingModel
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_3__["useStoreModel"])(LineRankingModel);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    actionsLineRankingModel.getList();
  }, []);
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 10
    }
  }, stateLineRankingModel.list.filter(v => {
    var _v$product;

    return Object(_tools_utils__WEBPACK_IMPORTED_MODULE_4__["dealMaybeNumber"])(v.sumFillAmount) < Object(_tools_utils__WEBPACK_IMPORTED_MODULE_4__["dealMaybeNumber"])((_v$product = v.product) === null || _v$product === void 0 ? void 0 : _v$product.groupPrecision);
  }).sort((a, b) => Object(_tools_utils__WEBPACK_IMPORTED_MODULE_4__["dealMaybeNumber"])(b.sumFillAmount) - Object(_tools_utils__WEBPACK_IMPORTED_MODULE_4__["dealMaybeNumber"])(a.sumFillAmount)).map(value => {
    var _value$product;

    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      key: `ProductItem_${value.id}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 103
      }
    }, __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_6__["Space"], {
      h: 16,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 11
      }
    }), __jsx(_components_ProductItem_ProductItem__WEBPACK_IMPORTED_MODULE_5__["GroupProductItem"], {
      product: (_value$product = value.product) !== null && _value$product !== void 0 ? _value$product : {},
      groupQueue: value,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }
    }));
  }));
};

/***/ }),

/***/ "./utils/view/home/components/PromotionFlashSale/PromotionFlashSale.tsx":
/*!******************************************************************************!*\
  !*** ./utils/view/home/components/PromotionFlashSale/PromotionFlashSale.tsx ***!
  \******************************************************************************/
/*! exports provided: PromotionFlashSale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotionFlashSale", function() { return PromotionFlashSale; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../ModelAction/modelUtil */ "./utils/ModelAction/modelUtil.ts");
/* harmony import */ var _graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../graphqlTypes/doc */ "./utils/graphqlTypes/doc/index.ts");
/* harmony import */ var _tools_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../tools/utils */ "./utils/tools/utils.ts");
/* harmony import */ var _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ModelAction/useStore */ "./utils/ModelAction/useStore.ts");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tools_dealKey__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../tools/dealKey */ "./utils/tools/dealKey.ts");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/colors */ "@material-ui/core/colors");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_ProductItem_ProductItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/ProductItem/ProductItem */ "./utils/components/ProductItem/ProductItem.tsx");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "D:\\code\\zw\\zw_client_web\\utils\\view\\home\\components\\PromotionFlashSale\\PromotionFlashSale.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const getNowSale = list => {
  var _list$find;

  const now = new Date().getTime();
  const saleOne = (_list$find = list === null || list === void 0 ? void 0 : list.find(v => {
    return now > new Date(v.startTime).getTime() && now < new Date(v.endTime).getTime();
  })) !== null && _list$find !== void 0 ? _list$find : {};

  if (saleOne === null || saleOne === void 0 ? void 0 : saleOne.id) {
    return {
      data: saleOne,
      isNext: false
    };
  } else {
    var _list$filter$sort$, _list$filter, _list$filter$sort;

    return {
      data: (_list$filter$sort$ = list === null || list === void 0 ? void 0 : (_list$filter = list.filter(v => new Date(v.startTime).getTime() > now)) === null || _list$filter === void 0 ? void 0 : (_list$filter$sort = _list$filter.sort((a, b) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime())) === null || _list$filter$sort === void 0 ? void 0 : _list$filter$sort[0]) !== null && _list$filter$sort$ !== void 0 ? _list$filter$sort$ : {},
      isNext: true
    };
  }
};

const promotionFlashSaleModel = Object(_ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_1__["modelFactory"])('promotionFlashSaleModel', {
  limitTimeData: [],
  nowLimitData: {},
  productList: [],
  isNext: false
}, {
  getData: async (value, option) => {
    var _res$limitTimeData, _res$limitTimeData$va, _nowSaleData$data$sel, _nowSaleData$data, _res$limitTimeData2, _res$limitTimeData2$v, _productRes$productLi, _productRes$productLi2;

    const res = await option.query(_graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_2__["doc"].limitTimeData);
    const nowSaleData = getNowSale(res === null || res === void 0 ? void 0 : (_res$limitTimeData = res.limitTimeData) === null || _res$limitTimeData === void 0 ? void 0 : (_res$limitTimeData$va = _res$limitTimeData.value) === null || _res$limitTimeData$va === void 0 ? void 0 : _res$limitTimeData$va.list);
    console.log(nowSaleData);
    const productRes = await option.query(_graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_2__["doc"].productListByIds, {
      ids: (_nowSaleData$data$sel = nowSaleData === null || nowSaleData === void 0 ? void 0 : (_nowSaleData$data = nowSaleData.data) === null || _nowSaleData$data === void 0 ? void 0 : _nowSaleData$data.selectProductList) !== null && _nowSaleData$data$sel !== void 0 ? _nowSaleData$data$sel : []
    });
    option.setData(Object(_tools_utils__WEBPACK_IMPORTED_MODULE_3__["fpMergePre"])({
      nowLimitData: nowSaleData.data,
      isNext: nowSaleData.isNext,
      limitTimeData: (res === null || res === void 0 ? void 0 : (_res$limitTimeData2 = res.limitTimeData) === null || _res$limitTimeData2 === void 0 ? void 0 : (_res$limitTimeData2$v = _res$limitTimeData2.value) === null || _res$limitTimeData2$v === void 0 ? void 0 : _res$limitTimeData2$v.list) || [],
      productList: (_productRes$productLi = productRes === null || productRes === void 0 ? void 0 : (_productRes$productLi2 = productRes.productListByIds) === null || _productRes$productLi2 === void 0 ? void 0 : _productRes$productLi2.list) !== null && _productRes$productLi !== void 0 ? _productRes$productLi : []
    }));
  }
});
const Tip = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "PromotionFlashSale__Tip",
  componentId: "sc-58l9h6-0"
})(["display:flex;align-items:center;margin-bottom:8px;> main{font-size:16px;font-weight:bold;margin-right:8px;}> span{padding:4px 2px;margin:0 2px;background:", ";color:white;border-radius:6px;}"], _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_7__["grey"][800]);
const PromotionFlashSale = () => {
  var _statePromotionFlashS, _statePromotionFlashS2, _statePromotionFlashS3, _statePromotionFlashS4, _statePromotionFlashS5;

  const {
    state: statePromotionFlashSale,
    actions: actionsPromotionFlashSale
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_4__["useStoreModel"])(promotionFlashSaleModel);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    actionsPromotionFlashSale.getData();
  }, []);
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 10
    }
  }, ((_statePromotionFlashS = statePromotionFlashSale.nowLimitData) === null || _statePromotionFlashS === void 0 ? void 0 : _statePromotionFlashS.id) && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Tip, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, __jsx("main", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, statePromotionFlashSale.isNext && Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__["ls"])('距离下次抢购') || Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__["ls"])('限时选购')), __jsx("section", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__["ls"])('剩余')), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }, `${Object(date_fns__WEBPACK_IMPORTED_MODULE_9__["differenceInHours"])(new Date((_statePromotionFlashS2 = (_statePromotionFlashS3 = statePromotionFlashSale.nowLimitData) === null || _statePromotionFlashS3 === void 0 ? void 0 : _statePromotionFlashS3.endTime) !== null && _statePromotionFlashS2 !== void 0 ? _statePromotionFlashS2 : ''), new Date())}`), __jsx("section", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__["ls"])('小时')), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, `${Object(date_fns__WEBPACK_IMPORTED_MODULE_9__["differenceInMinutes"])(new Date((_statePromotionFlashS4 = (_statePromotionFlashS5 = statePromotionFlashSale.nowLimitData) === null || _statePromotionFlashS5 === void 0 ? void 0 : _statePromotionFlashS5.endTime) !== null && _statePromotionFlashS4 !== void 0 ? _statePromotionFlashS4 : ''), new Date()) % 60}`), __jsx("section", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__["ls"])('分钟'))), statePromotionFlashSale.productList.map(product => __jsx(_components_ProductItem_ProductItem__WEBPACK_IMPORTED_MODULE_8__["ProductItemOneRow"], {
    key: `ProductItemOneRow_${product.id}`,
    product: product,
    hideAction: statePromotionFlashSale.isNext,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 59
    }
  }))) || __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 8
    }
  }, "\u6682\u65E0\u9650\u65F6\u62A2\u8D2D\uFF0C\u656C\u8BF7\u671F\u5F85"));
};

/***/ }),

/***/ "./utils/view/home/components/SalesRank/SalesRank.tsx":
/*!************************************************************!*\
  !*** ./utils/view/home/components/SalesRank/SalesRank.tsx ***!
  \************************************************************/
/*! exports provided: SalesRank */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesRank", function() { return SalesRank; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../ModelAction/modelUtil */ "./utils/ModelAction/modelUtil.ts");
/* harmony import */ var _graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../graphqlTypes/doc */ "./utils/graphqlTypes/doc/index.ts");
/* harmony import */ var _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../ModelAction/useStore */ "./utils/ModelAction/useStore.ts");
/* harmony import */ var _components_ProductItem_ProductItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/ProductItem/ProductItem */ "./utils/components/ProductItem/ProductItem.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tools_dealKey__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../tools/dealKey */ "./utils/tools/dealKey.ts");
/* harmony import */ var _tools_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../tools/utils */ "./utils/tools/utils.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ss_common_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../ss_common/enum */ "./utils/ss_common/enum.ts");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Box_Box__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../components/Box/Box */ "./utils/components/Box/Box.tsx");
/* harmony import */ var _Tabs_Tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Tabs/Tabs */ "./utils/view/home/components/Tabs/Tabs.tsx");
/* harmony import */ var _appModule__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../appModule */ "./utils/view/home/appModule.tsx");
var _jsxFileName = "D:\\code\\zw\\zw_client_web\\utils\\view\\home\\components\\SalesRank\\SalesRank.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















const SalesRankModel = Object(_ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_1__["modelFactory"])('SalesRank', {
  listData: []
}, {
  getList: async (value, option) => {
    var _res$productListOrder, _res$productListOrder2;

    const res = await option.query(_graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_2__["doc"].productListOrderByOrder, _objectSpread({
      orderByType: ''
    }, value !== null && value !== void 0 ? value : {}));
    option.setData(Object(_tools_utils__WEBPACK_IMPORTED_MODULE_7__["fpMergePre"])({
      listData: (_res$productListOrder = res === null || res === void 0 ? void 0 : (_res$productListOrder2 = res.productListOrderByOrder) === null || _res$productListOrder2 === void 0 ? void 0 : _res$productListOrder2.list) !== null && _res$productListOrder !== void 0 ? _res$productListOrder : []
    }));
  },
  tabChange: ([value, homeType], option) => {
    const query = Object(_tools_utils__WEBPACK_IMPORTED_MODULE_7__["dealUrlQuery"])({
      salesRankType: value
    });
    next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push(`/${homeType}/[appModule]${query}`, `/${homeType}/salesRank${query}`);
  }
});
const Box = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "SalesRank__Box",
  componentId: "hmt8b7-0"
})([""]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "SalesRank__Title",
  componentId: "hmt8b7-1"
})(["font-size:18px;font-weight:bold;"]);
const SaleRankTypeEnumLabel = {
  [_ss_common_enum__WEBPACK_IMPORTED_MODULE_9__["SaleRankTypeEnum"].OneDay]: '本日',
  [_ss_common_enum__WEBPACK_IMPORTED_MODULE_9__["SaleRankTypeEnum"].OneWeek]: '本周',
  [_ss_common_enum__WEBPACK_IMPORTED_MODULE_9__["SaleRankTypeEnum"].OneMonth]: '本月'
};
const SalesRank = () => {
  var _router$query$salesRa;

  const {
    state: homeTabsState
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_3__["useStoreModel"])(_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_12__["homeTabsModel"]);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    var _router$query;

    if (!router.query.salesRankType || ![_ss_common_enum__WEBPACK_IMPORTED_MODULE_9__["SaleRankTypeEnum"].OneMonth, _ss_common_enum__WEBPACK_IMPORTED_MODULE_9__["SaleRankTypeEnum"].OneWeek, _ss_common_enum__WEBPACK_IMPORTED_MODULE_9__["SaleRankTypeEnum"].OneDay].includes(`${router === null || router === void 0 ? void 0 : (_router$query = router.query) === null || _router$query === void 0 ? void 0 : _router$query.salesRankType}`)) {
      const query = Object(_tools_utils__WEBPACK_IMPORTED_MODULE_7__["dealUrlQuery"])({
        salesRankType: _ss_common_enum__WEBPACK_IMPORTED_MODULE_9__["SaleRankTypeEnum"].OneDay
      });
      router.push(`/${homeTabsState.homeType}/[appModule]${query}`, `/${homeTabsState.homeType}/salesRank${query}`);
    }
  }, [router.query.salesRankType, homeTabsState.homeType]);
  const {
    actions: actionsSalesRankModel,
    state: stateSalesRankModel
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_3__["useStoreModel"])(SalesRankModel);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (router.query.salesRankType) {
      actionsSalesRankModel.getList({
        productInput: {
          isGroup: homeTabsState.homeType === _appModule__WEBPACK_IMPORTED_MODULE_13__["HomeType"].group ? 1 : 0
        },
        orderByType: router.query.salesRankType
      });
    }
  }, [router.query.salesRankType]);
  return __jsx(Box, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 10
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Tabs"], {
    variant: 'fullWidth',
    value: (_router$query$salesRa = router.query.salesRankType) !== null && _router$query$salesRa !== void 0 ? _router$query$salesRa : _ss_common_enum__WEBPACK_IMPORTED_MODULE_9__["SaleRankTypeEnum"].OneDay,
    onChange: (event, value) => actionsSalesRankModel.tabChange([value, homeTabsState.homeType]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    }
  }, [[_ss_common_enum__WEBPACK_IMPORTED_MODULE_9__["SaleRankTypeEnum"].OneDay, '24小时排行'], [_ss_common_enum__WEBPACK_IMPORTED_MODULE_9__["SaleRankTypeEnum"].OneWeek, '本周排行'], [_ss_common_enum__WEBPACK_IMPORTED_MODULE_9__["SaleRankTypeEnum"].OneMonth, '本月排行']].map(v => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Tab"], {
    key: `SaleRankTab${v[0]}`,
    value: v[0],
    label: Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__["ls"])(v[1]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }))), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_11__["Space"], {
    h: 16,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 5
    }
  }), stateSalesRankModel.listData.map(product => {
    var _router$query2, _router$query3;

    return homeTabsState.homeType === _appModule__WEBPACK_IMPORTED_MODULE_13__["HomeType"].group ? __jsx(_components_ProductItem_ProductItem__WEBPACK_IMPORTED_MODULE_4__["GroupProductItem"], {
      product: product,
      key: `ProductItem_${product.id}`,
      showSumOrder: true,
      sumOrderTip: SaleRankTypeEnumLabel[`${(_router$query2 = router.query) === null || _router$query2 === void 0 ? void 0 : _router$query2.salesRankType}`],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 94
      }
    }) : __jsx(_components_ProductItem_ProductItem__WEBPACK_IMPORTED_MODULE_4__["ProductItemOneRow"], {
      key: `ProductItemOneRow_${product.id}`,
      product: product,
      showSumOrder: true,
      sumOrderTip: SaleRankTypeEnumLabel[`${(_router$query3 = router.query) === null || _router$query3 === void 0 ? void 0 : _router$query3.salesRankType}`],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 10
      }
    });
  }));
};

/***/ }),

/***/ "./utils/view/home/components/Tabs/Tabs.tsx":
/*!**************************************************!*\
  !*** ./utils/view/home/components/Tabs/Tabs.tsx ***!
  \**************************************************/
/*! exports provided: homeTabsModel, HomeTabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homeTabsModel", function() { return homeTabsModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeTabs", function() { return HomeTabs; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CategorySelection_CategorySelection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CategorySelection/CategorySelection */ "./utils/view/home/components/CategorySelection/CategorySelection.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../ModelAction/modelUtil */ "./utils/ModelAction/modelUtil.ts");
/* harmony import */ var _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../ModelAction/useStore */ "./utils/ModelAction/useStore.ts");
/* harmony import */ var _ss_common_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../ss_common/enum */ "./utils/ss_common/enum.ts");
/* harmony import */ var _tools_dealKey__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../tools/dealKey */ "./utils/tools/dealKey.ts");
/* harmony import */ var _PromotionFlashSale_PromotionFlashSale__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../PromotionFlashSale/PromotionFlashSale */ "./utils/view/home/components/PromotionFlashSale/PromotionFlashSale.tsx");
/* harmony import */ var _ThemeSelection_ThemeSelection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ThemeSelection/ThemeSelection */ "./utils/view/home/components/ThemeSelection/ThemeSelection.tsx");
/* harmony import */ var _appModule__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../appModule */ "./utils/view/home/appModule.tsx");
/* harmony import */ var _tools_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../tools/utils */ "./utils/tools/utils.ts");
/* harmony import */ var _graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../graphqlTypes/doc */ "./utils/graphqlTypes/doc/index.ts");
/* harmony import */ var _SalesRank_SalesRank__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../SalesRank/SalesRank */ "./utils/view/home/components/SalesRank/SalesRank.tsx");
/* harmony import */ var _components_ProductItem_UpdateShopCart__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../components/ProductItem/UpdateShopCart */ "./utils/components/ProductItem/UpdateShopCart.tsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _LineRanking_LineRanking__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../LineRanking/LineRanking */ "./utils/view/home/components/LineRanking/LineRanking.tsx");
var _jsxFileName = "D:\\code\\zw\\zw_client_web\\utils\\view\\home\\components\\Tabs\\Tabs.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

















const homeTabsModel = Object(_ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_5__["modelFactory"])('HomeTabs', {
  homeType: '',
  appModuleConfig: {}
}, {
  setHomeType: (value, option) => {
    option.setData(Object(_tools_utils__WEBPACK_IMPORTED_MODULE_12__["fpMergePre"])({
      homeType: value
    }));
  },
  onChange: ([name, type], option) => {
    // @ts-ignore
    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push(`/${type}/[appModule]`, `/${type}/${name}`, {
      shallow: true
    }); // option.setData(fpMergePre({
    //   value,
    // }))
  },
  getData: async (value, option) => {
    var _appModuleConfig$getD, _appModuleConfig$getD2;

    const appModuleConfig = await option.query(_graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_13__["getDataConfig"], {
      data: {
        type: _ss_common_enum__WEBPACK_IMPORTED_MODULE_7__["DictTypeEnum"].AppModule
      }
    }, {});
    option.setData(Object(_tools_utils__WEBPACK_IMPORTED_MODULE_12__["fpMergePre"])({
      appModuleConfig: (_appModuleConfig$getD = (_appModuleConfig$getD2 = appModuleConfig.getDataConfig) === null || _appModuleConfig$getD2 === void 0 ? void 0 : _appModuleConfig$getD2.value) !== null && _appModuleConfig$getD !== void 0 ? _appModuleConfig$getD : {}
    }));
  }
});
const HomeTabs = ({
  homeType
}) => {
  var _router$query$appModu;

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  const {
    state: homeTabsState,
    actions: homeTabsActions
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_6__["useStoreModel"])(homeTabsModel);
  return __jsx("div", {
    style: {
      marginTop: '10px'
    },
    className: "jsx-1221730688",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, !Object(lodash__WEBPACK_IMPORTED_MODULE_16__["isEmpty"])(homeTabsState === null || homeTabsState === void 0 ? void 0 : homeTabsState.appModuleConfig) && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Tabs"], {
    variant: 'fullWidth',
    value: (_router$query$appModu = router.query.appModule) !== null && _router$query$appModu !== void 0 ? _router$query$appModu : _ss_common_enum__WEBPACK_IMPORTED_MODULE_7__["AppModuleTypeEnum"].categorySelection,
    onChange: (event, value) => homeTabsActions.onChange([value, homeType]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 54
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
    value: _ss_common_enum__WEBPACK_IMPORTED_MODULE_7__["AppModuleTypeEnum"].categorySelection,
    label: Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_8__["ls"])(homeType === _appModule__WEBPACK_IMPORTED_MODULE_11__["HomeType"].group ? '分类拼团' : '分类选择'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }), (homeType === _appModule__WEBPACK_IMPORTED_MODULE_11__["HomeType"].home && [[_ss_common_enum__WEBPACK_IMPORTED_MODULE_7__["AppModuleTypeEnum"].limitTime, '限时选购'], [_ss_common_enum__WEBPACK_IMPORTED_MODULE_7__["AppModuleTypeEnum"].salesRank, '热销排行'], [_ss_common_enum__WEBPACK_IMPORTED_MODULE_7__["AppModuleTypeEnum"].themeSelection, '主题甄选'], [_ss_common_enum__WEBPACK_IMPORTED_MODULE_7__["AppModuleTypeEnum"].mayLike, '猜你喜欢']] || homeType === _appModule__WEBPACK_IMPORTED_MODULE_11__["HomeType"].group && [[_ss_common_enum__WEBPACK_IMPORTED_MODULE_7__["AppModuleTypeEnum"].salesRank, '热门排行'], [_ss_common_enum__WEBPACK_IMPORTED_MODULE_7__["AppModuleTypeEnum"].lineRanking, '冲线排行']] || []).filter(v => {
    var _homeTabsState$appMod;

    return homeTabsState === null || homeTabsState === void 0 ? void 0 : (_homeTabsState$appMod = homeTabsState.appModuleConfig) === null || _homeTabsState$appMod === void 0 ? void 0 : _homeTabsState$appMod[v[0]];
  }).map(v => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
    key: `AppModuleTypeEnum_${v[0]}`,
    value: v[0],
    label: Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_8__["ls"])(v[1]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 84
    }
  }))), __jsx("main", {
    style: {
      marginTop: '10px'
    },
    className: "jsx-1221730688",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, router.query.appModule === _ss_common_enum__WEBPACK_IMPORTED_MODULE_7__["AppModuleTypeEnum"].categorySelection && __jsx(_CategorySelection_CategorySelection__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 14
    }
  }), router.query.appModule === _ss_common_enum__WEBPACK_IMPORTED_MODULE_7__["AppModuleTypeEnum"].limitTime && __jsx(_PromotionFlashSale_PromotionFlashSale__WEBPACK_IMPORTED_MODULE_9__["PromotionFlashSale"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 14
    }
  }), router.query.appModule === _ss_common_enum__WEBPACK_IMPORTED_MODULE_7__["AppModuleTypeEnum"].themeSelection && __jsx(_ThemeSelection_ThemeSelection__WEBPACK_IMPORTED_MODULE_10__["ThemeSelection"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 14
    }
  }), router.query.appModule === _ss_common_enum__WEBPACK_IMPORTED_MODULE_7__["AppModuleTypeEnum"].salesRank && __jsx(_SalesRank_SalesRank__WEBPACK_IMPORTED_MODULE_14__["SalesRank"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 14
    }
  }), router.query.appModule === _ss_common_enum__WEBPACK_IMPORTED_MODULE_7__["AppModuleTypeEnum"].lineRanking && __jsx(_LineRanking_LineRanking__WEBPACK_IMPORTED_MODULE_17__["LineRanking"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 14
    }
  })), __jsx(_components_ProductItem_UpdateShopCart__WEBPACK_IMPORTED_MODULE_15__["UpdateShopCart"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1221730688",
    __self: undefined
  }, "div.jsx-1221730688 .MuiButtonBase-root{padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxjb2RlXFx6d1xcendfY2xpZW50X3dlYlxcdXRpbHNcXHZpZXdcXGhvbWVcXGNvbXBvbmVudHNcXFRhYnNcXFRhYnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZGb0IsQUFFYSxVQUFDIiwiZmlsZSI6IkQ6XFxjb2RlXFx6d1xcendfY2xpZW50X3dlYlxcdXRpbHNcXHZpZXdcXGhvbWVcXGNvbXBvbmVudHNcXFRhYnNcXFRhYnMudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUYWIsIFRhYnN9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDYXRlZ29yeVNlbGVjdGlvbiBmcm9tICcuLi9DYXRlZ29yeVNlbGVjdGlvbi9DYXRlZ29yeVNlbGVjdGlvbidcclxuaW1wb3J0IFJvdXRlciwge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7bW9kZWxGYWN0b3J5fSBmcm9tICcuLi8uLi8uLi8uLi9Nb2RlbEFjdGlvbi9tb2RlbFV0aWwnXHJcbmltcG9ydCB7dXNlU3RvcmVNb2RlbH0gZnJvbSAnLi4vLi4vLi4vLi4vTW9kZWxBY3Rpb24vdXNlU3RvcmUnXHJcbmltcG9ydCB7QXBwTW9kdWxlVHlwZUVudW0sIERpY3RUeXBlRW51bX0gZnJvbSAnLi4vLi4vLi4vLi4vc3NfY29tbW9uL2VudW0nXHJcbmltcG9ydCB7bHN9IGZyb20gJy4uLy4uLy4uLy4uL3Rvb2xzL2RlYWxLZXknXHJcbmltcG9ydCB7UHJvbW90aW9uRmxhc2hTYWxlfSBmcm9tICcuLi9Qcm9tb3Rpb25GbGFzaFNhbGUvUHJvbW90aW9uRmxhc2hTYWxlJ1xyXG5pbXBvcnQge1RoZW1lU2VsZWN0aW9ufSBmcm9tICcuLi9UaGVtZVNlbGVjdGlvbi9UaGVtZVNlbGVjdGlvbidcclxuaW1wb3J0IHtIb21lVHlwZX0gZnJvbSAnLi4vLi4vYXBwTW9kdWxlJ1xyXG5pbXBvcnQge2ZwTWVyZ2VQcmV9IGZyb20gJy4uLy4uLy4uLy4uL3Rvb2xzL3V0aWxzJ1xyXG5pbXBvcnQge2dldERhdGFDb25maWd9IGZyb20gJy4uLy4uLy4uLy4uL2dyYXBocWxUeXBlcy9kb2MnXHJcbmltcG9ydCB7RGF0YUNvbmZpZ0l0ZW1JbnB1dH0gZnJvbSAnLi4vLi4vLi4vLi4vZ3JhcGhxbFR5cGVzL3R5cGVzJ1xyXG5pbXBvcnQgeyBTYWxlc1JhbmsgfSBmcm9tICcuLi9TYWxlc1JhbmsvU2FsZXNSYW5rJ1xyXG5pbXBvcnQge1VwZGF0ZVNob3BDYXJ0fSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL1Byb2R1Y3RJdGVtL1VwZGF0ZVNob3BDYXJ0J1xyXG5pbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSAnbG9kYXNoJ1xyXG5pbXBvcnQge0xpbmVSYW5raW5nfSBmcm9tICcuLi9MaW5lUmFua2luZy9MaW5lUmFua2luZydcclxuXHJcbmV4cG9ydCBjb25zdCBob21lVGFic01vZGVsID0gbW9kZWxGYWN0b3J5KCdIb21lVGFicycsIHtcclxuICBob21lVHlwZTogJycsXHJcbiAgYXBwTW9kdWxlQ29uZmlnOiB7fSBhcyBhbnksXHJcbn0sIHtcclxuICBzZXRIb21lVHlwZTogKHZhbHVlOiBzdHJpbmcsIG9wdGlvbikgPT4ge1xyXG4gICAgb3B0aW9uLnNldERhdGEoZnBNZXJnZVByZSh7XHJcbiAgICAgIGhvbWVUeXBlOiB2YWx1ZSxcclxuICAgIH0pKVxyXG4gIH0sXHJcbiAgb25DaGFuZ2U6IChbbmFtZSwgdHlwZV0sIG9wdGlvbikgPT4ge1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgUm91dGVyLnB1c2goYC8ke3R5cGV9L1thcHBNb2R1bGVdYCwgYC8ke3R5cGV9LyR7bmFtZX1gLCB7c2hhbGxvdzogdHJ1ZX0pXHJcbiAgICAvLyBvcHRpb24uc2V0RGF0YShmcE1lcmdlUHJlKHtcclxuICAgIC8vICAgdmFsdWUsXHJcbiAgICAvLyB9KSlcclxuICB9LFxyXG4gIGdldERhdGE6IGFzeW5jICh2YWx1ZSwgb3B0aW9uKSA9PiB7XHJcbiAgICBjb25zdCBhcHBNb2R1bGVDb25maWcgPSBhd2FpdCBvcHRpb24ucXVlcnkoZ2V0RGF0YUNvbmZpZywge1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgdHlwZTogRGljdFR5cGVFbnVtLkFwcE1vZHVsZSxcclxuICAgICAgfSBhcyBEYXRhQ29uZmlnSXRlbUlucHV0XHJcbiAgICB9LCB7fSlcclxuICAgIG9wdGlvbi5zZXREYXRhKGZwTWVyZ2VQcmUoe1xyXG4gICAgICBhcHBNb2R1bGVDb25maWc6IGFwcE1vZHVsZUNvbmZpZy5nZXREYXRhQ29uZmlnPy52YWx1ZSA/PyB7fSxcclxuICAgIH0pKVxyXG4gIH0sXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgSG9tZVRhYnMgPSAoe2hvbWVUeXBlfToge2hvbWVUeXBlOiBzdHJpbmd9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCB7c3RhdGU6IGhvbWVUYWJzU3RhdGUsIGFjdGlvbnM6IGhvbWVUYWJzQWN0aW9uc30gPSB1c2VTdG9yZU1vZGVsKGhvbWVUYWJzTW9kZWwpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7bWFyZ2luVG9wOiAnMTBweCd9fVxyXG4gICAgICA+XHJcbiAgICAgICAgeyFpc0VtcHR5KGhvbWVUYWJzU3RhdGU/LmFwcE1vZHVsZUNvbmZpZykgJiYgPFRhYnNcclxuICAgICAgICAgICAgdmFyaWFudD17J2Z1bGxXaWR0aCd9XHJcbiAgICAgICAgICAgIHZhbHVlPXtyb3V0ZXIucXVlcnkuYXBwTW9kdWxlID8/IEFwcE1vZHVsZVR5cGVFbnVtLmNhdGVnb3J5U2VsZWN0aW9ufVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50LCB2YWx1ZSkgPT4gaG9tZVRhYnNBY3Rpb25zLm9uQ2hhbmdlKFt2YWx1ZSwgaG9tZVR5cGVdKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8VGFiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e0FwcE1vZHVsZVR5cGVFbnVtLmNhdGVnb3J5U2VsZWN0aW9ufVxyXG4gICAgICAgICAgICAgIGxhYmVsPXtscyhob21lVHlwZSA9PT0gSG9tZVR5cGUuZ3JvdXAgPyAn5YiG57G75ou85ZuiJyA6ICfliIbnsbvpgInmi6knKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7KChob21lVHlwZSA9PT0gSG9tZVR5cGUuaG9tZSAmJiBbXHJcbiAgICAgICAgICAgIFtBcHBNb2R1bGVUeXBlRW51bS5saW1pdFRpbWUsICfpmZDml7bpgInotK0nXSxcclxuICAgICAgICAgICAgW0FwcE1vZHVsZVR5cGVFbnVtLnNhbGVzUmFuaywgJ+eDremUgOaOkuihjCddLFxyXG4gICAgICAgICAgICBbQXBwTW9kdWxlVHlwZUVudW0udGhlbWVTZWxlY3Rpb24sICfkuLvpopjnlITpgIknXSxcclxuICAgICAgICAgICAgW0FwcE1vZHVsZVR5cGVFbnVtLm1heUxpa2UsICfnjJzkvaDllpzmrKInXSxcclxuICAgICAgICAgIF0pIHx8IChob21lVHlwZSA9PT0gSG9tZVR5cGUuZ3JvdXAgJiYgW1xyXG4gICAgICAgICAgICBbQXBwTW9kdWxlVHlwZUVudW0uc2FsZXNSYW5rLCAn54Ot6Zeo5o6S6KGMJ10sXHJcbiAgICAgICAgICAgIFtBcHBNb2R1bGVUeXBlRW51bS5saW5lUmFua2luZywgJ+WGsue6v+aOkuihjCddLFxyXG4gICAgICAgICAgXSkgfHwgW10pLmZpbHRlcih2ID0+IChob21lVGFic1N0YXRlPy5hcHBNb2R1bGVDb25maWc/Llt2WzBdXSkpLm1hcCh2ID0+IDxUYWJcclxuICAgICAgICAgICAgICBrZXk9e2BBcHBNb2R1bGVUeXBlRW51bV8ke3ZbMF19YH1cclxuICAgICAgICAgICAgICB2YWx1ZT17dlswXX1cclxuICAgICAgICAgICAgICBsYWJlbD17bHModlsxXSl9XHJcbiAgICAgICAgICAvPil9XHJcbiAgICAgICAgPC9UYWJzPn1cclxuICAgICAgICA8bWFpblxyXG4gICAgICAgICAgICBzdHlsZT17e21hcmdpblRvcDogJzEwcHgnfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7cm91dGVyLnF1ZXJ5LmFwcE1vZHVsZSA9PT0gQXBwTW9kdWxlVHlwZUVudW0uY2F0ZWdvcnlTZWxlY3Rpb25cclxuICAgICAgICAgICYmIDxDYXRlZ29yeVNlbGVjdGlvbi8+fVxyXG4gICAgICAgICAge3JvdXRlci5xdWVyeS5hcHBNb2R1bGUgPT09IEFwcE1vZHVsZVR5cGVFbnVtLmxpbWl0VGltZVxyXG4gICAgICAgICAgJiYgPFByb21vdGlvbkZsYXNoU2FsZS8+fVxyXG4gICAgICAgICAge3JvdXRlci5xdWVyeS5hcHBNb2R1bGUgPT09IEFwcE1vZHVsZVR5cGVFbnVtLnRoZW1lU2VsZWN0aW9uXHJcbiAgICAgICAgICAmJiA8VGhlbWVTZWxlY3Rpb24vPn1cclxuICAgICAgICAgIHtyb3V0ZXIucXVlcnkuYXBwTW9kdWxlID09PSBBcHBNb2R1bGVUeXBlRW51bS5zYWxlc1JhbmtcclxuICAgICAgICAgICYmIDxTYWxlc1JhbmsvPn1cclxuICAgICAgICAgIHtyb3V0ZXIucXVlcnkuYXBwTW9kdWxlID09PSBBcHBNb2R1bGVUeXBlRW51bS5saW5lUmFua2luZ1xyXG4gICAgICAgICAgJiYgPExpbmVSYW5raW5nLz59XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgICAgIDxVcGRhdGVTaG9wQ2FydC8+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgZGl2IDpnbG9iYWwoLk11aUJ1dHRvbkJhc2Utcm9vdCkge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG4iXX0= */\n/*@ sourceURL=D:\\\\code\\\\zw\\\\zw_client_web\\\\utils\\\\view\\\\home\\\\components\\\\Tabs\\\\Tabs.tsx */"));
};

/***/ }),

/***/ "./utils/view/home/components/ThemeSelection/ThemeSelection.tsx":
/*!**********************************************************************!*\
  !*** ./utils/view/home/components/ThemeSelection/ThemeSelection.tsx ***!
  \**********************************************************************/
/*! exports provided: ThemeSelection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeSelection", function() { return ThemeSelection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../ModelAction/modelUtil */ "./utils/ModelAction/modelUtil.ts");
/* harmony import */ var _graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../graphqlTypes/doc */ "./utils/graphqlTypes/doc/index.ts");
/* harmony import */ var _tools_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../tools/utils */ "./utils/tools/utils.ts");
/* harmony import */ var _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ModelAction/useStore */ "./utils/ModelAction/useStore.ts");
/* harmony import */ var _components_ProductItem_ProductItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/ProductItem/ProductItem */ "./utils/components/ProductItem/ProductItem.tsx");
/* harmony import */ var _ss_common_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../ss_common/enum */ "./utils/ss_common/enum.ts");
/* harmony import */ var _tools_dealKey__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../tools/dealKey */ "./utils/tools/dealKey.ts");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _tools_img__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../tools/img */ "./utils/tools/img.ts");
/* harmony import */ var _components_BScroll_BScroller__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../components/BScroll/BScroller */ "./utils/components/BScroll/BScroller.tsx");
var _jsxFileName = "D:\\code\\zw\\zw_client_web\\utils\\view\\home\\components\\ThemeSelection\\ThemeSelection.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const themeSelectionModel = Object(_ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_1__["modelFactory"])('themeSelectionModel', {
  themeSelectionData: [],
  productListForTheme: {}
}, {
  getData: async (value, option) => {
    var _res$getDataConfig$va, _res$getDataConfig, _res$getDataConfig$va2;

    const res = await option.query(_graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_2__["doc"].getDataConfig, {
      data: {
        type: _ss_common_enum__WEBPACK_IMPORTED_MODULE_6__["DictTypeEnum"].PromotionThemeSelect
      }
    });
    const themeList = (_res$getDataConfig$va = res === null || res === void 0 ? void 0 : (_res$getDataConfig = res.getDataConfig) === null || _res$getDataConfig === void 0 ? void 0 : (_res$getDataConfig$va2 = _res$getDataConfig.value) === null || _res$getDataConfig$va2 === void 0 ? void 0 : _res$getDataConfig$va2.list) !== null && _res$getDataConfig$va !== void 0 ? _res$getDataConfig$va : [];
    const productRes = await option.query(_graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_2__["doc"].productListByIds, {
      ids: themeList.reduce((pre, cur) => {
        var _cur$selectProductLis;

        return [...pre, ...((_cur$selectProductLis = cur === null || cur === void 0 ? void 0 : cur.selectProductList) !== null && _cur$selectProductLis !== void 0 ? _cur$selectProductLis : [])];
      }, [])
    });
    option.setData(Object(_tools_utils__WEBPACK_IMPORTED_MODULE_3__["fpMergePre"])({
      themeSelectionData: themeList,
      productListForTheme: themeList.reduce((pre, cur) => {
        var _cur$selectProductLis2;

        return _objectSpread(_objectSpread({}, pre), {}, {
          [cur.id]: cur === null || cur === void 0 ? void 0 : (_cur$selectProductLis2 = cur.selectProductList) === null || _cur$selectProductLis2 === void 0 ? void 0 : _cur$selectProductLis2.map(id => {
            var _productRes$productLi, _productRes$productLi2, _productRes$productLi3;

            return (_productRes$productLi = productRes === null || productRes === void 0 ? void 0 : (_productRes$productLi2 = productRes.productListByIds) === null || _productRes$productLi2 === void 0 ? void 0 : (_productRes$productLi3 = _productRes$productLi2.list) === null || _productRes$productLi3 === void 0 ? void 0 : _productRes$productLi3.find(v1 => (v1 === null || v1 === void 0 ? void 0 : v1.id) === id)) !== null && _productRes$productLi !== void 0 ? _productRes$productLi : null;
          }).filter(v => v)
        });
      }, {})
    }));
  }
});
const Title = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div.withConfig({
  displayName: "ThemeSelection__Title",
  componentId: "sc-7wn2jm-0"
})(["font-size:18px;font-weight:bold;padding-left:20px;"]);
const Theme = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div.withConfig({
  displayName: "ThemeSelection__Theme",
  componentId: "sc-7wn2jm-1"
})(["width:100vw;position:relative;left:-3.125vw;margin-top:16px;> img{width:100vw;height:30vw;}> main,aside{color:white;text-shadow:0.1em 0.1em 0.2em black;position:absolute;}> main{top:8vw;left:20px;font-size:20px;font-weight:bold;}> aside{top:16vw;left:20px;font-size:16px;}"]);
const ProductList = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div.withConfig({
  displayName: "ThemeSelection__ProductList",
  componentId: "sc-7wn2jm-2"
})(["white-space:nowrap;display:inline-block;> *{display:inline-block;margin:8px 16px 8px 0;width:35vw;}"]);
const ThemeSelection = () => {
  var _statePromotionFlashS;

  const {
    state: statePromotionFlashSale,
    actions: actionsPromotionFlashSale
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_4__["useStoreModel"])(themeSelectionModel);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    actionsPromotionFlashSale.getData();
  }, []);
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 10
    }
  }, __jsx(Title, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 5
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_7__["ls"])('主题甄选')), (_statePromotionFlashS = statePromotionFlashSale.themeSelectionData) === null || _statePromotionFlashS === void 0 ? void 0 : _statePromotionFlashS.map(v => {
    var _statePromotionFlashS2;

    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      key: `themeSelectionDataImg${v.id}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 59
      }
    }, __jsx(Theme, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 7
      }
    }, __jsx("img", {
      src: Object(_tools_img__WEBPACK_IMPORTED_MODULE_9__["dealImgUrl"])(v.imgUrl),
      alt: '',
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }
    }), __jsx("main", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }
    }, v.title), __jsx("aside", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }
    }, v.remark)), __jsx(_components_BScroll_BScroller__WEBPACK_IMPORTED_MODULE_10__["BScroller"], {
      isX: true,
      boxWidth: 'calc(100vw - 20px)',
      boxHeight: 'auto',
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 7
      }
    }, __jsx(ProductList, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 9
      }
    }, (_statePromotionFlashS2 = statePromotionFlashSale.productListForTheme[v.id]) === null || _statePromotionFlashS2 === void 0 ? void 0 : _statePromotionFlashS2.map(v => __jsx(_components_ProductItem_ProductItem__WEBPACK_IMPORTED_MODULE_5__["ProductItem"], {
      key: `statePromotionFlashSaleProductItem_${v.id}`,
      product: v,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 72
      }
    })))));
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

/***/ 6:
/*!*******************************************!*\
  !*** multi ./pages/group/[appModule].tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\code\zw\zw_client_web\pages\group\[appModule].tsx */"./pages/group/[appModule].tsx");


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

/***/ "@material-ui/core/styles/makeStyles":
/*!******************************************************!*\
  !*** external "@material-ui/core/styles/makeStyles" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/makeStyles");

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

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvZ3JvdXAvW2FwcE1vZHVsZV0udHN4Iiwid2VicGFjazovLy8uL3V0aWxzL01vZGVsQWN0aW9uL21vZGVsVXRpbC50cyIsIndlYnBhY2s6Ly8vLi91dGlscy9Nb2RlbEFjdGlvbi91c2VTdG9yZS50cyIsIndlYnBhY2s6Ly8vLi91dGlscy9jbGllbnQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29tbW9uTW9kZWwvZGlhbG9nLnRzIiwid2VicGFjazovLy8uL3V0aWxzL2NvbXBvbmVudHMvQlNjcm9sbC9CU2Nyb2xsZXIudHN4Iiwid2VicGFjazovLy8uL3V0aWxzL2NvbXBvbmVudHMvQm94L0JveC50c3giLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29tcG9uZW50cy9CdXR0b25Mb2FkL0J1dHRvbkxvYWQudHN4Iiwid2VicGFjazovLy8uL3V0aWxzL2NvbXBvbmVudHMvRm9vdEJhci9Gb290QmFyLnRzeCIsIndlYnBhY2s6Ly8vLi91dGlscy9jb21wb25lbnRzL0hlYWRlclNlYXJjaC9IZWFkZXJTZWFyY2gudHN4Iiwid2VicGFjazovLy8uL3V0aWxzL2NvbXBvbmVudHMvSGVhZGVyVGl0bGUvSGVhZGVyVGl0bGUudHN4Iiwid2VicGFjazovLy8uL3V0aWxzL2NvbXBvbmVudHMvTG9hZGluZy9Mb2FkaW5nLnRzeCIsIndlYnBhY2s6Ly8vLi91dGlscy9jb21wb25lbnRzL01lc3NhZ2UvTWVzc2FnZS50c3giLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29tcG9uZW50cy9Ob0F1dGgvTm9BdXRoLnRzeCIsIndlYnBhY2s6Ly8vLi91dGlscy9jb21wb25lbnRzL1Byb2R1Y3RJdGVtL1Byb2R1Y3RJdGVtLnRzeCIsIndlYnBhY2s6Ly8vLi91dGlscy9jb21wb25lbnRzL1Byb2R1Y3RJdGVtL1VwZGF0ZVNob3BDYXJ0LnRzeCIsIndlYnBhY2s6Ly8vLi91dGlscy9jb21wb25lbnRzL1JlZ2lzdGVySGVhZGVyL1JlZ2lzdGVySGVhZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi91dGlscy9jb21wb25lbnRzL1Nob3BwaW5nQ2FydEljb25CdXR0b24vU2hvcHBpbmdDYXJ0SWNvbkJ1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29tcG9uZW50cy9Td2lwZS9Td2lwZS50c3giLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZ3JhcGhxbFR5cGVzL2RvYy9mcmFnbWVudC50cyIsIndlYnBhY2s6Ly8vLi91dGlscy9ncmFwaHFsVHlwZXMvZG9jL2luZGV4LnRzIiwid2VicGFjazovLy8uL3V0aWxzL3NzX2NvbW1vbi9lbnVtLnRzIiwid2VicGFjazovLy8uL3V0aWxzL3N0eWxlL2NvbW1vbi50cyIsIndlYnBhY2s6Ly8vLi91dGlscy90b29scy9jb21tb25BY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvdG9vbHMvZGVhbEtleS50cyIsIndlYnBhY2s6Ly8vLi91dGlscy90b29scy9nbG9iYWwudHMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvdG9vbHMvaW1nLnRzIiwid2VicGFjazovLy8uL3V0aWxzL3Rvb2xzL3Rva2VuLnRzIiwid2VicGFjazovLy8uL3V0aWxzL3Rvb2xzL3V0aWxzLnRzIiwid2VicGFjazovLy8uL3V0aWxzL3ZpZXcvY2FydC9DYXJ0UHJvZHVjdC50c3giLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvdmlldy9jYXJ0L2NvbXBvbmVudHMvSW5wdXRQcm9tb0NvZGUudHN4Iiwid2VicGFjazovLy8uL3V0aWxzL3ZpZXcvY2FydC9jb21wb25lbnRzL1NlbGVjdEFkZHJlc3MudHN4Iiwid2VicGFjazovLy8uL3V0aWxzL3ZpZXcvY2FydC9jb21wb25lbnRzL1NlbGVjdENhcmQudHN4Iiwid2VicGFjazovLy8uL3V0aWxzL3ZpZXcvY2FydC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvdmlldy9jYXJ0L29yZGVyUGFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvdmlldy9jYXJ0L3Nob3BDYXJ0LnRzeCIsIndlYnBhY2s6Ly8vLi91dGlscy92aWV3L2hvbWUvYXBwTW9kdWxlLnRzeCIsIndlYnBhY2s6Ly8vLi91dGlscy92aWV3L2hvbWUvY29tcG9uZW50cy9DYXRlZ29yeVNlbGVjdGlvbi9DYXRlZ29yeVNlbGVjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvdmlldy9ob21lL2NvbXBvbmVudHMvTGluZVJhbmtpbmcvTGluZVJhbmtpbmcudHN4Iiwid2VicGFjazovLy8uL3V0aWxzL3ZpZXcvaG9tZS9jb21wb25lbnRzL1Byb21vdGlvbkZsYXNoU2FsZS9Qcm9tb3Rpb25GbGFzaFNhbGUudHN4Iiwid2VicGFjazovLy8uL3V0aWxzL3ZpZXcvaG9tZS9jb21wb25lbnRzL1NhbGVzUmFuay9TYWxlc1JhbmsudHN4Iiwid2VicGFjazovLy8uL3V0aWxzL3ZpZXcvaG9tZS9jb21wb25lbnRzL1RhYnMvVGFicy50c3giLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvdmlldy9ob21lL2NvbXBvbmVudHMvVGhlbWVTZWxlY3Rpb24vVGhlbWVTZWxlY3Rpb24udHN4Iiwid2VicGFjazovLy8uL3V0aWxzL3ZpZXcvbWUvbW9kZWwudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvcmVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL21ha2VTdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQWNjb3VudEJveFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9BZGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkQ2lyY2xlT3V0bGluZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9BcnJvd0JhY2tJb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hldnJvblJpZ2h0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1Blb3BsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9SZWRlZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUmVtb3ZlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1Nob3BwaW5nQ2FydFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9TdGFyQm9yZGVyUm91bmRlZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9TdGFyUm91bmRlZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9TdG9yZWZyb250XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXBvbGxvLWJvb3N0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmV0dGVyLXNjcm9sbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNyb3NzLWZldGNoL3BvbHlmaWxsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZGF0ZS1mbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkYXRlLWZucy9mb3JtYXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2gvc2V0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9jb25maWdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zdHlsZVwiIl0sIm5hbWVzIjpbIkhvbWVBcHBNb2R1bGUiLCJIb21lVHlwZSIsImdyb3VwIiwiYmFzZUFjdGlvbk9wdGlvbiIsImRhdGEiLCJtdXRhdGUiLCJub3RpY2UiLCJxdWVyeSIsInNldERhdGEiLCJzdG9yZSIsIm1vZGVsTmFtZUxpc3QiLCJtb2RlbEZhY3RvcnkiLCJuYW1lIiwic3RhdGUiLCJhY3Rpb25zIiwiaW5jbHVkZXMiLCJFcnJvciIsInB1c2giLCJmZXRjaExvYWQiLCJmZXRjaEVycm9yIiwibWVyZ2VNb2RlbCIsIm1vZGVsIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJ2YWx1ZSIsIm1lcmdlTmFtZSIsIm1lcmdlVHdvTW9kZWwiLCJtb2RlbFQiLCJtZXJnZVRocmVlTW9kZWwiLCJtb2RlbEEiLCJtb2RlbEIiLCJtb2RlbEMiLCJtZXJnZUxpc3RNb2RlbCIsIm1vZGVsTGlzdCIsInNsaWNlIiwicmVkdWNlIiwiYWNjIiwiaW5pdExpc3QiLCJpbml0TW9kZWwiLCJpbml0U3RhdGUiLCJvcmlnaW5TdG9yZSIsImlzRnVuY3Rpb24iLCJmdW5jdGlvblRvQ2hlY2siLCJ0b1N0cmluZyIsImNhbGwiLCJkZWFsTmFtZVNwYWNlIiwia2V5IiwibmFtZVNwYWNlIiwidXNlU3RvcmVNb2RlbCIsIl9rZXkiLCJBcnJheSIsImlzQXJyYXkiLCJzZXRTdGF0ZSIsInVzZVN0YXRlIiwiY3JlYXRlIiwidXNlQ2FsbGJhY2siLCJvbGRTdGF0ZSIsIm5ld0RhdGEiLCJzZXRMb2FkIiwiZmxhZyIsInByZXZTdGF0ZSIsImxvYyIsInNvdXJjZSIsImJvZHkiLCJzZXRFcnJvciIsImVyciIsInBhcmFtcyIsIm9wdGlvbiIsInJlcyIsImdyYXBoUUxRdWVyeSIsImNhdGNoIiwiZSIsImZpbmFsbHkiLCJtdXRhdGlvbiIsImdyYXBoUUxNdXRhdGUiLCJsZW5ndGgiLCJjb25zdHJ1Y3RvciIsInYiLCJ1c2VFZmZlY3QiLCJmaWx0ZXIiLCJnZXRMb2FkIiwiY29uZmlnIiwiZ2V0Q29uZmlnIiwiY2xpZW50X2FwaV91cmkiLCJwdWJsaWNSdW50aW1lQ29uZmlnIiwib21pdFR5cGVuYW1lIiwidW5kZWZpbmVkIiwiZ2V0Q2xpZW50IiwicmVxdWVzdCIsIm9wZXJhdGlvbiIsInZhcmlhYmxlcyIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsInNldENvbnRleHQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImdldFRva2VuIiwicmVmcmVzaFRva2VuIiwiZG9jIiwidGhlbiIsInRva2VuIiwic2V0VG9rZW4iLCJyZWZyZXNodG9rZW4iLCJzaG93TWVzc2FnZSIsIm1lc3NhZ2UiLCJSb3V0ZXIiLCJyZWxvYWQiLCJzc0xvZyIsIm9uRXJyb3IiLCJyZXNwb25zZSIsImdyYXBoUUxFcnJvcnMiLCJuZXR3b3JrRXJyb3IiLCJsb2NhdGlvbnMiLCJwYXRoIiwiZXh0ZW5zaW9ucyIsImNvZGUiLCJzcGxpdCIsIm1zZ190eXBlIiwiZXJyTXNnIiwiYm9keVRleHQiLCJyZXN1bHQiLCJlcnJvciIsInN0YXR1c0NvZGUiLCJBcG9sbG9DbGllbnQiLCJ1cmkiLCJkZWZhdWx0Q2xpZW50IiwiZGVhbFBhcmFtcyIsImNsaWVudCIsIl9kZWFsUGFyYW1zSW4iLCJkZWFsUGFyYW1zSW4iLCJmZXRjaFBvbGljeSIsInNlcnZlckNsaWVudCIsInNlcnZlclF1ZXJ5Iiwic2VydmVyTXV0YXRlIiwiZGlhbG9nTW9kZWxGYWN0b3J5IiwiaW5pdERhdGEiLCJkaWFsb2dEYXRhIiwib3BlbiIsImlzRWRpdCIsIm9wZW5SZXNvbHZlIiwib3BlbkNsaWNrIiwiUHJvbWlzZSIsInJlc29sdmUiLCJwcmVEYXRhIiwiZnBNZXJnZSIsIm9wZW5FZGl0Q2xpY2siLCJwcmUiLCJpbmRleCIsIm9uQ2xvc2UiLCJmcFNldCIsInNldGRpYWxvZyIsImJTY3JvbGxNb2RlbCIsInNjcm9sbCIsInNldFNjcm9sbCIsImZwTWVyZ2VQcmUiLCJCU2Nyb2xsZXIiLCJpc1giLCJjaGlsZHJlbiIsImJveEhlaWdodCIsImJveFdpZHRoIiwiYnNTdGF0ZSIsImJzQWN0aW9ucyIsInNjcm9sbFJlZiIsInVzZVJlZiIsIkJldHRlclNjcm9sbCIsImN1cnJlbnQiLCJjbGljayIsInNjcm9sbFkiLCJ0YXBzIiwic2Nyb2xsWCIsInByZXZlbnREZWZhdWx0RXhjZXB0aW9uIiwidGFnTmFtZSIsImNsYXNzTmFtZSIsInN0b3AiLCJkZXN0cm95IiwiZGlzcGxheSIsIkJveCIsInN0eWxlZCIsImRpdiIsIlNwYWNlIiwiaCIsInciLCJjIiwiYmFja2dyb3VuZCIsIndpZHRoIiwiaGVpZ2h0IiwiQnV0dG9uTG9hZCIsInByb3BzIiwibG9hZGluZyIsImRpc2FibGVkIiwiRm9vdEJhciIsInJvdXRlciIsInVzZVJvdXRlciIsImlzQWN0IiwicGF0aG5hbWUiLCJtcFN0eWxlIiwicmVkIiwiQXBwRm9vdEJhciIsImhvbWUiLCJjYXJkIiwibWUiLCJtYXAiLCJib3JkZXJlZElucHV0QmFzZVN0eWxlcyIsInBhbGV0dGUiLCJyb290IiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyIiwiYm9yZGVyQ29sb3IiLCJibHVlR3JleSIsImNvbG9yIiwiYWRvcm5lZFN0YXJ0IiwicGFkZGluZ0xlZnQiLCJhZG9ybmVkRW5kIiwicGFkZGluZ1JpZ2h0IiwiZm9jdXNlZCIsImJsdWUiLCJtYWluIiwiaW5wdXQiLCJwYWRkaW5nIiwiYmFja2dyb3VuZENvbG9yIiwidXNlQm9yZGVyZWRJbnB1dEJhc2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwiQm9yZGVyZWRJbnB1dEJhc2UiLCJzdHlsZXMiLCJzaGFkb3ciLCJMb2dvIiwiVGl0bGUiLCJBY3Rpb24iLCJIZWFkZXJTZWFyY2giLCJob21lVHlwZSIsImxzIiwiQ29udGFpbiIsIkxlZnRJY29uQnV0dG9uIiwiSWNvbkJ1dHRvbiIsIkhlYWRlclRpdGxlIiwidGl0bGUiLCJiYWNrQ2FsbCIsInNob3dDYXJ0IiwiTGVmdEljb24iLCJBcnJvd0JhY2tJb3NJY29uIiwiaGlkZUxlZnQiLCJzaG93U2VhcmNoIiwidmlzaWJpbGl0eSIsImJhY2siLCJMb2FkaW5nIiwianVzdGlmeUNvbnRlbnQiLCJ0eXBlSGVscCIsImRlZmF1bHQiLCJncmV5Iiwic3VjY2VzcyIsImdyZWVuIiwid2FybmluZyIsImFtYmVyIiwiaW5mbyIsImdldFR5cGUiLCJ0eXBlIiwiQ3VzU25hY2tiYXIiLCJTbmFja2JhciIsImNvbW1vbiIsIndoaXRlIiwibWVzc2FnZU1vZGVsIiwiYXV0b0hpZGVEdXJhdGlvbiIsIk1lc3NhZ2UiLCJtU3RhdGUiLCJFbXB0eSIsImRlYWxOb0F1dGgiLCJvdGhlcnMiLCJzdGF0ZU1lIiwiYWN0aW9uc01lIiwibWVNb2RlbCIsInVzZXIiLCJpZCIsImdldExvZ2luVXNlciIsInRvTG9naW4iLCJwcm9kdWN0TW9kZWwiLCJ1cGRhdGVOdW1TaG9wQ2FydCIsInNob3BDYXJ0IiwibnVtYmVyIiwidXBkYXRlTnVtIiwidXBkYXRlU2hvcENhcnQiLCJDYXJkIiwiUHJvZHVjdFByaWNlIiwicHJvZHVjdCIsInByaWNlT3V0VGlwIiwiZm9udFNpemUiLCJ0ZXh0RGVjb3JhdGlvbiIsImZsZXhTaHJpbmsiLCJkZWFsTW9uZXkiLCJwcmljZU1hcmtldCIsIm1hcmdpbkxlZnQiLCJwcmljZU91dCIsIlByb2R1Y3RJdGVtIiwiYWN0aW9uc1VwZGF0ZVNob3BDYXJ0TW9kZWwiLCJ1cGRhdGVTaG9wQ2FydE1vZGVsIiwiYWN0aW9uc1Nob3BDYXJ0Iiwic2hvcENhcnRNb2RlbCIsImFjdGlvbnNQTSIsImRlYWxJbWdVcmwiLCJpbWciLCJ1cmwiLCJ3ZWlnaHQiLCJ1bml0IiwibnVtIiwiZ2V0TGlzdCIsIlJvd0JveCIsIkltZyIsIkxlZnRCb3giLCJUaXAiLCJQcmljZSIsIkJ1biIsIlByb2R1Y3RJdGVtT25lUm93Iiwic3VtT3JkZXJUaXAiLCJoaWRlQWN0aW9uIiwic2hvd1N1bU9yZGVyIiwic3VtT3JkZXIiLCJHcm91cEJveCIsIkdyb3VwSW1nIiwiUmlnaHRCb3giLCJNYXJrZXRQcmljZSIsIk91dFByaWNlIiwiU3RhciIsIk9yZGVyVGlwIiwiR3JvdXBQcm9kdWN0SXRlbSIsImdyb3VwUXVldWUiLCJncm91cFJlbWFyayIsImdyb3VwQW1vdW50IiwiZ3JvdXBBbW91bnRVbml0U3RyaW5nIiwiZ3JvdXBQcmVjaXNpb25TdHJpbmciLCJncm91cFByZWNpc2lvbiIsImkiLCJzdW1GaWxsQW1vdW50IiwiZm9ybSIsInNldEZvcm0iLCJGb290ZXIiLCJVcGRhdGVTaG9wQ2FydCIsInN0YXRlVXBkYXRlU2hvcENhcnRNb2RlbCIsImV2ZW50IiwidGFyZ2V0IiwiSGVhZGVyIiwiUmVnaXN0ZXJIZWFkZXIiLCJTaG9wcGluZ0NhcnRJY29uQnV0dG9uIiwiaHRtbENvbG9yIiwic3RhdGVTaG9wQ2FydCIsImNhcnQiLCJkZWFsUHJvZHVjdE51bWJlciIsIkN1c0Nhcm91c2VsIiwiZGF0YUxpc3QiLCJvbkNsaWNrSXRlbSIsIml0ZW0iLCJpbWdVcmwiLCJmcmFnbWVudCIsIkNhdGVnb3J5RmllbGRzIiwiZ3FsIiwiVXNlckZpZWxkcyIsIlVzZXJJbmZvRmllbGRzIiwiT3JkZXJJbmZvRmllbGRzIiwiUk9yZGVyUHJvZHVjdEZpZWxkcyIsIlByb2R1Y3RGaWVsZHMiLCJJbWdGaWVsZHMiLCJVc2VyQWRkcmVzc0ZpZWxkcyIsIlVzZXJQYXlDYXJkRmllbGRzIiwiU2hvcENhcnRGaWVsZHMiLCJEYXRhQ29uZmlnRmllbGRzIiwiRGljdEZpZWxkcyIsIkdyb3VwUXVldWVGaWVsZHMiLCJHcm91cE9yZGVyRmllbGRzIiwiUHJvbW9Db2RlRmllbGRzIiwiZ2V0VXNlckxpc3REb2MiLCJnZXREYXRhQ29uZmlnIiwiaG9tZUNhcm91c2VsSW1ncyIsImNhdGVnb3J5TGlzdCIsInJlZ2lzdGVyVXNlciIsImxvZ2luIiwib25lVXNlciIsIm9yZGVyTGlzdCIsIm9yZGVyRGV0YWlsIiwiRGljdFR5cGVFbnVtIiwiU2VsZkFkZHJlc3MiLCJ1cGRhdGVQYXNzd29yZCIsInBheUNhcmRMaXN0T25lVXNlciIsInVzZXJQYXlDYXJkIiwic2F2ZVVzZXJQYXlDYXJkIiwic2V0VXNlclBheUNhcmREZWZhdWx0IiwicGlja3VwQWRkcmVzcyIsInVwZGF0ZVVzZXJJbmZvIiwidXNlckFkZHJlc3NMaXN0T25lVXNlciIsInVzZXJBZGRyZXNzIiwic2F2ZVVzZXJBZGRyZXNzIiwic2V0VXNlckFkZHJlc3NEZWZhdWx0IiwicHJvZHVjdHNJbkNhdGVnb3J5IiwiY2F0ZWdvcnlMZXZlbCIsIm9uZUNhdGVnb3J5IiwicHJvZHVjdExpc3QiLCJ1c2VyU2hvcENhcnRMaXN0Iiwib3JkZXJDb25maXJtSW5mbyIsIkZyZWlnaHQiLCJzYXZlT3JkZXIiLCJkaWN0TGlzdCIsImxpbWl0VGltZURhdGEiLCJQcm9tb3Rpb25GbGFzaFNhbGUiLCJwcm9kdWN0TGlzdEJ5SWRzIiwiZ3JvdXBRdWV1ZUxpc3QiLCJ1cGRhdGVPcmRlciIsInNhdmVHcm91cE9yZGVyIiwicHJvbW9Db2RlTGlzdCIsImNhdGVnb3J5Um9vdFBhcmVudCIsInByb2R1Y3RMaXN0T3JkZXJCeU9yZGVyIiwic2VhcmNoRGF0YSIsIlByb21vQ29kZVR5cGVFbnVtIiwiRGFyZW5DYXJkIiwiUHJvbW9Db2RlIiwiRGlzY291bnRUeXBlRW51bSIsIlNTIiwiRGlzY291bnRDb25kaXRpb25FbnVtIiwiUHJvZHVjdFN1cHBsZW1lbnQiLCJQcm9kdWN0U3VwcGxlbWVudFN0cmluZyIsIk9yZGVyU3RhdGUiLCJfcyIsIm9yZGVyU3RhdGVUb1N0cmluZyIsInMiLCJSZWxhdGVkT2JqVHlwZUVudW0iLCJBcHBNb2R1bGVUeXBlRW51bSIsIkNhdGVnb3J5Um9vdE5hbWUiLCJvcmRlclN0YXRlS2V5cyIsInZhbHVlcyIsIlByb3ZpbmNlRGF0YSIsImdldFBpY2tVcFR5cGVOYW1lIiwiU2VsZiIsIkRlbGl2ZXJ5IiwiUGlja1VwVHlwZUVudW0iLCJTYWxlUmFua1R5cGVFbnVtIiwiT25lRGF5IiwiT25lV2VlayIsIk9uZU1vbnRoIiwiZnBTZXRQcmUiLCJpc0RldiIsImNvbnNvbGUiLCJsb2ciLCJpbWdEb21haW4iLCJzcmMiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZ2V0SXRlbSIsImdldE9iamVjdFVSTCIsImZpbGUiLCJ3aW5kb3ciLCJjcmVhdGVPYmplY3RVUkwiLCJVUkwiLCJ3ZWJraXRVUkwiLCJwYXJzZUZsb2F0Rm9ySW5wdXQiLCJwYXJzZUZsb2F0Iiwib3JpZ2luIiwiY2xvbmVEZWVwIiwib2xkRGF0YSIsImdldCIsInNldCIsImRlbGF5IiwidGltZSIsInNldFRpbWVvdXQiLCJjdXN0b21pemVyIiwib2JqVmFsdWUiLCJzcmNWYWx1ZSIsIm5ld1ZhbHVlIiwibWVyZ2VXaXRoIiwiZnBSZW1vdmUiLCJhcnIiLCJkZWFsTnVtYmVyWmVybyIsImZpbGwiLCJqb2luIiwiZm9ybWF0RGF0ZSIsImRhdGUiLCJmb3JtYXRTdHJpbmciLCJpc1N0cmluZyIsImZvcm1hdCIsIkRhdGUiLCJ1c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zIiwidXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zIiwiaXNOYU4iLCJkZWFsTm9uQm9vbGVhblByb3BzIiwiZm9ybWF0TW9uZXkiLCJhbW91bnQiLCJkZWNpbWFsQ291bnQiLCJkZWNpbWFsIiwidGhvdXNhbmRzIiwiTWF0aCIsImFicyIsIm5lZ2F0aXZlU2lnbiIsInBhcnNlSW50IiwiTnVtYmVyIiwidG9GaXhlZCIsImoiLCJzdWJzdHIiLCJyZXBsYWNlIiwiZGVhbE1heWJlTnVtYmVyIiwiZGVhbFVybFF1ZXJ5IiwicXVlcnlPYmoiLCJTaG9wQ2FydFByb2R1Y3RCb3giLCJDYXJ0UHJvZHVjdCIsImFjdGlvbnNTQ00iLCJzdGF0ZVNDTSIsInJlbWFyayIsImlzTmV4dCIsIm1hcmdpblJpZ2h0IiwiaXNEZWxldGUiLCJpbnB1dFByb21vQ29kZU1vZGVsIiwicHJvbW9Db2RlIiwiSW5wdXRQcm9tb0NvZGVEaWFsb2ciLCJhY3Rpb25zSW5wdXRQcm9tb0NvZGVNb2RlbCIsInN0YXRlSW5wdXRQcm9tb0NvZGVNb2RlbCIsInRlc3RSZXMiLCJzZWxlY3RBZGRyZXNzTW9kZWwiLCJBZGRyZXNzQm94IiwiU2VsZWN0QWRkcmVzcyIsInN0YXRlU0FNIiwiYWN0aW9uc1NBTSIsInN0YXRlU2hvcENhcnRNb2RlbCIsImFjdGlvbnNTaG9wQ2FydE1vZGVsIiwiYWRkcmVzc0xpc3QiLCJkZWFsQWRkcmVzc0xpc3QiLCJjb21iaW5lQWRkcmVzcyIsImNvbnRhY3RJbmZvcm1hdGlvbiIsImFkZHJlc3NJZCIsInBpY2tVcFR5cGUiLCJzZWxlY3RDYXJkTW9kZWwiLCJDYXJkQm94IiwiU2VsZWN0Q2FyZCIsInN0YXRlU2VsZWN0Q2FyZCIsImFjdGlvbnNTZWxlY3RDYXJkIiwicGF5Q2FyZExpc3QiLCJwYXltZW50TWV0aG9kQ2FyZElkIiwicGFnZVR5cGVFbnVtIiwib3JkZXIiLCJpbml0Rm9ybSIsImRlZHVjdENvaW4iLCJzYWxlVGF4IiwidHJhbnNwb3J0YXRpb25Db3N0cyIsImNvdXBvbkRpc2NvdW50IiwicHJvbW9Db2RlRXJyb3IiLCJ1c2VyQWRkcmVzc0xpc3QiLCJzZWxmQWRkcmVzcyIsImZyZWlnaHRDb25maWciLCJ1c2VyTGV2ZWxMaXN0IiwicGFnZVR5cGUiLCJzaG9wQ2FydExpc3QiLCJzaG9wQ2FydExpc3ROZXh0IiwiY3VyIiwicHJvdmluY2UiLCJjaXR5Iiwic3RyZWV0QWRkcmVzcyIsImZ1bGxOYW1lIiwicGhvbmUiLCJkZWFsQWRkcmVzc0RhdGEiLCJmaW5kIiwiaW5pdEFkZHJlc3NJZCIsImlzRGVmYXVsdCIsImRlYWxQcm9kdWN0VG90YWwiLCJkZWFsVHJhbnNwb3J0YXRpb25Db3N0cyIsInByb2R1Y3RUb3RhbCIsImZyZWlnaHRQYXkiLCJvcmRlck1heCIsImNsZWFyRGF0YSIsImNsZWFyRm9ybSIsInVzZXJSZXMiLCJkZWFsUHJvbW9Db2RlIiwicHJvbW9Db2RlSXRlbUlucHV0IiwidXBkYXRlUGFnZVR5cGUiLCJ1cGRhdGVQYXlDYXJkTGlzdCIsImdldE9yZGVySW5mbyIsImxpc3QiLCJmcmVpZ2h0TGlzdCIsInN1Ym1pdCIsIm9yZGVySW5mb0l0ZW1JbnB1dCIsInRlc3RQcm9tb0NvZGUiLCJDYXJ0UGFnZSIsIlNob3BUaXRsZSIsIlNob3BUb3RhbCIsIkZvb3RlckZpdCIsIk9yZGVyUGFnZSIsImFkZHJlc3NEYXRhIiwiY2FyZERhdGEiLCJhY3R1YWxseVBhaWQiLCJnZW5lcmF0ZUNvaW4iLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9yZGVyQ29pbkN1cnJlbnRNb250aCIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsInVzZXJJbmZvIiwidXNlckxldmVsIiwic3VibWl0RGF0YSIsInN1YnRvdGFsIiwiY3VycmVudFVzZXJMZXZlbCIsInJPcmRlclByb2R1Y3QiLCJjb3VudCIsInByb2R1Y3RJZCIsIl9xdWVyeSIsIm9yZGVySWQiLCJCb3hDb250YWluIiwic2VjdGlvbiIsIk1vbmV5IiwiRml4Rm9vdGVyIiwiU2hvcENhcnRQYWdlIiwicHJvZHVjdE51bWJlciIsInByb2R1Y3RTdWJ0b3RhbCIsImRpc2NvdW50UHJvZHVjdCIsImNhdGVnb3J5IiwicGFyZW50Q2F0ZWdvcnkiLCJwcm9kdWN0Q2F0ZWdvcnkiLCJkaXNjb3VudFByb2R1Y3RBbW91bnQiLCJwcmV2aW91c1ZhbHVlIiwiY3VycmVudFZhbHVlIiwiZGlzY291bnRBbW91bnRGb3JQcm9tb0NvZGUiLCJkaXNjb3VudENvbmRpdGlvbiIsIk5vIiwiQW1vdW50IiwiZGlzY291bnRDb25kaXRpb25BbW91bnQiLCJkaXNjb3VudFR5cGUiLCJkaXNjb3VudEFtb3VudCIsImFsbFRvdGFsIiwiQ2xvc2VJY29uIiwicGFkZGluZ1RvcCIsInRleHRBbGlnbiIsImhvbWVDYXJvdXNlbE1vZGVsIiwiZ2V0SG9tZUNhcm91c2VsIiwicmVzMiIsIkhvbWVDYXJvdXNlbCIsIl9fdHlwZW5hbWUiLCJyZXN0IiwiaG9tZUNhcm91c2VsRGF0YUNvbWZpZyIsImhvbWVDYXRlZ29yeVNlbGVjdGlvbl9saXN0RGF0YSIsImFwcE1vZHVsZUNvbmZpZyIsImFwcE1vZHVsZSIsImxpbWl0VGltZSIsIm1heUxpa2UiLCJzYWxlc1JhbmsiLCJ0aGVtZVNlbGVjdGlvbiIsImNhdGVnb3J5U2VsZWN0aW9uIiwibGluZVJhbmtpbmciLCJ0b3BSYW5raW5nIiwiYWN0aW9uc0hvbWVDYXJvdXNlbE1vZGVsIiwic3RhdGVIb21lQ2Fyb3VzZWxNb2RlbCIsImFjdGlvbnNIb21lVGFicyIsImhvbWVUYWJzTW9kZWwiLCJnZXREYXRhIiwic2V0SG9tZVR5cGUiLCJob21lQ2F0ZWdvcnlTZWxlY3Rpb25Nb2RlbCIsImxpc3REYXRhIiwidG90YWwiLCJDYXRlZ29yeVNlbGVjdGlvbiIsImhvbWVDYXRlZ29yeVNlbGVjdGlvblN0YXRlIiwiaG9tZUNhdGVnb3J5U2VsZWN0aW9uQWN0aW9ucyIsImhzR2V0TG9hZCIsImhvbWVUYWJzU3RhdGUiLCJMaW5lUmFua2luZ01vZGVsIiwiTGluZVJhbmtpbmciLCJhY3Rpb25zTGluZVJhbmtpbmdNb2RlbCIsInN0YXRlTGluZVJhbmtpbmdNb2RlbCIsInNvcnQiLCJhIiwiYiIsImdldE5vd1NhbGUiLCJub3ciLCJnZXRUaW1lIiwic2FsZU9uZSIsInN0YXJ0VGltZSIsImVuZFRpbWUiLCJwcm9tb3Rpb25GbGFzaFNhbGVNb2RlbCIsIm5vd0xpbWl0RGF0YSIsIm5vd1NhbGVEYXRhIiwicHJvZHVjdFJlcyIsImlkcyIsInNlbGVjdFByb2R1Y3RMaXN0Iiwic3RhdGVQcm9tb3Rpb25GbGFzaFNhbGUiLCJhY3Rpb25zUHJvbW90aW9uRmxhc2hTYWxlIiwiZGlmZmVyZW5jZUluSG91cnMiLCJkaWZmZXJlbmNlSW5NaW51dGVzIiwiU2FsZXNSYW5rTW9kZWwiLCJvcmRlckJ5VHlwZSIsInRhYkNoYW5nZSIsInNhbGVzUmFua1R5cGUiLCJTYWxlUmFua1R5cGVFbnVtTGFiZWwiLCJTYWxlc1JhbmsiLCJhY3Rpb25zU2FsZXNSYW5rTW9kZWwiLCJzdGF0ZVNhbGVzUmFua01vZGVsIiwicHJvZHVjdElucHV0IiwiaXNHcm91cCIsIm9uQ2hhbmdlIiwic2hhbGxvdyIsIkFwcE1vZHVsZSIsIkhvbWVUYWJzIiwiaG9tZVRhYnNBY3Rpb25zIiwiaXNFbXB0eSIsInRoZW1lU2VsZWN0aW9uTW9kZWwiLCJ0aGVtZVNlbGVjdGlvbkRhdGEiLCJwcm9kdWN0TGlzdEZvclRoZW1lIiwiUHJvbW90aW9uVGhlbWVTZWxlY3QiLCJ0aGVtZUxpc3QiLCJ2MSIsIlRoZW1lIiwiUHJvZHVjdExpc3QiLCJUaGVtZVNlbGVjdGlvbiIsImxvZ291dCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7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Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsaUU7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsaUQ7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsNkMiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGdyb3VwXFxbYXBwTW9kdWxlXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtIb21lQXBwTW9kdWxlLCBIb21lVHlwZX0gZnJvbSAnLi4vLi4vdXRpbHMvdmlldy9ob21lL2FwcE1vZHVsZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVBcHBNb2R1bGUoSG9tZVR5cGUuZ3JvdXApXHJcblxyXG4vLyBleHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSAoKSA9PiB7XHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIHBhdGhzOiBbQXBwTW9kdWxlVHlwZUVudW0uY2F0ZWdvcnlTZWxlY3Rpb24sIEFwcE1vZHVsZVR5cGVFbnVtLmxpbmVSYW5raW5nLCBBcHBNb2R1bGVUeXBlRW51bS50b3BSYW5raW5nXS5tYXAodiA9PiAoe1xyXG4vLyAgICAgICBwYXJhbXM6IHtcclxuLy8gICAgICAgICBhcHBNb2R1bGU6IHYsXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICB9KSksXHJcbi8vICAgICBmYWxsYmFjazogdHJ1ZSxcclxuLy8gICB9XHJcbi8vIH1cclxuLy8gZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gaW5pdFxyXG4iLCJcclxudHlwZSBNb2RlbEZhY3Rvcnk8TiA9ICcnPiA9IDxULCBFIGV4dGVuZHMgTW9kZWxBY3Rpb25PYmpIZWxwPGFueSwgVCAmIEZldGNoT2JqPj4obmFtZTogc3RyaW5nLCBzdGF0ZTogVCwgYWN0aW9uczogRSkgPT4gTW9kZWxEYXRhPFQgJiBGZXRjaE9iaiwgRT5cclxuXHJcbmV4cG9ydCBjb25zdCBiYXNlQWN0aW9uT3B0aW9uOiBCYXNlTW9kZWxBY3Rpb25PcHRpb24gPSB7XHJcbiAgZGF0YTogbnVsbCxcclxuICBtdXRhdGU6ICgpID0+IHt9LFxyXG4gIG5vdGljZTogKCkgPT4ge30sXHJcbiAgcXVlcnk6ICgpID0+IHt9LFxyXG4gIHNldERhdGE6ICgpID0+IHt9LFxyXG4gIHN0b3JlOiB7fVxyXG59XHJcblxyXG5jb25zdCBtb2RlbE5hbWVMaXN0OnN0cmluZ1tdID0gW11cclxuZXhwb3J0IGNvbnN0IG1vZGVsRmFjdG9yeTogTW9kZWxGYWN0b3J5ID0gKG5hbWUsIHN0YXRlLCBhY3Rpb25zKSA9PiB7XHJcbiAgaWYgKG1vZGVsTmFtZUxpc3QuaW5jbHVkZXMobmFtZSkpIHtcclxuICAgIHRocm93IEVycm9yKGBtb2RlbCBOYW1lIGR1cGxpY2F0ZTogJHtuYW1lfWApXHJcbiAgfVxyXG4gIG1vZGVsTmFtZUxpc3QucHVzaChuYW1lKVxyXG4gIHJldHVybiB7XHJcbiAgICBuYW1lLFxyXG4gICAgc3RhdGU6IHtcclxuICAgICAgLi4uc3RhdGUsXHJcbiAgICAgIGZldGNoTG9hZDoge30sXHJcbiAgICAgIGZldGNoRXJyb3I6IHt9LFxyXG4gICAgfSxcclxuICAgIGFjdGlvbnMsXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VNb2RlbDxBIGV4dGVuZHMgRmV0Y2hPYmosIEIgZXh0ZW5kcyBNb2RlbEFjdGlvbk9iakhlbHA8YW55LCBBPiwgQywgRCBleHRlbmRzIE1vZGVsQWN0aW9uT2JqSGVscDxhbnksIEEgJiBDPj4obW9kZWw6IHtcclxuICBzdGF0ZTogQVxyXG4gIGFjdGlvbnM6IEJcclxuICBuYW1lOiBzdHJpbmdcclxufSwgbmFtZTogc3RyaW5nLCBzdGF0ZTogQywgYWN0aW9uczogRCk6IHtcclxuICBzdGF0ZTogQSAmIENcclxuICBhY3Rpb25zOiBCICYgRCAmIHtcclxuICAgIFtrZXkgaW4ga2V5b2YgQl06IE1vZGVsQWN0aW9uPGFueSwgQT5cclxuICB9ICYge1xyXG4gICAgW2tleSBpbiBrZXlvZiBEXTogTW9kZWxBY3Rpb248YW55LCBBICYgQz5cclxuICB9XHJcbiAgbmFtZTogc3RyaW5nXHJcbn0ge1xyXG4gIE9iamVjdC5rZXlzKG1vZGVsLnN0YXRlKS5mb3JFYWNoKHZhbHVlID0+IHtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIGlmIChzdGF0ZT8uW3ZhbHVlXSAmJiAhWydmZXRjaEVycm9yJywgJ2ZldGNoTG9hZCddLmluY2x1ZGVzKHZhbHVlKSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYG1lcmdlTW9kZWw6IHN0YXRlIGR1cGxpY2F0ZTo6IGtleSAke3ZhbHVlfWApXHJcbiAgICB9XHJcbiAgfSlcclxuICBPYmplY3Qua2V5cyhtb2RlbC5hY3Rpb25zKS5mb3JFYWNoKHZhbHVlID0+IHtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIGlmIChhY3Rpb25zPy5bdmFsdWVdKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgbWVyZ2VNb2RlbDogYWN0aW9uIGR1cGxpY2F0ZTo6IGtleSAke3ZhbHVlfWApXHJcbiAgICB9XHJcbiAgfSlcclxuICBjb25zdCBtZXJnZU5hbWUgPSBgJHtuYW1lfV93aXRoXyR7bW9kZWwubmFtZX1gXHJcbiAgaWYgKG1vZGVsTmFtZUxpc3QuaW5jbHVkZXMobWVyZ2VOYW1lKSkge1xyXG4gICAgdGhyb3cgRXJyb3IoYG1vZGVsIE5hbWUgZHVwbGljYXRlOiAke21lcmdlTmFtZX1gKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIG5hbWU6IG1lcmdlTmFtZSxcclxuICAgIHN0YXRlOiB7XHJcbiAgICAgIC4uLm1vZGVsLnN0YXRlLFxyXG4gICAgICAuLi5zdGF0ZSxcclxuICAgIH0sXHJcbiAgICBhY3Rpb25zOiB7XHJcbiAgICAgIC4uLm1vZGVsLmFjdGlvbnMsXHJcbiAgICAgIC4uLmFjdGlvbnMsXHJcbiAgICB9LFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlVHdvTW9kZWw8QSwgQiBleHRlbmRzIE1vZGVsQWN0aW9uT2JqSGVscDxhbnksIEE+LCBDLCBEIGV4dGVuZHMgTW9kZWxBY3Rpb25PYmpIZWxwPGFueSwgQz4+KG1vZGVsOiB7XHJcbiAgc3RhdGU6IEFcclxuICBhY3Rpb25zOiBCXHJcbiAgbmFtZTogc3RyaW5nXHJcbn0sIG1vZGVsVDoge1xyXG4gIHN0YXRlOiBDXHJcbiAgYWN0aW9uczogRFxyXG4gIG5hbWU6IHN0cmluZ1xyXG59KToge1xyXG4gIG5hbWU6IHN0cmluZ1xyXG4gIHN0YXRlOiBBICYgQ1xyXG4gIGFjdGlvbnM6IEIgJiBEICYge1xyXG4gICAgW2tleSBpbiBrZXlvZiBCXTogTW9kZWxBY3Rpb25cclxuICB9ICYge1xyXG4gICAgW2tleSBpbiBrZXlvZiBEXTogTW9kZWxBY3Rpb25cclxuICB9XHJcbn0ge1xyXG4gIE9iamVjdC5rZXlzKG1vZGVsLnN0YXRlKS5mb3JFYWNoKHZhbHVlID0+IHtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIGlmIChtb2RlbFQuc3RhdGU/Llt2YWx1ZV0gJiYgIVsnZmV0Y2hFcnJvcicsICdmZXRjaExvYWQnXS5pbmNsdWRlcyh2YWx1ZSkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBtZXJnZVR3b01vZGVsOiBzdGF0ZSBkdXBsaWNhdGU6OiBrZXkgJHt2YWx1ZX1gKVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgT2JqZWN0LmtleXMobW9kZWwuYWN0aW9ucykuZm9yRWFjaCh2YWx1ZSA9PiB7XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBpZiAobW9kZWxUPy5hY3Rpb25zPy5bdmFsdWVdKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgbWVyZ2VUd29Nb2RlbDogYWN0aW9uIGR1cGxpY2F0ZTo6IGtleSAke3ZhbHVlfWApXHJcbiAgICB9XHJcbiAgfSlcclxuICBjb25zdCBtZXJnZU5hbWUgPSBgJHttb2RlbC5uYW1lfV9hbmRfJHttb2RlbFQubmFtZX1gXHJcbiAgaWYgKG1vZGVsTmFtZUxpc3QuaW5jbHVkZXMobWVyZ2VOYW1lKSkge1xyXG4gICAgdGhyb3cgRXJyb3IoYG1vZGVsIE5hbWUgZHVwbGljYXRlOiAke21lcmdlTmFtZX1gKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIG5hbWU6IG1lcmdlTmFtZSxcclxuICAgIHN0YXRlOiB7XHJcbiAgICAgIC4uLm1vZGVsLnN0YXRlLFxyXG4gICAgICAuLi5tb2RlbFQuc3RhdGUsXHJcbiAgICB9LFxyXG4gICAgYWN0aW9uczoge1xyXG4gICAgICAuLi5tb2RlbC5hY3Rpb25zLFxyXG4gICAgICAuLi5tb2RlbFQuYWN0aW9ucyxcclxuICAgIH0sXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbWVyZ2VUaHJlZU1vZGVsID0gPEEgZXh0ZW5kcyBGZXRjaE9iaiwgVCBleHRlbmRzIE1vZGVsQWN0aW9uT2JqSGVscDxhbnksIEE+LCBCIGV4dGVuZHMgRmV0Y2hPYmosIE8gZXh0ZW5kcyBNb2RlbEFjdGlvbk9iakhlbHA8YW55LCBCPiwgQyBleHRlbmRzIEZldGNoT2JqLCBQIGV4dGVuZHMgTW9kZWxBY3Rpb25PYmpIZWxwPGFueSwgQz4+KG1vZGVsQTogTW9kZWxEYXRhPEEsIFQ+LCBtb2RlbEI6IE1vZGVsRGF0YTxCLCBPPiwgbW9kZWxDOiBNb2RlbERhdGE8QywgUD4pOiB7XHJcbiAgbmFtZTogc3RyaW5nXHJcbiAgc3RhdGU6IEEgJiBCICYgQ1xyXG4gIGFjdGlvbnM6IFQgJiBPICYgUCAmIHtcclxuICAgIFtrZXkgaW4ga2V5b2YgVF06IE1vZGVsQWN0aW9uXHJcbiAgfSAmIHtcclxuICAgIFtrZXkgaW4ga2V5b2YgT106IE1vZGVsQWN0aW9uXHJcbiAgfSAmIHtcclxuICAgIFtrZXkgaW4ga2V5b2YgUF06IE1vZGVsQWN0aW9uXHJcbiAgfVxyXG59ID0+IHtcclxuICByZXR1cm4gbWVyZ2VUd29Nb2RlbChtZXJnZVR3b01vZGVsKG1vZGVsQSwgbW9kZWxCKSwgbW9kZWxDKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbWVyZ2VMaXN0TW9kZWwgPSAobW9kZWxMaXN0OiBNb2RlbERhdGE8YW55LCBhbnk+W10pID0+IHtcclxuICByZXR1cm4gbW9kZWxMaXN0LnNsaWNlKDEpLnJlZHVjZSgoYWNjLCBtb2RlbCkgPT4gbWVyZ2VUd29Nb2RlbChhY2MsIG1vZGVsKSwgbW9kZWxMaXN0WzBdKVxyXG59XHJcblxyXG5jb25zdCBpbml0TGlzdDogc3RyaW5nW10gPSBbXVxyXG5leHBvcnQgY29uc3QgaW5pdE1vZGVsID0gPFQgZXh0ZW5kcyBGZXRjaE9iaiwgRSBleHRlbmRzIE1vZGVsQWN0aW9uT2JqSGVscDxhbnksIFQ+Pihtb2RlbDogTW9kZWxEYXRhPFQsIEU+LCBpbml0U3RhdGU6IFBhcnRpYWw8VD4pID0+IHtcclxuICBpZiAoaW5pdExpc3QuaW5jbHVkZXMobW9kZWwubmFtZSkpIHJldHVyblxyXG4gIGluaXRMaXN0LnB1c2gobW9kZWwubmFtZSlcclxuICBtb2RlbC5zdGF0ZSA9IHtcclxuICAgIC4uLm1vZGVsLnN0YXRlLFxyXG4gICAgLi4uaW5pdFN0YXRlLFxyXG4gIH1cclxufVxyXG5cclxuLy8gY29uc3QgbW9kZWwgPSBtb2RlbEZhY3Rvcnkoe30sIHtcclxuLy8gICBzczoge1xyXG4vLyAgICAgZWVlOiAodmFsdWU6IHN0cmluZywgb3B0aW9uKSA9PiB7XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4vLyB9KVxyXG4vL1xyXG4vLyB1c2VTdG9yZU1vZGVsKE1vZHVsZUVudW0uVGVzdCwgbW9kZWwpLmFjdGlvbnMuc3MuZWVlKCcnKVxyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIG1lcmdlSW50b01vZGVsKG9yaWdpbk1vZGVsLCBuYW1lLCBpbm5lck1vZGVsKSB7XHJcbi8vXHJcbi8vIH1cclxuXHJcbi8vIGNvbnN0IF9tb2RlbCA9IG1lcmdlVHdvTW9kZWwobW9kZWxGYWN0b3J5KHtcclxuLy8gICB0MTogJydcclxuLy8gfSwge1xyXG4vLyB9KSwgbW9kZWxGYWN0b3J5KHtcclxuLy8gICB0MzogJydcclxuLy8gfSwge1xyXG4vLyB9KSlcclxuLy9cclxuLy8gbWVyZ2VNb2RlbChfbW9kZWwsIHtcclxuLy8gICB0MjogJydcclxuLy8gfSwge1xyXG4vLyB9KVxyXG4iLCJpbXBvcnQge3VzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQge2dyYXBoUUxNdXRhdGUsIGdyYXBoUUxRdWVyeX0gZnJvbSAnLi4vY2xpZW50J1xyXG5pbXBvcnQge2Jhc2VBY3Rpb25PcHRpb259IGZyb20gJy4vbW9kZWxVdGlsJ1xyXG5cclxuZXhwb3J0IGNvbnN0IG9yaWdpblN0b3JlOiBPcmlnaW5TdG9yZSA9IHt9XHJcblxyXG5jb25zdCBpc0Z1bmN0aW9uID0gKGZ1bmN0aW9uVG9DaGVjazogYW55KSA9PiB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uVG9DaGVjayAmJiB7fS50b1N0cmluZy5jYWxsKGZ1bmN0aW9uVG9DaGVjaykgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSdcclxufVxyXG5cclxudHlwZSBTdG9yZVN0YXRlUmVzdWx0PFQsIEUgZXh0ZW5kcyBNb2RlbEFjdGlvbk9iakhlbHA8YW55LCBUPj4gPSBNb2RlbFJlc3VsdDxULCBFPiAmIHtcclxuICBzdG9yZTogT3JpZ2luU3RvcmVcclxuICBnZXRMb2FkOiAocXVlcnk6IGFueSkgPT4gbnVtYmVyXHJcbn1cclxuXHJcbnR5cGUgVXNlTW9kZWxTdGF0ZSA9IDxUIGV4dGVuZHMgRmV0Y2hPYmosIEUgZXh0ZW5kcyBNb2RlbEFjdGlvbk9iakhlbHA8YW55LCBUPj4obW9kZWw6IE1vZGVsRGF0YTxULCBFPiwga2V5Pzogc3RyaW5nIHwgW3N0cmluZywgc3RyaW5nXSkgPT4gU3RvcmVTdGF0ZVJlc3VsdDxULCBFPlxyXG5cclxuZXhwb3J0IGNvbnN0IGRlYWxOYW1lU3BhY2UgPSAoa2V5OiBzdHJpbmcsIG5hbWVTcGFjZTogc3RyaW5nKSA9PiB7XHJcbiAgaWYgKG5hbWVTcGFjZSkge1xyXG4gICAgcmV0dXJuIGAke2tleX1fJHtuYW1lU3BhY2V9YFxyXG4gIH1cclxuICByZXR1cm4gYCR7a2V5fWBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVN0b3JlTW9kZWw6IFVzZU1vZGVsU3RhdGUgPSAobW9kZWwsIGtleT86IHN0cmluZyB8IFtzdHJpbmcsIHN0cmluZ10pID0+IHtcclxuICBjb25zdCBfa2V5ID0gbW9kZWwubmFtZSA/PyAoIWtleSA/ICcnIDogQXJyYXkuaXNBcnJheShrZXkpID8gZGVhbE5hbWVTcGFjZShrZXlbMF0sIGtleVsxXSkgOiBrZXkpXHJcbiAgY29uc3Qge2FjdGlvbnMsIHN0YXRlfSA9IG1vZGVsXHJcbiAgY29uc3QgWywgc2V0U3RhdGVdID0gdXNlU3RhdGUoT2JqZWN0LmNyZWF0ZShudWxsKSlcclxuICBpZiAoIV9rZXkpIHtcclxuICAgIHRocm93IEVycm9yKCdubyBrZXknKVxyXG4gIH1cclxuICBpZiAoIW9yaWdpblN0b3JlW19rZXldKSB7XHJcbiAgICBvcmlnaW5TdG9yZVtfa2V5XSA9IHtcclxuICAgICAga2V5czogX2tleSxcclxuICAgICAgc3RhdGUsXHJcbiAgICAgIGFjdGlvbnM6IHt9LFxyXG4gICAgICBzZXREYXRhOiBbXVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBub3RpY2UgPSB1c2VDYWxsYmFjaygoZGF0YTogYW55KSA9PiB7XHJcbiAgICBvcmlnaW5TdG9yZVtfa2V5XS5zZXREYXRhLmZvckVhY2godmFsdWUgPT4ge1xyXG4gICAgICB2YWx1ZT8uKGRhdGEpXHJcbiAgICB9KVxyXG4gIH0sIFtfa2V5XSlcclxuICBjb25zdCBzZXREYXRhOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjx0eXBlb2Ygc3RhdGU+PiA9IHVzZUNhbGxiYWNrKChkYXRhKSA9PiB7XHJcbiAgICBjb25zdCBvbGRTdGF0ZSA9IG9yaWdpblN0b3JlW19rZXldLnN0YXRlXHJcbiAgICBjb25zdCBuZXdEYXRhID0gaXNGdW5jdGlvbihkYXRhKSA/IChkYXRhIGFzICh2OiB0eXBlb2Ygb2xkU3RhdGUpID0+IHZvaWQpKG9sZFN0YXRlKSA6IGRhdGFcclxuICAgIG9yaWdpblN0b3JlW19rZXldLnN0YXRlID0gbmV3RGF0YVxyXG4gICAgbm90aWNlKG5ld0RhdGEpXHJcbiAgfSwgW19rZXksIG5vdGljZV0pXHJcblxyXG4gIGNvbnN0IHNldExvYWQgPSB1c2VDYWxsYmFjaygocXVlcnk6IGFueSwgZmxhZzogYm9vbGVhbikgPT4ge1xyXG4gICAgc2V0RGF0YShwcmV2U3RhdGUgPT4gKHtcclxuICAgICAgLi4ucHJldlN0YXRlLFxyXG4gICAgICBmZXRjaExvYWQ6IHtcclxuICAgICAgICAuLi5wcmV2U3RhdGUuZmV0Y2hMb2FkID8/IHt9LFxyXG4gICAgICAgIFtxdWVyeT8ubG9jPy5zb3VyY2U/LmJvZHldOiBmbGFnLFxyXG4gICAgICB9XHJcbiAgICB9KSlcclxuICB9LCBbc2V0RGF0YV0pXHJcbiAgY29uc3Qgc2V0RXJyb3IgPSB1c2VDYWxsYmFjaygocXVlcnk6IGFueSwgZXJyOiBhbnkpID0+IHtcclxuICAgIHNldERhdGEocHJldlN0YXRlID0+ICh7XHJcbiAgICAgIC4uLnByZXZTdGF0ZSxcclxuICAgICAgZmV0Y2hFcnJvcjoge1xyXG4gICAgICAgIC4uLnByZXZTdGF0ZS5mZXRjaEVycm9yID8/IHt9LFxyXG4gICAgICAgIFtxdWVyeT8ubG9jPy5zb3VyY2U/LmJvZHldOiBlcnIsXHJcbiAgICAgIH1cclxuICAgIH0pKVxyXG4gIH0sIFtzZXREYXRhXSlcclxuXHJcbiAgY29uc3QgcXVlcnk6IEdyYXBocWxRdWVyeSA9IHVzZUNhbGxiYWNrKGFzeW5jIChxdWVyeSwgcGFyYW1zLCBvcHRpb24pID0+IHtcclxuICAgIHNldExvYWQocXVlcnksIHRydWUpXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBncmFwaFFMUXVlcnkoKShxdWVyeSwgcGFyYW1zLCBvcHRpb24pLmNhdGNoKGUgPT4ge1xyXG4gICAgICBzZXRFcnJvcihxdWVyeSwgZSlcclxuICAgIH0pLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkKHF1ZXJ5LCBmYWxzZSlcclxuICAgIH0pIGFzIGFueVxyXG4gICAgcmV0dXJuIHJlcz8uZGF0YVxyXG4gIH0sIFtzZXRFcnJvciwgc2V0TG9hZF0pXHJcbiAgY29uc3QgbXV0YXRlOiBHcmFwaHFsTXV0YXRlID0gdXNlQ2FsbGJhY2soYXN5bmMgKG11dGF0aW9uLCBwYXJhbXMsIG9wdGlvbikgPT4ge1xyXG4gICAgc2V0TG9hZChtdXRhdGlvbiwgdHJ1ZSlcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGdyYXBoUUxNdXRhdGUoKShtdXRhdGlvbiwgcGFyYW1zLCBvcHRpb24pLmNhdGNoKGUgPT4ge1xyXG4gICAgICBzZXRFcnJvcihtdXRhdGlvbiwgZSlcclxuICAgIH0pLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkKG11dGF0aW9uLCBmYWxzZSlcclxuICAgIH0pIGFzIGFueVxyXG4gICAgcmV0dXJuIHJlcz8uZGF0YVxyXG4gIH0sIFtzZXRFcnJvciwgc2V0TG9hZF0pXHJcblxyXG4gIGlmIChPYmplY3Qua2V5cyhvcmlnaW5TdG9yZVtfa2V5XS5hY3Rpb25zKS5sZW5ndGggPT09IDAgJiYgb3JpZ2luU3RvcmVbX2tleV0uYWN0aW9ucy5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XHJcbiAgICBPYmplY3Qua2V5cyhhY3Rpb25zKS5mb3JFYWNoKHZhbHVlID0+IHtcclxuICAgICAgb3JpZ2luU3RvcmVbX2tleV0uYWN0aW9uc1t2YWx1ZV0gPSAodjogYW55KSA9PiBhY3Rpb25zW3ZhbHVlXSh2LCB7XHJcbiAgICAgICAgLi4uYmFzZUFjdGlvbk9wdGlvbixcclxuICAgICAgICBkYXRhOiBvcmlnaW5TdG9yZVtfa2V5XS5zdGF0ZSxcclxuICAgICAgICBub3RpY2UsXHJcbiAgICAgICAgc2V0RGF0YSxcclxuICAgICAgICBxdWVyeSxcclxuICAgICAgICBtdXRhdGUsXHJcbiAgICAgICAgc3RvcmU6IG9yaWdpblN0b3JlLFxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIE9iamVjdC5rZXlzKGFjdGlvbnMpLmZvckVhY2godmFsdWUgPT4ge1xyXG4gICAgICBvcmlnaW5TdG9yZVtfa2V5XS5hY3Rpb25zW3ZhbHVlXSA9ICh2OiBhbnkpID0+IGFjdGlvbnNbdmFsdWVdKHYsIHtcclxuICAgICAgICAuLi5iYXNlQWN0aW9uT3B0aW9uLFxyXG4gICAgICAgIGRhdGE6IG9yaWdpblN0b3JlW19rZXldLnN0YXRlLFxyXG4gICAgICAgIG5vdGljZSxcclxuICAgICAgICBzZXREYXRhLFxyXG4gICAgICAgIHF1ZXJ5LFxyXG4gICAgICAgIG11dGF0ZSxcclxuICAgICAgICBzdG9yZTogb3JpZ2luU3RvcmUsXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH0sIFtfa2V5LCBhY3Rpb25zLCBtdXRhdGUsIG5vdGljZSwgcXVlcnksIHNldERhdGFdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBvcmlnaW5TdG9yZVtfa2V5XS5zZXREYXRhID0gW1xyXG4gICAgICAuLi5vcmlnaW5TdG9yZVtfa2V5XS5zZXREYXRhID8/IFtdLFxyXG4gICAgICBzZXRTdGF0ZSxcclxuICAgIF1cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIG9yaWdpblN0b3JlW19rZXldLnNldERhdGEgPSBvcmlnaW5TdG9yZVtfa2V5XS5zZXREYXRhLmZpbHRlcih2YWx1ZSA9PiB2YWx1ZSAhPT0gc2V0U3RhdGUpXHJcbiAgICB9XHJcbiAgfSwgW19rZXldKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgc3RhdGU6IG9yaWdpblN0b3JlW19rZXldLnN0YXRlLFxyXG4gICAgYWN0aW9uczogKG9yaWdpblN0b3JlW19rZXldLmFjdGlvbnMpIGFzIERlYWxGdW5PYmo8dHlwZW9mIGFjdGlvbnM+LFxyXG4gICAgc3RvcmU6IG9yaWdpblN0b3JlLFxyXG4gICAgZ2V0TG9hZDogcXVlcnkgPT4gb3JpZ2luU3RvcmVbX2tleV0uc3RhdGUuZmV0Y2hMb2FkW3F1ZXJ5Py5sb2M/LnNvdXJjZT8uYm9keV0gPyAxIDogMFxyXG4gIH1cclxufVxyXG5cclxuIiwiaW1wb3J0ICdjcm9zcy1mZXRjaC9wb2x5ZmlsbCdcclxuaW1wb3J0IHtnZXRUb2tlbiwgc2V0VG9rZW59IGZyb20gJy4uL3Rvb2xzL3Rva2VuJ1xyXG5pbXBvcnQge09wZXJhdGlvbn0gZnJvbSAnYXBvbGxvLWxpbmsnXHJcbmltcG9ydCB7RXJyb3JMaW5rfSBmcm9tICdhcG9sbG8tbGluay1lcnJvcidcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IEFwb2xsb0NsaWVudCBmcm9tICdhcG9sbG8tYm9vc3QnXHJcbmltcG9ydCB7c3NMb2d9IGZyb20gJy4uL3Rvb2xzL2dsb2JhbCdcclxuaW1wb3J0IHtEb2N1bWVudE5vZGV9IGZyb20gJ2dyYXBocWwnXHJcbmltcG9ydCB7ZG9jfSBmcm9tICcuLi9ncmFwaHFsVHlwZXMvZG9jJ1xyXG5pbXBvcnQge3Nob3dNZXNzYWdlfSBmcm9tICcuLi9jb21wb25lbnRzL01lc3NhZ2UvTWVzc2FnZSdcclxuaW1wb3J0IGdldENvbmZpZyBmcm9tICduZXh0L2NvbmZpZydcclxuXHJcbmNvbnN0IGNvbmZpZyA9IGdldENvbmZpZygpXHJcbmNvbnN0IGNsaWVudF9hcGlfdXJpID0gY29uZmlnPy5wdWJsaWNSdW50aW1lQ29uZmlnPy5jbGllbnRfYXBpX3VyaSA/PyAnaHR0cDovL2xvY2FsaG9zdDo0NDY0L3R5cGVfX2dyYXBocWwvYXBpJ1xyXG5cclxuY29uc3Qgb21pdFR5cGVuYW1lID0gKGtleTogYW55LCB2YWx1ZTogYW55KSA9PiB7XHJcbiAgcmV0dXJuIGtleSA9PT0gJ19fdHlwZW5hbWUnID8gdW5kZWZpbmVkIDogdmFsdWVcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldENsaWVudCA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgcmVxdWVzdDogKG9wZXJhdGlvbjogT3BlcmF0aW9uKSA9PiBQcm9taXNlPHZvaWQ+IHwgdm9pZCA9IChvcGVyYXRpb24pID0+IHtcclxuICAgIGlmIChvcGVyYXRpb24udmFyaWFibGVzKSB7XHJcbiAgICAgIG9wZXJhdGlvbi52YXJpYWJsZXMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9wZXJhdGlvbi52YXJpYWJsZXMpLCBvbWl0VHlwZW5hbWUpXHJcbiAgICB9XHJcbiAgICBvcGVyYXRpb24uc2V0Q29udGV4dCgoe2hlYWRlcnMgPSB7fX0pID0+ICh7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAuLi5oZWFkZXJzLFxyXG4gICAgICAgIC8vIOWQjuWPsOS4h+iDveadg+mZkFxyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGdldFRva2VuKCksXHJcbiAgICAgIH0sXHJcbiAgICB9KSlcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlZnJlc2hUb2tlbiA9ICgpID0+IHtcclxuICAgIGdyYXBoUUxRdWVyeSgpKGRvYy5yZWZyZXNoVG9rZW4sIHtcclxuICAgICAgZGF0YTogZ2V0VG9rZW4oJ3JlZnJlc2h0b2tlbicpLFxyXG4gICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICBpZiAocmVzLmRhdGE/LnJlZnJlc2hUb2tlbj8udG9rZW4pIHtcclxuICAgICAgICBzZXRUb2tlbihyZXMuZGF0YT8ucmVmcmVzaFRva2VuPy50b2tlbilcclxuICAgICAgICBzZXRUb2tlbihyZXMuZGF0YT8ucmVmcmVzaFRva2VuPy5yZWZyZXNodG9rZW4sICdyZWZyZXNodG9rZW4nKVxyXG4gICAgICAgIHNob3dNZXNzYWdlKHttZXNzYWdlOiAn55m75b2V6LaF5pe2LOWIt+aWsOeZu+W9leS/oeaBryd9KVxyXG4gICAgICAgIFJvdXRlci5yZWxvYWQoKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNob3dNZXNzYWdlKHttZXNzYWdlOiAn6K+36YeN5paw55m75b2VJ30pXHJcbiAgICAgICAgUm91dGVyLnB1c2goJy9sb2dpbicpXHJcbiAgICAgIH1cclxuICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgIHNzTG9nKGVycilcclxuICAgICAgc2hvd01lc3NhZ2Uoe21lc3NhZ2U6ICfor7fph43mlrDnmbvlvZUnfSlcclxuICAgICAgUm91dGVyLnB1c2goJy9sb2dpbicpXHJcbiAgICB9KVxyXG4gIH1cclxuICBjb25zdCBvbkVycm9yOiBFcnJvckxpbmsuRXJyb3JIYW5kbGVyID0gKHtyZXNwb25zZSwgb3BlcmF0aW9uLCBncmFwaFFMRXJyb3JzLCBuZXR3b3JrRXJyb3J9KSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgIC8vIGNvbnNvbGUubG9nKG9wZXJhdGlvbilcclxuICAgIGlmIChncmFwaFFMRXJyb3JzKSB7XHJcbiAgICAgIGdyYXBoUUxFcnJvcnMuZm9yRWFjaCgoe21lc3NhZ2UsIGxvY2F0aW9ucywgcGF0aCwgZXh0ZW5zaW9uc30pID0+IHtcclxuICAgICAgICBzc0xvZyhcclxuICAgICAgICAgICAgYFtHcmFwaFFMIGVycm9yXTogTWVzc2FnZTogJHttZXNzYWdlfSwgTG9jYXRpb246ICR7bG9jYXRpb25zfSwgUGF0aDogJHtwYXRofWAsXHJcbiAgICAgICAgKVxyXG4gICAgICAgIGlmIChleHRlbnNpb25zPy5jb2RlID09PSAnVU5BVVRIRU5USUNBVEVEJykge1xyXG4gICAgICAgICAgaWYgKG1lc3NhZ2UuaW5jbHVkZXMoJ2ZpcnN0JykpIHtcclxuICAgICAgICAgICAgcmVmcmVzaFRva2VuKClcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNob3dNZXNzYWdlKHttZXNzYWdlOiAn6K+36YeN5paw55m75b2VJ30pXHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWVzc2FnZS5pbmNsdWRlcygnVW5leHBlY3RlZCBlcnJvcicpKSB7XHJcbiAgICAgICAgICBzaG93TWVzc2FnZSh7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2Uuc3BsaXQoJ1wiJylbMV0sXHJcbiAgICAgICAgICAgIG1zZ190eXBlOiAnZXJyb3InLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc2hvd01lc3NhZ2Uoe21lc3NhZ2V9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBpZiAobmV0d29ya0Vycm9yKSB7XHJcbiAgICAgIGNvbnN0IGVyck1zZyA9ICgnYm9keVRleHQnIGluIG5ldHdvcmtFcnJvcikgPyBuZXR3b3JrRXJyb3I/LmJvZHlUZXh0IDogKCdyZXN1bHQnIGluIG5ldHdvcmtFcnJvcikgPyBuZXR3b3JrRXJyb3I/LnJlc3VsdD8uZXJyb3IgOiAnJ1xyXG4gICAgICBzc0xvZyhgW05ldHdvcmsgZXJyb3JdOiAke2Vyck1zZ31gKVxyXG4gICAgICBpZiAoJ3N0YXR1c0NvZGUnIGluIG5ldHdvcmtFcnJvciAmJiBuZXR3b3JrRXJyb3I/LnN0YXR1c0NvZGUgPT09IDQwMSkge1xyXG4gICAgICAgIGlmIChlcnJNc2cuaW5jbHVkZXMoJ2ZpcnN0JykgJiYgZ2V0VG9rZW4oJ3JlZnJlc2h0b2tlbicpKSB7XHJcbiAgICAgICAgICByZWZyZXNoVG9rZW4oKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzaG93TWVzc2FnZSh7bWVzc2FnZTogJ+ivt+mHjeaWsOeZu+W9lSd9KVxyXG4gICAgICAgICAgUm91dGVyLnB1c2goJy9sb2dpbicpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbmV3IEFwb2xsb0NsaWVudCh7XHJcbiAgICAvLyBsaW5rOiBodHRwTGluayxcclxuICAgIHVyaTogY2xpZW50X2FwaV91cmksXHJcbiAgICByZXF1ZXN0LFxyXG4gICAgb25FcnJvcixcclxuICB9KVxyXG59XHJcblxyXG5jb25zdCBkZWZhdWx0Q2xpZW50ID0gZ2V0Q2xpZW50KClcclxuXHJcbi8vIGNvbnN0IGRlYWxQYXJhbXMgPSAoKHBhcmFtczogYW55KSA9PiAoe1xyXG4vLyAgIGRhdGE6IHBhcmFtcyxcclxuLy8gfSkpXHJcbmNvbnN0IGRlYWxQYXJhbXMgPSAoKHBhcmFtczogYW55KSA9PiBwYXJhbXMpXHJcblxyXG5leHBvcnQgY29uc3QgZ3JhcGhRTFF1ZXJ5ID0gKGNsaWVudCA9IGRlZmF1bHRDbGllbnQpID0+IGFzeW5jIChxdWVyeTogRG9jdW1lbnROb2RlLCBwYXJhbXM6IGFueSwgb3B0aW9uPzogYW55KSA9PiB7XHJcbiAgY29uc3QgX2RlYWxQYXJhbXNJbiA9IG9wdGlvbj8uZGVhbFBhcmFtc0luID8/IGRlYWxQYXJhbXNcclxuICByZXR1cm4gY2xpZW50LnF1ZXJ5KHtcclxuICAgIGZldGNoUG9saWN5OiAnbmV0d29yay1vbmx5JyxcclxuICAgIHF1ZXJ5LFxyXG4gICAgdmFyaWFibGVzOiB7XHJcbiAgICAgIC4uLihfZGVhbFBhcmFtc0luID8gX2RlYWxQYXJhbXNJbihwYXJhbXMpIDogcGFyYW1zKSxcclxuICAgIH0sXHJcbiAgICAuLi5vcHRpb24sXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdyYXBoUUxNdXRhdGUgPSAoY2xpZW50ID0gZGVmYXVsdENsaWVudCkgPT4gYXN5bmMgKG11dGF0aW9uOiBhbnksIHBhcmFtczogYW55LCBvcHRpb24/OiBhbnkpID0+IHtcclxuICBjb25zdCBfZGVhbFBhcmFtc0luID0gb3B0aW9uPy5kZWFsUGFyYW1zSW4gPz8gZGVhbFBhcmFtc1xyXG4gIHJldHVybiBjbGllbnQubXV0YXRlKHtcclxuICAgIG11dGF0aW9uLFxyXG4gICAgdmFyaWFibGVzOiB7XHJcbiAgICAgIC4uLihfZGVhbFBhcmFtc0luID8gX2RlYWxQYXJhbXNJbihwYXJhbXMpIDogcGFyYW1zKSxcclxuICAgIH0sXHJcbiAgICAuLi5vcHRpb24sXHJcbiAgfSlcclxufVxyXG5cclxuY29uc3Qgc2VydmVyQ2xpZW50ID0gKCkgPT4gbmV3IEFwb2xsb0NsaWVudCh7XHJcbiAgLy8gbGluazogaHR0cExpbmssXHJcbiAgdXJpOiBjbGllbnRfYXBpX3VyaSxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBzZXJ2ZXJRdWVyeSA9IGFzeW5jIChxdWVyeTogYW55LCBwYXJhbXM6IGFueSwgb3B0aW9uPzogYW55KSA9PiAoYXdhaXQgZ3JhcGhRTFF1ZXJ5KHNlcnZlckNsaWVudCgpKShxdWVyeSwgcGFyYW1zLCBvcHRpb24pKT8uZGF0YVxyXG5cclxuZXhwb3J0IGNvbnN0IHNlcnZlck11dGF0ZSA9IGFzeW5jIChtdXRhdGlvbjogYW55LCBwYXJhbXM6IGFueSwgb3B0aW9uPzogYW55KSA9PiAoYXdhaXQgZ3JhcGhRTE11dGF0ZShzZXJ2ZXJDbGllbnQoKSkobXV0YXRpb24sIHBhcmFtcywgb3B0aW9uKSk/LmRhdGFcclxuXHJcbiIsImltcG9ydCB7bW9kZWxGYWN0b3J5fSBmcm9tICcuLi9Nb2RlbEFjdGlvbi9tb2RlbFV0aWwnXHJcbmltcG9ydCB7ZnBNZXJnZSwgZnBTZXR9IGZyb20gJy4uL3Rvb2xzL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEaWFsb2dNb2RlbDxUPiB7XHJcbiAgb3BlbjogYm9vbGVhblxyXG4gIGRpYWxvZ0RhdGE6IFRcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgUmVzb2x2ZXJGdW4gPSAodmFsdWU/OiBhbnkpID0+IGFueVxyXG5cclxuZXhwb3J0IGNvbnN0IGRpYWxvZ01vZGVsRmFjdG9yeSA9IDxUPihuYW1lOiBzdHJpbmcsIGluaXREYXRhOiBUKSA9PiBtb2RlbEZhY3RvcnkoYCR7bmFtZX1fZGlhbG9nTW9kZWxGYWN0b3J5YCwge1xyXG4gIGRpYWxvZ0RhdGE6IGluaXREYXRhLFxyXG4gIG9wZW46IGZhbHNlLFxyXG4gIGlzRWRpdDogLTEsXHJcbiAgb3BlblJlc29sdmU6ICgoKSA9PiB7XHJcbiAgfSkgYXMgUmVzb2x2ZXJGdW4sXHJcbn0sIHtcclxuICBvcGVuQ2xpY2s6ICh2YWx1ZSwge3NldERhdGF9KSA9PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgIHNldERhdGEocHJlRGF0YSA9PiBmcE1lcmdlKHByZURhdGEsIHtcclxuICAgICAgICBvcGVuOiB0cnVlLFxyXG4gICAgICAgIGRpYWxvZ0RhdGE6IHZhbHVlLFxyXG4gICAgICAgIGlzRWRpdDogLTEsXHJcbiAgICAgICAgb3BlblJlc29sdmU6IHJlc29sdmUsXHJcbiAgICAgIH0pKVxyXG4gICAgfSlcclxuICB9LFxyXG4gIG9wZW5FZGl0Q2xpY2s6ICh2YWx1ZTogeyBkYXRhOiBhbnk7IGluZGV4OiBudW1iZXIgfSwge3NldERhdGF9KSA9PiBzZXREYXRhKHByZSA9PiBmcE1lcmdlKHByZSwge1xyXG4gICAgb3BlbjogdHJ1ZSxcclxuICAgIGRpYWxvZ0RhdGE6IHZhbHVlLmRhdGEsXHJcbiAgICBpc0VkaXQ6IHZhbHVlLmluZGV4LFxyXG4gIH0pKSxcclxuICBvbkNsb3NlOiAodmFsdWUsIHtkYXRhLCBzZXREYXRhfSkgPT4ge1xyXG4gICAgZGF0YS5vcGVuUmVzb2x2ZShmYWxzZSlcclxuICAgIHNldERhdGEocHJlID0+IGZwTWVyZ2UoZnBTZXQocHJlLCAnZGlhbG9nRGF0YScsIHt9KSwge1xyXG4gICAgICBkaWFsb2dEYXRhOiBpbml0RGF0YSxcclxuICAgICAgb3BlbjogZmFsc2UsXHJcbiAgICB9KSlcclxuICB9LFxyXG4gIHNldGRpYWxvZzogKHZhbHVlOiBUIHwgYW55LCB7c2V0RGF0YX0pID0+IHNldERhdGEoZGF0YSA9PiBmcE1lcmdlKGRhdGEsIHtcclxuICAgIGRpYWxvZ0RhdGE6IHZhbHVlLFxyXG4gIH0pKSxcclxufSlcclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VSZWZ9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQmV0dGVyU2Nyb2xsIGZyb20gJ2JldHRlci1zY3JvbGwnXHJcbmltcG9ydCB7dXNlU3RvcmVNb2RlbH0gZnJvbSAnLi4vLi4vTW9kZWxBY3Rpb24vdXNlU3RvcmUnXHJcbmltcG9ydCB7ZnBNZXJnZVByZX0gZnJvbSAnLi4vLi4vdG9vbHMvdXRpbHMnXHJcbmltcG9ydCB7bW9kZWxGYWN0b3J5fSBmcm9tICcuLi8uLi9Nb2RlbEFjdGlvbi9tb2RlbFV0aWwnXHJcblxyXG5leHBvcnQgY29uc3QgYlNjcm9sbE1vZGVsID0gbW9kZWxGYWN0b3J5KCdiU2Nyb2xsTW9kZWwnLCB7XHJcbiAgc2Nyb2xsOiB7fSBhcyBhbnksXHJcbn0sIHtcclxuICBzZXRTY3JvbGw6ICh2YWx1ZSwgb3B0aW9uKSA9PiB7XHJcbiAgICBvcHRpb24uc2V0RGF0YShmcE1lcmdlUHJlKHtcclxuICAgICAgc2Nyb2xsOiB2YWx1ZSxcclxuICAgIH0pKVxyXG4gIH0sXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgQlNjcm9sbGVyID0gKHtpc1gsIGNoaWxkcmVuLCBib3hIZWlnaHQsIGJveFdpZHRofTogeyBjaGlsZHJlbj86IGFueSwgYm94SGVpZ2h0PzogYW55LCBib3hXaWR0aD86IGFueSwgaXNYPzogYm9vbGVhbiB9KSA9PiB7XHJcbiAgY29uc3Qge3N0YXRlOiBic1N0YXRlLCBhY3Rpb25zOiBic0FjdGlvbnN9ID0gdXNlU3RvcmVNb2RlbChiU2Nyb2xsTW9kZWwpXHJcbiAgY29uc3Qgc2Nyb2xsUmVmID0gdXNlUmVmKG51bGwpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIGNvbnN0IHNjcm9sbCA9IG5ldyBCZXR0ZXJTY3JvbGwoc2Nyb2xsUmVmLmN1cnJlbnQsIHtcclxuICAgICAgY2xpY2s6IHRydWUsXHJcbiAgICAgIHNjcm9sbFk6IHRydWUsXHJcbiAgICAgIHRhcHM6IHRydWUsXHJcbiAgICAgIC4uLihpc1ggPyB7XHJcbiAgICAgICAgc2Nyb2xsWDogdHJ1ZSxcclxuICAgICAgICBzY3JvbGxZOiBmYWxzZSxcclxuICAgICAgfSA6IHt9KSxcclxuICAgICAgcHJldmVudERlZmF1bHRFeGNlcHRpb246IHtcclxuICAgICAgICB0YWdOYW1lOiAvXihJTlBVVHxURVhUQVJFQXxCVVRUT058U0VMRUNUKSQvLFxyXG4gICAgICAgIGNsYXNzTmFtZTogLyhefFxccykuKihNdWlUZXh0RmllbGQtcm9vdHxNdWlTZWxlY3Qtc2VsZWN0KS4qKFxcc3wkKS8sXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgYnNBY3Rpb25zLnNldFNjcm9sbChzY3JvbGwpXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBzY3JvbGwuc3RvcCgpXHJcbiAgICAgIHNjcm9sbC5kZXN0cm95KClcclxuICAgIH1cclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgICAgPGRpdlxyXG4gICAgICAgICAgcmVmPXtzY3JvbGxSZWZ9XHJcbiAgICAgICAgICBjbGFzc05hbWU9eydib3gnfT5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXtpc1ggPyB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICAgICAgICAgIH0gOiB7fX1cclxuICAgICAgICA+e2NoaWxkcmVufTwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIC5ib3gge1xyXG4gICAgICAgICAgICBoZWlnaHQ6ICR7Ym94SGVpZ2h0IHx8ICcxMDB2aCd9O1xyXG4gICAgICAgICAgICB3aWR0aDogJHsoaXNYICYmIGJveFdpZHRoKSA/IGAke2JveFdpZHRofWAgOiAnYXV0bycgfTtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgY29uc3QgQm94ID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAwIDIwcHg7XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBTcGFjZSA9ICh7aCwgdywgY306IHtoPzogc3RyaW5nIHwgbnVtYmVyLCB3Pzogc3RyaW5nIHwgbnVtYmVyLCBjPzogc3RyaW5nfSkgPT4ge1xyXG4gIHJldHVybiA8c3BhblxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGMgfHwgJ2F1dG8nLFxyXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgICAgIHdpZHRoOiB3ID8/ICcxMDAlJyxcclxuICAgICAgICBoZWlnaHQ6IGggPz8gJzEwMCUnLFxyXG4gICAgICAgICAgLi4uKCF3ID8ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICAgICAgfSA6IHt9KVxyXG4gICAgICB9fVxyXG4gIC8+XHJcbn1cclxuIiwiaW1wb3J0IHtCdXR0b24sIEJ1dHRvblByb3BzLCBDaXJjdWxhclByb2dyZXNzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZGVjbGFyZSBpbnRlcmZhY2UgQnV0dG9uTG9hZFByb3BzIGV4dGVuZHMgQnV0dG9uUHJvcHMge1xyXG4gIGxvYWRpbmc/OiBib29sZWFuIHwgbnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBCdXR0b25Mb2FkID0gKHByb3BzOiBCdXR0b25Mb2FkUHJvcHMpID0+IHtcclxuXHJcbiAgcmV0dXJuIDxCdXR0b25cclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgICBkaXNhYmxlZD17ISFwcm9wcy5sb2FkaW5nIHx8IHByb3BzLmRpc2FibGVkfVxyXG4gID5cclxuICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIHshIXByb3BzLmxvYWRpbmcgJiYgPENpcmN1bGFyUHJvZ3Jlc3NcclxuICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgIHNpemU9ezI2fVxyXG4gICAgLz59XHJcbiAgPC9CdXR0b24+XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU3RvcmVmcm9udEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1N0b3JlZnJvbnQnXHJcbmltcG9ydCBBY2NvdW50Qm94SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQWNjb3VudEJveCdcclxuaW1wb3J0IFJlZGVlbUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1JlZGVlbSdcclxuaW1wb3J0IFBlb3BsZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1Blb3BsZSdcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgcmVkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9yZWQnXHJcbmltcG9ydCB7QXBwRm9vdEJhcn0gZnJvbSAnLi4vLi4vc3NfY29tbW9uL2VudW0nXHJcbmltcG9ydCB7bXBTdHlsZX0gZnJvbSAnLi4vLi4vc3R5bGUvY29tbW9uJ1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvb3RCYXIgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgY29uc3QgaXNBY3QgPSAocGF0aDogYW55KSA9PiByb3V0ZXIucGF0aG5hbWUuaW5jbHVkZXMocGF0aCBhcyBzdHJpbmcpXHJcbiAgcmV0dXJuIChcclxuICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXsnRm9vdEJhcid9PlxyXG4gICAgICAgIHtbXHJcbiAgICAgICAgICBbJ+mAm+W6lycsIDxTdG9yZWZyb250SWNvbi8+LCBgLyR7QXBwRm9vdEJhci5ob21lfWBdLFxyXG4gICAgICAgICAgWyfmi7zlm6InLCA8UGVvcGxlSWNvbi8+LCBgLyR7QXBwRm9vdEJhci5ncm91cH1gXSxcclxuICAgICAgICAgIFsn6L6+5Lq65Yy6JywgPFJlZGVlbUljb24vPiwgYC8ke0FwcEZvb3RCYXIuY2FyZH1gXSxcclxuICAgICAgICAgIC8vIFsn6LSt54mp6L2mJywgPFNob3BwaW5nQ2FydEljb24vPiwgYC8ke0FwcEZvb3RCYXIuY2FydH1gLCBzdGF0ZVNob3BDYXJ0LmRlYWxQcm9kdWN0TnVtYmVyKHN0YXRlU2hvcENhcnQpXSxcclxuICAgICAgICAgIFsn5oiRJywgPEFjY291bnRCb3hJY29uLz4sIGAvJHtBcHBGb290QmFyLm1lfWBdLFxyXG4gICAgICAgIF0ubWFwKHYgPT4gKFxyXG4gICAgICAgICAgICA8c2VjdGlvblxyXG4gICAgICAgICAgICAgICAga2V5PXtgRm9vdEJhcl8ke3ZbMF19YH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aXNBY3QodlsyXSkgPyAnYWN0JyA6ICcnfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaXNBY3QodlsyXSkgPyAnJyA6IHJvdXRlci5wdXNoKHZbMl0gYXMgc3RyaW5nKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHt2WzFdfVxyXG4gICAgICAgICAgICAgIDxzcGFuPnt2WzBdfTwvc3Bhbj5cclxuICAgICAgICAgICAgICB7fn52WzNdID4gMCAmJiA8YXNpZGU+e3ZbM119PC9hc2lkZT59XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICApKX1cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAuRm9vdEJhciB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAzcHggNHB4IDAgcmdiYSgwLDAsMCwwLjE0KSwgMCAzcHggM3B4IC0ycHggcmdiYSgwLDAsMCwwLjEyKSwgMCAxcHggOHB4IDAgcmdiYSgwLDAsMCwwLjIwKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgPiBzZWN0aW9uIHtcclxuICAgICAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgID4gYXNpZGUge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDIwJTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHttcFN0eWxlLnJlZH07XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYWN0IHtcclxuICAgICAgICAgICAgY29sb3I6ICR7cmVkWzYwMF19O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiIsImltcG9ydCB7Ymx1ZSwgYmx1ZUdyZXl9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycydcclxuaW1wb3J0IG1ha2VTdHlsZXMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL21ha2VTdHlsZXMnXHJcbmltcG9ydCB7SW5wdXRCYXNlUHJvcHN9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0QmFzZS9JbnB1dEJhc2UnXHJcbmltcG9ydCB7SWNvbkJ1dHRvbiwgSW5wdXRCYXNlfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHtTZWFyY2h9IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucydcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQge21wU3R5bGV9IGZyb20gJy4uLy4uL3N0eWxlL2NvbW1vbidcclxuaW1wb3J0IHtsc30gZnJvbSAnLi4vLi4vdG9vbHMvZGVhbEtleSdcclxuaW1wb3J0IHsgU2hvcHBpbmdDYXJ0SWNvbkJ1dHRvbiB9IGZyb20gJy4uL1Nob3BwaW5nQ2FydEljb25CdXR0b24vU2hvcHBpbmdDYXJ0SWNvbkJ1dHRvbidcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQge0hvbWVUeXBlfSBmcm9tICcuLi8uLi92aWV3L2hvbWUvYXBwTW9kdWxlJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGJvcmRlcmVkSW5wdXRCYXNlU3R5bGVzID0gKHtwYWxldHRlfTogYW55KSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBib3JkZXJSYWRpdXM6ICcxNHB4JyxcclxuICAgIGJvcmRlcjogJzJweCBzb2xpZCcsXHJcbiAgICBib3JkZXJDb2xvcjogYmx1ZUdyZXlbMjAwXSxcclxuICAgICcmOmhvdmVyOm5vdCgkZGlzYWJsZWQpJzoge1xyXG4gICAgICBib3JkZXJDb2xvcjogYmx1ZUdyZXlbNTAwXSxcclxuICAgIH0sXHJcbiAgICAnJiA+IHN2Zyc6IHtcclxuICAgICAgY29sb3I6IGJsdWVHcmV5WzMwMF0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYWRvcm5lZFN0YXJ0OiB7XHJcbiAgICBwYWRkaW5nTGVmdDogJzAuNXJlbScsXHJcbiAgfSxcclxuICBhZG9ybmVkRW5kOiB7XHJcbiAgICBwYWRkaW5nUmlnaHQ6ICcwLjVyZW0nLFxyXG4gIH0sXHJcbiAgZm9jdXNlZDoge1xyXG4gICAgYm9yZGVyQ29sb3I6IGJsdWVbNzAwXSxcclxuICAgICcmOmhvdmVyOm5vdCgkZGlzYWJsZWQpJzoge1xyXG4gICAgICBib3JkZXJDb2xvcjogYmx1ZVs3MDBdLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGVycm9yOiB7XHJcbiAgICBib3JkZXJDb2xvcjogcGFsZXR0ZS5lcnJvci5tYWluLFxyXG4gICAgJyY6aG92ZXI6bm90KCRkaXNhYmxlZCknOiB7XHJcbiAgICAgIGJvcmRlckNvbG9yOiBwYWxldHRlLmVycm9yLm1haW4sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgaW5wdXQ6IHtcclxuICAgIHBhZGRpbmc6ICcwLjYyNXJlbSAwLjVyZW0nLFxyXG4gIH0sXHJcbiAgZGlzYWJsZWQ6IHtcclxuICAgIGJvcmRlckNvbG9yOiBibHVlR3JleVszMDBdLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBibHVlR3JleVsxMDBdLFxyXG4gIH0sXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgdXNlQm9yZGVyZWRJbnB1dEJhc2VTdHlsZXMgPSBtYWtlU3R5bGVzKGJvcmRlcmVkSW5wdXRCYXNlU3R5bGVzLCB7XHJcbiAgbmFtZTogJ0JvcmRlcmVkSW5wdXRCYXNlJyxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBCb3JkZXJlZElucHV0QmFzZTogKHByb3BzOiBJbnB1dEJhc2VQcm9wcykgPT4gSlNYLkVsZW1lbnQgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc3R5bGVzID0gdXNlQm9yZGVyZWRJbnB1dEJhc2VTdHlsZXMoKVxyXG4gIHJldHVybiA8SW5wdXRCYXNlXHJcbiAgICAgIGNsYXNzZXM9e3N0eWxlc31cclxuICAgICAgcGxhY2Vob2xkZXI9eycnfVxyXG4gICAgICBzdGFydEFkb3JubWVudD17PFNlYXJjaC8+fVxyXG4gIC8+XHJcbn1cclxuXHJcbmNvbnN0IEJveCA9IHN0eWxlZC5kaXZgXHJcbiAgaGVpZ2h0OiA0NXB4O1xyXG4gIGJveC1zaGFkb3c6ICR7bXBTdHlsZS5zaGFkb3dbJzEnXX07XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDk2cHggMWZyIDk2cHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYFxyXG5jb25zdCBMb2dvID0gc3R5bGVkLmRpdmBcclxuICA+IGltZyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgfVxyXG5gXHJcbmNvbnN0IFRpdGxlID0gc3R5bGVkLmRpdmBcclxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuYFxyXG5jb25zdCBBY3Rpb24gPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbmBcclxuZXhwb3J0IGNvbnN0IEhlYWRlclNlYXJjaCA9ICh7aG9tZVR5cGV9OiB7aG9tZVR5cGU/OiBzdHJpbmd9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICByZXR1cm4gPEJveD5cclxuICAgIDxMb2dvPlxyXG4gICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9eycvaW1nL2hvbWUvbG9nby5wbmcnfVxyXG4gICAgICAgICAgYWx0PScnXHJcbiAgICAgIC8+XHJcbiAgICA8L0xvZ28+XHJcbiAgICA8VGl0bGU+e2xzKGhvbWVUeXBlID09PSBIb21lVHlwZS5ncm91cCA/ICfmi7zlm6InIDogJ+mAm+W6lycpfTwvVGl0bGU+XHJcbiAgICA8QWN0aW9uPlxyXG4gICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnL3NlYXJjaFBhZ2UnKVxyXG4gICAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxTZWFyY2ggLz5cclxuICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICA8U2hvcHBpbmdDYXJ0SWNvbkJ1dHRvbi8+XHJcbiAgICA8L0FjdGlvbj5cclxuICA8L0JveD5cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCBBcnJvd0JhY2tJb3NJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BcnJvd0JhY2tJb3MnXHJcbmltcG9ydCB7Qm94LCBJY29uQnV0dG9ufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHtsc30gZnJvbSAnLi4vLi4vdG9vbHMvZGVhbEtleSdcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQge01heWJlfSBmcm9tICcuLi8uLi9ncmFwaHFsVHlwZXMvdHlwZXMnXHJcbmltcG9ydCB7Qm94UHJvcHN9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JveC9Cb3gnXHJcbmltcG9ydCB7UmVhY3RDb21wb25lbnRMaWtlfSBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQge1Nob3BwaW5nQ2FydEljb25CdXR0b259IGZyb20gJy4uL1Nob3BwaW5nQ2FydEljb25CdXR0b24vU2hvcHBpbmdDYXJ0SWNvbkJ1dHRvbidcclxuaW1wb3J0IHtTZWFyY2h9IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucydcclxuXHJcbmNvbnN0IENvbnRhaW4gPSBzdHlsZWQoQm94KTxCb3hQcm9wcz5gXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDk2cHggMWZyIDk2cHg7XHJcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogNjBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gXHJcbmNvbnN0IExlZnRJY29uQnV0dG9uID0gc3R5bGVkKEljb25CdXR0b24pYFxyXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XHJcbmBcclxuY29uc3QgQWN0aW9uID0gc3R5bGVkLmRpdmBcclxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIFxyXG5gXHJcbmV4cG9ydCBjb25zdCBIZWFkZXJUaXRsZSA9ICh7dGl0bGUgPSAnJywgYmFja0NhbGwgPSAoKSA9PiB7fSwgc2hvd0NhcnQgPSBmYWxzZSwgTGVmdEljb24gPSBBcnJvd0JhY2tJb3NJY29uLCBoaWRlTGVmdCA9IGZhbHNlLCBzaG93U2VhcmNoID0gZmFsc2V9OiB7dGl0bGU/OiBNYXliZTxzdHJpbmc+LCBiYWNrQ2FsbD86IEZ1bmN0aW9uLCBzaG93Q2FydD86IGJvb2xlYW4sIHNob3dTZWFyY2g/OiBib29sZWFuLCBMZWZ0SWNvbj86IFJlYWN0Q29tcG9uZW50TGlrZSwgaGlkZUxlZnQ/OiBib29sZWFufSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gIHJldHVybiA8Q29udGFpblxyXG4gICAgICBib3hTaGFkb3c9ezF9PlxyXG4gICAgPExlZnRJY29uQnV0dG9uXHJcbiAgICAgICAgc3R5bGU9e2hpZGVMZWZ0ICYmIHtcclxuICAgICAgICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nLFxyXG4gICAgICAgIH0gfHwge319XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgaWYgKCEoYmFja0NhbGwgJiYgYmFja0NhbGwoKSkpIHtcclxuICAgICAgICAgICAgcm91dGVyLmJhY2soKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxMZWZ0SWNvbi8+XHJcbiAgICA8L0xlZnRJY29uQnV0dG9uPlxyXG4gICAgPG1haW4+XHJcbiAgICAgIHtscyh0aXRsZSl9XHJcbiAgICA8L21haW4+XHJcbiAgICA8QWN0aW9uPlxyXG4gICAgICB7c2hvd1NlYXJjaCAmJiA8SWNvbkJ1dHRvblxyXG4gICAgICA+XHJcbiAgICAgICAgPFNlYXJjaCAvPlxyXG4gICAgICA8L0ljb25CdXR0b24+fVxyXG4gICAgICB7c2hvd0NhcnQgJiYgPFNob3BwaW5nQ2FydEljb25CdXR0b24vPn1cclxuICAgIDwvQWN0aW9uPlxyXG4gIDwvQ29udGFpbj5cclxufVxyXG4iLCJpbXBvcnQgeyBDaXJjdWxhclByb2dyZXNzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCJcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGNvbnN0IExvYWRpbmcgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3t3aWR0aDogJzEwMCUnLCBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJ319XHJcbiAgICAgID5cclxuICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzc1xyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7U25hY2tiYXJ9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQge2FtYmVyLCBibHVlLCBjb21tb24sIGdyZWVuLCBncmV5LCByZWR9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycydcclxuaW1wb3J0IHtTbmFja2JhclByb3BzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TbmFja2Jhci9TbmFja2JhcidcclxuaW1wb3J0IHtvcmlnaW5TdG9yZSwgdXNlU3RvcmVNb2RlbH0gZnJvbSAnLi4vLi4vTW9kZWxBY3Rpb24vdXNlU3RvcmUnXHJcbmltcG9ydCB7ZnBNZXJnZVByZX0gZnJvbSAnLi4vLi4vdG9vbHMvdXRpbHMnXHJcbmltcG9ydCB7bW9kZWxGYWN0b3J5fSBmcm9tICcuLi8uLi9Nb2RlbEFjdGlvbi9tb2RlbFV0aWwnXHJcbmltcG9ydCB7IGxzIH0gZnJvbSAnLi4vLi4vdG9vbHMvZGVhbEtleSdcclxuXHJcbmNvbnN0IHR5cGVIZWxwID0ge1xyXG4gIGRlZmF1bHQ6IGBiYWNrZ3JvdW5kOiAke2dyZXlbNzAwXX07YCxcclxuICBzdWNjZXNzOiBgYmFja2dyb3VuZDogJHtncmVlbls2MDBdfTtgLFxyXG4gIHdhcm5pbmc6IGBiYWNrZ3JvdW5kOiAke2FtYmVyWzcwMF19O2AsXHJcbiAgaW5mbzogYGJhY2tncm91bmQ6ICR7Ymx1ZVs3MDBdfTtgLFxyXG4gIGVycm9yOiBgYmFja2dyb3VuZDogJHtyZWRbNzAwXX07YCxcclxufVxyXG5jb25zdCBnZXRUeXBlID0gKHR5cGUgPSAnZGVmYXVsdCcpID0+ICh0eXBlSGVscCBhcyBhbnkpW3R5cGVdXHJcblxyXG50eXBlIE1lc3NhZ2VQcm9wcyA9IFBhcnRpYWw8U25hY2tiYXJQcm9wcyAmIHtcclxuICBtc2dfdHlwZTogJ2RlZmF1bHQnIHwgJ3N1Y2Nlc3MnIHwgJ2luZm8nIHwgJ3dhcm5pbmcnIHwgJ2Vycm9yJyB8IHN0cmluZ1xyXG59PlxyXG5cclxuY29uc3QgQ3VzU25hY2tiYXIgPSBzdHlsZWQoU25hY2tiYXIpPE1lc3NhZ2VQcm9wcz5gXHJcbiAgJiYmID4gZGl2IHtcclxuICAgIGNvbG9yOiAke2NvbW1vbi53aGl0ZX07XHJcbiAgICAkeyh7bXNnX3R5cGV9KSA9PiBnZXRUeXBlKG1zZ190eXBlKX1cclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IG1lc3NhZ2VNb2RlbCA9IG1vZGVsRmFjdG9yeSgnbWVzc2FnZU1vZGVsJywge1xyXG4gIG9wZW46IGZhbHNlLFxyXG4gIG1lc3NhZ2U6ICcnLFxyXG4gIGF1dG9IaWRlRHVyYXRpb246IDIwMDAsXHJcbiAgbXNnX3R5cGU6ICdkZWZhdWx0JyxcclxufSBhcyBNZXNzYWdlUHJvcHMsIHtcclxuICBvcGVuOiAodmFsdWU6IHN0cmluZyB8IE1lc3NhZ2VQcm9wcywgb3B0aW9uKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xyXG4gICAgICBvcHRpb24uc2V0RGF0YShmcE1lcmdlUHJlKHtcclxuICAgICAgICBhdXRvSGlkZUR1cmF0aW9uOiAyMDAwLFxyXG4gICAgICAgIG1zZ190eXBlOiAnZGVmYXVsdCcsXHJcbiAgICAgICAgbWVzc2FnZTogdmFsdWUsXHJcbiAgICAgICAgb3BlbjogdHJ1ZSxcclxuICAgICAgfSkpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBvcHRpb24uc2V0RGF0YShmcE1lcmdlUHJlKHtcclxuICAgICAgICBhdXRvSGlkZUR1cmF0aW9uOiAyMDAwLFxyXG4gICAgICAgIG1zZ190eXBlOiAnZGVmYXVsdCcsXHJcbiAgICAgICAgLi4udmFsdWUsXHJcbiAgICAgICAgb3BlbjogdHJ1ZSxcclxuICAgICAgfSkpXHJcbiAgICB9XHJcbiAgfSxcclxuICBvbkNsb3NlOiAodmFsdWUsIG9wdGlvbikgPT4gb3B0aW9uLnNldERhdGEoZnBNZXJnZVByZSh7XHJcbiAgICBvcGVuOiBmYWxzZSxcclxuICB9KSksXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgTWVzc2FnZSA9ICgpID0+IHtcclxuICBjb25zdCB7c3RhdGU6IG1TdGF0ZSwgYWN0aW9uc30gPSB1c2VTdG9yZU1vZGVsKG1lc3NhZ2VNb2RlbClcclxuICByZXR1cm4gPEN1c1NuYWNrYmFyXHJcbiAgICAgIG9wZW49e21TdGF0ZS5vcGVufVxyXG4gICAgICBhdXRvSGlkZUR1cmF0aW9uPXttU3RhdGUuYXV0b0hpZGVEdXJhdGlvbn1cclxuICAgICAgbWVzc2FnZT17bHMobVN0YXRlLm1lc3NhZ2UgYXMgc3RyaW5nKX1cclxuICAgICAgbXNnX3R5cGU9e21TdGF0ZS5tc2dfdHlwZX1cclxuICAgICAgb25DbG9zZT17KCkgPT4gYWN0aW9ucy5vbkNsb3NlKCl9XHJcbiAgLz5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNob3dNZXNzYWdlID0gKG9wdGlvbjogc3RyaW5nIHwgTWVzc2FnZVByb3BzKSA9PiB7XHJcbiAgb3JpZ2luU3RvcmVbJ21lc3NhZ2VNb2RlbCddLmFjdGlvbnMub3BlbihvcHRpb24pXHJcbiAgcmV0dXJuXHJcbn1cclxuIiwiaW1wb3J0IHt1c2VTdG9yZU1vZGVsfSBmcm9tICcuLi8uLi9Nb2RlbEFjdGlvbi91c2VTdG9yZSdcclxuaW1wb3J0IHttZU1vZGVsfSBmcm9tICcuLi8uLi92aWV3L21lL21vZGVsJ1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge1JlZ2lzdGVySGVhZGVyfSBmcm9tICcuLi9SZWdpc3RlckhlYWRlci9SZWdpc3RlckhlYWRlcidcclxuaW1wb3J0IHtsc30gZnJvbSAnLi4vLi4vdG9vbHMvZGVhbEtleSdcclxuaW1wb3J0IHtCdXR0b259IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQge2dldFRva2VufSBmcm9tICcuLi8uLi90b29scy90b2tlbidcclxuXHJcbmNvbnN0IEVtcHR5ID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gID4gbWFpbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgPiBzcGFuIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBkZWFsTm9BdXRoID0gKG90aGVyczogYW55KSA9PiB7XHJcbiAgY29uc3Qge3N0YXRlOiBzdGF0ZU1lLCBhY3Rpb25zOiBhY3Rpb25zTWV9ID0gdXNlU3RvcmVNb2RlbChtZU1vZGVsKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIXN0YXRlTWUudXNlci5pZCkge1xyXG4gICAgICBhY3Rpb25zTWUuZ2V0TG9naW5Vc2VyKClcclxuICAgIH1cclxuICB9LCBbXSlcclxuICByZXR1cm4gKCFzdGF0ZU1lLnVzZXIuaWQgfHwgIWdldFRva2VuKCkpXHJcbiAgICAgID8gPEVtcHR5PlxyXG4gICAgICAgIDxSZWdpc3RlckhlYWRlci8+XHJcbiAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICA8c3Bhbj57bHMoJ+aCqOacqueZu+W9lSzor7flhYjnmbvlvZUnKX08L3NwYW4+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgdmFyaWFudD17J2NvbnRhaW5lZCd9XHJcbiAgICAgICAgICAgICAgY29sb3I9eydzZWNvbmRhcnknfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2FjdGlvbnNNZS50b0xvZ2lufVxyXG4gICAgICAgICAgPntscygn55m75b2VJyl9PC9CdXR0b24+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgICA8L0VtcHR5PlxyXG4gICAgICA6IG90aGVyc1xyXG59XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCBTdGFyUm91bmRlZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1N0YXJSb3VuZGVkJ1xyXG5pbXBvcnQgU3RhckJvcmRlclJvdW5kZWRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TdGFyQm9yZGVyUm91bmRlZCdcclxuaW1wb3J0IEFkZENpcmNsZU91dGxpbmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BZGRDaXJjbGVPdXRsaW5lJ1xyXG5pbXBvcnQgU2hvcHBpbmdDYXJ0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2hvcHBpbmdDYXJ0J1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge0dyb3VwUXVldWUsIE1heWJlLCBQcm9kdWN0LCBTaG9wQ2FydEl0ZW1JbnB1dH0gZnJvbSAnLi4vLi4vZ3JhcGhxbFR5cGVzL3R5cGVzJ1xyXG5pbXBvcnQge2RlYWxJbWdVcmx9IGZyb20gJy4uLy4uL3Rvb2xzL2ltZydcclxuaW1wb3J0IHtCdXR0b24sIENhcmQsIEljb25CdXR0b259IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQge2RlYWxNb25leX0gZnJvbSAnLi4vLi4vdG9vbHMvdXRpbHMnXHJcbmltcG9ydCB7bXBTdHlsZX0gZnJvbSAnLi4vLi4vc3R5bGUvY29tbW9uJ1xyXG5pbXBvcnQge21vZGVsRmFjdG9yeX0gZnJvbSAnLi4vLi4vTW9kZWxBY3Rpb24vbW9kZWxVdGlsJ1xyXG5pbXBvcnQge3VzZVN0b3JlTW9kZWx9IGZyb20gJy4uLy4uL01vZGVsQWN0aW9uL3VzZVN0b3JlJ1xyXG5pbXBvcnQge21lTW9kZWx9IGZyb20gJy4uLy4uL3ZpZXcvbWUvbW9kZWwnXHJcbmltcG9ydCB7ZG9jfSBmcm9tICcuLi8uLi9ncmFwaHFsVHlwZXMvZG9jJ1xyXG5pbXBvcnQge3Nob3dNZXNzYWdlfSBmcm9tICcuLi9NZXNzYWdlL01lc3NhZ2UnXHJcbmltcG9ydCB7bHN9IGZyb20gJy4uLy4uL3Rvb2xzL2RlYWxLZXknXHJcbmltcG9ydCB7Z3JleX0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzJ1xyXG5pbXBvcnQge3Nob3BDYXJ0TW9kZWx9IGZyb20gJy4uLy4uL3ZpZXcvY2FydCdcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQge3VwZGF0ZVNob3BDYXJ0TW9kZWx9IGZyb20gJy4vVXBkYXRlU2hvcENhcnQnXHJcbmltcG9ydCB7U3BhY2V9IGZyb20gJy4uL0JveC9Cb3gnXHJcblxyXG5leHBvcnQgY29uc3QgcHJvZHVjdE1vZGVsID0gbW9kZWxGYWN0b3J5KCdwcm9kdWN0TW9kZWwnLCB7fSwge1xyXG4gIHVwZGF0ZU51bVNob3BDYXJ0OiBhc3luYyAodmFsdWU6IFNob3BDYXJ0SXRlbUlucHV0LCBvcHRpb24pID0+IHtcclxuICAgIHJldHVybiBhd2FpdCBvcHRpb24ubXV0YXRlKGRvYy51cGRhdGVOdW1TaG9wQ2FydCwge1xyXG4gICAgICBzaG9wQ2FydDogdmFsdWUsXHJcbiAgICAgIC4uLih2YWx1ZS5udW1iZXIgPyB7XHJcbiAgICAgICAgdXBkYXRlTnVtOiB2YWx1ZS5udW1iZXIsXHJcbiAgICAgIH0gOiB7fSksXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgdXBkYXRlU2hvcENhcnQ6IGFzeW5jICh2YWx1ZTogU2hvcENhcnRJdGVtSW5wdXQsIG9wdGlvbikgPT4ge1xyXG4gICAgcmV0dXJuIGF3YWl0IG9wdGlvbi5tdXRhdGUoZG9jLnVwZGF0ZVNob3BDYXJ0LCB7XHJcbiAgICAgIHNob3BDYXJ0OiB2YWx1ZSxcclxuICAgIH0pXHJcbiAgfSxcclxufSlcclxuXHJcbmNvbnN0IEJveCA9IHN0eWxlZChDYXJkKWBcclxuICBwYWRkaW5nOiAxMHB4IDEwcHggMDtcclxuICA+IGhlYWRlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDB2dztcclxuICAgID4gaW1nIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiA0MHZ3O1xyXG4gICAgfVxyXG4gIH1cclxuICA+IG1haW4ge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcbiAgPiBmb290ZXIge1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICA+IG1haW4ge1xyXG4gICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICB9XHJcbiAgICA+IC5NdWlCdXR0b25CYXNlLXJvb3Qge1xyXG4gICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgUHJvZHVjdFByaWNlID0gKHtwcm9kdWN0LCBwcmljZU91dFRpcH06IHsgcHJvZHVjdD86IE1heWJlPFByb2R1Y3Q+LCBwcmljZU91dFRpcD86IHN0cmluZyB9KSA9PiB7XHJcbiAgcmV0dXJuIDw+XHJcbiAgICA8YXNpZGVcclxuICAgICAgICBzdHlsZT17e2Rpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCBmb250U2l6ZTogJzEycHgnLCB0ZXh0RGVjb3JhdGlvbjogJ2xpbmUtdGhyb3VnaCcsIGZsZXhTaHJpbms6IDB9fVxyXG4gICAgPntkZWFsTW9uZXkocHJvZHVjdD8ucHJpY2VNYXJrZXQpfTwvYXNpZGU+XHJcbiAgICA8bWFpblxyXG4gICAgICAgIHN0eWxlPXt7ZGlzcGxheTogJ2lubGluZS1ibG9jaycsIGZvbnRTaXplOiAnMTRweCcsIG1hcmdpbkxlZnQ6ICc2cHgnLCBjb2xvcjogbXBTdHlsZS5yZWQsIGZsZXhTaHJpbms6IDB9fVxyXG4gICAgPntwcmljZU91dFRpcCA/PyAnJ317ZGVhbE1vbmV5KHByb2R1Y3Q/LnByaWNlT3V0KX08L21haW4+XHJcbiAgPC8+XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQcm9kdWN0SXRlbSA9ICh7cHJvZHVjdH06IHsgcHJvZHVjdDogUHJvZHVjdCB9KSA9PiB7XHJcbiAgY29uc3Qge2FjdGlvbnM6IGFjdGlvbnNVcGRhdGVTaG9wQ2FydE1vZGVsfSA9IHVzZVN0b3JlTW9kZWwodXBkYXRlU2hvcENhcnRNb2RlbClcclxuICBjb25zdCB7YWN0aW9uczogYWN0aW9uc1Nob3BDYXJ0fSA9IHVzZVN0b3JlTW9kZWwoc2hvcENhcnRNb2RlbClcclxuICBjb25zdCB7c3RhdGU6IHN0YXRlTWUsIGFjdGlvbnM6IGFjdGlvbnNNZX0gPSB1c2VTdG9yZU1vZGVsKG1lTW9kZWwpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghc3RhdGVNZS51c2VyLmlkKSB7XHJcbiAgICAgIGFjdGlvbnNNZS5nZXRMb2dpblVzZXIoKVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG4gIGNvbnN0IHthY3Rpb25zOiBhY3Rpb25zUE19ID0gdXNlU3RvcmVNb2RlbChwcm9kdWN0TW9kZWwpXHJcbiAgcmV0dXJuIDxCb3g+XHJcbiAgICA8aGVhZGVyPlxyXG4gICAgICA8aW1nIHNyYz17ZGVhbEltZ1VybChwcm9kdWN0Py5pbWc/LlswXT8udXJsKX1cclxuICAgICAgICAgICBhbHQ9XCJcIi8+XHJcbiAgICA8L2hlYWRlcj5cclxuICAgIDxtYWluPntwcm9kdWN0Lm5hbWV9e3Byb2R1Y3Qud2VpZ2h0fXtwcm9kdWN0LnVuaXR9PC9tYWluPlxyXG4gICAgPGZvb3Rlcj5cclxuICAgICAgPFByb2R1Y3RQcmljZSBwcm9kdWN0PXtwcm9kdWN0fS8+XHJcbiAgICAgIHtzdGF0ZU1lLnVzZXI/LmlkICYmIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXthc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGFjdGlvbnNVcGRhdGVTaG9wQ2FydE1vZGVsLm9wZW5DbGljaygpXHJcbiAgICAgICAgICAgIGlmIChyZXM/Lm51bSA+IDApIHtcclxuICAgICAgICAgICAgICBpZiAoKGF3YWl0IGFjdGlvbnNQTS51cGRhdGVOdW1TaG9wQ2FydCh7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0LFxyXG4gICAgICAgICAgICAgICAgbnVtYmVyOiB+fnJlcz8ubnVtLFxyXG4gICAgICAgICAgICAgIH0pKT8udXBkYXRlTnVtU2hvcENhcnQ/LmlkKSB7XHJcbiAgICAgICAgICAgICAgICBzaG93TWVzc2FnZSgn5pON5L2c5oiQ5YqfJylcclxuICAgICAgICAgICAgICAgIGFjdGlvbnNTaG9wQ2FydC5nZXRMaXN0KClcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8U2hvcHBpbmdDYXJ0SWNvbiBjb2xvcj17J3NlY29uZGFyeSd9Lz5cclxuICAgICAgPC9JY29uQnV0dG9uPn1cclxuICAgIDwvZm9vdGVyPlxyXG4gIDwvQm94PlxyXG59XHJcblxyXG5jb25zdCBSb3dCb3ggPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGJveC1zaGFkb3c6ICR7bXBTdHlsZS5zaGFkb3dbJzEnXX07XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxuYFxyXG5jb25zdCBJbWcgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAzNXZ3O1xyXG4gIGhlaWdodDogMzV2dztcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICA+IGltZyB7XHJcbiAgICB3aWR0aDogMzV2dztcclxuICAgIGhlaWdodDogMzV2dztcclxuICB9XHJcbiAgXHJcbmBcclxuY29uc3QgTGVmdEJveCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuYFxyXG5jb25zdCBUaXAgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHBhZGRpbmc6IDJweCA2cHg7XHJcbiAgYmFja2dyb3VuZDogJHtncmV5WzgwMF19O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbmBcclxuY29uc3QgUHJpY2UgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgZmxleC1ncm93OiAxO1xyXG5gXHJcbmNvbnN0IEJ1biA9IHN0eWxlZC5kaXZgXHJcbiAgJiYmIHtcclxuICAgIC5NdWlCdXR0b25CYXNlLXJvb3Qge1xyXG4gICAgICBwYWRkaW5nOiA0cHggMDtcclxuICAgIH1cclxuICB9XHJcbmBcclxuZXhwb3J0IGNvbnN0IFByb2R1Y3RJdGVtT25lUm93ID0gKHtwcm9kdWN0LCBzdW1PcmRlclRpcCA9ICcnLCBoaWRlQWN0aW9uID0gZmFsc2UsIHNob3dTdW1PcmRlciA9IGZhbHNlfTogeyBwcm9kdWN0OiBQcm9kdWN0LCBzdW1PcmRlclRpcD86IHN0cmluZywgaGlkZUFjdGlvbj86IGJvb2xlYW4sIHNob3dTdW1PcmRlcj86IGJvb2xlYW4gfSkgPT4ge1xyXG4gIGNvbnN0IHthY3Rpb25zOiBhY3Rpb25zVXBkYXRlU2hvcENhcnRNb2RlbH0gPSB1c2VTdG9yZU1vZGVsKHVwZGF0ZVNob3BDYXJ0TW9kZWwpXHJcbiAgY29uc3Qge3N0YXRlOiBzdGF0ZU1lLCBhY3Rpb25zOiBhY3Rpb25zTWV9ID0gdXNlU3RvcmVNb2RlbChtZU1vZGVsKVxyXG4gIGNvbnN0IHthY3Rpb25zOiBhY3Rpb25zUE19ID0gdXNlU3RvcmVNb2RlbChwcm9kdWN0TW9kZWwpXHJcbiAgY29uc3Qge2FjdGlvbnM6IGFjdGlvbnNTaG9wQ2FydH0gPSB1c2VTdG9yZU1vZGVsKHNob3BDYXJ0TW9kZWwpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIXN0YXRlTWUudXNlci5pZCkge1xyXG4gICAgICBhY3Rpb25zTWUuZ2V0TG9naW5Vc2VyKClcclxuICAgIH1cclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIDxSb3dCb3gga2V5PXtgUHJvZHVjdEl0ZW1PbmVSb3dfJHtwcm9kdWN0LmlkfWB9PlxyXG4gICAgPEltZz5cclxuICAgICAgPGltZyBzcmM9e2RlYWxJbWdVcmwocHJvZHVjdD8uaW1nPy5bMF0/LnVybCl9XHJcbiAgICAgICAgICAgYWx0PVwiXCIvPlxyXG4gICAgPC9JbWc+XHJcbiAgICA8TGVmdEJveD5cclxuICAgICAgPG1haW4+e3Byb2R1Y3QubmFtZX17cHJvZHVjdC53ZWlnaHR9e3Byb2R1Y3QudW5pdH08L21haW4+XHJcbiAgICAgIHsvKjxTdG9jaz57bHMoJ+W9k+WJjeWJqeS9mScpfToge3Byb2R1Y3Quc3RvY2t9PC9TdG9jaz4qL31cclxuICAgICAge3Nob3dTdW1PcmRlciAmJiA8VGlwPntzdW1PcmRlclRpcH17bHMoJ+mUgOmHjycpfToge3Byb2R1Y3Quc3VtT3JkZXJ9PC9UaXA+fVxyXG4gICAgICA8UHJpY2U+XHJcbiAgICAgICAgPFByb2R1Y3RQcmljZSBwcm9kdWN0PXtwcm9kdWN0fS8+XHJcbiAgICAgIDwvUHJpY2U+XHJcbiAgICAgIHshaGlkZUFjdGlvbiAmJiBzdGF0ZU1lLnVzZXI/LmlkICYmIDxCdW4+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBmdWxsV2lkdGg9e3RydWV9XHJcbiAgICAgICAgICAgIGNvbG9yPXsnc2Vjb25kYXJ5J31cclxuICAgICAgICAgICAgdmFyaWFudD17J2NvbnRhaW5lZCd9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBhY3Rpb25zVXBkYXRlU2hvcENhcnRNb2RlbC5vcGVuQ2xpY2soKVxyXG4gICAgICAgICAgICAgIGlmIChyZXM/Lm51bSA+IDApIHtcclxuICAgICAgICAgICAgICAgIGlmICgoYXdhaXQgYWN0aW9uc1BNLnVwZGF0ZU51bVNob3BDYXJ0KHtcclxuICAgICAgICAgICAgICAgICAgcHJvZHVjdCxcclxuICAgICAgICAgICAgICAgICAgbnVtYmVyOiB+fnJlcz8ubnVtLFxyXG4gICAgICAgICAgICAgICAgfSkpPy51cGRhdGVOdW1TaG9wQ2FydD8uaWQpIHtcclxuICAgICAgICAgICAgICAgICAgc2hvd01lc3NhZ2UoJ+aTjeS9nOaIkOWKnycpXHJcbiAgICAgICAgICAgICAgICAgIGFjdGlvbnNTaG9wQ2FydC5nZXRMaXN0KClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFNob3BwaW5nQ2FydEljb24vPlxyXG4gICAgICAgICAge2xzKCfliqDlhaXotK3nianovaYnKX1cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9CdW4+fVxyXG4gICAgPC9MZWZ0Qm94PlxyXG4gIDwvUm93Qm94PlxyXG59XHJcblxyXG5jb25zdCBHcm91cEJveCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuYFxyXG5jb25zdCBHcm91cEltZyA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDM1dnc7XHJcbiAgaGVpZ2h0OiAzNXZ3O1xyXG4gIG1hcmdpbi1yaWdodDogMTZweDtcclxuICA+IGltZyB7XHJcbiAgICB3aWR0aDogMzV2dztcclxuICAgIGhlaWdodDogMzV2dztcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICB9XHJcbmBcclxuY29uc3QgUmlnaHRCb3ggPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuYFxyXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5kaXZgXHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuYFxyXG5jb25zdCBNYXJrZXRQcmljZSA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIGNvbG9yOiAke2dyZXlbNzAwXX07XHJcbiAgPiBzcGFuIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gIH1cclxuYFxyXG5jb25zdCBPdXRQcmljZSA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIGNvbG9yOiAke21wU3R5bGUucmVkfTtcclxuYFxyXG5jb25zdCBTdGFyID0gc3R5bGVkLmRpdmBcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuYFxyXG5jb25zdCBBY3Rpb24gPSBzdHlsZWQuZGl2YFxyXG5gXHJcbmNvbnN0IE9yZGVyVGlwID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBwYWRkaW5nOiAycHggNnB4O1xyXG4gIGJhY2tncm91bmQ6ICR7Z3JleVs4MDBdfTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgd2lkdGg6IG1heC1jb250ZW50O1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgR3JvdXBQcm9kdWN0SXRlbSA9ICh7cHJvZHVjdCwgZ3JvdXBRdWV1ZSwgc3VtT3JkZXJUaXAgPSAnJywgc2hvd1N1bU9yZGVyID0gZmFsc2V9OiB7IHByb2R1Y3Q6IFByb2R1Y3QsIGdyb3VwUXVldWU/OiBHcm91cFF1ZXVlLCBzdW1PcmRlclRpcD86IHN0cmluZywgc2hvd1N1bU9yZGVyPzogYm9vbGVhbiB9KSA9PiB7XHJcbiAgY29uc3Qge3N0YXRlOiBzdGF0ZU1lLCBhY3Rpb25zOiBhY3Rpb25zTWV9ID0gdXNlU3RvcmVNb2RlbChtZU1vZGVsKVxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIXN0YXRlTWUudXNlci5pZCkge1xyXG4gICAgICBhY3Rpb25zTWUuZ2V0TG9naW5Vc2VyKClcclxuICAgIH1cclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIDxHcm91cEJveCBrZXk9e2BHcm91cEJveF8ke3Byb2R1Y3QuaWR9YH0+XHJcbiAgICA8R3JvdXBJbWc+XHJcbiAgICAgIDxpbWcgc3JjPXtkZWFsSW1nVXJsKHByb2R1Y3Q/LmltZz8uWzBdPy51cmwpfVxyXG4gICAgICAgICAgIGFsdD1cIlwiLz5cclxuICAgIDwvR3JvdXBJbWc+XHJcbiAgICA8UmlnaHRCb3g+XHJcbiAgICAgIDxUaXRsZT5cclxuICAgICAgICB7cHJvZHVjdC5uYW1lfSh7cHJvZHVjdC5ncm91cFJlbWFya30ve3Byb2R1Y3QuZ3JvdXBBbW91bnR9e3Byb2R1Y3QuZ3JvdXBBbW91bnRVbml0U3RyaW5nfS97cHJvZHVjdC5ncm91cFByZWNpc2lvblN0cmluZ30pXHJcbiAgICAgIDwvVGl0bGU+XHJcbiAgICAgIHtzaG93U3VtT3JkZXIgJiYgPE9yZGVyVGlwPntzdW1PcmRlclRpcH17bHMoJ+mUgOmHjycpfToge3Byb2R1Y3Quc3VtT3JkZXJ9PC9PcmRlclRpcD59XHJcbiAgICAgIDxNYXJrZXRQcmljZT5cclxuICAgICAgICB7bHMoJ+W4guWcuuS7tycpfVxyXG4gICAgICAgIDxzcGFuPntkZWFsTW9uZXkocHJvZHVjdC5wcmljZU1hcmtldCl9PC9zcGFuPlxyXG4gICAgICA8L01hcmtldFByaWNlPlxyXG4gICAgICA8T3V0UHJpY2U+XHJcbiAgICAgICAge2xzKCfln7rlh4bku7fmoLwnKX1cclxuICAgICAgICA8c3Bhbj57ZGVhbE1vbmV5KHByb2R1Y3QucHJpY2VPdXQpfTwvc3Bhbj5cclxuICAgICAgPC9PdXRQcmljZT5cclxuICAgICAgPFN0YXI+XHJcbiAgICAgICAge2dyb3VwUXVldWU/LmlkICYmIDxkaXY+XHJcbiAgICAgICAgICA8U3BhY2UgaD17OH0vPlxyXG4gICAgICAgICAge1suLi5BcnJheShwcm9kdWN0Lmdyb3VwUHJlY2lzaW9uKV0ubWFwKCh2LCBpKSA9PiBpKS5tYXAodmFsdWUgPT4gdmFsdWUgKyAxID4gKGdyb3VwUXVldWUuc3VtRmlsbEFtb3VudCA/PyAwKSA/XHJcbiAgICAgICAgICAgICAgPFN0YXJCb3JkZXJSb3VuZGVkSWNvblxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2BjbGlja1N0YXIke3ZhbHVlfWB9XHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplPXsnc21hbGwnfVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e2NvbG9yOiBncmV5WzcwMF19fVxyXG4gICAgICAgICAgICAgIC8+IDogPFN0YXJSb3VuZGVkSWNvblxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2BjbGlja1N0YXIke3ZhbHVlfWB9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y29sb3I6ICcjRkREMzM0J319XHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplPXsnc21hbGwnfVxyXG4gICAgICAgICAgICAgIC8+KX1cclxuICAgICAgICA8L2Rpdj59XHJcbiAgICAgIDwvU3Rhcj5cclxuICAgICAgPEFjdGlvbj5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9eydjb250YWluZWQnfVxyXG4gICAgICAgICAgICBjb2xvcj17J3NlY29uZGFyeSd9XHJcbiAgICAgICAgICAgIGZ1bGxXaWR0aD17dHJ1ZX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHJvdXRlci5wdXNoKGAvZ3JvdXBQcm9kdWN0L1tpZF1gLCBgL2dyb3VwUHJvZHVjdC8ke3Byb2R1Y3QuaWR9YClcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8QWRkQ2lyY2xlT3V0bGluZUljb24vPlxyXG4gICAgICAgICAge2xzKCfmi7zkuIDkuKonKX1cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9BY3Rpb24+XHJcbiAgICA8L1JpZ2h0Qm94PlxyXG4gIDwvR3JvdXBCb3g+XHJcbn1cclxuXHJcbiIsImltcG9ydCB7QnV0dG9uLCBEaWFsb2csIERpYWxvZ0NvbnRlbnQsIERpYWxvZ1RpdGxlLCBUZXh0RmllbGR9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7bHN9IGZyb20gJy4uLy4uL3Rvb2xzL2RlYWxLZXknXHJcbmltcG9ydCB7ZGlhbG9nTW9kZWxGYWN0b3J5fSBmcm9tICcuLi8uLi9jb21tb25Nb2RlbC9kaWFsb2cnXHJcbmltcG9ydCB7dXNlU3RvcmVNb2RlbH0gZnJvbSAnLi4vLi4vTW9kZWxBY3Rpb24vdXNlU3RvcmUnXHJcbmltcG9ydCB7bWVyZ2VUd29Nb2RlbCwgbW9kZWxGYWN0b3J5fSBmcm9tICcuLi8uLi9Nb2RlbEFjdGlvbi9tb2RlbFV0aWwnXHJcbmltcG9ydCB7c2V0Rm9ybX0gZnJvbSAnLi4vLi4vdG9vbHMvY29tbW9uQWN0aW9uJ1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZVNob3BDYXJ0TW9kZWwgPSBtZXJnZVR3b01vZGVsKGRpYWxvZ01vZGVsRmFjdG9yeSgnVXBkYXRlU2hvcENhcnRNb2RlbCcsIHt9KSwgbW9kZWxGYWN0b3J5KCd1cGRhdGUnLCB7XHJcbiAgZm9ybToge1xyXG4gICAgbnVtOiAxLFxyXG4gIH0sXHJcbn0sIHtcclxuICBzZXRGb3JtOiBzZXRGb3JtLFxyXG59KSlcclxuXHJcbmNvbnN0IEZvb3RlciA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZy10b3A6IDhweDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFVwZGF0ZVNob3BDYXJ0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHthY3Rpb25zOiBhY3Rpb25zVXBkYXRlU2hvcENhcnRNb2RlbCwgc3RhdGU6IHN0YXRlVXBkYXRlU2hvcENhcnRNb2RlbH0gPSB1c2VTdG9yZU1vZGVsKHVwZGF0ZVNob3BDYXJ0TW9kZWwpXHJcbiAgcmV0dXJuIDxEaWFsb2dcclxuICAgICAgb3Blbj17c3RhdGVVcGRhdGVTaG9wQ2FydE1vZGVsLm9wZW59XHJcbiAgICAgIG9uQ2xvc2U9e2FjdGlvbnNVcGRhdGVTaG9wQ2FydE1vZGVsLm9uQ2xvc2V9XHJcbiAgPlxyXG4gICAgPERpYWxvZ1RpdGxlPntscygn5re75Yqg5pWw6YePJyl9PC9EaWFsb2dUaXRsZT5cclxuICAgIDxEaWFsb2dDb250ZW50PlxyXG4gICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICB0eXBlPXsnbnVtYmVyJ31cclxuICAgICAgICAgIHZhbHVlPXtzdGF0ZVVwZGF0ZVNob3BDYXJ0TW9kZWwuZm9ybS5udW19XHJcbiAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gYWN0aW9uc1VwZGF0ZVNob3BDYXJ0TW9kZWwuc2V0Rm9ybShbJ251bScsIGV2ZW50LnRhcmdldC52YWx1ZV0pfVxyXG4gICAgICAvPlxyXG4gICAgICA8Rm9vdGVyPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgdmFyaWFudD17J2NvbnRhaW5lZCd9XHJcbiAgICAgICAgICAgIGNvbG9yPXsnc2Vjb25kYXJ5J31cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHN0YXRlVXBkYXRlU2hvcENhcnRNb2RlbC5vcGVuUmVzb2x2ZSh7XHJcbiAgICAgICAgICAgICAgICBudW06IHN0YXRlVXBkYXRlU2hvcENhcnRNb2RlbC5mb3JtLm51bSxcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIGFjdGlvbnNVcGRhdGVTaG9wQ2FydE1vZGVsLm9uQ2xvc2UoKVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID57bHMoJ+ehruWumicpfTwvQnV0dG9uPlxyXG4gICAgICA8L0Zvb3Rlcj5cclxuICAgIDwvRGlhbG9nQ29udGVudD5cclxuICA8L0RpYWxvZz5cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IGxzIH0gZnJvbSAnLi4vLi4vdG9vbHMvZGVhbEtleSdcclxuaW1wb3J0IHttcFN0eWxlfSBmcm9tICcuLi8uLi9zdHlsZS9jb21tb24nXHJcblxyXG5jb25zdCBIZWFkZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwcHggMWZyO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMzBweCAzMHB4IDUwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICA+IGltZyB7XHJcbiAgICB3aWR0aDogMzJweDtcclxuICAgIGhlaWdodDogNTZweDtcclxuICAgIGdyaWQtYXJlYTogMS8xLzMvMjtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG4gID4gaGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGFsaWduLXNlbGY6IGVuZDtcclxuICB9XHJcbiAgPiBmb290ZXIge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogJHttcFN0eWxlLnJlZH07XHJcbiAgfVxyXG4gID4gbWFpbiB7XHJcbiAgICBncmlkLWFyZWE6IDMvMS80LzM7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGFsaWduLXNlbGY6IGVuZDtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBSZWdpc3RlckhlYWRlciA9ICgpID0+IHtcclxuICByZXR1cm4gPEhlYWRlcj5cclxuICAgIDxpbWdcclxuICAgICAgICBzcmM9eycvaW1nL2hvbWUvbG9nby5wbmcnfVxyXG4gICAgICAgIGFsdD1cIlwiLz5cclxuICAgIDxoZWFkZXI+e2xzKCdNYXJrZXQnKX08L2hlYWRlcj5cclxuICAgIDxmb290ZXI+e2xzKCdQYXlsZXNzJyl9PC9mb290ZXI+XHJcbiAgICA8bWFpbj57bHMoJ+asoui/juadpeWIsOmprOS9qeiOsei2heW4gicpfTwvbWFpbj5cclxuICA8L0hlYWRlcj5cclxufVxyXG4iLCJpbXBvcnQge0FwcEZvb3RCYXJ9IGZyb20gJy4uLy4uL3NzX2NvbW1vbi9lbnVtJ1xyXG5pbXBvcnQge0JhZGdlLCBJY29uQnV0dG9ufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IFNob3BwaW5nQ2FydEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1Nob3BwaW5nQ2FydCdcclxuaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQge3VzZVN0b3JlTW9kZWx9IGZyb20gJy4uLy4uL01vZGVsQWN0aW9uL3VzZVN0b3JlJ1xyXG5pbXBvcnQge3Nob3BDYXJ0TW9kZWx9IGZyb20gJy4uLy4uL3ZpZXcvY2FydCdcclxuXHJcbnR5cGUgQ29sb3IgPSAnaW5oZXJpdCcgfCAncHJpbWFyeScgfCAnc2Vjb25kYXJ5JyB8ICdhY3Rpb24nIHwgJ2Rpc2FibGVkJyB8ICdlcnJvcidcclxuXHJcbmV4cG9ydCBjb25zdCBTaG9wcGluZ0NhcnRJY29uQnV0dG9uID0gKHtjb2xvciwgaHRtbENvbG9yfToge2NvbG9yPzogQ29sb3IsIGh0bWxDb2xvcj86IHN0cmluZ30pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHtzdGF0ZTogc3RhdGVTaG9wQ2FydCwgYWN0aW9uczogYWN0aW9uc1Nob3BDYXJ0fSA9IHVzZVN0b3JlTW9kZWwoc2hvcENhcnRNb2RlbClcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFzdGF0ZVNob3BDYXJ0LnVzZXIuaWQpIHtcclxuICAgICAgYWN0aW9uc1Nob3BDYXJ0LmdldExpc3QoKVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gPEljb25CdXR0b25cclxuICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKGAvJHtBcHBGb290QmFyLmNhcnR9YClcclxuICAgICAgfX1cclxuICA+XHJcbiAgICA8QmFkZ2VcclxuICAgICAgICBiYWRnZUNvbnRlbnQ9e3N0YXRlU2hvcENhcnQuZGVhbFByb2R1Y3ROdW1iZXIoc3RhdGVTaG9wQ2FydCl9XHJcbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgIDxTaG9wcGluZ0NhcnRJY29uXHJcbiAgICAgICAgICBjb2xvcj17Y29sb3J9XHJcbiAgICAgICAgICBodG1sQ29sb3I9e2h0bWxDb2xvcn1cclxuICAgICAgLz5cclxuICAgIDwvQmFkZ2U+XHJcbiAgPC9JY29uQnV0dG9uPlxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtDYXJvdXNlbH0gZnJvbSAncmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbCdcclxuaW1wb3J0IHtkZWFsSW1nVXJsfSBmcm9tICcuLi8uLi90b29scy9pbWcnXHJcblxyXG5jb25zdCBDdXNDYXJvdXNlbCA9ICh7ZGF0YUxpc3QsIG9uQ2xpY2tJdGVtLCBoZWlnaHR9OiB7IGhlaWdodD86IHN0cmluZywgZGF0YUxpc3Q6IGFueVtdLCBvbkNsaWNrSXRlbT86IChpbmRleDogbnVtYmVyLCBpdGVtOiBSZWFjdC5SZWFjdE5vZGUpID0+IHZvaWQgfSkgPT4gKFxyXG4gICAgPENhcm91c2VsXHJcbiAgICAgICAgYXV0b1BsYXk9e3RydWV9XHJcbiAgICAgICAgc2hvd1RodW1icz17ZmFsc2V9XHJcbiAgICAgICAgc2hvd0Fycm93cz17ZmFsc2V9XHJcbiAgICAgICAgc2hvd1N0YXR1cz17ZmFsc2V9XHJcbiAgICAgICAgaW5maW5pdGVMb29wPXt0cnVlfVxyXG4gICAgICAgIG9uQ2xpY2tJdGVtPXtvbkNsaWNrSXRlbX1cclxuICAgID5cclxuICAgICAge2RhdGFMaXN0Py5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBrZXk9e2BDYXJvdXNlbF8ke2l0ZW0uaWR9YH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3toZWlnaHQ6IGhlaWdodH19XHJcbiAgICAgICAgICAgICAgICBzcmM9e2RlYWxJbWdVcmwoaXRlbS5pbWdVcmwpfVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiXCIvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgPC9DYXJvdXNlbD5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3VzQ2Fyb3VzZWxcclxuIiwiaW1wb3J0IHtncWx9IGZyb20gJ2Fwb2xsby1ib29zdCdcclxuXHJcbmV4cG9ydCBjb25zdCBmcmFnbWVudCA9IHtcclxuICBDYXRlZ29yeUZpZWxkczogZ3FsYFxyXG4gICAgZnJhZ21lbnQgQ2F0ZWdvcnkgb24gQ2F0ZWdvcnkge1xyXG4gICAgICBpZFxyXG4gICAgICBuYW1lXHJcbiAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgdXBkYXRlVGltZVxyXG4gICAgICBpc0RlbGV0ZVxyXG4gICAgICBpc0VuYWJsZVxyXG4gICAgICByZW1hcmtcclxuICAgICAgc29ydFxyXG4gICAgICBwYXJlbnRJZFxyXG4gICAgICBmdWxsUGFyZW50SWRcclxuICAgICAgbnVtYmVyXHJcbiAgICAgIHVzZXJJZFxyXG4gICAgICBpbWdVcmxcclxuICAgIH1cclxuICBgLFxyXG4gIFVzZXJGaWVsZHM6IGdxbGBcclxuICAgIGZyYWdtZW50IFVzZXJGaWVsZHMgb24gVXNlciB7XHJcbiAgICAgIGlkXHJcbiAgICAgIG5hbWVcclxuICAgICAgY3JlYXRlVGltZVxyXG4gICAgICB1cGRhdGVUaW1lXHJcbiAgICAgIGlzRGVsZXRlXHJcbiAgICAgIHBhc3N3b3JkXHJcbiAgICAgIHR5cGVcclxuICAgIH1cclxuICBgLFxyXG4gIFVzZXJJbmZvRmllbGRzOiBncWxgXHJcbiAgICBmcmFnbWVudCBVc2VySW5mb0ZpZWxkcyBvbiBVc2VySW5mbyB7XHJcbiAgICAgIGlkXHJcbiAgICAgIG5hbWVcclxuICAgICAgY3JlYXRlVGltZVxyXG4gICAgICB1cGRhdGVUaW1lXHJcbiAgICAgIGlzRGVsZXRlXHJcbiAgICAgIHVzZXJJZFxyXG4gICAgICBwaG9uZVxyXG4gICAgICBlbWFpbFxyXG4gICAgICB1c2VyTGV2ZWxcclxuICAgICAgcGlja3VwQWRkcmVzc0lkXHJcbiAgICB9XHJcbiAgYCxcclxuICBPcmRlckluZm9GaWVsZHM6IGdxbGBcclxuICAgIGZyYWdtZW50IE9yZGVySW5mb0ZpZWxkcyBvbiBPcmRlckluZm8ge1xyXG4gICAgICBpZFxyXG4gICAgICBuYW1lXHJcbiAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgdXBkYXRlVGltZVxyXG4gICAgICBpc0RlbGV0ZVxyXG4gICAgICBudW1iZXJcclxuICAgICAgc3RhdGVcclxuICAgICAgYWN0dWFsbHlQYWlkXHJcbiAgICAgIGFkZHJlc3NJZFxyXG4gICAgICBwYXltZW50TWV0aG9kQ2FyZElkXHJcbiAgICAgIHN1YnRvdGFsXHJcbiAgICAgIGNvdXBvbkRpc2NvdW50XHJcbiAgICAgIHZpcERpc2NvdW50XHJcbiAgICAgIHRyYW5zcG9ydGF0aW9uQ29zdHNcclxuICAgICAgc2FsZVRheFxyXG4gICAgICBvcmRlcklkXHJcbiAgICAgIGRpc2NvdW50UHJvZHVjdFRvdGFsXHJcbiAgICAgIGZpbmlzaFRpbWVcclxuICAgICAgcGlja1VwVGltZVxyXG4gICAgICBwaWNrVXBUeXBlXHJcbiAgICAgIGdlbmVyYXRlQ29pblxyXG4gICAgICBkZWR1Y3RDb2luXHJcbiAgICAgIHNlbGZBZGRyZXNzSWRcclxuICAgICAgY3VycmVudFVzZXJMZXZlbFxyXG4gICAgfVxyXG4gIGAsXHJcbiAgUk9yZGVyUHJvZHVjdEZpZWxkczogZ3FsYFxyXG4gICAgZnJhZ21lbnQgUk9yZGVyUHJvZHVjdEZpZWxkcyBvbiBST3JkZXJQcm9kdWN0IHtcclxuICAgICAgY291bnRcclxuICAgICAgY3JlYXRlVGltZVxyXG4gICAgICBkZWFsUHJpY2VcclxuICAgICAgaWRcclxuICAgICAgaXNEZWxldGVcclxuICAgICAgbmFtZVxyXG4gICAgICBvcmRlcklkXHJcbiAgICAgIHByb2R1Y3RJZFxyXG4gICAgICB1cGRhdGVUaW1lXHJcbiAgICB9XHJcbiAgYCxcclxuICBQcm9kdWN0RmllbGRzOiBncWxgXHJcbiAgICBmcmFnbWVudCBQcm9kdWN0RmllbGRzIG9uIFByb2R1Y3Qge1xyXG4gICAgICBzdW1PcmRlclxyXG4gICAgICBicmFuZFxyXG4gICAgICBjYXRlZ29yeUlkXHJcbiAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgZ3JvdXBBbW91bnRcclxuICAgICAgZ3JvdXBBbW91bnRVbml0XHJcbiAgICAgIGdyb3VwUHJlY2lzaW9uXHJcbiAgICAgIGdyb3VwUmVtYXJrXHJcbiAgICAgIGlkXHJcbiAgICAgIGlzRGVsZXRlXHJcbiAgICAgIGlzRW5hYmxlXHJcbiAgICAgIGlzR3JvdXBcclxuICAgICAgaXNIb3RcclxuICAgICAgaXNOZXdcclxuICAgICAgbmFtZVxyXG4gICAgICBudW1iZXJcclxuICAgICAgcGFja2luZ1VuaXRcclxuICAgICAgcHJpY2VJblxyXG4gICAgICBwcmljZU1hcmtldFxyXG4gICAgICBwcmljZU91dFxyXG4gICAgICByZW1hcmtcclxuICAgICAgc2hlbHZlc1R5cGVzXHJcbiAgICAgIHNvcnRcclxuICAgICAgc3RvY2tcclxuICAgICAgdW5pdFxyXG4gICAgICB1cGRhdGVUaW1lXHJcbiAgICAgIHdlaWdodFxyXG4gICAgICB1bml0U3RyaW5nXHJcbiAgICAgIGdyb3VwUHJlY2lzaW9uU3RyaW5nXHJcbiAgICAgIGdyb3VwQW1vdW50VW5pdFN0cmluZ1xyXG4gICAgICBwYWNraW5nVW5pdFN0cmluZ1xyXG4gICAgfVxyXG4gIGAsXHJcbiAgSW1nRmllbGRzOiBncWxgXHJcbiAgICBmcmFnbWVudCBJbWdGaWVsZHMgb24gUHJvZHVjdEltZyB7XHJcbiAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgaWRcclxuICAgICAgaXNEZWxldGVcclxuICAgICAgbmFtZVxyXG4gICAgICBudW1iZXJcclxuICAgICAgcHJvZHVjdElkXHJcbiAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgdXJsXHJcbiAgICB9XHJcbiAgYCxcclxuICBVc2VyQWRkcmVzc0ZpZWxkczogZ3FsYFxyXG4gICAgZnJhZ21lbnQgVXNlckFkZHJlc3NGaWVsZHMgb24gVXNlckFkZHJlc3Mge1xyXG4gICAgICBhZGRyZXNzXHJcbiAgICAgIGNpdHlcclxuICAgICAgY29tYmluZUFkZHJlc3NcclxuICAgICAgY29udGFjdEluZm9ybWF0aW9uXHJcbiAgICAgIGNvbnRhY3RVc2VyTmFtZVxyXG4gICAgICBjcmVhdGVUaW1lXHJcbiAgICAgIGRpc3RyaWN0XHJcbiAgICAgIGlkXHJcbiAgICAgIGlzRGVmYXVsdFxyXG4gICAgICBpc0RlbGV0ZVxyXG4gICAgICBuYW1lXHJcbiAgICAgIHByb3ZpbmNlXHJcbiAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgdXNlcklkXHJcbiAgICAgIHppcFxyXG4gICAgfVxyXG4gIGAsXHJcbiAgVXNlclBheUNhcmRGaWVsZHM6IGdxbGBcclxuICAgIGZyYWdtZW50IFVzZXJQYXlDYXJkRmllbGRzIG9uIFVzZXJQYXlDYXJkIHtcclxuICAgICAgYWRkcmVzc0RldGFpbFxyXG4gICAgICBjaXR5XHJcbiAgICAgIGNvZGVcclxuICAgICAgY29udGFjdFxyXG4gICAgICBjcmVhdGVUaW1lXHJcbiAgICAgIGV4cGlyYXRpb25UaW1lXHJcbiAgICAgIGlkXHJcbiAgICAgIGlzRGVmYXVsdFxyXG4gICAgICBpc0RlbGV0ZVxyXG4gICAgICBuYW1lXHJcbiAgICAgIG51bWJlclxyXG4gICAgICB1cGRhdGVUaW1lXHJcbiAgICAgIHVzZXJJZFxyXG4gICAgICB1c2VyTmFtZVxyXG4gICAgICB6aXBDb2RlXHJcbiAgICB9XHJcbiAgYCxcclxuICBTaG9wQ2FydEZpZWxkczogZ3FsYFxyXG4gICAgZnJhZ21lbnQgU2hvcENhcnRGaWVsZHMgb24gU2hvcENhcnQge1xyXG4gICAgICBjcmVhdGVUaW1lXHJcbiAgICAgIGlkXHJcbiAgICAgIGlzRGVsZXRlXHJcbiAgICAgIGlzTmV4dFxyXG4gICAgICBuYW1lXHJcbiAgICAgIG51bWJlclxyXG4gICAgICBwcm9kdWN0SWRcclxuICAgICAgdXBkYXRlVGltZVxyXG4gICAgICB1c2VySWRcclxuICAgIH1cclxuICBgLFxyXG4gIERhdGFDb25maWdGaWVsZHM6IGdxbGBcclxuICAgIGZyYWdtZW50IERhdGFDb25maWdGaWVsZHMgb24gRGF0YUNvbmZpZyB7XHJcbiAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgaWRcclxuICAgICAgaXNEZWxldGVcclxuICAgICAgbmFtZVxyXG4gICAgICByZW1hcmtcclxuICAgICAgdHlwZVxyXG4gICAgICB1cGRhdGVUaW1lXHJcbiAgICAgIHZhbHVlXHJcbiAgICB9XHJcbiAgYCxcclxuICBEaWN0RmllbGRzOiBncWxgXHJcbiAgICBmcmFnbWVudCBEaWN0RmllbGRzIG9uIERpY3Qge1xyXG4gICAgICBjb2RlXHJcbiAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgZGljdFR5cGVDb2RlXHJcbiAgICAgIGlkXHJcbiAgICAgIGlzRGVsZXRlXHJcbiAgICAgIGlzRGlzYWJsZVxyXG4gICAgICBuYW1lXHJcbiAgICAgIHJlbWFya1xyXG4gICAgICBzb3J0XHJcbiAgICAgIHVwZGF0ZVRpbWVcclxuICAgIH1cclxuICBgLFxyXG4gIEdyb3VwUXVldWVGaWVsZHM6IGdxbGBcclxuICAgIGZyYWdtZW50IEdyb3VwUXVldWVGaWVsZHMgb24gR3JvdXBRdWV1ZSB7XHJcbiAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgZmlsbEFtb3VudFxyXG4gICAgICBpZFxyXG4gICAgICBpc0RlbGV0ZVxyXG4gICAgICBuYW1lXHJcbiAgICAgIHByb2R1Y3RJZFxyXG4gICAgICB1cGRhdGVUaW1lXHJcbiAgICAgIHN1bUZpbGxBbW91bnRcclxuICAgIH1cclxuICBgLFxyXG4gIEdyb3VwT3JkZXJGaWVsZHM6IGdxbGBcclxuICAgIGZyYWdtZW50IEdyb3VwT3JkZXJGaWVsZHMgb24gR3JvdXBPcmRlciB7XHJcbiAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgZ3JvdXBRdWV1ZUlkXHJcbiAgICAgIGlkXHJcbiAgICAgIGlzRGVsZXRlXHJcbiAgICAgIG5hbWVcclxuICAgICAgb3JkZXJHcm91cEFtb3VudFxyXG4gICAgICBvcmRlcklkXHJcbiAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgdXNlcklkXHJcbiAgICB9XHJcbiAgYCxcclxuICBQcm9tb0NvZGVGaWVsZHM6IGdxbGBcclxuICAgIGZyYWdtZW50IFByb21vQ29kZUZpZWxkcyBvbiBQcm9tb0NvZGUge1xyXG4gICAgICBjb2RlXHJcbiAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgZGlzY291bnRBbW91bnRcclxuICAgICAgZGlzY291bnRDb25kaXRpb25cclxuICAgICAgZGlzY291bnRDb25kaXRpb25BbW91bnRcclxuICAgICAgZGlzY291bnRUeXBlXHJcbiAgICAgIGVmZmVjdGl2ZURhdGVFbmRcclxuICAgICAgZWZmZWN0aXZlRGF0ZVN0YXJ0XHJcbiAgICAgIGlkXHJcbiAgICAgIGltZ1VybFxyXG4gICAgICBpc0RlbGV0ZVxyXG4gICAgICBpc0Rpc2FibGVcclxuICAgICAgbmFtZVxyXG4gICAgICBwcm9kdWN0Q2F0ZWdvcnlcclxuICAgICAgcHJvbW9Db2RlVHlwZVxyXG4gICAgICByZW1hcmtcclxuICAgICAgcmV1c2VUaW1lc1xyXG4gICAgICB0aXRsZVxyXG4gICAgICB1cGRhdGVUaW1lXHJcbiAgICB9XHJcbiAgYCxcclxufVxyXG4iLCJpbXBvcnQge2dxbH0gZnJvbSAnYXBvbGxvLWJvb3N0J1xyXG5pbXBvcnQge2ZyYWdtZW50fSBmcm9tICcuL2ZyYWdtZW50J1xyXG5pbXBvcnQge0RpY3RUeXBlRW51bSwgUHJvbW9Db2RlVHlwZUVudW19IGZyb20gJy4uLy4uL3NzX2NvbW1vbi9lbnVtJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFVzZXJMaXN0RG9jID0gZ3FsYFxyXG4gIHF1ZXJ5IHJlZmFjdG9yZWQ2NDMoJGRhdGE6IFVzZXJMaXN0SW5wdXQhKSB7XHJcbiAgICB1c2VyTGlzdCh1c2VyTGlzdElucHV0OiAkZGF0YSkge1xyXG4gICAgICBsaXN0IHtcclxuICAgICAgICBvcmRlckNvaW5OZXh0TW9udGhcclxuICAgICAgICBvcmRlckNvaW5DdXJyZW50TW9udGhcclxuICAgICAgICBvcmRlckFtb3VudEN1cnJlbnRZZWFyXHJcbiAgICAgICAgLi4udXNlckluZm9cclxuICAgICAgICAuLi5Vc2VyRmllbGRzXHJcbiAgICAgICAgLi4ub3JkZXJJbmZvXHJcbiAgICAgIH1cclxuICAgICAgdG90YWxcclxuICAgIH1cclxuICB9XHJcbiAgZnJhZ21lbnQgb3JkZXJJbmZvIG9uIFVzZXJ7XHJcbiAgICBvcmRlckluZm97XHJcbiAgICAgIGlkXHJcbiAgICAgIG5hbWVcclxuICAgICAgY3JlYXRlVGltZVxyXG4gICAgICB1cGRhdGVUaW1lXHJcbiAgICAgIGlzRGVsZXRlXHJcbiAgICAgIG51bWJlclxyXG4gICAgICBzdGF0ZVxyXG4gICAgICBhY3R1YWxseVBhaWRcclxuICAgICAgYWRkcmVzc0lkXHJcbiAgICAgIHBheW1lbnRNZXRob2RDYXJkSWRcclxuICAgICAgc3VidG90YWxcclxuICAgICAgY291cG9uRGlzY291bnRcclxuICAgICAgdmlwRGlzY291bnRcclxuICAgICAgdHJhbnNwb3J0YXRpb25Db3N0c1xyXG4gICAgICBzYWxlVGF4XHJcbiAgICAgIG9yZGVySWRcclxuICAgICAgZGlzY291bnRQcm9kdWN0VG90YWxcclxuICAgICAgZmluaXNoVGltZVxyXG4gICAgICBwaWNrVXBUaW1lXHJcbiAgICAgIHBpY2tVcFR5cGVcclxuICAgIH1cclxuICB9XHJcbiAgZnJhZ21lbnQgVXNlckZpZWxkcyBvbiBVc2VyIHtcclxuICAgIGlkXHJcbiAgICBuYW1lXHJcbiAgICBjcmVhdGVUaW1lXHJcbiAgICB1cGRhdGVUaW1lXHJcbiAgICBpc0RlbGV0ZVxyXG4gICAgcGFzc3dvcmRcclxuICAgIHR5cGVcclxuICB9XHJcbiAgZnJhZ21lbnQgdXNlckluZm8gb24gVXNlcntcclxuICAgIHVzZXJJbmZve1xyXG4gICAgICBpZFxyXG4gICAgICBuYW1lXHJcbiAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgdXBkYXRlVGltZVxyXG4gICAgICBpc0RlbGV0ZVxyXG4gICAgICB1c2VySWRcclxuICAgICAgcGhvbmVcclxuICAgICAgZW1haWxcclxuICAgICAgdXNlckxldmVsXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RGF0YUNvbmZpZyA9IGdxbGBcclxuICBxdWVyeSAoJGRhdGE6IERhdGFDb25maWdJdGVtSW5wdXQpIHtcclxuICAgIGdldERhdGFDb25maWcoZGF0YUNvbmZpZ0lucHV0OiAkZGF0YSkge1xyXG4gICAgICBpZFxyXG4gICAgICBuYW1lXHJcbiAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgdXBkYXRlVGltZVxyXG4gICAgICBpc0RlbGV0ZVxyXG4gICAgICB0eXBlXHJcbiAgICAgIHZhbHVlXHJcbiAgICAgIHJlbWFya1xyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IGhvbWVDYXJvdXNlbEltZ3MgPSBncWxgXHJcbiAgcXVlcnkgcXVlcnlfcXVlcnlfdGVzdExvbmcxMzcoJGRhdGE6IERhdGFDb25maWdJdGVtSW5wdXQpIHtcclxuICAgIGhvbWVDYXJvdXNlbEltZ3MoZGF0YUNvbmZpZ0lucHV0OiAkZGF0YSkge1xyXG4gICAgICBpZFxyXG4gICAgICBuYW1lXHJcbiAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgdXBkYXRlVGltZVxyXG4gICAgICBpc0RlbGV0ZVxyXG4gICAgICB0eXBlXHJcbiAgICAgIHZhbHVlXHJcbiAgICAgIHJlbWFya1xyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IGNhdGVnb3J5TGlzdCA9IGdxbGBcclxuICBxdWVyeSBxdWVyeV9xdWVyeV90ZXN0TG9uZzU2NSgkZGF0YTogQ2F0ZWdvcnlMaXN0SW5wdXQpIHtcclxuICAgIGNhdGVnb3J5TGlzdChkYXRhOiAkZGF0YSkge1xyXG4gICAgICB0b3RhbFxyXG4gICAgICBsaXN0IHtcclxuICAgICAgICAuLi5DYXRlZ29yeVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gICR7ZnJhZ21lbnQuQ2F0ZWdvcnlGaWVsZHN9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBkb2MgPSB7XHJcbiAgZ2V0VXNlckxpc3REb2MsXHJcbiAgY2F0ZWdvcnlMaXN0LFxyXG4gIGdldERhdGFDb25maWcsXHJcbiAgaG9tZUNhcm91c2VsSW1ncyxcclxuICByZWdpc3RlclVzZXI6IGdxbGBcclxuICAgIG11dGF0aW9uIG11dGF0aW9uX3JlZ2lzdGVyVXNlOTk4KCRkYXRhOiBVc2VySXRlbUlucHV0KSB7XHJcbiAgICAgIHJlZ2lzdGVyVXNlcihkYXRhOiAkZGF0YSkge1xyXG4gICAgICAgIHRva2VuXHJcbiAgICAgICAgcmVmcmVzaHRva2VuXHJcbiAgICAgICAgdXNlciB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgICAgdXBkYXRlVGltZVxyXG4gICAgICAgICAgaXNEZWxldGVcclxuICAgICAgICAgIHBhc3N3b3JkXHJcbiAgICAgICAgICB0eXBlXHJcbiAgICAgICAgICB1c2VySW5mbyB7XHJcbiAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBgLFxyXG4gIHJlZnJlc2hUb2tlbjogZ3FsYFxyXG4gICAgcXVlcnkgcmVmcmVzaFRva2VuKCRkYXRhOiBTdHJpbmchKSB7XHJcbiAgICAgIHJlZnJlc2hUb2tlbihyZWZyZXNodG9rZW46ICRkYXRhKSB7XHJcbiAgICAgICAgcmVmcmVzaHRva2VuXHJcbiAgICAgICAgdG9rZW5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIGAsXHJcbiAgbG9naW46IGdxbGBcclxuICAgIHF1ZXJ5IGxvZ2luKCRkYXRhOiBVc2VySXRlbUlucHV0KSB7XHJcbiAgICAgIGxvZ2luKHVzZXI6ICRkYXRhKSB7XHJcbiAgICAgICAgdG9rZW5cclxuICAgICAgICByZWZyZXNodG9rZW5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIGAsXHJcbiAgb25lVXNlcjogZ3FsYFxyXG4gICAgcXVlcnkgb25lVXNlciB7XHJcbiAgICAgIG9uZVVzZXIge1xyXG4gICAgICAgIC4uLlVzZXJGaWVsZHNcclxuICAgICAgICB1c2VySW5mbyB7XHJcbiAgICAgICAgICAuLi5Vc2VySW5mb0ZpZWxkc1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5Vc2VySW5mb0ZpZWxkc31cclxuICAgICR7ZnJhZ21lbnQuVXNlckZpZWxkc31cclxuICBgLFxyXG4gIG9yZGVyTGlzdDogZ3FsYFxyXG4gICAgcXVlcnkgb3JkZXJMaXN0KCRkYXRhOiBPcmRlcklucHV0KXtcclxuICAgICAgb3JkZXJMaXN0IChvcmRlcklucHV0OiAkZGF0YSwgZnJvbVVzZXI6IHRydWUpIHtcclxuICAgICAgICBsaXN0IHtcclxuICAgICAgICAgIC4uLk9yZGVySW5mb0ZpZWxkc1xyXG4gICAgICAgICAgck9yZGVyUHJvZHVjdCB7XHJcbiAgICAgICAgICAgIC4uLlJPcmRlclByb2R1Y3RGaWVsZHNcclxuICAgICAgICAgICAgcHJvZHVjdCB7XHJcbiAgICAgICAgICAgICAgLi4uUHJvZHVjdEZpZWxkc1xyXG4gICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAuLi5JbWdGaWVsZHNcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuT3JkZXJJbmZvRmllbGRzfVxyXG4gICAgJHtmcmFnbWVudC5ST3JkZXJQcm9kdWN0RmllbGRzfVxyXG4gICAgJHtmcmFnbWVudC5Qcm9kdWN0RmllbGRzfVxyXG4gICAgJHtmcmFnbWVudC5JbWdGaWVsZHN9XHJcbiAgYCxcclxuICBvcmRlckRldGFpbDogZ3FsYFxyXG4gICAgcXVlcnkgKCRpZDogU3RyaW5nKSB7XHJcbiAgICAgIHNlbGZBZGRyZXNzOiBnZXREYXRhQ29uZmlnKGRhdGFDb25maWdJbnB1dDoge1xyXG4gICAgICAgIHR5cGU6IFwiJHtEaWN0VHlwZUVudW0uU2VsZkFkZHJlc3N9XCJcclxuICAgICAgfSkge1xyXG4gICAgICAgIC4uLkRhdGFDb25maWdGaWVsZHNcclxuICAgICAgfVxyXG4gICAgICBvcmRlckRldGFpbChpZDogJGlkKSB7XHJcbiAgICAgICAgLi4uT3JkZXJJbmZvRmllbGRzXHJcbiAgICAgICAgck9yZGVyUHJvZHVjdCB7XHJcbiAgICAgICAgICAuLi5ST3JkZXJQcm9kdWN0RmllbGRzXHJcbiAgICAgICAgICBwcm9kdWN0IHtcclxuICAgICAgICAgICAgLi4uUHJvZHVjdEZpZWxkc1xyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgIC4uLkltZ0ZpZWxkc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHVzZXIge1xyXG4gICAgICAgICAgLi4uVXNlckZpZWxkc1xyXG4gICAgICAgICAgdXNlckluZm8ge1xyXG4gICAgICAgICAgICAuLi5Vc2VySW5mb0ZpZWxkc1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB1c2VyQWRkcmVzcyB7XHJcbiAgICAgICAgICAuLi5Vc2VyQWRkcmVzc0ZpZWxkc1xyXG4gICAgICAgIH1cclxuICAgICAgICB1c2VyUGF5Q2FyZCB7XHJcbiAgICAgICAgICAuLi5Vc2VyUGF5Q2FyZEZpZWxkc1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5EYXRhQ29uZmlnRmllbGRzfVxyXG4gICAgJHtmcmFnbWVudC5PcmRlckluZm9GaWVsZHN9XHJcbiAgICAke2ZyYWdtZW50LlJPcmRlclByb2R1Y3RGaWVsZHN9XHJcbiAgICAke2ZyYWdtZW50LlByb2R1Y3RGaWVsZHN9XHJcbiAgICAke2ZyYWdtZW50LkltZ0ZpZWxkc31cclxuICAgICR7ZnJhZ21lbnQuVXNlckZpZWxkc31cclxuICAgICR7ZnJhZ21lbnQuVXNlckluZm9GaWVsZHN9XHJcbiAgICAke2ZyYWdtZW50LlVzZXJQYXlDYXJkRmllbGRzfVxyXG4gICAgJHtmcmFnbWVudC5Vc2VyQWRkcmVzc0ZpZWxkc31cclxuICBgLFxyXG4gIHVwZGF0ZVBhc3N3b3JkOiBncWxgXHJcbiAgICBtdXRhdGlvbiAoJGRhdGE6IFVwZGF0ZVBhc3N3b3JkSW5wdXQpIHtcclxuICAgICAgdXBkYXRlUGFzc3dvcmQgKGRhdGE6ICRkYXRhKSB7XHJcbiAgICAgICAgdXNlciB7XHJcbiAgICAgICAgICAuLi5Vc2VyRmllbGRzXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF1dGhCb2R5IHtcclxuICAgICAgICAgIHRva2VuXHJcbiAgICAgICAgICByZWZyZXNodG9rZW5cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuVXNlckZpZWxkc31cclxuICBgLFxyXG4gIHBheUNhcmRMaXN0T25lVXNlcjogZ3FsYFxyXG4gICAgcXVlcnkge1xyXG4gICAgICBwYXlDYXJkTGlzdE9uZVVzZXIge1xyXG4gICAgICAgIC4uLlVzZXJQYXlDYXJkRmllbGRzXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuVXNlclBheUNhcmRGaWVsZHN9XHJcbiAgYCxcclxuICB1c2VyUGF5Q2FyZDogZ3FsYFxyXG4gICAgcXVlcnkgKCRkYXRhOiBVc2VyUGF5Q2FyZEl0ZW1JbnB1dCkge1xyXG4gICAgICB1c2VyUGF5Q2FyZCAodXNlclBheUNhcmQ6ICRkYXRhKSB7XHJcbiAgICAgICAgLi4uVXNlclBheUNhcmRGaWVsZHNcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5Vc2VyUGF5Q2FyZEZpZWxkc31cclxuICBgLFxyXG4gIHNhdmVVc2VyUGF5Q2FyZDogZ3FsYFxyXG4gICAgbXV0YXRpb24gKCRkYXRhOiBVc2VyUGF5Q2FyZEl0ZW1JbnB1dCl7XHJcbiAgICAgIHNhdmVVc2VyUGF5Q2FyZCAodXNlclBheUNhcmQ6ICRkYXRhKSB7XHJcbiAgICAgICAgLi4uVXNlclBheUNhcmRGaWVsZHNcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5Vc2VyUGF5Q2FyZEZpZWxkc31cclxuICBgLFxyXG4gIHNldFVzZXJQYXlDYXJkRGVmYXVsdDogZ3FsYFxyXG4gICAgbXV0YXRpb24gKCRkYXRhOiBVc2VyUGF5Q2FyZEl0ZW1JbnB1dCkge1xyXG4gICAgICBzZXRVc2VyUGF5Q2FyZERlZmF1bHQgKHVzZXJQYXlDYXJkOiAkZGF0YSkge1xyXG4gICAgICAgIC4uLlVzZXJQYXlDYXJkRmllbGRzXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuVXNlclBheUNhcmRGaWVsZHN9XHJcbiAgYCxcclxuICBwaWNrdXBBZGRyZXNzOiBncWxgXHJcbiAgICBxdWVyeSB7XHJcbiAgICAgIGdldERhdGFDb25maWcoZGF0YUNvbmZpZ0lucHV0OiB7XHJcbiAgICAgICAgdHlwZTogXCIke0RpY3RUeXBlRW51bS5TZWxmQWRkcmVzc31cIlxyXG4gICAgICB9KSB7XHJcbiAgICAgICAgLi4uRGF0YUNvbmZpZ0ZpZWxkc1xyXG4gICAgICB9XHJcbiAgICAgIG9uZVVzZXIge1xyXG4gICAgICAgIC4uLlVzZXJGaWVsZHNcclxuICAgICAgICB1c2VySW5mbyB7XHJcbiAgICAgICAgICAuLi5Vc2VySW5mb0ZpZWxkc1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5Vc2VySW5mb0ZpZWxkc31cclxuICAgICR7ZnJhZ21lbnQuRGF0YUNvbmZpZ0ZpZWxkc31cclxuICAgICR7ZnJhZ21lbnQuVXNlckZpZWxkc31cclxuICBgLFxyXG4gIHVwZGF0ZVVzZXJJbmZvOiBncWxgXHJcbiAgICBtdXRhdGlvbiAoJHVzZXJJbmZvOiBVc2VySW5mb0l0ZW1JbnB1dCkge1xyXG4gICAgICB1cGRhdGVVc2VySW5mbyAodXNlckluZm86ICR1c2VySW5mbykge1xyXG4gICAgICAgIC4uLlVzZXJJbmZvRmllbGRzXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuVXNlckluZm9GaWVsZHN9XHJcbiAgYCxcclxuICB1c2VyQWRkcmVzc0xpc3RPbmVVc2VyOiBncWxgXHJcbiAgICBxdWVyeSB7XHJcbiAgICAgIHVzZXJBZGRyZXNzTGlzdE9uZVVzZXIge1xyXG4gICAgICAgIC4uLlVzZXJBZGRyZXNzRmllbGRzXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuVXNlckFkZHJlc3NGaWVsZHN9XHJcbiAgYCxcclxuICB1c2VyQWRkcmVzczogZ3FsYFxyXG4gICAgcXVlcnkgKCRkYXRhOiBVc2VyQWRkcmVzc0l0ZW1JbnB1dCkge1xyXG4gICAgICB1c2VyQWRkcmVzcyAodXNlckFkZHJlc3M6ICRkYXRhKSB7XHJcbiAgICAgICAgLi4uVXNlckFkZHJlc3NGaWVsZHNcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5Vc2VyQWRkcmVzc0ZpZWxkc31cclxuICBgLFxyXG4gIHNhdmVVc2VyQWRkcmVzczogZ3FsYFxyXG4gICAgbXV0YXRpb24gKCRkYXRhOiBVc2VyQWRkcmVzc0l0ZW1JbnB1dCl7XHJcbiAgICAgIHNhdmVVc2VyQWRkcmVzcyAodXNlckFkZHJlc3M6ICRkYXRhKSB7XHJcbiAgICAgICAgLi4uVXNlckFkZHJlc3NGaWVsZHNcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5Vc2VyQWRkcmVzc0ZpZWxkc31cclxuICBgLFxyXG4gIHNldFVzZXJBZGRyZXNzRGVmYXVsdDogZ3FsYFxyXG4gICAgbXV0YXRpb24gKCRkYXRhOiBVc2VyQWRkcmVzc0l0ZW1JbnB1dCkge1xyXG4gICAgICBzZXRVc2VyQWRkcmVzc0RlZmF1bHQgKHVzZXJBZGRyZXNzOiAkZGF0YSkge1xyXG4gICAgICAgIC4uLlVzZXJBZGRyZXNzRmllbGRzXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuVXNlckFkZHJlc3NGaWVsZHN9XHJcbiAgYCxcclxuICBwcm9kdWN0c0luQ2F0ZWdvcnk6IGdxbGBcclxuICAgIHF1ZXJ5ICgkZGF0YTogQ2F0ZWdvcnlJdGVtSW5wdXQsICRwcm9kdWN0SXRlbUlucHV0OiBQcm9kdWN0SXRlbUlucHV0KSB7XHJcbiAgICAgIHByb2R1Y3RzSW5DYXRlZ29yeShjYXRlZ29yeUl0ZW1JbnB1dDogJGRhdGEsIHByb2R1Y3RJdGVtSW5wdXQ6ICRwcm9kdWN0SXRlbUlucHV0KSB7XHJcbiAgICAgICAgLi4uUHJvZHVjdEZpZWxkc1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAuLi5JbWdGaWVsZHNcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY2F0ZWdvcnlMaXN0KGRhdGE6IHtcclxuICAgICAgICBjYXRlZ29yeToge1xyXG4gICAgICAgICAgcGFyZW50Q2F0ZWdvcnk6ICRkYXRhXHJcbiAgICAgICAgfVxyXG4gICAgICB9KSB7XHJcbiAgICAgICAgdG90YWxcclxuICAgICAgICBsaXN0IHtcclxuICAgICAgICAgIC4uLkNhdGVnb3J5XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAke2ZyYWdtZW50LlByb2R1Y3RGaWVsZHN9XHJcbiAgICAke2ZyYWdtZW50LkltZ0ZpZWxkc31cclxuICAgICR7ZnJhZ21lbnQuQ2F0ZWdvcnlGaWVsZHN9XHJcbiAgYCxcclxuICBjYXRlZ29yeUxldmVsOiBncWxgXHJcbiAgICBxdWVyeSAoJGRhdGE6IENhdGVnb3J5SXRlbUlucHV0KSB7XHJcbiAgICAgIGNhdGVnb3J5TGV2ZWwoY2F0ZWdvcnlJdGVtSW5wdXQ6ICRkYXRhKVxyXG4gICAgfVxyXG4gIGAsXHJcbiAgb25lQ2F0ZWdvcnk6IGdxbGBcclxuICAgIHF1ZXJ5ICgkZGF0YTogQ2F0ZWdvcnlJdGVtSW5wdXQpIHtcclxuICAgICAgb25lQ2F0ZWdvcnkoZGF0YTogJGRhdGEpIHtcclxuICAgICAgICAuLi5DYXRlZ29yeVxyXG4gICAgICAgIHBhcmVudENhdGVnb3J5IHtcclxuICAgICAgICAgIC4uLkNhdGVnb3J5XHJcbiAgICAgICAgICBwYXJlbnRDYXRlZ29yeSB7XHJcbiAgICAgICAgICAgIC4uLkNhdGVnb3J5XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAke2ZyYWdtZW50LkNhdGVnb3J5RmllbGRzfVxyXG4gIGAsXHJcbiAgcHJvZHVjdExpc3Q6IGdxbGBcclxuICAgIHF1ZXJ5ICgkcHJvZHVjdElucHV0OiBQcm9kdWN0SXRlbUlucHV0LCAkb3JkZXJCeUlucHV0OiBPcmRlckJ5SW5wdXQpIHtcclxuICAgICAgcHJvZHVjdExpc3QocHJvZHVjdElucHV0OiAkcHJvZHVjdElucHV0LCBvcmRlckJ5SW5wdXQ6ICRvcmRlckJ5SW5wdXQpIHtcclxuICAgICAgICB0b3RhbFxyXG4gICAgICAgIGxpc3Qge1xyXG4gICAgICAgICAgLi4uUHJvZHVjdEZpZWxkc1xyXG4gICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgLi4uSW1nRmllbGRzXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAke2ZyYWdtZW50LlByb2R1Y3RGaWVsZHN9XHJcbiAgICAke2ZyYWdtZW50LkltZ0ZpZWxkc31cclxuICBgLFxyXG4gIHVwZGF0ZU51bVNob3BDYXJ0OiBncWxgXHJcbiAgICBtdXRhdGlvbiAoJHNob3BDYXJ0OiBTaG9wQ2FydEl0ZW1JbnB1dCwgJHVwZGF0ZU51bTogRmxvYXQpIHtcclxuICAgICAgdXBkYXRlTnVtU2hvcENhcnQgKHNob3BDYXJ0OiAkc2hvcENhcnQsIHVwZGF0ZU51bTogJHVwZGF0ZU51bSkge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgbnVtYmVyXHJcbiAgICAgICAgcHJvZHVjdCB7XHJcbiAgICAgICAgICAuLi5Qcm9kdWN0RmllbGRzXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHVzZXIge1xyXG4gICAgICAgICAgLi4uVXNlckZpZWxkc1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5Qcm9kdWN0RmllbGRzfVxyXG4gICAgJHtmcmFnbWVudC5Vc2VyRmllbGRzfVxyXG4gIGAsXHJcbiAgdXNlclNob3BDYXJ0TGlzdDogZ3FsYFxyXG4gICAgcXVlcnkge1xyXG4gICAgICBzaG9wQ2FydExpc3Qge1xyXG4gICAgICAgIC4uLlNob3BDYXJ0RmllbGRzXHJcbiAgICAgICAgcHJvZHVjdCB7XHJcbiAgICAgICAgICAuLi5Qcm9kdWN0RmllbGRzXHJcbiAgICAgICAgICBjYXRlZ29yeSB7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIHBhcmVudENhdGVnb3J5IHtcclxuICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgIHBhcmVudENhdGVnb3J5IHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAuLi5JbWdGaWVsZHNcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuU2hvcENhcnRGaWVsZHN9XHJcbiAgICAke2ZyYWdtZW50LlByb2R1Y3RGaWVsZHN9XHJcbiAgICAke2ZyYWdtZW50LkltZ0ZpZWxkc31cclxuICBgLFxyXG4gIHVwZGF0ZVNob3BDYXJ0OiBncWxgXHJcbiAgICBtdXRhdGlvbiAoJHNob3BDYXJ0OiBTaG9wQ2FydEl0ZW1JbnB1dCl7XHJcbiAgICAgIHVwZGF0ZVNob3BDYXJ0IChzaG9wQ2FydDogJHNob3BDYXJ0KSB7XHJcbiAgICAgICAgLi4uU2hvcENhcnRGaWVsZHNcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5TaG9wQ2FydEZpZWxkc31cclxuICBgLFxyXG4gIG9yZGVyQ29uZmlybUluZm86IGdxbGBcclxuICAgIHF1ZXJ5IHtcclxuICAgICAgZ2V0RGF0YUNvbmZpZyhkYXRhQ29uZmlnSW5wdXQ6IHtcclxuICAgICAgICB0eXBlOiBcIiR7RGljdFR5cGVFbnVtLlNlbGZBZGRyZXNzfVwiXHJcbiAgICAgIH0pIHtcclxuICAgICAgICAuLi5EYXRhQ29uZmlnRmllbGRzXHJcbiAgICAgIH1cclxuICAgICAgb25lVXNlciB7XHJcbiAgICAgICAgLi4uVXNlckZpZWxkc1xyXG4gICAgICAgIHVzZXJJbmZvIHtcclxuICAgICAgICAgIC4uLlVzZXJJbmZvRmllbGRzXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHBheUNhcmRMaXN0T25lVXNlciB7XHJcbiAgICAgICAgLi4uVXNlclBheUNhcmRGaWVsZHNcclxuICAgICAgfVxyXG4gICAgICB1c2VyQWRkcmVzc0xpc3RPbmVVc2VyIHtcclxuICAgICAgICAuLi5Vc2VyQWRkcmVzc0ZpZWxkc1xyXG4gICAgICB9XHJcbiAgICAgIGZyZWlnaHRDb25maWc6IGdldERhdGFDb25maWcgKGRhdGFDb25maWdJbnB1dDoge1xyXG4gICAgICAgIHR5cGU6IFwiJHtEaWN0VHlwZUVudW0uRnJlaWdodH1cIlxyXG4gICAgICB9KSB7XHJcbiAgICAgICAgLi4uRGF0YUNvbmZpZ0ZpZWxkc1xyXG4gICAgICB9XHJcbiAgICAgIHVzZXJMZXZlbExpc3Q6IGdldERpY3RMaXN0IChkaWN0SW5wdXQ6IHtcclxuICAgICAgICBkaWN0VHlwZUNvZGU6IFwiVXNlckxldmVsXCJcclxuICAgICAgfSkge1xyXG4gICAgICAgIC4uLkRpY3RGaWVsZHNcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5Vc2VyQWRkcmVzc0ZpZWxkc31cclxuICAgICR7ZnJhZ21lbnQuVXNlclBheUNhcmRGaWVsZHN9XHJcbiAgICAke2ZyYWdtZW50LlVzZXJJbmZvRmllbGRzfVxyXG4gICAgJHtmcmFnbWVudC5Vc2VyRmllbGRzfVxyXG4gICAgJHtmcmFnbWVudC5EYXRhQ29uZmlnRmllbGRzfVxyXG4gICAgJHtmcmFnbWVudC5EaWN0RmllbGRzfVxyXG4gIGAsXHJcbiAgc2F2ZU9yZGVyOiBncWxgXHJcbiAgICBtdXRhdGlvbiAoJG9yZGVySW5mb0l0ZW1JbnB1dDogT3JkZXJJbmZvSXRlbUlucHV0KSB7XHJcbiAgICAgIHNhdmVPcmRlciAob3JkZXJJbmZvSXRlbUlucHV0OiAkb3JkZXJJbmZvSXRlbUlucHV0KSB7XHJcbiAgICAgICAgLi4uT3JkZXJJbmZvRmllbGRzXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuT3JkZXJJbmZvRmllbGRzfVxyXG4gIGAsXHJcbiAgZGljdExpc3Q6IGdxbGBcclxuICAgIHF1ZXJ5ICgkZGF0YTogRGljdElucHV0KSB7XHJcbiAgICAgIGdldERpY3RMaXN0IChkaWN0SW5wdXQ6ICRkYXRhKSB7XHJcbiAgICAgICAgLi4uRGljdEZpZWxkc1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAke2ZyYWdtZW50LkRpY3RGaWVsZHN9XHJcbiAgYCxcclxuICBsaW1pdFRpbWVEYXRhOiBncWxgXHJcbiAgICBxdWVyeSB7XHJcbiAgICAgIGxpbWl0VGltZURhdGE6IGdldERhdGFDb25maWcgKGRhdGFDb25maWdJbnB1dDoge1xyXG4gICAgICAgIHR5cGU6IFwiJHtEaWN0VHlwZUVudW0uUHJvbW90aW9uRmxhc2hTYWxlfVwiXHJcbiAgICAgIH0pIHtcclxuICAgICAgICAuLi5EYXRhQ29uZmlnRmllbGRzXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuRGF0YUNvbmZpZ0ZpZWxkc31cclxuICBgLFxyXG4gIHByb2R1Y3RMaXN0QnlJZHM6IGdxbGBcclxuICAgIHF1ZXJ5ICgkaWRzOiBbU3RyaW5nXSkge1xyXG4gICAgICBwcm9kdWN0TGlzdEJ5SWRzIChpZHM6ICRpZHMpIHtcclxuICAgICAgICB0b3RhbFxyXG4gICAgICAgIGxpc3Qge1xyXG4gICAgICAgICAgLi4uUHJvZHVjdEZpZWxkc1xyXG4gICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgLi4uSW1nRmllbGRzXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAke2ZyYWdtZW50LlByb2R1Y3RGaWVsZHN9XHJcbiAgICAke2ZyYWdtZW50LkltZ0ZpZWxkc31cclxuICBgLFxyXG4gIGdyb3VwUXVldWVMaXN0OiBncWxgXHJcbiAgICBxdWVyeSAoJGdyb3VwUXVldWVJdGVtSW5wdXQ6IEdyb3VwUXVldWVJdGVtSW5wdXQpIHtcclxuICAgICAgZ3JvdXBRdWV1ZUxpc3QgKGdyb3VwUXVldWVJdGVtSW5wdXQ6ICRncm91cFF1ZXVlSXRlbUlucHV0KSB7XHJcbiAgICAgICAgLi4uR3JvdXBRdWV1ZUZpZWxkc1xyXG4gICAgICAgIHByb2R1Y3Qge1xyXG4gICAgICAgICAgLi4uUHJvZHVjdEZpZWxkc1xyXG4gICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgLi4uSW1nRmllbGRzXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdyb3VwT3JkZXIge1xyXG4gICAgICAgICAgLi4uR3JvdXBPcmRlckZpZWxkc1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5Hcm91cFF1ZXVlRmllbGRzfVxyXG4gICAgJHtmcmFnbWVudC5Qcm9kdWN0RmllbGRzfVxyXG4gICAgJHtmcmFnbWVudC5JbWdGaWVsZHN9XHJcbiAgICAke2ZyYWdtZW50Lkdyb3VwT3JkZXJGaWVsZHN9XHJcbiAgYCxcclxuICB1cGRhdGVPcmRlcjogZ3FsYFxyXG4gICAgbXV0YXRpb24gKCRvcmRlckluZm9JdGVtSW5wdXQ6IE9yZGVySW5mb0l0ZW1JbnB1dCkge1xyXG4gICAgICB1cGRhdGVPcmRlciAob3JkZXJJbmZvSXRlbUlucHV0OiAkb3JkZXJJbmZvSXRlbUlucHV0KSB7XHJcbiAgICAgICAgLi4uT3JkZXJJbmZvRmllbGRzXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuT3JkZXJJbmZvRmllbGRzfVxyXG4gIGAsXHJcbiAgc2F2ZUdyb3VwT3JkZXI6IGdxbGBcclxuICAgIG11dGF0aW9uICgkb3JkZXJJbmZvSXRlbUlucHV0OiBPcmRlckluZm9JdGVtSW5wdXQsICRncm91cE9yZGVySXRlbUlucHV0OiBHcm91cE9yZGVySXRlbUlucHV0LCAkZ3JvdXBRdWV1ZUl0ZW1JbnB1dDogR3JvdXBRdWV1ZUl0ZW1JbnB1dCkge1xyXG4gICAgICBzYXZlR3JvdXBPcmRlciAob3JkZXJJbmZvSXRlbUlucHV0OiAkb3JkZXJJbmZvSXRlbUlucHV0LCBncm91cE9yZGVySXRlbUlucHV0OiAkZ3JvdXBPcmRlckl0ZW1JbnB1dCwgZ3JvdXBRdWV1ZUl0ZW1JbnB1dDogJGdyb3VwUXVldWVJdGVtSW5wdXQpIHtcclxuICAgICAgICAuLi5PcmRlckluZm9GaWVsZHNcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5PcmRlckluZm9GaWVsZHN9XHJcbiAgYCxcclxuICBwcm9tb0NvZGVMaXN0OiBncWxgXHJcbiAgICBxdWVyeSAoJHByb21vQ29kZUl0ZW1JbnB1dDogUHJvbW9Db2RlSXRlbUlucHV0KSB7XHJcbiAgICAgIHByb21vQ29kZUxpc3QgKHByb21vQ29kZUl0ZW1JbnB1dDogJHByb21vQ29kZUl0ZW1JbnB1dCkge1xyXG4gICAgICAgIC4uLlByb21vQ29kZUZpZWxkc1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAke2ZyYWdtZW50LlByb21vQ29kZUZpZWxkc31cclxuICBgLFxyXG4gIGNhdGVnb3J5Um9vdFBhcmVudDogZ3FsYFxyXG4gICAgcXVlcnkgKCRjYXRlZ29yeUl0ZW1JbnB1dDogQ2F0ZWdvcnlJdGVtSW5wdXQpIHtcclxuICAgICAgY2F0ZWdvcnlSb290UGFyZW50IChjYXRlZ29yeUl0ZW1JbnB1dDogJGNhdGVnb3J5SXRlbUlucHV0KSB7XHJcbiAgICAgICAgLi4uQ2F0ZWdvcnlcclxuICAgICAgICBwYXJlbnRDYXRlZ29yeSB7XHJcbiAgICAgICAgICAuLi5DYXRlZ29yeVxyXG4gICAgICAgICAgcGFyZW50Q2F0ZWdvcnkge1xyXG4gICAgICAgICAgICAuLi5DYXRlZ29yeVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5DYXRlZ29yeUZpZWxkc31cclxuICBgLFxyXG4gIHByb2R1Y3RMaXN0T3JkZXJCeU9yZGVyOiBncWxgXHJcbiAgICBxdWVyeSAoJG9yZGVyQnlUeXBlOiBTdHJpbmcsICRwcm9kdWN0SW5wdXQ6IFByb2R1Y3RJdGVtSW5wdXQpIHtcclxuICAgICAgcHJvZHVjdExpc3RPcmRlckJ5T3JkZXIgKG9yZGVyQnlUeXBlOiAkb3JkZXJCeVR5cGUsIHByb2R1Y3RJbnB1dDogJHByb2R1Y3RJbnB1dCkge1xyXG4gICAgICAgIGxpc3Qge1xyXG4gICAgICAgICAgck9yZGVyUHJvZHVjdCB7XHJcbiAgICAgICAgICAgIC4uLlJPcmRlclByb2R1Y3RGaWVsZHNcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC4uLlByb2R1Y3RGaWVsZHNcclxuICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIC4uLkltZ0ZpZWxkc1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0b3RhbFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAke2ZyYWdtZW50LlByb2R1Y3RGaWVsZHN9XHJcbiAgICAke2ZyYWdtZW50LkltZ0ZpZWxkc31cclxuICAgICR7ZnJhZ21lbnQuUk9yZGVyUHJvZHVjdEZpZWxkc31cclxuICBgLFxyXG4gIHNlYXJjaERhdGE6IGdxbGBcclxuICAgIHF1ZXJ5ICgka2V5d29yZDogU3RyaW5nKSB7XHJcbiAgICAgIHByb2R1Y3RMaXN0KHByb2R1Y3RJbnB1dDogeyBuYW1lOiAka2V5d29yZCB9KSB7XHJcbiAgICAgICAgdG90YWxcclxuICAgICAgICBsaXN0IHtcclxuICAgICAgICAgIC4uLlByb2R1Y3RGaWVsZHNcclxuICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIC4uLkltZ0ZpZWxkc1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBncm91cFByb2R1Y3RMaXN0OiBwcm9kdWN0TGlzdChwcm9kdWN0SW5wdXQ6IHsgbmFtZTogJGtleXdvcmQsIGlzR3JvdXA6IDEgfSkge1xyXG4gICAgICAgIHRvdGFsXHJcbiAgICAgICAgbGlzdCB7XHJcbiAgICAgICAgICAuLi5Qcm9kdWN0RmllbGRzXHJcbiAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAuLi5JbWdGaWVsZHNcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZGFyZW5DYXJkUHJvbW9Db2RlTGlzdDogcHJvbW9Db2RlTGlzdChwcm9tb0NvZGVJdGVtSW5wdXQ6IHtcclxuICAgICAgICBwcm9tb0NvZGVUeXBlOiBcIiR7UHJvbW9Db2RlVHlwZUVudW0uRGFyZW5DYXJkfVwiLFxyXG4gICAgICAgIHRpdGxlOiAka2V5d29yZCxcclxuICAgICAgfSkge1xyXG4gICAgICAgIC4uLlByb21vQ29kZUZpZWxkc1xyXG4gICAgICB9XHJcbiAgICAgIHByb21vQ29kZVByb21vQ29kZUxpc3Q6IHByb21vQ29kZUxpc3QocHJvbW9Db2RlSXRlbUlucHV0OiB7XHJcbiAgICAgICAgcHJvbW9Db2RlVHlwZTogXCIke1Byb21vQ29kZVR5cGVFbnVtLlByb21vQ29kZX1cIixcclxuICAgICAgICB0aXRsZTogJGtleXdvcmQsXHJcbiAgICAgIH0pIHtcclxuICAgICAgICAuLi5Qcm9tb0NvZGVGaWVsZHNcclxuICAgICAgfVxyXG4gICAgICBvbmVVc2VyIHtcclxuICAgICAgICAuLi5Vc2VyRmllbGRzXHJcbiAgICAgICAgdXNlckluZm8ge1xyXG4gICAgICAgICAgLi4uVXNlckluZm9GaWVsZHNcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuVXNlckZpZWxkc31cclxuICAgICR7ZnJhZ21lbnQuVXNlckluZm9GaWVsZHN9XHJcbiAgICAke2ZyYWdtZW50LlByb2R1Y3RGaWVsZHN9XHJcbiAgICAke2ZyYWdtZW50LkltZ0ZpZWxkc31cclxuICAgICR7ZnJhZ21lbnQuUHJvbW9Db2RlRmllbGRzfVxyXG4gIGAsXHJcbn1cclxuXHJcbiIsImV4cG9ydCBlbnVtIFByb21vQ29kZVR5cGVFbnVtIHtcclxuICBEYXJlbkNhcmQgPSAnRGFyZW5DYXJkJyxcclxuICBQcm9tb0NvZGUgPSAnUHJvbW9Db2RlJyxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRGlzY291bnRUeXBlRW51bSB7XHJcbiAgUGVyY2VudGFnZSA9ICdQZXJjZW50YWdlJyxcclxuICBBbW91bnQgPSAnQW1vdW50JyxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gU1Mge1xyXG4gIFNTLFxyXG4gIFNTMixcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRGlzY291bnRDb25kaXRpb25FbnVtIHtcclxuICBObyA9ICdObycsXHJcbiAgQW1vdW50ID0gJ0Ftb3VudCcsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFByb2R1Y3RTdXBwbGVtZW50IHtcclxuICBfLFxyXG4gIFBlbmRpbmcsXHJcbiAgRmluaXNoLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUHJvZHVjdFN1cHBsZW1lbnRTdHJpbmc6IGFueSA9IHtcclxuICAxOiAn6YWN6LSn5LitJyxcclxuICAyOiAn5bey5a6M5oiQJyxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gT3JkZXJTdGF0ZSB7XHJcbiAgT3JkZXJlZCA9IDEsXHJcbiAgUGFpZCA9IDIsXHJcbiAgUGlja2luZyA9IDMsXHJcbiAgUGlja2VkVXAgPSA0LFxyXG4gIEZpbmlzaCA9IDUsXHJcbiAgQ2FuY2VsID0gNixcclxufVxyXG5cclxuLy8gMTrku6Pku5jmrL4gMjrlt7Lku5jmrL4gMzrlt7Llj5HotKcgNDrlt7LmlLbotKcgNTrlt7Llj5bmtoggNjrlt7LlrozmiJAgNzrlt7LpgIDlm55cclxuY29uc3QgX3M6IHtcclxuICBba2V5IGluIG51bWJlcl06IHN0cmluZ1xyXG59ID0ge1xyXG4gIDE6ICflvoXku5jmrL4nLFxyXG4gIDI6ICflt7Lku5jmrL4nLFxyXG4gIDM6ICflt7Llj5HotKcnLFxyXG4gIDQ6ICflt7LmlLbotKcnLFxyXG4gIDU6ICflt7Llj5bmtognLFxyXG4gIDY6ICflt7LlrozmiJAnLFxyXG4gIDc6ICflt7LpgIDlm54nLFxyXG59XHJcbmV4cG9ydCBjb25zdCBvcmRlclN0YXRlVG9TdHJpbmcgPSAoczogbnVtYmVyIHwgbnVsbCA9IDApID0+IHtcclxuICByZXR1cm4gX3M/LlsocyA/PyAwKV0gPz8gJydcclxufVxyXG5cclxuLy8g6YWN572u566h55CGXHJcbmV4cG9ydCBlbnVtIERpY3RUeXBlRW51bSB7XHJcbiAgR3JvdXBQcmVjaXNpb24gPSAnR3JvdXBQcmVjaXNpb24nLFxyXG4gIFVzZXJMZXZlbCA9ICdVc2VyTGV2ZWwnLFxyXG4gIEZyZWlnaHQgPSAnRnJlaWdodCcsXHJcbiAgSGVscERvY3VtZW50YXRpb25UeXBlID0gJ0hlbHBEb2N1bWVudGF0aW9uVHlwZScsXHJcbiAgSGVscERvY3VtZW50YXRpb24gPSAnSGVscERvY3VtZW50YXRpb24nLFxyXG4gIFByb21vdGlvblRoZW1lU2VsZWN0ID0gJ1Byb21vdGlvblRoZW1lU2VsZWN0JyxcclxuICBQcm9tb3Rpb25GbGFzaFNhbGUgPSAnUHJvbW90aW9uRmxhc2hTYWxlJyxcclxuICBIb21lQ2Fyb3VzZWwgPSAnSG9tZUNhcm91c2VsJyxcclxuICBPcmRlclN0YXRlID0gJ09yZGVyU3RhdGUnLFxyXG4gIFNlbGZBZGRyZXNzID0gJ1NlbGZBZGRyZXNzJyxcclxuICBBcHBNb2R1bGUgPSAnQXBwTW9kdWxlJyxcclxufVxyXG5cclxuLy8g6L2u5pKt5Zu+5YWz6IGU6aG5XHJcbmV4cG9ydCBlbnVtIFJlbGF0ZWRPYmpUeXBlRW51bSB7XHJcbiAgUHJvbW9Db2RlID0gJ1Byb21vQ29kZScsXHJcbiAgUHJvbW90aW9uRmxhc2hTYWxlID0gJ1Byb21vdGlvbkZsYXNoU2FsZScsXHJcbiAgUHJvbW90aW9uVGhlbWVTZWxlY3QgPSAnUHJvbW90aW9uVGhlbWVTZWxlY3QnLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBBcHBGb290QmFyIHtcclxuICBob21lID0gJ2hvbWUnLFxyXG4gIGdyb3VwID0gJ2dyb3VwJyxcclxuICBjYXJkID0gJ2NhcmQnLFxyXG4gIGNhcnQgPSAnY2FydCcsXHJcbiAgbWUgPSAnbWUnXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEFwcE1vZHVsZVR5cGVFbnVtIHtcclxuICBjYXRlZ29yeVNlbGVjdGlvbiA9ICdjYXRlZ29yeVNlbGVjdGlvbicsXHJcbiAgbGltaXRUaW1lID0gJ2xpbWl0VGltZScsXHJcbiAgc2FsZXNSYW5rID0gJ3NhbGVzUmFuaycsXHJcbiAgdGhlbWVTZWxlY3Rpb24gPSAndGhlbWVTZWxlY3Rpb24nLFxyXG4gIG1heUxpa2UgPSAnbWF5TGlrZScsXHJcbiAgbGluZVJhbmtpbmcgPSAnbGluZVJhbmtpbmcnLFxyXG4gIHRvcFJhbmtpbmcgPSAndG9wUmFua2luZycsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDYXRlZ29yeVJvb3ROYW1lID0gJ3Jvb3QnXHJcblxyXG5leHBvcnQgY29uc3Qgb3JkZXJTdGF0ZUtleXM6IHN0cmluZ1tdID0gT2JqZWN0LnZhbHVlcyhPcmRlclN0YXRlKSBhcyBzdHJpbmdbXVxyXG5cclxuZXhwb3J0IGNvbnN0IFByb3ZpbmNlRGF0YSA9IFtcclxuICBbJ0FMJywgJ0FsYWJhbWEnXSxcclxuICBbJ0FLJywgJ0FsYXNrYSddLFxyXG4gIFsnQVonLCAnQXJpem9uYSddLFxyXG4gIFsnQVInLCAnQXJrYW5zYXMnXSxcclxuICBbJ0NBJywgJ0NhbGlmb3JuaWEnXSxcclxuICBbJ0NPJywgJ0NvbG9yYWRvJ10sXHJcbiAgWydDVCcsICdDb25uZWN0aWN1dCddLFxyXG4gIFsnREUnLCAnRGVsYXdhcmUnXSxcclxuICBbJ0RDJywgJ0Rpc3RyaWN0IE9mIENvbHVtYmlhJ10sXHJcbiAgWydGTCcsICdGbG9yaWRhJ10sXHJcbiAgWydHQScsICdHZW9yZ2lhJ10sXHJcbiAgWydISScsICdIYXdhaWknXSxcclxuICBbJ0lEJywgJ0lkYWhvJ10sXHJcbiAgWydJTCcsICdJbGxpbm9pcyddLFxyXG4gIFsnSU4nLCAnSW5kaWFuYSddLFxyXG4gIFsnSUEnLCAnSW93YSddLFxyXG4gIFsnS1MnLCAnS2Fuc2FzJ10sXHJcbiAgWydLWScsICdLZW50dWNreSddLFxyXG4gIFsnTEEnLCAnTG91aXNpYW5hJ10sXHJcbiAgWydNRScsICdNYWluZSddLFxyXG4gIFsnTUQnLCAnTWFyeWxhbmQnXSxcclxuICBbJ01BJywgJ01hc3NhY2h1c2V0dHMnXSxcclxuICBbJ01JJywgJ01pY2hpZ2FuJ10sXHJcbiAgWydNTicsICdNaW5uZXNvdGEnXSxcclxuICBbJ01TJywgJ01pc3Npc3NpcHBpJ10sXHJcbiAgWydNTycsICdNaXNzb3VyaSddLFxyXG4gIFsnTVQnLCAnTW9udGFuYSddLFxyXG4gIFsnTkUnLCAnTmVicmFza2EnXSxcclxuICBbJ05WJywgJ05ldmFkYSddLFxyXG4gIFsnTkgnLCAnTmV3IEhhbXBzaGlyZSddLFxyXG4gIFsnTkonLCAnTmV3IEplcnNleSddLFxyXG4gIFsnTk0nLCAnTmV3IE1leGljbyddLFxyXG4gIFsnTlknLCAnTmV3IFlvcmsnXSxcclxuICBbJ05DJywgJ05vcnRoIENhcm9saW5hJ10sXHJcbiAgWydORCcsICdOb3J0aCBEYWtvdGEnXSxcclxuICBbJ09IJywgJ09oaW8nXSxcclxuICBbJ09LJywgJ09rbGFob21hJ10sXHJcbiAgWydPUicsICdPcmVnb24nXSxcclxuICBbJ1BBJywgJ1Blbm5zeWx2YW5pYSddLFxyXG4gIFsnUkknLCAnUmhvZGUgSXNsYW5kJ10sXHJcbiAgWydTQycsICdTb3V0aCBDYXJvbGluYSddLFxyXG4gIFsnU0QnLCAnU291dGggRGFrb3RhJ10sXHJcbiAgWydUTicsICdUZW5uZXNzZWUnXSxcclxuICBbJ1RYJywgJ1RleGFzJ10sXHJcbiAgWydVVCcsICdVdGFoJ10sXHJcbiAgWydWVCcsICdWZXJtb250J10sXHJcbiAgWydWQScsICdWaXJnaW5pYSddLFxyXG4gIFsnV0EnLCAnV2FzaGluZ3RvbiddLFxyXG4gIFsnV1YnLCAnV2VzdCBWaXJnaW5pYSddLFxyXG4gIFsnV0knLCAnV2lzY29uc2luJ10sXHJcbiAgWydXWScsICdXeW9taW5nJ10sXHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQaWNrVXBUeXBlTmFtZSA9ICh0eXBlOiBzdHJpbmcgfCAnU2VsZicgfCAnRGVsaXZlcnknKSA9PiB7XHJcbiAgcmV0dXJuICh7XHJcbiAgICBTZWxmOiAn6Ieq5Y+WJyxcclxuICAgIERlbGl2ZXJ5OiAn6YWN6YCBJyxcclxuICB9KVt0eXBlIGFzICdTZWxmJyB8ICdEZWxpdmVyeSddID8/ICcnXHJcbn1cclxuZXhwb3J0IGNvbnN0IFBpY2tVcFR5cGVFbnVtID0ge1xyXG4gIFNlbGY6ICdTZWxmJyxcclxuICBEZWxpdmVyeTogJ0RlbGl2ZXJ5JyxcclxufVxyXG4vLyDng63plIDmjpLooYxcclxuZXhwb3J0IGNvbnN0IFNhbGVSYW5rVHlwZUVudW0gPSB7XHJcbiAgT25lRGF5OiAnT25lRGF5JyxcclxuICBPbmVXZWVrOiAnT25lV2VlaycsXHJcbiAgT25lTW9udGg6ICdPbmVNb250aCcsXHJcbn1cclxuXHJcbiIsImV4cG9ydCBjb25zdCBtcFN0eWxlID0ge1xyXG4gIHJlZDogJyNGODQwMzMnLFxyXG4gIHNoYWRvdzoge1xyXG4gICAgMTogJzAgMXB4IDFweCAwIHJnYmEoMCwwLDAsMC4xNCksIDAgMnB4IDFweCAtMXB4IHJnYmEoMCwwLDAsMC4xMiksIDAgMXB4IDNweCAwIHJnYmEoMCwwLDAsMC4yMCknLFxyXG4gIH0sXHJcbn1cclxuIiwiaW1wb3J0IHtmcFNldFByZX0gZnJvbSAnLi91dGlscydcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRGb3JtOiBNb2RlbEFjdGlvbiA9IChbcGF0aCwgdmFsdWVdLCBvcHRpb24pID0+IHtcclxuICBvcHRpb24uc2V0RGF0YShmcFNldFByZShgZm9ybS4ke3BhdGh9YCwgdmFsdWUpKVxyXG59XHJcbiIsImltcG9ydCB7IE1heWJlIH0gZnJvbSBcIi4uL2dyYXBocWxUeXBlcy90eXBlc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxzID0gKGtleTogTWF5YmU8c3RyaW5nPiB8IHVuZGVmaW5lZCkgPT4ga2V5ID8/ICcnXHJcbiIsIlxyXG5leHBvcnQgY29uc3QgaXNEZXYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50J1xyXG5cclxuZXhwb3J0IGNvbnN0IHNzTG9nID0gKGRhdGE6IGFueSkgPT4ge1xyXG4gIGlmIChpc0Rldikge1xyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuICB9XHJcbiAgcmV0dXJuIGRhdGFcclxufVxyXG4iLCJpbXBvcnQgZ2V0Q29uZmlnIGZyb20gJ25leHQvY29uZmlnJ1xyXG5cclxuY29uc3QgY29uZmlnID0gZ2V0Q29uZmlnKClcclxuXHJcbmNvbnN0IGltZ0RvbWFpbiA9IGNvbmZpZz8ucHVibGljUnVudGltZUNvbmZpZz8uaW1nRG9tYWluID8/ICdodHRwOi8vMTI3LjAuMC4xOjQ0NjQvJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlYWxJbWdVcmwgPSAoc3JjOiBzdHJpbmcgfCB1bmRlZmluZWQgfCBudWxsID0gJycpID0+IHtcclxuICBpZiAoc3JjPy5pbmNsdWRlcygnYmxvYjonKSkge1xyXG4gICAgcmV0dXJuIHNyY1xyXG4gIH1cclxuICByZXR1cm4gYCR7aW1nRG9tYWlufSR7c3JjfWBcclxufVxyXG4iLCIvKiBnbG9iYWwgbG9jYWxTdG9yYWdlICovXHJcbmV4cG9ydCBjb25zdCBzZXRUb2tlbiA9ICh0b2tlbjogc3RyaW5nLCBuYW1lID0gJ3Rva2VuJykgPT4gbG9jYWxTdG9yYWdlLnNldEl0ZW0obmFtZSwgdG9rZW4pXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VG9rZW4gPSAobmFtZSA9ICd0b2tlbicpID0+IGxvY2FsU3RvcmFnZS5nZXRJdGVtKG5hbWUpIHx8ICcnXHJcbiIsImltcG9ydCBmb3JtYXQgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0J1xyXG5pbXBvcnQgc2V0IGZyb20gJ2xvZGFzaC9zZXQnXHJcbmltcG9ydCB7Y2xvbmVEZWVwLCBQcm9wZXJ0eVBhdGgsIGlzRnVuY3Rpb24sIGdldCwgaXNBcnJheSwgbWVyZ2VXaXRoLCBpc1N0cmluZ30gZnJvbSAnbG9kYXNoJ1xyXG5pbXBvcnQge01heWJlfSBmcm9tICcuLi9ncmFwaHFsVHlwZXMvdHlwZXMnXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0T2JqZWN0VVJMID0gKGZpbGU6IGFueSkgPT4ge1xyXG4gIC8vIEB0cy1pZ25vcmVcclxuICByZXR1cm4gd2luZG93Py5jcmVhdGVPYmplY3RVUkw/LihmaWxlKVxyXG4gICAgICA/PyB3aW5kb3c/LlVSTD8uY3JlYXRlT2JqZWN0VVJMPy4oZmlsZSlcclxuICAgICAgPz8gd2luZG93Py53ZWJraXRVUkw/LmNyZWF0ZU9iamVjdFVSTD8uKGZpbGUpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwYXJzZUZsb2F0Rm9ySW5wdXQgPSAodmFsdWU6IGFueSkgPT4ge1xyXG4gIGlmICh2YWx1ZSA9PT0gJy0nIHx8IHZhbHVlID09PSAnJykgcmV0dXJuIHZhbHVlXHJcbiAgdHJ5IHtcclxuICAgIHJldHVybiBwYXJzZUZsb2F0KHZhbHVlKVxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZSlcclxuICB9XHJcbn1cclxuXHJcbnR5cGUgU2V0RGF0YTxTID0gYW55PiA9IFMgfCAoKHByZURhdGE6IFMpID0+IFMpXHJcblxyXG5leHBvcnQgY29uc3QgZnBTZXQgPSA8RSA9IGFueT4ob3JpZ2luOiBhbnksIHBhdGg6IGFueSwgdmFsdWU6IFNldERhdGE8RT4pID0+IHtcclxuICBsZXQgbmV3RGF0YSA9IGNsb25lRGVlcChvcmlnaW4pXHJcbiAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XHJcbiAgICBjb25zdCBvbGREYXRhID0gZ2V0KG9yaWdpbiwgcGF0aClcclxuICAgIHNldChuZXdEYXRhLCBwYXRoLCB2YWx1ZShvbGREYXRhKSlcclxuICB9IGVsc2Uge1xyXG4gICAgc2V0KG5ld0RhdGEsIHBhdGgsIHZhbHVlKVxyXG4gIH1cclxuICByZXR1cm4gbmV3RGF0YVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGVsYXkgPSAodGltZTogbnVtYmVyKSA9PiAobmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIHRpbWUpKSlcclxuXHJcbmV4cG9ydCBjb25zdCBmcFNldFByZTogPFQgZXh0ZW5kcyBvYmplY3Q+KHBhdGg6IFByb3BlcnR5UGF0aCwgbmV3VmFsdWU6IFNldERhdGEpID0+IChvcmlnaW46IFQpID0+IFQgPSAocGF0aDogYW55LCB2YWx1ZSkgPT4gKG9yaWdpbikgPT4ge1xyXG4gIGxldCBuZXdEYXRhID0gY2xvbmVEZWVwKG9yaWdpbilcclxuICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcclxuICAgIGNvbnN0IG9sZERhdGEgPSBnZXQob3JpZ2luLCBwYXRoKVxyXG4gICAgc2V0KG5ld0RhdGEsIHBhdGgsIHZhbHVlKG9sZERhdGEpKVxyXG4gIH0gZWxzZSB7XHJcbiAgICBzZXQobmV3RGF0YSwgcGF0aCwgdmFsdWUpXHJcbiAgfVxyXG4gIHJldHVybiBuZXdEYXRhXHJcbn1cclxuXHJcbmNvbnN0IGN1c3RvbWl6ZXIgPSAob2JqVmFsdWU6IGFueSwgc3JjVmFsdWU6IGFueSkgPT4ge1xyXG4gIGlmIChpc0FycmF5KHNyY1ZhbHVlKSkge1xyXG4gICAgcmV0dXJuIHNyY1ZhbHVlXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZnBNZXJnZTogPFRPYmplY3QsIFRTb3VyY2UxPihcclxuICAgIG9yaWdpbjogVE9iamVjdCxcclxuICAgIG5ld1ZhbHVlOiBUU291cmNlMSxcclxuKSA9PiBUT2JqZWN0ICYgVFNvdXJjZTEgPSAob3JpZ2luLCBuZXdWYWx1ZSkgPT4ge1xyXG4gIHJldHVybiBtZXJnZVdpdGgoe30sIG9yaWdpbiwgbmV3VmFsdWUsIGN1c3RvbWl6ZXIpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmcE1lcmdlUHJlOiA8UHJlLCBOZXcgZXh0ZW5kcyBQYXJ0aWFsPFByZT4+KG5ld1ZhbHVlOiBOZXcpID0+IChvcmlnaW46IFByZSkgPT4gUHJlICYgTmV3ID0gKG5ld1ZhbHVlKSA9PiAocHJlKSA9PiBtZXJnZVdpdGgoe30sIHByZSwgbmV3VmFsdWUsIGN1c3RvbWl6ZXIpXHJcblxyXG5leHBvcnQgY29uc3QgZnBSZW1vdmUgPSAoYXJyOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcclxuICBpZiAoIWFycikgcmV0dXJuIFtdXHJcbiAgcmV0dXJuIFtcclxuICAgIC4uLmFycj8uc2xpY2UoMCwgaW5kZXgpLFxyXG4gICAgLi4uYXJyPy5zbGljZShpbmRleCArIDEsIGFycj8ubGVuZ3RoKSxcclxuICBdXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkZWFsTnVtYmVyWmVybyA9IChsZW5ndGg6IG51bWJlcikgPT4gKG51bTogbnVtYmVyKSA9PiB7XHJcbiAgY29uc3QgX3MgPSBgJHtudW0gPz8gJyd9YFxyXG4gIHJldHVybiBBcnJheShsZW5ndGggLSBfcy5sZW5ndGgpLmZpbGwoJzAnKS5qb2luKCcnKSArIF9zXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmb3JtYXREYXRlID0gKGRhdGU6IGFueSA9ICcnLCBmb3JtYXRTdHJpbmcgPSAnWVlZWS1NTS1kZCBISDptbTpzcycpID0+IHtcclxuICBpZiAoIWRhdGUpIHtcclxuICAgIHJldHVybiAnJ1xyXG4gIH1cclxuICBpZiAoaXNTdHJpbmcoZGF0ZSkpIHtcclxuICAgIHJldHVybiBmb3JtYXQobmV3IERhdGUoZGF0ZSksIGZvcm1hdFN0cmluZywge1xyXG4gICAgICB1c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zOiB0cnVlLFxyXG4gICAgICB1c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnM6IHRydWUsXHJcbiAgICB9KVxyXG4gIH1cclxuICByZXR1cm4gKGlzTmFOKGRhdGUpKSA/ICcnIDogZm9ybWF0KGRhdGUsIGZvcm1hdFN0cmluZywge1xyXG4gICAgdXNlQWRkaXRpb25hbERheU9mWWVhclRva2VuczogdHJ1ZSxcclxuICAgIHVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2VuczogdHJ1ZSxcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGVhbE5vbkJvb2xlYW5Qcm9wcyA9ICh2YWx1ZTogYW55KSA9PiAhIXZhbHVlID8gMSA6IDBcclxuXHJcbmV4cG9ydCBjb25zdCBmb3JtYXRNb25leSA9IChhbW91bnQ6IGFueSwgZGVjaW1hbENvdW50ID0gMiwgZGVjaW1hbCA9IFwiLlwiLCB0aG91c2FuZHMgPSBcIixcIikgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBkZWNpbWFsQ291bnQgPSBNYXRoLmFicyhkZWNpbWFsQ291bnQpXHJcbiAgICBkZWNpbWFsQ291bnQgPSBpc05hTihkZWNpbWFsQ291bnQpID8gMiA6IGRlY2ltYWxDb3VudFxyXG5cclxuICAgIGNvbnN0IG5lZ2F0aXZlU2lnbiA9IGFtb3VudCA8IDAgPyBcIi1cIiA6IFwiXCJcclxuXHJcbiAgICBsZXQgaSA9IHBhcnNlSW50KGFtb3VudCA9IE1hdGguYWJzKE51bWJlcihhbW91bnQpIHx8IDApLnRvRml4ZWQoZGVjaW1hbENvdW50KSkudG9TdHJpbmcoKVxyXG4gICAgbGV0IGogPSAoaS5sZW5ndGggPiAzKSA/IGkubGVuZ3RoICUgMyA6IDBcclxuXHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICByZXR1cm4gbmVnYXRpdmVTaWduICsgKGogPyBpLnN1YnN0cigwLCBqKSArIHRob3VzYW5kcyA6ICcnKSArIGkuc3Vic3RyKGopLnJlcGxhY2UoLyhcXGR7M30pKD89XFxkKS9nLCBcIiQxXCIgKyB0aG91c2FuZHMpICsgKGRlY2ltYWxDb3VudCA/IGRlY2ltYWwgKyBNYXRoLmFicyhhbW91bnQgLSBpKS50b0ZpeGVkKGRlY2ltYWxDb3VudCkuc2xpY2UoMikgOiBcIlwiKVxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGVhbE1vbmV5ID0gKGFtb3VudDogYW55LCBwcmUgPSAnJykgPT4gYCR7cHJlfSQgJHtmb3JtYXRNb25leShhbW91bnQpfWBcclxuXHJcbmV4cG9ydCBjb25zdCBkZWFsTWF5YmVOdW1iZXIgPSAobnVtOiBNYXliZTxudW1iZXI+IHwgdW5kZWZpbmVkKSA9PiBudW0gPz8gMFxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGdldE9iamVjdFVSTCxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRlYWxVcmxRdWVyeSA9IChxdWVyeU9iajogYW55KSA9PiB7XHJcbiAgcmV0dXJuIGA/JHtPYmplY3Qua2V5cyhxdWVyeU9iaikubWFwKHZhbHVlID0+IGAke3ZhbHVlfT0ke3F1ZXJ5T2JqW3ZhbHVlXX1gKS5qb2luKCcmJyl9YFxyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQWRkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkJ1xyXG5pbXBvcnQgUmVtb3ZlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUmVtb3ZlJ1xyXG5pbXBvcnQge1Nob3BDYXJ0fSBmcm9tICcuLi8uLi9ncmFwaHFsVHlwZXMvdHlwZXMnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7ZGVhbEltZ1VybH0gZnJvbSAnLi4vLi4vdG9vbHMvaW1nJ1xyXG5pbXBvcnQge2dyZXl9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycydcclxuaW1wb3J0IHtwcm9kdWN0TW9kZWwsIFByb2R1Y3RQcmljZX0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Qcm9kdWN0SXRlbS9Qcm9kdWN0SXRlbSdcclxuaW1wb3J0IHtCdXR0b24sIEljb25CdXR0b259IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQge3VzZVN0b3JlTW9kZWx9IGZyb20gJy4uLy4uL01vZGVsQWN0aW9uL3VzZVN0b3JlJ1xyXG5pbXBvcnQge2xzfSBmcm9tICcuLi8uLi90b29scy9kZWFsS2V5J1xyXG5pbXBvcnQge3Nob3BDYXJ0TW9kZWx9IGZyb20gJy4vaW5kZXgnXHJcbmltcG9ydCB7c2hvd01lc3NhZ2V9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTWVzc2FnZS9NZXNzYWdlJ1xyXG5pbXBvcnQge1VwZGF0ZVNob3BDYXJ0LCB1cGRhdGVTaG9wQ2FydE1vZGVsfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Byb2R1Y3RJdGVtL1VwZGF0ZVNob3BDYXJ0J1xyXG5cclxuZXhwb3J0IGNvbnN0IFNob3BDYXJ0UHJvZHVjdEJveCA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDIwcHgsIDcycHgpIDFmcjtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAyMnB4KSAzMHB4O1xyXG4gIGdyaWQtY29sdW1uLWdhcDogMTBweDtcclxuICA+IGltZyB7XHJcbiAgICBncmlkLWFyZWE6IDEvMS80LzI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICB9XHJcbiAgPiBzZWN0aW9uIHtcclxuICAgIGNvbG9yOiAke2dyZXlbNjAwXX1cclxuICB9XHJcbiAgPiBmb290ZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICA+IG1haW4ge1xyXG4gICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICB9XHJcbiAgICA+IGJ1dHRvbiB7XHJcbiAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQ2FydFByb2R1Y3QgPSAoe3Nob3BDYXJ0fTogeyBzaG9wQ2FydDogU2hvcENhcnQgfSkgPT4ge1xyXG4gIGNvbnN0IHthY3Rpb25zOiBhY3Rpb25zU0NNLCBzdGF0ZTogc3RhdGVTQ019ID0gdXNlU3RvcmVNb2RlbChzaG9wQ2FydE1vZGVsKVxyXG4gIGNvbnN0IHthY3Rpb25zOiBhY3Rpb25zUE19ID0gdXNlU3RvcmVNb2RlbChwcm9kdWN0TW9kZWwpXHJcbiAgY29uc3Qge2FjdGlvbnM6IGFjdGlvbnNVcGRhdGVTaG9wQ2FydE1vZGVsfSA9IHVzZVN0b3JlTW9kZWwodXBkYXRlU2hvcENhcnRNb2RlbClcclxuICBjb25zdCBwcm9kdWN0ID0gc2hvcENhcnQucHJvZHVjdFxyXG5cclxuICByZXR1cm4gPFNob3BDYXJ0UHJvZHVjdEJveD5cclxuICAgIDxpbWcgc3JjPXtkZWFsSW1nVXJsKHNob3BDYXJ0LnByb2R1Y3Q/LmltZz8uWzBdPy51cmwpfVxyXG4gICAgICAgICBhbHQ9XCJcIi8+XHJcbiAgICA8bWFpbj57cHJvZHVjdD8ubmFtZX17cHJvZHVjdD8ud2VpZ2h0fXtwcm9kdWN0Py51bml0fTwvbWFpbj5cclxuICAgIDxzZWN0aW9uPntwcm9kdWN0Py5yZW1hcmt9PC9zZWN0aW9uPlxyXG4gICAgPGZvb3Rlcj5cclxuICAgICAgPFByb2R1Y3RQcmljZSBwcm9kdWN0PXtwcm9kdWN0fS8+XHJcbiAgICAgIHsoc2hvcENhcnQuaXNOZXh0ID09PSAwICYmIDw+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBzaXplPXsnc21hbGwnfVxyXG4gICAgICAgICAgICB2YXJpYW50PXsnb3V0bGluZWQnfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXthc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgYXdhaXQgYWN0aW9uc1BNLnVwZGF0ZVNob3BDYXJ0KHtcclxuICAgICAgICAgICAgICAgIGlzTmV4dDogMSxcclxuICAgICAgICAgICAgICAgIGlkOiBzaG9wQ2FydC5pZCxcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIGFjdGlvbnNTQ00uZ2V0TGlzdCgpXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPntscygn5LiL5qyh6LSt5LmwJyl9PC9CdXR0b24+XHJcbiAgICAgICAgezxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgIGRpc2FibGVkPXsoc2hvcENhcnQ/Lm51bWJlciA/PyAwKSA8PSAxfVxyXG4gICAgICAgICAgICBzaXplPXsnc21hbGwnfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXthc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgYXdhaXQgYWN0aW9uc1BNLnVwZGF0ZU51bVNob3BDYXJ0KHtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3QsXHJcbiAgICAgICAgICAgICAgICBudW1iZXI6IC0xLFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgYWN0aW9uc1NDTS5nZXRMaXN0KClcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICA+PFJlbW92ZUljb24vPjwvSWNvbkJ1dHRvbj59XHJcbiAgICAgICAge3Nob3BDYXJ0Lm51bWJlcn1cclxuICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICBzaXplPXsnc21hbGwnfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXthc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgYXdhaXQgYWN0aW9uc1BNLnVwZGF0ZU51bVNob3BDYXJ0KHtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3QsXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICBhY3Rpb25zU0NNLmdldExpc3QoKVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxBZGRJY29uLz5cclxuICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgIDwvPikgfHwgPD5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luUmlnaHQ6ICc4cHgnfX1cclxuICAgICAgICAgICAgc2l6ZT17J3NtYWxsJ31cclxuICAgICAgICAgICAgdmFyaWFudD17J291dGxpbmVkJ31cclxuICAgICAgICAgICAgY29sb3I9eydzZWNvbmRhcnknfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXthc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgYXdhaXQgYWN0aW9uc1BNLnVwZGF0ZVNob3BDYXJ0KHtcclxuICAgICAgICAgICAgICAgIGlzRGVsZXRlOiAxLFxyXG4gICAgICAgICAgICAgICAgaWQ6IHNob3BDYXJ0LmlkLFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgYWN0aW9uc1NDTS5nZXRMaXN0KClcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICA+e2xzKCfliKDpmaQnKX08L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHNpemU9eydzbWFsbCd9XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9eydvdXRsaW5lZCd9XHJcbiAgICAgICAgICAgIC8vIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgLy8gICBpZiAoc3RhdGVTQ00uc2hvcENhcnRMaXN0LmZpbmRJbmRleCh2ID0+IHYucHJvZHVjdD8uaWQgPT09IHNob3BDYXJ0LnByb2R1Y3Q/LmlkKSA+IC0xKSB7XHJcbiAgICAgICAgICAgIC8vICAgICByZXR1cm4gc2hvd01lc3NhZ2UoJ+ivpeWVhuWTgeW3suWcqOi0reeJqei9puS4rScpXHJcbiAgICAgICAgICAgIC8vICAgfVxyXG4gICAgICAgICAgICAvLyAgIGF3YWl0IGFjdGlvbnNQTS51cGRhdGVTaG9wQ2FydCh7XHJcbiAgICAgICAgICAgIC8vICAgICBpc05leHQ6IDAsXHJcbiAgICAgICAgICAgIC8vICAgICBpZDogc2hvcENhcnQuaWQsXHJcbiAgICAgICAgICAgIC8vICAgfSlcclxuICAgICAgICAgICAgLy8gICBhY3Rpb25zU0NNLmdldExpc3QoKVxyXG4gICAgICAgICAgICAvLyB9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXthc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYWN0aW9uc1VwZGF0ZVNob3BDYXJ0TW9kZWwub3BlbkNsaWNrKClcclxuICAgICAgICAgICAgICBpZiAocmVzPy5udW0gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoKGF3YWl0IGFjdGlvbnNQTS51cGRhdGVOdW1TaG9wQ2FydCh7XHJcbiAgICAgICAgICAgICAgICAgIHByb2R1Y3QsXHJcbiAgICAgICAgICAgICAgICAgIG51bWJlcjogfn5yZXM/Lm51bSxcclxuICAgICAgICAgICAgICAgIH0pKT8udXBkYXRlTnVtU2hvcENhcnQ/LmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgIHNob3dNZXNzYWdlKCfmk43kvZzmiJDlip8nKVxyXG4gICAgICAgICAgICAgICAgICBhY3Rpb25zU0NNLmdldExpc3QoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICA+e2xzKCfliqDlhaXotK3nianovaYnKX08L0J1dHRvbj5cclxuICAgICAgPC8+fVxyXG4gICAgPC9mb290ZXI+XHJcbiAgPC9TaG9wQ2FydFByb2R1Y3RCb3g+XHJcbn1cclxuIiwiaW1wb3J0IHtkaWFsb2dNb2RlbEZhY3Rvcnl9IGZyb20gJy4uLy4uLy4uL2NvbW1vbk1vZGVsL2RpYWxvZydcclxuaW1wb3J0IHt1c2VTdG9yZU1vZGVsfSBmcm9tICcuLi8uLi8uLi9Nb2RlbEFjdGlvbi91c2VTdG9yZSdcclxuaW1wb3J0IHtCdXR0b24sIERpYWxvZywgRGlhbG9nQ29udGVudCwgVGV4dEZpZWxkfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge2xzfSBmcm9tICcuLi8uLi8uLi90b29scy9kZWFsS2V5J1xyXG5pbXBvcnQge21lcmdlVHdvTW9kZWwsIG1vZGVsRmFjdG9yeX0gZnJvbSAnLi4vLi4vLi4vTW9kZWxBY3Rpb24vbW9kZWxVdGlsJ1xyXG5pbXBvcnQge3NldEZvcm19IGZyb20gJy4uLy4uLy4uL3Rvb2xzL2NvbW1vbkFjdGlvbidcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHtzaG93TWVzc2FnZX0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9NZXNzYWdlL01lc3NhZ2UnXHJcblxyXG5leHBvcnQgY29uc3QgaW5wdXRQcm9tb0NvZGVNb2RlbCA9IG1lcmdlVHdvTW9kZWwoZGlhbG9nTW9kZWxGYWN0b3J5KCdpbnB1dFByb21vQ29kZU1vZGVsJywgKCgpID0+IHt9KSBhcyBGdW5jdGlvbiksIG1vZGVsRmFjdG9yeSgnaW5wdXQnLCB7XHJcbiAgZm9ybToge1xyXG4gICAgcHJvbW9Db2RlOiAnJyxcclxuICB9LFxyXG59LCB7XHJcbiAgc2V0Rm9ybTogc2V0Rm9ybSxcclxufSkpXHJcblxyXG5jb25zdCBGb290ZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbmBcclxuZXhwb3J0IGNvbnN0IElucHV0UHJvbW9Db2RlRGlhbG9nID0gKCkgPT4ge1xyXG4gIGNvbnN0IHthY3Rpb25zOiBhY3Rpb25zSW5wdXRQcm9tb0NvZGVNb2RlbCwgc3RhdGU6IHN0YXRlSW5wdXRQcm9tb0NvZGVNb2RlbH0gPSB1c2VTdG9yZU1vZGVsKGlucHV0UHJvbW9Db2RlTW9kZWwpXHJcbiAgcmV0dXJuIDxEaWFsb2dcclxuICAgICAgb3Blbj17c3RhdGVJbnB1dFByb21vQ29kZU1vZGVsLm9wZW59XHJcbiAgICAgIG9uQ2xvc2U9e2FjdGlvbnNJbnB1dFByb21vQ29kZU1vZGVsLm9uQ2xvc2V9XHJcbiAgPlxyXG4gICAgPERpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgIGxhYmVsPXtscygn6K+36L6T5YWl6aqM6K+B56CBJyl9XHJcbiAgICAgICAgICB2YWx1ZT17c3RhdGVJbnB1dFByb21vQ29kZU1vZGVsLmZvcm0ucHJvbW9Db2RlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IGFjdGlvbnNJbnB1dFByb21vQ29kZU1vZGVsLnNldEZvcm0oWydwcm9tb0NvZGUnLCBldmVudC50YXJnZXQudmFsdWVdKX1cclxuICAgICAgLz5cclxuICAgICAgPEZvb3Rlcj5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9eydjb250YWluZWQnfVxyXG4gICAgICAgICAgICBjb2xvcj17J3NlY29uZGFyeSd9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCB0ZXN0UmVzID0gYXdhaXQgc3RhdGVJbnB1dFByb21vQ29kZU1vZGVsLmRpYWxvZ0RhdGEoc3RhdGVJbnB1dFByb21vQ29kZU1vZGVsLmZvcm0ucHJvbW9Db2RlKVxyXG4gICAgICAgICAgICAgIGlmICh0ZXN0UmVzKSB7XHJcbiAgICAgICAgICAgICAgICBzaG93TWVzc2FnZSh0ZXN0UmVzKVxyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb25zSW5wdXRQcm9tb0NvZGVNb2RlbC5vbkNsb3NlKClcclxuICAgICAgICAgICAgICAgIGFjdGlvbnNJbnB1dFByb21vQ29kZU1vZGVsLnNldEZvcm0oWydwcm9tb0NvZGUnLCAnJ10pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID57bHMoJ+ehruWumicpfTwvQnV0dG9uPlxyXG4gICAgICA8L0Zvb3Rlcj5cclxuICAgIDwvRGlhbG9nQ29udGVudD5cclxuICA8L0RpYWxvZz5cclxufVxyXG4iLCJpbXBvcnQge0RpYWxvZywgRGlhbG9nVGl0bGUsIERpYWxvZ0NvbnRlbnQsIFJhZGlvLCBCdXR0b259IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7ZGlhbG9nTW9kZWxGYWN0b3J5fSBmcm9tICcuLi8uLi8uLi9jb21tb25Nb2RlbC9kaWFsb2cnXHJcbmltcG9ydCB7dXNlU3RvcmVNb2RlbH0gZnJvbSAnLi4vLi4vLi4vTW9kZWxBY3Rpb24vdXNlU3RvcmUnXHJcbmltcG9ydCB7bHN9IGZyb20gJy4uLy4uLy4uL3Rvb2xzL2RlYWxLZXknXHJcbmltcG9ydCB7c2hvcENhcnRNb2RlbH0gZnJvbSAnLi4vaW5kZXgnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHtQaWNrVXBUeXBlRW51bX0gZnJvbSAnLi4vLi4vLi4vc3NfY29tbW9uL2VudW0nXHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0QWRkcmVzc01vZGVsID0gZGlhbG9nTW9kZWxGYWN0b3J5KCdzZWxlY3RBZGRyZXNzTW9kZWwnLCB7fSlcclxuXHJcbmNvbnN0IEFkZHJlc3NCb3ggPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgbWluLWNvbnRlbnQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgZnIpO1xyXG4gIGdyaWQtcm93LWdhcDogOHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgPiBoZWFkZXIge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gID4gYXNpZGUge1xyXG4gICAgZ3JpZC1hcmVhOiAxLzIvMy8zO1xyXG4gIH1cclxuYFxyXG5jb25zdCBGb290ZXIgPSBzdHlsZWQuZGl2YFxyXG5cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFNlbGVjdEFkZHJlc3MgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCB7c3RhdGU6IHN0YXRlU0FNLCBhY3Rpb25zOiBhY3Rpb25zU0FNfSA9IHVzZVN0b3JlTW9kZWwoc2VsZWN0QWRkcmVzc01vZGVsKVxyXG4gIGNvbnN0IHtzdGF0ZTogc3RhdGVTaG9wQ2FydE1vZGVsLCBhY3Rpb25zOiBhY3Rpb25zU2hvcENhcnRNb2RlbH0gPSB1c2VTdG9yZU1vZGVsKHNob3BDYXJ0TW9kZWwpXHJcbiAgY29uc3QgYWRkcmVzc0xpc3QgPSBzdGF0ZVNob3BDYXJ0TW9kZWwuZGVhbEFkZHJlc3NMaXN0KHN0YXRlU2hvcENhcnRNb2RlbClcclxuXHJcblxyXG4gIHJldHVybiA8RGlhbG9nXHJcbiAgICAgIG9wZW49e3N0YXRlU0FNLm9wZW59XHJcbiAgICAgIG9uQ2xvc2U9e2FjdGlvbnNTQU0ub25DbG9zZX1cclxuICA+XHJcbiAgICA8RGlhbG9nVGl0bGU+e2xzKCfpgInmi6nlnLDlnYAnKX08L0RpYWxvZ1RpdGxlPlxyXG4gICAgPERpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgIHthZGRyZXNzTGlzdC5tYXAodiA9PiA8QWRkcmVzc0JveCBrZXk9e2BEaWFsb2dUaXRsZUFkZHJlc3NCb3hfJHt2LmlkfWB9PlxyXG4gICAgICAgIDxoZWFkZXI+e3YuY29tYmluZUFkZHJlc3N9PC9oZWFkZXI+XHJcbiAgICAgICAgPGZvb3Rlcj57YCR7di5uYW1lfSAke3YuY29udGFjdEluZm9ybWF0aW9ufWB9PC9mb290ZXI+XHJcbiAgICAgICAgPGFzaWRlPlxyXG4gICAgICAgICAgPFJhZGlvXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIHN0YXRlU0FNLm9wZW5SZXNvbHZlKHYuaWQpXHJcbiAgICAgICAgICAgICAgICBhY3Rpb25zU0FNLm9uQ2xvc2UoKVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgY2hlY2tlZD17di5pZCA9PT0gc3RhdGVTaG9wQ2FydE1vZGVsLmZvcm0uYWRkcmVzc0lkfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2FzaWRlPlxyXG4gICAgICA8L0FkZHJlc3NCb3g+KX1cclxuICAgICAgPEZvb3Rlcj5cclxuICAgICAgICB7c3RhdGVTaG9wQ2FydE1vZGVsLmZvcm0ucGlja1VwVHlwZSA9PT0gUGlja1VwVHlwZUVudW0uRGVsaXZlcnkgJiZcclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGZ1bGxXaWR0aD17dHJ1ZX1cclxuICAgICAgICAgICAgdmFyaWFudD17J2NvbnRhaW5lZCd9XHJcbiAgICAgICAgICAgIGNvbG9yPXsnc2Vjb25kYXJ5J31cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvbWUvbXlBZGRyZXNzL2VkaXQvW2lkXScsICcvbWUvbXlBZGRyZXNzL2VkaXQvMCcpXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPntscygn5re75Yqg5paw5Zyw5Z2AJyl9PC9CdXR0b24+XHJcbiAgICAgICAgfVxyXG4gICAgICA8L0Zvb3Rlcj5cclxuICAgIDwvRGlhbG9nQ29udGVudD5cclxuICA8L0RpYWxvZz5cclxufVxyXG4iLCJpbXBvcnQge0RpYWxvZywgRGlhbG9nVGl0bGUsIERpYWxvZ0NvbnRlbnQsIFJhZGlvLCBCdXR0b259IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7ZGlhbG9nTW9kZWxGYWN0b3J5fSBmcm9tICcuLi8uLi8uLi9jb21tb25Nb2RlbC9kaWFsb2cnXHJcbmltcG9ydCB7dXNlU3RvcmVNb2RlbH0gZnJvbSAnLi4vLi4vLi4vTW9kZWxBY3Rpb24vdXNlU3RvcmUnXHJcbmltcG9ydCB7bHN9IGZyb20gJy4uLy4uLy4uL3Rvb2xzL2RlYWxLZXknXHJcbmltcG9ydCB7c2hvcENhcnRNb2RlbH0gZnJvbSAnLi4vaW5kZXgnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RDYXJkTW9kZWwgPSBkaWFsb2dNb2RlbEZhY3RvcnkoJ3NlbGVjdENhcmRNb2RlbCcsIHt9KVxyXG5cclxuY29uc3QgQ2FyZEJveCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCg2MHZ3LCAxZnIpIG1pbi1jb250ZW50O1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIGZyKTtcclxuICBncmlkLXJvdy1nYXA6IDhweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gID4gaGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICA+IGFzaWRlIHtcclxuICAgIGdyaWQtYXJlYTogMS8yLzMvMztcclxuICB9XHJcbmBcclxuY29uc3QgRm9vdGVyID0gc3R5bGVkLmRpdmBcclxuXHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBTZWxlY3RDYXJkID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3Qge3N0YXRlOiBzdGF0ZVNlbGVjdENhcmQsIGFjdGlvbnM6IGFjdGlvbnNTZWxlY3RDYXJkfSA9IHVzZVN0b3JlTW9kZWwoc2VsZWN0Q2FyZE1vZGVsKVxyXG4gIGNvbnN0IHtzdGF0ZTogc3RhdGVTaG9wQ2FydE1vZGVsLCBhY3Rpb25zOiBhY3Rpb25zU2hvcENhcnRNb2RlbH0gPSB1c2VTdG9yZU1vZGVsKHNob3BDYXJ0TW9kZWwpXHJcblxyXG4gIHJldHVybiA8RGlhbG9nXHJcbiAgICAgIG9wZW49e3N0YXRlU2VsZWN0Q2FyZC5vcGVufVxyXG4gICAgICBvbkNsb3NlPXthY3Rpb25zU2VsZWN0Q2FyZC5vbkNsb3NlfVxyXG4gID5cclxuICAgIDxEaWFsb2dUaXRsZT57bHMoJ+mAieaLqeS/oeeUqOWNoScpfTwvRGlhbG9nVGl0bGU+XHJcbiAgICA8RGlhbG9nQ29udGVudD5cclxuICAgICAge3N0YXRlU2hvcENhcnRNb2RlbC5wYXlDYXJkTGlzdC5tYXAodiA9PiA8Q2FyZEJveCBrZXk9e2BEaWFsb2dUaXRsZUFkZHJlc3NCb3hfJHt2LmlkfWB9PlxyXG4gICAgICAgIDxoZWFkZXI+e3YubmFtZX08L2hlYWRlcj5cclxuICAgICAgICA8Zm9vdGVyPntgJHt2Lm51bWJlcn1gfTwvZm9vdGVyPlxyXG4gICAgICAgIDxhc2lkZT5cclxuICAgICAgICAgIDxSYWRpb1xyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZVNlbGVjdENhcmQub3BlblJlc29sdmUodi5pZClcclxuICAgICAgICAgICAgICAgIGFjdGlvbnNTZWxlY3RDYXJkLm9uQ2xvc2UoKVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgY2hlY2tlZD17di5pZCA9PT0gc3RhdGVTaG9wQ2FydE1vZGVsLmZvcm0ucGF5bWVudE1ldGhvZENhcmRJZH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9hc2lkZT5cclxuICAgICAgPC9DYXJkQm94Pil9XHJcbiAgICAgIDxGb290ZXI+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBmdWxsV2lkdGg9e3RydWV9XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9eydjb250YWluZWQnfVxyXG4gICAgICAgICAgICBjb2xvcj17J3NlY29uZGFyeSd9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnL21lL215Q3JlZGl0Q2FyZC9lZGl0L1tpZF0nLCAnL21lL215Q3JlZGl0Q2FyZC9lZGl0LzAnKVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID57bHMoJ+a3u+WKoOaWsOaWueW8jycpfTwvQnV0dG9uPlxyXG4gICAgICA8L0Zvb3Rlcj5cclxuICAgIDwvRGlhbG9nQ29udGVudD5cclxuICA8L0RpYWxvZz5cclxufVxyXG4iLCJpbXBvcnQge21vZGVsRmFjdG9yeX0gZnJvbSAnLi4vLi4vTW9kZWxBY3Rpb24vbW9kZWxVdGlsJ1xyXG5pbXBvcnQge1xyXG4gIERpY3QsXHJcbiAgT3JkZXJJbmZvSXRlbUlucHV0LFxyXG4gIFByb21vQ29kZSxcclxuICBQcm9tb0NvZGVJdGVtSW5wdXQsXHJcbiAgU2hvcENhcnQsXHJcbiAgVXNlcixcclxuICBVc2VyQWRkcmVzcyxcclxuICBVc2VyUGF5Q2FyZCxcclxufSBmcm9tICcuLi8uLi9ncmFwaHFsVHlwZXMvdHlwZXMnXHJcbmltcG9ydCB7UGlja1VwVHlwZUVudW19IGZyb20gJy4uLy4uL3NzX2NvbW1vbi9lbnVtJ1xyXG5pbXBvcnQge2RlYWxNYXliZU51bWJlciwgZnBNZXJnZVByZSwgZnBTZXRQcmV9IGZyb20gJy4uLy4uL3Rvb2xzL3V0aWxzJ1xyXG5pbXBvcnQge3NldEZvcm19IGZyb20gJy4uLy4uL3Rvb2xzL2NvbW1vbkFjdGlvbidcclxuaW1wb3J0IHtkb2N9IGZyb20gJy4uLy4uL2dyYXBocWxUeXBlcy9kb2MnXHJcbmltcG9ydCB7U2hvcENhcnRQYWdlfSBmcm9tICcuL3Nob3BDYXJ0J1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7dXNlU3RvcmVNb2RlbH0gZnJvbSAnLi4vLi4vTW9kZWxBY3Rpb24vdXNlU3RvcmUnXHJcbmltcG9ydCB7T3JkZXJQYWdlfSBmcm9tICcuL29yZGVyUGFnZSdcclxuaW1wb3J0IHtsc30gZnJvbSAnLi4vLi4vdG9vbHMvZGVhbEtleSdcclxuXHJcbmV4cG9ydCBjb25zdCBwYWdlVHlwZUVudW0gPSB7XHJcbiAgc2hvcENhcnQ6ICdzaG9wQ2FydCcsXHJcbiAgb3JkZXI6ICdvcmRlcicsXHJcbn1cclxuXHJcbmNvbnN0IGluaXRGb3JtOiBPcmRlckluZm9JdGVtSW5wdXQgPSB7XHJcbiAgcGlja1VwVHlwZTogUGlja1VwVHlwZUVudW0uU2VsZixcclxuICBhZGRyZXNzSWQ6ICcnLFxyXG4gIHBheW1lbnRNZXRob2RDYXJkSWQ6ICcnLFxyXG4gIGRlZHVjdENvaW46IDAsXHJcbiAgc2FsZVRheDogMCxcclxuICB0cmFuc3BvcnRhdGlvbkNvc3RzOiAwLFxyXG4gIGNvdXBvbkRpc2NvdW50OiAwLFxyXG59XHJcbmV4cG9ydCBjb25zdCBzaG9wQ2FydE1vZGVsID0gbW9kZWxGYWN0b3J5KCdzaG9wQ2FydE1vZGVsJywge1xyXG4gIHVzZXI6IHt9IGFzIFVzZXIsXHJcbiAgcHJvbW9Db2RlOiB7fSBhcyBQcm9tb0NvZGUsXHJcbiAgcHJvbW9Db2RlRXJyb3I6ICcnLFxyXG4gIHBheUNhcmRMaXN0OiBbXSBhcyBVc2VyUGF5Q2FyZFtdLFxyXG4gIHVzZXJBZGRyZXNzTGlzdDogW10gYXMgVXNlckFkZHJlc3NbXSxcclxuICBzZWxmQWRkcmVzczogW10gYXMgYW55W10sXHJcbiAgZnJlaWdodENvbmZpZzogW10gYXMgYW55W10sXHJcbiAgdXNlckxldmVsTGlzdDogW10gYXMgRGljdFtdLFxyXG4gIHBhZ2VUeXBlOiBwYWdlVHlwZUVudW0uc2hvcENhcnQsXHJcbiAgc2hvcENhcnRMaXN0OiBbXSBhcyBTaG9wQ2FydFtdLFxyXG4gIHNob3BDYXJ0TGlzdE5leHQ6IFtdIGFzIFNob3BDYXJ0W10sXHJcbiAgZm9ybToge1xyXG4gICAgLi4uaW5pdEZvcm0sXHJcbiAgfSBhcyBPcmRlckluZm9JdGVtSW5wdXQsXHJcbiAgZGVhbFByb2R1Y3ROdW1iZXI6IChzdGF0ZTogYW55KSA9PiAoc3RhdGUuc2hvcENhcnRMaXN0IGFzIGFueVtdKS5yZWR1Y2UoKHByZSwgY3VyKSA9PiBwcmUgKyAoY3VyPy5udW1iZXIgPz8gMCksIDApLFxyXG4gIGRlYWxBZGRyZXNzTGlzdDogKChzdGF0ZTogYW55KSA9PiAoc3RhdGUuZm9ybS5waWNrVXBUeXBlID09PSBQaWNrVXBUeXBlRW51bS5EZWxpdmVyeSAmJiBzdGF0ZS51c2VyQWRkcmVzc0xpc3QpIHx8IHN0YXRlLnNlbGZBZGRyZXNzLm1hcCgodjogYW55KSA9PiAoe1xyXG4gICAgLi4udixcclxuICAgIGNvbWJpbmVBZGRyZXNzOiBgJHt2LnByb3ZpbmNlfSAke3YuY2l0eX0gJHt2LnN0cmVldEFkZHJlc3N9YCxcclxuICAgIG5hbWU6IHYuZnVsbE5hbWUsXHJcbiAgICBjb250YWN0SW5mb3JtYXRpb246IHYucGhvbmUsXHJcbiAgfSkpKSBhcyAoc3RhdGU6IGFueSkgPT4gVXNlckFkZHJlc3NbXSxcclxuICBkZWFsQWRkcmVzc0RhdGE6IChzdGF0ZTogYW55KSA9PiBzdGF0ZS5kZWFsQWRkcmVzc0xpc3Qoc3RhdGUpLmZpbmQoKHY6IFVzZXJBZGRyZXNzKSA9PiB2LmlkID09PSBzdGF0ZS5mb3JtLmFkZHJlc3NJZCkgfHwge30sXHJcbiAgaW5pdEFkZHJlc3NJZDogKHN0YXRlOiBhbnkpID0+IChzdGF0ZS5mb3JtLnBpY2tVcFR5cGUgPT09IFBpY2tVcFR5cGVFbnVtLkRlbGl2ZXJ5ICYmIHN0YXRlLnVzZXJBZGRyZXNzTGlzdD8uZmluZCgodjogVXNlckFkZHJlc3MpID0+IHYuaXNEZWZhdWx0KT8uaWQpIHx8IHN0YXRlLnNlbGZBZGRyZXNzPy5bMF0/LmlkLFxyXG4gIGRlYWxQcm9kdWN0VG90YWw6IChzdGF0ZTogYW55KSA9PiBzdGF0ZS5zaG9wQ2FydExpc3QucmVkdWNlKChwcmU6IGFueSwgY3VyOiBhbnkpID0+IHByZSArIChkZWFsTWF5YmVOdW1iZXIoY3VyPy5udW1iZXIpICogZGVhbE1heWJlTnVtYmVyKGN1cj8ucHJvZHVjdD8ucHJpY2VPdXQpKSwgMCksXHJcbiAgZGVhbFRyYW5zcG9ydGF0aW9uQ29zdHM6IChzdGF0ZTogYW55LCBwcm9kdWN0VG90YWw6IGFueSkgPT4ge1xyXG4gICAgcmV0dXJuIChzdGF0ZS5mb3JtLnBpY2tVcFR5cGUgPT09IFBpY2tVcFR5cGVFbnVtLkRlbGl2ZXJ5ICYmIChzdGF0ZS5mcmVpZ2h0Q29uZmlnLnJlZHVjZSgocHJlOiBhbnksIGN1cjogYW55KSA9PiB7XHJcbiAgICAgIGlmIChwcmUgPiBwYXJzZUZsb2F0KGN1cj8uZnJlaWdodFBheSkgJiYgcHJvZHVjdFRvdGFsIDwgcGFyc2VGbG9hdChjdXI/Lm9yZGVyTWF4KSkge1xyXG4gICAgICAgIHJldHVybiBwYXJzZUZsb2F0KGN1cj8uZnJlaWdodFBheSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gcHJlXHJcbiAgICAgIH1cclxuICAgIH0sIHBhcnNlRmxvYXQoc3RhdGUuZnJlaWdodENvbmZpZ1tzdGF0ZS5mcmVpZ2h0Q29uZmlnLmxlbmd0aCAtIDFdPy5mcmVpZ2h0UGF5KSkpKSB8fCAwXHJcbiAgfSxcclxufSwge1xyXG4gIGNsZWFyRGF0YTogKHZhbHVlLCBvcHRpb24pID0+IHtcclxuICAgIG9wdGlvbi5zZXREYXRhKGZwTWVyZ2VQcmUoe1xyXG4gICAgICBmb3JtOiBpbml0Rm9ybSxcclxuICAgICAgcGFnZVR5cGU6IHBhZ2VUeXBlRW51bS5zaG9wQ2FydCxcclxuICAgIH0pKVxyXG4gIH0sXHJcbiAgY2xlYXJGb3JtOiAodmFsdWUsIG9wdGlvbikgPT4gb3B0aW9uLnNldERhdGEoZnBNZXJnZVByZSh7XHJcbiAgICBmb3JtOiB7XHJcbiAgICAgIC4uLmluaXRGb3JtLFxyXG4gICAgfSxcclxuICB9KSksXHJcbiAgc2V0Rm9ybTogc2V0Rm9ybSxcclxuICBnZXRMaXN0OiBhc3luYyAodmFsdWUsIG9wdGlvbikgPT4ge1xyXG4gICAgY29uc3QgdXNlclJlcyA9IGF3YWl0IG9wdGlvbi5xdWVyeShkb2Mub25lVXNlcilcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IG9wdGlvbi5xdWVyeShkb2MudXNlclNob3BDYXJ0TGlzdClcclxuICAgIG9wdGlvbi5zZXREYXRhKGZwTWVyZ2VQcmUoe1xyXG4gICAgICB1c2VyOiB1c2VyUmVzPy5vbmVVc2VyID8/IHt9LFxyXG4gICAgICBzaG9wQ2FydExpc3Q6IHJlcz8uc2hvcENhcnRMaXN0LmZpbHRlcigodjogU2hvcENhcnQpID0+ICF2LmlzTmV4dCkgPz8gW10sXHJcbiAgICAgIHNob3BDYXJ0TGlzdE5leHQ6IHJlcz8uc2hvcENhcnRMaXN0LmZpbHRlcigodjogU2hvcENhcnQpID0+ICEhdi5pc05leHQpID8/IFtdLFxyXG4gICAgfSkpXHJcbiAgfSxcclxuICBkZWFsUHJvbW9Db2RlOiBhc3luYyAodmFsdWU6IHN0cmluZywgb3B0aW9uKSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBvcHRpb24ucXVlcnkoZG9jLnByb21vQ29kZUxpc3QsIHtcclxuICAgICAgcHJvbW9Db2RlSXRlbUlucHV0OiB7XHJcbiAgICAgICAgY29kZTogdmFsdWUsXHJcbiAgICAgIH0gYXMgUHJvbW9Db2RlSXRlbUlucHV0LFxyXG4gICAgfSlcclxuICAgIGlmIChyZXM/LnByb21vQ29kZUxpc3Q/Lmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICBjb25zdCBwcm9tb0NvZGU6IFByb21vQ29kZSA9IHJlcy5wcm9tb0NvZGVMaXN0WzBdXHJcbiAgICAgIG9wdGlvbi5zZXREYXRhKGZwTWVyZ2VQcmUoe1xyXG4gICAgICAgIHByb21vQ29kZSxcclxuICAgICAgfSkpXHJcbiAgICAgIHJldHVybiAnJ1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGxzKCfmnKrljLnphY3liLDkvJjmg6DnoIEnKVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgdXBkYXRlUGFnZVR5cGU6ICh2YWx1ZTogc3RyaW5nLCBvcHRpb24pID0+IG9wdGlvbi5zZXREYXRhKGZwTWVyZ2VQcmUoe1xyXG4gICAgcGFnZVR5cGU6IHZhbHVlLFxyXG4gIH0pKSxcclxuICB1cGRhdGVQYXlDYXJkTGlzdDogYXN5bmMgKHZhbHVlLCBvcHRpb24pID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IG9wdGlvbi5xdWVyeShkb2Mub3JkZXJDb25maXJtSW5mbylcclxuICAgIG9wdGlvbi5zZXREYXRhKGZwTWVyZ2VQcmUoe1xyXG4gICAgICBwYXlDYXJkTGlzdDogcmVzPy5wYXlDYXJkTGlzdE9uZVVzZXIsXHJcbiAgICB9KSlcclxuICB9LFxyXG4gIGdldE9yZGVySW5mbzogYXN5bmMgKHZhbHVlLCBvcHRpb24pID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IG9wdGlvbi5xdWVyeShkb2Mub3JkZXJDb25maXJtSW5mbylcclxuICAgIG9wdGlvbi5zZXREYXRhKGZwU2V0UHJlKCd1c2VyJywgcmVzPy5vbmVVc2VyKSlcclxuICAgIG9wdGlvbi5zZXREYXRhKGZwTWVyZ2VQcmUoe1xyXG4gICAgICBwYXlDYXJkTGlzdDogcmVzPy5wYXlDYXJkTGlzdE9uZVVzZXIsXHJcbiAgICAgIHVzZXJBZGRyZXNzTGlzdDogcmVzPy51c2VyQWRkcmVzc0xpc3RPbmVVc2VyLFxyXG4gICAgICBzZWxmQWRkcmVzczogcmVzPy5nZXREYXRhQ29uZmlnPy52YWx1ZT8ubGlzdCA/PyBbXSxcclxuICAgICAgZnJlaWdodENvbmZpZzogcmVzPy5mcmVpZ2h0Q29uZmlnPy52YWx1ZT8uZnJlaWdodExpc3QgPz8gW10sXHJcbiAgICAgIHVzZXJMZXZlbExpc3Q6IHJlcz8udXNlckxldmVsTGlzdCA/PyBbXSxcclxuICAgIH0pKVxyXG4gICAgb3B0aW9uLnNldERhdGEoZnBNZXJnZVByZSh7XHJcbiAgICAgIGZvcm06IHtcclxuICAgICAgICBhZGRyZXNzSWQ6IChvcHRpb24uZGF0YS5mb3JtLnBpY2tVcFR5cGUgPT09IFBpY2tVcFR5cGVFbnVtLkRlbGl2ZXJ5ICYmIHJlcz8udXNlckFkZHJlc3NMaXN0T25lVXNlcj8uZmluZCgodjogVXNlckFkZHJlc3MpID0+IHYuaXNEZWZhdWx0KT8uaWQpIHx8IHJlcz8uZ2V0RGF0YUNvbmZpZz8udmFsdWU/Lmxpc3Q/LlswXT8uaWQsXHJcbiAgICAgICAgcGF5bWVudE1ldGhvZENhcmRJZDogKHJlcz8ucGF5Q2FyZExpc3RPbmVVc2VyIGFzIFVzZXJQYXlDYXJkW10pPy5maW5kKHYgPT4gdi5pc0RlZmF1bHQpPy5pZCB8fCAnJyxcclxuICAgICAgfSxcclxuICAgIH0pKVxyXG4gIH0sXHJcbiAgc3VibWl0OiBhc3luYyAodmFsdWU6IE9yZGVySW5mb0l0ZW1JbnB1dCwgb3B0aW9uKSA9PiB7XHJcbiAgICByZXR1cm4gYXdhaXQgb3B0aW9uLm11dGF0ZShkb2Muc2F2ZU9yZGVyLCB7XHJcbiAgICAgIG9yZGVySW5mb0l0ZW1JbnB1dDoge1xyXG4gICAgICAgIC4uLnZhbHVlLFxyXG4gICAgICB9IGFzIE9yZGVySW5mb0l0ZW1JbnB1dCxcclxuICAgIH0pXHJcbiAgfSxcclxuICB0ZXN0UHJvbW9Db2RlOiBhc3luYyAodmFsdWU6IHN0cmluZywgb3B0aW9uKSA9PiB7XHJcbiAgICByZXR1cm4gJzEyMydcclxuICB9LFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IENhcnRQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHtzdGF0ZTogc3RhdGVTQ019ID0gdXNlU3RvcmVNb2RlbChzaG9wQ2FydE1vZGVsKVxyXG4gIHJldHVybiAoc3RhdGVTQ00ucGFnZVR5cGUgPT09IHBhZ2VUeXBlRW51bS5vcmRlciAmJiA8T3JkZXJQYWdlLz4pIHx8IDxTaG9wQ2FydFBhZ2UvPlxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDaGV2cm9uUmlnaHRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DaGV2cm9uUmlnaHQnXHJcbmltcG9ydCB7SGVhZGVyVGl0bGV9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSGVhZGVyVGl0bGUvSGVhZGVyVGl0bGUnXHJcbmltcG9ydCB7dXNlU3RvcmVNb2RlbH0gZnJvbSAnLi4vLi4vTW9kZWxBY3Rpb24vdXNlU3RvcmUnXHJcbmltcG9ydCB7cGFnZVR5cGVFbnVtLCBzaG9wQ2FydE1vZGVsfSBmcm9tICcuL2luZGV4J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQge2xzfSBmcm9tICcuLi8uLi90b29scy9kZWFsS2V5J1xyXG5pbXBvcnQge1BpY2tVcFR5cGVFbnVtfSBmcm9tICcuLi8uLi9zc19jb21tb24vZW51bSdcclxuaW1wb3J0IHtkb2N9IGZyb20gJy4uLy4uL2dyYXBocWxUeXBlcy9kb2MnXHJcbmltcG9ydCB7SWNvbkJ1dHRvbiwgTGluZWFyUHJvZ3Jlc3MsIFRleHRGaWVsZH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCB7QlNjcm9sbGVyfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0JTY3JvbGwvQlNjcm9sbGVyJ1xyXG5pbXBvcnQge1NwYWNlfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0JveC9Cb3gnXHJcbmltcG9ydCB7U2VsZWN0QWRkcmVzcywgc2VsZWN0QWRkcmVzc01vZGVsfSBmcm9tICcuL2NvbXBvbmVudHMvU2VsZWN0QWRkcmVzcydcclxuaW1wb3J0IHtncmV5fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMnXHJcbmltcG9ydCB7U2VsZWN0Q2FyZCwgc2VsZWN0Q2FyZE1vZGVsfSBmcm9tICcuL2NvbXBvbmVudHMvU2VsZWN0Q2FyZCdcclxuaW1wb3J0IHtkZWFsTWF5YmVOdW1iZXIsIGRlYWxNb25leSwgZGVhbFVybFF1ZXJ5fSBmcm9tICcuLi8uLi90b29scy91dGlscydcclxuaW1wb3J0IHttcFN0eWxlfSBmcm9tICcuLi8uLi9zdHlsZS9jb21tb24nXHJcbmltcG9ydCB7QnV0dG9uTG9hZH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CdXR0b25Mb2FkL0J1dHRvbkxvYWQnXHJcbmltcG9ydCB7c2hvd01lc3NhZ2V9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTWVzc2FnZS9NZXNzYWdlJ1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5leHBvcnQgY29uc3QgU2hvcFRpdGxlID0gc3R5bGVkLmRpdmBcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgPiBmb290ZXIge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICR7bXBTdHlsZS5yZWR9O1xyXG4gIH1cclxuYFxyXG5leHBvcnQgY29uc3QgQWRkcmVzc0JveCA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgPiBtYWluIHtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgID4gaGVhZGVyIHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5leHBvcnQgY29uc3QgQ2FyZEJveCA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogMTZweCAyMHB4O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgbWluLWNvbnRlbnQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcclxuICA+IGhlYWRlciB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICB9XHJcbiAgPiBhc2lkZSB7XHJcbiAgICBncmlkLWFyZWE6IDEvMi8zLzM7XHJcbiAgfVxyXG5gXHJcbmV4cG9ydCBjb25zdCBTaG9wVG90YWwgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDAgMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG5gXHJcbmV4cG9ydCBjb25zdCBGb290ZXJGaXQgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgcGFkZGluZzogMTZweCAyNHB4O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBtYXgtY29udGVudDtcclxuICBncmlkLXJvdy1nYXA6IDhweDtcclxuICBib3gtc2hhZG93OiAke21wU3R5bGUuc2hhZG93WycxJ119O1xyXG4gID4gaGVhZGVyIHtcclxuICAgID4gc3BhbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgIH1cclxuICB9XHJcbiAgPiBhc2lkZSB7XHJcbiAgICBncmlkLWFyZWE6IDEvMi8zLzM7XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgT3JkZXJQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3Qge2FjdGlvbnM6IGFjdGlvbnNTQU19ID0gdXNlU3RvcmVNb2RlbChzZWxlY3RBZGRyZXNzTW9kZWwpXHJcbiAgY29uc3Qge2FjdGlvbnM6IGFjdGlvbnNTZWxlY3RDYXJkfSA9IHVzZVN0b3JlTW9kZWwoc2VsZWN0Q2FyZE1vZGVsKVxyXG4gIGNvbnN0IHtzdGF0ZTogc3RhdGVTQ00sIGFjdGlvbnM6IGFjdGlvbnNTQ00sIGdldExvYWR9ID0gdXNlU3RvcmVNb2RlbChzaG9wQ2FydE1vZGVsKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYWN0aW9uc1NDTS5nZXRPcmRlckluZm8oKVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBhZGRyZXNzRGF0YSA9IHN0YXRlU0NNLmRlYWxBZGRyZXNzRGF0YShzdGF0ZVNDTSlcclxuICBjb25zdCBjYXJkRGF0YSA9IHN0YXRlU0NNLnBheUNhcmRMaXN0Py5maW5kKHYgPT4gdi5pZCA9PT0gc3RhdGVTQ00uZm9ybS5wYXltZW50TWV0aG9kQ2FyZElkKSB8fCB7fVxyXG4gIGNvbnN0IHByb2R1Y3RUb3RhbCA9IHN0YXRlU0NNLmRlYWxQcm9kdWN0VG90YWwoc3RhdGVTQ00pXHJcbiAgY29uc3QgdHJhbnNwb3J0YXRpb25Db3N0cyA9IHN0YXRlU0NNLmRlYWxUcmFuc3BvcnRhdGlvbkNvc3RzKHN0YXRlU0NNLCBwcm9kdWN0VG90YWwpXHJcbiAgY29uc3QgYWN0dWFsbHlQYWlkID0gcHJvZHVjdFRvdGFsICsgdHJhbnNwb3J0YXRpb25Db3N0cyAtIGRlYWxNYXliZU51bWJlcihzdGF0ZVNDTS5mb3JtLmRlZHVjdENvaW4pICsgZGVhbE1heWJlTnVtYmVyKHN0YXRlU0NNLmZvcm0uc2FsZVRheCkgLSBkZWFsTWF5YmVOdW1iZXIoc3RhdGVTQ00uZm9ybT8uY291cG9uRGlzY291bnQpXHJcbiAgY29uc3QgZ2VuZXJhdGVDb2luID0gYWN0dWFsbHlQYWlkICogMC4wMVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHN0YXRlU0NNLnBhZ2VUeXBlID09PSBwYWdlVHlwZUVudW0ub3JkZXIpIHtcclxuICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsICcnLCBkb2N1bWVudC5VUkwpO1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCAoc3RhdGUpID0+IHtcclxuICAgICAgICAvLyDnm5HlkKzliLDov5Tlm57kuovku7bvvIzms6jmhI/vvIzlj6rmnInop6blj5Hkuobov5Tlm57miY3kvJrmiafooYzov5nkuKrmlrnms5VcclxuICAgICAgICBhY3Rpb25zU0NNLnVwZGF0ZVBhZ2VUeXBlKHBhZ2VUeXBlRW51bS5zaG9wQ2FydClcclxuICAgICAgfSwgZmFsc2UpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCAoc3RhdGUpID0+IHtcclxuICAgICAgICBhY3Rpb25zU0NNLnVwZGF0ZVBhZ2VUeXBlKHBhZ2VUeXBlRW51bS5zaG9wQ2FydClcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LCBbc3RhdGVTQ00ucGFnZVR5cGVdKVxyXG5cclxuICByZXR1cm4gPGRpdj5cclxuICAgIDxIZWFkZXJUaXRsZVxyXG4gICAgICAgIHRpdGxlPXsn6K6i5Y2V5pSv5LuYJ31cclxuICAgICAgICBiYWNrQ2FsbD17KCkgPT4ge1xyXG4gICAgICAgICAgYWN0aW9uc1NDTS51cGRhdGVQYWdlVHlwZShwYWdlVHlwZUVudW0uc2hvcENhcnQpXHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH19XHJcbiAgICAvPlxyXG4gICAgeyghIWdldExvYWQoZG9jLm9yZGVyQ29uZmlybUluZm8pICYmIDxMaW5lYXJQcm9ncmVzcy8+KSB8fCA8ZGl2IHN0eWxlPXt7aGVpZ2h0OiAnNHB4J319Lz59XHJcbiAgICA8QlNjcm9sbGVyXHJcbiAgICAgICAgYm94SGVpZ2h0PXsnY2FsYygxMDB2aCAtIDEzNXB4KSd9XHJcbiAgICA+XHJcbiAgICAgIDxTcGFjZSBoPXsxMH0vPlxyXG4gICAgICA8U2hvcFRpdGxlPlxyXG4gICAgICAgIDxTcGFjZSB3PXsyMH0vPlxyXG4gICAgICAgIHtscygoc3RhdGVTQ00uZm9ybS5waWNrVXBUeXBlID09PSBQaWNrVXBUeXBlRW51bS5TZWxmICYmICfoh6rlj5blnLDlnYAnKSB8fCAn6YCB6LSn5Zyw5Z2AJyl9XHJcbiAgICAgIDwvU2hvcFRpdGxlPlxyXG4gICAgICA8QWRkcmVzc0JveD5cclxuICAgICAgICA8bWFpbj5cclxuICAgICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgIHtgJHthZGRyZXNzRGF0YS5jb21iaW5lQWRkcmVzc31gfVxyXG4gICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgICB7YCR7YWRkcmVzc0RhdGEubmFtZX0gJHthZGRyZXNzRGF0YS5jb250YWN0SW5mb3JtYXRpb259YH1cclxuICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICAgICA8YXNpZGU+XHJcbiAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGFjdGlvbnNTQU0ub3BlbkNsaWNrKClcclxuICAgICAgICAgICAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgYWN0aW9uc1NDTS5zZXRGb3JtKFsnYWRkcmVzc0lkJywgcmVzXSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8Q2hldnJvblJpZ2h0SWNvbi8+XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgPC9hc2lkZT5cclxuICAgICAgPC9BZGRyZXNzQm94PlxyXG4gICAgICA8U3BhY2UgYz17Z3JleVsyMDBdfVxyXG4gICAgICAgICAgICAgaD17MTZ9Lz5cclxuICAgICAgPFNwYWNlIGg9ezE2fS8+XHJcbiAgICAgIDxTaG9wVGl0bGU+XHJcbiAgICAgICAgPFNwYWNlIHc9ezIwfS8+XHJcbiAgICAgICAge2xzKCfku5jmrL7mlrnlvI8nKX1cclxuICAgICAgPC9TaG9wVGl0bGU+XHJcbiAgICAgIDxDYXJkQm94PlxyXG4gICAgICAgIDxoZWFkZXI+e2NhcmREYXRhLm5hbWV9PC9oZWFkZXI+XHJcbiAgICAgICAgPGZvb3Rlcj57Y2FyZERhdGEubnVtYmVyfTwvZm9vdGVyPlxyXG4gICAgICAgIDxhc2lkZT5cclxuICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17YXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYWN0aW9uc1NlbGVjdENhcmQub3BlbkNsaWNrKClcclxuICAgICAgICAgICAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgYWN0aW9uc1NDTS5zZXRGb3JtKFsncGF5bWVudE1ldGhvZENhcmRJZCcsIHJlc10pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPENoZXZyb25SaWdodEljb24vPlxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgIDwvYXNpZGU+XHJcbiAgICAgIDwvQ2FyZEJveD5cclxuICAgICAgPFNwYWNlIGM9e2dyZXlbMjAwXX1cclxuICAgICAgICAgICAgIGg9ezE2fS8+XHJcbiAgICAgIDxTcGFjZSBoPXsxNn0vPlxyXG4gICAgICA8U2hvcFRpdGxlPlxyXG4gICAgICAgIDxTcGFjZSB3PXsyMH0vPlxyXG4gICAgICAgIHtscygn5L2/55So6L6+5Lq65biBJyl9XHJcbiAgICAgICAgPFNwYWNlIHc9ezE2fS8+XHJcbiAgICAgICAgPGZvb3Rlcj57bHMoJ+W9k+aciOWPr+eUqOS9meminScpfXtkZWFsTW9uZXkoc3RhdGVTQ00udXNlci5vcmRlckNvaW5DdXJyZW50TW9udGgpfTwvZm9vdGVyPlxyXG4gICAgICA8L1Nob3BUaXRsZT5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8U3BhY2Ugdz17MjB9Lz5cclxuICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luVG9wOiAnOHB4JywgbWFyZ2luQm90dG9tOiAnMjRweCd9fVxyXG4gICAgICAgICAgICBsYWJlbD17bHMoJycpfVxyXG4gICAgICAgICAgICB2YWx1ZT17c3RhdGVTQ00uZm9ybS5kZWR1Y3RDb2lufVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgYWN0aW9uc1NDTS5zZXRGb3JtKFsnZGVkdWN0Q29pbicsIGUudGFyZ2V0LnZhbHVlXSlcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPFNwYWNlIGM9e2dyZXlbMjAwXX1cclxuICAgICAgICAgICAgIGg9ezE2fS8+XHJcbiAgICAgIDxTcGFjZSBoPXsxNn0vPlxyXG4gICAgICA8U2hvcFRvdGFsPlxyXG4gICAgICAgIDxoZWFkZXI+e2xzKCfotK3nianovabmgLvorqEnKX08L2hlYWRlcj5cclxuICAgICAgICA8Zm9vdGVyPntkZWFsTW9uZXkocHJvZHVjdFRvdGFsIC0gKHN0YXRlU0NNLmZvcm0/LmNvdXBvbkRpc2NvdW50ID8/IDApKX08L2Zvb3Rlcj5cclxuICAgICAgPC9TaG9wVG90YWw+XHJcbiAgICAgIHsvKntkZWFsTWF5YmVOdW1iZXIoc3RhdGVTQ00uZm9ybT8uY291cG9uRGlzY291bnQpID4gMCAmJiA8U2hvcFRvdGFsPiovfVxyXG4gICAgICB7LyogIDxoZWFkZXI+e2xzKCfkvJjmg6DmipjmiaMnKX08L2hlYWRlcj4qL31cclxuICAgICAgey8qICA8Zm9vdGVyPntkZWFsTW9uZXkoc3RhdGVTQ00uZm9ybT8uY291cG9uRGlzY291bnQpfTwvZm9vdGVyPiovfVxyXG4gICAgICB7Lyo8L1Nob3BUb3RhbD59Ki99XHJcbiAgICAgIHt0cmFuc3BvcnRhdGlvbkNvc3RzID4gMCAmJiA8U2hvcFRvdGFsPlxyXG4gICAgICAgIDxoZWFkZXI+e2xzKCfov5DotLknKX08L2hlYWRlcj5cclxuICAgICAgICA8Zm9vdGVyPntkZWFsTW9uZXkodHJhbnNwb3J0YXRpb25Db3N0cyl9PC9mb290ZXI+XHJcbiAgICAgIDwvU2hvcFRvdGFsPn1cclxuICAgICAgPFNob3BUb3RhbD5cclxuICAgICAgICA8aGVhZGVyPntscygn6L6+5Lq65biB5oq15omjJyl9PC9oZWFkZXI+XHJcbiAgICAgICAgPGZvb3Rlcj57ZGVhbE1vbmV5KHN0YXRlU0NNLmZvcm0uZGVkdWN0Q29pbiwgJy0nKX08L2Zvb3Rlcj5cclxuICAgICAgPC9TaG9wVG90YWw+XHJcbiAgICAgIHsvKjxTaG9wVG90YWw+Ki99XHJcbiAgICAgIHsvKiAgPGhlYWRlcj57bHMoJ+a2iOi0ueeojicpfTwvaGVhZGVyPiovfVxyXG4gICAgICB7LyogIDxmb290ZXI+e2RlYWxNb25leShzdGF0ZVNDTS5mb3JtLnNhbGVUYXgpfTwvZm9vdGVyPiovfVxyXG4gICAgICB7Lyo8L1Nob3BUb3RhbD4qL31cclxuICAgICAgPFNob3BUb3RhbFxyXG4gICAgICAgICAgc3R5bGU9e3tmb250U2l6ZTogJzE4cHgnfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxoZWFkZXI+e2xzKCforqLljZXmgLvpop0nKX08L2hlYWRlcj5cclxuICAgICAgICA8Zm9vdGVyPntkZWFsTW9uZXkoYWN0dWFsbHlQYWlkKX08L2Zvb3Rlcj5cclxuICAgICAgPC9TaG9wVG90YWw+XHJcbiAgICAgIDxTcGFjZSBoPXszMH0vPlxyXG4gICAgPC9CU2Nyb2xsZXI+XHJcbiAgICA8Rm9vdGVyRml0PlxyXG4gICAgICA8aGVhZGVyPntscygn5pys5qyh6K6i5Y2VJyl9XHJcbiAgICAgICAgPHNwYW4+e2xzKHN0YXRlU0NNLnVzZXJMZXZlbExpc3QuZmluZCh2ID0+IHYuY29kZSA9PT0gc3RhdGVTQ00udXNlci51c2VySW5mbz8udXNlckxldmVsKT8ubmFtZSl9PC9zcGFuPlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgICAgPGZvb3Rlcj57bHMoJ+WwhuiOt+W+l+S4i+aciOS9v+eUqOi+vuS6uuW4gSAnKX1cclxuICAgICAgICA8c3Bhbj57ZGVhbE1vbmV5KGdlbmVyYXRlQ29pbil9PC9zcGFuPlxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgICAgPGFzaWRlPlxyXG4gICAgICAgIDxCdXR0b25Mb2FkXHJcbiAgICAgICAgICAgIGxvYWRpbmc9e2dldExvYWQoZG9jLnNhdmVPcmRlcil9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICBpZiAoZGVhbE1heWJlTnVtYmVyKHN0YXRlU0NNLnVzZXI/Lm9yZGVyQ29pbkN1cnJlbnRNb250aCkgPCBkZWFsTWF5YmVOdW1iZXIoc3RhdGVTQ00uZm9ybS5kZWR1Y3RDb2luKSkge1xyXG4gICAgICAgICAgICAgICAgc2hvd01lc3NhZ2UobHMoJ+i+vuS6uuW4geS9memineS4jei2sycpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICBjb25zdCBzdWJtaXREYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGVTQ00uZm9ybSxcclxuICAgICAgICAgICAgICAgIGdlbmVyYXRlQ29pbixcclxuICAgICAgICAgICAgICAgIGFjdHVhbGx5UGFpZCxcclxuICAgICAgICAgICAgICAgIHRyYW5zcG9ydGF0aW9uQ29zdHMsXHJcbiAgICAgICAgICAgICAgICBzdWJ0b3RhbDogcHJvZHVjdFRvdGFsLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudFVzZXJMZXZlbDogc3RhdGVTQ00udXNlci51c2VySW5mbz8udXNlckxldmVsLFxyXG4gICAgICAgICAgICAgICAgck9yZGVyUHJvZHVjdDogc3RhdGVTQ00uc2hvcENhcnRMaXN0Lm1hcCh2ID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgIGNvdW50OiB2Lm51bWJlcixcclxuICAgICAgICAgICAgICAgICAgcHJvZHVjdElkOiB2LnByb2R1Y3Q/LmlkLFxyXG4gICAgICAgICAgICAgICAgICBwcm9kdWN0OiB2LnByb2R1Y3QsXHJcbiAgICAgICAgICAgICAgICB9KSksXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGFjdGlvbnNTQ00uc3VibWl0KHtcclxuICAgICAgICAgICAgICAgIC4uLnN1Ym1pdERhdGEsXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICBpZiAocmVzPy5zYXZlT3JkZXI/LmlkKSB7XHJcbiAgICAgICAgICAgICAgICBzaG93TWVzc2FnZSgn5pON5L2c5oiQ5YqfIOWwhuWJjeW+gOS7mOasvicpXHJcbiAgICAgICAgICAgICAgICAvLyBhd2FpdCByb3V0ZXIucmVwbGFjZSgnL2NhcnQvcmVzdWx0JylcclxuICAgICAgICAgICAgICAgIGNvbnN0IF9xdWVyeSA9IGRlYWxVcmxRdWVyeSh7b3JkZXJJZDogcmVzPy5zYXZlT3JkZXI/LmlkfSlcclxuICAgICAgICAgICAgICAgIGF3YWl0IHJvdXRlci5yZXBsYWNlKGAvcGF5JHtfcXVlcnl9YCwgYC9wYXkke19xdWVyeX1gKVxyXG4gICAgICAgICAgICAgICAgYWN0aW9uc1NDTS5jbGVhckRhdGEoKVxyXG4gICAgICAgICAgICAgICAgYWN0aW9uc1NDTS5nZXRMaXN0KClcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9eydjb250YWluZWQnfVxyXG4gICAgICAgICAgICBjb2xvcj17J3NlY29uZGFyeSd9XHJcbiAgICAgICAgPntscygn5o+Q5Lqk6K6i5Y2VJyl9PC9CdXR0b25Mb2FkPlxyXG4gICAgICA8L2FzaWRlPlxyXG4gICAgPC9Gb290ZXJGaXQ+XHJcbiAgICA8U2VsZWN0QWRkcmVzcy8+XHJcbiAgICA8U2VsZWN0Q2FyZC8+XHJcbiAgPC9kaXY+XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtkb2N9IGZyb20gJy4uLy4uL2dyYXBocWxUeXBlcy9kb2MnXHJcbmltcG9ydCB7ZGVhbE1heWJlTnVtYmVyLCBkZWFsTW9uZXksIGZwTWVyZ2V9IGZyb20gJy4uLy4uL3Rvb2xzL3V0aWxzJ1xyXG5pbXBvcnQge3VzZVN0b3JlTW9kZWx9IGZyb20gJy4uLy4uL01vZGVsQWN0aW9uL3VzZVN0b3JlJ1xyXG5pbXBvcnQge2xzfSBmcm9tICcuLi8uLi90b29scy9kZWFsS2V5J1xyXG5pbXBvcnQge0hlYWRlclRpdGxlfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0hlYWRlclRpdGxlL0hlYWRlclRpdGxlJ1xyXG5pbXBvcnQge0JveCwgQnV0dG9uLCBMaW5lYXJQcm9ncmVzcywgTWVudUl0ZW0sIFRleHRGaWVsZH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCB7Z3JleX0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzJ1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQge0Rpc2NvdW50Q29uZGl0aW9uRW51bSwgRGlzY291bnRUeXBlRW51bSwgZ2V0UGlja1VwVHlwZU5hbWUsIFBpY2tVcFR5cGVFbnVtfSBmcm9tICcuLi8uLi9zc19jb21tb24vZW51bSdcclxuaW1wb3J0IHtDYXJ0UHJvZHVjdCwgU2hvcENhcnRQcm9kdWN0Qm94fSBmcm9tICcuL0NhcnRQcm9kdWN0J1xyXG5pbXBvcnQge0JTY3JvbGxlcn0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CU2Nyb2xsL0JTY3JvbGxlcidcclxuaW1wb3J0IHtwYWdlVHlwZUVudW0sIHNob3BDYXJ0TW9kZWx9IGZyb20gJy4vaW5kZXgnXHJcbmltcG9ydCB7ZGVhbE5vQXV0aH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Ob0F1dGgvTm9BdXRoJ1xyXG5pbXBvcnQge1NwYWNlfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0JveC9Cb3gnXHJcbmltcG9ydCB7SW5wdXRQcm9tb0NvZGVEaWFsb2csIGlucHV0UHJvbW9Db2RlTW9kZWx9IGZyb20gJy4vY29tcG9uZW50cy9JbnB1dFByb21vQ29kZSdcclxuaW1wb3J0IENsb3NlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2UnXHJcbmltcG9ydCB7VXBkYXRlU2hvcENhcnR9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUHJvZHVjdEl0ZW0vVXBkYXRlU2hvcENhcnQnXHJcblxyXG5jb25zdCBCb3hDb250YWluID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgcGFkZGluZzogMCAyMHB4O1xyXG5gXHJcbmNvbnN0IFRpdGxlID0gc3R5bGVkLmRpdmBcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luOiAxNnB4IDAgMTJweDtcclxuYFxyXG5jb25zdCBQcm9tb0NvZGUgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgPiBhc2lkZSB7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiAke2dyZXlbMTAwXX07XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIH1cclxuYFxyXG5jb25zdCBNb25leSA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbmBcclxuY29uc3QgRml4Rm9vdGVyID0gc3R5bGVkKEJveClgXHJcbiAgcGFkZGluZzogMjBweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBTaG9wQ2FydFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3Qge3N0YXRlOiBzdGF0ZVNDTSwgYWN0aW9uczogYWN0aW9uc1NDTSwgZ2V0TG9hZH0gPSB1c2VTdG9yZU1vZGVsKHNob3BDYXJ0TW9kZWwpXHJcbiAgY29uc3Qge2FjdGlvbnM6IGFjdGlvbnNJbnB1dFByb21vQ29kZU1vZGVsfSA9IHVzZVN0b3JlTW9kZWwoaW5wdXRQcm9tb0NvZGVNb2RlbClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzdGF0ZVNDTS5zaG9wQ2FydExpc3QubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGFjdGlvbnNTQ00uZ2V0TGlzdCgpXHJcbiAgICB9XHJcbiAgfSwgW10pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzdGF0ZVNDTS51c2VyLmlkICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBwcm9tb0NvZGVfJHtzdGF0ZVNDTS51c2VyLmlkfWApKSB7XHJcbiAgICAgIGFjdGlvbnNTQ00uZGVhbFByb21vQ29kZShgJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgcHJvbW9Db2RlXyR7c3RhdGVTQ00udXNlci5pZH1gKX1gKVxyXG4gICAgfVxyXG4gIH0sIFtzdGF0ZVNDTS51c2VyLmlkXSlcclxuICBjb25zdCBwcm9kdWN0TnVtYmVyID0gc3RhdGVTQ00uZGVhbFByb2R1Y3ROdW1iZXIoc3RhdGVTQ00pXHJcbiAgY29uc3QgcHJvZHVjdFN1YnRvdGFsID0gZGVhbE1vbmV5KHN0YXRlU0NNLmRlYWxQcm9kdWN0VG90YWwoc3RhdGVTQ00pKVxyXG5cclxuICBjb25zdCBwcm9tb0NvZGUgPSBzdGF0ZVNDTS5wcm9tb0NvZGVcclxuICBjb25zdCBkaXNjb3VudFByb2R1Y3QgPSBzdGF0ZVNDTS5zaG9wQ2FydExpc3QuZmlsdGVyKHYgPT4gW3YucHJvZHVjdD8uY2F0ZWdvcnk/LmlkLCB2LnByb2R1Y3Q/LmNhdGVnb3J5Py5wYXJlbnRDYXRlZ29yeT8uaWQsIHYucHJvZHVjdD8uY2F0ZWdvcnk/LnBhcmVudENhdGVnb3J5Py5wYXJlbnRDYXRlZ29yeT8uaWRdLmluY2x1ZGVzKHByb21vQ29kZS5wcm9kdWN0Q2F0ZWdvcnkpKVxyXG4gIGNvbnN0IGRpc2NvdW50UHJvZHVjdEFtb3VudCA9IGRpc2NvdW50UHJvZHVjdC5yZWR1Y2UoKHByZXZpb3VzVmFsdWUsIGN1cnJlbnRWYWx1ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHByZXZpb3VzVmFsdWUgKyBkZWFsTWF5YmVOdW1iZXIoY3VycmVudFZhbHVlLm51bWJlcikgKiBkZWFsTWF5YmVOdW1iZXIoY3VycmVudFZhbHVlLnByb2R1Y3Q/LnByaWNlT3V0KVxyXG4gIH0sIDApXHJcbiAgLy8g6K6h566X5oqY5omjXHJcbiAgbGV0IGRpc2NvdW50QW1vdW50Rm9yUHJvbW9Db2RlID0gMFxyXG4gIGlmIChkaXNjb3VudFByb2R1Y3QubGVuZ3RoKSB7XHJcbiAgICAvLyDmipjmiaPmnaHku7ZcclxuICAgIGlmIChwcm9tb0NvZGUuZGlzY291bnRDb25kaXRpb24gPT09IERpc2NvdW50Q29uZGl0aW9uRW51bS5Ob1xyXG4gICAgICAgIHx8IChwcm9tb0NvZGUuZGlzY291bnRDb25kaXRpb24gPT09IERpc2NvdW50Q29uZGl0aW9uRW51bS5BbW91bnQgJiYgZGlzY291bnRQcm9kdWN0QW1vdW50ID4gZGVhbE1heWJlTnVtYmVyKHByb21vQ29kZS5kaXNjb3VudENvbmRpdGlvbkFtb3VudCkpKSB7XHJcbiAgICAgIGRpc2NvdW50QW1vdW50Rm9yUHJvbW9Db2RlID0gcHJvbW9Db2RlLmRpc2NvdW50VHlwZSA9PT0gRGlzY291bnRUeXBlRW51bS5BbW91bnQgPyBkZWFsTWF5YmVOdW1iZXIocHJvbW9Db2RlLmRpc2NvdW50QW1vdW50KSA6IChkZWFsTWF5YmVOdW1iZXIocHJvbW9Db2RlLmRpc2NvdW50QW1vdW50KSAqIGRpc2NvdW50UHJvZHVjdEFtb3VudCAvIDEwMClcclxuICAgIH1cclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChkaXNjb3VudEFtb3VudEZvclByb21vQ29kZSkge1xyXG4gICAgICBhY3Rpb25zU0NNLnNldEZvcm0oWydjb3Vwb25EaXNjb3VudCcsIGRpc2NvdW50QW1vdW50Rm9yUHJvbW9Db2RlXSlcclxuICAgIH1cclxuICB9LCBbZGlzY291bnRBbW91bnRGb3JQcm9tb0NvZGVdKVxyXG4gIGNvbnN0IGFsbFRvdGFsID0gc3RhdGVTQ00uZGVhbFByb2R1Y3RUb3RhbChzdGF0ZVNDTSkgLSBkZWFsTWF5YmVOdW1iZXIoc3RhdGVTQ00uZm9ybS5jb3Vwb25EaXNjb3VudClcclxuXHJcbiAgcmV0dXJuIDxkaXY+XHJcbiAgICA8SGVhZGVyVGl0bGVcclxuICAgICAgICB0aXRsZT17J+i0reeJqei9pid9XHJcbiAgICAgICAgTGVmdEljb249e0Nsb3NlSWNvbn1cclxuICAgIC8+XHJcbiAgICB7ZGVhbE5vQXV0aCg8PlxyXG4gICAgICB7KCEhZ2V0TG9hZChkb2MudXNlclNob3BDYXJ0TGlzdCkgJiYgPExpbmVhclByb2dyZXNzLz4pIHx8IDxkaXYgc3R5bGU9e3toZWlnaHQ6ICc0cHgnfX0vPn1cclxuICAgICAgPEJTY3JvbGxlciBib3hIZWlnaHQ9eydjYWxjKDEwMHZoIC0gNjVweCknfT5cclxuICAgICAgICA8Qm94Q29udGFpbj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdUb3A6ICcxNnB4JywgZm9udFNpemU6ICcxOHB4JywgdGV4dEFsaWduOiAnY2VudGVyJ319XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtwcm9kdWN0TnVtYmVyfXtscygn5Lu25ZWG5ZOBJyl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6ICcxNHB4JyxcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JleVs2MDBdLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAnOHB4JyxcclxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzEwcHgnLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtscygn5bCP6K6hJyl9Ontwcm9kdWN0U3VidG90YWx9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHtzdGF0ZVNDTS5zaG9wQ2FydExpc3QubWFwKHZhbHVlID0+IDxDYXJ0UHJvZHVjdFxyXG4gICAgICAgICAgICAgIGtleT17YENhcnRQcm9kdWN0XyR7dmFsdWUuaWR9YH1cclxuICAgICAgICAgICAgICBzaG9wQ2FydD17dmFsdWV9Lz4pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Ub3A6ICcxMHB4J319XHJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoPXt0cnVlfVxyXG4gICAgICAgICAgICAgIGxhYmVsPXtscygn6L+Q6YCB5pa55byPJyl9XHJcbiAgICAgICAgICAgICAgc2VsZWN0PXt0cnVlfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZVNDTS5mb3JtLnBpY2tVcFR5cGV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbnNTQ00uc2V0Rm9ybShbJ3BpY2tVcFR5cGUnLCBldmVudC50YXJnZXQudmFsdWVdKVxyXG4gICAgICAgICAgICAgICAgYWN0aW9uc1NDTS5zZXRGb3JtKFsnYWRkcmVzc0lkJywgc3RhdGVTQ00uaW5pdEFkZHJlc3NJZChmcE1lcmdlKHN0YXRlU0NNLCB7XHJcbiAgICAgICAgICAgICAgICAgIGZvcm06IHtcclxuICAgICAgICAgICAgICAgICAgICBwaWNrVXBUeXBlOiBldmVudC50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KSldKVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e1BpY2tVcFR5cGVFbnVtLlNlbGZ9XHJcbiAgICAgICAgICAgID57bHMoZ2V0UGlja1VwVHlwZU5hbWUoUGlja1VwVHlwZUVudW0uU2VsZikpfTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e1BpY2tVcFR5cGVFbnVtLkRlbGl2ZXJ5fVxyXG4gICAgICAgICAgICA+e2xzKGdldFBpY2tVcFR5cGVOYW1lKFBpY2tVcFR5cGVFbnVtLkRlbGl2ZXJ5KSl9PC9NZW51SXRlbT5cclxuICAgICAgICAgIDwvVGV4dEZpZWxkPlxyXG4gICAgICAgICAgPFRpdGxlPntscygn6L6+5Lq65Y2h5ZKM5LyY5oOg5Yi4Jyl9PC9UaXRsZT5cclxuICAgICAgICAgIDxQcm9tb0NvZGU+XHJcbiAgICAgICAgICAgIDxtYWluPntzdGF0ZVNDTS5wcm9tb0NvZGUudGl0bGV9PC9tYWluPlxyXG4gICAgICAgICAgICA8YXNpZGU+e2xzKCdjb2RlJyl9OiB7c3RhdGVTQ00ucHJvbW9Db2RlLmNvZGV9PC9hc2lkZT5cclxuICAgICAgICAgIDwvUHJvbW9Db2RlPlxyXG4gICAgICAgICAgPFNwYWNlIGg9ezh9Lz5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICB2YXJpYW50PXsnb3V0bGluZWQnfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IGFjdGlvbnNJbnB1dFByb21vQ29kZU1vZGVsLm9wZW5DbGljaygocHJvbW9Db2RlOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGFjdGlvbnNTQ00uZGVhbFByb21vQ29kZShwcm9tb0NvZGUpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+e2xzKHN0YXRlU0NNLnByb21vQ29kZS5jb2RlID8gJ+mHjeaWsOi+k+WFpScgOiAn6L6T5YWl6aqM6K+B56CBJyl9PC9CdXR0b24+XHJcbiAgICAgICAgICA8SW5wdXRQcm9tb0NvZGVEaWFsb2cvPlxyXG4gICAgICAgICAgPFRpdGxlPntscygn6aKE5Lyw5Lu35qC8Jyl9PC9UaXRsZT5cclxuICAgICAgICAgIDxNb25leT5cclxuICAgICAgICAgICAgPGFzaWRlPntscygn5bCP6K6hJyl9PC9hc2lkZT5cclxuICAgICAgICAgICAgPG1haW4+e3Byb2R1Y3RTdWJ0b3RhbH08L21haW4+XHJcbiAgICAgICAgICA8L01vbmV5PlxyXG4gICAgICAgICAgPFNwYWNlIGg9ezEwfS8+XHJcbiAgICAgICAgICA8TW9uZXk+XHJcbiAgICAgICAgICAgIDxhc2lkZT57bHMoJ+aKmOaJoycpfTwvYXNpZGU+XHJcbiAgICAgICAgICAgIDxtYWluPntkZWFsTW9uZXkoc3RhdGVTQ00uZm9ybS5jb3Vwb25EaXNjb3VudCl9PC9tYWluPlxyXG4gICAgICAgICAgPC9Nb25leT5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMHB4J319Lz5cclxuICAgICAgICAgIDxNb25leT5cclxuICAgICAgICAgICAgPGFzaWRlPntscygn5oC76K6hJyl9PC9hc2lkZT5cclxuICAgICAgICAgICAgPG1haW4+e2RlYWxNb25leShhbGxUb3RhbCl9PC9tYWluPlxyXG4gICAgICAgICAgPC9Nb25leT5cclxuICAgICAgICAgIDxUaXRsZT57bHMoJ+S4i+asoei0reS5sOeahOWVhuWTgScpfTwvVGl0bGU+XHJcbiAgICAgICAgICB7c3RhdGVTQ00uc2hvcENhcnRMaXN0TmV4dC5tYXAodmFsdWUgPT4gPENhcnRQcm9kdWN0XHJcbiAgICAgICAgICAgICAga2V5PXtgQ2FydFByb2R1Y3RfJHt2YWx1ZS5pZH1gfVxyXG4gICAgICAgICAgICAgIHNob3BDYXJ0PXt2YWx1ZX0vPil9XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwcHgnfX0vPlxyXG4gICAgICAgIDwvQm94Q29udGFpbj5cclxuICAgICAgPC9CU2Nyb2xsZXI+XHJcbiAgICAgIDxGaXhGb290ZXIgYm94U2hhZG93PXsxfT5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9eydjb250YWluZWQnfVxyXG4gICAgICAgICAgICBjb2xvcj17J3NlY29uZGFyeSd9XHJcbiAgICAgICAgICAgIGZ1bGxXaWR0aD17dHJ1ZX1cclxuICAgICAgICAgICAgZGlzYWJsZWQ9e3Byb2R1Y3ROdW1iZXIgPT09IDB9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFjdGlvbnNTQ00udXBkYXRlUGFnZVR5cGUocGFnZVR5cGVFbnVtLm9yZGVyKX1cclxuICAgICAgICA+5Y6757uT566XPC9CdXR0b24+XHJcbiAgICAgIDwvRml4Rm9vdGVyPlxyXG4gICAgICA8VXBkYXRlU2hvcENhcnQvPlxyXG4gICAgPC8+KX1cclxuICA8L2Rpdj5cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7QXBwTW9kdWxlVHlwZUVudW0sIERpY3RUeXBlRW51bX0gZnJvbSAnLi4vLi4vc3NfY29tbW9uL2VudW0nXHJcbmltcG9ydCB7Q2F0ZWdvcnksIERhdGFDb25maWcsIERhdGFDb25maWdJdGVtSW5wdXR9IGZyb20gJy4uLy4uL2dyYXBocWxUeXBlcy90eXBlcydcclxuaW1wb3J0IHttb2RlbEZhY3Rvcnl9IGZyb20gJy4uLy4uL01vZGVsQWN0aW9uL21vZGVsVXRpbCdcclxuaW1wb3J0IHtIb21lVGFicywgaG9tZVRhYnNNb2RlbH0gZnJvbSAnLi9jb21wb25lbnRzL1RhYnMvVGFicydcclxuaW1wb3J0IEN1c0Nhcm91c2VsIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU3dpcGUvU3dpcGUnXHJcbmltcG9ydCB7SGVhZGVyU2VhcmNofSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0hlYWRlclNlYXJjaC9IZWFkZXJTZWFyY2gnXHJcbmltcG9ydCB7Rm9vdEJhcn0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Gb290QmFyL0Zvb3RCYXInXHJcbmltcG9ydCB7QlNjcm9sbGVyfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0JTY3JvbGwvQlNjcm9sbGVyJ1xyXG5pbXBvcnQge2dyZXl9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycydcclxuaW1wb3J0IHt1c2VTdG9yZU1vZGVsfSBmcm9tICcuLi8uLi9Nb2RlbEFjdGlvbi91c2VTdG9yZSdcclxuaW1wb3J0IHtnZXREYXRhQ29uZmlnLCBob21lQ2Fyb3VzZWxJbWdzfSBmcm9tICcuLi8uLi9ncmFwaHFsVHlwZXMvZG9jJ1xyXG5pbXBvcnQge2ZwTWVyZ2VQcmV9IGZyb20gJy4uLy4uL3Rvb2xzL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IEhvbWVUeXBlID0ge1xyXG4gIGhvbWU6ICdob21lJyxcclxuICBncm91cDogJ2dyb3VwJyxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGhvbWVDYXJvdXNlbE1vZGVsID0gbW9kZWxGYWN0b3J5KCdob21lQ2Fyb3VzZWxNb2RlbCcsIHtcclxuICBob21lQ2Fyb3VzZWxJbWdzOiBbXSBhcyBEYXRhQ29uZmlnLFxyXG59LCB7XHJcbiAgZ2V0SG9tZUNhcm91c2VsOiBhc3luYyAodmFsdWUsIG9wdGlvbikgPT4ge1xyXG4gICAgY29uc3QgcmVzMiA9IGF3YWl0IG9wdGlvbi5xdWVyeShnZXREYXRhQ29uZmlnLCB7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICB0eXBlOiBEaWN0VHlwZUVudW0uSG9tZUNhcm91c2VsLFxyXG4gICAgICB9IGFzIERhdGFDb25maWdJdGVtSW5wdXRcclxuICAgIH0sIHt9KVxyXG4gICAgY29uc3Qge19fdHlwZW5hbWUsIC4uLnJlc3R9ID0gcmVzMj8uZ2V0RGF0YUNvbmZpZ1xyXG4gICAgY29uc3QgaG9tZUNhcm91c2VsRGF0YUNvbWZpZyA9IGF3YWl0IG9wdGlvbi5xdWVyeShob21lQ2Fyb3VzZWxJbWdzLCB7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICAuLi5yZXN0LFxyXG4gICAgICB9IGFzIERhdGFDb25maWdJdGVtSW5wdXRcclxuICAgIH0sIHt9KVxyXG4gICAgb3B0aW9uLnNldERhdGEoZnBNZXJnZVByZSh7XHJcbiAgICAgIGhvbWVDYXJvdXNlbEltZ3M6IGhvbWVDYXJvdXNlbERhdGFDb21maWcuaG9tZUNhcm91c2VsSW1ncyxcclxuICAgIH0pKVxyXG4gIH0sXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgSG9tZUFwcE1vZHVsZSA9ICh0eXBlPzogc3RyaW5nKSA9PiBmdW5jdGlvbiAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvbWVDYXJvdXNlbEltZ3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9tZUNhdGVnb3J5U2VsZWN0aW9uX2xpc3REYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcE1vZHVsZUNvbmZpZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfToge1xyXG4gIGhvbWVDYXJvdXNlbEltZ3M6IERhdGFDb25maWcsXHJcbiAgYXBwTW9kdWxlQ29uZmlnOiBEYXRhQ29uZmlnLFxyXG4gIGhvbWVDYXRlZ29yeVNlbGVjdGlvbl9saXN0RGF0YTogQ2F0ZWdvcnlbXVxyXG59KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHJvdXRlci5xdWVyeS5hcHBNb2R1bGUgJiYgIShbQXBwTW9kdWxlVHlwZUVudW0ubGltaXRUaW1lLCBBcHBNb2R1bGVUeXBlRW51bS5tYXlMaWtlLCBBcHBNb2R1bGVUeXBlRW51bS5zYWxlc1JhbmssIEFwcE1vZHVsZVR5cGVFbnVtLnRoZW1lU2VsZWN0aW9uLCBBcHBNb2R1bGVUeXBlRW51bS5jYXRlZ29yeVNlbGVjdGlvbiwgQXBwTW9kdWxlVHlwZUVudW0ubGluZVJhbmtpbmcsIEFwcE1vZHVsZVR5cGVFbnVtLnRvcFJhbmtpbmddIGFzIGFueVtdKS5pbmNsdWRlcyhyb3V0ZXIucXVlcnkuYXBwTW9kdWxlKVxyXG4gICAgKSB7XHJcbiAgICAgIHJvdXRlci5yZXBsYWNlKCcvaG9tZS9bYXBwTW9kdWxlXScsICcvaG9tZS9jYXRlZ29yeVNlbGVjdGlvbicsIHt9KVxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IHthY3Rpb25zOiBhY3Rpb25zSG9tZUNhcm91c2VsTW9kZWwsIHN0YXRlOiBzdGF0ZUhvbWVDYXJvdXNlbE1vZGVsfSA9IHVzZVN0b3JlTW9kZWwoaG9tZUNhcm91c2VsTW9kZWwpXHJcbiAgY29uc3Qge2FjdGlvbnM6IGFjdGlvbnNIb21lVGFic30gPSB1c2VTdG9yZU1vZGVsKGhvbWVUYWJzTW9kZWwpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFjdGlvbnNIb21lQ2Fyb3VzZWxNb2RlbC5nZXRIb21lQ2Fyb3VzZWwoKVxyXG4gICAgYWN0aW9uc0hvbWVUYWJzLmdldERhdGEoKVxyXG4gIH0sIFtdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhY3Rpb25zSG9tZVRhYnMuc2V0SG9tZVR5cGUoKHR5cGUpID8/IEhvbWVUeXBlLmhvbWUpXHJcbiAgfSwgW3R5cGVdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxIZWFkZXJTZWFyY2ggaG9tZVR5cGU9e3R5cGUgPz8gSG9tZVR5cGUuaG9tZX0vPlxyXG4gICAgICAgIDxCU2Nyb2xsZXI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2NvbW1vbl9ib3gnfT5cclxuICAgICAgICAgICAgey8qPGhlYWRlcj4qL31cclxuICAgICAgICAgICAgey8qICA8Qm9yZGVyZWRJbnB1dEJhc2UvPiovfVxyXG4gICAgICAgICAgICB7Lyo8L2hlYWRlcj4qL31cclxuICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9eyd0aXAnfT4qL31cclxuICAgICAgICAgICAgey8qICA8YXNpZGU+54Ot5pCcOjwvYXNpZGU+Ki99XHJcbiAgICAgICAgICAgIHsvKiAge1sn6Jav5p2hJywgJ+Wwj+m+meiZviddLm1hcCh2YWx1ZSA9PiA8c3BhbiBrZXk9e2B0aXBfJHt2YWx1ZX1gfT57dmFsdWV9PC9zcGFuPil9Ki99XHJcbiAgICAgICAgICAgIHsvKjwvZGl2PiovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2N1c0Nhcm91c2VsJ30+XHJcbiAgICAgICAgICAgICAgPEN1c0Nhcm91c2VsXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD17JzE2MHB4J31cclxuICAgICAgICAgICAgICAgICAgZGF0YUxpc3Q9e3N0YXRlSG9tZUNhcm91c2VsTW9kZWwuaG9tZUNhcm91c2VsSW1ncz8udmFsdWU/Lmxpc3QgYXMgW119XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPEhvbWVUYWJzIGhvbWVUeXBlPXt0eXBlID8/IEhvbWVUeXBlLmhvbWV9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIC5jb21tb25fYm94IHtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMjBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgICAgICBmbGV4LXNocmluazogMTtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgICAgID4gKiB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudGlwIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgY29sb3I6ICR7Z3JleVs2MDBdfTtcclxuICAgICAgICAgICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICAgICAgICAgID4gc3BhbiB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jdXNDYXJvdXNlbCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZm9vdGVyIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9CU2Nyb2xsZXI+XHJcbiAgICAgICAgPEZvb3RCYXIvPlxyXG4gICAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtncmV5fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMnXHJcbmltcG9ydCB7S2V5Ym9hcmRBcnJvd1JpZ2h0fSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnXHJcbmltcG9ydCB7QnV0dG9uQmFzZX0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCB7dXNlU3RvcmVNb2RlbH0gZnJvbSAnLi4vLi4vLi4vLi4vTW9kZWxBY3Rpb24vdXNlU3RvcmUnXHJcbmltcG9ydCB7Q2F0ZWdvcnksIENhdGVnb3J5TGlzdElucHV0fSBmcm9tICcuLi8uLi8uLi8uLi9ncmFwaHFsVHlwZXMvdHlwZXMnXHJcbmltcG9ydCB7ZGVhbFVybFF1ZXJ5LCBmcE1lcmdlUHJlfSBmcm9tICcuLi8uLi8uLi8uLi90b29scy91dGlscydcclxuaW1wb3J0IHtMb2FkaW5nfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL0xvYWRpbmcvTG9hZGluZydcclxuaW1wb3J0IHtjYXRlZ29yeUxpc3R9IGZyb20gJy4uLy4uLy4uLy4uL2dyYXBocWxUeXBlcy9kb2MnXHJcbmltcG9ydCB7ZGVhbEltZ1VybH0gZnJvbSAnLi4vLi4vLi4vLi4vdG9vbHMvaW1nJ1xyXG5pbXBvcnQge0NhdGVnb3J5Um9vdE5hbWV9IGZyb20gJy4uLy4uLy4uLy4uL3NzX2NvbW1vbi9lbnVtJ1xyXG5pbXBvcnQge21vZGVsRmFjdG9yeX0gZnJvbSAnLi4vLi4vLi4vLi4vTW9kZWxBY3Rpb24vbW9kZWxVdGlsJ1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7aG9tZVRhYnNNb2RlbH0gZnJvbSAnLi4vVGFicy9UYWJzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGhvbWVDYXRlZ29yeVNlbGVjdGlvbk1vZGVsID0gbW9kZWxGYWN0b3J5KCdIb21lQ2F0ZWdvcnlTZWxlY3Rpb24nLCB7XHJcbiAgbGlzdERhdGE6IFtdIGFzIENhdGVnb3J5W10sXHJcbiAgdG90YWw6IDAsXHJcbn0sIHtcclxuICBnZXRMaXN0OiBhc3luYyAodmFsdWUsIG9wdGlvbikgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgb3B0aW9uLnF1ZXJ5KGNhdGVnb3J5TGlzdCwge1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgY2F0ZWdvcnk6IHtcclxuICAgICAgICAgIHBhcmVudENhdGVnb3J5OiB7XHJcbiAgICAgICAgICAgIGlkOiBDYXRlZ29yeVJvb3ROYW1lLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9IGFzIENhdGVnb3J5TGlzdElucHV0XHJcbiAgICB9KVxyXG4gICAgb3B0aW9uLnNldERhdGEoZnBNZXJnZVByZSh7XHJcbiAgICAgIGxpc3REYXRhOiByZXM/LmNhdGVnb3J5TGlzdD8ubGlzdCxcclxuICAgIH0pKVxyXG4gIH0sXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgQ2F0ZWdvcnlTZWxlY3Rpb24gPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCB7c3RhdGU6IGhvbWVDYXRlZ29yeVNlbGVjdGlvblN0YXRlLCBhY3Rpb25zOiBob21lQ2F0ZWdvcnlTZWxlY3Rpb25BY3Rpb25zLCBnZXRMb2FkOiBoc0dldExvYWR9ID0gdXNlU3RvcmVNb2RlbChob21lQ2F0ZWdvcnlTZWxlY3Rpb25Nb2RlbClcclxuICBjb25zdCB7c3RhdGU6IGhvbWVUYWJzU3RhdGV9ID0gdXNlU3RvcmVNb2RlbChob21lVGFic01vZGVsKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaG9tZUNhdGVnb3J5U2VsZWN0aW9uQWN0aW9ucy5nZXRMaXN0KClcclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICB7ISFoc0dldExvYWQoY2F0ZWdvcnlMaXN0KSAmJiA8TG9hZGluZy8+fVxyXG4gICAgICAgIHtob21lQ2F0ZWdvcnlTZWxlY3Rpb25TdGF0ZT8ubGlzdERhdGE/Lm1hcCh2YWx1ZSA9PiAoXHJcbiAgICAgICAgICAgIDxCdXR0b25CYXNlXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9eydtYWluJ31cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goYC9jYXRlZ29yeS9baWRdJHtkZWFsVXJsUXVlcnkoe2hvbWVUeXBlOiBob21lVGFic1N0YXRlLmhvbWVUeXBlfSl9YCwgYC9jYXRlZ29yeS8ke3ZhbHVlLmlkfSR7ZGVhbFVybFF1ZXJ5KHtob21lVHlwZTogaG9tZVRhYnNTdGF0ZS5ob21lVHlwZX0pfWApXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAga2V5PXtgaG9tZUNhdGVnb3J5U2VsZWN0aW9uU3RhdGVfJHt2YWx1ZS5pZH1gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9e2RlYWxJbWdVcmwodmFsdWUuaW1nVXJsKX1cclxuICAgICAgICAgICAgICAgICAgYWx0PScnXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIHt2YWx1ZS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgPEtleWJvYXJkQXJyb3dSaWdodC8+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L0J1dHRvbkJhc2U+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgZGl2ID4gOmdsb2JhbCgubWFpbikge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7Z3JleVs3MDBdfTtcclxuICAgICAgICAgICAgPiBpbWcge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID4gc3BhbiB7XHJcbiAgICAgICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcnlTZWxlY3Rpb25cclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHttb2RlbEZhY3Rvcnl9IGZyb20gJy4uLy4uLy4uLy4uL01vZGVsQWN0aW9uL21vZGVsVXRpbCdcclxuaW1wb3J0IHtHcm91cFF1ZXVlfSBmcm9tICcuLi8uLi8uLi8uLi9ncmFwaHFsVHlwZXMvdHlwZXMnXHJcbmltcG9ydCB7ZG9jfSBmcm9tICcuLi8uLi8uLi8uLi9ncmFwaHFsVHlwZXMvZG9jJ1xyXG5pbXBvcnQge3VzZVN0b3JlTW9kZWx9IGZyb20gJy4uLy4uLy4uLy4uL01vZGVsQWN0aW9uL3VzZVN0b3JlJ1xyXG5pbXBvcnQge2RlYWxNYXliZU51bWJlciwgZnBNZXJnZVByZX0gZnJvbSAnLi4vLi4vLi4vLi4vdG9vbHMvdXRpbHMnXHJcbmltcG9ydCB7R3JvdXBQcm9kdWN0SXRlbX0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9Qcm9kdWN0SXRlbS9Qcm9kdWN0SXRlbSdcclxuaW1wb3J0IHtTcGFjZX0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9Cb3gvQm94J1xyXG5cclxuZXhwb3J0IGNvbnN0IExpbmVSYW5raW5nTW9kZWwgPSBtb2RlbEZhY3RvcnkoJ0xpbmVSYW5raW5nJywge1xyXG4gIGxpc3Q6IFtdIGFzIEdyb3VwUXVldWVbXSxcclxufSwge1xyXG4gIGdldExpc3Q6IGFzeW5jICh2YWx1ZSwgb3B0aW9uKSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBvcHRpb24ucXVlcnkoZG9jLmdyb3VwUXVldWVMaXN0LCB7fSlcclxuICAgIG9wdGlvbi5zZXREYXRhKGZwTWVyZ2VQcmUoe1xyXG4gICAgICBsaXN0OiByZXM/Lmdyb3VwUXVldWVMaXN0ID8/IFtdLFxyXG4gICAgfSkpXHJcbiAgfSxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBMaW5lUmFua2luZyA9ICgpID0+IHtcclxuICBjb25zdCB7YWN0aW9uczogYWN0aW9uc0xpbmVSYW5raW5nTW9kZWwsIHN0YXRlOiBzdGF0ZUxpbmVSYW5raW5nTW9kZWx9ID0gdXNlU3RvcmVNb2RlbChMaW5lUmFua2luZ01vZGVsKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhY3Rpb25zTGluZVJhbmtpbmdNb2RlbC5nZXRMaXN0KClcclxuICB9LCBbXSlcclxuICByZXR1cm4gPGRpdj5cclxuICAgIHtzdGF0ZUxpbmVSYW5raW5nTW9kZWwubGlzdFxyXG4gICAgICAgIC5maWx0ZXIodiA9PiBkZWFsTWF5YmVOdW1iZXIodi5zdW1GaWxsQW1vdW50KSA8IGRlYWxNYXliZU51bWJlcih2LnByb2R1Y3Q/Lmdyb3VwUHJlY2lzaW9uKSlcclxuICAgIC5zb3J0KChhLCBiKSA9PiBkZWFsTWF5YmVOdW1iZXIoYi5zdW1GaWxsQW1vdW50KSAtIGRlYWxNYXliZU51bWJlcihhLnN1bUZpbGxBbW91bnQpKS5tYXAodmFsdWUgPT4gPFJlYWN0LkZyYWdtZW50XHJcbiAgICAgICAgICAgIGtleT17YFByb2R1Y3RJdGVtXyR7dmFsdWUuaWR9YH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8U3BhY2UgaD17MTZ9Lz5cclxuICAgICAgICAgIDxHcm91cFByb2R1Y3RJdGVtXHJcbiAgICAgICAgICAgICAgcHJvZHVjdD17dmFsdWUucHJvZHVjdCA/PyB7fX1cclxuICAgICAgICAgICAgICBncm91cFF1ZXVlPXt2YWx1ZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD4sXHJcbiAgICApfVxyXG4gIDwvZGl2PlxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7bW9kZWxGYWN0b3J5fSBmcm9tICcuLi8uLi8uLi8uLi9Nb2RlbEFjdGlvbi9tb2RlbFV0aWwnXHJcbmltcG9ydCB7ZG9jfSBmcm9tICcuLi8uLi8uLi8uLi9ncmFwaHFsVHlwZXMvZG9jJ1xyXG5pbXBvcnQge2ZwTWVyZ2VQcmV9IGZyb20gJy4uLy4uLy4uLy4uL3Rvb2xzL3V0aWxzJ1xyXG5pbXBvcnQge3VzZVN0b3JlTW9kZWx9IGZyb20gJy4uLy4uLy4uLy4uL01vZGVsQWN0aW9uL3VzZVN0b3JlJ1xyXG5pbXBvcnQge1Byb2R1Y3R9IGZyb20gJy4uLy4uLy4uLy4uL2dyYXBocWxUeXBlcy90eXBlcydcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHtsc30gZnJvbSAnLi4vLi4vLi4vLi4vdG9vbHMvZGVhbEtleSdcclxuaW1wb3J0IHtncmV5fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMnXHJcbmltcG9ydCB7UHJvZHVjdEl0ZW1PbmVSb3d9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvUHJvZHVjdEl0ZW0vUHJvZHVjdEl0ZW0nXHJcbmltcG9ydCB7ZGlmZmVyZW5jZUluSG91cnMsIGRpZmZlcmVuY2VJbk1pbnV0ZXN9IGZyb20gJ2RhdGUtZm5zJ1xyXG5cclxuY29uc3QgZ2V0Tm93U2FsZSA9IChsaXN0OiBhbnlbXSkgPT4ge1xyXG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXHJcbiAgY29uc3Qgc2FsZU9uZSA9IGxpc3Q/LmZpbmQoKHY6IGFueSkgPT4ge1xyXG4gICAgcmV0dXJuIG5vdyA+IG5ldyBEYXRlKHYuc3RhcnRUaW1lKS5nZXRUaW1lKCkgJiZcclxuICAgICAgICBub3cgPCBuZXcgRGF0ZSh2LmVuZFRpbWUpLmdldFRpbWUoKVxyXG4gIH0pID8/IHt9XHJcbiAgaWYgKHNhbGVPbmU/LmlkKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBkYXRhOiBzYWxlT25lLFxyXG4gICAgICBpc05leHQ6IGZhbHNlLFxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBkYXRhOiBsaXN0Py5maWx0ZXIodiA9PiBuZXcgRGF0ZSh2LnN0YXJ0VGltZSkuZ2V0VGltZSgpID4gbm93KT8uc29ydCgoYSwgYikgPT4gbmV3IERhdGUoYS5zdGFydFRpbWUpLmdldFRpbWUoKSAtIG5ldyBEYXRlKGIuc3RhcnRUaW1lKS5nZXRUaW1lKCkpPy5bMF0gPz8ge30sXHJcbiAgICAgIGlzTmV4dDogdHJ1ZSxcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHByb21vdGlvbkZsYXNoU2FsZU1vZGVsID0gbW9kZWxGYWN0b3J5KCdwcm9tb3Rpb25GbGFzaFNhbGVNb2RlbCcsIHtcclxuICBsaW1pdFRpbWVEYXRhOiBbXSBhcyBhbnlbXSxcclxuICBub3dMaW1pdERhdGE6IHt9IGFzIGFueSxcclxuICBwcm9kdWN0TGlzdDogW10gYXMgUHJvZHVjdFtdLFxyXG4gIGlzTmV4dDogZmFsc2UsXHJcbn0sIHtcclxuICBnZXREYXRhOiBhc3luYyAodmFsdWUsIG9wdGlvbikgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgb3B0aW9uLnF1ZXJ5KGRvYy5saW1pdFRpbWVEYXRhKVxyXG4gICAgY29uc3Qgbm93U2FsZURhdGEgPSBnZXROb3dTYWxlKHJlcz8ubGltaXRUaW1lRGF0YT8udmFsdWU/Lmxpc3QpXHJcbiAgICBjb25zb2xlLmxvZyhub3dTYWxlRGF0YSlcclxuICAgIGNvbnN0IHByb2R1Y3RSZXMgPSBhd2FpdCBvcHRpb24ucXVlcnkoZG9jLnByb2R1Y3RMaXN0QnlJZHMsIHtcclxuICAgICAgaWRzOiBub3dTYWxlRGF0YT8uZGF0YT8uc2VsZWN0UHJvZHVjdExpc3QgPz8gW10sXHJcbiAgICB9KVxyXG4gICAgb3B0aW9uLnNldERhdGEoZnBNZXJnZVByZSh7XHJcbiAgICAgIG5vd0xpbWl0RGF0YTogbm93U2FsZURhdGEuZGF0YSxcclxuICAgICAgaXNOZXh0OiBub3dTYWxlRGF0YS5pc05leHQsXHJcbiAgICAgIGxpbWl0VGltZURhdGE6IHJlcz8ubGltaXRUaW1lRGF0YT8udmFsdWU/Lmxpc3QgfHwgW10sXHJcbiAgICAgIHByb2R1Y3RMaXN0OiBwcm9kdWN0UmVzPy5wcm9kdWN0TGlzdEJ5SWRzPy5saXN0ID8/IFtdLFxyXG4gICAgfSkpXHJcbiAgfSxcclxuXHJcbn0pXHJcblxyXG5jb25zdCBUaXAgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgPiBtYWluIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgfVxyXG4gID4gc3BhbiB7XHJcbiAgICBwYWRkaW5nOiA0cHggMnB4O1xyXG4gICAgbWFyZ2luOiAwIDJweDtcclxuICAgIGJhY2tncm91bmQ6ICR7Z3JleVs4MDBdfTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9tb3Rpb25GbGFzaFNhbGUgPSAoKSA9PiB7XHJcbiAgY29uc3Qge3N0YXRlOiBzdGF0ZVByb21vdGlvbkZsYXNoU2FsZSwgYWN0aW9uczogYWN0aW9uc1Byb21vdGlvbkZsYXNoU2FsZX0gPSB1c2VTdG9yZU1vZGVsKHByb21vdGlvbkZsYXNoU2FsZU1vZGVsKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhY3Rpb25zUHJvbW90aW9uRmxhc2hTYWxlLmdldERhdGEoKVxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gPGRpdj5cclxuICAgIHtzdGF0ZVByb21vdGlvbkZsYXNoU2FsZS5ub3dMaW1pdERhdGE/LmlkICYmXHJcbiAgICA8PlxyXG4gICAgICA8VGlwPlxyXG4gICAgICAgIDxtYWluPntzdGF0ZVByb21vdGlvbkZsYXNoU2FsZS5pc05leHQgJiYgbHMoJ+i3neemu+S4i+asoeaKoui0rScpIHx8IGxzKCfpmZDml7bpgInotK0nKX08L21haW4+XHJcbiAgICAgICAgPHNlY3Rpb24+e2xzKCfliankvZknKX08L3NlY3Rpb24+XHJcbiAgICAgICAgPHNwYW4+e2Ake2RpZmZlcmVuY2VJbkhvdXJzKG5ldyBEYXRlKHN0YXRlUHJvbW90aW9uRmxhc2hTYWxlLm5vd0xpbWl0RGF0YT8uZW5kVGltZSA/PyAnJyksIG5ldyBEYXRlKCkpfWB9PC9zcGFuPlxyXG4gICAgICAgIDxzZWN0aW9uPntscygn5bCP5pe2Jyl9PC9zZWN0aW9uPlxyXG4gICAgICAgIDxzcGFuPntgJHtkaWZmZXJlbmNlSW5NaW51dGVzKG5ldyBEYXRlKHN0YXRlUHJvbW90aW9uRmxhc2hTYWxlLm5vd0xpbWl0RGF0YT8uZW5kVGltZSA/PyAnJyksIG5ldyBEYXRlKCkpICUgNjB9YH08L3NwYW4+XHJcbiAgICAgICAgPHNlY3Rpb24+e2xzKCfliIbpkp8nKX08L3NlY3Rpb24+XHJcbiAgICAgICAgey8qPHNwYW4+MDwvc3Bhbj4qL31cclxuICAgICAgICB7Lyo6Ki99XHJcbiAgICAgICAgey8qPHNwYW4+MDwvc3Bhbj4qL31cclxuICAgICAgICB7Lyo8c3Bhbj4wPC9zcGFuPiovfVxyXG4gICAgICA8L1RpcD5cclxuICAgICAge3N0YXRlUHJvbW90aW9uRmxhc2hTYWxlLnByb2R1Y3RMaXN0Lm1hcChwcm9kdWN0ID0+IDxQcm9kdWN0SXRlbU9uZVJvd1xyXG4gICAgICAgICAga2V5PXtgUHJvZHVjdEl0ZW1PbmVSb3dfJHtwcm9kdWN0LmlkfWB9XHJcbiAgICAgICAgICBwcm9kdWN0PXtwcm9kdWN0fVxyXG4gICAgICAgICAgaGlkZUFjdGlvbj17c3RhdGVQcm9tb3Rpb25GbGFzaFNhbGUuaXNOZXh0fVxyXG4gICAgICAvPil9XHJcbiAgICA8Lz5cclxuICAgIHx8IDxkaXY+5pqC5peg6ZmQ5pe25oqi6LSt77yM5pWs6K+35pyf5b6FPC9kaXY+XHJcbiAgICB9XHJcblxyXG4gIDwvZGl2PlxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7bW9kZWxGYWN0b3J5fSBmcm9tICcuLi8uLi8uLi8uLi9Nb2RlbEFjdGlvbi9tb2RlbFV0aWwnXHJcbmltcG9ydCB7ZG9jfSBmcm9tICcuLi8uLi8uLi8uLi9ncmFwaHFsVHlwZXMvZG9jJ1xyXG5pbXBvcnQge3VzZVN0b3JlTW9kZWx9IGZyb20gJy4uLy4uLy4uLy4uL01vZGVsQWN0aW9uL3VzZVN0b3JlJ1xyXG5pbXBvcnQge1Byb2R1Y3QsIFByb2R1Y3RJdGVtSW5wdXR9IGZyb20gJy4uLy4uLy4uLy4uL2dyYXBocWxUeXBlcy90eXBlcydcclxuaW1wb3J0IHtHcm91cFByb2R1Y3RJdGVtLCBQcm9kdWN0SXRlbU9uZVJvd30gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9Qcm9kdWN0SXRlbS9Qcm9kdWN0SXRlbSdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHtsc30gZnJvbSAnLi4vLi4vLi4vLi4vdG9vbHMvZGVhbEtleSdcclxuaW1wb3J0IHtkZWFsVXJsUXVlcnksIGZwTWVyZ2VQcmV9IGZyb20gJy4uLy4uLy4uLy4uL3Rvb2xzL3V0aWxzJ1xyXG5pbXBvcnQgUm91dGVyLCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHtTYWxlUmFua1R5cGVFbnVtfSBmcm9tICcuLi8uLi8uLi8uLi9zc19jb21tb24vZW51bSdcclxuaW1wb3J0IHtUYWIsIFRhYnN9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQge1NwYWNlfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL0JveC9Cb3gnXHJcbmltcG9ydCB7aG9tZVRhYnNNb2RlbH0gZnJvbSAnLi4vVGFicy9UYWJzJ1xyXG5pbXBvcnQge0hvbWVUeXBlfSBmcm9tICcuLi8uLi9hcHBNb2R1bGUnXHJcblxyXG5jb25zdCBTYWxlc1JhbmtNb2RlbCA9IG1vZGVsRmFjdG9yeSgnU2FsZXNSYW5rJywge1xyXG4gIGxpc3REYXRhOiBbXSBhcyBQcm9kdWN0W10sXHJcbn0sIHtcclxuICBnZXRMaXN0OiBhc3luYyAodmFsdWUsIG9wdGlvbikgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgb3B0aW9uLnF1ZXJ5KGRvYy5wcm9kdWN0TGlzdE9yZGVyQnlPcmRlciwge1xyXG4gICAgICBvcmRlckJ5VHlwZTogJycsXHJcbiAgICAgIC4uLnZhbHVlID8/IHt9LFxyXG4gICAgfSlcclxuICAgIG9wdGlvbi5zZXREYXRhKGZwTWVyZ2VQcmUoe1xyXG4gICAgICBsaXN0RGF0YTogcmVzPy5wcm9kdWN0TGlzdE9yZGVyQnlPcmRlcj8ubGlzdCA/PyBbXSxcclxuICAgIH0pKVxyXG4gIH0sXHJcbiAgdGFiQ2hhbmdlOiAoW3ZhbHVlLCBob21lVHlwZV0sIG9wdGlvbikgPT4ge1xyXG4gICAgY29uc3QgcXVlcnkgPSBkZWFsVXJsUXVlcnkoe1xyXG4gICAgICBzYWxlc1JhbmtUeXBlOiB2YWx1ZSxcclxuICAgIH0pXHJcbiAgICBSb3V0ZXIucHVzaChgLyR7aG9tZVR5cGV9L1thcHBNb2R1bGVdJHtxdWVyeX1gLCBgLyR7aG9tZVR5cGV9L3NhbGVzUmFuayR7cXVlcnl9YClcclxuICB9LFxyXG59KVxyXG5cclxuY29uc3QgQm94ID0gc3R5bGVkLmRpdmBcclxuYFxyXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5kaXZgXHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5gXHJcblxyXG5jb25zdCBTYWxlUmFua1R5cGVFbnVtTGFiZWw6IHtbazogc3RyaW5nXTogc3RyaW5nfSA9IHtcclxuICBbU2FsZVJhbmtUeXBlRW51bS5PbmVEYXldOiAn5pys5pelJyxcclxuICBbU2FsZVJhbmtUeXBlRW51bS5PbmVXZWVrXTogJ+acrOWRqCcsXHJcbiAgW1NhbGVSYW5rVHlwZUVudW0uT25lTW9udGhdOiAn5pys5pyIJyxcclxufVxyXG5leHBvcnQgY29uc3QgU2FsZXNSYW5rID0gKCkgPT4ge1xyXG4gIGNvbnN0IHtzdGF0ZTogaG9tZVRhYnNTdGF0ZX0gPSB1c2VTdG9yZU1vZGVsKGhvbWVUYWJzTW9kZWwpXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFyb3V0ZXIucXVlcnkuc2FsZXNSYW5rVHlwZSB8fCAhW1NhbGVSYW5rVHlwZUVudW0uT25lTW9udGgsIFNhbGVSYW5rVHlwZUVudW0uT25lV2VlaywgU2FsZVJhbmtUeXBlRW51bS5PbmVEYXldLmluY2x1ZGVzKGAke3JvdXRlcj8ucXVlcnk/LnNhbGVzUmFua1R5cGV9YCkpIHtcclxuICAgICAgY29uc3QgcXVlcnkgPSBkZWFsVXJsUXVlcnkoe1xyXG4gICAgICAgIHNhbGVzUmFua1R5cGU6IFNhbGVSYW5rVHlwZUVudW0uT25lRGF5LFxyXG4gICAgICB9KVxyXG4gICAgICByb3V0ZXIucHVzaChgLyR7aG9tZVRhYnNTdGF0ZS5ob21lVHlwZX0vW2FwcE1vZHVsZV0ke3F1ZXJ5fWAsIGAvJHtob21lVGFic1N0YXRlLmhvbWVUeXBlfS9zYWxlc1Jhbmske3F1ZXJ5fWApXHJcbiAgICB9XHJcbiAgfSwgW3JvdXRlci5xdWVyeS5zYWxlc1JhbmtUeXBlLCBob21lVGFic1N0YXRlLmhvbWVUeXBlXSlcclxuICBjb25zdCB7YWN0aW9uczogYWN0aW9uc1NhbGVzUmFua01vZGVsLCBzdGF0ZTogc3RhdGVTYWxlc1JhbmtNb2RlbH0gPSB1c2VTdG9yZU1vZGVsKFNhbGVzUmFua01vZGVsKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocm91dGVyLnF1ZXJ5LnNhbGVzUmFua1R5cGUpIHtcclxuICAgICAgYWN0aW9uc1NhbGVzUmFua01vZGVsLmdldExpc3Qoe1xyXG4gICAgICAgIHByb2R1Y3RJbnB1dDoge1xyXG4gICAgICAgICAgaXNHcm91cDogaG9tZVRhYnNTdGF0ZS5ob21lVHlwZSA9PT0gSG9tZVR5cGUuZ3JvdXAgPyAxIDogMCxcclxuICAgICAgICB9IGFzIFByb2R1Y3RJdGVtSW5wdXQsXHJcbiAgICAgICAgb3JkZXJCeVR5cGU6IHJvdXRlci5xdWVyeS5zYWxlc1JhbmtUeXBlLFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sIFtyb3V0ZXIucXVlcnkuc2FsZXNSYW5rVHlwZV0pXHJcblxyXG4gIHJldHVybiA8Qm94PlxyXG4gICAgey8qPFRpdGxlPntscygn5o6S6KGM5qacJyl9PC9UaXRsZT4qL31cclxuICAgIDxUYWJzXHJcbiAgICAgICAgdmFyaWFudD17J2Z1bGxXaWR0aCd9XHJcbiAgICAgICAgdmFsdWU9e3JvdXRlci5xdWVyeS5zYWxlc1JhbmtUeXBlID8/IFNhbGVSYW5rVHlwZUVudW0uT25lRGF5fVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQsIHZhbHVlKSA9PiBhY3Rpb25zU2FsZXNSYW5rTW9kZWwudGFiQ2hhbmdlKFt2YWx1ZSwgaG9tZVRhYnNTdGF0ZS5ob21lVHlwZV0pfVxyXG4gICAgPlxyXG4gICAgICB7W1xyXG4gICAgICAgIFtTYWxlUmFua1R5cGVFbnVtLk9uZURheSwgJzI05bCP5pe25o6S6KGMJ10sXHJcbiAgICAgICAgW1NhbGVSYW5rVHlwZUVudW0uT25lV2VlaywgJ+acrOWRqOaOkuihjCddLFxyXG4gICAgICAgIFtTYWxlUmFua1R5cGVFbnVtLk9uZU1vbnRoLCAn5pys5pyI5o6S6KGMJ10sXHJcbiAgICAgIF0ubWFwKHYgPT5cclxuICAgICAgICAgIDxUYWJcclxuICAgICAgICAgICAgICBrZXk9e2BTYWxlUmFua1RhYiR7dlswXX1gfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXt2WzBdfVxyXG4gICAgICAgICAgICAgIGxhYmVsPXtscyh2WzFdKX1cclxuICAgICAgICAgIC8+LFxyXG4gICAgICApfVxyXG4gICAgPC9UYWJzPlxyXG4gICAgPFNwYWNlIGg9ezE2fS8+XHJcbiAgICB7c3RhdGVTYWxlc1JhbmtNb2RlbC5saXN0RGF0YS5tYXAocHJvZHVjdCA9PiBob21lVGFic1N0YXRlLmhvbWVUeXBlID09PSBIb21lVHlwZS5ncm91cCA/IDxHcm91cFByb2R1Y3RJdGVtXHJcbiAgICAgICAgcHJvZHVjdD17cHJvZHVjdH1cclxuICAgICAgICBrZXk9e2BQcm9kdWN0SXRlbV8ke3Byb2R1Y3QuaWR9YH1cclxuICAgICAgICBzaG93U3VtT3JkZXI9e3RydWV9XHJcbiAgICAgICAgc3VtT3JkZXJUaXA9e1NhbGVSYW5rVHlwZUVudW1MYWJlbFtgJHtyb3V0ZXIucXVlcnk/LnNhbGVzUmFua1R5cGV9YF19XHJcbiAgICAvPiA6IDxQcm9kdWN0SXRlbU9uZVJvd1xyXG4gICAgICAgIGtleT17YFByb2R1Y3RJdGVtT25lUm93XyR7cHJvZHVjdC5pZH1gfVxyXG4gICAgICAgIHByb2R1Y3Q9e3Byb2R1Y3R9XHJcbiAgICAgICAgc2hvd1N1bU9yZGVyPXt0cnVlfVxyXG4gICAgICAgIHN1bU9yZGVyVGlwPXtTYWxlUmFua1R5cGVFbnVtTGFiZWxbYCR7cm91dGVyLnF1ZXJ5Py5zYWxlc1JhbmtUeXBlfWBdfVxyXG4gICAgLz4pfVxyXG4gIDwvQm94PlxyXG59XHJcbiIsImltcG9ydCB7VGFiLCBUYWJzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQ2F0ZWdvcnlTZWxlY3Rpb24gZnJvbSAnLi4vQ2F0ZWdvcnlTZWxlY3Rpb24vQ2F0ZWdvcnlTZWxlY3Rpb24nXHJcbmltcG9ydCBSb3V0ZXIsIHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQge21vZGVsRmFjdG9yeX0gZnJvbSAnLi4vLi4vLi4vLi4vTW9kZWxBY3Rpb24vbW9kZWxVdGlsJ1xyXG5pbXBvcnQge3VzZVN0b3JlTW9kZWx9IGZyb20gJy4uLy4uLy4uLy4uL01vZGVsQWN0aW9uL3VzZVN0b3JlJ1xyXG5pbXBvcnQge0FwcE1vZHVsZVR5cGVFbnVtLCBEaWN0VHlwZUVudW19IGZyb20gJy4uLy4uLy4uLy4uL3NzX2NvbW1vbi9lbnVtJ1xyXG5pbXBvcnQge2xzfSBmcm9tICcuLi8uLi8uLi8uLi90b29scy9kZWFsS2V5J1xyXG5pbXBvcnQge1Byb21vdGlvbkZsYXNoU2FsZX0gZnJvbSAnLi4vUHJvbW90aW9uRmxhc2hTYWxlL1Byb21vdGlvbkZsYXNoU2FsZSdcclxuaW1wb3J0IHtUaGVtZVNlbGVjdGlvbn0gZnJvbSAnLi4vVGhlbWVTZWxlY3Rpb24vVGhlbWVTZWxlY3Rpb24nXHJcbmltcG9ydCB7SG9tZVR5cGV9IGZyb20gJy4uLy4uL2FwcE1vZHVsZSdcclxuaW1wb3J0IHtmcE1lcmdlUHJlfSBmcm9tICcuLi8uLi8uLi8uLi90b29scy91dGlscydcclxuaW1wb3J0IHtnZXREYXRhQ29uZmlnfSBmcm9tICcuLi8uLi8uLi8uLi9ncmFwaHFsVHlwZXMvZG9jJ1xyXG5pbXBvcnQge0RhdGFDb25maWdJdGVtSW5wdXR9IGZyb20gJy4uLy4uLy4uLy4uL2dyYXBocWxUeXBlcy90eXBlcydcclxuaW1wb3J0IHsgU2FsZXNSYW5rIH0gZnJvbSAnLi4vU2FsZXNSYW5rL1NhbGVzUmFuaydcclxuaW1wb3J0IHtVcGRhdGVTaG9wQ2FydH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9Qcm9kdWN0SXRlbS9VcGRhdGVTaG9wQ2FydCdcclxuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJ2xvZGFzaCdcclxuaW1wb3J0IHtMaW5lUmFua2luZ30gZnJvbSAnLi4vTGluZVJhbmtpbmcvTGluZVJhbmtpbmcnXHJcblxyXG5leHBvcnQgY29uc3QgaG9tZVRhYnNNb2RlbCA9IG1vZGVsRmFjdG9yeSgnSG9tZVRhYnMnLCB7XHJcbiAgaG9tZVR5cGU6ICcnLFxyXG4gIGFwcE1vZHVsZUNvbmZpZzoge30gYXMgYW55LFxyXG59LCB7XHJcbiAgc2V0SG9tZVR5cGU6ICh2YWx1ZTogc3RyaW5nLCBvcHRpb24pID0+IHtcclxuICAgIG9wdGlvbi5zZXREYXRhKGZwTWVyZ2VQcmUoe1xyXG4gICAgICBob21lVHlwZTogdmFsdWUsXHJcbiAgICB9KSlcclxuICB9LFxyXG4gIG9uQ2hhbmdlOiAoW25hbWUsIHR5cGVdLCBvcHRpb24pID0+IHtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIFJvdXRlci5wdXNoKGAvJHt0eXBlfS9bYXBwTW9kdWxlXWAsIGAvJHt0eXBlfS8ke25hbWV9YCwge3NoYWxsb3c6IHRydWV9KVxyXG4gICAgLy8gb3B0aW9uLnNldERhdGEoZnBNZXJnZVByZSh7XHJcbiAgICAvLyAgIHZhbHVlLFxyXG4gICAgLy8gfSkpXHJcbiAgfSxcclxuICBnZXREYXRhOiBhc3luYyAodmFsdWUsIG9wdGlvbikgPT4ge1xyXG4gICAgY29uc3QgYXBwTW9kdWxlQ29uZmlnID0gYXdhaXQgb3B0aW9uLnF1ZXJ5KGdldERhdGFDb25maWcsIHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHR5cGU6IERpY3RUeXBlRW51bS5BcHBNb2R1bGUsXHJcbiAgICAgIH0gYXMgRGF0YUNvbmZpZ0l0ZW1JbnB1dFxyXG4gICAgfSwge30pXHJcbiAgICBvcHRpb24uc2V0RGF0YShmcE1lcmdlUHJlKHtcclxuICAgICAgYXBwTW9kdWxlQ29uZmlnOiBhcHBNb2R1bGVDb25maWcuZ2V0RGF0YUNvbmZpZz8udmFsdWUgPz8ge30sXHJcbiAgICB9KSlcclxuICB9LFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IEhvbWVUYWJzID0gKHtob21lVHlwZX06IHtob21lVHlwZTogc3RyaW5nfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3Qge3N0YXRlOiBob21lVGFic1N0YXRlLCBhY3Rpb25zOiBob21lVGFic0FjdGlvbnN9ID0gdXNlU3RvcmVNb2RlbChob21lVGFic01vZGVsKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17e21hcmdpblRvcDogJzEwcHgnfX1cclxuICAgICAgPlxyXG4gICAgICAgIHshaXNFbXB0eShob21lVGFic1N0YXRlPy5hcHBNb2R1bGVDb25maWcpICYmIDxUYWJzXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9eydmdWxsV2lkdGgnfVxyXG4gICAgICAgICAgICB2YWx1ZT17cm91dGVyLnF1ZXJ5LmFwcE1vZHVsZSA/PyBBcHBNb2R1bGVUeXBlRW51bS5jYXRlZ29yeVNlbGVjdGlvbn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCwgdmFsdWUpID0+IGhvbWVUYWJzQWN0aW9ucy5vbkNoYW5nZShbdmFsdWUsIGhvbWVUeXBlXSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFRhYlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtBcHBNb2R1bGVUeXBlRW51bS5jYXRlZ29yeVNlbGVjdGlvbn1cclxuICAgICAgICAgICAgICBsYWJlbD17bHMoaG9tZVR5cGUgPT09IEhvbWVUeXBlLmdyb3VwID8gJ+WIhuexu+aLvOWboicgOiAn5YiG57G76YCJ5oupJyl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgeygoaG9tZVR5cGUgPT09IEhvbWVUeXBlLmhvbWUgJiYgW1xyXG4gICAgICAgICAgICBbQXBwTW9kdWxlVHlwZUVudW0ubGltaXRUaW1lLCAn6ZmQ5pe26YCJ6LStJ10sXHJcbiAgICAgICAgICAgIFtBcHBNb2R1bGVUeXBlRW51bS5zYWxlc1JhbmssICfng63plIDmjpLooYwnXSxcclxuICAgICAgICAgICAgW0FwcE1vZHVsZVR5cGVFbnVtLnRoZW1lU2VsZWN0aW9uLCAn5Li76aKY55SE6YCJJ10sXHJcbiAgICAgICAgICAgIFtBcHBNb2R1bGVUeXBlRW51bS5tYXlMaWtlLCAn54yc5L2g5Zac5qyiJ10sXHJcbiAgICAgICAgICBdKSB8fCAoaG9tZVR5cGUgPT09IEhvbWVUeXBlLmdyb3VwICYmIFtcclxuICAgICAgICAgICAgW0FwcE1vZHVsZVR5cGVFbnVtLnNhbGVzUmFuaywgJ+eDremXqOaOkuihjCddLFxyXG4gICAgICAgICAgICBbQXBwTW9kdWxlVHlwZUVudW0ubGluZVJhbmtpbmcsICflhrLnur/mjpLooYwnXSxcclxuICAgICAgICAgIF0pIHx8IFtdKS5maWx0ZXIodiA9PiAoaG9tZVRhYnNTdGF0ZT8uYXBwTW9kdWxlQ29uZmlnPy5bdlswXV0pKS5tYXAodiA9PiA8VGFiXHJcbiAgICAgICAgICAgICAga2V5PXtgQXBwTW9kdWxlVHlwZUVudW1fJHt2WzBdfWB9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3ZbMF19XHJcbiAgICAgICAgICAgICAgbGFiZWw9e2xzKHZbMV0pfVxyXG4gICAgICAgICAgLz4pfVxyXG4gICAgICAgIDwvVGFicz59XHJcbiAgICAgICAgPG1haW5cclxuICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Ub3A6ICcxMHB4J319XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3JvdXRlci5xdWVyeS5hcHBNb2R1bGUgPT09IEFwcE1vZHVsZVR5cGVFbnVtLmNhdGVnb3J5U2VsZWN0aW9uXHJcbiAgICAgICAgICAmJiA8Q2F0ZWdvcnlTZWxlY3Rpb24vPn1cclxuICAgICAgICAgIHtyb3V0ZXIucXVlcnkuYXBwTW9kdWxlID09PSBBcHBNb2R1bGVUeXBlRW51bS5saW1pdFRpbWVcclxuICAgICAgICAgICYmIDxQcm9tb3Rpb25GbGFzaFNhbGUvPn1cclxuICAgICAgICAgIHtyb3V0ZXIucXVlcnkuYXBwTW9kdWxlID09PSBBcHBNb2R1bGVUeXBlRW51bS50aGVtZVNlbGVjdGlvblxyXG4gICAgICAgICAgJiYgPFRoZW1lU2VsZWN0aW9uLz59XHJcbiAgICAgICAgICB7cm91dGVyLnF1ZXJ5LmFwcE1vZHVsZSA9PT0gQXBwTW9kdWxlVHlwZUVudW0uc2FsZXNSYW5rXHJcbiAgICAgICAgICAmJiA8U2FsZXNSYW5rLz59XHJcbiAgICAgICAgICB7cm91dGVyLnF1ZXJ5LmFwcE1vZHVsZSA9PT0gQXBwTW9kdWxlVHlwZUVudW0ubGluZVJhbmtpbmdcclxuICAgICAgICAgICYmIDxMaW5lUmFua2luZy8+fVxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICAgICA8VXBkYXRlU2hvcENhcnQvPlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIGRpdiA6Z2xvYmFsKC5NdWlCdXR0b25CYXNlLXJvb3QpIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHttb2RlbEZhY3Rvcnl9IGZyb20gJy4uLy4uLy4uLy4uL01vZGVsQWN0aW9uL21vZGVsVXRpbCdcclxuaW1wb3J0IHtkb2N9IGZyb20gJy4uLy4uLy4uLy4uL2dyYXBocWxUeXBlcy9kb2MnXHJcbmltcG9ydCB7ZnBNZXJnZVByZX0gZnJvbSAnLi4vLi4vLi4vLi4vdG9vbHMvdXRpbHMnXHJcbmltcG9ydCB7dXNlU3RvcmVNb2RlbH0gZnJvbSAnLi4vLi4vLi4vLi4vTW9kZWxBY3Rpb24vdXNlU3RvcmUnXHJcbmltcG9ydCB7RGF0YUNvbmZpZ0l0ZW1JbnB1dCwgUHJvZHVjdH0gZnJvbSAnLi4vLi4vLi4vLi4vZ3JhcGhxbFR5cGVzL3R5cGVzJ1xyXG5pbXBvcnQge1Byb2R1Y3RJdGVtfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL1Byb2R1Y3RJdGVtL1Byb2R1Y3RJdGVtJ1xyXG5pbXBvcnQge0RpY3RUeXBlRW51bX0gZnJvbSAnLi4vLi4vLi4vLi4vc3NfY29tbW9uL2VudW0nXHJcbmltcG9ydCB7bHN9IGZyb20gJy4uLy4uLy4uLy4uL3Rvb2xzL2RlYWxLZXknXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7ZGVhbEltZ1VybH0gZnJvbSAnLi4vLi4vLi4vLi4vdG9vbHMvaW1nJ1xyXG5pbXBvcnQge0JTY3JvbGxlcn0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9CU2Nyb2xsL0JTY3JvbGxlcidcclxuXHJcbmNvbnN0IHRoZW1lU2VsZWN0aW9uTW9kZWwgPSBtb2RlbEZhY3RvcnkoJ3RoZW1lU2VsZWN0aW9uTW9kZWwnLCB7XHJcbiAgdGhlbWVTZWxlY3Rpb25EYXRhOiBbXSBhcyBhbnlbXSxcclxuICBwcm9kdWN0TGlzdEZvclRoZW1lOiB7fSBhcyB7XHJcbiAgICBba2V5IGluIHN0cmluZ106IFByb2R1Y3RbXVxyXG4gIH0sXHJcbn0sIHtcclxuICBnZXREYXRhOiBhc3luYyAodmFsdWUsIG9wdGlvbikgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgb3B0aW9uLnF1ZXJ5KGRvYy5nZXREYXRhQ29uZmlnLCB7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICB0eXBlOiBEaWN0VHlwZUVudW0uUHJvbW90aW9uVGhlbWVTZWxlY3QsXHJcbiAgICAgIH0gYXMgRGF0YUNvbmZpZ0l0ZW1JbnB1dCxcclxuICAgIH0pXHJcbiAgICBjb25zdCB0aGVtZUxpc3QgPSByZXM/LmdldERhdGFDb25maWc/LnZhbHVlPy5saXN0ID8/IFtdXHJcbiAgICBjb25zdCBwcm9kdWN0UmVzID0gYXdhaXQgb3B0aW9uLnF1ZXJ5KGRvYy5wcm9kdWN0TGlzdEJ5SWRzLCB7XHJcbiAgICAgIGlkczogdGhlbWVMaXN0LnJlZHVjZSgocHJlOiBhbnksIGN1cjogYW55KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgIC4uLnByZSxcclxuICAgICAgICAgIC4uLmN1cj8uc2VsZWN0UHJvZHVjdExpc3QgPz8gW10sXHJcbiAgICAgICAgXVxyXG4gICAgICB9LCBbXSksXHJcbiAgICB9KVxyXG4gICAgb3B0aW9uLnNldERhdGEoZnBNZXJnZVByZSh7XHJcbiAgICAgIHRoZW1lU2VsZWN0aW9uRGF0YTogdGhlbWVMaXN0LFxyXG4gICAgICBwcm9kdWN0TGlzdEZvclRoZW1lOiB0aGVtZUxpc3QucmVkdWNlKChwcmU6IGFueSwgY3VyOiBhbnkpID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4ucHJlLFxyXG4gICAgICAgICAgW2N1ci5pZF06IGN1cj8uc2VsZWN0UHJvZHVjdExpc3Q/Lm1hcCgoaWQ6IHN0cmluZykgPT4gcHJvZHVjdFJlcz8ucHJvZHVjdExpc3RCeUlkcz8ubGlzdD8uZmluZCgodjE6IFByb2R1Y3QpID0+IHYxPy5pZCA9PT0gaWQpID8/IG51bGwpLmZpbHRlcigodjogYW55KSA9PiB2KSxcclxuICAgICAgICB9XHJcbiAgICAgIH0sIHt9KSxcclxuICAgIH0pKVxyXG4gIH0sXHJcblxyXG59KVxyXG5cclxuY29uc3QgVGl0bGUgPSBzdHlsZWQuZGl2YFxyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbmBcclxuY29uc3QgVGhlbWUgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDB2dztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogLTMuMTI1dnc7XHJcbiAgbWFyZ2luLXRvcDogMTZweDtcclxuICA+IGltZyB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDMwdnc7XHJcbiAgfVxyXG4gID4gbWFpbiwgYXNpZGUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAuMWVtIDAuMWVtIDAuMmVtIGJsYWNrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxuICA+IG1haW4ge1xyXG4gICAgdG9wOiA4dnc7XHJcbiAgICBsZWZ0OiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gID4gYXNpZGUge1xyXG4gICAgdG9wOiAxNnZ3O1xyXG4gICAgbGVmdDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbmBcclxuY29uc3QgUHJvZHVjdExpc3QgPSBzdHlsZWQuZGl2YFxyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gID4gKiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDhweCAxNnB4IDhweCAwO1xyXG4gICAgd2lkdGg6IDM1dnc7XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgVGhlbWVTZWxlY3Rpb24gPSAoKSA9PiB7XHJcbiAgY29uc3Qge3N0YXRlOiBzdGF0ZVByb21vdGlvbkZsYXNoU2FsZSwgYWN0aW9uczogYWN0aW9uc1Byb21vdGlvbkZsYXNoU2FsZX0gPSB1c2VTdG9yZU1vZGVsKHRoZW1lU2VsZWN0aW9uTW9kZWwpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFjdGlvbnNQcm9tb3Rpb25GbGFzaFNhbGUuZ2V0RGF0YSgpXHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiA8ZGl2PlxyXG4gICAgPFRpdGxlPntscygn5Li76aKY55SE6YCJJyl9PC9UaXRsZT5cclxuICAgIHtzdGF0ZVByb21vdGlvbkZsYXNoU2FsZS50aGVtZVNlbGVjdGlvbkRhdGE/Lm1hcCh2ID0+IDxSZWFjdC5GcmFnbWVudFxyXG4gICAgICAgIGtleT17YHRoZW1lU2VsZWN0aW9uRGF0YUltZyR7di5pZH1gfVxyXG4gICAgPlxyXG4gICAgICA8VGhlbWU+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9e2RlYWxJbWdVcmwodi5pbWdVcmwpfVxyXG4gICAgICAgICAgICBhbHQ9eycnfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPG1haW4+e3YudGl0bGV9PC9tYWluPlxyXG4gICAgICAgIDxhc2lkZT57di5yZW1hcmt9PC9hc2lkZT5cclxuICAgICAgPC9UaGVtZT5cclxuICAgICAgPEJTY3JvbGxlclxyXG4gICAgICAgICAgaXNYPXt0cnVlfVxyXG4gICAgICAgICAgYm94V2lkdGg9eydjYWxjKDEwMHZ3IC0gMjBweCknfVxyXG4gICAgICAgICAgYm94SGVpZ2h0PXsnYXV0byd9XHJcbiAgICAgID5cclxuICAgICAgICA8UHJvZHVjdExpc3Q+XHJcbiAgICAgICAgICB7c3RhdGVQcm9tb3Rpb25GbGFzaFNhbGUucHJvZHVjdExpc3RGb3JUaGVtZVt2LmlkXT8ubWFwKHYgPT4gPFByb2R1Y3RJdGVtXHJcbiAgICAgICAgICAgICAga2V5PXtgc3RhdGVQcm9tb3Rpb25GbGFzaFNhbGVQcm9kdWN0SXRlbV8ke3YuaWR9YH1cclxuICAgICAgICAgICAgICBwcm9kdWN0PXt2fS8+KX1cclxuICAgICAgICA8L1Byb2R1Y3RMaXN0PlxyXG4gICAgICA8L0JTY3JvbGxlcj5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+KX1cclxuICA8L2Rpdj5cclxufVxyXG4iLCJpbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQge1VzZXJ9IGZyb20gJy4uLy4uL2dyYXBocWxUeXBlcy90eXBlcydcclxuaW1wb3J0IHtmcE1lcmdlUHJlfSBmcm9tICcuLi8uLi90b29scy91dGlscydcclxuaW1wb3J0IHtzZXRUb2tlbn0gZnJvbSAnLi4vLi4vdG9vbHMvdG9rZW4nXHJcbmltcG9ydCB7ZG9jfSBmcm9tICcuLi8uLi9ncmFwaHFsVHlwZXMvZG9jJ1xyXG5pbXBvcnQge21vZGVsRmFjdG9yeX0gZnJvbSAnLi4vLi4vTW9kZWxBY3Rpb24vbW9kZWxVdGlsJ1xyXG5cclxuY29uc3QgdG9Mb2dpbiA9IGFzeW5jICgpID0+IHtcclxuICBhd2FpdCBSb3V0ZXIucHVzaCgnL2xvZ2luJylcclxufVxyXG5leHBvcnQgY29uc3QgbWVNb2RlbCA9IG1vZGVsRmFjdG9yeSgnbWVNb2RlbCcsIHtcclxuICB1c2VyOiB7fSBhcyBVc2VyLFxyXG59LCB7XHJcbiAgZ2V0TG9naW5Vc2VyOiBhc3luYyAodmFsdWUsIG9wdGlvbikgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gKGF3YWl0IG9wdGlvbi5xdWVyeShkb2Mub25lVXNlcikpPy5vbmVVc2VyIGFzIFVzZXJcclxuICAgIG9wdGlvbi5zZXREYXRhKGZwTWVyZ2VQcmUoe1xyXG4gICAgICB1c2VyOiByZXMsXHJcbiAgICB9KSlcclxuICB9LFxyXG4gIGxvZ291dDogYXN5bmMgKHZhbHVlLCBvcHRpb24pID0+IHtcclxuICAgIHNldFRva2VuKCcnKVxyXG4gICAgc2V0VG9rZW4oJycsICdyZWZyZXNodG9rZW4nKVxyXG4gICAgYXdhaXQgdG9Mb2dpbigpXHJcbiAgfSxcclxuICB0b0xvZ2luOiB2YWx1ZSA9PiB7XHJcbiAgICB0b0xvZ2luKClcclxuICB9XHJcbn0pXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvcmVkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy9tYWtlU3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQWNjb3VudEJveFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9BZGRDaXJjbGVPdXRsaW5lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9BcnJvd0JhY2tJb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0NoZXZyb25SaWdodFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1Blb3BsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUmVkZWVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9SZW1vdmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1Nob3BwaW5nQ2FydFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU3RhckJvcmRlclJvdW5kZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1N0YXJSb3VuZGVkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9TdG9yZWZyb250XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1ib29zdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiZXR0ZXItc2Nyb2xsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNyb3NzLWZldGNoL3BvbHlmaWxsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRhdGUtZm5zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRhdGUtZm5zL2Zvcm1hdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoL3NldFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2NvbmZpZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc3R5bGVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==