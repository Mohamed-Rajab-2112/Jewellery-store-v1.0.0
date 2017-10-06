import {Component, OnInit, OnDestroy} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {JewelleryService, JeweleryProduct} from "../../shared/index";
import {AuthService} from "../../shared/services/auth.service";
import {CustomerService} from "../../shared/services/customer.service";
import {SellerService} from "../../shared/services/seller.service";
import {RegisteredIcons} from "../../shared/services/registered.icons.service";

@Component({
  selector: "jeweller-details",
  templateUrl: "./jewellery.details.template.html",
  styleUrls: ["./jewellery.details.styles.css"]
})

export class JewelleryDetailsComponent implements OnInit, OnDestroy {
  jewelleryDetails: JeweleryProduct;
  selectedImage: any;
  userSubscription: any;
  showFavouriteBtn: boolean;

  constructor(private jewellery: JewelleryService, private route: ActivatedRoute, private auth: AuthService, private customer: CustomerService, private seller: SellerService, private rgisteredIcons: RegisteredIcons) {
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.route.params.forEach((params: Params) => {
      this.jewelleryDetails = this.jewellery.getJewelleryById(Number(params["id"]));
      this.jewelleryDetails.sellerDetails = this.seller.getSellerById(this.jewelleryDetails.sellerId);
      console.log(this.jewelleryDetails);
    });
    this.selectedImage = this.jewelleryDetails.imageUrl[0];

    this.userSubscription = this.auth.user.subscribe((user) => {
      this.showFavouriteBtn = user.userType == 'Customer';
    });
    this.rgisteredIcons.addRegisteredSvgIcons();
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  favouriteBtnStatus(product: JeweleryProduct) {
    return this.customer.checkItemAlreadyInFavourite(product);
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
