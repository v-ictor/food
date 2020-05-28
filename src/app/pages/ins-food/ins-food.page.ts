import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/models/food';
import { FoodService } from 'src/app/services/food.service';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { Observable } from "rxjs";
import { Platform, ActionSheetController } from '@ionic/angular';
import { Camera, PictureSourceType, CameraOptions } from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';

interface HtmlInputEvent extends Event{
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-ins-food',
  templateUrl: './ins-food.page.html',
  styleUrls: ['./ins-food.page.scss'],
})
export class InsFoodPage implements OnInit {

  images: string;
  archivo: File;
  photoSelected: string | ArrayBuffer;
  datos: Food;
  results: Observable<any>;

  constructor(public foodService: FoodService, public router: Router, public ctgryService: CategoryService, private platForm: Platform, private actionSheetCtrl: ActionSheetController, private camera: Camera, private webView: WebView) { 
    // this.results = this.ctgryService.getCategories();
    this.platForm.ready().then(() => {
      this.results = ctgryService.getCategories();
    })
    this.datos = new Food();
  }

  ngOnInit() {
  }

  onPhotoSelected(event: HtmlInputEvent){
    if(event.target.files && event.target.files[0]){
      this.archivo = <File>event.target.files[0];
      const reade = new FileReader();
      reade.onload = e => this.photoSelected = reade.result;
      reade.readAsDataURL(this.archivo);
    }
  }

  submitForm(){
    this.foodService.uploadFood(this.datos.title, this.datos.description, this.datos.price, this.datos.ingredients, this.datos.category, this.archivo).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/menu/gets-food']);
    }, err => console.log(err));
  }
  submitForm1(){
    console.log(this.datos.category);
  }

  async selectImage(){
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Seleccione el recurso',
      buttons: [
        {
          text: 'Abrir la Galeria',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY)
          }
        },
        {
          text: 'Tomar Foto',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA)
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel'
        }
      ]
    });
    await actionSheet.present();
  }

  // readFile(file:any){
  //   const reader = new FileReader();
  //   reader.onloadend = () => {
  //     const imgBlob = new Blob([reader.result], {
  //       type: file.type
  //     });
  //     const formData = new FormData();
  //     formData.append('name', this.datos.name);
  //     formData.append('description', this.datos.description);
  //     formData.append('file', imgBlob, file.name);
  //     this.categoryService.uploadFile(formData).subscribe(dataRes => {
  //       console.log(dataRes);
  //     });
  //   };
  //   reader.readAsArrayBuffer(file);
  // }

  takePicture(sourceType: PictureSourceType){
    var options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };
    this.camera.getPicture(options).then((imageData) => {
      this.images = this.webView.convertFileSrc(imageData);
      // this.images = 'data:image/jpeg:base64'+imageData;
      // this.file.resolveLocalFilesystemUrl(imageData).then((entry:FileEntry) => {
      //   entry.file(file => {
      //     console.log(file);
      //     this.readFile(file);
      //   });
      // });
    }, (error) => {
      console.log(error);
    });
  }

  // saveImage(){
  //   this.categoryService.createCategory(this.images, this.datos)
  // }

}
