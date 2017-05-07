const tempJewellery: JeweleryProduct[] = [
  {
    productName: "ring 1",
    price: "500$",
    sellerName: "sss",
    place: "aaa"
  },
  {
    productName: "ring 1",
    price: "500$",
    sellerName: "sss",
    place: "aaa"
  },
  {
    productName: "ring 1",
    price: "500$",
    place: "aaa",
    sellerName: "sss"
  },
  {
    productName: "ring",
    price: "500$",
    sellerName: "bbb",
    place: "aaa"
  },
  {
    productName: "ring",
    price: "600$",
    sellerName: "aaa",
    place: "aaa"
  },
  {
    productName: "ring",
    price: "200",
    sellerName: "aaa",
    place: "aaa"
  }
];

import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {SearchForm, JeweleryProduct} from "./index";
@Injectable()

export class JewelleryService {
  private searchTerms = new Subject<SearchForm>();
  searchTermsChanged = this.searchTerms.asObservable();

  getMostVisitedJewellery() {
    return tempJewellery;
  }

  getHotDeals() {
    return tempJewellery;
  }

  setSearchTerms(newSearchTerms: SearchForm) {
    this.searchTerms.next(newSearchTerms);
  }

  applySearchTerms(searchTerms: SearchForm, ...searchTerm: SearchForm[]): JeweleryProduct[] {
    let searchResult: JeweleryProduct[] = [];
    if (searchTerm.length === 1) {
      tempJewellery.map((item) => {
        if (item["" + searchTerm[0]].includes(searchTerms["" + searchTerm[0]])) {
          searchResult.push(item);
        }
      });
    }
    else if (searchTerm.length === 2) {
      tempJewellery.map((item) => {
        if (item["" + searchTerm[0]].includes(searchTerms["" + searchTerm[0]]) && item["" + searchTerm[1]].includes(searchTerms["" + searchTerm[1]])) {
          searchResult.push(item);
        }
      });
    }
    else if (searchTerm.length === 3) {
      tempJewellery.map((item) => {
        if (item["" + searchTerm[0]].includes(searchTerms["" + searchTerm[0]]) && item["" + searchTerm[1]].includes(searchTerms["" + searchTerm[1]]) && item["" + searchTerm[2]].includes(searchTerms["" + searchTerm[2]])) {
          searchResult.push(item);
        }
      });
    }
    console.log(searchResult);
    return searchResult;
  }

  searchJewellery(searchTerms: SearchForm): JeweleryProduct[] {
    let searchTermTitles = [];
    for (let property in searchTerms) {
      if (searchTerms.hasOwnProperty(property)) {
        searchTermTitles.push(property);
      }
    }
    return this.applySearchTerms(searchTerms, ...searchTermTitles);
  }
}




