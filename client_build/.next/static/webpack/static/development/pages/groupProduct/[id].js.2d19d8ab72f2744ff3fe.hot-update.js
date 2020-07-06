webpackHotUpdate("static\\development\\pages\\groupProduct\\[id].js",{

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
      lineNumber: 75,
      columnNumber: 38
    }
  }, __jsx(_cart_CartProduct__WEBPACK_IMPORTED_MODULE_9__["ShopCartProductBox"], {
    style: {
      padding: '20px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: Object(_tools_img__WEBPACK_IMPORTED_MODULE_10__["dealImgUrl"])(product === null || product === void 0 ? void 0 : (_product$img = product.img) === null || _product$img === void 0 ? void 0 : (_product$img$ = _product$img[0]) === null || _product$img$ === void 0 ? void 0 : _product$img$.url),
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }), __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }, product === null || product === void 0 ? void 0 : product.name, product === null || product === void 0 ? void 0 : product.weight, product === null || product === void 0 ? void 0 : product.unit), __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }, product === null || product === void 0 ? void 0 : product.remark), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, __jsx(_components_ProductItem_ProductItem__WEBPACK_IMPORTED_MODULE_11__["ProductPrice"], {
    product: product,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
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
      lineNumber: 87,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["MenuItem"], {
    value: _ss_common_enum__WEBPACK_IMPORTED_MODULE_15__["PickUpTypeEnum"].Self,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_13__["ls"])(Object(_ss_common_enum__WEBPACK_IMPORTED_MODULE_15__["getPickUpTypeName"])(_ss_common_enum__WEBPACK_IMPORTED_MODULE_15__["PickUpTypeEnum"].Self))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["MenuItem"], {
    value: _ss_common_enum__WEBPACK_IMPORTED_MODULE_15__["PickUpTypeEnum"].Delivery,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_13__["ls"])(Object(_ss_common_enum__WEBPACK_IMPORTED_MODULE_15__["getPickUpTypeName"])(_ss_common_enum__WEBPACK_IMPORTED_MODULE_15__["PickUpTypeEnum"].Delivery)))), __jsx(_cart_orderPage__WEBPACK_IMPORTED_MODULE_17__["AddressBox"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 5
    }
  }, __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }
  }, "".concat(addressData.combineAddress)), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }
  }, "".concat(addressData.name, " ").concat(addressData.contactInformation))), __jsx("aside", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
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
      lineNumber: 119,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_16___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 11
    }
  })))), __jsx(_cart_orderPage__WEBPACK_IMPORTED_MODULE_17__["ShopTitle"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 5
    }
  }, __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_14__["Space"], {
    w: 20,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 7
    }
  }), Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_13__["ls"])('付款方式')), __jsx(_cart_orderPage__WEBPACK_IMPORTED_MODULE_17__["CardBox"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 5
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 7
    }
  }, cardData.name), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 7
    }
  }, cardData.number), __jsx("aside", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
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
      lineNumber: 139,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_16___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 11
    }
  })))), __jsx(_cart_components_SelectAddress__WEBPACK_IMPORTED_MODULE_19__["SelectAddress"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 5
    }
  }), __jsx(_cart_components_SelectCard__WEBPACK_IMPORTED_MODULE_20__["SelectCard"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 5
    }
  }), __jsx(_cart_orderPage__WEBPACK_IMPORTED_MODULE_17__["ShopTotal"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 5
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_13__["ls"])('购物车总计')), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 7
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_7__["dealMoney"])(productTotal))), transportationCosts > 0 && __jsx(_cart_orderPage__WEBPACK_IMPORTED_MODULE_17__["ShopTotal"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 33
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_13__["ls"])('运费')), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 7
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_7__["dealMoney"])(transportationCosts))), __jsx(_cart_orderPage__WEBPACK_IMPORTED_MODULE_17__["ShopTotal"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 5
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_13__["ls"])('份数折扣')), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 7
    }
  }, stateGroupProduct.numDiscount)), __jsx(_cart_orderPage__WEBPACK_IMPORTED_MODULE_17__["ShopTotal"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 5
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_13__["ls"])('成团折上折')), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 7
    }
  }, stateGroupProduct.groupDiscount)), __jsx(_cart_orderPage__WEBPACK_IMPORTED_MODULE_17__["ShopTotal"], {
    style: {
      fontSize: '18px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 5
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_13__["ls"])('订单总额')), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 7
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_7__["dealMoney"])(actuallyPaid))), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_14__["Space"], {
    h: 60,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 5
    }
  }), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 5
    }
  }, __jsx(_components_ButtonLoad_ButtonLoad__WEBPACK_IMPORTED_MODULE_21__["ButtonLoad"], {
    variant: 'contained',
    color: 'secondary',
    onClick: function onClick() {
      var _stateSCM$user$userIn;

      actionsGroupProduct.submit({
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
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_13__["ls"])('提交订单')))) || null;
};

_s(GroupOrderPage, "mTbFevOcmvbkW8/m/Zwh6hGZW04=", false, function () {
  return [_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_6__["useStoreModel"], _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_6__["useStoreModel"], _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_6__["useStoreModel"], _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_6__["useStoreModel"], _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_6__["useStoreModel"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy92aWV3L2dyb3VwUHJvZHVjdC9ncm91cE9yZGVyUGFnZS50c3giXSwibmFtZXMiOlsiZ3JvdXBPcmRlclBhZ2VNb2RlbCIsIm1vZGVsRmFjdG9yeSIsInNob3ciLCJvcGVuIiwidmFsdWUiLCJvcHRpb24iLCJzZXREYXRhIiwiZnBNZXJnZVByZSIsIk9yZGVyUGFnZUJveCIsInN0eWxlZCIsImRpdiIsIm1wU3R5bGUiLCJzaGFkb3ciLCJHcm91cE9yZGVyUGFnZSIsInVzZVN0b3JlTW9kZWwiLCJzdGF0ZU9yZGVyUGFnZU1vZGVsIiwic3RhdGUiLCJncm91cFByb2R1Y3RNb2RlbCIsImFjdGlvbnNHcm91cFByb2R1Y3QiLCJhY3Rpb25zIiwic3RhdGVHcm91cFByb2R1Y3QiLCJwcm9kdWN0Iiwic2hvcENhcnRNb2RlbCIsInN0YXRlU0NNIiwiYWN0aW9uc1NDTSIsInVzZUVmZmVjdCIsInVzZXIiLCJpZCIsImdldE9yZGVySW5mbyIsInNlbGVjdEFkZHJlc3NNb2RlbCIsImFjdGlvbnNTQU0iLCJzZWxlY3RDYXJkTW9kZWwiLCJhY3Rpb25zU2VsZWN0Q2FyZCIsImFkZHJlc3NEYXRhIiwiZGVhbEFkZHJlc3NEYXRhIiwiY2FyZERhdGEiLCJwYXlDYXJkTGlzdCIsImZpbmQiLCJ2IiwiZm9ybSIsInBheW1lbnRNZXRob2RDYXJkSWQiLCJwcm9kdWN0VG90YWwiLCJwcmljZU91dCIsInNlbGVjdE51bSIsInRyYW5zcG9ydGF0aW9uQ29zdHMiLCJwaWNrVXBUeXBlIiwiUGlja1VwVHlwZUVudW0iLCJEZWxpdmVyeSIsImZyZWlnaHRDb25maWciLCJyZWR1Y2UiLCJwcmUiLCJjdXIiLCJwYXJzZUZsb2F0IiwiZnJlaWdodFBheSIsIm9yZGVyTWF4IiwibGVuZ3RoIiwiYWN0dWFsbHlQYWlkIiwiZGVhbE1heWJlTnVtYmVyIiwic2FsZVRheCIsImdlbmVyYXRlQ29pbiIsInBhZGRpbmciLCJkZWFsSW1nVXJsIiwiaW1nIiwidXJsIiwibmFtZSIsIndlaWdodCIsInVuaXQiLCJyZW1hcmsiLCJscyIsIm1hcmdpbiIsIndpZHRoIiwiZXZlbnQiLCJzZXRGb3JtIiwidGFyZ2V0IiwiaW5pdEFkZHJlc3NJZCIsImZwTWVyZ2UiLCJTZWxmIiwiZ2V0UGlja1VwVHlwZU5hbWUiLCJjb21iaW5lQWRkcmVzcyIsImNvbnRhY3RJbmZvcm1hdGlvbiIsIm9wZW5DbGljayIsInJlcyIsIm51bWJlciIsImRlYWxNb25leSIsIm51bURpc2NvdW50IiwiZ3JvdXBEaXNjb3VudCIsImZvbnRTaXplIiwic3VibWl0Iiwib3JkZXJJbmZvSXRlbUlucHV0Iiwic3VidG90YWwiLCJjdXJyZW50VXNlckxldmVsIiwidXNlckluZm8iLCJ1c2VyTGV2ZWwiLCJyT3JkZXJQcm9kdWN0IiwiY291bnQiLCJwcm9kdWN0SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLG1CQUFtQixHQUFHQywyRUFBWSxDQUFDLGdCQUFELEVBQW1CO0FBQ2hFQyxNQUFJLEVBQUU7QUFEMEQsQ0FBbkIsRUFFNUM7QUFDREMsTUFBSSxFQUFFLGNBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUN2QkEsVUFBTSxDQUFDQyxPQUFQLENBQWVDLCtEQUFVLENBQUM7QUFDeEJMLFVBQUksRUFBRTtBQURrQixLQUFELENBQXpCO0FBR0Q7QUFMQSxDQUY0QyxDQUF4QztBQVVQLElBQU1NLFlBQVksR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw0S0FXQUMsc0RBQU8sQ0FBQ0MsTUFBUixDQUFlLEdBQWYsQ0FYQSxDQUFsQjtLQUFNSixZO0FBaUJDLElBQU1LLGNBQWMsR0FBRyxTQUFqQkEsY0FB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LEVBQVpBLFlBSGdCO0FBSWhCWiw2QkFBbUIsRUFBbkJBLG1CQUpnQjtBQUtoQjZDLGtCQUFRLEVBQUVoRCxZQUxNO0FBTWhCaUQsMEJBQWdCLDJCQUFFbkUsUUFBUSxDQUFDRyxJQUFULENBQWNpRSxRQUFoQiwwREFBRSxzQkFBd0JDLFNBTjFCO0FBT2hCQyx1QkFBYSxFQUFFLENBQUM7QUFDZEMsaUJBQUssRUFBRTFFLGlCQUFpQixDQUFDdUIsU0FEWDtBQUVkb0QscUJBQVMsRUFBRTFFLE9BQUYsYUFBRUEsT0FBRix1QkFBRUEsT0FBTyxDQUFFTSxFQUZOO0FBR2ROLG1CQUFPLEVBQVBBO0FBSGMsV0FBRDtBQVBDO0FBRE8sT0FBM0I7QUFlRCxLQW5CTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBb0JFK0MsMERBQUUsQ0FBQyxNQUFELENBcEJKLENBREYsQ0FyR2lDLENBQTVCLElBNEhZLElBNUhuQjtBQTZIRCxDQXZKTTs7R0FBTXZELGM7VUFDMEJDLG1FLEVBQzRCQSxtRSxFQUVsQkEsbUUsRUFNakJBLG1FLEVBQ09BLG1FOzs7TUFYMUJELGMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGdyb3VwUHJvZHVjdFxcW2lkXS5qcy4yZDE5ZDhhYjcyZjI3NDRmZjNmZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHttb2RlbEZhY3Rvcnl9IGZyb20gJy4uLy4uL01vZGVsQWN0aW9uL21vZGVsVXRpbCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHt1c2VTdG9yZU1vZGVsfSBmcm9tICcuLi8uLi9Nb2RlbEFjdGlvbi91c2VTdG9yZSdcclxuaW1wb3J0IHtkZWFsTWF5YmVOdW1iZXIsIGRlYWxNb25leSwgZnBNZXJnZSwgZnBNZXJnZVByZX0gZnJvbSAnLi4vLi4vdG9vbHMvdXRpbHMnXHJcbmltcG9ydCB7Z3JvdXBQcm9kdWN0TW9kZWx9IGZyb20gJy4vW2lkXSdcclxuaW1wb3J0IHtTaG9wQ2FydFByb2R1Y3RCb3h9IGZyb20gXCIuLi9jYXJ0L0NhcnRQcm9kdWN0XCI7XHJcbmltcG9ydCB7ZGVhbEltZ1VybH0gZnJvbSBcIi4uLy4uL3Rvb2xzL2ltZ1wiO1xyXG5pbXBvcnQge1Byb2R1Y3RQcmljZX0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUHJvZHVjdEl0ZW0vUHJvZHVjdEl0ZW1cIjtcclxuaW1wb3J0IHtJY29uQnV0dG9uLCBNZW51SXRlbSwgVGV4dEZpZWxkfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHtsc30gZnJvbSBcIi4uLy4uL3Rvb2xzL2RlYWxLZXlcIjtcclxuaW1wb3J0IHtTcGFjZX0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQm94L0JveFwiO1xyXG5pbXBvcnQge2dldFBpY2tVcFR5cGVOYW1lLCBQaWNrVXBUeXBlRW51bX0gZnJvbSBcIi4uLy4uL3NzX2NvbW1vbi9lbnVtXCI7XHJcbmltcG9ydCBDaGV2cm9uUmlnaHRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hldnJvblJpZ2h0XCI7XHJcbmltcG9ydCB7QWRkcmVzc0JveCwgQ2FyZEJveCwgU2hvcFRpdGxlLCBTaG9wVG90YWx9IGZyb20gXCIuLi9jYXJ0L29yZGVyUGFnZVwiO1xyXG5pbXBvcnQge3Nob3BDYXJ0TW9kZWx9IGZyb20gXCIuLi9jYXJ0XCI7XHJcbmltcG9ydCB7U2VsZWN0QWRkcmVzcywgc2VsZWN0QWRkcmVzc01vZGVsfSBmcm9tIFwiLi4vY2FydC9jb21wb25lbnRzL1NlbGVjdEFkZHJlc3NcIjtcclxuaW1wb3J0IHtTZWxlY3RDYXJkLCBzZWxlY3RDYXJkTW9kZWx9IGZyb20gXCIuLi9jYXJ0L2NvbXBvbmVudHMvU2VsZWN0Q2FyZFwiO1xyXG5pbXBvcnQge0J1dHRvbkxvYWR9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0J1dHRvbkxvYWQvQnV0dG9uTG9hZFwiO1xyXG5pbXBvcnQge21wU3R5bGV9IGZyb20gXCIuLi8uLi9zdHlsZS9jb21tb25cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBncm91cE9yZGVyUGFnZU1vZGVsID0gbW9kZWxGYWN0b3J5KCdvcmRlclBhZ2VNb2RlbCcsIHtcclxuICBzaG93OiBmYWxzZSxcclxufSwge1xyXG4gIG9wZW46ICh2YWx1ZSwgb3B0aW9uKSA9PiB7XHJcbiAgICBvcHRpb24uc2V0RGF0YShmcE1lcmdlUHJlKHtcclxuICAgICAgc2hvdzogdHJ1ZSxcclxuICAgIH0pKVxyXG4gIH0sXHJcbn0pXHJcblxyXG5jb25zdCBPcmRlclBhZ2VCb3ggPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgPiBmb290ZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaGFkb3c6ICR7bXBTdHlsZS5zaGFkb3dbXCIxXCJdfTtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEdyb3VwT3JkZXJQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHtzdGF0ZTogc3RhdGVPcmRlclBhZ2VNb2RlbH0gPSB1c2VTdG9yZU1vZGVsKGdyb3VwT3JkZXJQYWdlTW9kZWwpXHJcbiAgY29uc3Qge2FjdGlvbnM6IGFjdGlvbnNHcm91cFByb2R1Y3QsIHN0YXRlOiBzdGF0ZUdyb3VwUHJvZHVjdH0gPSB1c2VTdG9yZU1vZGVsKGdyb3VwUHJvZHVjdE1vZGVsKVxyXG4gIGNvbnN0IHByb2R1Y3QgPSBzdGF0ZUdyb3VwUHJvZHVjdC5wcm9kdWN0XHJcbiAgY29uc3Qge3N0YXRlOiBzdGF0ZVNDTSwgYWN0aW9uczogYWN0aW9uc1NDTX0gPSB1c2VTdG9yZU1vZGVsKHNob3BDYXJ0TW9kZWwpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghc3RhdGVTQ00udXNlci5pZCkge1xyXG4gICAgICBhY3Rpb25zU0NNLmdldE9yZGVySW5mbygpXHJcbiAgICB9XHJcbiAgfSwgW10pXHJcbiAgY29uc3Qge2FjdGlvbnM6IGFjdGlvbnNTQU19ID0gdXNlU3RvcmVNb2RlbChzZWxlY3RBZGRyZXNzTW9kZWwpXHJcbiAgY29uc3Qge2FjdGlvbnM6IGFjdGlvbnNTZWxlY3RDYXJkfSA9IHVzZVN0b3JlTW9kZWwoc2VsZWN0Q2FyZE1vZGVsKVxyXG5cclxuICBjb25zdCBhZGRyZXNzRGF0YSA9IHN0YXRlU0NNLmRlYWxBZGRyZXNzRGF0YShzdGF0ZVNDTSlcclxuICBjb25zdCBjYXJkRGF0YSA9IHN0YXRlU0NNLnBheUNhcmRMaXN0Py5maW5kKHYgPT4gdi5pZCA9PT0gc3RhdGVTQ00uZm9ybS5wYXltZW50TWV0aG9kQ2FyZElkKSB8fCB7fVxyXG4gIGNvbnN0IHByb2R1Y3RUb3RhbCA9IChwcm9kdWN0LnByaWNlT3V0ID8/IDApICogc3RhdGVHcm91cFByb2R1Y3Quc2VsZWN0TnVtXHJcbiAgY29uc3QgdHJhbnNwb3J0YXRpb25Db3N0cyA9IChzdGF0ZVNDTS5mb3JtLnBpY2tVcFR5cGUgPT09IFBpY2tVcFR5cGVFbnVtLkRlbGl2ZXJ5ICYmIChzdGF0ZVNDTS5mcmVpZ2h0Q29uZmlnLnJlZHVjZSgocHJlLCBjdXIpID0+IHtcclxuICAgIGlmIChwcmUgPiBwYXJzZUZsb2F0KGN1cj8uZnJlaWdodFBheSkgJiYgcHJvZHVjdFRvdGFsIDwgcGFyc2VGbG9hdChjdXI/Lm9yZGVyTWF4KSkge1xyXG4gICAgICByZXR1cm4gcGFyc2VGbG9hdChjdXI/LmZyZWlnaHRQYXkpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gcHJlXHJcbiAgICB9XHJcbiAgfSwgcGFyc2VGbG9hdChzdGF0ZVNDTS5mcmVpZ2h0Q29uZmlnW3N0YXRlU0NNLmZyZWlnaHRDb25maWcubGVuZ3RoIC0gMV0/LmZyZWlnaHRQYXkpKSkpIHx8IDBcclxuICBjb25zdCBhY3R1YWxseVBhaWQgPSBwcm9kdWN0VG90YWwgKyB0cmFuc3BvcnRhdGlvbkNvc3RzICsgZGVhbE1heWJlTnVtYmVyKHN0YXRlU0NNLmZvcm0uc2FsZVRheClcclxuICBjb25zdCBnZW5lcmF0ZUNvaW4gPSBhY3R1YWxseVBhaWQgKiAwLjAxXHJcblxyXG4gIHJldHVybiBzdGF0ZU9yZGVyUGFnZU1vZGVsLnNob3cgJiYgPE9yZGVyUGFnZUJveFxyXG4gID5cclxuICAgIDxTaG9wQ2FydFByb2R1Y3RCb3ggc3R5bGU9e3twYWRkaW5nOiAnMjBweCd9fT5cclxuICAgICAgPGltZyBzcmM9e2RlYWxJbWdVcmwocHJvZHVjdD8uaW1nPy5bMF0/LnVybCl9XHJcbiAgICAgICAgICAgYWx0PVwiXCIvPlxyXG4gICAgICA8bWFpbj57cHJvZHVjdD8ubmFtZX17cHJvZHVjdD8ud2VpZ2h0fXtwcm9kdWN0Py51bml0fTwvbWFpbj5cclxuICAgICAgPHNlY3Rpb24+e3Byb2R1Y3Q/LnJlbWFya308L3NlY3Rpb24+XHJcbiAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgPFByb2R1Y3RQcmljZSBwcm9kdWN0PXtwcm9kdWN0fS8+XHJcbiAgICAgICAgPHNwYW4+e3N0YXRlR3JvdXBQcm9kdWN0LnNlbGVjdE51bX17bHMoJ+S7vScpfTwvc3Bhbj5cclxuICAgICAgPC9mb290ZXI+XHJcbiAgICA8L1Nob3BDYXJ0UHJvZHVjdEJveD5cclxuICAgIDxUZXh0RmllbGRcclxuICAgICAgICBzdHlsZT17e21hcmdpbjogJzE2cHgnLCB3aWR0aDogJ2NhbGMoMTAwdncgLSAzMnB4KSd9fVxyXG4gICAgICAgIGZ1bGxXaWR0aD17dHJ1ZX1cclxuICAgICAgICBsYWJlbD17bHMoJ+i/kOmAgeaWueW8jycpfVxyXG4gICAgICAgIHNlbGVjdD17dHJ1ZX1cclxuICAgICAgICB2YWx1ZT17c3RhdGVTQ00uZm9ybS5waWNrVXBUeXBlfVxyXG4gICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB7XHJcbiAgICAgICAgICBhY3Rpb25zU0NNLnNldEZvcm0oWydwaWNrVXBUeXBlJywgZXZlbnQudGFyZ2V0LnZhbHVlXSlcclxuICAgICAgICAgIGFjdGlvbnNTQ00uc2V0Rm9ybShbJ2FkZHJlc3NJZCcsIHN0YXRlU0NNLmluaXRBZGRyZXNzSWQoZnBNZXJnZShzdGF0ZVNDTSwge1xyXG4gICAgICAgICAgICBmb3JtOiB7XHJcbiAgICAgICAgICAgICAgcGlja1VwVHlwZTogZXZlbnQudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSkpXSlcclxuICAgICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8TWVudUl0ZW1cclxuICAgICAgICAgIHZhbHVlPXtQaWNrVXBUeXBlRW51bS5TZWxmfVxyXG4gICAgICA+e2xzKGdldFBpY2tVcFR5cGVOYW1lKFBpY2tVcFR5cGVFbnVtLlNlbGYpKX08L01lbnVJdGVtPlxyXG4gICAgICA8TWVudUl0ZW1cclxuICAgICAgICAgIHZhbHVlPXtQaWNrVXBUeXBlRW51bS5EZWxpdmVyeX1cclxuICAgICAgPntscyhnZXRQaWNrVXBUeXBlTmFtZShQaWNrVXBUeXBlRW51bS5EZWxpdmVyeSkpfTwvTWVudUl0ZW0+XHJcbiAgICA8L1RleHRGaWVsZD5cclxuICAgIDxBZGRyZXNzQm94PlxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAge2Ake2FkZHJlc3NEYXRhLmNvbWJpbmVBZGRyZXNzfWB9XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgPGZvb3Rlcj5cclxuICAgICAgICAgIHtgJHthZGRyZXNzRGF0YS5uYW1lfSAke2FkZHJlc3NEYXRhLmNvbnRhY3RJbmZvcm1hdGlvbn1gfVxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICA8L21haW4+XHJcbiAgICAgIDxhc2lkZT5cclxuICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXthc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYWN0aW9uc1NBTS5vcGVuQ2xpY2soKVxyXG4gICAgICAgICAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbnNTQ00uc2V0Rm9ybShbJ2FkZHJlc3NJZCcsIHJlc10pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxDaGV2cm9uUmlnaHRJY29uLz5cclxuICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgIDwvYXNpZGU+XHJcbiAgICA8L0FkZHJlc3NCb3g+XHJcbiAgICA8U2hvcFRpdGxlPlxyXG4gICAgICA8U3BhY2Ugdz17MjB9Lz5cclxuICAgICAge2xzKCfku5jmrL7mlrnlvI8nKX1cclxuICAgIDwvU2hvcFRpdGxlPlxyXG4gICAgPENhcmRCb3g+XHJcbiAgICAgIDxoZWFkZXI+e2NhcmREYXRhLm5hbWV9PC9oZWFkZXI+XHJcbiAgICAgIDxmb290ZXI+e2NhcmREYXRhLm51bWJlcn08L2Zvb3Rlcj5cclxuICAgICAgPGFzaWRlPlxyXG4gICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBhY3Rpb25zU2VsZWN0Q2FyZC5vcGVuQ2xpY2soKVxyXG4gICAgICAgICAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbnNTQ00uc2V0Rm9ybShbJ3BheW1lbnRNZXRob2RDYXJkSWQnLCByZXNdKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8Q2hldnJvblJpZ2h0SWNvbi8+XHJcbiAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICA8L2FzaWRlPlxyXG4gICAgPC9DYXJkQm94PlxyXG4gICAgPFNlbGVjdEFkZHJlc3MvPlxyXG4gICAgPFNlbGVjdENhcmQvPlxyXG4gICAgPFNob3BUb3RhbD5cclxuICAgICAgPGhlYWRlcj57bHMoJ+i0reeJqei9puaAu+iuoScpfTwvaGVhZGVyPlxyXG4gICAgICA8Zm9vdGVyPntkZWFsTW9uZXkocHJvZHVjdFRvdGFsKX08L2Zvb3Rlcj5cclxuICAgIDwvU2hvcFRvdGFsPlxyXG4gICAge3RyYW5zcG9ydGF0aW9uQ29zdHMgPiAwICYmIDxTaG9wVG90YWw+XHJcbiAgICAgIDxoZWFkZXI+e2xzKCfov5DotLknKX08L2hlYWRlcj5cclxuICAgICAgPGZvb3Rlcj57ZGVhbE1vbmV5KHRyYW5zcG9ydGF0aW9uQ29zdHMpfTwvZm9vdGVyPlxyXG4gICAgPC9TaG9wVG90YWw+fVxyXG4gICAgPFNob3BUb3RhbD5cclxuICAgICAgPGhlYWRlcj57bHMoJ+S7veaVsOaKmOaJoycpfTwvaGVhZGVyPlxyXG4gICAgICA8Zm9vdGVyPntzdGF0ZUdyb3VwUHJvZHVjdC5udW1EaXNjb3VudH08L2Zvb3Rlcj5cclxuICAgIDwvU2hvcFRvdGFsPlxyXG4gICAgPFNob3BUb3RhbD5cclxuICAgICAgPGhlYWRlcj57bHMoJ+aIkOWbouaKmOS4iuaKmCcpfTwvaGVhZGVyPlxyXG4gICAgICA8Zm9vdGVyPntzdGF0ZUdyb3VwUHJvZHVjdC5ncm91cERpc2NvdW50fTwvZm9vdGVyPlxyXG4gICAgPC9TaG9wVG90YWw+XHJcbiAgICA8U2hvcFRvdGFsXHJcbiAgICAgICAgc3R5bGU9e3tmb250U2l6ZTogJzE4cHgnfX1cclxuICAgID5cclxuICAgICAgPGhlYWRlcj57bHMoJ+iuouWNleaAu+minScpfTwvaGVhZGVyPlxyXG4gICAgICA8Zm9vdGVyPntkZWFsTW9uZXkoYWN0dWFsbHlQYWlkKX08L2Zvb3Rlcj5cclxuICAgIDwvU2hvcFRvdGFsPlxyXG4gICAgPFNwYWNlIGg9ezYwfS8+XHJcbiAgICA8Zm9vdGVyPlxyXG4gICAgICA8QnV0dG9uTG9hZFxyXG4gICAgICAgICAgdmFyaWFudD17J2NvbnRhaW5lZCd9XHJcbiAgICAgICAgICBjb2xvcj17J3NlY29uZGFyeSd9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIGFjdGlvbnNHcm91cFByb2R1Y3Quc3VibWl0KHtcclxuICAgICAgICAgICAgICBvcmRlckluZm9JdGVtSW5wdXQ6IHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlU0NNLmZvcm0sXHJcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZUNvaW4sXHJcbiAgICAgICAgICAgICAgICBhY3R1YWxseVBhaWQsXHJcbiAgICAgICAgICAgICAgICB0cmFuc3BvcnRhdGlvbkNvc3RzLFxyXG4gICAgICAgICAgICAgICAgc3VidG90YWw6IHByb2R1Y3RUb3RhbCxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRVc2VyTGV2ZWw6IHN0YXRlU0NNLnVzZXIudXNlckluZm8/LnVzZXJMZXZlbCxcclxuICAgICAgICAgICAgICAgIHJPcmRlclByb2R1Y3Q6IFt7XHJcbiAgICAgICAgICAgICAgICAgIGNvdW50OiBzdGF0ZUdyb3VwUHJvZHVjdC5zZWxlY3ROdW0sXHJcbiAgICAgICAgICAgICAgICAgIHByb2R1Y3RJZDogcHJvZHVjdD8uaWQsXHJcbiAgICAgICAgICAgICAgICAgIHByb2R1Y3QsXHJcbiAgICAgICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9fVxyXG4gICAgICA+e2xzKCfmj5DkuqTorqLljZUnKX08L0J1dHRvbkxvYWQ+XHJcbiAgICA8L2Zvb3Rlcj5cclxuICA8L09yZGVyUGFnZUJveD4gfHwgbnVsbFxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=