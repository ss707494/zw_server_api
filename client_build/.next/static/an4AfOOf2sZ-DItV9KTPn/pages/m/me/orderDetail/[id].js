(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"6tsm":function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/m/me/orderDetail/[id]",function(){return i("hc2K")}])},cWmw:function(e,n,i){"use strict";i.d(n,"b",(function(){return y})),i.d(n,"a",(function(){return A}));var t=i("o0o1"),l=i.n(t),d=i("HaE+"),o=i("q1tI"),r=i.n(o),a=i("B42p"),u=i("Z3gB"),c=i("vOnD"),s=i("+/yG"),p=i("i7FU"),v=i("cBzo"),m=i("U81q"),f=i("nOHt"),b=i("+vfP"),g=i("4Rmy"),x=i("ZtJr"),O=i("LXXt"),h=i("Oj7+"),w=r.a.createElement,y=Object(s.c)("orderDetail",{orderInfo:{},selfAddress:[]},{getDetail:function(){var e=Object(d.a)(l.a.mark((function e(n,i){var t,d,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.query(p.b.orderDetail,{id:n});case 2:o=e.sent,i.setData(Object(v.f)({orderInfo:(null===o||void 0===o?void 0:o.orderDetail)||{},selfAddress:(null===o||void 0===o?void 0:null===(t=o.selfAddress)||void 0===t?void 0:null===(d=t.value)||void 0===d?void 0:d.list)||[]}));case 4:case"end":return e.stop()}}),e)})));return function(n,i){return e.apply(this,arguments)}}(),updateOrder:function(){var e=Object(d.a)(l.a.mark((function e(n,i){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.mutate(p.b.updateOrder,{orderInfoItemInput:n});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n,i){return e.apply(this,arguments)}}()}),j=c.a.div.withConfig({displayName:"orderDetail__Box",componentId:"sc-11dm5lg-0"})(["padding:0 20px;"]),_=c.a.div.withConfig({displayName:"orderDetail__Top",componentId:"sc-11dm5lg-1"})(["margin-top:10px;font-size:18px;display:flex;> aside{margin-left:20px;color:",";}"],x.a.red),I=c.a.div.withConfig({displayName:"orderDetail__InfoLabel",componentId:"sc-11dm5lg-2"})(["display:flex;margin-top:16px;> aside{color:",";width:80px;}"],O.a[600]),D=c.a.div.withConfig({displayName:"orderDetail__GreyPart",componentId:"sc-11dm5lg-3"})(["margin-top:12px;position:relative;left:-20px;width:100vw;height:12px;background:",";"],O.a[200]),C=c.a.div.withConfig({displayName:"orderDetail__ProductBox",componentId:"sc-11dm5lg-4"})(["display:grid;padding-top:4vw;margin-bottom:10px;grid-template-columns:min-content 1fr 30vw;> img{grid-area:1/1/4/2;width:20vw;height:20vw;margin-right:14px;}> section{grid-area:1/2/2/4;font-size:20px;}> main{padding:10px 0;grid-area:2/2/3/4;font-size:14px;color:",";}> footer{display:flex;> aside{text-decoration:line-through;}> span{margin-left:5px;color:",";font-size:17px;}}> aside{> button{border-radius:10px;padding:2px 14px;}}"],O.a[500],x.a.red),P=c.a.div.withConfig({displayName:"orderDetail__Sum",componentId:"sc-11dm5lg-5"})(["display:flex;justify-content:space-between;margin-bottom:12px;"]),A=function(){var e,n,i,t,l,d,c,s,p=Object(f.useRouter)(),x=Object(m.b)(y),O=x.state,A=x.actions,k=O.orderInfo;return Object(o.useEffect)((function(){var e,n;p.query.id&&!(null===(e=O.orderInfo)||void 0===e?void 0:e.id)&&A.getDetail("".concat(null===(n=p.query)||void 0===n?void 0:n.id))}),[p.query.id,O.orderInfo]),w("div",null,w(a.a,{title:"\u8ba2\u5355\u8be6\u60c5"}),(null===k||void 0===k?void 0:k.id)?w(u.a,{boxHeight:"calc(100vh - 60px)"},w(j,null,w(_,null,w("section",null,Object(b.a)(Object(v.d)(k.createTime))),w("aside",null,Object(g.n)(null===k||void 0===k?void 0:k.state))),w(I,null,w("aside",null,Object(b.a)("\u8ba2\u5355\u7f16\u53f7")," :"),w("section",null,k.number)),w(I,null,w("aside",null,Object(b.a)("\u9001\u8d27\u5730\u5740")," :"),w("section",null,k.pickUpType===g.h.Self&&function(e){return w(r.a.Fragment,null,w("header",null,e.streetAddress),w("footer",null,e.city," ",e.province," ",e.zip))}(O.selfAddress.find((function(e){return e.id===k.selfAddressId})))||w(r.a.Fragment,null,w("header",null,null===(e=k.userAddress)||void 0===e?void 0:e.address),w("footer",null,null===(n=k.userAddress)||void 0===n?void 0:n.city," ",null===(i=k.userAddress)||void 0===i?void 0:i.province," ",null===(t=k.userAddress)||void 0===t?void 0:t.zip)))),w(I,null,w("aside",null,Object(b.a)("\u652f\u4ed8\u65b9\u5f0f")," :"),w("section",null,w("header",null,null===k||void 0===k?void 0:null===(l=k.userPayCard)||void 0===l?void 0:l.code),w("main",null,Object(b.a)("\u8fc7\u671f\u65e5"),Object(v.d)(null===k||void 0===k?void 0:null===(d=k.userPayCard)||void 0===d?void 0:d.expirationTime,"MM/yy")),w("footer",null,null===k||void 0===k?void 0:null===(c=k.userPayCard)||void 0===c?void 0:c.userName))),w(D,null),null===(s=k.rOrderProduct)||void 0===s?void 0:s.map((function(e){var n,i,t,l,d,o,r;return w(C,{key:"ProductBox_".concat(e.id)},w("img",{src:Object(h.a)(null===(n=e.product)||void 0===n?void 0:null===(i=n.img)||void 0===i?void 0:null===(t=i[0])||void 0===t?void 0:t.url),alt:""}),w("section",null,null===(l=e.product)||void 0===l?void 0:l.name),w("main",null,null===(d=e.product)||void 0===d?void 0:d.remark),w("footer",null,w("aside",null,Object(v.b)(null===(o=e.product)||void 0===o?void 0:o.priceMarket)),w("span",null,Object(v.b)(null===(r=e.product)||void 0===r?void 0:r.priceOut))),w("aside",null))})),w("div",{style:{height:"26px",width:"100%"}}),w(P,null,w("aside",null,Object(b.a)("\u5c0f\u8ba1")),w("main",null,Object(v.b)(k.subtotal))),w(P,null,w("aside",null,Object(b.a)("\u4f18\u60e0\u5238\u6298\u6263")),w("main",null,Object(v.b)(0,"-"))),w(P,null,w("aside",null,Object(b.a)("\u8fd0\u8d39")),w("main",null,Object(v.b)(k.transportationCosts))),w(P,null,w("aside",null,Object(b.a)("\u8fbe\u4eba\u5e01\u62b5\u6263")),w("main",null,Object(v.b)(k.deductCoin,"-"))),w(P,null,w("aside",null,Object(b.a)("\u5b9e\u9645\u652f\u4ed8")),w("main",null,Object(v.b)(k.actuallyPaid))),w(P,null,w("aside",null,Object(b.a)("\u83b7\u5f97\u8fbe\u4eba\u5e01")),w("main",null,Object(v.b)(k.generateCoin))),w("div",{style:{height:"96px",width:"100%"}}))):w("div",null))}},hc2K:function(e,n,i){"use strict";i.r(n);var t=i("cWmw");n.default=t.a}},[["6tsm",1,0,5,2,3,4,6,7,8,9]]]);