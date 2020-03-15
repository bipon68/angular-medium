import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTwoObserComponent } from './item-two-obser.component';

describe('ItemTwoObserComponent', () => {
  let component: ItemTwoObserComponent;
  let fixture: ComponentFixture<ItemTwoObserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemTwoObserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTwoObserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
