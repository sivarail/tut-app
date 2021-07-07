import { AfterViewInit, Component, ViewChild, Inject } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { PeriodicElement } from '../object';
import { AppDetailsDialogComponent } from '../app-details-dialog/app-details-dialog.component';
/**
* @title Table with pagination

*/
@Component({
  selector: 'app-app-details',
  templateUrl: './app-details.component.html',
  styleUrls: ['./app-details.component.sass'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class AppDetailsComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  expandedElement: PeriodicElement | undefined;
  // expandedElement: PeriodicElement;
  clickedRows = new Set<PeriodicElement>();
  animal!: string;
  // dataSource = ELEMENT_DATA;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(public dialog: MatDialog) {}

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AppDetailsDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    // this.dialog.open(AppDetailsDialog);
  }

  deleteRecord(element:PeriodicElement){
    console.log(element);
    for (let index = 0; index < ELEMENT_DATA.length; index++) {
      if(element.symbol == ELEMENT_DATA[index].symbol){
        ELEMENT_DATA.splice(index,1);
        this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
        // this.dataSource.filter((row) => {row.symbol != element.symbol});
        break;
      }
    }
  }
}

let ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];

// @Component({
//   selector: 'app-details-dialog',
//   templateUrl: 'app-details-dialog.html'
//   // styleUrls: ['./app-details.component.css']
// })
// export class AppDetailsDialog {

//   dialogForm!:PeriodicElement;

//   constructor(public dialogRef: MatDialogRef<AppDetailsDialog>,
//   @Inject(MAT_DIALOG_DATA) public data:any
//     ) { }
//     closeDialog():void {
//       this.dialogRef.close();
//     }
// }
