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
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
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

/***/ "+vfP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ls; });
const ls = key => key !== null && key !== void 0 ? key : '';

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("WXmX");


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

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "KNus":
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "LBYo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ SigninLabel; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ SigninInput; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ SigninSubButton; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ Register; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./utils/tools/utils.ts
var utils = __webpack_require__("cBzo");

// EXTERNAL MODULE: ./utils/tools/token.ts
var token = __webpack_require__("ysgU");

// EXTERNAL MODULE: ./utils/components/Message/Message.tsx
var Message = __webpack_require__("OO/1");

// EXTERNAL MODULE: ./utils/graphqlTypes/doc/index.ts + 1 modules
var doc = __webpack_require__("i7FU");

// EXTERNAL MODULE: ./utils/ModelAction/modelUtil.ts
var modelUtil = __webpack_require__("+/yG");

// EXTERNAL MODULE: ./utils/tools/dealKey.ts
var dealKey = __webpack_require__("+vfP");

// CONCATENATED MODULE: ./utils/view/register/model.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const registerModel = Object(modelUtil["c" /* modelFactory */])('register', {
  step: 0,
  userForm: {
    name: '',
    password: '',
    confirmPassword: '',
    userInfo: {
      name: '',
      email: '',
      phone: ''
    }
  }
}, {
  setStep: (value, option) => option.setData(Object(utils["f" /* fpMergePre */])({
    step: value
  })),
  setUserForm: ([path, value], option) => {
    option.setData(Object(utils["h" /* fpSetPre */])(`userForm.${path}`, value));
  },
  goNext: (value, option) => {
    var _option$data, _option$data$userForm, _option$data2, _option$data2$userFor, _option$data3, _option$data3$userFor, _option$data4, _option$data4$userFor, _option$data5, _option$data5$userFor;

    if (!((_option$data = option.data) === null || _option$data === void 0 ? void 0 : (_option$data$userForm = _option$data.userForm) === null || _option$data$userForm === void 0 ? void 0 : _option$data$userForm.name) || !((_option$data2 = option.data) === null || _option$data2 === void 0 ? void 0 : (_option$data2$userFor = _option$data2.userForm) === null || _option$data2$userFor === void 0 ? void 0 : _option$data2$userFor.password) || !((_option$data3 = option.data) === null || _option$data3 === void 0 ? void 0 : (_option$data3$userFor = _option$data3.userForm) === null || _option$data3$userFor === void 0 ? void 0 : _option$data3$userFor.confirmPassword)) {
      Object(Message["b" /* showMessage */])(Object(dealKey["a" /* ls */])('请填写表单'));
      return;
    }

    if (((_option$data4 = option.data) === null || _option$data4 === void 0 ? void 0 : (_option$data4$userFor = _option$data4.userForm) === null || _option$data4$userFor === void 0 ? void 0 : _option$data4$userFor.password) !== ((_option$data5 = option.data) === null || _option$data5 === void 0 ? void 0 : (_option$data5$userFor = _option$data5.userForm) === null || _option$data5$userFor === void 0 ? void 0 : _option$data5$userFor.confirmPassword)) {
      Object(Message["b" /* showMessage */])(Object(dealKey["a" /* ls */])('两次密码输入不一致'));
      return;
    }

    option.setData(Object(utils["f" /* fpMergePre */])({
      step: 1
    }));
  },
  submit: async (value, option) => {
    var _option$data$userForm2, _registerUser$user;

    const userInfo = ((_option$data$userForm2 = option.data.userForm) === null || _option$data$userForm2 === void 0 ? void 0 : _option$data$userForm2.userInfo) || {};

    if (!userInfo.phone || !userInfo.email) {
      Object(Message["b" /* showMessage */])(Object(dealKey["a" /* ls */])('请填写表单'));
      return;
    }

    const _option$data$userForm3 = option.data.userForm,
          {
      confirmPassword
    } = _option$data$userForm3,
          params = _objectWithoutProperties(_option$data$userForm3, ["confirmPassword"]);

    const res = await option.mutate(doc["b" /* doc */].registerUser, {
      data: _objectSpread(_objectSpread({}, params), {}, {
        userInfo: _objectSpread(_objectSpread({}, params.userInfo), {}, {
          name: params.name
        })
      })
    });
    const registerUser = res === null || res === void 0 ? void 0 : res.registerUser;

    if (registerUser === null || registerUser === void 0 ? void 0 : (_registerUser$user = registerUser.user) === null || _registerUser$user === void 0 ? void 0 : _registerUser$user.id) {
      Object(Message["b" /* showMessage */])(Object(dealKey["a" /* ls */])('注册成功,即将登录'));
      Object(token["b" /* setToken */])(registerUser.token);
      Object(token["b" /* setToken */])(registerUser.refreshtoken, 'refreshtoken');
      await router_default.a.replace(`/home`, `/home`, {
        shallow: true
      });
    }
  },
  goToSignup: (value, option) => {
    router_default.a.push('/login');
  }
});
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: ./utils/style/common.ts
var common = __webpack_require__("ZtJr");

// EXTERNAL MODULE: ./utils/ModelAction/useStore.ts + 2 modules
var useStore = __webpack_require__("U81q");

// EXTERNAL MODULE: ./utils/components/RegisterHeader/RegisterHeader.tsx
var RegisterHeader = __webpack_require__("EiTa");

// EXTERNAL MODULE: ./utils/components/Box/Box.tsx
var Box = __webpack_require__("cW92");

// CONCATENATED MODULE: ./utils/view/register/index.tsx
var __jsx = external_react_default.a.createElement;









const Tab = external_styled_components_default.a.div.withConfig({
  displayName: "register__Tab",
  componentId: "e5uv1j-0"
})(["font-size:22px;"]);
const Nav = external_styled_components_default.a.div.withConfig({
  displayName: "register__Nav",
  componentId: "e5uv1j-1"
})(["margin:8px 0;display:flex;font-size:12px;"]);
const NavSection = external_styled_components_default()('section').withConfig({
  displayName: "register__NavSection",
  componentId: "e5uv1j-2"
})(["display:flex;flex-basis:0;flex-grow:1;align-items:center;justify-content:center;height:26px;color:", ";background:", " no-repeat;background-size:99% 26px;"], ({
  isAct
}) => isAct ? '#fff' : common["a" /* mpStyle */].red, ({
  isAct
}) => isAct ? 'url("/img/home/back_red.png")' : 'url("/img/home/back_grey.png")');
const SigninLabel = external_styled_components_default.a.div.withConfig({
  displayName: "register__SigninLabel",
  componentId: "e5uv1j-3"
})(["font-size:16px;font-weight:bold;margin-bottom:20px;margin-top:20px;"]);
const SigninInput = external_styled_components_default()(core_["TextField"]).attrs(props => ({
  fullWidth: true
})).withConfig({
  displayName: "register__SigninInput",
  componentId: "e5uv1j-4"
})([""]);
const SigninSubButton = external_styled_components_default()(core_["Button"]).withConfig({
  displayName: "register__SigninSubButton",
  componentId: "e5uv1j-5"
})(["&&&{margin-top:20px;}"]);
function Register() {
  var _rState$userForm$user, _rState$userForm$user2;

  const {
    state: rState,
    actions: rActions
  } = Object(useStore["b" /* useStoreModel */])(registerModel);
  return __jsx(Box["a" /* Box */], null, __jsx(RegisterHeader["a" /* RegisterHeader */], null), __jsx(Tab, null, Object(dealKey["a" /* ls */])('注册')), __jsx(Nav, null, __jsx(NavSection, {
    isAct: rState.step >= 0
  }, Object(dealKey["a" /* ls */])('填写登录信息')), __jsx(NavSection, {
    isAct: rState.step >= 1
  }, Object(dealKey["a" /* ls */])('填写联系信息,完成注册'))), __jsx("section", {
    style: {
      height: '10px'
    }
  }), rState.step === 0 && __jsx(external_react_default.a.Fragment, null, __jsx(SigninLabel, null, Object(dealKey["a" /* ls */])('新建账号')), __jsx(SigninInput, {
    value: rState.userForm.name,
    onChange: event => rActions.setUserForm(['name', event.target.value])
  }), __jsx(SigninLabel, null, Object(dealKey["a" /* ls */])('设置密码')), __jsx(SigninInput, {
    type: "password",
    value: rState.userForm.password,
    onChange: event => rActions.setUserForm(['password', event.target.value])
  }), __jsx(SigninLabel, null, Object(dealKey["a" /* ls */])('确认密码')), __jsx(SigninInput, {
    type: "password",
    value: rState.userForm.confirmPassword,
    onChange: event => rActions.setUserForm(['confirmPassword', event.target.value])
  }), __jsx(SigninSubButton, {
    size: 'large',
    color: 'secondary',
    variant: 'contained',
    fullWidth: true,
    onClick: () => {
      rActions.goNext();
    }
  }, "\u4E0B\u4E00\u6B65"), __jsx(core_["Button"], {
    style: {
      marginTop: '10px'
    },
    size: 'small',
    color: 'secondary',
    variant: 'text',
    onClick: () => {
      rActions.goToSignup();
    }
  }, "\u8D26\u53F7\u5BC6\u7801\u767B\u5F55")), rState.step === 1 && __jsx(external_react_default.a.Fragment, null, __jsx(SigninLabel, null, Object(dealKey["a" /* ls */])('手机号码')), __jsx(SigninInput, {
    value: (_rState$userForm$user = rState.userForm.userInfo) === null || _rState$userForm$user === void 0 ? void 0 : _rState$userForm$user.phone,
    onChange: event => rActions.setUserForm(['userInfo.phone', event.target.value])
  }), __jsx(SigninLabel, null, Object(dealKey["a" /* ls */])('邮箱地址')), __jsx(SigninInput, {
    value: (_rState$userForm$user2 = rState.userForm.userInfo) === null || _rState$userForm$user2 === void 0 ? void 0 : _rState$userForm$user2.email,
    onChange: event => rActions.setUserForm(['userInfo.email', event.target.value])
  }), __jsx(SigninSubButton, {
    size: 'large',
    color: 'secondary',
    variant: 'contained',
    fullWidth: true,
    onClick: () => {
      rActions.submit();
    }
  }, Object(dealKey["a" /* ls */])('确认并登陆')), __jsx(core_["Button"], {
    style: {
      marginTop: '10px'
    },
    size: 'small',
    color: 'secondary',
    variant: 'text',
    onClick: () => {
      rActions.goToSignup();
    }
  }, "\u8D26\u53F7\u5BC6\u7801\u767B\u5F55")));
}

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

/***/ "WXmX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_view_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("LBYo");

/* harmony default export */ __webpack_exports__["default"] = (_utils_view_register__WEBPACK_IMPORTED_MODULE_0__[/* default */ "d"]);

/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "YvTO":
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

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

/***/ "tLFe":
/***/ (function(module, exports) {

module.exports = require("lodash/set");

/***/ }),

/***/ "vW9U":
/***/ (function(module, exports) {

module.exports = require("cross-fetch/polyfill");

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