"use strict";
var index_1 = require("./index");
exports.appRoutes = [
    { path: "home", component: index_1.JewelleryHomeComponent },
    { path: "jewellery-list", component: index_1.JewelleryListComponent },
    { path: "jewellery-list/:jewelleryDetails", component: index_1.JewelleryDetailsComponent },
    { path: "search/:terms", component: index_1.JewellerySearchResultsComponent },
    { path: "seller", loadChildren: "app/seller/seller.module#SellerModule" },
    { path: "customer", loadChildren: "app/customer/customer.module#CustomerModule" },
    { path: "", redirectTo: "/home", pathMatch: "full" }
];
//# sourceMappingURL=routes.js.map