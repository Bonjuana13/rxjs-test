import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { filter, finalize, first, tap } from 'rxjs/operators';
import { loadAllArticles } from './../actions/articles.actions';
import { articles } from './../selectors/articles.selectors';


@Injectable()
export class ArticleResolver implements Resolve<any> {

  constructor(private store: Store) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

      return this.store
          .pipe(
              select(articles),
              tap(coursesLoaded => {
                this.store.dispatch(loadAllArticles());
              }),
              first()
          );

  }

}
