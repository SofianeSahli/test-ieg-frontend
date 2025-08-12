import { Routes } from '@angular/router';
import { Routes as ROUTES } from './config/routes';
import { Login } from './components/auth/login/login';
import { Register } from './components/auth/register/register';

export const routes: Routes = [
  {
    path: ROUTES.AUTH.LOGIN,
    component: Login,
  },
  {
    path: ROUTES.AUTH.REGISTER,
    component: Register,
  },
  {
    path: ROUTES.DASHBOARD.HOME,
    loadChildren: () =>
      import('./components/dashboard/dashboard.routing').then(
        (m) => m.dashboardRouting
      ),
  },
];
