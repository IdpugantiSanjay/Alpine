import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-enter-container-name-popup',
  templateUrl: './enter-container-name-popup.component.html',
  styleUrls: ['./enter-container-name-popup.component.css']
})
export class EnterContainerNamePopupComponent implements OnInit {
  containerName: string;

  constructor(public dialogRef: MatDialogRef<EnterContainerNamePopupComponent>) {}

  ngOnInit() {}

  onOkButtonClick() {
    if (this.containerName) this.dialogRef.close(this.containerName);
  }

  onCancelButtonClick() {
    this.dialogRef.close();
  }
}
