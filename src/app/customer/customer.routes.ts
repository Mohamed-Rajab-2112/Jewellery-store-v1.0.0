import {Routes} from "@angular/router";

import {CustomerProfile, JewelleryFavouriteComponent} from './index';
import {CustomerProfileActivator} from '../shared/services/customer.auth.activator.service';

export const customerRoutes: Routes = [
  {
    path: 'customer-profile',
    component: CustomerProfile,
    canActivate: [CustomerProfileActivator]
  },
  {
    path: 'customer-favourite-jewellery',
    component: JewelleryFavouriteComponent,
    canActivate: [CustomerProfileActivator]
  },
  {
    path: '',
    redirectTo: "/home",
    pathMatch: "prefix"
  }
];
