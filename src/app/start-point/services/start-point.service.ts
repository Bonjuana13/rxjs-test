import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StartPointService {

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<any> {
    return this.http.get<any>('https://gorest.co.in/public/v1/users');
  }

  filterUsers(status: string, email: string): Observable<any> {
    let params: HttpParams = new HttpParams();
    params = params.append('status', status);
    params = params.append('email', email);
    return this.http.get<any>('https://gorest.co.in/public/v1/users', { params });
  }

}
