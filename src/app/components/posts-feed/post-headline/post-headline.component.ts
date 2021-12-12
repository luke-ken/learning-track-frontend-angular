import {Component, Input, OnInit} from '@angular/core';
import {PostHeadline} from '../../../models/post-headline.model';

@Component({
  selector: 'app-post',
  templateUrl: './post-headline.component.html',
  styleUrls: ['./post-headline.component.css'],
})
export class PostHeadlineComponent implements OnInit {
  @Input() postHeadline: PostHeadline;
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
  }

  getLocalTimeFromTimestamp(): string {
    return new Date(this.postHeadline.timestamp).toLocaleString('de-DE');
  }

}
