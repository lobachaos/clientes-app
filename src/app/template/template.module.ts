import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    HomeComponent
  ],
    exports: [
        NavbarComponent,
        SidebarComponent,
        HomeComponent
    ],
  imports: [
    CommonModule
  ]
})
export class TemplateModule { }