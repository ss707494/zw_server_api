webpackHotUpdate("static\\development\\pages\\groupProduct\\[id].js",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9ncmFwaHFsVHlwZXMvZG9jL2ZyYWdtZW50LnRzIl0sIm5hbWVzIjpbImZyYWdtZW50IiwiQ2F0ZWdvcnlGaWVsZHMiLCJncWwiLCJVc2VyRmllbGRzIiwiVXNlckluZm9GaWVsZHMiLCJPcmRlckluZm9GaWVsZHMiLCJST3JkZXJQcm9kdWN0RmllbGRzIiwiUHJvZHVjdEZpZWxkcyIsIkltZ0ZpZWxkcyIsIlVzZXJBZGRyZXNzRmllbGRzIiwiVXNlclBheUNhcmRGaWVsZHMiLCJTaG9wQ2FydEZpZWxkcyIsIkRhdGFDb25maWdGaWVsZHMiLCJEaWN0RmllbGRzIiwiR3JvdXBRdWV1ZUZpZWxkcyIsIkdyb3VwT3JkZXJGaWVsZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsUUFBUSxHQUFHO0FBQ3RCQyxnQkFBYyxFQUFFQyx3REFBRixtQkFEUTtBQWtCdEJDLFlBQVUsRUFBRUQsd0RBQUYsb0JBbEJZO0FBNkJ0QkUsZ0JBQWMsRUFBRUYsd0RBQUYsb0JBN0JRO0FBMkN0QkcsaUJBQWUsRUFBRUgsd0RBQUYsb0JBM0NPO0FBdUV0QkkscUJBQW1CLEVBQUVKLHdEQUFGLG9CQXZFRztBQW9GdEJLLGVBQWEsRUFBRUwsd0RBQUYsb0JBcEZTO0FBc0h0Qk0sV0FBUyxFQUFFTix3REFBRixvQkF0SGE7QUFrSXRCTyxtQkFBaUIsRUFBRVAsd0RBQUYsb0JBbElLO0FBcUp0QlEsbUJBQWlCLEVBQUVSLHdEQUFGLG9CQXJKSztBQXdLdEJTLGdCQUFjLEVBQUVULHdEQUFGLHFCQXhLUTtBQXFMdEJVLGtCQUFnQixFQUFFVix3REFBRixxQkFyTE07QUFpTXRCVyxZQUFVLEVBQUVYLHdEQUFGLHFCQWpNWTtBQStNdEJZLGtCQUFnQixFQUFFWix3REFBRixxQkEvTU07QUEwTnRCYSxrQkFBZ0IsRUFBRWIsd0RBQUY7QUExTk0sQ0FBakIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGdyb3VwUHJvZHVjdFxcW2lkXS5qcy4zOGIwYmIyMmRlOGRmYjNkZjc3Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtncWx9IGZyb20gJ2Fwb2xsby1ib29zdCdcclxuXHJcbmV4cG9ydCBjb25zdCBmcmFnbWVudCA9IHtcclxuICBDYXRlZ29yeUZpZWxkczogZ3FsYFxyXG4gICAgICBmcmFnbWVudCBDYXRlZ29yeSBvbiBDYXRlZ29yeSB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgICAgdXBkYXRlVGltZVxyXG4gICAgICAgICAgaXNEZWxldGVcclxuICAgICAgICAgIGlzRW5hYmxlXHJcbiAgICAgICAgICByZW1hcmtcclxuICAgICAgICAgIHNvcnRcclxuICAgICAgICAgIHBhcmVudElkXHJcbiAgICAgICAgICBmdWxsUGFyZW50SWRcclxuICAgICAgICAgIG51bWJlclxyXG4gICAgICAgICAgdXNlcklkXHJcbiAgICAgICAgICBpbWdVcmxcclxuICAgICAgfVxyXG4gIGAsXHJcbiAgVXNlckZpZWxkczogZ3FsYFxyXG4gICAgICBmcmFnbWVudCBVc2VyRmllbGRzIG9uIFVzZXIge1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIG5hbWVcclxuICAgICAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgICAgIGlzRGVsZXRlXHJcbiAgICAgICAgICBwYXNzd29yZFxyXG4gICAgICAgICAgdHlwZVxyXG4gICAgICB9XHJcbiAgYCxcclxuICBVc2VySW5mb0ZpZWxkczogZ3FsYFxyXG4gICAgICBmcmFnbWVudCBVc2VySW5mb0ZpZWxkcyBvbiBVc2VySW5mbyB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgICAgdXBkYXRlVGltZVxyXG4gICAgICAgICAgaXNEZWxldGVcclxuICAgICAgICAgIHVzZXJJZFxyXG4gICAgICAgICAgcGhvbmVcclxuICAgICAgICAgIGVtYWlsXHJcbiAgICAgICAgICB1c2VyTGV2ZWxcclxuICAgICAgICAgIHBpY2t1cEFkZHJlc3NJZFxyXG4gICAgICB9XHJcbiAgYCxcclxuICBPcmRlckluZm9GaWVsZHM6IGdxbGBcclxuICAgICAgZnJhZ21lbnQgT3JkZXJJbmZvRmllbGRzIG9uIE9yZGVySW5mbyB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgICAgdXBkYXRlVGltZVxyXG4gICAgICAgICAgaXNEZWxldGVcclxuICAgICAgICAgIG51bWJlclxyXG4gICAgICAgICAgc3RhdGVcclxuICAgICAgICAgIGFjdHVhbGx5UGFpZFxyXG4gICAgICAgICAgYWRkcmVzc0lkXHJcbiAgICAgICAgICBwYXltZW50TWV0aG9kQ2FyZElkXHJcbiAgICAgICAgICBzdWJ0b3RhbFxyXG4gICAgICAgICAgY291cG9uRGlzY291bnRcclxuICAgICAgICAgIHZpcERpc2NvdW50XHJcbiAgICAgICAgICB0cmFuc3BvcnRhdGlvbkNvc3RzXHJcbiAgICAgICAgICBzYWxlVGF4XHJcbiAgICAgICAgICBvcmRlcklkXHJcbiAgICAgICAgICBkaXNjb3VudFByb2R1Y3RUb3RhbFxyXG4gICAgICAgICAgZmluaXNoVGltZVxyXG4gICAgICAgICAgcGlja1VwVGltZVxyXG4gICAgICAgICAgcGlja1VwVHlwZVxyXG4gICAgICAgICAgZ2VuZXJhdGVDb2luXHJcbiAgICAgICAgICBkZWR1Y3RDb2luXHJcbiAgICAgICAgICBzZWxmQWRkcmVzc0lkXHJcbiAgICAgICAgICBjdXJyZW50VXNlckxldmVsXHJcbiAgICAgIH1cclxuICBgLFxyXG4gIFJPcmRlclByb2R1Y3RGaWVsZHM6IGdxbGBcclxuICAgICAgZnJhZ21lbnQgUk9yZGVyUHJvZHVjdEZpZWxkcyBvbiBST3JkZXJQcm9kdWN0IHtcclxuICAgICAgICAgIGNvdW50XHJcbiAgICAgICAgICBjcmVhdGVUaW1lXHJcbiAgICAgICAgICBkZWFsUHJpY2VcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBpc0RlbGV0ZVxyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgb3JkZXJJZFxyXG4gICAgICAgICAgcHJvZHVjdElkXHJcbiAgICAgICAgICB1cGRhdGVUaW1lXHJcbiAgICAgIH1cclxuICBgLFxyXG4gIFByb2R1Y3RGaWVsZHM6IGdxbGBcclxuICAgICAgZnJhZ21lbnQgUHJvZHVjdEZpZWxkcyBvbiBQcm9kdWN0IHtcclxuICAgICAgICAgIGJyYW5kXHJcbiAgICAgICAgICBjYXRlZ29yeUlkXHJcbiAgICAgICAgICBjcmVhdGVUaW1lXHJcbiAgICAgICAgICBncm91cEFtb3VudFxyXG4gICAgICAgICAgZ3JvdXBBbW91bnRVbml0XHJcbiAgICAgICAgICBncm91cFByZWNpc2lvblxyXG4gICAgICAgICAgZ3JvdXBSZW1hcmtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBpc0RlbGV0ZVxyXG4gICAgICAgICAgaXNFbmFibGVcclxuICAgICAgICAgIGlzR3JvdXBcclxuICAgICAgICAgIGlzSG90XHJcbiAgICAgICAgICBpc05ld1xyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgbnVtYmVyXHJcbiAgICAgICAgICBwYWNraW5nVW5pdFxyXG4gICAgICAgICAgcHJpY2VJblxyXG4gICAgICAgICAgcHJpY2VNYXJrZXRcclxuICAgICAgICAgIHByaWNlT3V0XHJcbiAgICAgICAgICByZW1hcmtcclxuICAgICAgICAgIHNoZWx2ZXNUeXBlc1xyXG4gICAgICAgICAgc29ydFxyXG4gICAgICAgICAgc3RvY2tcclxuICAgICAgICAgIHVuaXRcclxuICAgICAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgICAgIHdlaWdodFxyXG4gICAgICAgICAgdW5pdFN0cmluZ1xyXG4gICAgICAgICAgZ3JvdXBQcmVjaXNpb25TdHJpbmdcclxuICAgICAgICAgIGdyb3VwQW1vdW50VW5pdFN0cmluZ1xyXG4gICAgICAgICAgcGFja2luZ1VuaXRTdHJpbmdcclxuICAgICAgfVxyXG4gIGAsXHJcbiAgSW1nRmllbGRzOiBncWxgXHJcbiAgICBmcmFnbWVudCBJbWdGaWVsZHMgb24gUHJvZHVjdEltZyB7XHJcbiAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgIGlkXHJcbiAgICAgICAgaXNEZWxldGVcclxuICAgICAgICBuYW1lXHJcbiAgICAgICAgbnVtYmVyXHJcbiAgICAgICAgcHJvZHVjdElkXHJcbiAgICAgICAgdXBkYXRlVGltZVxyXG4gICAgICAgIHVybFxyXG4gICAgfSBcclxuICBgLFxyXG4gIFVzZXJBZGRyZXNzRmllbGRzOiBncWxgXHJcbiAgICAgIGZyYWdtZW50IFVzZXJBZGRyZXNzRmllbGRzIG9uIFVzZXJBZGRyZXNzIHtcclxuICAgICAgICAgIGFkZHJlc3NcclxuICAgICAgICAgIGNpdHlcclxuICAgICAgICAgIGNvbWJpbmVBZGRyZXNzXHJcbiAgICAgICAgICBjb250YWN0SW5mb3JtYXRpb25cclxuICAgICAgICAgIGNvbnRhY3RVc2VyTmFtZVxyXG4gICAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgICAgZGlzdHJpY3RcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBpc0RlZmF1bHRcclxuICAgICAgICAgIGlzRGVsZXRlXHJcbiAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICBwcm92aW5jZVxyXG4gICAgICAgICAgdXBkYXRlVGltZVxyXG4gICAgICAgICAgdXNlcklkXHJcbiAgICAgICAgICB6aXBcclxuICAgICAgfVxyXG4gIGAsXHJcbiAgVXNlclBheUNhcmRGaWVsZHM6IGdxbGBcclxuICAgICAgZnJhZ21lbnQgVXNlclBheUNhcmRGaWVsZHMgb24gVXNlclBheUNhcmQge1xyXG4gICAgICAgICAgYWRkcmVzc0RldGFpbFxyXG4gICAgICAgICAgY2l0eVxyXG4gICAgICAgICAgY29kZVxyXG4gICAgICAgICAgY29udGFjdFxyXG4gICAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgICAgZXhwaXJhdGlvblRpbWVcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBpc0RlZmF1bHRcclxuICAgICAgICAgIGlzRGVsZXRlXHJcbiAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICBudW1iZXJcclxuICAgICAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgICAgIHVzZXJJZFxyXG4gICAgICAgICAgdXNlck5hbWVcclxuICAgICAgICAgIHppcENvZGVcclxuICAgICAgfVxyXG4gIGAsXHJcbiAgU2hvcENhcnRGaWVsZHM6IGdxbGBcclxuICAgICAgZnJhZ21lbnQgU2hvcENhcnRGaWVsZHMgb24gU2hvcENhcnQge1xyXG4gICAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIGlzRGVsZXRlXHJcbiAgICAgICAgICBpc05leHRcclxuICAgICAgICAgIG5hbWVcclxuICAgICAgICAgIG51bWJlclxyXG4gICAgICAgICAgcHJvZHVjdElkXHJcbiAgICAgICAgICB1cGRhdGVUaW1lXHJcbiAgICAgICAgICB1c2VySWRcclxuICAgICAgfVxyXG4gIGAsXHJcbiAgRGF0YUNvbmZpZ0ZpZWxkczogZ3FsYFxyXG4gICAgZnJhZ21lbnQgRGF0YUNvbmZpZ0ZpZWxkcyBvbiBEYXRhQ29uZmlnIHtcclxuICAgICAgICBjcmVhdGVUaW1lXHJcbiAgICAgICAgaWRcclxuICAgICAgICBpc0RlbGV0ZVxyXG4gICAgICAgIG5hbWVcclxuICAgICAgICByZW1hcmtcclxuICAgICAgICB0eXBlXHJcbiAgICAgICAgdXBkYXRlVGltZVxyXG4gICAgICAgIHZhbHVlXHJcbiAgICB9XHJcbiAgYCxcclxuICBEaWN0RmllbGRzOiBncWxgXHJcbiAgICBmcmFnbWVudCBEaWN0RmllbGRzIG9uIERpY3Qge1xyXG4gICAgICAgIGNvZGVcclxuICAgICAgICBjcmVhdGVUaW1lXHJcbiAgICAgICAgZGljdFR5cGVDb2RlXHJcbiAgICAgICAgaWRcclxuICAgICAgICBpc0RlbGV0ZVxyXG4gICAgICAgIGlzRGlzYWJsZVxyXG4gICAgICAgIG5hbWVcclxuICAgICAgICByZW1hcmtcclxuICAgICAgICBzb3J0XHJcbiAgICAgICAgdXBkYXRlVGltZVxyXG4gICAgfVxyXG4gIGAsXHJcbiAgR3JvdXBRdWV1ZUZpZWxkczogZ3FsYFxyXG4gICAgICBmcmFnbWVudCBHcm91cFF1ZXVlRmllbGRzIG9uIEdyb3VwUXVldWUge1xyXG4gICAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgICAgZmlsbEFtb3VudFxyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIGlzRGVsZXRlXHJcbiAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICBwcm9kdWN0SWRcclxuICAgICAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgfVxyXG4gIGAsXHJcbiAgR3JvdXBPcmRlckZpZWxkczogZ3FsYFxyXG4gICAgICBmcmFnbWVudCBHcm91cE9yZGVyRmllbGRzIG9uIEdyb3VwT3JkZXIge1xyXG4gICAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgICAgZ3JvdXBRdWV1ZUlkXHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgaXNEZWxldGVcclxuICAgICAgICAgIG5hbWVcclxuICAgICAgICAgIG9yZGVyR3JvdXBBbW91bnRcclxuICAgICAgICAgIG9yZGVySWRcclxuICAgICAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgICAgIHVzZXJJZFxyXG4gICAgICB9XHJcbiAgYCxcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9