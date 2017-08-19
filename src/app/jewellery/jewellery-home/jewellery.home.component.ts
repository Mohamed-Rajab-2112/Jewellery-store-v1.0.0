import {Component, OnInit} from "@angular/core";
import {
  JewelleryService
} from "../../shared/services/jewellery.service";
import {AuthService} from "../../shared/services/auth.service";
import {Observable} from "rxjs/Rx";

import "rxjs/add/operator/map";

import {Utility} from "../../shared/services/utility.service";


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

  constructor(private Jewellery: JewelleryService, private auth: AuthService, private utility: Utility) {
  }

  ngOnInit() {
    this.mostVisited = this.Jewellery.getMostVisitedJewellery();
    this.deals = this.Jewellery.getHotDeals();
    this.translateValueLatestOffers = 0;
    this.translateValueMostVisited = 0;
    this.auth.setNavActive(false);
    this.utility.setNavBarBackgroundState(true);

    /*============== RXJS course training ===============*/

  //   let numbers = [1, 2, 3];
  //
  //   let source = Observable.create((x: any) => {
  //     x.next(5);
  //     x.complete()
  //   });
  //
  //   source.flatMap((e: any) => this.sourceFunction()).subscribe(
  //     (value: number) => {
  //       console.log(value);
  //     },
  //     (e: any) => {
  //       console.log(e)
  //     },
  //     () => {
  //       console.log('complete')
  //     });
  //
  //   /*===================================================*/
  // }
  //
  // sourceFunction() {
  //   return Observable.create((x: any) => {
  //     x.next(10);
  //     x.complete()
  //   });
  }

  arrow(type: string, direction: string) {
    if (type == 'latestOffers' && direction == 'left') {
      if (this.translateValueLatestOffers >= -200 && this.translateValueLatestOffers != 0) {
        this.translateValueLatestOffers += 16.67;
      }
    } else if (type == 'latestOffers' && direction == 'right') {
      if (this.translateValueLatestOffers <= 0 && this.translateValueLatestOffers != -200) {
        this.translateValueLatestOffers -= 16.67;
      }
    } else if (type == 'mostVisited' && direction == 'left') {
      if (this.translateValueMostVisited >= -200 && this.translateValueMostVisited != 0) {
        this.translateValueMostVisited += 16.67;
      }
    } else if (type == 'mostVisited' && direction == 'right') {
      if (this.translateValueMostVisited <= 0 && this.translateValueMostVisited != -200) {
        this.translateValueMostVisited -= 16.67;
      }
    }

    console.log(this.translateValueLatestOffers)
  }

}
