import {Component, OnInit} from "@angular/core";
import {
  JewelleryService
} from "../../shared/jewellery.service";

@Component({
  selector: "jewellery-home",
  templateUrl: "app/jewellery/jewelleryHomeComponent/jewellery.home.component.html",
  styleUrls: ["app/jewellery/jewelleryHomeComponent/jewellery.home.component.css"]
})

export class JewelleryHomeComponent implements OnInit {
  mostVisited: any[];
  deals: any[];

  constructor(private Jewellery: JewelleryService) {
  }

  ngOnInit() {
    this.mostVisited = this.Jewellery.getMostVisitedJewellery();
    this.deals = this.Jewellery.getHotDeals();
  }
}
