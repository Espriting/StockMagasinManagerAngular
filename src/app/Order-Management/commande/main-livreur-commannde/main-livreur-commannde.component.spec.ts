import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLivreurCommanndeComponent } from './main-livreur-commannde.component';

describe('MainLivreurCommanndeComponent', () => {
  let component: MainLivreurCommanndeComponent;
  let fixture: ComponentFixture<MainLivreurCommanndeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainLivreurCommanndeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLivreurCommanndeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
