import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

import {JewelleryService} from "../services/jewellery.service";
import {AuthService} from "../services/auth.service";
import {User} from "../models/User.model";
import {CustomerService} from "../services/customer.service";

@Component({
  selector: "nav-component",
  templateUrl: "./nav.component.template.html",
  styleUrls: ["./nav.component.styles.css"]
})

export class NavComponent implements OnInit {
  productName: string;
  sellerName: string;
  area: string;
  signInToggle: boolean;
  toggleLogInBtn: boolean;
  userName: string;
  userType: string;
  favouriteCount: number;
  showFavourite: boolean;
  activeLable: string;

  constructor(private router: Router, private jewellery: JewelleryService, private auth: AuthService, private customer: CustomerService) {

  }

  searchProductAndarea(values: any) {
    this.router.navigate([`/search/${JSON.stringify(values)}`]);
  }

  ngOnInit() {
    this.jewellery.searchTermsChanged.subscribe(value => {
      this.productName = value["productName"] === "undefined" ? "" : value["productName"];
      this.sellerName = value["sellerName"] === "undefined" ? "" : value["sellerName"];
      this.area = value["area"] === "undefined" ? "" : value["area"];
    });

    this.auth.user.subscribe((value) => {
      console.log(value);
      this.userName = value.name;
      this.userType = value.userType;
      this.showFavourite = value.userType == 'Customer';

    });

    this.auth.isAuth.subscribe((isAuth) => {
      this.toggleLogInBtn = !isAuth;
    });

    this.customer.favouriteJewellery.subscribe((value) => {
      this.favouriteCount = value.length;
    })
  }

  setSignInToggle(toggle: boolean) {
    console.log(toggle);
    this.signInToggle = toggle;
  }

  toggleSignInFormClass() {
    if (this.signInToggle) {
      return ['sign-in', 'show-sign-in']
    } else if (!this.signInToggle) {
      return ['sign-in', 'hide-sign-in']
    }
  }

  toggleSignInFlag() {
    this.signInToggle = !this.signInToggle;
  }

  routeToProfile() {
    this.auth.user.subscribe((user) => {
      if (user.userType === 'Customer') {
        this.router.navigate(['customer/customer-profile'])
      } else if (user.userType === 'Vendor') {
        this.router.navigate(['seller/vendor-profile'])
      }
    });
  }

  routeToFavouriteJewellery() {
    this.router.navigate((['customer/customer-favourite-jewellery']))
  }

  showLable(activeLable: string) {
    this.activeLable = activeLable;
  }

  hideLable() {
    this.activeLable = null;
  }

  toggleLable(activeLable: string) {
    if (this.activeLable == activeLable) {
      return ['show-lable']
    } else {
      return []
    }
  }


}
