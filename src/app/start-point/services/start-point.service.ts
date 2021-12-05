import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StartPointService {

  constructor(
    private http: HttpClient
  ) { }

  filteredUsers(status: string, email: string): Observable<any> {
    let params: HttpParams = new HttpParams();
    params = params.append('status', status);
    params = params.append('email', email);
    return this.http.get<any>('https://gorest.co.in/public/v1/users', { params });
  }

}
