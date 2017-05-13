import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {JewelleryService, JeweleryProduct} from "../../shared/index";

@Component({
  selector: "jeweller-details",
  templateUrl: "app/jewellery/jewellery-details/jewellery.details.template.html"
})

export class JewelleryDetailsComponent implements OnInit {
  jewelleryDetails: JeweleryProduct;

  constructor(private jewellery: JewelleryService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.jewelleryDetails = this.jewellery.getJewelleryById(Number(params["id"]));
      console.log(this.jewelleryDetails);
    });
  }
}
