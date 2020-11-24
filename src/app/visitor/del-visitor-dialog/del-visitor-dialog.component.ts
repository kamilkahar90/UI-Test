import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PeriodicElement } from '../visitor-list/visitor-list.component';

@Component({
  selector: 'app-del-visitor-dialog',
  templateUrl: './del-visitor-dialog.component.html',
  styleUrls: ['./del-visitor-dialog.component.scss']
})
export class DelVisitorDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DelVisitorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PeriodicElement) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
