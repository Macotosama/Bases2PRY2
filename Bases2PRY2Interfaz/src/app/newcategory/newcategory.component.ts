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

  constructor() { }

  ngOnInit(): void {
  }

}
