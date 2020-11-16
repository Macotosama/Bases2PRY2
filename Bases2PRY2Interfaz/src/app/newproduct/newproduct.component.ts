import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.scss']
})
export class NewproductComponent implements OnInit {

  
  nameFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(16),
  ]);

  descriptorFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(30),
  ]);

  public foods: string[] = [];
  public columns = ['category', 'descriptor'];
  public categorys = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
