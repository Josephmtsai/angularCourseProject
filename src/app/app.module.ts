import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeDetailComponent } from './contents/recipes/recipe-detail/recipe-detail.component';
import { RecipeCommonComponent } from './contents/recipes/recipe-common/recipe-common.component';
import { RecipeListComponent } from './contents/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './contents/recipes/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './contents/shopping/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './contents/shopping/shopping-edit/shopping-edit.component';
import { EnHanceHighlightDirective } from './contents/directive/enhance-highlight.directive';
import { UnlessDirective } from './contents/directive/unless.directive';
import { DropdownDirective } from './contents/directive/dropdown.directive';
import { RecipeService } from './contents/service/recipe.service';
import { LoggingService } from './contents/service/logging.service';

const routingModule: Routes = [
  { path: '', redirectTo: '/recipe', pathMatch: 'full' }
  { path: 'recipe', component: RecipeCommonComponent },
  { path: 'recipe/:id', component: RecipeCommonComponent },
  { path: 'shop', component: ShoppingListComponent }
];
@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    RecipeDetailComponent,
    RecipeCommonComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    EnHanceHighlightDirective,
    UnlessDirective,
    DropdownDirective
  ],
  imports: [BrowserModule, RouterModule.forRoot(routingModule), FormsModule],
  providers: [RecipeService, LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule {}
