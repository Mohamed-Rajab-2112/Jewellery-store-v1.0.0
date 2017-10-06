import {Component, Inject, OnInit} from "@angular/core";
import {MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
// import {OnInit} from ''

@Component({
  templateUrl: './dialogTemplate.html',
  styleUrls: ['./dialogTemplate.css']
})

export class DialogComponent /*implements OnInit*/ {
  constructor(public dialogRef: MdDialogRef<DialogComponent>, @Inject(MD_DIALOG_DATA) public dialogContent: any) {
  }

  // ngOnInit() {
  //   console.log(this.dialogContent)
  // }
  closeDialog(result: boolean) {
    this.dialogRef.close(result);
  }
}
