import {Component, OnInit} from "@angular/core";
import {JeweleryProduct} from "../../shared/models/jewelleryProduct.model";
import {CustomerService} from "../../shared/services/customer.service";
import {AuthService} from "../../shared/services/auth.service";
@Component({
  selector: 'jewellery-favourite',
  templateUrl: 'app/customer/customer-favourite-Jewellery/customer-favourite-Jewellery-template.html'
})

export class JewelleryFavouriteComponent implements OnInit {
  favouriteJewelleryList: JeweleryProduct[];

  constructor(private customer: CustomerService, private auth:AuthService) {
  }

  ngOnInit() {
    this.favouriteJewelleryList = this.customer.favouriteJewellery.value;
    this.auth.setNavActive(false);
  }
}
