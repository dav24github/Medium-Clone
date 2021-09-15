import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateInterface } from '../types/appState.interface';
import { AuthStateInterface } from '../types/authState.interface';

export const featureKey = 'auth';

export const authFeatureSelector = createFeatureSelector<
  AppStateInterface,
  AuthStateInterface
>(featureKey);

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isSubmitting
);
