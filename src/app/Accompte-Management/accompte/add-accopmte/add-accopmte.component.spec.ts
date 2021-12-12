import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAccopmteComponent } from './add-accopmte.component';

describe('AddAccopmteComponent', () => {
  let component: AddAccopmteComponent;
  let fixture: ComponentFixture<AddAccopmteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAccopmteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAccopmteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
