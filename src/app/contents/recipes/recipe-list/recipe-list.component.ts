import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Recipe from '../recipe-common/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  newRecipe: Recipe = new Recipe('', '', '');
  @Input('recipes') recipes: Recipe[];
  @Output() addRecipe = new EventEmitter<Recipe>();
  @Output() changeDisplayRecipe = new EventEmitter<Recipe>();
  constructor() {}

  ngOnInit() {}
  displayDetail(recipe) {
    this.newRecipe = recipe;
  }
  onAddRecipe() {
    this.addRecipe.emit(this.newRecipe);
    this.newRecipe = new Recipe('a', 'a', 'a');
  }
  onDisplayRecipeDetail(recipe) {
    this.changeDisplayRecipe.emit(recipe);
  }
}
