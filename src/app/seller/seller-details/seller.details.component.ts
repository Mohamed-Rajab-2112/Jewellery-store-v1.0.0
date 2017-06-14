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
  selectedHeightClass: string;

  constructor(private jewellery: JewelleryService, private seller: SellerService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.sellingList = this.jewellery.getJewelleryBySellerId(Number(params['id']));
      this.sellingListFiltered = this.sellingList.slice();
      this.sellerDetails = this.seller.getSellerById(Number(params['id']));
    });
    console.log(this.sellingList);
    let measuredRatio = Math.ceil(this.sellingListFiltered.length / 5);
    console.log(measuredRatio);
    if (measuredRatio == 1) {
      this.selectedHeightClass = 'height-for-overFlow-container-1';
    } else if (measuredRatio == 2) {
      this.selectedHeightClass = 'height-for-overFlow-container-2';
    } else if (measuredRatio == 3) {
      this.selectedHeightClass = 'height-for-overFlow-container-3';
    }
  }

  applyFilterTerms(terms: any) {
    this.sellingListFiltered = this.jewellery.applyFilterTerms(terms, this.sellingList)
  }

  sortProducts(sortTerm: string) {
    console.log(sortTerm);
    this.jewellery.sortProducts(sortTerm, this.sellingListFiltered);
  }
}
