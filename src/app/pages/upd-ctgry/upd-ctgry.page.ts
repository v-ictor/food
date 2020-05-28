import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category';
import { ToastController } from '@ionic/angular';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-upd-ctgry',
  templateUrl: './upd-ctgry.page.html',
  styleUrls: ['./upd-ctgry.page.scss'],
})
export class UpdCtgryPage implements OnInit {
  
  update: Category;
  archivo: File;
  photoSelected: string | ArrayBuffer;

  datos: Category;
  img = null;

  constructor(private activateRoute: ActivatedRoute, private categoryService: CategoryService, public router: Router, public toastCtrl: ToastController) { }

  ngOnInit() {
    let id = this.activateRoute.snapshot.paramMap.get('id');
    this.categoryService.getCategory(id).subscribe(result => {
      this.update = result;
      this.img = 'http://localhost:3000'+this.update.imageCtgory;
      // console.log(result);
    });
    this.datos = new Category();
  }

  ionViewWillEnter(){
    let id = this.activateRoute.snapshot.paramMap.get('id');
    this.categoryService.getCategory(id).subscribe(result => {
      this.update = result;
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
    this.router.navigate(['/get-ctgry', id])
  }

  updateCt(ides){
    // console.log(this.update.description);
    // console.log(this.update.name);
    this.categoryService.updCategory(ides, this.update.name, this.update.description).subscribe((res) => {
      // console.log(res);
      this.router.navigate(['/menu/main']);
    }, err => console.log(err));
  }

  msg = null;
  updCt(ides){
    this.categoryService.updFile(ides, this.update.name, this.update.description, this.archivo).subscribe((res) => {
      // console.log(res);
      this.msg = res;
      this.presentToast(this.msg.msg);
      this.router.navigate(['/menu/gets-ctgry']);
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
