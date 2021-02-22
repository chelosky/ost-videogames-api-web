import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowcaseComponent } from './showcase/showcase.component';
import { DatatableTopVgComponent } from './datatable-top-vg/datatable-top-vg.component';

import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { QuestionAnswerComponent } from './question-answer/question-answer.component';


@NgModule({
  declarations: [
    ShowcaseComponent,
    DatatableTopVgComponent,
    QuestionAnswerComponent,
  ],
  exports: [
    ShowcaseComponent,
    DatatableTopVgComponent,
    QuestionAnswerComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class ComponentsModule { }
