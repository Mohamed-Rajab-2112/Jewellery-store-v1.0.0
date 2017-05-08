"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var tempJewellery = [
    {
        id: 1,
        productName: "ring 1",
        price: "500$",
        sellerName: "sss",
        place: "aaa"
    },
    {
        id: 2,
        productName: "ring 1",
        price: "500$",
        sellerName: "sss",
        place: "aaa"
    },
    {
        id: 3,
        productName: "ring 1",
        price: "500$",
        place: "aaa",
        sellerName: "sss"
    },
    {
        id: 4,
        productName: "ring",
        price: "500$",
        sellerName: "bbb",
        place: "aaa"
    },
    {
        id: 5,
        productName: "ring",
        price: "600$",
        sellerName: "aaa",
        place: "aaa"
    },
    {
        id: 6,
        productName: "ring",
        price: "200",
        sellerName: "aaa",
        place: "aaa"
    }
];
var core_1 = require("@angular/core");
var Subject_1 = require("rxjs/Subject");
var JewelleryService = (function () {
    function JewelleryService() {
        this.searchTerms = new Subject_1.Subject();
        this.searchTermsChanged = this.searchTerms.asObservable();
    }
    JewelleryService.prototype.getMostVisitedJewellery = function () {
        return tempJewellery;
    };
    JewelleryService.prototype.getHotDeals = function () {
        return tempJewellery;
    };
    JewelleryService.prototype.setSearchTerms = function (newSearchTerms) {
        this.searchTerms.next(newSearchTerms);
    };
    JewelleryService.prototype.applySearchTerms = function (searchTerms) {
        var searchTerm = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            searchTerm[_i - 1] = arguments[_i];
        }
        var searchResult = [];
        if (searchTerm.length === 1) {
            tempJewellery.map(function (item) {
                if (item["" + searchTerm[0]].includes(searchTerms["" + searchTerm[0]])) {
                    searchResult.push(item);
                }
            });
        }
        else if (searchTerm.length === 2) {
            tempJewellery.map(function (item) {
                if (item["" + searchTerm[0]].includes(searchTerms["" + searchTerm[0]]) && item["" + searchTerm[1]].includes(searchTerms["" + searchTerm[1]])) {
                    searchResult.push(item);
                }
            });
        }
        else if (searchTerm.length === 3) {
            tempJewellery.map(function (item) {
                if (item["" + searchTerm[0]].includes(searchTerms["" + searchTerm[0]]) && item["" + searchTerm[1]].includes(searchTerms["" + searchTerm[1]]) && item["" + searchTerm[2]].includes(searchTerms["" + searchTerm[2]])) {
                    searchResult.push(item);
                }
            });
        }
        console.log(searchResult);
        return searchResult;
    };
    JewelleryService.prototype.searchJewellery = function (searchTerms) {
        var searchTermTitles = [];
        for (var property in searchTerms) {
            if (searchTerms.hasOwnProperty(property)) {
                searchTermTitles.push(property);
            }
        }
        return this.applySearchTerms.apply(this, [searchTerms].concat(searchTermTitles));
    };
    return JewelleryService;
}());
JewelleryService = __decorate([
    core_1.Injectable()
], JewelleryService);
exports.JewelleryService = JewelleryService;
//# sourceMappingURL=jewellery.service.js.map