import {ActivatedRouteSnapshot, CanActivate} from "@angular/router";
import {Injectable} from "@angular/core";

import {AuthService} from "../index";

@Injectable()
export class CustomerProfileActivator implements CanActivate {
  constructor(private auth: AuthService) {
  }

  canActivate(): boolean {
    return this.auth.isAuth.value && this.auth.user.value.userType === 'Customer';

  }
}
