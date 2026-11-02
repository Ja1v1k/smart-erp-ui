import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    //Authentication Layout
    {
        path: 'auth',
        // canActivate:[guestGuard],
        loadComponent: () => import('./layouts/auth-layout/auth-layout.component')
            .then(c => c.AuthLayoutComponent),

        children: [
            {
                path: '',
                loadChildren: () => import('./features/auth/auth.route')
                    .then(r => r.AUTH_ROUTES)
            }
        ]
    },

    //Main ERP Layout
    {
        path: '',
        canActivate: [authGuard],
        loadComponent: () => import('./layouts/main-layout/main-layout.component').then(c => c.MainLayoutComponent),

        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'dashboard'
            },
            {
                path:'dashboard',
                loadChildren: () => import('./features/dashboard/dashboard.routes')
                .then(c => c.DASHBOARD_ROUTES)
            },
            {
                path:'employee',
                loadChildren: () => import('./features/employees/employees.routes')
                .then(c => c.EMPLOYEE_ROUTES)
            }
        ]
    }
];
