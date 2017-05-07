import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";

import {JewelleryService, JeweleryProduct, SearchForm} from "../../shared/index";

@Component({
  selector: "jewellery-search-result",
  templateUrl: "app/jewellery/jewellerySearchResultComponent/jewellery.search.results.template..html"
})

export class JewellerySearchResultsComponent implements OnInit {
  searchResult: JeweleryProduct[];
  searchTerms: SearchForm;

  constructor(private route: ActivatedRoute, private jewellery: JewelleryService) {

  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      console.log(params);
      this.searchTerms = JSON.parse(params["terms"]);
      this.jewellery.setSearchTerms(this.searchTerms);
      this.searchResult = this.jewellery.searchJewellery(this.searchTerms);
    });
  }
}
