import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ShoppingService } from '../../service/shopping.service';
import { Ingredient } from '../ingredient.model';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  constructor(private shoppingService: ShoppingService) {}
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('priceInput') priceInputRef: ElementRef;
  ngOnInit() {}
  addToShoppingList() {
    this.shoppingService.addIngredients(new Ingredient(this.nameInputRef.nativeElement.value, this.priceInputRef.nativeElement.value));
  }
}
