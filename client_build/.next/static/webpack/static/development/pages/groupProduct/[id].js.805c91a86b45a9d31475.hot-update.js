webpackHotUpdate("static\\development\\pages\\groupProduct\\[id].js",{

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

  var product = stateGroupProduct.product;
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    actionsGroupProduct.updateSelectNum(2);
    actionsGroupOrderPageModel.open();
  }, []);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 10
    }
  }, __jsx(_components_HeaderTitle_HeaderTitle__WEBPACK_IMPORTED_MODULE_13__["HeaderTitle"], {
    title: '产品详情',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
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
      lineNumber: 181,
      columnNumber: 5
    }
  }), __jsx(PriceRed, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 5
    }
  }, __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('基准价格'), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 9
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_11__["dealMoney"])(product.priceOut), "/", product.packingUnitString)), __jsx("aside", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('已成团'), 23, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('单')), __jsx("aside", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('拼团中'), 2, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('单'))), __jsx(Name, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 5
    }
  }, __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 7
    }
  }, product.name), __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 7
    }
  }, product.groupRemark, "/", product.groupAmount, product.groupAmountUnitString, __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 90
    }
  }), Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('分团精度'), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
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
        lineNumber: 200,
        columnNumber: 13
      }
    });
  })))), __jsx(GroupQueueBox, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 5
    }
  }, __jsx(Title, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('拼团中'))), __jsx(SmartMatch, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 5
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 7
    }
  }, __jsx(Title, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 9
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('智能匹配'))), __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('请点击'), __jsx(_material_ui_icons_StarBorderRounded__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 9
    }
  }), Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('确定您需要的份数')), __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
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
        lineNumber: 217,
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
        lineNumber: 221,
        columnNumber: 18
      }
    });
  })), __jsx(Price, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 7
    }
  }, __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 9
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 11
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_11__["dealMoney"])(((_product$priceOut = product.priceOut) !== null && _product$priceOut !== void 0 ? _product$priceOut : 0) * stateGroupProduct.selectNum * stateGroupProduct.numDiscount * stateGroupProduct.groupDiscount)), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('折后价格'))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 9
    }
  }, "="), __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 9
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 11
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_11__["dealMoney"])(((_product$priceOut2 = product.priceOut) !== null && _product$priceOut2 !== void 0 ? _product$priceOut2 : 0) * stateGroupProduct.selectNum)), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('基准价格'))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 9
    }
  }, "x"), __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 9
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 11
    }
  }, stateGroupProduct.numDiscount), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('份数折扣'))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 9
    }
  }, "x"), __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 9
    }
  }, __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 11
    }
  }, stateGroupProduct.groupDiscount), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 11
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('成团折上折'))))), __jsx(Submit, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 5
    }
  }, __jsx("aside", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
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
      lineNumber: 252,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_15__["ls"])('去结算'))), __jsx(_groupOrderPage__WEBPACK_IMPORTED_MODULE_19__["GroupOrderPage"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 5
    }
  }));
};

_s(GroupProduct, "dbBYBcfYruFUeF7tGS/EMeKapxo=", false, function () {
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

/***/ }),

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
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ModelAction/modelUtil */ "./utils/ModelAction/modelUtil.ts");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ModelAction/useStore */ "./utils/ModelAction/useStore.ts");
/* harmony import */ var _tools_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../tools/utils */ "./utils/tools/utils.ts");
/* harmony import */ var _id___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./[id] */ "./utils/view/groupProduct/[id].tsx");
/* harmony import */ var _cart_CartProduct__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../cart/CartProduct */ "./utils/view/cart/CartProduct.tsx");
/* harmony import */ var _tools_img__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../tools/img */ "./utils/tools/img.ts");
/* harmony import */ var _components_ProductItem_ProductItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/ProductItem/ProductItem */ "./utils/components/ProductItem/ProductItem.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _tools_dealKey__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../tools/dealKey */ "./utils/tools/dealKey.ts");
/* harmony import */ var _components_Box_Box__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/Box/Box */ "./utils/components/Box/Box.tsx");
/* harmony import */ var _ss_common_enum__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../ss_common/enum */ "./utils/ss_common/enum.ts");
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/ChevronRight */ "./node_modules/@material-ui/icons/ChevronRight.js");
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _cart_orderPage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../cart/orderPage */ "./utils/view/cart/orderPage.tsx");
/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../cart */ "./utils/view/cart/index.tsx");
/* harmony import */ var _cart_components_SelectAddress__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../cart/components/SelectAddress */ "./utils/view/cart/components/SelectAddress.tsx");
/* harmony import */ var _cart_components_SelectCard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../cart/components/SelectCard */ "./utils/view/cart/components/SelectCard.tsx");
/* harmony import */ var _components_ButtonLoad_ButtonLoad__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../components/ButtonLoad/ButtonLoad */ "./utils/components/ButtonLoad/ButtonLoad.tsx");
/* harmony import */ var _style_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../style/common */ "./utils/style/common.ts");



var _this = undefined,
    _jsxFileName = "D:\\code\\zw\\zw_client_web\\utils\\view\\groupProduct\\groupOrderPage.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




















var groupOrderPageModel = Object(_ModelAction_modelUtil__WEBPACK_IMPORTED_MODULE_3__["modelFactory"])('orderPageModel', {
  show: false
}, {
  open: function open(value, option) {
    option.setData(Object(_tools_utils__WEBPACK_IMPORTED_MODULE_6__["fpMergePre"])({
      show: true
    }));
  }
});
var OrderPageBox = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "groupOrderPage__OrderPageBox",
  componentId: "bhof7w-0"
})(["position:fixed;top:0;bottom:0;left:0;right:0;background:white;> footer{position:fixed;bottom:0;box-sizing:border-box;box-shadow:", ";width:100vw;text-align:right;}"], _style_common__WEBPACK_IMPORTED_MODULE_21__["mpStyle"].shadow["1"]);
_c = OrderPageBox;
var GroupOrderPage = function GroupOrderPage() {
  _s();

  var _stateSCM$payCardList, _product$priceOut, _stateSCM$freightConf, _product$img, _product$img$;

  var _useStoreModel = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_5__["useStoreModel"])(groupOrderPageModel),
      stateOrderPageModel = _useStoreModel.state;

  var _useStoreModel2 = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_5__["useStoreModel"])(_id___WEBPACK_IMPORTED_MODULE_7__["groupProductModel"]),
      actionsGroupProduct = _useStoreModel2.actions,
      stateGroupProduct = _useStoreModel2.state;

  var product = stateGroupProduct.product;

  var _useStoreModel3 = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_5__["useStoreModel"])(_cart__WEBPACK_IMPORTED_MODULE_17__["shopCartModel"]),
      stateSCM = _useStoreModel3.state,
      actionsSCM = _useStoreModel3.actions;

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (!stateSCM.user.id) {
      actionsSCM.getOrderInfo();
    }
  }, []);

  var _useStoreModel4 = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_5__["useStoreModel"])(_cart_components_SelectAddress__WEBPACK_IMPORTED_MODULE_18__["selectAddressModel"]),
      actionsSAM = _useStoreModel4.actions;

  var _useStoreModel5 = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_5__["useStoreModel"])(_cart_components_SelectCard__WEBPACK_IMPORTED_MODULE_19__["selectCardModel"]),
      actionsSelectCard = _useStoreModel5.actions;

  var addressData = stateSCM.dealAddressData(stateSCM);
  var cardData = ((_stateSCM$payCardList = stateSCM.payCardList) === null || _stateSCM$payCardList === void 0 ? void 0 : _stateSCM$payCardList.find(function (v) {
    return v.id === stateSCM.form.paymentMethodCardId;
  })) || {};
  var productTotal = ((_product$priceOut = product.priceOut) !== null && _product$priceOut !== void 0 ? _product$priceOut : 0) * stateGroupProduct.selectNum;
  var transportationCosts = stateSCM.form.pickUpType === _ss_common_enum__WEBPACK_IMPORTED_MODULE_14__["PickUpTypeEnum"].Delivery && stateSCM.freightConfig.reduce(function (pre, cur) {
    if (pre > parseFloat(cur === null || cur === void 0 ? void 0 : cur.freightPay) && productTotal < parseFloat(cur === null || cur === void 0 ? void 0 : cur.orderMax)) {
      return parseFloat(cur === null || cur === void 0 ? void 0 : cur.freightPay);
    } else {
      return pre;
    }
  }, parseFloat((_stateSCM$freightConf = stateSCM.freightConfig[stateSCM.freightConfig.length - 1]) === null || _stateSCM$freightConf === void 0 ? void 0 : _stateSCM$freightConf.freightPay)) || 0;
  var actuallyPaid = productTotal + transportationCosts + Object(_tools_utils__WEBPACK_IMPORTED_MODULE_6__["dealMaybeNumber"])(stateSCM.form.saleTax);
  var generateCoin = actuallyPaid * 0.01;
  return stateOrderPageModel.show && __jsx(OrderPageBox, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 38
    }
  }, __jsx(_cart_CartProduct__WEBPACK_IMPORTED_MODULE_8__["ShopCartProductBox"], {
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
    src: Object(_tools_img__WEBPACK_IMPORTED_MODULE_9__["dealImgUrl"])(product === null || product === void 0 ? void 0 : (_product$img = product.img) === null || _product$img === void 0 ? void 0 : (_product$img$ = _product$img[0]) === null || _product$img$ === void 0 ? void 0 : _product$img$.url),
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
  }, __jsx(_components_ProductItem_ProductItem__WEBPACK_IMPORTED_MODULE_10__["ProductPrice"], {
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
  }, stateGroupProduct.selectNum, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_12__["ls"])('份')))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["TextField"], {
    style: {
      margin: '16px',
      width: 'calc(100vw - 32px)'
    },
    fullWidth: true,
    label: Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_12__["ls"])('运送方式'),
    select: true,
    value: stateSCM.form.pickUpType,
    onChange: function onChange(event) {
      actionsSCM.setForm(['pickUpType', event.target.value]);
      actionsSCM.setForm(['addressId', stateSCM.initAddressId(Object(_tools_utils__WEBPACK_IMPORTED_MODULE_6__["fpMerge"])(stateSCM, {
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
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["MenuItem"], {
    value: _ss_common_enum__WEBPACK_IMPORTED_MODULE_14__["PickUpTypeEnum"].Self,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_12__["ls"])(Object(_ss_common_enum__WEBPACK_IMPORTED_MODULE_14__["getPickUpTypeName"])(_ss_common_enum__WEBPACK_IMPORTED_MODULE_14__["PickUpTypeEnum"].Self))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["MenuItem"], {
    value: _ss_common_enum__WEBPACK_IMPORTED_MODULE_14__["PickUpTypeEnum"].Delivery,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_12__["ls"])(Object(_ss_common_enum__WEBPACK_IMPORTED_MODULE_14__["getPickUpTypeName"])(_ss_common_enum__WEBPACK_IMPORTED_MODULE_14__["PickUpTypeEnum"].Delivery)))), __jsx(_cart_orderPage__WEBPACK_IMPORTED_MODULE_16__["AddressBox"], {
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
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["IconButton"], {
    onClick: /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
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
  }, __jsx(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 11
    }
  })))), __jsx(_cart_orderPage__WEBPACK_IMPORTED_MODULE_16__["ShopTitle"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 5
    }
  }, __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_13__["Space"], {
    w: 20,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 7
    }
  }), Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_12__["ls"])('付款方式')), __jsx(_cart_orderPage__WEBPACK_IMPORTED_MODULE_16__["CardBox"], {
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
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["IconButton"], {
    onClick: /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
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
  }, __jsx(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 11
    }
  })))), __jsx(_cart_components_SelectAddress__WEBPACK_IMPORTED_MODULE_18__["SelectAddress"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 5
    }
  }), __jsx(_cart_components_SelectCard__WEBPACK_IMPORTED_MODULE_19__["SelectCard"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 5
    }
  }), __jsx(_cart_orderPage__WEBPACK_IMPORTED_MODULE_16__["ShopTotal"], {
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
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_12__["ls"])('购物车总计')), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 7
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_6__["dealMoney"])(productTotal))), transportationCosts > 0 && __jsx(_cart_orderPage__WEBPACK_IMPORTED_MODULE_16__["ShopTotal"], {
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
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_12__["ls"])('运费')), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 7
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_6__["dealMoney"])(transportationCosts))), __jsx(_cart_orderPage__WEBPACK_IMPORTED_MODULE_16__["ShopTotal"], {
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
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_12__["ls"])('份数折扣')), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 7
    }
  }, stateGroupProduct.numDiscount)), __jsx(_cart_orderPage__WEBPACK_IMPORTED_MODULE_16__["ShopTotal"], {
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
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_12__["ls"])('成团折上折')), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 7
    }
  }, stateGroupProduct.groupDiscount)), __jsx(_cart_orderPage__WEBPACK_IMPORTED_MODULE_16__["ShopTotal"], {
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
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_12__["ls"])('订单总额')), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 7
    }
  }, Object(_tools_utils__WEBPACK_IMPORTED_MODULE_6__["dealMoney"])(actuallyPaid))), __jsx(_components_Box_Box__WEBPACK_IMPORTED_MODULE_13__["Space"], {
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
  }, __jsx(_components_ButtonLoad_ButtonLoad__WEBPACK_IMPORTED_MODULE_20__["ButtonLoad"], {
    variant: 'contained',
    color: 'secondary',
    onClick: function onClick() {
      var _stateSCM$user$userIn;

      actionsGroupProduct.submit({
        orderInfoItemInput: {
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
        }
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 7
    }
  }, Object(_tools_dealKey__WEBPACK_IMPORTED_MODULE_12__["ls"])('提交订单')))) || null;
};

_s(GroupOrderPage, "mTbFevOcmvbkW8/m/Zwh6hGZW04=", false, function () {
  return [_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_5__["useStoreModel"], _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_5__["useStoreModel"], _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_5__["useStoreModel"], _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_5__["useStoreModel"], _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_5__["useStoreModel"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9ncmFwaHFsVHlwZXMvZG9jL2luZGV4LnRzIiwid2VicGFjazovLy8uL3V0aWxzL3ZpZXcvY2FydC9DYXJ0UHJvZHVjdC50c3giLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvdmlldy9jYXJ0L29yZGVyUGFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvdmlldy9ncm91cFByb2R1Y3QvLnRzeCIsIndlYnBhY2s6Ly8vLi91dGlscy92aWV3L2dyb3VwUHJvZHVjdC9ncm91cE9yZGVyUGFnZS50c3giXSwibmFtZXMiOlsiZ2V0VXNlckxpc3REb2MiLCJncWwiLCJnZXREYXRhQ29uZmlnIiwiaG9tZUNhcm91c2VsSW1ncyIsImNhdGVnb3J5TGlzdCIsImZyYWdtZW50IiwiQ2F0ZWdvcnlGaWVsZHMiLCJkb2MiLCJyZWdpc3RlclVzZXIiLCJyZWZyZXNoVG9rZW4iLCJsb2dpbiIsIm9uZVVzZXIiLCJVc2VySW5mb0ZpZWxkcyIsIlVzZXJGaWVsZHMiLCJvcmRlckxpc3QiLCJPcmRlckluZm9GaWVsZHMiLCJST3JkZXJQcm9kdWN0RmllbGRzIiwiUHJvZHVjdEZpZWxkcyIsIkltZ0ZpZWxkcyIsIm9yZGVyRGV0YWlsIiwiRGljdFR5cGVFbnVtIiwiU2VsZkFkZHJlc3MiLCJEYXRhQ29uZmlnRmllbGRzIiwiVXNlclBheUNhcmRGaWVsZHMiLCJVc2VyQWRkcmVzc0ZpZWxkcyIsInVwZGF0ZVBhc3N3b3JkIiwicGF5Q2FyZExpc3RPbmVVc2VyIiwidXNlclBheUNhcmQiLCJzYXZlVXNlclBheUNhcmQiLCJzZXRVc2VyUGF5Q2FyZERlZmF1bHQiLCJwaWNrdXBBZGRyZXNzIiwidXBkYXRlVXNlckluZm8iLCJ1c2VyQWRkcmVzc0xpc3RPbmVVc2VyIiwidXNlckFkZHJlc3MiLCJzYXZlVXNlckFkZHJlc3MiLCJzZXRVc2VyQWRkcmVzc0RlZmF1bHQiLCJwcm9kdWN0c0luQ2F0ZWdvcnkiLCJjYXRlZ29yeUxldmVsIiwib25lQ2F0ZWdvcnkiLCJwcm9kdWN0TGlzdCIsInVwZGF0ZU51bVNob3BDYXJ0IiwidXNlclNob3BDYXJ0TGlzdCIsIlNob3BDYXJ0RmllbGRzIiwidXBkYXRlU2hvcENhcnQiLCJvcmRlckNvbmZpcm1JbmZvIiwiRnJlaWdodCIsIkRpY3RGaWVsZHMiLCJzYXZlT3JkZXIiLCJkaWN0TGlzdCIsImxpbWl0VGltZURhdGEiLCJQcm9tb3Rpb25GbGFzaFNhbGUiLCJwcm9kdWN0TGlzdEJ5SWRzIiwiZ3JvdXBRdWV1ZUxpc3QiLCJHcm91cFF1ZXVlRmllbGRzIiwidXBkYXRlT3JkZXIiLCJzYXZlR3JvdXBPcmRlciIsIlNob3BDYXJ0UHJvZHVjdEJveCIsInN0eWxlZCIsImRpdiIsImdyZXkiLCJDYXJ0UHJvZHVjdCIsInNob3BDYXJ0IiwidXNlU3RvcmVNb2RlbCIsInNob3BDYXJ0TW9kZWwiLCJhY3Rpb25zU0NNIiwiYWN0aW9ucyIsInByb2R1Y3RNb2RlbCIsImFjdGlvbnNQTSIsInByb2R1Y3QiLCJkZWFsSW1nVXJsIiwiaW1nIiwidXJsIiwibmFtZSIsIndlaWdodCIsInVuaXQiLCJyZW1hcmsiLCJpc05leHQiLCJpZCIsImdldExpc3QiLCJscyIsIm51bWJlciIsIm1hcmdpblJpZ2h0IiwiaXNEZWxldGUiLCJTaG9wVGl0bGUiLCJtcFN0eWxlIiwicmVkIiwiQWRkcmVzc0JveCIsIkNhcmRCb3giLCJTaG9wVG90YWwiLCJGb290ZXJGaXQiLCJzaGFkb3ciLCJPcmRlclBhZ2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzZWxlY3RBZGRyZXNzTW9kZWwiLCJhY3Rpb25zU0FNIiwic2VsZWN0Q2FyZE1vZGVsIiwiYWN0aW9uc1NlbGVjdENhcmQiLCJzdGF0ZVNDTSIsInN0YXRlIiwiZ2V0TG9hZCIsInVzZUVmZmVjdCIsInVzZXIiLCJnZXRPcmRlckluZm8iLCJhZGRyZXNzRGF0YSIsImRlYWxBZGRyZXNzRGF0YSIsImNhcmREYXRhIiwicGF5Q2FyZExpc3QiLCJmaW5kIiwidiIsImZvcm0iLCJwYXltZW50TWV0aG9kQ2FyZElkIiwicHJvZHVjdFRvdGFsIiwiZGVhbFByb2R1Y3RUb3RhbCIsInRyYW5zcG9ydGF0aW9uQ29zdHMiLCJwaWNrVXBUeXBlIiwiUGlja1VwVHlwZUVudW0iLCJEZWxpdmVyeSIsImZyZWlnaHRDb25maWciLCJyZWR1Y2UiLCJwcmUiLCJjdXIiLCJwYXJzZUZsb2F0IiwiZnJlaWdodFBheSIsIm9yZGVyTWF4IiwibGVuZ3RoIiwiYWN0dWFsbHlQYWlkIiwiZGVhbE1heWJlTnVtYmVyIiwiZGVkdWN0Q29pbiIsInNhbGVUYXgiLCJnZW5lcmF0ZUNvaW4iLCJ1cGRhdGVQYWdlVHlwZSIsInBhZ2VUeXBlRW51bSIsImhlaWdodCIsIlNlbGYiLCJjb21iaW5lQWRkcmVzcyIsImNvbnRhY3RJbmZvcm1hdGlvbiIsIm9wZW5DbGljayIsInJlcyIsInNldEZvcm0iLCJkZWFsTW9uZXkiLCJvcmRlckNvaW5DdXJyZW50TW9udGgiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJmb250U2l6ZSIsInVzZXJMZXZlbExpc3QiLCJjb2RlIiwidXNlckluZm8iLCJ1c2VyTGV2ZWwiLCJzdWJtaXREYXRhIiwic3VidG90YWwiLCJjdXJyZW50VXNlckxldmVsIiwick9yZGVyUHJvZHVjdCIsInNob3BDYXJ0TGlzdCIsIm1hcCIsImNvdW50IiwicHJvZHVjdElkIiwic3VibWl0Iiwic2hvd01lc3NhZ2UiLCJfcXVlcnkiLCJkZWFsVXJsUXVlcnkiLCJvcmRlcklkIiwicmVwbGFjZSIsImNsZWFyRGF0YSIsImdyb3VwUHJvZHVjdE1vZGVsIiwibW9kZWxGYWN0b3J5Iiwic2VsZWN0TnVtIiwic2VsZWN0UXVldWVJZCIsIm51bURpc2NvdW50IiwiZ3JvdXBEaXNjb3VudCIsImdldERhdGEiLCJvcHRpb24iLCJxdWVyeSIsImlkcyIsImdyb3VwUXVldWVJdGVtSW5wdXQiLCJzZXREYXRhIiwiZnBNZXJnZVByZSIsImxpc3QiLCJ1cGRhdGVTZWxlY3ROdW0iLCJkYXRhIiwib3JkZXJJbmZvSXRlbUlucHV0IiwibXV0YXRlIiwiZ3JvdXBPcmRlckl0ZW1JbnB1dCIsIm9yZGVyR3JvdXBBbW91bnQiLCJQcmljZVJlZCIsIk5hbWUiLCJZZWxsb3dTdGFyIiwiY29sb3IiLCJUaXRsZSIsImhlYWRlciIsIkdyb3VwUXVldWVCb3giLCJTbWFydE1hdGNoIiwiUHJpY2UiLCJTdWJtaXQiLCJHcm91cFByb2R1Y3QiLCJhY3Rpb25zR3JvdXBQcm9kdWN0Iiwic3RhdGVHcm91cFByb2R1Y3QiLCJncm91cE9yZGVyUGFnZU1vZGVsIiwiYWN0aW9uc0dyb3VwT3JkZXJQYWdlTW9kZWwiLCJvcGVuIiwiaW1nVXJsIiwicHJpY2VPdXQiLCJwYWNraW5nVW5pdFN0cmluZyIsImdyb3VwUmVtYXJrIiwiZ3JvdXBBbW91bnQiLCJncm91cEFtb3VudFVuaXRTdHJpbmciLCJBcnJheSIsImdyb3VwUHJlY2lzaW9uIiwiaSIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJzaG93IiwiT3JkZXJQYWdlQm94IiwiR3JvdXBPcmRlclBhZ2UiLCJzdGF0ZU9yZGVyUGFnZU1vZGVsIiwibWFyZ2luIiwid2lkdGgiLCJldmVudCIsImluaXRBZGRyZXNzSWQiLCJmcE1lcmdlIiwiZ2V0UGlja1VwVHlwZU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxjQUFjLEdBQUdDLHdEQUFILG1CQUFwQjtBQThEQSxJQUFNQyxhQUFhLEdBQUdELHdEQUFILG9CQUFuQjtBQWVBLElBQU1FLGdCQUFnQixHQUFHRix3REFBSCxvQkFBdEI7QUFlQSxJQUFNRyxZQUFZLEdBQUdILHdEQUFILHFCQVNuQkksa0RBQVEsQ0FBQ0MsY0FUVSxDQUFsQjtBQVlBLElBQU1DLEdBQUcsR0FBRztBQUNqQlAsZ0JBQWMsRUFBZEEsY0FEaUI7QUFFakJJLGNBQVksRUFBWkEsWUFGaUI7QUFHakJGLGVBQWEsRUFBYkEsYUFIaUI7QUFJakJDLGtCQUFnQixFQUFoQkEsZ0JBSmlCO0FBS2pCSyxjQUFZLEVBQUVQLHdEQUFGLG9CQUxLO0FBeUJqQlEsY0FBWSxFQUFFUix3REFBRixvQkF6Qks7QUFpQ2pCUyxPQUFLLEVBQUVULHdEQUFGLG9CQWpDWTtBQXlDakJVLFNBQU8sRUFBRVYsd0RBQUYscUJBU0RJLGtEQUFRLENBQUNPLGNBVFIsRUFVRFAsa0RBQVEsQ0FBQ1EsVUFWUixDQXpDVTtBQXFEakJDLFdBQVMsRUFBRWIsd0RBQUYscUJBaUJISSxrREFBUSxDQUFDVSxlQWpCTixFQWtCSFYsa0RBQVEsQ0FBQ1csbUJBbEJOLEVBbUJIWCxrREFBUSxDQUFDWSxhQW5CTixFQW9CSFosa0RBQVEsQ0FBQ2EsU0FwQk4sQ0FyRFE7QUEyRWpCQyxhQUFXLEVBQUVsQix3REFBRixzQkFHVW1CLDREQUFZLENBQUNDLFdBSHZCLEVBZ0NMaEIsa0RBQVEsQ0FBQ2lCLGdCQWhDSixFQWlDTGpCLGtEQUFRLENBQUNVLGVBakNKLEVBa0NMVixrREFBUSxDQUFDVyxtQkFsQ0osRUFtQ0xYLGtEQUFRLENBQUNZLGFBbkNKLEVBb0NMWixrREFBUSxDQUFDYSxTQXBDSixFQXFDTGIsa0RBQVEsQ0FBQ1EsVUFyQ0osRUFzQ0xSLGtEQUFRLENBQUNPLGNBdENKLEVBdUNMUCxrREFBUSxDQUFDa0IsaUJBdkNKLEVBd0NMbEIsa0RBQVEsQ0FBQ21CLGlCQXhDSixDQTNFTTtBQXFIakJDLGdCQUFjLEVBQUV4Qix3REFBRixzQkFZUkksa0RBQVEsQ0FBQ1EsVUFaRCxDQXJIRztBQW1JakJhLG9CQUFrQixFQUFFekIsd0RBQUYsc0JBTVpJLGtEQUFRLENBQUNrQixpQkFORyxDQW5JRDtBQTJJakJJLGFBQVcsRUFBRTFCLHdEQUFGLHNCQU1MSSxrREFBUSxDQUFDa0IsaUJBTkosQ0EzSU07QUFtSmpCSyxpQkFBZSxFQUFFM0Isd0RBQUYsc0JBTVRJLGtEQUFRLENBQUNrQixpQkFOQSxDQW5KRTtBQTJKakJNLHVCQUFxQixFQUFFNUIsd0RBQUYsc0JBTWZJLGtEQUFRLENBQUNrQixpQkFOTSxDQTNKSjtBQW1LakJPLGVBQWEsRUFBRTdCLHdEQUFGLHNCQUdRbUIsNERBQVksQ0FBQ0MsV0FIckIsRUFjUGhCLGtEQUFRLENBQUNPLGNBZEYsRUFlUFAsa0RBQVEsQ0FBQ2lCLGdCQWZGLEVBZ0JQakIsa0RBQVEsQ0FBQ1EsVUFoQkYsQ0FuS0k7QUFxTGpCa0IsZ0JBQWMsRUFBRTlCLHdEQUFGLHNCQU1SSSxrREFBUSxDQUFDTyxjQU5ELENBckxHO0FBNkxqQm9CLHdCQUFzQixFQUFFL0Isd0RBQUYsc0JBTWhCSSxrREFBUSxDQUFDbUIsaUJBTk8sQ0E3TEw7QUFxTWpCUyxhQUFXLEVBQUVoQyx3REFBRixzQkFNTEksa0RBQVEsQ0FBQ21CLGlCQU5KLENBck1NO0FBNk1qQlUsaUJBQWUsRUFBRWpDLHdEQUFGLHNCQU1USSxrREFBUSxDQUFDbUIsaUJBTkEsQ0E3TUU7QUFxTmpCVyx1QkFBcUIsRUFBRWxDLHdEQUFGLHNCQU1mSSxrREFBUSxDQUFDbUIsaUJBTk0sQ0FyTko7QUE2TmpCWSxvQkFBa0IsRUFBRW5DLHdEQUFGLHNCQW1CWkksa0RBQVEsQ0FBQ1ksYUFuQkcsRUFvQlpaLGtEQUFRLENBQUNhLFNBcEJHLEVBcUJaYixrREFBUSxDQUFDQyxjQXJCRyxDQTdORDtBQW9QakIrQixlQUFhLEVBQUVwQyx3REFBRixxQkFwUEk7QUF5UGpCcUMsYUFBVyxFQUFFckMsd0RBQUYsc0JBWUxJLGtEQUFRLENBQUNDLGNBWkosQ0F6UE07QUF1UWpCaUMsYUFBVyxFQUFFdEMsd0RBQUYsc0JBWUxJLGtEQUFRLENBQUNZLGFBWkosRUFhTFosa0RBQVEsQ0FBQ2EsU0FiSixDQXZRTTtBQXNSakJzQixtQkFBaUIsRUFBRXZDLHdEQUFGLHNCQWFYSSxrREFBUSxDQUFDWSxhQWJFLEVBY1haLGtEQUFRLENBQUNRLFVBZEUsQ0F0UkE7QUFzU2pCNEIsa0JBQWdCLEVBQUV4Qyx3REFBRixzQkFZVkksa0RBQVEsQ0FBQ3FDLGNBWkMsRUFhVnJDLGtEQUFRLENBQUNZLGFBYkMsRUFjVlosa0RBQVEsQ0FBQ2EsU0FkQyxDQXRTQztBQXNUakJ5QixnQkFBYyxFQUFFMUMsd0RBQUYsc0JBTVJJLGtEQUFRLENBQUNxQyxjQU5ELENBdFRHO0FBOFRqQkUsa0JBQWdCLEVBQUUzQyx3REFBRixzQkFHS21CLDREQUFZLENBQUNDLFdBSGxCLEVBb0JLRCw0REFBWSxDQUFDeUIsT0FwQmxCLEVBOEJWeEMsa0RBQVEsQ0FBQ21CLGlCQTlCQyxFQStCVm5CLGtEQUFRLENBQUNrQixpQkEvQkMsRUFnQ1ZsQixrREFBUSxDQUFDTyxjQWhDQyxFQWlDVlAsa0RBQVEsQ0FBQ1EsVUFqQ0MsRUFrQ1ZSLGtEQUFRLENBQUNpQixnQkFsQ0MsRUFtQ1ZqQixrREFBUSxDQUFDeUMsVUFuQ0MsQ0E5VEM7QUFtV2pCQyxXQUFTLEVBQUU5Qyx3REFBRixzQkFNSEksa0RBQVEsQ0FBQ1UsZUFOTixDQW5XUTtBQTJXakJpQyxVQUFRLEVBQUUvQyx3REFBRixzQkFNRkksa0RBQVEsQ0FBQ3lDLFVBTlAsQ0EzV1M7QUFtWGpCRyxlQUFhLEVBQUVoRCx3REFBRixzQkFHTW1CLDREQUFZLENBQUM4QixrQkFIbkIsRUFRVDdDLGtEQUFRLENBQUNpQixnQkFSQSxDQW5YSTtBQTZYakI2QixrQkFBZ0IsRUFBRWxELHdEQUFGLHNCQVlaSSxrREFBUSxDQUFDWSxhQVpHLEVBYVpaLGtEQUFRLENBQUNhLFNBYkcsQ0E3WEM7QUE0WWpCa0MsZ0JBQWMsRUFBRW5ELHdEQUFGLHNCQU1WSSxrREFBUSxDQUFDZ0QsZ0JBTkMsQ0E1WUc7QUFvWmpCQyxhQUFXLEVBQUVyRCx3REFBRixzQkFNUEksa0RBQVEsQ0FBQ1UsZUFORixDQXBaTTtBQTRaakJ3QyxnQkFBYyxFQUFFdEQsd0RBQUYsc0JBTVZJLGtEQUFRLENBQUNVLGVBTkM7QUE1WkcsQ0FBWjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVHUDtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTXlDLGtCQUFrQixHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDZVQWFsQkMsNkRBQUksQ0FBQyxHQUFELENBYmMsQ0FBeEI7S0FBTUgsa0I7QUE0Qk4sSUFBTUksV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBd0M7QUFBQTs7QUFBQTs7QUFBQSxNQUF0Q0MsUUFBc0MsUUFBdENBLFFBQXNDOztBQUFBLHVCQUNuQ0MsNEVBQWEsQ0FBQ0MscURBQUQsQ0FEc0I7QUFBQSxNQUNqREMsVUFEaUQsa0JBQzFEQyxPQUQwRDs7QUFBQSx3QkFFcENILDRFQUFhLENBQUNJLGdGQUFELENBRnVCO0FBQUEsTUFFakRDLFNBRmlELG1CQUUxREYsT0FGMEQ7O0FBR2pFLE1BQU1HLE9BQU8sR0FBR1AsUUFBUSxDQUFDTyxPQUF6QjtBQUVBLFNBQU8sTUFBQyxrQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0w7QUFBSyxPQUFHLEVBQUVDLDZEQUFVLHNCQUFDUixRQUFRLENBQUNPLE9BQVYsK0VBQUMsa0JBQWtCRSxHQUFuQixvRkFBQyxzQkFBd0IsQ0FBeEIsQ0FBRCwyREFBQyx1QkFBNEJDLEdBQTdCLENBQXBCO0FBQ0ssT0FBRyxFQUFDLEVBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURLLEVBR0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPSCxPQUFQLGFBQU9BLE9BQVAsdUJBQU9BLE9BQU8sQ0FBRUksSUFBaEIsRUFBc0JKLE9BQXRCLGFBQXNCQSxPQUF0Qix1QkFBc0JBLE9BQU8sQ0FBRUssTUFBL0IsRUFBdUNMLE9BQXZDLGFBQXVDQSxPQUF2Qyx1QkFBdUNBLE9BQU8sQ0FBRU0sSUFBaEQsQ0FISyxFQUlMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBVU4sT0FBVixhQUFVQSxPQUFWLHVCQUFVQSxPQUFPLENBQUVPLE1BQW5CLENBSkssRUFLTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnRkFBRDtBQUFjLFdBQU8sRUFBRVAsT0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUlQLFFBQVEsQ0FBQ2UsTUFBVCxLQUFvQixDQUFwQixJQUF5QixtRUFDekIsTUFBQyx3REFBRDtBQUNJLFFBQUksRUFBRSxPQURWO0FBRUksV0FBTyxFQUFFLFVBRmI7QUFHSSxXQUFPLGdNQUFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNEVCxTQUFTLENBQUN4QixjQUFWLENBQXlCO0FBQzdCaUMsc0JBQU0sRUFBRSxDQURxQjtBQUU3QkMsa0JBQUUsRUFBRWhCLFFBQVEsQ0FBQ2dCO0FBRmdCLGVBQXpCLENBREM7O0FBQUE7QUFLUGIsd0JBQVUsQ0FBQ2MsT0FBWDs7QUFMTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFGLEVBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVVFQywwREFBRSxDQUFDLE1BQUQsQ0FWSixDQUR5QixFQVl4QixNQUFDLDREQUFEO0FBQ0csWUFBUSxFQUFFLHFCQUFDbEIsUUFBRCxhQUFDQSxRQUFELHVCQUFDQSxRQUFRLENBQUVtQixNQUFYLCtEQUFxQixDQUFyQixLQUEyQixDQUR4QztBQUVHLFFBQUksRUFBRSxPQUZUO0FBR0csV0FBTyxnTUFBRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDRGIsU0FBUyxDQUFDM0IsaUJBQVYsQ0FBNEI7QUFDaEM0Qix1QkFBTyxFQUFQQSxPQURnQztBQUVoQ1ksc0JBQU0sRUFBRSxDQUFDO0FBRnVCLGVBQTVCLENBREM7O0FBQUE7QUFLUGhCLHdCQUFVLENBQUNjLE9BQVg7O0FBTE87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRixFQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FVQSxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWQSxDQVp3QixFQXVCeEJqQixRQUFRLENBQUNtQixNQXZCZSxFQXdCekIsTUFBQyw0REFBRDtBQUNJLFFBQUksRUFBRSxPQURWO0FBRUksV0FBTyxnTUFBRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDRGIsU0FBUyxDQUFDM0IsaUJBQVYsQ0FBNEI7QUFDaEM0Qix1QkFBTyxFQUFQQTtBQURnQyxlQUE1QixDQURDOztBQUFBO0FBSVBKLHdCQUFVLENBQUNjLE9BQVg7O0FBSk87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRixFQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FTRSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixDQXhCeUIsQ0FBMUIsSUFtQ08sbUVBQ04sTUFBQyx3REFBRDtBQUNJLFNBQUssRUFBRTtBQUFDRyxpQkFBVyxFQUFFO0FBQWQsS0FEWDtBQUVJLFFBQUksRUFBRSxPQUZWO0FBR0ksV0FBTyxFQUFFLFVBSGI7QUFJSSxTQUFLLEVBQUUsV0FKWDtBQUtJLFdBQU8sZ01BQUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ0RkLFNBQVMsQ0FBQ3hCLGNBQVYsQ0FBeUI7QUFDN0J1Qyx3QkFBUSxFQUFFLENBRG1CO0FBRTdCTCxrQkFBRSxFQUFFaEIsUUFBUSxDQUFDZ0I7QUFGZ0IsZUFBekIsQ0FEQzs7QUFBQTtBQUtQYix3QkFBVSxDQUFDYyxPQUFYOztBQUxPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUYsRUFMWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBWUVDLDBEQUFFLENBQUMsSUFBRCxDQVpKLENBRE0sRUFjTixNQUFDLHdEQUFEO0FBQ0ksUUFBSSxFQUFFLE9BRFY7QUFFSSxXQUFPLEVBQUUsVUFGYjtBQUdJLFdBQU8sZ01BQUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ0RaLFNBQVMsQ0FBQ3hCLGNBQVYsQ0FBeUI7QUFDN0JpQyxzQkFBTSxFQUFFLENBRHFCO0FBRTdCQyxrQkFBRSxFQUFFaEIsUUFBUSxDQUFDZ0I7QUFGZ0IsZUFBekIsQ0FEQzs7QUFBQTtBQUtQYix3QkFBVSxDQUFDYyxPQUFYOztBQUxPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUYsRUFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBVUVDLDBEQUFFLENBQUMsT0FBRCxDQVZKLENBZE0sQ0FyQ1YsQ0FMSyxDQUFQO0FBc0VELENBM0VNOztHQUFNbkIsVztVQUNtQkUsb0UsRUFDREEsb0U7OztNQUZsQkYsVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTXVCLFNBQVMsR0FBRzFCLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsK0dBT1QwQixzREFBTyxDQUFDQyxHQVBDLENBQWY7S0FBTUYsUztBQVVOLElBQU1HLFVBQVUsR0FBRzdCLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEscUlBQWhCO01BQU00QixVO0FBYU4sSUFBTUMsT0FBTyxHQUFHOUIseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxxTUFBYjtNQUFNNkIsTztBQWNOLElBQU1DLFNBQVMsR0FBRy9CLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEscUZBQWY7TUFBTThCLFM7QUFNYixJQUFNQyxTQUFTLEdBQUdoQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHNSQVVDMEIsc0RBQU8sQ0FBQ00sTUFBUixDQUFlLEdBQWYsQ0FWRCxDQUFmO01BQU1ELFM7QUFzQkMsSUFBTUUsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUFBOztBQUM3QixNQUFNQyxNQUFNLEdBQUdDLDhEQUFTLEVBQXhCOztBQUQ2Qix1QkFFQy9CLDJFQUFhLENBQUNnQyw2RUFBRCxDQUZkO0FBQUEsTUFFYkMsVUFGYSxrQkFFdEI5QixPQUZzQjs7QUFBQSx3QkFHUUgsMkVBQWEsQ0FBQ2tDLHVFQUFELENBSHJCO0FBQUEsTUFHYkMsaUJBSGEsbUJBR3RCaEMsT0FIc0I7O0FBQUEsd0JBSTJCSCwyRUFBYSxDQUFDQyxvREFBRCxDQUp4QztBQUFBLE1BSWZtQyxRQUplLG1CQUl0QkMsS0FKc0I7QUFBQSxNQUlJbkMsVUFKSixtQkFJTEMsT0FKSztBQUFBLE1BSWdCbUMsT0FKaEIsbUJBSWdCQSxPQUpoQjs7QUFNN0JDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUksQ0FBQ0gsUUFBUSxDQUFDSSxJQUFULENBQWN6QixFQUFuQixFQUF1QjtBQUNyQmIsZ0JBQVUsQ0FBQ3VDLFlBQVg7QUFDRDtBQUNGLEdBSlEsRUFJTixFQUpNLENBQVQ7QUFNQSxNQUFNQyxXQUFXLEdBQUdOLFFBQVEsQ0FBQ08sZUFBVCxDQUF5QlAsUUFBekIsQ0FBcEI7QUFDQSxNQUFNUSxRQUFRLEdBQUcsMEJBQUFSLFFBQVEsQ0FBQ1MsV0FBVCxnRkFBc0JDLElBQXRCLENBQTJCLFVBQUFDLENBQUM7QUFBQSxXQUFJQSxDQUFDLENBQUNoQyxFQUFGLEtBQVNxQixRQUFRLENBQUNZLElBQVQsQ0FBY0MsbUJBQTNCO0FBQUEsR0FBNUIsTUFBK0UsRUFBaEc7QUFDQSxNQUFNQyxZQUFZLEdBQUdkLFFBQVEsQ0FBQ2UsZ0JBQVQsQ0FBMEJmLFFBQTFCLENBQXJCO0FBQ0EsTUFBTWdCLG1CQUFtQixHQUFJaEIsUUFBUSxDQUFDWSxJQUFULENBQWNLLFVBQWQsS0FBNkJDLCtEQUFjLENBQUNDLFFBQTVDLElBQXlEbkIsUUFBUSxDQUFDb0IsYUFBVCxDQUF1QkMsTUFBdkIsQ0FBOEIsVUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDaEksUUFBSUQsR0FBRyxHQUFHRSxVQUFVLENBQUNELEdBQUQsYUFBQ0EsR0FBRCx1QkFBQ0EsR0FBRyxDQUFFRSxVQUFOLENBQWhCLElBQXFDWCxZQUFZLEdBQUdVLFVBQVUsQ0FBQ0QsR0FBRCxhQUFDQSxHQUFELHVCQUFDQSxHQUFHLENBQUVHLFFBQU4sQ0FBbEUsRUFBbUY7QUFDakYsYUFBT0YsVUFBVSxDQUFDRCxHQUFELGFBQUNBLEdBQUQsdUJBQUNBLEdBQUcsQ0FBRUUsVUFBTixDQUFqQjtBQUNELEtBRkQsTUFFTztBQUNMLGFBQU9ILEdBQVA7QUFDRDtBQUNGLEdBTnFGLEVBTW5GRSxVQUFVLDBCQUFDeEIsUUFBUSxDQUFDb0IsYUFBVCxDQUF1QnBCLFFBQVEsQ0FBQ29CLGFBQVQsQ0FBdUJPLE1BQXZCLEdBQWdDLENBQXZELENBQUQsMERBQUMsc0JBQTJERixVQUE1RCxDQU55RSxDQUExRCxJQU0rRCxDQU4zRjtBQU9BLE1BQU1HLFlBQVksR0FBR2QsWUFBWSxHQUFHRSxtQkFBZixHQUFxQ2EscUVBQWUsQ0FBQzdCLFFBQVEsQ0FBQ1ksSUFBVCxDQUFja0IsVUFBZixDQUFwRCxHQUFpRkQscUVBQWUsQ0FBQzdCLFFBQVEsQ0FBQ1ksSUFBVCxDQUFjbUIsT0FBZixDQUFySDtBQUNBLE1BQU1DLFlBQVksR0FBR0osWUFBWSxHQUFHLElBQXBDO0FBRUEsU0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0wsTUFBQywrRUFBRDtBQUNJLFNBQUssRUFBRSxNQURYO0FBRUksWUFBUSxFQUFFLG9CQUFNO0FBQ2Q5RCxnQkFBVSxDQUFDbUUsY0FBWCxDQUEwQkMsbURBQVksQ0FBQ3ZFLFFBQXZDO0FBQ0EsYUFBTyxJQUFQO0FBQ0QsS0FMTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREssRUFRSCxDQUFDLENBQUN1QyxPQUFPLENBQUM3RixzREFBRyxDQUFDcUMsZ0JBQUwsQ0FBVCxJQUFtQyxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBcEMsSUFBMEQ7QUFBSyxTQUFLLEVBQUU7QUFBQ3lGLFlBQU0sRUFBRTtBQUFULEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJ0RCxFQVNMLE1BQUMsd0VBQUQ7QUFDSSxhQUFTLEVBQUUsb0JBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdFLE1BQUMsMERBQUQ7QUFBTyxLQUFDLEVBQUUsRUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsRUFJRSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMERBQUQ7QUFBTyxLQUFDLEVBQUUsRUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFR3RELHlEQUFFLENBQUVtQixRQUFRLENBQUNZLElBQVQsQ0FBY0ssVUFBZCxLQUE2QkMsK0RBQWMsQ0FBQ2tCLElBQTVDLElBQW9ELE1BQXJELElBQWdFLE1BQWpFLENBRkwsQ0FKRixFQVFFLE1BQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFDTTlCLFdBQVcsQ0FBQytCLGNBRGxCLEVBREYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQ00vQixXQUFXLENBQUNoQyxJQURsQixjQUMwQmdDLFdBQVcsQ0FBQ2dDLGtCQUR0QyxFQUpGLENBREYsRUFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2REFBRDtBQUNJLFdBQU8sZ01BQUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDV3pDLFVBQVUsQ0FBQzBDLFNBQVgsRUFEWDs7QUFBQTtBQUNEQyxpQkFEQzs7QUFFUCxrQkFBSUEsR0FBSixFQUFTO0FBQ1AxRSwwQkFBVSxDQUFDMkUsT0FBWCxDQUFtQixDQUFDLFdBQUQsRUFBY0QsR0FBZCxDQUFuQjtBQUNEOztBQUpNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUYsRUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUUsTUFBQyxzRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkYsQ0FERixDQVRGLENBUkYsRUE4QkUsTUFBQywwREFBRDtBQUFPLEtBQUMsRUFBRS9FLDhEQUFJLENBQUMsR0FBRCxDQUFkO0FBQ08sS0FBQyxFQUFFLEVBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTlCRixFQWdDRSxNQUFDLDBEQUFEO0FBQU8sS0FBQyxFQUFFLEVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhDRixFQWlDRSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMERBQUQ7QUFBTyxLQUFDLEVBQUUsRUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFR29CLHlEQUFFLENBQUMsTUFBRCxDQUZMLENBakNGLEVBcUNFLE1BQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFTMkIsUUFBUSxDQUFDbEMsSUFBbEIsQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBU2tDLFFBQVEsQ0FBQzFCLE1BQWxCLENBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2REFBRDtBQUNJLFdBQU8sZ01BQUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDV2lCLGlCQUFpQixDQUFDd0MsU0FBbEIsRUFEWDs7QUFBQTtBQUNEQyxpQkFEQzs7QUFFUCxrQkFBSUEsR0FBSixFQUFTO0FBQ1AxRSwwQkFBVSxDQUFDMkUsT0FBWCxDQUFtQixDQUFDLHFCQUFELEVBQXdCRCxHQUF4QixDQUFuQjtBQUNEOztBQUpNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUYsRUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUUsTUFBQyxzRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkYsQ0FERixDQUhGLENBckNGLEVBcURFLE1BQUMsMERBQUQ7QUFBTyxLQUFDLEVBQUUvRSw4REFBSSxDQUFDLEdBQUQsQ0FBZDtBQUNPLEtBQUMsRUFBRSxFQURWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFyREYsRUF1REUsTUFBQywwREFBRDtBQUFPLEtBQUMsRUFBRSxFQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF2REYsRUF3REUsTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDBEQUFEO0FBQU8sS0FBQyxFQUFFLEVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUdvQix5REFBRSxDQUFDLE9BQUQsQ0FGTCxFQUdFLE1BQUMsMERBQUQ7QUFBTyxLQUFDLEVBQUUsRUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVNBLHlEQUFFLENBQUMsUUFBRCxDQUFYLEVBQXVCNkQsK0RBQVMsQ0FBQzFDLFFBQVEsQ0FBQ0ksSUFBVCxDQUFjdUMscUJBQWYsQ0FBaEMsQ0FKRixDQXhERixFQThERTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywwREFBRDtBQUFPLEtBQUMsRUFBRSxFQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsNERBQUQ7QUFDSSxTQUFLLEVBQUU7QUFBQ0MsZUFBUyxFQUFFLEtBQVo7QUFBbUJDLGtCQUFZLEVBQUU7QUFBakMsS0FEWDtBQUVJLFNBQUssRUFBRWhFLHlEQUFFLENBQUMsRUFBRCxDQUZiO0FBR0ksU0FBSyxFQUFFbUIsUUFBUSxDQUFDWSxJQUFULENBQWNrQixVQUh6QjtBQUlJLFlBQVEsRUFBRSxrQkFBQWdCLENBQUMsRUFBSTtBQUNiaEYsZ0JBQVUsQ0FBQzJFLE9BQVgsQ0FBbUIsQ0FBQyxZQUFELEVBQWVLLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUF4QixDQUFuQjtBQUNELEtBTkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBOURGLEVBeUVFLE1BQUMsMERBQUQ7QUFBTyxLQUFDLEVBQUV2Riw4REFBSSxDQUFDLEdBQUQsQ0FBZDtBQUNPLEtBQUMsRUFBRSxFQURWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF6RUYsRUEyRUUsTUFBQywwREFBRDtBQUFPLEtBQUMsRUFBRSxFQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEzRUYsRUE0RUUsTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVNvQix5REFBRSxDQUFDLE9BQUQsQ0FBWCxDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFTNkQsK0RBQVMsQ0FBQzVCLFlBQUQsQ0FBbEIsQ0FGRixDQTVFRixFQWdGR0UsbUJBQW1CLEdBQUcsQ0FBdEIsSUFBMkIsTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFTbkMseURBQUUsQ0FBQyxJQUFELENBQVgsQ0FEMEIsRUFFMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFTNkQsK0RBQVMsQ0FBQzFCLG1CQUFELENBQWxCLENBRjBCLENBaEY5QixFQW9GRSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBU25DLHlEQUFFLENBQUMsT0FBRCxDQUFYLENBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVM2RCwrREFBUyxDQUFDMUMsUUFBUSxDQUFDWSxJQUFULENBQWNrQixVQUFmLEVBQTJCLEdBQTNCLENBQWxCLENBRkYsQ0FwRkYsRUF3RkUsTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVNqRCx5REFBRSxDQUFDLEtBQUQsQ0FBWCxDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFTNkQsK0RBQVMsQ0FBQzFDLFFBQVEsQ0FBQ1ksSUFBVCxDQUFjbUIsT0FBZixDQUFsQixDQUZGLENBeEZGLEVBNEZFLE1BQUMsU0FBRDtBQUNJLFNBQUssRUFBRTtBQUFDa0IsY0FBUSxFQUFFO0FBQVgsS0FEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFTcEUseURBQUUsQ0FBQyxNQUFELENBQVgsQ0FIRixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUzZELCtEQUFTLENBQUNkLFlBQUQsQ0FBbEIsQ0FKRixDQTVGRixDQVRLLEVBNEdMLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFTL0MseURBQUUsQ0FBQyxNQUFELENBQVgsRUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU9BLHlEQUFFLDBCQUFDbUIsUUFBUSxDQUFDa0QsYUFBVCxDQUF1QnhDLElBQXZCLENBQTRCLFVBQUFDLENBQUM7QUFBQTs7QUFBQSxXQUFJQSxDQUFDLENBQUN3QyxJQUFGLCtCQUFXbkQsUUFBUSxDQUFDSSxJQUFULENBQWNnRCxRQUF6QiwwREFBVyxzQkFBd0JDLFNBQW5DLENBQUo7QUFBQSxHQUE3QixDQUFELDBEQUFDLHNCQUFnRi9FLElBQWpGLENBQVQsQ0FERixDQURGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFTTyx5REFBRSxDQUFDLGFBQUQsQ0FBWCxFQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTzZELCtEQUFTLENBQUNWLFlBQUQsQ0FBaEIsQ0FERixDQUpGLEVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkVBQUQ7QUFDSSxXQUFPLEVBQUU5QixPQUFPLENBQUM3RixzREFBRyxDQUFDd0MsU0FBTCxDQURwQjtBQUVJLFdBQU8sZ01BQUU7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNEeUcsd0JBREMsbUNBRUZ0RCxRQUFRLENBQUNZLElBRlA7QUFHTG9CLDRCQUFZLEVBQVpBLFlBSEs7QUFJTEosNEJBQVksRUFBWkEsWUFKSztBQUtMWixtQ0FBbUIsRUFBbkJBLG1CQUxLO0FBTUx1Qyx3QkFBUSxFQUFFekMsWUFOTDtBQU9MMEMsZ0NBQWdCLDRCQUFFeEQsUUFBUSxDQUFDSSxJQUFULENBQWNnRCxRQUFoQiwyREFBRSx1QkFBd0JDLFNBUHJDO0FBUUxJLDZCQUFhLEVBQUV6RCxRQUFRLENBQUMwRCxZQUFULENBQXNCQyxHQUF0QixDQUEwQixVQUFBaEQsQ0FBQztBQUFBOztBQUFBLHlCQUFLO0FBQzdDaUQseUJBQUssRUFBRWpELENBQUMsQ0FBQzdCLE1BRG9DO0FBRTdDK0UsNkJBQVMsZ0JBQUVsRCxDQUFDLENBQUN6QyxPQUFKLCtDQUFFLFdBQVdTLEVBRnVCO0FBRzdDVCwyQkFBTyxFQUFFeUMsQ0FBQyxDQUFDekM7QUFIa0MsbUJBQUw7QUFBQSxpQkFBM0I7QUFSVjtBQUFBO0FBQUEscUJBY1dKLFVBQVUsQ0FBQ2dHLE1BQVgsbUJBQ2JSLFVBRGEsRUFkWDs7QUFBQTtBQWNEZCxpQkFkQzs7QUFBQSxvQkFpQkhBLEdBakJHLGFBaUJIQSxHQWpCRyx5Q0FpQkhBLEdBQUcsQ0FBRTNGLFNBakJGLG1EQWlCSCxlQUFnQjhCLEVBakJiO0FBQUE7QUFBQTtBQUFBOztBQWtCTG9GLDhGQUFXLENBQUMsWUFBRCxDQUFYLENBbEJLLENBbUJMOztBQUNNQyxvQkFwQkQsR0FvQlVDLGtFQUFZLENBQUM7QUFBQ0MsdUJBQU8sRUFBRTFCLEdBQUYsYUFBRUEsR0FBRiwwQ0FBRUEsR0FBRyxDQUFFM0YsU0FBUCxvREFBRSxnQkFBZ0I4QjtBQUExQixlQUFELENBcEJ0QjtBQUFBO0FBQUEscUJBcUJDZSxNQUFNLENBQUN5RSxPQUFQLGVBQXNCSCxNQUF0QixpQkFBdUNBLE1BQXZDLEVBckJEOztBQUFBO0FBc0JMbEcsd0JBQVUsQ0FBQ3NHLFNBQVg7QUFDQXRHLHdCQUFVLENBQUNjLE9BQVg7O0FBdkJLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUYsRUFGWDtBQTRCSSxXQUFPLEVBQUUsV0E1QmI7QUE2QkksU0FBSyxFQUFFLFdBN0JYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0E4QkVDLHlEQUFFLENBQUMsTUFBRCxDQTlCSixDQURGLENBUEYsQ0E1R0ssRUFxSkwsTUFBQyx3RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBckpLLEVBc0pMLE1BQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXRKSyxDQUFQO0FBd0pELENBakxNOztHQUFNWSxTO1VBQ0lFLHNELEVBQ2UvQixtRSxFQUNPQSxtRSxFQUNtQkEsbUU7OztNQUo3QzZCLFM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RmI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNNEUsaUJBQWlCLEdBQUdDLDJFQUFZLENBQUMsbUJBQUQsRUFBc0I7QUFDakVwRyxTQUFPLEVBQUUsRUFEd0Q7QUFFakVoQixnQkFBYyxFQUFFLEVBRmlEO0FBR2pFcUgsV0FBUyxFQUFFLENBSHNEO0FBSWpFQyxlQUFhLEVBQUUsRUFKa0Q7QUFLakVDLGFBQVcsRUFBRSxDQUxvRDtBQU1qRUMsZUFBYSxFQUFFO0FBTmtELENBQXRCLEVBTzFDO0FBQ0RDLFNBQU87QUFBQSxvTUFBRSxpQkFBTzNCLEtBQVAsRUFBc0I0QixNQUF0QjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNXQSxNQUFNLENBQUNDLEtBQVAsQ0FBYXhLLHFEQUFHLENBQUM0QyxnQkFBakIsRUFBbUM7QUFDbkQ2SCxtQkFBRyxFQUFFLENBQUM5QixLQUFEO0FBRDhDLGVBQW5DLENBRFg7O0FBQUE7QUFDRFIsaUJBREM7QUFBQTtBQUFBLHFCQUlzQm9DLE1BQU0sQ0FBQ0MsS0FBUCxDQUFheEsscURBQUcsQ0FBQzZDLGNBQWpCLEVBQWlDO0FBQzVENkgsbUNBQW1CLEVBQUU7QUFDbkI3Ryx5QkFBTyxFQUFFO0FBQ1BTLHNCQUFFLEVBQUVxRTtBQURHO0FBRFU7QUFEdUMsZUFBakMsQ0FKdEI7O0FBQUE7QUFJRDlGLDRCQUpDO0FBV1AwSCxvQkFBTSxDQUFDSSxPQUFQLENBQWVDLGdFQUFVLENBQUM7QUFDeEIvRyx1QkFBTywyQkFBRXNFLEdBQUYsYUFBRUEsR0FBRixpREFBRUEsR0FBRyxDQUFFdkYsZ0JBQVAsMkRBQUUsdUJBQXVCaUksSUFBdkIsQ0FBNEIsQ0FBNUIsQ0FBRix5RUFBb0MsRUFEbkI7QUFFeEJoSSw4QkFBYywyQkFBRUEsY0FBRixhQUFFQSxjQUFGLHVCQUFFQSxjQUFjLENBQUVBLGNBQWxCLHlFQUFvQztBQUYxQixlQUFELENBQXpCOztBQVhPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUY7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsS0FETjtBQWlCRGlJLGlCQUFlLEVBQUUseUJBQUNuQyxLQUFELEVBQWdCNEIsTUFBaEIsRUFBMkI7QUFDMUNBLFVBQU0sQ0FBQ0ksT0FBUCxDQUFlQyxnRUFBVSxDQUFDO0FBQ3hCVixlQUFTLEVBQUV2QixLQUFLLEtBQUs0QixNQUFNLENBQUNRLElBQVAsQ0FBWWIsU0FBdEIsR0FBa0MsQ0FBbEMsR0FBc0N2QjtBQUR6QixLQUFELENBQXpCO0FBR0QsR0FyQkE7QUFzQkRjLFFBQU07QUFBQSxtTUFBRSx3QkFBeUVjLE1BQXpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFRUyxnQ0FBUixRQUFRQSxrQkFBUjtBQUNOVCxvQkFBTSxDQUFDVSxNQUFQLENBQWNqTCxxREFBRyxDQUFDZ0QsY0FBbEIsRUFBa0M7QUFDaENnSSxrQ0FBa0Isb0JBQ1hBLGtCQURXLENBRGM7QUFJaENFLG1DQUFtQixFQUFFO0FBQ25CQyxrQ0FBZ0IsRUFBRVosTUFBTSxDQUFDUSxJQUFQLENBQVliO0FBRFgsaUJBSlc7QUFPaENRLG1DQUFtQjtBQUNqQjdHLHlCQUFPLEVBQUUwRyxNQUFNLENBQUNRLElBQVAsQ0FBWWxIO0FBREosbUJBRWIwRyxNQUFNLENBQUNRLElBQVAsQ0FBWVosYUFBWixHQUE0QjtBQUFDN0Ysb0JBQUUsRUFBRWlHLE1BQU0sQ0FBQ1EsSUFBUCxDQUFZWjtBQUFqQixpQkFBNUIsR0FBOEQsRUFGakQ7QUFQYSxlQUFsQzs7QUFETTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFGOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBdEJMLENBUDBDLENBQXRDO0FBNkNQLElBQU1pQixRQUFRLEdBQUdsSSwwREFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDRNQUNFMEIsc0RBQU8sQ0FBQ0MsR0FEVixDQUFkO0tBQU1zRyxRO0FBZU4sSUFBTUMsSUFBSSxHQUFHbkksMERBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwyUUFZVUMsOERBQUksQ0FBQyxLQUFELENBWmQsQ0FBVjtNQUFNaUksSTs7QUF1Qk4sSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWE7QUFBQSxTQUFNLE1BQUMscUVBQUQ7QUFBaUIsWUFBUSxFQUFFLE9BQTNCO0FBQ2lCLFNBQUssRUFBRTtBQUFDQyxXQUFLLEVBQUU7QUFBUixLQUR4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQU47QUFBQSxDQUFuQjs7TUFBTUQsVTtBQUdOLElBQU1FLEtBQUssR0FBR3RJLDBEQUFNLENBQUN1SSxNQUFWO0FBQUE7QUFBQTtBQUFBLHVCQUFYO01BQU1ELEs7QUFHTixJQUFNRSxhQUFhLEdBQUd4SSwwREFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHFCQUFuQjtNQUFNdUksYTtBQUlOLElBQU1DLFVBQVUsR0FBR3pJLDBEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsaUdBQWhCO01BQU13SSxVO0FBV04sSUFBTUMsS0FBSyxHQUFHMUksMERBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxxSkFBWDtNQUFNeUksSztBQWdCTixJQUFNQyxNQUFNLEdBQUczSSwwREFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHdOQU1jMEIsc0RBQU8sQ0FBQ0MsR0FOdEIsRUFVSUQsc0RBQU8sQ0FBQ00sTUFBUixDQUFlLEdBQWYsQ0FWSixFQWFDTixzREFBTyxDQUFDQyxHQWJULENBQVo7TUFBTStHLE07QUFpQkMsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUFBOztBQUFBOztBQUNoQyxNQUFNekcsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1oQixFQUFFLDZCQUFJZSxNQUFNLENBQUNtRixLQUFYLGtEQUFJLGNBQWNsRyxFQUFsQix5Q0FBbUMsRUFBM0M7O0FBRmdDLHVCQUdpQ2YsNEVBQWEsQ0FBQ3lHLGlCQUFELENBSDlDO0FBQUEsTUFHaEIrQixtQkFIZ0Isa0JBR3pCckksT0FIeUI7QUFBQSxNQUdZc0ksaUJBSFosa0JBR0twRyxLQUhMOztBQUloQ0UseURBQVMsQ0FBQyxZQUFNO0FBQ2RpRyx1QkFBbUIsQ0FBQ3pCLE9BQXBCLENBQTRCaEcsRUFBNUI7QUFDRCxHQUZRLEVBRU4sQ0FBQ0EsRUFBRCxDQUZNLENBQVQ7O0FBSmdDLHdCQU9jZiw0RUFBYSxDQUFDMEksb0VBQUQsQ0FQM0I7QUFBQSxNQU9oQkMsMEJBUGdCLG1CQU96QnhJLE9BUHlCOztBQVNoQyxNQUFNRyxPQUFPLEdBQUdtSSxpQkFBaUIsQ0FBQ25JLE9BQWxDO0FBQ0FpQyx5REFBUyxDQUFDLFlBQU07QUFDZGlHLHVCQUFtQixDQUFDakIsZUFBcEIsQ0FBb0MsQ0FBcEM7QUFDQW9CLDhCQUEwQixDQUFDQyxJQUEzQjtBQUNELEdBSFEsRUFHTixFQUhNLENBQVQ7QUFLQSxTQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDTCxNQUFDLGdGQUFEO0FBQ0ksU0FBSyxFQUFFLE1BRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURLLEVBSUwsTUFBQyxnRUFBRDtBQUNJLFVBQU0sRUFBRSxPQURaO0FBRUksWUFBUSxFQUFFdEksT0FBRixhQUFFQSxPQUFGLHVDQUFFQSxPQUFPLENBQUVFLEdBQVgsaURBQUUsYUFBY3VGLEdBQWQsQ0FBa0IsVUFBQWhELENBQUM7QUFBQSw2Q0FDeEJBLENBRHdCO0FBRTNCOEYsY0FBTSxFQUFFOUYsQ0FBRixhQUFFQSxDQUFGLHVCQUFFQSxDQUFDLENBQUV0QztBQUZnQjtBQUFBLEtBQW5CLENBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpLLEVBV0wsTUFBQyxRQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dRLDBEQUFFLENBQUMsTUFBRCxDQURMLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPNkQsK0RBQVMsQ0FBQ3hFLE9BQU8sQ0FBQ3dJLFFBQVQsQ0FBaEIsT0FBcUN4SSxPQUFPLENBQUN5SSxpQkFBN0MsQ0FGRixDQURGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFROUgsMERBQUUsQ0FBQyxLQUFELENBQVYsRUFBbUIsRUFBbkIsRUFBdUJBLDBEQUFFLENBQUMsR0FBRCxDQUF6QixDQUxGLEVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRQSwwREFBRSxDQUFDLEtBQUQsQ0FBVixFQUFtQixDQUFuQixFQUFzQkEsMERBQUUsQ0FBQyxHQUFELENBQXhCLENBTkYsQ0FYSyxFQW1CTCxNQUFDLElBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBT1gsT0FBTyxDQUFDSSxJQUFmLENBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVVKLE9BQU8sQ0FBQzBJLFdBQWxCLE9BQWdDMUksT0FBTyxDQUFDMkksV0FBeEMsRUFBcUQzSSxPQUFPLENBQUM0SSxxQkFBN0QsRUFBbUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFuRixFQUF5RmpJLDBEQUFFLENBQUMsTUFBRCxDQUEzRixFQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTyw2RkFBSWtJLEtBQUssQ0FBQzdJLE9BQU8sQ0FBQzhJLGNBQVQsQ0FBVCxFQUFtQ3JELEdBQW5DLENBQXVDLFVBQUNoRCxDQUFELEVBQUlzRyxDQUFKO0FBQUEsV0FBVUEsQ0FBVjtBQUFBLEdBQXZDLEVBQW9EdEQsR0FBcEQsQ0FBd0QsVUFBQVgsS0FBSztBQUFBLFdBQ2hFLE1BQUMsVUFBRDtBQUFZLFNBQUcsRUFBRUEsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURnRTtBQUFBLEdBQTdELENBQVAsQ0FERixDQUZGLENBbkJLLEVBMEJMLE1BQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUW5FLDBEQUFFLENBQUMsS0FBRCxDQUFWLENBREYsQ0ExQkssRUE2QkwsTUFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUUEsMERBQUUsQ0FBQyxNQUFELENBQVYsQ0FERixDQURGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQSwwREFBRSxDQUFDLEtBQUQsQ0FETCxFQUVFLE1BQUMsMkVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0dBLDBEQUFFLENBQUMsVUFBRCxDQUhMLENBSkYsRUFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0csNkZBQUlrSSxLQUFLLENBQUM3SSxPQUFPLENBQUM4SSxjQUFULENBQVQsRUFBbUNyRCxHQUFuQyxDQUF1QyxVQUFDaEQsQ0FBRCxFQUFJc0csQ0FBSjtBQUFBLFdBQVVBLENBQVY7QUFBQSxHQUF2QyxFQUFvRHRELEdBQXBELENBQXdELFVBQUFYLEtBQUs7QUFBQSxXQUFJQSxLQUFLLEdBQUcsQ0FBUixHQUFZcUQsaUJBQWlCLENBQUM5QixTQUE5QixHQUM5RCxNQUFDLDJFQUFEO0FBQ0ksU0FBRyxxQkFBY3ZCLEtBQWQsQ0FEUDtBQUVJLGNBQVEsRUFBRSxPQUZkO0FBR0ksYUFBTyxFQUFFO0FBQUEsZUFBTW9ELG1CQUFtQixDQUFDakIsZUFBcEIsQ0FBb0NuQyxLQUFLLEdBQUcsQ0FBNUMsQ0FBTjtBQUFBLE9BSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUQ4RCxHQUt6RCxNQUFDLHFFQUFEO0FBQ0QsU0FBRyxxQkFBY0EsS0FBZCxDQURGO0FBRUQsV0FBSyxFQUFFO0FBQUM0QyxhQUFLLEVBQUU7QUFBUixPQUZOO0FBR0QsY0FBUSxFQUFFLE9BSFQ7QUFJRCxhQUFPLEVBQUU7QUFBQSxlQUFNUSxtQkFBbUIsQ0FBQ2pCLGVBQXBCLENBQW9DbkMsS0FBSyxHQUFHLENBQTVDLENBQU47QUFBQSxPQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFMcUQ7QUFBQSxHQUE3RCxDQURILENBVEYsRUFzQkUsTUFBQyxLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFTTiwrREFBUyxDQUFDLHNCQUFDeEUsT0FBTyxDQUFDd0ksUUFBVCxpRUFBcUIsQ0FBckIsSUFBMEJMLGlCQUFpQixDQUFDOUIsU0FBNUMsR0FBd0Q4QixpQkFBaUIsQ0FBQzVCLFdBQTFFLEdBQXdGNEIsaUJBQWlCLENBQUMzQixhQUEzRyxDQUFsQixDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFTN0YsMERBQUUsQ0FBQyxNQUFELENBQVgsQ0FGRixDQURGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUxGLEVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUzZELCtEQUFTLENBQUMsdUJBQUN4RSxPQUFPLENBQUN3SSxRQUFULG1FQUFxQixDQUFyQixJQUEwQkwsaUJBQWlCLENBQUM5QixTQUE3QyxDQUFsQixDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFTMUYsMERBQUUsQ0FBQyxNQUFELENBQVgsQ0FGRixDQU5GLEVBVUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQVZGLEVBV0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBU3dILGlCQUFpQixDQUFDNUIsV0FBM0IsQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUzVGLDBEQUFFLENBQUMsTUFBRCxDQUFYLENBRkYsQ0FYRixFQWVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FmRixFQWdCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFTd0gsaUJBQWlCLENBQUMzQixhQUEzQixDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFTN0YsMERBQUUsQ0FBQyxPQUFELENBQVgsQ0FGRixDQWhCRixDQXRCRixDQTdCSyxFQXlFTCxNQUFDLE1BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUUEsMERBQUUsQ0FBQyxLQUFELENBQVYsRUFBbUJ3SCxpQkFBaUIsQ0FBQzlCLFNBQXJDLEVBQWdEMUYsMERBQUUsQ0FBQyxHQUFELENBQWxELENBREYsRUFFRSxNQUFDLHlEQUFEO0FBQ0ksWUFBUSxFQUFFd0gsaUJBQWlCLENBQUM5QixTQUFsQixLQUFnQyxDQUQ5QztBQUVJLFNBQUssRUFBRTtBQUFDcEMsWUFBTSxFQUFFLE1BQVQ7QUFBaUIrRSxhQUFPLEVBQUUsUUFBMUI7QUFBb0NDLGtCQUFZLEVBQUUsR0FBbEQ7QUFBdURsRSxjQUFRLEVBQUU7QUFBakUsS0FGWDtBQUdJLFNBQUssRUFBRSxXQUhYO0FBSUksV0FBTyxFQUFFLFdBSmI7QUFLSSxXQUFPLEVBQUUsbUJBQU07QUFDYnNELGdDQUEwQixDQUFDQyxJQUEzQjtBQUNELEtBUEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVNHM0gsMERBQUUsQ0FBQyxLQUFELENBVEwsQ0FGRixDQXpFSyxFQXVGTCxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF2RkssQ0FBUDtBQXlGRCxDQXhHTTs7R0FBTXNILFk7VUFDSXhHLHFELEVBRWtEL0Isb0UsRUFJbkJBLG9FOzs7TUFQbkN1SSxZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqS2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1HLG1CQUFtQixHQUFHaEMsMkVBQVksQ0FBQyxnQkFBRCxFQUFtQjtBQUNoRThDLE1BQUksRUFBRTtBQUQwRCxDQUFuQixFQUU1QztBQUNEWixNQUFJLEVBQUUsY0FBQ3hELEtBQUQsRUFBUTRCLE1BQVIsRUFBbUI7QUFDdkJBLFVBQU0sQ0FBQ0ksT0FBUCxDQUFlQywrREFBVSxDQUFDO0FBQ3hCbUMsVUFBSSxFQUFFO0FBRGtCLEtBQUQsQ0FBekI7QUFHRDtBQUxBLENBRjRDLENBQXhDO0FBVVAsSUFBTUMsWUFBWSxHQUFHOUoseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw0S0FXQTBCLHNEQUFPLENBQUNNLE1BQVIsQ0FBZSxHQUFmLENBWEEsQ0FBbEI7S0FBTTZILFk7QUFpQkMsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQUE7O0FBQUE7O0FBQUEsdUJBQ0cxSiwyRUFBYSxDQUFDMEksbUJBQUQsQ0FEaEI7QUFBQSxNQUNwQmlCLG1CQURvQixrQkFDM0J0SCxLQUQyQjs7QUFBQSx3QkFFK0JyQywyRUFBYSxDQUFDeUcsc0RBQUQsQ0FGNUM7QUFBQSxNQUVsQitCLG1CQUZrQixtQkFFM0JySSxPQUYyQjtBQUFBLE1BRVVzSSxpQkFGVixtQkFFR3BHLEtBRkg7O0FBR2xDLE1BQU0vQixPQUFPLEdBQUdtSSxpQkFBaUIsQ0FBQ25JLE9BQWxDOztBQUhrQyx3QkFJYU4sMkVBQWEsQ0FBQ0Msb0RBQUQsQ0FKMUI7QUFBQSxNQUlwQm1DLFFBSm9CLG1CQUkzQkMsS0FKMkI7QUFBQSxNQUlEbkMsVUFKQyxtQkFJVkMsT0FKVTs7QUFLbENvQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJLENBQUNILFFBQVEsQ0FBQ0ksSUFBVCxDQUFjekIsRUFBbkIsRUFBdUI7QUFDckJiLGdCQUFVLENBQUN1QyxZQUFYO0FBQ0Q7QUFDRixHQUpRLEVBSU4sRUFKTSxDQUFUOztBQUxrQyx3QkFVSnpDLDJFQUFhLENBQUNnQyxrRkFBRCxDQVZUO0FBQUEsTUFVbEJDLFVBVmtCLG1CQVUzQjlCLE9BVjJCOztBQUFBLHdCQVdHSCwyRUFBYSxDQUFDa0MsNEVBQUQsQ0FYaEI7QUFBQSxNQVdsQkMsaUJBWGtCLG1CQVczQmhDLE9BWDJCOztBQWFsQyxNQUFNdUMsV0FBVyxHQUFHTixRQUFRLENBQUNPLGVBQVQsQ0FBeUJQLFFBQXpCLENBQXBCO0FBQ0EsTUFBTVEsUUFBUSxHQUFHLDBCQUFBUixRQUFRLENBQUNTLFdBQVQsZ0ZBQXNCQyxJQUF0QixDQUEyQixVQUFBQyxDQUFDO0FBQUEsV0FBSUEsQ0FBQyxDQUFDaEMsRUFBRixLQUFTcUIsUUFBUSxDQUFDWSxJQUFULENBQWNDLG1CQUEzQjtBQUFBLEdBQTVCLE1BQStFLEVBQWhHO0FBQ0EsTUFBTUMsWUFBWSxHQUFHLHNCQUFDNUMsT0FBTyxDQUFDd0ksUUFBVCxpRUFBcUIsQ0FBckIsSUFBMEJMLGlCQUFpQixDQUFDOUIsU0FBakU7QUFDQSxNQUFNdkQsbUJBQW1CLEdBQUloQixRQUFRLENBQUNZLElBQVQsQ0FBY0ssVUFBZCxLQUE2QkMsK0RBQWMsQ0FBQ0MsUUFBNUMsSUFBeURuQixRQUFRLENBQUNvQixhQUFULENBQXVCQyxNQUF2QixDQUE4QixVQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBYztBQUNoSSxRQUFJRCxHQUFHLEdBQUdFLFVBQVUsQ0FBQ0QsR0FBRCxhQUFDQSxHQUFELHVCQUFDQSxHQUFHLENBQUVFLFVBQU4sQ0FBaEIsSUFBcUNYLFlBQVksR0FBR1UsVUFBVSxDQUFDRCxHQUFELGFBQUNBLEdBQUQsdUJBQUNBLEdBQUcsQ0FBRUcsUUFBTixDQUFsRSxFQUFtRjtBQUNqRixhQUFPRixVQUFVLENBQUNELEdBQUQsYUFBQ0EsR0FBRCx1QkFBQ0EsR0FBRyxDQUFFRSxVQUFOLENBQWpCO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsYUFBT0gsR0FBUDtBQUNEO0FBQ0YsR0FOcUYsRUFNbkZFLFVBQVUsMEJBQUN4QixRQUFRLENBQUNvQixhQUFULENBQXVCcEIsUUFBUSxDQUFDb0IsYUFBVCxDQUF1Qk8sTUFBdkIsR0FBZ0MsQ0FBdkQsQ0FBRCwwREFBQyxzQkFBMkRGLFVBQTVELENBTnlFLENBQTFELElBTStELENBTjNGO0FBT0EsTUFBTUcsWUFBWSxHQUFHZCxZQUFZLEdBQUdFLG1CQUFmLEdBQXFDYSxvRUFBZSxDQUFDN0IsUUFBUSxDQUFDWSxJQUFULENBQWNtQixPQUFmLENBQXpFO0FBQ0EsTUFBTUMsWUFBWSxHQUFHSixZQUFZLEdBQUcsSUFBcEM7QUFFQSxTQUFPMkYsbUJBQW1CLENBQUNILElBQXBCLElBQTRCLE1BQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRWpDLE1BQUMsb0VBQUQ7QUFBb0IsU0FBSyxFQUFFO0FBQUNGLGFBQU8sRUFBRTtBQUFWLEtBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBRS9JLDZEQUFVLENBQUNELE9BQUQsYUFBQ0EsT0FBRCx1Q0FBQ0EsT0FBTyxDQUFFRSxHQUFWLGtFQUFDLGFBQWUsQ0FBZixDQUFELGtEQUFDLGNBQW1CQyxHQUFwQixDQUFwQjtBQUNLLE9BQUcsRUFBQyxFQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBT0gsT0FBUCxhQUFPQSxPQUFQLHVCQUFPQSxPQUFPLENBQUVJLElBQWhCLEVBQXNCSixPQUF0QixhQUFzQkEsT0FBdEIsdUJBQXNCQSxPQUFPLENBQUVLLE1BQS9CLEVBQXVDTCxPQUF2QyxhQUF1Q0EsT0FBdkMsdUJBQXVDQSxPQUFPLENBQUVNLElBQWhELENBSEYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVVOLE9BQVYsYUFBVUEsT0FBVix1QkFBVUEsT0FBTyxDQUFFTyxNQUFuQixDQUpGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsaUZBQUQ7QUFBYyxXQUFPLEVBQUVQLE9BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBT21JLGlCQUFpQixDQUFDOUIsU0FBekIsRUFBb0MxRiwwREFBRSxDQUFDLEdBQUQsQ0FBdEMsQ0FGRixDQUxGLENBRmlDLEVBWWpDLE1BQUMsNERBQUQ7QUFDSSxTQUFLLEVBQUU7QUFBQzJJLFlBQU0sRUFBRSxNQUFUO0FBQWlCQyxXQUFLLEVBQUU7QUFBeEIsS0FEWDtBQUVJLGFBQVMsRUFBRSxJQUZmO0FBR0ksU0FBSyxFQUFFNUksMERBQUUsQ0FBQyxNQUFELENBSGI7QUFJSSxVQUFNLEVBQUUsSUFKWjtBQUtJLFNBQUssRUFBRW1CLFFBQVEsQ0FBQ1ksSUFBVCxDQUFjSyxVQUx6QjtBQU1JLFlBQVEsRUFBRSxrQkFBQXlHLEtBQUssRUFBSTtBQUNqQjVKLGdCQUFVLENBQUMyRSxPQUFYLENBQW1CLENBQUMsWUFBRCxFQUFlaUYsS0FBSyxDQUFDM0UsTUFBTixDQUFhQyxLQUE1QixDQUFuQjtBQUNBbEYsZ0JBQVUsQ0FBQzJFLE9BQVgsQ0FBbUIsQ0FBQyxXQUFELEVBQWN6QyxRQUFRLENBQUMySCxhQUFULENBQXVCQyw0REFBTyxDQUFDNUgsUUFBRCxFQUFXO0FBQ3hFWSxZQUFJLEVBQUU7QUFDSkssb0JBQVUsRUFBRXlHLEtBQUssQ0FBQzNFLE1BQU4sQ0FBYUM7QUFEckI7QUFEa0UsT0FBWCxDQUE5QixDQUFkLENBQW5CO0FBS0QsS0FiTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBZUUsTUFBQywyREFBRDtBQUNJLFNBQUssRUFBRTlCLCtEQUFjLENBQUNrQixJQUQxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUV2RCwwREFBRSxDQUFDZ0osMEVBQWlCLENBQUMzRywrREFBYyxDQUFDa0IsSUFBaEIsQ0FBbEIsQ0FGSixDQWZGLEVBa0JFLE1BQUMsMkRBQUQ7QUFDSSxTQUFLLEVBQUVsQiwrREFBYyxDQUFDQyxRQUQxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUV0QywwREFBRSxDQUFDZ0osMEVBQWlCLENBQUMzRywrREFBYyxDQUFDQyxRQUFoQixDQUFsQixDQUZKLENBbEJGLENBWmlDLEVBa0NqQyxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUNNYixXQUFXLENBQUMrQixjQURsQixFQURGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUNNL0IsV0FBVyxDQUFDaEMsSUFEbEIsY0FDMEJnQyxXQUFXLENBQUNnQyxrQkFEdEMsRUFKRixDQURGLEVBU0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkRBQUQ7QUFDSSxXQUFPLGdNQUFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ1d6QyxVQUFVLENBQUMwQyxTQUFYLEVBRFg7O0FBQUE7QUFDREMsaUJBREM7O0FBRVAsa0JBQUlBLEdBQUosRUFBUztBQUNQMUUsMEJBQVUsQ0FBQzJFLE9BQVgsQ0FBbUIsQ0FBQyxXQUFELEVBQWNELEdBQWQsQ0FBbkI7QUFDRDs7QUFKTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFGLEVBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFFLE1BQUMsdUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLENBREYsQ0FURixDQWxDaUMsRUF3RGpDLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMERBQUQ7QUFBTyxLQUFDLEVBQUUsRUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRzNELDBEQUFFLENBQUMsTUFBRCxDQUZMLENBeERpQyxFQTREakMsTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFTMkIsUUFBUSxDQUFDbEMsSUFBbEIsQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBU2tDLFFBQVEsQ0FBQzFCLE1BQWxCLENBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2REFBRDtBQUNJLFdBQU8sZ01BQUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDV2lCLGlCQUFpQixDQUFDd0MsU0FBbEIsRUFEWDs7QUFBQTtBQUNEQyxpQkFEQzs7QUFFUCxrQkFBSUEsR0FBSixFQUFTO0FBQ1AxRSwwQkFBVSxDQUFDMkUsT0FBWCxDQUFtQixDQUFDLHFCQUFELEVBQXdCRCxHQUF4QixDQUFuQjtBQUNEOztBQUpNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUYsRUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUUsTUFBQyx1RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkYsQ0FERixDQUhGLENBNURpQyxFQTRFakMsTUFBQyw2RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBNUVpQyxFQTZFakMsTUFBQyx1RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBN0VpQyxFQThFakMsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFTM0QsMERBQUUsQ0FBQyxPQUFELENBQVgsQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUzZELDhEQUFTLENBQUM1QixZQUFELENBQWxCLENBRkYsQ0E5RWlDLEVBa0ZoQ0UsbUJBQW1CLEdBQUcsQ0FBdEIsSUFBMkIsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQzFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBU25DLDBEQUFFLENBQUMsSUFBRCxDQUFYLENBRDBCLEVBRTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUzZELDhEQUFTLENBQUMxQixtQkFBRCxDQUFsQixDQUYwQixDQWxGSyxFQXNGakMsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFTbkMsMERBQUUsQ0FBQyxNQUFELENBQVgsQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBU3dILGlCQUFpQixDQUFDNUIsV0FBM0IsQ0FGRixDQXRGaUMsRUEwRmpDLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUzVGLDBEQUFFLENBQUMsT0FBRCxDQUFYLENBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVN3SCxpQkFBaUIsQ0FBQzNCLGFBQTNCLENBRkYsQ0ExRmlDLEVBOEZqQyxNQUFDLDBEQUFEO0FBQ0ksU0FBSyxFQUFFO0FBQUN6QixjQUFRLEVBQUU7QUFBWCxLQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVNwRSwwREFBRSxDQUFDLE1BQUQsQ0FBWCxDQUhGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFTNkQsOERBQVMsQ0FBQ2QsWUFBRCxDQUFsQixDQUpGLENBOUZpQyxFQW9HakMsTUFBQywwREFBRDtBQUFPLEtBQUMsRUFBRSxFQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFwR2lDLEVBcUdqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2RUFBRDtBQUNJLFdBQU8sRUFBRSxXQURiO0FBRUksU0FBSyxFQUFFLFdBRlg7QUFHSSxXQUFPLEVBQUUsbUJBQU07QUFBQTs7QUFDYndFLHlCQUFtQixDQUFDdEMsTUFBcEIsQ0FBMkI7QUFDekJ1QiwwQkFBa0IsRUFBRTtBQUNsQnJELHNCQUFZLEVBQVpBLFlBRGtCO0FBRWxCSixzQkFBWSxFQUFaQSxZQUZrQjtBQUdsQlosNkJBQW1CLEVBQW5CQSxtQkFIa0I7QUFJbEJ1QyxrQkFBUSxFQUFFekMsWUFKUTtBQUtsQjBDLDBCQUFnQiwyQkFBRXhELFFBQVEsQ0FBQ0ksSUFBVCxDQUFjZ0QsUUFBaEIsMERBQUUsc0JBQXdCQyxTQUx4QjtBQU1sQkksdUJBQWEsRUFBRSxDQUFDO0FBQ2RHLGlCQUFLLEVBQUV5QyxpQkFBaUIsQ0FBQzlCLFNBRFg7QUFFZFYscUJBQVMsRUFBRTNGLE9BQUYsYUFBRUEsT0FBRix1QkFBRUEsT0FBTyxDQUFFUyxFQUZOO0FBR2RULG1CQUFPLEVBQVBBO0FBSGMsV0FBRDtBQU5HO0FBREssT0FBM0I7QUFjRCxLQWxCTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBbUJFVywwREFBRSxDQUFDLE1BQUQsQ0FuQkosQ0FERixDQXJHaUMsQ0FBNUIsSUEySFksSUEzSG5CO0FBNEhELENBdEpNOztHQUFNeUksYztVQUMwQjFKLG1FLEVBQzRCQSxtRSxFQUVsQkEsbUUsRUFNakJBLG1FLEVBQ09BLG1FOzs7TUFYMUIwSixjIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxncm91cFByb2R1Y3RcXFtpZF0uanMuODA1YzkxYTg2YjQ1YTlkMzE0NzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Z3FsfSBmcm9tICdhcG9sbG8tYm9vc3QnXHJcbmltcG9ydCB7ZnJhZ21lbnR9IGZyb20gJy4vZnJhZ21lbnQnXHJcbmltcG9ydCB7RGljdFR5cGVFbnVtfSBmcm9tICcuLi8uLi9zc19jb21tb24vZW51bSdcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyTGlzdERvYyA9IGdxbGBcclxuICAgIHF1ZXJ5IHJlZmFjdG9yZWQ2NDMoJGRhdGE6IFVzZXJMaXN0SW5wdXQhKSB7XHJcbiAgICAgICAgdXNlckxpc3QodXNlckxpc3RJbnB1dDogJGRhdGEpIHtcclxuICAgICAgICAgICAgbGlzdCB7XHJcbiAgICAgICAgICAgICAgICBvcmRlckNvaW5OZXh0TW9udGhcclxuICAgICAgICAgICAgICAgIG9yZGVyQ29pbkN1cnJlbnRNb250aFxyXG4gICAgICAgICAgICAgICAgb3JkZXJBbW91bnRDdXJyZW50WWVhclxyXG4gICAgICAgICAgICAgICAgLi4udXNlckluZm9cclxuICAgICAgICAgICAgICAgIC4uLlVzZXJGaWVsZHNcclxuICAgICAgICAgICAgICAgIC4uLm9yZGVySW5mb1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRvdGFsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnJhZ21lbnQgb3JkZXJJbmZvIG9uIFVzZXJ7XHJcbiAgICAgICAgb3JkZXJJbmZve1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgICAgICAgdXBkYXRlVGltZVxyXG4gICAgICAgICAgICBpc0RlbGV0ZVxyXG4gICAgICAgICAgICBudW1iZXJcclxuICAgICAgICAgICAgc3RhdGVcclxuICAgICAgICAgICAgYWN0dWFsbHlQYWlkXHJcbiAgICAgICAgICAgIGFkZHJlc3NJZFxyXG4gICAgICAgICAgICBwYXltZW50TWV0aG9kQ2FyZElkXHJcbiAgICAgICAgICAgIHN1YnRvdGFsXHJcbiAgICAgICAgICAgIGNvdXBvbkRpc2NvdW50XHJcbiAgICAgICAgICAgIHZpcERpc2NvdW50XHJcbiAgICAgICAgICAgIHRyYW5zcG9ydGF0aW9uQ29zdHNcclxuICAgICAgICAgICAgc2FsZVRheFxyXG4gICAgICAgICAgICBvcmRlcklkXHJcbiAgICAgICAgICAgIGRpc2NvdW50UHJvZHVjdFRvdGFsXHJcbiAgICAgICAgICAgIGZpbmlzaFRpbWVcclxuICAgICAgICAgICAgcGlja1VwVGltZVxyXG4gICAgICAgICAgICBwaWNrVXBUeXBlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnJhZ21lbnQgVXNlckZpZWxkcyBvbiBVc2VyIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIG5hbWVcclxuICAgICAgICBjcmVhdGVUaW1lXHJcbiAgICAgICAgdXBkYXRlVGltZVxyXG4gICAgICAgIGlzRGVsZXRlXHJcbiAgICAgICAgcGFzc3dvcmRcclxuICAgICAgICB0eXBlXHJcbiAgICB9XHJcbiAgICBmcmFnbWVudCB1c2VySW5mbyBvbiBVc2Vye1xyXG4gICAgICAgIHVzZXJJbmZve1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgICAgICAgdXBkYXRlVGltZVxyXG4gICAgICAgICAgICBpc0RlbGV0ZVxyXG4gICAgICAgICAgICB1c2VySWRcclxuICAgICAgICAgICAgcGhvbmVcclxuICAgICAgICAgICAgZW1haWxcclxuICAgICAgICAgICAgdXNlckxldmVsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RGF0YUNvbmZpZyA9IGdxbGBcclxuICAgIHF1ZXJ5ICgkZGF0YTogRGF0YUNvbmZpZ0l0ZW1JbnB1dCkge1xyXG4gICAgICAgIGdldERhdGFDb25maWcoZGF0YUNvbmZpZ0lucHV0OiAkZGF0YSkge1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgICAgICAgdXBkYXRlVGltZVxyXG4gICAgICAgICAgICBpc0RlbGV0ZVxyXG4gICAgICAgICAgICB0eXBlXHJcbiAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgIHJlbWFya1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IGhvbWVDYXJvdXNlbEltZ3MgPSBncWxgXHJcbiAgICBxdWVyeSBxdWVyeV9xdWVyeV90ZXN0TG9uZzEzNygkZGF0YTogRGF0YUNvbmZpZ0l0ZW1JbnB1dCkge1xyXG4gICAgICAgIGhvbWVDYXJvdXNlbEltZ3MoZGF0YUNvbmZpZ0lucHV0OiAkZGF0YSkge1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgICAgICAgdXBkYXRlVGltZVxyXG4gICAgICAgICAgICBpc0RlbGV0ZVxyXG4gICAgICAgICAgICB0eXBlXHJcbiAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgIHJlbWFya1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IGNhdGVnb3J5TGlzdCA9IGdxbGBcclxuICAgIHF1ZXJ5IHF1ZXJ5X3F1ZXJ5X3Rlc3RMb25nNTY1KCRkYXRhOiBDYXRlZ29yeUxpc3RJbnB1dCkge1xyXG4gICAgICAgIGNhdGVnb3J5TGlzdChkYXRhOiAkZGF0YSkge1xyXG4gICAgICAgICAgICB0b3RhbFxyXG4gICAgICAgICAgICBsaXN0IHtcclxuICAgICAgICAgICAgICAgIC4uLkNhdGVnb3J5XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAke2ZyYWdtZW50LkNhdGVnb3J5RmllbGRzfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgZG9jID0ge1xyXG4gIGdldFVzZXJMaXN0RG9jLFxyXG4gIGNhdGVnb3J5TGlzdCxcclxuICBnZXREYXRhQ29uZmlnLFxyXG4gIGhvbWVDYXJvdXNlbEltZ3MsXHJcbiAgcmVnaXN0ZXJVc2VyOiBncWxgXHJcbiAgICAgIG11dGF0aW9uIG11dGF0aW9uX3JlZ2lzdGVyVXNlOTk4KCRkYXRhOiBVc2VySXRlbUlucHV0KSB7XHJcbiAgICAgICAgICByZWdpc3RlclVzZXIoZGF0YTogJGRhdGEpIHtcclxuICAgICAgICAgICAgICB0b2tlblxyXG4gICAgICAgICAgICAgIHJlZnJlc2h0b2tlblxyXG4gICAgICAgICAgICAgIHVzZXIge1xyXG4gICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgIGNyZWF0ZVRpbWVcclxuICAgICAgICAgICAgICAgICAgdXBkYXRlVGltZVxyXG4gICAgICAgICAgICAgICAgICBpc0RlbGV0ZVxyXG4gICAgICAgICAgICAgICAgICBwYXNzd29yZFxyXG4gICAgICAgICAgICAgICAgICB0eXBlXHJcbiAgICAgICAgICAgICAgICAgIHVzZXJJbmZvIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gIGAsXHJcbiAgcmVmcmVzaFRva2VuOiBncWxgXHJcbiAgICAgIHF1ZXJ5IHJlZnJlc2hUb2tlbigkZGF0YTogU3RyaW5nISkge1xyXG4gICAgICAgICAgcmVmcmVzaFRva2VuKHJlZnJlc2h0b2tlbjogJGRhdGEpIHtcclxuICAgICAgICAgICAgICByZWZyZXNodG9rZW5cclxuICAgICAgICAgICAgICB0b2tlblxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgYCxcclxuICBsb2dpbjogZ3FsYFxyXG4gICAgICBxdWVyeSBsb2dpbigkZGF0YTogVXNlckl0ZW1JbnB1dCkge1xyXG4gICAgICAgICAgbG9naW4odXNlcjogJGRhdGEpIHtcclxuICAgICAgICAgICAgICB0b2tlblxyXG4gICAgICAgICAgICAgIHJlZnJlc2h0b2tlblxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgYCxcclxuICBvbmVVc2VyOiBncWxgXHJcbiAgICAgIHF1ZXJ5IG9uZVVzZXIge1xyXG4gICAgICAgICAgb25lVXNlciB7XHJcbiAgICAgICAgICAgICAgLi4uVXNlckZpZWxkc1xyXG4gICAgICAgICAgICAgIHVzZXJJbmZvIHtcclxuICAgICAgICAgICAgICAgICAgLi4uVXNlckluZm9GaWVsZHNcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJHtmcmFnbWVudC5Vc2VySW5mb0ZpZWxkc31cclxuICAgICAgJHtmcmFnbWVudC5Vc2VyRmllbGRzfVxyXG4gIGAsXHJcbiAgb3JkZXJMaXN0OiBncWxgXHJcbiAgICAgIHF1ZXJ5IG9yZGVyTGlzdCgkZGF0YTogT3JkZXJJbnB1dCl7XHJcbiAgICAgICAgICBvcmRlckxpc3QgKG9yZGVySW5wdXQ6ICRkYXRhLCBmcm9tVXNlcjogdHJ1ZSkge1xyXG4gICAgICAgICAgICAgIGxpc3Qge1xyXG4gICAgICAgICAgICAgICAgICAuLi5PcmRlckluZm9GaWVsZHNcclxuICAgICAgICAgICAgICAgICAgck9yZGVyUHJvZHVjdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAuLi5ST3JkZXJQcm9kdWN0RmllbGRzXHJcbiAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5Qcm9kdWN0RmllbGRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uSW1nRmllbGRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICR7ZnJhZ21lbnQuT3JkZXJJbmZvRmllbGRzfVxyXG4gICAgICAke2ZyYWdtZW50LlJPcmRlclByb2R1Y3RGaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuUHJvZHVjdEZpZWxkc31cclxuICAgICAgJHtmcmFnbWVudC5JbWdGaWVsZHN9XHJcbiAgYCxcclxuICBvcmRlckRldGFpbDogZ3FsYFxyXG4gICAgICBxdWVyeSAoJGlkOiBTdHJpbmcpIHtcclxuICAgICAgICAgIHNlbGZBZGRyZXNzOiBnZXREYXRhQ29uZmlnKGRhdGFDb25maWdJbnB1dDoge1xyXG4gICAgICAgICAgICAgIHR5cGU6IFwiJHtEaWN0VHlwZUVudW0uU2VsZkFkZHJlc3N9XCJcclxuICAgICAgICAgIH0pIHtcclxuICAgICAgICAgICAgICAuLi5EYXRhQ29uZmlnRmllbGRzXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBvcmRlckRldGFpbChpZDogJGlkKSB7XHJcbiAgICAgICAgICAgICAgLi4uT3JkZXJJbmZvRmllbGRzXHJcbiAgICAgICAgICAgICAgck9yZGVyUHJvZHVjdCB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLlJPcmRlclByb2R1Y3RGaWVsZHNcclxuICAgICAgICAgICAgICAgICAgcHJvZHVjdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAuLi5Qcm9kdWN0RmllbGRzXHJcbiAgICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC4uLkltZ0ZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHVzZXIge1xyXG4gICAgICAgICAgICAgICAgICAuLi5Vc2VyRmllbGRzXHJcbiAgICAgICAgICAgICAgICAgIHVzZXJJbmZvIHtcclxuICAgICAgICAgICAgICAgICAgICAgIC4uLlVzZXJJbmZvRmllbGRzXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgdXNlckFkZHJlc3Mge1xyXG4gICAgICAgICAgICAgICAgICAuLi5Vc2VyQWRkcmVzc0ZpZWxkc1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB1c2VyUGF5Q2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLlVzZXJQYXlDYXJkRmllbGRzXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICR7ZnJhZ21lbnQuRGF0YUNvbmZpZ0ZpZWxkc31cclxuICAgICAgJHtmcmFnbWVudC5PcmRlckluZm9GaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuUk9yZGVyUHJvZHVjdEZpZWxkc31cclxuICAgICAgJHtmcmFnbWVudC5Qcm9kdWN0RmllbGRzfVxyXG4gICAgICAke2ZyYWdtZW50LkltZ0ZpZWxkc31cclxuICAgICAgJHtmcmFnbWVudC5Vc2VyRmllbGRzfVxyXG4gICAgICAke2ZyYWdtZW50LlVzZXJJbmZvRmllbGRzfVxyXG4gICAgICAke2ZyYWdtZW50LlVzZXJQYXlDYXJkRmllbGRzfVxyXG4gICAgICAke2ZyYWdtZW50LlVzZXJBZGRyZXNzRmllbGRzfVxyXG4gIGAsXHJcbiAgdXBkYXRlUGFzc3dvcmQ6IGdxbGBcclxuICAgICAgbXV0YXRpb24gKCRkYXRhOiBVcGRhdGVQYXNzd29yZElucHV0KSB7XHJcbiAgICAgICAgICB1cGRhdGVQYXNzd29yZCAoZGF0YTogJGRhdGEpIHtcclxuICAgICAgICAgICAgICB1c2VyIHtcclxuICAgICAgICAgICAgICAgICAgLi4uVXNlckZpZWxkc1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBhdXRoQm9keSB7XHJcbiAgICAgICAgICAgICAgICAgIHRva2VuXHJcbiAgICAgICAgICAgICAgICAgIHJlZnJlc2h0b2tlblxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAke2ZyYWdtZW50LlVzZXJGaWVsZHN9XHJcbiAgYCxcclxuICBwYXlDYXJkTGlzdE9uZVVzZXI6IGdxbGBcclxuICAgICAgcXVlcnkge1xyXG4gICAgICAgICAgcGF5Q2FyZExpc3RPbmVVc2VyIHtcclxuICAgICAgICAgICAgICAuLi5Vc2VyUGF5Q2FyZEZpZWxkc1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICR7ZnJhZ21lbnQuVXNlclBheUNhcmRGaWVsZHN9XHJcbiAgYCxcclxuICB1c2VyUGF5Q2FyZDogZ3FsYFxyXG4gICAgICBxdWVyeSAoJGRhdGE6IFVzZXJQYXlDYXJkSXRlbUlucHV0KSB7XHJcbiAgICAgICAgICB1c2VyUGF5Q2FyZCAodXNlclBheUNhcmQ6ICRkYXRhKSB7XHJcbiAgICAgICAgICAgICAgLi4uVXNlclBheUNhcmRGaWVsZHNcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAke2ZyYWdtZW50LlVzZXJQYXlDYXJkRmllbGRzfVxyXG4gIGAsXHJcbiAgc2F2ZVVzZXJQYXlDYXJkOiBncWxgXHJcbiAgICAgIG11dGF0aW9uICgkZGF0YTogVXNlclBheUNhcmRJdGVtSW5wdXQpe1xyXG4gICAgICAgICAgc2F2ZVVzZXJQYXlDYXJkICh1c2VyUGF5Q2FyZDogJGRhdGEpIHtcclxuICAgICAgICAgICAgICAuLi5Vc2VyUGF5Q2FyZEZpZWxkc1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICR7ZnJhZ21lbnQuVXNlclBheUNhcmRGaWVsZHN9XHJcbiAgYCxcclxuICBzZXRVc2VyUGF5Q2FyZERlZmF1bHQ6IGdxbGBcclxuICAgICAgbXV0YXRpb24gKCRkYXRhOiBVc2VyUGF5Q2FyZEl0ZW1JbnB1dCkge1xyXG4gICAgICAgICAgc2V0VXNlclBheUNhcmREZWZhdWx0ICh1c2VyUGF5Q2FyZDogJGRhdGEpIHtcclxuICAgICAgICAgICAgICAuLi5Vc2VyUGF5Q2FyZEZpZWxkc1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICR7ZnJhZ21lbnQuVXNlclBheUNhcmRGaWVsZHN9XHJcbiAgYCxcclxuICBwaWNrdXBBZGRyZXNzOiBncWxgXHJcbiAgICAgIHF1ZXJ5IHtcclxuICAgICAgICAgIGdldERhdGFDb25maWcoZGF0YUNvbmZpZ0lucHV0OiB7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCIke0RpY3RUeXBlRW51bS5TZWxmQWRkcmVzc31cIlxyXG4gICAgICAgICAgfSkge1xyXG4gICAgICAgICAgICAgIC4uLkRhdGFDb25maWdGaWVsZHNcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIG9uZVVzZXIge1xyXG4gICAgICAgICAgICAgIC4uLlVzZXJGaWVsZHNcclxuICAgICAgICAgICAgICB1c2VySW5mbyB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLlVzZXJJbmZvRmllbGRzXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICR7ZnJhZ21lbnQuVXNlckluZm9GaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuRGF0YUNvbmZpZ0ZpZWxkc31cclxuICAgICAgJHtmcmFnbWVudC5Vc2VyRmllbGRzfVxyXG4gIGAsXHJcbiAgdXBkYXRlVXNlckluZm86IGdxbGBcclxuICAgICAgbXV0YXRpb24gKCR1c2VySW5mbzogVXNlckluZm9JdGVtSW5wdXQpIHtcclxuICAgICAgICAgIHVwZGF0ZVVzZXJJbmZvICh1c2VySW5mbzogJHVzZXJJbmZvKSB7XHJcbiAgICAgICAgICAgICAgLi4uVXNlckluZm9GaWVsZHNcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAke2ZyYWdtZW50LlVzZXJJbmZvRmllbGRzfVxyXG4gIGAsXHJcbiAgdXNlckFkZHJlc3NMaXN0T25lVXNlcjogZ3FsYFxyXG4gICAgICBxdWVyeSB7XHJcbiAgICAgICAgICB1c2VyQWRkcmVzc0xpc3RPbmVVc2VyIHtcclxuICAgICAgICAgICAgICAuLi5Vc2VyQWRkcmVzc0ZpZWxkc1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICR7ZnJhZ21lbnQuVXNlckFkZHJlc3NGaWVsZHN9XHJcbiAgYCxcclxuICB1c2VyQWRkcmVzczogZ3FsYFxyXG4gICAgICBxdWVyeSAoJGRhdGE6IFVzZXJBZGRyZXNzSXRlbUlucHV0KSB7XHJcbiAgICAgICAgICB1c2VyQWRkcmVzcyAodXNlckFkZHJlc3M6ICRkYXRhKSB7XHJcbiAgICAgICAgICAgICAgLi4uVXNlckFkZHJlc3NGaWVsZHNcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAke2ZyYWdtZW50LlVzZXJBZGRyZXNzRmllbGRzfVxyXG4gIGAsXHJcbiAgc2F2ZVVzZXJBZGRyZXNzOiBncWxgXHJcbiAgICAgIG11dGF0aW9uICgkZGF0YTogVXNlckFkZHJlc3NJdGVtSW5wdXQpe1xyXG4gICAgICAgICAgc2F2ZVVzZXJBZGRyZXNzICh1c2VyQWRkcmVzczogJGRhdGEpIHtcclxuICAgICAgICAgICAgICAuLi5Vc2VyQWRkcmVzc0ZpZWxkc1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICR7ZnJhZ21lbnQuVXNlckFkZHJlc3NGaWVsZHN9XHJcbiAgYCxcclxuICBzZXRVc2VyQWRkcmVzc0RlZmF1bHQ6IGdxbGBcclxuICAgICAgbXV0YXRpb24gKCRkYXRhOiBVc2VyQWRkcmVzc0l0ZW1JbnB1dCkge1xyXG4gICAgICAgICAgc2V0VXNlckFkZHJlc3NEZWZhdWx0ICh1c2VyQWRkcmVzczogJGRhdGEpIHtcclxuICAgICAgICAgICAgICAuLi5Vc2VyQWRkcmVzc0ZpZWxkc1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICR7ZnJhZ21lbnQuVXNlckFkZHJlc3NGaWVsZHN9XHJcbiAgYCxcclxuICBwcm9kdWN0c0luQ2F0ZWdvcnk6IGdxbGBcclxuICAgICAgcXVlcnkgKCRkYXRhOiBDYXRlZ29yeUl0ZW1JbnB1dCwgJHByb2R1Y3RJdGVtSW5wdXQ6IFByb2R1Y3RJdGVtSW5wdXQpIHtcclxuICAgICAgICAgIHByb2R1Y3RzSW5DYXRlZ29yeShjYXRlZ29yeUl0ZW1JbnB1dDogJGRhdGEsIHByb2R1Y3RJdGVtSW5wdXQ6ICRwcm9kdWN0SXRlbUlucHV0KSB7XHJcbiAgICAgICAgICAgICAgLi4uUHJvZHVjdEZpZWxkc1xyXG4gICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLkltZ0ZpZWxkc1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNhdGVnb3J5TGlzdChkYXRhOiB7XHJcbiAgICAgICAgICAgICAgY2F0ZWdvcnk6IHtcclxuICAgICAgICAgICAgICAgICAgcGFyZW50Q2F0ZWdvcnk6ICRkYXRhXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSkge1xyXG4gICAgICAgICAgICAgIHRvdGFsXHJcbiAgICAgICAgICAgICAgbGlzdCB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLkNhdGVnb3J5XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICR7ZnJhZ21lbnQuUHJvZHVjdEZpZWxkc31cclxuICAgICAgJHtmcmFnbWVudC5JbWdGaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuQ2F0ZWdvcnlGaWVsZHN9XHJcbiAgYCxcclxuICBjYXRlZ29yeUxldmVsOiBncWxgXHJcbiAgICAgIHF1ZXJ5ICgkZGF0YTogQ2F0ZWdvcnlJdGVtSW5wdXQpIHtcclxuICAgICAgICAgIGNhdGVnb3J5TGV2ZWwoY2F0ZWdvcnlJdGVtSW5wdXQ6ICRkYXRhKVxyXG4gICAgICB9XHJcbiAgYCxcclxuICBvbmVDYXRlZ29yeTogZ3FsYFxyXG4gICAgICBxdWVyeSAoJGRhdGE6IENhdGVnb3J5SXRlbUlucHV0KSB7XHJcbiAgICAgICAgICBvbmVDYXRlZ29yeShkYXRhOiAkZGF0YSkge1xyXG4gICAgICAgICAgICAgIC4uLkNhdGVnb3J5XHJcbiAgICAgICAgICAgICAgcGFyZW50Q2F0ZWdvcnkge1xyXG4gICAgICAgICAgICAgICAgICAuLi5DYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgICBwYXJlbnRDYXRlZ29yeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAuLi5DYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICR7ZnJhZ21lbnQuQ2F0ZWdvcnlGaWVsZHN9XHJcbiAgYCxcclxuICBwcm9kdWN0TGlzdDogZ3FsYFxyXG4gICAgICBxdWVyeSAoJHByb2R1Y3RJbnB1dDogUHJvZHVjdEl0ZW1JbnB1dCwgJG9yZGVyQnlJbnB1dDogT3JkZXJCeUlucHV0KSB7XHJcbiAgICAgICAgICBwcm9kdWN0TGlzdChwcm9kdWN0SW5wdXQ6ICRwcm9kdWN0SW5wdXQsIG9yZGVyQnlJbnB1dDogJG9yZGVyQnlJbnB1dCkge1xyXG4gICAgICAgICAgICAgIHRvdGFsXHJcbiAgICAgICAgICAgICAgbGlzdCB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLlByb2R1Y3RGaWVsZHNcclxuICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgIC4uLkltZ0ZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICR7ZnJhZ21lbnQuUHJvZHVjdEZpZWxkc31cclxuICAgICAgJHtmcmFnbWVudC5JbWdGaWVsZHN9XHJcbiAgYCxcclxuICB1cGRhdGVOdW1TaG9wQ2FydDogZ3FsYFxyXG4gICAgICBtdXRhdGlvbiAoJHNob3BDYXJ0OiBTaG9wQ2FydEl0ZW1JbnB1dCwgJHVwZGF0ZU51bTogRmxvYXQpIHtcclxuICAgICAgICAgIHVwZGF0ZU51bVNob3BDYXJ0IChzaG9wQ2FydDogJHNob3BDYXJ0LCB1cGRhdGVOdW06ICR1cGRhdGVOdW0pIHtcclxuICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgIG51bWJlclxyXG4gICAgICAgICAgICAgIHByb2R1Y3Qge1xyXG4gICAgICAgICAgICAgICAgICAuLi5Qcm9kdWN0RmllbGRzXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHVzZXIge1xyXG4gICAgICAgICAgICAgICAgICAuLi5Vc2VyRmllbGRzXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICR7ZnJhZ21lbnQuUHJvZHVjdEZpZWxkc31cclxuICAgICAgJHtmcmFnbWVudC5Vc2VyRmllbGRzfVxyXG4gIGAsXHJcbiAgdXNlclNob3BDYXJ0TGlzdDogZ3FsYFxyXG4gICAgICBxdWVyeSB7XHJcbiAgICAgICAgICBzaG9wQ2FydExpc3Qge1xyXG4gICAgICAgICAgICAgIC4uLlNob3BDYXJ0RmllbGRzXHJcbiAgICAgICAgICAgICAgcHJvZHVjdCB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLlByb2R1Y3RGaWVsZHNcclxuICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgIC4uLkltZ0ZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICR7ZnJhZ21lbnQuU2hvcENhcnRGaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuUHJvZHVjdEZpZWxkc31cclxuICAgICAgJHtmcmFnbWVudC5JbWdGaWVsZHN9XHJcbiAgYCxcclxuICB1cGRhdGVTaG9wQ2FydDogZ3FsYFxyXG4gICAgICBtdXRhdGlvbiAoJHNob3BDYXJ0OiBTaG9wQ2FydEl0ZW1JbnB1dCl7XHJcbiAgICAgICAgICB1cGRhdGVTaG9wQ2FydCAoc2hvcENhcnQ6ICRzaG9wQ2FydCkge1xyXG4gICAgICAgICAgICAgIC4uLlNob3BDYXJ0RmllbGRzXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJHtmcmFnbWVudC5TaG9wQ2FydEZpZWxkc31cclxuICBgLFxyXG4gIG9yZGVyQ29uZmlybUluZm86IGdxbGBcclxuICAgICAgcXVlcnkge1xyXG4gICAgICAgICAgZ2V0RGF0YUNvbmZpZyhkYXRhQ29uZmlnSW5wdXQ6IHtcclxuICAgICAgICAgICAgICB0eXBlOiBcIiR7RGljdFR5cGVFbnVtLlNlbGZBZGRyZXNzfVwiXHJcbiAgICAgICAgICB9KSB7XHJcbiAgICAgICAgICAgICAgLi4uRGF0YUNvbmZpZ0ZpZWxkc1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgb25lVXNlciB7XHJcbiAgICAgICAgICAgICAgLi4uVXNlckZpZWxkc1xyXG4gICAgICAgICAgICAgIHVzZXJJbmZvIHtcclxuICAgICAgICAgICAgICAgICAgLi4uVXNlckluZm9GaWVsZHNcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBwYXlDYXJkTGlzdE9uZVVzZXIge1xyXG4gICAgICAgICAgICAgIC4uLlVzZXJQYXlDYXJkRmllbGRzXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB1c2VyQWRkcmVzc0xpc3RPbmVVc2VyIHtcclxuICAgICAgICAgICAgICAuLi5Vc2VyQWRkcmVzc0ZpZWxkc1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZnJlaWdodENvbmZpZzogZ2V0RGF0YUNvbmZpZyAoZGF0YUNvbmZpZ0lucHV0OiB7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCIke0RpY3RUeXBlRW51bS5GcmVpZ2h0fVwiXHJcbiAgICAgICAgICB9KSB7XHJcbiAgICAgICAgICAgICAgLi4uRGF0YUNvbmZpZ0ZpZWxkc1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdXNlckxldmVsTGlzdDogZ2V0RGljdExpc3QgKGRpY3RJbnB1dDoge1xyXG4gICAgICAgICAgICAgIGRpY3RUeXBlQ29kZTogXCJVc2VyTGV2ZWxcIlxyXG4gICAgICAgICAgfSkge1xyXG4gICAgICAgICAgICAgIC4uLkRpY3RGaWVsZHNcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAke2ZyYWdtZW50LlVzZXJBZGRyZXNzRmllbGRzfVxyXG4gICAgICAke2ZyYWdtZW50LlVzZXJQYXlDYXJkRmllbGRzfVxyXG4gICAgICAke2ZyYWdtZW50LlVzZXJJbmZvRmllbGRzfVxyXG4gICAgICAke2ZyYWdtZW50LlVzZXJGaWVsZHN9XHJcbiAgICAgICR7ZnJhZ21lbnQuRGF0YUNvbmZpZ0ZpZWxkc31cclxuICAgICAgJHtmcmFnbWVudC5EaWN0RmllbGRzfVxyXG4gIGAsXHJcbiAgc2F2ZU9yZGVyOiBncWxgXHJcbiAgICAgIG11dGF0aW9uICgkb3JkZXJJbmZvSXRlbUlucHV0OiBPcmRlckluZm9JdGVtSW5wdXQpIHtcclxuICAgICAgICAgIHNhdmVPcmRlciAob3JkZXJJbmZvSXRlbUlucHV0OiAkb3JkZXJJbmZvSXRlbUlucHV0KSB7XHJcbiAgICAgICAgICAgICAgLi4uT3JkZXJJbmZvRmllbGRzXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJHtmcmFnbWVudC5PcmRlckluZm9GaWVsZHN9XHJcbiAgYCxcclxuICBkaWN0TGlzdDogZ3FsYFxyXG4gICAgICBxdWVyeSAoJGRhdGE6IERpY3RJbnB1dCkge1xyXG4gICAgICAgICAgZ2V0RGljdExpc3QgKGRpY3RJbnB1dDogJGRhdGEpIHtcclxuICAgICAgICAgICAgICAuLi5EaWN0RmllbGRzXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJHtmcmFnbWVudC5EaWN0RmllbGRzfVxyXG4gIGAsXHJcbiAgbGltaXRUaW1lRGF0YTogZ3FsYFxyXG4gICAgcXVlcnkge1xyXG4gICAgICAgIGxpbWl0VGltZURhdGE6IGdldERhdGFDb25maWcgKGRhdGFDb25maWdJbnB1dDoge1xyXG4gICAgICAgICAgICB0eXBlOiBcIiR7RGljdFR5cGVFbnVtLlByb21vdGlvbkZsYXNoU2FsZX1cIlxyXG4gICAgICAgIH0pIHtcclxuICAgICAgICAgICAgLi4uRGF0YUNvbmZpZ0ZpZWxkc1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuRGF0YUNvbmZpZ0ZpZWxkc31cclxuICBgLFxyXG4gIHByb2R1Y3RMaXN0QnlJZHM6IGdxbGBcclxuICAgIHF1ZXJ5ICgkaWRzOiBbU3RyaW5nXSkge1xyXG4gICAgICAgIHByb2R1Y3RMaXN0QnlJZHMgKGlkczogJGlkcykge1xyXG4gICAgICAgICAgICB0b3RhbFxyXG4gICAgICAgICAgICBsaXN0IHtcclxuICAgICAgICAgICAgICAgIC4uLlByb2R1Y3RGaWVsZHNcclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uSW1nRmllbGRzXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAke2ZyYWdtZW50LlByb2R1Y3RGaWVsZHN9XHJcbiAgICAke2ZyYWdtZW50LkltZ0ZpZWxkc31cclxuICBgLFxyXG4gIGdyb3VwUXVldWVMaXN0OiBncWxgXHJcbiAgICBxdWVyeSAoJGdyb3VwUXVldWVJdGVtSW5wdXQ6IEdyb3VwUXVldWVJdGVtSW5wdXQpIHtcclxuICAgICAgICBncm91cFF1ZXVlTGlzdCAoZ3JvdXBRdWV1ZUl0ZW1JbnB1dDogJGdyb3VwUXVldWVJdGVtSW5wdXQpIHtcclxuICAgICAgICAgICAgLi4uR3JvdXBRdWV1ZUZpZWxkc1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICR7ZnJhZ21lbnQuR3JvdXBRdWV1ZUZpZWxkc31cclxuICBgLFxyXG4gIHVwZGF0ZU9yZGVyOiBncWxgXHJcbiAgICBtdXRhdGlvbiAoJG9yZGVySW5mb0l0ZW1JbnB1dDogT3JkZXJJbmZvSXRlbUlucHV0KSB7XHJcbiAgICAgICAgdXBkYXRlT3JkZXIgKG9yZGVySW5mb0l0ZW1JbnB1dDogJG9yZGVySW5mb0l0ZW1JbnB1dCkge1xyXG4gICAgICAgICAgICAuLi5PcmRlckluZm9GaWVsZHNcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAke2ZyYWdtZW50Lk9yZGVySW5mb0ZpZWxkc31cclxuICBgLFxyXG4gIHNhdmVHcm91cE9yZGVyOiBncWxgXHJcbiAgICBtdXRhdGlvbiAoJG9yZGVySW5mb0l0ZW1JbnB1dDogT3JkZXJJbmZvSXRlbUlucHV0LCAkZ3JvdXBPcmRlckl0ZW1JbnB1dDogR3JvdXBPcmRlckl0ZW1JbnB1dCwgJGdyb3VwUXVldWVJdGVtSW5wdXQ6IEdyb3VwUXVldWVJdGVtSW5wdXQpIHtcclxuICAgICAgICBzYXZlR3JvdXBPcmRlciAob3JkZXJJbmZvSXRlbUlucHV0OiAkb3JkZXJJbmZvSXRlbUlucHV0LCBncm91cE9yZGVySXRlbUlucHV0OiAkZ3JvdXBPcmRlckl0ZW1JbnB1dCwgZ3JvdXBRdWV1ZUl0ZW1JbnB1dDogJGdyb3VwUXVldWVJdGVtSW5wdXQpIHtcclxuICAgICAgICAgICAgLi4uT3JkZXJJbmZvRmllbGRzXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJHtmcmFnbWVudC5PcmRlckluZm9GaWVsZHN9XHJcbiAgYCxcclxufVxyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQWRkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkJ1xyXG5pbXBvcnQgUmVtb3ZlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUmVtb3ZlJ1xyXG5pbXBvcnQge1Nob3BDYXJ0fSBmcm9tICcuLi8uLi9ncmFwaHFsVHlwZXMvdHlwZXMnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7ZGVhbEltZ1VybH0gZnJvbSAnLi4vLi4vdG9vbHMvaW1nJ1xyXG5pbXBvcnQge2dyZXl9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycydcclxuaW1wb3J0IHtwcm9kdWN0TW9kZWwsIFByb2R1Y3RQcmljZX0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Qcm9kdWN0SXRlbS9Qcm9kdWN0SXRlbSdcclxuaW1wb3J0IHtCdXR0b24sIEljb25CdXR0b259IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQge3VzZVN0b3JlTW9kZWx9IGZyb20gJy4uLy4uL01vZGVsQWN0aW9uL3VzZVN0b3JlJ1xyXG5pbXBvcnQge2xzfSBmcm9tICcuLi8uLi90b29scy9kZWFsS2V5J1xyXG5pbXBvcnQge3Nob3BDYXJ0TW9kZWx9IGZyb20gJy4vaW5kZXgnXHJcblxyXG5leHBvcnQgY29uc3QgU2hvcENhcnRQcm9kdWN0Qm94ID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMjBweCwgNzJweCkgMWZyO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDIycHgpIDMwcHg7XHJcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAxMHB4O1xyXG4gID4gaW1nIHtcclxuICAgIGdyaWQtYXJlYTogMS8xLzQvMjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIH1cclxuICA+IHNlY3Rpb24ge1xyXG4gICAgY29sb3I6ICR7Z3JleVs2MDBdfVxyXG4gIH1cclxuICA+IGZvb3RlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgID4gbWFpbiB7XHJcbiAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIH1cclxuICAgID4gYnV0dG9uIHtcclxuICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJ0UHJvZHVjdCA9ICh7c2hvcENhcnR9OiB7IHNob3BDYXJ0OiBTaG9wQ2FydCB9KSA9PiB7XHJcbiAgY29uc3Qge2FjdGlvbnM6IGFjdGlvbnNTQ019ID0gdXNlU3RvcmVNb2RlbChzaG9wQ2FydE1vZGVsKVxyXG4gIGNvbnN0IHthY3Rpb25zOiBhY3Rpb25zUE19ID0gdXNlU3RvcmVNb2RlbChwcm9kdWN0TW9kZWwpXHJcbiAgY29uc3QgcHJvZHVjdCA9IHNob3BDYXJ0LnByb2R1Y3RcclxuXHJcbiAgcmV0dXJuIDxTaG9wQ2FydFByb2R1Y3RCb3g+XHJcbiAgICA8aW1nIHNyYz17ZGVhbEltZ1VybChzaG9wQ2FydC5wcm9kdWN0Py5pbWc/LlswXT8udXJsKX1cclxuICAgICAgICAgYWx0PVwiXCIvPlxyXG4gICAgPG1haW4+e3Byb2R1Y3Q/Lm5hbWV9e3Byb2R1Y3Q/LndlaWdodH17cHJvZHVjdD8udW5pdH08L21haW4+XHJcbiAgICA8c2VjdGlvbj57cHJvZHVjdD8ucmVtYXJrfTwvc2VjdGlvbj5cclxuICAgIDxmb290ZXI+XHJcbiAgICAgIDxQcm9kdWN0UHJpY2UgcHJvZHVjdD17cHJvZHVjdH0vPlxyXG4gICAgICB7KHNob3BDYXJ0LmlzTmV4dCA9PT0gMCAmJiA8PlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgc2l6ZT17J3NtYWxsJ31cclxuICAgICAgICAgICAgdmFyaWFudD17J291dGxpbmVkJ31cclxuICAgICAgICAgICAgb25DbGljaz17YXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGF3YWl0IGFjdGlvbnNQTS51cGRhdGVTaG9wQ2FydCh7XHJcbiAgICAgICAgICAgICAgICBpc05leHQ6IDEsXHJcbiAgICAgICAgICAgICAgICBpZDogc2hvcENhcnQuaWQsXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICBhY3Rpb25zU0NNLmdldExpc3QoKVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID57bHMoJ+S4i+asoei0reS5sCcpfTwvQnV0dG9uPlxyXG4gICAgICAgIHs8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICBkaXNhYmxlZD17KHNob3BDYXJ0Py5udW1iZXIgPz8gMCkgPD0gMX1cclxuICAgICAgICAgICAgc2l6ZT17J3NtYWxsJ31cclxuICAgICAgICAgICAgb25DbGljaz17YXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGF3YWl0IGFjdGlvbnNQTS51cGRhdGVOdW1TaG9wQ2FydCh7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0LFxyXG4gICAgICAgICAgICAgICAgbnVtYmVyOiAtMSxcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIGFjdGlvbnNTQ00uZ2V0TGlzdCgpXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPjxSZW1vdmVJY29uLz48L0ljb25CdXR0b24+fVxyXG4gICAgICAgIHtzaG9wQ2FydC5udW1iZXJ9XHJcbiAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgc2l6ZT17J3NtYWxsJ31cclxuICAgICAgICAgICAgb25DbGljaz17YXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGF3YWl0IGFjdGlvbnNQTS51cGRhdGVOdW1TaG9wQ2FydCh7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0LFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgYWN0aW9uc1NDTS5nZXRMaXN0KClcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8QWRkSWNvbi8+XHJcbiAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICA8Lz4pIHx8IDw+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBzdHlsZT17e21hcmdpblJpZ2h0OiAnOHB4J319XHJcbiAgICAgICAgICAgIHNpemU9eydzbWFsbCd9XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9eydvdXRsaW5lZCd9XHJcbiAgICAgICAgICAgIGNvbG9yPXsnc2Vjb25kYXJ5J31cclxuICAgICAgICAgICAgb25DbGljaz17YXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGF3YWl0IGFjdGlvbnNQTS51cGRhdGVTaG9wQ2FydCh7XHJcbiAgICAgICAgICAgICAgICBpc0RlbGV0ZTogMSxcclxuICAgICAgICAgICAgICAgIGlkOiBzaG9wQ2FydC5pZCxcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIGFjdGlvbnNTQ00uZ2V0TGlzdCgpXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPntscygn5Yig6ZmkJyl9PC9CdXR0b24+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBzaXplPXsnc21hbGwnfVxyXG4gICAgICAgICAgICB2YXJpYW50PXsnb3V0bGluZWQnfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXthc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgYXdhaXQgYWN0aW9uc1BNLnVwZGF0ZVNob3BDYXJ0KHtcclxuICAgICAgICAgICAgICAgIGlzTmV4dDogMCxcclxuICAgICAgICAgICAgICAgIGlkOiBzaG9wQ2FydC5pZCxcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIGFjdGlvbnNTQ00uZ2V0TGlzdCgpXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPntscygn5Yqg5YWl6LSt54mp6L2mJyl9PC9CdXR0b24+XHJcbiAgICAgIDwvPn1cclxuICAgIDwvZm9vdGVyPlxyXG4gIDwvU2hvcENhcnRQcm9kdWN0Qm94PlxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDaGV2cm9uUmlnaHRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DaGV2cm9uUmlnaHQnXHJcbmltcG9ydCB7SGVhZGVyVGl0bGV9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSGVhZGVyVGl0bGUvSGVhZGVyVGl0bGUnXHJcbmltcG9ydCB7dXNlU3RvcmVNb2RlbH0gZnJvbSAnLi4vLi4vTW9kZWxBY3Rpb24vdXNlU3RvcmUnXHJcbmltcG9ydCB7cGFnZVR5cGVFbnVtLCBzaG9wQ2FydE1vZGVsfSBmcm9tICcuL2luZGV4J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQge2xzfSBmcm9tICcuLi8uLi90b29scy9kZWFsS2V5J1xyXG5pbXBvcnQge1BpY2tVcFR5cGVFbnVtfSBmcm9tICcuLi8uLi9zc19jb21tb24vZW51bSdcclxuaW1wb3J0IHtkb2N9IGZyb20gJy4uLy4uL2dyYXBocWxUeXBlcy9kb2MnXHJcbmltcG9ydCB7SWNvbkJ1dHRvbiwgTGluZWFyUHJvZ3Jlc3MsIFRleHRGaWVsZH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCB7QlNjcm9sbGVyfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0JTY3JvbGwvQlNjcm9sbGVyJ1xyXG5pbXBvcnQge1NwYWNlfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0JveC9Cb3gnXHJcbmltcG9ydCB7U2VsZWN0QWRkcmVzcywgc2VsZWN0QWRkcmVzc01vZGVsfSBmcm9tICcuL2NvbXBvbmVudHMvU2VsZWN0QWRkcmVzcydcclxuaW1wb3J0IHtncmV5fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMnXHJcbmltcG9ydCB7U2VsZWN0Q2FyZCwgc2VsZWN0Q2FyZE1vZGVsfSBmcm9tICcuL2NvbXBvbmVudHMvU2VsZWN0Q2FyZCdcclxuaW1wb3J0IHtkZWFsTWF5YmVOdW1iZXIsIGRlYWxNb25leSwgZGVhbFVybFF1ZXJ5fSBmcm9tICcuLi8uLi90b29scy91dGlscydcclxuaW1wb3J0IHttcFN0eWxlfSBmcm9tICcuLi8uLi9zdHlsZS9jb21tb24nXHJcbmltcG9ydCB7QnV0dG9uTG9hZH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CdXR0b25Mb2FkL0J1dHRvbkxvYWQnXHJcbmltcG9ydCB7c2hvd01lc3NhZ2V9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTWVzc2FnZS9NZXNzYWdlJ1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5leHBvcnQgY29uc3QgU2hvcFRpdGxlID0gc3R5bGVkLmRpdmBcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgPiBmb290ZXIge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICR7bXBTdHlsZS5yZWR9O1xyXG4gIH1cclxuYFxyXG5leHBvcnQgY29uc3QgQWRkcmVzc0JveCA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgPiBtYWluIHtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgID4gaGVhZGVyIHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5leHBvcnQgY29uc3QgQ2FyZEJveCA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogMTZweCAyMHB4O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgbWluLWNvbnRlbnQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcclxuICA+IGhlYWRlciB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICB9XHJcbiAgPiBhc2lkZSB7XHJcbiAgICBncmlkLWFyZWE6IDEvMi8zLzM7XHJcbiAgfVxyXG5gXHJcbmV4cG9ydCBjb25zdCBTaG9wVG90YWwgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDAgMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG5gXHJcbmNvbnN0IEZvb3RlckZpdCA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBwYWRkaW5nOiAxNnB4IDI0cHg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIG1heC1jb250ZW50O1xyXG4gIGdyaWQtcm93LWdhcDogOHB4O1xyXG4gIGJveC1zaGFkb3c6ICR7bXBTdHlsZS5zaGFkb3dbJzEnXX07XHJcbiAgPiBoZWFkZXIge1xyXG4gICAgPiBzcGFuIHtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICA+IGFzaWRlIHtcclxuICAgIGdyaWQtYXJlYTogMS8yLzMvMztcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBPcmRlclBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCB7YWN0aW9uczogYWN0aW9uc1NBTX0gPSB1c2VTdG9yZU1vZGVsKHNlbGVjdEFkZHJlc3NNb2RlbClcclxuICBjb25zdCB7YWN0aW9uczogYWN0aW9uc1NlbGVjdENhcmR9ID0gdXNlU3RvcmVNb2RlbChzZWxlY3RDYXJkTW9kZWwpXHJcbiAgY29uc3Qge3N0YXRlOiBzdGF0ZVNDTSwgYWN0aW9uczogYWN0aW9uc1NDTSwgZ2V0TG9hZH0gPSB1c2VTdG9yZU1vZGVsKHNob3BDYXJ0TW9kZWwpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIXN0YXRlU0NNLnVzZXIuaWQpIHtcclxuICAgICAgYWN0aW9uc1NDTS5nZXRPcmRlckluZm8oKVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBhZGRyZXNzRGF0YSA9IHN0YXRlU0NNLmRlYWxBZGRyZXNzRGF0YShzdGF0ZVNDTSlcclxuICBjb25zdCBjYXJkRGF0YSA9IHN0YXRlU0NNLnBheUNhcmRMaXN0Py5maW5kKHYgPT4gdi5pZCA9PT0gc3RhdGVTQ00uZm9ybS5wYXltZW50TWV0aG9kQ2FyZElkKSB8fCB7fVxyXG4gIGNvbnN0IHByb2R1Y3RUb3RhbCA9IHN0YXRlU0NNLmRlYWxQcm9kdWN0VG90YWwoc3RhdGVTQ00pXHJcbiAgY29uc3QgdHJhbnNwb3J0YXRpb25Db3N0cyA9IChzdGF0ZVNDTS5mb3JtLnBpY2tVcFR5cGUgPT09IFBpY2tVcFR5cGVFbnVtLkRlbGl2ZXJ5ICYmIChzdGF0ZVNDTS5mcmVpZ2h0Q29uZmlnLnJlZHVjZSgocHJlLCBjdXIpID0+IHtcclxuICAgIGlmIChwcmUgPiBwYXJzZUZsb2F0KGN1cj8uZnJlaWdodFBheSkgJiYgcHJvZHVjdFRvdGFsIDwgcGFyc2VGbG9hdChjdXI/Lm9yZGVyTWF4KSkge1xyXG4gICAgICByZXR1cm4gcGFyc2VGbG9hdChjdXI/LmZyZWlnaHRQYXkpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gcHJlXHJcbiAgICB9XHJcbiAgfSwgcGFyc2VGbG9hdChzdGF0ZVNDTS5mcmVpZ2h0Q29uZmlnW3N0YXRlU0NNLmZyZWlnaHRDb25maWcubGVuZ3RoIC0gMV0/LmZyZWlnaHRQYXkpKSkpIHx8IDBcclxuICBjb25zdCBhY3R1YWxseVBhaWQgPSBwcm9kdWN0VG90YWwgKyB0cmFuc3BvcnRhdGlvbkNvc3RzIC0gZGVhbE1heWJlTnVtYmVyKHN0YXRlU0NNLmZvcm0uZGVkdWN0Q29pbikgKyBkZWFsTWF5YmVOdW1iZXIoc3RhdGVTQ00uZm9ybS5zYWxlVGF4KVxyXG4gIGNvbnN0IGdlbmVyYXRlQ29pbiA9IGFjdHVhbGx5UGFpZCAqIDAuMDFcclxuXHJcbiAgcmV0dXJuIDxkaXY+XHJcbiAgICA8SGVhZGVyVGl0bGVcclxuICAgICAgICB0aXRsZT17J+ehruiupOiuouWNlSd9XHJcbiAgICAgICAgYmFja0NhbGw9eygpID0+IHtcclxuICAgICAgICAgIGFjdGlvbnNTQ00udXBkYXRlUGFnZVR5cGUocGFnZVR5cGVFbnVtLnNob3BDYXJ0KVxyXG4gICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9fVxyXG4gICAgLz5cclxuICAgIHsoISFnZXRMb2FkKGRvYy5vcmRlckNvbmZpcm1JbmZvKSAmJiA8TGluZWFyUHJvZ3Jlc3MvPikgfHwgPGRpdiBzdHlsZT17e2hlaWdodDogJzRweCd9fS8+fVxyXG4gICAgPEJTY3JvbGxlclxyXG4gICAgICAgIGJveEhlaWdodD17J2NhbGMoMTAwdmggLSA2NXB4KSd9XHJcbiAgICA+XHJcbiAgICAgIDxTcGFjZSBoPXsxMH0vPlxyXG4gICAgICA8U2hvcFRpdGxlPlxyXG4gICAgICAgIDxTcGFjZSB3PXsyMH0vPlxyXG4gICAgICAgIHtscygoc3RhdGVTQ00uZm9ybS5waWNrVXBUeXBlID09PSBQaWNrVXBUeXBlRW51bS5TZWxmICYmICfoh6rlj5blnLDlnYAnKSB8fCAn6YCB6LSn5Zyw5Z2AJyl9XHJcbiAgICAgIDwvU2hvcFRpdGxlPlxyXG4gICAgICA8QWRkcmVzc0JveD5cclxuICAgICAgICA8bWFpbj5cclxuICAgICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgIHtgJHthZGRyZXNzRGF0YS5jb21iaW5lQWRkcmVzc31gfVxyXG4gICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgICB7YCR7YWRkcmVzc0RhdGEubmFtZX0gJHthZGRyZXNzRGF0YS5jb250YWN0SW5mb3JtYXRpb259YH1cclxuICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICAgICA8YXNpZGU+XHJcbiAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGFjdGlvbnNTQU0ub3BlbkNsaWNrKClcclxuICAgICAgICAgICAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgYWN0aW9uc1NDTS5zZXRGb3JtKFsnYWRkcmVzc0lkJywgcmVzXSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8Q2hldnJvblJpZ2h0SWNvbi8+XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgPC9hc2lkZT5cclxuICAgICAgPC9BZGRyZXNzQm94PlxyXG4gICAgICA8U3BhY2UgYz17Z3JleVsyMDBdfVxyXG4gICAgICAgICAgICAgaD17MTZ9Lz5cclxuICAgICAgPFNwYWNlIGg9ezE2fS8+XHJcbiAgICAgIDxTaG9wVGl0bGU+XHJcbiAgICAgICAgPFNwYWNlIHc9ezIwfS8+XHJcbiAgICAgICAge2xzKCfku5jmrL7mlrnlvI8nKX1cclxuICAgICAgPC9TaG9wVGl0bGU+XHJcbiAgICAgIDxDYXJkQm94PlxyXG4gICAgICAgIDxoZWFkZXI+e2NhcmREYXRhLm5hbWV9PC9oZWFkZXI+XHJcbiAgICAgICAgPGZvb3Rlcj57Y2FyZERhdGEubnVtYmVyfTwvZm9vdGVyPlxyXG4gICAgICAgIDxhc2lkZT5cclxuICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17YXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYWN0aW9uc1NlbGVjdENhcmQub3BlbkNsaWNrKClcclxuICAgICAgICAgICAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgYWN0aW9uc1NDTS5zZXRGb3JtKFsncGF5bWVudE1ldGhvZENhcmRJZCcsIHJlc10pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPENoZXZyb25SaWdodEljb24vPlxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgIDwvYXNpZGU+XHJcbiAgICAgIDwvQ2FyZEJveD5cclxuICAgICAgPFNwYWNlIGM9e2dyZXlbMjAwXX1cclxuICAgICAgICAgICAgIGg9ezE2fS8+XHJcbiAgICAgIDxTcGFjZSBoPXsxNn0vPlxyXG4gICAgICA8U2hvcFRpdGxlPlxyXG4gICAgICAgIDxTcGFjZSB3PXsyMH0vPlxyXG4gICAgICAgIHtscygn5L2/55So6L6+5Lq65biBJyl9XHJcbiAgICAgICAgPFNwYWNlIHc9ezE2fS8+XHJcbiAgICAgICAgPGZvb3Rlcj57bHMoJ+W9k+aciOWPr+eUqOS9meminScpfXtkZWFsTW9uZXkoc3RhdGVTQ00udXNlci5vcmRlckNvaW5DdXJyZW50TW9udGgpfTwvZm9vdGVyPlxyXG4gICAgICA8L1Nob3BUaXRsZT5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8U3BhY2Ugdz17MjB9Lz5cclxuICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luVG9wOiAnOHB4JywgbWFyZ2luQm90dG9tOiAnMjRweCd9fVxyXG4gICAgICAgICAgICBsYWJlbD17bHMoJycpfVxyXG4gICAgICAgICAgICB2YWx1ZT17c3RhdGVTQ00uZm9ybS5kZWR1Y3RDb2lufVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgYWN0aW9uc1NDTS5zZXRGb3JtKFsnZGVkdWN0Q29pbicsIGUudGFyZ2V0LnZhbHVlXSlcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPFNwYWNlIGM9e2dyZXlbMjAwXX1cclxuICAgICAgICAgICAgIGg9ezE2fS8+XHJcbiAgICAgIDxTcGFjZSBoPXsxNn0vPlxyXG4gICAgICA8U2hvcFRvdGFsPlxyXG4gICAgICAgIDxoZWFkZXI+e2xzKCfotK3nianovabmgLvorqEnKX08L2hlYWRlcj5cclxuICAgICAgICA8Zm9vdGVyPntkZWFsTW9uZXkocHJvZHVjdFRvdGFsKX08L2Zvb3Rlcj5cclxuICAgICAgPC9TaG9wVG90YWw+XHJcbiAgICAgIHt0cmFuc3BvcnRhdGlvbkNvc3RzID4gMCAmJiA8U2hvcFRvdGFsPlxyXG4gICAgICAgIDxoZWFkZXI+e2xzKCfov5DotLknKX08L2hlYWRlcj5cclxuICAgICAgICA8Zm9vdGVyPntkZWFsTW9uZXkodHJhbnNwb3J0YXRpb25Db3N0cyl9PC9mb290ZXI+XHJcbiAgICAgIDwvU2hvcFRvdGFsPn1cclxuICAgICAgPFNob3BUb3RhbD5cclxuICAgICAgICA8aGVhZGVyPntscygn6L6+5Lq65biB5oq15omjJyl9PC9oZWFkZXI+XHJcbiAgICAgICAgPGZvb3Rlcj57ZGVhbE1vbmV5KHN0YXRlU0NNLmZvcm0uZGVkdWN0Q29pbiwgJy0nKX08L2Zvb3Rlcj5cclxuICAgICAgPC9TaG9wVG90YWw+XHJcbiAgICAgIDxTaG9wVG90YWw+XHJcbiAgICAgICAgPGhlYWRlcj57bHMoJ+a2iOi0ueeojicpfTwvaGVhZGVyPlxyXG4gICAgICAgIDxmb290ZXI+e2RlYWxNb25leShzdGF0ZVNDTS5mb3JtLnNhbGVUYXgpfTwvZm9vdGVyPlxyXG4gICAgICA8L1Nob3BUb3RhbD5cclxuICAgICAgPFNob3BUb3RhbFxyXG4gICAgICAgICAgc3R5bGU9e3tmb250U2l6ZTogJzE4cHgnfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxoZWFkZXI+e2xzKCforqLljZXmgLvpop0nKX08L2hlYWRlcj5cclxuICAgICAgICA8Zm9vdGVyPntkZWFsTW9uZXkoYWN0dWFsbHlQYWlkKX08L2Zvb3Rlcj5cclxuICAgICAgPC9TaG9wVG90YWw+XHJcbiAgICA8L0JTY3JvbGxlcj5cclxuICAgIDxGb290ZXJGaXQ+XHJcbiAgICAgIDxoZWFkZXI+e2xzKCfmnKzmrKHorqLljZUnKX1cclxuICAgICAgICA8c3Bhbj57bHMoc3RhdGVTQ00udXNlckxldmVsTGlzdC5maW5kKHYgPT4gdi5jb2RlID09PSBzdGF0ZVNDTS51c2VyLnVzZXJJbmZvPy51c2VyTGV2ZWwpPy5uYW1lKX08L3NwYW4+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG4gICAgICA8Zm9vdGVyPntscygn5bCG6I635b6X5LiL5pyI5L2/55So6L6+5Lq65biBICcpfVxyXG4gICAgICAgIDxzcGFuPntkZWFsTW9uZXkoZ2VuZXJhdGVDb2luKX08L3NwYW4+XHJcbiAgICAgIDwvZm9vdGVyPlxyXG4gICAgICA8YXNpZGU+XHJcbiAgICAgICAgPEJ1dHRvbkxvYWRcclxuICAgICAgICAgICAgbG9hZGluZz17Z2V0TG9hZChkb2Muc2F2ZU9yZGVyKX1cclxuICAgICAgICAgICAgb25DbGljaz17YXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHN1Ym1pdERhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZVNDTS5mb3JtLFxyXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVDb2luLFxyXG4gICAgICAgICAgICAgICAgYWN0dWFsbHlQYWlkLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNwb3J0YXRpb25Db3N0cyxcclxuICAgICAgICAgICAgICAgIHN1YnRvdGFsOiBwcm9kdWN0VG90YWwsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50VXNlckxldmVsOiBzdGF0ZVNDTS51c2VyLnVzZXJJbmZvPy51c2VyTGV2ZWwsXHJcbiAgICAgICAgICAgICAgICByT3JkZXJQcm9kdWN0OiBzdGF0ZVNDTS5zaG9wQ2FydExpc3QubWFwKHYgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgY291bnQ6IHYubnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICBwcm9kdWN0SWQ6IHYucHJvZHVjdD8uaWQsXHJcbiAgICAgICAgICAgICAgICAgIHByb2R1Y3Q6IHYucHJvZHVjdCxcclxuICAgICAgICAgICAgICAgIH0pKSxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYWN0aW9uc1NDTS5zdWJtaXQoe1xyXG4gICAgICAgICAgICAgICAgLi4uc3VibWl0RGF0YSxcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIGlmIChyZXM/LnNhdmVPcmRlcj8uaWQpIHtcclxuICAgICAgICAgICAgICAgIHNob3dNZXNzYWdlKCfmk43kvZzmiJDlip8g5bCG5YmN5b6A5LuY5qy+JylcclxuICAgICAgICAgICAgICAgIC8vIGF3YWl0IHJvdXRlci5yZXBsYWNlKCcvY2FydC9yZXN1bHQnKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgX3F1ZXJ5ID0gZGVhbFVybFF1ZXJ5KHtvcmRlcklkOiByZXM/LnNhdmVPcmRlcj8uaWR9KVxyXG4gICAgICAgICAgICAgICAgYXdhaXQgcm91dGVyLnJlcGxhY2UoYC9wYXkke19xdWVyeX1gLCBgL3BheSR7X3F1ZXJ5fWApXHJcbiAgICAgICAgICAgICAgICBhY3Rpb25zU0NNLmNsZWFyRGF0YSgpXHJcbiAgICAgICAgICAgICAgICBhY3Rpb25zU0NNLmdldExpc3QoKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgdmFyaWFudD17J2NvbnRhaW5lZCd9XHJcbiAgICAgICAgICAgIGNvbG9yPXsnc2Vjb25kYXJ5J31cclxuICAgICAgICA+e2xzKCfmj5DkuqTorqLljZUnKX08L0J1dHRvbkxvYWQ+XHJcbiAgICAgIDwvYXNpZGU+XHJcbiAgICA8L0Zvb3RlckZpdD5cclxuICAgIDxTZWxlY3RBZGRyZXNzLz5cclxuICAgIDxTZWxlY3RDYXJkLz5cclxuICA8L2Rpdj5cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU3RhclJvdW5kZWRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TdGFyUm91bmRlZCdcclxuaW1wb3J0IFN0YXJCb3JkZXJSb3VuZGVkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU3RhckJvcmRlclJvdW5kZWQnXHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHttb2RlbEZhY3Rvcnl9IGZyb20gJy4uLy4uL01vZGVsQWN0aW9uL21vZGVsVXRpbCdcclxuaW1wb3J0IHtcclxuICBHcm91cE9yZGVySXRlbUlucHV0LFxyXG4gIEdyb3VwUXVldWUsXHJcbiAgR3JvdXBRdWV1ZUl0ZW1JbnB1dCxcclxuICBPcmRlckluZm9JdGVtSW5wdXQsXHJcbiAgUHJvZHVjdFxyXG59IGZyb20gJy4uLy4uL2dyYXBocWxUeXBlcy90eXBlcydcclxuaW1wb3J0IHtkb2N9IGZyb20gJy4uLy4uL2dyYXBocWxUeXBlcy9kb2MnXHJcbmltcG9ydCB7dXNlU3RvcmVNb2RlbH0gZnJvbSAnLi4vLi4vTW9kZWxBY3Rpb24vdXNlU3RvcmUnXHJcbmltcG9ydCB7ZGVhbE1vbmV5LCBmcE1lcmdlUHJlfSBmcm9tICcuLi8uLi90b29scy91dGlscydcclxuaW1wb3J0IEN1c0Nhcm91c2VsIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU3dpcGUvU3dpcGUnXHJcbmltcG9ydCB7SGVhZGVyVGl0bGV9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSGVhZGVyVGl0bGUvSGVhZGVyVGl0bGUnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7bHN9IGZyb20gJy4uLy4uL3Rvb2xzL2RlYWxLZXknXHJcbmltcG9ydCB7bXBTdHlsZX0gZnJvbSAnLi4vLi4vc3R5bGUvY29tbW9uJ1xyXG5pbXBvcnQge2dyZXl9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycydcclxuaW1wb3J0IHtCdXR0b259IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQge0dyb3VwT3JkZXJQYWdlLCBncm91cE9yZGVyUGFnZU1vZGVsfSBmcm9tICcuL2dyb3VwT3JkZXJQYWdlJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGdyb3VwUHJvZHVjdE1vZGVsID0gbW9kZWxGYWN0b3J5KCdncm91cFByb2R1Y3RNb2RlbCcsIHtcclxuICBwcm9kdWN0OiB7fSBhcyBQcm9kdWN0LFxyXG4gIGdyb3VwUXVldWVMaXN0OiBbXSBhcyBHcm91cFF1ZXVlW10sXHJcbiAgc2VsZWN0TnVtOiAwLFxyXG4gIHNlbGVjdFF1ZXVlSWQ6ICcnLFxyXG4gIG51bURpc2NvdW50OiAxLFxyXG4gIGdyb3VwRGlzY291bnQ6IDEsXHJcbn0sIHtcclxuICBnZXREYXRhOiBhc3luYyAodmFsdWU6IHN0cmluZywgb3B0aW9uKSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBvcHRpb24ucXVlcnkoZG9jLnByb2R1Y3RMaXN0QnlJZHMsIHtcclxuICAgICAgaWRzOiBbdmFsdWVdLFxyXG4gICAgfSlcclxuICAgIGNvbnN0IGdyb3VwUXVldWVMaXN0ID0gYXdhaXQgb3B0aW9uLnF1ZXJ5KGRvYy5ncm91cFF1ZXVlTGlzdCwge1xyXG4gICAgICBncm91cFF1ZXVlSXRlbUlucHV0OiB7XHJcbiAgICAgICAgcHJvZHVjdDoge1xyXG4gICAgICAgICAgaWQ6IHZhbHVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0gYXMgR3JvdXBRdWV1ZUl0ZW1JbnB1dCxcclxuICAgIH0pXHJcbiAgICBvcHRpb24uc2V0RGF0YShmcE1lcmdlUHJlKHtcclxuICAgICAgcHJvZHVjdDogcmVzPy5wcm9kdWN0TGlzdEJ5SWRzPy5saXN0WzBdID8/IHt9LFxyXG4gICAgICBncm91cFF1ZXVlTGlzdDogZ3JvdXBRdWV1ZUxpc3Q/Lmdyb3VwUXVldWVMaXN0ID8/IFtdLFxyXG4gICAgfSkpXHJcbiAgfSxcclxuICB1cGRhdGVTZWxlY3ROdW06ICh2YWx1ZTogbnVtYmVyLCBvcHRpb24pID0+IHtcclxuICAgIG9wdGlvbi5zZXREYXRhKGZwTWVyZ2VQcmUoe1xyXG4gICAgICBzZWxlY3ROdW06IHZhbHVlID09PSBvcHRpb24uZGF0YS5zZWxlY3ROdW0gPyAwIDogdmFsdWVcclxuICAgIH0pKVxyXG4gIH0sXHJcbiAgc3VibWl0OiBhc3luYyAoe29yZGVySW5mb0l0ZW1JbnB1dH06IHsgb3JkZXJJbmZvSXRlbUlucHV0OiBPcmRlckluZm9JdGVtSW5wdXQgfSwgb3B0aW9uKSA9PiB7XHJcbiAgICBvcHRpb24ubXV0YXRlKGRvYy5zYXZlR3JvdXBPcmRlciwge1xyXG4gICAgICBvcmRlckluZm9JdGVtSW5wdXQ6IHtcclxuICAgICAgICAgIC4uLm9yZGVySW5mb0l0ZW1JbnB1dCxcclxuICAgICAgfSBhcyBPcmRlckluZm9JdGVtSW5wdXQsXHJcbiAgICAgIGdyb3VwT3JkZXJJdGVtSW5wdXQ6IHtcclxuICAgICAgICBvcmRlckdyb3VwQW1vdW50OiBvcHRpb24uZGF0YS5zZWxlY3ROdW0sXHJcbiAgICAgIH0gYXMgR3JvdXBPcmRlckl0ZW1JbnB1dCxcclxuICAgICAgZ3JvdXBRdWV1ZUl0ZW1JbnB1dDoge1xyXG4gICAgICAgIHByb2R1Y3Q6IG9wdGlvbi5kYXRhLnByb2R1Y3QsXHJcbiAgICAgICAgLi4uKG9wdGlvbi5kYXRhLnNlbGVjdFF1ZXVlSWQgPyB7aWQ6IG9wdGlvbi5kYXRhLnNlbGVjdFF1ZXVlSWR9IDoge30pLFxyXG4gICAgICB9IGFzIEdyb3VwUXVldWVJdGVtSW5wdXQsXHJcbiAgICB9KVxyXG4gIH0sXHJcbn0pXHJcblxyXG5jb25zdCBQcmljZVJlZCA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZDogJHttcFN0eWxlLnJlZH07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTIwcHg7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMzBweCk7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICA+IG1haW4ge1xyXG4gICAgZ3JpZC1hcmVhOiAxLzEvMy8yO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgPiBzcGFuIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcbmNvbnN0IE5hbWUgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDE2cHggMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICA+IG1haW4ge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICB9XHJcbiAgPiBzZWN0aW9uIHtcclxuICAgID4gc3BhbiB7XHJcbiAgICAgIHBhZGRpbmc6IDAgNHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAke2dyZXlbJzcwMCddfTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGJvdHRvbTogLTRweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBZZWxsb3dTdGFyID0gKCkgPT4gPFN0YXJSb3VuZGVkSWNvbiBmb250U2l6ZT17J3NtYWxsJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tjb2xvcjogJyNGREQzMzQnfX0vPlxyXG5cclxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaGVhZGVyYFxyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuYFxyXG5jb25zdCBHcm91cFF1ZXVlQm94ID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAxNnB4O1xyXG5gXHJcblxyXG5jb25zdCBTbWFydE1hdGNoID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAxNnB4IDE2cHggOTBweDtcclxuICA+IHNlY3Rpb24ge1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gID4gbWFpbiB7XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBQcmljZSA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgPiBtYWluIHtcclxuICAgIC8vZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gID4gbWFpbiwgc2VjdGlvbiB7XHJcbiAgICA+ICoge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBTdWJtaXQgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgJHttcFN0eWxlLnJlZH07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBib3gtc2hhZG93OiAke21wU3R5bGUuc2hhZG93WycxJ119O1xyXG4gID4gYXNpZGUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgY29sb3I6ICR7bXBTdHlsZS5yZWR9O1xyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEdyb3VwUHJvZHVjdCA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IGlkID0gKHJvdXRlci5xdWVyeT8uaWQgYXMgc3RyaW5nKSA/PyAnJ1xyXG4gIGNvbnN0IHthY3Rpb25zOiBhY3Rpb25zR3JvdXBQcm9kdWN0LCBzdGF0ZTogc3RhdGVHcm91cFByb2R1Y3R9ID0gdXNlU3RvcmVNb2RlbChncm91cFByb2R1Y3RNb2RlbClcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYWN0aW9uc0dyb3VwUHJvZHVjdC5nZXREYXRhKGlkKVxyXG4gIH0sIFtpZF0pXHJcbiAgY29uc3Qge2FjdGlvbnM6IGFjdGlvbnNHcm91cE9yZGVyUGFnZU1vZGVsfSA9IHVzZVN0b3JlTW9kZWwoZ3JvdXBPcmRlclBhZ2VNb2RlbClcclxuXHJcbiAgY29uc3QgcHJvZHVjdCA9IHN0YXRlR3JvdXBQcm9kdWN0LnByb2R1Y3RcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYWN0aW9uc0dyb3VwUHJvZHVjdC51cGRhdGVTZWxlY3ROdW0oMilcclxuICAgIGFjdGlvbnNHcm91cE9yZGVyUGFnZU1vZGVsLm9wZW4oKVxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gPGRpdj5cclxuICAgIDxIZWFkZXJUaXRsZVxyXG4gICAgICAgIHRpdGxlPXsn5Lqn5ZOB6K+m5oOFJ31cclxuICAgIC8+XHJcbiAgICA8Q3VzQ2Fyb3VzZWxcclxuICAgICAgICBoZWlnaHQ9eycyNDBweCd9XHJcbiAgICAgICAgZGF0YUxpc3Q9e3Byb2R1Y3Q/LmltZz8ubWFwKHYgPT4gKHtcclxuICAgICAgICAgIC4uLnYsXHJcbiAgICAgICAgICBpbWdVcmw6IHY/LnVybCxcclxuICAgICAgICB9KSkgYXMgW119XHJcbiAgICAvPlxyXG4gICAgPFByaWNlUmVkPlxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICB7bHMoJ+WfuuWHhuS7t+agvCcpfVxyXG4gICAgICAgIDxzcGFuPntkZWFsTW9uZXkocHJvZHVjdC5wcmljZU91dCl9L3twcm9kdWN0LnBhY2tpbmdVbml0U3RyaW5nfTwvc3Bhbj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgICA8YXNpZGU+e2xzKCflt7LmiJDlm6InKX17MjN9e2xzKCfljZUnKX08L2FzaWRlPlxyXG4gICAgICA8YXNpZGU+e2xzKCfmi7zlm6LkuK0nKX17Mn17bHMoJ+WNlScpfTwvYXNpZGU+XHJcbiAgICA8L1ByaWNlUmVkPlxyXG4gICAgPE5hbWU+XHJcbiAgICAgIDxtYWluPntwcm9kdWN0Lm5hbWV9PC9tYWluPlxyXG4gICAgICA8c2VjdGlvbj57cHJvZHVjdC5ncm91cFJlbWFya30ve3Byb2R1Y3QuZ3JvdXBBbW91bnR9e3Byb2R1Y3QuZ3JvdXBBbW91bnRVbml0U3RyaW5nfTxici8+e2xzKCfliIblm6Lnsr7luqYnKX1cclxuICAgICAgICA8c3Bhbj57Wy4uLkFycmF5KHByb2R1Y3QuZ3JvdXBQcmVjaXNpb24pXS5tYXAoKHYsIGkpID0+IGkpLm1hcCh2YWx1ZSA9PlxyXG4gICAgICAgICAgICA8WWVsbG93U3RhciBrZXk9e3ZhbHVlfS8+KX08L3NwYW4+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvTmFtZT5cclxuICAgIDxHcm91cFF1ZXVlQm94PlxyXG4gICAgICA8VGl0bGU+e2xzKCfmi7zlm6LkuK0nKX08L1RpdGxlPlxyXG4gICAgPC9Hcm91cFF1ZXVlQm94PlxyXG4gICAgPFNtYXJ0TWF0Y2g+XHJcbiAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgPFRpdGxlPntscygn5pm66IO95Yy56YWNJyl9PC9UaXRsZT5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgIHtscygn6K+354K55Ye7Jyl9XHJcbiAgICAgICAgPFN0YXJCb3JkZXJSb3VuZGVkSWNvbi8+XHJcbiAgICAgICAge2xzKCfnoa7lrprmgqjpnIDopoHnmoTku73mlbAnKX1cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICB7Wy4uLkFycmF5KHByb2R1Y3QuZ3JvdXBQcmVjaXNpb24pXS5tYXAoKHYsIGkpID0+IGkpLm1hcCh2YWx1ZSA9PiB2YWx1ZSArIDEgPiBzdGF0ZUdyb3VwUHJvZHVjdC5zZWxlY3ROdW0gP1xyXG4gICAgICAgICAgICA8U3RhckJvcmRlclJvdW5kZWRJY29uXHJcbiAgICAgICAgICAgICAgICBrZXk9e2BjbGlja1N0YXIke3ZhbHVlfWB9XHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZT17J2xhcmdlJ31cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFjdGlvbnNHcm91cFByb2R1Y3QudXBkYXRlU2VsZWN0TnVtKHZhbHVlICsgMSl9XHJcbiAgICAgICAgICAgIC8+IDogPFN0YXJSb3VuZGVkSWNvblxyXG4gICAgICAgICAgICAgICAga2V5PXtgY2xpY2tTdGFyJHt2YWx1ZX1gfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tjb2xvcjogJyNGREQzMzQnfX1cclxuICAgICAgICAgICAgICAgIGZvbnRTaXplPXsnbGFyZ2UnfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYWN0aW9uc0dyb3VwUHJvZHVjdC51cGRhdGVTZWxlY3ROdW0odmFsdWUgKyAxKX1cclxuICAgICAgICAgICAgLz4pfVxyXG4gICAgICA8L21haW4+XHJcbiAgICAgIDxQcmljZT5cclxuICAgICAgICA8bWFpbj5cclxuICAgICAgICAgIDxoZWFkZXI+e2RlYWxNb25leSgocHJvZHVjdC5wcmljZU91dCA/PyAwKSAqIHN0YXRlR3JvdXBQcm9kdWN0LnNlbGVjdE51bSAqIHN0YXRlR3JvdXBQcm9kdWN0Lm51bURpc2NvdW50ICogc3RhdGVHcm91cFByb2R1Y3QuZ3JvdXBEaXNjb3VudCl9PC9oZWFkZXI+XHJcbiAgICAgICAgICA8Zm9vdGVyPntscygn5oqY5ZCO5Lu35qC8Jyl9PC9mb290ZXI+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgICAgIDxkaXY+PTwvZGl2PlxyXG4gICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgPGhlYWRlcj57ZGVhbE1vbmV5KChwcm9kdWN0LnByaWNlT3V0ID8/IDApICogc3RhdGVHcm91cFByb2R1Y3Quc2VsZWN0TnVtKX08L2hlYWRlcj5cclxuICAgICAgICAgIDxmb290ZXI+e2xzKCfln7rlh4bku7fmoLwnKX08L2Zvb3Rlcj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPGRpdj54PC9kaXY+XHJcbiAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICA8aGVhZGVyPntzdGF0ZUdyb3VwUHJvZHVjdC5udW1EaXNjb3VudH08L2hlYWRlcj5cclxuICAgICAgICAgIDxmb290ZXI+e2xzKCfku73mlbDmipjmiaMnKX08L2Zvb3Rlcj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPGRpdj54PC9kaXY+XHJcbiAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICA8aGVhZGVyPntzdGF0ZUdyb3VwUHJvZHVjdC5ncm91cERpc2NvdW50fTwvaGVhZGVyPlxyXG4gICAgICAgICAgPGZvb3Rlcj57bHMoJ+aIkOWbouaKmOS4iuaKmCcpfTwvZm9vdGVyPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPC9QcmljZT5cclxuICAgIDwvU21hcnRNYXRjaD5cclxuICAgIDxTdWJtaXQ+XHJcbiAgICAgIDxhc2lkZT57bHMoJ+mAieaLqeS6hicpfXtzdGF0ZUdyb3VwUHJvZHVjdC5zZWxlY3ROdW19e2xzKCfku70nKX08L2FzaWRlPlxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBkaXNhYmxlZD17c3RhdGVHcm91cFByb2R1Y3Quc2VsZWN0TnVtID09PSAwfVxyXG4gICAgICAgICAgc3R5bGU9e3toZWlnaHQ6ICcxMDAlJywgcGFkZGluZzogJzAgMzJweCcsIGJvcmRlclJhZGl1czogJzAnLCBmb250U2l6ZTogJzE4cHgnfX1cclxuICAgICAgICAgIGNvbG9yPXsnc2Vjb25kYXJ5J31cclxuICAgICAgICAgIHZhcmlhbnQ9eydjb250YWluZWQnfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBhY3Rpb25zR3JvdXBPcmRlclBhZ2VNb2RlbC5vcGVuKClcclxuICAgICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7bHMoJ+WOu+e7k+eulycpfVxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgIDwvU3VibWl0PlxyXG4gICAgPEdyb3VwT3JkZXJQYWdlLz5cclxuICA8L2Rpdj5cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge21vZGVsRmFjdG9yeX0gZnJvbSAnLi4vLi4vTW9kZWxBY3Rpb24vbW9kZWxVdGlsJ1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQge3VzZVN0b3JlTW9kZWx9IGZyb20gJy4uLy4uL01vZGVsQWN0aW9uL3VzZVN0b3JlJ1xyXG5pbXBvcnQge2RlYWxNYXliZU51bWJlciwgZGVhbE1vbmV5LCBmcE1lcmdlLCBmcE1lcmdlUHJlfSBmcm9tICcuLi8uLi90b29scy91dGlscydcclxuaW1wb3J0IHtncm91cFByb2R1Y3RNb2RlbH0gZnJvbSAnLi9baWRdJ1xyXG5pbXBvcnQge1Nob3BDYXJ0UHJvZHVjdEJveH0gZnJvbSBcIi4uL2NhcnQvQ2FydFByb2R1Y3RcIjtcclxuaW1wb3J0IHtkZWFsSW1nVXJsfSBmcm9tIFwiLi4vLi4vdG9vbHMvaW1nXCI7XHJcbmltcG9ydCB7UHJvZHVjdFByaWNlfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Qcm9kdWN0SXRlbS9Qcm9kdWN0SXRlbVwiO1xyXG5pbXBvcnQge0ljb25CdXR0b24sIE1lbnVJdGVtLCBUZXh0RmllbGR9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQge2xzfSBmcm9tIFwiLi4vLi4vdG9vbHMvZGVhbEtleVwiO1xyXG5pbXBvcnQge1NwYWNlfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Cb3gvQm94XCI7XHJcbmltcG9ydCB7Z2V0UGlja1VwVHlwZU5hbWUsIFBpY2tVcFR5cGVFbnVtfSBmcm9tIFwiLi4vLi4vc3NfY29tbW9uL2VudW1cIjtcclxuaW1wb3J0IENoZXZyb25SaWdodEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9DaGV2cm9uUmlnaHRcIjtcclxuaW1wb3J0IHtBZGRyZXNzQm94LCBDYXJkQm94LCBTaG9wVGl0bGUsIFNob3BUb3RhbH0gZnJvbSBcIi4uL2NhcnQvb3JkZXJQYWdlXCI7XHJcbmltcG9ydCB7c2hvcENhcnRNb2RlbH0gZnJvbSBcIi4uL2NhcnRcIjtcclxuaW1wb3J0IHtTZWxlY3RBZGRyZXNzLCBzZWxlY3RBZGRyZXNzTW9kZWx9IGZyb20gXCIuLi9jYXJ0L2NvbXBvbmVudHMvU2VsZWN0QWRkcmVzc1wiO1xyXG5pbXBvcnQge1NlbGVjdENhcmQsIHNlbGVjdENhcmRNb2RlbH0gZnJvbSBcIi4uL2NhcnQvY29tcG9uZW50cy9TZWxlY3RDYXJkXCI7XHJcbmltcG9ydCB7QnV0dG9uTG9hZH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQnV0dG9uTG9hZC9CdXR0b25Mb2FkXCI7XHJcbmltcG9ydCB7bXBTdHlsZX0gZnJvbSBcIi4uLy4uL3N0eWxlL2NvbW1vblwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdyb3VwT3JkZXJQYWdlTW9kZWwgPSBtb2RlbEZhY3RvcnkoJ29yZGVyUGFnZU1vZGVsJywge1xyXG4gIHNob3c6IGZhbHNlLFxyXG59LCB7XHJcbiAgb3BlbjogKHZhbHVlLCBvcHRpb24pID0+IHtcclxuICAgIG9wdGlvbi5zZXREYXRhKGZwTWVyZ2VQcmUoe1xyXG4gICAgICBzaG93OiB0cnVlLFxyXG4gICAgfSkpXHJcbiAgfSxcclxufSlcclxuXHJcbmNvbnN0IE9yZGVyUGFnZUJveCA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICA+IGZvb3RlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNoYWRvdzogJHttcFN0eWxlLnNoYWRvd1tcIjFcIl19O1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgR3JvdXBPcmRlclBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3Qge3N0YXRlOiBzdGF0ZU9yZGVyUGFnZU1vZGVsfSA9IHVzZVN0b3JlTW9kZWwoZ3JvdXBPcmRlclBhZ2VNb2RlbClcclxuICBjb25zdCB7YWN0aW9uczogYWN0aW9uc0dyb3VwUHJvZHVjdCwgc3RhdGU6IHN0YXRlR3JvdXBQcm9kdWN0fSA9IHVzZVN0b3JlTW9kZWwoZ3JvdXBQcm9kdWN0TW9kZWwpXHJcbiAgY29uc3QgcHJvZHVjdCA9IHN0YXRlR3JvdXBQcm9kdWN0LnByb2R1Y3RcclxuICBjb25zdCB7c3RhdGU6IHN0YXRlU0NNLCBhY3Rpb25zOiBhY3Rpb25zU0NNfSA9IHVzZVN0b3JlTW9kZWwoc2hvcENhcnRNb2RlbClcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFzdGF0ZVNDTS51c2VyLmlkKSB7XHJcbiAgICAgIGFjdGlvbnNTQ00uZ2V0T3JkZXJJbmZvKClcclxuICAgIH1cclxuICB9LCBbXSlcclxuICBjb25zdCB7YWN0aW9uczogYWN0aW9uc1NBTX0gPSB1c2VTdG9yZU1vZGVsKHNlbGVjdEFkZHJlc3NNb2RlbClcclxuICBjb25zdCB7YWN0aW9uczogYWN0aW9uc1NlbGVjdENhcmR9ID0gdXNlU3RvcmVNb2RlbChzZWxlY3RDYXJkTW9kZWwpXHJcblxyXG4gIGNvbnN0IGFkZHJlc3NEYXRhID0gc3RhdGVTQ00uZGVhbEFkZHJlc3NEYXRhKHN0YXRlU0NNKVxyXG4gIGNvbnN0IGNhcmREYXRhID0gc3RhdGVTQ00ucGF5Q2FyZExpc3Q/LmZpbmQodiA9PiB2LmlkID09PSBzdGF0ZVNDTS5mb3JtLnBheW1lbnRNZXRob2RDYXJkSWQpIHx8IHt9XHJcbiAgY29uc3QgcHJvZHVjdFRvdGFsID0gKHByb2R1Y3QucHJpY2VPdXQgPz8gMCkgKiBzdGF0ZUdyb3VwUHJvZHVjdC5zZWxlY3ROdW1cclxuICBjb25zdCB0cmFuc3BvcnRhdGlvbkNvc3RzID0gKHN0YXRlU0NNLmZvcm0ucGlja1VwVHlwZSA9PT0gUGlja1VwVHlwZUVudW0uRGVsaXZlcnkgJiYgKHN0YXRlU0NNLmZyZWlnaHRDb25maWcucmVkdWNlKChwcmUsIGN1cikgPT4ge1xyXG4gICAgaWYgKHByZSA+IHBhcnNlRmxvYXQoY3VyPy5mcmVpZ2h0UGF5KSAmJiBwcm9kdWN0VG90YWwgPCBwYXJzZUZsb2F0KGN1cj8ub3JkZXJNYXgpKSB7XHJcbiAgICAgIHJldHVybiBwYXJzZUZsb2F0KGN1cj8uZnJlaWdodFBheSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBwcmVcclxuICAgIH1cclxuICB9LCBwYXJzZUZsb2F0KHN0YXRlU0NNLmZyZWlnaHRDb25maWdbc3RhdGVTQ00uZnJlaWdodENvbmZpZy5sZW5ndGggLSAxXT8uZnJlaWdodFBheSkpKSkgfHwgMFxyXG4gIGNvbnN0IGFjdHVhbGx5UGFpZCA9IHByb2R1Y3RUb3RhbCArIHRyYW5zcG9ydGF0aW9uQ29zdHMgKyBkZWFsTWF5YmVOdW1iZXIoc3RhdGVTQ00uZm9ybS5zYWxlVGF4KVxyXG4gIGNvbnN0IGdlbmVyYXRlQ29pbiA9IGFjdHVhbGx5UGFpZCAqIDAuMDFcclxuXHJcbiAgcmV0dXJuIHN0YXRlT3JkZXJQYWdlTW9kZWwuc2hvdyAmJiA8T3JkZXJQYWdlQm94XHJcbiAgPlxyXG4gICAgPFNob3BDYXJ0UHJvZHVjdEJveCBzdHlsZT17e3BhZGRpbmc6ICcyMHB4J319PlxyXG4gICAgICA8aW1nIHNyYz17ZGVhbEltZ1VybChwcm9kdWN0Py5pbWc/LlswXT8udXJsKX1cclxuICAgICAgICAgICBhbHQ9XCJcIi8+XHJcbiAgICAgIDxtYWluPntwcm9kdWN0Py5uYW1lfXtwcm9kdWN0Py53ZWlnaHR9e3Byb2R1Y3Q/LnVuaXR9PC9tYWluPlxyXG4gICAgICA8c2VjdGlvbj57cHJvZHVjdD8ucmVtYXJrfTwvc2VjdGlvbj5cclxuICAgICAgPGZvb3Rlcj5cclxuICAgICAgICA8UHJvZHVjdFByaWNlIHByb2R1Y3Q9e3Byb2R1Y3R9Lz5cclxuICAgICAgICA8c3Bhbj57c3RhdGVHcm91cFByb2R1Y3Quc2VsZWN0TnVtfXtscygn5Lu9Jyl9PC9zcGFuPlxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgIDwvU2hvcENhcnRQcm9kdWN0Qm94PlxyXG4gICAgPFRleHRGaWVsZFxyXG4gICAgICAgIHN0eWxlPXt7bWFyZ2luOiAnMTZweCcsIHdpZHRoOiAnY2FsYygxMDB2dyAtIDMycHgpJ319XHJcbiAgICAgICAgZnVsbFdpZHRoPXt0cnVlfVxyXG4gICAgICAgIGxhYmVsPXtscygn6L+Q6YCB5pa55byPJyl9XHJcbiAgICAgICAgc2VsZWN0PXt0cnVlfVxyXG4gICAgICAgIHZhbHVlPXtzdGF0ZVNDTS5mb3JtLnBpY2tVcFR5cGV9XHJcbiAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHtcclxuICAgICAgICAgIGFjdGlvbnNTQ00uc2V0Rm9ybShbJ3BpY2tVcFR5cGUnLCBldmVudC50YXJnZXQudmFsdWVdKVxyXG4gICAgICAgICAgYWN0aW9uc1NDTS5zZXRGb3JtKFsnYWRkcmVzc0lkJywgc3RhdGVTQ00uaW5pdEFkZHJlc3NJZChmcE1lcmdlKHN0YXRlU0NNLCB7XHJcbiAgICAgICAgICAgIGZvcm06IHtcclxuICAgICAgICAgICAgICBwaWNrVXBUeXBlOiBldmVudC50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KSldKVxyXG4gICAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgdmFsdWU9e1BpY2tVcFR5cGVFbnVtLlNlbGZ9XHJcbiAgICAgID57bHMoZ2V0UGlja1VwVHlwZU5hbWUoUGlja1VwVHlwZUVudW0uU2VsZikpfTwvTWVudUl0ZW0+XHJcbiAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgdmFsdWU9e1BpY2tVcFR5cGVFbnVtLkRlbGl2ZXJ5fVxyXG4gICAgICA+e2xzKGdldFBpY2tVcFR5cGVOYW1lKFBpY2tVcFR5cGVFbnVtLkRlbGl2ZXJ5KSl9PC9NZW51SXRlbT5cclxuICAgIDwvVGV4dEZpZWxkPlxyXG4gICAgPEFkZHJlc3NCb3g+XHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICB7YCR7YWRkcmVzc0RhdGEuY29tYmluZUFkZHJlc3N9YH1cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAge2Ake2FkZHJlc3NEYXRhLm5hbWV9ICR7YWRkcmVzc0RhdGEuY29udGFjdEluZm9ybWF0aW9ufWB9XHJcbiAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgICAgPGFzaWRlPlxyXG4gICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBhY3Rpb25zU0FNLm9wZW5DbGljaygpXHJcbiAgICAgICAgICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uc1NDTS5zZXRGb3JtKFsnYWRkcmVzc0lkJywgcmVzXSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPENoZXZyb25SaWdodEljb24vPlxyXG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgPC9hc2lkZT5cclxuICAgIDwvQWRkcmVzc0JveD5cclxuICAgIDxTaG9wVGl0bGU+XHJcbiAgICAgIDxTcGFjZSB3PXsyMH0vPlxyXG4gICAgICB7bHMoJ+S7mOasvuaWueW8jycpfVxyXG4gICAgPC9TaG9wVGl0bGU+XHJcbiAgICA8Q2FyZEJveD5cclxuICAgICAgPGhlYWRlcj57Y2FyZERhdGEubmFtZX08L2hlYWRlcj5cclxuICAgICAgPGZvb3Rlcj57Y2FyZERhdGEubnVtYmVyfTwvZm9vdGVyPlxyXG4gICAgICA8YXNpZGU+XHJcbiAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17YXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGFjdGlvbnNTZWxlY3RDYXJkLm9wZW5DbGljaygpXHJcbiAgICAgICAgICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uc1NDTS5zZXRGb3JtKFsncGF5bWVudE1ldGhvZENhcmRJZCcsIHJlc10pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxDaGV2cm9uUmlnaHRJY29uLz5cclxuICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgIDwvYXNpZGU+XHJcbiAgICA8L0NhcmRCb3g+XHJcbiAgICA8U2VsZWN0QWRkcmVzcy8+XHJcbiAgICA8U2VsZWN0Q2FyZC8+XHJcbiAgICA8U2hvcFRvdGFsPlxyXG4gICAgICA8aGVhZGVyPntscygn6LSt54mp6L2m5oC76K6hJyl9PC9oZWFkZXI+XHJcbiAgICAgIDxmb290ZXI+e2RlYWxNb25leShwcm9kdWN0VG90YWwpfTwvZm9vdGVyPlxyXG4gICAgPC9TaG9wVG90YWw+XHJcbiAgICB7dHJhbnNwb3J0YXRpb25Db3N0cyA+IDAgJiYgPFNob3BUb3RhbD5cclxuICAgICAgPGhlYWRlcj57bHMoJ+i/kOi0uScpfTwvaGVhZGVyPlxyXG4gICAgICA8Zm9vdGVyPntkZWFsTW9uZXkodHJhbnNwb3J0YXRpb25Db3N0cyl9PC9mb290ZXI+XHJcbiAgICA8L1Nob3BUb3RhbD59XHJcbiAgICA8U2hvcFRvdGFsPlxyXG4gICAgICA8aGVhZGVyPntscygn5Lu95pWw5oqY5omjJyl9PC9oZWFkZXI+XHJcbiAgICAgIDxmb290ZXI+e3N0YXRlR3JvdXBQcm9kdWN0Lm51bURpc2NvdW50fTwvZm9vdGVyPlxyXG4gICAgPC9TaG9wVG90YWw+XHJcbiAgICA8U2hvcFRvdGFsPlxyXG4gICAgICA8aGVhZGVyPntscygn5oiQ5Zui5oqY5LiK5oqYJyl9PC9oZWFkZXI+XHJcbiAgICAgIDxmb290ZXI+e3N0YXRlR3JvdXBQcm9kdWN0Lmdyb3VwRGlzY291bnR9PC9mb290ZXI+XHJcbiAgICA8L1Nob3BUb3RhbD5cclxuICAgIDxTaG9wVG90YWxcclxuICAgICAgICBzdHlsZT17e2ZvbnRTaXplOiAnMThweCd9fVxyXG4gICAgPlxyXG4gICAgICA8aGVhZGVyPntscygn6K6i5Y2V5oC76aKdJyl9PC9oZWFkZXI+XHJcbiAgICAgIDxmb290ZXI+e2RlYWxNb25leShhY3R1YWxseVBhaWQpfTwvZm9vdGVyPlxyXG4gICAgPC9TaG9wVG90YWw+XHJcbiAgICA8U3BhY2UgaD17NjB9Lz5cclxuICAgIDxmb290ZXI+XHJcbiAgICAgIDxCdXR0b25Mb2FkXHJcbiAgICAgICAgICB2YXJpYW50PXsnY29udGFpbmVkJ31cclxuICAgICAgICAgIGNvbG9yPXsnc2Vjb25kYXJ5J31cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgYWN0aW9uc0dyb3VwUHJvZHVjdC5zdWJtaXQoe1xyXG4gICAgICAgICAgICAgIG9yZGVySW5mb0l0ZW1JbnB1dDoge1xyXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVDb2luLFxyXG4gICAgICAgICAgICAgICAgYWN0dWFsbHlQYWlkLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNwb3J0YXRpb25Db3N0cyxcclxuICAgICAgICAgICAgICAgIHN1YnRvdGFsOiBwcm9kdWN0VG90YWwsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50VXNlckxldmVsOiBzdGF0ZVNDTS51c2VyLnVzZXJJbmZvPy51c2VyTGV2ZWwsXHJcbiAgICAgICAgICAgICAgICByT3JkZXJQcm9kdWN0OiBbe1xyXG4gICAgICAgICAgICAgICAgICBjb3VudDogc3RhdGVHcm91cFByb2R1Y3Quc2VsZWN0TnVtLFxyXG4gICAgICAgICAgICAgICAgICBwcm9kdWN0SWQ6IHByb2R1Y3Q/LmlkLFxyXG4gICAgICAgICAgICAgICAgICBwcm9kdWN0LFxyXG4gICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfX1cclxuICAgICAgPntscygn5o+Q5Lqk6K6i5Y2VJyl9PC9CdXR0b25Mb2FkPlxyXG4gICAgPC9mb290ZXI+XHJcbiAgPC9PcmRlclBhZ2VCb3g+IHx8IG51bGxcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9