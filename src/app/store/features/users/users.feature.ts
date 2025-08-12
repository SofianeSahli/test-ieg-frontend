import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { userReducer } from './users.reducer';
import * as EmployeesEffect from './users.effect';
export const EMPLOYEE_FEATURE_KEY = 'employees';

export const provideEmployeeFeature = () => [
  provideState(EMPLOYEE_FEATURE_KEY, userReducer),
  provideEffects(EmployeesEffect),
];
