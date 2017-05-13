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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var jewellery_service_1 = require("../services/jewellery.service");
var auth_service_1 = require("../services/auth.service");
var NavComponent = (function () {
    function NavComponent(router, jewellery, auth) {
        this.router = router;
        this.jewellery = jewellery;
        this.auth = auth;
    }
    NavComponent.prototype.searchProductAndPlace = function (values) {
        this.router.navigate(["/search/" + JSON.stringify(values)]);
    };
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jewellery.searchTermsChanged.subscribe(function (value) {
            _this.productName = value["productName"] === "undefined" ? "" : value["productName"];
            _this.sellerName = value["sellerName"] === "undefined" ? "" : value["sellerName"];
            _this.place = value["place"] === "undefined" ? "" : value["place"];
        });
        this.signInToggle = false;
        this.choosedUserType = '-Membership type-';
        this.userTypes = this.auth.getUserTypes();
        this.auth.user.subscribe(function (value) {
            console.log(value);
            // this.auth.actualUser = value;
            _this.userName = value.name;
            _this.userType = value.userType;
        });
    };
    NavComponent.prototype.logIn = function (values) {
        this.auth.logIn(values);
        this.toggleLogInBtn = this.auth.isAuth;
        this.signInToggle = false;
    };
    NavComponent.prototype.toggleSignInFormClass = function () {
        if (this.signInToggle) {
            return ['sign-in', 'show-sign-in'];
        }
        else if (!this.signInToggle) {
            return ['sign-in', 'hide-sign-in'];
        }
    };
    NavComponent.prototype.signUp = function (values) {
        values.signUpDate = new Date(Date.now()).toISOString();
        values.userType = this.choosedUserType;
        console.log(values);
        this.auth.signUp(values);
    };
    NavComponent.prototype.toggleTypeButton = function (type) {
        this.choosedUserType = type;
    };
    NavComponent.prototype.toggleSignInFlag = function () {
        this.signInToggle = !this.signInToggle;
    };
    NavComponent.prototype.setChoosedTypeButtonClass = function () {
        if (this.choosedUserType == 'Vendor') {
            return ['typeButtonSelected'];
        }
        else if (this.choosedUserType == 'Customer') {
            return ['typeButtonSelected'];
        }
        else {
            return ['typeButtonNotSelected'];
        }
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
    return NavComponent;
}());
NavComponent = __decorate([
    core_1.Component({
        selector: "nav-component",
        templateUrl: "./nav.component.template.html",
        styleUrls: ["./nav.component.styles.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router, jewellery_service_1.JewelleryService, auth_service_1.AuthService])
], NavComponent);
exports.NavComponent = NavComponent;
//# sourceMappingURL=nav.component.js.map