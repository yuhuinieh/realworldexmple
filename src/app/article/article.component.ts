import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../article.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input() item: Article;
  @Output() sendLikes = new EventEmitter();
  constructor(private router: Router) { }

  ngOnInit() {
  }
  addLikes(item: Article) {
    this.sendLikes.emit(item);
  }

  goto(username) {
    this.router.navigate(['/profile', username]);
  }
}
