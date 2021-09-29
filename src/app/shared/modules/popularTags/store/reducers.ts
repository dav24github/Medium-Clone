import { Action, createReducer, on } from '@ngrx/store';
import { PopularTagsStateInterface } from '../types/popularTagsState.Interface';
import {
  getPopularTagsAction,
  getPopularTagsFailureAction,
  getPopularTagsSuccessAction,
} from './actions/getPopularTags.action';

const initialState: PopularTagsStateInterface = {
  data: null,
  isLoading: false,
  error: null,
};

const popularTagsReducer = createReducer(
  initialState,
  on(
    getPopularTagsAction,
    (state): PopularTagsStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getPopularTagsSuccessAction,
    (state, action): PopularTagsStateInterface => ({
      ...state,
      isLoading: false,
      data: action.popularTags,
    })
  ),
  on(
    getPopularTagsFailureAction,
    (state): PopularTagsStateInterface => ({
      ...state,
      isLoading: false,
    })
  )
);

export function reducers(state: PopularTagsStateInterface, action: Action) {
  return popularTagsReducer(state, action);
}
