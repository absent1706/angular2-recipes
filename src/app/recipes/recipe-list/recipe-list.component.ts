import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Recipe} from '../recipe';
import {RecipeItemComponent} from './recipe-item.component';

@Component({
  moduleId: module.id,
  selector: 'rb-recipe-list',
  templateUrl: 'recipe-list.component.html',
  directives: [RecipeItemComponent]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipe = new Recipe('dummy', 'dummy', 'https://lh3.googleusercontent.com/ZWR0G9n4pgwuo41GmdNfMTPQAG7sQueDsEEgUoQ7BlB7JdLW7clGT_Vvq_k-6QXg_SFfgD1JcMYgwbmKG5yWqdpO=s96')
  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
