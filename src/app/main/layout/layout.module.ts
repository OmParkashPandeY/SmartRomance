import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { SidebarComponent } from 'src/app/partials/sidebar/sidebar.component';
import { HeaderComponent } from 'src/app/partials/header/header.component';
import { FotterComponent } from 'src/app/partials/fotter/fotter.component';
import { LayoutComponent } from './layout.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    FotterComponent,
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ReactiveFormsModule
  ]
})
export class LayoutModule { }
