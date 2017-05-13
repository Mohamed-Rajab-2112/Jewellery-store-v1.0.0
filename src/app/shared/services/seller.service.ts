import {Injectable} from "@angular/core";
const TEMPSELLERS: Seller[] = [
  {
    id: 22222,
    name: 'trtryrtyrty',
    telNumber1: 2587413598,
    telNumber2: 2015845799,
    address: 'ydffhjkhfsdjfhksdfsdf',
    area: 'asdasdaadadaaa',
    imageUrl: 'app/images/log01.jpg'
  },
  {
    id: 33333,
    name: 'trtryrtyrty',
    telNumber1: 2587413598,
    address: 'ydffhjkhfsdjfhksdfsdf',
    area: 'asdasdaadadaaa',
    imageUrl: 'app/images/log02.png'
  },
  {
    id: 11111,
    name: 'trtryrtyrty',
    telNumber1: 2587413598,
    address: 'ydffhjkhfsdjfhksdfsdf',
    area: 'asdasdaadadaaa',
    imageUrl: 'app/images/log06.png'
  },
  {
    id: 444,
    name: 'trtryrtyrty',
    telNumber1: 2587413598,
    telNumber2: 2015845799,
    address: 'ydffhjkhfsdjfhksdfsdf',
    area: 'asdasdaadadaaa',
    imageUrl: 'app/images/log03.jpg'
  },
  {
    id: 555,
    name: 'trtryrtyrty',
    telNumber1: 2587413598,
    telNumber2: 2015845799,
    address: 'ydffhjkhfsdjfhksdfsdf',
    area: 'asdasdaadadaaa',
    imageUrl: 'app/images/log04.jpg'
  },
  {
    id: 666,
    name: 'trtryrtyrty',
    telNumber1: 2587413598,
    telNumber2: 2015845799,
    address: 'ydffhjkhfsdjfhksdfsdf',
    area: 'asdasdaadadaaa',
    imageUrl: 'app/images/log05.png'
  }
];

import {Seller} from '../../index'

@Injectable()

export class SellerService {
  getSeller(): Seller[] {
    return TEMPSELLERS;
  }

  getSellerById(id: number): Seller {
    return (TEMPSELLERS.filter((seller) => {
      return seller.id === id;
    }))[0];
  }
}
