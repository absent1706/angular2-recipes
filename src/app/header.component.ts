import { Component, OnInit } from '@angular/core';
import {Dropdown} from './dropdown.directive';

@Component({
  moduleId: module.id,
  selector: 'rb-header',
  templateUrl: 'header.component.html',
  directives: [Dropdown]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
