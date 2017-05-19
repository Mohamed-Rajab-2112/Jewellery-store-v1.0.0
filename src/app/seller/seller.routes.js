"use strict";
var index_1 = require("./index");
var index_2 = require("../shared/index");
exports.sellerRoutes = [
    { path: "sellers-list", component: index_1.SellersListComponent },
    { path: "vendor-profile", component: index_1.SellerProfileComponent, canActivate: [index_2.VendorProfileActivator] },
    { path: "sellers-list/:id", component: index_1.SellerDetailsComponent, canActivate: [index_2.JewelleryAndSellerDetailsActivator] }
];
//# sourceMappingURL=seller.routes.js.map