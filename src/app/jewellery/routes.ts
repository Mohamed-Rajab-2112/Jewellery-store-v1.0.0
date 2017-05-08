import {Routes} from "@angular/router";

import {
  JewelleryHomeComponent,
  JewelleryListComponent,
  JewellerySearchResultsComponent,
  JewelleryDetailsComponent
} from "./index";

export const appRoutes: Routes = [
  {path: "home", component: JewelleryHomeComponent},
  {path: "jewellery-list", component: JewelleryListComponent},
  {path: "jewellery-list/:jewelleryDetails", component: JewelleryDetailsComponent},
  {path: "search/:terms", component: JewellerySearchResultsComponent},
  {path: "seller", loadChildren: "app/seller/seller.module#SellerModule"},
  {path: "customer", loadChildren: "app/customer/customer.module#CustomerModule"},
  {path: "", redirectTo: "/home", pathMatch: "full"}
];
