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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var jewellery_service_1 = require("../services/jewellery.service");
var auth_service_1 = require("../services/auth.service");
var customer_service_1 = require("../services/customer.service");
var utility_service_1 = require("../services/utility.service");
var NavComponent = (function () {
    function NavComponent(router, jewellery, auth, customer, utility) {
        this.router = router;
        this.jewellery = jewellery;
        this.auth = auth;
        this.customer = customer;
        this.utility = utility;
    }
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.user.subscribe(function (value) {
            _this.userName = value.name;
            _this.userType = value.userType;
            _this.showFavourite = value.userType == 'Customer';
        });
        this.auth.isAuth.subscribe(function (isAuth) {
            _this.toggleLogInBtn = !isAuth;
        });
        this.customer.favouriteJewellery.subscribe(function (value) {
            _this.favouriteCount = value.length;
        });
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
    return NavComponent;
}());
NavComponent = __decorate([
    core_1.Component({
        selector: "nav-component",
        templateUrl: "./nav.component.template.html",
        styleUrls: ["./nav.component.styles.css"],
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [router_1.Router, jewellery_service_1.JewelleryService, auth_service_1.AuthService, customer_service_1.CustomerService, utility_service_1.Utility])
], NavComponent);
exports.NavComponent = NavComponent;
//# sourceMappingURL=nav.component.js.map