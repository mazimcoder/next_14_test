"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/PayloadMessage/index.tsx":
/*!*************************************************!*\
  !*** ./app/components/PayloadMessage/index.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PayloadMessage: function() { return /* binding */ PayloadMessage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_actions_signTokenAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/actions/signTokenAction */ \"(app-pages-browser)/./app/actions/signTokenAction.ts\");\n/* harmony import */ var _app_actions_verifyTokenAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/actions/verifyTokenAction */ \"(app-pages-browser)/./app/actions/verifyTokenAction.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ PayloadMessage auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst PayloadMessage = ()=>{\n    _s();\n    const [payload, setPayload] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [signedToken, setSignedToken] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [verifiedPayload, setVerifiedPayload] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-5xl w-full flex flex-col items-center justify-center gap-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: \"w-full h-12 px-6 text-lg bg-slate-200 text-gray-800 placeholder-gray-500 border rounded-lg focus:shadow-outline\",\n                placeholder: \"Payload...\",\n                onChange: (e)=>{\n                    if (e.target.value === null) {\n                        return;\n                    }\n                    setPayload(e.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"/Users/mustafaabdelazim/Repos/next_14_test/app/components/PayloadMessage/index.tsx\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row items-center justify-center gap-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"w-24 h-12 px-6 text-lg bg-slate-200 text-gray-800 border rounded-lg focus:shadow-outline\",\n                        onClick: (e)=>{\n                            e.preventDefault();\n                            (async ()=>{\n                                const signed = await (0,_app_actions_signTokenAction__WEBPACK_IMPORTED_MODULE_1__.signTokenAction)(payload);\n                                setSignedToken(signed);\n                            })();\n                        },\n                        children: \"Sign\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mustafaabdelazim/Repos/next_14_test/app/components/PayloadMessage/index.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"w-24 h-12 px-6 text-lg bg-slate-200 text-gray-800 border rounded-lg focus:shadow-outline\",\n                        onClick: (e)=>{\n                            e.preventDefault();\n                            (async ()=>{\n                                const verifiedPayload = await (0,_app_actions_verifyTokenAction__WEBPACK_IMPORTED_MODULE_2__.verifyTokenAction)(signedToken);\n                                setVerifiedPayload(verifiedPayload);\n                            })();\n                        },\n                        children: \"Verify\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mustafaabdelazim/Repos/next_14_test/app/components/PayloadMessage/index.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mustafaabdelazim/Repos/next_14_test/app/components/PayloadMessage/index.tsx\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, undefined),\n            signedToken ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row items-center justify-center gap-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-500 text-xs italic\",\n                        children: \"Token\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mustafaabdelazim/Repos/next_14_test/app/components/PayloadMessage/index.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-500 text-xs italic\",\n                        children: payload\n                    }, void 0, false, {\n                        fileName: \"/Users/mustafaabdelazim/Repos/next_14_test/app/components/PayloadMessage/index.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mustafaabdelazim/Repos/next_14_test/app/components/PayloadMessage/index.tsx\",\n                lineNumber: 49,\n                columnNumber: 17\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full h-4\"\n            }, void 0, false, {\n                fileName: \"/Users/mustafaabdelazim/Repos/next_14_test/app/components/PayloadMessage/index.tsx\",\n                lineNumber: 52,\n                columnNumber: 26\n            }, undefined),\n            verifiedPayload ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row items-center justify-center gap-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-500 text-xs italic\",\n                        children: \"Verified Payload\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mustafaabdelazim/Repos/next_14_test/app/components/PayloadMessage/index.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-500 text-xs italic\",\n                        children: JSON.stringify(verifiedPayload)\n                    }, void 0, false, {\n                        fileName: \"/Users/mustafaabdelazim/Repos/next_14_test/app/components/PayloadMessage/index.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mustafaabdelazim/Repos/next_14_test/app/components/PayloadMessage/index.tsx\",\n                lineNumber: 55,\n                columnNumber: 17\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full h-4\"\n            }, void 0, false, {\n                fileName: \"/Users/mustafaabdelazim/Repos/next_14_test/app/components/PayloadMessage/index.tsx\",\n                lineNumber: 58,\n                columnNumber: 26\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mustafaabdelazim/Repos/next_14_test/app/components/PayloadMessage/index.tsx\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, undefined);\n};\n_s(PayloadMessage, \"DFcdqqfePlIKKvbDAs1pX8nYf/Y=\");\n_c = PayloadMessage;\nvar _c;\n$RefreshReg$(_c, \"PayloadMessage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1BheWxvYWRNZXNzYWdlL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVnRTtBQUNJO0FBRTVCO0FBRWpDLE1BQU1JLGlCQUFpQjs7SUFDMUIsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdILCtDQUFRQSxDQUFnQjtJQUN0RCxNQUFNLENBQUNJLGFBQWFDLGVBQWUsR0FBR0wsK0NBQVFBLENBQWdCO0lBQzlELE1BQU0sQ0FBQ00saUJBQWlCQyxtQkFBbUIsR0FBR1AsK0NBQVFBO0lBQ3RELHFCQUNJLDhEQUFDUTtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0M7Z0JBQU1ELFdBQVU7Z0JBQWtIRSxhQUFZO2dCQUMvSUMsVUFBV0MsQ0FBQUE7b0JBQ1AsSUFBR0EsRUFBRUMsTUFBTSxDQUFDQyxLQUFLLEtBQUssTUFBSzt3QkFDdkI7b0JBQ0o7b0JBQ0FaLFdBQVdVLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztnQkFDN0I7Ozs7OzswQkFDQSw4REFBQ1A7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDTzt3QkFBT1AsV0FBVTt3QkFDbEJRLFNBQ0ksQ0FBQ0o7NEJBQ0dBLEVBQUVLLGNBQWM7NEJBQ2Y7Z0NBQ0csTUFBTUMsU0FBUyxNQUFNdEIsNkVBQWVBLENBQUNLO2dDQUNyQ0csZUFBZWM7NEJBQ25CO3dCQUVKO2tDQUNGOzs7Ozs7a0NBR0YsOERBQUNIO3dCQUFPUCxXQUFVO3dCQUNsQlEsU0FDSSxDQUFDSjs0QkFDR0EsRUFBRUssY0FBYzs0QkFDZjtnQ0FDRyxNQUFNWixrQkFBa0IsTUFBTVIsaUZBQWlCQSxDQUFDTTtnQ0FDaERHLG1CQUFtQkQ7NEJBQ3ZCO3dCQUNKO2tDQUNGOzs7Ozs7Ozs7Ozs7WUFJTEYsNEJBQ0csOERBQUNJO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ1c7d0JBQUVYLFdBQVU7a0NBQStCOzs7Ozs7a0NBQzVDLDhEQUFDVzt3QkFBRVgsV0FBVTtrQ0FBZ0NQOzs7Ozs7Ozs7OzswQ0FDeEMsOERBQUNNO2dCQUFJQyxXQUFVOzs7Ozs7WUFFM0JILGdDQUNHLDhEQUFDRTtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNXO3dCQUFFWCxXQUFVO2tDQUErQjs7Ozs7O2tDQUM1Qyw4REFBQ1c7d0JBQUVYLFdBQVU7a0NBQWdDWSxLQUFLQyxTQUFTLENBQUNoQjs7Ozs7Ozs7Ozs7MENBQ3ZELDhEQUFDRTtnQkFBSUMsV0FBVTs7Ozs7Ozs7Ozs7O0FBSXhDLEVBQUU7R0F0RFdSO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL1BheWxvYWRNZXNzYWdlL2luZGV4LnRzeD8wM2FiIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IHsgc2lnblRva2VuQWN0aW9uIH0gZnJvbSAnQC9hcHAvYWN0aW9ucy9zaWduVG9rZW5BY3Rpb24nO1xuaW1wb3J0IHsgdmVyaWZ5VG9rZW5BY3Rpb24gfSBmcm9tICdAL2FwcC9hY3Rpb25zL3ZlcmlmeVRva2VuQWN0aW9uJztcbmltcG9ydCB7IEp3dFBheWxvYWQgfSBmcm9tICdqc29ud2VidG9rZW4nO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY29uc3QgUGF5bG9hZE1lc3NhZ2UgPSAoKT0+e1xuICAgIGNvbnN0IFtwYXlsb2FkLCBzZXRQYXlsb2FkXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICAgIGNvbnN0IFtzaWduZWRUb2tlbiwgc2V0U2lnbmVkVG9rZW5dID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gICAgY29uc3QgW3ZlcmlmaWVkUGF5bG9hZCwgc2V0VmVyaWZpZWRQYXlsb2FkXSA9IHVzZVN0YXRlPHN0cmluZyB8IEp3dFBheWxvYWQ+KCk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21heC13LTV4bCB3LWZ1bGwgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTgnPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInctZnVsbCBoLTEyIHB4LTYgdGV4dC1sZyBiZy1zbGF0ZS0yMDAgdGV4dC1ncmF5LTgwMCBwbGFjZWhvbGRlci1ncmF5LTUwMCBib3JkZXIgcm91bmRlZC1sZyBmb2N1czpzaGFkb3ctb3V0bGluZVwiIHBsYWNlaG9sZGVyPVwiUGF5bG9hZC4uLlwiIFxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlPT57XG4gICAgICAgICAgICAgICAgaWYoZS50YXJnZXQudmFsdWUgPT09IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNldFBheWxvYWQoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgfSl9Lz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtOCc+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3ctMjQgaC0xMiBweC02IHRleHQtbGcgYmctc2xhdGUtMjAwIHRleHQtZ3JheS04MDAgYm9yZGVyIHJvdW5kZWQtbGcgZm9jdXM6c2hhZG93LW91dGxpbmUnXG4gICAgICAgICAgICAgICAgb25DbGljaz17XG4gICAgICAgICAgICAgICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAoYXN5bmMoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpZ25lZCA9IGF3YWl0IHNpZ25Ub2tlbkFjdGlvbihwYXlsb2FkISk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2lnbmVkVG9rZW4oc2lnbmVkISk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9PlxuICAgICAgICAgICAgICAgICAgICBTaWduXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3ctMjQgaC0xMiBweC02IHRleHQtbGcgYmctc2xhdGUtMjAwIHRleHQtZ3JheS04MDAgYm9yZGVyIHJvdW5kZWQtbGcgZm9jdXM6c2hhZG93LW91dGxpbmUnXG4gICAgICAgICAgICAgICAgb25DbGljaz17XG4gICAgICAgICAgICAgICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZlcmlmaWVkUGF5bG9hZCA9IGF3YWl0IHZlcmlmeVRva2VuQWN0aW9uKHNpZ25lZFRva2VuISk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmVyaWZpZWRQYXlsb2FkKHZlcmlmaWVkUGF5bG9hZCEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0+XG4gICAgICAgICAgICAgICAgICAgIFZlcmlmeVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7c2lnbmVkVG9rZW4gPyBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC04XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDAgdGV4dC14cyBpdGFsaWNcIj5Ub2tlbjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCB0ZXh0LXhzIGl0YWxpY1wiPntwYXlsb2FkfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj4gOiA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIGgtNCcvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAge3ZlcmlmaWVkUGF5bG9hZCA/IFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLThcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCB0ZXh0LXhzIGl0YWxpY1wiPlZlcmlmaWVkIFBheWxvYWQ8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDAgdGV4dC14cyBpdGFsaWNcIj57SlNPTi5zdHJpbmdpZnkodmVyaWZpZWRQYXlsb2FkISl9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PiA6IDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwgaC00Jy8+XG4gICAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59OyJdLCJuYW1lcyI6WyJzaWduVG9rZW5BY3Rpb24iLCJ2ZXJpZnlUb2tlbkFjdGlvbiIsIlJlYWN0IiwidXNlU3RhdGUiLCJQYXlsb2FkTWVzc2FnZSIsInBheWxvYWQiLCJzZXRQYXlsb2FkIiwic2lnbmVkVG9rZW4iLCJzZXRTaWduZWRUb2tlbiIsInZlcmlmaWVkUGF5bG9hZCIsInNldFZlcmlmaWVkUGF5bG9hZCIsImRpdiIsImNsYXNzTmFtZSIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwcmV2ZW50RGVmYXVsdCIsInNpZ25lZCIsInAiLCJKU09OIiwic3RyaW5naWZ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/PayloadMessage/index.tsx\n"));

/***/ })

});