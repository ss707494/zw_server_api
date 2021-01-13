exports.ids = [1];
exports.modules = {

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
  actions: {},
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

/***/ "+CC5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HomeTabsModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeTabs; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CategorySelection_CategorySelection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("PpHw");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("+/yG");
/* harmony import */ var _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("U81q");
/* harmony import */ var _ss_common_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("4Rmy");
/* harmony import */ var _tools_dealKey__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("+vfP");
/* harmony import */ var _PromotionFlashSale_PromotionFlashSale__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("ytnY");
/* harmony import */ var _ThemeSelection_ThemeSelection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("KTXQ");
/* harmony import */ var _appModule__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("LIvt");
/* harmony import */ var _tools_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("cBzo");
/* harmony import */ var _graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("i7FU");
/* harmony import */ var _SalesRank_SalesRank__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("wNMP");
/* harmony import */ var _components_ProductItem_UpdateShopCart__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("vo3K");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("YLtl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _LineRanking_LineRanking__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("YUMn");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_17__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


















const HomeTabsModel = Object(_ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_4__[/* modelFactory */ "c"])('HomeTabs', {
  homeType: '',
  appModuleConfig: {}
}, {
  setHomeType: (value, option) => {
    option.setData(Object(_tools_utils__WEBPACK_IMPORTED_MODULE_11__[/* fpMergePre */ "g"])({
      homeType: value
    }));
  },
  onChange: ([name, type], option) => {
    // @ts-ignore
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push(`/m/${type}/[appModule]`, `/m/${type}/${name}`, {
      shallow: true
    }); // option.setData(fpMergePre({
    //   value,
    // }))
  },
  getData: async (value, option) => {
    var _appModuleConfig$getD, _appModuleConfig$getD2;

    const appModuleConfig = await option.query(_graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_12__[/* getDataConfig */ "c"], {
      data: {
        type: _ss_common_enum__WEBPACK_IMPORTED_MODULE_6__[/* DictTypeEnum */ "e"].AppModule
      }
    }, {});
    option.setData(Object(_tools_utils__WEBPACK_IMPORTED_MODULE_11__[/* fpMergePre */ "g"])({
      appModuleConfig: (_appModuleConfig$getD = appModuleConfig === null || appModuleConfig === void 0 ? void 0 : (_appModuleConfig$getD2 = appModuleConfig.getDataConfig) === null || _appModuleConfig$getD2 === void 0 ? void 0 : _appModuleConfig$getD2.value) !== null && _appModuleConfig$getD !== void 0 ? _appModuleConfig$getD : {}
    }));
  }
});
const Box = styled_components__WEBPACK_IMPORTED_MODULE_17___default.a.div.withConfig({
  displayName: "Tabs__Box",
  componentId: "sc-129boo8-0"
})(["margin-top:10px;&&&{.MuiButtonBase-root{padding:0;}}"]);
const HomeTabs = ({
  homeType
}) => {
  var _router$query$appModu;

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const {
    state: homeTabsState,
    actions: homeTabsActions
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_5__[/* useStoreModel */ "b"])(HomeTabsModel);
  return __jsx(Box, null, !Object(lodash__WEBPACK_IMPORTED_MODULE_15__["isEmpty"])(homeTabsState === null || homeTabsState === void 0 ? void 0 : homeTabsState.appModuleConfig) && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Tabs"], {
    variant: 'fullWidth',
    value: (_router$query$appModu = router.query.appModule) !== null && _router$query$appModu !== void 0 ? _router$query$appModu : _ss_common_enum__WEBPACK_IMPORTED_MODULE_6__[/* AppModuleTypeEnum */ "b"].categorySelection,
    onChange: (event, value) => homeTabsActions.onChange([value, homeType])
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Tab"], {
    value: _ss_common_enum__WEBPACK_IMPORTED_MODULE_6__[/* AppModuleTypeEnum */ "b"].categorySelection,
    label: Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_7__[/* ll */ "a"])(homeType === _appModule__WEBPACK_IMPORTED_MODULE_10__[/* HomeType */ "b"].group ? '分类拼团' : '分类选择')
  }), (homeType === _appModule__WEBPACK_IMPORTED_MODULE_10__[/* HomeType */ "b"].home && [[_ss_common_enum__WEBPACK_IMPORTED_MODULE_6__[/* AppModuleTypeEnum */ "b"].limitTime, '限时选购'], [_ss_common_enum__WEBPACK_IMPORTED_MODULE_6__[/* AppModuleTypeEnum */ "b"].salesRank, '热销排行'], [_ss_common_enum__WEBPACK_IMPORTED_MODULE_6__[/* AppModuleTypeEnum */ "b"].themeSelection, '主题甄选'], [_ss_common_enum__WEBPACK_IMPORTED_MODULE_6__[/* AppModuleTypeEnum */ "b"].mayLike, '猜你喜欢']] || homeType === _appModule__WEBPACK_IMPORTED_MODULE_10__[/* HomeType */ "b"].group && [[_ss_common_enum__WEBPACK_IMPORTED_MODULE_6__[/* AppModuleTypeEnum */ "b"].salesRank, '热门排行'], [_ss_common_enum__WEBPACK_IMPORTED_MODULE_6__[/* AppModuleTypeEnum */ "b"].lineRanking, '冲线排行']] || []).filter(v => {
    var _homeTabsState$appMod;

    return homeTabsState === null || homeTabsState === void 0 ? void 0 : (_homeTabsState$appMod = homeTabsState.appModuleConfig) === null || _homeTabsState$appMod === void 0 ? void 0 : _homeTabsState$appMod[v[0]];
  }).map(v => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Tab"], {
    key: `AppModuleTypeEnum_${v[0]}`,
    value: v[0],
    label: Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_7__[/* ll */ "a"])(v[1])
  }))), __jsx("main", {
    style: {
      marginTop: '10px'
    }
  }, router.query.appModule === _ss_common_enum__WEBPACK_IMPORTED_MODULE_6__[/* AppModuleTypeEnum */ "b"].categorySelection && __jsx(_CategorySelection_CategorySelection__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null), router.query.appModule === _ss_common_enum__WEBPACK_IMPORTED_MODULE_6__[/* AppModuleTypeEnum */ "b"].limitTime && __jsx(_PromotionFlashSale_PromotionFlashSale__WEBPACK_IMPORTED_MODULE_8__[/* PromotionFlashSale */ "a"], null), router.query.appModule === _ss_common_enum__WEBPACK_IMPORTED_MODULE_6__[/* AppModuleTypeEnum */ "b"].themeSelection && __jsx(_ThemeSelection_ThemeSelection__WEBPACK_IMPORTED_MODULE_9__[/* ThemeSelection */ "a"], null), router.query.appModule === _ss_common_enum__WEBPACK_IMPORTED_MODULE_6__[/* AppModuleTypeEnum */ "b"].salesRank && __jsx(_SalesRank_SalesRank__WEBPACK_IMPORTED_MODULE_13__[/* SalesRank */ "a"], null), router.query.appModule === _ss_common_enum__WEBPACK_IMPORTED_MODULE_6__[/* AppModuleTypeEnum */ "b"].lineRanking && __jsx(_LineRanking_LineRanking__WEBPACK_IMPORTED_MODULE_16__[/* LineRanking */ "a"], null)), __jsx(_components_ProductItem_UpdateShopCart__WEBPACK_IMPORTED_MODULE_14__[/* UpdateShopCart */ "a"], null));
};

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ll; });
const ll = key => key !== null && key !== void 0 ? key : '';

/***/ }),

/***/ "1gZt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ HeaderTabModel; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ HeaderTab; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./utils/tools/dealKey.ts
var dealKey = __webpack_require__("+vfP");

// EXTERNAL MODULE: ./utils/components/Box/Box.tsx
var Box = __webpack_require__("cW92");

// EXTERNAL MODULE: ./utils/style/common.ts
var common = __webpack_require__("ZtJr");

// EXTERNAL MODULE: ./utils/view/m/home/components/CategorySelection/CategorySelection.tsx + 1 modules
var CategorySelection = __webpack_require__("PpHw");

// EXTERNAL MODULE: ./utils/ModelAction/useStore.ts + 2 modules
var useStore = __webpack_require__("U81q");

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: external "@material-ui/icons/KeyboardArrowRight"
var KeyboardArrowRight_ = __webpack_require__("nd8x");
var KeyboardArrowRight_default = /*#__PURE__*/__webpack_require__.n(KeyboardArrowRight_);

// EXTERNAL MODULE: ./utils/view/m/category/[id].tsx + 1 modules
var _id_ = __webpack_require__("SvrD");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./utils/ModelAction/modelUtil.ts
var modelUtil = __webpack_require__("+/yG");

// EXTERNAL MODULE: ./utils/tools/utils.ts
var utils = __webpack_require__("cBzo");

// EXTERNAL MODULE: ./utils/view/m/home/components/Tabs/Tabs.tsx
var Tabs = __webpack_require__("+CC5");

// CONCATENATED MODULE: ./utils/view/pc/home/components/categorySelection.tsx
var __jsx = external_react_default.a.createElement;













const CategorySelectionModel = Object(modelUtil["c" /* modelFactory */])('CategorySelectionModel', {
  isShow: false
}, {
  switchIsShow: (value, option) => option.setData(Object(utils["g" /* fpMergePre */])({
    isShow: value
  }))
});
const categorySelection_Box = external_styled_components_default.a.div.withConfig({
  displayName: "categorySelection__Box",
  componentId: "zrawnm-0"
})(["display:grid;grid-template-columns:repeat(3,1fr);z-index:4;"]);
const Line = external_styled_components_default.a.div.withConfig({
  displayName: "categorySelection__Line",
  componentId: "zrawnm-1"
})(["display:grid;grid-auto-rows:40px;font-size:18px;"]);
const LinkButton = external_styled_components_default()(core_["ButtonBase"]).withConfig({
  displayName: "categorySelection__LinkButton",
  componentId: "zrawnm-2"
})(["&&&{justify-content:start;> main{flex-grow:1;text-align:left;}", "}"], prop => prop.isact && `
      background: #FEEBEA;
      color: ${common["b" /* mpStyle */].red};
    `);
const Mask = external_styled_components_default.a.div.withConfig({
  displayName: "categorySelection__Mask",
  componentId: "zrawnm-3"
})(["position:fixed;top:0;left:0;right:0;bottom:0;"]);
const categorySelection_CategorySelection = ({
  className
}) => {
  var _stateHomeCategorySel, _stateCategoryPageMod, _stateCategoryPageMod2;

  const router = Object(router_["useRouter"])();
  const {
    actions: actionsHomeCategorySelectionModel,
    state: stateHomeCategorySelectionModel
  } = Object(useStore["b" /* useStoreModel */])(CategorySelection["b" /* homeCategorySelectionModel */]);
  const {
    actions: actionsCategoryPageModel,
    state: stateCategoryPageModel
  } = Object(useStore["b" /* useStoreModel */])(_id_["b" /* CategoryPageModel */]);
  const {
    actions: actionsCategoryPageModel3,
    state: stateCategoryPageModel3
  } = Object(useStore["b" /* useStoreModel */])(_id_["b" /* CategoryPageModel */], 'CategoryPageModel3');
  const {
    actions: actionsCategoryItemModel
  } = Object(useStore["b" /* useStoreModel */])(_id_["c" /* categoryItemModel */]);
  const {
    actions: actionsCategorySelectionModel,
    state: stateCategorySelectionModel
  } = Object(useStore["b" /* useStoreModel */])(CategorySelectionModel);
  const {
    state: stateHomeTabs
  } = Object(useStore["b" /* useStoreModel */])(Tabs["b" /* HomeTabsModel */]);
  Object(external_react_["useEffect"])(() => {
    if (stateCategorySelectionModel.isShow) {
      actionsHomeCategorySelectionModel.getList();
    }
  }, [actionsHomeCategorySelectionModel, stateCategorySelectionModel.isShow]);
  return __jsx(external_react_default.a.Fragment, null, stateCategorySelectionModel.isShow && __jsx(Mask, {
    onClick: () => actionsCategorySelectionModel.switchIsShow(false)
  }), __jsx(core_["Grow"], {
    in: stateCategorySelectionModel.isShow
  }, __jsx(categorySelection_Box, {
    className: className
  }, __jsx(Line, null, stateHomeCategorySelectionModel === null || stateHomeCategorySelectionModel === void 0 ? void 0 : (_stateHomeCategorySel = stateHomeCategorySelectionModel.listData) === null || _stateHomeCategorySel === void 0 ? void 0 : _stateHomeCategorySel.map(value => __jsx(LinkButton, {
    key: `stateHomeCategorySelectionModel?.listData${value.id}`,
    onClick: () => {
      actionsHomeCategorySelectionModel.changeActId(value.id);
      actionsCategoryPageModel.getProductList({
        categoryItemInput: {
          id: value.id
        },
        productItemInput: {
          isGroup: 0
        }
      });
      actionsCategoryItemModel.getCategory({
        id: value.id
      });
    },
    isact: value.id === stateHomeCategorySelectionModel.actId ? 1 : 0
  }, __jsx(Box["b" /* Space */], {
    w: 16
  }), __jsx("main", null, value.name), __jsx(KeyboardArrowRight_default.a, null), __jsx(Box["b" /* Space */], {
    w: 8
  })))), __jsx(Line, null, stateCategoryPageModel === null || stateCategoryPageModel === void 0 ? void 0 : (_stateCategoryPageMod = stateCategoryPageModel.categoryList) === null || _stateCategoryPageMod === void 0 ? void 0 : _stateCategoryPageMod.map(value => __jsx(LinkButton, {
    key: `stateCategoryPageModel?.categoryList${value.id}`,
    onClick: () => {
      actionsCategoryItemModel.getCategory({
        id: value.id
      });
      actionsCategoryPageModel.changeActCatId(value.id);
      actionsCategoryPageModel3.getProductList({
        categoryItemInput: {
          id: value.id
        },
        productItemInput: {
          isGroup: 0
        }
      });
    },
    isact: stateCategoryPageModel.actCatId === value.id ? 1 : 0
  }, __jsx(Box["b" /* Space */], {
    w: 16
  }), __jsx("main", null, value.name), __jsx(Box["b" /* Space */], {
    w: 8
  })))), actionsCategoryItemModel.calcCatLevel() >= 2 && __jsx(Line, null, stateCategoryPageModel3 === null || stateCategoryPageModel3 === void 0 ? void 0 : (_stateCategoryPageMod2 = stateCategoryPageModel3.categoryList) === null || _stateCategoryPageMod2 === void 0 ? void 0 : _stateCategoryPageMod2.map(value => __jsx(LinkButton, {
    key: `stateCategoryPageModel3?.categoryList${value.id}`,
    onClick: async () => {
      await router.push(`/pc/category/[id]?homeType=${stateHomeTabs.homeType}`, `/pc/category/${value.id}?homeType=${stateHomeTabs.homeType}`);
      actionsCategorySelectionModel.switchIsShow(false);
    },
    isact: stateCategoryPageModel3.actCatId === value.id ? 1 : 0
  }, __jsx(Box["b" /* Space */], {
    w: 16
  }), __jsx("main", null, value.name), __jsx(Box["b" /* Space */], {
    w: 8
  }))))))) || __jsx(external_react_default.a.Fragment, null);
};
// EXTERNAL MODULE: external "@material-ui/icons/KeyboardArrowDown"
var KeyboardArrowDown_ = __webpack_require__("8k/1");
var KeyboardArrowDown_default = /*#__PURE__*/__webpack_require__.n(KeyboardArrowDown_);

// CONCATENATED MODULE: ./utils/view/pc/home/components/headerTab.tsx
var headerTab_jsx = external_react_default.a.createElement;











const HeaderTabModel = Object(modelUtil["c" /* modelFactory */])('HeaderTabModel', {
  isCategory: false
}, {
  switchIsCategory: async (value, option) => {
    option.setData(Object(utils["g" /* fpMergePre */])({
      isCategory: value
    }));
  }
});
const headerTab_Box = external_styled_components_default.a.div.withConfig({
  displayName: "headerTab__Box",
  componentId: "sc-4pqp2k-0"
})(["display:flex;"]);
const CategorySelectionBox = external_styled_components_default()(categorySelection_CategorySelection).withConfig({
  displayName: "headerTab__CategorySelectionBox",
  componentId: "sc-4pqp2k-1"
})([""]);
const CategoryBox = external_styled_components_default.a.div.withConfig({
  displayName: "headerTab__CategoryBox",
  componentId: "sc-4pqp2k-2"
})(["position:relative;&&&{", ";.MuiButton-label{", ";color:", ";", ";}}", "{position:absolute;background:white;top:40px;width:800px;height:25vw;z-index:9;box-shadow:", ";}"], common["b" /* mpStyle */].fontType.xxl, common["b" /* mpStyle */].fontType.l, common["b" /* mpStyle */].black, prop => prop.isAct ? `
        color: ${common["b" /* mpStyle */].red};
      ` : '', CategorySelectionBox, common["b" /* mpStyle */].shadow['1']);
const PointBox = external_styled_components_default.a.a.withConfig({
  displayName: "headerTab__PointBox",
  componentId: "sc-4pqp2k-3"
})(["", ";color:", ";text-decoration:none;height:43px;display:grid;align-items:center;"], common["b" /* mpStyle */].fontType.l, common["b" /* mpStyle */].black);
const spaceNum = 60;
const HeaderTab = () => {
  const {
    state: stateHeaderTabModel
  } = Object(useStore["b" /* useStoreModel */])(HeaderTabModel);
  const {
    actions: actionsCategorySelectionModel,
    state: stateCategorySelectionModel
  } = Object(useStore["b" /* useStoreModel */])(CategorySelectionModel);
  return headerTab_jsx(headerTab_Box, null, headerTab_jsx(CategoryBox, {
    isAct: stateHeaderTabModel.isCategory || stateCategorySelectionModel.isShow ? 1 : 0
  }, headerTab_jsx(core_["Button"], {
    onClick: () => {
      actionsCategorySelectionModel.switchIsShow(true);
    }
  }, Object(dealKey["a" /* ll */])('分类选择'), headerTab_jsx(KeyboardArrowDown_default.a, {
    style: stateCategorySelectionModel.isShow ? {
      transform: 'rotate(180deg)'
    } : {}
  })), headerTab_jsx(CategorySelectionBox, null)), headerTab_jsx(Box["b" /* Space */], {
    w: spaceNum
  }), [['限时抢购', 'LimitTime'], ['热门排行', 'SalesRank'], ['主题甄选', 'ThemeSelection']].map(v => headerTab_jsx(external_react_default.a.Fragment, {
    key: `PointBox${v[0]}`
  }, headerTab_jsx(PointBox, {
    href: `/pc/home#${v[1]}`
  }, Object(dealKey["a" /* ll */])(v[0])), headerTab_jsx(Box["b" /* Space */], {
    w: spaceNum
  }))));
};

/***/ }),

/***/ "4Rmy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return PromoCodeTypeEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return DiscountTypeEnum; });
/* unused harmony export SS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return DiscountConditionEnum; });
/* unused harmony export ProductSupplement */
/* unused harmony export ProductSupplementString */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return OrderState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return orderStateToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return DictTypeEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return RelatedObjTypeEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppFootBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AppModuleTypeEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CategoryRootName; });
/* unused harmony export orderStateKeys */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return ProvinceData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return getPickUpTypeName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return PickUpTypeEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return SaleRankTypeEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CreditAddressInputTypeEnum; });
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
}; // 信用卡地址输入方式

const CreditAddressInputTypeEnum = {
  Select: 'Select',
  Input: 'Input'
};

/***/ }),

/***/ "4gpI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ dealGroupNumbers; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* binding */ groupProductModel; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ YellowStar; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ GroupSubmit; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ GroupProduct; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/icons/StarRounded"
var StarRounded_ = __webpack_require__("3F1g");
var StarRounded_default = /*#__PURE__*/__webpack_require__.n(StarRounded_);

// EXTERNAL MODULE: external "@material-ui/icons/StarBorderRounded"
var StarBorderRounded_ = __webpack_require__("n+Zn");
var StarBorderRounded_default = /*#__PURE__*/__webpack_require__.n(StarBorderRounded_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./utils/ModelAction/modelUtil.ts
var modelUtil = __webpack_require__("+/yG");

// EXTERNAL MODULE: ./utils/graphqlTypes/doc/index.ts + 1 modules
var doc = __webpack_require__("i7FU");

// EXTERNAL MODULE: ./utils/ModelAction/useStore.ts + 2 modules
var useStore = __webpack_require__("U81q");

// EXTERNAL MODULE: ./utils/tools/utils.ts
var utils = __webpack_require__("cBzo");

// EXTERNAL MODULE: ./utils/components/Swipe/Swipe.tsx
var Swipe = __webpack_require__("K0AU");

// EXTERNAL MODULE: ./utils/components/HeaderTitle/HeaderTitle.tsx
var HeaderTitle = __webpack_require__("B42p");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./utils/tools/dealKey.ts
var dealKey = __webpack_require__("+vfP");

// EXTERNAL MODULE: ./utils/style/common.ts
var common = __webpack_require__("ZtJr");

// EXTERNAL MODULE: external "@material-ui/core/colors"
var colors_ = __webpack_require__("+FwM");

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: ./utils/view/m/cart/CartProduct.tsx
var CartProduct = __webpack_require__("6saQ");

// EXTERNAL MODULE: ./utils/tools/img.ts
var img = __webpack_require__("Oj7+");

// EXTERNAL MODULE: ./utils/components/ProductItem/ProductItem.tsx
var ProductItem = __webpack_require__("oxxF");

// EXTERNAL MODULE: ./utils/components/Box/Box.tsx
var Box = __webpack_require__("cW92");

// EXTERNAL MODULE: ./utils/ss_common/enum.ts
var ss_common_enum = __webpack_require__("4Rmy");

// EXTERNAL MODULE: external "@material-ui/icons/ChevronRight"
var ChevronRight_ = __webpack_require__("cvHV");
var ChevronRight_default = /*#__PURE__*/__webpack_require__.n(ChevronRight_);

// EXTERNAL MODULE: ./utils/view/m/cart/orderPage.tsx
var orderPage = __webpack_require__("odey");

// EXTERNAL MODULE: ./utils/view/m/cart/components/SelectAddress.tsx
var SelectAddress = __webpack_require__("TcOc");

// EXTERNAL MODULE: ./utils/view/m/cart/components/SelectCard.tsx
var SelectCard = __webpack_require__("pHDM");

// EXTERNAL MODULE: ./utils/components/ButtonLoad/ButtonLoad.tsx
var ButtonLoad = __webpack_require__("+kHn");

// EXTERNAL MODULE: ./utils/components/Message/Message.tsx
var Message = __webpack_require__("OO/1");

// CONCATENATED MODULE: ./utils/view/m/groupProduct/groupOrderPage.tsx
var __jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }























const groupOrderPageModel = Object(modelUtil["c" /* modelFactory */])('orderPageModel', {
  show: false
}, {
  open: (value, option) => {
    option.setData(Object(utils["g" /* fpMergePre */])({
      show: true
    }));
  },
  close: (value, option) => {
    option.setData(Object(utils["g" /* fpMergePre */])({
      show: false
    }));
  }
});
const OrderPageBox = external_styled_components_default.a.div.withConfig({
  displayName: "groupOrderPage__OrderPageBox",
  componentId: "euzz55-0"
})(["position:fixed;top:0;bottom:0;left:0;right:0;background:white;overflow-y:auto;> footer{position:fixed;bottom:0;box-sizing:border-box;box-shadow:", ";width:100vw;text-align:right;}"], common["b" /* mpStyle */].shadow['1']);
const GroupOrderPage = () => {
  var _product$img, _product$img$, _stateShopCartModel$u;

  const router = Object(router_["useRouter"])();
  const {
    state: stateOrderPageModel,
    actions: actionsOrderPageModel
  } = Object(useStore["b" /* useStoreModel */])(groupOrderPageModel);
  const {
    actions: actionsSAM
  } = Object(useStore["b" /* useStoreModel */])(SelectAddress["b" /* selectAddressModel */]);
  const {
    actions: actionsSelectCard
  } = Object(useStore["b" /* useStoreModel */])(SelectCard["b" /* selectCardModel */]);
  const {
    stateShopCartModel,
    actionsShopCartModel,
    addressData,
    cardData,
    productTotal,
    transportationCosts,
    actuallyPaid,
    generateCoin,
    stateGroupProduct,
    actionsGroupProduct,
    product
  } = Object(orderPage["g" /* useOrderPageHooks */])();
  Object(external_react_["useEffect"])(() => {
    if (stateOrderPageModel.show) {
      window.history.pushState(null, '', document.URL);
      window.addEventListener('popstate', () => {
        // 监听到返回事件，注意，只有触发了返回才会执行这个方法
        actionsOrderPageModel.close();
      }, false);
    }

    return () => {
      window.removeEventListener('popstate', () => {
        actionsOrderPageModel.close();
      });
    };
  }, [actionsOrderPageModel, stateOrderPageModel.show]);
  return stateOrderPageModel.show && __jsx(external_react_default.a.Fragment, null, __jsx(OrderPageBox, null, __jsx(HeaderTitle["a" /* HeaderTitle */], {
    title: '订单支付',
    backCall: () => {
      actionsOrderPageModel.close();
      return true;
    }
  }), __jsx(CartProduct["b" /* ShopCartProductBox */], {
    style: {
      padding: '20px'
    }
  }, __jsx("img", {
    src: Object(img["a" /* dealImgUrl */])(product === null || product === void 0 ? void 0 : (_product$img = product.img) === null || _product$img === void 0 ? void 0 : (_product$img$ = _product$img[0]) === null || _product$img$ === void 0 ? void 0 : _product$img$.url),
    alt: ""
  }), __jsx("main", null, product === null || product === void 0 ? void 0 : product.name, product === null || product === void 0 ? void 0 : product.weight, product === null || product === void 0 ? void 0 : product.unit), __jsx("section", null, product === null || product === void 0 ? void 0 : product.remark), __jsx("footer", null, __jsx(ProductItem["d" /* ProductPrice */], {
    priceOutTip: Object(dealKey["a" /* ll */])('基准价'),
    product: product
  }), __jsx("span", null, dealGroupNumbers(product) * stateGroupProduct.selectNum, product.groupAmountUnitString, "/", stateGroupProduct.selectNum, Object(dealKey["a" /* ll */])('份')))), __jsx(core_["TextField"], {
    style: {
      margin: '16px',
      width: 'calc(100vw - 32px)'
    },
    fullWidth: true,
    label: Object(dealKey["a" /* ll */])('运送方式'),
    select: true,
    value: stateShopCartModel.form.pickUpType,
    onChange: event => {
      actionsShopCartModel.setForm(['pickUpType', event.target.value]);
      actionsShopCartModel.setForm(['addressId', stateShopCartModel.initAddressId(Object(utils["f" /* fpMerge */])(stateShopCartModel, {
        form: {
          pickUpType: event.target.value
        }
      }))]);
    }
  }, __jsx(core_["MenuItem"], {
    value: ss_common_enum["i" /* PickUpTypeEnum */].Self
  }, Object(dealKey["a" /* ll */])(Object(ss_common_enum["n" /* getPickUpTypeName */])(ss_common_enum["i" /* PickUpTypeEnum */].Self))), __jsx(core_["MenuItem"], {
    value: ss_common_enum["i" /* PickUpTypeEnum */].Delivery
  }, Object(dealKey["a" /* ll */])(Object(ss_common_enum["n" /* getPickUpTypeName */])(ss_common_enum["i" /* PickUpTypeEnum */].Delivery)))), __jsx(orderPage["a" /* AddressBox */], null, __jsx("main", null, __jsx("header", null, `${addressData.combineAddress}`), __jsx("footer", null, `${addressData.name} ${addressData.contactInformation}`)), __jsx("aside", null, __jsx(core_["IconButton"], {
    onClick: async () => {
      const res = await actionsSAM.openClick();

      if (res) {
        actionsShopCartModel.setForm(['addressId', res]);
      }
    }
  }, __jsx(ChevronRight_default.a, null)))), __jsx(orderPage["e" /* ShopTitle */], null, __jsx(Box["b" /* Space */], {
    w: 20
  }), Object(dealKey["a" /* ll */])('付款方式')), __jsx(orderPage["b" /* CardBox */], null, __jsx("header", null, cardData.name), __jsx("footer", null, cardData.number), __jsx("aside", null, __jsx(core_["IconButton"], {
    onClick: async () => {
      const res = await actionsSelectCard.openClick();

      if (res) {
        actionsShopCartModel.setForm(['paymentMethodCardId', res]);
      }
    }
  }, __jsx(ChevronRight_default.a, null)))), __jsx(SelectAddress["a" /* SelectAddress */], null), __jsx(SelectCard["a" /* SelectCard */], null), __jsx(orderPage["e" /* ShopTitle */], null, __jsx(Box["b" /* Space */], {
    w: 20
  }), Object(dealKey["a" /* ll */])('使用达人币'), __jsx(Box["b" /* Space */], {
    w: 16
  }), __jsx("footer", null, Object(dealKey["a" /* ll */])('当月可用余额'), Object(utils["c" /* dealMoney */])(stateShopCartModel.user.orderCoinCurrentMonth))), __jsx("div", null, __jsx(Box["b" /* Space */], {
    w: 20
  }), __jsx(core_["TextField"], {
    style: {
      marginTop: '8px',
      marginBottom: '24px'
    },
    label: Object(dealKey["a" /* ll */])(''),
    value: stateShopCartModel.form.deductCoin,
    onChange: e => {
      actionsShopCartModel.setForm(['deductCoin', e.target.value]);
    }
  })), __jsx(orderPage["f" /* ShopTotal */], null, __jsx("header", null, Object(dealKey["a" /* ll */])('购物车总计')), __jsx("footer", null, Object(utils["c" /* dealMoney */])(productTotal))), __jsx(orderPage["f" /* ShopTotal */], null, __jsx("header", null, Object(dealKey["a" /* ll */])('份数折扣')), __jsx("footer", null, stateGroupProduct.numDiscount)), __jsx(orderPage["f" /* ShopTotal */], null, __jsx("header", null, Object(dealKey["a" /* ll */])('成团折上折')), __jsx("footer", null, stateGroupProduct.groupDiscount)), transportationCosts > 0 && __jsx(orderPage["f" /* ShopTotal */], null, __jsx("header", null, Object(dealKey["a" /* ll */])('运费')), __jsx("footer", null, Object(utils["c" /* dealMoney */])(transportationCosts))), __jsx(orderPage["f" /* ShopTotal */], null, __jsx("header", null, Object(dealKey["a" /* ll */])('达人币抵扣')), __jsx("footer", null, Object(utils["c" /* dealMoney */])(stateShopCartModel.form.deductCoin, '-'))), __jsx(orderPage["f" /* ShopTotal */], {
    style: {
      fontSize: '18px'
    }
  }, __jsx("header", null, Object(dealKey["a" /* ll */])('订单总额')), __jsx("footer", null, Object(utils["c" /* dealMoney */])(actuallyPaid))), __jsx(Box["b" /* Space */], {
    h: 120
  }), __jsx(orderPage["c" /* FooterFit */], null, __jsx("header", null, Object(dealKey["a" /* ll */])('本次订单'), __jsx("span", null, Object(dealKey["a" /* ll */])((_stateShopCartModel$u = stateShopCartModel.userLevelList.find(v => {
    var _stateShopCartModel$u2;

    return v.code === ((_stateShopCartModel$u2 = stateShopCartModel.user.userInfo) === null || _stateShopCartModel$u2 === void 0 ? void 0 : _stateShopCartModel$u2.userLevel);
  })) === null || _stateShopCartModel$u === void 0 ? void 0 : _stateShopCartModel$u.name))), __jsx("footer", null, Object(dealKey["a" /* ll */])('将获得下月使用达人币 '), __jsx("span", null, Object(utils["c" /* dealMoney */])(generateCoin))), __jsx("aside", null, __jsx(ButtonLoad["a" /* ButtonLoad */], {
    variant: 'contained',
    color: 'secondary',
    onClick: async () => {
      var _stateShopCartModel$u3, _stateShopCartModel$u4, _res$saveGroupOrder;

      if (Object(utils["b" /* dealMaybeNumber */])((_stateShopCartModel$u3 = stateShopCartModel.user) === null || _stateShopCartModel$u3 === void 0 ? void 0 : _stateShopCartModel$u3.orderCoinCurrentMonth) < Object(utils["b" /* dealMaybeNumber */])(stateShopCartModel.form.deductCoin)) {
        Object(Message["b" /* showMessage */])(Object(dealKey["a" /* ll */])('达人币余额不足'));
        return;
      }

      const res = await actionsGroupProduct.submit({
        orderInfoItemInput: _objectSpread(_objectSpread({}, stateShopCartModel.form), {}, {
          generateCoin,
          actuallyPaid,
          transportationCosts,
          subtotal: productTotal,
          currentUserLevel: (_stateShopCartModel$u4 = stateShopCartModel.user.userInfo) === null || _stateShopCartModel$u4 === void 0 ? void 0 : _stateShopCartModel$u4.userLevel,
          rOrderProduct: [{
            count: stateGroupProduct.selectNum,
            productId: product === null || product === void 0 ? void 0 : product.id,
            product
          }]
        })
      });

      if (res === null || res === void 0 ? void 0 : (_res$saveGroupOrder = res.saveGroupOrder) === null || _res$saveGroupOrder === void 0 ? void 0 : _res$saveGroupOrder.id) {
        var _res$saveGroupOrder2;

        Object(Message["b" /* showMessage */])('操作成功 将前往付款');

        const _query = Object(utils["d" /* dealUrlQuery */])({
          orderId: res === null || res === void 0 ? void 0 : (_res$saveGroupOrder2 = res.saveGroupOrder) === null || _res$saveGroupOrder2 === void 0 ? void 0 : _res$saveGroupOrder2.id
        });

        await router.replace(`/m/pay${_query}`, `/m/pay${_query}`);
        actionsShopCartModel.clearData();
        actionsShopCartModel.getList();
        actionsGroupProduct.clearData();
        actionsOrderPageModel.close();
      }
    }
  }, Object(dealKey["a" /* ll */])('提交订单')))))) || null;
};
// EXTERNAL MODULE: ./utils/view/m/groupProduct/groupQueueList.tsx
var groupProduct_groupQueueList = __webpack_require__("mZym");

// EXTERNAL MODULE: ./utils/view/pc/groupProduct/[id].tsx
var _id_ = __webpack_require__("7GAp");

// EXTERNAL MODULE: ./utils/view/m/cart/index.tsx + 1 modules
var cart = __webpack_require__("We6d");

// CONCATENATED MODULE: ./utils/view/m/groupProduct/[id].tsx
var _id_jsx = external_react_default.a.createElement;

function _id_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _id_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _id_ownKeys(Object(source), true).forEach(function (key) { _id_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _id_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _id_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






















const dealDiscount = num => {
  var _ref;

  return ((_ref = 100 - num) !== null && _ref !== void 0 ? _ref : 0) / 100;
};

const dealGroupNumbers = product => {
  var _product$groupAmount, _product$groupPrecisi;

  return ~~(((_product$groupAmount = product.groupAmount) !== null && _product$groupAmount !== void 0 ? _product$groupAmount : 0) / ((_product$groupPrecisi = product.groupPrecision) !== null && _product$groupPrecisi !== void 0 ? _product$groupPrecisi : 1));
};
const groupProductModel = Object(modelUtil["c" /* modelFactory */])('groupProductModel', {
  product: {},
  groupQueueList: [],
  selectNum: 0,
  selectQueueId: '',
  numDiscount: 1,
  groupDiscount: 1,
  groupDiscountConfig: {},
  dealDiscountAmountUnit: state => {
    var _state$product$priceO;

    return ((_state$product$priceO = state.product.priceOut) !== null && _state$product$priceO !== void 0 ? _state$product$priceO : 0) * state.numDiscount * state.groupDiscount;
  },
  dealDiscountAmount: state => {
    var _state$product$priceO2;

    return ((_state$product$priceO2 = state.product.priceOut) !== null && _state$product$priceO2 !== void 0 ? _state$product$priceO2 : 0) * state.selectNum * dealGroupNumbers(state.product) * state.numDiscount * state.groupDiscount;
  }
}, {
  getData: async (value, option) => {
    var _res$productListByIds, _res$productListByIds2, _groupQueueList$group, _groupQueueList$group2, _res2$getDataConfig;

    const res = await option.query(doc["b" /* doc */].productListByIds, {
      ids: [value]
    });
    const groupQueueList = await option.query(doc["b" /* doc */].groupQueueList, {
      groupQueueItemInput: {
        product: {
          id: value
        }
      }
    });
    const res2 = await option.query(doc["c" /* getDataConfig */], {
      data: {
        type: ss_common_enum["e" /* DictTypeEnum */].GroupPrecision
      }
    }, {});
    option.setData(Object(utils["g" /* fpMergePre */])({
      product: (_res$productListByIds = res === null || res === void 0 ? void 0 : (_res$productListByIds2 = res.productListByIds) === null || _res$productListByIds2 === void 0 ? void 0 : _res$productListByIds2.list[0]) !== null && _res$productListByIds !== void 0 ? _res$productListByIds : {},
      groupQueueList: (_groupQueueList$group = groupQueueList === null || groupQueueList === void 0 ? void 0 : (_groupQueueList$group2 = groupQueueList.groupQueueList) === null || _groupQueueList$group2 === void 0 ? void 0 : _groupQueueList$group2.sort((a, b) => {
        var _a$sumFillAmount, _b$sumFillAmount;

        return ((_a$sumFillAmount = a.sumFillAmount) !== null && _a$sumFillAmount !== void 0 ? _a$sumFillAmount : 0) - ((_b$sumFillAmount = b.sumFillAmount) !== null && _b$sumFillAmount !== void 0 ? _b$sumFillAmount : 0);
      })) !== null && _groupQueueList$group !== void 0 ? _groupQueueList$group : [],
      groupDiscountConfig: res2 === null || res2 === void 0 ? void 0 : (_res2$getDataConfig = res2.getDataConfig) === null || _res2$getDataConfig === void 0 ? void 0 : _res2$getDataConfig.value
    }));
  },
  updateSelectNum: (value, option) => {
    var _reverse$find$id, _reverse, _reverse$find, _option$data$groupQue, _option$data$groupQue2, _dealDiscount, _groupDiscountConfig, _groupDiscountConfig$, _option$data$product$2;

    const groupDiscountConfig = option.data.groupDiscountConfig;
    const selectNum = value === option.data.selectNum ? 0 : value;
    const selectQueueId = value === option.data.selectNum ? '' : (_reverse$find$id = (_reverse = [...option.data.groupQueueList].reverse()) === null || _reverse === void 0 ? void 0 : (_reverse$find = _reverse.find(v => {
      var _v$sumFillAmount, _option$data$product$, _option$data, _option$data$product;

      return ((_v$sumFillAmount = v.sumFillAmount) !== null && _v$sumFillAmount !== void 0 ? _v$sumFillAmount : 0) + value <= ((_option$data$product$ = (_option$data = option.data) === null || _option$data === void 0 ? void 0 : (_option$data$product = _option$data.product) === null || _option$data$product === void 0 ? void 0 : _option$data$product.groupPrecision) !== null && _option$data$product$ !== void 0 ? _option$data$product$ : 0);
    })) === null || _reverse$find === void 0 ? void 0 : _reverse$find.id) !== null && _reverse$find$id !== void 0 ? _reverse$find$id : '';
    option.setData(Object(utils["g" /* fpMergePre */])({
      selectNum,
      selectQueueId,
      groupDiscount: ((_option$data$groupQue = (_option$data$groupQue2 = option.data.groupQueueList.find(value1 => value1.id === selectQueueId)) === null || _option$data$groupQue2 === void 0 ? void 0 : _option$data$groupQue2.sumFillAmount) !== null && _option$data$groupQue !== void 0 ? _option$data$groupQue : 0) + selectNum === option.data.product.groupPrecision ? dealDiscount(groupDiscountConfig.groupDiscount) : 1,
      numDiscount: (_dealDiscount = dealDiscount(groupDiscountConfig === null || groupDiscountConfig === void 0 ? void 0 : (_groupDiscountConfig = groupDiscountConfig[(_option$data$product$2 = option.data.product.groupPrecision) !== null && _option$data$product$2 !== void 0 ? _option$data$product$2 : 0]) === null || _groupDiscountConfig === void 0 ? void 0 : (_groupDiscountConfig$ = _groupDiscountConfig.discount) === null || _groupDiscountConfig$ === void 0 ? void 0 : _groupDiscountConfig$[selectNum])) !== null && _dealDiscount !== void 0 ? _dealDiscount : 1
    }));
  },
  clearData: (value, option) => {
    option.setData(Object(utils["g" /* fpMergePre */])({
      selectNum: 0,
      selectQueueId: '',
      numDiscount: 1,
      groupDiscount: 1
    }));
  },
  submit: async ({
    orderInfoItemInput
  }, option) => {
    return await option.mutate(doc["b" /* doc */].saveGroupOrder, {
      orderInfoItemInput: _id_objectSpread({}, orderInfoItemInput),
      groupOrderItemInput: {
        orderGroupAmount: option.data.selectNum
      },
      groupQueueItemInput: _id_objectSpread({
        product: option.data.product
      }, option.data.selectQueueId ? {
        id: option.data.selectQueueId
      } : {})
    });
  }
});
const PriceRed = external_styled_components_default.a.div.withConfig({
  displayName: "id__PriceRed",
  componentId: "ghx5mg-0"
})(["background:", ";color:white;display:grid;grid-template-columns:1fr 120px;grid-template-rows:repeat(2,30px);align-items:center;> main{grid-area:1/1/3/2;padding-left:20px;> span{margin-left:16px;}}"], common["b" /* mpStyle */].red);
const Name = external_styled_components_default.a.div.withConfig({
  displayName: "id__Name",
  componentId: "ghx5mg-1"
})(["padding:16px 20px;display:flex;align-items:flex-end;> main{font-size:22px;margin-right:8px;flex-shrink:0;}> section{> span{padding:0 4px;background:", ";border-radius:4px;position:relative;bottom:-4px;margin-left:8px;display:inline-flex;align-items:center;}}grid-auto-flow:column;"], colors_["grey"]['700']);
const YellowStar = () => _id_jsx(StarRounded_default.a, {
  fontSize: 'small',
  style: {
    color: '#FDD334'
  }
});
const Title = external_styled_components_default.a.header.withConfig({
  displayName: "id__Title",
  componentId: "ghx5mg-2"
})(["font-size:20px;"]);
const GroupQueueBox = external_styled_components_default.a.div.withConfig({
  displayName: "id__GroupQueueBox",
  componentId: "ghx5mg-3"
})(["padding:16px;"]);
const SmartMatch = external_styled_components_default.a.div.withConfig({
  displayName: "id__SmartMatch",
  componentId: "ghx5mg-4"
})(["padding:16px 16px 90px;> section{margin-top:8px;display:flex;align-items:center;}> main{> svg{font-size:3.0rem;}}"]);
const Submit = external_styled_components_default.a.div.withConfig({
  displayName: "id__Submit",
  componentId: "ghx5mg-5"
})(["background:white;border-top:1px solid ", ";display:flex;align-items:center;justify-content:space-between;> aside{padding-left:16px;color:", ";}"], common["b" /* mpStyle */].red, common["b" /* mpStyle */].red);
const GroupSubmit = ({
  className,
  submitCall
}) => {
  const {
    actions: actionsShopCartModel
  } = Object(useStore["b" /* useStoreModel */])(cart["b" /* ShopCartModel */]);
  const {
    state: stateGroupProduct
  } = Object(useStore["b" /* useStoreModel */])(groupProductModel);
  return _id_jsx(Submit, {
    className: className
  }, _id_jsx("aside", null, Object(dealKey["a" /* ll */])('选择了'), stateGroupProduct.selectNum, Object(dealKey["a" /* ll */])('份')), _id_jsx(core_["Button"], {
    disabled: stateGroupProduct.selectNum === 0,
    style: {
      height: '100%',
      padding: '0 32px',
      borderRadius: '0',
      fontSize: '18px'
    },
    color: 'secondary',
    variant: 'contained',
    onClick: () => {
      actionsShopCartModel.updateIsGroupOrder(true);
      submitCall && submitCall();
    }
  }, Object(dealKey["a" /* ll */])('去结算')));
};
const GroupSubmitBox = external_styled_components_default()(GroupSubmit).withConfig({
  displayName: "id__GroupSubmitBox",
  componentId: "ghx5mg-6"
})(["&&&{position:fixed;height:60px;bottom:0;width:100vw;box-shadow:", ";}"], common["b" /* mpStyle */].shadow['1']);
const GroupProduct = () => {
  var _ref2, _router$query, _product$img;

  const router = Object(router_["useRouter"])();
  const id = (_ref2 = (_router$query = router.query) === null || _router$query === void 0 ? void 0 : _router$query.id) !== null && _ref2 !== void 0 ? _ref2 : '';
  const {
    actions: actionsGroupOrderPageModel
  } = Object(useStore["b" /* useStoreModel */])(groupOrderPageModel);
  const {
    actions: actionsGroupProduct,
    state: stateGroupProduct
  } = Object(useStore["b" /* useStoreModel */])(groupProductModel);
  Object(external_react_["useEffect"])(() => {
    actionsGroupProduct.getData(id);
  }, [actionsGroupProduct, id]);
  const product = stateGroupProduct.product; // useEffect(() => {
  //   actionsGroupProduct.updateSelectNum(2)
  //   actionsGroupOrderPageModel.open()
  // }, [])

  return _id_jsx("div", null, _id_jsx(HeaderTitle["a" /* HeaderTitle */], {
    title: '产品详情'
  }), _id_jsx(Swipe["a" /* default */], {
    height: '240px',
    dataList: product === null || product === void 0 ? void 0 : (_product$img = product.img) === null || _product$img === void 0 ? void 0 : _product$img.map(v => _id_objectSpread(_id_objectSpread({}, v), {}, {
      imgUrl: v === null || v === void 0 ? void 0 : v.url
    }))
  }), _id_jsx(PriceRed, null, _id_jsx("main", null, Object(dealKey["a" /* ll */])('基准价格'), _id_jsx("span", null, Object(utils["c" /* dealMoney */])(product.priceOut), "/", product.groupAmountUnitString)), _id_jsx("aside", null, Object(dealKey["a" /* ll */])('已成团'), stateGroupProduct.groupQueueList.filter(v => v.sumFillAmount === (product === null || product === void 0 ? void 0 : product.groupPrecision)).length, Object(dealKey["a" /* ll */])('单')), _id_jsx("aside", null, Object(dealKey["a" /* ll */])('拼团中'), stateGroupProduct.groupQueueList.filter(v => {
    var _v$sumFillAmount2, _product$groupPrecisi2;

    return ((_v$sumFillAmount2 = v.sumFillAmount) !== null && _v$sumFillAmount2 !== void 0 ? _v$sumFillAmount2 : 0) < ((_product$groupPrecisi2 = product === null || product === void 0 ? void 0 : product.groupPrecision) !== null && _product$groupPrecisi2 !== void 0 ? _product$groupPrecisi2 : 0);
  }).length, Object(dealKey["a" /* ll */])('单'))), _id_jsx(Name, null, _id_jsx("main", null, product.name), _id_jsx("section", null, product.groupRemark, "/", product.groupAmount, product.groupAmountUnitString, " ", `每一份${dealGroupNumbers(product)}${product.groupAmountUnitString}`, _id_jsx("br", null), Object(dealKey["a" /* ll */])('分团精度'), _id_jsx("span", null, [...Array(product.groupPrecision)].map((v, i) => i).map(value => _id_jsx(YellowStar, {
    key: value
  }))))), _id_jsx(GroupQueueBox, null, _id_jsx(Title, null, Object(dealKey["a" /* ll */])('拼团中')), _id_jsx(groupProduct_groupQueueList["a" /* GroupQueueList */], null)), _id_jsx(SmartMatch, null, _id_jsx("header", null, _id_jsx(Title, null, Object(dealKey["a" /* ll */])('智能匹配'))), _id_jsx("section", null, Object(dealKey["a" /* ll */])('请点击'), _id_jsx(StarBorderRounded_default.a, null), Object(dealKey["a" /* ll */])('确定您需要的份数')), _id_jsx("main", null, [...Array(product.groupPrecision)].map((v, i) => i).map(value => value + 1 > stateGroupProduct.selectNum ? _id_jsx(StarBorderRounded_default.a, {
    key: `clickStar${value}`,
    fontSize: 'large',
    onClick: () => actionsGroupProduct.updateSelectNum(value + 1)
  }) : _id_jsx(StarRounded_default.a, {
    key: `clickStar${value}`,
    style: {
      color: '#FDD334'
    },
    fontSize: 'large',
    onClick: () => actionsGroupProduct.updateSelectNum(value + 1)
  }))), _id_jsx(_id_["b" /* PriceBox */], null)), _id_jsx(GroupSubmitBox, {
    submitCall: () => {
      actionsGroupOrderPageModel.open();
    }
  }), _id_jsx(GroupOrderPage, null));
};

/***/ }),

/***/ "51Ja":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopAction; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("RnCP");
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Box_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("cW92");
/* harmony import */ var _tools_dealKey__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("+vfP");
/* harmony import */ var _components_ShoppingCartIconButton_ShoppingCartIconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("cae+");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _hooks_usePcOrMobile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("M5o2");
/* harmony import */ var _style_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("ZtJr");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }











const Box = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "topAction__Box",
  componentId: "sc-1c0cq86-0"
})(["display:flex;margin:25px 0 21px;"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "topAction__Title",
  componentId: "sc-1c0cq86-1"
})(["cursor:pointer;> img{width:120px;height:49px;}"]);
const SearchTip = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "topAction__SearchTip",
  componentId: "sc-1c0cq86-2"
})(["", ";color:#9B9B9B;display:grid;justify-content:start;grid-auto-flow:column;grid-column-gap:20px;"], _style_common__WEBPACK_IMPORTED_MODULE_9__[/* mpStyle */ "b"].fontType.s);
const SearchInput = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "topAction__SearchInput",
  componentId: "sc-1c0cq86-3"
})(["&&&{width:600px;.MuiFormControl-root{margin:0;}.MuiInputBase-root{height:45px;padding-right:0;background:#F5F5F5;border-color:transparent;border-radius:10px;}.MuiInputAdornment-positionEnd{margin-left:0;}.MuiButtonBase-root{height:45px;width:95px;box-shadow:none;border-radius:0 10px 10px 0;}.MuiInputBase-input{}.MuiOutlinedInput-notchedOutline{display:none;}.MuiInput-underline{:after,:before{display:none;}}}"]);
const AvatarBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ButtonBase"]).withConfig({
  displayName: "topAction__AvatarBox",
  componentId: "sc-1c0cq86-4"
})(["display:flex;align-items:center;height:45px;> h2{", ";font-weight:600;color:#2C3345;}"], _style_common__WEBPACK_IMPORTED_MODULE_9__[/* mpStyle */ "b"].fontType.n);
const ShopCartBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "topAction__ShopCartBox",
  componentId: "sc-1c0cq86-5"
})(["display:flex;align-items:center;justify-content:center;width:79px;height:45px;background:#F5F5F5;border-radius:8px;"]);
const TopAction = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  Object(_hooks_usePcOrMobile__WEBPACK_IMPORTED_MODULE_8__[/* usePcOrMobile */ "a"])();
  return __jsx(Box, null, __jsx(Title, {
    onClick: () => {
      router.push('/pc/home');
    }
  }, __jsx("img", {
    src: '/img/home/logo_pc.png',
    alt: ""
  })), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_4__[/* Space */ "b"], {
    w: 234
  }), __jsx(SearchInput, null, __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_2__["Autocomplete"], {
    size: 'small',
    freeSolo: true,
    disableClearable: true,
    options: [],
    value: '',
    onInputChange: () => {},
    placeholder: Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_5__[/* ll */ "a"])('搜索全站鲜美食品'),
    renderInput: params => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], _extends({}, params, {
      margin: "normal",
      variant: "outlined",
      InputProps: {
        endAdornment: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["InputAdornment"], {
          position: 'end'
        }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          variant: 'contained',
          color: 'secondary',
          onClick: () => {}
        }, "\u641C\u7D22"))
      }
    }))
  }), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_4__[/* Space */ "b"], {
    h: 10
  }), __jsx(SearchTip, null, ['乐事薯片', '好时巧克力', '思念水饺', '日清杯面'].map(v => __jsx("section", {
    key: `SearchTip>${v}`
  }, v)))), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_4__[/* Space */ "b"], {
    w: 26
  }), __jsx(AvatarBox, {
    onClick: () => {
      router.push('/pc/me/myInfo');
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Avatar"], null), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_4__[/* Space */ "b"], {
    w: 8
  }), __jsx("h2", null, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_5__[/* ll */ "a"])('我的账户'))), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_4__[/* Space */ "b"], {
    w: 28
  }), __jsx(ShopCartBox, null, __jsx(_components_ShoppingCartIconButton_ShoppingCartIconButton__WEBPACK_IMPORTED_MODULE_6__[/* ShoppingCartIconButton */ "a"], null)));
};

/***/ }),

/***/ "6saQ":
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
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("We6d");
/* harmony import */ var _components_Message_Message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("OO/1");
/* harmony import */ var _components_ProductItem_UpdateShopCart__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("vo3K");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













const ShopCartProductBox = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "CartProduct__ShopCartProductBox",
  componentId: "sc-6lqt5y-0"
})(["margin-bottom:16px;display:grid;grid-template-columns:minmax(20px,72px) 1fr;grid-template-rows:repeat(2,22px) 30px;grid-column-gap:10px;> img{grid-area:1/1/4/2;width:100%;height:100%;border-radius:8px;}> section{color:", "}> footer{display:flex;align-items:center;> main{flex-grow:1;}> button{flex-shrink:0;font-size:12px;}}"], _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_5__["grey"][600]);
const CartProduct = ({
  shopCart
}) => {
  var _shopCart$product, _shopCart$product$img, _shopCart$product$img2, _shopCart$number;

  const {
    actions: actionsShopCartModel,
    state: stateSCM
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_8__[/* useStoreModel */ "b"])(_index__WEBPACK_IMPORTED_MODULE_10__[/* ShopCartModel */ "b"]);
  const {
    actions: actionsProductModel
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
      await actionsShopCartModel.moveToNext({
        shopCart
      });
      actionsShopCartModel.getList();
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_9__[/* ll */ "a"])('下次购买')), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["IconButton"], {
    disabled: ((_shopCart$number = shopCart === null || shopCart === void 0 ? void 0 : shopCart.number) !== null && _shopCart$number !== void 0 ? _shopCart$number : 0) <= 1,
    size: 'small',
    onClick: async () => {
      await actionsProductModel.updateNumShopCart({
        product,
        number: -1
      });
      actionsShopCartModel.getList();
    }
  }, __jsx(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_2___default.a, null)), shopCart.number, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["IconButton"], {
    size: 'small',
    onClick: async () => {
      await actionsProductModel.updateNumShopCart({
        product
      });
      actionsShopCartModel.getList();
    }
  }, __jsx(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_1___default.a, null))) || __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    style: {
      marginRight: '8px'
    },
    size: 'small',
    variant: 'outlined',
    color: 'secondary',
    onClick: async () => {
      await actionsProductModel.updateShopCart({
        isDelete: 1,
        id: shopCart.id
      });
      actionsShopCartModel.getList();
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_9__[/* ll */ "a"])('删除')), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    size: 'small',
    variant: 'outlined' // onClick={async () => {
    //   if (stateSCM.shopCartList.findIndex(v => v.product?.id === shopCart.product?.id) > -1) {
    //     return showMessage('该商品已在购物车中')
    //   }
    //   await actionsProductModel.updateShopCart({
    //     isNext: 0,
    //     id: shopCart.id,
    //   })
    //   actionsShopCartModel.getList()
    // }}
    ,
    onClick: async () => {
      const res = await actionsUpdateShopCartModel.openClick();

      if ((res === null || res === void 0 ? void 0 : res.num) > 0) {
        var _await$actionsProduct, _await$actionsProduct2;

        if ((_await$actionsProduct = await actionsProductModel.updateNumShopCart({
          product,
          number: ~~(res === null || res === void 0 ? void 0 : res.num)
        })) === null || _await$actionsProduct === void 0 ? void 0 : (_await$actionsProduct2 = _await$actionsProduct.updateNumShopCart) === null || _await$actionsProduct2 === void 0 ? void 0 : _await$actionsProduct2.id) {
          Object(_components_Message_Message__WEBPACK_IMPORTED_MODULE_11__[/* showMessage */ "b"])('操作成功');
          actionsShopCartModel.getList();
        }
      }
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_9__[/* ll */ "a"])('加入购物车')))));
};

/***/ }),

/***/ "7GAp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PriceBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PcGroupProduct; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pcComponents_header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("RTgM");
/* harmony import */ var _pcComponents_topAction_topAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("51Ja");
/* harmony import */ var _components_Box_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cW92");
/* harmony import */ var _pcComponents_mainBox_mainBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("DrI1");
/* harmony import */ var _home_pcHome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("JHhN");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Bjmp");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _tools_dealKey__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("+vfP");
/* harmony import */ var _style_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("ZtJr");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("U81q");
/* harmony import */ var _m_groupProduct_id___WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("4gpI");
/* harmony import */ var _components_Swipe_Swipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("K0AU");
/* harmony import */ var _tools_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("cBzo");
/* harmony import */ var _material_ui_icons_StarBorderRounded__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("n+Zn");
/* harmony import */ var _material_ui_icons_StarBorderRounded__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_StarBorderRounded__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_StarRounded__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("3F1g");
/* harmony import */ var _material_ui_icons_StarRounded__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_StarRounded__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _m_groupProduct_groupQueueList__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("mZym");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _m_home_appModule__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("LIvt");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




















const HeadTab = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_6__["styled"])('div')(_objectSpread({}, _style_common__WEBPACK_IMPORTED_MODULE_8__[/* mpStyle */ "b"].fontTypeObj.xl));
const Box = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_6__["styled"])('div')({
  display: 'grid',
  gridTemplateColumns: '500px 1fr',
  gridColumnGap: 85
});
const RightBox = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_6__["styled"])('div')({});
const Info = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_6__["styled"])('div')({
  padding: '21px 24px',
  background: '#EBEBEB',
  borderRadius: '6px',
  '& >header': {
    display: 'grid',
    gridAutoFlow: 'column',
    justifyContent: 'start',
    alignItems: 'center',
    fontWeight: 600,
    fontSize: 18,
    '&>span': {
      background: 'linear-gradient(270deg, #696969 0%, #373737 100%)',
      borderRadius: '4px',
      display: 'inline-grid',
      gridAutoFlow: 'column',
      justifyContent: 'start',
      alignItems: 'center',
      margin: '0 20px'
    }
  }
});
const InfoFooter = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_6__["styled"])('div')({
  display: 'grid',
  gridTemplateColumns: '1fr max-content',
  '&>aside': {
    display: 'grid',
    gridAutoFlow: 'column'
  }
});
const Title = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_6__["styled"])('div')({
  fontSize: '16px',
  fontWeight: 600,
  color: '#4A4A4A'
});
const GroupQueueBox = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_6__["styled"])('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridColumnGap: 21,
  gridRowGap: 14,
  '& .GroupQueueListBox': {
    marginTop: 0
  }
});
const PleaseClick = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_6__["styled"])('div')({
  display: 'grid',
  gridAutoFlow: 'column',
  justifyContent: 'start',
  alignItems: 'center'
});
const SelectNum = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_6__["styled"])('div')({
  '& .MuiSvgIcon-root': {
    fontSize: 60
  }
});
const Price = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_6__["styled"])('div')({
  marginTop: '8px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  '&> main': {
    'fontSize': '18px',
    fontWeight: 'bold'
  },
  '&> main, section': {
    '&> *': {
      textAlign: 'center'
    }
  }
});
const PriceBox = () => {
  var _product$priceOut;

  const {
    state: stateGroupProduct
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_10__[/* useStoreModel */ "b"])(_m_groupProduct_id___WEBPACK_IMPORTED_MODULE_11__[/* groupProductModel */ "e"]);
  const product = stateGroupProduct.product;
  return __jsx(Price, null, __jsx("main", null, __jsx("header", null, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_13__[/* dealMoney */ "c"])(stateGroupProduct.dealDiscountAmountUnit(stateGroupProduct))), __jsx("footer", null, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_7__[/* ll */ "a"])('折后价格'))), __jsx("div", null, "="), __jsx("section", null, __jsx("header", null, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_13__[/* dealMoney */ "c"])((_product$priceOut = product.priceOut) !== null && _product$priceOut !== void 0 ? _product$priceOut : 0)), __jsx("footer", null, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_7__[/* ll */ "a"])('基准价格'))), __jsx("div", null, "x"), __jsx("section", null, __jsx("header", null, stateGroupProduct.numDiscount), __jsx("footer", null, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_7__[/* ll */ "a"])('份数折扣'))), __jsx("div", null, "x"), __jsx("section", null, __jsx("header", null, stateGroupProduct.groupDiscount), __jsx("footer", null, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_7__[/* ll */ "a"])('成团折上折'))));
};
const GroupSubmitBox = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_6__["styled"])(props => __jsx(_m_groupProduct_id___WEBPACK_IMPORTED_MODULE_11__[/* GroupSubmit */ "b"], props))({
  height: 64
});
const PcGroupProduct = () => {
  var _ref, _router$query, _product$img;

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"])();
  const id = (_ref = (_router$query = router.query) === null || _router$query === void 0 ? void 0 : _router$query.id) !== null && _ref !== void 0 ? _ref : '';
  const {
    actions: actionsGroupProduct,
    state: stateGroupProduct
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_10__[/* useStoreModel */ "b"])(_m_groupProduct_id___WEBPACK_IMPORTED_MODULE_11__[/* groupProductModel */ "e"]);
  const product = stateGroupProduct.product;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    actionsGroupProduct.getData(id);
  }, [actionsGroupProduct, id]);
  return __jsx(_pcComponents_mainBox_mainBox__WEBPACK_IMPORTED_MODULE_4__[/* MainBox */ "a"], null, __jsx(_pcComponents_header_header__WEBPACK_IMPORTED_MODULE_1__[/* PcHeader */ "a"], null), __jsx(_home_pcHome__WEBPACK_IMPORTED_MODULE_5__[/* PcContentBox */ "a"], null, __jsx(_pcComponents_topAction_topAction__WEBPACK_IMPORTED_MODULE_2__[/* TopAction */ "a"], null), __jsx(HeadTab, null, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_7__[/* ll */ "a"])('拼团商品详情')), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_3__[/* Space */ "b"], {
    h: 40
  }), __jsx(Box, null, __jsx(_components_Swipe_Swipe__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
    showIndicators: false,
    showThumbs: true,
    height: '500px',
    dataList: product === null || product === void 0 ? void 0 : (_product$img = product.img) === null || _product$img === void 0 ? void 0 : _product$img.map(v => _objectSpread(_objectSpread({}, v), {}, {
      imgUrl: v === null || v === void 0 ? void 0 : v.url
    }))
  }), __jsx(RightBox, null, __jsx(Info, null, __jsx("header", null, product.name, " (", product.groupRemark, " / ", product.groupAmount, product.groupAmountUnitString, " ", `每一份${Object(_m_groupProduct_id___WEBPACK_IMPORTED_MODULE_11__[/* dealGroupNumbers */ "d"])(product)}${product.groupAmountUnitString}`, " / ", Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_7__[/* ll */ "a"])('分团精度'), __jsx("span", null, [...Array(product.groupPrecision)].map((v, i) => i).map(value => __jsx(_m_groupProduct_id___WEBPACK_IMPORTED_MODULE_11__[/* YellowStar */ "c"], {
    key: value
  }))), " )"), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_3__[/* Space */ "b"], {
    h: 14
  }), __jsx(InfoFooter, null, __jsx("section", null, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_7__[/* ll */ "a"])('基准价格'), __jsx("span", null, __jsx("strong", null, " ", Object(_tools_utils__WEBPACK_IMPORTED_MODULE_13__[/* dealMoney */ "c"])(product.priceOut)), "/", product.groupAmountUnitString)), __jsx("aside", null, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_7__[/* ll */ "a"])('已成团'), ": ", stateGroupProduct.groupQueueList.filter(v => v.sumFillAmount === (product === null || product === void 0 ? void 0 : product.groupPrecision)).length, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_7__[/* ll */ "a"])('单'), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_3__[/* Space */ "b"], {
    w: 8
  }), "|", __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_3__[/* Space */ "b"], {
    w: 8
  }), Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_7__[/* ll */ "a"])('拼团中'), ": ", stateGroupProduct.groupQueueList.filter(v => {
    var _v$sumFillAmount, _product$groupPrecisi;

    return ((_v$sumFillAmount = v.sumFillAmount) !== null && _v$sumFillAmount !== void 0 ? _v$sumFillAmount : 0) < ((_product$groupPrecisi = product === null || product === void 0 ? void 0 : product.groupPrecision) !== null && _product$groupPrecisi !== void 0 ? _product$groupPrecisi : 0);
  }).length, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_7__[/* ll */ "a"])('单')))), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_3__[/* Space */ "b"], {
    h: 16
  }), __jsx(Title, null, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_7__[/* ll */ "a"])('拼团中')), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_3__[/* Space */ "b"], {
    h: 16
  }), __jsx(GroupQueueBox, null, __jsx(_m_groupProduct_groupQueueList__WEBPACK_IMPORTED_MODULE_16__[/* GroupQueueList */ "a"], null)), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_3__[/* Space */ "b"], {
    h: 33
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__["Divider"], null), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_3__[/* Space */ "b"], {
    h: 24
  }), __jsx(Title, null, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_7__[/* ll */ "a"])('智能匹配')), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_3__[/* Space */ "b"], {
    h: 16
  }), __jsx(PleaseClick, null, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_7__[/* ll */ "a"])('请点击'), __jsx(_material_ui_icons_StarBorderRounded__WEBPACK_IMPORTED_MODULE_14___default.a, null), Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_7__[/* ll */ "a"])('确定您需要的份数')), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_3__[/* Space */ "b"], {
    h: 16
  }), __jsx(SelectNum, null, [...Array(product.groupPrecision)].map((v, i) => i).map(value => value + 1 > stateGroupProduct.selectNum ? __jsx(_material_ui_icons_StarBorderRounded__WEBPACK_IMPORTED_MODULE_14___default.a, {
    key: `clickStar${value}`,
    fontSize: 'large',
    onClick: () => actionsGroupProduct.updateSelectNum(value + 1)
  }) : __jsx(_material_ui_icons_StarRounded__WEBPACK_IMPORTED_MODULE_15___default.a, {
    key: `clickStar${value}`,
    style: {
      color: '#FDD334'
    },
    fontSize: 'large',
    onClick: () => actionsGroupProduct.updateSelectNum(value + 1)
  }))), __jsx(PriceBox, null), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_3__[/* Space */ "b"], {
    h: 20
  }), __jsx(GroupSubmitBox, {
    submitCall: () => {
      router.push({
        pathname: '/pc/cart/orderPage',
        query: {
          homeType: _m_home_appModule__WEBPACK_IMPORTED_MODULE_18__[/* HomeType */ "b"].group
        }
      });
    }
  })))), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_3__[/* Space */ "b"], {
    h: 120
  }));
};

/***/ }),

/***/ "914C":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyInfo", function() { return MyInfo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_HeaderTitle_HeaderTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("B42p");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tools_dealKey__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("+vfP");
/* harmony import */ var _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("U81q");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("URg2");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("+FwM");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const MyCard = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Card"]).withConfig({
  displayName: "myInfo__MyCard",
  componentId: "sc-1euak54-0"
})(["margin:40px 20px;padding:10px 20px;display:flex;flex-direction:column;> section{display:flex;height:40px;align-items:center;> aside{margin-right:10px;}> main{flex-grow:1;}> footer{> button{padding:2px 8px;}}}"]);
const Part = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "myInfo__Part",
  componentId: "sc-1euak54-1"
})(["width:100%;height:18px;background:", ";"], _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_7__["grey"][100]);
const Account = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "myInfo__Account",
  componentId: "sc-1euak54-2"
})(["padding:20px;> header{font-size:20px;font-weight:bold;margin-bottom:10px;}> section{height:30px;display:flex;justify-content:space-between;align-items:center;}"]);
const MyInfo = () => {
  var _stateMeModel$user$us, _stateMeModel$user$us2, _stateMeModel$user$us3;

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();
  const {
    state: stateMeModel,
    actions: actionsMeModel
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_5__[/* useStoreModel */ "b"])(_model__WEBPACK_IMPORTED_MODULE_6__[/* meModel */ "a"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!stateMeModel.user.id) {
      actionsMeModel.getLoginUser();
    }
  }, []);
  return __jsx("div", null, __jsx(_components_HeaderTitle_HeaderTitle__WEBPACK_IMPORTED_MODULE_1__[/* HeaderTitle */ "a"], {
    title: '我的达人证'
  }), __jsx(MyCard, null, __jsx("section", null, __jsx("aside", null, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_4__[/* ll */ "a"])('姓名')), __jsx("main", null, (_stateMeModel$user$us = stateMeModel.user.userInfo) === null || _stateMeModel$user$us === void 0 ? void 0 : _stateMeModel$user$us.name), __jsx("footer", null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: 'outlined',
    onClick: () => router.push('/m/me/myInfo/updateMyInfo')
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_4__[/* ll */ "a"])('编辑')))), __jsx("section", null, __jsx("aside", null, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_4__[/* ll */ "a"])('电话')), __jsx("main", null, (_stateMeModel$user$us2 = stateMeModel.user.userInfo) === null || _stateMeModel$user$us2 === void 0 ? void 0 : _stateMeModel$user$us2.phone)), __jsx("section", null, __jsx("aside", null, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_4__[/* ll */ "a"])('邮箱')), __jsx("main", null, (_stateMeModel$user$us3 = stateMeModel.user.userInfo) === null || _stateMeModel$user$us3 === void 0 ? void 0 : _stateMeModel$user$us3.email))), __jsx(Part, null), __jsx(Account, null, __jsx("header", null, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_4__[/* ll */ "a"])('账号设置')), __jsx("section", null, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_4__[/* ll */ "a"])('账号')), __jsx("section", null, stateMeModel.user.name), __jsx("section", null, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_4__[/* ll */ "a"])('密码')), __jsx("section", null, __jsx("span", null, "********"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    color: 'secondary',
    variant: 'text',
    size: 'small',
    onClick: () => router.push('/m/me/myInfo/updatePassword')
  }, "\u4FEE\u6539"))));
};

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
  }, __jsx(LeftIcon, null)), __jsx("main", null, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_4__[/* ll */ "a"])(title)), __jsx(Action, null, showSearch && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["IconButton"], {
    onClick: () => {
      router.push('/m/searchPage');
    }
  }, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_7__["Search"], null)), showCart && __jsx(_ShoppingCartIconButton_ShoppingCartIconButton__WEBPACK_IMPORTED_MODULE_6__[/* ShoppingCartIconButton */ "a"], null)));
};

/***/ }),

/***/ "COwg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return jssStyled; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Bjmp");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const omit = (input, fields = []) => {
  const output = {};
  Object.keys(input).forEach(prop => {
    if (fields.indexOf(prop) === -1) {
      output[prop] = input[prop];
    }
  });
  return output;
};

const jssStyled = (Component, filterProps) => {
  return Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["styled"])(props => {
    return __jsx(Component, omit(props, filterProps));
  });
};

/***/ }),

/***/ "DrI1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainBox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ProductItem_UpdateShopCart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("vo3K");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const MainBox = ({
  children
}) => {
  return __jsx("div", null, children, __jsx(_components_ProductItem_UpdateShopCart__WEBPACK_IMPORTED_MODULE_1__[/* UpdateShopCart */ "a"], null));
};

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
})(["margin-top:20px;display:grid;grid-template-columns:40px 1fr;grid-template-rows:30px 30px 50px;margin-bottom:40px;> img{width:32px;height:56px;grid-area:1/1/3/2;padding-right:10px;}> header{font-size:20px;align-self:end;}> footer{font-size:20px;font-weight:bold;color:", ";}> main{grid-area:3/1/4/3;font-size:24px;font-weight:bold;align-self:end;}"], _style_common__WEBPACK_IMPORTED_MODULE_3__[/* mpStyle */ "b"].red);
const RegisterHeader = () => {
  return __jsx(Header, null, __jsx("img", {
    src: '/img/home/logo.png',
    alt: ""
  }), __jsx("header", null, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_2__[/* ll */ "a"])('Market')), __jsx("footer", null, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_2__[/* ll */ "a"])('Payless')), __jsx("main", null, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_2__[/* ll */ "a"])('欢迎来到马佩莱超市')));
};

/***/ }),

/***/ "H0n8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductItemBox; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tools_img__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Oj7+");
/* harmony import */ var _tools_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cBzo");
/* harmony import */ var _style_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ZtJr");
/* harmony import */ var _components_Box_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cW92");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("2kat");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("U81q");
/* harmony import */ var _components_ProductItem_UpdateShopCart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("vo3K");
/* harmony import */ var _components_Message_Message__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("OO/1");
/* harmony import */ var _components_ProductItem_ProductItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("oxxF");
/* harmony import */ var _m_cart__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("We6d");
/* harmony import */ var _m_home_appModule__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("LIvt");
/* harmony import */ var _material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("EtfT");
/* harmony import */ var _material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _tools_jssStyled__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("COwg");
/* harmony import */ var _material_ui_icons_StarBorderRounded__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("n+Zn");
/* harmony import */ var _material_ui_icons_StarBorderRounded__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_StarBorderRounded__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("+FwM");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_icons_StarRounded__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("3F1g");
/* harmony import */ var _material_ui_icons_StarRounded__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_StarRounded__WEBPACK_IMPORTED_MODULE_19__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




















const Box = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Card"]).withConfig({
  displayName: "productItemBox__Box",
  componentId: "sc-1i837b0-0"
})(["display:flex;flex-direction:column;width:", ";padding:14px 20px 16px;&&&{box-shadow:none;}"], props => {
  var _props$width;

  return `${(_props$width = props.width) !== null && _props$width !== void 0 ? _props$width : 322}px`;
});
const ImgBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "productItemBox__ImgBox",
  componentId: "sc-1i837b0-1"
})(["align-self:center;> img{width:", ";height:", ";}"], props => {
  var _props$width2;

  return `${((_props$width2 = props.width) !== null && _props$width2 !== void 0 ? _props$width2 : 260) - 40}px`;
}, props => {
  var _props$width3;

  return `${(((_props$width3 = props.width) !== null && _props$width3 !== void 0 ? _props$width3 : 260) - 40) * 4 / 3}px`;
});
const Price = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "productItemBox__Price",
  componentId: "sc-1i837b0-2"
})(["display:flex;align-items:center;> aside{", ";font-size:", ";color:", ";}> main{font-size:", ";font-weight:400;text-decoration:line-through;color:", ";}"], _style_common__WEBPACK_IMPORTED_MODULE_4__[/* mpStyle */ "b"].fontType.xl, props => {
  var _props$width4;

  return `${((_props$width4 = props.width) !== null && _props$width4 !== void 0 ? _props$width4 : 260) / 10 - 2}px`;
}, _style_common__WEBPACK_IMPORTED_MODULE_4__[/* mpStyle */ "b"].red, props => {
  var _props$width5;

  return `${((_props$width5 = props.width) !== null && _props$width5 !== void 0 ? _props$width5 : 260) / 10 - 8}px`;
}, _style_common__WEBPACK_IMPORTED_MODULE_4__[/* mpStyle */ "b"].grey);
const Footer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "productItemBox__Footer",
  componentId: "sc-1i837b0-3"
})(["display:flex;&&&{.MuiButton-root{width:", ";min-width:", ";height:", ";padding:0;}.MuiSvgIcon-root{font-size:", ";}}"], props => {
  var _props$width6;

  return `${((_props$width6 = props.width) !== null && _props$width6 !== void 0 ? _props$width6 : 260) * .17}px`;
}, props => {
  var _props$width7;

  return `${((_props$width7 = props.width) !== null && _props$width7 !== void 0 ? _props$width7 : 260) * .17}px`;
}, props => {
  var _props$width8;

  return `${((_props$width8 = props.width) !== null && _props$width8 !== void 0 ? _props$width8 : 260) * .17}px`;
}, props => {
  var _props$width9;

  return `${((_props$width9 = props.width) !== null && _props$width9 !== void 0 ? _props$width9 : 260) * .1}px`;
});
const Name = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "productItemBox__Name",
  componentId: "sc-1i837b0-4"
})(["flex-grow:1;", ";font-size:", ";"], _style_common__WEBPACK_IMPORTED_MODULE_4__[/* mpStyle */ "b"].fontType.n, props => {
  var _props$width10;

  return `${((_props$width10 = props.width) !== null && _props$width10 !== void 0 ? _props$width10 : 260) / 10 - 10}px`;
});
const Star = Object(_tools_jssStyled__WEBPACK_IMPORTED_MODULE_16__[/* jssStyled */ "a"])('div')({});
const ProductItemBox = ({
  hideShopCartButton = false,
  hidePrice = false,
  groupQueue,
  product,
  width = 300,
  type = _m_home_appModule__WEBPACK_IMPORTED_MODULE_13__[/* HomeType */ "b"].home
}) => {
  var _product$img, _product$img$;

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_15__["useRouter"])();
  const {
    actions: actionsUpdateShopCartModel
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_8__[/* useStoreModel */ "b"])(_components_ProductItem_UpdateShopCart__WEBPACK_IMPORTED_MODULE_9__[/* updateShopCartModel */ "b"]);
  const {
    actions: actionsProductModel
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_8__[/* useStoreModel */ "b"])(_components_ProductItem_ProductItem__WEBPACK_IMPORTED_MODULE_11__[/* productModel */ "e"]);
  const {
    actions: actionsShopCartModel
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_8__[/* useStoreModel */ "b"])(_m_cart__WEBPACK_IMPORTED_MODULE_12__[/* ShopCartModel */ "b"]);

  const _width = width - 40;

  return __jsx(Box, {
    width: _width
  }, __jsx(ImgBox, {
    width: _width
  }, __jsx("img", {
    src: Object(_tools_img__WEBPACK_IMPORTED_MODULE_2__[/* dealImgUrl */ "a"])(product === null || product === void 0 ? void 0 : (_product$img = product.img) === null || _product$img === void 0 ? void 0 : (_product$img$ = _product$img[0]) === null || _product$img$ === void 0 ? void 0 : _product$img$.url),
    alt: ''
  })), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_5__[/* Space */ "b"], {
    h: 8
  }), !hidePrice && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(Price, {
    width: _width
  }, __jsx("aside", null, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_3__[/* dealMoney */ "c"])(product === null || product === void 0 ? void 0 : product.priceOut)), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_5__[/* Space */ "b"], {
    w: 16
  }), __jsx("main", null, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_3__[/* dealMoney */ "c"])(product === null || product === void 0 ? void 0 : product.priceMarket))), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_5__[/* Space */ "b"], {
    h: 5
  })), __jsx(Footer, {
    width: _width
  }, __jsx(Name, {
    width: _width
  }, product.name), !hideShopCartButton && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    variant: 'contained',
    color: 'secondary',
    size: 'small',
    onClick: async () => {
      if (type === _m_home_appModule__WEBPACK_IMPORTED_MODULE_13__[/* HomeType */ "b"].home) {
        const res = await actionsUpdateShopCartModel.openClick();

        if ((res === null || res === void 0 ? void 0 : res.num) > 0) {
          var _await$actionsProduct, _await$actionsProduct2;

          if ((_await$actionsProduct = await actionsProductModel.updateNumShopCart({
            product,
            number: ~~(res === null || res === void 0 ? void 0 : res.num)
          })) === null || _await$actionsProduct === void 0 ? void 0 : (_await$actionsProduct2 = _await$actionsProduct.updateNumShopCart) === null || _await$actionsProduct2 === void 0 ? void 0 : _await$actionsProduct2.id) {
            Object(_components_Message_Message__WEBPACK_IMPORTED_MODULE_10__[/* showMessage */ "b"])('操作成功');
            actionsShopCartModel.getList();
          }
        }
      } else if (type === _m_home_appModule__WEBPACK_IMPORTED_MODULE_13__[/* HomeType */ "b"].group) {
        await router.push({
          pathname: '/pc/groupProduct/[id]',
          query: {
            id: product.id
          }
        });
      }
    }
  }, type === _m_home_appModule__WEBPACK_IMPORTED_MODULE_13__[/* HomeType */ "b"].home && __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_7__["ShoppingCart"], null), type === _m_home_appModule__WEBPACK_IMPORTED_MODULE_13__[/* HomeType */ "b"].group && __jsx(_material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_14___default.a, null))), (groupQueue === null || groupQueue === void 0 ? void 0 : groupQueue.id) && __jsx(Star, null, [...Array(product.groupPrecision)].map((v, i) => i).map(value => {
    var _groupQueue$sumFillAm;

    return value + 1 > ((_groupQueue$sumFillAm = groupQueue.sumFillAmount) !== null && _groupQueue$sumFillAm !== void 0 ? _groupQueue$sumFillAm : 0) ? __jsx(_material_ui_icons_StarBorderRounded__WEBPACK_IMPORTED_MODULE_17___default.a, {
      key: `clickStar${value}`,
      fontSize: 'small',
      style: {
        color: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_18__["grey"][700]
      }
    }) : __jsx(_material_ui_icons_StarRounded__WEBPACK_IMPORTED_MODULE_19___default.a, {
      key: `clickStar${value}`,
      style: {
        color: '#FDD334'
      },
      fontSize: 'small'
    });
  })));
};

/***/ }),

/***/ "JHhN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ PcContentBox; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ TwoSide; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ PcHome; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./utils/view/pc/pcComponents/header/header.tsx
var header = __webpack_require__("RTgM");

// EXTERNAL MODULE: ./utils/view/pc/pcComponents/topAction/topAction.tsx
var topAction = __webpack_require__("51Ja");

// EXTERNAL MODULE: ./utils/view/pc/home/components/headerTab.tsx + 1 modules
var headerTab = __webpack_require__("1gZt");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./utils/components/Box/Box.tsx
var Box = __webpack_require__("cW92");

// EXTERNAL MODULE: ./utils/tools/dealKey.ts
var dealKey = __webpack_require__("+vfP");

// EXTERNAL MODULE: ./utils/style/common.ts
var common = __webpack_require__("ZtJr");

// EXTERNAL MODULE: ./utils/ModelAction/useStore.ts + 2 modules
var useStore = __webpack_require__("U81q");

// EXTERNAL MODULE: ./utils/view/m/home/components/PromotionFlashSale/PromotionFlashSale.tsx
var PromotionFlashSale = __webpack_require__("ytnY");

// EXTERNAL MODULE: ./utils/view/pc/pcComponents/productItemBox/productItemBox.tsx
var productItemBox = __webpack_require__("H0n8");

// EXTERNAL MODULE: ./utils/tools/utils.ts
var utils = __webpack_require__("cBzo");

// CONCATENATED MODULE: ./utils/view/pc/home/components/limitTime.tsx
var __jsx = external_react_default.a.createElement;









const limitTime_Box = external_styled_components_default.a.div.withConfig({
  displayName: "limitTime__Box",
  componentId: "sc-14w9f9f-0"
})([""]);
const Header = external_styled_components_default.a.div.withConfig({
  displayName: "limitTime__Header",
  componentId: "sc-14w9f9f-1"
})(["display:flex;align-items:center;", ";"], common["b" /* mpStyle */].fontType.xxl);
const Title = external_styled_components_default.a.div.withConfig({
  displayName: "limitTime__Title",
  componentId: "sc-14w9f9f-2"
})([""]);
const Tip = external_styled_components_default.a.div.withConfig({
  displayName: "limitTime__Tip",
  componentId: "sc-14w9f9f-3"
})(["width:28px;height:34px;border-radius:2px;background:#0D0D21;color:white;", ";display:grid;align-items:center;justify-items:center;"], common["b" /* mpStyle */].fontType.xl);
const Content = external_styled_components_default.a.div.withConfig({
  displayName: "limitTime__Content",
  componentId: "sc-14w9f9f-4"
})(["display:grid;grid-template-columns:repeat(3,1fr);grid-gap:16px;justify-items:center;"]);
const LimitTime = () => {
  var _statePromotionFlashS;

  const {
    state: statePromotionFlashSale,
    actions: actionsPromotionFlashSale
  } = Object(useStore["b" /* useStoreModel */])(PromotionFlashSale["b" /* promotionFlashSaleModel */]);
  Object(external_react_["useEffect"])(() => {
    actionsPromotionFlashSale.getData();
  }, [actionsPromotionFlashSale]);
  const calcDifferenceHours = actionsPromotionFlashSale.calcDifferenceHours();
  const calcDifferenceMinutes = actionsPromotionFlashSale.calcDifferenceMinutes();
  return __jsx(limitTime_Box, {
    id: 'LimitTime'
  }, ((_statePromotionFlashS = statePromotionFlashSale.nowLimitData) === null || _statePromotionFlashS === void 0 ? void 0 : _statePromotionFlashS.id) && __jsx(external_react_default.a.Fragment, null, __jsx(Header, null, __jsx(Title, null, statePromotionFlashSale.isNext && Object(dealKey["a" /* ll */])('距离下次抢购') || Object(dealKey["a" /* ll */])('限时选购')), __jsx(Box["b" /* Space */], {
    w: 18
  }), __jsx(Tip, null, Object(utils["k" /* padStart */])(calcDifferenceHours)[0]), __jsx(Box["b" /* Space */], {
    w: 6
  }), __jsx(Tip, null, Object(utils["k" /* padStart */])(calcDifferenceHours)[1]), __jsx(Box["b" /* Space */], {
    w: 6
  }), ":", __jsx(Box["b" /* Space */], {
    w: 6
  }), __jsx(Tip, null, Object(utils["k" /* padStart */])(calcDifferenceMinutes)[0]), __jsx(Box["b" /* Space */], {
    w: 6
  }), __jsx(Tip, null, Object(utils["k" /* padStart */])(calcDifferenceMinutes)[1])), __jsx(Box["b" /* Space */], {
    h: 24
  }), __jsx(Content, null, statePromotionFlashSale.productList.slice(0, 9).map(product => __jsx(productItemBox["a" /* ProductItemBox */], {
    key: `ProductItemOneRow_${product.id}`,
    product: product
  }))), __jsx(Box["b" /* Space */], {
    h: 46
  })));
};
// EXTERNAL MODULE: ./utils/view/pc/home/components/salesRank.tsx
var salesRank = __webpack_require__("ePdq");

// EXTERNAL MODULE: ./utils/view/m/home/components/ThemeSelection/ThemeSelection.tsx
var ThemeSelection = __webpack_require__("KTXQ");

// EXTERNAL MODULE: ./utils/tools/img.ts
var img = __webpack_require__("Oj7+");

// CONCATENATED MODULE: ./utils/view/pc/home/components/themeSelection.tsx
var themeSelection_jsx = external_react_default.a.createElement;








const themeSelection_Box = external_styled_components_default.a.div.withConfig({
  displayName: "themeSelection__Box",
  componentId: "oedtxf-0"
})(["display:grid;grid-gap:50px;"]);
const themeSelection_Title = external_styled_components_default.a.div.withConfig({
  displayName: "themeSelection__Title",
  componentId: "oedtxf-1"
})(["", ";color:", ";grid-area:1/1/2/4;justify-self:start;"], common["b" /* mpStyle */].fontType.xxl, common["b" /* mpStyle */].black);
const Img = external_styled_components_default.a.div.withConfig({
  displayName: "themeSelection__Img",
  componentId: "oedtxf-2"
})(["display:grid;grid-template-rows:1fr 1fr;justify-self:stretch;", ";background:rgb(200,200,200,.2);> img{width:100%;height:50%;}> section{> div{margin-top:", ";}}"], common["b" /* mpStyle */].fontType.n, common["b" /* mpStyle */].spacePx.xxs);
const ThemeBox = external_styled_components_default.a.div.withConfig({
  displayName: "themeSelection__ThemeBox",
  componentId: "oedtxf-3"
})(["display:grid;grid-template-rows:max-content max-content;grid-template-columns:repeat(3,300px);justify-items:center;"]);
const themeSelection_ThemeSelection = () => {
  const {
    state: statePromotionFlashSale,
    actions: actionsPromotionFlashSale
  } = Object(useStore["b" /* useStoreModel */])(ThemeSelection["b" /* themeSelectionModel */]);
  Object(external_react_["useEffect"])(() => {
    actionsPromotionFlashSale.getData();
  }, [actionsPromotionFlashSale]);
  return themeSelection_jsx(themeSelection_Box, {
    id: 'ThemeSelection'
  }, statePromotionFlashSale.themeSelectionData.map(themeData => {
    var _statePromotionFlashS, _statePromotionFlashS2;

    return themeSelection_jsx(ThemeBox, {
      key: `themeSelectionData_${themeData.id}`
    }, themeSelection_jsx(themeSelection_Title, null, themeData.title, themeSelection_jsx(Box["b" /* Space */], {
      h: 19
    })), themeSelection_jsx(Img, null, themeSelection_jsx("img", {
      src: Object(img["a" /* dealImgUrl */])(themeData.imgUrl),
      alt: ""
    }), themeSelection_jsx("section", null, themeSelection_jsx("div", null, themeData.remark))), (_statePromotionFlashS = statePromotionFlashSale.productListForTheme[themeData.id]) === null || _statePromotionFlashS === void 0 ? void 0 : (_statePromotionFlashS2 = _statePromotionFlashS.slice(0, 8)) === null || _statePromotionFlashS2 === void 0 ? void 0 : _statePromotionFlashS2.map(v => themeSelection_jsx(productItemBox["a" /* ProductItemBox */], {
      key: `statePromotionFlashSaleProductItem_${v.id}`,
      width: 290,
      product: v
    })));
  }));
};
// EXTERNAL MODULE: ./utils/view/pc/home/components/carousel.tsx
var carousel = __webpack_require__("OdW4");

// EXTERNAL MODULE: ./utils/view/pc/pcComponents/mainBox/mainBox.tsx
var mainBox = __webpack_require__("DrI1");

// EXTERNAL MODULE: ./utils/view/m/home/components/Tabs/Tabs.tsx
var Tabs = __webpack_require__("+CC5");

// EXTERNAL MODULE: ./utils/view/m/home/appModule.tsx + 1 modules
var appModule = __webpack_require__("LIvt");

// CONCATENATED MODULE: ./utils/view/pc/home/pcHome.tsx
var pcHome_jsx = external_react_default.a.createElement;














const PcContentBox = external_styled_components_default.a.div.withConfig({
  displayName: "pcHome__PcContentBox",
  componentId: "sc-14v76mp-0"
})(["max-width:1200px;margin:0 auto;"]);
const TwoSide = external_styled_components_default.a.div.withConfig({
  displayName: "pcHome__TwoSide",
  componentId: "sc-14v76mp-1"
})(["display:flex;> section{flex-grow:1;}> aside{flex-basis:210px;}"]);
const PcHome = () => {
  const {
    actions: actionsHomeTabs
  } = Object(useStore["b" /* useStoreModel */])(Tabs["b" /* HomeTabsModel */]);
  Object(external_react_["useEffect"])(() => {
    actionsHomeTabs.setHomeType(appModule["b" /* HomeType */].home);
  }, [actionsHomeTabs]);
  return pcHome_jsx(mainBox["a" /* MainBox */], null, pcHome_jsx(header["a" /* PcHeader */], null), pcHome_jsx(PcContentBox, null, pcHome_jsx(topAction["a" /* TopAction */], null), pcHome_jsx(headerTab["a" /* HeaderTab */], null), pcHome_jsx(carousel["a" /* Carousel */], null), pcHome_jsx(Box["b" /* Space */], {
    h: 50
  }), pcHome_jsx(TwoSide, null, pcHome_jsx("section", null, pcHome_jsx(LimitTime, null), pcHome_jsx(themeSelection_ThemeSelection, null)), pcHome_jsx("aside", null, pcHome_jsx(salesRank["a" /* SalesRank */], null)))), pcHome_jsx(Box["b" /* Space */], {
    h: 120
  }));
};

/***/ }),

/***/ "K0AU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("KaAA");
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tools_img__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Oj7+");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Bjmp");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ZtJr");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const CarouselBox = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__["styled"])(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__["Carousel"])({
  '& .slide img': {
    height: props => props.height
  },
  '& .thumbs-wrapper': {
    margin: '30px 0'
  },
  '& .thumb': {
    border: 'none',
    padding: 0,
    '&.selected': {
      border: `1px solid ${_style_common__WEBPACK_IMPORTED_MODULE_4__[/* mpStyle */ "b"].black}`
    },
    '&:hover': {
      border: `1px solid ${_style_common__WEBPACK_IMPORTED_MODULE_4__[/* mpStyle */ "b"].black}`
    }
  }
});

const CusCarousel = ({
  dataList,
  onClickItem,
  height,
  renderItem,
  showArrows = false,
  showIndicators = true,
  showThumbs = false
}) => {
  return __jsx(CarouselBox, {
    isAct: true,
    height: height,
    autoPlay: true,
    showThumbs: showThumbs,
    showArrows: showArrows,
    showStatus: false,
    showIndicators: showIndicators,
    infiniteLoop: true,
    onClickItem: onClickItem
  }, dataList === null || dataList === void 0 ? void 0 : dataList.map(renderItem ? item => renderItem(item) : item => __jsx("div", {
    key: `Carousel_${item.id}`
  }, __jsx("img", {
    src: Object(_tools_img__WEBPACK_IMPORTED_MODULE_2__[/* dealImgUrl */ "a"])(item.imgUrl),
    alt: ""
  }))));
};

/* harmony default export */ __webpack_exports__["a"] = (CusCarousel);

/***/ }),

/***/ "KMVQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DealNoAuth; });
/* harmony import */ var _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("U81q");
/* harmony import */ var _view_m_me_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("URg2");
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
const DealNoAuth = others => {
  const {
    state: stateMe,
    actions: actionsMe
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_0__[/* useStoreModel */ "b"])(_view_m_me_model__WEBPACK_IMPORTED_MODULE_1__[/* meModel */ "a"]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (!stateMe.user.id) {
      actionsMe.getLoginUser();
    }
  }, [actionsMe, stateMe.user.id]);
  return !stateMe.user.id || !Object(_tools_token__WEBPACK_IMPORTED_MODULE_7__[/* getToken */ "a"])() ? __jsx(Empty, null, __jsx(_RegisterHeader_RegisterHeader__WEBPACK_IMPORTED_MODULE_3__[/* RegisterHeader */ "a"], null), __jsx("main", null, __jsx("span", null, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_4__[/* ll */ "a"])('您未登录,请先登录')), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    fullWidth: true,
    variant: 'contained',
    color: 'secondary',
    onClick: actionsMe.toLogin
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_4__[/* ll */ "a"])('登录')))) : others;
};

/***/ }),

/***/ "KTXQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return themeSelectionModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeSelection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("+/yG");
/* harmony import */ var _graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("i7FU");
/* harmony import */ var _tools_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cBzo");
/* harmony import */ var _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("U81q");
/* harmony import */ var _components_ProductItem_ProductItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("oxxF");
/* harmony import */ var _ss_common_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("4Rmy");
/* harmony import */ var _tools_dealKey__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("+vfP");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _tools_img__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("Oj7+");
/* harmony import */ var _components_BScroll_BScroller__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("Z3gB");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const themeSelectionModel = Object(_ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_1__[/* modelFactory */ "c"])('themeSelectionModel', {
  themeSelectionData: [],
  productListForTheme: {}
}, {
  getData: async (value, option) => {
    var _res$getDataConfig$va, _res$getDataConfig, _res$getDataConfig$va2;

    const res = await option.query(_graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_2__[/* doc */ "b"].getDataConfig, {
      data: {
        type: _ss_common_enum__WEBPACK_IMPORTED_MODULE_6__[/* DictTypeEnum */ "e"].PromotionThemeSelect
      }
    });
    const themeList = (_res$getDataConfig$va = res === null || res === void 0 ? void 0 : (_res$getDataConfig = res.getDataConfig) === null || _res$getDataConfig === void 0 ? void 0 : (_res$getDataConfig$va2 = _res$getDataConfig.value) === null || _res$getDataConfig$va2 === void 0 ? void 0 : _res$getDataConfig$va2.list) !== null && _res$getDataConfig$va !== void 0 ? _res$getDataConfig$va : [];
    const productRes = await option.query(_graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_2__[/* doc */ "b"].productListByIds, {
      ids: themeList.reduce((pre, cur) => {
        var _cur$selectProductLis;

        return [...pre, ...((_cur$selectProductLis = cur === null || cur === void 0 ? void 0 : cur.selectProductList) !== null && _cur$selectProductLis !== void 0 ? _cur$selectProductLis : [])];
      }, [])
    });
    option.setData(Object(_tools_utils__WEBPACK_IMPORTED_MODULE_3__[/* fpMergePre */ "g"])({
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
  componentId: "sc-11cd74n-0"
})(["font-size:18px;font-weight:bold;padding-left:20px;"]);
const Theme = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div.withConfig({
  displayName: "ThemeSelection__Theme",
  componentId: "sc-11cd74n-1"
})(["width:100vw;position:relative;left:-3.125vw;margin-top:16px;> img{width:100vw;height:30vw;}> main,aside{color:white;text-shadow:0.1em 0.1em 0.2em black;position:absolute;}> main{top:8vw;left:20px;font-size:20px;font-weight:bold;}> aside{top:16vw;left:20px;font-size:16px;}"]);
const ProductList = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div.withConfig({
  displayName: "ThemeSelection__ProductList",
  componentId: "sc-11cd74n-2"
})(["white-space:nowrap;display:inline-block;> *{display:inline-block;margin:8px 16px 8px 0;width:35vw;}"]);
const ThemeSelection = () => {
  var _statePromotionFlashS;

  const {
    state: statePromotionFlashSale,
    actions: actionsPromotionFlashSale
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_4__[/* useStoreModel */ "b"])(themeSelectionModel);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    actionsPromotionFlashSale.getData();
  }, []);
  return __jsx("div", null, __jsx(Title, null, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_7__[/* ll */ "a"])('主题甄选')), (_statePromotionFlashS = statePromotionFlashSale.themeSelectionData) === null || _statePromotionFlashS === void 0 ? void 0 : _statePromotionFlashS.map(v => {
    var _statePromotionFlashS2;

    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      key: `themeSelectionDataImg${v.id}`
    }, __jsx(Theme, null, __jsx("img", {
      src: Object(_tools_img__WEBPACK_IMPORTED_MODULE_9__[/* dealImgUrl */ "a"])(v.imgUrl),
      alt: ''
    }), __jsx("main", null, v.title), __jsx("aside", null, v.remark)), __jsx(_components_BScroll_BScroller__WEBPACK_IMPORTED_MODULE_10__[/* BScroller */ "a"], {
      isX: true,
      boxWidth: 'calc(100vw - 20px)',
      boxHeight: 'auto'
    }, __jsx(ProductList, null, (_statePromotionFlashS2 = statePromotionFlashSale.productListForTheme[v.id]) === null || _statePromotionFlashS2 === void 0 ? void 0 : _statePromotionFlashS2.map(v => __jsx(_components_ProductItem_ProductItem__WEBPACK_IMPORTED_MODULE_5__[/* ProductItem */ "b"], {
      key: `statePromotionFlashSaleProductItem_${v.id}`,
      product: v
    })))));
  }));
};

/***/ }),

/***/ "LIvt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ HomeType; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ homeCarouselModel; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ HomeAppModule; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./utils/ss_common/enum.ts
var ss_common_enum = __webpack_require__("4Rmy");

// EXTERNAL MODULE: ./utils/ModelAction/modelUtil.ts
var modelUtil = __webpack_require__("+/yG");

// EXTERNAL MODULE: ./utils/view/m/home/components/Tabs/Tabs.tsx
var Tabs = __webpack_require__("+CC5");

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
})(["height:45px;box-shadow:", ";display:grid;grid-template-columns:96px 1fr 96px;align-items:center;"], common["b" /* mpStyle */].shadow['1']);
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
})(["display:flex;flex-direction:row-reverse;"]);
const HeaderSearch = ({
  homeType
}) => {
  const router = Object(router_["useRouter"])();
  return __jsx(Box, null, __jsx(Logo, null, __jsx("img", {
    src: '/img/home/logo.png',
    alt: ""
  })), __jsx(Title, null, Object(dealKey["a" /* ll */])(homeType === HomeType.group ? '拼团' : '逛店')), __jsx(Action, null, homeType === HomeType.home && __jsx(ShoppingCartIconButton["a" /* ShoppingCartIconButton */], null), __jsx(core_["IconButton"], {
    onClick: () => {
      router.push('/m/searchPage');
    }
  }, __jsx(icons_["Search"], null))));
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

// EXTERNAL MODULE: ./utils/tools/img.ts
var img = __webpack_require__("Oj7+");

// EXTERNAL MODULE: ./utils/components/Box/Box.tsx
var Box_Box = __webpack_require__("cW92");

// CONCATENATED MODULE: ./utils/view/m/home/appModule.tsx
var appModule_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable react-hooks/rules-of-hooks */















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
        type: ss_common_enum["e" /* DictTypeEnum */].HomeCarousel
      }
    }, {});

    const _ref = (res2 === null || res2 === void 0 ? void 0 : res2.getDataConfig) || {},
          {
      __typename
    } = _ref,
          rest = _objectWithoutProperties(_ref, ["__typename"]);

    const homeCarouselDataComfig = await option.query(doc["d" /* homeCarouselImgs */], {
      data: _objectSpread({}, rest)
    }, {});
    option.setData(Object(utils["g" /* fpMergePre */])({
      homeCarouselImgs: homeCarouselDataComfig === null || homeCarouselDataComfig === void 0 ? void 0 : homeCarouselDataComfig.homeCarouselImgs
    }));
  }
});
const CusSwipeImg = external_styled_components_default.a.div.withConfig({
  displayName: "appModule__CusSwipeImg",
  componentId: "eet2po-0"
})(["> aside{background:rgb(164,164,164,.4);color:white;position:absolute;top:4px;left:4px;padding:8px;border-radius:4px;font-size:small;display:flex;}"]);
const CommonBox = external_styled_components_default.a.div.withConfig({
  displayName: "appModule__CommonBox",
  componentId: "eet2po-1"
})(["padding-top:10px;padding-bottom:120px;display:flex;flex-direction:column;flex-grow:1;flex-shrink:1;overflow:auto;> *{margin-left:10px;margin-right:10px;}"]);
const CusCarouselBox = external_styled_components_default.a.div.withConfig({
  displayName: "appModule__CusCarouselBox",
  componentId: "eet2po-2"
})(["border-radius:10px;overflow:hidden;"]);
const HomeAppModule = type => function () {
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
    actions: actionsHomeTabs,
    state: stateHomeTabsModel
  } = Object(useStore["b" /* useStoreModel */])(Tabs["b" /* HomeTabsModel */]);
  Object(external_react_["useEffect"])(() => {
    actionsHomeCarouselModel.getHomeCarousel();
    actionsHomeTabs.getData();
  }, [actionsHomeCarouselModel, actionsHomeTabs]);
  Object(external_react_["useEffect"])(() => {
    actionsHomeTabs.setHomeType(type !== null && type !== void 0 ? type : HomeType.home);
  }, [actionsHomeTabs]);
  return appModule_jsx("div", null, appModule_jsx(HeaderSearch, {
    homeType: type !== null && type !== void 0 ? type : HomeType.home
  }), appModule_jsx(BScroller["a" /* BScroller */], {
    boxHeight: 'calc(100vh - 65px)'
  }, appModule_jsx(CommonBox, null, appModule_jsx(CusCarouselBox, null, (() => {
    var _stateHomeCarouselMod, _stateHomeCarouselMod2, _stateHomeCarouselMod3, _stateHomeCarouselMod4;

    const filterList = (_stateHomeCarouselMod = (_stateHomeCarouselMod2 = stateHomeCarouselModel.homeCarouselImgs) === null || _stateHomeCarouselMod2 === void 0 ? void 0 : (_stateHomeCarouselMod3 = _stateHomeCarouselMod2.value) === null || _stateHomeCarouselMod3 === void 0 ? void 0 : (_stateHomeCarouselMod4 = _stateHomeCarouselMod3.list) === null || _stateHomeCarouselMod4 === void 0 ? void 0 : _stateHomeCarouselMod4.filter(v => !v.isDisabled)) !== null && _stateHomeCarouselMod !== void 0 ? _stateHomeCarouselMod : [];
    return appModule_jsx(Swipe["a" /* default */], {
      height: '160px',
      dataList: filterList,
      renderItem: item => {
        var _item$objData, _item$objData2, _item$objData3, _item$objData4, _item$objData5, _item$objData6, _item$objData7;

        return appModule_jsx(CusSwipeImg, {
          key: `Carousel_${item.id}`
        }, appModule_jsx("img", {
          style: {
            height: '160px'
          },
          src: Object(img["a" /* dealImgUrl */])(item.imgUrl),
          alt: ""
        }), appModule_jsx("aside", null, appModule_jsx("section", null, item === null || item === void 0 ? void 0 : (_item$objData = item.objData) === null || _item$objData === void 0 ? void 0 : _item$objData.remark), appModule_jsx(Box_Box["b" /* Space */], {
          w: 4
        }), (item === null || item === void 0 ? void 0 : (_item$objData2 = item.objData) === null || _item$objData2 === void 0 ? void 0 : _item$objData2.effectiveDateStart) && appModule_jsx("main", null, "[ ", Object(utils["e" /* formatDate */])(item === null || item === void 0 ? void 0 : (_item$objData3 = item.objData) === null || _item$objData3 === void 0 ? void 0 : _item$objData3.effectiveDateStart, 'YYYY/MM/dd'), " - ", Object(utils["e" /* formatDate */])(item === null || item === void 0 ? void 0 : (_item$objData4 = item.objData) === null || _item$objData4 === void 0 ? void 0 : _item$objData4.effectiveDateEnd, 'YYYY/MM/dd'), " ]"), (item === null || item === void 0 ? void 0 : (_item$objData5 = item.objData) === null || _item$objData5 === void 0 ? void 0 : _item$objData5.startTime) && appModule_jsx("main", null, "[ ", Object(utils["e" /* formatDate */])(item === null || item === void 0 ? void 0 : (_item$objData6 = item.objData) === null || _item$objData6 === void 0 ? void 0 : _item$objData6.startTime, 'YYYY/MM/dd'), " - ", Object(utils["e" /* formatDate */])(item === null || item === void 0 ? void 0 : (_item$objData7 = item.objData) === null || _item$objData7 === void 0 ? void 0 : _item$objData7.endTime, 'YYYY/MM/dd'), " ]")));
      },
      onClickItem: index => {
        var _filterList$index, _filterList$index2, _stateHomeTabsModel$a, _filterList$index3, _stateHomeTabsModel$a2;

        if ((filterList === null || filterList === void 0 ? void 0 : (_filterList$index = filterList[index]) === null || _filterList$index === void 0 ? void 0 : _filterList$index.relatedObjType) === ss_common_enum["l" /* RelatedObjTypeEnum */].PromoCode) {
          router.push('/m/card');
        }

        if ((filterList === null || filterList === void 0 ? void 0 : (_filterList$index2 = filterList[index]) === null || _filterList$index2 === void 0 ? void 0 : _filterList$index2.relatedObjType) === ss_common_enum["l" /* RelatedObjTypeEnum */].PromotionFlashSale && (stateHomeTabsModel === null || stateHomeTabsModel === void 0 ? void 0 : (_stateHomeTabsModel$a = stateHomeTabsModel.appModuleConfig) === null || _stateHomeTabsModel$a === void 0 ? void 0 : _stateHomeTabsModel$a[ss_common_enum["b" /* AppModuleTypeEnum */].limitTime])) {
          router.push(`/m/home/[appModule]`, `/m/home/${ss_common_enum["b" /* AppModuleTypeEnum */].limitTime}`);
        }

        if ((filterList === null || filterList === void 0 ? void 0 : (_filterList$index3 = filterList[index]) === null || _filterList$index3 === void 0 ? void 0 : _filterList$index3.relatedObjType) === ss_common_enum["l" /* RelatedObjTypeEnum */].PromotionThemeSelect && (stateHomeTabsModel === null || stateHomeTabsModel === void 0 ? void 0 : (_stateHomeTabsModel$a2 = stateHomeTabsModel.appModuleConfig) === null || _stateHomeTabsModel$a2 === void 0 ? void 0 : _stateHomeTabsModel$a2[ss_common_enum["b" /* AppModuleTypeEnum */].themeSelection])) {
          router.push(`/m/home/[appModule]`, `/m/home/${ss_common_enum["b" /* AppModuleTypeEnum */].themeSelection}`);
        }
      }
    });
  })()), appModule_jsx("div", null, appModule_jsx(Tabs["a" /* HomeTabs */], {
    homeType: type !== null && type !== void 0 ? type : HomeType.home
  })))), appModule_jsx(FootBar["a" /* FootBar */], null));
};

/***/ }),

/***/ "M5o2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return usePcOrMobile; });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);

const usePcOrMobile = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_0__["useRouter"])();

  if (/\/pc\//.test(router.pathname)) {
    return {
      isPc: true
    };
  }

  return {
    isPc: false
  };
};

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
      setData(preData => Object(_tools_utils__WEBPACK_IMPORTED_MODULE_1__[/* fpMerge */ "f"])(preData, {
        open: true,
        dialogData: value,
        isEdit: -1,
        openResolve: resolve
      }));
    });
  },
  openEditClick: (value, {
    setData
  }) => setData(pre => Object(_tools_utils__WEBPACK_IMPORTED_MODULE_1__[/* fpMerge */ "f"])(pre, {
    open: true,
    dialogData: value.data,
    isEdit: value.index
  })),
  onClose: (value, {
    data,
    setData
  }) => {
    data.openResolve(false);
    setData(Object(_tools_utils__WEBPACK_IMPORTED_MODULE_1__[/* fpMergePre */ "g"])({
      open: false
    }));
    setTimeout(() => {
      setData(pre => Object(_tools_utils__WEBPACK_IMPORTED_MODULE_1__[/* fpMerge */ "f"])(Object(_tools_utils__WEBPACK_IMPORTED_MODULE_1__[/* fpSet */ "h"])(pre, 'dialogData', {}), {
        dialogData: initData
      }));
    }, 500);
  },
  setdialog: (value, {
    setData
  }) => setData(data => Object(_tools_utils__WEBPACK_IMPORTED_MODULE_1__[/* fpMerge */ "f"])(data, {
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
      option.setData(Object(_tools_utils__WEBPACK_IMPORTED_MODULE_5__[/* fpMergePre */ "g"])({
        autoHideDuration: 2000,
        msg_type: 'default',
        message: value,
        open: true
      }));
    } else {
      option.setData(Object(_tools_utils__WEBPACK_IMPORTED_MODULE_5__[/* fpMergePre */ "g"])(_objectSpread(_objectSpread({
        autoHideDuration: 2000,
        msg_type: 'default'
      }, value), {}, {
        open: true
      })));
    }
  },
  onClose: (value, option) => option.setData(Object(_tools_utils__WEBPACK_IMPORTED_MODULE_5__[/* fpMergePre */ "g"])({
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
    message: Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_7__[/* ll */ "a"])(mState.message),
    msg_type: mState.msg_type,
    onClose: () => actions.onClose()
  });
};
const showMessage = option => {
  _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_4__[/* originStore */ "a"]['messageModel'].actions.open(option);
  return;
};

/***/ }),

/***/ "OdW4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Carousel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("U81q");
/* harmony import */ var _m_home_appModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("LIvt");
/* harmony import */ var _components_Swipe_Swipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("K0AU");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _m_home_components_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("+CC5");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const CusSwipeImg = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "carousel__CusSwipeImg",
  componentId: "jz9tth-0"
})(["> aside{background:rgb(164,164,164,.4);color:white;position:absolute;top:4px;left:4px;padding:8px;border-radius:4px;font-size:small;display:flex;}"]);
const Carousel = () => {
  const {
    actions: actionsHomeCarouselModel,
    state: stateHomeCarouselModel
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_1__[/* useStoreModel */ "b"])(_m_home_appModule__WEBPACK_IMPORTED_MODULE_2__[/* homeCarouselModel */ "c"]);
  const {
    actions: actionsHomeTabs
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_1__[/* useStoreModel */ "b"])(_m_home_components_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_5__[/* HomeTabsModel */ "b"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    actionsHomeTabs.getData();
    actionsHomeCarouselModel.getHomeCarousel();
  }, [actionsHomeCarouselModel, actionsHomeTabs]);
  return __jsx("div", null, (() => {
    var _stateHomeCarouselMod, _stateHomeCarouselMod2, _stateHomeCarouselMod3, _stateHomeCarouselMod4;

    const filterList = (_stateHomeCarouselMod = (_stateHomeCarouselMod2 = stateHomeCarouselModel.homeCarouselImgs) === null || _stateHomeCarouselMod2 === void 0 ? void 0 : (_stateHomeCarouselMod3 = _stateHomeCarouselMod2.value) === null || _stateHomeCarouselMod3 === void 0 ? void 0 : (_stateHomeCarouselMod4 = _stateHomeCarouselMod3.list) === null || _stateHomeCarouselMod4 === void 0 ? void 0 : _stateHomeCarouselMod4.filter(v => !v.isDisabled)) !== null && _stateHomeCarouselMod !== void 0 ? _stateHomeCarouselMod : [];
    return __jsx(_components_Swipe_Swipe__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
      showArrows: true,
      showIndicators: false,
      height: '400px',
      dataList: filterList,
      onClickItem: index => {
        return;
      }
    });
  })());
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

/***/ "PpHw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ homeCategorySelectionModel; });

// UNUSED EXPORTS: CategorySelection

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core/colors"
var colors_ = __webpack_require__("+FwM");

// EXTERNAL MODULE: external "@material-ui/icons"
var icons_ = __webpack_require__("2kat");

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

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

// EXTERNAL MODULE: ./utils/view/m/home/components/Tabs/Tabs.tsx
var Tabs = __webpack_require__("+CC5");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./utils/view/m/home/components/CategorySelection/CategorySelection.tsx
var CategorySelection_jsx = external_react_default.a.createElement;














const homeCategorySelectionModel = Object(modelUtil["c" /* modelFactory */])('HomeCategorySelection', {
  listData: [],
  total: 0,
  actId: ''
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
    option.setData(Object(utils["g" /* fpMergePre */])({
      listData: res === null || res === void 0 ? void 0 : (_res$categoryList = res.categoryList) === null || _res$categoryList === void 0 ? void 0 : _res$categoryList.list
    }));
  },
  changeActId: async (value, option) => {
    option.setData(Object(utils["g" /* fpMergePre */])({
      actId: value !== null && value !== void 0 ? value : ''
    }));
  }
});
const ButtonBaseBox = external_styled_components_default()(core_["ButtonBase"]).withConfig({
  displayName: "CategorySelection__ButtonBaseBox",
  componentId: "iuqsl-0"
})(["&&&{width:100%;height:60px;display:flex;border-radius:8px;overflow:hidden;margin-bottom:10px;background:", ";> img{height:100%;width:70%;}> span{flex:1;color:#fff;display:flex;align-items:center;justify-content:center;}}"], colors_["grey"][700]);
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
  } = Object(useStore["b" /* useStoreModel */])(Tabs["b" /* HomeTabsModel */]);
  Object(external_react_["useEffect"])(() => {
    homeCategorySelectionActions.getList();
  }, []);
  return CategorySelection_jsx("div", null, !!hsGetLoad(doc["a" /* categoryList */]) && CategorySelection_jsx(Loading, null), homeCategorySelectionState === null || homeCategorySelectionState === void 0 ? void 0 : (_homeCategorySelectio = homeCategorySelectionState.listData) === null || _homeCategorySelectio === void 0 ? void 0 : _homeCategorySelectio.map(value => CategorySelection_jsx(ButtonBaseBox, {
    onClick: () => {
      router.push(`/m/category/[id]${Object(utils["d" /* dealUrlQuery */])({
        homeType: homeTabsState.homeType
      })}`, `/m/category/${value.id}${Object(utils["d" /* dealUrlQuery */])({
        homeType: homeTabsState.homeType
      })}`);
    },
    key: `homeCategorySelectionState_${value.id}`
  }, CategorySelection_jsx("img", {
    src: Object(img["a" /* dealImgUrl */])(value.imgUrl),
    alt: ""
  }), CategorySelection_jsx("span", null, value.name, CategorySelection_jsx(icons_["KeyboardArrowRight"], null)))));
};
/* harmony default export */ var CategorySelection_CategorySelection = __webpack_exports__["a"] = (CategorySelection);

/***/ }),

/***/ "RTgM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PcHeader; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tools_dealKey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("+vfP");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Box_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("cW92");
/* harmony import */ var _style_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("ZtJr");
/* harmony import */ var _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("U81q");
/* harmony import */ var _m_home_components_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("+CC5");
/* harmony import */ var _m_home_appModule__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("LIvt");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const HeaderBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "header__HeaderBox",
  componentId: "lshy28-0"
})(["width:100%;height:60px;background:#0D0D21;display:grid;align-items:center;justify-items:center;"]);
const ContentBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "header__ContentBox",
  componentId: "lshy28-1"
})(["width:1200px;display:grid;grid-template-columns:max-content 1fr 520px;color:white;align-items:center;"]);
const Welcome = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "header__Welcome",
  componentId: "lshy28-2"
})(["", ";color:#FFFFFF;"], _style_common__WEBPACK_IMPORTED_MODULE_5__[/* mpStyle */ "b"].fontType.s);
const Center = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "header__Center",
  componentId: "lshy28-3"
})(["&&&{.MuiButtonBase-root{width:80px;height:28px;background:#F84033;border-radius:4px;", ";font-weight:600;color:#FFFFFF;padding:0;}}"], _style_common__WEBPACK_IMPORTED_MODULE_5__[/* mpStyle */ "b"].fontType.s);
const Right = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "header__Right",
  componentId: "lshy28-4"
})(["display:flex;justify-content:flex-end;align-items:center;"]);
const Tabs = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "header__Tabs",
  componentId: "lshy28-5"
})(["height:60px;display:grid;grid-auto-flow:column;"]);
const TabButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ButtonBase"]).withConfig({
  displayName: "header__TabButton",
  componentId: "lshy28-6"
})(props => ({
  '&.MuiButtonBase-root': _objectSpread({
    padding: '0 21px',
    borderRadius: 0,
    color: 'white'
  }, props.$isAct ? {
    color: '#0D0D21',
    background: '#FFFFFF'
  } : {})
}));
const PcHeader = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"])();
  const {
    state: stateHomeTabsModel
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_6__[/* useStoreModel */ "b"])(_m_home_components_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_7__[/* HomeTabsModel */ "b"]);
  return __jsx(HeaderBox, null, __jsx(ContentBox, null, __jsx(Tabs, null, __jsx(TabButton, {
    $isAct: stateHomeTabsModel.homeType === _m_home_appModule__WEBPACK_IMPORTED_MODULE_8__[/* HomeType */ "b"].home,
    onClick: () => {
      router.push('/pc/home');
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_2__[/* ll */ "a"])('零售超市')), __jsx(TabButton, {
    $isAct: stateHomeTabsModel.homeType === _m_home_appModule__WEBPACK_IMPORTED_MODULE_8__[/* HomeType */ "b"].group,
    onClick: () => {
      router.push('/pc/group');
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_2__[/* ll */ "a"])('团购商城'))), __jsx(Center, null, __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_4__[/* Space */ "b"], {
    w: 20
  })), __jsx(Right, null, __jsx(Welcome, null, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_2__[/* ll */ "a"])('晚上好, 欢迎来到马佩莱超市!')), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_4__[/* Space */ "b"], {
    w: 20
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    style: {
      'width': '80px',
      'height': '28px',
      'background': '#F84033',
      'borderRadius': '4px',
      fontSize: '14px',
      padding: '6px 0'
    },
    variant: 'contained',
    color: 'secondary'
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_2__[/* ll */ "a"])('登录/注册')), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_4__[/* Space */ "b"], {
    w: 32
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: 'text',
    color: 'inherit'
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_2__[/* ll */ "a"])('帮助中心')), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_4__[/* Space */ "b"], {
    w: 22
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
    style: {
      height: '16px',
      alignSelf: 'center'
    },
    light: true,
    flexItem: true,
    orientation: 'vertical'
  }), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_4__[/* Space */ "b"], {
    w: 22
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: 'text',
    color: 'inherit'
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_2__[/* ll */ "a"])('掌上超市')))));
};

/***/ }),

/***/ "SvrD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ CategoryPageModel; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ categoryItemModel; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ CategoryPage; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./utils/ModelAction/useStore.ts + 2 modules
var useStore = __webpack_require__("U81q");

// EXTERNAL MODULE: external "@material-ui/icons"
var icons_ = __webpack_require__("2kat");

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: ./utils/tools/utils.ts
var utils = __webpack_require__("cBzo");

// EXTERNAL MODULE: ./utils/components/HeaderTitle/HeaderTitle.tsx
var HeaderTitle = __webpack_require__("B42p");

// EXTERNAL MODULE: ./utils/graphqlTypes/doc/index.ts + 1 modules
var doc = __webpack_require__("i7FU");

// EXTERNAL MODULE: ./utils/components/BScroll/BScroller.tsx
var BScroller = __webpack_require__("Z3gB");

// EXTERNAL MODULE: ./utils/ModelAction/modelUtil.ts
var modelUtil = __webpack_require__("+/yG");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@material-ui/core/colors"
var colors_ = __webpack_require__("+FwM");

// EXTERNAL MODULE: ./utils/tools/img.ts
var img = __webpack_require__("Oj7+");

// EXTERNAL MODULE: ./utils/components/ProductItem/ProductItem.tsx
var ProductItem = __webpack_require__("oxxF");

// EXTERNAL MODULE: ./utils/tools/dealKey.ts
var dealKey = __webpack_require__("+vfP");

// CONCATENATED MODULE: ./utils/components/NoData/NoData.tsx
var __jsx = external_react_default.a.createElement;


const NoData = () => {
  return __jsx("div", {
    style: {
      textAlign: 'center'
    }
  }, Object(dealKey["a" /* ll */])('暂无数据'));
};
// EXTERNAL MODULE: ./utils/ss_common/enum.ts
var ss_common_enum = __webpack_require__("4Rmy");

// EXTERNAL MODULE: ./utils/components/ProductItem/UpdateShopCart.tsx
var UpdateShopCart = __webpack_require__("vo3K");

// EXTERNAL MODULE: ./utils/view/m/home/appModule.tsx + 1 modules
var appModule = __webpack_require__("LIvt");

// EXTERNAL MODULE: ./utils/view/m/home/components/Tabs/Tabs.tsx
var Tabs = __webpack_require__("+CC5");

// CONCATENATED MODULE: ./utils/view/m/category/[id].tsx
var _id_jsx = external_react_default.a.createElement;




















const CategoryPageModel = Object(modelUtil["c" /* modelFactory */])('CategoryPage', {
  productList: [],
  categoryList: [],
  actCatId: ''
}, {
  getProductList: async (value, option) => {
    var _res$productsInCatego, _res$productsInCatego2, _res$categoryList$lis, _res$categoryList;

    const res = await option.query(doc["b" /* doc */].productsInCategory, {
      data: value.categoryItemInput,
      productItemInput: value.productItemInput
    });
    option.setData(Object(utils["g" /* fpMergePre */])({
      productList: (_res$productsInCatego = res === null || res === void 0 ? void 0 : (_res$productsInCatego2 = res.productsInCategory) === null || _res$productsInCatego2 === void 0 ? void 0 : _res$productsInCatego2.list) !== null && _res$productsInCatego !== void 0 ? _res$productsInCatego : [],
      categoryList: [...((_res$categoryList$lis = res === null || res === void 0 ? void 0 : (_res$categoryList = res.categoryList) === null || _res$categoryList === void 0 ? void 0 : _res$categoryList.list) !== null && _res$categoryList$lis !== void 0 ? _res$categoryList$lis : [])]
    }));
  },
  changeActCatId: async (value, option) => {
    option.setData(Object(utils["g" /* fpMergePre */])({
      actCatId: value !== null && value !== void 0 ? value : ''
    }));
  }
});
const Box = external_styled_components_default()('div').withConfig({
  displayName: "id__Box",
  componentId: "qp4xb8-0"
})(["padding:18px 20px 0;> header{font-size:18px;font-weight:bold;margin:10px 0;}"]);
const CategoryItemStyle = external_styled_components_default()(core_["ButtonBase"]).withConfig({
  displayName: "id__CategoryItemStyle",
  componentId: "qp4xb8-1"
})(["&&&{width:100%;height:60px;display:flex;border-radius:8px;overflow:hidden;margin-bottom:10px;background:", ";> img{height:100%;width:70%;}> span{flex:1;color:#fff;display:flex;align-items:center;justify-content:center;}}"], colors_["grey"][700]);
const categoryItemModel = Object(modelUtil["c" /* modelFactory */])('categoryItemModel', {
  test: '',
  category: {}
}, {
  calcCatLevel: (value, option) => {
    var _option$data;

    const dealLevel = (obj, level = 1) => {
      var _obj$parentCategory;

      if (!(obj === null || obj === void 0 ? void 0 : obj.parentCategory) || (obj === null || obj === void 0 ? void 0 : (_obj$parentCategory = obj.parentCategory) === null || _obj$parentCategory === void 0 ? void 0 : _obj$parentCategory.id) === ss_common_enum["c" /* CategoryRootName */]) return level;
      return dealLevel(obj === null || obj === void 0 ? void 0 : obj.parentCategory, level + 1);
    };

    return dealLevel((_option$data = option.data) === null || _option$data === void 0 ? void 0 : _option$data.category);
  },
  getLevel: async (value, option) => {
    return await option.query(doc["b" /* doc */].categoryLevel, {
      data: value
    });
  },
  getCategory: async (value, option) => {
    var _res$categoryRootPare;

    const res = await option.query(doc["b" /* doc */].categoryRootParent, {
      categoryItemInput: value
    });
    option.setData(Object(utils["g" /* fpMergePre */])({
      category: (_res$categoryRootPare = res === null || res === void 0 ? void 0 : res.categoryRootParent) !== null && _res$categoryRootPare !== void 0 ? _res$categoryRootPare : {}
    }));
    return res === null || res === void 0 ? void 0 : res.categoryRootParent;
  }
});
const ListBox = external_styled_components_default.a.div.withConfig({
  displayName: "id__ListBox",
  componentId: "qp4xb8-2"
})(["display:grid;grid-template-columns:repeat(", ",1fr);grid-gap:16px;"], props => props.columns || 2);
const CategoryPage = () => {
  var _ref, _router$query, _stateCategoryItemMod, _stateCategoryItemMod2, _stateCategoryItemMod3;

  const router = Object(router_["useRouter"])();
  const id = (_ref = (_router$query = router.query) === null || _router$query === void 0 ? void 0 : _router$query.id) !== null && _ref !== void 0 ? _ref : '';
  const {
    state: stateCPM,
    actions: actionsCPM,
    getLoad
  } = Object(useStore["b" /* useStoreModel */])(CategoryPageModel);
  const {
    actions: actionsCI,
    state: stateCategoryItemModel
  } = Object(useStore["b" /* useStoreModel */])(categoryItemModel);
  const {
    state: stateHomeTabs,
    actions: actionsHomeTabs
  } = Object(useStore["b" /* useStoreModel */])(Tabs["b" /* HomeTabsModel */]);
  Object(external_react_["useEffect"])(() => {
    var _ref2;

    actionsHomeTabs.setHomeType((_ref2 = router.query.homeType) !== null && _ref2 !== void 0 ? _ref2 : appModule["b" /* HomeType */].home);
  }, [actionsHomeTabs, router.query.homeType]);

  const CategoryItem = v => {
    return _id_jsx(CategoryItemStyle, {
      key: `CategoryItem_${v.id}`,
      onClick: async () => {
        var _await$actionsCI$getL;

        const _query = Object(utils["d" /* dealUrlQuery */])({
          homeType: router.query.homeType
        });

        if (((_await$actionsCI$getL = await actionsCI.getLevel({
          id: v.id
        })) === null || _await$actionsCI$getL === void 0 ? void 0 : _await$actionsCI$getL.categoryLevel) === 3) {
          await router_default.a.push(`/m/productList/[id]${_query}`, `/m/productList/${v.id}${_query}`);
        } else {
          await router_default.a.push(`/m/category/[id]${_query}`, `/m/category/${v.id}${_query}`);
        }
      }
    }, _id_jsx("img", {
      src: Object(img["a" /* dealImgUrl */])(v.imgUrl),
      alt: ""
    }), _id_jsx("span", null, v.name, _id_jsx(icons_["KeyboardArrowRight"], null)));
  };

  Object(external_react_["useEffect"])(() => {
    if (id) {
      actionsCPM.getProductList({
        categoryItemInput: {
          id
        },
        productItemInput: {
          isGroup: router.query.homeType === appModule["b" /* HomeType */].group ? 1 : 0
        }
      });
      actionsCI.getCategory({
        id
      });
    }
  }, [actionsCI, actionsCPM, id, router.query.homeType]);
  return _id_jsx("div", null, _id_jsx(HeaderTitle["a" /* HeaderTitle */], {
    title: '',
    showCart: router.query.homeType === appModule["b" /* HomeType */].home,
    showSearch: true
  }), !!getLoad(doc["b" /* doc */].productsInCategory) && _id_jsx(core_["LinearProgress"], null), _id_jsx(core_["Breadcrumbs"], {
    style: {
      margin: '8px 0 0 8px'
    },
    separator: "\u203A",
    "aria-label": "breadcrumb"
  }, [(_stateCategoryItemMod = stateCategoryItemModel.category) === null || _stateCategoryItemMod === void 0 ? void 0 : (_stateCategoryItemMod2 = _stateCategoryItemMod.parentCategory) === null || _stateCategoryItemMod2 === void 0 ? void 0 : _stateCategoryItemMod2.parentCategory, (_stateCategoryItemMod3 = stateCategoryItemModel.category) === null || _stateCategoryItemMod3 === void 0 ? void 0 : _stateCategoryItemMod3.parentCategory].filter(v => !!(v === null || v === void 0 ? void 0 : v.name) && (v === null || v === void 0 ? void 0 : v.name) !== ss_common_enum["c" /* CategoryRootName */]).map(e => _id_jsx(core_["Link"], {
    key: `Breadcrumbs${e === null || e === void 0 ? void 0 : e.id}`,
    color: "inherit",
    href: "#",
    onClick: async () => {
      const _query = Object(utils["d" /* dealUrlQuery */])({
        homeType: router.query.homeType
      });

      await router_default.a.push(`/m/category/[id]${_query}`, `/m/category/${e === null || e === void 0 ? void 0 : e.id}${_query}`);
    }
  }, e === null || e === void 0 ? void 0 : e.name)), _id_jsx(core_["Typography"], {
    color: "textPrimary"
  }, stateCategoryItemModel.category.name)), _id_jsx(BScroller["a" /* BScroller */], {
    boxHeight: 'calc(100vh - 60px)'
  }, _id_jsx(Box, null, stateCPM.categoryList.length === 0 && stateCPM.productList.length === 0 && _id_jsx(NoData, null) || _id_jsx(external_react_default.a.Fragment, null, stateCPM.categoryList.map(value => CategoryItem(value)), _id_jsx("header", null, Object(dealKey["a" /* ll */])('热门推荐')), stateCPM.productList.length === 0 && _id_jsx(NoData, null), _id_jsx(ListBox, {
    columns: stateHomeTabs.homeType === appModule["b" /* HomeType */].group ? 1 : 2
  }, stateCPM.productList.map(value => stateHomeTabs.homeType === appModule["b" /* HomeType */].group && _id_jsx(ProductItem["a" /* GroupProductItem */], {
    product: value,
    key: `ProductItem_${value.id}`
  }) || _id_jsx(ProductItem["b" /* ProductItem */], {
    key: `ProductItem_${value.id}`,
    product: value
  })))))), _id_jsx(UpdateShopCart["a" /* UpdateShopCart */], null));
};

/***/ }),

/***/ "TcOc":
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
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("We6d");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ss_common_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("4Rmy");
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









const selectAddressModel = Object(_commonModel_dialog__WEBPACK_IMPORTED_MODULE_2__[/* dialogModelFactory */ "a"])('selectAddressModel', {});
const AddressBox = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div.withConfig({
  displayName: "SelectAddress__AddressBox",
  componentId: "sc-17fhmye-0"
})(["display:grid;grid-template-columns:1fr min-content;grid-template-rows:repeat(3,1fr);grid-row-gap:8px;margin-bottom:16px;> header{font-size:16px;font-weight:bold;}> aside{grid-area:1/2/4/3;}"]);
const Footer = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div.withConfig({
  displayName: "SelectAddress__Footer",
  componentId: "sc-17fhmye-1"
})([""]);
const SelectAddress = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  const {
    state: stateSelectAddressModel,
    actions: actionsSelectAddressModel
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_3__[/* useStoreModel */ "b"])(selectAddressModel);
  const {
    state: stateShopCartModel,
    actions: actionsShopCartModel
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_3__[/* useStoreModel */ "b"])(_index__WEBPACK_IMPORTED_MODULE_5__[/* ShopCartModel */ "b"]);
  const addressList = stateShopCartModel.dealAddressList(stateShopCartModel);
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Dialog"], {
    open: stateSelectAddressModel.open,
    onClose: actionsSelectAddressModel.onClose
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["DialogTitle"], null, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_4__[/* ll */ "a"])('选择地址')), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["DialogContent"], null, addressList.map(v => __jsx(AddressBox, {
    key: `DialogTitleAddressBox_${v.id}`
  }, __jsx("header", null, v.name), __jsx("main", null, v.address), __jsx("footer", null, `${v.city} ${v.province} ${v.zip}`), __jsx("aside", null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Radio"], {
    onChange: () => {
      stateSelectAddressModel.openResolve(v.id);
      actionsSelectAddressModel.onClose();
    },
    checked: v.id === stateShopCartModel.form.addressId
  })))), __jsx(Footer, null, stateShopCartModel.form.pickUpType === _ss_common_enum__WEBPACK_IMPORTED_MODULE_8__[/* PickUpTypeEnum */ "i"].Delivery && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    fullWidth: true,
    variant: 'contained',
    color: 'secondary',
    onClick: () => {
      router.push('/m/me/myAddress/edit/[id]', '/m/me/myAddress/edit/0');
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_4__[/* ll */ "a"])('添加新地址')))));
};

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
    graphQLQuery()(doc["b" /* doc */].refreshToken.doc, {
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
        router_default.a.push('/m/login');
      }
    }).catch(err => {
      ssLog(err);
      Object(Message["b" /* showMessage */])({
        message: '请重新登录'
      });
      router_default.a.push('/m/login');
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
          Object(Message["b" /* showMessage */])({
            message: '请重新登录'
          });
          router_default.a.push('/m/login'); // if (message.includes('first')) {
          //   refreshToken()
          // } else {
          // }
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
        Object(Message["b" /* showMessage */])({
          message: '请重新登录'
        });
        router_default.a.push('/m/login'); // if (errMsg.includes('first') && getToken('refreshtoken')) {
        //   refreshToken()
        // } else {
        // }
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
  const _key = key && Array.isArray(key) && dealNameSpace(key[0], key[1]) || key || model.name;

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
  const query = Object(external_react_["useCallback"])(async (queryDoc, params, option) => {
    const queryDocString = queryDoc.doc;
    setLoad(queryDocString, true);
    const res = await graphQLQuery()(queryDocString, params, option).catch(e => {
      setError(queryDocString, e);
    }).finally(() => {
      setLoad(queryDocString, false);
    });
    return res === null || res === void 0 ? void 0 : res.data;
  }, [setError, setLoad]);
  const mutate = Object(external_react_["useCallback"])(async (mutationDoc, params, option) => {
    const mutationDocString = mutationDoc.doc;
    setLoad(mutationDocString, true);
    const res = await graphQLMutate()(mutationDocString, params, option).catch(e => {
      setError(mutationDocString, e);
    }).finally(() => {
      setLoad(mutationDocString, false);
    });
    return res === null || res === void 0 ? void 0 : res.data;
  }, [setError, setLoad]);

  if (Object.keys(originStore[_key].actions).length === 0 && originStore[_key].actions.constructor === Object) {
    Object.keys(actions).forEach(value => {
      originStore[_key].actions[value] = v => actions[value](v, useStore_objectSpread(useStore_objectSpread({}, modelUtil["a" /* baseActionOption */]), {}, {
        data: originStore[_key].state,
        actions: originStore[_key].actions,
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
        actions: originStore[_key].actions,
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
      var _query$doc, _query$doc$loc, _query$doc$loc$source;

      return originStore[_key].state.fetchLoad[query === null || query === void 0 ? void 0 : (_query$doc = query.doc) === null || _query$doc === void 0 ? void 0 : (_query$doc$loc = _query$doc.loc) === null || _query$doc$loc === void 0 ? void 0 : (_query$doc$loc$source = _query$doc$loc.source) === null || _query$doc$loc$source === void 0 ? void 0 : _query$doc$loc$source.body] ? 1 : 0;
    }
  };
};

/***/ }),

/***/ "URg2":
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
  await next_router__WEBPACK_IMPORTED_MODULE_0___default.a.push('/m/login');
};

const meModel = Object(_ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_4__[/* modelFactory */ "c"])('meModel', {
  user: {}
}, {
  getLoginUser: async (value, option) => {
    var _await$option$query;

    const res = (_await$option$query = await option.query(_graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_3__[/* doc */ "b"].oneUser)) === null || _await$option$query === void 0 ? void 0 : _await$option$query.oneUser;
    option.setData(Object(_tools_utils__WEBPACK_IMPORTED_MODULE_1__[/* fpMergePre */ "g"])({
      user: res
    }));
    return res;
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

/***/ "We6d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ pageTypeEnum; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ ShopCartModel; });
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

// EXTERNAL MODULE: ./utils/view/m/cart/CartProduct.tsx
var CartProduct = __webpack_require__("6saQ");

// EXTERNAL MODULE: ./utils/components/BScroll/BScroller.tsx
var BScroller = __webpack_require__("Z3gB");

// EXTERNAL MODULE: ./utils/components/NoAuth/NoAuth.tsx
var NoAuth = __webpack_require__("KMVQ");

// EXTERNAL MODULE: ./utils/components/Box/Box.tsx
var Box = __webpack_require__("cW92");

// EXTERNAL MODULE: ./utils/view/m/cart/components/InputPromoCode.tsx
var InputPromoCode = __webpack_require__("p0Nc");

// EXTERNAL MODULE: external "@material-ui/icons/Close"
var Close_ = __webpack_require__("j08L");
var Close_default = /*#__PURE__*/__webpack_require__.n(Close_);

// EXTERNAL MODULE: ./utils/components/ProductItem/UpdateShopCart.tsx
var UpdateShopCart = __webpack_require__("vo3K");

// CONCATENATED MODULE: ./utils/view/m/cart/shopCart.tsx
var __jsx = external_react_default.a.createElement;


















const BoxContain = external_styled_components_default.a.section.withConfig({
  displayName: "shopCart__BoxContain",
  componentId: "z4gqjv-0"
})(["padding:0 20px;"]);
const Title = external_styled_components_default.a.div.withConfig({
  displayName: "shopCart__Title",
  componentId: "z4gqjv-1"
})(["font-size:18px;font-weight:bold;margin:16px 0 12px;"]);
const PromoCode = external_styled_components_default.a.div.withConfig({
  displayName: "shopCart__PromoCode",
  componentId: "z4gqjv-2"
})(["display:flex;> aside{margin-left:8px;}"]);
const Money = external_styled_components_default.a.div.withConfig({
  displayName: "shopCart__Money",
  componentId: "z4gqjv-3"
})(["display:flex;justify-content:space-between;"]);
const FixFooter = external_styled_components_default()(core_["Box"]).withConfig({
  displayName: "shopCart__FixFooter",
  componentId: "z4gqjv-4"
})(["padding:20px;position:fixed;bottom:0;width:100vw;box-sizing:border-box;background:#fff;"]);
const ShopCartPage = () => {
  const {
    state: stateShopCartModel,
    actions: actionsShopCartModel,
    getLoad
  } = Object(useStore["b" /* useStoreModel */])(ShopCartModel);
  const {
    actions: actionsInputPromoCodeModel
  } = Object(useStore["b" /* useStoreModel */])(InputPromoCode["b" /* inputPromoCodeModel */]);
  Object(external_react_["useEffect"])(() => {
    if (stateShopCartModel.shopCartList.length === 0) {
      actionsShopCartModel.getList();
    }
  }, [actionsShopCartModel, stateShopCartModel.shopCartList.length]);
  Object(external_react_["useEffect"])(() => {
    if (stateShopCartModel.user.id && localStorage.getItem(`promoCode_${stateShopCartModel.user.id}`)) {
      actionsShopCartModel.dealPromoCode(`${localStorage.getItem(`promoCode_${stateShopCartModel.user.id}`)}`);
    }
  }, [actionsShopCartModel, stateShopCartModel.user.id]);
  const productNumber = stateShopCartModel.dealProductNumber(stateShopCartModel);
  const productSubtotal = Object(utils["c" /* dealMoney */])(stateShopCartModel.dealProductTotal(stateShopCartModel));
  const promoCode = stateShopCartModel.promoCode;
  const discountProduct = stateShopCartModel.shopCartList.filter(v => {
    var _v$product, _v$product$category, _v$product2, _v$product2$category, _v$product2$category$, _v$product3, _v$product3$category, _v$product3$category$, _v$product3$category$2;

    return [(_v$product = v.product) === null || _v$product === void 0 ? void 0 : (_v$product$category = _v$product.category) === null || _v$product$category === void 0 ? void 0 : _v$product$category.id, (_v$product2 = v.product) === null || _v$product2 === void 0 ? void 0 : (_v$product2$category = _v$product2.category) === null || _v$product2$category === void 0 ? void 0 : (_v$product2$category$ = _v$product2$category.parentCategory) === null || _v$product2$category$ === void 0 ? void 0 : _v$product2$category$.id, (_v$product3 = v.product) === null || _v$product3 === void 0 ? void 0 : (_v$product3$category = _v$product3.category) === null || _v$product3$category === void 0 ? void 0 : (_v$product3$category$ = _v$product3$category.parentCategory) === null || _v$product3$category$ === void 0 ? void 0 : (_v$product3$category$2 = _v$product3$category$.parentCategory) === null || _v$product3$category$2 === void 0 ? void 0 : _v$product3$category$2.id].includes(promoCode.productCategory);
  });
  const discountProductAmount = discountProduct.reduce((previousValue, currentValue) => {
    var _currentValue$product;

    return previousValue + Object(utils["b" /* dealMaybeNumber */])(currentValue.number) * Object(utils["b" /* dealMaybeNumber */])((_currentValue$product = currentValue.product) === null || _currentValue$product === void 0 ? void 0 : _currentValue$product.priceOut);
  }, 0); // 计算折扣

  let discountAmountForPromoCode = 0;

  if (discountProduct.length) {
    // 折扣条件
    if (promoCode.discountCondition === ss_common_enum["f" /* DiscountConditionEnum */].No || promoCode.discountCondition === ss_common_enum["f" /* DiscountConditionEnum */].Amount && discountProductAmount > Object(utils["b" /* dealMaybeNumber */])(promoCode.discountConditionAmount)) {
      discountAmountForPromoCode = promoCode.discountType === ss_common_enum["g" /* DiscountTypeEnum */].Amount ? Object(utils["b" /* dealMaybeNumber */])(promoCode.discountAmount) : Object(utils["b" /* dealMaybeNumber */])(promoCode.discountAmount) * discountProductAmount / 100;
    }
  }

  Object(external_react_["useEffect"])(() => {
    if (discountAmountForPromoCode) {
      actionsShopCartModel.setForm(['couponDiscount', discountAmountForPromoCode]);
    }
  }, [actionsShopCartModel, discountAmountForPromoCode]);
  const allTotal = stateShopCartModel.dealProductTotal(stateShopCartModel) - Object(utils["b" /* dealMaybeNumber */])(stateShopCartModel.form.couponDiscount);
  return __jsx("div", null, __jsx(HeaderTitle["a" /* HeaderTitle */], {
    title: '购物车',
    LeftIcon: Close_default.a
  }), Object(NoAuth["a" /* DealNoAuth */])(__jsx(external_react_default.a.Fragment, null, !!getLoad(doc["b" /* doc */].userShopCartList) && __jsx(core_["LinearProgress"], null) || __jsx("div", {
    style: {
      height: '4px'
    }
  }), __jsx(BScroller["a" /* BScroller */], {
    boxHeight: 'calc(100vh - 65px)'
  }, __jsx(BoxContain, null, __jsx("div", {
    style: {
      paddingTop: '16px',
      fontSize: '18px',
      textAlign: 'center'
    }
  }, productNumber, Object(dealKey["a" /* ll */])('件商品')), __jsx("div", {
    style: {
      fontSize: '14px',
      textAlign: 'center',
      color: colors_["grey"][600],
      marginTop: '8px',
      marginBottom: '10px'
    }
  }, Object(dealKey["a" /* ll */])('小计'), ":", productSubtotal), stateShopCartModel.shopCartList.map(value => __jsx(CartProduct["a" /* CartProduct */], {
    key: `CartProduct_${value.id}`,
    shopCart: value
  })), __jsx(core_["TextField"], {
    style: {
      marginTop: '10px'
    },
    fullWidth: true,
    label: Object(dealKey["a" /* ll */])('运送方式'),
    select: true,
    value: stateShopCartModel.form.pickUpType,
    onChange: event => {
      actionsShopCartModel.setForm(['pickUpType', event.target.value]);
      actionsShopCartModel.setForm(['addressId', stateShopCartModel.initAddressId(Object(utils["f" /* fpMerge */])(stateShopCartModel, {
        form: {
          pickUpType: event.target.value
        }
      }))]);
    }
  }, __jsx(core_["MenuItem"], {
    value: ss_common_enum["i" /* PickUpTypeEnum */].Self
  }, Object(dealKey["a" /* ll */])(Object(ss_common_enum["n" /* getPickUpTypeName */])(ss_common_enum["i" /* PickUpTypeEnum */].Self))), __jsx(core_["MenuItem"], {
    value: ss_common_enum["i" /* PickUpTypeEnum */].Delivery
  }, Object(dealKey["a" /* ll */])(Object(ss_common_enum["n" /* getPickUpTypeName */])(ss_common_enum["i" /* PickUpTypeEnum */].Delivery)))), __jsx(Title, null, Object(dealKey["a" /* ll */])('达人卡和优惠券')), __jsx(PromoCode, null, __jsx("main", null, stateShopCartModel.promoCode.title), __jsx("aside", null, Object(dealKey["a" /* ll */])('code'), ": ", stateShopCartModel.promoCode.code)), __jsx(Box["b" /* Space */], {
    h: 8
  }), __jsx(core_["Button"], {
    variant: 'outlined',
    onClick: async () => {
      await actionsInputPromoCodeModel.openClick(promoCode => {
        return actionsShopCartModel.dealPromoCode(promoCode);
      });
    }
  }, Object(dealKey["a" /* ll */])(stateShopCartModel.promoCode.code ? '重新输入' : '输入验证码')), __jsx(InputPromoCode["a" /* InputPromoCodeDialog */], null), __jsx(Title, null, Object(dealKey["a" /* ll */])('预估价格')), __jsx(Money, null, __jsx("aside", null, Object(dealKey["a" /* ll */])('小计')), __jsx("main", null, productSubtotal)), __jsx(Box["b" /* Space */], {
    h: 10
  }), __jsx(Money, null, __jsx("aside", null, Object(dealKey["a" /* ll */])('折扣')), __jsx("main", null, Object(utils["c" /* dealMoney */])(stateShopCartModel.form.couponDiscount))), __jsx("div", {
    style: {
      width: '100%',
      height: '10px'
    }
  }), __jsx(Money, null, __jsx("aside", null, Object(dealKey["a" /* ll */])('总计')), __jsx("main", null, Object(utils["c" /* dealMoney */])(allTotal))), __jsx(Title, null, Object(dealKey["a" /* ll */])('下次购买的商品')), stateShopCartModel.shopCartListNext.map(value => __jsx(CartProduct["a" /* CartProduct */], {
    key: `CartProduct_${value.id}`,
    shopCart: value
  })), __jsx("div", {
    style: {
      width: '100%',
      height: '100px'
    }
  }))), __jsx(FixFooter, {
    boxShadow: 1
  }, __jsx(core_["Button"], {
    variant: 'contained',
    color: 'secondary',
    fullWidth: true,
    disabled: productNumber === 0,
    onClick: () => {
      actionsShopCartModel.updateIsGroupOrder(false);
      actionsShopCartModel.updatePageType(pageTypeEnum.order);
    }
  }, Object(dealKey["a" /* ll */])('去结算'))), __jsx(UpdateShopCart["a" /* UpdateShopCart */], null))));
};
// EXTERNAL MODULE: ./utils/view/m/cart/orderPage.tsx
var orderPage = __webpack_require__("odey");

// CONCATENATED MODULE: ./utils/view/m/cart/index.tsx
var cart_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const pageTypeEnum = {
  shopCart: 'shopCart',
  order: 'order'
};
const initForm = {
  pickUpType: ss_common_enum["i" /* PickUpTypeEnum */].Self,
  addressId: '',
  paymentMethodCardId: '',
  deductCoin: 0,
  saleTax: 0,
  transportationCosts: 0,
  couponDiscount: 0
};
const ShopCartModel = Object(modelUtil["c" /* modelFactory */])('shopCartModel', {
  isGroupOrder: false,
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
  dealAddressList: state => state.form.pickUpType === ss_common_enum["i" /* PickUpTypeEnum */].Delivery && state.userAddressList || state.selfAddress.map(v => _objectSpread(_objectSpread({}, v), {}, {
    combineAddress: `${v.province} ${v.city} ${v.streetAddress}`,
    name: v.fullName,
    address: v.streetAddress,
    contactInformation: v.phone
  })),
  dealAddressData: state => state.dealAddressList(state).find(v => v.id === state.form.addressId) || {},
  initAddressId: state => {
    var _state$userAddressLis, _state$userAddressLis2, _state$selfAddress, _state$selfAddress$;

    return state.form.pickUpType === ss_common_enum["i" /* PickUpTypeEnum */].Delivery && ((_state$userAddressLis = state.userAddressList) === null || _state$userAddressLis === void 0 ? void 0 : (_state$userAddressLis2 = _state$userAddressLis.find(v => v.isDefault)) === null || _state$userAddressLis2 === void 0 ? void 0 : _state$userAddressLis2.id) || ((_state$selfAddress = state.selfAddress) === null || _state$selfAddress === void 0 ? void 0 : (_state$selfAddress$ = _state$selfAddress[0]) === null || _state$selfAddress$ === void 0 ? void 0 : _state$selfAddress$.id);
  },
  dealProductTotal: state => state.shopCartList.reduce((pre, cur) => {
    var _cur$product;

    return pre + Object(utils["b" /* dealMaybeNumber */])(cur === null || cur === void 0 ? void 0 : cur.number) * Object(utils["b" /* dealMaybeNumber */])(cur === null || cur === void 0 ? void 0 : (_cur$product = cur.product) === null || _cur$product === void 0 ? void 0 : _cur$product.priceOut);
  }, 0),
  dealTransportationCosts: (state, productTotal) => {
    var _state$freightConfig;

    return state.form.pickUpType === ss_common_enum["i" /* PickUpTypeEnum */].Delivery && state.freightConfig.reduce((pre, cur) => {
      if (pre > parseFloat(cur === null || cur === void 0 ? void 0 : cur.freightPay) && productTotal < parseFloat(cur === null || cur === void 0 ? void 0 : cur.orderMax)) {
        return parseFloat(cur === null || cur === void 0 ? void 0 : cur.freightPay);
      } else {
        return pre;
      }
    }, parseFloat((_state$freightConfig = state.freightConfig[state.freightConfig.length - 1]) === null || _state$freightConfig === void 0 ? void 0 : _state$freightConfig.freightPay)) || 0;
  }
}, {
  updateIsGroupOrder: async (value, option) => {
    option.setData(Object(utils["g" /* fpMergePre */])({
      isGroupOrder: value
    }));
  },
  clearData: (value, option) => {
    option.setData(Object(utils["g" /* fpMergePre */])({
      form: initForm,
      pageType: pageTypeEnum.shopCart
    }));
  },
  clearForm: (value, option) => option.setData(Object(utils["g" /* fpMergePre */])({
    form: _objectSpread({}, initForm)
  })),
  setForm: commonAction["a" /* setForm */],
  getList: async (value, option) => {
    var _userRes$oneUser, _res$shopCartList$fil, _res$shopCartList$fil2;

    const userRes = await option.query(doc["b" /* doc */].oneUser);
    const res = await option.query(doc["b" /* doc */].userShopCartList);
    option.setData(Object(utils["g" /* fpMergePre */])({
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
      option.setData(Object(utils["g" /* fpMergePre */])({
        promoCode
      }));
      return '';
    } else {
      return Object(dealKey["a" /* ll */])('未匹配到优惠码');
    }
  },
  updatePageType: (value, option) => option.setData(Object(utils["g" /* fpMergePre */])({
    pageType: value
  })),
  updatePayCardList: async (value, option) => {
    const res = await option.query(doc["b" /* doc */].orderConfirmInfo);
    option.setData(Object(utils["g" /* fpMergePre */])({
      payCardList: res === null || res === void 0 ? void 0 : res.payCardListOneUser
    }));
  },
  getOrderInfo: async (value, option) => {
    var _res$getDataConfig$va, _res$getDataConfig, _res$getDataConfig$va2, _res$freightConfig$va, _res$freightConfig, _res$freightConfig$va2, _res$userLevelList, _res$userAddressListO, _res$userAddressListO2, _res$getDataConfig2, _res$getDataConfig2$v, _res$getDataConfig2$v2, _res$getDataConfig2$v3, _res$payCardListOneUs, _res$payCardListOneUs2;

    const res = await option.query(doc["b" /* doc */].orderConfirmInfo);
    option.setData(Object(utils["i" /* fpSetPre */])('user', res === null || res === void 0 ? void 0 : res.oneUser));
    option.setData(Object(utils["g" /* fpMergePre */])({
      payCardList: res === null || res === void 0 ? void 0 : res.payCardListOneUser,
      userAddressList: res === null || res === void 0 ? void 0 : res.userAddressListOneUser,
      selfAddress: (_res$getDataConfig$va = res === null || res === void 0 ? void 0 : (_res$getDataConfig = res.getDataConfig) === null || _res$getDataConfig === void 0 ? void 0 : (_res$getDataConfig$va2 = _res$getDataConfig.value) === null || _res$getDataConfig$va2 === void 0 ? void 0 : _res$getDataConfig$va2.list) !== null && _res$getDataConfig$va !== void 0 ? _res$getDataConfig$va : [],
      freightConfig: (_res$freightConfig$va = res === null || res === void 0 ? void 0 : (_res$freightConfig = res.freightConfig) === null || _res$freightConfig === void 0 ? void 0 : (_res$freightConfig$va2 = _res$freightConfig.value) === null || _res$freightConfig$va2 === void 0 ? void 0 : _res$freightConfig$va2.freightList) !== null && _res$freightConfig$va !== void 0 ? _res$freightConfig$va : [],
      userLevelList: (_res$userLevelList = res === null || res === void 0 ? void 0 : res.userLevelList) !== null && _res$userLevelList !== void 0 ? _res$userLevelList : []
    }));
    option.setData(Object(utils["g" /* fpMergePre */])({
      form: {
        addressId: option.data.form.pickUpType === ss_common_enum["i" /* PickUpTypeEnum */].Delivery && (res === null || res === void 0 ? void 0 : (_res$userAddressListO = res.userAddressListOneUser) === null || _res$userAddressListO === void 0 ? void 0 : (_res$userAddressListO2 = _res$userAddressListO.find(v => v.isDefault)) === null || _res$userAddressListO2 === void 0 ? void 0 : _res$userAddressListO2.id) || (res === null || res === void 0 ? void 0 : (_res$getDataConfig2 = res.getDataConfig) === null || _res$getDataConfig2 === void 0 ? void 0 : (_res$getDataConfig2$v = _res$getDataConfig2.value) === null || _res$getDataConfig2$v === void 0 ? void 0 : (_res$getDataConfig2$v2 = _res$getDataConfig2$v.list) === null || _res$getDataConfig2$v2 === void 0 ? void 0 : (_res$getDataConfig2$v3 = _res$getDataConfig2$v2[0]) === null || _res$getDataConfig2$v3 === void 0 ? void 0 : _res$getDataConfig2$v3.id),
        paymentMethodCardId: (res === null || res === void 0 ? void 0 : (_res$payCardListOneUs = res.payCardListOneUser) === null || _res$payCardListOneUs === void 0 ? void 0 : (_res$payCardListOneUs2 = _res$payCardListOneUs.find(v => v.isDefault)) === null || _res$payCardListOneUs2 === void 0 ? void 0 : _res$payCardListOneUs2.id) || ''
      }
    }));
  },
  submit: async (value, option) => {
    return await option.mutate(doc["b" /* doc */].saveOrder, {
      orderInfoItemInput: _objectSpread({}, value)
    });
  },
  moveToNext: async ({
    shopCart
  }, option) => {
    const oldNext = option.data.shopCartListNext.find(value => {
      var _value$product, _shopCart$product;

      return ((_value$product = value.product) === null || _value$product === void 0 ? void 0 : _value$product.id) === ((_shopCart$product = shopCart.product) === null || _shopCart$product === void 0 ? void 0 : _shopCart$product.id);
    });

    if (oldNext === null || oldNext === void 0 ? void 0 : oldNext.id) {
      await option.mutate(doc["b" /* doc */].updateShopCart, {
        shopCart: {
          isDelete: 1,
          id: oldNext.id
        }
      });
      await option.mutate(doc["b" /* doc */].updateShopCart, {
        shopCart: {
          isNext: 1,
          id: shopCart.id
        }
      });
    } else {
      await option.mutate(doc["b" /* doc */].updateShopCart, {
        shopCart: {
          isNext: 1,
          id: shopCart.id
        }
      });
    }
  },
  testPromoCode: async (value, option) => {
    return '123';
  }
});
const CartPage = () => {
  const {
    state: stateSCM
  } = Object(useStore["b" /* useStoreModel */])(ShopCartModel);
  return stateSCM.pageType === pageTypeEnum.order && cart_jsx(orderPage["d" /* OrderPage */], null) || cart_jsx(ShopCartPage, null);
};

/***/ }),

/***/ "YRx9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FootBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_icons_Storefront__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("arhV");
/* harmony import */ var _material_ui_icons_Storefront__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Storefront__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_AccountBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("j4BW");
/* harmony import */ var _material_ui_icons_AccountBox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountBox__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Redeem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4o+8");
/* harmony import */ var _material_ui_icons_Redeem__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Redeem__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("yFMe");
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("RpH3");
/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ss_common_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("4Rmy");
/* harmony import */ var _style_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("ZtJr");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_9__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const Box = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div.withConfig({
  displayName: "FootBar__Box",
  componentId: "sc-14lm7gf-0"
})(["position:fixed;bottom:0;height:45px;width:100vw;box-shadow:0 3px 4px 0 rgba(0,0,0,0.14),0 3px 3px -2px rgba(0,0,0,0.12),0 1px 8px 0 rgba(0,0,0,0.20);background:#fff;display:flex;align-items:center;> section{flex-grow:1;display:flex;align-items:center;justify-content:center;flex-direction:column;position:relative;> aside{position:absolute;top:0;right:20%;border-radius:50%;width:16px;height:16px;background:", ";display:flex;align-items:center;justify-content:center;color:#fff;}}"], _style_common__WEBPACK_IMPORTED_MODULE_8__[/* mpStyle */ "b"].red);
const ActBox = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.section.withConfig({
  displayName: "FootBar__ActBox",
  componentId: "sc-14lm7gf-1"
})(["color:", ";"], props => props.isAct ? _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_6___default.a[600] : 'auto');
const FootBar = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

  const isAct = path => router.pathname.includes(path);

  return __jsx(Box, null, [['逛店', __jsx(_material_ui_icons_Storefront__WEBPACK_IMPORTED_MODULE_1___default.a, null), `/m/${_ss_common_enum__WEBPACK_IMPORTED_MODULE_7__[/* AppFootBar */ "a"].home}`], ['拼团', __jsx(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_4___default.a, null), `/m/${_ss_common_enum__WEBPACK_IMPORTED_MODULE_7__[/* AppFootBar */ "a"].group}`], ['达人区', __jsx(_material_ui_icons_Redeem__WEBPACK_IMPORTED_MODULE_3___default.a, null), `/m/${_ss_common_enum__WEBPACK_IMPORTED_MODULE_7__[/* AppFootBar */ "a"].card}`], // ['购物车', <ShoppingCartIcon/>, `/${AppFootBar.cart}`, stateShopCart.dealProductNumber(stateShopCart)],
  ['我', __jsx(_material_ui_icons_AccountBox__WEBPACK_IMPORTED_MODULE_2___default.a, null), `/m/${_ss_common_enum__WEBPACK_IMPORTED_MODULE_7__[/* AppFootBar */ "a"].me}`]].map(v => __jsx(ActBox, {
    key: `FootBar_${v[0]}`,
    isAct: isAct(v[2]),
    onClick: () => isAct(v[2]) ? '' : router.push(v[2])
  }, v[1], __jsx("span", null, v[0]), ~~v[3] > 0 && __jsx("aside", null, v[3]))));
};

/***/ }),

/***/ "YUMn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LineRankingModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineRanking; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("+/yG");
/* harmony import */ var _graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("i7FU");
/* harmony import */ var _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("U81q");
/* harmony import */ var _tools_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("cBzo");
/* harmony import */ var _components_ProductItem_ProductItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("oxxF");
/* harmony import */ var _components_Box_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("cW92");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const LineRankingModel = Object(_ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_1__[/* modelFactory */ "c"])('LineRanking', {
  list: []
}, {
  getList: async (value, option) => {
    var _res$groupQueueList;

    const res = await option.query(_graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_2__[/* doc */ "b"].groupQueueList, {});
    option.setData(Object(_tools_utils__WEBPACK_IMPORTED_MODULE_4__[/* fpMergePre */ "g"])({
      list: (_res$groupQueueList = res === null || res === void 0 ? void 0 : res.groupQueueList) !== null && _res$groupQueueList !== void 0 ? _res$groupQueueList : []
    }));
  }
});
const LineRanking = () => {
  const {
    actions: actionsLineRankingModel,
    state: stateLineRankingModel
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_3__[/* useStoreModel */ "b"])(LineRankingModel);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    actionsLineRankingModel.getList();
  }, [actionsLineRankingModel]);
  return __jsx("div", null, stateLineRankingModel.list.filter(v => {
    var _v$product;

    return Object(_tools_utils__WEBPACK_IMPORTED_MODULE_4__[/* dealMaybeNumber */ "b"])(v.sumFillAmount) < Object(_tools_utils__WEBPACK_IMPORTED_MODULE_4__[/* dealMaybeNumber */ "b"])((_v$product = v.product) === null || _v$product === void 0 ? void 0 : _v$product.groupPrecision);
  }).sort((a, b) => Object(_tools_utils__WEBPACK_IMPORTED_MODULE_4__[/* dealMaybeNumber */ "b"])(b.sumFillAmount) - Object(_tools_utils__WEBPACK_IMPORTED_MODULE_4__[/* dealMaybeNumber */ "b"])(a.sumFillAmount)).map(value => {
    var _value$product;

    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      key: `ProductItem_${value.id}`
    }, __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_6__[/* Space */ "b"], {
      h: 16
    }), __jsx(_components_ProductItem_ProductItem__WEBPACK_IMPORTED_MODULE_5__[/* GroupProductItem */ "a"], {
      product: (_value$product = value.product) !== null && _value$product !== void 0 ? _value$product : {},
      groupQueue: value
    }));
  }));
};

/***/ }),

/***/ "Z3gB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export bScrollModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BScroller; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var better_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("7FHF");
/* harmony import */ var better_scroll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(better_scroll__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("U81q");
/* harmony import */ var _tools_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cBzo");
/* harmony import */ var _ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("+/yG");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const Box = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "BScroller__Box",
  componentId: "sc-9ed2ib-0"
})(["", ""], ({
  boxHeight,
  isX,
  boxWidth
}) => `
    height: ${boxHeight || '100vh'};
    width: ${isX && boxWidth ? `${boxWidth}` : 'auto'};
    overflow: hidden;
  `);
const bScrollModel = Object(_ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_4__[/* modelFactory */ "c"])('bScrollModel', {
  scroll: {}
}, {
  setScroll: (value, option) => {
    option.setData(Object(_tools_utils__WEBPACK_IMPORTED_MODULE_3__[/* fpMergePre */ "g"])({
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
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_2__[/* useStoreModel */ "b"])(bScrollModel);
  const scrollRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // @ts-ignore
    const scroll = new better_scroll__WEBPACK_IMPORTED_MODULE_1___default.a(scrollRef.current, _objectSpread(_objectSpread({
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
  return __jsx(Box, {
    isX: isX,
    boxHeight: boxHeight,
    boxWidth: boxWidth,
    ref: scrollRef
  }, __jsx("div", {
    style: isX ? {
      display: 'inline-block'
    } : {}
  }, children));
};

/***/ }),

/***/ "ZtJr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return mpStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedBox; });
/* harmony import */ var _material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("nteV");
/* harmony import */ var _material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const mpStyle = {
  red: '#F84033',
  grey: '#B9B9B9',
  greyLite: _material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_0___default.a['200'],
  black: '#0D0D21',
  shadow: {
    1: '0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20)'
  },
  space: {
    xxl: 56,
    xl: 48,
    l: 40,
    n: 32,
    s: 24,
    xs: 16,
    xxs: 8
  },
  spacePx: {
    xxl: '56px',
    xl: '48px',
    l: '40px',
    n: '32px',
    s: '24px',
    xs: '16px',
    xxs: '8px'
  },
  fontTypeObj: {
    xxl: {
      fontSize: '28px',
      fontWeight: 600
    },
    xl: {
      fontSize: '24px',
      fontWeight: 600
    },
    l: {
      fontSize: '18px',
      fontWeight: 600
    },
    n: {
      fontSize: '16px',
      fontWeight: 400
    },
    s: {
      fontSize: '14px',
      fontWeight: 400
    }
  },
  fontType: {
    xxl: `
      font-size: 28px; 
      font-weight: 600;
    `,
    xl: `
      font-size: 24px; 
      font-weight: 600;
    `,
    l: `
      font-size: 18px; 
      font-weight: 600;
    `,
    n: `
      font-size: 16px; 
      font-weight: 400;
    `,
    s: `
      font-size: 14px; 
      font-weight: 400;
    `
  },
  scrollbar: `
    /* 滚动条 */
    ::-webkit-scrollbar-thumb:horizontal { /*水平滚动条的样式*/
        width: 4PX;
        background-color: #CCCCCC;
        -webkit-border-radius: 6PX;
    }
    ::-webkit-scrollbar-track-piece {
        background-color: #fff; /*滚动条的背景颜色*/
        -webkit-border-radius: 0; /*滚动条的圆角宽度*/
    }
    ::-webkit-scrollbar {
        width: 10PX; /*滚动条的宽度*/
        height: 8PX; /*滚动条的高度*/
    }
    ::-webkit-scrollbar-thumb:vertical { /*垂直滚动条的样式*/
        height: 50PX;
        background-color: #999;
        -webkit-border-radius: 4PX;
        outline: 2PX solid #fff;
        outline-offset: -2PX;
        border: 2PX solid #fff;
    }
    ::-webkit-scrollbar-thumb:hover { /*滚动条的hover样式*/
        height: 50PX;
        background-color: #9f9f9f;
        -webkit-border-radius: 4PX;
    }
  `,
  ellipsis: `
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
  `
};
const RedBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "common__RedBox",
  componentId: "sc-1lufrlf-0"
})(["color:", ";"], mpStyle.red);

/***/ }),

/***/ "cBzo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getObjectURL */
/* unused harmony export parseFloatForInput */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return fpSet; });
/* unused harmony export delay */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return fpSetPre; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return fpMerge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return fpMergePre; });
/* unused harmony export fpRemove */
/* unused harmony export dealNumberZero */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return formatDate; });
/* unused harmony export dealNonBooleanProps */
/* unused harmony export formatMoney */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return dealMoney; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return dealMaybeNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getLastNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return dealUrlQuery; });
/* unused harmony export isPc */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dealLastNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return padStart; });
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
const dealMoney = (amount, pre = '') => `${pre}$${formatMoney(amount)}`;
const dealMaybeNumber = num => num !== null && num !== void 0 ? num : 0;
const getLastNumber = (str, num = 4) => str === null || str === void 0 ? void 0 : str.slice((str === null || str === void 0 ? void 0 : str.length) - num);
const dealUrlQuery = queryObj => {
  return `?${Object.keys(queryObj).map(value => `${value}=${queryObj[value]}`).join('&')}`;
};
const isPc = () => {
  return /\/pc\//.test(window.location.href);
};
const dealLastNumber = (num, length = 4) => {
  if (!num) {
    return '';
  }

  return `**** **** **** ${num ? num === null || num === void 0 ? void 0 : num.slice((num === null || num === void 0 ? void 0 : num.length) - length) : ''}`;
};
const padStart = num => {
  return num > 9 ? `${num}` : `0${num}`;
};

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
  c,
  isGrow
}) => {
  return __jsx("span", {
    style: _objectSpread(_objectSpread({
      background: c || 'auto',
      display: 'inline-block',
      width: w !== null && w !== void 0 ? w : '100%',
      height: h !== null && h !== void 0 ? h : '100%'
    }, !w ? {
      display: 'block'
    } : {}), isGrow ? {
      flexGrow: 1,
      width: 'auto',
      height: 'auto'
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
/* harmony import */ var _view_m_cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("We6d");
/* harmony import */ var _hooks_usePcOrMobile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("M5o2");
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;








const ShoppingCartIconButton = ({
  color,
  htmlColor
}) => {
  const {
    isPc
  } = Object(_hooks_usePcOrMobile__WEBPACK_IMPORTED_MODULE_7__[/* usePcOrMobile */ "a"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  const {
    state: stateShopCart,
    actions: actionsShopCart
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_5__[/* useStoreModel */ "b"])(_view_m_cart__WEBPACK_IMPORTED_MODULE_6__[/* ShopCartModel */ "b"]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    if (!stateShopCart.user.id) {
      actionsShopCart.getList();
    }
  }, []);
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    onClick: () => {
      router.push(`/${isPc ? 'pc' : 'm'}/${_ss_common_enum__WEBPACK_IMPORTED_MODULE_0__[/* AppFootBar */ "a"].cart}`);
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

/***/ "ePdq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalesRank; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ZtJr");
/* harmony import */ var _tools_dealKey__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("+vfP");
/* harmony import */ var _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("U81q");
/* harmony import */ var _m_home_components_SalesRank_SalesRank__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("wNMP");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ss_common_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("4Rmy");
/* harmony import */ var _pcComponents_productItemBox_productItemBox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("H0n8");
/* harmony import */ var _m_home_components_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("+CC5");
/* harmony import */ var _m_home_appModule__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("LIvt");
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;











const Box = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "salesRank__Box",
  componentId: "sc-19ceg4h-0"
})([""]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "salesRank__Title",
  componentId: "sc-19ceg4h-1"
})(["", ";"], _style_common__WEBPACK_IMPORTED_MODULE_2__[/* mpStyle */ "b"].fontType.xl);
const Content = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "salesRank__Content",
  componentId: "sc-19ceg4h-2"
})(["display:grid;grid-gap:24px;padding-top:24px;margin-top:20px;box-shadow:0 4px 8px 0 #F5F5F5;> section{background:#4A90E2;}"]);
const Rank = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "salesRank__Rank",
  componentId: "sc-19ceg4h-3"
})(["position:relative;> aside{position:absolute;top:-10px;left:15px;> main{width:40px;height:40px;display:grid;align-items:center;justify-items:center;color:#fff;background:", ";border-radius:50%;", ";}> img{width:40px;height:40px;}}"], _style_common__WEBPACK_IMPORTED_MODULE_2__[/* mpStyle */ "b"].red, _style_common__WEBPACK_IMPORTED_MODULE_2__[/* mpStyle */ "b"].fontType.xl);
const SalesRank = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  const {
    actions: actionsSalesRankModel,
    state: stateSalesRankModel
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_4__[/* useStoreModel */ "b"])(_m_home_components_SalesRank_SalesRank__WEBPACK_IMPORTED_MODULE_5__[/* SalesRankModel */ "b"]);
  const {
    state: stateHomeTabsModel
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_4__[/* useStoreModel */ "b"])(_m_home_components_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_9__[/* HomeTabsModel */ "b"]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (true) {
      var _router$query$salesRa;

      actionsSalesRankModel.getList({
        productInput: {
          isGroup: stateHomeTabsModel.homeType === _m_home_appModule__WEBPACK_IMPORTED_MODULE_10__[/* HomeType */ "b"].group ? 1 : 0
        },
        orderByType: (_router$query$salesRa = router.query.salesRankType) !== null && _router$query$salesRa !== void 0 ? _router$query$salesRa : _ss_common_enum__WEBPACK_IMPORTED_MODULE_7__[/* SaleRankTypeEnum */ "m"].OneMonth
      });
    }
  }, [actionsSalesRankModel, router.query.salesRankType, stateHomeTabsModel.homeType]);
  return __jsx(Box, {
    id: 'SalesRank'
  }, __jsx(Title, null, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_3__[/* ll */ "a"])('热门排行')), __jsx(Content, null, stateSalesRankModel.listData.map((product, index) => __jsx(Rank, {
    key: `ProductItem_${product.id}`
  }, __jsx(_pcComponents_productItemBox_productItemBox__WEBPACK_IMPORTED_MODULE_8__[/* ProductItemBox */ "a"], {
    width: 209,
    hidePrice: true,
    hideShopCartButton: true,
    product: product
  }), __jsx("aside", null, __jsx("main", {
    style: index === 0 && {
      background: 'linear-gradient(144deg, #FFF0B1 0%, #B6883B 100%)'
    } || index === 1 && {
      background: 'linear-gradient(144deg, #E8E5E5 0%, #A5A3A3 100%)'
    } || index === 2 && {
      background: 'linear-gradient(144deg, #F8C8A9 0%, #C28753 100%)'
    } || {}
  }, index + 1))))));
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

// UNUSED EXPORTS: docFactory, getUserListDoc

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
      orderAmountCurrentYear
      orderCoinCurrentMonth
      orderCoinCurrentMonthCost
      orderCoinLastMonthGet
      orderCoinNextMonth
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
      address
      creditAddressInputType
      district
      zip
      province
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



const docFactory = (doc, variablesType) => variablesType ? {
  doc,
  variablesType
} : {
  doc,
  variablesType: {}
};
const getUserListDoc = docFactory(external_apollo_boost_["gql"]`
  query refactored643($data: UserListInput!) {
    userList(userListInput: $data) {
      list {
        orderCoinNextMonth
        orderCoinCurrentMonth
        orderAmountCurrentYear
        ...UserInfoFields
        ...UserFields
        ...OrderInfoFields
      }
      total
    }
  }
  ${fragment.UserFields}
  ${fragment.UserInfoFields}
  ${fragment.OrderInfoFields}
`);
const getDataConfig = docFactory(external_apollo_boost_["gql"]`
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
`);
const homeCarouselImgs = docFactory(external_apollo_boost_["gql"]`
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
`);
const categoryList = docFactory(external_apollo_boost_["gql"]`
  query query_query_testLong565($data: CategoryListInput) {
    categoryList(data: $data) {
      total
      list {
        ...Category
      }
    }
  }
  ${fragment.CategoryFields}
`);
const doc = {
  getUserListDoc,
  categoryList,
  getDataConfig,
  homeCarouselImgs,
  registerUser: docFactory(external_apollo_boost_["gql"]`
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
  `),
  refreshToken: docFactory(external_apollo_boost_["gql"]`
    query refreshToken($data: String!) {
      refreshToken(refreshtoken: $data) {
        refreshtoken
        token
      }
    }
  `),
  login: docFactory(external_apollo_boost_["gql"]`
    query login($data: UserItemInput) {
      login(user: $data) {
        token
        refreshtoken
      }
    }
  `),
  oneUser: docFactory(external_apollo_boost_["gql"]`
    query oneUser {
      oneUser {
        ...UserFields
        userInfo {
          ...UserInfoFields
          userLevelDict {
            ...DictFields
          }
        }
      }
    }
    ${fragment.DictFields}
    ${fragment.UserInfoFields}
    ${fragment.UserFields}
  `),
  orderList: docFactory(external_apollo_boost_["gql"]`
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
  `),
  orderDetail: docFactory(external_apollo_boost_["gql"]`
    query ($id: String) {
      selfAddress: getDataConfig(dataConfigInput: {
        type: "${ss_common_enum["e" /* DictTypeEnum */].SelfAddress}"
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
  `),
  updatePassword: docFactory(external_apollo_boost_["gql"]`
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
  `),
  payCardListOneUser: docFactory(external_apollo_boost_["gql"]`
    query {
      payCardListOneUser {
        ...UserPayCardFields
      }
    }
    ${fragment.UserPayCardFields}
  `),
  userPayCard: docFactory(external_apollo_boost_["gql"]`
    query ($data: UserPayCardItemInput) {
      userPayCard (userPayCard: $data) {
        ...UserPayCardFields
      }
    }
    ${fragment.UserPayCardFields}
  `),
  saveUserPayCard: docFactory(external_apollo_boost_["gql"]`
    mutation ($data: UserPayCardItemInput){
      saveUserPayCard (userPayCard: $data) {
        ...UserPayCardFields
      }
    }
    ${fragment.UserPayCardFields}
  `),
  setUserPayCardDefault: docFactory(external_apollo_boost_["gql"]`
    mutation ($data: UserPayCardItemInput) {
      setUserPayCardDefault (userPayCard: $data) {
        ...UserPayCardFields
      }
    }
    ${fragment.UserPayCardFields}
  `),
  pickupAddress: docFactory(external_apollo_boost_["gql"]`
    query {
      getDataConfig(dataConfigInput: {
        type: "${ss_common_enum["e" /* DictTypeEnum */].SelfAddress}"
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
  `),
  updateUserInfo: docFactory(external_apollo_boost_["gql"]`
    mutation ($userInfo: UserInfoItemInput) {
      updateUserInfo (userInfo: $userInfo) {
        ...UserInfoFields
      }
    }
    ${fragment.UserInfoFields}
  `, {
    userInfo: {}
  }),
  userAddressListOneUser: docFactory(external_apollo_boost_["gql"]`
    query {
      userAddressListOneUser {
        ...UserAddressFields
      }
    }
    ${fragment.UserAddressFields}
  `),
  userAddress: docFactory(external_apollo_boost_["gql"]`
    query ($data: UserAddressItemInput) {
      userAddress (userAddress: $data) {
        ...UserAddressFields
      }
    }
    ${fragment.UserAddressFields}
  `),
  saveUserAddress: docFactory(external_apollo_boost_["gql"]`
    mutation ($data: UserAddressItemInput){
      saveUserAddress (userAddress: $data) {
        ...UserAddressFields
      }
    }
    ${fragment.UserAddressFields}
  `),
  setUserAddressDefault: docFactory(external_apollo_boost_["gql"]`
    mutation ($data: UserAddressItemInput) {
      setUserAddressDefault (userAddress: $data) {
        ...UserAddressFields
      }
    }
    ${fragment.UserAddressFields}
  `),
  productsInCategory: docFactory(external_apollo_boost_["gql"]`
    query ($data: CategoryItemInput, $productItemInput: ProductItemInput, $orderByAndPageInput: OrderByAndPageInput) {
      productsInCategory(categoryItemInput: $data, productItemInput: $productItemInput, orderByAndPageInput: $orderByAndPageInput) {
        list {
          ...ProductFields
          img {
            ...ImgFields
          }
        }
        total
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
  `),
  categoryLevel: docFactory(external_apollo_boost_["gql"]`
    query ($data: CategoryItemInput) {
      categoryLevel(categoryItemInput: $data)
    }
  `),
  oneCategory: docFactory(external_apollo_boost_["gql"]`
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
  `),
  productList: docFactory(external_apollo_boost_["gql"]`
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
  `),
  updateNumShopCart: docFactory(external_apollo_boost_["gql"]`
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
  `),
  userShopCartList: docFactory(external_apollo_boost_["gql"]`
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
  `),
  updateShopCart: docFactory(external_apollo_boost_["gql"]`
    mutation ($shopCart: ShopCartItemInput){
      updateShopCart (shopCart: $shopCart) {
        ...ShopCartFields
      }
    }
    ${fragment.ShopCartFields}
  `),
  orderConfirmInfo: docFactory(external_apollo_boost_["gql"]`
    query {
      getDataConfig(dataConfigInput: {
        type: "${ss_common_enum["e" /* DictTypeEnum */].SelfAddress}"
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
        type: "${ss_common_enum["e" /* DictTypeEnum */].Freight}"
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
  `),
  saveOrder: docFactory(external_apollo_boost_["gql"]`
    mutation ($orderInfoItemInput: OrderInfoItemInput) {
      saveOrder (orderInfoItemInput: $orderInfoItemInput) {
        ...OrderInfoFields
      }
    }
    ${fragment.OrderInfoFields}
  `),
  dictList: docFactory(external_apollo_boost_["gql"]`
    query ($data: DictInput) {
      getDictList (dictInput: $data) {
        ...DictFields
      }
    }
    ${fragment.DictFields}
  `),
  limitTimeData: docFactory(external_apollo_boost_["gql"]`
    query {
      limitTimeData: getDataConfig (dataConfigInput: {
        type: "${ss_common_enum["e" /* DictTypeEnum */].PromotionFlashSale}"
      }) {
        ...DataConfigFields
      }
    }
    ${fragment.DataConfigFields}
  `),
  productListByIds: docFactory(external_apollo_boost_["gql"]`
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
  `),
  groupQueueList: docFactory(external_apollo_boost_["gql"]`
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
  `),
  updateOrder: docFactory(external_apollo_boost_["gql"]`
    mutation ($orderInfoItemInput: OrderInfoItemInput) {
      updateOrder (orderInfoItemInput: $orderInfoItemInput) {
        ...OrderInfoFields
      }
    }
    ${fragment.OrderInfoFields}
  `),
  saveGroupOrder: docFactory(external_apollo_boost_["gql"]`
    mutation ($orderInfoItemInput: OrderInfoItemInput, $groupOrderItemInput: GroupOrderItemInput, $groupQueueItemInput: GroupQueueItemInput) {
      saveGroupOrder (orderInfoItemInput: $orderInfoItemInput, groupOrderItemInput: $groupOrderItemInput, groupQueueItemInput: $groupQueueItemInput) {
        ...OrderInfoFields
      }
    }
    ${fragment.OrderInfoFields}
  `),
  promoCodeList: docFactory(external_apollo_boost_["gql"]`
    query ($promoCodeItemInput: PromoCodeItemInput) {
      promoCodeList (promoCodeItemInput: $promoCodeItemInput) {
        ...PromoCodeFields
        userLevel {
          ...DictFields
        }
      }
    }
    ${fragment.PromoCodeFields}
    ${fragment.DictFields}
  `),
  categoryRootParent: docFactory(external_apollo_boost_["gql"]`
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
  `),
  productListOrderByOrder: docFactory(external_apollo_boost_["gql"]`
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
  `),
  searchData: docFactory(external_apollo_boost_["gql"]`
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
        promoCodeType: "${ss_common_enum["j" /* PromoCodeTypeEnum */].DarenCard}",
        title: $keyword,
      }) {
        ...PromoCodeFields
      }
      promoCodePromoCodeList: promoCodeList(promoCodeItemInput: {
        promoCodeType: "${ss_common_enum["j" /* PromoCodeTypeEnum */].PromoCode}",
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
  `)
};

/***/ }),

/***/ "mZym":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupQueueList; });
/* harmony import */ var _material_ui_icons_StarBorderRounded__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("n+Zn");
/* harmony import */ var _material_ui_icons_StarBorderRounded__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_StarBorderRounded__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_icons_StarRounded__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("3F1g");
/* harmony import */ var _material_ui_icons_StarRounded__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_StarRounded__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tools_dealKey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("+vfP");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("U81q");
/* harmony import */ var _id___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("4gpI");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _style_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("ZtJr");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("+FwM");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_8__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;









const GroupQueueListBox = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div.withConfig({
  displayName: "groupQueueList__GroupQueueListBox",
  componentId: "sc-18a72le-0"
})(["margin-top:16px;border-radius:8px;background:", ";display:flex;justify-content:space-between;align-items:center;padding:0 8px;"], prop => prop.select ? `linear-gradient(to right, ${_style_common__WEBPACK_IMPORTED_MODULE_7__[/* mpStyle */ "b"].red}, #FC7361)` : _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_8__["grey"]['200']);
const GroupQueueList = () => {
  const {
    actions: actionsGroupProduct,
    state: stateGroupProduct
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_4__[/* useStoreModel */ "b"])(_id___WEBPACK_IMPORTED_MODULE_5__[/* groupProductModel */ "e"]);
  const product = stateGroupProduct.product;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, stateGroupProduct.groupQueueList.filter(v => {
    var _v$sumFillAmount, _product$groupPrecisi;

    return ((_v$sumFillAmount = v.sumFillAmount) !== null && _v$sumFillAmount !== void 0 ? _v$sumFillAmount : 0) < ((_product$groupPrecisi = product === null || product === void 0 ? void 0 : product.groupPrecision) !== null && _product$groupPrecisi !== void 0 ? _product$groupPrecisi : 0);
  }).map(groupQueue => {
    var _groupQueue$sumFillAm2;

    const select = groupQueue.id === stateGroupProduct.selectQueueId;
    return __jsx(GroupQueueListBox, {
      select: select,
      key: `GroupQueueListBox${groupQueue.id}`,
      className: 'GroupQueueListBox'
    }, __jsx("aside", null, [...Array(product.groupPrecision)].map((v, i) => i).map(value => {
      var _groupQueue$sumFillAm;

      return value + 1 > ((_groupQueue$sumFillAm = groupQueue.sumFillAmount) !== null && _groupQueue$sumFillAm !== void 0 ? _groupQueue$sumFillAm : 0) + (select ? stateGroupProduct.selectNum : 0) ? __jsx(_material_ui_icons_StarBorderRounded__WEBPACK_IMPORTED_MODULE_0___default.a, {
        key: `clickStar${value}`,
        fontSize: 'large',
        onClick: () => actionsGroupProduct.updateSelectNum(value + 1),
        style: {
          color: select ? '#fff' : '#000'
        }
      }) : __jsx(_material_ui_icons_StarRounded__WEBPACK_IMPORTED_MODULE_1___default.a, {
        key: `clickStar${value}`,
        style: {
          color: '#FDD334'
        },
        fontSize: 'large',
        onClick: () => actionsGroupProduct.updateSelectNum(value + 1)
      });
    })), __jsx("footer", null, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_2__[/* ll */ "a"])(((_groupQueue$sumFillAm2 = groupQueue.sumFillAmount) !== null && _groupQueue$sumFillAm2 !== void 0 ? _groupQueue$sumFillAm2 : 0) + (select ? stateGroupProduct.selectNum : 0) === product.groupPrecision ? '成团啦' : '未成团')));
  }));
};

/***/ }),

/***/ "odey":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ShopTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CardBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ShopTotal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FooterFit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return useOrderPageHooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return OrderPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cvHV");
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_HeaderTitle_HeaderTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("B42p");
/* harmony import */ var _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("U81q");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("We6d");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tools_dealKey__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("+vfP");
/* harmony import */ var _ss_common_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("4Rmy");
/* harmony import */ var _graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("i7FU");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_BScroll_BScroller__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("Z3gB");
/* harmony import */ var _components_Box_Box__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("cW92");
/* harmony import */ var _components_SelectAddress__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("TcOc");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("+FwM");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_SelectCard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("pHDM");
/* harmony import */ var _tools_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("cBzo");
/* harmony import */ var _style_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("ZtJr");
/* harmony import */ var _components_ButtonLoad_ButtonLoad__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("+kHn");
/* harmony import */ var _components_Message_Message__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("OO/1");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _groupProduct_id___WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("4gpI");
/* harmony import */ var _home_appModule__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("LIvt");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }























const ShopTitle = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "orderPage__ShopTitle",
  componentId: "sc-1cg2p58-0"
})(["font-size:18px;font-weight:bold;display:flex;align-items:flex-end;> footer{font-size:14px;color:", ";}"], _style_common__WEBPACK_IMPORTED_MODULE_16__[/* mpStyle */ "b"].red);
const AddressBox = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "orderPage__AddressBox",
  componentId: "sc-1cg2p58-1"
})(["padding:20px;display:flex;align-items:center;> main{flex-grow:1;> header{font-size:16px;font-weight:bold;margin-bottom:8px;}}"]);
const CardBox = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "orderPage__CardBox",
  componentId: "sc-1cg2p58-2"
})(["padding:16px 20px;display:grid;grid-template-columns:1fr min-content;grid-template-rows:repeat(2,1fr);> header{font-size:16px;font-weight:bold;margin-bottom:8px;}> aside{grid-area:1/2/3/3;}"]);
const ShopTotal = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "orderPage__ShopTotal",
  componentId: "sc-1cg2p58-3"
})(["padding:0 20px;display:flex;justify-content:space-between;margin-bottom:16px;"]);
const FooterFit = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "orderPage__FooterFit",
  componentId: "sc-1cg2p58-4"
})(["position:fixed;box-sizing:border-box;background:white;bottom:0;width:100vw;padding:16px 24px;display:grid;grid-template-rows:repeat(2,1fr);grid-template-columns:1fr max-content;grid-row-gap:8px;box-shadow:", ";> header{> span{font-size:12px;margin-left:8px;}}> aside{grid-area:1/2/3/3;}"], _style_common__WEBPACK_IMPORTED_MODULE_16__[/* mpStyle */ "b"].shadow['1']);
const useOrderPageHooks = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_19__["useRouter"])();
  const {
    state: stateShopCartModel,
    actions: actionsShopCartModel,
    getLoad
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_3__[/* useStoreModel */ "b"])(_index__WEBPACK_IMPORTED_MODULE_4__[/* ShopCartModel */ "b"]);
  const {
    state: stateGroupProduct,
    actions: actionsGroupProduct
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_3__[/* useStoreModel */ "b"])(_groupProduct_id___WEBPACK_IMPORTED_MODULE_20__[/* groupProductModel */ "e"]);
  const product = stateGroupProduct.product;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (router.query.homeType === _home_appModule__WEBPACK_IMPORTED_MODULE_21__[/* HomeType */ "b"].group && !stateShopCartModel.isGroupOrder) {
      actionsShopCartModel.updateIsGroupOrder(true);
    } else if (router.query.homeType === _home_appModule__WEBPACK_IMPORTED_MODULE_21__[/* HomeType */ "b"].home && stateShopCartModel.isGroupOrder) {
      actionsShopCartModel.updateIsGroupOrder(false);
    }
  }, [actionsShopCartModel, router.query.homeType, stateShopCartModel.isGroupOrder]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    actionsShopCartModel.getOrderInfo();
  }, [actionsShopCartModel]);

  if (stateShopCartModel.isGroupOrder) {
    var _stateShopCartModel$p, _product$priceOut, _stateShopCartModel$f;

    const addressData = stateShopCartModel.dealAddressData(stateShopCartModel);
    const cardData = ((_stateShopCartModel$p = stateShopCartModel.payCardList) === null || _stateShopCartModel$p === void 0 ? void 0 : _stateShopCartModel$p.find(v => v.id === stateShopCartModel.form.paymentMethodCardId)) || {};
    const productTotal = ((_product$priceOut = product.priceOut) !== null && _product$priceOut !== void 0 ? _product$priceOut : 0) * Object(_groupProduct_id___WEBPACK_IMPORTED_MODULE_20__[/* dealGroupNumbers */ "d"])(product) * stateGroupProduct.selectNum;
    const transportationCosts = stateShopCartModel.dealTransportationCosts(stateShopCartModel, productTotal);
    const actuallyPaid = stateGroupProduct.dealDiscountAmount(stateGroupProduct) + transportationCosts + Object(_tools_utils__WEBPACK_IMPORTED_MODULE_15__[/* dealMaybeNumber */ "b"])(stateShopCartModel.form.saleTax) - Object(_tools_utils__WEBPACK_IMPORTED_MODULE_15__[/* dealMaybeNumber */ "b"])((_stateShopCartModel$f = stateShopCartModel.form) === null || _stateShopCartModel$f === void 0 ? void 0 : _stateShopCartModel$f.deductCoin);
    const generateCoin = actuallyPaid * 0.01;
    return {
      stateShopCartModel,
      actionsShopCartModel,
      getLoad,
      addressData,
      cardData,
      productTotal,
      transportationCosts,
      actuallyPaid,
      generateCoin,
      product,
      stateGroupProduct,
      actionsGroupProduct
    };
  } else {
    var _stateShopCartModel$p2, _stateShopCartModel$f2;

    const addressData = stateShopCartModel.dealAddressData(stateShopCartModel);
    const cardData = ((_stateShopCartModel$p2 = stateShopCartModel.payCardList) === null || _stateShopCartModel$p2 === void 0 ? void 0 : _stateShopCartModel$p2.find(v => v.id === stateShopCartModel.form.paymentMethodCardId)) || {};
    const productTotal = stateShopCartModel.dealProductTotal(stateShopCartModel);
    const transportationCosts = stateShopCartModel.dealTransportationCosts(stateShopCartModel, productTotal);
    const actuallyPaid = productTotal + transportationCosts - Object(_tools_utils__WEBPACK_IMPORTED_MODULE_15__[/* dealMaybeNumber */ "b"])(stateShopCartModel.form.deductCoin) + Object(_tools_utils__WEBPACK_IMPORTED_MODULE_15__[/* dealMaybeNumber */ "b"])(stateShopCartModel.form.saleTax) - Object(_tools_utils__WEBPACK_IMPORTED_MODULE_15__[/* dealMaybeNumber */ "b"])((_stateShopCartModel$f2 = stateShopCartModel.form) === null || _stateShopCartModel$f2 === void 0 ? void 0 : _stateShopCartModel$f2.couponDiscount);
    const generateCoin = actuallyPaid * 0.01;
    return {
      stateShopCartModel,
      actionsShopCartModel,
      getLoad,
      addressData,
      cardData,
      productTotal,
      transportationCosts,
      actuallyPaid,
      generateCoin,
      product,
      stateGroupProduct,
      actionsGroupProduct
    };
  }
};
const OrderPage = () => {
  var _addressData$fullName, _addressData$streetAd, _addressData$city, _addressData$province, _addressData$zip, _addressData$name, _addressData$address, _addressData$city2, _addressData$province2, _addressData$zip2, _stateShopCartModel$f3, _stateShopCartModel$f4, _stateShopCartModel$u;

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_19__["useRouter"])();
  const {
    stateShopCartModel,
    actionsShopCartModel,
    getLoad,
    addressData,
    cardData,
    productTotal,
    transportationCosts,
    actuallyPaid,
    generateCoin
  } = useOrderPageHooks();
  const {
    actions: actionsSelectAddressModel
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_3__[/* useStoreModel */ "b"])(_components_SelectAddress__WEBPACK_IMPORTED_MODULE_12__[/* selectAddressModel */ "b"]);
  const {
    actions: actionsSelectCardModel
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_3__[/* useStoreModel */ "b"])(_components_SelectCard__WEBPACK_IMPORTED_MODULE_14__[/* selectCardModel */ "b"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (stateShopCartModel.pageType === _index__WEBPACK_IMPORTED_MODULE_4__[/* pageTypeEnum */ "c"].order) {
      window.history.pushState(null, '', document.URL);
      window.addEventListener('popstate', state => {
        // 监听到返回事件，注意，只有触发了返回才会执行这个方法
        actionsShopCartModel.updatePageType(_index__WEBPACK_IMPORTED_MODULE_4__[/* pageTypeEnum */ "c"].shopCart);
      }, false);
    }

    return () => {
      window.removeEventListener('popstate', state => {
        actionsShopCartModel.updatePageType(_index__WEBPACK_IMPORTED_MODULE_4__[/* pageTypeEnum */ "c"].shopCart);
      });
    };
  }, [actionsShopCartModel, stateShopCartModel.pageType]);
  return __jsx("div", null, __jsx(_components_HeaderTitle_HeaderTitle__WEBPACK_IMPORTED_MODULE_2__[/* HeaderTitle */ "a"], {
    title: '订单支付',
    backCall: () => {
      actionsShopCartModel.updatePageType(_index__WEBPACK_IMPORTED_MODULE_4__[/* pageTypeEnum */ "c"].shopCart);
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
  }), Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__[/* ll */ "a"])(stateShopCartModel.form.pickUpType === _ss_common_enum__WEBPACK_IMPORTED_MODULE_7__[/* PickUpTypeEnum */ "i"].Self && '自取地址' || '送货地址')), __jsx(AddressBox, null, stateShopCartModel.form.pickUpType === _ss_common_enum__WEBPACK_IMPORTED_MODULE_7__[/* PickUpTypeEnum */ "i"].Self && __jsx("main", null, __jsx("header", null, `${(_addressData$fullName = addressData.fullName) !== null && _addressData$fullName !== void 0 ? _addressData$fullName : ''}`), __jsx("section", null, (_addressData$streetAd = addressData.streetAddress) !== null && _addressData$streetAd !== void 0 ? _addressData$streetAd : ''), __jsx("footer", null, `${(_addressData$city = addressData.city) !== null && _addressData$city !== void 0 ? _addressData$city : ''} ${(_addressData$province = addressData.province) !== null && _addressData$province !== void 0 ? _addressData$province : ''} ${(_addressData$zip = addressData.zip) !== null && _addressData$zip !== void 0 ? _addressData$zip : ''}`)) || __jsx("main", null, __jsx("header", null, `${(_addressData$name = addressData.name) !== null && _addressData$name !== void 0 ? _addressData$name : ''}`), __jsx("section", null, (_addressData$address = addressData.address) !== null && _addressData$address !== void 0 ? _addressData$address : ''), __jsx("footer", null, `${(_addressData$city2 = addressData.city) !== null && _addressData$city2 !== void 0 ? _addressData$city2 : ''} ${(_addressData$province2 = addressData.province) !== null && _addressData$province2 !== void 0 ? _addressData$province2 : ''} ${(_addressData$zip2 = addressData.zip) !== null && _addressData$zip2 !== void 0 ? _addressData$zip2 : ''}`)), __jsx("aside", null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["IconButton"], {
    onClick: async () => {
      const res = await actionsSelectAddressModel.openClick();

      if (res) {
        actionsShopCartModel.setForm(['addressId', res]);
      }
    }
  }, __jsx(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_1___default.a, null)))), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_11__[/* Space */ "b"], {
    c: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_13__["grey"][200],
    h: 16
  }), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_11__[/* Space */ "b"], {
    h: 16
  }), __jsx(ShopTitle, null, __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_11__[/* Space */ "b"], {
    w: 20
  }), Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__[/* ll */ "a"])('付款方式')), __jsx(CardBox, null, __jsx("header", null, cardData.name), __jsx("footer", null, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_15__[/* dealLastNumber */ "a"])(cardData.number)), __jsx("aside", null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["IconButton"], {
    onClick: async () => {
      const res = await actionsSelectCardModel.openClick();

      if (res) {
        actionsShopCartModel.setForm(['paymentMethodCardId', res]);
      }
    }
  }, __jsx(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_1___default.a, null)))), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_11__[/* Space */ "b"], {
    c: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_13__["grey"][200],
    h: 16
  }), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_11__[/* Space */ "b"], {
    h: 16
  }), __jsx(ShopTitle, null, __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_11__[/* Space */ "b"], {
    w: 20
  }), Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__[/* ll */ "a"])('使用达人币'), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_11__[/* Space */ "b"], {
    w: 16
  }), __jsx("footer", null, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__[/* ll */ "a"])('当月可用余额'), Object(_tools_utils__WEBPACK_IMPORTED_MODULE_15__[/* dealMoney */ "c"])(stateShopCartModel.user.orderCoinCurrentMonth))), __jsx("div", null, __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_11__[/* Space */ "b"], {
    w: 20
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["TextField"], {
    style: {
      marginTop: '8px',
      marginBottom: '24px'
    },
    label: Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__[/* ll */ "a"])(''),
    value: stateShopCartModel.form.deductCoin,
    onChange: e => {
      actionsShopCartModel.setForm(['deductCoin', e.target.value]);
    }
  })), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_11__[/* Space */ "b"], {
    c: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_13__["grey"][200],
    h: 16
  }), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_11__[/* Space */ "b"], {
    h: 16
  }), __jsx(ShopTotal, null, __jsx("header", null, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__[/* ll */ "a"])('购物车总计')), __jsx("footer", null, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_15__[/* dealMoney */ "c"])(productTotal - ((_stateShopCartModel$f3 = (_stateShopCartModel$f4 = stateShopCartModel.form) === null || _stateShopCartModel$f4 === void 0 ? void 0 : _stateShopCartModel$f4.couponDiscount) !== null && _stateShopCartModel$f3 !== void 0 ? _stateShopCartModel$f3 : 0)))), transportationCosts > 0 && __jsx(ShopTotal, null, __jsx("header", null, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__[/* ll */ "a"])('运费')), __jsx("footer", null, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_15__[/* dealMoney */ "c"])(transportationCosts))), __jsx(ShopTotal, null, __jsx("header", null, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__[/* ll */ "a"])('达人币抵扣')), __jsx("footer", null, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_15__[/* dealMoney */ "c"])(stateShopCartModel.form.deductCoin, '-'))), __jsx(ShopTotal, {
    style: {
      fontSize: '18px'
    }
  }, __jsx("header", null, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__[/* ll */ "a"])('订单总额')), __jsx("footer", null, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_15__[/* dealMoney */ "c"])(actuallyPaid))), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_11__[/* Space */ "b"], {
    h: 30
  })), __jsx(FooterFit, null, __jsx("header", null, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__[/* ll */ "a"])('本次订单'), __jsx("span", null, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__[/* ll */ "a"])((_stateShopCartModel$u = stateShopCartModel.userLevelList.find(v => {
    var _stateShopCartModel$u2;

    return v.code === ((_stateShopCartModel$u2 = stateShopCartModel.user.userInfo) === null || _stateShopCartModel$u2 === void 0 ? void 0 : _stateShopCartModel$u2.userLevel);
  })) === null || _stateShopCartModel$u === void 0 ? void 0 : _stateShopCartModel$u.name))), __jsx("footer", null, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__[/* ll */ "a"])('将获得下月使用达人币 '), __jsx("span", null, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_15__[/* dealMoney */ "c"])(generateCoin))), __jsx("aside", null, __jsx(_components_ButtonLoad_ButtonLoad__WEBPACK_IMPORTED_MODULE_17__[/* ButtonLoad */ "a"], {
    loading: getLoad(_graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_8__[/* doc */ "b"].saveOrder),
    onClick: async () => {
      var _stateShopCartModel$u3, _stateShopCartModel$u4, _res$saveOrder;

      if (Object(_tools_utils__WEBPACK_IMPORTED_MODULE_15__[/* dealMaybeNumber */ "b"])((_stateShopCartModel$u3 = stateShopCartModel.user) === null || _stateShopCartModel$u3 === void 0 ? void 0 : _stateShopCartModel$u3.orderCoinCurrentMonth) < Object(_tools_utils__WEBPACK_IMPORTED_MODULE_15__[/* dealMaybeNumber */ "b"])(stateShopCartModel.form.deductCoin)) {
        Object(_components_Message_Message__WEBPACK_IMPORTED_MODULE_18__[/* showMessage */ "b"])(Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__[/* ll */ "a"])('达人币余额不足'));
        return;
      }

      if (!stateShopCartModel.form.addressId || !addressData.city) {
        Object(_components_Message_Message__WEBPACK_IMPORTED_MODULE_18__[/* showMessage */ "b"])(Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__[/* ll */ "a"])('请选择送货地址'));
        return;
      }

      if (!cardData.number) {
        Object(_components_Message_Message__WEBPACK_IMPORTED_MODULE_18__[/* showMessage */ "b"])(Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__[/* ll */ "a"])('请选择信用卡'));
        return;
      }

      const submitData = _objectSpread(_objectSpread({}, stateShopCartModel.form), {}, {
        generateCoin,
        actuallyPaid,
        transportationCosts,
        subtotal: productTotal,
        currentUserLevel: (_stateShopCartModel$u4 = stateShopCartModel.user.userInfo) === null || _stateShopCartModel$u4 === void 0 ? void 0 : _stateShopCartModel$u4.userLevel,
        rOrderProduct: stateShopCartModel.shopCartList.map(v => {
          var _v$product;

          return {
            count: v.number,
            productId: (_v$product = v.product) === null || _v$product === void 0 ? void 0 : _v$product.id,
            product: v.product
          };
        })
      });

      const res = await actionsShopCartModel.submit(_objectSpread({}, submitData));

      if (res === null || res === void 0 ? void 0 : (_res$saveOrder = res.saveOrder) === null || _res$saveOrder === void 0 ? void 0 : _res$saveOrder.id) {
        var _res$saveOrder2;

        Object(_components_Message_Message__WEBPACK_IMPORTED_MODULE_18__[/* showMessage */ "b"])('操作成功 将前往付款');

        const _query = Object(_tools_utils__WEBPACK_IMPORTED_MODULE_15__[/* dealUrlQuery */ "d"])({
          orderId: res === null || res === void 0 ? void 0 : (_res$saveOrder2 = res.saveOrder) === null || _res$saveOrder2 === void 0 ? void 0 : _res$saveOrder2.id
        });

        await router.replace(`/m/pay${_query}`, `/m/pay${_query}`);
        actionsShopCartModel.clearData();
        actionsShopCartModel.getList();
      }
    },
    variant: 'contained',
    color: 'secondary'
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__[/* ll */ "a"])('提交订单')))), __jsx(_components_SelectAddress__WEBPACK_IMPORTED_MODULE_12__[/* SelectAddress */ "a"], null), __jsx(_components_SelectCard__WEBPACK_IMPORTED_MODULE_14__[/* SelectCard */ "a"], null));
};

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
/* harmony import */ var _view_m_me_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("URg2");
/* harmony import */ var _graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("i7FU");
/* harmony import */ var _Message_Message__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("OO/1");
/* harmony import */ var _tools_dealKey__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("+vfP");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("+FwM");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _view_m_cart__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("We6d");
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
})(["padding:10px 10px 0;> header{width:100%;height:40vw;> img{border-radius:8px;width:100%;height:40vw;}}> main{margin-top:10px;line-height:22px;", ";}> footer{margin-top:4px;display:flex;align-items:center;> main{flex-grow:1;}> .MuiButtonBase-root{padding:5px;}}"], _style_common__WEBPACK_IMPORTED_MODULE_9__[/* mpStyle */ "b"].ellipsis);
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
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_8__[/* dealMoney */ "c"])(product === null || product === void 0 ? void 0 : product.priceMarket)), __jsx("main", {
    style: {
      display: 'inline-block',
      fontSize: '14px',
      marginLeft: '6px',
      color: _style_common__WEBPACK_IMPORTED_MODULE_9__[/* mpStyle */ "b"].red,
      flexShrink: 0
    }
  }, priceOutTip !== null && priceOutTip !== void 0 ? priceOutTip : '', Object(_tools_utils__WEBPACK_IMPORTED_MODULE_8__[/* dealMoney */ "c"])(product === null || product === void 0 ? void 0 : product.priceOut)));
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
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_11__[/* useStoreModel */ "b"])(_view_m_cart__WEBPACK_IMPORTED_MODULE_17__[/* ShopCartModel */ "b"]);
  const {
    state: stateMe,
    actions: actionsMe
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_11__[/* useStoreModel */ "b"])(_view_m_me_model__WEBPACK_IMPORTED_MODULE_12__[/* meModel */ "a"]);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(() => {
    if (!stateMe.user.id) {
      actionsMe.getLoginUser();
    }
  }, [actionsMe, stateMe.user.id]);
  const {
    actions: actionsPM
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_11__[/* useStoreModel */ "b"])(productModel);
  return __jsx(Box, null, __jsx("header", null, __jsx("img", {
    src: Object(_tools_img__WEBPACK_IMPORTED_MODULE_6__[/* dealImgUrl */ "a"])(product === null || product === void 0 ? void 0 : (_product$img = product.img) === null || _product$img === void 0 ? void 0 : (_product$img$ = _product$img[0]) === null || _product$img$ === void 0 ? void 0 : _product$img$.url),
    alt: ""
  })), __jsx("main", null, product.name, " ", product.weight, product.unit, " ", product.packingUnitString), __jsx("footer", null, __jsx(ProductPrice, {
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
})(["display:flex;padding:8px;box-shadow:", ";border-radius:8px;margin-bottom:8px;"], _style_common__WEBPACK_IMPORTED_MODULE_9__[/* mpStyle */ "b"].shadow['1']);
const Img = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ProductItem__Img",
  componentId: "sc-1cef71f-2"
})(["width:35vw;height:35vw;margin-right:8px;> img{width:35vw;height:35vw;}"]);
const LeftBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ProductItem__LeftBox",
  componentId: "sc-1cef71f-3"
})(["display:flex;flex-direction:column;flex-grow:1;width:0;> main{line-height:22px;", ";}"], _style_common__WEBPACK_IMPORTED_MODULE_9__[/* mpStyle */ "b"].ellipsis);
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
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_11__[/* useStoreModel */ "b"])(_view_m_me_model__WEBPACK_IMPORTED_MODULE_12__[/* meModel */ "a"]);
  const {
    actions: actionsPM
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_11__[/* useStoreModel */ "b"])(productModel);
  const {
    actions: actionsShopCart
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_11__[/* useStoreModel */ "b"])(_view_m_cart__WEBPACK_IMPORTED_MODULE_17__[/* ShopCartModel */ "b"]);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(() => {
    if (!stateMe.user.id) {
      actionsMe.getLoginUser();
    }
  }, [actionsMe, stateMe.user.id]);
  return __jsx(RowBox, {
    key: `ProductItemOneRow_${product.id}`
  }, __jsx(Img, null, __jsx("img", {
    src: Object(_tools_img__WEBPACK_IMPORTED_MODULE_6__[/* dealImgUrl */ "a"])(product === null || product === void 0 ? void 0 : (_product$img2 = product.img) === null || _product$img2 === void 0 ? void 0 : (_product$img2$ = _product$img2[0]) === null || _product$img2$ === void 0 ? void 0 : _product$img2$.url),
    alt: ""
  })), __jsx(LeftBox, null, __jsx("main", null, product.name, " ", product.weight, product.unit, " ", product.packingUnitString), showSumOrder && __jsx(Tip, null, sumOrderTip, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__[/* ll */ "a"])('销量'), ": ", product.sumOrder), __jsx(Price, null, __jsx(ProductPrice, {
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
  }, __jsx(_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_4___default.a, null), Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__[/* ll */ "a"])('加入购物车')))));
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
})(["display:flex;flex-grow:1;flex-direction:column;"]);
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
})(["margin-top:8px;color:", ";"], _style_common__WEBPACK_IMPORTED_MODULE_9__[/* mpStyle */ "b"].red);
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
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_11__[/* useStoreModel */ "b"])(_view_m_me_model__WEBPACK_IMPORTED_MODULE_12__[/* meModel */ "a"]);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_18__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(() => {
    if (!stateMe.user.id) {
      actionsMe.getLoginUser();
    }
  }, [actionsMe, stateMe.user.id]);
  return __jsx(GroupBox, {
    key: `GroupBox_${product.id}`
  }, __jsx(GroupImg, null, __jsx("img", {
    src: Object(_tools_img__WEBPACK_IMPORTED_MODULE_6__[/* dealImgUrl */ "a"])(product === null || product === void 0 ? void 0 : (_product$img3 = product.img) === null || _product$img3 === void 0 ? void 0 : (_product$img3$ = _product$img3[0]) === null || _product$img3$ === void 0 ? void 0 : _product$img3$.url),
    alt: ""
  })), __jsx(RightBox, null, __jsx(Title, null, product.name, "(", product.groupRemark, "/", product.groupAmount, product.groupAmountUnitString, "/", product.groupPrecisionString, ")"), showSumOrder && __jsx(OrderTip, null, sumOrderTip, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__[/* ll */ "a"])('拼团达人数'), ": ", product.sumOrder), __jsx(MarketPrice, null, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__[/* ll */ "a"])('市场价'), __jsx("span", null, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_8__[/* dealMoney */ "c"])(product.priceMarket))), __jsx(OutPrice, null, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__[/* ll */ "a"])('基准价格'), __jsx("span", null, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_8__[/* dealMoney */ "c"])(product.priceOut))), __jsx(Star, null, (groupQueue === null || groupQueue === void 0 ? void 0 : groupQueue.id) && __jsx("div", null, __jsx(_Box_Box__WEBPACK_IMPORTED_MODULE_20__[/* Space */ "b"], {
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
      router.push(`/m/groupProduct/[id]`, `/m/groupProduct/${product.id}`);
    }
  }, __jsx(_material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_3___default.a, null), Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__[/* ll */ "a"])('拼一个')))));
};

/***/ }),

/***/ "p0Nc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return inputPromoCodeModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputPromoCodeDialog; });
/* harmony import */ var _commonModel_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Nu2o");
/* harmony import */ var _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("U81q");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tools_dealKey__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("+vfP");
/* harmony import */ var _ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("+/yG");
/* harmony import */ var _tools_commonAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("soTg");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Message_Message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("OO/1");
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;









const inputPromoCodeModel = Object(_ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_5__[/* mergeTwoModel */ "b"])(Object(_commonModel_dialog__WEBPACK_IMPORTED_MODULE_0__[/* dialogModelFactory */ "a"])('inputPromoCodeModel', () => {}), Object(_ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_5__[/* modelFactory */ "c"])('input', {
  form: {
    promoCode: ''
  }
}, {
  setForm: _tools_commonAction__WEBPACK_IMPORTED_MODULE_6__[/* setForm */ "a"]
}));
const Footer = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div.withConfig({
  displayName: "InputPromoCode__Footer",
  componentId: "sc-1irbxcs-0"
})(["padding-top:8px;text-align:right;"]);
const InputPromoCodeDialog = () => {
  const {
    actions: actionsInputPromoCodeModel,
    state: stateInputPromoCodeModel
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_1__[/* useStoreModel */ "b"])(inputPromoCodeModel);
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Dialog"], {
    open: stateInputPromoCodeModel.open,
    onClose: actionsInputPromoCodeModel.onClose
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["DialogContent"], null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    label: Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_4__[/* ll */ "a"])('请输入验证码'),
    value: stateInputPromoCodeModel.form.promoCode,
    onChange: event => actionsInputPromoCodeModel.setForm(['promoCode', event.target.value])
  }), __jsx(Footer, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: 'contained',
    color: 'secondary',
    onClick: async () => {
      const testRes = await stateInputPromoCodeModel.dialogData(stateInputPromoCodeModel.form.promoCode);

      if (testRes) {
        Object(_components_Message_Message__WEBPACK_IMPORTED_MODULE_8__[/* showMessage */ "b"])(testRes);
      } else {
        actionsInputPromoCodeModel.onClose();
        actionsInputPromoCodeModel.setForm(['promoCode', '']);
      }
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_4__[/* ll */ "a"])('确定')))));
};

/***/ }),

/***/ "pHDM":
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
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("We6d");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tools_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("cBzo");
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









const selectCardModel = Object(_commonModel_dialog__WEBPACK_IMPORTED_MODULE_2__[/* dialogModelFactory */ "a"])('selectCardModel', {});
const CardBox = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div.withConfig({
  displayName: "SelectCard__CardBox",
  componentId: "sc-1156cns-0"
})(["display:grid;grid-template-columns:minmax(60vw,1fr) min-content;grid-template-rows:repeat(2,fr);grid-row-gap:8px;margin-bottom:16px;> header{font-size:16px;font-weight:bold;}> aside{grid-area:1/2/3/3;}"]);
const Footer = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div.withConfig({
  displayName: "SelectCard__Footer",
  componentId: "sc-1156cns-1"
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
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_3__[/* useStoreModel */ "b"])(_index__WEBPACK_IMPORTED_MODULE_5__[/* ShopCartModel */ "b"]);
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Dialog"], {
    open: stateSelectCard.open,
    onClose: actionsSelectCard.onClose
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["DialogTitle"], null, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_4__[/* ll */ "a"])('选择信用卡')), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["DialogContent"], null, stateShopCartModel.payCardList.map(v => __jsx(CardBox, {
    key: `DialogTitleAddressBox_${v.id}`
  }, __jsx("header", null, v.name), __jsx("footer", null, `${Object(_tools_utils__WEBPACK_IMPORTED_MODULE_8__[/* dealLastNumber */ "a"])(v.number)}`), __jsx("aside", null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Radio"], {
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
      router.push('/m/me/myCreditCard/edit/[id]', '/m/me/myCreditCard/edit/0');
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_4__[/* ll */ "a"])('添加新方式')))));
};

/***/ }),

/***/ "soTg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setForm; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cBzo");

const setForm = ([path, value], option) => {
  option.setData(Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* fpSetPre */ "i"])(`form.${path}`, value));
};

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

  const closeUpdateShopCart = () => {
    actionsUpdateShopCartModel.setForm(['num', 1]);
    actionsUpdateShopCartModel.onClose();
  };

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Dialog"], {
    open: stateUpdateShopCartModel.open,
    onClose: closeUpdateShopCart
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["DialogTitle"], null, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_2__[/* ll */ "a"])('添加数量')), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["DialogContent"], null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["TextField"], {
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
      closeUpdateShopCart();
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_2__[/* ll */ "a"])('确定')))));
};

/***/ }),

/***/ "wNMP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SalesRankModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalesRank; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("+/yG");
/* harmony import */ var _graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("i7FU");
/* harmony import */ var _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("U81q");
/* harmony import */ var _components_ProductItem_ProductItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("oxxF");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tools_dealKey__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("+vfP");
/* harmony import */ var _tools_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("cBzo");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ss_common_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("4Rmy");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Box_Box__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("cW92");
/* harmony import */ var _Tabs_Tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("+CC5");
/* harmony import */ var _appModule__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("LIvt");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















const SalesRankModel = Object(_ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_1__[/* modelFactory */ "c"])('SalesRank', {
  listData: []
}, {
  getList: async (value, option) => {
    var _res$productListOrder, _res$productListOrder2;

    const res = await option.query(_graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_2__[/* doc */ "b"].productListOrderByOrder, _objectSpread({
      orderByType: ''
    }, value !== null && value !== void 0 ? value : {}));
    option.setData(Object(_tools_utils__WEBPACK_IMPORTED_MODULE_7__[/* fpMergePre */ "g"])({
      listData: (_res$productListOrder = res === null || res === void 0 ? void 0 : (_res$productListOrder2 = res.productListOrderByOrder) === null || _res$productListOrder2 === void 0 ? void 0 : _res$productListOrder2.list) !== null && _res$productListOrder !== void 0 ? _res$productListOrder : []
    }));
  },
  tabChange: ([value, homeType], option) => {
    const query = Object(_tools_utils__WEBPACK_IMPORTED_MODULE_7__[/* dealUrlQuery */ "d"])({
      salesRankType: value
    });
    next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push(`/m/${homeType}/[appModule]${query}`, `/m/${homeType}/salesRank${query}`);
  }
});
const Box = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "SalesRank__Box",
  componentId: "sc-9f7dxi-0"
})([""]);
const SaleRankTypeEnumLabel = {
  [_ss_common_enum__WEBPACK_IMPORTED_MODULE_9__[/* SaleRankTypeEnum */ "m"].OneDay]: '本日',
  [_ss_common_enum__WEBPACK_IMPORTED_MODULE_9__[/* SaleRankTypeEnum */ "m"].OneWeek]: '本周',
  [_ss_common_enum__WEBPACK_IMPORTED_MODULE_9__[/* SaleRankTypeEnum */ "m"].OneMonth]: '本月'
};
const SalesRank = () => {
  var _router$query$salesRa;

  const {
    state: homeTabsState
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_3__[/* useStoreModel */ "b"])(_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_12__[/* HomeTabsModel */ "b"]);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    var _router$query;

    if (!router.query.salesRankType || ![_ss_common_enum__WEBPACK_IMPORTED_MODULE_9__[/* SaleRankTypeEnum */ "m"].OneMonth, _ss_common_enum__WEBPACK_IMPORTED_MODULE_9__[/* SaleRankTypeEnum */ "m"].OneWeek, _ss_common_enum__WEBPACK_IMPORTED_MODULE_9__[/* SaleRankTypeEnum */ "m"].OneDay].includes(`${router === null || router === void 0 ? void 0 : (_router$query = router.query) === null || _router$query === void 0 ? void 0 : _router$query.salesRankType}`)) {
      const query = Object(_tools_utils__WEBPACK_IMPORTED_MODULE_7__[/* dealUrlQuery */ "d"])({
        salesRankType: _ss_common_enum__WEBPACK_IMPORTED_MODULE_9__[/* SaleRankTypeEnum */ "m"].OneDay
      });
      router.push(`/m/${homeTabsState.homeType}/[appModule]${query}`, `/m/${homeTabsState.homeType}/salesRank${query}`);
    }
  }, [router.query.salesRankType, homeTabsState.homeType, router]);
  const {
    actions: actionsSalesRankModel,
    state: stateSalesRankModel
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_3__[/* useStoreModel */ "b"])(SalesRankModel);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (router.query.salesRankType) {
      actionsSalesRankModel.getList({
        productInput: {
          isGroup: homeTabsState.homeType === _appModule__WEBPACK_IMPORTED_MODULE_13__[/* HomeType */ "b"].group ? 1 : 0
        },
        orderByType: router.query.salesRankType
      });
    }
  }, [actionsSalesRankModel, homeTabsState.homeType, router.query.salesRankType]);
  return __jsx(Box, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Tabs"], {
    variant: 'fullWidth',
    value: (_router$query$salesRa = router.query.salesRankType) !== null && _router$query$salesRa !== void 0 ? _router$query$salesRa : _ss_common_enum__WEBPACK_IMPORTED_MODULE_9__[/* SaleRankTypeEnum */ "m"].OneDay,
    onChange: (event, value) => actionsSalesRankModel.tabChange([value, homeTabsState.homeType])
  }, [[_ss_common_enum__WEBPACK_IMPORTED_MODULE_9__[/* SaleRankTypeEnum */ "m"].OneDay, '本日排行'], [_ss_common_enum__WEBPACK_IMPORTED_MODULE_9__[/* SaleRankTypeEnum */ "m"].OneWeek, '本周排行'], [_ss_common_enum__WEBPACK_IMPORTED_MODULE_9__[/* SaleRankTypeEnum */ "m"].OneMonth, '本月排行']].map(v => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Tab"], {
    key: `SaleRankTab${v[0]}`,
    value: v[0],
    label: Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__[/* ll */ "a"])(v[1])
  }))), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_11__[/* Space */ "b"], {
    h: 16
  }), stateSalesRankModel.listData.map(product => {
    var _router$query2, _router$query3;

    return homeTabsState.homeType === _appModule__WEBPACK_IMPORTED_MODULE_13__[/* HomeType */ "b"].group ? __jsx(_components_ProductItem_ProductItem__WEBPACK_IMPORTED_MODULE_4__[/* GroupProductItem */ "a"], {
      product: product,
      key: `ProductItem_${product.id}`,
      showSumOrder: true,
      sumOrderTip: SaleRankTypeEnumLabel[`${(_router$query2 = router.query) === null || _router$query2 === void 0 ? void 0 : _router$query2.salesRankType}`]
    }) : __jsx(_components_ProductItem_ProductItem__WEBPACK_IMPORTED_MODULE_4__[/* ProductItemOneRow */ "c"], {
      key: `ProductItemOneRow_${product.id}`,
      product: product,
      showSumOrder: true,
      sumOrderTip: SaleRankTypeEnumLabel[`${(_router$query3 = router.query) === null || _router$query3 === void 0 ? void 0 : _router$query3.salesRankType}`]
    });
  }));
};

/***/ }),

/***/ "ysgU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getToken; });
/* global localStorage */
const setToken = (token, name = 'token') => localStorage.setItem(name, token);
const getToken = (name = 'token') => localStorage.getItem(name) || '';

/***/ }),

/***/ "ytnY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return promotionFlashSaleModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromotionFlashSale; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("+/yG");
/* harmony import */ var _graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("i7FU");
/* harmony import */ var _tools_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cBzo");
/* harmony import */ var _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("U81q");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tools_dealKey__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("+vfP");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("+FwM");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_ProductItem_ProductItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("oxxF");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("9BML");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_9__);
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

const promotionFlashSaleModel = Object(_ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_1__[/* modelFactory */ "c"])('promotionFlashSaleModel', {
  limitTimeData: [],
  nowLimitData: {},
  productList: [],
  isNext: false
}, {
  calcDifferenceHours: (value, option) => {
    var _option$data$nowLimit, _option$data, _option$data$nowLimit2;

    return Object(date_fns__WEBPACK_IMPORTED_MODULE_9__["differenceInHours"])(new Date((_option$data$nowLimit = (_option$data = option.data) === null || _option$data === void 0 ? void 0 : (_option$data$nowLimit2 = _option$data.nowLimitData) === null || _option$data$nowLimit2 === void 0 ? void 0 : _option$data$nowLimit2.endTime) !== null && _option$data$nowLimit !== void 0 ? _option$data$nowLimit : ''), new Date());
  },
  calcDifferenceMinutes: (value, option) => {
    var _option$data$nowLimit3, _option$data$nowLimit4;

    return Object(date_fns__WEBPACK_IMPORTED_MODULE_9__["differenceInMinutes"])(new Date((_option$data$nowLimit3 = (_option$data$nowLimit4 = option.data.nowLimitData) === null || _option$data$nowLimit4 === void 0 ? void 0 : _option$data$nowLimit4.endTime) !== null && _option$data$nowLimit3 !== void 0 ? _option$data$nowLimit3 : ''), new Date()) % 60;
  },
  getData: async (value, option) => {
    var _res$limitTimeData, _res$limitTimeData$va, _nowSaleData$data$sel, _nowSaleData$data, _res$limitTimeData2, _res$limitTimeData2$v, _ref, _productRes$productLi;

    const res = await option.query(_graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_2__[/* doc */ "b"].limitTimeData);
    const nowSaleData = getNowSale(res === null || res === void 0 ? void 0 : (_res$limitTimeData = res.limitTimeData) === null || _res$limitTimeData === void 0 ? void 0 : (_res$limitTimeData$va = _res$limitTimeData.value) === null || _res$limitTimeData$va === void 0 ? void 0 : _res$limitTimeData$va.list);
    const productRes = await option.query(_graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_2__[/* doc */ "b"].productListByIds, {
      ids: (_nowSaleData$data$sel = nowSaleData === null || nowSaleData === void 0 ? void 0 : (_nowSaleData$data = nowSaleData.data) === null || _nowSaleData$data === void 0 ? void 0 : _nowSaleData$data.selectProductList) !== null && _nowSaleData$data$sel !== void 0 ? _nowSaleData$data$sel : []
    });
    option.setData(Object(_tools_utils__WEBPACK_IMPORTED_MODULE_3__[/* fpMergePre */ "g"])({
      nowLimitData: nowSaleData.data,
      isNext: nowSaleData.isNext,
      limitTimeData: (res === null || res === void 0 ? void 0 : (_res$limitTimeData2 = res.limitTimeData) === null || _res$limitTimeData2 === void 0 ? void 0 : (_res$limitTimeData2$v = _res$limitTimeData2.value) === null || _res$limitTimeData2$v === void 0 ? void 0 : _res$limitTimeData2$v.list) || [],
      productList: (_ref = [// ...productRes?.productListByIds?.list,
      // ...productRes?.productListByIds?.list,
      ...((productRes === null || productRes === void 0 ? void 0 : (_productRes$productLi = productRes.productListByIds) === null || _productRes$productLi === void 0 ? void 0 : _productRes$productLi.list) || [])]) !== null && _ref !== void 0 ? _ref : []
    }));
  }
});
const Tip = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "PromotionFlashSale__Tip",
  componentId: "a25igu-0"
})(["display:flex;align-items:center;margin-bottom:8px;> main{font-size:16px;font-weight:bold;margin-right:8px;}> span{padding:4px 2px;margin:0 2px;background:", ";color:white;border-radius:6px;}"], _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_7__["grey"][800]);
const PromotionFlashSale = () => {
  var _statePromotionFlashS;

  const {
    state: statePromotionFlashSale,
    actions: actionsPromotionFlashSale
  } = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_4__[/* useStoreModel */ "b"])(promotionFlashSaleModel);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    actionsPromotionFlashSale.getData();
  }, []);
  return __jsx("div", null, ((_statePromotionFlashS = statePromotionFlashSale.nowLimitData) === null || _statePromotionFlashS === void 0 ? void 0 : _statePromotionFlashS.id) && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Tip, null, __jsx("main", null, statePromotionFlashSale.isNext && Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__[/* ll */ "a"])('距离下次抢购') || Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__[/* ll */ "a"])('限时选购')), __jsx("section", null, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__[/* ll */ "a"])('剩余')), __jsx("span", null, `${actionsPromotionFlashSale.calcDifferenceHours()}`), __jsx("section", null, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__[/* ll */ "a"])('小时')), __jsx("span", null, `${actionsPromotionFlashSale.calcDifferenceMinutes()}`), __jsx("section", null, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_6__[/* ll */ "a"])('分钟'))), statePromotionFlashSale.productList.map(product => __jsx(_components_ProductItem_ProductItem__WEBPACK_IMPORTED_MODULE_8__[/* ProductItemOneRow */ "c"], {
    key: `ProductItemOneRow_${product.id}`,
    product: product,
    hideAction: statePromotionFlashSale.isNext
  }))) || __jsx("div", null, "\u6682\u65E0\u9650\u65F6\u62A2\u8D2D\uFF0C\u656C\u8BF7\u671F\u5F85"));
};

/***/ })

};;