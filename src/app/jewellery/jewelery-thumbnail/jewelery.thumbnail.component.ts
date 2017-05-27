import {Component, Input, OnChanges, OnInit} from "@angular/core";
import {CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {JeweleryProduct} from "../../shared/models/jewelleryProduct.model";
import {AuthService} from "../../shared/services/auth.service";
import {audit} from "rxjs/operator/audit";
import {JewelleryService} from "../../shared/services/jewellery.service";
import {CustomerService} from "../../shared/services/customer.service";
@Component({
  selector: "jewellery-thumbnail",
  templateUrl: "app/jewellery/jewelery-thumbnail/jewelery.thumbnail.template.html",
  styleUrls: ["app/jewellery/jewelery-thumbnail/jewellery.thumbnail.styles.css"]
})

export class JewelleryThumbnailComponent implements OnInit {
  @Input() products: JeweleryProduct[];
  currentRoute: string;
  showEditDelBtn: boolean;
  currentEditproduct: JeweleryProduct;

  constructor(private jewellery: JewelleryService, private auth: AuthService, private router: Router, private customer: CustomerService) {

  }

  routingToJewelleryDetails(productType: string, productId: number) {
    this.router.navigate(['/home/', productType, productId])
  }

  ngOnInit() {
    console.log(this.products);
    this.showEditDelBtn = false;
    this.auth.setCurrentRoute();
    this.auth.currentRoute.subscribe((routeUrl) => {
      if (routeUrl == '/seller/vendor-profile') {
        this.showEditDelBtn = true;
      }
    });
  }

  showFavouriteBtn(product: JeweleryProduct) {
    let result: boolean = false;
    this.auth.user.subscribe((user) => {
      result = user.userType == 'Customer' && !this.customer.checkItemAlreadyInFavourite(product);
    });

    return result;
  }

  deleteProduct(product: JeweleryProduct) {
    this.jewellery.deleteProduct(product);
    if (confirm('are you sure to delete?')) {
      this.products = this.products.filter((x) => {
        return x.id !== product.id;
      });
    }
  }

  editProduct(product: JeweleryProduct) {
    if (product == this.currentEditproduct) {
      this.currentEditproduct = null;
    } else {
      this.currentEditproduct = product;
    }
  }

  showEditForm(product: JeweleryProduct) {
    return product == this.currentEditproduct
  }

  applyNewPricesForVendor(newPrice: number) {
    this.products.forEach((product) => {
      product.price += newPrice;
    })
  }

  closeEditMode(publishDone: boolean) {
    if (publishDone) {
      this.currentEditproduct = null;
    }
  }
}
