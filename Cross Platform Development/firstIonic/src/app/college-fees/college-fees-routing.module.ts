import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollegeFeesPage } from './college-fees.page';

const routes: Routes = [
  {
    path: '',
    component: CollegeFeesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollegeFeesPageRoutingModule {}
