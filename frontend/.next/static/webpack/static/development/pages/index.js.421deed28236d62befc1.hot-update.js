webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Winrate.js":
/*!*******************************!*\
  !*** ./components/Winrate.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Winrate; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SummonerContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SummonerContext */ "./components/SummonerContext.js");
var _jsxFileName = "/Users/Fernando/Documents/Dev/React/RiotAPI/frontend/components/Winrate.js";



function Winrate(props) {
  var data = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_SummonerContext__WEBPACK_IMPORTED_MODULE_1__["SummonerContext"]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Results!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Summoner Name: ", data.summonerData.summonerName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Total Games: ", data.summonerData.totalGames), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Winrate: ", data.summonerData.winrate, "%")));
}

/***/ })

})
//# sourceMappingURL=index.js.421deed28236d62befc1.hot-update.js.map