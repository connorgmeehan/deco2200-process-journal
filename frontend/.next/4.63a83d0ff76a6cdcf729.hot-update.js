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
    key: "weekSelected",
    value: function weekSelected() {}
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        className: "jsx-1638684580" + " " + (this.state.className || "")
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        className: "jsx-1638684580" + " " + "title"
      }, "DECO2200 Interface Design Studio: Process Journal"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        className: "jsx-1638684580" + " " + "subtitle"
      }, "Connor G Meehan - cmee7240 - cmee7240@uni.sydney.edu.au"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        className: "jsx-1638684580" + " " + "week-container"
      }, Object.keys(this.props.posts).map(function (post) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__WeekButton__["a" /* default */], {
          id: post,
          posts: _this2.props.posts[post],
          onClick: _this2.props.buttonClicked,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        });
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "1638684580",
        css: ".timeline.jsx-1638684580{padding-top:100px;text-align:center;}.week-container.jsx-1638684580{margin:100px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:left;-ms-flex-direction:left;flex-direction:left;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;}.title.jsx-1638684580{font-size:1em;}.subtitle.jsx-1638684580{font-size:0.8em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVGltZWxpbmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUM0QixBQUcwQyxBQUlMLEFBTUUsQUFHRSxhQVJKLENBTWhCLEVBR0EsRUFic0Isa0JBQ3RCLG1EQUl1Qix3RUFDVSwySEFDakMiLCJmaWxlIjoiY29tcG9uZW50cy9UaW1lbGluZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9jb25ub3JnbS9EZXNrdG9wL3VuaS9JbnRlcmFjdGlvbiBEZXNpZ24vcHJvY2pvdXJuYWwvZnJvbnRlbmQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgV2Vla0J1dHRvbiBmcm9tICcuL1dlZWtCdXR0b24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lbGluZSBleHRlbmRzIENvbXBvbmVudHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLnBvc3RzKTtcbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9IFwidGltZWxpbmVcIjtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5hY3RpdmVXZWVrIT1udWxsKXtcbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSBcIiB0aW1lbGluZS1oaWRkZW5cIjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgd2Vla1NlbGVjdGVkKCl7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY2xhc3NOYW1lfT5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5ERUNPMjIwMCBJbnRlcmZhY2UgRGVzaWduIFN0dWRpbzogUHJvY2VzcyBKb3VybmFsPC9oMT5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwic3VidGl0bGVcIj5Db25ub3IgRyBNZWVoYW4gLSBjbWVlNzI0MCAtIGNtZWU3MjQwQHVuaS5zeWRuZXkuZWR1LmF1PC9oMj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlZWstY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyh0aGlzLnByb3BzLnBvc3RzKS5tYXAoIChwb3N0KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8V2Vla0J1dHRvbiBpZD17cG9zdH0gcG9zdHM9e3RoaXMucHJvcHMucG9zdHNbcG9zdF19IG9uQ2xpY2s9e3RoaXMucHJvcHMuYnV0dG9uQ2xpY2tlZH0vPlxuICAgICAgICAgICAgICAgICAgICApICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAudGltZWxpbmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6MTAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLndlZWstY29udGFpbmVye1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjEwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246bGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuc3VidGl0bGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn0iXX0= */\n/*@ sourceURL=components/Timeline.js */"
      }));
    }
  }]);

  return Timeline;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);



/***/ })

})
//# sourceMappingURL=4.63a83d0ff76a6cdcf729.hot-update.js.map