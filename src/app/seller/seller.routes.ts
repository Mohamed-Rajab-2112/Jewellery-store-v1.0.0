import {Routes} from "@angular/router";

import {
  SellersListComponent,
  SellerDetailsComponent,
  SellerProfileComponent
} from "./index";

export const sellerRoutes: Routes = [
  {path: "sellers-list", component: SellersListComponent},
  {path: "vendor-profile", component: SellerProfileComponent},
  {path: "sellers-list/:id", component: SellerDetailsComponent}
];
