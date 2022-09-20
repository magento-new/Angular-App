import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeImportsComponent } from './employee-imports.component';

describe('EmployeeImportsComponent', () => {
  let component: EmployeeImportsComponent;
  let fixture: ComponentFixture<EmployeeImportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeImportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeImportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
