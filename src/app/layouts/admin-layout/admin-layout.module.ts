import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { MaterialModule } from 'app/material/material.module';
import { AdminLayoutComponent } from './admin-layout.component';
import { ComponentsModule } from 'app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ComponentsModule
  ],
  declarations: [
    AdminLayoutComponent
  ]
})

export class AdminLayoutModule {}
