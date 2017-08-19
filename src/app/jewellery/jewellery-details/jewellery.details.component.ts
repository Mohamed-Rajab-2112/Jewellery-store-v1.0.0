import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {JewelleryService, JeweleryProduct} from "../../shared/index";
import {AuthService} from "../../shared/services/auth.service";
import {CustomerService} from "../../shared/services/customer.service";
import {SellerService} from "../../shared/services/seller.service";

@Component({
  selector: "jeweller-details",
  templateUrl: "./jewellery.details.template.html",
  styleUrls: ["./jewellery.details.styles.css"]
})

export class JewelleryDetailsComponent implements OnInit {
  jewelleryDetails: JeweleryProduct;
  selectedImage: any;

  constructor(private jewellery: JewelleryService, private route: ActivatedRoute, private auth: AuthService, private customer: CustomerService, private seller: SellerService) {
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.jewelleryDetails = this.jewellery.getJewelleryById(Number(params["id"]));
      this.jewelleryDetails.sellerDetails = this.seller.getSellerById(this.jewelleryDetails.sellerId);
      console.log(this.jewelleryDetails);
    });
    this.selectedImage = this.jewelleryDetails.imageUrl[0]
  }

  showFavouriteBtn(product: JeweleryProduct) {
    let result: boolean = false;
    this.auth.user.subscribe((user) => {
      result = user.userType == 'Customer' && !this.customer.checkItemAlreadyInFavourite(product);
    });

    return result;
  }

  applySelectedImage(image: string) {
    this.selectedImage = image;
  }

  selectedImageClass(image: string) {
    if (image == this.selectedImage) {
      return 'selectedimage'
    }
  }
}
