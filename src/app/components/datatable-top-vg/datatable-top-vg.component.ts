import {AfterViewInit , OnInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { VideogamesService } from '../../services/videogames.service';
import { VideoGame } from '../../models/videogame.model';

@Component({
  selector: 'app-datatable-top-vg',
  templateUrl: './datatable-top-vg.component.html',
  styleUrls: ['./datatable-top-vg.component.css']
})
export class DatatableTopVgComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['_id', 'title', 'saga', 'description'];
  dataSource: MatTableDataSource<VideoGame> = new MatTableDataSource([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private videogameService: VideogamesService
  ) {
    this.videogameService.getVideogames()
    .subscribe((resp: any) => {
      console.log(resp);
      this.dataSource = new MatTableDataSource(resp.videogames);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    },(err) => {
      console.error(err);
    });
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
