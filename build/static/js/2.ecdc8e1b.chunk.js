(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{326:function(e,t,n){"use strict";n.r(t);var a=n(14),o=n.n(a),r=n(19),i=n(13),l=n(17),c=n(69),u=n(48),d=n(0),m=n.n(d),p=n(381),s=n(373),v=n(16),b=n(187),g={};g.Box=Object(v.b)("div").withConfig({displayName:"style__Box",componentId:"lv66y5-0"})(["margin:20px;> header{display:flex;flex-direction:row;> section{flex:1;}}"]),g.Table=Object(v.b)(b.a).withConfig({displayName:"style__Table",componentId:"lv66y5-1"})(["&&&{margin-top:20px;border-radius:5px;border-collapse:initial;overflow:hidden;border:1px solid rgba(224,224,224,1);> thead{background:",";> tr > th{color:",";}}}"],function(e){return e.theme.palette.grey[800]},function(e){return e.theme.palette.common.white}),g.Loading=Object(v.b)("section").withConfig({displayName:"style__Loading",componentId:"lv66y5-2"})(["text-align:center;"]),g.ActionTableCell=Object(v.b)("section").withConfig({displayName:"style__ActionTableCell",componentId:"lv66y5-3"})(["&&&{display:flex;> button{margin-right:8px;&:last-of-type{margin-right:0;}}}"]),g.HeaderBox=Object(v.b)("section").withConfig({displayName:"style__HeaderBox",componentId:"lv66y5-4"})(["&&&{display:flex;flex-direction:column;> header{font-size:20px;font-weight:bold;margin-bottom:15px;}> section{font-weight:bold;font-size:14px;margin-bottom:10px;}> main{> div{margin-right:8px;}}}"]);var f=n(369),_=n(372),O=n(374),h=n(396),y=n(94),j=n(316),C=n(311),E=n(145),x={};x.Box=Object(v.b)(j.a).withConfig({displayName:"style__Box",componentId:"okjugs-0"})([""]),x.Content=Object(v.b)(C.a).withConfig({displayName:"style__Content",componentId:"okjugs-1"})(["&&&{width:660px;> form{margin-bottom:20px;}}"]),x.UploadFormControl=E.a.TextFieldBox;var w=n(310),k=n(95),B=n(401),L=n(47),T=n(30),I=n(85),N=n(305),U=n(306),D=n(386),S=n(39),$=n(53);function F(){var e=Object(c.a)(["\n    mutation ($data: CategoryInput){\n        save_category(Category: $data) {\n            flag\n            msg\n            category {\n                id\n                name\n            }\n        }\n    }\n"]);return F=function(){return e},e}var A=Object($.b)(F()),P=function(e){return Object(i.a)({},e)},q=function(){var e=function(){var e=Object(d.useState)({oneCode:"",twoCode:""}),t=Object(l.a)(e,2),n=t[0],a=t[1],o=Object(I.e)(M.getCategoryList),r=Object(l.a)(o,2),c=r[0],u=r[1].category_list,p=void 0===u?[]:u,s=Object(I.e)(M.getCategoryList),v=Object(l.a)(s,2),b=v[0],g=v[1].category_list,f=void 0===g?[]:g;return m.a.useEffect(function(){n.oneCode&&b({parent_id:n.oneCode})},[n.oneCode,b]),[Object(i.a)({},n,{one:p,two:f}),a,c]}(),t=Object(l.a)(e,3),n=t[0],a=t[1],c=t[2],u=Object(d.useState)(!1),p=Object(l.a)(u,2),s=p[0],v=p[1],b=Object(d.useState)({}),g=Object(l.a)(b,2),f=g[0],_=g[1];return Object(i.a)({},n,{setLinkData:a,editClick:function(e){return Object(r.a)(o.a.mark(function t(){var n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=P(e),_(n),v(!0),t.next=5,c({parent_id:""});case 5:(null===n||void 0===n?void 0:n.p3_id)?a({oneCode:n.p3_id,twoCode:n.p2_id}):a({oneCode:n.p2_id});case 6:case"end":return t.stop()}},t)}))},open:s,setOpen:v,editData:f,setEditData:_})},G=function(e){var t,n=e.oneCode,a=e.twoCode,c=e.one,u=e.two,s=e.setLinkData,v=e.open,b=e.setOpen,g=e.editData,f=e.setEditData,_=e.refreshData,O=void 0===_?function(){}:_,h=Object(d.useState)(),y=Object(l.a)(h,2),j=y[0],C=y[1],E=Object(I.c)(A),$=Object(l.a)(E,3),F=$[0],P=$[2],q=function(){C(null),b(!1),f({}),s({oneCode:"",twoCode:""})},G=function(){var e=Object(r.a)(o.a.mark(function e(){var t,r,i,l,c,u,d,m,p,s,v;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n&&g.c3_id||a&&g.c2_id)){e.next=3;break}return Object(T.b)({message:"\u65e0\u6cd5\u6dfb\u52a0,\u5206\u7c7b\u5c42\u7ea7\u4e0d\u53ef\u8d85\u8fc73\u7ea7"}),e.abrupt("return");case 3:if(!j){e.next=8;break}return e.next=6,Object(S.d)({},[j],"/api/fileUpload");case 6:u=e.sent,t=null!==(r=null===u||void 0===u?void 0:null===(i=u.data)||void 0===i?void 0:null===(l=i.files)||void 0===l?void 0:null===(c=l[0])||void 0===c?void 0:c.url)&&void 0!==r?r:"";case 8:return d=a||n||"",e.next=11,F({data:{id:null===g||void 0===g?void 0:g.id,name:null===g||void 0===g?void 0:g.name,parent_id:d,img_url:t}});case 11:m=e.sent,p=m.save_category,s=p.flag,v=p.msg,s&&(Object(T.b)({message:v||"\u64cd\u4f5c\u6210\u529f"}),O(),q());case 16:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return m.a.createElement(x.Box,{open:v,onClose:q,maxWidth:!1},m.a.createElement(w.a,null,"\u7f16\u8f91\u4ea7\u54c1\u7c7b\u522b"),m.a.createElement(x.Content,null,m.a.createElement("form",null,m.a.createElement(k.a,{label:"\u4e2d\u6587\u540d\u79f0",value:g.name,onChange:function(e){return f(Object(i.a)({},g,{name:e.target.value}))}}),m.a.createElement(x.UploadFormControl,{as:N.a},m.a.createElement(U.a,{shrink:!0,htmlFor:"imgUpload"},"\u4e0a\u4f20\u56fe\u7247"),m.a.createElement(D.a,{initSrc:null!==(t=null===g||void 0===g?void 0:g.img_url)&&void 0!==t?t:"",onChange:function(e){C(e)}})),m.a.createElement(B.a,{label:"\u4ea7\u54c1\u7c7b\u522b",placeholder:"\u9009\u62e9\u7c7b\u522b",value:n,onChange:function(e){s(function(t){return Object(i.a)({},t,{oneCode:e.target.value,twoCode:""})})}},null===c||void 0===c?void 0:c.map(function(e){return m.a.createElement(p.a,{key:"typeOptionOne".concat(e.id),value:e.id,disabled:e.id===g.id},e.name)})),m.a.createElement(B.a,{label:"",placeholder:"\u9009\u62e9\u7c7b\u522b",value:a,onChange:function(e){return s(function(t){return Object(i.a)({},t,{twoCode:e.target.value})})}},null===u||void 0===u?void 0:u.map(function(e){return m.a.createElement(p.a,{key:"typeOptionOne".concat(e.id),value:e.id,disabled:e.id===g.id},e.name)})),m.a.createElement(L.a,{loading:P?1:0,color:"primary",variant:"contained",fullWidth:!0,onClick:G},"\u4fdd\u5b58"))))},H=n(70),W=n(147);function z(){var e=Object(c.a)(["\n      query (\n          $parent_id: String,\n          $rows_per_page: Int,\n          $page: Int,\n          $full_parent_id: String\n          $sort_type: String\n      ){\n          category_list(CategoryInput: {\n              parent_id: $parent_id\n              full_parent_id: $full_parent_id\n              rows_per_page: $rows_per_page\n              page: $page\n              sort_type: $sort_type\n          }) {\n              id\n              name\n              parent_id\n              number\n              full_parent_id\n              create_time\n              c2_name\n              c2_id\n              c3_name\n              c3_id\n              p2_name\n              p2_num\n              p2_id\n              p3_num\n              p3_name\n              p3_id\n              img_url\n              is_enable\n          }\n          category_total(CategoryInput: {\n              parent_id: $parent_id\n              full_parent_id: $full_parent_id\n          })\n      }\n  "]);return z=function(){return e},e}n.d(t,"categoryGraphql",function(){return M}),n.d(t,"Category",function(){return K});var J=function(e){return{sort_type:[].concat(Object(u.a)({1:["create_time desc"],2:["create_time asc"],3:["number desc"],4:["number asc"]}[e]),["id"]).join(",")}},M={getCategoryList:Object($.b)(z())},K=function(e){var t=e.theme,n=Object(y.f)(),a=q(),c=a.editClick,u=m.a.useState({type:"",sort:1}),d=Object(l.a)(u,2),v=d[0],b=d[1],j=Object(I.e)(M.getCategoryList),C=Object(l.a)(j,2),E=C[0],x=C[1].category_list,w=void 0===x?[]:x,k=Object(I.e)(M.getCategoryList),B=Object(l.a)(k,3),T=B[0],N=B[1],U=N.category_list,D=void 0===U?[]:U,$=N.category_total,F=B[2],P=Object(I.e)(M.getCategoryList),z=Object(l.a)(P,2),K=z[0],Q=z[1].category_list,R=void 0===Q?[]:Q,V=Object(I.c)(A),X=Object(l.a)(V,1)[0],Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return T(Object(i.a)({},J(1),v,n.pageData,e))};return m.a.useEffect(function(){T(Object(i.a)({},J(1),{page:0,rows_per_page:10}))},[T]),m.a.useEffect(function(){E({parent_id:""})},[E]),m.a.useEffect(function(){T(Object(i.a)({},J(1),v,n.pageData))},[T,n.pageData,v]),m.a.createElement(g.Box,null,m.a.createElement("header",null,m.a.createElement(g.HeaderBox,null,m.a.createElement("header",null,"\u4ea7\u54c1\u7c7b\u522b"),m.a.createElement("section",null,"\u60a8\u53ef\u4ee5\u8fdb\u884c\u7ba1\u7406"),m.a.createElement("main",null,m.a.createElement(L.a,{variant:"contained",color:"primary",onClick:c({})},"\u65b0\u589e"))),m.a.createElement(g.HeaderBox,null,m.a.createElement("header",null,"\u7c7b\u522b\u7b5b\u9009"),m.a.createElement("main",null,m.a.createElement(h.a,{onChange:function(e){var t;b(Object(i.a)({},v,{full_parent_id:e.target.value,type:e.target.value,typeTwo:""})),(null===e||void 0===e?void 0:null===(t=e.target)||void 0===t?void 0:t.value)&&K({parent_id:e.target.value}),Y({full_parent_id:e.target.value})},value:v.type,clear:1,placeholder:"\u5168\u90e8"},null===w||void 0===w?void 0:w.map(function(e){return m.a.createElement(p.a,{key:"typeOptionOne".concat(e.id),value:e.id},e.name)})),m.a.createElement(h.a,{onChange:function(e){var t,n=null===e||void 0===e?void 0:null===(t=e.target)||void 0===t?void 0:t.value;b(Object(i.a)({},v,{full_parent_id:""===n?v.type:n,typeTwo:n}))},value:v.typeTwo,clear:1,placeholder:"\u5168\u90e8"},R.map(function(e){return m.a.createElement(p.a,{key:"typeOptionTwo".concat(e.id),value:e.id},e.name)})))),m.a.createElement(g.HeaderBox,null,m.a.createElement("header",null,"\u7c7b\u522b\u6392\u5e8f"),m.a.createElement("main",null,m.a.createElement(h.a,{placeholder:"\u9009\u62e9\u6392\u5e8f",value:v.sort,onChange:function(e){b(Object(i.a)({},v,J(e.target.value),{sort:e.target.value}))}},m.a.createElement(p.a,{value:1},"\u6309\u521b\u5efa\u65f6\u95f4-\u964d\u5e8f"),m.a.createElement(p.a,{value:2},"\u6309\u521b\u5efa\u65f6\u95f4-\u5347\u5e8f"),m.a.createElement(p.a,{value:3},"\u6309\u5e8f\u53f7-\u964d\u5e8f"),m.a.createElement(p.a,{value:4},"\u6309\u5e8f\u53f7-\u5347\u5e8f"))))),m.a.createElement("main",null,F?m.a.createElement(g.Loading,null,m.a.createElement(f.a,null)):m.a.createElement(g.Table,{theme:t},m.a.createElement(_.a,null,m.a.createElement(s.a,null,["\u7c7b\u522b\u5e8f\u53f7","\u4e2d\u6587\u540d\u79f0","\u82f1\u6587\u540d\u79f0","\u4ea7\u54c1\u79cd\u7c7b"].map(function(e){return m.a.createElement(H.a,{key:"TableHead".concat(e)},e)}),m.a.createElement(H.a,{width:150},"\u64cd\u4f5c"))),m.a.createElement(O.a,null,null===D||void 0===D?void 0:D.map(function(e){var t;return m.a.createElement(s.a,{key:"TableBody".concat(null===e||void 0===e?void 0:e.id)},m.a.createElement(H.a,null,(null===e||void 0===e?void 0:e.p2_num)?(null===e||void 0===e?void 0:e.p3_num)?"".concat(Object(S.b)(2)(null===e||void 0===e?void 0:e.p3_num)).concat(Object(S.b)(2)(null===e||void 0===e?void 0:e.p2_num)).concat(Object(S.b)(2)(null===e||void 0===e?void 0:e.number)):"".concat(Object(S.b)(2)(null===e||void 0===e?void 0:e.p2_num)).concat(Object(S.b)(2)(null===e||void 0===e?void 0:e.number),"00"):"".concat(Object(S.b)(2)(null===e||void 0===e?void 0:e.number),"0000")),m.a.createElement(H.a,null,null===e||void 0===e?void 0:e.name),m.a.createElement(H.a,null,null===e||void 0===e?void 0:e.name),m.a.createElement(H.a,null,null!==(t=null===e||void 0===e?void 0:e.p2_name)&&void 0!==t?t:"",(null===e||void 0===e?void 0:e.p3_name)?"-".concat(null===e||void 0===e?void 0:e.p3_name):""),m.a.createElement(H.a,null,m.a.createElement(g.ActionTableCell,null,m.a.createElement(L.a,{color:"secondary",onClick:c(e),variant:"contained"},"\u7f16\u8f91"),m.a.createElement(L.a,{color:(null===e||void 0===e?void 0:e.is_enable)?"primary":"default",variant:"contained",onClick:function(){Object(W.b)({message:"\u786e\u5b9a".concat((null===e||void 0===e?void 0:e.is_enable)?"\u505c\u7528":"\u542f\u7528","\u8be5\u7c7b\u522b\u5417"),callBack:function(){var t=Object(r.a)(o.a.mark(function t(n){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,X({data:{id:e.id,is_enable:(null===e||void 0===e?void 0:e.is_enable)?0:1}});case 4:Y();case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()})}},(null===e||void 0===e?void 0:e.is_enable)?"\u505c\u7528":"\u542f\u7528"))))}))),m.a.createElement(y.a,Object.assign({},n,{count:~~$}))),m.a.createElement(G,Object.assign({},a,{refreshData:Y})))};t.default=K},385:function(e,t,n){"use strict";n.d(t,"a",function(){return o});n(0);var a=null!=="/"?"/":"",o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return(null===e||void 0===e?void 0:e.includes("blob:"))?e:a+e}},386:function(e,t,n){"use strict";var a=n(17),o=n(0),r=n.n(o),i=n(16),l=n(121),c=n(507),u=n(93),d=n(47),m={};m.ImgUpload=Object(i.b)("section").withConfig({displayName:"style__ImgUpload",componentId:"sc-1hed22m-0"})([""]),m.Add=Object(i.b)("section").withConfig({displayName:"style__Add",componentId:"sc-1hed22m-1"})(["&&&{border-radius:5px;width:120px;height:90px;display:grid;justify-items:center;align-items:center;background:",";position:relative;> span{display:flex;flex-direction:column;align-items:center;}","}"],l.a[200],function(e){return null===e||void 0===e?void 0:e.mainCss}),m.ImgBox=Object(i.b)("section").withConfig({displayName:"style__ImgBox",componentId:"sc-1hed22m-2"})(["width:100%;height:100%;display:grid;justify-items:center;align-items:center;> img{max-width:100%;max-height:100%;}> svg{display:none;position:absolute;}&:hover{&:after{content:'';position:absolute;width:100%;height:100%;background:",";opacity:.2;}background:",";> svg{display:inline-block;color:",";}}"],c.a[600],c.a[600],u.a.white),m.AddButton=Object(i.b)(d.a).withConfig({displayName:"style__AddButton",componentId:"sc-1hed22m-3"})(["&&{padding:0;}"]);var p=n(508),s=n(509),v=n(39),b=n(428),g=n(385);n.d(t,"a",function(){return f});var f=function(e){var t=e.onChange,n=e.initSrc,o=void 0===n?"":n,i=e.mainCss,l=void 0===i?"":i,c=e.noSetSrc,u=void 0!==c&&c,d=r.a.useState(o),f=Object(a.a)(d,2),_=f[0],O=f[1];return r.a.useEffect(function(){o&&O(o)},[o]),r.a.createElement(m.ImgUpload,null,r.a.createElement(b.a,{beforeUpload:function(e){return u||O(Object(v.j)(e)),t(e),!1}},r.a.createElement(m.AddButton,null,r.a.createElement(m.Add,{mainCss:l},_?r.a.createElement(m.ImgBox,null,r.a.createElement("img",{src:Object(g.a)(_),alt:""}),r.a.createElement(s.a,null)):r.a.createElement("span",null,r.a.createElement(p.a,null),r.a.createElement("span",null,"\u70b9\u51fb\u6dfb\u52a0"))))))}},387:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"b",function(){return u});var a=n(69),o=n(53);function r(){var e=Object(a.a)(["\n    mutation ($data: ProductInput) {\n        save_product(ProductInput: $data) {\n            msg\n            flag\n            product {\n                id\n            }\n        }\n    }\n"]);return r=function(){return e},e}function i(){var e=Object(a.a)(["\n    query ($id: String) {\n        category_origin(id: $id) {\n            id number c2_id c2_name c3_id c3_name\n            c2_number c3_number\n        }\n    }\n"]);return i=function(){return e},e}function l(){var e=Object(a.a)(["\n    query ($data: ProductInput) {\n        product_list(ListInput: $data) {\n            id name number is_hot is_new stock price_in is_enable\n            price_market price_out weight unit brand category_id\n            c1_id c1_number c2_id c2_name c3_id c3_name\n            c2_number c3_number is_group group_amount group_precision\n            group_remark shelvesTypes\n            imgs { id url number }\n        }\n        product_total(ListInput: $data)\n    }\n  "]);return l=function(){return e},e}var c={getList:Object(o.b)(l())},u=(Object(o.b)(i()),Object(o.b)(r()))},396:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(16),i=n(315),l={};l.Box=Object(r.b)(i.a).withConfig({displayName:"style__Box",componentId:"sc-1u4tbl4-0"})(["> div > div{min-height:19px;}"]);var c=n(189),u=n(317),d=n(381);n.d(t,"a",function(){return p});var m=Object(r.b)(c.a).withConfig({displayName:"CusSelect__BootstrapInput",componentId:"sc-1ujzrvb-0"})(["& > div{border-radius:4px;position:relative;background-color:",";border:0;font-size:16px;width:100%;padding:7px 26px 6px 12px;&:focus{border-radius:4px;border-color:#80bdff;box-shadow:0 0 0 0.2rem rgba(0,123,255,0.25);}}"],function(e){var t,n=e.theme;return null===n||void 0===n?void 0:null===(t=n.palette)||void 0===t?void 0:t.formBackground}),p=Object(u.a)(function(e){var t;return o.a.createElement(l.Box,Object.assign({displayEmpty:!0,input:o.a.createElement(m,Object.assign({},e,{name:e.name,id:e.id}))},e,{value:e.value||""}),e.placeholder&&o.a.createElement(d.a,{value:"",disabled:!(null!==(t=null===e||void 0===e?void 0:e.clear)&&void 0!==t&&t)},e.placeholder),e.children)})},401:function(e,t,n){"use strict";var a=n(402),o=n(0),r=n.n(o),i=n(145),l={};l.Box=i.a.TextFieldBox;var c=n(396),u=n(308),d=n(306),m=n(305);n.d(t,"a",function(){return p});var p=function(e){var t=e.helperText,n=Object(a.a)(e,["helperText"]);return r.a.createElement(l.Box,Object.assign({},n,{as:m.a}),r.a.createElement(d.a,{shrink:!0,htmlFor:n.id},n.label),r.a.createElement(c.a,Object.assign({},n,{value:n.value||""})),t&&r.a.createElement(u.a,Object.assign({},n,{id:"my-helper-text"}),t))}},443:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var a=n(14),o=n.n(a),r=n(19),i=n(40),l=n(98),c=n(39),u=Object(i.d)("dictModel",{shelvesTypeList:[],weightUnitList:[],groupPrecisionList:[],unpackingUnitList:[],packingUnitList:[]},{getDictList:function(){var e=Object(r.a)(o.a.mark(function e(t,n){var a,r,i,u,d,m;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.query(l.a,{isDisable:0});case 2:m=e.sent,n.setData(Object(c.g)({shelvesTypeList:null===m||void 0===m?void 0:null===(a=m.getDictList)||void 0===a?void 0:a.filter(function(e){return"ShelvesType"===e.dictTypeCode}),weightUnitList:null===m||void 0===m?void 0:null===(r=m.getDictList)||void 0===r?void 0:r.filter(function(e){return"WeightUnit"===e.dictTypeCode}),groupPrecisionList:null===m||void 0===m?void 0:null===(i=m.getDictList)||void 0===i?void 0:i.filter(function(e){return"GroupPrecision"===e.dictTypeCode}),unpackingUnitList:null===m||void 0===m?void 0:null===(u=m.getDictList)||void 0===u?void 0:u.filter(function(e){return"UnpackingUnit"===e.dictTypeCode}),packingUnitList:null===m||void 0===m?void 0:null===(d=m.getDictList)||void 0===d?void 0:d.filter(function(e){return"PackingUnit"===e.dictTypeCode})}));case 4:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}()})},449:function(e,t,n){"use strict";var a=n(48),o=n(62),r=n(14),i=n.n(r),l=n(19),c=n(13),u=n(17),d=n(0),m=n.n(d),p=n(16),s=n(316),v=n(311),b=n(145),g={};g.Box=Object(p.b)(s.a).withConfig({displayName:"style__Box",componentId:"c6bdki-0"})([""]),g.Content=Object(p.b)(v.a).withConfig({displayName:"style__Content",componentId:"c6bdki-1"})(["&&&{width:960px;> form{display:grid;grid-auto-flow:column;grid-template-rows:repeat(11,minmax(48px,auto));grid-template-columns:1fr 1fr;grid-column-gap:20px;margin-bottom:20px;> button{grid-area:12 / 1 / 13 / 3;}}}"]),g.FieldTwoBox=Object(p.b)("section").withConfig({displayName:"style__FieldTwoBox",componentId:"c6bdki-2"})(["&{display:grid;grid-template-columns:1fr 1fr;grid-column-gap:25px;}"]),g.UploadBox=Object(p.b)("main").withConfig({displayName:"style__UploadBox",componentId:"c6bdki-3"})(["&{display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(3,1fr) 40px;grid-gap:8px;> span{grid-area:4 / 1 / 5 / 4;}}"]),g.UploadFormControl=Object(p.b)(b.a.TextFieldBox).withConfig({displayName:"style__UploadFormControl",componentId:"c6bdki-4"})(["grid-area:6 / 2 / 12 / 3;"]);var f=n(310),_=n(95),O=n(401),h=n(381),y=n(47),j=n(30),C=n(305),E=n(306),x=n(386),w=n(39),k=n(326),B=n(85),L=n(387),T=n(49),I=n(60),N=n(84),U=n(443);n.d(t,"c",function(){return D}),n.d(t,"b",function(){return $}),n.d(t,"a",function(){return F});var D=function(){var e=Object(d.useState)({oneCode:"",twoCode:"",threeCode:""}),t=Object(u.a)(e,2),n=t[0],a=t[1],o=Object(B.e)(k.categoryGraphql.getCategoryList),r=Object(u.a)(o,2),i=r[0],l=r[1].category_list,p=void 0===l?[]:l,s=Object(B.e)(k.categoryGraphql.getCategoryList),v=Object(u.a)(s,2),b=v[0],g=v[1].category_list,f=void 0===g?[]:g,_=Object(B.e)(k.categoryGraphql.getCategoryList),O=Object(u.a)(_,2),h=O[0],y=O[1].category_list,j=void 0===y?[]:y;return m.a.useEffect(function(){n.oneCode&&b({parent_id:n.oneCode})},[n.oneCode,b]),m.a.useEffect(function(){n.twoCode&&h({parent_id:n.twoCode})},[n.twoCode,h]),[Object(c.a)({},n,{one:p,two:f,three:j}),a,{getOne:i,getTwo:b,getThree:h}]},S=function(e){return e},$=function(){var e=D(),t=Object(u.a)(e,3),n=t[0],a=t[1],o=t[2],r=o.getOne,m=o.getTwo,p=o.getThree,s=Object(d.useState)(!1),v=Object(u.a)(s,2),b=v[0],g=v[1],f=Object(d.useState)({}),_=Object(u.a)(f,2),O=_[0],h=_[1];return Object(c.a)({},n,{setLinkData:a,editClick:function(e){return Object(l.a)(i.a.mark(function t(){var n,o;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return g(!0),t.next=3,r({parent_id:""});case 3:if(n=S(e),!e.category_id){t.next=13;break}return t.next=7,m({parent_id:e.c3_id});case 7:return t.next=9,p({parent_id:e.c2_id});case 9:h(Object(c.a)({},n,{num:"".concat(e.c3_number,"-").concat(e.c2_number,"-").concat(e.c1_number,"-").concat(null!==(o=e.number)&&void 0!==o?o:"")})),a({oneCode:e.c3_id,twoCode:e.c2_id,threeCode:e.c1_id}),t.next=14;break;case 13:h(n);case 14:case"end":return t.stop()}},t)}))},open:b,setOpen:g,editData:O,setEditData:h})},F=function(e){var t,n,r,p,s,v,b=e.oneCode,k=e.twoCode,D=e.one,S=e.two,$=e.threeCode,F=e.three,A=e.setLinkData,P=e.open,q=e.setOpen,G=e.editData,H=e.setEditData,W=e.refreshData,z=void 0===W?function(){}:W,J=Object(N.b)(U.a).state,M=Object(I.g)(),K=null!==(t=~~(null===M||void 0===M?void 0:M.is_group))&&void 0!==t?t:-1,Q=Object(B.c)(L.b),R=Object(u.a)(Q,3),V=R[0],X=R[2],Y=Object(d.useState)({oneNum:"",twoNum:"",threeNum:""}),Z=Object(u.a)(Y,2),ee=Z[0],te=Z[1],ne=function(){A({oneCode:"",twoCode:"",threeCode:""}),le({}),q(!1),H({})},ae=function(){var e=Object(l.a)(i.a.mark(function e(){var t,n,a,o,r,l,u,d,m,p,s;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(o=Object.keys(ie)).length){e.next=6;break}return e.next=4,Object(w.d)({},o.map(function(e){return ie[e]}),"/api/fileUpload");case 4:m=e.sent,r=null!==(l=null===m||void 0===m?void 0:null===(u=m.data)||void 0===u?void 0:null===(d=u.files)||void 0===d?void 0:d.map(function(e,t){return{number:~~o[t],url:null===e||void 0===e?void 0:e.url,name:null===e||void 0===e?void 0:e.originalName}}))&&void 0!==l?l:[];case 6:return e.next=8,V({data:Object(c.a)({},Object(T.pick)(G,["id","name","remark","is_hot","is_new","stock","unit","weight","price_in","price_out","price_market","brand","is_group","group_amount","group_precision","group_remark","groupAmountUnit"]),{shelvesTypes:null===(t=G.shelvesTypes)||void 0===t?void 0:null===(n=t.filter)||void 0===n?void 0:null===(a=n.call(t,function(e){return e}))||void 0===a?void 0:a.join(","),category_id:$,is_group:K,imgs:r})});case 8:p=e.sent,(s=p.save_product).flag&&(Object(j.b)({message:(null===s||void 0===s?void 0:s.msg)||"\u64cd\u4f5c\u6210\u529f"}),ne(),z());case 11:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();m.a.useEffect(function(){var e,t,n;te({oneNum:null!==(e=G.c3_number)&&void 0!==e?e:"",twoNum:null!==(t=G.c2_number)&&void 0!==t?t:"",threeNum:null!==(n=G.c1_number)&&void 0!==n?n:""})},[G.c1_number,G.c2_number,G.c3_number]),m.a.useEffect(function(){(ee.oneNum||ee.twoNum||ee.threeNum)&&H(function(e){var t;return Object(c.a)({},e,{num:"".concat(ee.oneNum,"-").concat(ee.twoNum,"-").concat(ee.threeNum,"-").concat(null!==(t=G.number)&&void 0!==t?t:"")||""})})},[G.number,H,ee]);var oe=Object(d.useState)({}),re=Object(u.a)(oe,2),ie=re[0],le=re[1];return m.a.createElement(g.Box,{open:P,onClose:ne,maxWidth:!1},m.a.createElement(f.a,null,"\u65b0\u589e\u4ea7\u54c1"),m.a.createElement(g.Content,null,m.a.createElement("form",null,m.a.createElement(_.a,{InputProps:{readOnly:!0},label:"\u4ea7\u54c1\u7f16\u53f7",value:G.num}),m.a.createElement(O.a,{label:"",placeholder:"\u9009\u62e9\u7c7b\u522b",value:b,onChange:function(e,t){A(function(t){return Object(c.a)({},t,{oneCode:e.target.value,twoCode:"",threeCode:""})}),te(function(e){return Object(c.a)({},e,{oneNum:t.props.num})})}},null===D||void 0===D?void 0:D.map(function(e){return m.a.createElement(h.a,{key:"typeOptionOne".concat(e.id),value:null===e||void 0===e?void 0:e.id,num:null===e||void 0===e?void 0:e.number},e.name)})),m.a.createElement(O.a,{label:"",placeholder:"\u9009\u62e9\u7c7b\u522b",value:k,onChange:function(e,t){A(function(t){return Object(c.a)({},t,{twoCode:e.target.value,threeCode:""})}),te(function(e){return Object(c.a)({},e,{twoNum:t.props.num})})}},null===S||void 0===S?void 0:S.map(function(e){return m.a.createElement(h.a,{key:"typeOptionOne".concat(e.id),value:e.id,num:null===e||void 0===e?void 0:e.number},e.name)})),m.a.createElement(O.a,{label:"",placeholder:"\u9009\u62e9\u7c7b\u522b",value:$,onChange:function(e,t){A(function(t){return Object(c.a)({},t,{threeCode:e.target.value})}),te(function(e){return Object(c.a)({},e,{threeNum:t.props.num})})}},null===F||void 0===F?void 0:F.map(function(e){return m.a.createElement(h.a,{key:"typeOptionOne".concat(e.id),value:e.id,num:null===e||void 0===e?void 0:e.number},e.name)})),m.a.createElement(_.a,{label:"\u4e2d\u6587\u540d\u79f0",value:G.name,onChange:function(e){return H(Object(c.a)({},G,{name:e.target.value}))}}),m.a.createElement(O.a,{multiple:!0,label:"\u4e0a\u67b6\u7c7b\u578b",value:G.shelvesTypes||[],onChange:function(e){return H(Object(c.a)({},G,{shelvesTypes:e.target.value}))}},null===(n=J.shelvesTypeList)||void 0===n?void 0:n.map(function(e){return m.a.createElement(h.a,{key:"unit".concat(e.id),value:e.code},e.name)})),m.a.createElement(g.FieldTwoBox,null,m.a.createElement(_.a,{label:"\u5e93\u5b58",type:"number",value:G.stock,onChange:function(e){return H(Object(c.a)({},G,{stock:Object(w.k)(e.target.value)}))}}),m.a.createElement(O.a,{label:"\u5305\u88c5\u5355\u4f4d",value:G.unit,onChange:function(e){return H(Object(c.a)({},G,{unit:e.target.value}))}},null===(r=J.packingUnitList)||void 0===r?void 0:r.map(function(e){return m.a.createElement(h.a,{key:"unit".concat(e.id),value:e.code},e.name)}))),m.a.createElement(_.a,{label:"\u8fdb\u8d27\u4ef7\u683c",type:"number",value:G.price_in,onChange:function(e){return H(Object(c.a)({},G,{price_in:Object(w.k)(e.target.value)}))}}),m.a.createElement(_.a,{label:"\u54c1\u724c\u540d\u79f0",value:G.brand,onChange:function(e){return H(Object(c.a)({},G,{brand:e.target.value}))}}),m.a.createElement(_.a,{label:"\u5e02\u573a\u4ef7\u683c",type:"number",value:G.price_market,onChange:function(e){return H(Object(c.a)({},G,{price_market:Object(w.k)(e.target.value)}))}}),m.a.createElement(_.a,{label:"\u552e\u5356\u4ef7\u683c",type:"number",value:G.price_out,onChange:function(e){return H(Object(c.a)({},G,{price_out:Object(w.k)(e.target.value)}))}}),m.a.createElement(g.FieldTwoBox,null,m.a.createElement(_.a,{label:1===K?"\u62c6\u5305\u91cd\u91cf":"\u91cd\u91cf",type:"number",value:G.weight,onChange:function(e){return H(Object(c.a)({},G,{weight:Object(w.k)(e.target.value)}))}}),m.a.createElement(O.a,{label:"\u5355\u4f4d",value:G.unit,onChange:function(e){return H(Object(c.a)({},G,{unit:e.target.value}))}},null===(p=J.weightUnitList)||void 0===p?void 0:p.map(function(e){return m.a.createElement(h.a,{key:"unit".concat(e.id),value:e.code},e.name)}))),1===K?m.a.createElement(m.a.Fragment,null,m.a.createElement(g.FieldTwoBox,null,m.a.createElement(_.a,{label:"\u62c6\u5305\u6570\u91cf",type:"number",value:G.group_amount,onChange:function(e){return H(Object(c.a)({},G,{group_amount:Object(w.k)(e.target.value)}))}}),m.a.createElement(O.a,{label:"\u62c6\u5305\u5355\u4f4d",type:"number",value:G.groupAmountUnit,onChange:function(e){return H(Object(c.a)({},G,{groupAmountUnit:e.target.value}))}},null===(s=J.unpackingUnitList)||void 0===s?void 0:s.map(function(e){return m.a.createElement(h.a,{key:"unit".concat(e.id),value:e.code},e.name)}))),m.a.createElement(O.a,{label:"\u62fc\u56e2\u7cbe\u5ea6",value:G.group_precision,onChange:function(e){return H(Object(c.a)({},G,{group_precision:e.target.value}))}},null===(v=J.groupPrecisionList)||void 0===v?void 0:v.map(function(e){return m.a.createElement(h.a,{key:"unit".concat(e.id),value:e.code},e.name)})),m.a.createElement(_.a,{label:"\u62fc\u56e2\u63cf\u8ff0",value:G.group_remark,placeholder:"\u6574\u7bb1",onChange:function(e){return H(Object(c.a)({},G,{group_remark:e.target.value}))}})):"",m.a.createElement(g.UploadFormControl,{as:C.a},m.a.createElement(E.a,{shrink:!0,htmlFor:"imgUpload"},"\u4e0a\u4f20\u56fe\u7247"),m.a.createElement(g.UploadBox,null,Object(a.a)(Array(7).keys()).map(function(e){var t,n,a,r;return m.a.createElement(x.a,{key:"ImgUpload".concat(e),initSrc:null!==(t=(null===G||void 0===G?void 0:G.imgs)&&(null===G||void 0===G?void 0:null===(n=G.imgs)||void 0===n?void 0:null===(a=n.find(function(t){return t.number===~~e}))||void 0===a?void 0:a.url))&&void 0!==t?t:"",onChange:(r=e,function(e){le(Object(c.a)({},ie,Object(o.a)({},r,e)))})})}),m.a.createElement("span",null,"\u6700\u591a\u652f\u6301\u4e0a\u4f207\u5f20\u56fe\u7247,\u6bcf\u5f20\u56fe\u7247\u5927\u5c0f\u4e0d\u8d85\u8fc71m,\u6587\u4ef6\u683c\u5f0f\u4ec5\u652f\u6301PNG/JPG"))),m.a.createElement(y.a,{loading:X?1:0,color:"primary",variant:"contained",fullWidth:!0,onClick:ae},"\u4fdd\u5b58"))))}}}]);