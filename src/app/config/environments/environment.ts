export const environment = {
  production: false,
  apiBaseUrl: 'http://localhost:3000/api',
  auth: {
    login: '/auth/login',
    refresh: '/auth/refresh',
    logout: '/auth/logout',
    register: '/auth/register',
  },
  vehicule: {
    fetch: '/vehicules/admin/truck-list',
    add: '/vehicules/admin/new-truck',
    get_or_delete: '/vehicules/',
  },
  posts: {
    fetch: '/posts/posts',
    add: '/posts/posts',
  },
  profile: {
    get: '/users/profile',
  },
  comment: {
    get: '/posts/comments',
  },
};
