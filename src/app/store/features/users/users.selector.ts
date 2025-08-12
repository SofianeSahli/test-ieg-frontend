import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsersState } from '../../states/UsersState';
import { EMPLOYEE_FEATURE_KEY } from './users.feature';
import { usersAdapter } from './users.reducer';

export const selectUserState =
  createFeatureSelector<UsersState>(EMPLOYEE_FEATURE_KEY);

const { selectAll, selectEntities, selectIds, selectTotal } =
  usersAdapter.getSelectors(selectUserState);

export const selectAllEmployees = selectAll;
export const selectEmployeeEntities = selectEntities;
export const selectEmployeeIds = selectIds;
export const selectEmployeeTotal = selectTotal;

export const selectEmployeeById = (id: string) =>
  createSelector(selectEmployeeEntities, (entities) =>
    id ? entities[id] ?? null : null
  );

export const selectEmployeesLoading = createSelector(
  selectUserState,
  (state) => state.loading
);

export const selectEmployeesError = createSelector(
  selectUserState,
  (state) => state.error
);
