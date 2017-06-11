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

  constructor(private router: Router) {

  }

  logIn(values: any) {
    this.isAuth.next(true);
    this.setUser({
      id: 22222,
      name: values.userName,
      userType: 'Vendor',
      verified: true,
      telephone1: 1232135,
      telephone2: 5841354,
      email: 'asdasdaasd@asdasd.com',
      area: 'AinShams/Cairo'
    });
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

  signUp(signUpData: any) {
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
