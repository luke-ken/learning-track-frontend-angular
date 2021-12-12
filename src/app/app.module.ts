import {BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { PostsFeedComponent } from './components/posts-feed/posts-feed.component';
import { PostHeadlineComponent } from './components/posts-feed/post-headline/post-headline.component';
import { PostEditComponent } from './components/post-edit/post-edit.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { LoginComponent } from './components/login/login.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {EditorModule} from 'primeng/editor';
import {InputTextModule} from 'primeng/inputtext';
import {KeyFilterModule} from 'primeng/keyfilter';

import {AuthenticationInterceptor} from './interceptors/authentication.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    PostsFeedComponent,
    PostHeadlineComponent,
    PostEditComponent,
    PostDetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ButtonModule,
    EditorModule,
    InputTextModule,
    KeyFilterModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
