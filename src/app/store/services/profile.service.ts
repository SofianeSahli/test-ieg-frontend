import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRoutes } from '../../config/api-routes.utilities';
import { Observable, tap } from 'rxjs';
import { User } from '../states/UsersState';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  constructor(
    private httpClient: HttpClient,
    private readonly router: Router
  ) {}

  get(): Observable<User> {
    return this.httpClient.get<User>(ApiRoutes.profile.get, {
      withCredentials: true,
    });
  }

  patchProfile(profileData: User): Observable<User> {
    return profileData.id !== undefined
      ? this.httpClient.put<User>(ApiRoutes.profile.patch, profileData)
      : this.httpClient.post<User>(ApiRoutes.profile.patch, profileData);
  }

  register(profileData: User): Observable<User> {
    return this.httpClient.post<User>(ApiRoutes.profile.register, profileData);
  }
}
