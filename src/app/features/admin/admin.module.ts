import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from '../shared/header/header.component';
import { UserlistComponent } from './userlist/userlist.component';
import { SharedModulesModule } from 'src/app/shared-modules/shared-modules.module';


@NgModule({
  declarations: [
    DashboardComponent,
    UserlistComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HeaderComponent,
    SharedModulesModule
  ]
})
export class AdminModule { }
