import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NarraDeNavegacionComponent } from './narra-de-navegacion/narra-de-navegacion.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MainHomeComponent } from './main-home/main-home.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { HomebusinessComponent } from './homebusiness/homebusiness.component';
import { MatChipsModule } from '@angular/material/chips';
import { NewcategoryComponent } from './newcategory/newcategory.component';
import { MatTableModule } from '@angular/material/table';
import { NewproductComponent } from './newproduct/newproduct.component';
import { MatSelectModule } from '@angular/material/select';
import { SalesbranchComponent } from './salesbranch/salesbranch.component';

@NgModule({
  declarations: [
    AppComponent,
    NarraDeNavegacionComponent,
    MainHomeComponent,
    HomebusinessComponent,
    NewcategoryComponent,
    NewproductComponent,
    SalesbranchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatChipsModule,
    MatTableModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
