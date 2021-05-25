(function() {
var exports = {};
exports.id = 828;
exports.ids = [828];
exports.modules = {

/***/ 8438:
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
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./shared/container/index.js
var container = __webpack_require__(5145);
// EXTERNAL MODULE: ./shared/helper/function.js
var helper_function = __webpack_require__(1473);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./widgets/folders/index.js








const Folders = ({
  folders
}) => {
  const {
    0: active,
    1: setActive
  } = (0,external_react_.useState)(folders[0]);
  const {
    0: temps,
    1: setTemps
  } = (0,external_react_.useState)([]);

  if (temps.length === 0) {
    fetch(container/* url_api */.C + `/temps?folder=` + active._id).then(response => response.json()).then(data => {
      setTemps(data);
    });
  }

  const changeAcitve = item => {
    return () => {
      setActive(item);
      fetch(container/* url_api */.C + `/temps?folder=` + item._id).then(response => response.json()).then(data => {
        setTemps(data);
      });
    };
  };

  if (temps) return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex w-full",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "w-1/3 border-r pr-2",
      children: folders.map(element => /*#__PURE__*/jsx_runtime_.jsx(ItemFolder, {
        value: element,
        active: active._id,
        onClick: changeAcitve(element)
      }, element.id))
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "w-2/3 pl-2",
      children: temps.map(element => /*#__PURE__*/jsx_runtime_.jsx(Item, {
        value: element
      }, element._id))
    })]
  });else return null;
};

const ItemFolder = ({
  value,
  active,
  onClick
}) => {
  const activeClass = active === value._id ? "bg-blue-500 text-white shadow-2xl " : "";
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex items-center hover:shadow-2xl transition duration-300  p-3 rounded-xs transition mt-2 pointer " + activeClass,
    onClick: onClick,
    children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
      src: "/icons/folder.svg",
      alt: "",
      width: 30,
      height: 30
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "text-sm font-bold ml-3",
      children: value.Name
    })]
  });
};

const Item = ({
  value
}) => {
  var _value$file;

  return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
    href: container/* url_base */.I + (value === null || value === void 0 ? void 0 : (_value$file = value.file) === null || _value$file === void 0 ? void 0 : _value$file.url),
    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
      target: "_blank",
      rel: "noreferrer",
      className: "w-full x mt-2 flex flex-initial",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "mr-2 w-full hover:shadow-2xl rounded-md p-4 bg-gray-100 hover:bg-blue-400 hover:scale-95 pointer hover:text-white flex items-align transform duration-500 transition",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "box icon p-2 flex items-center",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "bg-gray-100 rounded-md text-white h-10 w-10 flex items-center justify-center",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/icons/folder.svg",
              alt: "",
              width: 30,
              height: 30
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "font-bold mx-3 flex flex-col justify-center\t flex-1",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "text-sm ",
            children: value.name
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "text-xs font-base ",
            children: (0,helper_function/* localeTime */.C)(value.published_at)
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "ml-auto flex items-center",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "box icon bg-blue-300 rounded-full shadow-xl text-white p-2 h-10 w-10",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/icons/cloud-computing.svg",
              alt: "",
              width: 50,
              height: 50
            })
          })
        })]
      })
    })
  });
};

/* harmony default export */ var folders = (Folders);
;// CONCATENATED MODULE: external "swr"
var external_swr_namespaceObject = require("swr");;
var external_swr_default = /*#__PURE__*/__webpack_require__.n(external_swr_namespaceObject);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: ./widgets/folder/index.js







const fetcher = url => fetch(url).then(res => res.json());



const Folder = ({
  folder
}) => {
  const router = (0,router_.useRouter)();
  const {
    data: temps,
    error
  } = external_swr_default()(container/* url_api */.C + `/temps?folder=` + folder._id, fetcher);
  if (!temps) return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: "Loadding"
  });else return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "mr-6 ",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "title font-bold text-lg",
      children: folder.Name
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "text-xs font-base font-bold mt-1",
      children: [" ", (0,helper_function/* localeTime */.C)(folder.published_at), " "]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex flex-wrap mt-3",
      children: temps.map(element => /*#__PURE__*/jsx_runtime_.jsx(folder_Item, {
        value: element
      }, element.id))
    })]
  });
};

/* harmony default export */ var widgets_folder = (Folder);

const folder_Item = ({
  value
}) => {
  var _value$file;

  return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
    href: container/* url_base */.I + (value === null || value === void 0 ? void 0 : (_value$file = value.file) === null || _value$file === void 0 ? void 0 : _value$file.url),
    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
      target: "_blank",
      rel: "noreferrer",
      className: "lg:w-1/2 flex pr-3 mb-5 flex-initial",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "mr-2 w-full shadow-sm bg-gray-100 rounded-sm p-4 hover:shadow-xl hover:bg-blue-400 hover:scale-95 pointer hover:text-white flex items-align transform duration-500 transition",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "box icon p-2 flex items-center",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "bg-gray-100 rounded-md text-white h-10 w-10 flex items-center justify-center",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/icons/folder.svg",
              alt: "",
              width: 30,
              height: 30
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "font-bold mx-3",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "text-sm ",
            children: value.name
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "text-xs font-light",
            children: "10.20.2020"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "ml-auto flex items-center",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "box icon bg-blue-300 rounded-full shadow-xl text-white p-2 h-10 w-10",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/icons/cloud-computing.svg",
              alt: "",
              width: 50,
              height: 50
            })
          })
        })]
      })
    })
  });
};
;// CONCATENATED MODULE: ./pages/folders/[slug].js



function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const FolderPage = (_ref) => {
  let {
    folder
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["folder"]);

  if (folder === null) {
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "px-10",
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/images/notfound.jpg",
        className: "w-full h-100"
      })
    });
  }

  const content = folder.folders.length > 0 ? /*#__PURE__*/jsx_runtime_.jsx(folders, {
    folders: folder.folders
  }) : /*#__PURE__*/jsx_runtime_.jsx(widgets_folder, {
    folder: folder
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: " Danh s\xE1ch c\u1EA7n t\u1EA3i "
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        href: "/favicon.ico"
      })]
    }), content]
  });
};

async function getServerSideProps(_ref2) {
  let {
    query
  } = _ref2,
      ctx = _objectWithoutProperties(_ref2, ["query"]);

  const res = await fetch("http://103.137.185.86:1337/folders?Slug=" + query.slug);
  const data = await res.json();
  return {
    props: {
      folder: data ? data[0] : null
    }
  };
}
/* harmony default export */ var _slug_ = (FolderPage);

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

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

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

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664], function() { return __webpack_exec__(8438); });
module.exports = __webpack_exports__;

})();