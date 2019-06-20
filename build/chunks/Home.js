require("source-map-support").install();
exports.ids = ["Home"];
exports.modules = {

/***/ "./node_modules/css-loader/index.js??ref--5-rules-2!./node_modules/postcss-loader/lib/index.js??ref--5-rules-3!./node_modules/sass-loader/lib/loader.js!./src/routes/home/Home.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".Home-root-qf4cd {\n  padding-left: 20px;\n  padding-right: 20px; }\n\n.Home-container-2ABq6 {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: var(--max-content-width);\n  max-width: var(--max-content-width); }\n", "", {"version":3,"sources":["/home/egnify/Documents/simple-isomorphic-boilerplate/src/routes/home/Home.scss"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,oBAAoB,EAAE;;AAExB;EACE,eAAe;EACf,kBAAkB;EAClB,oCAAoC;EACpC,oCAAoC,EAAE","file":"Home.scss","sourcesContent":[".root {\n  padding-left: 20px;\n  padding-right: 20px; }\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: var(--max-content-width);\n  max-width: var(--max-content-width); }\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "Home-root-qf4cd",
	"container": "Home-container-2ABq6"
};

/***/ }),

/***/ "./src/actions/runtime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRuntimeVariable", function() { return setRuntimeVariable; });
/* harmony import */ var reducers_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/reducers/runtime.js");
/* eslint-disable import/prefer-default-export */

function setRuntimeVariable({
  name,
  value
}) {
  return {
    type: reducers_runtime__WEBPACK_IMPORTED_MODULE_0__["ACTION_TYPES"].setRuntimeVariable,
    payload: {
      name,
      value
    }
  };
}

/***/ }),

/***/ "./src/routes/home/Home.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var actions_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/actions/runtime.js");
/* harmony import */ var _Home_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/routes/home/Home.scss");
/* harmony import */ var _Home_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Home_scss__WEBPACK_IMPORTED_MODULE_5__);
var _dec,
    _class,
    _class2,
    _temp,
    _jsxFileName = "/home/egnify/Documents/simple-isomorphic-boilerplate/src/routes/home/Home.js";







/* we can conntect to store as following */

let Home = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(store => ({
  runtimeVariable: store.runtime.runtimeVariable // any specific store value can be accessed like this

}), {
  setRuntimeVariable: actions_runtime__WEBPACK_IMPORTED_MODULE_4__["setRuntimeVariable"]
} // here we are binding the dispactcher action methods
), _dec(_class = (_temp = _class2 = class Home extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  componentDidMount() {
    /* this is how we can dispactch an action */
    this.props.setRuntimeVariable({
      name: 'runtimeVariable',
      value: new Date()
    });
    /* we can access store data like following
     * ex: this.props.runtimeVariable
     */
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _Home_scss__WEBPACK_IMPORTED_MODULE_5___default.a.root,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: `${_Home_scss__WEBPACK_IMPORTED_MODULE_5___default.a.container} row`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, "Simplified React Starter Kit")));
  }

}, Object.defineProperty(_class2, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setRuntimeVariable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
  }
}), _temp)) || _class);
/* harmony default export */ __webpack_exports__["default"] = (isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2___default()(_Home_scss__WEBPACK_IMPORTED_MODULE_5___default.a)(Home));

/***/ }),

/***/ "./src/routes/home/Home.scss":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("./node_modules/css-loader/index.js??ref--5-rules-2!./node_modules/postcss-loader/lib/index.js??ref--5-rules-3!./node_modules/sass-loader/lib/loader.js!./src/routes/home/Home.scss");
    var insertCss = __webpack_require__("./node_modules/isomorphic-style-loader/lib/insertCss.js");

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (module.hot && typeof window !== 'undefined' && window.document) {
      var removeCss = function() {};
      module.hot.accept("./node_modules/css-loader/index.js??ref--5-rules-2!./node_modules/postcss-loader/lib/index.js??ref--5-rules-3!./node_modules/sass-loader/lib/loader.js!./src/routes/home/Home.scss", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (function() {
        content = __webpack_require__("./node_modules/css-loader/index.js??ref--5-rules-2!./node_modules/postcss-loader/lib/index.js??ref--5-rules-3!./node_modules/sass-loader/lib/loader.js!./src/routes/home/Home.scss");

        if (typeof content === 'string') {
          content = [[module.i, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ "./src/routes/home/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_AppLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/AppLayout/AppLayout.js");
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/routes/home/Home.js");
var _jsxFileName = "/home/egnify/Documents/simple-isomorphic-boilerplate/src/routes/home/index.js";




async function action() {
  return {
    title: 'React Starter Kit',
    chunks: ['Home'],
    component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_AppLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Home__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }))
  };
}

/* harmony default export */ __webpack_exports__["default"] = (action);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL0hvbWUuanMiLCJzb3VyY2VzIjpbIi9ob21lL2VnbmlmeS9Eb2N1bWVudHMvc2ltcGxlLWlzb21vcnBoaWMtYm9pbGVycGxhdGUvc3JjL3JvdXRlcy9ob21lL0hvbWUuc2NzcyIsIi9ob21lL2VnbmlmeS9Eb2N1bWVudHMvc2ltcGxlLWlzb21vcnBoaWMtYm9pbGVycGxhdGUvc3JjL2FjdGlvbnMvcnVudGltZS5qcyIsIi9ob21lL2VnbmlmeS9Eb2N1bWVudHMvc2ltcGxlLWlzb21vcnBoaWMtYm9pbGVycGxhdGUvc3JjL3JvdXRlcy9ob21lL0hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9ob21lL0hvbWUuc2Nzcz8xODM1IiwiL2hvbWUvZWduaWZ5L0RvY3VtZW50cy9zaW1wbGUtaXNvbW9ycGhpYy1ib2lsZXJwbGF0ZS9zcmMvcm91dGVzL2hvbWUvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5Ib21lLXJvb3QtcWY0Y2Qge1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMjBweDsgfVxcblxcbi5Ib21lLWNvbnRhaW5lci0yQUJxNiB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDAgMCA0MHB4O1xcbiAgbWF4LXdpZHRoOiB2YXIoLS1tYXgtY29udGVudC13aWR0aCk7XFxuICBtYXgtd2lkdGg6IHZhcigtLW1heC1jb250ZW50LXdpZHRoKTsgfVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvaG9tZS9lZ25pZnkvRG9jdW1lbnRzL3NpbXBsZS1pc29tb3JwaGljLWJvaWxlcnBsYXRlL3NyYy9yb3V0ZXMvaG9tZS9Ib21lLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsb0JBQW9CLEVBQUU7O0FBRXhCO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsb0NBQW9DLEVBQUVcIixcImZpbGVcIjpcIkhvbWUuc2Nzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucm9vdCB7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4OyB9XFxuXFxuLmNvbnRhaW5lciB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDAgMCA0MHB4O1xcbiAgbWF4LXdpZHRoOiB2YXIoLS1tYXgtY29udGVudC13aWR0aCk7XFxuICBtYXgtd2lkdGg6IHZhcigtLW1heC1jb250ZW50LXdpZHRoKTsgfVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJyb290XCI6IFwiSG9tZS1yb290LXFmNGNkXCIsXG5cdFwiY29udGFpbmVyXCI6IFwiSG9tZS1jb250YWluZXItMkFCcTZcIlxufTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5cbmltcG9ydCB7IEFDVElPTl9UWVBFUyB9IGZyb20gJ3JlZHVjZXJzL3J1bnRpbWUnO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0UnVudGltZVZhcmlhYmxlKHsgbmFtZSwgdmFsdWUgfSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFDVElPTl9UWVBFUy5zZXRSdW50aW1lVmFyaWFibGUsXG4gICAgcGF5bG9hZDoge1xuICAgICAgbmFtZSxcbiAgICAgIHZhbHVlLFxuICAgIH0sXG4gIH07XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBzZXRSdW50aW1lVmFyaWFibGUgfSBmcm9tICdhY3Rpb25zL3J1bnRpbWUnO1xuaW1wb3J0IHMgZnJvbSAnLi9Ib21lLnNjc3MnO1xuXG4vKiB3ZSBjYW4gY29ubnRlY3QgdG8gc3RvcmUgYXMgZm9sbG93aW5nICovXG5AY29ubmVjdChcbiAgc3RvcmUgPT4gKHtcbiAgICBydW50aW1lVmFyaWFibGU6IHN0b3JlLnJ1bnRpbWUucnVudGltZVZhcmlhYmxlLCAvLyBhbnkgc3BlY2lmaWMgc3RvcmUgdmFsdWUgY2FuIGJlIGFjY2Vzc2VkIGxpa2UgdGhpc1xuICB9KSxcbiAgeyBzZXRSdW50aW1lVmFyaWFibGUgfSwgLy8gaGVyZSB3ZSBhcmUgYmluZGluZyB0aGUgZGlzcGFjdGNoZXIgYWN0aW9uIG1ldGhvZHNcbilcbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHNldFJ1bnRpbWVWYXJpYWJsZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvKiB0aGlzIGlzIGhvdyB3ZSBjYW4gZGlzcGFjdGNoIGFuIGFjdGlvbiAqL1xuICAgIHRoaXMucHJvcHMuc2V0UnVudGltZVZhcmlhYmxlKHtcbiAgICAgIG5hbWU6ICdydW50aW1lVmFyaWFibGUnLFxuICAgICAgdmFsdWU6IG5ldyBEYXRlKCksXG4gICAgfSk7XG5cbiAgICAvKiB3ZSBjYW4gYWNjZXNzIHN0b3JlIGRhdGEgbGlrZSBmb2xsb3dpbmdcbiAgICAgKiBleDogdGhpcy5wcm9wcy5ydW50aW1lVmFyaWFibGVcbiAgICAgKi9cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3Mucm9vdH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzLmNvbnRhaW5lcn0gcm93YH0+XG4gICAgICAgICAgPGgxPlNpbXBsaWZpZWQgUmVhY3QgU3RhcnRlciBLaXQ8L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzKShIb21lKTtcbiIsIlxuICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vSG9tZS5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENvbnRlbnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQ7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgICBcbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL0hvbWUuc2Nzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL0hvbWUuc2Nzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFwcExheW91dCBmcm9tICdjb21wb25lbnRzL0FwcExheW91dCc7XG5pbXBvcnQgSG9tZSBmcm9tICcuL0hvbWUnO1xuXG5hc3luYyBmdW5jdGlvbiBhY3Rpb24oKSB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6ICdSZWFjdCBTdGFydGVyIEtpdCcsXG4gICAgY2h1bmtzOiBbJ0hvbWUnXSxcbiAgICBjb21wb25lbnQ6IChcbiAgICAgIDxBcHBMYXlvdXQ+XG4gICAgICAgIDxIb21lIC8+XG4gICAgICA8L0FwcExheW91dD5cbiAgICApLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBhY3Rpb247XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDWEE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBTUE7QUFKQTtBQUNBO0FBRkE7QUFHQTtBQUFBO0FBSkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQTFCQTs7OztBQUNBO0FBQ0E7QUFEQTs7QUEyQkE7Ozs7Ozs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQVNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9