import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListfactureComponent } from './listfacture.component';

describe('ListfactureComponent', () => {
  let component: ListfactureComponent;
  let fixture: ComponentFixture<ListfactureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListfactureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListfactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
