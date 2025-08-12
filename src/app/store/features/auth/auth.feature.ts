import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { authReducer } from './auth.reducer';
import * as effects from './auth.effects';


export const provideAuthFeature = () => [
  provideState('auth', authReducer),
  provideEffects([effects]),
];
