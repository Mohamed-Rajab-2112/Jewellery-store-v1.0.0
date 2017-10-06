import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {
  JewelleryThumbnailComponent,
  SellerAddComponent,
  SellerProductsFilter,
  SinginSignUpComponent,
  JewelleryFavouriteBtn,
  SellerThumbnail,
  JewelleryFullOption,
  DialogComponent,
  SignUpComponent,
  SignUpDialog
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
  MdDialogModule,
  MdTabsModule,
  MdMenuModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
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
    MdTabsModule,
    MdMenuModule
  ],
  declarations: [
    JewelleryThumbnailComponent,
    JewelleryFullOption,
    SellerProductsFilter,
    SinginSignUpComponent,
    JewelleryFavouriteBtn,
    SellerThumbnail,
    SellerAddComponent,
    DialogComponent,
    SignUpComponent,
    SignUpDialog
  ],
  entryComponents: [
    SellerAddComponent,
    DialogComponent,
    SignUpDialog
  ],
  exports: [
    JewelleryThumbnailComponent,
    JewelleryFullOption,
    SinginSignUpComponent,
    JewelleryFavouriteBtn,
    SellerThumbnail,
    SellerAddComponent,
    DialogComponent,
    SignUpComponent,
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
    MdTabsModule,
    MdMenuModule
  ]
})

export class SharedModule {
}
