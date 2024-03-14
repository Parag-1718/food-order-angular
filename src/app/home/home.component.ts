import { Component } from '@angular/core';
import { FoodService } from '../services/food.service';
import { Foods } from '../shared/models/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
  
export class HomeComponent {

  foodsArray: Array<Foods> = [];

  constructor(
    private foodService: FoodService
  ) {
    
    this.foodsArray = this.foodService.getAllFoods();
  }
}
