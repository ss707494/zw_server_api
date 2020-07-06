webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./utils/graphqlTypes/doc/fragment.ts":
/*!********************************************!*\
  !*** ./utils/graphqlTypes/doc/fragment.ts ***!
  \********************************************/
/*! exports provided: fragment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fragment", function() { return fragment; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");


function _templateObject14() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      fragment GroupOrderFields on GroupOrder {\n          createTime\n          groupQueueId\n          id\n          isDelete\n          name\n          orderGroupAmount\n          orderId\n          updateTime\n          userId\n      }\n  "]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      fragment GroupQueueFields on GroupQueue {\n          createTime\n          fillAmount\n          id\n          isDelete\n          name\n          productId\n          updateTime\n      }\n  "]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    fragment DictFields on Dict {\n        code\n        createTime\n        dictTypeCode\n        id\n        isDelete\n        isDisable\n        name\n        remark\n        sort\n        updateTime\n    }\n  "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    fragment DataConfigFields on DataConfig {\n        createTime\n        id\n        isDelete\n        name\n        remark\n        type\n        updateTime\n        value\n    }\n  "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      fragment ShopCartFields on ShopCart {\n          createTime\n          id\n          isDelete\n          isNext\n          name\n          number\n          productId\n          updateTime\n          userId\n      }\n  "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      fragment UserPayCardFields on UserPayCard {\n          addressDetail\n          city\n          code\n          contact\n          createTime\n          expirationTime\n          id\n          isDefault\n          isDelete\n          name\n          number\n          updateTime\n          userId\n          userName\n          zipCode\n      }\n  "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      fragment UserAddressFields on UserAddress {\n          address\n          city\n          combineAddress\n          contactInformation\n          contactUserName\n          createTime\n          district\n          id\n          isDefault\n          isDelete\n          name\n          province\n          updateTime\n          userId\n          zip\n      }\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    fragment ImgFields on ProductImg {\n        createTime\n        id\n        isDelete\n        name\n        number\n        productId\n        updateTime\n        url\n    } \n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      fragment ProductFields on Product {\n          brand\n          categoryId\n          createTime\n          groupAmount\n          groupAmountUnit\n          groupPrecision\n          groupRemark\n          id\n          isDelete\n          isEnable\n          isGroup\n          isHot\n          isNew\n          name\n          number\n          packingUnit\n          priceIn\n          priceMarket\n          priceOut\n          remark\n          shelvesTypes\n          sort\n          stock\n          unit\n          updateTime\n          weight\n          unitString\n          groupPrecisionString\n          groupAmountUnitString\n          packingUnitString\n      }\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      fragment ROrderProductFields on ROrderProduct {\n          count\n          createTime\n          dealPrice\n          id\n          isDelete\n          name\n          orderId\n          productId\n          updateTime\n      }\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      fragment OrderInfoFields on OrderInfo {\n          id\n          name\n          createTime\n          updateTime\n          isDelete\n          number\n          state\n          actuallyPaid\n          addressId\n          paymentMethodCardId\n          subtotal\n          couponDiscount\n          vipDiscount\n          transportationCosts\n          saleTax\n          orderId\n          discountProductTotal\n          finishTime\n          pickUpTime\n          pickUpType\n          generateCoin\n          deductCoin\n          selfAddressId\n          currentUserLevel\n      }\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      fragment UserInfoFields on UserInfo {\n          id\n          name\n          createTime\n          updateTime\n          isDelete\n          userId\n          phone\n          email\n          userLevel\n          pickupAddressId\n      }\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      fragment UserFields on User {\n          id\n          name\n          createTime\n          updateTime\n          isDelete\n          password\n          type\n      }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      fragment Category on Category {\n          id\n          name\n          createTime\n          updateTime\n          isDelete\n          isEnable\n          remark\n          sort\n          parentId\n          fullParentId\n          number\n          userId\n          imgUrl\n      }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var fragment = {
  CategoryFields: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject()),
  UserFields: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject2()),
  UserInfoFields: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject3()),
  OrderInfoFields: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject4()),
  ROrderProductFields: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject5()),
  ProductFields: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject6()),
  ImgFields: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject7()),
  UserAddressFields: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject8()),
  UserPayCardFields: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject9()),
  ShopCartFields: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject10()),
  DataConfigFields: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject11()),
  DictFields: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject12()),
  GroupQueueFields: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject13()),
  GroupOrderFields: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject14())
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9ncmFwaHFsVHlwZXMvZG9jL2ZyYWdtZW50LnRzIl0sIm5hbWVzIjpbImZyYWdtZW50IiwiQ2F0ZWdvcnlGaWVsZHMiLCJncWwiLCJVc2VyRmllbGRzIiwiVXNlckluZm9GaWVsZHMiLCJPcmRlckluZm9GaWVsZHMiLCJST3JkZXJQcm9kdWN0RmllbGRzIiwiUHJvZHVjdEZpZWxkcyIsIkltZ0ZpZWxkcyIsIlVzZXJBZGRyZXNzRmllbGRzIiwiVXNlclBheUNhcmRGaWVsZHMiLCJTaG9wQ2FydEZpZWxkcyIsIkRhdGFDb25maWdGaWVsZHMiLCJEaWN0RmllbGRzIiwiR3JvdXBRdWV1ZUZpZWxkcyIsIkdyb3VwT3JkZXJGaWVsZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsUUFBUSxHQUFHO0FBQ3RCQyxnQkFBYyxFQUFFQyx3REFBRixtQkFEUTtBQWtCdEJDLFlBQVUsRUFBRUQsd0RBQUYsb0JBbEJZO0FBNkJ0QkUsZ0JBQWMsRUFBRUYsd0RBQUYsb0JBN0JRO0FBMkN0QkcsaUJBQWUsRUFBRUgsd0RBQUYsb0JBM0NPO0FBdUV0QkkscUJBQW1CLEVBQUVKLHdEQUFGLG9CQXZFRztBQW9GdEJLLGVBQWEsRUFBRUwsd0RBQUYsb0JBcEZTO0FBc0h0Qk0sV0FBUyxFQUFFTix3REFBRixvQkF0SGE7QUFrSXRCTyxtQkFBaUIsRUFBRVAsd0RBQUYsb0JBbElLO0FBcUp0QlEsbUJBQWlCLEVBQUVSLHdEQUFGLG9CQXJKSztBQXdLdEJTLGdCQUFjLEVBQUVULHdEQUFGLHFCQXhLUTtBQXFMdEJVLGtCQUFnQixFQUFFVix3REFBRixxQkFyTE07QUFpTXRCVyxZQUFVLEVBQUVYLHdEQUFGLHFCQWpNWTtBQStNdEJZLGtCQUFnQixFQUFFWix3REFBRixxQkEvTU07QUEwTnRCYSxrQkFBZ0IsRUFBRWIsd0RBQUY7QUExTk0sQ0FBakIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuMzhiMGJiMjJkZThkZmIzZGY3NzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Z3FsfSBmcm9tICdhcG9sbG8tYm9vc3QnXHJcblxyXG5leHBvcnQgY29uc3QgZnJhZ21lbnQgPSB7XHJcbiAgQ2F0ZWdvcnlGaWVsZHM6IGdxbGBcclxuICAgICAgZnJhZ21lbnQgQ2F0ZWdvcnkgb24gQ2F0ZWdvcnkge1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIG5hbWVcclxuICAgICAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgICAgIGlzRGVsZXRlXHJcbiAgICAgICAgICBpc0VuYWJsZVxyXG4gICAgICAgICAgcmVtYXJrXHJcbiAgICAgICAgICBzb3J0XHJcbiAgICAgICAgICBwYXJlbnRJZFxyXG4gICAgICAgICAgZnVsbFBhcmVudElkXHJcbiAgICAgICAgICBudW1iZXJcclxuICAgICAgICAgIHVzZXJJZFxyXG4gICAgICAgICAgaW1nVXJsXHJcbiAgICAgIH1cclxuICBgLFxyXG4gIFVzZXJGaWVsZHM6IGdxbGBcclxuICAgICAgZnJhZ21lbnQgVXNlckZpZWxkcyBvbiBVc2VyIHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICBjcmVhdGVUaW1lXHJcbiAgICAgICAgICB1cGRhdGVUaW1lXHJcbiAgICAgICAgICBpc0RlbGV0ZVxyXG4gICAgICAgICAgcGFzc3dvcmRcclxuICAgICAgICAgIHR5cGVcclxuICAgICAgfVxyXG4gIGAsXHJcbiAgVXNlckluZm9GaWVsZHM6IGdxbGBcclxuICAgICAgZnJhZ21lbnQgVXNlckluZm9GaWVsZHMgb24gVXNlckluZm8ge1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIG5hbWVcclxuICAgICAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgICAgIGlzRGVsZXRlXHJcbiAgICAgICAgICB1c2VySWRcclxuICAgICAgICAgIHBob25lXHJcbiAgICAgICAgICBlbWFpbFxyXG4gICAgICAgICAgdXNlckxldmVsXHJcbiAgICAgICAgICBwaWNrdXBBZGRyZXNzSWRcclxuICAgICAgfVxyXG4gIGAsXHJcbiAgT3JkZXJJbmZvRmllbGRzOiBncWxgXHJcbiAgICAgIGZyYWdtZW50IE9yZGVySW5mb0ZpZWxkcyBvbiBPcmRlckluZm8ge1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIG5hbWVcclxuICAgICAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgICAgIGlzRGVsZXRlXHJcbiAgICAgICAgICBudW1iZXJcclxuICAgICAgICAgIHN0YXRlXHJcbiAgICAgICAgICBhY3R1YWxseVBhaWRcclxuICAgICAgICAgIGFkZHJlc3NJZFxyXG4gICAgICAgICAgcGF5bWVudE1ldGhvZENhcmRJZFxyXG4gICAgICAgICAgc3VidG90YWxcclxuICAgICAgICAgIGNvdXBvbkRpc2NvdW50XHJcbiAgICAgICAgICB2aXBEaXNjb3VudFxyXG4gICAgICAgICAgdHJhbnNwb3J0YXRpb25Db3N0c1xyXG4gICAgICAgICAgc2FsZVRheFxyXG4gICAgICAgICAgb3JkZXJJZFxyXG4gICAgICAgICAgZGlzY291bnRQcm9kdWN0VG90YWxcclxuICAgICAgICAgIGZpbmlzaFRpbWVcclxuICAgICAgICAgIHBpY2tVcFRpbWVcclxuICAgICAgICAgIHBpY2tVcFR5cGVcclxuICAgICAgICAgIGdlbmVyYXRlQ29pblxyXG4gICAgICAgICAgZGVkdWN0Q29pblxyXG4gICAgICAgICAgc2VsZkFkZHJlc3NJZFxyXG4gICAgICAgICAgY3VycmVudFVzZXJMZXZlbFxyXG4gICAgICB9XHJcbiAgYCxcclxuICBST3JkZXJQcm9kdWN0RmllbGRzOiBncWxgXHJcbiAgICAgIGZyYWdtZW50IFJPcmRlclByb2R1Y3RGaWVsZHMgb24gUk9yZGVyUHJvZHVjdCB7XHJcbiAgICAgICAgICBjb3VudFxyXG4gICAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgICAgZGVhbFByaWNlXHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgaXNEZWxldGVcclxuICAgICAgICAgIG5hbWVcclxuICAgICAgICAgIG9yZGVySWRcclxuICAgICAgICAgIHByb2R1Y3RJZFxyXG4gICAgICAgICAgdXBkYXRlVGltZVxyXG4gICAgICB9XHJcbiAgYCxcclxuICBQcm9kdWN0RmllbGRzOiBncWxgXHJcbiAgICAgIGZyYWdtZW50IFByb2R1Y3RGaWVsZHMgb24gUHJvZHVjdCB7XHJcbiAgICAgICAgICBicmFuZFxyXG4gICAgICAgICAgY2F0ZWdvcnlJZFxyXG4gICAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgICAgZ3JvdXBBbW91bnRcclxuICAgICAgICAgIGdyb3VwQW1vdW50VW5pdFxyXG4gICAgICAgICAgZ3JvdXBQcmVjaXNpb25cclxuICAgICAgICAgIGdyb3VwUmVtYXJrXHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgaXNEZWxldGVcclxuICAgICAgICAgIGlzRW5hYmxlXHJcbiAgICAgICAgICBpc0dyb3VwXHJcbiAgICAgICAgICBpc0hvdFxyXG4gICAgICAgICAgaXNOZXdcclxuICAgICAgICAgIG5hbWVcclxuICAgICAgICAgIG51bWJlclxyXG4gICAgICAgICAgcGFja2luZ1VuaXRcclxuICAgICAgICAgIHByaWNlSW5cclxuICAgICAgICAgIHByaWNlTWFya2V0XHJcbiAgICAgICAgICBwcmljZU91dFxyXG4gICAgICAgICAgcmVtYXJrXHJcbiAgICAgICAgICBzaGVsdmVzVHlwZXNcclxuICAgICAgICAgIHNvcnRcclxuICAgICAgICAgIHN0b2NrXHJcbiAgICAgICAgICB1bml0XHJcbiAgICAgICAgICB1cGRhdGVUaW1lXHJcbiAgICAgICAgICB3ZWlnaHRcclxuICAgICAgICAgIHVuaXRTdHJpbmdcclxuICAgICAgICAgIGdyb3VwUHJlY2lzaW9uU3RyaW5nXHJcbiAgICAgICAgICBncm91cEFtb3VudFVuaXRTdHJpbmdcclxuICAgICAgICAgIHBhY2tpbmdVbml0U3RyaW5nXHJcbiAgICAgIH1cclxuICBgLFxyXG4gIEltZ0ZpZWxkczogZ3FsYFxyXG4gICAgZnJhZ21lbnQgSW1nRmllbGRzIG9uIFByb2R1Y3RJbWcge1xyXG4gICAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgICBpZFxyXG4gICAgICAgIGlzRGVsZXRlXHJcbiAgICAgICAgbmFtZVxyXG4gICAgICAgIG51bWJlclxyXG4gICAgICAgIHByb2R1Y3RJZFxyXG4gICAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgICB1cmxcclxuICAgIH0gXHJcbiAgYCxcclxuICBVc2VyQWRkcmVzc0ZpZWxkczogZ3FsYFxyXG4gICAgICBmcmFnbWVudCBVc2VyQWRkcmVzc0ZpZWxkcyBvbiBVc2VyQWRkcmVzcyB7XHJcbiAgICAgICAgICBhZGRyZXNzXHJcbiAgICAgICAgICBjaXR5XHJcbiAgICAgICAgICBjb21iaW5lQWRkcmVzc1xyXG4gICAgICAgICAgY29udGFjdEluZm9ybWF0aW9uXHJcbiAgICAgICAgICBjb250YWN0VXNlck5hbWVcclxuICAgICAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgICAgIGRpc3RyaWN0XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgaXNEZWZhdWx0XHJcbiAgICAgICAgICBpc0RlbGV0ZVxyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgcHJvdmluY2VcclxuICAgICAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgICAgIHVzZXJJZFxyXG4gICAgICAgICAgemlwXHJcbiAgICAgIH1cclxuICBgLFxyXG4gIFVzZXJQYXlDYXJkRmllbGRzOiBncWxgXHJcbiAgICAgIGZyYWdtZW50IFVzZXJQYXlDYXJkRmllbGRzIG9uIFVzZXJQYXlDYXJkIHtcclxuICAgICAgICAgIGFkZHJlc3NEZXRhaWxcclxuICAgICAgICAgIGNpdHlcclxuICAgICAgICAgIGNvZGVcclxuICAgICAgICAgIGNvbnRhY3RcclxuICAgICAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgICAgIGV4cGlyYXRpb25UaW1lXHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgaXNEZWZhdWx0XHJcbiAgICAgICAgICBpc0RlbGV0ZVxyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgbnVtYmVyXHJcbiAgICAgICAgICB1cGRhdGVUaW1lXHJcbiAgICAgICAgICB1c2VySWRcclxuICAgICAgICAgIHVzZXJOYW1lXHJcbiAgICAgICAgICB6aXBDb2RlXHJcbiAgICAgIH1cclxuICBgLFxyXG4gIFNob3BDYXJ0RmllbGRzOiBncWxgXHJcbiAgICAgIGZyYWdtZW50IFNob3BDYXJ0RmllbGRzIG9uIFNob3BDYXJ0IHtcclxuICAgICAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBpc0RlbGV0ZVxyXG4gICAgICAgICAgaXNOZXh0XHJcbiAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICBudW1iZXJcclxuICAgICAgICAgIHByb2R1Y3RJZFxyXG4gICAgICAgICAgdXBkYXRlVGltZVxyXG4gICAgICAgICAgdXNlcklkXHJcbiAgICAgIH1cclxuICBgLFxyXG4gIERhdGFDb25maWdGaWVsZHM6IGdxbGBcclxuICAgIGZyYWdtZW50IERhdGFDb25maWdGaWVsZHMgb24gRGF0YUNvbmZpZyB7XHJcbiAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgIGlkXHJcbiAgICAgICAgaXNEZWxldGVcclxuICAgICAgICBuYW1lXHJcbiAgICAgICAgcmVtYXJrXHJcbiAgICAgICAgdHlwZVxyXG4gICAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgICB2YWx1ZVxyXG4gICAgfVxyXG4gIGAsXHJcbiAgRGljdEZpZWxkczogZ3FsYFxyXG4gICAgZnJhZ21lbnQgRGljdEZpZWxkcyBvbiBEaWN0IHtcclxuICAgICAgICBjb2RlXHJcbiAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgIGRpY3RUeXBlQ29kZVxyXG4gICAgICAgIGlkXHJcbiAgICAgICAgaXNEZWxldGVcclxuICAgICAgICBpc0Rpc2FibGVcclxuICAgICAgICBuYW1lXHJcbiAgICAgICAgcmVtYXJrXHJcbiAgICAgICAgc29ydFxyXG4gICAgICAgIHVwZGF0ZVRpbWVcclxuICAgIH1cclxuICBgLFxyXG4gIEdyb3VwUXVldWVGaWVsZHM6IGdxbGBcclxuICAgICAgZnJhZ21lbnQgR3JvdXBRdWV1ZUZpZWxkcyBvbiBHcm91cFF1ZXVlIHtcclxuICAgICAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgICAgIGZpbGxBbW91bnRcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBpc0RlbGV0ZVxyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgcHJvZHVjdElkXHJcbiAgICAgICAgICB1cGRhdGVUaW1lXHJcbiAgICAgIH1cclxuICBgLFxyXG4gIEdyb3VwT3JkZXJGaWVsZHM6IGdxbGBcclxuICAgICAgZnJhZ21lbnQgR3JvdXBPcmRlckZpZWxkcyBvbiBHcm91cE9yZGVyIHtcclxuICAgICAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgICAgIGdyb3VwUXVldWVJZFxyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIGlzRGVsZXRlXHJcbiAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICBvcmRlckdyb3VwQW1vdW50XHJcbiAgICAgICAgICBvcmRlcklkXHJcbiAgICAgICAgICB1cGRhdGVUaW1lXHJcbiAgICAgICAgICB1c2VySWRcclxuICAgICAgfVxyXG4gIGAsXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==