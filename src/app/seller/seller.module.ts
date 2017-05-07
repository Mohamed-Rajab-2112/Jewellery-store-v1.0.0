import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

import {SellersListComponent, sellerRoutes} from './index';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(sellerRoutes)
  ],
  declarations: [SellersListComponent]
})

export class SellerModule {
}
