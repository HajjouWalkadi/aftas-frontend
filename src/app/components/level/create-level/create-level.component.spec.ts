import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLevelComponent } from './create-level.component';

describe('CreateLevelComponent', () => {
  let component: CreateLevelComponent;
  let fixture: ComponentFixture<CreateLevelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateLevelComponent]
    });
    fixture = TestBed.createComponent(CreateLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
