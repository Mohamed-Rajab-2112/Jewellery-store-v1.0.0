"use strict";
var index_1 = require("./index");
exports.sellerRoutes = [
    { path: "sellers-list", component: index_1.SellersListComponent },
    { path: "vendor-profile", component: index_1.SellerProfileComponent },
    { path: "sellers-list/:id", component: index_1.SellerDetailsComponent }
];
//# sourceMappingURL=seller.routes.js.map