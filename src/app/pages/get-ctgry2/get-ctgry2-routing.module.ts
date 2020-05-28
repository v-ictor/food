import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetCtgry2Page } from './get-ctgry2.page';

const routes: Routes = [
  {
    path: '',
    component: GetCtgry2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetCtgry2PageRoutingModule {}
