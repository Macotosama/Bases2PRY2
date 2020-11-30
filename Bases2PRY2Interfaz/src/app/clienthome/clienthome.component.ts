import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Service } from '../services/Service'
import { Carrito, Inventario, ItemCarrito } from '../models/model_producto'
import { element } from 'protractor';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductViewComponent } from '../product-view/product-view.component';
import { BarraClienteComponent } from '../barra-cliente/barra-cliente.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clienthome',
  templateUrl: './clienthome.component.html',
  styleUrls: ['./clienthome.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClienthomeComponent implements OnInit {

  @ViewChild(BarraClienteComponent) hijo: BarraClienteComponent;

  p: number = 1;
  foods: string[] = [];
  sede: string = 'limon'
  inventario: Inventario[];
  nameProduct =  new FormControl ('', [
    Validators.required,
    Validators.maxLength(16),
  ]);
  totalPadre = 0;

  constructor(private servicio: Service,  private _snackBar: MatSnackBar, public dialog: MatDialog, private _router: Router) { }

  ngOnInit(): void {
    this.obtenerInventario();
    this.crearCarrito();
  }

  obtenerInventario():void {
    this.servicio.getInventary().subscribe(inventary => {
      this.inventario = inventary;
      // console.log(this.inventario)
    })
  }

  crearCarrito():void {
    var carro: Carrito = {
      total: 0,
      productos: []
    };
    localStorage.setItem('carrito', JSON.stringify(carro));
  }

  agregarCarrito(precio: number, producto: Inventario):void {
    var carrito: Carrito = JSON.parse(localStorage.getItem('carrito'));
    if (carrito.productos.length == 0) {
      if(producto.cantidad > 0) {
        var temp:ItemCarrito = {
          strock: 1,
          producto: producto
        }
        carrito.productos.push(temp)
        carrito.total += precio;
        this.totalPadre += precio;
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
            carrito.total += precio;
            this.totalPadre += precio;
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

  actualizarValor():void {
    var carrito: Carrito = JSON.parse(localStorage.getItem('carrito'));
    this.totalPadre += carrito.total;
    this.hijo.actualizar(this.totalPadre);
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'OK', {
      duration: 20000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  operProductView(ventas: Inventario):void {
    // this._router.navigate(['/productview',JSON.stringify(ventas)])
    this._router.navigate(['/productview',`${ventas.Descripcion_Categoria}`,`${ventas.Descripcion_Producto}`,`${ventas.IdInventario}`,`${ventas.cantidad}`,`${ventas.idCategoria}`,
    `${ventas.idProducto}`,`${ventas.imagen}`,`${ventas.nombreCategoria}`,`${ventas.nombreProducto}`,`${ventas.precio}`])
  }

  // dialogClientes(ventas: Inventario) {
  //   const dialogRef = this.dialog.open(ProductViewComponent, {
  //     width: '1000px', height: '650px', data: ventas
  //   })
  //   dialogRef.afterClosed().subscribe(res => {
  //     this.actualizarValor();
  //   })
  // }

}
