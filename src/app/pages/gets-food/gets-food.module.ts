import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetsFoodPageRoutingModule } from './gets-food-routing.module';

import { GetsFoodPage } from './gets-food.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetsFoodPageRoutingModule
  ],
  declarations: [GetsFoodPage]
})
export class GetsFoodPageModule {}
