import {NgModule}      from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";

import {
  JewelleryStoreAppComponent,
  JewelleryHomeComponent,
  JewelleryListComponent,
  JewelleryThumbnailComponent,
  JewellerySearchResultsComponent,
  JewelleryDetailsComponent,
  appRoutes
}  from "./jewellery/index";

import {
  JewelleryService,
  NavComponent,
  FooterComponent
} from "./shared/index";

@NgModule({
  imports: [BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  declarations: [JewelleryStoreAppComponent,
    JewelleryHomeComponent,
    JewelleryListComponent,
    JewelleryThumbnailComponent,
    JewellerySearchResultsComponent,
    JewelleryDetailsComponent,
    NavComponent,
    FooterComponent
  ],
  bootstrap: [JewelleryStoreAppComponent],
  providers: [JewelleryService]
})

export class AppModule {
}
