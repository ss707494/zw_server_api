webpackHotUpdate("static\\development\\pages\\group\\[appModule].js",{

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9ncmFwaHFsVHlwZXMvZG9jL2ZyYWdtZW50LnRzIiwid2VicGFjazovLy8uL3V0aWxzL2dyYXBocWxUeXBlcy9kb2MvaW5kZXgudHMiXSwibmFtZXMiOlsiZnJhZ21lbnQiLCJDYXRlZ29yeUZpZWxkcyIsImdxbCIsIlVzZXJGaWVsZHMiLCJVc2VySW5mb0ZpZWxkcyIsIk9yZGVySW5mb0ZpZWxkcyIsIlJPcmRlclByb2R1Y3RGaWVsZHMiLCJQcm9kdWN0RmllbGRzIiwiSW1nRmllbGRzIiwiVXNlckFkZHJlc3NGaWVsZHMiLCJVc2VyUGF5Q2FyZEZpZWxkcyIsIlNob3BDYXJ0RmllbGRzIiwiRGF0YUNvbmZpZ0ZpZWxkcyIsIkRpY3RGaWVsZHMiLCJHcm91cFF1ZXVlRmllbGRzIiwiR3JvdXBPcmRlckZpZWxkcyIsImdldFVzZXJMaXN0RG9jIiwiZ2V0RGF0YUNvbmZpZyIsImhvbWVDYXJvdXNlbEltZ3MiLCJjYXRlZ29yeUxpc3QiLCJkb2MiLCJyZWdpc3RlclVzZXIiLCJyZWZyZXNoVG9rZW4iLCJsb2dpbiIsIm9uZVVzZXIiLCJvcmRlckxpc3QiLCJvcmRlckRldGFpbCIsIkRpY3RUeXBlRW51bSIsIlNlbGZBZGRyZXNzIiwidXBkYXRlUGFzc3dvcmQiLCJwYXlDYXJkTGlzdE9uZVVzZXIiLCJ1c2VyUGF5Q2FyZCIsInNhdmVVc2VyUGF5Q2FyZCIsInNldFVzZXJQYXlDYXJkRGVmYXVsdCIsInBpY2t1cEFkZHJlc3MiLCJ1cGRhdGVVc2VySW5mbyIsInVzZXJBZGRyZXNzTGlzdE9uZVVzZXIiLCJ1c2VyQWRkcmVzcyIsInNhdmVVc2VyQWRkcmVzcyIsInNldFVzZXJBZGRyZXNzRGVmYXVsdCIsInByb2R1Y3RzSW5DYXRlZ29yeSIsImNhdGVnb3J5TGV2ZWwiLCJvbmVDYXRlZ29yeSIsInByb2R1Y3RMaXN0IiwidXBkYXRlTnVtU2hvcENhcnQiLCJ1c2VyU2hvcENhcnRMaXN0IiwidXBkYXRlU2hvcENhcnQiLCJvcmRlckNvbmZpcm1JbmZvIiwiRnJlaWdodCIsInNhdmVPcmRlciIsImRpY3RMaXN0IiwibGltaXRUaW1lRGF0YSIsIlByb21vdGlvbkZsYXNoU2FsZSIsInByb2R1Y3RMaXN0QnlJZHMiLCJncm91cFF1ZXVlTGlzdCIsInVwZGF0ZU9yZGVyIiwic2F2ZUdyb3VwT3JkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsUUFBUSxHQUFHO0FBQ3RCQyxnQkFBYyxFQUFFQyx3REFBRixtQkFEUTtBQWtCdEJDLFlBQVUsRUFBRUQsd0RBQUYsb0JBbEJZO0FBNkJ0QkUsZ0JBQWMsRUFBRUYsd0RBQUYsb0JBN0JRO0FBMkN0QkcsaUJBQWUsRUFBRUgsd0RBQUYsb0JBM0NPO0FBdUV0QkkscUJBQW1CLEVBQUVKLHdEQUFGLG9CQXZFRztBQW9GdEJLLGVBQWEsRUFBRUwsd0RBQUYsb0JBcEZTO0FBc0h0Qk0sV0FBUyxFQUFFTix3REFBRixvQkF0SGE7QUFrSXRCTyxtQkFBaUIsRUFBRVAsd0RBQUYsb0JBbElLO0FBcUp0QlEsbUJBQWlCLEVBQUVSLHdEQUFGLG9CQXJKSztBQXdLdEJTLGdCQUFjLEVBQUVULHdEQUFGLHFCQXhLUTtBQXFMdEJVLGtCQUFnQixFQUFFVix3REFBRixxQkFyTE07QUFpTXRCVyxZQUFVLEVBQUVYLHdEQUFGLHFCQWpNWTtBQStNdEJZLGtCQUFnQixFQUFFWix3REFBRixxQkEvTU07QUEwTnRCYSxrQkFBZ0IsRUFBRWIsd0RBQUY7QUExTk0sQ0FBakI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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RUFrQ1ZILGtEQUFRLENBQUNZLGdCQWxDQyxFQW1DVlosa0RBQVEsQ0FBQ2EsVUFuQ0MsQ0E5VEM7QUFtV2pCb0MsV0FBUyxFQUFFL0Msd0RBQUYsc0JBTUhGLGtEQUFRLENBQUNLLGVBTk4sQ0FuV1E7QUEyV2pCNkMsVUFBUSxFQUFFaEQsd0RBQUYsc0JBTUZGLGtEQUFRLENBQUNhLFVBTlAsQ0EzV1M7QUFtWGpCc0MsZUFBYSxFQUFFakQsd0RBQUYsc0JBR015Qiw0REFBWSxDQUFDeUIsa0JBSG5CLEVBUVRwRCxrREFBUSxDQUFDWSxnQkFSQSxDQW5YSTtBQTZYakJ5QyxrQkFBZ0IsRUFBRW5ELHdEQUFGLHNCQVlaRixrREFBUSxDQUFDTyxhQVpHLEVBYVpQLGtEQUFRLENBQUNRLFNBYkcsQ0E3WEM7QUE0WWpCOEMsZ0JBQWMsRUFBRXBELHdEQUFGLHNCQVlWRixrREFBUSxDQUFDYyxnQkFaQyxFQWFWZCxrREFBUSxDQUFDTyxhQWJDLEVBY1ZQLGtEQUFRLENBQUNlLGdCQWRDLENBNVlHO0FBNFpqQndDLGFBQVcsRUFBRXJELHdEQUFGLHNCQU1QRixrREFBUSxDQUFDSyxlQU5GLENBNVpNO0FBb2FqQm1ELGdCQUFjLEVBQUV0RCx3REFBRixzQkFNVkYsa0RBQVEsQ0FBQ0ssZUFOQztBQXBhRyxDQUFaIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxncm91cFxcW2FwcE1vZHVsZV0uanMuZDhkZGYwZjBmNTBhMjkzNjEwOTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Z3FsfSBmcm9tICdhcG9sbG8tYm9vc3QnXHJcblxyXG5leHBvcnQgY29uc3QgZnJhZ21lbnQgPSB7XHJcbiAgQ2F0ZWdvcnlGaWVsZHM6IGdxbGBcclxuICAgICAgZnJhZ21lbnQgQ2F0ZWdvcnkgb24gQ2F0ZWdvcnkge1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIG5hbWVcclxuICAgICAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgICAgIGlzRGVsZXRlXHJcbiAgICAgICAgICBpc0VuYWJsZVxyXG4gICAgICAgICAgcmVtYXJrXHJcbiAgICAgICAgICBzb3J0XHJcbiAgICAgICAgICBwYXJlbnRJZFxyXG4gICAgICAgICAgZnVsbFBhcmVudElkXHJcbiAgICAgICAgICBudW1iZXJcclxuICAgICAgICAgIHVzZXJJZFxyXG4gICAgICAgICAgaW1nVXJsXHJcbiAgICAgIH1cclxuICBgLFxyXG4gIFVzZXJGaWVsZHM6IGdxbGBcclxuICAgICAgZnJhZ21lbnQgVXNlckZpZWxkcyBvbiBVc2VyIHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICBjcmVhdGVUaW1lXHJcbiAgICAgICAgICB1cGRhdGVUaW1lXHJcbiAgICAgICAgICBpc0RlbGV0ZVxyXG4gICAgICAgICAgcGFzc3dvcmRcclxuICAgICAgICAgIHR5cGVcclxuICAgICAgfVxyXG4gIGAsXHJcbiAgVXNlckluZm9GaWVsZHM6IGdxbGBcclxuICAgICAgZnJhZ21lbnQgVXNlckluZm9GaWVsZHMgb24gVXNlckluZm8ge1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIG5hbWVcclxuICAgICAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgICAgIGlzRGVsZXRlXHJcbiAgICAgICAgICB1c2VySWRcclxuICAgICAgICAgIHBob25lXHJcbiAgICAgICAgICBlbWFpbFxyXG4gICAgICAgICAgdXNlckxldmVsXHJcbiAgICAgICAgICBwaWNrdXBBZGRyZXNzSWRcclxuICAgICAgfVxyXG4gIGAsXHJcbiAgT3JkZXJJbmZvRmllbGRzOiBncWxgXHJcbiAgICAgIGZyYWdtZW50IE9yZGVySW5mb0ZpZWxkcyBvbiBPcmRlckluZm8ge1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIG5hbWVcclxuICAgICAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgICAgIGlzRGVsZXRlXHJcbiAgICAgICAgICBudW1iZXJcclxuICAgICAgICAgIHN0YXRlXHJcbiAgICAgICAgICBhY3R1YWxseVBhaWRcclxuICAgICAgICAgIGFkZHJlc3NJZFxyXG4gICAgICAgICAgcGF5bWVudE1ldGhvZENhcmRJZFxyXG4gICAgICAgICAgc3VidG90YWxcclxuICAgICAgICAgIGNvdXBvbkRpc2NvdW50XHJcbiAgICAgICAgICB2aXBEaXNjb3VudFxyXG4gICAgICAgICAgdHJhbnNwb3J0YXRpb25Db3N0c1xyXG4gICAgICAgICAgc2FsZVRheFxyXG4gICAgICAgICAgb3JkZXJJZFxyXG4gICAgICAgICAgZGlzY291bnRQcm9kdWN0VG90YWxcclxuICAgICAgICAgIGZpbmlzaFRpbWVcclxuICAgICAgICAgIHBpY2tVcFRpbWVcclxuICAgICAgICAgIHBpY2tVcFR5cGVcclxuICAgICAgICAgIGdlbmVyYXRlQ29pblxyXG4gICAgICAgICAgZGVkdWN0Q29pblxyXG4gICAgICAgICAgc2VsZkFkZHJlc3NJZFxyXG4gICAgICAgICAgY3VycmVudFVzZXJMZXZlbFxyXG4gICAgICB9XHJcbiAgYCxcclxuICBST3JkZXJQcm9kdWN0RmllbGRzOiBncWxgXHJcbiAgICAgIGZyYWdtZW50IFJPcmRlclByb2R1Y3RGaWVsZHMgb24gUk9yZGVyUHJvZHVjdCB7XHJcbiAgICAgICAgICBjb3VudFxyXG4gICAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgICAgZGVhbFByaWNlXHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgaXNEZWxldGVcclxuICAgICAgICAgIG5hbWVcclxuICAgICAgICAgIG9yZGVySWRcclxuICAgICAgICAgIHByb2R1Y3RJZFxyXG4gICAgICAgICAgdXBkYXRlVGltZVxyXG4gICAgICB9XHJcbiAgYCxcclxuICBQcm9kdWN0RmllbGRzOiBncWxgXHJcbiAgICAgIGZyYWdtZW50IFByb2R1Y3RGaWVsZHMgb24gUHJvZHVjdCB7XHJcbiAgICAgICAgICBicmFuZFxyXG4gICAgICAgICAgY2F0ZWdvcnlJZFxyXG4gICAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgICAgZ3JvdXBBbW91bnRcclxuICAgICAgICAgIGdyb3VwQW1vdW50VW5pdFxyXG4gICAgICAgICAgZ3JvdXBQcmVjaXNpb25cclxuICAgICAgICAgIGdyb3VwUmVtYXJrXHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgaXNEZWxldGVcclxuICAgICAgICAgIGlzRW5hYmxlXHJcbiAgICAgICAgICBpc0dyb3VwXHJcbiAgICAgICAgICBpc0hvdFxyXG4gICAgICAgICAgaXNOZXdcclxuICAgICAgICAgIG5hbWVcclxuICAgICAgICAgIG51bWJlclxyXG4gICAgICAgICAgcGFja2luZ1VuaXRcclxuICAgICAgICAgIHByaWNlSW5cclxuICAgICAgICAgIHByaWNlTWFya2V0XHJcbiAgICAgICAgICBwcmljZU91dFxyXG4gICAgICAgICAgcmVtYXJrXHJcbiAgICAgICAgICBzaGVsdmVzVHlwZXNcclxuICAgICAgICAgIHNvcnRcclxuICAgICAgICAgIHN0b2NrXHJcbiAgICAgICAgICB1bml0XHJcbiAgICAgICAgICB1cGRhdGVUaW1lXHJcbiAgICAgICAgICB3ZWlnaHRcclxuICAgICAgICAgIHVuaXRTdHJpbmdcclxuICAgICAgICAgIGdyb3VwUHJlY2lzaW9uU3RyaW5nXHJcbiAgICAgICAgICBncm91cEFtb3VudFVuaXRTdHJpbmdcclxuICAgICAgICAgIHBhY2tpbmdVbml0U3RyaW5nXHJcbiAgICAgIH1cclxuICBgLFxyXG4gIEltZ0ZpZWxkczogZ3FsYFxyXG4gICAgZnJhZ21lbnQgSW1nRmllbGRzIG9uIFByb2R1Y3RJbWcge1xyXG4gICAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgICBpZFxyXG4gICAgICAgIGlzRGVsZXRlXHJcbiAgICAgICAgbmFtZVxyXG4gICAgICAgIG51bWJlclxyXG4gICAgICAgIHByb2R1Y3RJZFxyXG4gICAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgICB1cmxcclxuICAgIH0gXHJcbiAgYCxcclxuICBVc2VyQWRkcmVzc0ZpZWxkczogZ3FsYFxyXG4gICAgICBmcmFnbWVudCBVc2VyQWRkcmVzc0ZpZWxkcyBvbiBVc2VyQWRkcmVzcyB7XHJcbiAgICAgICAgICBhZGRyZXNzXHJcbiAgICAgICAgICBjaXR5XHJcbiAgICAgICAgICBjb21iaW5lQWRkcmVzc1xyXG4gICAgICAgICAgY29udGFjdEluZm9ybWF0aW9uXHJcbiAgICAgICAgICBjb250YWN0VXNlck5hbWVcclxuICAgICAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgICAgIGRpc3RyaWN0XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgaXNEZWZhdWx0XHJcbiAgICAgICAgICBpc0RlbGV0ZVxyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgcHJvdmluY2VcclxuICAgICAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgICAgIHVzZXJJZFxyXG4gICAgICAgICAgemlwXHJcbiAgICAgIH1cclxuICBgLFxyXG4gIFVzZXJQYXlDYXJkRmllbGRzOiBncWxgXHJcbiAgICAgIGZyYWdtZW50IFVzZXJQYXlDYXJkRmllbGRzIG9uIFVzZXJQYXlDYXJkIHtcclxuICAgICAgICAgIGFkZHJlc3NEZXRhaWxcclxuICAgICAgICAgIGNpdHlcclxuICAgICAgICAgIGNvZGVcclxuICAgICAgICAgIGNvbnRhY3RcclxuICAgICAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgICAgIGV4cGlyYXRpb25UaW1lXHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgaXNEZWZhdWx0XHJcbiAgICAgICAgICBpc0RlbGV0ZVxyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgbnVtYmVyXHJcbiAgICAgICAgICB1cGRhdGVUaW1lXHJcbiAgICAgICAgICB1c2VySWRcclxuICAgICAgICAgIHVzZXJOYW1lXHJcbiAgICAgICAgICB6aXBDb2RlXHJcbiAgICAgIH1cclxuICBgLFxyXG4gIFNob3BDYXJ0RmllbGRzOiBncWxgXHJcbiAgICAgIGZyYWdtZW50IFNob3BDYXJ0RmllbGRzIG9uIFNob3BDYXJ0IHtcclxuICAgICAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBpc0RlbGV0ZVxyXG4gICAgICAgICAgaXNOZXh0XHJcbiAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICBudW1iZXJcclxuICAgICAgICAgIHByb2R1Y3RJZFxyXG4gICAgICAgICAgdXBkYXRlVGltZVxyXG4gICAgICAgICAgdXNlcklkXHJcbiAgICAgIH1cclxuICBgLFxyXG4gIERhdGFDb25maWdGaWVsZHM6IGdxbGBcclxuICAgIGZyYWdtZW50IERhdGFDb25maWdGaWVsZHMgb24gRGF0YUNvbmZpZyB7XHJcbiAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgIGlkXHJcbiAgICAgICAgaXNEZWxldGVcclxuICAgICAgICBuYW1lXHJcbiAgICAgICAgcmVtYXJrXHJcbiAgICAgICAgdHlwZVxyXG4gICAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgICB2YWx1ZVxyXG4gICAgfVxyXG4gIGAsXHJcbiAgRGljdEZpZWxkczogZ3FsYFxyXG4gICAgZnJhZ21lbnQgRGljdEZpZWxkcyBvbiBEaWN0IHtcclxuICAgICAgICBjb2RlXHJcbiAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgIGRpY3RUeXBlQ29kZVxyXG4gICAgICAgIGlkXHJcbiAgICAgICAgaXNEZWxldGVcclxuICAgICAgICBpc0Rpc2FibGVcclxuICAgICAgICBuYW1lXHJcbiAgICAgICAgcmVtYXJrXHJcbiAgICAgICAgc29ydFxyXG4gICAgICAgIHVwZGF0ZVRpbWVcclxuICAgIH1cclxuICBgLFxyXG4gIEdyb3VwUXVldWVGaWVsZHM6IGdxbGBcclxuICAgICAgZnJhZ21lbnQgR3JvdXBRdWV1ZUZpZWxkcyBvbiBHcm91cFF1ZXVlIHtcclxuICAgICAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgICAgIGZpbGxBbW91bnRcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBpc0RlbGV0ZVxyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgcHJvZHVjdElkXHJcbiAgICAgICAgICB1cGRhdGVUaW1lXHJcbiAgICAgIH1cclxuICBgLFxyXG4gIEdyb3VwT3JkZXJGaWVsZHM6IGdxbGBcclxuICAgICAgZnJhZ21lbnQgR3JvdXBPcmRlckZpZWxkcyBvbiBHcm91cE9yZGVyIHtcclxuICAgICAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgICAgIGdyb3VwUXVldWVcclxuICAgICAgICAgIGdyb3VwUXVldWVJZFxyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIGlzRGVsZXRlXHJcbiAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICBvcmRlckdyb3VwQW1vdW50XHJcbiAgICAgICAgICBvcmRlcklkXHJcbiAgICAgICAgICBvcmRlckluZm9cclxuICAgICAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgICAgIHVzZXJcclxuICAgICAgICAgIHVzZXJJZFxyXG4gICAgICB9XHJcbiAgYCxcclxufVxyXG4iLCJpbXBvcnQge2dxbH0gZnJvbSAnYXBvbGxvLWJvb3N0J1xyXG5pbXBvcnQge2ZyYWdtZW50fSBmcm9tICcuL2ZyYWdtZW50J1xyXG5pbXBvcnQge0RpY3RUeXBlRW51bX0gZnJvbSAnLi4vLi4vc3NfY29tbW9uL2VudW0nXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VXNlckxpc3REb2MgPSBncWxgXHJcbiAgICBxdWVyeSByZWZhY3RvcmVkNjQzKCRkYXRhOiBVc2VyTGlzdElucHV0ISkge1xyXG4gICAgICAgIHVzZXJMaXN0KHVzZXJMaXN0SW5wdXQ6ICRkYXRhKSB7XHJcbiAgICAgICAgICAgIGxpc3Qge1xyXG4gICAgICAgICAgICAgICAgb3JkZXJDb2luTmV4dE1vbnRoXHJcbiAgICAgICAgICAgICAgICBvcmRlckNvaW5DdXJyZW50TW9udGhcclxuICAgICAgICAgICAgICAgIG9yZGVyQW1vdW50Q3VycmVudFllYXJcclxuICAgICAgICAgICAgICAgIC4uLnVzZXJJbmZvXHJcbiAgICAgICAgICAgICAgICAuLi5Vc2VyRmllbGRzXHJcbiAgICAgICAgICAgICAgICAuLi5vcmRlckluZm9cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0b3RhbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZyYWdtZW50IG9yZGVySW5mbyBvbiBVc2Vye1xyXG4gICAgICAgIG9yZGVySW5mb3tcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICBjcmVhdGVUaW1lXHJcbiAgICAgICAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgICAgICAgaXNEZWxldGVcclxuICAgICAgICAgICAgbnVtYmVyXHJcbiAgICAgICAgICAgIHN0YXRlXHJcbiAgICAgICAgICAgIGFjdHVhbGx5UGFpZFxyXG4gICAgICAgICAgICBhZGRyZXNzSWRcclxuICAgICAgICAgICAgcGF5bWVudE1ldGhvZENhcmRJZFxyXG4gICAgICAgICAgICBzdWJ0b3RhbFxyXG4gICAgICAgICAgICBjb3Vwb25EaXNjb3VudFxyXG4gICAgICAgICAgICB2aXBEaXNjb3VudFxyXG4gICAgICAgICAgICB0cmFuc3BvcnRhdGlvbkNvc3RzXHJcbiAgICAgICAgICAgIHNhbGVUYXhcclxuICAgICAgICAgICAgb3JkZXJJZFxyXG4gICAgICAgICAgICBkaXNjb3VudFByb2R1Y3RUb3RhbFxyXG4gICAgICAgICAgICBmaW5pc2hUaW1lXHJcbiAgICAgICAgICAgIHBpY2tVcFRpbWVcclxuICAgICAgICAgICAgcGlja1VwVHlwZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZyYWdtZW50IFVzZXJGaWVsZHMgb24gVXNlciB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBuYW1lXHJcbiAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgICBpc0RlbGV0ZVxyXG4gICAgICAgIHBhc3N3b3JkXHJcbiAgICAgICAgdHlwZVxyXG4gICAgfVxyXG4gICAgZnJhZ21lbnQgdXNlckluZm8gb24gVXNlcntcclxuICAgICAgICB1c2VySW5mb3tcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICBjcmVhdGVUaW1lXHJcbiAgICAgICAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgICAgICAgaXNEZWxldGVcclxuICAgICAgICAgICAgdXNlcklkXHJcbiAgICAgICAgICAgIHBob25lXHJcbiAgICAgICAgICAgIGVtYWlsXHJcbiAgICAgICAgICAgIHVzZXJMZXZlbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IGdldERhdGFDb25maWcgPSBncWxgXHJcbiAgICBxdWVyeSAoJGRhdGE6IERhdGFDb25maWdJdGVtSW5wdXQpIHtcclxuICAgICAgICBnZXREYXRhQ29uZmlnKGRhdGFDb25maWdJbnB1dDogJGRhdGEpIHtcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICBjcmVhdGVUaW1lXHJcbiAgICAgICAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgICAgICAgaXNEZWxldGVcclxuICAgICAgICAgICAgdHlwZVxyXG4gICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICByZW1hcmtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBob21lQ2Fyb3VzZWxJbWdzID0gZ3FsYFxyXG4gICAgcXVlcnkgcXVlcnlfcXVlcnlfdGVzdExvbmcxMzcoJGRhdGE6IERhdGFDb25maWdJdGVtSW5wdXQpIHtcclxuICAgICAgICBob21lQ2Fyb3VzZWxJbWdzKGRhdGFDb25maWdJbnB1dDogJGRhdGEpIHtcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICBjcmVhdGVUaW1lXHJcbiAgICAgICAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgICAgICAgaXNEZWxldGVcclxuICAgICAgICAgICAgdHlwZVxyXG4gICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICByZW1hcmtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBjYXRlZ29yeUxpc3QgPSBncWxgXHJcbiAgICBxdWVyeSBxdWVyeV9xdWVyeV90ZXN0TG9uZzU2NSgkZGF0YTogQ2F0ZWdvcnlMaXN0SW5wdXQpIHtcclxuICAgICAgICBjYXRlZ29yeUxpc3QoZGF0YTogJGRhdGEpIHtcclxuICAgICAgICAgICAgdG90YWxcclxuICAgICAgICAgICAgbGlzdCB7XHJcbiAgICAgICAgICAgICAgICAuLi5DYXRlZ29yeVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5DYXRlZ29yeUZpZWxkc31cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IGRvYyA9IHtcclxuICBnZXRVc2VyTGlzdERvYyxcclxuICBjYXRlZ29yeUxpc3QsXHJcbiAgZ2V0RGF0YUNvbmZpZyxcclxuICBob21lQ2Fyb3VzZWxJbWdzLFxyXG4gIHJlZ2lzdGVyVXNlcjogZ3FsYFxyXG4gICAgICBtdXRhdGlvbiBtdXRhdGlvbl9yZWdpc3RlclVzZTk5OCgkZGF0YTogVXNlckl0ZW1JbnB1dCkge1xyXG4gICAgICAgICAgcmVnaXN0ZXJVc2VyKGRhdGE6ICRkYXRhKSB7XHJcbiAgICAgICAgICAgICAgdG9rZW5cclxuICAgICAgICAgICAgICByZWZyZXNodG9rZW5cclxuICAgICAgICAgICAgICB1c2VyIHtcclxuICAgICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICBjcmVhdGVUaW1lXHJcbiAgICAgICAgICAgICAgICAgIHVwZGF0ZVRpbWVcclxuICAgICAgICAgICAgICAgICAgaXNEZWxldGVcclxuICAgICAgICAgICAgICAgICAgcGFzc3dvcmRcclxuICAgICAgICAgICAgICAgICAgdHlwZVxyXG4gICAgICAgICAgICAgICAgICB1c2VySW5mbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICBgLFxyXG4gIHJlZnJlc2hUb2tlbjogZ3FsYFxyXG4gICAgICBxdWVyeSByZWZyZXNoVG9rZW4oJGRhdGE6IFN0cmluZyEpIHtcclxuICAgICAgICAgIHJlZnJlc2hUb2tlbihyZWZyZXNodG9rZW46ICRkYXRhKSB7XHJcbiAgICAgICAgICAgICAgcmVmcmVzaHRva2VuXHJcbiAgICAgICAgICAgICAgdG9rZW5cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gIGAsXHJcbiAgbG9naW46IGdxbGBcclxuICAgICAgcXVlcnkgbG9naW4oJGRhdGE6IFVzZXJJdGVtSW5wdXQpIHtcclxuICAgICAgICAgIGxvZ2luKHVzZXI6ICRkYXRhKSB7XHJcbiAgICAgICAgICAgICAgdG9rZW5cclxuICAgICAgICAgICAgICByZWZyZXNodG9rZW5cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gIGAsXHJcbiAgb25lVXNlcjogZ3FsYFxyXG4gICAgICBxdWVyeSBvbmVVc2VyIHtcclxuICAgICAgICAgIG9uZVVzZXIge1xyXG4gICAgICAgICAgICAgIC4uLlVzZXJGaWVsZHNcclxuICAgICAgICAgICAgICB1c2VySW5mbyB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLlVzZXJJbmZvRmllbGRzXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICR7ZnJhZ21lbnQuVXNlckluZm9GaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuVXNlckZpZWxkc31cclxuICBgLFxyXG4gIG9yZGVyTGlzdDogZ3FsYFxyXG4gICAgICBxdWVyeSBvcmRlckxpc3QoJGRhdGE6IE9yZGVySW5wdXQpe1xyXG4gICAgICAgICAgb3JkZXJMaXN0IChvcmRlcklucHV0OiAkZGF0YSwgZnJvbVVzZXI6IHRydWUpIHtcclxuICAgICAgICAgICAgICBsaXN0IHtcclxuICAgICAgICAgICAgICAgICAgLi4uT3JkZXJJbmZvRmllbGRzXHJcbiAgICAgICAgICAgICAgICAgIHJPcmRlclByb2R1Y3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgLi4uUk9yZGVyUHJvZHVjdEZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uUHJvZHVjdEZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLkltZ0ZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAke2ZyYWdtZW50Lk9yZGVySW5mb0ZpZWxkc31cclxuICAgICAgJHtmcmFnbWVudC5ST3JkZXJQcm9kdWN0RmllbGRzfVxyXG4gICAgICAke2ZyYWdtZW50LlByb2R1Y3RGaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuSW1nRmllbGRzfVxyXG4gIGAsXHJcbiAgb3JkZXJEZXRhaWw6IGdxbGBcclxuICAgICAgcXVlcnkgKCRpZDogU3RyaW5nKSB7XHJcbiAgICAgICAgICBzZWxmQWRkcmVzczogZ2V0RGF0YUNvbmZpZyhkYXRhQ29uZmlnSW5wdXQ6IHtcclxuICAgICAgICAgICAgICB0eXBlOiBcIiR7RGljdFR5cGVFbnVtLlNlbGZBZGRyZXNzfVwiXHJcbiAgICAgICAgICB9KSB7XHJcbiAgICAgICAgICAgICAgLi4uRGF0YUNvbmZpZ0ZpZWxkc1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgb3JkZXJEZXRhaWwoaWQ6ICRpZCkge1xyXG4gICAgICAgICAgICAgIC4uLk9yZGVySW5mb0ZpZWxkc1xyXG4gICAgICAgICAgICAgIHJPcmRlclByb2R1Y3Qge1xyXG4gICAgICAgICAgICAgICAgICAuLi5ST3JkZXJQcm9kdWN0RmllbGRzXHJcbiAgICAgICAgICAgICAgICAgIHByb2R1Y3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgLi4uUHJvZHVjdEZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5JbWdGaWVsZHNcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB1c2VyIHtcclxuICAgICAgICAgICAgICAgICAgLi4uVXNlckZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICB1c2VySW5mbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAuLi5Vc2VySW5mb0ZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHVzZXJBZGRyZXNzIHtcclxuICAgICAgICAgICAgICAgICAgLi4uVXNlckFkZHJlc3NGaWVsZHNcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgdXNlclBheUNhcmQge1xyXG4gICAgICAgICAgICAgICAgICAuLi5Vc2VyUGF5Q2FyZEZpZWxkc1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAke2ZyYWdtZW50LkRhdGFDb25maWdGaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuT3JkZXJJbmZvRmllbGRzfVxyXG4gICAgICAke2ZyYWdtZW50LlJPcmRlclByb2R1Y3RGaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuUHJvZHVjdEZpZWxkc31cclxuICAgICAgJHtmcmFnbWVudC5JbWdGaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuVXNlckZpZWxkc31cclxuICAgICAgJHtmcmFnbWVudC5Vc2VySW5mb0ZpZWxkc31cclxuICAgICAgJHtmcmFnbWVudC5Vc2VyUGF5Q2FyZEZpZWxkc31cclxuICAgICAgJHtmcmFnbWVudC5Vc2VyQWRkcmVzc0ZpZWxkc31cclxuICBgLFxyXG4gIHVwZGF0ZVBhc3N3b3JkOiBncWxgXHJcbiAgICAgIG11dGF0aW9uICgkZGF0YTogVXBkYXRlUGFzc3dvcmRJbnB1dCkge1xyXG4gICAgICAgICAgdXBkYXRlUGFzc3dvcmQgKGRhdGE6ICRkYXRhKSB7XHJcbiAgICAgICAgICAgICAgdXNlciB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLlVzZXJGaWVsZHNcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYXV0aEJvZHkge1xyXG4gICAgICAgICAgICAgICAgICB0b2tlblxyXG4gICAgICAgICAgICAgICAgICByZWZyZXNodG9rZW5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJHtmcmFnbWVudC5Vc2VyRmllbGRzfVxyXG4gIGAsXHJcbiAgcGF5Q2FyZExpc3RPbmVVc2VyOiBncWxgXHJcbiAgICAgIHF1ZXJ5IHtcclxuICAgICAgICAgIHBheUNhcmRMaXN0T25lVXNlciB7XHJcbiAgICAgICAgICAgICAgLi4uVXNlclBheUNhcmRGaWVsZHNcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAke2ZyYWdtZW50LlVzZXJQYXlDYXJkRmllbGRzfVxyXG4gIGAsXHJcbiAgdXNlclBheUNhcmQ6IGdxbGBcclxuICAgICAgcXVlcnkgKCRkYXRhOiBVc2VyUGF5Q2FyZEl0ZW1JbnB1dCkge1xyXG4gICAgICAgICAgdXNlclBheUNhcmQgKHVzZXJQYXlDYXJkOiAkZGF0YSkge1xyXG4gICAgICAgICAgICAgIC4uLlVzZXJQYXlDYXJkRmllbGRzXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJHtmcmFnbWVudC5Vc2VyUGF5Q2FyZEZpZWxkc31cclxuICBgLFxyXG4gIHNhdmVVc2VyUGF5Q2FyZDogZ3FsYFxyXG4gICAgICBtdXRhdGlvbiAoJGRhdGE6IFVzZXJQYXlDYXJkSXRlbUlucHV0KXtcclxuICAgICAgICAgIHNhdmVVc2VyUGF5Q2FyZCAodXNlclBheUNhcmQ6ICRkYXRhKSB7XHJcbiAgICAgICAgICAgICAgLi4uVXNlclBheUNhcmRGaWVsZHNcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAke2ZyYWdtZW50LlVzZXJQYXlDYXJkRmllbGRzfVxyXG4gIGAsXHJcbiAgc2V0VXNlclBheUNhcmREZWZhdWx0OiBncWxgXHJcbiAgICAgIG11dGF0aW9uICgkZGF0YTogVXNlclBheUNhcmRJdGVtSW5wdXQpIHtcclxuICAgICAgICAgIHNldFVzZXJQYXlDYXJkRGVmYXVsdCAodXNlclBheUNhcmQ6ICRkYXRhKSB7XHJcbiAgICAgICAgICAgICAgLi4uVXNlclBheUNhcmRGaWVsZHNcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAke2ZyYWdtZW50LlVzZXJQYXlDYXJkRmllbGRzfVxyXG4gIGAsXHJcbiAgcGlja3VwQWRkcmVzczogZ3FsYFxyXG4gICAgICBxdWVyeSB7XHJcbiAgICAgICAgICBnZXREYXRhQ29uZmlnKGRhdGFDb25maWdJbnB1dDoge1xyXG4gICAgICAgICAgICAgIHR5cGU6IFwiJHtEaWN0VHlwZUVudW0uU2VsZkFkZHJlc3N9XCJcclxuICAgICAgICAgIH0pIHtcclxuICAgICAgICAgICAgICAuLi5EYXRhQ29uZmlnRmllbGRzXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBvbmVVc2VyIHtcclxuICAgICAgICAgICAgICAuLi5Vc2VyRmllbGRzXHJcbiAgICAgICAgICAgICAgdXNlckluZm8ge1xyXG4gICAgICAgICAgICAgICAgICAuLi5Vc2VySW5mb0ZpZWxkc1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAke2ZyYWdtZW50LlVzZXJJbmZvRmllbGRzfVxyXG4gICAgICAke2ZyYWdtZW50LkRhdGFDb25maWdGaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuVXNlckZpZWxkc31cclxuICBgLFxyXG4gIHVwZGF0ZVVzZXJJbmZvOiBncWxgXHJcbiAgICAgIG11dGF0aW9uICgkdXNlckluZm86IFVzZXJJbmZvSXRlbUlucHV0KSB7XHJcbiAgICAgICAgICB1cGRhdGVVc2VySW5mbyAodXNlckluZm86ICR1c2VySW5mbykge1xyXG4gICAgICAgICAgICAgIC4uLlVzZXJJbmZvRmllbGRzXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJHtmcmFnbWVudC5Vc2VySW5mb0ZpZWxkc31cclxuICBgLFxyXG4gIHVzZXJBZGRyZXNzTGlzdE9uZVVzZXI6IGdxbGBcclxuICAgICAgcXVlcnkge1xyXG4gICAgICAgICAgdXNlckFkZHJlc3NMaXN0T25lVXNlciB7XHJcbiAgICAgICAgICAgICAgLi4uVXNlckFkZHJlc3NGaWVsZHNcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAke2ZyYWdtZW50LlVzZXJBZGRyZXNzRmllbGRzfVxyXG4gIGAsXHJcbiAgdXNlckFkZHJlc3M6IGdxbGBcclxuICAgICAgcXVlcnkgKCRkYXRhOiBVc2VyQWRkcmVzc0l0ZW1JbnB1dCkge1xyXG4gICAgICAgICAgdXNlckFkZHJlc3MgKHVzZXJBZGRyZXNzOiAkZGF0YSkge1xyXG4gICAgICAgICAgICAgIC4uLlVzZXJBZGRyZXNzRmllbGRzXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJHtmcmFnbWVudC5Vc2VyQWRkcmVzc0ZpZWxkc31cclxuICBgLFxyXG4gIHNhdmVVc2VyQWRkcmVzczogZ3FsYFxyXG4gICAgICBtdXRhdGlvbiAoJGRhdGE6IFVzZXJBZGRyZXNzSXRlbUlucHV0KXtcclxuICAgICAgICAgIHNhdmVVc2VyQWRkcmVzcyAodXNlckFkZHJlc3M6ICRkYXRhKSB7XHJcbiAgICAgICAgICAgICAgLi4uVXNlckFkZHJlc3NGaWVsZHNcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAke2ZyYWdtZW50LlVzZXJBZGRyZXNzRmllbGRzfVxyXG4gIGAsXHJcbiAgc2V0VXNlckFkZHJlc3NEZWZhdWx0OiBncWxgXHJcbiAgICAgIG11dGF0aW9uICgkZGF0YTogVXNlckFkZHJlc3NJdGVtSW5wdXQpIHtcclxuICAgICAgICAgIHNldFVzZXJBZGRyZXNzRGVmYXVsdCAodXNlckFkZHJlc3M6ICRkYXRhKSB7XHJcbiAgICAgICAgICAgICAgLi4uVXNlckFkZHJlc3NGaWVsZHNcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAke2ZyYWdtZW50LlVzZXJBZGRyZXNzRmllbGRzfVxyXG4gIGAsXHJcbiAgcHJvZHVjdHNJbkNhdGVnb3J5OiBncWxgXHJcbiAgICAgIHF1ZXJ5ICgkZGF0YTogQ2F0ZWdvcnlJdGVtSW5wdXQsICRwcm9kdWN0SXRlbUlucHV0OiBQcm9kdWN0SXRlbUlucHV0KSB7XHJcbiAgICAgICAgICBwcm9kdWN0c0luQ2F0ZWdvcnkoY2F0ZWdvcnlJdGVtSW5wdXQ6ICRkYXRhLCBwcm9kdWN0SXRlbUlucHV0OiAkcHJvZHVjdEl0ZW1JbnB1dCkge1xyXG4gICAgICAgICAgICAgIC4uLlByb2R1Y3RGaWVsZHNcclxuICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAuLi5JbWdGaWVsZHNcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjYXRlZ29yeUxpc3QoZGF0YToge1xyXG4gICAgICAgICAgICAgIGNhdGVnb3J5OiB7XHJcbiAgICAgICAgICAgICAgICAgIHBhcmVudENhdGVnb3J5OiAkZGF0YVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pIHtcclxuICAgICAgICAgICAgICB0b3RhbFxyXG4gICAgICAgICAgICAgIGxpc3Qge1xyXG4gICAgICAgICAgICAgICAgICAuLi5DYXRlZ29yeVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAke2ZyYWdtZW50LlByb2R1Y3RGaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuSW1nRmllbGRzfVxyXG4gICAgICAke2ZyYWdtZW50LkNhdGVnb3J5RmllbGRzfVxyXG4gIGAsXHJcbiAgY2F0ZWdvcnlMZXZlbDogZ3FsYFxyXG4gICAgICBxdWVyeSAoJGRhdGE6IENhdGVnb3J5SXRlbUlucHV0KSB7XHJcbiAgICAgICAgICBjYXRlZ29yeUxldmVsKGNhdGVnb3J5SXRlbUlucHV0OiAkZGF0YSlcclxuICAgICAgfVxyXG4gIGAsXHJcbiAgb25lQ2F0ZWdvcnk6IGdxbGBcclxuICAgICAgcXVlcnkgKCRkYXRhOiBDYXRlZ29yeUl0ZW1JbnB1dCkge1xyXG4gICAgICAgICAgb25lQ2F0ZWdvcnkoZGF0YTogJGRhdGEpIHtcclxuICAgICAgICAgICAgICAuLi5DYXRlZ29yeVxyXG4gICAgICAgICAgICAgIHBhcmVudENhdGVnb3J5IHtcclxuICAgICAgICAgICAgICAgICAgLi4uQ2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgICAgcGFyZW50Q2F0ZWdvcnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgLi4uQ2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAke2ZyYWdtZW50LkNhdGVnb3J5RmllbGRzfVxyXG4gIGAsXHJcbiAgcHJvZHVjdExpc3Q6IGdxbGBcclxuICAgICAgcXVlcnkgKCRwcm9kdWN0SW5wdXQ6IFByb2R1Y3RJdGVtSW5wdXQsICRvcmRlckJ5SW5wdXQ6IE9yZGVyQnlJbnB1dCkge1xyXG4gICAgICAgICAgcHJvZHVjdExpc3QocHJvZHVjdElucHV0OiAkcHJvZHVjdElucHV0LCBvcmRlckJ5SW5wdXQ6ICRvcmRlckJ5SW5wdXQpIHtcclxuICAgICAgICAgICAgICB0b3RhbFxyXG4gICAgICAgICAgICAgIGxpc3Qge1xyXG4gICAgICAgICAgICAgICAgICAuLi5Qcm9kdWN0RmllbGRzXHJcbiAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAuLi5JbWdGaWVsZHNcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAke2ZyYWdtZW50LlByb2R1Y3RGaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuSW1nRmllbGRzfVxyXG4gIGAsXHJcbiAgdXBkYXRlTnVtU2hvcENhcnQ6IGdxbGBcclxuICAgICAgbXV0YXRpb24gKCRzaG9wQ2FydDogU2hvcENhcnRJdGVtSW5wdXQsICR1cGRhdGVOdW06IEZsb2F0KSB7XHJcbiAgICAgICAgICB1cGRhdGVOdW1TaG9wQ2FydCAoc2hvcENhcnQ6ICRzaG9wQ2FydCwgdXBkYXRlTnVtOiAkdXBkYXRlTnVtKSB7XHJcbiAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICBudW1iZXJcclxuICAgICAgICAgICAgICBwcm9kdWN0IHtcclxuICAgICAgICAgICAgICAgICAgLi4uUHJvZHVjdEZpZWxkc1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB1c2VyIHtcclxuICAgICAgICAgICAgICAgICAgLi4uVXNlckZpZWxkc1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAke2ZyYWdtZW50LlByb2R1Y3RGaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuVXNlckZpZWxkc31cclxuICBgLFxyXG4gIHVzZXJTaG9wQ2FydExpc3Q6IGdxbGBcclxuICAgICAgcXVlcnkge1xyXG4gICAgICAgICAgc2hvcENhcnRMaXN0IHtcclxuICAgICAgICAgICAgICAuLi5TaG9wQ2FydEZpZWxkc1xyXG4gICAgICAgICAgICAgIHByb2R1Y3Qge1xyXG4gICAgICAgICAgICAgICAgICAuLi5Qcm9kdWN0RmllbGRzXHJcbiAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAuLi5JbWdGaWVsZHNcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAke2ZyYWdtZW50LlNob3BDYXJ0RmllbGRzfVxyXG4gICAgICAke2ZyYWdtZW50LlByb2R1Y3RGaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuSW1nRmllbGRzfVxyXG4gIGAsXHJcbiAgdXBkYXRlU2hvcENhcnQ6IGdxbGBcclxuICAgICAgbXV0YXRpb24gKCRzaG9wQ2FydDogU2hvcENhcnRJdGVtSW5wdXQpe1xyXG4gICAgICAgICAgdXBkYXRlU2hvcENhcnQgKHNob3BDYXJ0OiAkc2hvcENhcnQpIHtcclxuICAgICAgICAgICAgICAuLi5TaG9wQ2FydEZpZWxkc1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICR7ZnJhZ21lbnQuU2hvcENhcnRGaWVsZHN9XHJcbiAgYCxcclxuICBvcmRlckNvbmZpcm1JbmZvOiBncWxgXHJcbiAgICAgIHF1ZXJ5IHtcclxuICAgICAgICAgIGdldERhdGFDb25maWcoZGF0YUNvbmZpZ0lucHV0OiB7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCIke0RpY3RUeXBlRW51bS5TZWxmQWRkcmVzc31cIlxyXG4gICAgICAgICAgfSkge1xyXG4gICAgICAgICAgICAgIC4uLkRhdGFDb25maWdGaWVsZHNcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIG9uZVVzZXIge1xyXG4gICAgICAgICAgICAgIC4uLlVzZXJGaWVsZHNcclxuICAgICAgICAgICAgICB1c2VySW5mbyB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLlVzZXJJbmZvRmllbGRzXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcGF5Q2FyZExpc3RPbmVVc2VyIHtcclxuICAgICAgICAgICAgICAuLi5Vc2VyUGF5Q2FyZEZpZWxkc1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdXNlckFkZHJlc3NMaXN0T25lVXNlciB7XHJcbiAgICAgICAgICAgICAgLi4uVXNlckFkZHJlc3NGaWVsZHNcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGZyZWlnaHRDb25maWc6IGdldERhdGFDb25maWcgKGRhdGFDb25maWdJbnB1dDoge1xyXG4gICAgICAgICAgICAgIHR5cGU6IFwiJHtEaWN0VHlwZUVudW0uRnJlaWdodH1cIlxyXG4gICAgICAgICAgfSkge1xyXG4gICAgICAgICAgICAgIC4uLkRhdGFDb25maWdGaWVsZHNcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHVzZXJMZXZlbExpc3Q6IGdldERpY3RMaXN0IChkaWN0SW5wdXQ6IHtcclxuICAgICAgICAgICAgICBkaWN0VHlwZUNvZGU6IFwiVXNlckxldmVsXCJcclxuICAgICAgICAgIH0pIHtcclxuICAgICAgICAgICAgICAuLi5EaWN0RmllbGRzXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJHtmcmFnbWVudC5Vc2VyQWRkcmVzc0ZpZWxkc31cclxuICAgICAgJHtmcmFnbWVudC5Vc2VyUGF5Q2FyZEZpZWxkc31cclxuICAgICAgJHtmcmFnbWVudC5Vc2VySW5mb0ZpZWxkc31cclxuICAgICAgJHtmcmFnbWVudC5Vc2VyRmllbGRzfVxyXG4gICAgICAke2ZyYWdtZW50LkRhdGFDb25maWdGaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuRGljdEZpZWxkc31cclxuICBgLFxyXG4gIHNhdmVPcmRlcjogZ3FsYFxyXG4gICAgICBtdXRhdGlvbiAoJG9yZGVySW5mb0l0ZW1JbnB1dDogT3JkZXJJbmZvSXRlbUlucHV0KSB7XHJcbiAgICAgICAgICBzYXZlT3JkZXIgKG9yZGVySW5mb0l0ZW1JbnB1dDogJG9yZGVySW5mb0l0ZW1JbnB1dCkge1xyXG4gICAgICAgICAgICAgIC4uLk9yZGVySW5mb0ZpZWxkc1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICR7ZnJhZ21lbnQuT3JkZXJJbmZvRmllbGRzfVxyXG4gIGAsXHJcbiAgZGljdExpc3Q6IGdxbGBcclxuICAgICAgcXVlcnkgKCRkYXRhOiBEaWN0SW5wdXQpIHtcclxuICAgICAgICAgIGdldERpY3RMaXN0IChkaWN0SW5wdXQ6ICRkYXRhKSB7XHJcbiAgICAgICAgICAgICAgLi4uRGljdEZpZWxkc1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICR7ZnJhZ21lbnQuRGljdEZpZWxkc31cclxuICBgLFxyXG4gIGxpbWl0VGltZURhdGE6IGdxbGBcclxuICAgIHF1ZXJ5IHtcclxuICAgICAgICBsaW1pdFRpbWVEYXRhOiBnZXREYXRhQ29uZmlnIChkYXRhQ29uZmlnSW5wdXQ6IHtcclxuICAgICAgICAgICAgdHlwZTogXCIke0RpY3RUeXBlRW51bS5Qcm9tb3Rpb25GbGFzaFNhbGV9XCJcclxuICAgICAgICB9KSB7XHJcbiAgICAgICAgICAgIC4uLkRhdGFDb25maWdGaWVsZHNcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAke2ZyYWdtZW50LkRhdGFDb25maWdGaWVsZHN9XHJcbiAgYCxcclxuICBwcm9kdWN0TGlzdEJ5SWRzOiBncWxgXHJcbiAgICBxdWVyeSAoJGlkczogW1N0cmluZ10pIHtcclxuICAgICAgICBwcm9kdWN0TGlzdEJ5SWRzIChpZHM6ICRpZHMpIHtcclxuICAgICAgICAgICAgdG90YWxcclxuICAgICAgICAgICAgbGlzdCB7XHJcbiAgICAgICAgICAgICAgICAuLi5Qcm9kdWN0RmllbGRzXHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLkltZ0ZpZWxkc1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5Qcm9kdWN0RmllbGRzfVxyXG4gICAgJHtmcmFnbWVudC5JbWdGaWVsZHN9XHJcbiAgYCxcclxuICBncm91cFF1ZXVlTGlzdDogZ3FsYFxyXG4gICAgcXVlcnkgKCRncm91cFF1ZXVlSXRlbUlucHV0OiBHcm91cFF1ZXVlSXRlbUlucHV0KSB7XHJcbiAgICAgICAgZ3JvdXBRdWV1ZUxpc3QgKGdyb3VwUXVldWVJdGVtSW5wdXQ6ICRncm91cFF1ZXVlSXRlbUlucHV0KSB7XHJcbiAgICAgICAgICAgIC4uLkdyb3VwUXVldWVGaWVsZHNcclxuICAgICAgICAgICAgcHJvZHVjdCB7XHJcbiAgICAgICAgICAgICAgICAuLi5Qcm9kdWN0RmllbGRzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZ3JvdXBPcmRlciB7XHJcbiAgICAgICAgICAgICAgICAuLi5Hcm91cE9yZGVyRmllbGRzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAke2ZyYWdtZW50Lkdyb3VwUXVldWVGaWVsZHN9XHJcbiAgICAke2ZyYWdtZW50LlByb2R1Y3RGaWVsZHN9XHJcbiAgICAke2ZyYWdtZW50Lkdyb3VwT3JkZXJGaWVsZHN9XHJcbiAgYCxcclxuICB1cGRhdGVPcmRlcjogZ3FsYFxyXG4gICAgbXV0YXRpb24gKCRvcmRlckluZm9JdGVtSW5wdXQ6IE9yZGVySW5mb0l0ZW1JbnB1dCkge1xyXG4gICAgICAgIHVwZGF0ZU9yZGVyIChvcmRlckluZm9JdGVtSW5wdXQ6ICRvcmRlckluZm9JdGVtSW5wdXQpIHtcclxuICAgICAgICAgICAgLi4uT3JkZXJJbmZvRmllbGRzXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5PcmRlckluZm9GaWVsZHN9XHJcbiAgYCxcclxuICBzYXZlR3JvdXBPcmRlcjogZ3FsYFxyXG4gICAgbXV0YXRpb24gKCRvcmRlckluZm9JdGVtSW5wdXQ6IE9yZGVySW5mb0l0ZW1JbnB1dCwgJGdyb3VwT3JkZXJJdGVtSW5wdXQ6IEdyb3VwT3JkZXJJdGVtSW5wdXQsICRncm91cFF1ZXVlSXRlbUlucHV0OiBHcm91cFF1ZXVlSXRlbUlucHV0KSB7XHJcbiAgICAgICAgc2F2ZUdyb3VwT3JkZXIgKG9yZGVySW5mb0l0ZW1JbnB1dDogJG9yZGVySW5mb0l0ZW1JbnB1dCwgZ3JvdXBPcmRlckl0ZW1JbnB1dDogJGdyb3VwT3JkZXJJdGVtSW5wdXQsIGdyb3VwUXVldWVJdGVtSW5wdXQ6ICRncm91cFF1ZXVlSXRlbUlucHV0KSB7XHJcbiAgICAgICAgICAgIC4uLk9yZGVySW5mb0ZpZWxkc1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuT3JkZXJJbmZvRmllbGRzfVxyXG4gIGAsXHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=