import { createAction, props } from '@ngrx/store';
import { User } from '../../states/UsersState';

export const AuthActions = {
  login: createAction(
    '[Auth] Login',
    props<{ username: string; password: string }>()
  ),
  loginSuccess: createAction('[Auth] Login Success', props<{ user: any }>()),
  authFailure: createAction(
    '[Auth] Login Failure',
    props<{ message: string }>()
  ),
  getProfile: createAction('[Auth] Get Profile'),
  getProfileSuccess: createAction(
    '[Auth] Get Profile Success',
    props<{ user: User }>()
  ),
  register: createAction(
    '[Auth] Register Profile',
    props<{ profileData: User }>()
  ),
  updateProfile: createAction(
    '[Auth] Update Profile',
    props<{ profileData: User }>()
  ),
  logout: createAction('[Auth] LogOut'),
  logoutSuccess: createAction('[Auth] LogOutSuccss'),
  skipErrorDeclaration: createAction('[Auth] Skip Error Declaration'),
  checkSession: createAction('[Auth] checkSession'),
  checkSessionSuccess: createAction('[Auth] checkSessionSuccess'),
};
