import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionStepsComponent } from './competition-steps.component';

describe('CompetitionStepsComponent', () => {
  let component: CompetitionStepsComponent;
  let fixture: ComponentFixture<CompetitionStepsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompetitionStepsComponent]
    });
    fixture = TestBed.createComponent(CompetitionStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
