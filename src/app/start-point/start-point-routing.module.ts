import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StartPointComponent } from './components/start-point/start-point.component';

const startPointRoutes: Routes = [
  {
    path: '',
    component: StartPointComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(startPointRoutes)
  ],
  exports: [RouterModule]
})
export class StartPointRoutingModule {}
