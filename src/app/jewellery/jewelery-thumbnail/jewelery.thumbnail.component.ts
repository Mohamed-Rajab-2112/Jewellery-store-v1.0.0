import {Component, Input, OnInit, Output, EventEmitter, Inject} from "@angular/core";
import {Router} from "@angular/router";
import {JeweleryProduct} from "../../shared/models/jewelleryProduct.model";
import {AuthService} from "../../shared/services/auth.service";
import {JewelleryService} from "../../shared/services/jewellery.service";
import {CustomerService} from "../../shared/services/customer.service";
import {MdDialog} from '@angular/material';
// import {SellerAddComponent} from '../../seller/index'

import {MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import {SellerService} from "../../shared/services/seller.service";
import {DomSanitizer} from "@angular/platform-browser";


@Component({
  selector: "jewellery-thumbnail",
  templateUrl: "./jewelery.thumbnail.template.html",
  styleUrls: ["./jewellery.thumbnail.styles.css"]
})

export class JewelleryThumbnailComponent implements OnInit {
  @Input() products: JeweleryProduct[];
  currentRoute: string;
  showEditDelBtn: boolean;
  currentEditproduct: JeweleryProduct;
  @Input() translate: number;

  constructor(private jewellery: JewelleryService, private auth: AuthService, private router: Router, private customer: CustomerService, private dialog: MdDialog) {

  }

  routingToJewelleryDetails(productType: string, productId: number) {
    this.router.navigate(['/home/', productType, productId])
  }

  ngOnInit() {
    console.log(this.products);
    this.showEditDelBtn = false;
    this.auth.currentRoute.subscribe((routeUrl) => {
      console.log(routeUrl);
      if (routeUrl == '/seller/vendor-profile') {
        this.showEditDelBtn = true;
      }
      console.log(this.showEditDelBtn)
    });
    this.auth.setCurrentRoute();
    console.log(this.showEditDelBtn)
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

  // editProduct(product: JeweleryProduct) {
  //   if (product == this.currentEditproduct) {
  //     this.currentEditproduct = null;
  //   } else {
  //     this.currentEditproduct = product;
  //   }
  // }

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

  editProduct() {
  //   let dialogRef = this.dialog.open(SellerAddComponent, {
  //       data: {},
  //       width: '500px',
  //       height: '500px'
  //     }
  //   );
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(result)
  //   });

  }

}


// class SellerAddComponent implements OnInit {
//   // @Input() product: any;
//   @Output() newProduct = new EventEmitter();
//   @Output() newPrice = new EventEmitter();
//   @Output() publishDone = new EventEmitter();
//   productTypes: string[];
//   goldDegrees: string[];
//   imageUrlValid: boolean;
//   imagesFilesList: any[] = [];
//   editMode: boolean;
//   productOldValue: any;
//   oldPrice: number;
//
//   constructor(private jewellery: JewelleryService, private seller: SellerService, private sanitizer: DomSanitizer, public dialogRef: MdDialogRef<SellerAddComponent>, @Inject(MD_DIALOG_DATA) public product: any) {
//   }
//
//   ngOnInit() {
//     console.log(this.product);
//     this.productTypes = this.jewellery.getProductTypes();
//     this.goldDegrees = this.jewellery.getGoldDegree();
//     console.log(this.productTypes);
//     console.log(this.goldDegrees);
//     this.oldPrice = this.product.price || '';
//     this.productOldValue = JSON.stringify(this.product);
//     console.log(this.productOldValue);
//     this.product = JSON.parse(this.productOldValue);
//     console.log(this.product);
//
//     this.imageUrlValid = false;
//     if (this.product.imageUrl) {
//       this.imagesFilesList = this.product.imageUrl;
//       this.editMode = true;
//     }
//
//     // this.product.type = this.product.type || '-Choose Product Type-';
//     // this.product.goldDegree = this.product.goldDegree;
//   }
//
//   deleteImage(image: any) {
//     this.imagesFilesList.splice(this.imagesFilesList.indexOf(image), 1);
//     (<HTMLInputElement>document.getElementById('imagesInput')).value = "";
//   }
//
//   publishProduct(productDetails: any) {
//     if (productDetails.price != this.oldPrice && confirm('Do you want to change all other products prices by the same amount ?')) {
//       this.newPrice.emit(productDetails.price - this.oldPrice);
//     }
//     productDetails.imageUrl = this.imagesFilesList;
//     this.product.id && (productDetails.id = this.product.id);
//     this.imageUrlValid = !!productDetails.imageUrl.length;
//     if (this.imageUrlValid) {
//       productDetails.id = productDetails.id || this.seller.sellerDetails.id + Date.now();
//       this.seller.postNewProduct(productDetails);
//       this.newProduct.emit(productDetails);
//       this.publishDone.emit(true);
//     }
//     console.log(productDetails);
//   }
//
//   getImageUrl(value: any) {
//     let _selectedImages = value.target.files;
//     console.log(_selectedImages);
//     for (let image in _selectedImages) {
//       if (_selectedImages.hasOwnProperty(image)) {
//         _selectedImages[`${image}`].url = URL.createObjectURL(_selectedImages[`${image}`]);
//         _selectedImages[`${image}`].url = this.sanitizer.bypassSecurityTrustResourceUrl(_selectedImages[`${image}`].url);
//         this.imagesFilesList.push({
//           name: _selectedImages[`${image}`].name,
//           url: _selectedImages[`${image}`].url
//         })
//       }
//       this.imageUrlValid = !!this.imagesFilesList.length;
//     }
//   }
// }
