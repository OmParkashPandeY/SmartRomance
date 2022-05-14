import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NetworkHomePageComponent } from './network-home-page/network-home-page.component';
import { NoPageFoundComponent } from './others/no-page-found/no-page-found.component';
import { AuthGuard } from './shared/auth/auth.guard';

const routes: Routes = [
     {
          path: '',
          redirectTo: '/network-home-page',
          pathMatch: 'full'
     },
     {
          path: 'network-home-page',
          component: NetworkHomePageComponent
     },
     {
          path: 'home',
          component: HomeComponent
     },
     {
          path: 'login',
          component: LoginComponent
     },
     {
          path: 'main',
          loadChildren: () => import('./main/main.module').then((module) => module.MainModule),
          canActivate: [AuthGuard],
          runGuardsAndResolvers: 'always'
     },

     {
          path: '**',
          component: NoPageFoundComponent
     }
];

@NgModule({
     imports: [RouterModule.forRoot(routes)],
     exports: [RouterModule]
})
export class AppRoutingModule {}
