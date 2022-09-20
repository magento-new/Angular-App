import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestuserComponent } from './guestuser.component';

describe('GuestuserComponent', () => {
  let component: GuestuserComponent;
  let fixture: ComponentFixture<GuestuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
