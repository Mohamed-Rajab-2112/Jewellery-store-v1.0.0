import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {AuthService} from "../services/auth.service";
import {DomSanitizer} from '@angular/platform-browser';
import {MdIconRegistry} from '@angular/material';


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
  tabNum: number;

  constructor(private auth: AuthService, private iconRegistry: MdIconRegistry, private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.signInToggle = true;
    this.userTypes = this.auth.getUserTypes();
    this.iconRegistry.addSvgIcon('arrow', this.sanitizer.bypassSecurityTrustResourceUrl('app/assets/images/arrow.svg'))
    this.tabNum = 0;
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

  toggleTab(tabNum: number) {
    if (this.tabNum != tabNum) {
      this.tabNum = tabNum;
    }
  }

  selectTab() {
    console.log(this.tabNum);
    console.log('translate(' + this.tabNum * -50 + '%)');
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
