import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, throwMatDialogContentAlreadyAttachedError, MatDialog } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { Service } from '../services/Service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dialoginventary',
  templateUrl: './dialoginventary.component.html',
  styleUrls: ['./dialoginventary.component.scss']
})
export class DialoginventaryComponent implements OnInit {

  stockControl = new FormControl ('', [
    Validators.required,
    Validators.pattern('^[1-9][0-9]*$')
  ])

  constructor(public dialogRef: MatDialogRef<DialoginventaryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog, private servicio: Service, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    console.log(this.data)
    this.stockControl.setValue(this.data.cantidad);
  }

  valiActualizar():void {
    if (this.stockControl.valid){
      this.servicio.getUpateInventary(this.data.IdInventario, this.data.idProducto, this.stockControl.value).subscribe();
      this.openSnackBar(`Se modifico correctamente el producto ${this.data.nombreProducto}`);
      this.dialogRef.close();
    } else {
      this.openSnackBar('Ingrese correctamente la cantidad');
    }
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'OK', {
      duration: 20000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

}
