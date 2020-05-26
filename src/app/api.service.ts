import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RootObject } from './article.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'https://conduit.productionready.io';
  constructor(private http: HttpClient) { }

  loadData() {
    return this.http.get<RootObject>(`${this.baseUrl}/api/articles`)
    .pipe(
      map((res) => {
        res.articles.forEach(item => {
          item.createdAt = new Date(item.createdAt);
        });
        return res;
      }),
    );
  }
}
