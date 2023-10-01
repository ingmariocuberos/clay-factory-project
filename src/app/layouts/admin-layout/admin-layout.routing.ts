import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout.component';

export const AdminLayoutRoutes: Routes = [
    {
        path: 'menu',
        component: AdminLayoutComponent
    },
    {
        path: '**',
        redirectTo: 'menu'
    }
];
