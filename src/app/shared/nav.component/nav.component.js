"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var jewellery_service_1 = require("../services/jewellery.service");
var auth_service_1 = require("../services/auth.service");
var customer_service_1 = require("../services/customer.service");
var material_1 = require("@angular/material");
var signup_dialog_component_1 = require("../signup.component/signup.dialog.component");
var NavComponent = (function () {
    function NavComponent(router, jewellery, auth, customer, document, dialog) {
        this.router = router;
        this.jewellery = jewellery;
        this.auth = auth;
        this.customer = customer;
        this.document = document;
        this.dialog = dialog;
    }
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userSubscription = this.auth.user.subscribe(function (value) {
            _this.userName = value.name;
            _this.userType = value.userType;
            _this.showFavourite = value.userType == 'Customer';
        });
        this.auth.isAuth.subscribe(function (isAuth) {
            _this.toggleLogInBtn = !isAuth;
        });
        this.favouriteSubscription = this.customer.favouriteJewellery.subscribe(function (value) {
            _this.favouriteCount = value.length;
        });
        this.hideFixedNavPlaceholder = true;
        this.toggleSmallNavClass = ['translate-menu-close'];
        this.toggleSmallMenuBackground = false;
    };
    NavComponent.prototype.ngOnDestroy = function () {
        this.userSubscription.unsubscribe();
        this.favouriteSubscription.unsubscribe();
    };
    NavComponent.prototype.setSignInToggle = function (toggle) {
        this.signInToggle = toggle;
    };
    NavComponent.prototype.toggleSignInFormClass = function () {
        if (this.signInToggle) {
            return ['sign-in', 'show-sign-in'];
        }
        else if (!this.signInToggle) {
            return ['sign-in', 'hide-sign-in'];
        }
    };
    NavComponent.prototype.toggleSignInFlag = function (tabNum) {
        this.signInToggle = !this.signInToggle;
        this.tabNum = tabNum;
    };
    NavComponent.prototype.routeToProfile = function () {
        var _this = this;
        this.auth.user.subscribe(function (user) {
            if (user.userType === 'Customer') {
                _this.router.navigate(['customer/customer-profile']);
            }
            else if (user.userType === 'Vendor') {
                _this.router.navigate(['seller/vendor-profile']);
            }
        });
    };
    NavComponent.prototype.routeToFavouriteJewellery = function () {
        this.router.navigate((['customer/customer-favourite-jewellery']));
    };
    NavComponent.prototype.showLable = function (activeLable) {
        this.activeLable = activeLable;
    };
    NavComponent.prototype.hideLable = function () {
        this.activeLable = null;
    };
    NavComponent.prototype.toggleLable = function (activeLable) {
        if (this.activeLable == activeLable) {
            return ['show-lable'];
        }
        if (activeLable == this.currentActiveItem) {
            return ['show-lable'];
        }
        else {
            return [];
        }
    };
    NavComponent.prototype.setCurrentActiveNavItem = function (item) {
        var _this = this;
        this.currentActiveItem = item;
        this.auth.navIsActive.subscribe(function (navIsActive) {
            if (item == _this.currentActiveItem && navIsActive) {
                _this.activeClass = ['active'];
            }
            else {
                _this.activeClass = [];
            }
        });
        this.auth.setNavActive(true);
    };
    NavComponent.prototype.toggleActiveItem = function (ownItem) {
        if (ownItem == this.currentActiveItem) {
            return this.activeClass;
        }
    };
    NavComponent.prototype.signupVendor = function () {
        this.dialogRef = this.dialog.open(signup_dialog_component_1.SignUpDialog, {
            width: '500px'
        });
    };
    NavComponent.prototype.onWindowScroll = function () {
        var number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        console.log(number);
        if (number > 35) {
            this.fixedClass = ['fixed'];
            this.hideFixedNavPlaceholder = false;
            // this.navTopOffset = {top: '0'};
        }
        else {
            // this.navTopOffset = {top: '35px'};
            this.fixedClass = ['relative'];
            this.hideFixedNavPlaceholder = true;
        }
    };
    NavComponent.prototype.toggleMenu = function () {
        console.log('toggle nav');
        this.toggleSmallNavClass = String(this.toggleSmallNavClass) === String(['translate-menu-close']) ? ['translate-menu-open'] : ['translate-menu-close'];
        this.toggleSmallMenuBackground = !this.toggleSmallMenuBackground;
    };
    return NavComponent;
}());
__decorate([
    core_1.HostListener("window:scroll", []),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NavComponent.prototype, "onWindowScroll", null);
NavComponent = __decorate([
    core_1.Component({
        selector: "nav-component",
        templateUrl: "./nav.component.template.html",
        styleUrls: ["./nav.component.styles.css"],
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __param(4, core_1.Inject(platform_browser_1.DOCUMENT)),
    __metadata("design:paramtypes", [router_1.Router, jewellery_service_1.JewelleryService, auth_service_1.AuthService, customer_service_1.CustomerService, Document, material_1.MdDialog])
], NavComponent);
exports.NavComponent = NavComponent;
//# sourceMappingURL=nav.component.js.map