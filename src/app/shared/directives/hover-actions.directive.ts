import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverActions]'
})
export class HoverActionsDirective {
  @Input() actionsSelector = '.project-actions';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    const actionsElement = this.el.nativeElement.querySelector(this.actionsSelector);
    if (actionsElement) {
      this.renderer.setStyle(actionsElement, 'opacity', '1');
      this.renderer.setStyle(actionsElement, 'visibility', 'visible');
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    const actionsElement = this.el.nativeElement.querySelector(this.actionsSelector);
    if (actionsElement) {
      this.renderer.setStyle(actionsElement, 'opacity', '0');
      this.renderer.setStyle(actionsElement, 'visibility', 'hidden');
    }
  }
}