import {Component} from "@angular/core";
@Component({
  selector: 'sllers-list',
  template: `
    <h2>Sellers list</h2>
  `
})

export class SellersListComponent {
  constructor() {
    console.log('Sellers list');
  }
}
