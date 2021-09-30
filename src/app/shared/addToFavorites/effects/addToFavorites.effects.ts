import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ArticleInterface } from '../../types/article.interface';
import { AddToFavoritesService } from '../services/addToFavorites.service';
import {
  addtoFavoritesAction,
  addtoFavoritesFailureAction,
  addtoFavoritesSuccessAction,
} from '../store/actions/addtoFavorites.action';

@Injectable()
export class addToFavoritesEffect {
  addToFavorites$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addtoFavoritesAction),
      switchMap(({ isFavorited, slug }) => {
        const article$ = isFavorited
          ? this.addToFavoritesService.removeFromFavorites(slug)
          : this.addToFavoritesService.addToFavorites(slug);
        return article$.pipe(
          map((article: ArticleInterface) => {
            return addtoFavoritesSuccessAction({ article });
          }),
          catchError(() => {
            return of(addtoFavoritesFailureAction());
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private addToFavoritesService: AddToFavoritesService
  ) {}
}
