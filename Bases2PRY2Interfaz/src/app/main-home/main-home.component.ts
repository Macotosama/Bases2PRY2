import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, throwMatDialogContentAlreadyAttachedError } from '@angular/material/dialog';
import { Service } from '../services/Service';
import { RegisterbusinessComponent } from '../registerbusiness/registerbusiness.component';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  constructor(private servicios: Service, public dialog: MatDialog, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    // this.XD()
  }

  validarVendedor():void {
    if (this.emailFormControl.valid && this.numFormControl.valid) {
      this.loginVendedor();
    } else {
      this.openSnackBar('Ingrese sus credenciales');
    }
  }

  loginVendedor():void {
    console.log(this.emailFormControl.value, this.numFormControl.value)
    this.servicios.loginTrabajador(this.emailFormControl.value, this.numFormControl.value, this.sede).subscribe(Cliente => {
      console.log(Cliente);
  });
  }

  // XD(): void {
  //   localStorage.setItem('123', 'bbbbc');
  // }
  dialogClientes() {
    const dialogRef = this.dialog.open(RegisterbusinessComponent, {
      width: '800px', height: '550px',
      // data: cliente
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
