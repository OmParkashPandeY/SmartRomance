import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ProfileComponent } from '../profile/profile.component';
import { RegistrationComponent } from '../registration/registration.component';
import { LayoutComponent } from './layout.component';


const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [

            {
                path: '',
                component: DashboardComponent,
            },
            {
                path: 'registration',
                component: RegistrationComponent,
            },
            {
                path: 'profile',
                component: ProfileComponent,
            }

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
