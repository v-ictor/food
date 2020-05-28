import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/models/food';
import { Observable } from "rxjs";
import { Platform, ToastController } from '@ionic/angular';
import { CategoryService } from 'src/app/services/category.service';

interface HtmlInputEvent extends Event { 
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-upd-food',
  templateUrl: './upd-food.page.html',
  styleUrls: ['./upd-food.page.scss'],
})
export class UpdFoodPage implements OnInit {

  datos: Food;

  updates: Food;
  results: Observable<any>;
  archivo: File;
  photoSelected: string | ArrayBuffer;
  img = null;

  constructor(private activateRoute: ActivatedRoute, private foodService: FoodService, public router: Router, private platForm: Platform, public ctgryService: CategoryService, public toastCtrl: ToastController) { 
    this.platForm.ready().then(() => {
      this.results = ctgryService.getCategories();
    });
  }

  ngOnInit() {
    let id = this.activateRoute.snapshot.paramMap.get('id');
    this.foodService.getFood(id).subscribe(result => {
      this.updates = result;
      this.img = 'http://localhost:3000'+this.updates.imageFood;
      // console.log(result);
    });
  }

  ionViewWillEnter(){
    let id = this.activateRoute.snapshot.paramMap.get('id');
    this.foodService.getFood(id).subscribe(result => {
      this.updates = result;
      // console.log(result);
    });
  }

  onPhotoSelected(event: HtmlInputEvent): void{
    if(event.target.files && event.target.files[0]){
      this.archivo = <File>event.target.files[0];
      const reade = new FileReader();
      reade.onload = e => this.photoSelected = reade.result;
      reade.readAsDataURL(this.archivo);
    }
  }

  cancelar(id: string){
    // console.log(id);
    this.router.navigate(['/get-food', id]);
  }

  updateFd(ides){
    this.foodService.updFood(ides,this.updates.title, this.updates.description, this.updates.price, this.updates.ingredients, this.updates.category).subscribe((res) => {
      // console.log(res);
      this.router.navigate(['/menu/main']);
    }, err => console.log(err));
  }

  msg = null;
  updFoodFile(ides){
    this.foodService.updFoodFile(ides, this.updates.title, this.updates.description, this.updates.price, this.updates.ingredients, this.updates.category, this.archivo).subscribe((res) => {
      // console.log(res);
      this.msg = res;
      this.presentToast(this.msg.msg);
      this.router.navigate(['/menu/gets-food']);
    }, err => console.log(err));
  }

  async presentToast(text){
    const toast = await this.toastCtrl.create({
      message: text,
      position: 'bottom',
      duration: 1500,
      animated: true,
      color: 'success'
    });
    toast.present();
  }

}
