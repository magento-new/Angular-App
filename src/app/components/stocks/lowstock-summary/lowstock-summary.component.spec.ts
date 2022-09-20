import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowstockSummaryComponent } from './lowstock-summary.component';

describe('LowstockSummaryComponent', () => {
  let component: LowstockSummaryComponent;
  let fixture: ComponentFixture<LowstockSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LowstockSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LowstockSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
