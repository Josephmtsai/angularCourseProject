import { Component, OnInit, Input } from '@angular/core';
import Recipe from '../recipe-common/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  @Input('inputElement') recipe: Recipe;
  constructor() {}

  ngOnInit() {}
}
