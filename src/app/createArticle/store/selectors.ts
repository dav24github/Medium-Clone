import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { CreateArticleStateInterface } from '../types/createArticleState.interface';

export const createArticlefeatureKey = 'createArticle';

export const createArticleFeatureSelector = createFeatureSelector<
  AppStateInterface,
  CreateArticleStateInterface
>(createArticlefeatureKey);

export const isSubmittingSelector = createSelector(
  createArticleFeatureSelector,
  (createArticleState: CreateArticleStateInterface) =>
    createArticleState.isSubmitting
);

export const validationErrorsSelector = createSelector(
  createArticleFeatureSelector,
  (createArticleState: CreateArticleStateInterface) =>
    createArticleState.validationErrors
);
