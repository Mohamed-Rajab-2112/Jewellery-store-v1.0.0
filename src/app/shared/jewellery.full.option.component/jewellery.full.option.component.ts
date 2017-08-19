import {Component, Input, OnInit, OnChanges} from "@angular/core";
import {JeweleryProduct} from "../models/jewelleryProduct.model";
import {JewelleryService} from "../services/jewellery.service";
@Component({
  selector: 'jewellery-full-option',
  templateUrl: './jewellery.full.option.template.html',
  styleUrls: ['./jewellery.full.option.styles.css']
})

export class JewelleryFullOption implements OnInit, OnChanges {
  @Input() products: JeweleryProduct[];
  productsFiltered: JeweleryProduct[];
  viewList: JeweleryProduct[];
  page: number;
  pageSize: number;

  constructor(private jewellery: JewelleryService) {
  }

  ngOnInit() {
    this.pageSize = 10;
    this.page = 1;

    this.productsFiltered = this.products.slice();
    this.viewList = this.products.slice((this.page - 1) * this.pageSize, this.page * this.pageSize);
  }

  ngOnChanges() {
    this.productsFiltered = this.products.slice();
    this.viewList = this.products.slice((this.page - 1) * this.pageSize, this.page * this.pageSize);
  }

  applyPagination(pageNumber: number) {
    this.viewList = this.productsFiltered.slice((pageNumber - 1) * this.pageSize, pageNumber * this.pageSize);
  }

  applyFilterTerms(terms: any) {
    this.page = 1;
    this.productsFiltered = this.jewellery.applyFilterTerms(terms, this.products);
    this.viewList = this.productsFiltered.slice((this.page - 1) * this.pageSize, this.page * this.pageSize);
  }

  sortProducts(sortTerm: string) {
    this.jewellery.sortProducts(sortTerm, this.viewList);
  }

}
