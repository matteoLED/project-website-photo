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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_Image_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../style/Image.module.css */ \"./src/style/Image.module.css\");\n/* harmony import */ var _style_Image_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_Image_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _style_Header_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../style/Header.module.css */ \"./src/style/Header.module.css\");\n/* harmony import */ var _style_Header_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_Header_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navigation */ \"./src/components/Navigation.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar photos = [\n    {\n        id: 1,\n        category: \"Mariage\",\n        url: \"/biche.jpg\"\n    },\n    {\n        id: 2,\n        category: \"Grossesse\",\n        url: \"/chateau.jpg\"\n    },\n    {\n        id: 3,\n        category: \"B\\xe9b\\xe9\",\n        url: \"/oiseau.webp\"\n    },\n    {\n        id: 4,\n        category: \"Famille\",\n        url: \"/mariage.webp\"\n    },\n    {\n        id: 5,\n        category: \"Bapt\\xeame\",\n        url: \"/plante.webp\"\n    },\n    {\n        id: 6,\n        category: \"Couple\",\n        url: \"/table.webp\"\n    }, \n];\nfunction Gallery() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), selectedCategories = ref[0], setSelectedCategories = ref[1];\n    var handleCategorySelect = function(category) {\n        if (selectedCategories.includes(category)) {\n            setSelectedCategories(selectedCategories.filter(function(c) {\n                return c !== category;\n            }));\n        } else {\n            setSelectedCategories((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(selectedCategories).concat([\n                category\n            ]));\n        }\n    };\n    var filteredPhotos = selectedCategories.length ? photos.filter(function(photo) {\n        return selectedCategories.includes(photo.category);\n    }) : photos;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_style_Header_module_css__WEBPACK_IMPORTED_MODULE_5___default().categoryfilter),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Cat\\xe9gories :\"\n            }, void 0, false, {\n                fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        onClick: function() {\n                            return handleCategorySelect(\"Mariage\");\n                        },\n                        children: \"Mariage\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        onClick: function() {\n                            return handleCategorySelect(\"Grossesse\");\n                        },\n                        children: \"Grossesse\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        onClick: function() {\n                            return handleCategorySelect(\"B\\xe9b\\xe9\");\n                        },\n                        children: \"B\\xe9b\\xe9\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        onClick: function() {\n                            return handleCategorySelect(\"Famille\");\n                        },\n                        children: \"Famille\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        onClick: function() {\n                            return handleCategorySelect(\"Bapt\\xeame\");\n                        },\n                        children: \"Bapt\\xeame\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        onClick: function() {\n                            return handleCategorySelect(\"Couple\");\n                        },\n                        children: \"Couple\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_style_Image_module_css__WEBPACK_IMPORTED_MODULE_6___default().imageContainer),\n                children: filteredPhotos.map(function(photo) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: photo.url,\n                        alt: photo.category,\n                        width: 300,\n                        height: 300\n                    }, photo.id, false, {\n                        fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n_s(Gallery, \"4bWmwqNpSmwrWYwBxf0uO8LDcFo=\");\n_c = Gallery;\nfunction PhotoGallery() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navigation__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    padding: \"16px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        style: {\n                            textAlign: \"center\"\n                        },\n                        className: (_style_Header_module_css__WEBPACK_IMPORTED_MODULE_5___default().header),\n                        children: \"Gallery Photo\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Gallery, {}, void 0, false, {\n                        fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c1 = PhotoGallery;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PhotoGallery);\nvar _c, _c1;\n$RefreshReg$(_c, \"Gallery\");\n$RefreshReg$(_c1, \"PhotoGallery\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9QaG90b0NhdGVnb3J5LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUErQjtBQUNnQjtBQUNBO0FBR0Q7QUFFTjtBQUV4QyxJQUFNTSxNQUFNLEdBQUc7SUFDYjtRQUFFQyxFQUFFLEVBQUUsQ0FBQztRQUFFQyxRQUFRLEVBQUUsU0FBUztRQUFFQyxHQUFHLEVBQUUsWUFBWTtLQUFFO0lBQ2pEO1FBQUVGLEVBQUUsRUFBRSxDQUFDO1FBQUVDLFFBQVEsRUFBRSxXQUFXO1FBQUVDLEdBQUcsRUFBRSxjQUFjO0tBQUU7SUFDckQ7UUFBRUYsRUFBRSxFQUFFLENBQUM7UUFBRUMsUUFBUSxFQUFFLFlBQU07UUFBRUMsR0FBRyxFQUFFLGNBQWM7S0FBRTtJQUNoRDtRQUFFRixFQUFFLEVBQUUsQ0FBQztRQUFFQyxRQUFRLEVBQUUsU0FBUztRQUFFQyxHQUFHLEVBQUUsZUFBZTtLQUFFO0lBQ3BEO1FBQUVGLEVBQUUsRUFBRSxDQUFDO1FBQUVDLFFBQVEsRUFBRSxZQUFTO1FBQUVDLEdBQUcsRUFBRSxjQUFjO0tBQUU7SUFDbkQ7UUFBRUYsRUFBRSxFQUFFLENBQUM7UUFBRUMsUUFBUSxFQUFFLFFBQVE7UUFBRUMsR0FBRyxFQUFFLGFBQWE7S0FBRTtDQUNsRDtBQUVELFNBQVNDLE9BQU8sR0FBRzs7O0lBQ2pCLElBQW9ETCxHQUFzQixHQUF0QkEsK0NBQVEsQ0FBVyxFQUFFLENBQUMsRUFBbkVNLGtCQUFrQixHQUEyQk4sR0FBc0IsR0FBakQsRUFBRU8scUJBQXFCLEdBQUlQLEdBQXNCLEdBQTFCO0lBRWhELElBQU1RLG9CQUFvQixHQUFHLFNBQUNMLFFBQWdCLEVBQUs7UUFDakQsSUFBSUcsa0JBQWtCLENBQUNHLFFBQVEsQ0FBQ04sUUFBUSxDQUFDLEVBQUU7WUFDekNJLHFCQUFxQixDQUFDRCxrQkFBa0IsQ0FBQ0ksTUFBTSxDQUFDLFNBQUNDLENBQUM7dUJBQUtBLENBQUMsS0FBS1IsUUFBUTthQUFBLENBQUMsQ0FBQyxDQUFDO1FBQzFFLE9BQU87WUFDTEkscUJBQXFCLENBQUMscUZBQUlELGtCQUFrQixDQUFsQkEsUUFBSjtnQkFBd0JILFFBQVE7YUFBQyxFQUFDLENBQUM7UUFDM0QsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFNUyxjQUFjLEdBQUdOLGtCQUFrQixDQUFDTyxNQUFNLEdBQzVDWixNQUFNLENBQUNTLE1BQU0sQ0FBQyxTQUFDSSxLQUFLO2VBQUtSLGtCQUFrQixDQUFDRyxRQUFRLENBQUNLLEtBQUssQ0FBQ1gsUUFBUSxDQUFDO0tBQUEsQ0FBQyxHQUNyRUYsTUFBTTtJQUVWLHFCQUNFLDhEQUFDYyxLQUFHO1FBQUNDLFNBQVMsRUFBRW5CLGdGQUFvQjs7MEJBQ2xDLDhEQUFDcUIsSUFBRTswQkFBQyxpQkFBWTs7Ozs7b0JBQUs7MEJBQ3JCLDhEQUFDQyxJQUFFOztrQ0FDRCw4REFBQ0MsSUFBRTt3QkFBQ0MsT0FBTyxFQUFFO21DQUFNYixvQkFBb0IsQ0FBQyxTQUFTLENBQUM7eUJBQUE7a0NBQUUsU0FBTzs7Ozs7NEJBQUs7a0NBQ2hFLDhEQUFDWSxJQUFFO3dCQUFDQyxPQUFPLEVBQUU7bUNBQU1iLG9CQUFvQixDQUFDLFdBQVcsQ0FBQzt5QkFBQTtrQ0FBRSxXQUFTOzs7Ozs0QkFBSztrQ0FDcEUsOERBQUNZLElBQUU7d0JBQUNDLE9BQU8sRUFBRTttQ0FBTWIsb0JBQW9CLENBQUMsWUFBTSxDQUFDO3lCQUFBO2tDQUFFLFlBQUk7Ozs7OzRCQUFLO2tDQUMxRCw4REFBQ1ksSUFBRTt3QkFBQ0MsT0FBTyxFQUFFO21DQUFNYixvQkFBb0IsQ0FBQyxTQUFTLENBQUM7eUJBQUE7a0NBQUUsU0FBTzs7Ozs7NEJBQUs7a0NBQ2hFLDhEQUFDWSxJQUFFO3dCQUFDQyxPQUFPLEVBQUU7bUNBQU1iLG9CQUFvQixDQUFDLFlBQVMsQ0FBQzt5QkFBQTtrQ0FBRSxZQUFPOzs7Ozs0QkFBSztrQ0FDaEUsOERBQUNZLElBQUU7d0JBQUNDLE9BQU8sRUFBRTttQ0FBTWIsb0JBQW9CLENBQUMsUUFBUSxDQUFDO3lCQUFBO2tDQUFFLFFBQU07Ozs7OzRCQUFLOzs7Ozs7b0JBQzNEOzBCQUNMLDhEQUFDTyxLQUFHO2dCQUFDQyxTQUFTLEVBQUVwQiwrRUFBcUI7MEJBQ2xDZ0IsY0FBYyxDQUFDVyxHQUFHLENBQUMsU0FBQ1QsS0FBSzt5Q0FDeEIsOERBQUNuQixtREFBSzt3QkFFSjZCLEdBQUcsRUFBRVYsS0FBSyxDQUFDVixHQUFHO3dCQUNkcUIsR0FBRyxFQUFFWCxLQUFLLENBQUNYLFFBQVE7d0JBQ25CdUIsS0FBSyxFQUFFLEdBQUc7d0JBQ1ZDLE1BQU0sRUFBRSxHQUFHO3VCQUpOYixLQUFLLENBQUNaLEVBQUU7Ozs7NkJBS2I7aUJBQ0gsQ0FBQzs7Ozs7b0JBQ0U7Ozs7OztZQUNGLENBQ047QUFDSixDQUFDO0dBdkNRRyxPQUFPO0FBQVBBLEtBQUFBLE9BQU87QUF5Q2hCLFNBQVN1QixZQUFZLEdBQUc7SUFDdEIscUJBQ0U7OzBCQUNFLDhEQUFDOUIsOERBQU07Ozs7b0JBQUc7MEJBRVYsOERBQUNpQixLQUFHO2dCQUFDbEIsS0FBSyxFQUFFO29CQUFFZ0MsT0FBTyxFQUFFLE1BQU07aUJBQUU7O2tDQUM3Qiw4REFBQ0MsSUFBRTt3QkFBQ2pDLEtBQUssRUFBRTs0QkFBRWtDLFNBQVMsRUFBRSxRQUFRO3lCQUFFO3dCQUFFZixTQUFTLEVBQUVuQix3RUFBWTtrQ0FBRSxlQUU3RDs7Ozs7NEJBQUs7a0NBQ0wsOERBQUNRLE9BQU87Ozs7NEJBQUc7Ozs7OztvQkFDUDs7b0JBQ0wsQ0FDSDtBQUNKLENBQUM7QUFiUXVCLE1BQUFBLFlBQVk7QUFlckIsK0RBQWVBLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9QaG90b0NhdGVnb3J5LnRzeD9mZDUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGUvSW1hZ2UubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHN0eWxlIGZyb20gXCIuLi9zdHlsZS9IZWFkZXIubW9kdWxlLmNzc1wiO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2aWdhdGlvblwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmlnYXRpb25cIjtcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IHBob3RvcyA9IFtcbiAgeyBpZDogMSwgY2F0ZWdvcnk6IFwiTWFyaWFnZVwiLCB1cmw6IFwiL2JpY2hlLmpwZ1wiIH0sXG4gIHsgaWQ6IDIsIGNhdGVnb3J5OiBcIkdyb3NzZXNzZVwiLCB1cmw6IFwiL2NoYXRlYXUuanBnXCIgfSxcbiAgeyBpZDogMywgY2F0ZWdvcnk6IFwiQsOpYsOpXCIsIHVybDogXCIvb2lzZWF1LndlYnBcIiB9LFxuICB7IGlkOiA0LCBjYXRlZ29yeTogXCJGYW1pbGxlXCIsIHVybDogXCIvbWFyaWFnZS53ZWJwXCIgfSxcbiAgeyBpZDogNSwgY2F0ZWdvcnk6IFwiQmFwdMOqbWVcIiwgdXJsOiBcIi9wbGFudGUud2VicFwiIH0sXG4gIHsgaWQ6IDYsIGNhdGVnb3J5OiBcIkNvdXBsZVwiLCB1cmw6IFwiL3RhYmxlLndlYnBcIiB9LFxuXTtcblxuZnVuY3Rpb24gR2FsbGVyeSgpIHtcbiAgY29uc3QgW3NlbGVjdGVkQ2F0ZWdvcmllcywgc2V0U2VsZWN0ZWRDYXRlZ29yaWVzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG5cbiAgY29uc3QgaGFuZGxlQ2F0ZWdvcnlTZWxlY3QgPSAoY2F0ZWdvcnk6IHN0cmluZykgPT4ge1xuICAgIGlmIChzZWxlY3RlZENhdGVnb3JpZXMuaW5jbHVkZXMoY2F0ZWdvcnkpKSB7XG4gICAgICBzZXRTZWxlY3RlZENhdGVnb3JpZXMoc2VsZWN0ZWRDYXRlZ29yaWVzLmZpbHRlcigoYykgPT4gYyAhPT0gY2F0ZWdvcnkpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0U2VsZWN0ZWRDYXRlZ29yaWVzKFsuLi5zZWxlY3RlZENhdGVnb3JpZXMsIGNhdGVnb3J5XSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGZpbHRlcmVkUGhvdG9zID0gc2VsZWN0ZWRDYXRlZ29yaWVzLmxlbmd0aFxuICAgID8gcGhvdG9zLmZpbHRlcigocGhvdG8pID0+IHNlbGVjdGVkQ2F0ZWdvcmllcy5pbmNsdWRlcyhwaG90by5jYXRlZ29yeSkpXG4gICAgOiBwaG90b3M7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY2F0ZWdvcnlmaWx0ZXJ9PlxuICAgICAgPGgyPkNhdMOpZ29yaWVzIDo8L2gyPlxuICAgICAgPHVsPlxuICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gaGFuZGxlQ2F0ZWdvcnlTZWxlY3QoXCJNYXJpYWdlXCIpfT5NYXJpYWdlPC9saT5cbiAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNhdGVnb3J5U2VsZWN0KFwiR3Jvc3Nlc3NlXCIpfT5Hcm9zc2Vzc2U8L2xpPlxuICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gaGFuZGxlQ2F0ZWdvcnlTZWxlY3QoXCJCw6liw6lcIil9PkLDqWLDqTwvbGk+XG4gICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDYXRlZ29yeVNlbGVjdChcIkZhbWlsbGVcIil9PkZhbWlsbGU8L2xpPlxuICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gaGFuZGxlQ2F0ZWdvcnlTZWxlY3QoXCJCYXB0w6ptZVwiKX0+QmFwdMOqbWU8L2xpPlxuICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gaGFuZGxlQ2F0ZWdvcnlTZWxlY3QoXCJDb3VwbGVcIil9PkNvdXBsZTwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZUNvbnRhaW5lcn0+XG4gICAgICAgIHtmaWx0ZXJlZFBob3Rvcy5tYXAoKHBob3RvKSA9PiAoXG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBrZXk9e3Bob3RvLmlkfVxuICAgICAgICAgICAgc3JjPXtwaG90by51cmx9XG4gICAgICAgICAgICBhbHQ9e3Bob3RvLmNhdGVnb3J5fVxuICAgICAgICAgICAgd2lkdGg9ezMwMH1cbiAgICAgICAgICAgIGhlaWdodD17MzAwfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFBob3RvR2FsbGVyeSgpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE5hdmJhciAvPlxuXG4gICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiMTZweFwiIH19PlxuICAgICAgICA8aDEgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19IGNsYXNzTmFtZT17c3R5bGUuaGVhZGVyfT5cbiAgICAgICAgICBHYWxsZXJ5IFBob3RvXG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxHYWxsZXJ5IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGhvdG9HYWxsZXJ5O1xuIl0sIm5hbWVzIjpbIkltYWdlIiwic3R5bGVzIiwic3R5bGUiLCJOYXZiYXIiLCJSZWFjdCIsInVzZVN0YXRlIiwicGhvdG9zIiwiaWQiLCJjYXRlZ29yeSIsInVybCIsIkdhbGxlcnkiLCJzZWxlY3RlZENhdGVnb3JpZXMiLCJzZXRTZWxlY3RlZENhdGVnb3JpZXMiLCJoYW5kbGVDYXRlZ29yeVNlbGVjdCIsImluY2x1ZGVzIiwiZmlsdGVyIiwiYyIsImZpbHRlcmVkUGhvdG9zIiwibGVuZ3RoIiwicGhvdG8iLCJkaXYiLCJjbGFzc05hbWUiLCJjYXRlZ29yeWZpbHRlciIsImgyIiwidWwiLCJsaSIsIm9uQ2xpY2siLCJpbWFnZUNvbnRhaW5lciIsIm1hcCIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiUGhvdG9HYWxsZXJ5IiwicGFkZGluZyIsImgxIiwidGV4dEFsaWduIiwiaGVhZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/PhotoCategory.tsx\n"));

/***/ })

});