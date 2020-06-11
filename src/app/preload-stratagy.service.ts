import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreloadStratagyService implements PreloadingStrategy {

  // PreloadingStrategy 這個 class 中，只有一個 method 就是 preload
  constructor() { }

  // preload 這個方法，又帶有兩個參數且必須 return observable
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    // 一個是 Route
    // load 是一個載入器的函示，他能非同步載入帶路由的模組
    if (route.data && route.data['preload']) {
      return load();
    } else {
      return of(null);
    }

  }
}
