import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding } from '@angular/core';
import { MockNgModuleResolver } from '@angular/compiler/testing';

@Directive({
  selector: '[appEnHanceHighlight]'
})
export class EnHanceHighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') background: string = 'transparent';
  constructor(private renderer: Renderer2, private elRef: ElementRef) {}
  ngOnInit() {}
  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.background = 'Lime';
  }
  @HostListener('mouseleave') reset(eventData: Event) {
    this.background = 'transparent';
  }
}
