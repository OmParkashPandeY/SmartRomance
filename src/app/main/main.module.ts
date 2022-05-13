import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainRoutingModule } from './main-routing.module';

import { MatCardModule } from '@angular/material/card';
import { RegistrationComponent } from './registration/registration.component';
import { ProfileComponent } from './profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';

// prettier-ignore
@NgModule({
  declarations: [
    DashboardComponent,
    RegistrationComponent,
    ProfileComponent,
   

  

  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatCardModule,
    ReactiveFormsModule,
  ]
})
export class MainModule { }
