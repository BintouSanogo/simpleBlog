"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/posts/[id]";
exports.ids = ["pages/posts/[id]"];
exports.modules = {

/***/ "./api/postApi.js":
/*!************************!*\
  !*** ./api/postApi.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"api\": () => (/* binding */ api)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    baseURL: \"http://jsonplaceholder.typicode.com\"\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGkvcG9zdEFwaS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEI7QUFFbkIsTUFBTUMsR0FBRyxHQUFHRCxtREFBWSxDQUFDO0lBQzlCRyxPQUFPLEVBQUUscUNBQXFDO0NBQy9DLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NpbXBsZWJsb2cvLi9hcGkvcG9zdEFwaS5qcz80ODk2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhcGkgPSBheGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6IFwiaHR0cDovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb21cIixcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsImFwaSIsImNyZWF0ZSIsImJhc2VVUkwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./api/postApi.js\n");

/***/ }),

/***/ "./pages/posts/[id].js":
/*!*****************************!*\
  !*** ./pages/posts/[id].js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_postApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/postApi */ \"./api/postApi.js\");\n\n\n\n//getStaticspaths\nconst getStaticPaths = async ()=>{\n    const res = _api_postApi__WEBPACK_IMPORTED_MODULE_2__.api.get(\"/posts\");\n    const data = (await res).data;\n    const paths = data.map((item)=>{\n        return {\n            params: {\n                id: item.id.toString()\n            }\n        };\n    });\n    return {\n        paths,\n        fallback: false\n    };\n};\n//getStaticsProps\nconst getStaticProps = async (context)=>{\n    const id = context.params.id;\n    const res = await _api_postApi__WEBPACK_IMPORTED_MODULE_2__.api.get(\"http://jsonplaceholder.typicode.com/posts/\" + id);\n    const data = res.data;\n    return {\n        props: {\n            data\n        }\n    };\n};\nconst Post = ({ data  })=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { id  } = router.query;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Id:\",\n                    data.id\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\binto\\\\Desktop\\\\simpleBlog\\\\pages\\\\posts\\\\[id].js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Title:\",\n                    data.title\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\binto\\\\Desktop\\\\simpleBlog\\\\pages\\\\posts\\\\[id].js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Body:\",\n                    data.body\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\binto\\\\Desktop\\\\simpleBlog\\\\pages\\\\posts\\\\[id].js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\binto\\\\Desktop\\\\simpleBlog\\\\pages\\\\posts\\\\[id].js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBd0M7QUFDQTtBQUV4QyxpQkFBaUI7QUFDVixNQUFNRSxjQUFjLEdBQUcsVUFBWTtJQUN4QyxNQUFNQyxHQUFHLEdBQUdGLGlEQUFPLENBQUMsUUFBUSxDQUFDO0lBQzdCLE1BQU1JLElBQUksR0FBRyxDQUFDLE1BQU1GLEdBQUcsQ0FBQyxDQUFDRSxJQUFJO0lBRTdCLE1BQU1DLEtBQUssR0FBR0QsSUFBSSxDQUFDRSxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxHQUFLO1FBQy9CLE9BQU87WUFDTEMsTUFBTSxFQUFFO2dCQUFFQyxFQUFFLEVBQUVGLElBQUksQ0FBQ0UsRUFBRSxDQUFDQyxRQUFRLEVBQUU7YUFBRTtTQUNuQyxDQUFDO0tBQ0gsQ0FBQztJQUNGLE9BQU87UUFDTEwsS0FBSztRQUNMTSxRQUFRLEVBQUUsS0FBSztLQUNoQixDQUFDO0NBQ0gsQ0FBQztBQUVGLGlCQUFpQjtBQUNWLE1BQU1DLGNBQWMsR0FBRyxPQUFPQyxPQUFPLEdBQUs7SUFDL0MsTUFBTUosRUFBRSxHQUFHSSxPQUFPLENBQUNMLE1BQU0sQ0FBQ0MsRUFBRTtJQUU1QixNQUFNUCxHQUFHLEdBQUcsTUFBTUYsaURBQU8sQ0FBQyw0Q0FBNEMsR0FBR1MsRUFBRSxDQUFDO0lBQzVFLE1BQU1MLElBQUksR0FBR0YsR0FBRyxDQUFDRSxJQUFJO0lBRXJCLE9BQU87UUFDTFUsS0FBSyxFQUFFO1lBQUVWLElBQUk7U0FBRTtLQUNoQixDQUFDO0NBQ0gsQ0FBQztBQUdGLE1BQU1XLElBQUksR0FBRyxDQUFDLEVBQUVYLElBQUksR0FBRSxHQUFLO0lBQ3pCLE1BQU1ZLE1BQU0sR0FBR2pCLHNEQUFTLEVBQUU7SUFDMUIsTUFBTSxFQUFFVSxFQUFFLEdBQUMsR0FBR08sTUFBTSxDQUFDQyxLQUFLO0lBQzFCLHFCQUNFLDhEQUFDQyxLQUFHOzswQkFDRiw4REFBQ0MsSUFBRTs7b0JBQUMsS0FBRztvQkFBQ2YsSUFBSSxDQUFDSyxFQUFFOzs7Ozs7eUJBQU07MEJBQ3JCLDhEQUFDVSxJQUFFOztvQkFBQyxRQUFNO29CQUFDZixJQUFJLENBQUNnQixLQUFLOzs7Ozs7eUJBQU07MEJBQzNCLDhEQUFDQyxHQUFDOztvQkFBQyxPQUFLO29CQUFDakIsSUFBSSxDQUFDa0IsSUFBSTs7Ozs7O3lCQUFLOzs7Ozs7aUJBQ25CLENBQ1A7Q0FDRjtBQUNELGlFQUFlUCxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaW1wbGVibG9nLy4vcGFnZXMvcG9zdHMvW2lkXS5qcz83OTY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBhcGkgfSBmcm9tIFwiLi4vLi4vYXBpL3Bvc3RBcGlcIjtcclxuXHJcbi8vZ2V0U3RhdGljc3BhdGhzXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXMgPSBhcGkuZ2V0KFwiL3Bvc3RzXCIpO1xyXG4gIGNvbnN0IGRhdGEgPSAoYXdhaXQgcmVzKS5kYXRhO1xyXG5cclxuICBjb25zdCBwYXRocyA9IGRhdGEubWFwKChpdGVtKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwYXJhbXM6IHsgaWQ6IGl0ZW0uaWQudG9TdHJpbmcoKSB9LFxyXG4gICAgfTtcclxuICB9KTtcclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHMsXHJcbiAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgfTtcclxufTtcclxuXHJcbi8vZ2V0U3RhdGljc1Byb3BzXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbiAgY29uc3QgaWQgPSBjb250ZXh0LnBhcmFtcy5pZDtcclxuXHJcbiAgY29uc3QgcmVzID0gYXdhaXQgYXBpLmdldChcImh0dHA6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzL1wiICsgaWQpO1xyXG4gIGNvbnN0IGRhdGEgPSByZXMuZGF0YTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IGRhdGEgfSxcclxuICB9O1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IFBvc3QgPSAoeyBkYXRhIH0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGlkfSA9IHJvdXRlci5xdWVyeTtcclxuICByZXR1cm4oXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDE+SWQ6e2RhdGEuaWR9PC9oMT5cclxuICAgICAgPGgxPlRpdGxlOntkYXRhLnRpdGxlfTwvaDE+XHJcbiAgICAgIDxwPkJvZHk6e2RhdGEuYm9keX08L3A+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XHJcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJhcGkiLCJnZXRTdGF0aWNQYXRocyIsInJlcyIsImdldCIsImRhdGEiLCJwYXRocyIsIm1hcCIsIml0ZW0iLCJwYXJhbXMiLCJpZCIsInRvU3RyaW5nIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJwcm9wcyIsIlBvc3QiLCJyb3V0ZXIiLCJxdWVyeSIsImRpdiIsImgxIiwidGl0bGUiLCJwIiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/posts/[id].js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/posts/[id].js"));
module.exports = __webpack_exports__;

})();