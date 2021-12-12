import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAccompteComponent } from './main-accompte.component';

describe('MainAccompteComponent', () => {
  let component: MainAccompteComponent;
  let fixture: ComponentFixture<MainAccompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainAccompteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAccompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
