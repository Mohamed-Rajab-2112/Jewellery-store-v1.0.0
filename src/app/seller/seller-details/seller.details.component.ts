import {Component, OnInit} from "@angular/core";
import {Params, ActivatedRoute} from "@angular/router";
import {JewelleryService} from "../../shared/services/jewellery.service";
import {JeweleryProduct} from "../../shared/models/jewelleryProduct.model";
import {Seller} from "../../shared/models/seller.model";
import {SellerService} from "../../shared/services/seller.service";

@Component({
  selector: 'seller-details',
  templateUrl: 'app/seller/seller-details/seller.details.template.html'
})

export class SellerDetailsComponent implements OnInit {
  public sellingList: JeweleryProduct[];
  public sellerDetails: Seller;

  constructor(private jewellery: JewelleryService, private seller: SellerService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.sellingList = this.jewellery.getJewelleryBySellerId(Number(params['id']));
      this.sellerDetails = this.seller.getSellerById(Number(params['id']));
    });
    console.log(this.sellingList)
  }
}
