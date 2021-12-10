import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductToStockComponent } from './add-product-to-stock.component';

describe('AddProductToStockComponent', () => {
  let component: AddProductToStockComponent;
  let fixture: ComponentFixture<AddProductToStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductToStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductToStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
