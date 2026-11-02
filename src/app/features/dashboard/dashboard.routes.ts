import { Routes } from "@angular/router";

export const DASHBOARD_ROUTES: Routes = [
    {
        path: '',
        loadComponent:() => import('./components/dashboard/dashboard.component').
        then(c=>c.DashboardComponent)
    },
    // {
    //     path: 'employee',
    //     loadComponent:() => import('./components/employee/employee.component').
    //     then(c=>c.EmployeeComponent)
    // }
]