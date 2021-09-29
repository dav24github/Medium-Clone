import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, of, Subscription } from 'rxjs';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { environment } from 'src/environments/environment';
import { getFeedAction } from '../../store/actions/getFeed.action';
import {
  errorSelector,
  feedSelector,
  isLoadingSelector,
} from '../../store/selectors';
import { GetFeedResponseInterface } from '../../types/getFeedResponse.interface';
import { parseUrl, stringify } from 'query-string';
import { map } from 'rxjs/operators';

@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit, OnDestroy {
  @Input('apiUrl') apiUrlProps!: string | null;
  @Input('apiUrlTag') apiUrlTagObsProps!: Observable<string> | null;

  feed$!: Observable<GetFeedResponseInterface | null>;
  error$!: Observable<string | null>;
  isLoading$!: Observable<boolean>;
  limit = environment.limit;
  baseUrl!: string;
  queryParamsSubscription!: Subscription;
  currentPage!: number;
  apiSubscription!: Subscription;

  constructor(
    private store: Store<AppStateInterface>,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe();
    this.apiSubscription?.unsubscribe();
  }

  initializeListeners(): void {
    this.queryParamsSubscription = this.route.queryParams.subscribe(
      (params: Params) => {
        this.currentPage = params.page || '1';
        this.fetchFeed();
      }
    );
  }

  initializeValues(): void {
    this.feed$ = this.store.pipe(select(feedSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.baseUrl = this.router.url.split('?')[0];
  }

  fetchFeed(): void {
    const offset = this.currentPage * this.limit - this.limit;

    if (this.apiUrlTagObsProps) {
      this.apiSubscription = this.apiUrlTagObsProps.subscribe((url: string) => {
        const parsedUrl = parseUrl(url);
        const stringifiedParams = stringify({
          limit: this.limit,
          offset: offset,
          ...parsedUrl.query,
        });
        const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`;
        this.store.dispatch(getFeedAction({ url: apiUrlWithParams }));
      });
    }

    if (this.apiUrlProps) {
      const parsedUrl = parseUrl(this.apiUrlProps);
      const stringifiedParams = stringify({
        limit: this.limit,
        offset: offset,
        ...parsedUrl.query,
      });
      const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`;
      this.store.dispatch(getFeedAction({ url: apiUrlWithParams }));
    }
  }
}
