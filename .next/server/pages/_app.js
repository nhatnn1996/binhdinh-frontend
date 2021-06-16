(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8353:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./widgets/header/index.js + 2 modules
var header = __webpack_require__(4658);
// EXTERNAL MODULE: ./widgets/menu/index.js + 1 modules
var menu = __webpack_require__(3465);
// EXTERNAL MODULE: ./widgets/footer/index.js
var footer = __webpack_require__(4204);
// EXTERNAL MODULE: ./widgets/slider-bar/index.js + 1 modules
var slider_bar = __webpack_require__(5946);
;// CONCATENATED MODULE: external "@badrap/bar-of-progress"
var bar_of_progress_namespaceObject = require("@badrap/bar-of-progress");;
var bar_of_progress_default = /*#__PURE__*/__webpack_require__.n(bar_of_progress_namespaceObject);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./context/global.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const GlobalContext = /*#__PURE__*/external_react_default().createContext();

function reducer(state, action) {
  switch (action.type) {
    case "create-categories":
      return _objectSpread(_objectSpread({}, state), {}, {
        categories: action.payload
      });

    default:
      throw new Error();
  }
}

const initialState = {};

const GlobalProvider = ({
  children
}) => {
  const {
    0: state,
    1: dispatch
  } = (0,external_react_.useReducer)(reducer, initialState);
  return /*#__PURE__*/jsx_runtime_.jsx(GlobalContext.Provider, {
    value: {
      state,
      dispatch
    },
    children: children
  });
};

/* harmony default export */ var global = (GlobalProvider);
;// CONCATENATED MODULE: ./pages/_app.js



function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const progress = new (bar_of_progress_default())({
  size: 5,
  color: "#00539f",
  className: "bar-of-progress",
  delay: 100
});
router_default().events.on("routeChangeStart", progress.start);
router_default().events.on("routeChangeComplete", progress.finish);
router_default().events.on("routeChangeError", progress.finish);

function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(global, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(header/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(menu/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("main", {
      className: "container mx-auto flex mt-10",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "w-9/12",
        children: /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps))
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "w-3/12 ml-3",
        children: /*#__PURE__*/jsx_runtime_.jsx(slider_bar/* default */.Z, {})
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(footer/* default */.Z, {})]
  });
}

/* harmony default export */ var _app = (MyApp);

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 6850:
/***/ (function(module) {

"use strict";
module.exports = require("qs");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 3289:
/***/ (function(module) {

"use strict";
module.exports = require("styled-jsx/style");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664,273], function() { return __webpack_exec__(8353); });
module.exports = __webpack_exports__;

})();