import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

import {JewelleryService} from "../services/jewellery.service";
import {AuthService} from "../services/auth.service";
import {Customer} from "../models/Customer.model";

@Component({
  selector: "nav-component",
  templateUrl: "./nav.component.template.html",
  styleUrls: ["./nav.component.styles.css"]
})

export class NavComponent implements OnInit {
  productName: string;
  sellerName: string;
  place: string;
  signInToggle: boolean;
  toggleLogInBtn: boolean;
  userName: string;
  userType: string;
  choosedUserType: string;
  userTypes: string[];

  constructor(private router: Router, private jewellery: JewelleryService, private auth: AuthService) {

  }

  searchProductAndPlace(values: any) {
    this.router.navigate([`/search/${JSON.stringify(values)}`]);
  }

  ngOnInit() {
    this.jewellery.searchTermsChanged.subscribe(value => {
      this.productName = value["productName"] === "undefined" ? "" : value["productName"];
      this.sellerName = value["sellerName"] === "undefined" ? "" : value["sellerName"];
      this.place = value["place"] === "undefined" ? "" : value["place"];
    });
    this.signInToggle = false;
    this.choosedUserType = '-Membership type-';
    this.userTypes = this.auth.getUserTypes();
    this.auth.user.subscribe((value) => {
      console.log(value);
      // this.auth.actualUser = value;
      this.userName = value.name;
      this.userType = value.userType;
    });
  }

  logIn(values: any) {
    this.auth.logIn(values);
    this.toggleLogInBtn = this.auth.isAuth;
    this.signInToggle = false;
  }

  toggleSignInFormClass() {
    if (this.signInToggle) {
      return ['sign-in', 'show-sign-in']
    } else if (!this.signInToggle) {
      return ['sign-in', 'hide-sign-in']
    }
  }

  signUp(values: any) {
    values.signUpDate = new Date(Date.now()).toISOString();
    values.userType = this.choosedUserType;
    console.log(values);
    this.auth.signUp(values);
  }

  toggleTypeButton(type: string) {
    this.choosedUserType = type;
  }

  toggleSignInFlag() {
    this.signInToggle = !this.signInToggle;
  }

  setChoosedTypeButtonClass() {
    if (this.choosedUserType == 'Vendor') {
      return ['typeButtonSelected']
    }
    else if (this.choosedUserType == 'Customer') {
      return ['typeButtonSelected']
    } else {
      return ['typeButtonNotSelected']
    }
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
}
