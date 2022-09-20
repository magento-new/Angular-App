import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesEmpComponent } from './expenses-emp.component';

describe('ExpensesEmpComponent', () => {
  let component: ExpensesEmpComponent;
  let fixture: ComponentFixture<ExpensesEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpensesEmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensesEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
