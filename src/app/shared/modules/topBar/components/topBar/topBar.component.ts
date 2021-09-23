import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { currentUserSelector, isAnonymousInSelector, isLoggedInSelector } from 'src/app/auth/store/selectors';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';

@Component({
  selector: 'mc-topbar',
  templateUrl: './topBar.component.html',
  styleUrls: ['./topBar.component.scss'],
})
export class TopBarComponent implements OnInit{
    isLoggedIn$!: Observable<boolean | null>;
    isAnonymous$!: Observable<boolean>;
    currentUser$!: Observable<CurrentUserInterface | null>

    constructor(private store: Store<AppStateInterface>){}

    ngOnInit(){
        this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
        this.isAnonymous$ = this.store.pipe(select(isAnonymousInSelector));
        this.currentUser$ = this.store.pipe(select(currentUserSelector));
    }
}
