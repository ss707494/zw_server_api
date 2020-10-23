webpackHotUpdate("static\\development\\pages\\_app.js",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9Nb2RlbEFjdGlvbi9tb2RlbFV0aWwudHMiXSwibmFtZXMiOlsiYmFzZUFjdGlvbk9wdGlvbiIsImRhdGEiLCJhY3Rpb25zIiwibXV0YXRlIiwibm90aWNlIiwicXVlcnkiLCJzZXREYXRhIiwic3RvcmUiLCJtb2RlbE5hbWVMaXN0IiwibW9kZWxGYWN0b3J5IiwibmFtZSIsInN0YXRlIiwiaW5jbHVkZXMiLCJFcnJvciIsInB1c2giLCJmZXRjaExvYWQiLCJmZXRjaEVycm9yIiwibWVyZ2VNb2RlbCIsIm1vZGVsIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJ2YWx1ZSIsIm1lcmdlTmFtZSIsIm1lcmdlVHdvTW9kZWwiLCJtb2RlbFQiLCJtZXJnZVRocmVlTW9kZWwiLCJtb2RlbEEiLCJtb2RlbEIiLCJtb2RlbEMiLCJtZXJnZUxpc3RNb2RlbCIsIm1vZGVsTGlzdCIsInNsaWNlIiwicmVkdWNlIiwiYWNjIiwiaW5pdExpc3QiLCJpbml0TW9kZWwiLCJpbml0U3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHTyxJQUFNQSxnQkFBdUMsR0FBRztBQUNyREMsTUFBSSxFQUFFLElBRCtDO0FBRXJEQyxTQUFPLEVBQUUsRUFGNEM7QUFHckRDLFFBQU0sRUFBRSxrQkFBTSxDQUFFLENBSHFDO0FBSXJEQyxRQUFNLEVBQUUsa0JBQU0sQ0FBRSxDQUpxQztBQUtyREMsT0FBSyxFQUFFLGlCQUFNLENBQUUsQ0FMc0M7QUFNckRDLFNBQU8sRUFBRSxtQkFBTSxDQUFFLENBTm9DO0FBT3JEQyxPQUFLLEVBQUU7QUFQOEMsQ0FBaEQ7QUFVUCxJQUFNQyxhQUFzQixHQUFHLEVBQS9CO0FBQ08sSUFBTUMsWUFBMEIsR0FBRyxTQUE3QkEsWUFBNkIsQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWNULE9BQWQsRUFBMEI7QUFDbEUsTUFBSU0sYUFBYSxDQUFDSSxRQUFkLENBQXVCRixJQUF2QixDQUFK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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy40MjA2ODA1MDM4Mzc3MmQxNWU4MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnR5cGUgTW9kZWxGYWN0b3J5PE4gPSAnJz4gPSA8VCwgRSBleHRlbmRzIE1vZGVsQWN0aW9uT2JqSGVscDxhbnksIFQgJiBGZXRjaE9iaj4+KG5hbWU6IHN0cmluZywgc3RhdGU6IFQsIGFjdGlvbnM6IEUpID0+IE1vZGVsRGF0YTxUICYgRmV0Y2hPYmosIEU+XHJcblxyXG5leHBvcnQgY29uc3QgYmFzZUFjdGlvbk9wdGlvbjogQmFzZU1vZGVsQWN0aW9uT3B0aW9uID0ge1xyXG4gIGRhdGE6IG51bGwsXHJcbiAgYWN0aW9uczoge30sXHJcbiAgbXV0YXRlOiAoKSA9PiB7fSxcclxuICBub3RpY2U6ICgpID0+IHt9LFxyXG4gIHF1ZXJ5OiAoKSA9PiB7fSxcclxuICBzZXREYXRhOiAoKSA9PiB7fSxcclxuICBzdG9yZToge31cclxufVxyXG5cclxuY29uc3QgbW9kZWxOYW1lTGlzdDpzdHJpbmdbXSA9IFtdXHJcbmV4cG9ydCBjb25zdCBtb2RlbEZhY3Rvcnk6IE1vZGVsRmFjdG9yeSA9IChuYW1lLCBzdGF0ZSwgYWN0aW9ucykgPT4ge1xyXG4gIGlmIChtb2RlbE5hbWVMaXN0LmluY2x1ZGVzKG5hbWUpKSB7XHJcbiAgICB0aHJvdyBFcnJvcihgbW9kZWwgTmFtZSBkdXBsaWNhdGU6ICR7bmFtZX1gKVxyXG4gIH1cclxuICBtb2RlbE5hbWVMaXN0LnB1c2gobmFtZSlcclxuICByZXR1cm4ge1xyXG4gICAgbmFtZSxcclxuICAgIHN0YXRlOiB7XHJcbiAgICAgIC4uLnN0YXRlLFxyXG4gICAgICBmZXRjaExvYWQ6IHt9LFxyXG4gICAgICBmZXRjaEVycm9yOiB7fSxcclxuICAgIH0sXHJcbiAgICBhY3Rpb25zLFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlTW9kZWw8QSBleHRlbmRzIEZldGNoT2JqLCBCIGV4dGVuZHMgTW9kZWxBY3Rpb25PYmpIZWxwPGFueSwgQT4sIEMsIEQgZXh0ZW5kcyBNb2RlbEFjdGlvbk9iakhlbHA8YW55LCBBICYgQz4+KG1vZGVsOiB7XHJcbiAgc3RhdGU6IEFcclxuICBhY3Rpb25zOiBCXHJcbiAgbmFtZTogc3RyaW5nXHJcbn0sIG5hbWU6IHN0cmluZywgc3RhdGU6IEMsIGFjdGlvbnM6IEQpOiB7XHJcbiAgc3RhdGU6IEEgJiBDXHJcbiAgYWN0aW9uczogQiAmIEQgJiB7XHJcbiAgICBba2V5IGluIGtleW9mIEJdOiBNb2RlbEFjdGlvbjxhbnksIEE+XHJcbiAgfSAmIHtcclxuICAgIFtrZXkgaW4ga2V5b2YgRF06IE1vZGVsQWN0aW9uPGFueSwgQSAmIEM+XHJcbiAgfVxyXG4gIG5hbWU6IHN0cmluZ1xyXG59IHtcclxuICBPYmplY3Qua2V5cyhtb2RlbC5zdGF0ZSkuZm9yRWFjaCh2YWx1ZSA9PiB7XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBpZiAoc3RhdGU/Llt2YWx1ZV0gJiYgIVsnZmV0Y2hFcnJvcicsICdmZXRjaExvYWQnXS5pbmNsdWRlcyh2YWx1ZSkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBtZXJnZU1vZGVsOiBzdGF0ZSBkdXBsaWNhdGU6OiBrZXkgJHt2YWx1ZX1gKVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgT2JqZWN0LmtleXMobW9kZWwuYWN0aW9ucykuZm9yRWFjaCh2YWx1ZSA9PiB7XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBpZiAoYWN0aW9ucz8uW3ZhbHVlXSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYG1lcmdlTW9kZWw6IGFjdGlvbiBkdXBsaWNhdGU6OiBrZXkgJHt2YWx1ZX1gKVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgY29uc3QgbWVyZ2VOYW1lID0gYCR7bmFtZX1fd2l0aF8ke21vZGVsLm5hbWV9YFxyXG4gIGlmIChtb2RlbE5hbWVMaXN0LmluY2x1ZGVzKG1lcmdlTmFtZSkpIHtcclxuICAgIHRocm93IEVycm9yKGBtb2RlbCBOYW1lIGR1cGxpY2F0ZTogJHttZXJnZU5hbWV9YClcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBuYW1lOiBtZXJnZU5hbWUsXHJcbiAgICBzdGF0ZToge1xyXG4gICAgICAuLi5tb2RlbC5zdGF0ZSxcclxuICAgICAgLi4uc3RhdGUsXHJcbiAgICB9LFxyXG4gICAgYWN0aW9uczoge1xyXG4gICAgICAuLi5tb2RlbC5hY3Rpb25zLFxyXG4gICAgICAuLi5hY3Rpb25zLFxyXG4gICAgfSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVR3b01vZGVsPEEsIEIgZXh0ZW5kcyBNb2RlbEFjdGlvbk9iakhlbHA8YW55LCBBPiwgQywgRCBleHRlbmRzIE1vZGVsQWN0aW9uT2JqSGVscDxhbnksIEM+Pihtb2RlbDoge1xyXG4gIHN0YXRlOiBBXHJcbiAgYWN0aW9uczogQlxyXG4gIG5hbWU6IHN0cmluZ1xyXG59LCBtb2RlbFQ6IHtcclxuICBzdGF0ZTogQ1xyXG4gIGFjdGlvbnM6IERcclxuICBuYW1lOiBzdHJpbmdcclxufSk6IHtcclxuICBuYW1lOiBzdHJpbmdcclxuICBzdGF0ZTogQSAmIENcclxuICBhY3Rpb25zOiBCICYgRCAmIHtcclxuICAgIFtrZXkgaW4ga2V5b2YgQl06IE1vZGVsQWN0aW9uXHJcbiAgfSAmIHtcclxuICAgIFtrZXkgaW4ga2V5b2YgRF06IE1vZGVsQWN0aW9uXHJcbiAgfVxyXG59IHtcclxuICBPYmplY3Qua2V5cyhtb2RlbC5zdGF0ZSkuZm9yRWFjaCh2YWx1ZSA9PiB7XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBpZiAobW9kZWxULnN0YXRlPy5bdmFsdWVdICYmICFbJ2ZldGNoRXJyb3InLCAnZmV0Y2hMb2FkJ10uaW5jbHVkZXModmFsdWUpKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgbWVyZ2VUd29Nb2RlbDogc3RhdGUgZHVwbGljYXRlOjoga2V5ICR7dmFsdWV9YClcclxuICAgIH1cclxuICB9KVxyXG4gIE9iamVjdC5rZXlzKG1vZGVsLmFjdGlvbnMpLmZvckVhY2godmFsdWUgPT4ge1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgaWYgKG1vZGVsVD8uYWN0aW9ucz8uW3ZhbHVlXSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYG1lcmdlVHdvTW9kZWw6IGFjdGlvbiBkdXBsaWNhdGU6OiBrZXkgJHt2YWx1ZX1gKVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgY29uc3QgbWVyZ2VOYW1lID0gYCR7bW9kZWwubmFtZX1fYW5kXyR7bW9kZWxULm5hbWV9YFxyXG4gIGlmIChtb2RlbE5hbWVMaXN0LmluY2x1ZGVzKG1lcmdlTmFtZSkpIHtcclxuICAgIHRocm93IEVycm9yKGBtb2RlbCBOYW1lIGR1cGxpY2F0ZTogJHttZXJnZU5hbWV9YClcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBuYW1lOiBtZXJnZU5hbWUsXHJcbiAgICBzdGF0ZToge1xyXG4gICAgICAuLi5tb2RlbC5zdGF0ZSxcclxuICAgICAgLi4ubW9kZWxULnN0YXRlLFxyXG4gICAgfSxcclxuICAgIGFjdGlvbnM6IHtcclxuICAgICAgLi4ubW9kZWwuYWN0aW9ucyxcclxuICAgICAgLi4ubW9kZWxULmFjdGlvbnMsXHJcbiAgICB9LFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG1lcmdlVGhyZWVNb2RlbCA9IDxBIGV4dGVuZHMgRmV0Y2hPYmosIFQgZXh0ZW5kcyBNb2RlbEFjdGlvbk9iakhlbHA8YW55LCBBPiwgQiBleHRlbmRzIEZldGNoT2JqLCBPIGV4dGVuZHMgTW9kZWxBY3Rpb25PYmpIZWxwPGFueSwgQj4sIEMgZXh0ZW5kcyBGZXRjaE9iaiwgUCBleHRlbmRzIE1vZGVsQWN0aW9uT2JqSGVscDxhbnksIEM+Pihtb2RlbEE6IE1vZGVsRGF0YTxBLCBUPiwgbW9kZWxCOiBNb2RlbERhdGE8QiwgTz4sIG1vZGVsQzogTW9kZWxEYXRhPEMsIFA+KToge1xyXG4gIG5hbWU6IHN0cmluZ1xyXG4gIHN0YXRlOiBBICYgQiAmIENcclxuICBhY3Rpb25zOiBUICYgTyAmIFAgJiB7XHJcbiAgICBba2V5IGluIGtleW9mIFRdOiBNb2RlbEFjdGlvblxyXG4gIH0gJiB7XHJcbiAgICBba2V5IGluIGtleW9mIE9dOiBNb2RlbEFjdGlvblxyXG4gIH0gJiB7XHJcbiAgICBba2V5IGluIGtleW9mIFBdOiBNb2RlbEFjdGlvblxyXG4gIH1cclxufSA9PiB7XHJcbiAgcmV0dXJuIG1lcmdlVHdvTW9kZWwobWVyZ2VUd29Nb2RlbChtb2RlbEEsIG1vZGVsQiksIG1vZGVsQylcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG1lcmdlTGlzdE1vZGVsID0gKG1vZGVsTGlzdDogTW9kZWxEYXRhPGFueSwgYW55PltdKSA9PiB7XHJcbiAgcmV0dXJuIG1vZGVsTGlzdC5zbGljZSgxKS5yZWR1Y2UoKGFjYywgbW9kZWwpID0+IG1lcmdlVHdvTW9kZWwoYWNjLCBtb2RlbCksIG1vZGVsTGlzdFswXSlcclxufVxyXG5cclxuY29uc3QgaW5pdExpc3Q6IHN0cmluZ1tdID0gW11cclxuZXhwb3J0IGNvbnN0IGluaXRNb2RlbCA9IDxUIGV4dGVuZHMgRmV0Y2hPYmosIEUgZXh0ZW5kcyBNb2RlbEFjdGlvbk9iakhlbHA8YW55LCBUPj4obW9kZWw6IE1vZGVsRGF0YTxULCBFPiwgaW5pdFN0YXRlOiBQYXJ0aWFsPFQ+KSA9PiB7XHJcbiAgaWYgKGluaXRMaXN0LmluY2x1ZGVzKG1vZGVsLm5hbWUpKSByZXR1cm5cclxuICBpbml0TGlzdC5wdXNoKG1vZGVsLm5hbWUpXHJcbiAgbW9kZWwuc3RhdGUgPSB7XHJcbiAgICAuLi5tb2RlbC5zdGF0ZSxcclxuICAgIC4uLmluaXRTdGF0ZSxcclxuICB9XHJcbn1cclxuXHJcbi8vIGNvbnN0IG1vZGVsID0gbW9kZWxGYWN0b3J5KHt9LCB7XHJcbi8vICAgc3M6IHtcclxuLy8gICAgIGVlZTogKHZhbHVlOiBzdHJpbmcsIG9wdGlvbikgPT4ge1xyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gfSlcclxuLy9cclxuLy8gdXNlU3RvcmVNb2RlbChNb2R1bGVFbnVtLlRlc3QsIG1vZGVsKS5hY3Rpb25zLnNzLmVlZSgnJylcclxuXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBtZXJnZUludG9Nb2RlbChvcmlnaW5Nb2RlbCwgbmFtZSwgaW5uZXJNb2RlbCkge1xyXG4vL1xyXG4vLyB9XHJcblxyXG4vLyBjb25zdCBfbW9kZWwgPSBtZXJnZVR3b01vZGVsKG1vZGVsRmFjdG9yeSh7XHJcbi8vICAgdDE6ICcnXHJcbi8vIH0sIHtcclxuLy8gfSksIG1vZGVsRmFjdG9yeSh7XHJcbi8vICAgdDM6ICcnXHJcbi8vIH0sIHtcclxuLy8gfSkpXHJcbi8vXHJcbi8vIG1lcmdlTW9kZWwoX21vZGVsLCB7XHJcbi8vICAgdDI6ICcnXHJcbi8vIH0sIHtcclxuLy8gfSlcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==