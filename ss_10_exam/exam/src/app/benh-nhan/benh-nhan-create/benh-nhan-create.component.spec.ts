import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenhNhanCreateComponent } from './benh-nhan-create.component';

describe('BenhNhanCreateComponent', () => {
  let component: BenhNhanCreateComponent;
  let fixture: ComponentFixture<BenhNhanCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenhNhanCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenhNhanCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
