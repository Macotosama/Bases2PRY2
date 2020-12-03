import { Component, OnInit } from '@angular/core';
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

}
