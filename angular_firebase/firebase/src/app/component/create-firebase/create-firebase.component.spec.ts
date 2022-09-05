import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFirebaseComponent } from './create-firebase.component';

describe('CreateFirebaseComponent', () => {
  let component: CreateFirebaseComponent;
  let fixture: ComponentFixture<CreateFirebaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFirebaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFirebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
