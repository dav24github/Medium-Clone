import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { combineLatest, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  errorSelector,
  isLoadingSelector,
} from 'src/app/article/store/selectors';
import { currentUserSelector } from 'src/app/auth/store/selectors';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { getUserProfileAction } from '../../store/actions/getUserProfile';
import { userProfileSelector } from '../../store/selectors';
import { UserProfileInterface } from '../../types/userProfile.interface';

@Component({
  selector: 'mc-user-profile',
  templateUrl: './userProfile.component.html',
  styleUrls: ['./userProfile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  userProfile!: UserProfileInterface;
  isLoading$!: Observable<boolean>;
  error$!: Observable<string | null>;
  userProfileSubscription!: Subscription;
  apiUrl!: string;
  slug!: string | null;
  isCurrentUserProfile$!: Observable<boolean | null>;

  constructor(
    private store: Store<AppStateInterface>,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
    this.initializeListeners();
  }

  initializeValues(): void {
    const isFavorites = this.router.url.includes('favorites');
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.apiUrl = isFavorites
      ? `article?favorited=${this.slug}`
      : `/articles?author=${this.slug}`;
    this.isCurrentUserProfile$ = combineLatest([
      this.store.pipe(select(currentUserSelector)),
      this.store.pipe(select(userProfileSelector)),
    ]).pipe(
      map(
        ([currentUser, userProfile]: [
          CurrentUserInterface | null,
          UserProfileInterface | null
        ]) => {
          if (currentUser !== null && userProfile !== null)
            return currentUser.username === userProfile.username;
          else return null;
        }
      )
    );
  }

  initializeListeners(): void {
    this.userProfileSubscription = this.store
      .pipe(select(userProfileSelector))
      .subscribe((userProfile: UserProfileInterface | null) => {
        if (userProfile !== null) {
          this.userProfile = userProfile;
        }
      });
  }

  fetchData(): void {
    this.store.dispatch(getUserProfileAction({ slug: this.slug || '' }));
  }
}
