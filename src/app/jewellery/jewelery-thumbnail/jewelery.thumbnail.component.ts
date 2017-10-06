import {Component, Input, OnInit, OnDestroy} from "@angular/core";
import {Router} from "@angular/router";
import {JeweleryProduct} from "../../shared/models/jewelleryProduct.model";
import {AuthService} from "../../shared/services/auth.service";
import {JewelleryService} from "../../shared/services/jewellery.service";
import {CustomerService} from "../../shared/services/customer.service";
import {SellerService} from "../../shared/services/seller.service";
import {MdDialog} from '@angular/material';
import {DialogComponent} from '../../shared/DialogComponent/dialog.component';
import {Observable} from "rxjs";

@Component({
  selector: "jewellery-thumbnail",
  templateUrl: "./jewelery.thumbnail.template.html",
  styleUrls: ["./jewellery.thumbnail.styles.css"]
})

export class JewelleryThumbnailComponent implements OnInit, OnDestroy {
  @Input() products: JeweleryProduct[];
  currentRouteSubscription: any;
  userSubscription: any;
  currentRoute: string;
  showEditDelBtn: boolean;
  currentEditproduct: JeweleryProduct;
  @Input() translate: number;
  dialogRef: any;
  showFavouriteBtn: boolean;

  constructor(private seller: SellerService, private jewellery: JewelleryService, private auth: AuthService, private router: Router, private customer: CustomerService, private dialog: MdDialog) {

  }

  routingToJewelleryDetails(productType: string, productId: number) {
    this.router.navigate(['/home/', productType, productId])
  }

  ngOnInit() {
    console.log(this.products);
    this.showEditDelBtn = false;
    this.currentRouteSubscription = this.auth.currentRoute.subscribe((routeUrl) => {
      console.log(routeUrl);
      if (routeUrl == '/seller/vendor-profile') {
        this.showEditDelBtn = true;
      }
      console.log(this.showEditDelBtn)
    });
    this.auth.setCurrentRoute();
    this.userSubscription = this.auth.user.subscribe((user) => {
      this.showFavouriteBtn = user.userType == 'Customer';
    });
    this.products.map((product: any) => {
      product.sellerName = this.seller.getSellerById(product.sellerId).name;
    })
  }

  ngOnDestroy() {
    this.currentRouteSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }

  favouriteBtnStatus(product: JeweleryProduct) {
    return this.customer.checkItemAlreadyInFavourite(product);
  }

  deleteProduct(product: JeweleryProduct) {
    this.openDialog({title: 'Delete product', body: `Do you want to delete this ${product.type}?`});
    this.dialogRef.afterClosed().subscribe((result: boolean) => {
      console.log(result);
      result && this.jewellery.deleteProduct(product);
    });
  }

  openDialog(dialogContent: any) {
    this.dialogRef = this.dialog.open(DialogComponent, {
        data: dialogContent,
        width: '500px',
        height: 'auto',
      }
    );
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

  applyTranslate() {
    return {'transform': 'translate(' + this.translate + '%)'}
  }

  editProduct(product: any) {
    this.seller.setCurrentlyEditProduct(product);
  }

}




