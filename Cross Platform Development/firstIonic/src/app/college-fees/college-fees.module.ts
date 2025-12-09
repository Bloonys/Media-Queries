import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CollegeFeesPageRoutingModule } from './college-fees-routing.module';

import { CollegeFeesPage } from './college-fees.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CollegeFeesPageRoutingModule
  ],
  declarations: [CollegeFeesPage]
})
export class CollegeFeesPageModule {}
