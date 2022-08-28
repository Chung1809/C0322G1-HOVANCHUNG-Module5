import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenhNhanListComponent } from './benh-nhan-list.component';

describe('BenhNhanListComponent', () => {
  let component: BenhNhanListComponent;
  let fixture: ComponentFixture<BenhNhanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenhNhanListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenhNhanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
