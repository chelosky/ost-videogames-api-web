import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

const PREFIX = 'soundtracks/'

@Injectable({
  providedIn: 'root'
})
export class SoundtracksService {

  constructor(
    private dataService: DataService
  ) { }

  getSoundtracks(){
    return this.dataService.get(`${environment.api}${PREFIX}/all`)
    .pipe(
      map(resp => {
        return resp['body'];
      })
    )
  }
}
