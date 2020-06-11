import { ArticleDetailComponent } from './../article-detail/article-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';


@NgModule({
  declarations: [
    ArticleDetailComponent
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule
  ]
})
export class ArticlesModule { }
