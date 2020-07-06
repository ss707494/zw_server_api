webpackHotUpdate("static\\development\\pages\\cart.js",{

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

/***/ }),

/***/ "./utils/view/cart/CartProduct.tsx":
/*!*****************************************!*\
  !*** ./utils/view/cart/CartProduct.tsx ***!
  \*****************************************/
/*! exports provided: ShopCartProductBox, CartProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopCartProductBox", function() { return ShopCartProductBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartProduct", function() { return CartProduct; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Remove */ "./node_modules/@material-ui/icons/Remove.js");
/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _tools_img__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../tools/img */ "./utils/tools/img.ts");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
/* harmony import */ var _components_ProductItem_ProductItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/ProductItem/ProductItem */ "./utils/components/ProductItem/ProductItem.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ModelAction/useStore */ "./utils/ModelAction/useStore.ts");
/* harmony import */ var _tools_dealKey__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../tools/dealKey */ "./utils/tools/dealKey.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./index */ "./utils/view/cart/index.tsx");



var _this = undefined,
    _jsxFileName = "D:\\code\\zw\\zw_client_web\\utils\\view\\cart\\CartProduct.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;











var ShopCartProductBox = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "CartProduct__ShopCartProductBox",
  componentId: "sc-1cjcsc1-0"
})(["margin-bottom:16px;display:grid;grid-template-columns:minmax(20px,72px) 1fr;grid-template-rows:repeat(2,22px) 30px;grid-column-gap:10px;> img{grid-area:1/1/4/2;width:100%;height:100%;border-radius:8px;}> section{color:", "}> footer{display:flex;align-items:center;> main{flex-grow:1;}> button{flex-shrink:0;font-size:12px;}}"], _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_7__["grey"][600]);
_c = ShopCartProductBox;
var CartProduct = function CartProduct(_ref) {
  _s();

  var _shopCart$product, _shopCart$product$img, _shopCart$product$img2, _shopCart$number;

  var shopCart = _ref.shopCart;

  var _useStoreModel = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_10__["useStoreModel"])(_index__WEBPACK_IMPORTED_MODULE_12__["shopCartModel"]),
      actionsSCM = _useStoreModel.actions;

  var _useStoreModel2 = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_10__["useStoreModel"])(_components_ProductItem_ProductItem__WEBPACK_IMPORTED_MODULE_8__["productModel"]),
      actionsPM = _useStoreModel2.actions;

  var product = shopCart.product;
  return __jsx(ShopCartProductBox, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 10
    }
  }, __jsx("img", {
    src: Object(_tools_img__WEBPACK_IMPORTED_MODULE_6__["dealImgUrl"])((_shopCart$product = shopCart.product) === null || _shopCart$product === void 0 ? void 0 : (_shopCart$product$img = _shopCart$product.img) === null || _shopCart$product$img === void 0 ? void 0 : (_shopCart$product$img2 = _shopCart$product$img[0]) === null || _shopCart$product$img2 === void 0 ? void 0 : _shopCart$product$img2.url),
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }), __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }, product === null || product === void 0 ? void 0 : product.name, product === null || product === void 0 ? void 0 : product.weight, product === null || product === void 0 ? void 0 : product.unit), __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, product === null || product === void 0 ? void 0 : product.remark), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }, __jsx(_components_ProductItem_ProductItem__WEBPACK_IMPORTED_MODULE_8__["ProductPrice"], {
    product: product,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }), shopCart.isNext === 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Button"], {
    size: 'small',
    variant: 'outlined',
    onClick: /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return actionsPM.updateShopCart({
                isNext: 1,
                id: shopCart.id
              });

            case 2:
              actionsSCM.getList();

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_11__["ls"])('下次购买')), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["IconButton"], {
    disabled: ((_shopCart$number = shopCart === null || shopCart === void 0 ? void 0 : shopCart.number) !== null && _shopCart$number !== void 0 ? _shopCart$number : 0) <= 1,
    size: 'small',
    onClick: /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return actionsPM.updateNumShopCart({
                product: product,
                number: -1
              });

            case 2:
              actionsSCM.getList();

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 10
    }
  }, __jsx(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 10
    }
  })), shopCart.number, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["IconButton"], {
    size: 'small',
    onClick: /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return actionsPM.updateNumShopCart({
                product: product
              });

            case 2:
              actionsSCM.getList();

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }))) || __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Button"], {
    style: {
      marginRight: '8px'
    },
    size: 'small',
    variant: 'outlined',
    color: 'secondary',
    onClick: /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return actionsPM.updateShopCart({
                isDelete: 1,
                id: shopCart.id
              });

            case 2:
              actionsSCM.getList();

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    })),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_11__["ls"])('删除')), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Button"], {
    size: 'small',
    variant: 'outlined',
    onClick: /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return actionsPM.updateShopCart({
                isNext: 0,
                id: shopCart.id
              });

            case 2:
              actionsSCM.getList();

            case 3:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    })),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_11__["ls"])('加入购物车')))));
};

_s(CartProduct, "oMgC0jG54QiZvVWBAyNOLOVI6K4=", false, function () {
  return [_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_10__["useStoreModel"], _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_10__["useStoreModel"]];
});

_c2 = CartProduct;

var _c, _c2;

$RefreshReg$(_c, "ShopCartProductBox");
$RefreshReg$(_c2, "CartProduct");

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

/***/ "./utils/view/cart/orderPage.tsx":
/*!***************************************!*\
  !*** ./utils/view/cart/orderPage.tsx ***!
  \***************************************/
/*! exports provided: ShopTitle, AddressBox, CardBox, ShopTotal, OrderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopTitle", function() { return ShopTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressBox", function() { return AddressBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardBox", function() { return CardBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopTotal", function() { return ShopTotal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPage", function() { return OrderPage; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/ChevronRight */ "./node_modules/@material-ui/icons/ChevronRight.js");
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_HeaderTitle_HeaderTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/HeaderTitle/HeaderTitle */ "./utils/components/HeaderTitle/HeaderTitle.tsx");
/* harmony import */ var _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ModelAction/useStore */ "./utils/ModelAction/useStore.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index */ "./utils/view/cart/index.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _tools_dealKey__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../tools/dealKey */ "./utils/tools/dealKey.ts");
/* harmony import */ var _ss_common_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ss_common/enum */ "./utils/ss_common/enum.ts");
/* harmony import */ var _graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../graphqlTypes/doc */ "./utils/graphqlTypes/doc/index.ts");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_BScroll_BScroller__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/BScroll/BScroller */ "./utils/components/BScroll/BScroller.tsx");
/* harmony import */ var _components_Box_Box__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/Box/Box */ "./utils/components/Box/Box.tsx");
/* harmony import */ var _components_SelectAddress__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/SelectAddress */ "./utils/view/cart/components/SelectAddress.tsx");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
/* harmony import */ var _components_SelectCard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/SelectCard */ "./utils/view/cart/components/SelectCard.tsx");
/* harmony import */ var _tools_utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../tools/utils */ "./utils/tools/utils.ts");
/* harmony import */ var _style_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../style/common */ "./utils/style/common.ts");
/* harmony import */ var _components_ButtonLoad_ButtonLoad__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../components/ButtonLoad/ButtonLoad */ "./utils/components/ButtonLoad/ButtonLoad.tsx");
/* harmony import */ var _components_Message_Message__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../components/Message/Message */ "./utils/components/Message/Message.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_22__);




var _this = undefined,
    _jsxFileName = "D:\\code\\zw\\zw_client_web\\utils\\view\\cart\\orderPage.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





















var ShopTitle = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "orderPage__ShopTitle",
  componentId: "n2h0w5-0"
})(["font-size:18px;font-weight:bold;display:flex;align-items:flex-end;> footer{font-size:14px;color:", ";}"], _style_common__WEBPACK_IMPORTED_MODULE_19__["mpStyle"].red);
_c = ShopTitle;
var AddressBox = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "orderPage__AddressBox",
  componentId: "n2h0w5-1"
})(["padding:20px;display:flex;align-items:center;> main{flex-grow:1;> header{font-size:16px;font-weight:bold;margin-bottom:8px;}}"]);
_c2 = AddressBox;
var CardBox = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "orderPage__CardBox",
  componentId: "n2h0w5-2"
})(["padding:16px 20px;display:grid;grid-template-columns:1fr min-content;grid-template-rows:repeat(2,1fr);> header{font-size:16px;font-weight:bold;margin-bottom:8px;}> aside{grid-area:1/2/3/3;}"]);
_c3 = CardBox;
var ShopTotal = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "orderPage__ShopTotal",
  componentId: "n2h0w5-3"
})(["padding:0 20px;display:flex;justify-content:space-between;margin-bottom:16px;"]);
_c4 = ShopTotal;
var FooterFit = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "orderPage__FooterFit",
  componentId: "n2h0w5-4"
})(["position:fixed;box-sizing:border-box;bottom:0;width:100vw;padding:16px 24px;display:grid;grid-template-rows:repeat(2,1fr);grid-template-columns:1fr max-content;grid-row-gap:8px;box-shadow:", ";> header{> span{font-size:12px;margin-left:8px;}}> aside{grid-area:1/2/3/3;}"], _style_common__WEBPACK_IMPORTED_MODULE_19__["mpStyle"].shadow['1']);
_c5 = FooterFit;
var OrderPage = function OrderPage() {
  _s();

  var _stateSCM$payCardList, _stateSCM$freightConf, _stateSCM$userLevelLi;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_22__["useRouter"])();

  var _useStoreModel = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_6__["useStoreModel"])(_components_SelectAddress__WEBPACK_IMPORTED_MODULE_15__["selectAddressModel"]),
      actionsSAM = _useStoreModel.actions;

  var _useStoreModel2 = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_6__["useStoreModel"])(_components_SelectCard__WEBPACK_IMPORTED_MODULE_17__["selectCardModel"]),
      actionsSelectCard = _useStoreModel2.actions;

  var _useStoreModel3 = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_6__["useStoreModel"])(_index__WEBPACK_IMPORTED_MODULE_7__["shopCartModel"]),
      stateSCM = _useStoreModel3.state,
      actionsSCM = _useStoreModel3.actions,
      getLoad = _useStoreModel3.getLoad;

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (!stateSCM.user.id) {
      actionsSCM.getOrderInfo();
    }
  }, []);
  var addressData = stateSCM.dealAddressData(stateSCM);
  var cardData = ((_stateSCM$payCardList = stateSCM.payCardList) === null || _stateSCM$payCardList === void 0 ? void 0 : _stateSCM$payCardList.find(function (v) {
    return v.id === stateSCM.form.paymentMethodCardId;
  })) || {};
  var productTotal = stateSCM.dealProductTotal(stateSCM);
  var transportationCosts = stateSCM.form.pickUpType === _ss_common_enum__WEBPACK_IMPORTED_MODULE_10__["PickUpTypeEnum"].Delivery && stateSCM.freightConfig.reduce(function (pre, cur) {
    if (pre > parseFloat(cur === null || cur === void 0 ? void 0 : cur.freightPay) && productTotal < parseFloat(cur === null || cur === void 0 ? void 0 : cur.orderMax)) {
      return parseFloat(cur === null || cur === void 0 ? void 0 : cur.freightPay);
    } else {
      return pre;
    }
  }, parseFloat((_stateSCM$freightConf = stateSCM.freightConfig[stateSCM.freightConfig.length - 1]) === null || _stateSCM$freightConf === void 0 ? void 0 : _stateSCM$freightConf.freightPay)) || 0;
  var actuallyPaid = productTotal + transportationCosts - Object(_tools_utils__WEBPACK_IMPORTED_MODULE_18__["dealMaybeNumber"])(stateSCM.form.deductCoin) + Object(_tools_utils__WEBPACK_IMPORTED_MODULE_18__["dealMaybeNumber"])(stateSCM.form.saleTax);
  var generateCoin = actuallyPaid * 0.01;
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 10
    }
  }, __jsx(_components_HeaderTitle_HeaderTitle__WEBPACK_IMPORTED_MODULE_5__["HeaderTitle"], {
    title: '确认订单',
    backCall: function backCall() {
      actionsSCM.updatePageType(_index__WEBPACK_IMPORTED_MODULE_7__["pageTypeEnum"].shopCart);
      return true;
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 5
    }
  }), !!getLoad(_graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_11__["doc"].orderConfirmInfo) && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["LinearProgress"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 42
    }
  }) || __jsx("div", {
    style: {
      height: '4px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 64
    }
  }), __jsx(_components_BScroll_BScroller__WEBPACK_IMPORTED_MODULE_13__["BScroller"], {
    boxHeight: 'calc(100vh - 65px)',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 5
    }
  }, __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_14__["Space"], {
    h: 10,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }
  }), __jsx(ShopTitle, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 7
    }
  }, __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_14__["Space"], {
    w: 20,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 9
    }
  }), Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_9__["ls"])(stateSCM.form.pickUpType === _ss_common_enum__WEBPACK_IMPORTED_MODULE_10__["PickUpTypeEnum"].Self && '自取地址' || '送货地址')), __jsx(AddressBox, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }
  }, __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 9
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 11
    }
  }, "".concat(addressData.combineAddress)), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 11
    }
  }, "".concat(addressData.name, " ").concat(addressData.contactInformation))), __jsx("aside", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 9
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
      lineNumber: 139,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 13
    }
  })))), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_14__["Space"], {
    c: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_16__["grey"][200],
    h: 16,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 7
    }
  }), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_14__["Space"], {
    h: 16,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 7
    }
  }), __jsx(ShopTitle, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 7
    }
  }, __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_14__["Space"], {
    w: 20,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 9
    }
  }), Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_9__["ls"])('付款方式')), __jsx(CardBox, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 7
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 9
    }
  }, cardData.name), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 9
    }
  }, cardData.number), __jsx("aside", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 9
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
      lineNumber: 162,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 13
    }
  })))), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_14__["Space"], {
    c: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_16__["grey"][200],
    h: 16,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 7
    }
  }), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_14__["Space"], {
    h: 16,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 7
    }
  }), __jsx(ShopTitle, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 7
    }
  }, __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_14__["Space"], {
    w: 20,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 9
    }
  }), Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_9__["ls"])('使用达人币'), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_14__["Space"], {
    w: 16,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 9
    }
  }), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 9
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_9__["ls"])('当月可用余额'), Object(_tools_utils__WEBPACK_IMPORTED_MODULE_18__["dealMoney"])(stateSCM.user.orderCoinCurrentMonth))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 7
    }
  }, __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_14__["Space"], {
    w: 20,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["TextField"], {
    style: {
      marginTop: '8px',
      marginBottom: '24px'
    },
    label: Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_9__["ls"])(''),
    value: stateSCM.form.deductCoin,
    onChange: function onChange(e) {
      actionsSCM.setForm(['deductCoin', e.target.value]);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 9
    }
  })), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_14__["Space"], {
    c: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_16__["grey"][200],
    h: 16,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 7
    }
  }), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_14__["Space"], {
    h: 16,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 7
    }
  }), __jsx(ShopTotal, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 7
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 9
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_9__["ls"])('购物车总计')), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 9
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_18__["dealMoney"])(productTotal))), transportationCosts > 0 && __jsx(ShopTotal, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 35
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 9
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_9__["ls"])('运费')), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 9
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_18__["dealMoney"])(transportationCosts))), __jsx(ShopTotal, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 7
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 9
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_9__["ls"])('达人币抵扣')), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 9
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_18__["dealMoney"])(stateSCM.form.deductCoin, '-'))), __jsx(ShopTotal, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 7
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 9
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_9__["ls"])('消费税')), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 9
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_18__["dealMoney"])(stateSCM.form.saleTax))), __jsx(ShopTotal, {
    style: {
      fontSize: '18px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 7
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 9
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_9__["ls"])('订单总额')), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 9
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_18__["dealMoney"])(actuallyPaid)))), __jsx(FooterFit, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 5
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_9__["ls"])('本次订单'), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 9
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_9__["ls"])((_stateSCM$userLevelLi = stateSCM.userLevelList.find(function (v) {
    var _stateSCM$user$userIn;

    return v.code === ((_stateSCM$user$userIn = stateSCM.user.userInfo) === null || _stateSCM$user$userIn === void 0 ? void 0 : _stateSCM$user$userIn.userLevel);
  })) === null || _stateSCM$userLevelLi === void 0 ? void 0 : _stateSCM$userLevelLi.name))), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_9__["ls"])('将获得下月使用达人币 '), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 9
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_18__["dealMoney"])(generateCoin))), __jsx("aside", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 7
    }
  }, __jsx(_components_ButtonLoad_ButtonLoad__WEBPACK_IMPORTED_MODULE_20__["ButtonLoad"], {
    loading: getLoad(_graphqlTypes_doc__WEBPACK_IMPORTED_MODULE_11__["doc"].saveOrder),
    onClick: /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
      var _stateSCM$user$userIn2, _res$saveOrder;

      var submitData, res, _res$saveOrder2, _query;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              submitData = _objectSpread(_objectSpread({}, stateSCM.form), {}, {
                generateCoin: generateCoin,
                actuallyPaid: actuallyPaid,
                transportationCosts: transportationCosts,
                subtotal: productTotal,
                currentUserLevel: (_stateSCM$user$userIn2 = stateSCM.user.userInfo) === null || _stateSCM$user$userIn2 === void 0 ? void 0 : _stateSCM$user$userIn2.userLevel,
                rOrderProduct: stateSCM.shopCartList.map(function (v) {
                  var _v$product;

                  return {
                    count: v.number,
                    productId: (_v$product = v.product) === null || _v$product === void 0 ? void 0 : _v$product.id,
                    product: v.product
                  };
                })
              });
              _context3.next = 3;
              return actionsSCM.submit(_objectSpread({}, submitData));

            case 3:
              res = _context3.sent;

              if (!(res === null || res === void 0 ? void 0 : (_res$saveOrder = res.saveOrder) === null || _res$saveOrder === void 0 ? void 0 : _res$saveOrder.id)) {
                _context3.next = 11;
                break;
              }

              Object(_components_Message_Message__WEBPACK_IMPORTED_MODULE_21__["showMessage"])('操作成功 将前往付款'); // await router.replace('/cart/result')

              _query = Object(_tools_utils__WEBPACK_IMPORTED_MODULE_18__["dealUrlQuery"])({
                orderId: res === null || res === void 0 ? void 0 : (_res$saveOrder2 = res.saveOrder) === null || _res$saveOrder2 === void 0 ? void 0 : _res$saveOrder2.id
              });
              _context3.next = 9;
              return router.replace("/pay".concat(_query), "/pay".concat(_query));

            case 9:
              actionsSCM.clearData();
              actionsSCM.getList();

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })),
    variant: 'contained',
    color: 'secondary',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 9
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_9__["ls"])('提交订单')))), __jsx(_components_SelectAddress__WEBPACK_IMPORTED_MODULE_15__["SelectAddress"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 5
    }
  }), __jsx(_components_SelectCard__WEBPACK_IMPORTED_MODULE_17__["SelectCard"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 5
    }
  }));
};

_s(OrderPage, "t+Z7NWW2J9WIBtMqwC5NO4mQpxE=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_22__["useRouter"], _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_6__["useStoreModel"], _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_6__["useStoreModel"], _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_6__["useStoreModel"]];
});

_c6 = OrderPage;

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "ShopTitle");
$RefreshReg$(_c2, "AddressBox");
$RefreshReg$(_c3, "CardBox");
$RefreshReg$(_c4, "ShopTotal");
$RefreshReg$(_c5, "FooterFit");
$RefreshReg$(_c6, "OrderPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9ncmFwaHFsVHlwZXMvZG9jL2luZGV4LnRzIiwid2VicGFjazovLy8uL3V0aWxzL3ZpZXcvY2FydC9DYXJ0UHJvZHVjdC50c3giLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvdmlldy9jYXJ0L29yZGVyUGFnZS50c3giXSwibmFtZXMiOlsiZ2V0VXNlckxpc3REb2MiLCJncWwiLCJnZXREYXRhQ29uZmlnIiwiaG9tZUNhcm91c2VsSW1ncyIsImNhdGVnb3J5TGlzdCIsImZyYWdtZW50IiwiQ2F0ZWdvcnlGaWVsZHMiLCJkb2MiLCJyZWdpc3RlclVzZXIiLCJyZWZyZXNoVG9rZW4iLCJsb2dpbiIsIm9uZVVzZXIiLCJVc2VySW5mb0ZpZWxkcyIsIlVzZXJGaWVsZHMiLCJvcmRlckxpc3QiLCJPcmRlckluZm9GaWVsZHMiLCJST3JkZXJQcm9kdWN0RmllbGRzIiwiUHJvZHVjdEZpZWxkcyIsIkltZ0ZpZWxkcyIsIm9yZGVyRGV0YWlsIiwiRGljdFR5cGVFbnVtIiwiU2VsZkFkZHJlc3MiLCJEYXRhQ29uZmlnRmllbGRzIiwiVXNlclBheUNhcmRGaWVsZHMiLCJVc2VyQWRkcmVzc0ZpZWxkcyIsInVwZGF0ZVBhc3N3b3JkIiwicGF5Q2FyZExpc3RPbmVVc2VyIiwidXNlclBheUNhcmQiLCJzYXZlVXNlclBheUNhcmQiLCJzZXRVc2VyUGF5Q2FyZERlZmF1bHQiLCJwaWNrdXBBZGRyZXNzIiwidXBkYXRlVXNlckluZm8iLCJ1c2VyQWRkcmVzc0xpc3RPbmVVc2VyIiwidXNlckFkZHJlc3MiLCJzYXZlVXNlckFkZHJlc3MiLCJzZXRVc2VyQWRkcmVzc0RlZmF1bHQiLCJwcm9kdWN0c0luQ2F0ZWdvcnkiLCJjYXRlZ29yeUxldmVsIiwib25lQ2F0ZWdvcnkiLCJwcm9kdWN0TGlzdCIsInVwZGF0ZU51bVNob3BDYXJ0IiwidXNlclNob3BDYXJ0TGlzdCIsIlNob3BDYXJ0RmllbGRzIiwidXBkYXRlU2hvcENhcnQiLCJvcmRlckNvbmZpcm1JbmZvIiwiRnJlaWdodCIsIkRpY3RGaWVsZHMiLCJzYXZlT3JkZXIiLCJkaWN0TGlzdCIsImxpbWl0VGltZURhdGEiLCJQcm9tb3Rpb25GbGFzaFNhbGUiLCJwcm9kdWN0TGlzdEJ5SWRzIiwiZ3JvdXBRdWV1ZUxpc3QiLCJHcm91cFF1ZXVlRmllbGRzIiwidXBkYXRlT3JkZXIiLCJzYXZlR3JvdXBPcmRlciIsIlNob3BDYXJ0UHJvZHVjdEJveCIsInN0eWxlZCIsImRpdiIsImdyZXkiLCJDYXJ0UHJvZHVjdCIsInNob3BDYXJ0IiwidXNlU3RvcmVNb2RlbCIsInNob3BDYXJ0TW9kZWwiLCJhY3Rpb25zU0NNIiwiYWN0aW9ucyIsInByb2R1Y3RNb2RlbCIsImFjdGlvbnNQTSIsInByb2R1Y3QiLCJkZWFsSW1nVXJsIiwiaW1nIiwidXJsIiwibmFtZSIsIndlaWdodCIsInVuaXQiLCJyZW1hcmsiLCJpc05leHQiLCJpZCIsImdldExpc3QiLCJscyIsIm51bWJlciIsIm1hcmdpblJpZ2h0IiwiaXNEZWxldGUiLCJTaG9wVGl0bGUiLCJtcFN0eWxlIiwicmVkIiwiQWRkcmVzc0JveCIsIkNhcmRCb3giLCJTaG9wVG90YWwiLCJGb290ZXJGaXQiLCJzaGFkb3ciLCJPcmRlclBhZ2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzZWxlY3RBZGRyZXNzTW9kZWwiLCJhY3Rpb25zU0FNIiwic2VsZWN0Q2FyZE1vZGVsIiwiYWN0aW9uc1NlbGVjdENhcmQiLCJzdGF0ZVNDTSIsInN0YXRlIiwiZ2V0TG9hZCIsInVzZUVmZmVjdCIsInVzZXIiLCJnZXRPcmRlckluZm8iLCJhZGRyZXNzRGF0YSIsImRlYWxBZGRyZXNzRGF0YSIsImNhcmREYXRhIiwicGF5Q2FyZExpc3QiLCJmaW5kIiwidiIsImZvcm0iLCJwYXltZW50TWV0aG9kQ2FyZElkIiwicHJvZHVjdFRvdGFsIiwiZGVhbFByb2R1Y3RUb3RhbCIsInRyYW5zcG9ydGF0aW9uQ29zdHMiLCJwaWNrVXBUeXBlIiwiUGlja1VwVHlwZUVudW0iLCJEZWxpdmVyeSIsImZyZWlnaHRDb25maWciLCJyZWR1Y2UiLCJwcmUiLCJjdXIiLCJwYXJzZUZsb2F0IiwiZnJlaWdodFBheSIsIm9yZGVyTWF4IiwibGVuZ3RoIiwiYWN0dWFsbHlQYWlkIiwiZGVhbE1heWJlTnVtYmVyIiwiZGVkdWN0Q29pbiIsInNhbGVUYXgiLCJnZW5lcmF0ZUNvaW4iLCJ1cGRhdGVQYWdlVHlwZSIsInBhZ2VUeXBlRW51bSIsImhlaWdodCIsIlNlbGYiLCJjb21iaW5lQWRkcmVzcyIsImNvbnRhY3RJbmZvcm1hdGlvbiIsIm9wZW5DbGljayIsInJlcyIsInNldEZvcm0iLCJkZWFsTW9uZXkiLCJvcmRlckNvaW5DdXJyZW50TW9udGgiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJmb250U2l6ZSIsInVzZXJMZXZlbExpc3QiLCJjb2RlIiwidXNlckluZm8iLCJ1c2VyTGV2ZWwiLCJzdWJtaXREYXRhIiwic3VidG90YWwiLCJjdXJyZW50VXNlckxldmVsIiwick9yZGVyUHJvZHVjdCIsInNob3BDYXJ0TGlzdCIsIm1hcCIsImNvdW50IiwicHJvZHVjdElkIiwic3VibWl0Iiwic2hvd01lc3NhZ2UiLCJfcXVlcnkiLCJkZWFsVXJsUXVlcnkiLCJvcmRlcklkIiwicmVwbGFjZSIsImNsZWFyRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLGNBQWMsR0FBR0Msd0RBQUgsbUJBQXBCO0FBOERBLElBQU1DLGFBQWEsR0FBR0Qsd0RBQUgsb0JBQW5CO0FBZUEsSUFBTUUsZ0JBQWdCLEdBQUdGLHdEQUFILG9CQUF0QjtBQWVBLElBQU1HLFlBQVksR0FBR0gsd0RBQUgscUJBU25CSSxrREFBUSxDQUFDQyxjQVRVLENBQWxCO0FBWUEsSUFBTUMsR0FBRyxHQUFHO0FBQ2pCUCxnQkFBYyxFQUFkQSxjQURpQjtBQUVqQkksY0FBWSxFQUFaQSxZQUZpQjtBQUdqQkYsZUFBYSxFQUFiQSxhQUhpQjtBQUlqQkMsa0JBQWdCLEVBQWhCQSxnQkFKaUI7QUFLakJLLGNBQVksRUFBRVAsd0RBQUYsb0JBTEs7QUF5QmpCUSxjQUFZLEVBQUVSLHdEQUFGLG9CQXpCSztBQWlDakJTLE9BQUssRUFBRVQsd0RBQUYsb0JBakNZO0FBeUNqQlUsU0FBTyxFQUFFVix3REFBRixxQkFTREksa0RBQVEsQ0FBQ08sY0FUUixFQVVEUCxrREFBUSxDQUFDUSxVQVZSLENBekNVO0FBcURqQkMsV0FBUyxFQUFFYix3REFBRixxQkFpQkhJLGtEQUFRLENBQUNVLGVBakJOLEVBa0JIVixrREFBUSxDQUFDVyxtQkFsQk4sRUFtQkhYLGtEQUFRLENBQUNZLGFBbkJOLEVBb0JIWixrREFBUSxDQUFDYSxTQXBCTixDQXJEUTtBQTJFakJDLGFBQVcsRUFBRWxCLHdEQUFGLHNCQUdVbUIsNERBQVksQ0FBQ0MsV0FIdkIsRUFnQ0xoQixrREFBUSxDQUFDaUIsZ0JBaENKLEVBaUNMakIsa0RBQVEsQ0FBQ1UsZUFqQ0osRUFrQ0xWLGtEQUFRLENBQUNXLG1CQWxDSixFQW1DTFgsa0RBQVEsQ0FBQ1ksYUFuQ0osRUFvQ0xaLGtEQUFRLENBQUNhLFNBcENKLEVBcUNMYixrREFBUSxDQUFDUSxVQXJDSixFQXNDTFIsa0RBQVEsQ0FBQ08sY0F0Q0osRUF1Q0xQLGtEQUFRLENBQUNrQixpQkF2Q0osRUF3Q0xsQixrREFBUSxDQUFDbUIsaUJBeENKLENBM0VNO0FBcUhqQkMsZ0JBQWMsRUFBRXhCLHdEQUFGLHNCQVlSSSxrREFBUSxDQUFDUSxVQVpELENBckhHO0FBbUlqQmEsb0JBQWtCLEVBQUV6Qix3REFBRixzQkFNWkksa0RBQVEsQ0FBQ2tCLGlCQU5HLENBbklEO0FBMklqQkksYUFBVyxFQUFFMUIsd0RBQUYsc0JBTUxJLGtEQUFRLENBQUNrQixpQkFOSixDQTNJTTtBQW1KakJLLGlCQUFlLEVBQUUzQix3REFBRixzQkFNVEksa0RBQVEsQ0FBQ2tCLGlCQU5BLENBbkpFO0FBMkpqQk0sdUJBQXFCLEVBQUU1Qix3REFBRixzQkFNZkksa0RBQVEsQ0FBQ2tCLGlCQU5NLENBM0pKO0FBbUtqQk8sZUFBYSxFQUFFN0Isd0RBQUYsc0JBR1FtQiw0REFBWSxDQUFDQyxXQUhyQixFQWNQaEIsa0RBQVEsQ0FBQ08sY0FkRixFQWVQUCxrREFBUSxDQUFDaUIsZ0JBZkYsRUFnQlBqQixrREFBUSxDQUFDUSxVQWhCRixDQW5LSTtBQXFMakJrQixnQkFBYyxFQUFFOUIsd0RBQUYsc0JBTVJJLGtEQUFRLENBQUNPLGNBTkQsQ0FyTEc7QUE2TGpCb0Isd0JBQXNCLEVBQUUvQix3REFBRixzQkFNaEJJLGtEQUFRLENBQUNtQixpQkFOTyxDQTdMTDtBQXFNakJTLGFBQVcsRUFBRWhDLHdEQUFGLHNCQU1MSSxrREFBUSxDQUFDbUIsaUJBTkosQ0FyTU07QUE2TWpCVSxpQkFBZSxFQUFFakMsd0RBQUYsc0JBTVRJLGtEQUFRLENBQUNtQixpQkFOQSxDQTdNRTtBQXFOakJXLHVCQUFxQixFQUFFbEMsd0RBQUYsc0JBTWZJLGtEQUFRLENBQUNtQixpQkFOTSxDQXJOSjtBQTZOakJZLG9CQUFrQixFQUFFbkMsd0RBQUYsc0JBbUJaSSxrREFBUSxDQUFDWSxhQW5CRyxFQW9CWlosa0RBQVEsQ0FBQ2EsU0FwQkcsRUFxQlpiLGtEQUFRLENBQUNDLGNBckJHLENBN05EO0FBb1BqQitCLGVBQWEsRUFBRXBDLHdEQUFGLHFCQXBQSTtBQXlQakJxQyxhQUFXLEVBQUVyQyx3REFBRixzQkFZTEksa0RBQVEsQ0FBQ0MsY0FaSixDQXpQTTtBQXVRakJpQyxhQUFXLEVBQUV0Qyx3REFBRixzQkFZTEksa0RBQVEsQ0FBQ1ksYUFaSixFQWFMWixrREFBUSxDQUFDYSxTQWJKLENBdlFNO0FBc1JqQnNCLG1CQUFpQixFQUFFdkMsd0RBQUYsc0JBYVhJLGtEQUFRLENBQUNZLGFBYkUsRUFjWFosa0RBQVEsQ0FBQ1EsVUFkRSxDQXRSQTtBQXNTakI0QixrQkFBZ0IsRUFBRXhDLHdEQUFGLHNCQVlWSSxrREFBUSxDQUFDcUMsY0FaQyxFQWFWckMsa0RBQVEsQ0FBQ1ksYUFiQyxFQWNWWixrREFBUSxDQUFDYSxTQWRDLENBdFNDO0FBc1RqQnlCLGdCQUFjLEVBQUUxQyx3REFBRixzQkFNUkksa0RBQVEsQ0FBQ3FDLGNBTkQsQ0F0VEc7QUE4VGpCRSxrQkFBZ0IsRUFBRTNDLHdEQUFGLHNCQUdLbUIsNERBQVksQ0FBQ0MsV0FIbEIsRUFvQktELDREQUFZLENBQUN5QixPQXBCbEIsRUE4QlZ4QyxrREFBUSxDQUFDbUIsaUJBOUJDLEVBK0JWbkIsa0RBQVEsQ0FBQ2tCLGlCQS9CQyxFQWdDVmxCLGtEQUFRLENBQUNPLGNBaENDLEVBaUNWUCxrREFBUSxDQUFDUSxVQWpDQyxFQWtDVlIsa0RBQVEsQ0FBQ2lCLGdCQWxDQyxFQW1DVmpCLGtEQUFRLENBQUN5QyxVQW5DQyxDQTlUQztBQW1XakJDLFdBQVMsRUFBRTlDLHdEQUFGLHNCQU1ISSxrREFBUSxDQUFDVSxlQU5OLENBbldRO0FBMldqQmlDLFVBQVEsRUFBRS9DLHdEQUFGLHNCQU1GSSxrREFBUSxDQUFDeUMsVUFOUCxDQTNXUztBQW1YakJHLGVBQWEsRUFBRWhELHdEQUFGLHNCQUdNbUIsNERBQVksQ0FBQzhCLGtCQUhuQixFQVFUN0Msa0RBQVEsQ0FBQ2lCLGdCQVJBLENBblhJO0FBNlhqQjZCLGtCQUFnQixFQUFFbEQsd0RBQUYsc0JBWVpJLGtEQUFRLENBQUNZLGFBWkcsRUFhWlosa0RBQVEsQ0FBQ2EsU0FiRyxDQTdYQztBQTRZakJrQyxnQkFBYyxFQUFFbkQsd0RBQUYsc0JBTVZJLGtEQUFRLENBQUNnRCxnQkFOQyxDQTVZRztBQW9aakJDLGFBQVcsRUFBRXJELHdEQUFGLHNCQU1QSSxrREFBUSxDQUFDVSxlQU5GLENBcFpNO0FBNFpqQndDLGdCQUFjLEVBQUV0RCx3REFBRixzQkFNVkksa0RBQVEsQ0FBQ1UsZUFOQztBQTVaRyxDQUFaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUdQO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNeUMsa0JBQWtCLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsNlVBYWxCQyw2REFBSSxDQUFDLEdBQUQsQ0FiYyxDQUF4QjtLQUFNSCxrQjtBQTRCTixJQUFNSSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUF3QztBQUFBOztBQUFBOztBQUFBLE1BQXRDQyxRQUFzQyxRQUF0Q0EsUUFBc0M7O0FBQUEsdUJBQ25DQyw0RUFBYSxDQUFDQyxxREFBRCxDQURzQjtBQUFBLE1BQ2pEQyxVQURpRCxrQkFDMURDLE9BRDBEOztBQUFBLHdCQUVwQ0gsNEVBQWEsQ0FBQ0ksZ0ZBQUQsQ0FGdUI7QUFBQSxNQUVqREMsU0FGaUQsbUJBRTFERixPQUYwRDs7QUFHakUsTUFBTUcsT0FBTyxHQUFHUCxRQUFRLENBQUNPLE9BQXpCO0FBRUEsU0FBTyxNQUFDLGtCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDTDtBQUFLLE9BQUcsRUFBRUMsNkRBQVUsc0JBQUNSLFFBQVEsQ0FBQ08sT0FBViwrRUFBQyxrQkFBa0JFLEdBQW5CLG9GQUFDLHNCQUF3QixDQUF4QixDQUFELDJEQUFDLHVCQUE0QkMsR0FBN0IsQ0FBcEI7QUFDSyxPQUFHLEVBQUMsRUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREssRUFHTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU9ILE9BQVAsYUFBT0EsT0FBUCx1QkFBT0EsT0FBTyxDQUFFSSxJQUFoQixFQUFzQkosT0FBdEIsYUFBc0JBLE9BQXRCLHVCQUFzQkEsT0FBTyxDQUFFSyxNQUEvQixFQUF1Q0wsT0FBdkMsYUFBdUNBLE9BQXZDLHVCQUF1Q0EsT0FBTyxDQUFFTSxJQUFoRCxDQUhLLEVBSUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFVTixPQUFWLGFBQVVBLE9BQVYsdUJBQVVBLE9BQU8sQ0FBRU8sTUFBbkIsQ0FKSyxFQUtMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdGQUFEO0FBQWMsV0FBTyxFQUFFUCxPQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFSVAsUUFBUSxDQUFDZSxNQUFULEtBQW9CLENBQXBCLElBQXlCLG1FQUN6QixNQUFDLHdEQUFEO0FBQ0ksUUFBSSxFQUFFLE9BRFY7QUFFSSxXQUFPLEVBQUUsVUFGYjtBQUdJLFdBQU8sZ01BQUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ0RULFNBQVMsQ0FBQ3hCLGNBQVYsQ0FBeUI7QUFDN0JpQyxzQkFBTSxFQUFFLENBRHFCO0FBRTdCQyxrQkFBRSxFQUFFaEIsUUFBUSxDQUFDZ0I7QUFGZ0IsZUFBekIsQ0FEQzs7QUFBQTtBQUtQYix3QkFBVSxDQUFDYyxPQUFYOztBQUxPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUYsRUFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBVUVDLDBEQUFFLENBQUMsTUFBRCxDQVZKLENBRHlCLEVBWXhCLE1BQUMsNERBQUQ7QUFDRyxZQUFRLEVBQUUscUJBQUNsQixRQUFELGFBQUNBLFFBQUQsdUJBQUNBLFFBQVEsQ0FBRW1CLE1BQVgsK0RBQXFCLENBQXJCLEtBQTJCLENBRHhDO0FBRUcsUUFBSSxFQUFFLE9BRlQ7QUFHRyxXQUFPLGdNQUFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNEYixTQUFTLENBQUMzQixpQkFBVixDQUE0QjtBQUNoQzRCLHVCQUFPLEVBQVBBLE9BRGdDO0FBRWhDWSxzQkFBTSxFQUFFLENBQUM7QUFGdUIsZUFBNUIsQ0FEQzs7QUFBQTtBQUtQaEIsd0JBQVUsQ0FBQ2MsT0FBWDs7QUFMTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFGLEVBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVVBLE1BQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZBLENBWndCLEVBdUJ4QmpCLFFBQVEsQ0FBQ21CLE1BdkJlLEVBd0J6QixNQUFDLDREQUFEO0FBQ0ksUUFBSSxFQUFFLE9BRFY7QUFFSSxXQUFPLGdNQUFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNEYixTQUFTLENBQUMzQixpQkFBVixDQUE0QjtBQUNoQzRCLHVCQUFPLEVBQVBBO0FBRGdDLGVBQTVCLENBREM7O0FBQUE7QUFJUEosd0JBQVUsQ0FBQ2MsT0FBWDs7QUFKTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFGLEVBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVNFLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRGLENBeEJ5QixDQUExQixJQW1DTyxtRUFDTixNQUFDLHdEQUFEO0FBQ0ksU0FBSyxFQUFFO0FBQUNHLGlCQUFXLEVBQUU7QUFBZCxLQURYO0FBRUksUUFBSSxFQUFFLE9BRlY7QUFHSSxXQUFPLEVBQUUsVUFIYjtBQUlJLFNBQUssRUFBRSxXQUpYO0FBS0ksV0FBTyxnTUFBRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDRGQsU0FBUyxDQUFDeEIsY0FBVixDQUF5QjtBQUM3QnVDLHdCQUFRLEVBQUUsQ0FEbUI7QUFFN0JMLGtCQUFFLEVBQUVoQixRQUFRLENBQUNnQjtBQUZnQixlQUF6QixDQURDOztBQUFBO0FBS1BiLHdCQUFVLENBQUNjLE9BQVg7O0FBTE87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRixFQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FZRUMsMERBQUUsQ0FBQyxJQUFELENBWkosQ0FETSxFQWNOLE1BQUMsd0RBQUQ7QUFDSSxRQUFJLEVBQUUsT0FEVjtBQUVJLFdBQU8sRUFBRSxVQUZiO0FBR0ksV0FBTyxnTUFBRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDRFosU0FBUyxDQUFDeEIsY0FBVixDQUF5QjtBQUM3QmlDLHNCQUFNLEVBQUUsQ0FEcUI7QUFFN0JDLGtCQUFFLEVBQUVoQixRQUFRLENBQUNnQjtBQUZnQixlQUF6QixDQURDOztBQUFBO0FBS1BiLHdCQUFVLENBQUNjLE9BQVg7O0FBTE87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRixFQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FVRUMsMERBQUUsQ0FBQyxPQUFELENBVkosQ0FkTSxDQXJDVixDQUxLLENBQVA7QUFzRUQsQ0EzRU07O0dBQU1uQixXO1VBQ21CRSxvRSxFQUNEQSxvRTs7O01BRmxCRixXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNdUIsU0FBUyxHQUFHMUIseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwrR0FPVDBCLHNEQUFPLENBQUNDLEdBUEMsQ0FBZjtLQUFNRixTO0FBVU4sSUFBTUcsVUFBVSxHQUFHN0IseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxxSUFBaEI7TUFBTTRCLFU7QUFhTixJQUFNQyxPQUFPLEdBQUc5Qix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHFNQUFiO01BQU02QixPO0FBY04sSUFBTUMsU0FBUyxHQUFHL0IseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxxRkFBZjtNQUFNOEIsUztBQU1iLElBQU1DLFNBQVMsR0FBR2hDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsc1JBVUMwQixzREFBTyxDQUFDTSxNQUFSLENBQWUsR0FBZixDQVZELENBQWY7TUFBTUQsUztBQXNCQyxJQUFNRSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQUE7O0FBQzdCLE1BQU1DLE1BQU0sR0FBR0MsOERBQVMsRUFBeEI7O0FBRDZCLHVCQUVDL0IsMkVBQWEsQ0FBQ2dDLDZFQUFELENBRmQ7QUFBQSxNQUViQyxVQUZhLGtCQUV0QjlCLE9BRnNCOztBQUFBLHdCQUdRSCwyRUFBYSxDQUFDa0MsdUVBQUQsQ0FIckI7QUFBQSxNQUdiQyxpQkFIYSxtQkFHdEJoQyxPQUhzQjs7QUFBQSx3QkFJMkJILDJFQUFhLENBQUNDLG9EQUFELENBSnhDO0FBQUEsTUFJZm1DLFFBSmUsbUJBSXRCQyxLQUpzQjtBQUFBLE1BSUluQyxVQUpKLG1CQUlMQyxPQUpLO0FBQUEsTUFJZ0JtQyxPQUpoQixtQkFJZ0JBLE9BSmhCOztBQU03QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSSxDQUFDSCxRQUFRLENBQUNJLElBQVQsQ0FBY3pCLEVBQW5CLEVBQXVCO0FBQ3JCYixnQkFBVSxDQUFDdUMsWUFBWDtBQUNEO0FBQ0YsR0FKUSxFQUlOLEVBSk0sQ0FBVDtBQU1BLE1BQU1DLFdBQVcsR0FBR04sUUFBUSxDQUFDTyxlQUFULENBQXlCUCxRQUF6QixDQUFwQjtBQUNBLE1BQU1RLFFBQVEsR0FBRywwQkFBQVIsUUFBUSxDQUFDUyxXQUFULGdGQUFzQkMsSUFBdEIsQ0FBMkIsVUFBQUMsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ2hDLEVBQUYsS0FBU3FCLFFBQVEsQ0FBQ1ksSUFBVCxDQUFjQyxtQkFBM0I7QUFBQSxHQUE1QixNQUErRSxFQUFoRztBQUNBLE1BQU1DLFlBQVksR0FBR2QsUUFBUSxDQUFDZSxnQkFBVCxDQUEwQmYsUUFBMUIsQ0FBckI7QUFDQSxNQUFNZ0IsbUJBQW1CLEdBQUloQixRQUFRLENBQUNZLElBQVQsQ0FBY0ssVUFBZCxLQUE2QkMsK0RBQWMsQ0FBQ0MsUUFBNUMsSUFBeURuQixRQUFRLENBQUNvQixhQUFULENBQXVCQyxNQUF2QixDQUE4QixVQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBYztBQUNoSSxRQUFJRCxHQUFHLEdBQUdFLFVBQVUsQ0FBQ0QsR0FBRCxhQUFDQSxHQUFELHVCQUFDQSxHQUFHLENBQUVFLFVBQU4sQ0FBaEIsSUFBcUNYLFlBQVksR0FBR1UsVUFBVSxDQUFDRCxHQUFELGFBQUNBLEdBQUQsdUJBQUNBLEdBQUcsQ0FBRUcsUUFBTixDQUFsRSxFQUFtRjtBQUNqRixhQUFPRixVQUFVLENBQUNELEdBQUQsYUFBQ0EsR0FBRCx1QkFBQ0EsR0FBRyxDQUFFRSxVQUFOLENBQWpCO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsYUFBT0gsR0FBUDtBQUNEO0FBQ0YsR0FOcUYsRUFNbkZFLFVBQVUsMEJBQUN4QixRQUFRLENBQUNvQixhQUFULENBQXVCcEIsUUFBUSxDQUFDb0IsYUFBVCxDQUF1Qk8sTUFBdkIsR0FBZ0MsQ0FBdkQsQ0FBRCwwREFBQyxzQkFBMkRGLFVBQTVELENBTnlFLENBQTFELElBTStELENBTjNGO0FBT0EsTUFBTUcsWUFBWSxHQUFHZCxZQUFZLEdBQUdFLG1CQUFmLEdBQXFDYSxxRUFBZSxDQUFDN0IsUUFBUSxDQUFDWSxJQUFULENBQWNrQixVQUFmLENBQXBELEdBQWlGRCxxRUFBZSxDQUFDN0IsUUFBUSxDQUFDWSxJQUFULENBQWNtQixPQUFmLENBQXJIO0FBQ0EsTUFBTUMsWUFBWSxHQUFHSixZQUFZLEdBQUcsSUFBcEM7QUFFQSxTQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDTCxNQUFDLCtFQUFEO0FBQ0ksU0FBSyxFQUFFLE1BRFg7QUFFSSxZQUFRLEVBQUUsb0JBQU07QUFDZDlELGdCQUFVLENBQUNtRSxjQUFYLENBQTBCQyxtREFBWSxDQUFDdkUsUUFBdkM7QUFDQSxhQUFPLElBQVA7QUFDRCxLQUxMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESyxFQVFILENBQUMsQ0FBQ3VDLE9BQU8sQ0FBQzdGLHNEQUFHLENBQUNxQyxnQkFBTCxDQUFULElBQW1DLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFwQyxJQUEwRDtBQUFLLFNBQUssRUFBRTtBQUFDeUYsWUFBTSxFQUFFO0FBQVQsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUnRELEVBU0wsTUFBQyx3RUFBRDtBQUNJLGFBQVMsRUFBRSxvQkFEZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0UsTUFBQywwREFBRDtBQUFPLEtBQUMsRUFBRSxFQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixFQUlFLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywwREFBRDtBQUFPLEtBQUMsRUFBRSxFQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVHdEQseURBQUUsQ0FBRW1CLFFBQVEsQ0FBQ1ksSUFBVCxDQUFjSyxVQUFkLEtBQTZCQywrREFBYyxDQUFDa0IsSUFBNUMsSUFBb0QsTUFBckQsSUFBZ0UsTUFBakUsQ0FGTCxDQUpGLEVBUUUsTUFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUNNOUIsV0FBVyxDQUFDK0IsY0FEbEIsRUFERixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFDTS9CLFdBQVcsQ0FBQ2hDLElBRGxCLGNBQzBCZ0MsV0FBVyxDQUFDZ0Msa0JBRHRDLEVBSkYsQ0FERixFQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZEQUFEO0FBQ0ksV0FBTyxnTUFBRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNXekMsVUFBVSxDQUFDMEMsU0FBWCxFQURYOztBQUFBO0FBQ0RDLGlCQURDOztBQUVQLGtCQUFJQSxHQUFKLEVBQVM7QUFDUDFFLDBCQUFVLENBQUMyRSxPQUFYLENBQW1CLENBQUMsV0FBRCxFQUFjRCxHQUFkLENBQW5CO0FBQ0Q7O0FBSk07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRixFQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FRRSxNQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixDQURGLENBVEYsQ0FSRixFQThCRSxNQUFDLDBEQUFEO0FBQU8sS0FBQyxFQUFFL0UsOERBQUksQ0FBQyxHQUFELENBQWQ7QUFDTyxLQUFDLEVBQUUsRUFEVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBOUJGLEVBZ0NFLE1BQUMsMERBQUQ7QUFBTyxLQUFDLEVBQUUsRUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBaENGLEVBaUNFLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywwREFBRDtBQUFPLEtBQUMsRUFBRSxFQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVHb0IseURBQUUsQ0FBQyxNQUFELENBRkwsQ0FqQ0YsRUFxQ0UsTUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVMyQixRQUFRLENBQUNsQyxJQUFsQixDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFTa0MsUUFBUSxDQUFDMUIsTUFBbEIsQ0FGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZEQUFEO0FBQ0ksV0FBTyxnTUFBRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNXaUIsaUJBQWlCLENBQUN3QyxTQUFsQixFQURYOztBQUFBO0FBQ0RDLGlCQURDOztBQUVQLGtCQUFJQSxHQUFKLEVBQVM7QUFDUDFFLDBCQUFVLENBQUMyRSxPQUFYLENBQW1CLENBQUMscUJBQUQsRUFBd0JELEdBQXhCLENBQW5CO0FBQ0Q7O0FBSk07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRixFQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FRRSxNQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixDQURGLENBSEYsQ0FyQ0YsRUFxREUsTUFBQywwREFBRDtBQUFPLEtBQUMsRUFBRS9FLDhEQUFJLENBQUMsR0FBRCxDQUFkO0FBQ08sS0FBQyxFQUFFLEVBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXJERixFQXVERSxNQUFDLDBEQUFEO0FBQU8sS0FBQyxFQUFFLEVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXZERixFQXdERSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMERBQUQ7QUFBTyxLQUFDLEVBQUUsRUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFR29CLHlEQUFFLENBQUMsT0FBRCxDQUZMLEVBR0UsTUFBQywwREFBRDtBQUFPLEtBQUMsRUFBRSxFQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBU0EseURBQUUsQ0FBQyxRQUFELENBQVgsRUFBdUI2RCwrREFBUyxDQUFDMUMsUUFBUSxDQUFDSSxJQUFULENBQWN1QyxxQkFBZixDQUFoQyxDQUpGLENBeERGLEVBOERFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDBEQUFEO0FBQU8sS0FBQyxFQUFFLEVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyw0REFBRDtBQUNJLFNBQUssRUFBRTtBQUFDQyxlQUFTLEVBQUUsS0FBWjtBQUFtQkMsa0JBQVksRUFBRTtBQUFqQyxLQURYO0FBRUksU0FBSyxFQUFFaEUseURBQUUsQ0FBQyxFQUFELENBRmI7QUFHSSxTQUFLLEVBQUVtQixRQUFRLENBQUNZLElBQVQsQ0FBY2tCLFVBSHpCO0FBSUksWUFBUSxFQUFFLGtCQUFBZ0IsQ0FBQyxFQUFJO0FBQ2JoRixnQkFBVSxDQUFDMkUsT0FBWCxDQUFtQixDQUFDLFlBQUQsRUFBZUssQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQXhCLENBQW5CO0FBQ0QsS0FOTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0E5REYsRUF5RUUsTUFBQywwREFBRDtBQUFPLEtBQUMsRUFBRXZGLDhEQUFJLENBQUMsR0FBRCxDQUFkO0FBQ08sS0FBQyxFQUFFLEVBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXpFRixFQTJFRSxNQUFDLDBEQUFEO0FBQU8sS0FBQyxFQUFFLEVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTNFRixFQTRFRSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBU29CLHlEQUFFLENBQUMsT0FBRCxDQUFYLENBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVM2RCwrREFBUyxDQUFDNUIsWUFBRCxDQUFsQixDQUZGLENBNUVGLEVBZ0ZHRSxtQkFBbUIsR0FBRyxDQUF0QixJQUEyQixNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUMxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVNuQyx5REFBRSxDQUFDLElBQUQsQ0FBWCxDQUQwQixFQUUxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVM2RCwrREFBUyxDQUFDMUIsbUJBQUQsQ0FBbEIsQ0FGMEIsQ0FoRjlCLEVBb0ZFLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFTbkMseURBQUUsQ0FBQyxPQUFELENBQVgsQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUzZELCtEQUFTLENBQUMxQyxRQUFRLENBQUNZLElBQVQsQ0FBY2tCLFVBQWYsRUFBMkIsR0FBM0IsQ0FBbEIsQ0FGRixDQXBGRixFQXdGRSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBU2pELHlEQUFFLENBQUMsS0FBRCxDQUFYLENBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVM2RCwrREFBUyxDQUFDMUMsUUFBUSxDQUFDWSxJQUFULENBQWNtQixPQUFmLENBQWxCLENBRkYsQ0F4RkYsRUE0RkUsTUFBQyxTQUFEO0FBQ0ksU0FBSyxFQUFFO0FBQUNrQixjQUFRLEVBQUU7QUFBWCxLQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVNwRSx5REFBRSxDQUFDLE1BQUQsQ0FBWCxDQUhGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFTNkQsK0RBQVMsQ0FBQ2QsWUFBRCxDQUFsQixDQUpGLENBNUZGLENBVEssRUE0R0wsTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVMvQyx5REFBRSxDQUFDLE1BQUQsQ0FBWCxFQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBT0EseURBQUUsMEJBQUNtQixRQUFRLENBQUNrRCxhQUFULENBQXVCeEMsSUFBdkIsQ0FBNEIsVUFBQUMsQ0FBQztBQUFBOztBQUFBLFdBQUlBLENBQUMsQ0FBQ3dDLElBQUYsK0JBQVduRCxRQUFRLENBQUNJLElBQVQsQ0FBY2dELFFBQXpCLDBEQUFXLHNCQUF3QkMsU0FBbkMsQ0FBSjtBQUFBLEdBQTdCLENBQUQsMERBQUMsc0JBQWdGL0UsSUFBakYsQ0FBVCxDQURGLENBREYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVNPLHlEQUFFLENBQUMsYUFBRCxDQUFYLEVBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPNkQsK0RBQVMsQ0FBQ1YsWUFBRCxDQUFoQixDQURGLENBSkYsRUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2RUFBRDtBQUNJLFdBQU8sRUFBRTlCLE9BQU8sQ0FBQzdGLHNEQUFHLENBQUN3QyxTQUFMLENBRHBCO0FBRUksV0FBTyxnTUFBRTtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0R5Ryx3QkFEQyxtQ0FFRnRELFFBQVEsQ0FBQ1ksSUFGUDtBQUdMb0IsNEJBQVksRUFBWkEsWUFISztBQUlMSiw0QkFBWSxFQUFaQSxZQUpLO0FBS0xaLG1DQUFtQixFQUFuQkEsbUJBTEs7QUFNTHVDLHdCQUFRLEVBQUV6QyxZQU5MO0FBT0wwQyxnQ0FBZ0IsNEJBQUV4RCxRQUFRLENBQUNJLElBQVQsQ0FBY2dELFFBQWhCLDJEQUFFLHVCQUF3QkMsU0FQckM7QUFRTEksNkJBQWEsRUFBRXpELFFBQVEsQ0FBQzBELFlBQVQsQ0FBc0JDLEdBQXRCLENBQTBCLFVBQUFoRCxDQUFDO0FBQUE7O0FBQUEseUJBQUs7QUFDN0NpRCx5QkFBSyxFQUFFakQsQ0FBQyxDQUFDN0IsTUFEb0M7QUFFN0MrRSw2QkFBUyxnQkFBRWxELENBQUMsQ0FBQ3pDLE9BQUosK0NBQUUsV0FBV1MsRUFGdUI7QUFHN0NULDJCQUFPLEVBQUV5QyxDQUFDLENBQUN6QztBQUhrQyxtQkFBTDtBQUFBLGlCQUEzQjtBQVJWO0FBQUE7QUFBQSxxQkFjV0osVUFBVSxDQUFDZ0csTUFBWCxtQkFDYlIsVUFEYSxFQWRYOztBQUFBO0FBY0RkLGlCQWRDOztBQUFBLG9CQWlCSEEsR0FqQkcsYUFpQkhBLEdBakJHLHlDQWlCSEEsR0FBRyxDQUFFM0YsU0FqQkYsbURBaUJILGVBQWdCOEIsRUFqQmI7QUFBQTtBQUFBO0FBQUE7O0FBa0JMb0YsOEZBQVcsQ0FBQyxZQUFELENBQVgsQ0FsQkssQ0FtQkw7O0FBQ01DLG9CQXBCRCxHQW9CVUMsa0VBQVksQ0FBQztBQUFDQyx1QkFBTyxFQUFFMUIsR0FBRixhQUFFQSxHQUFGLDBDQUFFQSxHQUFHLENBQUUzRixTQUFQLG9EQUFFLGdCQUFnQjhCO0FBQTFCLGVBQUQsQ0FwQnRCO0FBQUE7QUFBQSxxQkFxQkNlLE1BQU0sQ0FBQ3lFLE9BQVAsZUFBc0JILE1BQXRCLGlCQUF1Q0EsTUFBdkMsRUFyQkQ7O0FBQUE7QUFzQkxsRyx3QkFBVSxDQUFDc0csU0FBWDtBQUNBdEcsd0JBQVUsQ0FBQ2MsT0FBWDs7QUF2Qks7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRixFQUZYO0FBNEJJLFdBQU8sRUFBRSxXQTVCYjtBQTZCSSxTQUFLLEVBQUUsV0E3Qlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQThCRUMseURBQUUsQ0FBQyxNQUFELENBOUJKLENBREYsQ0FQRixDQTVHSyxFQXFKTCxNQUFDLHdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFySkssRUFzSkwsTUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdEpLLENBQVA7QUF3SkQsQ0FqTE07O0dBQU1ZLFM7VUFDSUUsc0QsRUFDZS9CLG1FLEVBQ09BLG1FLEVBQ21CQSxtRTs7O01BSjdDNkIsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcY2FydC5qcy44MDVjOTFhODZiNDVhOWQzMTQ3NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtncWx9IGZyb20gJ2Fwb2xsby1ib29zdCdcclxuaW1wb3J0IHtmcmFnbWVudH0gZnJvbSAnLi9mcmFnbWVudCdcclxuaW1wb3J0IHtEaWN0VHlwZUVudW19IGZyb20gJy4uLy4uL3NzX2NvbW1vbi9lbnVtJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFVzZXJMaXN0RG9jID0gZ3FsYFxyXG4gICAgcXVlcnkgcmVmYWN0b3JlZDY0MygkZGF0YTogVXNlckxpc3RJbnB1dCEpIHtcclxuICAgICAgICB1c2VyTGlzdCh1c2VyTGlzdElucHV0OiAkZGF0YSkge1xyXG4gICAgICAgICAgICBsaXN0IHtcclxuICAgICAgICAgICAgICAgIG9yZGVyQ29pbk5leHRNb250aFxyXG4gICAgICAgICAgICAgICAgb3JkZXJDb2luQ3VycmVudE1vbnRoXHJcbiAgICAgICAgICAgICAgICBvcmRlckFtb3VudEN1cnJlbnRZZWFyXHJcbiAgICAgICAgICAgICAgICAuLi51c2VySW5mb1xyXG4gICAgICAgICAgICAgICAgLi4uVXNlckZpZWxkc1xyXG4gICAgICAgICAgICAgICAgLi4ub3JkZXJJbmZvXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdG90YWxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmcmFnbWVudCBvcmRlckluZm8gb24gVXNlcntcclxuICAgICAgICBvcmRlckluZm97XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgICAgICB1cGRhdGVUaW1lXHJcbiAgICAgICAgICAgIGlzRGVsZXRlXHJcbiAgICAgICAgICAgIG51bWJlclxyXG4gICAgICAgICAgICBzdGF0ZVxyXG4gICAgICAgICAgICBhY3R1YWxseVBhaWRcclxuICAgICAgICAgICAgYWRkcmVzc0lkXHJcbiAgICAgICAgICAgIHBheW1lbnRNZXRob2RDYXJkSWRcclxuICAgICAgICAgICAgc3VidG90YWxcclxuICAgICAgICAgICAgY291cG9uRGlzY291bnRcclxuICAgICAgICAgICAgdmlwRGlzY291bnRcclxuICAgICAgICAgICAgdHJhbnNwb3J0YXRpb25Db3N0c1xyXG4gICAgICAgICAgICBzYWxlVGF4XHJcbiAgICAgICAgICAgIG9yZGVySWRcclxuICAgICAgICAgICAgZGlzY291bnRQcm9kdWN0VG90YWxcclxuICAgICAgICAgICAgZmluaXNoVGltZVxyXG4gICAgICAgICAgICBwaWNrVXBUaW1lXHJcbiAgICAgICAgICAgIHBpY2tVcFR5cGVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmcmFnbWVudCBVc2VyRmllbGRzIG9uIFVzZXIge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgbmFtZVxyXG4gICAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgICB1cGRhdGVUaW1lXHJcbiAgICAgICAgaXNEZWxldGVcclxuICAgICAgICBwYXNzd29yZFxyXG4gICAgICAgIHR5cGVcclxuICAgIH1cclxuICAgIGZyYWdtZW50IHVzZXJJbmZvIG9uIFVzZXJ7XHJcbiAgICAgICAgdXNlckluZm97XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgICAgICB1cGRhdGVUaW1lXHJcbiAgICAgICAgICAgIGlzRGVsZXRlXHJcbiAgICAgICAgICAgIHVzZXJJZFxyXG4gICAgICAgICAgICBwaG9uZVxyXG4gICAgICAgICAgICBlbWFpbFxyXG4gICAgICAgICAgICB1c2VyTGV2ZWxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBnZXREYXRhQ29uZmlnID0gZ3FsYFxyXG4gICAgcXVlcnkgKCRkYXRhOiBEYXRhQ29uZmlnSXRlbUlucHV0KSB7XHJcbiAgICAgICAgZ2V0RGF0YUNvbmZpZyhkYXRhQ29uZmlnSW5wdXQ6ICRkYXRhKSB7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgICAgICB1cGRhdGVUaW1lXHJcbiAgICAgICAgICAgIGlzRGVsZXRlXHJcbiAgICAgICAgICAgIHR5cGVcclxuICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgcmVtYXJrXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgaG9tZUNhcm91c2VsSW1ncyA9IGdxbGBcclxuICAgIHF1ZXJ5IHF1ZXJ5X3F1ZXJ5X3Rlc3RMb25nMTM3KCRkYXRhOiBEYXRhQ29uZmlnSXRlbUlucHV0KSB7XHJcbiAgICAgICAgaG9tZUNhcm91c2VsSW1ncyhkYXRhQ29uZmlnSW5wdXQ6ICRkYXRhKSB7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgICAgICB1cGRhdGVUaW1lXHJcbiAgICAgICAgICAgIGlzRGVsZXRlXHJcbiAgICAgICAgICAgIHR5cGVcclxuICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgcmVtYXJrXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgY2F0ZWdvcnlMaXN0ID0gZ3FsYFxyXG4gICAgcXVlcnkgcXVlcnlfcXVlcnlfdGVzdExvbmc1NjUoJGRhdGE6IENhdGVnb3J5TGlzdElucHV0KSB7XHJcbiAgICAgICAgY2F0ZWdvcnlMaXN0KGRhdGE6ICRkYXRhKSB7XHJcbiAgICAgICAgICAgIHRvdGFsXHJcbiAgICAgICAgICAgIGxpc3Qge1xyXG4gICAgICAgICAgICAgICAgLi4uQ2F0ZWdvcnlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuQ2F0ZWdvcnlGaWVsZHN9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBkb2MgPSB7XHJcbiAgZ2V0VXNlckxpc3REb2MsXHJcbiAgY2F0ZWdvcnlMaXN0LFxyXG4gIGdldERhdGFDb25maWcsXHJcbiAgaG9tZUNhcm91c2VsSW1ncyxcclxuICByZWdpc3RlclVzZXI6IGdxbGBcclxuICAgICAgbXV0YXRpb24gbXV0YXRpb25fcmVnaXN0ZXJVc2U5OTgoJGRhdGE6IFVzZXJJdGVtSW5wdXQpIHtcclxuICAgICAgICAgIHJlZ2lzdGVyVXNlcihkYXRhOiAkZGF0YSkge1xyXG4gICAgICAgICAgICAgIHRva2VuXHJcbiAgICAgICAgICAgICAgcmVmcmVzaHRva2VuXHJcbiAgICAgICAgICAgICAgdXNlciB7XHJcbiAgICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgY3JlYXRlVGltZVxyXG4gICAgICAgICAgICAgICAgICB1cGRhdGVUaW1lXHJcbiAgICAgICAgICAgICAgICAgIGlzRGVsZXRlXHJcbiAgICAgICAgICAgICAgICAgIHBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgICAgIHR5cGVcclxuICAgICAgICAgICAgICAgICAgdXNlckluZm8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgYCxcclxuICByZWZyZXNoVG9rZW46IGdxbGBcclxuICAgICAgcXVlcnkgcmVmcmVzaFRva2VuKCRkYXRhOiBTdHJpbmchKSB7XHJcbiAgICAgICAgICByZWZyZXNoVG9rZW4ocmVmcmVzaHRva2VuOiAkZGF0YSkge1xyXG4gICAgICAgICAgICAgIHJlZnJlc2h0b2tlblxyXG4gICAgICAgICAgICAgIHRva2VuXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICBgLFxyXG4gIGxvZ2luOiBncWxgXHJcbiAgICAgIHF1ZXJ5IGxvZ2luKCRkYXRhOiBVc2VySXRlbUlucHV0KSB7XHJcbiAgICAgICAgICBsb2dpbih1c2VyOiAkZGF0YSkge1xyXG4gICAgICAgICAgICAgIHRva2VuXHJcbiAgICAgICAgICAgICAgcmVmcmVzaHRva2VuXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICBgLFxyXG4gIG9uZVVzZXI6IGdxbGBcclxuICAgICAgcXVlcnkgb25lVXNlciB7XHJcbiAgICAgICAgICBvbmVVc2VyIHtcclxuICAgICAgICAgICAgICAuLi5Vc2VyRmllbGRzXHJcbiAgICAgICAgICAgICAgdXNlckluZm8ge1xyXG4gICAgICAgICAgICAgICAgICAuLi5Vc2VySW5mb0ZpZWxkc1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAke2ZyYWdtZW50LlVzZXJJbmZvRmllbGRzfVxyXG4gICAgICAke2ZyYWdtZW50LlVzZXJGaWVsZHN9XHJcbiAgYCxcclxuICBvcmRlckxpc3Q6IGdxbGBcclxuICAgICAgcXVlcnkgb3JkZXJMaXN0KCRkYXRhOiBPcmRlcklucHV0KXtcclxuICAgICAgICAgIG9yZGVyTGlzdCAob3JkZXJJbnB1dDogJGRhdGEsIGZyb21Vc2VyOiB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgbGlzdCB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLk9yZGVySW5mb0ZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICByT3JkZXJQcm9kdWN0IHtcclxuICAgICAgICAgICAgICAgICAgICAgIC4uLlJPcmRlclByb2R1Y3RGaWVsZHNcclxuICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC4uLlByb2R1Y3RGaWVsZHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5JbWdGaWVsZHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJHtmcmFnbWVudC5PcmRlckluZm9GaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuUk9yZGVyUHJvZHVjdEZpZWxkc31cclxuICAgICAgJHtmcmFnbWVudC5Qcm9kdWN0RmllbGRzfVxyXG4gICAgICAke2ZyYWdtZW50LkltZ0ZpZWxkc31cclxuICBgLFxyXG4gIG9yZGVyRGV0YWlsOiBncWxgXHJcbiAgICAgIHF1ZXJ5ICgkaWQ6IFN0cmluZykge1xyXG4gICAgICAgICAgc2VsZkFkZHJlc3M6IGdldERhdGFDb25maWcoZGF0YUNvbmZpZ0lucHV0OiB7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCIke0RpY3RUeXBlRW51bS5TZWxmQWRkcmVzc31cIlxyXG4gICAgICAgICAgfSkge1xyXG4gICAgICAgICAgICAgIC4uLkRhdGFDb25maWdGaWVsZHNcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIG9yZGVyRGV0YWlsKGlkOiAkaWQpIHtcclxuICAgICAgICAgICAgICAuLi5PcmRlckluZm9GaWVsZHNcclxuICAgICAgICAgICAgICByT3JkZXJQcm9kdWN0IHtcclxuICAgICAgICAgICAgICAgICAgLi4uUk9yZGVyUHJvZHVjdEZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICBwcm9kdWN0IHtcclxuICAgICAgICAgICAgICAgICAgICAgIC4uLlByb2R1Y3RGaWVsZHNcclxuICAgICAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uSW1nRmllbGRzXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgdXNlciB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLlVzZXJGaWVsZHNcclxuICAgICAgICAgICAgICAgICAgdXNlckluZm8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgLi4uVXNlckluZm9GaWVsZHNcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB1c2VyQWRkcmVzcyB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLlVzZXJBZGRyZXNzRmllbGRzXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHVzZXJQYXlDYXJkIHtcclxuICAgICAgICAgICAgICAgICAgLi4uVXNlclBheUNhcmRGaWVsZHNcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJHtmcmFnbWVudC5EYXRhQ29uZmlnRmllbGRzfVxyXG4gICAgICAke2ZyYWdtZW50Lk9yZGVySW5mb0ZpZWxkc31cclxuICAgICAgJHtmcmFnbWVudC5ST3JkZXJQcm9kdWN0RmllbGRzfVxyXG4gICAgICAke2ZyYWdtZW50LlByb2R1Y3RGaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuSW1nRmllbGRzfVxyXG4gICAgICAke2ZyYWdtZW50LlVzZXJGaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuVXNlckluZm9GaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuVXNlclBheUNhcmRGaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuVXNlckFkZHJlc3NGaWVsZHN9XHJcbiAgYCxcclxuICB1cGRhdGVQYXNzd29yZDogZ3FsYFxyXG4gICAgICBtdXRhdGlvbiAoJGRhdGE6IFVwZGF0ZVBhc3N3b3JkSW5wdXQpIHtcclxuICAgICAgICAgIHVwZGF0ZVBhc3N3b3JkIChkYXRhOiAkZGF0YSkge1xyXG4gICAgICAgICAgICAgIHVzZXIge1xyXG4gICAgICAgICAgICAgICAgICAuLi5Vc2VyRmllbGRzXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGF1dGhCb2R5IHtcclxuICAgICAgICAgICAgICAgICAgdG9rZW5cclxuICAgICAgICAgICAgICAgICAgcmVmcmVzaHRva2VuXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICR7ZnJhZ21lbnQuVXNlckZpZWxkc31cclxuICBgLFxyXG4gIHBheUNhcmRMaXN0T25lVXNlcjogZ3FsYFxyXG4gICAgICBxdWVyeSB7XHJcbiAgICAgICAgICBwYXlDYXJkTGlzdE9uZVVzZXIge1xyXG4gICAgICAgICAgICAgIC4uLlVzZXJQYXlDYXJkRmllbGRzXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJHtmcmFnbWVudC5Vc2VyUGF5Q2FyZEZpZWxkc31cclxuICBgLFxyXG4gIHVzZXJQYXlDYXJkOiBncWxgXHJcbiAgICAgIHF1ZXJ5ICgkZGF0YTogVXNlclBheUNhcmRJdGVtSW5wdXQpIHtcclxuICAgICAgICAgIHVzZXJQYXlDYXJkICh1c2VyUGF5Q2FyZDogJGRhdGEpIHtcclxuICAgICAgICAgICAgICAuLi5Vc2VyUGF5Q2FyZEZpZWxkc1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICR7ZnJhZ21lbnQuVXNlclBheUNhcmRGaWVsZHN9XHJcbiAgYCxcclxuICBzYXZlVXNlclBheUNhcmQ6IGdxbGBcclxuICAgICAgbXV0YXRpb24gKCRkYXRhOiBVc2VyUGF5Q2FyZEl0ZW1JbnB1dCl7XHJcbiAgICAgICAgICBzYXZlVXNlclBheUNhcmQgKHVzZXJQYXlDYXJkOiAkZGF0YSkge1xyXG4gICAgICAgICAgICAgIC4uLlVzZXJQYXlDYXJkRmllbGRzXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJHtmcmFnbWVudC5Vc2VyUGF5Q2FyZEZpZWxkc31cclxuICBgLFxyXG4gIHNldFVzZXJQYXlDYXJkRGVmYXVsdDogZ3FsYFxyXG4gICAgICBtdXRhdGlvbiAoJGRhdGE6IFVzZXJQYXlDYXJkSXRlbUlucHV0KSB7XHJcbiAgICAgICAgICBzZXRVc2VyUGF5Q2FyZERlZmF1bHQgKHVzZXJQYXlDYXJkOiAkZGF0YSkge1xyXG4gICAgICAgICAgICAgIC4uLlVzZXJQYXlDYXJkRmllbGRzXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJHtmcmFnbWVudC5Vc2VyUGF5Q2FyZEZpZWxkc31cclxuICBgLFxyXG4gIHBpY2t1cEFkZHJlc3M6IGdxbGBcclxuICAgICAgcXVlcnkge1xyXG4gICAgICAgICAgZ2V0RGF0YUNvbmZpZyhkYXRhQ29uZmlnSW5wdXQ6IHtcclxuICAgICAgICAgICAgICB0eXBlOiBcIiR7RGljdFR5cGVFbnVtLlNlbGZBZGRyZXNzfVwiXHJcbiAgICAgICAgICB9KSB7XHJcbiAgICAgICAgICAgICAgLi4uRGF0YUNvbmZpZ0ZpZWxkc1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgb25lVXNlciB7XHJcbiAgICAgICAgICAgICAgLi4uVXNlckZpZWxkc1xyXG4gICAgICAgICAgICAgIHVzZXJJbmZvIHtcclxuICAgICAgICAgICAgICAgICAgLi4uVXNlckluZm9GaWVsZHNcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJHtmcmFnbWVudC5Vc2VySW5mb0ZpZWxkc31cclxuICAgICAgJHtmcmFnbWVudC5EYXRhQ29uZmlnRmllbGRzfVxyXG4gICAgICAke2ZyYWdtZW50LlVzZXJGaWVsZHN9XHJcbiAgYCxcclxuICB1cGRhdGVVc2VySW5mbzogZ3FsYFxyXG4gICAgICBtdXRhdGlvbiAoJHVzZXJJbmZvOiBVc2VySW5mb0l0ZW1JbnB1dCkge1xyXG4gICAgICAgICAgdXBkYXRlVXNlckluZm8gKHVzZXJJbmZvOiAkdXNlckluZm8pIHtcclxuICAgICAgICAgICAgICAuLi5Vc2VySW5mb0ZpZWxkc1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICR7ZnJhZ21lbnQuVXNlckluZm9GaWVsZHN9XHJcbiAgYCxcclxuICB1c2VyQWRkcmVzc0xpc3RPbmVVc2VyOiBncWxgXHJcbiAgICAgIHF1ZXJ5IHtcclxuICAgICAgICAgIHVzZXJBZGRyZXNzTGlzdE9uZVVzZXIge1xyXG4gICAgICAgICAgICAgIC4uLlVzZXJBZGRyZXNzRmllbGRzXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJHtmcmFnbWVudC5Vc2VyQWRkcmVzc0ZpZWxkc31cclxuICBgLFxyXG4gIHVzZXJBZGRyZXNzOiBncWxgXHJcbiAgICAgIHF1ZXJ5ICgkZGF0YTogVXNlckFkZHJlc3NJdGVtSW5wdXQpIHtcclxuICAgICAgICAgIHVzZXJBZGRyZXNzICh1c2VyQWRkcmVzczogJGRhdGEpIHtcclxuICAgICAgICAgICAgICAuLi5Vc2VyQWRkcmVzc0ZpZWxkc1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICR7ZnJhZ21lbnQuVXNlckFkZHJlc3NGaWVsZHN9XHJcbiAgYCxcclxuICBzYXZlVXNlckFkZHJlc3M6IGdxbGBcclxuICAgICAgbXV0YXRpb24gKCRkYXRhOiBVc2VyQWRkcmVzc0l0ZW1JbnB1dCl7XHJcbiAgICAgICAgICBzYXZlVXNlckFkZHJlc3MgKHVzZXJBZGRyZXNzOiAkZGF0YSkge1xyXG4gICAgICAgICAgICAgIC4uLlVzZXJBZGRyZXNzRmllbGRzXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJHtmcmFnbWVudC5Vc2VyQWRkcmVzc0ZpZWxkc31cclxuICBgLFxyXG4gIHNldFVzZXJBZGRyZXNzRGVmYXVsdDogZ3FsYFxyXG4gICAgICBtdXRhdGlvbiAoJGRhdGE6IFVzZXJBZGRyZXNzSXRlbUlucHV0KSB7XHJcbiAgICAgICAgICBzZXRVc2VyQWRkcmVzc0RlZmF1bHQgKHVzZXJBZGRyZXNzOiAkZGF0YSkge1xyXG4gICAgICAgICAgICAgIC4uLlVzZXJBZGRyZXNzRmllbGRzXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJHtmcmFnbWVudC5Vc2VyQWRkcmVzc0ZpZWxkc31cclxuICBgLFxyXG4gIHByb2R1Y3RzSW5DYXRlZ29yeTogZ3FsYFxyXG4gICAgICBxdWVyeSAoJGRhdGE6IENhdGVnb3J5SXRlbUlucHV0LCAkcHJvZHVjdEl0ZW1JbnB1dDogUHJvZHVjdEl0ZW1JbnB1dCkge1xyXG4gICAgICAgICAgcHJvZHVjdHNJbkNhdGVnb3J5KGNhdGVnb3J5SXRlbUlucHV0OiAkZGF0YSwgcHJvZHVjdEl0ZW1JbnB1dDogJHByb2R1Y3RJdGVtSW5wdXQpIHtcclxuICAgICAgICAgICAgICAuLi5Qcm9kdWN0RmllbGRzXHJcbiAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgLi4uSW1nRmllbGRzXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY2F0ZWdvcnlMaXN0KGRhdGE6IHtcclxuICAgICAgICAgICAgICBjYXRlZ29yeToge1xyXG4gICAgICAgICAgICAgICAgICBwYXJlbnRDYXRlZ29yeTogJGRhdGFcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KSB7XHJcbiAgICAgICAgICAgICAgdG90YWxcclxuICAgICAgICAgICAgICBsaXN0IHtcclxuICAgICAgICAgICAgICAgICAgLi4uQ2F0ZWdvcnlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJHtmcmFnbWVudC5Qcm9kdWN0RmllbGRzfVxyXG4gICAgICAke2ZyYWdtZW50LkltZ0ZpZWxkc31cclxuICAgICAgJHtmcmFnbWVudC5DYXRlZ29yeUZpZWxkc31cclxuICBgLFxyXG4gIGNhdGVnb3J5TGV2ZWw6IGdxbGBcclxuICAgICAgcXVlcnkgKCRkYXRhOiBDYXRlZ29yeUl0ZW1JbnB1dCkge1xyXG4gICAgICAgICAgY2F0ZWdvcnlMZXZlbChjYXRlZ29yeUl0ZW1JbnB1dDogJGRhdGEpXHJcbiAgICAgIH1cclxuICBgLFxyXG4gIG9uZUNhdGVnb3J5OiBncWxgXHJcbiAgICAgIHF1ZXJ5ICgkZGF0YTogQ2F0ZWdvcnlJdGVtSW5wdXQpIHtcclxuICAgICAgICAgIG9uZUNhdGVnb3J5KGRhdGE6ICRkYXRhKSB7XHJcbiAgICAgICAgICAgICAgLi4uQ2F0ZWdvcnlcclxuICAgICAgICAgICAgICBwYXJlbnRDYXRlZ29yeSB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLkNhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICAgIHBhcmVudENhdGVnb3J5IHtcclxuICAgICAgICAgICAgICAgICAgICAgIC4uLkNhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJHtmcmFnbWVudC5DYXRlZ29yeUZpZWxkc31cclxuICBgLFxyXG4gIHByb2R1Y3RMaXN0OiBncWxgXHJcbiAgICAgIHF1ZXJ5ICgkcHJvZHVjdElucHV0OiBQcm9kdWN0SXRlbUlucHV0LCAkb3JkZXJCeUlucHV0OiBPcmRlckJ5SW5wdXQpIHtcclxuICAgICAgICAgIHByb2R1Y3RMaXN0KHByb2R1Y3RJbnB1dDogJHByb2R1Y3RJbnB1dCwgb3JkZXJCeUlucHV0OiAkb3JkZXJCeUlucHV0KSB7XHJcbiAgICAgICAgICAgICAgdG90YWxcclxuICAgICAgICAgICAgICBsaXN0IHtcclxuICAgICAgICAgICAgICAgICAgLi4uUHJvZHVjdEZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgLi4uSW1nRmllbGRzXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJHtmcmFnbWVudC5Qcm9kdWN0RmllbGRzfVxyXG4gICAgICAke2ZyYWdtZW50LkltZ0ZpZWxkc31cclxuICBgLFxyXG4gIHVwZGF0ZU51bVNob3BDYXJ0OiBncWxgXHJcbiAgICAgIG11dGF0aW9uICgkc2hvcENhcnQ6IFNob3BDYXJ0SXRlbUlucHV0LCAkdXBkYXRlTnVtOiBGbG9hdCkge1xyXG4gICAgICAgICAgdXBkYXRlTnVtU2hvcENhcnQgKHNob3BDYXJ0OiAkc2hvcENhcnQsIHVwZGF0ZU51bTogJHVwZGF0ZU51bSkge1xyXG4gICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgbnVtYmVyXHJcbiAgICAgICAgICAgICAgcHJvZHVjdCB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLlByb2R1Y3RGaWVsZHNcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgdXNlciB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLlVzZXJGaWVsZHNcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJHtmcmFnbWVudC5Qcm9kdWN0RmllbGRzfVxyXG4gICAgICAke2ZyYWdtZW50LlVzZXJGaWVsZHN9XHJcbiAgYCxcclxuICB1c2VyU2hvcENhcnRMaXN0OiBncWxgXHJcbiAgICAgIHF1ZXJ5IHtcclxuICAgICAgICAgIHNob3BDYXJ0TGlzdCB7XHJcbiAgICAgICAgICAgICAgLi4uU2hvcENhcnRGaWVsZHNcclxuICAgICAgICAgICAgICBwcm9kdWN0IHtcclxuICAgICAgICAgICAgICAgICAgLi4uUHJvZHVjdEZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgLi4uSW1nRmllbGRzXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJHtmcmFnbWVudC5TaG9wQ2FydEZpZWxkc31cclxuICAgICAgJHtmcmFnbWVudC5Qcm9kdWN0RmllbGRzfVxyXG4gICAgICAke2ZyYWdtZW50LkltZ0ZpZWxkc31cclxuICBgLFxyXG4gIHVwZGF0ZVNob3BDYXJ0OiBncWxgXHJcbiAgICAgIG11dGF0aW9uICgkc2hvcENhcnQ6IFNob3BDYXJ0SXRlbUlucHV0KXtcclxuICAgICAgICAgIHVwZGF0ZVNob3BDYXJ0IChzaG9wQ2FydDogJHNob3BDYXJ0KSB7XHJcbiAgICAgICAgICAgICAgLi4uU2hvcENhcnRGaWVsZHNcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAke2ZyYWdtZW50LlNob3BDYXJ0RmllbGRzfVxyXG4gIGAsXHJcbiAgb3JkZXJDb25maXJtSW5mbzogZ3FsYFxyXG4gICAgICBxdWVyeSB7XHJcbiAgICAgICAgICBnZXREYXRhQ29uZmlnKGRhdGFDb25maWdJbnB1dDoge1xyXG4gICAgICAgICAgICAgIHR5cGU6IFwiJHtEaWN0VHlwZUVudW0uU2VsZkFkZHJlc3N9XCJcclxuICAgICAgICAgIH0pIHtcclxuICAgICAgICAgICAgICAuLi5EYXRhQ29uZmlnRmllbGRzXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBvbmVVc2VyIHtcclxuICAgICAgICAgICAgICAuLi5Vc2VyRmllbGRzXHJcbiAgICAgICAgICAgICAgdXNlckluZm8ge1xyXG4gICAgICAgICAgICAgICAgICAuLi5Vc2VySW5mb0ZpZWxkc1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHBheUNhcmRMaXN0T25lVXNlciB7XHJcbiAgICAgICAgICAgICAgLi4uVXNlclBheUNhcmRGaWVsZHNcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHVzZXJBZGRyZXNzTGlzdE9uZVVzZXIge1xyXG4gICAgICAgICAgICAgIC4uLlVzZXJBZGRyZXNzRmllbGRzXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBmcmVpZ2h0Q29uZmlnOiBnZXREYXRhQ29uZmlnIChkYXRhQ29uZmlnSW5wdXQ6IHtcclxuICAgICAgICAgICAgICB0eXBlOiBcIiR7RGljdFR5cGVFbnVtLkZyZWlnaHR9XCJcclxuICAgICAgICAgIH0pIHtcclxuICAgICAgICAgICAgICAuLi5EYXRhQ29uZmlnRmllbGRzXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB1c2VyTGV2ZWxMaXN0OiBnZXREaWN0TGlzdCAoZGljdElucHV0OiB7XHJcbiAgICAgICAgICAgICAgZGljdFR5cGVDb2RlOiBcIlVzZXJMZXZlbFwiXHJcbiAgICAgICAgICB9KSB7XHJcbiAgICAgICAgICAgICAgLi4uRGljdEZpZWxkc1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICR7ZnJhZ21lbnQuVXNlckFkZHJlc3NGaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuVXNlclBheUNhcmRGaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuVXNlckluZm9GaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuVXNlckZpZWxkc31cclxuICAgICAgJHtmcmFnbWVudC5EYXRhQ29uZmlnRmllbGRzfVxyXG4gICAgICAke2ZyYWdtZW50LkRpY3RGaWVsZHN9XHJcbiAgYCxcclxuICBzYXZlT3JkZXI6IGdxbGBcclxuICAgICAgbXV0YXRpb24gKCRvcmRlckluZm9JdGVtSW5wdXQ6IE9yZGVySW5mb0l0ZW1JbnB1dCkge1xyXG4gICAgICAgICAgc2F2ZU9yZGVyIChvcmRlckluZm9JdGVtSW5wdXQ6ICRvcmRlckluZm9JdGVtSW5wdXQpIHtcclxuICAgICAgICAgICAgICAuLi5PcmRlckluZm9GaWVsZHNcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAke2ZyYWdtZW50Lk9yZGVySW5mb0ZpZWxkc31cclxuICBgLFxyXG4gIGRpY3RMaXN0OiBncWxgXHJcbiAgICAgIHF1ZXJ5ICgkZGF0YTogRGljdElucHV0KSB7XHJcbiAgICAgICAgICBnZXREaWN0TGlzdCAoZGljdElucHV0OiAkZGF0YSkge1xyXG4gICAgICAgICAgICAgIC4uLkRpY3RGaWVsZHNcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAke2ZyYWdtZW50LkRpY3RGaWVsZHN9XHJcbiAgYCxcclxuICBsaW1pdFRpbWVEYXRhOiBncWxgXHJcbiAgICBxdWVyeSB7XHJcbiAgICAgICAgbGltaXRUaW1lRGF0YTogZ2V0RGF0YUNvbmZpZyAoZGF0YUNvbmZpZ0lucHV0OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiJHtEaWN0VHlwZUVudW0uUHJvbW90aW9uRmxhc2hTYWxlfVwiXHJcbiAgICAgICAgfSkge1xyXG4gICAgICAgICAgICAuLi5EYXRhQ29uZmlnRmllbGRzXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5EYXRhQ29uZmlnRmllbGRzfVxyXG4gIGAsXHJcbiAgcHJvZHVjdExpc3RCeUlkczogZ3FsYFxyXG4gICAgcXVlcnkgKCRpZHM6IFtTdHJpbmddKSB7XHJcbiAgICAgICAgcHJvZHVjdExpc3RCeUlkcyAoaWRzOiAkaWRzKSB7XHJcbiAgICAgICAgICAgIHRvdGFsXHJcbiAgICAgICAgICAgIGxpc3Qge1xyXG4gICAgICAgICAgICAgICAgLi4uUHJvZHVjdEZpZWxkc1xyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5JbWdGaWVsZHNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuUHJvZHVjdEZpZWxkc31cclxuICAgICR7ZnJhZ21lbnQuSW1nRmllbGRzfVxyXG4gIGAsXHJcbiAgZ3JvdXBRdWV1ZUxpc3Q6IGdxbGBcclxuICAgIHF1ZXJ5ICgkZ3JvdXBRdWV1ZUl0ZW1JbnB1dDogR3JvdXBRdWV1ZUl0ZW1JbnB1dCkge1xyXG4gICAgICAgIGdyb3VwUXVldWVMaXN0IChncm91cFF1ZXVlSXRlbUlucHV0OiAkZ3JvdXBRdWV1ZUl0ZW1JbnB1dCkge1xyXG4gICAgICAgICAgICAuLi5Hcm91cFF1ZXVlRmllbGRzXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5Hcm91cFF1ZXVlRmllbGRzfVxyXG4gIGAsXHJcbiAgdXBkYXRlT3JkZXI6IGdxbGBcclxuICAgIG11dGF0aW9uICgkb3JkZXJJbmZvSXRlbUlucHV0OiBPcmRlckluZm9JdGVtSW5wdXQpIHtcclxuICAgICAgICB1cGRhdGVPcmRlciAob3JkZXJJbmZvSXRlbUlucHV0OiAkb3JkZXJJbmZvSXRlbUlucHV0KSB7XHJcbiAgICAgICAgICAgIC4uLk9yZGVySW5mb0ZpZWxkc1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuT3JkZXJJbmZvRmllbGRzfVxyXG4gIGAsXHJcbiAgc2F2ZUdyb3VwT3JkZXI6IGdxbGBcclxuICAgIG11dGF0aW9uICgkb3JkZXJJbmZvSXRlbUlucHV0OiBPcmRlckluZm9JdGVtSW5wdXQsICRncm91cE9yZGVySXRlbUlucHV0OiBHcm91cE9yZGVySXRlbUlucHV0LCAkZ3JvdXBRdWV1ZUl0ZW1JbnB1dDogR3JvdXBRdWV1ZUl0ZW1JbnB1dCkge1xyXG4gICAgICAgIHNhdmVHcm91cE9yZGVyIChvcmRlckluZm9JdGVtSW5wdXQ6ICRvcmRlckluZm9JdGVtSW5wdXQsIGdyb3VwT3JkZXJJdGVtSW5wdXQ6ICRncm91cE9yZGVySXRlbUlucHV0LCBncm91cFF1ZXVlSXRlbUlucHV0OiAkZ3JvdXBRdWV1ZUl0ZW1JbnB1dCkge1xyXG4gICAgICAgICAgICAuLi5PcmRlckluZm9GaWVsZHNcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAke2ZyYWdtZW50Lk9yZGVySW5mb0ZpZWxkc31cclxuICBgLFxyXG59XHJcblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBBZGRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BZGQnXHJcbmltcG9ydCBSZW1vdmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9SZW1vdmUnXHJcbmltcG9ydCB7U2hvcENhcnR9IGZyb20gJy4uLy4uL2dyYXBocWxUeXBlcy90eXBlcydcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHtkZWFsSW1nVXJsfSBmcm9tICcuLi8uLi90b29scy9pbWcnXHJcbmltcG9ydCB7Z3JleX0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzJ1xyXG5pbXBvcnQge3Byb2R1Y3RNb2RlbCwgUHJvZHVjdFByaWNlfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Byb2R1Y3RJdGVtL1Byb2R1Y3RJdGVtJ1xyXG5pbXBvcnQge0J1dHRvbiwgSWNvbkJ1dHRvbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCB7dXNlU3RvcmVNb2RlbH0gZnJvbSAnLi4vLi4vTW9kZWxBY3Rpb24vdXNlU3RvcmUnXHJcbmltcG9ydCB7bHN9IGZyb20gJy4uLy4uL3Rvb2xzL2RlYWxLZXknXHJcbmltcG9ydCB7c2hvcENhcnRNb2RlbH0gZnJvbSAnLi9pbmRleCdcclxuXHJcbmV4cG9ydCBjb25zdCBTaG9wQ2FydFByb2R1Y3RCb3ggPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgyMHB4LCA3MnB4KSAxZnI7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMjJweCkgMzBweDtcclxuICBncmlkLWNvbHVtbi1nYXA6IDEwcHg7XHJcbiAgPiBpbWcge1xyXG4gICAgZ3JpZC1hcmVhOiAxLzEvNC8yO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgfVxyXG4gID4gc2VjdGlvbiB7XHJcbiAgICBjb2xvcjogJHtncmV5WzYwMF19XHJcbiAgfVxyXG4gID4gZm9vdGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgPiBtYWluIHtcclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgfVxyXG4gICAgPiBidXR0b24ge1xyXG4gICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IENhcnRQcm9kdWN0ID0gKHtzaG9wQ2FydH06IHsgc2hvcENhcnQ6IFNob3BDYXJ0IH0pID0+IHtcclxuICBjb25zdCB7YWN0aW9uczogYWN0aW9uc1NDTX0gPSB1c2VTdG9yZU1vZGVsKHNob3BDYXJ0TW9kZWwpXHJcbiAgY29uc3Qge2FjdGlvbnM6IGFjdGlvbnNQTX0gPSB1c2VTdG9yZU1vZGVsKHByb2R1Y3RNb2RlbClcclxuICBjb25zdCBwcm9kdWN0ID0gc2hvcENhcnQucHJvZHVjdFxyXG5cclxuICByZXR1cm4gPFNob3BDYXJ0UHJvZHVjdEJveD5cclxuICAgIDxpbWcgc3JjPXtkZWFsSW1nVXJsKHNob3BDYXJ0LnByb2R1Y3Q/LmltZz8uWzBdPy51cmwpfVxyXG4gICAgICAgICBhbHQ9XCJcIi8+XHJcbiAgICA8bWFpbj57cHJvZHVjdD8ubmFtZX17cHJvZHVjdD8ud2VpZ2h0fXtwcm9kdWN0Py51bml0fTwvbWFpbj5cclxuICAgIDxzZWN0aW9uPntwcm9kdWN0Py5yZW1hcmt9PC9zZWN0aW9uPlxyXG4gICAgPGZvb3Rlcj5cclxuICAgICAgPFByb2R1Y3RQcmljZSBwcm9kdWN0PXtwcm9kdWN0fS8+XHJcbiAgICAgIHsoc2hvcENhcnQuaXNOZXh0ID09PSAwICYmIDw+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBzaXplPXsnc21hbGwnfVxyXG4gICAgICAgICAgICB2YXJpYW50PXsnb3V0bGluZWQnfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXthc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgYXdhaXQgYWN0aW9uc1BNLnVwZGF0ZVNob3BDYXJ0KHtcclxuICAgICAgICAgICAgICAgIGlzTmV4dDogMSxcclxuICAgICAgICAgICAgICAgIGlkOiBzaG9wQ2FydC5pZCxcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIGFjdGlvbnNTQ00uZ2V0TGlzdCgpXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPntscygn5LiL5qyh6LSt5LmwJyl9PC9CdXR0b24+XHJcbiAgICAgICAgezxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgIGRpc2FibGVkPXsoc2hvcENhcnQ/Lm51bWJlciA/PyAwKSA8PSAxfVxyXG4gICAgICAgICAgICBzaXplPXsnc21hbGwnfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXthc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgYXdhaXQgYWN0aW9uc1BNLnVwZGF0ZU51bVNob3BDYXJ0KHtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3QsXHJcbiAgICAgICAgICAgICAgICBudW1iZXI6IC0xLFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgYWN0aW9uc1NDTS5nZXRMaXN0KClcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICA+PFJlbW92ZUljb24vPjwvSWNvbkJ1dHRvbj59XHJcbiAgICAgICAge3Nob3BDYXJ0Lm51bWJlcn1cclxuICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICBzaXplPXsnc21hbGwnfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXthc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgYXdhaXQgYWN0aW9uc1BNLnVwZGF0ZU51bVNob3BDYXJ0KHtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3QsXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICBhY3Rpb25zU0NNLmdldExpc3QoKVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxBZGRJY29uLz5cclxuICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgIDwvPikgfHwgPD5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luUmlnaHQ6ICc4cHgnfX1cclxuICAgICAgICAgICAgc2l6ZT17J3NtYWxsJ31cclxuICAgICAgICAgICAgdmFyaWFudD17J291dGxpbmVkJ31cclxuICAgICAgICAgICAgY29sb3I9eydzZWNvbmRhcnknfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXthc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgYXdhaXQgYWN0aW9uc1BNLnVwZGF0ZVNob3BDYXJ0KHtcclxuICAgICAgICAgICAgICAgIGlzRGVsZXRlOiAxLFxyXG4gICAgICAgICAgICAgICAgaWQ6IHNob3BDYXJ0LmlkLFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgYWN0aW9uc1NDTS5nZXRMaXN0KClcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICA+e2xzKCfliKDpmaQnKX08L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHNpemU9eydzbWFsbCd9XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9eydvdXRsaW5lZCd9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICBhd2FpdCBhY3Rpb25zUE0udXBkYXRlU2hvcENhcnQoe1xyXG4gICAgICAgICAgICAgICAgaXNOZXh0OiAwLFxyXG4gICAgICAgICAgICAgICAgaWQ6IHNob3BDYXJ0LmlkLFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgYWN0aW9uc1NDTS5nZXRMaXN0KClcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICA+e2xzKCfliqDlhaXotK3nianovaYnKX08L0J1dHRvbj5cclxuICAgICAgPC8+fVxyXG4gICAgPC9mb290ZXI+XHJcbiAgPC9TaG9wQ2FydFByb2R1Y3RCb3g+XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENoZXZyb25SaWdodEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0NoZXZyb25SaWdodCdcclxuaW1wb3J0IHtIZWFkZXJUaXRsZX0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9IZWFkZXJUaXRsZS9IZWFkZXJUaXRsZSdcclxuaW1wb3J0IHt1c2VTdG9yZU1vZGVsfSBmcm9tICcuLi8uLi9Nb2RlbEFjdGlvbi91c2VTdG9yZSdcclxuaW1wb3J0IHtwYWdlVHlwZUVudW0sIHNob3BDYXJ0TW9kZWx9IGZyb20gJy4vaW5kZXgnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7bHN9IGZyb20gJy4uLy4uL3Rvb2xzL2RlYWxLZXknXHJcbmltcG9ydCB7UGlja1VwVHlwZUVudW19IGZyb20gJy4uLy4uL3NzX2NvbW1vbi9lbnVtJ1xyXG5pbXBvcnQge2RvY30gZnJvbSAnLi4vLi4vZ3JhcGhxbFR5cGVzL2RvYydcclxuaW1wb3J0IHtJY29uQnV0dG9uLCBMaW5lYXJQcm9ncmVzcywgVGV4dEZpZWxkfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IHtCU2Nyb2xsZXJ9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQlNjcm9sbC9CU2Nyb2xsZXInXHJcbmltcG9ydCB7U3BhY2V9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQm94L0JveCdcclxuaW1wb3J0IHtTZWxlY3RBZGRyZXNzLCBzZWxlY3RBZGRyZXNzTW9kZWx9IGZyb20gJy4vY29tcG9uZW50cy9TZWxlY3RBZGRyZXNzJ1xyXG5pbXBvcnQge2dyZXl9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycydcclxuaW1wb3J0IHtTZWxlY3RDYXJkLCBzZWxlY3RDYXJkTW9kZWx9IGZyb20gJy4vY29tcG9uZW50cy9TZWxlY3RDYXJkJ1xyXG5pbXBvcnQge2RlYWxNYXliZU51bWJlciwgZGVhbE1vbmV5LCBkZWFsVXJsUXVlcnl9IGZyb20gJy4uLy4uL3Rvb2xzL3V0aWxzJ1xyXG5pbXBvcnQge21wU3R5bGV9IGZyb20gJy4uLy4uL3N0eWxlL2NvbW1vbidcclxuaW1wb3J0IHtCdXR0b25Mb2FkfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0J1dHRvbkxvYWQvQnV0dG9uTG9hZCdcclxuaW1wb3J0IHtzaG93TWVzc2FnZX0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9NZXNzYWdlL01lc3NhZ2UnXHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmV4cG9ydCBjb25zdCBTaG9wVGl0bGUgPSBzdHlsZWQuZGl2YFxyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICA+IGZvb3RlciB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogJHttcFN0eWxlLnJlZH07XHJcbiAgfVxyXG5gXHJcbmV4cG9ydCBjb25zdCBBZGRyZXNzQm94ID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICA+IG1haW4ge1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgPiBoZWFkZXIge1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcbmV4cG9ydCBjb25zdCBDYXJkQm94ID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAxNnB4IDIwcHg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBtaW4tY29udGVudDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xyXG4gID4gaGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIH1cclxuICA+IGFzaWRlIHtcclxuICAgIGdyaWQtYXJlYTogMS8yLzMvMztcclxuICB9XHJcbmBcclxuZXhwb3J0IGNvbnN0IFNob3BUb3RhbCA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogMCAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbmBcclxuY29uc3QgRm9vdGVyRml0ID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIHBhZGRpbmc6IDE2cHggMjRweDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgbWF4LWNvbnRlbnQ7XHJcbiAgZ3JpZC1yb3ctZ2FwOiA4cHg7XHJcbiAgYm94LXNoYWRvdzogJHttcFN0eWxlLnNoYWRvd1snMSddfTtcclxuICA+IGhlYWRlciB7XHJcbiAgICA+IHNwYW4ge1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gID4gYXNpZGUge1xyXG4gICAgZ3JpZC1hcmVhOiAxLzIvMy8zO1xyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IE9yZGVyUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHthY3Rpb25zOiBhY3Rpb25zU0FNfSA9IHVzZVN0b3JlTW9kZWwoc2VsZWN0QWRkcmVzc01vZGVsKVxyXG4gIGNvbnN0IHthY3Rpb25zOiBhY3Rpb25zU2VsZWN0Q2FyZH0gPSB1c2VTdG9yZU1vZGVsKHNlbGVjdENhcmRNb2RlbClcclxuICBjb25zdCB7c3RhdGU6IHN0YXRlU0NNLCBhY3Rpb25zOiBhY3Rpb25zU0NNLCBnZXRMb2FkfSA9IHVzZVN0b3JlTW9kZWwoc2hvcENhcnRNb2RlbClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghc3RhdGVTQ00udXNlci5pZCkge1xyXG4gICAgICBhY3Rpb25zU0NNLmdldE9yZGVySW5mbygpXHJcbiAgICB9XHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IGFkZHJlc3NEYXRhID0gc3RhdGVTQ00uZGVhbEFkZHJlc3NEYXRhKHN0YXRlU0NNKVxyXG4gIGNvbnN0IGNhcmREYXRhID0gc3RhdGVTQ00ucGF5Q2FyZExpc3Q/LmZpbmQodiA9PiB2LmlkID09PSBzdGF0ZVNDTS5mb3JtLnBheW1lbnRNZXRob2RDYXJkSWQpIHx8IHt9XHJcbiAgY29uc3QgcHJvZHVjdFRvdGFsID0gc3RhdGVTQ00uZGVhbFByb2R1Y3RUb3RhbChzdGF0ZVNDTSlcclxuICBjb25zdCB0cmFuc3BvcnRhdGlvbkNvc3RzID0gKHN0YXRlU0NNLmZvcm0ucGlja1VwVHlwZSA9PT0gUGlja1VwVHlwZUVudW0uRGVsaXZlcnkgJiYgKHN0YXRlU0NNLmZyZWlnaHRDb25maWcucmVkdWNlKChwcmUsIGN1cikgPT4ge1xyXG4gICAgaWYgKHByZSA+IHBhcnNlRmxvYXQoY3VyPy5mcmVpZ2h0UGF5KSAmJiBwcm9kdWN0VG90YWwgPCBwYXJzZUZsb2F0KGN1cj8ub3JkZXJNYXgpKSB7XHJcbiAgICAgIHJldHVybiBwYXJzZUZsb2F0KGN1cj8uZnJlaWdodFBheSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBwcmVcclxuICAgIH1cclxuICB9LCBwYXJzZUZsb2F0KHN0YXRlU0NNLmZyZWlnaHRDb25maWdbc3RhdGVTQ00uZnJlaWdodENvbmZpZy5sZW5ndGggLSAxXT8uZnJlaWdodFBheSkpKSkgfHwgMFxyXG4gIGNvbnN0IGFjdHVhbGx5UGFpZCA9IHByb2R1Y3RUb3RhbCArIHRyYW5zcG9ydGF0aW9uQ29zdHMgLSBkZWFsTWF5YmVOdW1iZXIoc3RhdGVTQ00uZm9ybS5kZWR1Y3RDb2luKSArIGRlYWxNYXliZU51bWJlcihzdGF0ZVNDTS5mb3JtLnNhbGVUYXgpXHJcbiAgY29uc3QgZ2VuZXJhdGVDb2luID0gYWN0dWFsbHlQYWlkICogMC4wMVxyXG5cclxuICByZXR1cm4gPGRpdj5cclxuICAgIDxIZWFkZXJUaXRsZVxyXG4gICAgICAgIHRpdGxlPXsn56Gu6K6k6K6i5Y2VJ31cclxuICAgICAgICBiYWNrQ2FsbD17KCkgPT4ge1xyXG4gICAgICAgICAgYWN0aW9uc1NDTS51cGRhdGVQYWdlVHlwZShwYWdlVHlwZUVudW0uc2hvcENhcnQpXHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH19XHJcbiAgICAvPlxyXG4gICAgeyghIWdldExvYWQoZG9jLm9yZGVyQ29uZmlybUluZm8pICYmIDxMaW5lYXJQcm9ncmVzcy8+KSB8fCA8ZGl2IHN0eWxlPXt7aGVpZ2h0OiAnNHB4J319Lz59XHJcbiAgICA8QlNjcm9sbGVyXHJcbiAgICAgICAgYm94SGVpZ2h0PXsnY2FsYygxMDB2aCAtIDY1cHgpJ31cclxuICAgID5cclxuICAgICAgPFNwYWNlIGg9ezEwfS8+XHJcbiAgICAgIDxTaG9wVGl0bGU+XHJcbiAgICAgICAgPFNwYWNlIHc9ezIwfS8+XHJcbiAgICAgICAge2xzKChzdGF0ZVNDTS5mb3JtLnBpY2tVcFR5cGUgPT09IFBpY2tVcFR5cGVFbnVtLlNlbGYgJiYgJ+iHquWPluWcsOWdgCcpIHx8ICfpgIHotKflnLDlnYAnKX1cclxuICAgICAgPC9TaG9wVGl0bGU+XHJcbiAgICAgIDxBZGRyZXNzQm94PlxyXG4gICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgICAge2Ake2FkZHJlc3NEYXRhLmNvbWJpbmVBZGRyZXNzfWB9XHJcbiAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgICAgIHtgJHthZGRyZXNzRGF0YS5uYW1lfSAke2FkZHJlc3NEYXRhLmNvbnRhY3RJbmZvcm1hdGlvbn1gfVxyXG4gICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgICAgIDxhc2lkZT5cclxuICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17YXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYWN0aW9uc1NBTS5vcGVuQ2xpY2soKVxyXG4gICAgICAgICAgICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICBhY3Rpb25zU0NNLnNldEZvcm0oWydhZGRyZXNzSWQnLCByZXNdKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxDaGV2cm9uUmlnaHRJY29uLz5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICA8L2FzaWRlPlxyXG4gICAgICA8L0FkZHJlc3NCb3g+XHJcbiAgICAgIDxTcGFjZSBjPXtncmV5WzIwMF19XHJcbiAgICAgICAgICAgICBoPXsxNn0vPlxyXG4gICAgICA8U3BhY2UgaD17MTZ9Lz5cclxuICAgICAgPFNob3BUaXRsZT5cclxuICAgICAgICA8U3BhY2Ugdz17MjB9Lz5cclxuICAgICAgICB7bHMoJ+S7mOasvuaWueW8jycpfVxyXG4gICAgICA8L1Nob3BUaXRsZT5cclxuICAgICAgPENhcmRCb3g+XHJcbiAgICAgICAgPGhlYWRlcj57Y2FyZERhdGEubmFtZX08L2hlYWRlcj5cclxuICAgICAgICA8Zm9vdGVyPntjYXJkRGF0YS5udW1iZXJ9PC9mb290ZXI+XHJcbiAgICAgICAgPGFzaWRlPlxyXG4gICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXthc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBhY3Rpb25zU2VsZWN0Q2FyZC5vcGVuQ2xpY2soKVxyXG4gICAgICAgICAgICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICBhY3Rpb25zU0NNLnNldEZvcm0oWydwYXltZW50TWV0aG9kQ2FyZElkJywgcmVzXSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8Q2hldnJvblJpZ2h0SWNvbi8+XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgPC9hc2lkZT5cclxuICAgICAgPC9DYXJkQm94PlxyXG4gICAgICA8U3BhY2UgYz17Z3JleVsyMDBdfVxyXG4gICAgICAgICAgICAgaD17MTZ9Lz5cclxuICAgICAgPFNwYWNlIGg9ezE2fS8+XHJcbiAgICAgIDxTaG9wVGl0bGU+XHJcbiAgICAgICAgPFNwYWNlIHc9ezIwfS8+XHJcbiAgICAgICAge2xzKCfkvb/nlKjovr7kurrluIEnKX1cclxuICAgICAgICA8U3BhY2Ugdz17MTZ9Lz5cclxuICAgICAgICA8Zm9vdGVyPntscygn5b2T5pyI5Y+v55So5L2Z6aKdJyl9e2RlYWxNb25leShzdGF0ZVNDTS51c2VyLm9yZGVyQ29pbkN1cnJlbnRNb250aCl9PC9mb290ZXI+XHJcbiAgICAgIDwvU2hvcFRpdGxlPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxTcGFjZSB3PXsyMH0vPlxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Ub3A6ICc4cHgnLCBtYXJnaW5Cb3R0b206ICcyNHB4J319XHJcbiAgICAgICAgICAgIGxhYmVsPXtscygnJyl9XHJcbiAgICAgICAgICAgIHZhbHVlPXtzdGF0ZVNDTS5mb3JtLmRlZHVjdENvaW59XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcclxuICAgICAgICAgICAgICBhY3Rpb25zU0NNLnNldEZvcm0oWydkZWR1Y3RDb2luJywgZS50YXJnZXQudmFsdWVdKVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8U3BhY2UgYz17Z3JleVsyMDBdfVxyXG4gICAgICAgICAgICAgaD17MTZ9Lz5cclxuICAgICAgPFNwYWNlIGg9ezE2fS8+XHJcbiAgICAgIDxTaG9wVG90YWw+XHJcbiAgICAgICAgPGhlYWRlcj57bHMoJ+i0reeJqei9puaAu+iuoScpfTwvaGVhZGVyPlxyXG4gICAgICAgIDxmb290ZXI+e2RlYWxNb25leShwcm9kdWN0VG90YWwpfTwvZm9vdGVyPlxyXG4gICAgICA8L1Nob3BUb3RhbD5cclxuICAgICAge3RyYW5zcG9ydGF0aW9uQ29zdHMgPiAwICYmIDxTaG9wVG90YWw+XHJcbiAgICAgICAgPGhlYWRlcj57bHMoJ+i/kOi0uScpfTwvaGVhZGVyPlxyXG4gICAgICAgIDxmb290ZXI+e2RlYWxNb25leSh0cmFuc3BvcnRhdGlvbkNvc3RzKX08L2Zvb3Rlcj5cclxuICAgICAgPC9TaG9wVG90YWw+fVxyXG4gICAgICA8U2hvcFRvdGFsPlxyXG4gICAgICAgIDxoZWFkZXI+e2xzKCfovr7kurrluIHmirXmiaMnKX08L2hlYWRlcj5cclxuICAgICAgICA8Zm9vdGVyPntkZWFsTW9uZXkoc3RhdGVTQ00uZm9ybS5kZWR1Y3RDb2luLCAnLScpfTwvZm9vdGVyPlxyXG4gICAgICA8L1Nob3BUb3RhbD5cclxuICAgICAgPFNob3BUb3RhbD5cclxuICAgICAgICA8aGVhZGVyPntscygn5raI6LS556iOJyl9PC9oZWFkZXI+XHJcbiAgICAgICAgPGZvb3Rlcj57ZGVhbE1vbmV5KHN0YXRlU0NNLmZvcm0uc2FsZVRheCl9PC9mb290ZXI+XHJcbiAgICAgIDwvU2hvcFRvdGFsPlxyXG4gICAgICA8U2hvcFRvdGFsXHJcbiAgICAgICAgICBzdHlsZT17e2ZvbnRTaXplOiAnMThweCd9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGhlYWRlcj57bHMoJ+iuouWNleaAu+minScpfTwvaGVhZGVyPlxyXG4gICAgICAgIDxmb290ZXI+e2RlYWxNb25leShhY3R1YWxseVBhaWQpfTwvZm9vdGVyPlxyXG4gICAgICA8L1Nob3BUb3RhbD5cclxuICAgIDwvQlNjcm9sbGVyPlxyXG4gICAgPEZvb3RlckZpdD5cclxuICAgICAgPGhlYWRlcj57bHMoJ+acrOasoeiuouWNlScpfVxyXG4gICAgICAgIDxzcGFuPntscyhzdGF0ZVNDTS51c2VyTGV2ZWxMaXN0LmZpbmQodiA9PiB2LmNvZGUgPT09IHN0YXRlU0NNLnVzZXIudXNlckluZm8/LnVzZXJMZXZlbCk/Lm5hbWUpfTwvc3Bhbj5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIDxmb290ZXI+e2xzKCflsIbojrflvpfkuIvmnIjkvb/nlKjovr7kurrluIEgJyl9XHJcbiAgICAgICAgPHNwYW4+e2RlYWxNb25leShnZW5lcmF0ZUNvaW4pfTwvc3Bhbj5cclxuICAgICAgPC9mb290ZXI+XHJcbiAgICAgIDxhc2lkZT5cclxuICAgICAgICA8QnV0dG9uTG9hZFxyXG4gICAgICAgICAgICBsb2FkaW5nPXtnZXRMb2FkKGRvYy5zYXZlT3JkZXIpfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXthc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3Qgc3VibWl0RGF0YSA9IHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlU0NNLmZvcm0sXHJcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZUNvaW4sXHJcbiAgICAgICAgICAgICAgICBhY3R1YWxseVBhaWQsXHJcbiAgICAgICAgICAgICAgICB0cmFuc3BvcnRhdGlvbkNvc3RzLFxyXG4gICAgICAgICAgICAgICAgc3VidG90YWw6IHByb2R1Y3RUb3RhbCxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRVc2VyTGV2ZWw6IHN0YXRlU0NNLnVzZXIudXNlckluZm8/LnVzZXJMZXZlbCxcclxuICAgICAgICAgICAgICAgIHJPcmRlclByb2R1Y3Q6IHN0YXRlU0NNLnNob3BDYXJ0TGlzdC5tYXAodiA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICBjb3VudDogdi5udW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgIHByb2R1Y3RJZDogdi5wcm9kdWN0Py5pZCxcclxuICAgICAgICAgICAgICAgICAgcHJvZHVjdDogdi5wcm9kdWN0LFxyXG4gICAgICAgICAgICAgICAgfSkpLFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBhY3Rpb25zU0NNLnN1Ym1pdCh7XHJcbiAgICAgICAgICAgICAgICAuLi5zdWJtaXREYXRhLFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgaWYgKHJlcz8uc2F2ZU9yZGVyPy5pZCkge1xyXG4gICAgICAgICAgICAgICAgc2hvd01lc3NhZ2UoJ+aTjeS9nOaIkOWKnyDlsIbliY3lvoDku5jmrL4nKVxyXG4gICAgICAgICAgICAgICAgLy8gYXdhaXQgcm91dGVyLnJlcGxhY2UoJy9jYXJ0L3Jlc3VsdCcpXHJcbiAgICAgICAgICAgICAgICBjb25zdCBfcXVlcnkgPSBkZWFsVXJsUXVlcnkoe29yZGVySWQ6IHJlcz8uc2F2ZU9yZGVyPy5pZH0pXHJcbiAgICAgICAgICAgICAgICBhd2FpdCByb3V0ZXIucmVwbGFjZShgL3BheSR7X3F1ZXJ5fWAsIGAvcGF5JHtfcXVlcnl9YClcclxuICAgICAgICAgICAgICAgIGFjdGlvbnNTQ00uY2xlYXJEYXRhKClcclxuICAgICAgICAgICAgICAgIGFjdGlvbnNTQ00uZ2V0TGlzdCgpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICB2YXJpYW50PXsnY29udGFpbmVkJ31cclxuICAgICAgICAgICAgY29sb3I9eydzZWNvbmRhcnknfVxyXG4gICAgICAgID57bHMoJ+aPkOS6pOiuouWNlScpfTwvQnV0dG9uTG9hZD5cclxuICAgICAgPC9hc2lkZT5cclxuICAgIDwvRm9vdGVyRml0PlxyXG4gICAgPFNlbGVjdEFkZHJlc3MvPlxyXG4gICAgPFNlbGVjdENhcmQvPlxyXG4gIDwvZGl2PlxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=