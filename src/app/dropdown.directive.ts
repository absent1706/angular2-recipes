import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[rbDropdown]'
})
export class Dropdown {
  private isOpen = false;

  @HostBinding('class.open') get opened() {
    return this.isOpen;
  }

  @HostListener('mouseenter') mouseenter() {
    this.isOpen = true;
  }

  @HostListener('mouseleave') mouseleave() {
    this.isOpen = false;
  }

  constructor() { }

}
