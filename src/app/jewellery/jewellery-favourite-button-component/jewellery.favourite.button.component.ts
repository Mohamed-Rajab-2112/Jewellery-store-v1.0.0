import {Component, Input} from "@angular/core";
import {CustomerService} from "../../shared/services/customer.service";
import {JeweleryProduct} from "../../shared/models/jewelleryProduct.model";

@Component({
  selector: 'jewellery-favourite',
  templateUrl: 'app/jewellery/jewellery-favourite-button-component/jewellery.favourite.button.template.html'
})

export class JewelleryFavouriteBtn {
@Input() product: JeweleryProduct;
  constructor(private customer: CustomerService) {

  }

  addProductToFavourite(product: JeweleryProduct) {
    this.customer.addProductToFavourite(product)
  }
}
