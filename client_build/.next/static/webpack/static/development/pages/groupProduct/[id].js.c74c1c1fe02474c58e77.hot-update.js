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
      lineNumber: 112,
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
})(["margin-top:16px;border-radius:8px;background:", ";display:flex;justify-content:space-between;align-items:center;"], function (prop) {
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
      lineNumber: 192,
      columnNumber: 10
    }
  }, __jsx(_components_HeaderTitle_HeaderTitle__WEBPACK_IMPORTED_MODULE_13__["HeaderTitle"], {
    title: '产品详情',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
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
      lineNumber: 196,
      columnNumber: 5
    }
  }), __jsx(PriceRed, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 5
    }
  }, __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('基准价格'), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 9
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_11__["dealMoney"])(product.priceOut), "/", product.packingUnitString)), __jsx("aside", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('已成团'), stateGroupProduct.groupQueueList.filter(function (v) {
    return v.sumFillAmount === (product === null || product === void 0 ? void 0 : product.groupPrecision);
  }).length, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('单')), __jsx("aside", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('拼团中'), stateGroupProduct.groupQueueList.filter(function (v) {
    var _v$sumFillAmount2, _product$groupPrecisi;

    return ((_v$sumFillAmount2 = v.sumFillAmount) !== null && _v$sumFillAmount2 !== void 0 ? _v$sumFillAmount2 : 0) < ((_product$groupPrecisi = product === null || product === void 0 ? void 0 : product.groupPrecision) !== null && _product$groupPrecisi !== void 0 ? _product$groupPrecisi : 0);
  }).length, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('单'))), __jsx(Name, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 5
    }
  }, __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 7
    }
  }, product.name), __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 7
    }
  }, product.groupRemark, "/", product.groupAmount, product.groupAmountUnitString, __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 90
    }
  }), Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('分团精度'), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
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
        lineNumber: 215,
        columnNumber: 13
      }
    });
  })))), __jsx(GroupQueueBox, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 5
    }
  }, __jsx(Title, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
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
        lineNumber: 222,
        columnNumber: 16
      }
    }, __jsx("aside", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226,
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
          lineNumber: 228,
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
          lineNumber: 233,
          columnNumber: 22
        }
      });
    })), __jsx("footer", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 11
      }
    }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])(((_groupQueue$sumFillAm2 = groupQueue.sumFillAmount) !== null && _groupQueue$sumFillAm2 !== void 0 ? _groupQueue$sumFillAm2 : 0) + (select ? stateGroupProduct.selectNum : 0) === product.groupPrecision ? '成团啦' : '未成团')));
  })), __jsx(SmartMatch, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 5
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 7
    }
  }, __jsx(Title, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 9
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('智能匹配'))), __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('请点击'), __jsx(_material_ui_icons_StarBorderRounded__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 9
    }
  }), Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('确定您需要的份数')), __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
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
        lineNumber: 255,
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
        lineNumber: 259,
        columnNumber: 18
      }
    });
  })), __jsx(Price, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 7
    }
  }, __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 9
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 11
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_11__["dealMoney"])(((_product$priceOut = product.priceOut) !== null && _product$priceOut !== void 0 ? _product$priceOut : 0) * stateGroupProduct.selectNum * stateGroupProduct.numDiscount * stateGroupProduct.groupDiscount)), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('折后价格'))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 9
    }
  }, "="), __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 9
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 11
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_11__["dealMoney"])(((_product$priceOut2 = product.priceOut) !== null && _product$priceOut2 !== void 0 ? _product$priceOut2 : 0) * stateGroupProduct.selectNum)), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('基准价格'))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 9
    }
  }, "x"), __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 9
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 11
    }
  }, stateGroupProduct.numDiscount), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('份数折扣'))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 9
    }
  }, "x"), __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 9
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 11
    }
  }, stateGroupProduct.groupDiscount), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('成团折上折'))))), __jsx(Submit, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 5
    }
  }, __jsx("aside", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
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
      lineNumber: 290,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('去结算'))), __jsx(_groupOrderPage__WEBPACK_IMPORTED_MODULE_19__["GroupOrderPage"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy92aWV3L2dyb3VwUHJvZHVjdC8udHN4Il0sIm5hbWVzIjpbImdyb3VwUHJvZHVjdE1vZGVsIiwibW9kZWxGYWN0b3J5IiwicHJvZHVjdCIsImdyb3VwUXVldWVMaXN0Iiwic2VsZWN0TnVtIiwic2VsZWN0UXVldWVJZCIsIm51bURpc2NvdW50IiwiZ3JvdXBEaXNjb3VudCIsImdldERhdGEiLCJ2YWx1ZSIsIm9wdGlvbiIsInF1ZXJ5IiwiZG9jIiwicHJvZHVjdExpc3RCeUlkcyIsImlkcyIsInJlcyIsImdyb3VwUXVldWVJdGVtSW5wdXQiLCJpZCIsInNldERhdGEiLCJmcE1lcmdlUHJlIiwibGlzdCIsInNvcnQiLCJhIiwiYiIsInN1bUZpbGxBbW91bnQiLCJ1cGRhdGVTZWxlY3ROdW0iLCJkYXRhIiwicmV2ZXJzZSIsImZpbmQiLCJ2IiwiZ3JvdXBQcmVjaXNpb24iLCJzdWJtaXQiLCJvcmRlckluZm9JdGVtSW5wdXQiLCJtdXRhdGUiLCJzYXZlR3JvdXBPcmRlciIsImdyb3VwT3JkZXJJdGVtSW5wdXQiLCJvcmRlckdyb3VwQW1vdW50IiwiUHJpY2VSZWQiLCJzdHlsZWQiLCJkaXYiLCJtcFN0eWxlIiwicmVkIiwiTmFtZSIsImdyZXkiLCJZZWxsb3dTdGFyIiwiY29sb3IiLCJUaXRsZSIsImhlYWRlciIsIkdyb3VwUXVldWVCb3giLCJTbWFydE1hdGNoIiwiUHJpY2UiLCJTdWJtaXQiLCJzaGFkb3ciLCJHcm91cFF1ZXVlTGlzdEJveCIsInByb3AiLCJzZWxlY3QiLCJHcm91cFByb2R1Y3QiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdG9yZU1vZGVsIiwiYWN0aW9uc0dyb3VwUHJvZHVjdCIsImFjdGlvbnMiLCJzdGF0ZUdyb3VwUHJvZHVjdCIsInN0YXRlIiwidXNlRWZmZWN0IiwiZ3JvdXBPcmRlclBhZ2VNb2RlbCIsImFjdGlvbnNHcm91cE9yZGVyUGFnZU1vZGVsIiwiY29uc29sZSIsImxvZyIsImltZyIsIm1hcCIsImltZ1VybCIsInVybCIsImxzIiwiZGVhbE1vbmV5IiwicHJpY2VPdXQiLCJwYWNraW5nVW5pdFN0cmluZyIsImZpbHRlciIsImxlbmd0aCIsIm5hbWUiLCJncm91cFJlbWFyayIsImdyb3VwQW1vdW50IiwiZ3JvdXBBbW91bnRVbml0U3RyaW5nIiwiQXJyYXkiLCJpIiwiZ3JvdXBRdWV1ZSIsImhlaWdodCIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJmb250U2l6ZSIsIm9wZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxpQkFBaUIsR0FBR0MsMkVBQVksQ0FBQyxtQkFBRCxFQUFzQjtBQUNqRUMsU0FBTyxFQUFFLEVBRHdEO0FBRWpFQyxnQkFBYyxFQUFFLEVBRmlEO0FBR2pFQyxXQUFTLEVBQUUsQ0FIc0Q7QUFJakVDLGVBQWEsRUFBRSxFQUprRDtBQUtqRUMsYUFBVyxFQUFFLENBTG9EO0FBTWpFQyxlQUFhLEVBQUU7QUFOa0QsQ0FBdEIsRUFPMUM7QUFDREMsU0FBTztBQUFBLG9NQUFFLGlCQUFPQyxLQUFQLEVBQXNCQyxNQUF0QjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNXQSxNQUFNLENBQUNDLEtBQVAsQ0FBYUMscURBQUcsQ0FBQ0MsZ0JBQWpCLEVBQW1DO0FBQ25EQyxtQkFBRyxFQUFFLENBQUNMLEtBQUQ7QUFEOEMsZUFBbkMsQ0FEWDs7QUFBQTtBQUNETSxpQkFEQztBQUFBO0FBQUEscUJBSXNCTCxNQUFNLENBQUNDLEtBQVAsQ0FBYUMscURBQUcsQ0FBQ1QsY0FBakIsRUFBaUM7QUFDNURhLG1DQUFtQixFQUFFO0FBQ25CZCx5QkFBTyxFQUFFO0FBQ1BlLHNCQUFFLEVBQUVSO0FBREc7QUFE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M0I7QUFDRCxLQVBMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FTR2pCLDBEQUFFLENBQUMsS0FBRCxDQVRMLENBRkYsQ0FoR0ssRUE4R0wsTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBOUdLLENBQVA7QUFnSEQsQ0FoSU07O0dBQU1qQixZO1VBQ0lFLHFELEVBRWtEQyxvRSxFQUluQkEsb0U7OztPQVBuQ0gsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcZ3JvdXBQcm9kdWN0XFxbaWRdLmpzLmM3NGMxYzFmZTAyNDc0YzU4ZTc3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU3RhclJvdW5kZWRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TdGFyUm91bmRlZCdcclxuaW1wb3J0IFN0YXJCb3JkZXJSb3VuZGVkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU3RhckJvcmRlclJvdW5kZWQnXHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHttb2RlbEZhY3Rvcnl9IGZyb20gJy4uLy4uL01vZGVsQWN0aW9uL21vZGVsVXRpbCdcclxuaW1wb3J0IHtcclxuICBHcm91cE9yZGVySXRlbUlucHV0LFxyXG4gIEdyb3VwUXVldWUsXHJcbiAgR3JvdXBRdWV1ZUl0ZW1JbnB1dCxcclxuICBPcmRlckluZm9JdGVtSW5wdXQsXHJcbiAgUHJvZHVjdFxyXG59IGZyb20gJy4uLy4uL2dyYXBocWxUeXBlcy90eXBlcydcclxuaW1wb3J0IHtkb2N9IGZyb20gJy4uLy4uL2dyYXBocWxUeXBlcy9kb2MnXHJcbmltcG9ydCB7dXNlU3RvcmVNb2RlbH0gZnJvbSAnLi4vLi4vTW9kZWxBY3Rpb24vdXNlU3RvcmUnXHJcbmltcG9ydCB7ZGVhbE1vbmV5LCBmcE1lcmdlUHJlfSBmcm9tICcuLi8uLi90b29scy91dGlscydcclxuaW1wb3J0IEN1c0Nhcm91c2VsIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU3dpcGUvU3dpcGUnXHJcbmltcG9ydCB7SGVhZGVyVGl0bGV9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSGVhZGVyVGl0bGUvSGVhZGVyVGl0bGUnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7bHN9IGZyb20gJy4uLy4uL3Rvb2xzL2RlYWxLZXknXHJcbmltcG9ydCB7bXBTdHlsZX0gZnJvbSAnLi4vLi4vc3R5bGUvY29tbW9uJ1xyXG5pbXBvcnQge2dyZXl9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycydcclxuaW1wb3J0IHtCdXR0b259IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQge0dyb3VwT3JkZXJQYWdlLCBncm91cE9yZGVyUGFnZU1vZGVsfSBmcm9tICcuL2dyb3VwT3JkZXJQYWdlJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGdyb3VwUHJvZHVjdE1vZGVsID0gbW9kZWxGYWN0b3J5KCdncm91cFByb2R1Y3RNb2RlbCcsIHtcclxuICBwcm9kdWN0OiB7fSBhcyBQcm9kdWN0LFxyXG4gIGdyb3VwUXVldWVMaXN0OiBbXSBhcyBHcm91cFF1ZXVlW10sXHJcbiAgc2VsZWN0TnVtOiAwLFxyXG4gIHNlbGVjdFF1ZXVlSWQ6ICcnLFxyXG4gIG51bURpc2NvdW50OiAxLFxyXG4gIGdyb3VwRGlzY291bnQ6IDEsXHJcbn0sIHtcclxuICBnZXREYXRhOiBhc3luYyAodmFsdWU6IHN0cmluZywgb3B0aW9uKSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBvcHRpb24ucXVlcnkoZG9jLnByb2R1Y3RMaXN0QnlJZHMsIHtcclxuICAgICAgaWRzOiBbdmFsdWVdLFxyXG4gICAgfSlcclxuICAgIGNvbnN0IGdyb3VwUXVldWVMaXN0ID0gYXdhaXQgb3B0aW9uLnF1ZXJ5KGRvYy5ncm91cFF1ZXVlTGlzdCwge1xyXG4gICAgICBncm91cFF1ZXVlSXRlbUlucHV0OiB7XHJcbiAgICAgICAgcHJvZHVjdDoge1xyXG4gICAgICAgICAgaWQ6IHZhbHVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0gYXMgR3JvdXBRdWV1ZUl0ZW1JbnB1dCxcclxuICAgIH0pXHJcbiAgICBvcHRpb24uc2V0RGF0YShmcE1lcmdlUHJlKHtcclxuICAgICAgcHJvZHVjdDogcmVzPy5wcm9kdWN0TGlzdEJ5SWRzPy5saXN0WzBdID8/IHt9LFxyXG4gICAgICBncm91cFF1ZXVlTGlzdDogZ3JvdXBRdWV1ZUxpc3Q/Lmdyb3VwUXVldWVMaXN0Py5zb3J0KChhOiBHcm91cFF1ZXVlLCBiOiBHcm91cFF1ZXVlKSA9PiAoYS5zdW1GaWxsQW1vdW50ID8/IDApIC0gKGIuc3VtRmlsbEFtb3VudCA/PyAwKSkgPz8gW10sXHJcbiAgICB9KSlcclxuICB9LFxyXG4gIHVwZGF0ZVNlbGVjdE51bTogKHZhbHVlOiBudW1iZXIsIG9wdGlvbikgPT4ge1xyXG4gICAgb3B0aW9uLnNldERhdGEoZnBNZXJnZVByZSh2YWx1ZSA9PT0gb3B0aW9uLmRhdGEuc2VsZWN0TnVtID8ge1xyXG4gICAgICBzZWxlY3ROdW06IDAsXHJcbiAgICAgIHNlbGVjdFF1ZXVlSWQ6ICcnLFxyXG4gICAgfSA6IHtcclxuICAgICAgc2VsZWN0TnVtOiB2YWx1ZSxcclxuICAgICAgc2VsZWN0UXVldWVJZDogWy4uLm9wdGlvbi5kYXRhLmdyb3VwUXVldWVMaXN0XS5yZXZlcnNlKCk/LmZpbmQodiA9PiAodi5zdW1GaWxsQW1vdW50ID8/IDApICsgdmFsdWUgPD0gKG9wdGlvbi5kYXRhPy5wcm9kdWN0Py5ncm91cFByZWNpc2lvbiA/PyAwKSk/LmlkID8/ICcnLFxyXG4gICAgfSkpXHJcbiAgfSxcclxuICBzdWJtaXQ6IGFzeW5jICh7b3JkZXJJbmZvSXRlbUlucHV0fTogeyBvcmRlckluZm9JdGVtSW5wdXQ6IE9yZGVySW5mb0l0ZW1JbnB1dCB9LCBvcHRpb24pID0+IHtcclxuICAgIG9wdGlvbi5tdXRhdGUoZG9jLnNhdmVHcm91cE9yZGVyLCB7XHJcbiAgICAgIG9yZGVySW5mb0l0ZW1JbnB1dDoge1xyXG4gICAgICAgICAgLi4ub3JkZXJJbmZvSXRlbUlucHV0LFxyXG4gICAgICB9IGFzIE9yZGVySW5mb0l0ZW1JbnB1dCxcclxuICAgICAgZ3JvdXBPcmRlckl0ZW1JbnB1dDoge1xyXG4gICAgICAgIG9yZGVyR3JvdXBBbW91bnQ6IG9wdGlvbi5kYXRhLnNlbGVjdE51bSxcclxuICAgICAgfSBhcyBHcm91cE9yZGVySXRlbUlucHV0LFxyXG4gICAgICBncm91cFF1ZXVlSXRlbUlucHV0OiB7XHJcbiAgICAgICAgcHJvZHVjdDogb3B0aW9uLmRhdGEucHJvZHVjdCxcclxuICAgICAgICAuLi4ob3B0aW9uLmRhdGEuc2VsZWN0UXVldWVJZCA/IHtpZDogb3B0aW9uLmRhdGEuc2VsZWN0UXVldWVJZH0gOiB7fSksXHJcbiAgICAgIH0gYXMgR3JvdXBRdWV1ZUl0ZW1JbnB1dCxcclxuICAgIH0pXHJcbiAgfSxcclxufSlcclxuXHJcbmNvbnN0IFByaWNlUmVkID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kOiAke21wU3R5bGUucmVkfTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxMjBweDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAzMHB4KTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gID4gbWFpbiB7XHJcbiAgICBncmlkLWFyZWE6IDEvMS8zLzI7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICA+IHNwYW4ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuICAgIH1cclxuICB9XHJcbmBcclxuY29uc3QgTmFtZSA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogMTZweCAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gID4gbWFpbiB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gIH1cclxuICA+IHNlY3Rpb24ge1xyXG4gICAgPiBzcGFuIHtcclxuICAgICAgcGFkZGluZzogMCA0cHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICR7Z3JleVsnNzAwJ119O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgYm90dG9tOiAtNHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IFllbGxvd1N0YXIgPSAoKSA9PiA8U3RhclJvdW5kZWRJY29uIGZvbnRTaXplPXsnc21hbGwnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2NvbG9yOiAnI0ZERDMzNCd9fS8+XHJcblxyXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5oZWFkZXJgXHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG5gXHJcbmNvbnN0IEdyb3VwUXVldWVCb3ggPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbmBcclxuXHJcbmNvbnN0IFNtYXJ0TWF0Y2ggPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDE2cHggMTZweCA5MHB4O1xyXG4gID4gc2VjdGlvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgPiBtYWluIHtcclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IFByaWNlID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICA+IG1haW4ge1xyXG4gICAgLy9mb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgPiBtYWluLCBzZWN0aW9uIHtcclxuICAgID4gKiB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IFN1Ym1pdCA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGhlaWdodDogNjBweDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAke21wU3R5bGUucmVkfTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGJveC1zaGFkb3c6ICR7bXBTdHlsZS5zaGFkb3dbJzEnXX07XHJcbiAgPiBhc2lkZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICBjb2xvcjogJHttcFN0eWxlLnJlZH07XHJcbiAgfVxyXG5gXHJcbmNvbnN0IEdyb3VwUXVldWVMaXN0Qm94ID0gc3R5bGVkLmRpdjx7c2VsZWN0OiBib29sZWFufT5gXHJcbiAgbWFyZ2luLXRvcDogMTZweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYmFja2dyb3VuZDogJHtwcm9wID0+IHByb3Auc2VsZWN0XHJcbiAgICA/IGBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICR7bXBTdHlsZS5yZWR9LCAjRkM3MzYxKWAgXHJcbiAgICA6IGdyZXlbJzIwMCddfTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgR3JvdXBQcm9kdWN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgaWQgPSAocm91dGVyLnF1ZXJ5Py5pZCBhcyBzdHJpbmcpID8/ICcnXHJcbiAgY29uc3Qge2FjdGlvbnM6IGFjdGlvbnNHcm91cFByb2R1Y3QsIHN0YXRlOiBzdGF0ZUdyb3VwUHJvZHVjdH0gPSB1c2VTdG9yZU1vZGVsKGdyb3VwUHJvZHVjdE1vZGVsKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhY3Rpb25zR3JvdXBQcm9kdWN0LmdldERhdGEoaWQpXHJcbiAgfSwgW2lkXSlcclxuICBjb25zdCB7YWN0aW9uczogYWN0aW9uc0dyb3VwT3JkZXJQYWdlTW9kZWx9ID0gdXNlU3RvcmVNb2RlbChncm91cE9yZGVyUGFnZU1vZGVsKVxyXG5cclxuICBjb25zdCBwcm9kdWN0ID0gc3RhdGVHcm91cFByb2R1Y3QucHJvZHVjdFxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBhY3Rpb25zR3JvdXBQcm9kdWN0LnVwZGF0ZVNlbGVjdE51bSgyKVxyXG4gIC8vICAgYWN0aW9uc0dyb3VwT3JkZXJQYWdlTW9kZWwub3BlbigpXHJcbiAgLy8gfSwgW10pXHJcblxyXG4gIGNvbnNvbGUubG9nKHN0YXRlR3JvdXBQcm9kdWN0Lmdyb3VwUXVldWVMaXN0KVxyXG4gIHJldHVybiA8ZGl2PlxyXG4gICAgPEhlYWRlclRpdGxlXHJcbiAgICAgICAgdGl0bGU9eyfkuqflk4Hor6bmg4UnfVxyXG4gICAgLz5cclxuICAgIDxDdXNDYXJvdXNlbFxyXG4gICAgICAgIGhlaWdodD17JzI0MHB4J31cclxuICAgICAgICBkYXRhTGlzdD17cHJvZHVjdD8uaW1nPy5tYXAodiA9PiAoe1xyXG4gICAgICAgICAgLi4udixcclxuICAgICAgICAgIGltZ1VybDogdj8udXJsLFxyXG4gICAgICAgIH0pKSBhcyBbXX1cclxuICAgIC8+XHJcbiAgICA8UHJpY2VSZWQ+XHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgIHtscygn5Z+65YeG5Lu35qC8Jyl9XHJcbiAgICAgICAgPHNwYW4+e2RlYWxNb25leShwcm9kdWN0LnByaWNlT3V0KX0ve3Byb2R1Y3QucGFja2luZ1VuaXRTdHJpbmd9PC9zcGFuPlxyXG4gICAgICA8L21haW4+XHJcbiAgICAgIDxhc2lkZT57bHMoJ+W3suaIkOWboicpfXtzdGF0ZUdyb3VwUHJvZHVjdC5ncm91cFF1ZXVlTGlzdC5maWx0ZXIodiA9PiB2LnN1bUZpbGxBbW91bnQgPT09IHByb2R1Y3Q/Lmdyb3VwUHJlY2lzaW9uKS5sZW5ndGh9e2xzKCfljZUnKX08L2FzaWRlPlxyXG4gICAgICA8YXNpZGU+e2xzKCfmi7zlm6LkuK0nKX17c3RhdGVHcm91cFByb2R1Y3QuZ3JvdXBRdWV1ZUxpc3QuZmlsdGVyKHYgPT4gKHYuc3VtRmlsbEFtb3VudCA/PyAwKSA8IChwcm9kdWN0Py5ncm91cFByZWNpc2lvbiA/PyAwKSkubGVuZ3RofXtscygn5Y2VJyl9PC9hc2lkZT5cclxuICAgIDwvUHJpY2VSZWQ+XHJcbiAgICA8TmFtZT5cclxuICAgICAgPG1haW4+e3Byb2R1Y3QubmFtZX08L21haW4+XHJcbiAgICAgIDxzZWN0aW9uPntwcm9kdWN0Lmdyb3VwUmVtYXJrfS97cHJvZHVjdC5ncm91cEFtb3VudH17cHJvZHVjdC5ncm91cEFtb3VudFVuaXRTdHJpbmd9PGJyLz57bHMoJ+WIhuWboueyvuW6picpfVxyXG4gICAgICAgIDxzcGFuPntbLi4uQXJyYXkocHJvZHVjdC5ncm91cFByZWNpc2lvbildLm1hcCgodiwgaSkgPT4gaSkubWFwKHZhbHVlID0+XHJcbiAgICAgICAgICAgIDxZZWxsb3dTdGFyIGtleT17dmFsdWV9Lz4pfTwvc3Bhbj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9OYW1lPlxyXG4gICAgPEdyb3VwUXVldWVCb3g+XHJcbiAgICAgIDxUaXRsZT57bHMoJ+aLvOWbouS4rScpfTwvVGl0bGU+XHJcbiAgICAgIHtzdGF0ZUdyb3VwUHJvZHVjdC5ncm91cFF1ZXVlTGlzdC5tYXAoZ3JvdXBRdWV1ZSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ID0gZ3JvdXBRdWV1ZS5pZCA9PT0gc3RhdGVHcm91cFByb2R1Y3Quc2VsZWN0UXVldWVJZFxyXG4gICAgICAgIHJldHVybiA8R3JvdXBRdWV1ZUxpc3RCb3hcclxuICAgICAgICAgICAgc2VsZWN0PXtzZWxlY3R9XHJcbiAgICAgICAgICAgIGtleT17YEdyb3VwUXVldWVMaXN0Qm94JHtncm91cFF1ZXVlLmlkfWB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGFzaWRlPlxyXG4gICAgICAgICAgICB7Wy4uLkFycmF5KHByb2R1Y3QuZ3JvdXBQcmVjaXNpb24pXS5tYXAoKHYsIGkpID0+IGkpLm1hcCh2YWx1ZSA9PiB2YWx1ZSArIDEgPiAoKGdyb3VwUXVldWUuc3VtRmlsbEFtb3VudCA/PyAwKSArIChzZWxlY3QgPyBzdGF0ZUdyb3VwUHJvZHVjdC5zZWxlY3ROdW0gOiAwKSkgP1xyXG4gICAgICAgICAgICAgICAgPFN0YXJCb3JkZXJSb3VuZGVkSWNvblxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17YGNsaWNrU3RhciR7dmFsdWV9YH1cclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT17J2xhcmdlJ31cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhY3Rpb25zR3JvdXBQcm9kdWN0LnVwZGF0ZVNlbGVjdE51bSh2YWx1ZSArIDEpfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y29sb3I6IHNlbGVjdCA/ICcjZmZmJyA6ICcjMDAwJ319XHJcbiAgICAgICAgICAgICAgICAvPiA6IDxTdGFyUm91bmRlZEljb25cclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2BjbGlja1N0YXIke3ZhbHVlfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tjb2xvcjogJyNGREQzMzQnfX1cclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT17J2xhcmdlJ31cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhY3Rpb25zR3JvdXBQcm9kdWN0LnVwZGF0ZVNlbGVjdE51bSh2YWx1ZSArIDEpfVxyXG4gICAgICAgICAgICAgICAgLz4pfVxyXG4gICAgICAgICAgPC9hc2lkZT5cclxuICAgICAgICAgIDxmb290ZXI+e2xzKChncm91cFF1ZXVlLnN1bUZpbGxBbW91bnQgPz8gMCkgKyAoc2VsZWN0ID8gc3RhdGVHcm91cFByb2R1Y3Quc2VsZWN0TnVtIDogMCkgPT09IHByb2R1Y3QuZ3JvdXBQcmVjaXNpb24gPyAn5oiQ5Zui5ZWmJyA6ICfmnKrmiJDlm6InKX08L2Zvb3Rlcj5cclxuICAgICAgICA8L0dyb3VwUXVldWVMaXN0Qm94PlxyXG4gICAgICB9KX1cclxuICAgIDwvR3JvdXBRdWV1ZUJveD5cclxuICAgIDxTbWFydE1hdGNoPlxyXG4gICAgICA8aGVhZGVyPlxyXG4gICAgICAgIDxUaXRsZT57bHMoJ+aZuuiDveWMuemFjScpfTwvVGl0bGU+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG4gICAgICA8c2VjdGlvbj5cclxuICAgICAgICB7bHMoJ+ivt+eCueWHuycpfVxyXG4gICAgICAgIDxTdGFyQm9yZGVyUm91bmRlZEljb24vPlxyXG4gICAgICAgIHtscygn56Gu5a6a5oKo6ZyA6KaB55qE5Lu95pWwJyl9XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPG1haW4+XHJcbiAgICAgICAge1suLi5BcnJheShwcm9kdWN0Lmdyb3VwUHJlY2lzaW9uKV0ubWFwKCh2LCBpKSA9PiBpKS5tYXAodmFsdWUgPT4gdmFsdWUgKyAxID4gc3RhdGVHcm91cFByb2R1Y3Quc2VsZWN0TnVtID9cclxuICAgICAgICAgICAgPFN0YXJCb3JkZXJSb3VuZGVkSWNvblxyXG4gICAgICAgICAgICAgICAga2V5PXtgY2xpY2tTdGFyJHt2YWx1ZX1gfVxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU9eydsYXJnZSd9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhY3Rpb25zR3JvdXBQcm9kdWN0LnVwZGF0ZVNlbGVjdE51bSh2YWx1ZSArIDEpfVxyXG4gICAgICAgICAgICAvPiA6IDxTdGFyUm91bmRlZEljb25cclxuICAgICAgICAgICAgICAgIGtleT17YGNsaWNrU3RhciR7dmFsdWV9YH1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7Y29sb3I6ICcjRkREMzM0J319XHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZT17J2xhcmdlJ31cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFjdGlvbnNHcm91cFByb2R1Y3QudXBkYXRlU2VsZWN0TnVtKHZhbHVlICsgMSl9XHJcbiAgICAgICAgICAgIC8+KX1cclxuICAgICAgPC9tYWluPlxyXG4gICAgICA8UHJpY2U+XHJcbiAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICA8aGVhZGVyPntkZWFsTW9uZXkoKHByb2R1Y3QucHJpY2VPdXQgPz8gMCkgKiBzdGF0ZUdyb3VwUHJvZHVjdC5zZWxlY3ROdW0gKiBzdGF0ZUdyb3VwUHJvZHVjdC5udW1EaXNjb3VudCAqIHN0YXRlR3JvdXBQcm9kdWN0Lmdyb3VwRGlzY291bnQpfTwvaGVhZGVyPlxyXG4gICAgICAgICAgPGZvb3Rlcj57bHMoJ+aKmOWQjuS7t+agvCcpfTwvZm9vdGVyPlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICAgICA8ZGl2Pj08L2Rpdj5cclxuICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgIDxoZWFkZXI+e2RlYWxNb25leSgocHJvZHVjdC5wcmljZU91dCA/PyAwKSAqIHN0YXRlR3JvdXBQcm9kdWN0LnNlbGVjdE51bSl9PC9oZWFkZXI+XHJcbiAgICAgICAgICA8Zm9vdGVyPntscygn5Z+65YeG5Lu35qC8Jyl9PC9mb290ZXI+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxkaXY+eDwvZGl2PlxyXG4gICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgPGhlYWRlcj57c3RhdGVHcm91cFByb2R1Y3QubnVtRGlzY291bnR9PC9oZWFkZXI+XHJcbiAgICAgICAgICA8Zm9vdGVyPntscygn5Lu95pWw5oqY5omjJyl9PC9mb290ZXI+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxkaXY+eDwvZGl2PlxyXG4gICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgPGhlYWRlcj57c3RhdGVHcm91cFByb2R1Y3QuZ3JvdXBEaXNjb3VudH08L2hlYWRlcj5cclxuICAgICAgICAgIDxmb290ZXI+e2xzKCfmiJDlm6LmipjkuIrmipgnKX08L2Zvb3Rlcj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDwvUHJpY2U+XHJcbiAgICA8L1NtYXJ0TWF0Y2g+XHJcbiAgICA8U3VibWl0PlxyXG4gICAgICA8YXNpZGU+e2xzKCfpgInmi6nkuoYnKX17c3RhdGVHcm91cFByb2R1Y3Quc2VsZWN0TnVtfXtscygn5Lu9Jyl9PC9hc2lkZT5cclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgZGlzYWJsZWQ9e3N0YXRlR3JvdXBQcm9kdWN0LnNlbGVjdE51bSA9PT0gMH1cclxuICAgICAgICAgIHN0eWxlPXt7aGVpZ2h0OiAnMTAwJScsIHBhZGRpbmc6ICcwIDMycHgnLCBib3JkZXJSYWRpdXM6ICcwJywgZm9udFNpemU6ICcxOHB4J319XHJcbiAgICAgICAgICBjb2xvcj17J3NlY29uZGFyeSd9XHJcbiAgICAgICAgICB2YXJpYW50PXsnY29udGFpbmVkJ31cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgYWN0aW9uc0dyb3VwT3JkZXJQYWdlTW9kZWwub3BlbigpXHJcbiAgICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge2xzKCfljrvnu5PnrpcnKX1cclxuICAgICAgPC9CdXR0b24+XHJcbiAgICA8L1N1Ym1pdD5cclxuICAgIDxHcm91cE9yZGVyUGFnZS8+XHJcbiAgPC9kaXY+XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==