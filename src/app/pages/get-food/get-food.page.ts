import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-get-food',
  templateUrl: './get-food.page.html',
  styleUrls: ['./get-food.page.scss'],
})
export class GetFoodPage implements OnInit {

  information = null;

  constructor( private activatedRoute: ActivatedRoute, private foodService: FoodService, public router: Router, private alertCtrl: AlertController) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.foodService.getFood(id).subscribe(result => {
      this.information = result;
    });
  }

  async delete(information){
    const alertElement = await this.alertCtrl.create({
      header: 'Seguro que quieres eliminar la comida.',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.foodService.delFood(information._id).subscribe(response => {
              this.router.navigate(['/menu/gets-food']);
            });
          }
        }
      ]
    });
    await alertElement.present();
  }

}
