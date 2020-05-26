import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../article.model';



@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input() item: Article;
  @Output() sendLikes = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  addLikes(item: Article) {
    this.sendLikes.emit(item);
  }
}
