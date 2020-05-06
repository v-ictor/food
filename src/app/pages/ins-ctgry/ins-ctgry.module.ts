import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsCtgryPageRoutingModule } from './ins-ctgry-routing.module';

import { InsCtgryPage } from './ins-ctgry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsCtgryPageRoutingModule
  ],
  declarations: [InsCtgryPage]
})
export class InsCtgryPageModule {}
