import { RouterModule } from '@angular/router';
import { ApiService } from './api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { TestComponent } from './test/test.component';
import { ArticleComponent } from './article/article.component';
import { HttpClientModule } from '@angular/common/http';
import { PaginatorComponent } from './paginator/paginator.component';
import { ProfileComponent } from './profile/profile.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    TestComponent,
    ArticleComponent,
    PaginatorComponent,
    ProfileComponent,
    ArticleDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
