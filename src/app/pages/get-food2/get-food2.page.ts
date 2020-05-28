import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/models/food';

@Component({
  selector: 'app-get-food2',
  templateUrl: './get-food2.page.html',
  styleUrls: ['./get-food2.page.scss'],
})
export class GetFood2Page implements OnInit {

  // information = null;
  information: Food = null;

  constructor(private activatedRoute: ActivatedRoute, private foodService: FoodService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.foodService.getFood(id).subscribe(result => {
      this.information = result;
    });
  }

  orderFood(){
    console.log(`Ha hecho un pedido ${this.information.title}`);
  }

}
