(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},i=n("lwAK");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,i=e.hasQuery;return n||o&&(void 0!==i&&i)}},"/PM6":function(e,t,n){"use strict";n.d(t,"b",(function(){return O})),n.d(t,"a",(function(){return E}));var r=n("o0o1"),o=n.n(r),i=n("HaE+"),a=n("q1tI"),d=n.n(a),l=n("B42p"),u=n("Z3gB"),c=n("vOnD"),s=n("+/yG"),p=n("i7FU"),f=n("cBzo"),v=n("U81q"),m=n("nOHt"),b=n("+vfP"),h=n("4Rmy"),y=n("ZtJr"),g=n("LXXt"),w=n("Oj7+"),x=n("Z3vd"),j=d.a.createElement,O=Object(s.c)("orderDetail",{orderInfo:{},selfAddress:[]},{getDetail:function(){var e=Object(i.a)(o.a.mark((function e(t,n){var r,i,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.query(p.b.orderDetail,{id:t});case 2:a=e.sent,n.setData(Object(f.f)({orderInfo:(null===a||void 0===a?void 0:a.orderDetail)||{},selfAddress:(null===a||void 0===a?void 0:null===(r=a.selfAddress)||void 0===r?void 0:null===(i=r.value)||void 0===i?void 0:i.list)||[]}));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),updateOrder:function(){var e=Object(i.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.mutate(p.b.updateOrder,{orderInfoItemInput:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}),k=c.a.div.withConfig({displayName:"orderDetail__Box",componentId:"lz0d8y-0"})(["padding:0 20px;"]),I=c.a.div.withConfig({displayName:"orderDetail__Top",componentId:"lz0d8y-1"})(["margin-top:10px;font-size:18px;display:flex;> aside{margin-left:20px;color:",";}"],y.a.red),C=c.a.div.withConfig({displayName:"orderDetail__InfoLabel",componentId:"lz0d8y-2"})(["display:flex;margin-top:16px;> aside{color:",";width:80px;}"],g.a[600]),_=c.a.div.withConfig({displayName:"orderDetail__GreyPart",componentId:"lz0d8y-3"})(["margin-top:12px;position:relative;left:-20px;width:100vw;height:12px;background:",";"],g.a[200]),P=c.a.div.withConfig({displayName:"orderDetail__ProductBox",componentId:"lz0d8y-4"})(["display:grid;padding-top:4vw;margin-bottom:10px;grid-template-columns:min-content 1fr 30vw;> img{grid-area:1/1/4/2;width:20vw;height:20vw;margin-right:14px;}> section{grid-area:1/2/2/4;font-size:20px;}> main{padding:10px 0;grid-area:2/2/3/4;font-size:14px;color:",";}> footer{display:flex;> aside{text-decoration:line-through;}> span{margin-left:5px;color:",";font-size:17px;}}> aside{> button{border-radius:10px;padding:2px 14px;}}"],g.a[500],y.a.red),q=c.a.div.withConfig({displayName:"orderDetail__Sum",componentId:"lz0d8y-5"})(["display:flex;justify-content:space-between;margin-bottom:12px;"]),E=function(){var e,t,n,r,o,i=Object(m.useRouter)(),d=Object(v.b)(O),c=d.state,s=d.actions,p=c.orderInfo;return Object(a.useEffect)((function(){var e,t;i.query.id&&!(null===(e=c.orderInfo)||void 0===e?void 0:e.id)&&s.getDetail("".concat(null===(t=i.query)||void 0===t?void 0:t.id))}),[i.query.id,c.orderInfo]),j("div",null,j(l.a,{title:"\u8ba2\u5355\u8be6\u60c5"}),(null===p||void 0===p?void 0:p.id)?j(u.a,{boxHeight:"calc(100vh - 60px)"},j(k,null,j(I,null,j("section",null,Object(b.a)(Object(f.d)(p.createTime))),j("aside",null,Object(h.m)(null===p||void 0===p?void 0:p.state))),j(C,null,j("aside",null,Object(b.a)("\u9001\u8d27\u5730\u5740")," :"),j("section",null,p.pickUpType===h.h.Self&&function(e){return"".concat(e.province," ").concat(e.city," ").concat(e.streetAddress)}(c.selfAddress.find((function(e){return e.id===p.selfAddressId})))||(null===(e=p.userAddress)||void 0===e?void 0:e.combineAddress))),j(C,null,j("aside",null,Object(b.a)("\u8ba2\u5355\u7f16\u53f7")," :"),j("section",null,p.number)),j(C,null,j("aside",null,Object(b.a)("\u652f\u4ed8\u65b9\u5f0f")," :"),j("section",null,j("header",null,null===p||void 0===p?void 0:null===(t=p.userPayCard)||void 0===t?void 0:t.code),j("main",null,Object(f.d)(null===p||void 0===p?void 0:null===(n=p.userPayCard)||void 0===n?void 0:n.expirationTime,"MM/yy")),j("footer",null,null===p||void 0===p?void 0:null===(r=p.userPayCard)||void 0===r?void 0:r.userName))),j(_,null),null===(o=p.rOrderProduct)||void 0===o?void 0:o.map((function(e){var t,n,r,o,i,a;return j(P,{key:"ProductBox_".concat(e.id)},j("img",{src:Object(w.a)(null===(t=e.product)||void 0===t?void 0:null===(n=t.img)||void 0===n?void 0:null===(r=n[0])||void 0===r?void 0:r.url),alt:""}),j("section",null,null===(o=e.product)||void 0===o?void 0:o.name),j("main",null,"\u72ec\u7acb\u5305\u88c5"),j("footer",null,j("aside",null,Object(f.b)(null===(i=e.product)||void 0===i?void 0:i.priceMarket)),j("span",null,Object(f.b)(null===(a=e.product)||void 0===a?void 0:a.priceOut))),j("aside",null,j(x.a,{variant:"contained"},Object(b.a)("\u52a0\u5165\u8d2d\u7269\u8f66"))))})),j("div",{style:{height:"26px",width:"100%"}}),j(q,null,j("aside",null,Object(b.a)("\u5c0f\u8ba1")),j("main",null,Object(f.b)(p.subtotal))),j(q,null,j("aside",null,Object(b.a)("\u4f18\u60e0\u5238\u6298\u6263")),j("main",null,Object(f.b)(0,"-"))),j(q,null,j("aside",null,Object(b.a)("\u8fd0\u8d39")),j("main",null,Object(f.b)(p.transportationCosts))),j(q,null,j("aside",null,Object(b.a)("\u8fbe\u4eba\u5e01\u62b5\u6263")),j("main",null,Object(f.b)(p.deductCoin,"-"))),j(q,null,j("aside",null,Object(b.a)("\u5b9e\u9645\u652f\u4ed8")),j("main",null,Object(f.b)(p.actuallyPaid))),j(q,null,j("aside",null,Object(b.a)("\u83b7\u5f97\u8fbe\u4eba\u5e01")),j("main",null,Object(f.b)(p.generateCoin))),j("div",{style:{height:"96px",width:"100%"}}))):j("div",null))}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";t.__esModule=!0,t.defaultHead=u,t.default=void 0;var r=l(n("q1tI")),o=l(n("Xuae")),i=n("lwAK"),a=n("FYa8"),d=n("/0+H");function l(e){return e&&e.__esModule?e:{default:e}}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function c(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var s=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(c,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var i=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var a=o.key.slice(o.key.indexOf("$")+1);e.has(a)?i=!1:e.add(a)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var d=0,l=s.length;d<l;d++){var u=s[d];if(o.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?i=!1:n.add(u);else{var c=o.props[u],p=r[u]||new Set;p.has(c)?i=!1:(p.add(c),r[u]=p)}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}var f=(0,o.default)();function v(e){var t=e.children;return(r.default.createElement(i.AmpStateContext.Consumer,null,(function(e){return r.default.createElement(a.HeadManagerContext.Consumer,null,(function(n){return r.default.createElement(f,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:(0,d.isInAmpMode)(e)},t)}))})))}v.rewind=f.rewind;var m=v;t.default=m},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},DfI7:function(e,t,n){"use strict";n.r(t);var r=n("MX0m"),o=n.n(r),i=n("q1tI"),a=n.n(i),d=n("8Kt/"),l=n.n(d),u=n("B42p"),c=n("nOHt"),s=n("OO/1"),p=n("U81q"),f=n("/PM6"),v=n("cBzo"),m=n("4Rmy"),b=a.a.createElement;t.default=function(){var e,t,n=Object(c.useRouter)(),r=null!==(e=null===(t=n.query)||void 0===t?void 0:t.orderId)&&void 0!==e?e:"",a=Object(p.b)(f.b),d=a.state,h=a.actions,y=d.orderInfo||{};return Object(i.useEffect)((function(){r&&h.getDetail("".concat(r))}),[r]),Object(i.useEffect)((function(){if(window.SqPaymentForm&&y.actuallyPaid){var e,t=new SqPaymentForm({applicationId:"sq0idp-IAEwX77Hdunl5dWByHQjIQ",inputClass:"sq-input",autoBuild:!1,inputStyles:[{fontSize:"16px",lineHeight:"24px",padding:"16px",placeholderColor:"#a0a0a0",backgroundColor:"transparent"}],cardNumber:{elementId:"sq-card-number",placeholder:"Card Number"},cvv:{elementId:"sq-cvv",placeholder:"CVV"},expirationDate:{elementId:"sq-expiration-date",placeholder:"MM/YY"},postalCode:{elementId:"sq-postal-code",placeholder:"Postal"},callbacks:{cardNonceResponseReceived:function(e,t,o){var i;if(e)return console.error("Encountered errors:"),e.forEach((function(e){console.error("  "+e.message)})),void Object(s.b)("Encountered errors, check browser developer console for more details");fetch("/pay/process-payment",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({nonce:t,amount:~~(100*(null!==(i=y.actuallyPaid)&&void 0!==i?i:0))})}).catch((function(e){Object(s.b)("Network error: "+e)})).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).then((function(e){return h.updateOrder({id:r,state:m.g.Paid})})).then((function(){Object(s.b)("\u652f\u4ed8\u6210\u529f"),n.replace("/cart/result")})).catch((function(e){console.error(e),Object(s.b)("Payment failed to complete!\nCheck browser developer console for more details")}))}}});t.build();null===(e=document.querySelector("#sq-creditcard"))||void 0===e||e.addEventListener("click",(function(e){e.preventDefault(),t.requestCardNonce()}))}}),[y.actuallyPaid]),b("div",{className:"jsx-2628901187"},b(l.a,null,b("title",{className:"jsx-2628901187"},"pay"),b("script",{type:"text/javascript",src:"https://js.squareup.com/v2/paymentform",className:"jsx-2628901187"})),b(u.a,{title:"\u652f\u4ed8",backCall:function(){return n.replace("/home"),!0}}),b("div",{id:"form-container",className:"jsx-2628901187"},!y.actuallyPaid&&"\u672a\u627e\u5230\u8ba2\u5355\u4fe1\u606f",b("div",{id:"sq-card-number",className:"jsx-2628901187"}),b("div",{id:"sq-expiration-date",className:"jsx-2628901187 third"}),b("div",{id:"sq-cvv",className:"jsx-2628901187 third"}),b("div",{id:"sq-postal-code",className:"jsx-2628901187 third"}),b("button",{id:"sq-creditcard",className:"jsx-2628901187 button-credit-card"},"Pay ",Object(v.b)(y.actuallyPaid))),b(o.a,{id:"2628901187"},["*{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}",'body,html{background-color:#F7F8F9;color:#373F4A;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-weight:normal;height:100%;}',"button{border:0;font-weight:500;}","fieldset{margin:0;padding:0;border:0;}","#form-container{padding:6.25vw;}",".third{float:left;width:calc((100% - 10vw) / 3);padding:0;margin:0 5vw 5vw 0;}",".third:last-of-type{margin-right:0;}",".sq-input{height:56PX;box-sizing:border-box;border:1px solid #E0E2E3;background-color:white;border-radius:1.875vw;display:inline-block;-webkit-transition:border-color .2s ease-in-out;transition:border-color .2s ease-in-out;}",".sq-input--focus{border:1px solid #4A90E2;}",".sq-input--error{border:1px solid #E02F2F;}","#sq-card-number{margin-bottom:5vw;}",".button-credit-card{width:100%;height:17.5vw;margin-top:3.125vw;background:#4A90E2;border-radius:1.875vw;cursor:pointer;display:block;color:#FFFFFF;font-size:5vw;line-height:7.5vw;font-weight:700;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;text-align:center;-webkit-transition:background .2s ease-in-out;transition:background .2s ease-in-out;}",".button-credit-card:hover{background-color:#4281CB;}"]))}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext(null);t.HeadManagerContext=o},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),i=n("ZhPi"),a=n("Bnag");e.exports=function(e){return r(e)||o(e)||i(e)||a()}},Xuae:function(e,t,n){"use strict";var r=n("lwsE"),o=n("PJYZ"),i=n("W8MJ"),a=n("7W2i"),d=n("a1gu"),l=n("Nsbk"),u=n("RIqP");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=l(e);if(t){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}t.__esModule=!0,t.default=void 0;var s=n("q1tI"),p=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(u(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return(function(d){a(u,d);var l=c(u);function u(e){var i;return r(this,u),i=l.call(this,e),p&&(t.add(o(i)),n(o(i))),i}return i(u,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),i(u,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),u}(s.Component))}},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},yoLr:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pay",function(){return n("DfI7")}])}},[["yoLr",1,0,5,2,3,4,6,7,8,9]]]);