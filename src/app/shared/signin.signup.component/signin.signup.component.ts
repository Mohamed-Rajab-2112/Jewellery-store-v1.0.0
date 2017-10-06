import {Component, EventEmitter, Input, OnInit, Output, ChangeDetectionStrategy} from "@angular/core";
import {AuthService} from "../services/auth.service";
import {RegisteredIcons} from "../services/registered.icons.service"

@Component({
  selector: 'signin-signup',
  templateUrl: 'app/shared/signin.signup.component/signin.signup.template.html',
  styleUrls: ['app/shared/signin.signup.component/signin.signup.styles.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SinginSignUpComponent implements OnInit {
  @Output() signInToggleOutPut = new EventEmitter;
  @Input() signInToggleInput: boolean;
  @Input() tabNum: number;
  userTypes: string[];
  signInToggle: boolean;
  choosedUserType: string;
  signUpNameStyle: string;
  logInNameStyle: string;

  constructor(private auth: AuthService, private rgisteredIcons: RegisteredIcons) {
  }

  ngOnInit() {
    this.signInToggle = true;
    this.userTypes = this.auth.getUserTypes();
    this.rgisteredIcons.addRegisteredSvgIcons();
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

  toggleSignInFlag() {
    this.signInToggle = !this.signInToggleInput;
    console.log(this.signInToggle);
    this.signInToggleOutPut.emit(this.signInToggle)
  }

  toggleTab(tabNum: number) {
    if (tabNum == 0) {
      this.signUpNameStyle = "{'font-weight': 100}"
    }
    else if (tabNum == 1) {
      this.logInNameStyle = "{'font-weight': 100}"
    }
    this.tabNum = tabNum;
  }

  selectTab() {
    return {'transform': 'translate(' + this.tabNum * -50 + '%)'};
  }

  translateArrow() {
    if (this.tabNum == 0) {
      return {'left': '80px'};
    }
    else if (this.tabNum == 1) {
      return {'left': '235px'};
    }
  }

}
