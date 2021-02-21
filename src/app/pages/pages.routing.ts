import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

/**
 * COMPONENTES
 */
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { DocsComponent } from './docs/docs.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
          {
            path: '',
            component: HomeComponent, data: { title: 'Home' }
            
          },
          {
            path: 'documentation',
            component: DocsComponent, data: { title: 'Documentation' }
            
          },
          {
            path: 'about',
            component: AboutComponent, data: { title: 'About' }
          }
        ]
    },
];

@NgModule({
    declarations: [],
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class PagesRoutingModule { }
  