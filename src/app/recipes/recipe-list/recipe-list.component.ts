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
  recipes: Recipe[] = [
    new Recipe('dummy1', 'dummy1', 'https://lh3.googleusercontent.com/ZWR0G9n4pgwuo41GmdNfMTPQAG7sQueDsEEgUoQ7BlB7JdLW7clGT_Vvq_k-6QXg_SFfgD1JcMYgwbmKG5yWqdpO=s96', []),
    new Recipe('dummy2', 'dummy2', 'http://csharpcorner.mindcrackerinc.netdna-cdn.com/UploadFile/8ef97c/angularjs-vs-jquery-part-2/Images/image001.png', [])
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
