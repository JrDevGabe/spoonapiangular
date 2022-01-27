import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestrecipesComponent } from './latestrecipes.component';

describe('LatestrecipesComponent', () => {
  let component: LatestrecipesComponent;
  let fixture: ComponentFixture<LatestrecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestrecipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestrecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
