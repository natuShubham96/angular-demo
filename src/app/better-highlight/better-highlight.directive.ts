import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor: string;
  @Input() highlightColor: string;
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background', 'red')
  }

  @HostListener('mouseenter') mouseOver(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background', 'red')
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background', 'green')
    this.backgroundColor = this.defaultColor;
  }
}
