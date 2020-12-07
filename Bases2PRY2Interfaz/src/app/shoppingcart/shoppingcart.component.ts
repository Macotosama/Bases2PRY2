import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Inventario, ItemCarrito, Carrito} from '../models/model_producto';
import { Service } from '../services/Service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.scss']
})
export class ShoppingcartComponent implements OnInit {
  totalPadre: number = 0;
  data: Carrito;

  displayedColumns = ['image', 'producto', 'categoria', 'precio', 'cantidad', 'accion']

  constructor(private servicio: Service, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem('carrito'));
    this.totalPadre = this.data.total;
  }

  eliminar(id:number):void {
    var lista:ItemCarrito[] = this.data.productos;
    var cont = 0;
    console.log(lista);
    for(let item of lista) {
      if(item.producto.IdInventario == id) {
        this.data.total -= (item.strock*item.producto.precio);
        this.totalPadre -= (item.strock*item.producto.precio);
        lista.splice(cont, cont+1);
        this.data.productos = lista;
        localStorage.setItem('carrito', JSON.stringify(this.data));
        break;
      }
      cont++;
    }
  }

  actualizar(item:number):void {
    var temp = (<HTMLInputElement>document.getElementById(`${item}`)).value;
    var nuevo:number = +temp
    var lista:ItemCarrito[] = this.data.productos;
    var cont = 0;
    for(let xd of lista) {
      if(xd.producto.IdInventario == item) {
        break;
      }
      cont++;
    }
    if (nuevo > 0 && lista[cont].producto.cantidad >= nuevo) {
      if(lista[cont].strock > nuevo || lista[cont].strock < nuevo) {
        this.data.total += (nuevo - lista[cont].strock) * lista[cont].producto.precio
        this.totalPadre += (nuevo - lista[cont].strock) * lista[cont].producto.precio
        lista[cont].strock = nuevo;
        this.data.productos = lista;
        localStorage.setItem('carrito', JSON.stringify(this.data));
      }
    } else {
      this.eliminar(item);
    }
  }

  pagarCarrito():void {
    var sede = localStorage.getItem('sede');
    if (this.totalPadre != 0) {
      this.servicio.pedirOrdenCompra(sede).subscribe(res => {
        var temp:string = localStorage.getItem('sede')
        this.servicio.crearFactura(localStorage.getItem('sede'), res).subscribe(xd => {
          this.servicio.enviarPagoLista(sede, this.data.productos, res).subscribe(xd2 => {
            if (xd2.msg == 'Tranasferencia exitosa') {
              var joder: Carrito = {
                total: 0,
                productos: []
              }
              localStorage.setItem('carrito', JSON.stringify(joder));
              this.data = joder;
              this.totalPadre = 0;
              this.openSnackBar('Producto comprado')
            } else {
              this.openSnackBar('No hay suficientes en el inventario')
            }
          })
        })
      });
    } else {
      this.openSnackBar('No hay productos en el carrito')
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
