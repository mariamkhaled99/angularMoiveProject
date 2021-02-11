import { Component, OnInit } from '@angular/core';
import{DatastreamService}from '../datastream.service'
@Component({
  selector: 'app-moives',
  templateUrl: './moives.component.html',
  styleUrls: ['./moives.component.scss']
})
export class MoivesComponent implements OnInit {
  homeLeave:any;
  homeMoives:any;
  imgPath:string="https://image.tmdb.org/t/p/w500"
  constructor(public _DatastreamService:DatastreamService) { 
    _DatastreamService.getMoives().subscribe((data)=>{
      this.homeMoives=data.results;
      console.log(data.results);
    }

    )
  }

  ngOnInit(): void {
  }

}
