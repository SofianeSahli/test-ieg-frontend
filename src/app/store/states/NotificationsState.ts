import { EntityState } from '@ngrx/entity';

export interface Notification {
  type: string;
  message: string;
  timestamp: string;
  read: boolean;
  postId?: string;
  _id?: string;
}

export interface NotificationState extends EntityState<Notification> {
  selectedNotificationState: string | null;
  loading: boolean;
  error: string | null;
}
