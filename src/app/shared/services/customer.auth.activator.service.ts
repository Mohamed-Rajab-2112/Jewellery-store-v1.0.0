import {CanActivate, Router} from "@angular/router";
import {Injectable} from "@angular/core";

import {AuthService} from "../index";

@Injectable()
export class CustomerProfileActivator implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {
  }

  canActivate(): boolean {
    let res = this.auth.isAuth.value && this.auth.user.value.userType === 'Customer';
    if (!res) {
      this.router.navigate(['/home'])
    }
    return res;
  }
}
