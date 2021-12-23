import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ActionTypes } from './../../action.types';
import { concatMap, first, map, switchMap, tap } from 'rxjs/operators';
import { StartPointNgrxService } from '../../services/start-point-ngrx.service';
import { Article } from '../../interfaces/articles';
import { SaveArticles } from '../../actions/articles.actions';

@Injectable()
export class ArticleEffects {
    getArticles$ = createEffect(() =>
        this.actions$
            .pipe(
                ofType(ActionTypes.loadAllArticles),
                concatMap(res => this.startPointNgrxService.articles()
                  .pipe(
                    switchMap(resultArticles => {
                      console.log(resultArticles);
                      return this.startPointNgrxService.storageFiles(resultArticles.applicationsView.map((x: Article) => x.previewImage))
                      .pipe(
                        map(images => {
                          let currentArticles = this.addPicturesToArticles(resultArticles.applicationsView, images);
                          console.log(currentArticles);
                          return currentArticles;
                        })
                      );
                    })
                  )
                ),
                map(art => SaveArticles({articles: art}))


                // tap(result => {
                //   console.log(result);
                //   this.startPointNgrxService.articles()
                //   .pipe(
                //     switchMap(resultArticles => {
                //       console.log(resultArticles);
                      // return this.startPointNgrxService.storageFiles(resultArticles.articles.map((x: Article) => x.previewImage))
                      // .pipe(
                      //   map(images => {
                      //     let currentArticles = this.addPicturesToArticles(resultArticles.articles, images);
                      //     console.log(currentArticles);
                      //     SaveArticles({articles: currentArticles});
                      //   })
                      // );
                //     })
                //   )
                // }),
                // first()
            ));

  constructor(
    private actions$: Actions,
    private startPointNgrxService: StartPointNgrxService,
  ) { }

  addPicturesToArticles(startArticles: any[], startImages: any[]): Article[] {
    startArticles.map(el => {
      return el.previewImage = startImages.find(item => item.id == el.previewImage).filePath;
    });
    return startArticles;
  }
}
