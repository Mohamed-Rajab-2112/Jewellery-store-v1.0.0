import {CanActivate} from "@angular/router";
import {Injectable} from "@angular/core";

import {AuthService} from "../index";

@Injectable()
export class UserProfileActivator implements CanActivate {
  constructor(private auth: AuthService) {
  }

  canActivate() {
    let res;
    this.auth.user.subscribe((val) => {
      res = this.auth.isAuth && val.userType === 'Customer';
    });
    return res;
  }
}
