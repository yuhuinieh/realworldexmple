import { ProfileResolveService } from './profile/profile-resolve.service';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { PreloadStratagyService } from './preload-stratagy.service';


const routes: Routes = [
  { path: 'profile/:username',
    component: ProfileComponent,
    resolve: { profileData: ProfileResolveService },
    data: { token: '2k3l232i3234934'}
  },
  {
    path: 'article',
    loadChildren: () => import('./articles/articles.module').then(m => m.ArticlesModule),
    data: { preload: true }
},
  // {path: 'article', children: [
  //   {path: 'detail', component: ArticleDetailComponent}
  // ]},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadStratagyService
    preloadingStrategy: PreloadAllModules

  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
