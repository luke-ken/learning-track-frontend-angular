import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PostDetail} from '../models/post-detail.model';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class PostDetailService {

  POST_API = 'http://localhost:9000/api/post';

  constructor(private http: HttpClient) {
  }

  fetchSinglePost(postId: string): Observable<PostDetail> {
    return this.http.get<PostDetail>(this.POST_API + '/single-post' + '/' + postId);
  }

  deletePost(postId: string): Observable<any> {
    return this.http.delete(this.POST_API + '/delete-post' + '/' + postId);
  }
}
