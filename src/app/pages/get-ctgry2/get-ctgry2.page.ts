import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-get-ctgry2',
  templateUrl: './get-ctgry2.page.html',
  styleUrls: ['./get-ctgry2.page.scss'],
})
export class GetCtgry2Page implements OnInit {

  info: any[] = null;
  nameC: string;
  msg = null;

  constructor(private activatedRoute: ActivatedRoute, private categoryService: CategoryService) { }

  ngOnInit() {
    let name = this.activatedRoute.snapshot.paramMap.get('name');
    this.nameC = name;
    this.categoryService.getCtgryFood(name).subscribe(result => {
      this.info = result;
      // this.nameC = name;
    });
  }

}
