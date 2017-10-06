import {Component, Input} from "@angular/core";
import {CustomerService} from "../../shared/services/customer.service";
import {JeweleryProduct} from "../../shared/models/jewelleryProduct.model";

@Component({
  selector: 'jewellery-favourite-button',
  templateUrl: './jewellery.favourite.button.template.html',
  styleUrls: ['./jewellery.favourite.button.styles.css']
})

export class JewelleryFavouriteBtn {
  @Input() product: JeweleryProduct;
  @Input() isFavourite: boolean;

  constructor(private customer: CustomerService) {

  }

  addProductToFavourite(product: JeweleryProduct) {
    this.customer.addProductToFavourite(product);
    this.isFavourite = true;
  }

  removeProductToFavourite(product: JeweleryProduct) {
    this.customer.removeProductToFavourite(product);
    this.isFavourite = true;
  }
}
