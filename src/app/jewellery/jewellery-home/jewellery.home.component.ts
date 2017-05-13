import {Component, OnInit} from "@angular/core";
import {
  JewelleryService
} from "../../shared/services/jewellery.service";

@Component({
  selector: "jewellery-home",
  templateUrl: "app/jewellery/jewellery-home/jewellery.home.component.html",
  styleUrls: ["app/jewellery/jewellery-home/jewellery.home.component.css"]
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
