import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'The description', 'http://la.tasteterminal.com/files/2012/02/oc-restaurant-week-meat.jpg'),
    new Recipe('A test recipe2', 'The description2', 'http://la.tasteterminal.com/files/2012/02/oc-restaurant-week-meat.jpg')
  ];

  constructor() { }

  ngOnInit() {

  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)
  }
}
