import {Component} from '@angular/core';
@Component({
  selector: 'jewellery-list',
  template: `
    <h2>Jewellery list</h2>
  `
})

export class JewelleryListComponent {
  constructor() {
    console.log('Jewellery list');
  }
}
