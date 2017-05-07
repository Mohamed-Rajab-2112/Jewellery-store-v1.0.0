import {Component} from "@angular/core";
import {Router} from "@angular/router";

import {JewelleryService} from "../jewellery.service";

@Component({
  selector: "nav-component",
  templateUrl: "./nav.component.template.html",
  styleUrls: ["./nav.component.styles.css"]
})

export class NavComponent {
  productName: string;
  sellerName: string;
  place: string;
  searchRoutingParamMap: any;

  constructor(private router: Router, private jewellery: JewelleryService) {

  }

  searchProductAndPlace(values: any) {
    this.searchRoutingParamMap = {};
    this.router.navigate([`/search/${JSON.stringify(values)}`]);
  }

  ngOnInit() {
    this.jewellery.searchTermsChanged.subscribe(value => {
      this.productName = value["productName"] === "undefined" ? "" : value["productName"];
      this.sellerName = value["sellerName"] === "undefined" ? "" : value["sellerName"];
      this.place = value["place"] === "undefined" ? "" : value["place"];
    });
  }
}
