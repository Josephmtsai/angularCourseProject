import { Component, OnInit } from '@angular/core';
import Recipe from '../recipe-common/recipe.model';
import { RecipeService } from '../../service/recipe.service';
@Component({
  selector: 'app-recipe-common',
  templateUrl: './recipe-common.component.html',
  styleUrls: ['./recipe-common.component.scss']
})
export class RecipeCommonComponent implements OnInit {
  recipes: Recipe[] = this.recipeService.recipes;
  currentRecipe: Recipe;
  constructor(private recipeService: RecipeService) {
    this.currentRecipe = this.recipeService.currentRecipe;
    this.recipes = this.recipeService.recipes;
    this.recipeService.currentRecipeUpdate.subscribe((recipe: Recipe) => (this.currentRecipe = recipe));
  }
  onRecipeAdded(eventData: Recipe) {
    this.recipeService.onRecipeAdded(eventData);
  }
  ngOnInit() {}
  onCurrentRecipeChanged(eventData: Recipe) {
    this.recipeService.onCurrentRecipeChanged(eventData);
  }
}
