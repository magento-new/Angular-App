import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestuserProfileComponent } from './guestuser-profile.component';

describe('GuestuserProfileComponent', () => {
  let component: GuestuserProfileComponent;
  let fixture: ComponentFixture<GuestuserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestuserProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestuserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
