import { createAction, props } from '@ngrx/store';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { ActionTypes } from '../actionTypes';

export const addtoFavoritesAction = createAction(
  ActionTypes.ADD_TO_FAVORITES,
  props<{ isFavorited: boolean; slug: string }>()
);

export const addtoFavoritesSuccessAction = createAction(
  ActionTypes.ADD_TO_FAVORITES_SUCCESS,
  props<{ article: ArticleInterface }>()
);

export const addtoFavoritesFailureAction = createAction(
  ActionTypes.ADD_TO_FAVORITES_FAILURE
);
