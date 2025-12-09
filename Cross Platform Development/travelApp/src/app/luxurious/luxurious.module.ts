import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LuxuriousPageRoutingModule } from './luxurious-routing.module';

import { LuxuriousPage } from './luxurious.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LuxuriousPageRoutingModule
  ],
  declarations: [LuxuriousPage]
})
export class LuxuriousPageModule {}
