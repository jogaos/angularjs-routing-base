import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsLoginComponent } from './students-login.component';

describe('StudentsLoginComponent', () => {
  let component: StudentsLoginComponent;
  let fixture: ComponentFixture<StudentsLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
