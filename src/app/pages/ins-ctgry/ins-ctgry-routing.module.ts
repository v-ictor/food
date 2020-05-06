import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsCtgryPage } from './ins-ctgry.page';

const routes: Routes = [
  {
    path: '',
    component: InsCtgryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsCtgryPageRoutingModule {}
