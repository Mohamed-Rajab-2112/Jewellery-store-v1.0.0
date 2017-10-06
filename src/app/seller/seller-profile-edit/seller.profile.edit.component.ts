import {Component, Input, OnInit, OnDestroy} from "@angular/core";
import {User, SellerService, AuthService} from "../../shared/index";
import {DomSanitizer} from "@angular/platform-browser";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {JewelleryService} from "../../shared/services/jewellery.service";

@Component({
  selector: 'seller-profile-edit',
  templateUrl: './seller.profile.edit.template.html',
  styleUrls: ['./seller.profile.edit.styles.css']
})

export class SellerProfileEditComponent implements OnInit, OnDestroy {
  @Input() user: User;
  logoDetails: any = {};
  showVerificationAlert: boolean;
  verificationAlertStateSubscription: any;
  areas: string[];
  filteredAreas: any;
  addressForm: FormGroup;
  areaControl: FormControl;
  addressControl: FormControl;

  constructor(private jewellery: JewelleryService, private seller: SellerService, private auth: AuthService, private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    console.log(this.user);
    this.verificationAlertStateSubscription = this.auth.verificationAlertState.subscribe((state) => {
      this.showVerificationAlert = state;
      console.log(this.showVerificationAlert)
    });
    this.areas = this.jewellery.getAreas();
    this.areaControl = new FormControl(this.user.area);
    this.addressControl = new FormControl(this.user.address);
    this.filteredAreas = this.areaControl.valueChanges.startWith(null).map((val: string) => val ? this.filter(val, this.areas) : this.areas.slice());
    this.addressForm = new FormGroup({
      area: this.areaControl,
      address: this.addressControl
    })
  }

  ngOnDestroy() {
    this.verificationAlertStateSubscription.unsubscribe();
  }

  filter(val: string, data: string[]): string[] {
    return data.filter((type) => new RegExp(`^${val}`, 'gi').test(type));
  }


  updateProfile(newProfileDetails: any) {
    if (this.logoDetails.name) {
      newProfileDetails.logoUrl = this.logoDetails.name;
    }
    this.seller.postNewSellerDetails(newProfileDetails)
  }

  getLogo(logoFile: any) {
    let logo = logoFile.target.files[0];
    logo.url = URL.createObjectURL(logo);
    logo.url = this.sanitizer.bypassSecurityTrustResourceUrl(logo.url);
    this.logoDetails.name = logo.name;
    this.logoDetails.url = logo.url;
    console.log(this.logoDetails)
  }

  deleteLogo() {
    this.logoDetails = {};
    (<HTMLInputElement>document.getElementById('logo')).value = "";
  }

  verifyPhone(phones: any) {
    console.log(phones);
    this.seller.verifyPhone(phones);
  }

  verifyAddress(address: string) {
    console.log(address);
    this.seller.verifyAddress(address);
  }

  saveNewPassword(newPassword: string) {
    console.log(newPassword);
    this.auth.saveNewPassword(newPassword);
  }

  dismissVerificationAlert() {
    console.log('dismissed');
    this.auth.setVerificationAlertState(false)
  }

  deleteAccount() {
    this.auth.deleteAccount();
  }
}
