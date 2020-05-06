import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdFoodPageRoutingModule } from './upd-food-routing.module';

import { UpdFoodPage } from './upd-food.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdFoodPageRoutingModule
  ],
  declarations: [UpdFoodPage]
})
export class UpdFoodPageModule {}
