import {Component, Input, OnInit} from "@angular/core";
import {User} from "../../index";
import {Router} from "@angular/router";
import {JewelleryService} from "../../shared/services/jewellery.service";

@Component({
  selector: 'seller-thumbnail',
  templateUrl: './seller.thumbnail.template.html',
  styleUrls: ['./seller.thumbnail.styles.css']
})

export class SellerThumbnail implements OnInit {
  @Input() sellerDetails: User;

  constructor(private router: Router, private jewellery: JewelleryService) {

  }

  ngOnInit() {
    this.jewellery.getProductTypes().map((type) => {
      this.sellerDetails[type + 'Count'] = this.jewellery.getCountJewelleryBySellerIdAndJewelleryType(this.sellerDetails.id, type);
    });
  }

  routeToSellerDetails(sellerId: number) {
    this.router.navigate(['/seller/sellers-list', sellerId])
  }

}
