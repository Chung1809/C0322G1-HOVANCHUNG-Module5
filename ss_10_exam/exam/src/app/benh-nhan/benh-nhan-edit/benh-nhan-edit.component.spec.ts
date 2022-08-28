import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenhNhanEditComponent } from './benh-nhan-edit.component';

describe('BenhNhanEditComponent', () => {
  let component: BenhNhanEditComponent;
  let fixture: ComponentFixture<BenhNhanEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenhNhanEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenhNhanEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
