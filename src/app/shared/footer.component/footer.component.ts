import {Component} from "@angular/core";
import {MdDialog} from "@angular/material";
import {SignUpDialog} from "../signup.component/signup.dialog.component";
@Component({
  selector: "footer-component",
  templateUrl: './footer.template.html',
  styleUrls: ['./footer.styles.css']
})

export class FooterComponent {
  dialogRef: any;
  constructor(private dialog:MdDialog) {

  }

  signupVendor() {
    this.dialogRef = this.dialog.open(SignUpDialog, {
      width: '500px'
    })
  }
}
