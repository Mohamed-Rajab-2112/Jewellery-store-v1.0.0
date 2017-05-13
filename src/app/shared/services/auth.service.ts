import {Injectable} from "@angular/core";
import {Customer} from "../models/Customer.model";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
const userTypes = ['Customer', 'Vendor'];
@Injectable()
export class AuthService {
  isAuth: boolean = false;
  user = new BehaviorSubject(<Customer>{});

  logIn(values: any) {
    this.isAuth = true;
    this.setUser({
      name: values.userName,
      userType: 'Vendor',
      telephone1: 1232135,
      telephone2: 5841354,
      email: 'asdasdaasd@asdasd.com',
      area: 'AinShams/Cairo'
    })
  }

  setUser(currentUserData: any) {
    this.user.next(currentUserData)
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
