import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DefaultDataService, HttpUrlGenerator } from "@ngrx/data";
import { map, Observable, switchMap } from "rxjs";
import { environment } from "src/environments/environment";
import { Article } from "../interfaces/articles";
import { StorageFile } from "../interfaces/storage";

@Injectable()
export class ArticleDataService extends DefaultDataService<Article> {

  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('Article', http, httpUrlGenerator)
  }

  override getAll(): Observable<Article[]> {
    return this.http.get(environment.apiUrl + 'articles/list')
    .pipe(
      map((res: any) => res["applicationsView"]),
      switchMap(internalArticles => {
        return this.getImages(internalArticles.map((x: Article) => x.previewImage))
        .pipe(
          map(images => {
            const art = this.addPicturesToArticles(internalArticles, images);
            return art;
          })
        );
      })
    )
  }

  getImages(ids: string[]): Observable<StorageFile[]> {
    let params = new HttpParams();
    ids.forEach((id:string) => {
      params = params.append('ids', id);
    });
    return this.http.get<Array<StorageFile>>(`${environment.apiUrl}storage/list`, { params });
  }

  addPicturesToArticles(startArticles: any[], startImages: any[]): Article[] {
    startArticles.map(el => {
      return el.previewImage = startImages.find(item => item.id == el.previewImage).filePath;
    });
    return startArticles;
  }

}
