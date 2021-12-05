import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFactureComponent } from './main-facture.component';

describe('MainFactureComponent', () => {
  let component: MainFactureComponent;
  let fixture: ComponentFixture<MainFactureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainFactureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainFactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
