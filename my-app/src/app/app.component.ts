import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule } from "@angular/forms";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }
  openSnackBar(message, action) {
    let snackBarref = this.snackBar.open(message, action, { duration: 2000 });

    snackBarref.afterDismissed().subscribe(() => {
      console.log('The snackbar was dismissed');

    })

    snackBarref.onAction().subscribe(() => {
      console.log('The sanckbar action was triggered!');

    })
  }
  openCustomSnackBar() {
    this.snackBar.openFromComponent(CustomSnackBarComponent, { duration: 2000 }
    )
  }

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

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    )
  }

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