(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{477:function(e,t,n){"use strict";n.r(t);var a=n(19),o=n(20),r=n(0),i=n.n(r),l=n(539),c=n(505),u=n(527),s=n(524),d=n(525),p=n(184);function m(){var e=Object(d.a)(["\n      query ($data: AllOrderListInput) {\n          all_order_list(allOrderListInput: $data) {\n              id\n              name\n              number\n              create_time\n              user_id\n              user {\n                  id\n                  name\n                  phone\n                  email\n              }\n              product {\n                  name\n                  number\n                  brand\n                  id\n                  is_hot\n                  stock\n                  price_in\n                  price_out\n                  price_market\n                  weight\n              }\n          }\n          all_order_list_total(allOrderListInput: $data)\n      }\n  "]);return m=function(){return e},e}var g={getListByPage:Object(p.b)(m())},f=n(531),b=n(510),h=n(554),x=n(526),v=n(553),w=n(555),O=n(102),y=n(464),j=n(536),E=n(459),P=function(e){var t,n=e.theme,a=e.open,o=e.editData,r=e.handleClose;return i.a.createElement(y.a,{fullWidth:!0,maxWidth:"lg",open:a,onClose:r},i.a.createElement(E.a,null,"\u8865\u8d27\u5217\u8868"),i.a.createElement(j.a.Content,null,i.a.createElement(u.a.Table,{theme:n},i.a.createElement(v.a,null,i.a.createElement(h.a,null,["\u5546\u54c1\u7f16\u53f7","\u4e2d\u6587\u540d\u79f0","\u5e93\u5b58","\u8fdb\u8d27\u4ef7\u683c","\u5e02\u573a\u4ef7\u683c","\u552e\u5356\u4ef7\u683c","\u91cd\u91cf"].map(function(e){return i.a.createElement(x.a,{key:"TableHead".concat(e)},e)}))),i.a.createElement(w.a,null,null===o||void 0===o?void 0:null===(t=o.productList)||void 0===t?void 0:t.map(function(e){var t=e;return i.a.createElement(h.a,{key:"TableBody".concat(null===t||void 0===t?void 0:t.id)},i.a.createElement(x.a,null,null===t||void 0===t?void 0:t.number),i.a.createElement(x.a,null,null===t||void 0===t?void 0:t.name),i.a.createElement(x.a,null,null===t||void 0===t?void 0:t.stock),i.a.createElement(x.a,null,null===t||void 0===t?void 0:t.price_in),i.a.createElement(x.a,null,null===t||void 0===t?void 0:t.price_out),i.a.createElement(x.a,null,null===t||void 0===t?void 0:t.price_market),i.a.createElement(x.a,null,null===t||void 0===t?void 0:t.weight))}))),i.a.createElement("footer",null)))};n.d(t,"OrderList",function(){return _});var _=function(e){var t=e.theme,n=Object(f.b)(),d=function(){var e=Object(r.useState)(!1),t=Object(o.a)(e,2),n=t[0],a=t[1],i=Object(r.useState)({}),l=Object(o.a)(i,2),c=l[0],u=l[1];return{editClick:function(e){return function(){u(e),a(!0)}},open:n,setOpen:a,editData:c,setEditData:u,handleClose:function(){u({}),a(!1)}}}(),p=d.editClick,m=Object(s.c)(g.getListByPage),y=Object(o.a)(m,3),j=y[0],E=y[1],_=E.all_order_list,C=E.all_order_list_total,B=y[2];return i.a.useEffect(function(){j({data:Object(a.a)({},n.pageData)})},[j,n.pageData]),i.a.createElement(u.a.Box,null,i.a.createElement("header",null,i.a.createElement(u.a.HeaderBox,null,i.a.createElement("header",null,"\u8ba2\u5355\u5217\u8868"),i.a.createElement("section",null,"\u60a8\u53ef\u4ee5\u8fdb\u884c\u7ba1\u7406"),i.a.createElement("main",null))),i.a.createElement("main",null,B?i.a.createElement(l.a.Loading,null,i.a.createElement(b.a,null)):i.a.createElement(u.a.Table,{theme:t},i.a.createElement(v.a,null,i.a.createElement(h.a,null,["\u8ba2\u5355\u7f16\u53f7","\u521b\u5efa\u7528\u6237","\u521b\u5efa\u65f6\u95f4","\u8ba2\u5355\u8be6\u60c5"].map(function(e){return i.a.createElement(x.a,{key:"TableHead".concat(e)},e)}))),i.a.createElement(w.a,null,null===_||void 0===_?void 0:_.map(function(e){var t;return i.a.createElement(h.a,{key:"TableBody".concat(null===e||void 0===e?void 0:e.id)},i.a.createElement(x.a,null,null===e||void 0===e?void 0:e.number),i.a.createElement(x.a,null,null===e||void 0===e?void 0:null===(t=e.user)||void 0===t?void 0:t.name),i.a.createElement(x.a,null,Object(O.c)(new Date(null===e||void 0===e?void 0:e.create_time),"yyyy/MM/dd HH:mm")),i.a.createElement(x.a,null,i.a.createElement(u.a.ActionTableCell,null,i.a.createElement(c.a,{color:"secondary",onClick:function(){p({productList:null===e||void 0===e?void 0:e.product})()},variant:"contained"},"\u8be6\u60c5"))))}))),i.a.createElement(f.a,Object.assign({},n,{count:~~C,refresh:j}))),i.a.createElement(P,Object.assign({theme:t},d)))};t.default=_},524:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"c",function(){return d}),n.d(t,"d",function(){return m}),n.d(t,"b",function(){return g});var a=n(23),o=n.n(a),r=n(19),i=n(40),l=n(20),c=n(0),u=(n(545),n(189)),s=function(e,t,n){var a=Object(c.useState)(),s=Object(l.a)(a,2),d=s[0],p=s[1],m=Object(c.useState)(),g=Object(l.a)(m,2),f=g[0],b=g[1],h=Object(c.useState)(!1),x=Object(l.a)(h,2),v=x[0],w=x[1];return[Object(c.useCallback)(function(){var a=Object(i.a)(o.a.mark(function a(i){var l,c;return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return w(!0),a.next=3,u.a.mutate(Object(r.a)({mutation:e,variables:Object(r.a)({},n?n(i):i)},t)).catch(function(e){throw b(e),e}).finally(function(){w(!1)});case 3:return l=a.sent,c=l.data,p(c),a.abrupt("return",c);case 7:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}(),[n,e,t]),d,v,f]},d=function(e,t,n){var a,s=Object(c.useState)(),d=Object(l.a)(s,2),p=d[0],m=d[1],g=Object(c.useState)(),f=Object(l.a)(g,2),b=f[0],h=f[1],x=Object(c.useState)(!1),v=Object(l.a)(x,2),w=v[0],O=v[1];return[Object(c.useCallback)(function(){var a=Object(i.a)(o.a.mark(function a(i,l){var c,s;return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return O(!0),a.next=3,u.a.query(Object(r.a)({fetchPolicy:"network-only",query:e,variables:Object(r.a)({},n?n(i):i)},t,l)).catch(function(e){throw h(e),e}).finally(function(){O(!1)});case 3:return c=a.sent,s=c.data,m(s),a.abrupt("return",s);case 7:case"end":return a.stop()}},a)}));return function(e,t){return a.apply(this,arguments)}}(),[n,t,e]),null!==(a=p)&&void 0!==a?a:{},w,b]},p=function(e){return{data:e}},m=function(e,t){return d(e,t,p)},g=function(e,t){return s(e,t,p)}},526:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(14),i=n(552),l={};l.Box=Object(r.a)(i.a).withConfig({displayName:"style__Box",componentId:"sc-3ni4n2-0"})(["&&&{padding-left:0;padding-right:0;}"]),n.d(t,"a",function(){return c});var c=function(e){return o.a.createElement(l.Box,Object.assign({align:"center"},e))}},527:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(14),o=n(551),r={Box:Object(a.a)("div").withConfig({displayName:"tableBox__Box",componentId:"sc-1ufeqc9-0"})(["margin:20px;> header{display:grid;grid-column-gap:10px;grid-template-columns:minmax(200px,auto) repeat(2,1fr);> section{flex:1;}}"]),Table:Object(a.a)(o.a).withConfig({displayName:"tableBox__Table",componentId:"sc-1ufeqc9-1"})(["&&&{margin-top:20px;border-radius:5px;border-collapse:initial;overflow:hidden;border:1px solid rgba(224,224,224,1);> thead{background:",";> tr > th{color:",";}}}"],function(e){return e.theme.palette.grey[800]},function(e){return e.theme.palette.common.white}),HeaderBox:Object(a.a)("section").withConfig({displayName:"tableBox__HeaderBox",componentId:"sc-1ufeqc9-2"})(["&&&{display:flex;flex-direction:column;> header{font-size:20px;font-weight:bold;margin-bottom:15px;}> section{font-weight:bold;font-size:14px;margin-bottom:10px;}> main{display:flex;align-items:center;> div{margin-right:10px;}}}"]),ActionTableCell:Object(a.a)("section").withConfig({displayName:"tableBox__ActionTableCell",componentId:"sc-1ufeqc9-3"})(["&&&{display:flex;> button{margin-right:8px;&:last-of-type{margin-right:0;}}}"])}},531:function(e,t,n){"use strict";n.d(t,"b",function(){return c}),n.d(t,"a",function(){return u});var a=n(19),o=n(20),r=n(0),i=n.n(r),l=n(540),c=function(){var e=Object(r.useState)({page:0,rows_per_page:10}),t=Object(o.a)(e,2),n=t[0],i=t[1];return{pageData:n,setPageData:function(e){return i(Object(a.a)({},n,e))}}},u=function(e){var t=e.pageData,n=e.setPageData,a=e.count;return i.a.createElement(l.a,{component:"div",rowsPerPageOptions:[5,10,25],count:a,rowsPerPage:t.rows_per_page||10,page:t.page||0,onChangePage:function(e,t){n({page:t})},onChangeRowsPerPage:function(e){n({rows_per_page:e.target.value})}})}},536:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n(14),o=n(457),r=n(452),i={};i.Content=Object(a.a)(o.a).withConfig({displayName:"style__Content",componentId:"icrqdu-0"})(["&&&{> footer{margin:10px 0;}}"]),i.TextFieldBox=Object(a.a)(r.a).withConfig({displayName:"style__TextFieldBox",componentId:"icrqdu-1"})(["&&&{padding:0 15px;}"])},539:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(14),o=n(551),r={};r.Box=Object(a.a)("div").withConfig({displayName:"style__Box",componentId:"nwtuux-0"})(["margin:20px;> header{display:grid;grid-column-gap:10px;grid-template-columns:minmax(200px,auto) repeat(2,1fr);> section{flex:1;}}"]),r.Table=Object(a.a)(o.a).withConfig({displayName:"style__Table",componentId:"nwtuux-1"})(["&&&{margin-top:20px;border-radius:5px;border-collapse:initial;overflow:hidden;border:1px solid rgba(224,224,224,1);> thead{background:",";> tr > th{color:",";}}}"],function(e){return e.theme.palette.grey[800]},function(e){return e.theme.palette.common.white}),r.Loading=Object(a.a)("section").withConfig({displayName:"style__Loading",componentId:"nwtuux-2"})(["text-align:center;"]),r.ActionTableCell=Object(a.a)("section").withConfig({displayName:"style__ActionTableCell",componentId:"nwtuux-3"})(["&&&{display:flex;> button{margin-right:8px;&:last-of-type{margin-right:0;}}}"]),r.HeaderBox=Object(a.a)("section").withConfig({displayName:"style__HeaderBox",componentId:"nwtuux-4"})(["&&&{display:flex;flex-direction:column;> header{font-size:20px;font-weight:bold;margin-bottom:15px;}> section{font-weight:bold;font-size:14px;margin-bottom:10px;}> main{display:flex;align-items:center;> div{margin-right:10px;}}}"]),r.ImgPreview=Object(a.a)("section").withConfig({displayName:"style__ImgPreview",componentId:"nwtuux-5"})(["width:180px;display:inline-flex;> img{width:80px;height:60px;}> section{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-left:10px;}"]),r.SearchBox=Object(a.a)("div").withConfig({displayName:"style__SearchBox",componentId:"nwtuux-6"})(["display:grid;grid-template-columns:4fr 3fr 2fr;grid-gap:12px;> span{grid-area:2 / 1 / 2 / 3;justify-self:end;align-self:center;}"])},540:function(e,t,n){"use strict";var a=n(1),o=n(4),r=n(0),i=n.n(r),l=(n(2),n(3)),c=n(9),u=n(269),s=n(523),d=n(463),p=n(552),m=n(515),g=n(268),f=n(191),b=n(192),h=n(45),x=n(503),v=i.a.createElement(b.a,null),w=i.a.createElement(f.a,null),O=i.a.createElement(f.a,null),y=i.a.createElement(b.a,null),j=i.a.forwardRef(function(e,t){var n=e.backIconButtonProps,r=e.count,l=e.nextIconButtonProps,c=e.onChangePage,u=e.page,s=e.rowsPerPage,d=Object(o.a)(e,["backIconButtonProps","count","nextIconButtonProps","onChangePage","page","rowsPerPage"]),p=Object(h.a)();return i.a.createElement("div",Object(a.a)({ref:t},d),i.a.createElement(x.a,Object(a.a)({onClick:function(e){c(e,u-1)},disabled:0===u,color:"inherit"},n),"rtl"===p.direction?v:w),i.a.createElement(x.a,Object(a.a)({onClick:function(e){c(e,u+1)},disabled:u>=Math.ceil(r/s)-1,color:"inherit"},l),"rtl"===p.direction?O:y))}),E=function(e){var t=e.from,n=e.to,a=e.count;return"".concat(t,"-").concat(-1===n?a:n," of ").concat(a)},P=[10,25,50,100],_=i.a.forwardRef(function(e,t){var n,r=e.ActionsComponent,c=void 0===r?j:r,f=e.backIconButtonProps,b=e.backIconButtonText,h=void 0===b?"Previous page":b,x=e.classes,v=e.className,w=e.colSpan,O=e.component,y=void 0===O?p.a:O,_=e.count,C=e.labelDisplayedRows,B=void 0===C?E:C,I=e.labelRowsPerPage,k=void 0===I?"Rows per page:":I,N=e.nextIconButtonProps,T=e.nextIconButtonText,S=void 0===T?"Next page":T,R=e.onChangePage,L=e.onChangeRowsPerPage,D=e.page,A=e.rowsPerPage,H=e.rowsPerPageOptions,q=void 0===H?P:H,z=e.SelectProps,M=void 0===z?{}:z,$=Object(o.a)(e,["ActionsComponent","backIconButtonProps","backIconButtonText","classes","className","colSpan","component","count","labelDisplayedRows","labelRowsPerPage","nextIconButtonProps","nextIconButtonText","onChangePage","onChangeRowsPerPage","page","rowsPerPage","rowsPerPageOptions","SelectProps"]);y!==p.a&&"td"!==y||(n=w||1e3);var F=M.native?"option":s.a;return i.a.createElement(y,Object(a.a)({className:Object(l.a)(x.root,v),colSpan:n,ref:t},$),i.a.createElement(m.a,{className:x.toolbar},i.a.createElement("div",{className:x.spacer}),q.length>1&&i.a.createElement(g.a,{color:"inherit",variant:"body2",className:x.caption},k),q.length>1&&i.a.createElement(d.a,Object(a.a)({classes:{select:x.select,icon:x.selectIcon},input:i.a.createElement(u.a,{className:Object(l.a)(x.input,x.selectRoot)}),value:A,onChange:L},M),q.map(function(e){return i.a.createElement(F,{className:x.menuItem,key:e.value?e.value:e,value:e.value?e.value:e},e.label?e.label:e)})),i.a.createElement(g.a,{color:"inherit",variant:"body2",className:x.caption},B({from:0===_?0:D*A+1,to:Math.min(_,(D+1)*A),count:_,page:D})),i.a.createElement(c,{className:x.actions,backIconButtonProps:Object(a.a)({title:h,"aria-label":h},f),count:_,nextIconButtonProps:Object(a.a)({title:S,"aria-label":S},N),onChangePage:R,page:D,rowsPerPage:A})))});t.a=Object(c.a)(function(e){return{root:{color:e.palette.text.primary,fontSize:e.typography.pxToRem(14),overflow:"auto","&:last-child":{padding:0}},toolbar:{minHeight:52,paddingRight:2},spacer:{flex:"1 1 100%"},caption:{flexShrink:0},selectRoot:{marginRight:32,marginLeft:8},select:{paddingLeft:8,paddingRight:24,textAlign:"right",textAlignLast:"right"},selectIcon:{top:1},input:{color:"inherit",fontSize:"inherit",flexShrink:0},menuItem:{},actions:{flexShrink:0,marginLeft:20}}},{name:"MuiTablePagination"})(_)}}]);