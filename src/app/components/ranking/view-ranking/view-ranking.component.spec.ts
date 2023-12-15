import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRankingComponent } from './view-ranking.component';

describe('ViewRankingComponent', () => {
  let component: ViewRankingComponent;
  let fixture: ComponentFixture<ViewRankingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewRankingComponent]
    });
    fixture = TestBed.createComponent(ViewRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
