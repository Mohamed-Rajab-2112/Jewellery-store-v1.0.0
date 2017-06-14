import {Component, OnInit, ChangeDetectionStrategy, DoCheck} from "@angular/core";
import {Router} from "@angular/router";

import {JewelleryService} from "../services/jewellery.service";
import {AuthService} from "../services/auth.service";
import {CustomerService} from "../services/customer.service";
import {Utility} from "../services/utility.service";

@Component({
  selector: "nav-component",
  templateUrl: "./nav.component.template.html",
  styleUrls: ["./nav.component.styles.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class NavComponent implements OnInit {

  signInToggle: boolean;
  toggleLogInBtn: boolean;
  userName: string;
  userType: string;
  favouriteCount: number;
  showFavourite: boolean;
  activeLable: string;
  tabNum: number;
  currentActiveItem: string;
  activeClass: string[];
  showBackground: boolean;

  constructor(private router: Router, private jewellery: JewelleryService, private auth: AuthService, private customer: CustomerService, private utility: Utility) {

  }

  ngOnInit() {

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
    });

    this.utility.navBarBackgroundState.subscribe((navBarBackgroundState) => {
      console.log('will hide');
      console.log(navBarBackgroundState);
      this.showBackground = navBarBackgroundState;
      console.log(this.showBackground)
    });

    console.log(this.showBackground)

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

  toggleSignInFlag(tabNum: number) {
    this.signInToggle = !this.signInToggle;
    this.tabNum = tabNum;
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
    }
    if (activeLable == this.currentActiveItem) {
      return ['show-lable']
    }
    else {
      return []
    }
  }

  setCurrentActiveNavItem(item: string) {
    this.currentActiveItem = item;

    this.auth.navIsActive.subscribe((navIsActive) => {
      if (item == this.currentActiveItem && navIsActive) {
        this.activeClass = ['active']
      }
      else {
        this.activeClass = []
      }
    });
    this.auth.setNavActive(true);
  }

  toggleActiveItem(ownItem: string) {
    if (ownItem == this.currentActiveItem) {
      return this.activeClass;
    }
  }
}
