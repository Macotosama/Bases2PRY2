import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterdminComponent } from './registerdmin.component';

describe('RegisterdminComponent', () => {
  let component: RegisterdminComponent;
  let fixture: ComponentFixture<RegisterdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
