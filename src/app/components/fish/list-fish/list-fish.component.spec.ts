import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFishComponent } from './list-fish.component';

describe('ListFishComponent', () => {
  let component: ListFishComponent;
  let fixture: ComponentFixture<ListFishComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListFishComponent]
    });
    fixture = TestBed.createComponent(ListFishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
