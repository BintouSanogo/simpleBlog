"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts/[id]",{

/***/ "./pages/posts/[id].js":
/*!*****************************!*\
  !*** ./pages/posts/[id].js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar Post = function(param) {\n    var data = param.data;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var id = router.query.id;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"UserId:\",\n                    data.userId\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\binto\\\\Desktop\\\\simpleBlog\\\\pages\\\\posts\\\\[id].js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Title:\",\n                    data.title\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\binto\\\\Desktop\\\\simpleBlog\\\\pages\\\\posts\\\\[id].js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Body:\",\n                    data.body\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\binto\\\\Desktop\\\\simpleBlog\\\\pages\\\\posts\\\\[id].js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\binto\\\\Desktop\\\\simpleBlog\\\\pages\\\\posts\\\\[id].js\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, _this);\n};\n_s(Post, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Post;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQXdDOztBQThCeEMsSUFBTUMsSUFBSSxHQUFHLGdCQUFjO1FBQVhDLElBQUksU0FBSkEsSUFBSTs7SUFDbEIsSUFBTUMsTUFBTSxHQUFHSCxzREFBUyxFQUFFO0lBQzFCLElBQU0sRUFBSSxHQUFJRyxNQUFNLENBQUNFLEtBQUssQ0FBbEJELEVBQUU7SUFDVixxQkFDRSw4REFBQ0UsS0FBRzs7MEJBQ0YsOERBQUNDLElBQUU7O29CQUFDLFNBQU87b0JBQUNMLElBQUksQ0FBQ00sTUFBTTs7Ozs7O3FCQUFNOzBCQUM3Qiw4REFBQ0QsSUFBRTs7b0JBQUMsUUFBTTtvQkFBQ0wsSUFBSSxDQUFDTyxLQUFLOzs7Ozs7cUJBQU07MEJBQzNCLDhEQUFDQyxHQUFDOztvQkFBQyxPQUFLO29CQUFDUixJQUFJLENBQUNTLElBQUk7Ozs7OztxQkFBSzs7Ozs7O2FBQ25CLENBQ1A7Q0FDRjtHQVZLVixJQUFJOztRQUNPRCxrREFBUzs7O0FBRHBCQyxLQUFBQSxJQUFJOztBQVdWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvW2lkXS5qcz83OTY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBhcGkgfSBmcm9tIFwiLi4vLi4vYXBpL3Bvc3RBcGlcIjtcclxuXHJcbi8vZ2V0U3RhdGljc3BhdGhzXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXMgPSBhcGkuZ2V0KFwiL3Bvc3RzXCIpO1xyXG4gIGNvbnN0IGRhdGEgPSAoYXdhaXQgcmVzKS5kYXRhO1xyXG5cclxuICBjb25zdCBwYXRocyA9IGRhdGEubWFwKChpdGVtKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwYXJhbXM6IHsgaWQ6IGl0ZW0uaWQudG9TdHJpbmcoKSB9LFxyXG4gICAgfTtcclxuICB9KTtcclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHMsXHJcbiAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgfTtcclxufTtcclxuXHJcbi8vZ2V0U3RhdGljc1Byb3BzXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbiAgY29uc3QgaWQgPSBjb250ZXh0LnBhcmFtcy5pZDtcclxuXHJcbiAgY29uc3QgcmVzID0gYXdhaXQgYXBpLmdldChcImh0dHA6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzL1wiICsgaWQpO1xyXG4gIGNvbnN0IGRhdGEgPSByZXMuZGF0YTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IGRhdGEgfSxcclxuICB9O1xyXG59O1xyXG5jb25zdCBQb3N0ID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBpZH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgcmV0dXJuKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPlVzZXJJZDp7ZGF0YS51c2VySWR9PC9oMT5cclxuICAgICAgPGgxPlRpdGxlOntkYXRhLnRpdGxlfTwvaDE+XHJcbiAgICAgIDxwPkJvZHk6e2RhdGEuYm9keX08L3A+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XHJcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJQb3N0IiwiZGF0YSIsInJvdXRlciIsImlkIiwicXVlcnkiLCJkaXYiLCJoMSIsInVzZXJJZCIsInRpdGxlIiwicCIsImJvZHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/posts/[id].js\n"));

/***/ })

});