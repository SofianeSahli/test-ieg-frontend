import { AuthState } from './AuthState';
import { PostState } from './PostState';
import { UsersState } from './UsersState';

export interface AppState {
  auth: AuthState;
  users: UsersState;
  posts: PostState;
}
