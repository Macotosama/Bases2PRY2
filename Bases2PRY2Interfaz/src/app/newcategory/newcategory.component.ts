import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Service } from '../services/Service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-newcategory',
  templateUrl: './newcategory.component.html',
  styleUrls: ['./newcategory.component.scss']
})
export class NewcategoryComponent implements OnInit {

  nameFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(16),
  ]);

  descriptorFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(30),
  ]);

  public columns = ['category', 'descriptor'];
  public categorys = [];

  constructor(private servicios: Service) { }

  ngOnInit(): void {
  }

  addCategory():void {
    this.servicios.addingNewCategory(this.nameFormControl.value, this.descriptorFormControl.value).subscribe(res => {
      console.log(res);
    });
  }

}
