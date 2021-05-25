(function() {
var exports = {};
exports.id = 275;
exports.ids = [275];
exports.modules = {

/***/ 8638:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _slug_; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(3289);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./shared/helper/function.js
var helper_function = __webpack_require__(1473);
// EXTERNAL MODULE: ./shared/container/index.js
var container = __webpack_require__(5145);
// EXTERNAL MODULE: external "react-markdown"
var external_react_markdown_ = __webpack_require__(3703);
var external_react_markdown_default = /*#__PURE__*/__webpack_require__.n(external_react_markdown_);
;// CONCATENATED MODULE: ./components/ReactMarkdown/index.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // const gfm = require("remark-gfm");

const Markdown = ({
  children
}) => {
  const components = {
    a: (_ref) => {
      let {
        node
      } = _ref,
          props = _objectWithoutProperties(_ref, ["node"]);

      return /*#__PURE__*/jsx_runtime_.jsx("a", _objectSpread({
        style: {
          color: "blue"
        }
      }, props));
    },
    ul: (_ref2) => {
      let {
        node
      } = _ref2,
          props = _objectWithoutProperties(_ref2, ["node"]);

      return /*#__PURE__*/jsx_runtime_.jsx("ul", _objectSpread(_objectSpread({
        style: {
          listStyleType: "disc",
          marginLeft: 20
        }
      }, props), {}, {
        ordered: "false"
      }));
    },
    li: (_ref3) => {
      let {
        node
      } = _ref3,
          props = _objectWithoutProperties(_ref3, ["node"]);

      return /*#__PURE__*/jsx_runtime_.jsx("li", _objectSpread(_objectSpread({
        style: {
          margin: "16px 20px 16px 0px"
        }
      }, props), {}, {
        ordered: "false"
      }));
    },
    ordered: "false"
  };
  return /*#__PURE__*/jsx_runtime_.jsx((external_react_markdown_default()), {
    linkTarget: "_blank",
    components: components,
    children: children
  });
};

/* harmony default export */ var ReactMarkdown = (Markdown);
// EXTERNAL MODULE: ./widgets/notfound/index.js
var notfound = __webpack_require__(5051);
;// CONCATENATED MODULE: ./pages/bai-viet/[slug].js




function _slug_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _slug_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _slug_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const PostDeital = ({
  data
}) => {
  var _data$image, _data$image2;

  if (!data) return /*#__PURE__*/jsx_runtime_.jsx(notfound/* default */.Z, {});
  let content = data.content;
  const result = content ? content.replace(/\/uploads\//g, container/* url_base */.I + "/uploads/") : "";
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "jsx-3412090669",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("title", {
        className: "jsx-3412090669",
        children: [" ", data.title, " "]
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        href: "/favicon.ico",
        className: "jsx-3412090669"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "jsx-3412090669" + " " + "pb-10 pr-10",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "jsx-3412090669" + " " + "font-bold text-blue-900 text-xl",
        children: data.title
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "jsx-3412090669" + " " + " mt-3",
        children: ["T\xE1c gi\u1EA3:", /*#__PURE__*/jsx_runtime_.jsx("strong", {
          className: "jsx-3412090669" + " " + "ml-3",
          children: "Qu\u1EA3n tr\u1ECB vi\xEAn"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("code", {
        className: "jsx-3412090669" + " " + "text block mt-3",
        children: (0,helper_function/* localeTime */.C)(data.createdAt)
      }), ((_data$image = data.image) === null || _data$image === void 0 ? void 0 : _data$image.url) && /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "jsx-3412090669" + " " + "spect-w-16 spect-h-9 my-4",
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: container/* url_base */.I + ((_data$image2 = data.image) === null || _data$image2 === void 0 ? void 0 : _data$image2.url),
          className: "jsx-3412090669"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(ReactMarkdown, {
        className: "content-detail",
        children: result
      }), data.file && /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "jsx-3412090669" + " " + "mt-5",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: container/* url_base */.I + data.file.url,
          target: "_blank",
          className: "jsx-3412090669" + " " + "font-medium text-blue-700 text-lg",
          children: "Xem n\u1ED9i dung chi ti\u1EBFt"
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "3412090669",
      children: [".content.jsx-3412090669 p.jsx-3412090669{margin:5px 0px;}"]
    })]
  });
};

async function getServerSideProps(_ref) {
  let {
    query
  } = _ref,
      ctx = _slug_objectWithoutProperties(_ref, ["query"]);

  const res = await fetch(container/* url_api */.C + "/posts?slug=" + query.slug);
  const data = await res.json();
  return {
    props: {
      data: data[0]
    }
  };
}
/* harmony default export */ var _slug_ = (PostDeital);

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
var __webpack_exports__ = (__webpack_exec__(8638));
module.exports = __webpack_exports__;

})();