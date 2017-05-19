import {ActivatedRouteSnapshot, CanActivate, Router} from "@angular/router";
import {JewelleryService} from "../index";
import {Injectable} from "@angular/core";

@Injectable()
export class JewelleryListActivator implements CanActivate {
  constructor(private jewellery: JewelleryService, private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot) {
    let allow: boolean = !!~this.jewellery.getProductTypes().indexOf(route.params['type']);
    if (!allow) {
      this.router.navigate(['/home']);
    }
    return allow;
  }

}
