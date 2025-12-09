import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BudgetFriendlyTipsPage } from './budget-friendly-tips.page';

const routes: Routes = [
  {
    path: '',
    component: BudgetFriendlyTipsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BudgetFriendlyTipsPageRoutingModule {}
