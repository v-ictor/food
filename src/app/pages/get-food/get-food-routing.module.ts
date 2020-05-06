import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetFoodPage } from './get-food.page';

const routes: Routes = [
  {
    path: '',
    component: GetFoodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetFoodPageRoutingModule {}
