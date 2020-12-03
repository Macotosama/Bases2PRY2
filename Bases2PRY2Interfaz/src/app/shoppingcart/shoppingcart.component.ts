import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Inventario, ItemCarrito, Carrito} from '../models/model_producto';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.scss']
})
export class ShoppingcartComponent implements OnInit {
  totalPadre: number = 0;
  data: Carrito;

  displayedColumns = ['image', 'producto', 'categoria', 'precio', 'cantidad', 'accion']

  constructor() { }

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
        console.log(lista)
        break;
      }
      cont++;
    }
  }

  actualizar(item:number):void {
    // var nuevo = $("#XD").val()
    // var input = document.getElementById('XD');
    // var nuevo = input.Value;
    // var nuevo = document.getElementsByName("xd").value;
    var nuevo = document.getElementById(`${item}`).value;
    // var nuevo = document.getElementsByName("xd").value;
    var lista:ItemCarrito[] = this.data.productos;
    var cont = 0;
    for(let xd of lista) {
      if(xd.producto.IdInventario == item) {
        break;
      }
      cont++;
    }
    console.log(nuevo, 'Pos muy bien jovencito')
    if (nuevo > 0 && lista[cont].producto.cantidad >= nuevo) {
      if(lista[cont].strock > nuevo && lista[cont].strock < nuevo) {
        this.data.total += (nuevo - lista[cont].strock) * lista[cont].producto.precio
        this.totalPadre += (nuevo - lista[cont].strock) * lista[cont].producto.precio
      }
    } else {
      console.log(nuevo, 'Pos muy bien jovencito')
    }
  }

}
