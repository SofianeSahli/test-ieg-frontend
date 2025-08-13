import { Routes } from '@angular/router';
import { Routes as ROUTES } from './config/routes';
import { Login } from './components/auth/login/login';
import { Register } from './components/auth/register/register';
import { dashboardRouting } from './components/dashboard/dashboard.routing';

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
    children: dashboardRouting,
  },
];
