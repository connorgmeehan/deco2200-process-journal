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
          lineNumber: 27
        },
        className: "jsx-1638684580" + " " + (this.state.className || "")
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        className: "jsx-1638684580" + " " + "title"
      }, "DECO2200 Interface Design Studio: Process Journal"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        className: "jsx-1638684580" + " " + "subtitle"
      }, "Connor G Meehan - cmee7240 - cmee7240@uni.sydney.edu.au"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        className: "jsx-1638684580" + " " + "week-container"
      }, Object.keys(this.props.posts).map(function (post) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__WeekButton__["a" /* default */], {
          id: post,
          posts: _this2.props.posts[post],
          onClick: _this2.props.buttonClicked,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        });
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "1638684580",
        css: ".timeline.jsx-1638684580{padding-top:100px;text-align:center;}.week-container.jsx-1638684580{margin:100px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:left;-ms-flex-direction:left;flex-direction:left;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;}.title.jsx-1638684580{font-size:1em;}.subtitle.jsx-1638684580{font-size:0.8em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVGltZWxpbmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0M0QixBQUcwQyxBQUlMLEFBTUUsQUFHRSxhQVJKLENBTWhCLEVBR0EsRUFic0Isa0JBQ3RCLG1EQUl1Qix3RUFDVSwySEFDakMiLCJmaWxlIjoiY29tcG9uZW50cy9UaW1lbGluZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9jb25ub3JnbS9EZXNrdG9wL3VuaS9JbnRlcmFjdGlvbiBEZXNpZ24vcHJvY2pvdXJuYWwvZnJvbnRlbmQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgV2Vla0J1dHRvbiBmcm9tICcuL1dlZWtCdXR0b24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lbGluZSBleHRlbmRzIENvbXBvbmVudHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLnBvc3RzKTtcbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9IFwidGltZWxpbmVcIjtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5hY3RpdmVXZWVrIT1udWxsKXtcbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSBcIiB0aW1lbGluZS1oaWRkZW5cIjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVcbiAgICAgICAgfVxuXG5cbiAgICB9XG5cbiAgICB3ZWVrU2VsZWN0ZWQoKXtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jbGFzc05hbWV9PlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPkRFQ08yMjAwIEludGVyZmFjZSBEZXNpZ24gU3R1ZGlvOiBQcm9jZXNzIEpvdXJuYWw8L2gxPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPkNvbm5vciBHIE1lZWhhbiAtIGNtZWU3MjQwIC0gY21lZTcyNDBAdW5pLnN5ZG5leS5lZHUuYXU8L2gyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2Vlay1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKHRoaXMucHJvcHMucG9zdHMpLm1hcCggKHBvc3QpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxXZWVrQnV0dG9uIGlkPXtwb3N0fSBwb3N0cz17dGhpcy5wcm9wcy5wb3N0c1twb3N0XX0gb25DbGljaz17dGhpcy5wcm9wcy5idXR0b25DbGlja2VkfS8+XG4gICAgICAgICAgICAgICAgICAgICkgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIC50aW1lbGluZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDoxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAud2Vlay1jb250YWluZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46MTAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpsZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5zdWJ0aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufSJdfQ== */\n/*@ sourceURL=components/Timeline.js */"
      }));
    }
  }]);

  return Timeline;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);



/***/ })

})
//# sourceMappingURL=4.9145aceab8b3235b6fdf.hot-update.js.map