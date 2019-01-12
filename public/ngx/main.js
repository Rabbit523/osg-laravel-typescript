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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_components_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile/components/main.component */ "./src/app/profile/components/main.component.ts");
/* harmony import */ var _plan_components_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plan/components/main.component */ "./src/app/plan/components/main.component.ts");
/* harmony import */ var _dashboard_components_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/components/main.component */ "./src/app/dashboard/components/main.component.ts");
/* harmony import */ var _contacts_components_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contacts/components/main.component */ "./src/app/contacts/components/main.component.ts");
/* harmony import */ var _core_components_info_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/components/info/info.component */ "./src/app/core/components/info/info.component.ts");
/* harmony import */ var _core_components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/components/notifications/notifications.component */ "./src/app/core/components/notifications/notifications.component.ts");
/* harmony import */ var _experience_bank_components_main_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./experience-bank/components/main.component */ "./src/app/experience-bank/components/main.component.ts");
/* harmony import */ var _strength_standards_components_main_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./strength-standards/components/main.component */ "./src/app/strength-standards/components/main.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', component: _dashboard_components_main_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
    { path: 'calendar-builder', component: _plan_components_main_component__WEBPACK_IMPORTED_MODULE_3__["PlanBuilderComponent"] },
    { path: 'experience-bank', component: _experience_bank_components_main_component__WEBPACK_IMPORTED_MODULE_8__["ExperienceBankComponent"] },
    { path: 'strength-standards', component: _strength_standards_components_main_component__WEBPACK_IMPORTED_MODULE_9__["StrengthStandardsComponent"] },
    { path: 'program-designs', component: _core_components_info_info_component__WEBPACK_IMPORTED_MODULE_6__["InformationComponent"] },
    { path: 'contacts', component: _contacts_components_main_component__WEBPACK_IMPORTED_MODULE_5__["ContactsComponent"] },
    { path: 'profile', component: _profile_components_main_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"] },
    { path: 'profile/:handle', component: _profile_components_main_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"] },
    { path: 'notifications', component: _core_components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_7__["NotificationsComponent"] },
    { path: 'info', component: _core_components_info_info_component__WEBPACK_IMPORTED_MODULE_6__["InformationComponent"] },
    { path: 'unknown', component: _core_components_info_info_component__WEBPACK_IMPORTED_MODULE_6__["InformationComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = "<osg-navigation></osg-navigation>\n    <router-outlet></router-outlet>\n    <osg-footer></osg-footer>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_application_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/services/application.service */ "./src/app/core/services/application.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var AppComponent = /** @class */ (function () {
    function AppComponent(applicationService) {
        this.applicationService = applicationService;
        this.loaded = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.applicationService.authenticatedUser.toPromise()];
                    case 1:
                        _a.sent();
                        this.loaded = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'optimal-strength-gains',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [_core_services_application_service__WEBPACK_IMPORTED_MODULE_1__["ApplicationService"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _profile_profile_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.module */ "./src/app/profile/profile.module.ts");
/* harmony import */ var _plan_plan_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./plan/plan.module */ "./src/app/plan/plan.module.ts");
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts");
/* harmony import */ var _contacts_contacts_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contacts/contacts.module */ "./src/app/contacts/contacts.module.ts");
/* harmony import */ var _core_services_application_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/services/application.service */ "./src/app/core/services/application.service.ts");
/* harmony import */ var _core_services_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/services/auth.interceptor */ "./src/app/core/services/auth.interceptor.ts");
/* harmony import */ var _experience_bank_experience_bank_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./experience-bank/experience-bank.module */ "./src/app/experience-bank/experience-bank.module.ts");
/* harmony import */ var _strength_standards_strength_standards_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./strength-standards/strength-standards.module */ "./src/app/strength-standards/strength-standards.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
                _profile_profile_module__WEBPACK_IMPORTED_MODULE_6__["ProfileModule"],
                _plan_plan_module__WEBPACK_IMPORTED_MODULE_7__["PlanBuilderModule"],
                _experience_bank_experience_bank_module__WEBPACK_IMPORTED_MODULE_12__["ExperienceBankModule"],
                _strength_standards_strength_standards_module__WEBPACK_IMPORTED_MODULE_13__["StrengthStandardsModule"],
                _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_8__["DashboardModule"],
                _contacts_contacts_module__WEBPACK_IMPORTED_MODULE_9__["ContactsModule"]
            ],
            providers: [
                _core_services_application_service__WEBPACK_IMPORTED_MODULE_10__["ApplicationService"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _core_services_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__["AuthInterceptor"], multi: true },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contacts/components/main.component.html":
/*!*********************************************************!*\
  !*** ./src/app/contacts/components/main.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contacts/components/main.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/contacts/components/main.component.ts ***!
  \*******************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ContactsComponent = /** @class */ (function () {
    function ContactsComponent() {
    }
    ContactsComponent.prototype.ngOnInit = function () {
    };
    ContactsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-contacts',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/contacts/components/main.component.html")
        })
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "./src/app/contacts/contacts.module.ts":
/*!*********************************************!*\
  !*** ./src/app/contacts/contacts.module.ts ***!
  \*********************************************/
/*! exports provided: ContactsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsModule", function() { return ContactsModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main.component */ "./src/app/contacts/components/main.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ContactsModule = /** @class */ (function () {
    function ContactsModule() {
    }
    ContactsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_main_component__WEBPACK_IMPORTED_MODULE_2__["ContactsComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"]
            ],
            providers: [],
        })
    ], ContactsModule);
    return ContactsModule;
}());



/***/ }),

/***/ "./src/app/core/classes/user.ts":
/*!**************************************!*\
  !*** ./src/app/core/classes/user.ts ***!
  \**************************************/
/*! exports provided: ApplicationUserRole, ApplicationUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationUserRole", function() { return ApplicationUserRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationUser", function() { return ApplicationUser; });
var ApplicationUserRole;
(function (ApplicationUserRole) {
    ApplicationUserRole["PersonalTrainer"] = "PersonalTrainer";
    ApplicationUserRole["ProgramDesigner"] = "ProgramDesigner";
    ApplicationUserRole["StrengthAthlete"] = "StrengthAthlete";
})(ApplicationUserRole || (ApplicationUserRole = {}));
var ApplicationUser = /** @class */ (function () {
    function ApplicationUser(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    return ApplicationUser;
}());



/***/ }),

/***/ "./src/app/core/components/footer/footer.component.html":
/*!**************************************************************!*\
  !*** ./src/app/core/components/footer/footer.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n    <section class=\"footer-info\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-12 col-sm-8 text-center text-md-left\"> <img src=\"assets/images/logo.png\" alt=\"logo\"\n                        class=\"img-fluid d-inline-block logo-footer\">\n                    <p class=\"d-inline-block\">Copyright {{today | date: 'y'}} © Optimal Strength Gains AS. All Rights Reserved.</p>\n                </div>\n                <div class=\"col-12 col-sm-4 text-center text-md-right d-flex align-items-center\">\n                    <p class=\"m-auto\">Web Design & Web Development: <a href=\"https://fantasylab.io\" target=\"_blank\"><span>FantasyLab.</span></a></p>\n                </div>\n            </div>\n        </div>\n    </section>\n</footer>"

/***/ }),

/***/ "./src/app/core/components/footer/footer.component.ts":
/*!************************************************************!*\
  !*** ./src/app/core/components/footer/footer.component.ts ***!
  \************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.today = new Date();
    }
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/core/components/footer/footer.component.html")
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/core/components/gauge/gauge.component.html":
/*!************************************************************!*\
  !*** ./src/app/core/components/gauge/gauge.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 34.5 34.5\">\n    <path d=\"M17.25 1.34\n        a 15.9155 15.9155 0 0 1 0 31.831\n        a 15.9155 15.9155 0 0 1 0 -31.831\" fill=\"none\"\n        stroke=\"gray\" stroke-width=\"2.5\"></path>\n    <path #path class=\"animatable\" d=\"M17.25 1.34\n        a 15.9155 15.9155 0 0 1 0 31.831\n        a 15.9155 15.9155 0 0 1 0 -31.831\"\n        fill=\"none\" stroke=\"blue\" stroke-width=\"2.5\" stroke-dasharray=\"0, 100\" transform=\"rotate(180, 17.25, 17.25)\"></path>\n    <circle cx=\"17.25\" cy=\"17.25\" r=\"10\" opacity=\"0.3\"/>\n    <text x=\"50%\" y=\"50%\" text-anchor=\"middle\" font-size=\"5px\"  dy=\".3em\">{{value}}%</text>\n</svg>"

/***/ }),

/***/ "./src/app/core/components/gauge/gauge.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/components/gauge/gauge.component.ts ***!
  \**********************************************************/
/*! exports provided: GaugeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaugeComponent", function() { return GaugeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GaugeComponent = /** @class */ (function () {
    function GaugeComponent() {
        this.value = 0;
        this.opacity = 0.4;
    }
    Object.defineProperty(GaugeComponent.prototype, "css", {
        set: function (cssClass) {
            if (cssClass)
                this.cssClass = cssClass;
        },
        enumerable: true,
        configurable: true
    });
    GaugeComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { return _this.path.nativeElement.style = "stroke-dasharray: " + _this.value + "px 100px"; }, 100);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class'),
        __metadata("design:type", Object)
    ], GaugeComponent.prototype, "cssClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('path'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], GaugeComponent.prototype, "path", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], GaugeComponent.prototype, "value", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], GaugeComponent.prototype, "opacity", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], GaugeComponent.prototype, "css", null);
    GaugeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-gauge',
            template: __webpack_require__(/*! ./gauge.component.html */ "./src/app/core/components/gauge/gauge.component.html")
        })
    ], GaugeComponent);
    return GaugeComponent;
}());



/***/ }),

/***/ "./src/app/core/components/get-started/get-started.component.html":
/*!************************************************************************!*\
  !*** ./src/app/core/components/get-started/get-started.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-12\">\n        <h3>GET STARTED</h3>\n    </div>\n</div>\n\n<div class=\"articles-list\">\n    <div class=\"article brand-box\">\n        <figure>\n            <img alt=\"\" class=\"img-fluid d-block mx-auto\" src=\"/assets/images/logo.png\">\n        </figure>\n    </div>\n    <div class=\"article\">\n        <h4>CALENDAR BUILDER GUIDE</h4>\n        <a href=\"\" class=\"btn btn-yellow-gradient\">READ MORE</a>\n    </div>\n    <div class=\"article\">\n        <h4>PROGRESSION MODEL GUIDE</h4>\n        <a href=\"\" class=\"btn btn-yellow-gradient\">READ MORE</a>\n    </div>\n    <div class=\"article\">\n        <h4>ABOUT AUTO-REGULATION</h4>\n        <a href=\"\" class=\"btn btn-yellow-gradient\">READ MORE</a>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/core/components/get-started/get-started.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/core/components/get-started/get-started.component.ts ***!
  \**********************************************************************/
/*! exports provided: GetStartedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetStartedComponent", function() { return GetStartedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/classes/user */ "./src/app/core/classes/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GetStartedComponent = /** @class */ (function () {
    function GetStartedComponent() {
    }
    GetStartedComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__["ApplicationUser"])
    ], GetStartedComponent.prototype, "applicationUser", void 0);
    GetStartedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-get-started',
            template: __webpack_require__(/*! ./get-started.component.html */ "./src/app/core/components/get-started/get-started.component.html")
        })
    ], GetStartedComponent);
    return GetStartedComponent;
}());



/***/ }),

/***/ "./src/app/core/components/info/info.component.html":
/*!**********************************************************!*\
  !*** ./src/app/core/components/info/info.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/components/info/info.component.ts":
/*!********************************************************!*\
  !*** ./src/app/core/components/info/info.component.ts ***!
  \********************************************************/
/*! exports provided: InformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationComponent", function() { return InformationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var InformationComponent = /** @class */ (function () {
    function InformationComponent() {
    }
    InformationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-information',
            template: __webpack_require__(/*! ./info.component.html */ "./src/app/core/components/info/info.component.html")
        })
    ], InformationComponent);
    return InformationComponent;
}());



/***/ }),

/***/ "./src/app/core/components/navigation/navigation.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/core/components/navigation/navigation.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg fixed-top\">\n    <div class=\"container-fluid\">\n        <a class=\"navbar-brand\" routerLink=\"/\">\n            <img src=\"assets/images/logo.png\" class=\"img-fluid d-block mx-auto\" alt=\"\">\n        </a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n            aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span></span>\n            <span></span>\n            <span></span>\n        </button>\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n            <ul class=\"navbar-nav mr-auto left-menu\">\n                <li *ngIf=\"isProgramDesigner\" class=\"nav-item\" routerLinkActive=\"active\">\n                    <a class=\"nav-link\" routerLink=\"/calendar-builder\">\n                        <img src=\"assets/images/icons/icon-plan.svg\">\n                        Calendar Builder\n                    </a>\n                </li>\n\n                <li class=\"nav-item\" routerLinkActive=\"active\">\n                    <a class=\"nav-link\" routerLink=\"/experience-bank\">\n                        <img src=\"/assets/images/icons/icon-house.svg\">\n                        Experience Bank\n                    </a>\n                </li>\n\n                <li class=\"nav-item\" routerLinkActive=\"active\">\n                    <a class=\"nav-link\" routerLink=\"/strength-standards\">\n                        <img src=\"/assets/images/icons/icon-strength.svg\">\n                        Strength Standards\n                    </a>\n                </li>\n                <li class=\"nav-item\" routerLinkActive=\"active\">\n                    <a class=\"nav-link\" routerLink=\"/program-designs\">\n                        <img src=\"/assets/images/icons/icon-gear.svg\">\n                        Program Designs\n                    </a>\n                </li>\n\n                <li class=\"nav-item\" routerLinkActive=\"active\">\n                    <a class=\"nav-link\" routerLink=\"/contacts\">\n                        <img src=\"assets/images/icons/icon-contacts.svg\">\n                        Contacts\n                    </a>\n                </li>\n            </ul>\n            <ul class=\"navbar-nav ml-auto align-items-center right-menu\">\n                <li class=\"nav item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\n                    <a routerLink=\"/\" class=\"nav-link\"><img class=\"d-block mx-auto img-fluid\" src=\"assets/images/icons/icon-home.svg\"></a>\n                </li>\n                <li class=\"nav item\" routerLinkActive=\"active\">\n                    <a routerLink=\"/notifications\" class=\"nav-link\"><img class=\"d-block mx-auto img-fluid\" src=\"assets/images/icons/icon-notifications.svg\"></a>\n                </li>\n                <li class=\"nav item\" routerLinkActive=\"active\">\n                    <a routerLink=\"/info\" class=\"nav-link\"><img class=\"d-block mx-auto img-fluid\" src=\"assets/images/icons/icon-info.svg\"></a>\n                </li>\n                <li class=\"nav item\" >\n                    <a (click)=\"logout()\" class=\"nav-link\"><img class=\"d-block mx-auto img-fluid\" src=\"assets/images/icons/icon-logout.svg\"></a>\n                </li>\n                <li class=\"nav item profile\" routerLinkActive=\"active\">\n                    <a routerLink=\"/profile\" class=\"nav-link\">{{fullName}}<img class=\"img-fluid ml-3 ml-lg-2 ml-xl-3\" src=\"assets/images/icons/icon-account.svg\"></a>\n                </li>\n            </ul>\n\n            <form #logoutForm ngNoForm id=\"logout-form\" action=\"/logout\" method=\"POST\" style=\"display: none;\">\n                <input type=\"hidden\" name=\"_token\" value=\"{{csrf}}\" />\n            </form>\n        </div>\n    </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/core/components/navigation/navigation.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/core/components/navigation/navigation.component.ts ***!
  \********************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_application_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/application.service */ "./src/app/core/services/application.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _classes_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../classes/user */ "./src/app/core/classes/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(applicationService, meta) {
        this.applicationService = applicationService;
        this.meta = meta;
    }
    NavigationComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.applicationService.authenticatedUser.toPromise()];
                    case 1:
                        _a.user = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(NavigationComponent.prototype, "fullName", {
        get: function () {
            return this.user !== undefined ? this.user.name : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavigationComponent.prototype, "csrf", {
        get: function () {
            return this.meta.getTag('name=csrf-token').content;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavigationComponent.prototype, "role", {
        get: function () {
            return this.user ? this.user.role : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavigationComponent.prototype, "isPersonalTrainer", {
        get: function () {
            return this.role === _classes_user__WEBPACK_IMPORTED_MODULE_3__["ApplicationUserRole"].PersonalTrainer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavigationComponent.prototype, "isProgramDesigner", {
        get: function () {
            return this.role === _classes_user__WEBPACK_IMPORTED_MODULE_3__["ApplicationUserRole"].ProgramDesigner;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavigationComponent.prototype, "isStrengthAthlete", {
        get: function () {
            return this.role === _classes_user__WEBPACK_IMPORTED_MODULE_3__["ApplicationUserRole"].StrengthAthlete;
        },
        enumerable: true,
        configurable: true
    });
    NavigationComponent.prototype.logout = function () {
        this.logoutForm.nativeElement.submit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('logoutForm'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], NavigationComponent.prototype, "logoutForm", void 0);
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/core/components/navigation/navigation.component.html")
        }),
        __metadata("design:paramtypes", [_services_application_service__WEBPACK_IMPORTED_MODULE_1__["ApplicationService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/core/components/news-feed/news-feed-component.ts":
/*!******************************************************************!*\
  !*** ./src/app/core/components/news-feed/news-feed-component.ts ***!
  \******************************************************************/
/*! exports provided: NewsFeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsFeedComponent", function() { return NewsFeedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NewsFeedComponent = /** @class */ (function () {
    function NewsFeedComponent() {
    }
    NewsFeedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-news-feed',
            template: __webpack_require__(/*! ./news-feed.component.html */ "./src/app/core/components/news-feed/news-feed.component.html")
        })
    ], NewsFeedComponent);
    return NewsFeedComponent;
}());



/***/ }),

/***/ "./src/app/core/components/news-feed/news-feed.component.html":
/*!********************************************************************!*\
  !*** ./src/app/core/components/news-feed/news-feed.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mb-2 align-items-center\">\n    <div class=\"col text-left\"><h3>newsfeed</h3></div>\n    <div class=\"col text-right\"><a href=\"\" class=\"edit\"><img src=\"/assets/images/icons/icon-pencil.svg\" class=\"img-fluid\" alt=\"\"></a></div>\n</div>\n\n<div class=\"post-creator\">\n    <div class=\"comment\">\n        <div class=\"row no-gutters align-items-center\">\n            <div class=\"col-auto\">\n                <figure>\n                    <img src=\"/assets/images/icons/icon-account-gray.png\" class=\"img-fluid d-block mx-auto\" />\n                </figure>\n            </div>\n            <div class=\"col\"><textarea class=\"message\" name=\"\" id=\"\" cols=\"30\" rows=\"2\" placeholder=\"What’s on your mind?\"></textarea></div>\n        </div>\n    </div>\n    <div class=\"actions\">\n        <div class=\"row align-items-center\">\n            <div class=\"col-12 col-sm-12 col-lg-7\">\n                <a href=\"\" class=\"add-media\"><img src=\"/assets/images/icons/icon-camera.png\" class=\"img-fluid mr-1\" alt=\"\">Photo/Video</a>\n            </div>\n            <div class=\"col-12 col-sm-12 col-lg-5 mt-3 mt-lg-0\">\n                <a href=\"\" class=\"btn btn-block btn-black\">POST</a>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"post\">\n    <div class=\"content\">\n        <div class=\"author\">\n            <div class=\"row no-gutters align-items-center\">\n                <div class=\"col-auto mr-2\">\n                    <figure>\n                        <img src=\"/assets/images/icons/icon-account-gray.png\" class=\"img-fluid d-block mx-auto\" />\n                    </figure>\n                </div>\n                <div class=\"col-8 col-sm-8 col-md-6 col-lg-8\">\n                    <div class=\"summary\">\n                        <a href=\"#\">Sara Smith</a>\n                        <span>30 minutes ago</span>\n                    </div>\n                </div>\n                <div class=\"col text-right\">\n                    <a href=\"javascript:void(0)\" class=\"toggle-popover\" data-toggle=\"collapse\" href=\"#popover-id-1\" role=\"button\" aria-expanded=\"false\" aria-controls=\"popover\"><i class=\"fa fa-ellipsis-h\" aria-hidden=\"true\"></i></a>\n                </div>\n                <div class=\"collapse popover-menu\" id=\"popover-id-1\">\n                    <ul>\n                        <li><a href=\"\">Turn off notifications</a></li>\n                        <li><a href=\"\">Edit post</a></li>\n                        <li><a href=\"\">Delete</a></li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <div class=\"post-content\">\n            <p>The GVT programe is awesome. I really respond well to the big training volume. </p>\n        </div>\n    </div>\n    <div class=\"comments-box\">\n        <div class=\"comment\">\n            <div class=\"row no-gutters\">\n                <div class=\"col-auto mr-2\">\n                    <figure>\n                        <img src=\"/assets/images/icons/icon-account-gray.png\" class=\"img-fluid d-block mx-auto\" />\n                    </figure>\n                </div>\n                <div class=\"col\">\n                    <div class=\"speech-bubble\">\n                        <div class=\"comment-container\">\n                                <a href=\"#\">Nohman Janjua</a>\n                                <p>Pictures looks awesome yo, next session is going to be lit!</p>\n                        </div>\n                        <span>30 minutes ago</span>\n                    </div>\n                </div>\n                <div class=\"col-auto align-self-center\">\n                    <a href=\"\" class=\"toggle-popover\" data-toggle=\"collapse\" href=\"#popover-id-comment-1\" role=\"button\" aria-expanded=\"false\" aria-controls=\"popover\"><i class=\"fa fa-ellipsis-h\" aria-hidden=\"true\"></i></a>\n                </div>\n                <div class=\"collapse popover-menu\" id=\"popover-id-comment-1\">\n                    <ul>\n                        <li><a href=\"\">Turn off notifications</a></li>\n                        <li><a href=\"\">Edit post</a></li>\n                        <li><a href=\"\">Delete</a></li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"comment-creator\">\n            <div class=\"row no-gutters align-items-center\">\n                <div class=\"col-auto mr-3\">\n                    <figure>\n                        <img src=\"/assets/images/icons/icon-account-gray.png\" class=\"img-fluid d-block mx-auto\" />\n                    </figure>\n                </div>\n                <div class=\"col\">\n                    <div class=\"input-container\">\n                        <input type=\"text\" placeholder=\"Write a comment\" />\n                        <a href=\"\" class=\"add-media\"><img src=\"/assets/images/icons/icon-camera.png\" class=\"img-fluid\" alt=\"\"></a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"post\">\n    <div class=\"content\">\n        <div class=\"author\">\n            <div class=\"row no-gutters align-items-center\">\n                <div class=\"col-auto mr-2\">\n                    <figure>\n                        <img src=\"/assets/images/icons/icon-account-gray.png\" class=\"img-fluid d-block mx-auto\" />\n                    </figure>\n                </div>\n                <div class=\"col-8 col-sm-8 col-md-6 col-lg-8\">\n                    <div class=\"summary\">\n                        <a href=\"#\">Nohman Janjua</a>\n                        <span>30 minutes ago</span>\n                    </div>\n                </div>\n                <div class=\"col text-right\">\n                    <a href=\"javascript:void(0)\" class=\"toggle-popover\" data-toggle=\"collapse\" href=\"#popover-id-2\" role=\"button\" aria-expanded=\"false\" aria-controls=\"popover\"><i class=\"fa fa-ellipsis-h\" aria-hidden=\"true\"></i></a>\n                </div>\n                <div class=\"collapse popover-menu\" id=\"popover-id-2\">\n                    <ul>\n                        <li><a href=\"\">Turn off notifications</a></li>\n                        <li><a href=\"\">Edit post</a></li>\n                        <li><a href=\"\">Delete</a></li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <div class=\"post-content\">\n            <p>The weights are getting heavier little by little thanks to the autoregulation function!</p>\n            <div class=\"row\">\n                <div class=\"col-12 col-sm-4\">\n                    <img src=\"/assets/images/feed-img-1.jpg\" class=\"img-fluid mx-auto d-block\" alt=\"\">\n                </div>\n                <div class=\"col-12 col-sm-4\">\n                    <img src=\"/assets/images/feed-img-2.jpg\" class=\"img-fluid mx-auto d-block\" alt=\"\">\n                </div>\n                <div class=\"col-12 col-sm-4\">\n                    <img src=\"/assets/images/feed-img-3.jpg\" class=\"img-fluid mx-auto d-block\" alt=\"\">\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"comments-box\">\n        <div class=\"comment-creator\">\n            <div class=\"row no-gutters align-items-center\">\n                <div class=\"col-auto mr-3\">\n                    <figure>\n                        <img src=\"/assets/images/icons/icon-account-gray.png\" class=\"img-fluid d-block mx-auto\" />\n                    </figure>\n                </div>\n                <div class=\"col\">\n                    <div class=\"input-container\">\n                        <input type=\"text\" placeholder=\"Write a comment\" />\n                        <a href=\"\" class=\"add-media\"><img src=\"/assets/images/icons/icon-camera.png\" class=\"img-fluid\" alt=\"\"></a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"post\">\n    <div class=\"content\">\n        <div class=\"author\">\n            <div class=\"row no-gutters align-items-center\">\n                <div class=\"col-auto mr-2\">\n                    <figure>\n                        <img src=\"/assets/images/icons/icon-account-gray.png\" class=\"img-fluid d-block mx-auto\" />\n                    </figure>\n                </div>\n                <div class=\"col-8 col-sm-8 col-md-6 col-lg-8\">\n                    <div class=\"summary\">\n                        <a href=\"#\">Nohman Janjua</a>\n                        <span>30 minutes ago</span>\n                    </div>\n                </div>\n                <div class=\"col text-right\">\n                    <a href=\"javascript:void(0)\" class=\"toggle-popover\" data-toggle=\"collapse\" href=\"#popover-id-3\" role=\"button\" aria-expanded=\"false\" aria-controls=\"popover\"><i class=\"fa fa-ellipsis-h\" aria-hidden=\"true\"></i></a>\n                </div>\n                <div class=\"collapse popover-menu\" id=\"popover-id-3\">\n                    <ul>\n                        <li><a href=\"\">Turn off notifications</a></li>\n                        <li><a href=\"\">Edit post</a></li>\n                        <li><a href=\"\">Delete</a></li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <div class=\"post-content\">\n            <p>Video from todays chest workout. Can PT Nohman Janjua please give me feedback on my bench press technique?</p>\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <img src=\"/assets/images/feed-img-4.jpg\" class=\"d-block img-fluid\" alt=\"\">\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"comments-box\">\n        <div class=\"comment-creator\">\n            <div class=\"row no-gutters align-items-center\">\n                <div class=\"col-auto mr-3\">\n                    <figure>\n                        <img src=\"/assets/images/icons/icon-account-gray.png\" class=\"img-fluid d-block mx-auto\" />\n                    </figure>\n                </div>\n                <div class=\"col\">\n                    <div class=\"input-container\">\n                        <input type=\"text\" placeholder=\"Write a comment\" />\n                        <a href=\"\" class=\"add-media\"><img src=\"/assets/images/icons/icon-camera.png\" class=\"img-fluid\" alt=\"\"></a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/core/components/notifications/notifications.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/core/components/notifications/notifications.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/components/notifications/notifications.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/core/components/notifications/notifications.component.ts ***!
  \**************************************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent() {
    }
    NotificationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-notifications',
            template: __webpack_require__(/*! ./notifications.component.html */ "./src/app/core/components/notifications/notifications.component.html")
        })
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/navigation/navigation.component */ "./src/app/core/components/navigation/navigation.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/core/components/footer/footer.component.ts");
/* harmony import */ var _components_news_feed_news_feed_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/news-feed/news-feed-component */ "./src/app/core/components/news-feed/news-feed-component.ts");
/* harmony import */ var _components_get_started_get_started_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/get-started/get-started.component */ "./src/app/core/components/get-started/get-started.component.ts");
/* harmony import */ var _components_info_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/info/info.component */ "./src/app/core/components/info/info.component.ts");
/* harmony import */ var _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/notifications/notifications.component */ "./src/app/core/components/notifications/notifications.component.ts");
/* harmony import */ var _components_gauge_gauge_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/gauge/gauge.component */ "./src/app/core/components/gauge/gauge.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var components = [
    _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__["NavigationComponent"],
    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
    _components_news_feed_news_feed_component__WEBPACK_IMPORTED_MODULE_5__["NewsFeedComponent"],
    _components_get_started_get_started_component__WEBPACK_IMPORTED_MODULE_6__["GetStartedComponent"],
    _components_info_info_component__WEBPACK_IMPORTED_MODULE_7__["InformationComponent"],
    _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_8__["NotificationsComponent"],
    _components_gauge_gauge_component__WEBPACK_IMPORTED_MODULE_9__["GaugeComponent"]
];
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: components,
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            exports: components,
            providers: [],
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/services/application.service.ts":
/*!******************************************************!*\
  !*** ./src/app/core/services/application.service.ts ***!
  \******************************************************/
/*! exports provided: ApplicationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationService", function() { return ApplicationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApplicationService = /** @class */ (function () {
    function ApplicationService(http, meta) {
        this.http = http;
        this.meta = meta;
        this.baseUrl = '/api';
        this.apiToken = this.meta.getTag('name=api-token');
    }
    Object.defineProperty(ApplicationService.prototype, "token", {
        get: function () {
            return this.apiToken.content;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationService.prototype, "options", {
        get: function () {
            return {
                observe: 'response',
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'Authentication': "Bearer " + this.apiToken.content
                })
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationService.prototype, "authenticatedUser", {
        get: function () {
            var _this = this;
            var observable;
            if (this.applicationUser) {
                observable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
                    observer.next(_this.applicationUser);
                    observer.complete();
                });
            }
            else {
                observable = this.http.get(this.baseUrl + "/user");
                observable.subscribe(function (u) { return _this.applicationUser = u; });
            }
            return observable;
        },
        enumerable: true,
        configurable: true
    });
    ApplicationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"]])
    ], ApplicationService);
    return ApplicationService;
}());



/***/ }),

/***/ "./src/app/core/services/auth.interceptor.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/auth.interceptor.ts ***!
  \***************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _application_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./application.service */ "./src/app/core/services/application.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(applicationService) {
        this.applicationService = applicationService;
    }
    AuthInterceptor.prototype.intercept = function (request, next) {
        var token = this.applicationService.token;
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + token
                }
            });
        }
        return next.handle(request);
    };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_application_service__WEBPACK_IMPORTED_MODULE_1__["ApplicationService"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/dashboard/components/main.component.html":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/components/main.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/components/main.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/components/main.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-dashboard',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/dashboard/components/main.component.html")
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main.component */ "./src/app/dashboard/components/main.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_main_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"]
            ],
            providers: [],
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/experience-bank/components/enter-information/enter-information.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/experience-bank/components/enter-information/enter-information.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Enter your information</h2>\n\n<div class=\"row mb-4\">\n    <div class=\"col-12 col-sm-6 col-md-4\">\n        <div class=\"checbox-dropdown\">\n            <div class=\"checkbox custom-checkbox\">\n                <label>\n                    <input type=\"checkbox\" value=\"\">\n                    <span class=\"checkmark\"></span>\n                </label>\n            </div>\n            <div class=\"dropdown black-dropdown with-label\">\n                <label for=\"\">Gender</label>\n                <button class=\"btn dropdown-toggle btn-block\" type=\"button\" id=\"dropdownMenuButton1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Male\n                </button>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton1\">\n                    <a class=\"dropdown-item\" href=\"#\">Male</a>\n                    <a class=\"dropdown-item\" href=\"#\">Female</a>\n                </div>\n            </div>\n        </div>\n    </div>\n    \n    <div class=\"col-12 col-sm-6 col-md-4\">\n        <div class=\"checbox-dropdown\">\n            <div class=\"checkbox custom-checkbox\">\n                <label>\n                    <input type=\"checkbox\" value=\"\">\n                    <span class=\"checkmark\"></span>\n                </label>\n            </div>\n            <div class=\"dropdown black-dropdown with-label\">\n                <label for=\"\">Body Weight (kg)</label>\n                <button class=\"btn dropdown-toggle btn-block\" type=\"button\" id=\"dropdownMenuButton2\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">0-50\n                </button>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton2\">\n                    <a class=\"dropdown-item\" href=\"#\">0-50</a>\n                    <a class=\"dropdown-item\" href=\"#\">51-60</a>\n                    <a class=\"dropdown-item\" href=\"#\">61-70</a>\n                    <a class=\"dropdown-item\" href=\"#\">71-80</a>\n                    <a class=\"dropdown-item\" href=\"#\">81-90</a>\n                    <a class=\"dropdown-item\" href=\"#\">91-100</a>\n                    <a class=\"dropdown-item\" href=\"#\">101-110</a>\n                    <a class=\"dropdown-item\" href=\"#\">111-120</a>\n                    <a class=\"dropdown-item\" href=\"#\">121-160</a>\n                </div>\n            </div>\n        </div>\n    </div>\n    \n    <div class=\"col-12 col-sm-6 col-md-4\">\n        <div class=\"checbox-dropdown\">\n            <div class=\"checkbox custom-checkbox\">\n                <label>\n                    <input type=\"checkbox\" value=\"\">\n                    <span class=\"checkmark\"></span>\n                </label>\n            </div>\n            <div class=\"dropdown black-dropdown with-label\">\n                <label for=\"\">Height</label>\n                <button class=\"btn dropdown-toggle btn-block\" type=\"button\" id=\"dropdownMenuButton3\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">0-150\n                </button>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton3\">\n                    <a class=\"dropdown-item\" href=\"#\">0-150 </a>\n                    <a class=\"dropdown-item\" href=\"#\">151-160</a>\n                    <a class=\"dropdown-item\" href=\"#\">161-170</a>\n                    <a class=\"dropdown-item\" href=\"#\">171-180</a>\n                    <a class=\"dropdown-item\" href=\"#\">181-190</a>\n                    <a class=\"dropdown-item\" href=\"#\">191-200</a>\n                    <a class=\"dropdown-item\" href=\"#\">201-210</a>\n                    <a class=\"dropdown-item\" href=\"#\">211-220</a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-12 col-sm-6 col-md-4\">\n        <div class=\"checbox-dropdown\">\n            <div class=\"checkbox custom-checkbox\">\n                <label>\n                    <input type=\"checkbox\" value=\"\">\n                    <span class=\"checkmark\"></span>\n                </label>\n            </div>\n            <div class=\"dropdown black-dropdown with-label\">\n                <label for=\"\">Waist-Hip Ratio</label>\n                <button class=\"btn dropdown-toggle btn-block\" type=\"button\" id=\"dropdownMenuButton4\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">0,71-0,80</button>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton4\">\n                    <a class=\"dropdown-item\" href=\"#\">0,71-0,80</a>\n                    <a class=\"dropdown-item\" href=\"#\">0.81-0,90</a>\n                    <a class=\"dropdown-item\" href=\"#\">0,91-1,00</a>\n                    <a class=\"dropdown-item\" href=\"#\">1,01-1,10</a>\n                    <a class=\"dropdown-item\" href=\"#\">1,11-1,20</a>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-12 col-sm-6 col-md-4\">\n        <div class=\"checbox-dropdown\">\n            <div class=\"checkbox custom-checkbox\">\n                <label>\n                    <input type=\"checkbox\" value=\"\">\n                    <span class=\"checkmark\"></span>\n                </label>\n            </div>\n            <div class=\"dropdown black-dropdown with-label\">\n                <label for=\"\">Age (years)</label>\n                <button class=\"btn dropdown-toggle btn-block\" type=\"button\" id=\"dropdownMenuButton5\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">0-20</button>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton5\">\n                    <a class=\"dropdown-item\" href=\"#\">0-20</a>\n                    <a class=\"dropdown-item\" href=\"#\">21-30</a>\n                    <a class=\"dropdown-item\" href=\"#\">31-40</a>\n                    <a class=\"dropdown-item\" href=\"#\">41-50</a>\n                    <a class=\"dropdown-item\" href=\"#\">51-60</a>\n                    <a class=\"dropdown-item\" href=\"#\">61-80</a>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-12 col-sm-6 col-md-4\">\n        <div class=\"checbox-dropdown\">\n            <div class=\"checkbox custom-checkbox\">\n                <label>\n                    <input type=\"checkbox\" value=\"\">\n                    <span class=\"checkmark\"></span>\n                </label>\n            </div>\n            <div class=\"dropdown black-dropdown with-label\">\n                <label for=\"\">Muscle Fiber Type</label>\n                <button class=\"btn dropdown-toggle btn-block\" type=\"button\" id=\"dropdownMenuButton6\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">0-20</button>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton6\">\n                    <a class=\"dropdown-item\" href=\"#\">Slow twitch</a>\n                    <a class=\"dropdown-item\" href=\"#\">Fast twitch</a>\n                    <a class=\"dropdown-item\" href=\"#\">Fast and slow twitch</a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"actions\">\n    <div class=\"col-12 col-lg-8\">\n        <div class=\"results\">\n            <h4>Results: </h4>\n            <p>Male<span>x</span></p>\n        </div>\n    </div>\n    <div class=\"col-12 col-lg-3 mt-2 mt-lg-0 text-center text-lg-right\">\n        <a href=\"\" class=\"btn btn-yellow-gradient py-2 btn-block\">DONE</a>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/experience-bank/components/enter-information/enter-information.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/experience-bank/components/enter-information/enter-information.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ExperienceBankEnterInformation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceBankEnterInformation", function() { return ExperienceBankEnterInformation; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExperienceBankEnterInformation = /** @class */ (function () {
    function ExperienceBankEnterInformation() {
        this.title = '';
    }
    ExperienceBankEnterInformation.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ExperienceBankEnterInformation.prototype, "title", void 0);
    ExperienceBankEnterInformation = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-experience-bank-enter-information',
            template: __webpack_require__(/*! ./enter-information.component.html */ "./src/app/experience-bank/components/enter-information/enter-information.component.html")
        })
    ], ExperienceBankEnterInformation);
    return ExperienceBankEnterInformation;
}());



/***/ }),

/***/ "./src/app/experience-bank/components/main.component.html":
/*!****************************************************************!*\
  !*** ./src/app/experience-bank/components/main.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"main-title\">\n        <h1>EXPERIENCE BANK</h1>\n        <span>SEARCH: TOP 3 PROGRAMS</span>\n    </div>\n    <osg-experience-bank-enter-information></osg-experience-bank-enter-information>\n    <osg-experience-bank-muscle-group-table></osg-experience-bank-muscle-group-table>\n</div>"

/***/ }),

/***/ "./src/app/experience-bank/components/main.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/experience-bank/components/main.component.ts ***!
  \**************************************************************/
/*! exports provided: ExperienceBankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceBankComponent", function() { return ExperienceBankComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ExperienceBankComponent = /** @class */ (function () {
    function ExperienceBankComponent() {
    }
    ExperienceBankComponent.prototype.ngOnInit = function () {
    };
    ExperienceBankComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-experience-bank',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/experience-bank/components/main.component.html")
        })
    ], ExperienceBankComponent);
    return ExperienceBankComponent;
}());



/***/ }),

/***/ "./src/app/experience-bank/components/muscle-group/muscle-group-table.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/experience-bank/components/muscle-group/muscle-group-table.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"muscle-group-table\">\n  <div class=\"cell muscle\">\n    <div class=\"title\">Main muscle group</div>\n    <div class=\"content\">\n      <h4>Chest</h4>\n    </div>\n  </div>\n  <div class=\"cell exercise\">\n    <div class=\"title\">Test Exercise</div>\n    <div class=\"content\">\n      <div class=\"dropdown\">\n        <button class=\"btn btn-border dropdown-toggle btn-block\" type=\"button\" id=\"dropdownMenuButton1\" data-toggle=\"dropdown\"\n          aria-haspopup=\"true\" aria-expanded=\"false\">Bench press</button>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton1\">\n          <a class=\"dropdown-item\" href=\"#\">0-50</a>\n          <a class=\"dropdown-item\" href=\"#\">51-60</a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"cell program\">\n    <div class=\"title\">Best Programs</div>\n    <div class=\"content\">\n      <ol>\n        <li>German Volme Training</li>\n        <li>Starting Strength</li>\n        <li>Ladder Strength</li>\n      </ol>\n    </div>\n  </div>\n  <div class=\"cell increase\">\n    <div class=\"title\">% Increase (1RM)</div>\n    <div class=\"content\">\n      <ol>\n        <li>5.10 %</li>\n        <li>5.10 %</li>\n        <li>5.10 %</li>\n      </ol>\n    </div>\n  </div>\n</div>\n\n<div class=\"muscle-group-table\">\n  <div class=\"cell muscle\">\n    <div class=\"title\">Main muscle group</div>\n    <div class=\"content\">\n      <h4>Back</h4>\n    </div>\n  </div>\n  <div class=\"cell exercise\">\n    <div class=\"title\">Test Exercise</div>\n    <div class=\"content\">\n      <div class=\"dropdown\">\n        <button class=\"btn btn-border dropdown-toggle btn-block\" type=\"button\" id=\"dropdownMenuButton1\" data-toggle=\"dropdown\"\n          aria-haspopup=\"true\" aria-expanded=\"false\">Dead lift</button>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton1\">\n          <a class=\"dropdown-item\" href=\"#\">0-50</a>\n          <a class=\"dropdown-item\" href=\"#\">51-60</a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"cell program\">\n    <div class=\"title\">Best Programs</div>\n    <div class=\"content\">\n      <ol>\n        <li>German Volme Training</li>\n        <li>Starting Strength</li>\n        <li>Ladder Strength</li>\n      </ol>\n    </div>\n  </div>\n  <div class=\"cell increase\">\n    <div class=\"title\">% Increase (1RM)</div>\n    <div class=\"content\">\n      <ol>\n        <li>5.10 %</li>\n        <li>5.10 %</li>\n        <li>5.10 %</li>\n      </ol>\n    </div>\n  </div>\n</div>\n\n<div class=\"muscle-group-table\">\n  <div class=\"cell muscle\">\n    <div class=\"title\">Main muscle group</div>\n    <div class=\"content\">\n      <h4>Shoulders</h4>\n    </div>\n  </div>\n  <div class=\"cell exercise\">\n    <div class=\"title\">Test Exercise</div>\n    <div class=\"content\">\n      <div class=\"dropdown\">\n        <button class=\"btn btn-border dropdown-toggle btn-block\" type=\"button\" id=\"dropdownMenuButton1\" data-toggle=\"dropdown\"\n          aria-haspopup=\"true\" aria-expanded=\"false\">Seated Barbell show...</button>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton1\">\n          <a class=\"dropdown-item\" href=\"#\">0-50</a>\n          <a class=\"dropdown-item\" href=\"#\">51-60</a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"cell program\">\n    <div class=\"title\">Best Programs</div>\n    <div class=\"content\">\n      <ol>\n        <li>German Volme Training</li>\n        <li>Starting Strength</li>\n        <li>Ladder Strength</li>\n      </ol>\n    </div>\n  </div>\n  <div class=\"cell increase\">\n    <div class=\"title\">% Increase (1RM)</div>\n    <div class=\"content\">\n      <ol>\n        <li>5.10 %</li>\n        <li>5.10 %</li>\n        <li>5.10 %</li>\n      </ol>\n    </div>\n  </div>\n</div>\n\n<div class=\"muscle-group-table\">\n  <div class=\"cell muscle\">\n    <div class=\"title\">Main muscle group</div>\n    <div class=\"content\">\n      <h4>Quads</h4>\n    </div>\n  </div>\n  <div class=\"cell exercise\">\n    <div class=\"title\">Test Exercise</div>\n    <div class=\"content\">\n      <div class=\"dropdown\">\n        <button class=\"btn btn-border dropdown-toggle btn-block\" type=\"button\" id=\"dropdownMenuButton1\" data-toggle=\"dropdown\"\n          aria-haspopup=\"true\" aria-expanded=\"false\">Squat</button>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton1\">\n          <a class=\"dropdown-item\" href=\"#\">0-50</a>\n          <a class=\"dropdown-item\" href=\"#\">51-60</a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"cell program\">\n    <div class=\"title\">Best Programs</div>\n    <div class=\"content\">\n      <ol>\n        <li>German Volme Training</li>\n        <li>Starting Strength</li>\n        <li>Ladder Strength</li>\n      </ol>\n    </div>\n  </div>\n  <div class=\"cell increase\">\n    <div class=\"title\">% Increase (1RM)</div>\n    <div class=\"content\">\n      <ol>\n        <li>5.10 %</li>\n        <li>5.10 %</li>\n        <li>5.10 %</li>\n      </ol>\n    </div>\n  </div>\n</div>\n\n<div class=\"muscle-group-table\">\n  <div class=\"cell muscle\">\n    <div class=\"title\">Main muscle group</div>\n    <div class=\"content\">\n      <h4>Hamstreings</h4>\n    </div>\n  </div>\n  <div class=\"cell exercise\">\n    <div class=\"title\">Test Exercise</div>\n    <div class=\"content\">\n      <div class=\"dropdown\">\n        <button class=\"btn btn-border dropdown-toggle btn-block\" type=\"button\" id=\"dropdownMenuButton1\" data-toggle=\"dropdown\"\n          aria-haspopup=\"true\" aria-expanded=\"false\">Seated Leg Curl</button>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton1\">\n          <a class=\"dropdown-item\" href=\"#\">0-50</a>\n          <a class=\"dropdown-item\" href=\"#\">51-60</a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"cell program\">\n    <div class=\"title\">Best Programs</div>\n    <div class=\"content\">\n      <ol>\n        <li>German Volme Training</li>\n        <li>Starting Strength</li>\n        <li>Ladder Strength</li>\n      </ol>\n    </div>\n  </div>\n  <div class=\"cell increase\">\n    <div class=\"title\">% Increase (1RM)</div>\n    <div class=\"content\">\n      <ol>\n        <li>5.10 %</li>\n        <li>5.10 %</li>\n        <li>5.10 %</li>\n      </ol>\n    </div>\n  </div>\n</div>\n\n<div class=\"muscle-group-table\">\n    <div class=\"cell muscle\">\n        <div class=\"title\">Main muscle group</div>\n        <div class=\"content\">\n            <h4>Calves</h4>\n        </div>\n    </div>\n    <div class=\"cell exercise\">\n        <div class=\"title\">Test Exercise</div>\n        <div class=\"content\">\n            <div class=\"dropdown\">\n                <button class=\"btn btn-border dropdown-toggle btn-block\" type=\"button\" id=\"dropdownMenuButton1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Standing Calf Raises</button>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton1\">\n                    <a class=\"dropdown-item\" href=\"#\">0-50</a>\n                    <a class=\"dropdown-item\" href=\"#\">51-60</a>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"cell program\">\n        <div class=\"title\">Best Programs</div>\n        <div class=\"content\">\n            <ol>\n            <li>German Volme Training</li> \n            <li>Starting Strength</li>\n            <li>Ladder Strength</li>\n            </ol>\n        </div>\n    </div>\n    <div class=\"cell increase\">\n        <div class=\"title\">% Increase (1RM)</div>\n        <div class=\"content\">\n            <ol>\n                <li>5.10 %</li>\n                <li>5.10 %</li>\n                <li>5.10 %</li>\n            </ol>\n        </div>\n    </div>\n</div>\n\n<div class=\"muscle-group-table\">\n    <div class=\"cell muscle\">\n        <div class=\"title\">Main muscle group</div>\n        <div class=\"content\">\n            <h4>Biceps</h4>\n        </div>\n    </div>\n    <div class=\"cell exercise\">\n        <div class=\"title\">Test Exercise</div>\n        <div class=\"content\">\n            <div class=\"dropdown\">\n                <button class=\"btn btn-border dropdown-toggle btn-block\" type=\"button\" id=\"dropdownMenuButton1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Barbell Scott Curl</button>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton1\">\n                    <a class=\"dropdown-item\" href=\"#\">0-50</a>\n                    <a class=\"dropdown-item\" href=\"#\">51-60</a>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"cell program\">\n        <div class=\"title\">Best Programs</div>\n        <div class=\"content\">\n            <ol>\n            <li>German Volme Training</li> \n            <li>Starting Strength</li>\n            <li>Ladder Strength</li>\n            </ol>\n        </div>\n    </div>\n    <div class=\"cell increase\">\n        <div class=\"title\">% Increase (1RM)</div>\n        <div class=\"content\">\n            <ol>\n                <li>5.10 %</li>\n                <li>5.10 %</li>\n                <li>5.10 %</li>\n            </ol>\n        </div>\n    </div>\n</div>\n\n<div class=\"muscle-group-table\">\n    <div class=\"cell muscle\">\n        <div class=\"title\">Main muscle group</div>\n        <div class=\"content\">\n            <h4>Tricep</h4>\n        </div>\n    </div>\n    <div class=\"cell exercise\">\n        <div class=\"title\">Test Exercise</div>\n        <div class=\"content\">\n            <div class=\"dropdown\">\n                <button class=\"btn btn-border dropdown-toggle btn-block\" type=\"button\" id=\"dropdownMenuButton1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Cumbell Skull Crusher</button>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton1\">\n                    <a class=\"dropdown-item\" href=\"#\">0-50</a>\n                    <a class=\"dropdown-item\" href=\"#\">51-60</a>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"cell program\">\n        <div class=\"title\">Best Programs</div>\n        <div class=\"content\">\n            <ol>\n            <li>German Volme Training</li> \n            <li>Starting Strength</li>\n            <li>Ladder Strength</li>\n            </ol>\n        </div>\n    </div>\n    <div class=\"cell increase\">\n        <div class=\"title\">% Increase (1RM)</div>\n        <div class=\"content\">\n            <ol>\n                <li>5.10 %</li>\n                <li>5.10 %</li>\n                <li>5.10 %</li>\n            </ol>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/experience-bank/components/muscle-group/muscle-group-table.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/experience-bank/components/muscle-group/muscle-group-table.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ExperienceBankMuscleGroupTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceBankMuscleGroupTable", function() { return ExperienceBankMuscleGroupTable; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExperienceBankMuscleGroupTable = /** @class */ (function () {
    function ExperienceBankMuscleGroupTable() {
        this.title = '';
    }
    ExperienceBankMuscleGroupTable.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ExperienceBankMuscleGroupTable.prototype, "title", void 0);
    ExperienceBankMuscleGroupTable = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-experience-bank-muscle-group-table',
            template: __webpack_require__(/*! ./muscle-group-table.component.html */ "./src/app/experience-bank/components/muscle-group/muscle-group-table.component.html")
        })
    ], ExperienceBankMuscleGroupTable);
    return ExperienceBankMuscleGroupTable;
}());



/***/ }),

/***/ "./src/app/experience-bank/experience-bank.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/experience-bank/experience-bank.module.ts ***!
  \***********************************************************/
/*! exports provided: ExperienceBankModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceBankModule", function() { return ExperienceBankModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _components_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/main.component */ "./src/app/experience-bank/components/main.component.ts");
/* harmony import */ var _components_enter_information_enter_information_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/enter-information/enter-information.component */ "./src/app/experience-bank/components/enter-information/enter-information.component.ts");
/* harmony import */ var _components_muscle_group_muscle_group_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/muscle-group/muscle-group-table.component */ "./src/app/experience-bank/components/muscle-group/muscle-group-table.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ExperienceBankModule = /** @class */ (function () {
    function ExperienceBankModule() {
    }
    ExperienceBankModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_main_component__WEBPACK_IMPORTED_MODULE_3__["ExperienceBankComponent"],
                _components_enter_information_enter_information_component__WEBPACK_IMPORTED_MODULE_4__["ExperienceBankEnterInformation"],
                _components_muscle_group_muscle_group_table_component__WEBPACK_IMPORTED_MODULE_5__["ExperienceBankMuscleGroupTable"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_2__["CoreModule"]
            ],
            providers: [],
        })
    ], ExperienceBankModule);
    return ExperienceBankModule;
}());



/***/ }),

/***/ "./src/app/plan/components/calendar-builder/calendar/calendar.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/plan/components/calendar-builder/calendar/calendar.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Calendar:</h2>\n<div class=\"container-box\">\n    <div class=\"subtitle\">\n        <h3>Saved workouts</h3>\n    </div>\n    <div class=\"workouts-list\">\n        <div class=\"workout\">workout <span>1</span><p>CHEST / SHOULDERS / TRICPES</p></div>\n        <div class=\"workout\">workout <span>2</span><p>CHEST / SHOULDERS / TRICPES</p></div>\n        <div class=\"workout\">workout <span>3</span><p>CHEST / SHOULDERS / TRICPES</p></div>\n    </div>\n    <div class=\"table-responsive\">\n        <table class=\"table\">\n            <thead>\n                <tr>\n                    <th>Week</th>\n                    <th>MON</th>\n                    <th>Tue</th>\n                    <th>Wed</th>\n                    <th>Thu</th>\n                    <th>Fri</th>\n                    <th>Sat</th>\n                    <th>Sun</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>1</td>\n                    <td><span>1</span></td>\n                    <td></td>\n                    <td><span>2</span></td>\n                    <td></td>\n                    <td><span>3</span></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>2</td>\n                    <td><span>1</span></td>\n                    <td></td>\n                    <td><span>2</span></td>\n                    <td></td>\n                    <td><span>3</span></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>3</td>\n                    <td><span>1</span></td>\n                    <td></td>\n                    <td><span>2</span></td>\n                    <td></td>\n                    <td><span>3</span></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>4</td>\n                    <td><span>1</span></td>\n                    <td></td>\n                    <td><span>2</span></td>\n                    <td></td>\n                    <td><span>3</span></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>5</td>\n                    <td><span>1</span></td>\n                    <td></td>\n                    <td><span>2</span></td>\n                    <td></td>\n                    <td><span>3</span></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>6</td>\n                    <td><span>1</span></td>\n                    <td></td>\n                    <td><span>2</span></td>\n                    <td></td>\n                    <td><span>3</span></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>7</td>\n                    <td><span>1</span></td>\n                    <td></td>\n                    <td><span>2</span></td>\n                    <td></td>\n                    <td><span>3</span></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>8</td>\n                    <td><span>1</span></td>\n                    <td></td>\n                    <td><span>2</span></td>\n                    <td></td>\n                    <td><span>3</span></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <div class=\"actions\">\n        <a href=\"\" class=\"btn btn-black\"><span>+</span> ADD WEEK</a>\n        <a href=\"\" class=\"btn btn-gray\">REMOVE WEEK</a>\n    </div>\n    <div class=\"calendar-info\">\n        <p class=\"program\"><span>PROGRAM NAME:</span> GERMAN VOLUME TRAINING </p>\n        <p class=\"category\"><span>CATEGORY  NAME:</span> HYPERTROPHY </p>\n        <p class=\"description\"><span>Description:</span> Lorem ipsum dolor sit amet consectetur... <a href=\"\">Show more</a> </p>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/plan/components/calendar-builder/calendar/calendar.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/plan/components/calendar-builder/calendar/calendar.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PlanBuilderCalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanBuilderCalendarComponent", function() { return PlanBuilderCalendarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/classes/user */ "./src/app/core/classes/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlanBuilderCalendarComponent = /** @class */ (function () {
    function PlanBuilderCalendarComponent() {
    }
    PlanBuilderCalendarComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__["ApplicationUser"])
    ], PlanBuilderCalendarComponent.prototype, "applicationUser", void 0);
    PlanBuilderCalendarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-plan-builder-calendar',
            template: __webpack_require__(/*! ./calendar.component.html */ "./src/app/plan/components/calendar-builder/calendar/calendar.component.html")
        })
    ], PlanBuilderCalendarComponent);
    return PlanBuilderCalendarComponent;
}());



/***/ }),

/***/ "./src/app/plan/components/calendar-builder/exercises/exercises.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/plan/components/calendar-builder/exercises/exercises.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Exercises:</h2>\n\n<div class=\"search-form\">\n    <div class=\"form-group\">\n        <input type=\"text\" placeholder=\"Search: Exercises, Muscle Group\" class=\"form-control\">\n    </div>\n</div>\n\n<div class=\"exercises-list\">\n    <h3>MULTI JOINT EXERCISES:</h3>\n    <div class=\"exercise\">\n        <figure>\n            <img src=\"/assets/images/exercise-img.png\" class=\"mx-auto d-block mb-1\" alt=\"\">\n            <h4>Squats</h4>\n        </figure>\n    </div>\n    <div class=\"exercise\">\n        <figure>\n            <img src=\"/assets/images/exercise-img.png\" class=\"mx-auto d-block mb-1\" alt=\"\">\n            <h4>FRONT SQUATS</h4>\n        </figure>\n    </div>\n    <div class=\"exercise\">\n        <figure>\n            <img src=\"/assets/images/exercise-img.png\" class=\"mx-auto d-block mb-1\" alt=\"\">\n            <h4>Squats</h4>\n        </figure>\n    </div>\n    <div class=\"exercise\">\n        <figure>\n            <img src=\"/assets/images/exercise-img.png\" class=\"mx-auto d-block mb-1\" alt=\"\">\n            <h4>FRONT SQUATS</h4>\n        </figure>\n    </div>\n\n    <div class=\"exercise\">\n        <figure>\n            <img src=\"/assets/images/exercise-img.png\" class=\"mx-auto d-block mb-1\" alt=\"\">\n            <h4>Squats</h4>\n        </figure>\n    </div>\n    <div class=\"exercise\">\n        <figure>\n            <img src=\"/assets/images/exercise-img.png\" class=\"mx-auto d-block mb-1\" alt=\"\">\n            <h4>FRONT SQUATS</h4>\n        </figure>\n    </div>\n</div>\n\n<div class=\"exercises-list\">\n    <h3>SINGLE JOINT EXERCISES:</h3>\n    <div class=\"exercise\">\n        <figure>\n            <img src=\"/assets/images/exercise-img.png\" class=\"mx-auto d-block mb-1\" alt=\"\">\n            <h4>Leg Extension</h4>\n        </figure>\n    </div>\n    <div class=\"exercise\">\n        <figure>\n            <img src=\"/assets/images/exercise-img.png\" class=\"mx-auto d-block mb-1\" alt=\"\">\n            <h4>Single Leg Extencions</h4>\n        </figure>\n    </div>\n    <div class=\"exercise\">\n        <figure> \n            <img src=\"/assets/images/exercise-img.png\" class=\"mx-auto d-block mb-1\" alt=\"\">\n            <h4>Single Leg Extencions</h4>\n        </figure>\n    </div>\n    <div class=\"exercise\">\n        <figure>\n            <img src=\"/assets/images/exercise-img.png\" class=\"mx-auto d-block mb-1\" alt=\"\">\n            <h4>Single Leg Extencions</h4>\n        </figure>\n    </div>\n\n    <div class=\"exercise\">\n        <figure>\n            <img src=\"/assets/images/exercise-img.png\" class=\"mx-auto d-block mb-1\" alt=\"\">\n            <h4>Single Leg Extencions</h4>\n        </figure>\n    </div>\n    <div class=\"exercise\">\n        <figure>\n            <img src=\"/assets/images/exercise-img.png\" class=\"mx-auto d-block mb-1\" alt=\"\">\n            <h4>Single Leg Extencions</h4>\n        </figure>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/plan/components/calendar-builder/exercises/exercises.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/plan/components/calendar-builder/exercises/exercises.component.ts ***!
  \***********************************************************************************/
/*! exports provided: PlanBuilderExercisesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanBuilderExercisesComponent", function() { return PlanBuilderExercisesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/classes/user */ "./src/app/core/classes/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlanBuilderExercisesComponent = /** @class */ (function () {
    function PlanBuilderExercisesComponent() {
    }
    PlanBuilderExercisesComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__["ApplicationUser"])
    ], PlanBuilderExercisesComponent.prototype, "applicationUser", void 0);
    PlanBuilderExercisesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-plan-builder-exercises',
            template: __webpack_require__(/*! ./exercises.component.html */ "./src/app/plan/components/calendar-builder/exercises/exercises.component.html")
        })
    ], PlanBuilderExercisesComponent);
    return PlanBuilderExercisesComponent;
}());



/***/ }),

/***/ "./src/app/plan/components/calendar-builder/main.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/plan/components/calendar-builder/main.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <h1>THE WORKOUT & CALENDAR BUILDER</h1>\n    <div class=\"clearfix\"></div>\n    <div class=\"row\">\n        <osg-plan-builder-exercises></osg-plan-builder-exercises>\n        <osg-plan-builder-workout></osg-plan-builder-workout>\n        <osg-plan-builder-calendar></osg-plan-builder-calendar>\n    </div>\n    <div class=\"row\">\n        <div class=\"general-actions text-right\">\n            <a href=\"\" class=\"btn btn-black py-2 px-4\"> <img src=\"/assets/images/icons/icon-save.svg\" alt=\"\"> SAVE\n                PROGRAM</a>\n            <a href=\"\" class=\"btn btn-green-gradient btn-next py-2 pl-3 mt-3 mt-sm-0\"> NEXT : PROGRESSION BUILDER</a>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/plan/components/calendar-builder/main.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/plan/components/calendar-builder/main.component.ts ***!
  \********************************************************************/
/*! exports provided: CalendarBuilderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarBuilderComponent", function() { return CalendarBuilderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CalendarBuilderComponent = /** @class */ (function () {
    function CalendarBuilderComponent() {
    }
    CalendarBuilderComponent.prototype.ngOnInit = function () {
    };
    CalendarBuilderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-calendar-builder',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/plan/components/calendar-builder/main.component.html")
        })
    ], CalendarBuilderComponent);
    return CalendarBuilderComponent;
}());



/***/ }),

/***/ "./src/app/plan/components/calendar-builder/workouts/workouts.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/plan/components/calendar-builder/workouts/workouts.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Workouts:</h2>\n<div class=\"container-box\">\n    <div class=\"subtitle\">\n        <h3>Workout <span>3</span></h3>\n    </div>\n    <div class=\"table-responsive\">\n        <table class=\"table\">\n            <thead>\n                <tr>\n                    <th>Exercise</th>\n                    <th colspan=\"2\">Volume</th>\n                    <th colspan=\"2\">Intensity</th>\n                    <th colspan=\"3\"></th>\n                </tr>\n                <tr>\n                    <th></th>\n                    <th>Set</th>\n                    <th>Reps</th>\n                    <th>RTF</th>\n                    <th>% of 1 rm</th>\n                    <th>Method</th>\n                    <th>Rest period</th>\n                    <th>Tempo</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>SQUATS</td>\n                    <td>1</td>\n                    <td>12</td>\n                    <td>@ 1</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td></td>\n                    <td>2</td>\n                    <td>12</td>\n                    <td>@ 5</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td></td>\n                    <td colspan=\"7\">\n                        <a href=\"\" class=\"add\"><span>+</span> Add set</a>\n                        <a href=\"\" class=\"remove\"><span>-</span> Remove set</a>\n                    </td>\n                </tr>\n\n\n                <tr>\n                    <td>Lunges</td>\n                    <td>1</td>\n                    <td></td>\n                    <td>@</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td></td>\n                    <td>2</td>\n                    <td></td>\n                    <td>@</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td></td>\n                    <td>3</td>\n                    <td></td>\n                    <td>@</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td></td>\n                    <td colspan=\"7\">\n                        <a href=\"\" class=\"add\"><span>+</span> Add set</a>\n                        <a href=\"\" class=\"remove\"><span>-</span> Remove set</a>\n                    </td>\n                </tr>\n\n                <tr>\n                    <td>Leg Extension</td>\n                    <td>1</td>\n                    <td></td>\n                    <td>@</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td></td>\n                    <td>2</td>\n                    <td></td>\n                    <td>@</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td></td>\n                    <td>3</td>\n                    <td></td>\n                    <td>@</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td></td>\n                    <td colspan=\"7\">\n                        <a href=\"\" class=\"add\"><span>+</span> Add set</a>\n                        <a href=\"\" class=\"remove\"><span>-</span> Remove set</a>\n                    </td>\n                </tr>\n\n                <tr>\n                    <td>Leg Extension</td>\n                    <td>1</td>\n                    <td></td>\n                    <td>@</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td></td>\n                    <td>2</td>\n                    <td></td>\n                    <td>@</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td></td>\n                    <td>3</td>\n                    <td></td>\n                    <td>@</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td></td>\n                    <td colspan=\"7\">\n                        <a href=\"\" class=\"add\"><span>+</span> Add set</a>\n                        <a href=\"\" class=\"remove\"><span>-</span> Remove set</a>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <div class=\"actions\">\n        <div class=\"row justify-content-between\">\n            <div class=\"col-12 col-sm-12 col-xl-8\">\n                <a href=\"\" class=\"btn btn-black\"><span>+</span> ADD EXERCISE</a>\n                <a href=\"\" class=\"btn btn-gray\">REMOVE EXERCISE</a>\n            </div>\n            <div class=\"col-12 col-sm-12 col-xl-4 text-center text-sm-right mt-4 mt-sm-0\">\n                <a href=\"\" class=\"btn btn-black\"> <img src=\"/assets/images/icons/icon-save.svg\" alt=\"\"> SAVE WORKOUT</a>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/plan/components/calendar-builder/workouts/workouts.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/plan/components/calendar-builder/workouts/workouts.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PlanBuilderWorkoutsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanBuilderWorkoutsComponent", function() { return PlanBuilderWorkoutsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/classes/user */ "./src/app/core/classes/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlanBuilderWorkoutsComponent = /** @class */ (function () {
    function PlanBuilderWorkoutsComponent() {
    }
    PlanBuilderWorkoutsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__["ApplicationUser"])
    ], PlanBuilderWorkoutsComponent.prototype, "applicationUser", void 0);
    PlanBuilderWorkoutsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-plan-builder-workout',
            template: __webpack_require__(/*! ./workouts.component.html */ "./src/app/plan/components/calendar-builder/workouts/workouts.component.html")
        })
    ], PlanBuilderWorkoutsComponent);
    return PlanBuilderWorkoutsComponent;
}());



/***/ }),

/***/ "./src/app/plan/components/main.component.html":
/*!*****************************************************!*\
  !*** ./src/app/plan/components/main.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<osg-calendar-builder *ngIf=\"isBuildingCalendar\"></osg-calendar-builder>\n<osg-progression-builder *ngIf=\"isBuildingProgress\"></osg-progression-builder>\n\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <hr>\n            <osg-get-started></osg-get-started>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/plan/components/main.component.ts":
/*!***************************************************!*\
  !*** ./src/app/plan/components/main.component.ts ***!
  \***************************************************/
/*! exports provided: PlanBuilderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanBuilderComponent", function() { return PlanBuilderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PlanBuilderComponent = /** @class */ (function () {
    function PlanBuilderComponent() {
    }
    PlanBuilderComponent.prototype.ngOnInit = function () {
        this.step = PlanBuilderStep.ProgressionBuilder;
    };
    Object.defineProperty(PlanBuilderComponent.prototype, "isBuildingCalendar", {
        get: function () {
            return this.step === PlanBuilderStep.CalendarBuilder;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlanBuilderComponent.prototype, "isBuildingProgress", {
        get: function () {
            return this.step === PlanBuilderStep.ProgressionBuilder;
        },
        enumerable: true,
        configurable: true
    });
    PlanBuilderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-plan-builder',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/plan/components/main.component.html")
        })
    ], PlanBuilderComponent);
    return PlanBuilderComponent;
}());

var PlanBuilderStep;
(function (PlanBuilderStep) {
    PlanBuilderStep[PlanBuilderStep["CalendarBuilder"] = 0] = "CalendarBuilder";
    PlanBuilderStep[PlanBuilderStep["ProgressionBuilder"] = 1] = "ProgressionBuilder";
})(PlanBuilderStep || (PlanBuilderStep = {}));


/***/ }),

/***/ "./src/app/plan/components/progression-builder/main.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/plan/components/progression-builder/main.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1>THE PROGRESSION BUILDER</h1>\n    <div class=\"general-actions\">\n        <div class=\"col-12 col-sm-6\">\n            <a href=\"\" class=\"btn btn-gray btn-back py-2 pr-3 mt-3 mt-sm-0\"> BACK: TO CALENDAR BUILDER</a>\n        </div>\n        <div class=\"col-12 col-sm-6 text-right\">\n            <a href=\"\" class=\"btn btn-black py-2 px-4\"> <img src=\"/assets/images/icons/icon-save.svg\" alt=\"\"> SAVE PROGRAM</a>\n            <a href=\"\" class=\"btn btn-green-gradient py-2 px-4 ml-2\">PUBLISH PROGRAM</a>\n        </div>\n    </div>\n    <hr>\n    <osg-progression-builder-progressive-overload-graph></osg-progression-builder-progressive-overload-graph>\n    <osg-progression-builder-training-program></osg-progression-builder-training-program>\n    <osg-progression-builder-program-design></osg-progression-builder-program-design>\n\n    <div class=\"general-actions\">\n        <div class=\"col-12 col-sm-6\">\n            <a href=\"\" class=\"btn btn-gray btn-back py-2 pr-3 mt-3 mt-sm-0\"> BACK: TO CALENDAR BUILDER</a>\n        </div>\n        <div class=\"col-12 col-sm-6 text-right\">\n            <a href=\"\" class=\"btn btn-black py-2 px-4\"> <img src=\"/assets/images/icons/icon-save.svg\" alt=\"\"> SAVE PROGRAM</a>\n            <a href=\"\" class=\"btn btn-green-gradient py-2 px-4 ml-2\">PUBLISH PROGRAM</a>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/plan/components/progression-builder/main.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/plan/components/progression-builder/main.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProgressionBuilderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressionBuilderComponent", function() { return ProgressionBuilderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProgressionBuilderComponent = /** @class */ (function () {
    function ProgressionBuilderComponent() {
    }
    ProgressionBuilderComponent.prototype.ngOnInit = function () {
    };
    ProgressionBuilderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-progression-builder',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/plan/components/progression-builder/main.component.html")
        })
    ], ProgressionBuilderComponent);
    return ProgressionBuilderComponent;
}());



/***/ }),

/***/ "./src/app/plan/components/progression-builder/program-design/program-design.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/plan/components/progression-builder/program-design/program-design.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Program design:</h2>\n\n<div class=\"table-program-design\">\n  <div class=\"table-responsive\">\n    <table class=\"table\">\n      <tbody>\n        <tr>\n          <td rowspan=\"2\">Muscle Group</td>\n          <td rowspan=\"2\">Test Exercise</td>\n          <td rowspan=\"2\">Type of exercise Level 1</td>\n          <td rowspan=\"2\">Exercises Level 2</td>\n          <td colspan=\"2\" class=\"blue\">Volume</td>\n          <td colspan=\"2\" class=\"red\">Intensity</td>\n          <td rowspan=\"2\" class=\"green\">Frequency (muscle group per week)</td>\n          <td rowspan=\"2\">Progression model</td>\n          <td rowspan=\"2\">Rest periods (min-max)</td>\n          <td rowspan=\"2\">Tempo (all)</td>\n        </tr>\n        <tr>\n          <td class=\"blue\">Reps (min-max)</td>\n          <td class=\"blue\">Volume pr week (setxreps)</td>\n          <td class=\"red\">% of 1RM (min-max)</td>\n          <td class=\"red\">Reps to failure (min-max)</td>\n        </tr>\n        <!--  -->\n        <tr>\n          <td rowspan=\"2\">Chest</td>\n          <td rowspan=\"2\">Bench Press</td>\n          <td>Multi joint exercises</td>\n          <td></td>\n          <td class=\"blue\"></td>\n          <td class=\"blue\"></td>\n          <td class=\"red\"></td>\n          <td class=\"red\"></td>\n          <td class=\"green\"></td>\n          <td></td>\n          <td></td>\n          <td></td>\n        </tr>\n        <tr>\n          <td>Single joint exercises</td>\n          <td></td>\n          <td class=\"blue\"></td>\n          <td class=\"blue\"></td>\n          <td class=\"red\"></td>\n          <td class=\"red\"></td>\n          <td class=\"green\"></td>\n          <td></td>\n          <td></td>\n          <td></td>\n        </tr>\n        <!--  -->\n        <tr>\n          <td rowspan=\"2\">Back</td>\n          <td rowspan=\"2\">Deadlift</td>\n          <td>Multi joint exercises</td>\n          <td></td>\n          <td class=\"blue\"></td>\n          <td class=\"blue\"></td>\n          <td class=\"red\"></td>\n          <td class=\"red\"></td>\n          <td class=\"green\"></td>\n          <td></td>\n          <td></td>\n          <td></td>\n        </tr>\n        <tr>\n          <td>Single joint exercises</td>\n          <td></td>\n          <td class=\"blue\"></td>\n          <td class=\"blue\"></td>\n          <td class=\"red\"></td>\n          <td class=\"red\"></td>\n          <td class=\"green\"></td>\n          <td></td>\n          <td></td>\n          <td></td>\n        </tr>\n        <!--  -->\n        <tr>\n          <td rowspan=\"2\">Quads</td>\n          <td rowspan=\"2\">Squat</td>\n          <td>Multi joint exercises</td>\n          <td></td>\n          <td class=\"blue\"></td>\n          <td class=\"blue\"></td>\n          <td class=\"red\"></td>\n          <td class=\"red\"></td>\n          <td class=\"green\"></td>\n          <td></td>\n          <td></td>\n          <td></td>\n        </tr>\n        <tr>\n          <td>Single joint exercises</td>\n          <td></td>\n          <td class=\"blue\"></td>\n          <td class=\"blue\"></td>\n          <td class=\"red\"></td>\n          <td class=\"red\"></td>\n          <td class=\"green\"></td>\n          <td></td>\n          <td></td>\n          <td></td>\n        </tr>\n        <!--  -->\n        <tr>\n          <td rowspan=\"2\">Shoulders</td>\n          <td rowspan=\"2\"></td>\n          <td>Multi joint exercises</td>\n          <td></td>\n          <td class=\"blue\"></td>\n          <td class=\"blue\"></td>\n          <td class=\"red\"></td>\n          <td class=\"red\"></td>\n          <td class=\"green\"></td>\n          <td></td>\n          <td></td>\n          <td></td>\n        </tr>\n        <tr>\n          <td>Single joint exercises</td>\n          <td></td>\n          <td class=\"blue\"></td>\n          <td class=\"blue\"></td>\n          <td class=\"red\"></td>\n          <td class=\"red\"></td>\n          <td class=\"green\"></td>\n          <td></td>\n          <td></td>\n          <td></td>\n        </tr>\n        <!--  -->\n        <tr>\n          <td rowspan=\"2\">Hamstrings</td>\n          <td rowspan=\"2\"></td>\n          <td>Multi joint exercises</td>\n          <td></td>\n          <td class=\"blue\"></td>\n          <td class=\"blue\"></td>\n          <td class=\"red\"></td>\n          <td class=\"red\"></td>\n          <td class=\"green\"></td>\n          <td></td>\n          <td></td>\n          <td></td>\n        </tr>\n        <tr>\n          <td>Single joint exercises</td>\n          <td></td>\n          <td class=\"blue\"></td>\n          <td class=\"blue\"></td>\n          <td class=\"red\"></td>\n          <td class=\"red\"></td>\n          <td class=\"green\"></td>\n          <td></td>\n          <td></td>\n          <td></td>\n        </tr>\n        <!--  -->\n        <tr>\n          <td rowspan=\"2\">Calves</td>\n          <td rowspan=\"2\"></td>\n          <td>Multi joint exercises</td>\n          <td></td>\n          <td class=\"blue\"></td>\n          <td class=\"blue\"></td>\n          <td class=\"red\"></td>\n          <td class=\"red\"></td>\n          <td class=\"green\"></td>\n          <td></td>\n          <td></td>\n          <td></td>\n        </tr>\n        <tr>\n          <td>Single joint exercises</td>\n          <td></td>\n          <td class=\"blue\"></td>\n          <td class=\"blue\"></td>\n          <td class=\"red\"></td>\n          <td class=\"red\"></td>\n          <td class=\"green\"></td>\n          <td></td>\n          <td></td>\n          <td></td>\n        </tr>\n        <!--  -->\n        <tr>\n          <td rowspan=\"2\">Triceps</td>\n          <td rowspan=\"2\"></td>\n          <td>Multi joint exercises</td>\n          <td></td>\n          <td class=\"blue\"></td>\n          <td class=\"blue\"></td>\n          <td class=\"red\"></td>\n          <td class=\"red\"></td>\n          <td class=\"green\"></td>\n          <td></td>\n          <td></td>\n          <td></td>\n        </tr>\n        <tr>\n          <td>Single joint exercises</td>\n          <td></td>\n          <td class=\"blue\"></td>\n          <td class=\"blue\"></td>\n          <td class=\"red\"></td>\n          <td class=\"red\"></td>\n          <td class=\"green\"></td>\n          <td></td>\n          <td></td>\n          <td></td>\n        </tr>\n        <!--  -->\n        <tr>\n          <td rowspan=\"2\">Biceps</td>\n          <td rowspan=\"2\"></td>\n          <td>Multi joint exercises</td>\n          <td></td>\n          <td class=\"blue\"></td>\n          <td class=\"blue\"></td>\n          <td class=\"red\"></td>\n          <td class=\"red\"></td>\n          <td class=\"green\"></td>\n          <td></td>\n          <td></td>\n          <td></td>\n        </tr>\n        <tr>\n          <td>Single joint exercises</td>\n          <td></td>\n          <td class=\"blue\"></td>\n          <td class=\"blue\"></td>\n          <td class=\"red\"></td>\n          <td class=\"red\"></td>\n          <td class=\"green\"></td>\n          <td></td>\n          <td></td>\n          <td></td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/plan/components/progression-builder/program-design/program-design.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/plan/components/progression-builder/program-design/program-design.component.ts ***!
  \************************************************************************************************/
/*! exports provided: ProgressionBuilderProgramDesignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressionBuilderProgramDesignComponent", function() { return ProgressionBuilderProgramDesignComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/classes/user */ "./src/app/core/classes/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProgressionBuilderProgramDesignComponent = /** @class */ (function () {
    function ProgressionBuilderProgramDesignComponent() {
    }
    ProgressionBuilderProgramDesignComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__["ApplicationUser"])
    ], ProgressionBuilderProgramDesignComponent.prototype, "applicationUser", void 0);
    ProgressionBuilderProgramDesignComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-progression-builder-program-design',
            template: __webpack_require__(/*! ./program-design.component.html */ "./src/app/plan/components/progression-builder/program-design/program-design.component.html")
        })
    ], ProgressionBuilderProgramDesignComponent);
    return ProgressionBuilderProgramDesignComponent;
}());



/***/ }),

/***/ "./src/app/plan/components/progression-builder/progressive-overload-graph/progressive-overload-graph.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/plan/components/progression-builder/progressive-overload-graph/progressive-overload-graph.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>PROGRESSIVE OVERLOAD GRAPH</h2>\n<div class=\"graph\">\n    <div><!-- Graph --></div>\n    <div class=\"conventions\">\n        <div class=\"dropdown\">\n            <p>Muscle Group:</p>\n            <button class=\"btn btn-border dropdown-toggle btn-block\" type=\"button\" id=\"dropdownMenuButton1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Chest</button>\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton1\">\n                <a class=\"dropdown-item\" href=\"#\">Back</a>\n                <a class=\"dropdown-item\" href=\"#\">Shoulder</a>\n            </div>\n        </div>\n        <p class=\"volume\"><span></span>Volume (set x reps)</p>\n        <p class=\"intensity\"><span></span>Intensity (% of 1 RM)</p>\n        <p class=\"volume-load\"><span></span>Volume Load (set x reps x load)</p>\n        <p class=\"frequency\"><span></span>Frequency (sessions per week)</p>\n        <div class=\"control-slider\">\n            <a href=\"\" class=\"btn-control prev\"><i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i></a>\n            <a href=\"\" class=\"btn-control next\"><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i></a>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/plan/components/progression-builder/progressive-overload-graph/progressive-overload-graph.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/plan/components/progression-builder/progressive-overload-graph/progressive-overload-graph.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: ProgressionBuilderProgressiveOverloadGraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressionBuilderProgressiveOverloadGraphComponent", function() { return ProgressionBuilderProgressiveOverloadGraphComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/classes/user */ "./src/app/core/classes/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProgressionBuilderProgressiveOverloadGraphComponent = /** @class */ (function () {
    function ProgressionBuilderProgressiveOverloadGraphComponent() {
    }
    ProgressionBuilderProgressiveOverloadGraphComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__["ApplicationUser"])
    ], ProgressionBuilderProgressiveOverloadGraphComponent.prototype, "applicationUser", void 0);
    ProgressionBuilderProgressiveOverloadGraphComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-progression-builder-progressive-overload-graph',
            template: __webpack_require__(/*! ./progressive-overload-graph.component.html */ "./src/app/plan/components/progression-builder/progressive-overload-graph/progressive-overload-graph.component.html")
        })
    ], ProgressionBuilderProgressiveOverloadGraphComponent);
    return ProgressionBuilderProgressiveOverloadGraphComponent;
}());



/***/ }),

/***/ "./src/app/plan/components/progression-builder/training-program/training-program.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/plan/components/progression-builder/training-program/training-program.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">\n  <div class=\"row align-items-center mb-3\">\n    <div class=\"col-12 col-sm-8\">\n      <h2>The Training Program</h2>\n    </div>\n    <div class=\"col-12 col-sm-4 text-right\">\n      <div class=\"control-slider\">\n        <a href=\"\" class=\"btn-control search\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></a>\n        <a href=\"\" class=\"btn-control prev\"><i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i></a>\n        <a href=\"\" class=\"btn-control next\"><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i></a>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"training-program-wrapper\"><!-- for test before JS (margin-left: -650px or -1300px... etc) -->\n  <div class=\"thead\">\n    <div class=\"row no-gutters\">\n      <div class=\"week\">\n        Week\n      </div>\n      <div class=\"day\">\n        Monday\n      </div>\n      <div class=\"day\">\n        Thuesday\n      </div>\n      <div class=\"day\">\n        WEDNESDAY\n      </div>\n      <div class=\"day\">\n        Thursday\n      </div>\n      <div class=\"day\">\n        Friday\n      </div>\n      <div class=\"day\">\n        Saturday\n      </div>\n      <div class=\"day\">\n        Sunday\n      </div>\n    </div>\n  </div>\n  <div class=\"tbody\">\n    <div class=\"row no-gutters\">\n      <div class=\"week\">\n        <div>\n          <span>1</span>\n          <p>Type of week:</p>\n          <div class=\"dropdown\">\n            <button class=\"btn btn-border dropdown-toggle btn-block\" type=\"button\" id=\"dropdownMenuButton1\" data-toggle=\"dropdown\"\n              aria-haspopup=\"true\" aria-expanded=\"false\">Test & tr...</button>\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton1\">\n              <a class=\"dropdown-item\" href=\"#\">Back</a>\n              <a class=\"dropdown-item\" href=\"#\">Shoulder</a>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"day\">\n        <h6><span>day 1:</span> Chest</h6>\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>Muscle Group</th>\n              <th>Exercise</th>\n              <th>Set</th>\n              <th>(Target) Reps</th>\n              <th>(Target) Reps to failure</th>\n              <th>% of 1 RM</th>\n              <th>(Target) Volume Load</th>\n              <th>Method</th>\n              <th>Tempo (sec)</th>\n              <th>Rest Period (min:sec)</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td rowspan=\"8\">Chest</td>\n              <td rowspan=\"4\">Brench Press\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td rowspan=\"4\" class=\"white\">Flyes\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n          </tbody>\n          <tfoot>\n            <tr>\n              <td></td>\n              <td colspan=\"2\">Total Volumen</td>\n              <td>84</td>\n              <td>Total Intensity</td>\n              <td>544,2</td>\n              <td>Total Volume Load</td>\n              <td>5638</td>\n              <td></td>\n              <td></td>\n            </tr>\n          </tfoot>\n        </table>\n      </div>\n      <div class=\"day\">\n        <h6><span>day 2:</span> Back</h6>\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>Muscle Group</th>\n              <th>Exercise</th>\n              <th>Set</th>\n              <th>(Target) Reps</th>\n              <th>(Target) Reps to failure</th>\n              <th>% of 1 RM</th>\n              <th>(Target) Volume Load</th>\n              <th>Method</th>\n              <th>Tempo (sec)</th>\n              <th>Rest Period (min:sec)</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td rowspan=\"8\">Chest</td>\n              <td rowspan=\"4\">Brench Press\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td rowspan=\"4\" class=\"white\">Flyes\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n          </tbody>\n          <tfoot>\n            <tr>\n              <td></td>\n              <td colspan=\"2\">Total Volumen</td>\n              <td>84</td>\n              <td>Total Intensity</td>\n              <td>544,2</td>\n              <td>Total Volume Load</td>\n              <td>5638</td>\n              <td></td>\n              <td></td>\n            </tr>\n          </tfoot>\n        </table>\n      </div>\n      <div class=\"day\">\n        <h6><span>day 3:</span> Quad</h6>\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>Muscle Group</th>\n              <th>Exercise</th>\n              <th>Set</th>\n              <th>(Target) Reps</th>\n              <th>(Target) Reps to failure</th>\n              <th>% of 1 RM</th>\n              <th>(Target) Volume Load</th>\n              <th>Method</th>\n              <th>Tempo (sec)</th>\n              <th>Rest Period (min:sec)</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td rowspan=\"8\">Chest</td>\n              <td rowspan=\"4\">Brench Press\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td rowspan=\"4\" class=\"white\">Flyes\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n          </tbody>\n          <tfoot>\n            <tr>\n              <td></td>\n              <td colspan=\"2\">Total Volumen</td>\n              <td>84</td>\n              <td>Total Intensity</td>\n              <td>544,2</td>\n              <td>Total Volume Load</td>\n              <td>5638</td>\n              <td></td>\n              <td></td>\n            </tr>\n          </tfoot>\n        </table>\n      </div>\n      <div class=\"day\">\n        <h6><span>day 4:</span> Quad</h6>\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>Muscle Group</th>\n              <th>Exercise</th>\n              <th>Set</th>\n              <th>(Target) Reps</th>\n              <th>(Target) Reps to failure</th>\n              <th>% of 1 RM</th>\n              <th>(Target) Volume Load</th>\n              <th>Method</th>\n              <th>Tempo (sec)</th>\n              <th>Rest Period (min:sec)</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td rowspan=\"8\">Chest</td>\n              <td rowspan=\"4\">Brench Press\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td rowspan=\"4\" class=\"white\">Flyes\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n          </tbody>\n          <tfoot>\n            <tr>\n              <td></td>\n              <td colspan=\"2\">Total Volumen</td>\n              <td>84</td>\n              <td>Total Intensity</td>\n              <td>544,2</td>\n              <td>Total Volume Load</td>\n              <td>5638</td>\n              <td></td>\n              <td></td>\n            </tr>\n          </tfoot>\n        </table>\n      </div>\n      <div class=\"day\">\n        <h6><span>day 5:</span> Quad</h6>\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>Muscle Group</th>\n              <th>Exercise</th>\n              <th>Set</th>\n              <th>(Target) Reps</th>\n              <th>(Target) Reps to failure</th>\n              <th>% of 1 RM</th>\n              <th>(Target) Volume Load</th>\n              <th>Method</th>\n              <th>Tempo (sec)</th>\n              <th>Rest Period (min:sec)</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td rowspan=\"8\">Chest</td>\n              <td rowspan=\"4\">Brench Press\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td rowspan=\"4\" class=\"white\">Flyes\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n          </tbody>\n          <tfoot>\n            <tr>\n              <td></td>\n              <td colspan=\"2\">Total Volumen</td>\n              <td>84</td>\n              <td>Total Intensity</td>\n              <td>544,2</td>\n              <td>Total Volume Load</td>\n              <td>5638</td>\n              <td></td>\n              <td></td>\n            </tr>\n          </tfoot>\n        </table>\n      </div>\n      <div class=\"day\">\n        <h6><span>day 6:</span> Quad</h6>\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>Muscle Group</th>\n              <th>Exercise</th>\n              <th>Set</th>\n              <th>(Target) Reps</th>\n              <th>(Target) Reps to failure</th>\n              <th>% of 1 RM</th>\n              <th>(Target) Volume Load</th>\n              <th>Method</th>\n              <th>Tempo (sec)</th>\n              <th>Rest Period (min:sec)</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td rowspan=\"8\">Chest</td>\n              <td rowspan=\"4\">Brench Press\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td rowspan=\"4\" class=\"white\">Flyes\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n          </tbody>\n          <tfoot>\n            <tr>\n              <td></td>\n              <td colspan=\"2\">Total Volumen</td>\n              <td>84</td>\n              <td>Total Intensity</td>\n              <td>544,2</td>\n              <td>Total Volume Load</td>\n              <td>5638</td>\n              <td></td>\n              <td></td>\n            </tr>\n          </tfoot>\n        </table>\n      </div>\n      <div class=\"day\">\n        <h6><span>day 7:</span> Quad</h6>\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>Muscle Group</th>\n              <th>Exercise</th>\n              <th>Set</th>\n              <th>(Target) Reps</th>\n              <th>(Target) Reps to failure</th>\n              <th>% of 1 RM</th>\n              <th>(Target) Volume Load</th>\n              <th>Method</th>\n              <th>Tempo (sec)</th>\n              <th>Rest Period (min:sec)</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td rowspan=\"8\">Chest</td>\n              <td rowspan=\"4\">Brench Press\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td rowspan=\"4\" class=\"white\">Flyes\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n          </tbody>\n          <tfoot>\n            <tr>\n              <td></td>\n              <td colspan=\"2\">Total Volumen</td>\n              <td>84</td>\n              <td>Total Intensity</td>\n              <td>544,2</td>\n              <td>Total Volume Load</td>\n              <td>5638</td>\n              <td></td>\n              <td></td>\n            </tr>\n          </tfoot>\n        </table>\n      </div>\n    </div>\n    <div class=\"row no-gutters\">\n      <div class=\"week\">\n        <div>\n          <span>2</span>\n          <p>Type of week:</p>\n          <div class=\"dropdown\">\n            <button class=\"btn btn-border dropdown-toggle btn-block\" type=\"button\" id=\"dropdownMenuButton1\" data-toggle=\"dropdown\"\n              aria-haspopup=\"true\" aria-expanded=\"false\">Test & tr...</button>\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton1\">\n              <a class=\"dropdown-item\" href=\"#\">Back</a>\n              <a class=\"dropdown-item\" href=\"#\">Shoulder</a>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"day\">\n        <h6><span>day 1:</span> Chest</h6>\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>Muscle Group</th>\n              <th>Exercise</th>\n              <th>Set</th>\n              <th>(Target) Reps</th>\n              <th>(Target) Reps to failure</th>\n              <th>% of 1 RM</th>\n              <th>(Target) Volume Load</th>\n              <th>Method</th>\n              <th>Tempo (sec)</th>\n              <th>Rest Period (min:sec)</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td rowspan=\"8\">Chest</td>\n              <td rowspan=\"4\">Brench Press\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td rowspan=\"4\" class=\"white\">Flyes\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n          </tbody>\n          <tfoot>\n            <tr>\n              <td></td>\n              <td colspan=\"2\">Total Volumen</td>\n              <td>84</td>\n              <td>Total Intensity</td>\n              <td>544,2</td>\n              <td>Total Volume Load</td>\n              <td>5638</td>\n              <td></td>\n              <td></td>\n            </tr>\n          </tfoot>\n        </table>\n      </div>\n      <div class=\"day\">\n        <h6><span>day 2:</span> Back</h6>\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>Muscle Group</th>\n              <th>Exercise</th>\n              <th>Set</th>\n              <th>(Target) Reps</th>\n              <th>(Target) Reps to failure</th>\n              <th>% of 1 RM</th>\n              <th>(Target) Volume Load</th>\n              <th>Method</th>\n              <th>Tempo (sec)</th>\n              <th>Rest Period (min:sec)</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td rowspan=\"8\">Chest</td>\n              <td rowspan=\"4\">Brench Press\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td rowspan=\"4\" class=\"white\">Flyes\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n          </tbody>\n          <tfoot>\n            <tr>\n              <td></td>\n              <td colspan=\"2\">Total Volumen</td>\n              <td>84</td>\n              <td>Total Intensity</td>\n              <td>544,2</td>\n              <td>Total Volume Load</td>\n              <td>5638</td>\n              <td></td>\n              <td></td>\n            </tr>\n          </tfoot>\n        </table>\n      </div>\n      <div class=\"day\">\n        <h6><span>day 3:</span> Quad</h6>\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>Muscle Group</th>\n              <th>Exercise</th>\n              <th>Set</th>\n              <th>(Target) Reps</th>\n              <th>(Target) Reps to failure</th>\n              <th>% of 1 RM</th>\n              <th>(Target) Volume Load</th>\n              <th>Method</th>\n              <th>Tempo (sec)</th>\n              <th>Rest Period (min:sec)</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td rowspan=\"8\">Chest</td>\n              <td rowspan=\"4\">Brench Press\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td rowspan=\"4\" class=\"white\">Flyes\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n          </tbody>\n          <tfoot>\n            <tr>\n              <td></td>\n              <td colspan=\"2\">Total Volumen</td>\n              <td>84</td>\n              <td>Total Intensity</td>\n              <td>544,2</td>\n              <td>Total Volume Load</td>\n              <td>5638</td>\n              <td></td>\n              <td></td>\n            </tr>\n          </tfoot>\n        </table>\n      </div>\n      <div class=\"day\">\n        <h6><span>day 4:</span> Quad</h6>\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>Muscle Group</th>\n              <th>Exercise</th>\n              <th>Set</th>\n              <th>(Target) Reps</th>\n              <th>(Target) Reps to failure</th>\n              <th>% of 1 RM</th>\n              <th>(Target) Volume Load</th>\n              <th>Method</th>\n              <th>Tempo (sec)</th>\n              <th>Rest Period (min:sec)</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td rowspan=\"8\">Chest</td>\n              <td rowspan=\"4\">Brench Press\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td rowspan=\"4\" class=\"white\">Flyes\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n          </tbody>\n          <tfoot>\n            <tr>\n              <td></td>\n              <td colspan=\"2\">Total Volumen</td>\n              <td>84</td>\n              <td>Total Intensity</td>\n              <td>544,2</td>\n              <td>Total Volume Load</td>\n              <td>5638</td>\n              <td></td>\n              <td></td>\n            </tr>\n          </tfoot>\n        </table>\n      </div>\n      <div class=\"day\">\n        <h6><span>day 5:</span> Quad</h6>\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>Muscle Group</th>\n              <th>Exercise</th>\n              <th>Set</th>\n              <th>(Target) Reps</th>\n              <th>(Target) Reps to failure</th>\n              <th>% of 1 RM</th>\n              <th>(Target) Volume Load</th>\n              <th>Method</th>\n              <th>Tempo (sec)</th>\n              <th>Rest Period (min:sec)</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td rowspan=\"8\">Chest</td>\n              <td rowspan=\"4\">Brench Press\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td rowspan=\"4\" class=\"white\">Flyes\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n          </tbody>\n          <tfoot>\n            <tr>\n              <td></td>\n              <td colspan=\"2\">Total Volumen</td>\n              <td>84</td>\n              <td>Total Intensity</td>\n              <td>544,2</td>\n              <td>Total Volume Load</td>\n              <td>5638</td>\n              <td></td>\n              <td></td>\n            </tr>\n          </tfoot>\n        </table>\n      </div>\n      <div class=\"day\">\n        <h6><span>day 6:</span> Quad</h6>\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>Muscle Group</th>\n              <th>Exercise</th>\n              <th>Set</th>\n              <th>(Target) Reps</th>\n              <th>(Target) Reps to failure</th>\n              <th>% of 1 RM</th>\n              <th>(Target) Volume Load</th>\n              <th>Method</th>\n              <th>Tempo (sec)</th>\n              <th>Rest Period (min:sec)</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td rowspan=\"8\">Chest</td>\n              <td rowspan=\"4\">Brench Press\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td rowspan=\"4\" class=\"white\">Flyes\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n          </tbody>\n          <tfoot>\n            <tr>\n              <td></td>\n              <td colspan=\"2\">Total Volumen</td>\n              <td>84</td>\n              <td>Total Intensity</td>\n              <td>544,2</td>\n              <td>Total Volume Load</td>\n              <td>5638</td>\n              <td></td>\n              <td></td>\n            </tr>\n          </tfoot>\n        </table>\n      </div>\n      <div class=\"day\">\n        <h6><span>day 7:</span> Quad</h6>\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>Muscle Group</th>\n              <th>Exercise</th>\n              <th>Set</th>\n              <th>(Target) Reps</th>\n              <th>(Target) Reps to failure</th>\n              <th>% of 1 RM</th>\n              <th>(Target) Volume Load</th>\n              <th>Method</th>\n              <th>Tempo (sec)</th>\n              <th>Rest Period (min:sec)</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td rowspan=\"8\">Chest</td>\n              <td rowspan=\"4\">Brench Press\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td rowspan=\"4\" class=\"white\">Flyes\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n          </tbody>\n          <tfoot>\n            <tr>\n              <td></td>\n              <td colspan=\"2\">Total Volumen</td>\n              <td>84</td>\n              <td>Total Intensity</td>\n              <td>544,2</td>\n              <td>Total Volume Load</td>\n              <td>5638</td>\n              <td></td>\n              <td></td>\n            </tr>\n          </tfoot>\n        </table>\n      </div>\n    </div>\n    <div class=\"row no-gutters\">\n      <div class=\"week\">\n        <div>\n          <span>3</span>\n          <p>Type of week:</p>\n          <div class=\"dropdown\">\n            <button class=\"btn btn-border dropdown-toggle btn-block\" type=\"button\" id=\"dropdownMenuButton1\" data-toggle=\"dropdown\"\n              aria-haspopup=\"true\" aria-expanded=\"false\">Test & tr...</button>\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton1\">\n              <a class=\"dropdown-item\" href=\"#\">Back</a>\n              <a class=\"dropdown-item\" href=\"#\">Shoulder</a>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"day\">\n        <h6><span>day 1:</span> Chest</h6>\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>Muscle Group</th>\n              <th>Exercise</th>\n              <th>Set</th>\n              <th>(Target) Reps</th>\n              <th>(Target) Reps to failure</th>\n              <th>% of 1 RM</th>\n              <th>(Target) Volume Load</th>\n              <th>Method</th>\n              <th>Tempo (sec)</th>\n              <th>Rest Period (min:sec)</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td rowspan=\"8\">Chest</td>\n              <td rowspan=\"4\">Brench Press\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td rowspan=\"4\" class=\"white\">Flyes\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n          </tbody>\n          <tfoot>\n            <tr>\n              <td></td>\n              <td colspan=\"2\">Total Volumen</td>\n              <td>84</td>\n              <td>Total Intensity</td>\n              <td>544,2</td>\n              <td>Total Volume Load</td>\n              <td>5638</td>\n              <td></td>\n              <td></td>\n            </tr>\n          </tfoot>\n        </table>\n      </div>\n      <div class=\"day\">\n        <h6><span>day 2:</span> Back</h6>\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>Muscle Group</th>\n              <th>Exercise</th>\n              <th>Set</th>\n              <th>(Target) Reps</th>\n              <th>(Target) Reps to failure</th>\n              <th>% of 1 RM</th>\n              <th>(Target) Volume Load</th>\n              <th>Method</th>\n              <th>Tempo (sec)</th>\n              <th>Rest Period (min:sec)</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td rowspan=\"8\">Chest</td>\n              <td rowspan=\"4\">Brench Press\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td rowspan=\"4\" class=\"white\">Flyes\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n          </tbody>\n          <tfoot>\n            <tr>\n              <td></td>\n              <td colspan=\"2\">Total Volumen</td>\n              <td>84</td>\n              <td>Total Intensity</td>\n              <td>544,2</td>\n              <td>Total Volume Load</td>\n              <td>5638</td>\n              <td></td>\n              <td></td>\n            </tr>\n          </tfoot>\n        </table>\n      </div>\n      <div class=\"day\">\n        <h6><span>day 3:</span> Quad</h6>\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>Muscle Group</th>\n              <th>Exercise</th>\n              <th>Set</th>\n              <th>(Target) Reps</th>\n              <th>(Target) Reps to failure</th>\n              <th>% of 1 RM</th>\n              <th>(Target) Volume Load</th>\n              <th>Method</th>\n              <th>Tempo (sec)</th>\n              <th>Rest Period (min:sec)</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td rowspan=\"8\">Chest</td>\n              <td rowspan=\"4\">Brench Press\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td rowspan=\"4\" class=\"white\">Flyes\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n          </tbody>\n          <tfoot>\n            <tr>\n              <td></td>\n              <td colspan=\"2\">Total Volumen</td>\n              <td>84</td>\n              <td>Total Intensity</td>\n              <td>544,2</td>\n              <td>Total Volume Load</td>\n              <td>5638</td>\n              <td></td>\n              <td></td>\n            </tr>\n          </tfoot>\n        </table>\n      </div>\n      <div class=\"day\">\n        <h6><span>day 4:</span> Quad</h6>\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>Muscle Group</th>\n              <th>Exercise</th>\n              <th>Set</th>\n              <th>(Target) Reps</th>\n              <th>(Target) Reps to failure</th>\n              <th>% of 1 RM</th>\n              <th>(Target) Volume Load</th>\n              <th>Method</th>\n              <th>Tempo (sec)</th>\n              <th>Rest Period (min:sec)</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td rowspan=\"8\">Chest</td>\n              <td rowspan=\"4\">Brench Press\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td rowspan=\"4\" class=\"white\">Flyes\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n          </tbody>\n          <tfoot>\n            <tr>\n              <td></td>\n              <td colspan=\"2\">Total Volumen</td>\n              <td>84</td>\n              <td>Total Intensity</td>\n              <td>544,2</td>\n              <td>Total Volume Load</td>\n              <td>5638</td>\n              <td></td>\n              <td></td>\n            </tr>\n          </tfoot>\n        </table>\n      </div>\n      <div class=\"day\">\n        <h6><span>day 5:</span> Quad</h6>\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>Muscle Group</th>\n              <th>Exercise</th>\n              <th>Set</th>\n              <th>(Target) Reps</th>\n              <th>(Target) Reps to failure</th>\n              <th>% of 1 RM</th>\n              <th>(Target) Volume Load</th>\n              <th>Method</th>\n              <th>Tempo (sec)</th>\n              <th>Rest Period (min:sec)</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td rowspan=\"8\">Chest</td>\n              <td rowspan=\"4\">Brench Press\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td rowspan=\"4\" class=\"white\">Flyes\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n          </tbody>\n          <tfoot>\n            <tr>\n              <td></td>\n              <td colspan=\"2\">Total Volumen</td>\n              <td>84</td>\n              <td>Total Intensity</td>\n              <td>544,2</td>\n              <td>Total Volume Load</td>\n              <td>5638</td>\n              <td></td>\n              <td></td>\n            </tr>\n          </tfoot>\n        </table>\n      </div>\n      <div class=\"day\">\n        <h6><span>day 6:</span> Quad</h6>\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>Muscle Group</th>\n              <th>Exercise</th>\n              <th>Set</th>\n              <th>(Target) Reps</th>\n              <th>(Target) Reps to failure</th>\n              <th>% of 1 RM</th>\n              <th>(Target) Volume Load</th>\n              <th>Method</th>\n              <th>Tempo (sec)</th>\n              <th>Rest Period (min:sec)</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td rowspan=\"8\">Chest</td>\n              <td rowspan=\"4\">Brench Press\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td rowspan=\"4\" class=\"white\">Flyes\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n          </tbody>\n          <tfoot>\n            <tr>\n              <td></td>\n              <td colspan=\"2\">Total Volumen</td>\n              <td>84</td>\n              <td>Total Intensity</td>\n              <td>544,2</td>\n              <td>Total Volume Load</td>\n              <td>5638</td>\n              <td></td>\n              <td></td>\n            </tr>\n          </tfoot>\n        </table>\n      </div>\n      <div class=\"day\">\n        <h6><span>day 7:</span> Quad</h6>\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>Muscle Group</th>\n              <th>Exercise</th>\n              <th>Set</th>\n              <th>(Target) Reps</th>\n              <th>(Target) Reps to failure</th>\n              <th>% of 1 RM</th>\n              <th>(Target) Volume Load</th>\n              <th>Method</th>\n              <th>Tempo (sec)</th>\n              <th>Rest Period (min:sec)</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td rowspan=\"8\">Chest</td>\n              <td rowspan=\"4\">Brench Press\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td rowspan=\"4\" class=\"white\">Flyes\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n          </tbody>\n          <tfoot>\n            <tr>\n              <td></td>\n              <td colspan=\"2\">Total Volumen</td>\n              <td>84</td>\n              <td>Total Intensity</td>\n              <td>544,2</td>\n              <td>Total Volume Load</td>\n              <td>5638</td>\n              <td></td>\n              <td></td>\n            </tr>\n          </tfoot>\n        </table>\n      </div>\n    </div>\n    <div class=\"row no-gutters\">\n      <div class=\"week\">\n        <div>\n          <span>4</span>\n          <p>Type of week:</p>\n          <div class=\"dropdown\">\n            <button class=\"btn btn-border dropdown-toggle btn-block\" type=\"button\" id=\"dropdownMenuButton1\" data-toggle=\"dropdown\"\n              aria-haspopup=\"true\" aria-expanded=\"false\">Test & tr...</button>\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton1\">\n              <a class=\"dropdown-item\" href=\"#\">Back</a>\n              <a class=\"dropdown-item\" href=\"#\">Shoulder</a>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"day\">\n        <h6><span>day 1:</span> Chest</h6>\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>Muscle Group</th>\n              <th>Exercise</th>\n              <th>Set</th>\n              <th>(Target) Reps</th>\n              <th>(Target) Reps to failure</th>\n              <th>% of 1 RM</th>\n              <th>(Target) Volume Load</th>\n              <th>Method</th>\n              <th>Tempo (sec)</th>\n              <th>Rest Period (min:sec)</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td rowspan=\"8\">Chest</td>\n              <td rowspan=\"4\">Brench Press\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td rowspan=\"4\" class=\"white\">Flyes\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n          </tbody>\n          <tfoot>\n            <tr>\n              <td></td>\n              <td colspan=\"2\">Total Volumen</td>\n              <td>84</td>\n              <td>Total Intensity</td>\n              <td>544,2</td>\n              <td>Total Volume Load</td>\n              <td>5638</td>\n              <td></td>\n              <td></td>\n            </tr>\n          </tfoot>\n        </table>\n      </div>\n      <div class=\"day\">\n        <h6><span>day 2:</span> Back</h6>\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>Muscle Group</th>\n              <th>Exercise</th>\n              <th>Set</th>\n              <th>(Target) Reps</th>\n              <th>(Target) Reps to failure</th>\n              <th>% of 1 RM</th>\n              <th>(Target) Volume Load</th>\n              <th>Method</th>\n              <th>Tempo (sec)</th>\n              <th>Rest Period (min:sec)</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td rowspan=\"8\">Chest</td>\n              <td rowspan=\"4\">Brench Press\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td rowspan=\"4\" class=\"white\">Flyes\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n          </tbody>\n          <tfoot>\n            <tr>\n              <td></td>\n              <td colspan=\"2\">Total Volumen</td>\n              <td>84</td>\n              <td>Total Intensity</td>\n              <td>544,2</td>\n              <td>Total Volume Load</td>\n              <td>5638</td>\n              <td></td>\n              <td></td>\n            </tr>\n          </tfoot>\n        </table>\n      </div>\n      <div class=\"day\">\n        <h6><span>day 3:</span> Quad</h6>\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>Muscle Group</th>\n              <th>Exercise</th>\n              <th>Set</th>\n              <th>(Target) Reps</th>\n              <th>(Target) Reps to failure</th>\n              <th>% of 1 RM</th>\n              <th>(Target) Volume Load</th>\n              <th>Method</th>\n              <th>Tempo (sec)</th>\n              <th>Rest Period (min:sec)</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td rowspan=\"8\">Chest</td>\n              <td rowspan=\"4\">Brench Press\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td rowspan=\"4\" class=\"white\">Flyes\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n          </tbody>\n          <tfoot>\n            <tr>\n              <td></td>\n              <td colspan=\"2\">Total Volumen</td>\n              <td>84</td>\n              <td>Total Intensity</td>\n              <td>544,2</td>\n              <td>Total Volume Load</td>\n              <td>5638</td>\n              <td></td>\n              <td></td>\n            </tr>\n          </tfoot>\n        </table>\n      </div>\n      <div class=\"day\">\n        <h6><span>day 4:</span> Quad</h6>\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>Muscle Group</th>\n              <th>Exercise</th>\n              <th>Set</th>\n              <th>(Target) Reps</th>\n              <th>(Target) Reps to failure</th>\n              <th>% of 1 RM</th>\n              <th>(Target) Volume Load</th>\n              <th>Method</th>\n              <th>Tempo (sec)</th>\n              <th>Rest Period (min:sec)</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td rowspan=\"8\">Chest</td>\n              <td rowspan=\"4\">Brench Press\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td rowspan=\"4\" class=\"white\">Flyes\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n          </tbody>\n          <tfoot>\n            <tr>\n              <td></td>\n              <td colspan=\"2\">Total Volumen</td>\n              <td>84</td>\n              <td>Total Intensity</td>\n              <td>544,2</td>\n              <td>Total Volume Load</td>\n              <td>5638</td>\n              <td></td>\n              <td></td>\n            </tr>\n          </tfoot>\n        </table>\n      </div>\n      <div class=\"day\">\n        <h6><span>day 5:</span> Quad</h6>\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>Muscle Group</th>\n              <th>Exercise</th>\n              <th>Set</th>\n              <th>(Target) Reps</th>\n              <th>(Target) Reps to failure</th>\n              <th>% of 1 RM</th>\n              <th>(Target) Volume Load</th>\n              <th>Method</th>\n              <th>Tempo (sec)</th>\n              <th>Rest Period (min:sec)</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td rowspan=\"8\">Chest</td>\n              <td rowspan=\"4\">Brench Press\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td rowspan=\"4\" class=\"white\">Flyes\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n          </tbody>\n          <tfoot>\n            <tr>\n              <td></td>\n              <td colspan=\"2\">Total Volumen</td>\n              <td>84</td>\n              <td>Total Intensity</td>\n              <td>544,2</td>\n              <td>Total Volume Load</td>\n              <td>5638</td>\n              <td></td>\n              <td></td>\n            </tr>\n          </tfoot>\n        </table>\n      </div>\n      <div class=\"day\">\n        <h6><span>day 6:</span> Quad</h6>\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>Muscle Group</th>\n              <th>Exercise</th>\n              <th>Set</th>\n              <th>(Target) Reps</th>\n              <th>(Target) Reps to failure</th>\n              <th>% of 1 RM</th>\n              <th>(Target) Volume Load</th>\n              <th>Method</th>\n              <th>Tempo (sec)</th>\n              <th>Rest Period (min:sec)</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td rowspan=\"8\">Chest</td>\n              <td rowspan=\"4\">Brench Press\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td rowspan=\"4\" class=\"white\">Flyes\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n          </tbody>\n          <tfoot>\n            <tr>\n              <td></td>\n              <td colspan=\"2\">Total Volumen</td>\n              <td>84</td>\n              <td>Total Intensity</td>\n              <td>544,2</td>\n              <td>Total Volume Load</td>\n              <td>5638</td>\n              <td></td>\n              <td></td>\n            </tr>\n          </tfoot>\n        </table>\n      </div>\n      <div class=\"day\">\n        <h6><span>day 7:</span> Quad</h6>\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>Muscle Group</th>\n              <th>Exercise</th>\n              <th>Set</th>\n              <th>(Target) Reps</th>\n              <th>(Target) Reps to failure</th>\n              <th>% of 1 RM</th>\n              <th>(Target) Volume Load</th>\n              <th>Method</th>\n              <th>Tempo (sec)</th>\n              <th>Rest Period (min:sec)</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td rowspan=\"8\">Chest</td>\n              <td rowspan=\"4\">Brench Press\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td rowspan=\"4\" class=\"white\">Flyes\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n          </tbody>\n          <tfoot>\n            <tr>\n              <td></td>\n              <td colspan=\"2\">Total Volumen</td>\n              <td>84</td>\n              <td>Total Intensity</td>\n              <td>544,2</td>\n              <td>Total Volume Load</td>\n              <td>5638</td>\n              <td></td>\n              <td></td>\n            </tr>\n          </tfoot>\n        </table>\n      </div>\n    </div>\n    <div class=\"row no-gutters\">\n      <div class=\"week\">\n        <div>\n          <span>5</span>\n          <p>Type of week:</p>\n          <div class=\"dropdown\">\n            <button class=\"btn btn-border dropdown-toggle btn-block\" type=\"button\" id=\"dropdownMenuButton1\" data-toggle=\"dropdown\"\n              aria-haspopup=\"true\" aria-expanded=\"false\">Test & tr...</button>\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton1\">\n              <a class=\"dropdown-item\" href=\"#\">Back</a>\n              <a class=\"dropdown-item\" href=\"#\">Shoulder</a>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"day\">\n        <h6><span>day 1:</span> Chest</h6>\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>Muscle Group</th>\n              <th>Exercise</th>\n              <th>Set</th>\n              <th>(Target) Reps</th>\n              <th>(Target) Reps to failure</th>\n              <th>% of 1 RM</th>\n              <th>(Target) Volume Load</th>\n              <th>Method</th>\n              <th>Tempo (sec)</th>\n              <th>Rest Period (min:sec)</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td rowspan=\"8\">Chest</td>\n              <td rowspan=\"4\">Brench Press\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td rowspan=\"4\" class=\"white\">Flyes\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n          </tbody>\n          <tfoot>\n            <tr>\n              <td></td>\n              <td colspan=\"2\">Total Volumen</td>\n              <td>84</td>\n              <td>Total Intensity</td>\n              <td>544,2</td>\n              <td>Total Volume Load</td>\n              <td>5638</td>\n              <td></td>\n              <td></td>\n            </tr>\n          </tfoot>\n        </table>\n      </div>\n      <div class=\"day\">\n        <h6><span>day 2:</span> Back</h6>\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>Muscle Group</th>\n              <th>Exercise</th>\n              <th>Set</th>\n              <th>(Target) Reps</th>\n              <th>(Target) Reps to failure</th>\n              <th>% of 1 RM</th>\n              <th>(Target) Volume Load</th>\n              <th>Method</th>\n              <th>Tempo (sec)</th>\n              <th>Rest Period (min:sec)</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td rowspan=\"8\">Chest</td>\n              <td rowspan=\"4\">Brench Press\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td rowspan=\"4\" class=\"white\">Flyes\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n          </tbody>\n          <tfoot>\n            <tr>\n              <td></td>\n              <td colspan=\"2\">Total Volumen</td>\n              <td>84</td>\n              <td>Total Intensity</td>\n              <td>544,2</td>\n              <td>Total Volume Load</td>\n              <td>5638</td>\n              <td></td>\n              <td></td>\n            </tr>\n          </tfoot>\n        </table>\n      </div>\n      <div class=\"day\">\n        <h6><span>day 3:</span> Quad</h6>\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>Muscle Group</th>\n              <th>Exercise</th>\n              <th>Set</th>\n              <th>(Target) Reps</th>\n              <th>(Target) Reps to failure</th>\n              <th>% of 1 RM</th>\n              <th>(Target) Volume Load</th>\n              <th>Method</th>\n              <th>Tempo (sec)</th>\n              <th>Rest Period (min:sec)</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td rowspan=\"8\">Chest</td>\n              <td rowspan=\"4\">Brench Press\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td rowspan=\"4\" class=\"white\">Flyes\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n          </tbody>\n          <tfoot>\n            <tr>\n              <td></td>\n              <td colspan=\"2\">Total Volumen</td>\n              <td>84</td>\n              <td>Total Intensity</td>\n              <td>544,2</td>\n              <td>Total Volume Load</td>\n              <td>5638</td>\n              <td></td>\n              <td></td>\n            </tr>\n          </tfoot>\n        </table>\n      </div>\n      <div class=\"day\">\n        <h6><span>day 4:</span> Quad</h6>\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>Muscle Group</th>\n              <th>Exercise</th>\n              <th>Set</th>\n              <th>(Target) Reps</th>\n              <th>(Target) Reps to failure</th>\n              <th>% of 1 RM</th>\n              <th>(Target) Volume Load</th>\n              <th>Method</th>\n              <th>Tempo (sec)</th>\n              <th>Rest Period (min:sec)</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td rowspan=\"8\">Chest</td>\n              <td rowspan=\"4\">Brench Press\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td rowspan=\"4\" class=\"white\">Flyes\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n          </tbody>\n          <tfoot>\n            <tr>\n              <td></td>\n              <td colspan=\"2\">Total Volumen</td>\n              <td>84</td>\n              <td>Total Intensity</td>\n              <td>544,2</td>\n              <td>Total Volume Load</td>\n              <td>5638</td>\n              <td></td>\n              <td></td>\n            </tr>\n          </tfoot>\n        </table>\n      </div>\n      <div class=\"day\">\n        <h6><span>day 5:</span> Quad</h6>\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>Muscle Group</th>\n              <th>Exercise</th>\n              <th>Set</th>\n              <th>(Target) Reps</th>\n              <th>(Target) Reps to failure</th>\n              <th>% of 1 RM</th>\n              <th>(Target) Volume Load</th>\n              <th>Method</th>\n              <th>Tempo (sec)</th>\n              <th>Rest Period (min:sec)</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td rowspan=\"8\">Chest</td>\n              <td rowspan=\"4\">Brench Press\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td rowspan=\"4\" class=\"white\">Flyes\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n          </tbody>\n          <tfoot>\n            <tr>\n              <td></td>\n              <td colspan=\"2\">Total Volumen</td>\n              <td>84</td>\n              <td>Total Intensity</td>\n              <td>544,2</td>\n              <td>Total Volume Load</td>\n              <td>5638</td>\n              <td></td>\n              <td></td>\n            </tr>\n          </tfoot>\n        </table>\n      </div>\n      <div class=\"day\">\n        <h6><span>day 6:</span> Quad</h6>\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>Muscle Group</th>\n              <th>Exercise</th>\n              <th>Set</th>\n              <th>(Target) Reps</th>\n              <th>(Target) Reps to failure</th>\n              <th>% of 1 RM</th>\n              <th>(Target) Volume Load</th>\n              <th>Method</th>\n              <th>Tempo (sec)</th>\n              <th>Rest Period (min:sec)</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td rowspan=\"8\">Chest</td>\n              <td rowspan=\"4\">Brench Press\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td rowspan=\"4\" class=\"white\">Flyes\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n          </tbody>\n          <tfoot>\n            <tr>\n              <td></td>\n              <td colspan=\"2\">Total Volumen</td>\n              <td>84</td>\n              <td>Total Intensity</td>\n              <td>544,2</td>\n              <td>Total Volume Load</td>\n              <td>5638</td>\n              <td></td>\n              <td></td>\n            </tr>\n          </tfoot>\n        </table>\n      </div>\n      <div class=\"day\">\n        <h6><span>day 7:</span> Quad</h6>\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>Muscle Group</th>\n              <th>Exercise</th>\n              <th>Set</th>\n              <th>(Target) Reps</th>\n              <th>(Target) Reps to failure</th>\n              <th>% of 1 RM</th>\n              <th>(Target) Volume Load</th>\n              <th>Method</th>\n              <th>Tempo (sec)</th>\n              <th>Rest Period (min:sec)</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td rowspan=\"8\">Chest</td>\n              <td rowspan=\"4\">Brench Press\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td rowspan=\"4\" class=\"white\">Flyes\n                <a class=\"add\" href=\"\">+</a>\n                <a class=\"remove\" href=\"\">-</a>\n              </td>\n              <td>1</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>10</td>\n              <td>@1</td>\n              <td>70,7</td>\n              <td>707</td>\n              <td>Straight Set</td>\n              <td>3-0-2</td>\n              <td>2:00</td>\n            </tr>\n          </tbody>\n          <tfoot>\n            <tr>\n              <td></td>\n              <td colspan=\"2\">Total Volumen</td>\n              <td>84</td>\n              <td>Total Intensity</td>\n              <td>544,2</td>\n              <td>Total Volume Load</td>\n              <td>5638</td>\n              <td></td>\n              <td></td>\n            </tr>\n          </tfoot>\n        </table>\n      </div>\n    </div>\n  </div>\n  <div class=\"tfooter\">\n      <div class=\"row no-gutters\">\n          <div class=\"footer-cell\">\n              <a class=\"add\" href=\"\"><span>+</span> Add Week</a>\n              <a class=\"remove\" href=\"\"><span>-</span> Delete Week</a>\n          </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/plan/components/progression-builder/training-program/training-program.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/plan/components/progression-builder/training-program/training-program.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ProgressionBuilderTrainingProgramComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressionBuilderTrainingProgramComponent", function() { return ProgressionBuilderTrainingProgramComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/classes/user */ "./src/app/core/classes/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProgressionBuilderTrainingProgramComponent = /** @class */ (function () {
    function ProgressionBuilderTrainingProgramComponent() {
    }
    ProgressionBuilderTrainingProgramComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__["ApplicationUser"])
    ], ProgressionBuilderTrainingProgramComponent.prototype, "applicationUser", void 0);
    ProgressionBuilderTrainingProgramComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-progression-builder-training-program',
            template: __webpack_require__(/*! ./training-program.component.html */ "./src/app/plan/components/progression-builder/training-program/training-program.component.html")
        })
    ], ProgressionBuilderTrainingProgramComponent);
    return ProgressionBuilderTrainingProgramComponent;
}());



/***/ }),

/***/ "./src/app/plan/plan.module.ts":
/*!*************************************!*\
  !*** ./src/app/plan/plan.module.ts ***!
  \*************************************/
/*! exports provided: PlanBuilderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanBuilderModule", function() { return PlanBuilderModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _components_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/main.component */ "./src/app/plan/components/main.component.ts");
/* harmony import */ var _components_calendar_builder_exercises_exercises_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/calendar-builder/exercises/exercises.component */ "./src/app/plan/components/calendar-builder/exercises/exercises.component.ts");
/* harmony import */ var _components_calendar_builder_workouts_workouts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/calendar-builder/workouts/workouts.component */ "./src/app/plan/components/calendar-builder/workouts/workouts.component.ts");
/* harmony import */ var _components_calendar_builder_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/calendar-builder/calendar/calendar.component */ "./src/app/plan/components/calendar-builder/calendar/calendar.component.ts");
/* harmony import */ var _components_calendar_builder_main_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/calendar-builder/main.component */ "./src/app/plan/components/calendar-builder/main.component.ts");
/* harmony import */ var _components_progression_builder_main_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/progression-builder/main.component */ "./src/app/plan/components/progression-builder/main.component.ts");
/* harmony import */ var _components_progression_builder_progressive_overload_graph_progressive_overload_graph_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/progression-builder/progressive-overload-graph/progressive-overload-graph.component */ "./src/app/plan/components/progression-builder/progressive-overload-graph/progressive-overload-graph.component.ts");
/* harmony import */ var _components_progression_builder_training_program_training_program_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/progression-builder/training-program/training-program.component */ "./src/app/plan/components/progression-builder/training-program/training-program.component.ts");
/* harmony import */ var _components_progression_builder_program_design_program_design_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/progression-builder/program-design/program-design.component */ "./src/app/plan/components/progression-builder/program-design/program-design.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var PlanBuilderModule = /** @class */ (function () {
    function PlanBuilderModule() {
    }
    PlanBuilderModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_main_component__WEBPACK_IMPORTED_MODULE_3__["PlanBuilderComponent"],
                _components_calendar_builder_main_component__WEBPACK_IMPORTED_MODULE_7__["CalendarBuilderComponent"],
                _components_calendar_builder_exercises_exercises_component__WEBPACK_IMPORTED_MODULE_4__["PlanBuilderExercisesComponent"],
                _components_calendar_builder_workouts_workouts_component__WEBPACK_IMPORTED_MODULE_5__["PlanBuilderWorkoutsComponent"],
                _components_calendar_builder_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_6__["PlanBuilderCalendarComponent"],
                _components_progression_builder_main_component__WEBPACK_IMPORTED_MODULE_8__["ProgressionBuilderComponent"],
                _components_progression_builder_progressive_overload_graph_progressive_overload_graph_component__WEBPACK_IMPORTED_MODULE_9__["ProgressionBuilderProgressiveOverloadGraphComponent"],
                _components_progression_builder_training_program_training_program_component__WEBPACK_IMPORTED_MODULE_10__["ProgressionBuilderTrainingProgramComponent"],
                _components_progression_builder_program_design_program_design_component__WEBPACK_IMPORTED_MODULE_11__["ProgressionBuilderProgramDesignComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_2__["CoreModule"]
            ],
            providers: [],
        })
    ], PlanBuilderModule);
    return PlanBuilderModule;
}());



/***/ }),

/***/ "./src/app/profile/components/main.component.html":
/*!********************************************************!*\
  !*** ./src/app/profile/components/main.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<osg-profile-cover *ngIf=\"applicationUser\" [applicationUser]=\"applicationUser\"></osg-profile-cover>\n<osg-personal-trainer *ngIf=\"isPersonalTrainer()\" [applicationUser]=\"applicationUser\"></osg-personal-trainer>\n<osg-program-designer *ngIf=\"isProgramDesigner()\" [applicationUser]=\"applicationUser\"></osg-program-designer>\n<osg-strength-athlete *ngIf=\"isStrengthAthlete()\" [applicationUser]=\"applicationUser\"></osg-strength-athlete>"

/***/ }),

/***/ "./src/app/profile/components/main.component.ts":
/*!******************************************************!*\
  !*** ./src/app/profile/components/main.component.ts ***!
  \******************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/classes/user */ "./src/app/core/classes/user.ts");
/* harmony import */ var src_app_core_services_application_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/application.service */ "./src/app/core/services/application.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(applicationService) {
        this.applicationService = applicationService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.applicationService.authenticatedUser.toPromise()];
                    case 1:
                        _a.applicationUser = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(ProfileComponent.prototype, "role", {
        get: function () {
            return this.applicationUser !== undefined ? this.applicationUser.role : '';
        },
        enumerable: true,
        configurable: true
    });
    ProfileComponent.prototype.isPersonalTrainer = function () {
        return this.role === src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__["ApplicationUserRole"].PersonalTrainer;
    };
    ProfileComponent.prototype.isProgramDesigner = function () {
        return this.role === src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__["ApplicationUserRole"].ProgramDesigner;
    };
    ProfileComponent.prototype.isStrengthAthlete = function () {
        return this.role === src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__["ApplicationUserRole"].StrengthAthlete;
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-profile',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/profile/components/main.component.html")
        }),
        __metadata("design:paramtypes", [src_app_core_services_application_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/profile/components/personal-trainer/booking-calendar.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/profile/components/personal-trainer/booking-calendar.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">\n  <div class=\"row align-items-center\">\n    <div class=\"col-12 col-sm-5\">\n      <h3>Booking</h3>\n    </div>\n    <div class=\"col-12 col-sm-5\">\n      <div class=\"control-slider\">\n        <p>AUGUST 2018</p>\n        <a href=\"\" class=\"btn-control prev\"><i class=\"fa fa-angle-up\" aria-hidden=\"true\"></i></a>\n        <a href=\"\" class=\"btn-control next\"><i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i></a>\n      </div>\n    </div>\n    <div class=\"col-12 col-sm-2\">\n      <a href=\"\" class=\"edit\"><img src=\"/assets/images/icons/icon-pencil.svg\" class=\"img-fluid\" alt=\"\"></a>\n    </div>\n  </div>\n</div>\n\n<div class=\"conventions\">\n  <p class=\"available\"><span></span>Sessions available</p>\n  <p class=\"almost-full\"><span></span>Almost full</p>\n  <p class=\"complety-full\"><span></span>Complety full</p>\n</div>\n\n<div class=\"calendar\">\n  <div class=\"week-days\">\n    <div class=\"col\">Sunday</div>\n    <div class=\"col\">Monday</div>\n    <div class=\"col\">Tuesday</div>\n    <div class=\"col\">Wednesday</div>\n    <div class=\"col\">Thursday</div>\n    <div class=\"col\">Friday</div>\n    <div class=\"col\">Saturday</div>\n  </div>\n  <div class=\"wrapper-weeks\">\n    <div class=\"week\">\n\n      <div class=\"day almost-full\">\n        <div><span class=\"time\">30</span></div>\n      </div>\n\n      <div class=\"day available\">\n        <div>\n          <span class=\"time\">Jul 31</span>\n        </div>\n      </div>\n\n      <div class=\"day available\">\n        <div><span class=\"time\">Aug 1</span></div>\n      </div>\n\n      <div class=\"day available\">\n        <div>\n          <span class=\"time\">2</span>\n        </div>\n      </div>\n\n      <div class=\"day available\">\n        <div><span class=\"time\">3</span></div>\n      </div>\n\n      <div class=\"day available\">\n        <div>\n          <span class=\"time\">4</span>\n        </div>\n      </div>\n\n      <div class=\"day available\">\n        <div><span class=\"time\">5</span></div>\n      </div>\n\n    </div>\n\n    <div class=\"week\">\n\n        <div class=\"day available\">\n            <div><span class=\"time\">6</span></div>\n        </div>\n    \n        <div class=\"day available\">\n            <div>\n            <span class=\"time\">6</span>\n            </div>\n        </div>\n    \n        <div class=\"day available\">\n            <div><span class=\"time\">7</span></div>\n        </div>\n    \n        <div class=\"day available\">\n            <div>\n            <span class=\"time\">9</span>\n            </div>\n        </div>\n    \n        <div class=\"day almost-full\">\n            <div><span class=\"time\">10</span></div>\n        </div>\n    \n        <div class=\"day complety-full\">\n            <div>\n            <span class=\"time\">11</span>\n            </div>\n        </div>\n    \n        <div class=\"day available\">\n            <div><span class=\"time\">12</span></div>\n        </div>\n    \n    </div>\n\n    <div class=\"week\">\n\n        <div class=\"day almost-full\">\n            <div><span class=\"time\">13</span></div>\n        </div>\n    \n        <div class=\"day available\">\n            <div>\n            <span class=\"time\">14</span>\n            </div>\n        </div>\n    \n        <div class=\"day available\">\n            <div><span class=\"time\">15</span></div>\n        </div>\n    \n        <div class=\"day available\">\n            <div>\n            <span class=\"time\">16</span>\n            </div>\n        </div>\n    \n        <div class=\"day available\">\n            <div><span class=\"time\">17</span></div>\n        </div>\n    \n        <div class=\"day available\">\n            <div>\n            <span class=\"time\">18</span>\n            </div>\n        </div>\n    \n        <div class=\"day available\">\n            <div><span class=\"time\">19</span></div>\n        </div>\n    \n    </div>\n\n    <div class=\"week\">\n\n        <div class=\"day available\">\n            <div><span class=\"time\">20</span></div>\n        </div>\n    \n        <div class=\"day complety-full\">\n            <div>\n            <span class=\"time\">21</span>\n            </div>\n        </div>\n    \n        <div class=\"day available\">\n            <div><span class=\"time\">22</span></div>\n        </div>\n    \n        <div class=\"day available\">\n            <div>\n            <span class=\"time\">23</span>\n            </div>\n        </div>\n    \n        <div class=\"day available\">\n            <div><span class=\"time\">24</span></div>\n        </div>\n    \n        <div class=\"day almost-full\">\n            <div>\n            <span class=\"time\">25</span>\n            </div>\n        </div>\n    \n        <div class=\"day almost-full\">\n            <div><span class=\"time\">26</span></div>\n        </div>\n    \n    </div>\n\n    <div class=\"week\">\n\n        <div class=\"day available\">\n            <div><span class=\"time\">27</span></div>\n        </div>\n    \n        <div class=\"day almost-full\">\n            <div>\n            <span class=\"time\">28</span>\n            </div>\n        </div>\n    \n        <div class=\"day almost-full\">\n            <div><span class=\"time\">29</span></div>\n        </div>\n    \n        <div class=\"day almost-full\">\n            <div>\n            <span class=\"time\">30</span>\n            </div>\n        </div>\n    \n        <div class=\"day almost-full\">\n            <div><span class=\"time\">Aug 31</span></div>\n        </div>\n    \n        <div class=\"day available\">\n            <div>\n            <span class=\"time\">Sep 1</span>\n            </div>\n        </div>\n    \n        <div class=\"day available\">\n            <div><span class=\"time\">2</span></div>\n        </div>\n    \n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/profile/components/personal-trainer/booking-calendar.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/profile/components/personal-trainer/booking-calendar.component.ts ***!
  \***********************************************************************************/
/*! exports provided: PersonalTrainerBookingCalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalTrainerBookingCalendarComponent", function() { return PersonalTrainerBookingCalendarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/classes/user */ "./src/app/core/classes/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PersonalTrainerBookingCalendarComponent = /** @class */ (function () {
    function PersonalTrainerBookingCalendarComponent() {
    }
    PersonalTrainerBookingCalendarComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__["ApplicationUser"])
    ], PersonalTrainerBookingCalendarComponent.prototype, "applicationUser", void 0);
    PersonalTrainerBookingCalendarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-personal-trainer-booking-calendar',
            template: __webpack_require__(/*! ./booking-calendar.component.html */ "./src/app/profile/components/personal-trainer/booking-calendar.component.html")
        })
    ], PersonalTrainerBookingCalendarComponent);
    return PersonalTrainerBookingCalendarComponent;
}());



/***/ }),

/***/ "./src/app/profile/components/personal-trainer/experience-bank.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/profile/components/personal-trainer/experience-bank.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-12 col-sm-12 col-md-12 col-lg-9\">\n    <div class=\"title\">\n      <div class=\"col-12 col-sm-5\">\n        <h3>EXPERIENCE BANK: <br>\n          MY CLIENTS RESULTS</h3>\n      </div>\n      <div class=\"col-12 col-sm-auto\">\n        <div class=\"filter-box\">\n          <p>GENDER:</p>\n          <div class=\"dropdown\">\n            <button class=\"btn dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\n              aria-haspopup=\"true\" aria-expanded=\"false\">MEN</button>\n            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n              <a class=\"dropdown-item\" href=\"#\">Men</a>\n              <a class=\"dropdown-item\" href=\"#\">Another action</a>\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n            </div>\n          </div>\n          <p>Category:</p>\n          <div class=\"dropdown\">\n            <button class=\"btn dropdown-toggle text-red\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\n              aria-haspopup=\"true\" aria-expanded=\"false\">HYPERTROPHY</button>\n            <div class=\"dropdown-menu dropdown-menu-right text-right dropdown-black\" aria-labelledby=\"dropdownMenuButton\">\n              <a class=\"dropdown-item text-blue\" href=\"#\">Strength</a>\n              <a class=\"dropdown-item text-red\" href=\"#\">HYPERTROPHY</a>\n              <a class=\"dropdown-item text-orange\" href=\"#\">Muscular endurance</a>\n              <a class=\"dropdown-item text-green\" href=\"#\">Power</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"table-responsive\">\n        <table class=\"table\">\n            <thead>\n                <tr>\n                    <th>BODY WEIGHT</th>\n                    <th>UNTRAINED</th>\n                    <th>NOVICE</th>\n                    <th>INTERMEDIATE</th>\n                    <th>ADVANCED</th>\n                    <th>ELITE</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>50-59</td>\n                    <td>8,21</td>\n                    <td>8,01</td>\n                    <td>7,98</td>\n                    <td>7,10</td>\n                    <td>6,21</td>\n                </tr>\n                <tr>\n                    <td>60-69</td>\n                    <td>9,11</td>\n                    <td>9,25</td>\n                    <td>8,12</td>\n                    <td>6,89</td>\n                    <td>5,43</td>\n                </tr>\n                <tr>\n                    <td>70-79</td>\n                    <td>7,65</td>\n                    <td>7,66</td>\n                    <td>6,48</td>\n                    <td>5,21</td>\n                    <td>3,21</td>\n                </tr>\n                <tr>\n                    <td>80-89</td>\n                    <td>6,54</td>\n                    <td>6,68</td>\n                    <td>7,21</td>\n                    <td>5,12</td>\n                    <td>4,47</td>\n                </tr>\n                <tr>\n                    <td>90-99</td>\n                    <td>4,41</td>\n                    <td>5,54</td>\n                    <td>6,81</td>\n                    <td>3,41</td>\n                    <td>2,21</td>\n                </tr>\n                <tr>\n                    <td>100-109</td>\n                    <td>6,87</td>\n                    <td>5,54</td>\n                    <td>4,83</td>\n                    <td>2,19</td>\n                    <td>1,12</td>\n                </tr>\n                <tr>\n                    <td>110-119</td>\n                    <td>8,57</td>\n                    <td>7,23</td>\n                    <td>6,57</td>\n                    <td>4,12</td>\n                    <td>3,49</td>\n                </tr>\n                <tr>\n                    <td>120+</td>\n                    <td>7,21</td>\n                    <td>3,21</td>\n                    <td>3,43</td>\n                    <td>5,43</td>\n                    <td>6,64</td>\n                </tr>\n                <tr>\n                    <td><b>STRENGTH ATHLETES:</b></td>\n                    <td>12</td>\n                    <td>5</td>\n                    <td>9</td>\n                    <td>5</td>\n                    <td>4</td>\n                </tr>\n                <tr>\n                    <td><b>PROGRAMS:</b></td>\n                    <td><span>Ladder Strength<br> 5x5 <br> Giant Gains</span></td>\n                    <td><span>GVT <br> Starting Strength</span></td>\n                    <td><span>Myo Reps <br> Pyramid Strength <br> Westside Barbell</span></td>\n                    <td><span>5x5 <br>Pre-Exhaust <br>Height Strength</span></td>\n                    <td><span>Base Lifts <br>Powerbuilding <br> GVT </span></td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <small>* The numbers in the table shows percentage increase (results) from all completed programs where the personal trainer has assisted the strength athlete. The number in each cell shows the median for a particular level and weight class. The median is the middle value when al the strength athletes percentage increase are listed in numerical order from the lowest to the highest results</small>\n  </div>\n  <div class=\"col-12 col-sm-12 col-md-12 col-lg-3\">\n    <h3 class=\"my-3\">REVIEWS: 50</h3>\n    <div class=\"review-box\">\n        <div class=\"review\">\n            <div class=\"rating\">\n                <span class=\"fa-stack excellent\">\n                    <i class=\"fa fa-circle fa-stack-2x\"></i>\n                    <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\n                </span>\n                <span class=\"fa-stack excellent\">\n                    <i class=\"fa fa-circle fa-stack-2x\"></i>\n                    <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\n                </span>\n                <span class=\"fa-stack excellent\">\n                    <i class=\"fa fa-circle fa-stack-2x\"></i>\n                    <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\n                </span>\n                <span class=\"fa-stack excellent\">\n                    <i class=\"fa fa-circle fa-stack-2x\"></i>\n                    <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\n                </span>\n                <span class=\"fa-stack excellent\">\n                    <i class=\"fa fa-circle fa-stack-2x\"></i>\n                    <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\n                </span>\n            </div>\n            <p class=\"name\">Alex James</p>\n            <p>Best coach I have worked with! </p>\n        </div>\n        <div class=\"review\">\n            <div class=\"rating\">\n                <span class=\"fa-stack middle\">\n                    <i class=\"fa fa-circle fa-stack-2x\"></i>\n                    <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\n                </span>\n                <span class=\"fa-stack middle\">\n                    <i class=\"fa fa-circle fa-stack-2x\"></i>\n                    <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\n                </span>\n                <span class=\"fa-stack middle\">\n                    <i class=\"fa fa-circle fa-stack-2x\"></i>\n                    <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\n                </span>\n                <span class=\"fa-stack\">\n                    <i class=\"fa fa-circle fa-stack-2x\"></i>\n                    <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\n                </span>\n                <span class=\"fa-stack\">\n                    <i class=\"fa fa-circle fa-stack-2x\"></i>\n                    <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\n                </span>\n            </div>\n            <p class=\"name\">Clara Smith</p>\n            <p>Passion and dedication! Recommended!</p>\n        </div>\n        <button class=\"btn btn-black btn-block text-uppercase py-2\">\n            <span class=\"fa-stack\">\n                <i class=\"fa fa-circle fa-stack-2x\"></i>\n                <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\n            </span> ALL REVIEWS</button>\n    </div>\n\n    <h3 class=\"mt-4 mb-2\">AVERAGE</h3>\n    <div class=\"average-box\">\n        <div class=\"average\">\n            <p>Customer Satisfaction</p>\n            <div class=\"rating good\">\n                <span class=\"fa-stack good\">\n                    <i class=\"fa fa-circle fa-stack-2x\"></i>\n                    <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\n                </span>\n                <span class=\"fa-stack good\">\n                    <i class=\"fa fa-circle fa-stack-2x\"></i>\n                    <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\n                </span>\n                <span class=\"fa-stack good\">\n                    <i class=\"fa fa-circle fa-stack-2x\"></i>\n                    <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\n                </span>\n                <span class=\"fa-stack good\">\n                    <i class=\"fa fa-circle fa-stack-2x\"></i>\n                    <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\n                </span>\n                <span class=\"fa-stack\">\n                    <i class=\"fa fa-circle fa-stack-2x\"></i>\n                    <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\n                </span>\n                <p>Good!</p>\n            </div>\n\n        </div>\n        <div class=\"average\">\n            <p>Coaching</p>\n            <div class=\"rating excellent\">\n                <span class=\"fa-stack excellent\">\n                    <i class=\"fa fa-circle fa-stack-2x\"></i>\n                    <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\n                </span>\n                <span class=\"fa-stack excellent\">\n                    <i class=\"fa fa-circle fa-stack-2x\"></i>\n                    <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\n                </span>\n                <span class=\"fa-stack excellent\">\n                    <i class=\"fa fa-circle fa-stack-2x\"></i>\n                    <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\n                </span>\n                <span class=\"fa-stack excellent\">\n                    <i class=\"fa fa-circle fa-stack-2x\"></i>\n                    <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\n                </span>\n                <span class=\"fa-stack excellent\">\n                    <i class=\"fa fa-circle fa-stack-2x\"></i>\n                    <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\n                </span>\n                <p>Excellent!</p>\n            </div>\n        </div>\n\n        <div class=\"average\">\n            <p>Worth the money</p>\n            <div class=\"rating middle\">\n                <span class=\"fa-stack middle\">\n                    <i class=\"fa fa-circle fa-stack-2x\"></i>\n                    <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\n                </span>\n                <span class=\"fa-stack middle\">\n                    <i class=\"fa fa-circle fa-stack-2x\"></i>\n                    <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\n                </span>\n                <span class=\"fa-stack middle\">\n                    <i class=\"fa fa-circle fa-stack-2x\"></i>\n                    <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\n                </span>\n                <span class=\"fa-stack\">\n                    <i class=\"fa fa-circle fa-stack-2x\"></i>\n                    <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\n                </span>\n                <span class=\"fa-stack\">\n                    <i class=\"fa fa-circle fa-stack-2x\"></i>\n                    <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\n                </span>\n                <p>Middle</p>\n            </div>\n        </div>\n        <button class=\"btn btn-black btn-block text-uppercase py-2\"> <img src=\"/assets/images/icons/icon-pencil.svg\" class=\"d-inline-block img-fluid\" alt=\"\"> GIVE REVIEW</button>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/profile/components/personal-trainer/experience-bank.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/profile/components/personal-trainer/experience-bank.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PersonalTrainerExperienceBankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalTrainerExperienceBankComponent", function() { return PersonalTrainerExperienceBankComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/classes/user */ "./src/app/core/classes/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PersonalTrainerExperienceBankComponent = /** @class */ (function () {
    function PersonalTrainerExperienceBankComponent() {
    }
    PersonalTrainerExperienceBankComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__["ApplicationUser"])
    ], PersonalTrainerExperienceBankComponent.prototype, "applicationUser", void 0);
    PersonalTrainerExperienceBankComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-personal-trainer-experience-bank',
            template: __webpack_require__(/*! ./experience-bank.component.html */ "./src/app/profile/components/personal-trainer/experience-bank.component.html")
        })
    ], PersonalTrainerExperienceBankComponent);
    return PersonalTrainerExperienceBankComponent;
}());



/***/ }),

/***/ "./src/app/profile/components/personal-trainer/offers.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/profile/components/personal-trainer/offers.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">\n    <h3>my offers</h3>\n</div>\n<div class=\"offers-container\">\n    <div class=\"offer\">\n        <div class=\"content-offer\">\n            <header>\n                <figure>\n                    <img alt=\"\" class=\"img-fluid d-block mx-auto\" src=\"/assets/images/logo.png\">\n                </figure>\n            </header>\n            <div class=\"description\">\n                <h4>pt basic</h4>\n                <span>5 hours</span>\n            </div>\n            <div class=\"pricing\">\n                <span>kr 2 500, -</span>\n                <button class=\"btn btn-yellow-gradient btn-block\">purchase</button>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"offer\">\n        <div class=\"content-offer\">\n            <header>\n                <figure>\n                    <img alt=\"\" class=\"img-fluid d-block mx-auto\" src=\"/assets/images/logo.png\">\n                </figure>\n            </header>\n            <div class=\"description\">\n                <h4>pt Premium</h4>\n                <span>10 hours</span>\n            </div>\n            <div class=\"pricing\">\n                <span>kr 4 700, -</span>\n                <button class=\"btn btn-yellow-gradient btn-block\">purchase</button>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"offer\">\n        <div class=\"content-offer\">\n            <header>\n                <figure>\n                    <img alt=\"\" class=\"img-fluid d-block mx-auto\" src=\"/assets/images/logo.png\">\n                </figure>\n            </header>\n            <div class=\"description\">\n                <h4>pt pro</h4>\n                <span>15 hours</span>\n            </div>\n            <div class=\"pricing\">\n                <span>kr 6 750, -</span>\n                <button class=\"btn btn-yellow-gradient btn-block\">purchase</button>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"offer\">\n        <div class=\"content-offer\">\n            <header>\n                <figure>\n                    <img alt=\"\" class=\"img-fluid d-block mx-auto\" src=\"/assets/images/logo.png\">\n                </figure>\n            </header>\n            <div class=\"description\">\n                <h4>pt Business</h4>\n                <span>20 hours</span>\n            </div>\n            <div class=\"pricing\">\n                <span>kr 8 600, -</span>\n                <button class=\"btn btn-yellow-gradient btn-block\">purchase</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/profile/components/personal-trainer/offers.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/profile/components/personal-trainer/offers.component.ts ***!
  \*************************************************************************/
/*! exports provided: PersonalTrainerOffersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalTrainerOffersComponent", function() { return PersonalTrainerOffersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/classes/user */ "./src/app/core/classes/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PersonalTrainerOffersComponent = /** @class */ (function () {
    function PersonalTrainerOffersComponent() {
    }
    PersonalTrainerOffersComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__["ApplicationUser"])
    ], PersonalTrainerOffersComponent.prototype, "applicationUser", void 0);
    PersonalTrainerOffersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-personal-trainer-offers',
            template: __webpack_require__(/*! ./offers.component.html */ "./src/app/profile/components/personal-trainer/offers.component.html")
        })
    ], PersonalTrainerOffersComponent);
    return PersonalTrainerOffersComponent;
}());



/***/ }),

/***/ "./src/app/profile/components/personal-trainer/personal-trainer.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/profile/components/personal-trainer/personal-trainer.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <osg-profile-about-me></osg-profile-about-me>\n    <osg-news-feed></osg-news-feed>\n</div>\n<div>\n    <osg-personal-trainer-offers></osg-personal-trainer-offers>\n    <osg-personal-trainer-experience-bank></osg-personal-trainer-experience-bank>\n    <osg-personal-trainer-booking-calendar></osg-personal-trainer-booking-calendar>\n    <osg-get-started></osg-get-started>\n</div>"

/***/ }),

/***/ "./src/app/profile/components/personal-trainer/personal-trainer.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/profile/components/personal-trainer/personal-trainer.component.ts ***!
  \***********************************************************************************/
/*! exports provided: PersonalTrainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalTrainerComponent", function() { return PersonalTrainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/classes/user */ "./src/app/core/classes/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PersonalTrainerComponent = /** @class */ (function () {
    function PersonalTrainerComponent() {
    }
    PersonalTrainerComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__["ApplicationUser"])
    ], PersonalTrainerComponent.prototype, "applicationUser", void 0);
    PersonalTrainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-personal-trainer',
            template: __webpack_require__(/*! ./personal-trainer.component.html */ "./src/app/profile/components/personal-trainer/personal-trainer.component.html")
        })
    ], PersonalTrainerComponent);
    return PersonalTrainerComponent;
}());



/***/ }),

/***/ "./src/app/profile/components/profile/profile-about-me-component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/profile/components/profile/profile-about-me-component.ts ***!
  \**************************************************************************/
/*! exports provided: ProfileAboutMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileAboutMeComponent", function() { return ProfileAboutMeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProfileAboutMeComponent = /** @class */ (function () {
    function ProfileAboutMeComponent() {
    }
    ProfileAboutMeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-profile-about-me',
            template: __webpack_require__(/*! ./profile-about-me.component.html */ "./src/app/profile/components/profile/profile-about-me.component.html")
        })
    ], ProfileAboutMeComponent);
    return ProfileAboutMeComponent;
}());



/***/ }),

/***/ "./src/app/profile/components/profile/profile-about-me.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/profile/components/profile/profile-about-me.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mb-2 align-items-center\">\n    <div class=\"col text-left\"><h3>about me</h3></div>\n    <div class=\"col text-right\"><a href=\"\" class=\"edit\"><img src=\"/assets/images/icons/icon-pencil.svg\" class=\"img-fluid\" alt=\"\"></a></div>\n</div>\n<div class=\"about-me-container\">\n    <p>Working as professional trainer for 10 years. I am confident and passionate about what I do for a living. Let me help you transform your personal life.</p>\n    <div class=\"summary\">\n        <div class=\"entry\"><span> <img src=\"/assets/images/icons/icon-star.png\" class=\"img-fluid d-inline-block\" alt=\"\"> Interests:</span><span>Norges idrettshöyskole</span></div>\n        <div class=\"entry\"><span><img src=\"/assets/images/icons/icon-calendar.png\" class=\"img-fluid d-inline-block\" alt=\"\"> Experience:</span><span>Sport performance</span></div>\n        <div class=\"entry\"><span><img src=\"/assets/images/icons/icon-world.png\" class=\"img-fluid d-inline-block\" alt=\"\"> Country:</span><span>Oslo, Norway</span></div>\n        <div class=\"entry\"><span><img src=\"/assets/images/icons/icon-profile.png\" class=\"img-fluid d-inline-block\" alt=\"\"> Profile:</span><span>Personal Trainer</span></div>\n    </div>\n    <button class=\"btn btn-black btn-block text-uppercase py-2\"> <img src=\"/assets/images/icons/icon-go-to.svg\" class=\"d-inline-block img-fluid\" alt=\"\"> Contact me</button>\n</div>"

/***/ }),

/***/ "./src/app/profile/components/profile/profile-cover.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/profile/components/profile/profile-cover.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container h-100\">\n    <div class=\"row h-100 align-items-center justify-content-center\">\n        <div class=\"col-12 col-sm-12 col-md-7 col-lg-4\">\n            <div class=\"information\">\n                <a href=\"\" class=\"edit\"><img src=\"/assets/images/icons/icon-pencil.svg\" class=\"img-fluid\" alt=\"\"></a>\n                <figure>\n                    <img src=\"/assets/images/icons/icon-profile-big.png\" class=\"img-fluid d-block m-auto\" />\n                </figure>\n                <h2>{{fullName}}</h2>\n                <a href=\"\" class=\"add-friend\"><img src=\"/assets/images/icons/icon-add-friend.png\" class=\"d-inline-block img-fluid mr-2\" alt=\"\">ADD FRIEND</a>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/profile/components/profile/profile-cover.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/profile/components/profile/profile-cover.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProfileCoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileCoverComponent", function() { return ProfileCoverComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileCoverComponent = /** @class */ (function () {
    function ProfileCoverComponent() {
    }
    ProfileCoverComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(ProfileCoverComponent.prototype, "fullName", {
        get: function () {
            return this.applicationUser !== undefined ? this.applicationUser.name : '';
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProfileCoverComponent.prototype, "applicationUser", void 0);
    ProfileCoverComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-profile-cover',
            template: __webpack_require__(/*! ./profile-cover.component.html */ "./src/app/profile/components/profile/profile-cover.component.html")
        })
    ], ProfileCoverComponent);
    return ProfileCoverComponent;
}());



/***/ }),

/***/ "./src/app/profile/components/program-designer/experience-bank.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/profile/components/program-designer/experience-bank.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <h3>EXPERIENCE BANK: <span>GVT</span></h3>\n    </div>\n  </div>\n</div>\n\n<p>The numbers in the table shows the median percentage increase values (results) from all the strength athletes that\n  have completed the program. The median is the middle value when all the individual strength athlete’s percentage\n  increase values are listed in numerical order from the lowest to the highest.</p>\n\n<div class=\"row\">\n  <div class=\"col-12 col-lg-6\">\n    <div class=\"table-responsive\">\n      <h4>TEST EXERCISE: BENCH PRESS (MEN) <span>- PERCENTAGE INCREASE</span></h4>\n      <table class=\"table\">\n        <thead>\n          <tr>\n            <th>BODY WEIGHT</th>\n            <th>UNTRAINED</th>\n            <th>NOVICE</th>\n            <th>INTERMEDIATE</th>\n            <th>ADVANCED</th>\n            <th>ELITE</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>50-59</td>\n            <td>8,21</td>\n            <td>8,01</td>\n            <td>7,98</td>\n            <td>7,10</td>\n            <td>6,21</td>\n          </tr>\n          <tr>\n            <td>60-69</td>\n            <td>9,11</td>\n            <td>9,25</td>\n            <td>8,12</td>\n            <td>6,89</td>\n            <td>5,43</td>\n          </tr>\n          <tr>\n            <td>70-79</td>\n            <td>7,65</td>\n            <td>7,66</td>\n            <td>6,48</td>\n            <td>5,21</td>\n            <td>3,21</td>\n          </tr>\n          <tr>\n            <td>80-89</td>\n            <td>6,54</td>\n            <td>6,68</td>\n            <td>7,21</td>\n            <td>5,12</td>\n            <td>4,47</td>\n          </tr>\n          <tr>\n            <td>90-99</td>\n            <td>4,41</td>\n            <td>5,54</td>\n            <td>6,81</td>\n            <td>3,41</td>\n            <td>2,21</td>\n          </tr>\n          <tr>\n            <td>100-109</td>\n            <td>6,87</td>\n            <td>5,54</td>\n            <td>4,83</td>\n            <td>2,19</td>\n            <td>1,12</td>\n          </tr>\n          <tr>\n            <td>110-119</td>\n            <td>8,57</td>\n            <td>7,23</td>\n            <td>6,57</td>\n            <td>4,12</td>\n            <td>3,49</td>\n          </tr>\n          <tr>\n            <td>120+</td>\n            <td>6,54</td>\n            <td>0,99</td>\n            <td>2,19</td>\n            <td>2,48</td>\n            <td>3,59</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n\n  <div class=\"col-12 col-lg-6\">\n    <div class=\"table-responsive\">\n      <h4>TEST EXERCISE: BENCH PRESS (WOMEN) <span>- PERCENTAGE INCREASE</span></h4>\n      <table class=\"table\">\n        <thead>\n          <tr>\n            <th>BODY WEIGHT</th>\n            <th>UNTRAINED</th>\n            <th>NOVICE</th>\n            <th>INTERMEDIATE</th>\n            <th>ADVANCED</th>\n            <th>ELITE</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>50-59</td>\n            <td>8,21</td>\n            <td>8,01</td>\n            <td>7,98</td>\n            <td>7,10</td>\n            <td>6,21</td>\n          </tr>\n          <tr>\n            <td>60-69</td>\n            <td>9,11</td>\n            <td>9,25</td>\n            <td>8,12</td>\n            <td>6,89</td>\n            <td>5,43</td>\n          </tr>\n          <tr>\n            <td>70-79</td>\n            <td>7,65</td>\n            <td>7,66</td>\n            <td>6,48</td>\n            <td>5,21</td>\n            <td>3,21</td>\n          </tr>\n          <tr>\n            <td>80-89</td>\n            <td>6,54</td>\n            <td>6,68</td>\n            <td>7,21</td>\n            <td>5,12</td>\n            <td>4,47</td>\n          </tr>\n          <tr>\n            <td>90-99</td>\n            <td>4,41</td>\n            <td>5,54</td>\n            <td>6,81</td>\n            <td>3,41</td>\n            <td>2,21</td>\n          </tr>\n          <tr>\n            <td>100-109</td>\n            <td>6,87</td>\n            <td>5,54</td>\n            <td>4,83</td>\n            <td>2,19</td>\n            <td>1,12</td>\n          </tr>\n          <tr>\n            <td>110-119</td>\n            <td>8,57</td>\n            <td>7,23</td>\n            <td>6,57</td>\n            <td>4,12</td>\n            <td>3,49</td>\n          </tr>\n          <tr>\n            <td>120+</td>\n            <td>6,54</td>\n            <td>0,99</td>\n            <td>2,19</td>\n            <td>2,48</td>\n            <td>3,59</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n\n  <div class=\"col-12 col-lg-6\">\n    <div class=\"table-responsive\">\n      <h4>TEST EXERCISE: SQUAT (MEN) <span>- PERCENTAGE INCREASE</span></h4>\n      <table class=\"table\">\n        <thead>\n          <tr>\n            <th>BODY WEIGHT</th>\n            <th>UNTRAINED</th>\n            <th>NOVICE</th>\n            <th>INTERMEDIATE</th>\n            <th>ADVANCED</th>\n            <th>ELITE</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>50-59</td>\n            <td>8,21</td>\n            <td>8,01</td>\n            <td>7,98</td>\n            <td>7,10</td>\n            <td>6,21</td>\n          </tr>\n          <tr>\n            <td>60-69</td>\n            <td>9,11</td>\n            <td>9,25</td>\n            <td>8,12</td>\n            <td>6,89</td>\n            <td>5,43</td>\n          </tr>\n          <tr>\n            <td>70-79</td>\n            <td>7,65</td>\n            <td>7,66</td>\n            <td>6,48</td>\n            <td>5,21</td>\n            <td>3,21</td>\n          </tr>\n          <tr>\n            <td>80-89</td>\n            <td>6,54</td>\n            <td>6,68</td>\n            <td>7,21</td>\n            <td>5,12</td>\n            <td>4,47</td>\n          </tr>\n          <tr>\n            <td>90-99</td>\n            <td>4,41</td>\n            <td>5,54</td>\n            <td>6,81</td>\n            <td>3,41</td>\n            <td>2,21</td>\n          </tr>\n          <tr>\n            <td>100-109</td>\n            <td>6,87</td>\n            <td>5,54</td>\n            <td>4,83</td>\n            <td>2,19</td>\n            <td>1,12</td>\n          </tr>\n          <tr>\n            <td>110-119</td>\n            <td>8,57</td>\n            <td>7,23</td>\n            <td>6,57</td>\n            <td>4,12</td>\n            <td>3,49</td>\n          </tr>\n          <tr>\n            <td>120+</td>\n            <td>6,54</td>\n            <td>0,99</td>\n            <td>2,19</td>\n            <td>2,48</td>\n            <td>3,59</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n\n  <div class=\"col-12 col-lg-6\">\n    <div class=\"table-responsive\">\n      <h4>TEST EXERCISE: SQUAT (WOMEN) <span>- PERCENTAGE INCREASE</span></h4>\n      <table class=\"table\">\n        <thead>\n          <tr>\n            <th>BODY WEIGHT</th>\n            <th>UNTRAINED</th>\n            <th>NOVICE</th>\n            <th>INTERMEDIATE</th>\n            <th>ADVANCED</th>\n            <th>ELITE</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>50-59</td>\n            <td>8,21</td>\n            <td>8,01</td>\n            <td>7,98</td>\n            <td>7,10</td>\n            <td>6,21</td>\n          </tr>\n          <tr>\n            <td>60-69</td>\n            <td>9,11</td>\n            <td>9,25</td>\n            <td>8,12</td>\n            <td>6,89</td>\n            <td>5,43</td>\n          </tr>\n          <tr>\n            <td>70-79</td>\n            <td>7,65</td>\n            <td>7,66</td>\n            <td>6,48</td>\n            <td>5,21</td>\n            <td>3,21</td>\n          </tr>\n          <tr>\n            <td>80-89</td>\n            <td>6,54</td>\n            <td>6,68</td>\n            <td>7,21</td>\n            <td>5,12</td>\n            <td>4,47</td>\n          </tr>\n          <tr>\n            <td>90-99</td>\n            <td>4,41</td>\n            <td>5,54</td>\n            <td>6,81</td>\n            <td>3,41</td>\n            <td>2,21</td>\n          </tr>\n          <tr>\n            <td>100-109</td>\n            <td>6,87</td>\n            <td>5,54</td>\n            <td>4,83</td>\n            <td>2,19</td>\n            <td>1,12</td>\n          </tr>\n          <tr>\n            <td>110-119</td>\n            <td>8,57</td>\n            <td>7,23</td>\n            <td>6,57</td>\n            <td>4,12</td>\n            <td>3,49</td>\n          </tr>\n          <tr>\n            <td>120+</td>\n            <td>6,54</td>\n            <td>0,99</td>\n            <td>2,19</td>\n            <td>2,48</td>\n            <td>3,59</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n\n  <div class=\"col-12 col-lg-6\">\n    <div class=\"table-responsive\">\n      <h4>TEST EXERCISE: DEADLIFT (MEN) <span>- PERCENTAGE INCREASE</span></h4>\n      <table class=\"table\">\n        <thead>\n          <tr>\n            <th>BODY WEIGHT</th>\n            <th>UNTRAINED</th>\n            <th>NOVICE</th>\n            <th>INTERMEDIATE</th>\n            <th>ADVANCED</th>\n            <th>ELITE</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>50-59</td>\n            <td>8,21</td>\n            <td>8,01</td>\n            <td>7,98</td>\n            <td>7,10</td>\n            <td>6,21</td>\n          </tr>\n          <tr>\n            <td>60-69</td>\n            <td>9,11</td>\n            <td>9,25</td>\n            <td>8,12</td>\n            <td>6,89</td>\n            <td>5,43</td>\n          </tr>\n          <tr>\n            <td>70-79</td>\n            <td>7,65</td>\n            <td>7,66</td>\n            <td>6,48</td>\n            <td>5,21</td>\n            <td>3,21</td>\n          </tr>\n          <tr>\n            <td>80-89</td>\n            <td>6,54</td>\n            <td>6,68</td>\n            <td>7,21</td>\n            <td>5,12</td>\n            <td>4,47</td>\n          </tr>\n          <tr>\n            <td>90-99</td>\n            <td>4,41</td>\n            <td>5,54</td>\n            <td>6,81</td>\n            <td>3,41</td>\n            <td>2,21</td>\n          </tr>\n          <tr>\n            <td>100-109</td>\n            <td>6,87</td>\n            <td>5,54</td>\n            <td>4,83</td>\n            <td>2,19</td>\n            <td>1,12</td>\n          </tr>\n          <tr>\n            <td>110-119</td>\n            <td>8,57</td>\n            <td>7,23</td>\n            <td>6,57</td>\n            <td>4,12</td>\n            <td>3,49</td>\n          </tr>\n          <tr>\n            <td>120+</td>\n            <td>6,54</td>\n            <td>0,99</td>\n            <td>2,19</td>\n            <td>2,48</td>\n            <td>3,59</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <div class=\"col-12 col-lg-6\">\n    <div class=\"table-responsive\">\n      <h4>TEST EXERCISE: DEADLIFT (WOMEN) <span>- PERCENTAGE INCREASE</span></h4>\n      <table class=\"table\">\n        <thead>\n          <tr>\n            <th>BODY WEIGHT</th>\n            <th>UNTRAINED</th>\n            <th>NOVICE</th>\n            <th>INTERMEDIATE</th>\n            <th>ADVANCED</th>\n            <th>ELITE</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>50-59</td>\n            <td>8,21</td>\n            <td>8,01</td>\n            <td>7,98</td>\n            <td>7,10</td>\n            <td>6,21</td>\n          </tr>\n          <tr>\n            <td>60-69</td>\n            <td>9,11</td>\n            <td>9,25</td>\n            <td>8,12</td>\n            <td>6,89</td>\n            <td>5,43</td>\n          </tr>\n          <tr>\n            <td>70-79</td>\n            <td>7,65</td>\n            <td>7,66</td>\n            <td>6,48</td>\n            <td>5,21</td>\n            <td>3,21</td>\n          </tr>\n          <tr>\n            <td>80-89</td>\n            <td>6,54</td>\n            <td>6,68</td>\n            <td>7,21</td>\n            <td>5,12</td>\n            <td>4,47</td>\n          </tr>\n          <tr>\n            <td>90-99</td>\n            <td>4,41</td>\n            <td>5,54</td>\n            <td>6,81</td>\n            <td>3,41</td>\n            <td>2,21</td>\n          </tr>\n          <tr>\n            <td>100-109</td>\n            <td>6,87</td>\n            <td>5,54</td>\n            <td>4,83</td>\n            <td>2,19</td>\n            <td>1,12</td>\n          </tr>\n          <tr>\n            <td>110-119</td>\n            <td>8,57</td>\n            <td>7,23</td>\n            <td>6,57</td>\n            <td>4,12</td>\n            <td>3,49</td>\n          </tr>\n          <tr>\n            <td>120+</td>\n            <td>6,54</td>\n            <td>0,99</td>\n            <td>2,19</td>\n            <td>2,48</td>\n            <td>3,59</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/profile/components/program-designer/experience-bank.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/profile/components/program-designer/experience-bank.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ProgramDesignerExperienceBankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramDesignerExperienceBankComponent", function() { return ProgramDesignerExperienceBankComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/classes/user */ "./src/app/core/classes/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProgramDesignerExperienceBankComponent = /** @class */ (function () {
    function ProgramDesignerExperienceBankComponent() {
    }
    ProgramDesignerExperienceBankComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__["ApplicationUser"])
    ], ProgramDesignerExperienceBankComponent.prototype, "applicationUser", void 0);
    ProgramDesignerExperienceBankComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-program-designer-experience-bank',
            template: __webpack_require__(/*! ./experience-bank.component.html */ "./src/app/profile/components/program-designer/experience-bank.component.html")
        })
    ], ProgramDesignerExperienceBankComponent);
    return ProgramDesignerExperienceBankComponent;
}());



/***/ }),

/***/ "./src/app/profile/components/program-designer/experience-reviews.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/profile/components/program-designer/experience-reviews.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">\n  <div class=\"row align-items-center\">\n    <div class=\"col-12 col-lg-6\">\n      <h3>Reviews: <span>GVT</span></h3>\n    </div>\n    <div class=\"col-12 col-lg-6 text-right mt-3 mt-lg-0\">\n      <div class=\"row\">\n        <div class=\"col-12 col-sm-6\">\n          <button class=\"btn btn-black btn-block text-uppercase py-2\">\n            <span class=\"fa-stack\">\n              <i class=\"fa fa-circle fa-stack-2x\"></i>\n              <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\n            </span> ALL REVIEWS\n          </button>\n        </div>\n        <div class=\"col-12 col-sm-6\"><button class=\"btn btn-black btn-block text-uppercase py-2\"> <img src=\"/assets/images/icons/icon-pencil.svg\"\n              class=\"d-inline-block img-fluid\" alt=\"\"> WRITE REVIEW</button></div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"review-box\">\n    <div class=\"review\">\n      <figure>\n        <img src=\"/assets/images/icons/icon-account-gray.png\" alt=\"\" class=\"img-fluid d-block mx-auto\">\n      </figure>\n      <p class=\"name\">Alex James</p>\n      <p>Best coach I have worked with! </p>\n      <div class=\"rating\">\n        <p>5.0</p>\n        <span class=\"fa-stack excellent\">\n          <i class=\"fa fa-circle fa-stack-2x\"></i>\n          <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\n        </span>\n        <span class=\"fa-stack excellent\">\n          <i class=\"fa fa-circle fa-stack-2x\"></i>\n          <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\n        </span>\n        <span class=\"fa-stack excellent\">\n          <i class=\"fa fa-circle fa-stack-2x\"></i>\n          <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\n        </span>\n        <span class=\"fa-stack excellent\">\n          <i class=\"fa fa-circle fa-stack-2x\"></i>\n          <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\n        </span>\n        <span class=\"fa-stack excellent\">\n          <i class=\"fa fa-circle fa-stack-2x\"></i>\n          <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\n        </span>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"review-box\">\n    <div class=\"review\">\n      <figure>\n        <img src=\"/assets/images/icons/icon-account-gray.png\" alt=\"\" class=\"img-fluid d-block mx-auto\">\n      </figure>\n      <p class=\"name\">Alex James</p>\n      <p>Best coach I have worked with! </p>\n      <div class=\"rating\">\n        <p>5.0</p>\n        <span class=\"fa-stack excellent\">\n          <i class=\"fa fa-circle fa-stack-2x\"></i>\n          <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\n        </span>\n        <span class=\"fa-stack excellent\">\n          <i class=\"fa fa-circle fa-stack-2x\"></i>\n          <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\n        </span>\n        <span class=\"fa-stack excellent\">\n          <i class=\"fa fa-circle fa-stack-2x\"></i>\n          <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\n        </span>\n        <span class=\"fa-stack excellent\">\n          <i class=\"fa fa-circle fa-stack-2x\"></i>\n          <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\n        </span>\n        <span class=\"fa-stack excellent\">\n          <i class=\"fa fa-circle fa-stack-2x\"></i>\n          <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\n        </span>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"review-box\">\n    <div class=\"review\">\n      <figure>\n        <img src=\"/assets/images/icons/icon-account-gray.png\" alt=\"\" class=\"img-fluid d-block mx-auto\">\n      </figure>\n      <p class=\"name\">Alex James</p>\n      <p>Best coach I have worked with! </p>\n      <div class=\"rating\">\n        <p>5.0</p>\n        <span class=\"fa-stack middle\">\n          <i class=\"fa fa-circle fa-stack-2x\"></i>\n          <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\n        </span>\n        <span class=\"fa-stack middle\">\n          <i class=\"fa fa-circle fa-stack-2x\"></i>\n          <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\n        </span>\n        <span class=\"fa-stack middle\">\n          <i class=\"fa fa-circle fa-stack-2x\"></i>\n          <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\n        </span>\n        <span class=\"fa-stack\">\n          <i class=\"fa fa-circle fa-stack-2x\"></i>\n          <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\n        </span>\n        <span class=\"fa-stack\">\n          <i class=\"fa fa-circle fa-stack-2x\"></i>\n          <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\n        </span>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"review-box\">\n    <div class=\"review\">\n      <figure>\n        <img src=\"/assets/images/icons/icon-account-gray.png\" alt=\"\" class=\"img-fluid d-block mx-auto\">\n      </figure>\n      <p class=\"name\">Alex James</p>\n      <p>Best coach I have worked with! </p>\n      <div class=\"rating\">\n        <p>5.0</p>\n        <span class=\"fa-stack middle\">\n          <i class=\"fa fa-circle fa-stack-2x\"></i>\n          <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\n        </span>\n        <span class=\"fa-stack middle\">\n          <i class=\"fa fa-circle fa-stack-2x\"></i>\n          <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\n        </span>\n        <span class=\"fa-stack middle\">\n          <i class=\"fa fa-circle fa-stack-2x\"></i>\n          <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\n        </span>\n        <span class=\"fa-stack\">\n          <i class=\"fa fa-circle fa-stack-2x\"></i>\n          <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\n        </span>\n        <span class=\"fa-stack\">\n          <i class=\"fa fa-circle fa-stack-2x\"></i>\n          <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\n        </span>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"review-box\">\n    <div class=\"review\">\n      <figure>\n        <img src=\"/assets/images/icons/icon-account-gray.png\" alt=\"\" class=\"img-fluid d-block mx-auto\">\n      </figure>\n      <p class=\"name\">Alex James</p>\n      <p>Best coach I have worked with! </p>\n      <div class=\"rating\">\n        <p>5.0</p>\n        <span class=\"fa-stack excellent\">\n          <i class=\"fa fa-circle fa-stack-2x\"></i>\n          <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\n        </span>\n        <span class=\"fa-stack excellent\">\n          <i class=\"fa fa-circle fa-stack-2x\"></i>\n          <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\n        </span>\n        <span class=\"fa-stack excellent\">\n          <i class=\"fa fa-circle fa-stack-2x\"></i>\n          <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\n        </span>\n        <span class=\"fa-stack excellent\">\n          <i class=\"fa fa-circle fa-stack-2x\"></i>\n          <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\n        </span>\n        <span class=\"fa-stack excellent\">\n          <i class=\"fa fa-circle fa-stack-2x\"></i>\n          <i class=\"fa fa-star fa-stack-1x fa-inverse\"></i>\n        </span>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/profile/components/program-designer/experience-reviews.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/profile/components/program-designer/experience-reviews.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ProgramDesignerExperienceReviewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramDesignerExperienceReviewsComponent", function() { return ProgramDesignerExperienceReviewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/classes/user */ "./src/app/core/classes/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProgramDesignerExperienceReviewsComponent = /** @class */ (function () {
    function ProgramDesignerExperienceReviewsComponent() {
    }
    ProgramDesignerExperienceReviewsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__["ApplicationUser"])
    ], ProgramDesignerExperienceReviewsComponent.prototype, "applicationUser", void 0);
    ProgramDesignerExperienceReviewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-program-designer-experience-reviews',
            template: __webpack_require__(/*! ./experience-reviews.component.html */ "./src/app/profile/components/program-designer/experience-reviews.component.html")
        })
    ], ProgramDesignerExperienceReviewsComponent);
    return ProgramDesignerExperienceReviewsComponent;
}());



/***/ }),

/***/ "./src/app/profile/components/program-designer/program-design.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/profile/components/program-designer/program-design.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">\n  <div class=\"row align-items-center\">\n    <div class=\"col-12 col-lg-auto col-xl-6 mb-2 mb-xl-0\">\n      <h3>PROGRAM DESIGN: <span>GVT</span></h3>\n    </div>\n    <div class=\"col-12 col-lg col-xl-6 text-lg-right\">\n      <div class=\"sort-box\">\n        <p>LEVEL:</p>\n        <div class=\"dropdown\">\n          <button class=\"btn dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\n            aria-haspopup=\"true\" aria-expanded=\"false\">NOVICE</button>\n          <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n            <a class=\"dropdown-item\" href=\"#\">UNTRAINED</a>\n            <a class=\"dropdown-item\" href=\"#\">NOVICE</a>\n            <a class=\"dropdown-item\" href=\"#\">INTERMEDIATE</a>\n            <a class=\"dropdown-item\" href=\"#\">ADVANCED</a>\n            <a class=\"dropdown-item\" href=\"#\">ELITE</a>\n          </div>\n        </div>\n        <p>Category:</p>\n        <div class=\"dropdown\">\n          <button class=\"btn dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\n            aria-haspopup=\"true\" aria-expanded=\"false\">POWER</button>\n          <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n            <a class=\"dropdown-item\" href=\"#\">STRENGTH</a>\n            <a class=\"dropdown-item\" href=\"#\">HYPERTROPHY</a>\n            <a class=\"dropdown-item\" href=\"#\">MUSCULAR ENDURANCE</a>\n            <a class=\"dropdown-item\" href=\"#\">POWER</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"table-top-program\">\n  <div class=\"table-responsive\">\n    <table class=\"table\">\n      <tbody>\n        <tr>\n          <td rowspan=\"2\">Muscle Group</td>\n          <td rowspan=\"2\">Test Exercise</td>\n          <td rowspan=\"2\">Type of exercise</td>\n          <td rowspan=\"2\">Exercises</td>\n          <td colspan=\"2\" class=\"blue\">Volume</td>\n          <td colspan=\"2\" class=\"orange\">Intensity</td>\n          <td rowspan=\"2\" class=\"green\">Frequency (muscle group per week)</td>\n          <td rowspan=\"2\">Progression model</td>\n          <td rowspan=\"2\">Rest periods</td>\n          <td rowspan=\"2\">Tempo</td>\n        </tr>\n        <tr>\n          <td class=\"blue\">Sets</td>\n          <td class=\"blue\">Reps</td>\n          <td class=\"orange\">% of 1RM</td>\n          <td class=\"orange\">Reps to failure</td>\n        </tr>\n        <!--  -->\n        <tr>\n          <td rowspan=\"2\">Chest</td>\n          <td rowspan=\"2\">Bench Press</td>\n          <td>Multi joint exercises</td>\n          <td></td>\n          <td class=\"blue\"></td>\n          <td class=\"blue\"></td>\n          <td class=\"orange\"></td>\n          <td class=\"orange\"></td>\n          <td class=\"green\"></td>\n          <td></td>\n          <td></td>\n          <td></td>\n        </tr>\n        <tr>\n          <td>Single joint exercises</td>\n          <td></td>\n          <td class=\"blue\"></td>\n          <td class=\"blue\"></td>\n          <td class=\"orange\"></td>\n          <td class=\"orange\"></td>\n          <td class=\"green\"></td>\n          <td></td>\n          <td></td>\n          <td></td>\n        </tr>\n        <!--  -->\n        <tr>\n          <td rowspan=\"2\">Back</td>\n          <td rowspan=\"2\">Deadlift</td>\n          <td>Multi joint exercises</td>\n          <td></td>\n          <td class=\"blue\"></td>\n          <td class=\"blue\"></td>\n          <td class=\"orange\"></td>\n          <td class=\"orange\"></td>\n          <td class=\"green\"></td>\n          <td></td>\n          <td></td>\n          <td></td>\n        </tr>\n        <tr>\n          <td>Single joint exercises</td>\n          <td></td>\n          <td class=\"blue\"></td>\n          <td class=\"blue\"></td>\n          <td class=\"orange\"></td>\n          <td class=\"orange\"></td>\n          <td class=\"green\"></td>\n          <td></td>\n          <td></td>\n          <td></td>\n        </tr>\n        <!--  -->\n        <tr>\n          <td rowspan=\"2\">Quads</td>\n          <td rowspan=\"2\">Squat</td>\n          <td>Multi joint exercises</td>\n          <td></td>\n          <td class=\"blue\"></td>\n          <td class=\"blue\"></td>\n          <td class=\"orange\"></td>\n          <td class=\"orange\"></td>\n          <td class=\"green\"></td>\n          <td></td>\n          <td></td>\n          <td></td>\n        </tr>\n        <tr>\n          <td>Single joint exercises</td>\n          <td></td>\n          <td class=\"blue\"></td>\n          <td class=\"blue\"></td>\n          <td class=\"orange\"></td>\n          <td class=\"orange\"></td>\n          <td class=\"green\"></td>\n          <td></td>\n          <td></td>\n          <td></td>\n        </tr>\n        <!--  -->\n        <tr>\n          <td rowspan=\"2\">Shoulders</td>\n          <td rowspan=\"2\"></td>\n          <td>Multi joint exercises</td>\n          <td></td>\n          <td class=\"blue\"></td>\n          <td class=\"blue\"></td>\n          <td class=\"orange\"></td>\n          <td class=\"orange\"></td>\n          <td class=\"green\"></td>\n          <td></td>\n          <td></td>\n          <td></td>\n        </tr>\n        <tr>\n          <td>Single joint exercises</td>\n          <td></td>\n          <td class=\"blue\"></td>\n          <td class=\"blue\"></td>\n          <td class=\"orange\"></td>\n          <td class=\"orange\"></td>\n          <td class=\"green\"></td>\n          <td></td>\n          <td></td>\n          <td></td>\n        </tr>\n        <!--  -->\n        <tr>\n          <td rowspan=\"2\">Hamstrings</td>\n          <td rowspan=\"2\"></td>\n          <td>Multi joint exercises</td>\n          <td></td>\n          <td class=\"blue\"></td>\n          <td class=\"blue\"></td>\n          <td class=\"orange\"></td>\n          <td class=\"orange\"></td>\n          <td class=\"green\"></td>\n          <td></td>\n          <td></td>\n          <td></td>\n        </tr>\n        <tr>\n          <td>Single joint exercises</td>\n          <td></td>\n          <td class=\"blue\"></td>\n          <td class=\"blue\"></td>\n          <td class=\"orange\"></td>\n          <td class=\"orange\"></td>\n          <td class=\"green\"></td>\n          <td></td>\n          <td></td>\n          <td></td>\n        </tr>\n        <!--  -->\n        <tr>\n          <td rowspan=\"2\">Calves</td>\n          <td rowspan=\"2\"></td>\n          <td>Multi joint exercises</td>\n          <td></td>\n          <td class=\"blue\"></td>\n          <td class=\"blue\"></td>\n          <td class=\"orange\"></td>\n          <td class=\"orange\"></td>\n          <td class=\"green\"></td>\n          <td></td>\n          <td></td>\n          <td></td>\n        </tr>\n        <tr>\n          <td>Single joint exercises</td>\n          <td></td>\n          <td class=\"blue\"></td>\n          <td class=\"blue\"></td>\n          <td class=\"orange\"></td>\n          <td class=\"orange\"></td>\n          <td class=\"green\"></td>\n          <td></td>\n          <td></td>\n          <td></td>\n        </tr>\n        <!--  -->\n        <tr>\n          <td rowspan=\"2\">Triceps</td>\n          <td rowspan=\"2\"></td>\n          <td>Multi joint exercises</td>\n          <td></td>\n          <td class=\"blue\"></td>\n          <td class=\"blue\"></td>\n          <td class=\"orange\"></td>\n          <td class=\"orange\"></td>\n          <td class=\"green\"></td>\n          <td></td>\n          <td></td>\n          <td></td>\n        </tr>\n        <tr>\n          <td>Single joint exercises</td>\n          <td></td>\n          <td class=\"blue\"></td>\n          <td class=\"blue\"></td>\n          <td class=\"orange\"></td>\n          <td class=\"orange\"></td>\n          <td class=\"green\"></td>\n          <td></td>\n          <td></td>\n          <td></td>\n        </tr>\n        <!--  -->\n        <tr>\n          <td rowspan=\"2\">Biceps</td>\n          <td rowspan=\"2\"></td>\n          <td>Multi joint exercises</td>\n          <td></td>\n          <td class=\"blue\"></td>\n          <td class=\"blue\"></td>\n          <td class=\"orange\"></td>\n          <td class=\"orange\"></td>\n          <td class=\"green\"></td>\n          <td></td>\n          <td></td>\n          <td></td>\n        </tr>\n        <tr>\n          <td>Single joint exercises</td>\n          <td></td>\n          <td class=\"blue\"></td>\n          <td class=\"blue\"></td>\n          <td class=\"orange\"></td>\n          <td class=\"orange\"></td>\n          <td class=\"green\"></td>\n          <td></td>\n          <td></td>\n          <td></td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/profile/components/program-designer/program-design.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/profile/components/program-designer/program-design.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ProgramDesignerProgramDesignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramDesignerProgramDesignComponent", function() { return ProgramDesignerProgramDesignComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/classes/user */ "./src/app/core/classes/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProgramDesignerProgramDesignComponent = /** @class */ (function () {
    function ProgramDesignerProgramDesignComponent() {
    }
    ProgramDesignerProgramDesignComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__["ApplicationUser"])
    ], ProgramDesignerProgramDesignComponent.prototype, "applicationUser", void 0);
    ProgramDesignerProgramDesignComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-program-designer-program-design',
            template: __webpack_require__(/*! ./program-design.component.html */ "./src/app/profile/components/program-designer/program-design.component.html")
        })
    ], ProgramDesignerProgramDesignComponent);
    return ProgramDesignerProgramDesignComponent;
}());



/***/ }),

/***/ "./src/app/profile/components/program-designer/program-designer.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/profile/components/program-designer/program-designer.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <osg-profile-about-me></osg-profile-about-me>\n    <osg-news-feed></osg-news-feed>\n</div>\n<div>\n    <osg-program-designer-published-programs></osg-program-designer-published-programs>\n    <osg-program-designer-program-filter></osg-program-designer-program-filter>\n    <osg-program-designer-experience-bank></osg-program-designer-experience-bank>\n    <osg-program-designer-experience-reviews></osg-program-designer-experience-reviews>\n    <osg-program-designer-program-design></osg-program-designer-program-design>\n    <osg-program-designer-training-calendar></osg-program-designer-training-calendar>\n    <osg-get-started></osg-get-started>\n</div>"

/***/ }),

/***/ "./src/app/profile/components/program-designer/program-designer.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/profile/components/program-designer/program-designer.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ProgramDesignerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramDesignerComponent", function() { return ProgramDesignerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/classes/user */ "./src/app/core/classes/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProgramDesignerComponent = /** @class */ (function () {
    function ProgramDesignerComponent() {
    }
    ProgramDesignerComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__["ApplicationUser"])
    ], ProgramDesignerComponent.prototype, "applicationUser", void 0);
    ProgramDesignerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-program-designer',
            template: __webpack_require__(/*! ./program-designer.component.html */ "./src/app/profile/components/program-designer/program-designer.component.html")
        })
    ], ProgramDesignerComponent);
    return ProgramDesignerComponent;
}());



/***/ }),

/***/ "./src/app/profile/components/program-designer/program-filter.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/profile/components/program-designer/program-filter.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <h3>PROGRAM</h3>\n    </div>\n  </div>\n</div>\n\n<div class=\"filter-box\">\n    <h4>Select Program</h4>\n    <div class=\"dropdown white-dropdown with-label\">\n        <label for=\"\">Program</label>\n        <button class=\"btn dropdown-toggle btn-block\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">German Volume Training (GVT)\n        </button>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n            <a class=\"dropdown-item\" href=\"#\">5x5</a>\n            <a class=\"dropdown-item\" href=\"#\">Starting Strength</a>\n            <a class=\"dropdown-item\" href=\"#\">X-Shape</a>\n            <a class=\"dropdown-item\" href=\"#\">Athletic</a>\n        </div>\n    </div>\n    <div class=\"row mt-3\">\n        <div class=\"col-12 col-xl-6\">\n            <h4>Men</h4>\n            <div class=\"row mb-2\">\n                <div class=\"col-12 col-sm-6\">\n                    <div class=\"checbox-dropdown\">\n                        <div class=\"checkbox custom-checkbox\">\n                            <label>\n                                <input type=\"checkbox\" value=\"\">\n                                <span class=\"checkmark\"></span>\n                            </label>\n                        </div>\n                        <div class=\"dropdown white-dropdown with-label\">\n                            <label for=\"\">Body Weight (kg)</label>\n                            <button class=\"btn dropdown-toggle btn-block\" type=\"button\" id=\"dropdownMenuButton1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">0 - 50</button>\n                            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton1\">\n                                <a class=\"dropdown-item\" href=\"#\">0-50</a>\n                                <a class=\"dropdown-item\" href=\"#\">51-60</a>\n                                <a class=\"dropdown-item\" href=\"#\">61-70</a>\n                                <a class=\"dropdown-item\" href=\"#\">71-80</a>\n                                <a class=\"dropdown-item\" href=\"#\">81-90</a>\n                                <a class=\"dropdown-item\" href=\"#\">91-100</a>\n                                <a class=\"dropdown-item\" href=\"#\">101-110</a>\n                                <a class=\"dropdown-item\" href=\"#\">111-120</a>\n                                <a class=\"dropdown-item\" href=\"#\">121-160</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-12 col-sm-6\">\n                    <div class=\"checbox-dropdown\">\n                        <div class=\"checkbox custom-checkbox\">\n                            <label>\n                                <input type=\"checkbox\" value=\"\">\n                                <span class=\"checkmark\"></span>\n                            </label>\n                        </div>\n                        <div class=\"dropdown white-dropdown\">\n                            <button class=\"btn dropdown-toggle btn-block\" type=\"button\" id=\"dropdownMenuButton1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Strength level </button>\n                            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton1\">\n                                <a class=\"dropdown-item\" href=\"#\">Untrained</a>\n                                <a class=\"dropdown-item\" href=\"#\">Novice</a>\n                                <a class=\"dropdown-item\" href=\"#\">Intermediate</a>\n                                <a class=\"dropdown-item\" href=\"#\">Advanced</a>\n                                <a class=\"dropdown-item\" href=\"#\">Elite</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"row mb-2\">\n                <div class=\"col-12 col-sm-6\">\n                    <div class=\"checbox-dropdown\">\n                        <div class=\"checkbox custom-checkbox\">\n                            <label>\n                                <input type=\"checkbox\" value=\"\">\n                                <span class=\"checkmark\"></span>\n                            </label>\n                        </div>\n                        <div class=\"dropdown white-dropdown\">\n                            <button class=\"btn dropdown-toggle btn-block\" type=\"button\" id=\"dropdownMenuButton3\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Waist to hip ratio (cm)</button>\n                            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton3\">\n                                <a class=\"dropdown-item\" href=\"#\">0,71-0,80</a>\n                                <a class=\"dropdown-item\" href=\"#\">0.81-0,90</a>\n                                <a class=\"dropdown-item\" href=\"#\">0,91-1,00</a>\n                                <a class=\"dropdown-item\" href=\"#\">1,01-1,10</a>\n                                <a class=\"dropdown-item\" href=\"#\">1,11-1,20</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-12 col-sm-6\">\n                    <div class=\"checbox-dropdown\">\n                        <div class=\"checkbox custom-checkbox\">\n                            <label>\n                                <input type=\"checkbox\" value=\"\">\n                                <span class=\"checkmark\"></span>\n                            </label>\n                        </div>\n                        <div class=\"dropdown white-dropdown with-label\">\n                            <label for=\"\">Height (cm)</label>\n                            <button class=\"btn dropdown-toggle btn-block\" type=\"button\" id=\"dropdownMenuButton4\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">161 - 170</button>\n                            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton4\">\n                                <a class=\"dropdown-item\" href=\"#\">0-150 </a>\n                                <a class=\"dropdown-item\" href=\"#\">151-160</a>\n                                <a class=\"dropdown-item\" href=\"#\">161-170</a>\n                                <a class=\"dropdown-item\" href=\"#\">171-180</a>\n                                <a class=\"dropdown-item\" href=\"#\">181-190</a>\n                                <a class=\"dropdown-item\" href=\"#\">191-200</a>\n                                <a class=\"dropdown-item\" href=\"#\">201-210</a>\n                                <a class=\"dropdown-item\" href=\"#\">211-220</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"row mb-2\">\n                <div class=\"col-12 col-sm-6\">\n                    <div class=\"checbox-dropdown\">\n                        <div class=\"checkbox custom-checkbox\">\n                            <label>\n                                <input type=\"checkbox\" value=\"\">\n                                <span class=\"checkmark\"></span>\n                            </label>\n                        </div>\n                        <div class=\"dropdown white-dropdown\">\n                            <button class=\"btn dropdown-toggle btn-block\" type=\"button\" id=\"5\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Age (yrs)</button>\n                            <div class=\"dropdown-menu\" aria-labelledby=\"5\">\n                                <a class=\"dropdown-item\" href=\"#\">0-20</a>\n                                <a class=\"dropdown-item\" href=\"#\">21-30</a>\n                                <a class=\"dropdown-item\" href=\"#\">31-40</a>\n                                <a class=\"dropdown-item\" href=\"#\">41-50</a>\n                                <a class=\"dropdown-item\" href=\"#\">51-60</a>\n                                <a class=\"dropdown-item\" href=\"#\">61-80</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-12 col-sm-6\">\n                    <div class=\"checbox-dropdown\">\n                        <div class=\"checkbox custom-checkbox\">\n                            <label>\n                                <input type=\"checkbox\" value=\"\">\n                                <span class=\"checkmark\"></span>\n                            </label>\n                        </div>\n                        <div class=\"dropdown white-dropdown with-label\">\n                            <label for=\"\">Muscle Fiber Type</label>\n                            <button class=\"btn dropdown-toggle btn-block\" type=\"button\" id=\"dropdownMenuButton6\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Slow Twitch</button>\n                            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton6\">\n                                <a class=\"dropdown-item\" href=\"#\">Slow twitch</a>\n                                <a class=\"dropdown-item\" href=\"#\">Fast twitch</a>\n                                <a class=\"dropdown-item\" href=\"#\">Fast and slow twitch</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"col-12 col-xl-6\">\n            <h4>Women</h4>\n            <div class=\"row mb-2\">\n                <div class=\"col-12 col-sm-6\">\n                    <div class=\"checbox-dropdown\">\n                        <div class=\"checkbox custom-checkbox\">\n                            <label>\n                                <input type=\"checkbox\" value=\"\">\n                                <span class=\"checkmark\"></span>\n                            </label>\n                        </div>\n                        <div class=\"dropdown white-dropdown with-label\">\n                            <label for=\"\">Body Weight (kg)</label>\n                            <button class=\"btn dropdown-toggle btn-block\" type=\"button\" id=\"dropdownMenuButton7\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">0 - 5-\n                            </button>\n                            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton7\">\n                                <a class=\"dropdown-item\" href=\"#\">0-40</a>\n                                <a class=\"dropdown-item\" href=\"#\">41-50</a>\n                                <a class=\"dropdown-item\" href=\"#\">51-60</a>\n                                <a class=\"dropdown-item\" href=\"#\">61-70</a>\n                                <a class=\"dropdown-item\" href=\"#\">71-80</a>\n                                <a class=\"dropdown-item\" href=\"#\">81-90</a>\n                                <a class=\"dropdown-item\" href=\"#\">91-100</a>\n                                <a class=\"dropdown-item\" href=\"#\">101-110</a>\n                                <a class=\"dropdown-item\" href=\"#\">111-130</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-12 col-sm-6\">\n                    <div class=\"checbox-dropdown\">\n                        <div class=\"checkbox custom-checkbox\">\n                            <label>\n                                <input type=\"checkbox\" value=\"\">\n                                <span class=\"checkmark\"></span>\n                            </label>\n                        </div>\n                        <div class=\"dropdown white-dropdown\">\n                            <button class=\"btn dropdown-toggle btn-block\" type=\"button\" id=\"dropdownMenuButton1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Strength level</button>\n                            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton1\">\n                                <a class=\"dropdown-item\" href=\"#\">Untrained</a>\n                                <a class=\"dropdown-item\" href=\"#\">Novice</a>\n                                <a class=\"dropdown-item\" href=\"#\">Intermediate</a>\n                                <a class=\"dropdown-item\" href=\"#\">Advanced</a>\n                                <a class=\"dropdown-item\" href=\"#\">Elite </a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"row mb-2\">\n                <div class=\"col-12 col-sm-6\">\n                    <div class=\"checbox-dropdown\">\n                        <div class=\"checkbox custom-checkbox\">\n                            <label>\n                                <input type=\"checkbox\" value=\"\">\n                                <span class=\"checkmark\"></span>\n                            </label>\n                        </div>\n                        <div class=\"dropdown white-dropdown\">\n                            <button class=\"btn dropdown-toggle btn-block\" type=\"button\" id=\"dropdownMenuButton3\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Waist to Hip Ratio (cm)\n                            </button>\n                            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton3\">\n                                <a class=\"dropdown-item\" href=\"#\">0,61-0,70</a>\n                                <a class=\"dropdown-item\" href=\"#\">0,71-0,80</a>\n                                <a class=\"dropdown-item\" href=\"#\">0.81-0,90</a>\n                                <a class=\"dropdown-item\" href=\"#\">0,91-1,00</a>\n                                <a class=\"dropdown-item\" href=\"#\">1,01-1,10</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-12 col-sm-6\">\n                    <div class=\"checbox-dropdown\">\n                        <div class=\"checkbox custom-checkbox\">\n                            <label>\n                                <input type=\"checkbox\" value=\"\">\n                                <span class=\"checkmark\"></span>\n                            </label>\n                        </div>\n                        <div class=\"dropdown white-dropdown with-label\">\n                            <label for=\"\">Height (cm)</label>\n                            <button class=\"btn dropdown-toggle btn-block\" type=\"button\" id=\"dropdownMenuButton4\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">161 - 170</button>\n                            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton4\">\n                                <a class=\"dropdown-item\" href=\"#\">0-140 </a>\n                                <a class=\"dropdown-item\" href=\"#\">141-150</a>\n                                <a class=\"dropdown-item\" href=\"#\">151-160</a>\n                                <a class=\"dropdown-item\" href=\"#\">161-170</a>\n                                <a class=\"dropdown-item\" href=\"#\">171-180</a>\n                                <a class=\"dropdown-item\" href=\"#\">181-190</a>\n                                <a class=\"dropdown-item\" href=\"#\">191-200</a>\n                                <a class=\"dropdown-item\" href=\"#\">201-210</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"row mb-2\">\n                <div class=\"col-12 col-sm-6\">\n                    <div class=\"checbox-dropdown\">\n                        <div class=\"checkbox custom-checkbox\">\n                            <label>\n                                <input type=\"checkbox\" value=\"\">\n                                <span class=\"checkmark\"></span>\n                            </label>\n                        </div>\n                        <div class=\"dropdown white-dropdown\">\n                            <button class=\"btn dropdown-toggle btn-block\" type=\"button\" id=\"5\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Age (yrs)</button>\n                            <div class=\"dropdown-menu\" aria-labelledby=\"5\">\n                                <a class=\"dropdown-item\" href=\"#\">0-20</a>\n                                <a class=\"dropdown-item\" href=\"#\">21-30</a>\n                                <a class=\"dropdown-item\" href=\"#\">31-40</a>\n                                <a class=\"dropdown-item\" href=\"#\">41-50</a>\n                                <a class=\"dropdown-item\" href=\"#\">51-60</a>\n                                <a class=\"dropdown-item\" href=\"#\">61-80</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-12 col-sm-6\">\n                    <div class=\"checbox-dropdown\">\n                        <div class=\"checkbox custom-checkbox\">\n                            <label>\n                                <input type=\"checkbox\" value=\"\">\n                                <span class=\"checkmark\"></span>\n                            </label>\n                        </div>\n                        <div class=\"dropdown white-dropdown with-label\">\n                            <label for=\"\">Muscle Fiber Type</label>\n                            <button class=\"btn dropdown-toggle btn-block\" type=\"button\" id=\"dropdownMenuButton6\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Slow Twitch</button>\n                            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton6\">\n                                <a class=\"dropdown-item\" href=\"#\">Slow twitch</a>\n                                <a class=\"dropdown-item\" href=\"#\">Fast twitch</a>\n                                <a class=\"dropdown-item\" href=\"#\">Fast and slow twitch </a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"actions\">\n        <div class=\"col-12 col-lg-8\">\n            <div class=\"gender\">\n                <h4>Men: </h4>\n                <p>0-50 kg <span>x</span></p>\n                <p>161-170 cm <span>x</span></p>\n                <p>Slow Twitch <span>x</span></p>\n            </div>\n            <div class=\"gender\">\n                <h4>Women: </h4>\n                <p>0-50 kg <span>x</span></p>\n                <p>0-20 years <span>x</span></p>\n            </div>\n        </div>\n        <div class=\"col-12 col-lg-4 mt-2 mt-lg-0 text-center text-lg-right\">\n            <a href=\"\" class=\"btn btn-black px-4 py-2\">SHOW RESULTS</a>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/profile/components/program-designer/program-filter.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/profile/components/program-designer/program-filter.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ProgramDesignerProgramFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramDesignerProgramFilterComponent", function() { return ProgramDesignerProgramFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/classes/user */ "./src/app/core/classes/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProgramDesignerProgramFilterComponent = /** @class */ (function () {
    function ProgramDesignerProgramFilterComponent() {
    }
    ProgramDesignerProgramFilterComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__["ApplicationUser"])
    ], ProgramDesignerProgramFilterComponent.prototype, "applicationUser", void 0);
    ProgramDesignerProgramFilterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-program-designer-program-filter',
            template: __webpack_require__(/*! ./program-filter.component.html */ "./src/app/profile/components/program-designer/program-filter.component.html")
        })
    ], ProgramDesignerProgramFilterComponent);
    return ProgramDesignerProgramFilterComponent;
}());



/***/ }),

/***/ "./src/app/profile/components/program-designer/published-programs.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/profile/components/program-designer/published-programs.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">\n  <div class=\"row align-items-center\">\n    <div class=\"col-12 col-sm-8\">\n      <h3>PUBLISHED PROGRAMS</h3>\n    </div>\n    <div class=\"col-12 col-sm-4 text-right\">\n        <div class=\"control-slider\">\n            <a href=\"\" class=\"btn-control prev\"><i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i></a>\n            <a href=\"\" class=\"btn-control next\"><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i></a>\n        </div>\n        <a href=\"\" class=\"btn btn-green-gradient py-2\">NEW PROGRAM</a>\n    </div>\n  </div>\n</div>\n\n<div class=\"table-responsive\">\n    <table class=\"table\">\n        <thead>\n            <tr>\n                <th>PROGRAM:</th>\n                <th>GVT</th>\n                <th>5x5</th>\n                <th>Starting Strenght</th>\n                <th>X-shape</th>\n                <th>Athletic</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr>\n                <td>PUBLISHED DATE:</td>\n                <td>01.07.18</td>\n                <td>02.05.17</td>\n                <td>15.02.17</td>\n                <td>12.12.17</td>\n                <td>10.10.17</td>\n            </tr>\n            <tr>\n                <td>NO. OF COMPLETIONS:</td>\n                <td>352</td>\n                <td>386</td>\n                <td>486</td>\n                <td>689</td>\n                <td>796</td>\n            </tr>\n            <tr>\n                <td>Length (Weeks):</td>\n                <td>12</td>\n                <td>9</td>\n                <td>16</td>\n                <td>22</td>\n                <td>12</td>\n            </tr>\n            <tr>\n                <td>CATEGORY: </td>\n                <td>Hypertrophy</td>\n                <td>Strength</td>\n                <td>Strength</td>\n                <td>Hypertrophy</td>\n                <td>Hypertrophy</td>\n            </tr>\n            <tr>\n                <td>TRAINING SPLIT:</td>\n                <td>3</td>\n                <td>2</td>\n                <td>4</td>\n                <td>5</td>\n                <td>3</td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n"

/***/ }),

/***/ "./src/app/profile/components/program-designer/published-programs.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/profile/components/program-designer/published-programs.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ProgramDesignerPublishedProgramsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramDesignerPublishedProgramsComponent", function() { return ProgramDesignerPublishedProgramsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/classes/user */ "./src/app/core/classes/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProgramDesignerPublishedProgramsComponent = /** @class */ (function () {
    function ProgramDesignerPublishedProgramsComponent() {
    }
    ProgramDesignerPublishedProgramsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__["ApplicationUser"])
    ], ProgramDesignerPublishedProgramsComponent.prototype, "applicationUser", void 0);
    ProgramDesignerPublishedProgramsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-program-designer-published-programs',
            template: __webpack_require__(/*! ./published-programs.component.html */ "./src/app/profile/components/program-designer/published-programs.component.html")
        })
    ], ProgramDesignerPublishedProgramsComponent);
    return ProgramDesignerPublishedProgramsComponent;
}());



/***/ }),

/***/ "./src/app/profile/components/program-designer/training-calendar.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/profile/components/program-designer/training-calendar.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">\n  <div class=\"col-12 col-lg col-xl-5 mb-4 mb-xl-0\">\n    <h3>THE TRAINING PROGRAM: <span>GVT</span></h3>\n  </div>\n  <div class=\"col-12 col-sm-auto col-lg-auto\">\n    <div class=\"control-slider\">\n      <p>AUGUST 2018</p>\n      <a href=\"\" class=\"btn-control prev\"><i class=\"fa fa-angle-up\" aria-hidden=\"true\"></i></a>\n      <a href=\"\" class=\"btn-control next\"><i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i></a>\n    </div>\n  </div>\n  <div class=\"col-12 col-sm-auto col-lg-12 col-xl-auto\">\n    <a href=\"\" class=\"btn btn-green-gradient py-2\">ADD TO YOUR CALENDAR</a>\n  </div>\n</div>\n\n<div class=\"conventions\">\n  <p class=\"test-days\"><span></span>Test days</p>\n  <p class=\"training-days\"><span></span>Training days</p>\n</div>\n\n<div class=\"calendar\">\n  <div class=\"week-days\">\n    <div class=\"col\">Sunday</div>\n    <div class=\"col\">Monday</div>\n    <div class=\"col\">Tuesday</div>\n    <div class=\"col\">Wednesday</div>\n    <div class=\"col\">Thursday</div>\n    <div class=\"col\">Friday</div>\n    <div class=\"col\">Saturday</div>\n  </div>\n  <div class=\"wrapper-weeks\">\n    <div class=\"week\">\n\n      <div class=\"day\">\n        <div><span class=\"time\">30</span></div>\n      </div>\n\n      <div class=\"day training-days test-days\">\n        <div>\n          <span class=\"time\">Jul 31</span>\n          <b>GVT</b>\n          <p>Quads, hamstrings,and calves</p>\n        </div>\n      </div>\n\n      <div class=\"day\">\n        <div><span class=\"time\">Aug 1</span></div>\n      </div>\n\n      <div class=\"day training-days test-days\">\n        <div>\n          <span class=\"time\">2</span>\n          <b>GVT</b>\n          <p>Chest, shoulders, and triceps </p>\n        </div>\n      </div>\n\n      <div class=\"day\">\n        <div><span class=\"time\">3</span></div>\n      </div>\n\n      <div class=\"day training-days test-days\">\n        <div>\n          <span class=\"time\">4</span>\n          <b>GVT</b>\n          <p>Back, biceps, and abs</p>\n        </div>\n      </div>\n\n      <div class=\"day\">\n        <div><span class=\"time\">5</span></div>\n      </div>\n\n    </div>\n\n    <div class=\"week\">\n\n      <div class=\"day\">\n        <div><span class=\"time\">6</span></div>\n      </div>\n\n      <div class=\"day training-days\">\n        <div>\n          <span class=\"time\">7</span>\n          <b>GVT</b>\n          <p>Quads, hamstrings,and calves</p>\n        </div>\n      </div>\n\n      <div class=\"day\">\n        <div><span class=\"time\">8</span></div>\n      </div>\n\n      <div class=\"day training-days\">\n        <div>\n          <span class=\"time\">9</span>\n          <b>GVT</b>\n          <p>Chest, shoulders, and triceps </p>\n        </div>\n      </div>\n\n      <div class=\"day\">\n        <div><span class=\"time\">10</span></div>\n      </div>\n\n      <div class=\"day training-days\">\n        <div>\n          <span class=\"time\">11</span>\n          <b>GVT</b>\n          <p>Back, biceps, and abs</p>\n        </div>\n      </div>\n\n      <div class=\"day\">\n        <div><span class=\"time\">12</span></div>\n      </div>\n\n    </div>\n\n    <div class=\"week\">\n\n      <div class=\"day\">\n        <div><span class=\"time\">13</span></div>\n      </div>\n\n      <div class=\"day training-days\">\n        <div>\n          <span class=\"time\">14</span>\n          <b>GVT</b>\n          <p>Quads, hamstrings,and calves</p>\n        </div>\n      </div>\n\n      <div class=\"day\">\n        <div><span class=\"time\">15</span></div>\n      </div>\n\n      <div class=\"day training-days\">\n        <div>\n          <span class=\"time\">16</span>\n          <b>GVT</b>\n          <p>Chest, shoulders, and triceps </p>\n        </div>\n      </div>\n\n      <div class=\"day\">\n        <div><span class=\"time\">17</span></div>\n      </div>\n\n      <div class=\"day training-days\">\n        <div>\n          <span class=\"time\">18</span>\n          <b>GVT</b>\n          <p>Back, biceps, and abs</p>\n        </div>\n      </div>\n\n      <div class=\"day\">\n        <div><span class=\"time\">19</span></div>\n      </div>\n\n    </div>\n\n    <div class=\"week\">\n\n      <div class=\"day\">\n        <div><span class=\"time\">20</span></div>\n      </div>\n\n      <div class=\"day training-days\">\n        <div>\n          <span class=\"time\">21</span>\n          <b>GVT</b>\n          <p>Quads, hamstrings,and calves</p>\n        </div>\n      </div>\n\n      <div class=\"day\">\n        <div><span class=\"time\">22</span></div>\n      </div>\n\n      <div class=\"day training-days\">\n        <div>\n          <span class=\"time\">23</span>\n          <b>GVT</b>\n          <p>Chest, shoulders, and triceps </p>\n        </div>\n      </div>\n\n      <div class=\"day\">\n        <div><span class=\"time\">24</span></div>\n      </div>\n\n      <div class=\"day training-days\">\n        <div>\n          <span class=\"time\">25</span>\n          <b>GVT</b>\n          <p>Back, biceps, and abs</p>\n        </div>\n      </div>\n\n      <div class=\"day\">\n        <div><span class=\"time\">26</span></div>\n      </div>\n\n    </div>\n\n    <div class=\"week\">\n\n      <div class=\"day\">\n        <div><span class=\"time\">27</span></div>\n      </div>\n\n      <div class=\"day training-days\">\n        <div>\n          <span class=\"time\">28</span>\n          <b>GVT</b>\n          <p>Quads, hamstrings,and calves</p>\n        </div>\n      </div>\n\n      <div class=\"day\">\n        <div><span class=\"time\">29</span></div>\n      </div>\n\n      <div class=\"day training-days\">\n        <div>\n          <span class=\"time\">30</span>\n          <b>GVT</b>\n          <p>Chest, shoulders, and triceps </p>\n        </div>\n      </div>\n\n      <div class=\"day\">\n        <div><span class=\"time\">Aug 31</span></div>\n      </div>\n\n      <div class=\"day training-days\">\n        <div>\n          <span class=\"time\">Sep 1</span>\n          <b>GVT</b>\n          <p>Back, biceps, and abs</p>\n        </div>\n      </div>\n\n      <div class=\"day\">\n        <div><span class=\"time\">2</span></div>\n      </div>\n\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/profile/components/program-designer/training-calendar.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/profile/components/program-designer/training-calendar.component.ts ***!
  \************************************************************************************/
/*! exports provided: ProgramDesignerTrainingCalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramDesignerTrainingCalendarComponent", function() { return ProgramDesignerTrainingCalendarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/classes/user */ "./src/app/core/classes/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProgramDesignerTrainingCalendarComponent = /** @class */ (function () {
    function ProgramDesignerTrainingCalendarComponent() {
    }
    ProgramDesignerTrainingCalendarComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__["ApplicationUser"])
    ], ProgramDesignerTrainingCalendarComponent.prototype, "applicationUser", void 0);
    ProgramDesignerTrainingCalendarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-program-designer-training-calendar',
            template: __webpack_require__(/*! ./training-calendar.component.html */ "./src/app/profile/components/program-designer/training-calendar.component.html")
        })
    ], ProgramDesignerTrainingCalendarComponent);
    return ProgramDesignerTrainingCalendarComponent;
}());



/***/ }),

/***/ "./src/app/profile/components/strength-athlete/performance-comparison.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/profile/components/strength-athlete/performance-comparison.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"detail-title text-center\">\n    <h4>{{title}}</h4>\n    <p>You responded better than:</p>\n</div>\n<div class=\"row no-gutters text-center\">\n    <div class=\"col-12 col-sm-6\">\n        <div class=\"graph\">\n            <div class=\"gauge-container\">\n                <osg-gauge css=\"green no-circle\" [value]=\"33\"></osg-gauge>\n            </div>\n            <p>of male lifters at your <b>strength level</b></p>\n        </div>\n    </div>\n    <div class=\"col-12 col-sm-6\">\n        <div class=\"graph\">\n            <div class=\"gauge-container\">\n                <osg-gauge css=\"orange no-circle\" [value]=\"33\"></osg-gauge>\n            </div>\n            <p>of male lifters at your <b>strength level</b></p>\n        </div>\n    </div>\n    <div class=\"col-12 col-sm-6\">\n        <div class=\"graph\">\n            <div class=\"gauge-container\">\n                <osg-gauge css=\"red no-circle\" [value]=\"33\"></osg-gauge>\n            </div>\n            <p>of male lifters at your <b>strength level</b></p>\n        </div>\n    </div>\n    <div class=\"col-12 col-sm-6\">\n        <div class=\"graph\">\n            <div class=\"gauge-container\">\n                <osg-gauge css=\"blue no-circle\" [value]=\"33\"></osg-gauge>\n            </div>\n            <p>of male lifters at your <b>strength level</b></p>\n        </div>\n    </div>\n    <div class=\"col-12 col-sm-6\">\n        <div class=\"graph\">\n            <div class=\"gauge-container\">\n                <osg-gauge css=\"red no-circle\" [value]=\"33\"></osg-gauge>\n            </div>\n            <p>of male lifters at your <b>strength level</b></p>\n        </div>\n    </div>\n    <div class=\"col-12 col-sm-6\">\n        <div class=\"graph\">\n            <div class=\"gauge-container\">\n                <osg-gauge css=\"red no-circle\" [value]=\"33\"></osg-gauge>\n            </div>\n            <p>of male lifters at your <b>strength level</b></p>\n        </div>\n    </div>\n</div>\n<div class=\"detail-footer\">\n    <div class=\"row\">\n        <div class=\"col-12 col-sm-4\">\n            <div class=\"gauge-container\">\n                <osg-gauge css=\"blue no-circle\" [value]=\"33\"></osg-gauge>\n            </div>\n        </div>\n        <div class=\"col-12 col-sm-8\">\n            <p>of your mirror athletes (all variables combined)</p>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/profile/components/strength-athlete/performance-comparison.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/profile/components/strength-athlete/performance-comparison.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: StrengthAthletePerformanceComparisonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrengthAthletePerformanceComparisonComponent", function() { return StrengthAthletePerformanceComparisonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StrengthAthletePerformanceComparisonComponent = /** @class */ (function () {
    function StrengthAthletePerformanceComparisonComponent() {
        this.title = '';
    }
    StrengthAthletePerformanceComparisonComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StrengthAthletePerformanceComparisonComponent.prototype, "title", void 0);
    StrengthAthletePerformanceComparisonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-strength-athlete-performance-comparison',
            template: __webpack_require__(/*! ./performance-comparison.component.html */ "./src/app/profile/components/strength-athlete/performance-comparison.component.html")
        })
    ], StrengthAthletePerformanceComparisonComponent);
    return StrengthAthletePerformanceComparisonComponent;
}());



/***/ }),

/***/ "./src/app/profile/components/strength-athlete/performance-table.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/profile/components/strength-athlete/performance-table.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">\n  <div class=\"row align-items-center\">\n    <div class=\"col-12 col-sm\">\n      <h3>PERFORMANCE TABLE (YOUR RESULTS)</h3>\n    </div>\n    <div class=\"col-12 col-sm-auto text-right\">\n      <div class=\"sort-box\">\n        <p>PROGRAM:</p>\n        <div class=\"dropdown\">\n            <button class=\"btn dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">GVT</button>\n            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                <a class=\"dropdown-item\" href=\"#\">BASE LIFTS</a>\n                <a class=\"dropdown-item\" href=\"#\">STARTING STRENGTH</a>\n                <a class=\"dropdown-item\" href=\"#\">LADDER STRENGTH</a>\n                <a class=\"dropdown-item\" href=\"#\">POWER BUILDING</a>\n                <a class=\"dropdown-item\" href=\"#\">GVT</a>\n                <a class=\"dropdown-item\" href=\"#\">5x5</a>\n            </div>\n            </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"perfomance-table\">\n    <div class=\"table-responsive\">\n        <table class=\"table main-table\">\n            <tbody>\n                <tr>\n                    <td>\n                        <table class=\"first-table\" height=\"170\">\n                            <tr>\n                                <td>Program:</td>\n                                <td>GVT</td>\n                            </tr>\n                            <tr>\n                                <td>Category:</td>\n                                <td>Hypertrophy</td>\n                            </tr>\n                            <tr>\n                                <td>Period:</td>\n                                <td>01.06.18 - 31.07.18</td>\n                            </tr>\n                        </table>\n                    </td>\n                    <td>\n                        <table class=\"second-table\" height=\"170\">\n                            <thead>\n                                <tr>\n                                    <th>TEST EXERCISE:</th>\n                                    <th>PRE TEST (1RM):</th>\n                                    <th>POSTEST (1RM):</th>\n                                    <th>RESULTS (% INCREASE):</th>\n                                    <th>PRETEST (LEVEL):</th>\n                                    <th>POSTTEST (LEVEL):</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <td>Bench Press</td>\n                                    <td>100</td>\n                                    <td>108</td>\n                                    <td>8,00%</td>\n                                    <td>Intermediate</td>\n                                    <td>Intermediate</td>\n                                </tr>\n                                <tr>\n                                    <td>Squat</td>\n                                    <td>140</td>\n                                    <td>145</td>\n                                    <td>3,57%</td>\n                                    <td>intermediate</td>\n                                    <td>intermediate</td>\n                                </tr>\n                                <tr>\n                                    <td>Dead lift</td>\n                                    <td>150</td>\n                                    <td>157</td>\n                                    <td>4,67%</td>\n                                    <td>intermediate</td>\n                                    <td>intermediate</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </td>\n                </tr>\n                <tr>\n                    <td colspan=\"2\">\n                        <table width=\"100%\">\n                            <tr>\n                                <td class=\"title-variables\">BACKGROUND VARIABLES:</td>\n                            </tr>\n                        </table>\n                    </td>\n                </tr>\n                <tr>\n                    <td colspan=\"2\">\n                        <table class=\"third-table\">\n                            <thead>\n                                <tr>\n                                    <th></th>\n                                    <th>BODY WEIGHT:</th>\n                                    <th>WAIST-HIP RATIO:</th>\n                                    <th>CALORIE INTAKE:</th>\n                                    <th>STRESS LEVEL:</th>\n                                    <th>SLEEP LEVEL:</th>\n                                    <th>MUSCLE FIBER TYPE:</th>\n                                    <th>HEIGHT:</th>\n                                    <th>AGE:</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <td>PRETEST:</td>\n                                    <td>105</td>\n                                    <td>0,97</td>\n                                    <td>Deficit</td>\n                                    <td>Ok</td>\n                                    <td>Good</td>\n                                    <td>Slow twich</td>\n                                    <td>190</td>\n                                    <td>38</td>\n                                </tr>\n                                <tr>\n                                    <td>POSTtTEST:</td>\n                                    <td>105</td>\n                                    <td>0,97</td>\n                                    <td>Deficit</td>\n                                    <td>Ok</td>\n                                    <td>Good</td>\n                                    <td>Slow twich</td>\n                                    <td>190</td>\n                                    <td>38</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n\n<div class=\"row\">\n\n    <div class=\"col-12 col-sm-9\">\n        <div class=\"row\">\n            <div class=\"col-sm-4\" *ngFor=\"let comparison of comparisons\">\n                <osg-strength-athlete-performance-comparison [title]=\"comparison\"></osg-strength-athlete-performance-comparison>\n            </div>\n        </div>\n    </div>\n\n\n    <div class=\"col-12 col-sm-3\">\n        <div class=\"recomendations\">\n            <div class=\"title-recomendations\">\n                <h4>Recomendations</h4>\n                <p>Take necessary action(s).</p>\n            </div>\n            <ul>\n                <li>Eat slightly more</li>\n                <li>Try different training design</li>\n                <li>Try different training design</li>\n                <li>Get more sleep</li>\n            </ul>\n        </div>\n\n        <div class=\"exercise-notes mt-4\">\n            <div class=\"title-exercise\">\n                <h4>EXERCISE NOTES</h4>\n                <p>View your notes</p>\n                <ul>\n                    <li><time>11.06.17</time>\n                    <p>Exercise notes 1</p><a href=\"\">View</a></li>\n                    <li><time>11.06.17</time>\n                    <p>Exercise notes 2</p><a href=\"\">View</a></li>\n                    <li><time>11.06.17</time>\n                    <p>Exercise notes 3</p><a href=\"\">View</a></li>\n                    <li><time>11.06.17</time>\n                    <p>Exercise notes 4</p><a href=\"\">View</a></li>\n                    <li><time>11.06.17</time>\n                    <p>Exercise notes 5</p><a href=\"\">View</a></li>\n                    <li><time>11.06.17</time>\n                    <p>Exercise notes 6</p><a href=\"\">View</a></li>\n                </ul>\n            </div>\n        </div>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/profile/components/strength-athlete/performance-table.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/profile/components/strength-athlete/performance-table.component.ts ***!
  \************************************************************************************/
/*! exports provided: StrengthAthletePerformanceTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrengthAthletePerformanceTableComponent", function() { return StrengthAthletePerformanceTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/classes/user */ "./src/app/core/classes/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StrengthAthletePerformanceTableComponent = /** @class */ (function () {
    function StrengthAthletePerformanceTableComponent() {
        this.comparisons = ['bench press', 'squats', 'deadlift'];
    }
    StrengthAthletePerformanceTableComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__["ApplicationUser"])
    ], StrengthAthletePerformanceTableComponent.prototype, "applicationUser", void 0);
    StrengthAthletePerformanceTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-strength-athlete-performance-table',
            template: __webpack_require__(/*! ./performance-table.component.html */ "./src/app/profile/components/strength-athlete/performance-table.component.html")
        })
    ], StrengthAthletePerformanceTableComponent);
    return StrengthAthletePerformanceTableComponent;
}());



/***/ }),

/***/ "./src/app/profile/components/strength-athlete/strength-athlete.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/profile/components/strength-athlete/strength-athlete.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <osg-profile-about-me></osg-profile-about-me>\n    <osg-news-feed></osg-news-feed>\n</div>\n<div>\n    <osg-strength-athlete-trophy-wall></osg-strength-athlete-trophy-wall>\n    <osg-strength-athlete-timeline></osg-strength-athlete-timeline>\n    <osg-strength-athlete-performance-table></osg-strength-athlete-performance-table>\n    <osg-strength-athlete-top-program-designs></osg-strength-athlete-top-program-designs>\n    <osg-strength-athlete-training-calendar></osg-strength-athlete-training-calendar>\n</div>"

/***/ }),

/***/ "./src/app/profile/components/strength-athlete/strength-athlete.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/profile/components/strength-athlete/strength-athlete.component.ts ***!
  \***********************************************************************************/
/*! exports provided: StrengthAthleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrengthAthleteComponent", function() { return StrengthAthleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/classes/user */ "./src/app/core/classes/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StrengthAthleteComponent = /** @class */ (function () {
    function StrengthAthleteComponent() {
    }
    StrengthAthleteComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__["ApplicationUser"])
    ], StrengthAthleteComponent.prototype, "applicationUser", void 0);
    StrengthAthleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-strength-athlete',
            template: __webpack_require__(/*! ./strength-athlete.component.html */ "./src/app/profile/components/strength-athlete/strength-athlete.component.html")
        })
    ], StrengthAthleteComponent);
    return StrengthAthleteComponent;
}());



/***/ }),

/***/ "./src/app/profile/components/strength-athlete/timeline.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/profile/components/strength-athlete/timeline.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">\n  <div class=\"row align-items-center\">\n    <div class=\"col-12 col-sm-6\">\n      <h3>TIMELINE</h3>\n    </div>\n    <div class=\"col-12 col-sm-6\">\n      <div class=\"control-slider text-right\">\n        <a href=\"\" class=\"btn-control prev\"><i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i></a>\n        <a href=\"\" class=\"btn-control next\"><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i></a>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"timeline-table\">\n  <div class=\"table-responsive\">\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th colspan=\"1\" rowspan=\"2\"></th>\n          <th colspan=\"4\"></th>\n          <th colspan=\"13\">2018</th>\n        </tr>\n        <tr>\n          <th colspan=\"2\">Sept.</th>\n          <th colspan=\"2\">Oct.</th>\n          <th colspan=\"2\">NOV.</th>\n          <th colspan=\"2\">Des.</th>\n          <th>Jan.</th>\n          <th>FEB.</th>\n          <th>MAR.</th>\n          <th>APR.</th>\n          <th>MAY.</th>\n          <th>JUN.</th>\n          <th>JUL.</th>\n          <th>AUG.</th>\n          <th>SEPT.</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr class=\"program\">\n          <td>PROGRAM</td>\n          <td colspan=\"3\">Base lifts</td>\n          <td colspan=\"4\"><span class=\"pause\"></span></td>\n          <td colspan=\"3\">Starting Strength</td>\n          <td colspan=\"2\">Ladder Strength</td>\n          <td colspan=\"1\">Power Building</td>\n          <td colspan=\"2\">GVT</td>\n          <td colspan=\"2\">5x5</td>\n        </tr>\n        <tr>\n          <td>Period</td>\n          <td colspan=\"3\">10.09.17 - 06.10.17 </td>\n          <td colspan=\"4\"><span class=\"pause\"></span></td>\n          <td colspan=\"3\">15.12.17 - 28.07.18 </td>\n          <td colspan=\"2\">01.03.18 - 30.04.18 </td>\n          <td colspan=\"1\">01.05.18 - 31.05.18 </td>\n          <td colspan=\"2\">01.06.18 - 31.07.18 </td>\n          <td colspan=\"2\">01.08.18 - 16.09.18 </td>\n        </tr>\n        <tr>\n          <td>Category</td>\n          <td colspan=\"3\">Power </td>\n          <td colspan=\"4\"><span class=\"pause\"></span></td>\n          <td colspan=\"3\">Strength </td>\n          <td colspan=\"2\">Strength</td>\n          <td colspan=\"1\">Strength/Hypertrophy </td>\n          <td colspan=\"2\">Hypertrophy </td>\n          <td colspan=\"2\">Strength </td>\n        </tr>\n        <tr>\n          <td>Calorie con.</td>\n          <td colspan=\"3\">Maintenance </td>\n          <td colspan=\"4\"><span class=\"pause\"></span></td>\n          <td colspan=\"3\">Maintenance </td>\n          <td colspan=\"2\">Surplus</td>\n          <td colspan=\"1\">Surplus </td>\n          <td colspan=\"2\">Deficit </td>\n          <td colspan=\"2\">Deficit </td>\n        </tr>\n        <tr>\n          <td>Body Weight.</td>\n          <td colspan=\"3\">101 </td>\n          <td colspan=\"4\"><span class=\"pause\"></span></td>\n          <td colspan=\"3\">102 </td>\n          <td colspan=\"2\">104</td>\n          <td colspan=\"1\">105 </td>\n          <td colspan=\"2\">104 </td>\n          <td colspan=\"2\">103 </td>\n        </tr>\n        <tr>\n          <td>WAIST-HIP RATIO</td>\n          <td colspan=\"3\"><span class=\"good\"></span></td>\n          <td colspan=\"4\"><span class=\"pause\"></span></td>\n          <td colspan=\"3\"><span class=\"good\"></span></td>\n          <td colspan=\"2\"><span class=\"ok\"></span></td>\n          <td colspan=\"1\"><span class=\"need-improvement\"></span></td>\n          <td colspan=\"2\"><span class=\"ok\"></span></td>\n          <td colspan=\"2\"><span class=\"need-improvement\"></span></td>\n        </tr>\n        <tr>\n          <td>STRESS LEVEL</td>\n          <td colspan=\"3\"><span class=\"good\"></span></td>\n          <td colspan=\"4\"><span class=\"pause\"></span></td>\n          <td colspan=\"3\"><span class=\"good\"></span></td>\n          <td colspan=\"2\"><span class=\"ok\"></span></td>\n          <td colspan=\"1\"><span class=\"good\"></span></td>\n          <td colspan=\"2\"><span class=\"ok\"></span></td>\n          <td colspan=\"2\"><span class=\"good\"></span></td>\n        </tr>\n        <tr>\n          <td>SLEEP</td>\n          <td colspan=\"3\"><span class=\"ok\"></span></td>\n          <td colspan=\"4\"><span class=\"pause\"></span></td>\n          <td colspan=\"3\"><span class=\"need-improvement\"></span></td>\n          <td colspan=\"2\"><span class=\"ok\"></span></td>\n          <td colspan=\"1\"><span class=\"good\"></span></td>\n          <td colspan=\"2\"><span class=\"good\"></span></td>\n          <td colspan=\"2\"><span class=\"good\"></span></td>\n        </tr>\n        <tr>\n            <td></td>\n            <td colspan=\"3\"><a href=\"\"><span>+</span>Add PT</a></td>\n            <td colspan=\"4\"><a href=\"\"><span>+</span>Add PT</a></td>\n            <td colspan=\"3\"><a href=\"\"><span>+</span>Add PT</a></td>\n            <td colspan=\"2\"><a class=\"added\" href=\"\"><span>-</span>PT Nohman</a></td>\n            <td colspan=\"1\"><a href=\"\"><span>+</span>Add PT</a></td>\n            <td colspan=\"2\"><a href=\"\"><span>+</span>Add PT</a></td>\n            <td colspan=\"2\"><a href=\"\"><span>+</span>Add PT</a></td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n\n<div class=\"conventions\">\n    <div class=\"row\">\n        <div class=\"col-12 text-right\">\n            <p class=\"pause\">\n                <span></span> Pause > 1 month\n            </p>\n            <p class=\"good\">\n                <span></span> Good\n            </p>\n            <p class=\"ok\">\n                <span></span> OK\n            </p>\n            <p class=\"need-improvement\">\n                <span></span> Need improvement\n            </p>\n            <p class=\"add-trainer\">\n                <span>+</span> Add your personal trainer\n            </p>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/profile/components/strength-athlete/timeline.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/profile/components/strength-athlete/timeline.component.ts ***!
  \***************************************************************************/
/*! exports provided: StrengthAthleteTimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrengthAthleteTimelineComponent", function() { return StrengthAthleteTimelineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/classes/user */ "./src/app/core/classes/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StrengthAthleteTimelineComponent = /** @class */ (function () {
    function StrengthAthleteTimelineComponent() {
    }
    StrengthAthleteTimelineComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__["ApplicationUser"])
    ], StrengthAthleteTimelineComponent.prototype, "applicationUser", void 0);
    StrengthAthleteTimelineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-strength-athlete-timeline',
            template: __webpack_require__(/*! ./timeline.component.html */ "./src/app/profile/components/strength-athlete/timeline.component.html")
        })
    ], StrengthAthleteTimelineComponent);
    return StrengthAthleteTimelineComponent;
}());



/***/ }),

/***/ "./src/app/profile/components/strength-athlete/top-program-designs.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/profile/components/strength-athlete/top-program-designs.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">\n    <div class=\"row align-items-center\">\n        <div class=\"col-12 col-sm-6\">\n        <h3>TOP PROGRAM DESIGNS</h3>\n        </div>\n        <div class=\"col-12 col-sm-6 text-right\">\n        <div class=\"sort-box\">\n            <p>LEVEL:</p>\n            <div class=\"dropdown\">\n                <button class=\"btn dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">NOVICE</button>\n                <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                    <a class=\"dropdown-item\" href=\"#\">Action</a>\n                    <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                    <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                </div>\n            </div>\n            <p>Category:</p>\n            <div class=\"dropdown\">\n                <button class=\"btn dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Power</button>\n                <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                    <a class=\"dropdown-item\" href=\"#\">Action</a>\n                    <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                    <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                </div>\n            </div>\n        </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"table-top-program\">\n    <div class=\"table-responsive\">\n        <table class=\"table\">\n            <thead>\n                <tr>\n                    <th colspan=\"3\"></th>\n                    <th colspan=\"10\">PROGRAM DESIGN</th>\n                    <th colspan=\"2\"></th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td rowspan=\"2\">Muscle Group</td>\n                    <td rowspan=\"2\">Best Training Program</td>\n                    <td rowspan=\"2\">Level (pretest)</td>\n                    <td rowspan=\"2\">Type of exercise</td>\n                    <td rowspan=\"2\">Exercises</td>\n                    <td colspan=\"2\" class=\"blue\">Volume</td>\n                    <td colspan=\"2\" class=\"orange\">Intensity</td>\n                    <td rowspan=\"2\" class=\"green\">Frequency (muscle group per week)</td>\n                    <td rowspan=\"2\">Progression model</td>\n                    <td rowspan=\"2\">Rest periods</td>\n                    <td rowspan=\"2\">Tempo</td>\n                    <td rowspan=\"2\">Test exercise</td>\n                    <td rowspan=\"2\" class=\"orange\">Percentage Increase</td>\n                </tr>\n                <tr>\n                    <td class=\"blue\">Sets</td>\n                    <td class=\"blue\">Reps</td>\n                    <td class=\"orange\">% of 1RM</td>\n                    <td class=\"orange\">Reps to failure</td>\n                </tr>\n                <!--  -->\n                <tr>\n                    <td rowspan=\"2\">Chest</td>\n                    <td rowspan=\"2\"></td>\n                    <td rowspan=\"2\"></td>\n                    <td >Multi joint exercises</td>\n                    <td></td>\n                    <td class=\"blue\"></td>\n                    <td class=\"blue\"></td>\n                    <td class=\"orange\"></td>\n                    <td class=\"orange\"></td>\n                    <td class=\"green\"></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td rowspan=\"2\"></td>\n                    <td rowspan=\"2\" class=\"orange\"></td>\n                </tr>\n                <tr>\n                    <td>Single joint exercises</td>\n                    <td></td>\n                    <td class=\"blue\"></td>\n                    <td class=\"blue\"></td>\n                    <td class=\"orange\"></td>\n                    <td class=\"orange\"></td>\n                    <td class=\"green\"></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <!--  -->\n                <tr>\n                    <td rowspan=\"2\">Back</td>\n                    <td rowspan=\"2\"></td>\n                    <td rowspan=\"2\"></td>\n                    <td >Multi joint exercises</td>\n                    <td></td>\n                    <td class=\"blue\"></td>\n                    <td class=\"blue\"></td>\n                    <td class=\"orange\"></td>\n                    <td class=\"orange\"></td>\n                    <td class=\"green\"></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td rowspan=\"2\"></td>\n                    <td rowspan=\"2\" class=\"orange\"></td>\n                </tr>\n                <tr>\n                    <td>Single joint exercises</td>\n                    <td></td>\n                    <td class=\"blue\"></td>\n                    <td class=\"blue\"></td>\n                    <td class=\"orange\"></td>\n                    <td class=\"orange\"></td>\n                    <td class=\"green\"></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <!--  -->\n                <tr>\n                    <td rowspan=\"2\">Quads</td>\n                    <td rowspan=\"2\"></td>\n                    <td rowspan=\"2\"></td>\n                    <td >Multi joint exercises</td>\n                    <td></td>\n                    <td class=\"blue\"></td>\n                    <td class=\"blue\"></td>\n                    <td class=\"orange\"></td>\n                    <td class=\"orange\"></td>\n                    <td class=\"green\"></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td rowspan=\"2\"></td>\n                    <td rowspan=\"2\" class=\"orange\"></td>\n                </tr>\n                <tr>\n                    <td>Single joint exercises</td>\n                    <td></td>\n                    <td class=\"blue\"></td>\n                    <td class=\"blue\"></td>\n                    <td class=\"orange\"></td>\n                    <td class=\"orange\"></td>\n                    <td class=\"green\"></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <!--  -->\n                <tr>\n                    <td rowspan=\"2\">Shoulders</td>\n                    <td rowspan=\"2\"></td>\n                    <td rowspan=\"2\"></td>\n                    <td >Multi joint exercises</td>\n                    <td></td>\n                    <td class=\"blue\"></td>\n                    <td class=\"blue\"></td>\n                    <td class=\"orange\"></td>\n                    <td class=\"orange\"></td>\n                    <td class=\"green\"></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td rowspan=\"2\"></td>\n                    <td rowspan=\"2\" class=\"orange\"></td>\n                </tr>\n                <tr>\n                    <td>Single joint exercises</td>\n                    <td></td>\n                    <td class=\"blue\"></td>\n                    <td class=\"blue\"></td>\n                    <td class=\"orange\"></td>\n                    <td class=\"orange\"></td>\n                    <td class=\"green\"></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <!--  -->\n                <tr>\n                    <td rowspan=\"2\">Hamstrings</td>\n                    <td rowspan=\"2\"></td>\n                    <td rowspan=\"2\"></td>\n                    <td >Multi joint exercises</td>\n                    <td></td>\n                    <td class=\"blue\"></td>\n                    <td class=\"blue\"></td>\n                    <td class=\"orange\"></td>\n                    <td class=\"orange\"></td>\n                    <td class=\"green\"></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td rowspan=\"2\"></td>\n                    <td rowspan=\"2\" class=\"orange\"></td>\n                </tr>\n                <tr>\n                    <td>Single joint exercises</td>\n                    <td></td>\n                    <td class=\"blue\"></td>\n                    <td class=\"blue\"></td>\n                    <td class=\"orange\"></td>\n                    <td class=\"orange\"></td>\n                    <td class=\"green\"></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <!--  -->\n                <tr>\n                    <td rowspan=\"2\">Calves</td>\n                    <td rowspan=\"2\"></td>\n                    <td rowspan=\"2\"></td>\n                    <td >Multi joint exercises</td>\n                    <td></td>\n                    <td class=\"blue\"></td>\n                    <td class=\"blue\"></td>\n                    <td class=\"orange\"></td>\n                    <td class=\"orange\"></td>\n                    <td class=\"green\"></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td rowspan=\"2\"></td>\n                    <td rowspan=\"2\" class=\"orange\"></td>\n                </tr>\n                <tr>\n                    <td>Single joint exercises</td>\n                    <td></td>\n                    <td class=\"blue\"></td>\n                    <td class=\"blue\"></td>\n                    <td class=\"orange\"></td>\n                    <td class=\"orange\"></td>\n                    <td class=\"green\"></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <!--  -->\n                <tr>\n                    <td rowspan=\"2\">Triceps</td>\n                    <td rowspan=\"2\"></td>\n                    <td rowspan=\"2\"></td>\n                    <td >Multi joint exercises</td>\n                    <td></td>\n                    <td class=\"blue\"></td>\n                    <td class=\"blue\"></td>\n                    <td class=\"orange\"></td>\n                    <td class=\"orange\"></td>\n                    <td class=\"green\"></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td rowspan=\"2\"></td>\n                    <td rowspan=\"2\" class=\"orange\"></td>\n                </tr>\n                <tr>\n                    <td>Single joint exercises</td>\n                    <td></td>\n                    <td class=\"blue\"></td>\n                    <td class=\"blue\"></td>\n                    <td class=\"orange\"></td>\n                    <td class=\"orange\"></td>\n                    <td class=\"green\"></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <!--  -->\n                <tr>\n                    <td rowspan=\"2\">Biceps</td>\n                    <td rowspan=\"2\"></td>\n                    <td rowspan=\"2\"></td>\n                    <td >Multi joint exercises</td>\n                    <td></td>\n                    <td class=\"blue\"></td>\n                    <td class=\"blue\"></td>\n                    <td class=\"orange\"></td>\n                    <td class=\"orange\"></td>\n                    <td class=\"green\"></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td rowspan=\"2\"></td>\n                    <td rowspan=\"2\" class=\"orange\"></td>\n                </tr>\n                <tr>\n                    <td>Single joint exercises</td>\n                    <td></td>\n                    <td class=\"blue\"></td>\n                    <td class=\"blue\"></td>\n                    <td class=\"orange\"></td>\n                    <td class=\"orange\"></td>\n                    <td class=\"green\"></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/profile/components/strength-athlete/top-program-designs.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/profile/components/strength-athlete/top-program-designs.component.ts ***!
  \**************************************************************************************/
/*! exports provided: StrengthAthleteTopProgramDesignsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrengthAthleteTopProgramDesignsComponent", function() { return StrengthAthleteTopProgramDesignsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/classes/user */ "./src/app/core/classes/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StrengthAthleteTopProgramDesignsComponent = /** @class */ (function () {
    function StrengthAthleteTopProgramDesignsComponent() {
    }
    StrengthAthleteTopProgramDesignsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__["ApplicationUser"])
    ], StrengthAthleteTopProgramDesignsComponent.prototype, "applicationUser", void 0);
    StrengthAthleteTopProgramDesignsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-strength-athlete-top-program-designs',
            template: __webpack_require__(/*! ./top-program-designs.component.html */ "./src/app/profile/components/strength-athlete/top-program-designs.component.html")
        })
    ], StrengthAthleteTopProgramDesignsComponent);
    return StrengthAthleteTopProgramDesignsComponent;
}());



/***/ }),

/***/ "./src/app/profile/components/strength-athlete/training-calendar.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/profile/components/strength-athlete/training-calendar.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">\n    <div class=\"row align-items-center\">\n        <div class=\"col-12 col-sm-6\">\n        <h3>CALENDAR & TRAINING LOG</h3>\n        </div>\n        <div class=\"col-12 col-sm-5\">\n            <div class=\"control-slider\">\n                <p>AUGUST 2018</p>\n                <a href=\"\" class=\"btn-control prev\"><i class=\"fa fa-angle-up\" aria-hidden=\"true\"></i></a>\n                <a href=\"\" class=\"btn-control next\"><i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i></a>\n            </div>\n        </div>\n        <div class=\"col-12 col-sm-1\">\n            <a href=\"\" class=\"edit\"><img src=\"/assets/images/icons/icon-pencil.svg\" class=\"img-fluid\" alt=\"\"></a>\n        </div>\n    </div>\n</div>\n\n<div class=\"conventions\">\n    <p class=\"test\"><span></span>Test Sessions</p>\n    <p class=\"completed\"><span></span>Completed Sessions</p>\n    <p class=\"missed\"><span></span>Missed Sessions</p>\n    <p class=\"today\"><span></span>Today</p>\n    <p class=\"upcoming\"><span></span>Upcoming Sessions</p>\n</div>\n\n<div class=\"calendar\">\n    <div class=\"week-days\">\n        <div class=\"row\">\n            <div class=\"col\">Sunday</div>\n            <div class=\"col\">Monday</div>\n            <div class=\"col\">Tuesday</div>\n            <div class=\"col\">Wednesday</div>\n            <div class=\"col\">Thursday</div>\n            <div class=\"col\">Friday</div>\n            <div class=\"col\">Saturday</div>\n        </div>\n    </div>\n    <div class=\"days\">\n        <div class=\"row no-gutters\">\n            <div class=\"col\">\n                <div class=\"day\">\n                    <span class=\"time\">30</span>\n                </div>\n            </div>\n            <div class=\"col\">\n                <div class=\"day completed test\">\n                    <span class=\"time\">Jul 31</span>\n                    <b>Starting strength</b>\n                    <p>Quads, hamstrings,and calves</p>\n                </div>\n            </div>\n            <div class=\"col\">\n                <div class=\"day\">\n                    <span class=\"time\">Aug 1</span>\n                </div>\n            </div>\n            <div class=\"col\">\n                <div class=\"day completed test\">\n                    <span class=\"time\">2</span>\n                    <b>Starting strength</b>\n                    <p>Quads, hamstrings,and calves</p>\n                </div>\n            </div>\n            <div class=\"col\">\n                <div class=\"day\">\n                    <span class=\"time\">3</span>\n                </div>\n            </div>\n            <div class=\"col\">\n                <div class=\"day completed test\">\n                    <span class=\"time\">4</span>\n                    <b>Starting strength</b>\n                    <p>Quads, hamstrings,and calves</p>\n                </div>\n            </div>\n            <div class=\"col\">\n                <div class=\"day\">\n                    <span class=\"time\">5</span>\n                </div>\n            </div>\n        </div>\n        <div class=\"row no-gutters\">\n            <div class=\"col\">\n                <div class=\"day\">\n                    <span class=\"time\">6</span>\n                </div>\n            </div>\n            <div class=\"col\">\n                <div class=\"day missed\">\n                    <span class=\"time\">7</span>\n                    <b>Starting strength</b>\n                    <p>Quads, hamstrings,and calves</p>\n                </div>\n            </div>\n            <div class=\"col\">\n                <div class=\"day\">\n                    <span class=\"time\">8</span>\n                </div>\n            </div>\n            <div class=\"col\">\n                <div class=\"day completed\">\n                    <span class=\"time\">9</span>\n                    <b>Starting strength</b>\n                    <p>Quads, hamstrings,and calves</p>\n                </div>\n            </div>\n            <div class=\"col\">\n                <div class=\"day\">\n                    <span class=\"time\">10</span>\n                </div>\n            </div>\n            <div class=\"col\">\n                <div class=\"day completed\">\n                    <span class=\"time\">11</span>\n                    <b>Starting strength</b>\n                    <p>Quads, hamstrings,and calves</p>\n                </div>\n            </div>\n            <div class=\"col\">\n                <div class=\"day today\">\n                    <span class=\"time\">12</span>\n                </div>\n            </div>\n        </div>\n        <div class=\"row no-gutters\">\n            <div class=\"col\">\n                <div class=\"day\">\n                    <span class=\"time\">13</span>\n                </div>\n            </div>\n            <div class=\"col\">\n                <div class=\"day upcoming\">\n                    <span class=\"time\">14</span>\n                    <b>Starting strength</b>\n                    <p>Quads, hamstrings,and calves</p>\n                </div>\n            </div>\n            <div class=\"col\">\n                <div class=\"day\">\n                    <span class=\"time\">15</span>\n                </div>\n            </div>\n            <div class=\"col\">\n                <div class=\"day upcoming\">\n                    <span class=\"time\">16</span>\n                    <b>Starting strength</b>\n                    <p>Quads, hamstrings,and calves</p>\n                </div>\n            </div>\n            <div class=\"col\">\n                <div class=\"day\">\n                    <span class=\"time\">17</span>\n                </div>\n            </div>\n            <div class=\"col\">\n                <div class=\"day upcoming\">\n                    <span class=\"time\">18</span>\n                    <b>Starting strength</b>\n                    <p>Quads, hamstrings,and calves</p>\n                </div>\n            </div>\n            <div class=\"col\">\n                <div class=\"day\">\n                    <span class=\"time\">19</span>\n                </div>\n            </div>\n        </div>\n        <div class=\"row no-gutters\">\n            <div class=\"col\">\n                <div class=\"day\">\n                    <span class=\"time\">20</span>\n                </div>\n            </div>\n            <div class=\"col\">\n                <div class=\"day upcoming\">\n                    <span class=\"time\">21</span>\n                    <b>Starting strength</b>\n                    <p>Quads, hamstrings,and calves</p>\n                </div>\n            </div>\n            <div class=\"col\">\n                <div class=\"day\">\n                    <span class=\"time\">22</span>\n                </div>\n            </div>\n            <div class=\"col\">\n                <div class=\"day upcoming\">\n                    <span class=\"time\">23</span>\n                    <b>Starting strength</b>\n                    <p>Quads, hamstrings,and calves</p>\n                </div>\n            </div>\n            <div class=\"col\">\n                <div class=\"day\">\n                    <span class=\"time\">24</span>\n                </div>\n            </div>\n            <div class=\"col\">\n                <div class=\"day upcoming\">\n                    <span class=\"time\">25</span>\n                    <b>Starting strength</b>\n                    <p>Quads, hamstrings,and calves</p>\n                </div>\n            </div>\n            <div class=\"col\">\n                <div class=\"day\">\n                    <span class=\"time\">19</span>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row no-gutters\">\n            <div class=\"col\">\n                <div class=\"day\">\n                    <span class=\"time\">27</span>\n                </div>\n            </div>\n            <div class=\"col\">\n                <div class=\"day upcoming\">\n                    <span class=\"time\">28</span>\n                    <b>Starting strength</b>\n                    <p>Quads, hamstrings,and calves</p>\n                </div>\n            </div>\n            <div class=\"col\">\n                <div class=\"day\">\n                    <span class=\"time\">29</span>\n                </div>\n            </div>\n            <div class=\"col\">\n                <div class=\"day upcoming\">\n                    <span class=\"time\">30</span>\n                    <b>Starting strength</b>\n                    <p>Quads, hamstrings,and calves</p>\n                </div>\n            </div>\n            <div class=\"col\">\n                <div class=\"day\">\n                    <span class=\"time\">Aug 31</span>\n                </div>\n            </div>\n            <div class=\"col\">\n                <div class=\"day upcoming\">\n                    <span class=\"time\">Sep 1</span>\n                    <b>Starting strength</b>\n                    <p>Quads, hamstrings,and calves</p>\n                </div>\n            </div>\n            <div class=\"col\">\n                <div class=\"day\">\n                    <span class=\"time\">2</span>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/profile/components/strength-athlete/training-calendar.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/profile/components/strength-athlete/training-calendar.component.ts ***!
  \************************************************************************************/
/*! exports provided: StrengthAthleteTrainingCalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrengthAthleteTrainingCalendarComponent", function() { return StrengthAthleteTrainingCalendarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/classes/user */ "./src/app/core/classes/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StrengthAthleteTrainingCalendarComponent = /** @class */ (function () {
    function StrengthAthleteTrainingCalendarComponent() {
    }
    StrengthAthleteTrainingCalendarComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__["ApplicationUser"])
    ], StrengthAthleteTrainingCalendarComponent.prototype, "applicationUser", void 0);
    StrengthAthleteTrainingCalendarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-strength-athlete-training-calendar',
            template: __webpack_require__(/*! ./training-calendar.component.html */ "./src/app/profile/components/strength-athlete/training-calendar.component.html")
        })
    ], StrengthAthleteTrainingCalendarComponent);
    return StrengthAthleteTrainingCalendarComponent;
}());



/***/ }),

/***/ "./src/app/profile/components/strength-athlete/trophy-wall.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/profile/components/strength-athlete/trophy-wall.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-12\">\n        <h3>Trophy Wall</h3>\n    </div>\n</div>\n\n<div class=\"trophy\">\n    \n</div>\n<osg-strength-athlete-trophy *ngFor=\"let trophy of trophies\" [title]=\"trophy.title\" [gaugeCss]=\"trophy.css\"></osg-strength-athlete-trophy>"

/***/ }),

/***/ "./src/app/profile/components/strength-athlete/trophy-wall.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/profile/components/strength-athlete/trophy-wall.component.ts ***!
  \******************************************************************************/
/*! exports provided: StrengthAthleteTrophyWallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrengthAthleteTrophyWallComponent", function() { return StrengthAthleteTrophyWallComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/classes/user */ "./src/app/core/classes/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StrengthAthleteTrophyWallComponent = /** @class */ (function () {
    function StrengthAthleteTrophyWallComponent() {
        this.trophies = [
            { title: 'CHEST', css: 'yellow' },
            { title: 'BACK', css: 'green' },
            { title: 'QUADS', css: 'blue' },
        ];
    }
    StrengthAthleteTrophyWallComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__["ApplicationUser"])
    ], StrengthAthleteTrophyWallComponent.prototype, "applicationUser", void 0);
    StrengthAthleteTrophyWallComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-strength-athlete-trophy-wall',
            template: __webpack_require__(/*! ./trophy-wall.component.html */ "./src/app/profile/components/strength-athlete/trophy-wall.component.html")
        })
    ], StrengthAthleteTrophyWallComponent);
    return StrengthAthleteTrophyWallComponent;
}());



/***/ }),

/***/ "./src/app/profile/components/strength-athlete/trophy.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/profile/components/strength-athlete/trophy.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-gutters\">\n    <div class=\"col-12 col-sm-auto\">\n        <div class=\"strenght-level\">\n            <div class=\"title\">\n                <h4>STRENGTH LEVEL</h4>\n                <p>Choose test exercise</p>\n            </div>\n            <div class=\"exercise-list\">\n                <h4>{{title}}</h4>\n                <div class=\"list\">\n                    <div class=\"checkbox custom-checkbox\">\n                        <label>\n                            <input type=\"checkbox\" value=\"\">Bench Press\n                            <span class=\"checkmark\"></span>\n                        </label>\n                    </div>\n                    <div class=\"checkbox custom-checkbox\">\n                        <label>\n                            <input type=\"checkbox\" value=\"\">Incline Bench Press\n                            <span class=\"checkmark\"></span>\n                        </label>\n                    </div>\n                    <div class=\"checkbox custom-checkbox\">\n                        <label>\n                            <input type=\"checkbox\" value=\"\">Decline Bench Press\n                            <span class=\"checkmark\"></span>\n                        </label>\n                    </div>\n                    <div class=\"checkbox custom-checkbox\">\n                        <label>\n                            <input type=\"checkbox\" value=\"\">Flat Dumbell Press\n                            <span class=\"checkmark\"></span>\n                        </label>\n                    </div>\n                    <div class=\"checkbox custom-checkbox\">\n                        <label>\n                            <input type=\"checkbox\" value=\"\">Barbell Bench Press\n                            <span class=\"checkmark\"></span>\n                        </label>\n                    </div>\n                    <div class=\"checkbox custom-checkbox\">\n                        <label>\n                            <input type=\"checkbox\" value=\"\">Incline Cable Flye\n                            <span class=\"checkmark\"></span>\n                        </label>\n                    </div>\n                    <div class=\"checkbox custom-checkbox\">\n                        <label>\n                            <input type=\"checkbox\" value=\"\">Dips for Chest\n                            <span class=\"checkmark\"></span>\n                        </label>\n                    </div>\n                    <div class=\"checkbox custom-checkbox\">\n                        <label>\n                            <input type=\"checkbox\" value=\"\">Bench Press\n                            <span class=\"checkmark\"></span>\n                        </label>\n                    </div>\n                    <div class=\"checkbox custom-checkbox\">\n                        <label>\n                            <input type=\"checkbox\" value=\"\">Incline Bench Press\n                            <span class=\"checkmark\"></span>\n                        </label>\n                    </div>\n                    <div class=\"checkbox custom-checkbox\">\n                        <label>\n                            <input type=\"checkbox\" value=\"\">Decline Bench Press\n                            <span class=\"checkmark\"></span>\n                        </label>\n                    </div>\n                    <div class=\"checkbox custom-checkbox\">\n                        <label>\n                            <input type=\"checkbox\" value=\"\">Flat Dumbell Press\n                            <span class=\"checkmark\"></span>\n                        </label>\n                    </div>\n                    <div class=\"checkbox custom-checkbox\">\n                        <label>\n                            <input type=\"checkbox\" value=\"\">Barbell Bench Press\n                            <span class=\"checkmark\"></span>\n                        </label>\n                    </div>\n                    <div class=\"checkbox custom-checkbox\">\n                        <label>\n                            <input type=\"checkbox\" value=\"\">Incline Cable Flye\n                            <span class=\"checkmark\"></span>\n                        </label>\n                    </div>\n                    <div class=\"checkbox custom-checkbox\">\n                        <label>\n                            <input type=\"checkbox\" value=\"\">Dips for Chest\n                            <span class=\"checkmark\"></span>\n                        </label>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-12 col-sm\">\n        <div class=\"performance-graph\">\n            <div class=\"row\">\n                <div class=\"col-12 col-sm-7\">\n                    <div class=\"title\">\n                        <h4>PERFORMANCE GRAPH</h4>\n                        <p>Bench Press (1RM)</p>\n                    </div>\n                </div>\n                <div class=\"col-12 col-sm-5\">\n                    <img src=\"assets/images/icons/trophy.svg\" class=\"img-fluid trophy\" alt=\"\">\n                    <img src=\"assets/images/icons/trophy.svg\" class=\"img-fluid trophy\" alt=\"\">\n                    <img src=\"assets/images/icons/trophy.svg\" class=\"img-fluid trophy\" alt=\"\">\n                </div>\n            </div>\n            <div [id]=\"performanceGraphId\"></div>\n            <div class=\"conventions\">\n                <p class=\"start-end\"><span></span>Start/End program</p>\n                <p class=\"performance\"><span></span>Performance</p>\n                <p class=\"levels\"><span></span>Levels</p>\n                <p class=\"pretest\"><span></span>Pretest</p>\n                <p class=\"posttest\"><span></span>Posttest</p>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-12 col-sm-3\">\n        <div class=\"total-percentage\">\n            <div class=\"row h-100\">\n                <div class=\"col-12\">\n                    <div class=\"text-center\">\n                        <div class=\"title\">\n                            <h4>TOTAL PERCENTAGE INCREASE</h4>\n                        </div>\n\n                        <div class=\"gauge-container\">\n                            <osg-gauge [css]=\"gaugeCss\" [value]=\"33\"></osg-gauge>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-12 text-center align-self-end\">\n                    <div class=\"program-period\">\n                        <h4>ALL PROGRAMS</h4>\n                        <p><b>Period:</b> Jun. 2015 - Sept. 2018</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-12\">\n        <div class=\"current-level\">\n            <div class=\"row no-gutters align-items-center\">\n                <div class=\"col-12 col-sm-auto\">\n                    <div class=\"title\">\n                        <h4>CURRENT LEVEL</h4>\n                        <p>You are stronger than:</p>\n                    </div>\n                </div>\n                <div class=\"col-12 col-sm\">\n                    <div class=\"row no-gutters\">\n                        <div class=\"col\">\n                            <div class=\"level no-border\">\n                                <div class=\"gauge-container\">\n                                    <osg-gauge css=\"green no-circle\" [value]=\"25\"></osg-gauge>\n                                </div>\n                                <p>of male lifters at your <b>strength level</b></p>\n                            </div>\n                        </div>\n                        <div class=\"col\">\n                            <div class=\"level\">\n                                <div class=\"gauge-container\">\n                                    <osg-gauge css=\"orange no-circle\" [value]=\"10\"></osg-gauge>\n                                </div>\n                                <p>of male lifters with your <b>height</b></p>\n                            </div>\n                        </div>\n                        <div class=\"col\">\n                            <div class=\"level\">\n                                <div class=\"gauge-container\">\n                                    <osg-gauge css=\"red no-circle\" [value]=\"4\"></osg-gauge>\n                                </div>\n                                <p>of male lifters at your <b>age</b></p>\n                            </div>\n                        </div>\n                        <div class=\"col\">\n                            <div class=\"level\">\n                                <div class=\"gauge-container\">\n                                    <osg-gauge css=\"blue no-circle\" [value]=\"33\"></osg-gauge>\n                                </div>\n                                <p>of male lifters with your <b>body weight</b></p>\n                            </div>\n                        </div>\n                        <div class=\"col\">\n                            <div class=\"level\">\n                                <div class=\"gauge-container\">\n                                    <osg-gauge css=\"red no-circle\" [value]=\"33\"></osg-gauge>\n                                </div>\n                                <p>of male lifters with your <b>waist-hip ratio</b></p>\n                            </div>\n                        </div>\n                        <div class=\"col\">\n                            <div class=\"level\">\n                                <div class=\"gauge-container\">\n                                    <osg-gauge css=\"orange no-circle\" [value]=\"33\"></osg-gauge>\n                                </div>\n                                <p>of male lifters with your <b>muscle fiber type</b></p>\n                            </div>\n                        </div>\n                        <div class=\"col\">\n                            <div class=\"level yellow-bg\">\n                                <div class=\"gauge-container\">\n                                    <osg-gauge css=\"blue no-circle\" [value]=\"33\"></osg-gauge>\n                                </div>\n                                <p>of your <b>mirror athletes</b> (all variables combined)</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/profile/components/strength-athlete/trophy.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/profile/components/strength-athlete/trophy.component.ts ***!
  \*************************************************************************/
/*! exports provided: StrengthAthleteTrophyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrengthAthleteTrophyComponent", function() { return StrengthAthleteTrophyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/classes/user */ "./src/app/core/classes/user.ts");
/* harmony import */ var c3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! c3 */ "./node_modules/c3/c3.js");
/* harmony import */ var c3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(c3__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StrengthAthleteTrophyComponent = /** @class */ (function () {
    function StrengthAthleteTrophyComponent() {
        this._id = ++StrengthAthleteTrophyComponent_1.counter;
    }
    StrengthAthleteTrophyComponent_1 = StrengthAthleteTrophyComponent;
    StrengthAthleteTrophyComponent.prototype.ngOnInit = function () {
    };
    StrengthAthleteTrophyComponent.prototype.ngAfterViewInit = function () {
        var chart = c3__WEBPACK_IMPORTED_MODULE_2__["generate"]({
            bindto: "#" + this.performanceGraphId,
            size: {
                height: 300
            },
            legend: {
                show: false
            },
            axis: {
                y: {
                    max: 5
                },
                x: {
                    type: 'timeseries',
                    tick: {
                        format: '%Y-%m-%d'
                    }
                }
            },
            transition: {
                duration: 1000
            },
            data: {
                x: 'x',
                colors: {
                    data1: '#F3A83B',
                    data2: '#F3A83B',
                    data3: '#F3A83B'
                },
                columns: [
                    ['x', '2013-01-01', '2013-01-02', '2013-01-03', '2013-01-06', '2013-01-07', '2013-01-08'],
                    ['data1', 1, 1.2],
                    ['data2', null, null, 1.3, 2.1],
                    ['data3', null, null, null, null, 2.4, 3.3]
                ],
                types: {
                    data1: 'area',
                    data2: 'area',
                    data3: 'area'
                }
            }
        });
    };
    Object.defineProperty(StrengthAthleteTrophyComponent.prototype, "performanceGraphId", {
        get: function () {
            return "performance-graph-" + this._id;
        },
        enumerable: true,
        configurable: true
    });
    var StrengthAthleteTrophyComponent_1;
    StrengthAthleteTrophyComponent.counter = 0;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_core_classes_user__WEBPACK_IMPORTED_MODULE_1__["ApplicationUser"])
    ], StrengthAthleteTrophyComponent.prototype, "applicationUser", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StrengthAthleteTrophyComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StrengthAthleteTrophyComponent.prototype, "gaugeCss", void 0);
    StrengthAthleteTrophyComponent = StrengthAthleteTrophyComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-strength-athlete-trophy',
            template: __webpack_require__(/*! ./trophy.component.html */ "./src/app/profile/components/strength-athlete/trophy.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], StrengthAthleteTrophyComponent);
    return StrengthAthleteTrophyComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main.component */ "./src/app/profile/components/main.component.ts");
/* harmony import */ var _components_personal_trainer_personal_trainer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/personal-trainer/personal-trainer.component */ "./src/app/profile/components/personal-trainer/personal-trainer.component.ts");
/* harmony import */ var _components_program_designer_program_designer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/program-designer/program-designer.component */ "./src/app/profile/components/program-designer/program-designer.component.ts");
/* harmony import */ var _components_strength_athlete_strength_athlete_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/strength-athlete/strength-athlete.component */ "./src/app/profile/components/strength-athlete/strength-athlete.component.ts");
/* harmony import */ var _components_personal_trainer_offers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/personal-trainer/offers.component */ "./src/app/profile/components/personal-trainer/offers.component.ts");
/* harmony import */ var _components_personal_trainer_experience_bank_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/personal-trainer/experience-bank.component */ "./src/app/profile/components/personal-trainer/experience-bank.component.ts");
/* harmony import */ var _components_personal_trainer_booking_calendar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/personal-trainer/booking-calendar.component */ "./src/app/profile/components/personal-trainer/booking-calendar.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _components_profile_profile_cover_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/profile/profile-cover.component */ "./src/app/profile/components/profile/profile-cover.component.ts");
/* harmony import */ var _components_profile_profile_about_me_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/profile/profile-about-me-component */ "./src/app/profile/components/profile/profile-about-me-component.ts");
/* harmony import */ var _components_strength_athlete_trophy_wall_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/strength-athlete/trophy-wall.component */ "./src/app/profile/components/strength-athlete/trophy-wall.component.ts");
/* harmony import */ var _components_strength_athlete_timeline_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/strength-athlete/timeline.component */ "./src/app/profile/components/strength-athlete/timeline.component.ts");
/* harmony import */ var _components_strength_athlete_performance_table_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/strength-athlete/performance-table.component */ "./src/app/profile/components/strength-athlete/performance-table.component.ts");
/* harmony import */ var _components_strength_athlete_top_program_designs_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/strength-athlete/top-program-designs.component */ "./src/app/profile/components/strength-athlete/top-program-designs.component.ts");
/* harmony import */ var _components_strength_athlete_training_calendar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/strength-athlete/training-calendar.component */ "./src/app/profile/components/strength-athlete/training-calendar.component.ts");
/* harmony import */ var _components_program_designer_published_programs_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/program-designer/published-programs.component */ "./src/app/profile/components/program-designer/published-programs.component.ts");
/* harmony import */ var _components_program_designer_program_filter_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/program-designer/program-filter.component */ "./src/app/profile/components/program-designer/program-filter.component.ts");
/* harmony import */ var _components_program_designer_experience_bank_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/program-designer/experience-bank.component */ "./src/app/profile/components/program-designer/experience-bank.component.ts");
/* harmony import */ var _components_program_designer_experience_reviews_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/program-designer/experience-reviews.component */ "./src/app/profile/components/program-designer/experience-reviews.component.ts");
/* harmony import */ var _components_program_designer_program_design_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/program-designer/program-design.component */ "./src/app/profile/components/program-designer/program-design.component.ts");
/* harmony import */ var _components_program_designer_training_calendar_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/program-designer/training-calendar.component */ "./src/app/profile/components/program-designer/training-calendar.component.ts");
/* harmony import */ var _components_strength_athlete_trophy_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/strength-athlete/trophy.component */ "./src/app/profile/components/strength-athlete/trophy.component.ts");
/* harmony import */ var _components_strength_athlete_performance_comparison_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/strength-athlete/performance-comparison.component */ "./src/app/profile/components/strength-athlete/performance-comparison.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_main_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"],
                _components_profile_profile_cover_component__WEBPACK_IMPORTED_MODULE_10__["ProfileCoverComponent"],
                _components_profile_profile_about_me_component__WEBPACK_IMPORTED_MODULE_11__["ProfileAboutMeComponent"],
                _components_personal_trainer_personal_trainer_component__WEBPACK_IMPORTED_MODULE_3__["PersonalTrainerComponent"],
                _components_personal_trainer_offers_component__WEBPACK_IMPORTED_MODULE_6__["PersonalTrainerOffersComponent"],
                _components_personal_trainer_experience_bank_component__WEBPACK_IMPORTED_MODULE_7__["PersonalTrainerExperienceBankComponent"],
                _components_personal_trainer_booking_calendar_component__WEBPACK_IMPORTED_MODULE_8__["PersonalTrainerBookingCalendarComponent"],
                _components_program_designer_program_designer_component__WEBPACK_IMPORTED_MODULE_4__["ProgramDesignerComponent"],
                _components_program_designer_published_programs_component__WEBPACK_IMPORTED_MODULE_17__["ProgramDesignerPublishedProgramsComponent"],
                _components_program_designer_program_filter_component__WEBPACK_IMPORTED_MODULE_18__["ProgramDesignerProgramFilterComponent"],
                _components_program_designer_experience_bank_component__WEBPACK_IMPORTED_MODULE_19__["ProgramDesignerExperienceBankComponent"],
                _components_program_designer_experience_reviews_component__WEBPACK_IMPORTED_MODULE_20__["ProgramDesignerExperienceReviewsComponent"],
                _components_program_designer_program_design_component__WEBPACK_IMPORTED_MODULE_21__["ProgramDesignerProgramDesignComponent"],
                _components_program_designer_training_calendar_component__WEBPACK_IMPORTED_MODULE_22__["ProgramDesignerTrainingCalendarComponent"],
                _components_strength_athlete_strength_athlete_component__WEBPACK_IMPORTED_MODULE_5__["StrengthAthleteComponent"],
                _components_strength_athlete_trophy_wall_component__WEBPACK_IMPORTED_MODULE_12__["StrengthAthleteTrophyWallComponent"],
                _components_strength_athlete_trophy_component__WEBPACK_IMPORTED_MODULE_23__["StrengthAthleteTrophyComponent"],
                _components_strength_athlete_timeline_component__WEBPACK_IMPORTED_MODULE_13__["StrengthAthleteTimelineComponent"],
                _components_strength_athlete_performance_table_component__WEBPACK_IMPORTED_MODULE_14__["StrengthAthletePerformanceTableComponent"],
                _components_strength_athlete_performance_comparison_component__WEBPACK_IMPORTED_MODULE_24__["StrengthAthletePerformanceComparisonComponent"],
                _components_strength_athlete_top_program_designs_component__WEBPACK_IMPORTED_MODULE_15__["StrengthAthleteTopProgramDesignsComponent"],
                _components_strength_athlete_training_calendar_component__WEBPACK_IMPORTED_MODULE_16__["StrengthAthleteTrainingCalendarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_9__["CoreModule"]
            ],
            exports: [],
            providers: [],
        })
    ], ProfileModule);
    return ProfileModule;
}());



/***/ }),

/***/ "./src/app/strength-standards/components/enter-information/enter-information.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/strength-standards/components/enter-information/enter-information.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Enter your information</h2>\n\n<div class=\"row mb-4\">\n    <div class=\"col-12 col-sm-6 col-md-4\">\n        <div class=\"checbox-dropdown\">\n            <div class=\"checkbox custom-checkbox\">\n                <label>\n                    <input type=\"checkbox\" value=\"\">\n                    <span class=\"checkmark\"></span>\n                </label>\n            </div>\n            <div class=\"dropdown black-dropdown with-label\">\n                <label for=\"\">Gender</label>\n                <button class=\"btn dropdown-toggle btn-block\" type=\"button\" id=\"dropdownMenuButton1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Male\n                </button>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton1\">\n                    <a class=\"dropdown-item\" href=\"#\">Male</a>\n                    <a class=\"dropdown-item\" href=\"#\">Female</a>\n                </div>\n            </div>\n        </div>\n    </div>\n    \n    <div class=\"col-12 col-sm-6 col-md-4\">\n        <div class=\"checbox-dropdown\">\n            <div class=\"checkbox custom-checkbox\">\n                <label>\n                    <input type=\"checkbox\" value=\"\">\n                    <span class=\"checkmark\"></span>\n                </label>\n            </div>\n            <div class=\"dropdown black-dropdown with-label\">\n                <label for=\"\">Body Weight (kg)</label>\n                <button class=\"btn dropdown-toggle btn-block\" type=\"button\" id=\"dropdownMenuButton2\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">0-50\n                </button>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton2\">\n                    <a class=\"dropdown-item\" href=\"#\">0-50</a>\n                    <a class=\"dropdown-item\" href=\"#\">51-60</a>\n                    <a class=\"dropdown-item\" href=\"#\">61-70</a>\n                    <a class=\"dropdown-item\" href=\"#\">71-80</a>\n                    <a class=\"dropdown-item\" href=\"#\">81-90</a>\n                    <a class=\"dropdown-item\" href=\"#\">91-100</a>\n                    <a class=\"dropdown-item\" href=\"#\">101-110</a>\n                    <a class=\"dropdown-item\" href=\"#\">111-120</a>\n                    <a class=\"dropdown-item\" href=\"#\">121-160</a>\n                </div>\n            </div>\n        </div>\n    </div>\n    \n    <div class=\"col-12 col-sm-6 col-md-4\">\n        <div class=\"checbox-dropdown\">\n            <div class=\"checkbox custom-checkbox\">\n                <label>\n                    <input type=\"checkbox\" value=\"\">\n                    <span class=\"checkmark\"></span>\n                </label>\n            </div>\n            <div class=\"dropdown black-dropdown with-label\">\n                <label for=\"\">Height</label>\n                <button class=\"btn dropdown-toggle btn-block\" type=\"button\" id=\"dropdownMenuButton3\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">0-150\n                </button>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton3\">\n                    <a class=\"dropdown-item\" href=\"#\">0-150 </a>\n                    <a class=\"dropdown-item\" href=\"#\">151-160</a>\n                    <a class=\"dropdown-item\" href=\"#\">161-170</a>\n                    <a class=\"dropdown-item\" href=\"#\">171-180</a>\n                    <a class=\"dropdown-item\" href=\"#\">181-190</a>\n                    <a class=\"dropdown-item\" href=\"#\">191-200</a>\n                    <a class=\"dropdown-item\" href=\"#\">201-210</a>\n                    <a class=\"dropdown-item\" href=\"#\">211-220</a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-12 col-sm-6 col-md-4\">\n        <div class=\"checbox-dropdown\">\n            <div class=\"checkbox custom-checkbox\">\n                <label>\n                    <input type=\"checkbox\" value=\"\">\n                    <span class=\"checkmark\"></span>\n                </label>\n            </div>\n            <div class=\"dropdown black-dropdown with-label\">\n                <label for=\"\">Waist-Hip Ratio</label>\n                <button class=\"btn dropdown-toggle btn-block\" type=\"button\" id=\"dropdownMenuButton4\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">0,71-0,80</button>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton4\">\n                    <a class=\"dropdown-item\" href=\"#\">0,71-0,80</a>\n                    <a class=\"dropdown-item\" href=\"#\">0.81-0,90</a>\n                    <a class=\"dropdown-item\" href=\"#\">0,91-1,00</a>\n                    <a class=\"dropdown-item\" href=\"#\">1,01-1,10</a>\n                    <a class=\"dropdown-item\" href=\"#\">1,11-1,20</a>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-12 col-sm-6 col-md-4\">\n        <div class=\"checbox-dropdown\">\n            <div class=\"checkbox custom-checkbox\">\n                <label>\n                    <input type=\"checkbox\" value=\"\">\n                    <span class=\"checkmark\"></span>\n                </label>\n            </div>\n            <div class=\"dropdown black-dropdown with-label\">\n                <label for=\"\">Age (years)</label>\n                <button class=\"btn dropdown-toggle btn-block\" type=\"button\" id=\"dropdownMenuButton5\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">0-20</button>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton5\">\n                    <a class=\"dropdown-item\" href=\"#\">0-20</a>\n                    <a class=\"dropdown-item\" href=\"#\">21-30</a>\n                    <a class=\"dropdown-item\" href=\"#\">31-40</a>\n                    <a class=\"dropdown-item\" href=\"#\">41-50</a>\n                    <a class=\"dropdown-item\" href=\"#\">51-60</a>\n                    <a class=\"dropdown-item\" href=\"#\">61-80</a>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-12 col-sm-6 col-md-4\">\n        <div class=\"checbox-dropdown\">\n            <div class=\"checkbox custom-checkbox\">\n                <label>\n                    <input type=\"checkbox\" value=\"\">\n                    <span class=\"checkmark\"></span>\n                </label>\n            </div>\n            <div class=\"dropdown black-dropdown with-label\">\n                <label for=\"\">Muscle Fiber Type</label>\n                <button class=\"btn dropdown-toggle btn-block\" type=\"button\" id=\"dropdownMenuButton6\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">0-20</button>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton6\">\n                    <a class=\"dropdown-item\" href=\"#\">Slow twitch</a>\n                    <a class=\"dropdown-item\" href=\"#\">Fast twitch</a>\n                    <a class=\"dropdown-item\" href=\"#\">Fast and slow twitch</a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"actions\">\n    <div class=\"col-12 col-lg-8\">\n        <div class=\"results\">\n            <h4>Results: </h4>\n            <p>Male<span>x</span></p>\n        </div>\n    </div>\n    <div class=\"col-12 col-lg-3 mt-2 mt-lg-0 text-center text-lg-right\">\n        <a href=\"\" class=\"btn btn-yellow-gradient py-2 btn-block\">DONE</a>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/strength-standards/components/enter-information/enter-information.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/strength-standards/components/enter-information/enter-information.component.ts ***!
  \************************************************************************************************/
/*! exports provided: StrengthStandardsEnterInformation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrengthStandardsEnterInformation", function() { return StrengthStandardsEnterInformation; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StrengthStandardsEnterInformation = /** @class */ (function () {
    function StrengthStandardsEnterInformation() {
        this.title = '';
    }
    StrengthStandardsEnterInformation.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StrengthStandardsEnterInformation.prototype, "title", void 0);
    StrengthStandardsEnterInformation = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-strength-standards-enter-information',
            template: __webpack_require__(/*! ./enter-information.component.html */ "./src/app/strength-standards/components/enter-information/enter-information.component.html")
        })
    ], StrengthStandardsEnterInformation);
    return StrengthStandardsEnterInformation;
}());



/***/ }),

/***/ "./src/app/strength-standards/components/exercise-table/exercise-table.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/strength-standards/components/exercise-table/exercise-table.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"exercise-table\">\n    <div class=\"exercise-table-title\">\n        <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-12 col-sm-6\">\n                <h4>CHEST</h4>\n                <div class=\"exercise-box\">\n                    <p>EXERCISE:</p>\n                    <div class=\"dropdown\">\n                        <button class=\"btn dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\n                        aria-haspopup=\"true\" aria-expanded=\"false\">BENCH PRESS</button>\n                        <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                        <a class=\"dropdown-item\" href=\"#\">UNTRAINED</a>\n                        <a class=\"dropdown-item\" href=\"#\">NOVICE</a>\n                        <a class=\"dropdown-item\" href=\"#\">INTERMEDIATE</a>\n                        <a class=\"dropdown-item\" href=\"#\">ADVANCED</a>\n                        <a class=\"dropdown-item\" href=\"#\">ELITE</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-12 col-sm-auto\">\n                <a href=\"\" class=\"btn btn-yellow-gradient btn-toggle\" data-toggle=\"collapse\" href=\"#collapseForm1\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseForm1\">CALCULATE ONE REP MAX</a>\n\n                <div class=\"collapse calculate\" id=\"collapseForm1\">\n                    <div class=\"form-wrapper\">\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Lift (kg)\">\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Repetitions\">\n                        </div>\n                        <div class=\"form-group\">\n                            <a href=\"\" class=\"btn btn-block btn-black\">CALCULATE</a>\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control bg-gray\" placeholder=\"Your one rep max\">\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control bg-gray\" placeholder=\"Your level is\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"table-responsive\">\n        <table class=\"table\">\n            <thead>\n                <tr>\n                    <th>BODY WEIGHT (KG)</th>\n                    <th>UNTRAINED</th>\n                    <th>Novie</th>\n                    <th>Intermediate</th>\n                    <th>Advanced</th>\n                    <th>Elite</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>50-59</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>60-69</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>70-79</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>80-89</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>90-99</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>100-109</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>110-119</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>120+</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td colspan=\"7\">\n                        <table>\n                            <tbody>\n                                <tr>\n                                    <td>YOU ARE STRONGER THAN:</td>\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters at your <b>strength level</b></span></td>\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters with your <b>height</b></span></td>\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters at your <b>age</b></span></td>\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters with your <b>body weight</b></span></td>\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters with your <b>waist-hip ratio</b></span></td>\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters with your <b>muscle fiber type</b></span></td>\n                                    <td><div><input type=\"text\"> %</div><span>of your <b>mirror athletes</b> (all variables combined)</span></td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n\n<div class=\"exercise-table\">\n    <div class=\"exercise-table-title\">\n        <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-12 col-sm-6\">\n                <h4>Back</h4>\n                <div class=\"exercise-box\">\n                    <p>EXERCISE:</p>\n                    <div class=\"dropdown\">\n                        <button class=\"btn dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\n                        aria-haspopup=\"true\" aria-expanded=\"false\">Dead Lift</button>\n                        <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                        <a class=\"dropdown-item\" href=\"#\">UNTRAINED</a>\n                        <a class=\"dropdown-item\" href=\"#\">NOVICE</a>\n                        <a class=\"dropdown-item\" href=\"#\">INTERMEDIATE</a>\n                        <a class=\"dropdown-item\" href=\"#\">ADVANCED</a>\n                        <a class=\"dropdown-item\" href=\"#\">ELITE</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-12 col-sm-auto\">\n                <a href=\"\" class=\"btn btn-yellow-gradient btn-toggle\" data-toggle=\"collapse\" href=\"#collapseForm2\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseForm2\">CALCULATE ONE REP MAX</a>\n\n                <div class=\"collapse calculate\" id=\"collapseForm2\">\n                    <div class=\"form-wrapper\">\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Lift (kg)\">\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Repetitions\">\n                        </div>\n                        <div class=\"form-group\">\n                            <a href=\"\" class=\"btn btn-block btn-black\">CALCULATE</a>\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control bg-gray\" placeholder=\"Your one rep max\">\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control bg-gray\" placeholder=\"Your level is\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"table-responsive\">\n        <table class=\"table\">\n            <thead>\n                <tr>\n                    <th>BODY WEIGHT (KG)</th>\n                    <th>UNTRAINED</th>\n                    <th>Novie</th>\n                    <th>Intermediate</th>\n                    <th>Advanced</th>\n                    <th>Elite</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>50-59</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>60-69</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>70-79</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>80-89</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>90-99</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>100-109</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>110-119</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>120+</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td colspan=\"7\">\n                        <table>\n                            <tbody>\n                                <tr>\n                                    <td>YOU ARE STRONGER THAN:</td>\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters at your <b>strength level</b></span></td>\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters with your <b>height</b></span></td>\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters at your <b>age</b></span></td>\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters with your <b>body weight</b></span></td>\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters with your <b>waist-hip ratio</b></span></td>\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters with your <b>muscle fiber type</b></span></td>\n                                    <td><div><input type=\"text\"> %</div><span>of your <b>mirror athletes</b> (all variables combined)</span></td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n\n<div class=\"exercise-table\">\n    <div class=\"exercise-table-title\">\n        <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-12 col-sm-auto\">\n                <h4>SHOULDERS</h4>\n                <div class=\"exercise-box\">\n                    <p>EXERCISE:</p>\n                    <div class=\"dropdown\">\n                        <button class=\"btn dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\n                        aria-haspopup=\"true\" aria-expanded=\"false\">SEATED BARBELL SHOULDER PRESS (BEHIND BACK)</button>\n                        <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                        <a class=\"dropdown-item\" href=\"#\">UNTRAINED</a>\n                        <a class=\"dropdown-item\" href=\"#\">NOVICE</a>\n                        <a class=\"dropdown-item\" href=\"#\">INTERMEDIATE</a>\n                        <a class=\"dropdown-item\" href=\"#\">ADVANCED</a>\n                        <a class=\"dropdown-item\" href=\"#\">ELITE</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-12 col-sm-auto\">\n                <a href=\"\" class=\"btn btn-yellow-gradient btn-toggle\" data-toggle=\"collapse\" href=\"#collapseForm3\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseForm3\">CALCULATE ONE REP MAX</a>\n\n                <div class=\"collapse calculate\" id=\"collapseForm3\">\n                    <div class=\"form-wrapper\">\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Lift (kg)\">\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Repetitions\">\n                        </div>\n                        <div class=\"form-group\">\n                            <a href=\"\" class=\"btn btn-block btn-black\">CALCULATE</a>\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control bg-gray\" placeholder=\"Your one rep max\">\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control bg-gray\" placeholder=\"Your level is\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"table-responsive\">\n        <table class=\"table\">\n            <thead>\n                <tr>\n                    <th>BODY WEIGHT (KG)</th>\n                    <th>UNTRAINED</th>\n                    <th>Novie</th>\n                    <th>Intermediate</th>\n                    <th>Advanced</th>\n                    <th>Elite</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>50-59</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>60-69</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>70-79</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>80-89</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>90-99</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>100-109</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>110-119</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>120+</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td colspan=\"7\">\n                        <table>\n                            <tbody>\n                                <tr>\n                                    <td>YOU ARE STRONGER THAN:</td>\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters at your <b>strength level</b></span></td>\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters with your <b>height</b></span></td>\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters at your <b>age</b></span></td>\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters with your <b>body weight</b></span></td>\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters with your <b>waist-hip ratio</b></span></td>\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters with your <b>muscle fiber type</b></span></td>\n                                    <td><div><input type=\"text\"> %</div><span>of your <b>mirror athletes</b> (all variables combined)</span></td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n\n<div class=\"exercise-table\">\n    <div class=\"exercise-table-title\">\n        <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-12 col-sm-6\">\n                <h4>QUADS</h4>\n                <div class=\"exercise-box\">\n                    <p>EXERCISE:</p>\n                    <div class=\"dropdown\">\n                        <button class=\"btn dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\n                        aria-haspopup=\"true\" aria-expanded=\"false\">SQUAT</button>\n                        <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                        <a class=\"dropdown-item\" href=\"#\">UNTRAINED</a>\n                        <a class=\"dropdown-item\" href=\"#\">NOVICE</a>\n                        <a class=\"dropdown-item\" href=\"#\">INTERMEDIATE</a>\n                        <a class=\"dropdown-item\" href=\"#\">ADVANCED</a>\n                        <a class=\"dropdown-item\" href=\"#\">ELITE</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-12 col-sm-auto\">\n                <a href=\"\" class=\"btn btn-yellow-gradient btn-toggle\" data-toggle=\"collapse\" href=\"#collapseForm4\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseForm4\">CALCULATE ONE REP MAX</a>\n\n                <div class=\"collapse calculate\" id=\"collapseForm4\">\n                    <div class=\"form-wrapper\">\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Lift (kg)\">\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Repetitions\">\n                        </div>\n                        <div class=\"form-group\">\n                            <a href=\"\" class=\"btn btn-block btn-black\">CALCULATE</a>\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control bg-gray\" placeholder=\"Your one rep max\">\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control bg-gray\" placeholder=\"Your level is\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"table-responsive\">\n        <table class=\"table\">\n            <thead>\n                <tr>\n                    <th>BODY WEIGHT (KG)</th>\n                    <th>UNTRAINED</th>\n                    <th>Novie</th>\n                    <th>Intermediate</th>\n                    <th>Advanced</th>\n                    <th>Elite</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>50-59</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>60-69</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>70-79</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>80-89</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>90-99</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>100-109</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>110-119</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>120+</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td colspan=\"7\">\n                        <table>\n                            <tbody>\n                                <tr>\n                                    <td>YOU ARE STRONGER THAN:</td>\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters at your <b>strength level</b></span></td>\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters with your <b>height</b></span></td>\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters at your <b>age</b></span></td>\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters with your <b>body weight</b></span></td>\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters with your <b>waist-hip ratio</b></span></td>\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters with your <b>muscle fiber type</b></span></td>\n                                    <td><div><input type=\"text\"> %</div><span>of your <b>mirror athletes</b> (all variables combined)</span></td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n\n<div class=\"exercise-table\">\n    <div class=\"exercise-table-title\">\n        <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-12 col-sm-6\">\n                <h4>HAMSTRINGS</h4>\n                <div class=\"exercise-box\">\n                    <p>EXERCISE:</p>\n                    <div class=\"dropdown\">\n                        <button class=\"btn dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\n                        aria-haspopup=\"true\" aria-expanded=\"false\">SEATED LEG CURL</button>\n                        <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                        <a class=\"dropdown-item\" href=\"#\">UNTRAINED</a>\n                        <a class=\"dropdown-item\" href=\"#\">NOVICE</a>\n                        <a class=\"dropdown-item\" href=\"#\">INTERMEDIATE</a>\n                        <a class=\"dropdown-item\" href=\"#\">ADVANCED</a>\n                        <a class=\"dropdown-item\" href=\"#\">ELITE</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-12 col-sm-auto\">\n                <a href=\"\" class=\"btn btn-yellow-gradient btn-toggle\" data-toggle=\"collapse\" href=\"#collapseForm5\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseForm5\">CALCULATE ONE REP MAX</a>\n\n                <div class=\"collapse calculate\" id=\"collapseForm5\">\n                    <div class=\"form-wrapper\">\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Lift (kg)\">\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Repetitions\">\n                        </div>\n                        <div class=\"form-group\">\n                            <a href=\"\" class=\"btn btn-block btn-black\">CALCULATE</a>\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control bg-gray\" placeholder=\"Your one rep max\">\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control bg-gray\" placeholder=\"Your level is\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"table-responsive\">\n        <table class=\"table\">\n            <thead>\n                <tr>\n                    <th>BODY WEIGHT (KG)</th>\n                    <th>UNTRAINED</th>\n                    <th>Novie</th>\n                    <th>Intermediate</th>\n                    <th>Advanced</th>\n                    <th>Elite</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>50-59</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>60-69</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>70-79</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>80-89</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>90-99</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>100-109</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>110-119</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>120+</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td colspan=\"7\">\n                        <table>\n                            <tbody>\n                                <tr>\n                                    <td>YOU ARE STRONGER THAN:</td>\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters at your <b>strength level</b></span></td>\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters with your <b>height</b></span></td>\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters at your <b>age</b></span></td>\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters with your <b>body weight</b></span></td>\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters with your <b>waist-hip ratio</b></span></td>\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters with your <b>muscle fiber type</b></span></td>\n                                    <td><div><input type=\"text\"> %</div><span>of your <b>mirror athletes</b> (all variables combined)</span></td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n\n<div class=\"exercise-table\">\n    <div class=\"exercise-table-title\">\n        <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-12 col-sm-6\">\n                <h4>CALVES</h4>\n                <div class=\"exercise-box\">\n                    <p>EXERCISE:</p>\n                    <div class=\"dropdown\">\n                        <button class=\"btn dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\n                        aria-haspopup=\"true\" aria-expanded=\"false\">STANDING CALF RAISES</button>\n                        <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                        <a class=\"dropdown-item\" href=\"#\">UNTRAINED</a>\n                        <a class=\"dropdown-item\" href=\"#\">NOVICE</a>\n                        <a class=\"dropdown-item\" href=\"#\">INTERMEDIATE</a>\n                        <a class=\"dropdown-item\" href=\"#\">ADVANCED</a>\n                        <a class=\"dropdown-item\" href=\"#\">ELITE</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-12 col-sm-auto\">\n                <a href=\"\" class=\"btn btn-yellow-gradient btn-toggle\" data-toggle=\"collapse\" href=\"#collapseForm6\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseForm6\">CALCULATE ONE REP MAX</a>\n\n                <div class=\"collapse calculate\" id=\"collapseForm6\">\n                    <div class=\"form-wrapper\">\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Lift (kg)\">\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Repetitions\">\n                        </div>\n                        <div class=\"form-group\">\n                            <a href=\"\" class=\"btn btn-block btn-black\">CALCULATE</a>\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control bg-gray\" placeholder=\"Your one rep max\">\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control bg-gray\" placeholder=\"Your level is\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"table-responsive\">\n        <table class=\"table\">\n            <thead>\n                <tr>\n                    <th>BODY WEIGHT (KG)</th>\n                    <th>UNTRAINED</th>\n                    <th>Novie</th>\n                    <th>Intermediate</th>\n                    <th>Advanced</th>\n                    <th>Elite</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>50-59</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>60-69</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>70-79</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>80-89</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>90-99</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>100-109</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>110-119</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>120+</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td colspan=\"7\">\n                        <table>\n                            <tbody>\n                                <tr>\n                                    <td>YOU ARE STRONGER THAN:</td>\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters at your <b>strength level</b></span></td>\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters with your <b>height</b></span></td>\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters at your <b>age</b></span></td>\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters with your <b>body weight</b></span></td>\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters with your <b>waist-hip ratio</b></span></td>\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters with your <b>muscle fiber type</b></span></td>\n                                    <td><div><input type=\"text\"> %</div><span>of your <b>mirror athletes</b> (all variables combined)</span></td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n\n<div class=\"exercise-table\">\n    <div class=\"exercise-table-title\">\n        <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-12 col-sm-6\">\n                <h4>Biceps</h4>\n                <div class=\"exercise-box\">\n                    <p>EXERCISE:</p>\n                    <div class=\"dropdown\">\n                        <button class=\"btn dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\n                        aria-haspopup=\"true\" aria-expanded=\"false\">BARBELL SCOTT CURL</button>\n                        <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                        <a class=\"dropdown-item\" href=\"#\">UNTRAINED</a>\n                        <a class=\"dropdown-item\" href=\"#\">NOVICE</a>\n                        <a class=\"dropdown-item\" href=\"#\">INTERMEDIATE</a>\n                        <a class=\"dropdown-item\" href=\"#\">ADVANCED</a>\n                        <a class=\"dropdown-item\" href=\"#\">ELITE</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-12 col-sm-auto\">\n                <a href=\"\" class=\"btn btn-yellow-gradient btn-toggle\" data-toggle=\"collapse\" href=\"#collapseForm7\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseForm7\">CALCULATE ONE REP MAX</a>\n\n                <div class=\"collapse calculate\" id=\"collapseForm7\">\n                    <div class=\"form-wrapper\">\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Lift (kg)\">\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Repetitions\">\n                        </div>\n                        <div class=\"form-group\">\n                            <a href=\"\" class=\"btn btn-block btn-black\">CALCULATE</a>\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control bg-gray\" placeholder=\"Your one rep max\">\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control bg-gray\" placeholder=\"Your level is\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"table-responsive\">\n        <table class=\"table\">\n            <thead>\n                <tr>\n                    <th>BODY WEIGHT (KG)</th>\n                    <th>UNTRAINED</th>\n                    <th>Novie</th>\n                    <th>Intermediate</th>\n                    <th>Advanced</th>\n                    <th>Elite</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>50-59</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>60-69</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>70-79</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>80-89</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>90-99</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>100-109</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>110-119</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>120+</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td colspan=\"7\">\n                        <table>\n                            <tbody>\n                                <tr>\n                                    <td>YOU ARE STRONGER THAN:</td>\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters at your <b>strength level</b></span></td>\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters with your <b>height</b></span></td>\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters at your <b>age</b></span></td>\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters with your <b>body weight</b></span></td>\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters with your <b>waist-hip ratio</b></span></td>\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters with your <b>muscle fiber type</b></span></td>\n                                    <td><div><input type=\"text\"> %</div><span>of your <b>mirror athletes</b> (all variables combined)</span></td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n\n<div class=\"exercise-table\">\n    <div class=\"exercise-table-title\">\n        <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-12 col-sm-6\">\n                <h4>TRICEPS</h4>\n                <div class=\"exercise-box\">\n                    <p>EXERCISE:</p>\n                    <div class=\"dropdown\">\n                        <button class=\"btn dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\n                        aria-haspopup=\"true\" aria-expanded=\"false\">DUMBELL SKULL CRUSHER</button>\n                        <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                        <a class=\"dropdown-item\" href=\"#\">UNTRAINED</a>\n                        <a class=\"dropdown-item\" href=\"#\">NOVICE</a>\n                        <a class=\"dropdown-item\" href=\"#\">INTERMEDIATE</a>\n                        <a class=\"dropdown-item\" href=\"#\">ADVANCED</a>\n                        <a class=\"dropdown-item\" href=\"#\">ELITE</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-12 col-sm-auto\">\n                <a href=\"\" class=\"btn btn-yellow-gradient btn-toggle\" data-toggle=\"collapse\" href=\"#collapseForm8\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseForm8\">CALCULATE ONE REP MAX</a>\n\n                <div class=\"collapse calculate\" id=\"collapseForm8\">\n                    <div class=\"form-wrapper\">\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Lift (kg)\">\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Repetitions\">\n                        </div>\n                        <div class=\"form-group\">\n                            <a href=\"\" class=\"btn btn-block btn-black\">CALCULATE</a>\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control bg-gray\" placeholder=\"Your one rep max\">\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control bg-gray\" placeholder=\"Your level is\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"table-responsive\">\n        <table class=\"table\">\n            <thead>\n                <tr>\n                    <th>BODY WEIGHT (KG)</th>\n                    <th>UNTRAINED</th>\n                    <th>Novie</th>\n                    <th>Intermediate</th>\n                    <th>Advanced</th>\n                    <th>Elite</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>50-59</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>60-69</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>70-79</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>80-89</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>90-99</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>100-109</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>110-119</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>120+</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td colspan=\"7\">\n                        <table>\n                            <tbody>\n                                <tr>\n                                    <td>YOU ARE STRONGER THAN:</td>\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters at your <b>strength level</b></span></td>\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters with your <b>height</b></span></td>\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters at your <b>age</b></span></td>\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters with your <b>body weight</b></span></td>\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters with your <b>waist-hip ratio</b></span></td>\n                                    <td><div><input type=\"text\"> %</div><span>of male lifters with your <b>muscle fiber type</b></span></td>\n                                    <td><div><input type=\"text\"> %</div><span>of your <b>mirror athletes</b> (all variables combined)</span></td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/strength-standards/components/exercise-table/exercise-table.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/strength-standards/components/exercise-table/exercise-table.component.ts ***!
  \******************************************************************************************/
/*! exports provided: StrengthStandardsExerciseTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrengthStandardsExerciseTable", function() { return StrengthStandardsExerciseTable; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StrengthStandardsExerciseTable = /** @class */ (function () {
    function StrengthStandardsExerciseTable() {
        this.title = '';
    }
    StrengthStandardsExerciseTable.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StrengthStandardsExerciseTable.prototype, "title", void 0);
    StrengthStandardsExerciseTable = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-strength-standards-exercise-table',
            template: __webpack_require__(/*! ./exercise-table.component.html */ "./src/app/strength-standards/components/exercise-table/exercise-table.component.html")
        })
    ], StrengthStandardsExerciseTable);
    return StrengthStandardsExerciseTable;
}());



/***/ }),

/***/ "./src/app/strength-standards/components/main.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/strength-standards/components/main.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"main-title\">\n        <h1>STRENGTH STANDARDS</h1>\n        <span>HOW STRONG ARE YOU?</span>\n    </div>\n    <osg-strength-standards-enter-information></osg-strength-standards-enter-information>\n    <osg-strength-standards-exercise-table></osg-strength-standards-exercise-table>\n</div>"

/***/ }),

/***/ "./src/app/strength-standards/components/main.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/strength-standards/components/main.component.ts ***!
  \*****************************************************************/
/*! exports provided: StrengthStandardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrengthStandardsComponent", function() { return StrengthStandardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StrengthStandardsComponent = /** @class */ (function () {
    function StrengthStandardsComponent() {
    }
    StrengthStandardsComponent.prototype.ngOnInit = function () {
    };
    StrengthStandardsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'osg-strength-standards',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/strength-standards/components/main.component.html")
        })
    ], StrengthStandardsComponent);
    return StrengthStandardsComponent;
}());



/***/ }),

/***/ "./src/app/strength-standards/strength-standards.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/strength-standards/strength-standards.module.ts ***!
  \*****************************************************************/
/*! exports provided: StrengthStandardsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrengthStandardsModule", function() { return StrengthStandardsModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _components_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/main.component */ "./src/app/strength-standards/components/main.component.ts");
/* harmony import */ var _components_enter_information_enter_information_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/enter-information/enter-information.component */ "./src/app/strength-standards/components/enter-information/enter-information.component.ts");
/* harmony import */ var _components_exercise_table_exercise_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/exercise-table/exercise-table.component */ "./src/app/strength-standards/components/exercise-table/exercise-table.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var StrengthStandardsModule = /** @class */ (function () {
    function StrengthStandardsModule() {
    }
    StrengthStandardsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_main_component__WEBPACK_IMPORTED_MODULE_3__["StrengthStandardsComponent"],
                _components_enter_information_enter_information_component__WEBPACK_IMPORTED_MODULE_4__["StrengthStandardsEnterInformation"],
                _components_exercise_table_exercise_table_component__WEBPACK_IMPORTED_MODULE_5__["StrengthStandardsExerciseTable"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_2__["CoreModule"]
            ],
            providers: [],
        })
    ], StrengthStandardsModule);
    return StrengthStandardsModule;
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

module.exports = __webpack_require__(/*! /Users/macbookfabi/Sites/fantasylab/osg.no/resources/ngx/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map