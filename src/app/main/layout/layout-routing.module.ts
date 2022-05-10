import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmojiPickerComponent } from 'src/app/emoji-picker/emoji-picker.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ProfileComponent } from '../profile/profile.component';
import { RegistrationComponent } from '../registration/registration.component';
import { ScrollPaginationComponent } from '../scroll-pagination/scroll-pagination.component';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
     {
          path: '',
          component: LayoutComponent,
          children: [
               {
                    path: '',
                    component: DashboardComponent
               },
               {
                    path: 'registration',
                    component: RegistrationComponent
               },
               {
                    path: 'profile',
                    component: ProfileComponent
               },
               {
                    path: 'emoji-picker',
                    component: EmojiPickerComponent
               },
               {
                    path: 'scroll-pagination',
                    component: ScrollPaginationComponent
               }
          ]
     }
];

@NgModule({
     imports: [RouterModule.forChild(routes)],
     exports: [RouterModule]
})
export class LayoutRoutingModule {}
