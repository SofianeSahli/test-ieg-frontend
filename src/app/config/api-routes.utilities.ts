import { environment } from './environments/environment';

export const ApiRoutes = {
  sessionStatus: `${environment.apiBaseUrl}${environment.auth.sessionStatus}`,
  notifications: `${environment.apiBaseUrl}${environment.notifications}`,
  login: `${environment.apiBaseUrl}${environment.auth.login}`,
  refresh: `${environment.apiBaseUrl}${environment.auth.refresh}`,
  logout: `${environment.apiBaseUrl}${environment.auth.logout}`,

  vehicules: {
    get_or_delete: `${environment.apiBaseUrl}${environment.vehicule.get_or_delete}`,
    add: `${environment.apiBaseUrl}${environment.vehicule.add}`,
    fetch: `${environment.apiBaseUrl}${environment.vehicule.fetch}`,
  },
  posts: {
    fetch: `${environment.apiBaseUrl}${environment.posts.fetch}`,
    add: `${environment.apiBaseUrl}${environment.posts.add}`,
    tags: `${environment.apiBaseUrl}${environment.posts.tags}`,
  },
  profile: {
    register: `${environment.apiBaseUrl}${environment.auth.register}`,
    patch: `${environment.apiBaseUrl}${environment.profile.get}`,
    get: `${environment.apiBaseUrl}${environment.profile.get}`,
  },

  comment: {
    get: `${environment.apiBaseUrl}${environment.comment.get}`,
  },
};
