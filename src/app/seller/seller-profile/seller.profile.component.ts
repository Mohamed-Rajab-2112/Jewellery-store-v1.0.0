import {Component, OnInit, OnDestroy} from "@angular/core";
import {MdDialog} from '@angular/material';
import {SellerAddComponent} from '../seller-add-product/seller.add.product.component'


import {
  JeweleryProduct,
  JewelleryService,
  AuthService
} from "../../shared/index";
import {User} from "../../shared/models/user.model";
import {SellerService} from "../../shared/services/seller.service";

@Component({
  selector: 'seller-profile',
  templateUrl: './seller.profile.template.html',
  styleUrls: ['./seller.profile.styles.css']
})

export class SellerProfileComponent implements OnInit, OnDestroy {
  sellerProducts: JeweleryProduct[];
  user: User;
  // toggleAddProductForm: boolean;
  userSubscription: any;
  editDialogSubscription: any;

  constructor(private seller: SellerService, private jewellery: JewelleryService, private auth: AuthService, private dialog: MdDialog) {
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.userSubscription = this.auth.user.subscribe((val) => {
      console.log('have user');
      this.user = <User>val;
      this.sellerProducts = this.jewellery.getJewelleryBySellerId(val.id);
    });
    this.editDialogSubscription = this.seller.currentlyEditProduct.subscribe((value) => {
      console.log('will open the dialog');
      this.openDialog(value)
    });
    // this.toggleAddProductForm = true;
  }

  ngOnDestroy() {
    this.editDialogSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }

  openDialog(data: any) {
    let dialogRef = this.dialog.open(SellerAddComponent, {
        data: data,
        width: '500px',
        height: 'auto',
        disableClose: true
      }
    );
  }
}

