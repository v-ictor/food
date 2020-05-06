import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: '',
        redirectTo: '/menu/main',
        pathMatch: 'full'
      },
      {
        path: 'main',
        loadChildren: () => import('../main/main.module').then( m => m.MainPageModule)
      },
      {
        path: 'ins-ctgry',
        loadChildren: () => import('../ins-ctgry/ins-ctgry.module').then( m => m.InsCtgryPageModule)
      },
      {
        path: 'gets-ctgry',
        loadChildren: () => import('../gets-ctgry/gets-ctgry.module').then( m => m.GetsCtgryPageModule)
      },
      {
        path: 'ins-food',
        loadChildren: () => import('../ins-food/ins-food.module').then( m => m.InsFoodPageModule)
      },
      {
        path: 'gets-food',
        loadChildren: () => import('../gets-food/gets-food.module').then( m => m.GetsFoodPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
