import {Component, Input} from "@angular/core";
import {User} from "../../index";
@Component({
  selector: 'seller-thumbnail',
  templateUrl: 'app/seller/seller-thumbnail/seller.thumbnail.template.html'
})

export class SellerThumbnail {
  @Input() sellerDetails: User;

}
