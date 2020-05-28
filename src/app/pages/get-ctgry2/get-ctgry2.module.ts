import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetCtgry2PageRoutingModule } from './get-ctgry2-routing.module';

import { GetCtgry2Page } from './get-ctgry2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetCtgry2PageRoutingModule
  ],
  declarations: [GetCtgry2Page]
})
export class GetCtgry2PageModule {}
