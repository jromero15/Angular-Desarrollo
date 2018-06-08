import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TablaService {

  URL_DATOS = '/assets/data.json';
  
  constructor(private http: HttpClient) { }

  public getDatos(): Observable<any> {
    return this.http.get(this.URL_DATOS);
  }
}
