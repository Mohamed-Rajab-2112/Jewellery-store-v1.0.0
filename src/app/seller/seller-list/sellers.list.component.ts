import {Component, OnInit, OnDestroy} from "@angular/core";
import {SellerService, User} from "../../shared/index";
// import {Utility} from "../../shared/services/utility.service";
import {JewelleryService} from "../../shared/services/jewellery.service";

import {FormGroup, FormControl} from '@angular/forms';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: "sllers-list",
  templateUrl: 'app/seller/seller-list/seller.list.template.html',
  styleUrls: ['app/seller/seller-list/seller.list.styles.css']
})

export class SellersListComponent implements OnInit, OnDestroy {
  sellerList: User[];
  filteredList: User[];
  viewList: User[];
  paginationLength: number;
  area: string;
  page: number;
  pageSize: number;
  showVerifiedVendorAlert: boolean;
  showVerifiedVendorAlertSubscribetion: any;
  areas: string[];
  filterSellersForm: FormGroup;
  stateCtrl: FormControl;
  filteredAreas: any;

  constructor(private seller: SellerService, private jewellery: JewelleryService, private auth: AuthService) {
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.showVerifiedVendorAlertSubscribetion = this.auth.verifiedVendorsAlertState.subscribe((val) => {
      this.showVerifiedVendorAlert = val;
    });
    this.areas = this.jewellery.getAreas();
    this.stateCtrl = new FormControl();
    this.filterSellersForm = new FormGroup({
      stateCtrl: this.stateCtrl
    });
    this.filteredAreas = this.stateCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterAreas(name));
    this.sellerList = this.seller.getSeller();
    this.page = 1;
    this.pageSize = 15;
    this.viewList = this.sellerList.slice((this.page - 1) * this.pageSize, this.page * this.pageSize);
    this.paginationLength = this.sellerList.length;
  }

  ngOnDestroy() {
    this.showVerifiedVendorAlertSubscribetion.unsubscribe();
  }

  filterAreas(val: string) {
    console.log(val);
    if (val) {
      return this.areas.filter(s => new RegExp(`^${val}`, 'gi').test(s))
    } else {
      this.viewList = this.sellerList.slice((this.page - 1) * this.pageSize, this.page * this.pageSize);
      this.paginationLength = this.sellerList.length;
      this.filteredList = [];
      this.page = 1;
      return this.areas;
    }
  }

  applyPagination(pageNumber: number) {
    if (this.filteredList.length) {
      this.viewList = this.filteredList.slice((pageNumber - 1) * this.pageSize, pageNumber * this.pageSize);
    } else {
      this.viewList = this.sellerList.slice((pageNumber - 1) * this.pageSize, pageNumber * this.pageSize);
    }

    console.log(pageNumber)
  }

  filterSellers(area: string) {
    this.page = 1;
    this.filteredList = this.sellerList.filter((seller) => {
      return seller.area.includes(area)
    });
    this.paginationLength = this.filteredList.length;
    this.viewList = this.filteredList.slice((this.page - 1) * this.pageSize, this.page * this.pageSize);
  }

  dismissVerifiedVendors() {
    this.auth.setVerifiedVendorsAlertState(false);
  }

}
