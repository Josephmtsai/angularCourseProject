import Recipe from '../recipes/recipe-common/recipe.model';
import { LoggingService } from './logging.service';
import { Injectable, EventEmitter } from '@angular/core';
@Injectable()
export class RecipeService {
  recipes: Recipe[] = [
    new Recipe('Header', 'Description', 'http://www.kanahei.com/upload/2018/04/1_k_1920_1200.jpg'),
    new Recipe('K1', '12', 'http://www.kanahei.com/upload/2017/12/2_k_1920_1200.jpg'),
    new Recipe('K2', '2', 'http://www.kanahei.com/upload/2019/01/2_k_1920_1200.jpg')
  ];
  currentRecipe: Recipe;
  constructor(private loggingService: LoggingService) {}
  onRecipeAdded(eventData: Recipe) {
    this.recipes.push(eventData);
    this.loggingService.logStatusChange('Add new Item');
  }
  currentRecipeUpdate = new EventEmitter<Recipe>();

  onCurrentRecipeChanged(eventData: Recipe) {
    this.currentRecipe = eventData;
    this.loggingService.logStatusChange('Change Select Item');
    this.currentRecipeUpdate.emit(eventData);
  }
}
