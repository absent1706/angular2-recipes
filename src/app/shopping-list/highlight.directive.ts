import { Directive, HostListener, HostBinding, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class Highlight {

  @HostListener('mouseenter') mouseenter() {
    this.backgroundColor = this.highlightColor;
  };

  @HostListener('mouseleave') mouseleave() {
    this.backgroundColor = this.defaultColor;
  };

  @HostBinding('style.backgroundColor') get bgColor() {
    return this.backgroundColor;
  }

  @Input() defaultColor = 'white';
  @Input('highlight') highlightColor = 'green';
  private backgroundColor: string;

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }
}
