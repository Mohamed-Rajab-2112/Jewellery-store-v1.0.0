import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {
  JewelleryThumbnailComponent,
  SellerAddComponent,
  SellerProductsFilter,
  SinginSignUpComponent,
  JewelleryFavouriteBtn,
  SellerThumbnail,
  JewelleryFullOption
} from '../index'

import {NgbModule} from '@ng-bootstrap/ng-bootstrap'

import {
  MdButtonModule,
  MdCheckboxModule,
  MdInputModule,
  MdIconModule,
  MdTooltipModule,
  MdCardModule,
  MdAutocompleteModule,
  MdSelectModule,
  MdDialogModule
  // MdTabsModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdIconModule,
    MdTooltipModule,
    MdCardModule,
    MdAutocompleteModule,
    MdSelectModule,
    MdDialogModule,
    // MdTabsModule
  ],
  declarations: [
    JewelleryThumbnailComponent,
    JewelleryFullOption,
    SellerProductsFilter,
    SinginSignUpComponent,
    JewelleryFavouriteBtn,
    SellerThumbnail,
    SellerAddComponent

  ],
  entryComponents: [
    SellerAddComponent
  ],
  exports: [
    JewelleryThumbnailComponent,
    JewelleryFullOption,
    SinginSignUpComponent,
    JewelleryFavouriteBtn,
    SellerThumbnail,
    SellerAddComponent,
    NgbModule,
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdIconModule,
    MdTooltipModule,
    MdCardModule,
    MdAutocompleteModule,
    MdSelectModule,
    MdDialogModule
    // MdTabsModule
  ]
})

export class SharedModule {
}
