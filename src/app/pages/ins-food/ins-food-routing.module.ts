import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsFoodPage } from './ins-food.page';

const routes: Routes = [
  {
    path: '',
    component: InsFoodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsFoodPageRoutingModule {}
