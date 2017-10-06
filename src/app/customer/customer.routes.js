"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var customer_auth_activator_service_1 = require("../shared/services/customer.auth.activator.service");
exports.customerRoutes = [
    {
        path: 'customer-profile',
        component: index_1.CustomerProfile,
        canActivate: [customer_auth_activator_service_1.CustomerProfileActivator]
    },
    {
        path: 'customer-favourite-jewellery',
        component: index_1.JewelleryFavouriteComponent,
        canActivate: [customer_auth_activator_service_1.CustomerProfileActivator]
    },
    {
        path: '',
        redirectTo: "/home",
        pathMatch: "prefix"
    }
];
//# sourceMappingURL=customer.routes.js.map