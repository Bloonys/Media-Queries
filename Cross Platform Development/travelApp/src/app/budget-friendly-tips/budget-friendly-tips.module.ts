import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BudgetFriendlyTipsPageRoutingModule } from './budget-friendly-tips-routing.module';

import { BudgetFriendlyTipsPage } from './budget-friendly-tips.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BudgetFriendlyTipsPageRoutingModule
  ],
  declarations: [BudgetFriendlyTipsPage]
})
export class BudgetFriendlyTipsPageModule {}
