import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';
import { MockNgModuleResolver } from '@angular/compiler/testing';

@Directive({
  selector: '[appEnHanceHighlight]'
})
export class EnHanceHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input('appEnHanceHighlight') inputColor: string = 'blue';
  @HostBinding('style.backgroundColor') background: string = this.defaultColor;
  constructor(private renderer: Renderer2, private elRef: ElementRef) {}
  ngOnInit() {}
  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.background = this.inputColor;
  }
  @HostListener('mouseleave') reset(eventData: Event) {
    this.background = this.defaultColor;
  }
}
