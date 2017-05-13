import {Routes} from "@angular/router";

import {CustomerProfile} from './index';
import {UserProfileActivator} from '../shared/services/user.profile.activator.service';

export const customerRoutes: Routes = [
  {
    path: 'customer-profile',
    component: CustomerProfile,
    canActivate: [UserProfileActivator]
  }
];
