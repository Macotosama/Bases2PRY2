import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Service } from '../services/Service';
import { MatSnackBar } from '@angular/material/snack-bar';

interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.scss']
})
export class NewproductComponent implements OnInit {

  
  nameFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(30),
  ]);

  descriptorFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(100),
  ]);

  categoriasControl = new FormControl ('', [
      Validators.required
    ]);

  imageControl = new FormControl ('', [
    Validators.required,
  ])

  public columns = ['name', 'category', 'descriptor'];
  public categorys: any[];
  public productos: any[];
  
  constructor(private servicios: Service, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getOnlyNameCategory();
    this.getProductos();
  }

  getProductos():void {
    this.servicios.gerProductos().subscribe(productos => {
      this.productos = productos;
    });
  }

  getOnlyNameCategory():void {
    this.servicios.getNameCategory().subscribe(category => {
      this.categorys = category;
    })
  }

  valiEntradaProducto():void {
    if (this.nameFormControl.valid && this.descriptorFormControl.valid && this.categoriasControl.valid) {
      this.addNewProduct();
    } else {
      this.openSnackBar('Ingrese todos los datos');
    }
  }

  addNewProduct():void {
    this.servicios.addingNewProduct(this.nameFormControl.value, this.categoriasControl.value, this.descriptorFormControl.value).subscribe(
      productos => {
        this.productos=productos;
      });
      this.nameFormControl.setValue('');
      this.nameFormControl.reset();
      this.categoriasControl.setValue('');
      this.categoriasControl.reset();
      this.descriptorFormControl.setValue('');
      this.descriptorFormControl.reset();
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'OK', {
      duration: 20000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

}
