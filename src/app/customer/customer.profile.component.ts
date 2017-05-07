import {Component} from "@angular/core";
@Component({
  selector: 'user-profile',
  template: `
    <h2>user profile</h2>
  `
})

export class CustomerProfileComponent {
  constructor() {
    console.log('usre profile component');
  }
}
