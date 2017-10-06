import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";

import {JewelleryService, JeweleryProduct, SearchForm} from "./../../shared/index";

@Component({
  selector: "jewellery-search-result",
  templateUrl: "./jewellery.search.results.template.html",
  styleUrls: ["./jewellery.search.results.styles.css"]
})

export class JewellerySearchResultsComponent implements OnInit {
  searchResult: JeweleryProduct[];
  searchTerms: SearchForm;

  constructor(private route: ActivatedRoute, private jewellery: JewelleryService) {
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.route.params.forEach((params: Params) => {
      console.log(params);
      this.searchTerms = JSON.parse(params["terms"]);
      console.log(this.searchTerms);
      this.jewellery.setSearchTerms(this.searchTerms);
      this.searchResult = this.jewellery.searchJewellery(this.searchTerms);
    });
  }
}
