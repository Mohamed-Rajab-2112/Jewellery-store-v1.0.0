import {Routes} from "@angular/router";

import {
  SellersListComponent,
  SellerDetailsComponent,
  SellerProfileComponent
} from "./index";

import {
  VendorProfileActivator,
  JewelleryAndSellerDetailsActivator
} from '../shared/index'

export const sellerRoutes: Routes = [
  {path: "sellers-list", component: SellersListComponent},
  {path: "vendor-profile", component: SellerProfileComponent/*, canActivate: [VendorProfileActivator]*/},
  {path: "sellers-list/:id", component: SellerDetailsComponent, canActivate: [JewelleryAndSellerDetailsActivator]}
];
