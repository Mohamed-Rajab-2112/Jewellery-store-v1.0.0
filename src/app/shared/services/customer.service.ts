import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Injectable} from "@angular/core";
import {JeweleryProduct} from "./../index";
import {User} from "./../index";
import {AuthService} from "./auth.service";

@Injectable()


export class CustomerService {
  favouriteJewellery = new BehaviorSubject(<JeweleryProduct[]>[]);

  constructor(private auth: AuthService) {

  }

  updateProfileData(values: any) {
    console.log(values);
    let currentUserData = <User>{};
    this.auth.user.subscribe((user) => {
      currentUserData = user;
      for (let property in values) {
        if (values.hasOwnProperty(property)) {
          currentUserData[`${property}`] = values[`${property}`]
        }
      }
    });
    this.auth.setUser(currentUserData);
  }

  checkItemAlreadyInFavourite(product: JeweleryProduct) {
    return ~this.favouriteJewellery.value.indexOf(product);
  }

  addProductToFavourite(product: JeweleryProduct) {
    !this.checkItemAlreadyInFavourite(product) && this.favouriteJewellery.value.push(product);
    this.favouriteJewellery.next(this.favouriteJewellery.value);
    console.log(this.favouriteJewellery);
  }

  removeProductToFavourite(product: JeweleryProduct) {
    this.checkItemAlreadyInFavourite(product) && this.favouriteJewellery.value.splice(this.favouriteJewellery.value.indexOf(product), 1);
    this.favouriteJewellery.next(this.favouriteJewellery.value);
    console.log(this.favouriteJewellery);
  }
}
