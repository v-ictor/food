import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { CategoryService } from "../../services/category.service";

@Component({
  selector: 'app-gets-ctgry',
  templateUrl: './gets-ctgry.page.html',
  styleUrls: ['./gets-ctgry.page.scss'],
})
export class GetsCtgryPage implements OnInit {

  categoriesData: Observable<any>;

  constructor(public categoryService: CategoryService) { 
    this.categoriesData = this.categoryService.getCategories();
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.categoriesData = this.categoryService.getCategories();
  }

  // getAllCategories(){
  //   this.categoryService.getCategories().subscribe(response => {
  //     console.log(response);
  //     this.categoriesData = response;
  //   })
  // }

}
