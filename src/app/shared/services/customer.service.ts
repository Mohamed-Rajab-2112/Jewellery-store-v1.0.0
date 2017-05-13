// import {Customer} from '../index'
import {Injectable} from "@angular/core";
import {AuthService} from "./auth.service";

// const Customers: Customer[] = [
//   {
//     name: 'asdaaa',
//     telephone1: 1546846454,
//     telephone2: 4687454678,
//     email: 'asdasdasddd@asdasd.com',
//     area: 'AinShams/Cairo'
//   },
//   {
//     name: 'asdaaa',
//     telephone1: 1546846454,
//     telephone2: 4687454678,
//     email: 'asdasdasddd@asdasd.com',
//     area: 'AinShams/Cairo'
//   },
//   {
//     name: 'asdaaa',
//     telephone1: 1546846454,
//     telephone2: 4687454678,
//     email: 'asdasdasddd@asdasd.com',
//     area: 'AinShams/Cairo'
//   },
//   {
//     name: 'asdaaa',
//     telephone1: 1546846454,
//     telephone2: 4687454678,
//     email: 'asdasdasddd@asdasd.com',
//     area: 'AinShams/Cairo'
//   }
// ];
@Injectable()
export class CustomerService {
  constructor(private auth: AuthService) {
  }

  updateProfileData(values: any) {
    console.log(values);
    let currentUserData = {};
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
}
