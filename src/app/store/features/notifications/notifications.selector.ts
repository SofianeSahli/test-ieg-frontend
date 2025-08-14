import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NOTIFICATIONS_FEATURES } from './notifications.feature';
import {
  Notification as Notif,
  NotificationState,
} from '../../states/NotificationsState';
import { notificationsAdapter } from './notifications.reducer';

export const selectNotifications = createFeatureSelector<NotificationState>(
  NOTIFICATIONS_FEATURES
);

const { selectAll, selectEntities, selectIds, selectTotal } =
  notificationsAdapter.getSelectors(selectNotifications);

export const selectAllNotifications = selectAll;
export const selectNotificaitonEntities = selectEntities;
export const selectNotificaitonIds = selectIds;
export const selectNotificaitonTotal = selectTotal;

export const selectNotifById = (id: string) =>
  createSelector(selectNotificaitonEntities, (entities) =>
    id ? entities[id] ?? null : null
  );

export const selectNotificaitonLoading = createSelector(
  selectNotifications,
  (state) => state.loading
);

export const selectNotificaitonError = createSelector(
  selectNotifications,
  (state) => state.error
);
