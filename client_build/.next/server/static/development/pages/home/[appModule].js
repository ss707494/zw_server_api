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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/home/[appModule].tsx":
/*!************************************!*\
  !*** ./pages/home/[appModule].tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_view_home_appModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/view/home/appModule */ "./utils/view/home/appModule.tsx");

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_view_home_appModule__WEBPACK_IMPORTED_MODULE_0__["HomeAppModule"])(_utils_view_home_appModule__WEBPACK_IMPORTED_MODULE_0__["HomeType"].home)); // export const init = async ({params}: {params: any}) => {
//   const appModuleConfig = await serverQuery(getDataConfig, {
//     data: {
//       type: DictTypeEnum.AppModule,
//     } as DataConfigItemInput
//   }, {})
//
//   const res2 = await serverQuery(getDataConfig, {
//     data: {
//       type: DictTypeEnum.HomeCarousel,
//     } as DataConfigItemInput
//   }, {})
//   const {__typename, ...rest} = res2?.getDataConfig
//   const homeCarouselDataComfig = await serverQuery(homeCarouselImgs, {
//     data: {
//       ...rest,
//     } as DataConfigItemInput
//   }, {})
//
//   const categoryRes = (params.appModule === AppModuleTypeEnum.categorySelection && await serverQuery(categoryList, {
//     data: {
//       category: {
//         parentCategory: {
//           id: CategoryRootName,
//         },
//       },
//     } as CategoryListInput
//   })) || {}
//
//   return {
//     props: {
//       homeCategorySelection_listData: categoryRes?.categoryList?.list ?? [],
//       ...homeCarouselDataComfig,
//       appModuleConfig: appModuleConfig?.getDataConfig,
//     },
//   }
// }
// export const getStaticPaths = () => {
//   return {
//     paths: [{
//       params: {
//         appModule: AppModuleTypeEnum.categorySelection,
//       },
//     }, {
//       params: {
//         appModule: AppModuleTypeEnum.limitTime,
//       },
//     }, {
//       params: {
//         appModule: AppModuleTypeEnum.mayLike,
//       },
//     }, {
//       params: {
//         appModule: AppModuleTypeEnum.salesRank,
//       },
//     }, {
//       params: {
//         appModule: AppModuleTypeEnum.themeSelection,
//       },
//     }],
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
/* harmony import */ var _material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/ShoppingCart */ "@material-ui/icons/ShoppingCart");
/* harmony import */ var _material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/People */ "@material-ui/icons/People");
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/colors/red */ "@material-ui/core/colors/red");
/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ss_common_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ss_common/enum */ "./utils/ss_common/enum.ts");
/* harmony import */ var _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ModelAction/useStore */ "./utils/ModelAction/useStore.ts");
/* harmony import */ var _view_cart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../view/cart */ "./utils/view/cart/index.tsx");
/* harmony import */ var _style_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../style/common */ "./utils/style/common.ts");
var _jsxFileName = "D:\\code\\zw\\zw_client_web\\utils\\components\\FootBar\\FootBar.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;












const FootBar = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  const {
    state: stateShopCart,
    actions: actionsShopCart
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_10__["useStoreModel"])(_view_cart__WEBPACK_IMPORTED_MODULE_11__["shopCartModel"]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (!stateShopCart.user.id) {
      actionsShopCart.getList();
    }
  }, []);

  const isAct = path => router.pathname.includes(path);

  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4279962377", [_style_common__WEBPACK_IMPORTED_MODULE_12__["mpStyle"].red, _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_8___default.a[600]]]]) + " " + 'FootBar',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, [['逛店', __jsx(_material_ui_icons_Storefront__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 18
    }
  }), `/${_ss_common_enum__WEBPACK_IMPORTED_MODULE_9__["AppFootBar"].home}`], ['拼团', __jsx(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 18
    }
  }), `/${_ss_common_enum__WEBPACK_IMPORTED_MODULE_9__["AppFootBar"].group}`], ['达人卡', __jsx(_material_ui_icons_Redeem__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 19
    }
  }), `/${_ss_common_enum__WEBPACK_IMPORTED_MODULE_9__["AppFootBar"].card}`], ['购物车', __jsx(_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 19
    }
  }), `/${_ss_common_enum__WEBPACK_IMPORTED_MODULE_9__["AppFootBar"].cart}`, stateShopCart.dealProductNumber(stateShopCart)], ['我', __jsx(_material_ui_icons_AccountBox__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }), `/${_ss_common_enum__WEBPACK_IMPORTED_MODULE_9__["AppFootBar"].me}`]].map(v => __jsx("section", {
    key: `FootBar_${v[0]}`,
    onClick: () => isAct(v[2]) ? '' : router.push(v[2]),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4279962377", [_style_common__WEBPACK_IMPORTED_MODULE_12__["mpStyle"].red, _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_8___default.a[600]]]]) + " " + ((isAct(v[2]) ? 'act' : '') || ""),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, v[1], __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4279962377", [_style_common__WEBPACK_IMPORTED_MODULE_12__["mpStyle"].red, _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_8___default.a[600]]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  }, v[0]), ~~v[3] > 0 && __jsx("aside", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4279962377", [_style_common__WEBPACK_IMPORTED_MODULE_12__["mpStyle"].red, _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_8___default.a[600]]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 30
    }
  }, v[3]))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4279962377",
    dynamic: [_style_common__WEBPACK_IMPORTED_MODULE_12__["mpStyle"].red, _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_8___default.a[600]],
    __self: undefined
  }, `.FootBar.__jsx-style-dynamic-selector{position:fixed;bottom:0;height:14.0625vw;width:100vw;box-shadow:0 0.9375vw 1.25vw 0 rgba(0,0,0,0.14),0 0.9375vw 0.9375vw -0.625vw rgba(0,0,0,0.12),0 1px 2.5vw 0 rgba(0,0,0,0.2);background:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.FootBar.__jsx-style-dynamic-selector>section.__jsx-style-dynamic-selector{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;position:relative;}.FootBar.__jsx-style-dynamic-selector>section.__jsx-style-dynamic-selector>aside.__jsx-style-dynamic-selector{position:absolute;top:0;right:20%;border-radius:50%;width:5vw;height:5vw;background:${_style_common__WEBPACK_IMPORTED_MODULE_12__["mpStyle"].red};display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#fff;}.act.__jsx-style-dynamic-selector{color:${_material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_8___default.a[600]};}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxjb2RlXFx6d1xcendfY2xpZW50X3dlYlxcdXRpbHNcXGNvbXBvbmVudHNcXEZvb3RCYXJcXEZvb3RCYXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJDb0IsQUFFa0IsQUFTRCxBQU9RLEFBYWEsZUE1QjFCLEdBZ0JDLE1BZk8sQUFnQkgsVUFDUSxDQVVjLE1BMUJ4QixXQWlCRSxDQWhCeUgsU0FpQnhILFNBWEEsRUFZNkIsd0NBQzNCLGdDQVpJLGdDQU5MLFVBbUJPLE1BbEJWLDZDQU1ZLDZCQUxOLGFBa0JRLHlEQVpILHVCQU5KLG1CQW1CTCxXQUFDLHlCQVpJLGtCQUFDIiwiZmlsZSI6IkQ6XFxjb2RlXFx6d1xcendfY2xpZW50X3dlYlxcdXRpbHNcXGNvbXBvbmVudHNcXEZvb3RCYXJcXEZvb3RCYXIudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFN0b3JlZnJvbnRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TdG9yZWZyb250J1xyXG5pbXBvcnQgQWNjb3VudEJveEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0FjY291bnRCb3gnXHJcbmltcG9ydCBSZWRlZW1JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9SZWRlZW0nXHJcbmltcG9ydCBTaG9wcGluZ0NhcnRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TaG9wcGluZ0NhcnQnXHJcbmltcG9ydCBQZW9wbGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9QZW9wbGUnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgcmVkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9yZWQnXHJcbmltcG9ydCB7QXBwRm9vdEJhcn0gZnJvbSAnLi4vLi4vc3NfY29tbW9uL2VudW0nXHJcbmltcG9ydCB7dXNlU3RvcmVNb2RlbH0gZnJvbSAnLi4vLi4vTW9kZWxBY3Rpb24vdXNlU3RvcmUnXHJcbmltcG9ydCB7c2hvcENhcnRNb2RlbH0gZnJvbSAnLi4vLi4vdmlldy9jYXJ0J1xyXG5pbXBvcnQge21wU3R5bGV9IGZyb20gJy4uLy4uL3N0eWxlL2NvbW1vbidcclxuXHJcbmV4cG9ydCBjb25zdCBGb290QmFyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3Qge3N0YXRlOiBzdGF0ZVNob3BDYXJ0LCBhY3Rpb25zOiBhY3Rpb25zU2hvcENhcnR9ID0gdXNlU3RvcmVNb2RlbChzaG9wQ2FydE1vZGVsKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIXN0YXRlU2hvcENhcnQudXNlci5pZCkge1xyXG4gICAgICBhY3Rpb25zU2hvcENhcnQuZ2V0TGlzdCgpXHJcbiAgICB9XHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IGlzQWN0ID0gKHBhdGg6IGFueSkgPT4gcm91dGVyLnBhdGhuYW1lLmluY2x1ZGVzKHBhdGggYXMgc3RyaW5nKVxyXG4gIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17J0Zvb3RCYXInfT5cclxuICAgICAgICB7W1xyXG4gICAgICAgICAgWyfpgJvlupcnLCA8U3RvcmVmcm9udEljb24vPiwgYC8ke0FwcEZvb3RCYXIuaG9tZX1gXSxcclxuICAgICAgICAgIFsn5ou85ZuiJywgPFBlb3BsZUljb24vPiwgYC8ke0FwcEZvb3RCYXIuZ3JvdXB9YF0sXHJcbiAgICAgICAgICBbJ+i+vuS6uuWNoScsIDxSZWRlZW1JY29uLz4sIGAvJHtBcHBGb290QmFyLmNhcmR9YF0sXHJcbiAgICAgICAgICBbJ+i0reeJqei9picsIDxTaG9wcGluZ0NhcnRJY29uLz4sIGAvJHtBcHBGb290QmFyLmNhcnR9YCwgc3RhdGVTaG9wQ2FydC5kZWFsUHJvZHVjdE51bWJlcihzdGF0ZVNob3BDYXJ0KV0sXHJcbiAgICAgICAgICBbJ+aIkScsIDxBY2NvdW50Qm94SWNvbi8+LCBgLyR7QXBwRm9vdEJhci5tZX1gXSxcclxuICAgICAgICBdLm1hcCh2ID0+IChcclxuICAgICAgICAgICAgPHNlY3Rpb25cclxuICAgICAgICAgICAgICAgIGtleT17YEZvb3RCYXJfJHt2WzBdfWB9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2lzQWN0KHZbMl0pID8gJ2FjdCcgOiAnJ31cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGlzQWN0KHZbMl0pID8gJycgOiByb3V0ZXIucHVzaCh2WzJdIGFzIHN0cmluZyl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7dlsxXX1cclxuICAgICAgICAgICAgICA8c3Bhbj57dlswXX08L3NwYW4+XHJcbiAgICAgICAgICAgICAge35+dlszXSA+IDAgJiYgPGFzaWRlPnt2WzNdfTwvYXNpZGU+fVxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLkZvb3RCYXIge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDRweCAwIHJnYmEoMCwwLDAsMC4xNCksIDAgM3B4IDNweCAtMnB4IHJnYmEoMCwwLDAsMC4xMiksIDAgMXB4IDhweCAwIHJnYmEoMCwwLDAsMC4yMCk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgID4gc2VjdGlvbiB7XHJcbiAgICAgICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICA+IGFzaWRlIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAyMCU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTZweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7bXBTdHlsZS5yZWR9O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmFjdCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAke3JlZFs2MDBdfTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXX0= */
/*@ sourceURL=D:\\code\\zw\\zw_client_web\\utils\\components\\FootBar\\FootBar.tsx */`));
};

/***/ }),

/***/ "./utils/components/HeaderSearch/HeaderSearch.tsx":
/*!********************************************************!*\
  !*** ./utils/components/HeaderSearch/HeaderSearch.tsx ***!
  \********************************************************/
/*! exports provided: borderedInputBaseStyles, useBorderedInputBaseStyles, BorderedInputBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderedInputBaseStyles", function() { return borderedInputBaseStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useBorderedInputBaseStyles", function() { return useBorderedInputBaseStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BorderedInputBase", function() { return BorderedInputBase; });
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
  name: "BorderedInputBase"
});
const BorderedInputBase = () => {
  const styles = useBorderedInputBaseStyles();
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["InputBase"], {
    classes: styles,
    placeholder: 'Placeholder',
    startAdornment: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__["Search"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 23
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 10
    }
  });
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
/* harmony import */ var _material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/AddCircleOutline */ "@material-ui/icons/AddCircleOutline");
/* harmony import */ var _material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/ShoppingCart */ "@material-ui/icons/ShoppingCart");
/* harmony import */ var _material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tools_img__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../tools/img */ "./utils/tools/img.ts");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tools_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../tools/utils */ "./utils/tools/utils.ts");
/* harmony import */ var _style_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../style/common */ "./utils/style/common.ts");
/* harmony import */ var _ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ModelAction/modelUtil */ "./utils/ModelAction/modelUtil.ts");
/* harmony import */ var _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ModelAction/useStore */ "./utils/ModelAction/useStore.ts");
/* harmony import */ var _view_me_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../view/me/model */ "./utils/view/me/model.ts");
/* harmony import */ var _graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../graphqlTypes/doc */ "./utils/graphqlTypes/doc/index.ts");
/* harmony import */ var _Message_Message__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Message/Message */ "./utils/components/Message/Message.tsx");
/* harmony import */ var _tools_dealKey__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../tools/dealKey */ "./utils/tools/dealKey.ts");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/colors */ "@material-ui/core/colors");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _view_cart__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../view/cart */ "./utils/view/cart/index.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _UpdateShopCart__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./UpdateShopCart */ "./utils/components/ProductItem/UpdateShopCart.tsx");
var _jsxFileName = "D:\\code\\zw\\zw_client_web\\utils\\components\\ProductItem\\ProductItem.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



















const productModel = Object(_ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_8__["modelFactory"])('productModel', {}, {
  updateNumShopCart: async (value, option) => {
    return await option.mutate(_graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_11__["doc"].updateNumShopCart, _objectSpread({
      shopCart: value
    }, value.number ? {
      updateNum: value.number
    } : {}));
  },
  updateShopCart: async (value, option) => {
    return await option.mutate(_graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_11__["doc"].updateShopCart, {
      shopCart: value
    });
  }
});
const Box = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Card"]).withConfig({
  displayName: "ProductItem__Box",
  componentId: "sc-1cef71f-0"
})(["padding:10px 10px 0;> header{width:100%;height:40vw;> img{border-radius:8px;width:100%;height:40vw;}}> main{margin-top:10px;}> footer{margin-top:4px;display:flex;align-items:center;> main{flex-grow:1;}> .MuiButtonBase-root{padding:5px;}}"]);
const ProductPrice = ({
  product
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("aside", {
    style: {
      display: 'inline-block',
      fontSize: '12px',
      textDecoration: 'line-through',
      flexShrink: 0
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 5
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_6__["dealMoney"])(product === null || product === void 0 ? void 0 : product.priceMarket)), __jsx("main", {
    style: {
      display: 'inline-block',
      fontSize: '14px',
      marginLeft: '6px',
      color: _style_common__WEBPACK_IMPORTED_MODULE_7__["mpStyle"].red,
      flexShrink: 0
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 5
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_6__["dealMoney"])(product === null || product === void 0 ? void 0 : product.priceOut)));
};
const ProductItem = ({
  product
}) => {
  var _product$img, _product$img$, _stateMe$user;

  const {
    actions: actionsUpdateShopCartModel
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_9__["useStoreModel"])(_UpdateShopCart__WEBPACK_IMPORTED_MODULE_17__["updateShopCartModel"]);
  const {
    actions: actionsShopCart
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_9__["useStoreModel"])(_view_cart__WEBPACK_IMPORTED_MODULE_15__["shopCartModel"]);
  const {
    state: stateMe,
    actions: actionsMe
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_9__["useStoreModel"])(_view_me_model__WEBPACK_IMPORTED_MODULE_10__["meModel"]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    if (!stateMe.user.id) {
      actionsMe.getLoginUser();
    }
  }, []);
  const {
    actions: actionsPM
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_9__["useStoreModel"])(productModel);
  return __jsx(Box, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 10
    }
  }, __jsx("header", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: Object(_tools_img__WEBPACK_IMPORTED_MODULE_4__["dealImgUrl"])(product === null || product === void 0 ? void 0 : (_product$img = product.img) === null || _product$img === void 0 ? void 0 : (_product$img$ = _product$img[0]) === null || _product$img$ === void 0 ? void 0 : _product$img$.url),
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  })), __jsx("main", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 5
    }
  }, product.name, product.weight, product.unit), __jsx("footer", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 5
    }
  }, __jsx(ProductPrice, {
    product: product,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }
  }), ((_stateMe$user = stateMe.user) === null || _stateMe$user === void 0 ? void 0 : _stateMe$user.id) && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["IconButton"], {
    onClick: async () => {
      const res = await actionsUpdateShopCartModel.openClick();

      if ((res === null || res === void 0 ? void 0 : res.num) > 0) {
        var _await$actionsPM$upda, _await$actionsPM$upda2;

        if ((_await$actionsPM$upda = await actionsPM.updateNumShopCart({
          product,
          number: ~~(res === null || res === void 0 ? void 0 : res.num)
        })) === null || _await$actionsPM$upda === void 0 ? void 0 : (_await$actionsPM$upda2 = _await$actionsPM$upda.updateNumShopCart) === null || _await$actionsPM$upda2 === void 0 ? void 0 : _await$actionsPM$upda2.id) {
          Object(_Message_Message__WEBPACK_IMPORTED_MODULE_12__["showMessage"])('操作成功');
          actionsShopCart.getList();
        }
      }
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 28
    }
  }, __jsx(_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_2___default.a, {
    color: 'secondary',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }
  }))), __jsx(_UpdateShopCart__WEBPACK_IMPORTED_MODULE_17__["UpdateShopCart"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 5
    }
  }));
};
const RowBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ProductItem__RowBox",
  componentId: "sc-1cef71f-1"
})(["display:flex;padding:8px;box-shadow:", ";border-radius:8px;margin-bottom:8px;"], _style_common__WEBPACK_IMPORTED_MODULE_7__["mpStyle"].shadow['1']);
const Img = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ProductItem__Img",
  componentId: "sc-1cef71f-2"
})(["width:35vw;height:35vw;margin-right:8px;> img{width:35vw;height:35vw;}"]);
const LeftBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ProductItem__LeftBox",
  componentId: "sc-1cef71f-3"
})(["display:flex;flex-direction:column;flex-grow:1;"]);
const Stock = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ProductItem__Stock",
  componentId: "sc-1cef71f-4"
})(["margin-top:16px;border-radius:8px;padding:2px 6px;background:", ";color:white;width:max-content;"], _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_14__["grey"][800]);
const Price = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ProductItem__Price",
  componentId: "sc-1cef71f-5"
})(["margin-top:16px;flex-grow:1;"]);
const Bun = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ProductItem__Bun",
  componentId: "sc-1cef71f-6"
})(["&&&{.MuiButtonBase-root{padding:4px 0;}}"]);
const ProductItemOneRow = ({
  product
}) => {
  var _product$img2, _product$img2$, _stateMe$user2;

  const {
    actions: actionsUpdateShopCartModel
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_9__["useStoreModel"])(_UpdateShopCart__WEBPACK_IMPORTED_MODULE_17__["updateShopCartModel"]);
  const {
    state: stateMe,
    actions: actionsMe
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_9__["useStoreModel"])(_view_me_model__WEBPACK_IMPORTED_MODULE_10__["meModel"]);
  const {
    actions: actionsPM
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_9__["useStoreModel"])(productModel);
  const {
    actions: actionsShopCart
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_9__["useStoreModel"])(_view_cart__WEBPACK_IMPORTED_MODULE_15__["shopCartModel"]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    if (!stateMe.user.id) {
      actionsMe.getLoginUser();
    }
  }, []);
  return __jsx(RowBox, {
    key: `ProductItemOneRow_${product.id}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 10
    }
  }, __jsx(Img, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: Object(_tools_img__WEBPACK_IMPORTED_MODULE_4__["dealImgUrl"])(product === null || product === void 0 ? void 0 : (_product$img2 = product.img) === null || _product$img2 === void 0 ? void 0 : (_product$img2$ = _product$img2[0]) === null || _product$img2$ === void 0 ? void 0 : _product$img2$.url),
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 7
    }
  })), __jsx(LeftBox, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 5
    }
  }, __jsx("main", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 7
    }
  }, product.name, product.weight, product.unit), __jsx(Stock, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_13__["ls"])('当前剩余'), ": ", product.stock), __jsx(Price, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 7
    }
  }, __jsx(ProductPrice, {
    product: product,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 9
    }
  })), ((_stateMe$user2 = stateMe.user) === null || _stateMe$user2 === void 0 ? void 0 : _stateMe$user2.id) && __jsx(Bun, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 28
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
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
          Object(_Message_Message__WEBPACK_IMPORTED_MODULE_12__["showMessage"])('操作成功');
          actionsShopCart.getList();
        }
      }
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 11
    }
  }), Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_13__["ls"])('加入购物车')))), __jsx(_UpdateShopCart__WEBPACK_IMPORTED_MODULE_17__["UpdateShopCart"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 5
    }
  }));
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
})(["font-weight:bold;"]);
const MarketPrice = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ProductItem__MarketPrice",
  componentId: "sc-1cef71f-11"
})(["margin-top:8px;color:", ";> span{text-decoration:line-through;}"], _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_14__["grey"][700]);
const OutPrice = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ProductItem__OutPrice",
  componentId: "sc-1cef71f-12"
})(["margin-top:8px;color:", ";flex-grow:1;"], _style_common__WEBPACK_IMPORTED_MODULE_7__["mpStyle"].red);
const Action = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ProductItem__Action",
  componentId: "sc-1cef71f-13"
})([""]);
const GroupProductItem = ({
  product
}) => {
  var _product$img3, _product$img3$;

  const {
    state: stateMe,
    actions: actionsMe
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_9__["useStoreModel"])(_view_me_model__WEBPACK_IMPORTED_MODULE_10__["meModel"]);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_16__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    if (!stateMe.user.id) {
      actionsMe.getLoginUser();
    }
  }, []);
  console.log(product);
  return __jsx(GroupBox, {
    key: `GroupBox_${product.id}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 10
    }
  }, __jsx(GroupImg, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: Object(_tools_img__WEBPACK_IMPORTED_MODULE_4__["dealImgUrl"])(product === null || product === void 0 ? void 0 : (_product$img3 = product.img) === null || _product$img3 === void 0 ? void 0 : (_product$img3$ = _product$img3[0]) === null || _product$img3$ === void 0 ? void 0 : _product$img3$.url),
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 7
    }
  })), __jsx(RightBox, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 5
    }
  }, __jsx(Title, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 7
    }
  }, product.name, "(", product.groupRemark, "/", product.groupAmount, product.groupAmountUnitString, "/", product.groupPrecisionString, ")"), __jsx(MarketPrice, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_13__["ls"])('市场价'), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 9
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_6__["dealMoney"])(product.priceMarket))), __jsx(OutPrice, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_13__["ls"])('基准价格'), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 9
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_6__["dealMoney"])(product.priceOut))), __jsx(Action, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    variant: 'contained',
    color: 'secondary',
    fullWidth: true,
    onClick: () => {
      router.push(`/groupProduct/[id]`, `/groupProduct/${product.id}`);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 11
    }
  }), Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_13__["ls"])('拼一个')))));
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
            product {
                ...ProductFields
            }
            groupOrder {
                ...GroupOrderFields
            }
        }
    }
    ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].GroupQueueFields}
    ${_fragment__WEBPACK_IMPORTED_MODULE_1__["fragment"].ProductFields}
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
    actions: actionsSCM
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_8__["useStoreModel"])(_index__WEBPACK_IMPORTED_MODULE_10__["shopCartModel"]);
  const {
    actions: actionsPM
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_8__["useStoreModel"])(_components_ProductItem_ProductItem__WEBPACK_IMPORTED_MODULE_6__["productModel"]);
  const product = shopCart.product;
  return __jsx(ShopCartProductBox, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 10
    }
  }, __jsx("img", {
    src: Object(_tools_img__WEBPACK_IMPORTED_MODULE_4__["dealImgUrl"])((_shopCart$product = shopCart.product) === null || _shopCart$product === void 0 ? void 0 : (_shopCart$product$img = _shopCart$product.img) === null || _shopCart$product$img === void 0 ? void 0 : (_shopCart$product$img2 = _shopCart$product$img[0]) === null || _shopCart$product$img2 === void 0 ? void 0 : _shopCart$product$img2.url),
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }), __jsx("main", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }, product === null || product === void 0 ? void 0 : product.name, product === null || product === void 0 ? void 0 : product.weight, product === null || product === void 0 ? void 0 : product.unit), __jsx("section", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, product === null || product === void 0 ? void 0 : product.remark), __jsx("footer", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }, __jsx(_components_ProductItem_ProductItem__WEBPACK_IMPORTED_MODULE_6__["ProductPrice"], {
    product: product,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
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
      lineNumber: 55,
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
      lineNumber: 66,
      columnNumber: 10
    }
  }, __jsx(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
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
      lineNumber: 78,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
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
      lineNumber: 90,
      columnNumber: 9
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_9__["ls"])('删除')), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    size: 'small',
    variant: 'outlined',
    onClick: async () => {
      await actionsPM.updateShopCart({
        isNext: 0,
        id: shopCart.id
      });
      actionsSCM.getList();
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_9__["ls"])('加入购物车')))));
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
  transportationCosts: 0
};
const shopCartModel = Object(_ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_0__["modelFactory"])('shopCartModel', {
  user: {},
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
  }, 0)
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
    var _res$shopCartList$fil, _res$shopCartList$fil2;

    const res = await option.query(_graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_4__["doc"].userShopCartList);
    option.setData(Object(_tools_utils__WEBPACK_IMPORTED_MODULE_2__["fpMergePre"])({
      shopCartList: (_res$shopCartList$fil = res === null || res === void 0 ? void 0 : res.shopCartList.filter(v => !v.isNext)) !== null && _res$shopCartList$fil !== void 0 ? _res$shopCartList$fil : [],
      shopCartListNext: (_res$shopCartList$fil2 = res === null || res === void 0 ? void 0 : res.shopCartList.filter(v => !!v.isNext)) !== null && _res$shopCartList$fil2 !== void 0 ? _res$shopCartList$fil2 : []
    }));
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
    option.setData(Object(_tools_utils__WEBPACK_IMPORTED_MODULE_2__["fpMergePre"])({
      user: res === null || res === void 0 ? void 0 : res.oneUser,
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
      lineNumber: 105,
      columnNumber: 55
    }
  }) || __jsx(_shopCart__WEBPACK_IMPORTED_MODULE_5__["ShopCartPage"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 72
    }
  });
};

/***/ }),

/***/ "./utils/view/cart/orderPage.tsx":
/*!***************************************!*\
  !*** ./utils/view/cart/orderPage.tsx ***!
  \***************************************/
/*! exports provided: ShopTitle, AddressBox, CardBox, ShopTotal, OrderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopTitle", function() { return ShopTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressBox", function() { return AddressBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardBox", function() { return CardBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopTotal", function() { return ShopTotal; });
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
})(["position:fixed;box-sizing:border-box;bottom:0;width:100vw;padding:16px 24px;display:grid;grid-template-rows:repeat(2,1fr);grid-template-columns:1fr max-content;grid-row-gap:8px;box-shadow:", ";> header{> span{font-size:12px;margin-left:8px;}}> aside{grid-area:1/2/3/3;}"], _style_common__WEBPACK_IMPORTED_MODULE_16__["mpStyle"].shadow['1']);
const OrderPage = () => {
  var _stateSCM$payCardList, _stateSCM$freightConf, _stateSCM$userLevelLi;

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
    if (!stateSCM.user.id) {
      actionsSCM.getOrderInfo();
    }
  }, []);
  const addressData = stateSCM.dealAddressData(stateSCM);
  const cardData = ((_stateSCM$payCardList = stateSCM.payCardList) === null || _stateSCM$payCardList === void 0 ? void 0 : _stateSCM$payCardList.find(v => v.id === stateSCM.form.paymentMethodCardId)) || {};
  const productTotal = stateSCM.dealProductTotal(stateSCM);
  const transportationCosts = stateSCM.form.pickUpType === _ss_common_enum__WEBPACK_IMPORTED_MODULE_7__["PickUpTypeEnum"].Delivery && stateSCM.freightConfig.reduce((pre, cur) => {
    if (pre > parseFloat(cur === null || cur === void 0 ? void 0 : cur.freightPay) && productTotal < parseFloat(cur === null || cur === void 0 ? void 0 : cur.orderMax)) {
      return parseFloat(cur === null || cur === void 0 ? void 0 : cur.freightPay);
    } else {
      return pre;
    }
  }, parseFloat((_stateSCM$freightConf = stateSCM.freightConfig[stateSCM.freightConfig.length - 1]) === null || _stateSCM$freightConf === void 0 ? void 0 : _stateSCM$freightConf.freightPay)) || 0;
  const actuallyPaid = productTotal + transportationCosts - Object(_tools_utils__WEBPACK_IMPORTED_MODULE_15__["dealMaybeNumber"])(stateSCM.form.deductCoin) + Object(_tools_utils__WEBPACK_IMPORTED_MODULE_15__["dealMaybeNumber"])(stateSCM.form.saleTax);
  const generateCoin = actuallyPaid * 0.01;
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 10
    }
  }, __jsx(_components_HeaderTitle_HeaderTitle__WEBPACK_IMPORTED_MODULE_2__["HeaderTitle"], {
    title: '确认订单',
    backCall: () => {
      actionsSCM.updatePageType(_index__WEBPACK_IMPORTED_MODULE_4__["pageTypeEnum"].shopCart);
      return true;
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 5
    }
  }), !!getLoad(_graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_8__["doc"].orderConfirmInfo) && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["LinearProgress"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 42
    }
  }) || __jsx("div", {
    style: {
      height: '4px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 64
    }
  }), __jsx(_components_BScroll_BScroller__WEBPACK_IMPORTED_MODULE_10__["BScroller"], {
    boxHeight: 'calc(100vh - 65px)',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 5
    }
  }, __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_11__["Space"], {
    h: 10,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }
  }), __jsx(ShopTitle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 7
    }
  }, __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_11__["Space"], {
    w: 20,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 9
    }
  }), Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__["ls"])(stateSCM.form.pickUpType === _ss_common_enum__WEBPACK_IMPORTED_MODULE_7__["PickUpTypeEnum"].Self && '自取地址' || '送货地址')), __jsx(AddressBox, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }
  }, __jsx("main", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 9
    }
  }, __jsx("header", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 11
    }
  }, `${addressData.combineAddress}`), __jsx("footer", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 11
    }
  }, `${addressData.name} ${addressData.contactInformation}`)), __jsx("aside", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
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
      lineNumber: 139,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 13
    }
  })))), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_11__["Space"], {
    c: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_13__["grey"][200],
    h: 16,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 7
    }
  }), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_11__["Space"], {
    h: 16,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 7
    }
  }), __jsx(ShopTitle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 7
    }
  }, __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_11__["Space"], {
    w: 20,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 9
    }
  }), Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__["ls"])('付款方式')), __jsx(CardBox, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 7
    }
  }, __jsx("header", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 9
    }
  }, cardData.name), __jsx("footer", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 9
    }
  }, cardData.number), __jsx("aside", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
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
      lineNumber: 162,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 13
    }
  })))), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_11__["Space"], {
    c: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_13__["grey"][200],
    h: 16,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 7
    }
  }), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_11__["Space"], {
    h: 16,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 7
    }
  }), __jsx(ShopTitle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 7
    }
  }, __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_11__["Space"], {
    w: 20,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 9
    }
  }), Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__["ls"])('使用达人币'), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_11__["Space"], {
    w: 16,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 9
    }
  }), __jsx("footer", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 9
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__["ls"])('当月可用余额'), Object(_tools_utils__WEBPACK_IMPORTED_MODULE_15__["dealMoney"])(stateSCM.user.orderCoinCurrentMonth))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 7
    }
  }, __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_11__["Space"], {
    w: 20,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
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
      lineNumber: 185,
      columnNumber: 9
    }
  })), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_11__["Space"], {
    c: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_13__["grey"][200],
    h: 16,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 7
    }
  }), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_11__["Space"], {
    h: 16,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 7
    }
  }), __jsx(ShopTotal, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 7
    }
  }, __jsx("header", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 9
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__["ls"])('购物车总计')), __jsx("footer", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 9
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_15__["dealMoney"])(productTotal))), transportationCosts > 0 && __jsx(ShopTotal, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 35
    }
  }, __jsx("header", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 9
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__["ls"])('运费')), __jsx("footer", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 9
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_15__["dealMoney"])(transportationCosts))), __jsx(ShopTotal, {
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
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__["ls"])('达人币抵扣')), __jsx("footer", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 9
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_15__["dealMoney"])(stateSCM.form.deductCoin, '-'))), __jsx(ShopTotal, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 7
    }
  }, __jsx("header", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 9
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__["ls"])('消费税')), __jsx("footer", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 9
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_15__["dealMoney"])(stateSCM.form.saleTax))), __jsx(ShopTotal, {
    style: {
      fontSize: '18px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 7
    }
  }, __jsx("header", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 9
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__["ls"])('订单总额')), __jsx("footer", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 9
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_15__["dealMoney"])(actuallyPaid)))), __jsx(FooterFit, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 5
    }
  }, __jsx("header", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__["ls"])('本次订单'), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 9
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__["ls"])((_stateSCM$userLevelLi = stateSCM.userLevelList.find(v => {
    var _stateSCM$user$userIn;

    return v.code === ((_stateSCM$user$userIn = stateSCM.user.userInfo) === null || _stateSCM$user$userIn === void 0 ? void 0 : _stateSCM$user$userIn.userLevel);
  })) === null || _stateSCM$userLevelLi === void 0 ? void 0 : _stateSCM$userLevelLi.name))), __jsx("footer", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__["ls"])('将获得下月使用达人币 '), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 9
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_15__["dealMoney"])(generateCoin))), __jsx("aside", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 7
    }
  }, __jsx(_components_ButtonLoad_ButtonLoad__WEBPACK_IMPORTED_MODULE_17__["ButtonLoad"], {
    loading: getLoad(_graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_8__["doc"].saveOrder),
    onClick: async () => {
      var _stateSCM$user$userIn2, _res$saveOrder;

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
      lineNumber: 228,
      columnNumber: 9
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__["ls"])('提交订单')))), __jsx(_components_SelectAddress__WEBPACK_IMPORTED_MODULE_12__["SelectAddress"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 5
    }
  }), __jsx(_components_SelectCard__WEBPACK_IMPORTED_MODULE_14__["SelectCard"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
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
const Money = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div.withConfig({
  displayName: "shopCart__Money",
  componentId: "sc-2w144c-2"
})(["display:flex;justify-content:space-between;"]);
const FixFooter = styled_components__WEBPACK_IMPORTED_MODULE_8___default()(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"]).withConfig({
  displayName: "shopCart__FixFooter",
  componentId: "sc-2w144c-3"
})(["padding:20px;position:fixed;bottom:0;width:100vw;box-sizing:border-box;background:#fff;"]);
const ShopCartPage = () => {
  const {
    state: stateSCM,
    actions: actionsSCM,
    getLoad
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_3__["useStoreModel"])(_index__WEBPACK_IMPORTED_MODULE_12__["shopCartModel"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (stateSCM.shopCartList.length === 0) {
      actionsSCM.getList();
    }
  }, []);
  const productNumber = stateSCM.dealProductNumber(stateSCM);
  const productSubtotal = Object(_tools_utils__WEBPACK_IMPORTED_MODULE_2__["dealMoney"])(stateSCM.dealProductTotal(stateSCM));
  const allTotal = productSubtotal + 0;
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 10
    }
  }, __jsx(_components_HeaderTitle_HeaderTitle__WEBPACK_IMPORTED_MODULE_5__["HeaderTitle"], {
    title: '购物车',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }), !!getLoad(_graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_1__["doc"].userShopCartList) && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["LinearProgress"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 42
    }
  }) || __jsx("div", {
    style: {
      height: '4px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 64
    }
  }), __jsx(_components_BScroll_BScroller__WEBPACK_IMPORTED_MODULE_11__["BScroller"], {
    boxHeight: 'calc(100vh - 65px)',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }, __jsx(BoxContain, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
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
      lineNumber: 54,
      columnNumber: 9
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
      lineNumber: 59,
      columnNumber: 9
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_4__["ls"])('小计'), ":", productSubtotal), stateSCM.shopCartList.map(value => __jsx(_CartProduct__WEBPACK_IMPORTED_MODULE_10__["CartProduct"], {
    key: `CartProduct_${value.id}`,
    shopCart: value,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 45
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
      lineNumber: 74,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["MenuItem"], {
    value: _ss_common_enum__WEBPACK_IMPORTED_MODULE_9__["PickUpTypeEnum"].Self,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_4__["ls"])(Object(_ss_common_enum__WEBPACK_IMPORTED_MODULE_9__["getPickUpTypeName"])(_ss_common_enum__WEBPACK_IMPORTED_MODULE_9__["PickUpTypeEnum"].Self))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["MenuItem"], {
    value: _ss_common_enum__WEBPACK_IMPORTED_MODULE_9__["PickUpTypeEnum"].Delivery,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_4__["ls"])(Object(_ss_common_enum__WEBPACK_IMPORTED_MODULE_9__["getPickUpTypeName"])(_ss_common_enum__WEBPACK_IMPORTED_MODULE_9__["PickUpTypeEnum"].Delivery)))), __jsx(Title, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_4__["ls"])('达人卡和优惠券')), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    variant: 'outlined',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_4__["ls"])('输入验证码')), __jsx(Title, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_4__["ls"])('预估价格')), __jsx(Money, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }, __jsx("aside", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_4__["ls"])('小计')), __jsx("main", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  }, productSubtotal)), __jsx("div", {
    style: {
      width: '100%',
      height: '10px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  }), __jsx(Money, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  }, __jsx("aside", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_4__["ls"])('总计')), __jsx("main", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 11
    }
  }, allTotal)), __jsx(Title, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_4__["ls"])('下次购买的商品')), stateSCM.shopCartListNext.map(value => __jsx(_CartProduct__WEBPACK_IMPORTED_MODULE_10__["CartProduct"], {
    key: `CartProduct_${value.id}`,
    shopCart: value,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 49
    }
  })), __jsx("div", {
    style: {
      width: '100%',
      height: '100px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }
  }))), __jsx(FixFooter, {
    boxShadow: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    variant: 'contained',
    color: 'secondary',
    fullWidth: true,
    onClick: () => actionsSCM.updatePageType(_index__WEBPACK_IMPORTED_MODULE_12__["pageTypeEnum"].order),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }
  }, "\u53BB\u7ED3\u7B97")));
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
    if (![_ss_common_enum__WEBPACK_IMPORTED_MODULE_3__["AppModuleTypeEnum"].limitTime, _ss_common_enum__WEBPACK_IMPORTED_MODULE_3__["AppModuleTypeEnum"].mayLike, _ss_common_enum__WEBPACK_IMPORTED_MODULE_3__["AppModuleTypeEnum"].salesRank, _ss_common_enum__WEBPACK_IMPORTED_MODULE_3__["AppModuleTypeEnum"].themeSelection, _ss_common_enum__WEBPACK_IMPORTED_MODULE_3__["AppModuleTypeEnum"].categorySelection, _ss_common_enum__WEBPACK_IMPORTED_MODULE_3__["AppModuleTypeEnum"].lineRanking, _ss_common_enum__WEBPACK_IMPORTED_MODULE_3__["AppModuleTypeEnum"].topRanking].includes(router.query.appModule)) {
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
  }, __jsx(_components_BScroll_BScroller__WEBPACK_IMPORTED_MODULE_9__["BScroller"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1873098083", [_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__["grey"][600]]]]) + " " + 'common_box',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }, __jsx("header", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1873098083", [_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__["grey"][600]]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, __jsx(_components_HeaderSearch_HeaderSearch__WEBPACK_IMPORTED_MODULE_7__["BorderedInputBase"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1873098083", [_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__["grey"][600]]]]) + " " + 'tip',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, __jsx("aside", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1873098083", [_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__["grey"][600]]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 15
    }
  }, "\u70ED\u641C:"), ['薯条', '小龙虾'].map(value => __jsx("span", {
    key: `tip_${value}`,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1873098083", [_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__["grey"][600]]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 43
    }
  }, value))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1873098083", [_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__["grey"][600]]]]) + " " + 'cusCarousel',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, __jsx(_components_Swipe_Swipe__WEBPACK_IMPORTED_MODULE_6__["default"], {
    height: '160px',
    dataList: (_stateHomeCarouselMod = stateHomeCarouselModel.homeCarouselImgs) === null || _stateHomeCarouselMod === void 0 ? void 0 : (_stateHomeCarouselMod2 = _stateHomeCarouselMod.value) === null || _stateHomeCarouselMod2 === void 0 ? void 0 : _stateHomeCarouselMod2.list,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1873098083", [_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__["grey"][600]]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, __jsx(_components_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_5__["HomeTabs"], {
    homeType: type !== null && type !== void 0 ? type : HomeType.home,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 15
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1873098083",
    dynamic: [_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__["grey"][600]],
    __self: this
  }, `.common_box.__jsx-style-dynamic-selector{padding-top:3.125vw;padding-bottom:37.5vw;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;-webkit-flex-shrink:1;-ms-flex-negative:1;flex-shrink:1;overflow:auto;}.common_box.__jsx-style-dynamic-selector>*.__jsx-style-dynamic-selector{margin-left:3.125vw;margin-right:3.125vw;}.tip.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;color:${_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__["grey"][600]};padding:2.5vw 0;}.tip.__jsx-style-dynamic-selector>span.__jsx-style-dynamic-selector{margin:0 3.125vw;}.cusCarousel.__jsx-style-dynamic-selector{border-radius:3.125vw;overflow:hidden;}.footer.__jsx-style-dynamic-selector{height:62.5vw;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxjb2RlXFx6d1xcendfY2xpZW50X3dlYlxcdXRpbHNcXHZpZXdcXGhvbWVcXGFwcE1vZHVsZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUZzQixBQUV1QixBQVFFLEFBSVQsQUFJTSxBQUdHLEFBSVIsY0FBQyxHQVBLLEdBZkUsQUFRQyxFQVdQLGdCQUFDLEdBWE8sQ0FQWCxnQ0FXc0IsbUNBQ25CLE9BWE0sU0FXTCxxRUFWTCx1RUFDRSx3REFDQSxjQUFDIiwiZmlsZSI6IkQ6XFxjb2RlXFx6d1xcendfY2xpZW50X3dlYlxcdXRpbHNcXHZpZXdcXGhvbWVcXGFwcE1vZHVsZS50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7QXBwTW9kdWxlVHlwZUVudW0sIERpY3RUeXBlRW51bX0gZnJvbSAnLi4vLi4vc3NfY29tbW9uL2VudW0nXHJcbmltcG9ydCB7Q2F0ZWdvcnksIERhdGFDb25maWcsIERhdGFDb25maWdJdGVtSW5wdXR9IGZyb20gJy4uLy4uL2dyYXBocWxUeXBlcy90eXBlcydcclxuaW1wb3J0IHttb2RlbEZhY3Rvcnl9IGZyb20gJy4uLy4uL01vZGVsQWN0aW9uL21vZGVsVXRpbCdcclxuaW1wb3J0IHtIb21lVGFicywgaG9tZVRhYnNNb2RlbH0gZnJvbSAnLi9jb21wb25lbnRzL1RhYnMvVGFicydcclxuaW1wb3J0IEN1c0Nhcm91c2VsIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU3dpcGUvU3dpcGUnXHJcbmltcG9ydCB7Qm9yZGVyZWRJbnB1dEJhc2V9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSGVhZGVyU2VhcmNoL0hlYWRlclNlYXJjaCdcclxuaW1wb3J0IHtGb290QmFyfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Zvb3RCYXIvRm9vdEJhcidcclxuaW1wb3J0IHtCU2Nyb2xsZXJ9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQlNjcm9sbC9CU2Nyb2xsZXInXHJcbmltcG9ydCB7Z3JleX0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzJ1xyXG5pbXBvcnQge3VzZVN0b3JlTW9kZWx9IGZyb20gJy4uLy4uL01vZGVsQWN0aW9uL3VzZVN0b3JlJ1xyXG5pbXBvcnQge2dldERhdGFDb25maWcsIGhvbWVDYXJvdXNlbEltZ3N9IGZyb20gJy4uLy4uL2dyYXBocWxUeXBlcy9kb2MnXHJcbmltcG9ydCB7ZnBNZXJnZVByZX0gZnJvbSAnLi4vLi4vdG9vbHMvdXRpbHMnXHJcblxyXG5leHBvcnQgY29uc3QgSG9tZVR5cGUgPSB7XHJcbiAgaG9tZTogJ2hvbWUnLFxyXG4gIGdyb3VwOiAnZ3JvdXAnLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaG9tZUNhcm91c2VsTW9kZWwgPSBtb2RlbEZhY3RvcnkoJ2hvbWVDYXJvdXNlbE1vZGVsJywge1xyXG4gIGhvbWVDYXJvdXNlbEltZ3M6IFtdIGFzIERhdGFDb25maWcsXHJcbn0sIHtcclxuICBnZXRIb21lQ2Fyb3VzZWw6IGFzeW5jICh2YWx1ZSwgb3B0aW9uKSA9PiB7XHJcbiAgICBjb25zdCByZXMyID0gYXdhaXQgb3B0aW9uLnF1ZXJ5KGdldERhdGFDb25maWcsIHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHR5cGU6IERpY3RUeXBlRW51bS5Ib21lQ2Fyb3VzZWwsXHJcbiAgICAgIH0gYXMgRGF0YUNvbmZpZ0l0ZW1JbnB1dFxyXG4gICAgfSwge30pXHJcbiAgICBjb25zdCB7X190eXBlbmFtZSwgLi4ucmVzdH0gPSByZXMyPy5nZXREYXRhQ29uZmlnXHJcbiAgICBjb25zdCBob21lQ2Fyb3VzZWxEYXRhQ29tZmlnID0gYXdhaXQgb3B0aW9uLnF1ZXJ5KGhvbWVDYXJvdXNlbEltZ3MsIHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIC4uLnJlc3QsXHJcbiAgICAgIH0gYXMgRGF0YUNvbmZpZ0l0ZW1JbnB1dFxyXG4gICAgfSwge30pXHJcbiAgICBvcHRpb24uc2V0RGF0YShmcE1lcmdlUHJlKHtcclxuICAgICAgaG9tZUNhcm91c2VsSW1nczogaG9tZUNhcm91c2VsRGF0YUNvbWZpZy5ob21lQ2Fyb3VzZWxJbWdzLFxyXG4gICAgfSkpXHJcbiAgfSxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBIb21lQXBwTW9kdWxlID0gKHR5cGU/OiBzdHJpbmcpID0+IGZ1bmN0aW9uICh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9tZUNhcm91c2VsSW1ncyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob21lQ2F0ZWdvcnlTZWxlY3Rpb25fbGlzdERhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwTW9kdWxlQ29uZmlnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9OiB7XHJcbiAgaG9tZUNhcm91c2VsSW1nczogRGF0YUNvbmZpZyxcclxuICBhcHBNb2R1bGVDb25maWc6IERhdGFDb25maWcsXHJcbiAgaG9tZUNhdGVnb3J5U2VsZWN0aW9uX2xpc3REYXRhOiBDYXRlZ29yeVtdXHJcbn0pIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIShbQXBwTW9kdWxlVHlwZUVudW0ubGltaXRUaW1lLCBBcHBNb2R1bGVUeXBlRW51bS5tYXlMaWtlLCBBcHBNb2R1bGVUeXBlRW51bS5zYWxlc1JhbmssIEFwcE1vZHVsZVR5cGVFbnVtLnRoZW1lU2VsZWN0aW9uLCBBcHBNb2R1bGVUeXBlRW51bS5jYXRlZ29yeVNlbGVjdGlvbiwgQXBwTW9kdWxlVHlwZUVudW0ubGluZVJhbmtpbmcsIEFwcE1vZHVsZVR5cGVFbnVtLnRvcFJhbmtpbmddIGFzIGFueVtdKS5pbmNsdWRlcyhyb3V0ZXIucXVlcnkuYXBwTW9kdWxlKVxyXG4gICAgKSB7XHJcbiAgICAgIHJvdXRlci5yZXBsYWNlKCcvaG9tZS9bYXBwTW9kdWxlXScsICcvaG9tZS9jYXRlZ29yeVNlbGVjdGlvbicsIHt9KVxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IHthY3Rpb25zOiBhY3Rpb25zSG9tZUNhcm91c2VsTW9kZWwsIHN0YXRlOiBzdGF0ZUhvbWVDYXJvdXNlbE1vZGVsfSA9IHVzZVN0b3JlTW9kZWwoaG9tZUNhcm91c2VsTW9kZWwpXHJcbiAgY29uc3Qge2FjdGlvbnM6IGFjdGlvbnNIb21lVGFic30gPSB1c2VTdG9yZU1vZGVsKGhvbWVUYWJzTW9kZWwpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFjdGlvbnNIb21lQ2Fyb3VzZWxNb2RlbC5nZXRIb21lQ2Fyb3VzZWwoKVxyXG4gICAgYWN0aW9uc0hvbWVUYWJzLmdldERhdGEoKVxyXG4gIH0sIFtdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhY3Rpb25zSG9tZVRhYnMuc2V0SG9tZVR5cGUoKHR5cGUpID8/IEhvbWVUeXBlLmhvbWUpXHJcbiAgfSwgW3R5cGVdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxCU2Nyb2xsZXI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2NvbW1vbl9ib3gnfT5cclxuICAgICAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgICAgICA8Qm9yZGVyZWRJbnB1dEJhc2UvPlxyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyd0aXAnfT5cclxuICAgICAgICAgICAgICA8YXNpZGU+54Ot5pCcOjwvYXNpZGU+XHJcbiAgICAgICAgICAgICAge1sn6Jav5p2hJywgJ+Wwj+m+meiZviddLm1hcCh2YWx1ZSA9PiA8c3BhbiBrZXk9e2B0aXBfJHt2YWx1ZX1gfT57dmFsdWV9PC9zcGFuPil9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2N1c0Nhcm91c2VsJ30+XHJcbiAgICAgICAgICAgICAgPEN1c0Nhcm91c2VsXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD17JzE2MHB4J31cclxuICAgICAgICAgICAgICAgICAgZGF0YUxpc3Q9e3N0YXRlSG9tZUNhcm91c2VsTW9kZWwuaG9tZUNhcm91c2VsSW1ncz8udmFsdWU/Lmxpc3QgYXMgW119XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPEhvbWVUYWJzIGhvbWVUeXBlPXt0eXBlID8/IEhvbWVUeXBlLmhvbWV9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIC5jb21tb25fYm94IHtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMjBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgICAgICBmbGV4LXNocmluazogMTtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgICAgID4gKiB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudGlwIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgY29sb3I6ICR7Z3JleVs2MDBdfTtcclxuICAgICAgICAgICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICAgICAgICAgID4gc3BhbiB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jdXNDYXJvdXNlbCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZm9vdGVyIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9CU2Nyb2xsZXI+XHJcbiAgICAgICAgPEZvb3RCYXIvPlxyXG4gICAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl19 */
/*@ sourceURL=D:\\code\\zw\\zw_client_web\\utils\\view\\home\\appModule.tsx */`)), __jsx(_components_FootBar_FootBar__WEBPACK_IMPORTED_MODULE_8__["FootBar"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
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
var _jsxFileName = "D:\\code\\zw\\zw_client_web\\utils\\view\\home\\components\\PromotionFlashSale\\PromotionFlashSale.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const promotionFlashSaleModel = Object(_ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_1__["modelFactory"])('promotionFlashSaleModel', {
  limitTimeData: [],
  productList: []
}, {
  getData: async (value, option) => {
    var _res$limitTimeData$va, _res$limitTimeData, _res$limitTimeData$va2, _res$limitTimeData$va3, _res$limitTimeData$va4, _res$limitTimeData2, _res$limitTimeData2$v, _productRes$productLi, _productRes$productLi2;

    const res = await option.query(_graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_2__["doc"].limitTimeData);
    const productRes = await option.query(_graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_2__["doc"].productListByIds, {
      ids: (_res$limitTimeData$va = res === null || res === void 0 ? void 0 : (_res$limitTimeData = res.limitTimeData) === null || _res$limitTimeData === void 0 ? void 0 : (_res$limitTimeData$va2 = _res$limitTimeData.value) === null || _res$limitTimeData$va2 === void 0 ? void 0 : (_res$limitTimeData$va3 = _res$limitTimeData$va2.list) === null || _res$limitTimeData$va3 === void 0 ? void 0 : (_res$limitTimeData$va4 = _res$limitTimeData$va3[0]) === null || _res$limitTimeData$va4 === void 0 ? void 0 : _res$limitTimeData$va4.selectProductList) !== null && _res$limitTimeData$va !== void 0 ? _res$limitTimeData$va : []
    });
    option.setData(Object(_tools_utils__WEBPACK_IMPORTED_MODULE_3__["fpMergePre"])({
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
      lineNumber: 53,
      columnNumber: 10
    }
  }, __jsx(Tip, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }, __jsx("main", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__["ls"])('限时选购')), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, "0"), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, "0"), ":", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, "0"), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, "0"), ":", __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, "0"), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, "0")), statePromotionFlashSale.productList.map(product => __jsx(_components_ProductItem_ProductItem__WEBPACK_IMPORTED_MODULE_8__["ProductItemOneRow"], {
    key: `ProductItemOneRow_${product.id}`,
    product: product,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 57
    }
  })));
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
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  const {
    state: homeTabsState,
    actions: homeTabsActions
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_6__["useStoreModel"])(homeTabsModel);
  console.log((homeType === _appModule__WEBPACK_IMPORTED_MODULE_11__["HomeType"].home && [[_ss_common_enum__WEBPACK_IMPORTED_MODULE_7__["AppModuleTypeEnum"].limitTime, '限时选购'], [_ss_common_enum__WEBPACK_IMPORTED_MODULE_7__["AppModuleTypeEnum"].salesRank, '热销排行'], [_ss_common_enum__WEBPACK_IMPORTED_MODULE_7__["AppModuleTypeEnum"].themeSelection, '主题甄选'], [_ss_common_enum__WEBPACK_IMPORTED_MODULE_7__["AppModuleTypeEnum"].mayLike, '猜你喜欢']] || homeType === _appModule__WEBPACK_IMPORTED_MODULE_11__["HomeType"].group && [[_ss_common_enum__WEBPACK_IMPORTED_MODULE_7__["AppModuleTypeEnum"].topRanking, '热门排行'], [_ss_common_enum__WEBPACK_IMPORTED_MODULE_7__["AppModuleTypeEnum"].lineRanking, '冲线排行']] || []).filter(v => {
    var _homeTabsState$appMod;

    return homeTabsState === null || homeTabsState === void 0 ? void 0 : (_homeTabsState$appMod = homeTabsState.appModuleConfig) === null || _homeTabsState$appMod === void 0 ? void 0 : _homeTabsState$appMod[v[0]];
  }));
  console.log(homeTabsState === null || homeTabsState === void 0 ? void 0 : homeTabsState.appModuleConfig);
  return __jsx("div", {
    style: {
      marginTop: '10px'
    },
    className: "jsx-1221730688",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Tabs"], {
    variant: 'fullWidth',
    value: router.query.appModule,
    onChange: (event, value) => homeTabsActions.onChange([value, homeType]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
    value: _ss_common_enum__WEBPACK_IMPORTED_MODULE_7__["AppModuleTypeEnum"].categorySelection,
    label: Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_8__["ls"])(homeType === _appModule__WEBPACK_IMPORTED_MODULE_11__["HomeType"].group ? '分类拼团' : '分类选择'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }), (homeType === _appModule__WEBPACK_IMPORTED_MODULE_11__["HomeType"].home && [[_ss_common_enum__WEBPACK_IMPORTED_MODULE_7__["AppModuleTypeEnum"].limitTime, '限时选购'], [_ss_common_enum__WEBPACK_IMPORTED_MODULE_7__["AppModuleTypeEnum"].salesRank, '热销排行'], [_ss_common_enum__WEBPACK_IMPORTED_MODULE_7__["AppModuleTypeEnum"].themeSelection, '主题甄选'], [_ss_common_enum__WEBPACK_IMPORTED_MODULE_7__["AppModuleTypeEnum"].mayLike, '猜你喜欢']] || homeType === _appModule__WEBPACK_IMPORTED_MODULE_11__["HomeType"].group && [[_ss_common_enum__WEBPACK_IMPORTED_MODULE_7__["AppModuleTypeEnum"].topRanking, '热门排行'], [_ss_common_enum__WEBPACK_IMPORTED_MODULE_7__["AppModuleTypeEnum"].lineRanking, '冲线排行']] || []).filter(v => {
    var _homeTabsState$appMod2;

    return homeTabsState === null || homeTabsState === void 0 ? void 0 : (_homeTabsState$appMod2 = homeTabsState.appModuleConfig) === null || _homeTabsState$appMod2 === void 0 ? void 0 : _homeTabsState$appMod2[v[0]];
  }).map(v => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
    key: `AppModuleTypeEnum_${v[0]}`,
    value: v[0],
    label: Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_8__["ls"])(v[1]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
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
      lineNumber: 85,
      columnNumber: 9
    }
  }, router.query.appModule === _ss_common_enum__WEBPACK_IMPORTED_MODULE_7__["AppModuleTypeEnum"].categorySelection && __jsx(_CategorySelection_CategorySelection__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 14
    }
  }), router.query.appModule === _ss_common_enum__WEBPACK_IMPORTED_MODULE_7__["AppModuleTypeEnum"].limitTime && __jsx(_PromotionFlashSale_PromotionFlashSale__WEBPACK_IMPORTED_MODULE_9__["PromotionFlashSale"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 14
    }
  }), router.query.appModule === _ss_common_enum__WEBPACK_IMPORTED_MODULE_7__["AppModuleTypeEnum"].themeSelection && __jsx(_ThemeSelection_ThemeSelection__WEBPACK_IMPORTED_MODULE_10__["ThemeSelection"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 14
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1221730688",
    __self: undefined
  }, "div.jsx-1221730688 .MuiButtonBase-root{padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxjb2RlXFx6d1xcendfY2xpZW50X3dlYlxcdXRpbHNcXHZpZXdcXGhvbWVcXGNvbXBvbmVudHNcXFRhYnNcXFRhYnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThGb0IsQUFFYSxVQUFDIiwiZmlsZSI6IkQ6XFxjb2RlXFx6d1xcendfY2xpZW50X3dlYlxcdXRpbHNcXHZpZXdcXGhvbWVcXGNvbXBvbmVudHNcXFRhYnNcXFRhYnMudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUYWIsIFRhYnN9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDYXRlZ29yeVNlbGVjdGlvbiBmcm9tICcuLi9DYXRlZ29yeVNlbGVjdGlvbi9DYXRlZ29yeVNlbGVjdGlvbidcclxuaW1wb3J0IFJvdXRlciwge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7bW9kZWxGYWN0b3J5fSBmcm9tICcuLi8uLi8uLi8uLi9Nb2RlbEFjdGlvbi9tb2RlbFV0aWwnXHJcbmltcG9ydCB7dXNlU3RvcmVNb2RlbH0gZnJvbSAnLi4vLi4vLi4vLi4vTW9kZWxBY3Rpb24vdXNlU3RvcmUnXHJcbmltcG9ydCB7QXBwTW9kdWxlVHlwZUVudW0sIERpY3RUeXBlRW51bX0gZnJvbSAnLi4vLi4vLi4vLi4vc3NfY29tbW9uL2VudW0nXHJcbmltcG9ydCB7bHN9IGZyb20gJy4uLy4uLy4uLy4uL3Rvb2xzL2RlYWxLZXknXHJcbmltcG9ydCB7UHJvbW90aW9uRmxhc2hTYWxlfSBmcm9tICcuLi9Qcm9tb3Rpb25GbGFzaFNhbGUvUHJvbW90aW9uRmxhc2hTYWxlJ1xyXG5pbXBvcnQge1RoZW1lU2VsZWN0aW9ufSBmcm9tICcuLi9UaGVtZVNlbGVjdGlvbi9UaGVtZVNlbGVjdGlvbidcclxuaW1wb3J0IHtIb21lVHlwZX0gZnJvbSAnLi4vLi4vYXBwTW9kdWxlJ1xyXG5pbXBvcnQge2ZwTWVyZ2VQcmV9IGZyb20gJy4uLy4uLy4uLy4uL3Rvb2xzL3V0aWxzJ1xyXG5pbXBvcnQge2dldERhdGFDb25maWd9IGZyb20gJy4uLy4uLy4uLy4uL2dyYXBocWxUeXBlcy9kb2MnXHJcbmltcG9ydCB7RGF0YUNvbmZpZ0l0ZW1JbnB1dH0gZnJvbSAnLi4vLi4vLi4vLi4vZ3JhcGhxbFR5cGVzL3R5cGVzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGhvbWVUYWJzTW9kZWwgPSBtb2RlbEZhY3RvcnkoJ0hvbWVUYWJzJywge1xyXG4gIGhvbWVUeXBlOiAnJyxcclxuICBhcHBNb2R1bGVDb25maWc6IHt9IGFzIGFueSxcclxufSwge1xyXG4gIHNldEhvbWVUeXBlOiAodmFsdWU6IHN0cmluZywgb3B0aW9uKSA9PiB7XHJcbiAgICBvcHRpb24uc2V0RGF0YShmcE1lcmdlUHJlKHtcclxuICAgICAgaG9tZVR5cGU6IHZhbHVlLFxyXG4gICAgfSkpXHJcbiAgfSxcclxuICBvbkNoYW5nZTogKFtuYW1lLCB0eXBlXSwgb3B0aW9uKSA9PiB7XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBSb3V0ZXIucHVzaChgLyR7dHlwZX0vW2FwcE1vZHVsZV1gLCBgLyR7dHlwZX0vJHtuYW1lfWAsIHtzaGFsbG93OiB0cnVlfSlcclxuICAgIC8vIG9wdGlvbi5zZXREYXRhKGZwTWVyZ2VQcmUoe1xyXG4gICAgLy8gICB2YWx1ZSxcclxuICAgIC8vIH0pKVxyXG4gIH0sXHJcbiAgZ2V0RGF0YTogYXN5bmMgKHZhbHVlLCBvcHRpb24pID0+IHtcclxuICAgIGNvbnN0IGFwcE1vZHVsZUNvbmZpZyA9IGF3YWl0IG9wdGlvbi5xdWVyeShnZXREYXRhQ29uZmlnLCB7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICB0eXBlOiBEaWN0VHlwZUVudW0uQXBwTW9kdWxlLFxyXG4gICAgICB9IGFzIERhdGFDb25maWdJdGVtSW5wdXRcclxuICAgIH0sIHt9KVxyXG4gICAgb3B0aW9uLnNldERhdGEoZnBNZXJnZVByZSh7XHJcbiAgICAgIGFwcE1vZHVsZUNvbmZpZzogYXBwTW9kdWxlQ29uZmlnLmdldERhdGFDb25maWc/LnZhbHVlID8/IHt9LFxyXG4gICAgfSkpXHJcbiAgfSxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBIb21lVGFicyA9ICh7aG9tZVR5cGV9OiB7aG9tZVR5cGU6IHN0cmluZ30pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHtzdGF0ZTogaG9tZVRhYnNTdGF0ZSwgYWN0aW9uczogaG9tZVRhYnNBY3Rpb25zfSA9IHVzZVN0b3JlTW9kZWwoaG9tZVRhYnNNb2RlbClcclxuXHJcbiAgY29uc29sZS5sb2coKChob21lVHlwZSA9PT0gSG9tZVR5cGUuaG9tZSAmJiBbXHJcbiAgICBbQXBwTW9kdWxlVHlwZUVudW0ubGltaXRUaW1lLCAn6ZmQ5pe26YCJ6LStJ10sXHJcbiAgICBbQXBwTW9kdWxlVHlwZUVudW0uc2FsZXNSYW5rLCAn54Ot6ZSA5o6S6KGMJ10sXHJcbiAgICBbQXBwTW9kdWxlVHlwZUVudW0udGhlbWVTZWxlY3Rpb24sICfkuLvpopjnlITpgIknXSxcclxuICAgIFtBcHBNb2R1bGVUeXBlRW51bS5tYXlMaWtlLCAn54yc5L2g5Zac5qyiJ10sXHJcbiAgXSkgfHwgKGhvbWVUeXBlID09PSBIb21lVHlwZS5ncm91cCAmJiBbXHJcbiAgICBbQXBwTW9kdWxlVHlwZUVudW0udG9wUmFua2luZywgJ+eDremXqOaOkuihjCddLFxyXG4gICAgW0FwcE1vZHVsZVR5cGVFbnVtLmxpbmVSYW5raW5nLCAn5Yay57q/5o6S6KGMJ10sXHJcbiAgXSkgfHwgW10pLmZpbHRlcih2ID0+IChob21lVGFic1N0YXRlPy5hcHBNb2R1bGVDb25maWc/Llt2WzBdXSkpKVxyXG4gIGNvbnNvbGUubG9nKGhvbWVUYWJzU3RhdGU/LmFwcE1vZHVsZUNvbmZpZylcclxuICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17e21hcmdpblRvcDogJzEwcHgnfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxUYWJzXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9eydmdWxsV2lkdGgnfVxyXG4gICAgICAgICAgICB2YWx1ZT17cm91dGVyLnF1ZXJ5LmFwcE1vZHVsZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCwgdmFsdWUpID0+IGhvbWVUYWJzQWN0aW9ucy5vbkNoYW5nZShbdmFsdWUsIGhvbWVUeXBlXSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFRhYlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtBcHBNb2R1bGVUeXBlRW51bS5jYXRlZ29yeVNlbGVjdGlvbn1cclxuICAgICAgICAgICAgICBsYWJlbD17bHMoaG9tZVR5cGUgPT09IEhvbWVUeXBlLmdyb3VwID8gJ+WIhuexu+aLvOWboicgOiAn5YiG57G76YCJ5oupJyl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgeygoaG9tZVR5cGUgPT09IEhvbWVUeXBlLmhvbWUgJiYgW1xyXG4gICAgICAgICAgICBbQXBwTW9kdWxlVHlwZUVudW0ubGltaXRUaW1lLCAn6ZmQ5pe26YCJ6LStJ10sXHJcbiAgICAgICAgICAgIFtBcHBNb2R1bGVUeXBlRW51bS5zYWxlc1JhbmssICfng63plIDmjpLooYwnXSxcclxuICAgICAgICAgICAgW0FwcE1vZHVsZVR5cGVFbnVtLnRoZW1lU2VsZWN0aW9uLCAn5Li76aKY55SE6YCJJ10sXHJcbiAgICAgICAgICAgIFtBcHBNb2R1bGVUeXBlRW51bS5tYXlMaWtlLCAn54yc5L2g5Zac5qyiJ10sXHJcbiAgICAgICAgICBdKSB8fCAoaG9tZVR5cGUgPT09IEhvbWVUeXBlLmdyb3VwICYmIFtcclxuICAgICAgICAgICAgW0FwcE1vZHVsZVR5cGVFbnVtLnRvcFJhbmtpbmcsICfng63pl6jmjpLooYwnXSxcclxuICAgICAgICAgICAgW0FwcE1vZHVsZVR5cGVFbnVtLmxpbmVSYW5raW5nLCAn5Yay57q/5o6S6KGMJ10sXHJcbiAgICAgICAgICBdKSB8fCBbXSkuZmlsdGVyKHYgPT4gKGhvbWVUYWJzU3RhdGU/LmFwcE1vZHVsZUNvbmZpZz8uW3ZbMF1dKSkubWFwKHYgPT4gPFRhYlxyXG4gICAgICAgICAgICAgIGtleT17YEFwcE1vZHVsZVR5cGVFbnVtXyR7dlswXX1gfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXt2WzBdfVxyXG4gICAgICAgICAgICAgIGxhYmVsPXtscyh2WzFdKX1cclxuICAgICAgICAgIC8+KX1cclxuICAgICAgICA8L1RhYnM+XHJcbiAgICAgICAgPG1haW5cclxuICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Ub3A6ICcxMHB4J319XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3JvdXRlci5xdWVyeS5hcHBNb2R1bGUgPT09IEFwcE1vZHVsZVR5cGVFbnVtLmNhdGVnb3J5U2VsZWN0aW9uXHJcbiAgICAgICAgICAmJiA8Q2F0ZWdvcnlTZWxlY3Rpb24vPn1cclxuICAgICAgICAgIHtyb3V0ZXIucXVlcnkuYXBwTW9kdWxlID09PSBBcHBNb2R1bGVUeXBlRW51bS5saW1pdFRpbWVcclxuICAgICAgICAgICYmIDxQcm9tb3Rpb25GbGFzaFNhbGUvPn1cclxuICAgICAgICAgIHtyb3V0ZXIucXVlcnkuYXBwTW9kdWxlID09PSBBcHBNb2R1bGVUeXBlRW51bS50aGVtZVNlbGVjdGlvblxyXG4gICAgICAgICAgJiYgPFRoZW1lU2VsZWN0aW9uLz59XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIGRpdiA6Z2xvYmFsKC5NdWlCdXR0b25CYXNlLXJvb3QpIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuIl19 */\n/*@ sourceURL=D:\\\\code\\\\zw\\\\zw_client_web\\\\utils\\\\view\\\\home\\\\components\\\\Tabs\\\\Tabs.tsx */"));
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

/***/ 5:
/*!******************************************!*\
  !*** multi ./pages/home/[appModule].tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\code\zw\zw_client_web\pages\home\[appModule].tsx */"./pages/home/[appModule].tsx");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaG9tZS9bYXBwTW9kdWxlXS50c3giLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvTW9kZWxBY3Rpb24vbW9kZWxVdGlsLnRzIiwid2VicGFjazovLy8uL3V0aWxzL01vZGVsQWN0aW9uL3VzZVN0b3JlLnRzIiwid2VicGFjazovLy8uL3V0aWxzL2NsaWVudC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi91dGlscy9jb21tb25Nb2RlbC9kaWFsb2cudHMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29tcG9uZW50cy9CU2Nyb2xsL0JTY3JvbGxlci50c3giLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29tcG9uZW50cy9Cb3gvQm94LnRzeCIsIndlYnBhY2s6Ly8vLi91dGlscy9jb21wb25lbnRzL0J1dHRvbkxvYWQvQnV0dG9uTG9hZC50c3giLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29tcG9uZW50cy9Gb290QmFyL0Zvb3RCYXIudHN4Iiwid2VicGFjazovLy8uL3V0aWxzL2NvbXBvbmVudHMvSGVhZGVyU2VhcmNoL0hlYWRlclNlYXJjaC50c3giLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29tcG9uZW50cy9IZWFkZXJUaXRsZS9IZWFkZXJUaXRsZS50c3giLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29tcG9uZW50cy9Mb2FkaW5nL0xvYWRpbmcudHN4Iiwid2VicGFjazovLy8uL3V0aWxzL2NvbXBvbmVudHMvTWVzc2FnZS9NZXNzYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi91dGlscy9jb21wb25lbnRzL1Byb2R1Y3RJdGVtL1Byb2R1Y3RJdGVtLnRzeCIsIndlYnBhY2s6Ly8vLi91dGlscy9jb21wb25lbnRzL1Byb2R1Y3RJdGVtL1VwZGF0ZVNob3BDYXJ0LnRzeCIsIndlYnBhY2s6Ly8vLi91dGlscy9jb21wb25lbnRzL1N3aXBlL1N3aXBlLnRzeCIsIndlYnBhY2s6Ly8vLi91dGlscy9ncmFwaHFsVHlwZXMvZG9jL2ZyYWdtZW50LnRzIiwid2VicGFjazovLy8uL3V0aWxzL2dyYXBocWxUeXBlcy9kb2MvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvc3NfY29tbW9uL2VudW0udHMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvc3R5bGUvY29tbW9uLnRzIiwid2VicGFjazovLy8uL3V0aWxzL3Rvb2xzL2NvbW1vbkFjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi91dGlscy90b29scy9kZWFsS2V5LnRzIiwid2VicGFjazovLy8uL3V0aWxzL3Rvb2xzL2dsb2JhbC50cyIsIndlYnBhY2s6Ly8vLi91dGlscy90b29scy9pbWcudHMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvdG9vbHMvdG9rZW4udHMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvdG9vbHMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvdmlldy9jYXJ0L0NhcnRQcm9kdWN0LnRzeCIsIndlYnBhY2s6Ly8vLi91dGlscy92aWV3L2NhcnQvY29tcG9uZW50cy9TZWxlY3RBZGRyZXNzLnRzeCIsIndlYnBhY2s6Ly8vLi91dGlscy92aWV3L2NhcnQvY29tcG9uZW50cy9TZWxlY3RDYXJkLnRzeCIsIndlYnBhY2s6Ly8vLi91dGlscy92aWV3L2NhcnQvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3V0aWxzL3ZpZXcvY2FydC9vcmRlclBhZ2UudHN4Iiwid2VicGFjazovLy8uL3V0aWxzL3ZpZXcvY2FydC9zaG9wQ2FydC50c3giLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvdmlldy9ob21lL2FwcE1vZHVsZS50c3giLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvdmlldy9ob21lL2NvbXBvbmVudHMvQ2F0ZWdvcnlTZWxlY3Rpb24vQ2F0ZWdvcnlTZWxlY3Rpb24udHN4Iiwid2VicGFjazovLy8uL3V0aWxzL3ZpZXcvaG9tZS9jb21wb25lbnRzL1Byb21vdGlvbkZsYXNoU2FsZS9Qcm9tb3Rpb25GbGFzaFNhbGUudHN4Iiwid2VicGFjazovLy8uL3V0aWxzL3ZpZXcvaG9tZS9jb21wb25lbnRzL1RhYnMvVGFicy50c3giLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvdmlldy9ob21lL2NvbXBvbmVudHMvVGhlbWVTZWxlY3Rpb24vVGhlbWVTZWxlY3Rpb24udHN4Iiwid2VicGFjazovLy8uL3V0aWxzL3ZpZXcvbWUvbW9kZWwudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvcmVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL21ha2VTdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQWNjb3VudEJveFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9BZGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkQ2lyY2xlT3V0bGluZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9BcnJvd0JhY2tJb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hldnJvblJpZ2h0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1Blb3BsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9SZWRlZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUmVtb3ZlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1Nob3BwaW5nQ2FydFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9TdG9yZWZyb250XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXBvbGxvLWJvb3N0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmV0dGVyLXNjcm9sbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNyb3NzLWZldGNoL3BvbHlmaWxsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZGF0ZS1mbnMvZm9ybWF0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoL3NldFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvY29uZmlnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1qc3gvc3R5bGVcIiJdLCJuYW1lcyI6WyJIb21lQXBwTW9kdWxlIiwiSG9tZVR5cGUiLCJob21lIiwiYmFzZUFjdGlvbk9wdGlvbiIsImRhdGEiLCJtdXRhdGUiLCJub3RpY2UiLCJxdWVyeSIsInNldERhdGEiLCJzdG9yZSIsIm1vZGVsTmFtZUxpc3QiLCJtb2RlbEZhY3RvcnkiLCJuYW1lIiwic3RhdGUiLCJhY3Rpb25zIiwiaW5jbHVkZXMiLCJFcnJvciIsInB1c2giLCJmZXRjaExvYWQiLCJmZXRjaEVycm9yIiwibWVyZ2VNb2RlbCIsIm1vZGVsIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJ2YWx1ZSIsIm1lcmdlTmFtZSIsIm1lcmdlVHdvTW9kZWwiLCJtb2RlbFQiLCJtZXJnZVRocmVlTW9kZWwiLCJtb2RlbEEiLCJtb2RlbEIiLCJtb2RlbEMiLCJtZXJnZUxpc3RNb2RlbCIsIm1vZGVsTGlzdCIsInNsaWNlIiwicmVkdWNlIiwiYWNjIiwiaW5pdExpc3QiLCJpbml0TW9kZWwiLCJpbml0U3RhdGUiLCJvcmlnaW5TdG9yZSIsImlzRnVuY3Rpb24iLCJmdW5jdGlvblRvQ2hlY2siLCJ0b1N0cmluZyIsImNhbGwiLCJkZWFsTmFtZVNwYWNlIiwia2V5IiwibmFtZVNwYWNlIiwidXNlU3RvcmVNb2RlbCIsIl9rZXkiLCJBcnJheSIsImlzQXJyYXkiLCJzZXRTdGF0ZSIsInVzZVN0YXRlIiwiY3JlYXRlIiwidXNlQ2FsbGJhY2siLCJvbGRTdGF0ZSIsIm5ld0RhdGEiLCJzZXRMb2FkIiwiZmxhZyIsInByZXZTdGF0ZSIsImxvYyIsInNvdXJjZSIsImJvZHkiLCJzZXRFcnJvciIsImVyciIsInBhcmFtcyIsIm9wdGlvbiIsInJlcyIsImdyYXBoUUxRdWVyeSIsImNhdGNoIiwiZSIsImZpbmFsbHkiLCJtdXRhdGlvbiIsImdyYXBoUUxNdXRhdGUiLCJsZW5ndGgiLCJjb25zdHJ1Y3RvciIsInYiLCJ1c2VFZmZlY3QiLCJmaWx0ZXIiLCJnZXRMb2FkIiwiY29uZmlnIiwiZ2V0Q29uZmlnIiwiY2xpZW50X2FwaV91cmkiLCJwdWJsaWNSdW50aW1lQ29uZmlnIiwib21pdFR5cGVuYW1lIiwidW5kZWZpbmVkIiwiZ2V0Q2xpZW50IiwicmVxdWVzdCIsIm9wZXJhdGlvbiIsInZhcmlhYmxlcyIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsInNldENvbnRleHQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImdldFRva2VuIiwicmVmcmVzaFRva2VuIiwiZG9jIiwidGhlbiIsInRva2VuIiwic2V0VG9rZW4iLCJyZWZyZXNodG9rZW4iLCJzaG93TWVzc2FnZSIsIm1lc3NhZ2UiLCJSb3V0ZXIiLCJyZWxvYWQiLCJzc0xvZyIsIm9uRXJyb3IiLCJyZXNwb25zZSIsImdyYXBoUUxFcnJvcnMiLCJuZXR3b3JrRXJyb3IiLCJsb2NhdGlvbnMiLCJwYXRoIiwiZXh0ZW5zaW9ucyIsImNvZGUiLCJzcGxpdCIsIm1zZ190eXBlIiwiZXJyTXNnIiwiYm9keVRleHQiLCJyZXN1bHQiLCJlcnJvciIsInN0YXR1c0NvZGUiLCJBcG9sbG9DbGllbnQiLCJ1cmkiLCJkZWZhdWx0Q2xpZW50IiwiZGVhbFBhcmFtcyIsImNsaWVudCIsIl9kZWFsUGFyYW1zSW4iLCJkZWFsUGFyYW1zSW4iLCJmZXRjaFBvbGljeSIsInNlcnZlckNsaWVudCIsInNlcnZlclF1ZXJ5Iiwic2VydmVyTXV0YXRlIiwiZGlhbG9nTW9kZWxGYWN0b3J5IiwiaW5pdERhdGEiLCJkaWFsb2dEYXRhIiwib3BlbiIsImlzRWRpdCIsIm9wZW5SZXNvbHZlIiwib3BlbkNsaWNrIiwiUHJvbWlzZSIsInJlc29sdmUiLCJwcmVEYXRhIiwiZnBNZXJnZSIsIm9wZW5FZGl0Q2xpY2siLCJwcmUiLCJpbmRleCIsIm9uQ2xvc2UiLCJmcFNldCIsInNldGRpYWxvZyIsImJTY3JvbGxNb2RlbCIsInNjcm9sbCIsInNldFNjcm9sbCIsImZwTWVyZ2VQcmUiLCJCU2Nyb2xsZXIiLCJpc1giLCJjaGlsZHJlbiIsImJveEhlaWdodCIsImJveFdpZHRoIiwiYnNTdGF0ZSIsImJzQWN0aW9ucyIsInNjcm9sbFJlZiIsInVzZVJlZiIsIkJldHRlclNjcm9sbCIsImN1cnJlbnQiLCJjbGljayIsInNjcm9sbFkiLCJ0YXBzIiwic2Nyb2xsWCIsInByZXZlbnREZWZhdWx0RXhjZXB0aW9uIiwidGFnTmFtZSIsImNsYXNzTmFtZSIsInN0b3AiLCJkZXN0cm95IiwiZGlzcGxheSIsIkJveCIsInN0eWxlZCIsImRpdiIsIlNwYWNlIiwiaCIsInciLCJjIiwiYmFja2dyb3VuZCIsIndpZHRoIiwiaGVpZ2h0IiwiQnV0dG9uTG9hZCIsInByb3BzIiwibG9hZGluZyIsImRpc2FibGVkIiwiRm9vdEJhciIsInJvdXRlciIsInVzZVJvdXRlciIsInN0YXRlU2hvcENhcnQiLCJhY3Rpb25zU2hvcENhcnQiLCJzaG9wQ2FydE1vZGVsIiwidXNlciIsImlkIiwiZ2V0TGlzdCIsImlzQWN0IiwicGF0aG5hbWUiLCJtcFN0eWxlIiwicmVkIiwiQXBwRm9vdEJhciIsImdyb3VwIiwiY2FyZCIsImNhcnQiLCJkZWFsUHJvZHVjdE51bWJlciIsIm1lIiwibWFwIiwiYm9yZGVyZWRJbnB1dEJhc2VTdHlsZXMiLCJwYWxldHRlIiwicm9vdCIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsImJvcmRlckNvbG9yIiwiYmx1ZUdyZXkiLCJjb2xvciIsImFkb3JuZWRTdGFydCIsInBhZGRpbmdMZWZ0IiwiYWRvcm5lZEVuZCIsInBhZGRpbmdSaWdodCIsImZvY3VzZWQiLCJibHVlIiwibWFpbiIsImlucHV0IiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciIsInVzZUJvcmRlcmVkSW5wdXRCYXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsIkJvcmRlcmVkSW5wdXRCYXNlIiwic3R5bGVzIiwiQ29udGFpbiIsIkhlYWRlclRpdGxlIiwidGl0bGUiLCJiYWNrQ2FsbCIsImJhY2siLCJscyIsIkxvYWRpbmciLCJqdXN0aWZ5Q29udGVudCIsInR5cGVIZWxwIiwiZGVmYXVsdCIsImdyZXkiLCJzdWNjZXNzIiwiZ3JlZW4iLCJ3YXJuaW5nIiwiYW1iZXIiLCJpbmZvIiwiZ2V0VHlwZSIsInR5cGUiLCJDdXNTbmFja2JhciIsIlNuYWNrYmFyIiwiY29tbW9uIiwid2hpdGUiLCJtZXNzYWdlTW9kZWwiLCJhdXRvSGlkZUR1cmF0aW9uIiwiTWVzc2FnZSIsIm1TdGF0ZSIsInByb2R1Y3RNb2RlbCIsInVwZGF0ZU51bVNob3BDYXJ0Iiwic2hvcENhcnQiLCJudW1iZXIiLCJ1cGRhdGVOdW0iLCJ1cGRhdGVTaG9wQ2FydCIsIkNhcmQiLCJQcm9kdWN0UHJpY2UiLCJwcm9kdWN0IiwiZm9udFNpemUiLCJ0ZXh0RGVjb3JhdGlvbiIsImZsZXhTaHJpbmsiLCJkZWFsTW9uZXkiLCJwcmljZU1hcmtldCIsIm1hcmdpbkxlZnQiLCJwcmljZU91dCIsIlByb2R1Y3RJdGVtIiwiYWN0aW9uc1VwZGF0ZVNob3BDYXJ0TW9kZWwiLCJ1cGRhdGVTaG9wQ2FydE1vZGVsIiwic3RhdGVNZSIsImFjdGlvbnNNZSIsIm1lTW9kZWwiLCJnZXRMb2dpblVzZXIiLCJhY3Rpb25zUE0iLCJkZWFsSW1nVXJsIiwiaW1nIiwidXJsIiwid2VpZ2h0IiwidW5pdCIsIm51bSIsIlJvd0JveCIsInNoYWRvdyIsIkltZyIsIkxlZnRCb3giLCJTdG9jayIsIlByaWNlIiwiQnVuIiwiUHJvZHVjdEl0ZW1PbmVSb3ciLCJzdG9jayIsIkdyb3VwQm94IiwiR3JvdXBJbWciLCJSaWdodEJveCIsIlRpdGxlIiwiTWFya2V0UHJpY2UiLCJPdXRQcmljZSIsIkFjdGlvbiIsIkdyb3VwUHJvZHVjdEl0ZW0iLCJjb25zb2xlIiwibG9nIiwiZ3JvdXBSZW1hcmsiLCJncm91cEFtb3VudCIsImdyb3VwQW1vdW50VW5pdFN0cmluZyIsImdyb3VwUHJlY2lzaW9uU3RyaW5nIiwiZm9ybSIsInNldEZvcm0iLCJGb290ZXIiLCJVcGRhdGVTaG9wQ2FydCIsInN0YXRlVXBkYXRlU2hvcENhcnRNb2RlbCIsImV2ZW50IiwidGFyZ2V0IiwiQ3VzQ2Fyb3VzZWwiLCJkYXRhTGlzdCIsIm9uQ2xpY2tJdGVtIiwiaXRlbSIsImltZ1VybCIsImZyYWdtZW50IiwiQ2F0ZWdvcnlGaWVsZHMiLCJncWwiLCJVc2VyRmllbGRzIiwiVXNlckluZm9GaWVsZHMiLCJPcmRlckluZm9GaWVsZHMiLCJST3JkZXJQcm9kdWN0RmllbGRzIiwiUHJvZHVjdEZpZWxkcyIsIkltZ0ZpZWxkcyIsIlVzZXJBZGRyZXNzRmllbGRzIiwiVXNlclBheUNhcmRGaWVsZHMiLCJTaG9wQ2FydEZpZWxkcyIsIkRhdGFDb25maWdGaWVsZHMiLCJEaWN0RmllbGRzIiwiR3JvdXBRdWV1ZUZpZWxkcyIsIkdyb3VwT3JkZXJGaWVsZHMiLCJnZXRVc2VyTGlzdERvYyIsImdldERhdGFDb25maWciLCJob21lQ2Fyb3VzZWxJbWdzIiwiY2F0ZWdvcnlMaXN0IiwicmVnaXN0ZXJVc2VyIiwibG9naW4iLCJvbmVVc2VyIiwib3JkZXJMaXN0Iiwib3JkZXJEZXRhaWwiLCJEaWN0VHlwZUVudW0iLCJTZWxmQWRkcmVzcyIsInVwZGF0ZVBhc3N3b3JkIiwicGF5Q2FyZExpc3RPbmVVc2VyIiwidXNlclBheUNhcmQiLCJzYXZlVXNlclBheUNhcmQiLCJzZXRVc2VyUGF5Q2FyZERlZmF1bHQiLCJwaWNrdXBBZGRyZXNzIiwidXBkYXRlVXNlckluZm8iLCJ1c2VyQWRkcmVzc0xpc3RPbmVVc2VyIiwidXNlckFkZHJlc3MiLCJzYXZlVXNlckFkZHJlc3MiLCJzZXRVc2VyQWRkcmVzc0RlZmF1bHQiLCJwcm9kdWN0c0luQ2F0ZWdvcnkiLCJjYXRlZ29yeUxldmVsIiwib25lQ2F0ZWdvcnkiLCJwcm9kdWN0TGlzdCIsInVzZXJTaG9wQ2FydExpc3QiLCJvcmRlckNvbmZpcm1JbmZvIiwiRnJlaWdodCIsInNhdmVPcmRlciIsImRpY3RMaXN0IiwibGltaXRUaW1lRGF0YSIsIlByb21vdGlvbkZsYXNoU2FsZSIsInByb2R1Y3RMaXN0QnlJZHMiLCJncm91cFF1ZXVlTGlzdCIsInVwZGF0ZU9yZGVyIiwic2F2ZUdyb3VwT3JkZXIiLCJQcm9tb0NvZGVUeXBlRW51bSIsIkRpc2NvdW50VHlwZUVudW0iLCJTUyIsIkRpc2NvdW50Q29uZGl0aW9uRW51bSIsIlByb2R1Y3RTdXBwbGVtZW50IiwiUHJvZHVjdFN1cHBsZW1lbnRTdHJpbmciLCJPcmRlclN0YXRlIiwiX3MiLCJvcmRlclN0YXRlVG9TdHJpbmciLCJzIiwiUmVsYXRlZE9ialR5cGVFbnVtIiwiQXBwTW9kdWxlVHlwZUVudW0iLCJDYXRlZ29yeVJvb3ROYW1lIiwib3JkZXJTdGF0ZUtleXMiLCJ2YWx1ZXMiLCJQcm92aW5jZURhdGEiLCJnZXRQaWNrVXBUeXBlTmFtZSIsIlNlbGYiLCJEZWxpdmVyeSIsIlBpY2tVcFR5cGVFbnVtIiwiZnBTZXRQcmUiLCJpc0RldiIsImltZ0RvbWFpbiIsInNyYyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJnZXRJdGVtIiwiZ2V0T2JqZWN0VVJMIiwiZmlsZSIsIndpbmRvdyIsImNyZWF0ZU9iamVjdFVSTCIsIlVSTCIsIndlYmtpdFVSTCIsInBhcnNlRmxvYXRGb3JJbnB1dCIsInBhcnNlRmxvYXQiLCJvcmlnaW4iLCJjbG9uZURlZXAiLCJvbGREYXRhIiwiZ2V0Iiwic2V0IiwiZGVsYXkiLCJ0aW1lIiwic2V0VGltZW91dCIsImN1c3RvbWl6ZXIiLCJvYmpWYWx1ZSIsInNyY1ZhbHVlIiwibmV3VmFsdWUiLCJtZXJnZVdpdGgiLCJmcFJlbW92ZSIsImFyciIsImRlYWxOdW1iZXJaZXJvIiwiZmlsbCIsImpvaW4iLCJmb3JtYXREYXRlIiwiZGF0ZSIsImZvcm1hdFN0cmluZyIsImlzU3RyaW5nIiwiZm9ybWF0IiwiRGF0ZSIsInVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnMiLCJ1c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnMiLCJpc05hTiIsImRlYWxOb25Cb29sZWFuUHJvcHMiLCJmb3JtYXRNb25leSIsImFtb3VudCIsImRlY2ltYWxDb3VudCIsImRlY2ltYWwiLCJ0aG91c2FuZHMiLCJNYXRoIiwiYWJzIiwibmVnYXRpdmVTaWduIiwiaSIsInBhcnNlSW50IiwiTnVtYmVyIiwidG9GaXhlZCIsImoiLCJzdWJzdHIiLCJyZXBsYWNlIiwiZGVhbE1heWJlTnVtYmVyIiwiZGVhbFVybFF1ZXJ5IiwicXVlcnlPYmoiLCJTaG9wQ2FydFByb2R1Y3RCb3giLCJDYXJ0UHJvZHVjdCIsImFjdGlvbnNTQ00iLCJyZW1hcmsiLCJpc05leHQiLCJtYXJnaW5SaWdodCIsImlzRGVsZXRlIiwic2VsZWN0QWRkcmVzc01vZGVsIiwiQWRkcmVzc0JveCIsIlNlbGVjdEFkZHJlc3MiLCJzdGF0ZVNBTSIsImFjdGlvbnNTQU0iLCJzdGF0ZVNob3BDYXJ0TW9kZWwiLCJhY3Rpb25zU2hvcENhcnRNb2RlbCIsImFkZHJlc3NMaXN0IiwiZGVhbEFkZHJlc3NMaXN0IiwiY29tYmluZUFkZHJlc3MiLCJjb250YWN0SW5mb3JtYXRpb24iLCJhZGRyZXNzSWQiLCJwaWNrVXBUeXBlIiwic2VsZWN0Q2FyZE1vZGVsIiwiQ2FyZEJveCIsIlNlbGVjdENhcmQiLCJzdGF0ZVNlbGVjdENhcmQiLCJhY3Rpb25zU2VsZWN0Q2FyZCIsInBheUNhcmRMaXN0IiwicGF5bWVudE1ldGhvZENhcmRJZCIsInBhZ2VUeXBlRW51bSIsIm9yZGVyIiwiaW5pdEZvcm0iLCJkZWR1Y3RDb2luIiwic2FsZVRheCIsInRyYW5zcG9ydGF0aW9uQ29zdHMiLCJ1c2VyQWRkcmVzc0xpc3QiLCJzZWxmQWRkcmVzcyIsImZyZWlnaHRDb25maWciLCJ1c2VyTGV2ZWxMaXN0IiwicGFnZVR5cGUiLCJzaG9wQ2FydExpc3QiLCJzaG9wQ2FydExpc3ROZXh0IiwiY3VyIiwicHJvdmluY2UiLCJjaXR5Iiwic3RyZWV0QWRkcmVzcyIsImZ1bGxOYW1lIiwicGhvbmUiLCJkZWFsQWRkcmVzc0RhdGEiLCJmaW5kIiwiaW5pdEFkZHJlc3NJZCIsImlzRGVmYXVsdCIsImRlYWxQcm9kdWN0VG90YWwiLCJjbGVhckRhdGEiLCJjbGVhckZvcm0iLCJ1cGRhdGVQYWdlVHlwZSIsInVwZGF0ZVBheUNhcmRMaXN0IiwiZ2V0T3JkZXJJbmZvIiwibGlzdCIsImZyZWlnaHRMaXN0Iiwic3VibWl0Iiwib3JkZXJJbmZvSXRlbUlucHV0IiwiQ2FydFBhZ2UiLCJzdGF0ZVNDTSIsIlNob3BUaXRsZSIsIlNob3BUb3RhbCIsIkZvb3RlckZpdCIsIk9yZGVyUGFnZSIsImFkZHJlc3NEYXRhIiwiY2FyZERhdGEiLCJwcm9kdWN0VG90YWwiLCJmcmVpZ2h0UGF5Iiwib3JkZXJNYXgiLCJhY3R1YWxseVBhaWQiLCJnZW5lcmF0ZUNvaW4iLCJvcmRlckNvaW5DdXJyZW50TW9udGgiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJ1c2VySW5mbyIsInVzZXJMZXZlbCIsInN1Ym1pdERhdGEiLCJzdWJ0b3RhbCIsImN1cnJlbnRVc2VyTGV2ZWwiLCJyT3JkZXJQcm9kdWN0IiwiY291bnQiLCJwcm9kdWN0SWQiLCJfcXVlcnkiLCJvcmRlcklkIiwiQm94Q29udGFpbiIsInNlY3Rpb24iLCJNb25leSIsIkZpeEZvb3RlciIsIlNob3BDYXJ0UGFnZSIsInByb2R1Y3ROdW1iZXIiLCJwcm9kdWN0U3VidG90YWwiLCJhbGxUb3RhbCIsInBhZGRpbmdUb3AiLCJ0ZXh0QWxpZ24iLCJob21lQ2Fyb3VzZWxNb2RlbCIsImdldEhvbWVDYXJvdXNlbCIsInJlczIiLCJIb21lQ2Fyb3VzZWwiLCJfX3R5cGVuYW1lIiwicmVzdCIsImhvbWVDYXJvdXNlbERhdGFDb21maWciLCJob21lQ2F0ZWdvcnlTZWxlY3Rpb25fbGlzdERhdGEiLCJhcHBNb2R1bGVDb25maWciLCJsaW1pdFRpbWUiLCJtYXlMaWtlIiwic2FsZXNSYW5rIiwidGhlbWVTZWxlY3Rpb24iLCJjYXRlZ29yeVNlbGVjdGlvbiIsImxpbmVSYW5raW5nIiwidG9wUmFua2luZyIsImFwcE1vZHVsZSIsImFjdGlvbnNIb21lQ2Fyb3VzZWxNb2RlbCIsInN0YXRlSG9tZUNhcm91c2VsTW9kZWwiLCJhY3Rpb25zSG9tZVRhYnMiLCJob21lVGFic01vZGVsIiwiZ2V0RGF0YSIsInNldEhvbWVUeXBlIiwiaG9tZUNhdGVnb3J5U2VsZWN0aW9uTW9kZWwiLCJsaXN0RGF0YSIsInRvdGFsIiwiY2F0ZWdvcnkiLCJwYXJlbnRDYXRlZ29yeSIsIkNhdGVnb3J5U2VsZWN0aW9uIiwiaG9tZUNhdGVnb3J5U2VsZWN0aW9uU3RhdGUiLCJob21lQ2F0ZWdvcnlTZWxlY3Rpb25BY3Rpb25zIiwiaHNHZXRMb2FkIiwiaG9tZVRhYnNTdGF0ZSIsImhvbWVUeXBlIiwicHJvbW90aW9uRmxhc2hTYWxlTW9kZWwiLCJwcm9kdWN0UmVzIiwiaWRzIiwic2VsZWN0UHJvZHVjdExpc3QiLCJUaXAiLCJzdGF0ZVByb21vdGlvbkZsYXNoU2FsZSIsImFjdGlvbnNQcm9tb3Rpb25GbGFzaFNhbGUiLCJvbkNoYW5nZSIsInNoYWxsb3ciLCJBcHBNb2R1bGUiLCJIb21lVGFicyIsImhvbWVUYWJzQWN0aW9ucyIsInRoZW1lU2VsZWN0aW9uTW9kZWwiLCJ0aGVtZVNlbGVjdGlvbkRhdGEiLCJwcm9kdWN0TGlzdEZvclRoZW1lIiwiUHJvbW90aW9uVGhlbWVTZWxlY3QiLCJ0aGVtZUxpc3QiLCJ2MSIsIlRoZW1lIiwiUHJvZHVjdExpc3QiLCJUaGVtZVNlbGVjdGlvbiIsInRvTG9naW4iLCJsb2dvdXQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN2RkE7QUFBQTtBQUFBO0FBRWVBLCtJQUFhLENBQUNDLG1FQUFRLENBQUNDLElBQVYsQ0FBNUIsRSxDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFZREEsU0FBTyxFQUFFemtCLEtBQUssSUFBSTtBQUNoQnlrQixXQUFPO0FBQ1I7QUFkQSxDQUZnQyxDQUE1QixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZQLDhDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLDZDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxob21lXFxbYXBwTW9kdWxlXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA1KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtIb21lQXBwTW9kdWxlLCBIb21lVHlwZX0gZnJvbSAnLi4vLi4vdXRpbHMvdmlldy9ob21lL2FwcE1vZHVsZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVBcHBNb2R1bGUoSG9tZVR5cGUuaG9tZSlcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBpbml0ID0gYXN5bmMgKHtwYXJhbXN9OiB7cGFyYW1zOiBhbnl9KSA9PiB7XHJcbi8vICAgY29uc3QgYXBwTW9kdWxlQ29uZmlnID0gYXdhaXQgc2VydmVyUXVlcnkoZ2V0RGF0YUNvbmZpZywge1xyXG4vLyAgICAgZGF0YToge1xyXG4vLyAgICAgICB0eXBlOiBEaWN0VHlwZUVudW0uQXBwTW9kdWxlLFxyXG4vLyAgICAgfSBhcyBEYXRhQ29uZmlnSXRlbUlucHV0XHJcbi8vICAgfSwge30pXHJcbi8vXHJcbi8vICAgY29uc3QgcmVzMiA9IGF3YWl0IHNlcnZlclF1ZXJ5KGdldERhdGFDb25maWcsIHtcclxuLy8gICAgIGRhdGE6IHtcclxuLy8gICAgICAgdHlwZTogRGljdFR5cGVFbnVtLkhvbWVDYXJvdXNlbCxcclxuLy8gICAgIH0gYXMgRGF0YUNvbmZpZ0l0ZW1JbnB1dFxyXG4vLyAgIH0sIHt9KVxyXG4vLyAgIGNvbnN0IHtfX3R5cGVuYW1lLCAuLi5yZXN0fSA9IHJlczI/LmdldERhdGFDb25maWdcclxuLy8gICBjb25zdCBob21lQ2Fyb3VzZWxEYXRhQ29tZmlnID0gYXdhaXQgc2VydmVyUXVlcnkoaG9tZUNhcm91c2VsSW1ncywge1xyXG4vLyAgICAgZGF0YToge1xyXG4vLyAgICAgICAuLi5yZXN0LFxyXG4vLyAgICAgfSBhcyBEYXRhQ29uZmlnSXRlbUlucHV0XHJcbi8vICAgfSwge30pXHJcbi8vXHJcbi8vICAgY29uc3QgY2F0ZWdvcnlSZXMgPSAocGFyYW1zLmFwcE1vZHVsZSA9PT0gQXBwTW9kdWxlVHlwZUVudW0uY2F0ZWdvcnlTZWxlY3Rpb24gJiYgYXdhaXQgc2VydmVyUXVlcnkoY2F0ZWdvcnlMaXN0LCB7XHJcbi8vICAgICBkYXRhOiB7XHJcbi8vICAgICAgIGNhdGVnb3J5OiB7XHJcbi8vICAgICAgICAgcGFyZW50Q2F0ZWdvcnk6IHtcclxuLy8gICAgICAgICAgIGlkOiBDYXRlZ29yeVJvb3ROYW1lLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICB9IGFzIENhdGVnb3J5TGlzdElucHV0XHJcbi8vICAgfSkpIHx8IHt9XHJcbi8vXHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIHByb3BzOiB7XHJcbi8vICAgICAgIGhvbWVDYXRlZ29yeVNlbGVjdGlvbl9saXN0RGF0YTogY2F0ZWdvcnlSZXM/LmNhdGVnb3J5TGlzdD8ubGlzdCA/PyBbXSxcclxuLy8gICAgICAgLi4uaG9tZUNhcm91c2VsRGF0YUNvbWZpZyxcclxuLy8gICAgICAgYXBwTW9kdWxlQ29uZmlnOiBhcHBNb2R1bGVDb25maWc/LmdldERhdGFDb25maWcsXHJcbi8vICAgICB9LFxyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gKCkgPT4ge1xyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICBwYXRoczogW3tcclxuLy8gICAgICAgcGFyYW1zOiB7XHJcbi8vICAgICAgICAgYXBwTW9kdWxlOiBBcHBNb2R1bGVUeXBlRW51bS5jYXRlZ29yeVNlbGVjdGlvbixcclxuLy8gICAgICAgfSxcclxuLy8gICAgIH0sIHtcclxuLy8gICAgICAgcGFyYW1zOiB7XHJcbi8vICAgICAgICAgYXBwTW9kdWxlOiBBcHBNb2R1bGVUeXBlRW51bS5saW1pdFRpbWUsXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICB9LCB7XHJcbi8vICAgICAgIHBhcmFtczoge1xyXG4vLyAgICAgICAgIGFwcE1vZHVsZTogQXBwTW9kdWxlVHlwZUVudW0ubWF5TGlrZSxcclxuLy8gICAgICAgfSxcclxuLy8gICAgIH0sIHtcclxuLy8gICAgICAgcGFyYW1zOiB7XHJcbi8vICAgICAgICAgYXBwTW9kdWxlOiBBcHBNb2R1bGVUeXBlRW51bS5zYWxlc1JhbmssXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICB9LCB7XHJcbi8vICAgICAgIHBhcmFtczoge1xyXG4vLyAgICAgICAgIGFwcE1vZHVsZTogQXBwTW9kdWxlVHlwZUVudW0udGhlbWVTZWxlY3Rpb24sXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICB9XSxcclxuLy8gICAgIGZhbGxiYWNrOiB0cnVlLFxyXG4vLyAgIH1cclxuLy8gfVxyXG4vLyBleHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBpbml0XHJcbiIsIlxyXG50eXBlIE1vZGVsRmFjdG9yeTxOID0gJyc+ID0gPFQsIEUgZXh0ZW5kcyBNb2RlbEFjdGlvbk9iakhlbHA8YW55LCBUICYgRmV0Y2hPYmo+PihuYW1lOiBzdHJpbmcsIHN0YXRlOiBULCBhY3Rpb25zOiBFKSA9PiBNb2RlbERhdGE8VCAmIEZldGNoT2JqLCBFPlxyXG5cclxuZXhwb3J0IGNvbnN0IGJhc2VBY3Rpb25PcHRpb246IEJhc2VNb2RlbEFjdGlvbk9wdGlvbiA9IHtcclxuICBkYXRhOiBudWxsLFxyXG4gIG11dGF0ZTogKCkgPT4ge30sXHJcbiAgbm90aWNlOiAoKSA9PiB7fSxcclxuICBxdWVyeTogKCkgPT4ge30sXHJcbiAgc2V0RGF0YTogKCkgPT4ge30sXHJcbiAgc3RvcmU6IHt9XHJcbn1cclxuXHJcbmNvbnN0IG1vZGVsTmFtZUxpc3Q6c3RyaW5nW10gPSBbXVxyXG5leHBvcnQgY29uc3QgbW9kZWxGYWN0b3J5OiBNb2RlbEZhY3RvcnkgPSAobmFtZSwgc3RhdGUsIGFjdGlvbnMpID0+IHtcclxuICBpZiAobW9kZWxOYW1lTGlzdC5pbmNsdWRlcyhuYW1lKSkge1xyXG4gICAgdGhyb3cgRXJyb3IoYG1vZGVsIE5hbWUgZHVwbGljYXRlOiAke25hbWV9YClcclxuICB9XHJcbiAgbW9kZWxOYW1lTGlzdC5wdXNoKG5hbWUpXHJcbiAgcmV0dXJuIHtcclxuICAgIG5hbWUsXHJcbiAgICBzdGF0ZToge1xyXG4gICAgICAuLi5zdGF0ZSxcclxuICAgICAgZmV0Y2hMb2FkOiB7fSxcclxuICAgICAgZmV0Y2hFcnJvcjoge30sXHJcbiAgICB9LFxyXG4gICAgYWN0aW9ucyxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZU1vZGVsPEEgZXh0ZW5kcyBGZXRjaE9iaiwgQiBleHRlbmRzIE1vZGVsQWN0aW9uT2JqSGVscDxhbnksIEE+LCBDLCBEIGV4dGVuZHMgTW9kZWxBY3Rpb25PYmpIZWxwPGFueSwgQSAmIEM+Pihtb2RlbDoge1xyXG4gIHN0YXRlOiBBXHJcbiAgYWN0aW9uczogQlxyXG4gIG5hbWU6IHN0cmluZ1xyXG59LCBuYW1lOiBzdHJpbmcsIHN0YXRlOiBDLCBhY3Rpb25zOiBEKToge1xyXG4gIHN0YXRlOiBBICYgQ1xyXG4gIGFjdGlvbnM6IEIgJiBEICYge1xyXG4gICAgW2tleSBpbiBrZXlvZiBCXTogTW9kZWxBY3Rpb248YW55LCBBPlxyXG4gIH0gJiB7XHJcbiAgICBba2V5IGluIGtleW9mIERdOiBNb2RlbEFjdGlvbjxhbnksIEEgJiBDPlxyXG4gIH1cclxuICBuYW1lOiBzdHJpbmdcclxufSB7XHJcbiAgT2JqZWN0LmtleXMobW9kZWwuc3RhdGUpLmZvckVhY2godmFsdWUgPT4ge1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgaWYgKHN0YXRlPy5bdmFsdWVdICYmICFbJ2ZldGNoRXJyb3InLCAnZmV0Y2hMb2FkJ10uaW5jbHVkZXModmFsdWUpKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgbWVyZ2VNb2RlbDogc3RhdGUgZHVwbGljYXRlOjoga2V5ICR7dmFsdWV9YClcclxuICAgIH1cclxuICB9KVxyXG4gIE9iamVjdC5rZXlzKG1vZGVsLmFjdGlvbnMpLmZvckVhY2godmFsdWUgPT4ge1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgaWYgKGFjdGlvbnM/Llt2YWx1ZV0pIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBtZXJnZU1vZGVsOiBhY3Rpb24gZHVwbGljYXRlOjoga2V5ICR7dmFsdWV9YClcclxuICAgIH1cclxuICB9KVxyXG4gIGNvbnN0IG1lcmdlTmFtZSA9IGAke25hbWV9X3dpdGhfJHttb2RlbC5uYW1lfWBcclxuICBpZiAobW9kZWxOYW1lTGlzdC5pbmNsdWRlcyhtZXJnZU5hbWUpKSB7XHJcbiAgICB0aHJvdyBFcnJvcihgbW9kZWwgTmFtZSBkdXBsaWNhdGU6ICR7bWVyZ2VOYW1lfWApXHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgbmFtZTogbWVyZ2VOYW1lLFxyXG4gICAgc3RhdGU6IHtcclxuICAgICAgLi4ubW9kZWwuc3RhdGUsXHJcbiAgICAgIC4uLnN0YXRlLFxyXG4gICAgfSxcclxuICAgIGFjdGlvbnM6IHtcclxuICAgICAgLi4ubW9kZWwuYWN0aW9ucyxcclxuICAgICAgLi4uYWN0aW9ucyxcclxuICAgIH0sXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VUd29Nb2RlbDxBLCBCIGV4dGVuZHMgTW9kZWxBY3Rpb25PYmpIZWxwPGFueSwgQT4sIEMsIEQgZXh0ZW5kcyBNb2RlbEFjdGlvbk9iakhlbHA8YW55LCBDPj4obW9kZWw6IHtcclxuICBzdGF0ZTogQVxyXG4gIGFjdGlvbnM6IEJcclxuICBuYW1lOiBzdHJpbmdcclxufSwgbW9kZWxUOiB7XHJcbiAgc3RhdGU6IENcclxuICBhY3Rpb25zOiBEXHJcbiAgbmFtZTogc3RyaW5nXHJcbn0pOiB7XHJcbiAgbmFtZTogc3RyaW5nXHJcbiAgc3RhdGU6IEEgJiBDXHJcbiAgYWN0aW9uczogQiAmIEQgJiB7XHJcbiAgICBba2V5IGluIGtleW9mIEJdOiBNb2RlbEFjdGlvblxyXG4gIH0gJiB7XHJcbiAgICBba2V5IGluIGtleW9mIERdOiBNb2RlbEFjdGlvblxyXG4gIH1cclxufSB7XHJcbiAgT2JqZWN0LmtleXMobW9kZWwuc3RhdGUpLmZvckVhY2godmFsdWUgPT4ge1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgaWYgKG1vZGVsVC5zdGF0ZT8uW3ZhbHVlXSAmJiAhWydmZXRjaEVycm9yJywgJ2ZldGNoTG9hZCddLmluY2x1ZGVzKHZhbHVlKSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYG1lcmdlVHdvTW9kZWw6IHN0YXRlIGR1cGxpY2F0ZTo6IGtleSAke3ZhbHVlfWApXHJcbiAgICB9XHJcbiAgfSlcclxuICBPYmplY3Qua2V5cyhtb2RlbC5hY3Rpb25zKS5mb3JFYWNoKHZhbHVlID0+IHtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIGlmIChtb2RlbFQ/LmFjdGlvbnM/Llt2YWx1ZV0pIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBtZXJnZVR3b01vZGVsOiBhY3Rpb24gZHVwbGljYXRlOjoga2V5ICR7dmFsdWV9YClcclxuICAgIH1cclxuICB9KVxyXG4gIGNvbnN0IG1lcmdlTmFtZSA9IGAke21vZGVsLm5hbWV9X2FuZF8ke21vZGVsVC5uYW1lfWBcclxuICBpZiAobW9kZWxOYW1lTGlzdC5pbmNsdWRlcyhtZXJnZU5hbWUpKSB7XHJcbiAgICB0aHJvdyBFcnJvcihgbW9kZWwgTmFtZSBkdXBsaWNhdGU6ICR7bWVyZ2VOYW1lfWApXHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgbmFtZTogbWVyZ2VOYW1lLFxyXG4gICAgc3RhdGU6IHtcclxuICAgICAgLi4ubW9kZWwuc3RhdGUsXHJcbiAgICAgIC4uLm1vZGVsVC5zdGF0ZSxcclxuICAgIH0sXHJcbiAgICBhY3Rpb25zOiB7XHJcbiAgICAgIC4uLm1vZGVsLmFjdGlvbnMsXHJcbiAgICAgIC4uLm1vZGVsVC5hY3Rpb25zLFxyXG4gICAgfSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBtZXJnZVRocmVlTW9kZWwgPSA8QSBleHRlbmRzIEZldGNoT2JqLCBUIGV4dGVuZHMgTW9kZWxBY3Rpb25PYmpIZWxwPGFueSwgQT4sIEIgZXh0ZW5kcyBGZXRjaE9iaiwgTyBleHRlbmRzIE1vZGVsQWN0aW9uT2JqSGVscDxhbnksIEI+LCBDIGV4dGVuZHMgRmV0Y2hPYmosIFAgZXh0ZW5kcyBNb2RlbEFjdGlvbk9iakhlbHA8YW55LCBDPj4obW9kZWxBOiBNb2RlbERhdGE8QSwgVD4sIG1vZGVsQjogTW9kZWxEYXRhPEIsIE8+LCBtb2RlbEM6IE1vZGVsRGF0YTxDLCBQPik6IHtcclxuICBuYW1lOiBzdHJpbmdcclxuICBzdGF0ZTogQSAmIEIgJiBDXHJcbiAgYWN0aW9uczogVCAmIE8gJiBQICYge1xyXG4gICAgW2tleSBpbiBrZXlvZiBUXTogTW9kZWxBY3Rpb25cclxuICB9ICYge1xyXG4gICAgW2tleSBpbiBrZXlvZiBPXTogTW9kZWxBY3Rpb25cclxuICB9ICYge1xyXG4gICAgW2tleSBpbiBrZXlvZiBQXTogTW9kZWxBY3Rpb25cclxuICB9XHJcbn0gPT4ge1xyXG4gIHJldHVybiBtZXJnZVR3b01vZGVsKG1lcmdlVHdvTW9kZWwobW9kZWxBLCBtb2RlbEIpLCBtb2RlbEMpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBtZXJnZUxpc3RNb2RlbCA9IChtb2RlbExpc3Q6IE1vZGVsRGF0YTxhbnksIGFueT5bXSkgPT4ge1xyXG4gIHJldHVybiBtb2RlbExpc3Quc2xpY2UoMSkucmVkdWNlKChhY2MsIG1vZGVsKSA9PiBtZXJnZVR3b01vZGVsKGFjYywgbW9kZWwpLCBtb2RlbExpc3RbMF0pXHJcbn1cclxuXHJcbmNvbnN0IGluaXRMaXN0OiBzdHJpbmdbXSA9IFtdXHJcbmV4cG9ydCBjb25zdCBpbml0TW9kZWwgPSA8VCBleHRlbmRzIEZldGNoT2JqLCBFIGV4dGVuZHMgTW9kZWxBY3Rpb25PYmpIZWxwPGFueSwgVD4+KG1vZGVsOiBNb2RlbERhdGE8VCwgRT4sIGluaXRTdGF0ZTogUGFydGlhbDxUPikgPT4ge1xyXG4gIGlmIChpbml0TGlzdC5pbmNsdWRlcyhtb2RlbC5uYW1lKSkgcmV0dXJuXHJcbiAgaW5pdExpc3QucHVzaChtb2RlbC5uYW1lKVxyXG4gIG1vZGVsLnN0YXRlID0ge1xyXG4gICAgLi4ubW9kZWwuc3RhdGUsXHJcbiAgICAuLi5pbml0U3RhdGUsXHJcbiAgfVxyXG59XHJcblxyXG4vLyBjb25zdCBtb2RlbCA9IG1vZGVsRmFjdG9yeSh7fSwge1xyXG4vLyAgIHNzOiB7XHJcbi8vICAgICBlZWU6ICh2YWx1ZTogc3RyaW5nLCBvcHRpb24pID0+IHtcclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi8vIH0pXHJcbi8vXHJcbi8vIHVzZVN0b3JlTW9kZWwoTW9kdWxlRW51bS5UZXN0LCBtb2RlbCkuYWN0aW9ucy5zcy5lZWUoJycpXHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gbWVyZ2VJbnRvTW9kZWwob3JpZ2luTW9kZWwsIG5hbWUsIGlubmVyTW9kZWwpIHtcclxuLy9cclxuLy8gfVxyXG5cclxuLy8gY29uc3QgX21vZGVsID0gbWVyZ2VUd29Nb2RlbChtb2RlbEZhY3Rvcnkoe1xyXG4vLyAgIHQxOiAnJ1xyXG4vLyB9LCB7XHJcbi8vIH0pLCBtb2RlbEZhY3Rvcnkoe1xyXG4vLyAgIHQzOiAnJ1xyXG4vLyB9LCB7XHJcbi8vIH0pKVxyXG4vL1xyXG4vLyBtZXJnZU1vZGVsKF9tb2RlbCwge1xyXG4vLyAgIHQyOiAnJ1xyXG4vLyB9LCB7XHJcbi8vIH0pXHJcbiIsImltcG9ydCB7dXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7Z3JhcGhRTE11dGF0ZSwgZ3JhcGhRTFF1ZXJ5fSBmcm9tICcuLi9jbGllbnQnXHJcbmltcG9ydCB7YmFzZUFjdGlvbk9wdGlvbn0gZnJvbSAnLi9tb2RlbFV0aWwnXHJcblxyXG5leHBvcnQgY29uc3Qgb3JpZ2luU3RvcmU6IE9yaWdpblN0b3JlID0ge31cclxuXHJcbmNvbnN0IGlzRnVuY3Rpb24gPSAoZnVuY3Rpb25Ub0NoZWNrOiBhbnkpID0+IHtcclxuICByZXR1cm4gZnVuY3Rpb25Ub0NoZWNrICYmIHt9LnRvU3RyaW5nLmNhbGwoZnVuY3Rpb25Ub0NoZWNrKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJ1xyXG59XHJcblxyXG50eXBlIFN0b3JlU3RhdGVSZXN1bHQ8VCwgRSBleHRlbmRzIE1vZGVsQWN0aW9uT2JqSGVscDxhbnksIFQ+PiA9IE1vZGVsUmVzdWx0PFQsIEU+ICYge1xyXG4gIHN0b3JlOiBPcmlnaW5TdG9yZVxyXG4gIGdldExvYWQ6IChxdWVyeTogYW55KSA9PiBudW1iZXJcclxufVxyXG5cclxudHlwZSBVc2VNb2RlbFN0YXRlID0gPFQgZXh0ZW5kcyBGZXRjaE9iaiwgRSBleHRlbmRzIE1vZGVsQWN0aW9uT2JqSGVscDxhbnksIFQ+Pihtb2RlbDogTW9kZWxEYXRhPFQsIEU+LCBrZXk/OiBzdHJpbmcgfCBbc3RyaW5nLCBzdHJpbmddKSA9PiBTdG9yZVN0YXRlUmVzdWx0PFQsIEU+XHJcblxyXG5leHBvcnQgY29uc3QgZGVhbE5hbWVTcGFjZSA9IChrZXk6IHN0cmluZywgbmFtZVNwYWNlOiBzdHJpbmcpID0+IHtcclxuICBpZiAobmFtZVNwYWNlKSB7XHJcbiAgICByZXR1cm4gYCR7a2V5fV8ke25hbWVTcGFjZX1gXHJcbiAgfVxyXG4gIHJldHVybiBgJHtrZXl9YFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlU3RvcmVNb2RlbDogVXNlTW9kZWxTdGF0ZSA9IChtb2RlbCwga2V5Pzogc3RyaW5nIHwgW3N0cmluZywgc3RyaW5nXSkgPT4ge1xyXG4gIGNvbnN0IF9rZXkgPSBtb2RlbC5uYW1lID8/ICgha2V5ID8gJycgOiBBcnJheS5pc0FycmF5KGtleSkgPyBkZWFsTmFtZVNwYWNlKGtleVswXSwga2V5WzFdKSA6IGtleSlcclxuICBjb25zdCB7YWN0aW9ucywgc3RhdGV9ID0gbW9kZWxcclxuICBjb25zdCBbLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShPYmplY3QuY3JlYXRlKG51bGwpKVxyXG4gIGlmICghX2tleSkge1xyXG4gICAgdGhyb3cgRXJyb3IoJ25vIGtleScpXHJcbiAgfVxyXG4gIGlmICghb3JpZ2luU3RvcmVbX2tleV0pIHtcclxuICAgIG9yaWdpblN0b3JlW19rZXldID0ge1xyXG4gICAgICBrZXlzOiBfa2V5LFxyXG4gICAgICBzdGF0ZSxcclxuICAgICAgYWN0aW9uczoge30sXHJcbiAgICAgIHNldERhdGE6IFtdXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IG5vdGljZSA9IHVzZUNhbGxiYWNrKChkYXRhOiBhbnkpID0+IHtcclxuICAgIG9yaWdpblN0b3JlW19rZXldLnNldERhdGEuZm9yRWFjaCh2YWx1ZSA9PiB7XHJcbiAgICAgIHZhbHVlPy4oZGF0YSlcclxuICAgIH0pXHJcbiAgfSwgW19rZXldKVxyXG4gIGNvbnN0IHNldERhdGE6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPHR5cGVvZiBzdGF0ZT4+ID0gdXNlQ2FsbGJhY2soKGRhdGEpID0+IHtcclxuICAgIGNvbnN0IG9sZFN0YXRlID0gb3JpZ2luU3RvcmVbX2tleV0uc3RhdGVcclxuICAgIGNvbnN0IG5ld0RhdGEgPSBpc0Z1bmN0aW9uKGRhdGEpID8gKGRhdGEgYXMgKHY6IHR5cGVvZiBvbGRTdGF0ZSkgPT4gdm9pZCkob2xkU3RhdGUpIDogZGF0YVxyXG4gICAgb3JpZ2luU3RvcmVbX2tleV0uc3RhdGUgPSBuZXdEYXRhXHJcbiAgICBub3RpY2UobmV3RGF0YSlcclxuICB9LCBbX2tleSwgbm90aWNlXSlcclxuXHJcbiAgY29uc3Qgc2V0TG9hZCA9IHVzZUNhbGxiYWNrKChxdWVyeTogYW55LCBmbGFnOiBib29sZWFuKSA9PiB7XHJcbiAgICBzZXREYXRhKHByZXZTdGF0ZSA9PiAoe1xyXG4gICAgICAuLi5wcmV2U3RhdGUsXHJcbiAgICAgIGZldGNoTG9hZDoge1xyXG4gICAgICAgIC4uLnByZXZTdGF0ZS5mZXRjaExvYWQgPz8ge30sXHJcbiAgICAgICAgW3F1ZXJ5Py5sb2M/LnNvdXJjZT8uYm9keV06IGZsYWcsXHJcbiAgICAgIH1cclxuICAgIH0pKVxyXG4gIH0sIFtzZXREYXRhXSlcclxuICBjb25zdCBzZXRFcnJvciA9IHVzZUNhbGxiYWNrKChxdWVyeTogYW55LCBlcnI6IGFueSkgPT4ge1xyXG4gICAgc2V0RGF0YShwcmV2U3RhdGUgPT4gKHtcclxuICAgICAgLi4ucHJldlN0YXRlLFxyXG4gICAgICBmZXRjaEVycm9yOiB7XHJcbiAgICAgICAgLi4ucHJldlN0YXRlLmZldGNoRXJyb3IgPz8ge30sXHJcbiAgICAgICAgW3F1ZXJ5Py5sb2M/LnNvdXJjZT8uYm9keV06IGVycixcclxuICAgICAgfVxyXG4gICAgfSkpXHJcbiAgfSwgW3NldERhdGFdKVxyXG5cclxuICBjb25zdCBxdWVyeTogR3JhcGhxbFF1ZXJ5ID0gdXNlQ2FsbGJhY2soYXN5bmMgKHF1ZXJ5LCBwYXJhbXMsIG9wdGlvbikgPT4ge1xyXG4gICAgc2V0TG9hZChxdWVyeSwgdHJ1ZSlcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGdyYXBoUUxRdWVyeSgpKHF1ZXJ5LCBwYXJhbXMsIG9wdGlvbikuY2F0Y2goZSA9PiB7XHJcbiAgICAgIHNldEVycm9yKHF1ZXJ5LCBlKVxyXG4gICAgfSkuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgIHNldExvYWQocXVlcnksIGZhbHNlKVxyXG4gICAgfSkgYXMgYW55XHJcbiAgICByZXR1cm4gcmVzPy5kYXRhXHJcbiAgfSwgW3NldEVycm9yLCBzZXRMb2FkXSlcclxuICBjb25zdCBtdXRhdGU6IEdyYXBocWxNdXRhdGUgPSB1c2VDYWxsYmFjayhhc3luYyAobXV0YXRpb24sIHBhcmFtcywgb3B0aW9uKSA9PiB7XHJcbiAgICBzZXRMb2FkKG11dGF0aW9uLCB0cnVlKVxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZ3JhcGhRTE11dGF0ZSgpKG11dGF0aW9uLCBwYXJhbXMsIG9wdGlvbikuY2F0Y2goZSA9PiB7XHJcbiAgICAgIHNldEVycm9yKG11dGF0aW9uLCBlKVxyXG4gICAgfSkuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgIHNldExvYWQobXV0YXRpb24sIGZhbHNlKVxyXG4gICAgfSkgYXMgYW55XHJcbiAgICByZXR1cm4gcmVzPy5kYXRhXHJcbiAgfSwgW3NldEVycm9yLCBzZXRMb2FkXSlcclxuXHJcbiAgaWYgKE9iamVjdC5rZXlzKG9yaWdpblN0b3JlW19rZXldLmFjdGlvbnMpLmxlbmd0aCA9PT0gMCAmJiBvcmlnaW5TdG9yZVtfa2V5XS5hY3Rpb25zLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcclxuICAgIE9iamVjdC5rZXlzKGFjdGlvbnMpLmZvckVhY2godmFsdWUgPT4ge1xyXG4gICAgICBvcmlnaW5TdG9yZVtfa2V5XS5hY3Rpb25zW3ZhbHVlXSA9ICh2OiBhbnkpID0+IGFjdGlvbnNbdmFsdWVdKHYsIHtcclxuICAgICAgICAuLi5iYXNlQWN0aW9uT3B0aW9uLFxyXG4gICAgICAgIGRhdGE6IG9yaWdpblN0b3JlW19rZXldLnN0YXRlLFxyXG4gICAgICAgIG5vdGljZSxcclxuICAgICAgICBzZXREYXRhLFxyXG4gICAgICAgIHF1ZXJ5LFxyXG4gICAgICAgIG11dGF0ZSxcclxuICAgICAgICBzdG9yZTogb3JpZ2luU3RvcmUsXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgT2JqZWN0LmtleXMoYWN0aW9ucykuZm9yRWFjaCh2YWx1ZSA9PiB7XHJcbiAgICAgIG9yaWdpblN0b3JlW19rZXldLmFjdGlvbnNbdmFsdWVdID0gKHY6IGFueSkgPT4gYWN0aW9uc1t2YWx1ZV0odiwge1xyXG4gICAgICAgIC4uLmJhc2VBY3Rpb25PcHRpb24sXHJcbiAgICAgICAgZGF0YTogb3JpZ2luU3RvcmVbX2tleV0uc3RhdGUsXHJcbiAgICAgICAgbm90aWNlLFxyXG4gICAgICAgIHNldERhdGEsXHJcbiAgICAgICAgcXVlcnksXHJcbiAgICAgICAgbXV0YXRlLFxyXG4gICAgICAgIHN0b3JlOiBvcmlnaW5TdG9yZSxcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSwgW19rZXksIGFjdGlvbnMsIG11dGF0ZSwgbm90aWNlLCBxdWVyeSwgc2V0RGF0YV0pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIG9yaWdpblN0b3JlW19rZXldLnNldERhdGEgPSBbXHJcbiAgICAgIC4uLm9yaWdpblN0b3JlW19rZXldLnNldERhdGEgPz8gW10sXHJcbiAgICAgIHNldFN0YXRlLFxyXG4gICAgXVxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgb3JpZ2luU3RvcmVbX2tleV0uc2V0RGF0YSA9IG9yaWdpblN0b3JlW19rZXldLnNldERhdGEuZmlsdGVyKHZhbHVlID0+IHZhbHVlICE9PSBzZXRTdGF0ZSlcclxuICAgIH1cclxuICB9LCBbX2tleV0pXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBzdGF0ZTogb3JpZ2luU3RvcmVbX2tleV0uc3RhdGUsXHJcbiAgICBhY3Rpb25zOiAob3JpZ2luU3RvcmVbX2tleV0uYWN0aW9ucykgYXMgRGVhbEZ1bk9iajx0eXBlb2YgYWN0aW9ucz4sXHJcbiAgICBzdG9yZTogb3JpZ2luU3RvcmUsXHJcbiAgICBnZXRMb2FkOiBxdWVyeSA9PiBvcmlnaW5TdG9yZVtfa2V5XS5zdGF0ZS5mZXRjaExvYWRbcXVlcnk/LmxvYz8uc291cmNlPy5ib2R5XSA/IDEgOiAwXHJcbiAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgJ2Nyb3NzLWZldGNoL3BvbHlmaWxsJ1xyXG5pbXBvcnQge2dldFRva2VuLCBzZXRUb2tlbn0gZnJvbSAnLi4vdG9vbHMvdG9rZW4nXHJcbmltcG9ydCB7T3BlcmF0aW9ufSBmcm9tICdhcG9sbG8tbGluaydcclxuaW1wb3J0IHtFcnJvckxpbmt9IGZyb20gJ2Fwb2xsby1saW5rLWVycm9yJ1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgQXBvbGxvQ2xpZW50IGZyb20gJ2Fwb2xsby1ib29zdCdcclxuaW1wb3J0IHtzc0xvZ30gZnJvbSAnLi4vdG9vbHMvZ2xvYmFsJ1xyXG5pbXBvcnQge0RvY3VtZW50Tm9kZX0gZnJvbSAnZ3JhcGhxbCdcclxuaW1wb3J0IHtkb2N9IGZyb20gJy4uL2dyYXBocWxUeXBlcy9kb2MnXHJcbmltcG9ydCB7c2hvd01lc3NhZ2V9IGZyb20gJy4uL2NvbXBvbmVudHMvTWVzc2FnZS9NZXNzYWdlJ1xyXG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gJ25leHQvY29uZmlnJ1xyXG5cclxuY29uc3QgY29uZmlnID0gZ2V0Q29uZmlnKClcclxuY29uc3QgY2xpZW50X2FwaV91cmkgPSBjb25maWc/LnB1YmxpY1J1bnRpbWVDb25maWc/LmNsaWVudF9hcGlfdXJpID8/ICdodHRwOi8vbG9jYWxob3N0OjQ0NjQvdHlwZV9fZ3JhcGhxbC9hcGknXHJcblxyXG5jb25zdCBvbWl0VHlwZW5hbWUgPSAoa2V5OiBhbnksIHZhbHVlOiBhbnkpID0+IHtcclxuICByZXR1cm4ga2V5ID09PSAnX190eXBlbmFtZScgPyB1bmRlZmluZWQgOiB2YWx1ZVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q2xpZW50ID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCByZXF1ZXN0OiAob3BlcmF0aW9uOiBPcGVyYXRpb24pID0+IFByb21pc2U8dm9pZD4gfCB2b2lkID0gKG9wZXJhdGlvbikgPT4ge1xyXG4gICAgaWYgKG9wZXJhdGlvbi52YXJpYWJsZXMpIHtcclxuICAgICAgb3BlcmF0aW9uLnZhcmlhYmxlcyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob3BlcmF0aW9uLnZhcmlhYmxlcyksIG9taXRUeXBlbmFtZSlcclxuICAgIH1cclxuICAgIG9wZXJhdGlvbi5zZXRDb250ZXh0KCh7aGVhZGVycyA9IHt9fSkgPT4gKHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIC4uLmhlYWRlcnMsXHJcbiAgICAgICAgLy8g5ZCO5Y+w5LiH6IO95p2D6ZmQXHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogZ2V0VG9rZW4oKSxcclxuICAgICAgfSxcclxuICAgIH0pKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVmcmVzaFRva2VuID0gKCkgPT4ge1xyXG4gICAgZ3JhcGhRTFF1ZXJ5KCkoZG9jLnJlZnJlc2hUb2tlbiwge1xyXG4gICAgICBkYXRhOiBnZXRUb2tlbigncmVmcmVzaHRva2VuJyksXHJcbiAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgIGlmIChyZXMuZGF0YT8ucmVmcmVzaFRva2VuPy50b2tlbikge1xyXG4gICAgICAgIHNldFRva2VuKHJlcy5kYXRhPy5yZWZyZXNoVG9rZW4/LnRva2VuKVxyXG4gICAgICAgIHNldFRva2VuKHJlcy5kYXRhPy5yZWZyZXNoVG9rZW4/LnJlZnJlc2h0b2tlbiwgJ3JlZnJlc2h0b2tlbicpXHJcbiAgICAgICAgc2hvd01lc3NhZ2Uoe21lc3NhZ2U6ICfnmbvlvZXotoXml7Ys5Yi35paw55m75b2V5L+h5oGvJ30pXHJcbiAgICAgICAgUm91dGVyLnJlbG9hZCgpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2hvd01lc3NhZ2Uoe21lc3NhZ2U6ICfor7fph43mlrDnmbvlvZUnfSlcclxuICAgICAgICBSb3V0ZXIucHVzaCgnL2xvZ2luJylcclxuICAgICAgfVxyXG4gICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgc3NMb2coZXJyKVxyXG4gICAgICBzaG93TWVzc2FnZSh7bWVzc2FnZTogJ+ivt+mHjeaWsOeZu+W9lSd9KVxyXG4gICAgICBSb3V0ZXIucHVzaCgnL2xvZ2luJylcclxuICAgIH0pXHJcbiAgfVxyXG4gIGNvbnN0IG9uRXJyb3I6IEVycm9yTGluay5FcnJvckhhbmRsZXIgPSAoe3Jlc3BvbnNlLCBvcGVyYXRpb24sIGdyYXBoUUxFcnJvcnMsIG5ldHdvcmtFcnJvcn0pID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgLy8gY29uc29sZS5sb2cob3BlcmF0aW9uKVxyXG4gICAgaWYgKGdyYXBoUUxFcnJvcnMpIHtcclxuICAgICAgZ3JhcGhRTEVycm9ycy5mb3JFYWNoKCh7bWVzc2FnZSwgbG9jYXRpb25zLCBwYXRoLCBleHRlbnNpb25zfSkgPT4ge1xyXG4gICAgICAgIHNzTG9nKFxyXG4gICAgICAgICAgICBgW0dyYXBoUUwgZXJyb3JdOiBNZXNzYWdlOiAke21lc3NhZ2V9LCBMb2NhdGlvbjogJHtsb2NhdGlvbnN9LCBQYXRoOiAke3BhdGh9YCxcclxuICAgICAgICApXHJcbiAgICAgICAgaWYgKGV4dGVuc2lvbnM/LmNvZGUgPT09ICdVTkFVVEhFTlRJQ0FURUQnKSB7XHJcbiAgICAgICAgICBpZiAobWVzc2FnZS5pbmNsdWRlcygnZmlyc3QnKSkge1xyXG4gICAgICAgICAgICByZWZyZXNoVG9rZW4oKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2hvd01lc3NhZ2Uoe21lc3NhZ2U6ICfor7fph43mlrDnmbvlvZUnfSlcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goJy9sb2dpbicpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtZXNzYWdlLmluY2x1ZGVzKCdVbmV4cGVjdGVkIGVycm9yJykpIHtcclxuICAgICAgICAgIHNob3dNZXNzYWdlKHtcclxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZS5zcGxpdCgnXCInKVsxXSxcclxuICAgICAgICAgICAgbXNnX3R5cGU6ICdlcnJvcicsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzaG93TWVzc2FnZSh7bWVzc2FnZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChuZXR3b3JrRXJyb3IpIHtcclxuICAgICAgY29uc3QgZXJyTXNnID0gKCdib2R5VGV4dCcgaW4gbmV0d29ya0Vycm9yKSA/IG5ldHdvcmtFcnJvcj8uYm9keVRleHQgOiAoJ3Jlc3VsdCcgaW4gbmV0d29ya0Vycm9yKSA/IG5ldHdvcmtFcnJvcj8ucmVzdWx0Py5lcnJvciA6ICcnXHJcbiAgICAgIHNzTG9nKGBbTmV0d29yayBlcnJvcl06ICR7ZXJyTXNnfWApXHJcbiAgICAgIGlmICgnc3RhdHVzQ29kZScgaW4gbmV0d29ya0Vycm9yICYmIG5ldHdvcmtFcnJvcj8uc3RhdHVzQ29kZSA9PT0gNDAxKSB7XHJcbiAgICAgICAgaWYgKGVyck1zZy5pbmNsdWRlcygnZmlyc3QnKSAmJiBnZXRUb2tlbigncmVmcmVzaHRva2VuJykpIHtcclxuICAgICAgICAgIHJlZnJlc2hUb2tlbigpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNob3dNZXNzYWdlKHttZXNzYWdlOiAn6K+36YeN5paw55m75b2VJ30pXHJcbiAgICAgICAgICBSb3V0ZXIucHVzaCgnL2xvZ2luJylcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBuZXcgQXBvbGxvQ2xpZW50KHtcclxuICAgIC8vIGxpbms6IGh0dHBMaW5rLFxyXG4gICAgdXJpOiBjbGllbnRfYXBpX3VyaSxcclxuICAgIHJlcXVlc3QsXHJcbiAgICBvbkVycm9yLFxyXG4gIH0pXHJcbn1cclxuXHJcbmNvbnN0IGRlZmF1bHRDbGllbnQgPSBnZXRDbGllbnQoKVxyXG5cclxuLy8gY29uc3QgZGVhbFBhcmFtcyA9ICgocGFyYW1zOiBhbnkpID0+ICh7XHJcbi8vICAgZGF0YTogcGFyYW1zLFxyXG4vLyB9KSlcclxuY29uc3QgZGVhbFBhcmFtcyA9ICgocGFyYW1zOiBhbnkpID0+IHBhcmFtcylcclxuXHJcbmV4cG9ydCBjb25zdCBncmFwaFFMUXVlcnkgPSAoY2xpZW50ID0gZGVmYXVsdENsaWVudCkgPT4gYXN5bmMgKHF1ZXJ5OiBEb2N1bWVudE5vZGUsIHBhcmFtczogYW55LCBvcHRpb24/OiBhbnkpID0+IHtcclxuICBjb25zdCBfZGVhbFBhcmFtc0luID0gb3B0aW9uPy5kZWFsUGFyYW1zSW4gPz8gZGVhbFBhcmFtc1xyXG4gIHJldHVybiBjbGllbnQucXVlcnkoe1xyXG4gICAgZmV0Y2hQb2xpY3k6ICduZXR3b3JrLW9ubHknLFxyXG4gICAgcXVlcnksXHJcbiAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgLi4uKF9kZWFsUGFyYW1zSW4gPyBfZGVhbFBhcmFtc0luKHBhcmFtcykgOiBwYXJhbXMpLFxyXG4gICAgfSxcclxuICAgIC4uLm9wdGlvbixcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ3JhcGhRTE11dGF0ZSA9IChjbGllbnQgPSBkZWZhdWx0Q2xpZW50KSA9PiBhc3luYyAobXV0YXRpb246IGFueSwgcGFyYW1zOiBhbnksIG9wdGlvbj86IGFueSkgPT4ge1xyXG4gIGNvbnN0IF9kZWFsUGFyYW1zSW4gPSBvcHRpb24/LmRlYWxQYXJhbXNJbiA/PyBkZWFsUGFyYW1zXHJcbiAgcmV0dXJuIGNsaWVudC5tdXRhdGUoe1xyXG4gICAgbXV0YXRpb24sXHJcbiAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgLi4uKF9kZWFsUGFyYW1zSW4gPyBfZGVhbFBhcmFtc0luKHBhcmFtcykgOiBwYXJhbXMpLFxyXG4gICAgfSxcclxuICAgIC4uLm9wdGlvbixcclxuICB9KVxyXG59XHJcblxyXG5jb25zdCBzZXJ2ZXJDbGllbnQgPSAoKSA9PiBuZXcgQXBvbGxvQ2xpZW50KHtcclxuICAvLyBsaW5rOiBodHRwTGluayxcclxuICB1cmk6IGNsaWVudF9hcGlfdXJpLFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHNlcnZlclF1ZXJ5ID0gYXN5bmMgKHF1ZXJ5OiBhbnksIHBhcmFtczogYW55LCBvcHRpb24/OiBhbnkpID0+IChhd2FpdCBncmFwaFFMUXVlcnkoc2VydmVyQ2xpZW50KCkpKHF1ZXJ5LCBwYXJhbXMsIG9wdGlvbikpPy5kYXRhXHJcblxyXG5leHBvcnQgY29uc3Qgc2VydmVyTXV0YXRlID0gYXN5bmMgKG11dGF0aW9uOiBhbnksIHBhcmFtczogYW55LCBvcHRpb24/OiBhbnkpID0+IChhd2FpdCBncmFwaFFMTXV0YXRlKHNlcnZlckNsaWVudCgpKShtdXRhdGlvbiwgcGFyYW1zLCBvcHRpb24pKT8uZGF0YVxyXG5cclxuIiwiaW1wb3J0IHttb2RlbEZhY3Rvcnl9IGZyb20gJy4uL01vZGVsQWN0aW9uL21vZGVsVXRpbCdcclxuaW1wb3J0IHtmcE1lcmdlLCBmcFNldH0gZnJvbSAnLi4vdG9vbHMvdXRpbHMnXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERpYWxvZ01vZGVsPFQ+IHtcclxuICBvcGVuOiBib29sZWFuXHJcbiAgZGlhbG9nRGF0YTogVFxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBSZXNvbHZlckZ1biA9ICh2YWx1ZT86IGFueSkgPT4gYW55XHJcblxyXG5leHBvcnQgY29uc3QgZGlhbG9nTW9kZWxGYWN0b3J5ID0gPFQ+KG5hbWU6IHN0cmluZywgaW5pdERhdGE6IFQpID0+IG1vZGVsRmFjdG9yeShgJHtuYW1lfV9kaWFsb2dNb2RlbEZhY3RvcnlgLCB7XHJcbiAgZGlhbG9nRGF0YTogaW5pdERhdGEsXHJcbiAgb3BlbjogZmFsc2UsXHJcbiAgaXNFZGl0OiAtMSxcclxuICBvcGVuUmVzb2x2ZTogKCgpID0+IHtcclxuICB9KSBhcyBSZXNvbHZlckZ1bixcclxufSwge1xyXG4gIG9wZW5DbGljazogKHZhbHVlLCB7c2V0RGF0YX0pID0+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgc2V0RGF0YShwcmVEYXRhID0+IGZwTWVyZ2UocHJlRGF0YSwge1xyXG4gICAgICAgIG9wZW46IHRydWUsXHJcbiAgICAgICAgZGlhbG9nRGF0YTogdmFsdWUsXHJcbiAgICAgICAgaXNFZGl0OiAtMSxcclxuICAgICAgICBvcGVuUmVzb2x2ZTogcmVzb2x2ZSxcclxuICAgICAgfSkpXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgb3BlbkVkaXRDbGljazogKHZhbHVlOiB7IGRhdGE6IGFueTsgaW5kZXg6IG51bWJlciB9LCB7c2V0RGF0YX0pID0+IHNldERhdGEocHJlID0+IGZwTWVyZ2UocHJlLCB7XHJcbiAgICBvcGVuOiB0cnVlLFxyXG4gICAgZGlhbG9nRGF0YTogdmFsdWUuZGF0YSxcclxuICAgIGlzRWRpdDogdmFsdWUuaW5kZXgsXHJcbiAgfSkpLFxyXG4gIG9uQ2xvc2U6ICh2YWx1ZSwge2RhdGEsIHNldERhdGF9KSA9PiB7XHJcbiAgICBkYXRhLm9wZW5SZXNvbHZlKGZhbHNlKVxyXG4gICAgc2V0RGF0YShwcmUgPT4gZnBNZXJnZShmcFNldChwcmUsICdkaWFsb2dEYXRhJywge30pLCB7XHJcbiAgICAgIGRpYWxvZ0RhdGE6IGluaXREYXRhLFxyXG4gICAgICBvcGVuOiBmYWxzZSxcclxuICAgIH0pKVxyXG4gIH0sXHJcbiAgc2V0ZGlhbG9nOiAodmFsdWU6IFQgfCBhbnksIHtzZXREYXRhfSkgPT4gc2V0RGF0YShkYXRhID0+IGZwTWVyZ2UoZGF0YSwge1xyXG4gICAgZGlhbG9nRGF0YTogdmFsdWUsXHJcbiAgfSkpLFxyXG59KVxyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVJlZn0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBCZXR0ZXJTY3JvbGwgZnJvbSAnYmV0dGVyLXNjcm9sbCdcclxuaW1wb3J0IHt1c2VTdG9yZU1vZGVsfSBmcm9tICcuLi8uLi9Nb2RlbEFjdGlvbi91c2VTdG9yZSdcclxuaW1wb3J0IHtmcE1lcmdlUHJlfSBmcm9tICcuLi8uLi90b29scy91dGlscydcclxuaW1wb3J0IHttb2RlbEZhY3Rvcnl9IGZyb20gJy4uLy4uL01vZGVsQWN0aW9uL21vZGVsVXRpbCdcclxuXHJcbmV4cG9ydCBjb25zdCBiU2Nyb2xsTW9kZWwgPSBtb2RlbEZhY3RvcnkoJ2JTY3JvbGxNb2RlbCcsIHtcclxuICBzY3JvbGw6IHt9IGFzIGFueSxcclxufSwge1xyXG4gIHNldFNjcm9sbDogKHZhbHVlLCBvcHRpb24pID0+IHtcclxuICAgIG9wdGlvbi5zZXREYXRhKGZwTWVyZ2VQcmUoe1xyXG4gICAgICBzY3JvbGw6IHZhbHVlLFxyXG4gICAgfSkpXHJcbiAgfSxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBCU2Nyb2xsZXIgPSAoe2lzWCwgY2hpbGRyZW4sIGJveEhlaWdodCwgYm94V2lkdGh9OiB7IGNoaWxkcmVuPzogYW55LCBib3hIZWlnaHQ/OiBhbnksIGJveFdpZHRoPzogYW55LCBpc1g/OiBib29sZWFuIH0pID0+IHtcclxuICBjb25zdCB7c3RhdGU6IGJzU3RhdGUsIGFjdGlvbnM6IGJzQWN0aW9uc30gPSB1c2VTdG9yZU1vZGVsKGJTY3JvbGxNb2RlbClcclxuICBjb25zdCBzY3JvbGxSZWYgPSB1c2VSZWYobnVsbClcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgY29uc3Qgc2Nyb2xsID0gbmV3IEJldHRlclNjcm9sbChzY3JvbGxSZWYuY3VycmVudCwge1xyXG4gICAgICBjbGljazogdHJ1ZSxcclxuICAgICAgc2Nyb2xsWTogdHJ1ZSxcclxuICAgICAgdGFwczogdHJ1ZSxcclxuICAgICAgLi4uKGlzWCA/IHtcclxuICAgICAgICBzY3JvbGxYOiB0cnVlLFxyXG4gICAgICAgIHNjcm9sbFk6IGZhbHNlLFxyXG4gICAgICB9IDoge30pLFxyXG4gICAgICBwcmV2ZW50RGVmYXVsdEV4Y2VwdGlvbjoge1xyXG4gICAgICAgIHRhZ05hbWU6IC9eKElOUFVUfFRFWFRBUkVBfEJVVFRPTnxTRUxFQ1QpJC8sXHJcbiAgICAgICAgY2xhc3NOYW1lOiAvKF58XFxzKS4qKE11aVRleHRGaWVsZC1yb290fE11aVNlbGVjdC1zZWxlY3QpLiooXFxzfCQpLyxcclxuICAgICAgfSxcclxuICAgIH0pXHJcbiAgICBic0FjdGlvbnMuc2V0U2Nyb2xsKHNjcm9sbClcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHNjcm9sbC5zdG9wKClcclxuICAgICAgc2Nyb2xsLmRlc3Ryb3koKVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgICByZWY9e3Njcm9sbFJlZn1cclxuICAgICAgICAgIGNsYXNzTmFtZT17J2JveCd9PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgc3R5bGU9e2lzWCA/IHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuICAgICAgICAgICAgfSA6IHt9fVxyXG4gICAgICAgID57Y2hpbGRyZW59PC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLmJveCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogJHtib3hIZWlnaHQgfHwgJzEwMHZoJ307XHJcbiAgICAgICAgICAgIHdpZHRoOiAkeyhpc1ggJiYgYm94V2lkdGgpID8gYCR7Ym94V2lkdGh9YCA6ICdhdXRvJyB9O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBjb25zdCBCb3ggPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDAgMjBweDtcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFNwYWNlID0gKHtoLCB3LCBjfToge2g/OiBzdHJpbmcgfCBudW1iZXIsIHc/OiBzdHJpbmcgfCBudW1iZXIsIGM/OiBzdHJpbmd9KSA9PiB7XHJcbiAgcmV0dXJuIDxzcGFuXHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgYmFja2dyb3VuZDogYyB8fCAnYXV0bycsXHJcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICAgICAgd2lkdGg6IHcgPz8gJzEwMCUnLFxyXG4gICAgICAgIGhlaWdodDogaCA/PyAnMTAwJScsXHJcbiAgICAgICAgICAuLi4oIXcgPyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgICAgICB9IDoge30pXHJcbiAgICAgIH19XHJcbiAgLz5cclxufVxyXG4iLCJpbXBvcnQge0J1dHRvbiwgQnV0dG9uUHJvcHMsIENpcmN1bGFyUHJvZ3Jlc3N9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5kZWNsYXJlIGludGVyZmFjZSBCdXR0b25Mb2FkUHJvcHMgZXh0ZW5kcyBCdXR0b25Qcm9wcyB7XHJcbiAgbG9hZGluZz86IGJvb2xlYW4gfCBudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEJ1dHRvbkxvYWQgPSAocHJvcHM6IEJ1dHRvbkxvYWRQcm9wcykgPT4ge1xyXG5cclxuICByZXR1cm4gPEJ1dHRvblxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICAgIGRpc2FibGVkPXshIXByb3BzLmxvYWRpbmcgfHwgcHJvcHMuZGlzYWJsZWR9XHJcbiAgPlxyXG4gICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgeyEhcHJvcHMubG9hZGluZyAmJiA8Q2lyY3VsYXJQcm9ncmVzc1xyXG4gICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgc2l6ZT17MjZ9XHJcbiAgICAvPn1cclxuICA8L0J1dHRvbj5cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU3RvcmVmcm9udEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1N0b3JlZnJvbnQnXHJcbmltcG9ydCBBY2NvdW50Qm94SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQWNjb3VudEJveCdcclxuaW1wb3J0IFJlZGVlbUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1JlZGVlbSdcclxuaW1wb3J0IFNob3BwaW5nQ2FydEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1Nob3BwaW5nQ2FydCdcclxuaW1wb3J0IFBlb3BsZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1Blb3BsZSdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCByZWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL3JlZCdcclxuaW1wb3J0IHtBcHBGb290QmFyfSBmcm9tICcuLi8uLi9zc19jb21tb24vZW51bSdcclxuaW1wb3J0IHt1c2VTdG9yZU1vZGVsfSBmcm9tICcuLi8uLi9Nb2RlbEFjdGlvbi91c2VTdG9yZSdcclxuaW1wb3J0IHtzaG9wQ2FydE1vZGVsfSBmcm9tICcuLi8uLi92aWV3L2NhcnQnXHJcbmltcG9ydCB7bXBTdHlsZX0gZnJvbSAnLi4vLi4vc3R5bGUvY29tbW9uJ1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvb3RCYXIgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCB7c3RhdGU6IHN0YXRlU2hvcENhcnQsIGFjdGlvbnM6IGFjdGlvbnNTaG9wQ2FydH0gPSB1c2VTdG9yZU1vZGVsKHNob3BDYXJ0TW9kZWwpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghc3RhdGVTaG9wQ2FydC51c2VyLmlkKSB7XHJcbiAgICAgIGFjdGlvbnNTaG9wQ2FydC5nZXRMaXN0KClcclxuICAgIH1cclxuICB9LCBbXSlcclxuXHJcbiAgY29uc3QgaXNBY3QgPSAocGF0aDogYW55KSA9PiByb3V0ZXIucGF0aG5hbWUuaW5jbHVkZXMocGF0aCBhcyBzdHJpbmcpXHJcbiAgcmV0dXJuIChcclxuICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXsnRm9vdEJhcid9PlxyXG4gICAgICAgIHtbXHJcbiAgICAgICAgICBbJ+mAm+W6lycsIDxTdG9yZWZyb250SWNvbi8+LCBgLyR7QXBwRm9vdEJhci5ob21lfWBdLFxyXG4gICAgICAgICAgWyfmi7zlm6InLCA8UGVvcGxlSWNvbi8+LCBgLyR7QXBwRm9vdEJhci5ncm91cH1gXSxcclxuICAgICAgICAgIFsn6L6+5Lq65Y2hJywgPFJlZGVlbUljb24vPiwgYC8ke0FwcEZvb3RCYXIuY2FyZH1gXSxcclxuICAgICAgICAgIFsn6LSt54mp6L2mJywgPFNob3BwaW5nQ2FydEljb24vPiwgYC8ke0FwcEZvb3RCYXIuY2FydH1gLCBzdGF0ZVNob3BDYXJ0LmRlYWxQcm9kdWN0TnVtYmVyKHN0YXRlU2hvcENhcnQpXSxcclxuICAgICAgICAgIFsn5oiRJywgPEFjY291bnRCb3hJY29uLz4sIGAvJHtBcHBGb290QmFyLm1lfWBdLFxyXG4gICAgICAgIF0ubWFwKHYgPT4gKFxyXG4gICAgICAgICAgICA8c2VjdGlvblxyXG4gICAgICAgICAgICAgICAga2V5PXtgRm9vdEJhcl8ke3ZbMF19YH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aXNBY3QodlsyXSkgPyAnYWN0JyA6ICcnfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaXNBY3QodlsyXSkgPyAnJyA6IHJvdXRlci5wdXNoKHZbMl0gYXMgc3RyaW5nKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHt2WzFdfVxyXG4gICAgICAgICAgICAgIDxzcGFuPnt2WzBdfTwvc3Bhbj5cclxuICAgICAgICAgICAgICB7fn52WzNdID4gMCAmJiA8YXNpZGU+e3ZbM119PC9hc2lkZT59XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICApKX1cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAuRm9vdEJhciB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAzcHggNHB4IDAgcmdiYSgwLDAsMCwwLjE0KSwgMCAzcHggM3B4IC0ycHggcmdiYSgwLDAsMCwwLjEyKSwgMCAxcHggOHB4IDAgcmdiYSgwLDAsMCwwLjIwKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgPiBzZWN0aW9uIHtcclxuICAgICAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgID4gYXNpZGUge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDIwJTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHttcFN0eWxlLnJlZH07XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYWN0IHtcclxuICAgICAgICAgICAgY29sb3I6ICR7cmVkWzYwMF19O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiIsImltcG9ydCB7Ymx1ZSwgYmx1ZUdyZXl9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycydcclxuaW1wb3J0IG1ha2VTdHlsZXMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL21ha2VTdHlsZXMnXHJcbmltcG9ydCB7SW5wdXRCYXNlUHJvcHN9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0QmFzZS9JbnB1dEJhc2UnXHJcbmltcG9ydCB7SW5wdXRCYXNlfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHtTZWFyY2h9IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucydcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGNvbnN0IGJvcmRlcmVkSW5wdXRCYXNlU3R5bGVzID0gKHtwYWxldHRlfTogYW55KSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBib3JkZXJSYWRpdXM6ICcxNHB4JyxcclxuICAgIGJvcmRlcjogJzJweCBzb2xpZCcsXHJcbiAgICBib3JkZXJDb2xvcjogYmx1ZUdyZXlbMjAwXSxcclxuICAgICcmOmhvdmVyOm5vdCgkZGlzYWJsZWQpJzoge1xyXG4gICAgICBib3JkZXJDb2xvcjogYmx1ZUdyZXlbNTAwXSxcclxuICAgIH0sXHJcbiAgICAnJiA+IHN2Zyc6IHtcclxuICAgICAgY29sb3I6IGJsdWVHcmV5WzMwMF0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYWRvcm5lZFN0YXJ0OiB7XHJcbiAgICBwYWRkaW5nTGVmdDogJzAuNXJlbScsXHJcbiAgfSxcclxuICBhZG9ybmVkRW5kOiB7XHJcbiAgICBwYWRkaW5nUmlnaHQ6ICcwLjVyZW0nLFxyXG4gIH0sXHJcbiAgZm9jdXNlZDoge1xyXG4gICAgYm9yZGVyQ29sb3I6IGJsdWVbNzAwXSxcclxuICAgICcmOmhvdmVyOm5vdCgkZGlzYWJsZWQpJzoge1xyXG4gICAgICBib3JkZXJDb2xvcjogYmx1ZVs3MDBdLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGVycm9yOiB7XHJcbiAgICBib3JkZXJDb2xvcjogcGFsZXR0ZS5lcnJvci5tYWluLFxyXG4gICAgJyY6aG92ZXI6bm90KCRkaXNhYmxlZCknOiB7XHJcbiAgICAgIGJvcmRlckNvbG9yOiBwYWxldHRlLmVycm9yLm1haW4sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgaW5wdXQ6IHtcclxuICAgIHBhZGRpbmc6ICcwLjYyNXJlbSAwLjVyZW0nLFxyXG4gIH0sXHJcbiAgZGlzYWJsZWQ6IHtcclxuICAgIGJvcmRlckNvbG9yOiBibHVlR3JleVszMDBdLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBibHVlR3JleVsxMDBdLFxyXG4gIH0sXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgdXNlQm9yZGVyZWRJbnB1dEJhc2VTdHlsZXMgPSBtYWtlU3R5bGVzKGJvcmRlcmVkSW5wdXRCYXNlU3R5bGVzLCB7XHJcbiAgbmFtZTogXCJCb3JkZXJlZElucHV0QmFzZVwiLFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IEJvcmRlcmVkSW5wdXRCYXNlOiAocHJvcHM6IElucHV0QmFzZVByb3BzKSA9PiBKU1guRWxlbWVudCA9ICgpID0+IHtcclxuICBjb25zdCBzdHlsZXMgPSB1c2VCb3JkZXJlZElucHV0QmFzZVN0eWxlcygpXHJcbiAgcmV0dXJuIDxJbnB1dEJhc2VcclxuICAgICAgY2xhc3Nlcz17c3R5bGVzfVxyXG4gICAgICBwbGFjZWhvbGRlcj17J1BsYWNlaG9sZGVyJ31cclxuICAgICAgc3RhcnRBZG9ybm1lbnQ9ezxTZWFyY2gvPn1cclxuICAvPlxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IEFycm93QmFja0lvc0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93QmFja0lvcydcclxuaW1wb3J0IHtCb3gsIEljb25CdXR0b259IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQge2xzfSBmcm9tICcuLi8uLi90b29scy9kZWFsS2V5J1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7TWF5YmV9IGZyb20gJy4uLy4uL2dyYXBocWxUeXBlcy90eXBlcydcclxuaW1wb3J0IHtCb3hQcm9wc30gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQm94L0JveCdcclxuXHJcbmNvbnN0IENvbnRhaW4gPSBzdHlsZWQoQm94KTxCb3hQcm9wcz5gXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwcHggMWZyIDQwcHg7XHJcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogNjBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gXHJcbmV4cG9ydCBjb25zdCBIZWFkZXJUaXRsZSA9ICh7dGl0bGUgPSAnJywgYmFja0NhbGwgPSAoKSA9PiB7fX06IHt0aXRsZT86IE1heWJlPHN0cmluZz4sIGJhY2tDYWxsPzogRnVuY3Rpb259KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgcmV0dXJuIDxDb250YWluXHJcbiAgICAgIGJveFNoYWRvdz17MX0+XHJcbiAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIGlmICghKGJhY2tDYWxsICYmIGJhY2tDYWxsKCkpKSB7XHJcbiAgICAgICAgICAgIHJvdXRlci5iYWNrKClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8QXJyb3dCYWNrSW9zSWNvbi8+XHJcbiAgICA8L0ljb25CdXR0b24+XHJcbiAgICA8bWFpbj5cclxuICAgICAge2xzKHRpdGxlKX1cclxuICAgIDwvbWFpbj5cclxuICA8L0NvbnRhaW4+XHJcbn1cclxuIiwiaW1wb3J0IHsgQ2lyY3VsYXJQcm9ncmVzcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBjb25zdCBMb2FkaW5nID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7d2lkdGg6ICcxMDAlJywgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcid9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3NcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQge1NuYWNrYmFyfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHthbWJlciwgYmx1ZSwgY29tbW9uLCBncmVlbiwgZ3JleSwgcmVkfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMnXHJcbmltcG9ydCB7U25hY2tiYXJQcm9wc30gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU25hY2tiYXIvU25hY2tiYXInXHJcbmltcG9ydCB7b3JpZ2luU3RvcmUsIHVzZVN0b3JlTW9kZWx9IGZyb20gJy4uLy4uL01vZGVsQWN0aW9uL3VzZVN0b3JlJ1xyXG5pbXBvcnQge2ZwTWVyZ2VQcmV9IGZyb20gJy4uLy4uL3Rvb2xzL3V0aWxzJ1xyXG5pbXBvcnQge21vZGVsRmFjdG9yeX0gZnJvbSAnLi4vLi4vTW9kZWxBY3Rpb24vbW9kZWxVdGlsJ1xyXG5pbXBvcnQgeyBscyB9IGZyb20gJy4uLy4uL3Rvb2xzL2RlYWxLZXknXHJcblxyXG5jb25zdCB0eXBlSGVscCA9IHtcclxuICBkZWZhdWx0OiBgYmFja2dyb3VuZDogJHtncmV5WzcwMF19O2AsXHJcbiAgc3VjY2VzczogYGJhY2tncm91bmQ6ICR7Z3JlZW5bNjAwXX07YCxcclxuICB3YXJuaW5nOiBgYmFja2dyb3VuZDogJHthbWJlcls3MDBdfTtgLFxyXG4gIGluZm86IGBiYWNrZ3JvdW5kOiAke2JsdWVbNzAwXX07YCxcclxuICBlcnJvcjogYGJhY2tncm91bmQ6ICR7cmVkWzcwMF19O2AsXHJcbn1cclxuY29uc3QgZ2V0VHlwZSA9ICh0eXBlID0gJ2RlZmF1bHQnKSA9PiAodHlwZUhlbHAgYXMgYW55KVt0eXBlXVxyXG5cclxudHlwZSBNZXNzYWdlUHJvcHMgPSBQYXJ0aWFsPFNuYWNrYmFyUHJvcHMgJiB7XHJcbiAgbXNnX3R5cGU6ICdkZWZhdWx0JyB8ICdzdWNjZXNzJyB8ICdpbmZvJyB8ICd3YXJuaW5nJyB8ICdlcnJvcicgfCBzdHJpbmdcclxufT5cclxuXHJcbmNvbnN0IEN1c1NuYWNrYmFyID0gc3R5bGVkKFNuYWNrYmFyKTxNZXNzYWdlUHJvcHM+YFxyXG4gICYmJiA+IGRpdiB7XHJcbiAgICBjb2xvcjogJHtjb21tb24ud2hpdGV9O1xyXG4gICAgJHsoe21zZ190eXBlfSkgPT4gZ2V0VHlwZShtc2dfdHlwZSl9XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBtZXNzYWdlTW9kZWwgPSBtb2RlbEZhY3RvcnkoJ21lc3NhZ2VNb2RlbCcsIHtcclxuICBvcGVuOiBmYWxzZSxcclxuICBtZXNzYWdlOiAnJyxcclxuICBhdXRvSGlkZUR1cmF0aW9uOiAyMDAwLFxyXG4gIG1zZ190eXBlOiAnZGVmYXVsdCcsXHJcbn0gYXMgTWVzc2FnZVByb3BzLCB7XHJcbiAgb3BlbjogKHZhbHVlOiBzdHJpbmcgfCBNZXNzYWdlUHJvcHMsIG9wdGlvbikgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgb3B0aW9uLnNldERhdGEoZnBNZXJnZVByZSh7XHJcbiAgICAgICAgYXV0b0hpZGVEdXJhdGlvbjogMjAwMCxcclxuICAgICAgICBtc2dfdHlwZTogJ2RlZmF1bHQnLFxyXG4gICAgICAgIG1lc3NhZ2U6IHZhbHVlLFxyXG4gICAgICAgIG9wZW46IHRydWUsXHJcbiAgICAgIH0pKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgb3B0aW9uLnNldERhdGEoZnBNZXJnZVByZSh7XHJcbiAgICAgICAgYXV0b0hpZGVEdXJhdGlvbjogMjAwMCxcclxuICAgICAgICBtc2dfdHlwZTogJ2RlZmF1bHQnLFxyXG4gICAgICAgIC4uLnZhbHVlLFxyXG4gICAgICAgIG9wZW46IHRydWUsXHJcbiAgICAgIH0pKVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgb25DbG9zZTogKHZhbHVlLCBvcHRpb24pID0+IG9wdGlvbi5zZXREYXRhKGZwTWVyZ2VQcmUoe1xyXG4gICAgb3BlbjogZmFsc2UsXHJcbiAgfSkpLFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IE1lc3NhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3Qge3N0YXRlOiBtU3RhdGUsIGFjdGlvbnN9ID0gdXNlU3RvcmVNb2RlbChtZXNzYWdlTW9kZWwpXHJcbiAgcmV0dXJuIDxDdXNTbmFja2JhclxyXG4gICAgICBvcGVuPXttU3RhdGUub3Blbn1cclxuICAgICAgYXV0b0hpZGVEdXJhdGlvbj17bVN0YXRlLmF1dG9IaWRlRHVyYXRpb259XHJcbiAgICAgIG1lc3NhZ2U9e2xzKG1TdGF0ZS5tZXNzYWdlIGFzIHN0cmluZyl9XHJcbiAgICAgIG1zZ190eXBlPXttU3RhdGUubXNnX3R5cGV9XHJcbiAgICAgIG9uQ2xvc2U9eygpID0+IGFjdGlvbnMub25DbG9zZSgpfVxyXG4gIC8+XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzaG93TWVzc2FnZSA9IChvcHRpb246IHN0cmluZyB8IE1lc3NhZ2VQcm9wcykgPT4ge1xyXG4gIG9yaWdpblN0b3JlWydtZXNzYWdlTW9kZWwnXS5hY3Rpb25zLm9wZW4ob3B0aW9uKVxyXG4gIHJldHVyblxyXG59XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCBBZGRDaXJjbGVPdXRsaW5lSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkQ2lyY2xlT3V0bGluZSdcclxuaW1wb3J0IFNob3BwaW5nQ2FydEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1Nob3BwaW5nQ2FydCdcclxuaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtNYXliZSwgUHJvZHVjdCwgU2hvcENhcnRJdGVtSW5wdXR9IGZyb20gJy4uLy4uL2dyYXBocWxUeXBlcy90eXBlcydcclxuaW1wb3J0IHtkZWFsSW1nVXJsfSBmcm9tICcuLi8uLi90b29scy9pbWcnXHJcbmltcG9ydCB7QnV0dG9uLCBDYXJkLCBJY29uQnV0dG9ufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHtkZWFsTW9uZXl9IGZyb20gJy4uLy4uL3Rvb2xzL3V0aWxzJ1xyXG5pbXBvcnQge21wU3R5bGV9IGZyb20gJy4uLy4uL3N0eWxlL2NvbW1vbidcclxuaW1wb3J0IHttb2RlbEZhY3Rvcnl9IGZyb20gJy4uLy4uL01vZGVsQWN0aW9uL21vZGVsVXRpbCdcclxuaW1wb3J0IHt1c2VTdG9yZU1vZGVsfSBmcm9tICcuLi8uLi9Nb2RlbEFjdGlvbi91c2VTdG9yZSdcclxuaW1wb3J0IHttZU1vZGVsfSBmcm9tICcuLi8uLi92aWV3L21lL21vZGVsJ1xyXG5pbXBvcnQge2RvY30gZnJvbSAnLi4vLi4vZ3JhcGhxbFR5cGVzL2RvYydcclxuaW1wb3J0IHtzaG93TWVzc2FnZX0gZnJvbSAnLi4vTWVzc2FnZS9NZXNzYWdlJ1xyXG5pbXBvcnQge2xzfSBmcm9tICcuLi8uLi90b29scy9kZWFsS2V5J1xyXG5pbXBvcnQge2dyZXl9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycydcclxuaW1wb3J0IHtzaG9wQ2FydE1vZGVsfSBmcm9tICcuLi8uLi92aWV3L2NhcnQnXHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHtVcGRhdGVTaG9wQ2FydCwgdXBkYXRlU2hvcENhcnRNb2RlbH0gZnJvbSAnLi9VcGRhdGVTaG9wQ2FydCdcclxuXHJcbmV4cG9ydCBjb25zdCBwcm9kdWN0TW9kZWwgPSBtb2RlbEZhY3RvcnkoJ3Byb2R1Y3RNb2RlbCcsIHt9LCB7XHJcbiAgdXBkYXRlTnVtU2hvcENhcnQ6IGFzeW5jICh2YWx1ZTogU2hvcENhcnRJdGVtSW5wdXQsIG9wdGlvbikgPT4ge1xyXG4gICAgcmV0dXJuIGF3YWl0IG9wdGlvbi5tdXRhdGUoZG9jLnVwZGF0ZU51bVNob3BDYXJ0LCB7XHJcbiAgICAgIHNob3BDYXJ0OiB2YWx1ZSxcclxuICAgICAgLi4uKHZhbHVlLm51bWJlciA/IHtcclxuICAgICAgICB1cGRhdGVOdW06IHZhbHVlLm51bWJlcixcclxuICAgICAgfSA6IHt9KSxcclxuICAgIH0pXHJcbiAgfSxcclxuICB1cGRhdGVTaG9wQ2FydDogYXN5bmMgKHZhbHVlOiBTaG9wQ2FydEl0ZW1JbnB1dCwgb3B0aW9uKSA9PiB7XHJcbiAgICByZXR1cm4gYXdhaXQgb3B0aW9uLm11dGF0ZShkb2MudXBkYXRlU2hvcENhcnQsIHtcclxuICAgICAgc2hvcENhcnQ6IHZhbHVlLFxyXG4gICAgfSlcclxuICB9LFxyXG59KVxyXG5cclxuY29uc3QgQm94ID0gc3R5bGVkKENhcmQpYFxyXG4gIHBhZGRpbmc6IDEwcHggMTBweCAwO1xyXG4gID4gaGVhZGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MHZ3O1xyXG4gICAgPiBpbWcge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDQwdnc7XHJcbiAgICB9XHJcbiAgfVxyXG4gID4gbWFpbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH1cclxuICA+IGZvb3RlciB7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgID4gbWFpbiB7XHJcbiAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIH1cclxuICAgID4gLk11aUJ1dHRvbkJhc2Utcm9vdCB7XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9kdWN0UHJpY2UgPSAoe3Byb2R1Y3R9OiB7IHByb2R1Y3Q/OiBNYXliZTxQcm9kdWN0PiB9KSA9PiB7XHJcbiAgcmV0dXJuIDw+XHJcbiAgICA8YXNpZGVcclxuICAgICAgICBzdHlsZT17e2Rpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCBmb250U2l6ZTogJzEycHgnLCB0ZXh0RGVjb3JhdGlvbjogJ2xpbmUtdGhyb3VnaCcsIGZsZXhTaHJpbms6IDB9fVxyXG4gICAgPntkZWFsTW9uZXkocHJvZHVjdD8ucHJpY2VNYXJrZXQpfTwvYXNpZGU+XHJcbiAgICA8bWFpblxyXG4gICAgICAgIHN0eWxlPXt7ZGlzcGxheTogJ2lubGluZS1ibG9jaycsIGZvbnRTaXplOiAnMTRweCcsIG1hcmdpbkxlZnQ6ICc2cHgnLCBjb2xvcjogbXBTdHlsZS5yZWQsIGZsZXhTaHJpbms6IDB9fVxyXG4gICAgPntkZWFsTW9uZXkocHJvZHVjdD8ucHJpY2VPdXQpfTwvbWFpbj5cclxuICA8Lz5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFByb2R1Y3RJdGVtID0gKHtwcm9kdWN0fTogeyBwcm9kdWN0OiBQcm9kdWN0IH0pID0+IHtcclxuICBjb25zdCB7YWN0aW9uczphY3Rpb25zVXBkYXRlU2hvcENhcnRNb2RlbH0gPSB1c2VTdG9yZU1vZGVsKHVwZGF0ZVNob3BDYXJ0TW9kZWwpXHJcbiAgY29uc3Qge2FjdGlvbnM6IGFjdGlvbnNTaG9wQ2FydH0gPSB1c2VTdG9yZU1vZGVsKHNob3BDYXJ0TW9kZWwpXHJcbiAgY29uc3Qge3N0YXRlOiBzdGF0ZU1lLCBhY3Rpb25zOiBhY3Rpb25zTWV9ID0gdXNlU3RvcmVNb2RlbChtZU1vZGVsKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIXN0YXRlTWUudXNlci5pZCkge1xyXG4gICAgICBhY3Rpb25zTWUuZ2V0TG9naW5Vc2VyKClcclxuICAgIH1cclxuICB9LCBbXSlcclxuICBjb25zdCB7YWN0aW9uczogYWN0aW9uc1BNfSA9IHVzZVN0b3JlTW9kZWwocHJvZHVjdE1vZGVsKVxyXG4gIHJldHVybiA8Qm94PlxyXG4gICAgPGhlYWRlcj5cclxuICAgICAgPGltZyBzcmM9e2RlYWxJbWdVcmwocHJvZHVjdD8uaW1nPy5bMF0/LnVybCl9XHJcbiAgICAgICAgICAgYWx0PVwiXCIvPlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgICA8bWFpbj57cHJvZHVjdC5uYW1lfXtwcm9kdWN0LndlaWdodH17cHJvZHVjdC51bml0fTwvbWFpbj5cclxuICAgIDxmb290ZXI+XHJcbiAgICAgIDxQcm9kdWN0UHJpY2UgcHJvZHVjdD17cHJvZHVjdH0vPlxyXG4gICAgICB7c3RhdGVNZS51c2VyPy5pZCAmJiA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17YXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBhY3Rpb25zVXBkYXRlU2hvcENhcnRNb2RlbC5vcGVuQ2xpY2soKVxyXG4gICAgICAgICAgICBpZiAocmVzPy5udW0gPiAwKSB7XHJcbiAgICAgICAgICAgICAgaWYgKChhd2FpdCBhY3Rpb25zUE0udXBkYXRlTnVtU2hvcENhcnQoe1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdCxcclxuICAgICAgICAgICAgICAgIG51bWJlcjogfn5yZXM/Lm51bSxcclxuICAgICAgICAgICAgICB9KSk/LnVwZGF0ZU51bVNob3BDYXJ0Py5pZCkge1xyXG4gICAgICAgICAgICAgICAgc2hvd01lc3NhZ2UoJ+aTjeS9nOaIkOWKnycpXHJcbiAgICAgICAgICAgICAgICBhY3Rpb25zU2hvcENhcnQuZ2V0TGlzdCgpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPFNob3BwaW5nQ2FydEljb24gY29sb3I9eydzZWNvbmRhcnknfS8+XHJcbiAgICAgIDwvSWNvbkJ1dHRvbj59XHJcbiAgICA8L2Zvb3Rlcj5cclxuICAgIDxVcGRhdGVTaG9wQ2FydC8+XHJcbiAgPC9Cb3g+XHJcbn1cclxuXHJcbmNvbnN0IFJvd0JveCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgYm94LXNoYWRvdzogJHttcFN0eWxlLnNoYWRvd1snMSddfTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG5gXHJcbmNvbnN0IEltZyA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDM1dnc7XHJcbiAgaGVpZ2h0OiAzNXZ3O1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gID4gaW1nIHtcclxuICAgIHdpZHRoOiAzNXZ3O1xyXG4gICAgaGVpZ2h0OiAzNXZ3O1xyXG4gIH1cclxuICBcclxuYFxyXG5jb25zdCBMZWZ0Qm94ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleC1ncm93OiAxO1xyXG5gXHJcbmNvbnN0IFN0b2NrID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBwYWRkaW5nOiAycHggNnB4O1xyXG4gIGJhY2tncm91bmQ6ICR7Z3JleVs4MDBdfTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgd2lkdGg6IG1heC1jb250ZW50O1xyXG5gXHJcbmNvbnN0IFByaWNlID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuYFxyXG5jb25zdCBCdW4gPSBzdHlsZWQuZGl2YFxyXG4gICYmJiB7XHJcbiAgICAuTXVpQnV0dG9uQmFzZS1yb290IHtcclxuICAgICAgcGFkZGluZzogNHB4IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcbmV4cG9ydCBjb25zdCBQcm9kdWN0SXRlbU9uZVJvdyA9ICh7cHJvZHVjdH06IHsgcHJvZHVjdDogUHJvZHVjdCB9KSA9PiB7XHJcbiAgY29uc3Qge2FjdGlvbnM6YWN0aW9uc1VwZGF0ZVNob3BDYXJ0TW9kZWx9ID0gdXNlU3RvcmVNb2RlbCh1cGRhdGVTaG9wQ2FydE1vZGVsKVxyXG4gIGNvbnN0IHtzdGF0ZTogc3RhdGVNZSwgYWN0aW9uczogYWN0aW9uc01lfSA9IHVzZVN0b3JlTW9kZWwobWVNb2RlbClcclxuICBjb25zdCB7YWN0aW9uczogYWN0aW9uc1BNfSA9IHVzZVN0b3JlTW9kZWwocHJvZHVjdE1vZGVsKVxyXG4gIGNvbnN0IHthY3Rpb25zOiBhY3Rpb25zU2hvcENhcnR9ID0gdXNlU3RvcmVNb2RlbChzaG9wQ2FydE1vZGVsKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFzdGF0ZU1lLnVzZXIuaWQpIHtcclxuICAgICAgYWN0aW9uc01lLmdldExvZ2luVXNlcigpXHJcbiAgICB9XHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiA8Um93Qm94IGtleT17YFByb2R1Y3RJdGVtT25lUm93XyR7cHJvZHVjdC5pZH1gfT5cclxuICAgIDxJbWc+XHJcbiAgICAgIDxpbWcgc3JjPXtkZWFsSW1nVXJsKHByb2R1Y3Q/LmltZz8uWzBdPy51cmwpfVxyXG4gICAgICAgICAgIGFsdD1cIlwiLz5cclxuICAgIDwvSW1nPlxyXG4gICAgPExlZnRCb3g+XHJcbiAgICAgIDxtYWluPntwcm9kdWN0Lm5hbWV9e3Byb2R1Y3Qud2VpZ2h0fXtwcm9kdWN0LnVuaXR9PC9tYWluPlxyXG4gICAgICA8U3RvY2s+e2xzKCflvZPliY3liankvZknKX06IHtwcm9kdWN0LnN0b2NrfTwvU3RvY2s+XHJcbiAgICAgIDxQcmljZT5cclxuICAgICAgICA8UHJvZHVjdFByaWNlIHByb2R1Y3Q9e3Byb2R1Y3R9Lz5cclxuICAgICAgPC9QcmljZT5cclxuICAgICAge3N0YXRlTWUudXNlcj8uaWQgJiYgPEJ1bj5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGZ1bGxXaWR0aD17dHJ1ZX1cclxuICAgICAgICAgICAgY29sb3I9eydzZWNvbmRhcnknfVxyXG4gICAgICAgICAgICB2YXJpYW50PXsnY29udGFpbmVkJ31cclxuICAgICAgICAgICAgb25DbGljaz17YXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGFjdGlvbnNVcGRhdGVTaG9wQ2FydE1vZGVsLm9wZW5DbGljaygpXHJcbiAgICAgICAgICAgICAgaWYgKHJlcz8ubnVtID4gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKChhd2FpdCBhY3Rpb25zUE0udXBkYXRlTnVtU2hvcENhcnQoe1xyXG4gICAgICAgICAgICAgICAgICBwcm9kdWN0LFxyXG4gICAgICAgICAgICAgICAgICBudW1iZXI6IH5+cmVzPy5udW0sXHJcbiAgICAgICAgICAgICAgICB9KSk/LnVwZGF0ZU51bVNob3BDYXJ0Py5pZCkge1xyXG4gICAgICAgICAgICAgICAgICBzaG93TWVzc2FnZSgn5pON5L2c5oiQ5YqfJylcclxuICAgICAgICAgICAgICAgICAgYWN0aW9uc1Nob3BDYXJ0LmdldExpc3QoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8U2hvcHBpbmdDYXJ0SWNvbi8+XHJcbiAgICAgICAgICB7bHMoJ+WKoOWFpei0reeJqei9picpfVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L0J1bj59XHJcbiAgICA8L0xlZnRCb3g+XHJcbiAgICA8VXBkYXRlU2hvcENhcnQvPlxyXG4gIDwvUm93Qm94PlxyXG59XHJcblxyXG5jb25zdCBHcm91cEJveCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuYFxyXG5jb25zdCBHcm91cEltZyA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDM1dnc7XHJcbiAgaGVpZ2h0OiAzNXZ3O1xyXG4gIG1hcmdpbi1yaWdodDogMTZweDtcclxuICA+IGltZyB7XHJcbiAgICB3aWR0aDogMzV2dztcclxuICAgIGhlaWdodDogMzV2dztcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICB9XHJcbmBcclxuY29uc3QgUmlnaHRCb3ggPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuYFxyXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5kaXZgXHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbmBcclxuY29uc3QgTWFya2V0UHJpY2UgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBjb2xvcjogJHtncmV5WzcwMF19O1xyXG4gID4gc3BhbiB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuICB9XHJcbmBcclxuY29uc3QgT3V0UHJpY2UgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBjb2xvcjogJHttcFN0eWxlLnJlZH07XHJcbiAgZmxleC1ncm93OiAxO1xyXG5gXHJcbmNvbnN0IEFjdGlvbiA9IHN0eWxlZC5kaXZgXHJcbmBcclxuZXhwb3J0IGNvbnN0IEdyb3VwUHJvZHVjdEl0ZW0gPSAoe3Byb2R1Y3R9OiB7IHByb2R1Y3Q6IFByb2R1Y3QgfSkgPT4ge1xyXG4gIGNvbnN0IHtzdGF0ZTogc3RhdGVNZSwgYWN0aW9uczogYWN0aW9uc01lfSA9IHVzZVN0b3JlTW9kZWwobWVNb2RlbClcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFzdGF0ZU1lLnVzZXIuaWQpIHtcclxuICAgICAgYWN0aW9uc01lLmdldExvZ2luVXNlcigpXHJcbiAgICB9XHJcbiAgfSwgW10pXHJcbiAgY29uc29sZS5sb2cocHJvZHVjdClcclxuXHJcbiAgcmV0dXJuIDxHcm91cEJveCBrZXk9e2BHcm91cEJveF8ke3Byb2R1Y3QuaWR9YH0+XHJcbiAgICA8R3JvdXBJbWc+XHJcbiAgICAgIDxpbWcgc3JjPXtkZWFsSW1nVXJsKHByb2R1Y3Q/LmltZz8uWzBdPy51cmwpfVxyXG4gICAgICAgICAgIGFsdD1cIlwiLz5cclxuICAgIDwvR3JvdXBJbWc+XHJcbiAgICA8UmlnaHRCb3g+XHJcbiAgICAgIDxUaXRsZT57cHJvZHVjdC5uYW1lfSh7cHJvZHVjdC5ncm91cFJlbWFya30ve3Byb2R1Y3QuZ3JvdXBBbW91bnR9e3Byb2R1Y3QuZ3JvdXBBbW91bnRVbml0U3RyaW5nfS97cHJvZHVjdC5ncm91cFByZWNpc2lvblN0cmluZ30pPC9UaXRsZT5cclxuICAgICAgPE1hcmtldFByaWNlPlxyXG4gICAgICAgIHtscygn5biC5Zy65Lu3Jyl9XHJcbiAgICAgICAgPHNwYW4+e2RlYWxNb25leShwcm9kdWN0LnByaWNlTWFya2V0KX08L3NwYW4+XHJcbiAgICAgIDwvTWFya2V0UHJpY2U+XHJcbiAgICAgIDxPdXRQcmljZT5cclxuICAgICAgICB7bHMoJ+WfuuWHhuS7t+agvCcpfVxyXG4gICAgICAgIDxzcGFuPntkZWFsTW9uZXkocHJvZHVjdC5wcmljZU91dCl9PC9zcGFuPlxyXG4gICAgICA8L091dFByaWNlPlxyXG4gICAgICA8QWN0aW9uPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgdmFyaWFudD17J2NvbnRhaW5lZCd9XHJcbiAgICAgICAgICAgIGNvbG9yPXsnc2Vjb25kYXJ5J31cclxuICAgICAgICAgICAgZnVsbFdpZHRoPXt0cnVlfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgcm91dGVyLnB1c2goYC9ncm91cFByb2R1Y3QvW2lkXWAsIGAvZ3JvdXBQcm9kdWN0LyR7cHJvZHVjdC5pZH1gKVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxBZGRDaXJjbGVPdXRsaW5lSWNvbi8+XHJcbiAgICAgICAgICB7bHMoJ+aLvOS4gOS4qicpfVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L0FjdGlvbj5cclxuICAgIDwvUmlnaHRCb3g+XHJcbiAgPC9Hcm91cEJveD5cclxufVxyXG5cclxuIiwiaW1wb3J0IHtCdXR0b24sIERpYWxvZywgRGlhbG9nQ29udGVudCwgRGlhbG9nVGl0bGUsIFRleHRGaWVsZH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtsc30gZnJvbSAnLi4vLi4vdG9vbHMvZGVhbEtleSdcclxuaW1wb3J0IHtkaWFsb2dNb2RlbEZhY3Rvcnl9IGZyb20gJy4uLy4uL2NvbW1vbk1vZGVsL2RpYWxvZydcclxuaW1wb3J0IHt1c2VTdG9yZU1vZGVsfSBmcm9tICcuLi8uLi9Nb2RlbEFjdGlvbi91c2VTdG9yZSdcclxuaW1wb3J0IHttZXJnZVR3b01vZGVsLCBtb2RlbEZhY3Rvcnl9IGZyb20gJy4uLy4uL01vZGVsQWN0aW9uL21vZGVsVXRpbCdcclxuaW1wb3J0IHtzZXRGb3JtfSBmcm9tICcuLi8uLi90b29scy9jb21tb25BY3Rpb24nXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlU2hvcENhcnRNb2RlbCA9IG1lcmdlVHdvTW9kZWwoZGlhbG9nTW9kZWxGYWN0b3J5KCdVcGRhdGVTaG9wQ2FydE1vZGVsJywge30pLCBtb2RlbEZhY3RvcnkoJ3VwZGF0ZScsIHtcclxuICBmb3JtOiB7XHJcbiAgICBudW06IDEsXHJcbiAgfSxcclxufSwge1xyXG4gIHNldEZvcm06IHNldEZvcm0sXHJcbn0pKVxyXG5cclxuY29uc3QgRm9vdGVyID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgVXBkYXRlU2hvcENhcnQgPSAoKSA9PiB7XHJcbiAgY29uc3Qge2FjdGlvbnM6IGFjdGlvbnNVcGRhdGVTaG9wQ2FydE1vZGVsLCBzdGF0ZTogc3RhdGVVcGRhdGVTaG9wQ2FydE1vZGVsfSA9IHVzZVN0b3JlTW9kZWwodXBkYXRlU2hvcENhcnRNb2RlbClcclxuICByZXR1cm4gPERpYWxvZ1xyXG4gICAgICBvcGVuPXtzdGF0ZVVwZGF0ZVNob3BDYXJ0TW9kZWwub3Blbn1cclxuICAgICAgb25DbG9zZT17YWN0aW9uc1VwZGF0ZVNob3BDYXJ0TW9kZWwub25DbG9zZX1cclxuICA+XHJcbiAgICA8RGlhbG9nVGl0bGU+e2xzKCfmt7vliqDmlbDph48nKX08L0RpYWxvZ1RpdGxlPlxyXG4gICAgPERpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgIHR5cGU9eydudW1iZXInfVxyXG4gICAgICAgICAgdmFsdWU9e3N0YXRlVXBkYXRlU2hvcENhcnRNb2RlbC5mb3JtLm51bX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBhY3Rpb25zVXBkYXRlU2hvcENhcnRNb2RlbC5zZXRGb3JtKFsnbnVtJywgZXZlbnQudGFyZ2V0LnZhbHVlXSl9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxGb290ZXI+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB2YXJpYW50PXsnY29udGFpbmVkJ31cclxuICAgICAgICAgICAgY29sb3I9eydzZWNvbmRhcnknfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc3RhdGVVcGRhdGVTaG9wQ2FydE1vZGVsLm9wZW5SZXNvbHZlKHtcclxuICAgICAgICAgICAgICAgIG51bTogc3RhdGVVcGRhdGVTaG9wQ2FydE1vZGVsLmZvcm0ubnVtLFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgYWN0aW9uc1VwZGF0ZVNob3BDYXJ0TW9kZWwub25DbG9zZSgpXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPntscygn56Gu5a6aJyl9PC9CdXR0b24+XHJcbiAgICAgIDwvRm9vdGVyPlxyXG4gICAgPC9EaWFsb2dDb250ZW50PlxyXG4gIDwvRGlhbG9nPlxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtDYXJvdXNlbH0gZnJvbSAncmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbCdcclxuaW1wb3J0IHtkZWFsSW1nVXJsfSBmcm9tICcuLi8uLi90b29scy9pbWcnXHJcblxyXG5jb25zdCBDdXNDYXJvdXNlbCA9ICh7ZGF0YUxpc3QsIG9uQ2xpY2tJdGVtLCBoZWlnaHR9OiB7IGhlaWdodD86IHN0cmluZywgZGF0YUxpc3Q6IGFueVtdLCBvbkNsaWNrSXRlbT86IChpbmRleDogbnVtYmVyLCBpdGVtOiBSZWFjdC5SZWFjdE5vZGUpID0+IHZvaWQgfSkgPT4gKFxyXG4gICAgPENhcm91c2VsXHJcbiAgICAgICAgYXV0b1BsYXk9e3RydWV9XHJcbiAgICAgICAgc2hvd1RodW1icz17ZmFsc2V9XHJcbiAgICAgICAgc2hvd0Fycm93cz17ZmFsc2V9XHJcbiAgICAgICAgc2hvd1N0YXR1cz17ZmFsc2V9XHJcbiAgICAgICAgaW5maW5pdGVMb29wPXt0cnVlfVxyXG4gICAgICAgIG9uQ2xpY2tJdGVtPXtvbkNsaWNrSXRlbX1cclxuICAgID5cclxuICAgICAge2RhdGFMaXN0Py5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBrZXk9e2BDYXJvdXNlbF8ke2l0ZW0uaWR9YH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3toZWlnaHQ6IGhlaWdodH19XHJcbiAgICAgICAgICAgICAgICBzcmM9e2RlYWxJbWdVcmwoaXRlbS5pbWdVcmwpfVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiXCIvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgPC9DYXJvdXNlbD5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3VzQ2Fyb3VzZWxcclxuIiwiaW1wb3J0IHtncWx9IGZyb20gJ2Fwb2xsby1ib29zdCdcclxuXHJcbmV4cG9ydCBjb25zdCBmcmFnbWVudCA9IHtcclxuICBDYXRlZ29yeUZpZWxkczogZ3FsYFxyXG4gICAgICBmcmFnbWVudCBDYXRlZ29yeSBvbiBDYXRlZ29yeSB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgICAgdXBkYXRlVGltZVxyXG4gICAgICAgICAgaXNEZWxldGVcclxuICAgICAgICAgIGlzRW5hYmxlXHJcbiAgICAgICAgICByZW1hcmtcclxuICAgICAgICAgIHNvcnRcclxuICAgICAgICAgIHBhcmVudElkXHJcbiAgICAgICAgICBmdWxsUGFyZW50SWRcclxuICAgICAgICAgIG51bWJlclxyXG4gICAgICAgICAgdXNlcklkXHJcbiAgICAgICAgICBpbWdVcmxcclxuICAgICAgfVxyXG4gIGAsXHJcbiAgVXNlckZpZWxkczogZ3FsYFxyXG4gICAgICBmcmFnbWVudCBVc2VyRmllbGRzIG9uIFVzZXIge1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIG5hbWVcclxuICAgICAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgICAgIGlzRGVsZXRlXHJcbiAgICAgICAgICBwYXNzd29yZFxyXG4gICAgICAgICAgdHlwZVxyXG4gICAgICB9XHJcbiAgYCxcclxuICBVc2VySW5mb0ZpZWxkczogZ3FsYFxyXG4gICAgICBmcmFnbWVudCBVc2VySW5mb0ZpZWxkcyBvbiBVc2VySW5mbyB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgICAgdXBkYXRlVGltZVxyXG4gICAgICAgICAgaXNEZWxldGVcclxuICAgICAgICAgIHVzZXJJZFxyXG4gICAgICAgICAgcGhvbmVcclxuICAgICAgICAgIGVtYWlsXHJcbiAgICAgICAgICB1c2VyTGV2ZWxcclxuICAgICAgICAgIHBpY2t1cEFkZHJlc3NJZFxyXG4gICAgICB9XHJcbiAgYCxcclxuICBPcmRlckluZm9GaWVsZHM6IGdxbGBcclxuICAgICAgZnJhZ21lbnQgT3JkZXJJbmZvRmllbGRzIG9uIE9yZGVySW5mbyB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgICAgdXBkYXRlVGltZVxyXG4gICAgICAgICAgaXNEZWxldGVcclxuICAgICAgICAgIG51bWJlclxyXG4gICAgICAgICAgc3RhdGVcclxuICAgICAgICAgIGFjdHVhbGx5UGFpZFxyXG4gICAgICAgICAgYWRkcmVzc0lkXHJcbiAgICAgICAgICBwYXltZW50TWV0aG9kQ2FyZElkXHJcbiAgICAgICAgICBzdWJ0b3RhbFxyXG4gICAgICAgICAgY291cG9uRGlzY291bnRcclxuICAgICAgICAgIHZpcERpc2NvdW50XHJcbiAgICAgICAgICB0cmFuc3BvcnRhdGlvbkNvc3RzXHJcbiAgICAgICAgICBzYWxlVGF4XHJcbiAgICAgICAgICBvcmRlcklkXHJcbiAgICAgICAgICBkaXNjb3VudFByb2R1Y3RUb3RhbFxyXG4gICAgICAgICAgZmluaXNoVGltZVxyXG4gICAgICAgICAgcGlja1VwVGltZVxyXG4gICAgICAgICAgcGlja1VwVHlwZVxyXG4gICAgICAgICAgZ2VuZXJhdGVDb2luXHJcbiAgICAgICAgICBkZWR1Y3RDb2luXHJcbiAgICAgICAgICBzZWxmQWRkcmVzc0lkXHJcbiAgICAgICAgICBjdXJyZW50VXNlckxldmVsXHJcbiAgICAgIH1cclxuICBgLFxyXG4gIFJPcmRlclByb2R1Y3RGaWVsZHM6IGdxbGBcclxuICAgICAgZnJhZ21lbnQgUk9yZGVyUHJvZHVjdEZpZWxkcyBvbiBST3JkZXJQcm9kdWN0IHtcclxuICAgICAgICAgIGNvdW50XHJcbiAgICAgICAgICBjcmVhdGVUaW1lXHJcbiAgICAgICAgICBkZWFsUHJpY2VcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBpc0RlbGV0ZVxyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgb3JkZXJJZFxyXG4gICAgICAgICAgcHJvZHVjdElkXHJcbiAgICAgICAgICB1cGRhdGVUaW1lXHJcbiAgICAgIH1cclxuICBgLFxyXG4gIFByb2R1Y3RGaWVsZHM6IGdxbGBcclxuICAgICAgZnJhZ21lbnQgUHJvZHVjdEZpZWxkcyBvbiBQcm9kdWN0IHtcclxuICAgICAgICAgIGJyYW5kXHJcbiAgICAgICAgICBjYXRlZ29yeUlkXHJcbiAgICAgICAgICBjcmVhdGVUaW1lXHJcbiAgICAgICAgICBncm91cEFtb3VudFxyXG4gICAgICAgICAgZ3JvdXBBbW91bnRVbml0XHJcbiAgICAgICAgICBncm91cFByZWNpc2lvblxyXG4gICAgICAgICAgZ3JvdXBSZW1hcmtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBpc0RlbGV0ZVxyXG4gICAgICAgICAgaXNFbmFibGVcclxuICAgICAgICAgIGlzR3JvdXBcclxuICAgICAgICAgIGlzSG90XHJcbiAgICAgICAgICBpc05ld1xyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgbnVtYmVyXHJcbiAgICAgICAgICBwYWNraW5nVW5pdFxyXG4gICAgICAgICAgcHJpY2VJblxyXG4gICAgICAgICAgcHJpY2VNYXJrZXRcclxuICAgICAgICAgIHByaWNlT3V0XHJcbiAgICAgICAgICByZW1hcmtcclxuICAgICAgICAgIHNoZWx2ZXNUeXBlc1xyXG4gICAgICAgICAgc29ydFxyXG4gICAgICAgICAgc3RvY2tcclxuICAgICAgICAgIHVuaXRcclxuICAgICAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgICAgIHdlaWdodFxyXG4gICAgICAgICAgdW5pdFN0cmluZ1xyXG4gICAgICAgICAgZ3JvdXBQcmVjaXNpb25TdHJpbmdcclxuICAgICAgICAgIGdyb3VwQW1vdW50VW5pdFN0cmluZ1xyXG4gICAgICAgICAgcGFja2luZ1VuaXRTdHJpbmdcclxuICAgICAgfVxyXG4gIGAsXHJcbiAgSW1nRmllbGRzOiBncWxgXHJcbiAgICBmcmFnbWVudCBJbWdGaWVsZHMgb24gUHJvZHVjdEltZyB7XHJcbiAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgIGlkXHJcbiAgICAgICAgaXNEZWxldGVcclxuICAgICAgICBuYW1lXHJcbiAgICAgICAgbnVtYmVyXHJcbiAgICAgICAgcHJvZHVjdElkXHJcbiAgICAgICAgdXBkYXRlVGltZVxyXG4gICAgICAgIHVybFxyXG4gICAgfSBcclxuICBgLFxyXG4gIFVzZXJBZGRyZXNzRmllbGRzOiBncWxgXHJcbiAgICAgIGZyYWdtZW50IFVzZXJBZGRyZXNzRmllbGRzIG9uIFVzZXJBZGRyZXNzIHtcclxuICAgICAgICAgIGFkZHJlc3NcclxuICAgICAgICAgIGNpdHlcclxuICAgICAgICAgIGNvbWJpbmVBZGRyZXNzXHJcbiAgICAgICAgICBjb250YWN0SW5mb3JtYXRpb25cclxuICAgICAgICAgIGNvbnRhY3RVc2VyTmFtZVxyXG4gICAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgICAgZGlzdHJpY3RcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBpc0RlZmF1bHRcclxuICAgICAgICAgIGlzRGVsZXRlXHJcbiAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICBwcm92aW5jZVxyXG4gICAgICAgICAgdXBkYXRlVGltZVxyXG4gICAgICAgICAgdXNlcklkXHJcbiAgICAgICAgICB6aXBcclxuICAgICAgfVxyXG4gIGAsXHJcbiAgVXNlclBheUNhcmRGaWVsZHM6IGdxbGBcclxuICAgICAgZnJhZ21lbnQgVXNlclBheUNhcmRGaWVsZHMgb24gVXNlclBheUNhcmQge1xyXG4gICAgICAgICAgYWRkcmVzc0RldGFpbFxyXG4gICAgICAgICAgY2l0eVxyXG4gICAgICAgICAgY29kZVxyXG4gICAgICAgICAgY29udGFjdFxyXG4gICAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgICAgZXhwaXJhdGlvblRpbWVcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBpc0RlZmF1bHRcclxuICAgICAgICAgIGlzRGVsZXRlXHJcbiAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICBudW1iZXJcclxuICAgICAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgICAgIHVzZXJJZFxyXG4gICAgICAgICAgdXNlck5hbWVcclxuICAgICAgICAgIHppcENvZGVcclxuICAgICAgfVxyXG4gIGAsXHJcbiAgU2hvcENhcnRGaWVsZHM6IGdxbGBcclxuICAgICAgZnJhZ21lbnQgU2hvcENhcnRGaWVsZHMgb24gU2hvcENhcnQge1xyXG4gICAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIGlzRGVsZXRlXHJcbiAgICAgICAgICBpc05leHRcclxuICAgICAgICAgIG5hbWVcclxuICAgICAgICAgIG51bWJlclxyXG4gICAgICAgICAgcHJvZHVjdElkXHJcbiAgICAgICAgICB1cGRhdGVUaW1lXHJcbiAgICAgICAgICB1c2VySWRcclxuICAgICAgfVxyXG4gIGAsXHJcbiAgRGF0YUNvbmZpZ0ZpZWxkczogZ3FsYFxyXG4gICAgZnJhZ21lbnQgRGF0YUNvbmZpZ0ZpZWxkcyBvbiBEYXRhQ29uZmlnIHtcclxuICAgICAgICBjcmVhdGVUaW1lXHJcbiAgICAgICAgaWRcclxuICAgICAgICBpc0RlbGV0ZVxyXG4gICAgICAgIG5hbWVcclxuICAgICAgICByZW1hcmtcclxuICAgICAgICB0eXBlXHJcbiAgICAgICAgdXBkYXRlVGltZVxyXG4gICAgICAgIHZhbHVlXHJcbiAgICB9XHJcbiAgYCxcclxuICBEaWN0RmllbGRzOiBncWxgXHJcbiAgICBmcmFnbWVudCBEaWN0RmllbGRzIG9uIERpY3Qge1xyXG4gICAgICAgIGNvZGVcclxuICAgICAgICBjcmVhdGVUaW1lXHJcbiAgICAgICAgZGljdFR5cGVDb2RlXHJcbiAgICAgICAgaWRcclxuICAgICAgICBpc0RlbGV0ZVxyXG4gICAgICAgIGlzRGlzYWJsZVxyXG4gICAgICAgIG5hbWVcclxuICAgICAgICByZW1hcmtcclxuICAgICAgICBzb3J0XHJcbiAgICAgICAgdXBkYXRlVGltZVxyXG4gICAgfVxyXG4gIGAsXHJcbiAgR3JvdXBRdWV1ZUZpZWxkczogZ3FsYFxyXG4gICAgICBmcmFnbWVudCBHcm91cFF1ZXVlRmllbGRzIG9uIEdyb3VwUXVldWUge1xyXG4gICAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgICAgZmlsbEFtb3VudFxyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIGlzRGVsZXRlXHJcbiAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICBwcm9kdWN0SWRcclxuICAgICAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgICAgIHN1bUZpbGxBbW91bnRcclxuICAgICAgfVxyXG4gIGAsXHJcbiAgR3JvdXBPcmRlckZpZWxkczogZ3FsYFxyXG4gICAgICBmcmFnbWVudCBHcm91cE9yZGVyRmllbGRzIG9uIEdyb3VwT3JkZXIge1xyXG4gICAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgICAgZ3JvdXBRdWV1ZUlkXHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgaXNEZWxldGVcclxuICAgICAgICAgIG5hbWVcclxuICAgICAgICAgIG9yZGVyR3JvdXBBbW91bnRcclxuICAgICAgICAgIG9yZGVySWRcclxuICAgICAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgICAgIHVzZXJJZFxyXG4gICAgICB9XHJcbiAgYCxcclxufVxyXG4iLCJpbXBvcnQge2dxbH0gZnJvbSAnYXBvbGxvLWJvb3N0J1xyXG5pbXBvcnQge2ZyYWdtZW50fSBmcm9tICcuL2ZyYWdtZW50J1xyXG5pbXBvcnQge0RpY3RUeXBlRW51bX0gZnJvbSAnLi4vLi4vc3NfY29tbW9uL2VudW0nXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VXNlckxpc3REb2MgPSBncWxgXHJcbiAgICBxdWVyeSByZWZhY3RvcmVkNjQzKCRkYXRhOiBVc2VyTGlzdElucHV0ISkge1xyXG4gICAgICAgIHVzZXJMaXN0KHVzZXJMaXN0SW5wdXQ6ICRkYXRhKSB7XHJcbiAgICAgICAgICAgIGxpc3Qge1xyXG4gICAgICAgICAgICAgICAgb3JkZXJDb2luTmV4dE1vbnRoXHJcbiAgICAgICAgICAgICAgICBvcmRlckNvaW5DdXJyZW50TW9udGhcclxuICAgICAgICAgICAgICAgIG9yZGVyQW1vdW50Q3VycmVudFllYXJcclxuICAgICAgICAgICAgICAgIC4uLnVzZXJJbmZvXHJcbiAgICAgICAgICAgICAgICAuLi5Vc2VyRmllbGRzXHJcbiAgICAgICAgICAgICAgICAuLi5vcmRlckluZm9cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0b3RhbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZyYWdtZW50IG9yZGVySW5mbyBvbiBVc2Vye1xyXG4gICAgICAgIG9yZGVySW5mb3tcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICBjcmVhdGVUaW1lXHJcbiAgICAgICAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgICAgICAgaXNEZWxldGVcclxuICAgICAgICAgICAgbnVtYmVyXHJcbiAgICAgICAgICAgIHN0YXRlXHJcbiAgICAgICAgICAgIGFjdHVhbGx5UGFpZFxyXG4gICAgICAgICAgICBhZGRyZXNzSWRcclxuICAgICAgICAgICAgcGF5bWVudE1ldGhvZENhcmRJZFxyXG4gICAgICAgICAgICBzdWJ0b3RhbFxyXG4gICAgICAgICAgICBjb3Vwb25EaXNjb3VudFxyXG4gICAgICAgICAgICB2aXBEaXNjb3VudFxyXG4gICAgICAgICAgICB0cmFuc3BvcnRhdGlvbkNvc3RzXHJcbiAgICAgICAgICAgIHNhbGVUYXhcclxuICAgICAgICAgICAgb3JkZXJJZFxyXG4gICAgICAgICAgICBkaXNjb3VudFByb2R1Y3RUb3RhbFxyXG4gICAgICAgICAgICBmaW5pc2hUaW1lXHJcbiAgICAgICAgICAgIHBpY2tVcFRpbWVcclxuICAgICAgICAgICAgcGlja1VwVHlwZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZyYWdtZW50IFVzZXJGaWVsZHMgb24gVXNlciB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBuYW1lXHJcbiAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgICBpc0RlbGV0ZVxyXG4gICAgICAgIHBhc3N3b3JkXHJcbiAgICAgICAgdHlwZVxyXG4gICAgfVxyXG4gICAgZnJhZ21lbnQgdXNlckluZm8gb24gVXNlcntcclxuICAgICAgICB1c2VySW5mb3tcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICBjcmVhdGVUaW1lXHJcbiAgICAgICAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgICAgICAgaXNEZWxldGVcclxuICAgICAgICAgICAgdXNlcklkXHJcbiAgICAgICAgICAgIHBob25lXHJcbiAgICAgICAgICAgIGVtYWlsXHJcbiAgICAgICAgICAgIHVzZXJMZXZlbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IGdldERhdGFDb25maWcgPSBncWxgXHJcbiAgICBxdWVyeSAoJGRhdGE6IERhdGFDb25maWdJdGVtSW5wdXQpIHtcclxuICAgICAgICBnZXREYXRhQ29uZmlnKGRhdGFDb25maWdJbnB1dDogJGRhdGEpIHtcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICBjcmVhdGVUaW1lXHJcbiAgICAgICAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgICAgICAgaXNEZWxldGVcclxuICAgICAgICAgICAgdHlwZVxyXG4gICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICByZW1hcmtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBob21lQ2Fyb3VzZWxJbWdzID0gZ3FsYFxyXG4gICAgcXVlcnkgcXVlcnlfcXVlcnlfdGVzdExvbmcxMzcoJGRhdGE6IERhdGFDb25maWdJdGVtSW5wdXQpIHtcclxuICAgICAgICBob21lQ2Fyb3VzZWxJbWdzKGRhdGFDb25maWdJbnB1dDogJGRhdGEpIHtcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICBjcmVhdGVUaW1lXHJcbiAgICAgICAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgICAgICAgaXNEZWxldGVcclxuICAgICAgICAgICAgdHlwZVxyXG4gICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICByZW1hcmtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBjYXRlZ29yeUxpc3QgPSBncWxgXHJcbiAgICBxdWVyeSBxdWVyeV9xdWVyeV90ZXN0TG9uZzU2NSgkZGF0YTogQ2F0ZWdvcnlMaXN0SW5wdXQpIHtcclxuICAgICAgICBjYXRlZ29yeUxpc3QoZGF0YTogJGRhdGEpIHtcclxuICAgICAgICAgICAgdG90YWxcclxuICAgICAgICAgICAgbGlzdCB7XHJcbiAgICAgICAgICAgICAgICAuLi5DYXRlZ29yeVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5DYXRlZ29yeUZpZWxkc31cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IGRvYyA9IHtcclxuICBnZXRVc2VyTGlzdERvYyxcclxuICBjYXRlZ29yeUxpc3QsXHJcbiAgZ2V0RGF0YUNvbmZpZyxcclxuICBob21lQ2Fyb3VzZWxJbWdzLFxyXG4gIHJlZ2lzdGVyVXNlcjogZ3FsYFxyXG4gICAgICBtdXRhdGlvbiBtdXRhdGlvbl9yZWdpc3RlclVzZTk5OCgkZGF0YTogVXNlckl0ZW1JbnB1dCkge1xyXG4gICAgICAgICAgcmVnaXN0ZXJVc2VyKGRhdGE6ICRkYXRhKSB7XHJcbiAgICAgICAgICAgICAgdG9rZW5cclxuICAgICAgICAgICAgICByZWZyZXNodG9rZW5cclxuICAgICAgICAgICAgICB1c2VyIHtcclxuICAgICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICBjcmVhdGVUaW1lXHJcbiAgICAgICAgICAgICAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgICAgICAgICAgICAgaXNEZWxldGVcclxuICAgICAgICAgICAgICAgICAgcGFzc3dvcmRcclxuICAgICAgICAgICAgICAgICAgdHlwZVxyXG4gICAgICAgICAgICAgICAgICB1c2VySW5mbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICBgLFxyXG4gIHJlZnJlc2hUb2tlbjogZ3FsYFxyXG4gICAgICBxdWVyeSByZWZyZXNoVG9rZW4oJGRhdGE6IFN0cmluZyEpIHtcclxuICAgICAgICAgIHJlZnJlc2hUb2tlbihyZWZyZXNodG9rZW46ICRkYXRhKSB7XHJcbiAgICAgICAgICAgICAgcmVmcmVzaHRva2VuXHJcbiAgICAgICAgICAgICAgdG9rZW5cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gIGAsXHJcbiAgbG9naW46IGdxbGBcclxuICAgICAgcXVlcnkgbG9naW4oJGRhdGE6IFVzZXJJdGVtSW5wdXQpIHtcclxuICAgICAgICAgIGxvZ2luKHVzZXI6ICRkYXRhKSB7XHJcbiAgICAgICAgICAgICAgdG9rZW5cclxuICAgICAgICAgICAgICByZWZyZXNodG9rZW5cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gIGAsXHJcbiAgb25lVXNlcjogZ3FsYFxyXG4gICAgICBxdWVyeSBvbmVVc2VyIHtcclxuICAgICAgICAgIG9uZVVzZXIge1xyXG4gICAgICAgICAgICAgIC4uLlVzZXJGaWVsZHNcclxuICAgICAgICAgICAgICB1c2VySW5mbyB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLlVzZXJJbmZvRmllbGRzXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICR7ZnJhZ21lbnQuVXNlckluZm9GaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuVXNlckZpZWxkc31cclxuICBgLFxyXG4gIG9yZGVyTGlzdDogZ3FsYFxyXG4gICAgICBxdWVyeSBvcmRlckxpc3QoJGRhdGE6IE9yZGVySW5wdXQpe1xyXG4gICAgICAgICAgb3JkZXJMaXN0IChvcmRlcklucHV0OiAkZGF0YSwgZnJvbVVzZXI6IHRydWUpIHtcclxuICAgICAgICAgICAgICBsaXN0IHtcclxuICAgICAgICAgICAgICAgICAgLi4uT3JkZXJJbmZvRmllbGRzXHJcbiAgICAgICAgICAgICAgICAgIHJPcmRlclByb2R1Y3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgLi4uUk9yZGVyUHJvZHVjdEZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uUHJvZHVjdEZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLkltZ0ZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAke2ZyYWdtZW50Lk9yZGVySW5mb0ZpZWxkc31cclxuICAgICAgJHtmcmFnbWVudC5ST3JkZXJQcm9kdWN0RmllbGRzfVxyXG4gICAgICAke2ZyYWdtZW50LlByb2R1Y3RGaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuSW1nRmllbGRzfVxyXG4gIGAsXHJcbiAgb3JkZXJEZXRhaWw6IGdxbGBcclxuICAgICAgcXVlcnkgKCRpZDogU3RyaW5nKSB7XHJcbiAgICAgICAgICBzZWxmQWRkcmVzczogZ2V0RGF0YUNvbmZpZyhkYXRhQ29uZmlnSW5wdXQ6IHtcclxuICAgICAgICAgICAgICB0eXBlOiBcIiR7RGljdFR5cGVFbnVtLlNlbGZBZGRyZXNzfVwiXHJcbiAgICAgICAgICB9KSB7XHJcbiAgICAgICAgICAgICAgLi4uRGF0YUNvbmZpZ0ZpZWxkc1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgb3JkZXJEZXRhaWwoaWQ6ICRpZCkge1xyXG4gICAgICAgICAgICAgIC4uLk9yZGVySW5mb0ZpZWxkc1xyXG4gICAgICAgICAgICAgIHJPcmRlclByb2R1Y3Qge1xyXG4gICAgICAgICAgICAgICAgICAuLi5ST3JkZXJQcm9kdWN0RmllbGRzXHJcbiAgICAgICAgICAgICAgICAgIHByb2R1Y3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgLi4uUHJvZHVjdEZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5JbWdGaWVsZHNcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB1c2VyIHtcclxuICAgICAgICAgICAgICAgICAgLi4uVXNlckZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICB1c2VySW5mbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAuLi5Vc2VySW5mb0ZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHVzZXJBZGRyZXNzIHtcclxuICAgICAgICAgICAgICAgICAgLi4uVXNlckFkZHJlc3NGaWVsZHNcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgdXNlclBheUNhcmQge1xyXG4gICAgICAgICAgICAgICAgICAuLi5Vc2VyUGF5Q2FyZEZpZWxkc1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAke2ZyYWdtZW50LkRhdGFDb25maWdGaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuT3JkZXJJbmZvRmllbGRzfVxyXG4gICAgICAke2ZyYWdtZW50LlJPcmRlclByb2R1Y3RGaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuUHJvZHVjdEZpZWxkc31cclxuICAgICAgJHtmcmFnbWVudC5JbWdGaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuVXNlckZpZWxkc31cclxuICAgICAgJHtmcmFnbWVudC5Vc2VySW5mb0ZpZWxkc31cclxuICAgICAgJHtmcmFnbWVudC5Vc2VyUGF5Q2FyZEZpZWxkc31cclxuICAgICAgJHtmcmFnbWVudC5Vc2VyQWRkcmVzc0ZpZWxkc31cclxuICBgLFxyXG4gIHVwZGF0ZVBhc3N3b3JkOiBncWxgXHJcbiAgICAgIG11dGF0aW9uICgkZGF0YTogVXBkYXRlUGFzc3dvcmRJbnB1dCkge1xyXG4gICAgICAgICAgdXBkYXRlUGFzc3dvcmQgKGRhdGE6ICRkYXRhKSB7XHJcbiAgICAgICAgICAgICAgdXNlciB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLlVzZXJGaWVsZHNcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYXV0aEJvZHkge1xyXG4gICAgICAgICAgICAgICAgICB0b2tlblxyXG4gICAgICAgICAgICAgICAgICByZWZyZXNodG9rZW5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJHtmcmFnbWVudC5Vc2VyRmllbGRzfVxyXG4gIGAsXHJcbiAgcGF5Q2FyZExpc3RPbmVVc2VyOiBncWxgXHJcbiAgICAgIHF1ZXJ5IHtcclxuICAgICAgICAgIHBheUNhcmRMaXN0T25lVXNlciB7XHJcbiAgICAgICAgICAgICAgLi4uVXNlclBheUNhcmRGaWVsZHNcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAke2ZyYWdtZW50LlVzZXJQYXlDYXJkRmllbGRzfVxyXG4gIGAsXHJcbiAgdXNlclBheUNhcmQ6IGdxbGBcclxuICAgICAgcXVlcnkgKCRkYXRhOiBVc2VyUGF5Q2FyZEl0ZW1JbnB1dCkge1xyXG4gICAgICAgICAgdXNlclBheUNhcmQgKHVzZXJQYXlDYXJkOiAkZGF0YSkge1xyXG4gICAgICAgICAgICAgIC4uLlVzZXJQYXlDYXJkRmllbGRzXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJHtmcmFnbWVudC5Vc2VyUGF5Q2FyZEZpZWxkc31cclxuICBgLFxyXG4gIHNhdmVVc2VyUGF5Q2FyZDogZ3FsYFxyXG4gICAgICBtdXRhdGlvbiAoJGRhdGE6IFVzZXJQYXlDYXJkSXRlbUlucHV0KXtcclxuICAgICAgICAgIHNhdmVVc2VyUGF5Q2FyZCAodXNlclBheUNhcmQ6ICRkYXRhKSB7XHJcbiAgICAgICAgICAgICAgLi4uVXNlclBheUNhcmRGaWVsZHNcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAke2ZyYWdtZW50LlVzZXJQYXlDYXJkRmllbGRzfVxyXG4gIGAsXHJcbiAgc2V0VXNlclBheUNhcmREZWZhdWx0OiBncWxgXHJcbiAgICAgIG11dGF0aW9uICgkZGF0YTogVXNlclBheUNhcmRJdGVtSW5wdXQpIHtcclxuICAgICAgICAgIHNldFVzZXJQYXlDYXJkRGVmYXVsdCAodXNlclBheUNhcmQ6ICRkYXRhKSB7XHJcbiAgICAgICAgICAgICAgLi4uVXNlclBheUNhcmRGaWVsZHNcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAke2ZyYWdtZW50LlVzZXJQYXlDYXJkRmllbGRzfVxyXG4gIGAsXHJcbiAgcGlja3VwQWRkcmVzczogZ3FsYFxyXG4gICAgICBxdWVyeSB7XHJcbiAgICAgICAgICBnZXREYXRhQ29uZmlnKGRhdGFDb25maWdJbnB1dDoge1xyXG4gICAgICAgICAgICAgIHR5cGU6IFwiJHtEaWN0VHlwZUVudW0uU2VsZkFkZHJlc3N9XCJcclxuICAgICAgICAgIH0pIHtcclxuICAgICAgICAgICAgICAuLi5EYXRhQ29uZmlnRmllbGRzXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBvbmVVc2VyIHtcclxuICAgICAgICAgICAgICAuLi5Vc2VyRmllbGRzXHJcbiAgICAgICAgICAgICAgdXNlckluZm8ge1xyXG4gICAgICAgICAgICAgICAgICAuLi5Vc2VySW5mb0ZpZWxkc1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAke2ZyYWdtZW50LlVzZXJJbmZvRmllbGRzfVxyXG4gICAgICAke2ZyYWdtZW50LkRhdGFDb25maWdGaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuVXNlckZpZWxkc31cclxuICBgLFxyXG4gIHVwZGF0ZVVzZXJJbmZvOiBncWxgXHJcbiAgICAgIG11dGF0aW9uICgkdXNlckluZm86IFVzZXJJbmZvSXRlbUlucHV0KSB7XHJcbiAgICAgICAgICB1cGRhdGVVc2VySW5mbyAodXNlckluZm86ICR1c2VySW5mbykge1xyXG4gICAgICAgICAgICAgIC4uLlVzZXJJbmZvRmllbGRzXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJHtmcmFnbWVudC5Vc2VySW5mb0ZpZWxkc31cclxuICBgLFxyXG4gIHVzZXJBZGRyZXNzTGlzdE9uZVVzZXI6IGdxbGBcclxuICAgICAgcXVlcnkge1xyXG4gICAgICAgICAgdXNlckFkZHJlc3NMaXN0T25lVXNlciB7XHJcbiAgICAgICAgICAgICAgLi4uVXNlckFkZHJlc3NGaWVsZHNcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAke2ZyYWdtZW50LlVzZXJBZGRyZXNzRmllbGRzfVxyXG4gIGAsXHJcbiAgdXNlckFkZHJlc3M6IGdxbGBcclxuICAgICAgcXVlcnkgKCRkYXRhOiBVc2VyQWRkcmVzc0l0ZW1JbnB1dCkge1xyXG4gICAgICAgICAgdXNlckFkZHJlc3MgKHVzZXJBZGRyZXNzOiAkZGF0YSkge1xyXG4gICAgICAgICAgICAgIC4uLlVzZXJBZGRyZXNzRmllbGRzXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJHtmcmFnbWVudC5Vc2VyQWRkcmVzc0ZpZWxkc31cclxuICBgLFxyXG4gIHNhdmVVc2VyQWRkcmVzczogZ3FsYFxyXG4gICAgICBtdXRhdGlvbiAoJGRhdGE6IFVzZXJBZGRyZXNzSXRlbUlucHV0KXtcclxuICAgICAgICAgIHNhdmVVc2VyQWRkcmVzcyAodXNlckFkZHJlc3M6ICRkYXRhKSB7XHJcbiAgICAgICAgICAgICAgLi4uVXNlckFkZHJlc3NGaWVsZHNcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAke2ZyYWdtZW50LlVzZXJBZGRyZXNzRmllbGRzfVxyXG4gIGAsXHJcbiAgc2V0VXNlckFkZHJlc3NEZWZhdWx0OiBncWxgXHJcbiAgICAgIG11dGF0aW9uICgkZGF0YTogVXNlckFkZHJlc3NJdGVtSW5wdXQpIHtcclxuICAgICAgICAgIHNldFVzZXJBZGRyZXNzRGVmYXVsdCAodXNlckFkZHJlc3M6ICRkYXRhKSB7XHJcbiAgICAgICAgICAgICAgLi4uVXNlckFkZHJlc3NGaWVsZHNcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAke2ZyYWdtZW50LlVzZXJBZGRyZXNzRmllbGRzfVxyXG4gIGAsXHJcbiAgcHJvZHVjdHNJbkNhdGVnb3J5OiBncWxgXHJcbiAgICAgIHF1ZXJ5ICgkZGF0YTogQ2F0ZWdvcnlJdGVtSW5wdXQsICRwcm9kdWN0SXRlbUlucHV0OiBQcm9kdWN0SXRlbUlucHV0KSB7XHJcbiAgICAgICAgICBwcm9kdWN0c0luQ2F0ZWdvcnkoY2F0ZWdvcnlJdGVtSW5wdXQ6ICRkYXRhLCBwcm9kdWN0SXRlbUlucHV0OiAkcHJvZHVjdEl0ZW1JbnB1dCkge1xyXG4gICAgICAgICAgICAgIC4uLlByb2R1Y3RGaWVsZHNcclxuICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAuLi5JbWdGaWVsZHNcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjYXRlZ29yeUxpc3QoZGF0YToge1xyXG4gICAgICAgICAgICAgIGNhdGVnb3J5OiB7XHJcbiAgICAgICAgICAgICAgICAgIHBhcmVudENhdGVnb3J5OiAkZGF0YVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pIHtcclxuICAgICAgICAgICAgICB0b3RhbFxyXG4gICAgICAgICAgICAgIGxpc3Qge1xyXG4gICAgICAgICAgICAgICAgICAuLi5DYXRlZ29yeVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAke2ZyYWdtZW50LlByb2R1Y3RGaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuSW1nRmllbGRzfVxyXG4gICAgICAke2ZyYWdtZW50LkNhdGVnb3J5RmllbGRzfVxyXG4gIGAsXHJcbiAgY2F0ZWdvcnlMZXZlbDogZ3FsYFxyXG4gICAgICBxdWVyeSAoJGRhdGE6IENhdGVnb3J5SXRlbUlucHV0KSB7XHJcbiAgICAgICAgICBjYXRlZ29yeUxldmVsKGNhdGVnb3J5SXRlbUlucHV0OiAkZGF0YSlcclxuICAgICAgfVxyXG4gIGAsXHJcbiAgb25lQ2F0ZWdvcnk6IGdxbGBcclxuICAgICAgcXVlcnkgKCRkYXRhOiBDYXRlZ29yeUl0ZW1JbnB1dCkge1xyXG4gICAgICAgICAgb25lQ2F0ZWdvcnkoZGF0YTogJGRhdGEpIHtcclxuICAgICAgICAgICAgICAuLi5DYXRlZ29yeVxyXG4gICAgICAgICAgICAgIHBhcmVudENhdGVnb3J5IHtcclxuICAgICAgICAgICAgICAgICAgLi4uQ2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgICAgcGFyZW50Q2F0ZWdvcnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgLi4uQ2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAke2ZyYWdtZW50LkNhdGVnb3J5RmllbGRzfVxyXG4gIGAsXHJcbiAgcHJvZHVjdExpc3Q6IGdxbGBcclxuICAgICAgcXVlcnkgKCRwcm9kdWN0SW5wdXQ6IFByb2R1Y3RJdGVtSW5wdXQsICRvcmRlckJ5SW5wdXQ6IE9yZGVyQnlJbnB1dCkge1xyXG4gICAgICAgICAgcHJvZHVjdExpc3QocHJvZHVjdElucHV0OiAkcHJvZHVjdElucHV0LCBvcmRlckJ5SW5wdXQ6ICRvcmRlckJ5SW5wdXQpIHtcclxuICAgICAgICAgICAgICB0b3RhbFxyXG4gICAgICAgICAgICAgIGxpc3Qge1xyXG4gICAgICAgICAgICAgICAgICAuLi5Qcm9kdWN0RmllbGRzXHJcbiAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAuLi5JbWdGaWVsZHNcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAke2ZyYWdtZW50LlByb2R1Y3RGaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuSW1nRmllbGRzfVxyXG4gIGAsXHJcbiAgdXBkYXRlTnVtU2hvcENhcnQ6IGdxbGBcclxuICAgICAgbXV0YXRpb24gKCRzaG9wQ2FydDogU2hvcENhcnRJdGVtSW5wdXQsICR1cGRhdGVOdW06IEZsb2F0KSB7XHJcbiAgICAgICAgICB1cGRhdGVOdW1TaG9wQ2FydCAoc2hvcENhcnQ6ICRzaG9wQ2FydCwgdXBkYXRlTnVtOiAkdXBkYXRlTnVtKSB7XHJcbiAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICBudW1iZXJcclxuICAgICAgICAgICAgICBwcm9kdWN0IHtcclxuICAgICAgICAgICAgICAgICAgLi4uUHJvZHVjdEZpZWxkc1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB1c2VyIHtcclxuICAgICAgICAgICAgICAgICAgLi4uVXNlckZpZWxkc1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAke2ZyYWdtZW50LlByb2R1Y3RGaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuVXNlckZpZWxkc31cclxuICBgLFxyXG4gIHVzZXJTaG9wQ2FydExpc3Q6IGdxbGBcclxuICAgICAgcXVlcnkge1xyXG4gICAgICAgICAgc2hvcENhcnRMaXN0IHtcclxuICAgICAgICAgICAgICAuLi5TaG9wQ2FydEZpZWxkc1xyXG4gICAgICAgICAgICAgIHByb2R1Y3Qge1xyXG4gICAgICAgICAgICAgICAgICAuLi5Qcm9kdWN0RmllbGRzXHJcbiAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAuLi5JbWdGaWVsZHNcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAke2ZyYWdtZW50LlNob3BDYXJ0RmllbGRzfVxyXG4gICAgICAke2ZyYWdtZW50LlByb2R1Y3RGaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuSW1nRmllbGRzfVxyXG4gIGAsXHJcbiAgdXBkYXRlU2hvcENhcnQ6IGdxbGBcclxuICAgICAgbXV0YXRpb24gKCRzaG9wQ2FydDogU2hvcENhcnRJdGVtSW5wdXQpe1xyXG4gICAgICAgICAgdXBkYXRlU2hvcENhcnQgKHNob3BDYXJ0OiAkc2hvcENhcnQpIHtcclxuICAgICAgICAgICAgICAuLi5TaG9wQ2FydEZpZWxkc1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICR7ZnJhZ21lbnQuU2hvcENhcnRGaWVsZHN9XHJcbiAgYCxcclxuICBvcmRlckNvbmZpcm1JbmZvOiBncWxgXHJcbiAgICAgIHF1ZXJ5IHtcclxuICAgICAgICAgIGdldERhdGFDb25maWcoZGF0YUNvbmZpZ0lucHV0OiB7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCIke0RpY3RUeXBlRW51bS5TZWxmQWRkcmVzc31cIlxyXG4gICAgICAgICAgfSkge1xyXG4gICAgICAgICAgICAgIC4uLkRhdGFDb25maWdGaWVsZHNcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIG9uZVVzZXIge1xyXG4gICAgICAgICAgICAgIC4uLlVzZXJGaWVsZHNcclxuICAgICAgICAgICAgICB1c2VySW5mbyB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLlVzZXJJbmZvRmllbGRzXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcGF5Q2FyZExpc3RPbmVVc2VyIHtcclxuICAgICAgICAgICAgICAuLi5Vc2VyUGF5Q2FyZEZpZWxkc1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdXNlckFkZHJlc3NMaXN0T25lVXNlciB7XHJcbiAgICAgICAgICAgICAgLi4uVXNlckFkZHJlc3NGaWVsZHNcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGZyZWlnaHRDb25maWc6IGdldERhdGFDb25maWcgKGRhdGFDb25maWdJbnB1dDoge1xyXG4gICAgICAgICAgICAgIHR5cGU6IFwiJHtEaWN0VHlwZUVudW0uRnJlaWdodH1cIlxyXG4gICAgICAgICAgfSkge1xyXG4gICAgICAgICAgICAgIC4uLkRhdGFDb25maWdGaWVsZHNcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHVzZXJMZXZlbExpc3Q6IGdldERpY3RMaXN0IChkaWN0SW5wdXQ6IHtcclxuICAgICAgICAgICAgICBkaWN0VHlwZUNvZGU6IFwiVXNlckxldmVsXCJcclxuICAgICAgICAgIH0pIHtcclxuICAgICAgICAgICAgICAuLi5EaWN0RmllbGRzXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJHtmcmFnbWVudC5Vc2VyQWRkcmVzc0ZpZWxkc31cclxuICAgICAgJHtmcmFnbWVudC5Vc2VyUGF5Q2FyZEZpZWxkc31cclxuICAgICAgJHtmcmFnbWVudC5Vc2VySW5mb0ZpZWxkc31cclxuICAgICAgJHtmcmFnbWVudC5Vc2VyRmllbGRzfVxyXG4gICAgICAke2ZyYWdtZW50LkRhdGFDb25maWdGaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuRGljdEZpZWxkc31cclxuICBgLFxyXG4gIHNhdmVPcmRlcjogZ3FsYFxyXG4gICAgICBtdXRhdGlvbiAoJG9yZGVySW5mb0l0ZW1JbnB1dDogT3JkZXJJbmZvSXRlbUlucHV0KSB7XHJcbiAgICAgICAgICBzYXZlT3JkZXIgKG9yZGVySW5mb0l0ZW1JbnB1dDogJG9yZGVySW5mb0l0ZW1JbnB1dCkge1xyXG4gICAgICAgICAgICAgIC4uLk9yZGVySW5mb0ZpZWxkc1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICR7ZnJhZ21lbnQuT3JkZXJJbmZvRmllbGRzfVxyXG4gIGAsXHJcbiAgZGljdExpc3Q6IGdxbGBcclxuICAgICAgcXVlcnkgKCRkYXRhOiBEaWN0SW5wdXQpIHtcclxuICAgICAgICAgIGdldERpY3RMaXN0IChkaWN0SW5wdXQ6ICRkYXRhKSB7XHJcbiAgICAgICAgICAgICAgLi4uRGljdEZpZWxkc1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICR7ZnJhZ21lbnQuRGljdEZpZWxkc31cclxuICBgLFxyXG4gIGxpbWl0VGltZURhdGE6IGdxbGBcclxuICAgIHF1ZXJ5IHtcclxuICAgICAgICBsaW1pdFRpbWVEYXRhOiBnZXREYXRhQ29uZmlnIChkYXRhQ29uZmlnSW5wdXQ6IHtcclxuICAgICAgICAgICAgdHlwZTogXCIke0RpY3RUeXBlRW51bS5Qcm9tb3Rpb25GbGFzaFNhbGV9XCJcclxuICAgICAgICB9KSB7XHJcbiAgICAgICAgICAgIC4uLkRhdGFDb25maWdGaWVsZHNcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAke2ZyYWdtZW50LkRhdGFDb25maWdGaWVsZHN9XHJcbiAgYCxcclxuICBwcm9kdWN0TGlzdEJ5SWRzOiBncWxgXHJcbiAgICBxdWVyeSAoJGlkczogW1N0cmluZ10pIHtcclxuICAgICAgICBwcm9kdWN0TGlzdEJ5SWRzIChpZHM6ICRpZHMpIHtcclxuICAgICAgICAgICAgdG90YWxcclxuICAgICAgICAgICAgbGlzdCB7XHJcbiAgICAgICAgICAgICAgICAuLi5Qcm9kdWN0RmllbGRzXHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLkltZ0ZpZWxkc1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5Qcm9kdWN0RmllbGRzfVxyXG4gICAgJHtmcmFnbWVudC5JbWdGaWVsZHN9XHJcbiAgYCxcclxuICBncm91cFF1ZXVlTGlzdDogZ3FsYFxyXG4gICAgcXVlcnkgKCRncm91cFF1ZXVlSXRlbUlucHV0OiBHcm91cFF1ZXVlSXRlbUlucHV0KSB7XHJcbiAgICAgICAgZ3JvdXBRdWV1ZUxpc3QgKGdyb3VwUXVldWVJdGVtSW5wdXQ6ICRncm91cFF1ZXVlSXRlbUlucHV0KSB7XHJcbiAgICAgICAgICAgIC4uLkdyb3VwUXVldWVGaWVsZHNcclxuICAgICAgICAgICAgcHJvZHVjdCB7XHJcbiAgICAgICAgICAgICAgICAuLi5Qcm9kdWN0RmllbGRzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZ3JvdXBPcmRlciB7XHJcbiAgICAgICAgICAgICAgICAuLi5Hcm91cE9yZGVyRmllbGRzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAke2ZyYWdtZW50Lkdyb3VwUXVldWVGaWVsZHN9XHJcbiAgICAke2ZyYWdtZW50LlByb2R1Y3RGaWVsZHN9XHJcbiAgICAke2ZyYWdtZW50Lkdyb3VwT3JkZXJGaWVsZHN9XHJcbiAgYCxcclxuICB1cGRhdGVPcmRlcjogZ3FsYFxyXG4gICAgbXV0YXRpb24gKCRvcmRlckluZm9JdGVtSW5wdXQ6IE9yZGVySW5mb0l0ZW1JbnB1dCkge1xyXG4gICAgICAgIHVwZGF0ZU9yZGVyIChvcmRlckluZm9JdGVtSW5wdXQ6ICRvcmRlckluZm9JdGVtSW5wdXQpIHtcclxuICAgICAgICAgICAgLi4uT3JkZXJJbmZvRmllbGRzXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5PcmRlckluZm9GaWVsZHN9XHJcbiAgYCxcclxuICBzYXZlR3JvdXBPcmRlcjogZ3FsYFxyXG4gICAgbXV0YXRpb24gKCRvcmRlckluZm9JdGVtSW5wdXQ6IE9yZGVySW5mb0l0ZW1JbnB1dCwgJGdyb3VwT3JkZXJJdGVtSW5wdXQ6IEdyb3VwT3JkZXJJdGVtSW5wdXQsICRncm91cFF1ZXVlSXRlbUlucHV0OiBHcm91cFF1ZXVlSXRlbUlucHV0KSB7XHJcbiAgICAgICAgc2F2ZUdyb3VwT3JkZXIgKG9yZGVySW5mb0l0ZW1JbnB1dDogJG9yZGVySW5mb0l0ZW1JbnB1dCwgZ3JvdXBPcmRlckl0ZW1JbnB1dDogJGdyb3VwT3JkZXJJdGVtSW5wdXQsIGdyb3VwUXVldWVJdGVtSW5wdXQ6ICRncm91cFF1ZXVlSXRlbUlucHV0KSB7XHJcbiAgICAgICAgICAgIC4uLk9yZGVySW5mb0ZpZWxkc1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuT3JkZXJJbmZvRmllbGRzfVxyXG4gIGAsXHJcbn1cclxuXHJcbiIsImV4cG9ydCBlbnVtIFByb21vQ29kZVR5cGVFbnVtIHtcclxuICBEYXJlbkNhcmQgPSAnRGFyZW5DYXJkJyxcclxuICBQcm9tb0NvZGUgPSAnUHJvbW9Db2RlJyxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRGlzY291bnRUeXBlRW51bSB7XHJcbiAgUGVyY2VudGFnZSA9ICdQZXJjZW50YWdlJyxcclxuICBBbW91bnQgPSAnQW1vdW50JyxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gU1Mge1xyXG4gIFNTLFxyXG4gIFNTMixcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRGlzY291bnRDb25kaXRpb25FbnVtIHtcclxuICBObyA9ICdObycsXHJcbiAgQW1vdW50ID0gJ0Ftb3VudCcsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFByb2R1Y3RTdXBwbGVtZW50IHtcclxuICBfLFxyXG4gIFBlbmRpbmcsXHJcbiAgRmluaXNoLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUHJvZHVjdFN1cHBsZW1lbnRTdHJpbmc6IGFueSA9IHtcclxuICAxOiAn6YWN6LSn5LitJyxcclxuICAyOiAn5bey5a6M5oiQJyxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gT3JkZXJTdGF0ZSB7XHJcbiAgT3JkZXJlZCA9IDEsXHJcbiAgUGFpZCA9IDIsXHJcbiAgUGlja2luZyA9IDMsXHJcbiAgUGlja2VkVXAgPSA0LFxyXG4gIEZpbmlzaCA9IDUsXHJcbiAgQ2FuY2VsID0gNixcclxufVxyXG5cclxuLy8gMTrku6Pku5jmrL4gMjrlt7Lku5jmrL4gMzrlt7Llj5HotKcgNDrlt7LmlLbotKcgNTrlt7Llj5bmtoggNjrlt7LlrozmiJAgNzrlt7LpgIDlm55cclxuY29uc3QgX3M6IHtcclxuICBba2V5IGluIG51bWJlcl06IHN0cmluZ1xyXG59ID0ge1xyXG4gIDE6ICflvoXku5jmrL4nLFxyXG4gIDI6ICflt7Lku5jmrL4nLFxyXG4gIDM6ICflt7Llj5HotKcnLFxyXG4gIDQ6ICflt7LmlLbotKcnLFxyXG4gIDU6ICflt7Llj5bmtognLFxyXG4gIDY6ICflt7LlrozmiJAnLFxyXG4gIDc6ICflt7LpgIDlm54nLFxyXG59XHJcbmV4cG9ydCBjb25zdCBvcmRlclN0YXRlVG9TdHJpbmcgPSAoczogbnVtYmVyIHwgbnVsbCA9IDApID0+IHtcclxuICByZXR1cm4gX3M/LlsocyA/PyAwKV0gPz8gJydcclxufVxyXG5cclxuLy8g6YWN572u566h55CGXHJcbmV4cG9ydCBlbnVtIERpY3RUeXBlRW51bSB7XHJcbiAgR3JvdXBQcmVjaXNpb24gPSAnR3JvdXBQcmVjaXNpb24nLFxyXG4gIFVzZXJMZXZlbCA9ICdVc2VyTGV2ZWwnLFxyXG4gIEZyZWlnaHQgPSAnRnJlaWdodCcsXHJcbiAgSGVscERvY3VtZW50YXRpb25UeXBlID0gJ0hlbHBEb2N1bWVudGF0aW9uVHlwZScsXHJcbiAgSGVscERvY3VtZW50YXRpb24gPSAnSGVscERvY3VtZW50YXRpb24nLFxyXG4gIFByb21vdGlvblRoZW1lU2VsZWN0ID0gJ1Byb21vdGlvblRoZW1lU2VsZWN0JyxcclxuICBQcm9tb3Rpb25GbGFzaFNhbGUgPSAnUHJvbW90aW9uRmxhc2hTYWxlJyxcclxuICBIb21lQ2Fyb3VzZWwgPSAnSG9tZUNhcm91c2VsJyxcclxuICBPcmRlclN0YXRlID0gJ09yZGVyU3RhdGUnLFxyXG4gIFNlbGZBZGRyZXNzID0gJ1NlbGZBZGRyZXNzJyxcclxuICBBcHBNb2R1bGUgPSAnQXBwTW9kdWxlJyxcclxufVxyXG5cclxuLy8g6L2u5pKt5Zu+5YWz6IGU6aG5XHJcbmV4cG9ydCBlbnVtIFJlbGF0ZWRPYmpUeXBlRW51bSB7XHJcbiAgUHJvbW9Db2RlID0gJ1Byb21vQ29kZScsXHJcbiAgUHJvbW90aW9uRmxhc2hTYWxlID0gJ1Byb21vdGlvbkZsYXNoU2FsZScsXHJcbiAgUHJvbW90aW9uVGhlbWVTZWxlY3QgPSAnUHJvbW90aW9uVGhlbWVTZWxlY3QnLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBBcHBGb290QmFyIHtcclxuICBob21lID0gJ2hvbWUnLFxyXG4gIGdyb3VwID0gJ2dyb3VwJyxcclxuICBjYXJkID0gJ2NhcmQnLFxyXG4gIGNhcnQgPSAnY2FydCcsXHJcbiAgbWUgPSAnbWUnXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEFwcE1vZHVsZVR5cGVFbnVtIHtcclxuICBjYXRlZ29yeVNlbGVjdGlvbiA9ICdjYXRlZ29yeVNlbGVjdGlvbicsXHJcbiAgbGltaXRUaW1lID0gJ2xpbWl0VGltZScsXHJcbiAgc2FsZXNSYW5rID0gJ3NhbGVzUmFuaycsXHJcbiAgdGhlbWVTZWxlY3Rpb24gPSAndGhlbWVTZWxlY3Rpb24nLFxyXG4gIG1heUxpa2UgPSAnbWF5TGlrZScsXHJcbiAgbGluZVJhbmtpbmcgPSAnbGluZVJhbmtpbmcnLFxyXG4gIHRvcFJhbmtpbmcgPSAndG9wUmFua2luZycsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDYXRlZ29yeVJvb3ROYW1lID0gJ3Jvb3QnXHJcblxyXG5leHBvcnQgY29uc3Qgb3JkZXJTdGF0ZUtleXM6IHN0cmluZ1tdID0gT2JqZWN0LnZhbHVlcyhPcmRlclN0YXRlKSBhcyBzdHJpbmdbXVxyXG5cclxuZXhwb3J0IGNvbnN0IFByb3ZpbmNlRGF0YSA9IFtcclxuICBbJ0FMJywgJ0FsYWJhbWEnXSxcclxuICBbJ0FLJywgJ0FsYXNrYSddLFxyXG4gIFsnQVonLCAnQXJpem9uYSddLFxyXG4gIFsnQVInLCAnQXJrYW5zYXMnXSxcclxuICBbJ0NBJywgJ0NhbGlmb3JuaWEnXSxcclxuICBbJ0NPJywgJ0NvbG9yYWRvJ10sXHJcbiAgWydDVCcsICdDb25uZWN0aWN1dCddLFxyXG4gIFsnREUnLCAnRGVsYXdhcmUnXSxcclxuICBbJ0RDJywgJ0Rpc3RyaWN0IE9mIENvbHVtYmlhJ10sXHJcbiAgWydGTCcsICdGbG9yaWRhJ10sXHJcbiAgWydHQScsICdHZW9yZ2lhJ10sXHJcbiAgWydISScsICdIYXdhaWknXSxcclxuICBbJ0lEJywgJ0lkYWhvJ10sXHJcbiAgWydJTCcsICdJbGxpbm9pcyddLFxyXG4gIFsnSU4nLCAnSW5kaWFuYSddLFxyXG4gIFsnSUEnLCAnSW93YSddLFxyXG4gIFsnS1MnLCAnS2Fuc2FzJ10sXHJcbiAgWydLWScsICdLZW50dWNreSddLFxyXG4gIFsnTEEnLCAnTG91aXNpYW5hJ10sXHJcbiAgWydNRScsICdNYWluZSddLFxyXG4gIFsnTUQnLCAnTWFyeWxhbmQnXSxcclxuICBbJ01BJywgJ01hc3NhY2h1c2V0dHMnXSxcclxuICBbJ01JJywgJ01pY2hpZ2FuJ10sXHJcbiAgWydNTicsICdNaW5uZXNvdGEnXSxcclxuICBbJ01TJywgJ01pc3Npc3NpcHBpJ10sXHJcbiAgWydNTycsICdNaXNzb3VyaSddLFxyXG4gIFsnTVQnLCAnTW9udGFuYSddLFxyXG4gIFsnTkUnLCAnTmVicmFza2EnXSxcclxuICBbJ05WJywgJ05ldmFkYSddLFxyXG4gIFsnTkgnLCAnTmV3IEhhbXBzaGlyZSddLFxyXG4gIFsnTkonLCAnTmV3IEplcnNleSddLFxyXG4gIFsnTk0nLCAnTmV3IE1leGljbyddLFxyXG4gIFsnTlknLCAnTmV3IFlvcmsnXSxcclxuICBbJ05DJywgJ05vcnRoIENhcm9saW5hJ10sXHJcbiAgWydORCcsICdOb3J0aCBEYWtvdGEnXSxcclxuICBbJ09IJywgJ09oaW8nXSxcclxuICBbJ09LJywgJ09rbGFob21hJ10sXHJcbiAgWydPUicsICdPcmVnb24nXSxcclxuICBbJ1BBJywgJ1Blbm5zeWx2YW5pYSddLFxyXG4gIFsnUkknLCAnUmhvZGUgSXNsYW5kJ10sXHJcbiAgWydTQycsICdTb3V0aCBDYXJvbGluYSddLFxyXG4gIFsnU0QnLCAnU291dGggRGFrb3RhJ10sXHJcbiAgWydUTicsICdUZW5uZXNzZWUnXSxcclxuICBbJ1RYJywgJ1RleGFzJ10sXHJcbiAgWydVVCcsICdVdGFoJ10sXHJcbiAgWydWVCcsICdWZXJtb250J10sXHJcbiAgWydWQScsICdWaXJnaW5pYSddLFxyXG4gIFsnV0EnLCAnV2FzaGluZ3RvbiddLFxyXG4gIFsnV1YnLCAnV2VzdCBWaXJnaW5pYSddLFxyXG4gIFsnV0knLCAnV2lzY29uc2luJ10sXHJcbiAgWydXWScsICdXeW9taW5nJ10sXHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQaWNrVXBUeXBlTmFtZSA9ICh0eXBlOiBzdHJpbmcgfCAnU2VsZicgfCAnRGVsaXZlcnknKSA9PiB7XHJcbiAgcmV0dXJuICh7XHJcbiAgICBTZWxmOiAn6Ieq5Y+WJyxcclxuICAgIERlbGl2ZXJ5OiAn6YWN6YCBJyxcclxuICB9KVt0eXBlIGFzICdTZWxmJyB8ICdEZWxpdmVyeSddID8/ICcnXHJcbn1cclxuZXhwb3J0IGNvbnN0IFBpY2tVcFR5cGVFbnVtID0ge1xyXG4gIFNlbGY6ICdTZWxmJyxcclxuICBEZWxpdmVyeTogJ0RlbGl2ZXJ5JyxcclxufVxyXG4iLCJleHBvcnQgY29uc3QgbXBTdHlsZSA9IHtcclxuICByZWQ6ICcjRjg0MDMzJyxcclxuICBzaGFkb3c6IHtcclxuICAgIDE6ICcwIDFweCAxcHggMCByZ2JhKDAsMCwwLDAuMTQpLCAwIDJweCAxcHggLTFweCByZ2JhKDAsMCwwLDAuMTIpLCAwIDFweCAzcHggMCByZ2JhKDAsMCwwLDAuMjApJyxcclxuICB9LFxyXG59XHJcbiIsImltcG9ydCB7ZnBTZXRQcmV9IGZyb20gJy4vdXRpbHMnXHJcblxyXG5leHBvcnQgY29uc3Qgc2V0Rm9ybTogTW9kZWxBY3Rpb24gPSAoW3BhdGgsIHZhbHVlXSwgb3B0aW9uKSA9PiB7XHJcbiAgb3B0aW9uLnNldERhdGEoZnBTZXRQcmUoYGZvcm0uJHtwYXRofWAsIHZhbHVlKSlcclxufVxyXG4iLCJpbXBvcnQgeyBNYXliZSB9IGZyb20gXCIuLi9ncmFwaHFsVHlwZXMvdHlwZXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBscyA9IChrZXk6IE1heWJlPHN0cmluZz4gfCB1bmRlZmluZWQpID0+IGtleSA/PyAnJ1xyXG4iLCJcclxuZXhwb3J0IGNvbnN0IGlzRGV2ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCdcclxuXHJcbmV4cG9ydCBjb25zdCBzc0xvZyA9IChkYXRhOiBhbnkpID0+IHtcclxuICBpZiAoaXNEZXYpIHtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgfVxyXG4gIHJldHVybiBkYXRhXHJcbn1cclxuIiwiaW1wb3J0IGdldENvbmZpZyBmcm9tICduZXh0L2NvbmZpZydcclxuXHJcbmNvbnN0IGNvbmZpZyA9IGdldENvbmZpZygpXHJcblxyXG5jb25zdCBpbWdEb21haW4gPSBjb25maWc/LnB1YmxpY1J1bnRpbWVDb25maWc/LmltZ0RvbWFpbiA/PyAnaHR0cDovLzEyNy4wLjAuMTo0NDY0LydcclxuXHJcbmV4cG9ydCBjb25zdCBkZWFsSW1nVXJsID0gKHNyYzogc3RyaW5nIHwgdW5kZWZpbmVkIHwgbnVsbCA9ICcnKSA9PiB7XHJcbiAgaWYgKHNyYz8uaW5jbHVkZXMoJ2Jsb2I6JykpIHtcclxuICAgIHJldHVybiBzcmNcclxuICB9XHJcbiAgcmV0dXJuIGAke2ltZ0RvbWFpbn0ke3NyY31gXHJcbn1cclxuIiwiLyogZ2xvYmFsIGxvY2FsU3RvcmFnZSAqL1xyXG5leHBvcnQgY29uc3Qgc2V0VG9rZW4gPSAodG9rZW46IHN0cmluZywgbmFtZSA9ICd0b2tlbicpID0+IGxvY2FsU3RvcmFnZS5zZXRJdGVtKG5hbWUsIHRva2VuKVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFRva2VuID0gKG5hbWUgPSAndG9rZW4nKSA9PiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShuYW1lKSB8fCAnJ1xyXG4iLCJpbXBvcnQgZm9ybWF0IGZyb20gJ2RhdGUtZm5zL2Zvcm1hdCdcclxuaW1wb3J0IHNldCBmcm9tICdsb2Rhc2gvc2V0J1xyXG5pbXBvcnQge2Nsb25lRGVlcCwgUHJvcGVydHlQYXRoLCBpc0Z1bmN0aW9uLCBnZXQsIGlzQXJyYXksIG1lcmdlV2l0aCwgaXNTdHJpbmd9IGZyb20gJ2xvZGFzaCdcclxuaW1wb3J0IHtNYXliZX0gZnJvbSAnLi4vZ3JhcGhxbFR5cGVzL3R5cGVzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldE9iamVjdFVSTCA9IChmaWxlOiBhbnkpID0+IHtcclxuICAvLyBAdHMtaWdub3JlXHJcbiAgcmV0dXJuIHdpbmRvdz8uY3JlYXRlT2JqZWN0VVJMPy4oZmlsZSlcclxuICAgICAgPz8gd2luZG93Py5VUkw/LmNyZWF0ZU9iamVjdFVSTD8uKGZpbGUpXHJcbiAgICAgID8/IHdpbmRvdz8ud2Via2l0VVJMPy5jcmVhdGVPYmplY3RVUkw/LihmaWxlKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcGFyc2VGbG9hdEZvcklucHV0ID0gKHZhbHVlOiBhbnkpID0+IHtcclxuICBpZiAodmFsdWUgPT09ICctJyB8fCB2YWx1ZSA9PT0gJycpIHJldHVybiB2YWx1ZVxyXG4gIHRyeSB7XHJcbiAgICByZXR1cm4gcGFyc2VGbG9hdCh2YWx1ZSlcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGUpXHJcbiAgfVxyXG59XHJcblxyXG50eXBlIFNldERhdGE8UyA9IGFueT4gPSBTIHwgKChwcmVEYXRhOiBTKSA9PiBTKVxyXG5cclxuZXhwb3J0IGNvbnN0IGZwU2V0ID0gPEUgPSBhbnk+KG9yaWdpbjogYW55LCBwYXRoOiBhbnksIHZhbHVlOiBTZXREYXRhPEU+KSA9PiB7XHJcbiAgbGV0IG5ld0RhdGEgPSBjbG9uZURlZXAob3JpZ2luKVxyXG4gIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xyXG4gICAgY29uc3Qgb2xkRGF0YSA9IGdldChvcmlnaW4sIHBhdGgpXHJcbiAgICBzZXQobmV3RGF0YSwgcGF0aCwgdmFsdWUob2xkRGF0YSkpXHJcbiAgfSBlbHNlIHtcclxuICAgIHNldChuZXdEYXRhLCBwYXRoLCB2YWx1ZSlcclxuICB9XHJcbiAgcmV0dXJuIG5ld0RhdGFcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGF5ID0gKHRpbWU6IG51bWJlcikgPT4gKG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCB0aW1lKSkpXHJcblxyXG5leHBvcnQgY29uc3QgZnBTZXRQcmU6IDxUIGV4dGVuZHMgb2JqZWN0PihwYXRoOiBQcm9wZXJ0eVBhdGgsIG5ld1ZhbHVlOiBTZXREYXRhKSA9PiAob3JpZ2luOiBUKSA9PiBUID0gKHBhdGg6IGFueSwgdmFsdWUpID0+IChvcmlnaW4pID0+IHtcclxuICBsZXQgbmV3RGF0YSA9IGNsb25lRGVlcChvcmlnaW4pXHJcbiAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XHJcbiAgICBjb25zdCBvbGREYXRhID0gZ2V0KG9yaWdpbiwgcGF0aClcclxuICAgIHNldChuZXdEYXRhLCBwYXRoLCB2YWx1ZShvbGREYXRhKSlcclxuICB9IGVsc2Uge1xyXG4gICAgc2V0KG5ld0RhdGEsIHBhdGgsIHZhbHVlKVxyXG4gIH1cclxuICByZXR1cm4gbmV3RGF0YVxyXG59XHJcblxyXG5jb25zdCBjdXN0b21pemVyID0gKG9ialZhbHVlOiBhbnksIHNyY1ZhbHVlOiBhbnkpID0+IHtcclxuICBpZiAoaXNBcnJheShzcmNWYWx1ZSkpIHtcclxuICAgIHJldHVybiBzcmNWYWx1ZVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGZwTWVyZ2U6IDxUT2JqZWN0LCBUU291cmNlMT4oXHJcbiAgICBvcmlnaW46IFRPYmplY3QsXHJcbiAgICBuZXdWYWx1ZTogVFNvdXJjZTEsXHJcbikgPT4gVE9iamVjdCAmIFRTb3VyY2UxID0gKG9yaWdpbiwgbmV3VmFsdWUpID0+IHtcclxuICByZXR1cm4gbWVyZ2VXaXRoKHt9LCBvcmlnaW4sIG5ld1ZhbHVlLCBjdXN0b21pemVyKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZnBNZXJnZVByZTogPFByZSwgTmV3IGV4dGVuZHMgUGFydGlhbDxQcmU+PihuZXdWYWx1ZTogTmV3KSA9PiAob3JpZ2luOiBQcmUpID0+IFByZSAmIE5ldyA9IChuZXdWYWx1ZSkgPT4gKHByZSkgPT4gbWVyZ2VXaXRoKHt9LCBwcmUsIG5ld1ZhbHVlLCBjdXN0b21pemVyKVxyXG5cclxuZXhwb3J0IGNvbnN0IGZwUmVtb3ZlID0gKGFycjogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgaWYgKCFhcnIpIHJldHVybiBbXVxyXG4gIHJldHVybiBbXHJcbiAgICAuLi5hcnI/LnNsaWNlKDAsIGluZGV4KSxcclxuICAgIC4uLmFycj8uc2xpY2UoaW5kZXggKyAxLCBhcnI/Lmxlbmd0aCksXHJcbiAgXVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGVhbE51bWJlclplcm8gPSAobGVuZ3RoOiBudW1iZXIpID0+IChudW06IG51bWJlcikgPT4ge1xyXG4gIGNvbnN0IF9zID0gYCR7bnVtID8/ICcnfWBcclxuICByZXR1cm4gQXJyYXkobGVuZ3RoIC0gX3MubGVuZ3RoKS5maWxsKCcwJykuam9pbignJykgKyBfc1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZm9ybWF0RGF0ZSA9IChkYXRlOiBhbnkgPSAnJywgZm9ybWF0U3RyaW5nID0gJ1lZWVktTU0tZGQgSEg6bW06c3MnKSA9PiB7XHJcbiAgaWYgKCFkYXRlKSB7XHJcbiAgICByZXR1cm4gJydcclxuICB9XHJcbiAgaWYgKGlzU3RyaW5nKGRhdGUpKSB7XHJcbiAgICByZXR1cm4gZm9ybWF0KG5ldyBEYXRlKGRhdGUpLCBmb3JtYXRTdHJpbmcsIHtcclxuICAgICAgdXNlQWRkaXRpb25hbERheU9mWWVhclRva2VuczogdHJ1ZSxcclxuICAgICAgdXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zOiB0cnVlLFxyXG4gICAgfSlcclxuICB9XHJcbiAgcmV0dXJuIChpc05hTihkYXRlKSkgPyAnJyA6IGZvcm1hdChkYXRlLCBmb3JtYXRTdHJpbmcsIHtcclxuICAgIHVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnM6IHRydWUsXHJcbiAgICB1c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnM6IHRydWUsXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRlYWxOb25Cb29sZWFuUHJvcHMgPSAodmFsdWU6IGFueSkgPT4gISF2YWx1ZSA/IDEgOiAwXHJcblxyXG5leHBvcnQgY29uc3QgZm9ybWF0TW9uZXkgPSAoYW1vdW50OiBhbnksIGRlY2ltYWxDb3VudCA9IDIsIGRlY2ltYWwgPSBcIi5cIiwgdGhvdXNhbmRzID0gXCIsXCIpID0+IHtcclxuICB0cnkge1xyXG4gICAgZGVjaW1hbENvdW50ID0gTWF0aC5hYnMoZGVjaW1hbENvdW50KVxyXG4gICAgZGVjaW1hbENvdW50ID0gaXNOYU4oZGVjaW1hbENvdW50KSA/IDIgOiBkZWNpbWFsQ291bnRcclxuXHJcbiAgICBjb25zdCBuZWdhdGl2ZVNpZ24gPSBhbW91bnQgPCAwID8gXCItXCIgOiBcIlwiXHJcblxyXG4gICAgbGV0IGkgPSBwYXJzZUludChhbW91bnQgPSBNYXRoLmFicyhOdW1iZXIoYW1vdW50KSB8fCAwKS50b0ZpeGVkKGRlY2ltYWxDb3VudCkpLnRvU3RyaW5nKClcclxuICAgIGxldCBqID0gKGkubGVuZ3RoID4gMykgPyBpLmxlbmd0aCAlIDMgOiAwXHJcblxyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgcmV0dXJuIG5lZ2F0aXZlU2lnbiArIChqID8gaS5zdWJzdHIoMCwgaikgKyB0aG91c2FuZHMgOiAnJykgKyBpLnN1YnN0cihqKS5yZXBsYWNlKC8oXFxkezN9KSg/PVxcZCkvZywgXCIkMVwiICsgdGhvdXNhbmRzKSArIChkZWNpbWFsQ291bnQgPyBkZWNpbWFsICsgTWF0aC5hYnMoYW1vdW50IC0gaSkudG9GaXhlZChkZWNpbWFsQ291bnQpLnNsaWNlKDIpIDogXCJcIilcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRlYWxNb25leSA9IChhbW91bnQ6IGFueSwgcHJlID0gJycpID0+IGAke3ByZX0kICR7Zm9ybWF0TW9uZXkoYW1vdW50KX1gXHJcblxyXG5leHBvcnQgY29uc3QgZGVhbE1heWJlTnVtYmVyID0gKG51bTogTWF5YmU8bnVtYmVyPiB8IHVuZGVmaW5lZCkgPT4gbnVtID8/IDBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBnZXRPYmplY3RVUkwsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkZWFsVXJsUXVlcnkgPSAocXVlcnlPYmo6IGFueSkgPT4ge1xyXG4gIHJldHVybiBgPyR7T2JqZWN0LmtleXMocXVlcnlPYmopLm1hcCh2YWx1ZSA9PiBgJHt2YWx1ZX09JHtxdWVyeU9ialt2YWx1ZV19YCkuam9pbignJicpfWBcclxufVxyXG5cclxuXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEFkZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0FkZCdcclxuaW1wb3J0IFJlbW92ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1JlbW92ZSdcclxuaW1wb3J0IHtTaG9wQ2FydH0gZnJvbSAnLi4vLi4vZ3JhcGhxbFR5cGVzL3R5cGVzJ1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQge2RlYWxJbWdVcmx9IGZyb20gJy4uLy4uL3Rvb2xzL2ltZydcclxuaW1wb3J0IHtncmV5fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMnXHJcbmltcG9ydCB7cHJvZHVjdE1vZGVsLCBQcm9kdWN0UHJpY2V9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUHJvZHVjdEl0ZW0vUHJvZHVjdEl0ZW0nXHJcbmltcG9ydCB7QnV0dG9uLCBJY29uQnV0dG9ufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHt1c2VTdG9yZU1vZGVsfSBmcm9tICcuLi8uLi9Nb2RlbEFjdGlvbi91c2VTdG9yZSdcclxuaW1wb3J0IHtsc30gZnJvbSAnLi4vLi4vdG9vbHMvZGVhbEtleSdcclxuaW1wb3J0IHtzaG9wQ2FydE1vZGVsfSBmcm9tICcuL2luZGV4J1xyXG5cclxuZXhwb3J0IGNvbnN0IFNob3BDYXJ0UHJvZHVjdEJveCA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDIwcHgsIDcycHgpIDFmcjtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAyMnB4KSAzMHB4O1xyXG4gIGdyaWQtY29sdW1uLWdhcDogMTBweDtcclxuICA+IGltZyB7XHJcbiAgICBncmlkLWFyZWE6IDEvMS80LzI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICB9XHJcbiAgPiBzZWN0aW9uIHtcclxuICAgIGNvbG9yOiAke2dyZXlbNjAwXX1cclxuICB9XHJcbiAgPiBmb290ZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICA+IG1haW4ge1xyXG4gICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICB9XHJcbiAgICA+IGJ1dHRvbiB7XHJcbiAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQ2FydFByb2R1Y3QgPSAoe3Nob3BDYXJ0fTogeyBzaG9wQ2FydDogU2hvcENhcnQgfSkgPT4ge1xyXG4gIGNvbnN0IHthY3Rpb25zOiBhY3Rpb25zU0NNfSA9IHVzZVN0b3JlTW9kZWwoc2hvcENhcnRNb2RlbClcclxuICBjb25zdCB7YWN0aW9uczogYWN0aW9uc1BNfSA9IHVzZVN0b3JlTW9kZWwocHJvZHVjdE1vZGVsKVxyXG4gIGNvbnN0IHByb2R1Y3QgPSBzaG9wQ2FydC5wcm9kdWN0XHJcblxyXG4gIHJldHVybiA8U2hvcENhcnRQcm9kdWN0Qm94PlxyXG4gICAgPGltZyBzcmM9e2RlYWxJbWdVcmwoc2hvcENhcnQucHJvZHVjdD8uaW1nPy5bMF0/LnVybCl9XHJcbiAgICAgICAgIGFsdD1cIlwiLz5cclxuICAgIDxtYWluPntwcm9kdWN0Py5uYW1lfXtwcm9kdWN0Py53ZWlnaHR9e3Byb2R1Y3Q/LnVuaXR9PC9tYWluPlxyXG4gICAgPHNlY3Rpb24+e3Byb2R1Y3Q/LnJlbWFya308L3NlY3Rpb24+XHJcbiAgICA8Zm9vdGVyPlxyXG4gICAgICA8UHJvZHVjdFByaWNlIHByb2R1Y3Q9e3Byb2R1Y3R9Lz5cclxuICAgICAgeyhzaG9wQ2FydC5pc05leHQgPT09IDAgJiYgPD5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHNpemU9eydzbWFsbCd9XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9eydvdXRsaW5lZCd9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICBhd2FpdCBhY3Rpb25zUE0udXBkYXRlU2hvcENhcnQoe1xyXG4gICAgICAgICAgICAgICAgaXNOZXh0OiAxLFxyXG4gICAgICAgICAgICAgICAgaWQ6IHNob3BDYXJ0LmlkLFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgYWN0aW9uc1NDTS5nZXRMaXN0KClcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICA+e2xzKCfkuIvmrKHotK3kubAnKX08L0J1dHRvbj5cclxuICAgICAgICB7PEljb25CdXR0b25cclxuICAgICAgICAgICAgZGlzYWJsZWQ9eyhzaG9wQ2FydD8ubnVtYmVyID8/IDApIDw9IDF9XHJcbiAgICAgICAgICAgIHNpemU9eydzbWFsbCd9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICBhd2FpdCBhY3Rpb25zUE0udXBkYXRlTnVtU2hvcENhcnQoe1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdCxcclxuICAgICAgICAgICAgICAgIG51bWJlcjogLTEsXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICBhY3Rpb25zU0NNLmdldExpc3QoKVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID48UmVtb3ZlSWNvbi8+PC9JY29uQnV0dG9uPn1cclxuICAgICAgICB7c2hvcENhcnQubnVtYmVyfVxyXG4gICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgIHNpemU9eydzbWFsbCd9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICBhd2FpdCBhY3Rpb25zUE0udXBkYXRlTnVtU2hvcENhcnQoe1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdCxcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIGFjdGlvbnNTQ00uZ2V0TGlzdCgpXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEFkZEljb24vPlxyXG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgPC8+KSB8fCA8PlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5SaWdodDogJzhweCd9fVxyXG4gICAgICAgICAgICBzaXplPXsnc21hbGwnfVxyXG4gICAgICAgICAgICB2YXJpYW50PXsnb3V0bGluZWQnfVxyXG4gICAgICAgICAgICBjb2xvcj17J3NlY29uZGFyeSd9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICBhd2FpdCBhY3Rpb25zUE0udXBkYXRlU2hvcENhcnQoe1xyXG4gICAgICAgICAgICAgICAgaXNEZWxldGU6IDEsXHJcbiAgICAgICAgICAgICAgICBpZDogc2hvcENhcnQuaWQsXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICBhY3Rpb25zU0NNLmdldExpc3QoKVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID57bHMoJ+WIoOmZpCcpfTwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgc2l6ZT17J3NtYWxsJ31cclxuICAgICAgICAgICAgdmFyaWFudD17J291dGxpbmVkJ31cclxuICAgICAgICAgICAgb25DbGljaz17YXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGF3YWl0IGFjdGlvbnNQTS51cGRhdGVTaG9wQ2FydCh7XHJcbiAgICAgICAgICAgICAgICBpc05leHQ6IDAsXHJcbiAgICAgICAgICAgICAgICBpZDogc2hvcENhcnQuaWQsXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICBhY3Rpb25zU0NNLmdldExpc3QoKVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID57bHMoJ+WKoOWFpei0reeJqei9picpfTwvQnV0dG9uPlxyXG4gICAgICA8Lz59XHJcbiAgICA8L2Zvb3Rlcj5cclxuICA8L1Nob3BDYXJ0UHJvZHVjdEJveD5cclxufVxyXG4iLCJpbXBvcnQge0RpYWxvZywgRGlhbG9nVGl0bGUsIERpYWxvZ0NvbnRlbnQsIFJhZGlvLCBCdXR0b259IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7ZGlhbG9nTW9kZWxGYWN0b3J5fSBmcm9tICcuLi8uLi8uLi9jb21tb25Nb2RlbC9kaWFsb2cnXHJcbmltcG9ydCB7dXNlU3RvcmVNb2RlbH0gZnJvbSAnLi4vLi4vLi4vTW9kZWxBY3Rpb24vdXNlU3RvcmUnXHJcbmltcG9ydCB7bHN9IGZyb20gJy4uLy4uLy4uL3Rvb2xzL2RlYWxLZXknXHJcbmltcG9ydCB7c2hvcENhcnRNb2RlbH0gZnJvbSAnLi4vaW5kZXgnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHtQaWNrVXBUeXBlRW51bX0gZnJvbSAnLi4vLi4vLi4vc3NfY29tbW9uL2VudW0nXHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0QWRkcmVzc01vZGVsID0gZGlhbG9nTW9kZWxGYWN0b3J5KCdzZWxlY3RBZGRyZXNzTW9kZWwnLCB7fSlcclxuXHJcbmNvbnN0IEFkZHJlc3NCb3ggPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgbWluLWNvbnRlbnQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgZnIpO1xyXG4gIGdyaWQtcm93LWdhcDogOHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgPiBoZWFkZXIge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gID4gYXNpZGUge1xyXG4gICAgZ3JpZC1hcmVhOiAxLzIvMy8zO1xyXG4gIH1cclxuYFxyXG5jb25zdCBGb290ZXIgPSBzdHlsZWQuZGl2YFxyXG5cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFNlbGVjdEFkZHJlc3MgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCB7c3RhdGU6IHN0YXRlU0FNLCBhY3Rpb25zOiBhY3Rpb25zU0FNfSA9IHVzZVN0b3JlTW9kZWwoc2VsZWN0QWRkcmVzc01vZGVsKVxyXG4gIGNvbnN0IHtzdGF0ZTogc3RhdGVTaG9wQ2FydE1vZGVsLCBhY3Rpb25zOiBhY3Rpb25zU2hvcENhcnRNb2RlbH0gPSB1c2VTdG9yZU1vZGVsKHNob3BDYXJ0TW9kZWwpXHJcbiAgY29uc3QgYWRkcmVzc0xpc3QgPSBzdGF0ZVNob3BDYXJ0TW9kZWwuZGVhbEFkZHJlc3NMaXN0KHN0YXRlU2hvcENhcnRNb2RlbClcclxuXHJcblxyXG4gIHJldHVybiA8RGlhbG9nXHJcbiAgICAgIG9wZW49e3N0YXRlU0FNLm9wZW59XHJcbiAgICAgIG9uQ2xvc2U9e2FjdGlvbnNTQU0ub25DbG9zZX1cclxuICA+XHJcbiAgICA8RGlhbG9nVGl0bGU+e2xzKCfpgInmi6nlnLDlnYAnKX08L0RpYWxvZ1RpdGxlPlxyXG4gICAgPERpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgIHthZGRyZXNzTGlzdC5tYXAodiA9PiA8QWRkcmVzc0JveCBrZXk9e2BEaWFsb2dUaXRsZUFkZHJlc3NCb3hfJHt2LmlkfWB9PlxyXG4gICAgICAgIDxoZWFkZXI+e3YuY29tYmluZUFkZHJlc3N9PC9oZWFkZXI+XHJcbiAgICAgICAgPGZvb3Rlcj57YCR7di5uYW1lfSAke3YuY29udGFjdEluZm9ybWF0aW9ufWB9PC9mb290ZXI+XHJcbiAgICAgICAgPGFzaWRlPlxyXG4gICAgICAgICAgPFJhZGlvXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIHN0YXRlU0FNLm9wZW5SZXNvbHZlKHYuaWQpXHJcbiAgICAgICAgICAgICAgICBhY3Rpb25zU0FNLm9uQ2xvc2UoKVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgY2hlY2tlZD17di5pZCA9PT0gc3RhdGVTaG9wQ2FydE1vZGVsLmZvcm0uYWRkcmVzc0lkfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2FzaWRlPlxyXG4gICAgICA8L0FkZHJlc3NCb3g+KX1cclxuICAgICAgPEZvb3Rlcj5cclxuICAgICAgICB7c3RhdGVTaG9wQ2FydE1vZGVsLmZvcm0ucGlja1VwVHlwZSA9PT0gUGlja1VwVHlwZUVudW0uRGVsaXZlcnkgJiZcclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGZ1bGxXaWR0aD17dHJ1ZX1cclxuICAgICAgICAgICAgdmFyaWFudD17J2NvbnRhaW5lZCd9XHJcbiAgICAgICAgICAgIGNvbG9yPXsnc2Vjb25kYXJ5J31cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvbWUvbXlBZGRyZXNzL2VkaXQvW2lkXScsICcvbWUvbXlBZGRyZXNzL2VkaXQvMCcpXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPntscygn5re75Yqg5paw5Zyw5Z2AJyl9PC9CdXR0b24+XHJcbiAgICAgICAgfVxyXG4gICAgICA8L0Zvb3Rlcj5cclxuICAgIDwvRGlhbG9nQ29udGVudD5cclxuICA8L0RpYWxvZz5cclxufVxyXG4iLCJpbXBvcnQge0RpYWxvZywgRGlhbG9nVGl0bGUsIERpYWxvZ0NvbnRlbnQsIFJhZGlvLCBCdXR0b259IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7ZGlhbG9nTW9kZWxGYWN0b3J5fSBmcm9tICcuLi8uLi8uLi9jb21tb25Nb2RlbC9kaWFsb2cnXHJcbmltcG9ydCB7dXNlU3RvcmVNb2RlbH0gZnJvbSAnLi4vLi4vLi4vTW9kZWxBY3Rpb24vdXNlU3RvcmUnXHJcbmltcG9ydCB7bHN9IGZyb20gJy4uLy4uLy4uL3Rvb2xzL2RlYWxLZXknXHJcbmltcG9ydCB7c2hvcENhcnRNb2RlbH0gZnJvbSAnLi4vaW5kZXgnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RDYXJkTW9kZWwgPSBkaWFsb2dNb2RlbEZhY3RvcnkoJ3NlbGVjdENhcmRNb2RlbCcsIHt9KVxyXG5cclxuY29uc3QgQ2FyZEJveCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCg2MHZ3LCAxZnIpIG1pbi1jb250ZW50O1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIGZyKTtcclxuICBncmlkLXJvdy1nYXA6IDhweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gID4gaGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICA+IGFzaWRlIHtcclxuICAgIGdyaWQtYXJlYTogMS8yLzMvMztcclxuICB9XHJcbmBcclxuY29uc3QgRm9vdGVyID0gc3R5bGVkLmRpdmBcclxuXHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBTZWxlY3RDYXJkID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3Qge3N0YXRlOiBzdGF0ZVNlbGVjdENhcmQsIGFjdGlvbnM6IGFjdGlvbnNTZWxlY3RDYXJkfSA9IHVzZVN0b3JlTW9kZWwoc2VsZWN0Q2FyZE1vZGVsKVxyXG4gIGNvbnN0IHtzdGF0ZTogc3RhdGVTaG9wQ2FydE1vZGVsLCBhY3Rpb25zOiBhY3Rpb25zU2hvcENhcnRNb2RlbH0gPSB1c2VTdG9yZU1vZGVsKHNob3BDYXJ0TW9kZWwpXHJcblxyXG4gIHJldHVybiA8RGlhbG9nXHJcbiAgICAgIG9wZW49e3N0YXRlU2VsZWN0Q2FyZC5vcGVufVxyXG4gICAgICBvbkNsb3NlPXthY3Rpb25zU2VsZWN0Q2FyZC5vbkNsb3NlfVxyXG4gID5cclxuICAgIDxEaWFsb2dUaXRsZT57bHMoJ+mAieaLqeS/oeeUqOWNoScpfTwvRGlhbG9nVGl0bGU+XHJcbiAgICA8RGlhbG9nQ29udGVudD5cclxuICAgICAge3N0YXRlU2hvcENhcnRNb2RlbC5wYXlDYXJkTGlzdC5tYXAodiA9PiA8Q2FyZEJveCBrZXk9e2BEaWFsb2dUaXRsZUFkZHJlc3NCb3hfJHt2LmlkfWB9PlxyXG4gICAgICAgIDxoZWFkZXI+e3YubmFtZX08L2hlYWRlcj5cclxuICAgICAgICA8Zm9vdGVyPntgJHt2Lm51bWJlcn1gfTwvZm9vdGVyPlxyXG4gICAgICAgIDxhc2lkZT5cclxuICAgICAgICAgIDxSYWRpb1xyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZVNlbGVjdENhcmQub3BlblJlc29sdmUodi5pZClcclxuICAgICAgICAgICAgICAgIGFjdGlvbnNTZWxlY3RDYXJkLm9uQ2xvc2UoKVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgY2hlY2tlZD17di5pZCA9PT0gc3RhdGVTaG9wQ2FydE1vZGVsLmZvcm0ucGF5bWVudE1ldGhvZENhcmRJZH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9hc2lkZT5cclxuICAgICAgPC9DYXJkQm94Pil9XHJcbiAgICAgIDxGb290ZXI+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBmdWxsV2lkdGg9e3RydWV9XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9eydjb250YWluZWQnfVxyXG4gICAgICAgICAgICBjb2xvcj17J3NlY29uZGFyeSd9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnL21lL215Q3JlZGl0Q2FyZC9lZGl0L1tpZF0nLCAnL21lL215Q3JlZGl0Q2FyZC9lZGl0LzAnKVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID57bHMoJ+a3u+WKoOaWsOaWueW8jycpfTwvQnV0dG9uPlxyXG4gICAgICA8L0Zvb3Rlcj5cclxuICAgIDwvRGlhbG9nQ29udGVudD5cclxuICA8L0RpYWxvZz5cclxufVxyXG4iLCJpbXBvcnQge21vZGVsRmFjdG9yeX0gZnJvbSAnLi4vLi4vTW9kZWxBY3Rpb24vbW9kZWxVdGlsJ1xyXG5pbXBvcnQge0RpY3QsIE9yZGVySW5mb0l0ZW1JbnB1dCwgU2hvcENhcnQsIFVzZXIsIFVzZXJBZGRyZXNzLCBVc2VyUGF5Q2FyZH0gZnJvbSAnLi4vLi4vZ3JhcGhxbFR5cGVzL3R5cGVzJ1xyXG5pbXBvcnQge1BpY2tVcFR5cGVFbnVtfSBmcm9tICcuLi8uLi9zc19jb21tb24vZW51bSdcclxuaW1wb3J0IHtkZWFsTWF5YmVOdW1iZXIsIGZwTWVyZ2VQcmV9IGZyb20gJy4uLy4uL3Rvb2xzL3V0aWxzJ1xyXG5pbXBvcnQge3NldEZvcm19IGZyb20gJy4uLy4uL3Rvb2xzL2NvbW1vbkFjdGlvbidcclxuaW1wb3J0IHtkb2N9IGZyb20gJy4uLy4uL2dyYXBocWxUeXBlcy9kb2MnXHJcbmltcG9ydCB7U2hvcENhcnRQYWdlfSBmcm9tICcuL3Nob3BDYXJ0J1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7dXNlU3RvcmVNb2RlbH0gZnJvbSAnLi4vLi4vTW9kZWxBY3Rpb24vdXNlU3RvcmUnXHJcbmltcG9ydCB7T3JkZXJQYWdlfSBmcm9tICcuL29yZGVyUGFnZSdcclxuXHJcbmV4cG9ydCBjb25zdCBwYWdlVHlwZUVudW0gPSB7XHJcbiAgc2hvcENhcnQ6ICdzaG9wQ2FydCcsXHJcbiAgb3JkZXI6ICdvcmRlcicsXHJcbn1cclxuXHJcbmNvbnN0IGluaXRGb3JtOiBPcmRlckluZm9JdGVtSW5wdXQgPSB7XHJcbiAgcGlja1VwVHlwZTogUGlja1VwVHlwZUVudW0uU2VsZixcclxuICBhZGRyZXNzSWQ6ICcnLFxyXG4gIHBheW1lbnRNZXRob2RDYXJkSWQ6ICcnLFxyXG4gIGRlZHVjdENvaW46IDAsXHJcbiAgc2FsZVRheDogMCxcclxuICB0cmFuc3BvcnRhdGlvbkNvc3RzOiAwLFxyXG59XHJcbmV4cG9ydCBjb25zdCBzaG9wQ2FydE1vZGVsID0gbW9kZWxGYWN0b3J5KCdzaG9wQ2FydE1vZGVsJywge1xyXG4gIHVzZXI6IHt9IGFzIFVzZXIsXHJcbiAgcGF5Q2FyZExpc3Q6IFtdIGFzIFVzZXJQYXlDYXJkW10sXHJcbiAgdXNlckFkZHJlc3NMaXN0OiBbXSBhcyBVc2VyQWRkcmVzc1tdLFxyXG4gIHNlbGZBZGRyZXNzOiBbXSBhcyBhbnlbXSxcclxuICBmcmVpZ2h0Q29uZmlnOiBbXSBhcyBhbnlbXSxcclxuICB1c2VyTGV2ZWxMaXN0OiBbXSBhcyBEaWN0W10sXHJcbiAgcGFnZVR5cGU6IHBhZ2VUeXBlRW51bS5zaG9wQ2FydCxcclxuICBzaG9wQ2FydExpc3Q6IFtdIGFzIFNob3BDYXJ0W10sXHJcbiAgc2hvcENhcnRMaXN0TmV4dDogW10gYXMgU2hvcENhcnRbXSxcclxuICBmb3JtOiB7XHJcbiAgICAuLi5pbml0Rm9ybSxcclxuICB9IGFzIE9yZGVySW5mb0l0ZW1JbnB1dCxcclxuICBkZWFsUHJvZHVjdE51bWJlcjogKHN0YXRlOiBhbnkpID0+IChzdGF0ZS5zaG9wQ2FydExpc3QgYXMgYW55W10pLnJlZHVjZSgocHJlLCBjdXIpID0+IHByZSArIChjdXI/Lm51bWJlciA/PyAwKSwgMCksXHJcbiAgZGVhbEFkZHJlc3NMaXN0OiAoKHN0YXRlOiBhbnkpID0+IChzdGF0ZS5mb3JtLnBpY2tVcFR5cGUgPT09IFBpY2tVcFR5cGVFbnVtLkRlbGl2ZXJ5ICYmIHN0YXRlLnVzZXJBZGRyZXNzTGlzdCkgfHwgc3RhdGUuc2VsZkFkZHJlc3MubWFwKCh2OiBhbnkpID0+ICh7XHJcbiAgICAuLi52LFxyXG4gICAgY29tYmluZUFkZHJlc3M6IGAke3YucHJvdmluY2V9ICR7di5jaXR5fSAke3Yuc3RyZWV0QWRkcmVzc31gLFxyXG4gICAgbmFtZTogdi5mdWxsTmFtZSxcclxuICAgIGNvbnRhY3RJbmZvcm1hdGlvbjogdi5waG9uZSxcclxuICB9KSkpIGFzIChzdGF0ZTogYW55KSA9PiBVc2VyQWRkcmVzc1tdLFxyXG4gIGRlYWxBZGRyZXNzRGF0YTogKHN0YXRlOiBhbnkpID0+IHN0YXRlLmRlYWxBZGRyZXNzTGlzdChzdGF0ZSkuZmluZCgodjogVXNlckFkZHJlc3MpID0+IHYuaWQgPT09IHN0YXRlLmZvcm0uYWRkcmVzc0lkKSB8fCB7fSxcclxuICBpbml0QWRkcmVzc0lkOiAoc3RhdGU6IGFueSkgPT4gKHN0YXRlLmZvcm0ucGlja1VwVHlwZSA9PT0gUGlja1VwVHlwZUVudW0uRGVsaXZlcnkgJiYgc3RhdGUudXNlckFkZHJlc3NMaXN0Py5maW5kKCh2OiBVc2VyQWRkcmVzcykgPT4gdi5pc0RlZmF1bHQpPy5pZCkgfHwgc3RhdGUuc2VsZkFkZHJlc3M/LlswXT8uaWQsXHJcbiAgZGVhbFByb2R1Y3RUb3RhbDogKHN0YXRlOiBhbnkpID0+IHN0YXRlLnNob3BDYXJ0TGlzdC5yZWR1Y2UoKHByZTogYW55LCBjdXI6IGFueSkgPT4gcHJlICsgKGRlYWxNYXliZU51bWJlcihjdXI/Lm51bWJlcikgKiBkZWFsTWF5YmVOdW1iZXIoY3VyPy5wcm9kdWN0Py5wcmljZU91dCkpLCAwKSxcclxufSwge1xyXG4gIGNsZWFyRGF0YTogKHZhbHVlLCBvcHRpb24pID0+IHtcclxuICAgIG9wdGlvbi5zZXREYXRhKGZwTWVyZ2VQcmUoe1xyXG4gICAgICBmb3JtOiBpbml0Rm9ybSxcclxuICAgICAgcGFnZVR5cGU6IHBhZ2VUeXBlRW51bS5zaG9wQ2FydCxcclxuICAgIH0pKVxyXG4gIH0sXHJcbiAgY2xlYXJGb3JtOiAodmFsdWUsIG9wdGlvbikgPT4gb3B0aW9uLnNldERhdGEoZnBNZXJnZVByZSh7XHJcbiAgICBmb3JtOiB7XHJcbiAgICAgIC4uLmluaXRGb3JtLFxyXG4gICAgfSxcclxuICB9KSksXHJcbiAgc2V0Rm9ybTogc2V0Rm9ybSxcclxuICBnZXRMaXN0OiBhc3luYyAodmFsdWUsIG9wdGlvbikgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgb3B0aW9uLnF1ZXJ5KGRvYy51c2VyU2hvcENhcnRMaXN0KVxyXG4gICAgb3B0aW9uLnNldERhdGEoZnBNZXJnZVByZSh7XHJcbiAgICAgIHNob3BDYXJ0TGlzdDogcmVzPy5zaG9wQ2FydExpc3QuZmlsdGVyKCh2OiBTaG9wQ2FydCkgPT4gIXYuaXNOZXh0KSA/PyBbXSxcclxuICAgICAgc2hvcENhcnRMaXN0TmV4dDogcmVzPy5zaG9wQ2FydExpc3QuZmlsdGVyKCh2OiBTaG9wQ2FydCkgPT4gISF2LmlzTmV4dCkgPz8gW10sXHJcbiAgICB9KSlcclxuICB9LFxyXG4gIHVwZGF0ZVBhZ2VUeXBlOiAodmFsdWU6IHN0cmluZywgb3B0aW9uKSA9PiBvcHRpb24uc2V0RGF0YShmcE1lcmdlUHJlKHtcclxuICAgIHBhZ2VUeXBlOiB2YWx1ZSxcclxuICB9KSksXHJcbiAgdXBkYXRlUGF5Q2FyZExpc3Q6IGFzeW5jICh2YWx1ZSwgb3B0aW9uKSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBvcHRpb24ucXVlcnkoZG9jLm9yZGVyQ29uZmlybUluZm8pXHJcbiAgICBvcHRpb24uc2V0RGF0YShmcE1lcmdlUHJlKHtcclxuICAgICAgcGF5Q2FyZExpc3Q6IHJlcz8ucGF5Q2FyZExpc3RPbmVVc2VyLFxyXG4gICAgfSkpXHJcbiAgfSxcclxuICBnZXRPcmRlckluZm86IGFzeW5jICh2YWx1ZSwgb3B0aW9uKSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBvcHRpb24ucXVlcnkoZG9jLm9yZGVyQ29uZmlybUluZm8pXHJcbiAgICBvcHRpb24uc2V0RGF0YShmcE1lcmdlUHJlKHtcclxuICAgICAgdXNlcjogcmVzPy5vbmVVc2VyLFxyXG4gICAgICBwYXlDYXJkTGlzdDogcmVzPy5wYXlDYXJkTGlzdE9uZVVzZXIsXHJcbiAgICAgIHVzZXJBZGRyZXNzTGlzdDogcmVzPy51c2VyQWRkcmVzc0xpc3RPbmVVc2VyLFxyXG4gICAgICBzZWxmQWRkcmVzczogcmVzPy5nZXREYXRhQ29uZmlnPy52YWx1ZT8ubGlzdCA/PyBbXSxcclxuICAgICAgZnJlaWdodENvbmZpZzogcmVzPy5mcmVpZ2h0Q29uZmlnPy52YWx1ZT8uZnJlaWdodExpc3QgPz8gW10sXHJcbiAgICAgIHVzZXJMZXZlbExpc3Q6IHJlcz8udXNlckxldmVsTGlzdCA/PyBbXSxcclxuICAgIH0pKVxyXG4gICAgb3B0aW9uLnNldERhdGEoZnBNZXJnZVByZSh7XHJcbiAgICAgIGZvcm06IHtcclxuICAgICAgICBhZGRyZXNzSWQ6IChvcHRpb24uZGF0YS5mb3JtLnBpY2tVcFR5cGUgPT09IFBpY2tVcFR5cGVFbnVtLkRlbGl2ZXJ5ICYmIHJlcz8udXNlckFkZHJlc3NMaXN0T25lVXNlcj8uZmluZCgodjogVXNlckFkZHJlc3MpID0+IHYuaXNEZWZhdWx0KT8uaWQpIHx8IHJlcz8uZ2V0RGF0YUNvbmZpZz8udmFsdWU/Lmxpc3Q/LlswXT8uaWQsXHJcbiAgICAgICAgcGF5bWVudE1ldGhvZENhcmRJZDogKHJlcz8ucGF5Q2FyZExpc3RPbmVVc2VyIGFzIFVzZXJQYXlDYXJkW10pPy5maW5kKHYgPT4gdi5pc0RlZmF1bHQpPy5pZCB8fCAnJyxcclxuICAgICAgfSxcclxuICAgIH0pKVxyXG4gIH0sXHJcbiAgc3VibWl0OiBhc3luYyAodmFsdWU6IE9yZGVySW5mb0l0ZW1JbnB1dCwgb3B0aW9uKSA9PiB7XHJcbiAgICByZXR1cm4gYXdhaXQgb3B0aW9uLm11dGF0ZShkb2Muc2F2ZU9yZGVyLCB7XHJcbiAgICAgIG9yZGVySW5mb0l0ZW1JbnB1dDoge1xyXG4gICAgICAgIC4uLnZhbHVlLFxyXG4gICAgICB9IGFzIE9yZGVySW5mb0l0ZW1JbnB1dCxcclxuICAgIH0pXHJcbiAgfSxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJ0UGFnZSA9ICgpID0+IHtcclxuICBjb25zdCB7c3RhdGU6IHN0YXRlU0NNfSA9IHVzZVN0b3JlTW9kZWwoc2hvcENhcnRNb2RlbClcclxuICByZXR1cm4gKHN0YXRlU0NNLnBhZ2VUeXBlID09PSBwYWdlVHlwZUVudW0ub3JkZXIgJiYgPE9yZGVyUGFnZS8+KSB8fCA8U2hvcENhcnRQYWdlLz5cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQ2hldnJvblJpZ2h0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hldnJvblJpZ2h0J1xyXG5pbXBvcnQge0hlYWRlclRpdGxlfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0hlYWRlclRpdGxlL0hlYWRlclRpdGxlJ1xyXG5pbXBvcnQge3VzZVN0b3JlTW9kZWx9IGZyb20gJy4uLy4uL01vZGVsQWN0aW9uL3VzZVN0b3JlJ1xyXG5pbXBvcnQge3BhZ2VUeXBlRW51bSwgc2hvcENhcnRNb2RlbH0gZnJvbSAnLi9pbmRleCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHtsc30gZnJvbSAnLi4vLi4vdG9vbHMvZGVhbEtleSdcclxuaW1wb3J0IHtQaWNrVXBUeXBlRW51bX0gZnJvbSAnLi4vLi4vc3NfY29tbW9uL2VudW0nXHJcbmltcG9ydCB7ZG9jfSBmcm9tICcuLi8uLi9ncmFwaHFsVHlwZXMvZG9jJ1xyXG5pbXBvcnQge0ljb25CdXR0b24sIExpbmVhclByb2dyZXNzLCBUZXh0RmllbGR9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQge0JTY3JvbGxlcn0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CU2Nyb2xsL0JTY3JvbGxlcidcclxuaW1wb3J0IHtTcGFjZX0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Cb3gvQm94J1xyXG5pbXBvcnQge1NlbGVjdEFkZHJlc3MsIHNlbGVjdEFkZHJlc3NNb2RlbH0gZnJvbSAnLi9jb21wb25lbnRzL1NlbGVjdEFkZHJlc3MnXHJcbmltcG9ydCB7Z3JleX0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzJ1xyXG5pbXBvcnQge1NlbGVjdENhcmQsIHNlbGVjdENhcmRNb2RlbH0gZnJvbSAnLi9jb21wb25lbnRzL1NlbGVjdENhcmQnXHJcbmltcG9ydCB7ZGVhbE1heWJlTnVtYmVyLCBkZWFsTW9uZXksIGRlYWxVcmxRdWVyeX0gZnJvbSAnLi4vLi4vdG9vbHMvdXRpbHMnXHJcbmltcG9ydCB7bXBTdHlsZX0gZnJvbSAnLi4vLi4vc3R5bGUvY29tbW9uJ1xyXG5pbXBvcnQge0J1dHRvbkxvYWR9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQnV0dG9uTG9hZC9CdXR0b25Mb2FkJ1xyXG5pbXBvcnQge3Nob3dNZXNzYWdlfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL01lc3NhZ2UvTWVzc2FnZSdcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFNob3BUaXRsZSA9IHN0eWxlZC5kaXZgXHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gID4gZm9vdGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAke21wU3R5bGUucmVkfTtcclxuICB9XHJcbmBcclxuZXhwb3J0IGNvbnN0IEFkZHJlc3NCb3ggPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gID4gbWFpbiB7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICA+IGhlYWRlciB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIH1cclxuICB9XHJcbmBcclxuZXhwb3J0IGNvbnN0IENhcmRCb3ggPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDE2cHggMjBweDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIG1pbi1jb250ZW50O1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XHJcbiAgPiBoZWFkZXIge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgfVxyXG4gID4gYXNpZGUge1xyXG4gICAgZ3JpZC1hcmVhOiAxLzIvMy8zO1xyXG4gIH1cclxuYFxyXG5leHBvcnQgY29uc3QgU2hvcFRvdGFsID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuYFxyXG5jb25zdCBGb290ZXJGaXQgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgcGFkZGluZzogMTZweCAyNHB4O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBtYXgtY29udGVudDtcclxuICBncmlkLXJvdy1nYXA6IDhweDtcclxuICBib3gtc2hhZG93OiAke21wU3R5bGUuc2hhZG93WycxJ119O1xyXG4gID4gaGVhZGVyIHtcclxuICAgID4gc3BhbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgIH1cclxuICB9XHJcbiAgPiBhc2lkZSB7XHJcbiAgICBncmlkLWFyZWE6IDEvMi8zLzM7XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgT3JkZXJQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3Qge2FjdGlvbnM6IGFjdGlvbnNTQU19ID0gdXNlU3RvcmVNb2RlbChzZWxlY3RBZGRyZXNzTW9kZWwpXHJcbiAgY29uc3Qge2FjdGlvbnM6IGFjdGlvbnNTZWxlY3RDYXJkfSA9IHVzZVN0b3JlTW9kZWwoc2VsZWN0Q2FyZE1vZGVsKVxyXG4gIGNvbnN0IHtzdGF0ZTogc3RhdGVTQ00sIGFjdGlvbnM6IGFjdGlvbnNTQ00sIGdldExvYWR9ID0gdXNlU3RvcmVNb2RlbChzaG9wQ2FydE1vZGVsKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFzdGF0ZVNDTS51c2VyLmlkKSB7XHJcbiAgICAgIGFjdGlvbnNTQ00uZ2V0T3JkZXJJbmZvKClcclxuICAgIH1cclxuICB9LCBbXSlcclxuXHJcbiAgY29uc3QgYWRkcmVzc0RhdGEgPSBzdGF0ZVNDTS5kZWFsQWRkcmVzc0RhdGEoc3RhdGVTQ00pXHJcbiAgY29uc3QgY2FyZERhdGEgPSBzdGF0ZVNDTS5wYXlDYXJkTGlzdD8uZmluZCh2ID0+IHYuaWQgPT09IHN0YXRlU0NNLmZvcm0ucGF5bWVudE1ldGhvZENhcmRJZCkgfHwge31cclxuICBjb25zdCBwcm9kdWN0VG90YWwgPSBzdGF0ZVNDTS5kZWFsUHJvZHVjdFRvdGFsKHN0YXRlU0NNKVxyXG4gIGNvbnN0IHRyYW5zcG9ydGF0aW9uQ29zdHMgPSAoc3RhdGVTQ00uZm9ybS5waWNrVXBUeXBlID09PSBQaWNrVXBUeXBlRW51bS5EZWxpdmVyeSAmJiAoc3RhdGVTQ00uZnJlaWdodENvbmZpZy5yZWR1Y2UoKHByZSwgY3VyKSA9PiB7XHJcbiAgICBpZiAocHJlID4gcGFyc2VGbG9hdChjdXI/LmZyZWlnaHRQYXkpICYmIHByb2R1Y3RUb3RhbCA8IHBhcnNlRmxvYXQoY3VyPy5vcmRlck1heCkpIHtcclxuICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoY3VyPy5mcmVpZ2h0UGF5KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHByZVxyXG4gICAgfVxyXG4gIH0sIHBhcnNlRmxvYXQoc3RhdGVTQ00uZnJlaWdodENvbmZpZ1tzdGF0ZVNDTS5mcmVpZ2h0Q29uZmlnLmxlbmd0aCAtIDFdPy5mcmVpZ2h0UGF5KSkpKSB8fCAwXHJcbiAgY29uc3QgYWN0dWFsbHlQYWlkID0gcHJvZHVjdFRvdGFsICsgdHJhbnNwb3J0YXRpb25Db3N0cyAtIGRlYWxNYXliZU51bWJlcihzdGF0ZVNDTS5mb3JtLmRlZHVjdENvaW4pICsgZGVhbE1heWJlTnVtYmVyKHN0YXRlU0NNLmZvcm0uc2FsZVRheClcclxuICBjb25zdCBnZW5lcmF0ZUNvaW4gPSBhY3R1YWxseVBhaWQgKiAwLjAxXHJcblxyXG4gIHJldHVybiA8ZGl2PlxyXG4gICAgPEhlYWRlclRpdGxlXHJcbiAgICAgICAgdGl0bGU9eyfnoa7orqTorqLljZUnfVxyXG4gICAgICAgIGJhY2tDYWxsPXsoKSA9PiB7XHJcbiAgICAgICAgICBhY3Rpb25zU0NNLnVwZGF0ZVBhZ2VUeXBlKHBhZ2VUeXBlRW51bS5zaG9wQ2FydClcclxuICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfX1cclxuICAgIC8+XHJcbiAgICB7KCEhZ2V0TG9hZChkb2Mub3JkZXJDb25maXJtSW5mbykgJiYgPExpbmVhclByb2dyZXNzLz4pIHx8IDxkaXYgc3R5bGU9e3toZWlnaHQ6ICc0cHgnfX0vPn1cclxuICAgIDxCU2Nyb2xsZXJcclxuICAgICAgICBib3hIZWlnaHQ9eydjYWxjKDEwMHZoIC0gNjVweCknfVxyXG4gICAgPlxyXG4gICAgICA8U3BhY2UgaD17MTB9Lz5cclxuICAgICAgPFNob3BUaXRsZT5cclxuICAgICAgICA8U3BhY2Ugdz17MjB9Lz5cclxuICAgICAgICB7bHMoKHN0YXRlU0NNLmZvcm0ucGlja1VwVHlwZSA9PT0gUGlja1VwVHlwZUVudW0uU2VsZiAmJiAn6Ieq5Y+W5Zyw5Z2AJykgfHwgJ+mAgei0p+WcsOWdgCcpfVxyXG4gICAgICA8L1Nob3BUaXRsZT5cclxuICAgICAgPEFkZHJlc3NCb3g+XHJcbiAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgICB7YCR7YWRkcmVzc0RhdGEuY29tYmluZUFkZHJlc3N9YH1cclxuICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgPGZvb3Rlcj5cclxuICAgICAgICAgICAge2Ake2FkZHJlc3NEYXRhLm5hbWV9ICR7YWRkcmVzc0RhdGEuY29udGFjdEluZm9ybWF0aW9ufWB9XHJcbiAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgICAgPGFzaWRlPlxyXG4gICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXthc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBhY3Rpb25zU0FNLm9wZW5DbGljaygpXHJcbiAgICAgICAgICAgICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgIGFjdGlvbnNTQ00uc2V0Rm9ybShbJ2FkZHJlc3NJZCcsIHJlc10pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPENoZXZyb25SaWdodEljb24vPlxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgIDwvYXNpZGU+XHJcbiAgICAgIDwvQWRkcmVzc0JveD5cclxuICAgICAgPFNwYWNlIGM9e2dyZXlbMjAwXX1cclxuICAgICAgICAgICAgIGg9ezE2fS8+XHJcbiAgICAgIDxTcGFjZSBoPXsxNn0vPlxyXG4gICAgICA8U2hvcFRpdGxlPlxyXG4gICAgICAgIDxTcGFjZSB3PXsyMH0vPlxyXG4gICAgICAgIHtscygn5LuY5qy+5pa55byPJyl9XHJcbiAgICAgIDwvU2hvcFRpdGxlPlxyXG4gICAgICA8Q2FyZEJveD5cclxuICAgICAgICA8aGVhZGVyPntjYXJkRGF0YS5uYW1lfTwvaGVhZGVyPlxyXG4gICAgICAgIDxmb290ZXI+e2NhcmREYXRhLm51bWJlcn08L2Zvb3Rlcj5cclxuICAgICAgICA8YXNpZGU+XHJcbiAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGFjdGlvbnNTZWxlY3RDYXJkLm9wZW5DbGljaygpXHJcbiAgICAgICAgICAgICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgIGFjdGlvbnNTQ00uc2V0Rm9ybShbJ3BheW1lbnRNZXRob2RDYXJkSWQnLCByZXNdKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxDaGV2cm9uUmlnaHRJY29uLz5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICA8L2FzaWRlPlxyXG4gICAgICA8L0NhcmRCb3g+XHJcbiAgICAgIDxTcGFjZSBjPXtncmV5WzIwMF19XHJcbiAgICAgICAgICAgICBoPXsxNn0vPlxyXG4gICAgICA8U3BhY2UgaD17MTZ9Lz5cclxuICAgICAgPFNob3BUaXRsZT5cclxuICAgICAgICA8U3BhY2Ugdz17MjB9Lz5cclxuICAgICAgICB7bHMoJ+S9v+eUqOi+vuS6uuW4gScpfVxyXG4gICAgICAgIDxTcGFjZSB3PXsxNn0vPlxyXG4gICAgICAgIDxmb290ZXI+e2xzKCflvZPmnIjlj6/nlKjkvZnpop0nKX17ZGVhbE1vbmV5KHN0YXRlU0NNLnVzZXIub3JkZXJDb2luQ3VycmVudE1vbnRoKX08L2Zvb3Rlcj5cclxuICAgICAgPC9TaG9wVGl0bGU+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPFNwYWNlIHc9ezIwfS8+XHJcbiAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICBzdHlsZT17e21hcmdpblRvcDogJzhweCcsIG1hcmdpbkJvdHRvbTogJzI0cHgnfX1cclxuICAgICAgICAgICAgbGFiZWw9e2xzKCcnKX1cclxuICAgICAgICAgICAgdmFsdWU9e3N0YXRlU0NNLmZvcm0uZGVkdWN0Q29pbn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4gICAgICAgICAgICAgIGFjdGlvbnNTQ00uc2V0Rm9ybShbJ2RlZHVjdENvaW4nLCBlLnRhcmdldC52YWx1ZV0pXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxTcGFjZSBjPXtncmV5WzIwMF19XHJcbiAgICAgICAgICAgICBoPXsxNn0vPlxyXG4gICAgICA8U3BhY2UgaD17MTZ9Lz5cclxuICAgICAgPFNob3BUb3RhbD5cclxuICAgICAgICA8aGVhZGVyPntscygn6LSt54mp6L2m5oC76K6hJyl9PC9oZWFkZXI+XHJcbiAgICAgICAgPGZvb3Rlcj57ZGVhbE1vbmV5KHByb2R1Y3RUb3RhbCl9PC9mb290ZXI+XHJcbiAgICAgIDwvU2hvcFRvdGFsPlxyXG4gICAgICB7dHJhbnNwb3J0YXRpb25Db3N0cyA+IDAgJiYgPFNob3BUb3RhbD5cclxuICAgICAgICA8aGVhZGVyPntscygn6L+Q6LS5Jyl9PC9oZWFkZXI+XHJcbiAgICAgICAgPGZvb3Rlcj57ZGVhbE1vbmV5KHRyYW5zcG9ydGF0aW9uQ29zdHMpfTwvZm9vdGVyPlxyXG4gICAgICA8L1Nob3BUb3RhbD59XHJcbiAgICAgIDxTaG9wVG90YWw+XHJcbiAgICAgICAgPGhlYWRlcj57bHMoJ+i+vuS6uuW4geaKteaJoycpfTwvaGVhZGVyPlxyXG4gICAgICAgIDxmb290ZXI+e2RlYWxNb25leShzdGF0ZVNDTS5mb3JtLmRlZHVjdENvaW4sICctJyl9PC9mb290ZXI+XHJcbiAgICAgIDwvU2hvcFRvdGFsPlxyXG4gICAgICA8U2hvcFRvdGFsPlxyXG4gICAgICAgIDxoZWFkZXI+e2xzKCfmtojotLnnqI4nKX08L2hlYWRlcj5cclxuICAgICAgICA8Zm9vdGVyPntkZWFsTW9uZXkoc3RhdGVTQ00uZm9ybS5zYWxlVGF4KX08L2Zvb3Rlcj5cclxuICAgICAgPC9TaG9wVG90YWw+XHJcbiAgICAgIDxTaG9wVG90YWxcclxuICAgICAgICAgIHN0eWxlPXt7Zm9udFNpemU6ICcxOHB4J319XHJcbiAgICAgID5cclxuICAgICAgICA8aGVhZGVyPntscygn6K6i5Y2V5oC76aKdJyl9PC9oZWFkZXI+XHJcbiAgICAgICAgPGZvb3Rlcj57ZGVhbE1vbmV5KGFjdHVhbGx5UGFpZCl9PC9mb290ZXI+XHJcbiAgICAgIDwvU2hvcFRvdGFsPlxyXG4gICAgPC9CU2Nyb2xsZXI+XHJcbiAgICA8Rm9vdGVyRml0PlxyXG4gICAgICA8aGVhZGVyPntscygn5pys5qyh6K6i5Y2VJyl9XHJcbiAgICAgICAgPHNwYW4+e2xzKHN0YXRlU0NNLnVzZXJMZXZlbExpc3QuZmluZCh2ID0+IHYuY29kZSA9PT0gc3RhdGVTQ00udXNlci51c2VySW5mbz8udXNlckxldmVsKT8ubmFtZSl9PC9zcGFuPlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgICAgPGZvb3Rlcj57bHMoJ+WwhuiOt+W+l+S4i+aciOS9v+eUqOi+vuS6uuW4gSAnKX1cclxuICAgICAgICA8c3Bhbj57ZGVhbE1vbmV5KGdlbmVyYXRlQ29pbil9PC9zcGFuPlxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgICAgPGFzaWRlPlxyXG4gICAgICAgIDxCdXR0b25Mb2FkXHJcbiAgICAgICAgICAgIGxvYWRpbmc9e2dldExvYWQoZG9jLnNhdmVPcmRlcil9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBzdWJtaXREYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGVTQ00uZm9ybSxcclxuICAgICAgICAgICAgICAgIGdlbmVyYXRlQ29pbixcclxuICAgICAgICAgICAgICAgIGFjdHVhbGx5UGFpZCxcclxuICAgICAgICAgICAgICAgIHRyYW5zcG9ydGF0aW9uQ29zdHMsXHJcbiAgICAgICAgICAgICAgICBzdWJ0b3RhbDogcHJvZHVjdFRvdGFsLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudFVzZXJMZXZlbDogc3RhdGVTQ00udXNlci51c2VySW5mbz8udXNlckxldmVsLFxyXG4gICAgICAgICAgICAgICAgck9yZGVyUHJvZHVjdDogc3RhdGVTQ00uc2hvcENhcnRMaXN0Lm1hcCh2ID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgIGNvdW50OiB2Lm51bWJlcixcclxuICAgICAgICAgICAgICAgICAgcHJvZHVjdElkOiB2LnByb2R1Y3Q/LmlkLFxyXG4gICAgICAgICAgICAgICAgICBwcm9kdWN0OiB2LnByb2R1Y3QsXHJcbiAgICAgICAgICAgICAgICB9KSksXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGFjdGlvbnNTQ00uc3VibWl0KHtcclxuICAgICAgICAgICAgICAgIC4uLnN1Ym1pdERhdGEsXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICBpZiAocmVzPy5zYXZlT3JkZXI/LmlkKSB7XHJcbiAgICAgICAgICAgICAgICBzaG93TWVzc2FnZSgn5pON5L2c5oiQ5YqfIOWwhuWJjeW+gOS7mOasvicpXHJcbiAgICAgICAgICAgICAgICAvLyBhd2FpdCByb3V0ZXIucmVwbGFjZSgnL2NhcnQvcmVzdWx0JylcclxuICAgICAgICAgICAgICAgIGNvbnN0IF9xdWVyeSA9IGRlYWxVcmxRdWVyeSh7b3JkZXJJZDogcmVzPy5zYXZlT3JkZXI/LmlkfSlcclxuICAgICAgICAgICAgICAgIGF3YWl0IHJvdXRlci5yZXBsYWNlKGAvcGF5JHtfcXVlcnl9YCwgYC9wYXkke19xdWVyeX1gKVxyXG4gICAgICAgICAgICAgICAgYWN0aW9uc1NDTS5jbGVhckRhdGEoKVxyXG4gICAgICAgICAgICAgICAgYWN0aW9uc1NDTS5nZXRMaXN0KClcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9eydjb250YWluZWQnfVxyXG4gICAgICAgICAgICBjb2xvcj17J3NlY29uZGFyeSd9XHJcbiAgICAgICAgPntscygn5o+Q5Lqk6K6i5Y2VJyl9PC9CdXR0b25Mb2FkPlxyXG4gICAgICA8L2FzaWRlPlxyXG4gICAgPC9Gb290ZXJGaXQ+XHJcbiAgICA8U2VsZWN0QWRkcmVzcy8+XHJcbiAgICA8U2VsZWN0Q2FyZC8+XHJcbiAgPC9kaXY+XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtkb2N9IGZyb20gJy4uLy4uL2dyYXBocWxUeXBlcy9kb2MnXHJcbmltcG9ydCB7ZGVhbE1vbmV5LCBmcE1lcmdlfSBmcm9tICcuLi8uLi90b29scy91dGlscydcclxuaW1wb3J0IHt1c2VTdG9yZU1vZGVsfSBmcm9tICcuLi8uLi9Nb2RlbEFjdGlvbi91c2VTdG9yZSdcclxuaW1wb3J0IHtsc30gZnJvbSAnLi4vLi4vdG9vbHMvZGVhbEtleSdcclxuaW1wb3J0IHtIZWFkZXJUaXRsZX0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9IZWFkZXJUaXRsZS9IZWFkZXJUaXRsZSdcclxuaW1wb3J0IHtCb3gsIEJ1dHRvbiwgTGluZWFyUHJvZ3Jlc3MsIE1lbnVJdGVtLCBUZXh0RmllbGR9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQge2dyZXl9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycydcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHtnZXRQaWNrVXBUeXBlTmFtZSwgUGlja1VwVHlwZUVudW19IGZyb20gJy4uLy4uL3NzX2NvbW1vbi9lbnVtJ1xyXG5pbXBvcnQge0NhcnRQcm9kdWN0fSBmcm9tICcuL0NhcnRQcm9kdWN0J1xyXG5pbXBvcnQge0JTY3JvbGxlcn0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CU2Nyb2xsL0JTY3JvbGxlcidcclxuaW1wb3J0IHtwYWdlVHlwZUVudW0sIHNob3BDYXJ0TW9kZWx9IGZyb20gJy4vaW5kZXgnXHJcblxyXG5jb25zdCBCb3hDb250YWluID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgcGFkZGluZzogMCAyMHB4O1xyXG5gXHJcbmNvbnN0IFRpdGxlID0gc3R5bGVkLmRpdmBcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luOiAxNnB4IDAgMTJweDtcclxuYFxyXG5jb25zdCBNb25leSA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbmBcclxuY29uc3QgRml4Rm9vdGVyID0gc3R5bGVkKEJveClgXHJcbiAgcGFkZGluZzogMjBweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBTaG9wQ2FydFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3Qge3N0YXRlOiBzdGF0ZVNDTSwgYWN0aW9uczogYWN0aW9uc1NDTSwgZ2V0TG9hZH0gPSB1c2VTdG9yZU1vZGVsKHNob3BDYXJ0TW9kZWwpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzdGF0ZVNDTS5zaG9wQ2FydExpc3QubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGFjdGlvbnNTQ00uZ2V0TGlzdCgpXHJcbiAgICB9XHJcbiAgfSwgW10pXHJcbiAgY29uc3QgcHJvZHVjdE51bWJlciA9IHN0YXRlU0NNLmRlYWxQcm9kdWN0TnVtYmVyKHN0YXRlU0NNKVxyXG4gIGNvbnN0IHByb2R1Y3RTdWJ0b3RhbCA9IGRlYWxNb25leShzdGF0ZVNDTS5kZWFsUHJvZHVjdFRvdGFsKHN0YXRlU0NNKSlcclxuICBjb25zdCBhbGxUb3RhbCA9IHByb2R1Y3RTdWJ0b3RhbCArIDBcclxuXHJcbiAgcmV0dXJuIDxkaXY+XHJcbiAgICA8SGVhZGVyVGl0bGVcclxuICAgICAgICB0aXRsZT17J+i0reeJqei9pid9XHJcbiAgICAvPlxyXG4gICAgeyghIWdldExvYWQoZG9jLnVzZXJTaG9wQ2FydExpc3QpICYmIDxMaW5lYXJQcm9ncmVzcy8+KSB8fCA8ZGl2IHN0eWxlPXt7aGVpZ2h0OiAnNHB4J319Lz59XHJcbiAgICA8QlNjcm9sbGVyIGJveEhlaWdodD17J2NhbGMoMTAwdmggLSA2NXB4KSd9PlxyXG4gICAgICA8Qm94Q29udGFpbj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXt7cGFkZGluZ1RvcDogJzE2cHgnLCBmb250U2l6ZTogJzE4cHgnLCB0ZXh0QWxpZ246ICdjZW50ZXInfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7cHJvZHVjdE51bWJlcn17bHMoJ+S7tuWVhuWTgScpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBmb250U2l6ZTogJzE0cHgnLFxyXG4gICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgY29sb3I6IGdyZXlbNjAwXSxcclxuICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICc4cHgnLFxyXG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzEwcHgnLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtscygn5bCP6K6hJyl9Ontwcm9kdWN0U3VidG90YWx9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge3N0YXRlU0NNLnNob3BDYXJ0TGlzdC5tYXAodmFsdWUgPT4gPENhcnRQcm9kdWN0XHJcbiAgICAgICAgICAgIGtleT17YENhcnRQcm9kdWN0XyR7dmFsdWUuaWR9YH1cclxuICAgICAgICAgICAgc2hvcENhcnQ9e3ZhbHVlfS8+KVxyXG4gICAgICAgIH1cclxuICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luVG9wOiAnMTBweCd9fVxyXG4gICAgICAgICAgICBmdWxsV2lkdGg9e3RydWV9XHJcbiAgICAgICAgICAgIGxhYmVsPXtscygn6L+Q6YCB5pa55byPJyl9XHJcbiAgICAgICAgICAgIHNlbGVjdD17dHJ1ZX1cclxuICAgICAgICAgICAgdmFsdWU9e3N0YXRlU0NNLmZvcm0ucGlja1VwVHlwZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHtcclxuICAgICAgICAgICAgICBhY3Rpb25zU0NNLnNldEZvcm0oWydwaWNrVXBUeXBlJywgZXZlbnQudGFyZ2V0LnZhbHVlXSlcclxuICAgICAgICAgICAgICBhY3Rpb25zU0NNLnNldEZvcm0oWydhZGRyZXNzSWQnLCBzdGF0ZVNDTS5pbml0QWRkcmVzc0lkKGZwTWVyZ2Uoc3RhdGVTQ00sIHtcclxuICAgICAgICAgICAgICAgIGZvcm06IHtcclxuICAgICAgICAgICAgICAgICAgcGlja1VwVHlwZTogZXZlbnQudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9KSldKVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtQaWNrVXBUeXBlRW51bS5TZWxmfVxyXG4gICAgICAgICAgPntscyhnZXRQaWNrVXBUeXBlTmFtZShQaWNrVXBUeXBlRW51bS5TZWxmKSl9PC9NZW51SXRlbT5cclxuICAgICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtQaWNrVXBUeXBlRW51bS5EZWxpdmVyeX1cclxuICAgICAgICAgID57bHMoZ2V0UGlja1VwVHlwZU5hbWUoUGlja1VwVHlwZUVudW0uRGVsaXZlcnkpKX08L01lbnVJdGVtPlxyXG4gICAgICAgIDwvVGV4dEZpZWxkPlxyXG4gICAgICAgIDxUaXRsZT57bHMoJ+i+vuS6uuWNoeWSjOS8mOaDoOWIuCcpfTwvVGl0bGU+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB2YXJpYW50PXsnb3V0bGluZWQnfVxyXG4gICAgICAgID57bHMoJ+i+k+WFpemqjOivgeeggScpfTwvQnV0dG9uPlxyXG4gICAgICAgIDxUaXRsZT57bHMoJ+mihOS8sOS7t+agvCcpfTwvVGl0bGU+XHJcbiAgICAgICAgPE1vbmV5PlxyXG4gICAgICAgICAgPGFzaWRlPntscygn5bCP6K6hJyl9PC9hc2lkZT5cclxuICAgICAgICAgIDxtYWluPntwcm9kdWN0U3VidG90YWx9PC9tYWluPlxyXG4gICAgICAgIDwvTW9uZXk+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwcHgnfX0vPlxyXG4gICAgICAgIDxNb25leT5cclxuICAgICAgICAgIDxhc2lkZT57bHMoJ+aAu+iuoScpfTwvYXNpZGU+XHJcbiAgICAgICAgICA8bWFpbj57YWxsVG90YWx9PC9tYWluPlxyXG4gICAgICAgIDwvTW9uZXk+XHJcbiAgICAgICAgPFRpdGxlPntscygn5LiL5qyh6LSt5Lmw55qE5ZWG5ZOBJyl9PC9UaXRsZT5cclxuICAgICAgICB7c3RhdGVTQ00uc2hvcENhcnRMaXN0TmV4dC5tYXAodmFsdWUgPT4gPENhcnRQcm9kdWN0XHJcbiAgICAgICAgICAgIGtleT17YENhcnRQcm9kdWN0XyR7dmFsdWUuaWR9YH1cclxuICAgICAgICAgICAgc2hvcENhcnQ9e3ZhbHVlfS8+KX1cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwcHgnfX0vPlxyXG4gICAgICA8L0JveENvbnRhaW4+XHJcbiAgICA8L0JTY3JvbGxlcj5cclxuICAgIDxGaXhGb290ZXIgYm94U2hhZG93PXsxfT5cclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgdmFyaWFudD17J2NvbnRhaW5lZCd9XHJcbiAgICAgICAgICBjb2xvcj17J3NlY29uZGFyeSd9XHJcbiAgICAgICAgICBmdWxsV2lkdGg9e3RydWV9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhY3Rpb25zU0NNLnVwZGF0ZVBhZ2VUeXBlKHBhZ2VUeXBlRW51bS5vcmRlcil9XHJcbiAgICAgID7ljrvnu5Pnrpc8L0J1dHRvbj5cclxuICAgIDwvRml4Rm9vdGVyPlxyXG4gIDwvZGl2PlxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHtBcHBNb2R1bGVUeXBlRW51bSwgRGljdFR5cGVFbnVtfSBmcm9tICcuLi8uLi9zc19jb21tb24vZW51bSdcclxuaW1wb3J0IHtDYXRlZ29yeSwgRGF0YUNvbmZpZywgRGF0YUNvbmZpZ0l0ZW1JbnB1dH0gZnJvbSAnLi4vLi4vZ3JhcGhxbFR5cGVzL3R5cGVzJ1xyXG5pbXBvcnQge21vZGVsRmFjdG9yeX0gZnJvbSAnLi4vLi4vTW9kZWxBY3Rpb24vbW9kZWxVdGlsJ1xyXG5pbXBvcnQge0hvbWVUYWJzLCBob21lVGFic01vZGVsfSBmcm9tICcuL2NvbXBvbmVudHMvVGFicy9UYWJzJ1xyXG5pbXBvcnQgQ3VzQ2Fyb3VzZWwgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Td2lwZS9Td2lwZSdcclxuaW1wb3J0IHtCb3JkZXJlZElucHV0QmFzZX0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9IZWFkZXJTZWFyY2gvSGVhZGVyU2VhcmNoJ1xyXG5pbXBvcnQge0Zvb3RCYXJ9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRm9vdEJhci9Gb290QmFyJ1xyXG5pbXBvcnQge0JTY3JvbGxlcn0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CU2Nyb2xsL0JTY3JvbGxlcidcclxuaW1wb3J0IHtncmV5fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMnXHJcbmltcG9ydCB7dXNlU3RvcmVNb2RlbH0gZnJvbSAnLi4vLi4vTW9kZWxBY3Rpb24vdXNlU3RvcmUnXHJcbmltcG9ydCB7Z2V0RGF0YUNvbmZpZywgaG9tZUNhcm91c2VsSW1nc30gZnJvbSAnLi4vLi4vZ3JhcGhxbFR5cGVzL2RvYydcclxuaW1wb3J0IHtmcE1lcmdlUHJlfSBmcm9tICcuLi8uLi90b29scy91dGlscydcclxuXHJcbmV4cG9ydCBjb25zdCBIb21lVHlwZSA9IHtcclxuICBob21lOiAnaG9tZScsXHJcbiAgZ3JvdXA6ICdncm91cCcsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBob21lQ2Fyb3VzZWxNb2RlbCA9IG1vZGVsRmFjdG9yeSgnaG9tZUNhcm91c2VsTW9kZWwnLCB7XHJcbiAgaG9tZUNhcm91c2VsSW1nczogW10gYXMgRGF0YUNvbmZpZyxcclxufSwge1xyXG4gIGdldEhvbWVDYXJvdXNlbDogYXN5bmMgKHZhbHVlLCBvcHRpb24pID0+IHtcclxuICAgIGNvbnN0IHJlczIgPSBhd2FpdCBvcHRpb24ucXVlcnkoZ2V0RGF0YUNvbmZpZywge1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgdHlwZTogRGljdFR5cGVFbnVtLkhvbWVDYXJvdXNlbCxcclxuICAgICAgfSBhcyBEYXRhQ29uZmlnSXRlbUlucHV0XHJcbiAgICB9LCB7fSlcclxuICAgIGNvbnN0IHtfX3R5cGVuYW1lLCAuLi5yZXN0fSA9IHJlczI/LmdldERhdGFDb25maWdcclxuICAgIGNvbnN0IGhvbWVDYXJvdXNlbERhdGFDb21maWcgPSBhd2FpdCBvcHRpb24ucXVlcnkoaG9tZUNhcm91c2VsSW1ncywge1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgLi4ucmVzdCxcclxuICAgICAgfSBhcyBEYXRhQ29uZmlnSXRlbUlucHV0XHJcbiAgICB9LCB7fSlcclxuICAgIG9wdGlvbi5zZXREYXRhKGZwTWVyZ2VQcmUoe1xyXG4gICAgICBob21lQ2Fyb3VzZWxJbWdzOiBob21lQ2Fyb3VzZWxEYXRhQ29tZmlnLmhvbWVDYXJvdXNlbEltZ3MsXHJcbiAgICB9KSlcclxuICB9LFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IEhvbWVBcHBNb2R1bGUgPSAodHlwZT86IHN0cmluZykgPT4gZnVuY3Rpb24gKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob21lQ2Fyb3VzZWxJbWdzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvbWVDYXRlZ29yeVNlbGVjdGlvbl9saXN0RGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBNb2R1bGVDb25maWcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH06IHtcclxuICBob21lQ2Fyb3VzZWxJbWdzOiBEYXRhQ29uZmlnLFxyXG4gIGFwcE1vZHVsZUNvbmZpZzogRGF0YUNvbmZpZyxcclxuICBob21lQ2F0ZWdvcnlTZWxlY3Rpb25fbGlzdERhdGE6IENhdGVnb3J5W11cclxufSkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghKFtBcHBNb2R1bGVUeXBlRW51bS5saW1pdFRpbWUsIEFwcE1vZHVsZVR5cGVFbnVtLm1heUxpa2UsIEFwcE1vZHVsZVR5cGVFbnVtLnNhbGVzUmFuaywgQXBwTW9kdWxlVHlwZUVudW0udGhlbWVTZWxlY3Rpb24sIEFwcE1vZHVsZVR5cGVFbnVtLmNhdGVnb3J5U2VsZWN0aW9uLCBBcHBNb2R1bGVUeXBlRW51bS5saW5lUmFua2luZywgQXBwTW9kdWxlVHlwZUVudW0udG9wUmFua2luZ10gYXMgYW55W10pLmluY2x1ZGVzKHJvdXRlci5xdWVyeS5hcHBNb2R1bGUpXHJcbiAgICApIHtcclxuICAgICAgcm91dGVyLnJlcGxhY2UoJy9ob21lL1thcHBNb2R1bGVdJywgJy9ob21lL2NhdGVnb3J5U2VsZWN0aW9uJywge30pXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgY29uc3Qge2FjdGlvbnM6IGFjdGlvbnNIb21lQ2Fyb3VzZWxNb2RlbCwgc3RhdGU6IHN0YXRlSG9tZUNhcm91c2VsTW9kZWx9ID0gdXNlU3RvcmVNb2RlbChob21lQ2Fyb3VzZWxNb2RlbClcclxuICBjb25zdCB7YWN0aW9uczogYWN0aW9uc0hvbWVUYWJzfSA9IHVzZVN0b3JlTW9kZWwoaG9tZVRhYnNNb2RlbClcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYWN0aW9uc0hvbWVDYXJvdXNlbE1vZGVsLmdldEhvbWVDYXJvdXNlbCgpXHJcbiAgICBhY3Rpb25zSG9tZVRhYnMuZ2V0RGF0YSgpXHJcbiAgfSwgW10pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFjdGlvbnNIb21lVGFicy5zZXRIb21lVHlwZSgodHlwZSkgPz8gSG9tZVR5cGUuaG9tZSlcclxuICB9LCBbdHlwZV0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPEJTY3JvbGxlcj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnY29tbW9uX2JveCd9PlxyXG4gICAgICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgICAgIDxCb3JkZXJlZElucHV0QmFzZS8+XHJcbiAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3RpcCd9PlxyXG4gICAgICAgICAgICAgIDxhc2lkZT7ng63mkJw6PC9hc2lkZT5cclxuICAgICAgICAgICAgICB7Wyfolq/mnaEnLCAn5bCP6b6Z6Jm+J10ubWFwKHZhbHVlID0+IDxzcGFuIGtleT17YHRpcF8ke3ZhbHVlfWB9Pnt2YWx1ZX08L3NwYW4+KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnY3VzQ2Fyb3VzZWwnfT5cclxuICAgICAgICAgICAgICA8Q3VzQ2Fyb3VzZWxcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsnMTYwcHgnfVxyXG4gICAgICAgICAgICAgICAgICBkYXRhTGlzdD17c3RhdGVIb21lQ2Fyb3VzZWxNb2RlbC5ob21lQ2Fyb3VzZWxJbWdzPy52YWx1ZT8ubGlzdCBhcyBbXX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8SG9tZVRhYnMgaG9tZVR5cGU9e3R5cGUgPz8gSG9tZVR5cGUuaG9tZX0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLmNvbW1vbl9ib3gge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEyMHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAxO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAgICAgPiAqIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC50aXAge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBjb2xvcjogJHtncmV5WzYwMF19O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggMDtcclxuICAgICAgICAgICAgPiBzcGFuIHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDAgMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmN1c0Nhcm91c2VsIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5mb290ZXIge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L0JTY3JvbGxlcj5cclxuICAgICAgICA8Rm9vdEJhci8+XHJcbiAgICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge2dyZXl9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycydcclxuaW1wb3J0IHtLZXlib2FyZEFycm93UmlnaHR9IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucydcclxuaW1wb3J0IHtCdXR0b25CYXNlfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHt1c2VTdG9yZU1vZGVsfSBmcm9tICcuLi8uLi8uLi8uLi9Nb2RlbEFjdGlvbi91c2VTdG9yZSdcclxuaW1wb3J0IHtDYXRlZ29yeSwgQ2F0ZWdvcnlMaXN0SW5wdXR9IGZyb20gJy4uLy4uLy4uLy4uL2dyYXBocWxUeXBlcy90eXBlcydcclxuaW1wb3J0IHtkZWFsVXJsUXVlcnksIGZwTWVyZ2VQcmV9IGZyb20gJy4uLy4uLy4uLy4uL3Rvb2xzL3V0aWxzJ1xyXG5pbXBvcnQge0xvYWRpbmd9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvTG9hZGluZy9Mb2FkaW5nJ1xyXG5pbXBvcnQge2NhdGVnb3J5TGlzdH0gZnJvbSAnLi4vLi4vLi4vLi4vZ3JhcGhxbFR5cGVzL2RvYydcclxuaW1wb3J0IHtkZWFsSW1nVXJsfSBmcm9tICcuLi8uLi8uLi8uLi90b29scy9pbWcnXHJcbmltcG9ydCB7Q2F0ZWdvcnlSb290TmFtZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3NfY29tbW9uL2VudW0nXHJcbmltcG9ydCB7bW9kZWxGYWN0b3J5fSBmcm9tICcuLi8uLi8uLi8uLi9Nb2RlbEFjdGlvbi9tb2RlbFV0aWwnXHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHtob21lVGFic01vZGVsfSBmcm9tICcuLi9UYWJzL1RhYnMnXHJcblxyXG5leHBvcnQgY29uc3QgaG9tZUNhdGVnb3J5U2VsZWN0aW9uTW9kZWwgPSBtb2RlbEZhY3RvcnkoJ0hvbWVDYXRlZ29yeVNlbGVjdGlvbicsIHtcclxuICBsaXN0RGF0YTogW10gYXMgQ2F0ZWdvcnlbXSxcclxuICB0b3RhbDogMCxcclxufSwge1xyXG4gIGdldExpc3Q6IGFzeW5jICh2YWx1ZSwgb3B0aW9uKSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBvcHRpb24ucXVlcnkoY2F0ZWdvcnlMaXN0LCB7XHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBjYXRlZ29yeToge1xyXG4gICAgICAgICAgcGFyZW50Q2F0ZWdvcnk6IHtcclxuICAgICAgICAgICAgaWQ6IENhdGVnb3J5Um9vdE5hbWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0gYXMgQ2F0ZWdvcnlMaXN0SW5wdXRcclxuICAgIH0pXHJcbiAgICBvcHRpb24uc2V0RGF0YShmcE1lcmdlUHJlKHtcclxuICAgICAgbGlzdERhdGE6IHJlcz8uY2F0ZWdvcnlMaXN0Py5saXN0LFxyXG4gICAgfSkpXHJcbiAgfSxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBDYXRlZ29yeVNlbGVjdGlvbiA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHtzdGF0ZTogaG9tZUNhdGVnb3J5U2VsZWN0aW9uU3RhdGUsIGFjdGlvbnM6IGhvbWVDYXRlZ29yeVNlbGVjdGlvbkFjdGlvbnMsIGdldExvYWQ6IGhzR2V0TG9hZH0gPSB1c2VTdG9yZU1vZGVsKGhvbWVDYXRlZ29yeVNlbGVjdGlvbk1vZGVsKVxyXG4gIGNvbnN0IHtzdGF0ZTogaG9tZVRhYnNTdGF0ZX0gPSB1c2VTdG9yZU1vZGVsKGhvbWVUYWJzTW9kZWwpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBob21lQ2F0ZWdvcnlTZWxlY3Rpb25BY3Rpb25zLmdldExpc3QoKVxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHshIWhzR2V0TG9hZChjYXRlZ29yeUxpc3QpICYmIDxMb2FkaW5nLz59XHJcbiAgICAgICAge2hvbWVDYXRlZ29yeVNlbGVjdGlvblN0YXRlPy5saXN0RGF0YT8ubWFwKHZhbHVlID0+IChcclxuICAgICAgICAgICAgPEJ1dHRvbkJhc2VcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17J21haW4nfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChgL2NhdGVnb3J5L1tpZF0ke2RlYWxVcmxRdWVyeSh7aG9tZVR5cGU6IGhvbWVUYWJzU3RhdGUuaG9tZVR5cGV9KX1gLCBgL2NhdGVnb3J5LyR7dmFsdWUuaWR9JHtkZWFsVXJsUXVlcnkoe2hvbWVUeXBlOiBob21lVGFic1N0YXRlLmhvbWVUeXBlfSl9YClcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBrZXk9e2Bob21lQ2F0ZWdvcnlTZWxlY3Rpb25TdGF0ZV8ke3ZhbHVlLmlkfWB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17ZGVhbEltZ1VybCh2YWx1ZS5pbWdVcmwpfVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9JydcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAge3ZhbHVlLm5hbWV9XHJcbiAgICAgICAgICAgICAgICA8S2V5Ym9hcmRBcnJvd1JpZ2h0Lz5cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uQmFzZT5cclxuICAgICAgICApKX1cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICBkaXYgPiA6Z2xvYmFsKC5tYWluKSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJHtncmV5WzcwMF19O1xyXG4gICAgICAgICAgICA+IGltZyB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPiBzcGFuIHtcclxuICAgICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yeVNlbGVjdGlvblxyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge21vZGVsRmFjdG9yeX0gZnJvbSAnLi4vLi4vLi4vLi4vTW9kZWxBY3Rpb24vbW9kZWxVdGlsJ1xyXG5pbXBvcnQge2RvY30gZnJvbSAnLi4vLi4vLi4vLi4vZ3JhcGhxbFR5cGVzL2RvYydcclxuaW1wb3J0IHtmcE1lcmdlUHJlfSBmcm9tICcuLi8uLi8uLi8uLi90b29scy91dGlscydcclxuaW1wb3J0IHt1c2VTdG9yZU1vZGVsfSBmcm9tICcuLi8uLi8uLi8uLi9Nb2RlbEFjdGlvbi91c2VTdG9yZSdcclxuaW1wb3J0IHtQcm9kdWN0fSBmcm9tICcuLi8uLi8uLi8uLi9ncmFwaHFsVHlwZXMvdHlwZXMnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IGxzIH0gZnJvbSAnLi4vLi4vLi4vLi4vdG9vbHMvZGVhbEtleSdcclxuaW1wb3J0IHtncmV5fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMnXHJcbmltcG9ydCB7UHJvZHVjdEl0ZW1PbmVSb3d9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvUHJvZHVjdEl0ZW0vUHJvZHVjdEl0ZW0nXHJcblxyXG5jb25zdCBwcm9tb3Rpb25GbGFzaFNhbGVNb2RlbCA9IG1vZGVsRmFjdG9yeSgncHJvbW90aW9uRmxhc2hTYWxlTW9kZWwnLCB7XHJcbiAgbGltaXRUaW1lRGF0YTogW10gYXMgYW55W10sXHJcbiAgcHJvZHVjdExpc3Q6IFtdIGFzIFByb2R1Y3RbXSxcclxufSwge1xyXG4gIGdldERhdGE6IGFzeW5jICh2YWx1ZSwgb3B0aW9uKSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBvcHRpb24ucXVlcnkoZG9jLmxpbWl0VGltZURhdGEpXHJcbiAgICBjb25zdCBwcm9kdWN0UmVzID0gYXdhaXQgb3B0aW9uLnF1ZXJ5KGRvYy5wcm9kdWN0TGlzdEJ5SWRzLCB7XHJcbiAgICAgIGlkczogcmVzPy5saW1pdFRpbWVEYXRhPy52YWx1ZT8ubGlzdD8uWzBdPy5zZWxlY3RQcm9kdWN0TGlzdCA/PyBbXSxcclxuICAgIH0pXHJcbiAgICBvcHRpb24uc2V0RGF0YShmcE1lcmdlUHJlKHtcclxuICAgICAgbGltaXRUaW1lRGF0YTogcmVzPy5saW1pdFRpbWVEYXRhPy52YWx1ZT8ubGlzdCB8fCBbXSxcclxuICAgICAgcHJvZHVjdExpc3Q6IHByb2R1Y3RSZXM/LnByb2R1Y3RMaXN0QnlJZHM/Lmxpc3QgPz8gW10sXHJcbiAgICB9KSlcclxuICB9LFxyXG5cclxufSlcclxuXHJcbmNvbnN0IFRpcCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxuICA+IG1haW4ge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICB9XHJcbiAgPiBzcGFuIHtcclxuICAgIHBhZGRpbmc6IDRweCAycHg7XHJcbiAgICBtYXJnaW46IDAgMnB4O1xyXG4gICAgYmFja2dyb3VuZDogJHtncmV5WzgwMF19O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFByb21vdGlvbkZsYXNoU2FsZSA9ICgpID0+IHtcclxuICBjb25zdCB7c3RhdGU6IHN0YXRlUHJvbW90aW9uRmxhc2hTYWxlLCBhY3Rpb25zOiBhY3Rpb25zUHJvbW90aW9uRmxhc2hTYWxlfSA9IHVzZVN0b3JlTW9kZWwocHJvbW90aW9uRmxhc2hTYWxlTW9kZWwpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFjdGlvbnNQcm9tb3Rpb25GbGFzaFNhbGUuZ2V0RGF0YSgpXHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiA8ZGl2PlxyXG4gICAgPFRpcD5cclxuICAgICAgPG1haW4+e2xzKCfpmZDml7bpgInotK0nKX08L21haW4+XHJcbiAgICAgIDxzcGFuPjA8L3NwYW4+XHJcbiAgICAgIDxzcGFuPjA8L3NwYW4+XHJcbiAgICAgIDpcclxuICAgICAgPHNwYW4+MDwvc3Bhbj5cclxuICAgICAgPHNwYW4+MDwvc3Bhbj5cclxuICAgICAgOlxyXG4gICAgICA8c3Bhbj4wPC9zcGFuPlxyXG4gICAgICA8c3Bhbj4wPC9zcGFuPlxyXG4gICAgPC9UaXA+XHJcbiAgICB7c3RhdGVQcm9tb3Rpb25GbGFzaFNhbGUucHJvZHVjdExpc3QubWFwKHByb2R1Y3QgPT4gPFByb2R1Y3RJdGVtT25lUm93XHJcbiAgICAgICAga2V5PXtgUHJvZHVjdEl0ZW1PbmVSb3dfJHtwcm9kdWN0LmlkfWB9XHJcbiAgICAgICAgcHJvZHVjdD17cHJvZHVjdH1cclxuICAgIC8+KX1cclxuICA8L2Rpdj5cclxufVxyXG4iLCJpbXBvcnQge1RhYiwgVGFic30gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENhdGVnb3J5U2VsZWN0aW9uIGZyb20gJy4uL0NhdGVnb3J5U2VsZWN0aW9uL0NhdGVnb3J5U2VsZWN0aW9uJ1xyXG5pbXBvcnQgUm91dGVyLCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHttb2RlbEZhY3Rvcnl9IGZyb20gJy4uLy4uLy4uLy4uL01vZGVsQWN0aW9uL21vZGVsVXRpbCdcclxuaW1wb3J0IHt1c2VTdG9yZU1vZGVsfSBmcm9tICcuLi8uLi8uLi8uLi9Nb2RlbEFjdGlvbi91c2VTdG9yZSdcclxuaW1wb3J0IHtBcHBNb2R1bGVUeXBlRW51bSwgRGljdFR5cGVFbnVtfSBmcm9tICcuLi8uLi8uLi8uLi9zc19jb21tb24vZW51bSdcclxuaW1wb3J0IHtsc30gZnJvbSAnLi4vLi4vLi4vLi4vdG9vbHMvZGVhbEtleSdcclxuaW1wb3J0IHtQcm9tb3Rpb25GbGFzaFNhbGV9IGZyb20gJy4uL1Byb21vdGlvbkZsYXNoU2FsZS9Qcm9tb3Rpb25GbGFzaFNhbGUnXHJcbmltcG9ydCB7VGhlbWVTZWxlY3Rpb259IGZyb20gJy4uL1RoZW1lU2VsZWN0aW9uL1RoZW1lU2VsZWN0aW9uJ1xyXG5pbXBvcnQge0hvbWVUeXBlfSBmcm9tICcuLi8uLi9hcHBNb2R1bGUnXHJcbmltcG9ydCB7ZnBNZXJnZVByZX0gZnJvbSAnLi4vLi4vLi4vLi4vdG9vbHMvdXRpbHMnXHJcbmltcG9ydCB7Z2V0RGF0YUNvbmZpZ30gZnJvbSAnLi4vLi4vLi4vLi4vZ3JhcGhxbFR5cGVzL2RvYydcclxuaW1wb3J0IHtEYXRhQ29uZmlnSXRlbUlucHV0fSBmcm9tICcuLi8uLi8uLi8uLi9ncmFwaHFsVHlwZXMvdHlwZXMnXHJcblxyXG5leHBvcnQgY29uc3QgaG9tZVRhYnNNb2RlbCA9IG1vZGVsRmFjdG9yeSgnSG9tZVRhYnMnLCB7XHJcbiAgaG9tZVR5cGU6ICcnLFxyXG4gIGFwcE1vZHVsZUNvbmZpZzoge30gYXMgYW55LFxyXG59LCB7XHJcbiAgc2V0SG9tZVR5cGU6ICh2YWx1ZTogc3RyaW5nLCBvcHRpb24pID0+IHtcclxuICAgIG9wdGlvbi5zZXREYXRhKGZwTWVyZ2VQcmUoe1xyXG4gICAgICBob21lVHlwZTogdmFsdWUsXHJcbiAgICB9KSlcclxuICB9LFxyXG4gIG9uQ2hhbmdlOiAoW25hbWUsIHR5cGVdLCBvcHRpb24pID0+IHtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIFJvdXRlci5wdXNoKGAvJHt0eXBlfS9bYXBwTW9kdWxlXWAsIGAvJHt0eXBlfS8ke25hbWV9YCwge3NoYWxsb3c6IHRydWV9KVxyXG4gICAgLy8gb3B0aW9uLnNldERhdGEoZnBNZXJnZVByZSh7XHJcbiAgICAvLyAgIHZhbHVlLFxyXG4gICAgLy8gfSkpXHJcbiAgfSxcclxuICBnZXREYXRhOiBhc3luYyAodmFsdWUsIG9wdGlvbikgPT4ge1xyXG4gICAgY29uc3QgYXBwTW9kdWxlQ29uZmlnID0gYXdhaXQgb3B0aW9uLnF1ZXJ5KGdldERhdGFDb25maWcsIHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHR5cGU6IERpY3RUeXBlRW51bS5BcHBNb2R1bGUsXHJcbiAgICAgIH0gYXMgRGF0YUNvbmZpZ0l0ZW1JbnB1dFxyXG4gICAgfSwge30pXHJcbiAgICBvcHRpb24uc2V0RGF0YShmcE1lcmdlUHJlKHtcclxuICAgICAgYXBwTW9kdWxlQ29uZmlnOiBhcHBNb2R1bGVDb25maWcuZ2V0RGF0YUNvbmZpZz8udmFsdWUgPz8ge30sXHJcbiAgICB9KSlcclxuICB9LFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IEhvbWVUYWJzID0gKHtob21lVHlwZX06IHtob21lVHlwZTogc3RyaW5nfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3Qge3N0YXRlOiBob21lVGFic1N0YXRlLCBhY3Rpb25zOiBob21lVGFic0FjdGlvbnN9ID0gdXNlU3RvcmVNb2RlbChob21lVGFic01vZGVsKVxyXG5cclxuICBjb25zb2xlLmxvZygoKGhvbWVUeXBlID09PSBIb21lVHlwZS5ob21lICYmIFtcclxuICAgIFtBcHBNb2R1bGVUeXBlRW51bS5saW1pdFRpbWUsICfpmZDml7bpgInotK0nXSxcclxuICAgIFtBcHBNb2R1bGVUeXBlRW51bS5zYWxlc1JhbmssICfng63plIDmjpLooYwnXSxcclxuICAgIFtBcHBNb2R1bGVUeXBlRW51bS50aGVtZVNlbGVjdGlvbiwgJ+S4u+mimOeUhOmAiSddLFxyXG4gICAgW0FwcE1vZHVsZVR5cGVFbnVtLm1heUxpa2UsICfnjJzkvaDllpzmrKInXSxcclxuICBdKSB8fCAoaG9tZVR5cGUgPT09IEhvbWVUeXBlLmdyb3VwICYmIFtcclxuICAgIFtBcHBNb2R1bGVUeXBlRW51bS50b3BSYW5raW5nLCAn54Ot6Zeo5o6S6KGMJ10sXHJcbiAgICBbQXBwTW9kdWxlVHlwZUVudW0ubGluZVJhbmtpbmcsICflhrLnur/mjpLooYwnXSxcclxuICBdKSB8fCBbXSkuZmlsdGVyKHYgPT4gKGhvbWVUYWJzU3RhdGU/LmFwcE1vZHVsZUNvbmZpZz8uW3ZbMF1dKSkpXHJcbiAgY29uc29sZS5sb2coaG9tZVRhYnNTdGF0ZT8uYXBwTW9kdWxlQ29uZmlnKVxyXG4gIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7bWFyZ2luVG9wOiAnMTBweCd9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPFRhYnNcclxuICAgICAgICAgICAgdmFyaWFudD17J2Z1bGxXaWR0aCd9XHJcbiAgICAgICAgICAgIHZhbHVlPXtyb3V0ZXIucXVlcnkuYXBwTW9kdWxlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50LCB2YWx1ZSkgPT4gaG9tZVRhYnNBY3Rpb25zLm9uQ2hhbmdlKFt2YWx1ZSwgaG9tZVR5cGVdKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8VGFiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e0FwcE1vZHVsZVR5cGVFbnVtLmNhdGVnb3J5U2VsZWN0aW9ufVxyXG4gICAgICAgICAgICAgIGxhYmVsPXtscyhob21lVHlwZSA9PT0gSG9tZVR5cGUuZ3JvdXAgPyAn5YiG57G75ou85ZuiJyA6ICfliIbnsbvpgInmi6knKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7KChob21lVHlwZSA9PT0gSG9tZVR5cGUuaG9tZSAmJiBbXHJcbiAgICAgICAgICAgIFtBcHBNb2R1bGVUeXBlRW51bS5saW1pdFRpbWUsICfpmZDml7bpgInotK0nXSxcclxuICAgICAgICAgICAgW0FwcE1vZHVsZVR5cGVFbnVtLnNhbGVzUmFuaywgJ+eDremUgOaOkuihjCddLFxyXG4gICAgICAgICAgICBbQXBwTW9kdWxlVHlwZUVudW0udGhlbWVTZWxlY3Rpb24sICfkuLvpopjnlITpgIknXSxcclxuICAgICAgICAgICAgW0FwcE1vZHVsZVR5cGVFbnVtLm1heUxpa2UsICfnjJzkvaDllpzmrKInXSxcclxuICAgICAgICAgIF0pIHx8IChob21lVHlwZSA9PT0gSG9tZVR5cGUuZ3JvdXAgJiYgW1xyXG4gICAgICAgICAgICBbQXBwTW9kdWxlVHlwZUVudW0udG9wUmFua2luZywgJ+eDremXqOaOkuihjCddLFxyXG4gICAgICAgICAgICBbQXBwTW9kdWxlVHlwZUVudW0ubGluZVJhbmtpbmcsICflhrLnur/mjpLooYwnXSxcclxuICAgICAgICAgIF0pIHx8IFtdKS5maWx0ZXIodiA9PiAoaG9tZVRhYnNTdGF0ZT8uYXBwTW9kdWxlQ29uZmlnPy5bdlswXV0pKS5tYXAodiA9PiA8VGFiXHJcbiAgICAgICAgICAgICAga2V5PXtgQXBwTW9kdWxlVHlwZUVudW1fJHt2WzBdfWB9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3ZbMF19XHJcbiAgICAgICAgICAgICAgbGFiZWw9e2xzKHZbMV0pfVxyXG4gICAgICAgICAgLz4pfVxyXG4gICAgICAgIDwvVGFicz5cclxuICAgICAgICA8bWFpblxyXG4gICAgICAgICAgICBzdHlsZT17e21hcmdpblRvcDogJzEwcHgnfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7cm91dGVyLnF1ZXJ5LmFwcE1vZHVsZSA9PT0gQXBwTW9kdWxlVHlwZUVudW0uY2F0ZWdvcnlTZWxlY3Rpb25cclxuICAgICAgICAgICYmIDxDYXRlZ29yeVNlbGVjdGlvbi8+fVxyXG4gICAgICAgICAge3JvdXRlci5xdWVyeS5hcHBNb2R1bGUgPT09IEFwcE1vZHVsZVR5cGVFbnVtLmxpbWl0VGltZVxyXG4gICAgICAgICAgJiYgPFByb21vdGlvbkZsYXNoU2FsZS8+fVxyXG4gICAgICAgICAge3JvdXRlci5xdWVyeS5hcHBNb2R1bGUgPT09IEFwcE1vZHVsZVR5cGVFbnVtLnRoZW1lU2VsZWN0aW9uXHJcbiAgICAgICAgICAmJiA8VGhlbWVTZWxlY3Rpb24vPn1cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgZGl2IDpnbG9iYWwoLk11aUJ1dHRvbkJhc2Utcm9vdCkge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge21vZGVsRmFjdG9yeX0gZnJvbSAnLi4vLi4vLi4vLi4vTW9kZWxBY3Rpb24vbW9kZWxVdGlsJ1xyXG5pbXBvcnQge2RvY30gZnJvbSAnLi4vLi4vLi4vLi4vZ3JhcGhxbFR5cGVzL2RvYydcclxuaW1wb3J0IHtmcE1lcmdlUHJlfSBmcm9tICcuLi8uLi8uLi8uLi90b29scy91dGlscydcclxuaW1wb3J0IHt1c2VTdG9yZU1vZGVsfSBmcm9tICcuLi8uLi8uLi8uLi9Nb2RlbEFjdGlvbi91c2VTdG9yZSdcclxuaW1wb3J0IHtEYXRhQ29uZmlnSXRlbUlucHV0LCBQcm9kdWN0fSBmcm9tICcuLi8uLi8uLi8uLi9ncmFwaHFsVHlwZXMvdHlwZXMnXHJcbmltcG9ydCB7UHJvZHVjdEl0ZW19IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvUHJvZHVjdEl0ZW0vUHJvZHVjdEl0ZW0nXHJcbmltcG9ydCB7RGljdFR5cGVFbnVtfSBmcm9tICcuLi8uLi8uLi8uLi9zc19jb21tb24vZW51bSdcclxuaW1wb3J0IHtsc30gZnJvbSAnLi4vLi4vLi4vLi4vdG9vbHMvZGVhbEtleSdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHtkZWFsSW1nVXJsfSBmcm9tICcuLi8uLi8uLi8uLi90b29scy9pbWcnXHJcbmltcG9ydCB7QlNjcm9sbGVyfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL0JTY3JvbGwvQlNjcm9sbGVyJ1xyXG5cclxuY29uc3QgdGhlbWVTZWxlY3Rpb25Nb2RlbCA9IG1vZGVsRmFjdG9yeSgndGhlbWVTZWxlY3Rpb25Nb2RlbCcsIHtcclxuICB0aGVtZVNlbGVjdGlvbkRhdGE6IFtdIGFzIGFueVtdLFxyXG4gIHByb2R1Y3RMaXN0Rm9yVGhlbWU6IHt9IGFzIHtcclxuICAgIFtrZXkgaW4gc3RyaW5nXTogUHJvZHVjdFtdXHJcbiAgfSxcclxufSwge1xyXG4gIGdldERhdGE6IGFzeW5jICh2YWx1ZSwgb3B0aW9uKSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBvcHRpb24ucXVlcnkoZG9jLmdldERhdGFDb25maWcsIHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHR5cGU6IERpY3RUeXBlRW51bS5Qcm9tb3Rpb25UaGVtZVNlbGVjdCxcclxuICAgICAgfSBhcyBEYXRhQ29uZmlnSXRlbUlucHV0LFxyXG4gICAgfSlcclxuICAgIGNvbnN0IHRoZW1lTGlzdCA9IHJlcz8uZ2V0RGF0YUNvbmZpZz8udmFsdWU/Lmxpc3QgPz8gW11cclxuICAgIGNvbnN0IHByb2R1Y3RSZXMgPSBhd2FpdCBvcHRpb24ucXVlcnkoZG9jLnByb2R1Y3RMaXN0QnlJZHMsIHtcclxuICAgICAgaWRzOiB0aGVtZUxpc3QucmVkdWNlKChwcmU6IGFueSwgY3VyOiBhbnkpID0+IHtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgLi4ucHJlLFxyXG4gICAgICAgICAgLi4uY3VyPy5zZWxlY3RQcm9kdWN0TGlzdCA/PyBbXSxcclxuICAgICAgICBdXHJcbiAgICAgIH0sIFtdKSxcclxuICAgIH0pXHJcbiAgICBvcHRpb24uc2V0RGF0YShmcE1lcmdlUHJlKHtcclxuICAgICAgdGhlbWVTZWxlY3Rpb25EYXRhOiB0aGVtZUxpc3QsXHJcbiAgICAgIHByb2R1Y3RMaXN0Rm9yVGhlbWU6IHRoZW1lTGlzdC5yZWR1Y2UoKHByZTogYW55LCBjdXI6IGFueSkgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5wcmUsXHJcbiAgICAgICAgICBbY3VyLmlkXTogY3VyPy5zZWxlY3RQcm9kdWN0TGlzdD8ubWFwKChpZDogc3RyaW5nKSA9PiBwcm9kdWN0UmVzPy5wcm9kdWN0TGlzdEJ5SWRzPy5saXN0Py5maW5kKCh2MTogUHJvZHVjdCkgPT4gdjE/LmlkID09PSBpZCkgPz8gbnVsbCkuZmlsdGVyKCh2OiBhbnkpID0+IHYpLFxyXG4gICAgICAgIH1cclxuICAgICAgfSwge30pLFxyXG4gICAgfSkpXHJcbiAgfSxcclxuXHJcbn0pXHJcblxyXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5kaXZgXHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxuYFxyXG5jb25zdCBUaGVtZSA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiAtMy4xMjV2dztcclxuICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gID4gaW1nIHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMzB2dztcclxuICB9XHJcbiAgPiBtYWluLCBhc2lkZSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LXNoYWRvdzogMC4xZW0gMC4xZW0gMC4yZW0gYmxhY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgfVxyXG4gID4gbWFpbiB7XHJcbiAgICB0b3A6IDh2dztcclxuICAgIGxlZnQ6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgPiBhc2lkZSB7XHJcbiAgICB0b3A6IDE2dnc7XHJcbiAgICBsZWZ0OiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuYFxyXG5jb25zdCBQcm9kdWN0TGlzdCA9IHN0eWxlZC5kaXZgXHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgPiAqIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogOHB4IDE2cHggOHB4IDA7XHJcbiAgICB3aWR0aDogMzV2dztcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBUaGVtZVNlbGVjdGlvbiA9ICgpID0+IHtcclxuICBjb25zdCB7c3RhdGU6IHN0YXRlUHJvbW90aW9uRmxhc2hTYWxlLCBhY3Rpb25zOiBhY3Rpb25zUHJvbW90aW9uRmxhc2hTYWxlfSA9IHVzZVN0b3JlTW9kZWwodGhlbWVTZWxlY3Rpb25Nb2RlbClcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYWN0aW9uc1Byb21vdGlvbkZsYXNoU2FsZS5nZXREYXRhKClcclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIDxkaXY+XHJcbiAgICA8VGl0bGU+e2xzKCfkuLvpopjnlITpgIknKX08L1RpdGxlPlxyXG4gICAge3N0YXRlUHJvbW90aW9uRmxhc2hTYWxlLnRoZW1lU2VsZWN0aW9uRGF0YT8ubWFwKHYgPT4gPFJlYWN0LkZyYWdtZW50XHJcbiAgICAgICAga2V5PXtgdGhlbWVTZWxlY3Rpb25EYXRhSW1nJHt2LmlkfWB9XHJcbiAgICA+XHJcbiAgICAgIDxUaGVtZT5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz17ZGVhbEltZ1VybCh2LmltZ1VybCl9XHJcbiAgICAgICAgICAgIGFsdD17Jyd9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bWFpbj57di50aXRsZX08L21haW4+XHJcbiAgICAgICAgPGFzaWRlPnt2LnJlbWFya308L2FzaWRlPlxyXG4gICAgICA8L1RoZW1lPlxyXG4gICAgICA8QlNjcm9sbGVyXHJcbiAgICAgICAgICBpc1g9e3RydWV9XHJcbiAgICAgICAgICBib3hXaWR0aD17J2NhbGMoMTAwdncgLSAyMHB4KSd9XHJcbiAgICAgICAgICBib3hIZWlnaHQ9eydhdXRvJ31cclxuICAgICAgPlxyXG4gICAgICAgIDxQcm9kdWN0TGlzdD5cclxuICAgICAgICAgIHtzdGF0ZVByb21vdGlvbkZsYXNoU2FsZS5wcm9kdWN0TGlzdEZvclRoZW1lW3YuaWRdPy5tYXAodiA9PiA8UHJvZHVjdEl0ZW1cclxuICAgICAgICAgICAgICBrZXk9e2BzdGF0ZVByb21vdGlvbkZsYXNoU2FsZVByb2R1Y3RJdGVtXyR7di5pZH1gfVxyXG4gICAgICAgICAgICAgIHByb2R1Y3Q9e3Z9Lz4pfVxyXG4gICAgICAgIDwvUHJvZHVjdExpc3Q+XHJcbiAgICAgIDwvQlNjcm9sbGVyPlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD4pfVxyXG4gIDwvZGl2PlxyXG59XHJcbiIsImltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7VXNlcn0gZnJvbSAnLi4vLi4vZ3JhcGhxbFR5cGVzL3R5cGVzJ1xyXG5pbXBvcnQge2ZwTWVyZ2VQcmV9IGZyb20gJy4uLy4uL3Rvb2xzL3V0aWxzJ1xyXG5pbXBvcnQge3NldFRva2VufSBmcm9tICcuLi8uLi90b29scy90b2tlbidcclxuaW1wb3J0IHtkb2N9IGZyb20gJy4uLy4uL2dyYXBocWxUeXBlcy9kb2MnXHJcbmltcG9ydCB7bW9kZWxGYWN0b3J5fSBmcm9tICcuLi8uLi9Nb2RlbEFjdGlvbi9tb2RlbFV0aWwnXHJcblxyXG5jb25zdCB0b0xvZ2luID0gYXN5bmMgKCkgPT4ge1xyXG4gIGF3YWl0IFJvdXRlci5wdXNoKCcvbG9naW4nKVxyXG59XHJcbmV4cG9ydCBjb25zdCBtZU1vZGVsID0gbW9kZWxGYWN0b3J5KCdtZU1vZGVsJywge1xyXG4gIHVzZXI6IHt9IGFzIFVzZXIsXHJcbn0sIHtcclxuICBnZXRMb2dpblVzZXI6IGFzeW5jICh2YWx1ZSwgb3B0aW9uKSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSAoYXdhaXQgb3B0aW9uLnF1ZXJ5KGRvYy5vbmVVc2VyKSk/Lm9uZVVzZXIgYXMgVXNlclxyXG4gICAgb3B0aW9uLnNldERhdGEoZnBNZXJnZVByZSh7XHJcbiAgICAgIHVzZXI6IHJlcyxcclxuICAgIH0pKVxyXG4gIH0sXHJcbiAgbG9nb3V0OiBhc3luYyAodmFsdWUsIG9wdGlvbikgPT4ge1xyXG4gICAgc2V0VG9rZW4oJycpXHJcbiAgICBzZXRUb2tlbignJywgJ3JlZnJlc2h0b2tlbicpXHJcbiAgICBhd2FpdCB0b0xvZ2luKClcclxuICB9LFxyXG4gIHRvTG9naW46IHZhbHVlID0+IHtcclxuICAgIHRvTG9naW4oKVxyXG4gIH1cclxufSlcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9yZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL21ha2VTdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9BY2NvdW50Qm94XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9BZGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0FkZENpcmNsZU91dGxpbmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93QmFja0lvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hldnJvblJpZ2h0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9QZW9wbGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1JlZGVlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUmVtb3ZlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9TaG9wcGluZ0NhcnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1N0b3JlZnJvbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWJvb3N0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJldHRlci1zY3JvbGxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY3Jvc3MtZmV0Y2gvcG9seWZpbGxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGF0ZS1mbnMvZm9ybWF0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2gvc2V0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvY29uZmlnXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9