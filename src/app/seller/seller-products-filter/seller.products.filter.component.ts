import {Component, OnInit, Output, EventEmitter, Input, OnChanges} from "@angular/core";
import {JewelleryService} from "../../shared/services/jewellery.service";
import {JeweleryProduct} from "../../shared/models/jewelleryProduct.model";
@Component({
  selector: 'products-filter',
  templateUrl: 'app/seller/seller-products-filter/seller.products.filter.template.html',
  styleUrls: ['app/seller/seller-products-filter/seller.products.filter.styles.css']
})

export class SellerProductsFilter implements OnInit, OnChanges {
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
    this.priceSort = 'Lowest first';
    this.typesAndCounts.length > 1 ? this.assignType('All') : this.typesAndCounts.length && this.assignType(this.typesAndCounts[0].type);
    this.sortByPrice();
  }

  ngOnChanges() {
    this.typesAndCounts = this.jewellery.getCountJewelleryByType(this.products);
    if (this.typesAndCounts.length > 1) {
      this.assignType('All')
    } else {
      this.typesAndCounts.length && this.assignType(this.typesAndCounts[0].type);
    }
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
    if (this.type == type) {
      return 'selected-button';
    }
  }

  sortByPrice() {
    this.sortTerm.emit(this.priceSort);
  }
}
