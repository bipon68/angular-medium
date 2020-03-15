import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemThreeObserComponent } from './item-three-obser.component';

describe('ItemThreeObserComponent', () => {
  let component: ItemThreeObserComponent;
  let fixture: ComponentFixture<ItemThreeObserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemThreeObserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemThreeObserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
