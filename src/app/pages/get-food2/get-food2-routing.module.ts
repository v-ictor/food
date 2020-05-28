import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetFood2Page } from './get-food2.page';

const routes: Routes = [
  {
    path: '',
    component: GetFood2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetFood2PageRoutingModule {}
