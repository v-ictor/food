import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full'
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  
  // {
  //   path: 'ins-ctgry',
  //   loadChildren: () => import('./pages/ins-ctgry/ins-ctgry.module').then( m => m.InsCtgryPageModule)
  // },
  // {
  //   path: 'gets-ctgry',
  //   loadChildren: () => import('./pages/gets-ctgry/gets-ctgry.module').then( m => m.GetsCtgryPageModule)
  // },
  {
    path: 'get-ctgry/:id',
    loadChildren: () => import('./pages/get-ctgry/get-ctgry.module').then( m => m.GetCtgryPageModule)
  },
  {
    path: 'upd-ctgry/:id',
    loadChildren: () => import('./pages/upd-ctgry/upd-ctgry.module').then( m => m.UpdCtgryPageModule)
  },
  // {
  //   path: 'ins-food',
  //   loadChildren: () => import('./pages/ins-food/ins-food.module').then( m => m.InsFoodPageModule)
  // },
  // {
  //   path: 'gets-food',
  //   loadChildren: () => import('./pages/gets-food/gets-food.module').then( m => m.GetsFoodPageModule)
  // },
  {
    path: 'get-food/:id',
    loadChildren: () => import('./pages/get-food/get-food.module').then( m => m.GetFoodPageModule)
  },
  {
    path: 'upd-food/:id',
    loadChildren: () => import('./pages/upd-food/upd-food.module').then( m => m.UpdFoodPageModule)
  },
  {
    path: 'get-food2/:id',
    loadChildren: () => import('./pages/get-food2/get-food2.module').then( m => m.GetFood2PageModule)
  },
  {
    path: 'get-ctgry2/:name',
    loadChildren: () => import('./pages/get-ctgry2/get-ctgry2.module').then( m => m.GetCtgry2PageModule)
  },

  // {
  //   path: 'main',
  //   loadChildren: () => import('./pages/main/main.module').then( m => m.MainPageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
