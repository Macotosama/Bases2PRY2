import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, throwMatDialogContentAlreadyAttachedError } from '@angular/material/dialog';
import { Service } from '../services/Service';
import { RegisterbusinessComponent } from '../registerbusiness/registerbusiness.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegisterclienteComponent } from '../registercliente/registercliente.component';
import { Carrito, Inventario, ItemCarrito } from '../models/model_producto';
import { RegisterdminComponent } from '../registerdmin/registerdmin.component'

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.scss']
})
export class MainHomeComponent implements OnInit {

  sede: string = 'car';

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

  emailAdminFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  numAdminFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(16),
  ]);

  constructor(private servicios: Service, public dialog: MatDialog, private _snackBar: MatSnackBar, private _router: Router) { }

  ngOnInit(): void {
    localStorage.clear();
  }

  validarAdmin():void {
    if (this.emailAdminFormControl.valid && this.numAdminFormControl.valid) {
      this.loginAdmin();
    } else {
      this.openSnackBar('Ingrese sus credenciales');
    }
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

  loginAdmin():void {
    var vali;
    this.servicios.loginAdmin(this.emailAdminFormControl.value, this.numAdminFormControl.value).subscribe(Vendedor => {
      console.log(Vendedor)
      if (Vendedor[0].result == 'false') {
        this.openSnackBar('Su correo electrónico o su contreaseña esta equivocada');
      } else {
        localStorage.setItem('admin',JSON.stringify(Vendedor));
        this._router.navigate(['/adminhome']);
      }
    });
  }

  loginVendedor():void {
    var vali;
    this.servicios.loginTrabajador(this.emailFormControl.value, this.numFormControl.value, this.sede).subscribe(Vendedor => {
      console.log(Vendedor)
      if (Vendedor[0].result == 'false') {
        this.openSnackBar('Su correo electrónico o su contreaseña esta equivocada');
      } else {
        localStorage.setItem('vendedor',JSON.stringify(Vendedor[0]));
        localStorage.setItem('sede',`${this.sede}`)
        this._router.navigate(['/homebusiness']);
      }
    });
  }

  loginCliente():void {
    this.servicios.loginCliente(this.emailClienteFormControl.value, this.numCLienteFormControl.value, this.sede).subscribe(Vendedor => {
      if (Vendedor[0].result == 'false') {
        this.openSnackBar('Su correo electrónico o su contreaseña esta equivocada');
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

  dialogRegisterAdmin() {
    const dialogRef = this.dialog.open(RegisterdminComponent, {
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
