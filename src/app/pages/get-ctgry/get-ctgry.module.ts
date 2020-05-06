import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetCtgryPageRoutingModule } from './get-ctgry-routing.module';

import { GetCtgryPage } from './get-ctgry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetCtgryPageRoutingModule
  ],
  declarations: [GetCtgryPage]
})
export class GetCtgryPageModule {}
