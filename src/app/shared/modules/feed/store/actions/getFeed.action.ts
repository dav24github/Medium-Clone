import { createAction, props } from '@ngrx/store';
import { GetFeedResponseInterface } from '../../types/getFeedResponse.interface';
import { ActionType } from '../actionType';

export const getFeedAction = createAction(
  ActionType.GET_FEED,
  props<{ url: string }>()
);

export const getFeedSuccessAction = createAction(
  ActionType.GET_FEED_SUCCESS,
  props<{ feed: GetFeedResponseInterface }>()
);

export const getFeedFailureAction = createAction(ActionType.GET_FEED_FAILURE);
