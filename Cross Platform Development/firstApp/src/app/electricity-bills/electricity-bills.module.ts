import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElectricityBillsPageRoutingModule } from './electricity-bills-routing.module';

import { ElectricityBillsPage } from './electricity-bills.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElectricityBillsPageRoutingModule
  ],
  declarations: [ElectricityBillsPage]
})
export class ElectricityBillsPageModule {}
