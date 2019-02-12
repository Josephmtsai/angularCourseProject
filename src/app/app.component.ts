import { Component } from '@angular/core';
import { LoggingService } from './service/logging.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LoggingService]
})
export class AppComponent {
  constructor(private loggingService: LoggingService) {}
  title = 'course-project';
  selectProduct = 'recipe';
  changeSelectProduct(product) {
    this.selectProduct = product;
  }
}
