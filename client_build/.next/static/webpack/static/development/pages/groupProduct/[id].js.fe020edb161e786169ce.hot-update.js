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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

















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
      var _res$productListByIds, _res$productListByIds2, _groupQueueList$group, _groupQueueList$group2;

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
                groupQueueList: (_groupQueueList$group = groupQueueList === null || groupQueueList === void 0 ? void 0 : (_groupQueueList$group2 = groupQueueList.groupQueueList) === null || _groupQueueList$group2 === void 0 ? void 0 : _groupQueueList$group2.sort(function (a, b) {
                  var _a$sumFillAmount, _b$sumFillAmount;

                  return ((_a$sumFillAmount = a.sumFillAmount) !== null && _a$sumFillAmount !== void 0 ? _a$sumFillAmount : 0) - ((_b$sumFillAmount = b.sumFillAmount) !== null && _b$sumFillAmount !== void 0 ? _b$sumFillAmount : 0);
                })) !== null && _groupQueueList$group !== void 0 ? _groupQueueList$group : []
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
    var _reverse$find$id, _reverse, _reverse$find;

    option.setData(Object(_tools_utils__WEBPACK_IMPORTED_MODULE_11__["fpMergePre"])(value === option.data.selectNum ? {
      selectNum: 0,
      selectQueueId: ''
    } : {
      selectNum: value,
      selectQueueId: (_reverse$find$id = (_reverse = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(option.data.groupQueueList).reverse()) === null || _reverse === void 0 ? void 0 : (_reverse$find = _reverse.find(function (v) {
        var _v$sumFillAmount, _option$data$product$, _option$data, _option$data$product;

        return ((_v$sumFillAmount = v.sumFillAmount) !== null && _v$sumFillAmount !== void 0 ? _v$sumFillAmount : 0) + value <= ((_option$data$product$ = (_option$data = option.data) === null || _option$data === void 0 ? void 0 : (_option$data$product = _option$data.product) === null || _option$data$product === void 0 ? void 0 : _option$data$product.groupPrecision) !== null && _option$data$product$ !== void 0 ? _option$data$product$ : 0);
      })) === null || _reverse$find === void 0 ? void 0 : _reverse$find.id) !== null && _reverse$find$id !== void 0 ? _reverse$find$id : ''
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
              _context2.next = 3;
              return option.mutate(_graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_9__["doc"].saveGroupOrder, {
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
              return _context2.abrupt("return", _context2.sent);

            case 4:
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
      lineNumber: 113,
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
})(["margin-top:16px;border-radius:8px;background:", ";display:flex;justify-content:space-between;align-items:center;padding:0 8px;"], function (prop) {
  return prop.select ? "linear-gradient(to right, ".concat(_style_common__WEBPACK_IMPORTED_MODULE_16__["mpStyle"].red, ", #FC7361)") : _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_17__["grey"]['200'];
});
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
      lineNumber: 194,
      columnNumber: 10
    }
  }, __jsx(_components_HeaderTitle_HeaderTitle__WEBPACK_IMPORTED_MODULE_13__["HeaderTitle"], {
    title: '产品详情',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
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
      lineNumber: 198,
      columnNumber: 5
    }
  }), __jsx(PriceRed, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 5
    }
  }, __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('基准价格'), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 9
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_11__["dealMoney"])(product.priceOut), "/", product.packingUnitString)), __jsx("aside", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('已成团'), stateGroupProduct.groupQueueList.filter(function (v) {
    return v.sumFillAmount === (product === null || product === void 0 ? void 0 : product.groupPrecision);
  }).length, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('单')), __jsx("aside", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('拼团中'), stateGroupProduct.groupQueueList.filter(function (v) {
    var _v$sumFillAmount2, _product$groupPrecisi;

    return ((_v$sumFillAmount2 = v.sumFillAmount) !== null && _v$sumFillAmount2 !== void 0 ? _v$sumFillAmount2 : 0) < ((_product$groupPrecisi = product === null || product === void 0 ? void 0 : product.groupPrecision) !== null && _product$groupPrecisi !== void 0 ? _product$groupPrecisi : 0);
  }).length, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('单'))), __jsx(Name, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 5
    }
  }, __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 7
    }
  }, product.name), __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 7
    }
  }, product.groupRemark, "/", product.groupAmount, product.groupAmountUnitString, __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 90
    }
  }), Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('分团精度'), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 9
    }
  }, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(Array(product.groupPrecision)).map(function (v, i) {
    return i;
  }).map(function (value) {
    return __jsx(YellowStar, {
      key: value,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 13
      }
    });
  })))), __jsx(GroupQueueBox, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 5
    }
  }, __jsx(Title, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('拼团中')), stateGroupProduct.groupQueueList.map(function (groupQueue) {
    var _groupQueue$sumFillAm2;

    var select = groupQueue.id === stateGroupProduct.selectQueueId;
    return __jsx(GroupQueueListBox, {
      select: select,
      key: "GroupQueueListBox".concat(groupQueue.id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 16
      }
    }, __jsx("aside", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 11
      }
    }, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(Array(product.groupPrecision)).map(function (v, i) {
      return i;
    }).map(function (value) {
      var _groupQueue$sumFillAm;

      return value + 1 > ((_groupQueue$sumFillAm = groupQueue.sumFillAmount) !== null && _groupQueue$sumFillAm !== void 0 ? _groupQueue$sumFillAm : 0) + (select ? stateGroupProduct.selectNum : 0) ? __jsx(_material_ui_icons_StarBorderRounded__WEBPACK_IMPORTED_MODULE_6___default.a, {
        key: "clickStar".concat(value),
        fontSize: 'large',
        onClick: function onClick() {
          return actionsGroupProduct.updateSelectNum(value + 1);
        },
        style: {
          color: select ? '#fff' : '#000'
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 17
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
          lineNumber: 235,
          columnNumber: 22
        }
      });
    })), __jsx("footer", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 11
      }
    }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])(((_groupQueue$sumFillAm2 = groupQueue.sumFillAmount) !== null && _groupQueue$sumFillAm2 !== void 0 ? _groupQueue$sumFillAm2 : 0) + (select ? stateGroupProduct.selectNum : 0) === product.groupPrecision ? '成团啦' : '未成团')));
  })), __jsx(SmartMatch, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 5
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 7
    }
  }, __jsx(Title, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 9
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('智能匹配'))), __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('请点击'), __jsx(_material_ui_icons_StarBorderRounded__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 9
    }
  }), Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('确定您需要的份数')), __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 7
    }
  }, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(Array(product.groupPrecision)).map(function (v, i) {
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
        lineNumber: 257,
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
        lineNumber: 261,
        columnNumber: 18
      }
    });
  })), __jsx(Price, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 7
    }
  }, __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 9
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 11
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_11__["dealMoney"])(((_product$priceOut = product.priceOut) !== null && _product$priceOut !== void 0 ? _product$priceOut : 0) * stateGroupProduct.selectNum * stateGroupProduct.numDiscount * stateGroupProduct.groupDiscount)), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('折后价格'))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 9
    }
  }, "="), __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 9
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 11
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_11__["dealMoney"])(((_product$priceOut2 = product.priceOut) !== null && _product$priceOut2 !== void 0 ? _product$priceOut2 : 0) * stateGroupProduct.selectNum)), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('基准价格'))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 9
    }
  }, "x"), __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 9
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 11
    }
  }, stateGroupProduct.numDiscount), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('份数折扣'))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 9
    }
  }, "x"), __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 9
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 11
    }
  }, stateGroupProduct.groupDiscount), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('成团折上折'))))), __jsx(Submit, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 5
    }
  }, __jsx("aside", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
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
      lineNumber: 292,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('去结算'))), __jsx(_groupOrderPage__WEBPACK_IMPORTED_MODULE_19__["GroupOrderPage"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
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

/***/ }),

/***/ "./utils/view/groupProduct/groupOrderPage.tsx":
/*!****************************************************!*\
  !*** ./utils/view/groupProduct/groupOrderPage.tsx ***!
  \****************************************************/
/*! exports provided: groupOrderPageModel, GroupOrderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupOrderPageModel", function() { return groupOrderPageModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupOrderPage", function() { return GroupOrderPage; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ModelAction/modelUtil */ "./utils/ModelAction/modelUtil.ts");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ModelAction/useStore */ "./utils/ModelAction/useStore.ts");
/* harmony import */ var _tools_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../tools/utils */ "./utils/tools/utils.ts");
/* harmony import */ var _id___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./[id] */ "./utils/view/groupProduct/[id].tsx");
/* harmony import */ var _cart_CartProduct__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../cart/CartProduct */ "./utils/view/cart/CartProduct.tsx");
/* harmony import */ var _tools_img__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../tools/img */ "./utils/tools/img.ts");
/* harmony import */ var _components_ProductItem_ProductItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/ProductItem/ProductItem */ "./utils/components/ProductItem/ProductItem.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _tools_dealKey__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../tools/dealKey */ "./utils/tools/dealKey.ts");
/* harmony import */ var _components_Box_Box__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/Box/Box */ "./utils/components/Box/Box.tsx");
/* harmony import */ var _ss_common_enum__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../ss_common/enum */ "./utils/ss_common/enum.ts");
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/ChevronRight */ "./node_modules/@material-ui/icons/ChevronRight.js");
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _cart_orderPage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../cart/orderPage */ "./utils/view/cart/orderPage.tsx");
/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../cart */ "./utils/view/cart/index.tsx");
/* harmony import */ var _cart_components_SelectAddress__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../cart/components/SelectAddress */ "./utils/view/cart/components/SelectAddress.tsx");
/* harmony import */ var _cart_components_SelectCard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../cart/components/SelectCard */ "./utils/view/cart/components/SelectCard.tsx");
/* harmony import */ var _components_ButtonLoad_ButtonLoad__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../components/ButtonLoad/ButtonLoad */ "./utils/components/ButtonLoad/ButtonLoad.tsx");
/* harmony import */ var _style_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../style/common */ "./utils/style/common.ts");
/* harmony import */ var _components_Message_Message__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../components/Message/Message */ "./utils/components/Message/Message.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_24__);




var _this = undefined,
    _jsxFileName = "D:\\code\\zw\\zw_client_web\\utils\\view\\groupProduct\\groupOrderPage.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }























var groupOrderPageModel = Object(_ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_4__["modelFactory"])('orderPageModel', {
  show: false
}, {
  open: function open(value, option) {
    option.setData(Object(_tools_utils__WEBPACK_IMPORTED_MODULE_7__["fpMergePre"])({
      show: true
    }));
  }
});
var OrderPageBox = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "groupOrderPage__OrderPageBox",
  componentId: "bhof7w-0"
})(["position:fixed;top:0;bottom:0;left:0;right:0;background:white;> footer{position:fixed;bottom:0;box-sizing:border-box;box-shadow:", ";width:100vw;text-align:right;}"], _style_common__WEBPACK_IMPORTED_MODULE_22__["mpStyle"].shadow["1"]);
_c = OrderPageBox;
var GroupOrderPage = function GroupOrderPage() {
  _s();

  var _stateSCM$payCardList, _product$priceOut, _stateSCM$freightConf, _product$img, _product$img$;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_24__["useRouter"])();

  var _useStoreModel = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_6__["useStoreModel"])(groupOrderPageModel),
      stateOrderPageModel = _useStoreModel.state;

  var _useStoreModel2 = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_6__["useStoreModel"])(_id___WEBPACK_IMPORTED_MODULE_8__["groupProductModel"]),
      actionsGroupProduct = _useStoreModel2.actions,
      stateGroupProduct = _useStoreModel2.state;

  var product = stateGroupProduct.product;

  var _useStoreModel3 = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_6__["useStoreModel"])(_cart__WEBPACK_IMPORTED_MODULE_18__["shopCartModel"]),
      stateSCM = _useStoreModel3.state,
      actionsSCM = _useStoreModel3.actions;

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (!stateSCM.user.id) {
      actionsSCM.getOrderInfo();
    }
  }, []);

  var _useStoreModel4 = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_6__["useStoreModel"])(_cart_components_SelectAddress__WEBPACK_IMPORTED_MODULE_19__["selectAddressModel"]),
      actionsSAM = _useStoreModel4.actions;

  var _useStoreModel5 = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_6__["useStoreModel"])(_cart_components_SelectCard__WEBPACK_IMPORTED_MODULE_20__["selectCardModel"]),
      actionsSelectCard = _useStoreModel5.actions;

  var addressData = stateSCM.dealAddressData(stateSCM);
  var cardData = ((_stateSCM$payCardList = stateSCM.payCardList) === null || _stateSCM$payCardList === void 0 ? void 0 : _stateSCM$payCardList.find(function (v) {
    return v.id === stateSCM.form.paymentMethodCardId;
  })) || {};
  var productTotal = ((_product$priceOut = product.priceOut) !== null && _product$priceOut !== void 0 ? _product$priceOut : 0) * stateGroupProduct.selectNum;
  var transportationCosts = stateSCM.form.pickUpType === _ss_common_enum__WEBPACK_IMPORTED_MODULE_15__["PickUpTypeEnum"].Delivery && stateSCM.freightConfig.reduce(function (pre, cur) {
    if (pre > parseFloat(cur === null || cur === void 0 ? void 0 : cur.freightPay) && productTotal < parseFloat(cur === null || cur === void 0 ? void 0 : cur.orderMax)) {
      return parseFloat(cur === null || cur === void 0 ? void 0 : cur.freightPay);
    } else {
      return pre;
    }
  }, parseFloat((_stateSCM$freightConf = stateSCM.freightConfig[stateSCM.freightConfig.length - 1]) === null || _stateSCM$freightConf === void 0 ? void 0 : _stateSCM$freightConf.freightPay)) || 0;
  var actuallyPaid = productTotal + transportationCosts + Object(_tools_utils__WEBPACK_IMPORTED_MODULE_7__["dealMaybeNumber"])(stateSCM.form.saleTax);
  var generateCoin = actuallyPaid * 0.01;
  return stateOrderPageModel.show && __jsx(OrderPageBox, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 38
    }
  }, __jsx(_cart_CartProduct__WEBPACK_IMPORTED_MODULE_9__["ShopCartProductBox"], {
    style: {
      padding: '20px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: Object(_tools_img__WEBPACK_IMPORTED_MODULE_10__["dealImgUrl"])(product === null || product === void 0 ? void 0 : (_product$img = product.img) === null || _product$img === void 0 ? void 0 : (_product$img$ = _product$img[0]) === null || _product$img$ === void 0 ? void 0 : _product$img$.url),
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }), __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }, product === null || product === void 0 ? void 0 : product.name, product === null || product === void 0 ? void 0 : product.weight, product === null || product === void 0 ? void 0 : product.unit), __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }
  }, product === null || product === void 0 ? void 0 : product.remark), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  }, __jsx(_components_ProductItem_ProductItem__WEBPACK_IMPORTED_MODULE_11__["ProductPrice"], {
    product: product,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, stateGroupProduct.selectNum, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_13__["ls"])('份')))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TextField"], {
    style: {
      margin: '16px',
      width: 'calc(100vw - 32px)'
    },
    fullWidth: true,
    label: Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_13__["ls"])('运送方式'),
    select: true,
    value: stateSCM.form.pickUpType,
    onChange: function onChange(event) {
      actionsSCM.setForm(['pickUpType', event.target.value]);
      actionsSCM.setForm(['addressId', stateSCM.initAddressId(Object(_tools_utils__WEBPACK_IMPORTED_MODULE_7__["fpMerge"])(stateSCM, {
        form: {
          pickUpType: event.target.value
        }
      }))]);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["MenuItem"], {
    value: _ss_common_enum__WEBPACK_IMPORTED_MODULE_15__["PickUpTypeEnum"].Self,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_13__["ls"])(Object(_ss_common_enum__WEBPACK_IMPORTED_MODULE_15__["getPickUpTypeName"])(_ss_common_enum__WEBPACK_IMPORTED_MODULE_15__["PickUpTypeEnum"].Self))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["MenuItem"], {
    value: _ss_common_enum__WEBPACK_IMPORTED_MODULE_15__["PickUpTypeEnum"].Delivery,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_13__["ls"])(Object(_ss_common_enum__WEBPACK_IMPORTED_MODULE_15__["getPickUpTypeName"])(_ss_common_enum__WEBPACK_IMPORTED_MODULE_15__["PickUpTypeEnum"].Delivery)))), __jsx(_cart_orderPage__WEBPACK_IMPORTED_MODULE_17__["AddressBox"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 5
    }
  }, __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }
  }, "".concat(addressData.combineAddress)), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 9
    }
  }, "".concat(addressData.name, " ").concat(addressData.contactInformation))), __jsx("aside", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["IconButton"], {
    onClick: /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return actionsSAM.openClick();

            case 2:
              res = _context.sent;

              if (res) {
                actionsSCM.setForm(['addressId', res]);
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_16___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 11
    }
  })))), __jsx(_cart_orderPage__WEBPACK_IMPORTED_MODULE_17__["ShopTitle"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 5
    }
  }, __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_14__["Space"], {
    w: 20,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }
  }), Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_13__["ls"])('付款方式')), __jsx(_cart_orderPage__WEBPACK_IMPORTED_MODULE_17__["CardBox"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 5
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 7
    }
  }, cardData.name), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 7
    }
  }, cardData.number), __jsx("aside", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["IconButton"], {
    onClick: /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      var res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return actionsSelectCard.openClick();

            case 2:
              res = _context2.sent;

              if (res) {
                actionsSCM.setForm(['paymentMethodCardId', res]);
              }

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_16___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 11
    }
  })))), __jsx(_cart_components_SelectAddress__WEBPACK_IMPORTED_MODULE_19__["SelectAddress"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 5
    }
  }), __jsx(_cart_components_SelectCard__WEBPACK_IMPORTED_MODULE_20__["SelectCard"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 5
    }
  }), __jsx(_cart_orderPage__WEBPACK_IMPORTED_MODULE_17__["ShopTotal"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 5
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_13__["ls"])('购物车总计')), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 7
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_7__["dealMoney"])(productTotal))), transportationCosts > 0 && __jsx(_cart_orderPage__WEBPACK_IMPORTED_MODULE_17__["ShopTotal"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 33
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_13__["ls"])('运费')), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 7
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_7__["dealMoney"])(transportationCosts))), __jsx(_cart_orderPage__WEBPACK_IMPORTED_MODULE_17__["ShopTotal"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 5
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_13__["ls"])('份数折扣')), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 7
    }
  }, stateGroupProduct.numDiscount)), __jsx(_cart_orderPage__WEBPACK_IMPORTED_MODULE_17__["ShopTotal"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 5
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_13__["ls"])('成团折上折')), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 7
    }
  }, stateGroupProduct.groupDiscount)), __jsx(_cart_orderPage__WEBPACK_IMPORTED_MODULE_17__["ShopTotal"], {
    style: {
      fontSize: '18px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 5
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_13__["ls"])('订单总额')), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 7
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_7__["dealMoney"])(actuallyPaid))), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_14__["Space"], {
    h: 60,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 5
    }
  }), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 5
    }
  }, __jsx(_components_ButtonLoad_ButtonLoad__WEBPACK_IMPORTED_MODULE_21__["ButtonLoad"], {
    variant: 'contained',
    color: 'secondary',
    onClick: /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
      var _stateSCM$user$userIn, _res$saveGroupOrder;

      var res, _res$saveOrder, _query;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return actionsGroupProduct.submit({
                orderInfoItemInput: _objectSpread(_objectSpread({}, stateSCM.form), {}, {
                  generateCoin: generateCoin,
                  actuallyPaid: actuallyPaid,
                  transportationCosts: transportationCosts,
                  subtotal: productTotal,
                  currentUserLevel: (_stateSCM$user$userIn = stateSCM.user.userInfo) === null || _stateSCM$user$userIn === void 0 ? void 0 : _stateSCM$user$userIn.userLevel,
                  rOrderProduct: [{
                    count: stateGroupProduct.selectNum,
                    productId: product === null || product === void 0 ? void 0 : product.id,
                    product: product
                  }]
                })
              });

            case 2:
              res = _context3.sent;

              if (!(res === null || res === void 0 ? void 0 : (_res$saveGroupOrder = res.saveGroupOrder) === null || _res$saveGroupOrder === void 0 ? void 0 : _res$saveGroupOrder.id)) {
                _context3.next = 10;
                break;
              }

              Object(_components_Message_Message__WEBPACK_IMPORTED_MODULE_23__["showMessage"])('操作成功 将前往付款'); // await router.replace('/cart/result')

              _query = Object(_tools_utils__WEBPACK_IMPORTED_MODULE_7__["dealUrlQuery"])({
                orderId: res === null || res === void 0 ? void 0 : (_res$saveOrder = res.saveOrder) === null || _res$saveOrder === void 0 ? void 0 : _res$saveOrder.id
              });
              _context3.next = 8;
              return router.replace("/pay".concat(_query), "/pay".concat(_query));

            case 8:
              actionsSCM.clearData();
              actionsSCM.getList();

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_13__["ls"])('提交订单')))) || null;
};

_s(GroupOrderPage, "vKpobKV97t+5QBfkdvESsKUvrO4=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_24__["useRouter"], _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_6__["useStoreModel"], _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_6__["useStoreModel"], _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_6__["useStoreModel"], _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_6__["useStoreModel"], _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_6__["useStoreModel"]];
});

_c2 = GroupOrderPage;

var _c, _c2;

$RefreshReg$(_c, "OrderPageBox");
$RefreshReg$(_c2, "GroupOrderPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy92aWV3L2dyb3VwUHJvZHVjdC8udHN4Iiwid2VicGFjazovLy8uL3V0aWxzL3ZpZXcvZ3JvdXBQcm9kdWN0L2dyb3VwT3JkZXJQYWdlLnRzeCJdLCJuYW1lcyI6WyJncm91cFByb2R1Y3RNb2RlbCIsIm1vZGVsRmFjdG9yeSIsInByb2R1Y3QiLCJncm91cFF1ZXVlTGlzdCIsInNlbGVjdE51bSIsInNlbGVjdFF1ZXVlSWQiLCJudW1EaXNjb3VudCIsImdyb3VwRGlzY291bnQiLCJnZXREYXRhIiwidmFsdWUiLCJvcHRpb24iLCJxdWVyeSIsImRvYyIsInByb2R1Y3RMaXN0QnlJZHMiLCJpZHMiLCJyZXMiLCJncm91cFF1ZXVlSXRlbUlucHV0IiwiaWQiLCJzZXREYXRhIiwiZnBNZXJnZVByZSIsImxpc3QiLCJzb3J0IiwiYSIsImIiLCJzdW1GaWxsQW1vdW50IiwidXBkYXRlU2VsZWN0TnVtIiwiZGF0YSIsInJldmVyc2UiLCJmaW5kIiwidiIsImdyb3VwUHJlY2lzaW9uIiwic3VibWl0Iiwib3JkZXJJbmZvSXRlbUlucHV0IiwibXV0YXRlIiwic2F2ZUdyb3VwT3JkZXIiLCJncm91cE9yZGVySXRlbUlucHV0Iiwib3JkZXJHcm91cEFtb3VudCIsIlByaWNlUmVkIiwic3R5bGVkIiwiZGl2IiwibXBTdHlsZSIsInJlZCIsIk5hbWUiLCJncmV5IiwiWWVsbG93U3RhciIsImNvbG9yIiwiVGl0bGUiLCJoZWFkZXIiLCJHcm91cFF1ZXVlQm94IiwiU21hcnRNYXRjaCIsIlByaWNlIiwiU3VibWl0Iiwic2hhZG93IiwiR3JvdXBRdWV1ZUxpc3RCb3giLCJwcm9wIiwic2VsZWN0IiwiR3JvdXBQcm9kdWN0Iiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RvcmVNb2RlbCIsImFjdGlvbnNHcm91cFByb2R1Y3QiLCJhY3Rpb25zIiwic3RhdGVHcm91cFByb2R1Y3QiLCJzdGF0ZSIsInVzZUVmZmVjdCIsImdyb3VwT3JkZXJQYWdlTW9kZWwiLCJhY3Rpb25zR3JvdXBPcmRlclBhZ2VNb2RlbCIsImNvbnNvbGUiLCJsb2ciLCJpbWciLCJtYXAiLCJpbWdVcmwiLCJ1cmwiLCJscyIsImRlYWxNb25leSIsInByaWNlT3V0IiwicGFja2luZ1VuaXRTdHJpbmciLCJmaWx0ZXIiLCJsZW5ndGgiLCJuYW1lIiwiZ3JvdXBSZW1hcmsiLCJncm91cEFtb3VudCIsImdyb3VwQW1vdW50VW5pdFN0cmluZyIsIkFycmF5IiwiaSIsImdyb3VwUXVldWUiLCJoZWlnaHQiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwiZm9udFNpemUiLCJvcGVuIiwic2hvdyIsIk9yZGVyUGFnZUJveCIsIkdyb3VwT3JkZXJQYWdlIiwic3RhdGVPcmRlclBhZ2VNb2RlbCIsInNob3BDYXJ0TW9kZWwiLCJzdGF0ZVNDTSIsImFjdGlvbnNTQ00iLCJ1c2VyIiwiZ2V0T3JkZXJJbmZvIiwic2VsZWN0QWRkcmVzc01vZGVsIiwiYWN0aW9uc1NBTSIsInNlbGVjdENhcmRNb2RlbCIsImFjdGlvbnNTZWxlY3RDYXJkIiwiYWRkcmVzc0RhdGEiLCJkZWFsQWRkcmVzc0RhdGEiLCJjYXJkRGF0YSIsInBheUNhcmRMaXN0IiwiZm9ybSIsInBheW1lbnRNZXRob2RDYXJkSWQiLCJwcm9kdWN0VG90YWwiLCJ0cmFuc3BvcnRhdGlvbkNvc3RzIiwicGlja1VwVHlwZSIsIlBpY2tVcFR5cGVFbnVtIiwiRGVsaXZlcnkiLCJmcmVpZ2h0Q29uZmlnIiwicmVkdWNlIiwicHJlIiwiY3VyIiwicGFyc2VGbG9hdCIsImZyZWlnaHRQYXkiLCJvcmRlck1heCIsImFjdHVhbGx5UGFpZCIsImRlYWxNYXliZU51bWJlciIsInNhbGVUYXgiLCJnZW5lcmF0ZUNvaW4iLCJkZWFsSW1nVXJsIiwid2VpZ2h0IiwidW5pdCIsInJlbWFyayIsIm1hcmdpbiIsIndpZHRoIiwiZXZlbnQiLCJzZXRGb3JtIiwidGFyZ2V0IiwiaW5pdEFkZHJlc3NJZCIsImZwTWVyZ2UiLCJTZWxmIiwiZ2V0UGlja1VwVHlwZU5hbWUiLCJjb21iaW5lQWRkcmVzcyIsImNvbnRhY3RJbmZvcm1hdGlvbiIsIm9wZW5DbGljayIsIm51bWJlciIsInN1YnRvdGFsIiwiY3VycmVudFVzZXJMZXZlbCIsInVzZXJJbmZvIiwidXNlckxldmVsIiwick9yZGVyUHJvZHVjdCIsImNvdW50IiwicHJvZHVjdElkIiwic2hvd01lc3NhZ2UiLCJfcXVlcnkiLCJkZWFsVXJsUXVlcnkiLCJvcmRlcklkIiwic2F2ZU9yZGVyIiwicmVwbGFjZSIsImNsZWFyRGF0YSIsImdldExpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHTyxJQUFNQSxpQkFBaUIsR0FBR0MsMkVBQVksQ0FBQyxtQkFBRCxFQUFzQjtBQUNqRUMsU0FBTyxFQUFFLEVBRHdEO0FBRWpFQyxnQkFBYyxFQUFFLEVBRmlEO0FBR2pFQyxXQUFTLEVBQUUsQ0FIc0Q7QUFJakVDLGVBQWEsRUFBRSxFQUprRDtBQUtqRUMsYUFBVyxFQUFFLENBTG9EO0FBTWpFQyxlQUFhLEVBQUU7QUFOa0QsQ0FBdEIsRUFPMUM7QUFDREMsU0FBTztBQUFBLG9NQUFFLGlCQUFPQyxLQUFQLEVBQXNCQyxNQUF0QjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNXQSxNQUFNLENBQUNDLEtBQVAsQ0FBYUMscURBQUcsQ0FBQ0MsZ0JBQWpCLEVBQW1DO0FBQ25EQyxtQkFBRyxFQUFFLENBQUNMLEtBQUQ7QUFEOEMsZUFBbkMsQ0FEWDs7QUFBQTtBQUNETSxpQkFEQztBQUFBO0FBQUEscUJBSXNCTCxNQUFNLENBQUNDLEtBQVAsQ0FBYUMscURBQUcsQ0FBQ1QsY0FBakIsRUFBaUM7QUFDNURhLG1DQUFtQixFQUFFO0FBQ25CZCx5QkFBTyxFQUFFO0FB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LENBckdpQyxDQUE1QixJQW9JWSxJQXBJbkI7QUFxSUQsQ0FoS007O0dBQU1vQixjO1VBQ0luQyxzRCxFQUNzQkMsbUUsRUFDNEJBLG1FLEVBRWxCQSxtRSxFQU1qQkEsbUUsRUFDT0EsbUU7OztNQVoxQmtDLGMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGdyb3VwUHJvZHVjdFxcW2lkXS5qcy5mZTAyMGVkYjE2MWU3ODYxNjljZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFN0YXJSb3VuZGVkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU3RhclJvdW5kZWQnXHJcbmltcG9ydCBTdGFyQm9yZGVyUm91bmRlZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1N0YXJCb3JkZXJSb3VuZGVkJ1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7bW9kZWxGYWN0b3J5fSBmcm9tICcuLi8uLi9Nb2RlbEFjdGlvbi9tb2RlbFV0aWwnXHJcbmltcG9ydCB7XHJcbiAgR3JvdXBPcmRlckl0ZW1JbnB1dCxcclxuICBHcm91cFF1ZXVlLFxyXG4gIEdyb3VwUXVldWVJdGVtSW5wdXQsXHJcbiAgT3JkZXJJbmZvSXRlbUlucHV0LFxyXG4gIFByb2R1Y3RcclxufSBmcm9tICcuLi8uLi9ncmFwaHFsVHlwZXMvdHlwZXMnXHJcbmltcG9ydCB7ZG9jfSBmcm9tICcuLi8uLi9ncmFwaHFsVHlwZXMvZG9jJ1xyXG5pbXBvcnQge3VzZVN0b3JlTW9kZWx9IGZyb20gJy4uLy4uL01vZGVsQWN0aW9uL3VzZVN0b3JlJ1xyXG5pbXBvcnQge2RlYWxNb25leSwgZGVhbFVybFF1ZXJ5LCBmcE1lcmdlUHJlfSBmcm9tICcuLi8uLi90b29scy91dGlscydcclxuaW1wb3J0IEN1c0Nhcm91c2VsIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU3dpcGUvU3dpcGUnXHJcbmltcG9ydCB7SGVhZGVyVGl0bGV9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSGVhZGVyVGl0bGUvSGVhZGVyVGl0bGUnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7bHN9IGZyb20gJy4uLy4uL3Rvb2xzL2RlYWxLZXknXHJcbmltcG9ydCB7bXBTdHlsZX0gZnJvbSAnLi4vLi4vc3R5bGUvY29tbW9uJ1xyXG5pbXBvcnQge2dyZXl9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycydcclxuaW1wb3J0IHtCdXR0b259IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQge0dyb3VwT3JkZXJQYWdlLCBncm91cE9yZGVyUGFnZU1vZGVsfSBmcm9tICcuL2dyb3VwT3JkZXJQYWdlJ1xyXG5pbXBvcnQge3Nob3dNZXNzYWdlfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL01lc3NhZ2UvTWVzc2FnZSdcclxuXHJcbmV4cG9ydCBjb25zdCBncm91cFByb2R1Y3RNb2RlbCA9IG1vZGVsRmFjdG9yeSgnZ3JvdXBQcm9kdWN0TW9kZWwnLCB7XHJcbiAgcHJvZHVjdDoge30gYXMgUHJvZHVjdCxcclxuICBncm91cFF1ZXVlTGlzdDogW10gYXMgR3JvdXBRdWV1ZVtdLFxyXG4gIHNlbGVjdE51bTogMCxcclxuICBzZWxlY3RRdWV1ZUlkOiAnJyxcclxuICBudW1EaXNjb3VudDogMSxcclxuICBncm91cERpc2NvdW50OiAxLFxyXG59LCB7XHJcbiAgZ2V0RGF0YTogYXN5bmMgKHZhbHVlOiBzdHJpbmcsIG9wdGlvbikgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgb3B0aW9uLnF1ZXJ5KGRvYy5wcm9kdWN0TGlzdEJ5SWRzLCB7XHJcbiAgICAgIGlkczogW3ZhbHVlXSxcclxuICAgIH0pXHJcbiAgICBjb25zdCBncm91cFF1ZXVlTGlzdCA9IGF3YWl0IG9wdGlvbi5xdWVyeShkb2MuZ3JvdXBRdWV1ZUxpc3QsIHtcclxuICAgICAgZ3JvdXBRdWV1ZUl0ZW1JbnB1dDoge1xyXG4gICAgICAgIHByb2R1Y3Q6IHtcclxuICAgICAgICAgIGlkOiB2YWx1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9IGFzIEdyb3VwUXVldWVJdGVtSW5wdXQsXHJcbiAgICB9KVxyXG4gICAgb3B0aW9uLnNldERhdGEoZnBNZXJnZVByZSh7XHJcbiAgICAgIHByb2R1Y3Q6IHJlcz8ucHJvZHVjdExpc3RCeUlkcz8ubGlzdFswXSA/PyB7fSxcclxuICAgICAgZ3JvdXBRdWV1ZUxpc3Q6IGdyb3VwUXVldWVMaXN0Py5ncm91cFF1ZXVlTGlzdD8uc29ydCgoYTogR3JvdXBRdWV1ZSwgYjogR3JvdXBRdWV1ZSkgPT4gKGEuc3VtRmlsbEFtb3VudCA/PyAwKSAtIChiLnN1bUZpbGxBbW91bnQgPz8gMCkpID8/IFtdLFxyXG4gICAgfSkpXHJcbiAgfSxcclxuICB1cGRhdGVTZWxlY3ROdW06ICh2YWx1ZTogbnVtYmVyLCBvcHRpb24pID0+IHtcclxuICAgIG9wdGlvbi5zZXREYXRhKGZwTWVyZ2VQcmUodmFsdWUgPT09IG9wdGlvbi5kYXRhLnNlbGVjdE51bSA/IHtcclxuICAgICAgc2VsZWN0TnVtOiAwLFxyXG4gICAgICBzZWxlY3RRdWV1ZUlkOiAnJyxcclxuICAgIH0gOiB7XHJcbiAgICAgIHNlbGVjdE51bTogdmFsdWUsXHJcbiAgICAgIHNlbGVjdFF1ZXVlSWQ6IFsuLi5vcHRpb24uZGF0YS5ncm91cFF1ZXVlTGlzdF0ucmV2ZXJzZSgpPy5maW5kKHYgPT4gKHYuc3VtRmlsbEFtb3VudCA/PyAwKSArIHZhbHVlIDw9IChvcHRpb24uZGF0YT8ucHJvZHVjdD8uZ3JvdXBQcmVjaXNpb24gPz8gMCkpPy5pZCA/PyAnJyxcclxuICAgIH0pKVxyXG4gIH0sXHJcbiAgc3VibWl0OiBhc3luYyAoe29yZGVySW5mb0l0ZW1JbnB1dH06IHsgb3JkZXJJbmZvSXRlbUlucHV0OiBPcmRlckluZm9JdGVtSW5wdXQgfSwgb3B0aW9uKSA9PiB7XHJcbiAgICByZXR1cm4gYXdhaXQgb3B0aW9uLm11dGF0ZShkb2Muc2F2ZUdyb3VwT3JkZXIsIHtcclxuICAgICAgb3JkZXJJbmZvSXRlbUlucHV0OiB7XHJcbiAgICAgICAgICAuLi5vcmRlckluZm9JdGVtSW5wdXQsXHJcbiAgICAgIH0gYXMgT3JkZXJJbmZvSXRlbUlucHV0LFxyXG4gICAgICBncm91cE9yZGVySXRlbUlucHV0OiB7XHJcbiAgICAgICAgb3JkZXJHcm91cEFtb3VudDogb3B0aW9uLmRhdGEuc2VsZWN0TnVtLFxyXG4gICAgICB9IGFzIEdyb3VwT3JkZXJJdGVtSW5wdXQsXHJcbiAgICAgIGdyb3VwUXVldWVJdGVtSW5wdXQ6IHtcclxuICAgICAgICBwcm9kdWN0OiBvcHRpb24uZGF0YS5wcm9kdWN0LFxyXG4gICAgICAgIC4uLihvcHRpb24uZGF0YS5zZWxlY3RRdWV1ZUlkID8ge2lkOiBvcHRpb24uZGF0YS5zZWxlY3RRdWV1ZUlkfSA6IHt9KSxcclxuICAgICAgfSBhcyBHcm91cFF1ZXVlSXRlbUlucHV0LFxyXG4gICAgfSlcclxuICB9LFxyXG59KVxyXG5cclxuY29uc3QgUHJpY2VSZWQgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQ6ICR7bXBTdHlsZS5yZWR9O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEyMHB4O1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDMwcHgpO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgPiBtYWluIHtcclxuICAgIGdyaWQtYXJlYTogMS8xLzMvMjtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgID4gc3BhbiB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5jb25zdCBOYW1lID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAxNnB4IDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgPiBtYWluIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgfVxyXG4gID4gc2VjdGlvbiB7XHJcbiAgICA+IHNwYW4ge1xyXG4gICAgICBwYWRkaW5nOiAwIDRweDtcclxuICAgICAgYmFja2dyb3VuZDogJHtncmV5Wyc3MDAnXX07XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBib3R0b206IC00cHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgWWVsbG93U3RhciA9ICgpID0+IDxTdGFyUm91bmRlZEljb24gZm9udFNpemU9eydzbWFsbCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y29sb3I6ICcjRkREMzM0J319Lz5cclxuXHJcbmNvbnN0IFRpdGxlID0gc3R5bGVkLmhlYWRlcmBcclxuICBmb250LXNpemU6IDIwcHg7XHJcbmBcclxuY29uc3QgR3JvdXBRdWV1ZUJveCA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogMTZweDtcclxuYFxyXG5cclxuY29uc3QgU21hcnRNYXRjaCA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogMTZweCAxNnB4IDkwcHg7XHJcbiAgPiBzZWN0aW9uIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICA+IG1haW4ge1xyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgUHJpY2UgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gID4gbWFpbiB7XHJcbiAgICAvL2ZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICA+IG1haW4sIHNlY3Rpb24ge1xyXG4gICAgPiAqIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgU3VibWl0ID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICR7bXBTdHlsZS5yZWR9O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYm94LXNoYWRvdzogJHttcFN0eWxlLnNoYWRvd1snMSddfTtcclxuICA+IGFzaWRlIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAgIGNvbG9yOiAke21wU3R5bGUucmVkfTtcclxuICB9XHJcbmBcclxuY29uc3QgR3JvdXBRdWV1ZUxpc3RCb3ggPSBzdHlsZWQuZGl2PHtzZWxlY3Q6IGJvb2xlYW59PmBcclxuICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBiYWNrZ3JvdW5kOiAke3Byb3AgPT4gcHJvcC5zZWxlY3RcclxuICAgID8gYGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHttcFN0eWxlLnJlZH0sICNGQzczNjEpYCBcclxuICAgIDogZ3JleVsnMjAwJ119O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMCA4cHg7XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBHcm91cFByb2R1Y3QgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBpZCA9IChyb3V0ZXIucXVlcnk/LmlkIGFzIHN0cmluZykgPz8gJydcclxuICBjb25zdCB7YWN0aW9uczogYWN0aW9uc0dyb3VwUHJvZHVjdCwgc3RhdGU6IHN0YXRlR3JvdXBQcm9kdWN0fSA9IHVzZVN0b3JlTW9kZWwoZ3JvdXBQcm9kdWN0TW9kZWwpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFjdGlvbnNHcm91cFByb2R1Y3QuZ2V0RGF0YShpZClcclxuICB9LCBbaWRdKVxyXG4gIGNvbnN0IHthY3Rpb25zOiBhY3Rpb25zR3JvdXBPcmRlclBhZ2VNb2RlbH0gPSB1c2VTdG9yZU1vZGVsKGdyb3VwT3JkZXJQYWdlTW9kZWwpXHJcblxyXG4gIGNvbnN0IHByb2R1Y3QgPSBzdGF0ZUdyb3VwUHJvZHVjdC5wcm9kdWN0XHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIGFjdGlvbnNHcm91cFByb2R1Y3QudXBkYXRlU2VsZWN0TnVtKDIpXHJcbiAgLy8gICBhY3Rpb25zR3JvdXBPcmRlclBhZ2VNb2RlbC5vcGVuKClcclxuICAvLyB9LCBbXSlcclxuXHJcbiAgY29uc29sZS5sb2coc3RhdGVHcm91cFByb2R1Y3QuZ3JvdXBRdWV1ZUxpc3QpXHJcbiAgcmV0dXJuIDxkaXY+XHJcbiAgICA8SGVhZGVyVGl0bGVcclxuICAgICAgICB0aXRsZT17J+S6p+WTgeivpuaDhSd9XHJcbiAgICAvPlxyXG4gICAgPEN1c0Nhcm91c2VsXHJcbiAgICAgICAgaGVpZ2h0PXsnMjQwcHgnfVxyXG4gICAgICAgIGRhdGFMaXN0PXtwcm9kdWN0Py5pbWc/Lm1hcCh2ID0+ICh7XHJcbiAgICAgICAgICAuLi52LFxyXG4gICAgICAgICAgaW1nVXJsOiB2Py51cmwsXHJcbiAgICAgICAgfSkpIGFzIFtdfVxyXG4gICAgLz5cclxuICAgIDxQcmljZVJlZD5cclxuICAgICAgPG1haW4+XHJcbiAgICAgICAge2xzKCfln7rlh4bku7fmoLwnKX1cclxuICAgICAgICA8c3Bhbj57ZGVhbE1vbmV5KHByb2R1Y3QucHJpY2VPdXQpfS97cHJvZHVjdC5wYWNraW5nVW5pdFN0cmluZ308L3NwYW4+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgICAgPGFzaWRlPntscygn5bey5oiQ5ZuiJyl9e3N0YXRlR3JvdXBQcm9kdWN0Lmdyb3VwUXVldWVMaXN0LmZpbHRlcih2ID0+IHYuc3VtRmlsbEFtb3VudCA9PT0gcHJvZHVjdD8uZ3JvdXBQcmVjaXNpb24pLmxlbmd0aH17bHMoJ+WNlScpfTwvYXNpZGU+XHJcbiAgICAgIDxhc2lkZT57bHMoJ+aLvOWbouS4rScpfXtzdGF0ZUdyb3VwUHJvZHVjdC5ncm91cFF1ZXVlTGlzdC5maWx0ZXIodiA9PiAodi5zdW1GaWxsQW1vdW50ID8/IDApIDwgKHByb2R1Y3Q/Lmdyb3VwUHJlY2lzaW9uID8/IDApKS5sZW5ndGh9e2xzKCfljZUnKX08L2FzaWRlPlxyXG4gICAgPC9QcmljZVJlZD5cclxuICAgIDxOYW1lPlxyXG4gICAgICA8bWFpbj57cHJvZHVjdC5uYW1lfTwvbWFpbj5cclxuICAgICAgPHNlY3Rpb24+e3Byb2R1Y3QuZ3JvdXBSZW1hcmt9L3twcm9kdWN0Lmdyb3VwQW1vdW50fXtwcm9kdWN0Lmdyb3VwQW1vdW50VW5pdFN0cmluZ308YnIvPntscygn5YiG5Zui57K+5bqmJyl9XHJcbiAgICAgICAgPHNwYW4+e1suLi5BcnJheShwcm9kdWN0Lmdyb3VwUHJlY2lzaW9uKV0ubWFwKCh2LCBpKSA9PiBpKS5tYXAodmFsdWUgPT5cclxuICAgICAgICAgICAgPFllbGxvd1N0YXIga2V5PXt2YWx1ZX0vPil9PC9zcGFuPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L05hbWU+XHJcbiAgICA8R3JvdXBRdWV1ZUJveD5cclxuICAgICAgPFRpdGxlPntscygn5ou85Zui5LitJyl9PC9UaXRsZT5cclxuICAgICAge3N0YXRlR3JvdXBQcm9kdWN0Lmdyb3VwUXVldWVMaXN0Lm1hcChncm91cFF1ZXVlID0+IHtcclxuICAgICAgICBjb25zdCBzZWxlY3QgPSBncm91cFF1ZXVlLmlkID09PSBzdGF0ZUdyb3VwUHJvZHVjdC5zZWxlY3RRdWV1ZUlkXHJcbiAgICAgICAgcmV0dXJuIDxHcm91cFF1ZXVlTGlzdEJveFxyXG4gICAgICAgICAgICBzZWxlY3Q9e3NlbGVjdH1cclxuICAgICAgICAgICAga2V5PXtgR3JvdXBRdWV1ZUxpc3RCb3gke2dyb3VwUXVldWUuaWR9YH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8YXNpZGU+XHJcbiAgICAgICAgICAgIHtbLi4uQXJyYXkocHJvZHVjdC5ncm91cFByZWNpc2lvbildLm1hcCgodiwgaSkgPT4gaSkubWFwKHZhbHVlID0+IHZhbHVlICsgMSA+ICgoZ3JvdXBRdWV1ZS5zdW1GaWxsQW1vdW50ID8/IDApICsgKHNlbGVjdCA/IHN0YXRlR3JvdXBQcm9kdWN0LnNlbGVjdE51bSA6IDApKSA/XHJcbiAgICAgICAgICAgICAgICA8U3RhckJvcmRlclJvdW5kZWRJY29uXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtgY2xpY2tTdGFyJHt2YWx1ZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPXsnbGFyZ2UnfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFjdGlvbnNHcm91cFByb2R1Y3QudXBkYXRlU2VsZWN0TnVtKHZhbHVlICsgMSl9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tjb2xvcjogc2VsZWN0ID8gJyNmZmYnIDogJyMwMDAnfX1cclxuICAgICAgICAgICAgICAgIC8+IDogPFN0YXJSb3VuZGVkSWNvblxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17YGNsaWNrU3RhciR7dmFsdWV9YH1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2NvbG9yOiAnI0ZERDMzNCd9fVxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPXsnbGFyZ2UnfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFjdGlvbnNHcm91cFByb2R1Y3QudXBkYXRlU2VsZWN0TnVtKHZhbHVlICsgMSl9XHJcbiAgICAgICAgICAgICAgICAvPil9XHJcbiAgICAgICAgICA8L2FzaWRlPlxyXG4gICAgICAgICAgPGZvb3Rlcj57bHMoKGdyb3VwUXVldWUuc3VtRmlsbEFtb3VudCA/PyAwKSArIChzZWxlY3QgPyBzdGF0ZUdyb3VwUHJvZHVjdC5zZWxlY3ROdW0gOiAwKSA9PT0gcHJvZHVjdC5ncm91cFByZWNpc2lvbiA/ICfmiJDlm6LllaYnIDogJ+acquaIkOWboicpfTwvZm9vdGVyPlxyXG4gICAgICAgIDwvR3JvdXBRdWV1ZUxpc3RCb3g+XHJcbiAgICAgIH0pfVxyXG4gICAgPC9Hcm91cFF1ZXVlQm94PlxyXG4gICAgPFNtYXJ0TWF0Y2g+XHJcbiAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgPFRpdGxlPntscygn5pm66IO95Yy56YWNJyl9PC9UaXRsZT5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgIHtscygn6K+354K55Ye7Jyl9XHJcbiAgICAgICAgPFN0YXJCb3JkZXJSb3VuZGVkSWNvbi8+XHJcbiAgICAgICAge2xzKCfnoa7lrprmgqjpnIDopoHnmoTku73mlbAnKX1cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICB7Wy4uLkFycmF5KHByb2R1Y3QuZ3JvdXBQcmVjaXNpb24pXS5tYXAoKHYsIGkpID0+IGkpLm1hcCh2YWx1ZSA9PiB2YWx1ZSArIDEgPiBzdGF0ZUdyb3VwUHJvZHVjdC5zZWxlY3ROdW0gP1xyXG4gICAgICAgICAgICA8U3RhckJvcmRlclJvdW5kZWRJY29uXHJcbiAgICAgICAgICAgICAgICBrZXk9e2BjbGlja1N0YXIke3ZhbHVlfWB9XHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZT17J2xhcmdlJ31cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFjdGlvbnNHcm91cFByb2R1Y3QudXBkYXRlU2VsZWN0TnVtKHZhbHVlICsgMSl9XHJcbiAgICAgICAgICAgIC8+IDogPFN0YXJSb3VuZGVkSWNvblxyXG4gICAgICAgICAgICAgICAga2V5PXtgY2xpY2tTdGFyJHt2YWx1ZX1gfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tjb2xvcjogJyNGREQzMzQnfX1cclxuICAgICAgICAgICAgICAgIGZvbnRTaXplPXsnbGFyZ2UnfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYWN0aW9uc0dyb3VwUHJvZHVjdC51cGRhdGVTZWxlY3ROdW0odmFsdWUgKyAxKX1cclxuICAgICAgICAgICAgLz4pfVxyXG4gICAgICA8L21haW4+XHJcbiAgICAgIDxQcmljZT5cclxuICAgICAgICA8bWFpbj5cclxuICAgICAgICAgIDxoZWFkZXI+e2RlYWxNb25leSgocHJvZHVjdC5wcmljZU91dCA/PyAwKSAqIHN0YXRlR3JvdXBQcm9kdWN0LnNlbGVjdE51bSAqIHN0YXRlR3JvdXBQcm9kdWN0Lm51bURpc2NvdW50ICogc3RhdGVHcm91cFByb2R1Y3QuZ3JvdXBEaXNjb3VudCl9PC9oZWFkZXI+XHJcbiAgICAgICAgICA8Zm9vdGVyPntscygn5oqY5ZCO5Lu35qC8Jyl9PC9mb290ZXI+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgICAgIDxkaXY+PTwvZGl2PlxyXG4gICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgPGhlYWRlcj57ZGVhbE1vbmV5KChwcm9kdWN0LnByaWNlT3V0ID8/IDApICogc3RhdGVHcm91cFByb2R1Y3Quc2VsZWN0TnVtKX08L2hlYWRlcj5cclxuICAgICAgICAgIDxmb290ZXI+e2xzKCfln7rlh4bku7fmoLwnKX08L2Zvb3Rlcj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPGRpdj54PC9kaXY+XHJcbiAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICA8aGVhZGVyPntzdGF0ZUdyb3VwUHJvZHVjdC5udW1EaXNjb3VudH08L2hlYWRlcj5cclxuICAgICAgICAgIDxmb290ZXI+e2xzKCfku73mlbDmipjmiaMnKX08L2Zvb3Rlcj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPGRpdj54PC9kaXY+XHJcbiAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICA8aGVhZGVyPntzdGF0ZUdyb3VwUHJvZHVjdC5ncm91cERpc2NvdW50fTwvaGVhZGVyPlxyXG4gICAgICAgICAgPGZvb3Rlcj57bHMoJ+aIkOWbouaKmOS4iuaKmCcpfTwvZm9vdGVyPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPC9QcmljZT5cclxuICAgIDwvU21hcnRNYXRjaD5cclxuICAgIDxTdWJtaXQ+XHJcbiAgICAgIDxhc2lkZT57bHMoJ+mAieaLqeS6hicpfXtzdGF0ZUdyb3VwUHJvZHVjdC5zZWxlY3ROdW19e2xzKCfku70nKX08L2FzaWRlPlxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBkaXNhYmxlZD17c3RhdGVHcm91cFByb2R1Y3Quc2VsZWN0TnVtID09PSAwfVxyXG4gICAgICAgICAgc3R5bGU9e3toZWlnaHQ6ICcxMDAlJywgcGFkZGluZzogJzAgMzJweCcsIGJvcmRlclJhZGl1czogJzAnLCBmb250U2l6ZTogJzE4cHgnfX1cclxuICAgICAgICAgIGNvbG9yPXsnc2Vjb25kYXJ5J31cclxuICAgICAgICAgIHZhcmlhbnQ9eydjb250YWluZWQnfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBhY3Rpb25zR3JvdXBPcmRlclBhZ2VNb2RlbC5vcGVuKClcclxuICAgICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7bHMoJ+WOu+e7k+eulycpfVxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgIDwvU3VibWl0PlxyXG4gICAgPEdyb3VwT3JkZXJQYWdlLz5cclxuICA8L2Rpdj5cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge21vZGVsRmFjdG9yeX0gZnJvbSAnLi4vLi4vTW9kZWxBY3Rpb24vbW9kZWxVdGlsJ1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQge3VzZVN0b3JlTW9kZWx9IGZyb20gJy4uLy4uL01vZGVsQWN0aW9uL3VzZVN0b3JlJ1xyXG5pbXBvcnQge2RlYWxNYXliZU51bWJlciwgZGVhbE1vbmV5LCBkZWFsVXJsUXVlcnksIGZwTWVyZ2UsIGZwTWVyZ2VQcmV9IGZyb20gJy4uLy4uL3Rvb2xzL3V0aWxzJ1xyXG5pbXBvcnQge2dyb3VwUHJvZHVjdE1vZGVsfSBmcm9tICcuL1tpZF0nXHJcbmltcG9ydCB7U2hvcENhcnRQcm9kdWN0Qm94fSBmcm9tIFwiLi4vY2FydC9DYXJ0UHJvZHVjdFwiO1xyXG5pbXBvcnQge2RlYWxJbWdVcmx9IGZyb20gXCIuLi8uLi90b29scy9pbWdcIjtcclxuaW1wb3J0IHtQcm9kdWN0UHJpY2V9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Byb2R1Y3RJdGVtL1Byb2R1Y3RJdGVtXCI7XHJcbmltcG9ydCB7SWNvbkJ1dHRvbiwgTWVudUl0ZW0sIFRleHRGaWVsZH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7bHN9IGZyb20gXCIuLi8uLi90b29scy9kZWFsS2V5XCI7XHJcbmltcG9ydCB7U3BhY2V9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0JveC9Cb3hcIjtcclxuaW1wb3J0IHtnZXRQaWNrVXBUeXBlTmFtZSwgUGlja1VwVHlwZUVudW19IGZyb20gXCIuLi8uLi9zc19jb21tb24vZW51bVwiO1xyXG5pbXBvcnQgQ2hldnJvblJpZ2h0SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0NoZXZyb25SaWdodFwiO1xyXG5pbXBvcnQge0FkZHJlc3NCb3gsIENhcmRCb3gsIFNob3BUaXRsZSwgU2hvcFRvdGFsfSBmcm9tIFwiLi4vY2FydC9vcmRlclBhZ2VcIjtcclxuaW1wb3J0IHtzaG9wQ2FydE1vZGVsfSBmcm9tIFwiLi4vY2FydFwiO1xyXG5pbXBvcnQge1NlbGVjdEFkZHJlc3MsIHNlbGVjdEFkZHJlc3NNb2RlbH0gZnJvbSBcIi4uL2NhcnQvY29tcG9uZW50cy9TZWxlY3RBZGRyZXNzXCI7XHJcbmltcG9ydCB7U2VsZWN0Q2FyZCwgc2VsZWN0Q2FyZE1vZGVsfSBmcm9tIFwiLi4vY2FydC9jb21wb25lbnRzL1NlbGVjdENhcmRcIjtcclxuaW1wb3J0IHtCdXR0b25Mb2FkfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9CdXR0b25Mb2FkL0J1dHRvbkxvYWRcIjtcclxuaW1wb3J0IHttcFN0eWxlfSBmcm9tIFwiLi4vLi4vc3R5bGUvY29tbW9uXCI7XHJcbmltcG9ydCB7c2hvd01lc3NhZ2V9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTWVzc2FnZS9NZXNzYWdlJ1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5leHBvcnQgY29uc3QgZ3JvdXBPcmRlclBhZ2VNb2RlbCA9IG1vZGVsRmFjdG9yeSgnb3JkZXJQYWdlTW9kZWwnLCB7XHJcbiAgc2hvdzogZmFsc2UsXHJcbn0sIHtcclxuICBvcGVuOiAodmFsdWUsIG9wdGlvbikgPT4ge1xyXG4gICAgb3B0aW9uLnNldERhdGEoZnBNZXJnZVByZSh7XHJcbiAgICAgIHNob3c6IHRydWUsXHJcbiAgICB9KSlcclxuICB9LFxyXG59KVxyXG5cclxuY29uc3QgT3JkZXJQYWdlQm94ID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gID4gZm9vdGVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2hhZG93OiAke21wU3R5bGUuc2hhZG93W1wiMVwiXX07XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBHcm91cE9yZGVyUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHtzdGF0ZTogc3RhdGVPcmRlclBhZ2VNb2RlbH0gPSB1c2VTdG9yZU1vZGVsKGdyb3VwT3JkZXJQYWdlTW9kZWwpXHJcbiAgY29uc3Qge2FjdGlvbnM6IGFjdGlvbnNHcm91cFByb2R1Y3QsIHN0YXRlOiBzdGF0ZUdyb3VwUHJvZHVjdH0gPSB1c2VTdG9yZU1vZGVsKGdyb3VwUHJvZHVjdE1vZGVsKVxyXG4gIGNvbnN0IHByb2R1Y3QgPSBzdGF0ZUdyb3VwUHJvZHVjdC5wcm9kdWN0XHJcbiAgY29uc3Qge3N0YXRlOiBzdGF0ZVNDTSwgYWN0aW9uczogYWN0aW9uc1NDTX0gPSB1c2VTdG9yZU1vZGVsKHNob3BDYXJ0TW9kZWwpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghc3RhdGVTQ00udXNlci5pZCkge1xyXG4gICAgICBhY3Rpb25zU0NNLmdldE9yZGVySW5mbygpXHJcbiAgICB9XHJcbiAgfSwgW10pXHJcbiAgY29uc3Qge2FjdGlvbnM6IGFjdGlvbnNTQU19ID0gdXNlU3RvcmVNb2RlbChzZWxlY3RBZGRyZXNzTW9kZWwpXHJcbiAgY29uc3Qge2FjdGlvbnM6IGFjdGlvbnNTZWxlY3RDYXJkfSA9IHVzZVN0b3JlTW9kZWwoc2VsZWN0Q2FyZE1vZGVsKVxyXG5cclxuICBjb25zdCBhZGRyZXNzRGF0YSA9IHN0YXRlU0NNLmRlYWxBZGRyZXNzRGF0YShzdGF0ZVNDTSlcclxuICBjb25zdCBjYXJkRGF0YSA9IHN0YXRlU0NNLnBheUNhcmRMaXN0Py5maW5kKHYgPT4gdi5pZCA9PT0gc3RhdGVTQ00uZm9ybS5wYXltZW50TWV0aG9kQ2FyZElkKSB8fCB7fVxyXG4gIGNvbnN0IHByb2R1Y3RUb3RhbCA9IChwcm9kdWN0LnByaWNlT3V0ID8/IDApICogc3RhdGVHcm91cFByb2R1Y3Quc2VsZWN0TnVtXHJcbiAgY29uc3QgdHJhbnNwb3J0YXRpb25Db3N0cyA9IChzdGF0ZVNDTS5mb3JtLnBpY2tVcFR5cGUgPT09IFBpY2tVcFR5cGVFbnVtLkRlbGl2ZXJ5ICYmIChzdGF0ZVNDTS5mcmVpZ2h0Q29uZmlnLnJlZHVjZSgocHJlLCBjdXIpID0+IHtcclxuICAgIGlmIChwcmUgPiBwYXJzZUZsb2F0KGN1cj8uZnJlaWdodFBheSkgJiYgcHJvZHVjdFRvdGFsIDwgcGFyc2VGbG9hdChjdXI/Lm9yZGVyTWF4KSkge1xyXG4gICAgICByZXR1cm4gcGFyc2VGbG9hdChjdXI/LmZyZWlnaHRQYXkpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gcHJlXHJcbiAgICB9XHJcbiAgfSwgcGFyc2VGbG9hdChzdGF0ZVNDTS5mcmVpZ2h0Q29uZmlnW3N0YXRlU0NNLmZyZWlnaHRDb25maWcubGVuZ3RoIC0gMV0/LmZyZWlnaHRQYXkpKSkpIHx8IDBcclxuICBjb25zdCBhY3R1YWxseVBhaWQgPSBwcm9kdWN0VG90YWwgKyB0cmFuc3BvcnRhdGlvbkNvc3RzICsgZGVhbE1heWJlTnVtYmVyKHN0YXRlU0NNLmZvcm0uc2FsZVRheClcclxuICBjb25zdCBnZW5lcmF0ZUNvaW4gPSBhY3R1YWxseVBhaWQgKiAwLjAxXHJcblxyXG4gIHJldHVybiBzdGF0ZU9yZGVyUGFnZU1vZGVsLnNob3cgJiYgPE9yZGVyUGFnZUJveFxyXG4gID5cclxuICAgIDxTaG9wQ2FydFByb2R1Y3RCb3ggc3R5bGU9e3twYWRkaW5nOiAnMjBweCd9fT5cclxuICAgICAgPGltZyBzcmM9e2RlYWxJbWdVcmwocHJvZHVjdD8uaW1nPy5bMF0/LnVybCl9XHJcbiAgICAgICAgICAgYWx0PVwiXCIvPlxyXG4gICAgICA8bWFpbj57cHJvZHVjdD8ubmFtZX17cHJvZHVjdD8ud2VpZ2h0fXtwcm9kdWN0Py51bml0fTwvbWFpbj5cclxuICAgICAgPHNlY3Rpb24+e3Byb2R1Y3Q/LnJlbWFya308L3NlY3Rpb24+XHJcbiAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgPFByb2R1Y3RQcmljZSBwcm9kdWN0PXtwcm9kdWN0fS8+XHJcbiAgICAgICAgPHNwYW4+e3N0YXRlR3JvdXBQcm9kdWN0LnNlbGVjdE51bX17bHMoJ+S7vScpfTwvc3Bhbj5cclxuICAgICAgPC9mb290ZXI+XHJcbiAgICA8L1Nob3BDYXJ0UHJvZHVjdEJveD5cclxuICAgIDxUZXh0RmllbGRcclxuICAgICAgICBzdHlsZT17e21hcmdpbjogJzE2cHgnLCB3aWR0aDogJ2NhbGMoMTAwdncgLSAzMnB4KSd9fVxyXG4gICAgICAgIGZ1bGxXaWR0aD17dHJ1ZX1cclxuICAgICAgICBsYWJlbD17bHMoJ+i/kOmAgeaWueW8jycpfVxyXG4gICAgICAgIHNlbGVjdD17dHJ1ZX1cclxuICAgICAgICB2YWx1ZT17c3RhdGVTQ00uZm9ybS5waWNrVXBUeXBlfVxyXG4gICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB7XHJcbiAgICAgICAgICBhY3Rpb25zU0NNLnNldEZvcm0oWydwaWNrVXBUeXBlJywgZXZlbnQudGFyZ2V0LnZhbHVlXSlcclxuICAgICAgICAgIGFjdGlvbnNTQ00uc2V0Rm9ybShbJ2FkZHJlc3NJZCcsIHN0YXRlU0NNLmluaXRBZGRyZXNzSWQoZnBNZXJnZShzdGF0ZVNDTSwge1xyXG4gICAgICAgICAgICBmb3JtOiB7XHJcbiAgICAgICAgICAgICAgcGlja1VwVHlwZTogZXZlbnQudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSkpXSlcclxuICAgICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8TWVudUl0ZW1cclxuICAgICAgICAgIHZhbHVlPXtQaWNrVXBUeXBlRW51bS5TZWxmfVxyXG4gICAgICA+e2xzKGdldFBpY2tVcFR5cGVOYW1lKFBpY2tVcFR5cGVFbnVtLlNlbGYpKX08L01lbnVJdGVtPlxyXG4gICAgICA8TWVudUl0ZW1cclxuICAgICAgICAgIHZhbHVlPXtQaWNrVXBUeXBlRW51bS5EZWxpdmVyeX1cclxuICAgICAgPntscyhnZXRQaWNrVXBUeXBlTmFtZShQaWNrVXBUeXBlRW51bS5EZWxpdmVyeSkpfTwvTWVudUl0ZW0+XHJcbiAgICA8L1RleHRGaWVsZD5cclxuICAgIDxBZGRyZXNzQm94PlxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAge2Ake2FkZHJlc3NEYXRhLmNvbWJpbmVBZGRyZXNzfWB9XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgPGZvb3Rlcj5cclxuICAgICAgICAgIHtgJHthZGRyZXNzRGF0YS5uYW1lfSAke2FkZHJlc3NEYXRhLmNvbnRhY3RJbmZvcm1hdGlvbn1gfVxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICA8L21haW4+XHJcbiAgICAgIDxhc2lkZT5cclxuICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXthc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYWN0aW9uc1NBTS5vcGVuQ2xpY2soKVxyXG4gICAgICAgICAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbnNTQ00uc2V0Rm9ybShbJ2FkZHJlc3NJZCcsIHJlc10pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxDaGV2cm9uUmlnaHRJY29uLz5cclxuICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgIDwvYXNpZGU+XHJcbiAgICA8L0FkZHJlc3NCb3g+XHJcbiAgICA8U2hvcFRpdGxlPlxyXG4gICAgICA8U3BhY2Ugdz17MjB9Lz5cclxuICAgICAge2xzKCfku5jmrL7mlrnlvI8nKX1cclxuICAgIDwvU2hvcFRpdGxlPlxyXG4gICAgPENhcmRCb3g+XHJcbiAgICAgIDxoZWFkZXI+e2NhcmREYXRhLm5hbWV9PC9oZWFkZXI+XHJcbiAgICAgIDxmb290ZXI+e2NhcmREYXRhLm51bWJlcn08L2Zvb3Rlcj5cclxuICAgICAgPGFzaWRlPlxyXG4gICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBhY3Rpb25zU2VsZWN0Q2FyZC5vcGVuQ2xpY2soKVxyXG4gICAgICAgICAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbnNTQ00uc2V0Rm9ybShbJ3BheW1lbnRNZXRob2RDYXJkSWQnLCByZXNdKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8Q2hldnJvblJpZ2h0SWNvbi8+XHJcbiAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICA8L2FzaWRlPlxyXG4gICAgPC9DYXJkQm94PlxyXG4gICAgPFNlbGVjdEFkZHJlc3MvPlxyXG4gICAgPFNlbGVjdENhcmQvPlxyXG4gICAgPFNob3BUb3RhbD5cclxuICAgICAgPGhlYWRlcj57bHMoJ+i0reeJqei9puaAu+iuoScpfTwvaGVhZGVyPlxyXG4gICAgICA8Zm9vdGVyPntkZWFsTW9uZXkocHJvZHVjdFRvdGFsKX08L2Zvb3Rlcj5cclxuICAgIDwvU2hvcFRvdGFsPlxyXG4gICAge3RyYW5zcG9ydGF0aW9uQ29zdHMgPiAwICYmIDxTaG9wVG90YWw+XHJcbiAgICAgIDxoZWFkZXI+e2xzKCfov5DotLknKX08L2hlYWRlcj5cclxuICAgICAgPGZvb3Rlcj57ZGVhbE1vbmV5KHRyYW5zcG9ydGF0aW9uQ29zdHMpfTwvZm9vdGVyPlxyXG4gICAgPC9TaG9wVG90YWw+fVxyXG4gICAgPFNob3BUb3RhbD5cclxuICAgICAgPGhlYWRlcj57bHMoJ+S7veaVsOaKmOaJoycpfTwvaGVhZGVyPlxyXG4gICAgICA8Zm9vdGVyPntzdGF0ZUdyb3VwUHJvZHVjdC5udW1EaXNjb3VudH08L2Zvb3Rlcj5cclxuICAgIDwvU2hvcFRvdGFsPlxyXG4gICAgPFNob3BUb3RhbD5cclxuICAgICAgPGhlYWRlcj57bHMoJ+aIkOWbouaKmOS4iuaKmCcpfTwvaGVhZGVyPlxyXG4gICAgICA8Zm9vdGVyPntzdGF0ZUdyb3VwUHJvZHVjdC5ncm91cERpc2NvdW50fTwvZm9vdGVyPlxyXG4gICAgPC9TaG9wVG90YWw+XHJcbiAgICA8U2hvcFRvdGFsXHJcbiAgICAgICAgc3R5bGU9e3tmb250U2l6ZTogJzE4cHgnfX1cclxuICAgID5cclxuICAgICAgPGhlYWRlcj57bHMoJ+iuouWNleaAu+minScpfTwvaGVhZGVyPlxyXG4gICAgICA8Zm9vdGVyPntkZWFsTW9uZXkoYWN0dWFsbHlQYWlkKX08L2Zvb3Rlcj5cclxuICAgIDwvU2hvcFRvdGFsPlxyXG4gICAgPFNwYWNlIGg9ezYwfS8+XHJcbiAgICA8Zm9vdGVyPlxyXG4gICAgICA8QnV0dG9uTG9hZFxyXG4gICAgICAgICAgdmFyaWFudD17J2NvbnRhaW5lZCd9XHJcbiAgICAgICAgICBjb2xvcj17J3NlY29uZGFyeSd9XHJcbiAgICAgICAgICBvbkNsaWNrPXthc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGFjdGlvbnNHcm91cFByb2R1Y3Quc3VibWl0KHtcclxuICAgICAgICAgICAgICBvcmRlckluZm9JdGVtSW5wdXQ6IHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlU0NNLmZvcm0sXHJcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZUNvaW4sXHJcbiAgICAgICAgICAgICAgICBhY3R1YWxseVBhaWQsXHJcbiAgICAgICAgICAgICAgICB0cmFuc3BvcnRhdGlvbkNvc3RzLFxyXG4gICAgICAgICAgICAgICAgc3VidG90YWw6IHByb2R1Y3RUb3RhbCxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRVc2VyTGV2ZWw6IHN0YXRlU0NNLnVzZXIudXNlckluZm8/LnVzZXJMZXZlbCxcclxuICAgICAgICAgICAgICAgIHJPcmRlclByb2R1Y3Q6IFt7XHJcbiAgICAgICAgICAgICAgICAgIGNvdW50OiBzdGF0ZUdyb3VwUHJvZHVjdC5zZWxlY3ROdW0sXHJcbiAgICAgICAgICAgICAgICAgIHByb2R1Y3RJZDogcHJvZHVjdD8uaWQsXHJcbiAgICAgICAgICAgICAgICAgIHByb2R1Y3QsXHJcbiAgICAgICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGlmIChyZXM/LnNhdmVHcm91cE9yZGVyPy5pZCkge1xyXG4gICAgICAgICAgICAgIHNob3dNZXNzYWdlKCfmk43kvZzmiJDlip8g5bCG5YmN5b6A5LuY5qy+JylcclxuICAgICAgICAgICAgICAvLyBhd2FpdCByb3V0ZXIucmVwbGFjZSgnL2NhcnQvcmVzdWx0JylcclxuICAgICAgICAgICAgICBjb25zdCBfcXVlcnkgPSBkZWFsVXJsUXVlcnkoe29yZGVySWQ6IHJlcz8uc2F2ZU9yZGVyPy5pZH0pXHJcbiAgICAgICAgICAgICAgYXdhaXQgcm91dGVyLnJlcGxhY2UoYC9wYXkke19xdWVyeX1gLCBgL3BheSR7X3F1ZXJ5fWApXHJcbiAgICAgICAgICAgICAgYWN0aW9uc1NDTS5jbGVhckRhdGEoKVxyXG4gICAgICAgICAgICAgIGFjdGlvbnNTQ00uZ2V0TGlzdCgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH19XHJcbiAgICAgID57bHMoJ+aPkOS6pOiuouWNlScpfTwvQnV0dG9uTG9hZD5cclxuICAgIDwvZm9vdGVyPlxyXG4gIDwvT3JkZXJQYWdlQm94PiB8fCBudWxsXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==