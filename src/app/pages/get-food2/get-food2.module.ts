import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetFood2PageRoutingModule } from './get-food2-routing.module';

import { GetFood2Page } from './get-food2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetFood2PageRoutingModule
  ],
  declarations: [GetFood2Page]
})
export class GetFood2PageModule {}
