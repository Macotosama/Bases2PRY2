import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Service } from '../services/Service';

@Component({
  selector: 'app-inventario-admin',
  templateUrl: './inventario-admin.component.html',
  styleUrls: ['./inventario-admin.component.scss']
})
export class InventarioAdminComponent implements OnInit {
  public columns = ['producto', 'category', 'descriptor', 'invetario', 'actions'];
  public inventario: any[];
  public sede = 'car';
  public categorys:any;
  nameProduct =  new FormControl ('', [
    Validators.required,
    Validators.maxLength(16),
  ]);

  categoriasControl = new FormControl ('', [
  ]);

  nameProductForm = new FormControl ('', [])

  constructor(private servicio: Service) { }

  ngOnInit(): void {
    this.getOnlyNameCategory();
    this.obtenerInventarioCar();
  }

  cambioSede(xd: string):void {
    this.sede = xd
    if(xd == 'car') {
      this.obtenerInventarioCar();
    } else {
      this.obtenerInventarioLim();
    }
  }

  obtenerInventarioCar():void {
    this.servicio.inventarioCar().subscribe(inventary => {
      console.log(inventary)
      this.inventario = inventary;
    })
  }

  obtenerInventarioLim():void {
    this.servicio.inventarioLim().subscribe(inventary => {
      this.inventario = inventary;
    })
  }
  
  filterInventary():void {
    var produc;
    var category = 0;
    if (this.nameProductForm.value == '' || this.nameProductForm.value == null) {
      produc = 'null'
    } else {
      produc = this.nameProductForm.value
    }

    if (this.categoriasControl.value == null || this.categoriasControl.value == '')  {
      category = 0
    } else {
      category = this.categoriasControl.value
    }
    this.servicio.inventarioAdmin(this.sede ,produc, category).subscribe(res => {
      this.inventario = res;
    })
  }

  getOnlyNameCategory():void {
    this.servicio.getNameCategory().subscribe(category => {
      this.categorys = category;
    });
  }

}
