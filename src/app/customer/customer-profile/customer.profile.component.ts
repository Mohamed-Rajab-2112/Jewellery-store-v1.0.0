import {Component, OnInit, OnDestroy} from "@angular/core";
import {AuthService, CustomerService, User} from "../../shared/index";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {JewelleryService} from "../../shared/services/jewellery.service";

@Component({
  selector: 'customer-profile',
  templateUrl: './customer.profile.template.html',
  styleUrls: ['./customer.profile.styles.css']
})

export class CustomerProfile implements OnInit, OnDestroy {
  currentCustomer: User;
  userSubscription: any;
  areas: string[];
  profileForm: FormGroup;
  areaControl: FormControl;
  nameControl: FormControl;
  filteredAreas: Observable<string[]>;

  constructor(private auth: AuthService, private customer: CustomerService, private jewellery: JewelleryService) {
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.areas = this.jewellery.getAreas();
    this.userSubscription = this.auth.user.subscribe((val) => {
      console.log(val);
      this.currentCustomer = <User>val;
    });

    this.areaControl = new FormControl(this.currentCustomer.area);
    this.nameControl = new FormControl(this.currentCustomer.name, [Validators.required]);

    this.profileForm = new FormGroup(
      {
        area: this.areaControl,
        name: this.nameControl
      }
    );

    this.filteredAreas = this.areaControl.valueChanges.startWith(null).map((val: string) => val ? this.filter(val, this.areas) : this.areas.slice());
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  filter(val: string, data: string[]): string[] {
    return data.filter((type) => new RegExp(`^${val}`, 'gi').test(type));
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
