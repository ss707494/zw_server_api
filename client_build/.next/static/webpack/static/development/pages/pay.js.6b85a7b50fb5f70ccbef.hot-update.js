webpackHotUpdate("static\\development\\pages\\pay.js",{

/***/ "./utils/view/me/orderDetail/orderDetail.tsx":
/*!***************************************************!*\
  !*** ./utils/view/me/orderDetail/orderDetail.tsx ***!
  \***************************************************/
/*! exports provided: orderDetailModel, OrderDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderDetailModel", function() { return orderDetailModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetail", function() { return OrderDetail; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_HeaderTitle_HeaderTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/HeaderTitle/HeaderTitle */ "./utils/components/HeaderTitle/HeaderTitle.tsx");
/* harmony import */ var _components_BScroll_BScroller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/BScroll/BScroller */ "./utils/components/BScroll/BScroller.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ModelAction/modelUtil */ "./utils/ModelAction/modelUtil.ts");
/* harmony import */ var _graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../graphqlTypes/doc */ "./utils/graphqlTypes/doc/index.ts");
/* harmony import */ var _tools_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../tools/utils */ "./utils/tools/utils.ts");
/* harmony import */ var _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../ModelAction/useStore */ "./utils/ModelAction/useStore.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _tools_dealKey__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../tools/dealKey */ "./utils/tools/dealKey.ts");
/* harmony import */ var _ss_common_enum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../ss_common/enum */ "./utils/ss_common/enum.ts");
/* harmony import */ var _style_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../style/common */ "./utils/style/common.ts");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
/* harmony import */ var _tools_img__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../tools/img */ "./utils/tools/img.ts");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");



var _this = undefined,
    _jsxFileName = "D:\\code\\zw\\zw_client_web\\utils\\view\\me\\orderDetail\\orderDetail.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;















var orderDetailModel = Object(_ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_6__["modelFactory"])('orderDetail', {
  orderInfo: {},
  selfAddress: []
}, {
  getDetail: function () {
    var _getDetail = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(value, option) {
      var _res$selfAddress, _res$selfAddress$valu;

      var res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return option.query(_graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_7__["doc"].orderDetail, {
                id: value
              });

            case 2:
              res = _context.sent;
              option.setData(Object(_tools_utils__WEBPACK_IMPORTED_MODULE_8__["fpMergePre"])({
                orderInfo: (res === null || res === void 0 ? void 0 : res.orderDetail) || {},
                selfAddress: (res === null || res === void 0 ? void 0 : (_res$selfAddress = res.selfAddress) === null || _res$selfAddress === void 0 ? void 0 : (_res$selfAddress$valu = _res$selfAddress.value) === null || _res$selfAddress$valu === void 0 ? void 0 : _res$selfAddress$valu.list) || []
              }));

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function getDetail(_x, _x2) {
      return _getDetail.apply(this, arguments);
    }

    return getDetail;
  }(),
  updateOrder: function () {
    var _updateOrder = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(value, option) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return option.mutate(_graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_7__["doc"].updateOrder, {
                orderInfoItemInput: value
              });

            case 2:
              return _context2.abrupt("return", _context2.sent);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function updateOrder(_x3, _x4) {
      return _updateOrder.apply(this, arguments);
    }

    return updateOrder;
  }()
});
var Box = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "orderDetail__Box",
  componentId: "lz0d8y-0"
})(["padding:0 20px;"]);
_c = Box;
var Top = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "orderDetail__Top",
  componentId: "lz0d8y-1"
})(["margin-top:10px;font-size:18px;display:flex;> aside{margin-left:20px;color:", ";}"], _style_common__WEBPACK_IMPORTED_MODULE_13__["mpStyle"].red);
_c2 = Top;
var InfoLabel = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "orderDetail__InfoLabel",
  componentId: "lz0d8y-2"
})(["display:flex;margin-top:16px;> aside{color:", ";width:80px;}"], _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_14__["grey"][600]);
_c3 = InfoLabel;
var GreyPart = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "orderDetail__GreyPart",
  componentId: "lz0d8y-3"
})(["margin-top:12px;position:relative;left:-20px;width:100vw;height:12px;background:", ";"], _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_14__["grey"][200]);
_c4 = GreyPart;
var ProductBox = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "orderDetail__ProductBox",
  componentId: "lz0d8y-4"
})(["display:grid;padding-top:4vw;margin-bottom:10px;grid-template-columns:min-content 1fr 30vw;> img{grid-area:1/1/4/2;width:20vw;height:20vw;margin-right:14px;}> section{grid-area:1/2/2/4;font-size:20px;}> main{padding:10px 0;grid-area:2/2/3/4;font-size:14px;color:", ";}> footer{display:flex;> aside{text-decoration:line-through;}> span{margin-left:5px;color:", ";font-size:17px;}}> aside{> button{border-radius:10px;padding:2px 14px;}}"], _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_14__["grey"][500], _style_common__WEBPACK_IMPORTED_MODULE_13__["mpStyle"].red);
_c5 = ProductBox;
var Sum = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "orderDetail__Sum",
  componentId: "lz0d8y-5"
})(["display:flex;justify-content:space-between;margin-bottom:12px;"]);
_c6 = Sum;
var OrderDetail = function OrderDetail() {
  _s();

  var _orderInfo$userAddres, _orderInfo$userPayCar, _orderInfo$userPayCar2, _orderInfo$userPayCar3, _orderInfo$rOrderProd;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_10__["useRouter"])();

  var _useStoreModel = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_9__["useStoreModel"])(orderDetailModel),
      stateOD = _useStoreModel.state,
      actionsOD = _useStoreModel.actions;

  var orderInfo = stateOD.orderInfo;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var _stateOD$orderInfo;

    if (router.query.id && !((_stateOD$orderInfo = stateOD.orderInfo) === null || _stateOD$orderInfo === void 0 ? void 0 : _stateOD$orderInfo.id)) {
      var _router$query;

      actionsOD.getDetail("".concat((_router$query = router.query) === null || _router$query === void 0 ? void 0 : _router$query.id));
    }
  }, [router.query.id, stateOD.orderInfo]);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 10
    }
  }, __jsx(_components_HeaderTitle_HeaderTitle__WEBPACK_IMPORTED_MODULE_3__["HeaderTitle"], {
    title: '订单详情',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 5
    }
  }), !(orderInfo === null || orderInfo === void 0 ? void 0 : orderInfo.id) ? __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 23
    }
  }) : __jsx(_components_BScroll_BScroller__WEBPACK_IMPORTED_MODULE_4__["BScroller"], {
    boxHeight: 'calc(100vh - 60px)',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 32
    }
  }, __jsx(Box, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }
  }, __jsx(Top, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }
  }, __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_11__["ls"])(Object(_tools_utils__WEBPACK_IMPORTED_MODULE_8__["formatDate"])(orderInfo.createTime))), __jsx("aside", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 11
    }
  }, Object(_ss_common_enum__WEBPACK_IMPORTED_MODULE_12__["orderStateToString"])(orderInfo === null || orderInfo === void 0 ? void 0 : orderInfo.state))), __jsx(InfoLabel, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 9
    }
  }, __jsx("aside", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_11__["ls"])('送货地址'), " :"), __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 11
    }
  }, orderInfo.pickUpType === _ss_common_enum__WEBPACK_IMPORTED_MODULE_12__["PickUpTypeEnum"].Self && function (v) {
    return "".concat(v.province, " ").concat(v.city, " ").concat(v.streetAddress);
  }(stateOD.selfAddress.find(function (v) {
    return v.id === orderInfo.selfAddressId;
  })) || ((_orderInfo$userAddres = orderInfo.userAddress) === null || _orderInfo$userAddres === void 0 ? void 0 : _orderInfo$userAddres.combineAddress))), __jsx(InfoLabel, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 9
    }
  }, __jsx("aside", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_11__["ls"])('订单编号'), " :"), __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 11
    }
  }, orderInfo.number)), __jsx(InfoLabel, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 9
    }
  }, __jsx("aside", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_11__["ls"])('支付方式'), " :"), __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 11
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 13
    }
  }, orderInfo === null || orderInfo === void 0 ? void 0 : (_orderInfo$userPayCar = orderInfo.userPayCard) === null || _orderInfo$userPayCar === void 0 ? void 0 : _orderInfo$userPayCar.code), __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 13
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_8__["formatDate"])(orderInfo === null || orderInfo === void 0 ? void 0 : (_orderInfo$userPayCar2 = orderInfo.userPayCard) === null || _orderInfo$userPayCar2 === void 0 ? void 0 : _orderInfo$userPayCar2.expirationTime, 'MM/yy')), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 13
    }
  }, orderInfo === null || orderInfo === void 0 ? void 0 : (_orderInfo$userPayCar3 = orderInfo.userPayCard) === null || _orderInfo$userPayCar3 === void 0 ? void 0 : _orderInfo$userPayCar3.userName))), __jsx(GreyPart, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 9
    }
  }), (_orderInfo$rOrderProd = orderInfo.rOrderProduct) === null || _orderInfo$rOrderProd === void 0 ? void 0 : _orderInfo$rOrderProd.map(function (rOrderProduct) {
    var _rOrderProduct$produc, _rOrderProduct$produc2, _rOrderProduct$produc3, _rOrderProduct$produc4, _rOrderProduct$produc5, _rOrderProduct$produc6;

    return __jsx(ProductBox, {
      key: "ProductBox_".concat(rOrderProduct.id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: Object(_tools_img__WEBPACK_IMPORTED_MODULE_15__["dealImgUrl"])((_rOrderProduct$produc = rOrderProduct.product) === null || _rOrderProduct$produc === void 0 ? void 0 : (_rOrderProduct$produc2 = _rOrderProduct$produc.img) === null || _rOrderProduct$produc2 === void 0 ? void 0 : (_rOrderProduct$produc3 = _rOrderProduct$produc2[0]) === null || _rOrderProduct$produc3 === void 0 ? void 0 : _rOrderProduct$produc3.url),
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 15
      }
    }), __jsx("section", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 15
      }
    }, (_rOrderProduct$produc4 = rOrderProduct.product) === null || _rOrderProduct$produc4 === void 0 ? void 0 : _rOrderProduct$produc4.name), __jsx("main", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 15
      }
    }, "\u72EC\u7ACB\u5305\u88C5"), __jsx("footer", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 15
      }
    }, __jsx("aside", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 17
      }
    }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_8__["dealMoney"])((_rOrderProduct$produc5 = rOrderProduct.product) === null || _rOrderProduct$produc5 === void 0 ? void 0 : _rOrderProduct$produc5.priceMarket)), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 17
      }
    }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_8__["dealMoney"])((_rOrderProduct$produc6 = rOrderProduct.product) === null || _rOrderProduct$produc6 === void 0 ? void 0 : _rOrderProduct$produc6.priceOut))), __jsx("aside", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 15
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["Button"], {
      variant: 'contained',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 17
      }
    }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_11__["ls"])('加入购物车'))));
  }), __jsx("div", {
    style: {
      height: '26px',
      width: '100%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 9
    }
  }), __jsx(Sum, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 9
    }
  }, __jsx("aside", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_11__["ls"])('小计')), __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 11
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_8__["dealMoney"])(orderInfo.subtotal))), __jsx(Sum, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 9
    }
  }, __jsx("aside", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_11__["ls"])('优惠券折扣')), __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 11
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_8__["dealMoney"])(0, '-'))), __jsx(Sum, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 9
    }
  }, __jsx("aside", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_11__["ls"])('运费')), __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 11
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_8__["dealMoney"])(orderInfo.transportationCosts))), __jsx(Sum, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 9
    }
  }, __jsx("aside", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_11__["ls"])('达人币抵扣')), __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 11
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_8__["dealMoney"])(orderInfo.deductCoin, '-'))), __jsx(Sum, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 9
    }
  }, __jsx("aside", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_11__["ls"])('消费税')), __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 11
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_8__["dealMoney"])(orderInfo.saleTax))), __jsx(Sum, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 9
    }
  }, __jsx("aside", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_11__["ls"])('实际支付')), __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 11
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_8__["dealMoney"])(orderInfo.actuallyPaid))), __jsx(Sum, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 9
    }
  }, __jsx("aside", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_11__["ls"])('获得达人币')), __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 11
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_8__["dealMoney"])(orderInfo.generateCoin))), __jsx("div", {
    style: {
      height: '96px',
      width: '100%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 9
    }
  }))));
};

_s(OrderDetail, "0hzXqr0SotEPIUi/kg5ze3kqMP0=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_10__["useRouter"], _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_9__["useStoreModel"]];
});

_c7 = OrderDetail;

var _c, _c2, _c3, _c4, _c5, _c6, _c7;

$RefreshReg$(_c, "Box");
$RefreshReg$(_c2, "Top");
$RefreshReg$(_c3, "InfoLabel");
$RefreshReg$(_c4, "GreyPart");
$RefreshReg$(_c5, "ProductBox");
$RefreshReg$(_c6, "Sum");
$RefreshReg$(_c7, "OrderDetail");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./utils/view/pay/index.tsx":
/*!**********************************!*\
  !*** ./utils/view/pay/index.tsx ***!
  \**********************************/
/*! exports provided: Pay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pay", function() { return Pay; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_HeaderTitle_HeaderTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/HeaderTitle/HeaderTitle */ "./utils/components/HeaderTitle/HeaderTitle.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Message_Message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Message/Message */ "./utils/components/Message/Message.tsx");
/* harmony import */ var _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ModelAction/useStore */ "./utils/ModelAction/useStore.ts");
/* harmony import */ var _me_orderDetail_orderDetail__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../me/orderDetail/orderDetail */ "./utils/view/me/orderDetail/orderDetail.tsx");
/* harmony import */ var _tools_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../tools/utils */ "./utils/tools/utils.ts");
/* harmony import */ var _ss_common_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ss_common/enum */ "./utils/ss_common/enum.ts");
var _this = undefined,
    _jsxFileName = "D:\\code\\zw\\zw_client_web\\utils\\view\\pay\\index.tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









var applicationId = false ? undefined : 'sandbox-sq0idb-42FQ7wGBwzibToRM9_zdFw'; // const applicationId = 'sq0idp-IAEwX77Hdunl5dWByHQjIQ'

var Pay = function Pay() {
  _s();

  var _ref, _router$query;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var orderId = (_ref = (_router$query = router.query) === null || _router$query === void 0 ? void 0 : _router$query.orderId) !== null && _ref !== void 0 ? _ref : '';

  var _useStoreModel = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_6__["useStoreModel"])(_me_orderDetail_orderDetail__WEBPACK_IMPORTED_MODULE_7__["orderDetailModel"]),
      stateOD = _useStoreModel.state,
      actionsOD = _useStoreModel.actions;

  var orderInfo = stateOD.orderInfo || {};
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (orderId) {
      actionsOD.getDetail("".concat(orderId));
    }
  }, [orderId]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    // @ts-ignore
    if (window.SqPaymentForm && orderInfo.actuallyPaid) {
      var _document$querySelect;

      // @ts-ignore
      var paymentForm = new SqPaymentForm({
        // Initialize the payment form elements
        applicationId: applicationId,
        inputClass: 'sq-input',
        autoBuild: false,
        // Customize the CSS for SqPaymentForm iframe elements
        inputStyles: [{
          fontSize: '16px',
          lineHeight: '24px',
          padding: '16px',
          placeholderColor: '#a0a0a0',
          backgroundColor: 'transparent'
        }],
        // Initialize the credit card placeholders
        cardNumber: {
          elementId: 'sq-card-number',
          placeholder: 'Card Number'
        },
        cvv: {
          elementId: 'sq-cvv',
          placeholder: 'CVV'
        },
        expirationDate: {
          elementId: 'sq-expiration-date',
          placeholder: 'MM/YY'
        },
        postalCode: {
          elementId: 'sq-postal-code',
          placeholder: 'Postal'
        },
        // SqPaymentForm callback functions
        callbacks: {
          /*
          * callback function: cardNonceResponseReceived
          * Triggered when: SqPaymentForm completes a card nonce request
          */
          cardNonceResponseReceived: function cardNonceResponseReceived(errors, nonce, cardData) {
            var _orderInfo$actuallyPa;

            if (errors) {
              // Log errors from nonce generation to the browser developer console.
              console.error('Encountered errors:');
              errors.forEach(function (error) {
                console.error('  ' + error.message);
              });
              Object(_components_Message_Message__WEBPACK_IMPORTED_MODULE_5__["showMessage"])('Encountered errors, check browser developer console for more details');
              return;
            } // alert(`The generated nonce is:\n${nonce}`)


            fetch("/pay/process-payment", {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                nonce: nonce,
                amount: ~~(((_orderInfo$actuallyPa = orderInfo.actuallyPaid) !== null && _orderInfo$actuallyPa !== void 0 ? _orderInfo$actuallyPa : 0) * 100)
              })
            })["catch"](function (err) {
              Object(_components_Message_Message__WEBPACK_IMPORTED_MODULE_5__["showMessage"])('Network error: ' + err);
            }).then(function (response) {
              if (!response.ok) {
                return response.json().then(function (errorInfo) {
                  return Promise.reject(errorInfo);
                }); //UPDATE HERE
              }

              return response.json(); //UPDATE HERE
            }).then(function (data) {
              // console.log(data) //UPDATE HERE
              // showMessage('Payment complete successfully!\nCheck browser developer console for more details')
              return actionsOD.updateOrder({
                id: orderId,
                state: _ss_common_enum__WEBPACK_IMPORTED_MODULE_9__["OrderState"].Paid
              });
            }).then(function () {
              Object(_components_Message_Message__WEBPACK_IMPORTED_MODULE_5__["showMessage"])('支付成功');
              router.replace('/cart/result');
            })["catch"](function (err) {
              console.error(err);
              Object(_components_Message_Message__WEBPACK_IMPORTED_MODULE_5__["showMessage"])('Payment failed to complete!\nCheck browser developer console for more details');
            });
          }
        }
      });
      paymentForm.build();

      var onGetCardNonce = function onGetCardNonce(event) {
        // Don't submit the form until SqPaymentForm returns with a nonce
        event.preventDefault(); // Request a nonce from the SqPaymentForm object

        paymentForm.requestCardNonce();
      };

      (_document$querySelect = document.querySelector('#sq-creditcard')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.addEventListener('click', onGetCardNonce);
    }
  }, [orderInfo.actuallyPaid]);
  return __jsx("div", {
    className: "jsx-2628901187",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 10
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 5
    }
  }, __jsx("title", {
    className: "jsx-2628901187",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }
  }, "pay"), __jsx("script", {
    type: "text/javascript",
    src: false ? undefined : 'https://js.squareupsandbox.com/v2/paymentform',
    className: "jsx-2628901187",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 7
    }
  })), __jsx(_components_HeaderTitle_HeaderTitle__WEBPACK_IMPORTED_MODULE_3__["HeaderTitle"], {
    title: '支付',
    backCall: function backCall() {
      router.replace('/home');
      return true;
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 5
    }
  }), __jsx("div", {
    id: "form-container",
    className: "jsx-2628901187",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 5
    }
  }, __jsx("div", {
    id: "sq-card-number",
    className: "jsx-2628901187",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 7
    }
  }), __jsx("div", {
    id: "sq-expiration-date",
    className: "jsx-2628901187" + " " + "third",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 7
    }
  }), __jsx("div", {
    id: "sq-cvv",
    className: "jsx-2628901187" + " " + "third",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 7
    }
  }), __jsx("div", {
    id: "sq-postal-code",
    className: "jsx-2628901187" + " " + "third",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 7
    }
  }), __jsx("button", {
    id: "sq-creditcard",
    className: "jsx-2628901187" + " " + "button-credit-card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 7
    }
  }, "Pay ", Object(_tools_utils__WEBPACK_IMPORTED_MODULE_8__["dealMoney"])(orderInfo.actuallyPaid))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2628901187",
    __self: _this
  }, "*{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}body,html{background-color:#F7F8F9;color:#373F4A;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-weight:normal;height:100%;}button{border:0;font-weight:500;}fieldset{margin:0;padding:0;border:0;}#form-container{padding:6.25vw;}.third{float:left;width:calc((100% - 10vw) / 3);padding:0;margin:0 5vw 5vw 0;}.third:last-of-type{margin-right:0;}.sq-input{height:56PX;box-sizing:border-box;border:1px solid #E0E2E3;background-color:white;border-radius:1.875vw;display:inline-block;-webkit-transition:border-color .2s ease-in-out;transition:border-color .2s ease-in-out;}.sq-input--focus{border:1px solid #4A90E2;}.sq-input--error{border:1px solid #E02F2F;}#sq-card-number{margin-bottom:5vw;}.button-credit-card{width:100%;height:17.5vw;margin-top:3.125vw;background:#4A90E2;border-radius:1.875vw;cursor:pointer;display:block;color:#FFFFFF;font-size:5vw;line-height:7.5vw;font-weight:700;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;text-align:center;-webkit-transition:background .2s ease-in-out;transition:background .2s ease-in-out;}.button-credit-card:hover{background-color:#4281CB;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxjb2RlXFx6d1xcendfY2xpZW50X3dlYlxcdXRpbHNcXHZpZXdcXHBheVxcaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBKZ0IsQUFFc0MsQUFJVixBQU9oQixBQUlBLEFBS00sQUFHSixBQU1JLEFBSUgsQUFVYSxBQUlBLEFBR1AsQUFJUCxBQWdCYyxTQTFEVCxBQUlOLEVBUW9CLEFBK0JoQixDQXJCUSxHQWROLEFBU0EsR0FxQkcsQ0FqQ1YsTUFaSyxBQU9HLEFBK0JTLEFBSUEsQUFTUCxBQWNPLEdBckRoQixNQWtCZSxDQWxDUyxJQUt5QixFQW1CakQsR0FnQ1MsT0EvQkEsUUFVSSxJQXNCRCxNQXpEYSxDQXlCZixZQVdFLEdBc0JQLFVBcERJLEtBcURMLElBdEJPLFVBOUJULEFBcURFLFdBdEIwQixDQS9CM0IsRUFzREMsY0FDSSxrQkFDRixnQkFDQyxxQ0ExQndCLGdEQTJCdkIsa0JBQ29CLG9GQUFDIiwiZmlsZSI6IkQ6XFxjb2RlXFx6d1xcendfY2xpZW50X3dlYlxcdXRpbHNcXHZpZXdcXHBheVxcaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQge0hlYWRlclRpdGxlfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0hlYWRlclRpdGxlL0hlYWRlclRpdGxlJ1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7c2hvd01lc3NhZ2V9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTWVzc2FnZS9NZXNzYWdlJ1xyXG5pbXBvcnQge3VzZVN0b3JlTW9kZWx9IGZyb20gJy4uLy4uL01vZGVsQWN0aW9uL3VzZVN0b3JlJ1xyXG5pbXBvcnQge29yZGVyRGV0YWlsTW9kZWx9IGZyb20gJy4uL21lL29yZGVyRGV0YWlsL29yZGVyRGV0YWlsJ1xyXG5pbXBvcnQge2RlYWxNb25leX0gZnJvbSAnLi4vLi4vdG9vbHMvdXRpbHMnXHJcbmltcG9ydCB7T3JkZXJTdGF0ZX0gZnJvbSAnLi4vLi4vc3NfY29tbW9uL2VudW0nXHJcblxyXG5jb25zdCBhcHBsaWNhdGlvbklkID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/ICdzcTBpZHAtSUFFd1g3N0hkdW5sNWRXQnlIUWpJUScgOiAnc2FuZGJveC1zcTBpZGItNDJGUTd3R0J3emliVG9STTlfemRGdydcclxuLy8gY29uc3QgYXBwbGljYXRpb25JZCA9ICdzcTBpZHAtSUFFd1g3N0hkdW5sNWRXQnlIUWpJUSdcclxuXHJcbmV4cG9ydCBjb25zdCBQYXkgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBvcmRlcklkID0gKHJvdXRlci5xdWVyeT8ub3JkZXJJZCBhcyBzdHJpbmcpID8/ICcnXHJcblxyXG4gIGNvbnN0IHtzdGF0ZTogc3RhdGVPRCwgYWN0aW9uczogYWN0aW9uc09EfSA9IHVzZVN0b3JlTW9kZWwob3JkZXJEZXRhaWxNb2RlbClcclxuICBjb25zdCBvcmRlckluZm8gPSBzdGF0ZU9ELm9yZGVySW5mbyB8fCB7fVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKG9yZGVySWQpIHtcclxuICAgICAgYWN0aW9uc09ELmdldERldGFpbChgJHtvcmRlcklkfWApXHJcbiAgICB9XHJcbiAgfSwgW29yZGVySWRdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgaWYgKHdpbmRvdy5TcVBheW1lbnRGb3JtICYmIG9yZGVySW5mby5hY3R1YWxseVBhaWQpIHtcclxuICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICBjb25zdCBwYXltZW50Rm9ybSA9IG5ldyBTcVBheW1lbnRGb3JtKHtcclxuICAgICAgICAvLyBJbml0aWFsaXplIHRoZSBwYXltZW50IGZvcm0gZWxlbWVudHNcclxuICAgICAgICBhcHBsaWNhdGlvbklkLFxyXG4gICAgICAgIGlucHV0Q2xhc3M6ICdzcS1pbnB1dCcsXHJcbiAgICAgICAgYXV0b0J1aWxkOiBmYWxzZSxcclxuICAgICAgICAvLyBDdXN0b21pemUgdGhlIENTUyBmb3IgU3FQYXltZW50Rm9ybSBpZnJhbWUgZWxlbWVudHNcclxuICAgICAgICBpbnB1dFN0eWxlczogW3tcclxuICAgICAgICAgIGZvbnRTaXplOiAnMTZweCcsXHJcbiAgICAgICAgICBsaW5lSGVpZ2h0OiAnMjRweCcsXHJcbiAgICAgICAgICBwYWRkaW5nOiAnMTZweCcsXHJcbiAgICAgICAgICBwbGFjZWhvbGRlckNvbG9yOiAnI2EwYTBhMCcsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgICAgfV0sXHJcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSB0aGUgY3JlZGl0IGNhcmQgcGxhY2Vob2xkZXJzXHJcbiAgICAgICAgY2FyZE51bWJlcjoge1xyXG4gICAgICAgICAgZWxlbWVudElkOiAnc3EtY2FyZC1udW1iZXInLFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI6ICdDYXJkIE51bWJlcicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjdnY6IHtcclxuICAgICAgICAgIGVsZW1lbnRJZDogJ3NxLWN2dicsXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJ0NWVicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBleHBpcmF0aW9uRGF0ZToge1xyXG4gICAgICAgICAgZWxlbWVudElkOiAnc3EtZXhwaXJhdGlvbi1kYXRlJyxcclxuICAgICAgICAgIHBsYWNlaG9sZGVyOiAnTU0vWVknLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcG9zdGFsQ29kZToge1xyXG4gICAgICAgICAgZWxlbWVudElkOiAnc3EtcG9zdGFsLWNvZGUnLFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI6ICdQb3N0YWwnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gU3FQYXltZW50Rm9ybSBjYWxsYmFjayBmdW5jdGlvbnNcclxuICAgICAgICBjYWxsYmFja3M6IHtcclxuICAgICAgICAgIC8qXHJcbiAgICAgICAgICAqIGNhbGxiYWNrIGZ1bmN0aW9uOiBjYXJkTm9uY2VSZXNwb25zZVJlY2VpdmVkXHJcbiAgICAgICAgICAqIFRyaWdnZXJlZCB3aGVuOiBTcVBheW1lbnRGb3JtIGNvbXBsZXRlcyBhIGNhcmQgbm9uY2UgcmVxdWVzdFxyXG4gICAgICAgICAgKi9cclxuICAgICAgICAgIGNhcmROb25jZVJlc3BvbnNlUmVjZWl2ZWQ6IGZ1bmN0aW9uIChlcnJvcnM6IGFueSwgbm9uY2U6IGFueSwgY2FyZERhdGE6IGFueSkge1xyXG4gICAgICAgICAgICBpZiAoZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgLy8gTG9nIGVycm9ycyBmcm9tIG5vbmNlIGdlbmVyYXRpb24gdG8gdGhlIGJyb3dzZXIgZGV2ZWxvcGVyIGNvbnNvbGUuXHJcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRW5jb3VudGVyZWQgZXJyb3JzOicpXHJcbiAgICAgICAgICAgICAgZXJyb3JzLmZvckVhY2goZnVuY3Rpb24gKGVycm9yOiBhbnkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJyAgJyArIGVycm9yLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICBzaG93TWVzc2FnZSgnRW5jb3VudGVyZWQgZXJyb3JzLCBjaGVjayBicm93c2VyIGRldmVsb3BlciBjb25zb2xlIGZvciBtb3JlIGRldGFpbHMnKVxyXG4gICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGFsZXJ0KGBUaGUgZ2VuZXJhdGVkIG5vbmNlIGlzOlxcbiR7bm9uY2V9YClcclxuICAgICAgICAgICAgZmV0Y2goYC9wYXkvcHJvY2Vzcy1wYXltZW50YCwge1xyXG4gICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgbm9uY2U6IG5vbmNlLFxyXG4gICAgICAgICAgICAgICAgYW1vdW50OiB+figob3JkZXJJbmZvLmFjdHVhbGx5UGFpZCA/PyAwKSAqIDEwMCksXHJcbiAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2hvd01lc3NhZ2UoJ05ldHdvcmsgZXJyb3I6ICcgKyBlcnIpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCkudGhlbigoZXJyb3JJbmZvOiBhbnkpID0+IFByb21pc2UucmVqZWN0KGVycm9ySW5mbykpIC8vVVBEQVRFIEhFUkVcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpIC8vVVBEQVRFIEhFUkVcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSkgLy9VUERBVEUgSEVSRVxyXG4gICAgICAgICAgICAgICAgICAvLyBzaG93TWVzc2FnZSgnUGF5bWVudCBjb21wbGV0ZSBzdWNjZXNzZnVsbHkhXFxuQ2hlY2sgYnJvd3NlciBkZXZlbG9wZXIgY29uc29sZSBmb3IgbW9yZSBkZXRhaWxzJylcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGFjdGlvbnNPRC51cGRhdGVPcmRlcih7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IG9yZGVySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6IE9yZGVyU3RhdGUuUGFpZCxcclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNob3dNZXNzYWdlKCfmlK/ku5jmiJDlip8nKVxyXG4gICAgICAgICAgICAgICAgICByb3V0ZXIucmVwbGFjZSgnL2NhcnQvcmVzdWx0JylcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgICAgICAgIHNob3dNZXNzYWdlKCdQYXltZW50IGZhaWxlZCB0byBjb21wbGV0ZSFcXG5DaGVjayBicm93c2VyIGRldmVsb3BlciBjb25zb2xlIGZvciBtb3JlIGRldGFpbHMnKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSlcclxuICAgICAgcGF5bWVudEZvcm0uYnVpbGQoKVxyXG4gICAgICBjb25zdCBvbkdldENhcmROb25jZSA9IChldmVudDogYW55KSA9PiB7XHJcbiAgICAgICAgLy8gRG9uJ3Qgc3VibWl0IHRoZSBmb3JtIHVudGlsIFNxUGF5bWVudEZvcm0gcmV0dXJucyB3aXRoIGEgbm9uY2VcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgLy8gUmVxdWVzdCBhIG5vbmNlIGZyb20gdGhlIFNxUGF5bWVudEZvcm0gb2JqZWN0XHJcbiAgICAgICAgcGF5bWVudEZvcm0ucmVxdWVzdENhcmROb25jZSgpXHJcbiAgICAgIH1cclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NxLWNyZWRpdGNhcmQnKT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkdldENhcmROb25jZSlcclxuICAgIH1cclxuICB9LCBbb3JkZXJJbmZvLmFjdHVhbGx5UGFpZF0pXHJcblxyXG4gIHJldHVybiA8ZGl2PlxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDx0aXRsZT5wYXk8L3RpdGxlPlxyXG4gICAgICA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIlxyXG4gICAgICAgICAgICAgIHNyYz17cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/ICdodHRwczovL2pzLnNxdWFyZXVwLmNvbS92Mi9wYXltZW50Zm9ybScgOiAnaHR0cHM6Ly9qcy5zcXVhcmV1cHNhbmRib3guY29tL3YyL3BheW1lbnRmb3JtJ30+XHJcbiAgICAgIDwvc2NyaXB0PlxyXG4gICAgPC9IZWFkPlxyXG4gICAgPEhlYWRlclRpdGxlXHJcbiAgICAgICAgdGl0bGU9eyfmlK/ku5gnfVxyXG4gICAgICAgIGJhY2tDYWxsPXsoKSA9PiB7XHJcbiAgICAgICAgICByb3V0ZXIucmVwbGFjZSgnL2hvbWUnKVxyXG4gICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9fVxyXG4gICAgLz5cclxuICAgIDxkaXYgaWQ9XCJmb3JtLWNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGlkPVwic3EtY2FyZC1udW1iZXJcIi8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGhpcmRcIlxyXG4gICAgICAgICAgIGlkPVwic3EtZXhwaXJhdGlvbi1kYXRlXCIvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRoaXJkXCJcclxuICAgICAgICAgICBpZD1cInNxLWN2dlwiLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aGlyZFwiXHJcbiAgICAgICAgICAgaWQ9XCJzcS1wb3N0YWwtY29kZVwiLz5cclxuICAgICAgPGJ1dHRvbiBpZD1cInNxLWNyZWRpdGNhcmRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbi1jcmVkaXQtY2FyZFwiXHJcbiAgICAgID5QYXkge2RlYWxNb25leShvcmRlckluZm8uYWN0dWFsbHlQYWlkKX1cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICA6Z2xvYmFsKCopIHtcclxuICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDpnbG9iYWwoYm9keSwgaHRtbCkge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjhGOTtcclxuICAgICAgICAgIGNvbG9yOiAjMzczRjRBO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA6Z2xvYmFsKGJ1dHRvbikge1xyXG4gICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDpnbG9iYWwoZmllbGRzZXQpIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA6Z2xvYmFsKCNmb3JtLWNvbnRhaW5lcikge1xyXG4gICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgIC8vcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgLy93aWR0aDogMzgwcHg7XHJcbiAgICAgICAgICAvL21hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgLy90b3A6IDUwJTtcclxuICAgICAgICAgIC8vdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgOmdsb2JhbCgudGhpcmQpIHtcclxuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgd2lkdGg6IGNhbGMoKDEwMCUgLSAzMnB4KSAvIDMpO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIG1hcmdpbjogMCAxNnB4IDE2cHggMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDpnbG9iYWwoLnRoaXJkOmxhc3Qtb2YtdHlwZSkge1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogRGVmaW5lIGhvdyBTcVBheW1lbnRGb3JtIGlmcmFtZXMgc2hvdWxkIGxvb2sgKi9cclxuICAgICAgICA6Z2xvYmFsKC5zcS1pbnB1dCkge1xyXG4gICAgICAgICAgaGVpZ2h0OiA1NlBYO1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNFMEUyRTM7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC4ycyBlYXNlLWluLW91dDtcclxuICAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC4ycyBlYXNlLWluLW91dDtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC4ycyBlYXNlLWluLW91dDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qIERlZmluZSBob3cgU3FQYXltZW50Rm9ybSBpZnJhbWVzIHNob3VsZCBsb29rIHdoZW4gdGhleSBoYXZlIGZvY3VzICovXHJcbiAgICAgICAgOmdsb2JhbCguc3EtaW5wdXQtLWZvY3VzKSB7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNEE5MEUyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogRGVmaW5lIGhvdyBTcVBheW1lbnRGb3JtIGlmcmFtZXMgc2hvdWxkIGxvb2sgd2hlbiB0aGV5IGNvbnRhaW4gaW52YWxpZCB2YWx1ZXMgKi9cclxuICAgICAgICA6Z2xvYmFsKC5zcS1pbnB1dC0tZXJyb3IpIHtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNFMDJGMkY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA6Z2xvYmFsKCNzcS1jYXJkLW51bWJlcikge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qIEN1c3RvbWl6ZSB0aGUgXCJQYXkgd2l0aCBDcmVkaXQgQ2FyZFwiIGJ1dHRvbiAqL1xyXG4gICAgICAgIDpnbG9iYWwoLmJ1dHRvbi1jcmVkaXQtY2FyZCkge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzRBOTBFMjtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQgLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4ycyBlYXNlLWluLW91dDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDpnbG9iYWwoLmJ1dHRvbi1jcmVkaXQtY2FyZDpob3Zlcikge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQyODFDQjtcclxuICAgICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbn1cclxuIl19 */\n/*@ sourceURL=D:\\\\code\\\\zw\\\\zw_client_web\\\\utils\\\\view\\\\pay\\\\index.tsx */"));
};

_s(Pay, "BoX5+U8iSCxWP1b/WK/+J9iB0m4=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"], _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_6__["useStoreModel"]];
});

_c = Pay;

var _c;

$RefreshReg$(_c, "Pay");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy92aWV3L21lL29yZGVyRGV0YWlsL29yZGVyRGV0YWlsLnRzeCIsIndlYnBhY2s6Ly8vLi91dGlscy92aWV3L3BheS9pbmRleC50c3giXSwibmFtZXMiOlsib3JkZXJEZXRhaWxNb2RlbCIsIm1vZGVsRmFjdG9yeSIsIm9yZGVySW5mbyIsInNlbGZBZGRyZXNzIiwiZ2V0RGV0YWlsIiwidmFsdWUiLCJvcHRpb24iLCJxdWVyeSIsImRvYyIsIm9yZGVyRGV0YWlsIiwiaWQiLCJyZXMiLCJzZXREYXRhIiwiZnBNZXJnZVByZSIsImxpc3QiLCJ1cGRhdGVPcmRlciIsIm11dGF0ZSIsIm9yZGVySW5mb0l0ZW1JbnB1dCIsIkJveCIsInN0eWxlZCIsImRpdiIsIlRvcCIsIm1wU3R5bGUiLCJyZWQiLCJJbmZvTGFiZWwiLCJncmV5IiwiR3JleVBhcnQiLCJQcm9kdWN0Qm94IiwiU3VtIiwiT3JkZXJEZXRhaWwiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdG9yZU1vZGVsIiwic3RhdGVPRCIsInN0YXRlIiwiYWN0aW9uc09EIiwiYWN0aW9ucyIsInVzZUVmZmVjdCIsImxzIiwiZm9ybWF0RGF0ZSIsImNyZWF0ZVRpbWUiLCJvcmRlclN0YXRlVG9TdHJpbmciLCJwaWNrVXBUeXBlIiwiUGlja1VwVHlwZUVudW0iLCJTZWxmIiwidiIsInByb3ZpbmNlIiwiY2l0eSIsInN0cmVldEFkZHJlc3MiLCJmaW5kIiwic2VsZkFkZHJlc3NJZCIsInVzZXJBZGRyZXNzIiwiY29tYmluZUFkZHJlc3MiLCJudW1iZXIiLCJ1c2VyUGF5Q2FyZCIsImNvZGUiLCJleHBpcmF0aW9uVGltZSIsInVzZXJOYW1lIiwick9yZGVyUHJvZHVjdCIsIm1hcCIsImRlYWxJbWdVcmwiLCJwcm9kdWN0IiwiaW1nIiwidXJsIiwibmFtZSIsImRlYWxNb25leSIsInByaWNlTWFya2V0IiwicHJpY2VPdXQiLCJoZWlnaHQiLCJ3aWR0aCIsInN1YnRvdGFsIiwidHJhbnNwb3J0YXRpb25Db3N0cyIsImRlZHVjdENvaW4iLCJzYWxlVGF4IiwiYWN0dWFsbHlQYWlkIiwiZ2VuZXJhdGVDb2luIiwiYXBwbGljYXRpb25JZCIsIlBheSIsIm9yZGVySWQiLCJ3aW5kb3ciLCJTcVBheW1lbnRGb3JtIiwicGF5bWVudEZvcm0iLCJpbnB1dENsYXNzIiwiYXV0b0J1aWxkIiwiaW5wdXRTdHlsZXMiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJwYWRkaW5nIiwicGxhY2Vob2xkZXJDb2xvciIsImJhY2tncm91bmRDb2xvciIsImNhcmROdW1iZXIiLCJlbGVtZW50SWQiLCJwbGFjZWhvbGRlciIsImN2diIsImV4cGlyYXRpb25EYXRlIiwicG9zdGFsQ29kZSIsImNhbGxiYWNrcyIsImNhcmROb25jZVJlc3BvbnNlUmVjZWl2ZWQiLCJlcnJvcnMiLCJub25jZSIsImNhcmREYXRhIiwiY29uc29sZSIsImVycm9yIiwiZm9yRWFjaCIsIm1lc3NhZ2UiLCJzaG93TWVzc2FnZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiYW1vdW50IiwiZXJyIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJqc29uIiwiZXJyb3JJbmZvIiwiUHJvbWlzZSIsInJlamVjdCIsImRhdGEiLCJPcmRlclN0YXRlIiwiUGFpZCIsInJlcGxhY2UiLCJidWlsZCIsIm9uR2V0Q2FyZE5vbmNlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInJlcXVlc3RDYXJkTm9uY2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLGdCQUFnQixHQUFHQywyRUFBWSxDQUFDLGFBQUQsRUFB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RUFBQyxnQkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE1BQUUsRUFBQyxnQkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQ0ssTUFBRSxFQUFDLG9CQURSO0FBQUEsd0NBQWUsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFJRTtBQUNLLE1BQUUsRUFBQyxRQURSO0FBQUEsd0NBQWUsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFNRTtBQUNLLE1BQUUsRUFBQyxnQkFEUjtBQUFBLHdDQUFlLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLEVBUUU7QUFBUSxNQUFFLEVBQUMsZUFBWDtBQUFBLHdDQUNrQixvQkFEbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUVNM0QsOERBQVMsQ0FBQy9ELFNBQVMsQ0FBQ3dFLFlBQVgsQ0FGZixDQVJGLENBZEs7QUFBQTtBQUFBO0FBQUEsb3RiQUFQO0FBNEhELENBOU9NOztHQUFNRyxHO1VBQ0k5QyxxRCxFQUc4QkMsbUU7OztLQUpsQzZDLEciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHBheS5qcy42Yjg1YTdiNTBmYjVmNzBjY2JlZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtIZWFkZXJUaXRsZX0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9IZWFkZXJUaXRsZS9IZWFkZXJUaXRsZSdcclxuaW1wb3J0IHtCU2Nyb2xsZXJ9IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvQlNjcm9sbC9CU2Nyb2xsZXInXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7bW9kZWxGYWN0b3J5fSBmcm9tICcuLi8uLi8uLi9Nb2RlbEFjdGlvbi9tb2RlbFV0aWwnXHJcbmltcG9ydCB7T3JkZXJJbmZvLCBPcmRlckluZm9JdGVtSW5wdXR9IGZyb20gJy4uLy4uLy4uL2dyYXBocWxUeXBlcy90eXBlcydcclxuaW1wb3J0IHtkb2N9IGZyb20gJy4uLy4uLy4uL2dyYXBocWxUeXBlcy9kb2MnXHJcbmltcG9ydCB7ZGVhbE1vbmV5LCBmb3JtYXREYXRlLCBmcE1lcmdlUHJlfSBmcm9tICcuLi8uLi8uLi90b29scy91dGlscydcclxuaW1wb3J0IHt1c2VTdG9yZU1vZGVsfSBmcm9tICcuLi8uLi8uLi9Nb2RlbEFjdGlvbi91c2VTdG9yZSdcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQge2xzfSBmcm9tICcuLi8uLi8uLi90b29scy9kZWFsS2V5J1xyXG5pbXBvcnQge29yZGVyU3RhdGVUb1N0cmluZywgUGlja1VwVHlwZUVudW19IGZyb20gJy4uLy4uLy4uL3NzX2NvbW1vbi9lbnVtJ1xyXG5pbXBvcnQge21wU3R5bGV9IGZyb20gJy4uLy4uLy4uL3N0eWxlL2NvbW1vbidcclxuaW1wb3J0IHtncmV5fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMnXHJcbmltcG9ydCB7ZGVhbEltZ1VybH0gZnJvbSAnLi4vLi4vLi4vdG9vbHMvaW1nJ1xyXG5pbXBvcnQge0J1dHRvbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcblxyXG5leHBvcnQgY29uc3Qgb3JkZXJEZXRhaWxNb2RlbCA9IG1vZGVsRmFjdG9yeSgnb3JkZXJEZXRhaWwnLCB7XHJcbiAgb3JkZXJJbmZvOiB7fSBhcyBPcmRlckluZm8sXHJcbiAgc2VsZkFkZHJlc3M6IFtdIGFzIGFueVtdLFxyXG59LCB7XHJcbiAgZ2V0RGV0YWlsOiBhc3luYyAodmFsdWU6IHN0cmluZywgb3B0aW9uKSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBvcHRpb24ucXVlcnkoZG9jLm9yZGVyRGV0YWlsLCB7aWQ6IHZhbHVlfSlcclxuICAgIG9wdGlvbi5zZXREYXRhKGZwTWVyZ2VQcmUoe1xyXG4gICAgICBvcmRlckluZm86IHJlcz8ub3JkZXJEZXRhaWwgfHwge30sXHJcbiAgICAgIHNlbGZBZGRyZXNzOiByZXM/LnNlbGZBZGRyZXNzPy52YWx1ZT8ubGlzdCB8fCBbXSxcclxuICAgIH0pKVxyXG4gIH0sXHJcbiAgdXBkYXRlT3JkZXI6IGFzeW5jICh2YWx1ZTogT3JkZXJJbmZvSXRlbUlucHV0LCBvcHRpb24pID0+IHtcclxuICAgIHJldHVybiBhd2FpdCBvcHRpb24ubXV0YXRlKGRvYy51cGRhdGVPcmRlciwge1xyXG4gICAgICBvcmRlckluZm9JdGVtSW5wdXQ6IHZhbHVlLFxyXG4gICAgfSlcclxuICB9LFxyXG59KVxyXG5cclxuY29uc3QgQm94ID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAwIDIwcHg7XHJcbmBcclxuY29uc3QgVG9wID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gID4gYXNpZGUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBjb2xvcjogJHttcFN0eWxlLnJlZH07XHJcbiAgfVxyXG5gXHJcbmNvbnN0IEluZm9MYWJlbCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gID4gYXNpZGUge1xyXG4gICAgY29sb3I6ICR7Z3JleVs2MDBdfTtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gIH1cclxuICBcclxuYFxyXG5cclxuY29uc3QgR3JleVBhcnQgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IC0yMHB4O1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEycHg7XHJcbiAgYmFja2dyb3VuZDogJHtncmV5WzIwMF19O1xyXG5gXHJcbmNvbnN0IFByb2R1Y3RCb3ggPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgcGFkZGluZy10b3A6IDR2dztcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgMWZyIDMwdnc7XHJcbiAgPiBpbWcge1xyXG4gICAgZ3JpZC1hcmVhOiAxLzEvNC8yO1xyXG4gICAgd2lkdGg6IDIwdnc7XHJcbiAgICBoZWlnaHQ6IDIwdnc7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE0cHg7XHJcbiAgfVxyXG4gID4gc2VjdGlvbiB7XHJcbiAgICBncmlkLWFyZWE6IDEvMi8yLzQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG4gID4gbWFpbiB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICBncmlkLWFyZWE6IDIvMi8zLzQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogJHtncmV5WzUwMF19O1xyXG4gIH1cclxuICA+IGZvb3RlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgPiBhc2lkZSB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gICAgfVxyXG4gICAgPiBzcGFuIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgY29sb3I6ICR7bXBTdHlsZS5yZWR9O1xyXG4gICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gID4gYXNpZGUge1xyXG4gICAgPiBidXR0b24ge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBwYWRkaW5nOiAycHggMTRweDtcclxuICAgIH1cclxuICB9XHJcbmBcclxuY29uc3QgU3VtID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgT3JkZXJEZXRhaWwgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCB7c3RhdGU6IHN0YXRlT0QsIGFjdGlvbnM6IGFjdGlvbnNPRH0gPSB1c2VTdG9yZU1vZGVsKG9yZGVyRGV0YWlsTW9kZWwpXHJcbiAgY29uc3Qgb3JkZXJJbmZvID0gc3RhdGVPRC5vcmRlckluZm9cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChyb3V0ZXIucXVlcnkuaWQgJiYgIXN0YXRlT0Qub3JkZXJJbmZvPy5pZCkge1xyXG4gICAgICBhY3Rpb25zT0QuZ2V0RGV0YWlsKGAke3JvdXRlci5xdWVyeT8uaWR9YClcclxuICAgIH1cclxuICB9LCBbcm91dGVyLnF1ZXJ5LmlkLCBzdGF0ZU9ELm9yZGVySW5mb10pXHJcblxyXG4gIHJldHVybiA8ZGl2PlxyXG4gICAgPEhlYWRlclRpdGxlXHJcbiAgICAgICAgdGl0bGU9eyforqLljZXor6bmg4UnfVxyXG4gICAgLz5cclxuICAgIHshb3JkZXJJbmZvPy5pZCA/IDxkaXYvPiA6IDxCU2Nyb2xsZXIgYm94SGVpZ2h0PXsnY2FsYygxMDB2aCAtIDYwcHgpJ30+XHJcbiAgICAgIDxCb3g+XHJcbiAgICAgICAgPFRvcD5cclxuICAgICAgICAgIDxzZWN0aW9uPntscyhmb3JtYXREYXRlKG9yZGVySW5mby5jcmVhdGVUaW1lKSl9PC9zZWN0aW9uPlxyXG4gICAgICAgICAgPGFzaWRlPntvcmRlclN0YXRlVG9TdHJpbmcob3JkZXJJbmZvPy5zdGF0ZSl9PC9hc2lkZT5cclxuICAgICAgICA8L1RvcD5cclxuICAgICAgICA8SW5mb0xhYmVsPlxyXG4gICAgICAgICAgPGFzaWRlPntscygn6YCB6LSn5Zyw5Z2AJyl9IDo8L2FzaWRlPlxyXG4gICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgIHsob3JkZXJJbmZvLnBpY2tVcFR5cGUgPT09IFBpY2tVcFR5cGVFbnVtLlNlbGYgJiZcclxuICAgICAgICAgICAgICAgICh2ID0+IGAke3YucHJvdmluY2V9ICR7di5jaXR5fSAke3Yuc3RyZWV0QWRkcmVzc31gKShzdGF0ZU9ELnNlbGZBZGRyZXNzLmZpbmQodiA9PiB2LmlkID09PSBvcmRlckluZm8uc2VsZkFkZHJlc3NJZCkpXHJcbiAgICAgICAgICAgICkgfHwgb3JkZXJJbmZvLnVzZXJBZGRyZXNzPy5jb21iaW5lQWRkcmVzc31cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L0luZm9MYWJlbD5cclxuICAgICAgICA8SW5mb0xhYmVsPlxyXG4gICAgICAgICAgPGFzaWRlPntscygn6K6i5Y2V57yW5Y+3Jyl9IDo8L2FzaWRlPlxyXG4gICAgICAgICAgPHNlY3Rpb24+e29yZGVySW5mby5udW1iZXJ9PC9zZWN0aW9uPlxyXG4gICAgICAgIDwvSW5mb0xhYmVsPlxyXG4gICAgICAgIDxJbmZvTGFiZWw+XHJcbiAgICAgICAgICA8YXNpZGU+e2xzKCfmlK/ku5jmlrnlvI8nKX0gOjwvYXNpZGU+XHJcbiAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgPGhlYWRlcj57b3JkZXJJbmZvPy51c2VyUGF5Q2FyZD8uY29kZX08L2hlYWRlcj5cclxuICAgICAgICAgICAgPG1haW4+e2Zvcm1hdERhdGUob3JkZXJJbmZvPy51c2VyUGF5Q2FyZD8uZXhwaXJhdGlvblRpbWUsICdNTS95eScpfTwvbWFpbj5cclxuICAgICAgICAgICAgPGZvb3Rlcj57b3JkZXJJbmZvPy51c2VyUGF5Q2FyZD8udXNlck5hbWV9PC9mb290ZXI+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9JbmZvTGFiZWw+XHJcbiAgICAgICAgPEdyZXlQYXJ0Lz5cclxuICAgICAgICB7b3JkZXJJbmZvLnJPcmRlclByb2R1Y3Q/Lm1hcChyT3JkZXJQcm9kdWN0ID0+IChcclxuICAgICAgICAgICAgPFByb2R1Y3RCb3hcclxuICAgICAgICAgICAgICAgIGtleT17YFByb2R1Y3RCb3hfJHtyT3JkZXJQcm9kdWN0LmlkfWB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17ZGVhbEltZ1VybChyT3JkZXJQcm9kdWN0LnByb2R1Y3Q/LmltZz8uWzBdPy51cmwpfVxyXG4gICAgICAgICAgICAgICAgICAgYWx0PVwiXCIvPlxyXG4gICAgICAgICAgICAgIDxzZWN0aW9uPntyT3JkZXJQcm9kdWN0LnByb2R1Y3Q/Lm5hbWV9PC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgIDxtYWluPueLrOeri+WMheijhTwvbWFpbj5cclxuICAgICAgICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgPGFzaWRlPntkZWFsTW9uZXkock9yZGVyUHJvZHVjdC5wcm9kdWN0Py5wcmljZU1hcmtldCl9PC9hc2lkZT5cclxuICAgICAgICAgICAgICAgIDxzcGFuPntkZWFsTW9uZXkock9yZGVyUHJvZHVjdC5wcm9kdWN0Py5wcmljZU91dCl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgICAgICAgIDxhc2lkZT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PXsnY29udGFpbmVkJ31cclxuICAgICAgICAgICAgICAgID57bHMoJ+WKoOWFpei0reeJqei9picpfTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvYXNpZGU+XHJcbiAgICAgICAgICAgIDwvUHJvZHVjdEJveD5cclxuICAgICAgICApKX1cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OiAnMjZweCcsIHdpZHRoOiAnMTAwJSd9fS8+XHJcbiAgICAgICAgPFN1bT5cclxuICAgICAgICAgIDxhc2lkZT57bHMoJ+Wwj+iuoScpfTwvYXNpZGU+XHJcbiAgICAgICAgICA8bWFpbj57ZGVhbE1vbmV5KG9yZGVySW5mby5zdWJ0b3RhbCl9PC9tYWluPlxyXG4gICAgICAgIDwvU3VtPlxyXG4gICAgICAgIDxTdW0+XHJcbiAgICAgICAgICA8YXNpZGU+e2xzKCfkvJjmg6DliLjmipjmiaMnKX08L2FzaWRlPlxyXG4gICAgICAgICAgPG1haW4+e2RlYWxNb25leSgwLCAnLScpfTwvbWFpbj5cclxuICAgICAgICA8L1N1bT5cclxuICAgICAgICA8U3VtPlxyXG4gICAgICAgICAgPGFzaWRlPntscygn6L+Q6LS5Jyl9PC9hc2lkZT5cclxuICAgICAgICAgIDxtYWluPntkZWFsTW9uZXkob3JkZXJJbmZvLnRyYW5zcG9ydGF0aW9uQ29zdHMpfTwvbWFpbj5cclxuICAgICAgICA8L1N1bT5cclxuICAgICAgICA8U3VtPlxyXG4gICAgICAgICAgPGFzaWRlPntscygn6L6+5Lq65biB5oq15omjJyl9PC9hc2lkZT5cclxuICAgICAgICAgIDxtYWluPntkZWFsTW9uZXkob3JkZXJJbmZvLmRlZHVjdENvaW4sICctJyl9PC9tYWluPlxyXG4gICAgICAgIDwvU3VtPlxyXG4gICAgICAgIDxTdW0+XHJcbiAgICAgICAgICA8YXNpZGU+e2xzKCfmtojotLnnqI4nKX08L2FzaWRlPlxyXG4gICAgICAgICAgPG1haW4+e2RlYWxNb25leShvcmRlckluZm8uc2FsZVRheCl9PC9tYWluPlxyXG4gICAgICAgIDwvU3VtPlxyXG4gICAgICAgIDxTdW0+XHJcbiAgICAgICAgICA8YXNpZGU+e2xzKCflrp7pmYXmlK/ku5gnKX08L2FzaWRlPlxyXG4gICAgICAgICAgPG1haW4+e2RlYWxNb25leShvcmRlckluZm8uYWN0dWFsbHlQYWlkKX08L21haW4+XHJcbiAgICAgICAgPC9TdW0+XHJcbiAgICAgICAgPFN1bT5cclxuICAgICAgICAgIDxhc2lkZT57bHMoJ+iOt+W+l+i+vuS6uuW4gScpfTwvYXNpZGU+XHJcbiAgICAgICAgICA8bWFpbj57ZGVhbE1vbmV5KG9yZGVySW5mby5nZW5lcmF0ZUNvaW4pfTwvbWFpbj5cclxuICAgICAgICA8L1N1bT5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OiAnOTZweCcsIHdpZHRoOiAnMTAwJSd9fS8+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9CU2Nyb2xsZXI+fVxyXG5cclxuICA8L2Rpdj5cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7SGVhZGVyVGl0bGV9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSGVhZGVyVGl0bGUvSGVhZGVyVGl0bGUnXHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHtzaG93TWVzc2FnZX0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9NZXNzYWdlL01lc3NhZ2UnXHJcbmltcG9ydCB7dXNlU3RvcmVNb2RlbH0gZnJvbSAnLi4vLi4vTW9kZWxBY3Rpb24vdXNlU3RvcmUnXHJcbmltcG9ydCB7b3JkZXJEZXRhaWxNb2RlbH0gZnJvbSAnLi4vbWUvb3JkZXJEZXRhaWwvb3JkZXJEZXRhaWwnXHJcbmltcG9ydCB7ZGVhbE1vbmV5fSBmcm9tICcuLi8uLi90b29scy91dGlscydcclxuaW1wb3J0IHtPcmRlclN0YXRlfSBmcm9tICcuLi8uLi9zc19jb21tb24vZW51bSdcclxuXHJcbmNvbnN0IGFwcGxpY2F0aW9uSWQgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID8gJ3NxMGlkcC1JQUV3WDc3SGR1bmw1ZFdCeUhRaklRJyA6ICdzYW5kYm94LXNxMGlkYi00MkZRN3dHQnd6aWJUb1JNOV96ZEZ3J1xyXG4vLyBjb25zdCBhcHBsaWNhdGlvbklkID0gJ3NxMGlkcC1JQUV3WDc3SGR1bmw1ZFdCeUhRaklRJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFBheSA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IG9yZGVySWQgPSAocm91dGVyLnF1ZXJ5Py5vcmRlcklkIGFzIHN0cmluZykgPz8gJydcclxuXHJcbiAgY29uc3Qge3N0YXRlOiBzdGF0ZU9ELCBhY3Rpb25zOiBhY3Rpb25zT0R9ID0gdXNlU3RvcmVNb2RlbChvcmRlckRldGFpbE1vZGVsKVxyXG4gIGNvbnN0IG9yZGVySW5mbyA9IHN0YXRlT0Qub3JkZXJJbmZvIHx8IHt9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAob3JkZXJJZCkge1xyXG4gICAgICBhY3Rpb25zT0QuZ2V0RGV0YWlsKGAke29yZGVySWR9YClcclxuICAgIH1cclxuICB9LCBbb3JkZXJJZF0pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBpZiAod2luZG93LlNxUGF5bWVudEZvcm0gJiYgb3JkZXJJbmZvLmFjdHVhbGx5UGFpZCkge1xyXG4gICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgIGNvbnN0IHBheW1lbnRGb3JtID0gbmV3IFNxUGF5bWVudEZvcm0oe1xyXG4gICAgICAgIC8vIEluaXRpYWxpemUgdGhlIHBheW1lbnQgZm9ybSBlbGVtZW50c1xyXG4gICAgICAgIGFwcGxpY2F0aW9uSWQsXHJcbiAgICAgICAgaW5wdXRDbGFzczogJ3NxLWlucHV0JyxcclxuICAgICAgICBhdXRvQnVpbGQ6IGZhbHNlLFxyXG4gICAgICAgIC8vIEN1c3RvbWl6ZSB0aGUgQ1NTIGZvciBTcVBheW1lbnRGb3JtIGlmcmFtZSBlbGVtZW50c1xyXG4gICAgICAgIGlucHV0U3R5bGVzOiBbe1xyXG4gICAgICAgICAgZm9udFNpemU6ICcxNnB4JyxcclxuICAgICAgICAgIGxpbmVIZWlnaHQ6ICcyNHB4JyxcclxuICAgICAgICAgIHBhZGRpbmc6ICcxNnB4JyxcclxuICAgICAgICAgIHBsYWNlaG9sZGVyQ29sb3I6ICcjYTBhMGEwJyxcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgICB9XSxcclxuICAgICAgICAvLyBJbml0aWFsaXplIHRoZSBjcmVkaXQgY2FyZCBwbGFjZWhvbGRlcnNcclxuICAgICAgICBjYXJkTnVtYmVyOiB7XHJcbiAgICAgICAgICBlbGVtZW50SWQ6ICdzcS1jYXJkLW51bWJlcicsXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJ0NhcmQgTnVtYmVyJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGN2djoge1xyXG4gICAgICAgICAgZWxlbWVudElkOiAnc3EtY3Z2JyxcclxuICAgICAgICAgIHBsYWNlaG9sZGVyOiAnQ1ZWJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGV4cGlyYXRpb25EYXRlOiB7XHJcbiAgICAgICAgICBlbGVtZW50SWQ6ICdzcS1leHBpcmF0aW9uLWRhdGUnLFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI6ICdNTS9ZWScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwb3N0YWxDb2RlOiB7XHJcbiAgICAgICAgICBlbGVtZW50SWQ6ICdzcS1wb3N0YWwtY29kZScsXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJ1Bvc3RhbCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyBTcVBheW1lbnRGb3JtIGNhbGxiYWNrIGZ1bmN0aW9uc1xyXG4gICAgICAgIGNhbGxiYWNrczoge1xyXG4gICAgICAgICAgLypcclxuICAgICAgICAgICogY2FsbGJhY2sgZnVuY3Rpb246IGNhcmROb25jZVJlc3BvbnNlUmVjZWl2ZWRcclxuICAgICAgICAgICogVHJpZ2dlcmVkIHdoZW46IFNxUGF5bWVudEZvcm0gY29tcGxldGVzIGEgY2FyZCBub25jZSByZXF1ZXN0XHJcbiAgICAgICAgICAqL1xyXG4gICAgICAgICAgY2FyZE5vbmNlUmVzcG9uc2VSZWNlaXZlZDogZnVuY3Rpb24gKGVycm9yczogYW55LCBub25jZTogYW55LCBjYXJkRGF0YTogYW55KSB7XHJcbiAgICAgICAgICAgIGlmIChlcnJvcnMpIHtcclxuICAgICAgICAgICAgICAvLyBMb2cgZXJyb3JzIGZyb20gbm9uY2UgZ2VuZXJhdGlvbiB0byB0aGUgYnJvd3NlciBkZXZlbG9wZXIgY29uc29sZS5cclxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFbmNvdW50ZXJlZCBlcnJvcnM6JylcclxuICAgICAgICAgICAgICBlcnJvcnMuZm9yRWFjaChmdW5jdGlvbiAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignICAnICsgZXJyb3IubWVzc2FnZSlcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIHNob3dNZXNzYWdlKCdFbmNvdW50ZXJlZCBlcnJvcnMsIGNoZWNrIGJyb3dzZXIgZGV2ZWxvcGVyIGNvbnNvbGUgZm9yIG1vcmUgZGV0YWlscycpXHJcbiAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gYWxlcnQoYFRoZSBnZW5lcmF0ZWQgbm9uY2UgaXM6XFxuJHtub25jZX1gKVxyXG4gICAgICAgICAgICBmZXRjaChgL3BheS9wcm9jZXNzLXBheW1lbnRgLCB7XHJcbiAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBub25jZTogbm9uY2UsXHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IH5+KChvcmRlckluZm8uYWN0dWFsbHlQYWlkID8/IDApICogMTAwKSxcclxuICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzaG93TWVzc2FnZSgnTmV0d29yayBlcnJvcjogJyArIGVycilcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKS50aGVuKChlcnJvckluZm86IGFueSkgPT4gUHJvbWlzZS5yZWplY3QoZXJyb3JJbmZvKSkgLy9VUERBVEUgSEVSRVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCkgLy9VUERBVEUgSEVSRVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKSAvL1VQREFURSBIRVJFXHJcbiAgICAgICAgICAgICAgICAgIC8vIHNob3dNZXNzYWdlKCdQYXltZW50IGNvbXBsZXRlIHN1Y2Nlc3NmdWxseSFcXG5DaGVjayBicm93c2VyIGRldmVsb3BlciBjb25zb2xlIGZvciBtb3JlIGRldGFpbHMnKVxyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gYWN0aW9uc09ELnVwZGF0ZU9yZGVyKHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogb3JkZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogT3JkZXJTdGF0ZS5QYWlkLFxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2hvd01lc3NhZ2UoJ+aUr+S7mOaIkOWKnycpXHJcbiAgICAgICAgICAgICAgICAgIHJvdXRlci5yZXBsYWNlKCcvY2FydC9yZXN1bHQnKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycilcclxuICAgICAgICAgICAgICAgICAgc2hvd01lc3NhZ2UoJ1BheW1lbnQgZmFpbGVkIHRvIGNvbXBsZXRlIVxcbkNoZWNrIGJyb3dzZXIgZGV2ZWxvcGVyIGNvbnNvbGUgZm9yIG1vcmUgZGV0YWlscycpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KVxyXG4gICAgICBwYXltZW50Rm9ybS5idWlsZCgpXHJcbiAgICAgIGNvbnN0IG9uR2V0Q2FyZE5vbmNlID0gKGV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgICAvLyBEb24ndCBzdWJtaXQgdGhlIGZvcm0gdW50aWwgU3FQYXltZW50Rm9ybSByZXR1cm5zIHdpdGggYSBub25jZVxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAvLyBSZXF1ZXN0IGEgbm9uY2UgZnJvbSB0aGUgU3FQYXltZW50Rm9ybSBvYmplY3RcclxuICAgICAgICBwYXltZW50Rm9ybS5yZXF1ZXN0Q2FyZE5vbmNlKClcclxuICAgICAgfVxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3EtY3JlZGl0Y2FyZCcpPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uR2V0Q2FyZE5vbmNlKVxyXG4gICAgfVxyXG4gIH0sIFtvcmRlckluZm8uYWN0dWFsbHlQYWlkXSlcclxuXHJcbiAgcmV0dXJuIDxkaXY+XHJcbiAgICA8SGVhZD5cclxuICAgICAgPHRpdGxlPnBheTwvdGl0bGU+XHJcbiAgICAgIDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiXHJcbiAgICAgICAgICAgICAgc3JjPXtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID8gJ2h0dHBzOi8vanMuc3F1YXJldXAuY29tL3YyL3BheW1lbnRmb3JtJyA6ICdodHRwczovL2pzLnNxdWFyZXVwc2FuZGJveC5jb20vdjIvcGF5bWVudGZvcm0nfT5cclxuICAgICAgPC9zY3JpcHQ+XHJcbiAgICA8L0hlYWQ+XHJcbiAgICA8SGVhZGVyVGl0bGVcclxuICAgICAgICB0aXRsZT17J+aUr+S7mCd9XHJcbiAgICAgICAgYmFja0NhbGw9eygpID0+IHtcclxuICAgICAgICAgIHJvdXRlci5yZXBsYWNlKCcvaG9tZScpXHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH19XHJcbiAgICAvPlxyXG4gICAgPGRpdiBpZD1cImZvcm0tY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgaWQ9XCJzcS1jYXJkLW51bWJlclwiLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aGlyZFwiXHJcbiAgICAgICAgICAgaWQ9XCJzcS1leHBpcmF0aW9uLWRhdGVcIi8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGhpcmRcIlxyXG4gICAgICAgICAgIGlkPVwic3EtY3Z2XCIvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRoaXJkXCJcclxuICAgICAgICAgICBpZD1cInNxLXBvc3RhbC1jb2RlXCIvPlxyXG4gICAgICA8YnV0dG9uIGlkPVwic3EtY3JlZGl0Y2FyZFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uLWNyZWRpdC1jYXJkXCJcclxuICAgICAgPlBheSB7ZGVhbE1vbmV5KG9yZGVySW5mby5hY3R1YWxseVBhaWQpfVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIDpnbG9iYWwoKikge1xyXG4gICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgOmdsb2JhbChib2R5LCBodG1sKSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGOEY5O1xyXG4gICAgICAgICAgY29sb3I6ICMzNzNGNEE7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDpnbG9iYWwoYnV0dG9uKSB7XHJcbiAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgOmdsb2JhbChmaWVsZHNldCkge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDpnbG9iYWwoI2Zvcm0tY29udGFpbmVyKSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgLy9wb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAvL3dpZHRoOiAzODBweDtcclxuICAgICAgICAgIC8vbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAvL3RvcDogNTAlO1xyXG4gICAgICAgICAgLy90cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA6Z2xvYmFsKC50aGlyZCkge1xyXG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICB3aWR0aDogY2FsYygoMTAwJSAtIDMycHgpIC8gMyk7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDE2cHggMTZweCAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgOmdsb2JhbCgudGhpcmQ6bGFzdC1vZi10eXBlKSB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBEZWZpbmUgaG93IFNxUGF5bWVudEZvcm0gaWZyYW1lcyBzaG91bGQgbG9vayAqL1xyXG4gICAgICAgIDpnbG9iYWwoLnNxLWlucHV0KSB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDU2UFg7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0UwRTJFMztcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogRGVmaW5lIGhvdyBTcVBheW1lbnRGb3JtIGlmcmFtZXMgc2hvdWxkIGxvb2sgd2hlbiB0aGV5IGhhdmUgZm9jdXMgKi9cclxuICAgICAgICA6Z2xvYmFsKC5zcS1pbnB1dC0tZm9jdXMpIHtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM0QTkwRTI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBEZWZpbmUgaG93IFNxUGF5bWVudEZvcm0gaWZyYW1lcyBzaG91bGQgbG9vayB3aGVuIHRoZXkgY29udGFpbiBpbnZhbGlkIHZhbHVlcyAqL1xyXG4gICAgICAgIDpnbG9iYWwoLnNxLWlucHV0LS1lcnJvcikge1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0UwMkYyRjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDpnbG9iYWwoI3NxLWNhcmQtbnVtYmVyKSB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogQ3VzdG9taXplIHRoZSBcIlBheSB3aXRoIENyZWRpdCBDYXJkXCIgYnV0dG9uICovXHJcbiAgICAgICAgOmdsb2JhbCguYnV0dG9uLWNyZWRpdC1jYXJkKSB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogNTZweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjNEE5MEUyO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4ycyBlYXNlLWluLW91dDtcclxuICAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgOmdsb2JhbCguYnV0dG9uLWNyZWRpdC1jYXJkOmhvdmVyKSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI4MUNCO1xyXG4gICAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICA8L2Rpdj5cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9