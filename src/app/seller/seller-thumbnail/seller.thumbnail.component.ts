import {Component, Input} from "@angular/core";
import {User} from "../../index";
@Component({
  selector: 'seller-thumbnail',
  templateUrl: './seller.thumbnail.template.html',
  styleUrls: ['./seller.thumbnail.styles.css']
})

export class SellerThumbnail {
  @Input() sellerDetails: User;

}
