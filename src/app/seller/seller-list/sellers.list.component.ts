import {Component, OnInit} from "@angular/core";
import {SellerService, User} from "../../shared/index";

@Component({
  selector: "sllers-list",
  templateUrl: 'app/seller/seller-list/seller.list.template.html'
})

export class SellersListComponent implements OnInit {
  sellerList: User[];
  filteredList: User[];
  area: string;

  constructor(private seller: SellerService) {
  }

  ngOnInit() {
    this.sellerList = this.seller.getSeller();
    this.filteredList = this.sellerList.slice();
  }

  filterSellers(area: string) {
    if (area === '') {
      this.filteredList = this.sellerList.slice();
    } else {
      this.filteredList = this.sellerList.filter((seller) => {
        return seller.area.includes(area)
      });
    }
  }
}
