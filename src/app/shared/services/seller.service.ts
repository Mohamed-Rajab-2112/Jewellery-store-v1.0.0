import {Injectable} from "@angular/core";
const TEMPSELLERS: User[] = [
  {
    id: 22222,
    name: 'trtryrtyrty',
    telephone1: 2587413598,
    telephone2: 2015845799,
    userType: 'Vendor',
    verified: true,
    address: 'ydffhjkhfsdjfhksdfsdf',
    email: 'asdasdasd.asdasd.com',
    area: 'عين شمس, القاهره',
    imageUrl: 'app/images/log01.jpg'
  },
  {
    id: 33333,
    name: 'trtryrtyrty',
    telephone1: 2587413598,
    email: 'asdasdasd.asdasd.com',
    userType: 'Vendor',
    address: 'ydffhjkhfsdjfhksdfsdf',
    area: 'عين شمس, القاهره',
    imageUrl: 'app/images/log02.png'
  },
  {
    id: 11111,
    name: 'trtryrtyrty',
    telephone1: 2587413598,
    email: 'asdasdasd.asdasd.com',
    address: 'ydffhjkhfsdjfhksdfsdf',
    userType: 'Vendor',
    verified: true,
    area: 'عين شمس, القاهره',
    imageUrl: 'app/images/log06.png'
  },
  {
    id: 444,
    name: 'trtryrtyrty',
    telephone1: 2587413598,
    telephone2: 2015845799,
    email: 'asdasdasd.asdasd.com',
    address: 'ydffhjkhfsdjfhksdfsdf',
    area: 'عين شمس, القاهره',
    userType: 'Vendor',
    imageUrl: 'app/images/log03.jpg'
  },
  {
    id: 555,
    name: 'trtryrtyrty',
    telephone1: 2587413598,
    telephone2: 2015845799,
    email: 'asdasdasd.asdasd.com',
    address: 'ydffhjkhfsdjfhksdfsdf',
    userType: 'Vendor',
    area: 'عين شمس, القاهره',
    imageUrl: 'app/images/log04.jpg'
  },
  {
    id: 666,
    name: 'trtryrtyrty',
    telephone1: 2587413598,
    telephone2: 2015845799,
    email: 'asdasdasd.asdasd.com',
    address: 'ydffhjkhfsdjfhksdfsdf',
    area: 'عين شمس, القاهره',
    userType: 'Vendor',
    imageUrl: 'app/images/log05.png'
  },
  {
    id: 33333,
    name: 'trtryrtyrty',
    telephone1: 2587413598,
    email: 'asdasdasd.asdasd.com',
    userType: 'Vendor',
    address: 'ydffhjkhfsdjfhksdfsdf',
    area: 'عين شمس, القاهره',
    imageUrl: 'app/images/log02.png'
  },
  {
    id: 11111,
    name: 'trtryrtyrty',
    telephone1: 2587413598,
    email: 'asdasdasd.asdasd.com',
    address: 'ydffhjkhfsdjfhksdfsdf',
    userType: 'Vendor',
    verified: true,
    area: 'مصر الجديده, القاهره',
    imageUrl: 'app/images/log06.png'
  },
  {
    id: 444,
    name: 'trtryrtyrty',
    telephone1: 2587413598,
    telephone2: 2015845799,
    email: 'asdasdasd.asdasd.com',
    address: 'ydffhjkhfsdjfhksdfsdf',
    area: 'مصر الجديده, القاهره',
    userType: 'Vendor',
    imageUrl: 'app/images/log03.jpg'
  },
  {
    id: 555,
    name: 'trtryrtyrty',
    telephone1: 2587413598,
    telephone2: 2015845799,
    email: 'asdasdasd.asdasd.com',
    address: 'ydffhjkhfsdjfhksdfsdf',
    userType: 'Vendor',
    area: 'مصر الجديده, القاهره',
    imageUrl: 'app/images/log04.jpg'
  },
  {
    id: 666,
    name: 'trtryrtyrty',
    telephone1: 2587413598,
    telephone2: 2015845799,
    email: 'asdasdasd.asdasd.com',
    address: 'ydffhjkhfsdjfhksdfsdf',
    area: 'مصر الجديده, القاهره',
    userType: 'Vendor',
    imageUrl: 'app/images/log05.png'
  },
  {
    id: 33333,
    name: 'trtryrtyrty',
    telephone1: 2587413598,
    email: 'asdasdasd.asdasd.com',
    userType: 'Vendor',
    address: 'ydffhjkhfsdjfhksdfsdf',
    area: 'مصر الجديده, القاهره',
    imageUrl: 'app/images/log02.png'
  },
  {
    id: 11111,
    name: 'trtryrtyrty',
    telephone1: 2587413598,
    email: 'asdasdasd.asdasd.com',
    address: 'ydffhjkhfsdjfhksdfsdf',
    userType: 'Vendor',
    verified: true,
    area: 'مصر الجديده, القاهره',
    imageUrl: 'app/images/log06.png'
  },
  {
    id: 444,
    name: 'trtryrtyrty',
    telephone1: 2587413598,
    telephone2: 2015845799,
    email: 'asdasdasd.asdasd.com',
    address: 'ydffhjkhfsdjfhksdfsdf',
    area: 'مصر الجديده, القاهره',
    userType: 'Vendor',
    imageUrl: 'app/images/log03.jpg'
  },
  {
    id: 555,
    name: 'trtryrtyrty',
    telephone1: 2587413598,
    telephone2: 2015845799,
    email: 'asdasdasd.asdasd.com',
    address: 'ydffhjkhfsdjfhksdfsdf',
    userType: 'Vendor',
    area: 'مصر الجديده, القاهره',
    imageUrl: 'app/images/log04.jpg'
  },
  {
    id: 666,
    name: 'trtryrtyrty',
    telephone1: 2587413598,
    telephone2: 2015845799,
    email: 'asdasdasd.asdasd.com',
    address: 'ydffhjkhfsdjfhksdfsdf',
    area: 'مصر الجديده, القاهره',
    userType: 'Vendor',
    imageUrl: 'app/images/log05.png'
  },
  {
    id: 33333,
    name: 'trtryrtyrty',
    telephone1: 2587413598,
    email: 'asdasdasd.asdasd.com',
    userType: 'Vendor',
    address: 'مصر الجديده, القاهره',
    area: 'مصر الجديده, القاهره',
    imageUrl: 'app/images/log02.png'
  },
  {
    id: 11111,
    name: 'trtryrtyrty',
    telephone1: 2587413598,
    email: 'asdasdasd.asdasd.com',
    address: 'مصر الجديده, القاهره',
    userType: 'Vendor',
    verified: true,
    area: 'مصر الجديده, القاهره',
    imageUrl: 'app/images/log06.png'
  },
  {
    id: 444,
    name: 'trtryrtyrty',
    telephone1: 2587413598,
    telephone2: 2015845799,
    email: 'asdasdasd.asdasd.com',
    address: 'مصر الجديده, القاهره',
    area: 'مصر الجديده, القاهره',
    userType: 'Vendor',
    imageUrl: 'app/images/log03.jpg'
  },
  {
    id: 555,
    name: 'trtryrtyrty',
    telephone1: 2587413598,
    telephone2: 2015845799,
    email: 'asdasdasd.asdasd.com',
    address: 'مصر الجديده, القاهره',
    userType: 'Vendor',
    area: 'مصر الجديده, القاهره',
    imageUrl: 'app/images/log04.jpg'
  },
  {
    id: 666,
    name: 'trtryrtyrty',
    telephone1: 2587413598,
    telephone2: 2015845799,
    email: 'asdasdasd.asdasd.com',
    address: 'ydffhjkhfsdjfhksdfsdf',
    area: 'aaaaaaa',
    userType: 'Vendor',
    imageUrl: 'app/images/log05.png'
  }
];

import {User} from '../../index'
import {AuthService} from "./auth.service";
import {JewelleryService} from "./jewellery.service";
import {Subject} from "rxjs/Subject";

@Injectable()

export class SellerService {
  sellerDetails: User;

  constructor(private auth: AuthService, private jewellery: JewelleryService) {
    this.auth.user.subscribe((user) => {
      this.sellerDetails = <User>user;
    })
  }

  getSeller(): User[] {
    return TEMPSELLERS;
  }

  getSellerById(id: number): User {
    return (TEMPSELLERS.filter((seller) => {
      return seller.id === id;
    }))[0];
  }

  postNewProduct(productDetails: any) {
    // productDetails.id = productDetails.id || this.sellerDetails.id + Date.now();
    productDetails.sellerId = this.sellerDetails.id;
    productDetails.sellerName = this.sellerDetails.name;

    /*this call for prototyping purposes*/
    productDetails.imageUrl.map((x: any) => {
      x.url = '/app/images/' + x.name;
    });
    this.jewellery.addProductLocally(productDetails);
    return true;
  }

  postNewSellerDetails(details: any) {
    return true;
  }
}
