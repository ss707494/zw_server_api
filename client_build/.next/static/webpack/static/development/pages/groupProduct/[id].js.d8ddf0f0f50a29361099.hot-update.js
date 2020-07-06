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
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      fragment GroupOrderFields on GroupOrder {\n          createTime\n          groupQueue\n          groupQueueId\n          id\n          isDelete\n          name\n          orderGroupAmount\n          orderId\n          orderInfo\n          updateTime\n          user\n          userId\n      }\n  "]);

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

/***/ }),

/***/ "./utils/graphqlTypes/doc/index.ts":
/*!*****************************************!*\
  !*** ./utils/graphqlTypes/doc/index.ts ***!
  \*****************************************/
/*! exports provided: getUserListDoc, getDataConfig, homeCarouselImgs, categoryList, doc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserListDoc", function() { return getUserListDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataConfig", function() { return getDataConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homeCarouselImgs", function() { return homeCarouselImgs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categoryList", function() { return categoryList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doc", function() { return doc; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _fragment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fragment */ "./utils/graphqlTypes/doc/fragment.ts");
/* harmony import */ var _ss_common_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ss_common/enum */ "./utils/ss_common/enum.ts");


function _templateObject36() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    mutation ($orderInfoItemInput: OrderInfoItemInput, $groupOrderItemInput: GroupOrderItemInput, $groupQueueItemInput: GroupQueueItemInput) {\n        saveGroupOrder (orderInfoItemInput: $orderInfoItemInput, groupOrderItemInput: $groupOrderItemInput, groupQueueItemInput: $groupQueueItemInput) {\n            ...OrderInfoFields\n        }\n    }\n    ", "\n  "]);

  _templateObject36 = function _templateObject36() {
    return data;
  };

  return data;
}

function _templateObject35() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    mutation ($orderInfoItemInput: OrderInfoItemInput) {\n        updateOrder (orderInfoItemInput: $orderInfoItemInput) {\n            ...OrderInfoFields\n        }\n    }\n    ", "\n  "]);

  _templateObject35 = function _templateObject35() {
    return data;
  };

  return data;
}

function _templateObject34() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    query ($groupQueueItemInput: GroupQueueItemInput) {\n        groupQueueList (groupQueueItemInput: $groupQueueItemInput) {\n            ...GroupQueueFields\n            product {\n                ...ProductFields\n            }\n            groupOrder {\n                ...GroupOrderFields\n            }\n        }\n    }\n    ", "\n    ", "\n    ", "\n  "]);

  _templateObject34 = function _templateObject34() {
    return data;
  };

  return data;
}

function _templateObject33() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    query ($ids: [String]) {\n        productListByIds (ids: $ids) {\n            total\n            list {\n                ...ProductFields\n                img {\n                    ...ImgFields\n                }\n            }\n        }\n    }\n    ", "\n    ", "\n  "]);

  _templateObject33 = function _templateObject33() {
    return data;
  };

  return data;
}

function _templateObject32() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    query {\n        limitTimeData: getDataConfig (dataConfigInput: {\n            type: \"", "\"\n        }) {\n            ...DataConfigFields\n        }\n    }\n    ", "\n  "]);

  _templateObject32 = function _templateObject32() {
    return data;
  };

  return data;
}

function _templateObject31() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      query ($data: DictInput) {\n          getDictList (dictInput: $data) {\n              ...DictFields\n          }\n      }\n      ", "\n  "]);

  _templateObject31 = function _templateObject31() {
    return data;
  };

  return data;
}

function _templateObject30() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      mutation ($orderInfoItemInput: OrderInfoItemInput) {\n          saveOrder (orderInfoItemInput: $orderInfoItemInput) {\n              ...OrderInfoFields\n          }\n      }\n      ", "\n  "]);

  _templateObject30 = function _templateObject30() {
    return data;
  };

  return data;
}

function _templateObject29() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      query {\n          getDataConfig(dataConfigInput: {\n              type: \"", "\"\n          }) {\n              ...DataConfigFields\n          }\n          oneUser {\n              ...UserFields\n              userInfo {\n                  ...UserInfoFields\n              }\n          }\n          payCardListOneUser {\n              ...UserPayCardFields\n          }\n          userAddressListOneUser {\n              ...UserAddressFields\n          }\n          freightConfig: getDataConfig (dataConfigInput: {\n              type: \"", "\"\n          }) {\n              ...DataConfigFields\n          }\n          userLevelList: getDictList (dictInput: {\n              dictTypeCode: \"UserLevel\"\n          }) {\n              ...DictFields\n          }\n      }\n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n  "]);

  _templateObject29 = function _templateObject29() {
    return data;
  };

  return data;
}

function _templateObject28() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      mutation ($shopCart: ShopCartItemInput){\n          updateShopCart (shopCart: $shopCart) {\n              ...ShopCartFields\n          }\n      }\n      ", "\n  "]);

  _templateObject28 = function _templateObject28() {
    return data;
  };

  return data;
}

function _templateObject27() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      query {\n          shopCartList {\n              ...ShopCartFields\n              product {\n                  ...ProductFields\n                  img {\n                      ...ImgFields\n                  }\n              }\n          }\n      }\n      ", "\n      ", "\n      ", "\n  "]);

  _templateObject27 = function _templateObject27() {
    return data;
  };

  return data;
}

function _templateObject26() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      mutation ($shopCart: ShopCartItemInput, $updateNum: Float) {\n          updateNumShopCart (shopCart: $shopCart, updateNum: $updateNum) {\n              id\n              number\n              product {\n                  ...ProductFields\n              }\n              user {\n                  ...UserFields\n              }\n          }\n      }\n      ", "\n      ", "\n  "]);

  _templateObject26 = function _templateObject26() {
    return data;
  };

  return data;
}

function _templateObject25() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      query ($productInput: ProductItemInput, $orderByInput: OrderByInput) {\n          productList(productInput: $productInput, orderByInput: $orderByInput) {\n              total\n              list {\n                  ...ProductFields\n                  img {\n                      ...ImgFields\n                  }\n              }\n          }\n      }\n      ", "\n      ", "\n  "]);

  _templateObject25 = function _templateObject25() {
    return data;
  };

  return data;
}

function _templateObject24() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      query ($data: CategoryItemInput) {\n          oneCategory(data: $data) {\n              ...Category\n              parentCategory {\n                  ...Category\n                  parentCategory {\n                      ...Category\n                  }\n              }\n          }\n      }\n      ", "\n  "]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      query ($data: CategoryItemInput) {\n          categoryLevel(categoryItemInput: $data)\n      }\n  "]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      query ($data: CategoryItemInput, $productItemInput: ProductItemInput) {\n          productsInCategory(categoryItemInput: $data, productItemInput: $productItemInput) {\n              ...ProductFields\n              img {\n                  ...ImgFields\n              }\n          }\n          categoryList(data: {\n              category: {\n                  parentCategory: $data\n              }\n          }) {\n              total\n              list {\n                  ...Category\n              }\n          }\n      }\n      ", "\n      ", "\n      ", "\n  "]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      mutation ($data: UserAddressItemInput) {\n          setUserAddressDefault (userAddress: $data) {\n              ...UserAddressFields\n          }\n      }\n      ", "\n  "]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      mutation ($data: UserAddressItemInput){\n          saveUserAddress (userAddress: $data) {\n              ...UserAddressFields\n          }\n      }\n      ", "\n  "]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      query ($data: UserAddressItemInput) {\n          userAddress (userAddress: $data) {\n              ...UserAddressFields\n          }\n      }\n      ", "\n  "]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      query {\n          userAddressListOneUser {\n              ...UserAddressFields\n          }\n      }\n      ", "\n  "]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      mutation ($userInfo: UserInfoItemInput) {\n          updateUserInfo (userInfo: $userInfo) {\n              ...UserInfoFields\n          }\n      }\n      ", "\n  "]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      query {\n          getDataConfig(dataConfigInput: {\n              type: \"", "\"\n          }) {\n              ...DataConfigFields\n          }\n          oneUser {\n              ...UserFields\n              userInfo {\n                  ...UserInfoFields\n              }\n          }\n      }\n      ", "\n      ", "\n      ", "\n  "]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      mutation ($data: UserPayCardItemInput) {\n          setUserPayCardDefault (userPayCard: $data) {\n              ...UserPayCardFields\n          }\n      }\n      ", "\n  "]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      mutation ($data: UserPayCardItemInput){\n          saveUserPayCard (userPayCard: $data) {\n              ...UserPayCardFields\n          }\n      }\n      ", "\n  "]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      query ($data: UserPayCardItemInput) {\n          userPayCard (userPayCard: $data) {\n              ...UserPayCardFields\n          }\n      }\n      ", "\n  "]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      query {\n          payCardListOneUser {\n              ...UserPayCardFields\n          }\n      }\n      ", "\n  "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      mutation ($data: UpdatePasswordInput) {\n          updatePassword (data: $data) {\n              user {\n                  ...UserFields\n              }\n              authBody {\n                  token\n                  refreshtoken\n              }\n          }\n      }\n      ", "\n  "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      query ($id: String) {\n          selfAddress: getDataConfig(dataConfigInput: {\n              type: \"", "\"\n          }) {\n              ...DataConfigFields\n          }\n          orderDetail(id: $id) {\n              ...OrderInfoFields\n              rOrderProduct {\n                  ...ROrderProductFields\n                  product {\n                      ...ProductFields\n                      img {\n                          ...ImgFields\n                      }\n                  }\n              }\n              user {\n                  ...UserFields\n                  userInfo {\n                      ...UserInfoFields\n                  }\n              }\n              userAddress {\n                  ...UserAddressFields\n              }\n              userPayCard {\n                  ...UserPayCardFields\n              }\n          }\n      }\n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n  "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      query orderList($data: OrderInput){\n          orderList (orderInput: $data, fromUser: true) {\n              list {\n                  ...OrderInfoFields\n                  rOrderProduct {\n                      ...ROrderProductFields\n                      product {\n                          ...ProductFields\n                          img {\n                              ...ImgFields\n                          }\n                      }\n                  }\n              }\n          }\n      }\n      ", "\n      ", "\n      ", "\n      ", "\n  "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      query oneUser {\n          oneUser {\n              ...UserFields\n              userInfo {\n                  ...UserInfoFields\n              }\n          }\n      }\n      ", "\n      ", "\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      query login($data: UserItemInput) {\n          login(user: $data) {\n              token\n              refreshtoken\n          }\n      }\n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      query refreshToken($data: String!) {\n          refreshToken(refreshtoken: $data) {\n              refreshtoken\n              token\n          }\n      }\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      mutation mutation_registerUse998($data: UserItemInput) {\n          registerUser(data: $data) {\n              token\n              refreshtoken\n              user {\n                  id\n                  name\n                  createTime\n                  updateTime\n                  isDelete\n                  password\n                  type\n                  userInfo {\n                      name\n                  }\n              }\n          }\n      }\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    query query_query_testLong565($data: CategoryListInput) {\n        categoryList(data: $data) {\n            total\n            list {\n                ...Category\n            }\n        }\n    }\n    ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    query query_query_testLong137($data: DataConfigItemInput) {\n        homeCarouselImgs(dataConfigInput: $data) {\n            id\n            name\n            createTime\n            updateTime\n            isDelete\n            type\n            value\n            remark\n        }\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    query ($data: DataConfigItemInput) {\n        getDataConfig(dataConfigInput: $data) {\n            id\n            name\n            createTime\n            updateTime\n            isDelete\n            type\n            value\n            remark\n        }\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    query refactored643($data: UserListInput!) {\n        userList(userListInput: $data) {\n            list {\n                orderCoinNextMonth\n                orderCoinCurrentMonth\n                orderAmountCurrentYear\n                ...userInfo\n                ...UserFields\n                ...orderInfo\n            }\n            total\n        }\n    }\n    fragment orderInfo on User{\n        orderInfo{\n            id\n            name\n            createTime\n            updateTime\n            isDelete\n            number\n            state\n            actuallyPaid\n            addressId\n            paymentMethodCardId\n            subtotal\n            couponDiscount\n            vipDiscount\n            transportationCosts\n            saleTax\n            orderId\n            discountProductTotal\n            finishTime\n            pickUpTime\n            pickUpType\n        }\n    }\n    fragment UserFields on User {\n        id\n        name\n        createTime\n        updateTime\n        isDelete\n        password\n        type\n    }\n    fragment userInfo on User{\n        userInfo{\n            id\n            name\n            createTime\n            updateTime\n            isDelete\n            userId\n            phone\n            email\n            userLevel\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var getUserListDoc = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject());
var getDataConfig = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject2());
var homeCarouselImgs = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject3());
var categoryList = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject4(), _fragment__WEBPACK_IMPORTED_MODULE_2__["fragment"].CategoryFields);
var doc = {
  getUserListDoc: getUserListDoc,
  categoryList: categoryList,
  getDataConfig: getDataConfig,
  homeCarouselImgs: homeCarouselImgs,
  registerUser: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject5()),
  refreshToken: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject6()),
  login: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject7()),
  oneUser: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject8(), _fragment__WEBPACK_IMPORTED_MODULE_2__["fragment"].UserInfoFields, _fragment__WEBPACK_IMPORTED_MODULE_2__["fragment"].UserFields),
  orderList: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject9(), _fragment__WEBPACK_IMPORTED_MODULE_2__["fragment"].OrderInfoFields, _fragment__WEBPACK_IMPORTED_MODULE_2__["fragment"].ROrderProductFields, _fragment__WEBPACK_IMPORTED_MODULE_2__["fragment"].ProductFields, _fragment__WEBPACK_IMPORTED_MODULE_2__["fragment"].ImgFields),
  orderDetail: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject10(), _ss_common_enum__WEBPACK_IMPORTED_MODULE_3__["DictTypeEnum"].SelfAddress, _fragment__WEBPACK_IMPORTED_MODULE_2__["fragment"].DataConfigFields, _fragment__WEBPACK_IMPORTED_MODULE_2__["fragment"].OrderInfoFields, _fragment__WEBPACK_IMPORTED_MODULE_2__["fragment"].ROrderProductFields, _fragment__WEBPACK_IMPORTED_MODULE_2__["fragment"].ProductFields, _fragment__WEBPACK_IMPORTED_MODULE_2__["fragment"].ImgFields, _fragment__WEBPACK_IMPORTED_MODULE_2__["fragment"].UserFields, _fragment__WEBPACK_IMPORTED_MODULE_2__["fragment"].UserInfoFields, _fragment__WEBPACK_IMPORTED_MODULE_2__["fragment"].UserPayCardFields, _fragment__WEBPACK_IMPORTED_MODULE_2__["fragment"].UserAddressFields),
  updatePassword: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject11(), _fragment__WEBPACK_IMPORTED_MODULE_2__["fragment"].UserFields),
  payCardListOneUser: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject12(), _fragment__WEBPACK_IMPORTED_MODULE_2__["fragment"].UserPayCardFields),
  userPayCard: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject13(), _fragment__WEBPACK_IMPORTED_MODULE_2__["fragment"].UserPayCardFields),
  saveUserPayCard: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject14(), _fragment__WEBPACK_IMPORTED_MODULE_2__["fragment"].UserPayCardFields),
  setUserPayCardDefault: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject15(), _fragment__WEBPACK_IMPORTED_MODULE_2__["fragment"].UserPayCardFields),
  pickupAddress: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject16(), _ss_common_enum__WEBPACK_IMPORTED_MODULE_3__["DictTypeEnum"].SelfAddress, _fragment__WEBPACK_IMPORTED_MODULE_2__["fragment"].UserInfoFields, _fragment__WEBPACK_IMPORTED_MODULE_2__["fragment"].DataConfigFields, _fragment__WEBPACK_IMPORTED_MODULE_2__["fragment"].UserFields),
  updateUserInfo: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject17(), _fragment__WEBPACK_IMPORTED_MODULE_2__["fragment"].UserInfoFields),
  userAddressListOneUser: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject18(), _fragment__WEBPACK_IMPORTED_MODULE_2__["fragment"].UserAddressFields),
  userAddress: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject19(), _fragment__WEBPACK_IMPORTED_MODULE_2__["fragment"].UserAddressFields),
  saveUserAddress: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject20(), _fragment__WEBPACK_IMPORTED_MODULE_2__["fragment"].UserAddressFields),
  setUserAddressDefault: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject21(), _fragment__WEBPACK_IMPORTED_MODULE_2__["fragment"].UserAddressFields),
  productsInCategory: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject22(), _fragment__WEBPACK_IMPORTED_MODULE_2__["fragment"].ProductFields, _fragment__WEBPACK_IMPORTED_MODULE_2__["fragment"].ImgFields, _fragment__WEBPACK_IMPORTED_MODULE_2__["fragment"].CategoryFields),
  categoryLevel: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject23()),
  oneCategory: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject24(), _fragment__WEBPACK_IMPORTED_MODULE_2__["fragment"].CategoryFields),
  productList: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject25(), _fragment__WEBPACK_IMPORTED_MODULE_2__["fragment"].ProductFields, _fragment__WEBPACK_IMPORTED_MODULE_2__["fragment"].ImgFields),
  updateNumShopCart: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject26(), _fragment__WEBPACK_IMPORTED_MODULE_2__["fragment"].ProductFields, _fragment__WEBPACK_IMPORTED_MODULE_2__["fragment"].UserFields),
  userShopCartList: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject27(), _fragment__WEBPACK_IMPORTED_MODULE_2__["fragment"].ShopCartFields, _fragment__WEBPACK_IMPORTED_MODULE_2__["fragment"].ProductFields, _fragment__WEBPACK_IMPORTED_MODULE_2__["fragment"].ImgFields),
  updateShopCart: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject28(), _fragment__WEBPACK_IMPORTED_MODULE_2__["fragment"].ShopCartFields),
  orderConfirmInfo: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject29(), _ss_common_enum__WEBPACK_IMPORTED_MODULE_3__["DictTypeEnum"].SelfAddress, _ss_common_enum__WEBPACK_IMPORTED_MODULE_3__["DictTypeEnum"].Freight, _fragment__WEBPACK_IMPORTED_MODULE_2__["fragment"].UserAddressFields, _fragment__WEBPACK_IMPORTED_MODULE_2__["fragment"].UserPayCardFields, _fragment__WEBPACK_IMPORTED_MODULE_2__["fragment"].UserInfoFields, _fragment__WEBPACK_IMPORTED_MODULE_2__["fragment"].UserFields, _fragment__WEBPACK_IMPORTED_MODULE_2__["fragment"].DataConfigFields, _fragment__WEBPACK_IMPORTED_MODULE_2__["fragment"].DictFields),
  saveOrder: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject30(), _fragment__WEBPACK_IMPORTED_MODULE_2__["fragment"].OrderInfoFields),
  dictList: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject31(), _fragment__WEBPACK_IMPORTED_MODULE_2__["fragment"].DictFields),
  limitTimeData: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject32(), _ss_common_enum__WEBPACK_IMPORTED_MODULE_3__["DictTypeEnum"].PromotionFlashSale, _fragment__WEBPACK_IMPORTED_MODULE_2__["fragment"].DataConfigFields),
  productListByIds: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject33(), _fragment__WEBPACK_IMPORTED_MODULE_2__["fragment"].ProductFields, _fragment__WEBPACK_IMPORTED_MODULE_2__["fragment"].ImgFields),
  groupQueueList: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject34(), _fragment__WEBPACK_IMPORTED_MODULE_2__["fragment"].GroupQueueFields, _fragment__WEBPACK_IMPORTED_MODULE_2__["fragment"].ProductFields, _fragment__WEBPACK_IMPORTED_MODULE_2__["fragment"].GroupOrderFields),
  updateOrder: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject35(), _fragment__WEBPACK_IMPORTED_MODULE_2__["fragment"].OrderInfoFields),
  saveGroupOrder: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject36(), _fragment__WEBPACK_IMPORTED_MODULE_2__["fragment"].OrderInfoFields)
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

/***/ }),

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
      lineNumber: 178,
      columnNumber: 10
    }
  }, __jsx(_components_HeaderTitle_HeaderTitle__WEBPACK_IMPORTED_MODULE_13__["HeaderTitle"], {
    title: '产品详情',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
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
      lineNumber: 182,
      columnNumber: 5
    }
  }), __jsx(PriceRed, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 5
    }
  }, __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('基准价格'), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 9
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_11__["dealMoney"])(product.priceOut), "/", product.packingUnitString)), __jsx("aside", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('已成团'), 23, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('单')), __jsx("aside", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('拼团中'), 2, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('单'))), __jsx(Name, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 5
    }
  }, __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 7
    }
  }, product.name), __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 7
    }
  }, product.groupRemark, "/", product.groupAmount, product.groupAmountUnitString, __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 90
    }
  }), Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('分团精度'), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
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
        lineNumber: 201,
        columnNumber: 13
      }
    });
  })))), __jsx(GroupQueueBox, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 5
    }
  }, __jsx(Title, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('拼团中'))), __jsx(SmartMatch, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 5
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 7
    }
  }, __jsx(Title, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 9
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('智能匹配'))), __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('请点击'), __jsx(_material_ui_icons_StarBorderRounded__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 9
    }
  }), Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('确定您需要的份数')), __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
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
        lineNumber: 218,
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
        lineNumber: 222,
        columnNumber: 18
      }
    });
  })), __jsx(Price, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 7
    }
  }, __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 9
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 11
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_11__["dealMoney"])(((_product$priceOut = product.priceOut) !== null && _product$priceOut !== void 0 ? _product$priceOut : 0) * stateGroupProduct.selectNum * stateGroupProduct.numDiscount * stateGroupProduct.groupDiscount)), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('折后价格'))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 9
    }
  }, "="), __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 9
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 11
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_11__["dealMoney"])(((_product$priceOut2 = product.priceOut) !== null && _product$priceOut2 !== void 0 ? _product$priceOut2 : 0) * stateGroupProduct.selectNum)), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('基准价格'))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 9
    }
  }, "x"), __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 9
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 11
    }
  }, stateGroupProduct.numDiscount), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('份数折扣'))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 9
    }
  }, "x"), __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 9
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 11
    }
  }, stateGroupProduct.groupDiscount), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('成团折上折'))))), __jsx(Submit, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 5
    }
  }, __jsx("aside", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
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
      lineNumber: 253,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('去结算'))), __jsx(_groupOrderPage__WEBPACK_IMPORTED_MODULE_19__["GroupOrderPage"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 5
    }
  }));
};

_s(GroupProduct, "qrgw/HnHGKkNkRufwtvbVCJovl4=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"], _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_10__["useStoreModel"], _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_10__["useStoreModel"]];
});

_c9 = GroupProduct;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;

$RefreshReg$(_c, "PriceRed");
$RefreshReg$(_c2, "Name");
$RefreshReg$(_c3, "YellowStar");
$RefreshReg$(_c4, "Title");
$RefreshReg$(_c5, "GroupQueueBox");
$RefreshReg$(_c6, "SmartMatch");
$RefreshReg$(_c7, "Price");
$RefreshReg$(_c8, "Submit");
$RefreshReg$(_c9, "GroupProduct");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9ncmFwaHFsVHlwZXMvZG9jL2ZyYWdtZW50LnRzIiwid2VicGFjazovLy8uL3V0aWxzL2dyYXBocWxUeXBlcy9kb2MvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvdmlldy9ncm91cFByb2R1Y3QvLnRzeCJdLCJuYW1lcyI6WyJmcmFnbWVudCIsIkNhdGVnb3J5RmllbGRzIiwiZ3FsIiwiVXNlckZpZWxkcyIsIlVzZXJJbmZvRmllbGRzIiwiT3JkZXJJbmZvRmllbGRzIiwiUk9yZGVyUHJvZHVjdEZpZWxkcyIsIlByb2R1Y3RGaWVsZHMiLCJJbWdGaWVsZHMiLCJVc2VyQWRkcmVzc0ZpZWxkcyIsIlVzZXJQYXlDYXJkRmllbGRzIiwiU2hvcENhcnRGaWVsZHMiLCJEYXRhQ29uZmlnRmllbGRzIiwiRGljdEZpZWxkcyIsIkdyb3VwUXVldWVGaWVsZHMiLCJHcm91cE9yZGVyRmllbGRzIiwiZ2V0VXNlckxpc3REb2MiLCJnZXREYXRhQ29uZmlnIiwiaG9tZUNhcm91c2VsSW1ncyIsImNhdGVnb3J5TGlzdCIsImRvYyIsInJlZ2lzdGVyVXNlciIsInJlZnJlc2hUb2tlbiIsImxvZ2luIiwib25lVXNlciIsIm9yZGVyTGlzdCIsIm9yZGVyRGV0YWlsIiwiRGljdFR5cGVFbnVtIiwiU2VsZkFkZHJlc3MiLCJ1cGRhdGVQYXNzd29yZCIsInBheUNhcmRMaXN0T25lVXNlciIsInVzZXJQYXlDYXJkIiwic2F2ZVVzZXJQYXlDYXJkIiwic2V0VXNlclBheUNhcmREZWZhdWx0IiwicGlja3VwQWRkcmVzcyIsInVwZGF0ZVVzZXJJbmZvIiwidXNlckFkZHJlc3NMaXN0T25lVXNlciIsInVzZXJBZGRyZXNzIiwic2F2ZVVzZXJBZGRyZXNzIiwic2V0VXNlckFkZHJlc3NEZWZhdWx0IiwicHJvZHVjdHNJbkNhdGVnb3J5IiwiY2F0ZWdvcnlMZXZlbCIsIm9uZUNhdGVnb3J5IiwicHJvZHVjdExpc3QiLCJ1cGRhdGVOdW1TaG9wQ2FydCIsInVzZXJTaG9wQ2FydExpc3QiLCJ1cGRhdGVTaG9wQ2FydCIsIm9yZGVyQ29uZmlybUluZm8iLCJGcmVpZ2h0Iiwic2F2ZU9yZGVyIiwiZGljdExpc3QiLCJsaW1pdFRpbWVEYXRhIiwiUHJvbW90aW9uRmxhc2hTYWxlIiwicHJvZHVjdExpc3RCeUlkcyIsImdyb3VwUXVldWVMaXN0IiwidXBkYXRlT3JkZXIiLCJzYXZlR3JvdXBPcmRlciIsImdyb3VwUHJvZHVjdE1vZGVsIiwibW9kZWxGYWN0b3J5IiwicHJvZHVjdCIsInNlbGVjdE51bSIsInNlbGVjdFF1ZXVlSWQiLCJudW1EaXNjb3VudCIsImdyb3VwRGlzY291bnQiLCJnZXREYXRhIiwidmFsdWUiLCJvcHRpb24iLCJxdWVyeSIsImlkcyIsInJlcyIsImdyb3VwUXVldWVJdGVtSW5wdXQiLCJpZCIsInNldERhdGEiLCJmcE1lcmdlUHJlIiwibGlzdCIsInVwZGF0ZVNlbGVjdE51bSIsImRhdGEiLCJzdWJtaXQiLCJvcmRlckluZm9JdGVtSW5wdXQiLCJtdXRhdGUiLCJncm91cE9yZGVySXRlbUlucHV0Iiwib3JkZXJHcm91cEFtb3VudCIsIlByaWNlUmVkIiwic3R5bGVkIiwiZGl2IiwibXBTdHlsZSIsInJlZCIsIk5hbWUiLCJncmV5IiwiWWVsbG93U3RhciIsImNvbG9yIiwiVGl0bGUiLCJoZWFkZXIiLCJHcm91cFF1ZXVlQm94IiwiU21hcnRNYXRjaCIsIlByaWNlIiwiU3VibWl0Iiwic2hhZG93IiwiR3JvdXBQcm9kdWN0Iiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RvcmVNb2RlbCIsImFjdGlvbnNHcm91cFByb2R1Y3QiLCJhY3Rpb25zIiwic3RhdGVHcm91cFByb2R1Y3QiLCJzdGF0ZSIsInVzZUVmZmVjdCIsImdyb3VwT3JkZXJQYWdlTW9kZWwiLCJhY3Rpb25zR3JvdXBPcmRlclBhZ2VNb2RlbCIsImNvbnNvbGUiLCJsb2ciLCJpbWciLCJtYXAiLCJ2IiwiaW1nVXJsIiwidXJsIiwibHMiLCJkZWFsTW9uZXkiLCJwcmljZU91dCIsInBhY2tpbmdVbml0U3RyaW5nIiwibmFtZSIsImdyb3VwUmVtYXJrIiwiZ3JvdXBBbW91bnQiLCJncm91cEFtb3VudFVuaXRTdHJpbmciLCJBcnJheSIsImdyb3VwUHJlY2lzaW9uIiwiaSIsImhlaWdodCIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJmb250U2l6ZSIsIm9wZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsUUFBUSxHQUFHO0FBQ3RCQyxnQkFBYyxFQUFFQyx3REFBRixtQkFEUTtBQWtCdEJDLFlBQVUsRUFBRUQsd0RBQUYsb0JBbEJZO0FBNkJ0QkUsZ0JBQWMsRUFBRUYsd0RBQUYsb0JBN0JRO0FBMkN0QkcsaUJBQWUsRUFBRUgsd0RBQUYsb0JBM0NPO0FBdUV0QkkscUJBQW1CLEVBQUVKLHdEQUFGLG9CQXZFRztBQW9GdEJLLGVBQWEsRUFBRUwsd0RBQUYsb0JBcEZTO0FBc0h0Qk0sV0FBUyxFQUFFTix3REFBRixvQkF0SGE7QUFrSXRCTyxtQkFBaUIsRUFBRVAsd0RBQUYsb0JBbElLO0FBcUp0QlEsbUJBQWlCLEVBQUVSLHdEQUFGLG9CQXJKSztBQXdLdEJTLGdCQUFjLEVBQUVULHdEQUFGLHFCQXhLUTtBQXFMdEJVLGtCQUFnQixFQUFFVix3REFBRixxQkFyTE07QUFpTXRCVyxZQUFVLEVBQUVYLHdEQUFGLHFCQWpNWTtBQStNdEJZLGtCQUFnQixFQUFFWix3REFBRixxQkEvTU07QUEwTnRCYSxrQkFBZ0IsRUFBRWIsd0RBQUY7QUExTk0sQ0FBakI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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bkJBLG9FOzs7TUFQbkNILFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGdyb3VwUHJvZHVjdFxcW2lkXS5qcy5kOGRkZjBmMGY1MGEyOTM2MTA5OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtncWx9IGZyb20gJ2Fwb2xsby1ib29zdCdcclxuXHJcbmV4cG9ydCBjb25zdCBmcmFnbWVudCA9IHtcclxuICBDYXRlZ29yeUZpZWxkczogZ3FsYFxyXG4gICAgICBmcmFnbWVudCBDYXRlZ29yeSBvbiBDYXRlZ29yeSB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgICAgdXBkYXRlVGltZVxyXG4gICAgICAgICAgaXNEZWxldGVcclxuICAgICAgICAgIGlzRW5hYmxlXHJcbiAgICAgICAgICByZW1hcmtcclxuICAgICAgICAgIHNvcnRcclxuICAgICAgICAgIHBhcmVudElkXHJcbiAgICAgICAgICBmdWxsUGFyZW50SWRcclxuICAgICAgICAgIG51bWJlclxyXG4gICAgICAgICAgdXNlcklkXHJcbiAgICAgICAgICBpbWdVcmxcclxuICAgICAgfVxyXG4gIGAsXHJcbiAgVXNlckZpZWxkczogZ3FsYFxyXG4gICAgICBmcmFnbWVudCBVc2VyRmllbGRzIG9uIFVzZXIge1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIG5hbWVcclxuICAgICAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgICAgIGlzRGVsZXRlXHJcbiAgICAgICAgICBwYXNzd29yZFxyXG4gICAgICAgICAgdHlwZVxyXG4gICAgICB9XHJcbiAgYCxcclxuICBVc2VySW5mb0ZpZWxkczogZ3FsYFxyXG4gICAgICBmcmFnbWVudCBVc2VySW5mb0ZpZWxkcyBvbiBVc2VySW5mbyB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgICAgdXBkYXRlVGltZVxyXG4gICAgICAgICAgaXNEZWxldGVcclxuICAgICAgICAgIHVzZXJJZFxyXG4gICAgICAgICAgcGhvbmVcclxuICAgICAgICAgIGVtYWlsXHJcbiAgICAgICAgICB1c2VyTGV2ZWxcclxuICAgICAgICAgIHBpY2t1cEFkZHJlc3NJZFxyXG4gICAgICB9XHJcbiAgYCxcclxuICBPcmRlckluZm9GaWVsZHM6IGdxbGBcclxuICAgICAgZnJhZ21lbnQgT3JkZXJJbmZvRmllbGRzIG9uIE9yZGVySW5mbyB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgICAgdXBkYXRlVGltZVxyXG4gICAgICAgICAgaXNEZWxldGVcclxuICAgICAgICAgIG51bWJlclxyXG4gICAgICAgICAgc3RhdGVcclxuICAgICAgICAgIGFjdHVhbGx5UGFpZFxyXG4gICAgICAgICAgYWRkcmVzc0lkXHJcbiAgICAgICAgICBwYXltZW50TWV0aG9kQ2FyZElkXHJcbiAgICAgICAgICBzdWJ0b3RhbFxyXG4gICAgICAgICAgY291cG9uRGlzY291bnRcclxuICAgICAgICAgIHZpcERpc2NvdW50XHJcbiAgICAgICAgICB0cmFuc3BvcnRhdGlvbkNvc3RzXHJcbiAgICAgICAgICBzYWxlVGF4XHJcbiAgICAgICAgICBvcmRlcklkXHJcbiAgICAgICAgICBkaXNjb3VudFByb2R1Y3RUb3RhbFxyXG4gICAgICAgICAgZmluaXNoVGltZVxyXG4gICAgICAgICAgcGlja1VwVGltZVxyXG4gICAgICAgICAgcGlja1VwVHlwZVxyXG4gICAgICAgICAgZ2VuZXJhdGVDb2luXHJcbiAgICAgICAgICBkZWR1Y3RDb2luXHJcbiAgICAgICAgICBzZWxmQWRkcmVzc0lkXHJcbiAgICAgICAgICBjdXJyZW50VXNlckxldmVsXHJcbiAgICAgIH1cclxuICBgLFxyXG4gIFJPcmRlclByb2R1Y3RGaWVsZHM6IGdxbGBcclxuICAgICAgZnJhZ21lbnQgUk9yZGVyUHJvZHVjdEZpZWxkcyBvbiBST3JkZXJQcm9kdWN0IHtcclxuICAgICAgICAgIGNvdW50XHJcbiAgICAgICAgICBjcmVhdGVUaW1lXHJcbiAgICAgICAgICBkZWFsUHJpY2VcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBpc0RlbGV0ZVxyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgb3JkZXJJZFxyXG4gICAgICAgICAgcHJvZHVjdElkXHJcbiAgICAgICAgICB1cGRhdGVUaW1lXHJcbiAgICAgIH1cclxuICBgLFxyXG4gIFByb2R1Y3RGaWVsZHM6IGdxbGBcclxuICAgICAgZnJhZ21lbnQgUHJvZHVjdEZpZWxkcyBvbiBQcm9kdWN0IHtcclxuICAgICAgICAgIGJyYW5kXHJcbiAgICAgICAgICBjYXRlZ29yeUlkXHJcbiAgICAgICAgICBjcmVhdGVUaW1lXHJcbiAgICAgICAgICBncm91cEFtb3VudFxyXG4gICAgICAgICAgZ3JvdXBBbW91bnRVbml0XHJcbiAgICAgICAgICBncm91cFByZWNpc2lvblxyXG4gICAgICAgICAgZ3JvdXBSZW1hcmtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBpc0RlbGV0ZVxyXG4gICAgICAgICAgaXNFbmFibGVcclxuICAgICAgICAgIGlzR3JvdXBcclxuICAgICAgICAgIGlzSG90XHJcbiAgICAgICAgICBpc05ld1xyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgbnVtYmVyXHJcbiAgICAgICAgICBwYWNraW5nVW5pdFxyXG4gICAgICAgICAgcHJpY2VJblxyXG4gICAgICAgICAgcHJpY2VNYXJrZXRcclxuICAgICAgICAgIHByaWNlT3V0XHJcbiAgICAgICAgICByZW1hcmtcclxuICAgICAgICAgIHNoZWx2ZXNUeXBlc1xyXG4gICAgICAgICAgc29ydFxyXG4gICAgICAgICAgc3RvY2tcclxuICAgICAgICAgIHVuaXRcclxuICAgICAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgICAgIHdlaWdodFxyXG4gICAgICAgICAgdW5pdFN0cmluZ1xyXG4gICAgICAgICAgZ3JvdXBQcmVjaXNpb25TdHJpbmdcclxuICAgICAgICAgIGdyb3VwQW1vdW50VW5pdFN0cmluZ1xyXG4gICAgICAgICAgcGFja2luZ1VuaXRTdHJpbmdcclxuICAgICAgfVxyXG4gIGAsXHJcbiAgSW1nRmllbGRzOiBncWxgXHJcbiAgICBmcmFnbWVudCBJbWdGaWVsZHMgb24gUHJvZHVjdEltZyB7XHJcbiAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgIGlkXHJcbiAgICAgICAgaXNEZWxldGVcclxuICAgICAgICBuYW1lXHJcbiAgICAgICAgbnVtYmVyXHJcbiAgICAgICAgcHJvZHVjdElkXHJcbiAgICAgICAgdXBkYXRlVGltZVxyXG4gICAgICAgIHVybFxyXG4gICAgfSBcclxuICBgLFxyXG4gIFVzZXJBZGRyZXNzRmllbGRzOiBncWxgXHJcbiAgICAgIGZyYWdtZW50IFVzZXJBZGRyZXNzRmllbGRzIG9uIFVzZXJBZGRyZXNzIHtcclxuICAgICAgICAgIGFkZHJlc3NcclxuICAgICAgICAgIGNpdHlcclxuICAgICAgICAgIGNvbWJpbmVBZGRyZXNzXHJcbiAgICAgICAgICBjb250YWN0SW5mb3JtYXRpb25cclxuICAgICAgICAgIGNvbnRhY3RVc2VyTmFtZVxyXG4gICAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgICAgZGlzdHJpY3RcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBpc0RlZmF1bHRcclxuICAgICAgICAgIGlzRGVsZXRlXHJcbiAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICBwcm92aW5jZVxyXG4gICAgICAgICAgdXBkYXRlVGltZVxyXG4gICAgICAgICAgdXNlcklkXHJcbiAgICAgICAgICB6aXBcclxuICAgICAgfVxyXG4gIGAsXHJcbiAgVXNlclBheUNhcmRGaWVsZHM6IGdxbGBcclxuICAgICAgZnJhZ21lbnQgVXNlclBheUNhcmRGaWVsZHMgb24gVXNlclBheUNhcmQge1xyXG4gICAgICAgICAgYWRkcmVzc0RldGFpbFxyXG4gICAgICAgICAgY2l0eVxyXG4gICAgICAgICAgY29kZVxyXG4gICAgICAgICAgY29udGFjdFxyXG4gICAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgICAgZXhwaXJhdGlvblRpbWVcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBpc0RlZmF1bHRcclxuICAgICAgICAgIGlzRGVsZXRlXHJcbiAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICBudW1iZXJcclxuICAgICAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgICAgIHVzZXJJZFxyXG4gICAgICAgICAgdXNlck5hbWVcclxuICAgICAgICAgIHppcENvZGVcclxuICAgICAgfVxyXG4gIGAsXHJcbiAgU2hvcENhcnRGaWVsZHM6IGdxbGBcclxuICAgICAgZnJhZ21lbnQgU2hvcENhcnRGaWVsZHMgb24gU2hvcENhcnQge1xyXG4gICAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIGlzRGVsZXRlXHJcbiAgICAgICAgICBpc05leHRcclxuICAgICAgICAgIG5hbWVcclxuICAgICAgICAgIG51bWJlclxyXG4gICAgICAgICAgcHJvZHVjdElkXHJcbiAgICAgICAgICB1cGRhdGVUaW1lXHJcbiAgICAgICAgICB1c2VySWRcclxuICAgICAgfVxyXG4gIGAsXHJcbiAgRGF0YUNvbmZpZ0ZpZWxkczogZ3FsYFxyXG4gICAgZnJhZ21lbnQgRGF0YUNvbmZpZ0ZpZWxkcyBvbiBEYXRhQ29uZmlnIHtcclxuICAgICAgICBjcmVhdGVUaW1lXHJcbiAgICAgICAgaWRcclxuICAgICAgICBpc0RlbGV0ZVxyXG4gICAgICAgIG5hbWVcclxuICAgICAgICByZW1hcmtcclxuICAgICAgICB0eXBlXHJcbiAgICAgICAgdXBkYXRlVGltZVxyXG4gICAgICAgIHZhbHVlXHJcbiAgICB9XHJcbiAgYCxcclxuICBEaWN0RmllbGRzOiBncWxgXHJcbiAgICBmcmFnbWVudCBEaWN0RmllbGRzIG9uIERpY3Qge1xyXG4gICAgICAgIGNvZGVcclxuICAgICAgICBjcmVhdGVUaW1lXHJcbiAgICAgICAgZGljdFR5cGVDb2RlXHJcbiAgICAgICAgaWRcclxuICAgICAgICBpc0RlbGV0ZVxyXG4gICAgICAgIGlzRGlzYWJsZVxyXG4gICAgICAgIG5hbWVcclxuICAgICAgICByZW1hcmtcclxuICAgICAgICBzb3J0XHJcbiAgICAgICAgdXBkYXRlVGltZVxyXG4gICAgfVxyXG4gIGAsXHJcbiAgR3JvdXBRdWV1ZUZpZWxkczogZ3FsYFxyXG4gICAgICBmcmFnbWVudCBHcm91cFF1ZXVlRmllbGRzIG9uIEdyb3VwUXVldWUge1xyXG4gICAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgICAgZmlsbEFtb3VudFxyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIGlzRGVsZXRlXHJcbiAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICBwcm9kdWN0SWRcclxuICAgICAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgfVxyXG4gIGAsXHJcbiAgR3JvdXBPcmRlckZpZWxkczogZ3FsYFxyXG4gICAgICBmcmFnbWVudCBHcm91cE9yZGVyRmllbGRzIG9uIEdyb3VwT3JkZXIge1xyXG4gICAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgICAgZ3JvdXBRdWV1ZVxyXG4gICAgICAgICAgZ3JvdXBRdWV1ZUlkXHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgaXNEZWxldGVcclxuICAgICAgICAgIG5hbWVcclxuICAgICAgICAgIG9yZGVyR3JvdXBBbW91bnRcclxuICAgICAgICAgIG9yZGVySWRcclxuICAgICAgICAgIG9yZGVySW5mb1xyXG4gICAgICAgICAgdXBkYXRlVGltZVxyXG4gICAgICAgICAgdXNlclxyXG4gICAgICAgICAgdXNlcklkXHJcbiAgICAgIH1cclxuICBgLFxyXG59XHJcbiIsImltcG9ydCB7Z3FsfSBmcm9tICdhcG9sbG8tYm9vc3QnXHJcbmltcG9ydCB7ZnJhZ21lbnR9IGZyb20gJy4vZnJhZ21lbnQnXHJcbmltcG9ydCB7RGljdFR5cGVFbnVtfSBmcm9tICcuLi8uLi9zc19jb21tb24vZW51bSdcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyTGlzdERvYyA9IGdxbGBcclxuICAgIHF1ZXJ5IHJlZmFjdG9yZWQ2NDMoJGRhdGE6IFVzZXJMaXN0SW5wdXQhKSB7XHJcbiAgICAgICAgdXNlckxpc3QodXNlckxpc3RJbnB1dDogJGRhdGEpIHtcclxuICAgICAgICAgICAgbGlzdCB7XHJcbiAgICAgICAgICAgICAgICBvcmRlckNvaW5OZXh0TW9udGhcclxuICAgICAgICAgICAgICAgIG9yZGVyQ29pbkN1cnJlbnRNb250aFxyXG4gICAgICAgICAgICAgICAgb3JkZXJBbW91bnRDdXJyZW50WWVhclxyXG4gICAgICAgICAgICAgICAgLi4udXNlckluZm9cclxuICAgICAgICAgICAgICAgIC4uLlVzZXJGaWVsZHNcclxuICAgICAgICAgICAgICAgIC4uLm9yZGVySW5mb1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRvdGFsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnJhZ21lbnQgb3JkZXJJbmZvIG9uIFVzZXJ7XHJcbiAgICAgICAgb3JkZXJJbmZve1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgICAgICAgdXBkYXRlVGltZVxyXG4gICAgICAgICAgICBpc0RlbGV0ZVxyXG4gICAgICAgICAgICBudW1iZXJcclxuICAgICAgICAgICAgc3RhdGVcclxuICAgICAgICAgICAgYWN0dWFsbHlQYWlkXHJcbiAgICAgICAgICAgIGFkZHJlc3NJZFxyXG4gICAgICAgICAgICBwYXltZW50TWV0aG9kQ2FyZElkXHJcbiAgICAgICAgICAgIHN1YnRvdGFsXHJcbiAgICAgICAgICAgIGNvdXBvbkRpc2NvdW50XHJcbiAgICAgICAgICAgIHZpcERpc2NvdW50XHJcbiAgICAgICAgICAgIHRyYW5zcG9ydGF0aW9uQ29zdHNcclxuICAgICAgICAgICAgc2FsZVRheFxyXG4gICAgICAgICAgICBvcmRlcklkXHJcbiAgICAgICAgICAgIGRpc2NvdW50UHJvZHVjdFRvdGFsXHJcbiAgICAgICAgICAgIGZpbmlzaFRpbWVcclxuICAgICAgICAgICAgcGlja1VwVGltZVxyXG4gICAgICAgICAgICBwaWNrVXBUeXBlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnJhZ21lbnQgVXNlckZpZWxkcyBvbiBVc2VyIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIG5hbWVcclxuICAgICAgICBjcmVhdGVUaW1lXHJcbiAgICAgICAgdXBkYXRlVGltZVxyXG4gICAgICAgIGlzRGVsZXRlXHJcbiAgICAgICAgcGFzc3dvcmRcclxuICAgICAgICB0eXBlXHJcbiAgICB9XHJcbiAgICBmcmFnbWVudCB1c2VySW5mbyBvbiBVc2Vye1xyXG4gICAgICAgIHVzZXJJbmZve1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgICAgICAgdXBkYXRlVGltZVxyXG4gICAgICAgICAgICBpc0RlbGV0ZVxyXG4gICAgICAgICAgICB1c2VySWRcclxuICAgICAgICAgICAgcGhvbmVcclxuICAgICAgICAgICAgZW1haWxcclxuICAgICAgICAgICAgdXNlckxldmVsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RGF0YUNvbmZpZyA9IGdxbGBcclxuICAgIHF1ZXJ5ICgkZGF0YTogRGF0YUNvbmZpZ0l0ZW1JbnB1dCkge1xyXG4gICAgICAgIGdldERhdGFDb25maWcoZGF0YUNvbmZpZ0lucHV0OiAkZGF0YSkge1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgICAgICAgdXBkYXRlVGltZVxyXG4gICAgICAgICAgICBpc0RlbGV0ZVxyXG4gICAgICAgICAgICB0eXBlXHJcbiAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgIHJlbWFya1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IGhvbWVDYXJvdXNlbEltZ3MgPSBncWxgXHJcbiAgICBxdWVyeSBxdWVyeV9xdWVyeV90ZXN0TG9uZzEzNygkZGF0YTogRGF0YUNvbmZpZ0l0ZW1JbnB1dCkge1xyXG4gICAgICAgIGhvbWVDYXJvdXNlbEltZ3MoZGF0YUNvbmZpZ0lucHV0OiAkZGF0YSkge1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgICAgICAgdXBkYXRlVGltZVxyXG4gICAgICAgICAgICBpc0RlbGV0ZVxyXG4gICAgICAgICAgICB0eXBlXHJcbiAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgIHJlbWFya1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IGNhdGVnb3J5TGlzdCA9IGdxbGBcclxuICAgIHF1ZXJ5IHF1ZXJ5X3F1ZXJ5X3Rlc3RMb25nNTY1KCRkYXRhOiBDYXRlZ29yeUxpc3RJbnB1dCkge1xyXG4gICAgICAgIGNhdGVnb3J5TGlzdChkYXRhOiAkZGF0YSkge1xyXG4gICAgICAgICAgICB0b3RhbFxyXG4gICAgICAgICAgICBsaXN0IHtcclxuICAgICAgICAgICAgICAgIC4uLkNhdGVnb3J5XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAke2ZyYWdtZW50LkNhdGVnb3J5RmllbGRzfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgZG9jID0ge1xyXG4gIGdldFVzZXJMaXN0RG9jLFxyXG4gIGNhdGVnb3J5TGlzdCxcclxuICBnZXREYXRhQ29uZmlnLFxyXG4gIGhvbWVDYXJvdXNlbEltZ3MsXHJcbiAgcmVnaXN0ZXJVc2VyOiBncWxgXHJcbiAgICAgIG11dGF0aW9uIG11dGF0aW9uX3JlZ2lzdGVyVXNlOTk4KCRkYXRhOiBVc2VySXRlbUlucHV0KSB7XHJcbiAgICAgICAgICByZWdpc3RlclVzZXIoZGF0YTogJGRhdGEpIHtcclxuICAgICAgICAgICAgICB0b2tlblxyXG4gICAgICAgICAgICAgIHJlZnJlc2h0b2tlblxyXG4gICAgICAgICAgICAgIHVzZXIge1xyXG4gICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgICAgICAgICAgICAgdXBkYXRlVGltZVxyXG4gICAgICAgICAgICAgICAgICBpc0RlbGV0ZVxyXG4gICAgICAgICAgICAgICAgICBwYXNzd29yZFxyXG4gICAgICAgICAgICAgICAgICB0eXBlXHJcbiAgICAgICAgICAgICAgICAgIHVzZXJJbmZvIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gIGAsXHJcbiAgcmVmcmVzaFRva2VuOiBncWxgXHJcbiAgICAgIHF1ZXJ5IHJlZnJlc2hUb2tlbigkZGF0YTogU3RyaW5nISkge1xyXG4gICAgICAgICAgcmVmcmVzaFRva2VuKHJlZnJlc2h0b2tlbjogJGRhdGEpIHtcclxuICAgICAgICAgICAgICByZWZyZXNodG9rZW5cclxuICAgICAgICAgICAgICB0b2tlblxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgYCxcclxuICBsb2dpbjogZ3FsYFxyXG4gICAgICBxdWVyeSBsb2dpbigkZGF0YTogVXNlckl0ZW1JbnB1dCkge1xyXG4gICAgICAgICAgbG9naW4odXNlcjogJGRhdGEpIHtcclxuICAgICAgICAgICAgICB0b2tlblxyXG4gICAgICAgICAgICAgIHJlZnJlc2h0b2tlblxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgYCxcclxuICBvbmVVc2VyOiBncWxgXHJcbiAgICAgIHF1ZXJ5IG9uZVVzZXIge1xyXG4gICAgICAgICAgb25lVXNlciB7XHJcbiAgICAgICAgICAgICAgLi4uVXNlckZpZWxkc1xyXG4gICAgICAgICAgICAgIHVzZXJJbmZvIHtcclxuICAgICAgICAgICAgICAgICAgLi4uVXNlckluZm9GaWVsZHNcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJHtmcmFnbWVudC5Vc2VySW5mb0ZpZWxkc31cclxuICAgICAgJHtmcmFnbWVudC5Vc2VyRmllbGRzfVxyXG4gIGAsXHJcbiAgb3JkZXJMaXN0OiBncWxgXHJcbiAgICAgIHF1ZXJ5IG9yZGVyTGlzdCgkZGF0YTogT3JkZXJJbnB1dCl7XHJcbiAgICAgICAgICBvcmRlckxpc3QgKG9yZGVySW5wdXQ6ICRkYXRhLCBmcm9tVXNlcjogdHJ1ZSkge1xyXG4gICAgICAgICAgICAgIGxpc3Qge1xyXG4gICAgICAgICAgICAgICAgICAuLi5PcmRlckluZm9GaWVsZHNcclxuICAgICAgICAgICAgICAgICAgck9yZGVyUHJvZHVjdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAuLi5ST3JkZXJQcm9kdWN0RmllbGRzXHJcbiAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5Qcm9kdWN0RmllbGRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uSW1nRmllbGRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICR7ZnJhZ21lbnQuT3JkZXJJbmZvRmllbGRzfVxyXG4gICAgICAke2ZyYWdtZW50LlJPcmRlclByb2R1Y3RGaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuUHJvZHVjdEZpZWxkc31cclxuICAgICAgJHtmcmFnbWVudC5JbWdGaWVsZHN9XHJcbiAgYCxcclxuICBvcmRlckRldGFpbDogZ3FsYFxyXG4gICAgICBxdWVyeSAoJGlkOiBTdHJpbmcpIHtcclxuICAgICAgICAgIHNlbGZBZGRyZXNzOiBnZXREYXRhQ29uZmlnKGRhdGFDb25maWdJbnB1dDoge1xyXG4gICAgICAgICAgICAgIHR5cGU6IFwiJHtEaWN0VHlwZUVudW0uU2VsZkFkZHJlc3N9XCJcclxuICAgICAgICAgIH0pIHtcclxuICAgICAgICAgICAgICAuLi5EYXRhQ29uZmlnRmllbGRzXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBvcmRlckRldGFpbChpZDogJGlkKSB7XHJcbiAgICAgICAgICAgICAgLi4uT3JkZXJJbmZvRmllbGRzXHJcbiAgICAgICAgICAgICAgck9yZGVyUHJvZHVjdCB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLlJPcmRlclByb2R1Y3RGaWVsZHNcclxuICAgICAgICAgICAgICAgICAgcHJvZHVjdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAuLi5Qcm9kdWN0RmllbGRzXHJcbiAgICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC4uLkltZ0ZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHVzZXIge1xyXG4gICAgICAgICAgICAgICAgICAuLi5Vc2VyRmllbGRzXHJcbiAgICAgICAgICAgICAgICAgIHVzZXJJbmZvIHtcclxuICAgICAgICAgICAgICAgICAgICAgIC4uLlVzZXJJbmZvRmllbGRzXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgdXNlckFkZHJlc3Mge1xyXG4gICAgICAgICAgICAgICAgICAuLi5Vc2VyQWRkcmVzc0ZpZWxkc1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB1c2VyUGF5Q2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLlVzZXJQYXlDYXJkRmllbGRzXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICR7ZnJhZ21lbnQuRGF0YUNvbmZpZ0ZpZWxkc31cclxuICAgICAgJHtmcmFnbWVudC5PcmRlckluZm9GaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuUk9yZGVyUHJvZHVjdEZpZWxkc31cclxuICAgICAgJHtmcmFnbWVudC5Qcm9kdWN0RmllbGRzfVxyXG4gICAgICAke2ZyYWdtZW50LkltZ0ZpZWxkc31cclxuICAgICAgJHtmcmFnbWVudC5Vc2VyRmllbGRzfVxyXG4gICAgICAke2ZyYWdtZW50LlVzZXJJbmZvRmllbGRzfVxyXG4gICAgICAke2ZyYWdtZW50LlVzZXJQYXlDYXJkRmllbGRzfVxyXG4gICAgICAke2ZyYWdtZW50LlVzZXJBZGRyZXNzRmllbGRzfVxyXG4gIGAsXHJcbiAgdXBkYXRlUGFzc3dvcmQ6IGdxbGBcclxuICAgICAgbXV0YXRpb24gKCRkYXRhOiBVcGRhdGVQYXNzd29yZElucHV0KSB7XHJcbiAgICAgICAgICB1cGRhdGVQYXNzd29yZCAoZGF0YTogJGRhdGEpIHtcclxuICAgICAgICAgICAgICB1c2VyIHtcclxuICAgICAgICAgICAgICAgICAgLi4uVXNlckZpZWxkc1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBhdXRoQm9keSB7XHJcbiAgICAgICAgICAgICAgICAgIHRva2VuXHJcbiAgICAgICAgICAgICAgICAgIHJlZnJlc2h0b2tlblxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAke2ZyYWdtZW50LlVzZXJGaWVsZHN9XHJcbiAgYCxcclxuICBwYXlDYXJkTGlzdE9uZVVzZXI6IGdxbGBcclxuICAgICAgcXVlcnkge1xyXG4gICAgICAgICAgcGF5Q2FyZExpc3RPbmVVc2VyIHtcclxuICAgICAgICAgICAgICAuLi5Vc2VyUGF5Q2FyZEZpZWxkc1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICR7ZnJhZ21lbnQuVXNlclBheUNhcmRGaWVsZHN9XHJcbiAgYCxcclxuICB1c2VyUGF5Q2FyZDogZ3FsYFxyXG4gICAgICBxdWVyeSAoJGRhdGE6IFVzZXJQYXlDYXJkSXRlbUlucHV0KSB7XHJcbiAgICAgICAgICB1c2VyUGF5Q2FyZCAodXNlclBheUNhcmQ6ICRkYXRhKSB7XHJcbiAgICAgICAgICAgICAgLi4uVXNlclBheUNhcmRGaWVsZHNcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAke2ZyYWdtZW50LlVzZXJQYXlDYXJkRmllbGRzfVxyXG4gIGAsXHJcbiAgc2F2ZVVzZXJQYXlDYXJkOiBncWxgXHJcbiAgICAgIG11dGF0aW9uICgkZGF0YTogVXNlclBheUNhcmRJdGVtSW5wdXQpe1xyXG4gICAgICAgICAgc2F2ZVVzZXJQYXlDYXJkICh1c2VyUGF5Q2FyZDogJGRhdGEpIHtcclxuICAgICAgICAgICAgICAuLi5Vc2VyUGF5Q2FyZEZpZWxkc1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICR7ZnJhZ21lbnQuVXNlclBheUNhcmRGaWVsZHN9XHJcbiAgYCxcclxuICBzZXRVc2VyUGF5Q2FyZERlZmF1bHQ6IGdxbGBcclxuICAgICAgbXV0YXRpb24gKCRkYXRhOiBVc2VyUGF5Q2FyZEl0ZW1JbnB1dCkge1xyXG4gICAgICAgICAgc2V0VXNlclBheUNhcmREZWZhdWx0ICh1c2VyUGF5Q2FyZDogJGRhdGEpIHtcclxuICAgICAgICAgICAgICAuLi5Vc2VyUGF5Q2FyZEZpZWxkc1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICR7ZnJhZ21lbnQuVXNlclBheUNhcmRGaWVsZHN9XHJcbiAgYCxcclxuICBwaWNrdXBBZGRyZXNzOiBncWxgXHJcbiAgICAgIHF1ZXJ5IHtcclxuICAgICAgICAgIGdldERhdGFDb25maWcoZGF0YUNvbmZpZ0lucHV0OiB7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCIke0RpY3RUeXBlRW51bS5TZWxmQWRkcmVzc31cIlxyXG4gICAgICAgICAgfSkge1xyXG4gICAgICAgICAgICAgIC4uLkRhdGFDb25maWdGaWVsZHNcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIG9uZVVzZXIge1xyXG4gICAgICAgICAgICAgIC4uLlVzZXJGaWVsZHNcclxuICAgICAgICAgICAgICB1c2VySW5mbyB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLlVzZXJJbmZvRmllbGRzXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICR7ZnJhZ21lbnQuVXNlckluZm9GaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuRGF0YUNvbmZpZ0ZpZWxkc31cclxuICAgICAgJHtmcmFnbWVudC5Vc2VyRmllbGRzfVxyXG4gIGAsXHJcbiAgdXBkYXRlVXNlckluZm86IGdxbGBcclxuICAgICAgbXV0YXRpb24gKCR1c2VySW5mbzogVXNlckluZm9JdGVtSW5wdXQpIHtcclxuICAgICAgICAgIHVwZGF0ZVVzZXJJbmZvICh1c2VySW5mbzogJHVzZXJJbmZvKSB7XHJcbiAgICAgICAgICAgICAgLi4uVXNlckluZm9GaWVsZHNcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAke2ZyYWdtZW50LlVzZXJJbmZvRmllbGRzfVxyXG4gIGAsXHJcbiAgdXNlckFkZHJlc3NMaXN0T25lVXNlcjogZ3FsYFxyXG4gICAgICBxdWVyeSB7XHJcbiAgICAgICAgICB1c2VyQWRkcmVzc0xpc3RPbmVVc2VyIHtcclxuICAgICAgICAgICAgICAuLi5Vc2VyQWRkcmVzc0ZpZWxkc1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICR7ZnJhZ21lbnQuVXNlckFkZHJlc3NGaWVsZHN9XHJcbiAgYCxcclxuICB1c2VyQWRkcmVzczogZ3FsYFxyXG4gICAgICBxdWVyeSAoJGRhdGE6IFVzZXJBZGRyZXNzSXRlbUlucHV0KSB7XHJcbiAgICAgICAgICB1c2VyQWRkcmVzcyAodXNlckFkZHJlc3M6ICRkYXRhKSB7XHJcbiAgICAgICAgICAgICAgLi4uVXNlckFkZHJlc3NGaWVsZHNcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAke2ZyYWdtZW50LlVzZXJBZGRyZXNzRmllbGRzfVxyXG4gIGAsXHJcbiAgc2F2ZVVzZXJBZGRyZXNzOiBncWxgXHJcbiAgICAgIG11dGF0aW9uICgkZGF0YTogVXNlckFkZHJlc3NJdGVtSW5wdXQpe1xyXG4gICAgICAgICAgc2F2ZVVzZXJBZGRyZXNzICh1c2VyQWRkcmVzczogJGRhdGEpIHtcclxuICAgICAgICAgICAgICAuLi5Vc2VyQWRkcmVzc0ZpZWxkc1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICR7ZnJhZ21lbnQuVXNlckFkZHJlc3NGaWVsZHN9XHJcbiAgYCxcclxuICBzZXRVc2VyQWRkcmVzc0RlZmF1bHQ6IGdxbGBcclxuICAgICAgbXV0YXRpb24gKCRkYXRhOiBVc2VyQWRkcmVzc0l0ZW1JbnB1dCkge1xyXG4gICAgICAgICAgc2V0VXNlckFkZHJlc3NEZWZhdWx0ICh1c2VyQWRkcmVzczogJGRhdGEpIHtcclxuICAgICAgICAgICAgICAuLi5Vc2VyQWRkcmVzc0ZpZWxkc1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICR7ZnJhZ21lbnQuVXNlckFkZHJlc3NGaWVsZHN9XHJcbiAgYCxcclxuICBwcm9kdWN0c0luQ2F0ZWdvcnk6IGdxbGBcclxuICAgICAgcXVlcnkgKCRkYXRhOiBDYXRlZ29yeUl0ZW1JbnB1dCwgJHByb2R1Y3RJdGVtSW5wdXQ6IFByb2R1Y3RJdGVtSW5wdXQpIHtcclxuICAgICAgICAgIHByb2R1Y3RzSW5DYXRlZ29yeShjYXRlZ29yeUl0ZW1JbnB1dDogJGRhdGEsIHByb2R1Y3RJdGVtSW5wdXQ6ICRwcm9kdWN0SXRlbUlucHV0KSB7XHJcbiAgICAgICAgICAgICAgLi4uUHJvZHVjdEZpZWxkc1xyXG4gICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLkltZ0ZpZWxkc1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNhdGVnb3J5TGlzdChkYXRhOiB7XHJcbiAgICAgICAgICAgICAgY2F0ZWdvcnk6IHtcclxuICAgICAgICAgICAgICAgICAgcGFyZW50Q2F0ZWdvcnk6ICRkYXRhXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSkge1xyXG4gICAgICAgICAgICAgIHRvdGFsXHJcbiAgICAgICAgICAgICAgbGlzdCB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLkNhdGVnb3J5XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICR7ZnJhZ21lbnQuUHJvZHVjdEZpZWxkc31cclxuICAgICAgJHtmcmFnbWVudC5JbWdGaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuQ2F0ZWdvcnlGaWVsZHN9XHJcbiAgYCxcclxuICBjYXRlZ29yeUxldmVsOiBncWxgXHJcbiAgICAgIHF1ZXJ5ICgkZGF0YTogQ2F0ZWdvcnlJdGVtSW5wdXQpIHtcclxuICAgICAgICAgIGNhdGVnb3J5TGV2ZWwoY2F0ZWdvcnlJdGVtSW5wdXQ6ICRkYXRhKVxyXG4gICAgICB9XHJcbiAgYCxcclxuICBvbmVDYXRlZ29yeTogZ3FsYFxyXG4gICAgICBxdWVyeSAoJGRhdGE6IENhdGVnb3J5SXRlbUlucHV0KSB7XHJcbiAgICAgICAgICBvbmVDYXRlZ29yeShkYXRhOiAkZGF0YSkge1xyXG4gICAgICAgICAgICAgIC4uLkNhdGVnb3J5XHJcbiAgICAgICAgICAgICAgcGFyZW50Q2F0ZWdvcnkge1xyXG4gICAgICAgICAgICAgICAgICAuLi5DYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgICBwYXJlbnRDYXRlZ29yeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAuLi5DYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICR7ZnJhZ21lbnQuQ2F0ZWdvcnlGaWVsZHN9XHJcbiAgYCxcclxuICBwcm9kdWN0TGlzdDogZ3FsYFxyXG4gICAgICBxdWVyeSAoJHByb2R1Y3RJbnB1dDogUHJvZHVjdEl0ZW1JbnB1dCwgJG9yZGVyQnlJbnB1dDogT3JkZXJCeUlucHV0KSB7XHJcbiAgICAgICAgICBwcm9kdWN0TGlzdChwcm9kdWN0SW5wdXQ6ICRwcm9kdWN0SW5wdXQsIG9yZGVyQnlJbnB1dDogJG9yZGVyQnlJbnB1dCkge1xyXG4gICAgICAgICAgICAgIHRvdGFsXHJcbiAgICAgICAgICAgICAgbGlzdCB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLlByb2R1Y3RGaWVsZHNcclxuICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgIC4uLkltZ0ZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICR7ZnJhZ21lbnQuUHJvZHVjdEZpZWxkc31cclxuICAgICAgJHtmcmFnbWVudC5JbWdGaWVsZHN9XHJcbiAgYCxcclxuICB1cGRhdGVOdW1TaG9wQ2FydDogZ3FsYFxyXG4gICAgICBtdXRhdGlvbiAoJHNob3BDYXJ0OiBTaG9wQ2FydEl0ZW1JbnB1dCwgJHVwZGF0ZU51bTogRmxvYXQpIHtcclxuICAgICAgICAgIHVwZGF0ZU51bVNob3BDYXJ0IChzaG9wQ2FydDogJHNob3BDYXJ0LCB1cGRhdGVOdW06ICR1cGRhdGVOdW0pIHtcclxuICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgIG51bWJlclxyXG4gICAgICAgICAgICAgIHByb2R1Y3Qge1xyXG4gICAgICAgICAgICAgICAgICAuLi5Qcm9kdWN0RmllbGRzXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHVzZXIge1xyXG4gICAgICAgICAgICAgICAgICAuLi5Vc2VyRmllbGRzXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICR7ZnJhZ21lbnQuUHJvZHVjdEZpZWxkc31cclxuICAgICAgJHtmcmFnbWVudC5Vc2VyRmllbGRzfVxyXG4gIGAsXHJcbiAgdXNlclNob3BDYXJ0TGlzdDogZ3FsYFxyXG4gICAgICBxdWVyeSB7XHJcbiAgICAgICAgICBzaG9wQ2FydExpc3Qge1xyXG4gICAgICAgICAgICAgIC4uLlNob3BDYXJ0RmllbGRzXHJcbiAgICAgICAgICAgICAgcHJvZHVjdCB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLlByb2R1Y3RGaWVsZHNcclxuICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgIC4uLkltZ0ZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICR7ZnJhZ21lbnQuU2hvcENhcnRGaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuUHJvZHVjdEZpZWxkc31cclxuICAgICAgJHtmcmFnbWVudC5JbWdGaWVsZHN9XHJcbiAgYCxcclxuICB1cGRhdGVTaG9wQ2FydDogZ3FsYFxyXG4gICAgICBtdXRhdGlvbiAoJHNob3BDYXJ0OiBTaG9wQ2FydEl0ZW1JbnB1dCl7XHJcbiAgICAgICAgICB1cGRhdGVTaG9wQ2FydCAoc2hvcENhcnQ6ICRzaG9wQ2FydCkge1xyXG4gICAgICAgICAgICAgIC4uLlNob3BDYXJ0RmllbGRzXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJHtmcmFnbWVudC5TaG9wQ2FydEZpZWxkc31cclxuICBgLFxyXG4gIG9yZGVyQ29uZmlybUluZm86IGdxbGBcclxuICAgICAgcXVlcnkge1xyXG4gICAgICAgICAgZ2V0RGF0YUNvbmZpZyhkYXRhQ29uZmlnSW5wdXQ6IHtcclxuICAgICAgICAgICAgICB0eXBlOiBcIiR7RGljdFR5cGVFbnVtLlNlbGZBZGRyZXNzfVwiXHJcbiAgICAgICAgICB9KSB7XHJcbiAgICAgICAgICAgICAgLi4uRGF0YUNvbmZpZ0ZpZWxkc1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgb25lVXNlciB7XHJcbiAgICAgICAgICAgICAgLi4uVXNlckZpZWxkc1xyXG4gICAgICAgICAgICAgIHVzZXJJbmZvIHtcclxuICAgICAgICAgICAgICAgICAgLi4uVXNlckluZm9GaWVsZHNcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBwYXlDYXJkTGlzdE9uZVVzZXIge1xyXG4gICAgICAgICAgICAgIC4uLlVzZXJQYXlDYXJkRmllbGRzXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB1c2VyQWRkcmVzc0xpc3RPbmVVc2VyIHtcclxuICAgICAgICAgICAgICAuLi5Vc2VyQWRkcmVzc0ZpZWxkc1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZnJlaWdodENvbmZpZzogZ2V0RGF0YUNvbmZpZyAoZGF0YUNvbmZpZ0lucHV0OiB7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCIke0RpY3RUeXBlRW51bS5GcmVpZ2h0fVwiXHJcbiAgICAgICAgICB9KSB7XHJcbiAgICAgICAgICAgICAgLi4uRGF0YUNvbmZpZ0ZpZWxkc1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdXNlckxldmVsTGlzdDogZ2V0RGljdExpc3QgKGRpY3RJbnB1dDoge1xyXG4gICAgICAgICAgICAgIGRpY3RUeXBlQ29kZTogXCJVc2VyTGV2ZWxcIlxyXG4gICAgICAgICAgfSkge1xyXG4gICAgICAgICAgICAgIC4uLkRpY3RGaWVsZHNcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAke2ZyYWdtZW50LlVzZXJBZGRyZXNzRmllbGRzfVxyXG4gICAgICAke2ZyYWdtZW50LlVzZXJQYXlDYXJkRmllbGRzfVxyXG4gICAgICAke2ZyYWdtZW50LlVzZXJJbmZvRmllbGRzfVxyXG4gICAgICAke2ZyYWdtZW50LlVzZXJGaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuRGF0YUNvbmZpZ0ZpZWxkc31cclxuICAgICAgJHtmcmFnbWVudC5EaWN0RmllbGRzfVxyXG4gIGAsXHJcbiAgc2F2ZU9yZGVyOiBncWxgXHJcbiAgICAgIG11dGF0aW9uICgkb3JkZXJJbmZvSXRlbUlucHV0OiBPcmRlckluZm9JdGVtSW5wdXQpIHtcclxuICAgICAgICAgIHNhdmVPcmRlciAob3JkZXJJbmZvSXRlbUlucHV0OiAkb3JkZXJJbmZvSXRlbUlucHV0KSB7XHJcbiAgICAgICAgICAgICAgLi4uT3JkZXJJbmZvRmllbGRzXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJHtmcmFnbWVudC5PcmRlckluZm9GaWVsZHN9XHJcbiAgYCxcclxuICBkaWN0TGlzdDogZ3FsYFxyXG4gICAgICBxdWVyeSAoJGRhdGE6IERpY3RJbnB1dCkge1xyXG4gICAgICAgICAgZ2V0RGljdExpc3QgKGRpY3RJbnB1dDogJGRhdGEpIHtcclxuICAgICAgICAgICAgICAuLi5EaWN0RmllbGRzXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJHtmcmFnbWVudC5EaWN0RmllbGRzfVxyXG4gIGAsXHJcbiAgbGltaXRUaW1lRGF0YTogZ3FsYFxyXG4gICAgcXVlcnkge1xyXG4gICAgICAgIGxpbWl0VGltZURhdGE6IGdldERhdGFDb25maWcgKGRhdGFDb25maWdJbnB1dDoge1xyXG4gICAgICAgICAgICB0eXBlOiBcIiR7RGljdFR5cGVFbnVtLlByb21vdGlvbkZsYXNoU2FsZX1cIlxyXG4gICAgICAgIH0pIHtcclxuICAgICAgICAgICAgLi4uRGF0YUNvbmZpZ0ZpZWxkc1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuRGF0YUNvbmZpZ0ZpZWxkc31cclxuICBgLFxyXG4gIHByb2R1Y3RMaXN0QnlJZHM6IGdxbGBcclxuICAgIHF1ZXJ5ICgkaWRzOiBbU3RyaW5nXSkge1xyXG4gICAgICAgIHByb2R1Y3RMaXN0QnlJZHMgKGlkczogJGlkcykge1xyXG4gICAgICAgICAgICB0b3RhbFxyXG4gICAgICAgICAgICBsaXN0IHtcclxuICAgICAgICAgICAgICAgIC4uLlByb2R1Y3RGaWVsZHNcclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uSW1nRmllbGRzXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAke2ZyYWdtZW50LlByb2R1Y3RGaWVsZHN9XHJcbiAgICAke2ZyYWdtZW50LkltZ0ZpZWxkc31cclxuICBgLFxyXG4gIGdyb3VwUXVldWVMaXN0OiBncWxgXHJcbiAgICBxdWVyeSAoJGdyb3VwUXVldWVJdGVtSW5wdXQ6IEdyb3VwUXVldWVJdGVtSW5wdXQpIHtcclxuICAgICAgICBncm91cFF1ZXVlTGlzdCAoZ3JvdXBRdWV1ZUl0ZW1JbnB1dDogJGdyb3VwUXVldWVJdGVtSW5wdXQpIHtcclxuICAgICAgICAgICAgLi4uR3JvdXBRdWV1ZUZpZWxkc1xyXG4gICAgICAgICAgICBwcm9kdWN0IHtcclxuICAgICAgICAgICAgICAgIC4uLlByb2R1Y3RGaWVsZHNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBncm91cE9yZGVyIHtcclxuICAgICAgICAgICAgICAgIC4uLkdyb3VwT3JkZXJGaWVsZHNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuR3JvdXBRdWV1ZUZpZWxkc31cclxuICAgICR7ZnJhZ21lbnQuUHJvZHVjdEZpZWxkc31cclxuICAgICR7ZnJhZ21lbnQuR3JvdXBPcmRlckZpZWxkc31cclxuICBgLFxyXG4gIHVwZGF0ZU9yZGVyOiBncWxgXHJcbiAgICBtdXRhdGlvbiAoJG9yZGVySW5mb0l0ZW1JbnB1dDogT3JkZXJJbmZvSXRlbUlucHV0KSB7XHJcbiAgICAgICAgdXBkYXRlT3JkZXIgKG9yZGVySW5mb0l0ZW1JbnB1dDogJG9yZGVySW5mb0l0ZW1JbnB1dCkge1xyXG4gICAgICAgICAgICAuLi5PcmRlckluZm9GaWVsZHNcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAke2ZyYWdtZW50Lk9yZGVySW5mb0ZpZWxkc31cclxuICBgLFxyXG4gIHNhdmVHcm91cE9yZGVyOiBncWxgXHJcbiAgICBtdXRhdGlvbiAoJG9yZGVySW5mb0l0ZW1JbnB1dDogT3JkZXJJbmZvSXRlbUlucHV0LCAkZ3JvdXBPcmRlckl0ZW1JbnB1dDogR3JvdXBPcmRlckl0ZW1JbnB1dCwgJGdyb3VwUXVldWVJdGVtSW5wdXQ6IEdyb3VwUXVldWVJdGVtSW5wdXQpIHtcclxuICAgICAgICBzYXZlR3JvdXBPcmRlciAob3JkZXJJbmZvSXRlbUlucHV0OiAkb3JkZXJJbmZvSXRlbUlucHV0LCBncm91cE9yZGVySXRlbUlucHV0OiAkZ3JvdXBPcmRlckl0ZW1JbnB1dCwgZ3JvdXBRdWV1ZUl0ZW1JbnB1dDogJGdyb3VwUXVldWVJdGVtSW5wdXQpIHtcclxuICAgICAgICAgICAgLi4uT3JkZXJJbmZvRmllbGRzXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5PcmRlckluZm9GaWVsZHN9XHJcbiAgYCxcclxufVxyXG5cclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFN0YXJSb3VuZGVkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU3RhclJvdW5kZWQnXHJcbmltcG9ydCBTdGFyQm9yZGVyUm91bmRlZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1N0YXJCb3JkZXJSb3VuZGVkJ1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7bW9kZWxGYWN0b3J5fSBmcm9tICcuLi8uLi9Nb2RlbEFjdGlvbi9tb2RlbFV0aWwnXHJcbmltcG9ydCB7XHJcbiAgR3JvdXBPcmRlckl0ZW1JbnB1dCxcclxuICBHcm91cFF1ZXVlLFxyXG4gIEdyb3VwUXVldWVJdGVtSW5wdXQsXHJcbiAgT3JkZXJJbmZvSXRlbUlucHV0LFxyXG4gIFByb2R1Y3RcclxufSBmcm9tICcuLi8uLi9ncmFwaHFsVHlwZXMvdHlwZXMnXHJcbmltcG9ydCB7ZG9jfSBmcm9tICcuLi8uLi9ncmFwaHFsVHlwZXMvZG9jJ1xyXG5pbXBvcnQge3VzZVN0b3JlTW9kZWx9IGZyb20gJy4uLy4uL01vZGVsQWN0aW9uL3VzZVN0b3JlJ1xyXG5pbXBvcnQge2RlYWxNb25leSwgZnBNZXJnZVByZX0gZnJvbSAnLi4vLi4vdG9vbHMvdXRpbHMnXHJcbmltcG9ydCBDdXNDYXJvdXNlbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1N3aXBlL1N3aXBlJ1xyXG5pbXBvcnQge0hlYWRlclRpdGxlfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0hlYWRlclRpdGxlL0hlYWRlclRpdGxlJ1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQge2xzfSBmcm9tICcuLi8uLi90b29scy9kZWFsS2V5J1xyXG5pbXBvcnQge21wU3R5bGV9IGZyb20gJy4uLy4uL3N0eWxlL2NvbW1vbidcclxuaW1wb3J0IHtncmV5fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMnXHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHtHcm91cE9yZGVyUGFnZSwgZ3JvdXBPcmRlclBhZ2VNb2RlbH0gZnJvbSAnLi9ncm91cE9yZGVyUGFnZSdcclxuXHJcbmV4cG9ydCBjb25zdCBncm91cFByb2R1Y3RNb2RlbCA9IG1vZGVsRmFjdG9yeSgnZ3JvdXBQcm9kdWN0TW9kZWwnLCB7XHJcbiAgcHJvZHVjdDoge30gYXMgUHJvZHVjdCxcclxuICBncm91cFF1ZXVlTGlzdDogW10gYXMgR3JvdXBRdWV1ZVtdLFxyXG4gIHNlbGVjdE51bTogMCxcclxuICBzZWxlY3RRdWV1ZUlkOiAnJyxcclxuICBudW1EaXNjb3VudDogMSxcclxuICBncm91cERpc2NvdW50OiAxLFxyXG59LCB7XHJcbiAgZ2V0RGF0YTogYXN5bmMgKHZhbHVlOiBzdHJpbmcsIG9wdGlvbikgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgb3B0aW9uLnF1ZXJ5KGRvYy5wcm9kdWN0TGlzdEJ5SWRzLCB7XHJcbiAgICAgIGlkczogW3ZhbHVlXSxcclxuICAgIH0pXHJcbiAgICBjb25zdCBncm91cFF1ZXVlTGlzdCA9IGF3YWl0IG9wdGlvbi5xdWVyeShkb2MuZ3JvdXBRdWV1ZUxpc3QsIHtcclxuICAgICAgZ3JvdXBRdWV1ZUl0ZW1JbnB1dDoge1xyXG4gICAgICAgIHByb2R1Y3Q6IHtcclxuICAgICAgICAgIGlkOiB2YWx1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9IGFzIEdyb3VwUXVldWVJdGVtSW5wdXQsXHJcbiAgICB9KVxyXG4gICAgb3B0aW9uLnNldERhdGEoZnBNZXJnZVByZSh7XHJcbiAgICAgIHByb2R1Y3Q6IHJlcz8ucHJvZHVjdExpc3RCeUlkcz8ubGlzdFswXSA/PyB7fSxcclxuICAgICAgZ3JvdXBRdWV1ZUxpc3Q6IGdyb3VwUXVldWVMaXN0Py5ncm91cFF1ZXVlTGlzdCA/PyBbXSxcclxuICAgIH0pKVxyXG4gIH0sXHJcbiAgdXBkYXRlU2VsZWN0TnVtOiAodmFsdWU6IG51bWJlciwgb3B0aW9uKSA9PiB7XHJcbiAgICBvcHRpb24uc2V0RGF0YShmcE1lcmdlUHJlKHtcclxuICAgICAgc2VsZWN0TnVtOiB2YWx1ZSA9PT0gb3B0aW9uLmRhdGEuc2VsZWN0TnVtID8gMCA6IHZhbHVlXHJcbiAgICB9KSlcclxuICB9LFxyXG4gIHN1Ym1pdDogYXN5bmMgKHtvcmRlckluZm9JdGVtSW5wdXR9OiB7IG9yZGVySW5mb0l0ZW1JbnB1dDogT3JkZXJJbmZvSXRlbUlucHV0IH0sIG9wdGlvbikgPT4ge1xyXG4gICAgb3B0aW9uLm11dGF0ZShkb2Muc2F2ZUdyb3VwT3JkZXIsIHtcclxuICAgICAgb3JkZXJJbmZvSXRlbUlucHV0OiB7XHJcbiAgICAgICAgICAuLi5vcmRlckluZm9JdGVtSW5wdXQsXHJcbiAgICAgIH0gYXMgT3JkZXJJbmZvSXRlbUlucHV0LFxyXG4gICAgICBncm91cE9yZGVySXRlbUlucHV0OiB7XHJcbiAgICAgICAgb3JkZXJHcm91cEFtb3VudDogb3B0aW9uLmRhdGEuc2VsZWN0TnVtLFxyXG4gICAgICB9IGFzIEdyb3VwT3JkZXJJdGVtSW5wdXQsXHJcbiAgICAgIGdyb3VwUXVldWVJdGVtSW5wdXQ6IHtcclxuICAgICAgICBwcm9kdWN0OiBvcHRpb24uZGF0YS5wcm9kdWN0LFxyXG4gICAgICAgIC4uLihvcHRpb24uZGF0YS5zZWxlY3RRdWV1ZUlkID8ge2lkOiBvcHRpb24uZGF0YS5zZWxlY3RRdWV1ZUlkfSA6IHt9KSxcclxuICAgICAgfSBhcyBHcm91cFF1ZXVlSXRlbUlucHV0LFxyXG4gICAgfSlcclxuICB9LFxyXG59KVxyXG5cclxuY29uc3QgUHJpY2VSZWQgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQ6ICR7bXBTdHlsZS5yZWR9O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEyMHB4O1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDMwcHgpO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgPiBtYWluIHtcclxuICAgIGdyaWQtYXJlYTogMS8xLzMvMjtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgID4gc3BhbiB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5jb25zdCBOYW1lID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAxNnB4IDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgPiBtYWluIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgfVxyXG4gID4gc2VjdGlvbiB7XHJcbiAgICA+IHNwYW4ge1xyXG4gICAgICBwYWRkaW5nOiAwIDRweDtcclxuICAgICAgYmFja2dyb3VuZDogJHtncmV5Wyc3MDAnXX07XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBib3R0b206IC00cHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgWWVsbG93U3RhciA9ICgpID0+IDxTdGFyUm91bmRlZEljb24gZm9udFNpemU9eydzbWFsbCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y29sb3I6ICcjRkREMzM0J319Lz5cclxuXHJcbmNvbnN0IFRpdGxlID0gc3R5bGVkLmhlYWRlcmBcclxuICBmb250LXNpemU6IDIwcHg7XHJcbmBcclxuY29uc3QgR3JvdXBRdWV1ZUJveCA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogMTZweDtcclxuYFxyXG5cclxuY29uc3QgU21hcnRNYXRjaCA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogMTZweCAxNnB4IDkwcHg7XHJcbiAgPiBzZWN0aW9uIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICA+IG1haW4ge1xyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgUHJpY2UgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gID4gbWFpbiB7XHJcbiAgICAvL2ZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICA+IG1haW4sIHNlY3Rpb24ge1xyXG4gICAgPiAqIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgU3VibWl0ID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICR7bXBTdHlsZS5yZWR9O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYm94LXNoYWRvdzogJHttcFN0eWxlLnNoYWRvd1snMSddfTtcclxuICA+IGFzaWRlIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAgIGNvbG9yOiAke21wU3R5bGUucmVkfTtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBHcm91cFByb2R1Y3QgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBpZCA9IChyb3V0ZXIucXVlcnk/LmlkIGFzIHN0cmluZykgPz8gJydcclxuICBjb25zdCB7YWN0aW9uczogYWN0aW9uc0dyb3VwUHJvZHVjdCwgc3RhdGU6IHN0YXRlR3JvdXBQcm9kdWN0fSA9IHVzZVN0b3JlTW9kZWwoZ3JvdXBQcm9kdWN0TW9kZWwpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFjdGlvbnNHcm91cFByb2R1Y3QuZ2V0RGF0YShpZClcclxuICB9LCBbaWRdKVxyXG4gIGNvbnN0IHthY3Rpb25zOiBhY3Rpb25zR3JvdXBPcmRlclBhZ2VNb2RlbH0gPSB1c2VTdG9yZU1vZGVsKGdyb3VwT3JkZXJQYWdlTW9kZWwpXHJcblxyXG4gIGNvbnN0IHByb2R1Y3QgPSBzdGF0ZUdyb3VwUHJvZHVjdC5wcm9kdWN0XHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIGFjdGlvbnNHcm91cFByb2R1Y3QudXBkYXRlU2VsZWN0TnVtKDIpXHJcbiAgLy8gICBhY3Rpb25zR3JvdXBPcmRlclBhZ2VNb2RlbC5vcGVuKClcclxuICAvLyB9LCBbXSlcclxuXHJcbiAgY29uc29sZS5sb2coc3RhdGVHcm91cFByb2R1Y3QuZ3JvdXBRdWV1ZUxpc3QpXHJcbiAgcmV0dXJuIDxkaXY+XHJcbiAgICA8SGVhZGVyVGl0bGVcclxuICAgICAgICB0aXRsZT17J+S6p+WTgeivpuaDhSd9XHJcbiAgICAvPlxyXG4gICAgPEN1c0Nhcm91c2VsXHJcbiAgICAgICAgaGVpZ2h0PXsnMjQwcHgnfVxyXG4gICAgICAgIGRhdGFMaXN0PXtwcm9kdWN0Py5pbWc/Lm1hcCh2ID0+ICh7XHJcbiAgICAgICAgICAuLi52LFxyXG4gICAgICAgICAgaW1nVXJsOiB2Py51cmwsXHJcbiAgICAgICAgfSkpIGFzIFtdfVxyXG4gICAgLz5cclxuICAgIDxQcmljZVJlZD5cclxuICAgICAgPG1haW4+XHJcbiAgICAgICAge2xzKCfln7rlh4bku7fmoLwnKX1cclxuICAgICAgICA8c3Bhbj57ZGVhbE1vbmV5KHByb2R1Y3QucHJpY2VPdXQpfS97cHJvZHVjdC5wYWNraW5nVW5pdFN0cmluZ308L3NwYW4+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgICAgPGFzaWRlPntscygn5bey5oiQ5ZuiJyl9ezIzfXtscygn5Y2VJyl9PC9hc2lkZT5cclxuICAgICAgPGFzaWRlPntscygn5ou85Zui5LitJyl9ezJ9e2xzKCfljZUnKX08L2FzaWRlPlxyXG4gICAgPC9QcmljZVJlZD5cclxuICAgIDxOYW1lPlxyXG4gICAgICA8bWFpbj57cHJvZHVjdC5uYW1lfTwvbWFpbj5cclxuICAgICAgPHNlY3Rpb24+e3Byb2R1Y3QuZ3JvdXBSZW1hcmt9L3twcm9kdWN0Lmdyb3VwQW1vdW50fXtwcm9kdWN0Lmdyb3VwQW1vdW50VW5pdFN0cmluZ308YnIvPntscygn5YiG5Zui57K+5bqmJyl9XHJcbiAgICAgICAgPHNwYW4+e1suLi5BcnJheShwcm9kdWN0Lmdyb3VwUHJlY2lzaW9uKV0ubWFwKCh2LCBpKSA9PiBpKS5tYXAodmFsdWUgPT5cclxuICAgICAgICAgICAgPFllbGxvd1N0YXIga2V5PXt2YWx1ZX0vPil9PC9zcGFuPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L05hbWU+XHJcbiAgICA8R3JvdXBRdWV1ZUJveD5cclxuICAgICAgPFRpdGxlPntscygn5ou85Zui5LitJyl9PC9UaXRsZT5cclxuICAgIDwvR3JvdXBRdWV1ZUJveD5cclxuICAgIDxTbWFydE1hdGNoPlxyXG4gICAgICA8aGVhZGVyPlxyXG4gICAgICAgIDxUaXRsZT57bHMoJ+aZuuiDveWMuemFjScpfTwvVGl0bGU+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG4gICAgICA8c2VjdGlvbj5cclxuICAgICAgICB7bHMoJ+ivt+eCueWHuycpfVxyXG4gICAgICAgIDxTdGFyQm9yZGVyUm91bmRlZEljb24vPlxyXG4gICAgICAgIHtscygn56Gu5a6a5oKo6ZyA6KaB55qE5Lu95pWwJyl9XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPG1haW4+XHJcbiAgICAgICAge1suLi5BcnJheShwcm9kdWN0Lmdyb3VwUHJlY2lzaW9uKV0ubWFwKCh2LCBpKSA9PiBpKS5tYXAodmFsdWUgPT4gdmFsdWUgKyAxID4gc3RhdGVHcm91cFByb2R1Y3Quc2VsZWN0TnVtID9cclxuICAgICAgICAgICAgPFN0YXJCb3JkZXJSb3VuZGVkSWNvblxyXG4gICAgICAgICAgICAgICAga2V5PXtgY2xpY2tTdGFyJHt2YWx1ZX1gfVxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU9eydsYXJnZSd9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhY3Rpb25zR3JvdXBQcm9kdWN0LnVwZGF0ZVNlbGVjdE51bSh2YWx1ZSArIDEpfVxyXG4gICAgICAgICAgICAvPiA6IDxTdGFyUm91bmRlZEljb25cclxuICAgICAgICAgICAgICAgIGtleT17YGNsaWNrU3RhciR7dmFsdWV9YH1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7Y29sb3I6ICcjRkREMzM0J319XHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZT17J2xhcmdlJ31cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFjdGlvbnNHcm91cFByb2R1Y3QudXBkYXRlU2VsZWN0TnVtKHZhbHVlICsgMSl9XHJcbiAgICAgICAgICAgIC8+KX1cclxuICAgICAgPC9tYWluPlxyXG4gICAgICA8UHJpY2U+XHJcbiAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICA8aGVhZGVyPntkZWFsTW9uZXkoKHByb2R1Y3QucHJpY2VPdXQgPz8gMCkgKiBzdGF0ZUdyb3VwUHJvZHVjdC5zZWxlY3ROdW0gKiBzdGF0ZUdyb3VwUHJvZHVjdC5udW1EaXNjb3VudCAqIHN0YXRlR3JvdXBQcm9kdWN0Lmdyb3VwRGlzY291bnQpfTwvaGVhZGVyPlxyXG4gICAgICAgICAgPGZvb3Rlcj57bHMoJ+aKmOWQjuS7t+agvCcpfTwvZm9vdGVyPlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICAgICA8ZGl2Pj08L2Rpdj5cclxuICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgIDxoZWFkZXI+e2RlYWxNb25leSgocHJvZHVjdC5wcmljZU91dCA/PyAwKSAqIHN0YXRlR3JvdXBQcm9kdWN0LnNlbGVjdE51bSl9PC9oZWFkZXI+XHJcbiAgICAgICAgICA8Zm9vdGVyPntscygn5Z+65YeG5Lu35qC8Jyl9PC9mb290ZXI+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxkaXY+eDwvZGl2PlxyXG4gICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgPGhlYWRlcj57c3RhdGVHcm91cFByb2R1Y3QubnVtRGlzY291bnR9PC9oZWFkZXI+XHJcbiAgICAgICAgICA8Zm9vdGVyPntscygn5Lu95pWw5oqY5omjJyl9PC9mb290ZXI+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxkaXY+eDwvZGl2PlxyXG4gICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgPGhlYWRlcj57c3RhdGVHcm91cFByb2R1Y3QuZ3JvdXBEaXNjb3VudH08L2hlYWRlcj5cclxuICAgICAgICAgIDxmb290ZXI+e2xzKCfmiJDlm6LmipjkuIrmipgnKX08L2Zvb3Rlcj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDwvUHJpY2U+XHJcbiAgICA8L1NtYXJ0TWF0Y2g+XHJcbiAgICA8U3VibWl0PlxyXG4gICAgICA8YXNpZGU+e2xzKCfpgInmi6nkuoYnKX17c3RhdGVHcm91cFByb2R1Y3Quc2VsZWN0TnVtfXtscygn5Lu9Jyl9PC9hc2lkZT5cclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgZGlzYWJsZWQ9e3N0YXRlR3JvdXBQcm9kdWN0LnNlbGVjdE51bSA9PT0gMH1cclxuICAgICAgICAgIHN0eWxlPXt7aGVpZ2h0OiAnMTAwJScsIHBhZGRpbmc6ICcwIDMycHgnLCBib3JkZXJSYWRpdXM6ICcwJywgZm9udFNpemU6ICcxOHB4J319XHJcbiAgICAgICAgICBjb2xvcj17J3NlY29uZGFyeSd9XHJcbiAgICAgICAgICB2YXJpYW50PXsnY29udGFpbmVkJ31cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgYWN0aW9uc0dyb3VwT3JkZXJQYWdlTW9kZWwub3BlbigpXHJcbiAgICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge2xzKCfljrvnu5PnrpcnKX1cclxuICAgICAgPC9CdXR0b24+XHJcbiAgICA8L1N1Ym1pdD5cclxuICAgIDxHcm91cE9yZGVyUGFnZS8+XHJcbiAgPC9kaXY+XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==