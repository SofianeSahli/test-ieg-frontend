import { createReducer, on } from '@ngrx/store';
import { AuthActions } from './auth.action';
import { AuthState } from '../../states/AuthState';
const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.login, (state) => ({ ...state, loading: true, error: null })),
  on(AuthActions.loginSuccess, (state, { user }) => {
    return {
      ...state,
      loading: false,
      error: null,
    };
  }),
  on(AuthActions.updateProfile, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(AuthActions.authFailure, (state, { message }) => ({
    ...state,
    loading: false,
    error: message,
  })),
  on(AuthActions.getProfileSuccess, (state, { user }) => ({
    ...state,
    user: user,
    loading: false,
    error: null,
  }))
);
