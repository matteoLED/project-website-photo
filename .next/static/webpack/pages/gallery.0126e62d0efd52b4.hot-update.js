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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_Image_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../style/Image.module.css */ \"./src/style/Image.module.css\");\n/* harmony import */ var _style_Image_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_Image_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _style_Header_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../style/Header.module.css */ \"./src/style/Header.module.css\");\n/* harmony import */ var _style_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_Header_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navigation */ \"./src/components/Navigation.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar photos = [\n    {\n        id: 1,\n        category: \"Mariage\",\n        url: \"/mariage.webp\"\n    },\n    {\n        id: 2,\n        category: \"Grossesse\",\n        url: \"/chateau.jpg\"\n    },\n    {\n        id: 3,\n        category: \"B\\xe9b\\xe9\",\n        url: \"/oiseau.webp\"\n    },\n    {\n        id: 4,\n        category: \"Famille\",\n        url: \"\"\n    },\n    {\n        id: 5,\n        category: \"Bapt\\xeame\",\n        url: \"/plante.webp\"\n    },\n    {\n        id: 6,\n        category: \"Couple\",\n        url: \"/table.webp\"\n    }, \n];\nfunction Gallery() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"Tous\"), selectedCategory = ref[0], setSelectedCategory = ref[1];\n    var handleCategorySelect = function(category) {\n        setSelectedCategory(category);\n    };\n    var filteredPhotos = selectedCategory !== \"Tous\" ? photos.filter(function(photo) {\n        return photo.category === selectedCategory;\n    }) : photos;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_style_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().listCategory),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Cat\\xe9gories :\"\n            }, void 0, false, {\n                fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        onClick: function() {\n                            return handleCategorySelect(\"Tous\");\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            children: \"Tous\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        onClick: function() {\n                            return handleCategorySelect(\"Mariage\");\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            children: \"Mariage\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        onClick: function() {\n                            return handleCategorySelect(\"Grossesse\");\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            children: \"Grossesse\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        onClick: function() {\n                            return handleCategorySelect(\"B\\xe9b\\xe9\");\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            children: \"B\\xe9b\\xe9\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        onClick: function() {\n                            return handleCategorySelect(\"Famille\");\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            children: \"Famille\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        onClick: function() {\n                            return handleCategorySelect(\"Bapt\\xeame\");\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            children: \"Bapt\\xeame\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        onClick: function() {\n                            return handleCategorySelect(\"Couple\");\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            children: \"Couple\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_style_Image_module_css__WEBPACK_IMPORTED_MODULE_5___default().categoryfilterli),\n                children: filteredPhotos.map(function(photo) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: photo.url,\n                        alt: photo.category,\n                        width: 300,\n                        height: 300\n                    }, photo.id, false, {\n                        fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(Gallery, \"SwH7cPAoMWh22V3fu1sD6HwOc1o=\");\n_c = Gallery;\nfunction PhotoGallery() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navigation__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    padding: \"16px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        style: {\n                            textAlign: \"center\"\n                        },\n                        className: (_style_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().header),\n                        children: \"Gallery Photo\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Gallery, {}, void 0, false, {\n                        fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c1 = PhotoGallery;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PhotoGallery);\nvar _c, _c1;\n$RefreshReg$(_c, \"Gallery\");\n$RefreshReg$(_c1, \"PhotoGallery\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9QaG90b0NhdGVnb3J5LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFBK0I7QUFDZ0I7QUFDQTtBQUdEO0FBRU47QUFFeEMsSUFBTU0sTUFBTSxHQUFHO0lBQ2I7UUFBRUMsRUFBRSxFQUFFLENBQUM7UUFBRUMsUUFBUSxFQUFFLFNBQVM7UUFBRUMsR0FBRyxFQUFFLGVBQWU7S0FBRTtJQUNwRDtRQUFFRixFQUFFLEVBQUUsQ0FBQztRQUFFQyxRQUFRLEVBQUUsV0FBVztRQUFFQyxHQUFHLEVBQUUsY0FBYztLQUFFO0lBQ3JEO1FBQUVGLEVBQUUsRUFBRSxDQUFDO1FBQUVDLFFBQVEsRUFBRSxZQUFNO1FBQUVDLEdBQUcsRUFBRSxjQUFjO0tBQUU7SUFDaEQ7UUFBRUYsRUFBRSxFQUFFLENBQUM7UUFBRUMsUUFBUSxFQUFFLFNBQVM7UUFBRUMsR0FBRyxFQUFFLEVBQUU7S0FBRTtJQUN2QztRQUFFRixFQUFFLEVBQUUsQ0FBQztRQUFFQyxRQUFRLEVBQUUsWUFBUztRQUFFQyxHQUFHLEVBQUUsY0FBYztLQUFFO0lBQ25EO1FBQUVGLEVBQUUsRUFBRSxDQUFDO1FBQUVDLFFBQVEsRUFBRSxRQUFRO1FBQUVDLEdBQUcsRUFBRSxhQUFhO0tBQUU7Q0FDbEQ7QUFFRCxTQUFTQyxPQUFPLEdBQUc7OztJQUNqQixJQUFnREwsR0FBd0IsR0FBeEJBLCtDQUFRLENBQVMsTUFBTSxDQUFDLEVBQWpFTSxnQkFBZ0IsR0FBeUJOLEdBQXdCLEdBQWpELEVBQUVPLG1CQUFtQixHQUFJUCxHQUF3QixHQUE1QjtJQUU1QyxJQUFNUSxvQkFBb0IsR0FBRyxTQUFDTCxRQUFnQixFQUFLO1FBQ2pESSxtQkFBbUIsQ0FBQ0osUUFBUSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELElBQU1NLGNBQWMsR0FDbEJILGdCQUFnQixLQUFLLE1BQU0sR0FDdkJMLE1BQU0sQ0FBQ1MsTUFBTSxDQUFDLFNBQUNDLEtBQUs7ZUFBS0EsS0FBSyxDQUFDUixRQUFRLEtBQUtHLGdCQUFnQjtLQUFBLENBQUMsR0FDN0RMLE1BQU07SUFFWixxQkFDRSw4REFBQ1csS0FBRztRQUFDQyxTQUFTLEVBQUVoQiw4RUFBa0I7OzBCQUNoQyw4REFBQ2tCLElBQUU7MEJBQUMsaUJBQVk7Ozs7O29CQUFLOzBCQUNyQiw4REFBQ0MsSUFBRTs7a0NBQ0QsOERBQUNDLElBQUU7d0JBQUNDLE9BQU8sRUFBRTttQ0FBTVYsb0JBQW9CLENBQUMsTUFBTSxDQUFDO3lCQUFBO2tDQUM3Qyw0RUFBQ1csUUFBTTtzQ0FBQyxNQUFJOzs7OztnQ0FBUzs7Ozs7NEJBQ2xCO2tDQUNMLDhEQUFDRixJQUFFO3dCQUFDQyxPQUFPLEVBQUU7bUNBQU1WLG9CQUFvQixDQUFDLFNBQVMsQ0FBQzt5QkFBQTtrQ0FDaEQsNEVBQUNXLFFBQU07c0NBQUMsU0FBTzs7Ozs7Z0NBQVM7Ozs7OzRCQUNyQjtrQ0FDTCw4REFBQ0YsSUFBRTt3QkFBQ0MsT0FBTyxFQUFFO21DQUFNVixvQkFBb0IsQ0FBQyxXQUFXLENBQUM7eUJBQUE7a0NBQ2xELDRFQUFDVyxRQUFNO3NDQUFDLFdBQVM7Ozs7O2dDQUFTOzs7Ozs0QkFDdkI7a0NBQ0wsOERBQUNGLElBQUU7d0JBQUNDLE9BQU8sRUFBRTttQ0FBTVYsb0JBQW9CLENBQUMsWUFBTSxDQUFDO3lCQUFBO2tDQUM3Qyw0RUFBQ1csUUFBTTtzQ0FBQyxZQUFJOzs7OztnQ0FBUzs7Ozs7NEJBQ2xCO2tDQUNMLDhEQUFDRixJQUFFO3dCQUFDQyxPQUFPLEVBQUU7bUNBQU1WLG9CQUFvQixDQUFDLFNBQVMsQ0FBQzt5QkFBQTtrQ0FDaEQsNEVBQUNXLFFBQU07c0NBQUMsU0FBTzs7Ozs7Z0NBQVM7Ozs7OzRCQUNyQjtrQ0FDTCw4REFBQ0YsSUFBRTt3QkFBQ0MsT0FBTyxFQUFFO21DQUFNVixvQkFBb0IsQ0FBQyxZQUFTLENBQUM7eUJBQUE7a0NBQ2hELDRFQUFDVyxRQUFNO3NDQUFDLFlBQU87Ozs7O2dDQUFTOzs7Ozs0QkFDckI7a0NBQ0wsOERBQUNGLElBQUU7d0JBQUNDLE9BQU8sRUFBRTttQ0FBTVYsb0JBQW9CLENBQUMsUUFBUSxDQUFDO3lCQUFBO2tDQUMvQyw0RUFBQ1csUUFBTTtzQ0FBQyxRQUFNOzs7OztnQ0FBUzs7Ozs7NEJBQ3BCOzs7Ozs7b0JBQ0Y7MEJBQ0wsOERBQUNQLEtBQUc7Z0JBQUNDLFNBQVMsRUFBRWpCLGlGQUF1QjswQkFDcENhLGNBQWMsQ0FBQ1ksR0FBRyxDQUFDLFNBQUNWLEtBQUs7eUNBQ3hCLDhEQUFDaEIsbURBQUs7d0JBRUoyQixHQUFHLEVBQUVYLEtBQUssQ0FBQ1AsR0FBRzt3QkFDZG1CLEdBQUcsRUFBRVosS0FBSyxDQUFDUixRQUFRO3dCQUNuQnFCLEtBQUssRUFBRSxHQUFHO3dCQUNWQyxNQUFNLEVBQUUsR0FBRzt1QkFKTmQsS0FBSyxDQUFDVCxFQUFFOzs7OzZCQUtiO2lCQUNILENBQUM7Ozs7O29CQUNFOzs7Ozs7WUFDRixDQUNOO0FBQ0osQ0FBQztHQW5EUUcsT0FBTztBQUFQQSxLQUFBQSxPQUFPO0FBcURoQixTQUFTcUIsWUFBWSxHQUFHO0lBQ3RCLHFCQUNFOzswQkFDRSw4REFBQzVCLDhEQUFNOzs7O29CQUFHOzBCQUVWLDhEQUFDYyxLQUFHO2dCQUFDZixLQUFLLEVBQUU7b0JBQUU4QixPQUFPLEVBQUUsTUFBTTtpQkFBRTs7a0NBQzdCLDhEQUFDQyxJQUFFO3dCQUFDL0IsS0FBSyxFQUFFOzRCQUFFZ0MsU0FBUyxFQUFFLFFBQVE7eUJBQUU7d0JBQUVoQixTQUFTLEVBQUVoQix3RUFBWTtrQ0FBRSxlQUU3RDs7Ozs7NEJBQUs7a0NBQ0wsOERBQUNRLE9BQU87Ozs7NEJBQUc7Ozs7OztvQkFDUDs7b0JBQ0wsQ0FDSDtBQUNKLENBQUM7QUFiUXFCLE1BQUFBLFlBQVk7QUFlckIsK0RBQWVBLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9QaG90b0NhdGVnb3J5LnRzeD9mZDUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGUvSW1hZ2UubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHN0eWxlIGZyb20gXCIuLi9zdHlsZS9IZWFkZXIubW9kdWxlLmNzc1wiO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2aWdhdGlvblwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmlnYXRpb25cIjtcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IHBob3RvcyA9IFtcbiAgeyBpZDogMSwgY2F0ZWdvcnk6IFwiTWFyaWFnZVwiLCB1cmw6IFwiL21hcmlhZ2Uud2VicFwiIH0sXG4gIHsgaWQ6IDIsIGNhdGVnb3J5OiBcIkdyb3NzZXNzZVwiLCB1cmw6IFwiL2NoYXRlYXUuanBnXCIgfSxcbiAgeyBpZDogMywgY2F0ZWdvcnk6IFwiQsOpYsOpXCIsIHVybDogXCIvb2lzZWF1LndlYnBcIiB9LFxuICB7IGlkOiA0LCBjYXRlZ29yeTogXCJGYW1pbGxlXCIsIHVybDogXCJcIiB9LFxuICB7IGlkOiA1LCBjYXRlZ29yeTogXCJCYXB0w6ptZVwiLCB1cmw6IFwiL3BsYW50ZS53ZWJwXCIgfSxcbiAgeyBpZDogNiwgY2F0ZWdvcnk6IFwiQ291cGxlXCIsIHVybDogXCIvdGFibGUud2VicFwiIH0sXG5dO1xuXG5mdW5jdGlvbiBHYWxsZXJ5KCkge1xuICBjb25zdCBbc2VsZWN0ZWRDYXRlZ29yeSwgc2V0U2VsZWN0ZWRDYXRlZ29yeV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiVG91c1wiKTtcblxuICBjb25zdCBoYW5kbGVDYXRlZ29yeVNlbGVjdCA9IChjYXRlZ29yeTogc3RyaW5nKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRDYXRlZ29yeShjYXRlZ29yeSk7XG4gIH07XG5cbiAgY29uc3QgZmlsdGVyZWRQaG90b3MgPVxuICAgIHNlbGVjdGVkQ2F0ZWdvcnkgIT09IFwiVG91c1wiXG4gICAgICA/IHBob3Rvcy5maWx0ZXIoKHBob3RvKSA9PiBwaG90by5jYXRlZ29yeSA9PT0gc2VsZWN0ZWRDYXRlZ29yeSlcbiAgICAgIDogcGhvdG9zO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmxpc3RDYXRlZ29yeX0+XG4gICAgICA8aDI+Q2F0w6lnb3JpZXMgOjwvaDI+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDYXRlZ29yeVNlbGVjdChcIlRvdXNcIil9PlxuICAgICAgICAgIDxidXR0b24+VG91czwvYnV0dG9uPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gaGFuZGxlQ2F0ZWdvcnlTZWxlY3QoXCJNYXJpYWdlXCIpfT5cbiAgICAgICAgICA8YnV0dG9uPk1hcmlhZ2U8L2J1dHRvbj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNhdGVnb3J5U2VsZWN0KFwiR3Jvc3Nlc3NlXCIpfT5cbiAgICAgICAgICA8YnV0dG9uPkdyb3NzZXNzZTwvYnV0dG9uPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gaGFuZGxlQ2F0ZWdvcnlTZWxlY3QoXCJCw6liw6lcIil9PlxuICAgICAgICAgIDxidXR0b24+QsOpYsOpPC9idXR0b24+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDYXRlZ29yeVNlbGVjdChcIkZhbWlsbGVcIil9PlxuICAgICAgICAgIDxidXR0b24+RmFtaWxsZTwvYnV0dG9uPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gaGFuZGxlQ2F0ZWdvcnlTZWxlY3QoXCJCYXB0w6ptZVwiKX0+XG4gICAgICAgICAgPGJ1dHRvbj5CYXB0w6ptZTwvYnV0dG9uPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gaGFuZGxlQ2F0ZWdvcnlTZWxlY3QoXCJDb3VwbGVcIil9PlxuICAgICAgICAgIDxidXR0b24+Q291cGxlPC9idXR0b24+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXRlZ29yeWZpbHRlcmxpfT5cbiAgICAgICAge2ZpbHRlcmVkUGhvdG9zLm1hcCgocGhvdG8pID0+IChcbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIGtleT17cGhvdG8uaWR9XG4gICAgICAgICAgICBzcmM9e3Bob3RvLnVybH1cbiAgICAgICAgICAgIGFsdD17cGhvdG8uY2F0ZWdvcnl9XG4gICAgICAgICAgICB3aWR0aD17MzAwfVxuICAgICAgICAgICAgaGVpZ2h0PXszMDB9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gUGhvdG9HYWxsZXJ5KCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TmF2YmFyIC8+XG5cbiAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIxNnB4XCIgfX0+XG4gICAgICAgIDxoMSBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0gY2xhc3NOYW1lPXtzdHlsZS5oZWFkZXJ9PlxuICAgICAgICAgIEdhbGxlcnkgUGhvdG9cbiAgICAgICAgPC9oMT5cbiAgICAgICAgPEdhbGxlcnkgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQaG90b0dhbGxlcnk7XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJzdHlsZXMiLCJzdHlsZSIsIk5hdmJhciIsIlJlYWN0IiwidXNlU3RhdGUiLCJwaG90b3MiLCJpZCIsImNhdGVnb3J5IiwidXJsIiwiR2FsbGVyeSIsInNlbGVjdGVkQ2F0ZWdvcnkiLCJzZXRTZWxlY3RlZENhdGVnb3J5IiwiaGFuZGxlQ2F0ZWdvcnlTZWxlY3QiLCJmaWx0ZXJlZFBob3RvcyIsImZpbHRlciIsInBob3RvIiwiZGl2IiwiY2xhc3NOYW1lIiwibGlzdENhdGVnb3J5IiwiaDIiLCJ1bCIsImxpIiwib25DbGljayIsImJ1dHRvbiIsImNhdGVnb3J5ZmlsdGVybGkiLCJtYXAiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsIlBob3RvR2FsbGVyeSIsInBhZGRpbmciLCJoMSIsInRleHRBbGlnbiIsImhlYWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/PhotoCategory.tsx\n"));

/***/ })

});