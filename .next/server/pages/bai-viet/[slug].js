module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Sl8l");


/***/ }),

/***/ "D2A5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return localeTime; });
const localeTime = time => {
  const day = new Date(time).toLocaleString().split(",")[0];
  return day;
};

/***/ }),

/***/ "DHdS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return url_api; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return url_base; });
const url_api = "http://103.137.185.86:1337";
const url_base = "http://103.137.185.86:1337";

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "Sl8l":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./shared/helper/function.js
var helper_function = __webpack_require__("D2A5");

// EXTERNAL MODULE: ./shared/container/index.js
var container = __webpack_require__("DHdS");

// EXTERNAL MODULE: external "react-markdown"
var external_react_markdown_ = __webpack_require__("id0+");
var external_react_markdown_default = /*#__PURE__*/__webpack_require__.n(external_react_markdown_);

// CONCATENATED MODULE: ./components/ReactMarkdown/index.js


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

      return /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", _objectSpread({
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

      return /*#__PURE__*/Object(jsx_runtime_["jsx"])("ul", _objectSpread(_objectSpread({
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

      return /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", _objectSpread(_objectSpread({
        style: {
          margin: "16px 20px 16px 0px"
        }
      }, props), {}, {
        ordered: "false"
      }));
    },
    ordered: "false"
  };
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_markdown_default.a, {
    linkTarget: "_blank",
    components: components,
    children: children
  });
};

/* harmony default export */ var ReactMarkdown = (Markdown);
// EXTERNAL MODULE: ./widgets/notfound/index.js
var notfound = __webpack_require__("UWo5");

// CONCATENATED MODULE: ./pages/bai-viet/[slug].js




function _slug_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _slug_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _slug_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const PostDeital = ({
  data
}) => {
  var _data$image, _data$image2;

  if (!data) return /*#__PURE__*/Object(jsx_runtime_["jsx"])(notfound["a" /* default */], {});
  let content = data.content;
  const result = content ? content.replace(/\/uploads\//g, container["b" /* url_base */] + "/uploads/") : "";
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "jsx-3412090669",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("title", {
        className: "jsx-3412090669",
        children: [" ", data.title, " "]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
        rel: "icon",
        href: "/favicon.ico",
        className: "jsx-3412090669"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "jsx-3412090669" + " " + "pb-10 pr-10",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "jsx-3412090669" + " " + "font-bold text-blue-900 text-xl",
        children: data.title
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "jsx-3412090669" + " " + " mt-3",
        children: ["T\xE1c gi\u1EA3:", /*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
          className: "jsx-3412090669" + " " + "ml-3",
          children: "Qu\u1EA3n tr\u1ECB vi\xEAn"
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("code", {
        className: "jsx-3412090669" + " " + "text block mt-3",
        children: Object(helper_function["a" /* localeTime */])(data.createdAt)
      }), ((_data$image = data.image) === null || _data$image === void 0 ? void 0 : _data$image.url) && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "jsx-3412090669" + " " + "spect-w-16 spect-h-9 my-4",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: container["b" /* url_base */] + ((_data$image2 = data.image) === null || _data$image2 === void 0 ? void 0 : _data$image2.url),
          className: "jsx-3412090669"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ReactMarkdown, {
        className: "content-detail",
        children: result
      }), data.file && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "jsx-3412090669" + " " + "mt-5",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          href: container["b" /* url_base */] + data.file.url,
          target: "_blank",
          className: "jsx-3412090669" + " " + "font-medium text-blue-700 text-lg",
          children: "Xem n\u1ED9i dung chi ti\u1EBFt"
        })
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(style_default.a, {
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

  const res = await fetch(container["a" /* url_api */] + "/posts?slug=" + query.slug);
  const data = await res.json();
  return {
    props: {
      data: data[0]
    }
  };
}
/* harmony default export */ var _slug_ = __webpack_exports__["default"] = (PostDeital);

/***/ }),

/***/ "UWo5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);


const NotFound = () => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    className: "px-10",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
      src: "/images/notfound.jpg",
      className: "w-full h-100"
    })
  });
};

/* harmony default export */ __webpack_exports__["a"] = (NotFound);

/***/ }),

/***/ "id0+":
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });