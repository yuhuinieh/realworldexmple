import { PaginatorComponent } from './../paginator/paginator.component';
import { ApiService } from './../api.service';
import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, shareReplay, concatMap, exhaustMap, switchMap } from 'rxjs/operators';
import { Article, RootObject } from '../article.model';
import { BehaviorSubject } from 'rxjs';
const data =  [
  {
    author: 'Eric Simons',
    avator: 'http://i.imgur.com/Qr71crq.jpg',
    publishDate: new Date(),
    title: 'How to build webapps that scale',
    desc: 'This is the description for the post.Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae reprehenderit sapiente consequatur deserunt sit quo veniam atque expedita omnis consequuntur? Numquam hic iste amet voluptates repellat ipsa velit atque architecto. ',
    link: 'profile.html',
    likes: '29'
  },
  {
    author: 'Albert Pai',
    avator: 'http://i.imgur.com/N4VcUeJ.jpg',
    publishDate: new Date(),
    title: 'The song you won\'t ever stop singing. No matter how hard you try.',
    desc: '夏季是蚊蟲大量孳生的季節，有時一覺醒來身上就多了一些腫包，完全不知道是誰夜襲你。大部分人第一時間會怪罪蚊子，但卻找不到蚊子半點蹤跡，也沒聽見嗡嗡聲，隔天還是被神秘客好好拜訪了一番。',
    link: 'profile.html',
    likes: '32'
  },
  {
    author: 'doris Pai',
    avator: 'http://i.imgur.com/N4VcUeJ.jpg',
    publishDate: new Date(),
    title: 'The song you won\'t ever stop singing. No matter how hard you try.',
    desc: '夏季是蚊蟲大量孳生的季節，有時一覺醒來身上就多了一些腫包，完全不知道是誰夜襲你。大部分人第一時間會怪罪蚊子，但卻找不到蚊子半點蹤跡，也沒聽見嗡嗡聲，隔天還是被神秘客好好拜訪了一番。',
    link: 'profile.html',
    likes: '32'
  },
  {
    author: 'lucy Pai',
    avator: 'http://i.imgur.com/N4VcUeJ.jpg',
    publishDate: new Date(),
    title: 'The song you won\'t ever stop singing. No matter how hard you try.',
    desc: '夏季是蚊蟲大量孳生的季節，有時一覺醒來身上就多了一些腫包，完全不知道是誰夜襲你。大部分人第一時間會怪罪蚊子，但卻找不到蚊子半點蹤跡，也沒聽見嗡嗡聲，隔天還是被神秘客好好拜訪了一番。',
    link: 'profile.html',
    likes: '32'
  },
  {
    author: 'ryan Pai',
    avator: 'http://i.imgur.com/N4VcUeJ.jpg',
    publishDate: new Date(),
    title: 'The song you won\'t ever stop singing. No matter how hard you try.',
    desc: '夏季是蚊蟲大量孳生的季節，有時一覺醒來身上就多了一些腫包，完全不知道是誰夜襲你。大部分人第一時間會怪罪蚊子，但卻找不到蚊子半點蹤跡，也沒聽見嗡嗡聲，隔天還是被神秘客好好拜訪了一番。',
    link: 'profile.html',
    likes: '32'
  }
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('paginator', { static: true }) paginator: PaginatorComponent;
  @ViewChildren('PaginatorComponent') paginators: QueryList<PaginatorComponent>;
  page$ = new BehaviorSubject<number>(0);

  source$ = this.page$.pipe(
    switchMap( offset => this.api.loadData({ offset })),
    shareReplay()
    // concatMap(),
    // mergeMap(),
    // exhaustMap(),
  );

  // source$ = this.api.loadData({ offset: 20 }).pipe(shareReplay());
  articles$ = this.source$.pipe(map((res: RootObject) => res.articles));
  totalCounts$ = this.source$.pipe(map((res: RootObject) => res.articlesCount));
  isPC = true;
  articles = [];

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.paginator.page$.subscribe(offset => this.page$.next(offset * 20));
    console.log(this.paginator);
    console.log(this.paginators);
  }
  addLikes(item) {
    item.favoritesCount++;
  }
  toggle() {
    this.isPC = !this.isPC;
  }

  // loadData(offset) {
  //   return this.api.loadData(offset).subscribe({
  //     next: ...
  //   });
  // }

  // pageChange(page) {
  //   this.page$.next(page * 20);
  //   // this.loadData(page * 20);
  // }
}
