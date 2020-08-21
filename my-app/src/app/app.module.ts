import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, CustomSnackBarComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./material/material.module";
import { MatIconModule } from "@angular/material/icon";
import { MatBadgeModule } from "@angular/material/badge";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from "@angular/material/sidenav";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatMenuModule } from "@angular/material/menu";
import { MatListModule } from "@angular/material/list";
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from "@angular/material/expansion";
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from "@angular/material/tabs";
import { MatStepperModule } from "@angular/material/stepper";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatRadioModule } from "@angular/material/radio";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from '@angular/material/core';
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatDialogModule } from "@angular/material/dialog";
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from "@angular/material/sort";
import { ScrollingModule } from "@angular/cdk/scrolling";


@NgModule({
  declarations: [
    AppComponent,
    CustomSnackBarComponent,
    DialogExampleComponent
  ],
  entryComponents: [CustomSnackBarComponent, DialogExampleComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatIconModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatSidenavModule,
    FormsModule,
    MatMenuModule,
    MatListModule,
    MatDividerModule,
    MatGridListModule,
    MatExpansionModule,
    MatCardModule,
    MatTabsModule,
    MatStepperModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
