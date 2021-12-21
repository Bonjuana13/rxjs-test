import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { noop, Observable, switchMap } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoadArticles } from '../../actions/articles.actions';
import { Article } from '../../interfaces/articles';
import { articles } from '../../selectors/articles.selectors';
import { StartPointNgrxService } from './../../services/start-point-ngrx.service';

@Component({
  selector: 'app-start-point',
  templateUrl: './start-point-ngrx.component.html',
  styleUrls: ['./start-point-ngrx.component.scss']
})
export class StartPointNgrxComponent implements OnInit {
  articles$: Observable<any> = this.getStoreArticles();

  constructor(
    private startPointNgrxService: StartPointNgrxService,
    private store: Store
  ) { }

  ngOnInit(): void { }

  getArticles() {
    return this.startPointNgrxService.articles()
      .pipe(
        switchMap(articles => {
          return this.startPointNgrxService.storageFiles(articles.applicationsView.map((x: Article) => x.previewImage))
          .pipe(
            map(images => {
              let currentArticles = this.addPicturesToArticles(articles.applicationsView, images);
              this.store.dispatch(LoadArticles({ articles: currentArticles }))
              return currentArticles;
            })
          );
        }),
      ).subscribe(result => {
        noop
      });
  }

  addPicturesToArticles(articles: any[], images: any[]): Article[] {
    articles.map(el => {
      return el.previewImage = images.find(item => item.id == el.previewImage).filePath;
    });
    return articles;
  }

  getStoreArticles(): Observable<any> {
    return this.store
    .pipe(
        select(articles)
    );
  }

}
