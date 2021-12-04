import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'task',
    loadChildren: () => import('./task/task.module').then(m => m.TaskModule)
  },
  {
    path: 'start-point',
    loadChildren: () => import('./start-point/start-point.module').then(m => m.StartPointModule)
  },
  {
    path: '**', redirectTo: '/task', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
