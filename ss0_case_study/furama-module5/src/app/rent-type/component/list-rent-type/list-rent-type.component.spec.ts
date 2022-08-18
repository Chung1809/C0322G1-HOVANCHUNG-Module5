import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRentTypeComponent } from './list-rent-type.component';

describe('ListRentTypeComponent', () => {
  let component: ListRentTypeComponent;
  let fixture: ComponentFixture<ListRentTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRentTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRentTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
