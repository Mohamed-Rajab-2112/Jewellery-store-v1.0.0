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


  filteredStates: any;


  constructor(private Jewellery: JewelleryService, private auth: AuthService, private utility: Utility) {
  }

  ngOnInit() {
    this.mostVisited = this.Jewellery.getMostVisitedJewellery();
    this.deals = this.Jewellery.getHotDeals();
    this.translateValueLatestOffers = -100;
    this.translateValueMostVisited = -100;
    this.auth.setNavActive(false);
    this.utility.setNavBarBackgroundState(true);

    /*============== RXJS course training ===============*/
    // let numbers = [1, 2, 3];
    // let source = Observable.create((value: any) => {
    //   let index = 0;
    //   let produceValue = () => {
    //     value.next(numbers[index++]);
    //     if (index < numbers.length) {
    //       setTimeout(produceValue, 2000);
    //     } else {
    //       value.complete();
    //     }
    //   };
    //
    //   produceValue();
    // }).map((n: number) => {
    //   return n * 2;
    // }).filter((n: number) => {
    //   return n > 4
    // });
    //
    // source.subscribe(
    //   (value: number) => {
    //     console.log(value);
    //   },
    //   (e: any) => {
    //     console.log(e)
    //   },
    //   () => {
    //     console.log('complete')
    //   });
    /*===================================================*/
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
