import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomebusinessComponent } from './homebusiness.component';

describe('HomebusinessComponent', () => {
  let component: HomebusinessComponent;
  let fixture: ComponentFixture<HomebusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomebusinessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomebusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
