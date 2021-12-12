import {Component, OnInit} from '@angular/core';
import {PostHeadline} from '../../models/post-headline.model';
import {PostsFeedService} from '../../services/posts-feed.service';

@Component({
  selector: 'app-posts-feed',
  templateUrl: './posts-feed.component.html',
  styleUrls: ['./posts-feed.component.css']
})
export class PostsFeedComponent implements OnInit {
  posts: PostHeadline[];

  constructor(private postsFeedService: PostsFeedService) { }

  ngOnInit(): void {
    this.postsFeedService.fetchPosts()
      .subscribe(posts => {
        this.posts = posts;
        console.log(this.posts);
      });
  }

}
