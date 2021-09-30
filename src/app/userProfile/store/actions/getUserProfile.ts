import { createAction, props } from '@ngrx/store';
import { UserProfileInterface } from '../../types/userProfile.interface';
import { ActionTypes } from '../actionTypes';

export const getUserProfileAction = createAction(
  ActionTypes.GET_USER_PROFILE,
  props<{ slug: string }>()
);

export const getUserProfileSuccessAction = createAction(
  ActionTypes.GET_USER_PROFILE_SUCCESS,
  props<{ userProfile: UserProfileInterface }>()
);

export const getUserProfileFailureAction = createAction(
  ActionTypes.GET_USER_PROFILE
);
