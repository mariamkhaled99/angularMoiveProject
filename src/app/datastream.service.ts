import { Injectable } from '@angular/core';
import{Observable, observable} from'rxjs';
import{HttpClient}from'@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatastreamService {

  constructor(public _HttpClient:HttpClient) {
  }

  getData():Observable<any>{

    return this._HttpClient.get("https://api.themoviedb.org/3/trending/movie/week?api_key=866cd3a065ef9304a549f1d65e494940")
  }
   getMoives():Observable<any>{

    return this._HttpClient.get("https://api.themoviedb.org/3/trending/tv/week?api_key=866cd3a065ef9304a549f1d65e494940")
  }

  getPeople():Observable<any>{

    return this._HttpClient.get("https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44")
  }
  getTvShow():Observable<any>{

    return this._HttpClient.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=eba8b9a7199efdcb0ca1f96879b83c44")
  }
  getNetworks():Observable<any>{

    return this._HttpClient.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=eba8b9a7199efdcb0ca1f96879b83c44")
  }
}
