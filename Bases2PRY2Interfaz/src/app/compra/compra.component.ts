import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inventario } from '../models/model_producto';
import { Service } from '../services/Service'

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.scss']
})
export class CompraComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CompraComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Inventario, private servicio: Service) { }

  ngOnInit(): void {
  }

  enviarInfoPago(inventario: Inventario):void {
    this.servicio.enviarPago(inventario).subscribe(res => {
      console.log(res)
    });
  }

}
