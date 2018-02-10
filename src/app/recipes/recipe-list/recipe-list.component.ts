import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'The description', 'http://la.tasteterminal.com/files/2012/02/oc-restaurant-week-meat.jpg'),
    new Recipe('A test recipe', 'The description', 'http://la.tasteterminal.com/files/2012/02/oc-restaurant-week-meat.jpg')
  ];

  constructor() { }

  ngOnInit() {
    console.log(this.recipes)
  }

}
