import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PostDetailService} from '../../services/post-detail.service';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {PostDetail} from '../../models/post-detail.model';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
})
export class PostDetailComponent implements OnInit {

  post: PostDetail;
  isFetchingPostDone = false;
  // name = '<img src=\'x\' onerror=\'alert(1)\'>';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private postDetailService: PostDetailService,
              private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    const postId: string = this.route.snapshot.params['id'];

    this.postDetailService.fetchSinglePost(postId)
      // .pipe(
      //   map(
      //     (post) => ({...post, content: this.sanitizer.bypassSecurityTrustHtml(post.content)})
      //   ))
      .subscribe(post => {
        this.post = post;
        this.isFetchingPostDone = true;
      });

  }

  getSanitizedPostContent(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.post.content);
  }

  onEditPost(): void {
    this.router.navigate(['/editor'], {state: this.post});
  }

  onDeletePost(): void {
    this.postDetailService.deletePost(this.post.id)
      .subscribe(response => {
        console.log(response);
        this.router.navigate(['/posts-feed']);
      });
  }

  // getSanitizedName(): SafeHtml {
  //   return this.sanitizer.bypassSecurityTrustHtml(this.name);
  // }

}
