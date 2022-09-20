import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventreqComponent } from './eventreq.component';

describe('EventreqComponent', () => {
  let component: EventreqComponent;
  let fixture: ComponentFixture<EventreqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventreqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventreqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
