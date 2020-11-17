import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-inventarybranch',
  templateUrl: './inventarybranch.component.html',
  styleUrls: ['./inventarybranch.component.scss']
})
export class InventarybranchComponent implements OnInit {
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

}
