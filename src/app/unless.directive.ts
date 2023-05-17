import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean) {
    if(!condition) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }

  } //It is property binded, the set method is called everytime the value changes

  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) { }
  // TemplateRef refers to the template/element which we want to render and ViewContainerRef refers to the view in which we want the template to render
}
