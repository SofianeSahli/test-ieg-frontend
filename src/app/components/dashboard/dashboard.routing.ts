import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Routes as ROUTES } from '../../config/routes';

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
      {
        path: ROUTES.DASHBOARD.PROFILE.INDEX,
        component: ProfilePage,
      },
    ],
  },
];
