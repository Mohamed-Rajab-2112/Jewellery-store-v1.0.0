import {Component, OnInit} from "@angular/core";
import {
  JewelleryService
} from "../../shared/services/jewellery.service";

@Component({
  selector: "jewellery-home",
  templateUrl: "./jewellery.home.component.html",
  styleUrls: ["./jewellery.home.component.css"]
})

export class JewelleryHomeComponent implements OnInit {
  mostVisited: any[];
  deals: any[];
  translateValueLatestOffers: number;
  translateValueMostVisited: number;

  constructor(private Jewellery: JewelleryService) {
  }

  ngOnInit() {
    this.mostVisited = this.Jewellery.getMostVisitedJewellery();
    this.deals = this.Jewellery.getHotDeals();
    this.translateValueLatestOffers = -100;
    this.translateValueMostVisited = -100;
  }

  arrow(type: string, direction: string) {
    if (type == 'latestOffers' && direction == 'left') {
      if (this.translateValueLatestOffers >= -200 && this.translateValueLatestOffers != 0) {
        this.translateValueLatestOffers += 100;
      }
    } else if (type == 'latestOffers' && direction == 'right') {
      if (this.translateValueLatestOffers <= 0 && this.translateValueLatestOffers != -200) {
        this.translateValueLatestOffers -= 100;
      }
    } else if (type == 'mostVisited' && direction == 'left') {
      if (this.translateValueMostVisited >= -200 && this.translateValueMostVisited != 0) {
        this.translateValueMostVisited += 100;
      }
    } else if (type == 'mostVisited' && direction == 'right') {
      if (this.translateValueMostVisited <= 0 && this.translateValueMostVisited != -200) {
        this.translateValueMostVisited -= 100;
      }
    }
    console.log(this.translateValueLatestOffers)
  }
}
