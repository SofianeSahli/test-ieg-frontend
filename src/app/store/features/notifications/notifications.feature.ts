import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { notifReducer } from './notifications.reducer';
import * as effects from './notifications.effects';
export const NOTIFICATIONS_FEATURES = 'NOTIFICATIONS_FEATURES';

export const notifsFeature = () => [
  provideState(NOTIFICATIONS_FEATURES, notifReducer),
  provideEffects([effects]),
];
