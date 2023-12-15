import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRankingComponent } from './list-ranking.component';

describe('ListRankingComponent', () => {
  let component: ListRankingComponent;
  let fixture: ComponentFixture<ListRankingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListRankingComponent]
    });
    fixture = TestBed.createComponent(ListRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
