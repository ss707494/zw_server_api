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
  groupQueueList: [],
  selectNum: 0,
  selectQueueId: '',
  numDiscount: 1,
  groupDiscount: 1
}, {
  getData: function () {
    var _getData = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(value, option) {
      var _res$productListByIds, _res$productListByIds2, _groupQueueList$group;

      var res, groupQueueList;
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
              groupQueueList = _context.sent;
              option.setData(Object(_tools_utils__WEBPACK_IMPORTED_MODULE_11__["fpMergePre"])({
                product: (_res$productListByIds = res === null || res === void 0 ? void 0 : (_res$productListByIds2 = res.productListByIds) === null || _res$productListByIds2 === void 0 ? void 0 : _res$productListByIds2.list[0]) !== null && _res$productListByIds !== void 0 ? _res$productListByIds : {},
                groupQueueList: (_groupQueueList$group = groupQueueList === null || groupQueueList === void 0 ? void 0 : groupQueueList.groupQueueList) !== null && _groupQueueList$group !== void 0 ? _groupQueueList$group : []
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
  },
  submit: function () {
    var _submit = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(_ref, option) {
      var orderInfoItemInput;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              orderInfoItemInput = _ref.orderInfoItemInput;
              console.log({
                orderInfoItemInput: _objectSpread({}, orderInfoItemInput),
                groupOrderItemInput: {
                  orderGroupAmount: option.data.selectNum
                },
                groupQueueItemInput: _objectSpread({
                  product: option.data.product
                }, option.data.selectQueueId ? {
                  id: option.data.selectQueueId
                } : {})
              });
              option.mutate(_graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_9__["doc"].saveGroupOrder, {
                orderInfoItemInput: _objectSpread({}, orderInfoItemInput),
                groupOrderItemInput: {
                  orderGroupAmount: option.data.selectNum
                },
                groupQueueItemInput: _objectSpread({
                  product: option.data.product
                }, option.data.selectQueueId ? {
                  id: option.data.selectQueueId
                } : {})
              });

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function submit(_x3, _x4) {
      return _submit.apply(this, arguments);
    }

    return submit;
  }()
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
      lineNumber: 120,
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
var GroupQueueBox = styled_components__WEBPACK_IMPORTED_MODULE_14__["default"].div.withConfig({
  displayName: "id__GroupQueueBox",
  componentId: "sc-1c5vpsf-3"
})(["padding:16px;"]);
_c5 = GroupQueueBox;
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

  var _ref2, _router$query, _product$img, _product$priceOut, _product$priceOut2;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  var id = (_ref2 = (_router$query = router.query) === null || _router$query === void 0 ? void 0 : _router$query.id) !== null && _ref2 !== void 0 ? _ref2 : '';

  var _useStoreModel = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_10__["useStoreModel"])(groupProductModel),
      actionsGroupProduct = _useStoreModel.actions,
      stateGroupProduct = _useStoreModel.state;

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    actionsGroupProduct.getData(id);
  }, [id]);

  var _useStoreModel2 = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_10__["useStoreModel"])(_groupOrderPage__WEBPACK_IMPORTED_MODULE_19__["groupOrderPageModel"]),
      actionsGroupOrderPageModel = _useStoreModel2.actions;

  var product = stateGroupProduct.product; // useEffect(() => {
  //   actionsGroupProduct.updateSelectNum(2)
  //   actionsGroupOrderPageModel.open()
  // }, [])

  console.log(stateGroupProduct.groupQueueList);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 10
    }
  }, __jsx(_components_HeaderTitle_HeaderTitle__WEBPACK_IMPORTED_MODULE_13__["HeaderTitle"], {
    title: '产品详情',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
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
      lineNumber: 194,
      columnNumber: 5
    }
  }), __jsx(PriceRed, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 5
    }
  }, __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('基准价格'), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 9
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_11__["dealMoney"])(product.priceOut), "/", product.packingUnitString)), __jsx("aside", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('已成团'), 23, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('单')), __jsx("aside", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('拼团中'), 2, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('单'))), __jsx(Name, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 5
    }
  }, __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 7
    }
  }, product.name), __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 7
    }
  }, product.groupRemark, "/", product.groupAmount, product.groupAmountUnitString, __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 90
    }
  }), Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('分团精度'), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 9
    }
  }, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Array(product.groupPrecision)).map(function (v, i) {
    return i;
  }).map(function (value) {
    return __jsx(YellowStar, {
      key: value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 13
      }
    });
  })))), __jsx(GroupQueueBox, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 5
    }
  }, __jsx(Title, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('拼团中'))), __jsx(SmartMatch, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 5
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 7
    }
  }, __jsx(Title, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 9
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('智能匹配'))), __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('请点击'), __jsx(_material_ui_icons_StarBorderRounded__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 9
    }
  }), Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('确定您需要的份数')), __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
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
        lineNumber: 230,
        columnNumber: 13
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
        lineNumber: 234,
        columnNumber: 18
      }
    });
  })), __jsx(Price, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 7
    }
  }, __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 9
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 11
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_11__["dealMoney"])(((_product$priceOut = product.priceOut) !== null && _product$priceOut !== void 0 ? _product$priceOut : 0) * stateGroupProduct.selectNum * stateGroupProduct.numDiscount * stateGroupProduct.groupDiscount)), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('折后价格'))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 9
    }
  }, "="), __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 9
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 11
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_11__["dealMoney"])(((_product$priceOut2 = product.priceOut) !== null && _product$priceOut2 !== void 0 ? _product$priceOut2 : 0) * stateGroupProduct.selectNum)), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('基准价格'))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 9
    }
  }, "x"), __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 9
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 11
    }
  }, stateGroupProduct.numDiscount), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('份数折扣'))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 9
    }
  }, "x"), __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 9
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 11
    }
  }, stateGroupProduct.groupDiscount), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('成团折上折'))))), __jsx(Submit, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 5
    }
  }, __jsx("aside", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('选择了'), stateGroupProduct.selectNum, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('份')), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__["Button"], {
    disabled: stateGroupProduct.selectNum === 0,
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
      lineNumber: 265,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('去结算'))), __jsx(_groupOrderPage__WEBPACK_IMPORTED_MODULE_19__["GroupOrderPage"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
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
$RefreshReg$(_c5, "GroupQueueBox");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy92aWV3L2dyb3VwUHJvZHVjdC8udHN4Il0sIm5hbWVzIjpbImdyb3VwUHJvZHVjdE1vZGVsIiwibW9kZWxGYWN0b3J5IiwicHJvZHVjdCIsImdyb3VwUXVldWVMaXN0Iiwic2VsZWN0TnVtIiwic2VsZWN0UXVldWVJZCIsIm51bURpc2NvdW50IiwiZ3JvdXBEaXNjb3VudCIsImdldERhdGEiLCJ2YWx1ZSIsIm9wdGlvbiIsInF1ZXJ5IiwiZG9jIiwicHJvZHVjdExpc3RCeUlkcyIsImlkcyIsInJlcyIsImdyb3VwUXVldWVJdGVtSW5wdXQiLCJpZCIsInNldERhdGEiLCJmcE1lcmdlUHJlIiwibGlzdCIsInVwZGF0ZVNlbGVjdE51bSIsImRhdGEiLCJzdWJtaXQiLCJvcmRlckluZm9JdGVtSW5wdXQiLCJjb25zb2xlIiwibG9nIiwiZ3JvdXBPcmRlckl0ZW1JbnB1dCIsIm9yZGVyR3JvdXBBbW91bnQiLCJtdXRhdGUiLCJzYXZlR3JvdXBPcmRlciIsIlByaWNlUmVkIiwic3R5bGVkIiwiZGl2IiwibXBTdHlsZSIsInJlZCIsIk5hbWUiLCJncmV5IiwiWWVsbG93U3RhciIsImNvbG9yIiwiVGl0bGUiLCJoZWFkZXIiLCJHcm91cFF1ZXVlQm94IiwiU21hcnRNYXRjaCIsIlByaWNlIiwiU3VibWl0Iiwic2hhZG93IiwiR3JvdXBQcm9kdWN0Iiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RvcmVNb2RlbCIsImFjdGlvbnNHcm91cFByb2R1Y3QiLCJhY3Rpb25zIiwic3RhdGVHcm91cFByb2R1Y3QiLCJzdGF0ZSIsInVzZUVmZmVjdCIsImdyb3VwT3JkZXJQYWdlTW9kZWwiLCJhY3Rpb25zR3JvdXBPcmRlclBhZ2VNb2RlbCIsImltZyIsIm1hcCIsInYiLCJpbWdVcmwiLCJ1cmwiLCJscyIsImRlYWxNb25leSIsInByaWNlT3V0IiwicGFja2luZ1VuaXRTdHJpbmciLCJuYW1lIiwiZ3JvdXBSZW1hcmsiLCJncm91cEFtb3VudCIsImdyb3VwQW1vdW50VW5pdFN0cmluZyIsIkFycmF5IiwiZ3JvdXBQcmVjaXNpb24iLCJpIiwiaGVpZ2h0IiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsImZvbnRTaXplIiwib3BlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLGlCQUFpQixHQUFHQywyRUFBWSxDQUFDLG1CQUFELEVBQXNCO0FBQ2pFQyxTQUFPLEVBQUUsRUFEd0Q7QUFFakVDLGdCQUFjLEVBQUUsRUFGaUQ7QUFHakVDLFdBQVMsRUFBRSxDQUhzRDtBQUlqRUMsZUFBYSxFQUFFLEVBSmtEO0FBS2pFQyxhQUFXLEVBQUUsQ0FMb0Q7QUFNakVDLGVBQWEsRUFBRTtBQU5rRCxDQUF0QixFQU8xQztBQUNEQyxTQUFPO0FBQUEsb01BQUUsaUJBQU9DLEtBQVAsRUFBc0JDLE1BQXRCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ1dBLE1BQU0sQ0FBQ0MsS0FBUCxDQUFhQyxxREFBRyxDQUFDQyxnQkFBakIsRUFBbUM7QUFDbkRDLG1CQUFHLEVBQUUsQ0FBQ0wsS0FBRDtBQUQ4QyxlQUFuQyxDQURYOztBQUFBO0FBQ0RNLGlCQURDO0FBQUE7QUFBQSxxQkFJc0JMLE1BQU0sQ0FBQ0MsS0FBUCxDQUFhQyxxREFBRyxDQUFDVCxjQUFqQixFQUFpQztBQUM1RGEsbUNBQW1CLEVBQUU7QUFDbkJkLHlCQUFPLEVBQUU7QUFDUGUsc0JBQUUsRUFBRVI7QUFERztBQURVO0FBRHVDLGVBQWpDLENBSnRCOztBQUFBO0FBSUROLDRCQUpDO0FBV1BPLG9CQUFNLENBQUNRLE9BQVAsQ0FBZUMsZ0VBQVUsQ0FBQztBQUN4QmpCLHVCQUFPLDJCQUFFYSxHQUFGLGFBQUVBLEdBQUYs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QUEsS0FBU3dELDBEQUFFLENBQUMsT0FBRCxDQUFYLENBRkYsQ0FoQkYsQ0F0QkYsQ0E3QkssRUF5RUwsTUFBQyxNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVFBLDBEQUFFLENBQUMsS0FBRCxDQUFWLEVBQW1CVixpQkFBaUIsQ0FBQ2pELFNBQXJDLEVBQWdEMkQsMERBQUUsQ0FBQyxHQUFELENBQWxELENBREYsRUFFRSxNQUFDLHlEQUFEO0FBQ0ksWUFBUSxFQUFFVixpQkFBaUIsQ0FBQ2pELFNBQWxCLEtBQWdDLENBRDlDO0FBRUksU0FBSyxFQUFFO0FBQUNzRSxZQUFNLEVBQUUsTUFBVDtBQUFpQkMsYUFBTyxFQUFFLFFBQTFCO0FBQW9DQyxrQkFBWSxFQUFFLEdBQWxEO0FBQXVEQyxjQUFRLEVBQUU7QUFBakUsS0FGWDtBQUdJLFNBQUssRUFBRSxXQUhYO0FBSUksV0FBTyxFQUFFLFdBSmI7QUFLSSxXQUFPLEVBQUUsbUJBQU07QUFDYnBCLGdDQUEwQixDQUFDcUIsSUFBM0I7QUFDRCxLQVBMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FTR2YsMERBQUUsQ0FBQyxLQUFELENBVEwsQ0FGRixDQXpFSyxFQXVGTCxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF2RkssQ0FBUDtBQXlGRCxDQXpHTTs7R0FBTWhCLFk7VUFDSUUscUQsRUFFa0RDLG9FLEVBSW5CQSxvRTs7O01BUG5DSCxZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxncm91cFByb2R1Y3RcXFtpZF0uanMuMGZkZWUwYzdjMDRlOTg5MWJlM2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTdGFyUm91bmRlZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1N0YXJSb3VuZGVkJ1xyXG5pbXBvcnQgU3RhckJvcmRlclJvdW5kZWRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TdGFyQm9yZGVyUm91bmRlZCdcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQge21vZGVsRmFjdG9yeX0gZnJvbSAnLi4vLi4vTW9kZWxBY3Rpb24vbW9kZWxVdGlsJ1xyXG5pbXBvcnQge1xyXG4gIEdyb3VwT3JkZXJJdGVtSW5wdXQsXHJcbiAgR3JvdXBRdWV1ZSxcclxuICBHcm91cFF1ZXVlSXRlbUlucHV0LFxyXG4gIE9yZGVySW5mb0l0ZW1JbnB1dCxcclxuICBQcm9kdWN0XHJcbn0gZnJvbSAnLi4vLi4vZ3JhcGhxbFR5cGVzL3R5cGVzJ1xyXG5pbXBvcnQge2RvY30gZnJvbSAnLi4vLi4vZ3JhcGhxbFR5cGVzL2RvYydcclxuaW1wb3J0IHt1c2VTdG9yZU1vZGVsfSBmcm9tICcuLi8uLi9Nb2RlbEFjdGlvbi91c2VTdG9yZSdcclxuaW1wb3J0IHtkZWFsTW9uZXksIGZwTWVyZ2VQcmV9IGZyb20gJy4uLy4uL3Rvb2xzL3V0aWxzJ1xyXG5pbXBvcnQgQ3VzQ2Fyb3VzZWwgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Td2lwZS9Td2lwZSdcclxuaW1wb3J0IHtIZWFkZXJUaXRsZX0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9IZWFkZXJUaXRsZS9IZWFkZXJUaXRsZSdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHtsc30gZnJvbSAnLi4vLi4vdG9vbHMvZGVhbEtleSdcclxuaW1wb3J0IHttcFN0eWxlfSBmcm9tICcuLi8uLi9zdHlsZS9jb21tb24nXHJcbmltcG9ydCB7Z3JleX0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzJ1xyXG5pbXBvcnQge0J1dHRvbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCB7R3JvdXBPcmRlclBhZ2UsIGdyb3VwT3JkZXJQYWdlTW9kZWx9IGZyb20gJy4vZ3JvdXBPcmRlclBhZ2UnXHJcblxyXG5leHBvcnQgY29uc3QgZ3JvdXBQcm9kdWN0TW9kZWwgPSBtb2RlbEZhY3RvcnkoJ2dyb3VwUHJvZHVjdE1vZGVsJywge1xyXG4gIHByb2R1Y3Q6IHt9IGFzIFByb2R1Y3QsXHJcbiAgZ3JvdXBRdWV1ZUxpc3Q6IFtdIGFzIEdyb3VwUXVldWVbXSxcclxuICBzZWxlY3ROdW06IDAsXHJcbiAgc2VsZWN0UXVldWVJZDogJycsXHJcbiAgbnVtRGlzY291bnQ6IDEsXHJcbiAgZ3JvdXBEaXNjb3VudDogMSxcclxufSwge1xyXG4gIGdldERhdGE6IGFzeW5jICh2YWx1ZTogc3RyaW5nLCBvcHRpb24pID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IG9wdGlvbi5xdWVyeShkb2MucHJvZHVjdExpc3RCeUlkcywge1xyXG4gICAgICBpZHM6IFt2YWx1ZV0sXHJcbiAgICB9KVxyXG4gICAgY29uc3QgZ3JvdXBRdWV1ZUxpc3QgPSBhd2FpdCBvcHRpb24ucXVlcnkoZG9jLmdyb3VwUXVldWVMaXN0LCB7XHJcbiAgICAgIGdyb3VwUXVldWVJdGVtSW5wdXQ6IHtcclxuICAgICAgICBwcm9kdWN0OiB7XHJcbiAgICAgICAgICBpZDogdmFsdWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSBhcyBHcm91cFF1ZXVlSXRlbUlucHV0LFxyXG4gICAgfSlcclxuICAgIG9wdGlvbi5zZXREYXRhKGZwTWVyZ2VQcmUoe1xyXG4gICAgICBwcm9kdWN0OiByZXM/LnByb2R1Y3RMaXN0QnlJZHM/Lmxpc3RbMF0gPz8ge30sXHJcbiAgICAgIGdyb3VwUXVldWVMaXN0OiBncm91cFF1ZXVlTGlzdD8uZ3JvdXBRdWV1ZUxpc3QgPz8gW10sXHJcbiAgICB9KSlcclxuICB9LFxyXG4gIHVwZGF0ZVNlbGVjdE51bTogKHZhbHVlOiBudW1iZXIsIG9wdGlvbikgPT4ge1xyXG4gICAgb3B0aW9uLnNldERhdGEoZnBNZXJnZVByZSh7XHJcbiAgICAgIHNlbGVjdE51bTogdmFsdWUgPT09IG9wdGlvbi5kYXRhLnNlbGVjdE51bSA/IDAgOiB2YWx1ZVxyXG4gICAgfSkpXHJcbiAgfSxcclxuICBzdWJtaXQ6IGFzeW5jICh7b3JkZXJJbmZvSXRlbUlucHV0fTogeyBvcmRlckluZm9JdGVtSW5wdXQ6IE9yZGVySW5mb0l0ZW1JbnB1dCB9LCBvcHRpb24pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHtcclxuICAgICAgb3JkZXJJbmZvSXRlbUlucHV0OiB7XHJcbiAgICAgICAgLi4ub3JkZXJJbmZvSXRlbUlucHV0LFxyXG4gICAgICB9IGFzIE9yZGVySW5mb0l0ZW1JbnB1dCxcclxuICAgICAgZ3JvdXBPcmRlckl0ZW1JbnB1dDoge1xyXG4gICAgICAgIG9yZGVyR3JvdXBBbW91bnQ6IG9wdGlvbi5kYXRhLnNlbGVjdE51bSxcclxuICAgICAgfSBhcyBHcm91cE9yZGVySXRlbUlucHV0LFxyXG4gICAgICBncm91cFF1ZXVlSXRlbUlucHV0OiB7XHJcbiAgICAgICAgcHJvZHVjdDogb3B0aW9uLmRhdGEucHJvZHVjdCxcclxuICAgICAgICAuLi4ob3B0aW9uLmRhdGEuc2VsZWN0UXVldWVJZCA/IHtpZDogb3B0aW9uLmRhdGEuc2VsZWN0UXVldWVJZH0gOiB7fSksXHJcbiAgICAgIH0gYXMgR3JvdXBRdWV1ZUl0ZW1JbnB1dCxcclxuICAgIH0pXHJcbiAgICBvcHRpb24ubXV0YXRlKGRvYy5zYXZlR3JvdXBPcmRlciwge1xyXG4gICAgICBvcmRlckluZm9JdGVtSW5wdXQ6IHtcclxuICAgICAgICAgIC4uLm9yZGVySW5mb0l0ZW1JbnB1dCxcclxuICAgICAgfSBhcyBPcmRlckluZm9JdGVtSW5wdXQsXHJcbiAgICAgIGdyb3VwT3JkZXJJdGVtSW5wdXQ6IHtcclxuICAgICAgICBvcmRlckdyb3VwQW1vdW50OiBvcHRpb24uZGF0YS5zZWxlY3ROdW0sXHJcbiAgICAgIH0gYXMgR3JvdXBPcmRlckl0ZW1JbnB1dCxcclxuICAgICAgZ3JvdXBRdWV1ZUl0ZW1JbnB1dDoge1xyXG4gICAgICAgIHByb2R1Y3Q6IG9wdGlvbi5kYXRhLnByb2R1Y3QsXHJcbiAgICAgICAgLi4uKG9wdGlvbi5kYXRhLnNlbGVjdFF1ZXVlSWQgPyB7aWQ6IG9wdGlvbi5kYXRhLnNlbGVjdFF1ZXVlSWR9IDoge30pLFxyXG4gICAgICB9IGFzIEdyb3VwUXVldWVJdGVtSW5wdXQsXHJcbiAgICB9KVxyXG4gIH0sXHJcbn0pXHJcblxyXG5jb25zdCBQcmljZVJlZCA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZDogJHttcFN0eWxlLnJlZH07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTIwcHg7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMzBweCk7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICA+IG1haW4ge1xyXG4gICAgZ3JpZC1hcmVhOiAxLzEvMy8yO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgPiBzcGFuIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcbmNvbnN0IE5hbWUgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDE2cHggMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICA+IG1haW4ge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICB9XHJcbiAgPiBzZWN0aW9uIHtcclxuICAgID4gc3BhbiB7XHJcbiAgICAgIHBhZGRpbmc6IDAgNHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAke2dyZXlbJzcwMCddfTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGJvdHRvbTogLTRweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBZZWxsb3dTdGFyID0gKCkgPT4gPFN0YXJSb3VuZGVkSWNvbiBmb250U2l6ZT17J3NtYWxsJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tjb2xvcjogJyNGREQzMzQnfX0vPlxyXG5cclxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaGVhZGVyYFxyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuYFxyXG5jb25zdCBHcm91cFF1ZXVlQm94ID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAxNnB4O1xyXG5gXHJcblxyXG5jb25zdCBTbWFydE1hdGNoID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAxNnB4IDE2cHggOTBweDtcclxuICA+IHNlY3Rpb24ge1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gID4gbWFpbiB7XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBQcmljZSA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgPiBtYWluIHtcclxuICAgIC8vZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gID4gbWFpbiwgc2VjdGlvbiB7XHJcbiAgICA+ICoge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBTdWJtaXQgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgJHttcFN0eWxlLnJlZH07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBib3gtc2hhZG93OiAke21wU3R5bGUuc2hhZG93WycxJ119O1xyXG4gID4gYXNpZGUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgY29sb3I6ICR7bXBTdHlsZS5yZWR9O1xyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEdyb3VwUHJvZHVjdCA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IGlkID0gKHJvdXRlci5xdWVyeT8uaWQgYXMgc3RyaW5nKSA/PyAnJ1xyXG4gIGNvbnN0IHthY3Rpb25zOiBhY3Rpb25zR3JvdXBQcm9kdWN0LCBzdGF0ZTogc3RhdGVHcm91cFByb2R1Y3R9ID0gdXNlU3RvcmVNb2RlbChncm91cFByb2R1Y3RNb2RlbClcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYWN0aW9uc0dyb3VwUHJvZHVjdC5nZXREYXRhKGlkKVxyXG4gIH0sIFtpZF0pXHJcbiAgY29uc3Qge2FjdGlvbnM6IGFjdGlvbnNHcm91cE9yZGVyUGFnZU1vZGVsfSA9IHVzZVN0b3JlTW9kZWwoZ3JvdXBPcmRlclBhZ2VNb2RlbClcclxuXHJcbiAgY29uc3QgcHJvZHVjdCA9IHN0YXRlR3JvdXBQcm9kdWN0LnByb2R1Y3RcclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgYWN0aW9uc0dyb3VwUHJvZHVjdC51cGRhdGVTZWxlY3ROdW0oMilcclxuICAvLyAgIGFjdGlvbnNHcm91cE9yZGVyUGFnZU1vZGVsLm9wZW4oKVxyXG4gIC8vIH0sIFtdKVxyXG5cclxuICBjb25zb2xlLmxvZyhzdGF0ZUdyb3VwUHJvZHVjdC5ncm91cFF1ZXVlTGlzdClcclxuICByZXR1cm4gPGRpdj5cclxuICAgIDxIZWFkZXJUaXRsZVxyXG4gICAgICAgIHRpdGxlPXsn5Lqn5ZOB6K+m5oOFJ31cclxuICAgIC8+XHJcbiAgICA8Q3VzQ2Fyb3VzZWxcclxuICAgICAgICBoZWlnaHQ9eycyNDBweCd9XHJcbiAgICAgICAgZGF0YUxpc3Q9e3Byb2R1Y3Q/LmltZz8ubWFwKHYgPT4gKHtcclxuICAgICAgICAgIC4uLnYsXHJcbiAgICAgICAgICBpbWdVcmw6IHY/LnVybCxcclxuICAgICAgICB9KSkgYXMgW119XHJcbiAgICAvPlxyXG4gICAgPFByaWNlUmVkPlxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICB7bHMoJ+WfuuWHhuS7t+agvCcpfVxyXG4gICAgICAgIDxzcGFuPntkZWFsTW9uZXkocHJvZHVjdC5wcmljZU91dCl9L3twcm9kdWN0LnBhY2tpbmdVbml0U3RyaW5nfTwvc3Bhbj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgICA8YXNpZGU+e2xzKCflt7LmiJDlm6InKX17MjN9e2xzKCfljZUnKX08L2FzaWRlPlxyXG4gICAgICA8YXNpZGU+e2xzKCfmi7zlm6LkuK0nKX17Mn17bHMoJ+WNlScpfTwvYXNpZGU+XHJcbiAgICA8L1ByaWNlUmVkPlxyXG4gICAgPE5hbWU+XHJcbiAgICAgIDxtYWluPntwcm9kdWN0Lm5hbWV9PC9tYWluPlxyXG4gICAgICA8c2VjdGlvbj57cHJvZHVjdC5ncm91cFJlbWFya30ve3Byb2R1Y3QuZ3JvdXBBbW91bnR9e3Byb2R1Y3QuZ3JvdXBBbW91bnRVbml0U3RyaW5nfTxici8+e2xzKCfliIblm6Lnsr7luqYnKX1cclxuICAgICAgICA8c3Bhbj57Wy4uLkFycmF5KHByb2R1Y3QuZ3JvdXBQcmVjaXNpb24pXS5tYXAoKHYsIGkpID0+IGkpLm1hcCh2YWx1ZSA9PlxyXG4gICAgICAgICAgICA8WWVsbG93U3RhciBrZXk9e3ZhbHVlfS8+KX08L3NwYW4+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvTmFtZT5cclxuICAgIDxHcm91cFF1ZXVlQm94PlxyXG4gICAgICA8VGl0bGU+e2xzKCfmi7zlm6LkuK0nKX08L1RpdGxlPlxyXG4gICAgPC9Hcm91cFF1ZXVlQm94PlxyXG4gICAgPFNtYXJ0TWF0Y2g+XHJcbiAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgPFRpdGxlPntscygn5pm66IO95Yy56YWNJyl9PC9UaXRsZT5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgIHtscygn6K+354K55Ye7Jyl9XHJcbiAgICAgICAgPFN0YXJCb3JkZXJSb3VuZGVkSWNvbi8+XHJcbiAgICAgICAge2xzKCfnoa7lrprmgqjpnIDopoHnmoTku73mlbAnKX1cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICB7Wy4uLkFycmF5KHByb2R1Y3QuZ3JvdXBQcmVjaXNpb24pXS5tYXAoKHYsIGkpID0+IGkpLm1hcCh2YWx1ZSA9PiB2YWx1ZSArIDEgPiBzdGF0ZUdyb3VwUHJvZHVjdC5zZWxlY3ROdW0gP1xyXG4gICAgICAgICAgICA8U3RhckJvcmRlclJvdW5kZWRJY29uXHJcbiAgICAgICAgICAgICAgICBrZXk9e2BjbGlja1N0YXIke3ZhbHVlfWB9XHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZT17J2xhcmdlJ31cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFjdGlvbnNHcm91cFByb2R1Y3QudXBkYXRlU2VsZWN0TnVtKHZhbHVlICsgMSl9XHJcbiAgICAgICAgICAgIC8+IDogPFN0YXJSb3VuZGVkSWNvblxyXG4gICAgICAgICAgICAgICAga2V5PXtgY2xpY2tTdGFyJHt2YWx1ZX1gfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tjb2xvcjogJyNGREQzMzQnfX1cclxuICAgICAgICAgICAgICAgIGZvbnRTaXplPXsnbGFyZ2UnfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYWN0aW9uc0dyb3VwUHJvZHVjdC51cGRhdGVTZWxlY3ROdW0odmFsdWUgKyAxKX1cclxuICAgICAgICAgICAgLz4pfVxyXG4gICAgICA8L21haW4+XHJcbiAgICAgIDxQcmljZT5cclxuICAgICAgICA8bWFpbj5cclxuICAgICAgICAgIDxoZWFkZXI+e2RlYWxNb25leSgocHJvZHVjdC5wcmljZU91dCA/PyAwKSAqIHN0YXRlR3JvdXBQcm9kdWN0LnNlbGVjdE51bSAqIHN0YXRlR3JvdXBQcm9kdWN0Lm51bURpc2NvdW50ICogc3RhdGVHcm91cFByb2R1Y3QuZ3JvdXBEaXNjb3VudCl9PC9oZWFkZXI+XHJcbiAgICAgICAgICA8Zm9vdGVyPntscygn5oqY5ZCO5Lu35qC8Jyl9PC9mb290ZXI+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgICAgIDxkaXY+PTwvZGl2PlxyXG4gICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgPGhlYWRlcj57ZGVhbE1vbmV5KChwcm9kdWN0LnByaWNlT3V0ID8/IDApICogc3RhdGVHcm91cFByb2R1Y3Quc2VsZWN0TnVtKX08L2hlYWRlcj5cclxuICAgICAgICAgIDxmb290ZXI+e2xzKCfln7rlh4bku7fmoLwnKX08L2Zvb3Rlcj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPGRpdj54PC9kaXY+XHJcbiAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICA8aGVhZGVyPntzdGF0ZUdyb3VwUHJvZHVjdC5udW1EaXNjb3VudH08L2hlYWRlcj5cclxuICAgICAgICAgIDxmb290ZXI+e2xzKCfku73mlbDmipjmiaMnKX08L2Zvb3Rlcj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPGRpdj54PC9kaXY+XHJcbiAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICA8aGVhZGVyPntzdGF0ZUdyb3VwUHJvZHVjdC5ncm91cERpc2NvdW50fTwvaGVhZGVyPlxyXG4gICAgICAgICAgPGZvb3Rlcj57bHMoJ+aIkOWbouaKmOS4iuaKmCcpfTwvZm9vdGVyPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPC9QcmljZT5cclxuICAgIDwvU21hcnRNYXRjaD5cclxuICAgIDxTdWJtaXQ+XHJcbiAgICAgIDxhc2lkZT57bHMoJ+mAieaLqeS6hicpfXtzdGF0ZUdyb3VwUHJvZHVjdC5zZWxlY3ROdW19e2xzKCfku70nKX08L2FzaWRlPlxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBkaXNhYmxlZD17c3RhdGVHcm91cFByb2R1Y3Quc2VsZWN0TnVtID09PSAwfVxyXG4gICAgICAgICAgc3R5bGU9e3toZWlnaHQ6ICcxMDAlJywgcGFkZGluZzogJzAgMzJweCcsIGJvcmRlclJhZGl1czogJzAnLCBmb250U2l6ZTogJzE4cHgnfX1cclxuICAgICAgICAgIGNvbG9yPXsnc2Vjb25kYXJ5J31cclxuICAgICAgICAgIHZhcmlhbnQ9eydjb250YWluZWQnfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBhY3Rpb25zR3JvdXBPcmRlclBhZ2VNb2RlbC5vcGVuKClcclxuICAgICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7bHMoJ+WOu+e7k+eulycpfVxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgIDwvU3VibWl0PlxyXG4gICAgPEdyb3VwT3JkZXJQYWdlLz5cclxuICA8L2Rpdj5cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9