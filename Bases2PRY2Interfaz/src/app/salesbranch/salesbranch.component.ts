import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-salesbranch',
  templateUrl: './salesbranch.component.html',
  styleUrls: ['./salesbranch.component.scss']
})
export class SalesbranchComponent implements OnInit {
  public date = '';

  NumFacturaFormControl =  new FormControl ('', [
    Validators.required,
    Validators.maxLength(16),
  ]);

  public columns = ['category', 'descriptor'];
  public categorys = [];

  constructor() { }

  ngOnInit(): void {
  }

  formatLabel(value: number) {
    return value;
  }

}
