"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var index_2 = require("../index");
var index_3 = require("../index");
exports.appRoutes = [
    { path: "home", component: index_1.JewelleryHomeComponent },
    { path: "home/sellers-list", component: index_2.SellersListComponent },
    { path: "home/:type", component: index_1.JewelleryListComponent, canActivate: [index_3.JewelleryListActivator] },
    { path: "home/:type/:id", component: index_1.JewelleryDetailsComponent, canActivate: [index_3.JewelleryAndSellerDetailsActivator] },
    { path: "search/:terms", component: index_1.JewellerySearchResultsComponent },
    {
        path: "seller",
        loadChildren: "app/seller/seller.module#SellerModule"
    },
    {
        path: "customer",
        loadChildren: "app/customer/customer.module#CustomerModule"
    },
    { path: '', redirectTo: "/home", pathMatch: "prefix" }
];
//# sourceMappingURL=routes.js.map