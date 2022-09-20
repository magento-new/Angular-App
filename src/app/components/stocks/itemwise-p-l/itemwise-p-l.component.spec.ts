import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemwisePLComponent } from './itemwise-p-l.component';

describe('ItemwisePLComponent', () => {
  let component: ItemwisePLComponent;
  let fixture: ComponentFixture<ItemwisePLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemwisePLComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemwisePLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
