import {Component, Input} from "@angular/core";
import {Seller} from "../../index";
@Component({
  selector: 'seller-thumbnail',
  templateUrl: 'app/seller/seller-thumbnail/seller.thumbnail.template.html'
})

export class SellerThumbnail {
  @Input() sellerDetails: Seller;

}
