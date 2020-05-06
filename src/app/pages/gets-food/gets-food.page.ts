import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodService } from '../../services/food.service';


@Component({
  selector: 'app-gets-food',
  templateUrl: './gets-food.page.html',
  styleUrls: ['./gets-food.page.scss'],
})
export class GetsFoodPage implements OnInit {

  foodsData: Observable<any>;

  constructor(public foodService: FoodService) { 
    this.foodsData = this.foodService.getsFood();
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.foodsData = this.foodService.getsFood();
  }

}
