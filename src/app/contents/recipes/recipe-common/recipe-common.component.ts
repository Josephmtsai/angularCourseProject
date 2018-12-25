import { Component, OnInit } from '@angular/core';
import Recipe from '../recipe-common/recipe.model';
@Component({
  selector: 'app-recipe-common',
  templateUrl: './recipe-common.component.html',
  styleUrls: ['./recipe-common.component.scss']
})
export class RecipeCommonComponent implements OnInit {
  recipes: Recipe[] = [new Recipe('Header', 'Description', 'http://www.sinaimg.cn/dy/slidenews/21_img/2014_47/17327_3856441_945009.jpg')];
  currentRecipe: Recipe = new Recipe('', '', '');
  constructor() {}
  onRecipeAdded(eventData: Recipe) {
    this.recipes.push(eventData);
  }
  onCurrentRecipeChanged(eventData: Recipe) {
    this.currentRecipe = eventData;
  }
  ngOnInit() {}
}
