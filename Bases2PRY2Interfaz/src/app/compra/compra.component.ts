import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inventario, ItemCarrito, Carrito} from '../models/model_producto';
import { Service } from '../services/Service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.scss']
})
export class CompraComponent implements OnInit {
  infoProducto: Inventario;

  constructor(public dialogRef: MatDialogRef<CompraComponent>, private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: Carrito, private servicio: Service) {
    }

  ngOnInit(): void {
  }

  pagarCarrito():void {
    this.servicio.pedirOrdenCompra().subscribe(res => {
      var temp:string = localStorage.getItem('sede')
      this.servicio.crearFactura(localStorage.getItem('sede'), res).subscribe(xd => {
        this.servicio.enviarPagoLista(this.data.productos, res).subscribe(xd2 => {
          if (xd2.msg == 'Tranasferencia exitosa') {
            this.openSnackBar('Producto comprado')
            this.dialogRef.close();
          } else {
            this.openSnackBar('No hay suficientes en el inventario')
          }
        })
      })
    });
  }

  cancelar():void {
    this.dialogRef.close()
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'OK', {
      duration: 20000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

}
