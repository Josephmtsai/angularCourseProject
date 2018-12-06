import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeCommonComponent } from './recipe-common.component';

describe('RecipeCommonComponent', () => {
  let component: RecipeCommonComponent;
  let fixture: ComponentFixture<RecipeCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeCommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
