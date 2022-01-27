import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentMealComponent } from './recent-meal.component';

describe('RecentMealComponent', () => {
  let component: RecentMealComponent;
  let fixture: ComponentFixture<RecentMealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentMealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
