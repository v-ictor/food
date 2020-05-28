import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  information: Category[] = [];
  textoBuscar = '';
  
  constructor(private categoryService: CategoryService) {}

  ngOnInit(){
    this.categoryService.getCatEnab().subscribe(result => {
      this.information = result;
    });
  }
  
  ionViewWillEnter(){
    this.categoryService.getCatEnab().subscribe(result => {
      this.information = result;
    });
  }

  buscarCategoria(event){
    const texto = event.target.value;
    this.textoBuscar = texto;
  }

}
