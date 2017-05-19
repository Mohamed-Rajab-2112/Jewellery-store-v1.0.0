import {Component, OnInit, Output, EventEmitter} from "@angular/core";
import {JewelleryService} from "../../shared/services/jewellery.service";
@Component({
  selector: 'products-filter',
  templateUrl: 'app/seller/seller-products-filter/seller.products.filter.template.html'
})

export class SellerProductsFilter implements OnInit {
  @Output() filterTerms = new EventEmitter;
  @Output() sortTerm = new EventEmitter;
  types: string[];
  goldDegrees: string[];
  selectedDegree: string;
  type: string;
  priceSort: string;

  constructor(private jewellery: JewelleryService) {
  }

  ngOnInit() {
    console.log(this.goldDegrees);
    this.goldDegrees = this.jewellery.getGoldDegree();
    console.log(this.goldDegrees);
    this.selectedDegree = 'All';
    this.types = this.jewellery.getProductTypes();
    this.priceSort = 'Lowest first';
    this.sortByPrice()
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
    this.filterByTerms()
  }

  sortByPrice() {
    this.sortTerm.emit(this.priceSort);
  }
}
