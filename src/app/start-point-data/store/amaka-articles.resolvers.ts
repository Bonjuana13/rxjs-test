import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Article } from '../interfaces/articles';
import { ArticleEntityService } from '../services/articles-entity.service';

@Injectable()
export class ArticleResolver implements Resolve<any> {

  constructor(private articleEntityService: ArticleEntityService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Article[]> {

    return this.articleEntityService.getAll()
      .pipe(
        map((x: any) => x.applicationsView)
      );

  }

}
