import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StartPointNgrxComponent } from './components/start-point-ngrx/start-point-ngrx.component';
import { ArticleResolver } from './resolvers/articles.resolvers';

const startPointNgrxRoutes: Routes = [
  {
    path: '',
    component: StartPointNgrxComponent,
    resolve: {
      courses: ArticleResolver
    }
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(startPointNgrxRoutes)
  ],
  exports: [RouterModule],
  providers: [ArticleResolver]
})
export class StartPointNgrxRoutingModule {}
