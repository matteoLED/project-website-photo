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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_Image_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../style/Image.module.css */ \"./src/style/Image.module.css\");\n/* harmony import */ var _style_Image_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_Image_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _style_Header_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../style/Header.module.css */ \"./src/style/Header.module.css\");\n/* harmony import */ var _style_Header_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_Header_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navigation */ \"./src/components/Navigation.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar photos = [\n    {\n        id: 1,\n        category: \"Mariage\",\n        url: \"/biche.jpg\"\n    },\n    {\n        id: 2,\n        category: \"Grossesse\",\n        url: \"/chateau.jpg\"\n    },\n    {\n        id: 3,\n        category: \"B\\xe9b\\xe9\",\n        url: \"/oiseau.webp\"\n    },\n    {\n        id: 4,\n        category: \"Famille\",\n        url: \"/mariage.webp\"\n    },\n    {\n        id: 5,\n        category: \"Bapt\\xeame\",\n        url: \"/plante.webp\"\n    },\n    {\n        id: 6,\n        category: \"Couple\",\n        url: \"/table.webp\"\n    }, \n];\nfunction Gallery() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), selectedCategories = ref[0], setSelectedCategories = ref[1];\n    var handleCategorySelect = function(category) {\n        if (selectedCategories.includes(category)) {\n            setSelectedCategories(selectedCategories.filter(function(c) {\n                return c !== category;\n            }));\n        } else {\n            setSelectedCategories((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(selectedCategories).concat([\n                category\n            ]));\n        }\n    };\n    var filteredPhotos = selectedCategories.length ? photos.filter(function(photo) {\n        return selectedCategories.includes(photo.category);\n    }) : photos;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Cat\\xe9gories :\"\n            }, void 0, false, {\n                fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        onClick: function() {\n                            return handleCategorySelect(\"Mariage\");\n                        },\n                        children: \"Mariage\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        onClick: function() {\n                            return handleCategorySelect(\"Grossesse\");\n                        },\n                        children: \"Grossesse\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        onClick: function() {\n                            return handleCategorySelect(\"B\\xe9b\\xe9\");\n                        },\n                        children: \"B\\xe9b\\xe9\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        onClick: function() {\n                            return handleCategorySelect(\"Famille\");\n                        },\n                        children: \"Famille\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        onClick: function() {\n                            return handleCategorySelect(\"Bapt\\xeame\");\n                        },\n                        children: \"Bapt\\xeame\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        onClick: function() {\n                            return handleCategorySelect(\"Couple\");\n                        },\n                        children: \"Couple\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_style_Image_module_css__WEBPACK_IMPORTED_MODULE_5___default().imageContainer),\n                children: filteredPhotos.map(function(photo) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: photo.url,\n                        alt: photo.category,\n                        width: 300,\n                        height: 300\n                    }, photo.id, false, {\n                        fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(Gallery, \"4bWmwqNpSmwrWYwBxf0uO8LDcFo=\");\n_c = Gallery;\nfunction PhotoGallery() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navigation__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            \"css Copy code\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    padding: \"16px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        style: {\n                            textAlign: \"center\"\n                        },\n                        className: (_style_Header_module_css__WEBPACK_IMPORTED_MODULE_6___default().header),\n                        children: \"Gallery Photo\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Gallery, {}, void 0, false, {\n                        fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c1 = PhotoGallery;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PhotoGallery);\nvar _c, _c1;\n$RefreshReg$(_c, \"Gallery\");\n$RefreshReg$(_c1, \"PhotoGallery\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OztvQkFDM0Q7MEJBQ0wsOERBQUNPLEtBQUc7Z0JBQUNLLFNBQVMsRUFBRXhCLCtFQUFxQjswQkFDbENnQixjQUFjLENBQUNVLEdBQUcsQ0FBQyxTQUFDUixLQUFLO3lDQUN4Qiw4REFBQ25CLG1EQUFLO3dCQUVKNEIsR0FBRyxFQUFFVCxLQUFLLENBQUNWLEdBQUc7d0JBQ2RvQixHQUFHLEVBQUVWLEtBQUssQ0FBQ1gsUUFBUTt3QkFDbkJzQixLQUFLLEVBQUUsR0FBRzt3QkFDVkMsTUFBTSxFQUFFLEdBQUc7dUJBSk5aLEtBQUssQ0FBQ1osRUFBRTs7Ozs2QkFLYjtpQkFDSCxDQUFDOzs7OztvQkFDRTs7Ozs7O1lBQ0YsQ0FDTjtBQUNKLENBQUM7R0F2Q1FHLE9BQU87QUFBUEEsS0FBQUEsT0FBTztBQXlDaEIsU0FBU3NCLFlBQVksR0FBRztJQUN0QixxQkFDRTs7MEJBQ0UsOERBQUM3Qiw4REFBTTs7OztvQkFBRztZQUFBLGVBRVY7MEJBQUEsOERBQUNpQixLQUFHO2dCQUFDbEIsS0FBSyxFQUFFO29CQUFFK0IsT0FBTyxFQUFFLE1BQU07aUJBQUU7O2tDQUM3Qiw4REFBQ0MsSUFBRTt3QkFBQ2hDLEtBQUssRUFBRTs0QkFBRWlDLFNBQVMsRUFBRSxRQUFRO3lCQUFFO3dCQUFFVixTQUFTLEVBQUV2Qix3RUFBWTtrQ0FBRSxlQUU3RDs7Ozs7NEJBQUs7a0NBQ0wsOERBQUNRLE9BQU87Ozs7NEJBQUc7Ozs7OztvQkFDUDs7b0JBQ0wsQ0FDSDtBQUNKLENBQUM7QUFiUXNCLE1BQUFBLFlBQVk7QUFlckIsK0RBQWVBLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9QaG90b0NhdGVnb3J5LnRzeD9mZDUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGUvSW1hZ2UubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHN0eWxlIGZyb20gXCIuLi9zdHlsZS9IZWFkZXIubW9kdWxlLmNzc1wiO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2aWdhdGlvblwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmlnYXRpb25cIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBwaG90b3MgPSBbXG4gIHsgaWQ6IDEsIGNhdGVnb3J5OiBcIk1hcmlhZ2VcIiwgdXJsOiBcIi9iaWNoZS5qcGdcIiB9LFxuICB7IGlkOiAyLCBjYXRlZ29yeTogXCJHcm9zc2Vzc2VcIiwgdXJsOiBcIi9jaGF0ZWF1LmpwZ1wiIH0sXG4gIHsgaWQ6IDMsIGNhdGVnb3J5OiBcIkLDqWLDqVwiLCB1cmw6IFwiL29pc2VhdS53ZWJwXCIgfSxcbiAgeyBpZDogNCwgY2F0ZWdvcnk6IFwiRmFtaWxsZVwiLCB1cmw6IFwiL21hcmlhZ2Uud2VicFwiIH0sXG4gIHsgaWQ6IDUsIGNhdGVnb3J5OiBcIkJhcHTDqm1lXCIsIHVybDogXCIvcGxhbnRlLndlYnBcIiB9LFxuICB7IGlkOiA2LCBjYXRlZ29yeTogXCJDb3VwbGVcIiwgdXJsOiBcIi90YWJsZS53ZWJwXCIgfSxcbl07XG5cbmZ1bmN0aW9uIEdhbGxlcnkoKSB7XG4gIGNvbnN0IFtzZWxlY3RlZENhdGVnb3JpZXMsIHNldFNlbGVjdGVkQ2F0ZWdvcmllc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgaGFuZGxlQ2F0ZWdvcnlTZWxlY3QgPSAoY2F0ZWdvcnk6IHN0cmluZykgPT4ge1xuICAgIGlmIChzZWxlY3RlZENhdGVnb3JpZXMuaW5jbHVkZXMoY2F0ZWdvcnkpKSB7XG4gICAgICBzZXRTZWxlY3RlZENhdGVnb3JpZXMoc2VsZWN0ZWRDYXRlZ29yaWVzLmZpbHRlcigoYykgPT4gYyAhPT0gY2F0ZWdvcnkpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0U2VsZWN0ZWRDYXRlZ29yaWVzKFsuLi5zZWxlY3RlZENhdGVnb3JpZXMsIGNhdGVnb3J5XSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGZpbHRlcmVkUGhvdG9zID0gc2VsZWN0ZWRDYXRlZ29yaWVzLmxlbmd0aFxuICAgID8gcGhvdG9zLmZpbHRlcigocGhvdG8pID0+IHNlbGVjdGVkQ2F0ZWdvcmllcy5pbmNsdWRlcyhwaG90by5jYXRlZ29yeSkpXG4gICAgOiBwaG90b3M7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgyPkNhdMOpZ29yaWVzIDo8L2gyPlxuICAgICAgPHVsPlxuICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gaGFuZGxlQ2F0ZWdvcnlTZWxlY3QoXCJNYXJpYWdlXCIpfT5NYXJpYWdlPC9saT5cbiAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNhdGVnb3J5U2VsZWN0KFwiR3Jvc3Nlc3NlXCIpfT5Hcm9zc2Vzc2U8L2xpPlxuICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gaGFuZGxlQ2F0ZWdvcnlTZWxlY3QoXCJCw6liw6lcIil9PkLDqWLDqTwvbGk+XG4gICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDYXRlZ29yeVNlbGVjdChcIkZhbWlsbGVcIil9PkZhbWlsbGU8L2xpPlxuICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gaGFuZGxlQ2F0ZWdvcnlTZWxlY3QoXCJCYXB0w6ptZVwiKX0+QmFwdMOqbWU8L2xpPlxuICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gaGFuZGxlQ2F0ZWdvcnlTZWxlY3QoXCJDb3VwbGVcIil9PkNvdXBsZTwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZUNvbnRhaW5lcn0+XG4gICAgICAgIHtmaWx0ZXJlZFBob3Rvcy5tYXAoKHBob3RvKSA9PiAoXG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBrZXk9e3Bob3RvLmlkfVxuICAgICAgICAgICAgc3JjPXtwaG90by51cmx9XG4gICAgICAgICAgICBhbHQ9e3Bob3RvLmNhdGVnb3J5fVxuICAgICAgICAgICAgd2lkdGg9ezMwMH1cbiAgICAgICAgICAgIGhlaWdodD17MzAwfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFBob3RvR2FsbGVyeSgpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE5hdmJhciAvPlxuICAgICAgY3NzIENvcHkgY29kZVxuICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjE2cHhcIiB9fT5cbiAgICAgICAgPGgxIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fSBjbGFzc05hbWU9e3N0eWxlLmhlYWRlcn0+XG4gICAgICAgICAgR2FsbGVyeSBQaG90b1xuICAgICAgICA8L2gxPlxuICAgICAgICA8R2FsbGVyeSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBob3RvR2FsbGVyeTtcbiJdLCJuYW1lcyI6WyJJbWFnZSIsInN0eWxlcyIsInN0eWxlIiwiTmF2YmFyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInBob3RvcyIsImlkIiwiY2F0ZWdvcnkiLCJ1cmwiLCJHYWxsZXJ5Iiwic2VsZWN0ZWRDYXRlZ29yaWVzIiwic2V0U2VsZWN0ZWRDYXRlZ29yaWVzIiwiaGFuZGxlQ2F0ZWdvcnlTZWxlY3QiLCJpbmNsdWRlcyIsImZpbHRlciIsImMiLCJmaWx0ZXJlZFBob3RvcyIsImxlbmd0aCIsInBob3RvIiwiZGl2IiwiaDIiLCJ1bCIsImxpIiwib25DbGljayIsImNsYXNzTmFtZSIsImltYWdlQ29udGFpbmVyIiwibWFwIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJQaG90b0dhbGxlcnkiLCJwYWRkaW5nIiwiaDEiLCJ0ZXh0QWxpZ24iLCJoZWFkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/PhotoCategory.tsx\n"));

/***/ })

});