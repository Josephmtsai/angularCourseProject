import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';
import Recipe from '../recipe-common/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  newRecipe: Recipe = new Recipe('', '', '');
  @Input('recipes') recipes: Recipe[];
  @Output() addRecipe = new EventEmitter<Recipe>();
  @Output() changeDisplayRecipe = new EventEmitter<Recipe>();
  constructor() {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
    console.log(changes);
  }
  ngDoCheck() {
    console.log('ngDoCheck');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
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
