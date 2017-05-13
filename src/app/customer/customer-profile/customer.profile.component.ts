import {Component, OnInit} from "@angular/core";
import {AuthService, CustomerService, Customer} from "../../shared/index";
@Component({
  'selector': 'customer-profile',
  'templateUrl': 'app/customer/customer-profile/customer.profile.template.html'
})

export class CustomerProfile implements OnInit {
  currentCustomer: Customer;

  constructor(private auth: AuthService, private customer: CustomerService) {
  }

  ngOnInit() {
    this.auth.user.subscribe((val) => {
      console.log(val);
      this.currentCustomer = <Customer>val;
    })
  }

  updateProfileData(values: any) {
    console.log(values);
    this.customer.updateProfileData(values);
  }

  saveNewPassword(newPassword: string) {
    console.log(newPassword);
    this.auth.saveNewPassword(newPassword);
  }

  deleteAccount() {
    this.auth.deleteAccount()
  }
}
