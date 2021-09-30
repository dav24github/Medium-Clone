import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { addtoFavoritesAction } from '../../store/actions/addtoFavorites.action';

@Component({
  selector: 'mc-add-to-favorites',
  templateUrl: './addToFavorites.component.html',
  styleUrls: ['./addToFavorites.component.scss'],
})
export class AddToFavoritesComponent implements OnInit {
  @Input('isFavorited') isFavoritedProps!: boolean;
  @Input('favoritesCount') favoritesCountProps!: number;
  @Input('articleSlug') articleSlugProps!: string;

  favoritesCount!: number;
  isFavorited!: boolean;

  constructor(private store: Store<AppStateInterface>) {}

  ngOnInit(): void {
    this.favoritesCount = this.favoritesCountProps;
    this.isFavorited = this.isFavoritedProps;
  }

  handleLike(): void {
    this.store.dispatch(
      addtoFavoritesAction({
        isFavorited: this.isFavorited,
        slug: this.articleSlugProps,
      })
    );
    if (this.isFavorited) {
      this.favoritesCount--;
    } else {
      this.favoritesCount++;
    }

    this.isFavorited = !this.isFavorited;
  }
}
