import {Component, OnInit} from "@angular/core";
import {AuthService} from "./shared/services/auth.service";
@Component({
  selector: "jewellery-store-app",
  template: `
    <nav-component></nav-component>
    <router-outlet></router-outlet>
    <footer-component></footer-component>
  `
})

export class JewelleryStoreAppComponent implements OnInit {
  constructor(private auth: AuthService) {
  }

  ngOnInit() {
    this.auth.setVerifiedVendorsAlertState(true);
  }
}
