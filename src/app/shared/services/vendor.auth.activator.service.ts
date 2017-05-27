import {ActivatedRouteSnapshot, CanActivate, Router} from "@angular/router";
import {Injectable} from "@angular/core";

import {AuthService} from "../index";

@Injectable()
export class VendorProfileActivator implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {
  }

  canActivate(): boolean {
    let res: boolean = false;
    this.auth.user.subscribe((val) => {
        this.auth.isAuth.subscribe((isAuth) => {
          console.log(isAuth);
          res = isAuth && val.userType === 'Vendor';
        });
      },
      (err) => {
        console.log(err)
      },
      () => {

      });
    if (!res) {
      this.router.navigate(['/home']);
    }
    return res;
  }
}
