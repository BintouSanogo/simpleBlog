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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_postApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/postApi */ \"./api/postApi.js\");\n\n\n\n//getStaticspaths\nconst getStaticPaths = async ()=>{\n    const res = _api_postApi__WEBPACK_IMPORTED_MODULE_2__.api.get(\"/posts\");\n    const data = (await res).data;\n    const paths = data.map((item)=>{\n        return {\n            params: {\n                id: item.id.toString()\n            }\n        };\n    });\n    return {\n        paths,\n        fallback: false\n    };\n};\n//getStaticsProps\nconst getStaticProps = async (context)=>{\n    const id = context.params.id;\n    const res = await _api_postApi__WEBPACK_IMPORTED_MODULE_2__.api.get(\"http://jsonplaceholder.typicode.com/posts/\" + id);\n    const data = res.data;\n    return {\n        props: {\n            data\n        }\n    };\n};\nconst Post = ({ data  })=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { id  } = router.query;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" text-xl pt-6 pl-2 text-center font-serif bg-center border-l-4 border-cyan-500 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"\",\n                children: [\n                    \"Id:\",\n                    data.id\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\binto\\\\simpleBlog\\\\pages\\\\posts\\\\[id].js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"hover:text-cyan-600 mb-8 text-2xl\",\n                children: data.title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\binto\\\\simpleBlog\\\\pages\\\\posts\\\\[id].js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: data.body\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\binto\\\\simpleBlog\\\\pages\\\\posts\\\\[id].js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\binto\\\\simpleBlog\\\\pages\\\\posts\\\\[id].js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBd0M7QUFDQTtBQUV4QyxpQkFBaUI7QUFDVixNQUFNRSxjQUFjLEdBQUcsVUFBWTtJQUN4QyxNQUFNQyxHQUFHLEdBQUdGLGlEQUFPLENBQUMsUUFBUSxDQUFDO0lBQzdCLE1BQU1JLElBQUksR0FBRyxDQUFDLE1BQU1GLEdBQUcsQ0FBQyxDQUFDRSxJQUFJO0lBRTdCLE1BQU1DLEtBQUssR0FBR0QsSUFBSSxDQUFDRSxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxHQUFLO1FBQy9CLE9BQU87WUFDTEMsTUFBTSxFQUFFO2dCQUFFQyxFQUFFLEVBQUVGLElBQUksQ0FBQ0UsRUFBRSxDQUFDQyxRQUFRLEVBQUU7YUFBRTtTQUNuQyxDQUFDO0tBQ0gsQ0FBQztJQUNGLE9BQU87UUFDTEwsS0FBSztRQUNMTSxRQUFRLEVBQUUsS0FBSztLQUNoQixDQUFDO0NBQ0gsQ0FBQztBQUVGLGlCQUFpQjtBQUNWLE1BQU1DLGNBQWMsR0FBRyxPQUFPQyxPQUFPLEdBQUs7SUFDL0MsTUFBTUosRUFBRSxHQUFHSSxPQUFPLENBQUNMLE1BQU0sQ0FBQ0MsRUFBRTtJQUU1QixNQUFNUCxHQUFHLEdBQUcsTUFBTUYsaURBQU8sQ0FBQyw0Q0FBNEMsR0FBR1MsRUFBRSxDQUFDO0lBQzVFLE1BQU1MLElBQUksR0FBR0YsR0FBRyxDQUFDRSxJQUFJO0lBRXJCLE9BQU87UUFDTFUsS0FBSyxFQUFFO1lBQUVWLElBQUk7U0FBRTtLQUNoQixDQUFDO0NBQ0gsQ0FBQztBQUdGLE1BQU1XLElBQUksR0FBRyxDQUFDLEVBQUVYLElBQUksR0FBRSxHQUFLO0lBQ3pCLE1BQU1ZLE1BQU0sR0FBR2pCLHNEQUFTLEVBQUU7SUFDMUIsTUFBTSxFQUFFVSxFQUFFLEdBQUMsR0FBR08sTUFBTSxDQUFDQyxLQUFLO0lBQzFCLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxpRkFBa0Y7OzBCQUMvRiw4REFBQ0MsSUFBRTtnQkFBQ0QsU0FBUyxFQUFDLEVBQUU7O29CQUFDLEtBQUc7b0JBQUNmLElBQUksQ0FBQ0ssRUFBRTs7Ozs7O3lCQUFNOzBCQUNsQyw4REFBQ1csSUFBRTtnQkFBQ0QsU0FBUyxFQUFDLG1DQUFtQzswQkFBR2YsSUFBSSxDQUFDaUIsS0FBSzs7Ozs7eUJBQU07MEJBQ3BFLDhEQUFDQyxHQUFDOzBCQUFFbEIsSUFBSSxDQUFDbUIsSUFBSTs7Ozs7eUJBQUs7Ozs7OztpQkFDZCxDQUNQO0NBQ0Y7QUFDRCxpRUFBZVIsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2ltcGxlYmxvZy8uL3BhZ2VzL3Bvc3RzL1tpZF0uanM/Nzk2NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgYXBpIH0gZnJvbSBcIi4uLy4uL2FwaS9wb3N0QXBpXCI7XHJcblxyXG4vL2dldFN0YXRpY3NwYXRoc1xyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzID0gYXBpLmdldChcIi9wb3N0c1wiKTtcclxuICBjb25zdCBkYXRhID0gKGF3YWl0IHJlcykuZGF0YTtcclxuXHJcbiAgY29uc3QgcGF0aHMgPSBkYXRhLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcGFyYW1zOiB7IGlkOiBpdGVtLmlkLnRvU3RyaW5nKCkgfSxcclxuICAgIH07XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzLFxyXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gIH07XHJcbn07XHJcblxyXG4vL2dldFN0YXRpY3NQcm9wc1xyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IGlkID0gY29udGV4dC5wYXJhbXMuaWQ7XHJcblxyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGFwaS5nZXQoXCJodHRwOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cy9cIiArIGlkKTtcclxuICBjb25zdCBkYXRhID0gcmVzLmRhdGE7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBkYXRhIH0sXHJcbiAgfTtcclxufTtcclxuXHJcblxyXG5jb25zdCBQb3N0ID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBpZH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgcmV0dXJuKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCIgdGV4dC14bCBwdC02IHBsLTIgdGV4dC1jZW50ZXIgZm9udC1zZXJpZiBiZy1jZW50ZXIgIGJvcmRlci1sLTQgYm9yZGVyLWN5YW4tNTAwIFwiPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwiXCI+SWQ6e2RhdGEuaWR9PC9oMT5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtY3lhbi02MDAgbWItOCB0ZXh0LTJ4bFwiID57ZGF0YS50aXRsZX08L2gxPlxyXG4gICAgICA8cD57ZGF0YS5ib2R5fTwvcD5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsImFwaSIsImdldFN0YXRpY1BhdGhzIiwicmVzIiwiZ2V0IiwiZGF0YSIsInBhdGhzIiwibWFwIiwiaXRlbSIsInBhcmFtcyIsImlkIiwidG9TdHJpbmciLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsInByb3BzIiwiUG9zdCIsInJvdXRlciIsInF1ZXJ5IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJ0aXRsZSIsInAiLCJib2R5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/posts/[id].js\n");

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