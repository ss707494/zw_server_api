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
          color: groupQueue.id === stateGroupProduct.selectQueueId ? '#fff' : '#000'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy92aWV3L2dyb3VwUHJvZHVjdC8udHN4Il0sIm5hbWVzIjpbImdyb3VwUHJvZHVjdE1vZGVsIiwibW9kZWxGYWN0b3J5IiwicHJvZHVjdCIsImdyb3VwUXVldWVMaXN0Iiwic2VsZWN0TnVtIiwic2VsZWN0UXVldWVJZCIsIm51bURpc2NvdW50IiwiZ3JvdXBEaXNjb3VudCIsImdldERhdGEiLCJ2YWx1ZSIsIm9wdGlvbiIsInF1ZXJ5IiwiZG9jIiwicHJvZHVjdExpc3RCeUlkcyIsImlkcyIsInJlcyIsImdyb3VwUXVldWVJdGVtSW5wdXQiLCJpZCIsInNldERhdGEiLCJmcE1lcmdlUHJlIiwibGlzdCIsInNvcnQiLCJhIiwiYiIsInN1bUZpbGxBbW91bnQiLCJ1cGRhdGVTZWxlY3ROdW0iLCJkYXRhIiwicmV2ZXJzZSIsImZpbmQiLCJ2IiwiZ3JvdXBQcmVjaXNpb24iLCJzdWJtaXQiLCJvcmRlckluZm9JdGVtSW5wdXQiLCJtdXRhdGUiLCJzYXZlR3JvdXBPcmRlciIsImdyb3VwT3JkZXJJdGVtSW5wdXQiLCJvcmRlckdyb3VwQW1vdW50IiwiUHJpY2VSZWQiLCJzdHlsZWQiLCJkaXYiLCJtcFN0eWxlIiwicmVkIiwiTmFtZSIsImdyZXkiLCJZZWxsb3dTdGFyIiwiY29sb3IiLCJUaXRsZSIsImhlYWRlciIsIkdyb3VwUXVldWVCb3giLCJTbWFydE1hdGNoIiwiUHJpY2UiLCJTdWJtaXQiLCJzaGFkb3ciLCJHcm91cFF1ZXVlTGlzdEJveCIsInByb3AiLCJzZWxlY3QiLCJHcm91cFByb2R1Y3QiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdG9yZU1vZGVsIiwiYWN0aW9uc0dyb3VwUHJvZHVjdCIsImFjdGlvbnMiLCJzdGF0ZUdyb3VwUHJvZHVjdCIsInN0YXRlIiwidXNlRWZmZWN0IiwiZ3JvdXBPcmRlclBhZ2VNb2RlbCIsImFjdGlvbnNHcm91cE9yZGVyUGFnZU1vZGVsIiwiY29uc29sZSIsImxvZyIsImltZyIsIm1hcCIsImltZ1VybCIsInVybCIsImxzIiwiZGVhbE1vbmV5IiwicHJpY2VPdXQiLCJwYWNraW5nVW5pdFN0cmluZyIsImZpbHRlciIsImxlbmd0aCIsIm5hbWUiLCJncm91cFJlbWFyayIsImdyb3VwQW1vdW50IiwiZ3JvdXBBbW91bnRVbml0U3RyaW5nIiwiQXJyYXkiLCJpIiwiZ3JvdXBRdWV1ZSIsImhlaWdodCIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJmb250U2l6ZSIsIm9wZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxpQkFBaUIsR0FBR0MsMkVBQVksQ0FBQyxtQkFBRCxFQUFzQjtBQUNqRUMsU0FBTyxFQUFFLEVBRHdEO0FBRWpFQyxnQkFBYyxFQUFFLEVBRmlEO0FBR2pFQyxXQUFTLEVBQUUsQ0FIc0Q7QUFJakVDLGVBQWEsRUFBRSxFQUprRDtBQUtqRUMsYUFBVyxFQUFFLENBTG9EO0FBTWpFQyxlQUFhLEVBQUU7QUFOa0QsQ0FBdEIsRUFPMUM7QUFDREMsU0FBTztBQUFBLG9NQUFFLGlCQUFPQyxLQUFQLEVBQXNCQyxNQUF0QjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNXQSxNQUFNLENBQUNDLEtBQVAsQ0FBYUMscURBQUcsQ0FBQ0MsZ0JBQWpCLEVBQW1DO0FBQ25EQyxtQkFBRyxFQUFFLENBQUNMLEtBQUQ7QUFEOEMsZUFBbkMsQ0FEWDs7QUFBQTtBQUNETSxpQkFEQztBQUFBO0FBQUEscUJBSXNCTCxNQUFNLENBQUNDLEtBQVAsQ0FBYUMscURBQUcsQ0FBQ1QsY0FBakIsRUFBaUM7QUFDNURhLG1DQUFtQixFQUFFO0FBQ25CZCx5QkFBTyxFQUFFO0FBQ1BlLHNCQUFFLEVBQUVSO0FBREc7QUFEVTtBQUR1QyxlQUFqQyxDQUp0Qjs7QUFBQTtBQUlETiw0QkFKQztBQVdQTyxvQkFBTSxDQUFDUSxPQUFQLENBQWVDLGdFQUFVLENBQUM7QUFDeEJqQix1QkFBTywyQkFBRWEsR0FBRixhQUFFQSxHQUFGLGlEQUFFQSxHQUFHLENBQUVGLGdCQUFQLDJEQUFFLHVCQUF1Qk8sSUFBdkIsQ0FBNEIsQ0FBNUIsQ0FBRix5RUFBb0MsRUFEbkI7QUFFeEJqQiw4QkFBYywyQkFBRUEsY0FBRixhQUFFQSxjQUFGLGlEQUFFQSxjQUFjLENBQUVBLGNBQWxCLDJEQUFFLHVCQUFnQ2tCLElBQWhDLENBQXFDLFVBQUNDLENBQUQsRUFBZ0JDLENBQWhCO0FBQUE7O0FBQUEseUJBQWtDLHFCQUFDRCxDQUFDLENBQUNFLGFBQUgsK0RBQW9CLENBQXBCLHlCQUEwQkQsQ0FBQyxDQUFDQyxhQUE1QiwrREFBNkMsQ0FBN0MsQ0FBbEM7QUFBQSxpQkFBckMsQ0FBRix5RUFBNkg7QUFGbkgsZUFBRCxDQUF6Qjs7QUFYTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFGOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLEtBRE47QUFpQkRDLGlCQUFlLEVBQUUseUJBQUNoQixLQUFELEVBQWdCQyxNQUFoQixFQUEyQjtBQUFBOztBQUMxQ0EsVUFBTSxDQUFDUSxPQUFQLENBQWVDLGdFQUFVLENBQUNWLEtBQUssS0FBS0MsTUFBTSxDQUFDZ0IsSUFBUCxDQUFZdEIsU0FBdEIsR0FBa0M7QUFDMURBLGVBQVMsRUFBRSxDQUQrQztBQUUxREMsbUJBQWEsRUFBRTtBQUYyQyxLQUFsQyxHQUd0QjtBQUNGRCxlQUFTLEVBQUVLLEtBRFQ7QUFFRkosbUJBQWEscURBQUVLLE1BQU0sQ0FBQ2dCLElBQVAsQ0FBWXZCLGNBQVosQ0FBMkJ3QixPQUEzQixFQUFGLHFGQUFFLHVCQUFzQ0MsSUFBdEMsQ0FBMkMsVUFBQUMsQ0FBQztBQUFBOztBQUFBLGVBQUkscUJBQUNBLENBQUMsQ0FBQ0wsYUFBSCwrREFBb0IsQ0FBcEIsSUFBeUJmLEtBQXpCLDhDQUFtQ0MsTUFBTSxDQUFDZ0IsSUFBMUMseUVBQW1DLGFBQWF4QixPQUFoRCx5REFBbUMscUJBQXNCNEIsY0FBekQseUVBQTJFLENBQTNFLENBQUo7QUFBQSxPQUE1QyxDQUFGLDJEQUFFLHVCQUFnSWIsRUFBbEkseUVBQXdJO0FBRm5KLEtBSHFCLENBQXpCO0FBT0QsR0F6QkE7QUEwQkRjLFFBQU07QUFBQSxtTUFBRSx3QkFBeUVyQixNQUF6RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBUXNCLGdDQUFSLFFBQVFBLGtCQUFSO0FBQ050QixvQkFBTSxDQUFDdUIsTUFBUCxDQUFjckIscURBQUcsQ0FBQ3NCLGNBQWxCLEVBQWtDO0FBQ2hDRixrQ0FBa0Isb0JBQ1hBLGtCQURXLENBRGM7QUFJaENHLG1DQUFtQixFQUFFO0FBQ25CQyxrQ0FBZ0IsRUFBRTFCLE1BQU0sQ0FBQ2dCLElBQVAsQ0FBWXRCO0FBRFgsaUJBSlc7QUFPaENZLG1DQUFtQjtBQUNqQmQseUJBQU8sRUFBRVEsTUFBTSxDQUFDZ0IsSUFBUCxDQUFZeEI7QUFESixtQkFFYlEsTUFBTSxDQUFDZ0IsSUFBUCxDQUFZckIsYUFBWixHQUE0QjtBQUFDWSxvQkFBRSxFQUFFUCxNQUFNLENBQUNnQixJQUFQLENBQVlyQjtBQUFqQixpQkFBNUIsR0FBOEQsRUFGakQ7QUFQYSxlQUFsQzs7QUFETTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFGOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBMUJMLENBUDBDLENBQXRDO0FBaURQLElBQU1nQyxRQUFRLEdBQUdDLDBEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsNE1BQ0VDLHNEQUFPLENBQUNDLEdBRFYsQ0FBZDtLQUFNSixRO0FBZU4sSUFBTUssSUFBSSxHQUFHSiwwREFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDJRQVlVSSw4REFBSSxDQUFDLEtBQUQsQ0FaZCxDQUFWO01BQU1ELEk7O0FBdUJOLElBQU1FLFVBQVUsR0FBRyxTQUFiQSxVQUFhO0FBQUEsU0FBTSxNQUFDLHFFQUFEO0FBQWlCLFlBQVEsRUFBRSxPQUEzQjtBQUNpQixTQUFLLEVBQUU7QUFBQ0MsV0FBSyxFQUFFO0FBQVIsS0FEeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFOO0FBQUEsQ0FBbkI7O01BQU1ELFU7QUFHTixJQUFNRSxLQUFLLEdBQUdSLDBEQUFNLENBQUNTLE1BQVY7QUFBQTtBQUFBO0FBQUEsdUJBQVg7TUFBTUQsSztBQUdOLElBQU1FLGFBQWEsR0FBR1YsMERBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxxQkFBbkI7TUFBTVMsYTtBQUlOLElBQU1DLFVBQVUsR0FBR1gsMERBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxpR0FBaEI7TUFBTVUsVTtBQVdOLElBQU1DLEtBQUssR0FBR1osMERBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxxSkFBWDtNQUFNVyxLO0FBZ0JOLElBQU1DLE1BQU0sR0FBR2IsMERBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx3TkFNY0Msc0RBQU8sQ0FBQ0MsR0FOdEIsRUFVSUQsc0RBQU8sQ0FBQ1ksTUFBUixDQUFlLEdBQWYsQ0FWSixFQWFDWixzREFBTyxDQUFDQyxHQWJULENBQVo7TUFBTVUsTTtBQWdCTixJQUFNRSxpQkFBaUIsR0FBR2YsMERBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwyREFHUCxVQUFBZSxJQUFJO0FBQUEsU0FBSUEsSUFBSSxDQUFDQyxNQUFMLHVDQUNXZixzREFBTyxDQUFDQyxHQURuQixrQkFFbEJFLDhEQUFJLENBQUMsS0FBRCxDQUZVO0FBQUEsQ0FIRyxDQUF2QjtNQUFNVSxpQjtBQVFDLElBQU1HLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFBQTs7QUFBQTs7QUFDaEMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU16QyxFQUFFLDZCQUFJd0MsTUFBTSxDQUFDOUMsS0FBWCxrREFBSSxjQUFjTSxFQUFsQix5Q0FBbUMsRUFBM0M7O0FBRmdDLHVCQUdpQzBDLDRFQUFhLENBQUMzRCxpQkFBRCxDQUg5QztBQUFBLE1BR2hCNEQsbUJBSGdCLGtCQUd6QkMsT0FIeUI7QUFBQSxNQUdZQyxpQkFIWixrQkFHS0MsS0FITDs7QUFJaENDLHlEQUFTLENBQUMsWUFBTTtBQUNkSix1QkFBbUIsQ0FBQ3BELE9BQXBCLENBQTRCUyxFQUE1QjtBQUNELEdBRlEsRUFFTixDQUFDQSxFQUFELENBRk0sQ0FBVDs7QUFKZ0Msd0JBT2MwQyw0RUFBYSxDQUFDTSxvRUFBRCxDQVAzQjtBQUFBLE1BT2hCQywwQkFQZ0IsbUJBT3pCTCxPQVB5Qjs7QUFTaEMsTUFBTTNELE9BQU8sR0FBRzRELGlCQUFpQixDQUFDNUQsT0FBbEMsQ0FUZ0MsQ0FVaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUFpRSxTQUFPLENBQUNDLEdBQVIsQ0FBWU4saUJBQWlCLENBQUMzRCxjQUE5QjtBQUNBLFNBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNMLE1BQUMsZ0ZBQUQ7QUFDSSxTQUFLLEVBQUUsTUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREssRUFJTCxNQUFDLGdFQUFEO0FBQ0ksVUFBTSxFQUFFLE9BRFo7QUFFSSxZQUFRLEVBQUVELE9BQUYsYUFBRUEsT0FBRix1Q0FBRUEsT0FBTyxDQUFFbUUsR0FBWCxpREFBRSxhQUFjQyxHQUFkLENBQWtCLFVBQUF6QyxDQUFDO0FBQUEsNkNBQ3hCQSxDQUR3QjtBQUUzQjBDLGNBQU0sRUFBRTFDLENBQUYsYUFBRUEsQ0FBRix1QkFBRUEsQ0FBQyxDQUFFMkM7QUFGZ0I7QUFBQSxLQUFuQixDQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSyxFQVdMLE1BQUMsUUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQywwREFBRSxDQUFDLE1BQUQsQ0FETCxFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBT0MsK0RBQVMsQ0FBQ3hFLE9BQU8sQ0FBQ3lFLFFBQVQsQ0FBaEIsT0FBcUN6RSxPQUFPLENBQUMwRSxpQkFBN0MsQ0FGRixDQURGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRSCwwREFBRSxDQUFDLEtBQUQsQ0FBVixFQUFtQlgsaUJBQWlCLENBQUMzRCxjQUFsQixDQUFpQzBFLE1BQWpDLENBQXdDLFVBQUFoRCxDQUFDO0FBQUEsV0FBSUEsQ0FBQyxDQUFDTCxhQUFGLE1BQW9CdEIsT0FBcEIsYUFBb0JBLE9BQXBCLHVCQUFvQkEsT0FBTyxDQUFFNEIsY0FBN0IsQ0FBSjtBQUFBLEdBQXpDLEVBQTBGZ0QsTUFBN0csRUFBcUhMLDBEQUFFLENBQUMsR0FBRCxDQUF2SCxDQUxGLEVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRQSwwREFBRSxDQUFDLEtBQUQsQ0FBVixFQUFtQlgsaUJBQWlCLENBQUMzRCxjQUFsQixDQUFpQzBFLE1BQWpDLENBQXdDLFVBQUFoRCxDQUFDO0FBQUE7O0FBQUEsV0FBSSxzQkFBQ0EsQ0FBQyxDQUFDTCxhQUFILGlFQUFvQixDQUFwQiw4QkFBMEJ0QixPQUExQixhQUEwQkEsT0FBMUIsdUJBQTBCQSxPQUFPLENBQUU0QixjQUFuQyx5RUFBcUQsQ0FBckQsQ0FBSjtBQUFBLEdBQXpDLEVBQXNHZ0QsTUFBekgsRUFBaUlMLDBEQUFFLENBQUMsR0FBRCxDQUFuSSxDQU5GLENBWEssRUFtQkwsTUFBQyxJQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU92RSxPQUFPLENBQUM2RSxJQUFmLENBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVU3RSxPQUFPLENBQUM4RSxXQUFsQixPQUFnQzlFLE9BQU8sQ0FBQytFLFdBQXhDLEVBQXFEL0UsT0FBTyxDQUFDZ0YscUJBQTdELEVBQW1GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBbkYsRUFBeUZULDBEQUFFLENBQUMsTUFBRCxDQUEzRixFQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTyw2RkFBSVUsS0FBSyxDQUFDakYsT0FBTyxDQUFDNEIsY0FBVCxDQUFULEVBQW1Dd0MsR0FBbkMsQ0FBdUMsVUFBQ3pDLENBQUQsRUFBSXVELENBQUo7QUFBQSxXQUFVQSxDQUFWO0FBQUEsR0FBdkMsRUFBb0RkLEdBQXBELENBQXdELFVBQUE3RCxLQUFLO0FBQUEsV0FDaEUsTUFBQyxVQUFEO0FBQVksU0FBRyxFQUFFQSxLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRGdFO0FBQUEsR0FBN0QsQ0FBUCxDQURGLENBRkYsQ0FuQkssRUEwQkwsTUFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLEtBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRZ0UsMERBQUUsQ0FBQyxLQUFELENBQVYsQ0FERixFQUVHWCxpQkFBaUIsQ0FBQzNELGNBQWxCLENBQWlDbUUsR0FBakMsQ0FBcUMsVUFBQWUsVUFBVTtBQUFBLFdBQUksTUFBQyxpQkFBRDtBQUNoRCxZQUFNLEVBQUVBLFVBQVUsQ0FBQ3BFLEVBQVgsS0FBa0I2QyxpQkFBaUIsQ0FBQ3pELGFBREk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUdsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0csNkZBQUk4RSxLQUFLLENBQUNqRixPQUFPLENBQUM0QixjQUFULENBQVQsRUFBbUN3QyxHQUFuQyxDQUF1QyxVQUFDekMsQ0FBRCxFQUFJdUQsQ0FBSjtBQUFBLGFBQVVBLENBQVY7QUFBQSxLQUF2QyxFQUFvRGQsR0FBcEQsQ0FBd0QsVUFBQTdELEtBQUs7QUFBQTs7QUFBQSxhQUFJQSxLQUFLLEdBQUcsQ0FBUiw2QkFBYTRFLFVBQVUsQ0FBQzdELGFBQXhCLHlFQUF5QyxDQUF6QyxJQUM5RCxNQUFDLDJFQUFEO0FBQ0ksV0FBRyxxQkFBY2YsS0FBZCxDQURQO0FBRUksZ0JBQVEsRUFBRSxPQUZkO0FBR0ksZUFBTyxFQUFFO0FBQUEsaUJBQU1tRCxtQkFBbUIsQ0FBQ25DLGVBQXBCLENBQW9DaEIsS0FBSyxHQUFHLENBQTVDLENBQU47QUFBQSxTQUhiO0FBSUksYUFBSyxFQUFFO0FBQUNvQyxlQUFLLEVBQUV3QyxVQUFVLENBQUNwRSxFQUFYLEtBQWtCNkMsaUJBQWlCLENBQUN6RCxhQUFwQyxHQUFvRCxNQUFwRCxHQUE2RDtBQUFyRSxTQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFEOEQsR0FNekQsTUFBQyxxRUFBRDtBQUNELFdBQUcscUJBQWNJLEtBQWQsQ0FERjtBQUVELGFBQUssRUFBRTtBQUFDb0MsZUFBSyxFQUFFO0FBQVIsU0FGTjtBQUdELGdCQUFRLEVBQUUsT0FIVDtBQUlELGVBQU8sRUFBRTtBQUFBLGlCQUFNZSxtQkFBbUIsQ0FBQ25DLGVBQXBCLENBQW9DaEIsS0FBSyxHQUFHLENBQTVDLENBQU47QUFBQSxTQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFOcUQ7QUFBQSxLQUE3RCxDQURILENBSGtELENBQUo7QUFBQSxHQUEvQyxDQUZILENBMUJLLEVBK0NMLE1BQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVFnRSwwREFBRSxDQUFDLE1BQUQsQ0FBVixDQURGLENBREYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dBLDBEQUFFLENBQUMsS0FBRCxDQURMLEVBRUUsTUFBQywyRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHR0EsMERBQUUsQ0FBQyxVQUFELENBSEwsQ0FKRixFQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRyw2RkFBSVUsS0FBSyxDQUFDakYsT0FBTyxDQUFDNEIsY0FBVCxDQUFULEVBQW1Dd0MsR0FBbkMsQ0FBdUMsVUFBQ3pDLENBQUQsRUFBSXVELENBQUo7QUFBQSxXQUFVQSxDQUFWO0FBQUEsR0FBdkMsRUFBb0RkLEdBQXBELENBQXdELFVBQUE3RCxLQUFLO0FBQUEsV0FBSUEsS0FBSyxHQUFHLENBQVIsR0FBWXFELGlCQUFpQixDQUFDMUQsU0FBOUIsR0FDOUQsTUFBQywyRUFBRDtBQUNJLFNBQUcscUJBQWNLLEtBQWQsQ0FEUDtBQUVJLGNBQVEsRUFBRSxPQUZkO0FBR0ksYUFBTyxFQUFFO0FBQUEsZUFBTW1ELG1CQUFtQixDQUFDbkMsZUFBcEIsQ0FBb0NoQixLQUFLLEdBQUcsQ0FBNUMsQ0FBTjtBQUFBLE9BSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUQ4RCxHQUt6RCxNQUFDLHFFQUFEO0FBQ0QsU0FBRyxxQkFBY0EsS0FBZCxDQURGO0FBRUQsV0FBSyxFQUFFO0FBQUNvQyxhQUFLLEVBQUU7QUFBUixPQUZOO0FBR0QsY0FBUSxFQUFFLE9BSFQ7QUFJRCxhQUFPLEVBQUU7QUFBQSxlQUFNZSxtQkFBbUIsQ0FBQ25DLGVBQXBCLENBQW9DaEIsS0FBSyxHQUFHLENBQTVDLENBQU47QUFBQSxPQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFMcUQ7QUFBQSxHQUE3RCxDQURILENBVEYsRUFzQkUsTUFBQyxLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFTaUUsK0RBQVMsQ0FBQyxzQkFBQ3hFLE9BQU8sQ0FBQ3lFLFFBQVQsaUVBQXFCLENBQXJCLElBQTBCYixpQkFBaUIsQ0FBQzFELFNBQTVDLEdBQXdEMEQsaUJBQWlCLENBQUN4RCxXQUExRSxHQUF3RndELGlCQUFpQixDQUFDdkQsYUFBM0csQ0FBbEIsQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBU2tFLDBEQUFFLENBQUMsTUFBRCxDQUFYLENBRkYsQ0FERixFQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FMRixFQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVNDLCtEQUFTLENBQUMsdUJBQUN4RSxPQUFPLENBQUN5RSxRQUFULG1FQUFxQixDQUFyQixJQUEwQmIsaUJBQWlCLENBQUMxRCxTQUE3QyxDQUFsQixDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFTcUUsMERBQUUsQ0FBQyxNQUFELENBQVgsQ0FGRixDQU5GLEVBVUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQVZGLEVBV0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBU1gsaUJBQWlCLENBQUN4RCxXQUEzQixDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFTbUUsMERBQUUsQ0FBQyxNQUFELENBQVgsQ0FGRixDQVhGLEVBZUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQWZGLEVBZ0JFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVNYLGlCQUFpQixDQUFDdkQsYUFBM0IsQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBU2tFLDBEQUFFLENBQUMsT0FBRCxDQUFYLENBRkYsQ0FoQkYsQ0F0QkYsQ0EvQ0ssRUEyRkwsTUFBQyxNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVFBLDBEQUFFLENBQUMsS0FBRCxDQUFWLEVBQW1CWCxpQkFBaUIsQ0FBQzFELFNBQXJDLEVBQWdEcUUsMERBQUUsQ0FBQyxHQUFELENBQWxELENBREYsRUFFRSxNQUFDLHlEQUFEO0FBQ0ksWUFBUSxFQUFFWCxpQkFBaUIsQ0FBQzFELFNBQWxCLEtBQWdDLENBRDlDO0FBRUksU0FBSyxFQUFFO0FBQUNrRixZQUFNLEVBQUUsTUFBVDtBQUFpQkMsYUFBTyxFQUFFLFFBQTFCO0FBQW9DQyxrQkFBWSxFQUFFLEdBQWxEO0FBQXVEQyxjQUFRLEVBQUU7QUFBakUsS0FGWDtBQUdJLFNBQUssRUFBRSxXQUhYO0FBSUksV0FBTyxFQUFFLFdBSmI7QUFLSSxXQUFPLEVBQUUsbUJBQU07QUFDYnZCLGdDQUEwQixDQUFDd0IsSUFBM0I7QUFDRCxLQVBMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FTR2pCLDBEQUFFLENBQUMsS0FBRCxDQVRMLENBRkYsQ0EzRkssRUF5R0wsTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBekdLLENBQVA7QUEyR0QsQ0EzSE07O0dBQU1qQixZO1VBQ0lFLHFELEVBRWtEQyxvRSxFQUluQkEsb0U7OztPQVBuQ0gsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcZ3JvdXBQcm9kdWN0XFxbaWRdLmpzLjU0N2JjODM1YWNiZWY5NmUyZTk5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU3RhclJvdW5kZWRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TdGFyUm91bmRlZCdcclxuaW1wb3J0IFN0YXJCb3JkZXJSb3VuZGVkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU3RhckJvcmRlclJvdW5kZWQnXHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHttb2RlbEZhY3Rvcnl9IGZyb20gJy4uLy4uL01vZGVsQWN0aW9uL21vZGVsVXRpbCdcclxuaW1wb3J0IHtcclxuICBHcm91cE9yZGVySXRlbUlucHV0LFxyXG4gIEdyb3VwUXVldWUsXHJcbiAgR3JvdXBRdWV1ZUl0ZW1JbnB1dCxcclxuICBPcmRlckluZm9JdGVtSW5wdXQsXHJcbiAgUHJvZHVjdFxyXG59IGZyb20gJy4uLy4uL2dyYXBocWxUeXBlcy90eXBlcydcclxuaW1wb3J0IHtkb2N9IGZyb20gJy4uLy4uL2dyYXBocWxUeXBlcy9kb2MnXHJcbmltcG9ydCB7dXNlU3RvcmVNb2RlbH0gZnJvbSAnLi4vLi4vTW9kZWxBY3Rpb24vdXNlU3RvcmUnXHJcbmltcG9ydCB7ZGVhbE1vbmV5LCBmcE1lcmdlUHJlfSBmcm9tICcuLi8uLi90b29scy91dGlscydcclxuaW1wb3J0IEN1c0Nhcm91c2VsIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU3dpcGUvU3dpcGUnXHJcbmltcG9ydCB7SGVhZGVyVGl0bGV9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSGVhZGVyVGl0bGUvSGVhZGVyVGl0bGUnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7bHN9IGZyb20gJy4uLy4uL3Rvb2xzL2RlYWxLZXknXHJcbmltcG9ydCB7bXBTdHlsZX0gZnJvbSAnLi4vLi4vc3R5bGUvY29tbW9uJ1xyXG5pbXBvcnQge2dyZXl9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycydcclxuaW1wb3J0IHtCdXR0b259IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQge0dyb3VwT3JkZXJQYWdlLCBncm91cE9yZGVyUGFnZU1vZGVsfSBmcm9tICcuL2dyb3VwT3JkZXJQYWdlJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGdyb3VwUHJvZHVjdE1vZGVsID0gbW9kZWxGYWN0b3J5KCdncm91cFByb2R1Y3RNb2RlbCcsIHtcclxuICBwcm9kdWN0OiB7fSBhcyBQcm9kdWN0LFxyXG4gIGdyb3VwUXVldWVMaXN0OiBbXSBhcyBHcm91cFF1ZXVlW10sXHJcbiAgc2VsZWN0TnVtOiAwLFxyXG4gIHNlbGVjdFF1ZXVlSWQ6ICcnLFxyXG4gIG51bURpc2NvdW50OiAxLFxyXG4gIGdyb3VwRGlzY291bnQ6IDEsXHJcbn0sIHtcclxuICBnZXREYXRhOiBhc3luYyAodmFsdWU6IHN0cmluZywgb3B0aW9uKSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBvcHRpb24ucXVlcnkoZG9jLnByb2R1Y3RMaXN0QnlJZHMsIHtcclxuICAgICAgaWRzOiBbdmFsdWVdLFxyXG4gICAgfSlcclxuICAgIGNvbnN0IGdyb3VwUXVldWVMaXN0ID0gYXdhaXQgb3B0aW9uLnF1ZXJ5KGRvYy5ncm91cFF1ZXVlTGlzdCwge1xyXG4gICAgICBncm91cFF1ZXVlSXRlbUlucHV0OiB7XHJcbiAgICAgICAgcHJvZHVjdDoge1xyXG4gICAgICAgICAgaWQ6IHZhbHVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0gYXMgR3JvdXBRdWV1ZUl0ZW1JbnB1dCxcclxuICAgIH0pXHJcbiAgICBvcHRpb24uc2V0RGF0YShmcE1lcmdlUHJlKHtcclxuICAgICAgcHJvZHVjdDogcmVzPy5wcm9kdWN0TGlzdEJ5SWRzPy5saXN0WzBdID8/IHt9LFxyXG4gICAgICBncm91cFF1ZXVlTGlzdDogZ3JvdXBRdWV1ZUxpc3Q/Lmdyb3VwUXVldWVMaXN0Py5zb3J0KChhOiBHcm91cFF1ZXVlLCBiOiBHcm91cFF1ZXVlKSA9PiAoYS5zdW1GaWxsQW1vdW50ID8/IDApIC0gKGIuc3VtRmlsbEFtb3VudCA/PyAwKSkgPz8gW10sXHJcbiAgICB9KSlcclxuICB9LFxyXG4gIHVwZGF0ZVNlbGVjdE51bTogKHZhbHVlOiBudW1iZXIsIG9wdGlvbikgPT4ge1xyXG4gICAgb3B0aW9uLnNldERhdGEoZnBNZXJnZVByZSh2YWx1ZSA9PT0gb3B0aW9uLmRhdGEuc2VsZWN0TnVtID8ge1xyXG4gICAgICBzZWxlY3ROdW06IDAsXHJcbiAgICAgIHNlbGVjdFF1ZXVlSWQ6ICcnLFxyXG4gICAgfSA6IHtcclxuICAgICAgc2VsZWN0TnVtOiB2YWx1ZSxcclxuICAgICAgc2VsZWN0UXVldWVJZDogb3B0aW9uLmRhdGEuZ3JvdXBRdWV1ZUxpc3QucmV2ZXJzZSgpPy5maW5kKHYgPT4gKHYuc3VtRmlsbEFtb3VudCA/PyAwKSArIHZhbHVlIDw9IChvcHRpb24uZGF0YT8ucHJvZHVjdD8uZ3JvdXBQcmVjaXNpb24gPz8gMCkpPy5pZCA/PyAnJyxcclxuICAgIH0pKVxyXG4gIH0sXHJcbiAgc3VibWl0OiBhc3luYyAoe29yZGVySW5mb0l0ZW1JbnB1dH06IHsgb3JkZXJJbmZvSXRlbUlucHV0OiBPcmRlckluZm9JdGVtSW5wdXQgfSwgb3B0aW9uKSA9PiB7XHJcbiAgICBvcHRpb24ubXV0YXRlKGRvYy5zYXZlR3JvdXBPcmRlciwge1xyXG4gICAgICBvcmRlckluZm9JdGVtSW5wdXQ6IHtcclxuICAgICAgICAgIC4uLm9yZGVySW5mb0l0ZW1JbnB1dCxcclxuICAgICAgfSBhcyBPcmRlckluZm9JdGVtSW5wdXQsXHJcbiAgICAgIGdyb3VwT3JkZXJJdGVtSW5wdXQ6IHtcclxuICAgICAgICBvcmRlckdyb3VwQW1vdW50OiBvcHRpb24uZGF0YS5zZWxlY3ROdW0sXHJcbiAgICAgIH0gYXMgR3JvdXBPcmRlckl0ZW1JbnB1dCxcclxuICAgICAgZ3JvdXBRdWV1ZUl0ZW1JbnB1dDoge1xyXG4gICAgICAgIHByb2R1Y3Q6IG9wdGlvbi5kYXRhLnByb2R1Y3QsXHJcbiAgICAgICAgLi4uKG9wdGlvbi5kYXRhLnNlbGVjdFF1ZXVlSWQgPyB7aWQ6IG9wdGlvbi5kYXRhLnNlbGVjdFF1ZXVlSWR9IDoge30pLFxyXG4gICAgICB9IGFzIEdyb3VwUXVldWVJdGVtSW5wdXQsXHJcbiAgICB9KVxyXG4gIH0sXHJcbn0pXHJcblxyXG5jb25zdCBQcmljZVJlZCA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZDogJHttcFN0eWxlLnJlZH07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTIwcHg7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMzBweCk7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICA+IG1haW4ge1xyXG4gICAgZ3JpZC1hcmVhOiAxLzEvMy8yO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgPiBzcGFuIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcbmNvbnN0IE5hbWUgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDE2cHggMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICA+IG1haW4ge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICB9XHJcbiAgPiBzZWN0aW9uIHtcclxuICAgID4gc3BhbiB7XHJcbiAgICAgIHBhZGRpbmc6IDAgNHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAke2dyZXlbJzcwMCddfTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGJvdHRvbTogLTRweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBZZWxsb3dTdGFyID0gKCkgPT4gPFN0YXJSb3VuZGVkSWNvbiBmb250U2l6ZT17J3NtYWxsJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tjb2xvcjogJyNGREQzMzQnfX0vPlxyXG5cclxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaGVhZGVyYFxyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuYFxyXG5jb25zdCBHcm91cFF1ZXVlQm94ID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAxNnB4O1xyXG5gXHJcblxyXG5jb25zdCBTbWFydE1hdGNoID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAxNnB4IDE2cHggOTBweDtcclxuICA+IHNlY3Rpb24ge1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gID4gbWFpbiB7XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBQcmljZSA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgPiBtYWluIHtcclxuICAgIC8vZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gID4gbWFpbiwgc2VjdGlvbiB7XHJcbiAgICA+ICoge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBTdWJtaXQgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgJHttcFN0eWxlLnJlZH07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBib3gtc2hhZG93OiAke21wU3R5bGUuc2hhZG93WycxJ119O1xyXG4gID4gYXNpZGUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgY29sb3I6ICR7bXBTdHlsZS5yZWR9O1xyXG4gIH1cclxuYFxyXG5jb25zdCBHcm91cFF1ZXVlTGlzdEJveCA9IHN0eWxlZC5kaXY8e3NlbGVjdDogYm9vbGVhbn0+YFxyXG4gIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJhY2tncm91bmQ6ICR7cHJvcCA9PiBwcm9wLnNlbGVjdFxyXG4gICAgPyBgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAke21wU3R5bGUucmVkfSwgI0ZDNzM2MSlgIFxyXG4gICAgOiBncmV5WycyMDAnXX07XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBHcm91cFByb2R1Y3QgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBpZCA9IChyb3V0ZXIucXVlcnk/LmlkIGFzIHN0cmluZykgPz8gJydcclxuICBjb25zdCB7YWN0aW9uczogYWN0aW9uc0dyb3VwUHJvZHVjdCwgc3RhdGU6IHN0YXRlR3JvdXBQcm9kdWN0fSA9IHVzZVN0b3JlTW9kZWwoZ3JvdXBQcm9kdWN0TW9kZWwpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFjdGlvbnNHcm91cFByb2R1Y3QuZ2V0RGF0YShpZClcclxuICB9LCBbaWRdKVxyXG4gIGNvbnN0IHthY3Rpb25zOiBhY3Rpb25zR3JvdXBPcmRlclBhZ2VNb2RlbH0gPSB1c2VTdG9yZU1vZGVsKGdyb3VwT3JkZXJQYWdlTW9kZWwpXHJcblxyXG4gIGNvbnN0IHByb2R1Y3QgPSBzdGF0ZUdyb3VwUHJvZHVjdC5wcm9kdWN0XHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIGFjdGlvbnNHcm91cFByb2R1Y3QudXBkYXRlU2VsZWN0TnVtKDIpXHJcbiAgLy8gICBhY3Rpb25zR3JvdXBPcmRlclBhZ2VNb2RlbC5vcGVuKClcclxuICAvLyB9LCBbXSlcclxuXHJcbiAgY29uc29sZS5sb2coc3RhdGVHcm91cFByb2R1Y3QuZ3JvdXBRdWV1ZUxpc3QpXHJcbiAgcmV0dXJuIDxkaXY+XHJcbiAgICA8SGVhZGVyVGl0bGVcclxuICAgICAgICB0aXRsZT17J+S6p+WTgeivpuaDhSd9XHJcbiAgICAvPlxyXG4gICAgPEN1c0Nhcm91c2VsXHJcbiAgICAgICAgaGVpZ2h0PXsnMjQwcHgnfVxyXG4gICAgICAgIGRhdGFMaXN0PXtwcm9kdWN0Py5pbWc/Lm1hcCh2ID0+ICh7XHJcbiAgICAgICAgICAuLi52LFxyXG4gICAgICAgICAgaW1nVXJsOiB2Py51cmwsXHJcbiAgICAgICAgfSkpIGFzIFtdfVxyXG4gICAgLz5cclxuICAgIDxQcmljZVJlZD5cclxuICAgICAgPG1haW4+XHJcbiAgICAgICAge2xzKCfln7rlh4bku7fmoLwnKX1cclxuICAgICAgICA8c3Bhbj57ZGVhbE1vbmV5KHByb2R1Y3QucHJpY2VPdXQpfS97cHJvZHVjdC5wYWNraW5nVW5pdFN0cmluZ308L3NwYW4+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgICAgPGFzaWRlPntscygn5bey5oiQ5ZuiJyl9e3N0YXRlR3JvdXBQcm9kdWN0Lmdyb3VwUXVldWVMaXN0LmZpbHRlcih2ID0+IHYuc3VtRmlsbEFtb3VudCA9PT0gcHJvZHVjdD8uZ3JvdXBQcmVjaXNpb24pLmxlbmd0aH17bHMoJ+WNlScpfTwvYXNpZGU+XHJcbiAgICAgIDxhc2lkZT57bHMoJ+aLvOWbouS4rScpfXtzdGF0ZUdyb3VwUHJvZHVjdC5ncm91cFF1ZXVlTGlzdC5maWx0ZXIodiA9PiAodi5zdW1GaWxsQW1vdW50ID8/IDApIDwgKHByb2R1Y3Q/Lmdyb3VwUHJlY2lzaW9uID8/IDApKS5sZW5ndGh9e2xzKCfljZUnKX08L2FzaWRlPlxyXG4gICAgPC9QcmljZVJlZD5cclxuICAgIDxOYW1lPlxyXG4gICAgICA8bWFpbj57cHJvZHVjdC5uYW1lfTwvbWFpbj5cclxuICAgICAgPHNlY3Rpb24+e3Byb2R1Y3QuZ3JvdXBSZW1hcmt9L3twcm9kdWN0Lmdyb3VwQW1vdW50fXtwcm9kdWN0Lmdyb3VwQW1vdW50VW5pdFN0cmluZ308YnIvPntscygn5YiG5Zui57K+5bqmJyl9XHJcbiAgICAgICAgPHNwYW4+e1suLi5BcnJheShwcm9kdWN0Lmdyb3VwUHJlY2lzaW9uKV0ubWFwKCh2LCBpKSA9PiBpKS5tYXAodmFsdWUgPT5cclxuICAgICAgICAgICAgPFllbGxvd1N0YXIga2V5PXt2YWx1ZX0vPil9PC9zcGFuPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L05hbWU+XHJcbiAgICA8R3JvdXBRdWV1ZUJveD5cclxuICAgICAgPFRpdGxlPntscygn5ou85Zui5LitJyl9PC9UaXRsZT5cclxuICAgICAge3N0YXRlR3JvdXBQcm9kdWN0Lmdyb3VwUXVldWVMaXN0Lm1hcChncm91cFF1ZXVlID0+IDxHcm91cFF1ZXVlTGlzdEJveFxyXG4gICAgICAgICAgc2VsZWN0PXtncm91cFF1ZXVlLmlkID09PSBzdGF0ZUdyb3VwUHJvZHVjdC5zZWxlY3RRdWV1ZUlkfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGFzaWRlPlxyXG4gICAgICAgICAge1suLi5BcnJheShwcm9kdWN0Lmdyb3VwUHJlY2lzaW9uKV0ubWFwKCh2LCBpKSA9PiBpKS5tYXAodmFsdWUgPT4gdmFsdWUgKyAxID4gKGdyb3VwUXVldWUuc3VtRmlsbEFtb3VudCA/PyAwKSA/XHJcbiAgICAgICAgICAgICAgPFN0YXJCb3JkZXJSb3VuZGVkSWNvblxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2BjbGlja1N0YXIke3ZhbHVlfWB9XHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplPXsnbGFyZ2UnfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhY3Rpb25zR3JvdXBQcm9kdWN0LnVwZGF0ZVNlbGVjdE51bSh2YWx1ZSArIDEpfVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e2NvbG9yOiBncm91cFF1ZXVlLmlkID09PSBzdGF0ZUdyb3VwUHJvZHVjdC5zZWxlY3RRdWV1ZUlkID8gJyNmZmYnIDogJyMwMDAnfX1cclxuICAgICAgICAgICAgICAvPiA6IDxTdGFyUm91bmRlZEljb25cclxuICAgICAgICAgICAgICAgICAga2V5PXtgY2xpY2tTdGFyJHt2YWx1ZX1gfVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e2NvbG9yOiAnI0ZERDMzNCd9fVxyXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZT17J2xhcmdlJ31cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYWN0aW9uc0dyb3VwUHJvZHVjdC51cGRhdGVTZWxlY3ROdW0odmFsdWUgKyAxKX1cclxuICAgICAgICAgICAgICAvPil9XHJcbiAgICAgICAgPC9hc2lkZT5cclxuICAgICAgPC9Hcm91cFF1ZXVlTGlzdEJveD4pfVxyXG4gICAgPC9Hcm91cFF1ZXVlQm94PlxyXG4gICAgPFNtYXJ0TWF0Y2g+XHJcbiAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgPFRpdGxlPntscygn5pm66IO95Yy56YWNJyl9PC9UaXRsZT5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgIHtscygn6K+354K55Ye7Jyl9XHJcbiAgICAgICAgPFN0YXJCb3JkZXJSb3VuZGVkSWNvbi8+XHJcbiAgICAgICAge2xzKCfnoa7lrprmgqjpnIDopoHnmoTku73mlbAnKX1cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICB7Wy4uLkFycmF5KHByb2R1Y3QuZ3JvdXBQcmVjaXNpb24pXS5tYXAoKHYsIGkpID0+IGkpLm1hcCh2YWx1ZSA9PiB2YWx1ZSArIDEgPiBzdGF0ZUdyb3VwUHJvZHVjdC5zZWxlY3ROdW0gP1xyXG4gICAgICAgICAgICA8U3RhckJvcmRlclJvdW5kZWRJY29uXHJcbiAgICAgICAgICAgICAgICBrZXk9e2BjbGlja1N0YXIke3ZhbHVlfWB9XHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZT17J2xhcmdlJ31cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFjdGlvbnNHcm91cFByb2R1Y3QudXBkYXRlU2VsZWN0TnVtKHZhbHVlICsgMSl9XHJcbiAgICAgICAgICAgIC8+IDogPFN0YXJSb3VuZGVkSWNvblxyXG4gICAgICAgICAgICAgICAga2V5PXtgY2xpY2tTdGFyJHt2YWx1ZX1gfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tjb2xvcjogJyNGREQzMzQnfX1cclxuICAgICAgICAgICAgICAgIGZvbnRTaXplPXsnbGFyZ2UnfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYWN0aW9uc0dyb3VwUHJvZHVjdC51cGRhdGVTZWxlY3ROdW0odmFsdWUgKyAxKX1cclxuICAgICAgICAgICAgLz4pfVxyXG4gICAgICA8L21haW4+XHJcbiAgICAgIDxQcmljZT5cclxuICAgICAgICA8bWFpbj5cclxuICAgICAgICAgIDxoZWFkZXI+e2RlYWxNb25leSgocHJvZHVjdC5wcmljZU91dCA/PyAwKSAqIHN0YXRlR3JvdXBQcm9kdWN0LnNlbGVjdE51bSAqIHN0YXRlR3JvdXBQcm9kdWN0Lm51bURpc2NvdW50ICogc3RhdGVHcm91cFByb2R1Y3QuZ3JvdXBEaXNjb3VudCl9PC9oZWFkZXI+XHJcbiAgICAgICAgICA8Zm9vdGVyPntscygn5oqY5ZCO5Lu35qC8Jyl9PC9mb290ZXI+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgICAgIDxkaXY+PTwvZGl2PlxyXG4gICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgPGhlYWRlcj57ZGVhbE1vbmV5KChwcm9kdWN0LnByaWNlT3V0ID8/IDApICogc3RhdGVHcm91cFByb2R1Y3Quc2VsZWN0TnVtKX08L2hlYWRlcj5cclxuICAgICAgICAgIDxmb290ZXI+e2xzKCfln7rlh4bku7fmoLwnKX08L2Zvb3Rlcj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPGRpdj54PC9kaXY+XHJcbiAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICA8aGVhZGVyPntzdGF0ZUdyb3VwUHJvZHVjdC5udW1EaXNjb3VudH08L2hlYWRlcj5cclxuICAgICAgICAgIDxmb290ZXI+e2xzKCfku73mlbDmipjmiaMnKX08L2Zvb3Rlcj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPGRpdj54PC9kaXY+XHJcbiAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICA8aGVhZGVyPntzdGF0ZUdyb3VwUHJvZHVjdC5ncm91cERpc2NvdW50fTwvaGVhZGVyPlxyXG4gICAgICAgICAgPGZvb3Rlcj57bHMoJ+aIkOWbouaKmOS4iuaKmCcpfTwvZm9vdGVyPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPC9QcmljZT5cclxuICAgIDwvU21hcnRNYXRjaD5cclxuICAgIDxTdWJtaXQ+XHJcbiAgICAgIDxhc2lkZT57bHMoJ+mAieaLqeS6hicpfXtzdGF0ZUdyb3VwUHJvZHVjdC5zZWxlY3ROdW19e2xzKCfku70nKX08L2FzaWRlPlxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBkaXNhYmxlZD17c3RhdGVHcm91cFByb2R1Y3Quc2VsZWN0TnVtID09PSAwfVxyXG4gICAgICAgICAgc3R5bGU9e3toZWlnaHQ6ICcxMDAlJywgcGFkZGluZzogJzAgMzJweCcsIGJvcmRlclJhZGl1czogJzAnLCBmb250U2l6ZTogJzE4cHgnfX1cclxuICAgICAgICAgIGNvbG9yPXsnc2Vjb25kYXJ5J31cclxuICAgICAgICAgIHZhcmlhbnQ9eydjb250YWluZWQnfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBhY3Rpb25zR3JvdXBPcmRlclBhZ2VNb2RlbC5vcGVuKClcclxuICAgICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7bHMoJ+WOu+e7k+eulycpfVxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgIDwvU3VibWl0PlxyXG4gICAgPEdyb3VwT3JkZXJQYWdlLz5cclxuICA8L2Rpdj5cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9