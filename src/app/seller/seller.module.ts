import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


import {
  sellerRoutes,
  SellerDetailsComponent,
  SellerProfileComponent,
  SellerProfileEditComponent
} from './index';

import {
  SharedModule
} from '../shared/index';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(sellerRoutes),
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    SellerDetailsComponent,
    SellerProfileComponent,
    SellerProfileEditComponent
  ]
})

export class SellerModule {
}
