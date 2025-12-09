import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElectricityBillsPage } from './electricity-bills.page';

const routes: Routes = [
  {
    path: '',
    component: ElectricityBillsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElectricityBillsPageRoutingModule {}
