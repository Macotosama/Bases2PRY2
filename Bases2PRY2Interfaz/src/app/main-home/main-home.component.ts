import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, throwMatDialogContentAlreadyAttachedError } from '@angular/material/dialog';
import { Service } from '../services/Service';
import { RegisterbusinessComponent } from '../registerbusiness/registerbusiness.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegisterclienteComponent } from '../registercliente/registercliente.component';
import { Carrito, Inventario, ItemCarrito } from '../models/model_producto';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.scss']
})
export class MainHomeComponent implements OnInit {

  sede: string = 'limon'

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  numFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(16),
  ]);

  emailClienteFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  numCLienteFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(16),
  ]);

  constructor(private servicios: Service, public dialog: MatDialog, private _snackBar: MatSnackBar, private _router: Router) { }

  ngOnInit(): void {
    localStorage.clear();
  }

  validarVendedor():void {
    if (this.emailFormControl.valid && this.numFormControl.valid) {
      this.loginVendedor();
    } else {
      this.openSnackBar('Ingrese sus credenciales');
    }
  }

  validarCliente():void {
    if (this.emailClienteFormControl.valid && this.numCLienteFormControl.valid) {
      this.loginCliente();
    } else {
      this.openSnackBar('Ingrese sus credenciales');
    }
  }

  loginVendedor():void {
    var vali;
    this.servicios.loginTrabajador(this.emailFormControl.value, this.numFormControl.value, this.sede).subscribe(Vendedor => {
      console.log(Vendedor)
      if (Vendedor[0].result == 'false') {
        this.openSnackBar('Su correo electrónico o su contreaseña esta equivocado');
      } else {
        localStorage.setItem('vendedor',JSON.stringify(Vendedor));
        this._router.navigate(['/homebusiness']);
      }
    });
  }

  loginCliente():void {
    this.servicios.loginCliente(this.emailClienteFormControl.value, this.numCLienteFormControl.value, this.sede).subscribe(Vendedor => {
      if (Vendedor[0].result == 'false') {
        this.openSnackBar('Su correo electrónico o su contreaseña esta equivocado');
      } else {
        this.crearCarrito();
        localStorage.setItem('cliente',JSON.stringify(Vendedor));
        this._router.navigate(['/clienthome']);
      }
    });
  }

  crearCarrito():void {
    var carro: Carrito = {
      total: 0,
      productos: []
    };
    localStorage.setItem('carrito', JSON.stringify(carro));
  }

  dialogRegisterBusiness() {
    const dialogRef = this.dialog.open(RegisterbusinessComponent, {
      width: '800px', height: '550px',
    })
  }

  dialogRegisterClientes() {
    const dialogRef = this.dialog.open(RegisterclienteComponent, {
      width: '800px', height: '550px',
    })
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'OK', {
      duration: 20000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

}
