import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, throwMatDialogContentAlreadyAttachedError, MatDialog } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { Service } from '../services/Service';

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
    @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog, private servicio: Service) { }

  ngOnInit(): void {
  }

  

}
