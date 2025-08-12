import { environment } from './environments/environment';

export const ApiRoutes = {
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
  },
  profile: {
    register: `${environment.apiBaseUrl}${environment.auth.register}`,
    patch: `${environment.apiBaseUrl}${environment.profile.get}`,
    get: `${environment.apiBaseUrl}${environment.profile.get}`,
  },
  employees: {
    get: `${environment.apiBaseUrl}${environment.employees.get}`,
  },
};
