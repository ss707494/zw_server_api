webpackHotUpdate("static\\development\\pages\\groupProduct\\[id].js",{

/***/ "./utils/view/groupProduct/[id].tsx":
/*!******************************************!*\
  !*** ./utils/view/groupProduct/[id].tsx ***!
  \******************************************/
/*! exports provided: groupProductModel, GroupProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupProductModel", function() { return groupProductModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupProduct", function() { return GroupProduct; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_StarRounded__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/StarRounded */ "./node_modules/@material-ui/icons/StarRounded.js");
/* harmony import */ var _material_ui_icons_StarRounded__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_StarRounded__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_StarBorderRounded__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/StarBorderRounded */ "./node_modules/@material-ui/icons/StarBorderRounded.js");
/* harmony import */ var _material_ui_icons_StarBorderRounded__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_StarBorderRounded__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ModelAction/modelUtil */ "./utils/ModelAction/modelUtil.ts");
/* harmony import */ var _graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../graphqlTypes/doc */ "./utils/graphqlTypes/doc/index.ts");
/* harmony import */ var _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ModelAction/useStore */ "./utils/ModelAction/useStore.ts");
/* harmony import */ var _tools_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../tools/utils */ "./utils/tools/utils.ts");
/* harmony import */ var _components_Swipe_Swipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/Swipe/Swipe */ "./utils/components/Swipe/Swipe.tsx");
/* harmony import */ var _components_HeaderTitle_HeaderTitle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/HeaderTitle/HeaderTitle */ "./utils/components/HeaderTitle/HeaderTitle.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _tools_dealKey__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../tools/dealKey */ "./utils/tools/dealKey.ts");
/* harmony import */ var _style_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../style/common */ "./utils/style/common.ts");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _groupOrderPage__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./groupOrderPage */ "./utils/view/groupProduct/groupOrderPage.tsx");





var _this = undefined,
    _jsxFileName = "D:\\code\\zw\\zw_client_web\\utils\\view\\groupProduct\\[id].tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

















var groupProductModel = Object(_ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_8__["modelFactory"])('groupProductModel', {
  product: {},
  groupQueneList: [],
  selectNum: 0
}, {
  getData: function () {
    var _getData = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(value, option) {
      var _res$productListByIds, _res$productListByIds2, _groupQueneList$group;

      var res, groupQueneList;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return option.query(_graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_9__["doc"].productListByIds, {
                ids: [value]
              });

            case 2:
              res = _context.sent;
              _context.next = 5;
              return option.query(_graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_9__["doc"].groupQueueList, {
                groupQueueItemInput: {
                  product: {
                    id: value
                  }
                }
              });

            case 5:
              groupQueneList = _context.sent;
              option.setData(Object(_tools_utils__WEBPACK_IMPORTED_MODULE_11__["fpMergePre"])({
                product: (_res$productListByIds = res === null || res === void 0 ? void 0 : (_res$productListByIds2 = res.productListByIds) === null || _res$productListByIds2 === void 0 ? void 0 : _res$productListByIds2.list[0]) !== null && _res$productListByIds !== void 0 ? _res$productListByIds : {},
                groupQueneList: (_groupQueneList$group = groupQueneList === null || groupQueneList === void 0 ? void 0 : groupQueneList.groupQueueList) !== null && _groupQueneList$group !== void 0 ? _groupQueneList$group : []
              }));

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function getData(_x, _x2) {
      return _getData.apply(this, arguments);
    }

    return getData;
  }(),
  updateSelectNum: function updateSelectNum(value, option) {
    option.setData(Object(_tools_utils__WEBPACK_IMPORTED_MODULE_11__["fpMergePre"])({
      selectNum: value === option.data.selectNum ? 0 : value
    }));
  }
});
var PriceRed = styled_components__WEBPACK_IMPORTED_MODULE_14__["default"].div.withConfig({
  displayName: "id__PriceRed",
  componentId: "sc-1c5vpsf-0"
})(["background:", ";color:white;display:grid;grid-template-columns:1fr 120px;grid-template-rows:repeat(2,30px);align-items:center;> main{grid-area:1/1/3/2;padding-left:20px;> span{margin-left:16px;}}"], _style_common__WEBPACK_IMPORTED_MODULE_16__["mpStyle"].red);
_c = PriceRed;
var Name = styled_components__WEBPACK_IMPORTED_MODULE_14__["default"].div.withConfig({
  displayName: "id__Name",
  componentId: "sc-1c5vpsf-1"
})(["padding:16px 20px;display:flex;align-items:flex-end;> main{font-size:22px;margin-right:8px;flex-shrink:0;}> section{> span{padding:0 4px;background:", ";border-radius:4px;position:relative;bottom:-4px;margin-left:8px;display:inline-flex;align-items:center;}}"], _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_17__["grey"]['700']);
_c2 = Name;

var YellowStar = function YellowStar() {
  return __jsx(_material_ui_icons_StarRounded__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: 'small',
    style: {
      color: '#FDD334'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 26
    }
  });
};

_c3 = YellowStar;
var Title = styled_components__WEBPACK_IMPORTED_MODULE_14__["default"].header.withConfig({
  displayName: "id__Title",
  componentId: "sc-1c5vpsf-2"
})(["font-size:20px;"]);
_c4 = Title;
var GroupQuene = styled_components__WEBPACK_IMPORTED_MODULE_14__["default"].div.withConfig({
  displayName: "id__GroupQuene",
  componentId: "sc-1c5vpsf-3"
})(["padding:16px;"]);
_c5 = GroupQuene;
var SmartMatch = styled_components__WEBPACK_IMPORTED_MODULE_14__["default"].div.withConfig({
  displayName: "id__SmartMatch",
  componentId: "sc-1c5vpsf-4"
})(["padding:16px 16px 90px;> section{margin-top:8px;display:flex;align-items:center;}> main{}"]);
_c6 = SmartMatch;
var Price = styled_components__WEBPACK_IMPORTED_MODULE_14__["default"].div.withConfig({
  displayName: "id__Price",
  componentId: "sc-1c5vpsf-5"
})(["margin-top:8px;display:flex;justify-content:space-between;align-items:center;> main{font-weight:bold;}> main,section{> *{text-align:center;}}"]);
_c7 = Price;
var Submit = styled_components__WEBPACK_IMPORTED_MODULE_14__["default"].div.withConfig({
  displayName: "id__Submit",
  componentId: "sc-1c5vpsf-6"
})(["position:fixed;height:60px;bottom:0;width:100vw;background:white;border-top:1px solid ", ";display:flex;align-items:center;justify-content:space-between;box-shadow:", ";> aside{padding-left:16px;color:", ";}"], _style_common__WEBPACK_IMPORTED_MODULE_16__["mpStyle"].red, _style_common__WEBPACK_IMPORTED_MODULE_16__["mpStyle"].shadow['1'], _style_common__WEBPACK_IMPORTED_MODULE_16__["mpStyle"].red);
_c8 = Submit;
var GroupProduct = function GroupProduct() {
  _s();

  var _ref, _router$query, _product$img, _product$priceOut, _product$priceOut2;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  var id = (_ref = (_router$query = router.query) === null || _router$query === void 0 ? void 0 : _router$query.id) !== null && _ref !== void 0 ? _ref : '';

  var _useStoreModel = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_10__["useStoreModel"])(groupProductModel),
      actionsGroupProduct = _useStoreModel.actions,
      stateGroupProduct = _useStoreModel.state;

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    actionsGroupProduct.getData(id);
  }, [id]);

  var _useStoreModel2 = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_10__["useStoreModel"])(_groupOrderPage__WEBPACK_IMPORTED_MODULE_19__["groupOrderPageModel"]),
      actionsGroupOrderPageModel = _useStoreModel2.actions;

  var product = stateGroupProduct.product;
  console.log(stateGroupProduct.groupQueneList);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 10
    }
  }, __jsx(_components_HeaderTitle_HeaderTitle__WEBPACK_IMPORTED_MODULE_13__["HeaderTitle"], {
    title: '产品详情',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 5
    }
  }), __jsx(_components_Swipe_Swipe__WEBPACK_IMPORTED_MODULE_12__["default"], {
    height: '240px',
    dataList: product === null || product === void 0 ? void 0 : (_product$img = product.img) === null || _product$img === void 0 ? void 0 : _product$img.map(function (v) {
      return _objectSpread(_objectSpread({}, v), {}, {
        imgUrl: v === null || v === void 0 ? void 0 : v.url
      });
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 5
    }
  }), __jsx(PriceRed, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 5
    }
  }, __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('基准价格'), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 9
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_11__["dealMoney"])(product.priceOut), "/", product.packingUnitString)), __jsx("aside", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('已成团'), 23, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('单')), __jsx("aside", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('拼团中'), 2, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('单'))), __jsx(Name, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 5
    }
  }, __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 7
    }
  }, product.name), __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 7
    }
  }, product.groupRemark, "/", product.groupAmount, product.groupAmountUnitString, __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 90
    }
  }), Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('分团精度'), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 7
    }
  }, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Array(product.groupPrecision)).map(function (v, i) {
    return i;
  }).map(function (value) {
    return __jsx(YellowStar, {
      key: value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 79
      }
    });
  })))), __jsx(GroupQuene, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 5
    }
  }, __jsx(Title, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('拼团中'))), __jsx(SmartMatch, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 5
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 7
    }
  }, __jsx(Title, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 9
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('智能匹配'))), __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('请点击'), __jsx(_material_ui_icons_StarBorderRounded__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 9
    }
  }), Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('确定您需要的份数')), __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 7
    }
  }, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Array(product.groupPrecision)).map(function (v, i) {
    return i;
  }).map(function (value) {
    return value + 1 > stateGroupProduct.selectNum ? __jsx(_material_ui_icons_StarBorderRounded__WEBPACK_IMPORTED_MODULE_6___default.a, {
      key: "clickStar".concat(value),
      fontSize: 'large',
      onClick: function onClick() {
        return actionsGroupProduct.updateSelectNum(value + 1);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 117
      }
    }) : __jsx(_material_ui_icons_StarRounded__WEBPACK_IMPORTED_MODULE_5___default.a, {
      key: "clickStar".concat(value),
      style: {
        color: '#FDD334'
      },
      fontSize: 'large',
      onClick: function onClick() {
        return actionsGroupProduct.updateSelectNum(value + 1);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 14
      }
    });
  })), __jsx(Price, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 7
    }
  }, __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 9
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 11
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_11__["dealMoney"])(((_product$priceOut = product.priceOut) !== null && _product$priceOut !== void 0 ? _product$priceOut : 0) * stateGroupProduct.selectNum)), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('折后价格'))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 9
    }
  }, "="), __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 9
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 11
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_11__["dealMoney"])(((_product$priceOut2 = product.priceOut) !== null && _product$priceOut2 !== void 0 ? _product$priceOut2 : 0) * stateGroupProduct.selectNum)), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('基准价格'))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 9
    }
  }, "x"), __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 9
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 11
    }
  }, "1"), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('份数折扣'))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 9
    }
  }, "x"), __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 9
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 11
    }
  }, "1"), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('成团折上折'))))), __jsx(Submit, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 5
    }
  }, __jsx("aside", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('选择了'), stateGroupProduct.selectNum, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('份')), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__["Button"], {
    style: {
      height: '100%',
      padding: '0 32px',
      borderRadius: '0',
      fontSize: '18px'
    },
    color: 'secondary',
    variant: 'contained',
    onClick: function onClick() {
      actionsGroupOrderPageModel.open();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('去结算'))), __jsx(_groupOrderPage__WEBPACK_IMPORTED_MODULE_19__["GroupOrderPage"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 5
    }
  }));
};

_s(GroupProduct, "qrgw/HnHGKkNkRufwtvbVCJovl4=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"], _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_10__["useStoreModel"], _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_10__["useStoreModel"]];
});

_c9 = GroupProduct;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;

$RefreshReg$(_c, "PriceRed");
$RefreshReg$(_c2, "Name");
$RefreshReg$(_c3, "YellowStar");
$RefreshReg$(_c4, "Title");
$RefreshReg$(_c5, "GroupQuene");
$RefreshReg$(_c6, "SmartMatch");
$RefreshReg$(_c7, "Price");
$RefreshReg$(_c8, "Submit");
$RefreshReg$(_c9, "GroupProduct");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy92aWV3L2dyb3VwUHJvZHVjdC8udHN4Il0sIm5hbWVzIjpbImdyb3VwUHJvZHVjdE1vZGVsIiwibW9kZWxGYWN0b3J5IiwicHJvZHVjdCIsImdyb3VwUXVlbmVMaXN0Iiwic2VsZWN0TnVtIiwiZ2V0RGF0YSIsInZhbHVlIiwib3B0aW9uIiwicXVlcnkiLCJkb2MiLCJwcm9kdWN0TGlzdEJ5SWRzIiwiaWRzIiwicmVzIiwiZ3JvdXBRdWV1ZUxpc3QiLCJncm91cFF1ZXVlSXRlbUlucHV0IiwiaWQiLCJzZXREYXRhIiwiZnBNZXJnZVByZSIsImxpc3QiLCJ1cGRhdGVTZWxlY3ROdW0iLCJkYXRhIiwiUHJpY2VSZWQiLCJzdHlsZWQiLCJkaXYiLCJtcFN0eWxlIiwicmVkIiwiTmFtZSIsImdyZXkiLCJZZWxsb3dTdGFyIiwiY29sb3IiLCJUaXRsZSIsImhlYWRlciIsIkdyb3VwUXVlbmUiLCJTbWFydE1hdGNoIiwiUHJpY2UiLCJTdWJtaXQiLCJzaGFkb3ciLCJHcm91cFByb2R1Y3QiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdG9yZU1vZGVsIiwiYWN0aW9uc0dyb3VwUHJvZHVjdCIsImFjdGlvbnMiLCJzdGF0ZUdyb3VwUHJvZHVjdCIsInN0YXRlIiwidXNlRWZmZWN0IiwiZ3JvdXBPcmRlclBhZ2VNb2RlbCIsImFjdGlvbnNHcm91cE9yZGVyUGFnZU1vZGVsIiwiY29uc29sZSIsImxvZyIsImltZyIsIm1hcCIsInYiLCJpbWdVcmwiLCJ1cmwiLCJscyIsImRlYWxNb25leSIsInByaWNlT3V0IiwicGFja2luZ1VuaXRTdHJpbmciLCJuYW1lIiwiZ3JvdXBSZW1hcmsiLCJncm91cEFtb3VudCIsImdyb3VwQW1vdW50VW5pdFN0cmluZyIsIkFycmF5IiwiZ3JvdXBQcmVjaXNpb24iLCJpIiwiaGVpZ2h0IiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsImZvbnRTaXplIiwib3BlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7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QUQ7QUFDSSxTQUFLLEVBQUU7QUFBQ1csWUFBTSxFQUFFLE1BQVQ7QUFBaUJDLGFBQU8sRUFBRSxRQUExQjtBQUFvQ0Msa0JBQVksRUFBRSxHQUFsRDtBQUF1REMsY0FBUSxFQUFFO0FBQWpFLEtBRFg7QUFFSSxTQUFLLEVBQUUsV0FGWDtBQUdJLFdBQU8sRUFBRSxXQUhiO0FBSUksV0FBTyxFQUFFLG1CQUFNO0FBQ2J0QixnQ0FBMEIsQ0FBQ3VCLElBQTNCO0FBQ0QsS0FOTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUdmLDBEQUFFLENBQUMsS0FBRCxDQVJMLENBRkYsQ0F2RUssRUFvRkwsTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBcEZLLENBQVA7QUFzRkQsQ0FsR007O0dBQU1sQixZO1VBQ0lFLHFELEVBRWtEQyxvRSxFQUluQkEsb0U7OztNQVBuQ0gsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcZ3JvdXBQcm9kdWN0XFxbaWRdLmpzLjdlZmZhMjJhMmQ4OTJmMDZhZTMwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU3RhclJvdW5kZWRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TdGFyUm91bmRlZCdcclxuaW1wb3J0IFN0YXJCb3JkZXJSb3VuZGVkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU3RhckJvcmRlclJvdW5kZWQnXHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHttb2RlbEZhY3Rvcnl9IGZyb20gJy4uLy4uL01vZGVsQWN0aW9uL21vZGVsVXRpbCdcclxuaW1wb3J0IHtHcm91cFF1ZXVlLCBHcm91cFF1ZXVlSXRlbUlucHV0LCBQcm9kdWN0fSBmcm9tICcuLi8uLi9ncmFwaHFsVHlwZXMvdHlwZXMnXHJcbmltcG9ydCB7ZG9jfSBmcm9tICcuLi8uLi9ncmFwaHFsVHlwZXMvZG9jJ1xyXG5pbXBvcnQge3VzZVN0b3JlTW9kZWx9IGZyb20gJy4uLy4uL01vZGVsQWN0aW9uL3VzZVN0b3JlJ1xyXG5pbXBvcnQge2RlYWxNb25leSwgZnBNZXJnZVByZX0gZnJvbSAnLi4vLi4vdG9vbHMvdXRpbHMnXHJcbmltcG9ydCBDdXNDYXJvdXNlbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1N3aXBlL1N3aXBlJ1xyXG5pbXBvcnQge0hlYWRlclRpdGxlfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0hlYWRlclRpdGxlL0hlYWRlclRpdGxlJ1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQge2xzfSBmcm9tICcuLi8uLi90b29scy9kZWFsS2V5J1xyXG5pbXBvcnQge21wU3R5bGV9IGZyb20gJy4uLy4uL3N0eWxlL2NvbW1vbidcclxuaW1wb3J0IHtncmV5fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMnXHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHtHcm91cE9yZGVyUGFnZSwgZ3JvdXBPcmRlclBhZ2VNb2RlbH0gZnJvbSAnLi9ncm91cE9yZGVyUGFnZSdcclxuXHJcbmV4cG9ydCBjb25zdCBncm91cFByb2R1Y3RNb2RlbCA9IG1vZGVsRmFjdG9yeSgnZ3JvdXBQcm9kdWN0TW9kZWwnLCB7XHJcbiAgcHJvZHVjdDoge30gYXMgUHJvZHVjdCxcclxuICBncm91cFF1ZW5lTGlzdDogW10gYXMgR3JvdXBRdWV1ZVtdLFxyXG4gIHNlbGVjdE51bTogMCxcclxufSwge1xyXG4gIGdldERhdGE6IGFzeW5jICh2YWx1ZTogc3RyaW5nLCBvcHRpb24pID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IG9wdGlvbi5xdWVyeShkb2MucHJvZHVjdExpc3RCeUlkcywge1xyXG4gICAgICBpZHM6IFt2YWx1ZV0sXHJcbiAgICB9KVxyXG4gICAgY29uc3QgZ3JvdXBRdWVuZUxpc3QgPSBhd2FpdCBvcHRpb24ucXVlcnkoZG9jLmdyb3VwUXVldWVMaXN0LCB7XHJcbiAgICAgIGdyb3VwUXVldWVJdGVtSW5wdXQ6IHtcclxuICAgICAgICBwcm9kdWN0OiB7XHJcbiAgICAgICAgICBpZDogdmFsdWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSBhcyBHcm91cFF1ZXVlSXRlbUlucHV0LFxyXG4gICAgfSlcclxuICAgIG9wdGlvbi5zZXREYXRhKGZwTWVyZ2VQcmUoe1xyXG4gICAgICBwcm9kdWN0OiByZXM/LnByb2R1Y3RMaXN0QnlJZHM/Lmxpc3RbMF0gPz8ge30sXHJcbiAgICAgIGdyb3VwUXVlbmVMaXN0OiBncm91cFF1ZW5lTGlzdD8uZ3JvdXBRdWV1ZUxpc3QgPz8gW10sXHJcbiAgICB9KSlcclxuICB9LFxyXG4gIHVwZGF0ZVNlbGVjdE51bTogKHZhbHVlOiBudW1iZXIsIG9wdGlvbikgPT4ge1xyXG4gICAgb3B0aW9uLnNldERhdGEoZnBNZXJnZVByZSh7XHJcbiAgICAgIHNlbGVjdE51bTogdmFsdWUgPT09IG9wdGlvbi5kYXRhLnNlbGVjdE51bSA/IDAgOiB2YWx1ZVxyXG4gICAgfSkpXHJcbiAgfSxcclxufSlcclxuXHJcbmNvbnN0IFByaWNlUmVkID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kOiAke21wU3R5bGUucmVkfTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxMjBweDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAzMHB4KTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gID4gbWFpbiB7XHJcbiAgICBncmlkLWFyZWE6IDEvMS8zLzI7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICA+IHNwYW4ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuICAgIH1cclxuICB9XHJcbmBcclxuY29uc3QgTmFtZSA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogMTZweCAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gID4gbWFpbiB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gIH1cclxuICA+IHNlY3Rpb24ge1xyXG4gICAgPiBzcGFuIHtcclxuICAgICAgcGFkZGluZzogMCA0cHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICR7Z3JleVsnNzAwJ119O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgYm90dG9tOiAtNHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IFllbGxvd1N0YXIgPSAoKSA9PiA8U3RhclJvdW5kZWRJY29uIGZvbnRTaXplPXsnc21hbGwnfSBzdHlsZT17e2NvbG9yOiAnI0ZERDMzNCd9fS8+XHJcblxyXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5oZWFkZXJgXHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG5gXHJcbmNvbnN0IEdyb3VwUXVlbmUgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbmBcclxuXHJcbmNvbnN0IFNtYXJ0TWF0Y2ggPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDE2cHggMTZweCA5MHB4O1xyXG4gID4gc2VjdGlvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgPiBtYWluIHtcclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IFByaWNlID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICA+IG1haW4ge1xyXG4gICAgLy9mb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgPiBtYWluLCBzZWN0aW9uIHtcclxuICAgID4gKiB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IFN1Ym1pdCA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGhlaWdodDogNjBweDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAke21wU3R5bGUucmVkfTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGJveC1zaGFkb3c6ICR7bXBTdHlsZS5zaGFkb3dbJzEnXX07XHJcbiAgPiBhc2lkZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICBjb2xvcjogJHttcFN0eWxlLnJlZH07XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgR3JvdXBQcm9kdWN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgaWQgPSAocm91dGVyLnF1ZXJ5Py5pZCBhcyBzdHJpbmcpID8/ICcnXHJcbiAgY29uc3Qge2FjdGlvbnM6IGFjdGlvbnNHcm91cFByb2R1Y3QsIHN0YXRlOiBzdGF0ZUdyb3VwUHJvZHVjdH0gPSB1c2VTdG9yZU1vZGVsKGdyb3VwUHJvZHVjdE1vZGVsKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhY3Rpb25zR3JvdXBQcm9kdWN0LmdldERhdGEoaWQpXHJcbiAgfSwgW2lkXSlcclxuICBjb25zdCB7YWN0aW9uczogYWN0aW9uc0dyb3VwT3JkZXJQYWdlTW9kZWx9ID0gdXNlU3RvcmVNb2RlbChncm91cE9yZGVyUGFnZU1vZGVsKVxyXG5cclxuICBjb25zdCBwcm9kdWN0ID0gc3RhdGVHcm91cFByb2R1Y3QucHJvZHVjdFxyXG5cclxuICBjb25zb2xlLmxvZyhzdGF0ZUdyb3VwUHJvZHVjdC5ncm91cFF1ZW5lTGlzdClcclxuICByZXR1cm4gPGRpdj5cclxuICAgIDxIZWFkZXJUaXRsZVxyXG4gICAgICAgIHRpdGxlPXsn5Lqn5ZOB6K+m5oOFJ31cclxuICAgIC8+XHJcbiAgICA8Q3VzQ2Fyb3VzZWxcclxuICAgICAgICBoZWlnaHQ9eycyNDBweCd9XHJcbiAgICAgICAgZGF0YUxpc3Q9e3Byb2R1Y3Q/LmltZz8ubWFwKHYgPT4gKHtcclxuICAgICAgICAgIC4uLnYsXHJcbiAgICAgICAgICBpbWdVcmw6IHY/LnVybCxcclxuICAgICAgICB9KSkgYXMgW119XHJcbiAgICAvPlxyXG4gICAgPFByaWNlUmVkPlxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICB7bHMoJ+WfuuWHhuS7t+agvCcpfVxyXG4gICAgICAgIDxzcGFuPntkZWFsTW9uZXkocHJvZHVjdC5wcmljZU91dCl9L3twcm9kdWN0LnBhY2tpbmdVbml0U3RyaW5nfTwvc3Bhbj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgICA8YXNpZGU+e2xzKCflt7LmiJDlm6InKX17MjN9e2xzKCfljZUnKX08L2FzaWRlPlxyXG4gICAgICA8YXNpZGU+e2xzKCfmi7zlm6LkuK0nKX17Mn17bHMoJ+WNlScpfTwvYXNpZGU+XHJcbiAgICA8L1ByaWNlUmVkPlxyXG4gICAgPE5hbWU+XHJcbiAgICAgIDxtYWluPntwcm9kdWN0Lm5hbWV9PC9tYWluPlxyXG4gICAgICA8c2VjdGlvbj57cHJvZHVjdC5ncm91cFJlbWFya30ve3Byb2R1Y3QuZ3JvdXBBbW91bnR9e3Byb2R1Y3QuZ3JvdXBBbW91bnRVbml0U3RyaW5nfTxici8+e2xzKCfliIblm6Lnsr7luqYnKX1cclxuICAgICAgPHNwYW4+e1suLi5BcnJheShwcm9kdWN0Lmdyb3VwUHJlY2lzaW9uKV0ubWFwKCh2LCBpKSA9PiBpKS5tYXAodmFsdWUgPT4gPFllbGxvd1N0YXIga2V5PXt2YWx1ZX0gLz4pfTwvc3Bhbj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9OYW1lPlxyXG4gICAgPEdyb3VwUXVlbmU+XHJcbiAgICAgIDxUaXRsZT57bHMoJ+aLvOWbouS4rScpfTwvVGl0bGU+XHJcbiAgICA8L0dyb3VwUXVlbmU+XHJcbiAgICA8U21hcnRNYXRjaD5cclxuICAgICAgPGhlYWRlcj5cclxuICAgICAgICA8VGl0bGU+e2xzKCfmmbrog73ljLnphY0nKX08L1RpdGxlPlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAge2xzKCfor7fngrnlh7snKX1cclxuICAgICAgICA8U3RhckJvcmRlclJvdW5kZWRJY29uIC8+XHJcbiAgICAgICAge2xzKCfnoa7lrprmgqjpnIDopoHnmoTku73mlbAnKX1cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICB7Wy4uLkFycmF5KHByb2R1Y3QuZ3JvdXBQcmVjaXNpb24pXS5tYXAoKHYsIGkpID0+IGkpLm1hcCh2YWx1ZSA9PiB2YWx1ZSArIDEgPiBzdGF0ZUdyb3VwUHJvZHVjdC5zZWxlY3ROdW0gPyA8U3RhckJvcmRlclJvdW5kZWRJY29uXHJcbiAgICAgICAgICAgIGtleT17YGNsaWNrU3RhciR7dmFsdWV9YH1cclxuICAgICAgICAgICAgZm9udFNpemU9eydsYXJnZSd9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFjdGlvbnNHcm91cFByb2R1Y3QudXBkYXRlU2VsZWN0TnVtKHZhbHVlICsgMSl9XHJcbiAgICAgICAgLz4gOiA8U3RhclJvdW5kZWRJY29uXHJcbiAgICAgICAgICAgIGtleT17YGNsaWNrU3RhciR7dmFsdWV9YH1cclxuICAgICAgICAgICAgc3R5bGU9e3tjb2xvcjogJyNGREQzMzQnfX1cclxuICAgICAgICAgICAgZm9udFNpemU9eydsYXJnZSd9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFjdGlvbnNHcm91cFByb2R1Y3QudXBkYXRlU2VsZWN0TnVtKHZhbHVlICsgMSl9XHJcbiAgICAgICAgLz4pfVxyXG4gICAgICA8L21haW4+XHJcbiAgICAgIDxQcmljZT5cclxuICAgICAgICA8bWFpbj5cclxuICAgICAgICAgIDxoZWFkZXI+e2RlYWxNb25leSgocHJvZHVjdC5wcmljZU91dCA/PyAwKSAqIHN0YXRlR3JvdXBQcm9kdWN0LnNlbGVjdE51bSl9PC9oZWFkZXI+XHJcbiAgICAgICAgICA8Zm9vdGVyPntscygn5oqY5ZCO5Lu35qC8Jyl9PC9mb290ZXI+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgICAgIDxkaXY+PTwvZGl2PlxyXG4gICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgPGhlYWRlcj57ZGVhbE1vbmV5KChwcm9kdWN0LnByaWNlT3V0ID8/IDApICogc3RhdGVHcm91cFByb2R1Y3Quc2VsZWN0TnVtKX08L2hlYWRlcj5cclxuICAgICAgICAgIDxmb290ZXI+e2xzKCfln7rlh4bku7fmoLwnKX08L2Zvb3Rlcj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPGRpdj54PC9kaXY+XHJcbiAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICA8aGVhZGVyPjE8L2hlYWRlcj5cclxuICAgICAgICAgIDxmb290ZXI+e2xzKCfku73mlbDmipjmiaMnKX08L2Zvb3Rlcj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPGRpdj54PC9kaXY+XHJcbiAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICA8aGVhZGVyPjE8L2hlYWRlcj5cclxuICAgICAgICAgIDxmb290ZXI+e2xzKCfmiJDlm6LmipjkuIrmipgnKX08L2Zvb3Rlcj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDwvUHJpY2U+XHJcbiAgICA8L1NtYXJ0TWF0Y2g+XHJcbiAgICA8U3VibWl0PlxyXG4gICAgICA8YXNpZGU+e2xzKCfpgInmi6nkuoYnKX17c3RhdGVHcm91cFByb2R1Y3Quc2VsZWN0TnVtfXtscygn5Lu9Jyl9PC9hc2lkZT5cclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgc3R5bGU9e3toZWlnaHQ6ICcxMDAlJywgcGFkZGluZzogJzAgMzJweCcsIGJvcmRlclJhZGl1czogJzAnLCBmb250U2l6ZTogJzE4cHgnfX1cclxuICAgICAgICAgIGNvbG9yPXsnc2Vjb25kYXJ5J31cclxuICAgICAgICAgIHZhcmlhbnQ9eydjb250YWluZWQnfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBhY3Rpb25zR3JvdXBPcmRlclBhZ2VNb2RlbC5vcGVuKClcclxuICAgICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7bHMoJ+WOu+e7k+eulycpfVxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgIDwvU3VibWl0PlxyXG4gICAgPEdyb3VwT3JkZXJQYWdlLz5cclxuICA8L2Rpdj5cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9