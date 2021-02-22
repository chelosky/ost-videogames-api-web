import { Component, OnInit } from '@angular/core';
import { SoundtracksService } from '../../services/soundtracks.service';
import { VideogamesService } from '../../services/videogames.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  statusApi: boolean = true;
  totalVG: number = 0;
  totalOST: number = 0;

  constructor(
    private soundTrackService: SoundtracksService,
    private videogameService: VideogamesService
  ) { }

  ngOnInit(): void {
    // ALL OST
    this.soundTrackService.getSoundtracks()
    .subscribe((resp: any) => {
      this.totalOST = resp.count;
    },(err) => {
      console.error(err);
    });
    // ALL VGs
    this.videogameService.getVideogames()
    .subscribe((resp: any) => {
      this.totalVG = resp.count;
    },(err) => {
      console.error(err);
    });
  }

}
