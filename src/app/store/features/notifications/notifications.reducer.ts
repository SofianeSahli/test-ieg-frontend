import { createReducer, on } from '@ngrx/store';
import { AuthState } from '../../states/AuthState';
import { NotificationsActions } from './notifications.action';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import {
  Notification as Notif,
  NotificationState,
} from '../../states/NotificationsState';

export const notificationsAdapter: EntityAdapter<Notif> =
  createEntityAdapter<Notif>({
    selectId: (notif: Notif) => notif._id ?? '',
  });

export const initialState: NotificationState =
  notificationsAdapter.getInitialState({
    selectedNotificationState: null,
    loading: false,
    error: null,
  });

export const notifReducer = createReducer(
  initialState,
  on(
    NotificationsActions.getNotificationsSuccess,
    (state, { notifications }) => {
      return notificationsAdapter.setAll(notifications, {
        ...state,
        loading: false,
      });
    }
  ),
  on(NotificationsActions.addOneNotif, (state, { notification }) => {
    return notificationsAdapter.upsertOne(notification, {
      ...state,
    });
  })
);
