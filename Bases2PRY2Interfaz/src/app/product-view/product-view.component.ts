import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, throwMatDialogContentAlreadyAttachedError, MatDialog } from '@angular/material/dialog';
import { Inventario, Carrito, ItemCarrito } from '../models/model_producto'
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Params } from '@angular/router';
import { CompraComponent } from '../compra/compra.component';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  total: number;
  cantidadFormControl = new FormControl('',[
    Validators.required,
    Validators.pattern('[0-9 ]*'),
  ])

  totalPadre= 0;
  data: Inventario;

  constructor(private _snackBar: MatSnackBar, private route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.crearProducto();
    this.consol();
  }

  consol():void {
    var carrito: Carrito = JSON.parse(localStorage.getItem('carrito'));
    this.totalPadre = carrito.total;
  }

  crearProducto():void {
    this.data = {
      Descripcion_Categoria: this.route.snapshot.params.Descripcion_Categoria,
      Descripcion_Producto: this.route.snapshot.params.Descripcion_Producto,
      IdInventario: this.route.snapshot.params.IdInventario,
      cantidad: this.route.snapshot.params.cantidad,
      idCategoria: this.route.snapshot.params.idCategoria,
      idProducto: this.route.snapshot.params.idProducto,
      imagen: this.route.snapshot.params.imagen,
      nombreCategoria: this.route.snapshot.params.nombreCategoria,
      nombreProducto: this.route.snapshot.params.nombreProducto,
      precio: this.route.snapshot.params.precio,
    }
  }

  valiEntrada() {
    if (this.cantidadFormControl.valid) {
      this.agregarCarrito(this.data.precio, this.data, this.cantidadFormControl.value)
    } else {
      this.openSnackBar('Ingrese la cantidad que desea comprar')
    }
  }

  agregarCarrito(precio: number, producto: Inventario, cantidad: number):void {
    var carrito: Carrito = JSON.parse(localStorage.getItem('carrito'));
    if (carrito.productos.length == 0) {
      if(producto.cantidad > 0) {
        var temp:ItemCarrito = {
          strock: 1,
          producto: producto
        }
        carrito.productos.push(temp)
        carrito.total += (precio*cantidad);
        this.totalPadre += (precio*cantidad);
        localStorage.setItem('carrito', JSON.stringify(carrito));
      } else {
        this.openSnackBar('No hay suficientes en inventario');
      }

    } else {
      var temp2 = true;
      carrito.productos.forEach(element =>{ 
        if(element.producto.IdInventario == producto.IdInventario) {
          if (element.producto.cantidad > element.strock) {
            element.strock++;
            carrito.total += (precio*cantidad);
            this.totalPadre += (precio*cantidad);
          } else {
            this.openSnackBar('No hay suficientes en inventario');
          }
          temp2 = false;
        }
      })
      if (temp2) {
        console.log('pero que pc')
        var temp:ItemCarrito = {
          strock: 1,
          producto: producto
        }
        carrito.productos.push(temp)
      }
    }
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'OK', {
      duration: 20000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  pagarUnProducto(venta: Inventario):void {
    const dialogRef = this.dialog.open(CompraComponent, {
    width: '1000px', height: '650px', data: venta
  })
}

}
