import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from '../../states/AuthState';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectUser = createSelector(
  selectAuthState,
  (state) => state.user
);

export const selectIsLoading = createSelector(
  selectAuthState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectAuthState,
  (state) => state.error
);

export const selectIsLoggedIn = createSelector(
  selectUser,
  (user) => !!user
);
