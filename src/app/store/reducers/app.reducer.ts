import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../states/AppState';
import { authReducer } from '../features/auth/auth.reducer';
import { userReducer } from '../features/users/users.reducer';
import { postReducer } from '../features/posts/posts.reducer';

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  users: userReducer,
  posts: postReducer,
};
