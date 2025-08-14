import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRoutes } from '../../config/api-routes.utilities';
import { map, Observable, tap } from 'rxjs';
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
  private toFormData(post: Partial<User>): FormData {
    const formData = new FormData();
    Object.entries(post).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        formData.append(key, value as Blob | string);
      }
    });
    return formData;
  }
  patchProfile(profileData: User): Observable<any> {
    return this.httpClient
      .put<any>(ApiRoutes.profile.patch, this.toFormData(profileData), {
        withCredentials: true,
      })
      .pipe(map((val) => val.user));
  }

  register(profileData: User): Observable<User> {
    return this.httpClient.post<User>(ApiRoutes.profile.register, profileData);
  }
}
