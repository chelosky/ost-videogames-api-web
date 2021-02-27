import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowcaseComponent } from './showcase/showcase.component';
import { DatatableTopVgComponent } from './datatable-top-vg/datatable-top-vg.component';

import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { QuestionAnswerComponent } from './question-answer/question-answer.component';
import { JsonBlockComponent } from './json-block/json-block.component';
import { HttpRequestBlockComponent } from './http-request-block/http-request-block.component';


@NgModule({
  declarations: [
    ShowcaseComponent,
    DatatableTopVgComponent,
    QuestionAnswerComponent,
    JsonBlockComponent,
    HttpRequestBlockComponent,
  ],
  exports: [
    ShowcaseComponent,
    DatatableTopVgComponent,
    QuestionAnswerComponent,
    JsonBlockComponent,
    HttpRequestBlockComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class ComponentsModule { }
