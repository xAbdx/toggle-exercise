import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  constructor(
    private renderer: Renderer2,
    private elmRef: ElementRef
  ) { }

  ngOnInit() {
    this.color = 'green'
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  @HostBinding('style.color') color: string = 'red'

  private highlight(color: string) {
    this.elmRef.nativeElement.style.backgroundColor = color;
  }
}