(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{327:function(e,t,n){"use strict";n.r(t);var a=n(14),r=n.n(a),o=n(19),i=n(13),c=n(17),l=n(83),u=n(48),d=n(0),m=n.n(d),p=n(381),s=n(373),b=n(16),v=n(187),g={};g.Box=Object(b.b)("div").withConfig({displayName:"style__Box",componentId:"lv66y5-0"})(["margin:20px;> header{display:flex;flex-direction:row;> section{flex:1;}}"]),g.Table=Object(b.b)(v.a).withConfig({displayName:"style__Table",componentId:"lv66y5-1"})(["&&&{margin-top:20px;border-radius:5px;border-collapse:initial;overflow:hidden;border:1px solid rgba(224,224,224,1);> thead{background:",";> tr > th{color:",";}}}"],function(e){return e.theme.palette.grey[800]},function(e){return e.theme.palette.common.white}),g.Loading=Object(b.b)("section").withConfig({displayName:"style__Loading",componentId:"lv66y5-2"})(["text-align:center;"]),g.ActionTableCell=Object(b.b)("section").withConfig({displayName:"style__ActionTableCell",componentId:"lv66y5-3"})(["&&&{display:flex;> button{margin-right:8px;&:last-of-type{margin-right:0;}}}"]),g.HeaderBox=Object(b.b)("section").withConfig({displayName:"style__HeaderBox",componentId:"lv66y5-4"})(["&&&{display:flex;flex-direction:column;> header{font-size:20px;font-weight:bold;margin-bottom:15px;}> section{font-weight:bold;font-size:14px;margin-bottom:10px;}> main{> div{margin-right:8px;}}}"]);var f=n(369),_=n(372),O=n(374),h=n(396),j=n(94),y=n(316),C=n(311),E=n(145),x={};x.Box=Object(b.b)(y.a).withConfig({displayName:"style__Box",componentId:"okjugs-0"})([""]),x.Content=Object(b.b)(C.a).withConfig({displayName:"style__Content",componentId:"okjugs-1"})(["&&&{width:660px;> form{margin-bottom:20px;}}"]),x.UploadFormControl=E.a.TextFieldBox;var w=n(310),k=n(95),B=n(401),I=n(47),N=n(30),T=n(84),S=n(305),$=n(306),L=n(386),D=n(39),F=n(62);function U(){var e=Object(l.a)(["\n    mutation ($data: CategoryInput){\n        save_category(Category: $data) {\n            flag\n            msg\n            category {\n                id\n                name\n            }\n        }\n    }\n"]);return U=function(){return e},e}var A=Object(F.b)(U()),q=function(e){return Object(i.a)({},e)},G=function(){var e=function(){var e=Object(d.useState)({oneCode:"",twoCode:""}),t=Object(c.a)(e,2),n=t[0],a=t[1],r=Object(T.e)(K.getCategoryList),o=Object(c.a)(r,2),l=o[0],u=o[1].category_list,p=void 0===u?[]:u,s=Object(T.e)(K.getCategoryList),b=Object(c.a)(s,2),v=b[0],g=b[1].category_list,f=void 0===g?[]:g;return m.a.useEffect(function(){n.oneCode&&v({parent_id:n.oneCode})},[n.oneCode,v]),[Object(i.a)({},n,{one:p,two:f}),a,l]}(),t=Object(c.a)(e,3),n=t[0],a=t[1],l=t[2],u=Object(d.useState)(!1),p=Object(c.a)(u,2),s=p[0],b=p[1],v=Object(d.useState)({}),g=Object(c.a)(v,2),f=g[0],_=g[1];return Object(i.a)({},n,{setLinkData:a,editClick:function(e){return Object(o.a)(r.a.mark(function t(){var n;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=q(e),_(n),b(!0),t.next=5,l({parent_id:""});case 5:(null===n||void 0===n?void 0:n.p3_id)?a({oneCode:n.p3_id,twoCode:n.p2_id}):a({oneCode:n.p2_id});case 6:case"end":return t.stop()}},t)}))},open:s,setOpen:b,editData:f,setEditData:_})},H=function(e){var t,n=e.oneCode,a=e.twoCode,l=e.one,u=e.two,s=e.setLinkData,b=e.open,v=e.setOpen,g=e.editData,f=e.setEditData,_=e.refreshData,O=void 0===_?function(){}:_,h=Object(d.useState)(),j=Object(c.a)(h,2),y=j[0],C=j[1],E=Object(T.c)(A),F=Object(c.a)(E,3),U=F[0],q=F[2],G=function(){C(null),v(!1),f({}),s({oneCode:"",twoCode:""})},H=function(){var e=Object(o.a)(r.a.mark(function e(){var t,o,i,c,l,u,d,m,p,s,b;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n&&g.c3_id||a&&g.c2_id)){e.next=3;break}return Object(N.b)({message:"\u65e0\u6cd5\u6dfb\u52a0,\u5206\u7c7b\u5c42\u7ea7\u4e0d\u53ef\u8d85\u8fc73\u7ea7"}),e.abrupt("return");case 3:if(!y){e.next=8;break}return e.next=6,Object(D.d)({},[y],"/api/fileUpload");case 6:u=e.sent,t=null!==(o=null===u||void 0===u?void 0:null===(i=u.data)||void 0===i?void 0:null===(c=i.files)||void 0===c?void 0:null===(l=c[0])||void 0===l?void 0:l.url)&&void 0!==o?o:"";case 8:return d=a||n||"",e.next=11,U({data:{id:null===g||void 0===g?void 0:g.id,name:null===g||void 0===g?void 0:g.name,parent_id:d,img_url:t}});case 11:m=e.sent,p=m.save_category,s=p.flag,b=p.msg,s&&(Object(N.b)({message:b||"\u64cd\u4f5c\u6210\u529f"}),O(),G());case 16:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return m.a.createElement(x.Box,{open:b,onClose:G,maxWidth:!1},m.a.createElement(w.a,null,"\u7f16\u8f91\u4ea7\u54c1\u7c7b\u522b"),m.a.createElement(x.Content,null,m.a.createElement("form",null,m.a.createElement(k.a,{label:"\u4e2d\u6587\u540d\u79f0",value:g.name,onChange:function(e){return f(Object(i.a)({},g,{name:e.target.value}))}}),m.a.createElement(x.UploadFormControl,{as:S.a},m.a.createElement($.a,{shrink:!0,htmlFor:"imgUpload"},"\u4e0a\u4f20\u56fe\u7247"),m.a.createElement(L.a,{initSrc:null!==(t=null===g||void 0===g?void 0:g.img_url)&&void 0!==t?t:"",onChange:function(e){C(e)}})),m.a.createElement(B.a,{label:"\u4ea7\u54c1\u7c7b\u522b",placeholder:"\u9009\u62e9\u7c7b\u522b",value:n,onChange:function(e){s(function(t){return Object(i.a)({},t,{oneCode:e.target.value,twoCode:""})})}},null===l||void 0===l?void 0:l.map(function(e){return m.a.createElement(p.a,{key:"typeOptionOne".concat(e.id),value:e.id,disabled:e.id===g.id},e.name)})),m.a.createElement(B.a,{label:"",placeholder:"\u9009\u62e9\u7c7b\u522b",value:a,onChange:function(e){return s(function(t){return Object(i.a)({},t,{twoCode:e.target.value})})}},null===u||void 0===u?void 0:u.map(function(e){return m.a.createElement(p.a,{key:"typeOptionOne".concat(e.id),value:e.id,disabled:e.id===g.id},e.name)})),m.a.createElement(I.a,{loading:q?1:0,color:"primary",variant:"contained",fullWidth:!0,onClick:H},"\u4fdd\u5b58"))))},P=n(69),z=n(147);function W(){var e=Object(l.a)(["\n      query (\n          $parent_id: String,\n          $rows_per_page: Int,\n          $page: Int,\n          $full_parent_id: String\n          $sort_type: String\n      ){\n          category_list(CategoryInput: {\n              parent_id: $parent_id\n              full_parent_id: $full_parent_id\n              rows_per_page: $rows_per_page\n              page: $page\n              sort_type: $sort_type\n          }) {\n              id\n              name\n              parent_id\n              number\n              full_parent_id\n              create_time\n              c2_name\n              c2_id\n              c3_name\n              c3_id\n              p2_name\n              p2_num\n              p2_id\n              p3_num\n              p3_name\n              p3_id\n              img_url\n              is_enable\n          }\n          category_total(CategoryInput: {\n              parent_id: $parent_id\n              full_parent_id: $full_parent_id\n          })\n      }\n  "]);return W=function(){return e},e}n.d(t,"categoryGraphql",function(){return K}),n.d(t,"Category",function(){return M});var J=function(e){return{sort_type:[].concat(Object(u.a)({1:["create_time desc"],2:["create_time asc"],3:["number desc"],4:["number asc"]}[e]),["id"]).join(",")}},K={getCategoryList:Object(F.b)(W())},M=function(e){var t=e.theme,n=Object(j.f)(),a=G(),l=a.editClick,u=m.a.useState({type:"",sort:1}),d=Object(c.a)(u,2),b=d[0],v=d[1],y=Object(T.e)(K.getCategoryList),C=Object(c.a)(y,2),E=C[0],x=C[1].category_list,w=void 0===x?[]:x,k=Object(T.e)(K.getCategoryList),B=Object(c.a)(k,3),N=B[0],S=B[1],$=S.category_list,L=void 0===$?[]:$,F=S.category_total,U=B[2],q=Object(T.e)(K.getCategoryList),W=Object(c.a)(q,2),M=W[0],Q=W[1].category_list,R=void 0===Q?[]:Q,V=Object(T.c)(A),X=Object(c.a)(V,1)[0],Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return N(Object(i.a)({},J(1),b,n.pageData,e))};return m.a.useEffect(function(){N(Object(i.a)({},J(1),{page:0,rows_per_page:10}))},[N]),m.a.useEffect(function(){E({parent_id:""})},[E]),m.a.useEffect(function(){N(Object(i.a)({},J(1),b,n.pageData))},[N,n.pageData,b]),m.a.createElement(g.Box,null,m.a.createElement("header",null,m.a.createElement(g.HeaderBox,null,m.a.createElement("header",null,"\u4ea7\u54c1\u7c7b\u522b"),m.a.createElement("section",null,"\u60a8\u53ef\u4ee5\u8fdb\u884c\u7ba1\u7406"),m.a.createElement("main",null,m.a.createElement(I.a,{variant:"contained",color:"primary",onClick:l({})},"\u65b0\u589e"))),m.a.createElement(g.HeaderBox,null,m.a.createElement("header",null,"\u7c7b\u522b\u7b5b\u9009"),m.a.createElement("main",null,m.a.createElement(h.a,{onChange:function(e){var t;v(Object(i.a)({},b,{full_parent_id:e.target.value,type:e.target.value,typeTwo:""})),(null===e||void 0===e?void 0:null===(t=e.target)||void 0===t?void 0:t.value)&&M({parent_id:e.target.value}),Y({full_parent_id:e.target.value})},value:b.type,clear:1,placeholder:"\u5168\u90e8"},null===w||void 0===w?void 0:w.map(function(e){return m.a.createElement(p.a,{key:"typeOptionOne".concat(e.id),value:e.id},e.name)})),m.a.createElement(h.a,{onChange:function(e){var t,n=null===e||void 0===e?void 0:null===(t=e.target)||void 0===t?void 0:t.value;v(Object(i.a)({},b,{full_parent_id:""===n?b.type:n,typeTwo:n}))},value:b.typeTwo,clear:1,placeholder:"\u5168\u90e8"},R.map(function(e){return m.a.createElement(p.a,{key:"typeOptionTwo".concat(e.id),value:e.id},e.name)})))),m.a.createElement(g.HeaderBox,null,m.a.createElement("header",null,"\u7c7b\u522b\u6392\u5e8f"),m.a.createElement("main",null,m.a.createElement(h.a,{placeholder:"\u9009\u62e9\u6392\u5e8f",value:b.sort,onChange:function(e){v(Object(i.a)({},b,J(e.target.value),{sort:e.target.value}))}},m.a.createElement(p.a,{value:1},"\u6309\u521b\u5efa\u65f6\u95f4-\u964d\u5e8f"),m.a.createElement(p.a,{value:2},"\u6309\u521b\u5efa\u65f6\u95f4-\u5347\u5e8f"),m.a.createElement(p.a,{value:3},"\u6309\u5e8f\u53f7-\u964d\u5e8f"),m.a.createElement(p.a,{value:4},"\u6309\u5e8f\u53f7-\u5347\u5e8f"))))),m.a.createElement("main",null,U?m.a.createElement(g.Loading,null,m.a.createElement(f.a,null)):m.a.createElement(g.Table,{theme:t},m.a.createElement(_.a,null,m.a.createElement(s.a,null,["\u7c7b\u522b\u5e8f\u53f7","\u4e2d\u6587\u540d\u79f0","\u82f1\u6587\u540d\u79f0","\u4ea7\u54c1\u79cd\u7c7b"].map(function(e){return m.a.createElement(P.a,{key:"TableHead".concat(e)},e)}),m.a.createElement(P.a,{width:150},"\u64cd\u4f5c"))),m.a.createElement(O.a,null,null===L||void 0===L?void 0:L.map(function(e){var t;return m.a.createElement(s.a,{key:"TableBody".concat(null===e||void 0===e?void 0:e.id)},m.a.createElement(P.a,null,(null===e||void 0===e?void 0:e.p2_num)?(null===e||void 0===e?void 0:e.p3_num)?"".concat(Object(D.b)(2)(null===e||void 0===e?void 0:e.p3_num)).concat(Object(D.b)(2)(null===e||void 0===e?void 0:e.p2_num)).concat(Object(D.b)(2)(null===e||void 0===e?void 0:e.number)):"".concat(Object(D.b)(2)(null===e||void 0===e?void 0:e.p2_num)).concat(Object(D.b)(2)(null===e||void 0===e?void 0:e.number),"00"):"".concat(Object(D.b)(2)(null===e||void 0===e?void 0:e.number),"0000")),m.a.createElement(P.a,null,null===e||void 0===e?void 0:e.name),m.a.createElement(P.a,null,null===e||void 0===e?void 0:e.name),m.a.createElement(P.a,null,null!==(t=null===e||void 0===e?void 0:e.p2_name)&&void 0!==t?t:"",(null===e||void 0===e?void 0:e.p3_name)?"-".concat(null===e||void 0===e?void 0:e.p3_name):""),m.a.createElement(P.a,null,m.a.createElement(g.ActionTableCell,null,m.a.createElement(I.a,{color:"secondary",onClick:l(e),variant:"contained"},"\u7f16\u8f91"),m.a.createElement(I.a,{color:(null===e||void 0===e?void 0:e.is_enable)?"primary":"default",variant:"contained",onClick:function(){Object(z.b)({message:"\u786e\u5b9a".concat((null===e||void 0===e?void 0:e.is_enable)?"\u505c\u7528":"\u542f\u7528","\u8be5\u7c7b\u522b\u5417"),callBack:function(){var t=Object(o.a)(r.a.mark(function t(n){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,X({data:{id:e.id,is_enable:(null===e||void 0===e?void 0:e.is_enable)?0:1}});case 4:Y();case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()})}},(null===e||void 0===e?void 0:e.is_enable)?"\u505c\u7528":"\u542f\u7528"))))}))),m.a.createElement(j.a,Object.assign({},n,{count:~~F}))),m.a.createElement(H,Object.assign({},a,{refreshData:Y})))};t.default=M},385:function(e,t,n){"use strict";n.d(t,"a",function(){return r});n(0);var a=null!=="/"?"/":"",r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return(null===e||void 0===e?void 0:e.includes("blob:"))?e:a+e}},386:function(e,t,n){"use strict";var a=n(17),r=n(0),o=n.n(r),i=n(16),c=n(121),l=n(508),u=n(93),d=n(47),m={};m.ImgUpload=Object(i.b)("section").withConfig({displayName:"style__ImgUpload",componentId:"sc-1hed22m-0"})([""]),m.Add=Object(i.b)("section").withConfig({displayName:"style__Add",componentId:"sc-1hed22m-1"})(["&&&{border-radius:5px;width:120px;height:90px;display:grid;justify-items:center;align-items:center;background:",";position:relative;> span{display:flex;flex-direction:column;align-items:center;}","}"],c.a[200],function(e){return null===e||void 0===e?void 0:e.mainCss}),m.ImgBox=Object(i.b)("section").withConfig({displayName:"style__ImgBox",componentId:"sc-1hed22m-2"})(["width:100%;height:100%;display:grid;justify-items:center;align-items:center;> img{max-width:100%;max-height:100%;}> svg{display:none;position:absolute;}&:hover{&:after{content:'';position:absolute;width:100%;height:100%;background:",";opacity:.2;}background:",";> svg{display:inline-block;color:",";}}"],l.a[600],l.a[600],u.a.white),m.AddButton=Object(i.b)(d.a).withConfig({displayName:"style__AddButton",componentId:"sc-1hed22m-3"})(["&&{padding:0;}"]);var p=n(509),s=n(510),b=n(39),v=n(427),g=n(385);n.d(t,"a",function(){return f});var f=function(e){var t=e.onChange,n=e.initSrc,r=void 0===n?"":n,i=e.mainCss,c=void 0===i?"":i,l=e.noSetSrc,u=void 0!==l&&l,d=o.a.useState(r),f=Object(a.a)(d,2),_=f[0],O=f[1];return o.a.useEffect(function(){r&&O(r)},[r]),o.a.createElement(m.ImgUpload,null,o.a.createElement(v.a,{beforeUpload:function(e){return u||O(Object(b.j)(e)),t(e),!1}},o.a.createElement(m.AddButton,null,o.a.createElement(m.Add,{mainCss:c},_?o.a.createElement(m.ImgBox,null,o.a.createElement("img",{src:Object(g.a)(_),alt:""}),o.a.createElement(s.a,null)):o.a.createElement("span",null,o.a.createElement(p.a,null),o.a.createElement("span",null,"\u70b9\u51fb\u6dfb\u52a0"))))))}},387:function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"b",function(){return u});var a=n(83),r=n(62);function o(){var e=Object(a.a)(["\n    mutation ($data: ProductInput) {\n        save_product(ProductInput: $data) {\n            msg\n            flag\n            product {\n                id\n            }\n        }\n    }\n"]);return o=function(){return e},e}function i(){var e=Object(a.a)(["\n    query ($id: String) {\n        category_origin(id: $id) {\n            id number c2_id c2_name c3_id c3_name\n            c2_number c3_number\n        }\n    }\n"]);return i=function(){return e},e}function c(){var e=Object(a.a)(["\n    query ($data: ProductInput) {\n        product_list(ListInput: $data) {\n            id name number is_hot is_new stock price_in is_enable\n            price_market price_out weight unit brand category_id\n            c1_id c1_number c2_id c2_name c3_id c3_name\n            c2_number c3_number is_group group_amount group_precision\n            group_remark\n            imgs { id url number }\n        }\n        product_total(ListInput: $data)\n    }\n  "]);return c=function(){return e},e}var l={getList:Object(r.b)(c())},u=(Object(r.b)(i()),Object(r.b)(o()))},396:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(16),i=n(315),c={};c.Box=Object(o.b)(i.a).withConfig({displayName:"style__Box",componentId:"sc-1u4tbl4-0"})(["> div > div{min-height:19px;}"]);var l=n(189),u=n(317),d=n(381);n.d(t,"a",function(){return p});var m=Object(o.b)(l.a).withConfig({displayName:"CusSelect__BootstrapInput",componentId:"sc-1ujzrvb-0"})(["& > div{border-radius:4px;position:relative;background-color:",";border:0;font-size:16px;width:100%;padding:7px 26px 6px 12px;&:focus{border-radius:4px;border-color:#80bdff;box-shadow:0 0 0 0.2rem rgba(0,123,255,0.25);}}"],function(e){var t,n=e.theme;return null===n||void 0===n?void 0:null===(t=n.palette)||void 0===t?void 0:t.formBackground}),p=Object(u.a)(function(e){var t;return r.a.createElement(c.Box,Object.assign({displayEmpty:!0,input:r.a.createElement(m,Object.assign({},e,{name:e.name,id:e.id}))},e,{value:e.value||""}),e.placeholder&&r.a.createElement(d.a,{value:"",disabled:!(null!==(t=null===e||void 0===e?void 0:e.clear)&&void 0!==t&&t)},e.placeholder),e.children)})},401:function(e,t,n){"use strict";var a=n(402),r=n(0),o=n.n(r),i=n(145),c={};c.Box=i.a.TextFieldBox;var l=n(396),u=n(308),d=n(306),m=n(305);n.d(t,"a",function(){return p});var p=function(e){var t=e.helperText,n=Object(a.a)(e,["helperText"]);return o.a.createElement(c.Box,Object.assign({},n,{as:m.a}),o.a.createElement(d.a,{shrink:!0,htmlFor:n.id},n.label),o.a.createElement(l.a,Object.assign({},n,{value:n.value||""})),t&&o.a.createElement(u.a,Object.assign({},n,{id:"my-helper-text"}),t))}},447:function(e,t,n){"use strict";var a=n(48),r=n(61),o=n(14),i=n.n(o),c=n(19),l=n(13),u=n(17),d=n(0),m=n.n(d),p=n(16),s=n(316),b=n(311),v=n(145),g={};g.Box=Object(p.b)(s.a).withConfig({displayName:"style__Box",componentId:"c6bdki-0"})([""]),g.Content=Object(p.b)(b.a).withConfig({displayName:"style__Content",componentId:"c6bdki-1"})(["&&&{width:960px;> form{display:grid;grid-auto-flow:column;grid-template-rows:repeat(11,minmax(48px,auto));grid-template-columns:1fr 1fr;grid-column-gap:20px;margin-bottom:20px;> button{grid-area:12 / 1 / 13 / 3;}}}"]),g.FieldTwoBox=Object(p.b)("section").withConfig({displayName:"style__FieldTwoBox",componentId:"c6bdki-2"})(["&{display:grid;grid-template-columns:1fr 1fr;grid-column-gap:25px;}"]),g.UploadBox=Object(p.b)("main").withConfig({displayName:"style__UploadBox",componentId:"c6bdki-3"})(["&{display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(3,1fr) 40px;grid-gap:8px;> span{grid-area:4 / 1 / 5 / 4;}}"]),g.UploadFormControl=Object(p.b)(v.a.TextFieldBox).withConfig({displayName:"style__UploadFormControl",componentId:"c6bdki-4"})(["grid-area:6 / 2 / 12 / 3;"]);var f=n(310),_=n(95),O=n(401),h=n(381),j=n(47),y=n(30),C=n(305),E=n(306),x=n(497),w=n(490),k=n(386),B=n(39),I=n(327),N=n(84),T=n(387),S=n(49),$=n(59);n.d(t,"c",function(){return L}),n.d(t,"b",function(){return F}),n.d(t,"a",function(){return U});var L=function(){var e=Object(d.useState)({oneCode:"",twoCode:"",threeCode:""}),t=Object(u.a)(e,2),n=t[0],a=t[1],r=Object(N.e)(I.categoryGraphql.getCategoryList),o=Object(u.a)(r,2),i=o[0],c=o[1].category_list,p=void 0===c?[]:c,s=Object(N.e)(I.categoryGraphql.getCategoryList),b=Object(u.a)(s,2),v=b[0],g=b[1].category_list,f=void 0===g?[]:g,_=Object(N.e)(I.categoryGraphql.getCategoryList),O=Object(u.a)(_,2),h=O[0],j=O[1].category_list,y=void 0===j?[]:j;return m.a.useEffect(function(){n.oneCode&&v({parent_id:n.oneCode})},[n.oneCode,v]),m.a.useEffect(function(){n.twoCode&&h({parent_id:n.twoCode})},[n.twoCode,h]),[Object(l.a)({},n,{one:p,two:f,three:y}),a,{getOne:i,getTwo:v,getThree:h}]},D=function(e){return e},F=function(){var e=L(),t=Object(u.a)(e,3),n=t[0],a=t[1],r=t[2],o=r.getOne,m=r.getTwo,p=r.getThree,s=Object(d.useState)(!1),b=Object(u.a)(s,2),v=b[0],g=b[1],f=Object(d.useState)({}),_=Object(u.a)(f,2),O=_[0],h=_[1];return Object(l.a)({},n,{setLinkData:a,editClick:function(e){return Object(c.a)(i.a.mark(function t(){var n,r;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return g(!0),t.next=3,o({parent_id:""});case 3:if(n=D(e),!e.category_id){t.next=13;break}return t.next=7,m({parent_id:e.c3_id});case 7:return t.next=9,p({parent_id:e.c2_id});case 9:h(Object(l.a)({},n,{num:"".concat(e.c3_number,"-").concat(e.c2_number,"-").concat(e.c1_number,"-").concat(null!==(r=e.number)&&void 0!==r?r:"")})),a({oneCode:e.c3_id,twoCode:e.c2_id,threeCode:e.c1_id}),t.next=14;break;case 13:h(n);case 14:case"end":return t.stop()}},t)}))},open:v,setOpen:g,editData:O,setEditData:h})},U=function(e){var t,n,o,p=e.oneCode,s=e.twoCode,b=e.one,I=e.two,L=e.threeCode,D=e.three,F=e.setLinkData,U=e.open,A=e.setOpen,q=e.editData,G=e.setEditData,H=e.refreshData,P=void 0===H?function(){}:H,z=Object($.g)(),W=null!==(t=~~(null===z||void 0===z?void 0:z.is_group))&&void 0!==t?t:-1,J=Object(N.c)(T.b),K=Object(u.a)(J,3),M=K[0],Q=K[2],R=Object(d.useState)({oneNum:"",twoNum:"",threeNum:""}),V=Object(u.a)(R,2),X=V[0],Y=V[1],Z=function(){F({oneCode:"",twoCode:"",threeCode:""}),re({}),A(!1),G({})},ee=function(){var e=Object(c.a)(i.a.mark(function e(){var t,n,a,r,o,c,u,d;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=Object.keys(ae)).length){e.next=6;break}return e.next=4,Object(B.d)({},t.map(function(e){return ae[e]}),"/api/fileUpload");case 4:c=e.sent,n=null!==(a=null===c||void 0===c?void 0:null===(r=c.data)||void 0===r?void 0:null===(o=r.files)||void 0===o?void 0:o.map(function(e,n){return{number:~~t[n],url:null===e||void 0===e?void 0:e.url,name:null===e||void 0===e?void 0:e.originalName}}))&&void 0!==a?a:[];case 6:return e.next=8,M({data:Object(l.a)({},Object(S.pick)(q,["id","name","remark","is_hot","is_new","stock","unit","weight","price_in","price_out","price_market","brand","is_group","group_amount","group_precision","group_remark"]),{category_id:L,imgs:n})});case 8:u=e.sent,(d=u.save_product).flag&&(Object(y.b)({message:(null===d||void 0===d?void 0:d.msg)||"\u64cd\u4f5c\u6210\u529f"}),Z(),P());case 11:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();m.a.useEffect(function(){var e,t,n;Y({oneNum:null!==(e=q.c3_number)&&void 0!==e?e:"",twoNum:null!==(t=q.c2_number)&&void 0!==t?t:"",threeNum:null!==(n=q.c1_number)&&void 0!==n?n:""})},[q.c1_number,q.c2_number,q.c3_number]),m.a.useEffect(function(){(X.oneNum||X.twoNum||X.threeNum)&&G(function(e){var t;return Object(l.a)({},e,{num:"".concat(X.oneNum,"-").concat(X.twoNum,"-").concat(X.threeNum,"-").concat(null!==(t=q.number)&&void 0!==t?t:"")||""})})},[q.number,G,X]);var te=Object(d.useState)({}),ne=Object(u.a)(te,2),ae=ne[0],re=ne[1];return m.a.createElement(g.Box,{open:U,onClose:Z,maxWidth:!1},m.a.createElement(f.a,null,"\u65b0\u589e\u4ea7\u54c1"),m.a.createElement(g.Content,null,m.a.createElement("form",null,m.a.createElement(_.a,{InputProps:{readOnly:!0},label:"\u4ea7\u54c1\u7f16\u53f7",value:q.num}),m.a.createElement(O.a,{label:"",placeholder:"\u9009\u62e9\u7c7b\u522b",value:p,onChange:function(e,t){F(function(t){return Object(l.a)({},t,{oneCode:e.target.value,twoCode:"",threeCode:""})}),Y(function(e){return Object(l.a)({},e,{oneNum:t.props.num})})}},null===b||void 0===b?void 0:b.map(function(e){return m.a.createElement(h.a,{key:"typeOptionOne".concat(e.id),value:null===e||void 0===e?void 0:e.id,num:null===e||void 0===e?void 0:e.number},e.name)})),m.a.createElement(O.a,{label:"",placeholder:"\u9009\u62e9\u7c7b\u522b",value:s,onChange:function(e,t){F(function(t){return Object(l.a)({},t,{twoCode:e.target.value,threeCode:""})}),Y(function(e){return Object(l.a)({},e,{twoNum:t.props.num})})}},null===I||void 0===I?void 0:I.map(function(e){return m.a.createElement(h.a,{key:"typeOptionOne".concat(e.id),value:e.id,num:null===e||void 0===e?void 0:e.number},e.name)})),m.a.createElement(O.a,{label:"",placeholder:"\u9009\u62e9\u7c7b\u522b",value:L,onChange:function(e,t){F(function(t){return Object(l.a)({},t,{threeCode:e.target.value})}),Y(function(e){return Object(l.a)({},e,{threeNum:t.props.num})})}},null===D||void 0===D?void 0:D.map(function(e){return m.a.createElement(h.a,{key:"typeOptionOne".concat(e.id),value:e.id,num:null===e||void 0===e?void 0:e.number},e.name)})),m.a.createElement(_.a,{label:"\u4e2d\u6587\u540d\u79f0",value:q.name,onChange:function(e){return G(Object(l.a)({},q,{name:e.target.value}))}}),m.a.createElement(v.a.TextFieldBox,{as:C.a},m.a.createElement(E.a,{shrink:!0,htmlFor:"tag"},"\u4e0a\u67b6\u7c7b\u578b"),m.a.createElement(w.a,{control:m.a.createElement(x.a,{checked:!!q.is_new||!1,onChange:function(e){return G(Object(l.a)({},q,{is_new:e.target.checked?1:0}))}}),label:"\u65b0\u54c1"}),m.a.createElement(w.a,{control:m.a.createElement(x.a,{checked:null!==(n=!!q.is_hot)&&void 0!==n&&n,onChange:function(e){return G(Object(l.a)({},q,{is_hot:e.target.checked?1:0}))}}),label:"\u70ed\u95e8"})),m.a.createElement(_.a,{label:"\u5e93\u5b58",type:"number",value:q.stock,onChange:function(e){return G(Object(l.a)({},q,{stock:Object(B.k)(e.target.value)}))}}),m.a.createElement(_.a,{label:"\u8fdb\u8d27\u4ef7\u683c",type:"number",value:q.price_in,onChange:function(e){return G(Object(l.a)({},q,{price_in:Object(B.k)(e.target.value)}))}}),m.a.createElement(_.a,{label:"\u54c1\u724c\u540d\u79f0",value:q.brand,onChange:function(e){return G(Object(l.a)({},q,{brand:e.target.value}))}}),m.a.createElement(_.a,{label:"\u5e02\u573a\u4ef7\u683c",type:"number",value:q.price_market,onChange:function(e){return G(Object(l.a)({},q,{price_market:Object(B.k)(e.target.value)}))}}),m.a.createElement(_.a,{label:"\u552e\u5356\u4ef7\u683c",type:"number",value:q.price_out,onChange:function(e){return G(Object(l.a)({},q,{price_out:Object(B.k)(e.target.value)}))}}),m.a.createElement(g.FieldTwoBox,null,m.a.createElement(_.a,{label:"\u91cd\u91cf",type:"number",value:q.weight,onChange:function(e){return G(Object(l.a)({},q,{weight:Object(B.k)(e.target.value)}))}}),m.a.createElement(O.a,{label:"\u5355\u4f4d",value:q.unit,onChange:function(e){return G(Object(l.a)({},q,{unit:e.target.value}))}},null===(o=[["g","\u514b/g"]])||void 0===o?void 0:o.map(function(e){return m.a.createElement(h.a,{key:"unit".concat(e[0]),value:e[0]},e[1])}))),1===W?m.a.createElement(m.a.Fragment,null,m.a.createElement(_.a,{label:"\u62fc\u56e2\u6570\u91cf",type:"number",value:q.group_amount,onChange:function(e){return G(Object(l.a)({},q,{group_amount:Object(B.k)(e.target.value)}))}}),m.a.createElement(_.a,{label:"\u62fc\u56e2\u7cbe\u5ea6",type:"number",value:q.group_precision,onChange:function(e){return G(Object(l.a)({},q,{group_precision:Object(B.k)(e.target.value)}))}}),m.a.createElement(_.a,{label:"\u62fc\u56e2\u63cf\u8ff0",value:q.group_remark,placeholder:"\u6574\u7bb1",onChange:function(e){return G(Object(l.a)({},q,{group_remark:e.target.value}))}})):"",m.a.createElement(g.UploadFormControl,{as:C.a},m.a.createElement(E.a,{shrink:!0,htmlFor:"imgUpload"},"\u4e0a\u4f20\u56fe\u7247"),m.a.createElement(g.UploadBox,null,Object(a.a)(Array(7).keys()).map(function(e){var t,n,a,o;return m.a.createElement(k.a,{key:"ImgUpload".concat(e),initSrc:null!==(t=(null===q||void 0===q?void 0:q.imgs)&&(null===q||void 0===q?void 0:null===(n=q.imgs)||void 0===n?void 0:null===(a=n.find(function(t){return t.number===~~e}))||void 0===a?void 0:a.url))&&void 0!==t?t:"",onChange:(o=e,function(e){re(Object(l.a)({},ae,Object(r.a)({},o,e)))})})}),m.a.createElement("span",null,"\u6700\u591a\u652f\u6301\u4e0a\u4f207\u5f20\u56fe\u7247,\u6bcf\u5f20\u56fe\u7247\u5927\u5c0f\u4e0d\u8d85\u8fc71m,\u6587\u4ef6\u683c\u5f0f\u4ec5\u652f\u6301PNG/JPG"))),m.a.createElement(j.a,{loading:Q?1:0,color:"primary",variant:"contained",fullWidth:!0,onClick:ee},"\u4fdd\u5b58"))))}}}]);