import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { AlertController, ToastController } from '@ionic/angular';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-get-ctgry',
  templateUrl: './get-ctgry.page.html',
  styleUrls: ['./get-ctgry.page.scss'],
})
export class GetCtgryPage implements OnInit {

  information = null;

  constructor( private activatedRoute: ActivatedRoute, private categoryService: CategoryService, public router: Router, private alertCtrl: AlertController, public toastCtrl: ToastController) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.categoryService.getCategory(id).subscribe(result => {
      this.information = result;
    });
  }

  async delete(ides){
    const alertElement = await this.alertCtrl.create({
      header: 'Seguro que quieres eliminar la categoria.',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.categoryService.delCategory(ides).subscribe(response => {
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
    this.categoryService.enableCtgry(ides).subscribe(res => {
      this.msg = res;
      this.presentToast(this.msg.msg);
    });//.unsubscribe();
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
