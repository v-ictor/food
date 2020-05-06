import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetsCtgryPageRoutingModule } from './gets-ctgry-routing.module';

import { GetsCtgryPage } from './gets-ctgry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetsCtgryPageRoutingModule
  ],
  declarations: [GetsCtgryPage]
})
export class GetsCtgryPageModule {}
