"use strict";
var index_1 = require("./index");
var user_profile_activator_service_1 = require("../shared/services/user.profile.activator.service");
exports.customerRoutes = [
    {
        path: 'customer-profile',
        component: index_1.CustomerProfile,
        canActivate: [user_profile_activator_service_1.UserProfileActivator]
    }
];
//# sourceMappingURL=customer.routes.js.map