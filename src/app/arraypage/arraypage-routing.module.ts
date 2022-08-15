import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArraypagePage } from './arraypage.page';

const routes: Routes = [
  {
    path: '',
    component: ArraypagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArraypagePageRoutingModule {}
