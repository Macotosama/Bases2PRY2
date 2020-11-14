import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainHomeComponent } from './main-home/main-home.component';
import { HomebusinessComponent } from './homebusiness/homebusiness.component';
import { NarraDeNavegacionComponent } from './narra-de-navegacion/narra-de-navegacion.component';
import { NewcategoryComponent } from './newcategory/newcategory.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: MainHomeComponent },
  { path: 'homebusiness', component: HomebusinessComponent },
  //{ path: 'homebusiness', component: NarraDeNavegacionComponent },
  {path: 'newcategory', component: NewcategoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
