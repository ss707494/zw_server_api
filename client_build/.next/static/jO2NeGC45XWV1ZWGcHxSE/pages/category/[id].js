(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{ZgDN:function(e,t,n){"use strict";n.r(t);var a=n("o0o1"),r=n.n(a),o=n("KQm4"),c=n("HaE+"),i=n("q1tI"),l=n.n(i),s=n("nOHt"),u=n.n(s),d=n("U81q"),p=n("R99l"),m=n("VD++"),g=n("de8u"),f=n("wx14"),b=n("Ff2n"),y=(n("TOwV"),n("17x9"),n("iuhU")),v=n("H2TA"),h=n("ofer"),x=n("ye/S"),O=n("5AJ6"),j=Object(O.a)(i.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz");var w=Object(v.a)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:Object(x.b)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var t=e.classes,n=Object(b.a)(e,["classes"]);return(i.createElement(m.a,Object(f.a)({component:"li",className:t.root,focusRipple:!0},n),i.createElement(j,{className:t.icon})))}));var C=i.forwardRef((function(e,t){var n=e.children,a=e.classes,r=e.className,c=e.component,l=void 0===c?"nav":c,s=e.expandText,u=void 0===s?"Show path":s,d=e.itemsAfterCollapse,p=void 0===d?1:d,m=e.itemsBeforeCollapse,g=void 0===m?1:m,v=e.maxItems,x=void 0===v?8:v,O=e.separator,j=void 0===O?"/":O,C=Object(b.a)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),k=i.useState(!1),I=k[0],L=k[1],N=i.Children.toArray(n).filter((function(e){return i.isValidElement(e)})).map((function(e,t){return i.createElement("li",{className:a.li,key:"child-".concat(t)},e)}));return i.createElement(h.a,Object(f.a)({ref:t,component:l,color:"textSecondary",className:Object(y.a)(a.root,r)},C),i.createElement("ol",{className:a.ol},function(e,t,n){return e.reduce((function(a,r,o){return o<e.length-1?a=a.concat(r,i.createElement("li",{"aria-hidden":!0,key:"separator-".concat(o),className:t},n)):a.push(r),a}),[])}(I||x&&N.length<=x?N:function(e){return g+p>=e.length?e:[].concat(Object(o.a)(e.slice(0,g)),[i.createElement(w,{"aria-label":u,key:"ellipsis",onClick:function(e){L(!0);var t=e.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");t&&t.focus()}})],Object(o.a)(e.slice(e.length-p,e.length)))}(N),a.separator,j)))})),k=Object(v.a)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(C),I=n("NqtD"),L=n("G7As"),N=n("bfFb"),T=i.forwardRef((function(e,t){var n=e.classes,a=e.className,r=e.color,o=void 0===r?"primary":r,c=e.component,l=void 0===c?"a":c,s=e.onBlur,u=e.onFocus,d=e.TypographyClasses,p=e.underline,m=void 0===p?"hover":p,g=e.variant,v=void 0===g?"inherit":g,x=Object(b.a)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),O=Object(L.a)(),j=O.isFocusVisible,w=O.onBlurVisible,C=O.ref,k=i.useState(!1),T=k[0],E=k[1],_=Object(N.a)(t,C);return i.createElement(h.a,Object(f.a)({className:Object(y.a)(n.root,n["underline".concat(Object(I.a)(m))],a,T&&n.focusVisible,"button"===l&&n.button),classes:d,color:o,component:l,onBlur:function(e){T&&(w(),E(!1)),s&&s(e)},onFocus:function(e){j(e)&&E(!0),u&&u(e)},ref:_,variant:v},x))})),E=Object(v.a)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(T),_=n("cBzo"),B=n("B42p"),q=n("i7FU"),S=n("Z3gB"),D=n("+/yG"),P=n("vOnD"),R=n("LXXt"),A=n("Oj7+"),F=n("oxxF"),z=n("+vfP"),H=l.a.createElement,V=function(){return H("div",{style:{textAlign:"center"}},Object(z.a)("\u6682\u65e0\u6570\u636e"))},M=n("XiiW"),X=n("26vd"),U=n("4Rmy"),G=l.a.createElement,J=Object(D.c)("CategoryPage",{productList:[],categoryList:[]},{getProductList:function(){var e=Object(c.a)(r.a.mark((function e(t,n){var a,c,i,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.query(q.b.productsInCategory,{data:t.categoryItemInput,productItemInput:t.productItemInput});case 2:l=e.sent,n.setData(Object(_.f)({productList:null!==(a=null===l||void 0===l?void 0:l.productsInCategory)&&void 0!==a?a:[],categoryList:Object(o.a)(null!==(c=null===l||void 0===l?void 0:null===(i=l.categoryList)||void 0===i?void 0:i.list)&&void 0!==c?c:[])}));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}),W=Object(P.a)("div").withConfig({displayName:"id__Box",componentId:"sc-13c54cm-0"})(["padding:18px 20px 0;> header{font-size:18px;font-weight:bold;margin:10px 0;}"]),Z=Object(P.a)(m.a).withConfig({displayName:"id__CategoryItemStyle",componentId:"sc-13c54cm-1"})(["&&&{width:100%;height:60px;display:flex;border-radius:8px;overflow:hidden;margin-bottom:10px;background:",";> img{height:100%;width:70%;}> span{flex:1;color:#fff;display:flex;align-items:center;justify-content:center;}}"],R.a[700]),K=Object(D.c)("categoryItemModel",{test:"",category:{}},{getLevel:function(){var e=Object(c.a)(r.a.mark((function e(t,n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.query(q.b.categoryLevel,{data:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),getCategory:function(){var e=Object(c.a)(r.a.mark((function e(t,n){var a,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.query(q.b.oneCategory,{data:t});case 2:o=e.sent,n.setData(Object(_.f)({category:null!==(a=null===o||void 0===o?void 0:o.oneCategory)&&void 0!==a?a:{}}));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}),Q=P.a.div.withConfig({displayName:"id__ListBox",componentId:"sc-13c54cm-2"})(["display:grid;grid-template-columns:repeat(",",1fr);grid-gap:16px;"],(function(e){return e.columns||2}));t.default=function(){var e,t,n,a,o,m=Object(s.useRouter)(),f=null!==(e=null===(t=m.query)||void 0===t?void 0:t.id)&&void 0!==e?e:"",b=Object(d.b)(J),y=b.state,v=b.actions,x=b.getLoad,O=Object(d.b)(K),j=O.actions,w=O.state,C=Object(d.b)(M.b),I=C.state,L=C.actions;Object(i.useEffect)((function(){var e;L.setHomeType(null!==(e=m.query.homeType)&&void 0!==e?e:X.b.home)}),[m.query.homeType]);return Object(i.useEffect)((function(){f&&(v.getProductList({categoryItemInput:{id:f},productItemInput:{isGroup:m.query.homeType===X.b.group?1:0}}),j.getCategory({id:f}))}),[f]),G("div",null,G(B.a,{title:""}),!!x(q.b.productsInCategory)&&G(g.a,null),G(k,{style:{margin:"8px 0 0 8px"},separator:"\u203a","aria-label":"breadcrumb"},[null===(n=w.category)||void 0===n?void 0:null===(a=n.parentCategory)||void 0===a?void 0:a.parentCategory,null===(o=w.category)||void 0===o?void 0:o.parentCategory].filter((function(e){return!!(null===e||void 0===e?void 0:e.name)&&(null===e||void 0===e?void 0:e.name)!==U.c})).map((function(e){return G(E,{key:"Breadcrumbs".concat(null===e||void 0===e?void 0:e.id),color:"inherit",href:"#",onClick:Object(c.a)(r.a.mark((function t(){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(_.c)({homeType:m.query.homeType}),t.next=3,u.a.push("/category/[id]".concat(n),"/category/".concat(null===e||void 0===e?void 0:e.id).concat(n));case 3:case"end":return t.stop()}}),t)})))},null===e||void 0===e?void 0:e.name)})),G(h.a,{color:"textPrimary"},w.category.name)),G(S.a,{boxHeight:"calc(100vh - 60px)"},G(W,null,0===y.categoryList.length&&0===y.productList.length&&G(V,null)||G(l.a.Fragment,null,y.categoryList.map((function(e){return G(Z,{key:"CategoryItem_".concat((t=e).id),onClick:Object(c.a)(r.a.mark((function e(){var n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(_.c)({homeType:m.query.homeType}),e.next=3,j.getLevel({id:t.id});case 3:if(e.t1=n=e.sent,e.t0=null===e.t1,e.t0){e.next=7;break}e.t0=void 0===n;case 7:if(!e.t0){e.next=11;break}e.t2=void 0,e.next=12;break;case 11:e.t2=n.categoryLevel;case 12:if(e.t3=e.t2,3!==e.t3){e.next=18;break}return e.next=16,u.a.push("/productList/[id]".concat(a),"/productList/".concat(t.id).concat(a));case 16:e.next=20;break;case 18:return e.next=20,u.a.push("/category/[id]".concat(a),"/category/".concat(t.id).concat(a));case 20:case"end":return e.stop()}}),e)})))},G("img",{src:Object(A.a)(t.imgUrl),alt:""}),G("span",null,t.name,G(p.a,null)));var t})),G("header",null,Object(z.a)("\u70ed\u95e8\u63a8\u8350")),0===y.productList.length&&G(V,null),G(Q,{columns:I.homeType===X.b.group?1:2},y.productList.map((function(e){return I.homeType===X.b.group&&G(F.a,{product:e,key:"ProductItem_".concat(e.id)})||G(F.b,{key:"ProductItem_".concat(e.id),product:e})})))))))}},nl0e:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/category/[id]",function(){return n("ZgDN")}])}},[["nl0e",1,0,5,2,3,4,6,7,8,9,10,11,12,14,13,15]]]);