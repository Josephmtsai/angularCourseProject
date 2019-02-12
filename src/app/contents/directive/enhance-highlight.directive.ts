import { Directive, OnInit, Renderer2, ElementRef, HostListener } from '@angular/core';
import { MockNgModuleResolver } from '@angular/compiler/testing';

@Directive({
  selector: '[appEnHanceHighlight]'
})
export class EnHanceHighlightDirective implements OnInit {
  constructor(private renderer: Renderer2, private elRef: ElementRef) {}
  ngOnInit() {}
  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'Lime');
  }
  @HostListener('mouseleave') reset(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
  }
}
