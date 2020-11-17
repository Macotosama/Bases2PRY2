import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarybranchComponent } from './inventarybranch.component';

describe('InventarybranchComponent', () => {
  let component: InventarybranchComponent;
  let fixture: ComponentFixture<InventarybranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventarybranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventarybranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
