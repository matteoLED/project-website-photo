"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/gallery",{

/***/ "./src/components/PhotoCategory.tsx":
/*!******************************************!*\
  !*** ./src/components/PhotoCategory.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_Header_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/Header.module.css */ \"./src/style/Header.module.css\");\n/* harmony import */ var _style_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_Header_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Navigation */ \"./src/components/Navigation.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nvar categories = [\n    \"Mariage\",\n    \"Grossesse\",\n    \"B\\xe9b\\xe9\",\n    \"Famille\",\n    \"Bapt\\xeame\",\n    \"Couple\", \n];\nfunction Filter() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), activeCategory = ref[0], setActiveCategory = ref[1];\n    var handleCategoryClick = function(categories) {\n        setActiveCategory(categories);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"filter-container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: \"filter-list\",\n            children: categories.map(function(category) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: \"filter-list-item \".concat(activeCategory === category ? \"active\" : \"\"),\n                    onClick: function() {\n                        return handleCategoryClick(category);\n                    },\n                    children: category\n                }, category, false, {\n                    fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 11\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(Filter, \"JX2RHXcK6vRFQX40l5qJjODCymA=\");\n_c = Filter;\nfunction PhotoGallery() {\n    var _this = this;\n    var images = [\n        {\n            url: \"/biche.jpg\",\n            title: \"Image 1\"\n        },\n        {\n            url: \"/loutre.jpg\",\n            title: \"Image 2\"\n        },\n        {\n            url: \"/mariage.webp\",\n            title: \"Image 3\"\n        },\n        {\n            url: \"/oiseau.webp\",\n            title: \"Image 4\"\n        },\n        {\n            url: \"/table.webp\",\n            title: \"Image 5\"\n        },\n        {\n            url: \"/chateau.jpg\",\n            title: \"Image 6\"\n        }, \n    ];\n    var renderGridTile = function(images) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                display: \"flex\",\n                alignItems: \"center\",\n                justifyContent: \"center\",\n                position: \"relative\",\n                overflow: \"hidden\",\n                width: \"100%\",\n                height: 0,\n                paddingTop: \"75%\",\n                borderRadius: \"8px\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: images.url,\n                    alt: images.title,\n                    style: {\n                        position: \"absolute\",\n                        top: 0,\n                        left: 0,\n                        bottom: 0,\n                        right: 0,\n                        width: \"100%\",\n                        height: \"100%\",\n                        objectFit: \"cover\"\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        position: \"absolute\",\n                        bottom: 0,\n                        left: 0,\n                        right: 0,\n                        backgroundColor: \"rgba(0, 0, 0, 0.5)\",\n                        color: \"#fff\",\n                        padding: \"8px\",\n                        fontSize: \"1.2rem\",\n                        fontFamily: \"Inter,sans-serif\",\n                        fontWeight: \"bold\",\n                        textShadow: \"1px 1px #000\"\n                    },\n                    children: images.title\n                }, void 0, false, {\n                    fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n                    lineNumber: 83,\n                    columnNumber: 7\n                }, _this)\n            ]\n        }, images.url, true, {\n            fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n            lineNumber: 55,\n            columnNumber: 5\n        }, _this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navigation__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n                lineNumber: 105,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    padding: \"16px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        style: {\n                            textAlign: \"center\"\n                        },\n                        className: (_style_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().header),\n                        children: \"Gallery Photo\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"categories\", {}, void 0, false, {\n                        fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n                        lineNumber: 111,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"grid\",\n                            gridTemplateColumns: \"repeat(auto-fit, minmax(300px, 1fr))\",\n                            gap: \"16px\",\n                            marginBottom: \"32px\"\n                        },\n                        children: images.map(renderGridTile)\n                    }, void 0, false, {\n                        fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n                        lineNumber: 112,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c1 = PhotoGallery;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PhotoGallery);\nvar _c, _c1;\n$RefreshReg$(_c, \"Filter\");\n$RefreshReg$(_c1, \"PhotoGallery\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU0sRUFBRSxDQUFDO3dCQUNURCxJQUFJLEVBQUUsQ0FBQzt3QkFDUEUsS0FBSyxFQUFFLENBQUM7d0JBQ1JFLGVBQWUsRUFBRSxvQkFBb0I7d0JBQ3JDQyxLQUFLLEVBQUUsTUFBTTt3QkFDYkMsT0FBTyxFQUFFLEtBQUs7d0JBQ2RDLFFBQVEsRUFBRSxRQUFRO3dCQUNsQkMsVUFBVSxFQUFFLGtCQUFrQjt3QkFDOUJDLFVBQVUsRUFBRSxNQUFNO3dCQUNsQkMsVUFBVSxFQUFFLGNBQWM7cUJBQzNCOzhCQUVBM0IsTUFBTSxDQUFDRSxLQUFLOzs7Ozt5QkFDVDs7V0EzQ0RGLE1BQU0sQ0FBQ0MsR0FBRzs7OztpQkE0Q1g7S0FDUDtJQUVELHFCQUNFOzswQkFDRSw4REFBQ2pCLDhEQUFNOzs7O29CQUFHOzBCQUVWLDhEQUFDUSxLQUFHO2dCQUFDVCxLQUFLLEVBQUU7b0JBQUV3QyxPQUFPLEVBQUUsTUFBTTtpQkFBRTs7a0NBQzdCLDhEQUFDSyxJQUFFO3dCQUFDN0MsS0FBSyxFQUFFOzRCQUFFOEMsU0FBUyxFQUFFLFFBQVE7eUJBQUU7d0JBQUVwQyxTQUFTLEVBQUVWLHdFQUFZO2tDQUFFLGVBRTdEOzs7Ozs0QkFBSztrQ0FDTCw4REFBQ0ksWUFBVTs7Ozs0QkFBRztrQ0FDZCw4REFBQ0ssS0FBRzt3QkFDRlQsS0FBSyxFQUFFOzRCQUNMcUIsT0FBTyxFQUFFLE1BQU07NEJBQ2YyQixtQkFBbUIsRUFBRSxzQ0FBc0M7NEJBQzNEQyxHQUFHLEVBQUUsTUFBTTs0QkFDWEMsWUFBWSxFQUFFLE1BQU07eUJBQ3JCO2tDQUVBakMsTUFBTSxDQUFDTCxHQUFHLENBQUNRLGNBQWMsQ0FBQzs7Ozs7NEJBQ3ZCOzs7Ozs7b0JBQ0Y7O29CQUNMLENBQ0g7QUFDSixDQUFDO0FBakZRSixNQUFBQSxZQUFZO0FBbUZyQiwrREFBZUEsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Bob3RvQ2F0ZWdvcnkudHN4P2ZkNTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZS9JbWFnZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4uL3N0eWxlL0hlYWRlci5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2aWdhdGlvblwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IGNhdGVnb3JpZXMgPSBbXG4gIFwiTWFyaWFnZVwiLFxuICBcIkdyb3NzZXNzZVwiLFxuICBcIkLDqWLDqVwiLFxuICBcIkZhbWlsbGVcIixcbiAgXCJCYXB0w6ptZVwiLFxuICBcIkNvdXBsZVwiLFxuXTtcblxuZnVuY3Rpb24gRmlsdGVyKCkge1xuICBjb25zdCBbYWN0aXZlQ2F0ZWdvcnksIHNldEFjdGl2ZUNhdGVnb3J5XSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZUNhdGVnb3J5Q2xpY2sgPSAoY2F0ZWdvcmllcykgPT4ge1xuICAgIHNldEFjdGl2ZUNhdGVnb3J5KGNhdGVnb3JpZXMpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItY29udGFpbmVyXCI+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwiZmlsdGVyLWxpc3RcIj5cbiAgICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4gKFxuICAgICAgICAgIDxsaVxuICAgICAgICAgICAga2V5PXtjYXRlZ29yeX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGZpbHRlci1saXN0LWl0ZW0gJHtcbiAgICAgICAgICAgICAgYWN0aXZlQ2F0ZWdvcnkgPT09IGNhdGVnb3J5ID8gXCJhY3RpdmVcIiA6IFwiXCJcbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2F0ZWdvcnlDbGljayhjYXRlZ29yeSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2NhdGVnb3J5fVxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gUGhvdG9HYWxsZXJ5KCkge1xuICBjb25zdCBpbWFnZXMgPSBbXG4gICAgeyB1cmw6IFwiL2JpY2hlLmpwZ1wiLCB0aXRsZTogXCJJbWFnZSAxXCIgfSxcbiAgICB7IHVybDogXCIvbG91dHJlLmpwZ1wiLCB0aXRsZTogXCJJbWFnZSAyXCIgfSxcbiAgICB7IHVybDogXCIvbWFyaWFnZS53ZWJwXCIsIHRpdGxlOiBcIkltYWdlIDNcIiB9LFxuICAgIHsgdXJsOiBcIi9vaXNlYXUud2VicFwiLCB0aXRsZTogXCJJbWFnZSA0XCIgfSxcbiAgICB7IHVybDogXCIvdGFibGUud2VicFwiLCB0aXRsZTogXCJJbWFnZSA1XCIgfSxcbiAgICB7IHVybDogXCIvY2hhdGVhdS5qcGdcIiwgdGl0bGU6IFwiSW1hZ2UgNlwiIH0sXG4gIF07XG5cbiAgY29uc3QgcmVuZGVyR3JpZFRpbGUgPSAoaW1hZ2VzOiB7IHVybDogc3RyaW5nOyB0aXRsZTogc3RyaW5nIH0pID0+IChcbiAgICA8ZGl2XG4gICAgICBrZXk9e2ltYWdlcy51cmx9XG4gICAgICBzdHlsZT17e1xuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgcGFkZGluZ1RvcDogXCI3NSVcIixcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjhweFwiLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8aW1nXG4gICAgICAgIHNyYz17aW1hZ2VzLnVybH1cbiAgICAgICAgYWx0PXtpbWFnZXMudGl0bGV9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgb2JqZWN0Rml0OiBcImNvdmVyXCIsXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMCwgMCwgMCwgMC41KVwiLFxuICAgICAgICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgICBwYWRkaW5nOiBcIjhweFwiLFxuICAgICAgICAgIGZvbnRTaXplOiBcIjEuMnJlbVwiLFxuICAgICAgICAgIGZvbnRGYW1pbHk6IFwiSW50ZXIsc2Fucy1zZXJpZlwiLFxuICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICAgIHRleHRTaGFkb3c6IFwiMXB4IDFweCAjMDAwXCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtpbWFnZXMudGl0bGV9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TmF2YmFyIC8+XG5cbiAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIxNnB4XCIgfX0+XG4gICAgICAgIDxoMSBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0gY2xhc3NOYW1lPXtzdHlsZS5oZWFkZXJ9PlxuICAgICAgICAgIEdhbGxlcnkgUGhvdG9cbiAgICAgICAgPC9oMT5cbiAgICAgICAgPGNhdGVnb3JpZXMgLz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBkaXNwbGF5OiBcImdyaWRcIixcbiAgICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwicmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpXCIsXG4gICAgICAgICAgICBnYXA6IFwiMTZweFwiLFxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjMycHhcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge2ltYWdlcy5tYXAocmVuZGVyR3JpZFRpbGUpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQaG90b0dhbGxlcnk7XG4iXSwibmFtZXMiOlsic3R5bGUiLCJOYXZiYXIiLCJSZWFjdCIsInVzZVN0YXRlIiwiY2F0ZWdvcmllcyIsIkZpbHRlciIsImFjdGl2ZUNhdGVnb3J5Iiwic2V0QWN0aXZlQ2F0ZWdvcnkiLCJoYW5kbGVDYXRlZ29yeUNsaWNrIiwiZGl2IiwiY2xhc3NOYW1lIiwidWwiLCJtYXAiLCJjYXRlZ29yeSIsImxpIiwib25DbGljayIsIlBob3RvR2FsbGVyeSIsImltYWdlcyIsInVybCIsInRpdGxlIiwicmVuZGVyR3JpZFRpbGUiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwicG9zaXRpb24iLCJvdmVyZmxvdyIsIndpZHRoIiwiaGVpZ2h0IiwicGFkZGluZ1RvcCIsImJvcmRlclJhZGl1cyIsImltZyIsInNyYyIsImFsdCIsInRvcCIsImxlZnQiLCJib3R0b20iLCJyaWdodCIsIm9iamVjdEZpdCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwicGFkZGluZyIsImZvbnRTaXplIiwiZm9udEZhbWlseSIsImZvbnRXZWlnaHQiLCJ0ZXh0U2hhZG93IiwiaDEiLCJ0ZXh0QWxpZ24iLCJoZWFkZXIiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiZ2FwIiwibWFyZ2luQm90dG9tIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/PhotoCategory.tsx\n"));

/***/ })

});