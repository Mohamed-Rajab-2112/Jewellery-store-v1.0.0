import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

import {
  SellersListComponent,
  sellerRoutes,
  SellerThumbnail,
  SellerDetailsComponent,
  SellerProfileComponent
} from './index';

import {
  SharedModule
} from '../shared/index';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(sellerRoutes),
    SharedModule
  ],
  declarations: [
    SellersListComponent,
    SellerThumbnail,
    SellerDetailsComponent,
    SellerProfileComponent
  ]
})

export class SellerModule {
}
