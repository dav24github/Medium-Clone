import { createAction, props } from '@ngrx/store';
import { ActionType } from '../actionType';

export const deleteArticleAction = createAction(
  ActionType.DELETE_ARTICLE,
  props<{ slug: string }>()
);

export const deleteArticleSuccessAction = createAction(
  ActionType.DELETE_ARTICLE_SUCCESS
);

export const deleteArticleFailureAction = createAction(
  ActionType.DELETE_ARTICLE_FAILURE
);
