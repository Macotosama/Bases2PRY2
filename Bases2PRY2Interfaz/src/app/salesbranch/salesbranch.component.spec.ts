import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesbranchComponent } from './salesbranch.component';

describe('SalesbranchComponent', () => {
  let component: SalesbranchComponent;
  let fixture: ComponentFixture<SalesbranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesbranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesbranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
