import {Component, Input} from "@angular/core";
import {User, SellerService, AuthService} from "../../shared/index";

@Component({
  selector: 'seller-profile-edit',
  templateUrl: 'app/seller/seller-profile-edit/seller.profile.edit.template.html'
})

export class SellerProfileEditComponent {
  @Input() user: User;
  logoUrl: string;

  constructor(private seller: SellerService, private auth: AuthService) {
  }

  updateProfile(newProfileDetails: any) {
    if (this.logoUrl) {
      newProfileDetails.logoUrl = this.logoUrl;
    }
    this.seller.postNewSellerDetails(newProfileDetails)
  }

  getLogo(logoFile: any) {
    let logo = logoFile.target.files[0];
    this.logoUrl = logo.name;
  }

  saveNewPassword(newPassword: string) {
    console.log(newPassword);
    this.auth.saveNewPassword(newPassword);
  }

  deleteAccount() {
    this.auth.deleteAccount();
  }
}
