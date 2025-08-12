import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from '../../services/users.service';
import { userActions } from './users.action';
import { catchError, map, of, switchMap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

export const loadVehiculesEffects = createEffect(
  () => {
    const actions$ = inject(Actions);
    const userService = inject(UserService);
    return actions$.pipe(
      ofType(userActions.fetchusers),
      switchMap(() =>
        userService.fetch().pipe(
          map((users) => {
            return userActions.fetchusersSuccess({ users });
          }),
          catchError((error: HttpErrorResponse) => {
            return of(
              userActions.failure({
                errors: error.error || 'Login failed',
              })
            );
          })
        )
      )
    );
  },
  { functional: true }
);
