import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/models/food';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  // foods = null;
  foods: Food[] = [];
  textoBuscar = '';

  constructor(private foodService: FoodService) { }

  ngOnInit() {
    this.foodService.getsFoodEnab().subscribe(result => {
      this.foods = result;
    })
  }

  ionViewWillEnter(){
    this.foodService.getsFoodEnab().subscribe(result => {
      this.foods = result;
    })
  }

  buscarComida(event){
    const texto = event.target.value;
    this.textoBuscar = texto
  }

}
