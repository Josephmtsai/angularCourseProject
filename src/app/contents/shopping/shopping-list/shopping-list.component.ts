import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../../service/shopping.service';
import { Ingredient } from '../ingredient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  constructor(private shoppingService: ShoppingService) {}
  shoppingList: Ingredient[];
  ngOnInit() {
    this.shoppingList = this.shoppingService.getIngredients();
    this.shoppingService.updateIngredientEvent.subscribe(() => (this.shoppingList = this.shoppingService.getIngredients()));
  }
}
