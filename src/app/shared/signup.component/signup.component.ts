import {Component, Output, EventEmitter, Input, OnInit} from "@angular/core";
import {AuthService} from "../services/auth.service";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {JewelleryService} from "../services/jewellery.service";

@Component({
  selector: 'signUp',
  templateUrl: './signup.template.html',
  styleUrls: ['./signup.styles.css']
})

export class SignUpComponent implements OnInit {
  @Output() signInToggleOutPut = new EventEmitter;
  @Output() closeDialog = new EventEmitter;
  @Input() userType: string;
  showNoAreaFound: boolean;
  areas: string[];
  filteredAreas: Observable<string[]>;
  signupForm: FormGroup;
  userName: FormControl;
  email: FormControl;
  area: FormControl;
  phoneNumber: FormControl;
  password: FormControl;
  password2: FormControl;

  constructor(private auth: AuthService, private jewellery: JewelleryService) {

  }

  ngOnInit() {
    this.userName = new FormControl('', Validators.required);
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.area = new FormControl('', Validators.required);
    this.phoneNumber = new FormControl('', Validators.required);
    /*dummy value for area and number of customer to skip signup for validation*/
    if (this.userType === 'Customer') {
      this.area = new FormControl('dummyValue', Validators.required);
      this.phoneNumber = new FormControl(111, Validators.required);
    }
    this.password = new FormControl('', Validators.required);
    this.password2 = new FormControl('', Validators.required);
    /*assign form controls to the form group*/
    this.signupForm = new FormGroup({
      userName: this.userName,
      email: this.email,
      area: this.area,
      phoneNumber: this.phoneNumber,
      password: this.password,
      password2: this.password2,
    });
    /*filter autocomplete values*/
    this.filteredAreas = this.area.valueChanges.startWith(null).map(val => val ? this.filterAreas(val) : this.areas.slice());

    this.areas = this.jewellery.getAreas()
  }

  filterAreas(val: string) {
    let filteredAreas = this.areas.filter((option) => {
      return option.toLowerCase().indexOf(val.toLowerCase()) === 0;
    });
    this.showNoAreaFound = !filteredAreas.length;

    return filteredAreas;
  }

  signUp(values: any) {
    values.signUpDate = new Date(Date.now()).toISOString();
    values.userType = this.userType;
    if (this.userType === 'Customer') {
      this.signInToggleOutPut.emit();
      delete values.area;
      delete values.phoneNumber;
    }
    delete values.password2;
    this.auth.signUp(values);
  }

  toggleSignInFlag() {
    this.signInToggleOutPut.emit();
  }

  closeInDialogCase() {
    this.closeDialog.emit();
  }
}
