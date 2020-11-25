import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Service } from '../services/Service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-inventarybranch',
  templateUrl: './inventarybranch.component.html',
  styleUrls: ['./inventarybranch.component.scss']
})
export class InventarybranchComponent implements OnInit {
  public date = '';

  NumFacturaFormControl =  new FormControl ('', [
    Validators.required,
    Validators.maxLength(16),
  ]);

  categoriasControl = new FormControl ('', [
    Validators.required
  ]);

  productControl = new FormControl ('', [
    Validators.required
  ])

  stockControl = new FormControl ('', [
    Validators.required,
    Validators.pattern('^[1-9][0-9]*$')
  ])

  nameProductForm = new FormControl ('', [
    Validators.required
  ])

  CategoryForm = new FormControl ('', [
    Validators.required,
  ])

  public columns = ['producto', 'category', 'descriptor', 'invetario', 'actions'];
  public categorys: any[];
  public products: any[];
  public inventario: any[];
  constructor(private servicio: Service, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getInventario();
    this.getOnlyNameCategory();
    this.getProductos();
  }

  filterInventary():void {
    console.log(this.CategoryForm.value)
    var produc;
    var category;
    if (this.nameProductForm.value == '') {
       produc = 'null'
      } else {
        produc = this.nameProductForm.value
      }
    if (this.CategoryForm.value == '')  {
      category = 0
    } else {
      category = this.CategoryForm.value
    }
    this.servicio.getFiltroInventary(produc, category).subscribe(res => {
      this.inventario = res;
    })
  }

  validFiltrar():void {
    if (this.nameProductForm && this.CategoryForm) {
      this.filterInventary();
    } else {
      this.openSnackBar('Ingrese los datos necesarios para filtrar')
    }
  }

  validAgregarInventario():void {
    if (this.productControl.valid && this.stockControl.valid) {
      this.addingInvantary();
    } else {
      this.openSnackBar('Ingrese todos los datos para agregar al inventario');
    }
  }

  addingInvantary():void {
    this.servicio.addingInventary(this.productControl.value, this.stockControl.value).subscribe(res => {
      if (res[0].result == 'True') {
        this.openSnackBar('Se agrego correctamente al inventario');
      } else {
        this.openSnackBar('Ya existe el producto en el invantario');
      }
      this.getInventario();
    });
  }

  getProductos():void {
    this.servicio.getProductoName().subscribe(productos => {
      this.products = productos;
    });
  }

  getOnlyNameCategory():void {
    this.servicio.getNameCategory().subscribe(category => {
      this.categorys = category;
    });
  }

  getInventario():void {
    this.servicio.getInventary().subscribe(inventario => {
      this.inventario = inventario;
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
