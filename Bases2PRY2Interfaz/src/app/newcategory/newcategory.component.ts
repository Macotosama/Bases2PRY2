import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Service } from '../services/Service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-newcategory',
  templateUrl: './newcategory.component.html',
  styleUrls: ['./newcategory.component.scss']
})
export class NewcategoryComponent implements OnInit {

  nameFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(16),
  ]);

  descriptorFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(30),
  ]);

  public columns = ['category', 'descriptor'];
  public categorys: any[];

  constructor(private servicios: Service, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getCategorys();
  }

  vallidarEntrada():void {
    if (this.nameFormControl.valid && this.descriptorFormControl.valid) {
      this.addCategory();
    } else {
      this.openSnackBar('Ingrese todos los datos necesarios');
    }
  }

  addCategory():void {
    this.servicios.addingNewCategory(this.nameFormControl.value, this.descriptorFormControl.value).subscribe(res => {
      console.log(res);
    });
  }

  getCategorys():void {
    this.servicios.getCategory().subscribe(res => {
      this.categorys = res;
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
