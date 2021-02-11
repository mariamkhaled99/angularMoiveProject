import { Component, OnInit } from '@angular/core';
import{DatastreamService}from '../datastream.service'
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
homeLeave:any;
  homeMoives:any;
  imgPath:string="https://image.tmdb.org/t/p/w500"
  constructor(public _DatastreamService:DatastreamService) { 
    _DatastreamService.getPeople().subscribe((data)=>{
      this.homeMoives=data.results;
      console.log(data.results);
    }

    )
   }
   ngOnInit(): void {
  }
  }

 


