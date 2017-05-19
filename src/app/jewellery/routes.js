"use strict";
var index_1 = require("./index");
var index_2 = require("../index");
exports.appRoutes = [
    { path: "home", component: index_1.JewelleryHomeComponent },
    { path: "home/:type", component: index_1.JewelleryListComponent, canActivate: [index_2.JewelleryListActivator] },
    { path: "home/:type/:id", component: index_1.JewelleryDetailsComponent, canActivate: [index_2.JewelleryAndSellerDetailsActivator] },
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