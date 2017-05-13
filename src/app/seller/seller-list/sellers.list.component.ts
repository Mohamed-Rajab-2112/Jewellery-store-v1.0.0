import {Component, OnInit} from "@angular/core";
import {SellerService, Seller} from "../../shared/index";

@Component({
  selector: "sllers-list",
  templateUrl: 'app/seller/seller-list/seller.list.template.html'
})

export class SellersListComponent implements OnInit {
  sellerList: Seller[];

  constructor(private seller: SellerService) {
  }

  ngOnInit() {
    this.sellerList = this.seller.getSeller();
  }
}
