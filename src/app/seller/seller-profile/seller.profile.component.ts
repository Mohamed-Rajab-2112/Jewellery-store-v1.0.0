import {Component, OnChanges, OnInit} from "@angular/core";

import {
  JeweleryProduct,
  JewelleryService,
  AuthService
} from "../../shared/index";
import {User} from "../../shared/models/user.model";

@Component({
  selector: 'seller-profile',
  templateUrl: 'app/seller/seller-profile/seller.profile.template.html'
})

export class SellerProfileComponent implements OnInit {
  sellerProducts: JeweleryProduct[];
  sellerProductsFiltered: JeweleryProduct[];
  user: User;

  constructor(private jewellery: JewelleryService, private auth: AuthService) {
  }

  ngOnInit() {
    this.auth.user.subscribe((val) => {
      this.user = <User>val;
      this.sellerProducts = this.jewellery.getJewelleryBySellerId(val.id);
      this.sellerProductsFiltered = this.jewellery.getJewelleryBySellerId(val.id);
    });
  }

  addNewProduct(newProduct: any) {
    console.log(newProduct);
    this.sellerProducts.push(newProduct);
  }

  applyFilterTerms(terms: any) {
    this.sellerProductsFiltered = this.jewellery.applyFilterTerms(terms, this.sellerProducts)
  }

  sortProducts(sortTerm: string) {
    this.jewellery.sortProducts(sortTerm, this.sellerProductsFiltered);
  }
}
