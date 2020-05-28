import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-get-food',
  templateUrl: './get-food.page.html',
  styleUrls: ['./get-food.page.scss'],
})
export class GetFoodPage implements OnInit {

  information = null;

  constructor( private activatedRoute: ActivatedRoute, private foodService: FoodService, public router: Router, private alertCtrl: AlertController, public toastCtrl: ToastController) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.foodService.getFood(id).subscribe(result => {
      this.information = result;
    });
  }

  async delete(ides){
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
            this.foodService.delFood(ides).subscribe(response => {
              this.router.navigate(['/menu/main']);
            });
          }
        }
      ]
    });
    await alertElement.present();
  }

  msg = null;
  async enabled(ides){
    this.foodService.enableFood(ides).subscribe((res) => {
      this.msg = res;
      this.presentToast(this.msg.msg);
    })//.unsubscribe();
  }

  async presentToast(text){
    const toast = await this.toastCtrl.create({
      message: text,
      position: 'bottom',
      duration: 1000
    });
    toast.present();
  }

}
