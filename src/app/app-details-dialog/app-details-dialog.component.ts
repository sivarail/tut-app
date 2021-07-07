import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
// import { AppDetailsComponent } from '../app-details/app-details.component';
// import { PeriodicElement } from '../object';

@Component({
  selector: 'app-app-details-dialog',
  templateUrl: './app-details-dialog.component.html',
  styleUrls: ['./app-details-dialog.component.css']
})
export class AppDetailsDialogComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(AppDetailsDialog);
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
    // this.dialog.open(AppDetailsDialog);
  // }
}
