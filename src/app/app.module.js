"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var animations_1 = require("@angular/platform-browser/animations");
var http_1 = require("@angular/http");
var index_1 = require("./jewellery/index");
var index_2 = require("./shared/index");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(index_1.appRoutes),
            forms_1.FormsModule,
            index_2.SharedModule,
            ng_bootstrap_1.NgbModule.forRoot(),
            animations_1.BrowserAnimationsModule,
            http_1.HttpModule
        ],
        declarations: [
            index_1.JewelleryStoreAppComponent,
            index_1.JewelleryHomeComponent,
            index_1.JewelleryListComponent,
            index_1.JewellerySearchResultsComponent,
            index_1.JewelleryDetailsComponent,
            index_2.NavComponent,
            index_2.FooterComponent,
            index_1.JewellerySearchForm
        ],
        bootstrap: [index_1.JewelleryStoreAppComponent],
        providers: [
            index_2.CustomerService,
            index_2.JewelleryService,
            index_2.SellerService,
            index_2.AuthService,
            index_2.CustomerProfileActivator,
            index_2.VendorProfileActivator,
            index_2.JewelleryAndSellerDetailsActivator,
            index_2.DefaultRedirectActivator,
            index_2.JewelleryListActivator,
            index_2.RegisteredIcons,
            index_2.Utility
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map