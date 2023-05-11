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

/***/ "./src/pages/gallery.tsx":
/*!*******************************!*\
  !*** ./src/pages/gallery.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_Image_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/Image.module.css */ \"./src/style/Image.module.css\");\n/* harmony import */ var _style_Image_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_Image_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navigation */ \"./src/components/Navigation.tsx\");\n\n\n\n\nfunction Gallery() {\n    var _this = this;\n    var images = [\n        {\n            url: \"/biche.jpg\",\n            title: \"Image 1\"\n        },\n        {\n            url: \"/loutre.jpg\",\n            title: \"Image 2\"\n        },\n        {\n            url: \"/mariage.webp\",\n            title: \"Image 3\"\n        },\n        {\n            url: \"/oiseau.webp\",\n            title: \"Image 4\"\n        },\n        {\n            url: \"/table.webp\",\n            title: \"Image 5\"\n        },\n        {\n            url: \"/chateau.jpg\",\n            title: \"Image 6\"\n        }, \n    ];\n    var renderGridTile = function(images) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_style_Image_module_css__WEBPACK_IMPORTED_MODULE_3___default().gridImg),\n            style: {\n                display: \"flex\",\n                alignItems: \"center\",\n                justifyContent: \"center\",\n                position: \"relative\",\n                overflow: \"hidden\",\n                width: \"100%\",\n                height: 0,\n                paddingTop: \"75%\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: images.url,\n                    alt: images.title,\n                    style: {\n                        position: \"absolute\",\n                        top: 0,\n                        left: 0,\n                        bottom: 0,\n                        right: 0,\n                        width: \"100%\",\n                        height: \"100%\",\n                        objectFit: \"cover\"\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/mat/workspace/back/ProjetStudi/src/pages/gallery.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        position: \"absolute\",\n                        bottom: 0,\n                        left: 0,\n                        right: 0,\n                        backgroundColor: \"rgba(0, 0, 0, 0.5)\",\n                        color: \"#fff\",\n                        padding: \"8px\",\n                        fontSize: \"1.2rem\",\n                        fontWeight: \"bold\",\n                        textShadow: \"1px 1px #000\"\n                    },\n                    children: images.title\n                }, void 0, false, {\n                    fileName: \"/Users/mat/workspace/back/ProjetStudi/src/pages/gallery.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 7\n                }, _this)\n            ]\n        }, images.url, true, {\n            fileName: \"/Users/mat/workspace/back/ProjetStudi/src/pages/gallery.tsx\",\n            lineNumber: 20,\n            columnNumber: 5\n        }, _this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navigation__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/mat/workspace/back/ProjetStudi/src/pages/gallery.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    padding: \"16px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        style: {\n                            textAlign: \"center\"\n                        },\n                        children: \"Gallery Photo\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mat/workspace/back/ProjetStudi/src/pages/gallery.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"grid\",\n                            gridTemplateColumns: \"repeat(auto-fit, minmax(300px, 1fr))\",\n                            gap: \"16px\",\n                            marginBottom: \"32px\"\n                        },\n                        children: images.map(renderGridTile)\n                    }, void 0, false, {\n                        fileName: \"/Users/mat/workspace/back/ProjetStudi/src/pages/gallery.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mat/workspace/back/ProjetStudi/src/pages/gallery.tsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = Gallery;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gallery);\nvar _c;\n$RefreshReg$(_c, \"Gallery\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUosS0FBQUEsT0FBTztBQThFaEIsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvZ2FsbGVyeS50c3g/MzgwNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlL0ltYWdlLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi4vc3R5bGUvSGVhZGVyLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmlnYXRpb25cIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uXCI7XG5cbmZ1bmN0aW9uIEdhbGxlcnkoKSB7XG4gIGNvbnN0IGltYWdlcyA9IFtcbiAgICB7IHVybDogXCIvYmljaGUuanBnXCIsIHRpdGxlOiBcIkltYWdlIDFcIiB9LFxuICAgIHsgdXJsOiBcIi9sb3V0cmUuanBnXCIsIHRpdGxlOiBcIkltYWdlIDJcIiB9LFxuICAgIHsgdXJsOiBcIi9tYXJpYWdlLndlYnBcIiwgdGl0bGU6IFwiSW1hZ2UgM1wiIH0sXG4gICAgeyB1cmw6IFwiL29pc2VhdS53ZWJwXCIsIHRpdGxlOiBcIkltYWdlIDRcIiB9LFxuICAgIHsgdXJsOiBcIi90YWJsZS53ZWJwXCIsIHRpdGxlOiBcIkltYWdlIDVcIiB9LFxuICAgIHsgdXJsOiBcIi9jaGF0ZWF1LmpwZ1wiLCB0aXRsZTogXCJJbWFnZSA2XCIgfSxcbiAgXTtcblxuICBjb25zdCByZW5kZXJHcmlkVGlsZSA9IChpbWFnZXMpID0+IChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5ncmlkSW1nfVxuICAgICAga2V5PXtpbWFnZXMudXJsfVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIHBhZGRpbmdUb3A6IFwiNzUlXCIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxpbWdcbiAgICAgICAgc3JjPXtpbWFnZXMudXJsfVxuICAgICAgICBhbHQ9e2ltYWdlcy50aXRsZX1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgwLCAwLCAwLCAwLjUpXCIsXG4gICAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAgIHBhZGRpbmc6IFwiOHB4XCIsXG4gICAgICAgICAgZm9udFNpemU6IFwiMS4ycmVtXCIsXG4gICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICAgICAgdGV4dFNoYWRvdzogXCIxcHggMXB4ICMwMDBcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge2ltYWdlcy50aXRsZX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxOYXZiYXIgLz5cbiAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIxNnB4XCIgfX0+XG4gICAgICAgIDxoMSBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+R2FsbGVyeSBQaG90bzwvaDE+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZGlzcGxheTogXCJncmlkXCIsXG4gICAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBcInJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKVwiLFxuICAgICAgICAgICAgZ2FwOiBcIjE2cHhcIixcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIzMnB4XCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtpbWFnZXMubWFwKHJlbmRlckdyaWRUaWxlKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FsbGVyeTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlcyIsIk5hdmJhciIsIkdhbGxlcnkiLCJpbWFnZXMiLCJ1cmwiLCJ0aXRsZSIsInJlbmRlckdyaWRUaWxlIiwiZGl2IiwiY2xhc3NOYW1lIiwiZ3JpZEltZyIsInN0eWxlIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInBvc2l0aW9uIiwib3ZlcmZsb3ciLCJ3aWR0aCIsImhlaWdodCIsInBhZGRpbmdUb3AiLCJpbWciLCJzcmMiLCJhbHQiLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwicmlnaHQiLCJvYmplY3RGaXQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsInBhZGRpbmciLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJ0ZXh0U2hhZG93IiwiaDEiLCJ0ZXh0QWxpZ24iLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiZ2FwIiwibWFyZ2luQm90dG9tIiwibWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/gallery.tsx\n"));

/***/ })

});