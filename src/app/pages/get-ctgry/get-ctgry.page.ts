import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-get-ctgry',
  templateUrl: './get-ctgry.page.html',
  styleUrls: ['./get-ctgry.page.scss'],
})
export class GetCtgryPage implements OnInit {

  information = null;

  constructor( private activatedRoute: ActivatedRoute, private categoryService: CategoryService, public router: Router, private alertCtrl: AlertController) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.categoryService.getCategory(id).subscribe(result => {
      this.information = result;
    });
  }

  async delete(information){
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
            this.categoryService.delCategory(information._id).subscribe(response => {
              this.router.navigate(['/menu/gets-ctgry']);
            });
          }
        }
      ]
    });
    await alertElement.present();
  }

}
