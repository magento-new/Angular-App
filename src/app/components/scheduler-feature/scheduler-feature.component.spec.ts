import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulerFeatureComponent } from './scheduler-feature.component';

describe('SchedulerFeatureComponent', () => {
  let component: SchedulerFeatureComponent;
  let fixture: ComponentFixture<SchedulerFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulerFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulerFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
