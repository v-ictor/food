import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetFoodPageRoutingModule } from './get-food-routing.module';

import { GetFoodPage } from './get-food.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetFoodPageRoutingModule
  ],
  declarations: [GetFoodPage]
})
export class GetFoodPageModule {}
