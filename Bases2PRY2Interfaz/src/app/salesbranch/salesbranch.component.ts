import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Service } from '../services/Service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-salesbranch',
  templateUrl: './salesbranch.component.html',
  styleUrls: ['./salesbranch.component.scss']
})
export class SalesbranchComponent implements OnInit {
  public date = '';
  public date2 = new Date();

  NumFacturaFormControl =  new FormControl ('', [
    Validators.required,
    Validators.maxLength(16),
  ]);

  NammeFacturaFormControl =  new FormControl ('', [
    Validators.required,
    Validators.maxLength(16),
  ]);

  public columns = ['nombre', 'apellid1', 'apellid2', 'cantidad', 'monto', 'telefono'];
  public categorys = [];

  constructor(private servicio: Service,  private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  formatLabel(value: number) {
    return value;
  }

  filtrar():void {
    var tempD = new Date();
    var tempFac = 0;
    var tempName = 'null'
    if (tempD >= this.date2) {
      if (!this.NumFacturaFormControl.valid) {
        tempFac = 0;
      } else {
        tempFac = this.NumFacturaFormControl.value
      }

      if(this.NammeFacturaFormControl.valid) {
        tempName = this.NammeFacturaFormControl.value
      } else {
        tempName = 'null';
      }
      this.servicio.getFacturasLocales(localStorage.getItem('sede'),tempName, this.date2, tempFac).subscribe(res =>{
        console.log(res);
        this.categorys =res
      })
    } else {
      this.openSnackBar('Fecha invalída')
    }
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'OK', {
      duration: 20000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

}
