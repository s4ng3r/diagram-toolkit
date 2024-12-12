import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuardService } from './services/security/authguard.service';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      { path: ':team/:diagram', component: DashboardComponent },
    ],
  },
  { path: '**', redirectTo: '/login' },
];
