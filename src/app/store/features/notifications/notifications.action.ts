import { createAction, props } from '@ngrx/store';
import { User } from '../../states/UsersState';
import { Notification } from '../../states/NotificationsState';

export const NotificationsActions = {
  getNotifications: createAction('[Notifications] Login'),
  getNotificationsSuccess: createAction(
    '[Notifications] Login Success',
    props<{ notifications: Array<Notification> }>()
  ),
  getNotificationsFailure: createAction(
    '[Notifications] Login Failure',
    props<{ message: string }>()
  ),
  addOneNotif: createAction(
    '[Notifications] Add One',
    props<{ notification: Notification }>()
  ),
};
