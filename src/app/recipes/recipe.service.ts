import { Injectable } from '@angular/core';
import {Recipe} from './recipe';
import {Ingredient} from '../shared';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('dummy1', 'dummy1', 'https://lh3.googleusercontent.com/ZWR0G9n4pgwuo41GmdNfMTPQAG7sQueDsEEgUoQ7BlB7JdLW7clGT_Vvq_k-6QXg_SFfgD1JcMYgwbmKG5yWqdpO=s96', [
        new Ingredient('French Fries', 2),
        new Ingredient('Pork Meat', 1),
      ]),
    new Recipe('dummy2', 'dummy2', 'http://csharpcorner.mindcrackerinc.netdna-cdn.com/UploadFile/8ef97c/angularjs-vs-jquery-part-2/Images/image001.png', [])
  ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }
}
