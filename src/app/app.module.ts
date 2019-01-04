import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { contentsComponent } from './contents/contents.component';
import { HeaderComponent } from './header/header.component';
import { RecipeDetailComponent } from './contents/recipes/recipe-detail/recipe-detail.component';
import { RecipeCommonComponent } from './contents/recipes/recipe-common/recipe-common.component';
import { RecipeListComponent } from './contents/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './contents/recipes/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './contents/shopping/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './contents/shopping/shopping-edit/shopping-edit.component';
@NgModule({
  declarations: [AppComponent, contentsComponent, HeaderComponent, RecipeDetailComponent, RecipeCommonComponent, RecipeListComponent, RecipeItemComponent, ShoppingListComponent, ShoppingEditComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
