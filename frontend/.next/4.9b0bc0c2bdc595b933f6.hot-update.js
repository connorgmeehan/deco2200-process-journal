webpackHotUpdate(4,{

/***/ "./components/Timeline.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Timeline; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__WeekButton__ = __webpack_require__("./components/WeekButton.js");
var _jsxFileName = "/home/connorgm/Desktop/uni/Interaction Design/procjournal/frontend/components/Timeline.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Timeline =
/*#__PURE__*/
function (_Component) {
  _inherits(Timeline, _Component);

  function Timeline(props) {
    var _this;

    _classCallCheck(this, Timeline);

    _this = _possibleConstructorReturn(this, (Timeline.__proto__ || Object.getPrototypeOf(Timeline)).call(this, props));
    console.log(_this.props.posts);
    var className = "timeline";

    if (_this.props.activeWeek != null) {
      className += " timeline-hidden";
    }

    _this.state = {
      className: className
    };
    return _this;
  }

  _createClass(Timeline, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        className: "jsx-1638684580" + " " + (this.state.className || "")
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        className: "jsx-1638684580" + " " + "title"
      }, "DECO2200 Interface Design Studio: Process Journal"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        className: "jsx-1638684580" + " " + "subtitle"
      }, "Connor G Meehan - cmee7240 - cmee7240@uni.sydney.edu.au"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        className: "jsx-1638684580" + " " + "week-container"
      }, Object.keys(this.props.posts).map(function (post) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__WeekButton__["a" /* default */], {
          id: post,
          posts: _this2.props.posts[post],
          onClick: _this2.props.buttonClicked,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          }
        });
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "1638684580",
        css: ".timeline.jsx-1638684580{padding-top:100px;text-align:center;}.week-container.jsx-1638684580{margin:100px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:left;-ms-flex-direction:left;flex-direction:left;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;}.title.jsx-1638684580{font-size:1em;}.subtitle.jsx-1638684580{font-size:0.8em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVGltZWxpbmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEI0QixBQUcwQyxBQUlMLEFBTUUsQUFHRSxhQVJKLENBTWhCLEVBR0EsRUFic0Isa0JBQ3RCLG1EQUl1Qix3RUFDVSwySEFDakMiLCJmaWxlIjoiY29tcG9uZW50cy9UaW1lbGluZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9jb25ub3JnbS9EZXNrdG9wL3VuaS9JbnRlcmFjdGlvbiBEZXNpZ24vcHJvY2pvdXJuYWwvZnJvbnRlbmQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgV2Vla0J1dHRvbiBmcm9tICcuL1dlZWtCdXR0b24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lbGluZSBleHRlbmRzIENvbXBvbmVudHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLnBvc3RzKTtcbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9IFwidGltZWxpbmVcIjtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5hY3RpdmVXZWVrIT1udWxsKXtcbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSBcIiB0aW1lbGluZS1oaWRkZW5cIjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVcbiAgICAgICAgfVxuXG5cbiAgICB9XG5cbiAgICByZW5kZXIoKXtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNsYXNzTmFtZX0+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+REVDTzIyMDAgSW50ZXJmYWNlIERlc2lnbiBTdHVkaW86IFByb2Nlc3MgSm91cm5hbDwvaDE+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInN1YnRpdGxlXCI+Q29ubm9yIEcgTWVlaGFuIC0gY21lZTcyNDAgLSBjbWVlNzI0MEB1bmkuc3lkbmV5LmVkdS5hdTwvaDI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWVrLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXModGhpcy5wcm9wcy5wb3N0cykubWFwKCAocG9zdCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFdlZWtCdXR0b24gaWQ9e3Bvc3R9IHBvc3RzPXt0aGlzLnByb3BzLnBvc3RzW3Bvc3RdfSBvbkNsaWNrPXt0aGlzLnByb3BzLmJ1dHRvbkNsaWNrZWR9Lz5cbiAgICAgICAgICAgICAgICAgICAgKSApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgLnRpbWVsaW5lIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOjEwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC53ZWVrLWNvbnRhaW5lcntcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjoxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOmxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnN1YnRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICB3ZWVrU2VsZWN0ZWQoKXtcbiAgICAgICAgXG4gICAgfVxufSJdfQ== */\n/*@ sourceURL=components/Timeline.js */"
      }));
    }
  }, {
    key: "weekSelected",
    value: function weekSelected() {}
  }]);

  return Timeline;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);



/***/ })

})
//# sourceMappingURL=4.9b0bc0c2bdc595b933f6.hot-update.js.map