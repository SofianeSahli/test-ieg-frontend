import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiRoutes } from '../../config/api-routes.utilities';
import { Post, Comment as PostComment } from '../states/PostState';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private http = inject(HttpClient);

  private toFormData(post: Partial<Post>): FormData {
    const formData = new FormData();
    Object.entries(post).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        formData.append(key, value as Blob | string);
      }
    });
    return formData;
  }

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(ApiRoutes.posts.add, {
      withCredentials: true,
    });
  }
  query(query: String): Observable<Post[]> {
    return this.http.get<Post[]>(ApiRoutes.posts.add + '/search?q=' + query, {
      withCredentials: true,
    });
  }

  getById(id: string): Observable<Post> {
    return this.http.get<Post>(`${ApiRoutes}/${id}`, {
      withCredentials: true,
    });
  }

  create(post: Partial<Post>): Observable<Post> {
    const formData = this.toFormData(post);
    return this.http.post<Post>(ApiRoutes.posts.add, formData, {
      withCredentials: true,
    });
  }

  update(id: string, post: Partial<Post>): Observable<Post> {
    const formData = this.toFormData(post);
    return this.http.put<Post>(`${ApiRoutes.posts.add}/${id}`, formData, {
      withCredentials: true,
    });
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${ApiRoutes.posts.add}/id/${id}`, {
      withCredentials: true,
    });
  }

  comment(comment: PostComment) {
    return this.http.post<PostComment>(`${ApiRoutes.comment.get}`, comment, {
      withCredentials: true,
    });
  }
}
