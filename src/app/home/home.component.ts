import { Component, OnInit } from '@angular/core';
import{DatastreamService}from '../datastream.service'



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  homeLeave:any;
  homeDataMovies : any;
  imgPath:string="https://image.tmdb.org/t/p/w500"
  tirm : string ="";
  
  
 
  constructor(public _DatastreamService:DatastreamService) {
    _DatastreamService.getData().subscribe((data)=>{
      this.homeDataMovies= data.results;
      //console.log(data.results);
    }

    )
   }

  
   

  ngOnInit(): void {
  }

}
