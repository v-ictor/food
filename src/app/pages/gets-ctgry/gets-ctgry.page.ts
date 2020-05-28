import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { CategoryService } from "../../services/category.service";

@Component({
  selector: 'app-gets-ctgry',
  templateUrl: './gets-ctgry.page.html',
  styleUrls: ['./gets-ctgry.page.scss'],
})
export class GetsCtgryPage implements OnInit {

  categoriesData: any;

  constructor(public categoryService: CategoryService) { 
    // this.categoriesData = this.categoryService.getCategories();
    // this.getAllCategories();
  }

  ngOnInit() {
    // this.categoriesData = this.categoryService.getCategories();
    this.getAllCategories();
  }

  ionViewWillEnter(){
    // this.categoriesData = this.categoryService.getCategories();
    this.getAllCategories();
  }

  getAllCategories(){
    this.categoryService.getCategories().subscribe((response) => {
      // console.log(response);
      this.categoriesData = response;
    })
  }

}
