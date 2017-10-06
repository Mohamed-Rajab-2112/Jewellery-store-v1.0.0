import {Component, OnInit} from "@angular/core";
import {JeweleryProduct} from "../../shared/models/jewelleryProduct.model";
import {CustomerService} from "../../shared/services/customer.service";
import {AuthService} from "../../shared/services/auth.service";
@Component({
  selector: 'jewellery-favourite',
  templateUrl: './customer-favourite-Jewellery-template.html',
  styleUrls: ['./customer-favourite-Jewellery-styles.css']
})

export class JewelleryFavouriteComponent implements OnInit {
  favouriteJewelleryList: JeweleryProduct[];
  userName: string;

  constructor(private customer: CustomerService, private auth: AuthService) {
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.favouriteJewelleryList = this.customer.favouriteJewellery.value;
    this.userName = this.auth.user.value.name;
  }
}
