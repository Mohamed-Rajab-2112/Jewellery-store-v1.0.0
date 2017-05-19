import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {AuthService} from "../services/auth.service";
@Component({
  selector: 'signin-signup',
  templateUrl: 'app/shared/signin.signup.component/signin.signup.template.html',
  styleUrls: ['app/shared/signin.signup.component/signin.signup.styles.css']
})

export class SinginSignUpComponent implements OnInit {
  @Output() signInToggleOutPut = new EventEmitter;
  @Input() signInToggleInput: boolean;
  userTypes: string[];
  signInToggle: boolean;
  choosedUserType: string;

  constructor(private auth: AuthService) {
  }

  ngOnInit() {
    this.signInToggle = true;
    this.userTypes = this.auth.getUserTypes();
  }

  logIn(values: any) {
    this.auth.logIn(values);
    this.signInToggle = false;
    this.signInToggleOutPut.emit(this.signInToggle)
  }

  signUp(values: any) {
    values.signUpDate = new Date(Date.now()).toISOString();
    values.userType = this.choosedUserType;
    console.log(values);
    this.signInToggle = false;
    this.signInToggleOutPut.emit(this.signInToggle);
    this.auth.signUp(values);
  }

  toggleTypeButton(type: string) {
    this.choosedUserType = type;
  }

  toggleSignInFlag() {
    this.signInToggle = !this.signInToggleInput;
    console.log(this.signInToggle);
    this.signInToggleOutPut.emit(this.signInToggle)
  }

  setChoosedTypeButtonClass() {
    if (this.choosedUserType == 'Vendor') {
      return ['typeButtonSelected']
    }
    else if (this.choosedUserType == 'Customer') {
      return ['typeButtonSelected']
    } else {
      return ['typeButtonNotSelected']
    }
  }
}
