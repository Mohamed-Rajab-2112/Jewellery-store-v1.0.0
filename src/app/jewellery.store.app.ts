import {Component} from "@angular/core";
@Component({
  selector: "jewellery-store-app",
  template: `
    <nav-component></nav-component>
    <router-outlet></router-outlet>
    <footer-component></footer-component>
  `
})

export class JewelleryStoreAppComponent {
}
