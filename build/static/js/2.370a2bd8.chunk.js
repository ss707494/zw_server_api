(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{338:function(e,t,n){"use strict";n.r(t);var a=n(12),o=n.n(a),r=n(17),i=n(13),l=n(20),c=n(21),u=n(41),d=n(0),m=n.n(d),p=n(392),s=n(384),v=n(16),b=n(199),g={};g.Box=Object(v.a)("div").withConfig({displayName:"style__Box",componentId:"lv66y5-0"})(["margin:20px;> header{display:flex;flex-direction:row;> section{flex:1;}}"]),g.Table=Object(v.a)(b.a).withConfig({displayName:"style__Table",componentId:"lv66y5-1"})(["&&&{margin-top:20px;border-radius:5px;border-collapse:initial;overflow:hidden;border:1px solid rgba(224,224,224,1);> thead{background:",";> tr > th{color:",";}}}"],function(e){return e.theme.palette.grey[800]},function(e){return e.theme.palette.common.white}),g.Loading=Object(v.a)("section").withConfig({displayName:"style__Loading",componentId:"lv66y5-2"})(["text-align:center;"]),g.ActionTableCell=Object(v.a)("section").withConfig({displayName:"style__ActionTableCell",componentId:"lv66y5-3"})(["&&&{display:flex;> button{margin-right:8px;&:last-of-type{margin-right:0;}}}"]),g.HeaderBox=Object(v.a)("section").withConfig({displayName:"style__HeaderBox",componentId:"lv66y5-4"})(["&&&{display:flex;flex-direction:column;> header{font-size:20px;font-weight:bold;margin-bottom:15px;}> section{font-weight:bold;font-size:14px;margin-bottom:10px;}> main{> div{margin-right:8px;}}}"]);var f=n(380),_=n(383),O=n(385),j=n(155),h=n(79),y=n(327),C=n(322),E=n(153),x={};x.Box=Object(v.a)(y.a).withConfig({displayName:"style__Box",componentId:"okjugs-0"})([""]),x.Content=Object(v.a)(C.a).withConfig({displayName:"style__Content",componentId:"okjugs-1"})(["&&&{width:660px;> form{margin-bottom:20px;}}"]),x.UploadFormControl=E.a.TextFieldBox;var w=n(321),k=n(89),B=n(416),I=n(39),N=n(30),T=n(74),U=n(316),L=n(317),$=n(396),S=n(19),D=n(18);function F(){var e=Object(c.a)(["\n    mutation ($data: CategoryInput){\n        save_category(Category: $data) {\n            flag\n            msg\n            category {\n                id\n                name\n            }\n        }\n    }\n"]);return F=function(){return e},e}var A=Object(D.b)(F()),q=function(e){return Object(i.a)({},e)},P=function(){var e=function(){var e=Object(d.useState)({oneCode:"",twoCode:""}),t=Object(l.a)(e,2),n=t[0],a=t[1],o=Object(T.e)(K.getCategoryList),r=Object(l.a)(o,2),c=r[0],u=r[1].category_list,p=void 0===u?[]:u,s=Object(T.e)(K.getCategoryList),v=Object(l.a)(s,2),b=v[0],g=v[1].category_list,f=void 0===g?[]:g;return m.a.useEffect(function(){n.oneCode&&b({parent_id:n.oneCode})},[n.oneCode,b]),[Object(i.a)({},n,{one:p,two:f}),a,c]}(),t=Object(l.a)(e,3),n=t[0],a=t[1],c=t[2],u=Object(d.useState)(!1),p=Object(l.a)(u,2),s=p[0],v=p[1],b=Object(d.useState)({}),g=Object(l.a)(b,2),f=g[0],_=g[1];return Object(i.a)({},n,{setLinkData:a,editClick:function(e){return Object(r.a)(o.a.mark(function t(){var n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=q(e),_(n),v(!0),t.next=5,c({parent_id:"root"});case 5:(null===n||void 0===n?void 0:n.p3_id)?a({oneCode:n.p3_id,twoCode:n.p2_id}):a({oneCode:n.p2_id});case 6:case"end":return t.stop()}},t)}))},open:s,setOpen:v,editData:f,setEditData:_})},G=function(e){var t,n=e.oneCode,a=e.twoCode,c=e.one,u=e.two,s=e.setLinkData,v=e.open,b=e.setOpen,g=e.editData,f=e.setEditData,_=e.refreshData,O=void 0===_?function(){}:_,j=Object(d.useState)(),h=Object(l.a)(j,2),y=h[0],C=h[1],E=Object(T.c)(A),D=Object(l.a)(E,3),F=D[0],q=D[2],P=function(){C(null),b(!1),f({}),s({oneCode:"",twoCode:""})},G=function(){var e=Object(r.a)(o.a.mark(function e(){var t,r,i,l,c,u,d,m,p,s,v;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n&&g.c3_id||a&&g.c2_id)){e.next=3;break}return Object(N.b)({message:"\u65e0\u6cd5\u6dfb\u52a0,\u5206\u7c7b\u5c42\u7ea7\u4e0d\u53ef\u8d85\u8fc73\u7ea7"}),e.abrupt("return");case 3:if(!y){e.next=8;break}return e.next=6,Object(S.d)({},[y],"/api/fileUpload");case 6:u=e.sent,t=null!==(r=null===u||void 0===u?void 0:null===(i=u.data)||void 0===i?void 0:null===(l=i.files)||void 0===l?void 0:null===(c=l[0])||void 0===c?void 0:c.url)&&void 0!==r?r:"";case 8:return d=a||n||"root",e.next=11,F({data:{id:null===g||void 0===g?void 0:g.id,name:null===g||void 0===g?void 0:g.name,parent_id:d,img_url:t}});case 11:m=e.sent,p=m.save_category,s=p.flag,v=p.msg,s&&(Object(N.b)({message:v||"\u64cd\u4f5c\u6210\u529f"}),O(),P());case 16:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return m.a.createElement(x.Box,{open:v,onClose:P,maxWidth:!1},m.a.createElement(w.a,null,"\u7f16\u8f91\u4ea7\u54c1\u7c7b\u522b"),m.a.createElement(x.Content,null,m.a.createElement("form",null,m.a.createElement(k.a,{label:"\u4e2d\u6587\u540d\u79f0",value:g.name,onChange:function(e){return f(Object(i.a)({},g,{name:e.target.value}))}}),m.a.createElement(x.UploadFormControl,{as:U.a},m.a.createElement(L.a,{shrink:!0,htmlFor:"imgUpload"},"\u4e0a\u4f20\u56fe\u7247"),m.a.createElement($.a,{initSrc:null!==(t=null===g||void 0===g?void 0:g.img_url)&&void 0!==t?t:"",onChange:function(e){C(e)}})),m.a.createElement(B.a,{label:"\u4ea7\u54c1\u7c7b\u522b",placeholder:"\u9009\u62e9\u7c7b\u522b",value:n,onChange:function(e){s(function(t){return Object(i.a)({},t,{oneCode:e.target.value,twoCode:""})})}},null===c||void 0===c?void 0:c.map(function(e){return m.a.createElement(p.a,{key:"typeOptionOne".concat(e.id),value:e.id,disabled:e.id===g.id},e.name)})),m.a.createElement(B.a,{label:"",placeholder:"\u9009\u62e9\u7c7b\u522b",value:a,onChange:function(e){return s(function(t){return Object(i.a)({},t,{twoCode:e.target.value})})}},null===u||void 0===u?void 0:u.map(function(e){return m.a.createElement(p.a,{key:"typeOptionOne".concat(e.id),value:e.id,disabled:e.id===g.id},e.name)})),m.a.createElement(I.a,{loading:q?1:0,color:"primary",variant:"contained",fullWidth:!0,onClick:G},"\u4fdd\u5b58"))))},H=n(42),W=n(154);function J(){var e=Object(c.a)(["\n      query (\n          $parent_id: String,\n          $rows_per_page: Int,\n          $page: Int,\n          $full_parent_id: String\n          $sort_type: String\n      ){\n          category_list(CategoryInput: {\n              parent_id: $parent_id\n              full_parent_id: $full_parent_id\n              rows_per_page: $rows_per_page\n              page: $page\n              sort_type: $sort_type\n          }) {\n              id\n              name\n              parent_id\n              number\n              full_parent_id\n              create_time\n              c2_name\n              c2_id\n              c3_name\n              c3_id\n              p2_name\n              p2_num\n              p2_id\n              p3_num\n              p3_name\n              p3_id\n              img_url\n              is_enable\n          }\n          category_total(CategoryInput: {\n              parent_id: $parent_id\n              full_parent_id: $full_parent_id\n          })\n      }\n  "]);return J=function(){return e},e}n.d(t,"categoryGraphql",function(){return K}),n.d(t,"Category",function(){return M});var z=function(e){return{sort_type:[].concat(Object(u.a)({1:["create_time desc"],2:["create_time asc"],3:["number desc"],4:["number asc"]}[e]),["id"]).join(",")}},K={getCategoryList:Object(D.b)(J())},M=function(e){var t=e.theme,n=Object(h.f)(),a=P(),c=a.editClick,u=m.a.useState({type:"",sort:1}),d=Object(l.a)(u,2),v=d[0],b=d[1],y=Object(T.e)(K.getCategoryList),C=Object(l.a)(y,2),E=C[0],x=C[1].category_list,w=void 0===x?[]:x,k=Object(T.e)(K.getCategoryList),B=Object(l.a)(k,3),N=B[0],U=B[1],L=U.category_list,$=void 0===L?[]:L,D=U.category_total,F=B[2],q=Object(T.e)(K.getCategoryList),J=Object(l.a)(q,2),M=J[0],Q=J[1].category_list,R=void 0===Q?[]:Q,V=Object(T.c)(A),X=Object(l.a)(V,1)[0],Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return N(Object(i.a)({},z(1),v,n.pageData,e))};return m.a.useEffect(function(){N(Object(i.a)({},z(1),{page:0,rows_per_page:10}))},[N]),m.a.useEffect(function(){E({parent_id:"root"})},[E]),m.a.useEffect(function(){N(Object(i.a)({},z(1),v,n.pageData))},[N,n.pageData,v]),m.a.createElement(g.Box,null,m.a.createElement("header",null,m.a.createElement(g.HeaderBox,null,m.a.createElement("header",null,"\u4ea7\u54c1\u7c7b\u522b"),m.a.createElement("section",null,"\u60a8\u53ef\u4ee5\u8fdb\u884c\u7ba1\u7406"),m.a.createElement("main",null,m.a.createElement(I.a,{variant:"contained",color:"primary",onClick:c({})},"\u65b0\u589e"))),m.a.createElement(g.HeaderBox,null,m.a.createElement("header",null,"\u7c7b\u522b\u7b5b\u9009"),m.a.createElement("main",null,m.a.createElement(j.a,{onChange:function(e){var t;b(Object(i.a)({},v,{full_parent_id:e.target.value,type:e.target.value,typeTwo:""})),(null===e||void 0===e?void 0:null===(t=e.target)||void 0===t?void 0:t.value)&&M({parent_id:e.target.value}),Y({full_parent_id:e.target.value})},value:v.type,clear:1,placeholder:"\u5168\u90e8"},null===w||void 0===w?void 0:w.map(function(e){return m.a.createElement(p.a,{key:"typeOptionOne".concat(e.id),value:e.id},e.name)})),m.a.createElement(j.a,{onChange:function(e){var t,n=null===e||void 0===e?void 0:null===(t=e.target)||void 0===t?void 0:t.value;b(Object(i.a)({},v,{full_parent_id:""===n?v.type:n,typeTwo:n}))},value:v.typeTwo,clear:1,placeholder:"\u5168\u90e8"},R.map(function(e){return m.a.createElement(p.a,{key:"typeOptionTwo".concat(e.id),value:e.id},e.name)})))),m.a.createElement(g.HeaderBox,null,m.a.createElement("header",null,"\u7c7b\u522b\u6392\u5e8f"),m.a.createElement("main",null,m.a.createElement(j.a,{placeholder:"\u9009\u62e9\u6392\u5e8f",value:v.sort,onChange:function(e){b(Object(i.a)({},v,z(e.target.value),{sort:e.target.value}))}},m.a.createElement(p.a,{value:1},"\u6309\u521b\u5efa\u65f6\u95f4-\u964d\u5e8f"),m.a.createElement(p.a,{value:2},"\u6309\u521b\u5efa\u65f6\u95f4-\u5347\u5e8f"),m.a.createElement(p.a,{value:3},"\u6309\u5e8f\u53f7-\u964d\u5e8f"),m.a.createElement(p.a,{value:4},"\u6309\u5e8f\u53f7-\u5347\u5e8f"))))),m.a.createElement("main",null,F?m.a.createElement(g.Loading,null,m.a.createElement(f.a,null)):m.a.createElement(g.Table,{theme:t},m.a.createElement(_.a,null,m.a.createElement(s.a,null,["\u7c7b\u522b\u5e8f\u53f7","\u4e2d\u6587\u540d\u79f0","\u82f1\u6587\u540d\u79f0","\u4ea7\u54c1\u79cd\u7c7b"].map(function(e){return m.a.createElement(H.a,{key:"TableHead".concat(e)},e)}),m.a.createElement(H.a,{width:150},"\u64cd\u4f5c"))),m.a.createElement(O.a,null,null===$||void 0===$?void 0:$.map(function(e){return m.a.createElement(s.a,{key:"TableBody".concat(null===e||void 0===e?void 0:e.id)},m.a.createElement(H.a,null,(null===e||void 0===e?void 0:e.p2_num)?(null===e||void 0===e?void 0:e.p3_num)?"".concat(Object(S.b)(2)(null===e||void 0===e?void 0:e.p3_num)).concat(Object(S.b)(2)(null===e||void 0===e?void 0:e.p2_num)).concat(Object(S.b)(2)(null===e||void 0===e?void 0:e.number)):"".concat(Object(S.b)(2)(null===e||void 0===e?void 0:e.p2_num)).concat(Object(S.b)(2)(null===e||void 0===e?void 0:e.number),"00"):"".concat(Object(S.b)(2)(null===e||void 0===e?void 0:e.number),"0000")),m.a.createElement(H.a,null,null===e||void 0===e?void 0:e.name),m.a.createElement(H.a,null,null===e||void 0===e?void 0:e.name),m.a.createElement(H.a,null,(null===e||void 0===e?void 0:e.p3_name)?"".concat(null===e||void 0===e?void 0:e.p3_name,"-"):"",(null===e||void 0===e?void 0:e.p2_name)?"".concat(null===e||void 0===e?void 0:e.p2_name):""),m.a.createElement(H.a,null,m.a.createElement(g.ActionTableCell,null,m.a.createElement(I.a,{color:"secondary",onClick:c(e),variant:"contained"},"\u7f16\u8f91"),m.a.createElement(I.a,{color:(null===e||void 0===e?void 0:e.is_enable)?"primary":"default",variant:"contained",onClick:function(){Object(W.b)({message:"\u786e\u5b9a".concat((null===e||void 0===e?void 0:e.is_enable)?"\u505c\u7528":"\u542f\u7528","\u8be5\u7c7b\u522b\u5417"),callBack:function(){var t=Object(r.a)(o.a.mark(function t(n){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,X({data:{id:e.id,is_enable:(null===e||void 0===e?void 0:e.is_enable)?0:1}});case 4:Y();case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()})}},(null===e||void 0===e?void 0:e.is_enable)?"\u505c\u7528":"\u542f\u7528"))))}))),m.a.createElement(h.a,Object.assign({},n,{count:~~D}))),m.a.createElement(G,Object.assign({},a,{refreshData:Y})))};t.default=M},395:function(e,t,n){"use strict";n.d(t,"a",function(){return o});n(0);var a=null!=="/"?"/":"",o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return(null===e||void 0===e?void 0:e.includes("blob:"))?e:a+e}},396:function(e,t,n){"use strict";var a=n(20),o=n(0),r=n.n(o),i=n(16),l=n(127),c=n(532),u=n(99),d=n(39),m={};m.ImgUpload=Object(i.a)("section").withConfig({displayName:"style__ImgUpload",componentId:"sc-1hed22m-0"})([""]),m.Add=Object(i.a)("section").withConfig({displayName:"style__Add",componentId:"sc-1hed22m-1"})(["&&&{border-radius:5px;width:120px;height:90px;display:grid;justify-items:center;align-items:center;background:",";position:relative;> span{display:flex;flex-direction:column;align-items:center;}","}"],l.a[200],function(e){return null===e||void 0===e?void 0:e.mainCss}),m.ImgBox=Object(i.a)("section").withConfig({displayName:"style__ImgBox",componentId:"sc-1hed22m-2"})(["width:120px;height:90px;display:grid;justify-items:center;align-items:center;> img{max-width:120px;max-height:90px;}> svg{display:none;position:absolute;}&:hover{&:after{content:'';position:absolute;width:100%;height:100%;background:",";opacity:.2;}background:",";> svg{display:inline-block;color:",";}}"],c.a[600],c.a[600],u.a.white),m.AddButton=Object(i.a)(d.a).withConfig({displayName:"style__AddButton",componentId:"sc-1hed22m-3"})(["&&{padding:0;}"]);var p=n(533),s=n(534),v=n(19),b=n(450),g=n(395);n.d(t,"a",function(){return f});var f=function(e){var t=e.onChange,n=e.initSrc,o=void 0===n?"":n,i=e.mainCss,l=void 0===i?"":i,c=e.noSetSrc,u=void 0!==c&&c,d=r.a.useState(o),f=Object(a.a)(d,2),_=f[0],O=f[1];return r.a.useEffect(function(){o&&O(o)},[o]),r.a.createElement(m.ImgUpload,null,r.a.createElement(b.a,{beforeUpload:function(e){return u||O(Object(v.k)(e)),t(e),!1}},r.a.createElement(m.AddButton,null,r.a.createElement(m.Add,{mainCss:l},_?r.a.createElement(m.ImgBox,null,r.a.createElement("img",{src:Object(g.a)(_),alt:""}),r.a.createElement(s.a,null)):r.a.createElement("span",null,r.a.createElement(p.a,null),r.a.createElement("span",null,"\u70b9\u51fb\u6dfb\u52a0"))))))}},397:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"b",function(){return u});var a=n(21),o=n(18);function r(){var e=Object(a.a)(["\n    mutation ($data: ProductInput) {\n        save_product(ProductInput: $data) {\n            msg\n            flag\n            product {\n                id\n            }\n        }\n    }\n"]);return r=function(){return e},e}function i(){var e=Object(a.a)(["\n    query ($id: String) {\n        category_origin(id: $id) {\n            id number c2_id c2_name c3_id c3_name\n            c2_number c3_number\n        }\n    }\n"]);return i=function(){return e},e}function l(){var e=Object(a.a)(["\n    query ($data: ProductInput) {\n        product_list(ListInput: $data) {\n            id name number is_hot is_new stock price_in is_enable\n            price_market price_out weight unit brand category_id\n            c1_id c1_number c2_id c2_name c3_id c3_name\n            c2_number c3_number is_group group_amount group_precision\n            group_remark shelvesTypes packingUnit\n            imgs { id url number }\n        }\n        product_total(ListInput: $data)\n    }\n  "]);return l=function(){return e},e}var c={getList:Object(o.b)(l())},u=(Object(o.b)(i()),Object(o.b)(r()))},416:function(e,t,n){"use strict";var a=n(417),o=n(0),r=n.n(o),i=n(153),l={};l.Box=i.a.TextFieldBox;var c=n(155),u=n(319),d=n(317),m=n(316);n.d(t,"a",function(){return p});var p=function(e){var t=e.helperText,n=Object(a.a)(e,["helperText"]);return r.a.createElement(l.Box,Object.assign({},n,{as:m.a}),r.a.createElement(d.a,{shrink:!0,htmlFor:n.id},n.label),r.a.createElement(c.a,Object.assign({},n,{value:n.value||""})),t&&r.a.createElement(u.a,Object.assign({},n,{id:"my-helper-text"}),t))}},472:function(e,t,n){"use strict";var a=n(41),o=n(57),r=n(12),i=n.n(r),l=n(17),c=n(13),u=n(20),d=n(0),m=n.n(d),p=n(16),s=n(327),v=n(322),b=n(153),g={};g.Box=Object(p.a)(s.a).withConfig({displayName:"style__Box",componentId:"c6bdki-0"})([""]),g.Content=Object(p.a)(v.a).withConfig({displayName:"style__Content",componentId:"c6bdki-1"})(["&&&{width:960px;> form{display:grid;grid-auto-flow:column;grid-template-rows:repeat(11,minmax(48px,auto));grid-template-columns:1fr 1fr;grid-column-gap:20px;margin-bottom:20px;> button{grid-area:12 / 1 / 13 / 3;}}}"]),g.FieldTwoBox=Object(p.a)("section").withConfig({displayName:"style__FieldTwoBox",componentId:"c6bdki-2"})(["&{display:grid;grid-template-columns:1fr 1fr;grid-column-gap:25px;}"]),g.UploadBox=Object(p.a)("main").withConfig({displayName:"style__UploadBox",componentId:"c6bdki-3"})(["&{display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(3,1fr) 40px;grid-gap:8px;> span{grid-area:4 / 1 / 5 / 4;}}"]),g.UploadFormControl=Object(p.a)(b.a.TextFieldBox).withConfig({displayName:"style__UploadFormControl",componentId:"c6bdki-4"})(["grid-area:6 / 2 / 12 / 3;"]);var f=n(321),_=n(89),O=n(416),j=n(392),h=n(39),y=n(30),C=n(316),E=n(317),x=n(396),w=n(19),k=n(338),B=n(74),I=n(397),N=n(51),T=n(65),U=n(73),L=n(158);n.d(t,"c",function(){return $}),n.d(t,"b",function(){return D}),n.d(t,"a",function(){return F});var $=function(){var e=Object(d.useState)({oneCode:"",twoCode:"",threeCode:""}),t=Object(u.a)(e,2),n=t[0],a=t[1],o=Object(B.e)(k.categoryGraphql.getCategoryList),r=Object(u.a)(o,2),i=r[0],l=r[1].category_list,p=void 0===l?[]:l,s=Object(B.e)(k.categoryGraphql.getCategoryList),v=Object(u.a)(s,2),b=v[0],g=v[1].category_list,f=void 0===g?[]:g,_=Object(B.e)(k.categoryGraphql.getCategoryList),O=Object(u.a)(_,2),j=O[0],h=O[1].category_list,y=void 0===h?[]:h;return m.a.useEffect(function(){n.oneCode&&b({parent_id:n.oneCode})},[n.oneCode,b]),m.a.useEffect(function(){n.twoCode&&j({parent_id:n.twoCode})},[n.twoCode,j]),[Object(c.a)({},n,{one:p,two:f,three:y}),a,{getOne:i,getTwo:b,getThree:j}]},S=function(e){return e},D=function(){var e=$(),t=Object(u.a)(e,3),n=t[0],a=t[1],o=t[2],r=o.getOne,m=o.getTwo,p=o.getThree,s=Object(d.useState)(!1),v=Object(u.a)(s,2),b=v[0],g=v[1],f=Object(d.useState)({}),_=Object(u.a)(f,2),O=_[0],j=_[1];return Object(c.a)({},n,{setLinkData:a,editClick:function(e){return Object(l.a)(i.a.mark(function t(){var n,o;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return g(!0),t.next=3,r({parent_id:"root"});case 3:if(n=S(e),!e.category_id){t.next=13;break}return t.next=7,m({parent_id:e.c3_id});case 7:return t.next=9,p({parent_id:e.c2_id});case 9:j(Object(c.a)({},n,{num:"".concat(e.c3_number,"-").concat(e.c2_number,"-").concat(e.c1_number,"-").concat(null!==(o=e.number)&&void 0!==o?o:"")})),a({oneCode:e.c3_id,twoCode:e.c2_id,threeCode:e.c1_id}),t.next=14;break;case 13:j(n);case 14:case"end":return t.stop()}},t)}))},open:b,setOpen:g,editData:O,setEditData:j})},F=function(e){var t,n,r,p,s,v,b=e.oneCode,k=e.twoCode,$=e.one,S=e.two,D=e.threeCode,F=e.three,A=e.setLinkData,q=e.open,P=e.setOpen,G=e.editData,H=e.setEditData,W=e.refreshData,J=void 0===W?function(){}:W,z=Object(U.b)(L.a).state,K=Object(T.g)(),M=null!==(t=~~(null===K||void 0===K?void 0:K.is_group))&&void 0!==t?t:-1,Q=Object(B.c)(I.b),R=Object(u.a)(Q,3),V=R[0],X=R[2],Y=Object(d.useState)({oneNum:"",twoNum:"",threeNum:""}),Z=Object(u.a)(Y,2),ee=Z[0],te=Z[1],ne=function(){A({oneCode:"",twoCode:"",threeCode:""}),le({}),P(!1),H({})},ae=function(){var e=Object(l.a)(i.a.mark(function e(){var t,n,a,o,r,l,u,d,m,p,s;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(o=Object.keys(ie)).length){e.next=6;break}return e.next=4,Object(w.d)({},o.map(function(e){return ie[e]}),"/api/fileUpload");case 4:m=e.sent,r=null!==(l=null===m||void 0===m?void 0:null===(u=m.data)||void 0===u?void 0:null===(d=u.files)||void 0===d?void 0:d.map(function(e,t){return{number:~~o[t],url:null===e||void 0===e?void 0:e.url,name:null===e||void 0===e?void 0:e.originalName}}))&&void 0!==l?l:[];case 6:return e.next=8,V({data:Object(c.a)({},Object(N.pick)(G,["id","name","remark","is_hot","is_new","stock","unit","weight","price_in","price_out","price_market","brand","is_group","group_amount","group_precision","group_remark","groupAmountUnit","packingUnit"]),{shelvesTypes:null===(t=G.shelvesTypes)||void 0===t?void 0:null===(n=t.filter)||void 0===n?void 0:null===(a=n.call(t,function(e){return e}))||void 0===a?void 0:a.join(","),category_id:D,is_group:M,imgs:r})});case 8:p=e.sent,(s=p.save_product).flag&&(Object(y.b)({message:(null===s||void 0===s?void 0:s.msg)||"\u64cd\u4f5c\u6210\u529f"}),ne(),J());case 11:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();m.a.useEffect(function(){var e,t,n;te({oneNum:null!==(e=G.c3_number)&&void 0!==e?e:"",twoNum:null!==(t=G.c2_number)&&void 0!==t?t:"",threeNum:null!==(n=G.c1_number)&&void 0!==n?n:""})},[G.c1_number,G.c2_number,G.c3_number]),m.a.useEffect(function(){(ee.oneNum||ee.twoNum||ee.threeNum)&&H(function(e){var t;return Object(c.a)({},e,{num:"".concat(ee.oneNum,"-").concat(ee.twoNum,"-").concat(ee.threeNum,"-").concat(null!==(t=G.number)&&void 0!==t?t:"")||""})})},[G.number,H,ee]);var oe=Object(d.useState)({}),re=Object(u.a)(oe,2),ie=re[0],le=re[1];return m.a.createElement(g.Box,{open:q,onClose:ne,maxWidth:!1},m.a.createElement(f.a,null,"\u65b0\u589e\u4ea7\u54c1"),m.a.createElement(g.Content,null,m.a.createElement("form",null,m.a.createElement(_.a,{InputProps:{readOnly:!0},label:"\u4ea7\u54c1\u7f16\u53f7",value:G.num}),m.a.createElement(O.a,{label:"",placeholder:"\u9009\u62e9\u7c7b\u522b",value:b,onChange:function(e,t){A(function(t){return Object(c.a)({},t,{oneCode:e.target.value,twoCode:"",threeCode:""})}),te(function(e){return Object(c.a)({},e,{oneNum:t.props.num})})}},null===$||void 0===$?void 0:$.map(function(e){return m.a.createElement(j.a,{key:"typeOptionOne".concat(e.id),value:null===e||void 0===e?void 0:e.id,num:null===e||void 0===e?void 0:e.number},e.name)})),m.a.createElement(O.a,{label:"",placeholder:"\u9009\u62e9\u7c7b\u522b",value:k,onChange:function(e,t){A(function(t){return Object(c.a)({},t,{twoCode:e.target.value,threeCode:""})}),te(function(e){return Object(c.a)({},e,{twoNum:t.props.num})})}},null===S||void 0===S?void 0:S.map(function(e){return m.a.createElement(j.a,{key:"typeOptionOne".concat(e.id),value:e.id,num:null===e||void 0===e?void 0:e.number},e.name)})),m.a.createElement(O.a,{label:"",placeholder:"\u9009\u62e9\u7c7b\u522b",value:D,onChange:function(e,t){A(function(t){return Object(c.a)({},t,{threeCode:e.target.value})}),te(function(e){return Object(c.a)({},e,{threeNum:t.props.num})})}},null===F||void 0===F?void 0:F.map(function(e){return m.a.createElement(j.a,{key:"typeOptionOne".concat(e.id),value:e.id,num:null===e||void 0===e?void 0:e.number},e.name)})),m.a.createElement(_.a,{label:"\u4e2d\u6587\u540d\u79f0",value:G.name,onChange:function(e){return H(Object(c.a)({},G,{name:e.target.value}))}}),m.a.createElement(O.a,{multiple:!0,label:"\u4e0a\u67b6\u7c7b\u578b",value:G.shelvesTypes||[],onChange:function(e){return H(Object(c.a)({},G,{shelvesTypes:e.target.value}))}},null===(n=z.shelvesTypeList)||void 0===n?void 0:n.map(function(e){return m.a.createElement(j.a,{key:"unit".concat(e.id),value:e.code},e.name)})),m.a.createElement(g.FieldTwoBox,null,m.a.createElement(_.a,{label:"\u5e93\u5b58",type:"number",value:G.stock,onChange:function(e){return H(Object(c.a)({},G,{stock:Object(w.l)(e.target.value)}))}}),m.a.createElement(O.a,{label:"\u5305\u88c5\u5355\u4f4d",value:G.packingUnit,onChange:function(e){return H(Object(c.a)({},G,{packingUnit:e.target.value}))}},null===(r=z.packingUnitList)||void 0===r?void 0:r.map(function(e){return m.a.createElement(j.a,{key:"packingUnit".concat(e.id),value:e.code},e.name)}))),m.a.createElement(_.a,{label:"\u8fdb\u8d27\u4ef7\u683c",type:"number",value:G.price_in,onChange:function(e){return H(Object(c.a)({},G,{price_in:Object(w.l)(e.target.value)}))}}),m.a.createElement(_.a,{label:"\u54c1\u724c\u540d\u79f0",value:G.brand,onChange:function(e){return H(Object(c.a)({},G,{brand:e.target.value}))}}),m.a.createElement(_.a,{label:"\u5e02\u573a\u4ef7\u683c",type:"number",value:G.price_market,onChange:function(e){return H(Object(c.a)({},G,{price_market:Object(w.l)(e.target.value)}))}}),m.a.createElement(_.a,{label:"\u552e\u5356\u4ef7\u683c",type:"number",value:G.price_out,onChange:function(e){return H(Object(c.a)({},G,{price_out:Object(w.l)(e.target.value)}))}}),m.a.createElement(g.FieldTwoBox,null,m.a.createElement(_.a,{label:1===M?"\u62c6\u5305\u91cd\u91cf":"\u91cd\u91cf",type:"number",value:G.weight,onChange:function(e){return H(Object(c.a)({},G,{weight:Object(w.l)(e.target.value)}))}}),m.a.createElement(O.a,{label:"\u5355\u4f4d",value:G.unit,onChange:function(e){return H(Object(c.a)({},G,{unit:e.target.value}))}},null===(p=z.weightUnitList)||void 0===p?void 0:p.map(function(e){return m.a.createElement(j.a,{key:"unit".concat(e.id),value:e.code},e.name)}))),1===M?m.a.createElement(m.a.Fragment,null,m.a.createElement(g.FieldTwoBox,null,m.a.createElement(_.a,{label:"\u62c6\u5305\u6570\u91cf",type:"number",value:G.group_amount,onChange:function(e){return H(Object(c.a)({},G,{group_amount:Object(w.l)(e.target.value)}))}}),m.a.createElement(O.a,{label:"\u62c6\u5305\u5355\u4f4d",type:"number",value:G.groupAmountUnit,onChange:function(e){return H(Object(c.a)({},G,{groupAmountUnit:e.target.value}))}},null===(s=z.unpackingUnitList)||void 0===s?void 0:s.map(function(e){return m.a.createElement(j.a,{key:"unit".concat(e.id),value:e.code},e.name)}))),m.a.createElement(O.a,{label:"\u62fc\u56e2\u7cbe\u5ea6",value:G.group_precision,onChange:function(e){return H(Object(c.a)({},G,{group_precision:Object(w.l)(e.target.value)}))}},null===(v=z.groupPrecisionList)||void 0===v?void 0:v.map(function(e){return m.a.createElement(j.a,{key:"unit".concat(e.id),value:e.code},e.name)})),m.a.createElement(_.a,{label:"\u62fc\u56e2\u63cf\u8ff0",value:G.group_remark,placeholder:"\u6574\u7bb1",onChange:function(e){return H(Object(c.a)({},G,{group_remark:e.target.value}))}})):"",m.a.createElement(g.UploadFormControl,{as:C.a},m.a.createElement(E.a,{shrink:!0,htmlFor:"imgUpload"},"\u4e0a\u4f20\u56fe\u7247"),m.a.createElement(g.UploadBox,null,Object(a.a)(Array(7).keys()).map(function(e){var t,n,a,r;return m.a.createElement(x.a,{key:"ImgUpload".concat(e),initSrc:null!==(t=(null===G||void 0===G?void 0:G.imgs)&&(null===G||void 0===G?void 0:null===(n=G.imgs)||void 0===n?void 0:null===(a=n.find(function(t){return t.number===~~e}))||void 0===a?void 0:a.url))&&void 0!==t?t:"",onChange:(r=e,function(e){le(Object(c.a)({},ie,Object(o.a)({},r,e)))})})}),m.a.createElement("span",null,"\u6700\u591a\u652f\u6301\u4e0a\u4f207\u5f20\u56fe\u7247,\u6bcf\u5f20\u56fe\u7247\u5927\u5c0f\u4e0d\u8d85\u8fc71m,\u6587\u4ef6\u683c\u5f0f\u4ec5\u652f\u6301PNG/JPG"))),m.a.createElement(h.a,{loading:X?1:0,color:"primary",variant:"contained",fullWidth:!0,onClick:ae},"\u4fdd\u5b58"))))}}}]);