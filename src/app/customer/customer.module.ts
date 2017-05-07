import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

import {CustomerProfileComponent, customerRoutes} from './index';

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild(customerRoutes)],
  declarations: [CustomerProfileComponent]
})

export class CustomerModule {
}
