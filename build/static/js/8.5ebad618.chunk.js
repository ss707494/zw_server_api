(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{5788:function(e,t,a){"use strict";a.r(t);var n=a(19),r=a(0),c=a.n(r),o=a(5871),u=a(5796),i=a(120);function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function m(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var n=a.call(e,t||"default");if("object"!==typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}var f=a(130),s=a(247);a.d(t,"DictList",function(){return d});var d=function(e){var t=Object(i.b)(s.allBook),a=Object(n.a)(t,2),r=a[0],d=a[1];c.a.useEffect(function(){r()},[]);var b=d.allBook?d.allBook.map(function(e){return[e.id,e.name]}):[],p=[{name:"name"},{name:"title"},{name:"code"},{name:"type"},{name:"bookId",type:"Select",options:b},{name:"content",multiline:!0,rows:4},{name:"message"}],v=[{name:"name"},{name:"title"},{name:"code",sort:!0},{name:"type"},{name:"bookName",path:"book.name"},{name:"id"},{name:"message"},{name:"createDate",formatData:function(e){return Object(o.a)(new Date(e),"yyyy/MM/dd HH:mm")}}],E=[["title"],["bookId","Select",b]];return Object(u.a)({queryListGql:f.allNote,deleteGql:f.deleteOneNote,updateGql:f.updateNote,dataListName:"allNote",editType:p,columns:v,dealEditData:function(e){return function(e,t){e[t];return l(e,[t].map(m))}(e,"book")},formColumn:E})(e)};t.default=d},5796:function(e,t,a){"use strict";var n=a(25),r=a.n(n),c=a(28),o=a(10),u=a(31),i=a(19),l=a(0),m=a.n(l),f=a(5798),s=a.n(f),d=a(241),b=a.n(d),p=a(245),v=a.n(p),E=a(123),O=a.n(E),j=a(242),g=a.n(j),y=a(243),D=a.n(y),h=a(244),k=a.n(h),w=a(120),C=a(5802),P=a(43),S=a(33),x=a.n(S),N=a(84),q=a.n(N),F=a(87),T=a.n(F),G=a(86),B=a.n(G),H=a(85),L=a.n(H),I=a(69),J=a.n(I),M=a(240),A=a.n(M),R=a(122),W=a.n(R),z=a(71),K=a.n(z),Q=a(121),U=a.n(Q),V=a(5803),X=a(5801),Y=function(e){var t=e.name,a=e.type,n=e.editData,r=e.setEditData,c=e.options,l=void 0===c?[]:c,f=function(e){return r(Object(u.a)({},n,e))};return"Select"===a?m.a.createElement(m.a.Fragment,null,m.a.createElement(K.a,{shrink:!!n[t]},t),m.a.createElement(U.a,{value:n[t]||"",onChange:function(e){return f(Object(o.a)({},t,e.target.value))}},l.map(function(e){var t=Object(i.a)(e,2),a=t[0],n=t[1];return m.a.createElement(W.a,{key:a,value:a},n)}))):"DatePicker"===a?m.a.createElement(V.b,{utils:X.a},m.a.createElement(V.a,{label:t,value:n[t],onChange:function(e){return f(Object(o.a)({},t,e))}})):m.a.createElement(A.a,{label:t,value:n[t]||"",multiline:e.multiline,rows:e.rows,onChange:function(e){return f(Object(o.a)({},t,e.target.value))}})},Z=function(e){var t=e.typeName,a=void 0===t?"data":t,n=e.updateSchema,l=e.editType,f=e.refetch,s=e.showEdit,d=e.setEditData,b=e.editData,p=e.setShowEdit,v=e.dealEditData,E=void 0===v?function(e){return e}:v,O=Object(w.a)(n),j=Object(i.a)(O,3),g=j[0],y=j[2];return m.a.createElement(q.a,{open:s,onClose:function(){return p(!1)}},m.a.createElement(T.a,null,"EDIT"),m.a.createElement(L.a,null,m.a.createElement("form",null,l.map(function(e){var t=e.name;return m.a.createElement(J.a,{fullWidth:!0,key:"edit".concat(t)},Y(Object(u.a)({},e,{editData:b,setEditData:d})))}))),m.a.createElement(B.a,null,m.a.createElement(x.a,{onClick:Object(c.a)(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(Object(o.a)({},a,E(b)));case 2:p(!1),f();case 4:case"end":return e.stop()}},e,this)}))},y?"loading":"save"),m.a.createElement(x.a,{onClick:function(){return p(!1)}},"cancel")))},$=a(55),_=a(56);function ee(){var e=Object($.a)(["\n    &&& {\n      min-width: 120px;\n      margin-left: 20px;\n    }\n"]);return ee=function(){return e},e}var te={FormControl:Object(_.a)(J.a)(ee())},ae=function(e){var t=e.setFormData,a=e.formData,n=e.formColumn,r=e.onSubmit,c=void 0===r?function(){}:r;return m.a.createElement("form",{onSubmit:function(e){e.preventDefault(),c()}},n.map(function(e){var n=Object(i.a)(e,3),r=n[0],c=n[1],o=n[2];return m.a.createElement(te.FormControl,{key:"SearchForm".concat(r)},Y({name:r,type:c,options:o,editData:a,setEditData:t}))}))},ne=a(83),re=function(e){var t=e.pageData,a=e.setPageData,n=e.count,r=e.refresh,c=void 0===r?function(){}:r;return m.a.createElement(ne.c,{component:"div",rowsPerPageOptions:[5,10,25],count:n,rowsPerPage:t.rowsPerPage||10,page:t.page||0,onChangePage:function(e,t){a({page:t}),c({page:t})},onChangeRowsPerPage:function(e){a({rowsPerPage:e.target.value}),c({rowsPerPage:e.target.value})}})},ce=a(48),oe=a.n(ce);function ue(){var e=Object($.a)(["\n  display: flex;\n"]);return ue=function(){return e},e}function ie(){var e=Object($.a)(["\n  padding: 10px;\n"]);return ie=function(){return e},e}var le={};le.TableSection=Object(_.a)(oe.a)(ie()),le.Header=Object(_.a)("header")(ue()),a.d(t,"a",function(){return me});var me=function(e){return function(t){var a=Object(P.a)(),n=Object(i.a)(a,1)[0],f=Object(w.b)(e.queryListGql),d=Object(i.a)(f,2),p=d[0],E=d[1],j=E[e.dataListName],y=void 0===j?[]:j,h=E.total,S=void 0===h?0:h,x=Object(w.a)(e.deleteGql),N=Object(i.a)(x,1)[0],q=function(){var e=Object(l.useState)({}),t=Object(i.a)(e,2),a=t[0];return{setFormData:t[1],formData:a}}(),F=function(){var e=Object(l.useState)({page:0,rowsPerPage:10}),t=Object(i.a)(e,2),a=t[0],n=t[1];return{pageData:a,setPageData:function(e){return n(Object(u.a)({},a,e))}}}(),T=m.a.useState({}),G=Object(i.a)(T,2),B=G[0],H=G[1],L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return p({data:Object(u.a)({},q.formData,{sortData:B},F.pageData,e)})};Object(l.useEffect)(function(){L()},[]);var I=function(){var e=Object(l.useState)(!1),t=Object(i.a)(e,2),a=t[0],n=t[1],r=Object(l.useState)({}),c=Object(i.a)(r,2),o=c[0],u=c[1];return{editClick:function(e){return function(){u(e),n(!0)}},showEdit:a,setEditData:u,editData:o,setShowEdit:n}}(),J=I.editClick,M=e.editType,A=e.columns,R=function(e){F.setPageData({page:0}),L(Object(u.a)({page:0},e))};return m.a.createElement(m.a.Fragment,null,m.a.createElement(le.TableSection,null,m.a.createElement(le.Header,null,m.a.createElement(C.a,{variant:"outlined",onClick:J({})},"add"),e.formColumn&&m.a.createElement(m.a.Fragment,null,m.a.createElement(ae,Object.assign({formColumn:e.formColumn,onSubmit:function(){return R()}},q)),m.a.createElement(C.a,{onClick:function(){return R()}},"search"))),m.a.createElement(b.a,null,m.a.createElement(g.a,null,m.a.createElement(D.a,null,A.map(function(e){var t=e.name,a=e.sort;return m.a.createElement(O.a,{key:"tableHead".concat(t)},a?m.a.createElement(k.a,{title:"sort"},m.a.createElement(ne.d,{active:!0,direction:-1===B[t]?"desc":"asc",onClick:function(){var e=Object(u.a)({},B,Object(o.a)({},t,-(B[t]||1)));H(e),R({sortData:e})}},t)):t)}),m.a.createElement(O.a,null,"action"))),m.a.createElement(v.a,null,y.map(function(e){return m.a.createElement(D.a,{key:e.id},A.map(function(t){var a=t.name,n=t.path,r=t.formatData,c=void 0===r?function(e){return e}:r;return m.a.createElement(O.a,{key:"tableBody".concat(a)},c(s()(e,n||a)))}),m.a.createElement(O.a,null,m.a.createElement(C.a,{variant:"outlined",onClick:J(e)},"edit"),m.a.createElement(C.a,{variant:"outlined",onClick:function(){n.showConfirm({message:"Are you sure",callBack:function(){var t=Object(c.a)(r.a.mark(function t(a){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,N({id:e.id});case 4:L();case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()})}},"del")))}))),m.a.createElement(re,Object.assign({},F,{count:~~S,refresh:L}))),m.a.createElement(Z,Object.assign({refetch:L,editType:M,updateSchema:e.updateGql,dealEditData:e.dealEditData},I)))}}}}]);
//# sourceMappingURL=8.5ebad618.chunk.js.map