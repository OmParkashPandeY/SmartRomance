import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { SidebarComponent } from 'src/app/partials/sidebar/sidebar.component';
import { HeaderComponent } from 'src/app/partials/header/header.component';
import { FotterComponent } from 'src/app/partials/fotter/fotter.component';
import { LayoutComponent } from './layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ScrollPaginationComponent } from '../scroll-pagination/scroll-pagination.component';
import { LeftMenubarComponent } from '../scroll-pagination/left-menubar/left-menubar.component';
import { MainMenubarComponent } from '../scroll-pagination/main-menubar/main-menubar.component';
import { RightMenubarComponent } from '../scroll-pagination/right-menubar/right-menubar.component';

// prettier-ignore
@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    FotterComponent,
    LayoutComponent,
    ScrollPaginationComponent,
    LeftMenubarComponent,
    RightMenubarComponent,
    MainMenubarComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ReactiveFormsModule
  ]
})
export class LayoutModule { }
