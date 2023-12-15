import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHuntingComponent } from './view-hunting.component';

describe('ViewHuntingComponent', () => {
  let component: ViewHuntingComponent;
  let fixture: ComponentFixture<ViewHuntingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewHuntingComponent]
    });
    fixture = TestBed.createComponent(ViewHuntingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
