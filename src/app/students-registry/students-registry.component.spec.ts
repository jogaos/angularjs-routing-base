import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsRegistryComponent } from './students-registry.component';

describe('StudentsRegistryComponent', () => {
  let component: StudentsRegistryComponent;
  let fixture: ComponentFixture<StudentsRegistryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsRegistryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsRegistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
