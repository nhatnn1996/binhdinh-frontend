(function() {
var exports = {};
exports.id = 815;
exports.ids = [815];
exports.modules = {

/***/ 9794:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3289);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_helper_function__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1473);
/* harmony import */ var _shared_container_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5145);
/* harmony import */ var _widgets_notfound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5051);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3703);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_4__);




function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const PostDeital = ({
  data
}) => {
  var _data$image, _data$image2;

  if (!data) return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_widgets_notfound__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {});
  let content = data.content;
  const result = content ? content.replaceAll(/\/uploads\//g, _shared_container_index__WEBPACK_IMPORTED_MODULE_5__/* .url_base */ .I + "/uploads/") : "";
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "jsx-3412090669",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
        className: "jsx-3412090669",
        children: [" ", data.title, " "]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
        rel: "icon",
        href: "/favicon.ico",
        className: "jsx-3412090669"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "jsx-3412090669" + " " + "pb-10 pr-10",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "jsx-3412090669" + " " + "font-bold text-blue-900 text-xl",
        children: data.title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "jsx-3412090669" + " " + "",
        children: ["T\xE1c gi\u1EA3:", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
          className: "jsx-3412090669" + " " + "",
          children: " Qu\u1EA3n tr\u1ECB vi\xEAn "
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("code", {
        className: "jsx-3412090669" + " " + "text block mt-3",
        children: (0,_shared_helper_function__WEBPACK_IMPORTED_MODULE_6__/* .localeTime */ .C)(data.createdAt)
      }), ((_data$image = data.image) === null || _data$image === void 0 ? void 0 : _data$image.url) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "jsx-3412090669" + " " + "spect-w-16 spect-h-9 my-4",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
          src: _shared_container_index__WEBPACK_IMPORTED_MODULE_5__/* .url_base */ .I + ((_data$image2 = data.image) === null || _data$image2 === void 0 ? void 0 : _data$image2.url),
          className: "jsx-3412090669"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_markdown__WEBPACK_IMPORTED_MODULE_4___default()), {
        className: "content-detail",
        children: result
      }), data.file && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "jsx-3412090669" + " " + "mt-5",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
          href: _shared_container_index__WEBPACK_IMPORTED_MODULE_5__/* .url_base */ .I + data.file.url,
          target: "_blank",
          className: "jsx-3412090669" + " " + "font-medium text-blue-700 text-lg",
          children: "Xem n\u1ED9i dung chi ti\u1EBFt"
        })
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "3412090669",
      children: [".content.jsx-3412090669 p.jsx-3412090669{margin:5px 0px;}"]
    })]
  });
};

async function getServerSideProps(_ref) {
  let {
    query
  } = _ref,
      ctx = _objectWithoutProperties(_ref, ["query"]);

  const res = await fetch(_shared_container_index__WEBPACK_IMPORTED_MODULE_5__/* .url_api */ .C + "/pages?Slug=" + query.slug);
  const data = await res.json();
  return {
    props: {
      data: data[0]
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (PostDeital);

/***/ }),

/***/ 5145:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": function() { return /* binding */ url_api; },
/* harmony export */   "I": function() { return /* binding */ url_base; }
/* harmony export */ });
const url_api = "http://103.137.185.86:1337";
const url_base = "http://103.137.185.86:1337";

/***/ }),

/***/ 1473:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": function() { return /* binding */ localeTime; }
/* harmony export */ });
const localeTime = time => {
  const day = new Date(time).toLocaleString().split(",")[0];
  return day;
};

/***/ }),

/***/ 5051:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);


const NotFound = () => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: "px-10",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
      src: "/images/notfound.jpg",
      className: "w-full h-100"
    })
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (NotFound);

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 3703:
/***/ (function(module) {

"use strict";
module.exports = require("react-markdown");;

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(9794));
module.exports = __webpack_exports__;

})();