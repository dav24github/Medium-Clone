import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, Subscription, combineLatest } from 'rxjs';
import { select, Store } from '@ngrx/store';

import {
  isLoadingSelector,
  errorSelector,
  userProfileSelector,
} from './../../store/selectors';
import { UserProfileInterface } from '../../types/userProfile.interface';
import { currentUserSelector } from 'src/app/auth/store/selectors';
import { map } from 'rxjs/operators';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { getUserProfileAction } from '../../store/actions/getUserProfile';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  myVar!: string;

  constructor(
    private store: Store<AppStateInterface>,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
    console.log('Nuevo');
  }

  initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));

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

  getApiUrl(): string {
    const isFavorites = this.router.url.includes('favorites');
    return isFavorites
      ? `/articles?favorited=${this.slug}`
      : `/articles?author=${this.slug}`;
  }

  initializeListeners(): void {
    this.userProfileSubscription = this.store
      .pipe(select(userProfileSelector))
      .subscribe((userProfile: UserProfileInterface | null) => {
        if (userProfile !== null) {
          this.userProfile = userProfile;
        }
      });

    this.route.params.subscribe((params: Params) => {
      this.slug = params.slug;
      this.fetchUserProfile();
    });
  }

  fetchUserProfile(): void {
    this.store.dispatch(getUserProfileAction({ slug: this.slug || '' }));
  }

  onClick(): void {
    this.slug = 'asdasd';
  }
}
