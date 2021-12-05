import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFactureComponent } from './add-facture.component';

describe('AddFactureComponent', () => {
  let component: AddFactureComponent;
  let fixture: ComponentFixture<AddFactureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFactureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
