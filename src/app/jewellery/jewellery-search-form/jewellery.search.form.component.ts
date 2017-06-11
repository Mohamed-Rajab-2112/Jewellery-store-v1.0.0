import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {JewelleryService} from "../../shared/services/jewellery.service";
@Component({
  selector: 'jewellery-search-form',
  templateUrl: './jewellery.search.form.template.html',
  styleUrls: ['./jewellery.search.form.styles.css']
})

export class JewellerySearchForm implements OnInit {

  productName: string;
  sellerName: string;
  area: string;

  constructor(private router: Router, private jewellery: JewelleryService) {
  }

  ngOnInit() {
    this.jewellery.searchTermsChanged.subscribe(value => {
      this.productName = value["productName"] === "undefined" ? "" : value["productName"];
      this.sellerName = value["sellerName"] === "undefined" ? "" : value["sellerName"];
      this.area = value["area"] === "undefined" ? "" : value["area"];
    });
  }

  searchProductAndarea(values: any) {
    this.router.navigate([`/search/${JSON.stringify(values)}`]);
  }
}
