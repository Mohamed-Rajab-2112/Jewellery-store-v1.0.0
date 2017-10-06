import {Component, OnInit, OnDestroy} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {JewelleryService} from "../../shared/services/jewellery.service";
import {Observable} from "rxjs";

@Component({
  selector: 'jewellery-search-form',
  templateUrl: './jewellery.search.form.template.html',
  styleUrls: ['./jewellery.search.form.styles.css']
})

export class JewellerySearchForm implements OnInit, OnDestroy {

  productName: string;
  sellerName: string;
  area: string;
  areas: string[];
  types: string[];
  searchTermsSubscription: any;
  filteredTypes: Observable<string[]>;
  filteredAreas: Observable<string[]>;
  searchForm: FormGroup;
  productNameControl: FormControl;
  areaControl: FormControl;
  toggleSearchFormClass: string[];
  toggleBackdrop: boolean;

  constructor(private router: Router, private jewellery: JewelleryService) {
  }

  ngOnInit() {
    this.types = this.jewellery.getProductTypes();
    this.areas = this.jewellery.getAreas();

    this.productNameControl = new FormControl(this.productName, [Validators.required]);
    this.areaControl = new FormControl(this.area, [Validators.required]);

    this.searchForm = new FormGroup({
      productName: this.productNameControl,
      area: this.areaControl
    });

    this.filteredTypes = this.productNameControl.valueChanges.startWith(null).map((val: string) => val ? this.filter(val, this.types) : this.types.slice());
    this.filteredAreas = this.areaControl.valueChanges.startWith(null).map((val: string) => val ? this.filter(val, this.areas) : this.areas.slice());

    this.searchTermsSubscription = this.jewellery.searchTermsChanged.subscribe(value => {
      this.productName = value["productName"] === "undefined" ? "" : value["productName"];
      this.sellerName = value["sellerName"] === "undefined" ? "" : value["sellerName"];
      this.area = value["area"] === "undefined" ? "" : value["area"];
    });

    this.toggleSearchFormClass = ['hidden-form'];
    this.toggleBackdrop = true;
  }

  ngOnDestroy() {
    this.searchTermsSubscription.unsubscribe();
  }

  filter(val: string, data: string[]): string[] {
    return data.filter((type) => new RegExp(`^${val}`, 'gi').test(type));
  }

  searchProductAndarea(values: any) {
    console.log(values);

    for (let property in values) {
      console.log(values[`${property}`]);
      if (values.hasOwnProperty(property) && values[`${property}`] == null) {
        delete values[`${property}`];
      }
    }

    this.router.navigate([`/search/${JSON.stringify(values)}`]);
    this.toggleSearchForm();
  }

  toggleSearchForm() {
    this.toggleSearchFormClass = String(this.toggleSearchFormClass) === String(['hidden-form']) ? ['shown-form'] : ['hidden-form'];

    this.toggleBackdrop = !this.toggleBackdrop;
  }
}
