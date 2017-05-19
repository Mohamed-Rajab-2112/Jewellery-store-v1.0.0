import {Component, Input, OnInit, Compiler, Output, EventEmitter} from "@angular/core";

import {JewelleryService} from "../../shared/index";
import {SellerService} from "../../shared/services/seller.service";
import {JeweleryProduct} from "../../shared/models/jewelleryProduct.model";
import {DomSanitizer} from "@angular/platform-browser";

const numberOfImagesToUpload = 3;

@Component({
  selector: 'add-product',
  templateUrl: 'app/seller/seller-add-product/seller.add.product.template.html',
  styleUrls: ['app/seller/seller-add-product/seller.add.product.styles.css']
})

export class SellerAddComponent implements OnInit {
  @Input() product: any;
  @Output() newProduct = new EventEmitter();
  productTypes: string[];
  goldDegrees: string[];
  imageUrlValid: boolean;
  imagesFilesList: any[] = [];
  editMode: boolean;
  productOldValue: any;

  constructor(private jewellery: JewelleryService, private seller: SellerService, private sanitizer: DomSanitizer, private _compiler: Compiler) {
  }

  ngOnInit() {
    this._compiler.clearCache();
    console.log(this.product);
    this.productOldValue = JSON.stringify(this.product);
    console.log(this.productOldValue);
    this.product = JSON.parse(this.productOldValue);
    console.log(this.product);

    this.imageUrlValid = false;
    if (this.product.imageUrl) {
      this.imagesFilesList = this.product.imageUrl;
      this.editMode = true;
    }

    this.product.type = this.product.type || '-Choose Product Type-';
    this.product.goldDegree = this.product.goldDegree || '-Choose Gold Degree-';
    this.productTypes = this.jewellery.getProductTypes();
    this.goldDegrees = this.jewellery.getGoldDegree();
  }

  deleteImage(image: any) {
    this.imagesFilesList.splice(this.imagesFilesList.indexOf(image), 1);
    (<HTMLInputElement>document.getElementById('imagesInput')).value = "";
  }

  publishProduct(productDetails: any) {
    productDetails.imageUrl = this.imagesFilesList;
    this.product.id ? productDetails.id = this.product.id : true;
    this.imageUrlValid = !!productDetails.imageUrl.length;
    if (this.imageUrlValid) {
      productDetails.id = productDetails.id || this.seller.sellerDetails.id + Date.now();
      this.seller.postNewProduct(productDetails);
      this.newProduct.emit(productDetails)

    }
    console.log(productDetails);
  }

  getImageUrl(value: any) {
    let _selectedImages = value.target.files;
    console.log(_selectedImages);
    for (let image in _selectedImages) {
      if (_selectedImages.hasOwnProperty(image)) {
        _selectedImages[`${image}`].url = URL.createObjectURL(_selectedImages[`${image}`]);
        _selectedImages[`${image}`].url = this.sanitizer.bypassSecurityTrustResourceUrl(_selectedImages[`${image}`].url);
        this.imagesFilesList.push({
          name: _selectedImages[`${image}`].name,
          url: _selectedImages[`${image}`].url
        })
      }
      this.imageUrlValid = !!this.imagesFilesList.length;
    }
  }
}
