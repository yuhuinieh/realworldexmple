import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RootObject } from './article.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'https://conduit.productionready.io';
  constructor(private http: HttpClient) { }

  loadData({ offset }) {
    // const params = new HttpParams({fromString: `limit=20&offset=0`});
    // const params = new HttpParams().set('limit', '20').set('offset', '0');

    let params = new HttpParams();
    params = params.set('limit', '20');
    params = params.set('offset', offset);

    // console.log('params', params.toString());

    // angular 5.x 之後就可以這樣寫
    // const params = {
    //   limit: '20',
    //   offset: '0'
    // };

    // ${this.baseUrl}/api/articles?limit=20&offset=0
    return this.http.get<RootObject>(`${this.baseUrl}/api/articles`, { params })
    .pipe(
      map((res) => {
        res.articles.forEach(item => {
          item.createdAt = new Date(item.createdAt);
        });
        return res;
      }),
    );

  }

  getProfile(username) {
    // GET /api/profiles/:username
    return this.http.get(`${this.baseUrl}/api/profiles/${username}`);
  }
}
