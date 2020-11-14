import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

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
  constructor() { }

  ngOnInit(): void {
  }

}
