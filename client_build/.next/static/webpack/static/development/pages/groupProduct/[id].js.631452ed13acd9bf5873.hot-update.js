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

            case 2:
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
      lineNumber: 108,
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
var GroupQueueListBox = styled_components__WEBPACK_IMPORTED_MODULE_14__["default"].div.withConfig({
  displayName: "id__GroupQueueListBox",
  componentId: "sc-1c5vpsf-7"
})(["margin-top:16px;border-radius:8px;background:", ";"], _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_17__["grey"]['200']);
_c9 = GroupQueueListBox;
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
      lineNumber: 183,
      columnNumber: 10
    }
  }, __jsx(_components_HeaderTitle_HeaderTitle__WEBPACK_IMPORTED_MODULE_13__["HeaderTitle"], {
    title: '产品详情',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
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
      lineNumber: 187,
      columnNumber: 5
    }
  }), __jsx(PriceRed, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 5
    }
  }, __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('基准价格'), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 9
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_11__["dealMoney"])(product.priceOut), "/", product.packingUnitString)), __jsx("aside", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('已成团'), stateGroupProduct.groupQueueList.filter(function (v) {
    return v.sumFillAmount === (product === null || product === void 0 ? void 0 : product.groupPrecision);
  }).length, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('单')), __jsx("aside", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('拼团中'), stateGroupProduct.groupQueueList.filter(function (v) {
    var _v$sumFillAmount, _product$groupPrecisi;

    return ((_v$sumFillAmount = v.sumFillAmount) !== null && _v$sumFillAmount !== void 0 ? _v$sumFillAmount : 0) < ((_product$groupPrecisi = product === null || product === void 0 ? void 0 : product.groupPrecision) !== null && _product$groupPrecisi !== void 0 ? _product$groupPrecisi : 0);
  }).length, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('单'))), __jsx(Name, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 5
    }
  }, __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 7
    }
  }, product.name), __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 7
    }
  }, product.groupRemark, "/", product.groupAmount, product.groupAmountUnitString, __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 90
    }
  }), Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('分团精度'), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
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
        lineNumber: 206,
        columnNumber: 13
      }
    });
  })))), __jsx(GroupQueueBox, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 5
    }
  }, __jsx(Title, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('拼团中')), stateGroupProduct.groupQueueList.map(function (groupQueue) {
    return __jsx(GroupQueueListBox, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 59
      }
    }, __jsx("aside", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 9
      }
    }, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Array(product.groupPrecision)).map(function (v, i) {
      return i;
    }).map(function (value) {
      var _groupQueue$sumFillAm;

      return value + 1 > ((_groupQueue$sumFillAm = groupQueue.sumFillAmount) !== null && _groupQueue$sumFillAm !== void 0 ? _groupQueue$sumFillAm : 0) ? __jsx(_material_ui_icons_StarBorderRounded__WEBPACK_IMPORTED_MODULE_6___default.a, {
        key: "clickStar".concat(value),
        fontSize: 'large',
        onClick: function onClick() {
          return actionsGroupProduct.updateSelectNum(value + 1);
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 15
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
          lineNumber: 218,
          columnNumber: 20
        }
      });
    })));
  })), __jsx(SmartMatch, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 5
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 7
    }
  }, __jsx(Title, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 9
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('智能匹配'))), __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('请点击'), __jsx(_material_ui_icons_StarBorderRounded__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 9
    }
  }), Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('确定您需要的份数')), __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
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
        lineNumber: 238,
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
        lineNumber: 242,
        columnNumber: 18
      }
    });
  })), __jsx(Price, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 7
    }
  }, __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 9
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 11
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_11__["dealMoney"])(((_product$priceOut = product.priceOut) !== null && _product$priceOut !== void 0 ? _product$priceOut : 0) * stateGroupProduct.selectNum * stateGroupProduct.numDiscount * stateGroupProduct.groupDiscount)), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('折后价格'))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 9
    }
  }, "="), __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 9
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 11
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_11__["dealMoney"])(((_product$priceOut2 = product.priceOut) !== null && _product$priceOut2 !== void 0 ? _product$priceOut2 : 0) * stateGroupProduct.selectNum)), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('基准价格'))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 9
    }
  }, "x"), __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 9
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 11
    }
  }, stateGroupProduct.numDiscount), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('份数折扣'))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 9
    }
  }, "x"), __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 9
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 11
    }
  }, stateGroupProduct.groupDiscount), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('成团折上折'))))), __jsx(Submit, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 5
    }
  }, __jsx("aside", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
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
      lineNumber: 273,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('去结算'))), __jsx(_groupOrderPage__WEBPACK_IMPORTED_MODULE_19__["GroupOrderPage"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 5
    }
  }));
};

_s(GroupProduct, "qrgw/HnHGKkNkRufwtvbVCJovl4=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"], _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_10__["useStoreModel"], _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_10__["useStoreModel"]];
});

_c10 = GroupProduct;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;

$RefreshReg$(_c, "PriceRed");
$RefreshReg$(_c2, "Name");
$RefreshReg$(_c3, "YellowStar");
$RefreshReg$(_c4, "Title");
$RefreshReg$(_c5, "GroupQueueBox");
$RefreshReg$(_c6, "SmartMatch");
$RefreshReg$(_c7, "Price");
$RefreshReg$(_c8, "Submit");
$RefreshReg$(_c9, "GroupQueueListBox");
$RefreshReg$(_c10, "GroupProduct");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy92aWV3L2dyb3VwUHJvZHVjdC8udHN4Il0sIm5hbWVzIjpbImdyb3VwUHJvZHVjdE1vZGVsIiwibW9kZWxGYWN0b3J5IiwicHJvZHVjdCIsImdyb3VwUXVldWVMaXN0Iiwic2VsZWN0TnVtIiwic2VsZWN0UXVldWVJZCIsIm51bURpc2NvdW50IiwiZ3JvdXBEaXNjb3VudCIsImdldERhdGEiLCJ2YWx1ZSIsIm9wdGlvbiIsInF1ZXJ5IiwiZG9jIiwicHJvZHVjdExpc3RCeUlkcyIsImlkcyIsInJlcyIsImdyb3VwUXVldWVJdGVtSW5wdXQiLCJpZCIsInNldERhdGEiLCJmcE1lcmdlUHJlIiwibGlzdCIsInVwZGF0ZVNlbGVjdE51bSIsImRhdGEiLCJzdWJtaXQiLCJvcmRlckluZm9JdGVtSW5wdXQiLCJtdXRhdGUiLCJzYXZlR3JvdXBPcmRlciIsImdyb3VwT3JkZXJJdGVtSW5wdXQiLCJvcmRlckdyb3VwQW1vdW50IiwiUHJpY2VSZWQiLCJzdHlsZWQiLCJkaXYiLCJtcFN0eWxlIiwicmVkIiwiTmFtZSIsImdyZXkiLCJZZWxsb3dTdGFyIiwiY29sb3IiLCJUaXRsZSIsImhlYWRlciIsIkdyb3VwUXVldWVCb3giLCJTbWFydE1hdGNoIiwiUHJpY2UiLCJTdWJtaXQiLCJzaGFkb3ciLCJHcm91cFF1ZXVlTGlzdEJveCIsIkdyb3VwUHJvZHVjdCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0b3JlTW9kZWwiLCJhY3Rpb25zR3JvdXBQcm9kdWN0IiwiYWN0aW9ucyIsInN0YXRlR3JvdXBQcm9kdWN0Iiwic3RhdGUiLCJ1c2VFZmZlY3QiLCJncm91cE9yZGVyUGFnZU1vZGVsIiwiYWN0aW9uc0dyb3VwT3JkZXJQYWdlTW9kZWwiLCJjb25zb2xlIiwibG9nIiwiaW1nIiwibWFwIiwidiIsImltZ1VybCIsInVybCIsImxzIiwiZGVhbE1vbmV5IiwicHJpY2VPdXQiLCJwYWNraW5nVW5pdFN0cmluZyIsImZpbHRlciIsInN1bUZpbGxBbW91bnQiLCJncm91cFByZWNpc2lvbiIsImxlbmd0aCIsIm5hbWUiLCJncm91cFJlbWFyayIsImdyb3VwQW1vdW50IiwiZ3JvdXBBbW91bnRVbml0U3RyaW5nIiwiQXJyYXkiLCJpIiwiZ3JvdXBRdWV1ZSIsImhlaWdodCIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJmb250U2l6ZSIsIm9wZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxpQkFBaUIsR0FBR0MsMkVBQVksQ0FBQyxtQkFBRCxFQUFzQjtBQUNqRUMsU0FBTyxFQUFFLEVBRHdEO0FBRWpFQyxnQkFBYyxFQUFFLEVBRmlEO0FBR2pFQyxXQUFTLEVBQUUsQ0FIc0Q7QUFJakVDLGVBQWEsRUFBRSxFQUprRDtBQUtqRUMsYUFBVyxFQUFFLENBTG9EO0FBTWpFQyxlQUFhLEVBQUU7QUFOa0QsQ0FBdEIsRUFPMUM7QUFDREMsU0FBTztBQUFBLG9NQUFFLGlCQUFPQyxLQUFQLEVBQXNCQyxNQUF0QjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNXQSxNQUFNLENBQUNDLEtBQVAsQ0FBYUMscURBQUcsQ0FBQ0MsZ0JBQWpCLEVBQW1DO0FBQ25EQyxtQkFBRyxFQUFFLENBQUNMLEtBQUQ7QUFEOEMsZUFBbkMsQ0FEWDs7QUFBQTtBQUNETSxpQkFEQztBQUFBO0FBQUEscUJBSXNCTCxNQUFNLENBQUNDLEtBQVAsQ0FBYUMscURBQUcsQ0FBQ1QsY0FBakIsRUFBaUM7QUFDNURhLG1DQUFtQixFQUFFO0FBQ25CZCx5QkFBTyxFQUFFO0FBQ1BlLHNCQUFFLEVBQUVSO0FBREc7QUFEVTtBQUR1QyxlQUFqQyxDQUp0Qjs7QUFBQTtBQUlETiw0QkFKQztBQVdQTyxvQkFB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cGFnZXNcXGdyb3VwUHJvZHVjdFxcW2lkXS5qcy42MzE0NTJlZDEzYWNkOWJmNTg3My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFN0YXJSb3VuZGVkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU3RhclJvdW5kZWQnXHJcbmltcG9ydCBTdGFyQm9yZGVyUm91bmRlZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1N0YXJCb3JkZXJSb3VuZGVkJ1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7bW9kZWxGYWN0b3J5fSBmcm9tICcuLi8uLi9Nb2RlbEFjdGlvbi9tb2RlbFV0aWwnXHJcbmltcG9ydCB7XHJcbiAgR3JvdXBPcmRlckl0ZW1JbnB1dCxcclxuICBHcm91cFF1ZXVlLFxyXG4gIEdyb3VwUXVldWVJdGVtSW5wdXQsXHJcbiAgT3JkZXJJbmZvSXRlbUlucHV0LFxyXG4gIFByb2R1Y3RcclxufSBmcm9tICcuLi8uLi9ncmFwaHFsVHlwZXMvdHlwZXMnXHJcbmltcG9ydCB7ZG9jfSBmcm9tICcuLi8uLi9ncmFwaHFsVHlwZXMvZG9jJ1xyXG5pbXBvcnQge3VzZVN0b3JlTW9kZWx9IGZyb20gJy4uLy4uL01vZGVsQWN0aW9uL3VzZVN0b3JlJ1xyXG5pbXBvcnQge2RlYWxNb25leSwgZnBNZXJnZVByZX0gZnJvbSAnLi4vLi4vdG9vbHMvdXRpbHMnXHJcbmltcG9ydCBDdXNDYXJvdXNlbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1N3aXBlL1N3aXBlJ1xyXG5pbXBvcnQge0hlYWRlclRpdGxlfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0hlYWRlclRpdGxlL0hlYWRlclRpdGxlJ1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQge2xzfSBmcm9tICcuLi8uLi90b29scy9kZWFsS2V5J1xyXG5pbXBvcnQge21wU3R5bGV9IGZyb20gJy4uLy4uL3N0eWxlL2NvbW1vbidcclxuaW1wb3J0IHtncmV5fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMnXHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHtHcm91cE9yZGVyUGFnZSwgZ3JvdXBPcmRlclBhZ2VNb2RlbH0gZnJvbSAnLi9ncm91cE9yZGVyUGFnZSdcclxuXHJcbmV4cG9ydCBjb25zdCBncm91cFByb2R1Y3RNb2RlbCA9IG1vZGVsRmFjdG9yeSgnZ3JvdXBQcm9kdWN0TW9kZWwnLCB7XHJcbiAgcHJvZHVjdDoge30gYXMgUHJvZHVjdCxcclxuICBncm91cFF1ZXVlTGlzdDogW10gYXMgR3JvdXBRdWV1ZVtdLFxyXG4gIHNlbGVjdE51bTogMCxcclxuICBzZWxlY3RRdWV1ZUlkOiAnJyxcclxuICBudW1EaXNjb3VudDogMSxcclxuICBncm91cERpc2NvdW50OiAxLFxyXG59LCB7XHJcbiAgZ2V0RGF0YTogYXN5bmMgKHZhbHVlOiBzdHJpbmcsIG9wdGlvbikgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgb3B0aW9uLnF1ZXJ5KGRvYy5wcm9kdWN0TGlzdEJ5SWRzLCB7XHJcbiAgICAgIGlkczogW3ZhbHVlXSxcclxuICAgIH0pXHJcbiAgICBjb25zdCBncm91cFF1ZXVlTGlzdCA9IGF3YWl0IG9wdGlvbi5xdWVyeShkb2MuZ3JvdXBRdWV1ZUxpc3QsIHtcclxuICAgICAgZ3JvdXBRdWV1ZUl0ZW1JbnB1dDoge1xyXG4gICAgICAgIHByb2R1Y3Q6IHtcclxuICAgICAgICAgIGlkOiB2YWx1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9IGFzIEdyb3VwUXVldWVJdGVtSW5wdXQsXHJcbiAgICB9KVxyXG4gICAgb3B0aW9uLnNldERhdGEoZnBNZXJnZVByZSh7XHJcbiAgICAgIHByb2R1Y3Q6IHJlcz8ucHJvZHVjdExpc3RCeUlkcz8ubGlzdFswXSA/PyB7fSxcclxuICAgICAgZ3JvdXBRdWV1ZUxpc3Q6IGdyb3VwUXVldWVMaXN0Py5ncm91cFF1ZXVlTGlzdCA/PyBbXSxcclxuICAgIH0pKVxyXG4gIH0sXHJcbiAgdXBkYXRlU2VsZWN0TnVtOiAodmFsdWU6IG51bWJlciwgb3B0aW9uKSA9PiB7XHJcbiAgICBvcHRpb24uc2V0RGF0YShmcE1lcmdlUHJlKHtcclxuICAgICAgc2VsZWN0TnVtOiB2YWx1ZSA9PT0gb3B0aW9uLmRhdGEuc2VsZWN0TnVtID8gMCA6IHZhbHVlXHJcbiAgICB9KSlcclxuICB9LFxyXG4gIHN1Ym1pdDogYXN5bmMgKHtvcmRlckluZm9JdGVtSW5wdXR9OiB7IG9yZGVySW5mb0l0ZW1JbnB1dDogT3JkZXJJbmZvSXRlbUlucHV0IH0sIG9wdGlvbikgPT4ge1xyXG4gICAgb3B0aW9uLm11dGF0ZShkb2Muc2F2ZUdyb3VwT3JkZXIsIHtcclxuICAgICAgb3JkZXJJbmZvSXRlbUlucHV0OiB7XHJcbiAgICAgICAgICAuLi5vcmRlckluZm9JdGVtSW5wdXQsXHJcbiAgICAgIH0gYXMgT3JkZXJJbmZvSXRlbUlucHV0LFxyXG4gICAgICBncm91cE9yZGVySXRlbUlucHV0OiB7XHJcbiAgICAgICAgb3JkZXJHcm91cEFtb3VudDogb3B0aW9uLmRhdGEuc2VsZWN0TnVtLFxyXG4gICAgICB9IGFzIEdyb3VwT3JkZXJJdGVtSW5wdXQsXHJcbiAgICAgIGdyb3VwUXVldWVJdGVtSW5wdXQ6IHtcclxuICAgICAgICBwcm9kdWN0OiBvcHRpb24uZGF0YS5wcm9kdWN0LFxyXG4gICAgICAgIC4uLihvcHRpb24uZGF0YS5zZWxlY3RRdWV1ZUlkID8ge2lkOiBvcHRpb24uZGF0YS5zZWxlY3RRdWV1ZUlkfSA6IHt9KSxcclxuICAgICAgfSBhcyBHcm91cFF1ZXVlSXRlbUlucHV0LFxyXG4gICAgfSlcclxuICB9LFxyXG59KVxyXG5cclxuY29uc3QgUHJpY2VSZWQgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQ6ICR7bXBTdHlsZS5yZWR9O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEyMHB4O1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDMwcHgpO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgPiBtYWluIHtcclxuICAgIGdyaWQtYXJlYTogMS8xLzMvMjtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgID4gc3BhbiB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5jb25zdCBOYW1lID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAxNnB4IDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgPiBtYWluIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgfVxyXG4gID4gc2VjdGlvbiB7XHJcbiAgICA+IHNwYW4ge1xyXG4gICAgICBwYWRkaW5nOiAwIDRweDtcclxuICAgICAgYmFja2dyb3VuZDogJHtncmV5Wyc3MDAnXX07XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBib3R0b206IC00cHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgWWVsbG93U3RhciA9ICgpID0+IDxTdGFyUm91bmRlZEljb24gZm9udFNpemU9eydzbWFsbCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y29sb3I6ICcjRkREMzM0J319Lz5cclxuXHJcbmNvbnN0IFRpdGxlID0gc3R5bGVkLmhlYWRlcmBcclxuICBmb250LXNpemU6IDIwcHg7XHJcbmBcclxuY29uc3QgR3JvdXBRdWV1ZUJveCA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogMTZweDtcclxuYFxyXG5cclxuY29uc3QgU21hcnRNYXRjaCA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogMTZweCAxNnB4IDkwcHg7XHJcbiAgPiBzZWN0aW9uIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICA+IG1haW4ge1xyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgUHJpY2UgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gID4gbWFpbiB7XHJcbiAgICAvL2ZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICA+IG1haW4sIHNlY3Rpb24ge1xyXG4gICAgPiAqIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgU3VibWl0ID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICR7bXBTdHlsZS5yZWR9O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYm94LXNoYWRvdzogJHttcFN0eWxlLnNoYWRvd1snMSddfTtcclxuICA+IGFzaWRlIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAgIGNvbG9yOiAke21wU3R5bGUucmVkfTtcclxuICB9XHJcbmBcclxuY29uc3QgR3JvdXBRdWV1ZUxpc3RCb3ggPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJhY2tncm91bmQ6ICR7Z3JleVsnMjAwJ119O1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgR3JvdXBQcm9kdWN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgaWQgPSAocm91dGVyLnF1ZXJ5Py5pZCBhcyBzdHJpbmcpID8/ICcnXHJcbiAgY29uc3Qge2FjdGlvbnM6IGFjdGlvbnNHcm91cFByb2R1Y3QsIHN0YXRlOiBzdGF0ZUdyb3VwUHJvZHVjdH0gPSB1c2VTdG9yZU1vZGVsKGdyb3VwUHJvZHVjdE1vZGVsKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhY3Rpb25zR3JvdXBQcm9kdWN0LmdldERhdGEoaWQpXHJcbiAgfSwgW2lkXSlcclxuICBjb25zdCB7YWN0aW9uczogYWN0aW9uc0dyb3VwT3JkZXJQYWdlTW9kZWx9ID0gdXNlU3RvcmVNb2RlbChncm91cE9yZGVyUGFnZU1vZGVsKVxyXG5cclxuICBjb25zdCBwcm9kdWN0ID0gc3RhdGVHcm91cFByb2R1Y3QucHJvZHVjdFxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBhY3Rpb25zR3JvdXBQcm9kdWN0LnVwZGF0ZVNlbGVjdE51bSgyKVxyXG4gIC8vICAgYWN0aW9uc0dyb3VwT3JkZXJQYWdlTW9kZWwub3BlbigpXHJcbiAgLy8gfSwgW10pXHJcblxyXG4gIGNvbnNvbGUubG9nKHN0YXRlR3JvdXBQcm9kdWN0Lmdyb3VwUXVldWVMaXN0KVxyXG4gIHJldHVybiA8ZGl2PlxyXG4gICAgPEhlYWRlclRpdGxlXHJcbiAgICAgICAgdGl0bGU9eyfkuqflk4Hor6bmg4UnfVxyXG4gICAgLz5cclxuICAgIDxDdXNDYXJvdXNlbFxyXG4gICAgICAgIGhlaWdodD17JzI0MHB4J31cclxuICAgICAgICBkYXRhTGlzdD17cHJvZHVjdD8uaW1nPy5tYXAodiA9PiAoe1xyXG4gICAgICAgICAgLi4udixcclxuICAgICAgICAgIGltZ1VybDogdj8udXJsLFxyXG4gICAgICAgIH0pKSBhcyBbXX1cclxuICAgIC8+XHJcbiAgICA8UHJpY2VSZWQ+XHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgIHtscygn5Z+65YeG5Lu35qC8Jyl9XHJcbiAgICAgICAgPHNwYW4+e2RlYWxNb25leShwcm9kdWN0LnByaWNlT3V0KX0ve3Byb2R1Y3QucGFja2luZ1VuaXRTdHJpbmd9PC9zcGFuPlxyXG4gICAgICA8L21haW4+XHJcbiAgICAgIDxhc2lkZT57bHMoJ+W3suaIkOWboicpfXtzdGF0ZUdyb3VwUHJvZHVjdC5ncm91cFF1ZXVlTGlzdC5maWx0ZXIodiA9PiB2LnN1bUZpbGxBbW91bnQgPT09IHByb2R1Y3Q/Lmdyb3VwUHJlY2lzaW9uKS5sZW5ndGh9e2xzKCfljZUnKX08L2FzaWRlPlxyXG4gICAgICA8YXNpZGU+e2xzKCfmi7zlm6LkuK0nKX17c3RhdGVHcm91cFByb2R1Y3QuZ3JvdXBRdWV1ZUxpc3QuZmlsdGVyKHYgPT4gKHYuc3VtRmlsbEFtb3VudCA/PyAwKSA8IChwcm9kdWN0Py5ncm91cFByZWNpc2lvbiA/PyAwKSkubGVuZ3RofXtscygn5Y2VJyl9PC9hc2lkZT5cclxuICAgIDwvUHJpY2VSZWQ+XHJcbiAgICA8TmFtZT5cclxuICAgICAgPG1haW4+e3Byb2R1Y3QubmFtZX08L21haW4+XHJcbiAgICAgIDxzZWN0aW9uPntwcm9kdWN0Lmdyb3VwUmVtYXJrfS97cHJvZHVjdC5ncm91cEFtb3VudH17cHJvZHVjdC5ncm91cEFtb3VudFVuaXRTdHJpbmd9PGJyLz57bHMoJ+WIhuWboueyvuW6picpfVxyXG4gICAgICAgIDxzcGFuPntbLi4uQXJyYXkocHJvZHVjdC5ncm91cFByZWNpc2lvbildLm1hcCgodiwgaSkgPT4gaSkubWFwKHZhbHVlID0+XHJcbiAgICAgICAgICAgIDxZZWxsb3dTdGFyIGtleT17dmFsdWV9Lz4pfTwvc3Bhbj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9OYW1lPlxyXG4gICAgPEdyb3VwUXVldWVCb3g+XHJcbiAgICAgIDxUaXRsZT57bHMoJ+aLvOWbouS4rScpfTwvVGl0bGU+XHJcbiAgICAgIHtzdGF0ZUdyb3VwUHJvZHVjdC5ncm91cFF1ZXVlTGlzdC5tYXAoZ3JvdXBRdWV1ZSA9PiA8R3JvdXBRdWV1ZUxpc3RCb3g+XHJcbiAgICAgICAgPGFzaWRlPlxyXG4gICAgICAgICAge1suLi5BcnJheShwcm9kdWN0Lmdyb3VwUHJlY2lzaW9uKV0ubWFwKCh2LCBpKSA9PiBpKS5tYXAodmFsdWUgPT4gdmFsdWUgKyAxID4gKGdyb3VwUXVldWUuc3VtRmlsbEFtb3VudCA/PyAwKSA/XHJcbiAgICAgICAgICAgICAgPFN0YXJCb3JkZXJSb3VuZGVkSWNvblxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2BjbGlja1N0YXIke3ZhbHVlfWB9XHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplPXsnbGFyZ2UnfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhY3Rpb25zR3JvdXBQcm9kdWN0LnVwZGF0ZVNlbGVjdE51bSh2YWx1ZSArIDEpfVxyXG4gICAgICAgICAgICAgIC8+IDogPFN0YXJSb3VuZGVkSWNvblxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2BjbGlja1N0YXIke3ZhbHVlfWB9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y29sb3I6ICcjRkREMzM0J319XHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplPXsnbGFyZ2UnfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhY3Rpb25zR3JvdXBQcm9kdWN0LnVwZGF0ZVNlbGVjdE51bSh2YWx1ZSArIDEpfVxyXG4gICAgICAgICAgICAgIC8+KX1cclxuICAgICAgICA8L2FzaWRlPlxyXG4gICAgICA8L0dyb3VwUXVldWVMaXN0Qm94Pil9XHJcbiAgICA8L0dyb3VwUXVldWVCb3g+XHJcbiAgICA8U21hcnRNYXRjaD5cclxuICAgICAgPGhlYWRlcj5cclxuICAgICAgICA8VGl0bGU+e2xzKCfmmbrog73ljLnphY0nKX08L1RpdGxlPlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAge2xzKCfor7fngrnlh7snKX1cclxuICAgICAgICA8U3RhckJvcmRlclJvdW5kZWRJY29uLz5cclxuICAgICAgICB7bHMoJ+ehruWumuaCqOmcgOimgeeahOS7veaVsCcpfVxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgIHtbLi4uQXJyYXkocHJvZHVjdC5ncm91cFByZWNpc2lvbildLm1hcCgodiwgaSkgPT4gaSkubWFwKHZhbHVlID0+IHZhbHVlICsgMSA+IHN0YXRlR3JvdXBQcm9kdWN0LnNlbGVjdE51bSA/XHJcbiAgICAgICAgICAgIDxTdGFyQm9yZGVyUm91bmRlZEljb25cclxuICAgICAgICAgICAgICAgIGtleT17YGNsaWNrU3RhciR7dmFsdWV9YH1cclxuICAgICAgICAgICAgICAgIGZvbnRTaXplPXsnbGFyZ2UnfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYWN0aW9uc0dyb3VwUHJvZHVjdC51cGRhdGVTZWxlY3ROdW0odmFsdWUgKyAxKX1cclxuICAgICAgICAgICAgLz4gOiA8U3RhclJvdW5kZWRJY29uXHJcbiAgICAgICAgICAgICAgICBrZXk9e2BjbGlja1N0YXIke3ZhbHVlfWB9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e2NvbG9yOiAnI0ZERDMzNCd9fVxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU9eydsYXJnZSd9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhY3Rpb25zR3JvdXBQcm9kdWN0LnVwZGF0ZVNlbGVjdE51bSh2YWx1ZSArIDEpfVxyXG4gICAgICAgICAgICAvPil9XHJcbiAgICAgIDwvbWFpbj5cclxuICAgICAgPFByaWNlPlxyXG4gICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgPGhlYWRlcj57ZGVhbE1vbmV5KChwcm9kdWN0LnByaWNlT3V0ID8/IDApICogc3RhdGVHcm91cFByb2R1Y3Quc2VsZWN0TnVtICogc3RhdGVHcm91cFByb2R1Y3QubnVtRGlzY291bnQgKiBzdGF0ZUdyb3VwUHJvZHVjdC5ncm91cERpc2NvdW50KX08L2hlYWRlcj5cclxuICAgICAgICAgIDxmb290ZXI+e2xzKCfmipjlkI7ku7fmoLwnKX08L2Zvb3Rlcj5cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgICAgPGRpdj49PC9kaXY+XHJcbiAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICA8aGVhZGVyPntkZWFsTW9uZXkoKHByb2R1Y3QucHJpY2VPdXQgPz8gMCkgKiBzdGF0ZUdyb3VwUHJvZHVjdC5zZWxlY3ROdW0pfTwvaGVhZGVyPlxyXG4gICAgICAgICAgPGZvb3Rlcj57bHMoJ+WfuuWHhuS7t+agvCcpfTwvZm9vdGVyPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8ZGl2Png8L2Rpdj5cclxuICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgIDxoZWFkZXI+e3N0YXRlR3JvdXBQcm9kdWN0Lm51bURpc2NvdW50fTwvaGVhZGVyPlxyXG4gICAgICAgICAgPGZvb3Rlcj57bHMoJ+S7veaVsOaKmOaJoycpfTwvZm9vdGVyPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8ZGl2Png8L2Rpdj5cclxuICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgIDxoZWFkZXI+e3N0YXRlR3JvdXBQcm9kdWN0Lmdyb3VwRGlzY291bnR9PC9oZWFkZXI+XHJcbiAgICAgICAgICA8Zm9vdGVyPntscygn5oiQ5Zui5oqY5LiK5oqYJyl9PC9mb290ZXI+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8L1ByaWNlPlxyXG4gICAgPC9TbWFydE1hdGNoPlxyXG4gICAgPFN1Ym1pdD5cclxuICAgICAgPGFzaWRlPntscygn6YCJ5oup5LqGJyl9e3N0YXRlR3JvdXBQcm9kdWN0LnNlbGVjdE51bX17bHMoJ+S7vScpfTwvYXNpZGU+XHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICAgIGRpc2FibGVkPXtzdGF0ZUdyb3VwUHJvZHVjdC5zZWxlY3ROdW0gPT09IDB9XHJcbiAgICAgICAgICBzdHlsZT17e2hlaWdodDogJzEwMCUnLCBwYWRkaW5nOiAnMCAzMnB4JywgYm9yZGVyUmFkaXVzOiAnMCcsIGZvbnRTaXplOiAnMThweCd9fVxyXG4gICAgICAgICAgY29sb3I9eydzZWNvbmRhcnknfVxyXG4gICAgICAgICAgdmFyaWFudD17J2NvbnRhaW5lZCd9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIGFjdGlvbnNHcm91cE9yZGVyUGFnZU1vZGVsLm9wZW4oKVxyXG4gICAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHtscygn5Y6757uT566XJyl9XHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgPC9TdWJtaXQ+XHJcbiAgICA8R3JvdXBPcmRlclBhZ2UvPlxyXG4gIDwvZGl2PlxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=