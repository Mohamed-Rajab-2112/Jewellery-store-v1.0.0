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

import {
  MdButtonModule,
  MdCheckboxModule,
  MdInputModule,
  MdIconModule,
  MdTabsModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdIconModule,
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
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdIconModule,
    // MdTabsModule
  ]
})

export class SharedModule {
}
