import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainRoutingModule } from './main-routing.module';

import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    DashboardComponent,

  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatCardModule,
  ]
})
export class MainModule { }
