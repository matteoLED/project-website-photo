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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_Header_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/Header.module.css */ \"./src/style/Header.module.css\");\n/* harmony import */ var _style_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_Header_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navigation */ \"./src/components/Navigation.tsx\");\n\n\n\n\nvar categories = [\n    \"Mariage\",\n    \"Grossesse\",\n    \"B\\xe9b\\xe9\",\n    \"Famille\",\n    \"Bapt\\xeame\",\n    \"Couple\", \n];\nfunction CategoryList() {\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_style_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().body),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Cat\\xe9gories de photos :\"\n            }, void 0, false, {\n                fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: categories.map(function(category, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            category,\n                            \" \"\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n_c = CategoryList;\nfunction PhotoGallery() {\n    var _this = this;\n    var images = [\n        {\n            url: \"/biche.jpg\",\n            title: \"Image 1\"\n        },\n        {\n            url: \"/loutre.jpg\",\n            title: \"Image 2\"\n        },\n        {\n            url: \"/mariage.webp\",\n            title: \"Image 3\"\n        },\n        {\n            url: \"/oiseau.webp\",\n            title: \"Image 4\"\n        },\n        {\n            url: \"/table.webp\",\n            title: \"Image 5\"\n        },\n        {\n            url: \"/chateau.jpg\",\n            title: \"Image 6\"\n        }, \n    ];\n    var renderGridTile = function(images) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                display: \"flex\",\n                alignItems: \"center\",\n                justifyContent: \"center\",\n                position: \"relative\",\n                overflow: \"hidden\",\n                width: \"100%\",\n                height: 0,\n                paddingTop: \"75%\",\n                borderRadius: \"8px\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: images.url,\n                    alt: images.title,\n                    style: {\n                        position: \"absolute\",\n                        top: 0,\n                        left: 0,\n                        bottom: 0,\n                        right: 0,\n                        width: \"100%\",\n                        height: \"100%\",\n                        objectFit: \"cover\"\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        position: \"absolute\",\n                        bottom: 0,\n                        left: 0,\n                        right: 0,\n                        backgroundColor: \"rgba(0, 0, 0, 0.5)\",\n                        color: \"#fff\",\n                        padding: \"8px\",\n                        fontSize: \"1.2rem\",\n                        fontFamily: \"Inter,sans-serif\",\n                        fontWeight: \"bold\",\n                        textShadow: \"1px 1px #000\"\n                    },\n                    children: images.title\n                }, void 0, false, {\n                    fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 7\n                }, _this)\n            ]\n        }, images.url, true, {\n            fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n            lineNumber: 42,\n            columnNumber: 5\n        }, _this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navigation__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    padding: \"16px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        style: {\n                            textAlign: \"center\"\n                        },\n                        className: (_style_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().header),\n                        children: \"Gallery Photo\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"grid\",\n                            gridTemplateColumns: \"repeat(auto-fit, minmax(300px, 1fr))\",\n                            gap: \"16px\",\n                            marginBottom: \"32px\"\n                        },\n                        children: images.map(renderGridTile)\n                    }, void 0, false, {\n                        fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mat/workspace/back/ProjetStudi/src/components/PhotoCategory.tsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c1 = PhotoGallery;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PhotoGallery);\nvar _c, _c1;\n$RefreshReg$(_c, \"CategoryList\");\n$RefreshReg$(_c1, \"PhotoGallery\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9QaG90b0NhdGVnb3J5LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQTBCO0FBR3FCO0FBR0Q7QUFFOUMsSUFBTUcsVUFBVSxHQUFHO0lBQ2pCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBTTtJQUNOLFNBQVM7SUFDVCxZQUFTO0lBQ1QsUUFBUTtDQUNUO0FBRUQsU0FBU0MsWUFBWSxHQUFHOztJQUN0QixxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUVMLHNFQUFVOzswQkFDeEIsOERBQUNPLElBQUU7MEJBQUMsMkJBQXNCOzs7OztvQkFBSzswQkFDL0IsOERBQUNDLElBQUU7MEJBQ0FOLFVBQVUsQ0FBQ08sR0FBRyxDQUFDLFNBQUNDLFFBQVEsRUFBRUMsS0FBSzt5Q0FDOUIsOERBQUNDLElBQUU7OzRCQUFjRixRQUFROzRCQUFDLEdBQUM7O3VCQUFsQkMsS0FBSzs7Ozs2QkFBa0I7aUJBQ2pDLENBQUM7Ozs7O29CQUNDOzs7Ozs7WUFDRCxDQUNOO0FBQ0osQ0FBQztBQVhRUixLQUFBQSxZQUFZO0FBYXJCLFNBQVNVLFlBQVksR0FBRzs7SUFDdEIsSUFBTUMsTUFBTSxHQUFHO1FBQ2I7WUFBRUMsR0FBRyxFQUFFLFlBQVk7WUFBRUMsS0FBSyxFQUFFLFNBQVM7U0FBRTtRQUN2QztZQUFFRCxHQUFHLEVBQUUsYUFBYTtZQUFFQyxLQUFLLEVBQUUsU0FBUztTQUFFO1FBQ3hDO1lBQUVELEdBQUcsRUFBRSxlQUFlO1lBQUVDLEtBQUssRUFBRSxTQUFTO1NBQUU7UUFDMUM7WUFBRUQsR0FBRyxFQUFFLGNBQWM7WUFBRUMsS0FBSyxFQUFFLFNBQVM7U0FBRTtRQUN6QztZQUFFRCxHQUFHLEVBQUUsYUFBYTtZQUFFQyxLQUFLLEVBQUUsU0FBUztTQUFFO1FBQ3hDO1lBQUVELEdBQUcsRUFBRSxjQUFjO1lBQUVDLEtBQUssRUFBRSxTQUFTO1NBQUU7S0FDMUM7SUFFRCxJQUFNQyxjQUFjLEdBQUcsU0FBQ0gsTUFBc0M7NkJBQzVELDhEQUFDVixLQUFHO1lBRUZKLEtBQUssRUFBRTtnQkFDTGtCLE9BQU8sRUFBRSxNQUFNO2dCQUNmQyxVQUFVLEVBQUUsUUFBUTtnQkFDcEJDLGNBQWMsRUFBRSxRQUFRO2dCQUN4QkMsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCQyxRQUFRLEVBQUUsUUFBUTtnQkFDbEJDLEtBQUssRUFBRSxNQUFNO2dCQUNiQyxNQUFNLEVBQUUsQ0FBQztnQkFDVEMsVUFBVSxFQUFFLEtBQUs7Z0JBQ2pCQyxZQUFZLEVBQUUsS0FBSzthQUNwQjs7OEJBRUQsOERBQUNDLEtBQUc7b0JBQ0ZDLEdBQUcsRUFBRWQsTUFBTSxDQUFDQyxHQUFHO29CQUNmYyxHQUFHLEVBQUVmLE1BQU0sQ0FBQ0UsS0FBSztvQkFDakJoQixLQUFLLEVBQUU7d0JBQ0xxQixRQUFRLEVBQUUsVUFBVTt3QkFDcEJTLEdBQUcsRUFBRSxDQUFDO3dCQUNOQyxJQUFJLEVBQUUsQ0FBQzt3QkFDUEMsTUFBTSxFQUFFLENBQUM7d0JBQ1RDLEtBQUssRUFBRSxDQUFDO3dCQUNSVixLQUFLLEVBQUUsTUFBTTt3QkFDYkMsTUFBTSxFQUFFLE1BQU07d0JBQ2RVLFNBQVMsRUFBRSxPQUFPO3FCQUNuQjs7Ozs7eUJBQ0Q7OEJBQ0YsOERBQUM5QixLQUFHO29CQUNGSixLQUFLLEVBQUU7d0JBQ0xxQixRQUFRLEVBQUUsVUFBVTt3QkFDcEJXLE1BQU0sRUFBRSxDQUFDO3dCQUNURCxJQUFJLEVBQUUsQ0FBQzt3QkFDUEUsS0FBSyxFQUFFLENBQUM7d0JBQ1JFLGVBQWUsRUFBRSxvQkFBb0I7d0JBQ3JDQyxLQUFLLEVBQUUsTUFBTTt3QkFDYkMsT0FBTyxFQUFFLEtBQUs7d0JBQ2RDLFFBQVEsRUFBRSxRQUFRO3dCQUNsQkMsVUFBVSxFQUFFLGtCQUFrQjt3QkFDOUJDLFVBQVUsRUFBRSxNQUFNO3dCQUNsQkMsVUFBVSxFQUFFLGNBQWM7cUJBQzNCOzhCQUVBM0IsTUFBTSxDQUFDRSxLQUFLOzs7Ozt5QkFDVDs7V0EzQ0RGLE1BQU0sQ0FBQ0MsR0FBRzs7OztpQkE0Q1g7S0FDUDtJQUVELHFCQUNFOzswQkFDRSw4REFBQ2QsOERBQU07Ozs7b0JBQUc7MEJBRVYsOERBQUNHLEtBQUc7Z0JBQUNKLEtBQUssRUFBRTtvQkFBRXFDLE9BQU8sRUFBRSxNQUFNO2lCQUFFOztrQ0FDN0IsOERBQUNLLElBQUU7d0JBQUMxQyxLQUFLLEVBQUU7NEJBQUUyQyxTQUFTLEVBQUUsUUFBUTt5QkFBRTt3QkFBRXRDLFNBQVMsRUFBRUwsd0VBQVk7a0NBQUUsZUFFN0Q7Ozs7OzRCQUFLO2tDQUNMLDhEQUFDSSxLQUFHO3dCQUNGSixLQUFLLEVBQUU7NEJBQ0xrQixPQUFPLEVBQUUsTUFBTTs0QkFDZjJCLG1CQUFtQixFQUFFLHNDQUFzQzs0QkFDM0RDLEdBQUcsRUFBRSxNQUFNOzRCQUNYQyxZQUFZLEVBQUUsTUFBTTt5QkFDckI7a0NBRUFqQyxNQUFNLENBQUNMLEdBQUcsQ0FBQ1EsY0FBYyxDQUFDOzs7Ozs0QkFDdkI7Ozs7OztvQkFDRjs7b0JBQ0wsQ0FDSDtBQUNKLENBQUM7QUFoRlFKLE1BQUFBLFlBQVk7QUFrRnJCLCtEQUFlQSxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGhvdG9DYXRlZ29yeS50c3g/ZmQ1MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlL0ltYWdlLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi4vc3R5bGUvSGVhZGVyLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmlnYXRpb25cIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uXCI7XG5cbmNvbnN0IGNhdGVnb3JpZXMgPSBbXG4gIFwiTWFyaWFnZVwiLFxuICBcIkdyb3NzZXNzZVwiLFxuICBcIkLDqWLDqVwiLFxuICBcIkZhbWlsbGVcIixcbiAgXCJCYXB0w6ptZVwiLFxuICBcIkNvdXBsZVwiLFxuXTtcblxuZnVuY3Rpb24gQ2F0ZWdvcnlMaXN0KCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5ib2R5fT5cbiAgICAgIDxoMj5DYXTDqWdvcmllcyBkZSBwaG90b3MgOjwvaDI+XG4gICAgICA8dWw+XG4gICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnksIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17aW5kZXh9PntjYXRlZ29yeX0gPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBQaG90b0dhbGxlcnkoKSB7XG4gIGNvbnN0IGltYWdlcyA9IFtcbiAgICB7IHVybDogXCIvYmljaGUuanBnXCIsIHRpdGxlOiBcIkltYWdlIDFcIiB9LFxuICAgIHsgdXJsOiBcIi9sb3V0cmUuanBnXCIsIHRpdGxlOiBcIkltYWdlIDJcIiB9LFxuICAgIHsgdXJsOiBcIi9tYXJpYWdlLndlYnBcIiwgdGl0bGU6IFwiSW1hZ2UgM1wiIH0sXG4gICAgeyB1cmw6IFwiL29pc2VhdS53ZWJwXCIsIHRpdGxlOiBcIkltYWdlIDRcIiB9LFxuICAgIHsgdXJsOiBcIi90YWJsZS53ZWJwXCIsIHRpdGxlOiBcIkltYWdlIDVcIiB9LFxuICAgIHsgdXJsOiBcIi9jaGF0ZWF1LmpwZ1wiLCB0aXRsZTogXCJJbWFnZSA2XCIgfSxcbiAgXTtcblxuICBjb25zdCByZW5kZXJHcmlkVGlsZSA9IChpbWFnZXM6IHsgdXJsOiBzdHJpbmc7IHRpdGxlOiBzdHJpbmcgfSkgPT4gKFxuICAgIDxkaXZcbiAgICAgIGtleT17aW1hZ2VzLnVybH1cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICBwYWRkaW5nVG9wOiBcIjc1JVwiLFxuICAgICAgICBib3JkZXJSYWRpdXM6IFwiOHB4XCIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxpbWdcbiAgICAgICAgc3JjPXtpbWFnZXMudXJsfVxuICAgICAgICBhbHQ9e2ltYWdlcy50aXRsZX1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgwLCAwLCAwLCAwLjUpXCIsXG4gICAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAgIHBhZGRpbmc6IFwiOHB4XCIsXG4gICAgICAgICAgZm9udFNpemU6IFwiMS4ycmVtXCIsXG4gICAgICAgICAgZm9udEZhbWlseTogXCJJbnRlcixzYW5zLXNlcmlmXCIsXG4gICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICAgICAgdGV4dFNoYWRvdzogXCIxcHggMXB4ICMwMDBcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge2ltYWdlcy50aXRsZX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxOYXZiYXIgLz5cblxuICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjE2cHhcIiB9fT5cbiAgICAgICAgPGgxIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fSBjbGFzc05hbWU9e3N0eWxlLmhlYWRlcn0+XG4gICAgICAgICAgR2FsbGVyeSBQaG90b1xuICAgICAgICA8L2gxPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxuICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCJyZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSlcIixcbiAgICAgICAgICAgIGdhcDogXCIxNnB4XCIsXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMzJweFwiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7aW1hZ2VzLm1hcChyZW5kZXJHcmlkVGlsZSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBob3RvR2FsbGVyeTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlIiwiTmF2YmFyIiwiY2F0ZWdvcmllcyIsIkNhdGVnb3J5TGlzdCIsImRpdiIsImNsYXNzTmFtZSIsImJvZHkiLCJoMiIsInVsIiwibWFwIiwiY2F0ZWdvcnkiLCJpbmRleCIsImxpIiwiUGhvdG9HYWxsZXJ5IiwiaW1hZ2VzIiwidXJsIiwidGl0bGUiLCJyZW5kZXJHcmlkVGlsZSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJwb3NpdGlvbiIsIm92ZXJmbG93Iiwid2lkdGgiLCJoZWlnaHQiLCJwYWRkaW5nVG9wIiwiYm9yZGVyUmFkaXVzIiwiaW1nIiwic3JjIiwiYWx0IiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0Iiwib2JqZWN0Rml0IiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJwYWRkaW5nIiwiZm9udFNpemUiLCJmb250RmFtaWx5IiwiZm9udFdlaWdodCIsInRleHRTaGFkb3ciLCJoMSIsInRleHRBbGlnbiIsImhlYWRlciIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJnYXAiLCJtYXJnaW5Cb3R0b20iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/PhotoCategory.tsx\n"));

/***/ })

});