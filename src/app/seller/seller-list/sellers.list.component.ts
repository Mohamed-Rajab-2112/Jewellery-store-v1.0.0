import {Component, OnInit} from "@angular/core";
import {SellerService, User} from "../../shared/index";
import {Utility} from "../../shared/services/utility.service";
import {JewelleryService} from "../../shared/services/jewellery.service";

import {FormGroup, FormControl} from '@angular/forms';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: "sllers-list",
  templateUrl: 'app/seller/seller-list/seller.list.template.html',
  styleUrls: ['app/seller/seller-list/seller.list.styles.css']
})

export class SellersListComponent implements OnInit {
  sellerList: User[];
  filteredList: User[];
  viewList: User[];
  paginationLength: number;
  area: string;
  page: number;

  areas: string[];
  testForm: FormGroup;
  stateCtrl: FormControl;
  filteredAreas: any;

  constructor(private seller: SellerService, private jewellery: JewelleryService) {
  }

  ngOnInit() {

    this.areas = this.jewellery.getAreas();

    this.stateCtrl = new FormControl();

    this.testForm = new FormGroup({
      stateCtrl: this.stateCtrl
    });

    this.filteredAreas = this.stateCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterAreas(name));


    this.sellerList = this.seller.getSeller();
    this.page = 1;

    this.viewList = this.sellerList.slice((this.page - 1) * 10, this.page * 10);
    this.paginationLength = this.sellerList.length;

    this.sellerList.map((seller) => {
      this.jewellery.getProductTypes().map((type) => {
        seller[type + 'Count'] = this.jewellery.getCountJewelleryBySellerIdAndJewelleryType(seller.id, type);
      });
    });
  }

  filterAreas(val: string) {
    console.log(val);
    if (val) {
      return this.areas.filter(s => new RegExp(`^${val}`, 'gi').test(s))
    } else {
      this.viewList = this.sellerList.slice((this.page - 1) * 10, this.page * 10);
      this.paginationLength = this.sellerList.length;
      this.filteredList = [];
      this.page = 1;
      return this.areas;
    }
  }

  applyPagination(pageNumber: number) {
    if (this.filteredList.length) {
      this.viewList = this.filteredList.slice((this.page - 1) * 10, this.page * 10);
    } else {
      this.viewList = this.sellerList.slice((this.page - 1) * 10, this.page * 10);
    }

    console.log(pageNumber)
  }

  filterSellers(area: string) {
    this.page = 1;
    this.filteredList = this.sellerList.filter((seller) => {
      return seller.area.includes(area)
    });
    this.paginationLength = this.filteredList.length;
    this.viewList = this.filteredList.slice((this.page - 1) * 10, this.page * 10);
  }

}
