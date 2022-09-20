import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualPunchingComponent } from './manual-punching.component';

describe('ManualPunchingComponent', () => {
  let component: ManualPunchingComponent;
  let fixture: ComponentFixture<ManualPunchingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManualPunchingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualPunchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
