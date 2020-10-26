import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PeriodicElement } from '../visitor-list/visitor-list.component';
@Component({
  selector: 'app-add-visitor-dialog',
  templateUrl: './add-visitor-dialog.component.html',
  styleUrls: ['./add-visitor-dialog.component.scss']
})
export class AddVisitorDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<AddVisitorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PeriodicElement) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
