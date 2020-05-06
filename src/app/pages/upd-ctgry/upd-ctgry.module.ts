import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdCtgryPageRoutingModule } from './upd-ctgry-routing.module';

import { UpdCtgryPage } from './upd-ctgry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdCtgryPageRoutingModule
  ],
  declarations: [UpdCtgryPage]
})
export class UpdCtgryPageModule {}
