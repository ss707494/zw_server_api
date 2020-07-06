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
    var _option$data$groupQue, _option$data$groupQue2, _option$data$groupQue3;

    option.setData(Object(_tools_utils__WEBPACK_IMPORTED_MODULE_11__["fpMergePre"])(value === option.data.selectNum ? {
      selectNum: 0,
      selectQueueId: ''
    } : {
      selectNum: value,
      selectQueueId: (_option$data$groupQue = (_option$data$groupQue2 = option.data.groupQueueList.reverse()) === null || _option$data$groupQue2 === void 0 ? void 0 : (_option$data$groupQue3 = _option$data$groupQue2.find(function (v) {
        var _v$sumFillAmount, _option$data$product$, _option$data, _option$data$product;

        return ((_v$sumFillAmount = v.sumFillAmount) !== null && _v$sumFillAmount !== void 0 ? _v$sumFillAmount : 0) + value <= ((_option$data$product$ = (_option$data = option.data) === null || _option$data === void 0 ? void 0 : (_option$data$product = _option$data.product) === null || _option$data$product === void 0 ? void 0 : _option$data$product.groupPrecision) !== null && _option$data$product$ !== void 0 ? _option$data$product$ : 0);
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
      lineNumber: 189,
      columnNumber: 10
    }
  }, __jsx(_components_HeaderTitle_HeaderTitle__WEBPACK_IMPORTED_MODULE_13__["HeaderTitle"], {
    title: '产品详情',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
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
      lineNumber: 193,
      columnNumber: 5
    }
  }), __jsx(PriceRed, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 5
    }
  }, __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('基准价格'), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 9
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_11__["dealMoney"])(product.priceOut), "/", product.packingUnitString)), __jsx("aside", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('已成团'), stateGroupProduct.groupQueueList.filter(function (v) {
    return v.sumFillAmount === (product === null || product === void 0 ? void 0 : product.groupPrecision);
  }).length, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('单')), __jsx("aside", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('拼团中'), stateGroupProduct.groupQueueList.filter(function (v) {
    var _v$sumFillAmount2, _product$groupPrecisi;

    return ((_v$sumFillAmount2 = v.sumFillAmount) !== null && _v$sumFillAmount2 !== void 0 ? _v$sumFillAmount2 : 0) < ((_product$groupPrecisi = product === null || product === void 0 ? void 0 : product.groupPrecision) !== null && _product$groupPrecisi !== void 0 ? _product$groupPrecisi : 0);
  }).length, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('单'))), __jsx(Name, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 5
    }
  }, __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 7
    }
  }, product.name), __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 7
    }
  }, product.groupRemark, "/", product.groupAmount, product.groupAmountUnitString, __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 90
    }
  }), Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('分团精度'), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
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
        lineNumber: 212,
        columnNumber: 13
      }
    });
  })))), __jsx(GroupQueueBox, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 5
    }
  }, __jsx(Title, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('拼团中')), stateGroupProduct.groupQueueList.map(function (groupQueue) {
    return __jsx(GroupQueueListBox, {
      select: groupQueue.id === stateGroupProduct.selectQueueId,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 59
      }
    }, __jsx("aside", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
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
        style: {
          color: '#fff'
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222,
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
          lineNumber: 227,
          columnNumber: 20
        }
      });
    })));
  })), __jsx(SmartMatch, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 5
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 7
    }
  }, __jsx(Title, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 9
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('智能匹配'))), __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('请点击'), __jsx(_material_ui_icons_StarBorderRounded__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 9
    }
  }), Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('确定您需要的份数')), __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
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
        lineNumber: 247,
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
        lineNumber: 251,
        columnNumber: 18
      }
    });
  })), __jsx(Price, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 7
    }
  }, __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 9
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 11
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_11__["dealMoney"])(((_product$priceOut = product.priceOut) !== null && _product$priceOut !== void 0 ? _product$priceOut : 0) * stateGroupProduct.selectNum * stateGroupProduct.numDiscount * stateGroupProduct.groupDiscount)), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('折后价格'))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 9
    }
  }, "="), __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 9
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 11
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_11__["dealMoney"])(((_product$priceOut2 = product.priceOut) !== null && _product$priceOut2 !== void 0 ? _product$priceOut2 : 0) * stateGroupProduct.selectNum)), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('基准价格'))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 9
    }
  }, "x"), __jsx("section", {
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
  }, stateGroupProduct.numDiscount), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('份数折扣'))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 9
    }
  }, "x"), __jsx("section", {
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
  }, stateGroupProduct.groupDiscount), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('成团折上折'))))), __jsx(Submit, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 5
    }
  }, __jsx("aside", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
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
      lineNumber: 282,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('去结算'))), __jsx(_groupOrderPage__WEBPACK_IMPORTED_MODULE_19__["GroupOrderPage"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy92aWV3L2dyb3VwUHJvZHVjdC8udHN4Il0sIm5hbWVzIjpbImdyb3VwUHJvZHVjdE1vZGVsIiwibW9kZWxGYWN0b3J5IiwicHJvZHVjdCIsImdyb3VwUXVldWVMaXN0Iiwic2VsZWN0TnVtIiwic2VsZWN0UXVldWVJZCIsIm51bURpc2NvdW50IiwiZ3JvdXBEaXNjb3VudCIsImdldERhdGEiLCJ2YWx1ZSIsIm9wdGlvbiIsInF1ZXJ5IiwiZG9jIiwicHJvZHVjdExpc3RCeUlkcyIsImlkcyIsInJlcyIsImdyb3VwUXVldWVJdGVtSW5wdXQiLCJpZCIsInNldERhdGEiLCJmcE1lcmdlUHJlIiwibGlzdCIsInNvcnQiLCJhIiwiYiIsInN1bUZpbGxBbW91bnQiLCJ1cGRhdGVTZWxlY3ROdW0iLCJkYXRhIiwicmV2ZXJzZSIsImZpbmQiLCJ2IiwiZ3JvdXBQcmVjaXNpb24iLCJzdWJtaXQiLCJvcmRlckluZm9JdGVtSW5wdXQiLCJtdXRhdGUiLCJzYXZlR3JvdXBPcmRlciIsImdyb3VwT3JkZXJJdGVtSW5wdXQiLCJvcmRlckdyb3VwQW1vdW50IiwiUHJpY2VSZWQiLCJzdHlsZWQiLCJkaXYiLCJtcFN0eWxlIiwicmVkIiwiTmFtZSIsImdyZXkiLCJZZWxsb3dTdGFyIiwiY29sb3IiLCJUaXRsZSIsImhlYWRlciIsIkdyb3VwUXVldWVCb3giLCJTbWFydE1hdGNoIiwiUHJpY2UiLCJTdWJtaXQiLCJzaGFkb3ciLCJHcm91cFF1ZXVlTGlzdEJveCIsInByb3AiLCJzZWxlY3QiLCJHcm91cFByb2R1Y3QiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdG9yZU1vZGVsIiwiYWN0aW9uc0dyb3VwUHJvZHVjdCIsImFjdGlvbnMiLCJzdGF0ZUdyb3VwUHJvZHVjdCIsInN0YXRlIiwidXNlRWZmZWN0IiwiZ3JvdXBPcmRlclBhZ2VNb2RlbCIsImFjdGlvbnNHcm91cE9yZGVyUGFnZU1vZGVsIiwiY29uc29sZSIsImxvZyIsImltZyIsIm1hcCIsImltZ1VybCIsInVybCIsImxzIiwiZGVhbE1vbmV5IiwicHJpY2VPdXQiLCJwYWNraW5nVW5pdFN0cmluZyIsImZpbHRlciIsImxlbmd0aCIsIm5hbWUiLCJncm91cFJlbWFyayIsImdyb3VwQW1vdW50IiwiZ3JvdXBBbW91bnRVbml0U3RyaW5nIiwiQXJyYXkiLCJpIiwiZ3JvdXBRdWV1ZSIsImhlaWdodCIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJmb250U2l6ZSIsIm9wZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxpQkFBaUIsR0FBR0MsMkVBQVksQ0FBQyxtQkFBRCxFQUFzQjtBQUNqRUMsU0FBTyxFQUFFLEVBRHdEO0FBRWpFQyxnQkFBYyxFQUFFLEVBRmlEO0FBR2pFQyxXQUFTLEVBQUUsQ0FIc0Q7QUFJakVDLGVBQWEsRUFBRSxFQUprRDtBQUtqRUMsYUFBVyxFQUFFLENBTG9EO0FBTWpFQyxlQUFhLEVBQUU7QUFOa0QsQ0FBdEIsRUFPMUM7QUFDREMsU0FBTztBQUFBLG9NQUFFLGlCQUFPQyxLQUFQLEVBQXNCQyxNQUF0QjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNXQSxNQUFNLENBQUNDLEtBQVAsQ0FBYUMscURBQUcsQ0FBQ0MsZ0JBQWpCLEVBQW1DO0FBQ25EQyxtQkFBRyxFQUFFLENBQUNMLEtBQUQ7QUFEOEMsZUFBbkMsQ0FEWDs7QUFBQTtBQUNETSxpQkFEQztBQUFBO0FBQUEscUJBSXNCTCxNQUFNLENBQUNDLEtBQVAsQ0FBYUMscURBQUcsQ0FBQ1QsY0FBakIsRUFBaUM7QUFDNURhLG1DQUFtQixFQUFFO0FBQ25CZCx5QkFBTyxFQUFFO0FBQ1BlLHNCQUFFLEVBQUVSO0FBREc7QUFE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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVNrRSwwREFBRSxDQUFDLE9BQUQsQ0FBWCxDQUZGLENBaEJGLENBdEJGLENBL0NLLEVBMkZMLE1BQUMsTUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRQSwwREFBRSxDQUFDLEtBQUQsQ0FBVixFQUFtQlgsaUJBQWlCLENBQUMxRCxTQUFyQyxFQUFnRHFFLDBEQUFFLENBQUMsR0FBRCxDQUFsRCxDQURGLEVBRUUsTUFBQyx5REFBRDtBQUNJLFlBQVEsRUFBRVgsaUJBQWlCLENBQUMxRCxTQUFsQixLQUFnQyxDQUQ5QztBQUVJLFNBQUssRUFBRTtBQUFDa0YsWUFBTSxFQUFFLE1BQVQ7QUFBaUJDLGFBQU8sRUFBRSxRQUExQjtBQUFvQ0Msa0JBQVksRUFBRSxHQUFsRDtBQUF1REMsY0FBUSxFQUFFO0FBQWpFLEtBRlg7QUFHSSxTQUFLLEVBQUUsV0FIWDtBQUlJLFdBQU8sRUFBRSxXQUpiO0FBS0ksV0FBTyxFQUFFLG1CQUFNO0FBQ2J2QixnQ0FBMEIsQ0FBQ3dCLElBQTNCO0FBQ0QsS0FQTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBU0dqQiwwREFBRSxDQUFDLEtBQUQsQ0FUTCxDQUZGLENBM0ZLLEVBeUdMLE1BQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXpHSyxDQUFQO0FBMkdELENBM0hNOztHQUFNakIsWTtVQUNJRSxxRCxFQUVrREMsb0UsRUFJbkJBLG9FOzs7T0FQbkNILFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGdyb3VwUHJvZHVjdFxcW2lkXS5qcy44ZTkxYmY5MTI3MzFhNmM2ZWE3MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFN0YXJSb3VuZGVkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU3RhclJvdW5kZWQnXHJcbmltcG9ydCBTdGFyQm9yZGVyUm91bmRlZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1N0YXJCb3JkZXJSb3VuZGVkJ1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7bW9kZWxGYWN0b3J5fSBmcm9tICcuLi8uLi9Nb2RlbEFjdGlvbi9tb2RlbFV0aWwnXHJcbmltcG9ydCB7XHJcbiAgR3JvdXBPcmRlckl0ZW1JbnB1dCxcclxuICBHcm91cFF1ZXVlLFxyXG4gIEdyb3VwUXVldWVJdGVtSW5wdXQsXHJcbiAgT3JkZXJJbmZvSXRlbUlucHV0LFxyXG4gIFByb2R1Y3RcclxufSBmcm9tICcuLi8uLi9ncmFwaHFsVHlwZXMvdHlwZXMnXHJcbmltcG9ydCB7ZG9jfSBmcm9tICcuLi8uLi9ncmFwaHFsVHlwZXMvZG9jJ1xyXG5pbXBvcnQge3VzZVN0b3JlTW9kZWx9IGZyb20gJy4uLy4uL01vZGVsQWN0aW9uL3VzZVN0b3JlJ1xyXG5pbXBvcnQge2RlYWxNb25leSwgZnBNZXJnZVByZX0gZnJvbSAnLi4vLi4vdG9vbHMvdXRpbHMnXHJcbmltcG9ydCBDdXNDYXJvdXNlbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1N3aXBlL1N3aXBlJ1xyXG5pbXBvcnQge0hlYWRlclRpdGxlfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0hlYWRlclRpdGxlL0hlYWRlclRpdGxlJ1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQge2xzfSBmcm9tICcuLi8uLi90b29scy9kZWFsS2V5J1xyXG5pbXBvcnQge21wU3R5bGV9IGZyb20gJy4uLy4uL3N0eWxlL2NvbW1vbidcclxuaW1wb3J0IHtncmV5fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMnXHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHtHcm91cE9yZGVyUGFnZSwgZ3JvdXBPcmRlclBhZ2VNb2RlbH0gZnJvbSAnLi9ncm91cE9yZGVyUGFnZSdcclxuXHJcbmV4cG9ydCBjb25zdCBncm91cFByb2R1Y3RNb2RlbCA9IG1vZGVsRmFjdG9yeSgnZ3JvdXBQcm9kdWN0TW9kZWwnLCB7XHJcbiAgcHJvZHVjdDoge30gYXMgUHJvZHVjdCxcclxuICBncm91cFF1ZXVlTGlzdDogW10gYXMgR3JvdXBRdWV1ZVtdLFxyXG4gIHNlbGVjdE51bTogMCxcclxuICBzZWxlY3RRdWV1ZUlkOiAnJyxcclxuICBudW1EaXNjb3VudDogMSxcclxuICBncm91cERpc2NvdW50OiAxLFxyXG59LCB7XHJcbiAgZ2V0RGF0YTogYXN5bmMgKHZhbHVlOiBzdHJpbmcsIG9wdGlvbikgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgb3B0aW9uLnF1ZXJ5KGRvYy5wcm9kdWN0TGlzdEJ5SWRzLCB7XHJcbiAgICAgIGlkczogW3ZhbHVlXSxcclxuICAgIH0pXHJcbiAgICBjb25zdCBncm91cFF1ZXVlTGlzdCA9IGF3YWl0IG9wdGlvbi5xdWVyeShkb2MuZ3JvdXBRdWV1ZUxpc3QsIHtcclxuICAgICAgZ3JvdXBRdWV1ZUl0ZW1JbnB1dDoge1xyXG4gICAgICAgIHByb2R1Y3Q6IHtcclxuICAgICAgICAgIGlkOiB2YWx1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9IGFzIEdyb3VwUXVldWVJdGVtSW5wdXQsXHJcbiAgICB9KVxyXG4gICAgb3B0aW9uLnNldERhdGEoZnBNZXJnZVByZSh7XHJcbiAgICAgIHByb2R1Y3Q6IHJlcz8ucHJvZHVjdExpc3RCeUlkcz8ubGlzdFswXSA/PyB7fSxcclxuICAgICAgZ3JvdXBRdWV1ZUxpc3Q6IGdyb3VwUXVldWVMaXN0Py5ncm91cFF1ZXVlTGlzdD8uc29ydCgoYTogR3JvdXBRdWV1ZSwgYjogR3JvdXBRdWV1ZSkgPT4gKGEuc3VtRmlsbEFtb3VudCA/PyAwKSAtIChiLnN1bUZpbGxBbW91bnQgPz8gMCkpID8/IFtdLFxyXG4gICAgfSkpXHJcbiAgfSxcclxuICB1cGRhdGVTZWxlY3ROdW06ICh2YWx1ZTogbnVtYmVyLCBvcHRpb24pID0+IHtcclxuICAgIG9wdGlvbi5zZXREYXRhKGZwTWVyZ2VQcmUodmFsdWUgPT09IG9wdGlvbi5kYXRhLnNlbGVjdE51bSA/IHtcclxuICAgICAgc2VsZWN0TnVtOiAwLFxyXG4gICAgICBzZWxlY3RRdWV1ZUlkOiAnJyxcclxuICAgIH0gOiB7XHJcbiAgICAgIHNlbGVjdE51bTogdmFsdWUsXHJcbiAgICAgIHNlbGVjdFF1ZXVlSWQ6IG9wdGlvbi5kYXRhLmdyb3VwUXVldWVMaXN0LnJldmVyc2UoKT8uZmluZCh2ID0+ICh2LnN1bUZpbGxBbW91bnQgPz8gMCkgKyB2YWx1ZSA8PSAob3B0aW9uLmRhdGE/LnByb2R1Y3Q/Lmdyb3VwUHJlY2lzaW9uID8/IDApKT8uaWQgPz8gJycsXHJcbiAgICB9KSlcclxuICB9LFxyXG4gIHN1Ym1pdDogYXN5bmMgKHtvcmRlckluZm9JdGVtSW5wdXR9OiB7IG9yZGVySW5mb0l0ZW1JbnB1dDogT3JkZXJJbmZvSXRlbUlucHV0IH0sIG9wdGlvbikgPT4ge1xyXG4gICAgb3B0aW9uLm11dGF0ZShkb2Muc2F2ZUdyb3VwT3JkZXIsIHtcclxuICAgICAgb3JkZXJJbmZvSXRlbUlucHV0OiB7XHJcbiAgICAgICAgICAuLi5vcmRlckluZm9JdGVtSW5wdXQsXHJcbiAgICAgIH0gYXMgT3JkZXJJbmZvSXRlbUlucHV0LFxyXG4gICAgICBncm91cE9yZGVySXRlbUlucHV0OiB7XHJcbiAgICAgICAgb3JkZXJHcm91cEFtb3VudDogb3B0aW9uLmRhdGEuc2VsZWN0TnVtLFxyXG4gICAgICB9IGFzIEdyb3VwT3JkZXJJdGVtSW5wdXQsXHJcbiAgICAgIGdyb3VwUXVldWVJdGVtSW5wdXQ6IHtcclxuICAgICAgICBwcm9kdWN0OiBvcHRpb24uZGF0YS5wcm9kdWN0LFxyXG4gICAgICAgIC4uLihvcHRpb24uZGF0YS5zZWxlY3RRdWV1ZUlkID8ge2lkOiBvcHRpb24uZGF0YS5zZWxlY3RRdWV1ZUlkfSA6IHt9KSxcclxuICAgICAgfSBhcyBHcm91cFF1ZXVlSXRlbUlucHV0LFxyXG4gICAgfSlcclxuICB9LFxyXG59KVxyXG5cclxuY29uc3QgUHJpY2VSZWQgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQ6ICR7bXBTdHlsZS5yZWR9O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEyMHB4O1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDMwcHgpO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgPiBtYWluIHtcclxuICAgIGdyaWQtYXJlYTogMS8xLzMvMjtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgID4gc3BhbiB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5jb25zdCBOYW1lID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAxNnB4IDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgPiBtYWluIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgfVxyXG4gID4gc2VjdGlvbiB7XHJcbiAgICA+IHNwYW4ge1xyXG4gICAgICBwYWRkaW5nOiAwIDRweDtcclxuICAgICAgYmFja2dyb3VuZDogJHtncmV5Wyc3MDAnXX07XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBib3R0b206IC00cHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgWWVsbG93U3RhciA9ICgpID0+IDxTdGFyUm91bmRlZEljb24gZm9udFNpemU9eydzbWFsbCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y29sb3I6ICcjRkREMzM0J319Lz5cclxuXHJcbmNvbnN0IFRpdGxlID0gc3R5bGVkLmhlYWRlcmBcclxuICBmb250LXNpemU6IDIwcHg7XHJcbmBcclxuY29uc3QgR3JvdXBRdWV1ZUJveCA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogMTZweDtcclxuYFxyXG5cclxuY29uc3QgU21hcnRNYXRjaCA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogMTZweCAxNnB4IDkwcHg7XHJcbiAgPiBzZWN0aW9uIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICA+IG1haW4ge1xyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgUHJpY2UgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gID4gbWFpbiB7XHJcbiAgICAvL2ZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICA+IG1haW4sIHNlY3Rpb24ge1xyXG4gICAgPiAqIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgU3VibWl0ID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICR7bXBTdHlsZS5yZWR9O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYm94LXNoYWRvdzogJHttcFN0eWxlLnNoYWRvd1snMSddfTtcclxuICA+IGFzaWRlIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAgIGNvbG9yOiAke21wU3R5bGUucmVkfTtcclxuICB9XHJcbmBcclxuY29uc3QgR3JvdXBRdWV1ZUxpc3RCb3ggPSBzdHlsZWQuZGl2PHtzZWxlY3Q6IGJvb2xlYW59PmBcclxuICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBiYWNrZ3JvdW5kOiAke3Byb3AgPT4gcHJvcC5zZWxlY3RcclxuICAgID8gYGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHttcFN0eWxlLnJlZH0sICNGQzczNjEpYCBcclxuICAgIDogZ3JleVsnMjAwJ119O1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgR3JvdXBQcm9kdWN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgaWQgPSAocm91dGVyLnF1ZXJ5Py5pZCBhcyBzdHJpbmcpID8/ICcnXHJcbiAgY29uc3Qge2FjdGlvbnM6IGFjdGlvbnNHcm91cFByb2R1Y3QsIHN0YXRlOiBzdGF0ZUdyb3VwUHJvZHVjdH0gPSB1c2VTdG9yZU1vZGVsKGdyb3VwUHJvZHVjdE1vZGVsKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhY3Rpb25zR3JvdXBQcm9kdWN0LmdldERhdGEoaWQpXHJcbiAgfSwgW2lkXSlcclxuICBjb25zdCB7YWN0aW9uczogYWN0aW9uc0dyb3VwT3JkZXJQYWdlTW9kZWx9ID0gdXNlU3RvcmVNb2RlbChncm91cE9yZGVyUGFnZU1vZGVsKVxyXG5cclxuICBjb25zdCBwcm9kdWN0ID0gc3RhdGVHcm91cFByb2R1Y3QucHJvZHVjdFxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBhY3Rpb25zR3JvdXBQcm9kdWN0LnVwZGF0ZVNlbGVjdE51bSgyKVxyXG4gIC8vICAgYWN0aW9uc0dyb3VwT3JkZXJQYWdlTW9kZWwub3BlbigpXHJcbiAgLy8gfSwgW10pXHJcblxyXG4gIGNvbnNvbGUubG9nKHN0YXRlR3JvdXBQcm9kdWN0Lmdyb3VwUXVldWVMaXN0KVxyXG4gIHJldHVybiA8ZGl2PlxyXG4gICAgPEhlYWRlclRpdGxlXHJcbiAgICAgICAgdGl0bGU9eyfkuqflk4Hor6bmg4UnfVxyXG4gICAgLz5cclxuICAgIDxDdXNDYXJvdXNlbFxyXG4gICAgICAgIGhlaWdodD17JzI0MHB4J31cclxuICAgICAgICBkYXRhTGlzdD17cHJvZHVjdD8uaW1nPy5tYXAodiA9PiAoe1xyXG4gICAgICAgICAgLi4udixcclxuICAgICAgICAgIGltZ1VybDogdj8udXJsLFxyXG4gICAgICAgIH0pKSBhcyBbXX1cclxuICAgIC8+XHJcbiAgICA8UHJpY2VSZWQ+XHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgIHtscygn5Z+65YeG5Lu35qC8Jyl9XHJcbiAgICAgICAgPHNwYW4+e2RlYWxNb25leShwcm9kdWN0LnByaWNlT3V0KX0ve3Byb2R1Y3QucGFja2luZ1VuaXRTdHJpbmd9PC9zcGFuPlxyXG4gICAgICA8L21haW4+XHJcbiAgICAgIDxhc2lkZT57bHMoJ+W3suaIkOWboicpfXtzdGF0ZUdyb3VwUHJvZHVjdC5ncm91cFF1ZXVlTGlzdC5maWx0ZXIodiA9PiB2LnN1bUZpbGxBbW91bnQgPT09IHByb2R1Y3Q/Lmdyb3VwUHJlY2lzaW9uKS5sZW5ndGh9e2xzKCfljZUnKX08L2FzaWRlPlxyXG4gICAgICA8YXNpZGU+e2xzKCfmi7zlm6LkuK0nKX17c3RhdGVHcm91cFByb2R1Y3QuZ3JvdXBRdWV1ZUxpc3QuZmlsdGVyKHYgPT4gKHYuc3VtRmlsbEFtb3VudCA/PyAwKSA8IChwcm9kdWN0Py5ncm91cFByZWNpc2lvbiA/PyAwKSkubGVuZ3RofXtscygn5Y2VJyl9PC9hc2lkZT5cclxuICAgIDwvUHJpY2VSZWQ+XHJcbiAgICA8TmFtZT5cclxuICAgICAgPG1haW4+e3Byb2R1Y3QubmFtZX08L21haW4+XHJcbiAgICAgIDxzZWN0aW9uPntwcm9kdWN0Lmdyb3VwUmVtYXJrfS97cHJvZHVjdC5ncm91cEFtb3VudH17cHJvZHVjdC5ncm91cEFtb3VudFVuaXRTdHJpbmd9PGJyLz57bHMoJ+WIhuWboueyvuW6picpfVxyXG4gICAgICAgIDxzcGFuPntbLi4uQXJyYXkocHJvZHVjdC5ncm91cFByZWNpc2lvbildLm1hcCgodiwgaSkgPT4gaSkubWFwKHZhbHVlID0+XHJcbiAgICAgICAgICAgIDxZZWxsb3dTdGFyIGtleT17dmFsdWV9Lz4pfTwvc3Bhbj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9OYW1lPlxyXG4gICAgPEdyb3VwUXVldWVCb3g+XHJcbiAgICAgIDxUaXRsZT57bHMoJ+aLvOWbouS4rScpfTwvVGl0bGU+XHJcbiAgICAgIHtzdGF0ZUdyb3VwUHJvZHVjdC5ncm91cFF1ZXVlTGlzdC5tYXAoZ3JvdXBRdWV1ZSA9PiA8R3JvdXBRdWV1ZUxpc3RCb3hcclxuICAgICAgICAgIHNlbGVjdD17Z3JvdXBRdWV1ZS5pZCA9PT0gc3RhdGVHcm91cFByb2R1Y3Quc2VsZWN0UXVldWVJZH1cclxuICAgICAgPlxyXG4gICAgICAgIDxhc2lkZT5cclxuICAgICAgICAgIHtbLi4uQXJyYXkocHJvZHVjdC5ncm91cFByZWNpc2lvbildLm1hcCgodiwgaSkgPT4gaSkubWFwKHZhbHVlID0+IHZhbHVlICsgMSA+IChncm91cFF1ZXVlLnN1bUZpbGxBbW91bnQgPz8gMCkgP1xyXG4gICAgICAgICAgICAgIDxTdGFyQm9yZGVyUm91bmRlZEljb25cclxuICAgICAgICAgICAgICAgICAga2V5PXtgY2xpY2tTdGFyJHt2YWx1ZX1gfVxyXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZT17J2xhcmdlJ31cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYWN0aW9uc0dyb3VwUHJvZHVjdC51cGRhdGVTZWxlY3ROdW0odmFsdWUgKyAxKX1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tjb2xvcjogJyNmZmYnfX1cclxuICAgICAgICAgICAgICAvPiA6IDxTdGFyUm91bmRlZEljb25cclxuICAgICAgICAgICAgICAgICAga2V5PXtgY2xpY2tTdGFyJHt2YWx1ZX1gfVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e2NvbG9yOiAnI0ZERDMzNCd9fVxyXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZT17J2xhcmdlJ31cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYWN0aW9uc0dyb3VwUHJvZHVjdC51cGRhdGVTZWxlY3ROdW0odmFsdWUgKyAxKX1cclxuICAgICAgICAgICAgICAvPil9XHJcbiAgICAgICAgPC9hc2lkZT5cclxuICAgICAgPC9Hcm91cFF1ZXVlTGlzdEJveD4pfVxyXG4gICAgPC9Hcm91cFF1ZXVlQm94PlxyXG4gICAgPFNtYXJ0TWF0Y2g+XHJcbiAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgPFRpdGxlPntscygn5pm66IO95Yy56YWNJyl9PC9UaXRsZT5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgIHtscygn6K+354K55Ye7Jyl9XHJcbiAgICAgICAgPFN0YXJCb3JkZXJSb3VuZGVkSWNvbi8+XHJcbiAgICAgICAge2xzKCfnoa7lrprmgqjpnIDopoHnmoTku73mlbAnKX1cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICB7Wy4uLkFycmF5KHByb2R1Y3QuZ3JvdXBQcmVjaXNpb24pXS5tYXAoKHYsIGkpID0+IGkpLm1hcCh2YWx1ZSA9PiB2YWx1ZSArIDEgPiBzdGF0ZUdyb3VwUHJvZHVjdC5zZWxlY3ROdW0gP1xyXG4gICAgICAgICAgICA8U3RhckJvcmRlclJvdW5kZWRJY29uXHJcbiAgICAgICAgICAgICAgICBrZXk9e2BjbGlja1N0YXIke3ZhbHVlfWB9XHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZT17J2xhcmdlJ31cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFjdGlvbnNHcm91cFByb2R1Y3QudXBkYXRlU2VsZWN0TnVtKHZhbHVlICsgMSl9XHJcbiAgICAgICAgICAgIC8+IDogPFN0YXJSb3VuZGVkSWNvblxyXG4gICAgICAgICAgICAgICAga2V5PXtgY2xpY2tTdGFyJHt2YWx1ZX1gfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tjb2xvcjogJyNGREQzMzQnfX1cclxuICAgICAgICAgICAgICAgIGZvbnRTaXplPXsnbGFyZ2UnfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYWN0aW9uc0dyb3VwUHJvZHVjdC51cGRhdGVTZWxlY3ROdW0odmFsdWUgKyAxKX1cclxuICAgICAgICAgICAgLz4pfVxyXG4gICAgICA8L21haW4+XHJcbiAgICAgIDxQcmljZT5cclxuICAgICAgICA8bWFpbj5cclxuICAgICAgICAgIDxoZWFkZXI+e2RlYWxNb25leSgocHJvZHVjdC5wcmljZU91dCA/PyAwKSAqIHN0YXRlR3JvdXBQcm9kdWN0LnNlbGVjdE51bSAqIHN0YXRlR3JvdXBQcm9kdWN0Lm51bURpc2NvdW50ICogc3RhdGVHcm91cFByb2R1Y3QuZ3JvdXBEaXNjb3VudCl9PC9oZWFkZXI+XHJcbiAgICAgICAgICA8Zm9vdGVyPntscygn5oqY5ZCO5Lu35qC8Jyl9PC9mb290ZXI+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgICAgIDxkaXY+PTwvZGl2PlxyXG4gICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgPGhlYWRlcj57ZGVhbE1vbmV5KChwcm9kdWN0LnByaWNlT3V0ID8/IDApICogc3RhdGVHcm91cFByb2R1Y3Quc2VsZWN0TnVtKX08L2hlYWRlcj5cclxuICAgICAgICAgIDxmb290ZXI+e2xzKCfln7rlh4bku7fmoLwnKX08L2Zvb3Rlcj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPGRpdj54PC9kaXY+XHJcbiAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICA8aGVhZGVyPntzdGF0ZUdyb3VwUHJvZHVjdC5udW1EaXNjb3VudH08L2hlYWRlcj5cclxuICAgICAgICAgIDxmb290ZXI+e2xzKCfku73mlbDmipjmiaMnKX08L2Zvb3Rlcj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPGRpdj54PC9kaXY+XHJcbiAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICA8aGVhZGVyPntzdGF0ZUdyb3VwUHJvZHVjdC5ncm91cERpc2NvdW50fTwvaGVhZGVyPlxyXG4gICAgICAgICAgPGZvb3Rlcj57bHMoJ+aIkOWbouaKmOS4iuaKmCcpfTwvZm9vdGVyPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPC9QcmljZT5cclxuICAgIDwvU21hcnRNYXRjaD5cclxuICAgIDxTdWJtaXQ+XHJcbiAgICAgIDxhc2lkZT57bHMoJ+mAieaLqeS6hicpfXtzdGF0ZUdyb3VwUHJvZHVjdC5zZWxlY3ROdW19e2xzKCfku70nKX08L2FzaWRlPlxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBkaXNhYmxlZD17c3RhdGVHcm91cFByb2R1Y3Quc2VsZWN0TnVtID09PSAwfVxyXG4gICAgICAgICAgc3R5bGU9e3toZWlnaHQ6ICcxMDAlJywgcGFkZGluZzogJzAgMzJweCcsIGJvcmRlclJhZGl1czogJzAnLCBmb250U2l6ZTogJzE4cHgnfX1cclxuICAgICAgICAgIGNvbG9yPXsnc2Vjb25kYXJ5J31cclxuICAgICAgICAgIHZhcmlhbnQ9eydjb250YWluZWQnfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBhY3Rpb25zR3JvdXBPcmRlclBhZ2VNb2RlbC5vcGVuKClcclxuICAgICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7bHMoJ+WOu+e7k+eulycpfVxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgIDwvU3VibWl0PlxyXG4gICAgPEdyb3VwT3JkZXJQYWdlLz5cclxuICA8L2Rpdj5cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9