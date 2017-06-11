import {Component, OnInit} from "@angular/core";
import {Params, ActivatedRoute} from "@angular/router";
import {
  User,
  JewelleryService,
  SellerService,
  JeweleryProduct
} from "../../shared/index";

@Component({
  selector: 'seller-details',
  templateUrl: 'app/seller/seller-details/seller.details.template.html',
  styleUrls: ['app/seller/seller-details/seller.details.styles.css']
})

export class SellerDetailsComponent implements OnInit {
  sellingList: JeweleryProduct[];
  sellingListFiltered: JeweleryProduct[];
  sellerDetails: User;

  constructor(private jewellery: JewelleryService, private seller: SellerService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.sellingList = this.jewellery.getJewelleryBySellerId(Number(params['id']));
      this.sellingListFiltered = this.sellingList.slice();
      this.sellerDetails = this.seller.getSellerById(Number(params['id']));
    });
    console.log(this.sellingList)
  }

  applyFilterTerms(terms: any) {
    this.sellingListFiltered = this.jewellery.applyFilterTerms(terms, this.sellingList)
  }

  sortProducts(sortTerm: string) {
    console.log(sortTerm);
    this.jewellery.sortProducts(sortTerm, this.sellingListFiltered);
  }
}
