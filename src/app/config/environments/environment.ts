export const environment = {
  production: false,
  apiBaseUrl: 'http://localhost:3000/api',
  notifications: '/notifications',
  auth: {
    sessionStatus: '/auth/session-check',
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
    tags: '/posts/tags',
  },
  profile: {
    get: '/users/profile',
  },
  comment: {
    get: '/posts/comments',
  },
};
