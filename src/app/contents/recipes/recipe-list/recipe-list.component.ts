import { Component, OnInit } from '@angular/core';
import Recipe from '../recipe-common/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [new Recipe('Header', 'Description', 'http://www.sinaimg.cn/dy/slidenews/21_img/2014_47/17327_3856441_945009.jpg')];
  constructor() {}

  ngOnInit() {}
}
