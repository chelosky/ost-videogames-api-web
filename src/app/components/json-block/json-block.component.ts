import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-json-block',
  templateUrl: './json-block.component.html',
  styleUrls: ['./json-block.component.css']
})
export class JsonBlockComponent implements OnInit {

  @Input() data: string;
  constructor() { }

  ngOnInit(): void {
  }

}
