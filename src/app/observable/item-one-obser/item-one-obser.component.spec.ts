import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemOneObserComponent } from './item-one-obser.component';

describe('ItemOneObserComponent', () => {
  let component: ItemOneObserComponent;
  let fixture: ComponentFixture<ItemOneObserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemOneObserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemOneObserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
