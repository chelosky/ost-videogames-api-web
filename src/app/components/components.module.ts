import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowcaseComponent } from './showcase/showcase.component';
import { DatatableTopVgComponent } from './datatable-top-vg/datatable-top-vg.component';



@NgModule({
  declarations: [
    ShowcaseComponent,
    DatatableTopVgComponent,
  ],
  exports: [
    ShowcaseComponent,
    DatatableTopVgComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
