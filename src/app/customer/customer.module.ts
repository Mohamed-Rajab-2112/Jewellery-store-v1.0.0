import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {
  CustomerProfile,
  customerRoutes,
  JewelleryFavouriteComponent
} from './index';

import {
  SharedModule
} from '../shared/index';

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild(customerRoutes),
    FormsModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [
    CustomerProfile,
    JewelleryFavouriteComponent
  ]
})

export class CustomerModule {
}
