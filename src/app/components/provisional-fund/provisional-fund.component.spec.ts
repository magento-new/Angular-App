import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvisionalFundComponent } from './provisional-fund.component';

describe('ProvisionalFundComponent', () => {
  let component: ProvisionalFundComponent;
  let fixture: ComponentFixture<ProvisionalFundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvisionalFundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvisionalFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
