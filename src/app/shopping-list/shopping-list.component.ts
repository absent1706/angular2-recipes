import { Component, OnInit } from '@angular/core';
import {ShoppingListAddComponent} from './shopping-list-add.component';
import {Highlight} from './highlight.directive';
import {Ingredient} from '../shared';

@Component({
  moduleId: module.id,
  selector: 'rb-shopping-list',
  templateUrl: 'shopping-list.component.html',
  directives: [ShoppingListAddComponent, Highlight]
})
export class ShoppingListComponent implements OnInit {
  items: Ingredient[] = [];
  constructor() { }

  ngOnInit() {
  }

}
