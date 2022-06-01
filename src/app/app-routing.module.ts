import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostsFeedComponent} from './components/posts-feed/posts-feed.component';
import {PostEditComponent} from './components/post-edit/post-edit.component';
import {PostDetailComponent} from './components/post-detail/post-detail.component';
import {LoginComponent} from './components/login/login.component';
import {AuthenticationGuard, LoggedInAuthenticationGuard} from './guards/authentication.guard';

const appRoutes: Routes = [
  { path: '', redirectTo: '/posts-feed', pathMatch: 'full' },
  { path: 'posts-feed', component: PostsFeedComponent, canActivate: [AuthenticationGuard] },
  { path: 'post/:id', component: PostDetailComponent, canActivate: [AuthenticationGuard] },
  { path: 'editor', component: PostEditComponent, canActivate: [AuthenticationGuard] },
  { path: 'login', component: LoginComponent, canActivate: [LoggedInAuthenticationGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
