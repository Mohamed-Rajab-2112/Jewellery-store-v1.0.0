const tempJewellery: JeweleryProduct[] = [
  {
    id: 1,
    productName: "ring 1",
    type: "ring",
    price: "500$",
    sellerName: "sss",
    sellerId: 22222,
    place: "aaa",
    imageUrl: "/app/images/01.png"
  },
  {
    id: 2,
    productName: "ring 1",
    type: "ring",
    price: "500$",
    sellerName: "sss",
    sellerId: 22222,
    place: "aaa",
    imageUrl: "/app/images/02.png"
  },
  {
    id: 3,
    productName: "ring 1",
    type: "ring",
    price: "500$",
    place: "aaa",
    sellerName: 'bbb',
    sellerId: 33333,
    imageUrl: "/app/images/03.png"
  },
  {
    id: 4,
    productName: "ring",
    type: "ring",
    price: "500$",
    sellerName: "bbb",
    sellerId: 33333,
    place: "aaa",
    imageUrl: "/app/images/04.png"
  },
  {
    id: 5,
    productName: "ring",
    type: "ring",
    price: "600$",
    sellerName: "aaa",
    sellerId: 11111,
    place: "aaa",
    imageUrl: "/app/images/05.png"
  },
  {
    id: 6,
    productName: "ring",
    type: "ring",
    price: "200",
    sellerName: "aaa",
    sellerId: 11111,
    place: "aaa",
    imageUrl: "/app/images/06.png"
  }
];

import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {SearchForm, JeweleryProduct} from "../index";
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

  getJewelleryById(id: number): JeweleryProduct {
    let choosedJewellery;
    tempJewellery.map((item) => {
      item.id === id ? choosedJewellery = item : true;
    });
    return choosedJewellery;
  }

  getJewelleryByType(type: string): JeweleryProduct[] {
    return tempJewellery.filter((item) => {
      return item.type === type;
    })
  }

  setSearchTerms(newSearchTerms: SearchForm) {
    this.searchTerms.next(newSearchTerms);
  }

  getJewelleryBySellerId(id: number): JeweleryProduct[] {
    return tempJewellery.filter((item) => {
      return item.sellerId === id;
    })
  }

  private applySearchTerms(searchTerms: SearchForm, ...searchTerm: SearchForm[]): JeweleryProduct[] {
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




