_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[48],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},"48fX":function(e,t,n){var r=n("qhzo");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"5fIB":function(e,t,n){var r=n("7eYB");e.exports=function(e){if(Array.isArray(e))return r(e)}},"8Kt/":function(e,t,n){"use strict";n("oI91");t.__esModule=!0,t.defaultHead=c,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),d=n("FYa8"),l=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function c(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function s(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(s,[]).reverse().concat(c(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var d=0,l=p.length;d<l;d++){var u=p[d];if(o.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?a=!1:n.add(u);else{var c=o.props[u],s=r[u]||new Set;s.has(c)?a=!1:(s.add(c),r[u]=s)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function v(e){var t=e.children,n=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(d.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:f,headManager:r,inAmpMode:(0,l.isInAmpMode)(n)},t)}v.rewind=function(){};var m=v;t.default=m},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},Pi4a:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/m/pay",function(){return n("RTYB")}])},RTYB:function(e,t,n){"use strict";n.r(t);var r=n("MX0m"),o=n.n(r),a=n("q1tI"),i=n.n(a),d=n("8Kt/"),l=n.n(d),u=n("B42p"),c=n("nOHt"),s=n("OO/1"),p=n("U81q"),f=n("cWmw"),v=n("cBzo"),m=n("4Rmy"),b=i.a.createElement;t.default=function(){var e,t,n=Object(c.useRouter)(),r=null!==(e=null===(t=n.query)||void 0===t?void 0:t.orderId)&&void 0!==e?e:"",i=Object(p.b)(f.c),d=i.state,h=i.actions,y=d.orderInfo||{};return Object(a.useEffect)((function(){r&&h.getDetail("".concat(r))}),[r]),Object(a.useEffect)((function(){if(window.SqPaymentForm&&y.actuallyPaid){var e,t=new SqPaymentForm({applicationId:"sq0idp-IAEwX77Hdunl5dWByHQjIQ",inputClass:"sq-input",autoBuild:!1,inputStyles:[{fontSize:"16px",lineHeight:"24px",padding:"16px",placeholderColor:"#a0a0a0",backgroundColor:"transparent"}],cardNumber:{elementId:"sq-card-number",placeholder:"Card Number"},cvv:{elementId:"sq-cvv",placeholder:"CVV"},expirationDate:{elementId:"sq-expiration-date",placeholder:"MM/YY"},postalCode:{elementId:"sq-postal-code",placeholder:"Postal"},callbacks:{cardNonceResponseReceived:function(e,t,o){var a;if(e)return console.error("Encountered errors:"),e.forEach((function(e){console.error("  "+e.message)})),void Object(s.b)("Encountered errors, check browser developer console for more details");fetch("/pay/process-payment",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({nonce:t,amount:~~(100*(null!==(a=y.actuallyPaid)&&void 0!==a?a:0))})}).catch((function(e){Object(s.b)("Network error: "+e)})).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).then((function(e){return h.updateOrder({id:r,state:m.h.Paid})})).then((function(){Object(s.b)("\u652f\u4ed8\u6210\u529f"),n.replace("/m/cart/result")})).catch((function(e){console.error(e),Object(s.b)("Payment failed to complete!\nCheck browser developer console for more details")}))}}});t.build();null===(e=document.querySelector("#sq-creditcard"))||void 0===e||e.addEventListener("click",(function(e){e.preventDefault(),t.requestCardNonce()}))}}),[y.actuallyPaid]),b("div",{className:"jsx-2628901187"},b(l.a,null,b("title",{className:"jsx-2628901187"},"pay"),b("script",{type:"text/javascript",src:"https://js.squareup.com/v2/paymentform",className:"jsx-2628901187"})),b(u.a,{title:"\u652f\u4ed8",backCall:function(){return n.replace("/m/home"),!0}}),b("div",{id:"form-container",className:"jsx-2628901187"},!y.actuallyPaid&&"\u672a\u627e\u5230\u8ba2\u5355\u4fe1\u606f",b("div",{id:"sq-card-number",className:"jsx-2628901187"}),b("div",{id:"sq-expiration-date",className:"jsx-2628901187 third"}),b("div",{id:"sq-cvv",className:"jsx-2628901187 third"}),b("div",{id:"sq-postal-code",className:"jsx-2628901187 third"}),b("button",{id:"sq-creditcard",className:"jsx-2628901187 button-credit-card"},"Pay ",Object(v.c)(y.actuallyPaid))),b(o.a,{id:"2628901187"},["*{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}",'body,html{background-color:#F7F8F9;color:#373F4A;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-weight:normal;height:100%;}',"button{border:0;font-weight:500;}","fieldset{margin:0;padding:0;border:0;}","#form-container{padding:6.25vw;}",".third{float:left;width:calc((100% - 10vw) / 3);padding:0;margin:0 5vw 5vw 0;}",".third:last-of-type{margin-right:0;}",".sq-input{height:56PX;box-sizing:border-box;border:1px solid #E0E2E3;background-color:white;border-radius:1.875vw;display:inline-block;-webkit-transition:border-color .2s ease-in-out;transition:border-color .2s ease-in-out;}",".sq-input--focus{border:1px solid #4A90E2;}",".sq-input--error{border:1px solid #E02F2F;}","#sq-card-number{margin-bottom:5vw;}",".button-credit-card{width:100%;height:17.5vw;margin-top:3.125vw;background:#4A90E2;border-radius:1.875vw;cursor:pointer;display:block;color:#FFFFFF;font-size:5vw;line-height:7.5vw;font-weight:700;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;text-align:center;-webkit-transition:background .2s ease-in-out;transition:background .2s ease-in-out;}",".button-credit-card:hover{background-color:#4281CB;}"]))}},T0f4:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},Xuae:function(e,t,n){"use strict";var r=n("mPvQ"),o=n("/GRZ"),a=n("i2R6"),i=(n("qXWd"),n("48fX")),d=n("tCBg"),l=n("T0f4");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=l(e);if(t){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}t.__esModule=!0,t.default=void 0;var c=n("q1tI"),s=function(e){i(n,e);var t=u(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(c.Component);t.default=s},cWmw:function(e,t,n){"use strict";n.d(t,"c",(function(){return O})),n.d(t,"b",(function(){return P})),n.d(t,"a",(function(){return M}));var r=n("o0o1"),o=n.n(r),a=n("HaE+"),i=n("q1tI"),d=n.n(i),l=n("B42p"),u=n("Z3gB"),c=n("vOnD"),s=n("+/yG"),p=n("i7FU"),f=n("cBzo"),v=n("U81q"),m=n("nOHt"),b=n("+vfP"),h=n("4Rmy"),y=n("ZtJr"),g=n("LXXt"),x=n("Oj7+"),w=n("cW92"),j=d.a.createElement,O=Object(s.c)("orderDetail",{orderInfo:{},selfAddress:[]},{getDetail:function(){var e=Object(a.a)(o.a.mark((function e(t,n){var r,a,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.query(p.b.orderDetail,{id:t});case 2:i=e.sent,n.setData(Object(f.g)({orderInfo:(null===i||void 0===i?void 0:i.orderDetail)||{},selfAddress:(null===i||void 0===i||null===(r=i.selfAddress)||void 0===r||null===(a=r.value)||void 0===a?void 0:a.list)||[]}));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),updateOrder:function(){var e=Object(a.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.mutate(p.b.updateOrder,{orderInfoItemInput:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}),_=c.a.div.withConfig({displayName:"orderDetail__Box",componentId:"sc-11dm5lg-0"})(["padding:0 20px;"]),C=c.a.div.withConfig({displayName:"orderDetail__Top",componentId:"sc-11dm5lg-1"})(["margin-top:10px;font-size:18px;display:flex;> aside{margin-left:20px;color:",";}"],y.b.red),k=c.a.div.withConfig({displayName:"orderDetail__InfoLabel",componentId:"sc-11dm5lg-2"})(["display:flex;margin-top:16px;> section{> *{margin-bottom:4px;}}> aside{color:",";width:80px;}"],g.a[600]),I=c.a.div.withConfig({displayName:"orderDetail__GreyPart",componentId:"sc-11dm5lg-3"})(["margin-top:12px;position:relative;left:-20px;width:100vw;height:12px;background:",";"],g.a[200]),P=c.a.div.withConfig({displayName:"orderDetail__ProductBox",componentId:"sc-11dm5lg-4"})(["display:grid;padding-top:4vw;margin-bottom:10px;grid-template-columns:min-content 1fr 30vw;> img{grid-area:1/1/4/2;width:20vw;height:20vw;margin-right:14px;}> section{grid-area:1/2/2/4;font-size:20px;> span{font-size:16px;color:",";}}> main{padding:10px 0;grid-area:2/2/3/4;font-size:14px;color:",";}> footer{display:flex;> aside{text-decoration:line-through;}> span{margin-left:5px;color:",";font-size:17px;}}> aside{justify-self:end;> button{border-radius:10px;padding:2px 14px;}}"],y.b.grey,g.a[500],y.b.red),q=c.a.div.withConfig({displayName:"orderDetail__Sum",componentId:"sc-11dm5lg-5"})(["display:flex;justify-content:space-between;margin-bottom:12px;"]),M=function(){var e,t,n,r,o,a,c,s,p,g,M,A=Object(m.useRouter)(),E=Object(v.b)(O),N=E.state,S=E.actions,H=N.orderInfo;return Object(i.useEffect)((function(){var e,t;A.query.id&&!(null===(e=N.orderInfo)||void 0===e?void 0:e.id)&&S.getDetail("".concat(null===(t=A.query)||void 0===t?void 0:t.id))}),[A.query.id,N.orderInfo]),j("div",null,j(l.a,{title:"\u8ba2\u5355\u8be6\u60c5"}),(null===H||void 0===H?void 0:H.id)?j(u.a,{boxHeight:"calc(100vh - 60px)"},j(_,null,j(w.b,{h:16}),j(C,null,j("section",null,Object(f.e)(H.createTime,"YYYY/MM/dd")),j("aside",null,Object(h.o)(null===H||void 0===H?void 0:H.state))),j(k,null,j("aside",null,Object(b.a)("\u8ba2\u5355\u7f16\u53f7")," :"),j("section",null,H.number)),j(k,null,j("aside",null,Object(b.a)("\u9001\u8d27\u5730\u5740")," :"),j("section",null,H.pickUpType===h.i.Self&&(M=N.selfAddress.find((function(e){return e.id===H.selfAddressId})),j(d.a.Fragment,null,j("main",null,M.fullName),j("header",null,M.streetAddress),j("footer",null,M.city," ",M.province," ",M.zip)))||j(d.a.Fragment,null,j("main",null,null===(e=H.userAddress)||void 0===e?void 0:e.name),j("header",null,null===(t=H.userAddress)||void 0===t?void 0:t.address),j("footer",null,null===(n=H.userAddress)||void 0===n?void 0:n.city," ",null===(r=H.userAddress)||void 0===r?void 0:r.province," ",null===(o=H.userAddress)||void 0===o?void 0:o.zip)))),j(k,null,j("aside",null,Object(b.a)("\u652f\u4ed8\u65b9\u5f0f")," :"),j("section",null,j("header",null,null===H||void 0===H||null===(a=H.userPayCard)||void 0===a?void 0:a.code),j("main",null,Object(b.a)("\u8fc7\u671f\u65e5")," ",Object(f.e)(null===H||void 0===H||null===(c=H.userPayCard)||void 0===c?void 0:c.expirationTime,"MM/yy")),j("footer",null,Object(b.a)("\u5361\u53f7\u540e\u56db\u4f4d")," ",Object(f.j)("".concat(null===(s=H.userPayCard)||void 0===s?void 0:s.number))),j("footer",null,Object(b.a)("\u6301\u5361\u4eba")," ",null===H||void 0===H||null===(p=H.userPayCard)||void 0===p?void 0:p.userName))),j(I,null),null===(g=H.rOrderProduct)||void 0===g?void 0:g.map((function(e){var t,n,r,o,a,i,d,l,u,c;return j(P,{key:"ProductBox_".concat(e.id)},j("img",{src:Object(x.a)(null===(t=e.product)||void 0===t||null===(n=t.img)||void 0===n||null===(r=n[0])||void 0===r?void 0:r.url),alt:""}),j("section",null,null===(o=e.product)||void 0===o?void 0:o.name,j(w.b,{w:y.b.space.xxs})),j("main",null,null===(a=e.product)||void 0===a?void 0:a.remark),j("footer",null,j("aside",null,Object(f.c)(null===(i=e.product)||void 0===i?void 0:i.priceMarket)),j("span",null,Object(f.c)(null===(d=e.product)||void 0===d?void 0:d.priceOut))),j("aside",null,j("span",null,null===(l=e.product)||void 0===l?void 0:l.number,null!==(u=null===(c=e.product)||void 0===c?void 0:c.unit)&&void 0!==u?u:Object(b.a)("\u4ef6"))))})),j("div",{style:{height:"26px",width:"100%"}}),j(q,null,j("aside",null,Object(b.a)("\u5c0f\u8ba1")),j("main",null,Object(f.c)(H.subtotal))),j(q,null,j("aside",null,Object(b.a)("\u4f18\u60e0\u5238\u6298\u6263")),j("main",null,Object(f.c)(0,"-"))),j(q,null,j("aside",null,Object(b.a)("\u8fd0\u8d39")),j("main",null,Object(f.c)(H.transportationCosts))),j(q,null,j("aside",null,Object(b.a)("\u8fbe\u4eba\u5e01\u62b5\u6263")),j("main",null,Object(f.c)(H.deductCoin,"-"))),j(q,null,j("aside",null,Object(b.a)("\u5b9e\u9645\u652f\u4ed8")),j("main",null,Object(f.c)(H.actuallyPaid))),j(q,null,j("aside",null,Object(b.a)("\u83b7\u5f97\u8fbe\u4eba\u5e01")),j("main",null,Object(f.c)(H.generateCoin))),j("div",{style:{height:"96px",width:"100%"}}))):j("div",null))}},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},mPvQ:function(e,t,n){var r=n("5fIB"),o=n("rlHP"),a=n("KckH"),i=n("kG2m");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},oI91:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},qXWd:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},tCBg:function(e,t,n){var r=n("C+bE"),o=n("qXWd");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}}},[["Pi4a",1,0,5,2,3,4,6,7,8]]]);