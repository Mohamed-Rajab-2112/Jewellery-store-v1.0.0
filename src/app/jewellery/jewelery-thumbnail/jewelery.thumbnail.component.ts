import {Component, Input, OnChanges, OnInit} from "@angular/core";
import {CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {JeweleryProduct} from "../../shared/models/jewelleryProduct.model";
import {AuthService} from "../../shared/services/auth.service";
import {audit} from "rxjs/operator/audit";
import {JewelleryService} from "../../shared/services/jewellery.service";
@Component({
  selector: "jewellery-thumbnail",
  templateUrl: "app/jewellery/jewelery-thumbnail/jewelery.thumbnail.template.html",
  styleUrls: ["app/jewellery/jewelery-thumbnail/jewellery.thumbnail.styles.css"]
})

export class JewelleryThumbnailComponent implements OnInit {
  @Input() products: JeweleryProduct[];
  currentRoute: string;
  showEditDelBtn: boolean;
  showFavouriteBtn: boolean;
  currentEditproduct: JeweleryProduct;

  constructor(private jewellery: JewelleryService, private auth: AuthService, private router: Router) {

  }

  routingToJewelleryDetails(productType: string, productId: number) {
    this.router.navigate(['/home/', productType, productId])
  }

  ngOnInit() {
    this.showEditDelBtn = false;
    this.auth.setCurrentRoute();
    this.auth.currentRoute.subscribe((routeUrl) => {
      if (routeUrl == '/seller/vendor-profile') {
        this.showEditDelBtn = true;
      }
    });
    this.auth.user.subscribe((user) => {
        this.showFavouriteBtn = user.userType == 'Customer';
      },
      (err) => {
        this.showFavouriteBtn = false;
        console.log(err);
      })
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
}
