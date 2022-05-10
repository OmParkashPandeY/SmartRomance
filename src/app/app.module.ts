import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { SignupComponent } from './signup/signup.component';
import { TemplateComponent } from './template/template.component';
import { FormViewComponent } from './template/form-view/form-view.component';
import { SidebarViewComponent } from './template/sidebar-view/sidebar-view.component';
import { TableViewComponent } from './template/table-view/table-view.component';
import { TemplateModule } from './template/template.module';
import { AdminModule } from './admin/admin.module';
import { NoPageFoundComponent } from './others/no-page-found/no-page-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// MDB Angular Pro
// prettier-ignore
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    TemplateComponent,
    FormViewComponent,
    SidebarViewComponent,
    TableViewComponent,
    NoPageFoundComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateModule,
    AdminModule,
    NgbModule,
    ReactiveFormsModule,
    MatButtonModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
