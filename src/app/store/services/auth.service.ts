import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, throwError, catchError } from 'rxjs';
import { Router } from '@angular/router';
import { Routes } from '../../config/routes';
import { ApiRoutes } from '../../config/api-routes.utilities';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private readonly http: HttpClient,
    private readonly router: Router,
    @Inject(PLATFORM_ID) private readonly platformId: Object
  ) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(
      ApiRoutes.login,
      { email, password },
      { withCredentials: true }
    );
  }

  logout(): void {
    this.http.post(ApiRoutes.logout, {}, { withCredentials: true }).subscribe({
      next: () => {
        this.router.navigate([Routes.AUTH.LOGIN]);
      },
      error: () => {
        this.router.navigate([Routes.AUTH.LOGIN]);
      },
    });
  }

  // Check session status (optional)
  /*
  isLoggedIn(): Observable<boolean> {
    return this.http
      .get<{ loggedIn: boolean }>(ApiRoutes.sessionStatus, {
        withCredentials: true,
      })
      .pipe(
        catchError(() => {
          return new Observable((observer) => {
            observer.next(false);
            observer.complete();
          });
        }),
        tap((response) => !!response.loggedIn)
      );
  }*/
}
