import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  //providers: [LoggingService]
})
export class AppComponent {
  //constructor(private loggingService: LoggingService) {}
  title = 'course-project';
}
