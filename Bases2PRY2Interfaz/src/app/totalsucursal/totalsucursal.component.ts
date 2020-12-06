import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Service } from '../services/Service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-totalsucursal',
  templateUrl: './totalsucursal.component.html',
  styleUrls: ['./totalsucursal.component.scss']
})
export class TotalsucursalComponent implements OnInit {
  public columns = ['producto', 'category', 'descriptor', 'invetario'];
  public inventario: any[];
  public sede = 'car';
  public categorys:any;
  public date = new Date();
  public date2 = new Date();

  categoriasControl = new FormControl ('', [
    Validators.required
  ]);

  constructor(private servicio: Service,  private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getOnlyNameCategory();
  }
  
  filterInventary():void {
    if (this.date <= this.date2) {
      if (this.categoriasControl.valid){
        this.servicio.totalPorSede(this.categoriasControl.value, this.date, this.date2, this.sede).subscribe(res => {
          this.inventario = res;
        })
      } else {
        this.openSnackBar('Ingrese la categoria')
      }
    } else {
      this.openSnackBar('Ingrese fechas validas')
      this.date = new Date();
      this.date2 = new Date();
    }
  }

  getOnlyNameCategory():void {
    this.servicio.getNameCategory().subscribe(category => {
      this.categorys = category;
    });
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'OK', {
      duration: 20000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
