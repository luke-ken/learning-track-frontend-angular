import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PostHeadline} from '../models/post-headline.model';
import {FormGroup} from '@angular/forms';

@Injectable({providedIn: 'root'})
export class PostsFeedService {

  POST_API = 'http://localhost:9000/api/post';

  constructor(private http: HttpClient) {
  }

  fetchPosts(): Observable<PostHeadline[]> {
    return this.http.get<PostHeadline[]>(this.POST_API + '/all-posts');
  }

}
