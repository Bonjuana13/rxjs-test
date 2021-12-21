import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StorageFile } from '../interfaces/storage';
import { Article } from '../interfaces/articles';

@Injectable({
  providedIn: 'root'
})
export class StartPointNgrxService {

  constructor(
    private http: HttpClient
  ) { }

  articles(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}articles/list`);
  }

  storageFiles(ids: string[]): Observable<Array<StorageFile>> {
    let params = new HttpParams();
    ids.forEach((id:string, index: number) => {
      params = params.append(`ids`, id);
    });
    return this.http.get<Array<StorageFile>>(`${environment.apiUrl}storage/list`, { params });
  }

}
