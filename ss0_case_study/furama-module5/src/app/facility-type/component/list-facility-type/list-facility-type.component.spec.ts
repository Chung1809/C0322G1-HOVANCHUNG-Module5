import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFacilityTypeComponent } from './list-facility-type.component';

describe('ListFacilityTypeComponent', () => {
  let component: ListFacilityTypeComponent;
  let fixture: ComponentFixture<ListFacilityTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFacilityTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFacilityTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
