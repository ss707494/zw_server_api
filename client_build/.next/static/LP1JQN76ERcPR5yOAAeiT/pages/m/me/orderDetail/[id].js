(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{"6tsm":function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/m/me/orderDetail/[id]",function(){return i("hc2K")}])},cWmw:function(e,n,i){"use strict";i.d(n,"b",(function(){return w})),i.d(n,"a",(function(){return k}));var l=i("o0o1"),t=i.n(l),d=i("HaE+"),o=i("q1tI"),r=i.n(o),a=i("B42p"),u=i("Z3gB"),s=i("vOnD"),c=i("+/yG"),v=i("i7FU"),p=i("cBzo"),m=i("U81q"),f=i("nOHt"),b=i("+vfP"),g=i("4Rmy"),O=i("ZtJr"),h=i("LXXt"),x=i("Oj7+"),y=i("cW92"),j=r.a.createElement,w=Object(c.c)("orderDetail",{orderInfo:{},selfAddress:[]},{getDetail:function(){var e=Object(d.a)(t.a.mark((function e(n,i){var l,d,o;return t.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.query(v.b.orderDetail,{id:n});case 2:o=e.sent,i.setData(Object(p.f)({orderInfo:(null===o||void 0===o?void 0:o.orderDetail)||{},selfAddress:(null===o||void 0===o?void 0:null===(l=o.selfAddress)||void 0===l?void 0:null===(d=l.value)||void 0===d?void 0:d.list)||[]}));case 4:case"end":return e.stop()}}),e)})));return function(n,i){return e.apply(this,arguments)}}(),updateOrder:function(){var e=Object(d.a)(t.a.mark((function e(n,i){return t.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.mutate(v.b.updateOrder,{orderInfoItemInput:n});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n,i){return e.apply(this,arguments)}}()}),_=s.a.div.withConfig({displayName:"orderDetail__Box",componentId:"sc-11dm5lg-0"})(["padding:0 20px;"]),I=s.a.div.withConfig({displayName:"orderDetail__Top",componentId:"sc-11dm5lg-1"})(["margin-top:10px;font-size:18px;display:flex;> aside{margin-left:20px;color:",";}"],O.a.red),C=s.a.div.withConfig({displayName:"orderDetail__InfoLabel",componentId:"sc-11dm5lg-2"})(["display:flex;margin-top:16px;> aside{color:",";width:80px;}"],h.a[600]),D=s.a.div.withConfig({displayName:"orderDetail__GreyPart",componentId:"sc-11dm5lg-3"})(["margin-top:12px;position:relative;left:-20px;width:100vw;height:12px;background:",";"],h.a[200]),P=s.a.div.withConfig({displayName:"orderDetail__ProductBox",componentId:"sc-11dm5lg-4"})(["display:grid;padding-top:4vw;margin-bottom:10px;grid-template-columns:min-content 1fr 30vw;> img{grid-area:1/1/4/2;width:20vw;height:20vw;margin-right:14px;}> section{grid-area:1/2/2/4;font-size:20px;}> main{padding:10px 0;grid-area:2/2/3/4;font-size:14px;color:",";}> footer{display:flex;> aside{text-decoration:line-through;}> span{margin-left:5px;color:",";font-size:17px;}}> aside{> button{border-radius:10px;padding:2px 14px;}}"],h.a[500],O.a.red),A=s.a.div.withConfig({displayName:"orderDetail__Sum",componentId:"sc-11dm5lg-5"})(["display:flex;justify-content:space-between;margin-bottom:12px;"]),k=function(){var e,n,i,l,t,d,s,c,v,O,h,k,N,z=Object(f.useRouter)(),q=Object(m.b)(w),B=q.state,T=q.actions,E=B.orderInfo;return Object(o.useEffect)((function(){var e,n;z.query.id&&!(null===(e=B.orderInfo)||void 0===e?void 0:e.id)&&T.getDetail("".concat(null===(n=z.query)||void 0===n?void 0:n.id))}),[z.query.id,B.orderInfo]),j("div",null,j(a.a,{title:"\u8ba2\u5355\u8be6\u60c5"}),(null===E||void 0===E?void 0:E.id)?j(u.a,{boxHeight:"calc(100vh - 60px)"},j(_,null,j(y.b,{h:16}),j(I,null,j("section",null,Object(p.d)(E.createTime,"YYYY/MM/dd")),j("aside",null,Object(g.o)(null===E||void 0===E?void 0:E.state))),j(C,null,j("aside",null,Object(b.a)("\u8ba2\u5355\u7f16\u53f7")," :"),j("section",null,E.number)),j(C,null,j("aside",null,Object(b.a)("\u9001\u8d27\u5730\u5740")," :"),j("section",null,E.pickUpType===g.i.Self&&function(e){return j(r.a.Fragment,null,j("header",null,e.streetAddress),j("footer",null,e.city," ",e.province," ",e.zip))}(B.selfAddress.find((function(e){return e.id===E.selfAddressId})))||j(r.a.Fragment,null,j("main",null,null===(e=E.userAddress)||void 0===e?void 0:e.name),j("header",null,null===(n=E.userAddress)||void 0===n?void 0:n.address),j("footer",null,null===(i=E.userAddress)||void 0===i?void 0:i.city," ",null===(l=E.userAddress)||void 0===l?void 0:l.province," ",null===(t=E.userAddress)||void 0===t?void 0:t.zip)))),j(C,null,j("aside",null,Object(b.a)("\u652f\u4ed8\u65b9\u5f0f")," :"),j("section",null,j("header",null,null===E||void 0===E?void 0:null===(d=E.userPayCard)||void 0===d?void 0:d.code),j("main",null,Object(b.a)("\u8fc7\u671f\u65e5")," ",Object(p.d)(null===E||void 0===E?void 0:null===(s=E.userPayCard)||void 0===s?void 0:s.expirationTime,"MM/yy")),j("footer",null,Object(b.a)("\u5361\u53f7\u540e\u56db\u4f4d")," ",null===(c=E.userPayCard)||void 0===c?void 0:null===(v=c.number)||void 0===v?void 0:v.slice((null===(O=E.userPayCard)||void 0===O?void 0:null===(h=O.number)||void 0===h?void 0:h.length)-4)),j("footer",null,Object(b.a)("\u6301\u5361\u4eba")," ",null===E||void 0===E?void 0:null===(k=E.userPayCard)||void 0===k?void 0:k.userName))),j(D,null),null===(N=E.rOrderProduct)||void 0===N?void 0:N.map((function(e){var n,i,l,t,d,o,r;return j(P,{key:"ProductBox_".concat(e.id)},j("img",{src:Object(x.a)(null===(n=e.product)||void 0===n?void 0:null===(i=n.img)||void 0===i?void 0:null===(l=i[0])||void 0===l?void 0:l.url),alt:""}),j("section",null,null===(t=e.product)||void 0===t?void 0:t.name),j("main",null,null===(d=e.product)||void 0===d?void 0:d.remark),j("footer",null,j("aside",null,Object(p.b)(null===(o=e.product)||void 0===o?void 0:o.priceMarket)),j("span",null,Object(p.b)(null===(r=e.product)||void 0===r?void 0:r.priceOut))),j("aside",null))})),j("div",{style:{height:"26px",width:"100%"}}),j(A,null,j("aside",null,Object(b.a)("\u5c0f\u8ba1")),j("main",null,Object(p.b)(E.subtotal))),j(A,null,j("aside",null,Object(b.a)("\u4f18\u60e0\u5238\u6298\u6263")),j("main",null,Object(p.b)(0,"-"))),j(A,null,j("aside",null,Object(b.a)("\u8fd0\u8d39")),j("main",null,Object(p.b)(E.transportationCosts))),j(A,null,j("aside",null,Object(b.a)("\u8fbe\u4eba\u5e01\u62b5\u6263")),j("main",null,Object(p.b)(E.deductCoin,"-"))),j(A,null,j("aside",null,Object(b.a)("\u5b9e\u9645\u652f\u4ed8")),j("main",null,Object(p.b)(E.actuallyPaid))),j(A,null,j("aside",null,Object(b.a)("\u83b7\u5f97\u8fbe\u4eba\u5e01")),j("main",null,Object(p.b)(E.generateCoin))),j("div",{style:{height:"96px",width:"100%"}}))):j("div",null))}},hc2K:function(e,n,i){"use strict";i.r(n);var l=i("cWmw");n.default=l.a}},[["6tsm",1,0,5,2,3,4,6,7,8,9,10,11]]]);