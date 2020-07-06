webpackHotUpdate("static\\development\\pages\\_app.js",{

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
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    query ($groupQueueItemInput: GroupQueueItemInput) {\n        groupQueueList (groupQueueItemInput: $groupQueueItemInput) {\n            ...GroupQueueFields\n        }\n    }\n    ", "\n  "]);

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
  groupQueueList: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject34(), _fragment__WEBPACK_IMPORTED_MODULE_2__["fragment"].GroupQueueFields),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9ncmFwaHFsVHlwZXMvZG9jL2luZGV4LnRzIl0sIm5hbWVzIjpbImdldFVzZXJMaXN0RG9jIiwiZ3FsIiwiZ2V0RGF0YUNvbmZpZyIsImhvbWVDYXJvdXNlbEltZ3MiLCJjYXRlZ29yeUxpc3QiLCJmcmFnbWVudCIsIkNhdGVnb3J5RmllbGRzIiwiZG9jIiwicmVnaXN0ZXJVc2VyIiwicmVmcmVzaFRva2VuIiwibG9naW4iLCJvbmVVc2VyIiwiVXNlckluZm9GaWVsZHMiLCJVc2VyRmllbGRzIiwib3JkZXJMaXN0IiwiT3JkZXJJbmZvRmllbGRzIiwiUk9yZGVyUHJvZHVjdEZpZWxkcyIsIlByb2R1Y3RGaWVsZHMiLCJJbWdGaWVsZHMiLCJvcmRlckRldGFpbCIsIkRpY3RUeXBlRW51bSIsIlNlbGZBZGRyZXNzIiwiRGF0YUNvbmZpZ0ZpZWxkcyIsIlVzZXJQYXlDYXJkRmllbGRzIiwiVXNlckFkZHJlc3NGaWVsZHMiLCJ1cGRhdGVQYXNzd29yZCIsInBheUNhcmRMaXN0T25lVXNlciIsInVzZXJQYXlDYXJkIiwic2F2ZVVzZXJQYXlDYXJkIiwic2V0VXNlclBheUNhcmREZWZhdWx0IiwicGlja3VwQWRkcmVzcyIsInVwZGF0ZVVzZXJJbmZvIiwidXNlckFkZHJlc3NMaXN0T25lVXNlciIsInVzZXJBZGRyZXNzIiwic2F2ZVVzZXJBZGRyZXNzIiwic2V0VXNlckFkZHJlc3NEZWZhdWx0IiwicHJvZHVjdHNJbkNhdGVnb3J5IiwiY2F0ZWdvcnlMZXZlbCIsIm9uZUNhdGVnb3J5IiwicHJvZHVjdExpc3QiLCJ1cGRhdGVOdW1TaG9wQ2FydCIsInVzZXJTaG9wQ2FydExpc3QiLCJTaG9wQ2FydEZpZWxkcyIsInVwZGF0ZVNob3BDYXJ0Iiwib3JkZXJDb25maXJtSW5mbyIsIkZyZWlnaHQiLCJEaWN0RmllbGRzIiwic2F2ZU9yZGVyIiwiZGljdExpc3QiLCJsaW1pdFRpbWVEYXRhIiwiUHJvbW90aW9uRmxhc2hTYWxlIiwicHJvZHVjdExpc3RCeUlkcyIsImdyb3VwUXVldWVMaXN0IiwiR3JvdXBRdWV1ZUZpZWxkcyIsInVwZGF0ZU9yZGVyIiwic2F2ZUdyb3VwT3JkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxjQUFjLEdBQUdDLHdEQUFILG1CQUFwQjtBQThEQSxJQUFNQyxhQUFhLEdBQUdELHdEQUFILG9CQUFuQjtBQWVBLElBQU1FLGdCQUFnQixHQUFHRix3REFBSCxvQkFBdEI7QUFlQSxJQUFNRyxZQUFZLEdBQUdILHdEQUFILHFCQVNuQkksa0RBQVEsQ0FBQ0MsY0FUVSxDQUFsQjtBQVlBLElBQU1DLEdBQUcsR0FBRztBQUNqQlAsZ0JBQWMsRUFBZEEsY0FEaUI7QUFFakJJLGNBQVksRUFBWkEsWUFGaUI7QUFHakJGLGVBQWEsRUFBYkEsYUFIaUI7QUFJakJDLGtCQUFnQixFQUFoQkEsZ0JBSmlCO0FBS2pCSyxjQUFZLEVBQUVQLHdEQUFGLG9CQUxLO0FBeUJqQlEsY0FBWSxFQUFFUix3REFBRixvQkF6Qks7QUFpQ2pCUyxPQUFLLEVBQUVULHdEQUFGLG9CQWpDWTtBQXlDakJVLFNBQU8sRUFBRVYsd0RBQUYs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QUFDeUIsT0FwQmxCLEVBOEJWeEMsa0RBQVEsQ0FBQ21CLGlCQTlCQyxFQStCVm5CLGtEQUFRLENBQUNrQixpQkEvQkMsRUFnQ1ZsQixrREFBUSxDQUFDTyxjQWhDQyxFQWlDVlAsa0RBQVEsQ0FBQ1EsVUFqQ0MsRUFrQ1ZSLGtEQUFRLENBQUNpQixnQkFsQ0MsRUFtQ1ZqQixrREFBUSxDQUFDeUMsVUFuQ0MsQ0E5VEM7QUFtV2pCQyxXQUFTLEVBQUU5Qyx3REFBRixzQkFNSEksa0RBQVEsQ0FBQ1UsZUFOTixDQW5XUTtBQTJXakJpQyxVQUFRLEVBQUUvQyx3REFBRixzQkFNRkksa0RBQVEsQ0FBQ3lDLFVBTlAsQ0EzV1M7QUFtWGpCRyxlQUFhLEVBQUVoRCx3REFBRixzQkFHTW1CLDREQUFZLENBQUM4QixrQkFIbkIsRUFRVDdDLGtEQUFRLENBQUNpQixnQkFSQSxDQW5YSTtBQTZYakI2QixrQkFBZ0IsRUFBRWxELHdEQUFGLHNCQVlaSSxrREFBUSxDQUFDWSxhQVpHLEVBYVpaLGtEQUFRLENBQUNhLFNBYkcsQ0E3WEM7QUE0WWpCa0MsZ0JBQWMsRUFBRW5ELHdEQUFGLHNCQU1WSSxrREFBUSxDQUFDZ0QsZ0JBTkMsQ0E1WUc7QUFvWmpCQyxhQUFXLEVBQUVyRCx3REFBRixzQkFNUEksa0RBQVEsQ0FBQ1UsZUFORixDQXBaTTtBQTRaakJ3QyxnQkFBYyxFQUFFdEQsd0RBQUYsc0JBTVZJLGtEQUFRLENBQUNVLGVBTkM7QUE1WkcsQ0FBWiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy44MDVjOTFhODZiNDVhOWQzMTQ3NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtncWx9IGZyb20gJ2Fwb2xsby1ib29zdCdcclxuaW1wb3J0IHtmcmFnbWVudH0gZnJvbSAnLi9mcmFnbWVudCdcclxuaW1wb3J0IHtEaWN0VHlwZUVudW19IGZyb20gJy4uLy4uL3NzX2NvbW1vbi9lbnVtJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFVzZXJMaXN0RG9jID0gZ3FsYFxyXG4gICAgcXVlcnkgcmVmYWN0b3JlZDY0MygkZGF0YTogVXNlckxpc3RJbnB1dCEpIHtcclxuICAgICAgICB1c2VyTGlzdCh1c2VyTGlzdElucHV0OiAkZGF0YSkge1xyXG4gICAgICAgICAgICBsaXN0IHtcclxuICAgICAgICAgICAgICAgIG9yZGVyQ29pbk5leHRNb250aFxyXG4gICAgICAgICAgICAgICAgb3JkZXJDb2luQ3VycmVudE1vbnRoXHJcbiAgICAgICAgICAgICAgICBvcmRlckFtb3VudEN1cnJlbnRZZWFyXHJcbiAgICAgICAgICAgICAgICAuLi51c2VySW5mb1xyXG4gICAgICAgICAgICAgICAgLi4uVXNlckZpZWxkc1xyXG4gICAgICAgICAgICAgICAgLi4ub3JkZXJJbmZvXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdG90YWxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmcmFnbWVudCBvcmRlckluZm8gb24gVXNlcntcclxuICAgICAgICBvcmRlckluZm97XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgICAgICB1cGRhdGVUaW1lXHJcbiAgICAgICAgICAgIGlzRGVsZXRlXHJcbiAgICAgICAgICAgIG51bWJlclxyXG4gICAgICAgICAgICBzdGF0ZVxyXG4gICAgICAgICAgICBhY3R1YWxseVBhaWRcclxuICAgICAgICAgICAgYWRkcmVzc0lkXHJcbiAgICAgICAgICAgIHBheW1lbnRNZXRob2RDYXJkSWRcclxuICAgICAgICAgICAgc3VidG90YWxcclxuICAgICAgICAgICAgY291cG9uRGlzY291bnRcclxuICAgICAgICAgICAgdmlwRGlzY291bnRcclxuICAgICAgICAgICAgdHJhbnNwb3J0YXRpb25Db3N0c1xyXG4gICAgICAgICAgICBzYWxlVGF4XHJcbiAgICAgICAgICAgIG9yZGVySWRcclxuICAgICAgICAgICAgZGlzY291bnRQcm9kdWN0VG90YWxcclxuICAgICAgICAgICAgZmluaXNoVGltZVxyXG4gICAgICAgICAgICBwaWNrVXBUaW1lXHJcbiAgICAgICAgICAgIHBpY2tVcFR5cGVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmcmFnbWVudCBVc2VyRmllbGRzIG9uIFVzZXIge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgbmFtZVxyXG4gICAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgICB1cGRhdGVUaW1lXHJcbiAgICAgICAgaXNEZWxldGVcclxuICAgICAgICBwYXNzd29yZFxyXG4gICAgICAgIHR5cGVcclxuICAgIH1cclxuICAgIGZyYWdtZW50IHVzZXJJbmZvIG9uIFVzZXJ7XHJcbiAgICAgICAgdXNlckluZm97XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgICAgICB1cGRhdGVUaW1lXHJcbiAgICAgICAgICAgIGlzRGVsZXRlXHJcbiAgICAgICAgICAgIHVzZXJJZFxyXG4gICAgICAgICAgICBwaG9uZVxyXG4gICAgICAgICAgICBlbWFpbFxyXG4gICAgICAgICAgICB1c2VyTGV2ZWxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBnZXREYXRhQ29uZmlnID0gZ3FsYFxyXG4gICAgcXVlcnkgKCRkYXRhOiBEYXRhQ29uZmlnSXRlbUlucHV0KSB7XHJcbiAgICAgICAgZ2V0RGF0YUNvbmZpZyhkYXRhQ29uZmlnSW5wdXQ6ICRkYXRhKSB7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgICAgICB1cGRhdGVUaW1lXHJcbiAgICAgICAgICAgIGlzRGVsZXRlXHJcbiAgICAgICAgICAgIHR5cGVcclxuICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgcmVtYXJrXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgaG9tZUNhcm91c2VsSW1ncyA9IGdxbGBcclxuICAgIHF1ZXJ5IHF1ZXJ5X3F1ZXJ5X3Rlc3RMb25nMTM3KCRkYXRhOiBEYXRhQ29uZmlnSXRlbUlucHV0KSB7XHJcbiAgICAgICAgaG9tZUNhcm91c2VsSW1ncyhkYXRhQ29uZmlnSW5wdXQ6ICRkYXRhKSB7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgICAgICB1cGRhdGVUaW1lXHJcbiAgICAgICAgICAgIGlzRGVsZXRlXHJcbiAgICAgICAgICAgIHR5cGVcclxuICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgcmVtYXJrXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgY2F0ZWdvcnlMaXN0ID0gZ3FsYFxyXG4gICAgcXVlcnkgcXVlcnlfcXVlcnlfdGVzdExvbmc1NjUoJGRhdGE6IENhdGVnb3J5TGlzdElucHV0KSB7XHJcbiAgICAgICAgY2F0ZWdvcnlMaXN0KGRhdGE6ICRkYXRhKSB7XHJcbiAgICAgICAgICAgIHRvdGFsXHJcbiAgICAgICAgICAgIGxpc3Qge1xyXG4gICAgICAgICAgICAgICAgLi4uQ2F0ZWdvcnlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuQ2F0ZWdvcnlGaWVsZHN9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBkb2MgPSB7XHJcbiAgZ2V0VXNlckxpc3REb2MsXHJcbiAgY2F0ZWdvcnlMaXN0LFxyXG4gIGdldERhdGFDb25maWcsXHJcbiAgaG9tZUNhcm91c2VsSW1ncyxcclxuICByZWdpc3RlclVzZXI6IGdxbGBcclxuICAgICAgbXV0YXRpb24gbXV0YXRpb25fcmVnaXN0ZXJVc2U5OTgoJGRhdGE6IFVzZXJJdGVtSW5wdXQpIHtcclxuICAgICAgICAgIHJlZ2lzdGVyVXNlcihkYXRhOiAkZGF0YSkge1xyXG4gICAgICAgICAgICAgIHRva2VuXHJcbiAgICAgICAgICAgICAgcmVmcmVzaHRva2VuXHJcbiAgICAgICAgICAgICAgdXNlciB7XHJcbiAgICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgICAgICAgICAgICB1cGRhdGVUaW1lXHJcbiAgICAgICAgICAgICAgICAgIGlzRGVsZXRlXHJcbiAgICAgICAgICAgICAgICAgIHBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgICAgIHR5cGVcclxuICAgICAgICAgICAgICAgICAgdXNlckluZm8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgYCxcclxuICByZWZyZXNoVG9rZW46IGdxbGBcclxuICAgICAgcXVlcnkgcmVmcmVzaFRva2VuKCRkYXRhOiBTdHJpbmchKSB7XHJcbiAgICAgICAgICByZWZyZXNoVG9rZW4ocmVmcmVzaHRva2VuOiAkZGF0YSkge1xyXG4gICAgICAgICAgICAgIHJlZnJlc2h0b2tlblxyXG4gICAgICAgICAgICAgIHRva2VuXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICBgLFxyXG4gIGxvZ2luOiBncWxgXHJcbiAgICAgIHF1ZXJ5IGxvZ2luKCRkYXRhOiBVc2VySXRlbUlucHV0KSB7XHJcbiAgICAgICAgICBsb2dpbih1c2VyOiAkZGF0YSkge1xyXG4gICAgICAgICAgICAgIHRva2VuXHJcbiAgICAgICAgICAgICAgcmVmcmVzaHRva2VuXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICBgLFxyXG4gIG9uZVVzZXI6IGdxbGBcclxuICAgICAgcXVlcnkgb25lVXNlciB7XHJcbiAgICAgICAgICBvbmVVc2VyIHtcclxuICAgICAgICAgICAgICAuLi5Vc2VyRmllbGRzXHJcbiAgICAgICAgICAgICAgdXNlckluZm8ge1xyXG4gICAgICAgICAgICAgICAgICAuLi5Vc2VySW5mb0ZpZWxkc1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAke2ZyYWdtZW50LlVzZXJJbmZvRmllbGRzfVxyXG4gICAgICAke2ZyYWdtZW50LlVzZXJGaWVsZHN9XHJcbiAgYCxcclxuICBvcmRlckxpc3Q6IGdxbGBcclxuICAgICAgcXVlcnkgb3JkZXJMaXN0KCRkYXRhOiBPcmRlcklucHV0KXtcclxuICAgICAgICAgIG9yZGVyTGlzdCAob3JkZXJJbnB1dDogJGRhdGEsIGZyb21Vc2VyOiB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgbGlzdCB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLk9yZGVySW5mb0ZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICByT3JkZXJQcm9kdWN0IHtcclxuICAgICAgICAgICAgICAgICAgICAgIC4uLlJPcmRlclByb2R1Y3RGaWVsZHNcclxuICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC4uLlByb2R1Y3RGaWVsZHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5JbWdGaWVsZHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJHtmcmFnbWVudC5PcmRlckluZm9GaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuUk9yZGVyUHJvZHVjdEZpZWxkc31cclxuICAgICAgJHtmcmFnbWVudC5Qcm9kdWN0RmllbGRzfVxyXG4gICAgICAke2ZyYWdtZW50LkltZ0ZpZWxkc31cclxuICBgLFxyXG4gIG9yZGVyRGV0YWlsOiBncWxgXHJcbiAgICAgIHF1ZXJ5ICgkaWQ6IFN0cmluZykge1xyXG4gICAgICAgICAgc2VsZkFkZHJlc3M6IGdldERhdGFDb25maWcoZGF0YUNvbmZpZ0lucHV0OiB7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCIke0RpY3RUeXBlRW51bS5TZWxmQWRkcmVzc31cIlxyXG4gICAgICAgICAgfSkge1xyXG4gICAgICAgICAgICAgIC4uLkRhdGFDb25maWdGaWVsZHNcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIG9yZGVyRGV0YWlsKGlkOiAkaWQpIHtcclxuICAgICAgICAgICAgICAuLi5PcmRlckluZm9GaWVsZHNcclxuICAgICAgICAgICAgICByT3JkZXJQcm9kdWN0IHtcclxuICAgICAgICAgICAgICAgICAgLi4uUk9yZGVyUHJvZHVjdEZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICBwcm9kdWN0IHtcclxuICAgICAgICAgICAgICAgICAgICAgIC4uLlByb2R1Y3RGaWVsZHNcclxuICAgICAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uSW1nRmllbGRzXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgdXNlciB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLlVzZXJGaWVsZHNcclxuICAgICAgICAgICAgICAgICAgdXNlckluZm8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgLi4uVXNlckluZm9GaWVsZHNcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB1c2VyQWRkcmVzcyB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLlVzZXJBZGRyZXNzRmllbGRzXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHVzZXJQYXlDYXJkIHtcclxuICAgICAgICAgICAgICAgICAgLi4uVXNlclBheUNhcmRGaWVsZHNcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJHtmcmFnbWVudC5EYXRhQ29uZmlnRmllbGRzfVxyXG4gICAgICAke2ZyYWdtZW50Lk9yZGVySW5mb0ZpZWxkc31cclxuICAgICAgJHtmcmFnbWVudC5ST3JkZXJQcm9kdWN0RmllbGRzfVxyXG4gICAgICAke2ZyYWdtZW50LlByb2R1Y3RGaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuSW1nRmllbGRzfVxyXG4gICAgICAke2ZyYWdtZW50LlVzZXJGaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuVXNlckluZm9GaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuVXNlclBheUNhcmRGaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuVXNlckFkZHJlc3NGaWVsZHN9XHJcbiAgYCxcclxuICB1cGRhdGVQYXNzd29yZDogZ3FsYFxyXG4gICAgICBtdXRhdGlvbiAoJGRhdGE6IFVwZGF0ZVBhc3N3b3JkSW5wdXQpIHtcclxuICAgICAgICAgIHVwZGF0ZVBhc3N3b3JkIChkYXRhOiAkZGF0YSkge1xyXG4gICAgICAgICAgICAgIHVzZXIge1xyXG4gICAgICAgICAgICAgICAgICAuLi5Vc2VyRmllbGRzXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGF1dGhCb2R5IHtcclxuICAgICAgICAgICAgICAgICAgdG9rZW5cclxuICAgICAgICAgICAgICAgICAgcmVmcmVzaHRva2VuXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICR7ZnJhZ21lbnQuVXNlckZpZWxkc31cclxuICBgLFxyXG4gIHBheUNhcmRMaXN0T25lVXNlcjogZ3FsYFxyXG4gICAgICBxdWVyeSB7XHJcbiAgICAgICAgICBwYXlDYXJkTGlzdE9uZVVzZXIge1xyXG4gICAgICAgICAgICAgIC4uLlVzZXJQYXlDYXJkRmllbGRzXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJHtmcmFnbWVudC5Vc2VyUGF5Q2FyZEZpZWxkc31cclxuICBgLFxyXG4gIHVzZXJQYXlDYXJkOiBncWxgXHJcbiAgICAgIHF1ZXJ5ICgkZGF0YTogVXNlclBheUNhcmRJdGVtSW5wdXQpIHtcclxuICAgICAgICAgIHVzZXJQYXlDYXJkICh1c2VyUGF5Q2FyZDogJGRhdGEpIHtcclxuICAgICAgICAgICAgICAuLi5Vc2VyUGF5Q2FyZEZpZWxkc1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICR7ZnJhZ21lbnQuVXNlclBheUNhcmRGaWVsZHN9XHJcbiAgYCxcclxuICBzYXZlVXNlclBheUNhcmQ6IGdxbGBcclxuICAgICAgbXV0YXRpb24gKCRkYXRhOiBVc2VyUGF5Q2FyZEl0ZW1JbnB1dCl7XHJcbiAgICAgICAgICBzYXZlVXNlclBheUNhcmQgKHVzZXJQYXlDYXJkOiAkZGF0YSkge1xyXG4gICAgICAgICAgICAgIC4uLlVzZXJQYXlDYXJkRmllbGRzXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJHtmcmFnbWVudC5Vc2VyUGF5Q2FyZEZpZWxkc31cclxuICBgLFxyXG4gIHNldFVzZXJQYXlDYXJkRGVmYXVsdDogZ3FsYFxyXG4gICAgICBtdXRhdGlvbiAoJGRhdGE6IFVzZXJQYXlDYXJkSXRlbUlucHV0KSB7XHJcbiAgICAgICAgICBzZXRVc2VyUGF5Q2FyZERlZmF1bHQgKHVzZXJQYXlDYXJkOiAkZGF0YSkge1xyXG4gICAgICAgICAgICAgIC4uLlVzZXJQYXlDYXJkRmllbGRzXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJHtmcmFnbWVudC5Vc2VyUGF5Q2FyZEZpZWxkc31cclxuICBgLFxyXG4gIHBpY2t1cEFkZHJlc3M6IGdxbGBcclxuICAgICAgcXVlcnkge1xyXG4gICAgICAgICAgZ2V0RGF0YUNvbmZpZyhkYXRhQ29uZmlnSW5wdXQ6IHtcclxuICAgICAgICAgICAgICB0eXBlOiBcIiR7RGljdFR5cGVFbnVtLlNlbGZBZGRyZXNzfVwiXHJcbiAgICAgICAgICB9KSB7XHJcbiAgICAgICAgICAgICAgLi4uRGF0YUNvbmZpZ0ZpZWxkc1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgb25lVXNlciB7XHJcbiAgICAgICAgICAgICAgLi4uVXNlckZpZWxkc1xyXG4gICAgICAgICAgICAgIHVzZXJJbmZvIHtcclxuICAgICAgICAgICAgICAgICAgLi4uVXNlckluZm9GaWVsZHNcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJHtmcmFnbWVudC5Vc2VySW5mb0ZpZWxkc31cclxuICAgICAgJHtmcmFnbWVudC5EYXRhQ29uZmlnRmllbGRzfVxyXG4gICAgICAke2ZyYWdtZW50LlVzZXJGaWVsZHN9XHJcbiAgYCxcclxuICB1cGRhdGVVc2VySW5mbzogZ3FsYFxyXG4gICAgICBtdXRhdGlvbiAoJHVzZXJJbmZvOiBVc2VySW5mb0l0ZW1JbnB1dCkge1xyXG4gICAgICAgICAgdXBkYXRlVXNlckluZm8gKHVzZXJJbmZvOiAkdXNlckluZm8pIHtcclxuICAgICAgICAgICAgICAuLi5Vc2VySW5mb0ZpZWxkc1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICR7ZnJhZ21lbnQuVXNlckluZm9GaWVsZHN9XHJcbiAgYCxcclxuICB1c2VyQWRkcmVzc0xpc3RPbmVVc2VyOiBncWxgXHJcbiAgICAgIHF1ZXJ5IHtcclxuICAgICAgICAgIHVzZXJBZGRyZXNzTGlzdE9uZVVzZXIge1xyXG4gICAgICAgICAgICAgIC4uLlVzZXJBZGRyZXNzRmllbGRzXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJHtmcmFnbWVudC5Vc2VyQWRkcmVzc0ZpZWxkc31cclxuICBgLFxyXG4gIHVzZXJBZGRyZXNzOiBncWxgXHJcbiAgICAgIHF1ZXJ5ICgkZGF0YTogVXNlckFkZHJlc3NJdGVtSW5wdXQpIHtcclxuICAgICAgICAgIHVzZXJBZGRyZXNzICh1c2VyQWRkcmVzczogJGRhdGEpIHtcclxuICAgICAgICAgICAgICAuLi5Vc2VyQWRkcmVzc0ZpZWxkc1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICR7ZnJhZ21lbnQuVXNlckFkZHJlc3NGaWVsZHN9XHJcbiAgYCxcclxuICBzYXZlVXNlckFkZHJlc3M6IGdxbGBcclxuICAgICAgbXV0YXRpb24gKCRkYXRhOiBVc2VyQWRkcmVzc0l0ZW1JbnB1dCl7XHJcbiAgICAgICAgICBzYXZlVXNlckFkZHJlc3MgKHVzZXJBZGRyZXNzOiAkZGF0YSkge1xyXG4gICAgICAgICAgICAgIC4uLlVzZXJBZGRyZXNzRmllbGRzXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJHtmcmFnbWVudC5Vc2VyQWRkcmVzc0ZpZWxkc31cclxuICBgLFxyXG4gIHNldFVzZXJBZGRyZXNzRGVmYXVsdDogZ3FsYFxyXG4gICAgICBtdXRhdGlvbiAoJGRhdGE6IFVzZXJBZGRyZXNzSXRlbUlucHV0KSB7XHJcbiAgICAgICAgICBzZXRVc2VyQWRkcmVzc0RlZmF1bHQgKHVzZXJBZGRyZXNzOiAkZGF0YSkge1xyXG4gICAgICAgICAgICAgIC4uLlVzZXJBZGRyZXNzRmllbGRzXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJHtmcmFnbWVudC5Vc2VyQWRkcmVzc0ZpZWxkc31cclxuICBgLFxyXG4gIHByb2R1Y3RzSW5DYXRlZ29yeTogZ3FsYFxyXG4gICAgICBxdWVyeSAoJGRhdGE6IENhdGVnb3J5SXRlbUlucHV0LCAkcHJvZHVjdEl0ZW1JbnB1dDogUHJvZHVjdEl0ZW1JbnB1dCkge1xyXG4gICAgICAgICAgcHJvZHVjdHNJbkNhdGVnb3J5KGNhdGVnb3J5SXRlbUlucHV0OiAkZGF0YSwgcHJvZHVjdEl0ZW1JbnB1dDogJHByb2R1Y3RJdGVtSW5wdXQpIHtcclxuICAgICAgICAgICAgICAuLi5Qcm9kdWN0RmllbGRzXHJcbiAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgLi4uSW1nRmllbGRzXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY2F0ZWdvcnlMaXN0KGRhdGE6IHtcclxuICAgICAgICAgICAgICBjYXRlZ29yeToge1xyXG4gICAgICAgICAgICAgICAgICBwYXJlbnRDYXRlZ29yeTogJGRhdGFcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KSB7XHJcbiAgICAgICAgICAgICAgdG90YWxcclxuICAgICAgICAgICAgICBsaXN0IHtcclxuICAgICAgICAgICAgICAgICAgLi4uQ2F0ZWdvcnlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJHtmcmFnbWVudC5Qcm9kdWN0RmllbGRzfVxyXG4gICAgICAke2ZyYWdtZW50LkltZ0ZpZWxkc31cclxuICAgICAgJHtmcmFnbWVudC5DYXRlZ29yeUZpZWxkc31cclxuICBgLFxyXG4gIGNhdGVnb3J5TGV2ZWw6IGdxbGBcclxuICAgICAgcXVlcnkgKCRkYXRhOiBDYXRlZ29yeUl0ZW1JbnB1dCkge1xyXG4gICAgICAgICAgY2F0ZWdvcnlMZXZlbChjYXRlZ29yeUl0ZW1JbnB1dDogJGRhdGEpXHJcbiAgICAgIH1cclxuICBgLFxyXG4gIG9uZUNhdGVnb3J5OiBncWxgXHJcbiAgICAgIHF1ZXJ5ICgkZGF0YTogQ2F0ZWdvcnlJdGVtSW5wdXQpIHtcclxuICAgICAgICAgIG9uZUNhdGVnb3J5KGRhdGE6ICRkYXRhKSB7XHJcbiAgICAgICAgICAgICAgLi4uQ2F0ZWdvcnlcclxuICAgICAgICAgICAgICBwYXJlbnRDYXRlZ29yeSB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLkNhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICAgIHBhcmVudENhdGVnb3J5IHtcclxuICAgICAgICAgICAgICAgICAgICAgIC4uLkNhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJHtmcmFnbWVudC5DYXRlZ29yeUZpZWxkc31cclxuICBgLFxyXG4gIHByb2R1Y3RMaXN0OiBncWxgXHJcbiAgICAgIHF1ZXJ5ICgkcHJvZHVjdElucHV0OiBQcm9kdWN0SXRlbUlucHV0LCAkb3JkZXJCeUlucHV0OiBPcmRlckJ5SW5wdXQpIHtcclxuICAgICAgICAgIHByb2R1Y3RMaXN0KHByb2R1Y3RJbnB1dDogJHByb2R1Y3RJbnB1dCwgb3JkZXJCeUlucHV0OiAkb3JkZXJCeUlucHV0KSB7XHJcbiAgICAgICAgICAgICAgdG90YWxcclxuICAgICAgICAgICAgICBsaXN0IHtcclxuICAgICAgICAgICAgICAgICAgLi4uUHJvZHVjdEZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgLi4uSW1nRmllbGRzXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJHtmcmFnbWVudC5Qcm9kdWN0RmllbGRzfVxyXG4gICAgICAke2ZyYWdtZW50LkltZ0ZpZWxkc31cclxuICBgLFxyXG4gIHVwZGF0ZU51bVNob3BDYXJ0OiBncWxgXHJcbiAgICAgIG11dGF0aW9uICgkc2hvcENhcnQ6IFNob3BDYXJ0SXRlbUlucHV0LCAkdXBkYXRlTnVtOiBGbG9hdCkge1xyXG4gICAgICAgICAgdXBkYXRlTnVtU2hvcENhcnQgKHNob3BDYXJ0OiAkc2hvcENhcnQsIHVwZGF0ZU51bTogJHVwZGF0ZU51bSkge1xyXG4gICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgbnVtYmVyXHJcbiAgICAgICAgICAgICAgcHJvZHVjdCB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLlByb2R1Y3RGaWVsZHNcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgdXNlciB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLlVzZXJGaWVsZHNcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJHtmcmFnbWVudC5Qcm9kdWN0RmllbGRzfVxyXG4gICAgICAke2ZyYWdtZW50LlVzZXJGaWVsZHN9XHJcbiAgYCxcclxuICB1c2VyU2hvcENhcnRMaXN0OiBncWxgXHJcbiAgICAgIHF1ZXJ5IHtcclxuICAgICAgICAgIHNob3BDYXJ0TGlzdCB7XHJcbiAgICAgICAgICAgICAgLi4uU2hvcENhcnRGaWVsZHNcclxuICAgICAgICAgICAgICBwcm9kdWN0IHtcclxuICAgICAgICAgICAgICAgICAgLi4uUHJvZHVjdEZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgLi4uSW1nRmllbGRzXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJHtmcmFnbWVudC5TaG9wQ2FydEZpZWxkc31cclxuICAgICAgJHtmcmFnbWVudC5Qcm9kdWN0RmllbGRzfVxyXG4gICAgICAke2ZyYWdtZW50LkltZ0ZpZWxkc31cclxuICBgLFxyXG4gIHVwZGF0ZVNob3BDYXJ0OiBncWxgXHJcbiAgICAgIG11dGF0aW9uICgkc2hvcENhcnQ6IFNob3BDYXJ0SXRlbUlucHV0KXtcclxuICAgICAgICAgIHVwZGF0ZVNob3BDYXJ0IChzaG9wQ2FydDogJHNob3BDYXJ0KSB7XHJcbiAgICAgICAgICAgICAgLi4uU2hvcENhcnRGaWVsZHNcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAke2ZyYWdtZW50LlNob3BDYXJ0RmllbGRzfVxyXG4gIGAsXHJcbiAgb3JkZXJDb25maXJtSW5mbzogZ3FsYFxyXG4gICAgICBxdWVyeSB7XHJcbiAgICAgICAgICBnZXREYXRhQ29uZmlnKGRhdGFDb25maWdJbnB1dDoge1xyXG4gICAgICAgICAgICAgIHR5cGU6IFwiJHtEaWN0VHlwZUVudW0uU2VsZkFkZHJlc3N9XCJcclxuICAgICAgICAgIH0pIHtcclxuICAgICAgICAgICAgICAuLi5EYXRhQ29uZmlnRmllbGRzXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBvbmVVc2VyIHtcclxuICAgICAgICAgICAgICAuLi5Vc2VyRmllbGRzXHJcbiAgICAgICAgICAgICAgdXNlckluZm8ge1xyXG4gICAgICAgICAgICAgICAgICAuLi5Vc2VySW5mb0ZpZWxkc1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHBheUNhcmRMaXN0T25lVXNlciB7XHJcbiAgICAgICAgICAgICAgLi4uVXNlclBheUNhcmRGaWVsZHNcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHVzZXJBZGRyZXNzTGlzdE9uZVVzZXIge1xyXG4gICAgICAgICAgICAgIC4uLlVzZXJBZGRyZXNzRmllbGRzXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBmcmVpZ2h0Q29uZmlnOiBnZXREYXRhQ29uZmlnIChkYXRhQ29uZmlnSW5wdXQ6IHtcclxuICAgICAgICAgICAgICB0eXBlOiBcIiR7RGljdFR5cGVFbnVtLkZyZWlnaHR9XCJcclxuICAgICAgICAgIH0pIHtcclxuICAgICAgICAgICAgICAuLi5EYXRhQ29uZmlnRmllbGRzXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB1c2VyTGV2ZWxMaXN0OiBnZXREaWN0TGlzdCAoZGljdElucHV0OiB7XHJcbiAgICAgICAgICAgICAgZGljdFR5cGVDb2RlOiBcIlVzZXJMZXZlbFwiXHJcbiAgICAgICAgICB9KSB7XHJcbiAgICAgICAgICAgICAgLi4uRGljdEZpZWxkc1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICR7ZnJhZ21lbnQuVXNlckFkZHJlc3NGaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuVXNlclBheUNhcmRGaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuVXNlckluZm9GaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuVXNlckZpZWxkc31cclxuICAgICAgJHtmcmFnbWVudC5EYXRhQ29uZmlnRmllbGRzfVxyXG4gICAgICAke2ZyYWdtZW50LkRpY3RGaWVsZHN9XHJcbiAgYCxcclxuICBzYXZlT3JkZXI6IGdxbGBcclxuICAgICAgbXV0YXRpb24gKCRvcmRlckluZm9JdGVtSW5wdXQ6IE9yZGVySW5mb0l0ZW1JbnB1dCkge1xyXG4gICAgICAgICAgc2F2ZU9yZGVyIChvcmRlckluZm9JdGVtSW5wdXQ6ICRvcmRlckluZm9JdGVtSW5wdXQpIHtcclxuICAgICAgICAgICAgICAuLi5PcmRlckluZm9GaWVsZHNcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAke2ZyYWdtZW50Lk9yZGVySW5mb0ZpZWxkc31cclxuICBgLFxyXG4gIGRpY3RMaXN0OiBncWxgXHJcbiAgICAgIHF1ZXJ5ICgkZGF0YTogRGljdElucHV0KSB7XHJcbiAgICAgICAgICBnZXREaWN0TGlzdCAoZGljdElucHV0OiAkZGF0YSkge1xyXG4gICAgICAgICAgICAgIC4uLkRpY3RGaWVsZHNcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAke2ZyYWdtZW50LkRpY3RGaWVsZHN9XHJcbiAgYCxcclxuICBsaW1pdFRpbWVEYXRhOiBncWxgXHJcbiAgICBxdWVyeSB7XHJcbiAgICAgICAgbGltaXRUaW1lRGF0YTogZ2V0RGF0YUNvbmZpZyAoZGF0YUNvbmZpZ0lucHV0OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiJHtEaWN0VHlwZUVudW0uUHJvbW90aW9uRmxhc2hTYWxlfVwiXHJcbiAgICAgICAgfSkge1xyXG4gICAgICAgICAgICAuLi5EYXRhQ29uZmlnRmllbGRzXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5EYXRhQ29uZmlnRmllbGRzfVxyXG4gIGAsXHJcbiAgcHJvZHVjdExpc3RCeUlkczogZ3FsYFxyXG4gICAgcXVlcnkgKCRpZHM6IFtTdHJpbmddKSB7XHJcbiAgICAgICAgcHJvZHVjdExpc3RCeUlkcyAoaWRzOiAkaWRzKSB7XHJcbiAgICAgICAgICAgIHRvdGFsXHJcbiAgICAgICAgICAgIGxpc3Qge1xyXG4gICAgICAgICAgICAgICAgLi4uUHJvZHVjdEZpZWxkc1xyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5JbWdGaWVsZHNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuUHJvZHVjdEZpZWxkc31cclxuICAgICR7ZnJhZ21lbnQuSW1nRmllbGRzfVxyXG4gIGAsXHJcbiAgZ3JvdXBRdWV1ZUxpc3Q6IGdxbGBcclxuICAgIHF1ZXJ5ICgkZ3JvdXBRdWV1ZUl0ZW1JbnB1dDogR3JvdXBRdWV1ZUl0ZW1JbnB1dCkge1xyXG4gICAgICAgIGdyb3VwUXVldWVMaXN0IChncm91cFF1ZXVlSXRlbUlucHV0OiAkZ3JvdXBRdWV1ZUl0ZW1JbnB1dCkge1xyXG4gICAgICAgICAgICAuLi5Hcm91cFF1ZXVlRmllbGRzXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5Hcm91cFF1ZXVlRmllbGRzfVxyXG4gIGAsXHJcbiAgdXBkYXRlT3JkZXI6IGdxbGBcclxuICAgIG11dGF0aW9uICgkb3JkZXJJbmZvSXRlbUlucHV0OiBPcmRlckluZm9JdGVtSW5wdXQpIHtcclxuICAgICAgICB1cGRhdGVPcmRlciAob3JkZXJJbmZvSXRlbUlucHV0OiAkb3JkZXJJbmZvSXRlbUlucHV0KSB7XHJcbiAgICAgICAgICAgIC4uLk9yZGVySW5mb0ZpZWxkc1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuT3JkZXJJbmZvRmllbGRzfVxyXG4gIGAsXHJcbiAgc2F2ZUdyb3VwT3JkZXI6IGdxbGBcclxuICAgIG11dGF0aW9uICgkb3JkZXJJbmZvSXRlbUlucHV0OiBPcmRlckluZm9JdGVtSW5wdXQsICRncm91cE9yZGVySXRlbUlucHV0OiBHcm91cE9yZGVySXRlbUlucHV0LCAkZ3JvdXBRdWV1ZUl0ZW1JbnB1dDogR3JvdXBRdWV1ZUl0ZW1JbnB1dCkge1xyXG4gICAgICAgIHNhdmVHcm91cE9yZGVyIChvcmRlckluZm9JdGVtSW5wdXQ6ICRvcmRlckluZm9JdGVtSW5wdXQsIGdyb3VwT3JkZXJJdGVtSW5wdXQ6ICRncm91cE9yZGVySXRlbUlucHV0LCBncm91cFF1ZXVlSXRlbUlucHV0OiAkZ3JvdXBRdWV1ZUl0ZW1JbnB1dCkge1xyXG4gICAgICAgICAgICAuLi5PcmRlckluZm9GaWVsZHNcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAke2ZyYWdtZW50Lk9yZGVySW5mb0ZpZWxkc31cclxuICBgLFxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9