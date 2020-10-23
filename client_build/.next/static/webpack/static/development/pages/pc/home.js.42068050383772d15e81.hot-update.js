webpackHotUpdate("static\\development\\pages\\pc\\home.js",{

/***/ "./utils/ModelAction/modelUtil.ts":
/*!****************************************!*\
  !*** ./utils/ModelAction/modelUtil.ts ***!
  \****************************************/
/*! exports provided: baseActionOption, modelFactory, mergeModel, mergeTwoModel, mergeThreeModel, mergeListModel, initModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseActionOption", function() { return baseActionOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modelFactory", function() { return modelFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeModel", function() { return mergeModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeTwoModel", function() { return mergeTwoModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeThreeModel", function() { return mergeThreeModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeListModel", function() { return mergeListModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initModel", function() { return initModel; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var baseActionOption = {
  data: null,
  actions: {},
  mutate: function mutate() {},
  notice: function notice() {},
  query: function query() {},
  setData: function setData() {},
  store: {}
};
var modelNameList = [];
var modelFactory = function modelFactory(name, state, actions) {
  if (modelNameList.includes(name)) {
    throw Error("model Name duplicate: ".concat(name));
  }

  modelNameList.push(name);
  return {
    name: name,
    state: _objectSpread(_objectSpread({}, state), {}, {
      fetchLoad: {},
      fetchError: {}
    }),
    actions: actions
  };
};
function mergeModel(model, name, state, actions) {
  Object.keys(model.state).forEach(function (value) {
    // @ts-ignore
    if ((state === null || state === void 0 ? void 0 : state[value]) && !['fetchError', 'fetchLoad'].includes(value)) {
      throw new Error("mergeModel: state duplicate:: key ".concat(value));
    }
  });
  Object.keys(model.actions).forEach(function (value) {
    // @ts-ignore
    if (actions === null || actions === void 0 ? void 0 : actions[value]) {
      throw new Error("mergeModel: action duplicate:: key ".concat(value));
    }
  });
  var mergeName = "".concat(name, "_with_").concat(model.name);

  if (modelNameList.includes(mergeName)) {
    throw Error("model Name duplicate: ".concat(mergeName));
  }

  return {
    name: mergeName,
    state: _objectSpread(_objectSpread({}, model.state), state),
    actions: _objectSpread(_objectSpread({}, model.actions), actions)
  };
}
function mergeTwoModel(model, modelT) {
  Object.keys(model.state).forEach(function (value) {
    var _modelT$state;

    // @ts-ignore
    if (((_modelT$state = modelT.state) === null || _modelT$state === void 0 ? void 0 : _modelT$state[value]) && !['fetchError', 'fetchLoad'].includes(value)) {
      throw new Error("mergeTwoModel: state duplicate:: key ".concat(value));
    }
  });
  Object.keys(model.actions).forEach(function (value) {
    var _modelT$actions;

    // @ts-ignore
    if (modelT === null || modelT === void 0 ? void 0 : (_modelT$actions = modelT.actions) === null || _modelT$actions === void 0 ? void 0 : _modelT$actions[value]) {
      throw new Error("mergeTwoModel: action duplicate:: key ".concat(value));
    }
  });
  var mergeName = "".concat(model.name, "_and_").concat(modelT.name);

  if (modelNameList.includes(mergeName)) {
    throw Error("model Name duplicate: ".concat(mergeName));
  }

  return {
    name: mergeName,
    state: _objectSpread(_objectSpread({}, model.state), modelT.state),
    actions: _objectSpread(_objectSpread({}, model.actions), modelT.actions)
  };
}
var mergeThreeModel = function mergeThreeModel(modelA, modelB, modelC) {
  return mergeTwoModel(mergeTwoModel(modelA, modelB), modelC);
};
var mergeListModel = function mergeListModel(modelList) {
  return modelList.slice(1).reduce(function (acc, model) {
    return mergeTwoModel(acc, model);
  }, modelList[0]);
};
var initList = [];
var initModel = function initModel(model, initState) {
  if (initList.includes(model.name)) return;
  initList.push(model.name);
  model.state = _objectSpread(_objectSpread({}, model.state), initState);
}; // const model = modelFactory({}, {
//   ss: {
//     eee: (value: string, option) => {
//     }
//   }
// })
//
// useStoreModel(ModuleEnum.Test, model).actions.ss.eee('')
// export function mergeIntoModel(originModel, name, innerModel) {
//
// }
// const _model = mergeTwoModel(modelFactory({
//   t1: ''
// }, {
// }), modelFactory({
//   t3: ''
// }, {
// }))
//
// mergeModel(_model, {
//   t2: ''
// }, {
// })

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9Nb2RlbEFjdGlvbi9tb2RlbFV0aWwudHMiXSwibmFtZXMiOlsiYmFzZUFjdGlvbk9wdGlvbiIsImRhdGEiLCJhY3Rpb25zIiwibXV0YXRlIiwibm90aWNlIiwicXVlcnkiLCJzZXREYXRhIiwic3RvcmUiLCJtb2RlbE5hbWVMaXN0IiwibW9kZWxGYWN0b3J5IiwibmFtZSIsInN0YXRlIiwiaW5jbHVkZXMiLCJFcnJvciIsInB1c2giLCJmZXRjaExvYWQiLCJmZXRjaEVycm9yIiwibWVyZ2VNb2RlbCIsIm1vZGVsIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJ2YWx1ZSIsIm1lcmdlTmFtZSIsIm1lcmdlVHdvTW9kZWwiLCJtb2RlbFQiLCJtZXJnZVRocmVlTW9kZWwiLCJtb2RlbEEiLCJtb2RlbEIiLCJtb2RlbEMiLCJtZXJnZUxpc3RNb2RlbCIsIm1vZGVsTGlzdCIsInNsaWNlIiwicmVkdWNlIiwiYWNjIiwiaW5pdExpc3QiLCJpbml0TW9kZWwiLCJpbml0U3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHTyxJQUFNQSxnQkFBdUMsR0FBRztBQUNyREMsTUFBSSxFQUFFLElBRCtDO0FBRXJEQyxTQUFPLEVBQUUsRUFGNEM7QUFHckRDLFFBQU0sRUFBRSxrQkFBTSxDQUFFLENBSHFDO0FBSXJEQyxRQUFNLEVBQUUsa0JBQU0sQ0FBRSxDQUpxQztBQUtyREMsT0FBSyxFQUFFLGlCQUFNLENBQUUsQ0FMc0M7QUFNckRDLFNBQU8sRUFBRSxtQkFBTSxDQUFFLENBTm9DO0FBT3JEQyxPQUFLLEVBQUU7QUFQOEMsQ0FBaEQ7QUFVUCxJQUFNQyxhQUFzQixHQUFHLEVBQS9CO0FBQ08sSUFBTUMsWUFBMEIsR0FBRyxTQUE3QkEsWUFBNkIsQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWNULE9BQWQsRUFBMEI7QUFDbEUsTUFBSU0sYUFBYSxDQUFDSSxRQUFkLENBQXVCRixJQUF2QixDQUFK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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccGNcXGhvbWUuanMuNDIwNjgwNTAzODM3NzJkMTVlODEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG50eXBlIE1vZGVsRmFjdG9yeTxOID0gJyc+ID0gPFQsIEUgZXh0ZW5kcyBNb2RlbEFjdGlvbk9iakhlbHA8YW55LCBUICYgRmV0Y2hPYmo+PihuYW1lOiBzdHJpbmcsIHN0YXRlOiBULCBhY3Rpb25zOiBFKSA9PiBNb2RlbERhdGE8VCAmIEZldGNoT2JqLCBFPlxyXG5cclxuZXhwb3J0IGNvbnN0IGJhc2VBY3Rpb25PcHRpb246IEJhc2VNb2RlbEFjdGlvbk9wdGlvbiA9IHtcclxuICBkYXRhOiBudWxsLFxyXG4gIGFjdGlvbnM6IHt9LFxyXG4gIG11dGF0ZTogKCkgPT4ge30sXHJcbiAgbm90aWNlOiAoKSA9PiB7fSxcclxuICBxdWVyeTogKCkgPT4ge30sXHJcbiAgc2V0RGF0YTogKCkgPT4ge30sXHJcbiAgc3RvcmU6IHt9XHJcbn1cclxuXHJcbmNvbnN0IG1vZGVsTmFtZUxpc3Q6c3RyaW5nW10gPSBbXVxyXG5leHBvcnQgY29uc3QgbW9kZWxGYWN0b3J5OiBNb2RlbEZhY3RvcnkgPSAobmFtZSwgc3RhdGUsIGFjdGlvbnMpID0+IHtcclxuICBpZiAobW9kZWxOYW1lTGlzdC5pbmNsdWRlcyhuYW1lKSkge1xyXG4gICAgdGhyb3cgRXJyb3IoYG1vZGVsIE5hbWUgZHVwbGljYXRlOiAke25hbWV9YClcclxuICB9XHJcbiAgbW9kZWxOYW1lTGlzdC5wdXNoKG5hbWUpXHJcbiAgcmV0dXJuIHtcclxuICAgIG5hbWUsXHJcbiAgICBzdGF0ZToge1xyXG4gICAgICAuLi5zdGF0ZSxcclxuICAgICAgZmV0Y2hMb2FkOiB7fSxcclxuICAgICAgZmV0Y2hFcnJvcjoge30sXHJcbiAgICB9LFxyXG4gICAgYWN0aW9ucyxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZU1vZGVsPEEgZXh0ZW5kcyBGZXRjaE9iaiwgQiBleHRlbmRzIE1vZGVsQWN0aW9uT2JqSGVscDxhbnksIEE+LCBDLCBEIGV4dGVuZHMgTW9kZWxBY3Rpb25PYmpIZWxwPGFueSwgQSAmIEM+Pihtb2RlbDoge1xyXG4gIHN0YXRlOiBBXHJcbiAgYWN0aW9uczogQlxyXG4gIG5hbWU6IHN0cmluZ1xyXG59LCBuYW1lOiBzdHJpbmcsIHN0YXRlOiBDLCBhY3Rpb25zOiBEKToge1xyXG4gIHN0YXRlOiBBICYgQ1xyXG4gIGFjdGlvbnM6IEIgJiBEICYge1xyXG4gICAgW2tleSBpbiBrZXlvZiBCXTogTW9kZWxBY3Rpb248YW55LCBBPlxyXG4gIH0gJiB7XHJcbiAgICBba2V5IGluIGtleW9mIERdOiBNb2RlbEFjdGlvbjxhbnksIEEgJiBDPlxyXG4gIH1cclxuICBuYW1lOiBzdHJpbmdcclxufSB7XHJcbiAgT2JqZWN0LmtleXMobW9kZWwuc3RhdGUpLmZvckVhY2godmFsdWUgPT4ge1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgaWYgKHN0YXRlPy5bdmFsdWVdICYmICFbJ2ZldGNoRXJyb3InLCAnZmV0Y2hMb2FkJ10uaW5jbHVkZXModmFsdWUpKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgbWVyZ2VNb2RlbDogc3RhdGUgZHVwbGljYXRlOjoga2V5ICR7dmFsdWV9YClcclxuICAgIH1cclxuICB9KVxyXG4gIE9iamVjdC5rZXlzKG1vZGVsLmFjdGlvbnMpLmZvckVhY2godmFsdWUgPT4ge1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgaWYgKGFjdGlvbnM/Llt2YWx1ZV0pIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBtZXJnZU1vZGVsOiBhY3Rpb24gZHVwbGljYXRlOjoga2V5ICR7dmFsdWV9YClcclxuICAgIH1cclxuICB9KVxyXG4gIGNvbnN0IG1lcmdlTmFtZSA9IGAke25hbWV9X3dpdGhfJHttb2RlbC5uYW1lfWBcclxuICBpZiAobW9kZWxOYW1lTGlzdC5pbmNsdWRlcyhtZXJnZU5hbWUpKSB7XHJcbiAgICB0aHJvdyBFcnJvcihgbW9kZWwgTmFtZSBkdXBsaWNhdGU6ICR7bWVyZ2VOYW1lfWApXHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgbmFtZTogbWVyZ2VOYW1lLFxyXG4gICAgc3RhdGU6IHtcclxuICAgICAgLi4ubW9kZWwuc3RhdGUsXHJcbiAgICAgIC4uLnN0YXRlLFxyXG4gICAgfSxcclxuICAgIGFjdGlvbnM6IHtcclxuICAgICAgLi4ubW9kZWwuYWN0aW9ucyxcclxuICAgICAgLi4uYWN0aW9ucyxcclxuICAgIH0sXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VUd29Nb2RlbDxBLCBCIGV4dGVuZHMgTW9kZWxBY3Rpb25PYmpIZWxwPGFueSwgQT4sIEMsIEQgZXh0ZW5kcyBNb2RlbEFjdGlvbk9iakhlbHA8YW55LCBDPj4obW9kZWw6IHtcclxuICBzdGF0ZTogQVxyXG4gIGFjdGlvbnM6IEJcclxuICBuYW1lOiBzdHJpbmdcclxufSwgbW9kZWxUOiB7XHJcbiAgc3RhdGU6IENcclxuICBhY3Rpb25zOiBEXHJcbiAgbmFtZTogc3RyaW5nXHJcbn0pOiB7XHJcbiAgbmFtZTogc3RyaW5nXHJcbiAgc3RhdGU6IEEgJiBDXHJcbiAgYWN0aW9uczogQiAmIEQgJiB7XHJcbiAgICBba2V5IGluIGtleW9mIEJdOiBNb2RlbEFjdGlvblxyXG4gIH0gJiB7XHJcbiAgICBba2V5IGluIGtleW9mIERdOiBNb2RlbEFjdGlvblxyXG4gIH1cclxufSB7XHJcbiAgT2JqZWN0LmtleXMobW9kZWwuc3RhdGUpLmZvckVhY2godmFsdWUgPT4ge1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgaWYgKG1vZGVsVC5zdGF0ZT8uW3ZhbHVlXSAmJiAhWydmZXRjaEVycm9yJywgJ2ZldGNoTG9hZCddLmluY2x1ZGVzKHZhbHVlKSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYG1lcmdlVHdvTW9kZWw6IHN0YXRlIGR1cGxpY2F0ZTo6IGtleSAke3ZhbHVlfWApXHJcbiAgICB9XHJcbiAgfSlcclxuICBPYmplY3Qua2V5cyhtb2RlbC5hY3Rpb25zKS5mb3JFYWNoKHZhbHVlID0+IHtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIGlmIChtb2RlbFQ/LmFjdGlvbnM/Llt2YWx1ZV0pIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBtZXJnZVR3b01vZGVsOiBhY3Rpb24gZHVwbGljYXRlOjoga2V5ICR7dmFsdWV9YClcclxuICAgIH1cclxuICB9KVxyXG4gIGNvbnN0IG1lcmdlTmFtZSA9IGAke21vZGVsLm5hbWV9X2FuZF8ke21vZGVsVC5uYW1lfWBcclxuICBpZiAobW9kZWxOYW1lTGlzdC5pbmNsdWRlcyhtZXJnZU5hbWUpKSB7XHJcbiAgICB0aHJvdyBFcnJvcihgbW9kZWwgTmFtZSBkdXBsaWNhdGU6ICR7bWVyZ2VOYW1lfWApXHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgbmFtZTogbWVyZ2VOYW1lLFxyXG4gICAgc3RhdGU6IHtcclxuICAgICAgLi4ubW9kZWwuc3RhdGUsXHJcbiAgICAgIC4uLm1vZGVsVC5zdGF0ZSxcclxuICAgIH0sXHJcbiAgICBhY3Rpb25zOiB7XHJcbiAgICAgIC4uLm1vZGVsLmFjdGlvbnMsXHJcbiAgICAgIC4uLm1vZGVsVC5hY3Rpb25zLFxyXG4gICAgfSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBtZXJnZVRocmVlTW9kZWwgPSA8QSBleHRlbmRzIEZldGNoT2JqLCBUIGV4dGVuZHMgTW9kZWxBY3Rpb25PYmpIZWxwPGFueSwgQT4sIEIgZXh0ZW5kcyBGZXRjaE9iaiwgTyBleHRlbmRzIE1vZGVsQWN0aW9uT2JqSGVscDxhbnksIEI+LCBDIGV4dGVuZHMgRmV0Y2hPYmosIFAgZXh0ZW5kcyBNb2RlbEFjdGlvbk9iakhlbHA8YW55LCBDPj4obW9kZWxBOiBNb2RlbERhdGE8QSwgVD4sIG1vZGVsQjogTW9kZWxEYXRhPEIsIE8+LCBtb2RlbEM6IE1vZGVsRGF0YTxDLCBQPik6IHtcclxuICBuYW1lOiBzdHJpbmdcclxuICBzdGF0ZTogQSAmIEIgJiBDXHJcbiAgYWN0aW9uczogVCAmIE8gJiBQICYge1xyXG4gICAgW2tleSBpbiBrZXlvZiBUXTogTW9kZWxBY3Rpb25cclxuICB9ICYge1xyXG4gICAgW2tleSBpbiBrZXlvZiBPXTogTW9kZWxBY3Rpb25cclxuICB9ICYge1xyXG4gICAgW2tleSBpbiBrZXlvZiBQXTogTW9kZWxBY3Rpb25cclxuICB9XHJcbn0gPT4ge1xyXG4gIHJldHVybiBtZXJnZVR3b01vZGVsKG1lcmdlVHdvTW9kZWwobW9kZWxBLCBtb2RlbEIpLCBtb2RlbEMpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBtZXJnZUxpc3RNb2RlbCA9IChtb2RlbExpc3Q6IE1vZGVsRGF0YTxhbnksIGFueT5bXSkgPT4ge1xyXG4gIHJldHVybiBtb2RlbExpc3Quc2xpY2UoMSkucmVkdWNlKChhY2MsIG1vZGVsKSA9PiBtZXJnZVR3b01vZGVsKGFjYywgbW9kZWwpLCBtb2RlbExpc3RbMF0pXHJcbn1cclxuXHJcbmNvbnN0IGluaXRMaXN0OiBzdHJpbmdbXSA9IFtdXHJcbmV4cG9ydCBjb25zdCBpbml0TW9kZWwgPSA8VCBleHRlbmRzIEZldGNoT2JqLCBFIGV4dGVuZHMgTW9kZWxBY3Rpb25PYmpIZWxwPGFueSwgVD4+KG1vZGVsOiBNb2RlbERhdGE8VCwgRT4sIGluaXRTdGF0ZTogUGFydGlhbDxUPikgPT4ge1xyXG4gIGlmIChpbml0TGlzdC5pbmNsdWRlcyhtb2RlbC5uYW1lKSkgcmV0dXJuXHJcbiAgaW5pdExpc3QucHVzaChtb2RlbC5uYW1lKVxyXG4gIG1vZGVsLnN0YXRlID0ge1xyXG4gICAgLi4ubW9kZWwuc3RhdGUsXHJcbiAgICAuLi5pbml0U3RhdGUsXHJcbiAgfVxyXG59XHJcblxyXG4vLyBjb25zdCBtb2RlbCA9IG1vZGVsRmFjdG9yeSh7fSwge1xyXG4vLyAgIHNzOiB7XHJcbi8vICAgICBlZWU6ICh2YWx1ZTogc3RyaW5nLCBvcHRpb24pID0+IHtcclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi8vIH0pXHJcbi8vXHJcbi8vIHVzZVN0b3JlTW9kZWwoTW9kdWxlRW51bS5UZXN0LCBtb2RlbCkuYWN0aW9ucy5zcy5lZWUoJycpXHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gbWVyZ2VJbnRvTW9kZWwob3JpZ2luTW9kZWwsIG5hbWUsIGlubmVyTW9kZWwpIHtcclxuLy9cclxuLy8gfVxyXG5cclxuLy8gY29uc3QgX21vZGVsID0gbWVyZ2VUd29Nb2RlbChtb2RlbEZhY3Rvcnkoe1xyXG4vLyAgIHQxOiAnJ1xyXG4vLyB9LCB7XHJcbi8vIH0pLCBtb2RlbEZhY3Rvcnkoe1xyXG4vLyAgIHQzOiAnJ1xyXG4vLyB9LCB7XHJcbi8vIH0pKVxyXG4vL1xyXG4vLyBtZXJnZU1vZGVsKF9tb2RlbCwge1xyXG4vLyAgIHQyOiAnJ1xyXG4vLyB9LCB7XHJcbi8vIH0pXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=