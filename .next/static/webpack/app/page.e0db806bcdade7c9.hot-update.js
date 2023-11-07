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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PayloadMessage: function() { return /* binding */ PayloadMessage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_actions_signTokenAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/actions/signTokenAction */ \"(app-pages-browser)/./app/actions/signTokenAction.ts\");\n/* harmony import */ var _app_actions_verifyTokenAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/actions/verifyTokenAction */ \"(app-pages-browser)/./app/actions/verifyTokenAction.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ PayloadMessage auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst PayloadMessage = ()=>{\n    _s();\n    const [payload, setPayload] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [signedToken, setSignedToken] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [verifiedPayload, setVerifiedPayload] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-5xl w-full flex flex-col items-center justify-center gap-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: \"w-full h-12 px-6 text-lg bg-slate-200 text-gray-800 placeholder-gray-500 border rounded-lg focus:shadow-outline\",\n                placeholder: \"Payload...\",\n                onChange: (e)=>{\n                    if (e.target.value === null) {\n                        return;\n                    }\n                    setPayload(e.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"/Users/mustafaabdelazim/Repos/next_14_test/app/components/PayloadMessage/index.tsx\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row items-center justify-center gap-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"w-24 h-12 px-6 text-lg bg-slate-200 text-gray-800 border rounded-lg focus:shadow-outline\",\n                        onClick: (e)=>{\n                            e.preventDefault();\n                            (async ()=>{\n                                const signed = await (0,_app_actions_signTokenAction__WEBPACK_IMPORTED_MODULE_1__.signTokenAction)(payload);\n                                setSignedToken(signed);\n                            })();\n                        },\n                        children: \"Sign\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mustafaabdelazim/Repos/next_14_test/app/components/PayloadMessage/index.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"w-24 h-12 px-6 text-lg bg-slate-200 text-gray-800 border rounded-lg focus:shadow-outline\",\n                        onClick: (e)=>{\n                            e.preventDefault();\n                            (async ()=>{\n                                const verifiedPayload = await (0,_app_actions_verifyTokenAction__WEBPACK_IMPORTED_MODULE_2__.verifyTokenAction)(signedToken);\n                                setVerifiedPayload(verifiedPayload);\n                            })();\n                        },\n                        children: \"Verify\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mustafaabdelazim/Repos/next_14_test/app/components/PayloadMessage/index.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mustafaabdelazim/Repos/next_14_test/app/components/PayloadMessage/index.tsx\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, undefined),\n            signedToken ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row items-center justify-center gap-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-500 text-xs italic\",\n                        children: \"Token\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mustafaabdelazim/Repos/next_14_test/app/components/PayloadMessage/index.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-500 text-xs italic\",\n                        children: payload\n                    }, void 0, false, {\n                        fileName: \"/Users/mustafaabdelazim/Repos/next_14_test/app/components/PayloadMessage/index.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mustafaabdelazim/Repos/next_14_test/app/components/PayloadMessage/index.tsx\",\n                lineNumber: 49,\n                columnNumber: 17\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full h-4\"\n            }, void 0, false, {\n                fileName: \"/Users/mustafaabdelazim/Repos/next_14_test/app/components/PayloadMessage/index.tsx\",\n                lineNumber: 52,\n                columnNumber: 26\n            }, undefined),\n            verifiedPayload ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row items-center justify-center gap-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-500 text-xs italic\",\n                        children: \"Verified Payload\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mustafaabdelazim/Repos/next_14_test/app/components/PayloadMessage/index.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-500 text-xs italic break-all\",\n                        children: (()=>{\n                            const _payload = verifiedPayload.iat !== undefined ? verifiedPayload : null;\n                            if (!_payload) {\n                                return \"invalid payload\";\n                            }\n                            const date = new Date(_payload.exp * 1000);\n                            return \"\".concat(_payload === null || _payload === void 0 ? void 0 : _payload.payload, \"\\n\").concat(date.toLocaleString());\n                        })()\n                    }, void 0, false, {\n                        fileName: \"/Users/mustafaabdelazim/Repos/next_14_test/app/components/PayloadMessage/index.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mustafaabdelazim/Repos/next_14_test/app/components/PayloadMessage/index.tsx\",\n                lineNumber: 55,\n                columnNumber: 17\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full h-4\"\n            }, void 0, false, {\n                fileName: \"/Users/mustafaabdelazim/Repos/next_14_test/app/components/PayloadMessage/index.tsx\",\n                lineNumber: 65,\n                columnNumber: 26\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mustafaabdelazim/Repos/next_14_test/app/components/PayloadMessage/index.tsx\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, undefined);\n};\n_s(PayloadMessage, \"DFcdqqfePlIKKvbDAs1pX8nYf/Y=\");\n_c = PayloadMessage;\nvar _c;\n$RefreshReg$(_c, \"PayloadMessage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1BheWxvYWRNZXNzYWdlL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVnRTtBQUNJO0FBRTVCO0FBRWpDLE1BQU1JLGlCQUFpQjs7SUFDMUIsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdILCtDQUFRQSxDQUFnQjtJQUN0RCxNQUFNLENBQUNJLGFBQWFDLGVBQWUsR0FBR0wsK0NBQVFBLENBQWdCO0lBQzlELE1BQU0sQ0FBQ00saUJBQWlCQyxtQkFBbUIsR0FBR1AsK0NBQVFBO0lBQ3RELHFCQUNJLDhEQUFDUTtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0M7Z0JBQU1ELFdBQVU7Z0JBQWtIRSxhQUFZO2dCQUMvSUMsVUFBV0MsQ0FBQUE7b0JBQ1AsSUFBR0EsRUFBRUMsTUFBTSxDQUFDQyxLQUFLLEtBQUssTUFBSzt3QkFDdkI7b0JBQ0o7b0JBQ0FaLFdBQVdVLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztnQkFDN0I7Ozs7OzswQkFDQSw4REFBQ1A7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDTzt3QkFBT1AsV0FBVTt3QkFDbEJRLFNBQ0ksQ0FBQ0o7NEJBQ0dBLEVBQUVLLGNBQWM7NEJBQ2Y7Z0NBQ0csTUFBTUMsU0FBUyxNQUFNdEIsNkVBQWVBLENBQUNLO2dDQUNyQ0csZUFBZWM7NEJBQ25CO3dCQUVKO2tDQUNGOzs7Ozs7a0NBR0YsOERBQUNIO3dCQUFPUCxXQUFVO3dCQUNsQlEsU0FDSSxDQUFDSjs0QkFDR0EsRUFBRUssY0FBYzs0QkFDZjtnQ0FDRyxNQUFNWixrQkFBa0IsTUFBTVIsaUZBQWlCQSxDQUFDTTtnQ0FDaERHLG1CQUFtQkQ7NEJBQ3ZCO3dCQUNKO2tDQUNGOzs7Ozs7Ozs7Ozs7WUFJTEYsNEJBQ0csOERBQUNJO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ1c7d0JBQUVYLFdBQVU7a0NBQStCOzs7Ozs7a0NBQzVDLDhEQUFDVzt3QkFBRVgsV0FBVTtrQ0FBZ0NQOzs7Ozs7Ozs7OzswQ0FDeEMsOERBQUNNO2dCQUFJQyxXQUFVOzs7Ozs7WUFFM0JILGdDQUNHLDhEQUFDRTtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNXO3dCQUFFWCxXQUFVO2tDQUErQjs7Ozs7O2tDQUM1Qyw4REFBQ1c7d0JBQUVYLFdBQVU7a0NBQTBDLENBQUM7NEJBQ3BELE1BQU1ZLFdBQVcsZ0JBQWdDQyxHQUFHLEtBQUtDLFlBQVlqQixrQkFBZ0M7NEJBQ3JHLElBQUcsQ0FBQ2UsVUFBUztnQ0FDVCxPQUFPOzRCQUNYOzRCQUNBLE1BQU1HLE9BQU8sSUFBSUMsS0FBS0osU0FBU0ssR0FBRyxHQUFJOzRCQUN0QyxPQUFPLEdBQXlCRixPQUF0QkgscUJBQUFBLCtCQUFBQSxTQUFVbkIsT0FBTyxFQUFDLE1BQTBCLE9BQXRCc0IsS0FBS0csY0FBYzt3QkFDdkQ7Ozs7Ozs7Ozs7OzBDQUNLLDhEQUFDbkI7Z0JBQUlDLFdBQVU7Ozs7Ozs7Ozs7OztBQUl4QyxFQUFFO0dBN0RXUjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9QYXlsb2FkTWVzc2FnZS9pbmRleC50c3g/MDNhYiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCB7IHNpZ25Ub2tlbkFjdGlvbiB9IGZyb20gJ0AvYXBwL2FjdGlvbnMvc2lnblRva2VuQWN0aW9uJztcbmltcG9ydCB7IHZlcmlmeVRva2VuQWN0aW9uIH0gZnJvbSAnQC9hcHAvYWN0aW9ucy92ZXJpZnlUb2tlbkFjdGlvbic7XG5pbXBvcnQgeyBKd3RQYXlsb2FkIH0gZnJvbSAnanNvbndlYnRva2VuJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IFBheWxvYWRNZXNzYWdlID0gKCk9PntcbiAgICBjb25zdCBbcGF5bG9hZCwgc2V0UGF5bG9hZF0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgICBjb25zdCBbc2lnbmVkVG9rZW4sIHNldFNpZ25lZFRva2VuXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICAgIGNvbnN0IFt2ZXJpZmllZFBheWxvYWQsIHNldFZlcmlmaWVkUGF5bG9hZF0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBKd3RQYXlsb2FkPigpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYXgtdy01eGwgdy1mdWxsIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC04Jz5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0xMiBweC02IHRleHQtbGcgYmctc2xhdGUtMjAwIHRleHQtZ3JheS04MDAgcGxhY2Vob2xkZXItZ3JheS01MDAgYm9yZGVyIHJvdW5kZWQtbGcgZm9jdXM6c2hhZG93LW91dGxpbmVcIiBwbGFjZWhvbGRlcj1cIlBheWxvYWQuLi5cIiBcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZT0+e1xuICAgICAgICAgICAgICAgIGlmKGUudGFyZ2V0LnZhbHVlID09PSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZXRQYXlsb2FkKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgIH0pfS8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTgnPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSd3LTI0IGgtMTIgcHgtNiB0ZXh0LWxnIGJnLXNsYXRlLTIwMCB0ZXh0LWdyYXktODAwIGJvcmRlciByb3VuZGVkLWxnIGZvY3VzOnNoYWRvdy1vdXRsaW5lJ1xuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e1xuICAgICAgICAgICAgICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgKGFzeW5jKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzaWduZWQgPSBhd2FpdCBzaWduVG9rZW5BY3Rpb24ocGF5bG9hZCEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNpZ25lZFRva2VuKHNpZ25lZCEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfT5cbiAgICAgICAgICAgICAgICAgICAgU2lnblxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSd3LTI0IGgtMTIgcHgtNiB0ZXh0LWxnIGJnLXNsYXRlLTIwMCB0ZXh0LWdyYXktODAwIGJvcmRlciByb3VuZGVkLWxnIGZvY3VzOnNoYWRvdy1vdXRsaW5lJ1xuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e1xuICAgICAgICAgICAgICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2ZXJpZmllZFBheWxvYWQgPSBhd2FpdCB2ZXJpZnlUb2tlbkFjdGlvbihzaWduZWRUb2tlbiEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFZlcmlmaWVkUGF5bG9hZCh2ZXJpZmllZFBheWxvYWQhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9PlxuICAgICAgICAgICAgICAgICAgICBWZXJpZnlcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge3NpZ25lZFRva2VuID8gXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtOFwiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIHRleHQteHMgaXRhbGljXCI+VG9rZW48L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDAgdGV4dC14cyBpdGFsaWNcIj57cGF5bG9hZH08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+IDogPGRpdiBjbGFzc05hbWU9J3ctZnVsbCBoLTQnLz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHt2ZXJpZmllZFBheWxvYWQgPyBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC04XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDAgdGV4dC14cyBpdGFsaWNcIj5WZXJpZmllZCBQYXlsb2FkPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIHRleHQteHMgaXRhbGljIGJyZWFrLWFsbFwiPnsoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IF9wYXlsb2FkID0gKHZlcmlmaWVkUGF5bG9hZCBhcyBKd3RQYXlsb2FkKS5pYXQgIT09IHVuZGVmaW5lZCA/IHZlcmlmaWVkUGF5bG9hZCBhcyBKd3RQYXlsb2FkIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCFfcGF5bG9hZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdpbnZhbGlkIHBheWxvYWQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKF9wYXlsb2FkLmV4cCEgKiAxMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgJHtfcGF5bG9hZD8ucGF5bG9hZH1cXG4ke2RhdGUudG9Mb2NhbGVTdHJpbmcoKX1gO1xuICAgICAgICAgICAgICAgICAgICB9KSgpfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj4gOiA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIGgtNCcvPlxuICAgICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTsiXSwibmFtZXMiOlsic2lnblRva2VuQWN0aW9uIiwidmVyaWZ5VG9rZW5BY3Rpb24iLCJSZWFjdCIsInVzZVN0YXRlIiwiUGF5bG9hZE1lc3NhZ2UiLCJwYXlsb2FkIiwic2V0UGF5bG9hZCIsInNpZ25lZFRva2VuIiwic2V0U2lnbmVkVG9rZW4iLCJ2ZXJpZmllZFBheWxvYWQiLCJzZXRWZXJpZmllZFBheWxvYWQiLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJidXR0b24iLCJvbkNsaWNrIiwicHJldmVudERlZmF1bHQiLCJzaWduZWQiLCJwIiwiX3BheWxvYWQiLCJpYXQiLCJ1bmRlZmluZWQiLCJkYXRlIiwiRGF0ZSIsImV4cCIsInRvTG9jYWxlU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/PayloadMessage/index.tsx\n"));

/***/ })

});