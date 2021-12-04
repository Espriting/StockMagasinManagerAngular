import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCommandeComponent } from './main-commande.component';

describe('MainCommandeComponent', () => {
  let component: MainCommandeComponent;
  let fixture: ComponentFixture<MainCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCommandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
