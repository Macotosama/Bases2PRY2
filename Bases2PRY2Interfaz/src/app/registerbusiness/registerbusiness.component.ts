import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Service } from '../services/Service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-registerbusiness',
  templateUrl: './registerbusiness.component.html',
  styleUrls: ['./registerbusiness.component.scss']
})
export class RegisterbusinessComponent implements OnInit {
  public nombre = new FormControl('', [
    Validators.required,
    Validators.maxLength(30)
  ]);
  public apellido1 = new FormControl('', [
    Validators.required,
    Validators.maxLength(30)
  ]);
  public apellido2 = new FormControl('', [
    Validators.required,
    Validators.maxLength(30)
  ]);
  public cedula = new FormControl('', [
    Validators.required,
    Validators.pattern('[0-9 ]*'),
    Validators.maxLength(9)
  ]);
  public telefono = new FormControl('', [
    Validators.required,
    Validators.maxLength(12)
  ]);
  public provincia = new FormControl('', [
    Validators.required,
    Validators.maxLength(30)
  ]);
  public distrito = new FormControl('', [
    Validators.required,
    Validators.maxLength(30)
  ]);
  public canton = new FormControl('', [
    Validators.required,
    Validators.maxLength(30)
  ]);
  public barrio = new FormControl('', [
    Validators.required,
    Validators.maxLength(30)
  ]);
  public senas = new FormControl('', [
    Validators.required,
    Validators.maxLength(50)
  ]);

  public sede = new FormControl('', [
    Validators.required
  ]);

  public correo = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  public contrasena = new FormControl('', [
    Validators.required,
    Validators.maxLength(16),
  ]);

  constructor(private servicios: Service, private _snackBar: MatSnackBar,  public dialogRef: MatDialogRef<RegisterbusinessComponent>) { }

  ngOnInit(): void {
  }

  validEntradas(): void {
    if (this.nombre.valid && this.apellido1.valid && this.apellido2.valid && this.cedula.valid &&
      this.telefono.valid && this.correo.valid && this.contrasena.valid && this.provincia.valid && this.distrito.valid && this.canton.valid &&
      this.barrio.valid && this.senas.valid && this.sede.valid) {
        this.enviarInfo();
      } else {
        this.openSnackBar('Ingrese todos los datos')
      }
  }
  enviarInfo():void {
    this.servicios.valiVendedorAdmin(this.cedula.value, this.sede.value).subscribe(res =>{
      if(res[0].result == 'go') {
        this.servicios.registrarTrabajador(this.nombre.value, this.apellido1.value,this.apellido2.value,this.cedula.value,
          this.telefono.value, this.correo.value, this.contrasena.value, this.provincia.value, this.distrito.value, this.canton.value,
          this.barrio.value, this.senas.value, this.sede.value).subscribe(Cliente => {
            if(Cliente[0].resutl == 'False') {
              this.openSnackBar('Ya exites un usuario con esos credenciales')
            } else {
              this.openSnackBar('Vendedor registrado correctamente')
              this.dialogRef.close();
            }
        });
      } else {
        this.openSnackBar(`La cédula ${this.cedula.value} ya existe.`)
      }
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