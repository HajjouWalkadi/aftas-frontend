import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHuntingComponent } from './list-hunting.component';

describe('ListHuntingComponent', () => {
  let component: ListHuntingComponent;
  let fixture: ComponentFixture<ListHuntingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListHuntingComponent]
    });
    fixture = TestBed.createComponent(ListHuntingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
