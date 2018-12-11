import { Component, OnInit } from '@angular/core';
import Recipe from '../recipe-common/recipe.model';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  recipes: Recipe[] = [new Recipe('Header', 'Description', 'http://www.sinaimg.cn/dy/slidenews/21_img/2014_47/17327_3856441_945009.jpg')];
  constructor() {}

  ngOnInit() {}
}
