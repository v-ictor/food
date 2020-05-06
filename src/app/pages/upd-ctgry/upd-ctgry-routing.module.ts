import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdCtgryPage } from './upd-ctgry.page';

const routes: Routes = [
  {
    path: '',
    component: UpdCtgryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdCtgryPageRoutingModule {}
