import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";
import { MatDialog } from "@angular/material/dialog";
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from "@angular/material/sort";
import { MatPaginator } from "@angular/material/paginator";


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
  { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
  { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
  { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
  { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
  { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
  { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
  { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
  { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
  { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  numbers = [];
  constructor() {
    for (let i = 0; i < 1000; i++){
      this.numbers.push(i)
    }
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }

  // constructor(public dialog: MatDialog) { }
  // openDialog() {
  //   let dialogRef = this.dialog.open(DialogExampleComponent, { data: { name: 'Vishwas' } });
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result : ${result}`);
  //   })
  // }

  // constructor(private snackBar: MatSnackBar) { }
  // openSnackBar(message, action) {
  //   let snackBarref = this.snackBar.open(message, action, { duration: 2000 });

  //   snackBarref.afterDismissed().subscribe(() => {
  //     console.log('The snackbar was dismissed');

  //   })

  //   snackBarref.onAction().subscribe(() => {
  //     console.log('The sanckbar action was triggered!');

  //   })
  // }
  // openCustomSnackBar() {
  //   this.snackBar.openFromComponent(CustomSnackBarComponent, { duration: 2000 }
  //   )
  // }

  minDate = new Date();
  maxDate = new Date(2020, 3, 5);

  dateFilter = date => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  }

  options: string[] = ['Angular', 'React', 'Vue'];
  objectOptions = [
    { name: 'Angular' },
    { name: 'Angular Material' },
    { name: 'React' },
    { name: 'Vue' },
  ];

  myControl = new FormControl();
  filteredOptions: Observable<string[]>;

  // ngOnInit() {
  //   this.filteredOptions = this.myControl.valueChanges.pipe(
  //     startWith(''),
  //     map(value => this._filter(value))
  //   )
  // }

  private _filter(value: string): string[] {
    const filterValue = value.toLocaleLowerCase();
    return this.options.filter(option => option.toLocaleLowerCase().includes(filterValue))
  }

  slectedValue: string
  opened = false;
  title = 'my-app';
  notifications = 0;
  showSpinner = false;

  displayFn(subject) {
    return subject ? subject.name : undefined
  }

  logChange(index) {
    console.log(index);

  }

  log(state) {
    console.log(state);
  }

  loadData() {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false
    }, 5000)
  }
}


@Component({
  selector: 'custom-snackbar',
  template: `<span style='color:orange'>Custom Snackbar</span>`
})
export class CustomSnackBarComponent { }