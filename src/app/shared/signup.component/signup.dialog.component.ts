import {Component} from "@angular/core";
import {MdDialogRef, MD_DIALOG_DATA} from '@angular/material';

@Component({
  templateUrl: './signup.dialog.template.html'
})

export class SignUpDialog {
  constructor(public dialogRef: MdDialogRef<SignUpDialog>) {
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
