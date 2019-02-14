import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shopping/ingredient.model';
@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  private ingredients: Ingredient[] = [new Ingredient('Apple', 5), new Ingredient('Banana', 20), new Ingredient('Tomatoes', 35)];
  updateIngredientEvent = new EventEmitter<any>();
  getIngredients() {
    return this.ingredients.slice();
  }
  addIngredients(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.updateIngredientEvent.emit();
  }
}
