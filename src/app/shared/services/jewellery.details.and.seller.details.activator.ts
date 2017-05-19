import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router} from "@angular/router";
import {JewelleryService} from "./jewellery.service";
import {SellerService} from "./seller.service";
@Injectable()

export class JewelleryAndSellerDetailsActivator implements CanActivate {
  constructor(private jewellery: JewelleryService, private seller: SellerService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot) {
    console.log(route);
    let youCanRoute: boolean = false;
    if (route.component['name'] == 'JewelleryDetailsComponent') {
      youCanRoute = !!this.jewellery.getJewelleryById(Number(route.params['id']))
    } else if (route.component['name'] == 'SellerDetailsComponent') {
      youCanRoute = !!this.seller.getSellerById(Number(route.params['id']))
    }
    if (!youCanRoute) {
      this.router.navigate(['/home'])
    }
    return youCanRoute;
  }
}
