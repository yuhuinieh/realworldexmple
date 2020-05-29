import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit, OnChanges {

  @Input() totalCount;
  @Input() pageSize = 20;
  // @Output() pageChange = new EventEmitter<number>();

  page$ = new BehaviorSubject<number>(0);

  pages = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.totalCount) {
      this.pages = new Array(Math.ceil(changes.totalCount.currentValue / this.pageSize));
      console.log('this.pages', this.pages);
    }
  }

  setPage(num) {
    this.page$.next(num);
    // this.pageChange.emit(num);
  }

}
