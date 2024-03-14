import { Injectable } from '@angular/core';
import { Foods } from '../shared/models/food';

@Injectable({
  providedIn: 'root'
})
  
export class FoodService {

  

  constructor() { }


  getAllFoods(): Foods[] {
    return [
      {
        id: 1,
        price: 10,
        name: 'Biryani',
        favorite: true,
        star: 3.5,
        tags: ['spicy', 'rice'],
        imageUrl: '/assets/Biryani.jpeg',
        cookTime: '1 hour',
        origin: ['India', 'Pakistan']
      },
      {
        id: 2,
        price: 8,
        name: 'Burgers',
        favorite: false,
        star: 3,
        tags: ['fast food'],
        imageUrl: '/assets/Burgers.jpeg',
        cookTime: '30 minutes',
        origin: ['United States']
      },
      {
        id: 3,
        price: 15,
        name: 'Chocolate Cake',
        favorite: false,
        star: 2,
        tags: ['dessert', 'chocolate'],
        imageUrl: '/assets/ChocolateCake.jpeg',
        cookTime: '45 minutes',
        origin: ['Worldwide']
      },
      {
        id: 4,
        price: 12,
        name: 'Pasta',
        favorite: true,
        star: 3.5,
        tags: ['Italian', 'pasta'],
        imageUrl: '/assets/Pasta.jpeg',
        cookTime: '20 minutes',
        origin: ['Italy']
      },
      {
        id: 5,
        price: 6,
        name: 'Pav Bhaji',
        favorite: false,
        star: 4,
        tags: ['Indian', 'street food'],
        imageUrl: '/assets/PavBhaji.jpeg',
        cookTime: '45 minutes',
        origin: ['India']
      },
      {
        id: 6,
        price: 9,
        name: 'Pizza',
        favorite: false,
        star: 4,
        tags: ['Italian', 'fast food'],
        imageUrl: '/assets/pizza.jpeg',
        cookTime: '30 minutes',
        origin: ['Italy']
      },
      {
        id: 7,
        price: 7,
        name: 'Salad',
        favorite: false,
        star: 2,
        tags: ['healthy', 'veggies'],
        imageUrl: '/assets/Salad.jpeg',
        cookTime: '10 minutes',
        origin: ['Worldwide']
      },
      {
        id: 8,
        price: 4,
        name: 'Samosa',
        favorite: false,
        star: 3,
        tags: ['Indian', 'snack'],
        imageUrl: '/assets/Samosa.jpeg',
        cookTime: '30 minutes',
        origin: ['India']
      },
      {
        id: 9,
        price: 12,
        name: 'Sushi',
        favorite: false,
        star: 2.5,
        tags: ['Japanese', 'seafood'],
        imageUrl: '/assets/Sushi.jpeg',
        cookTime: '1 hour',
        origin: ['Japan']
      },
      {
        id: 10,
        price: 8,
        name: 'Tacos',
        favorite: false,
        star: 2,
        tags: ['Mexican', 'street food'],
        imageUrl: '/assets/Tacos.jpeg',
        cookTime: '30 minutes',
        origin: ['Mexico']
      }

    ]
  }

}
