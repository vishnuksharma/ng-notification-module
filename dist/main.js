(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _challenge_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./challenge/home/home.component */ "./src/app/challenge/home/home.component.ts");




var routes = [
    {
        path: "",
        component: _challenge_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: "home",
        component: _challenge_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        // DEFAULT PATHING
        path: "",
        redirectTo: "/",
        pathMatch: "full"
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-header></app-header>\n  <app-notification></app-notification>\n  <router-outlet></router-outlet>\n\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'notification';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _challenge_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./challenge/home/home.component */ "./src/app/challenge/home/home.component.ts");
/* harmony import */ var _challenge_directives_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./challenge/_directives/index */ "./src/app/challenge/_directives/index.ts");
/* harmony import */ var _challenge_services_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./challenge/_services/index */ "./src/app/challenge/_services/index.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _challenge_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _challenge_directives_index__WEBPACK_IMPORTED_MODULE_7__["NotificationComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            ],
            providers: [
                _challenge_services_index__WEBPACK_IMPORTED_MODULE_8__["NotificationService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/challenge/_directives/index.ts":
/*!************************************************!*\
  !*** ./src/app/challenge/_directives/index.ts ***!
  \************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _notification_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification.component */ "./src/app/challenge/_directives/notification.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return _notification_component__WEBPACK_IMPORTED_MODULE_0__["NotificationComponent"]; });




/***/ }),

/***/ "./src/app/challenge/_directives/notification.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/challenge/_directives/notification.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"notification toast-bottom-right toast-container\">\r\n    <div *ngFor=\"let alert of alerts\" class=\"{{ cssClass(alert) }} alert-dismissable toast\">\r\n        <div class=\"toast-title\">{{alert.title}}</div>\r\n        <div class=\"toast-message\">{{alert.message}}</div>\r\n        <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/challenge/_directives/notification.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/challenge/_directives/notification.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toast-center-center {\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n.toast-top-center {\n  top: 0;\n  right: 0;\n  width: 100%; }\n\n.toast-bottom-center {\n  bottom: 0;\n  right: 0;\n  width: 100%; }\n\n.toast-top-full-width {\n  top: 0;\n  right: 0;\n  width: 100%; }\n\n.toast-bottom-full-width {\n  bottom: 0;\n  right: 0;\n  width: 100%; }\n\n.toast-top-left {\n  top: 12px;\n  left: 12px; }\n\n.toast-top-right {\n  top: 12px;\n  right: 12px; }\n\n.toast-bottom-right {\n  right: 12px;\n  bottom: 12px; }\n\n.toast-bottom-left {\n  bottom: 12px;\n  left: 12px; }\n\n/* toast styles */\n\n.toast-title {\n  font-weight: bold; }\n\n.toast-message {\n  word-wrap: break-word; }\n\n.toast-message a,\n.toast-message label {\n  color: #FFFFFF; }\n\n.toast-message a:hover {\n  color: #CCCCCC;\n  text-decoration: none; }\n\n.toast-close-button {\n  position: relative;\n  right: -0.3em;\n  top: -0.3em;\n  float: right;\n  font-size: 20px;\n  font-weight: bold;\n  color: #FFFFFF;\n  text-shadow: 0 1px 0 #ffffff;\n  /* opacity: 0.8; */ }\n\n.toast-close-button:hover,\n.toast-close-button:focus {\n  color: #000000;\n  text-decoration: none;\n  cursor: pointer;\n  opacity: 0.4; }\n\n/*Additional properties for button version\r\n   iOS requires the button element instead of an anchor tag.\r\n   If you want the anchor version, it requires `href=\"#\"`.*/\n\nbutton.toast-close-button {\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0; }\n\n.toast-container {\n  pointer-events: none;\n  position: fixed;\n  z-index: 999999; }\n\n.toast-container * {\n  box-sizing: border-box; }\n\n.toast-container .toast {\n  position: relative;\n  overflow: hidden;\n  margin: 0 0 6px;\n  padding: 15px 15px 15px 50px;\n  width: 300px;\n  border-radius: 3px 3px 3px 3px;\n  background-position: 15px center;\n  background-repeat: no-repeat;\n  background-size: 24px;\n  box-shadow: 0 0 12px #999999;\n  color: #FFFFFF; }\n\n.toast-container .toast:hover {\n  box-shadow: 0 0 12px #000000;\n  opacity: 1;\n  cursor: pointer; }\n\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/info-circle.svg */\n\n.toast-info {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z'/%3E%3C/svg%3E\"); }\n\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/times-circle.svg */\n\n.toast-error {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z'/%3E%3C/svg%3E\"); }\n\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/check.svg */\n\n.toast-success {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'/%3E%3C/svg%3E\"); }\n\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/exclamation-triangle.svg */\n\n.toast-warning {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512' width='576' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'/%3E%3C/svg%3E\"); }\n\n.toast-container.toast-top-center .toast,\n.toast-container.toast-bottom-center .toast {\n  width: 300px;\n  margin-left: auto;\n  margin-right: auto; }\n\n.toast-container.toast-top-full-width .toast,\n.toast-container.toast-bottom-full-width .toast {\n  width: 96%;\n  margin-left: auto;\n  margin-right: auto; }\n\n.toast {\n  background-color: #030303;\n  pointer-events: auto; }\n\n.toast-success {\n  background-color: #51A351; }\n\n.toast-error {\n  background-color: #BD362F; }\n\n.toast-info {\n  background-color: #2F96B4; }\n\n.toast-warning {\n  background-color: #F89406; }\n\n.toast-progress {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  height: 4px;\n  background-color: #000000;\n  opacity: 0.4; }\n\n/* Responsive Design */\n\n@media all and (max-width: 240px) {\n  .toast-container .toast.div {\n    padding: 8px 8px 8px 50px;\n    width: 11em; }\n  .toast-container .toast-close-button {\n    right: -0.2em;\n    top: -0.2em; } }\n\n@media all and (min-width: 241px) and (max-width: 480px) {\n  .toast-container .toast.div {\n    padding: 8px 8px 8px 50px;\n    width: 18em; }\n  .toast-container .toast-close-button {\n    right: -0.2em;\n    top: -0.2em; } }\n\n@media all and (min-width: 481px) and (max-width: 768px) {\n  .toast-container .toast.div {\n    padding: 15px 15px 15px 50px;\n    width: 25em; } }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbGxlbmdlL19kaXJlY3RpdmVzL0Q6XFxKUy1mcmFtZXdvcmtcXG5nLW5vdGlmaWNhdGlvbi1tb2R1bGUvc3JjXFxhcHBcXGNoYWxsZW5nZVxcX2RpcmVjdGl2ZXNcXG5vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBRTtFQUNFLFNBQVE7RUFDUixVQUFTO0VBQ1QseUNBQWdDO1VBQWhDLGlDQUFnQyxFQUNqQzs7QUFDRDtFQUNFLE9BQU07RUFDTixTQUFRO0VBQ1IsWUFBVyxFQUNaOztBQUNEO0VBQ0UsVUFBUztFQUNULFNBQVE7RUFDUixZQUFXLEVBQ1o7O0FBQ0Q7RUFDRSxPQUFNO0VBQ04sU0FBUTtFQUNSLFlBQVcsRUFDWjs7QUFDRDtFQUNFLFVBQVM7RUFDVCxTQUFRO0VBQ1IsWUFBVyxFQUNaOztBQUNEO0VBQ0UsVUFBUztFQUNULFdBQVUsRUFDWDs7QUFDRDtFQUNFLFVBQVM7RUFDVCxZQUFXLEVBQ1o7O0FBQ0Q7RUFDRSxZQUFXO0VBQ1gsYUFBWSxFQUNiOztBQUNEO0VBQ0UsYUFBWTtFQUNaLFdBQVUsRUFDWDs7QUFFRCxrQkFBa0I7O0FBQ2xCO0VBQ0Usa0JBQWlCLEVBQ2xCOztBQUNEO0VBQ0Usc0JBQXFCLEVBQ3RCOztBQUNEOztFQUVFLGVBQWMsRUFDZjs7QUFDRDtFQUNFLGVBQWM7RUFDZCxzQkFBcUIsRUFDdEI7O0FBQ0Q7RUFDRSxtQkFBa0I7RUFDbEIsY0FBYTtFQUNiLFlBQVc7RUFDWCxhQUFZO0VBQ1osZ0JBQWU7RUFDZixrQkFBaUI7RUFDakIsZUFBYztFQUNkLDZCQUE0QjtFQUM1QixtQkFBbUIsRUFDcEI7O0FBQ0Q7O0VBRUUsZUFBYztFQUNkLHNCQUFxQjtFQUNyQixnQkFBZTtFQUNmLGFBQVksRUFDYjs7QUFDRDs7NERBRTBEOztBQUMxRDtFQUNFLFdBQVU7RUFDVixnQkFBZTtFQUNmLHdCQUF1QjtFQUN2QixVQUFTLEVBQ1Y7O0FBQ0Q7RUFDRSxxQkFBb0I7RUFDcEIsZ0JBQWU7RUFDZixnQkFBZSxFQUNoQjs7QUFDRDtFQUNFLHVCQUFzQixFQUN2Qjs7QUFDRDtFQUNFLG1CQUFrQjtFQUNsQixpQkFBZ0I7RUFDaEIsZ0JBQWU7RUFDZiw2QkFBNEI7RUFDNUIsYUFBWTtFQUNaLCtCQUE4QjtFQUM5QixpQ0FBZ0M7RUFDaEMsNkJBQTRCO0VBQzVCLHNCQUFxQjtFQUNyQiw2QkFBNEI7RUFDNUIsZUFBYyxFQUNmOztBQUNEO0VBQ0UsNkJBQTRCO0VBQzVCLFdBQVU7RUFDVixnQkFBZSxFQUNoQjs7QUFDRCxrSEFBa0g7O0FBQ2xIO0VBQ0Usc2xCQUFxbEIsRUFDdGxCOztBQUNELG1IQUFtSDs7QUFDbkg7RUFDRSw4akJBQTZqQixFQUM5akI7O0FBQ0QsNEdBQTRHOztBQUM1RztFQUNFLHlkQUF3ZCxFQUN6ZDs7QUFDRCwySEFBMkg7O0FBQzNIO0VBQ0UsdW9CQUFzb0IsRUFDdm9COztBQUNEOztFQUVFLGFBQVk7RUFDWixrQkFBaUI7RUFDakIsbUJBQWtCLEVBQ25COztBQUNEOztFQUVFLFdBQVU7RUFDVixrQkFBaUI7RUFDakIsbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsMEJBQXlCO0VBQ3pCLHFCQUFvQixFQUNyQjs7QUFDRDtFQUNFLDBCQUF5QixFQUMxQjs7QUFDRDtFQUNFLDBCQUF5QixFQUMxQjs7QUFDRDtFQUNFLDBCQUF5QixFQUMxQjs7QUFDRDtFQUNFLDBCQUF5QixFQUMxQjs7QUFDRDtFQUNFLG1CQUFrQjtFQUNsQixRQUFPO0VBQ1AsVUFBUztFQUNULFlBQVc7RUFDWCwwQkFBeUI7RUFDekIsYUFBWSxFQUNiOztBQUNELHVCQUF1Qjs7QUFDdkI7RUFDRTtJQUNFLDBCQUF5QjtJQUN6QixZQUFXLEVBQ1o7RUFDRDtJQUNFLGNBQWE7SUFDYixZQUFXLEVBQ1osRUFBQTs7QUFFSDtFQUNFO0lBQ0UsMEJBQXlCO0lBQ3pCLFlBQVcsRUFDWjtFQUNEO0lBQ0UsY0FBYTtJQUNiLFlBQVcsRUFDWixFQUFBOztBQUVIO0VBQ0U7SUFDRSw2QkFBNEI7SUFDNUIsWUFBVyxFQUNaLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jaGFsbGVuZ2UvX2RpcmVjdGl2ZXMvbm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAudG9hc3QtY2VudGVyLWNlbnRlciB7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIH1cclxuICAudG9hc3QtdG9wLWNlbnRlciB7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAudG9hc3QtYm90dG9tLWNlbnRlciB7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAudG9hc3QtdG9wLWZ1bGwtd2lkdGgge1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLnRvYXN0LWJvdHRvbS1mdWxsLXdpZHRoIHtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC50b2FzdC10b3AtbGVmdCB7XHJcbiAgICB0b3A6IDEycHg7XHJcbiAgICBsZWZ0OiAxMnB4O1xyXG4gIH1cclxuICAudG9hc3QtdG9wLXJpZ2h0IHtcclxuICAgIHRvcDogMTJweDtcclxuICAgIHJpZ2h0OiAxMnB4O1xyXG4gIH1cclxuICAudG9hc3QtYm90dG9tLXJpZ2h0IHtcclxuICAgIHJpZ2h0OiAxMnB4O1xyXG4gICAgYm90dG9tOiAxMnB4O1xyXG4gIH1cclxuICAudG9hc3QtYm90dG9tLWxlZnQge1xyXG4gICAgYm90dG9tOiAxMnB4O1xyXG4gICAgbGVmdDogMTJweDtcclxuICB9XHJcblxyXG4gIC8qIHRvYXN0IHN0eWxlcyAqL1xyXG4gIC50b2FzdC10aXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgLnRvYXN0LW1lc3NhZ2Uge1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIH1cclxuICAudG9hc3QtbWVzc2FnZSBhLFxyXG4gIC50b2FzdC1tZXNzYWdlIGxhYmVsIHtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gIH1cclxuICAudG9hc3QtbWVzc2FnZSBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjQ0NDQ0NDO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICAudG9hc3QtY2xvc2UtYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHJpZ2h0OiAtMC4zZW07XHJcbiAgICB0b3A6IC0wLjNlbTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAxcHggMCAjZmZmZmZmO1xyXG4gICAgLyogb3BhY2l0eTogMC44OyAqL1xyXG4gIH1cclxuICAudG9hc3QtY2xvc2UtYnV0dG9uOmhvdmVyLFxyXG4gIC50b2FzdC1jbG9zZS1idXR0b246Zm9jdXMge1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBvcGFjaXR5OiAwLjQ7XHJcbiAgfVxyXG4gIC8qQWRkaXRpb25hbCBwcm9wZXJ0aWVzIGZvciBidXR0b24gdmVyc2lvblxyXG4gICBpT1MgcmVxdWlyZXMgdGhlIGJ1dHRvbiBlbGVtZW50IGluc3RlYWQgb2YgYW4gYW5jaG9yIHRhZy5cclxuICAgSWYgeW91IHdhbnQgdGhlIGFuY2hvciB2ZXJzaW9uLCBpdCByZXF1aXJlcyBgaHJlZj1cIiNcImAuKi9cclxuICBidXR0b24udG9hc3QtY2xvc2UtYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogMDtcclxuICB9XHJcbiAgLnRvYXN0LWNvbnRhaW5lciB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDk5OTk5OTtcclxuICB9XHJcbiAgLnRvYXN0LWNvbnRhaW5lciAqIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIC50b2FzdC1jb250YWluZXIgLnRvYXN0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBtYXJnaW46IDAgMCA2cHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDE1cHggMTVweCA1MHB4O1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4IDNweCAzcHggM3B4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTVweCBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAyNHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEycHggIzk5OTk5OTtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gIH1cclxuICAudG9hc3QtY29udGFpbmVyIC50b2FzdDpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTJweCAjMDAwMDAwO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLyogaHR0cHM6Ly9naXRodWIuY29tL0ZvcnRBd2Vzb21lL0ZvbnQtQXdlc29tZS1Qcm8vYmxvYi9tYXN0ZXIvYWR2YW5jZWQtb3B0aW9ucy9yYXctc3ZnL3JlZ3VsYXIvaW5mby1jaXJjbGUuc3ZnICovXHJcbiAgLnRvYXN0LWluZm8ge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTEyIDUxMicgd2lkdGg9JzUxMicgaGVpZ2h0PSc1MTInJTNFJTNDcGF0aCBmaWxsPSdyZ2IoMjU1LDI1NSwyNTUpJyBkPSdNMjU2IDhDMTE5LjA0MyA4IDggMTE5LjA4MyA4IDI1NmMwIDEzNi45OTcgMTExLjA0MyAyNDggMjQ4IDI0OHMyNDgtMTExLjAwMyAyNDgtMjQ4QzUwNCAxMTkuMDgzIDM5Mi45NTcgOCAyNTYgOHptMCAxMTBjMjMuMTk2IDAgNDIgMTguODA0IDQyIDQycy0xOC44MDQgNDItNDIgNDItNDItMTguODA0LTQyLTQyIDE4LjgwNC00MiA0Mi00MnptNTYgMjU0YzAgNi42MjctNS4zNzMgMTItMTIgMTJoLTg4Yy02LjYyNyAwLTEyLTUuMzczLTEyLTEydi0yNGMwLTYuNjI3IDUuMzczLTEyIDEyLTEyaDEydi02NGgtMTJjLTYuNjI3IDAtMTItNS4zNzMtMTItMTJ2LTI0YzAtNi42MjcgNS4zNzMtMTIgMTItMTJoNjRjNi42MjcgMCAxMiA1LjM3MyAxMiAxMnYxMDBoMTJjNi42MjcgMCAxMiA1LjM3MyAxMiAxMnYyNHonLyUzRSUzQy9zdmclM0VcIik7XHJcbiAgfVxyXG4gIC8qIGh0dHBzOi8vZ2l0aHViLmNvbS9Gb3J0QXdlc29tZS9Gb250LUF3ZXNvbWUtUHJvL2Jsb2IvbWFzdGVyL2FkdmFuY2VkLW9wdGlvbnMvcmF3LXN2Zy9yZWd1bGFyL3RpbWVzLWNpcmNsZS5zdmcgKi9cclxuICAudG9hc3QtZXJyb3Ige1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTEyIDUxMicgd2lkdGg9JzUxMicgaGVpZ2h0PSc1MTInJTNFJTNDcGF0aCBmaWxsPSdyZ2IoMjU1LDI1NSwyNTUpJyBkPSdNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHptMTIxLjYgMzEzLjFjNC43IDQuNyA0LjcgMTIuMyAwIDE3TDMzOCAzNzcuNmMtNC43IDQuNy0xMi4zIDQuNy0xNyAwTDI1NiAzMTJsLTY1LjEgNjUuNmMtNC43IDQuNy0xMi4zIDQuNy0xNyAwTDEzNC40IDMzOGMtNC43LTQuNy00LjctMTIuMyAwLTE3bDY1LjYtNjUtNjUuNi02NS4xYy00LjctNC43LTQuNy0xMi4zIDAtMTdsMzkuNi0zOS42YzQuNy00LjcgMTIuMy00LjcgMTcgMGw2NSA2NS43IDY1LjEtNjUuNmM0LjctNC43IDEyLjMtNC43IDE3IDBsMzkuNiAzOS42YzQuNyA0LjcgNC43IDEyLjMgMCAxN0wzMTIgMjU2bDY1LjYgNjUuMXonLyUzRSUzQy9zdmclM0VcIik7XHJcbiAgfVxyXG4gIC8qIGh0dHBzOi8vZ2l0aHViLmNvbS9Gb3J0QXdlc29tZS9Gb250LUF3ZXNvbWUtUHJvL2Jsb2IvbWFzdGVyL2FkdmFuY2VkLW9wdGlvbnMvcmF3LXN2Zy9yZWd1bGFyL2NoZWNrLnN2ZyAqL1xyXG4gIC50b2FzdC1zdWNjZXNzIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDUxMiA1MTInIHdpZHRoPSc1MTInIGhlaWdodD0nNTEyJyUzRSUzQ3BhdGggZmlsbD0ncmdiKDI1NSwyNTUsMjU1KScgZD0nTTE3My44OTggNDM5LjQwNGwtMTY2LjQtMTY2LjRjLTkuOTk3LTkuOTk3LTkuOTk3LTI2LjIwNiAwLTM2LjIwNGwzNi4yMDMtMzYuMjA0YzkuOTk3LTkuOTk4IDI2LjIwNy05Ljk5OCAzNi4yMDQgMEwxOTIgMzEyLjY5IDQzMi4wOTUgNzIuNTk2YzkuOTk3LTkuOTk3IDI2LjIwNy05Ljk5NyAzNi4yMDQgMGwzNi4yMDMgMzYuMjA0YzkuOTk3IDkuOTk3IDkuOTk3IDI2LjIwNiAwIDM2LjIwNGwtMjk0LjQgMjk0LjQwMWMtOS45OTggOS45OTctMjYuMjA3IDkuOTk3LTM2LjIwNC0uMDAxeicvJTNFJTNDL3N2ZyUzRVwiKTtcclxuICB9XHJcbiAgLyogaHR0cHM6Ly9naXRodWIuY29tL0ZvcnRBd2Vzb21lL0ZvbnQtQXdlc29tZS1Qcm8vYmxvYi9tYXN0ZXIvYWR2YW5jZWQtb3B0aW9ucy9yYXctc3ZnL3JlZ3VsYXIvZXhjbGFtYXRpb24tdHJpYW5nbGUuc3ZnICovXHJcbiAgLnRvYXN0LXdhcm5pbmcge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTc2IDUxMicgd2lkdGg9JzU3NicgaGVpZ2h0PSc1MTInJTNFJTNDcGF0aCBmaWxsPSdyZ2IoMjU1LDI1NSwyNTUpJyBkPSdNNTY5LjUxNyA0NDAuMDEzQzU4Ny45NzUgNDcyLjAwNyA1NjQuODA2IDUxMiA1MjcuOTQgNTEySDQ4LjA1NGMtMzYuOTM3IDAtNTkuOTk5LTQwLjA1NS00MS41NzctNzEuOTg3TDI0Ni40MjMgMjMuOTg1YzE4LjQ2Ny0zMi4wMDkgNjQuNzItMzEuOTUxIDgzLjE1NCAwbDIzOS45NCA0MTYuMDI4ek0yODggMzU0Yy0yNS40MDUgMC00NiAyMC41OTUtNDYgNDZzMjAuNTk1IDQ2IDQ2IDQ2IDQ2LTIwLjU5NSA0Ni00Ni0yMC41OTUtNDYtNDYtNDZ6bS00My42NzMtMTY1LjM0Nmw3LjQxOCAxMzZjLjM0NyA2LjM2NCA1LjYwOSAxMS4zNDYgMTEuOTgyIDExLjM0Nmg0OC41NDZjNi4zNzMgMCAxMS42MzUtNC45ODIgMTEuOTgyLTExLjM0Nmw3LjQxOC0xMzZjLjM3NS02Ljg3NC01LjA5OC0xMi42NTQtMTEuOTgyLTEyLjY1NGgtNjMuMzgzYy02Ljg4NCAwLTEyLjM1NiA1Ljc4LTExLjk4MSAxMi42NTR6Jy8lM0UlM0Mvc3ZnJTNFXCIpO1xyXG4gIH1cclxuICAudG9hc3QtY29udGFpbmVyLnRvYXN0LXRvcC1jZW50ZXIgLnRvYXN0LFxyXG4gIC50b2FzdC1jb250YWluZXIudG9hc3QtYm90dG9tLWNlbnRlciAudG9hc3Qge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIC50b2FzdC1jb250YWluZXIudG9hc3QtdG9wLWZ1bGwtd2lkdGggLnRvYXN0LFxyXG4gIC50b2FzdC1jb250YWluZXIudG9hc3QtYm90dG9tLWZ1bGwtd2lkdGggLnRvYXN0IHtcclxuICAgIHdpZHRoOiA5NiU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB9XHJcbiAgLnRvYXN0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMzAzMDM7XHJcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcclxuICB9XHJcbiAgLnRvYXN0LXN1Y2Nlc3Mge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUxQTM1MTtcclxuICB9XHJcbiAgLnRvYXN0LWVycm9yIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNCRDM2MkY7XHJcbiAgfVxyXG4gIC50b2FzdC1pbmZvIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRjk2QjQ7XHJcbiAgfVxyXG4gIC50b2FzdC13YXJuaW5nIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGODk0MDY7XHJcbiAgfVxyXG4gIC50b2FzdC1wcm9ncmVzcyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgaGVpZ2h0OiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG4gICAgb3BhY2l0eTogMC40O1xyXG4gIH1cclxuICAvKiBSZXNwb25zaXZlIERlc2lnbiAqL1xyXG4gIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDI0MHB4KSB7XHJcbiAgICAudG9hc3QtY29udGFpbmVyIC50b2FzdC5kaXYge1xyXG4gICAgICBwYWRkaW5nOiA4cHggOHB4IDhweCA1MHB4O1xyXG4gICAgICB3aWR0aDogMTFlbTtcclxuICAgIH1cclxuICAgIC50b2FzdC1jb250YWluZXIgLnRvYXN0LWNsb3NlLWJ1dHRvbiB7XHJcbiAgICAgIHJpZ2h0OiAtMC4yZW07XHJcbiAgICAgIHRvcDogLTAuMmVtO1xyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAyNDFweCkgYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAudG9hc3QtY29udGFpbmVyIC50b2FzdC5kaXYge1xyXG4gICAgICBwYWRkaW5nOiA4cHggOHB4IDhweCA1MHB4O1xyXG4gICAgICB3aWR0aDogMThlbTtcclxuICAgIH1cclxuICAgIC50b2FzdC1jb250YWluZXIgLnRvYXN0LWNsb3NlLWJ1dHRvbiB7XHJcbiAgICAgIHJpZ2h0OiAtMC4yZW07XHJcbiAgICAgIHRvcDogLTAuMmVtO1xyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA0ODFweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAudG9hc3QtY29udGFpbmVyIC50b2FzdC5kaXYge1xyXG4gICAgICBwYWRkaW5nOiAxNXB4IDE1cHggMTVweCA1MHB4O1xyXG4gICAgICB3aWR0aDogMjVlbTtcclxuICAgIH1cclxuICB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/challenge/_directives/notification.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/challenge/_directives/notification.component.ts ***!
  \*****************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_models/index */ "./src/app/challenge/_models/index.ts");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/index */ "./src/app/challenge/_services/index.ts");




var NotificationComponent = /** @class */ (function () {
    function NotificationComponent(alertService) {
        this.alertService = alertService;
        this.alerts = [];
    }
    NotificationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.getAlert(this.id).subscribe(function (alert) {
            if (!alert.message) {
                // clear alerts when an empty alert is received
                _this.alerts = [];
                return;
            }
            // add alert to array
            _this.alerts.push(alert);
        });
    };
    NotificationComponent.prototype.removeAlert = function (alert) {
        this.alerts = this.alerts.filter(function (x) { return x !== alert; });
    };
    NotificationComponent.prototype.cssClass = function (alert) {
        if (!alert) {
            return;
        }
        // return css class based on alert type
        switch (alert.type) {
            case _models_index__WEBPACK_IMPORTED_MODULE_2__["NotificationType"].Success:
                return 'toast-success';
            case _models_index__WEBPACK_IMPORTED_MODULE_2__["NotificationType"].Error:
                return 'toast-error';
            case _models_index__WEBPACK_IMPORTED_MODULE_2__["NotificationType"].Info:
                return 'toast-info';
            case _models_index__WEBPACK_IMPORTED_MODULE_2__["NotificationType"].Warning:
                return 'toast-warning';
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NotificationComponent.prototype, "id", void 0);
    NotificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // moduleId: module.id,
            selector: 'app-notification',
            template: __webpack_require__(/*! ./notification.component.html */ "./src/app/challenge/_directives/notification.component.html"),
            styles: [__webpack_require__(/*! ./notification.component.scss */ "./src/app/challenge/_directives/notification.component.scss")]
        })
        /**
         * @class NotificationComponent : Notifying to user as notification toaster
         * @param {none}
         * @return {undefined}
         */
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_index__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/app/challenge/_models/index.ts":
/*!********************************************!*\
  !*** ./src/app/challenge/_models/index.ts ***!
  \********************************************/
/*! exports provided: Notification, NotificationType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _notification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification */ "./src/app/challenge/_models/notification.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return _notification__WEBPACK_IMPORTED_MODULE_0__["Notification"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationType", function() { return _notification__WEBPACK_IMPORTED_MODULE_0__["NotificationType"]; });




/***/ }),

/***/ "./src/app/challenge/_models/notification.ts":
/*!***************************************************!*\
  !*** ./src/app/challenge/_models/notification.ts ***!
  \***************************************************/
/*! exports provided: Notification, NotificationType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return Notification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationType", function() { return NotificationType; });
var Notification = /** @class */ (function () {
    function Notification(init) {
        Object.assign(this, init);
    }
    return Notification;
}());

var NotificationType;
(function (NotificationType) {
    NotificationType[NotificationType["Success"] = 0] = "Success";
    NotificationType[NotificationType["Error"] = 1] = "Error";
    NotificationType[NotificationType["Info"] = 2] = "Info";
    NotificationType[NotificationType["Warning"] = 3] = "Warning";
})(NotificationType || (NotificationType = {}));


/***/ }),

/***/ "./src/app/challenge/_services/index.ts":
/*!**********************************************!*\
  !*** ./src/app/challenge/_services/index.ts ***!
  \**********************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification.service */ "./src/app/challenge/_services/notification.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return _notification_service__WEBPACK_IMPORTED_MODULE_0__["NotificationService"]; });




/***/ }),

/***/ "./src/app/challenge/_services/notification.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/challenge/_services/notification.service.ts ***!
  \*************************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_notification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_models/notification */ "./src/app/challenge/_models/notification.ts");






var NotificationService = /** @class */ (function () {
    function NotificationService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.keepAfterRouteChange = false;
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                if (_this.keepAfterRouteChange) {
                    // only keep for a single route change
                    _this.keepAfterRouteChange = false;
                }
                else {
                    // clear alert messages
                    _this.clear();
                }
            }
        });
    }
    // subscribe to alerts
    NotificationService.prototype.getAlert = function (alertId) {
        // this.subject.asObservable().filter((x: Notification) => x && x.alertId === alertId);
        return this.subject.asObservable();
    };
    // convenience methods
    NotificationService.prototype.success = function (title, message) {
        this.alert(new _models_notification__WEBPACK_IMPORTED_MODULE_5__["Notification"]({ title: title, message: message, type: _models_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationType"].Success }));
    };
    NotificationService.prototype.error = function (title, message) {
        this.alert(new _models_notification__WEBPACK_IMPORTED_MODULE_5__["Notification"]({ title: title, message: message, type: _models_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationType"].Error }));
    };
    NotificationService.prototype.info = function (title, message) {
        this.alert(new _models_notification__WEBPACK_IMPORTED_MODULE_5__["Notification"]({ title: title, message: message, type: _models_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationType"].Info }));
    };
    NotificationService.prototype.warn = function (title, message) {
        this.alert(new _models_notification__WEBPACK_IMPORTED_MODULE_5__["Notification"]({ title: title, message: message, type: _models_notification__WEBPACK_IMPORTED_MODULE_5__["NotificationType"].Warning }));
    };
    // main alert method
    NotificationService.prototype.alert = function (alert) {
        this.keepAfterRouteChange = alert.keepAfterRouteChange;
        this.subject.next(alert);
    };
    // clear alerts
    NotificationService.prototype.clear = function (alertId) {
        this.subject.next(new _models_notification__WEBPACK_IMPORTED_MODULE_5__["Notification"]({ alertId: alertId }));
    };
    NotificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NotificationService);
    return NotificationService;
}());



/***/ }),

/***/ "./src/app/challenge/home/home.component.html":
/*!****************************************************!*\
  !*** ./src/app/challenge/home/home.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-wrapper mt-4\">\n    <form #notificationInput class=\"notificationInput\">\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-md-4\">\n                <div class=\"form-group has-danger\">\n                    <label for=\"title\">Title</label>\n                    <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                        <input type=\"text\" name=\"title\" class=\"form-control\"\n                               placeholder=\"Notification Title\" />\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xs-12 col-md-8\">\n                <label for=\"status\">Notification Type</label>\n                <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                    <div class=\"form-check form-check-inline\">\n                        <input class=\"form-check-input\" type=\"radio\" name=\"typeradio\" id=\"inlineRadio1\" checked value=\"success\">\n                        <label class=\"form-check-label\" for=\"inlineRadio1\"> Success </label>\n                      </div>\n                      <div class=\"form-check form-check-inline\">\n                        <input class=\"form-check-input\" type=\"radio\" name=\"typeradio\" id=\"inlineRadio2\" value=\"info\">\n                        <label class=\"form-check-label\" for=\"inlineRadio2\">Info</label>\n                      </div>\n                      <div class=\"form-check form-check-inline\">\n                        <input class=\"form-check-input\" type=\"radio\" name=\"typeradio\" id=\"inlineRadio3\" value=\"warning\">\n                        <label class=\"form-check-label\" for=\"inlineRadio3\">Warning</label>\n                      </div>\n                      <div class=\"form-check form-check-inline\">\n                          <input class=\"form-check-input\" type=\"radio\" name=\"typeradio\" id=\"inlineRadio4\" value=\"error\">\n                          <label class=\"form-check-label\" for=\"inlineRadio4\">Error</label>\n                        </div>\n                </div>\n                <!-- <div class=\"form-group\">\n                    <label for=\"price\">Timeout</label>\n                    <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                        <input type=\"number\" name=\"timeout\" class=\"form-control\"\n                               placeholder=\"0\" value=\"5000\" />\n                    </div>\n                </div> -->\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-md-8\">\n                <div class=\"form-group\">\n                    <label for=\"image\">Message</label>\n                    <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                        <textarea rows=\"2\" class=\"desc form-control\" name=\"message\" placeholder=\"Notification Message\"></textarea>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-md-12\">\n                <button (click)=\"showNotification($event)\" class=\"btn btn-success\">Show Notification</button>\n\n                <button class=\"btn btn-default ml-4\" (click)=\"clear($event)\">Clear</button>\n            </div>\n        </div>\n      </form>\n</div>\n"

/***/ }),

/***/ "./src/app/challenge/home/home.component.scss":
/*!****************************************************!*\
  !*** ./src/app/challenge/home/home.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYWxsZW5nZS9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/challenge/home/home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/challenge/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/index */ "./src/app/challenge/_services/index.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(alertService) {
        this.alertService = alertService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    /**
     *
     * @param e click event
     */
    HomeComponent.prototype.showNotification = function (e) {
        e.preventDefault();
        var title = this.notificationInput.nativeElement.title.value || "Hello world!";
        var message = this.notificationInput.nativeElement.message.value || "notification fun!";
        var notiType = this.notificationInput.nativeElement.typeradio.value || 'success';
        switch (notiType) {
            case "success":
                this.alertService.success(title, message);
                break;
            case "info":
                this.alertService.info(title, message);
                break;
            case "warning":
                this.alertService.warn(title, message);
                break;
            case "error":
                this.alertService.error(title, message);
                break;
            default:
                this.alertService.success(title, message);
                break;
        }
    };
    /**
     *
     * @param e  click event
     */
    HomeComponent.prototype.clear = function (e) {
        e.preventDefault();
        this.alertService.clear();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('notificationInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HomeComponent.prototype, "notificationInput", void 0);
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/challenge/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/challenge/home/home.component.scss")]
        })
        /**
         * @class {HomeComponent}
         */
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_index__WEBPACK_IMPORTED_MODULE_2__["NotificationService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" href=\"/\">Notification</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" routerLink=\"/home\">Home</a>\n        </li>\n      </ul>\n      <div class=\"login-reg\"></div>\n    </div>\n  </nav>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\JS-framework\ng-notification-module\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map