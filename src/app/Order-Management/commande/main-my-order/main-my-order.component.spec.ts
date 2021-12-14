import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMyOrderComponent } from './main-my-order.component';

describe('MainMyOrderComponent', () => {
  let component: MainMyOrderComponent;
  let fixture: ComponentFixture<MainMyOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainMyOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMyOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
