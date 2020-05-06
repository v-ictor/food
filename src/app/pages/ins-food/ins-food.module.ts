import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsFoodPageRoutingModule } from './ins-food-routing.module';

import { InsFoodPage } from './ins-food.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsFoodPageRoutingModule
  ],
  declarations: [InsFoodPage]
})
export class InsFoodPageModule {}
