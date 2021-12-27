import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StartPointDataComponent } from './components/start-point-data/start-point-data.component';
import { ArticleResolver } from './store/amaka-articles.resolvers';

const startPointDataRoutes: Routes = [
  {
    path: '',
    component: StartPointDataComponent,
    resolve: {
      articles: ArticleResolver
    }
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(startPointDataRoutes)
  ],
  exports: [RouterModule],
})
export class StartPointDataRoutingModule {}
