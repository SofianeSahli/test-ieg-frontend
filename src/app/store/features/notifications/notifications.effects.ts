import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { NotificationsService } from '../../services/notifications.service';
import { catchError, map, of, switchMap } from 'rxjs';
import { NotificationsActions } from './notifications.action';
import { HttpErrorResponse } from '@angular/common/http';

export const commentPost = createEffect(
  () => {
    const actions$ = inject(Actions);
    const notificationsService = inject(NotificationsService);
    return actions$.pipe(
      ofType(NotificationsActions.getNotifications),
      switchMap(() =>
        notificationsService.get().pipe(
          map((notifications) => {
            return NotificationsActions.getNotificationsSuccess({
              notifications,
            });
          }),
          catchError((error: HttpErrorResponse) => {
            return of(
              NotificationsActions.getNotificationsFailure({
                message: error.error.message,
              })
            );
          })
        )
      )
    );
  },
  { functional: true }
);
