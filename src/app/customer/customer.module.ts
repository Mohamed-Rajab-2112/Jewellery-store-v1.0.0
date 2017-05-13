import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";

import {
  CustomerProfile,
  customerRoutes
} from './index';

import {
  CustomerService
} from '../shared/index';

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild(customerRoutes),
    FormsModule
  ],
  declarations: [CustomerProfile],
  providers: [
    CustomerService
  ]
})

export class CustomerModule {
}
