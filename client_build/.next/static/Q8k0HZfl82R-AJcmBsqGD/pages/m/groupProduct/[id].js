(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{K6Ew:function(e,t,n){"use strict";n.r(t);var o=n("rePB"),r=n("KQm4"),u=n("o0o1"),i=n.n(u),l=n("HaE+"),a=n("q1tI"),c=n.n(a),d=n("zfZ/"),s=n.n(d),p=n("roQC"),f=n.n(p),m=n("nOHt"),v=n("+/yG"),b=n("i7FU"),g=n("U81q"),O=n("cBzo"),j=n("K0AU"),h=n("B42p"),y=n("vOnD"),x=n("+vfP"),w=n("ZtJr"),D=n("LXXt"),k=n("Z3vd"),I=n("6saQ"),C=n("Oj7+"),P=n("oxxF"),N=n("r9w1"),S=n("jjAL"),A=n("PsDL"),L=n("cW92"),_=n("4Rmy"),Q=n("E2gh"),F=n.n(Q),E=n("odey"),z=n("We6d"),U=n("TcOc"),T=n("pHDM"),B=n("+kHn"),G=n("OO/1"),M=c.a.createElement;function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var H=Object(v.c)("orderPageModel",{show:!1},{open:function(e,t){t.setData(Object(O.f)({show:!0}))},close:function(e,t){t.setData(Object(O.f)({show:!1}))}}),K=y.a.div.withConfig({displayName:"groupOrderPage__OrderPageBox",componentId:"euzz55-0"})(["position:fixed;top:0;bottom:0;left:0;right:0;background:white;overflow-y:auto;> footer{position:fixed;bottom:0;box-sizing:border-box;box-shadow:",";width:100vw;text-align:right;}"],w.a.shadow[1]),X=function(){var e,t,n,o,r,u,d=Object(m.useRouter)(),s=Object(g.b)(H),p=s.state,f=s.actions,v=Object(g.b)($),b=v.actions,j=v.state,y=j.product,w=Object(g.b)(z.c),D=w.state,k=w.actions;Object(a.useEffect)((function(){D.user.id||k.getOrderInfo()}),[]);var Q=Object(g.b)(U.b).actions,R=Object(g.b)(T.b).actions,X=D.dealAddressData(D),J=(null===(e=D.payCardList)||void 0===e?void 0:e.find((function(e){return e.id===D.form.paymentMethodCardId})))||{},W=(null!==(t=y.priceOut)&&void 0!==t?t:0)*Y(y)*j.selectNum,Z=D.dealTransportationCosts(D,W),V=j.dealDiscountAmount(j)+Z+Object(O.a)(D.form.saleTax)-Object(O.a)(null===(n=D.form)||void 0===n?void 0:n.deductCoin),ee=.01*V;return Object(a.useEffect)((function(){return p.show&&(window.history.pushState(null,"",document.URL),window.addEventListener("popstate",(function(e){f.close()}),!1)),function(){window.removeEventListener("popstate",(function(e){f.close()}))}}),[p.show]),p.show&&M(c.a.Fragment,null,M(K,null,M(h.a,{title:"\u8ba2\u5355\u652f\u4ed8",backCall:function(){return f.close(),!0}}),M(I.b,{style:{padding:"20px"}},M("img",{src:Object(C.a)(null===y||void 0===y?void 0:null===(o=y.img)||void 0===o?void 0:null===(r=o[0])||void 0===r?void 0:r.url),alt:""}),M("main",null,null===y||void 0===y?void 0:y.name,null===y||void 0===y?void 0:y.weight,null===y||void 0===y?void 0:y.unit),M("section",null,null===y||void 0===y?void 0:y.remark),M("footer",null,M(P.d,{priceOutTip:Object(x.a)("\u57fa\u51c6\u4ef7"),product:y}),M("span",null,Y(y)*j.selectNum,y.groupAmountUnitString,"/",j.selectNum,Object(x.a)("\u4efd")))),M(N.a,{style:{margin:"16px",width:"calc(100vw - 32px)"},fullWidth:!0,label:Object(x.a)("\u8fd0\u9001\u65b9\u5f0f"),select:!0,value:D.form.pickUpType,onChange:function(e){k.setForm(["pickUpType",e.target.value]),k.setForm(["addressId",D.initAddressId(Object(O.e)(D,{form:{pickUpType:e.target.value}}))])}},M(S.a,{value:_.h.Self},Object(x.a)(Object(_.m)(_.h.Self))),M(S.a,{value:_.h.Delivery},Object(x.a)(Object(_.m)(_.h.Delivery)))),M(E.a,null,M("main",null,M("header",null,"".concat(X.combineAddress)),M("footer",null,"".concat(X.name," ").concat(X.contactInformation))),M("aside",null,M(A.a,{onClick:Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q.openClick();case 2:(t=e.sent)&&k.setForm(["addressId",t]);case 4:case"end":return e.stop()}}),e)})))},M(F.a,null)))),M(E.e,null,M(L.b,{w:20}),Object(x.a)("\u4ed8\u6b3e\u65b9\u5f0f")),M(E.b,null,M("header",null,J.name),M("footer",null,J.number),M("aside",null,M(A.a,{onClick:Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.openClick();case 2:(t=e.sent)&&k.setForm(["paymentMethodCardId",t]);case 4:case"end":return e.stop()}}),e)})))},M(F.a,null)))),M(U.a,null),M(T.a,null),M(E.e,null,M(L.b,{w:20}),Object(x.a)("\u4f7f\u7528\u8fbe\u4eba\u5e01"),M(L.b,{w:16}),M("footer",null,Object(x.a)("\u5f53\u6708\u53ef\u7528\u4f59\u989d"),Object(O.b)(D.user.orderCoinCurrentMonth))),M("div",null,M(L.b,{w:20}),M(N.a,{style:{marginTop:"8px",marginBottom:"24px"},label:Object(x.a)(""),value:D.form.deductCoin,onChange:function(e){k.setForm(["deductCoin",e.target.value])}})),M(E.f,null,M("header",null,Object(x.a)("\u8d2d\u7269\u8f66\u603b\u8ba1")),M("footer",null,Object(O.b)(W))),M(E.f,null,M("header",null,Object(x.a)("\u4efd\u6570\u6298\u6263")),M("footer",null,j.numDiscount)),M(E.f,null,M("header",null,Object(x.a)("\u6210\u56e2\u6298\u4e0a\u6298")),M("footer",null,j.groupDiscount)),Z>0&&M(E.f,null,M("header",null,Object(x.a)("\u8fd0\u8d39")),M("footer",null,Object(O.b)(Z))),M(E.f,null,M("header",null,Object(x.a)("\u8fbe\u4eba\u5e01\u62b5\u6263")),M("footer",null,Object(O.b)(D.form.deductCoin,"-"))),M(E.f,{style:{fontSize:"18px"}},M("header",null,Object(x.a)("\u8ba2\u5355\u603b\u989d")),M("footer",null,Object(O.b)(V))),M(L.b,{h:120}),M(E.c,null,M("header",null,Object(x.a)("\u672c\u6b21\u8ba2\u5355"),M("span",null,Object(x.a)(null===(u=D.userLevelList.find((function(e){var t;return e.code===(null===(t=D.user.userInfo)||void 0===t?void 0:t.userLevel)})))||void 0===u?void 0:u.name))),M("footer",null,Object(x.a)("\u5c06\u83b7\u5f97\u4e0b\u6708\u4f7f\u7528\u8fbe\u4eba\u5e01 "),M("span",null,Object(O.b)(ee))),M("aside",null,M(B.a,{variant:"contained",color:"secondary",onClick:Object(l.a)(i.a.mark((function e(){var t,n,o,r,u,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(Object(O.a)(null===(t=D.user)||void 0===t?void 0:t.orderCoinCurrentMonth)<Object(O.a)(D.form.deductCoin))){e.next=3;break}return Object(G.b)(Object(x.a)("\u8fbe\u4eba\u5e01\u4f59\u989d\u4e0d\u8db3")),e.abrupt("return");case 3:return e.next=5,b.submit({orderInfoItemInput:q(q({},D.form),{},{generateCoin:ee,actuallyPaid:V,transportationCosts:Z,subtotal:W,currentUserLevel:null===(n=D.user.userInfo)||void 0===n?void 0:n.userLevel,rOrderProduct:[{count:j.selectNum,productId:null===y||void 0===y?void 0:y.id,product:y}]})});case 5:if(!(null===(r=e.sent)||void 0===r?void 0:null===(o=r.saveGroupOrder)||void 0===o?void 0:o.id)){e.next=15;break}return Object(G.b)("\u64cd\u4f5c\u6210\u529f \u5c06\u524d\u5f80\u4ed8\u6b3e"),l=Object(O.c)({orderId:null===r||void 0===r?void 0:null===(u=r.saveGroupOrder)||void 0===u?void 0:u.id}),e.next=11,d.replace("/m/pay".concat(l),"/m/pay".concat(l));case 11:k.clearData(),k.getList(),b.clearData(),f.close();case 15:case"end":return e.stop()}}),e)})))},Object(x.a)("\u63d0\u4ea4\u8ba2\u5355"))))))||null},J=c.a.createElement;function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?W(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var V=function(e){var t;return(null!==(t=100-e)&&void 0!==t?t:0)/100},Y=function(e){var t,n;return~~((null!==(t=e.groupAmount)&&void 0!==t?t:0)/(null!==(n=e.groupPrecision)&&void 0!==n?n:1))},$=Object(v.c)("groupProductModel",{product:{},groupQueueList:[],selectNum:0,selectQueueId:"",numDiscount:1,groupDiscount:1,groupDiscountConfig:{},dealDiscountAmountUnit:function(e){var t;return(null!==(t=e.product.priceOut)&&void 0!==t?t:0)*e.numDiscount*e.groupDiscount},dealDiscountAmount:function(e){var t;return(null!==(t=e.product.priceOut)&&void 0!==t?t:0)*e.selectNum*Y(e.product)*e.numDiscount*e.groupDiscount}},{getData:function(){var e=Object(l.a)(i.a.mark((function e(t,n){var o,r,u,l,a,c,d,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.query(b.b.productListByIds,{ids:[t]});case 2:return c=e.sent,e.next=5,n.query(b.b.groupQueueList,{groupQueueItemInput:{product:{id:t}}});case 5:return d=e.sent,e.next=8,n.query(b.c,{data:{type:_.d.GroupPrecision}},{});case 8:s=e.sent,n.setData(Object(O.f)({product:null!==(o=null===c||void 0===c?void 0:null===(r=c.productListByIds)||void 0===r?void 0:r.list[0])&&void 0!==o?o:{},groupQueueList:null!==(u=null===d||void 0===d?void 0:null===(l=d.groupQueueList)||void 0===l?void 0:l.sort((function(e,t){var n,o;return(null!==(n=e.sumFillAmount)&&void 0!==n?n:0)-(null!==(o=t.sumFillAmount)&&void 0!==o?o:0)})))&&void 0!==u?u:[],groupDiscountConfig:null===s||void 0===s?void 0:null===(a=s.getDataConfig)||void 0===a?void 0:a.value}));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),updateSelectNum:function(e,t){var n,o,u,i,l,a,c,d,s,p=t.data.groupDiscountConfig,f=e===t.data.selectNum?0:e,m=e===t.data.selectNum?"":null!==(n=null===(o=Object(r.a)(t.data.groupQueueList).reverse())||void 0===o?void 0:null===(u=o.find((function(n){var o,r,u,i;return(null!==(o=n.sumFillAmount)&&void 0!==o?o:0)+e<=(null!==(r=null===(u=t.data)||void 0===u?void 0:null===(i=u.product)||void 0===i?void 0:i.groupPrecision)&&void 0!==r?r:0)})))||void 0===u?void 0:u.id)&&void 0!==n?n:"";t.setData(Object(O.f)({selectNum:f,selectQueueId:m,groupDiscount:(null!==(i=null===(l=t.data.groupQueueList.find((function(e){return e.id===m})))||void 0===l?void 0:l.sumFillAmount)&&void 0!==i?i:0)+f===t.data.product.groupPrecision?V(p.groupDiscount):1,numDiscount:null!==(a=V(null===p||void 0===p?void 0:null===(c=p[null!==(s=t.data.product.groupPrecision)&&void 0!==s?s:0])||void 0===c?void 0:null===(d=c.discount)||void 0===d?void 0:d[f]))&&void 0!==a?a:1}))},clearData:function(e,t){t.setData(Object(O.f)({selectNum:0,selectQueueId:"",numDiscount:1,groupDiscount:1}))},submit:function(){var e=Object(l.a)(i.a.mark((function e(t,n){var o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.orderInfoItemInput,e.next=3,n.mutate(b.b.saveGroupOrder,{orderInfoItemInput:Z({},o),groupOrderItemInput:{orderGroupAmount:n.data.selectNum},groupQueueItemInput:Z({product:n.data.product},n.data.selectQueueId?{id:n.data.selectQueueId}:{})});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}),ee=y.a.div.withConfig({displayName:"id__PriceRed",componentId:"ghx5mg-0"})(["background:",";color:white;display:grid;grid-template-columns:1fr 120px;grid-template-rows:repeat(2,30px);align-items:center;> main{grid-area:1/1/3/2;padding-left:20px;> span{margin-left:16px;}}"],w.a.red),te=y.a.div.withConfig({displayName:"id__Name",componentId:"ghx5mg-1"})(["padding:16px 20px;display:flex;align-items:flex-end;> main{font-size:22px;margin-right:8px;flex-shrink:0;}> section{> span{padding:0 4px;background:",";border-radius:4px;position:relative;bottom:-4px;margin-left:8px;display:inline-flex;align-items:center;}}"],D.a[700]),ne=function(){return J(s.a,{fontSize:"small",style:{color:"#FDD334"}})},oe=y.a.header.withConfig({displayName:"id__Title",componentId:"ghx5mg-2"})(["font-size:20px;"]),re=y.a.div.withConfig({displayName:"id__GroupQueueBox",componentId:"ghx5mg-3"})(["padding:16px;"]),ue=y.a.div.withConfig({displayName:"id__SmartMatch",componentId:"ghx5mg-4"})(["padding:16px 16px 90px;> section{margin-top:8px;display:flex;align-items:center;}> main{> svg{font-size:3.0rem;}}"]),ie=y.a.div.withConfig({displayName:"id__Price",componentId:"ghx5mg-5"})(["margin-top:8px;display:flex;justify-content:space-between;align-items:center;> main{font-weight:bold;}> main,section{> *{text-align:center;}}"]),le=y.a.div.withConfig({displayName:"id__Submit",componentId:"ghx5mg-6"})(["position:fixed;height:60px;bottom:0;width:100vw;background:white;border-top:1px solid ",";display:flex;align-items:center;justify-content:space-between;box-shadow:",";> aside{padding-left:16px;color:",";}"],w.a.red,w.a.shadow[1],w.a.red),ae=y.a.div.withConfig({displayName:"id__GroupQueueListBox",componentId:"ghx5mg-7"})(["margin-top:16px;border-radius:8px;background:",";display:flex;justify-content:space-between;align-items:center;padding:0 8px;"],(function(e){return e.select?"linear-gradient(to right, ".concat(w.a.red,", #FC7361)"):D.a[200]}));t.default=function(){var e,t,n,o,u=null!==(e=null===(t=Object(m.useRouter)().query)||void 0===t?void 0:t.id)&&void 0!==e?e:"",i=Object(g.b)($),l=i.actions,c=i.state;Object(a.useEffect)((function(){l.getData(u)}),[u]);var d=Object(g.b)(H).actions,p=c.product;return J("div",null,J(h.a,{title:"\u4ea7\u54c1\u8be6\u60c5"}),J(j.a,{height:"240px",dataList:null===p||void 0===p?void 0:null===(n=p.img)||void 0===n?void 0:n.map((function(e){return Z(Z({},e),{},{imgUrl:null===e||void 0===e?void 0:e.url})}))}),J(ee,null,J("main",null,Object(x.a)("\u57fa\u51c6\u4ef7\u683c"),J("span",null,Object(O.b)(p.priceOut),"/",p.packingUnitString)),J("aside",null,Object(x.a)("\u5df2\u6210\u56e2"),c.groupQueueList.filter((function(e){return e.sumFillAmount===(null===p||void 0===p?void 0:p.groupPrecision)})).length,Object(x.a)("\u5355")),J("aside",null,Object(x.a)("\u62fc\u56e2\u4e2d"),c.groupQueueList.filter((function(e){var t,n;return(null!==(t=e.sumFillAmount)&&void 0!==t?t:0)<(null!==(n=null===p||void 0===p?void 0:p.groupPrecision)&&void 0!==n?n:0)})).length,Object(x.a)("\u5355"))),J(te,null,J("main",null,p.name),J("section",null,p.groupRemark,"/",p.groupAmount,p.groupAmountUnitString," ","\u6bcf\u4e00\u4efd".concat(Y(p)).concat(p.groupAmountUnitString),J("br",null),Object(x.a)("\u5206\u56e2\u7cbe\u5ea6"),J("span",null,Object(r.a)(Array(p.groupPrecision)).map((function(e,t){return t})).map((function(e){return J(ne,{key:e})}))))),J(re,null,J(oe,null,Object(x.a)("\u62fc\u56e2\u4e2d")),c.groupQueueList.filter((function(e){var t,n;return(null!==(t=e.sumFillAmount)&&void 0!==t?t:0)<(null!==(n=null===p||void 0===p?void 0:p.groupPrecision)&&void 0!==n?n:0)})).map((function(e){var t,n=e.id===c.selectQueueId;return J(ae,{select:n,key:"GroupQueueListBox".concat(e.id)},J("aside",null,Object(r.a)(Array(p.groupPrecision)).map((function(e,t){return t})).map((function(t){var o;return t+1>(null!==(o=e.sumFillAmount)&&void 0!==o?o:0)+(n?c.selectNum:0)?J(f.a,{key:"clickStar".concat(t),fontSize:"large",onClick:function(){return l.updateSelectNum(t+1)},style:{color:n?"#fff":"#000"}}):J(s.a,{key:"clickStar".concat(t),style:{color:"#FDD334"},fontSize:"large",onClick:function(){return l.updateSelectNum(t+1)}})}))),J("footer",null,Object(x.a)((null!==(t=e.sumFillAmount)&&void 0!==t?t:0)+(n?c.selectNum:0)===p.groupPrecision?"\u6210\u56e2\u5566":"\u672a\u6210\u56e2")))}))),J(ue,null,J("header",null,J(oe,null,Object(x.a)("\u667a\u80fd\u5339\u914d"))),J("section",null,Object(x.a)("\u8bf7\u70b9\u51fb"),J(f.a,null),Object(x.a)("\u786e\u5b9a\u60a8\u9700\u8981\u7684\u4efd\u6570")),J("main",null,Object(r.a)(Array(p.groupPrecision)).map((function(e,t){return t})).map((function(e){return e+1>c.selectNum?J(f.a,{key:"clickStar".concat(e),fontSize:"large",onClick:function(){return l.updateSelectNum(e+1)}}):J(s.a,{key:"clickStar".concat(e),style:{color:"#FDD334"},fontSize:"large",onClick:function(){return l.updateSelectNum(e+1)}})}))),J(ie,null,J("main",null,J("header",null,Object(O.b)(c.dealDiscountAmountUnit(c))),J("footer",null,Object(x.a)("\u6298\u540e\u4ef7\u683c"))),J("div",null,"="),J("section",null,J("header",null,Object(O.b)(null!==(o=p.priceOut)&&void 0!==o?o:0)),J("footer",null,Object(x.a)("\u57fa\u51c6\u4ef7\u683c"))),J("div",null,"x"),J("section",null,J("header",null,c.numDiscount),J("footer",null,Object(x.a)("\u4efd\u6570\u6298\u6263"))),J("div",null,"x"),J("section",null,J("header",null,c.groupDiscount),J("footer",null,Object(x.a)("\u6210\u56e2\u6298\u4e0a\u6298"))))),J(le,null,J("aside",null,Object(x.a)("\u9009\u62e9\u4e86"),c.selectNum,Object(x.a)("\u4efd")),J(k.a,{disabled:0===c.selectNum,style:{height:"100%",padding:"0 32px",borderRadius:"0",fontSize:"18px"},color:"secondary",variant:"contained",onClick:function(){d.open()}},Object(x.a)("\u53bb\u7ed3\u7b97"))),J(X,null))}},"w6D/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/m/groupProduct/[id]",function(){return n("K6Ew")}])}},[["w6D/",1,0,5,2,3,4,6,7,8,9,11]]]);