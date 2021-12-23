import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

// import { map } from 'rxjs/operators';
// import { LoadArticles } from '../../actions/articles.actions';
// import { Article } from '../../interfaces/articles';
import { articles } from '../../selectors/articles.selectors';
// import { StartPointNgrxService } from './../../services/start-point-ngrx.service';

@Component({
  selector: 'app-start-point',
  templateUrl: './start-point-ngrx.component.html',
  styleUrls: ['./start-point-ngrx.component.scss']
})
export class StartPointNgrxComponent implements OnInit {
  storeArticles$: Observable<any> = this.getStoreArticles();

  constructor(
    // private startPointNgrxService: StartPointNgrxService,
    private store: Store
  ) { }

  ngOnInit(): void { }

  // getArticles(): Subscription {
  //   return this.startPointNgrxService.articles()
  //     .pipe(
  //       switchMap(resultArticles => {
  //         return this.startPointNgrxService.storageFiles(resultArticles.applicationsView.map((x: Article) => x.previewImage))
  //           .pipe(
  //             map(images => {
  //               const currentArticles = this.addPicturesToArticles(resultArticles.applicationsView, images);
  //               this.store.dispatch(LoadArticles({ articles: currentArticles }));
  //               return currentArticles;
  //             })
  //           );
  //       }),
  //     ).subscribe(result => {
  //       console.log(result);
  //     });
  // }

  // addPicturesToArticles(startArticles: any[], startImages: any[]): Article[] {
  //   startArticles.map(el => {
  //     return el.previewImage = startImages.find(item => item.id == el.previewImage).filePath;
  //   });
  //   return startArticles;
  // }

  getStoreArticles(): Observable<any> {
    return this.store
      .
      select((articles)
      );
  }

}
