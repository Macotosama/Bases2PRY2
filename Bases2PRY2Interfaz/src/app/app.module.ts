import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
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
import { MatSliderModule } from '@angular/material/slider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { InventarybranchComponent } from './inventarybranch/inventarybranch.component';
import { ClienthomeComponent } from './clienthome/clienthome.component';
import { BarraClienteComponent } from './barra-cliente/barra-cliente.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { ProductViewComponent } from './product-view/product-view.component';
import { RegisterbusinessComponent } from './registerbusiness/registerbusiness.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DialoginventaryComponent } from './dialoginventary/dialoginventary.component';
import { RegisterclienteComponent } from './registercliente/registercliente.component';
import { CarritocompraComponent } from './carritocompra/carritocompra.component';

@NgModule({
  declarations: [
    AppComponent,
    NarraDeNavegacionComponent,
    MainHomeComponent,
    HomebusinessComponent,
    NewcategoryComponent,
    NewproductComponent,
    SalesbranchComponent,
    InventarybranchComponent,
    ClienthomeComponent,
    BarraClienteComponent,
    ProductViewComponent,
    RegisterbusinessComponent,
    DialoginventaryComponent,
    RegisterclienteComponent,
    CarritocompraComponent,
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
    MatSelectModule,
    MatSliderModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ScrollingModule,
    MatPaginatorModule,
    NgxPaginationModule,
    MatCheckboxModule,
    MatRadioModule,
    HttpClientModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
