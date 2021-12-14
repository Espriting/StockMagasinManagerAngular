import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesLivraisonComponent } from './mes-livraison.component';

describe('MesLivraisonComponent', () => {
  let component: MesLivraisonComponent;
  let fixture: ComponentFixture<MesLivraisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesLivraisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesLivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
