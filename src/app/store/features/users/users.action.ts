import { createAction, props } from '@ngrx/store';
import { User } from '../../states/UsersState';

export const userActions = {
  fetchusers: createAction('[API] fetch users'),
  fetchusersSuccess: createAction(
    '[API] fetch users success',
    props<{ users: Array<User> }>()
  ),
  failure: createAction(
    '[API] employees failure',
    props<{ errors: Array<string> }>()
  ),
};
