import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { userActions } from './users.action';
import { UsersState, User } from '../../states/UsersState';

export const usersAdapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialState: UsersState = usersAdapter.getInitialState({
  selecteduserd: null,
  loading: false,
  error: null,
});
export const userReducer = createReducer(
  initialState,
  on(userActions.fetchusersSuccess, (state, { users }) => {
    return usersAdapter.setAll(users, {
      ...state,
      loading: false,
    });
  }),
  on(userActions.failure, (state, { errors }) => ({
    ...state,
    loading: false,
    error: errors,
  }))
);
