"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromoCodeTypeEnum;
(function (PromoCodeTypeEnum) {
    PromoCodeTypeEnum["DarenCard"] = "DarenCard";
    PromoCodeTypeEnum["PromoCode"] = "PromoCode";
})(PromoCodeTypeEnum = exports.PromoCodeTypeEnum || (exports.PromoCodeTypeEnum = {}));
var DiscountTypeEnum;
(function (DiscountTypeEnum) {
    DiscountTypeEnum["Percentage"] = "Percentage";
    DiscountTypeEnum["Amount"] = "Amount";
})(DiscountTypeEnum = exports.DiscountTypeEnum || (exports.DiscountTypeEnum = {}));
var SS;
(function (SS) {
    SS[SS["SS"] = 0] = "SS";
    SS[SS["SS2"] = 1] = "SS2";
})(SS = exports.SS || (exports.SS = {}));
var DiscountConditionEnum;
(function (DiscountConditionEnum) {
    DiscountConditionEnum["No"] = "No";
    DiscountConditionEnum["Amount"] = "Amount";
})(DiscountConditionEnum = exports.DiscountConditionEnum || (exports.DiscountConditionEnum = {}));
var ProductSupplement;
(function (ProductSupplement) {
    ProductSupplement[ProductSupplement["_"] = 0] = "_";
    ProductSupplement[ProductSupplement["Pending"] = 1] = "Pending";
    ProductSupplement[ProductSupplement["Finish"] = 2] = "Finish";
})(ProductSupplement = exports.ProductSupplement || (exports.ProductSupplement = {}));
exports.ProductSupplementString = {
    1: '配货中',
    2: '已完成',
};
var OrderState;
(function (OrderState) {
    OrderState[OrderState["Ordered"] = 1] = "Ordered";
    OrderState[OrderState["Paid"] = 2] = "Paid";
    OrderState[OrderState["Picking"] = 3] = "Picking";
    OrderState[OrderState["PickedUp"] = 4] = "PickedUp";
    OrderState[OrderState["Finish"] = 5] = "Finish";
    OrderState[OrderState["Cancel"] = 6] = "Cancel";
})(OrderState = exports.OrderState || (exports.OrderState = {}));
// 配置管理
var DictTypeEnum;
(function (DictTypeEnum) {
    DictTypeEnum["GroupPrecision"] = "GroupPrecision";
    DictTypeEnum["UserLevel"] = "UserLevel";
    DictTypeEnum["Freight"] = "Freight";
    DictTypeEnum["HelpDocumentationType"] = "HelpDocumentationType";
    DictTypeEnum["HelpDocumentation"] = "HelpDocumentation";
    DictTypeEnum["PromotionThemeSelect"] = "PromotionThemeSelect";
    DictTypeEnum["PromotionFlashSale"] = "PromotionFlashSale";
    DictTypeEnum["HomeCarousel"] = "HomeCarousel";
    DictTypeEnum["OrderState"] = "OrderState";
    DictTypeEnum["SelfAddress"] = "SelfAddress";
    DictTypeEnum["AppModule"] = "AppModule";
})(DictTypeEnum = exports.DictTypeEnum || (exports.DictTypeEnum = {}));
// 轮播图关联项
var RelatedObjTypeEnum;
(function (RelatedObjTypeEnum) {
    RelatedObjTypeEnum["PromoCode"] = "PromoCode";
    RelatedObjTypeEnum["PromotionFlashSale"] = "PromotionFlashSale";
    RelatedObjTypeEnum["PromotionThemeSelect"] = "PromotionThemeSelect";
})(RelatedObjTypeEnum = exports.RelatedObjTypeEnum || (exports.RelatedObjTypeEnum = {}));
var AppModuleTypeEnum;
(function (AppModuleTypeEnum) {
    AppModuleTypeEnum["categorySelection"] = "categorySelection";
    AppModuleTypeEnum["limitTime"] = "limitTime";
    AppModuleTypeEnum["salesRank"] = "salesRank";
    AppModuleTypeEnum["themeSelection"] = "themeSelection";
    AppModuleTypeEnum["mayLike"] = "mayLike";
    AppModuleTypeEnum["lineRanking"] = "lineRanking";
    AppModuleTypeEnum["topRanking"] = "topRanking";
})(AppModuleTypeEnum = exports.AppModuleTypeEnum || (exports.AppModuleTypeEnum = {}));
exports.orderStateKeys = Object.values(OrderState).filter(function (value) { return typeof (value) === 'string'; });
