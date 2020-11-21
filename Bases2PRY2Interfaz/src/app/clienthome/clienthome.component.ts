import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-clienthome',
  templateUrl: './clienthome.component.html',
  styleUrls: ['./clienthome.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClienthomeComponent implements OnInit {
  p: number = 1;
  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
  foods: string[] = [];
  sede: string = 'limon'
  nameProduct =  new FormControl ('', [
    Validators.required,
    Validators.maxLength(16),
  ]);

  constructor() { }

  ngOnInit(): void {
  }

}
