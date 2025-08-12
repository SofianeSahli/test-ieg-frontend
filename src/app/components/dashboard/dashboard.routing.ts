import { Routes } from '@angular/router';
import { Home } from './home/home';
import { UserForm } from './users-managements/user-form/user-form';
import { Routes as ROUTES } from '../../config/routes';
import { UsersLists } from './users-managements/users-lists/users-lists';

import { DashboardView } from './dashboard-view/dashboard-view';
import { ProfilePage } from './profile-section/profile-page/profile-page';
import { PostsListing } from '../posts/posts-listing/posts-listing';
import { PostForm } from '../posts/post-form/post-form';

export const dashboardRouting: Routes = [
  {
    path: '',
    component: Home,
    children: [
      {
        path: ROUTES.DASHBOARD.POSTS.INDEX,
        component: PostsListing,
      },
      {
        path: ROUTES.DASHBOARD.POSTS.ADD,

        component: PostForm,
      },
    ],
    /*
      {
        path: ROUTES.DASHBOARD.PROFILE.INDEX,
        children: [
          {
            path: '',
            component: ProfilePage,
          },
        ],
      },
      {
        path: ROUTES.DASHBOARD.USER_MANAGEMENT.INDEX,
        children: [
          {
            path: '',
            component: UsersLists,
          },
          {
            path: ROUTES.DASHBOARD.USER_MANAGEMENT.ADD,
            component: UserForm,
          },
        ],
      },
    ],*/
  },
];
