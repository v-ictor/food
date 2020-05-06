import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetsFoodPage } from './gets-food.page';

const routes: Routes = [
  {
    path: '',
    component: GetsFoodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetsFoodPageRoutingModule {}
