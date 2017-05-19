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


@NgModule({
  imports: [
    CommonModule,
    FormsModule
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
    JewelleryFavouriteBtn
  ]
})

export class SharedModule {
}
