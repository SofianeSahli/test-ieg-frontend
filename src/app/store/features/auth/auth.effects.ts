import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, of } from 'rxjs';
import { AuthActions } from './auth.action';
import { AuthService } from '../../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ProfileService } from '../../services/profile.service';
import { ToastService } from '../../services/toast.service';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Routes } from '../../../config/routes';
import { Store } from '@ngrx/store';
import { Login } from '../../../components/auth/login/login';

export const loginEffect = createEffect(
  () => {
    const actions$ = inject(Actions);
    const store = inject(Store);
    const authService = inject(AuthService);
    return actions$.pipe(
      ofType(AuthActions.login),
      switchMap(({ username, password }) =>
        authService.login(username, password).pipe(
          map((user) => {
            store.dispatch(AuthActions.getProfile());
            return AuthActions.loginSuccess({ user });
          }),
          catchError((error: HttpErrorResponse) => {
            return of(
              AuthActions.authFailure({
                message: error.message,
              })
            );
          })
        )
      )
    );
  },
  { functional: true }
);

export const getProfileEffect = createEffect(
  () => {
    const actions$ = inject(Actions);
    const profileService = inject(ProfileService);
    const router = inject(Router);
    return actions$.pipe(
      ofType(AuthActions.getProfile),
      switchMap(() =>
        profileService.get().pipe(
          map((user) => {
            router.navigate([Routes.DASHBOARD.HOME]);
            return AuthActions.getProfileSuccess({ user });
          }),
          catchError((error: HttpErrorResponse) => {
            return of(
              AuthActions.authFailure({
                message: error.message,
              })
            );
          })
        )
      )
    );
  },
  { functional: true }
);

export const updateProfileEffect = createEffect(
  () => {
    const actions$ = inject(Actions);
    const profileService = inject(ProfileService);
    const toastService = inject(ToastService);
    const translateService = inject(TranslateService);
    const router = inject(Router);
    return actions$.pipe(
      ofType(AuthActions.updateProfile),
      switchMap(({ profileData }) =>
        profileService.patchProfile(profileData).pipe(
          map((updatedUser) => {
            toastService.show(translateService.instant('labels.data_saved'));
            router.navigateByUrl(Routes.DASHBOARD.HOME);
            return AuthActions.getProfileSuccess({ user: updatedUser });
          }),
          catchError((error: HttpErrorResponse) => {
            return of(
              AuthActions.authFailure({
                message: error.message,
              })
            );
          })
        )
      )
    );
  },
  { functional: true }
);

export const registerEffect = createEffect(
  () => {
    const actions$ = inject(Actions);
    const profileService = inject(ProfileService);
    const toastService = inject(ToastService);
    const translateService = inject(TranslateService);
    const router = inject(Router);
    return actions$.pipe(
      ofType(AuthActions.register),
      switchMap(({ profileData }) =>
        profileService.register(profileData).pipe(
          map((updatedUser) => {
            toastService.show(translateService.instant('labels.data_saved'));
            router.navigateByUrl(Routes.AUTH.LOGIN);
            return AuthActions.getProfileSuccess({ user: updatedUser });
          }),
          catchError((error: HttpErrorResponse) => {
            console.log(error.error.message);
            return of(
              AuthActions.authFailure({
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
export const checkSessionEffects = createEffect(
  () => {
    const actions$ = inject(Actions);
    const profileService = inject(AuthService);
    const router = inject(Router);

    return actions$.pipe(
      ofType(AuthActions.checkSession),
      switchMap(() =>
        profileService.isLoggedIn().pipe(
          map(() => {
            // Successful session check: navigate to dashboard if not already there
            if (!router.url.startsWith(Routes.DASHBOARD.HOME)) {
              router.navigateByUrl(Routes.DASHBOARD.HOME);
            }
            return AuthActions.checkSessionSuccess();
          }),
          catchError((error: HttpErrorResponse) => {
            // If not on login page, redirect to login
            if (!router.url.startsWith(Routes.AUTH.LOGIN)) {
              router.navigateByUrl(Routes.AUTH.LOGIN);
            }
            return of(
              AuthActions.authFailure({
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
export const logout = createEffect(
  () => {
    const actions$ = inject(Actions);
    const profileService = inject(AuthService);
    const router = inject(Router);

    return actions$.pipe(
      ofType(AuthActions.logout),
      switchMap(() => {
        profileService.logout();
        return of(AuthActions.logoutSuccess());
      })
    );
  },
  { functional: true }
);
