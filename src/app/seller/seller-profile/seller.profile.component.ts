import {Component, OnInit} from "@angular/core";
import {MdDialog} from '@angular/material';
import {SellerAddComponent} from '../seller-add-product/seller.add.product.component'


import {
  JeweleryProduct,
  JewelleryService,
  AuthService
} from "../../shared/index";
import {User} from "../../shared/models/user.model";

@Component({
  selector: 'seller-profile',
  templateUrl: './seller.profile.template.html',
  styleUrls: ['./seller.profile.styles.css']
})

export class SellerProfileComponent implements OnInit {
  sellerProducts: JeweleryProduct[];
  user: User;
  // toggleAddProductForm: boolean;

  constructor(private jewellery: JewelleryService, private auth: AuthService, private dialog: MdDialog) {
  }

  ngOnInit() {
    this.auth.user.subscribe((val) => {
      this.user = <User>val;
      this.sellerProducts = this.jewellery.getJewelleryBySellerId(val.id);
    });
    // this.toggleAddProductForm = true;
  }

  openDialog() {
    let dialogRef = this.dialog.open(SellerAddComponent, {
        data: {},
        width: '500px',
        height: '500px',
        disableClose: true,
      }
    );
    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
    });
  }

  // addNewProduct(newProduct: any) {
  //   console.log(newProduct);
  //   this.sellerProducts.push(newProduct);
  // }

  // showAddProductForm() {
  //   this.toggleAddProductForm = !this.toggleAddProductForm;
  // }
}

