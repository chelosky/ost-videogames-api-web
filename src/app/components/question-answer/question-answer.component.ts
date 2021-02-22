import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-question-answer',
  templateUrl: './question-answer.component.html',
  styleUrls: ['./question-answer.component.css']
})
export class QuestionAnswerComponent {

  @Input() question: string;
  @Input() answer: string;
  constructor() { }

}
