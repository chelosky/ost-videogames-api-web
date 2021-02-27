import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-http-request-block',
  templateUrl: './http-request-block.component.html',
  styleUrls: ['./http-request-block.component.css']
})
export class HttpRequestBlockComponent implements OnInit {

  @Input() method: string;
  @Input() url: string;
  @Input() color: string;
  constructor() {}

  ngOnInit(): void {
    if(!this.color){
      this.color = 'green';
    }
  }

}
