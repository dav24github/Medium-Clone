import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'mc-tag-feed',
  templateUrl: './tagFeed.component.html',
  styleUrls: ['./tagFeed.component.scss'],
})
export class TagFeedComponent implements OnInit {
  tagName!: string | null;
  apiUrl_!: Observable<string>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.tagName = this.route.snapshot.paramMap.get('slug');

    this.apiUrl_ = this.route.paramMap.pipe(
      map((param: Params) => {
        return `/articles?tag=${param.get('slug')}`;
      })
    );
  }
}
