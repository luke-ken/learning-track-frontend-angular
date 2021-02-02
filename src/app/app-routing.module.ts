import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostsFeedComponent} from './posts-feed/posts-feed.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/posts-feed', pathMatch: 'full' },
  { path: 'posts-feed', component: PostsFeedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
