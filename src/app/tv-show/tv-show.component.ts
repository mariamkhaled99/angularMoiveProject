import { Component, OnInit } from '@angular/core';
import{DatastreamService}from '../datastream.service'

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.scss']
})
export class TvShowComponent implements OnInit {
  homeLeave:any;
  homeMoives:any;
  imgPath:string="https://image.tmdb.org/t/p/w500"
  constructor(public _DatastreamService:DatastreamService) { 
    _DatastreamService.getTvShow().subscribe((data)=>{
      this.homeMoives=data.results;
      console.log(data.results);
    }

    )
  }

  ngOnInit(): void {
  }

}
