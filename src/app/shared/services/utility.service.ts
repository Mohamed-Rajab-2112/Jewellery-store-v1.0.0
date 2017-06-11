import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs/RX";
@Injectable()
export class Utility {
  navBarBackgroundState = new BehaviorSubject<boolean>(true);

  constructor() {
  }

  setNavBarBackgroundState(value: boolean) {
    this.navBarBackgroundState.next(value)
  }

}
