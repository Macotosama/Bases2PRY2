import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalsucursalComponent } from './totalsucursal.component';

describe('TotalsucursalComponent', () => {
  let component: TotalsucursalComponent;
  let fixture: ComponentFixture<TotalsucursalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalsucursalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalsucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
