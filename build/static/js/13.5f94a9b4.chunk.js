(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{338:function(e,t,a){"use strict";a.r(t);var n=a(14),l=a.n(n),o=a(19),r=a(13),i=a(17),c=a(0),u=a.n(c),d=a(381),s=a(373),p=a(369),m=a(372),v=a(374),f=a(396),b=a(94),y=a(447),g=a(83),O=a(40),E=a(382),h=a(62),j=a(39);function _(){var e=Object(g.a)(["\n    query($data: AddHistoryInput){\n        add_history_list_total(addHistoryInput: $data)\n        add_history_list_by_product(addHistoryInput: $data) {\n            id\n            name\n            create_time\n            update_time\n            is_delete\n            supplement_id\n            number\n            supplier\n            product_id\n            count\n            amount\n        }\n    }\n"]);return _=function(){return e},e}var x=Object(h.b)(_()),w=Object(O.b)(Object(O.c)(Object(E.a)("addModal",{list:[],id:""}),b.d),"addProductHistoryModel",{historyList:[]},{getList:function(){var e=Object(o.a)(l.a.mark(function e(t,a){var n,o,r,i,c;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.setData,o=a.query,e.next=3,o(x,{product_id:t.modalData.id,rows_per_page:t.rows_per_page,page:t.page});case 3:r=e.sent,i=r.add_history_list_by_product,c=r.add_history_list_total,n(function(e){return Object(j.i)(Object(j.i)(e,"total",c),"historyList",i)});case 7:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}()}),C=a(316),k=a(310),T=a(311),B=a(187),I=a(69),D=a(85),H=function(){var e=Object(D.a)(w),t=e.state,a=t.open,n=t.modalData,l=t.historyList,o=e.actions,r=o.getList;return Object(c.useEffect)(function(){a&&r({page:w.state.page,rows_per_page:w.state.rows_per_page,modalData:{id:null===n||void 0===n?void 0:n.id}})},[r,n.id,a]),u.a.createElement(C.a,{open:a,onClose:function(){return o.onClose({})},maxWidth:"lg",fullWidth:!0},u.a.createElement(k.a,null,"\u8865\u8d27\u5386\u53f2"),u.a.createElement(T.a,null,u.a.createElement(B.a,null,u.a.createElement(m.a,null,u.a.createElement(s.a,null,["\u8865\u8d27\u65e5\u671f","\u8865\u8d27\u5355\u53f7","\u8865\u8d27\u6570\u91cf","\u8865\u8d27\u5355\u4ef7"].map(function(e){return u.a.createElement(I.a,{key:"TableHead".concat(e)},e)}))),u.a.createElement(v.a,null,l.map(function(e){return u.a.createElement(s.a,{key:"historyList".concat(e.id)},u.a.createElement(I.a,null,Object(j.e)(new Date(e.create_time),"yyyy/MM/dd HH:mm")),u.a.createElement(I.a,null,e.number),u.a.createElement(I.a,null,e.count),u.a.createElement(I.a,null,e.amount))}))),u.a.createElement(b.b,{pageModel:e})))},q={ajax:function(e){return function(t,a){var n=Object(c.useState)({}),u=Object(i.a)(n,2),d=u[0],s=u[1],p=Object(c.useState)(),m=Object(i.a)(p,2),v=m[0],f=m[1],b=Object(c.useState)(!1),y=Object(i.a)(b,2),g=y[0],O=y[1];return[Object(c.useCallback)(function(){var n=Object(o.a)(l.a.mark(function n(o){var i,c;return l.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return i=Object(r.a)({},a,o),n.next=3,axios[e](t,i,{headers:{"Content-Type":"application/json;charset=UTF-8"}}).catch(function(e){return f(e),e}).finally(function(){O(!1)});case 3:return c=n.sent,s((null===c||void 0===c?void 0:c.data)||{}),n.abrupt("return",(null===c||void 0===c?void 0:c.data)||{});case 6:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}(),[a,t]),d,g,v]}}};q.post=q.ajax("post"),q.get=q.ajax("get");var L=a(47),S=a(147),M=a(168),N=a(518),P=a(490),A=a(517),G=a(16),$={};$.Box=Object(G.b)(C.a).withConfig({displayName:"style__Box",componentId:"sc-1iqm0j9-0"})([""]),$.Img=Object(G.b)("section").withConfig({displayName:"style__Img",componentId:"sc-1iqm0j9-1"})(["> img{max-width:80vw;max-height:60vh;}"]);a(491);var z=a(492),F=a(385),J=$.Box,W=$.Img,U=function(e){var t=e.open,a=e.closeModal,n=e.data,l=void 0===n?[]:n;return u.a.createElement(J,{open:t,onClose:a},u.a.createElement(z.Carousel,null,null===l||void 0===l?void 0:l.map(function(e){return u.a.createElement(W,{key:"Carousel".concat(null===e||void 0===e?void 0:e.id)},u.a.createElement("img",{alt:"",src:Object(F.a)(null===e||void 0===e?void 0:e.url)}))})))},K=a(513),Q=a(514),R={};R.Box=Object(G.b)("div").withConfig({displayName:"style__Box",componentId:"nyxq6l-0"})(["margin:20px;> header{display:grid;grid-column-gap:10px;grid-template-columns:minmax(200px,auto) repeat(2,1fr);> section{flex:1;}}"]),R.Table=Object(G.b)(B.a).withConfig({displayName:"style__Table",componentId:"nyxq6l-1"})(["&&&{margin-top:20px;border-radius:5px;border-collapse:initial;overflow:hidden;border:1px solid rgba(224,224,224,1);> thead{background:",";> tr > th{color:",";}}}"],function(e){return e.theme.palette.grey[800]},function(e){return e.theme.palette.common.white}),R.Loading=Object(G.b)("section").withConfig({displayName:"style__Loading",componentId:"nyxq6l-2"})(["text-align:center;"]),R.ActionTableCell=Object(G.b)("section").withConfig({displayName:"style__ActionTableCell",componentId:"nyxq6l-3"})(["&&&{display:flex;> button{margin-right:8px;&:last-of-type{margin-right:0;}}}"]),R.HeaderBox=Object(G.b)("section").withConfig({displayName:"style__HeaderBox",componentId:"nyxq6l-4"})(["&&&{display:flex;flex-direction:column;> header{font-size:20px;font-weight:bold;margin-bottom:15px;}> section{font-weight:bold;font-size:14px;margin-bottom:10px;}> main{display:flex;align-items:center;> div{margin-right:10px;}}}"]),R.ImgPreview=Object(G.b)("section").withConfig({displayName:"style__ImgPreview",componentId:"nyxq6l-5"})(["width:180px;display:inline-flex;> img{width:80px;height:60px;}> section{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-left:10px;}"]),R.SearchBox=Object(G.b)("div").withConfig({displayName:"style__SearchBox",componentId:"nyxq6l-6"})(["display:grid;grid-template-columns:4fr 3fr 2fr;grid-gap:12px;> span{grid-area:2 / 1 / 2 / 3;justify-self:end;align-self:center;}"]);var V=a(512),X=a(327),Y=a(84),Z=a(387);a.d(t,"Product",function(){return ae});var ee="1",te="2",ae=function(e){var t,a,n,c,g=e.theme,O=e.match,E=Object(D.a)(w).actions.openEditClick,h=null!==(t=~~(null===O||void 0===O?void 0:null===(a=O.params)||void 0===a?void 0:a.is_group))&&void 0!==t?t:-1,_=Object(b.f)(),x=Object(y.b)(),C=x.editClick,k=function(){var e=u.a.useState({typeOne:"",typeTwo:"",typeThree:""}),t=Object(i.a)(e,2),a=t[0],n=t[1],l=Object(Y.e)(X.categoryGraphql.getCategoryList),o=Object(i.a)(l,2),c=o[0],d=o[1].category_list,s=Object(Y.e)(X.categoryGraphql.getCategoryList),p=Object(i.a)(s,2),m=p[0],v=p[1].category_list,f=Object(Y.e)(X.categoryGraphql.getCategoryList),b=Object(i.a)(f,2),y=b[0],g=b[1].category_list;return u.a.useEffect(function(){c({parent_id:""})},[c]),u.a.useEffect(function(){a.typeOne?m({parent_id:a.typeOne}):n(function(e){return Object(r.a)({},e,{typeTwo:"",res:""})})},[m,a.typeOne]),u.a.useEffect(function(){n(function(e){var t;return Object(r.a)({},e,(null===v||void 0===v?void 0:v.length)?{}:{res:e.typeOne},{typeTwo:(null===v||void 0===v?void 0:null===(t=v[0])||void 0===t?void 0:t.id)||""})})},[v]),u.a.useEffect(function(){a.typeTwo?y({parent_id:a.typeTwo}):n(function(e){return Object(r.a)({},e,{typeThree:"",res:e.typeOne})})},[y,a.typeTwo]),u.a.useEffect(function(){n(function(e){var t;return Object(r.a)({},e,(null===g||void 0===g?void 0:g.length)?{}:{res:e.typeTwo},{typeThree:(null===g||void 0===g?void 0:null===(t=g[0])||void 0===t?void 0:t.id)||""})})},[g]),u.a.useEffect(function(){n(function(e){return Object(r.a)({},e,{res:a.typeThree||e.typeTwo||e.typeOne})})},[a.typeThree]),{typeHelpObj:a,setTypeHelpObj:n,typeOptionOne:d,typeOptionTwo:v,typeOptionThree:g}}(),T=k.typeHelpObj,B=k.setTypeHelpObj,G=k.typeOptionOne,$=k.typeOptionTwo,z=k.typeOptionThree,J=u.a.useState({type:ee,value:""}),W=Object(i.a)(J,2),ae=W[0],ne=W[1],le=u.a.useState({sort_type:""}),oe=Object(i.a)(le,2),re=oe[0],ie=oe[1],ce=u.a.useState({open:!1,data:[]}),ue=Object(i.a)(ce,2),de=ue[0],se=ue[1],pe=Object(Y.e)(Z.a.getList),me=Object(i.a)(pe,3),ve=me[0],fe=me[1],be=fe.product_list,ye=fe.product_total,ge=me[2],Oe=(null===be||void 0===be?void 0:be.length)?be:[],Ee=Object(Y.c)(Z.b),he=Object(i.a)(Ee,1)[0],je=q.post("/Products/ExportCommodity"),_e=Object(i.a)(je,1)[0],xe=q.post("/Products/ImportCommodity"),we=Object(i.a)(xe,1)[0],Ce=function(){var e,t,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return ve({data:Object(r.a)({},re,_.pageData,{origin_category_id:(null===re||void 0===re?void 0:re.category_id)?null===re||void 0===re?void 0:re.category_id:null},a,{category_id:null,is_group:null!==(e=~~(null===O||void 0===O?void 0:null===(t=O.params)||void 0===t?void 0:t.is_group))&&void 0!==e?e:-1})})};return u.a.useEffect(function(){ve({data:Object(r.a)({},re,{origin_category_id:(null===re||void 0===re?void 0:re.category_id)?null===re||void 0===re?void 0:re.category_id:null,category_id:null},_.pageData,{is_group:h})})},[ve,re,_.pageData,h]),u.a.useEffect(function(){ie(function(e){return Object(r.a)({},e,{category_id:T.res||""})})},[T.res]),u.a.createElement(R.Box,null,u.a.createElement("header",null,u.a.createElement(R.HeaderBox,null,u.a.createElement("header",null,"\u4ea7\u54c1\u5217\u8868"),u.a.createElement("section",null,"\u60a8\u53ef\u4ee5\u8fdb\u884c\u7ba1\u7406"),u.a.createElement("main",null,u.a.createElement(L.a,{variant:"contained",color:"primary",onClick:C({})},"\u65b0\u589e"),u.a.createElement(L.a,{variant:"contained",color:"default",onClick:Object(o.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,we();case 2:(null===(t=e.sent)||void 0===t?void 0:t.msg)&&Object(S.b)({oneButton:!0,message:"".concat(t.msg),callBack:function(){var e=Object(o.a)(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()});case 4:case"end":return e.stop()}},e)}))},"\u5bfc\u5165"),u.a.createElement(L.a,{variant:"contained",color:"default",onClick:Object(o.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_e();case 2:(null===(t=e.sent)||void 0===t?void 0:t.msg)&&Object(S.b)({oneButton:!0,message:"".concat(t.msg),callBack:function(){var e=Object(o.a)(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()});case 4:case"end":return e.stop()}},e)}))},"\u5bfc\u51fa"))),u.a.createElement(R.HeaderBox,null,u.a.createElement("header",null,"\u540d\u79f0\u641c\u7d22"),u.a.createElement("main",null,u.a.createElement(M.a,{value:ae.value,onChange:function(e){var t;return ne(Object(r.a)({},ae,{value:null===e||void 0===e?void 0:null===(t=e.target)||void 0===t?void 0:t.value}))},style_type:"light"}),u.a.createElement(N.a,{row:!0,value:ae.type,onChange:function(e){return ne(function(t){var a;return Object(r.a)({},t,{type:null===e||void 0===e?void 0:null===(a=e.target)||void 0===a?void 0:a.value,value:""})})}},u.a.createElement(P.a,{value:ee,control:u.a.createElement(A.a,null),label:"\u7f16\u53f7"}),u.a.createElement(P.a,{value:te,control:u.a.createElement(A.a,null),label:"\u540d\u79f0"})),u.a.createElement(L.a,{onClick:function(){return ie(Object(r.a)({},re,{name:ae.type===te?ae.value:null,number:ae.type===ee?parseInt(ae.value):null}))},variant:"contained",color:"secondary"},"\u641c\u7d22"))),u.a.createElement(R.HeaderBox,null,u.a.createElement("header",null,"\u7c7b\u522b\u7b5b\u9009"),u.a.createElement(R.SearchBox,null,u.a.createElement(f.a,{value:T.typeOne,onChange:function(e){B(Object(r.a)({},T,{typeOne:e.target.value}))},clear:1,placeholder:"\u5168\u90e8"},null===G||void 0===G?void 0:G.map(function(e){return u.a.createElement(d.a,{key:"typeOptionOne".concat(e.id),value:e.id},e.name)})),u.a.createElement(f.a,{value:T.typeTwo,onChange:function(e){B(Object(r.a)({},T,{typeTwo:e.target.value}))},clear:1,placeholder:"\u5168\u90e8"},null===$||void 0===$?void 0:$.map(function(e){return u.a.createElement(d.a,{key:"typeOptionTwo".concat(e.id),value:e.id},e.name)})),u.a.createElement(f.a,{onChange:function(e){B(Object(r.a)({},T,{typeThree:e.target.value}))},value:T.typeThree,clear:1,placeholder:"\u5168\u90e8"},null===z||void 0===z?void 0:z.map(function(e){return u.a.createElement(d.a,{key:"typeOptionThree".concat(e.id),value:e.id},e.name)})),u.a.createElement("span",null,"\u7c7b\u522b\u6392\u5e8f"),u.a.createElement(f.a,{placeholder:"\u9009\u62e9\u6392\u5e8f",value:re.sort_type,onChange:function(e){ie(Object(r.a)({},re,{sort_type:e.target.value}))}},[["create_time desc","\u6309\u4ea7\u54c1\u521b\u5efa/\u4fee\u6539\u65f6\u95f4"],["number asc","\u5546\u54c1\u7f16\u53f7"],["stock asc","\u5e93\u5b58\u5012\u5e8f"]].map(function(e){return u.a.createElement(d.a,{key:"sort_type".concat(e[0]),value:e[0]},e[1])}))))),u.a.createElement("main",null,ge?u.a.createElement(R.Loading,null,u.a.createElement(p.a,null)):u.a.createElement(R.Table,{theme:g},u.a.createElement(m.a,null,u.a.createElement(s.a,null,["\u5546\u54c1\u7f16\u53f7","\u4e2d\u6587\u540d\u79f0","\u56fe\u7247","\u70ed\u95e8","\u65b0\u54c1","\u5e93\u5b58","\u8fdb\u8d27\u4ef7\u683c","\u5e02\u573a\u4ef7\u683c","\u552e\u5356\u4ef7\u683c","\u91cd\u91cf","\u5355\u4f4d"].map(function(e){return u.a.createElement(I.a,{key:"TableHead".concat(e)},e)}),u.a.createElement(I.a,{width:240},"\u64cd\u4f5css"))),u.a.createElement(v.a,null,null===Oe||void 0===Oe?void 0:Oe.map(function(e){var t,a,n,r,i,c,d;return u.a.createElement(s.a,{key:"TableBody".concat(null===e||void 0===e?void 0:e.id)},u.a.createElement(I.a,null,(r=null===e||void 0===e?void 0:e.c3_number,i=null===e||void 0===e?void 0:e.c2_number,c=null===e||void 0===e?void 0:e.c1_number,d=null===e||void 0===e?void 0:e.number,"".concat(Object(j.b)(2)(r)).concat(Object(j.b)(2)(i)).concat(Object(j.b)(2)(c)).concat(Object(j.b)(3)(d)))),u.a.createElement(I.a,null,null===e||void 0===e?void 0:e.name),u.a.createElement(I.a,{width:240},u.a.createElement(R.ImgPreview,null,u.a.createElement("img",{src:Object(F.a)(null===e||void 0===e?void 0:null===(t=e.imgs)||void 0===t?void 0:null===(a=t[0])||void 0===a?void 0:a.url),alt:""}),u.a.createElement("section",null,u.a.createElement("div",null,null===e||void 0===e?void 0:null===(n=e.imgs)||void 0===n?void 0:n.length,"/7"),u.a.createElement(V.a,{component:"button",color:"secondary",onClick:function(){var t,a;(null===e||void 0===e?void 0:null===(t=e.imgs)||void 0===t?void 0:t.length)&&se({open:!0,data:null!==(a=null===e||void 0===e?void 0:e.imgs)&&void 0!==a?a:[]})}},"\u9884\u89c8")))),u.a.createElement(I.a,null,1===(null===e||void 0===e?void 0:e.is_hot)?u.a.createElement(K.a,null):u.a.createElement(Q.a,null)),u.a.createElement(I.a,null,1===(null===e||void 0===e?void 0:e.is_new)?u.a.createElement(K.a,null):u.a.createElement(Q.a,null)),u.a.createElement(I.a,null,null===e||void 0===e?void 0:e.stock),u.a.createElement(I.a,null,null===e||void 0===e?void 0:e.price_in),u.a.createElement(I.a,null,null===e||void 0===e?void 0:e.price_out),u.a.createElement(I.a,null,null===e||void 0===e?void 0:e.price_market),u.a.createElement(I.a,null,null===e||void 0===e?void 0:e.weight),u.a.createElement(I.a,null,null===e||void 0===e?void 0:e.unit),u.a.createElement(I.a,null,u.a.createElement(R.ActionTableCell,null,u.a.createElement(L.a,{color:"secondary",onClick:C(e),variant:"contained"},"\u7f16\u8f91"),u.a.createElement(L.a,{color:"secondary",onClick:function(){return E({data:e})},variant:"contained"},"\u8865\u8d27\u5386\u53f2"),u.a.createElement(L.a,{color:(null===e||void 0===e?void 0:e.is_enable)?"primary":"default",variant:"contained",onClick:function(){Object(S.b)({message:"\u786e\u5b9a".concat((null===e||void 0===e?void 0:e.is_enable)?"\u505c\u7528":"\u542f\u7528","\u8be5\u5546\u54c1\u5417"),callBack:function(){var t=Object(o.a)(l.a.mark(function t(a){return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,he({data:{id:null===e||void 0===e?void 0:e.id,is_enable:(null===e||void 0===e?void 0:e.is_enable)?0:1}});case 4:Ce();case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()})}},(null===e||void 0===e?void 0:e.is_enable)?"\u505c\u7528":"\u542f\u7528"))))}))),u.a.createElement(b.a,Object.assign({},_,{count:~~ye}))),u.a.createElement(y.a,Object.assign({},x,{refreshData:Ce})),u.a.createElement(H,null),u.a.createElement(U,{open:null!==(n=de.open)&&void 0!==n&&n,closeModal:function(){return se({open:!1,data:[]})},data:null!==(c=de.data)&&void 0!==c?c:[]}))};t.default=ae},382:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var n=a(39),l=a(40),o=function(e,t){return Object(l.d)("".concat(e,"_modalModelFactory"),{modalData:t,open:!1,isEdit:-1},{openClick:function(e,t){return(0,t.setData)(function(t){return Object(n.f)(t,{open:!0,modalData:e,isEdit:-1})})},openEditClick:function(e,t){return(0,t.setData)(function(t){return Object(n.f)(t,{open:!0,modalData:e.data,isEdit:e.index})})},onClose:function(e,t){return(0,t.setData)(function(e){return Object(n.f)(Object(n.i)(e,"modalData",{}),{modalData:{},open:!1})})},setModal:function(e,t){return(0,t.setData)(function(t){return Object(n.f)(t,{modalData:e})})}})}}}]);