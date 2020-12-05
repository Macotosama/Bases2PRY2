import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Service } from '../services/Service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-registerdmin',
  templateUrl: './registerdmin.component.html',
  styleUrls: ['./registerdmin.component.scss']
})
export class RegisterdminComponent implements OnInit {

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
    Validators.pattern('[0-9 ]*'),
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

  public correo = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  public contrasena = new FormControl('', [
    Validators.required,
    Validators.maxLength(16),
  ]);


  constructor(private servicios: Service, private _snackBar: MatSnackBar, public dialogRef: MatDialogRef<RegisterdminComponent>) { }

  ngOnInit(): void {
  }

  validEntradas(): void {
    if (this.nombre.valid && this.apellido1.valid && this.apellido2.valid && this.cedula.valid &&
      this.telefono.valid && this.correo.valid && this.contrasena.valid && this.provincia.valid && this.distrito.valid && this.canton.valid &&
      this.barrio.valid && this.senas.valid) {
        this.enviarInfo();
      } else {
        this.openSnackBar('Ingrese todos los datos')
      }
  }

  enviarInfo():void {
    this.servicios.valiRegisterAdmin(this.cedula.value).subscribe(res =>{
      if(res[0].result == 'go') {
        this.servicios.registrarAdmin(this.nombre.value, this.apellido1.value,this.apellido2.value,this.cedula.value,
          this.telefono.value, this.correo.value, this.contrasena.value, this.provincia.value, this.distrito.value, this.canton.value,
          this.barrio.value, this.senas.value).subscribe(Cliente => {
            if (Cliente[0].result == 'False') {
              this.openSnackBar('Ya existe un usuario con esa cédula')
            } else {
              this.openSnackBar('Se registro correctamente')
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
