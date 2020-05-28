import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodService } from '../../services/food.service';
import { Food } from 'src/app/models/food';

@Component({
  selector: 'app-gets-food',
  templateUrl: './gets-food.page.html',
  styleUrls: ['./gets-food.page.scss'],
})
export class GetsFoodPage implements OnInit {

  foodsData: Food[] = [];

  constructor(public foodService: FoodService) { 
    // this.foodsData = this.foodService.getsFood();
    // console.log('olas');
    // if(this.foodsData.length > 0){
    //   console.log('Tiene comidas');
    // } else {
    //   console.log('no tiene comidas.')
    // }
  }

  ngOnInit() {
    this.foodService.getsFood().subscribe(result => {
      this.foodsData = result;
    });
  }

  ionViewWillEnter(){
    // this.foodsData = this.foodService.getsFood();
    this.foodService.getsFood().subscribe(result => {
      this.foodsData = result;
    });
  }

}
