webpackJsonp([2],{

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registration__ = __webpack_require__(310);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationPageModule", function() { return RegistrationPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegistrationPageModule = (function () {
    function RegistrationPageModule() {
    }
    return RegistrationPageModule;
}());
RegistrationPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__registration__["a" /* RegistrationPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__registration__["a" /* RegistrationPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__registration__["a" /* RegistrationPage */]
        ]
    })
], RegistrationPageModule);

//# sourceMappingURL=registration.module.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RegistrationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var RegistrationPage = (function () {
    function RegistrationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RegistrationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegistrationPage');
    };
    return RegistrationPage;
}());
RegistrationPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-registration',template:/*ion-inline-start:"G:\development\hybrid_mobile_workshop\lesson7\promo\src\pages\registration\registration.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-buttons left>\n      <button ion-button icon-only color="royal" (click)="createItem()">\n         <ion-icon name="arrow-round-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Registration</ion-title>\n    \n  </ion-toolbar>\n</ion-header>\n<ion-content class="login-content" padding>\n   \n  <div class="login-box">\n    <form   #registerForm="ngForm">\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n            \n            <ion-item>\n                <ion-label> <ion-icon name="person"></ion-icon></ion-label> \n              <ion-input type="text" placeholder="User" name="user-name" required></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label> <ion-icon name="mail"></ion-icon></ion-label> \n              <ion-input type="email" placeholder="Email" name="email" required></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label> <ion-icon name="lock"></ion-icon></ion-label> \n              <ion-input type="password" placeholder="Password" name="password" required></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label> <ion-icon name="lock"></ion-icon></ion-label> \n              <ion-input type="password" placeholder="Confirm password" name="password" required></ion-input>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row>\n        <ion-col class="signup-col">\n          <button ion-button class="submit-btn" full type="submit" [disabled]="!registerForm.form.valid">Sign In</button>\n          <!-- <button ion-button class="register-btn" block clear (click)="createAccount()">Create New Account</button> -->\n        </ion-col>\n      </ion-row>\n      \n    </form>\n  </div>\n</ion-content> \n<ion-footer>\n\n    <ion-grid>\n  <ion-row >\n      <ion-col col-12   style="text-align:right" (click)="createItem()">Cancel</ion-col>\n      \n  </ion-row> \n</ion-grid>\n</ion-footer>'/*ion-inline-end:"G:\development\hybrid_mobile_workshop\lesson7\promo\src\pages\registration\registration.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], RegistrationPage);

//# sourceMappingURL=registration.js.map

/***/ })

});
//# sourceMappingURL=2.main.js.map