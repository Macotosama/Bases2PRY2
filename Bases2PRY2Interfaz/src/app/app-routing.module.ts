import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainHomeComponent } from './main-home/main-home.component';
import { HomebusinessComponent } from './homebusiness/homebusiness.component';
import { NarraDeNavegacionComponent } from './narra-de-navegacion/narra-de-navegacion.component';
import { NewcategoryComponent } from './newcategory/newcategory.component';
import { NewproductComponent } from './newproduct/newproduct.component';
import { SalesbranchComponent } from './salesbranch/salesbranch.component';
import { InventarybranchComponent } from './inventarybranch/inventarybranch.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: MainHomeComponent },
  { path: 'homebusiness', component: HomebusinessComponent },
  //{ path: 'homebusiness', component: NarraDeNavegacionComponent },
  {path: 'newcategory', component: NewcategoryComponent},
  {path: 'newproduct', component: NewproductComponent},
  {path: 'salesbranch', component: SalesbranchComponent},
  {path: 'inventary', component: InventarybranchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
