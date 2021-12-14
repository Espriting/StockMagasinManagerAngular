import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCommandComponent } from './card-command.component';

describe('CardCommandComponent', () => {
  let component: CardCommandComponent;
  let fixture: ComponentFixture<CardCommandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCommandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
