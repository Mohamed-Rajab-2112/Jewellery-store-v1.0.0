import {NgModule}      from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';

import {
  JewelleryStoreAppComponent,
  JewelleryHomeComponent,
  JewelleryListComponent,
  JewellerySearchResultsComponent,
  JewelleryDetailsComponent,
  JewellerySearchForm,
  appRoutes
}  from "./jewellery/index";

import {
  JewelleryService,
  NavComponent,
  FooterComponent,
  SharedModule,
  CustomerService,
  SellerService,
  AuthService,
  CustomerProfileActivator,
  VendorProfileActivator,
  JewelleryAndSellerDetailsActivator,
  DefaultRedirectActivator,
  JewelleryListActivator,
  RegisteredIcons,
  Utility,
} from "./shared/index";


@NgModule({
  imports: [BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    HttpModule
  ],
  declarations: [
    JewelleryStoreAppComponent,
    JewelleryHomeComponent,
    JewelleryListComponent,
    JewellerySearchResultsComponent,
    JewelleryDetailsComponent,
    NavComponent,
    FooterComponent,
    JewellerySearchForm
  ],
  bootstrap: [JewelleryStoreAppComponent],
  providers: [
    CustomerService,
    JewelleryService,
    SellerService,
    AuthService,
    CustomerProfileActivator,
    VendorProfileActivator,
    JewelleryAndSellerDetailsActivator,
    DefaultRedirectActivator,
    JewelleryListActivator,
    RegisteredIcons,
    Utility
  ]
})

export class AppModule {
}
