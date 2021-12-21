import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StartPointNgrxComponent } from './components/start-point-ngrx/start-point-ngrx.component';

const startPointNgrxRoutes: Routes = [
  {
    path: '',
    component: StartPointNgrxComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(startPointNgrxRoutes)
  ],
  exports: [RouterModule]
})
export class StartPointNgrxRoutingModule {}
