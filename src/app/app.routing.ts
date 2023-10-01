import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes =[
  {
    path: 'auth',
    loadChildren: ()=> import('./auth/auth.module')
                        .then( m => m.AuthModule) 
  }, {
    path: '',
    canActivateChild: [AuthGuard],
    loadChildren: ()=> import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
  }, {
    path: '**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
