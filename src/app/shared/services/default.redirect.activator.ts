import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
@Injectable()
export class DefaultRedirectActivator implements CanActivate {
  constructor(private router: Router) {

  }

  canActivate() {
    this.router.navigate(['/home']);
    return false;
  }
}
