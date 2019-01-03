import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'course-project';
  selectProduct = 'recipe';
  changeSelectProduct(product) {
    this.selectProduct = product;
  }
}
