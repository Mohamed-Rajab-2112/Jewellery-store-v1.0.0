import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {
  JewelleryThumbnailComponent,
  SellerAddComponent,
  SellerProductsFilter,
  SinginSignUpComponent,
  JewelleryFavouriteBtn
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
  MdSelectModule
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
    MdSelectModule
    // MdTabsModule
  ],
  declarations: [
    JewelleryThumbnailComponent,
    SellerAddComponent,
    SellerProductsFilter,
    SinginSignUpComponent,
    JewelleryFavouriteBtn
  ],
  exports: [
    JewelleryThumbnailComponent,
    SellerAddComponent,
    SellerProductsFilter,
    SinginSignUpComponent,
    JewelleryFavouriteBtn,
    NgbModule,
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdIconModule,
    MdTooltipModule,
    MdCardModule,
    MdAutocompleteModule,
    MdSelectModule
    // MdTabsModule
  ]
})

export class SharedModule {
}
