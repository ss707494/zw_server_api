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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+/yG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return baseActionOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return modelFactory; });
/* unused harmony export mergeModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return mergeTwoModel; });
/* unused harmony export mergeThreeModel */
/* unused harmony export mergeListModel */
/* unused harmony export initModel */
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

/***/ "+FwM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors");

/***/ }),

/***/ "+kHn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonLoad; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const ButtonLoad = props => {
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Button"], _extends({}, props, {
    disabled: !!props.loading || props.disabled
  }), props.children, !!props.loading && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["CircularProgress"], {
    color: "inherit",
    size: 26
  }));
};

/***/ }),

/***/ "+vfP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ls; });
const ls = key => key !== null && key !== void 0 ? key : '';

/***/ }),

/***/ "26vd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ HomeType; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ HomeAppModule; });

// UNUSED EXPORTS: homeCarouselModel

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./utils/ss_common/enum.ts
var ss_common_enum = __webpack_require__("4Rmy");

// EXTERNAL MODULE: ./utils/ModelAction/modelUtil.ts
var modelUtil = __webpack_require__("+/yG");

// EXTERNAL MODULE: ./utils/view/home/components/Tabs/Tabs.tsx + 6 modules
var Tabs = __webpack_require__("XiiW");

// EXTERNAL MODULE: ./utils/components/Swipe/Swipe.tsx
var Swipe = __webpack_require__("K0AU");

// EXTERNAL MODULE: external "@material-ui/core/colors"
var colors_ = __webpack_require__("+FwM");

// EXTERNAL MODULE: external "@material-ui/core/styles/makeStyles"
var makeStyles_ = __webpack_require__("8//M");
var makeStyles_default = /*#__PURE__*/__webpack_require__.n(makeStyles_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: external "@material-ui/icons"
var icons_ = __webpack_require__("2kat");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./utils/style/common.ts
var common = __webpack_require__("ZtJr");

// EXTERNAL MODULE: ./utils/tools/dealKey.ts
var dealKey = __webpack_require__("+vfP");

// EXTERNAL MODULE: ./utils/components/ShoppingCartIconButton/ShoppingCartIconButton.tsx
var ShoppingCartIconButton = __webpack_require__("cae+");

// CONCATENATED MODULE: ./utils/components/HeaderSearch/HeaderSearch.tsx
var __jsx = external_react_default.a.createElement;











const borderedInputBaseStyles = ({
  palette
}) => ({
  root: {
    width: '100%',
    borderRadius: '14px',
    border: '2px solid',
    borderColor: colors_["blueGrey"][200],
    '&:hover:not($disabled)': {
      borderColor: colors_["blueGrey"][500]
    },
    '& > svg': {
      color: colors_["blueGrey"][300]
    }
  },
  adornedStart: {
    paddingLeft: '0.5rem'
  },
  adornedEnd: {
    paddingRight: '0.5rem'
  },
  focused: {
    borderColor: colors_["blue"][700],
    '&:hover:not($disabled)': {
      borderColor: colors_["blue"][700]
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
    borderColor: colors_["blueGrey"][300],
    backgroundColor: colors_["blueGrey"][100]
  }
});
const useBorderedInputBaseStyles = makeStyles_default()(borderedInputBaseStyles, {
  name: 'BorderedInputBase'
});
const BorderedInputBase = () => {
  const styles = useBorderedInputBaseStyles();
  return __jsx(core_["InputBase"], {
    classes: styles,
    placeholder: '',
    startAdornment: __jsx(icons_["Search"], null)
  });
};
const Box = external_styled_components_default.a.div.withConfig({
  displayName: "HeaderSearch__Box",
  componentId: "gyrwuh-0"
})(["height:45px;box-shadow:", ";display:grid;grid-template-columns:96px 1fr 96px;align-items:center;"], common["a" /* mpStyle */].shadow['1']);
const Logo = external_styled_components_default.a.div.withConfig({
  displayName: "HeaderSearch__Logo",
  componentId: "gyrwuh-1"
})(["> img{display:none;width:20px;height:35px;}"]);
const Title = external_styled_components_default.a.div.withConfig({
  displayName: "HeaderSearch__Title",
  componentId: "gyrwuh-2"
})(["justify-self:center;"]);
const Action = external_styled_components_default.a.div.withConfig({
  displayName: "HeaderSearch__Action",
  componentId: "gyrwuh-3"
})(["display:flex;"]);
const HeaderSearch = ({
  homeType
}) => {
  const router = Object(router_["useRouter"])();
  return __jsx(Box, null, __jsx(Logo, null, __jsx("img", {
    src: '/img/home/logo.png',
    alt: ""
  })), __jsx(Title, null, Object(dealKey["a" /* ls */])(homeType === HomeType.group ? '拼团' : '逛店')), __jsx(Action, null, __jsx(core_["IconButton"], {
    onClick: () => {
      router.push('/searchPage');
    }
  }, __jsx(icons_["Search"], null)), __jsx(ShoppingCartIconButton["a" /* ShoppingCartIconButton */], null)));
};
// EXTERNAL MODULE: ./utils/components/FootBar/FootBar.tsx
var FootBar = __webpack_require__("YRx9");

// EXTERNAL MODULE: ./utils/components/BScroll/BScroller.tsx
var BScroller = __webpack_require__("Z3gB");

// EXTERNAL MODULE: ./utils/ModelAction/useStore.ts + 2 modules
var useStore = __webpack_require__("U81q");

// EXTERNAL MODULE: ./utils/graphqlTypes/doc/index.ts + 1 modules
var doc = __webpack_require__("i7FU");

// EXTERNAL MODULE: ./utils/tools/utils.ts
var utils = __webpack_require__("cBzo");

// CONCATENATED MODULE: ./utils/view/home/appModule.tsx

var appModule_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }














const HomeType = {
  home: 'home',
  group: 'group'
};
const homeCarouselModel = Object(modelUtil["c" /* modelFactory */])('homeCarouselModel', {
  homeCarouselImgs: []
}, {
  getHomeCarousel: async (value, option) => {
    const res2 = await option.query(doc["c" /* getDataConfig */], {
      data: {
        type: ss_common_enum["d" /* DictTypeEnum */].HomeCarousel
      }
    }, {});

    const _res2$getDataConfig = res2 === null || res2 === void 0 ? void 0 : res2.getDataConfig,
          {
      __typename
    } = _res2$getDataConfig,
          rest = _objectWithoutProperties(_res2$getDataConfig, ["__typename"]);

    const homeCarouselDataComfig = await option.query(doc["d" /* homeCarouselImgs */], {
      data: _objectSpread({}, rest)
    }, {});
    option.setData(Object(utils["f" /* fpMergePre */])({
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

  const router = Object(router_["useRouter"])();
  Object(external_react_["useEffect"])(() => {
    if (router.query.appModule && ![ss_common_enum["b" /* AppModuleTypeEnum */].limitTime, ss_common_enum["b" /* AppModuleTypeEnum */].mayLike, ss_common_enum["b" /* AppModuleTypeEnum */].salesRank, ss_common_enum["b" /* AppModuleTypeEnum */].themeSelection, ss_common_enum["b" /* AppModuleTypeEnum */].categorySelection, ss_common_enum["b" /* AppModuleTypeEnum */].lineRanking, ss_common_enum["b" /* AppModuleTypeEnum */].topRanking].includes(router.query.appModule)) {
      router.replace('/home/[appModule]', '/home/categorySelection', {});
    }
  });
  const {
    actions: actionsHomeCarouselModel,
    state: stateHomeCarouselModel
  } = Object(useStore["b" /* useStoreModel */])(homeCarouselModel);
  const {
    actions: actionsHomeTabs
  } = Object(useStore["b" /* useStoreModel */])(Tabs["b" /* homeTabsModel */]);
  Object(external_react_["useEffect"])(() => {
    actionsHomeCarouselModel.getHomeCarousel();
    actionsHomeTabs.getData();
  }, []);
  Object(external_react_["useEffect"])(() => {
    actionsHomeTabs.setHomeType(type !== null && type !== void 0 ? type : HomeType.home);
  }, [type]);
  return appModule_jsx("div", null, appModule_jsx(HeaderSearch, {
    homeType: type !== null && type !== void 0 ? type : HomeType.home
  }), appModule_jsx(BScroller["a" /* BScroller */], null, appModule_jsx("div", {
    className: style_default.a.dynamic([["1873098083", [colors_["grey"][600]]]]) + " " + 'common_box'
  }, appModule_jsx("div", {
    className: style_default.a.dynamic([["1873098083", [colors_["grey"][600]]]]) + " " + 'cusCarousel'
  }, appModule_jsx(Swipe["a" /* default */], {
    height: '160px',
    dataList: (_stateHomeCarouselMod = stateHomeCarouselModel.homeCarouselImgs) === null || _stateHomeCarouselMod === void 0 ? void 0 : (_stateHomeCarouselMod2 = _stateHomeCarouselMod.value) === null || _stateHomeCarouselMod2 === void 0 ? void 0 : _stateHomeCarouselMod2.list
  })), appModule_jsx("div", {
    className: style_default.a.dynamic([["1873098083", [colors_["grey"][600]]]])
  }, appModule_jsx(Tabs["a" /* HomeTabs */], {
    homeType: type !== null && type !== void 0 ? type : HomeType.home
  }))), appModule_jsx(style_default.a, {
    id: "1873098083",
    dynamic: [colors_["grey"][600]]
  }, [".common_box.__jsx-style-dynamic-selector{padding-top:3.125vw;padding-bottom:37.5vw;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;-webkit-flex-shrink:1;-ms-flex-negative:1;flex-shrink:1;overflow:auto;}", ".common_box.__jsx-style-dynamic-selector>*.__jsx-style-dynamic-selector{margin-left:3.125vw;margin-right:3.125vw;}", `.tip.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;color:${colors_["grey"][600]};padding:2.5vw 0;}`, ".tip.__jsx-style-dynamic-selector>span.__jsx-style-dynamic-selector{margin:0 3.125vw;}", ".cusCarousel.__jsx-style-dynamic-selector{border-radius:3.125vw;overflow:hidden;}", ".footer.__jsx-style-dynamic-selector{height:62.5vw;}"])), appModule_jsx(FootBar["a" /* FootBar */], null));
};

/***/ }),

/***/ "2kat":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons");

/***/ }),

/***/ "3F1g":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/StarRounded");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4Rmy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return PromoCodeTypeEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return DiscountTypeEnum; });
/* unused harmony export SS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return DiscountConditionEnum; });
/* unused harmony export ProductSupplement */
/* unused harmony export ProductSupplementString */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return OrderState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return orderStateToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return DictTypeEnum; });
/* unused harmony export RelatedObjTypeEnum */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppFootBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AppModuleTypeEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CategoryRootName; });
/* unused harmony export orderStateKeys */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return ProvinceData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return getPickUpTypeName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return PickUpTypeEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return SaleRankTypeEnum; });
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

/***/ "4o+8":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Redeem");

/***/ }),

/***/ "7FHF":
/***/ (function(module, exports) {

module.exports = require("better-scroll");

/***/ }),

/***/ "7O+n":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ShopTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CardBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ShopTotal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FooterFit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return OrderPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cvHV");
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_HeaderTitle_HeaderTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("B42p");
/* harmony import */ var _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("U81q");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("c+KP");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tools_dealKey__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("+vfP");
/* harmony import */ var _ss_common_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("4Rmy");
/* harmony import */ var _graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("i7FU");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_BScroll_BScroller__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("Z3gB");
/* harmony import */ var _components_Box_Box__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("cW92");
/* harmony import */ var _components_SelectAddress__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("q3aC");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("+FwM");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_SelectCard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("n+/U");
/* harmony import */ var _tools_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("cBzo");
/* harmony import */ var _style_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("ZtJr");
/* harmony import */ var _components_ButtonLoad_ButtonLoad__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("+kHn");
/* harmony import */ var _components_Message_Message__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("OO/1");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_19__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





















const ShopTitle = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "orderPage__ShopTitle",
  componentId: "n2h0w5-0"
})(["font-size:18px;font-weight:bold;display:flex;align-items:flex-end;> footer{font-size:14px;color:", ";}"], _style_common__WEBPACK_IMPORTED_MODULE_16__[/* mpStyle */ "a"].red);
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
})(["position:fixed;box-sizing:border-box;background:white;bottom:0;width:100vw;padding:16px 24px;display:grid;grid-template-rows:repeat(2,1fr);grid-template-columns:1fr max-content;grid-row-gap:8px;box-shadow:", ";> header{> span{font-size:12px;margin-left:8px;}}> aside{grid-area:1/2/3/3;}"], _style_common__WEBPACK_IMPORTED_MODULE_16__[/* mpStyle */ "a"].shadow['1']);
const OrderPage = () => {
  var _stateSCM$payCardList, _stateSCM$form, _stateSCM$form$coupon, _stateSCM$form2, _stateSCM$userLevelLi;

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_19__["useRouter"])();
  const {
    actions: actionsSAM
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_3__[/* useStoreModel */ "b"])(_components_SelectAddress__WEBPACK_IMPORTED_MODULE_12__[/* selectAddressModel */ "b"]);
  const {
    actions: actionsSelectCard
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_3__[/* useStoreModel */ "b"])(_components_SelectCard__WEBPACK_IMPORTED_MODULE_14__[/* selectCardModel */ "b"]);
  const {
    state: stateSCM,
    actions: actionsSCM,
    getLoad
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_3__[/* useStoreModel */ "b"])(_index__WEBPACK_IMPORTED_MODULE_4__[/* shopCartModel */ "c"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    actionsSCM.getOrderInfo();
  }, []);
  const addressData = stateSCM.dealAddressData(stateSCM);
  const cardData = ((_stateSCM$payCardList = stateSCM.payCardList) === null || _stateSCM$payCardList === void 0 ? void 0 : _stateSCM$payCardList.find(v => v.id === stateSCM.form.paymentMethodCardId)) || {};
  const productTotal = stateSCM.dealProductTotal(stateSCM);
  const transportationCosts = stateSCM.dealTransportationCosts(stateSCM, productTotal);
  const actuallyPaid = productTotal + transportationCosts - Object(_tools_utils__WEBPACK_IMPORTED_MODULE_15__[/* dealMaybeNumber */ "a"])(stateSCM.form.deductCoin) + Object(_tools_utils__WEBPACK_IMPORTED_MODULE_15__[/* dealMaybeNumber */ "a"])(stateSCM.form.saleTax) - Object(_tools_utils__WEBPACK_IMPORTED_MODULE_15__[/* dealMaybeNumber */ "a"])((_stateSCM$form = stateSCM.form) === null || _stateSCM$form === void 0 ? void 0 : _stateSCM$form.couponDiscount);
  const generateCoin = actuallyPaid * 0.01;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (stateSCM.pageType === _index__WEBPACK_IMPORTED_MODULE_4__[/* pageTypeEnum */ "b"].order) {
      window.history.pushState(null, '', document.URL);
      window.addEventListener('popstate', state => {
        // 监听到返回事件，注意，只有触发了返回才会执行这个方法
        actionsSCM.updatePageType(_index__WEBPACK_IMPORTED_MODULE_4__[/* pageTypeEnum */ "b"].shopCart);
      }, false);
    }

    return () => {
      window.removeEventListener('popstate', state => {
        actionsSCM.updatePageType(_index__WEBPACK_IMPORTED_MODULE_4__[/* pageTypeEnum */ "b"].shopCart);
      });
    };
  }, [stateSCM.pageType]);
  return __jsx("div", null, __jsx(_components_HeaderTitle_HeaderTitle__WEBPACK_IMPORTED_MODULE_2__[/* HeaderTitle */ "a"], {
    title: '订单支付',
    backCall: () => {
      actionsSCM.updatePageType(_index__WEBPACK_IMPORTED_MODULE_4__[/* pageTypeEnum */ "b"].shopCart);
      return true;
    }
  }), !!getLoad(_graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_8__[/* doc */ "b"].orderConfirmInfo) && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["LinearProgress"], null) || __jsx("div", {
    style: {
      height: '4px'
    }
  }), __jsx(_components_BScroll_BScroller__WEBPACK_IMPORTED_MODULE_10__[/* BScroller */ "a"], {
    boxHeight: 'calc(100vh - 135px)'
  }, __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_11__[/* Space */ "b"], {
    h: 10
  }), __jsx(ShopTitle, null, __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_11__[/* Space */ "b"], {
    w: 20
  }), Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__[/* ls */ "a"])(stateSCM.form.pickUpType === _ss_common_enum__WEBPACK_IMPORTED_MODULE_7__[/* PickUpTypeEnum */ "h"].Self && '自取地址' || '送货地址')), __jsx(AddressBox, null, __jsx("main", null, __jsx("header", null, `${addressData.combineAddress}`), __jsx("footer", null, `${addressData.name} ${addressData.contactInformation}`)), __jsx("aside", null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["IconButton"], {
    onClick: async () => {
      const res = await actionsSAM.openClick();

      if (res) {
        actionsSCM.setForm(['addressId', res]);
      }
    }
  }, __jsx(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_1___default.a, null)))), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_11__[/* Space */ "b"], {
    c: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_13__["grey"][200],
    h: 16
  }), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_11__[/* Space */ "b"], {
    h: 16
  }), __jsx(ShopTitle, null, __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_11__[/* Space */ "b"], {
    w: 20
  }), Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__[/* ls */ "a"])('付款方式')), __jsx(CardBox, null, __jsx("header", null, cardData.name), __jsx("footer", null, cardData.number), __jsx("aside", null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["IconButton"], {
    onClick: async () => {
      const res = await actionsSelectCard.openClick();

      if (res) {
        actionsSCM.setForm(['paymentMethodCardId', res]);
      }
    }
  }, __jsx(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_1___default.a, null)))), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_11__[/* Space */ "b"], {
    c: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_13__["grey"][200],
    h: 16
  }), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_11__[/* Space */ "b"], {
    h: 16
  }), __jsx(ShopTitle, null, __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_11__[/* Space */ "b"], {
    w: 20
  }), Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__[/* ls */ "a"])('使用达人币'), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_11__[/* Space */ "b"], {
    w: 16
  }), __jsx("footer", null, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__[/* ls */ "a"])('当月可用余额'), Object(_tools_utils__WEBPACK_IMPORTED_MODULE_15__[/* dealMoney */ "b"])(stateSCM.user.orderCoinCurrentMonth))), __jsx("div", null, __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_11__[/* Space */ "b"], {
    w: 20
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["TextField"], {
    style: {
      marginTop: '8px',
      marginBottom: '24px'
    },
    label: Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__[/* ls */ "a"])(''),
    value: stateSCM.form.deductCoin,
    onChange: e => {
      actionsSCM.setForm(['deductCoin', e.target.value]);
    }
  })), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_11__[/* Space */ "b"], {
    c: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_13__["grey"][200],
    h: 16
  }), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_11__[/* Space */ "b"], {
    h: 16
  }), __jsx(ShopTotal, null, __jsx("header", null, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__[/* ls */ "a"])('购物车总计')), __jsx("footer", null, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_15__[/* dealMoney */ "b"])(productTotal - ((_stateSCM$form$coupon = (_stateSCM$form2 = stateSCM.form) === null || _stateSCM$form2 === void 0 ? void 0 : _stateSCM$form2.couponDiscount) !== null && _stateSCM$form$coupon !== void 0 ? _stateSCM$form$coupon : 0)))), transportationCosts > 0 && __jsx(ShopTotal, null, __jsx("header", null, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__[/* ls */ "a"])('运费')), __jsx("footer", null, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_15__[/* dealMoney */ "b"])(transportationCosts))), __jsx(ShopTotal, null, __jsx("header", null, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__[/* ls */ "a"])('达人币抵扣')), __jsx("footer", null, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_15__[/* dealMoney */ "b"])(stateSCM.form.deductCoin, '-'))), __jsx(ShopTotal, {
    style: {
      fontSize: '18px'
    }
  }, __jsx("header", null, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__[/* ls */ "a"])('订单总额')), __jsx("footer", null, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_15__[/* dealMoney */ "b"])(actuallyPaid))), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_11__[/* Space */ "b"], {
    h: 30
  })), __jsx(FooterFit, null, __jsx("header", null, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__[/* ls */ "a"])('本次订单'), __jsx("span", null, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__[/* ls */ "a"])((_stateSCM$userLevelLi = stateSCM.userLevelList.find(v => {
    var _stateSCM$user$userIn;

    return v.code === ((_stateSCM$user$userIn = stateSCM.user.userInfo) === null || _stateSCM$user$userIn === void 0 ? void 0 : _stateSCM$user$userIn.userLevel);
  })) === null || _stateSCM$userLevelLi === void 0 ? void 0 : _stateSCM$userLevelLi.name))), __jsx("footer", null, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__[/* ls */ "a"])('将获得下月使用达人币 '), __jsx("span", null, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_15__[/* dealMoney */ "b"])(generateCoin))), __jsx("aside", null, __jsx(_components_ButtonLoad_ButtonLoad__WEBPACK_IMPORTED_MODULE_17__[/* ButtonLoad */ "a"], {
    loading: getLoad(_graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_8__[/* doc */ "b"].saveOrder),
    onClick: async () => {
      var _stateSCM$user, _stateSCM$user$userIn2, _res$saveOrder;

      if (Object(_tools_utils__WEBPACK_IMPORTED_MODULE_15__[/* dealMaybeNumber */ "a"])((_stateSCM$user = stateSCM.user) === null || _stateSCM$user === void 0 ? void 0 : _stateSCM$user.orderCoinCurrentMonth) < Object(_tools_utils__WEBPACK_IMPORTED_MODULE_15__[/* dealMaybeNumber */ "a"])(stateSCM.form.deductCoin)) {
        Object(_components_Message_Message__WEBPACK_IMPORTED_MODULE_18__[/* showMessage */ "b"])(Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__[/* ls */ "a"])('达人币余额不足'));
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

        Object(_components_Message_Message__WEBPACK_IMPORTED_MODULE_18__[/* showMessage */ "b"])('操作成功 将前往付款'); // await router.replace('/cart/result')

        const _query = Object(_tools_utils__WEBPACK_IMPORTED_MODULE_15__[/* dealUrlQuery */ "c"])({
          orderId: res === null || res === void 0 ? void 0 : (_res$saveOrder2 = res.saveOrder) === null || _res$saveOrder2 === void 0 ? void 0 : _res$saveOrder2.id
        });

        await router.replace(`/pay${_query}`, `/pay${_query}`);
        actionsSCM.clearData();
        actionsSCM.getList();
      }
    },
    variant: 'contained',
    color: 'secondary'
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__[/* ls */ "a"])('提交订单')))), __jsx(_components_SelectAddress__WEBPACK_IMPORTED_MODULE_12__[/* SelectAddress */ "a"], null), __jsx(_components_SelectCard__WEBPACK_IMPORTED_MODULE_14__[/* SelectCard */ "a"], null));
};

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("VctW");


/***/ }),

/***/ "8//M":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/makeStyles");

/***/ }),

/***/ "9BML":
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),

/***/ "B42p":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderTitle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_ArrowBackIos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("GAX3");
/* harmony import */ var _material_ui_icons_ArrowBackIos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowBackIos__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tools_dealKey__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("+vfP");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ShoppingCartIconButton_ShoppingCartIconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("cae+");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("2kat");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_7__);
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
    boxShadow: 1
  }, __jsx(LeftIconButton, {
    style: hideLeft && {
      visibility: 'hidden'
    } || {},
    onClick: () => {
      if (!(backCall && backCall())) {
        router.back();
      }
    }
  }, __jsx(LeftIcon, null)), __jsx("main", null, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_4__[/* ls */ "a"])(title)), __jsx(Action, null, showSearch && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["IconButton"], null, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_7__["Search"], null)), showCart && __jsx(_ShoppingCartIconButton_ShoppingCartIconButton__WEBPACK_IMPORTED_MODULE_6__[/* ShoppingCartIconButton */ "a"], null)));
};

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "EiTa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tools_dealKey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("+vfP");
/* harmony import */ var _style_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ZtJr");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Header = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "RegisterHeader__Header",
  componentId: "sc-1oxtd4z-0"
})(["margin-top:20px;display:grid;grid-template-columns:40px 1fr;grid-template-rows:30px 30px 50px;margin-bottom:40px;> img{width:32px;height:56px;grid-area:1/1/3/2;padding-right:10px;}> header{font-size:20px;align-self:end;}> footer{font-size:20px;font-weight:bold;color:", ";}> main{grid-area:3/1/4/3;font-size:24px;font-weight:bold;align-self:end;}"], _style_common__WEBPACK_IMPORTED_MODULE_3__[/* mpStyle */ "a"].red);
const RegisterHeader = () => {
  return __jsx(Header, null, __jsx("img", {
    src: '/img/home/logo.png',
    alt: ""
  }), __jsx("header", null, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_2__[/* ls */ "a"])('Market')), __jsx("footer", null, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_2__[/* ls */ "a"])('Payless')), __jsx("main", null, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_2__[/* ls */ "a"])('欢迎来到马佩莱超市')));
};

/***/ }),

/***/ "EtfT":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AddCircleOutline");

/***/ }),

/***/ "F42i":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return meModel; });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tools_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cBzo");
/* harmony import */ var _tools_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ysgU");
/* harmony import */ var _graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("i7FU");
/* harmony import */ var _ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("+/yG");






const toLogin = async () => {
  await next_router__WEBPACK_IMPORTED_MODULE_0___default.a.push('/login');
};

const meModel = Object(_ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_4__[/* modelFactory */ "c"])('meModel', {
  user: {}
}, {
  getLoginUser: async (value, option) => {
    var _await$option$query;

    const res = (_await$option$query = await option.query(_graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_3__[/* doc */ "b"].oneUser)) === null || _await$option$query === void 0 ? void 0 : _await$option$query.oneUser;
    option.setData(Object(_tools_utils__WEBPACK_IMPORTED_MODULE_1__[/* fpMergePre */ "f"])({
      user: res
    }));
  },
  logout: async (value, option) => {
    Object(_tools_token__WEBPACK_IMPORTED_MODULE_2__[/* setToken */ "b"])('');
    Object(_tools_token__WEBPACK_IMPORTED_MODULE_2__[/* setToken */ "b"])('', 'refreshtoken');
    await toLogin();
  },
  toLogin: value => {
    toLogin();
  }
});

/***/ }),

/***/ "FQAE":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ShoppingCart");

/***/ }),

/***/ "GAX3":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowBackIos");

/***/ }),

/***/ "GLZ+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ShopCartProductBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartProduct; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("W/Kq");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("VMnw");
/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tools_img__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Oj7+");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("+FwM");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_ProductItem_ProductItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("oxxF");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("U81q");
/* harmony import */ var _tools_dealKey__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("+vfP");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("c+KP");
/* harmony import */ var _components_Message_Message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("OO/1");
/* harmony import */ var _components_ProductItem_UpdateShopCart__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("vo3K");
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
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_8__[/* useStoreModel */ "b"])(_index__WEBPACK_IMPORTED_MODULE_10__[/* shopCartModel */ "c"]);
  const {
    actions: actionsPM
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_8__[/* useStoreModel */ "b"])(_components_ProductItem_ProductItem__WEBPACK_IMPORTED_MODULE_6__[/* productModel */ "e"]);
  const {
    actions: actionsUpdateShopCartModel
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_8__[/* useStoreModel */ "b"])(_components_ProductItem_UpdateShopCart__WEBPACK_IMPORTED_MODULE_12__[/* updateShopCartModel */ "b"]);
  const product = shopCart.product;
  return __jsx(ShopCartProductBox, null, __jsx("img", {
    src: Object(_tools_img__WEBPACK_IMPORTED_MODULE_4__[/* dealImgUrl */ "a"])((_shopCart$product = shopCart.product) === null || _shopCart$product === void 0 ? void 0 : (_shopCart$product$img = _shopCart$product.img) === null || _shopCart$product$img === void 0 ? void 0 : (_shopCart$product$img2 = _shopCart$product$img[0]) === null || _shopCart$product$img2 === void 0 ? void 0 : _shopCart$product$img2.url),
    alt: ""
  }), __jsx("main", null, product === null || product === void 0 ? void 0 : product.name, product === null || product === void 0 ? void 0 : product.weight, product === null || product === void 0 ? void 0 : product.unit), __jsx("section", null, product === null || product === void 0 ? void 0 : product.remark), __jsx("footer", null, __jsx(_components_ProductItem_ProductItem__WEBPACK_IMPORTED_MODULE_6__[/* ProductPrice */ "d"], {
    product: product
  }), shopCart.isNext === 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    size: 'small',
    variant: 'outlined',
    onClick: async () => {
      await actionsPM.updateShopCart({
        isNext: 1,
        id: shopCart.id
      });
      actionsSCM.getList();
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_9__[/* ls */ "a"])('下次购买')), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["IconButton"], {
    disabled: ((_shopCart$number = shopCart === null || shopCart === void 0 ? void 0 : shopCart.number) !== null && _shopCart$number !== void 0 ? _shopCart$number : 0) <= 1,
    size: 'small',
    onClick: async () => {
      await actionsPM.updateNumShopCart({
        product,
        number: -1
      });
      actionsSCM.getList();
    }
  }, __jsx(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_2___default.a, null)), shopCart.number, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["IconButton"], {
    size: 'small',
    onClick: async () => {
      await actionsPM.updateNumShopCart({
        product
      });
      actionsSCM.getList();
    }
  }, __jsx(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_1___default.a, null))) || __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
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
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_9__[/* ls */ "a"])('删除')), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
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
          Object(_components_Message_Message__WEBPACK_IMPORTED_MODULE_11__[/* showMessage */ "b"])('操作成功');
          actionsSCM.getList();
        }
      }
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_9__[/* ls */ "a"])('加入购物车')))));
};

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "K0AU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("KaAA");
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tools_img__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Oj7+");
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
  onClickItem: onClickItem
}, dataList === null || dataList === void 0 ? void 0 : dataList.map(item => __jsx("div", {
  key: `Carousel_${item.id}`
}, __jsx("img", {
  style: {
    height: height
  },
  src: Object(_tools_img__WEBPACK_IMPORTED_MODULE_2__[/* dealImgUrl */ "a"])(item.imgUrl),
  alt: ""
}))));

/* harmony default export */ __webpack_exports__["a"] = (CusCarousel);

/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "KMVQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dealNoAuth; });
/* harmony import */ var _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("U81q");
/* harmony import */ var _view_me_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("F42i");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _RegisterHeader_RegisterHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("EiTa");
/* harmony import */ var _tools_dealKey__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("+vfP");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _tools_token__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("ysgU");
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








const Empty = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div.withConfig({
  displayName: "NoAuth__Empty",
  componentId: "sltu9p-0"
})(["padding:20px;> main{margin-top:20vh;display:flex;flex-direction:column;align-items:center;> span{margin-bottom:30px;}}"]);
const dealNoAuth = others => {
  const {
    state: stateMe,
    actions: actionsMe
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_0__[/* useStoreModel */ "b"])(_view_me_model__WEBPACK_IMPORTED_MODULE_1__[/* meModel */ "a"]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (!stateMe.user.id) {
      actionsMe.getLoginUser();
    }
  }, []);
  return !stateMe.user.id || !Object(_tools_token__WEBPACK_IMPORTED_MODULE_7__[/* getToken */ "a"])() ? __jsx(Empty, null, __jsx(_RegisterHeader_RegisterHeader__WEBPACK_IMPORTED_MODULE_3__[/* RegisterHeader */ "a"], null), __jsx("main", null, __jsx("span", null, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_4__[/* ls */ "a"])('您未登录,请先登录')), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    fullWidth: true,
    variant: 'contained',
    color: 'secondary',
    onClick: actionsMe.toLogin
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_4__[/* ls */ "a"])('登录')))) : others;
};

/***/ }),

/***/ "KNus":
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "KaAA":
/***/ (function(module, exports) {

module.exports = require("react-responsive-carousel");

/***/ }),

/***/ "Nu2o":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dialogModelFactory; });
/* harmony import */ var _ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("+/yG");
/* harmony import */ var _tools_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cBzo");


const dialogModelFactory = (name, initData) => Object(_ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_0__[/* modelFactory */ "c"])(`${name}_dialogModelFactory`, {
  dialogData: initData,
  open: false,
  isEdit: -1,
  openResolve: () => {}
}, {
  openClick: (value, {
    setData
  }) => {
    return new Promise(resolve => {
      setData(preData => Object(_tools_utils__WEBPACK_IMPORTED_MODULE_1__[/* fpMerge */ "e"])(preData, {
        open: true,
        dialogData: value,
        isEdit: -1,
        openResolve: resolve
      }));
    });
  },
  openEditClick: (value, {
    setData
  }) => setData(pre => Object(_tools_utils__WEBPACK_IMPORTED_MODULE_1__[/* fpMerge */ "e"])(pre, {
    open: true,
    dialogData: value.data,
    isEdit: value.index
  })),
  onClose: (value, {
    data,
    setData
  }) => {
    data.openResolve(false);
    setData(pre => Object(_tools_utils__WEBPACK_IMPORTED_MODULE_1__[/* fpMerge */ "e"])(Object(_tools_utils__WEBPACK_IMPORTED_MODULE_1__[/* fpSet */ "g"])(pre, 'dialogData', {}), {
      dialogData: initData,
      open: false
    }));
  },
  setdialog: (value, {
    setData
  }) => setData(data => Object(_tools_utils__WEBPACK_IMPORTED_MODULE_1__[/* fpMerge */ "e"])(data, {
    dialogData: value
  }))
});

/***/ }),

/***/ "OO/1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return showMessage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("+FwM");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("U81q");
/* harmony import */ var _tools_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cBzo");
/* harmony import */ var _ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("+/yG");
/* harmony import */ var _tools_dealKey__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("+vfP");
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
const messageModel = Object(_ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_6__[/* modelFactory */ "c"])('messageModel', {
  open: false,
  message: '',
  autoHideDuration: 2000,
  msg_type: 'default'
}, {
  open: (value, option) => {
    if (typeof value === 'string') {
      option.setData(Object(_tools_utils__WEBPACK_IMPORTED_MODULE_5__[/* fpMergePre */ "f"])({
        autoHideDuration: 2000,
        msg_type: 'default',
        message: value,
        open: true
      }));
    } else {
      option.setData(Object(_tools_utils__WEBPACK_IMPORTED_MODULE_5__[/* fpMergePre */ "f"])(_objectSpread(_objectSpread({
        autoHideDuration: 2000,
        msg_type: 'default'
      }, value), {}, {
        open: true
      })));
    }
  },
  onClose: (value, option) => option.setData(Object(_tools_utils__WEBPACK_IMPORTED_MODULE_5__[/* fpMergePre */ "f"])({
    open: false
  }))
});
const Message = () => {
  const {
    state: mState,
    actions
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_4__[/* useStoreModel */ "b"])(messageModel);
  return __jsx(CusSnackbar, {
    open: mState.open,
    autoHideDuration: mState.autoHideDuration,
    message: Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_7__[/* ls */ "a"])(mState.message),
    msg_type: mState.msg_type,
    onClose: () => actions.onClose()
  });
};
const showMessage = option => {
  _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_4__[/* originStore */ "a"]['messageModel'].actions.open(option);
  return;
};

/***/ }),

/***/ "Oj7+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dealImgUrl; });
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("KNus");
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

/***/ "RpH3":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/red");

/***/ }),

/***/ "Skji":
/***/ (function(module, exports) {

module.exports = require("date-fns/format");

/***/ }),

/***/ "U81q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ originStore; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ useStoreModel; });

// UNUSED EXPORTS: dealNameSpace

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "cross-fetch/polyfill"
var polyfill_ = __webpack_require__("vW9U");

// EXTERNAL MODULE: ./utils/tools/token.ts
var token = __webpack_require__("ysgU");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "apollo-boost"
var external_apollo_boost_ = __webpack_require__("YvTO");
var external_apollo_boost_default = /*#__PURE__*/__webpack_require__.n(external_apollo_boost_);

// CONCATENATED MODULE: ./utils/tools/global.ts
const isDev = false;
const ssLog = data => {
  if (isDev) {
    console.log(data);
  }

  return data;
};
// EXTERNAL MODULE: ./utils/graphqlTypes/doc/index.ts + 1 modules
var doc = __webpack_require__("i7FU");

// EXTERNAL MODULE: ./utils/components/Message/Message.tsx
var Message = __webpack_require__("OO/1");

// EXTERNAL MODULE: external "next/config"
var config_ = __webpack_require__("KNus");
var config_default = /*#__PURE__*/__webpack_require__.n(config_);

// CONCATENATED MODULE: ./utils/client/index.ts
var _config$publicRuntime, _config$publicRuntime2;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const config = config_default()();
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
        Authorization: Object(token["a" /* getToken */])()
      })
    }));
  };

  const refreshToken = () => {
    graphQLQuery()(doc["b" /* doc */].refreshToken, {
      data: Object(token["a" /* getToken */])('refreshtoken')
    }).then(res => {
      var _res$data, _res$data$refreshToke;

      if ((_res$data = res.data) === null || _res$data === void 0 ? void 0 : (_res$data$refreshToke = _res$data.refreshToken) === null || _res$data$refreshToke === void 0 ? void 0 : _res$data$refreshToke.token) {
        var _res$data2, _res$data2$refreshTok, _res$data3, _res$data3$refreshTok;

        Object(token["b" /* setToken */])((_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : (_res$data2$refreshTok = _res$data2.refreshToken) === null || _res$data2$refreshTok === void 0 ? void 0 : _res$data2$refreshTok.token);
        Object(token["b" /* setToken */])((_res$data3 = res.data) === null || _res$data3 === void 0 ? void 0 : (_res$data3$refreshTok = _res$data3.refreshToken) === null || _res$data3$refreshTok === void 0 ? void 0 : _res$data3$refreshTok.refreshtoken, 'refreshtoken');
        Object(Message["b" /* showMessage */])({
          message: '登录超时,刷新登录信息'
        });
        router_default.a.reload();
      } else {
        Object(Message["b" /* showMessage */])({
          message: '请重新登录'
        });
        router_default.a.push('/login');
      }
    }).catch(err => {
      ssLog(err);
      Object(Message["b" /* showMessage */])({
        message: '请重新登录'
      });
      router_default.a.push('/login');
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
        ssLog(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);

        if ((extensions === null || extensions === void 0 ? void 0 : extensions.code) === 'UNAUTHENTICATED') {
          if (message.includes('first')) {
            refreshToken();
          } else {
            Object(Message["b" /* showMessage */])({
              message: '请重新登录'
            });
            router_default.a.push('/login');
          }
        }

        if (message.includes('Unexpected error')) {
          Object(Message["b" /* showMessage */])({
            message: message.split('"')[1],
            msg_type: 'error'
          });
        } else {
          Object(Message["b" /* showMessage */])({
            message
          });
        }
      });
    }

    if (networkError) {
      var _networkError$result;

      const errMsg = 'bodyText' in networkError ? networkError === null || networkError === void 0 ? void 0 : networkError.bodyText : 'result' in networkError ? networkError === null || networkError === void 0 ? void 0 : (_networkError$result = networkError.result) === null || _networkError$result === void 0 ? void 0 : _networkError$result.error : '';
      ssLog(`[Network error]: ${errMsg}`);

      if ('statusCode' in networkError && (networkError === null || networkError === void 0 ? void 0 : networkError.statusCode) === 401) {
        if (errMsg.includes('first') && Object(token["a" /* getToken */])('refreshtoken')) {
          refreshToken();
        } else {
          Object(Message["b" /* showMessage */])({
            message: '请重新登录'
          });
          router_default.a.push('/login');
        }
      }
    }
  };

  return new external_apollo_boost_default.a({
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

const serverClient = () => new external_apollo_boost_default.a({
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
// EXTERNAL MODULE: ./utils/ModelAction/modelUtil.ts
var modelUtil = __webpack_require__("+/yG");

// CONCATENATED MODULE: ./utils/ModelAction/useStore.ts
function useStore_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function useStore_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { useStore_ownKeys(Object(source), true).forEach(function (key) { useStore_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { useStore_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function useStore_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




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
  } = Object(external_react_["useState"])(Object.create(null));

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

  const notice = Object(external_react_["useCallback"])(data => {
    originStore[_key].setData.forEach(value => {
      value === null || value === void 0 ? void 0 : value(data);
    });
  }, [_key]);
  const setData = Object(external_react_["useCallback"])(data => {
    const oldState = originStore[_key].state;
    const newData = isFunction(data) ? data(oldState) : data;
    originStore[_key].state = newData;
    notice(newData);
  }, [_key, notice]);
  const setLoad = Object(external_react_["useCallback"])((query, flag) => {
    setData(prevState => {
      var _prevState$fetchLoad, _query$loc, _query$loc$source;

      return useStore_objectSpread(useStore_objectSpread({}, prevState), {}, {
        fetchLoad: useStore_objectSpread(useStore_objectSpread({}, (_prevState$fetchLoad = prevState.fetchLoad) !== null && _prevState$fetchLoad !== void 0 ? _prevState$fetchLoad : {}), {}, {
          [query === null || query === void 0 ? void 0 : (_query$loc = query.loc) === null || _query$loc === void 0 ? void 0 : (_query$loc$source = _query$loc.source) === null || _query$loc$source === void 0 ? void 0 : _query$loc$source.body]: flag
        })
      });
    });
  }, [setData]);
  const setError = Object(external_react_["useCallback"])((query, err) => {
    setData(prevState => {
      var _prevState$fetchError, _query$loc2, _query$loc2$source;

      return useStore_objectSpread(useStore_objectSpread({}, prevState), {}, {
        fetchError: useStore_objectSpread(useStore_objectSpread({}, (_prevState$fetchError = prevState.fetchError) !== null && _prevState$fetchError !== void 0 ? _prevState$fetchError : {}), {}, {
          [query === null || query === void 0 ? void 0 : (_query$loc2 = query.loc) === null || _query$loc2 === void 0 ? void 0 : (_query$loc2$source = _query$loc2.source) === null || _query$loc2$source === void 0 ? void 0 : _query$loc2$source.body]: err
        })
      });
    });
  }, [setData]);
  const query = Object(external_react_["useCallback"])(async (query, params, option) => {
    setLoad(query, true);
    const res = await graphQLQuery()(query, params, option).catch(e => {
      setError(query, e);
    }).finally(() => {
      setLoad(query, false);
    });
    return res === null || res === void 0 ? void 0 : res.data;
  }, [setError, setLoad]);
  const mutate = Object(external_react_["useCallback"])(async (mutation, params, option) => {
    setLoad(mutation, true);
    const res = await graphQLMutate()(mutation, params, option).catch(e => {
      setError(mutation, e);
    }).finally(() => {
      setLoad(mutation, false);
    });
    return res === null || res === void 0 ? void 0 : res.data;
  }, [setError, setLoad]);

  if (Object.keys(originStore[_key].actions).length === 0 && originStore[_key].actions.constructor === Object) {
    Object.keys(actions).forEach(value => {
      originStore[_key].actions[value] = v => actions[value](v, useStore_objectSpread(useStore_objectSpread({}, modelUtil["a" /* baseActionOption */]), {}, {
        data: originStore[_key].state,
        notice,
        setData,
        query,
        mutate,
        store: originStore
      }));
    });
  }

  Object(external_react_["useEffect"])(() => {
    Object.keys(actions).forEach(value => {
      originStore[_key].actions[value] = v => actions[value](v, useStore_objectSpread(useStore_objectSpread({}, modelUtil["a" /* baseActionOption */]), {}, {
        data: originStore[_key].state,
        notice,
        setData,
        query,
        mutate,
        store: originStore
      }));
    });
  }, [_key, actions, mutate, notice, query, setData]);
  Object(external_react_["useEffect"])(() => {
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

/***/ "VMnw":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Remove");

/***/ }),

/***/ "VctW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_view_home_appModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("26vd");

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_view_home_appModule__WEBPACK_IMPORTED_MODULE_0__[/* HomeAppModule */ "a"])(_utils_view_home_appModule__WEBPACK_IMPORTED_MODULE_0__[/* HomeType */ "b"].group)); // export const getStaticPaths = () => {
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

/***/ "W/Kq":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Add");

/***/ }),

/***/ "XiiW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ homeTabsModel; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ HomeTabs; });

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core/colors"
var colors_ = __webpack_require__("+FwM");

// EXTERNAL MODULE: external "@material-ui/icons"
var icons_ = __webpack_require__("2kat");

// EXTERNAL MODULE: ./utils/ModelAction/useStore.ts + 2 modules
var useStore = __webpack_require__("U81q");

// EXTERNAL MODULE: ./utils/tools/utils.ts
var utils = __webpack_require__("cBzo");

// CONCATENATED MODULE: ./utils/components/Loading/Loading.tsx
var __jsx = external_react_default.a.createElement;


const Loading = () => {
  return __jsx("div", {
    style: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center'
    }
  }, __jsx(core_["CircularProgress"], null));
};
// EXTERNAL MODULE: ./utils/graphqlTypes/doc/index.ts + 1 modules
var doc = __webpack_require__("i7FU");

// EXTERNAL MODULE: ./utils/tools/img.ts
var img = __webpack_require__("Oj7+");

// EXTERNAL MODULE: ./utils/ss_common/enum.ts
var ss_common_enum = __webpack_require__("4Rmy");

// EXTERNAL MODULE: ./utils/ModelAction/modelUtil.ts
var modelUtil = __webpack_require__("+/yG");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// CONCATENATED MODULE: ./utils/view/home/components/CategorySelection/CategorySelection.tsx

var CategorySelection_jsx = external_react_default.a.createElement;













const homeCategorySelectionModel = Object(modelUtil["c" /* modelFactory */])('HomeCategorySelection', {
  listData: [],
  total: 0
}, {
  getList: async (value, option) => {
    var _res$categoryList;

    const res = await option.query(doc["a" /* categoryList */], {
      data: {
        category: {
          parentCategory: {
            id: ss_common_enum["c" /* CategoryRootName */]
          }
        }
      }
    });
    option.setData(Object(utils["f" /* fpMergePre */])({
      listData: res === null || res === void 0 ? void 0 : (_res$categoryList = res.categoryList) === null || _res$categoryList === void 0 ? void 0 : _res$categoryList.list
    }));
  }
});
const CategorySelection = () => {
  var _homeCategorySelectio;

  const router = Object(router_["useRouter"])();
  const {
    state: homeCategorySelectionState,
    actions: homeCategorySelectionActions,
    getLoad: hsGetLoad
  } = Object(useStore["b" /* useStoreModel */])(homeCategorySelectionModel);
  const {
    state: homeTabsState
  } = Object(useStore["b" /* useStoreModel */])(homeTabsModel);
  Object(external_react_["useEffect"])(() => {
    homeCategorySelectionActions.getList();
  }, []);
  return CategorySelection_jsx("div", {
    className: style_default.a.dynamic([["2863441005", [colors_["grey"][700]]]])
  }, !!hsGetLoad(doc["a" /* categoryList */]) && CategorySelection_jsx(Loading, null), homeCategorySelectionState === null || homeCategorySelectionState === void 0 ? void 0 : (_homeCategorySelectio = homeCategorySelectionState.listData) === null || _homeCategorySelectio === void 0 ? void 0 : _homeCategorySelectio.map(value => CategorySelection_jsx(core_["ButtonBase"], {
    className: 'main',
    onClick: () => {
      router.push(`/category/[id]${Object(utils["c" /* dealUrlQuery */])({
        homeType: homeTabsState.homeType
      })}`, `/category/${value.id}${Object(utils["c" /* dealUrlQuery */])({
        homeType: homeTabsState.homeType
      })}`);
    },
    key: `homeCategorySelectionState_${value.id}`
  }, CategorySelection_jsx("img", {
    src: Object(img["a" /* dealImgUrl */])(value.imgUrl),
    alt: "",
    className: style_default.a.dynamic([["2863441005", [colors_["grey"][700]]]])
  }), CategorySelection_jsx("span", {
    className: style_default.a.dynamic([["2863441005", [colors_["grey"][700]]]])
  }, value.name, CategorySelection_jsx(icons_["KeyboardArrowRight"], null)))), CategorySelection_jsx(style_default.a, {
    id: "2863441005",
    dynamic: [colors_["grey"][700]]
  }, [`div.__jsx-style-dynamic-selector>.main{width:100%;height:18.75vw;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;border-radius:2.5vw;overflow:hidden;margin-bottom:3.125vw;background:${colors_["grey"][700]};}`, "div.__jsx-style-dynamic-selector>.main>img.__jsx-style-dynamic-selector{height:100%;width:70%;}", "div.__jsx-style-dynamic-selector>.main>span.__jsx-style-dynamic-selector{-webkit-flex:1 1;-ms-flex:1 1;flex:1 1;color:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}"]));
};
/* harmony default export */ var CategorySelection_CategorySelection = (CategorySelection);
// EXTERNAL MODULE: ./utils/tools/dealKey.ts
var dealKey = __webpack_require__("+vfP");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./utils/components/ProductItem/ProductItem.tsx
var ProductItem = __webpack_require__("oxxF");

// EXTERNAL MODULE: external "date-fns"
var external_date_fns_ = __webpack_require__("9BML");

// CONCATENATED MODULE: ./utils/view/home/components/PromotionFlashSale/PromotionFlashSale.tsx
var PromotionFlashSale_jsx = external_react_default.a.createElement;











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

const promotionFlashSaleModel = Object(modelUtil["c" /* modelFactory */])('promotionFlashSaleModel', {
  limitTimeData: [],
  nowLimitData: {},
  productList: [],
  isNext: false
}, {
  getData: async (value, option) => {
    var _res$limitTimeData, _res$limitTimeData$va, _nowSaleData$data$sel, _nowSaleData$data, _res$limitTimeData2, _res$limitTimeData2$v, _productRes$productLi, _productRes$productLi2;

    const res = await option.query(doc["b" /* doc */].limitTimeData);
    const nowSaleData = getNowSale(res === null || res === void 0 ? void 0 : (_res$limitTimeData = res.limitTimeData) === null || _res$limitTimeData === void 0 ? void 0 : (_res$limitTimeData$va = _res$limitTimeData.value) === null || _res$limitTimeData$va === void 0 ? void 0 : _res$limitTimeData$va.list);
    console.log(nowSaleData);
    const productRes = await option.query(doc["b" /* doc */].productListByIds, {
      ids: (_nowSaleData$data$sel = nowSaleData === null || nowSaleData === void 0 ? void 0 : (_nowSaleData$data = nowSaleData.data) === null || _nowSaleData$data === void 0 ? void 0 : _nowSaleData$data.selectProductList) !== null && _nowSaleData$data$sel !== void 0 ? _nowSaleData$data$sel : []
    });
    option.setData(Object(utils["f" /* fpMergePre */])({
      nowLimitData: nowSaleData.data,
      isNext: nowSaleData.isNext,
      limitTimeData: (res === null || res === void 0 ? void 0 : (_res$limitTimeData2 = res.limitTimeData) === null || _res$limitTimeData2 === void 0 ? void 0 : (_res$limitTimeData2$v = _res$limitTimeData2.value) === null || _res$limitTimeData2$v === void 0 ? void 0 : _res$limitTimeData2$v.list) || [],
      productList: (_productRes$productLi = productRes === null || productRes === void 0 ? void 0 : (_productRes$productLi2 = productRes.productListByIds) === null || _productRes$productLi2 === void 0 ? void 0 : _productRes$productLi2.list) !== null && _productRes$productLi !== void 0 ? _productRes$productLi : []
    }));
  }
});
const Tip = external_styled_components_default.a.div.withConfig({
  displayName: "PromotionFlashSale__Tip",
  componentId: "sc-58l9h6-0"
})(["display:flex;align-items:center;margin-bottom:8px;> main{font-size:16px;font-weight:bold;margin-right:8px;}> span{padding:4px 2px;margin:0 2px;background:", ";color:white;border-radius:6px;}"], colors_["grey"][800]);
const PromotionFlashSale = () => {
  var _statePromotionFlashS, _statePromotionFlashS2, _statePromotionFlashS3, _statePromotionFlashS4, _statePromotionFlashS5;

  const {
    state: statePromotionFlashSale,
    actions: actionsPromotionFlashSale
  } = Object(useStore["b" /* useStoreModel */])(promotionFlashSaleModel);
  Object(external_react_["useEffect"])(() => {
    actionsPromotionFlashSale.getData();
  }, []);
  return PromotionFlashSale_jsx("div", null, ((_statePromotionFlashS = statePromotionFlashSale.nowLimitData) === null || _statePromotionFlashS === void 0 ? void 0 : _statePromotionFlashS.id) && PromotionFlashSale_jsx(external_react_default.a.Fragment, null, PromotionFlashSale_jsx(Tip, null, PromotionFlashSale_jsx("main", null, statePromotionFlashSale.isNext && Object(dealKey["a" /* ls */])('距离下次抢购') || Object(dealKey["a" /* ls */])('限时选购')), PromotionFlashSale_jsx("section", null, Object(dealKey["a" /* ls */])('剩余')), PromotionFlashSale_jsx("span", null, `${Object(external_date_fns_["differenceInHours"])(new Date((_statePromotionFlashS2 = (_statePromotionFlashS3 = statePromotionFlashSale.nowLimitData) === null || _statePromotionFlashS3 === void 0 ? void 0 : _statePromotionFlashS3.endTime) !== null && _statePromotionFlashS2 !== void 0 ? _statePromotionFlashS2 : ''), new Date())}`), PromotionFlashSale_jsx("section", null, Object(dealKey["a" /* ls */])('小时')), PromotionFlashSale_jsx("span", null, `${Object(external_date_fns_["differenceInMinutes"])(new Date((_statePromotionFlashS4 = (_statePromotionFlashS5 = statePromotionFlashSale.nowLimitData) === null || _statePromotionFlashS5 === void 0 ? void 0 : _statePromotionFlashS5.endTime) !== null && _statePromotionFlashS4 !== void 0 ? _statePromotionFlashS4 : ''), new Date()) % 60}`), PromotionFlashSale_jsx("section", null, Object(dealKey["a" /* ls */])('分钟'))), statePromotionFlashSale.productList.map(product => PromotionFlashSale_jsx(ProductItem["c" /* ProductItemOneRow */], {
    key: `ProductItemOneRow_${product.id}`,
    product: product,
    hideAction: statePromotionFlashSale.isNext
  }))) || PromotionFlashSale_jsx("div", null, "\u6682\u65E0\u9650\u65F6\u62A2\u8D2D\uFF0C\u656C\u8BF7\u671F\u5F85"));
};
// EXTERNAL MODULE: ./utils/components/BScroll/BScroller.tsx
var BScroller = __webpack_require__("Z3gB");

// CONCATENATED MODULE: ./utils/view/home/components/ThemeSelection/ThemeSelection.tsx
var ThemeSelection_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const themeSelectionModel = Object(modelUtil["c" /* modelFactory */])('themeSelectionModel', {
  themeSelectionData: [],
  productListForTheme: {}
}, {
  getData: async (value, option) => {
    var _res$getDataConfig$va, _res$getDataConfig, _res$getDataConfig$va2;

    const res = await option.query(doc["b" /* doc */].getDataConfig, {
      data: {
        type: ss_common_enum["d" /* DictTypeEnum */].PromotionThemeSelect
      }
    });
    const themeList = (_res$getDataConfig$va = res === null || res === void 0 ? void 0 : (_res$getDataConfig = res.getDataConfig) === null || _res$getDataConfig === void 0 ? void 0 : (_res$getDataConfig$va2 = _res$getDataConfig.value) === null || _res$getDataConfig$va2 === void 0 ? void 0 : _res$getDataConfig$va2.list) !== null && _res$getDataConfig$va !== void 0 ? _res$getDataConfig$va : [];
    const productRes = await option.query(doc["b" /* doc */].productListByIds, {
      ids: themeList.reduce((pre, cur) => {
        var _cur$selectProductLis;

        return [...pre, ...((_cur$selectProductLis = cur === null || cur === void 0 ? void 0 : cur.selectProductList) !== null && _cur$selectProductLis !== void 0 ? _cur$selectProductLis : [])];
      }, [])
    });
    option.setData(Object(utils["f" /* fpMergePre */])({
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
const Title = external_styled_components_default.a.div.withConfig({
  displayName: "ThemeSelection__Title",
  componentId: "sc-7wn2jm-0"
})(["font-size:18px;font-weight:bold;padding-left:20px;"]);
const Theme = external_styled_components_default.a.div.withConfig({
  displayName: "ThemeSelection__Theme",
  componentId: "sc-7wn2jm-1"
})(["width:100vw;position:relative;left:-3.125vw;margin-top:16px;> img{width:100vw;height:30vw;}> main,aside{color:white;text-shadow:0.1em 0.1em 0.2em black;position:absolute;}> main{top:8vw;left:20px;font-size:20px;font-weight:bold;}> aside{top:16vw;left:20px;font-size:16px;}"]);
const ProductList = external_styled_components_default.a.div.withConfig({
  displayName: "ThemeSelection__ProductList",
  componentId: "sc-7wn2jm-2"
})(["white-space:nowrap;display:inline-block;> *{display:inline-block;margin:8px 16px 8px 0;width:35vw;}"]);
const ThemeSelection = () => {
  var _statePromotionFlashS;

  const {
    state: statePromotionFlashSale,
    actions: actionsPromotionFlashSale
  } = Object(useStore["b" /* useStoreModel */])(themeSelectionModel);
  Object(external_react_["useEffect"])(() => {
    actionsPromotionFlashSale.getData();
  }, []);
  return ThemeSelection_jsx("div", null, ThemeSelection_jsx(Title, null, Object(dealKey["a" /* ls */])('主题甄选')), (_statePromotionFlashS = statePromotionFlashSale.themeSelectionData) === null || _statePromotionFlashS === void 0 ? void 0 : _statePromotionFlashS.map(v => {
    var _statePromotionFlashS2;

    return ThemeSelection_jsx(external_react_default.a.Fragment, {
      key: `themeSelectionDataImg${v.id}`
    }, ThemeSelection_jsx(Theme, null, ThemeSelection_jsx("img", {
      src: Object(img["a" /* dealImgUrl */])(v.imgUrl),
      alt: ''
    }), ThemeSelection_jsx("main", null, v.title), ThemeSelection_jsx("aside", null, v.remark)), ThemeSelection_jsx(BScroller["a" /* BScroller */], {
      isX: true,
      boxWidth: 'calc(100vw - 20px)',
      boxHeight: 'auto'
    }, ThemeSelection_jsx(ProductList, null, (_statePromotionFlashS2 = statePromotionFlashSale.productListForTheme[v.id]) === null || _statePromotionFlashS2 === void 0 ? void 0 : _statePromotionFlashS2.map(v => ThemeSelection_jsx(ProductItem["b" /* ProductItem */], {
      key: `statePromotionFlashSaleProductItem_${v.id}`,
      product: v
    })))));
  }));
};
// EXTERNAL MODULE: ./utils/view/home/appModule.tsx + 1 modules
var appModule = __webpack_require__("26vd");

// EXTERNAL MODULE: ./utils/components/Box/Box.tsx
var Box = __webpack_require__("cW92");

// CONCATENATED MODULE: ./utils/view/home/components/SalesRank/SalesRank.tsx
var SalesRank_jsx = external_react_default.a.createElement;

function SalesRank_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function SalesRank_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { SalesRank_ownKeys(Object(source), true).forEach(function (key) { SalesRank_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { SalesRank_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function SalesRank_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















const SalesRankModel = Object(modelUtil["c" /* modelFactory */])('SalesRank', {
  listData: []
}, {
  getList: async (value, option) => {
    var _res$productListOrder, _res$productListOrder2;

    const res = await option.query(doc["b" /* doc */].productListOrderByOrder, SalesRank_objectSpread({
      orderByType: ''
    }, value !== null && value !== void 0 ? value : {}));
    option.setData(Object(utils["f" /* fpMergePre */])({
      listData: (_res$productListOrder = res === null || res === void 0 ? void 0 : (_res$productListOrder2 = res.productListOrderByOrder) === null || _res$productListOrder2 === void 0 ? void 0 : _res$productListOrder2.list) !== null && _res$productListOrder !== void 0 ? _res$productListOrder : []
    }));
  },
  tabChange: ([value, homeType], option) => {
    const query = Object(utils["c" /* dealUrlQuery */])({
      salesRankType: value
    });
    router_default.a.push(`/${homeType}/[appModule]${query}`, `/${homeType}/salesRank${query}`);
  }
});
const SalesRank_Box = external_styled_components_default.a.div.withConfig({
  displayName: "SalesRank__Box",
  componentId: "hmt8b7-0"
})([""]);
const SalesRank_Title = external_styled_components_default.a.div.withConfig({
  displayName: "SalesRank__Title",
  componentId: "hmt8b7-1"
})(["font-size:18px;font-weight:bold;"]);
const SaleRankTypeEnumLabel = {
  [ss_common_enum["k" /* SaleRankTypeEnum */].OneDay]: '本日',
  [ss_common_enum["k" /* SaleRankTypeEnum */].OneWeek]: '本周',
  [ss_common_enum["k" /* SaleRankTypeEnum */].OneMonth]: '本月'
};
const SalesRank = () => {
  var _router$query$salesRa;

  const {
    state: homeTabsState
  } = Object(useStore["b" /* useStoreModel */])(homeTabsModel);
  const router = Object(router_["useRouter"])();
  Object(external_react_["useEffect"])(() => {
    var _router$query;

    if (!router.query.salesRankType || ![ss_common_enum["k" /* SaleRankTypeEnum */].OneMonth, ss_common_enum["k" /* SaleRankTypeEnum */].OneWeek, ss_common_enum["k" /* SaleRankTypeEnum */].OneDay].includes(`${router === null || router === void 0 ? void 0 : (_router$query = router.query) === null || _router$query === void 0 ? void 0 : _router$query.salesRankType}`)) {
      const query = Object(utils["c" /* dealUrlQuery */])({
        salesRankType: ss_common_enum["k" /* SaleRankTypeEnum */].OneDay
      });
      router.push(`/${homeTabsState.homeType}/[appModule]${query}`, `/${homeTabsState.homeType}/salesRank${query}`);
    }
  }, [router.query.salesRankType, homeTabsState.homeType]);
  const {
    actions: actionsSalesRankModel,
    state: stateSalesRankModel
  } = Object(useStore["b" /* useStoreModel */])(SalesRankModel);
  Object(external_react_["useEffect"])(() => {
    if (router.query.salesRankType) {
      actionsSalesRankModel.getList({
        productInput: {
          isGroup: homeTabsState.homeType === appModule["b" /* HomeType */].group ? 1 : 0
        },
        orderByType: router.query.salesRankType
      });
    }
  }, [router.query.salesRankType]);
  return SalesRank_jsx(SalesRank_Box, null, SalesRank_jsx(core_["Tabs"], {
    variant: 'fullWidth',
    value: (_router$query$salesRa = router.query.salesRankType) !== null && _router$query$salesRa !== void 0 ? _router$query$salesRa : ss_common_enum["k" /* SaleRankTypeEnum */].OneDay,
    onChange: (event, value) => actionsSalesRankModel.tabChange([value, homeTabsState.homeType])
  }, [[ss_common_enum["k" /* SaleRankTypeEnum */].OneDay, '24小时排行'], [ss_common_enum["k" /* SaleRankTypeEnum */].OneWeek, '本周排行'], [ss_common_enum["k" /* SaleRankTypeEnum */].OneMonth, '本月排行']].map(v => SalesRank_jsx(core_["Tab"], {
    key: `SaleRankTab${v[0]}`,
    value: v[0],
    label: Object(dealKey["a" /* ls */])(v[1])
  }))), SalesRank_jsx(Box["b" /* Space */], {
    h: 16
  }), stateSalesRankModel.listData.map(product => {
    var _router$query2, _router$query3;

    return homeTabsState.homeType === appModule["b" /* HomeType */].group ? SalesRank_jsx(ProductItem["a" /* GroupProductItem */], {
      product: product,
      key: `ProductItem_${product.id}`,
      showSumOrder: true,
      sumOrderTip: SaleRankTypeEnumLabel[`${(_router$query2 = router.query) === null || _router$query2 === void 0 ? void 0 : _router$query2.salesRankType}`]
    }) : SalesRank_jsx(ProductItem["c" /* ProductItemOneRow */], {
      key: `ProductItemOneRow_${product.id}`,
      product: product,
      showSumOrder: true,
      sumOrderTip: SaleRankTypeEnumLabel[`${(_router$query3 = router.query) === null || _router$query3 === void 0 ? void 0 : _router$query3.salesRankType}`]
    });
  }));
};
// EXTERNAL MODULE: ./utils/components/ProductItem/UpdateShopCart.tsx
var UpdateShopCart = __webpack_require__("vo3K");

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");

// CONCATENATED MODULE: ./utils/view/home/components/LineRanking/LineRanking.tsx
var LineRanking_jsx = external_react_default.a.createElement;







const LineRankingModel = Object(modelUtil["c" /* modelFactory */])('LineRanking', {
  list: []
}, {
  getList: async (value, option) => {
    var _res$groupQueueList;

    const res = await option.query(doc["b" /* doc */].groupQueueList, {});
    option.setData(Object(utils["f" /* fpMergePre */])({
      list: (_res$groupQueueList = res === null || res === void 0 ? void 0 : res.groupQueueList) !== null && _res$groupQueueList !== void 0 ? _res$groupQueueList : []
    }));
  }
});
const LineRanking = () => {
  const {
    actions: actionsLineRankingModel,
    state: stateLineRankingModel
  } = Object(useStore["b" /* useStoreModel */])(LineRankingModel);
  Object(external_react_["useEffect"])(() => {
    actionsLineRankingModel.getList();
  }, []);
  return LineRanking_jsx("div", null, stateLineRankingModel.list.filter(v => {
    var _v$product;

    return Object(utils["a" /* dealMaybeNumber */])(v.sumFillAmount) < Object(utils["a" /* dealMaybeNumber */])((_v$product = v.product) === null || _v$product === void 0 ? void 0 : _v$product.groupPrecision);
  }).sort((a, b) => Object(utils["a" /* dealMaybeNumber */])(b.sumFillAmount) - Object(utils["a" /* dealMaybeNumber */])(a.sumFillAmount)).map(value => {
    var _value$product;

    return LineRanking_jsx(external_react_default.a.Fragment, {
      key: `ProductItem_${value.id}`
    }, LineRanking_jsx(Box["b" /* Space */], {
      h: 16
    }), LineRanking_jsx(ProductItem["a" /* GroupProductItem */], {
      product: (_value$product = value.product) !== null && _value$product !== void 0 ? _value$product : {},
      groupQueue: value
    }));
  }));
};
// CONCATENATED MODULE: ./utils/view/home/components/Tabs/Tabs.tsx

var Tabs_jsx = external_react_default.a.createElement;

















const homeTabsModel = Object(modelUtil["c" /* modelFactory */])('HomeTabs', {
  homeType: '',
  appModuleConfig: {}
}, {
  setHomeType: (value, option) => {
    option.setData(Object(utils["f" /* fpMergePre */])({
      homeType: value
    }));
  },
  onChange: ([name, type], option) => {
    // @ts-ignore
    router_default.a.push(`/${type}/[appModule]`, `/${type}/${name}`, {
      shallow: true
    }); // option.setData(fpMergePre({
    //   value,
    // }))
  },
  getData: async (value, option) => {
    var _appModuleConfig$getD, _appModuleConfig$getD2;

    const appModuleConfig = await option.query(doc["c" /* getDataConfig */], {
      data: {
        type: ss_common_enum["d" /* DictTypeEnum */].AppModule
      }
    }, {});
    option.setData(Object(utils["f" /* fpMergePre */])({
      appModuleConfig: (_appModuleConfig$getD = (_appModuleConfig$getD2 = appModuleConfig.getDataConfig) === null || _appModuleConfig$getD2 === void 0 ? void 0 : _appModuleConfig$getD2.value) !== null && _appModuleConfig$getD !== void 0 ? _appModuleConfig$getD : {}
    }));
  }
});
const HomeTabs = ({
  homeType
}) => {
  var _router$query$appModu;

  const router = Object(router_["useRouter"])();
  const {
    state: homeTabsState,
    actions: homeTabsActions
  } = Object(useStore["b" /* useStoreModel */])(homeTabsModel);
  return Tabs_jsx("div", {
    style: {
      marginTop: '10px'
    },
    className: "jsx-1221730688"
  }, !Object(external_lodash_["isEmpty"])(homeTabsState === null || homeTabsState === void 0 ? void 0 : homeTabsState.appModuleConfig) && Tabs_jsx(core_["Tabs"], {
    variant: 'fullWidth',
    value: (_router$query$appModu = router.query.appModule) !== null && _router$query$appModu !== void 0 ? _router$query$appModu : ss_common_enum["b" /* AppModuleTypeEnum */].categorySelection,
    onChange: (event, value) => homeTabsActions.onChange([value, homeType])
  }, Tabs_jsx(core_["Tab"], {
    value: ss_common_enum["b" /* AppModuleTypeEnum */].categorySelection,
    label: Object(dealKey["a" /* ls */])(homeType === appModule["b" /* HomeType */].group ? '分类拼团' : '分类选择')
  }), (homeType === appModule["b" /* HomeType */].home && [[ss_common_enum["b" /* AppModuleTypeEnum */].limitTime, '限时选购'], [ss_common_enum["b" /* AppModuleTypeEnum */].salesRank, '热销排行'], [ss_common_enum["b" /* AppModuleTypeEnum */].themeSelection, '主题甄选'], [ss_common_enum["b" /* AppModuleTypeEnum */].mayLike, '猜你喜欢']] || homeType === appModule["b" /* HomeType */].group && [[ss_common_enum["b" /* AppModuleTypeEnum */].salesRank, '热门排行'], [ss_common_enum["b" /* AppModuleTypeEnum */].lineRanking, '冲线排行']] || []).filter(v => {
    var _homeTabsState$appMod;

    return homeTabsState === null || homeTabsState === void 0 ? void 0 : (_homeTabsState$appMod = homeTabsState.appModuleConfig) === null || _homeTabsState$appMod === void 0 ? void 0 : _homeTabsState$appMod[v[0]];
  }).map(v => Tabs_jsx(core_["Tab"], {
    key: `AppModuleTypeEnum_${v[0]}`,
    value: v[0],
    label: Object(dealKey["a" /* ls */])(v[1])
  }))), Tabs_jsx("main", {
    style: {
      marginTop: '10px'
    },
    className: "jsx-1221730688"
  }, router.query.appModule === ss_common_enum["b" /* AppModuleTypeEnum */].categorySelection && Tabs_jsx(CategorySelection_CategorySelection, null), router.query.appModule === ss_common_enum["b" /* AppModuleTypeEnum */].limitTime && Tabs_jsx(PromotionFlashSale, null), router.query.appModule === ss_common_enum["b" /* AppModuleTypeEnum */].themeSelection && Tabs_jsx(ThemeSelection, null), router.query.appModule === ss_common_enum["b" /* AppModuleTypeEnum */].salesRank && Tabs_jsx(SalesRank, null), router.query.appModule === ss_common_enum["b" /* AppModuleTypeEnum */].lineRanking && Tabs_jsx(LineRanking, null)), Tabs_jsx(UpdateShopCart["a" /* UpdateShopCart */], null), Tabs_jsx(style_default.a, {
    id: "1221730688"
  }, ["div.jsx-1221730688 .MuiButtonBase-root{padding:0;}"]));
};

/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "YRx9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FootBar; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_Storefront__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("arhV");
/* harmony import */ var _material_ui_icons_Storefront__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Storefront__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_AccountBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("j4BW");
/* harmony import */ var _material_ui_icons_AccountBox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountBox__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Redeem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4o+8");
/* harmony import */ var _material_ui_icons_Redeem__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Redeem__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("yFMe");
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("RpH3");
/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ss_common_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("4Rmy");
/* harmony import */ var _style_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("ZtJr");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









const FootBar = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();

  const isAct = path => router.pathname.includes(path);

  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4279962377", [_style_common__WEBPACK_IMPORTED_MODULE_9__[/* mpStyle */ "a"].red, _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_7___default.a[600]]]]) + " " + 'FootBar'
  }, [['逛店', __jsx(_material_ui_icons_Storefront__WEBPACK_IMPORTED_MODULE_2___default.a, null), `/${_ss_common_enum__WEBPACK_IMPORTED_MODULE_8__[/* AppFootBar */ "a"].home}`], ['拼团', __jsx(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_5___default.a, null), `/${_ss_common_enum__WEBPACK_IMPORTED_MODULE_8__[/* AppFootBar */ "a"].group}`], ['达人区', __jsx(_material_ui_icons_Redeem__WEBPACK_IMPORTED_MODULE_4___default.a, null), `/${_ss_common_enum__WEBPACK_IMPORTED_MODULE_8__[/* AppFootBar */ "a"].card}`], // ['购物车', <ShoppingCartIcon/>, `/${AppFootBar.cart}`, stateShopCart.dealProductNumber(stateShopCart)],
  ['我', __jsx(_material_ui_icons_AccountBox__WEBPACK_IMPORTED_MODULE_3___default.a, null), `/${_ss_common_enum__WEBPACK_IMPORTED_MODULE_8__[/* AppFootBar */ "a"].me}`]].map(v => __jsx("section", {
    key: `FootBar_${v[0]}`,
    onClick: () => isAct(v[2]) ? '' : router.push(v[2]),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4279962377", [_style_common__WEBPACK_IMPORTED_MODULE_9__[/* mpStyle */ "a"].red, _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_7___default.a[600]]]]) + " " + ((isAct(v[2]) ? 'act' : '') || "")
  }, v[1], __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4279962377", [_style_common__WEBPACK_IMPORTED_MODULE_9__[/* mpStyle */ "a"].red, _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_7___default.a[600]]]])
  }, v[0]), ~~v[3] > 0 && __jsx("aside", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4279962377", [_style_common__WEBPACK_IMPORTED_MODULE_9__[/* mpStyle */ "a"].red, _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_7___default.a[600]]]])
  }, v[3]))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4279962377",
    dynamic: [_style_common__WEBPACK_IMPORTED_MODULE_9__[/* mpStyle */ "a"].red, _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_7___default.a[600]]
  }, [".FootBar.__jsx-style-dynamic-selector{position:fixed;bottom:0;height:14.0625vw;width:100vw;box-shadow:0 0.9375vw 1.25vw 0 rgba(0,0,0,0.14),0 0.9375vw 0.9375vw -0.625vw rgba(0,0,0,0.12),0 1px 2.5vw 0 rgba(0,0,0,0.2);background:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".FootBar.__jsx-style-dynamic-selector>section.__jsx-style-dynamic-selector{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;position:relative;}", `.FootBar.__jsx-style-dynamic-selector>section.__jsx-style-dynamic-selector>aside.__jsx-style-dynamic-selector{position:absolute;top:0;right:20%;border-radius:50%;width:5vw;height:5vw;background:${_style_common__WEBPACK_IMPORTED_MODULE_9__[/* mpStyle */ "a"].red};display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#fff;}`, `.act.__jsx-style-dynamic-selector{color:${_material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_7___default.a[600]};}`]));
};

/***/ }),

/***/ "YvTO":
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "Z3gB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export bScrollModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BScroller; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var better_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("7FHF");
/* harmony import */ var better_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(better_scroll__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("U81q");
/* harmony import */ var _tools_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("cBzo");
/* harmony import */ var _ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("+/yG");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const bScrollModel = Object(_ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_5__[/* modelFactory */ "c"])('bScrollModel', {
  scroll: {}
}, {
  setScroll: (value, option) => {
    option.setData(Object(_tools_utils__WEBPACK_IMPORTED_MODULE_4__[/* fpMergePre */ "f"])({
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
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_3__[/* useStoreModel */ "b"])(bScrollModel);
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3040993115", [boxHeight || '100vh', isX && boxWidth ? `${boxWidth}` : 'auto']]]) + " " + 'box'
  }, __jsx("div", {
    style: isX ? {
      display: 'inline-block'
    } : {},
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3040993115", [boxHeight || '100vh', isX && boxWidth ? `${boxWidth}` : 'auto']]])
  }, children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3040993115",
    dynamic: [boxHeight || '100vh', isX && boxWidth ? `${boxWidth}` : 'auto']
  }, [`.box.__jsx-style-dynamic-selector{height:${boxHeight || '100vh'};width:${isX && boxWidth ? `${boxWidth}` : 'auto'};overflow:hidden;}`]));
};

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

/***/ "arhV":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Storefront");

/***/ }),

/***/ "c+KP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ pageTypeEnum; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ shopCartModel; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ CartPage; });

// EXTERNAL MODULE: ./utils/ModelAction/modelUtil.ts
var modelUtil = __webpack_require__("+/yG");

// EXTERNAL MODULE: ./utils/ss_common/enum.ts
var ss_common_enum = __webpack_require__("4Rmy");

// EXTERNAL MODULE: ./utils/tools/utils.ts
var utils = __webpack_require__("cBzo");

// EXTERNAL MODULE: ./utils/tools/commonAction.ts
var commonAction = __webpack_require__("soTg");

// EXTERNAL MODULE: ./utils/graphqlTypes/doc/index.ts + 1 modules
var doc = __webpack_require__("i7FU");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./utils/ModelAction/useStore.ts + 2 modules
var useStore = __webpack_require__("U81q");

// EXTERNAL MODULE: ./utils/tools/dealKey.ts
var dealKey = __webpack_require__("+vfP");

// EXTERNAL MODULE: ./utils/components/HeaderTitle/HeaderTitle.tsx
var HeaderTitle = __webpack_require__("B42p");

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: external "@material-ui/core/colors"
var colors_ = __webpack_require__("+FwM");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./utils/view/cart/CartProduct.tsx
var CartProduct = __webpack_require__("GLZ+");

// EXTERNAL MODULE: ./utils/components/BScroll/BScroller.tsx
var BScroller = __webpack_require__("Z3gB");

// EXTERNAL MODULE: ./utils/components/NoAuth/NoAuth.tsx
var NoAuth = __webpack_require__("KMVQ");

// EXTERNAL MODULE: ./utils/components/Box/Box.tsx
var Box = __webpack_require__("cW92");

// EXTERNAL MODULE: ./utils/commonModel/dialog.ts
var dialog = __webpack_require__("Nu2o");

// EXTERNAL MODULE: ./utils/components/Message/Message.tsx
var Message = __webpack_require__("OO/1");

// CONCATENATED MODULE: ./utils/view/cart/components/InputPromoCode.tsx
var __jsx = external_react_default.a.createElement;









const inputPromoCodeModel = Object(modelUtil["b" /* mergeTwoModel */])(Object(dialog["a" /* dialogModelFactory */])('inputPromoCodeModel', () => {}), Object(modelUtil["c" /* modelFactory */])('input', {
  form: {
    promoCode: ''
  }
}, {
  setForm: commonAction["a" /* setForm */]
}));
const Footer = external_styled_components_default.a.div.withConfig({
  displayName: "InputPromoCode__Footer",
  componentId: "e2tdfi-0"
})(["padding-top:8px;text-align:right;"]);
const InputPromoCodeDialog = () => {
  const {
    actions: actionsInputPromoCodeModel,
    state: stateInputPromoCodeModel
  } = Object(useStore["b" /* useStoreModel */])(inputPromoCodeModel);
  return __jsx(core_["Dialog"], {
    open: stateInputPromoCodeModel.open,
    onClose: actionsInputPromoCodeModel.onClose
  }, __jsx(core_["DialogContent"], null, __jsx(core_["TextField"], {
    label: Object(dealKey["a" /* ls */])('请输入验证码'),
    value: stateInputPromoCodeModel.form.promoCode,
    onChange: event => actionsInputPromoCodeModel.setForm(['promoCode', event.target.value])
  }), __jsx(Footer, null, __jsx(core_["Button"], {
    variant: 'contained',
    color: 'secondary',
    onClick: async () => {
      const testRes = await stateInputPromoCodeModel.dialogData(stateInputPromoCodeModel.form.promoCode);

      if (testRes) {
        Object(Message["b" /* showMessage */])(testRes);
      } else {
        actionsInputPromoCodeModel.onClose();
        actionsInputPromoCodeModel.setForm(['promoCode', '']);
      }
    }
  }, Object(dealKey["a" /* ls */])('确定')))));
};
// EXTERNAL MODULE: external "@material-ui/icons/Close"
var Close_ = __webpack_require__("j08L");
var Close_default = /*#__PURE__*/__webpack_require__.n(Close_);

// EXTERNAL MODULE: ./utils/components/ProductItem/UpdateShopCart.tsx
var UpdateShopCart = __webpack_require__("vo3K");

// CONCATENATED MODULE: ./utils/view/cart/shopCart.tsx
var shopCart_jsx = external_react_default.a.createElement;


















const BoxContain = external_styled_components_default.a.section.withConfig({
  displayName: "shopCart__BoxContain",
  componentId: "sc-2w144c-0"
})(["padding:0 20px;"]);
const Title = external_styled_components_default.a.div.withConfig({
  displayName: "shopCart__Title",
  componentId: "sc-2w144c-1"
})(["font-size:18px;font-weight:bold;margin:16px 0 12px;"]);
const PromoCode = external_styled_components_default.a.div.withConfig({
  displayName: "shopCart__PromoCode",
  componentId: "sc-2w144c-2"
})(["display:flex;> aside{margin-left:8px;}"]);
const Money = external_styled_components_default.a.div.withConfig({
  displayName: "shopCart__Money",
  componentId: "sc-2w144c-3"
})(["display:flex;justify-content:space-between;"]);
const FixFooter = external_styled_components_default()(core_["Box"]).withConfig({
  displayName: "shopCart__FixFooter",
  componentId: "sc-2w144c-4"
})(["padding:20px;position:fixed;bottom:0;width:100vw;box-sizing:border-box;background:#fff;"]);
const ShopCartPage = () => {
  const {
    state: stateSCM,
    actions: actionsSCM,
    getLoad
  } = Object(useStore["b" /* useStoreModel */])(shopCartModel);
  const {
    actions: actionsInputPromoCodeModel
  } = Object(useStore["b" /* useStoreModel */])(inputPromoCodeModel);
  Object(external_react_["useEffect"])(() => {
    if (stateSCM.shopCartList.length === 0) {
      actionsSCM.getList();
    }
  }, []);
  Object(external_react_["useEffect"])(() => {
    if (stateSCM.user.id && localStorage.getItem(`promoCode_${stateSCM.user.id}`)) {
      actionsSCM.dealPromoCode(`${localStorage.getItem(`promoCode_${stateSCM.user.id}`)}`);
    }
  }, [stateSCM.user.id]);
  const productNumber = stateSCM.dealProductNumber(stateSCM);
  const productSubtotal = Object(utils["b" /* dealMoney */])(stateSCM.dealProductTotal(stateSCM));
  const promoCode = stateSCM.promoCode;
  const discountProduct = stateSCM.shopCartList.filter(v => {
    var _v$product, _v$product$category, _v$product2, _v$product2$category, _v$product2$category$, _v$product3, _v$product3$category, _v$product3$category$, _v$product3$category$2;

    return [(_v$product = v.product) === null || _v$product === void 0 ? void 0 : (_v$product$category = _v$product.category) === null || _v$product$category === void 0 ? void 0 : _v$product$category.id, (_v$product2 = v.product) === null || _v$product2 === void 0 ? void 0 : (_v$product2$category = _v$product2.category) === null || _v$product2$category === void 0 ? void 0 : (_v$product2$category$ = _v$product2$category.parentCategory) === null || _v$product2$category$ === void 0 ? void 0 : _v$product2$category$.id, (_v$product3 = v.product) === null || _v$product3 === void 0 ? void 0 : (_v$product3$category = _v$product3.category) === null || _v$product3$category === void 0 ? void 0 : (_v$product3$category$ = _v$product3$category.parentCategory) === null || _v$product3$category$ === void 0 ? void 0 : (_v$product3$category$2 = _v$product3$category$.parentCategory) === null || _v$product3$category$2 === void 0 ? void 0 : _v$product3$category$2.id].includes(promoCode.productCategory);
  });
  const discountProductAmount = discountProduct.reduce((previousValue, currentValue) => {
    var _currentValue$product;

    return previousValue + Object(utils["a" /* dealMaybeNumber */])(currentValue.number) * Object(utils["a" /* dealMaybeNumber */])((_currentValue$product = currentValue.product) === null || _currentValue$product === void 0 ? void 0 : _currentValue$product.priceOut);
  }, 0); // 计算折扣

  let discountAmountForPromoCode = 0;

  if (discountProduct.length) {
    // 折扣条件
    if (promoCode.discountCondition === ss_common_enum["e" /* DiscountConditionEnum */].No || promoCode.discountCondition === ss_common_enum["e" /* DiscountConditionEnum */].Amount && discountProductAmount > Object(utils["a" /* dealMaybeNumber */])(promoCode.discountConditionAmount)) {
      discountAmountForPromoCode = promoCode.discountType === ss_common_enum["f" /* DiscountTypeEnum */].Amount ? Object(utils["a" /* dealMaybeNumber */])(promoCode.discountAmount) : Object(utils["a" /* dealMaybeNumber */])(promoCode.discountAmount) * discountProductAmount / 100;
    }
  }

  Object(external_react_["useEffect"])(() => {
    if (discountAmountForPromoCode) {
      actionsSCM.setForm(['couponDiscount', discountAmountForPromoCode]);
    }
  }, [discountAmountForPromoCode]);
  const allTotal = stateSCM.dealProductTotal(stateSCM) - Object(utils["a" /* dealMaybeNumber */])(stateSCM.form.couponDiscount);
  return shopCart_jsx("div", null, shopCart_jsx(HeaderTitle["a" /* HeaderTitle */], {
    title: '购物车',
    LeftIcon: Close_default.a
  }), Object(NoAuth["a" /* dealNoAuth */])(shopCart_jsx(external_react_default.a.Fragment, null, !!getLoad(doc["b" /* doc */].userShopCartList) && shopCart_jsx(core_["LinearProgress"], null) || shopCart_jsx("div", {
    style: {
      height: '4px'
    }
  }), shopCart_jsx(BScroller["a" /* BScroller */], {
    boxHeight: 'calc(100vh - 65px)'
  }, shopCart_jsx(BoxContain, null, shopCart_jsx("div", {
    style: {
      paddingTop: '16px',
      fontSize: '18px',
      textAlign: 'center'
    }
  }, productNumber, Object(dealKey["a" /* ls */])('件商品')), shopCart_jsx("div", {
    style: {
      fontSize: '14px',
      textAlign: 'center',
      color: colors_["grey"][600],
      marginTop: '8px',
      marginBottom: '10px'
    }
  }, Object(dealKey["a" /* ls */])('小计'), ":", productSubtotal), stateSCM.shopCartList.map(value => shopCart_jsx(CartProduct["a" /* CartProduct */], {
    key: `CartProduct_${value.id}`,
    shopCart: value
  })), shopCart_jsx(core_["TextField"], {
    style: {
      marginTop: '10px'
    },
    fullWidth: true,
    label: Object(dealKey["a" /* ls */])('运送方式'),
    select: true,
    value: stateSCM.form.pickUpType,
    onChange: event => {
      actionsSCM.setForm(['pickUpType', event.target.value]);
      actionsSCM.setForm(['addressId', stateSCM.initAddressId(Object(utils["e" /* fpMerge */])(stateSCM, {
        form: {
          pickUpType: event.target.value
        }
      }))]);
    }
  }, shopCart_jsx(core_["MenuItem"], {
    value: ss_common_enum["h" /* PickUpTypeEnum */].Self
  }, Object(dealKey["a" /* ls */])(Object(ss_common_enum["l" /* getPickUpTypeName */])(ss_common_enum["h" /* PickUpTypeEnum */].Self))), shopCart_jsx(core_["MenuItem"], {
    value: ss_common_enum["h" /* PickUpTypeEnum */].Delivery
  }, Object(dealKey["a" /* ls */])(Object(ss_common_enum["l" /* getPickUpTypeName */])(ss_common_enum["h" /* PickUpTypeEnum */].Delivery)))), shopCart_jsx(Title, null, Object(dealKey["a" /* ls */])('达人卡和优惠券')), shopCart_jsx(PromoCode, null, shopCart_jsx("main", null, stateSCM.promoCode.title), shopCart_jsx("aside", null, Object(dealKey["a" /* ls */])('code'), ": ", stateSCM.promoCode.code)), shopCart_jsx(Box["b" /* Space */], {
    h: 8
  }), shopCart_jsx(core_["Button"], {
    variant: 'outlined',
    onClick: async () => {
      await actionsInputPromoCodeModel.openClick(promoCode => {
        return actionsSCM.dealPromoCode(promoCode);
      });
    }
  }, Object(dealKey["a" /* ls */])(stateSCM.promoCode.code ? '重新输入' : '输入验证码')), shopCart_jsx(InputPromoCodeDialog, null), shopCart_jsx(Title, null, Object(dealKey["a" /* ls */])('预估价格')), shopCart_jsx(Money, null, shopCart_jsx("aside", null, Object(dealKey["a" /* ls */])('小计')), shopCart_jsx("main", null, productSubtotal)), shopCart_jsx(Box["b" /* Space */], {
    h: 10
  }), shopCart_jsx(Money, null, shopCart_jsx("aside", null, Object(dealKey["a" /* ls */])('折扣')), shopCart_jsx("main", null, Object(utils["b" /* dealMoney */])(stateSCM.form.couponDiscount))), shopCart_jsx("div", {
    style: {
      width: '100%',
      height: '10px'
    }
  }), shopCart_jsx(Money, null, shopCart_jsx("aside", null, Object(dealKey["a" /* ls */])('总计')), shopCart_jsx("main", null, Object(utils["b" /* dealMoney */])(allTotal))), shopCart_jsx(Title, null, Object(dealKey["a" /* ls */])('下次购买的商品')), stateSCM.shopCartListNext.map(value => shopCart_jsx(CartProduct["a" /* CartProduct */], {
    key: `CartProduct_${value.id}`,
    shopCart: value
  })), shopCart_jsx("div", {
    style: {
      width: '100%',
      height: '100px'
    }
  }))), shopCart_jsx(FixFooter, {
    boxShadow: 1
  }, shopCart_jsx(core_["Button"], {
    variant: 'contained',
    color: 'secondary',
    fullWidth: true,
    disabled: productNumber === 0,
    onClick: () => actionsSCM.updatePageType(pageTypeEnum.order)
  }, "\u53BB\u7ED3\u7B97")), shopCart_jsx(UpdateShopCart["a" /* UpdateShopCart */], null))));
};
// EXTERNAL MODULE: ./utils/view/cart/orderPage.tsx
var orderPage = __webpack_require__("7O+n");

// CONCATENATED MODULE: ./utils/view/cart/index.tsx
var cart_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const pageTypeEnum = {
  shopCart: 'shopCart',
  order: 'order'
};
const initForm = {
  pickUpType: ss_common_enum["h" /* PickUpTypeEnum */].Self,
  addressId: '',
  paymentMethodCardId: '',
  deductCoin: 0,
  saleTax: 0,
  transportationCosts: 0,
  couponDiscount: 0
};
const shopCartModel = Object(modelUtil["c" /* modelFactory */])('shopCartModel', {
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
  dealAddressList: state => state.form.pickUpType === ss_common_enum["h" /* PickUpTypeEnum */].Delivery && state.userAddressList || state.selfAddress.map(v => _objectSpread(_objectSpread({}, v), {}, {
    combineAddress: `${v.province} ${v.city} ${v.streetAddress}`,
    name: v.fullName,
    contactInformation: v.phone
  })),
  dealAddressData: state => state.dealAddressList(state).find(v => v.id === state.form.addressId) || {},
  initAddressId: state => {
    var _state$userAddressLis, _state$userAddressLis2, _state$selfAddress, _state$selfAddress$;

    return state.form.pickUpType === ss_common_enum["h" /* PickUpTypeEnum */].Delivery && ((_state$userAddressLis = state.userAddressList) === null || _state$userAddressLis === void 0 ? void 0 : (_state$userAddressLis2 = _state$userAddressLis.find(v => v.isDefault)) === null || _state$userAddressLis2 === void 0 ? void 0 : _state$userAddressLis2.id) || ((_state$selfAddress = state.selfAddress) === null || _state$selfAddress === void 0 ? void 0 : (_state$selfAddress$ = _state$selfAddress[0]) === null || _state$selfAddress$ === void 0 ? void 0 : _state$selfAddress$.id);
  },
  dealProductTotal: state => state.shopCartList.reduce((pre, cur) => {
    var _cur$product;

    return pre + Object(utils["a" /* dealMaybeNumber */])(cur === null || cur === void 0 ? void 0 : cur.number) * Object(utils["a" /* dealMaybeNumber */])(cur === null || cur === void 0 ? void 0 : (_cur$product = cur.product) === null || _cur$product === void 0 ? void 0 : _cur$product.priceOut);
  }, 0),
  dealTransportationCosts: (state, productTotal) => {
    var _state$freightConfig;

    return state.form.pickUpType === ss_common_enum["h" /* PickUpTypeEnum */].Delivery && state.freightConfig.reduce((pre, cur) => {
      if (pre > parseFloat(cur === null || cur === void 0 ? void 0 : cur.freightPay) && productTotal < parseFloat(cur === null || cur === void 0 ? void 0 : cur.orderMax)) {
        return parseFloat(cur === null || cur === void 0 ? void 0 : cur.freightPay);
      } else {
        return pre;
      }
    }, parseFloat((_state$freightConfig = state.freightConfig[state.freightConfig.length - 1]) === null || _state$freightConfig === void 0 ? void 0 : _state$freightConfig.freightPay)) || 0;
  }
}, {
  clearData: (value, option) => {
    option.setData(Object(utils["f" /* fpMergePre */])({
      form: initForm,
      pageType: pageTypeEnum.shopCart
    }));
  },
  clearForm: (value, option) => option.setData(Object(utils["f" /* fpMergePre */])({
    form: _objectSpread({}, initForm)
  })),
  setForm: commonAction["a" /* setForm */],
  getList: async (value, option) => {
    var _userRes$oneUser, _res$shopCartList$fil, _res$shopCartList$fil2;

    const userRes = await option.query(doc["b" /* doc */].oneUser);
    const res = await option.query(doc["b" /* doc */].userShopCartList);
    option.setData(Object(utils["f" /* fpMergePre */])({
      user: (_userRes$oneUser = userRes === null || userRes === void 0 ? void 0 : userRes.oneUser) !== null && _userRes$oneUser !== void 0 ? _userRes$oneUser : {},
      shopCartList: (_res$shopCartList$fil = res === null || res === void 0 ? void 0 : res.shopCartList.filter(v => !v.isNext)) !== null && _res$shopCartList$fil !== void 0 ? _res$shopCartList$fil : [],
      shopCartListNext: (_res$shopCartList$fil2 = res === null || res === void 0 ? void 0 : res.shopCartList.filter(v => !!v.isNext)) !== null && _res$shopCartList$fil2 !== void 0 ? _res$shopCartList$fil2 : []
    }));
  },
  dealPromoCode: async (value, option) => {
    var _res$promoCodeList;

    const res = await option.query(doc["b" /* doc */].promoCodeList, {
      promoCodeItemInput: {
        code: value
      }
    });

    if ((res === null || res === void 0 ? void 0 : (_res$promoCodeList = res.promoCodeList) === null || _res$promoCodeList === void 0 ? void 0 : _res$promoCodeList.length) === 1) {
      const promoCode = res.promoCodeList[0];
      option.setData(Object(utils["f" /* fpMergePre */])({
        promoCode
      }));
      return '';
    } else {
      return Object(dealKey["a" /* ls */])('未匹配到优惠码');
    }
  },
  updatePageType: (value, option) => option.setData(Object(utils["f" /* fpMergePre */])({
    pageType: value
  })),
  updatePayCardList: async (value, option) => {
    const res = await option.query(doc["b" /* doc */].orderConfirmInfo);
    option.setData(Object(utils["f" /* fpMergePre */])({
      payCardList: res === null || res === void 0 ? void 0 : res.payCardListOneUser
    }));
  },
  getOrderInfo: async (value, option) => {
    var _res$getDataConfig$va, _res$getDataConfig, _res$getDataConfig$va2, _res$freightConfig$va, _res$freightConfig, _res$freightConfig$va2, _res$userLevelList, _res$userAddressListO, _res$userAddressListO2, _res$getDataConfig2, _res$getDataConfig2$v, _res$getDataConfig2$v2, _res$getDataConfig2$v3, _ref, _ref$find;

    const res = await option.query(doc["b" /* doc */].orderConfirmInfo);
    option.setData(Object(utils["h" /* fpSetPre */])('user', res === null || res === void 0 ? void 0 : res.oneUser));
    option.setData(Object(utils["f" /* fpMergePre */])({
      payCardList: res === null || res === void 0 ? void 0 : res.payCardListOneUser,
      userAddressList: res === null || res === void 0 ? void 0 : res.userAddressListOneUser,
      selfAddress: (_res$getDataConfig$va = res === null || res === void 0 ? void 0 : (_res$getDataConfig = res.getDataConfig) === null || _res$getDataConfig === void 0 ? void 0 : (_res$getDataConfig$va2 = _res$getDataConfig.value) === null || _res$getDataConfig$va2 === void 0 ? void 0 : _res$getDataConfig$va2.list) !== null && _res$getDataConfig$va !== void 0 ? _res$getDataConfig$va : [],
      freightConfig: (_res$freightConfig$va = res === null || res === void 0 ? void 0 : (_res$freightConfig = res.freightConfig) === null || _res$freightConfig === void 0 ? void 0 : (_res$freightConfig$va2 = _res$freightConfig.value) === null || _res$freightConfig$va2 === void 0 ? void 0 : _res$freightConfig$va2.freightList) !== null && _res$freightConfig$va !== void 0 ? _res$freightConfig$va : [],
      userLevelList: (_res$userLevelList = res === null || res === void 0 ? void 0 : res.userLevelList) !== null && _res$userLevelList !== void 0 ? _res$userLevelList : []
    }));
    option.setData(Object(utils["f" /* fpMergePre */])({
      form: {
        addressId: option.data.form.pickUpType === ss_common_enum["h" /* PickUpTypeEnum */].Delivery && (res === null || res === void 0 ? void 0 : (_res$userAddressListO = res.userAddressListOneUser) === null || _res$userAddressListO === void 0 ? void 0 : (_res$userAddressListO2 = _res$userAddressListO.find(v => v.isDefault)) === null || _res$userAddressListO2 === void 0 ? void 0 : _res$userAddressListO2.id) || (res === null || res === void 0 ? void 0 : (_res$getDataConfig2 = res.getDataConfig) === null || _res$getDataConfig2 === void 0 ? void 0 : (_res$getDataConfig2$v = _res$getDataConfig2.value) === null || _res$getDataConfig2$v === void 0 ? void 0 : (_res$getDataConfig2$v2 = _res$getDataConfig2$v.list) === null || _res$getDataConfig2$v2 === void 0 ? void 0 : (_res$getDataConfig2$v3 = _res$getDataConfig2$v2[0]) === null || _res$getDataConfig2$v3 === void 0 ? void 0 : _res$getDataConfig2$v3.id),
        paymentMethodCardId: ((_ref = res === null || res === void 0 ? void 0 : res.payCardListOneUser) === null || _ref === void 0 ? void 0 : (_ref$find = _ref.find(v => v.isDefault)) === null || _ref$find === void 0 ? void 0 : _ref$find.id) || ''
      }
    }));
  },
  submit: async (value, option) => {
    return await option.mutate(doc["b" /* doc */].saveOrder, {
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
  } = Object(useStore["b" /* useStoreModel */])(shopCartModel);
  return stateSCM.pageType === pageTypeEnum.order && cart_jsx(orderPage["d" /* OrderPage */], null) || cart_jsx(ShopCartPage, null);
};

/***/ }),

/***/ "cBzo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getObjectURL */
/* unused harmony export parseFloatForInput */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return fpSet; });
/* unused harmony export delay */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return fpSetPre; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return fpMerge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return fpMergePre; });
/* unused harmony export fpRemove */
/* unused harmony export dealNumberZero */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return formatDate; });
/* unused harmony export dealNonBooleanProps */
/* unused harmony export formatMoney */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return dealMoney; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dealMaybeNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return dealUrlQuery; });
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Skji");
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(date_fns_format__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tLFe");
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_set__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YLtl");
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
/* unused harmony default export */ var _unused_webpack_default_export = ({
  getObjectURL
});
const dealUrlQuery = queryObj => {
  return `?${Object.keys(queryObj).map(value => `${value}=${queryObj[value]}`).join('&')}`;
};

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cW92":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Box; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Space; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
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
    } : {})
  });
};

/***/ }),

/***/ "cae+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartIconButton; });
/* harmony import */ var _ss_common_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4Rmy");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("FQAE");
/* harmony import */ var _material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("U81q");
/* harmony import */ var _view_cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("c+KP");
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;







const ShoppingCartIconButton = ({
  color,
  htmlColor
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  const {
    state: stateShopCart,
    actions: actionsShopCart
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_5__[/* useStoreModel */ "b"])(_view_cart__WEBPACK_IMPORTED_MODULE_6__[/* shopCartModel */ "c"]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    if (!stateShopCart.user.id) {
      actionsShopCart.getList();
    }
  }, []);
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    onClick: () => {
      router.push(`/${_ss_common_enum__WEBPACK_IMPORTED_MODULE_0__[/* AppFootBar */ "a"].cart}`);
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
    badgeContent: stateShopCart.dealProductNumber(stateShopCart),
    color: "primary"
  }, __jsx(_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_2___default.a, {
    color: color,
    htmlColor: htmlColor
  })));
};

/***/ }),

/***/ "cvHV":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ChevronRight");

/***/ }),

/***/ "i7FU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ getDataConfig; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ homeCarouselImgs; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ categoryList; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ doc; });

// UNUSED EXPORTS: getUserListDoc

// EXTERNAL MODULE: external "apollo-boost"
var external_apollo_boost_ = __webpack_require__("YvTO");

// CONCATENATED MODULE: ./utils/graphqlTypes/doc/fragment.ts

const fragment = {
  CategoryFields: external_apollo_boost_["gql"]`
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
  UserFields: external_apollo_boost_["gql"]`
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
  UserInfoFields: external_apollo_boost_["gql"]`
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
  OrderInfoFields: external_apollo_boost_["gql"]`
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
  ROrderProductFields: external_apollo_boost_["gql"]`
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
  ProductFields: external_apollo_boost_["gql"]`
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
  ImgFields: external_apollo_boost_["gql"]`
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
  UserAddressFields: external_apollo_boost_["gql"]`
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
  UserPayCardFields: external_apollo_boost_["gql"]`
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
  ShopCartFields: external_apollo_boost_["gql"]`
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
  DataConfigFields: external_apollo_boost_["gql"]`
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
  DictFields: external_apollo_boost_["gql"]`
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
  GroupQueueFields: external_apollo_boost_["gql"]`
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
  GroupOrderFields: external_apollo_boost_["gql"]`
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
  PromoCodeFields: external_apollo_boost_["gql"]`
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
// EXTERNAL MODULE: ./utils/ss_common/enum.ts
var ss_common_enum = __webpack_require__("4Rmy");

// CONCATENATED MODULE: ./utils/graphqlTypes/doc/index.ts



const getUserListDoc = external_apollo_boost_["gql"]`
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
const getDataConfig = external_apollo_boost_["gql"]`
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
const homeCarouselImgs = external_apollo_boost_["gql"]`
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
const categoryList = external_apollo_boost_["gql"]`
  query query_query_testLong565($data: CategoryListInput) {
    categoryList(data: $data) {
      total
      list {
        ...Category
      }
    }
  }
  ${fragment.CategoryFields}
`;
const doc = {
  getUserListDoc,
  categoryList,
  getDataConfig,
  homeCarouselImgs,
  registerUser: external_apollo_boost_["gql"]`
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
  refreshToken: external_apollo_boost_["gql"]`
    query refreshToken($data: String!) {
      refreshToken(refreshtoken: $data) {
        refreshtoken
        token
      }
    }
  `,
  login: external_apollo_boost_["gql"]`
    query login($data: UserItemInput) {
      login(user: $data) {
        token
        refreshtoken
      }
    }
  `,
  oneUser: external_apollo_boost_["gql"]`
    query oneUser {
      oneUser {
        ...UserFields
        userInfo {
          ...UserInfoFields
        }
      }
    }
    ${fragment.UserInfoFields}
    ${fragment.UserFields}
  `,
  orderList: external_apollo_boost_["gql"]`
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
    ${fragment.OrderInfoFields}
    ${fragment.ROrderProductFields}
    ${fragment.ProductFields}
    ${fragment.ImgFields}
  `,
  orderDetail: external_apollo_boost_["gql"]`
    query ($id: String) {
      selfAddress: getDataConfig(dataConfigInput: {
        type: "${ss_common_enum["d" /* DictTypeEnum */].SelfAddress}"
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
    ${fragment.DataConfigFields}
    ${fragment.OrderInfoFields}
    ${fragment.ROrderProductFields}
    ${fragment.ProductFields}
    ${fragment.ImgFields}
    ${fragment.UserFields}
    ${fragment.UserInfoFields}
    ${fragment.UserPayCardFields}
    ${fragment.UserAddressFields}
  `,
  updatePassword: external_apollo_boost_["gql"]`
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
    ${fragment.UserFields}
  `,
  payCardListOneUser: external_apollo_boost_["gql"]`
    query {
      payCardListOneUser {
        ...UserPayCardFields
      }
    }
    ${fragment.UserPayCardFields}
  `,
  userPayCard: external_apollo_boost_["gql"]`
    query ($data: UserPayCardItemInput) {
      userPayCard (userPayCard: $data) {
        ...UserPayCardFields
      }
    }
    ${fragment.UserPayCardFields}
  `,
  saveUserPayCard: external_apollo_boost_["gql"]`
    mutation ($data: UserPayCardItemInput){
      saveUserPayCard (userPayCard: $data) {
        ...UserPayCardFields
      }
    }
    ${fragment.UserPayCardFields}
  `,
  setUserPayCardDefault: external_apollo_boost_["gql"]`
    mutation ($data: UserPayCardItemInput) {
      setUserPayCardDefault (userPayCard: $data) {
        ...UserPayCardFields
      }
    }
    ${fragment.UserPayCardFields}
  `,
  pickupAddress: external_apollo_boost_["gql"]`
    query {
      getDataConfig(dataConfigInput: {
        type: "${ss_common_enum["d" /* DictTypeEnum */].SelfAddress}"
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
    ${fragment.UserInfoFields}
    ${fragment.DataConfigFields}
    ${fragment.UserFields}
  `,
  updateUserInfo: external_apollo_boost_["gql"]`
    mutation ($userInfo: UserInfoItemInput) {
      updateUserInfo (userInfo: $userInfo) {
        ...UserInfoFields
      }
    }
    ${fragment.UserInfoFields}
  `,
  userAddressListOneUser: external_apollo_boost_["gql"]`
    query {
      userAddressListOneUser {
        ...UserAddressFields
      }
    }
    ${fragment.UserAddressFields}
  `,
  userAddress: external_apollo_boost_["gql"]`
    query ($data: UserAddressItemInput) {
      userAddress (userAddress: $data) {
        ...UserAddressFields
      }
    }
    ${fragment.UserAddressFields}
  `,
  saveUserAddress: external_apollo_boost_["gql"]`
    mutation ($data: UserAddressItemInput){
      saveUserAddress (userAddress: $data) {
        ...UserAddressFields
      }
    }
    ${fragment.UserAddressFields}
  `,
  setUserAddressDefault: external_apollo_boost_["gql"]`
    mutation ($data: UserAddressItemInput) {
      setUserAddressDefault (userAddress: $data) {
        ...UserAddressFields
      }
    }
    ${fragment.UserAddressFields}
  `,
  productsInCategory: external_apollo_boost_["gql"]`
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
    ${fragment.ProductFields}
    ${fragment.ImgFields}
    ${fragment.CategoryFields}
  `,
  categoryLevel: external_apollo_boost_["gql"]`
    query ($data: CategoryItemInput) {
      categoryLevel(categoryItemInput: $data)
    }
  `,
  oneCategory: external_apollo_boost_["gql"]`
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
    ${fragment.CategoryFields}
  `,
  productList: external_apollo_boost_["gql"]`
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
    ${fragment.ProductFields}
    ${fragment.ImgFields}
  `,
  updateNumShopCart: external_apollo_boost_["gql"]`
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
    ${fragment.ProductFields}
    ${fragment.UserFields}
  `,
  userShopCartList: external_apollo_boost_["gql"]`
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
    ${fragment.ShopCartFields}
    ${fragment.ProductFields}
    ${fragment.ImgFields}
  `,
  updateShopCart: external_apollo_boost_["gql"]`
    mutation ($shopCart: ShopCartItemInput){
      updateShopCart (shopCart: $shopCart) {
        ...ShopCartFields
      }
    }
    ${fragment.ShopCartFields}
  `,
  orderConfirmInfo: external_apollo_boost_["gql"]`
    query {
      getDataConfig(dataConfigInput: {
        type: "${ss_common_enum["d" /* DictTypeEnum */].SelfAddress}"
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
        type: "${ss_common_enum["d" /* DictTypeEnum */].Freight}"
      }) {
        ...DataConfigFields
      }
      userLevelList: getDictList (dictInput: {
        dictTypeCode: "UserLevel"
      }) {
        ...DictFields
      }
    }
    ${fragment.UserAddressFields}
    ${fragment.UserPayCardFields}
    ${fragment.UserInfoFields}
    ${fragment.UserFields}
    ${fragment.DataConfigFields}
    ${fragment.DictFields}
  `,
  saveOrder: external_apollo_boost_["gql"]`
    mutation ($orderInfoItemInput: OrderInfoItemInput) {
      saveOrder (orderInfoItemInput: $orderInfoItemInput) {
        ...OrderInfoFields
      }
    }
    ${fragment.OrderInfoFields}
  `,
  dictList: external_apollo_boost_["gql"]`
    query ($data: DictInput) {
      getDictList (dictInput: $data) {
        ...DictFields
      }
    }
    ${fragment.DictFields}
  `,
  limitTimeData: external_apollo_boost_["gql"]`
    query {
      limitTimeData: getDataConfig (dataConfigInput: {
        type: "${ss_common_enum["d" /* DictTypeEnum */].PromotionFlashSale}"
      }) {
        ...DataConfigFields
      }
    }
    ${fragment.DataConfigFields}
  `,
  productListByIds: external_apollo_boost_["gql"]`
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
    ${fragment.ProductFields}
    ${fragment.ImgFields}
  `,
  groupQueueList: external_apollo_boost_["gql"]`
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
    ${fragment.GroupQueueFields}
    ${fragment.ProductFields}
    ${fragment.ImgFields}
    ${fragment.GroupOrderFields}
  `,
  updateOrder: external_apollo_boost_["gql"]`
    mutation ($orderInfoItemInput: OrderInfoItemInput) {
      updateOrder (orderInfoItemInput: $orderInfoItemInput) {
        ...OrderInfoFields
      }
    }
    ${fragment.OrderInfoFields}
  `,
  saveGroupOrder: external_apollo_boost_["gql"]`
    mutation ($orderInfoItemInput: OrderInfoItemInput, $groupOrderItemInput: GroupOrderItemInput, $groupQueueItemInput: GroupQueueItemInput) {
      saveGroupOrder (orderInfoItemInput: $orderInfoItemInput, groupOrderItemInput: $groupOrderItemInput, groupQueueItemInput: $groupQueueItemInput) {
        ...OrderInfoFields
      }
    }
    ${fragment.OrderInfoFields}
  `,
  promoCodeList: external_apollo_boost_["gql"]`
    query ($promoCodeItemInput: PromoCodeItemInput) {
      promoCodeList (promoCodeItemInput: $promoCodeItemInput) {
        ...PromoCodeFields
      }
    }
    ${fragment.PromoCodeFields}
  `,
  categoryRootParent: external_apollo_boost_["gql"]`
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
    ${fragment.CategoryFields}
  `,
  productListOrderByOrder: external_apollo_boost_["gql"]`
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
    ${fragment.ProductFields}
    ${fragment.ImgFields}
    ${fragment.ROrderProductFields}
  `,
  searchData: external_apollo_boost_["gql"]`
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
        promoCodeType: "${ss_common_enum["i" /* PromoCodeTypeEnum */].DarenCard}",
        title: $keyword,
      }) {
        ...PromoCodeFields
      }
      promoCodePromoCodeList: promoCodeList(promoCodeItemInput: {
        promoCodeType: "${ss_common_enum["i" /* PromoCodeTypeEnum */].PromoCode}",
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
    ${fragment.UserFields}
    ${fragment.UserInfoFields}
    ${fragment.ProductFields}
    ${fragment.ImgFields}
    ${fragment.PromoCodeFields}
  `
};

/***/ }),

/***/ "j08L":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Close");

/***/ }),

/***/ "j4BW":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AccountBox");

/***/ }),

/***/ "n+/U":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return selectCardModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectCard; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _commonModel_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Nu2o");
/* harmony import */ var _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("U81q");
/* harmony import */ var _tools_dealKey__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("+vfP");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("c+KP");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








const selectCardModel = Object(_commonModel_dialog__WEBPACK_IMPORTED_MODULE_2__[/* dialogModelFactory */ "a"])('selectCardModel', {});
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
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_3__[/* useStoreModel */ "b"])(selectCardModel);
  const {
    state: stateShopCartModel,
    actions: actionsShopCartModel
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_3__[/* useStoreModel */ "b"])(_index__WEBPACK_IMPORTED_MODULE_5__[/* shopCartModel */ "c"]);
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Dialog"], {
    open: stateSelectCard.open,
    onClose: actionsSelectCard.onClose
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["DialogTitle"], null, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_4__[/* ls */ "a"])('选择信用卡')), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["DialogContent"], null, stateShopCartModel.payCardList.map(v => __jsx(CardBox, {
    key: `DialogTitleAddressBox_${v.id}`
  }, __jsx("header", null, v.name), __jsx("footer", null, `${v.number}`), __jsx("aside", null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Radio"], {
    onChange: () => {
      stateSelectCard.openResolve(v.id);
      actionsSelectCard.onClose();
    },
    checked: v.id === stateShopCartModel.form.paymentMethodCardId
  })))), __jsx(Footer, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    fullWidth: true,
    variant: 'contained',
    color: 'secondary',
    onClick: () => {
      router.push('/me/myCreditCard/edit/[id]', '/me/myCreditCard/edit/0');
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_4__[/* ls */ "a"])('添加新方式')))));
};

/***/ }),

/***/ "n+Zn":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/StarBorderRounded");

/***/ }),

/***/ "oxxF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return productModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ProductPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ProductItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ProductItemOneRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupProductItem; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_icons_StarRounded__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("3F1g");
/* harmony import */ var _material_ui_icons_StarRounded__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_StarRounded__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_StarBorderRounded__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("n+Zn");
/* harmony import */ var _material_ui_icons_StarBorderRounded__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_StarBorderRounded__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("EtfT");
/* harmony import */ var _material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("FQAE");
/* harmony import */ var _material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tools_img__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Oj7+");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tools_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("cBzo");
/* harmony import */ var _style_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("ZtJr");
/* harmony import */ var _ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("+/yG");
/* harmony import */ var _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("U81q");
/* harmony import */ var _view_me_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("F42i");
/* harmony import */ var _graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("i7FU");
/* harmony import */ var _Message_Message__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("OO/1");
/* harmony import */ var _tools_dealKey__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("+vfP");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("+FwM");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _view_cart__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("c+KP");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _UpdateShopCart__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("vo3K");
/* harmony import */ var _Box_Box__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("cW92");
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






















const productModel = Object(_ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_10__[/* modelFactory */ "c"])('productModel', {}, {
  updateNumShopCart: async (value, option) => {
    return await option.mutate(_graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_13__[/* doc */ "b"].updateNumShopCart, _objectSpread({
      shopCart: value
    }, value.number ? {
      updateNum: value.number
    } : {}));
  },
  updateShopCart: async (value, option) => {
    return await option.mutate(_graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_13__[/* doc */ "b"].updateShopCart, {
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
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_8__[/* dealMoney */ "b"])(product === null || product === void 0 ? void 0 : product.priceMarket)), __jsx("main", {
    style: {
      display: 'inline-block',
      fontSize: '14px',
      marginLeft: '6px',
      color: _style_common__WEBPACK_IMPORTED_MODULE_9__[/* mpStyle */ "a"].red,
      flexShrink: 0
    }
  }, priceOutTip !== null && priceOutTip !== void 0 ? priceOutTip : '', Object(_tools_utils__WEBPACK_IMPORTED_MODULE_8__[/* dealMoney */ "b"])(product === null || product === void 0 ? void 0 : product.priceOut)));
};
const ProductItem = ({
  product
}) => {
  var _product$img, _product$img$, _stateMe$user;

  const {
    actions: actionsUpdateShopCartModel
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_11__[/* useStoreModel */ "b"])(_UpdateShopCart__WEBPACK_IMPORTED_MODULE_19__[/* updateShopCartModel */ "b"]);
  const {
    actions: actionsShopCart
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_11__[/* useStoreModel */ "b"])(_view_cart__WEBPACK_IMPORTED_MODULE_17__[/* shopCartModel */ "c"]);
  const {
    state: stateMe,
    actions: actionsMe
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_11__[/* useStoreModel */ "b"])(_view_me_model__WEBPACK_IMPORTED_MODULE_12__[/* meModel */ "a"]);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(() => {
    if (!stateMe.user.id) {
      actionsMe.getLoginUser();
    }
  }, []);
  const {
    actions: actionsPM
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_11__[/* useStoreModel */ "b"])(productModel);
  return __jsx(Box, null, __jsx("header", null, __jsx("img", {
    src: Object(_tools_img__WEBPACK_IMPORTED_MODULE_6__[/* dealImgUrl */ "a"])(product === null || product === void 0 ? void 0 : (_product$img = product.img) === null || _product$img === void 0 ? void 0 : (_product$img$ = _product$img[0]) === null || _product$img$ === void 0 ? void 0 : _product$img$.url),
    alt: ""
  })), __jsx("main", null, product.name, product.weight, product.unit), __jsx("footer", null, __jsx(ProductPrice, {
    product: product
  }), ((_stateMe$user = stateMe.user) === null || _stateMe$user === void 0 ? void 0 : _stateMe$user.id) && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["IconButton"], {
    onClick: async () => {
      const res = await actionsUpdateShopCartModel.openClick();

      if ((res === null || res === void 0 ? void 0 : res.num) > 0) {
        var _await$actionsPM$upda, _await$actionsPM$upda2;

        if ((_await$actionsPM$upda = await actionsPM.updateNumShopCart({
          product,
          number: ~~(res === null || res === void 0 ? void 0 : res.num)
        })) === null || _await$actionsPM$upda === void 0 ? void 0 : (_await$actionsPM$upda2 = _await$actionsPM$upda.updateNumShopCart) === null || _await$actionsPM$upda2 === void 0 ? void 0 : _await$actionsPM$upda2.id) {
          Object(_Message_Message__WEBPACK_IMPORTED_MODULE_14__[/* showMessage */ "b"])('操作成功');
          actionsShopCart.getList();
        }
      }
    }
  }, __jsx(_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_4___default.a, {
    color: 'secondary'
  }))));
};
const RowBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ProductItem__RowBox",
  componentId: "sc-1cef71f-1"
})(["display:flex;padding:8px;box-shadow:", ";border-radius:8px;margin-bottom:8px;"], _style_common__WEBPACK_IMPORTED_MODULE_9__[/* mpStyle */ "a"].shadow['1']);
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
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_11__[/* useStoreModel */ "b"])(_UpdateShopCart__WEBPACK_IMPORTED_MODULE_19__[/* updateShopCartModel */ "b"]);
  const {
    state: stateMe,
    actions: actionsMe
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_11__[/* useStoreModel */ "b"])(_view_me_model__WEBPACK_IMPORTED_MODULE_12__[/* meModel */ "a"]);
  const {
    actions: actionsPM
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_11__[/* useStoreModel */ "b"])(productModel);
  const {
    actions: actionsShopCart
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_11__[/* useStoreModel */ "b"])(_view_cart__WEBPACK_IMPORTED_MODULE_17__[/* shopCartModel */ "c"]);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(() => {
    if (!stateMe.user.id) {
      actionsMe.getLoginUser();
    }
  }, []);
  return __jsx(RowBox, {
    key: `ProductItemOneRow_${product.id}`
  }, __jsx(Img, null, __jsx("img", {
    src: Object(_tools_img__WEBPACK_IMPORTED_MODULE_6__[/* dealImgUrl */ "a"])(product === null || product === void 0 ? void 0 : (_product$img2 = product.img) === null || _product$img2 === void 0 ? void 0 : (_product$img2$ = _product$img2[0]) === null || _product$img2$ === void 0 ? void 0 : _product$img2$.url),
    alt: ""
  })), __jsx(LeftBox, null, __jsx("main", null, product.name, product.weight, product.unit), showSumOrder && __jsx(Tip, null, sumOrderTip, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__[/* ls */ "a"])('销量'), ": ", product.sumOrder), __jsx(Price, null, __jsx(ProductPrice, {
    product: product
  })), !hideAction && ((_stateMe$user2 = stateMe.user) === null || _stateMe$user2 === void 0 ? void 0 : _stateMe$user2.id) && __jsx(Bun, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
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
          Object(_Message_Message__WEBPACK_IMPORTED_MODULE_14__[/* showMessage */ "b"])('操作成功');
          actionsShopCart.getList();
        }
      }
    }
  }, __jsx(_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_4___default.a, null), Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__[/* ls */ "a"])('加入购物车')))));
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
})(["margin-top:8px;color:", ";"], _style_common__WEBPACK_IMPORTED_MODULE_9__[/* mpStyle */ "a"].red);
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
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_11__[/* useStoreModel */ "b"])(_view_me_model__WEBPACK_IMPORTED_MODULE_12__[/* meModel */ "a"]);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_18__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(() => {
    if (!stateMe.user.id) {
      actionsMe.getLoginUser();
    }
  }, []);
  return __jsx(GroupBox, {
    key: `GroupBox_${product.id}`
  }, __jsx(GroupImg, null, __jsx("img", {
    src: Object(_tools_img__WEBPACK_IMPORTED_MODULE_6__[/* dealImgUrl */ "a"])(product === null || product === void 0 ? void 0 : (_product$img3 = product.img) === null || _product$img3 === void 0 ? void 0 : (_product$img3$ = _product$img3[0]) === null || _product$img3$ === void 0 ? void 0 : _product$img3$.url),
    alt: ""
  })), __jsx(RightBox, null, __jsx(Title, null, product.name, "(", product.groupRemark, "/", product.groupAmount, product.groupAmountUnitString, "/", product.groupPrecisionString, ")"), showSumOrder && __jsx(OrderTip, null, sumOrderTip, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__[/* ls */ "a"])('销量'), ": ", product.sumOrder), __jsx(MarketPrice, null, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__[/* ls */ "a"])('市场价'), __jsx("span", null, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_8__[/* dealMoney */ "b"])(product.priceMarket))), __jsx(OutPrice, null, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__[/* ls */ "a"])('基准价格'), __jsx("span", null, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_8__[/* dealMoney */ "b"])(product.priceOut))), __jsx(Star, null, (groupQueue === null || groupQueue === void 0 ? void 0 : groupQueue.id) && __jsx("div", null, __jsx(_Box_Box__WEBPACK_IMPORTED_MODULE_20__[/* Space */ "b"], {
    h: 8
  }), [...Array(product.groupPrecision)].map((v, i) => i).map(value => {
    var _groupQueue$sumFillAm;

    return value + 1 > ((_groupQueue$sumFillAm = groupQueue.sumFillAmount) !== null && _groupQueue$sumFillAm !== void 0 ? _groupQueue$sumFillAm : 0) ? __jsx(_material_ui_icons_StarBorderRounded__WEBPACK_IMPORTED_MODULE_2___default.a, {
      key: `clickStar${value}`,
      fontSize: 'small',
      style: {
        color: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_16__["grey"][700]
      }
    }) : __jsx(_material_ui_icons_StarRounded__WEBPACK_IMPORTED_MODULE_1___default.a, {
      key: `clickStar${value}`,
      style: {
        color: '#FDD334'
      },
      fontSize: 'small'
    });
  }))), __jsx(Action, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    variant: 'contained',
    color: 'secondary',
    fullWidth: true,
    onClick: () => {
      router.push(`/groupProduct/[id]`, `/groupProduct/${product.id}`);
    }
  }, __jsx(_material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_3___default.a, null), Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__[/* ls */ "a"])('拼一个')))));
};

/***/ }),

/***/ "q3aC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return selectAddressModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectAddress; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _commonModel_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Nu2o");
/* harmony import */ var _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("U81q");
/* harmony import */ var _tools_dealKey__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("+vfP");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("c+KP");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ss_common_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("4Rmy");
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









const selectAddressModel = Object(_commonModel_dialog__WEBPACK_IMPORTED_MODULE_2__[/* dialogModelFactory */ "a"])('selectAddressModel', {});
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
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_3__[/* useStoreModel */ "b"])(selectAddressModel);
  const {
    state: stateShopCartModel,
    actions: actionsShopCartModel
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_3__[/* useStoreModel */ "b"])(_index__WEBPACK_IMPORTED_MODULE_5__[/* shopCartModel */ "c"]);
  const addressList = stateShopCartModel.dealAddressList(stateShopCartModel);
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Dialog"], {
    open: stateSAM.open,
    onClose: actionsSAM.onClose
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["DialogTitle"], null, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_4__[/* ls */ "a"])('选择地址')), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["DialogContent"], null, addressList.map(v => __jsx(AddressBox, {
    key: `DialogTitleAddressBox_${v.id}`
  }, __jsx("header", null, v.combineAddress), __jsx("footer", null, `${v.name} ${v.contactInformation}`), __jsx("aside", null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Radio"], {
    onChange: () => {
      stateSAM.openResolve(v.id);
      actionsSAM.onClose();
    },
    checked: v.id === stateShopCartModel.form.addressId
  })))), __jsx(Footer, null, stateShopCartModel.form.pickUpType === _ss_common_enum__WEBPACK_IMPORTED_MODULE_8__[/* PickUpTypeEnum */ "h"].Delivery && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    fullWidth: true,
    variant: 'contained',
    color: 'secondary',
    onClick: () => {
      router.push('/me/myAddress/edit/[id]', '/me/myAddress/edit/0');
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_4__[/* ls */ "a"])('添加新地址')))));
};

/***/ }),

/***/ "soTg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setForm; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cBzo");

const setForm = ([path, value], option) => {
  option.setData(Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* fpSetPre */ "h"])(`form.${path}`, value));
};

/***/ }),

/***/ "tLFe":
/***/ (function(module, exports) {

module.exports = require("lodash/set");

/***/ }),

/***/ "vW9U":
/***/ (function(module, exports) {

module.exports = require("cross-fetch/polyfill");

/***/ }),

/***/ "vo3K":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return updateShopCartModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateShopCart; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tools_dealKey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("+vfP");
/* harmony import */ var _commonModel_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Nu2o");
/* harmony import */ var _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("U81q");
/* harmony import */ var _ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("+/yG");
/* harmony import */ var _tools_commonAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("soTg");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








const updateShopCartModel = Object(_ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_5__[/* mergeTwoModel */ "b"])(Object(_commonModel_dialog__WEBPACK_IMPORTED_MODULE_3__[/* dialogModelFactory */ "a"])('UpdateShopCartModel', {}), Object(_ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_5__[/* modelFactory */ "c"])('update', {
  form: {
    num: 1
  }
}, {
  setForm: _tools_commonAction__WEBPACK_IMPORTED_MODULE_6__[/* setForm */ "a"]
}));
const Footer = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div.withConfig({
  displayName: "UpdateShopCart__Footer",
  componentId: "awx6sb-0"
})(["padding-top:8px;text-align:right;"]);
const UpdateShopCart = () => {
  const {
    actions: actionsUpdateShopCartModel,
    state: stateUpdateShopCartModel
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_4__[/* useStoreModel */ "b"])(updateShopCartModel);
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Dialog"], {
    open: stateUpdateShopCartModel.open,
    onClose: actionsUpdateShopCartModel.onClose
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["DialogTitle"], null, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_2__[/* ls */ "a"])('添加数量')), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["DialogContent"], null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["TextField"], {
    type: 'number',
    value: stateUpdateShopCartModel.form.num,
    onChange: event => actionsUpdateShopCartModel.setForm(['num', event.target.value])
  }), __jsx(Footer, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    variant: 'contained',
    color: 'secondary',
    onClick: () => {
      stateUpdateShopCartModel.openResolve({
        num: stateUpdateShopCartModel.form.num
      });
      actionsUpdateShopCartModel.onClose();
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_2__[/* ls */ "a"])('确定')))));
};

/***/ }),

/***/ "yFMe":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/People");

/***/ }),

/***/ "ysgU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getToken; });
/* global localStorage */
const setToken = (token, name = 'token') => localStorage.setItem(name, token);
const getToken = (name = 'token') => localStorage.getItem(name) || '';

/***/ })

/******/ });