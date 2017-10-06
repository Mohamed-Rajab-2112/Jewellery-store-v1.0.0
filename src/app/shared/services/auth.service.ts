import {Injectable} from "@angular/core";
import {User} from "../models/User.model";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Subject} from "rxjs/Subject";
import {Router} from "@angular/router";
const userTypes = ['Customer', 'Vendor'];
@Injectable()
export class AuthService {
  isAuth = new BehaviorSubject(false);
  user = new BehaviorSubject(<User>{});
  currentRoute = new Subject<string>();
  navIsActive = new Subject<boolean>();
  verificationAlertState = new BehaviorSubject(<boolean>true);
  verifiedVendorsAlertState = new BehaviorSubject(<boolean>true);


  constructor(private router: Router) {

  }

  logIn(values: any) {
    this.isAuth.next(true);
    let user: User = {
      id: 22222,
      name: values.userName,
      userType: 'Customer',
      verified: true,
      telephone1: 1232135,
      telephone2: 5841354,
      email: 'asdasdaasd@asdasd.com',
      area: 'AinShams/Cairo',
      imageUrl: 'app/images/log05.png',
      address: 'ay habal'
    };
    this.setUser(user);
    if (!user.telephone1 || !user.address) {
      this.setVerificationAlertState(true);
    } else {
      this.setVerificationAlertState(false);
    }
  }

  setUser(currentUserData: User) {
    this.user.next(currentUserData);
  }

  setCurrentRoute() {
    this.currentRoute.next(this.router.routerState.snapshot.url);
  }

  setNavActive(value: boolean) {
    this.navIsActive.next(value);
  }

  setVerificationAlertState(value: boolean) {
    this.verificationAlertState.next(value);
  }

  setVerifiedVendorsAlertState(value: boolean) {
    this.verifiedVendorsAlertState.next(value);
  }

  signUp(signUpData: any) {
    console.log(signUpData);
    return true;
  }

  getUserTypes() {
    return userTypes;
  }

  saveNewPassword(newPassword: string) {
    return true;
  }

  deleteAccount() {
    return true;
  }
}
