(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{443:function(e,t,n){"use strict";n.r(t);var a=n(42),r=n.n(a),o=n(77),l=n(26),c=n(24),u=n(0),i=n.n(u),d=n(483),v=n(508),m=n(475),p=n(507),s=n(509),f=n(177),b=n(488),C=n(189),O=n(157),g=n(11),y=n(12),h=n(433),j=n(429),E=n(91);function F(){var e=Object(g.a)(["\n  grid-area: 4 / 2 / 10 / 3;\n\n"]);return F=function(){return e},e}function T(){var e=Object(g.a)(["&{\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(3, 1fr) 40px;\n  grid-gap: 8px;\n  > span {\n    grid-area: 4 / 1 / 5 / 4;\n  }\n}"]);return T=function(){return e},e}function _(){var e=Object(g.a)(["&{\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-column-gap: 25px;\n  \n}"]);return _=function(){return e},e}function x(){var e=Object(g.a)(["\n&&& {\n  width: 960px;\n  > form {\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-rows: repeat(9, minmax(48px, auto));\n    grid-template-columns: 1fr 1fr;\n    grid-column-gap: 20px;\n    margin-bottom: 20px;\n    \n    > button {\n      grid-area: 10 / 1 / 11 / 3;\n    }\n  }\n}\n"]);return x=function(){return e},e}function w(){var e=Object(g.a)(["\n"]);return w=function(){return e},e}var P={};P.Box=Object(y.a)(h.a)(w()),P.Content=Object(y.a)(j.a)(x()),P.FieldTwoBox=Object(y.a)("section")(_()),P.UploadBox=Object(y.a)("main")(T()),P.UploadFormControl=Object(y.a)(E.a.TextFieldBox)(F());var I=n(428),k=n(171),D=n(176),N=n(78),B=n(486),S=n(46),U=n(469),H=n(484),A=n(515),W=n(510),Q=n(175),L=n(172),M=n(439),J=function(e){var t,n;return Object(l.a)({Active:(null===e||void 0===e?void 0:e.ID)?2:1,F_CIsHot:0,F_CIsNew:0,F_CTNameC:"",F_CPUnitPriceIn:0,F_CPUnitPriceOut:0,F_CPUnitPriceMarket:0,F_CPWeight:0,F_CPCompany:"",Brand:"",num:null!==(t=null===e||void 0===e?void 0:null===(n=e.F_CNumber)||void 0===n?void 0:n.slice(0,6))&&void 0!==t?t:""},e)},z=function(){var e=function(){var e=Object(u.useState)({oneCode:"",twoCode:"",threeCode:""}),t=Object(c.a)(e,2),n=t[0],a=t[1],r=Object(M.postQueryCommodityTypeChildren)(),o=Object(c.a)(r,2),d=o[0],v=o[1].data,m=Object(M.postQueryCommodityTypeChildren)(),p=Object(c.a)(m,2),s=p[0],f=p[1].data,b=Object(M.postQueryCommodityTypeChildren)(),C=Object(c.a)(b,2),O=C[0],g=C[1].data;return i.a.useEffect(function(){n.oneCode&&s({ParentID:n.oneCode})},[n.oneCode,s]),i.a.useEffect(function(){n.twoCode&&O({ParentID:n.twoCode})},[n.twoCode,O]),[Object(l.a)({},n,{one:v,two:f,three:g}),a,{getOne:d,getTwo:s,getThree:O}]}(),t=Object(c.a)(e,3),n=t[0],a=t[1],d=t[2],v=d.getOne,m=d.getTwo,p=d.getThree,s=Object(u.useState)(!1),f=Object(c.a)(s,2),b=f[0],C=f[1],O=Object(u.useState)({}),g=Object(c.a)(O,2),y=g[0],h=g[1];return Object(l.a)({},n,{setLinkData:a,editClick:function(e){return Object(o.a)(r.a.mark(function t(){var n,o,l,c,u,i,d,s,f,b,O,g,y,j;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return C(!0),t.next=3,v();case 3:if(n=t.sent,o=J(e),h(o),!o.F_CTID||!o.F_CNumber){t.next=18;break}return f=[o.F_CNumber[0]+o.F_CNumber[1],o.F_CNumber.slice(0,4),o.F_CNumber.slice(0,6)],b=null===n||void 0===n?void 0:null===(l=n.data)||void 0===l?void 0:null===(c=l.find(function(e){return e.F_CTNumber===f[0]}))||void 0===c?void 0:c.F_CTID,t.next=11,m({Type:2,F_CTNumber:f[0]});case 11:return O=t.sent,g=null===O||void 0===O?void 0:null===(u=O.data)||void 0===u?void 0:null===(i=u.find(function(e){return e.F_CTNumber===f[1]}))||void 0===i?void 0:i.F_CTID,t.next=15,p({Type:2,F_CTNumber:f[1]});case 15:y=t.sent,j=null===y||void 0===y?void 0:null===(d=y.data)||void 0===d?void 0:null===(s=d.find(function(e){return e.F_CTNumber===f[2]}))||void 0===s?void 0:s.F_CTID,a({oneCode:b,twoCode:g,threeCode:j});case 18:case"end":return t.stop()}},t)}))},open:b,setOpen:C,editData:y,setEditData:h})},G=function(e){var t,n,a=e.oneCode,v=e.twoCode,m=e.one,p=e.two,s=e.threeCode,f=e.three,b=e.setLinkData,g=e.open,y=e.setOpen,h=e.editData,j=e.setEditData,F=e.refreshData,T=void 0===F?function(){}:F,_=B.a.post("/Products/UpdateCommodity"),x=Object(c.a)(_,3),w=x[0],M=x[2],J=Object(u.useState)({oneNum:"",twoNum:"",threeNum:""}),z=Object(c.a)(J,2),G=z[0],q=z[1],K=function(e,t){return Object.keys(t).reduce(function(n,a){var r,o,l,c;return{IDs:[].concat(Object(O.a)(null!==(r=n.IDs)&&void 0!==r?r:[]),[null!==(o=null===e||void 0===e?void 0:null===(l=e[a])||void 0===l?void 0:l.F_PID)&&void 0!==o?o:""]),file:[].concat(Object(O.a)(null!==(c=n.file)&&void 0!==c?c:[]),[t[a]])}},{})},R=function(){b({oneCode:"",twoCode:"",threeCode:""}),$({}),y(!1),j({})},V=function(){var e=Object(o.a)(r.a.mark(function e(){var t,n,o,c,u;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=K(null!==(t=null===h||void 0===h?void 0:h.PhotoArray)&&void 0!==t?t:[],Z),e.next=3,w(Object(l.a)({},h,{Brand:h.F_CPBrand,F_CTID:s||v||a||""}));case 3:if((null===(o=e.sent)||void 0===o?void 0:o.msg)&&Object(S.b)({message:null!==(c=null===o||void 0===o?void 0:o.msg)&&void 0!==c?c:"\u64cd\u4f5c\u6210\u529f"}),!(o.result&&(null===o||void 0===o?void 0:o.data))){e.next=11;break}if(!(null===n||void 0===n?void 0:n.IDs)){e.next=9;break}return e.next=9,Object(L.a)({Type:1,BussinessID:null===o||void 0===o?void 0:null===(u=o.data)||void 0===u?void 0:u.F_CNumber,IDs:n.IDs.join(",")},n.file,"/Products/UpLoadPicture");case 9:T(),R();case 11:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();i.a.useEffect(function(){j(function(e){return Object(l.a)({},e,{num:G.threeNum||G.twoNum||G.oneNum||""})})},[j,G]);var X=Object(u.useState)({}),Y=Object(c.a)(X,2),Z=Y[0],$=Y[1];return i.a.createElement(P.Box,{open:g,onClose:R,maxWidth:!1},i.a.createElement(I.a,null,"\u65b0\u589e\u4ea7\u54c1"),i.a.createElement(P.Content,null,i.a.createElement("form",null,i.a.createElement(k.a,{InputProps:{readOnly:!0},label:"\u4ea7\u54c1\u7f16\u53f7",value:h.num}),i.a.createElement(D.a,{label:"",placeholder:"\u9009\u62e9\u7c7b\u522b",value:a,onChange:function(e,t){b(function(t){return Object(l.a)({},t,{oneCode:e.target.value,twoCode:"",threeCode:""})}),q(function(e){return Object(l.a)({},e,{oneNum:t.props.num})})}},null===m||void 0===m?void 0:m.map(function(e){return i.a.createElement(d.a,{key:"typeOptionOne".concat(e.F_CTID),value:null===e||void 0===e?void 0:e.F_CTID,num:null===e||void 0===e?void 0:e.F_CTNumber},e.F_CTNameC)})),i.a.createElement(D.a,{label:"",placeholder:"\u9009\u62e9\u7c7b\u522b",value:v,onChange:function(e,t){b(function(t){return Object(l.a)({},t,{twoCode:e.target.value,threeCode:""})}),q(function(e){return Object(l.a)({},e,{twoNum:t.props.num})})}},null===p||void 0===p?void 0:p.map(function(e){return i.a.createElement(d.a,{key:"typeOptionOne".concat(e.F_CTID),value:e.F_CTID,num:null===e||void 0===e?void 0:e.F_CTNumber},e.F_CTNameC)})),i.a.createElement(D.a,{label:"",placeholder:"\u9009\u62e9\u7c7b\u522b",value:s,onChange:function(e,t){b(function(t){return Object(l.a)({},t,{threeCode:e.target.value})}),q(function(e){return Object(l.a)({},e,{threeNum:t.props.num})})}},null===f||void 0===f?void 0:f.map(function(e){return i.a.createElement(d.a,{key:"typeOptionOne".concat(e.F_CTID),value:e.F_CTID,num:null===e||void 0===e?void 0:e.F_CTNumber},e.F_CTNameC)})),i.a.createElement(k.a,{label:"\u4e2d\u6587\u540d\u79f0",value:h.F_CNameC,onChange:function(e){return j(Object(l.a)({},h,{F_CNameC:e.target.value}))}}),i.a.createElement(E.a.TextFieldBox,{as:U.a},i.a.createElement(H.a,{shrink:!0,htmlFor:"tag"},"\u4e0a\u67b6\u7c7b\u578b"),i.a.createElement(W.a,{control:i.a.createElement(A.a,{checked:!!h.F_CIsNew||!1,onChange:function(e){return j(Object(l.a)({},h,{F_CIsNew:e.target.checked?1:0}))}}),label:"\u65b0\u54c1"}),i.a.createElement(W.a,{control:i.a.createElement(A.a,{checked:null!==(t=!!h.F_CIsHot)&&void 0!==t&&t,onChange:function(e){return j(Object(l.a)({},h,{F_CIsHot:e.target.checked?1:0}))}}),label:"\u70ed\u95e8"})),i.a.createElement(k.a,{label:"\u5e93\u5b58",type:"number",value:h.Stock,onChange:function(e){return j(Object(l.a)({},h,{Stock:e.target.value}))}}),i.a.createElement(k.a,{label:"\u8fdb\u8d27\u4ef7\u683c",type:"number",value:h.F_CPUnitPriceIn,onChange:function(e){return j(Object(l.a)({},h,{F_CPUnitPriceIn:e.target.value}))}}),i.a.createElement(k.a,{label:"\u54c1\u724c\u540d\u79f0",value:h.F_CPBrand,onChange:function(e){return j(Object(l.a)({},h,{F_CPBrand:e.target.value}))}}),i.a.createElement(k.a,{label:"\u5e02\u573a\u4ef7\u683c",type:"number",value:h.F_CPUnitPriceMarket,onChange:function(e){return j(Object(l.a)({},h,{F_CPUnitPriceMarket:e.target.value}))}}),i.a.createElement(k.a,{label:"\u552e\u5356\u4ef7\u683c",type:"number",value:h.F_CPUnitPriceOut,onChange:function(e){return j(Object(l.a)({},h,{F_CPUnitPriceOut:e.target.value}))}}),i.a.createElement(P.FieldTwoBox,null,i.a.createElement(k.a,{label:"\u91cd\u91cf",type:"number",value:h.F_CPWeight,onChange:function(e){return j(Object(l.a)({},h,{F_CPWeight:e.target.value}))}}),i.a.createElement(D.a,{label:"\u5355\u4f4d",value:h.F_CPCompany,onChange:function(e){return j(Object(l.a)({},h,{F_CPCompany:e.target.value}))}},null===(n=[["g","\u514b/g"]])||void 0===n?void 0:n.map(function(e){return i.a.createElement(d.a,{key:"F_CPCompany".concat(e[0]),value:e[0]},e[1])}))),i.a.createElement(P.UploadFormControl,{as:U.a},i.a.createElement(H.a,{shrink:!0,htmlFor:"imgUpload"},"\u4e0a\u4f20\u56fe\u7247"),i.a.createElement(P.UploadBox,null,Object(O.a)(Array(7).keys()).map(function(e){var t,n,a,r;return i.a.createElement(Q.a,{key:"ImgUpload".concat(e),initSrc:null!==(t=null===h||void 0===h?void 0:null===(n=h.PhotoArray)||void 0===n?void 0:null===(a=n[e])||void 0===a?void 0:a.F_PWebPath)&&void 0!==t?t:"",onChange:(r=e,function(e){$(Object(l.a)({},Z,Object(C.a)({},r,e)))})})}),i.a.createElement("span",null,"\u6700\u591a\u652f\u6301\u4e0a\u4f207\u5f20\u56fe\u7247,\u6bcf\u5f20\u56fe\u7247\u5927\u5c0f\u4e0d\u8d85\u8fc71m,\u6587\u4ef6\u683c\u5f0f\u4ec5\u652f\u6301PNG/JPG"))),i.a.createElement(N.a,{loading:M?1:0,color:"primary",variant:"contained",fullWidth:!0,onClick:V},"\u4fdd\u5b58"))))};function q(){var e=Object(g.a)(["\n&&& {\n  width: 660px;\n  > form {\n    margin-bottom: 20px;\n  }\n}\n"]);return q=function(){return e},e}function K(){var e=Object(g.a)(["\n"]);return K=function(){return e},e}var R={};R.Box=Object(y.a)(h.a)(K()),R.Content=Object(y.a)(j.a)(q());var V=function(e){var t=e.open,n=e.setOpen,a=e.editData,u=e.setEditData,d=e.refreshData,v=void 0===d?function(){}:d,m=B.a.post("/Products/StockPurchase"),p=Object(c.a)(m,3),s=p[0],f=p[2],b=function(){u({}),n(!1)},C=function(){var e=Object(o.a)(r.a.mark(function e(){var t,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(Object(l.a)({},a));case 2:(t=e.sent).result&&(Object(S.b)({message:null!==(n=null===t||void 0===t?void 0:t.msg)&&void 0!==n?n:"\u64cd\u4f5c\u6210\u529f"}),v(),b());case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return i.a.createElement(R.Box,{open:t,onClose:b,maxWidth:!1},i.a.createElement(I.a,null,"\u8865\u8d27"),i.a.createElement(R.Content,null,i.a.createElement("form",null,i.a.createElement(k.a,{label:"\u8865\u8d27\u6570\u91cf",value:a.Count,onChange:function(e){return u(Object(l.a)({},a,{Count:e.target.value}))}}),i.a.createElement(k.a,{label:"\u4ef7\u683c",value:a.F_CPUnitPriceIn,onChange:function(e){return u(Object(l.a)({},a,{F_CPUnitPriceIn:e.target.value}))}}),i.a.createElement(N.a,{loading:f?1:0,color:"primary",variant:"contained",fullWidth:!0,onClick:C},"\u4fdd\u5b58"))))},X=n(491),Y=n(173),Z=n(229),$=n(517),ee=n(516),te=n(228),ne=n(512),ae=n(513),re=n(504);function oe(){var e=Object(g.a)(["\n  display: grid;\n  grid-template-columns: 4fr 3fr 2fr;\n  grid-gap: 12px;\n  > span {\n    grid-area: 2 / 1 / 2 / 3;\n    justify-self: end;\n    align-self: center;\n  }\n"]);return oe=function(){return e},e}function le(){var e=Object(g.a)(["\n  width: 180px;\n  display: inline-flex;\n  > img {\n    width: 80px;\n    height: 60px;\n  }\n  > section {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin-left: 10px;\n  }\n"]);return le=function(){return e},e}function ce(){var e=Object(g.a)(["&&&{\n  display: flex;\n  flex-direction: column;\n  > header {\n    font-size: 20px;\n    font-weight: bold;\n    margin-bottom: 15px;\n  } \n  > section {\n    font-weight: bold;\n    font-size: 14px;\n    margin-bottom: 10px;\n  }\n  > main {\n    display: flex;\n    align-items: center;\n    //display: grid;\n    //grid-template-columns: auto;\n    //grid-row-gap: 10px;\n    //justify-items: start;\n    \n    > div {\n      margin-right: 10px;\n    }\n  }\n}\n"]);return ce=function(){return e},e}function ue(){var e=Object(g.a)(["&&& {\n  display: flex;\n  > button {\n    margin-right: 8px;\n    &:last-of-type {\n      margin-right: 0;\n    }\n  }\n}"]);return ue=function(){return e},e}function ie(){var e=Object(g.a)(["\n  text-align: center;\n"]);return ie=function(){return e},e}function de(){var e=Object(g.a)(["\n&&&{\n  margin-top: 20px;\n  border-radius: 5px;\n  border-collapse: initial;\n  overflow: hidden;\n  border: 1px solid rgba(224, 224, 224, 1);\n  > thead {\n    background: ",";\n    > tr > th {\n      color: ",";\n    }\n  }\n}\n"]);return de=function(){return e},e}function ve(){var e=Object(g.a)(["\n  margin: 20px;\n  > header {\n    display: grid;\n    grid-column-gap: 10px;\n    grid-template-columns: minmax(200px, auto) repeat(2, 1fr);\n    > section {\n      flex: 1;\n    }\n  }\n"]);return ve=function(){return e},e}var me={};me.Box=Object(y.a)("div")(ve()),me.Table=Object(y.a)(re.a)(de(),function(e){return e.theme.palette.grey[800]},function(e){return e.theme.palette.common.white}),me.Loading=Object(y.a)("section")(ie()),me.ActionTableCell=Object(y.a)("section")(ue()),me.HeaderBox=Object(y.a)("section")(ce()),me.ImgPreview=Object(y.a)("section")(le()),me.SearchBox=Object(y.a)("div")(oe());var pe=n(511);n.d(t,"Product",function(){return be});var se="1",fe="2",be=function(e){var t,n,a,C=e.theme,O=Object(b.b)(),g=z(),y=g.editClick,h=function(){var e=Object(u.useState)(!1),t=Object(c.a)(e,2),n=t[0],a=t[1],r=Object(u.useState)({}),o=Object(c.a)(r,2),l=o[0],i=o[1];return{editClick:function(e){return function(){var t=function(e){return{ID:e.ID}}(e);i(t),a(!0)}},open:n,setOpen:a,editData:l,setEditData:i}}(),j=h.editClick,E=function(){var e=i.a.useState({typeOne:"",typeTwo:"",typeThree:""}),t=Object(c.a)(e,2),n=t[0],a=t[1],r=Object(M.postQueryCommodityTypeChildren)(),o=Object(c.a)(r,2),u=o[0],d=o[1].data,v=Object(M.postQueryCommodityTypeChildren)(),m=Object(c.a)(v,2),p=m[0],s=m[1].data,f=Object(M.postQueryCommodityTypeChildren)(),b=Object(c.a)(f,2),C=b[0],O=b[1].data;return i.a.useEffect(function(){u()},[u]),i.a.useEffect(function(){n.typeOne?p({ParentID:n.typeOne}):a(function(e){return Object(l.a)({},e,{typeTwo:"",res:""})})},[p,n.typeOne]),i.a.useEffect(function(){a(function(e){var t;return Object(l.a)({},e,(null===s||void 0===s?void 0:s.length)?{}:{res:e.typeOne},{typeTwo:(null===s||void 0===s?void 0:null===(t=s[0])||void 0===t?void 0:t.F_CTID)||""})})},[s]),i.a.useEffect(function(){n.typeTwo?C({ParentID:n.typeTwo}):a(function(e){return Object(l.a)({},e,{typeThree:"",res:e.typeOne})})},[C,n.typeTwo]),i.a.useEffect(function(){a(function(e){var t;return Object(l.a)({},e,(null===O||void 0===O?void 0:O.length)?{}:{res:e.typeTwo},{typeThree:(null===O||void 0===O?void 0:null===(t=O[0])||void 0===t?void 0:t.F_CTID)||""})})},[O]),i.a.useEffect(function(){a(function(e){return Object(l.a)({},e,{res:n.typeThree||e.typeTwo})})},[n.typeThree]),{typeHelpObj:n,setTypeHelpObj:a,typeOptionOne:d,typeOptionTwo:s,typeOptionThree:O}}(),F=E.typeHelpObj,T=E.setTypeHelpObj,_=E.typeOptionOne,x=E.typeOptionTwo,w=E.typeOptionThree,P=i.a.useState({type:se,value:""}),I=Object(c.a)(P,2),k=I[0],D=I[1],S=i.a.useState({keywordType:se,type:"",SortType:1}),U=Object(c.a)(S,2),H=U[0],A=U[1],Q=i.a.useState({open:!1,data:[]}),L=Object(c.a)(Q,2),J=L[0],q=L[1],K=B.a.post("/Products/QueryCommodity"),R=Object(c.a)(K,3),re=R[0],oe=R[1],le=R[2],ce=B.a.post("/Products/SetCommodityEnable"),ue=Object(c.a)(ce,1)[0],ie=B.a.post("/Products/ExportCommodity"),de=Object(c.a)(ie,1)[0],ve=B.a.post("/Products/ImportCommodity"),be=Object(c.a)(ve,1)[0],Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return re(Object(l.a)({},H,O.pageData,e,{BussinessID:"1"}))};return i.a.useEffect(function(){re(Object(l.a)({},H,O.pageData,{BussinessID:"1"}))},[re,H,O.pageData]),i.a.useEffect(function(){A(function(e){return Object(l.a)({},e,{F_CTID:F.res||""})})},[F.res]),i.a.createElement(me.Box,null,i.a.createElement("header",null,i.a.createElement(me.HeaderBox,null,i.a.createElement("header",null,"\u4ea7\u54c1\u5217\u8868"),i.a.createElement("section",null,"\u60a8\u53ef\u4ee5\u8fdb\u884c\u7ba1\u7406"),i.a.createElement("main",null,i.a.createElement(N.a,{variant:"contained",color:"primary",onClick:y({})},"\u65b0\u589e"),i.a.createElement(N.a,{variant:"contained",color:"default",onClick:Object(o.a)(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,be();case 2:(null===(t=e.sent)||void 0===t?void 0:t.msg)&&Object(Y.b)({oneButton:!0,message:"".concat(t.msg),callBack:function(){var e=Object(o.a)(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()});case 4:case"end":return e.stop()}},e)}))},"\u5bfc\u5165"),i.a.createElement(N.a,{variant:"contained",color:"default",onClick:Object(o.a)(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,de();case 2:(null===(t=e.sent)||void 0===t?void 0:t.msg)&&Object(Y.b)({oneButton:!0,message:"".concat(t.msg),callBack:function(){var e=Object(o.a)(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()});case 4:case"end":return e.stop()}},e)}))},"\u5bfc\u51fa"))),i.a.createElement(me.HeaderBox,null,i.a.createElement("header",null,"\u540d\u79f0\u641c\u7d22"),i.a.createElement("main",null,i.a.createElement(Z.a,{value:k.value,onChange:function(e){var t;return D(Object(l.a)({},k,{value:null===e||void 0===e?void 0:null===(t=e.target)||void 0===t?void 0:t.value}))},style_type:"light"}),i.a.createElement($.a,{row:!0,value:k.type,onChange:function(e){return D(function(t){var n;return Object(l.a)({},t,{type:null===e||void 0===e?void 0:null===(n=e.target)||void 0===n?void 0:n.value,value:""})})}},i.a.createElement(W.a,{value:se,control:i.a.createElement(ee.a,null),label:"\u7f16\u53f7"}),i.a.createElement(W.a,{value:fe,control:i.a.createElement(ee.a,null),label:"\u540d\u79f0"})),i.a.createElement(N.a,{onClick:function(){return A(Object(l.a)({},H,{F_CNameC:k.type===fe?k.value:"",F_CNumber:k.type===se?k.value:""}))},variant:"contained",color:"secondary"},"\u641c\u7d22"))),i.a.createElement(me.HeaderBox,null,i.a.createElement("header",null,"\u7c7b\u522b\u7b5b\u9009"),i.a.createElement(me.SearchBox,null,i.a.createElement(f.a,{value:F.typeOne,onChange:function(e){T(Object(l.a)({},F,{typeOne:e.target.value}))},clear:1,placeholder:"\u5168\u90e8"},null===_||void 0===_?void 0:_.map(function(e){return i.a.createElement(d.a,{key:"typeOptionOne".concat(e.F_CTID),value:e.F_CTID},e.F_CTNameC)})),i.a.createElement(f.a,{value:F.typeTwo,onChange:function(e){T(Object(l.a)({},F,{typeTwo:e.target.value}))},clear:1,placeholder:"\u5168\u90e8"},null===x||void 0===x?void 0:x.map(function(e){return i.a.createElement(d.a,{key:"typeOptionTwo".concat(e.F_CTID),value:e.F_CTID},e.F_CTNameC)})),i.a.createElement(f.a,{onChange:function(e){T(Object(l.a)({},F,{typeThree:e.target.value}))},value:F.typeThree,clear:1,placeholder:"\u5168\u90e8"},null===w||void 0===w?void 0:w.map(function(e){return i.a.createElement(d.a,{key:"typeOptionThree".concat(e.F_CTID),value:e.F_CTID},e.F_CTNameC)})),i.a.createElement("span",null,"\u7c7b\u522b\u6392\u5e8f"),i.a.createElement(f.a,{placeholder:"\u9009\u62e9\u6392\u5e8f",value:H.SortType,onChange:function(e){A(Object(l.a)({},H,{SortType:e.target.value}))}},i.a.createElement(d.a,{value:1},"\u6309\u4ea7\u54c1\u521b\u5efa/\u4fee\u6539\u65f6\u95f4"),i.a.createElement(d.a,{value:2},"\u5546\u54c1\u7f16\u53f7"),i.a.createElement(d.a,{value:3},"\u5e93\u5b58\u5012\u5e8f"))))),i.a.createElement("main",null,le?i.a.createElement(me.Loading,null,i.a.createElement(m.a,null)):i.a.createElement(me.Table,{theme:C},i.a.createElement(p.a,null,i.a.createElement(v.a,null,["\u5546\u54c1\u7f16\u53f7","\u4e2d\u6587\u540d\u79f0","\u56fe\u7247","\u70ed\u95e8","\u65b0\u54c1","\u5e93\u5b58","\u8fdb\u8d27\u4ef7\u683c","\u5e02\u573a\u4ef7\u683c","\u552e\u5356\u4ef7\u683c","\u91cd\u91cf"].map(function(e){return i.a.createElement(X.a,{key:"TableHead".concat(e)},e)}),i.a.createElement(X.a,{width:220},"\u64cd\u4f5c"))),i.a.createElement(s.a,null,null===oe||void 0===oe?void 0:null===(t=oe.data)||void 0===t?void 0:t.map(function(e){var t,n,a,l,c;return i.a.createElement(v.a,{key:"TableBody".concat(null===e||void 0===e?void 0:e.ID)},i.a.createElement(X.a,null,null===e||void 0===e?void 0:e.F_CNumber),i.a.createElement(X.a,null,null===e||void 0===e?void 0:e.F_CNameC),i.a.createElement(X.a,{width:240},i.a.createElement(me.ImgPreview,null,i.a.createElement("img",{src:null===e||void 0===e?void 0:null===(t=e.PhotoArray)||void 0===t?void 0:null===(n=t[0])||void 0===n?void 0:n.F_PWebPath,alt:""}),i.a.createElement("section",null,i.a.createElement("div",null,null===e||void 0===e?void 0:null===(a=e.PhotoArray)||void 0===a?void 0:a.length,"/7"),i.a.createElement(pe.a,{component:"button",color:"secondary",onClick:function(){var t,n;(null===e||void 0===e?void 0:null===(t=e.PhotoArray)||void 0===t?void 0:t.length)&&q({open:!0,data:null!==(n=null===e||void 0===e?void 0:e.PhotoArray)&&void 0!==n?n:[]})}},"\u9884\u89c8")))),i.a.createElement(X.a,null,1===(null===e||void 0===e?void 0:e.F_CIsHot)?i.a.createElement(ne.a,null):i.a.createElement(ae.a,null)),i.a.createElement(X.a,null,1===(null===e||void 0===e?void 0:e.F_CIsNew)?i.a.createElement(ne.a,null):i.a.createElement(ae.a,null)),i.a.createElement(X.a,null,null===e||void 0===e?void 0:e.Stock),i.a.createElement(X.a,null,null===e||void 0===e?void 0:e.F_CPUnitPriceIn),i.a.createElement(X.a,null,null===e||void 0===e?void 0:e.F_CPUnitPriceOut),i.a.createElement(X.a,null,null===e||void 0===e?void 0:e.F_CPUnitPriceMarket),i.a.createElement(X.a,null,null===e||void 0===e?void 0:e.F_CPWeight),i.a.createElement(X.a,null,i.a.createElement(me.ActionTableCell,null,i.a.createElement(N.a,{color:"secondary",onClick:y(e),variant:"contained"},"\u7f16\u8f91"),i.a.createElement(N.a,{color:"secondary",onClick:j(e),variant:"contained"},"\u8865\u8d27"),i.a.createElement(N.a,{color:(null===e||void 0===e?void 0:null===(l=e.Entry)||void 0===l?void 0:l.F_CTIsEnable)?"primary":"default",variant:"contained",onClick:function(){var t;Object(Y.b)({message:"\u786e\u5b9a".concat((null===e||void 0===e?void 0:null===(t=e.Entry)||void 0===t?void 0:t.F_CTIsEnable)?"\u505c\u7528":"\u542f\u7528","\u8be5\u5546\u54c1\u5417"),callBack:function(){var t=Object(o.a)(r.a.mark(function t(n){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,ue({ID:null===e||void 0===e?void 0:e.ID,IsEnable:(null===e||void 0===e?void 0:e.F_CIsEnable)?0:1});case 4:Ce();case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()})}},(null===e||void 0===e?void 0:null===(c=e.Entry)||void 0===c?void 0:c.F_CTIsEnable)?"\u505c\u7528":"\u542f\u7528"))))}))),i.a.createElement(b.a,Object.assign({},O,{count:~~(null===oe||void 0===oe?void 0:oe.maxCount)}))),i.a.createElement(G,Object.assign({},g,{refreshData:Ce})),i.a.createElement(V,Object.assign({},h,{refreshData:Ce})),i.a.createElement(te.a,{open:null!==(n=J.open)&&void 0!==n&&n,closeModal:function(){return q({open:!1,data:[]})},data:null!==(a=J.data)&&void 0!==a?a:[]}))};t.default=be}}]);