import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetsCtgryPage } from './gets-ctgry.page';

const routes: Routes = [
  {
    path: '',
    component: GetsCtgryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetsCtgryPageRoutingModule {}
