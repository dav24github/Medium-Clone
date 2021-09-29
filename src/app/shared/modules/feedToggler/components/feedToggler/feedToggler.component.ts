import { Component, Input } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isLoggedInSelector } from 'src/app/auth/store/selectors';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';

@Component({
  selector: 'mc-feed-toggler',
  templateUrl: './feedToggler.component.html',
})
export class FeedTogglerComponent {
  @Input('tagName') tagNameProps!: string;

  isLoggedIn$!: Observable<boolean | null>;

  constructor(private store: Store<AppStateInterface>) {}

  ngOnInit(): void {
    this.initilizeValues();
  }

  initilizeValues(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
  }
}
