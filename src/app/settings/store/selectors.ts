import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { SettingStateInterface } from '../types/settingState.interface';

export const settingsFeatureSelector = createFeatureSelector<
  AppStateInterface,
  SettingStateInterface
>('settings');

export const isSubmittingSelector = createSelector(
  settingsFeatureSelector,
  (settingsState: SettingStateInterface) => settingsState.isSubmitting
);

export const validationErrorsSelector = createSelector(
  settingsFeatureSelector,
  (settingsState: SettingStateInterface) => settingsState.validationErrors
);
