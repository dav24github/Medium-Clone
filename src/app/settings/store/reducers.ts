import { state } from '@angular/animations';
import { ActionCreator, createReducer, on } from '@ngrx/store';
import {
  updateCurrentUserAction,
  updateCurrentUserFailureAction,
  updateCurrentUserSuccessAction,
} from 'src/app/auth/store/actions/updateCurrentUser.action';
import { SettingStateInterface } from '../types/settingState.interface';

const initialState: SettingStateInterface = {
  isSubmitting: false,
  validationErrors: null,
};

const settingReducers = createReducer(
  initialState,
  on(
    updateCurrentUserAction,
    (state): SettingStateInterface => ({
      ...state,
      isSubmitting: true,
    })
  ),
  on(
    updateCurrentUserSuccessAction,
    (state): SettingStateInterface => ({
      ...state,
      isSubmitting: false,
    })
  ),
  on(
    updateCurrentUserFailureAction,
    (state, action): SettingStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })
  )
);

export function reducers(state: SettingStateInterface, action: ActionCreator) {
  return settingReducers(state, action);
}
