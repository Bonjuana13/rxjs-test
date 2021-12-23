import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleResolver } from './resolvers/articles.resolvers';
import { StartPointNgrxComponent } from './components/start-point-ngrx/start-point-ngrx.component';

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
