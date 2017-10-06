import {Component, OnInit} from '@angular/core';
import {JewelleryService} from "../../shared/services/jewellery.service";
import {ActivatedRoute, Params} from "@angular/router";
import {JeweleryProduct} from "../../shared/models/jewelleryProduct.model";

@Component({
  selector: 'jewellery-list',
  templateUrl: './jewellery.list.template.html',
  styleUrls: ['./jewellery.list.styles.css']
})

export class JewelleryListComponent implements OnInit {
  jewelleryListing: JeweleryProduct[];

  constructor(private jewellery: JewelleryService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.route.params.forEach((params: Params) => {
      this.jewelleryListing = this.jewellery.getJewelleryByType(params['type']);
      console.log(this.jewelleryListing);
    })
  }
}
