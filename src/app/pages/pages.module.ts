import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { SharedModule } from '../shared/shared.module';


import { HomeComponent } from './home/home.component';
import { DocsComponent } from './docs/docs.component';
import { AboutComponent } from './about/about.component';
import { PagesComponent } from './pages.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent, 
    DocsComponent, 
    AboutComponent,
  ],
  exports: [
    PagesComponent,
    HomeComponent,
    DocsComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule,
    ComponentsModule
  ]
})
export class PagesModule { }
