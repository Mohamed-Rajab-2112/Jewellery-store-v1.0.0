import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {JewelleryService, JeweleryProduct} from "../../shared/index";
import {AuthService} from "../../shared/services/auth.service";
import {CustomerService} from "../../shared/services/customer.service";

@Component({
  selector: "jeweller-details",
  templateUrl: "app/jewellery/jewellery-details/jewellery.details.template.html"
})

export class JewelleryDetailsComponent implements OnInit {
  jewelleryDetails: JeweleryProduct;

  constructor(private jewellery: JewelleryService, private route: ActivatedRoute, private auth:AuthService, private customer:CustomerService) {
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.jewelleryDetails = this.jewellery.getJewelleryById(Number(params["id"]));
      console.log(this.jewelleryDetails);
    });
  }

  showFavouriteBtn(product: JeweleryProduct) {
    let result: boolean = false;
    this.auth.user.subscribe((user) => {
      result = user.userType == 'Customer' && !this.customer.checkItemAlreadyInFavourite(product);
    });

    return result;
  }
}
