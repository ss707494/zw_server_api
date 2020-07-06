webpackHotUpdate("static\\development\\pages\\pay.js",{

/***/ "./utils/view/pay/index.tsx":
/*!**********************************!*\
  !*** ./utils/view/pay/index.tsx ***!
  \**********************************/
/*! exports provided: Pay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pay", function() { return Pay; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_HeaderTitle_HeaderTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/HeaderTitle/HeaderTitle */ "./utils/components/HeaderTitle/HeaderTitle.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Message_Message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Message/Message */ "./utils/components/Message/Message.tsx");
/* harmony import */ var _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ModelAction/useStore */ "./utils/ModelAction/useStore.ts");
/* harmony import */ var _me_orderDetail_orderDetail__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../me/orderDetail/orderDetail */ "./utils/view/me/orderDetail/orderDetail.tsx");
/* harmony import */ var _tools_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../tools/utils */ "./utils/tools/utils.ts");
/* harmony import */ var _ss_common_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ss_common/enum */ "./utils/ss_common/enum.ts");
var _this = undefined,
    _jsxFileName = "D:\\code\\zw\\zw_client_web\\utils\\view\\pay\\index.tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









var applicationId = false ? undefined : 'sandbox-sq0idb-42FQ7wGBwzibToRM9_zdFw'; // const applicationId = 'sq0idp-IAEwX77Hdunl5dWByHQjIQ'

var Pay = function Pay() {
  _s();

  var _ref, _router$query;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var orderId = (_ref = (_router$query = router.query) === null || _router$query === void 0 ? void 0 : _router$query.orderId) !== null && _ref !== void 0 ? _ref : '';

  var _useStoreModel = Object(_ModelAction_useStore__WEBPACK_IMPORTED_MODULE_6__["useStoreModel"])(_me_orderDetail_orderDetail__WEBPACK_IMPORTED_MODULE_7__["orderDetailModel"]),
      stateOD = _useStoreModel.state,
      actionsOD = _useStoreModel.actions;

  var orderInfo = stateOD.orderInfo || {};
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (orderId) {
      actionsOD.getDetail("".concat(orderId));
    }
  }, [orderId]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    // @ts-ignore
    if (window.SqPaymentForm && orderInfo.actuallyPaid) {
      var _document$querySelect;

      // @ts-ignore
      var paymentForm = new SqPaymentForm({
        // Initialize the payment form elements
        applicationId: applicationId,
        inputClass: 'sq-input',
        autoBuild: false,
        // Customize the CSS for SqPaymentForm iframe elements
        inputStyles: [{
          fontSize: '16px',
          lineHeight: '24px',
          padding: '16px',
          placeholderColor: '#a0a0a0',
          backgroundColor: 'transparent'
        }],
        // Initialize the credit card placeholders
        cardNumber: {
          elementId: 'sq-card-number',
          placeholder: 'Card Number'
        },
        cvv: {
          elementId: 'sq-cvv',
          placeholder: 'CVV'
        },
        expirationDate: {
          elementId: 'sq-expiration-date',
          placeholder: 'MM/YY'
        },
        postalCode: {
          elementId: 'sq-postal-code',
          placeholder: 'Postal'
        },
        // SqPaymentForm callback functions
        callbacks: {
          /*
          * callback function: cardNonceResponseReceived
          * Triggered when: SqPaymentForm completes a card nonce request
          */
          cardNonceResponseReceived: function cardNonceResponseReceived(errors, nonce, cardData) {
            var _orderInfo$actuallyPa;

            if (errors) {
              // Log errors from nonce generation to the browser developer console.
              console.error('Encountered errors:');
              errors.forEach(function (error) {
                console.error('  ' + error.message);
              });
              Object(_components_Message_Message__WEBPACK_IMPORTED_MODULE_5__["showMessage"])('Encountered errors, check browser developer console for more details');
              return;
            } // alert(`The generated nonce is:\n${nonce}`)


            fetch("/pay/process-payment", {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                nonce: nonce,
                amount: ~~(((_orderInfo$actuallyPa = orderInfo.actuallyPaid) !== null && _orderInfo$actuallyPa !== void 0 ? _orderInfo$actuallyPa : 0) * 100)
              })
            })["catch"](function (err) {
              Object(_components_Message_Message__WEBPACK_IMPORTED_MODULE_5__["showMessage"])('Network error: ' + err);
            }).then(function (response) {
              if (!response.ok) {
                return response.json().then(function (errorInfo) {
                  return Promise.reject(errorInfo);
                }); //UPDATE HERE
              }

              return response.json(); //UPDATE HERE
            }).then(function (data) {
              // console.log(data) //UPDATE HERE
              // showMessage('Payment complete successfully!\nCheck browser developer console for more details')
              return actionsOD.updateOrder({
                id: orderId,
                state: _ss_common_enum__WEBPACK_IMPORTED_MODULE_9__["OrderState"].Paid
              });
            }).then(function () {
              Object(_components_Message_Message__WEBPACK_IMPORTED_MODULE_5__["showMessage"])('支付成功');
              router.replace('/cart/result');
            })["catch"](function (err) {
              console.error(err);
              Object(_components_Message_Message__WEBPACK_IMPORTED_MODULE_5__["showMessage"])('Payment failed to complete!\nCheck browser developer console for more details');
            });
          }
        }
      });
      paymentForm.build();

      var onGetCardNonce = function onGetCardNonce(event) {
        // Don't submit the form until SqPaymentForm returns with a nonce
        event.preventDefault(); // Request a nonce from the SqPaymentForm object

        paymentForm.requestCardNonce();
      };

      (_document$querySelect = document.querySelector('#sq-creditcard')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.addEventListener('click', onGetCardNonce);
    }
  }, [orderInfo.actuallyPaid]);
  return __jsx("div", {
    className: "jsx-2628901187",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 10
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 5
    }
  }, __jsx("title", {
    className: "jsx-2628901187",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }
  }, "pay"), __jsx("script", {
    type: "text/javascript",
    src: false ? undefined : 'https://js.squareupsandbox.com/v2/paymentform',
    className: "jsx-2628901187",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 7
    }
  })), __jsx(_components_HeaderTitle_HeaderTitle__WEBPACK_IMPORTED_MODULE_3__["HeaderTitle"], {
    title: '支付',
    backCall: function backCall() {
      router.replace('/home');
      return true;
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 5
    }
  }), __jsx("div", {
    id: "form-container",
    className: "jsx-2628901187",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 5
    }
  }, !orderInfo.actuallyPaid && '未找到订单信息', __jsx("div", {
    id: "sq-card-number",
    className: "jsx-2628901187",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 7
    }
  }), __jsx("div", {
    id: "sq-expiration-date",
    className: "jsx-2628901187" + " " + "third",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 7
    }
  }), __jsx("div", {
    id: "sq-cvv",
    className: "jsx-2628901187" + " " + "third",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 7
    }
  }), __jsx("div", {
    id: "sq-postal-code",
    className: "jsx-2628901187" + " " + "third",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 7
    }
  }), __jsx("button", {
    id: "sq-creditcard",
    className: "jsx-2628901187" + " " + "button-credit-card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 7
    }
  }, "Pay ", Object(_tools_utils__WEBPACK_IMPORTED_MODULE_8__["dealMoney"])(orderInfo.actuallyPaid))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2628901187",
    __self: _this
  }, "*{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}body,html{background-color:#F7F8F9;color:#373F4A;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-weight:normal;height:100%;}button{border:0;font-weight:500;}fieldset{margin:0;padding:0;border:0;}#form-container{padding:6.25vw;}.third{float:left;width:calc((100% - 10vw) / 3);padding:0;margin:0 5vw 5vw 0;}.third:last-of-type{margin-right:0;}.sq-input{height:56PX;box-sizing:border-box;border:1px solid #E0E2E3;background-color:white;border-radius:1.875vw;display:inline-block;-webkit-transition:border-color .2s ease-in-out;transition:border-color .2s ease-in-out;}.sq-input--focus{border:1px solid #4A90E2;}.sq-input--error{border:1px solid #E02F2F;}#sq-card-number{margin-bottom:5vw;}.button-credit-card{width:100%;height:17.5vw;margin-top:3.125vw;background:#4A90E2;border-radius:1.875vw;cursor:pointer;display:block;color:#FFFFFF;font-size:5vw;line-height:7.5vw;font-weight:700;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;text-align:center;-webkit-transition:background .2s ease-in-out;transition:background .2s ease-in-out;}.button-credit-card:hover{background-color:#4281CB;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxjb2RlXFx6d1xcendfY2xpZW50X3dlYlxcdXRpbHNcXHZpZXdcXHBheVxcaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJKZ0IsQUFFc0MsQUFJVixBQU9oQixBQUlBLEFBS00sQUFHSixBQU1JLEFBSUgsQUFVYSxBQUlBLEFBR1AsQUFJUCxBQWdCYyxTQTFEVCxBQUlOLEVBUW9CLEFBK0JoQixDQXJCUSxHQWROLEFBU0EsR0FxQkcsQ0FqQ1YsTUFaSyxBQU9HLEFBK0JTLEFBSUEsQUFTUCxBQWNPLEdBckRoQixNQWtCZSxDQWxDUyxJQUt5QixFQW1CakQsR0FnQ1MsT0EvQkEsUUFVSSxJQXNCRCxNQXpEYSxDQXlCZixZQVdFLEdBc0JQLFVBcERJLEtBcURMLElBdEJPLFVBOUJULEFBcURFLFdBdEIwQixDQS9CM0IsRUFzREMsY0FDSSxrQkFDRixnQkFDQyxxQ0ExQndCLGdEQTJCdkIsa0JBQ29CLG9GQUFDIiwiZmlsZSI6IkQ6XFxjb2RlXFx6d1xcendfY2xpZW50X3dlYlxcdXRpbHNcXHZpZXdcXHBheVxcaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQge0hlYWRlclRpdGxlfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0hlYWRlclRpdGxlL0hlYWRlclRpdGxlJ1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7c2hvd01lc3NhZ2V9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTWVzc2FnZS9NZXNzYWdlJ1xyXG5pbXBvcnQge3VzZVN0b3JlTW9kZWx9IGZyb20gJy4uLy4uL01vZGVsQWN0aW9uL3VzZVN0b3JlJ1xyXG5pbXBvcnQge29yZGVyRGV0YWlsTW9kZWx9IGZyb20gJy4uL21lL29yZGVyRGV0YWlsL29yZGVyRGV0YWlsJ1xyXG5pbXBvcnQge2RlYWxNb25leX0gZnJvbSAnLi4vLi4vdG9vbHMvdXRpbHMnXHJcbmltcG9ydCB7T3JkZXJTdGF0ZX0gZnJvbSAnLi4vLi4vc3NfY29tbW9uL2VudW0nXHJcblxyXG5jb25zdCBhcHBsaWNhdGlvbklkID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/ICdzcTBpZHAtSUFFd1g3N0hkdW5sNWRXQnlIUWpJUScgOiAnc2FuZGJveC1zcTBpZGItNDJGUTd3R0J3emliVG9STTlfemRGdydcclxuLy8gY29uc3QgYXBwbGljYXRpb25JZCA9ICdzcTBpZHAtSUFFd1g3N0hkdW5sNWRXQnlIUWpJUSdcclxuXHJcbmV4cG9ydCBjb25zdCBQYXkgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBvcmRlcklkID0gKHJvdXRlci5xdWVyeT8ub3JkZXJJZCBhcyBzdHJpbmcpID8/ICcnXHJcblxyXG4gIGNvbnN0IHtzdGF0ZTogc3RhdGVPRCwgYWN0aW9uczogYWN0aW9uc09EfSA9IHVzZVN0b3JlTW9kZWwob3JkZXJEZXRhaWxNb2RlbClcclxuICBjb25zdCBvcmRlckluZm8gPSBzdGF0ZU9ELm9yZGVySW5mbyB8fCB7fVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKG9yZGVySWQpIHtcclxuICAgICAgYWN0aW9uc09ELmdldERldGFpbChgJHtvcmRlcklkfWApXHJcbiAgICB9XHJcbiAgfSwgW29yZGVySWRdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgaWYgKHdpbmRvdy5TcVBheW1lbnRGb3JtICYmIG9yZGVySW5mby5hY3R1YWxseVBhaWQpIHtcclxuICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICBjb25zdCBwYXltZW50Rm9ybSA9IG5ldyBTcVBheW1lbnRGb3JtKHtcclxuICAgICAgICAvLyBJbml0aWFsaXplIHRoZSBwYXltZW50IGZvcm0gZWxlbWVudHNcclxuICAgICAgICBhcHBsaWNhdGlvbklkLFxyXG4gICAgICAgIGlucHV0Q2xhc3M6ICdzcS1pbnB1dCcsXHJcbiAgICAgICAgYXV0b0J1aWxkOiBmYWxzZSxcclxuICAgICAgICAvLyBDdXN0b21pemUgdGhlIENTUyBmb3IgU3FQYXltZW50Rm9ybSBpZnJhbWUgZWxlbWVudHNcclxuICAgICAgICBpbnB1dFN0eWxlczogW3tcclxuICAgICAgICAgIGZvbnRTaXplOiAnMTZweCcsXHJcbiAgICAgICAgICBsaW5lSGVpZ2h0OiAnMjRweCcsXHJcbiAgICAgICAgICBwYWRkaW5nOiAnMTZweCcsXHJcbiAgICAgICAgICBwbGFjZWhvbGRlckNvbG9yOiAnI2EwYTBhMCcsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgICAgfV0sXHJcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSB0aGUgY3JlZGl0IGNhcmQgcGxhY2Vob2xkZXJzXHJcbiAgICAgICAgY2FyZE51bWJlcjoge1xyXG4gICAgICAgICAgZWxlbWVudElkOiAnc3EtY2FyZC1udW1iZXInLFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI6ICdDYXJkIE51bWJlcicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjdnY6IHtcclxuICAgICAgICAgIGVsZW1lbnRJZDogJ3NxLWN2dicsXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJ0NWVicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBleHBpcmF0aW9uRGF0ZToge1xyXG4gICAgICAgICAgZWxlbWVudElkOiAnc3EtZXhwaXJhdGlvbi1kYXRlJyxcclxuICAgICAgICAgIHBsYWNlaG9sZGVyOiAnTU0vWVknLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcG9zdGFsQ29kZToge1xyXG4gICAgICAgICAgZWxlbWVudElkOiAnc3EtcG9zdGFsLWNvZGUnLFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI6ICdQb3N0YWwnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gU3FQYXltZW50Rm9ybSBjYWxsYmFjayBmdW5jdGlvbnNcclxuICAgICAgICBjYWxsYmFja3M6IHtcclxuICAgICAgICAgIC8qXHJcbiAgICAgICAgICAqIGNhbGxiYWNrIGZ1bmN0aW9uOiBjYXJkTm9uY2VSZXNwb25zZVJlY2VpdmVkXHJcbiAgICAgICAgICAqIFRyaWdnZXJlZCB3aGVuOiBTcVBheW1lbnRGb3JtIGNvbXBsZXRlcyBhIGNhcmQgbm9uY2UgcmVxdWVzdFxyXG4gICAgICAgICAgKi9cclxuICAgICAgICAgIGNhcmROb25jZVJlc3BvbnNlUmVjZWl2ZWQ6IGZ1bmN0aW9uIChlcnJvcnM6IGFueSwgbm9uY2U6IGFueSwgY2FyZERhdGE6IGFueSkge1xyXG4gICAgICAgICAgICBpZiAoZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgLy8gTG9nIGVycm9ycyBmcm9tIG5vbmNlIGdlbmVyYXRpb24gdG8gdGhlIGJyb3dzZXIgZGV2ZWxvcGVyIGNvbnNvbGUuXHJcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRW5jb3VudGVyZWQgZXJyb3JzOicpXHJcbiAgICAgICAgICAgICAgZXJyb3JzLmZvckVhY2goZnVuY3Rpb24gKGVycm9yOiBhbnkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJyAgJyArIGVycm9yLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICBzaG93TWVzc2FnZSgnRW5jb3VudGVyZWQgZXJyb3JzLCBjaGVjayBicm93c2VyIGRldmVsb3BlciBjb25zb2xlIGZvciBtb3JlIGRldGFpbHMnKVxyXG4gICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGFsZXJ0KGBUaGUgZ2VuZXJhdGVkIG5vbmNlIGlzOlxcbiR7bm9uY2V9YClcclxuICAgICAgICAgICAgZmV0Y2goYC9wYXkvcHJvY2Vzcy1wYXltZW50YCwge1xyXG4gICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgbm9uY2U6IG5vbmNlLFxyXG4gICAgICAgICAgICAgICAgYW1vdW50OiB+figob3JkZXJJbmZvLmFjdHVhbGx5UGFpZCA/PyAwKSAqIDEwMCksXHJcbiAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2hvd01lc3NhZ2UoJ05ldHdvcmsgZXJyb3I6ICcgKyBlcnIpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCkudGhlbigoZXJyb3JJbmZvOiBhbnkpID0+IFByb21pc2UucmVqZWN0KGVycm9ySW5mbykpIC8vVVBEQVRFIEhFUkVcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpIC8vVVBEQVRFIEhFUkVcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSkgLy9VUERBVEUgSEVSRVxyXG4gICAgICAgICAgICAgICAgICAvLyBzaG93TWVzc2FnZSgnUGF5bWVudCBjb21wbGV0ZSBzdWNjZXNzZnVsbHkhXFxuQ2hlY2sgYnJvd3NlciBkZXZlbG9wZXIgY29uc29sZSBmb3IgbW9yZSBkZXRhaWxzJylcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGFjdGlvbnNPRC51cGRhdGVPcmRlcih7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IG9yZGVySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6IE9yZGVyU3RhdGUuUGFpZCxcclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNob3dNZXNzYWdlKCfmlK/ku5jmiJDlip8nKVxyXG4gICAgICAgICAgICAgICAgICByb3V0ZXIucmVwbGFjZSgnL2NhcnQvcmVzdWx0JylcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgICAgICAgIHNob3dNZXNzYWdlKCdQYXltZW50IGZhaWxlZCB0byBjb21wbGV0ZSFcXG5DaGVjayBicm93c2VyIGRldmVsb3BlciBjb25zb2xlIGZvciBtb3JlIGRldGFpbHMnKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSlcclxuICAgICAgcGF5bWVudEZvcm0uYnVpbGQoKVxyXG4gICAgICBjb25zdCBvbkdldENhcmROb25jZSA9IChldmVudDogYW55KSA9PiB7XHJcbiAgICAgICAgLy8gRG9uJ3Qgc3VibWl0IHRoZSBmb3JtIHVudGlsIFNxUGF5bWVudEZvcm0gcmV0dXJucyB3aXRoIGEgbm9uY2VcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgLy8gUmVxdWVzdCBhIG5vbmNlIGZyb20gdGhlIFNxUGF5bWVudEZvcm0gb2JqZWN0XHJcbiAgICAgICAgcGF5bWVudEZvcm0ucmVxdWVzdENhcmROb25jZSgpXHJcbiAgICAgIH1cclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NxLWNyZWRpdGNhcmQnKT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkdldENhcmROb25jZSlcclxuICAgIH1cclxuICB9LCBbb3JkZXJJbmZvLmFjdHVhbGx5UGFpZF0pXHJcblxyXG4gIHJldHVybiA8ZGl2PlxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDx0aXRsZT5wYXk8L3RpdGxlPlxyXG4gICAgICA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIlxyXG4gICAgICAgICAgICAgIHNyYz17cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/ICdodHRwczovL2pzLnNxdWFyZXVwLmNvbS92Mi9wYXltZW50Zm9ybScgOiAnaHR0cHM6Ly9qcy5zcXVhcmV1cHNhbmRib3guY29tL3YyL3BheW1lbnRmb3JtJ30+XHJcbiAgICAgIDwvc2NyaXB0PlxyXG4gICAgPC9IZWFkPlxyXG4gICAgPEhlYWRlclRpdGxlXHJcbiAgICAgICAgdGl0bGU9eyfmlK/ku5gnfVxyXG4gICAgICAgIGJhY2tDYWxsPXsoKSA9PiB7XHJcbiAgICAgICAgICByb3V0ZXIucmVwbGFjZSgnL2hvbWUnKVxyXG4gICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9fVxyXG4gICAgLz5cclxuICAgIDxkaXYgaWQ9XCJmb3JtLWNvbnRhaW5lclwiPlxyXG4gICAgICB7IW9yZGVySW5mby5hY3R1YWxseVBhaWQgJiYgJ+acquaJvuWIsOiuouWNleS/oeaBryd9XHJcbiAgICAgIDxkaXYgaWQ9XCJzcS1jYXJkLW51bWJlclwiLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aGlyZFwiXHJcbiAgICAgICAgICAgaWQ9XCJzcS1leHBpcmF0aW9uLWRhdGVcIi8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGhpcmRcIlxyXG4gICAgICAgICAgIGlkPVwic3EtY3Z2XCIvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRoaXJkXCJcclxuICAgICAgICAgICBpZD1cInNxLXBvc3RhbC1jb2RlXCIvPlxyXG4gICAgICA8YnV0dG9uIGlkPVwic3EtY3JlZGl0Y2FyZFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uLWNyZWRpdC1jYXJkXCJcclxuICAgICAgPlBheSB7ZGVhbE1vbmV5KG9yZGVySW5mby5hY3R1YWxseVBhaWQpfVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIDpnbG9iYWwoKikge1xyXG4gICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgOmdsb2JhbChib2R5LCBodG1sKSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGOEY5O1xyXG4gICAgICAgICAgY29sb3I6ICMzNzNGNEE7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDpnbG9iYWwoYnV0dG9uKSB7XHJcbiAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgOmdsb2JhbChmaWVsZHNldCkge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDpnbG9iYWwoI2Zvcm0tY29udGFpbmVyKSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgLy9wb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAvL3dpZHRoOiAzODBweDtcclxuICAgICAgICAgIC8vbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAvL3RvcDogNTAlO1xyXG4gICAgICAgICAgLy90cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA6Z2xvYmFsKC50aGlyZCkge1xyXG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICB3aWR0aDogY2FsYygoMTAwJSAtIDMycHgpIC8gMyk7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDE2cHggMTZweCAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgOmdsb2JhbCgudGhpcmQ6bGFzdC1vZi10eXBlKSB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBEZWZpbmUgaG93IFNxUGF5bWVudEZvcm0gaWZyYW1lcyBzaG91bGQgbG9vayAqL1xyXG4gICAgICAgIDpnbG9iYWwoLnNxLWlucHV0KSB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDU2UFg7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0UwRTJFMztcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogRGVmaW5lIGhvdyBTcVBheW1lbnRGb3JtIGlmcmFtZXMgc2hvdWxkIGxvb2sgd2hlbiB0aGV5IGhhdmUgZm9jdXMgKi9cclxuICAgICAgICA6Z2xvYmFsKC5zcS1pbnB1dC0tZm9jdXMpIHtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM0QTkwRTI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBEZWZpbmUgaG93IFNxUGF5bWVudEZvcm0gaWZyYW1lcyBzaG91bGQgbG9vayB3aGVuIHRoZXkgY29udGFpbiBpbnZhbGlkIHZhbHVlcyAqL1xyXG4gICAgICAgIDpnbG9iYWwoLnNxLWlucHV0LS1lcnJvcikge1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0UwMkYyRjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDpnbG9iYWwoI3NxLWNhcmQtbnVtYmVyKSB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogQ3VzdG9taXplIHRoZSBcIlBheSB3aXRoIENyZWRpdCBDYXJkXCIgYnV0dG9uICovXHJcbiAgICAgICAgOmdsb2JhbCguYnV0dG9uLWNyZWRpdC1jYXJkKSB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogNTZweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjNEE5MEUyO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4ycyBlYXNlLWluLW91dDtcclxuICAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgOmdsb2JhbCguYnV0dG9uLWNyZWRpdC1jYXJkOmhvdmVyKSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI4MUNCO1xyXG4gICAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICA8L2Rpdj5cclxufVxyXG4iXX0= */\n/*@ sourceURL=D:\\\\code\\\\zw\\\\zw_client_web\\\\utils\\\\view\\\\pay\\\\index.tsx */"));
};

_s(Pay, "BoX5+U8iSCxWP1b/WK/+J9iB0m4=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"], _ModelAction_useStore__WEBPACK_IMPORTED_MODULE_6__["useStoreModel"]];
});

_c = Pay;

var _c;

$RefreshReg$(_c, "Pay");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy92aWV3L3BheS9pbmRleC50c3giXSwibmFtZXMiOlsiYXBwbGljYXRpb25JZCIsIlBheSIsInJvdXRlciIsInVzZVJvdXRlciIsIm9yZGVySWQiLCJxdWVyeSIsInVzZVN0b3JlTW9kZWwiLCJvcmRlckRldGFpbE1vZGVsIiwic3RhdGVPRCIsInN0YXRlIiwiYWN0aW9uc09EIiwiYWN0aW9ucyIsIm9yZGVySW5mbyIsInVzZUVmZmVjdCIsImdldERldGFpbCIsIndpbmRvdyIsIlNxUGF5bWVudEZvcm0iLCJhY3R1YWxseVBhaWQiLCJwYXltZW50Rm9ybSIsImlucHV0Q2xhc3MiLCJhdXRvQnVpbGQiLCJpbnB1dFN0eWxlcyIsImZvbnRTaXplIiwibGluZUhlaWdodCIsInBhZGRpbmciLCJwbGFjZWhvbGRlckNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiY2FyZE51bWJlciIsImVsZW1lbnRJZCIsInBsYWNlaG9sZGVyIiwiY3Z2IiwiZXhwaXJhdGlvbkRhdGUiLCJwb3N0YWxDb2RlIiwiY2FsbGJhY2tzIiwiY2FyZE5vbmNlUmVzcG9uc2VSZWNlaXZlZCIsImVycm9ycyIsIm5vbmNlIiwiY2FyZERhdGEiLCJjb25zb2xlIiwiZXJyb3IiLCJmb3JFYWNoIiwibWVzc2FnZSIsInNob3dNZXNzYWdlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJhbW91bnQiLCJlcnIiLCJ0aGVuIiwicmVzcG9uc2UiLCJvayIsImpzb24iLCJlcnJvckluZm8iLCJQcm9taXNlIiwicmVqZWN0IiwiZGF0YSIsInVwZGF0ZU9yZGVyIiwiaWQiLCJPcmRlclN0YXRlIiwiUGFpZCIsInJlcGxhY2UiLCJidWlsZCIsIm9uR2V0Q2FyZE5vbmNlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInJlcXVlc3RDYXJkTm9uY2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3Rl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SUFMRixFQU9FO0FBQ0ssTUFBRSxFQUFDLGdCQURSO0FBQUEsd0NBQWUsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsRUFTRTtBQUFRLE1BQUUsRUFBQyxlQUFYO0FBQUEsd0NBQ2tCLG9CQURsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRU11RCw4REFBUyxDQUFDNUQsU0FBUyxDQUFDSyxZQUFYLENBRmYsQ0FURixDQWRLO0FBQUE7QUFBQTtBQUFBLHd5YkFBUDtBQTZIRCxDQS9PTTs7R0FBTWhCLEc7VUFDSUUscUQsRUFHOEJHLG1FOzs7S0FKbENMLEciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHBheS5qcy4xYjZlZTM0Yjg2NTMxMjg4OTI4NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQge0hlYWRlclRpdGxlfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0hlYWRlclRpdGxlL0hlYWRlclRpdGxlJ1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7c2hvd01lc3NhZ2V9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTWVzc2FnZS9NZXNzYWdlJ1xyXG5pbXBvcnQge3VzZVN0b3JlTW9kZWx9IGZyb20gJy4uLy4uL01vZGVsQWN0aW9uL3VzZVN0b3JlJ1xyXG5pbXBvcnQge29yZGVyRGV0YWlsTW9kZWx9IGZyb20gJy4uL21lL29yZGVyRGV0YWlsL29yZGVyRGV0YWlsJ1xyXG5pbXBvcnQge2RlYWxNb25leX0gZnJvbSAnLi4vLi4vdG9vbHMvdXRpbHMnXHJcbmltcG9ydCB7T3JkZXJTdGF0ZX0gZnJvbSAnLi4vLi4vc3NfY29tbW9uL2VudW0nXHJcblxyXG5jb25zdCBhcHBsaWNhdGlvbklkID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/ICdzcTBpZHAtSUFFd1g3N0hkdW5sNWRXQnlIUWpJUScgOiAnc2FuZGJveC1zcTBpZGItNDJGUTd3R0J3emliVG9STTlfemRGdydcclxuLy8gY29uc3QgYXBwbGljYXRpb25JZCA9ICdzcTBpZHAtSUFFd1g3N0hkdW5sNWRXQnlIUWpJUSdcclxuXHJcbmV4cG9ydCBjb25zdCBQYXkgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBvcmRlcklkID0gKHJvdXRlci5xdWVyeT8ub3JkZXJJZCBhcyBzdHJpbmcpID8/ICcnXHJcblxyXG4gIGNvbnN0IHtzdGF0ZTogc3RhdGVPRCwgYWN0aW9uczogYWN0aW9uc09EfSA9IHVzZVN0b3JlTW9kZWwob3JkZXJEZXRhaWxNb2RlbClcclxuICBjb25zdCBvcmRlckluZm8gPSBzdGF0ZU9ELm9yZGVySW5mbyB8fCB7fVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKG9yZGVySWQpIHtcclxuICAgICAgYWN0aW9uc09ELmdldERldGFpbChgJHtvcmRlcklkfWApXHJcbiAgICB9XHJcbiAgfSwgW29yZGVySWRdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgaWYgKHdpbmRvdy5TcVBheW1lbnRGb3JtICYmIG9yZGVySW5mby5hY3R1YWxseVBhaWQpIHtcclxuICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICBjb25zdCBwYXltZW50Rm9ybSA9IG5ldyBTcVBheW1lbnRGb3JtKHtcclxuICAgICAgICAvLyBJbml0aWFsaXplIHRoZSBwYXltZW50IGZvcm0gZWxlbWVudHNcclxuICAgICAgICBhcHBsaWNhdGlvbklkLFxyXG4gICAgICAgIGlucHV0Q2xhc3M6ICdzcS1pbnB1dCcsXHJcbiAgICAgICAgYXV0b0J1aWxkOiBmYWxzZSxcclxuICAgICAgICAvLyBDdXN0b21pemUgdGhlIENTUyBmb3IgU3FQYXltZW50Rm9ybSBpZnJhbWUgZWxlbWVudHNcclxuICAgICAgICBpbnB1dFN0eWxlczogW3tcclxuICAgICAgICAgIGZvbnRTaXplOiAnMTZweCcsXHJcbiAgICAgICAgICBsaW5lSGVpZ2h0OiAnMjRweCcsXHJcbiAgICAgICAgICBwYWRkaW5nOiAnMTZweCcsXHJcbiAgICAgICAgICBwbGFjZWhvbGRlckNvbG9yOiAnI2EwYTBhMCcsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgICAgfV0sXHJcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSB0aGUgY3JlZGl0IGNhcmQgcGxhY2Vob2xkZXJzXHJcbiAgICAgICAgY2FyZE51bWJlcjoge1xyXG4gICAgICAgICAgZWxlbWVudElkOiAnc3EtY2FyZC1udW1iZXInLFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI6ICdDYXJkIE51bWJlcicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjdnY6IHtcclxuICAgICAgICAgIGVsZW1lbnRJZDogJ3NxLWN2dicsXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJ0NWVicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBleHBpcmF0aW9uRGF0ZToge1xyXG4gICAgICAgICAgZWxlbWVudElkOiAnc3EtZXhwaXJhdGlvbi1kYXRlJyxcclxuICAgICAgICAgIHBsYWNlaG9sZGVyOiAnTU0vWVknLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcG9zdGFsQ29kZToge1xyXG4gICAgICAgICAgZWxlbWVudElkOiAnc3EtcG9zdGFsLWNvZGUnLFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI6ICdQb3N0YWwnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gU3FQYXltZW50Rm9ybSBjYWxsYmFjayBmdW5jdGlvbnNcclxuICAgICAgICBjYWxsYmFja3M6IHtcclxuICAgICAgICAgIC8qXHJcbiAgICAgICAgICAqIGNhbGxiYWNrIGZ1bmN0aW9uOiBjYXJkTm9uY2VSZXNwb25zZVJlY2VpdmVkXHJcbiAgICAgICAgICAqIFRyaWdnZXJlZCB3aGVuOiBTcVBheW1lbnRGb3JtIGNvbXBsZXRlcyBhIGNhcmQgbm9uY2UgcmVxdWVzdFxyXG4gICAgICAgICAgKi9cclxuICAgICAgICAgIGNhcmROb25jZVJlc3BvbnNlUmVjZWl2ZWQ6IGZ1bmN0aW9uIChlcnJvcnM6IGFueSwgbm9uY2U6IGFueSwgY2FyZERhdGE6IGFueSkge1xyXG4gICAgICAgICAgICBpZiAoZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgLy8gTG9nIGVycm9ycyBmcm9tIG5vbmNlIGdlbmVyYXRpb24gdG8gdGhlIGJyb3dzZXIgZGV2ZWxvcGVyIGNvbnNvbGUuXHJcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRW5jb3VudGVyZWQgZXJyb3JzOicpXHJcbiAgICAgICAgICAgICAgZXJyb3JzLmZvckVhY2goZnVuY3Rpb24gKGVycm9yOiBhbnkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJyAgJyArIGVycm9yLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICBzaG93TWVzc2FnZSgnRW5jb3VudGVyZWQgZXJyb3JzLCBjaGVjayBicm93c2VyIGRldmVsb3BlciBjb25zb2xlIGZvciBtb3JlIGRldGFpbHMnKVxyXG4gICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGFsZXJ0KGBUaGUgZ2VuZXJhdGVkIG5vbmNlIGlzOlxcbiR7bm9uY2V9YClcclxuICAgICAgICAgICAgZmV0Y2goYC9wYXkvcHJvY2Vzcy1wYXltZW50YCwge1xyXG4gICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgbm9uY2U6IG5vbmNlLFxyXG4gICAgICAgICAgICAgICAgYW1vdW50OiB+figob3JkZXJJbmZvLmFjdHVhbGx5UGFpZCA/PyAwKSAqIDEwMCksXHJcbiAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2hvd01lc3NhZ2UoJ05ldHdvcmsgZXJyb3I6ICcgKyBlcnIpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCkudGhlbigoZXJyb3JJbmZvOiBhbnkpID0+IFByb21pc2UucmVqZWN0KGVycm9ySW5mbykpIC8vVVBEQVRFIEhFUkVcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpIC8vVVBEQVRFIEhFUkVcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSkgLy9VUERBVEUgSEVSRVxyXG4gICAgICAgICAgICAgICAgICAvLyBzaG93TWVzc2FnZSgnUGF5bWVudCBjb21wbGV0ZSBzdWNjZXNzZnVsbHkhXFxuQ2hlY2sgYnJvd3NlciBkZXZlbG9wZXIgY29uc29sZSBmb3IgbW9yZSBkZXRhaWxzJylcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGFjdGlvbnNPRC51cGRhdGVPcmRlcih7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IG9yZGVySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6IE9yZGVyU3RhdGUuUGFpZCxcclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNob3dNZXNzYWdlKCfmlK/ku5jmiJDlip8nKVxyXG4gICAgICAgICAgICAgICAgICByb3V0ZXIucmVwbGFjZSgnL2NhcnQvcmVzdWx0JylcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXHJcbiAgICAgICAgICAgICAgICAgIHNob3dNZXNzYWdlKCdQYXltZW50IGZhaWxlZCB0byBjb21wbGV0ZSFcXG5DaGVjayBicm93c2VyIGRldmVsb3BlciBjb25zb2xlIGZvciBtb3JlIGRldGFpbHMnKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSlcclxuICAgICAgcGF5bWVudEZvcm0uYnVpbGQoKVxyXG4gICAgICBjb25zdCBvbkdldENhcmROb25jZSA9IChldmVudDogYW55KSA9PiB7XHJcbiAgICAgICAgLy8gRG9uJ3Qgc3VibWl0IHRoZSBmb3JtIHVudGlsIFNxUGF5bWVudEZvcm0gcmV0dXJucyB3aXRoIGEgbm9uY2VcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgLy8gUmVxdWVzdCBhIG5vbmNlIGZyb20gdGhlIFNxUGF5bWVudEZvcm0gb2JqZWN0XHJcbiAgICAgICAgcGF5bWVudEZvcm0ucmVxdWVzdENhcmROb25jZSgpXHJcbiAgICAgIH1cclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NxLWNyZWRpdGNhcmQnKT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkdldENhcmROb25jZSlcclxuICAgIH1cclxuICB9LCBbb3JkZXJJbmZvLmFjdHVhbGx5UGFpZF0pXHJcblxyXG4gIHJldHVybiA8ZGl2PlxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDx0aXRsZT5wYXk8L3RpdGxlPlxyXG4gICAgICA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIlxyXG4gICAgICAgICAgICAgIHNyYz17cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/ICdodHRwczovL2pzLnNxdWFyZXVwLmNvbS92Mi9wYXltZW50Zm9ybScgOiAnaHR0cHM6Ly9qcy5zcXVhcmV1cHNhbmRib3guY29tL3YyL3BheW1lbnRmb3JtJ30+XHJcbiAgICAgIDwvc2NyaXB0PlxyXG4gICAgPC9IZWFkPlxyXG4gICAgPEhlYWRlclRpdGxlXHJcbiAgICAgICAgdGl0bGU9eyfmlK/ku5gnfVxyXG4gICAgICAgIGJhY2tDYWxsPXsoKSA9PiB7XHJcbiAgICAgICAgICByb3V0ZXIucmVwbGFjZSgnL2hvbWUnKVxyXG4gICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9fVxyXG4gICAgLz5cclxuICAgIDxkaXYgaWQ9XCJmb3JtLWNvbnRhaW5lclwiPlxyXG4gICAgICB7IW9yZGVySW5mby5hY3R1YWxseVBhaWQgJiYgJ+acquaJvuWIsOiuouWNleS/oeaBryd9XHJcbiAgICAgIDxkaXYgaWQ9XCJzcS1jYXJkLW51bWJlclwiLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aGlyZFwiXHJcbiAgICAgICAgICAgaWQ9XCJzcS1leHBpcmF0aW9uLWRhdGVcIi8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGhpcmRcIlxyXG4gICAgICAgICAgIGlkPVwic3EtY3Z2XCIvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRoaXJkXCJcclxuICAgICAgICAgICBpZD1cInNxLXBvc3RhbC1jb2RlXCIvPlxyXG4gICAgICA8YnV0dG9uIGlkPVwic3EtY3JlZGl0Y2FyZFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uLWNyZWRpdC1jYXJkXCJcclxuICAgICAgPlBheSB7ZGVhbE1vbmV5KG9yZGVySW5mby5hY3R1YWxseVBhaWQpfVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIDpnbG9iYWwoKikge1xyXG4gICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgOmdsb2JhbChib2R5LCBodG1sKSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGOEY5O1xyXG4gICAgICAgICAgY29sb3I6ICMzNzNGNEE7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDpnbG9iYWwoYnV0dG9uKSB7XHJcbiAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgOmdsb2JhbChmaWVsZHNldCkge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDpnbG9iYWwoI2Zvcm0tY29udGFpbmVyKSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgLy9wb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAvL3dpZHRoOiAzODBweDtcclxuICAgICAgICAgIC8vbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAvL3RvcDogNTAlO1xyXG4gICAgICAgICAgLy90cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA6Z2xvYmFsKC50aGlyZCkge1xyXG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICB3aWR0aDogY2FsYygoMTAwJSAtIDMycHgpIC8gMyk7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDE2cHggMTZweCAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgOmdsb2JhbCgudGhpcmQ6bGFzdC1vZi10eXBlKSB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBEZWZpbmUgaG93IFNxUGF5bWVudEZvcm0gaWZyYW1lcyBzaG91bGQgbG9vayAqL1xyXG4gICAgICAgIDpnbG9iYWwoLnNxLWlucHV0KSB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDU2UFg7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0UwRTJFMztcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogRGVmaW5lIGhvdyBTcVBheW1lbnRGb3JtIGlmcmFtZXMgc2hvdWxkIGxvb2sgd2hlbiB0aGV5IGhhdmUgZm9jdXMgKi9cclxuICAgICAgICA6Z2xvYmFsKC5zcS1pbnB1dC0tZm9jdXMpIHtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM0QTkwRTI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBEZWZpbmUgaG93IFNxUGF5bWVudEZvcm0gaWZyYW1lcyBzaG91bGQgbG9vayB3aGVuIHRoZXkgY29udGFpbiBpbnZhbGlkIHZhbHVlcyAqL1xyXG4gICAgICAgIDpnbG9iYWwoLnNxLWlucHV0LS1lcnJvcikge1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0UwMkYyRjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDpnbG9iYWwoI3NxLWNhcmQtbnVtYmVyKSB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogQ3VzdG9taXplIHRoZSBcIlBheSB3aXRoIENyZWRpdCBDYXJkXCIgYnV0dG9uICovXHJcbiAgICAgICAgOmdsb2JhbCguYnV0dG9uLWNyZWRpdC1jYXJkKSB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogNTZweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjNEE5MEUyO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4ycyBlYXNlLWluLW91dDtcclxuICAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgOmdsb2JhbCguYnV0dG9uLWNyZWRpdC1jYXJkOmhvdmVyKSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI4MUNCO1xyXG4gICAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICA8L2Rpdj5cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9