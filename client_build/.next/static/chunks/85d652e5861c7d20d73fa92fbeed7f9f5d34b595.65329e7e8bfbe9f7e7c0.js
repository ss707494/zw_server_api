(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{"1gZt":function(t,e,n){"use strict";n.d(e,"b",(function(){return M})),n.d(e,"a",(function(){return A}));var i=n("o0o1"),o=n.n(i),a=n("HaE+"),c=n("q1tI"),r=n.n(c),l=n("vOnD"),d=n("+vfP"),s=n("cW92"),u=n("ZtJr"),p=n("PpHw"),m=n("U81q"),f=n("VD++"),b=n("bqsI"),h=n("8C4M"),g=n.n(h),v=n("SvrD"),w=n("nOHt"),y=n("+/yG"),x=n("cBzo"),I=r.a.createElement,C=Object(y.c)("CategorySelectionModel",{isShow:!1},{switchIsShow:function(t,e){return e.setData(Object(x.g)({isShow:t}))}}),_=l.b.div.withConfig({displayName:"categorySelection__Box",componentId:"zrawnm-0"})(["display:grid;grid-template-columns:repeat(3,1fr);z-index:4;"]),j=l.b.div.withConfig({displayName:"categorySelection__Line",componentId:"zrawnm-1"})(["display:grid;grid-auto-rows:40px;font-size:18px;"]),O=Object(l.b)(f.a).withConfig({displayName:"categorySelection__LinkButton",componentId:"zrawnm-2"})(["&&&{justify-content:start;> main{flex-grow:1;text-align:left;}","}"],(function(t){return t.isact&&"\n      background: #FEEBEA;\n      color: ".concat(u.b.red,";\n    ")})),k=l.b.div.withConfig({displayName:"categorySelection__Mask",componentId:"zrawnm-3"})(["position:fixed;top:0;left:0;right:0;bottom:0;"]),S=n("AUy9"),N=n.n(S),T=n("Z3vd"),B=r.a.createElement,M=Object(y.c)("HeaderTabModel",{isCategory:!1},{switchIsCategory:function(){var t=Object(a.a)(o.a.mark((function t(e,n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.setData(Object(x.g)({isCategory:e}));case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}),D=l.b.div.withConfig({displayName:"headerTab__Box",componentId:"sc-4pqp2k-0"})(["display:flex;"]),F=Object(l.b)((function(t){var e,n,i,l=t.className,d=Object(w.useRouter)(),u=Object(m.b)(p.b),f=u.actions,h=u.state,y=Object(m.b)(v.b),x=y.actions,S=y.state,N=Object(m.b)(v.b,"CategoryPageModel3"),T=N.actions,B=N.state,M=Object(m.b)(v.c),D=M.actions,F=(M.state,Object(m.b)(C)),E=F.actions,z=F.state;return Object(c.useEffect)((function(){z.isShow&&f.getList()}),[z.isShow]),I(r.a.Fragment,null,z.isShow&&I(k,{onClick:function(){return E.switchIsShow(!1)}}),I(b.a,{in:z.isShow},I(_,{className:l},I(j,null,null===h||void 0===h||null===(e=h.listData)||void 0===e?void 0:e.map((function(t){return I(O,{key:"stateHomeCategorySelectionModel?.listData".concat(t.id),onClick:function(){f.changeActId(t.id),x.getProductList({categoryItemInput:{id:t.id},productItemInput:{isGroup:0}}),D.getCategory({id:t.id})},isact:t.id===h.actId?1:0},I(s.b,{w:16}),I("main",null,t.name),I(g.a,null),I(s.b,{w:8}))}))),I(j,null,null===S||void 0===S||null===(n=S.categoryList)||void 0===n?void 0:n.map((function(t){return I(O,{key:"stateCategoryPageModel?.categoryList".concat(t.id),onClick:function(){D.getCategory({id:t.id}),x.changeActCatId(t.id),T.getProductList({categoryItemInput:{id:t.id},productItemInput:{isGroup:0}})},isact:S.actCatId===t.id?1:0},I(s.b,{w:16}),I("main",null,t.name),I(s.b,{w:8}))}))),D.calcCatLevel()>=2&&I(j,null,null===B||void 0===B||null===(i=B.categoryList)||void 0===i?void 0:i.map((function(t){return I(O,{key:"stateCategoryPageModel3?.categoryList".concat(t.id),onClick:Object(a.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E.switchIsShow(!1),e.next=3,d.push("/pc/category/[id]","/pc/category/".concat(t.id));case 3:case"end":return e.stop()}}),e)}))),isact:B.actCatId===t.id?1:0},I(s.b,{w:16}),I("main",null,t.name),I(s.b,{w:8}))}))))))||I(r.a.Fragment,null)})).withConfig({displayName:"headerTab__CategorySelectionBox",componentId:"sc-4pqp2k-1"})([""]),E=l.b.div.withConfig({displayName:"headerTab__CategoryBox",componentId:"sc-4pqp2k-2"})(["position:relative;&&&{",";.MuiButton-label{",";color:",";",";}}","{position:absolute;background:white;top:40px;width:800px;height:25vw;z-index:9;box-shadow:",";}"],u.b.fontType.xxl,u.b.fontType.l,u.b.black,(function(t){return t.isAct?"\n        color: ".concat(u.b.red,";\n      "):""}),F,u.b.shadow[1]),z=l.b.a.withConfig({displayName:"headerTab__PointBox",componentId:"sc-4pqp2k-3"})(["",";color:",";text-decoration:none;height:43px;display:grid;align-items:center;"],u.b.fontType.l,u.b.black),A=function(){var t=Object(m.b)(M).state,e=Object(m.b)(C),n=e.actions,i=e.state;return B(D,null,B(E,{isAct:t.isCategory||i.isShow?1:0},B(T.a,{onClick:function(){n.switchIsShow(!0)}},Object(d.a)("\u5206\u7c7b\u9009\u62e9"),B(N.a,{style:i.isShow?{transform:"rotate(180deg)"}:{}})),B(F,null)),B(s.b,{w:60}),[["\u9650\u65f6\u62a2\u8d2d","LimitTime"],["\u70ed\u95e8\u6392\u884c","SalesRank"],["\u4e3b\u9898\u7504\u9009","ThemeSelection"]].map((function(t){return B(r.a.Fragment,{key:"PointBox".concat(t[0])},B(z,{href:"/pc/home#".concat(t[1])},Object(d.a)(t[0])),B(s.b,{w:60}))})))}},"469l":function(t,e,n){"use strict";var i=n("wx14"),o=n("Ff2n"),a=n("q1tI"),c=(n("17x9"),n("iuhU")),r=n("H2TA"),l=n("5AJ6"),d=Object(l.a)(a.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var s=a.forwardRef((function(t,e){var n=t.alt,r=t.children,l=t.classes,s=t.className,u=t.component,p=void 0===u?"div":u,m=t.imgProps,f=t.sizes,b=t.src,h=t.srcSet,g=t.variant,v=void 0===g?"circle":g,w=Object(o.a)(t,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),y=null,x=function(t){var e=t.src,n=t.srcSet,i=a.useState(!1),o=i[0],c=i[1];return a.useEffect((function(){if(e||n){c(!1);var t=!0,i=new Image;return i.src=e,i.srcSet=n,i.onload=function(){t&&c("loaded")},i.onerror=function(){t&&c("error")},function(){t=!1}}}),[e,n]),o}({src:b,srcSet:h}),I=b||h,C=I&&"error"!==x;return y=C?a.createElement("img",Object(i.a)({alt:n,src:b,srcSet:h,sizes:f,className:l.img},m)):null!=r?r:I&&n?n[0]:a.createElement(d,{className:l.fallback}),a.createElement(p,Object(i.a)({className:Object(c.a)(l.root,l.system,l[v],s,!C&&l.colorDefault),ref:e},w),y)}));e.a=Object(r.a)((function(t){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:t.palette.background.default,backgroundColor:"light"===t.palette.type?t.palette.grey[400]:t.palette.grey[600]},circle:{},rounded:{borderRadius:t.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(s)},"51Ja":function(t,e,n){"use strict";n.d(e,"a",(function(){return O}));var i=n("wx14"),o=n("q1tI"),a=n.n(o),c=n("vOnD"),r=n("+bXu"),l=n("VD++"),d=n("r9w1"),s=n("7SZd"),u=n("Z3vd"),p=n("469l"),m=n("cW92"),f=n("+vfP"),b=n("cae+"),h=n("nOHt"),g=n("M5o2"),v=n("ZtJr"),w=a.a.createElement,y=c.b.div.withConfig({displayName:"topAction__Box",componentId:"sc-1c0cq86-0"})(["display:flex;margin:25px 0 21px;"]),x=c.b.div.withConfig({displayName:"topAction__Title",componentId:"sc-1c0cq86-1"})(["cursor:pointer;> img{width:120px;height:49px;}"]),I=c.b.div.withConfig({displayName:"topAction__SearchTip",componentId:"sc-1c0cq86-2"})(["",";color:#9B9B9B;display:grid;justify-content:start;grid-auto-flow:column;grid-column-gap:20px;"],v.b.fontType.s),C=c.b.div.withConfig({displayName:"topAction__SearchInput",componentId:"sc-1c0cq86-3"})(["&&&{width:600px;.MuiFormControl-root{margin:0;}.MuiInputBase-root{height:45px;padding-right:0;background:#F5F5F5;border-color:transparent;border-radius:10px;}.MuiInputAdornment-positionEnd{margin-left:0;}.MuiButtonBase-root{height:45px;width:95px;box-shadow:none;border-radius:0 10px 10px 0;}.MuiInputBase-input{}.MuiOutlinedInput-notchedOutline{display:none;}.MuiInput-underline{:after,:before{display:none;}}}"]),_=Object(c.b)(l.a).withConfig({displayName:"topAction__AvatarBox",componentId:"sc-1c0cq86-4"})(["display:flex;align-items:center;height:45px;> h2{",";font-weight:600;color:#2C3345;}"],v.b.fontType.n),j=c.b.div.withConfig({displayName:"topAction__ShopCartBox",componentId:"sc-1c0cq86-5"})(["display:flex;align-items:center;justify-content:center;width:79px;height:45px;background:#F5F5F5;border-radius:8px;"]),O=function(){var t=Object(h.useRouter)();return Object(g.a)(),w(y,null,w(x,{onClick:function(){t.push("/pc/home")}},w("img",{src:"/img/home/logo_pc.png",alt:""})),w(m.b,{w:234}),w(C,null,w(r.a,{size:"small",freeSolo:!0,disableClearable:!0,options:[],value:"",onInputChange:function(){},placeholder:Object(f.a)("\u641c\u7d22\u5168\u7ad9\u9c9c\u7f8e\u98df\u54c1"),renderInput:function(t){return w(d.a,Object(i.a)({},t,{margin:"normal",variant:"outlined",InputProps:{endAdornment:w(s.a,{position:"end"},w(u.a,{variant:"contained",color:"secondary",onClick:function(){}},"\u641c\u7d22"))}}))}}),w(m.b,{h:10}),w(I,null,["\u4e50\u4e8b\u85af\u7247","\u597d\u65f6\u5de7\u514b\u529b","\u601d\u5ff5\u6c34\u997a","\u65e5\u6e05\u676f\u9762"].map((function(t){return w("section",{key:"SearchTip>".concat(t)},t)})))),w(m.b,{w:26}),w(_,{onClick:function(){t.push("/pc/me/myInfo")}},w(p.a,null),w(m.b,{w:8}),w("h2",null,Object(f.a)("\u6211\u7684\u8d26\u6237"))),w(m.b,{w:28}),w(j,null,w(b.a,null)))}},"8C4M":function(t,e,n){"use strict";var i=n("TqRt");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("q1tI")),a=(0,i(n("8/g6")).default)(o.default.createElement("path",{d:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}),"KeyboardArrowRight");e.default=a},AUy9:function(t,e,n){"use strict";var i=n("TqRt");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("q1tI")),a=(0,i(n("8/g6")).default)(o.default.createElement("path",{d:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"}),"KeyboardArrowDown");e.default=a},DrI1:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("q1tI"),o=n.n(i),a=n("vo3K"),c=o.a.createElement,r=function(t){var e=t.children;return c("div",null,e,c(a.a,null))}},H0n8:function(t,e,n){"use strict";n.d(e,"a",(function(){return S}));var i=n("o0o1"),o=n.n(i),a=n("HaE+"),c=n("vOnD"),r=n("q1tI"),l=n.n(r),d=n("Oj7+"),s=n("cBzo"),u=n("ZtJr"),p=n("cW92"),m=n("30+C"),f=n("Z3vd"),b=n("LYUY"),h=Object(b.a)(l.a.createElement("path",{d:"M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"}),"ShoppingCart"),g=n("U81q"),v=n("vo3K"),w=n("OO/1"),y=n("oxxF"),x=n("We6d"),I=l.a.createElement,C=Object(c.b)(m.a).withConfig({displayName:"productItemBox__Box",componentId:"sc-1i837b0-0"})(["display:flex;flex-direction:column;width:",";padding:14px 20px 16px;&&&{box-shadow:none;}"],(function(t){var e;return"".concat(null!==(e=t.width)&&void 0!==e?e:322,"px")})),_=c.b.div.withConfig({displayName:"productItemBox__ImgBox",componentId:"sc-1i837b0-1"})(["align-self:center;> img{width:",";height:",";}"],(function(t){var e;return"".concat((null!==(e=t.width)&&void 0!==e?e:260)-40,"px")}),(function(t){var e;return"".concat(4*((null!==(e=t.width)&&void 0!==e?e:260)-40)/3,"px")})),j=c.b.div.withConfig({displayName:"productItemBox__Price",componentId:"sc-1i837b0-2"})(["display:flex;align-items:center;> aside{",";font-size:",";color:",";}> main{font-size:",";font-weight:400;text-decoration:line-through;color:",";}"],u.b.fontType.xl,(function(t){var e;return"".concat((null!==(e=t.width)&&void 0!==e?e:260)/10-2,"px")}),u.b.red,(function(t){var e;return"".concat((null!==(e=t.width)&&void 0!==e?e:260)/10-8,"px")}),u.b.grey),O=c.b.div.withConfig({displayName:"productItemBox__Footer",componentId:"sc-1i837b0-3"})(["display:flex;&&&{.MuiButton-root{width:",";min-width:",";height:",";padding:0;}.MuiSvgIcon-root{font-size:",";}}"],(function(t){var e;return"".concat(.17*(null!==(e=t.width)&&void 0!==e?e:260),"px")}),(function(t){var e;return"".concat(.17*(null!==(e=t.width)&&void 0!==e?e:260),"px")}),(function(t){var e;return"".concat(.17*(null!==(e=t.width)&&void 0!==e?e:260),"px")}),(function(t){var e;return"".concat(.1*(null!==(e=t.width)&&void 0!==e?e:260),"px")})),k=c.b.div.withConfig({displayName:"productItemBox__Name",componentId:"sc-1i837b0-4"})(["flex-grow:1;",";font-size:",";"],u.b.fontType.n,(function(t){var e;return"".concat((null!==(e=t.width)&&void 0!==e?e:260)/10-10,"px")})),S=function(t){var e,n,i=t.hideShopCartButton,c=void 0!==i&&i,r=t.hidePrice,u=void 0!==r&&r,m=t.product,b=t.width,S=void 0===b?300:b,N=Object(g.b)(v.b).actions,T=Object(g.b)(y.e).actions,B=Object(g.b)(x.c).actions,M=S-40;return I(C,{width:M},I(_,{width:M},I("img",{src:Object(d.a)(null===m||void 0===m||null===(e=m.img)||void 0===e||null===(n=e[0])||void 0===n?void 0:n.url),alt:""})),I(p.b,{h:8}),!u&&I(l.a.Fragment,null,I(j,{width:M},I("aside",null,Object(s.c)(null===m||void 0===m?void 0:m.priceOut)),I(p.b,{w:16}),I("main",null,Object(s.c)(null===m||void 0===m?void 0:m.priceMarket))),I(p.b,{h:5})),I(O,{width:M},I(k,{width:M},m.name),!c&&I(f.a,{variant:"contained",color:"secondary",size:"small",onClick:Object(a.a)(o.a.mark((function t(){var e,n,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.openClick();case 2:if(!((null===(e=t.sent)||void 0===e?void 0:e.num)>0)){t.next=18;break}return t.next=6,T.updateNumShopCart({product:m,number:~~(null===e||void 0===e?void 0:e.num)});case 6:if(t.t1=n=t.sent,t.t0=null===t.t1,t.t0){t.next=10;break}t.t0=void 0===n;case 10:if(!t.t0){t.next=14;break}t.t2=void 0,t.next=15;break;case 14:t.t2=null===(i=n.updateNumShopCart)||void 0===i?void 0:i.id;case 15:if(!t.t2){t.next=18;break}Object(w.b)("\u64cd\u4f5c\u6210\u529f"),B.getList();case 18:case"end":return t.stop()}}),t)})))},I(h,null))))}},JHhN:function(t,e,n){"use strict";n.d(e,"a",(function(){return K})),n.d(e,"b",(function(){return V}));var i=n("q1tI"),o=n.n(i),a=n("RTgM"),c=n("51Ja"),r=n("1gZt"),l=n("vOnD"),d=n("cW92"),s=n("+vfP"),u=n("ZtJr"),p=n("U81q"),m=n("ytnY"),f=n("H0n8"),b=n("cBzo"),h=o.a.createElement,g=l.b.div.withConfig({displayName:"limitTime__Box",componentId:"sc-14w9f9f-0"})([""]),v=l.b.div.withConfig({displayName:"limitTime__Header",componentId:"sc-14w9f9f-1"})(["display:flex;align-items:center;",";"],u.b.fontType.xxl),w=l.b.div.withConfig({displayName:"limitTime__Title",componentId:"sc-14w9f9f-2"})([""]),y=l.b.div.withConfig({displayName:"limitTime__Tip",componentId:"sc-14w9f9f-3"})(["width:28px;height:34px;border-radius:2px;background:#0D0D21;color:white;",";display:grid;align-items:center;justify-items:center;"],u.b.fontType.xl),x=l.b.div.withConfig({displayName:"limitTime__Content",componentId:"sc-14w9f9f-4"})(["display:grid;grid-template-columns:repeat(3,1fr);grid-gap:16px;justify-items:center;"]),I=function(){var t,e=Object(p.b)(m.b),n=e.state,a=e.actions;Object(i.useEffect)((function(){a.getData()}),[a]);var c=a.calcDifferenceHours(),r=a.calcDifferenceMinutes();return h(g,{id:"LimitTime"},(null===(t=n.nowLimitData)||void 0===t?void 0:t.id)&&h(o.a.Fragment,null,h(v,null,h(w,null,n.isNext&&Object(s.a)("\u8ddd\u79bb\u4e0b\u6b21\u62a2\u8d2d")||Object(s.a)("\u9650\u65f6\u9009\u8d2d")),h(d.b,{w:18}),h(y,null,Object(b.k)(c)[0]),h(d.b,{w:6}),h(y,null,Object(b.k)(c)[1]),h(d.b,{w:6}),":",h(d.b,{w:6}),h(y,null,Object(b.k)(r)[0]),h(d.b,{w:6}),h(y,null,Object(b.k)(r)[1])),h(d.b,{h:24}),h(x,null,n.productList.slice(0,9).map((function(t){return h(f.a,{key:"ProductItemOneRow_".concat(t.id),product:t})}))),h(d.b,{h:46})))},C=n("wNMP"),_=n("nOHt"),j=n("4Rmy"),O=o.a.createElement,k=l.b.div.withConfig({displayName:"salesRank__Box",componentId:"sc-19ceg4h-0"})([""]),S=l.b.div.withConfig({displayName:"salesRank__Title",componentId:"sc-19ceg4h-1"})(["",";"],u.b.fontType.xl),N=l.b.div.withConfig({displayName:"salesRank__Content",componentId:"sc-19ceg4h-2"})(["display:grid;grid-gap:24px;padding-top:24px;margin-top:20px;box-shadow:0 4px 8px 0 #F5F5F5;> section{background:#4A90E2;}"]),T=l.b.div.withConfig({displayName:"salesRank__Rank",componentId:"sc-19ceg4h-3"})(["position:relative;> aside{position:absolute;top:-10px;left:15px;> main{width:40px;height:40px;display:grid;align-items:center;justify-items:center;color:#fff;background:",";border-radius:50%;",";}> img{width:40px;height:40px;}}"],u.b.red,u.b.fontType.xl),B=function(){var t=Object(_.useRouter)(),e=Object(p.b)(C.b),n=e.actions,o=e.state;return Object(i.useEffect)((function(){var e;n.getList({productInput:{isGroup:0},orderByType:null!==(e=t.query.salesRankType)&&void 0!==e?e:j.m.OneMonth})}),[n,t.query.salesRankType]),O(k,{id:"SalesRank"},O(S,null,Object(s.a)("\u70ed\u95e8\u6392\u884c")),O(N,null,o.listData.map((function(t,e){return O(T,{key:"ProductItem_".concat(t.id)},O(f.a,{width:209,hidePrice:!0,hideShopCartButton:!0,product:t}),O("aside",null,O("main",{style:0===e&&{background:"linear-gradient(144deg, #FFF0B1 0%, #B6883B 100%)"}||1===e&&{background:"linear-gradient(144deg, #E8E5E5 0%, #A5A3A3 100%)"}||2===e&&{background:"linear-gradient(144deg, #F8C8A9 0%, #C28753 100%)"}||{}},e+1)))}))))},M=n("KTXQ"),D=n("Oj7+"),F=o.a.createElement,E=l.b.div.withConfig({displayName:"themeSelection__Box",componentId:"oedtxf-0"})(["display:grid;grid-gap:50px;"]),z=l.b.div.withConfig({displayName:"themeSelection__Title",componentId:"oedtxf-1"})(["",";color:",";grid-area:1/1/2/4;justify-self:start;"],u.b.fontType.xxl,u.b.black),A=l.b.div.withConfig({displayName:"themeSelection__Img",componentId:"oedtxf-2"})(["display:grid;grid-template-rows:1fr 1fr;justify-self:stretch;",";background:rgb(200,200,200,.2);> img{width:100%;height:50%;}> section{> div{margin-top:",";}}"],u.b.fontType.n,u.b.spacePx.xxs),q=l.b.div.withConfig({displayName:"themeSelection__ThemeBox",componentId:"oedtxf-3"})(["display:grid;grid-template-rows:max-content max-content;grid-template-columns:repeat(3,300px);justify-items:center;"]),P=function(){var t=Object(p.b)(M.b),e=t.state,n=t.actions;return Object(i.useEffect)((function(){n.getData()}),[n]),F(E,{id:"ThemeSelection"},e.themeSelectionData.map((function(t){var n,i;return F(q,{key:"themeSelectionData_".concat(t.id)},F(z,null,t.title,F(d.b,{h:19})),F(A,null,F("img",{src:Object(D.a)(t.imgUrl),alt:""}),F("section",null,F("div",null,t.remark))),null===(n=e.productListForTheme[t.id])||void 0===n||null===(i=n.slice(0,8))||void 0===i?void 0:i.map((function(t){return F(f.a,{key:"statePromotionFlashSaleProductItem_".concat(t.id),width:290,product:t})})))})))},R=n("LIvt"),L=n("K0AU"),H=n("+CC5"),Y=o.a.createElement,Z=l.b.div.withConfig({displayName:"carousel__CusSwipeImg",componentId:"jz9tth-0"})(["> aside{background:rgb(164,164,164,.4);color:white;position:absolute;top:4px;left:4px;padding:8px;border-radius:4px;font-size:small;display:flex;}"]),J=function(){var t=Object(p.b)(R.c),e=t.actions,n=t.state,o=Object(p.b)(H.b).actions;return Object(i.useEffect)((function(){o.getData(),e.getHomeCarousel()}),[e,o]),Y("div",null,function(){var t,e,i,o,a=null!==(t=null===(e=n.homeCarouselImgs)||void 0===e||null===(i=e.value)||void 0===i||null===(o=i.list)||void 0===o?void 0:o.filter((function(t){return!t.isDisabled})))&&void 0!==t?t:[];return Y(L.a,{showArrows:!0,showIndicators:!1,height:"400px",dataList:a,renderItem:function(t){var e,n,i,o,a,c,r;return Y(Z,{key:"Carousel_".concat(t.id)},Y("img",{style:{height:"400px"},src:Object(D.a)(t.imgUrl),alt:""}),Y("aside",null,Y("section",null,null===t||void 0===t||null===(e=t.objData)||void 0===e?void 0:e.remark),Y(d.b,{w:4}),(null===t||void 0===t||null===(n=t.objData)||void 0===n?void 0:n.effectiveDateStart)&&Y("main",null,"[ ",Object(b.e)(null===t||void 0===t||null===(i=t.objData)||void 0===i?void 0:i.effectiveDateStart,"YYYY/MM/dd")," - ",Object(b.e)(null===t||void 0===t||null===(o=t.objData)||void 0===o?void 0:o.effectiveDateEnd,"YYYY/MM/dd")," ]"),(null===t||void 0===t||null===(a=t.objData)||void 0===a?void 0:a.startTime)&&Y("main",null,"[ ",Object(b.e)(null===t||void 0===t||null===(c=t.objData)||void 0===c?void 0:c.startTime,"YYYY/MM/dd")," - ",Object(b.e)(null===t||void 0===t||null===(r=t.objData)||void 0===r?void 0:r.endTime,"YYYY/MM/dd")," ]")))},onClickItem:function(t){}})}())},U=n("DrI1"),W=o.a.createElement,K=l.b.div.withConfig({displayName:"pcHome__PcContentBox",componentId:"sc-14v76mp-0"})(["max-width:1200px;margin:0 auto;"]),G=l.b.div.withConfig({displayName:"pcHome__TwoSide",componentId:"sc-14v76mp-1"})(["display:flex;> section{flex-grow:1;}> aside{flex-basis:210px;}"]),V=function(){return W(U.a,null,W(a.a,null),W(K,null,W(c.a,null),W(r.a,null),W(J,null),W(d.b,{h:50}),W(G,null,W("section",null,W(I,null),W(P,null)),W("aside",null,W(B,null)))),W(d.b,{h:120}))}},RTgM:function(t,e,n){"use strict";n.d(e,"a",(function(){return g}));var i=n("vOnD"),o=n("q1tI"),a=n.n(o),c=n("+vfP"),r=n("Z3vd"),l=n("wb2y"),d=n("cW92"),s=n("ZtJr"),u=a.a.createElement,p=i.b.div.withConfig({displayName:"header__HeaderBox",componentId:"lshy28-0"})(["width:100%;height:60px;background:#0D0D21;display:grid;align-items:center;justify-items:center;"]),m=i.b.div.withConfig({displayName:"header__ContentBox",componentId:"lshy28-1"})(["width:1200px;display:grid;grid-template-columns:max-content 1fr 360px;color:white;align-items:center;"]),f=i.b.div.withConfig({displayName:"header__Welcome",componentId:"lshy28-2"})(["",";color:#FFFFFF;"],s.b.fontType.s),b=i.b.div.withConfig({displayName:"header__Center",componentId:"lshy28-3"})(["&&&{.MuiButtonBase-root{width:80px;height:28px;background:#F84033;border-radius:4px;",";font-weight:600;color:#FFFFFF;padding:0;}}"],s.b.fontType.s),h=i.b.div.withConfig({displayName:"header__Right",componentId:"lshy28-4"})(["display:flex;justify-content:flex-end;"]),g=function(){return u(p,null,u(m,null,u(f,null,Object(c.a)("\u665a\u4e0a\u597d, \u6b22\u8fce\u6765\u5230\u9a6c\u4f69\u83b1\u8d85\u5e02!")),u(b,null,u(d.b,{w:20}),u(r.a,{variant:"contained",color:"secondary"},Object(c.a)("\u767b\u5f55/\u6ce8\u518c"))),u(h,null,u(r.a,{variant:"text",color:"inherit"},Object(c.a)("\u5e2e\u52a9\u4e2d\u5fc3")),u(d.b,{w:22}),u(l.a,{style:{height:"16px",alignSelf:"center"},light:!0,flexItem:!0,orientation:"vertical"}),u(d.b,{w:22}),u(r.a,{variant:"text",color:"inherit"},Object(c.a)("\u638c\u4e0a\u8d85\u5e02")))))}}}]);