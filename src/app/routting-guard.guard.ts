import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import{AuthdataService} from './authdata.service'
import{Router}from '@angular/router'

@Injectable({
  providedIn: 'root'
})

export class RouttingGuardGuard implements CanActivate {

  constructor(private _AuthdataService:AuthdataService,private _Router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     if( this._AuthdataService.cUsertoken.getValue()!=null){
       return true;
     }
     else{
      this._Router.navigate(['/LogIn'])
       return false;
     }
    
  }
  
}
