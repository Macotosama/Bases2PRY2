import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotaltotalComponent } from './totaltotal.component';

describe('TotaltotalComponent', () => {
  let component: TotaltotalComponent;
  let fixture: ComponentFixture<TotaltotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotaltotalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotaltotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
