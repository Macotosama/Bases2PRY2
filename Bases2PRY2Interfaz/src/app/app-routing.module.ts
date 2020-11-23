import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainHomeComponent } from './main-home/main-home.component';
import { HomebusinessComponent } from './homebusiness/homebusiness.component';
import { NewcategoryComponent } from './newcategory/newcategory.component';
import { NewproductComponent } from './newproduct/newproduct.component';
import { SalesbranchComponent } from './salesbranch/salesbranch.component';
import { InventarybranchComponent } from './inventarybranch/inventarybranch.component';
import { ClienthomeComponent } from './clienthome/clienthome.component';
import { RegisterbusinessComponent } from './registerbusiness/registerbusiness.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: MainHomeComponent },
  { path: 'homebusiness', component: HomebusinessComponent },
  {path: 'newcategory', component: NewcategoryComponent},
  {path: 'newproduct', component: NewproductComponent},
  {path: 'salesbranch', component: SalesbranchComponent},
  {path: 'inventary', component: InventarybranchComponent},
  {path: 'clienthome', component: ClienthomeComponent},
  {path: 'registerbusiness', component: RegisterbusinessComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
