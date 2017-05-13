import {NgModule}      from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";

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
  SellerService,
  AuthService,
  UserProfileActivator
} from "./shared/index";

@NgModule({
  imports: [BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    SharedModule
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
    JewelleryService,
    SellerService,
    AuthService,
    UserProfileActivator]
})

export class AppModule {
}
