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
var jewellery_service_1 = require("../jewellery.service");
var NavComponent = (function () {
    function NavComponent(router, jewellery) {
        this.router = router;
        this.jewellery = jewellery;
    }
    NavComponent.prototype.searchProductAndPlace = function (values) {
        this.searchRoutingParamMap = {};
        this.router.navigate(["/search/" + JSON.stringify(values)]);
    };
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jewellery.searchTermsChanged.subscribe(function (value) {
            _this.productName = value["productName"] === "undefined" ? "" : value["productName"];
            _this.sellerName = value["sellerName"] === "undefined" ? "" : value["sellerName"];
            _this.place = value["place"] === "undefined" ? "" : value["place"];
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
    __metadata("design:paramtypes", [router_1.Router, jewellery_service_1.JewelleryService])
], NavComponent);
exports.NavComponent = NavComponent;
//# sourceMappingURL=nav.component.js.map