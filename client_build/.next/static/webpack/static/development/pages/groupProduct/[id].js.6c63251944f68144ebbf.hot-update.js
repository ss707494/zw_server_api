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
                  var _a$sumFillAmount;

                  return ((_a$sumFillAmount = a.sumFillAmount) !== null && _a$sumFillAmount !== void 0 ? _a$sumFillAmount : 0) - b.sumFillAmount;
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
    var _option$data$groupQue, _option$data$groupQue2, _option$data$groupQue3;

    option.setData(Object(_tools_utils__WEBPACK_IMPORTED_MODULE_11__["fpMergePre"])(value === option.data.selectNum ? {
      selectNum: 0,
      selectQueueId: ''
    } : {
      selectNum: value,
      selectQueueId: (_option$data$groupQue = (_option$data$groupQue2 = option.data.groupQueueList.reverse()) === null || _option$data$groupQue2 === void 0 ? void 0 : (_option$data$groupQue3 = _option$data$groupQue2.find(function (v) {
        var _option$data$product$, _option$data, _option$data$product;

        return v.sumFillAmount + value <= ((_option$data$product$ = (_option$data = option.data) === null || _option$data === void 0 ? void 0 : (_option$data$product = _option$data.product) === null || _option$data$product === void 0 ? void 0 : _option$data$product.groupPrecision) !== null && _option$data$product$ !== void 0 ? _option$data$product$ : 0);
      })) === null || _option$data$groupQue3 === void 0 ? void 0 : _option$data$groupQue3.id) !== null && _option$data$groupQue !== void 0 ? _option$data$groupQue : ''
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
})(["margin-top:16px;border-radius:8px;background:", ";"], function (prop) {
  return prop.select ? _style_common__WEBPACK_IMPORTED_MODULE_16__["mpStyle"].red : _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_17__["grey"]['200'];
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
      lineNumber: 187,
      columnNumber: 10
    }
  }, __jsx(_components_HeaderTitle_HeaderTitle__WEBPACK_IMPORTED_MODULE_13__["HeaderTitle"], {
    title: '产品详情',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
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
      lineNumber: 191,
      columnNumber: 5
    }
  }), __jsx(PriceRed, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 5
    }
  }, __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('基准价格'), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 9
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_11__["dealMoney"])(product.priceOut), "/", product.packingUnitString)), __jsx("aside", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('已成团'), stateGroupProduct.groupQueueList.filter(function (v) {
    return v.sumFillAmount === (product === null || product === void 0 ? void 0 : product.groupPrecision);
  }).length, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('单')), __jsx("aside", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('拼团中'), stateGroupProduct.groupQueueList.filter(function (v) {
    var _v$sumFillAmount, _product$groupPrecisi;

    return ((_v$sumFillAmount = v.sumFillAmount) !== null && _v$sumFillAmount !== void 0 ? _v$sumFillAmount : 0) < ((_product$groupPrecisi = product === null || product === void 0 ? void 0 : product.groupPrecision) !== null && _product$groupPrecisi !== void 0 ? _product$groupPrecisi : 0);
  }).length, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('单'))), __jsx(Name, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 5
    }
  }, __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 7
    }
  }, product.name), __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 7
    }
  }, product.groupRemark, "/", product.groupAmount, product.groupAmountUnitString, __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 90
    }
  }), Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('分团精度'), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
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
        lineNumber: 210,
        columnNumber: 13
      }
    });
  })))), __jsx(GroupQueueBox, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 5
    }
  }, __jsx(Title, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('拼团中')), stateGroupProduct.groupQueueList.map(function (groupQueue) {
    return __jsx(GroupQueueListBox, {
      select: groupQueue.id === stateGroupProduct.selectQueueId,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 59
      }
    }, __jsx("aside", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218,
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
          lineNumber: 220,
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
          lineNumber: 224,
          columnNumber: 20
        }
      });
    })));
  })), __jsx(SmartMatch, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 5
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 7
    }
  }, __jsx(Title, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 9
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('智能匹配'))), __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('请点击'), __jsx(_material_ui_icons_StarBorderRounded__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 9
    }
  }), Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('确定您需要的份数')), __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
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
        lineNumber: 244,
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
        lineNumber: 248,
        columnNumber: 18
      }
    });
  })), __jsx(Price, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 7
    }
  }, __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 9
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 11
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_11__["dealMoney"])(((_product$priceOut = product.priceOut) !== null && _product$priceOut !== void 0 ? _product$priceOut : 0) * stateGroupProduct.selectNum * stateGroupProduct.numDiscount * stateGroupProduct.groupDiscount)), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('折后价格'))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 9
    }
  }, "="), __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 9
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 11
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_11__["dealMoney"])(((_product$priceOut2 = product.priceOut) !== null && _product$priceOut2 !== void 0 ? _product$priceOut2 : 0) * stateGroupProduct.selectNum)), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('基准价格'))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 9
    }
  }, "x"), __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 9
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 11
    }
  }, stateGroupProduct.numDiscount), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('份数折扣'))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 9
    }
  }, "x"), __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 9
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 11
    }
  }, stateGroupProduct.groupDiscount), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('成团折上折'))))), __jsx(Submit, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 5
    }
  }, __jsx("aside", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
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
      lineNumber: 279,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('去结算'))), __jsx(_groupOrderPage__WEBPACK_IMPORTED_MODULE_19__["GroupOrderPage"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy92aWV3L2dyb3VwUHJvZHVjdC8udHN4Il0sIm5hbWVzIjpbImdyb3VwUHJvZHVjdE1vZGVsIiwibW9kZWxGYWN0b3J5IiwicHJvZHVjdCIsImdyb3VwUXVldWVMaXN0Iiwic2VsZWN0TnVtIiwic2VsZWN0UXVldWVJZCIsIm51bURpc2NvdW50IiwiZ3JvdXBEaXNjb3VudCIsImdldERhdGEiLCJ2YWx1ZSIsIm9wdGlvbiIsInF1ZXJ5IiwiZG9jIiwicHJvZHVjdExpc3RCeUlkcyIsImlkcyIsInJlcyIsImdyb3VwUXVldWVJdGVtSW5wdXQiLCJpZCIsInNldERhdGEiLCJmcE1lcmdlUHJlIiwibGlzdCIsInNvcnQiLCJhIiwiYiIsInN1bUZpbGxBbW91bnQiLCJ1cGRhdGVTZWxlY3ROdW0iLCJkYXRhIiwicmV2ZXJzZSIsImZpbmQiLCJ2IiwiZ3JvdXBQcmVjaXNpb24iLCJzdWJtaXQiLCJvcmRlckluZm9JdGVtSW5wdXQiLCJtdXRhdGUiLCJzYXZlR3JvdXBPcmRlciIsImdyb3VwT3JkZXJJdGVtSW5wdXQiLCJvcmRlckdyb3VwQW1vdW50IiwiUHJpY2VSZWQiLCJzdHlsZWQiLCJkaXYiLCJtcFN0eWxlIiwicmVkIiwiTmFtZSIsImdyZXkiLCJZZWxsb3dTdGFyIiwiY29sb3IiLCJUaXRsZSIsImhlYWRlciIsIkdyb3VwUXVldWVCb3giLCJTbWFydE1hdGNoIiwiUHJpY2UiLCJTdWJtaXQiLCJzaGFkb3ciLCJHcm91cFF1ZXVlTGlzdEJveCIsInByb3AiLCJzZWxlY3QiLCJHcm91cFByb2R1Y3QiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdG9yZU1vZGVsIiwiYWN0aW9uc0dyb3VwUHJvZHVjdCIsImFjdGlvbnMiLCJzdGF0ZUdyb3VwUHJvZHVjdCIsInN0YXRlIiwidXNlRWZmZWN0IiwiZ3JvdXBPcmRlclBhZ2VNb2RlbCIsImFjdGlvbnNHcm91cE9yZGVyUGFnZU1vZGVsIiwiY29uc29sZSIsImxvZyIsImltZyIsIm1hcCIsImltZ1VybCIsInVybCIsImxzIiwiZGVhbE1vbmV5IiwicHJpY2VPdXQiLCJwYWNraW5nVW5pdFN0cmluZyIsImZpbHRlciIsImxlbmd0aCIsIm5hbWUiLCJncm91cFJlbWFyayIsImdyb3VwQW1vdW50IiwiZ3JvdXBBbW91bnRVbml0U3RyaW5nIiwiQXJyYXkiLCJpIiwiZ3JvdXBRdWV1ZSIsImhlaWdodCIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJmb250U2l6ZSIsIm9wZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxpQkFBaUIsR0FBR0MsMkVBQVksQ0FBQyxtQkFBRCxFQUFzQjtBQUNqRUMsU0FBTyxFQUFFLEVBRHdEO0FBRWpFQyxnQkFBYyxFQUFFLEVBRmlEO0FBR2pFQyxXQUFTLEVBQUUsQ0FIc0Q7QUFJakVDLGVBQWEsRUFBRSxFQUprRDtBQUtqRUMsYUFBVyxFQUFFLENBTG9EO0FBTWpFQyxlQUFhLEVBQUU7QUFOa0QsQ0FBdEIsRUFPMUM7QUFDREMsU0FBTztBQUFBLG9NQUFFLGlCQUFPQyxLQUFQLEVBQXNCQyxNQUF0QjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNXQSxNQUFNLENBQUNDLEtBQVAsQ0FBYUMscURBQUcsQ0FBQ0MsZ0JBQWpCLEVBQW1DO0FBQ25EQyxtQkFBRyxFQUFFLENBQUNMLEtBQUQ7QUFEOEMsZUFBbkMsQ0FEWDs7QUFBQTtBQUNETSxpQkFEQztBQUFBO0FBQUEscUJBSXNCTCxNQUFNLENBQUNDLEtBQVAsQ0FBYUMscURBQUcsQ0FBQ1QsY0FBakIsRUFBaUM7QUFDNURhLG1DQUFtQixFQUFFO0FBQ25CZCx5QkFBTyxFQUFFO0FBQ1BlLHNCQUFFLEVBQUVSO0FBREc7QUFE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QTBGTCxNQUFDLE1BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUUEsMERBQUUsQ0FBQyxLQUFELENBQVYsRUFBbUJYLGlCQUFpQixDQUFDMUQsU0FBckMsRUFBZ0RxRSwwREFBRSxDQUFDLEdBQUQsQ0FBbEQsQ0FERixFQUVFLE1BQUMseURBQUQ7QUFDSSxZQUFRLEVBQUVYLGlCQUFpQixDQUFDMUQsU0FBbEIsS0FBZ0MsQ0FEOUM7QUFFSSxTQUFLLEVBQUU7QUFBQ2tGLFlBQU0sRUFBRSxNQUFUO0FBQWlCQyxhQUFPLEVBQUUsUUFBMUI7QUFBb0NDLGtCQUFZLEVBQUUsR0FBbEQ7QUFBdURDLGNBQVEsRUFBRTtBQUFqRSxLQUZYO0FBR0ksU0FBSyxFQUFFLFdBSFg7QUFJSSxXQUFPLEVBQUUsV0FKYjtBQUtJLFdBQU8sRUFBRSxtQkFBTTtBQUNidkIsZ0NBQTBCLENBQUN3QixJQUEzQjtBQUNELEtBUEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVNHakIsMERBQUUsQ0FBQyxLQUFELENBVEwsQ0FGRixDQTFGSyxFQXdHTCxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF4R0ssQ0FBUDtBQTBHRCxDQTFITTs7R0FBTWpCLFk7VUFDSUUscUQsRUFFa0RDLG9FLEVBSW5CQSxvRTs7O09BUG5DSCxZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxncm91cFByb2R1Y3RcXFtpZF0uanMuNmM2MzI1MTk0NGY2ODE0NGViYmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTdGFyUm91bmRlZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1N0YXJSb3VuZGVkJ1xyXG5pbXBvcnQgU3RhckJvcmRlclJvdW5kZWRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TdGFyQm9yZGVyUm91bmRlZCdcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQge21vZGVsRmFjdG9yeX0gZnJvbSAnLi4vLi4vTW9kZWxBY3Rpb24vbW9kZWxVdGlsJ1xyXG5pbXBvcnQge1xyXG4gIEdyb3VwT3JkZXJJdGVtSW5wdXQsXHJcbiAgR3JvdXBRdWV1ZSxcclxuICBHcm91cFF1ZXVlSXRlbUlucHV0LFxyXG4gIE9yZGVySW5mb0l0ZW1JbnB1dCxcclxuICBQcm9kdWN0XHJcbn0gZnJvbSAnLi4vLi4vZ3JhcGhxbFR5cGVzL3R5cGVzJ1xyXG5pbXBvcnQge2RvY30gZnJvbSAnLi4vLi4vZ3JhcGhxbFR5cGVzL2RvYydcclxuaW1wb3J0IHt1c2VTdG9yZU1vZGVsfSBmcm9tICcuLi8uLi9Nb2RlbEFjdGlvbi91c2VTdG9yZSdcclxuaW1wb3J0IHtkZWFsTW9uZXksIGZwTWVyZ2VQcmV9IGZyb20gJy4uLy4uL3Rvb2xzL3V0aWxzJ1xyXG5pbXBvcnQgQ3VzQ2Fyb3VzZWwgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Td2lwZS9Td2lwZSdcclxuaW1wb3J0IHtIZWFkZXJUaXRsZX0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9IZWFkZXJUaXRsZS9IZWFkZXJUaXRsZSdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHtsc30gZnJvbSAnLi4vLi4vdG9vbHMvZGVhbEtleSdcclxuaW1wb3J0IHttcFN0eWxlfSBmcm9tICcuLi8uLi9zdHlsZS9jb21tb24nXHJcbmltcG9ydCB7Z3JleX0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzJ1xyXG5pbXBvcnQge0J1dHRvbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCB7R3JvdXBPcmRlclBhZ2UsIGdyb3VwT3JkZXJQYWdlTW9kZWx9IGZyb20gJy4vZ3JvdXBPcmRlclBhZ2UnXHJcblxyXG5leHBvcnQgY29uc3QgZ3JvdXBQcm9kdWN0TW9kZWwgPSBtb2RlbEZhY3RvcnkoJ2dyb3VwUHJvZHVjdE1vZGVsJywge1xyXG4gIHByb2R1Y3Q6IHt9IGFzIFByb2R1Y3QsXHJcbiAgZ3JvdXBRdWV1ZUxpc3Q6IFtdIGFzIEdyb3VwUXVldWVbXSxcclxuICBzZWxlY3ROdW06IDAsXHJcbiAgc2VsZWN0UXVldWVJZDogJycsXHJcbiAgbnVtRGlzY291bnQ6IDEsXHJcbiAgZ3JvdXBEaXNjb3VudDogMSxcclxufSwge1xyXG4gIGdldERhdGE6IGFzeW5jICh2YWx1ZTogc3RyaW5nLCBvcHRpb24pID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IG9wdGlvbi5xdWVyeShkb2MucHJvZHVjdExpc3RCeUlkcywge1xyXG4gICAgICBpZHM6IFt2YWx1ZV0sXHJcbiAgICB9KVxyXG4gICAgY29uc3QgZ3JvdXBRdWV1ZUxpc3QgPSBhd2FpdCBvcHRpb24ucXVlcnkoZG9jLmdyb3VwUXVldWVMaXN0LCB7XHJcbiAgICAgIGdyb3VwUXVldWVJdGVtSW5wdXQ6IHtcclxuICAgICAgICBwcm9kdWN0OiB7XHJcbiAgICAgICAgICBpZDogdmFsdWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSBhcyBHcm91cFF1ZXVlSXRlbUlucHV0LFxyXG4gICAgfSlcclxuICAgIG9wdGlvbi5zZXREYXRhKGZwTWVyZ2VQcmUoe1xyXG4gICAgICBwcm9kdWN0OiByZXM/LnByb2R1Y3RMaXN0QnlJZHM/Lmxpc3RbMF0gPz8ge30sXHJcbiAgICAgIGdyb3VwUXVldWVMaXN0OiBncm91cFF1ZXVlTGlzdD8uZ3JvdXBRdWV1ZUxpc3Q/LnNvcnQoKGE6IEdyb3VwUXVldWUsIGI6IEdyb3VwUXVldWUpID0+IChhLnN1bUZpbGxBbW91bnQgPz8gMCkgLSBiLnN1bUZpbGxBbW91bnQpID8/IFtdLFxyXG4gICAgfSkpXHJcbiAgfSxcclxuICB1cGRhdGVTZWxlY3ROdW06ICh2YWx1ZTogbnVtYmVyLCBvcHRpb24pID0+IHtcclxuICAgIG9wdGlvbi5zZXREYXRhKGZwTWVyZ2VQcmUodmFsdWUgPT09IG9wdGlvbi5kYXRhLnNlbGVjdE51bSA/IHtcclxuICAgICAgc2VsZWN0TnVtOiAwLFxyXG4gICAgICBzZWxlY3RRdWV1ZUlkOiAnJyxcclxuICAgIH0gOiB7XHJcbiAgICAgIHNlbGVjdE51bTogdmFsdWUsXHJcbiAgICAgIHNlbGVjdFF1ZXVlSWQ6IG9wdGlvbi5kYXRhLmdyb3VwUXVldWVMaXN0LnJldmVyc2UoKT8uZmluZCh2ID0+IHYuc3VtRmlsbEFtb3VudCArIHZhbHVlIDw9IChvcHRpb24uZGF0YT8ucHJvZHVjdD8uZ3JvdXBQcmVjaXNpb24gPz8gMCkpPy5pZCA/PyAnJyxcclxuICAgIH0pKVxyXG4gIH0sXHJcbiAgc3VibWl0OiBhc3luYyAoe29yZGVySW5mb0l0ZW1JbnB1dH06IHsgb3JkZXJJbmZvSXRlbUlucHV0OiBPcmRlckluZm9JdGVtSW5wdXQgfSwgb3B0aW9uKSA9PiB7XHJcbiAgICBvcHRpb24ubXV0YXRlKGRvYy5zYXZlR3JvdXBPcmRlciwge1xyXG4gICAgICBvcmRlckluZm9JdGVtSW5wdXQ6IHtcclxuICAgICAgICAgIC4uLm9yZGVySW5mb0l0ZW1JbnB1dCxcclxuICAgICAgfSBhcyBPcmRlckluZm9JdGVtSW5wdXQsXHJcbiAgICAgIGdyb3VwT3JkZXJJdGVtSW5wdXQ6IHtcclxuICAgICAgICBvcmRlckdyb3VwQW1vdW50OiBvcHRpb24uZGF0YS5zZWxlY3ROdW0sXHJcbiAgICAgIH0gYXMgR3JvdXBPcmRlckl0ZW1JbnB1dCxcclxuICAgICAgZ3JvdXBRdWV1ZUl0ZW1JbnB1dDoge1xyXG4gICAgICAgIHByb2R1Y3Q6IG9wdGlvbi5kYXRhLnByb2R1Y3QsXHJcbiAgICAgICAgLi4uKG9wdGlvbi5kYXRhLnNlbGVjdFF1ZXVlSWQgPyB7aWQ6IG9wdGlvbi5kYXRhLnNlbGVjdFF1ZXVlSWR9IDoge30pLFxyXG4gICAgICB9IGFzIEdyb3VwUXVldWVJdGVtSW5wdXQsXHJcbiAgICB9KVxyXG4gIH0sXHJcbn0pXHJcblxyXG5jb25zdCBQcmljZVJlZCA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZDogJHttcFN0eWxlLnJlZH07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTIwcHg7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMzBweCk7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICA+IG1haW4ge1xyXG4gICAgZ3JpZC1hcmVhOiAxLzEvMy8yO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgPiBzcGFuIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcbmNvbnN0IE5hbWUgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDE2cHggMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICA+IG1haW4ge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICB9XHJcbiAgPiBzZWN0aW9uIHtcclxuICAgID4gc3BhbiB7XHJcbiAgICAgIHBhZGRpbmc6IDAgNHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAke2dyZXlbJzcwMCddfTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGJvdHRvbTogLTRweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBZZWxsb3dTdGFyID0gKCkgPT4gPFN0YXJSb3VuZGVkSWNvbiBmb250U2l6ZT17J3NtYWxsJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tjb2xvcjogJyNGREQzMzQnfX0vPlxyXG5cclxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaGVhZGVyYFxyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuYFxyXG5jb25zdCBHcm91cFF1ZXVlQm94ID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAxNnB4O1xyXG5gXHJcblxyXG5jb25zdCBTbWFydE1hdGNoID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAxNnB4IDE2cHggOTBweDtcclxuICA+IHNlY3Rpb24ge1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gID4gbWFpbiB7XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBQcmljZSA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgPiBtYWluIHtcclxuICAgIC8vZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gID4gbWFpbiwgc2VjdGlvbiB7XHJcbiAgICA+ICoge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBTdWJtaXQgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgJHttcFN0eWxlLnJlZH07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBib3gtc2hhZG93OiAke21wU3R5bGUuc2hhZG93WycxJ119O1xyXG4gID4gYXNpZGUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgY29sb3I6ICR7bXBTdHlsZS5yZWR9O1xyXG4gIH1cclxuYFxyXG5jb25zdCBHcm91cFF1ZXVlTGlzdEJveCA9IHN0eWxlZC5kaXY8e3NlbGVjdDogYm9vbGVhbn0+YFxyXG4gIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJhY2tncm91bmQ6ICR7cHJvcCA9PiBwcm9wLnNlbGVjdCA/IG1wU3R5bGUucmVkIDogZ3JleVsnMjAwJ119O1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgR3JvdXBQcm9kdWN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgaWQgPSAocm91dGVyLnF1ZXJ5Py5pZCBhcyBzdHJpbmcpID8/ICcnXHJcbiAgY29uc3Qge2FjdGlvbnM6IGFjdGlvbnNHcm91cFByb2R1Y3QsIHN0YXRlOiBzdGF0ZUdyb3VwUHJvZHVjdH0gPSB1c2VTdG9yZU1vZGVsKGdyb3VwUHJvZHVjdE1vZGVsKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhY3Rpb25zR3JvdXBQcm9kdWN0LmdldERhdGEoaWQpXHJcbiAgfSwgW2lkXSlcclxuICBjb25zdCB7YWN0aW9uczogYWN0aW9uc0dyb3VwT3JkZXJQYWdlTW9kZWx9ID0gdXNlU3RvcmVNb2RlbChncm91cE9yZGVyUGFnZU1vZGVsKVxyXG5cclxuICBjb25zdCBwcm9kdWN0ID0gc3RhdGVHcm91cFByb2R1Y3QucHJvZHVjdFxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBhY3Rpb25zR3JvdXBQcm9kdWN0LnVwZGF0ZVNlbGVjdE51bSgyKVxyXG4gIC8vICAgYWN0aW9uc0dyb3VwT3JkZXJQYWdlTW9kZWwub3BlbigpXHJcbiAgLy8gfSwgW10pXHJcblxyXG4gIGNvbnNvbGUubG9nKHN0YXRlR3JvdXBQcm9kdWN0Lmdyb3VwUXVldWVMaXN0KVxyXG4gIHJldHVybiA8ZGl2PlxyXG4gICAgPEhlYWRlclRpdGxlXHJcbiAgICAgICAgdGl0bGU9eyfkuqflk4Hor6bmg4UnfVxyXG4gICAgLz5cclxuICAgIDxDdXNDYXJvdXNlbFxyXG4gICAgICAgIGhlaWdodD17JzI0MHB4J31cclxuICAgICAgICBkYXRhTGlzdD17cHJvZHVjdD8uaW1nPy5tYXAodiA9PiAoe1xyXG4gICAgICAgICAgLi4udixcclxuICAgICAgICAgIGltZ1VybDogdj8udXJsLFxyXG4gICAgICAgIH0pKSBhcyBbXX1cclxuICAgIC8+XHJcbiAgICA8UHJpY2VSZWQ+XHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgIHtscygn5Z+65YeG5Lu35qC8Jyl9XHJcbiAgICAgICAgPHNwYW4+e2RlYWxNb25leShwcm9kdWN0LnByaWNlT3V0KX0ve3Byb2R1Y3QucGFja2luZ1VuaXRTdHJpbmd9PC9zcGFuPlxyXG4gICAgICA8L21haW4+XHJcbiAgICAgIDxhc2lkZT57bHMoJ+W3suaIkOWboicpfXtzdGF0ZUdyb3VwUHJvZHVjdC5ncm91cFF1ZXVlTGlzdC5maWx0ZXIodiA9PiB2LnN1bUZpbGxBbW91bnQgPT09IHByb2R1Y3Q/Lmdyb3VwUHJlY2lzaW9uKS5sZW5ndGh9e2xzKCfljZUnKX08L2FzaWRlPlxyXG4gICAgICA8YXNpZGU+e2xzKCfmi7zlm6LkuK0nKX17c3RhdGVHcm91cFByb2R1Y3QuZ3JvdXBRdWV1ZUxpc3QuZmlsdGVyKHYgPT4gKHYuc3VtRmlsbEFtb3VudCA/PyAwKSA8IChwcm9kdWN0Py5ncm91cFByZWNpc2lvbiA/PyAwKSkubGVuZ3RofXtscygn5Y2VJyl9PC9hc2lkZT5cclxuICAgIDwvUHJpY2VSZWQ+XHJcbiAgICA8TmFtZT5cclxuICAgICAgPG1haW4+e3Byb2R1Y3QubmFtZX08L21haW4+XHJcbiAgICAgIDxzZWN0aW9uPntwcm9kdWN0Lmdyb3VwUmVtYXJrfS97cHJvZHVjdC5ncm91cEFtb3VudH17cHJvZHVjdC5ncm91cEFtb3VudFVuaXRTdHJpbmd9PGJyLz57bHMoJ+WIhuWboueyvuW6picpfVxyXG4gICAgICAgIDxzcGFuPntbLi4uQXJyYXkocHJvZHVjdC5ncm91cFByZWNpc2lvbildLm1hcCgodiwgaSkgPT4gaSkubWFwKHZhbHVlID0+XHJcbiAgICAgICAgICAgIDxZZWxsb3dTdGFyIGtleT17dmFsdWV9Lz4pfTwvc3Bhbj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9OYW1lPlxyXG4gICAgPEdyb3VwUXVldWVCb3g+XHJcbiAgICAgIDxUaXRsZT57bHMoJ+aLvOWbouS4rScpfTwvVGl0bGU+XHJcbiAgICAgIHtzdGF0ZUdyb3VwUHJvZHVjdC5ncm91cFF1ZXVlTGlzdC5tYXAoZ3JvdXBRdWV1ZSA9PiA8R3JvdXBRdWV1ZUxpc3RCb3hcclxuICAgICAgICAgIHNlbGVjdD17Z3JvdXBRdWV1ZS5pZCA9PT0gc3RhdGVHcm91cFByb2R1Y3Quc2VsZWN0UXVldWVJZH1cclxuICAgICAgPlxyXG4gICAgICAgIDxhc2lkZT5cclxuICAgICAgICAgIHtbLi4uQXJyYXkocHJvZHVjdC5ncm91cFByZWNpc2lvbildLm1hcCgodiwgaSkgPT4gaSkubWFwKHZhbHVlID0+IHZhbHVlICsgMSA+IChncm91cFF1ZXVlLnN1bUZpbGxBbW91bnQgPz8gMCkgP1xyXG4gICAgICAgICAgICAgIDxTdGFyQm9yZGVyUm91bmRlZEljb25cclxuICAgICAgICAgICAgICAgICAga2V5PXtgY2xpY2tTdGFyJHt2YWx1ZX1gfVxyXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZT17J2xhcmdlJ31cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYWN0aW9uc0dyb3VwUHJvZHVjdC51cGRhdGVTZWxlY3ROdW0odmFsdWUgKyAxKX1cclxuICAgICAgICAgICAgICAvPiA6IDxTdGFyUm91bmRlZEljb25cclxuICAgICAgICAgICAgICAgICAga2V5PXtgY2xpY2tTdGFyJHt2YWx1ZX1gfVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e2NvbG9yOiAnI0ZERDMzNCd9fVxyXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZT17J2xhcmdlJ31cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYWN0aW9uc0dyb3VwUHJvZHVjdC51cGRhdGVTZWxlY3ROdW0odmFsdWUgKyAxKX1cclxuICAgICAgICAgICAgICAvPil9XHJcbiAgICAgICAgPC9hc2lkZT5cclxuICAgICAgPC9Hcm91cFF1ZXVlTGlzdEJveD4pfVxyXG4gICAgPC9Hcm91cFF1ZXVlQm94PlxyXG4gICAgPFNtYXJ0TWF0Y2g+XHJcbiAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgPFRpdGxlPntscygn5pm66IO95Yy56YWNJyl9PC9UaXRsZT5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgIHtscygn6K+354K55Ye7Jyl9XHJcbiAgICAgICAgPFN0YXJCb3JkZXJSb3VuZGVkSWNvbi8+XHJcbiAgICAgICAge2xzKCfnoa7lrprmgqjpnIDopoHnmoTku73mlbAnKX1cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICB7Wy4uLkFycmF5KHByb2R1Y3QuZ3JvdXBQcmVjaXNpb24pXS5tYXAoKHYsIGkpID0+IGkpLm1hcCh2YWx1ZSA9PiB2YWx1ZSArIDEgPiBzdGF0ZUdyb3VwUHJvZHVjdC5zZWxlY3ROdW0gP1xyXG4gICAgICAgICAgICA8U3RhckJvcmRlclJvdW5kZWRJY29uXHJcbiAgICAgICAgICAgICAgICBrZXk9e2BjbGlja1N0YXIke3ZhbHVlfWB9XHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZT17J2xhcmdlJ31cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFjdGlvbnNHcm91cFByb2R1Y3QudXBkYXRlU2VsZWN0TnVtKHZhbHVlICsgMSl9XHJcbiAgICAgICAgICAgIC8+IDogPFN0YXJSb3VuZGVkSWNvblxyXG4gICAgICAgICAgICAgICAga2V5PXtgY2xpY2tTdGFyJHt2YWx1ZX1gfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tjb2xvcjogJyNGREQzMzQnfX1cclxuICAgICAgICAgICAgICAgIGZvbnRTaXplPXsnbGFyZ2UnfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYWN0aW9uc0dyb3VwUHJvZHVjdC51cGRhdGVTZWxlY3ROdW0odmFsdWUgKyAxKX1cclxuICAgICAgICAgICAgLz4pfVxyXG4gICAgICA8L21haW4+XHJcbiAgICAgIDxQcmljZT5cclxuICAgICAgICA8bWFpbj5cclxuICAgICAgICAgIDxoZWFkZXI+e2RlYWxNb25leSgocHJvZHVjdC5wcmljZU91dCA/PyAwKSAqIHN0YXRlR3JvdXBQcm9kdWN0LnNlbGVjdE51bSAqIHN0YXRlR3JvdXBQcm9kdWN0Lm51bURpc2NvdW50ICogc3RhdGVHcm91cFByb2R1Y3QuZ3JvdXBEaXNjb3VudCl9PC9oZWFkZXI+XHJcbiAgICAgICAgICA8Zm9vdGVyPntscygn5oqY5ZCO5Lu35qC8Jyl9PC9mb290ZXI+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgICAgIDxkaXY+PTwvZGl2PlxyXG4gICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgPGhlYWRlcj57ZGVhbE1vbmV5KChwcm9kdWN0LnByaWNlT3V0ID8/IDApICogc3RhdGVHcm91cFByb2R1Y3Quc2VsZWN0TnVtKX08L2hlYWRlcj5cclxuICAgICAgICAgIDxmb290ZXI+e2xzKCfln7rlh4bku7fmoLwnKX08L2Zvb3Rlcj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPGRpdj54PC9kaXY+XHJcbiAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICA8aGVhZGVyPntzdGF0ZUdyb3VwUHJvZHVjdC5udW1EaXNjb3VudH08L2hlYWRlcj5cclxuICAgICAgICAgIDxmb290ZXI+e2xzKCfku73mlbDmipjmiaMnKX08L2Zvb3Rlcj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPGRpdj54PC9kaXY+XHJcbiAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICA8aGVhZGVyPntzdGF0ZUdyb3VwUHJvZHVjdC5ncm91cERpc2NvdW50fTwvaGVhZGVyPlxyXG4gICAgICAgICAgPGZvb3Rlcj57bHMoJ+aIkOWbouaKmOS4iuaKmCcpfTwvZm9vdGVyPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPC9QcmljZT5cclxuICAgIDwvU21hcnRNYXRjaD5cclxuICAgIDxTdWJtaXQ+XHJcbiAgICAgIDxhc2lkZT57bHMoJ+mAieaLqeS6hicpfXtzdGF0ZUdyb3VwUHJvZHVjdC5zZWxlY3ROdW19e2xzKCfku70nKX08L2FzaWRlPlxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBkaXNhYmxlZD17c3RhdGVHcm91cFByb2R1Y3Quc2VsZWN0TnVtID09PSAwfVxyXG4gICAgICAgICAgc3R5bGU9e3toZWlnaHQ6ICcxMDAlJywgcGFkZGluZzogJzAgMzJweCcsIGJvcmRlclJhZGl1czogJzAnLCBmb250U2l6ZTogJzE4cHgnfX1cclxuICAgICAgICAgIGNvbG9yPXsnc2Vjb25kYXJ5J31cclxuICAgICAgICAgIHZhcmlhbnQ9eydjb250YWluZWQnfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBhY3Rpb25zR3JvdXBPcmRlclBhZ2VNb2RlbC5vcGVuKClcclxuICAgICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7bHMoJ+WOu+e7k+eulycpfVxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgIDwvU3VibWl0PlxyXG4gICAgPEdyb3VwT3JkZXJQYWdlLz5cclxuICA8L2Rpdj5cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9