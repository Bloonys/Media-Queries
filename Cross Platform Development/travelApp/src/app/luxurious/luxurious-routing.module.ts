import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LuxuriousPage } from './luxurious.page';

const routes: Routes = [
  {
    path: '',
    component: LuxuriousPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LuxuriousPageRoutingModule {}
