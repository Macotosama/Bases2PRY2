import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, throwMatDialogContentAlreadyAttachedError } from '@angular/material/dialog';
import { Service } from '../services/Service';
import { RegisterbusinessComponent } from '../registerbusiness/registerbusiness.component';

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

  constructor(private servicios: Service, public dialog: MatDialog) { }

  ngOnInit(): void {
    // this.XD()
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

}
