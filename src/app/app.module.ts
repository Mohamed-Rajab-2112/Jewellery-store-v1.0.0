import {NgModule}      from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';
// import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {
  JewelleryStoreAppComponent,
  JewelleryHomeComponent,
  JewelleryListComponent,
  JewellerySearchResultsComponent,
  JewelleryDetailsComponent,
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
} from "./shared/index";


@NgModule({
  imports: [BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    SharedModule,
    NgbModule.forRoot(),
    // NoopAnimationsModule,
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
    FooterComponent
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
    JewelleryListActivator,]
})

export class AppModule {
}
