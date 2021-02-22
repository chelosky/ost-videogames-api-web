import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy {

  public titleSubs$: Subscription;
  constructor(
    private router:Router
  ) {
    this.titleSubs$ = this.getDataRuta()
                            .subscribe((resp) => {
                              document.title = `${environment.name} - ${resp.title}`;
                            });
  }

  ngOnDestroy(): void {
    this.titleSubs$.unsubscribe();
  }

  getDataRuta(){
    return this.router.events
    .pipe(
      filter(event => {
        return event instanceof ActivationEnd
      }),
      filter((event: ActivationEnd)=>{
        return event.snapshot.firstChild === null
      }),
      map((event: ActivationEnd) => {
        return event.snapshot.data
      })
    );
  }

}
