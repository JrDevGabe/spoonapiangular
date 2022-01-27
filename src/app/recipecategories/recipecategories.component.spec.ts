import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipecategoriesComponent } from './recipecategories.component';

describe('RecipecategoriesComponent', () => {
  let component: RecipecategoriesComponent;
  let fixture: ComponentFixture<RecipecategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipecategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipecategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
