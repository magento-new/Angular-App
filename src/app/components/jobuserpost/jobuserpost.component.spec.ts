import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobuserpostComponent } from './jobuserpost.component';

describe('JobuserpostComponent', () => {
  let component: JobuserpostComponent;
  let fixture: ComponentFixture<JobuserpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobuserpostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobuserpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
