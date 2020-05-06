import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetCtgryPage } from './get-ctgry.page';

const routes: Routes = [
  {
    path: '',
    component: GetCtgryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetCtgryPageRoutingModule {}
