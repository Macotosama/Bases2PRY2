import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialoginventaryComponent } from './dialoginventary.component';

describe('DialoginventaryComponent', () => {
  let component: DialoginventaryComponent;
  let fixture: ComponentFixture<DialoginventaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialoginventaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialoginventaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
