import { Component, Input } from '@angular/core';

@Component({
  selector: 'contents-component',
  templateUrl: './contents.component.html'
})
export class contentsComponent {
  @Input() currentProduct: string;
}
