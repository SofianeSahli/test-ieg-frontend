import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRoutes } from '../../config/api-routes.utilities';
import { Observable, tap } from 'rxjs';
import { User } from '../states/UsersState';
import { Router } from '@angular/router';
import { Notification } from '../states/NotificationsState';

@Injectable({ providedIn: 'root' })
export class NotificationsService {
  constructor(
    private httpClient: HttpClient,
    private readonly router: Router
  ) {}

  get(): Observable<Array<Notification>> {
    return this.httpClient.get<Array<Notification>>(ApiRoutes.notifications, {
      withCredentials: true,
    });
  }
}
