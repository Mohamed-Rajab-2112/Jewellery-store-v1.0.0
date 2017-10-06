import {Routes} from "@angular/router";

import {
  JewelleryHomeComponent,
  JewelleryListComponent,
  JewellerySearchResultsComponent,
  JewelleryDetailsComponent,
} from "./index";

import {
  SellersListComponent
} from "../index"

import {JewelleryAndSellerDetailsActivator, DefaultRedirectActivator, JewelleryListActivator} from '../index'

export const appRoutes: Routes = [
  {path: "home", component: JewelleryHomeComponent},
  {path: "home/sellers-list", component: SellersListComponent},
  {path: "home/:type", component: JewelleryListComponent, canActivate: [JewelleryListActivator]},
  {path: "home/:type/:id", component: JewelleryDetailsComponent, canActivate: [JewelleryAndSellerDetailsActivator]},
  {path: "search/:terms", component: JewellerySearchResultsComponent},
  {
    path: "seller",
    loadChildren: "app/seller/seller.module#SellerModule"
  },
  {
    path: "customer",
    loadChildren: "app/customer/customer.module#CustomerModule"
  },
  {path: '', redirectTo: "/home", pathMatch: "prefix"}
];
