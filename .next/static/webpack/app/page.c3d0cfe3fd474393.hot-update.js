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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PayloadMessage: function() { return /* binding */ PayloadMessage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_actions_signTokenAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/actions/signTokenAction */ \"(app-pages-browser)/./app/actions/signTokenAction.ts\");\n/* harmony import */ var _app_actions_verifyTokenAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/actions/verifyTokenAction */ \"(app-pages-browser)/./app/actions/verifyTokenAction.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ PayloadMessage auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst PayloadMessage = ()=>{\n    _s();\n    const [payload, setPayload] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [signedToken, setSignedToken] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [verifiedPayload, setVerifiedPayload] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-5xl w-full flex flex-col items-center justify-center gap-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: \"w-full h-12 px-6 text-lg bg-slate-200 text-gray-800 placeholder-gray-500 border rounded-lg focus:shadow-outline\",\n                placeholder: \"Payload...\",\n                onChange: (e)=>{\n                    if (e.target.value === null) {\n                        return;\n                    }\n                    setPayload(e.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"/Users/mustafaabdelazim/Repos/next_14_test/app/components/PayloadMessage/index.tsx\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row items-center justify-center gap-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"w-24 h-12 px-6 text-lg bg-slate-200 text-gray-800 border rounded-lg focus:shadow-outline\",\n                        onClick: (e)=>{\n                            e.preventDefault();\n                            (async ()=>{\n                                const signed = await (0,_app_actions_signTokenAction__WEBPACK_IMPORTED_MODULE_1__.signTokenAction)(payload);\n                                setSignedToken(signed);\n                            })();\n                        },\n                        children: \"Sign\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mustafaabdelazim/Repos/next_14_test/app/components/PayloadMessage/index.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"w-24 h-12 px-6 text-lg bg-slate-200 text-gray-800 border rounded-lg focus:shadow-outline\",\n                        onClick: (e)=>{\n                            e.preventDefault();\n                            (async ()=>{\n                                const verifiedPayload = await (0,_app_actions_verifyTokenAction__WEBPACK_IMPORTED_MODULE_2__.verifyTokenAction)(signedToken);\n                                setVerifiedPayload(verifiedPayload);\n                            })();\n                        },\n                        children: \"Verify\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mustafaabdelazim/Repos/next_14_test/app/components/PayloadMessage/index.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mustafaabdelazim/Repos/next_14_test/app/components/PayloadMessage/index.tsx\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, undefined),\n            signedToken ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row items-center justify-center gap-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-500 text-xs italic\",\n                        children: \"Token\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mustafaabdelazim/Repos/next_14_test/app/components/PayloadMessage/index.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-500 text-xs italic\",\n                        children: payload\n                    }, void 0, false, {\n                        fileName: \"/Users/mustafaabdelazim/Repos/next_14_test/app/components/PayloadMessage/index.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mustafaabdelazim/Repos/next_14_test/app/components/PayloadMessage/index.tsx\",\n                lineNumber: 49,\n                columnNumber: 17\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full h-4\"\n            }, void 0, false, {\n                fileName: \"/Users/mustafaabdelazim/Repos/next_14_test/app/components/PayloadMessage/index.tsx\",\n                lineNumber: 52,\n                columnNumber: 26\n            }, undefined),\n            verifiedPayload ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row items-center justify-center gap-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-500 text-xs italic\",\n                        children: \"Verified Payload\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mustafaabdelazim/Repos/next_14_test/app/components/PayloadMessage/index.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-500 text-xs italic\",\n                        children: (()=>{\n                            const _payload = verifiedPayload.iat !== undefined ? verifiedPayload : null;\n                            if (!_payload) {\n                                return \"invalid payload\";\n                            }\n                            const date = new Date(_payload.exp * 1000);\n                            return \"\".concat(verifiedPayload, \" - \").concat(date.toLocaleString());\n                        })()\n                    }, void 0, false, {\n                        fileName: \"/Users/mustafaabdelazim/Repos/next_14_test/app/components/PayloadMessage/index.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mustafaabdelazim/Repos/next_14_test/app/components/PayloadMessage/index.tsx\",\n                lineNumber: 55,\n                columnNumber: 17\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full h-4\"\n            }, void 0, false, {\n                fileName: \"/Users/mustafaabdelazim/Repos/next_14_test/app/components/PayloadMessage/index.tsx\",\n                lineNumber: 65,\n                columnNumber: 26\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mustafaabdelazim/Repos/next_14_test/app/components/PayloadMessage/index.tsx\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, undefined);\n};\n_s(PayloadMessage, \"DFcdqqfePlIKKvbDAs1pX8nYf/Y=\");\n_c = PayloadMessage;\nvar _c;\n$RefreshReg$(_c, \"PayloadMessage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1BheWxvYWRNZXNzYWdlL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVnRTtBQUNJO0FBRTVCO0FBRWpDLE1BQU1JLGlCQUFpQjs7SUFDMUIsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdILCtDQUFRQSxDQUFnQjtJQUN0RCxNQUFNLENBQUNJLGFBQWFDLGVBQWUsR0FBR0wsK0NBQVFBLENBQWdCO0lBQzlELE1BQU0sQ0FBQ00saUJBQWlCQyxtQkFBbUIsR0FBR1AsK0NBQVFBO0lBQ3RELHFCQUNJLDhEQUFDUTtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0M7Z0JBQU1ELFdBQVU7Z0JBQWtIRSxhQUFZO2dCQUMvSUMsVUFBV0MsQ0FBQUE7b0JBQ1AsSUFBR0EsRUFBRUMsTUFBTSxDQUFDQyxLQUFLLEtBQUssTUFBSzt3QkFDdkI7b0JBQ0o7b0JBQ0FaLFdBQVdVLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztnQkFDN0I7Ozs7OzswQkFDQSw4REFBQ1A7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDTzt3QkFBT1AsV0FBVTt3QkFDbEJRLFNBQ0ksQ0FBQ0o7NEJBQ0dBLEVBQUVLLGNBQWM7NEJBQ2Y7Z0NBQ0csTUFBTUMsU0FBUyxNQUFNdEIsNkVBQWVBLENBQUNLO2dDQUNyQ0csZUFBZWM7NEJBQ25CO3dCQUVKO2tDQUNGOzs7Ozs7a0NBR0YsOERBQUNIO3dCQUFPUCxXQUFVO3dCQUNsQlEsU0FDSSxDQUFDSjs0QkFDR0EsRUFBRUssY0FBYzs0QkFDZjtnQ0FDRyxNQUFNWixrQkFBa0IsTUFBTVIsaUZBQWlCQSxDQUFDTTtnQ0FDaERHLG1CQUFtQkQ7NEJBQ3ZCO3dCQUNKO2tDQUNGOzs7Ozs7Ozs7Ozs7WUFJTEYsNEJBQ0csOERBQUNJO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ1c7d0JBQUVYLFdBQVU7a0NBQStCOzs7Ozs7a0NBQzVDLDhEQUFDVzt3QkFBRVgsV0FBVTtrQ0FBZ0NQOzs7Ozs7Ozs7OzswQ0FDeEMsOERBQUNNO2dCQUFJQyxXQUFVOzs7Ozs7WUFFM0JILGdDQUNHLDhEQUFDRTtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNXO3dCQUFFWCxXQUFVO2tDQUErQjs7Ozs7O2tDQUM1Qyw4REFBQ1c7d0JBQUVYLFdBQVU7a0NBQWdDLENBQUM7NEJBQzFDLE1BQU1ZLFdBQVcsZ0JBQWdDQyxHQUFHLEtBQUtDLFlBQVlqQixrQkFBZ0M7NEJBQ3JHLElBQUcsQ0FBQ2UsVUFBUztnQ0FDVCxPQUFPOzRCQUNYOzRCQUNBLE1BQU1HLE9BQU8sSUFBSUMsS0FBS0osU0FBU0ssR0FBRyxHQUFJOzRCQUN0QyxPQUFPLEdBQXdCRixPQUFyQmxCLGlCQUFnQixPQUEyQixPQUF0QmtCLEtBQUtHLGNBQWM7d0JBQ3REOzs7Ozs7Ozs7OzswQ0FDSyw4REFBQ25CO2dCQUFJQyxXQUFVOzs7Ozs7Ozs7Ozs7QUFJeEMsRUFBRTtHQTdEV1I7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvUGF5bG9hZE1lc3NhZ2UvaW5kZXgudHN4PzAzYWIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgeyBzaWduVG9rZW5BY3Rpb24gfSBmcm9tICdAL2FwcC9hY3Rpb25zL3NpZ25Ub2tlbkFjdGlvbic7XG5pbXBvcnQgeyB2ZXJpZnlUb2tlbkFjdGlvbiB9IGZyb20gJ0AvYXBwL2FjdGlvbnMvdmVyaWZ5VG9rZW5BY3Rpb24nO1xuaW1wb3J0IHsgSnd0UGF5bG9hZCB9IGZyb20gJ2pzb253ZWJ0b2tlbic7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBQYXlsb2FkTWVzc2FnZSA9ICgpPT57XG4gICAgY29uc3QgW3BheWxvYWQsIHNldFBheWxvYWRdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gICAgY29uc3QgW3NpZ25lZFRva2VuLCBzZXRTaWduZWRUb2tlbl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgICBjb25zdCBbdmVyaWZpZWRQYXlsb2FkLCBzZXRWZXJpZmllZFBheWxvYWRdID0gdXNlU3RhdGU8c3RyaW5nIHwgSnd0UGF5bG9hZD4oKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWF4LXctNXhsIHctZnVsbCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtOCc+XG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwidy1mdWxsIGgtMTIgcHgtNiB0ZXh0LWxnIGJnLXNsYXRlLTIwMCB0ZXh0LWdyYXktODAwIHBsYWNlaG9sZGVyLWdyYXktNTAwIGJvcmRlciByb3VuZGVkLWxnIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCIgcGxhY2Vob2xkZXI9XCJQYXlsb2FkLi4uXCIgXG4gICAgICAgICAgICBvbkNoYW5nZT17KGU9PntcbiAgICAgICAgICAgICAgICBpZihlLnRhcmdldC52YWx1ZSA9PT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2V0UGF5bG9hZChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICB9KX0vPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC04Jz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ndy0yNCBoLTEyIHB4LTYgdGV4dC1sZyBiZy1zbGF0ZS0yMDAgdGV4dC1ncmF5LTgwMCBib3JkZXIgcm91bmRlZC1sZyBmb2N1czpzaGFkb3ctb3V0bGluZSdcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtcbiAgICAgICAgICAgICAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIChhc3luYygpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2lnbmVkID0gYXdhaXQgc2lnblRva2VuQWN0aW9uKHBheWxvYWQhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTaWduZWRUb2tlbihzaWduZWQhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0+XG4gICAgICAgICAgICAgICAgICAgIFNpZ25cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ndy0yNCBoLTEyIHB4LTYgdGV4dC1sZyBiZy1zbGF0ZS0yMDAgdGV4dC1ncmF5LTgwMCBib3JkZXIgcm91bmRlZC1sZyBmb2N1czpzaGFkb3ctb3V0bGluZSdcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtcbiAgICAgICAgICAgICAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmVyaWZpZWRQYXlsb2FkID0gYXdhaXQgdmVyaWZ5VG9rZW5BY3Rpb24oc2lnbmVkVG9rZW4hKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRWZXJpZmllZFBheWxvYWQodmVyaWZpZWRQYXlsb2FkISk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfT5cbiAgICAgICAgICAgICAgICAgICAgVmVyaWZ5XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtzaWduZWRUb2tlbiA/IFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLThcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCB0ZXh0LXhzIGl0YWxpY1wiPlRva2VuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIHRleHQteHMgaXRhbGljXCI+e3BheWxvYWR9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PiA6IDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwgaC00Jy8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7dmVyaWZpZWRQYXlsb2FkID8gXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtOFwiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIHRleHQteHMgaXRhbGljXCI+VmVyaWZpZWQgUGF5bG9hZDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCB0ZXh0LXhzIGl0YWxpY1wiPnsoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IF9wYXlsb2FkID0gKHZlcmlmaWVkUGF5bG9hZCBhcyBKd3RQYXlsb2FkKS5pYXQgIT09IHVuZGVmaW5lZCA/IHZlcmlmaWVkUGF5bG9hZCBhcyBKd3RQYXlsb2FkIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCFfcGF5bG9hZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdpbnZhbGlkIHBheWxvYWQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKF9wYXlsb2FkLmV4cCEgKiAxMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgJHt2ZXJpZmllZFBheWxvYWR9IC0gJHtkYXRlLnRvTG9jYWxlU3RyaW5nKCl9YDtcbiAgICAgICAgICAgICAgICAgICAgfSkoKX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+IDogPGRpdiBjbGFzc05hbWU9J3ctZnVsbCBoLTQnLz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07Il0sIm5hbWVzIjpbInNpZ25Ub2tlbkFjdGlvbiIsInZlcmlmeVRva2VuQWN0aW9uIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIlBheWxvYWRNZXNzYWdlIiwicGF5bG9hZCIsInNldFBheWxvYWQiLCJzaWduZWRUb2tlbiIsInNldFNpZ25lZFRva2VuIiwidmVyaWZpZWRQYXlsb2FkIiwic2V0VmVyaWZpZWRQYXlsb2FkIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiYnV0dG9uIiwib25DbGljayIsInByZXZlbnREZWZhdWx0Iiwic2lnbmVkIiwicCIsIl9wYXlsb2FkIiwiaWF0IiwidW5kZWZpbmVkIiwiZGF0ZSIsIkRhdGUiLCJleHAiLCJ0b0xvY2FsZVN0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/PayloadMessage/index.tsx\n"));

/***/ })

});