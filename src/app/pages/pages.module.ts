import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MaterialModule } from 'app/material/material.module';

import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    DashboardComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    TableListComponent,
    TypographyComponent,
    UpgradeComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PagesRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ]
})
export class PagesModule { }
