import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateInterface } from '../types/appState.interface';
import { AuthStateInterface } from '../types/authState.interface';

export const authfeatureKey = 'auth';

export const authFeatureSelector = createFeatureSelector<
  AppStateInterface,
  AuthStateInterface
>(authfeatureKey);

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isSubmitting
);

export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (auhtState: AuthStateInterface) => auhtState.validationErrors
);
