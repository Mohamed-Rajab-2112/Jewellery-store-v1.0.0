import {Component, OnInit, Output, EventEmitter, Input} from "@angular/core";
import {JewelleryService} from "../../shared/services/jewellery.service";
import {JeweleryProduct} from "../../shared/models/jewelleryProduct.model";
@Component({
  selector: 'products-filter',
  templateUrl: 'app/seller/seller-products-filter/seller.products.filter.template.html',
  styleUrls: ['app/seller/seller-products-filter/seller.products.filter.styles.css']
})

export class SellerProductsFilter implements OnInit {
  @Output() filterTerms = new EventEmitter;
  @Output() sortTerm = new EventEmitter;
  @Input() products: JeweleryProduct[];
  typesAndCounts: any[];
  goldDegrees: string[];
  selectedDegree: string;
  type: string;
  priceSort: string;

  constructor(private jewellery: JewelleryService) {
  }

  ngOnInit() {
    this.goldDegrees = this.jewellery.getGoldDegree();
    this.selectedDegree = 'All';
    this.typesAndCounts = this.jewellery.getCountJewelleryByType(this.products);
    // this.jewellery.getProductTypes().map((type) => {
    //
    //   this.typesAndCounts.push({
    //     type: type,
    //     count: this.jewellery.getCountJewelleryByType(this.jewellery.getProductTypes(), this.products)
    //   })
    // });
    // this.typesAndCounts = this.jewellery.getProductTypes();
    this.priceSort = 'Lowest first';
    this.type = 'All';
    this.sortByPrice();
  }

  filterByTerms() {
    let terms: any = {
      type: this.type || 'All',
      goldDegree: this.selectedDegree
    };
    this.filterTerms.emit(terms);
    this.sortByPrice();
  }

  assignType(type: string) {
    this.type = type;
    this.filterByTerms();
  }

  applySelectedBtnClass(type: string) {
    console.log(type);
    console.log(this.type);
    if (this.type == type) {
      return 'selected-button';
    }
  }

  sortByPrice() {
    this.sortTerm.emit(this.priceSort);
  }
}
