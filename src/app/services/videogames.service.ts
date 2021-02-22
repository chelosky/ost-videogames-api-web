import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';


const PREFIX = 'videogames/'

@Injectable({
  providedIn: 'root'
})
export class VideogamesService {

  constructor(
    private dataService: DataService
  ) { }

  getVideogames(){
    return this.dataService.get(`${environment.api}${PREFIX}/all`)
    .pipe(
      map(resp => {
        return resp['body'];
      })
    )
  }
}
