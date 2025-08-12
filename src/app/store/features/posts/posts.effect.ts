import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from '../../services/users.service';
import { catchError, map, of, switchMap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { postsActions } from './posts.action';
import { PostsService } from '../../services/PostsService';
import { ToastService } from '../../services/toast.service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { Routes } from '../../../config/routes';

export const loadPosts = createEffect(
  () => {
    const actions$ = inject(Actions);
    const postsService = inject(PostsService);
    return actions$.pipe(
      ofType(postsActions.fetchPosts),
      switchMap(() =>
        postsService.getAll().pipe(
          map((posts) => {
            return postsActions.fetchPostssSuccess({ posts });
          }),
          catchError((error: HttpErrorResponse) => {
            return of(
              postsActions.failure({
                errors: error.error,
              })
            );
          })
        )
      )
    );
  },
  { functional: true }
);
export const addPost = createEffect(
  () => {
    const actions$ = inject(Actions);
    const postsService = inject(PostsService);
    const toastService = inject(ToastService);
    const translateSerive = inject(TranslateService);
    const router = inject(Router);
    return actions$.pipe(
      ofType(postsActions.addPosts),
      switchMap(({ post }) =>
        postsService.create(post).pipe(
          map((post) => {
            toastService.show(translateSerive.instant('labels.data_saved'));
            router.navigateByUrl(Routes.DASHBOARD.HOME);
            return postsActions.addPostSuccess({ post });
          }),
          catchError((error: HttpErrorResponse) => {
            return of(
              postsActions.failure({
                errors: error.error,
              })
            );
          })
        )
      )
    );
  },
  { functional: true }
);

export const queryPost = createEffect(
  () => {
    const actions$ = inject(Actions);
    const postsService = inject(PostsService);
    return actions$.pipe(
      ofType(postsActions.queryPosts),
      switchMap(({ query }) =>
        postsService.query(query).pipe(
          map((posts) => {
            return postsActions.fetchPostssSuccess({ posts });
          }),
          catchError((error: HttpErrorResponse) => {
            return of(
              postsActions.failure({
                errors: error.error,
              })
            );
          })
        )
      )
    );
  },
  { functional: true }
);
