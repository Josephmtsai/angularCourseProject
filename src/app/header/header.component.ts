import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() onChangeProduct = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}
  changeProduct(product) {
    this.onChangeProduct.emit(product);
  }
}
