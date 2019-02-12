import Recipe from '../recipe-common/recipe.model';
export class recipeService {
  recipes: Recipe[] = [
    new Recipe('Header', 'Description', 'http://www.sinaimg.cn/dy/slidenews/21_img/2014_47/17327_3856441_945009.jpg'),
    new Recipe('salor moon', 'セーラーマーズ', 'http://blog-imgs-63.fc2.com/t/e/a/teamssw/hr140426i.jpg'),
    new Recipe('salor moon', 'セーラーム', 'https://pbs.twimg.com/media/DV5Zg1mVMAAFRlN.jpg')
  ];
  currentRecipe: Recipe;
  onRecipeAdded(eventData: Recipe) {
    this.recipes.push(eventData);
  }
  onCurrentRecipeChanged(eventData: Recipe) {
    this.currentRecipe = eventData;
  }
}