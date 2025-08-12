export const Routes = {
  AUTH: {
    LOGIN: '',
    REGISTER: 'register',
  },
  DASHBOARD: {
    HOME: 'dashboard',
    AGENCE: {
      INDEX: 'agencies',
      ADD: 'new',
      DETAILS: 'agencies/edit/:id',
    },
    USER_MANAGEMENT: {
      INDEX: 'users',
      ADD: 'new',
    },
    POSTS: {
      INDEX: '',
      ADD: 'new',
      DETAILS: 'details',
    },
    CONTRACTS: {
      INDEX: 'contracts',
    },
    PROFILE: {
      INDEX: 'profile',
    },
  },
};
